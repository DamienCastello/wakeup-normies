<template>
  <div class="container">
    <div class="filter-sort-container">
      <!-- Barre de filtres et tri -->
      <div class="filters-sort-row">
        <div class="filters">
          <!-- Filtre par tags -->
          <div>
            <div class="label-filter">
              <TagIcon />
              <label for="tagFilter">{{ $t('articles.tag_filter') }} :</label>
            </div>
            <div class="pico">
              <select id="tagFilter" v-model="selectedTag" @change="fetchArticles(true)" class="tag-selector">
                <option value="">{{ $t('articles.all_tags') }}</option>
                <option v-for="tag in allTags" :key="tag.id" :value="tag.name">
                  {{ tag.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- Tri par date (par défaut) ou par likes -->
        <div class="sort">
          <div class="label-filter">
            <SortIcon />
            <label class="pico">{{ $t('articles.sort_by') }} :</label>
          </div>
          <div class="pico">
            <select v-model="sortBy" @change="fetchArticles(true)" class="sort-selector">
              <option value="createdAt">{{ $t('articles.sort_near') }}</option>
              <option value="likes">{{ $t('articles.sort_likes') }}</option>
            </select>
          </div>
        </div>
          
        </div>

        <!-- Filtre par intervalle de dates -->
        <div class="filter date-filter">
            <label>{{ $t('articles.date_filter') }} :</label>
            <VueDatePicker v-model="dateRange" :placeholder="$t('articles.date_placeholder')" range is-range
              @update:model-value="fetchArticles(true)" :input-class="'custom-datepicker-input'" />
          </div>
      </div>

      <!-- Barre de recherche -->
      <div class="search-row">
        <!-- Filtre par nom -->
        <div>
          <div class="label-filter">
            <SearchIcon />
            <label for="nameFilter">{{ $t('articles.name_filter') }} :</label>
          </div>
          <div class="pico">
            <input type="text" id="nameFilter" v-model="nameFilter" @input="fetchArticles(true)"
              :placeholder='$t("articles.name_placeholder")' />
          </div>
        </div>
      </div>
    </div>

    <!-- Grille des articles -->
    <div v-if="state === 'error'">
      <p>{{ $t('articles.state_error') }}</p>
    </div>
    <div v-else class="articles-grid pico" :aria-busy="state === 'loading'">
      <div v-for="(article, index) in articles" :key="index" class="card"
        @click="navigateToArticle(article.id)">
        <img v-if="article.urlYoutube" :src="getYoutubeThumbnail(article.urlYoutube)" alt="Preview"
          class="card-image" />
        <img v-else-if="article.preview" :src="`${url.baseUrl}:${url.portBack}/${article.preview}`" alt="Preview"
          class="card-image" />
        <div class="card-content">
          <h2>{{ article.title }}</h2>
          <p class="description">
            {{
              article.description.length > 200
                ? article.description.slice(0, 200) + "..."
                : article.description
            }}
          </p>
          <div class="badge-container">
            <p class="badge" v-for="(tag, index) in article.tags" :key="index">
              {{ tag.name }}
            </p>
          </div>
        </div>
      </div>
      <p v-if="articles.length === 0">{{ $t('articles.empty_list') }}</p>
    </div>
  </div>
  <notifications position="bottom right" />
</template>


<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import url from "../utils/url";
import getYoutubeThumbnail from "../utils/getYoutubeThumbnail";
import { useNotification } from "@kyvg/vue3-notification";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import TagIcon from "./icons/TagIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import SortIcon from "./icons/SortIcon.vue";
import { useI18n } from "vue-i18n";

const articles = ref([]);
const state = ref("loading");
const selectedTag = ref("");
const nameFilter = ref("");
const dateRange = ref(null);
const sortBy = ref("createdAt");
const dateSort = ref("desc");
const router = useRouter();
const { notify } = useNotification();
const allTags = ref([]);
const { t } = useI18n();

const limit = ref(10);
const offset = ref(0);
const isFetching = ref(false);

const fetchArticles = async (reset = false) => {
  if (isFetching.value) return;
  isFetching.value = true;

  if (reset) {
    articles.value = [];
    offset.value = 0;
    state.value = "loading";
  }

  try {
    const response = await axios.get(`${url.baseUrl}:${url.portBack}/api/v1/articles`, {
      params: {
        limit: limit.value,
        offset: offset.value,
        tag: selectedTag.value || null,
        search: nameFilter.value || null,
        dateFrom: dateRange.value?.[0] || null,
        dateTo: dateRange.value?.[1] || null,
        sortBy: sortBy.value,
        sortOrder: dateSort.value,
      },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.data.articles.length > 0) {
      articles.value.push(...response.data.articles);
      offset.value += limit.value;
    } else {
      state.value = "end";
    }
  } catch (error) {
    notify({
      title: t('notification.title.articles_fetch'),
      type: "error",
      text: error.response?.data?.message || "Erreur de chargement",
    });
    state.value = "error";
  } finally {
    isFetching.value = false;
  }
};

// Détection du scroll
const handleScroll = () => {
  if (isFetching.value || state.value === "end") return;

  const bottomReached = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
  if (bottomReached) fetchArticles();
};

onMounted(() => {
  fetchArticles();
  axios.get(`${url.baseUrl}:${url.portBack}/api/v1/tags`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      allTags.value = response.data.tags
    })
    .catch((error) => {
      notify({
      title: t('notification.title.articles_fetch'),
      type: "error",
      text: error.response?.data?.message || "Erreur de chargement",
    });
    state.value = "error";
    })
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Recharger les articles quand un filtre change
watch([selectedTag, nameFilter, dateRange, sortBy], () => {
  fetchArticles(true);
});

const navigateToArticle = (id) => {
  router.push(`/articles/${id}`);
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 16px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.card {
  cursor: pointer;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  display: block;
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.card-content h2 {
  font-size: 18px;
  margin: 0 0 8px 0;
}

.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  min-height: 60px;
}

.badge-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: auto;
}

.badge {
  background-color: rgb(64, 64, 191);
  color: #ffffff !important;
  font-size: 12px !important;
  padding: 4px 8px;
  border-radius: 12px;
  display: inline-block;
  margin: 3px 3px !important;
}

.filter-sort-container {
  width: 100%;
  max-width: 860px;
}

.filters-sort-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.date-filter{
  min-height: 115px;
}

.filters {
  display: flex;
  gap: 16px;
}

.sort {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.search-row {
  margin-top: 16px;
}

.sort-selector {
  width: 100%;
  max-width: 250px;
}

.filters > div {
  display: flex;
  flex-direction: column;
  min-width: 200px;
}

.tag-selector {
  width: 100%;
  min-width: 200px;
}

.label-filter {
  margin-bottom: 4px;
  color: #5e5e5e;
}

.dp-input {
  min-width: 350px !important;
}

.label-filter i {
  margin-right: 8px;
}

.filter label {
  margin-bottom: 4px;
}

.vue-datepicker {
  max-width: 200px;
}

/* Bordure autour du champ d'entrée */
.dp__theme_light {
  --dp-border-color-focus: #6400e4;
}
</style>

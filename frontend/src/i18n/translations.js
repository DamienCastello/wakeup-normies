import { createI18n } from "vue-i18n";

const messages = {
    en: {
        navigation: {
            language_en: "English",
            language_fr: "French",
            validations: "Validations",
            articles: "Articles",
            publish: "Publish",
            login: "Login",
            signup: "Signup",
            account: "Account",
            profile: "My profile",
            logout: "Logout",
        },
        auth: {
            login: {
                title: "Login",
                field_email: "Email",
                field_password: "Password"
            },
            signup: {
                title: "Create account",
                field_pseudo: "Pseudo",
                field_email: "Email",
                field_password: "Password",
                field_avatar: "Avatar (optional)",
                button: "Sign up",
                placeholder_file: "No file selected",
            }
        },
        notification: {
            title: {
                login: "Log In",
                signup: "Sign Up",
                article_fetch: "Fetching Article",
                articles_fetch: "Fetching Articles",
                validations_fetch: "Fetching Articles Awaiting To Validation",
                validation: "Validation",
                validation_fetch: "Fetching Article Awaiting To Validation",
                tag_exists: "Tag Conflict",
                tag_create: "Tag Create",
                error_tag_create: "Error Creating Tag",
                error_tags_fetch: "Error Fetching Tags",
                field_media_required: "Selecting Resource",
                article_create: "Article Create",
                like_comment: "Liking Comment",
                like_article: "Liking Article",
                comment_create: "Commenting Article",
                new_badge: "New Badge Obtained",
                profile_error_user_fetch: "Error Fetching User",
                profile_error_avatar_update: "Error Updating Avatar",
                report_reason: "Report Reason",
                report_create: "Report",
            },
            text: {
                invalid_tags: "Some tag(s) not validated",
                invalid_fields: "Some field(s) not validated",
                valid_tags: "Tags validated successfully !",
                error_tags_validation: "Error updating tags validation",
                valid_article: "Article validated successfully !",
                error_article_validation: "Error updating article validation",
                error_parse_refusalReasons: "Error parsing refusalReasons",
                error_article_fetch: "Error fetching article",
                tag_exists: "This tag already exists !",
                tag_create: "Tag created successfully !",
                field_media_required: "Please select an image or include a YouTube URL !",
                field_media_url: "Please Select a valid Youtube URL !",
                article_create: "Article created successfully !",
                like_comment_error_load: "Comment is not loaded or missing ID !",
                like_comment_error_auth: "You must be authenticated to like a comment.",
                like_article_error_auth: "You must be authenticated to like an article.",
                comment_error_auth: "User not logged in. Unable to post comment.",
                comment_error_content_required: "Comment can not be empty.",
                comment_create: "Comment created successfully !",
                new_badge: "You have won the badge",
                report_reason: "Please select a reason.",
                report_article_create: "Article reported successfully !",
                report_comment_create: "Comment reported successfully !",
                report_error: "An error occurs, please retry.",
                log_error_language: "Error back side when changing language: "
            }
        },
        article_detail: {
            state_loading: "Loading article ...",
            state_error: "Unable to load this article",
            report: "Report article"
        },
        articles: {
            tag_filter: "Filter by tags",
            all_tags: "All tags",
            name_filter: "Filter by name",
            name_placeholder: "Search by name",
            sort_by: "Sort by",
            sort_near: "The closest",
            sort_likes: "The most liked",
            date_filter: "Filter by date range",
            date_placeholder: "Date range",
            state_error: "Unable to load articles",
            empty_list: "No articles found"
        },
        validate: {
            title: "Validation of tags",
            save_button: "Update",
            sub_title: "Validation of article fields",
            label_title: "Title",
            placeholder_title: "Reason for refusal of title",
            label_video: "Vidéo",
            placeholder_video: "Reason for refusal of vidéo",
            label_preview: "Preview",
            placeholder_preview: "Reason for refusal of preview",
            label_description: "Description",
            placeholder_description: "Reason for refusal of description",
            sub_title_final: "General validation of the article",
            placeholder_final: "Overall reasons for refusal of article",
            tags_title: "Tags validation",
            th_tag: "Tag",
            th_validate: "Validate",
            th_refuse: "Refuse",
            th_reason: "Reason",
            th_save: "Save",
            placeholder_tags: "Reason for refusal of tags"
        },
        publish: {
            placeholder_file: "No file selected",
            preview: "Preview",
            state_error: "Unable to load data",
            state_loading: "Loading ...",
            title: "Publish new article",
            placeholder_title: "My zinzito article",
            switch_video: "Include a youtube video",
            label_title: "Title",
            label_description: "Description",
            label_tags: "Choose one or more tags",
            new_tag: "Create a new tag",
            placeholder_tag: "Some tag",
            add_button: "Add",
            tag_required: "Select at least one tag.",
            submit_button: "Publish"
        },
        comments: {
            title: "Comments",
            auth_required: "Log in to leave a comment.",
            placeholder_comment: "My crazy comment",
            label_comment: "Leave a comment",
            label_textarea: "Input area",
            submit_button: "Submit"
        },
        profile: {
            title: "profile",
            state_loading: "Loading data ...",
        },
        report: {
            title: "Report",
            title_subject_article: "article",
            title_subject_comment: "comment",
            state_error: "Unable to report ",
            state_loading: "Loading ...",
            error_subject_article: "the article",
            error_subject_comment: "the comment",
            pre_content: "If you think that",
            content_subject_article: "this article",
            content_subject_comment: "this comment",
            post_content: "violates the rules or contains inappropriate information, you can report it here.",
            label_reason_select: "Reason for reporting",
            option_default: "Choose a reason",
            option_spam: "Spam",
            option_content: "Inappropriate content",
            option_copyright: "Copyright infringement",
            option_other: "Other",
            label_fields_select: "Problematic fields",
            option_title: "Title",
            option_description: "Description",
            option_video: "Video content",
            option_preview: "Preview image",
            label_textarea: "Details (optional)",
            placeholder_textarea: "Explain why you are reporting ",
            submit_button: "Report",
            submitting: "Submitting ...",
            reason_title: "Problem detected in title.",
            reason_description: "Problem detected in description.",
            reason_video: "Problem detected in video content.",
            reason_preview: "Problem detected in preview image."
        }
    },
    fr: {
        navigation: {
            language_en: "Anglais",
            language_fr: "Français",
            validations: "Validations",
            articles: "Articles",
            publish: "Publier",
            login: "Se connecter",
            signup: "S'inscrire",
            account: "Compte",
            profile: "Mon profil",
            logout: "Se déconnecter",
        },
        auth: {
            login: {
                title: "Se connecter",
                field_email: "Email",
                field_password: "Mot de passe"
            },
            signup: {
                title: "Créer un compte",
                field_pseudo: "Pseudo",
                field_email: "Email",
                field_password: "Mot de passe",
                field_avatar: "Avatar (optionnel)",
                button: "S'inscrire",
                placeholder_file: "Aucun fichier choisi",
            }
        },
        notification: {
            title: {
                login: "Connexion",
                signup: "Inscription",
                article_fetch: "Récupération de l'article",
                articles_fetch: "Récupération des articles",
                validations_fetch: "Récupération des articles en attente de validation",
                validation: "Validation",
                validation_fetch: "Récupération de l'article en attente de validation",
                tag_exists: "Conflit de tag",
                tag_create: "Création d'un tag",
                error_tag_create: "Erreur lors de la création du tag",
                error_tags_fetch: "Erreur lors de la récupération des tags",
                field_media_required: "Sélection d'une ressource",
                article_create: "Création d'un article",
                like_comment: "J'aime un commentaire",
                like_article: "J'aime un article",
                comment_create: "Commentaire sur un article",
                new_badge: "Nouveau badge obtenu",
                profile_error_user_fetch: "Erreur lors de la récupération de l'utilisateur",
                profile_error_avatar_update: "Erreur lors de la mise à jour de l'avatar",
                report_reason: "Motif du signalement",
                report_create: "Signalement"
            },
            text: {
                invalid_tags: "Certains tag(s) ne sont pas validés",
                invalid_fields: "Certains champ(s) ne sont pas validés",
                valid_tags: "Tags validés avec succès !",
                error_tags_validation: "Erreur lors de la mise à jour de la validation des tags",
                valid_article: "Article validé avec succès !",
                error_article_validation: "Erreur lors de la mise à jour de la validation de l'article",
                error_parse_refusalReasons: "Erreur lors de l'analyse des motifs de refus",
                error_article_fetch: "Erreur lors de la récupération de l'article",
                tag_exists: "Ce tag existe déjà !",
                tag_create: "Tag créé avec succès !",
                field_media_required: "Veuillez sélectionner une image ou inclure une URL YouTube !",
                field_media_url: "Veuillez sélectionner une URL YouTube valide !",
                article_create: "Article créé avec succès !",
                like_comment_error_load: "Le commentaire n'est pas chargé ou l'ID est manquant !",
                like_comment_error_auth: "Vous devez être authentifié pour aimer un commentaire.",
                like_article_error_auth: "Vous devez être authentifié pour aimer un article.",
                comment_error_auth: "Utilisateur non connecté. Impossible de publier un commentaire.",
                comment_error_content_required: "Le commentaire ne peut pas être vide.",
                comment_create: "Commentaire créé avec succès !",
                new_badge: "Vous avez remporté le badge",
                report_reason: "Veuillez sélectionner un motif.",
                report_article_create: "Article signalé avec succès !",
                report_comment_create: "Commentaire signalé avec succès !",
                report_error: "Une erreur s'est produite, veuillez réessayer.",
                log_error_language: "Erreur lors du changement de langue côté serveur"
            }
        },
        article_detail: {
            state_loading: "Chargement de l'article ...",
            state_error: "Impossible de charger cet article",
            report: "Signaler l'article"
        },
        articles: {
            tag_filter: "Filtrer par tags",
            all_tags: "Tous les tags",
            name_filter: "Filtrer par nom",
            name_placeholder: "Rechercher par nom",
            sort_by: "Trier par",
            sort_near: "Les plus récents",
            sort_likes: "Les plus likés",
            date_filter: "Filtrer par intervalle de dates",
            date_placeholder: "Plage de dates",
            state_error: "Impossible de charger les articles",
            empty_list: "Aucun article trouvé"
        },
        validate: {
            title: "Validation des tags",
            save_button: "Enregistrer",
            sub_title: "Validation des champs de l'article",
            label_title: "Titre",
            placeholder_title: "Motif du refus du titre",
            label_video: "Vidéo",
            placeholder_video: "Motif du refus de la vidéo",
            label_preview: "Preview",
            placeholder_preview: "Motif du refus de l'image",
            label_description: "Description",
            placeholder_description: "Motif du refus de la description",
            sub_title_final: "Validation générale de l'article",
            placeholder_final: "Motif du refus de l'article",
            tags_title: "Validation des tags",
            th_tag: "Tag",
            th_validate: "Valider",
            th_refuse: "Refuser",
            th_reason: "Raison",
            th_save: "Enregistrer",
            placeholder_tags: "Motif du refus des tags"
        },
        publish: {
            placeholder_file: "Aucun fichier choisi",
            preview: "Image d'illustration",
            state_error: "Impossible de charger les données",
            state_loading: "Chargement ...",
            title: "Publier un nouvel article",
            placeholder_title: "Mon article de zinzin",
            switch_video: "Inclure une vidéo youtube",
            label_title: "Titre",
            label_description: "Description",
            label_tags: "Choisir un ou plusieurs tags",
            new_tag: "Créer un nouveau tag",
            placeholder_tag: "un tag",
            add_button: "Ajouter",
            tag_required: "Sélectionnez au moins un tag.",
            submit_button: "Publier l'article"
        },
        comments: {
            title: "Commentaires",
            auth_required: "Connectez-vous pour laisser un commentaire.",
            placeholder_comment: "Mon commentaire de zinzin",
            label_comment: "Laisser un commentaire",
            label_textarea: "Zone de saisie",
            submit_button: "Envoyer"
        },
        profile: {
            title: "Profil de",
            state_loading: "Chargement des données ...",
        },
        report: {
            title: "Signaler un",
            title_subject_article: "article",
            title_subject_comment: "commentaire",
            state_error: "Impossible de signaler",
            state_loading: "Chargement ...",
            error_subject_article: "l'article",
            error_subject_comment: "le commentaire",
            pre_content: "Si vous pensez que",
            content_subject_article: "cet article",
            content_subject_comment: "ce commentaire",
            post_content: "enfreint les règles ou contient des informations inappropriées, vous pouvez le signaler ici.",
            label_reason_select: "Raison du signalement",
            option_default: "Choisissez une raison",
            option_spam: "Spam",
            option_content: "Contenu inapproprié",
            option_copyright: "Infraction de droits d'auteur",
            option_other: "Autre",
            label_fields_select: "Champs posant problème",
            option_title: "Titre",
            option_description: "Description",
            option_video: "Contenu vidéo",
            option_preview: "Image d'illustration",
            label_textarea: "Détails (optionnel)",
            placeholder_textarea: "Expliquez pourquoi vous signalez ",
            submit_button: "Signaler",
            submitting: "Envoi en cours ...",
            reason_title: "Problème détecté dans le titre.",
            reason_description: "Problème détecté dans la description.",
            reason_video: "Problème détecté dans le contenu vidéo.",
            reason_preview: "Problème détecté dans l'image d'illustration."
        }
    },
};

const i18n = createI18n({
    locale: "fr",
    fallbackLocale: "en",
    messages,
});

export default i18n;

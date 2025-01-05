const models = require('../models');
const Comment = models.Comment;

module.exports = {
    create: function (req, res, next) {
        const { content, articleId } = req.body;
        const userId = req.user.id;
    
        Comment.create({
            content,
            articleId,
            userId
        })
        .then((comment) => {
            res.status(201).json(comment);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Impossible de créer le commentaire.' });
        })
    },
    update: function (req, res, next) {
        const { content, articleId } = req.body;
        const userId = req.user.id;

        Comment.findByPk(req.body.id)
            .then((comment) => { 
                comment.update({
                    content: content,
                    articleId: articleId,
                    userId: userId
                })
                .then((updatedComment) => { res.json({ updatedComment }); })
                .catch((error) => { 
                    console.error('error: ', error.message);
                    res.status(500).json({ message: 'Impossible de créer le commentaire.' });
                })
             })
            .catch((error) => { 
                console.error('error: ', error.message);
                res.status(500).json({ message: 'Internal server error.' });
             })


    },    
    delete: function(req, res, next) {
        Comment.findByPk(req.body.id)
            .then((comment) => { 
                comment.destroy()
                res.status(200).json(`Comment ${comment.id} supprimé.`); 
            })
            .catch((error) => { 
                console.error('error: ', error.message);
                res.status(500).json({ message: 'Internal server error.' });
             })
    }
}
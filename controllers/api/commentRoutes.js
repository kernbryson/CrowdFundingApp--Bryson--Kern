const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newComment = {
      description: req.body.description,
      user_id: req.session.user_id,
      project_id: req.body.project_id,
    };
    const commentData = await Comment.create(newComment);
    res.json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

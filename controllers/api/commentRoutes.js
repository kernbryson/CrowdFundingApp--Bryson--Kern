const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');
router.post('/', withAuth, async (req, res) => {
  try {
    Comment.create({
      ...req.body,
      userId: req.session.userId,
    }).then((newComment) => {
      res.json(newComment);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

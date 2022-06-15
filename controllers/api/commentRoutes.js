const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    Comment.create({
      ...req.body,
      userId: req.session.userId,
    }).then((newComment) => {
      res.json(newComment);
      console.log(newComment);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { createComment, getCommentsByBlogId } = require('../controllers/commentController');

router.route('/').post(createComment);
router.route('/:blogId').get(getCommentsByBlogId);

module.exports = router;

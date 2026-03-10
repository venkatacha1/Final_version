const Comment = require('../models/Comment');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Create new comment
// @route   POST /api/comments
// @access  Public
const createComment = asyncHandler(async (req, res) => {
    const { name, email, message, blogId } = req.body;

    if (!name || !email || !message || !blogId) {
        res.status(400);
        throw new Error('Please provide all required fields');
    }

    const comment = await Comment.create({
        name,
        email,
        message,
        blogId
    });

    if (comment) {
        res.status(201).json({
            success: true,
            data: comment,
            message: 'Comment added successfully!'
        });
    } else {
        res.status(400);
        throw new Error('Invalid comment data');
    }
});

// @desc    Get comments by blog ID
// @route   GET /api/comments/:blogId
// @access  Public
const getCommentsByBlogId = asyncHandler(async (req, res) => {
    const comments = await Comment.find({ blogId: req.params.blogId }).sort({ createdAt: -1 });
    res.json({
        success: true,
        data: comments
    });
});

module.exports = {
    createComment,
    getCommentsByBlogId
};

const { Comment } = require('../models');

const commentInfo = [
    {
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 5,
        post_id: 4
    }
];

const commentSeed = () => Comment.bulkCreate(commentInfo);

module.exports = commentSeed;
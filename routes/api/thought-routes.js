const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// set up GET all thoughts at /api/thoughts
router.route('/').get(getAllThought);

// Set up POST /api/thoughts/:userId
router.route('/').post(addThought);

// Set up GET one and DELETE thought at /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .delete(removeThought);

// Set up POST and DELETE reaction at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;
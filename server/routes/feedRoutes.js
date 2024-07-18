

const express = require('express' );
const router = express.Router();

let feedController = require('../controllers/feedController.js');

router.route('/')
    .get(feedController.getfeedItems)
    .post(feedController.savefeedItem);



router.route("/:feedItemId")
    .get(feedController.getfeedItem)
    .delete(feedController.deletefeedItem)
    .post(feedController.updatefeedItem)
    .patch(feedController.replacefeedItem)



module.exports = router; 

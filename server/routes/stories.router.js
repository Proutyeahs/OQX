const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// post story into the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body)
        const query = `
    INSERT INTO "stories" (
        "displayName", 
        "story", 
        "timeline_id", 
        "user_id",
        "authorized"
    )
    VALUES ($1, $2, $3, $4, false)
    ;`;
        pool.query(query, [req.body.displayName, req.body.story, req.body.timelineEvent, req.user.id]).then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
});

module.exports = router;
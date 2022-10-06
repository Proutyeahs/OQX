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

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log("stories", req.params)
    const query = `
    SELECT "title", "stories".* FROM "timeline"
    JOIN "stories"
    ON "stories".timeline_id = "timeline".id
    WHERE "stories".authorized = false
  ;`;
    pool.query(query).then(result => {
        console.log("userStories", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id)
    const query = `
    UPDATE "stories"
        SET "authorized" = true
        WHERE "id" = $1
    ;`;
    pool.query(query, [req.params.id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const query = `
        DELETE FROM "stories"
        WHERE "id" = $1
    ;`;
    pool.query(query, [req.params.id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
})

module.exports = router;
const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const {
    rejectUnauthenticatedAdmin,
} = require('../modules/authenticationAdmin-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// post story into the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('Stories.router.js POST route:', req.body)
    const query = `
    INSERT INTO "stories" ("user_id", "story", "authorized","timeline_id")
    VALUES ($1, $2, $4, $3)
    ;`;
    // "displayName", 
    pool.query(query, [req.body.user_id, req.body.story, req.body.timelineEvent, 'false']).
        then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
});

// gets unapproved user storys for the admin to review
router.get('/', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
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

// gets approved stories for an event
router.get('/:id', (req, res) => {
    console.log("stories", req.params)
    const query = `
    SELECT * FROM "stories"
    WHERE ("stories".authorized = $2 AND $1 = "timeline_id")
    ;`;
    pool.query(query, [req.params.id, 'true'])
        .then(result => {
            console.log("userStories", result.rows)
            res.send(result.rows)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
});

// updates user submited stories to approved
router.put('/:id', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
    console.log(req.params.id)
    const query = `
    UPDATE "stories"
        SET "authorized" = $2
        WHERE "id" = $1
    ;`;
    pool.query(query, [req.params.id, 'true']).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// deletes a story
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

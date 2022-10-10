const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const {
    rejectUnauthenticatedAdmin,
} = require('../modules/authenticationAdmin-middleware');
const router = express.Router();

// post event into the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body)
    if (req.user.admin) {
        const query = `
    INSERT INTO "timeline" (
        "title", 
        "date", 
        "image", 
        "info", 
        "references", 
        "category_id",
        "authorized"
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ;`;
        pool.query(query, [req.body.title, req.body.date, req.body.image, req.body.info, req.body.references, req.body.category_id, 'true']).then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    } else {
        const query = `
    INSERT INTO "timeline" (
        "title", 
        "date", 
        "image", 
        "info", 
        "references", 
        "category_id",
        "authorized"
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ;`;
        pool.query(query, [req.body.title, req.body.date, req.body.image, req.body.info, req.body.references, req.body.category_id, 'false']).then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    }
});

// gets the data for a specific timeline by the category_id
router.get('/:id', (req, res) => {
    console.log("timeline", req.params)
    const query = `
    SELECT * FROM "timeline"
    WHERE ("timeline".category_id = $1 AND "timeline".authorized = $2 )
  ;`;
    pool.query(query, [req.params.id, 'true']).then(result => {
        console.log("timeline", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// gets the data for a the admin to approve
router.get('/admin/:id', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
    console.log("admin", req.params)
    const query = `
    SELECT * FROM "timeline"
    WHERE ("timeline".category_id = $1 AND "timeline".authorized = $2 )
  ;`;
    pool.query(query, [req.params.id, 'false']).then(result => {
        console.log("admin", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// gets the data for one specific event
router.get('/specific/:id', (req, res) => {
    console.log("specific event", req.params)
    const query = `
    SELECT * FROM "timeline"
    WHERE "timeline".id = $1
  ;`;
    pool.query(query, [req.params.id]).then(result => {
        console.log("timeline", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// Gets the Events based on the user's input.
router.post('/search', (req, res) => {
    console.log("In router. Getting events based on this search: ", req.body.payload, req.body.category);

    const queryItems = [req.body.payload, req.body.category]
    const queryText = `
    SELECT * FROM "timeline"
    WHERE ("timeline".title ILIKE $1 or "timeline".info ILIKE $1 AND "timeline".category_id = $2);
    `;

    pool.query(queryText, queryItems)
        .then(result => {
            console.log('Result', result.rows);
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error on post route: ', err);
            res.sendStatus(500);
        })
})

// updates a specific event with the new data
router.put('/:id', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
    console.log(req.body)
    const query = `
    UPDATE "timeline"
        SET "title" = $1, "date" = $2, "image" = $3, "info" = $4, "references" = $5, "category_id" = $6, "authorized" = $8
        WHERE "id" = $7 
    ;`;
    pool.query(query, [req.body.title, req.body.date, req.body.image, req.body.info, req.body.references, req.body.category_id, req.params.id, 'true']).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// deletes an event and all user stories tied to the event
router.delete('/:id', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
    const query1 = `
        DELETE FROM "stories"
        WHERE "stories".timeline_id = $1
        ;`;
    const query = `
        DELETE FROM "timeline"
        WHERE "id" = $1
    ;`;
    pool.query(query1, [req.params.id]).then(result => {
        pool.query(query, [req.params.id]).then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    })
})

module.exports = router;
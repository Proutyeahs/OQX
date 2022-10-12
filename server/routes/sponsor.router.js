const express = require('express');

// verifies user is logged in
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// verifies admin is logged in
const {
    rejectUnauthenticatedAdmin,
} = require('../modules/authenticationAdmin-middleware');

const pool = require('../modules/pool');
const router = express.Router();

// sponsors available for everyone to view
router.get('/', (req, res) => {
    console.log("sponsor", req.params)
    const query = `
    SELECT * FROM "sponsor"
    ;`;
    pool.query(query).then(result => {
        console.log("sponsor", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// sponsors available for admin to edit and delete
router.get('/:id', rejectUnauthenticatedAdmin, (req, res) => {
    console.log("sponsor", req.params.id)
    const query = `
    SELECT * FROM "sponsor" WHERE id =$1
    ;`;
    pool.query(query, [req.params.id]).then(result => {
        console.log("sponsor", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// posting new sponsors by admin only
router.post('/', rejectUnauthenticatedAdmin, (req, res) => {
    console.log("in POST sponsor:", req.params)
    const query = `
    INSERT INTO "sponsor" ("company", "image", "levelOfDonation")
VALUES  ($1, $2, $3)
    `;
    pool.query(query, [req.body.company, req.body.image, req.body.levelOfDonation]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// updating sponsors by admin only
router.put('/:id', rejectUnauthenticatedAdmin, (req, res) => {
    console.log("edit sponsor:", req.body)
    const query = `
    UPDATE "sponsor"
    SET "company" = $1, "image" = $2, "levelOfDonation" = $3
    WHERE "id" = $4
    ;`;
    pool.query(query, [req.body.company, req.body.image, req.body.levelOfDonation, req.body.id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// deleting sponsors by admin only
router.delete('/:id', rejectUnauthenticatedAdmin, (req, res) => {
    const query = `
    DELETE FROM "sponsor"
    WHERE "id" = $1
    ;`;
    pool.query(query, [req.params.id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

module.exports = router;
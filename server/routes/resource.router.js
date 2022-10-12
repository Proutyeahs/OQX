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

// resources available for everyone to view
router.get('/', (req, res) => {
    console.log("resource", req.params)
    const query = `
    SELECT * FROM "resources"
    ;`;
    pool.query(query).then(result => {
        console.log("resource", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// resources available for admin to edit and delete
router.get('/:id', rejectUnauthenticatedAdmin, (req, res) => {
    console.log("resource", req.params.id)
    const query = `
    SELECT * FROM "resources" WHERE id =$1
    ;`;
    pool.query(query, [req.params.id]).then(result => {
        console.log("resource", result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// posting new resources by admin only
router.post('/', rejectUnauthenticatedAdmin, (req, res) => {
    console.log("in POST resource:", req.params)
    const query = `
    INSERT INTO "resources" ("name", "phoneNumber", "address", "category_id")
VALUES  ($1, $2, $3, $4)
    `;
    pool.query(query, [req.body.name, req.body.phoneNumber, req.body.address, req.body.category_id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// updating resource by admin only
router.put('/:id', rejectUnauthenticatedAdmin, (req, res) => {
    console.log("edit resource:", req.body)
    const query = `
    UPDATE "resources"
    SET "name" = $1, "phoneNumber" = $2, "address" = $3, "category_id" = $4
    WHERE "id" = $5
    ;`;
    pool.query(query, [req.body.name, req.body.phoneNumber, req.body.address, req.body.category_id, req.body.id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

// deleting resource by admin only
router.delete('/:id', rejectUnauthenticatedAdmin, (req, res) => {
    const query = `
    DELETE FROM "resources"
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
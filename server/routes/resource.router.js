const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const {
    rejectUnauthenticatedAdmin,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// gets the data for the resources
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

// gets a specific resource for editing
router.get('/:id', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
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

// posts a new resource
router.post('/', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
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

// updates a resource
router.put('/:id', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
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

// deletes a resource
router.delete('/:id', rejectUnauthenticated, rejectUnauthenticatedAdmin, (req, res) => {
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
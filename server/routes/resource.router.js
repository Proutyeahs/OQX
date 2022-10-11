const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// gets the data for a specific timeline by the category_id
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

router.post('/', (req, res) => {
    console.log("in POST resource:", req.params)
    const query = `
    INSERT INTO "resources" ("name", "phoneNumber", "address", "category_id")
VALUES  ($1, $2, $3, $4)
    `;
    pool.query(query,[req.body.name, req.body.phoneNumber, req.body.address, req.body.category_id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

module.exports = router;
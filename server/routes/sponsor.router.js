const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();


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

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
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

router.put('/:id', rejectUnauthenticated, (req, res) => {
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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
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
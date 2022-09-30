const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// post event into the database
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body)
    const query = `
    INSERT INTO "timeline" (
        "title", 
        "date", 
        "image", 
        "info", 
        "references", 
        "category_id",
        "approved"
    )
    VALUES ($1, $2, $3, $4, $5, $6, true)
    ;`;
    pool.query(query, [req.body.title, req.body.date, req.body.image, req.body.info, req.body.references, req.body.category_id]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
});

module.exports = router;
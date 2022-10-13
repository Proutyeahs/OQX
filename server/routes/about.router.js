const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const {
    rejectUnauthenticatedAdmin,
} = require('../modules/authenticationAdmin-middleware');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `SELECT * FROM "aboutCRUD";`;
    pool.query(query)
    .then(result => {
        console.log('Get on the about.router');
        console.log(result.rows)
        res.send(result.rows)
    })
    .catch(err => {
        console.log(err)
        console.log('Error on get');
        res.sendStatus(500)
    })
});

module.exports = router;
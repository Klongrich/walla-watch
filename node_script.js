const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const con = mysql.createConnection({
    host: 'xxxxxxxx',
    user: 'xxxxxx',
    password: "xxxxxx",
    database: "xxxxxxx"
});

con.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection established');
});


app.get('/fur', function (req, res, next) {
    con.query('SELECT * FROM meat WHERE fur = 2', function (error, results, fields) {
        if (error) throw error;
        console.log(results[0]);
        console.log(results[1].tokenID);

        res.send(results);
    });
})


con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
});
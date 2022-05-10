const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.get('/api/categories/', (req, res, next) => {


        // sql to get all facts
        connection.query(`SELECT * FROM shop_categories_table`, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }

            res.json({ result })

        });

    });
}
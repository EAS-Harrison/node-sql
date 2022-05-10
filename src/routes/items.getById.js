const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.get('/api/items/:id', (req, res, next) => {

        connection.query(`SELECT * FROM shop_item_table WHERE id=?`, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }

            res.json({ facts: result })

        });

    });
}
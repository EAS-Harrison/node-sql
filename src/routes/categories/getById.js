const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.get('/api/categories/:id', (req, res, next) => {

        connection.query(`SELECT * FROM shop_categories_table WHERE id=?`, req.params.id, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }

            res.json({ result })

        });

    });
}
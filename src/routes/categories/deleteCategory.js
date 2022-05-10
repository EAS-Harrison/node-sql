const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {

    app.delete('/api/categories/:id', (req, res, next) => {
        query = `DELETE FROM shop_categories_table WHERE id=?`

        connection.query(query, req.params.id, function (err, result, fields) {

            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json({ result })

        });
    })
}
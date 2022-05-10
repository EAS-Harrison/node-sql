const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.patch('/api/categories/:id', (req, res, next) => {
        query = `UPDATE shop_categories_table SET category_name=? WHERE id=?`;
        connection.query(query, [req.body.category_name, req.params.id], function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json(result)

        });
    })
}
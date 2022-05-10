const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.post('/api/items/delete', (req, res, next) => {
        query = `DELETE FROM shop_item_table WHERE name=? AND category_id=?`;
        connection.query(query, [req.body.name, req.body.category_id], function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json({ facts: result })

        });
    })
}
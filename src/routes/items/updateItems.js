const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.patch('/api/items/:id', (req, res, next) => {
        query = `UPDATE shop_items_table SET item_name=?,category_id=?, price=?, image_url=? WHERE id=?`;
        connection.query(query, [req.body.item_name, req.body.category_id, req.body.price, req.body.image_url, req.params.id], function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json(result)

        });
    })
}
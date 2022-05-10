const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.post('/api/items/add', (req, res, next) => {
        query = `INSERT INTO shop_items_table
        (id, item_name,category_id,price,image_url) 
         VALUES (?, ?,?,?,?)`;
        connection.query(query, [req.body.id, req.body.item_name, req.body.category_id, req.body.price, req.body.image_url], function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json({ result })

        });
    })
}
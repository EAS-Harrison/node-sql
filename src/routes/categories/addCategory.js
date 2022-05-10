const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.post('/api/categories/add', (req, res, next) => {
        query = `INSERT INTO shop_categories_table
        (category_name) 
         VALUES (?)`;
        connection.query(query, req.body.category_name, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json(result.insertId)

        });
    })
}
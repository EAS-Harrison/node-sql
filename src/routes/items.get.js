const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.get('/api/items', (req, res, next) => {


        // sql to get all facts
        connection.query(`SELECT * FROM shop_items_table`, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }

            res.json({ facts: result })

        });

    });
}// mySQL tables:
// - shop.categories | id, name
// - shop.items | id, name, category_id, price, image_url

// API Routes:
// - /api/items (GET): get all items
// - /api/items (POST): add an item
// - /api/items/:id (GET): get an item by id
// - /api/items/:id (PATCH): update an item
// - /api/items/:id (DELETE): delete an item
// - /api/categories (GET): get all categories
// - /api/categories (POST): add a category
// - /api/categories/:id (GET): get a category by id
// - /api/categories/:id (PATCH): update a category
// - /api/categories/:id (DELETE): delete a category 
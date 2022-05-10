var express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs')
const path = require('path')

let router = express.Router()


fs.readdirSync(path.join(__dirname, "routes")).forEach(function (file) {
    if (file[0] === ".") {
        return;
    }
    require(path.join(__dirname, "routes", file))(app);
});
app.listen(3000, () => {
    console.log('Node server is running on port 3000');
})
// mySQL tables:
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
# node-sql
TASK 
Create A Node app with accompanying mySQL instance that exposes CRUD operations for Shop items

mySQL tables:
- shop.categories | id, name
- shop.items | id, name, category_id, price, image_url

API Routes:
- /api/items (GET): get all items
- /api/items (POST): add an item
- /api/items/:id (GET): get an item by id
- /api/items/:id (PATCH): update an item
- /api/items/:id (DELETE): delete an item
- /api/categories (GET): get all categories
- /api/categories (POST): add a category
- /api/categories/:id (GET): get a category by id
- /api/categories/:id (PATCH): update a category
- /api/categories/:id (DELETE): delete a category 

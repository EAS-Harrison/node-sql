var express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs')
const path = require('path')

let router = express.Router()


// Add all routes
fs.readdirSync(path.join(__dirname, "routes/categories")).forEach(function (file) {
    if (file[0] === ".") {
        return;
    }
    require(path.join(__dirname, "routes/categories", file))(app);
});
fs.readdirSync(path.join(__dirname, "routes/items")).forEach(function (file) {
    if (file[0] === ".") {
        return;
    }
    require(path.join(__dirname, "routes/items", file))(app);
});

app.listen(4000, () => {
    console.log('Node server is running on port 4000');
})


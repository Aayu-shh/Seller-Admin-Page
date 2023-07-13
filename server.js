const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const adminController = require('./controllers/admin');
const Product = require('./model/product');

const app = express();

app.use(cors());
app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/admin_page.html')
});

app.get('/products',adminController.show);

app.post('/add-product',adminController.add)

app.delete('/delete-product/:id',adminController.delete)

sequelize.sync()
    .then(result => {
        app.listen(8080);
    })
    .catch(err => console.log(err));

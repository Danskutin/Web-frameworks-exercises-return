const express = require('express')
const app = express()
const port = 4000
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require('./data.json');
const users = require('./users.json');
const purchases = require('./purchases.json');

app.use(bodyParser.json());
app.use(cors());


/* --- SHOP PRODUCTS --- */

/* GET All Products */
app.get('/products', (req, res) => {
  res.json(products);
  console.log('Displaying all products');
})


/* GET Single Product by ID */
app.get('/products/:id', (req, res) => {
    const result = products.find(products => products.id === req.params.id)
    res.json(result);
})

/* GET Products by Name/Developer/Genre */ 
app.get('/products/search/:searchString', (req, res) => {
    res.json(products.filter(p => p.name.includes(req.params.searchString) || p.developer.includes(req.params.searchString) 
    || p.publisher.includes(req.params.searchString)));
})

/* POST (Create) a New Product */
app.post('/products', (req, res) => {
    console.log('Creating a new product');
    console.log(req.body);
    products.items.push(
        {
            id: uuidv4(),
            name: req.body.name,
            developer: req.body.developer,
            publisher: req.body.publisher,
            gconsole: req.body.gconsole,
            genre: req.body.genre,
            price: req.body.price,
            rating: req.body.rating,
            image: req.body.image,
            info: req.body.info
        }
    )
    console.log('Product name ' + req.body.name);
    res.json(products);
})

/* PUT (Modify) an Existing Product by ID */
app.put('/products/modify/:id', (req, res) => {
    console.log('Modifying an existing product');
    console.log(req.body);
    const result = products.findIndex(p => p.id === req.params.id);
    if(result !== -1) {
        products[result]=
            {
                id: uuidv4(),
                name: req.body.name,
                developer: req.body.developer,
                publisher: req.body.publisher,
                gconsole: req.body.gconsole,
                genre: req.body.genre,
                price: req.body.price,
                rating: req.body.rating,
                image: req.body.image,
                info: req.body.info
            }
        res.send('Data successfully modified for product called ' + products[result].name);
    } else {
        res.send('No product found that matches id ' + req.params.id);
    }
})

/* DELETE Existing Product by ID */
app.delete('/products/:id', (req, res) => {
    const result = products.items.findIndex(p => p.id === req.params.id);
    if(result !== -1) {
        products.items.splice(result, 1);
        res.json(products);
    } else {
        res.send('No product found that matches id ' + req.params.id);
    }
})


/* --- USERS --- */

/* GET All Users */
app.get('/users', (req, res) => {
    res.json(users);
    res.send('Displaying all users');
  })

/* GET Single User by ID */
app.get('/users/:id', (req, res) => {
    const result = users.find(users => users.customerId === req.params.id)
    res.json(result);
})

/* POST (Create) a New User */
app.post('/new-user', (req, res) => {
    console.log('Creating a new user');
    console.log(req.body);
    users.push(
        {
            customerId: uuidv4(),
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        }
    )
    console.log('User name ' + req.body.name);
    res.send('User called ' + req.body.name + ' created');
})

/* DELETE Single User by ID */
app.delete('/users/:id', (req, res) => {
    const user = users.findIndex(u => u.customerId === req.params.id);
    if(user !== -1) {
        res.send('User called ' + users[user].name + ' deleted successful');
        users.splice(user, 1);
    } else {
        res.send('No user found that matches id ' + req.params.id);
    }
})


/* --- PURCHASE / INVOICE --- */

/* GET (Purchase) Products for User */
app.post('/purchase/:cId/:id', (req, res) => {
    console.log('Creating a purchase order');
    console.log(req.body);
    const purchase = products.findIndex(p => p.id === req.params.id);
    const customer = users.findIndex(u => u.customerId === req.params.cId)
    if(purchase !== -1) {

        let now = moment();
        let doa = moment(now).add(5, 'days').format("MMM Do YY");

        purchases.push(
            {
                invoiceId: uuidv4(),
                customerId: users[customer].customerId,
                customerName: users[customer].name,
                productName: products[purchase].name,
                price: products[purchase].price,
                orderDate: now.format("MMM Do YY, HH:mm"),
                dateOfArrival: doa + " (estimated)"
            }
        )
        res.send('Order placed successfully for product called ' + products[purchase].name);
    } else {
        res.send('Product could not be found');
    }
  })

/* GET All Invoices of a User */
  app.get('/shopping-list/:cId', (req, res) => {
    const customersPurchases = purchases.findIndex(p => p.customerId === req.params.cId)
    if(customersPurchases !== -1) {
        res.json(purchases.filter(p => p.customerId.includes(req.params.cId)));
    } else {
        res.send('No invoices found');
    }
  })

/* GET Single Invoice of a User by ID */
  app.get('/shopping-list/invoice/:id', (req, res) => {
    const invoice = purchases.findIndex(p => p.invoiceId === req.params.id);
    if(invoice !== -1) {
        res.json(purchases[invoice]);
    } else {
        res.send('Invoice could not be found');
    }
  })

/* DELETE Single Invoice of a User by ID */
app.delete('/shopping-list/:id', (req, res) => {
    const purchase = purchases.findIndex(p => p.invoiceId === req.params.id);
    if(purchase !== -1) {
        res.send('Order for product called ' + purchases[purchase].productName + ' deleted successful');
        purchases.splice(purchase, 1);
    } else {
        res.send('No order found that matches id ' + req.params.id);
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
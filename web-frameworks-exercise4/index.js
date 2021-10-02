const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000
const { v4: uuidv4 } = require('uuid');
app.use(bodyParser.json());
const moment = require('moment');


/* --- PRODUCTS DATA ARRAY --- */
let products = [
    {
        id: uuidv4(),
        name: "DiRT Rally 2.0",
        developer: "Codemasters",
        publisher: "Codemasters",
        console: "Xbox One",
        genre: "Racing",
        price: 26.39,
        rating: 4.5,
        image: "game1.png",
        info: [
          "Day One Edition includes the game + 3 DLC Cars (Porsche 911 RGT Rally Spec, Fiat 131 Abarth Rally, Alpine Renault A110 1600 S)",
          "The official game of the FIA World Rallycross Championship",
          "Take the wheel through stunning environments of New Zealand, Argentina, Spain, Poland, Australia and the USA with an iconic roster of over 50 historic and modern-day rally cars",
          "Improved handling, surfaces, fallibility and environments deliver the most authentic and focused off-road experience ever",
          "Build your team, expand your own garage of vehicles, manage a roster of staff and develop your Service Area facilities"
        ]
      },
      {
        id: uuidv4(),
        name: "No Man's Sky Beyond",
        developer: "Hello Games",
        publisher: "Hello Games",
        console: "Playstation 4",
        genre: "Adventure",
        price: 51.00,
        rating: 4.6,
        image: "game4.png",
        info: [
          "EXPLORE THE UNKNOWN - Explore uncharted solar systems and catalogue unique new forms of life",
          "SURVIVE ON A DANGEROUS FRONTIER - Battle attack ships, fend off dangerous predators, and survive in hazardous environments. Every encounter will test your skills to the limit",
          "PREPARE FOR AN EPIC JOURNEY - How you play No Man’s Sky is up to you, but you shouldn’t take your voyage lightly. Collect precious resources on the surfaces of planets, trade them with alien races and build the equipment that will take you to your destiny in the stars"
        ]
      },
      {
        id: uuidv4(),
        name: "Human: Fall Flat Anniversary Edition",
        developer: "No Brakes Games",
        publisher: "Curve Digital",
        console: "Xbox One",
        genre: "Platformer",
        price: 25.00,
        rating: 4.7,
        image: "game3.png",
        info: [
          "A Blank canvas: your human is yours to customize. With outfits from Builder to chef, skydiver, Miner, astronaut and Ninja. Choose your head, Upper and Lower body and get creative with the colors!",
          "A vibrant community: streamers and YouTube flock to human fall flat for its unique, hilarious gameplay. Fans have watched these videos more than 0.6 billion times!",
          "Thermal: it's a Gold prospector's dream come true in the frozen mountains of 'thermal', the brand new gold-filled level for human fall flat."
        ]
      },
      {
        id: uuidv4(),
        name: "SnowRunner",
        developer: "Saber Interactive",
        publisher: "Focus Home Interactive",
        console: "Xbox One",
        genre: "Racing",
        price: 30.84,
        rating: 4.6,
        image: "game2.png",
        info: [
          "Face extreme environments in a highly advanced physics engine",
          "40 unique vehicles to unlock, upgrade, and customize",
          "Complete dozens of challenging missions across an interconnected world",
          "Go solo or play with other players in 4-player co-op"
        ]
      },
      {
        id: uuidv4(),
        name: "Driveclub VR",
        developer: "Evolution Studios",
        publisher: "Sony Computer Entertainment",
        console: "Playstation 4",
        genre: "Racing",
        price: 21.00,
        rating: 4.5,
        image: "game5.png",
        info: [
          "Get behind the wheel as DRIVECLUB revs its engines for a follow-up season of edge-of-your-seat racing.",
          "Combining the stunning graphical power and interconnectivity of PlayStation 4 with the unparalleled immersion of PlayStation VR, DRIVECLUB VR transports you to some of world's most stunning locales in some of the world's most powerful production cars.",
          "Experience Canada's Fraser Valley or Japan's serene Lake Shoji like never before, with a brand new suite of features including a \"cruise control\" mode that will let you take in the sights at your leisure and \"Virtual Passenger\" that will let you relive your best laps from the passenger seat.",
          "A new selection of urban tracks swells the total number to a staggering 114. Strap into one of 80 iconic high-performance cars to screech through corners, blaze along straights and fight the finish line as though you could reach out and touch it."
        ]
      }
];


/* --- USERS DATA ARRAY --- */
let users = [
    {
        customerId: uuidv4(),
        name: "Test User",
        age: 30,
        address: "Test Street 123"
    }
];


/* --- PURCHASES DATA ARRAY --- */
let purchases = [
    {
        invoiceId: uuidv4(),
        customerId: uuidv4(),
        productName: "Test Game",
        price: 59,
        dateOfArrival: "Sep 29, 2021, 03:03 PM"
    }
];


/* --- SHOP PRODUCTS --- */

/* GET All Products */
app.get('/products', (req, res) => {
  res.json(products);
  res.send('Displaying all products');
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
app.post('/new-product', (req, res) => {
    console.log('Creating a new product');
    console.log(req.body);
    products.push(
        {
            id: uuidv4(),
            name: req.body.name,
            developer: req.body.developer,
            publisher: req.body.publisher,
            console: req.body.console,
            genre: req.body.genre,
            price: req.body.price,
            rating: req.body.rating,
            image: req.body.image,
            info: req.body.info
        }
    )
    console.log('Product name ' + req.body.name);
    res.send('Product called ' + req.body.name + ' created');
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
                console: req.body.console,
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
    const result = products.findIndex(p => p.id === req.params.id);
    if(result !== -1) {
        res.send('Product called ' + products[result].name + ' deleted successful');
        products.splice(result, 1);
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
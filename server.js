const express = require('express');
const mongoose = require('mongoose');
const Quote = require('./models/quote');
const app = express();

const db_conn = "mongodb+srv://siva:reality123@testcluster1.choet.mongodb.net/quote?retryWrites=true&w=majority";

mongoose.connect(db_conn, {
    useNewUrlParser: true, useUnifiedTopology: true
});

//user: siva
//password: reality123

app.set('view engine', 'ejs');

let quotes_list = [];
let quotes_fetched = false;

app.get('/', async (req, res) => {
    
    if (!quotes_fetched) {
        quotes_list = await Quote.find();
        quotes_fetched = true;
    }
    const rand = Math.floor(Math.random() * quotes_list.length);
    const quote = quotes_list[rand];

    
    // find a random quote
    //const numQuotes = await Quote.estimatedDocumentCount();
    //const rand = Math.floor(Math.random() * numQuotes);
    //const quote = await Quote.findOne().skip(rand);

    console.log('quote:'+ quote);
    res.render('index', { quote: quote });
});

// async function getAllQuotes() {
//     quotes_list = await Quote.find();
// }

app.listen(process.env.PORT || 5000);


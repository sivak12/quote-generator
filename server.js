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

app.get('/', async (req, res) => {
    
    // find a random quote
    const numQuotes = await Quote.estimatedDocumentCount();
    const rand = Math.floor(Math.random() * numQuotes);
    const quote = await Quote.findOne().skip(rand);

    console.log('quote:'+ quote);
    res.render('index', { quote: quote });
});

app.listen(process.env.PORT || 5000);
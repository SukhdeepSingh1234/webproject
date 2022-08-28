const express = require("express");
const path=require("path");
const bodyparser=require("body-parser");
const app=express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser:true});
const port = process.env.PORT || 8000;

//Define mongoose schema 
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });
const Contact = mongoose.model('Contact', contactSchema);  


//Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//Pug specific stuff
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.status(200).render('home.pug');

});

app.get('/contact', (req,res)=>{
    const params={ }
    res.status(200).render('contact.pug' ,params);
});

app.post('/contact', (req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
    // res.status(200).render('contact.pug');
});
app.get('/membership',(req,res)=>{
    const params={ }
    res.status(200).render('membership',params);

});
app.get('/infrastruct',(req,res)=>{
    const params={ }
    res.status(200).render('infrastruct',params);

});

app.listen(port , ()=>{
    console.log(`The Port started at ${port}`);

})



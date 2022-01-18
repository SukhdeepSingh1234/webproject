const express = require("express");
const path=require("path");
const app=express();
const port = process.env.PORT || 8000;

//Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//Pug specific stuff
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.status(200).render('index');

});

app.listen(port , ()=>{
    console.log(`The Port started at ${port}`);

})
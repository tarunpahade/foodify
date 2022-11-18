const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
 const path= require('path');


app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect('mongodb://localhost:27017/orderedFood',{ useNewUrlParser: true, useUnifiedTopology: true });

const db=mongoose.connection
db.on("error",()=>{console.log('err');})
db.once('open',()=>{console.log('opened');})

const orders=mongoose.Schema({
name:String,
table:String,
orderedFood:[{
    id:String,
    items:Number,
    price:Number
}]
})

   // compile schema to model
   var order = mongoose.model('data', orders, 'kakaji');





app.post('/',(req,res)=>{
    const { pp } =req.body;
  const name=pp[0].customerName
  const table=pp[0].tableNumber  
const orderedItems=pp[0].orderedItems

    

    const data=new order({
      name:name,
      table:table,
      orderedFood:orderedItems
  })


  data.save(function (err, book) {
    if (err) return console.error('fucked up code'+err);
    console.log(book.name + " saved to collection.");
  });

    })

app.listen('4000',()=>{
    console.log("Server Up at 4000");
})





//insert #working
// con.connect((err)=>{
//     if(err){console.log(err);}
// const sql='INSERT INTO customers SET ?'
// const ol=({customerName:"Harsh",tableNumber:"16"})
// con.query(sql,ol,(err,result)=>{
//     if (err){console.log(err);};
// })
// })
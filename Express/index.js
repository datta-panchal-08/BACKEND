const express =  require("express");
const app = express();
const path = require('path');
 
let port  = 7000;
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"))

app.get('/home',(req,res)=>{
    res.render("home");
    
});

app.listen(port,()=>{
    console.log(`Listining on port ${port}` );
});

app.get("/:username/:id",(req,res)=>{
    const {username,id} = req.params;
    
    res.send(`<h1>Welcome Mr : ${username} And Your Id Is : ${id}</h1>`)
})

app.get('/apple',(req,res)=>{
     
    res.send({
        fruit : "Apple",
        color:"Red"
    });
});

// app.get("*",(req,res)=>{
//     res.send("This Path Does Not Exist");
// })

// Query Strings 
app.get("/search",(req,res)=>{
     let {q,color} = req.query;
     res.send(`<h1>Hello Mr  : ${q} and your color is ${color}</h1> `)
});



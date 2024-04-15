const express = require('express');
const app  = express();

const port = 8080;

app.get("/ig/:username",(req,res)=>{
    // let followers = ["Adam","Chris","Dhoni","Datta"];
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
    res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs")
    }

})

app.listen(port,()=>{
    console.log(`Listening On ${port}`)
})
const express =  require('express');
const app = express();
const path =  require('path');
const Chat = require('./models/chat');
const mongoose =  require('mongoose');
const methodOverride = require('method-override');


main().then(()=>{console.log("Connection Succesfull")})
.catch(err => console.log(err));

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));


app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
})

// New Route
app.get("/chats/new",(req,res)=>{
    res.render('new.ejs');
});

// Create Route
app.post("/chats",(req,res)=>{
    let {from , to , message} = req.body;
    let newChat = new Chat({
        from : from,
        message : message,
        to : to,
        created_at : new Date()
    });
    newChat.save().then(res => console.log(res)).catch(err => console.log(err));
    res.redirect("/chats");
})

// Edit Route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id }= req.params;
    let chat =  await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

// Update Route
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {message : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{message : newMsg},{runValidators : true, new : true})
    console.log(updatedChat);
    res.redirect('/chats');
})
// Delete Route
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat  = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
});

app.get("/",(req,res)=>{
    res.send("Root Working!");
});


app.listen(8080,()=>{
    console.log("listening on port : 8080");
});


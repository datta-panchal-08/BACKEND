const mongoose = require('mongoose')
const Chat = require('./models/chat.js') 

main().then(()=>{console.log("Connection Succesfull")})
.catch(err => console.log(err));

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
        from :"Priya",
        to : "neha",
        message : "Hey Neha Can You Send Me Your Exam Sheets",
        created_at : new Date()
    },
    {
        from :"rahul",
        to : "sumit",
        message : "can you teach me angular",
        created_at : new Date()
    },
    {
        from :"anjali",
        to : "sakshi",
        message : "can you tell me about callback() in js",
        created_at : new Date()
    },
    {
        from:"sonskshi",
        to : "mohini",
        message : "can you tell me about your project",
        created_at : new Date()
    }
]

Chat.insertMany(allChats);

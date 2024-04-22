const { name } = require('ejs');
const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number
});

const User = mongoose.model("User",userSchema);

// const user2 = new User({
//   name : "Param",
//   email: "Param@gmail.com",
//   age : 21
// });

// user2.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// User.insertMany([
//   {name : "Datta", age : 21 , email : "datta@gmail.com"},
//   {name : "Param",age : 21 , email : "param@gmail.com"},
//   {name  : "Ganesh",age  : 22 , email : "ganesh@gmail.com"}
// ]).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

User.findById({_id : "6625fb0965e23144b6603852"}).then((data)=>{
  console.log(data);
}).catch((err)=> {console.log(err)});


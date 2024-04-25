const mongoose =  require('mongoose');


main().then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

let bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String
    },
    price  : {
        type : Number
    }

});

const books = mongoose.model('books',bookSchema);

let book1 = new books({
    title  :" Mathematics XII",
    author : "RD Sharma",
    price  : 1200
});

book1.save().then((data)=>console.log(data)).catch((err)=>{
    console.log(err);
});

let book2 = new books({
    title  :"How To Kill A Mockingbird",
    author : "Harper Lee",
    price  : 299
});

book2.save().then((data)=>console.log(data)).catch((err)=>{
    console.log(err);
});

// books.deleteOne({ __id :'66279a1a48c3819fe6aea820'});
const express = require('express');
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const posts = [
    {
        id: uuidv4(),
        username: "dattatray",
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username: "luffy",
        content: "If you don't take risks, you can't create a future."
    },
    {
        id: uuidv4(),
        username: "pedro",
        content: "Everyone sooner or later gets their time to shine."
    }
];

app.listen(port, () => {
    console.log(`Listening On Port : ${port}`);
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id); 
    res.render("show.ejs",{post})

});

app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id); 
    post.content = newContent;
    console.log(newContent);
    res.send("Patch Request Working!")
})


const express = require("express");
const app = express ();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

app.get('/', (req,res) =>{
    res.render('index', {title:"mini messageboard", messages})
});

// app.get('/', (req,res) => {
//     res.render("index", {title:"Home Page"})
// });
app.get('/new', (req,res) => {
    res.render('new', {title: "new message"})
});

app.post("/new", (req, res) => {
    const { user, text } = req.body;
    if (user && text) {
        messages.push({ text, user, added: new Date() });
    }
    res.redirect("/");
});

app.listen (port ,() =>{
    console.log(`the server is running on port:${port}`)
});
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const url ="mongodb://localhost:27017/GestionCustomer"
app.use(express.urlencoded({ extended: true }));
const Mydata = require("./models/mydataSchema");
app.set("view engine", "ejs");
app.use(express.static('public'))


app.get("/", (req, res) => {
  Mydata.find().then(result=>{
    res.render("index",{arr: result})
  })
  .catch(err=>{
    console.log(err);
  });
;

});

app.get("/user/add.html", (req, res) => {
  res.render("user/add")
});

app.get("/user/view.html", (req, res) => {
  res.render("user/view")
});

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit")
});
app.post("/user/add.html",async(req,res)=>{
  //console.log(req.body)
  const article  = new  Mydata(req.body)
    await article.save().then(result=>{
      console.log("created");
      res.redirect("/")
    })
    .catch(err=>{
      console.log(err);
    });
})
mongoose
  .connect(url)
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
      console.log("connected to db")
    });
  })
  .catch((err) => {
    console.log(err);
  });



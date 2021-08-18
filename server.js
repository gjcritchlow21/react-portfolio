//imports
require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;


// const exphbs = require("express-handlebars");
const cors = require("cors")
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

//view engine setup
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

//static folder
app.use(express.static("build"));

app.get("/src/components/contact/", (req, res) => {
  res.render("contactForm");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/send", cors(), async (req, res) => {
  let {text} = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
  })

    await transport.sendMail({
      from: process.env.MAIL_FROM,
      to: "test@test.com",
      subject: 'test email',
      html: `<div id="sentMail">
      <h2>Here is your email</h2>
      <p>${text}</p>
      <p>Thank You for your email!</p> 
      </div>`
    })
  
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});



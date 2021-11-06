const express = require ("express");
const connectDB = require ("./DB/connection");
const ModelArticle = require("./DB/ModelArticle");
const ModelSignup = require("./DB/ModelSignup");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("frontend/public"));


/*
const dir = path.join(__dirname, 'frontend');
app.use(express.static(dir));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./frontend/src/index.js"))
})
*/


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images")
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({storage: storage});
app.get("/upload", function(req, res){

})
app.post("/upload", function(req, res){
 return;
})

app.get("/test4", function(req, res){
  const str = [{
    "id": "0",
    "name": "codr",
    "city": "midyat",
    "age": "something"
  }]
  res.end(JSON.stringify(str));
});

app.get("/test1", function(req, res){
  ModelArticle.find({$text:{$search: "second"}}).sort({_id: -1}).then(function(records){
    res.end(JSON.stringify(records))
  });
});
app.post("/signup", async function(req, res){
  try {
    const newUser = await ModelSignup.create(req.body);
    const id = newUser._id
    const token = await function (id){
      jwt.sign({id}, "asdfqwer12", {expiresIn: 24*60*60*1000});
    }
    res.cookie("jwt", true, {
      maxAge: 1000*60*60*1000,
      httpOnly: true
    });
    await res.status(201);
    await res.json({newUser: id})
  } catch (e) {
    await res.status(404);
    await res.send(e.message);
  }
});
app.post("/login", async function(req, res){
  try {
    const registeredUser = await ModelSignup.findOne({"loginEmail": req.body.loginEmail});
    if (registeredUser) {
      const auth = await bcrypt.compare(req.body.loginPassword, registeredUser.loginPassword);
      if (auth) {
        const id = registeredUser._id
        const token = await function (id){
          jwt.sign({id}, "asdfqwer12", {expiresIn: 24*60*60*1000});
        }
        res.cookie("jwt", true, {
          maxAge: 1000*60*60*1000,
          httpOnly: true
        });
        res.status(200);
        res.end();
      } else {
        throw Error ("incorrect password")
      }
    } else {
      throw Error ("incorrect email");
    }
  } catch (e) {
    await res.status(404);
    await res.send(e.message);
  }
});

app.get("/create", function(req, res){
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "asdfqwer12", () => {
      res.status(200).end();
    })
  } else {
    res.status(404)
    res.send("Tokens didnt match");
  }
});

app.post("/create", function(req, res){
  ModelArticle.create(req.body).then(() => {
    res.status(201).end();
  });
});
app.get("/articles", function(req, res){
  ModelArticle.find({}).sort({_id: -1}).then(function(records){
    res.end(JSON.stringify(records))
  });
});
app.get("/articles/:id", function(req, res){
  ModelArticle.find({_id: req.params.id}).then(function(records){
    res.end(JSON.stringify(records))
  });
});

const server = app.listen (process.env.PORT || 4000);
const portNumber = server.address().port;
console.log ("ГОСПОДИН ПОРТ СЕИЧАС ОТКРЫТ "+ portNumber)



const socket = require ("socket.io");
const io = socket(server);
io.on("connection", function(socket){
  console.log("socket connection is open: "+ socket.id);
  //This is for sending message to all sockets
  socket.on("chatGOING", function(data){
    io.sockets.emit("chatCOMING", data);
  })
});

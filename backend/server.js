const Koa = require("koa");

const mongoose = require('mongoose');
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");



const cocCharacterRoutes = require("./routes/cocCharacter.js");

/////////////////////////test json file//////////////////////////////////////
const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
/////////////////////////////////////////////////////////////////////////////


const app = new Koa();

const PORT = process.env.PORT || 3001;


/* MongoDB connection */
const setting = require('./setting'); // setting.jsは漏れると困るのでignoreしてる
mongoose.connect(`mongodb+srv://${setting.user}:${setting.password}@cluster0.3iieb.mongodb.net`, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected');
});


app.use(BodyParser());
app.use(Logger());
app.use(cors());



app.use(cocCharacterRoutes.routes())

  

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});
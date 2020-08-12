import * as  Koa from "koa";
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");
var mongoose = require('mongoose');


/////////////////////////test json file//////////////////////////////////////
const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
/////////////////////////////////////////////////////////////////////////////


const app = new Koa();

const PORT = process.env.PORT || 3001;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

router.get("/coc",async (ctx : Koa.Context, next) =>{
    ctx.status = HttpStatus.OK;
    ctx.type = 'json';
    ctx.body = jsonObject;
    await next();
});



/* router.get("/insane/:id",async (ctx,next)=>{
    const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
    ctx.status = HttpStatus.OK;
    ctx.body = ctx.params.id;
    await next();
});
 */



app.use(router.routes()).use(router.allowedMethods());
  

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});
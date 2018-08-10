const PORT = 5050;

const koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const xmlParser = require("koa-xml-body");

const path = require("path");
const http = require("http");

const musicAPI = require(path.resolve("src", "index.js"));

let app = new koa();
app.use(xmlParser());
app.use(bodyParser());

router.get("/search/song", async (ctx, next) => {
  let response = await musicAPI.searchSong(ctx.request.query);
  ctx.response.body = response;
  return;
});
router.post("/search/song", async (ctx, next) => {
  let response = await musicAPI.searchSong(ctx.request.body);
  ctx.response.body = response;
  return;
});

router.get("/get/song", async (ctx, next) => {
  let response = await musicAPI.getSong(ctx.request.query);
  ctx.response.body = response;
  return;
});
router.post("/get/song", async (ctx, next) => {
  let response = await musicAPI.getSong(ctx.request.body);
  ctx.response.body = response;
  return;
});

router.get("/get/comment", async (ctx, next) => {
  let response = await musicAPI.getComment(ctx.request.query);
  ctx.response.body = response;
  return;
});
router.post("/get/comment", async (ctx, next) => {
  let response = await musicAPI.getComment(ctx.request.body);
  ctx.response.body = response;
  return;
});

app.use(router.routes());

app.use(async (ctx, next) => {
  ctx.status = 404;
});

http.createServer(app.callback()).listen(PORT);

console.log("music-api started at port " + PORT);

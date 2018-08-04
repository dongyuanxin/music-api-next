const fs = require("fs");
const path = require("path");

const cheerio = require("cheerio");

let html = fs.readFileSync(path.resolve(".", "xiami.html"), "utf-8");

let $ = cheerio.load(html);

let liArr = $("ul li"),
  results = [];

for (let i = 0; i < liArr.length; ++i) {
  let li = $(liArr[i]),
    id = li.attr("id");
  results.push({
    time: li.find(".info span.time").text() + ":00",
    content: li
      .find("#brief_" + id)
      .clone()
      .children()
      .remove()
      .end()
      .text()
      .replace(/(\s*$)/g, ""),
    user: {
      headImgUrl: li.find("img").attr("src"),
      nickname: li.find("img").attr("alt")
    }
  });
  console.log(results);
  break;
}

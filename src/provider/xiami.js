const request = require("request");
const cheerio = require("cheerio");

const querystring = require("querystring");

class Music {
  constructor() {}
  _caesar(location) {
    var num = location[0];
    var avg_len = Math.floor(location.slice(1).length / num);
    var remainder = location.slice(1).length % num;

    var result = [];
    for (var i = 0; i < remainder; i++) {
      var line = location.slice(
        i * (avg_len + 1) + 1,
        (i + 1) * (avg_len + 1) + 1
      );
      result.push(line);
    }

    for (var i = 0; i < num - remainder; i++) {
      var line = location
        .slice((avg_len + 1) * remainder)
        .slice(i * avg_len + 1, (i + 1) * avg_len + 1);
      result.push(line);
    }

    var s = [];
    for (var i = 0; i < avg_len; i++) {
      for (var j = 0; j < num; j++) {
        s.push(result[j][i]);
      }
    }

    for (var i = 0; i < remainder; i++) {
      s.push(result[i].slice(-1));
    }

    return unescape(s.join("")).replace(/\^/g, "0");
  }
  _handleProtocolRelativeUrl(url) {
    let regex = /^.*?\/\//;
    let result = url.replace(regex, "http://");
    return result;
  }
  _xmRetinaUrl(s) {
    if (s.slice(-6, -4) == "_1") {
      return s.slice(0, -6) + s.slice(-4);
    }
    return s;
  }
  searchSong(key, page, limit) {
    let url =
      "http://api.xiami.com/web?" +
      querystring.stringify({
        v: "2.0",
        key,
        limit,
        page,
        r: "search/songs",
        app_key: 1
      });
    let options = {
      url,
      method: "POST",
      headers: {
        referer: "http://h.xiami.com/", // must options
        user_agent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36"
      }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err)
          return resolve({
            success: false
          });
        try {
          let data = JSON.parse(body);
          return resolve({
            success: true,
            results: data.data.songs.map(item => {
              return {
                id: item.song_id,
                name: item.song_name,
                artist: item.artist_name,
                album: item.album_name,
                cover: item.album_pic,
                needPay: item.need_pay_flag === 1,
                plus: { file: item.listen_file }
              };
            })
          });
        } catch (error) {
          return resolve({
            success: false,
            msg: error.message
          });
        }
      });
    });
    return promise;
  }
  getSong(id) {
    let url = `http://www.xiami.com/song/playlist/id/${id}/object_name/default/object_id/0/cat/json`;
    let options = {
      url,
      method: "GET",
      headers: {
        user_agent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36"
      }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err)
          return resolve({
            success: false
          });
        try {
          let data = JSON.parse(body);
          let location = data.data.trackList[0].location;
          return resolve({
            success: true,
            results: {
              url: this._handleProtocolRelativeUrl(this._caesar(location)),
              lyric: this._handleProtocolRelativeUrl(
                data.data.trackList[0].lyric_url
              ),
              name: data.data.trackList[0].name,
              album: data.data.trackList[0].album_name,
              artist: data.data.trackList[0].artist_name,
              cover: data.data.trackList[0].album_pic
            }
          });
        } catch (error) {
          return resolve({
            success: false,
            msg: error.message
          });
        }
      });
    });
    return promise;
  }
  __getPageComment(id, page) {
    let url = `https://www.xiami.com/commentlist/turnpage/id/${id}/page/${page}/ajax/1`;
    let options = {
      url,
      method: "POST",
      body: querystring.stringify({ type: "4" }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        origin: "https://www.xiami.com",
        referer: "https://www.xiami.com/song/" + id,
        user_agent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36"
      }
    };

    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err) return resolve({ success: false, msg: err.message });
        try {
          let $ = cheerio.load(body),
            liArr = $("ul li"),
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
          }
          return resolve({ success: true, results });
        } catch (error) {
          return resolve({ success: false, msg: error.message });
        }
      });
    });
    return promise;
  }
  async getComment(id, page, limit) {
    const pageSize = 10;

    let startPage = parseInt(page * limit, 10) / pageSize,
      endPage = parseInt((page + 1) * limit, 10) / pageSize,
      offset = startPage * pageSize;

    let left = page * limit - offset,
      right = (page + 1) * limit - offset,
      results = [];

    let promise = new Promise(async resolve => {
      for (let i = startPage; i <= endPage; i++) {
        if (i === 0) {
          continue;
        }
        let res = await this.__getPageComment(id, i);
        if (res.success === false) {
          return resolve(res);
        }
        results = results.concat(res.results);
      }
      return resolve({
        success: true,
        results: results.slice(left, right)
      });
    });

    return promise;
  }
}

let music = new Music();
music.getSong(1776156051);
// music.searchSong("林俊杰", 1, 1).then(res => {
//   let id = res.results[0].id;
//   music.getComment(id, 1, 25).then(res => {
//     console.log(res.results);
//   });
// });

module.exports = Music;

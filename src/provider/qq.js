const request = require("request");
const moment = require("moment");

const querystring = require("querystring");

class Music {
  constructor() {}
  searchSong(key, page, limit) {
    let jsonpCallback = "jsonp4";
    let url =
      "http://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?" +
      querystring.stringify({
        jsonpCallback,
        loginUin: 0,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf-8",
        outCharset: "utf-8",
        notice: 0,
        platform: "qq",
        needNewCode: 0,
        p: page,
        n: limit,
        w: key
      });
    let options = {
      url,
      method: "GET",
      headers: {
        referer: "https://y.qq.com/portal/search.html",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
      }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err)
          return resolve({
            success: false
          });
        try {
          let data = body.substr(jsonpCallback.length + 1);
          data = data.substr(0, data.length - 1);
          data = JSON.parse(data);
          return resolve({
            success: true,
            results: data.data.song.list.map(item => {
              return {
                id: item.songmid,
                name: item.songname,
                artist: item.singer[0].name,
                album: item.albumname,
                cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${
                  item.albummid
                }.jpg`,
                needPay: item.pay.payplay > 0
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
    let jsonpCallback = "MusicJsonCallback7156632135681187";
    let url =
      "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?" +
      querystring.stringify({
        g_tk: 1959393642,
        jsonpCallback,
        loginUin: 2181111110,
        hostUin: 0,
        format: "json",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0,
        cid: 205361747,
        callback: jsonpCallback,
        uin: 2181111110,
        songmid: id,
        filename: `C400${id}.m4a`,
        guid: 9870159400
      });
    let options = {
      url,
      method: "GET",
      headers: {
        referer: "https://y.qq.com/portal/player.html",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
      }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err) {
          return resolve({ success: false, msg: err.message });
        }

        try {
          let data = body.substr(jsonpCallback.length + 1);
          data = data.substr(0, data.length - 1);
          data = JSON.parse(data);
          data = data.data.items[0];
          return resolve({
            success: true,
            results: {
              url:
                `http://dl.stream.qqmusic.qq.com/C400${id}.m4a?` +
                querystring.stringify({
                  vkey: data.vkey,
                  guid: 9870159400, // 和上方一定要一样
                  uin: 2181111110,
                  fromtag: 66
                })
            }
          });
        } catch (error) {
          return resolve({ success: false, msg: error.message });
        }
      });
    });
    return promise;
  }
  __getTopId(id) {
    let jsonpCallback = "getOneSongInfoCallback";
    let url =
      "https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?" +
      querystring.stringify({
        songmid: id,
        tpl: "yqq_song_detail",
        loginUin: 0,
        hostUin: 0,
        format: "jsonp",
        callback: jsonpCallback,
        jsonpCallback,
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
      });
    let options = {
      url,
      method: "GET",
      headers: {
        referer: "https://y.qq.com/n/yqq/song/" + id + ".html",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
      }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err) {
          return resolve({ success: false, msg: err.message });
        }
        try {
          let data = body.substr(jsonpCallback.length + 1);
          data = data.substr(0, data.length - 1);
          data = JSON.parse(data);
          let topId = data.data[0].id;
          if (topId === null || topId === undefined) {
            return resolve({ success: false, msg: "Not found" });
          } else {
            return resolve({ success: true, results: topId });
          }
        } catch (error) {
          return resolve({ success: false, msg: error.message });
        }
      });
    });
    return promise;
  }
  filterComment(comment) {
    let rule = /(\[em\].*?\[\/em\])|\n|\\n/gm;
    return comment.replace(rule, "");
  }
  async getComment(id, page, limit) {
    let results = await this.__getTopId(id);
    let promise = new Promise(resolve => {
      if (results.success === false) {
        return resolve(results);
      }
      let topId = results.results;
      let jsonpCallback = "jsoncallback21880487934016424";
      let url =
        "https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg?" +
        querystring.stringify({
          g_tk: 5381,
          jsonpCallback,
          loginUin: 0,
          hostUin: 0,
          format: "jsonp",
          inCharset: "utf8",
          outCharset: "GB2312",
          notice: 0,
          platform: "yqq",
          needNewCode: 0,
          cid: 205360772,
          reqtype: 2,
          biztype: 1,
          topid: topId,
          cmd: 8,
          needmusiccrit: 0,
          pagenum: page - 1, // 注意这里page从0开始计算
          pagesize: limit,
          lasthotcommentid: "",
          callback: jsonpCallback,
          domain: "qq.com",
          ct: 24,
          cv: 101010
        });
      let options = {
        url,
        method: "GET",
        headers: {
          referer: "https://y.qq.com/n/yqq/song/" + id + ".html",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
        }
      };
      request(options, (err, res, body) => {
        if (err) {
          return resolve({ success: false, msg: err.message });
        }
        try {
          let data = body.substr(jsonpCallback.length + 1);
          data = data.substr(0, data.length - 3); // 最后有2个换行符和1个")"
          data = JSON.parse(data);
          return resolve({
            success: true,
            results: data.comment.commentlist.map(item => {
              return {
                time: moment(1e3 * item.time).format("YYYY-MM-DD H:mm:ss"),
                content: this.filterComment(item.rootcommentcontent),
                user: { headImgUrl: item.avatarurl, nickname: item.nick }
              };
            })
          });
        } catch (error) {
          return resolve({ success: false, msg: error.message });
        }
      });
    });
    return promise;
  }
}

// let music = new Music();
// music.searchSong("No tears left to cry", 1, 5).then(res => {
//   console.log(res);
//   let id = res.results[0].id;
//   music.getComment(id, 1, 25).then(res => {
//     console.log(res.results);
//   });
// });

// let rule = /(\[em\].*?\[\/em\])|\n|\\n/gm;
// let str =
//   "[em]234234[/em]我爱你哦" +
//   "\n" +
//   "给个赞吧么么哒[em]abce[/em]" +
//   "absce\\n" +
//   "\n" +
//   "fefe";

// console.log(str.replace(rule, ""));

// let rule2 = /\\n|\n/gm;
// let str2 = "absce\\n" + "\n" + "fefe";
// console.log(str2.replace(rule2, ""));

module.exports = Music;

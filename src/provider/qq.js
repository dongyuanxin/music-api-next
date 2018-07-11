const request = require("request");
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
                needPay: item.pay.payalbumprice > 0
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
}

module.exports = Music;

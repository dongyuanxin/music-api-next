const request = require("request");
const moment = require("moment");

const querystring = require("querystring");

const pattern = /<\/?.+?\/?>/g;
const pattern2 = /\[\/?.+?\/?\].+?\[\/?.+?\/?\]/g

class Music {
  constructor() {}
  __searchSong(key, page, limit) {
    let url =
      "http://search.5sing.kugou.com/home/json?" +
      querystring.stringify({
        keyword: key,
        sort: 1,
        filter: 3,
        type: 0,
        page
      });
    let options = {
      url,
      method: "GET",
      headers: {
        referer:
          "http://search.5sing.kugou.com/home/index?keyword=" + encodeURI(key),
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
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
            results: data.list.map(item => {
              return {
                id: item.songId,
                name: item.songName.replace(pattern, ""),
                artist: item.nickName,
                album: item.typeName,
                cover: null,
                needPay: item.status === 1 ? false : true
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
  async searchSong(key, page, limit) {
    const pageSize = 10;
    let startPage = -1,
      endPage = -1,
      results = [];

    if (limit <= pageSize) {
      startPage = page;
      endPage = page;
    } else {
      startPage = parseInt(((page - 1) * limit) / pageSize, 10) + 1;
      endPage = startPage + parseInt(limit / pageSize, 10);
    }

    let promise = new Promise(async resolve => {
      for (let i = startPage; i <= endPage; i++) {
        if (i === 0) {
          continue;
        }

        let res = await this.__searchSong(key, i);
        if (res.success === false) {
          return resolve(res);
        }
        results = results.concat(res.results);
      }
      return resolve({
        success: true,
        results: results.slice(0, limit)
      });
    });

    return promise;
  }
  getSong(id) {
    let now = (new Date()).getTime(),
      jsoncallback = "";
    let options = {
      url: `http://service.5sing.kugou.com/song/getsongurl?songid=${id}&songtype=bz&from=web&version=6.6.72&_=${now}`
    };
    // console.log(options)
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err) {
          return resolve({ success: false, msg: err.message });
        }
        try {
          // console.log("body is ", body)
          let data = body.substr(jsoncallback.length + 1);
          data = data.substr(0, data.length - 1);
          data = JSON.parse(data);
          return resolve({
            success: true,
            results: {
              url: data.data.squrl || data.data.hqurl || data.data.lqurl 
            }
          });
        } catch (error) {
          return resolve({ success: false, msg: error.message });
        }
      });
    });
    return promise;
  }
  getComment(id, page, limit) {
    let promise = new Promise(resolve => {
      let now = (new Date()).getTime();
      let options = {
        url: `http://service.5sing.kugou.com/yc/comments/list1?page=${page}&rootId=${id}&initBound=1&limit=${limit}&_=${now}`
      }
      request(options, (err, res, body) => {
        if (err) {
          return resolve({ success: false, msg: err.message });
        }
        try {
          let data = JSON.parse(body);
          return resolve({
            success: true,
            results: data.data.comments.map(item => {
              return {
                time: item.createTime + " 00:00:00",
                content: item.content.replace(pattern, "").replace(pattern2, ""),
                user: {
                  headImgUrl: item.user.img,
                  nickname: item.user.nickname
                }
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

module.exports = Music;

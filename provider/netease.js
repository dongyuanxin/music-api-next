const request = require("request");
const querystring = require("querystring");
const { asrsea } = require("./../vendor/crypto");

class Music {
  constructor() {
    this.e = "010001";
    this.f =
      "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7";
    this.g = "0CoJUm6Qyw8W8jud";
  }
  searchSong(key, page, limit) {
    let url = "http://music.163.com/weapi/cloudsearch/get/web?csrf_token=";
    let form = {
      s: key,
      type: 1,
      limit,
      offset: limit * (page - 1)
    };
    let { encText, encSecKey } = asrsea(
      JSON.stringify(form),
      this.e,
      this.f,
      this.g
    );
    let options = {
      url,
      method: "POST",
      form: {
        params: encText,
        encSecKey: encSecKey
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err) {
          return resolve({
            success: false,
            msg: err.message
          });
        }
        try {
          let data = JSON.parse(body);
          return resolve({
            success: true,
            results: data.result.songs.map(item => {
              return {
                id: item.id,
                name: item.name,
                artist: item.ar[0].name,
                album: item.al.name,
                cover: item.al.picUrl,
                needPay: item.privilege.st < 0
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
  getSong(id) {
    let url = "http://music.163.com/weapi/song/enhance/player/url?csrf_token=";
    let form = { ids: [id], br: 999000, csrf_token: "" };
    let { encText, encSecKey } = asrsea(
      JSON.stringify(form),
      this.e,
      this.f,
      this.g
    );
    let options = {
      url,
      method: "POST",
      form: { params: encText, encSecKey: encSecKey },
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err) {
          return resolve({ success: false, msg: err.message });
        }
        try {
          let data = JSON.parse(body);
          data = data.data[0];
          return resolve({
            success: true,
            results: {
              url: data.url
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

// let musicApi = new Music();
// musicApi.searchSong("林俊杰", 1, 5).then(res => {
//   let data = res.results;
//   for (let item of data) {
//     if (item.needPay) {
//       continue; // need pay! But file is saved at 'plus'
//     }
//     musicApi.getSong(item.id).then(res => {
//       console.log({ ...item, ...res.results });
//     });
//   }
// });

module.exports = Music;
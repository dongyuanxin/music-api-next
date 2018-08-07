const request = require("request");
const moment = require("moment");

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
      body: querystring.stringify({
        params: encText,
        encSecKey: encSecKey
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
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
      body: querystring.stringify({ params: encText, encSecKey: encSecKey }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "_ntes_nnid=7e127b1ac7016783367113f9e841617e,1528281648895; _ntes_nuid=7e127b1ac7016783367113f9e841617e; vjuids=-215c44ca9.163ea0e2f21.0.140cc76b1bb98; UM_distinctid=1642836f1b0ec-026a5cf7f66ac1-47e1137-144000-1642836f1b1f0; __gads=ID=a73f8d3696864b83:T=1529683046:S=ALNI_MZyZA_8VYPkMrUGhH8ZH1_bLKprEA; usertrack=ezq0pVs8bHcjNp1NC5VAAg==; _ga=GA1.2.1204837884.1530686585; _iuqxldmzr_=32; WM_TID=xmvTYxNGUt%2BA%2Bu5cCsJCP4LpxZmL%2BdMz; vjlast=1528640188.1532183887.11; Province=0530; City=0632; vinfo_n_f_l_n3=0306218939988106.1.9.1528640188275.1532183928423.1532446599699; __utmz=94650624.1533454528.10.10.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; JSESSIONID-WYYY=EmkvGaFoX17mFhZvSksZ8epOVQsAzJxrdq%2FZoUoZiUwk58V8dZhTeTZ5Ad1i1phZxuk%2BnsFoa6TAQAIR84rp1zB4Tb%2FpgjXyjBd%2BhkUkbz0V4rnT98iBNAIcoBT0izlGcwQozDdWN7o%5CxwxAhAIeaw0iobJRa7On0XUOCi4qJSXAkIlH%3A1533621469532; __utma=94650624.1204837884.1530686585.1533454528.1533619670.11; __utmc=94650624; WM_NI=qLhmUwhOCQ6Scn0AqOmhFUVt82BXYYQV4aIfwt8%2FTz%2BC7wc6r9MxThCoKcpKlKqLC2ukZW1pJejuc2fqBrTe1%2BGostee9j%2FSVCfWNWGaphXcJf%2Ff9DhRhR%2Fzvxwm7VENdVU%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee86b753b6af83d6ec73baa6a082e468b2b4a68dc83db29788b7dc66939f87d3cd2af0fea7c3b92ab394a88ed87dac918db2b559a1b200a2f445afb88ab6d580fcee8eb9dc53938afc82cc6eb5acf8d0d772e99df998e23eb2e78399d76481b18584f341b095bfadc23ab7b596b8b47c8abba696e23aa6af8e93d76ff3f58990f280a7bbf78bae59969daab8cd5d85bfc089db698abae187bc50ac8ea8b3ae72b6a8b98eb65e8792acb7d837e2a3; __utmb=94650624.5.10.1533619670; playerid=15326018"
      }
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
  getComment(id, page, limit) {
    let url = "https://music.163.com/weapi/v1/resource/comments/R_SO_4_" + id;
    let form = {
      rid: "R_SO_4_" + id,
      offset: limit * (page - 1),
      total: true,
      limit,
      csrf_token: ""
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
      body: querystring.stringify({ params: encText, encSecKey: encSecKey }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    let promise = new Promise(resolve => {
      request(options, (err, res, body) => {
        if (err) {
          return resolve({ success: false, msg: err.message });
        }
        try {
          let data = JSON.parse(body);
          resolve({
            success: true,
            results: data.comments.map(item => {
              return {
                time: moment(item.time).format("YYYY-MM-DD H:mm:ss"),
                content: item.content,
                user: {
                  headImgUrl: item.user.avatarUrl,
                  nickname: item.user.nickname
                }
              };
            })
          });
        } catch (error) {
          resolve({ success: false, msg: error.message });
        }
      });
    });
    return promise;
  }
}

// let music = new Music();
// music.searchSong("林俊杰", 1, 1).then(res => {
//   let id = res.results[0].id;
//   music.getComment(id, 1, 20).then(res => {
//     console.log(res.results);
//   });
// });

// music.getSong(521690235).then(res => {
//   console.log(res);
// });

module.exports = Music;

const request = require("request");
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
                cover: item.album_logo,
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
              )
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
}

// let musicApi = new Music();
// musicApi.searchSong("thunder", 1, 5).then(res => {
//   let data = res.results;
//   for (let item of data) {
//     if (item.needPay) {
//       continue; // need pay! But file is saved at 'plus'
//     }
//     musicApi.getSong(item.id).then(res => {
//       console.log(res);
//     });
//   }
// });

module.exports = Music;

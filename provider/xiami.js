// const request = require("request");
// function caesar(location) {
//   var num = location[0];
//   var avg_len = Math.floor(location.slice(1).length / num);
//   var remainder = location.slice(1).length % num;

//   var result = [];
//   for (var i = 0; i < remainder; i++) {
//     var line = location.slice(
//       i * (avg_len + 1) + 1,
//       (i + 1) * (avg_len + 1) + 1
//     );
//     result.push(line);
//   }

//   for (var i = 0; i < num - remainder; i++) {
//     var line = location
//       .slice((avg_len + 1) * remainder)
//       .slice(i * avg_len + 1, (i + 1) * avg_len + 1);
//     result.push(line);
//   }

//   var s = [];
//   for (var i = 0; i < avg_len; i++) {
//     for (var j = 0; j < num; j++) {
//       s.push(result[j][i]);
//     }
//   }

//   for (var i = 0; i < remainder; i++) {
//     s.push(result[i].slice(-1));
//   }

//   return unescape(s.join("")).replace(/\^/g, "0");
// }

// function handleProtocolRelativeUrl(url) {
//   var regex = /^.*?\/\//;
//   var result = url.replace(regex, "http://");
//   return result;
// }

// function xm_retina_url(s) {
//   if (s.slice(-6, -4) == "_1") {
//     return s.slice(0, -6) + s.slice(-4);
//   }
//   return s;
// }

// const getSong = () => {
//   let id = "1776156051";
//   let targetUrl =
//     "http://www.xiami.com/song/playlist/id/" +
//     id +
//     "/object_name/default/object_id/0/cat/json";
//   request(targetUrl, function(error, response, body) {
//     let data = JSON.parse(body);
//     var location = data.data.trackList[0].location;
//     let sound = {},
//       track = {};
//     sound.url = handleProtocolRelativeUrl(caesar(location));
//     track.img_url = xm_retina_url(
//       handleProtocolRelativeUrl(data.data.trackList[0].pic)
//     );
//     track.album = data.data.trackList[0].album_name;
//     track.album_id = "xmalbum_" + data.data.trackList[0].album_id;
//     track.lyric_url = handleProtocolRelativeUrl(
//       data.data.trackList[0].lyric_url
//     );
//     console.log(sound);
//     console.log(track);
//   });
// };

// getSong();
const test = require("./test");
console.log(test);

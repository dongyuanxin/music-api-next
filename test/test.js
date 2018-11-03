// const musicApi = require("./../src/index");
var musicApi = require("./../dist/music-api-next");
console.log(musicApi.searchSong);

!(async function() {
  let res = await musicApi.searchSong({
    vendor: "5sing",
    key: "林俊杰",
    page: 1,
    limit: 1
  });
  if (res.success === false) return;
  let data = res.results;
  for (let music of data) {
    if (music.needPay) {
      console.log(music);
      continue;
    }
    // let info = await musicApi.getSong({
    //   id: music.id,
    //   vendor: "5sing"
    // });
    // console.log({ ...music, ...info.results });
    console.log(music.id);
    let info = await musicApi.getComment({
      id: music.id,
      vendor: "5sing",
      page: 1,
      limit: 1
    });
    console.log(info);
  }
})();

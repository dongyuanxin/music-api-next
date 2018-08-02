// const musicApi = require("./../src/index");
var musicApi = require("./../dist/music-api");
console.log(musicApi.searchSong);

!(async function() {
  let res = await musicApi.searchSong({
    vendor: "netease",
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
    //   vendor: "netease"
    // });
    // console.log({ ...music, ...info.results });
    console.log(music.id);
    let info = await musicApi.getComment({
      id: music.id,
      vendor: "netease",
      page: 1,
      limit: 1
    });
  }
})();

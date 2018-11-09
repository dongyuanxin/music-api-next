const musicApi = require("./../src/index");
// var musicApi = require("./../dist/music-api-next");
console.log(musicApi.searchSong);

!(async function() {
  // let res = await musicApi.searchSong({
  //   vendor: "5sing",
  //   key: "周杰伦",
  //   page: 1,
  //   limit: 5
  // });
  // console.log(res)
  // return;
  // if (res.success === false) return;
  // let data = res.results;
  // for (let music of data) {
  //   if (music.needPay) {
  //     console.log(music);
  //     continue;
  //   }
    // let info = await musicApi.getSong({
    //   id: music.id,
    //   vendor: "5sing"
    // });
    // console.log({ ...music, ...info.results });
    // console.log(music.id);
    let info = await musicApi.getSong({
      // id: 2385228,
      id: 2591470,
      limit: 20,
      page: 1,
      vendor: "5sing"
    });
    console.log(info)
    // console.log(info.results[0].user);
  
})();

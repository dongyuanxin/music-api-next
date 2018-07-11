const musicApi = require("./../src/index");

!(async function() {
  let res = await musicApi.searchSong({
    vendor: "netease",
    key: "周杰伦"
    // page: 2,
    // limit: 3
  });
  if (res.success === false) return;
  let data = res.results;
  for (let music of data) {
    if (music.needPay) {
      console.log(music);
      continue;
    }
    let info = await musicApi.getSong({
      id: music.id,
      vendor: "qq"
    });
    console.log({ ...music, ...info.results });
  }
})();

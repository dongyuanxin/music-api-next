const Netease = require("./provider/netease");
const QQ = require("./provider/qq");
const Xiami = require("./provider/xiami");

const api = {
  netease: new Netease(),
  qq: new QQ(),
  xiami: new Xiami()
};

const isEmptyStr = str => str === "" || str === undefined || str === null;
const isUnvalidVendor = vendor =>
  isEmptyStr(vendor) || Object.keys(api).indexOf(vendor) < 0;

const searchSong = async options => {
  let { key, page, limit, vendor } = options;
  if (isEmptyStr(key) || isUnvalidVendor(vendor)) {
    return {
      success: false,
      msg: "Missing parameter"
    };
  }
  page = page === undefined ? 1 : page;
  limit = limit === undefined ? 20 : limit;
  return await api[vendor].searchSong(key, page, limit);
};

const getSong = async options => {
  let { id, vendor } = options;
  if (isUnvalidVendor(vendor) || id === undefined) {
    return { success: false, msg: "Missing parameter" };
  }
  return await api[vendor].getSong(id);
};

module.exports = {
  searchSong,
  getSong
};

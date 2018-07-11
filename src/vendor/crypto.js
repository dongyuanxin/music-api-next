const CryptoJS = require("crypto-js");

(function() {
  function b(a, b) {
    var c = CryptoJS.enc.Utf8.parse(b),
      d = CryptoJS.enc.Utf8.parse("0102030405060708"),
      e = CryptoJS.enc.Utf8.parse(a),
      f = CryptoJS.AES.encrypt(e, c, {
        iv: d,
        mode: CryptoJS.mode.CBC
      });
    return f.toString();
  }
  function d(d, e, f, g) {
    var h = {},
      i = "u3wFl5eFwTWI7dHF",
      encSecKey =
        "1eb2800c1605520f6c62e45a3e7eb9a3d331a4f1491618e4c52c029fd29a2b8535dc58708ce099817dd52b4bb1c9b5243f734dd0236849fd0b2c912aa49fab35659cd72d6633850d121b824237b18b3485e2c36cef52a270fb177aa17b2c7a865a836263a6db440eb1e6cd4a6066a0e379715d78b4b1caacaec76f45ce8a4e28";
    return (
      (h.encText = b(d, g)),
      (h.encText = b(h.encText, i)),
      (h.encSecKey = encSecKey),
      h
    );
  }
  module.exports = {
    asrsea: d
  };
})();

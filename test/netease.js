(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    }
    ;
    NEJ.P = function(Fk0x) {
        if (!Fk0x || !Fk0x.length)
            return null;
        var bcq9h = window;
        for (var a = Fk0x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bcq9h = bcq9h[a[i]] = bcq9h[a[i]] || {},
        i++)
            ;
        return bcq9h
    }
    ;
    NEJ.Q = function(bK0x, Fk0x) {
        bK0x = bK0x || NEJ.O;
        var bt0x = Fk0x.split(".");
        for (var i = 0, l = bt0x.length; i < l; i++) {
            bK0x = bK0x[bt0x[i]];
            if (!bK0x)
                break
        }
        return bK0x
    }
    ;
    NEJ.C = function() {
        var bzC5H = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bzE5J = function(C0x, bz0x) {
            for (var x in bz0x)
                if (C0x == bz0x[x])
                    return x;
            return null
        };
        var biC1x = {
            cv0x: 0,
            bm0x: 1,
            bB0x: 2,
            bV0x: 3,
            bJ0x: 4,
            ff2x: 5,
            ko3x: 6,
            eF1x: 7
        }
          , wC7v = {
            cD1x: 0,
            bn0x: 1,
            bG0x: 2,
            ch0x: 3,
            bR0x: 4,
            gT2x: 5,
            lw4A: 6,
            gq2x: 7
        };
        return function() {
            var fV2x = function() {
                this.bAu5z();
                return this.cv0x.apply(this, arguments)
            };
            fV2x.prototype.bAu5z = NEJ.F;
            fV2x.prototype.cv0x = NEJ.F;
            fV2x.N0x = function(Eg0x, bBk5p) {
                if (bzC5H(Eg0x))
                    return;
                if (bBk5p == null || !!bBk5p)
                    NEJ.X(this, Eg0x, bzC5H);
                this.cDS9J = Eg0x;
                this.cr0x = Eg0x.prototype;
                var bH0x = function() {};
                bH0x.prototype = Eg0x.prototype;
                this.prototype = new bH0x;
                var Ha1x = this.prototype;
                Ha1x.constructor = this;
                var cl0x;
                for (var x in biC1x) {
                    cl0x = bzE5J(biC1x[x], wC7v);
                    if (!cl0x || !this.cr0x[x])
                        continue;
                    Ha1x[x] = function(W0x) {
                        return function() {
                            this[W0x].apply(this, arguments)
                        }
                    }(cl0x)
                }
                var Is1x = {};
                for (var x in wC7v) {
                    cl0x = bzE5J(wC7v[x], biC1x);
                    if (!cl0x || !this.cr0x[cl0x])
                        continue;
                    Is1x[cl0x] = Eg0x;
                    Ha1x[x] = function(W0x) {
                        return function() {
                            var m9d, bH0x = this.bue3x[W0x], bgh0x = bH0x.prototype[W0x];
                            this.bue3x[W0x] = bH0x.cDS9J || Eg0x;
                            if (!!bgh0x)
                                m9d = bgh0x.apply(this, arguments);
                            this.bue3x[W0x] = Eg0x;
                            return m9d
                        }
                    }(cl0x)
                }
                Ha1x.bAu5z = function() {
                    this.bue3x = NEJ.X({}, Is1x)
                }
                ;
                Ha1x.cLL1x = Ha1x.cD1x;
                return Ha1x
            }
            ;
            return fV2x
        }
    }();
    NEJ.X = function(gE2x, bT0x, ed1x) {
        if (!gE2x || !bT0x)
            return gE2x;
        ed1x = ed1x || NEJ.F;
        for (var x in bT0x) {
            if (bT0x.hasOwnProperty(x) && !ed1x(bT0x[x], x))
                gE2x[x] = bT0x[x]
        }
        return gE2x
    }
    ;
    NEJ.EX = function(gE2x, bT0x) {
        if (!gE2x || !bT0x)
            return gE2x;
        for (var x in gE2x) {
            if (gE2x.hasOwnProperty(x) && bT0x[x] != null)
                gE2x[x] = bT0x[x]
        }
        return gE2x
    }
    ;
    var JR1x = Function.prototype;
    JR1x.eL2x = function(lK4O, xF8x) {
        var f = NEJ.F
          , xF8x = xF8x || f
          , lK4O = lK4O || f
          , dw1x = this;
        return function() {
            var d9g = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lK4O(d9g);
            if (!d9g.stopped) {
                d9g.value = dw1x.apply(this, d9g.args);
                xF8x(d9g)
            }
            return d9g.value
        }
    }
    ;
    JR1x.f9e = function() {
        var bh0x = arguments
          , gE2x = arguments[0]
          , bmZ2x = this;
        return function() {
            var uy7r = NEJ.R.slice.call(bh0x, 1);
            NEJ.R.push.apply(uy7r, arguments);
            return bmZ2x.apply(gE2x || window, uy7r)
        }
    }
    ;
    JR1x.ex1x = function() {
        var bh0x = arguments
          , gE2x = NEJ.R.shift.call(bh0x)
          , bmZ2x = this;
        return function() {
            NEJ.R.push.apply(arguments, bh0x);
            return bmZ2x.apply(gE2x || window, arguments)
        }
    }
    ;
    var JR1x = String.prototype;
    if (!JR1x.trim) {
        JR1x.trim = function() {
            var dh1x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(dh1x, "")
            }
        }()
    }
    if (!window.MWF)
        window.MWF = NEJ;
    if (!window.mwf)
        window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , O0x = c9h("nej.p")
      , wj7c = window.navigator.platform
      , wu7n = window.navigator.userAgent;
    var lF4J = {
        mac: wj7c,
        win: wj7c,
        linux: wj7c,
        ipad: wu7n,
        ipod: wu7n,
        iphone: wj7c,
        android: wu7n
    };
    O0x.Ku2x = lF4J;
    for (var x in lF4J)
        lF4J[x] = (new RegExp(x,"i")).test(lF4J[x]);
    lF4J.ios = lF4J.ipad || lF4J.iphone || lF4J.ipod;
    lF4J.tablet = lF4J.ipad;
    lF4J.desktop = lF4J.mac || lF4J.win || lF4J.linux && !lF4J.android;
    var iD3x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    O0x.ds1x = iD3x;
    if (/msie\s+(.*?);/i.test(wu7n) || /trident\/.+rv:([\d\.]+)/i.test(wu7n)) {
        iD3x.engine = "trident";
        iD3x.browser = "ie";
        iD3x.version = RegExp.$1;
        iD3x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var nc4g = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        iD3x.release = nc4g[document.documentMode] || nc4g[parseInt(iD3x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(wu7n)) {
        iD3x.engine = "webkit";
        iD3x.release = RegExp.$1 || "";
        iD3x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(wu7n)) {
        iD3x.engine = "gecko";
        iD3x.release = RegExp.$1 || "";
        iD3x.browser = "firefox";
        iD3x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(wu7n))
            iD3x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(wu7n)) {
        iD3x.engine = "presto";
        iD3x.release = RegExp.$1 || "";
        iD3x.browser = "opera";
        iD3x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(wu7n))
            iD3x.version = RegExp.$1 || ""
    }
    if (iD3x.browser == "unknow") {
        var nc4g = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nc4g.length, W0x; i < l; i++) {
            W0x = nc4g[i] == "safari" ? "version" : nc4g[i];
            if ((new RegExp(W0x + "/(.*?)(?=\\s|$)","i")).test(wu7n)) {
                iD3x.browser = nc4g[i];
                iD3x.version = RegExp.$1.trim();
                break
            }
        }
    }
    O0x.bCe5j = {};
    var bfY0x = iD3x.engine != "trident";
    O0x.nG4K = {
        gecko: iD3x.engine != "gecko",
        webkit: iD3x.engine != "webkit",
        presto: iD3x.engine != "presto",
        trident0: bfY0x || iD3x.release > "2.0",
        trident1: bfY0x || iD3x.release < "6.0",
        trident2: bfY0x || iD3x.release > "3.0",
        trident: bfY0x || iD3x.release >= "6.0"
    }
}
)();
(function() {
    var iB3x = NEJ.P("nej.c")
      , R0x = {};
    var bwt4x = function() {
        var dh1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y0x) {
            Y0x = Y0x || "";
            if (dh1x.test(Y0x))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Ok4o = function() {
        var bCn5s = function(j9a, bz0x) {
            if (!j9a || !j9a.length)
                return;
            for (var i = 0, l = j9a.length, jZ3x; i < l; i++) {
                jZ3x = j9a[i];
                if (jZ3x.indexOf("://") > 0)
                    bz0x[bwt4x(jZ3x)] = jZ3x
            }
        };
        var bi0x = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bT0x) {
            iB3x.Nu3x("root", bT0x.root || "/res/");
            var bnz2x, gj2x = iB3x.B9s("root");
            for (var x in bi0x) {
                bnz2x = bi0x[x];
                iB3x.Nu3x(x, bT0x[bnz2x.name] || gj2x + bnz2x.dft)
            }
            var Bo9f = bT0x.p_csrf;
            if (Bo9f == !0) {
                Bo9f = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iB3x.Nu3x("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, Bo9f));
            R0x.frames = {};
            bCn5s(bT0x.p_frame, R0x.frames);
            R0x.flashs = {};
            bCn5s(bT0x.p_flash, R0x.flashs)
        }
    }();
    iB3x.Nu3x = function(L0x, C0x) {
        R0x[L0x] = C0x
    }
    ;
    iB3x.B9s = function(L0x) {
        return R0x[L0x]
    }
    ;
    iB3x.ckp5u = function(Y0x) {
        var sk6e = bwt4x(Y0x);
        return R0x.frames[sk6e] || sk6e + "/res/nej_proxy_frame.html"
    }
    ;
    iB3x.cwc8U = function(Y0x) {
        return R0x.flashs[bwt4x(Y0x)]
    }
    ;
    Ok4o(window.NEJ_CONF || NEJ.O)
}
)();
(function() {
    var c9h = NEJ.P
      , O0x = c9h("nej.p")
      , iB3x = c9h("nej.c")
      , bT0x = window.NEJ_CONF || NEJ.O;
    if (O0x.nG4K.trident)
        return;
    iB3x.Nu3x("storage.swf", bT0x.storage || iB3x.B9s("root") + "nej_storage.swf");
    if (O0x.ds1x.release < "4.0") {
        iB3x.Nu3x("blank.png", bT0x.blank || iB3x.B9s("root") + "nej_blank.gif")
    }
    var j9a = bT0x.xdr
      , gM2x = /^(https?:\/\/.*?)(?=\/|$)/i
      , kw3x = /[\/?=&]/i;
    var bDy6s = function(Y0x) {
        return (gM2x.test(Y0x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!j9a && !!j9a.length)
        for (var i = j9a.length - 1, Y0x, L0x; i >= 0; i--) {
            Y0x = j9a[i];
            L0x = bDy6s(Y0x);
            if (!!L0x)
                iB3x.Nu3x(L0x, Y0x)
        }
    iB3x.cLx1x = function(Y0x) {
        var L0x = bDy6s(Y0x);
        if (!L0x) {
            if (kw3x.test(Y0x)) {
                L0x = location.protocol + "//" + location.host
            } else if (Y0x.indexOf("://") < 0) {
                L0x = location.protocol + "//" + Y0x
            } else {
                L0x = Y0x
            }
        }
        return iB3x.B9s(L0x) || L0x + "/res/nej_xdomain.html"
    }
}
)();
(function() {
    var c9h = NEJ.P
      , iB3x = c9h("nej.c")
      , O0x = c9h("nej.g")
      , gW2x = +(new Date);
    O0x.cLt1x = 1e4 - gW2x;
    O0x.bqc2x = 10001 - gW2x;
    O0x.cLs1x = 10002 - gW2x;
    O0x.bDZ6T = 10003 - gW2x;
    O0x.caO2x = 10004 - gW2x;
    O0x.cLm1x = 10005 - gW2x;
    O0x.bza5f = 10006 - gW2x;
    O0x.cgj4n = 10007 - gW2x;
    O0x.yH8z = "Content-Type";
    O0x.cLh1x = "text/plain";
    O0x.Ht1x = "multipart/form-data";
    O0x.clg5l = "application/x-www-form-urlencoded";
    O0x.bkK1x = iB3x.B9s("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
}
)();
(function() {
    var c9h = NEJ.P
      , fD2x = NEJ.R
      , O0x = c9h("nej.p")
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , k9b = c9h("nej.u")
      , bg0x = c9h("nej.h");
    var kB3x = O0x.ds1x.prefix
      , bFV6P = O0x.bCe5j
      , cnr5w = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    }
      , cqh6b = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    }
      , Pg4k = {
        transition: !0,
        transform: !0,
        animation: !0,
        keyframes: !0,
        box: !0,
        "box-pack": !0,
        "box-flex": !0,
        marquee: !0,
        "border-radius": !0,
        "user-select": !0
    };
    var Ok4o = function() {
        var tZ6T = bg0x.bHb7U();
        bFV6P.css3d = !!tZ6T && tZ6T.m41 != null;
        var dh1x = /-([a-z])/g;
        for (var x in Pg4k) {
            Pg4k[bIo7h(x)] = Pg4k[x]
        }
    };
    var bIo7h = function() {
        var dh1x = /-([a-z])/g;
        return function(W0x) {
            W0x = W0x || "";
            return W0x.replace(dh1x, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bIE7x = function(W0x) {
        return (!bFV6P.css3d ? cnr5w : cqh6b)[W0x]
    };
    var bIF7y = function() {
        var dh1x = /\s+/;
        return function(fV2x) {
            fV2x = (fV2x || "").trim();
            return !!fV2x ? fV2x.split(dh1x) : null
        }
    }();
    var beN0x = function(G0x, u9l, fV2x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return;
        k9b.bd0x(bIF7y(fV2x), function(eg1x) {
            G0x.classList[u9l](eg1x)
        })
    };
    bg0x.Kz2x = function(j9a) {
        return fD2x.slice.call(j9a, 0)
    }
    ;
    bg0x.biR1x = function(G0x) {
        return bg0x.Kz2x(G0x.children)
    }
    ;
    bg0x.biX1x = function(G0x, fV2x) {
        return bg0x.Kz2x(G0x.getElementsByClassName(fV2x))
    }
    ;
    bg0x.bje1x = function(G0x, Mm2x) {
        beN0x(G0x, "add", Mm2x)
    }
    ;
    bg0x.bkj1x = function(G0x, MB2x) {
        beN0x(G0x, "remove", MB2x)
    }
    ;
    bg0x.PC4G = function(G0x, MB2x, Mm2x) {
        beN0x(G0x, "remove", MB2x);
        beN0x(G0x, "add", Mm2x)
    }
    ;
    bg0x.bkU1x = function(G0x, fV2x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return !1;
        var j9a = G0x.classList;
        if (!j9a || !j9a.length)
            return !1;
        return k9b.dm1x(bIF7y(fV2x), function(eg1x) {
            return j9a.contains(eg1x)
        }) >= 0
    }
    ;
    bg0x.blF1x = function(G0x, eg1x) {}
    ;
    bg0x.bmc1x = function(G0x) {}
    ;
    bg0x.bmD2x = function(gr2x, ou4y) {
        gr2x.selectionEnd = ou4y.end || 0;
        gr2x.selectionStart = ou4y.start || 0;
        gr2x.focus()
    }
    ;
    bg0x.box2x = function(gr2x) {
        return {
            end: gr2x.selectionEnd,
            start: gr2x.selectionStart
        }
    }
    ;
    bg0x.boz2x = function() {
        var Fh0x = function(eg1x, d9g) {
            var G0x = h9c.X0x(d9g);
            if (!G0x.value)
                a8i.y9p(G0x, eg1x)
        };
        var Ji1x = function(eg1x, d9g) {
            a8i.w9n(h9c.X0x(d9g), eg1x)
        };
        return function(G0x, fu2x, eg1x) {
            if (fu2x == 1) {
                h9c.s9j(G0x, "blur", Fh0x.f9e(null, eg1x))
            }
            if (fu2x == 1 || fu2x == -1) {
                h9c.s9j(G0x, "focus", Ji1x.f9e(null, eg1x))
            }
        }
    }();
    bg0x.buq3x = function(H0x) {
        return (new XMLSerializer).serializeToString(H0x) || ""
    }
    ;
    bg0x.buM4Q = function(BG9x) {
        var gj2x = (new DOMParser).parseFromString(BG9x, "text/xml").documentElement;
        return gj2x.nodeName == "parsererror" ? null : gj2x
    }
    ;
    bg0x.bvl4p = function(G0x) {}
    ;
    bg0x.ox4B = function(G0x) {
        return null
    }
    ;
    bg0x.bxx4B = function(G0x) {
        return null
    }
    ;
    bg0x.bxG4K = function(dR1x) {}
    ;
    bg0x.byR5W = function() {
        var bh0x = bg0x.Kz2x(arguments);
        bh0x[0] = a8i.B9s(bh0x[0]);
        if (!bh0x[0])
            return null;
        bh0x[1] = (bh0x[1] || "").toLowerCase();
        if (!bh0x[1])
            return null;
        return bh0x
    }
    ;
    bg0x.Ct9k = function() {
        var xa8S = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }
          , jr3x = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var cEq9h = function(u9l) {
            return (kB3x.evt || kB3x.pro) + u9l
        };
        return function() {
            var bh0x = bg0x.byR5W.apply(bg0x, arguments);
            if (!bh0x)
                return;
            var beb9S = jr3x[bh0x[1]]
              , bdZ9Q = xa8S[bh0x[1]];
            if (!!beb9S) {
                bh0x[4] = bh0x[1];
                bh0x[1] = cEq9h(beb9S)
            } else if (!!bdZ9Q) {
                var W0x = "on" + bh0x[1];
                if (!(W0x in bh0x[0])) {
                    bh0x[4] = bh0x[1];
                    bh0x[1] = bdZ9Q
                }
            }
            return bh0x
        }
    }();
    bg0x.biD1x = function() {
        var bh0x = arguments;
        bh0x[0].addEventListener(bh0x[1], bh0x[2], !!bh0x[3])
    }
    ;
    bg0x.bdY9P = function() {
        var bh0x = arguments;
        bh0x[0].removeEventListener(bh0x[1], bh0x[2], !!bh0x[3])
    }
    ;
    bg0x.biP1x = function(G0x, u9l, e9f) {
        var d9g = document.createEvent("Event");
        d9g.initEvent(u9l, !0, !0);
        NEJ.X(d9g, e9f);
        G0x.dispatchEvent(d9g)
    }
    ;
    bg0x.bHb7U = function() {
        var gM2x = /\((.*?)\)/
          , kw3x = /\s*,\s*/
          , j9a = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bdN9E = function(tZ6T) {
            var iv3x = {};
            if (gM2x.test(tZ6T || "")) {
                k9b.bd0x(RegExp.$1.split(kw3x), function(C0x, r9i) {
                    iv3x[j9a[r9i]] = C0x || ""
                })
            }
            return iv3x
        };
        return function(tZ6T) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(tZ6T);
            var W0x = kB3x.clz + "CSSMatrix";
            if (!!window[W0x])
                return new window[W0x](tZ6T || "");
            return bdN9E(tZ6T)
        }
    }();
    bg0x.bIN7G = function() {
        var dh1x = /\{(.*?)\}/g;
        return function(W0x, bz0x) {
            bz0x = bz0x || o;
            var ph5m = bIE7x(W0x);
            return !ph5m ? "" : ph5m.replace(dh1x, function($1, $2) {
                var bt0x = $2.split("|");
                return bz0x[bt0x[0]] || bt0x[1] || "0"
            })
        }
    }();
    bg0x.bkF1x = function(G0x, W0x, C0x) {
        G0x.style[bg0x.bIO7H(W0x)] = C0x
    }
    ;
    bg0x.bIO7H = function() {
        var dh1x = /^[a-z]/
          , bkO1x = kB3x.css;
        var cEO0x = function(W0x) {
            return W0x.replace(dh1x, function($1) {
                return bkO1x + $1.toUpperCase()
            })
        };
        return function(W0x) {
            W0x = bIo7h(W0x);
            var cEY0x = bg0x.bXx2x(W0x, Pg4k);
            return cEY0x ? cEO0x(W0x) : W0x
        }
    }();
    bg0x.bXx2x = function() {
        var dh1x = /^([a-z]+?)[A-Z]/;
        return function(W0x, bz0x) {
            if (!bz0x[W0x]) {
                if (dh1x.test(W0x))
                    W0x = RegExp.$1
            }
            return !!bz0x[W0x]
        }
    }();
    bg0x.bXy2x = function() {
        var dh1x = /\$<(.*?)>/gi
          , bkO1x = "-" + kB3x.css.toLowerCase() + "-";
        return function(kI3x) {
            return kI3x.replace(dh1x, function($1, $2) {
                var fA2x = $2
                  , bt0x = fA2x.split("|")
                  , ph5m = bIE7x(bt0x[0]);
                if (!!ph5m) {
                    return bg0x.bIN7G(bt0x[0], k9b.hf2x(bt0x[1]))
                }
                return !bg0x.bXB2x(fA2x, Pg4k) ? fA2x : bkO1x + fA2x
            })
        }
    }();
    bg0x.bXB2x = function(W0x, bz0x) {
        return !!bz0x[W0x]
    }
    ;
    bg0x.bns2x = function(cj0x, kI3x) {
        cj0x.textContent = kI3x
    }
    ;
    bg0x.bol2x = function(cj0x, kI3x) {
        var yI8A = cj0x.sheet
          , bs0x = yI8A.cssRules.length;
        yI8A.insertRule(kI3x, bs0x);
        return yI8A.cssRules[bs0x]
    }
    ;
    bg0x.cKo1x = function(G0x, e9f) {}
    ;
    bg0x.bdo9f = function(bdj9a) {
        return (bdj9a || "").toLowerCase() != "transparent"
    }
    ;
    bg0x.bXC2x = function(G0x) {}
    ;
    bg0x.bsh3x = function(G0x, W0x) {
        if (!!G0x.getAttribute)
            return G0x.getAttribute(W0x);
        return ""
    }
    ;
    bg0x.bdh9Y = function(eV2x) {
        a8i.cO1x(eV2x)
    }
    ;
    Ok4o()
}
)();
(function() {
    var c9h = NEJ.P
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , O0x = c9h("nej.p")
      , bg0x = c9h("nej.h");
    if (O0x.nG4K.trident0)
        return;
    var gW2x = +(new Date);
    R0x = {};
    bg0x.blF1x = bg0x.blF1x.eL2x(function(d9g) {
        d9g.stopped = !0;
        var bh0x = d9g.args
          , D0x = a8i.lQ4U(bh0x[0])
          , L0x = "hover-" + D0x;
        if (!D0x || !!R0x[L0x])
            return;
        R0x[L0x] = !0;
        h9c.s9j(D0x, "mouseenter", a8i.w9n.f9e(a8i, D0x, bh0x[1]));
        h9c.s9j(D0x, "mouseleave", a8i.y9p.f9e(a8i, D0x, bh0x[1]))
    });
    bg0x.bmc1x = function() {
        var cKm1x = function() {};
        return bg0x.bmc1x.eL2x(function(d9g) {
            d9g.stopped = !0;
            var G0x = d9g.args[0]
              , D0x = "fixed-" + a8i.lQ4U(G0x);
            if (!!R0x[D0x])
                return;
            var bi0x = {};
            R0x[D0x] = bi0x
        })
    }();
    bg0x.bvl4p = bg0x.bvl4p.eL2x(function(d9g) {
        d9g.stopped = !0;
        var G0x = d9g.args[0]
          , cj0x = G0x.style
          , bJe7X = a8i.oJ5O();
        cj0x.width = bJe7X.scrollWidth + "px";
        cj0x.height = bJe7X.scrollHeight + "px"
    });
    bg0x.ox4B = bg0x.ox4B.eL2x(function(d9g) {
        d9g.stopped = !0;
        var G0x = d9g.args[0]
          , lz4D = R0x[G0x.msk];
        if (!lz4D) {
            G0x.msk = gW2x++;
            lz4D = a8i.dk1x("iframe");
            lz4D.style.position = "absolute";
            R0x[G0x.msk] = lz4D
        }
        d9g.value = lz4D;
        var cj0x = lz4D.style;
        cj0x.top = (parseInt(a8i.di1x(G0x, "top")) || 0) + "px";
        cj0x.left = (parseInt(a8i.di1x(G0x, "left")) || 0) + "px";
        cj0x.width = G0x.offsetWidth + "px";
        cj0x.height = G0x.offsetHeight + "px";
        G0x.insertAdjacentElement("beforeBegin", lz4D)
    });
    bg0x.bxx4B = bg0x.bxx4B.eL2x(function(d9g) {
        d9g.stopped = !0;
        var lz4D = R0x[d9g.args[0].msk];
        if (!!lz4D)
            a8i.mO4S(lz4D)
    })
}
)();
(function() {
    var c9h = NEJ.P
      , O0x = c9h("nej.p")
      , a8i = c9h("nej.e")
      , bg0x = c9h("nej.h");
    if (O0x.nG4K.trident1)
        return;
    bg0x.Ct9k = function() {
        var xa8S = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bg0x.Ct9k.eL2x(function(d9g) {
            var bh0x = bg0x.byR5W.apply(bg0x, d9g.args);
            if (!bh0x) {
                d9g.stopped = !0;
                return
            }
            var u9l = xa8S[bh0x[1]];
            if (!!u9l && ("on" + u9l).toLowerCase()in bh0x[0]) {
                bh0x[4] = bh0x[1];
                bh0x[1] = u9l;
                d9g.stopped = !0;
                d9g.value = bh0x
            }
        })
    }();
    bg0x.bdo9f = function(bdj9a) {
        return !0
    }
    ;
    bg0x.bdh9Y = bg0x.bdh9Y.eL2x(function(d9g) {
        d9g.stopped = !0;
        var eV2x = d9g.args[0];
        a8i.ba0x(eV2x, "display", "none");
        try {
            eV2x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , O0x = c9h("nej.p")
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , k9b = c9h("nej.u")
      , bg0x = c9h("nej.h")
      , bxM4Q = {};
    if (O0x.nG4K.trident)
        return;
    bg0x.Kz2x = bg0x.Kz2x.eL2x(function(d9g) {
        d9g.stopped = !0;
        var j9a = d9g.args[0];
        if (!j9a) {
            d9g.value = null;
            return
        }
        var r9i = 0
          , m9d = [];
        while (!!j9a[r9i]) {
            m9d.push(j9a[r9i++])
        }
        d9g.value = m9d
    });
    bg0x.biR1x = bg0x.biR1x.eL2x(function(d9g) {
        d9g.stopped = !0;
        var bt0x = [];
        k9b.bd0x(d9g.args[0].childNodes, function(g9d) {
            if (g9d.nodeType == 1)
                bt0x.push(g9d)
        });
        d9g.value = bt0x
    });
    bg0x.biX1x = bg0x.biX1x.eL2x(function(d9g) {
        var G0x = d9g.args[0];
        if (!!G0x.getElementsByClassName)
            return;
        d9g.stopped = !0;
        var m9d = []
          , Ri5n = new RegExp("(\\s|^)(?:" + d9g.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k9b.bd0x(G0x.getElementsByTagName("*"), function(g9d) {
            if (Ri5n.test(g9d.className))
                m9d.push(g9d)
        });
        d9g.value = m9d
    });
    bg0x.bmD2x = bg0x.bmD2x.eL2x(function(d9g) {
        var gr2x = d9g.args[0]
          , ou4y = d9g.args[1];
        if (gr2x.selectionStart == null) {
            d9g.stopped = !0;
            var de1x = gr2x.createTextRange();
            de1x.collapse(!0);
            de1x.moveStart("character", ou4y.start);
            de1x.moveEnd("character", ou4y.end - ou4y.start);
            de1x.select();
            gr2x.focus()
        }
    });
    bg0x.box2x = bg0x.box2x.eL2x(function(d9g) {
        var gr2x = d9g.args[0];
        gr2x.focus();
        if (gr2x.selectionStart == null) {
            d9g.stopped = !0;
            var bJf7Y = document.selection.createRange();
            var bJg7Z = gr2x.createTextRange();
            bJg7Z.moveToBookmark(bJf7Y.getBookmark());
            var bgX0x = gr2x.createTextRange();
            bgX0x.collapse(!0);
            bgX0x.setEndPoint("EndToStart", bJg7Z);
            var hD2x = bgX0x.text.length;
            d9g.value = {
                start: hD2x,
                end: hD2x + bJf7Y.text.length
            }
        }
    });
    bg0x.buq3x = bg0x.buq3x.eL2x(function(d9g) {
        if (!!window.XMLSerializer)
            return;
        d9g.stopped = !0;
        var G0x = d9g.args[0];
        d9g.value = G0x.xml != null ? G0x.xml : G0x.outHTML
    });
    bg0x.buM4Q = function() {
        var Ro5t = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bYD2x = function() {
            try {
                for (var i = 0, l = Ro5t.length; i < l; i++)
                    return new ActiveXObject(Ro5t[i])
            } catch (ex) {
                return null
            }
        };
        return bg0x.buM4Q.eL2x(function(d9g) {
            if (!!window.DOMParser)
                return;
            d9g.stopped = !0;
            var oI5N = bYD2x();
            if (!!oI5N && oI5N.loadXML(d9g.args[0]) && !oI5N.parseError.errorCode)
                d9g.value = oI5N.documentElement
        })
    }();
    bg0x.Ct9k = function() {
        var jr3x = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jr3x)
            bxM4Q[jr3x[x]] = !0;
        var bYP2x = function(G0x, u9l) {
            if ("on" + u9l in G0x)
                return null;
            return jr3x[u9l] || ""
        };
        var bYT2x = function(u9l, dw1x) {
            var cC1x = dw1x;
            switch (u9l) {
            case "readystatechange":
                cC1x = function(d9g) {
                    var G0x = h9c.X0x(d9g) || this;
                    if (G0x.readyState == "loaded" || G0x.readyState == "complete") {
                        d9g.target = G0x;
                        dw1x.call(G0x, d9g)
                    }
                }
                ;
                break;
            case "propertychange":
                cC1x = function(d9g) {
                    var G0x = h9c.X0x(d9g) || this;
                    if ("value"in G0x && d9g.propertyName == "value") {
                        d9g.target = G0x;
                        dw1x.call(G0x, d9g)
                    }
                }
                ;
                break
            }
            return cC1x
        };
        return bg0x.Ct9k.eL2x(function(d9g) {
            var bh0x = bg0x.byR5W.apply(bg0x, d9g.args);
            if (!bh0x) {
                d9g.stopped = !0;
                return
            }
            var u9l = bYP2x(bh0x[0], bh0x[1]);
            if (!!u9l) {
                d9g.stopped = !0;
                bh0x[4] = bh0x[1];
                bh0x[1] = u9l;
                if (!!bh0x[2]) {
                    bh0x[5] = bh0x[2];
                    bh0x[2] = bYT2x(bh0x[1], bh0x[2])
                }
                d9g.value = bh0x
            }
        }, function(d9g) {
            var bh0x = d9g.value;
            if (!bh0x[0] || !k9b.gO2x(bh0x[2]))
                return;
            if (!k9b.gO2x(bh0x[5]))
                bh0x[5] = bh0x[2];
            bh0x[2] = bh0x[2].f9e(bh0x[0])
        })
    }();
    bg0x.biD1x = bg0x.biD1x.eL2x(function(d9g) {
        var bh0x = d9g.args;
        if (!!bxM4Q[bh0x[1]] || !document.addEventListener) {
            d9g.stopped = !0;
            bh0x[0].attachEvent("on" + bh0x[1], bh0x[2])
        }
    });
    bg0x.bdY9P = bg0x.bdY9P.eL2x(function(d9g) {
        var bh0x = d9g.args;
        if (!!bxM4Q[bh0x[1]] || !document.removeEventListener) {
            d9g.stopped = !0;
            bh0x[0].detachEvent("on" + bh0x[1], bh0x[2])
        }
    });
    bg0x.biP1x = bg0x.biP1x.eL2x(function(d9g) {
        if (!document.createEvent) {
            d9g.stopped = !0;
            var bh0x = d9g.args
              , bJP7I = document.createEventObject();
            NEJ.X(bJP7I, bh0x[2]);
            try {
                bh0x[0].fireEvent("on" + bh0x[1], bJP7I)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bg0x.bkF1x = bg0x.bkF1x.eL2x(function(d9g) {
        var bh0x = d9g.args
          , W0x = bh0x[1].toLowerCase();
        if (W0x == "opacity" && !(W0x in document.body.style)) {
            bh0x[1] = "filter";
            bh0x[2] = "alpha(opacity=" + bh0x[2] * 100 + ")"
        }
    });
    bg0x.bns2x = function() {
        var fv2x = 30;
        return bg0x.bns2x.eL2x(function(d9g) {
            var G0x = d9g.args[0];
            if (!G0x.styleSheet)
                return;
            d9g.stopped = !0;
            var kI3x = d9g.args[1];
            var j9a = document.styleSheets;
            if (j9a.length > fv2x) {
                G0x = j9a[fv2x];
                kI3x = G0x.cssText + kI3x
            } else {
                G0x = G0x.styleSheet
            }
            G0x.cssText = kI3x
        })
    }();
    bg0x.bol2x = bg0x.bol2x.eL2x(function(d9g) {
        var bh0x = d9g.args
          , yI8A = bh0x[0].sheet;
        if (!!yI8A)
            return;
        d9g.stopped = !0;
        var yI8A = bh0x[0].styleSheet
          , bs0x = yI8A.rules.length
          , bt0x = bh0x[1].split(/[\{\}]/);
        yI8A.addRule(bt0x[0], bt0x[1], bs0x);
        d9g.value = yI8A.rules[bs0x]
    });
    bg0x.boz2x = function() {
        var Fh0x = function(eg1x, d9g) {
            a8i.y9p(h9c.X0x(d9g), eg1x)
        };
        return bg0x.boz2x.eL2x(function(d9g) {
            if (O0x.ds1x.release >= "4.0")
                return;
            var bh0x = d9g.args;
            if (bh0x[1] != 1) {
                h9c.s9j(bh0x[0], "blur", Fh0x.f9e(null, bh0x[2]));
                bh0x[1] = -1
            }
        })
    }();
    bg0x.bdo9f = function(bdj9a) {
        return !0
    }
    ;
    bg0x.bsh3x = bg0x.bsh3x.eL2x(function(d9g) {
        var bh0x = d9g.args
          , g9d = (bh0x[0].attributes || bb0x)[bh0x[1]];
        if (!!g9d) {
            d9g.stopped = !0;
            d9g.value = g9d.value
        }
    }, function(d9g) {
        var bh0x = d9g.args;
        if (bh0x[1] == "maxlength" && d9g.value == 2147483647)
            d9g.value = ""
    });
    if (O0x.ds1x.release < 5) {
        bg0x.bxG4K = function() {
            var ej1x, eV2x, kx3x = [], bkd1x = "cb-" + +(new Date), bp0x = '<script>parent.nej.h["' + bkd1x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bJS7L = function() {
                ej1x = window.clearTimeout(ej1x);
                if (!kx3x.length)
                    return;
                var dR1x = kx3x.shift();
                try {
                    var xi8a = eV2x.contentWindow.document;
                    xi8a.open();
                    xi8a.write("<head><title>");
                    xi8a.write(document.title);
                    xi8a.write("</title>");
                    xi8a.write(bp0x.replace("#<HASH>", encodeURIComponent(dR1x)));
                    xi8a.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        xi8a.domain = document.domain;
                    xi8a.close();
                    bg0x[bkd1x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    kx3x.unshift(dR1x)
                }
                ej1x = window.setTimeout(bJS7L, 50)
            };
            return bg0x.bxG4K.eL2x(function(d9g) {
                d9g.stopped = !0;
                var dR1x = d9g.args[0];
                if (!!bg0x[bkd1x] || !eV2x && !dR1x)
                    return;
                kx3x.push(dR1x);
                if (!eV2x)
                    eV2x = a8i.bcR9I();
                bJS7L()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
}
)();
(function() {
    var c9h = NEJ.P
      , h9c = c9h("nej.v")
      , bg0x = c9h("nej.h")
      , O0x = c9h("nej.p")
      , bcM9D = O0x.bCe5j;
    if (O0x.nG4K.gecko)
        return;
    var Ok4o = function() {
        bcM9D.css3d = bcM9D.css3d || "MozPerspective"in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function(jv3x, G0x) {
                if (!jv3x || !G0x)
                    return;
                switch (jv3x) {
                case "beforeEnd":
                    this.appendChild(G0x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(G0x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(G0x) : this.insertBefore(G0x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(G0x) : this.parentNode.insertBefore(G0x, this.nextSibling);
                    return
                }
            }
            ;
        if (!("innerText"in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bp0x) {
                this.textContent = bp0x
            })
        }
    };
    bg0x.Ct9k = function() {
        var gM2x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bg0x.Ct9k.eL2x(function(d9g) {
            var bh0x = d9g.args;
            if (gM2x.test(bh0x[1] || "")) {
                d9g.stopped = !0;
                d9g.value = bh0x
            }
        })
    }();
    bg0x.bXC2x = function() {
        var bZc2x = function(d9g) {
            h9c.bf0x(d9g);
            h9c.X0x(d9g).control.click()
        };
        return function(G0x) {
            h9c.s9j(G0x, "click", bZc2x)
        }
    }();
    Ok4o()
}
)();
(function() {
    var c9h = NEJ.P
      , a8i = c9h("nej.e")
      , bg0x = c9h("nej.h");
    var bcK9B = function() {
        var nc4g = !!document.body.classList;
        return function() {
            return nc4g
        }
    }();
    var bKp7i = function() {
        var dh1x = /\s+/g;
        return function(fV2x) {
            fV2x = (fV2x || "").trim();
            return !fV2x ? null : new RegExp("(\\s|^)(?:" + fV2x.replace(dh1x, "|") + ")(?=\\s|$)","g")
        }
    }();
    bg0x.PC4G = bg0x.PC4G.eL2x(function(d9g) {
        if (bcK9B())
            return;
        d9g.stopped = !0;
        var bh0x = d9g.args
          , G0x = a8i.B9s(bh0x[0]);
        if (!G0x || !bh0x[1] && !bh0x[2])
            return;
        var fV2x = G0x.className || "";
        var Mm2x = " " + (bh0x[2] || "")
          , MB2x = bKp7i((bh0x[1] || "") + Mm2x);
        !!MB2x && (fV2x = fV2x.replace(MB2x, "$1"));
        G0x.className = (fV2x + Mm2x).replace(/\s+/g, " ").trim()
    });
    bg0x.bje1x = bg0x.bje1x.eL2x(function(d9g) {
        if (bcK9B())
            return;
        d9g.stopped = !0;
        var bh0x = d9g.args;
        bg0x.PC4G(bh0x[0], "", bh0x[1])
    });
    bg0x.bkj1x = bg0x.bkj1x.eL2x(function(d9g) {
        if (bcK9B())
            return;
        d9g.stopped = !0;
        var bh0x = d9g.args;
        bg0x.PC4G(bh0x[0], bh0x[1], "")
    });
    bg0x.bkU1x = bg0x.bkU1x.eL2x(function(d9g) {
        if (bcK9B())
            return;
        d9g.stopped = !0;
        var bh0x = d9g.args
          , G0x = a8i.B9s(bh0x[0]);
        if (!G0x) {
            d9g.value = !1;
            return
        }
        var dh1x = bKp7i(bh0x[1]);
        d9g.value = !dh1x ? !1 : dh1x.test(G0x.className || "")
    })
}
)();
(function() {
    var c9h = NEJ.P
      , O0x = c9h("nej.p")
      , bg0x = c9h("nej.h");
    if (O0x.nG4K.webkit)
        return;
    bg0x.bdo9f = function(bdj9a) {
        return !0
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bg0x = c9h("nej.h")
      , a8i = c9h("nej.e")
      , k9b = c9h("nej.u")
      , h9c = c9h("nej.v")
      , db1x = c9h("nej.x")
      , R0x = {};
    var bKB7u = function(G0x) {
        G0x = a8i.B9s(G0x);
        if (!G0x || !R0x[G0x.id])
            return;
        var bcx9o = !0
          , D0x = G0x.id;
        k9b.eH1x(R0x[D0x], function() {
            bcx9o = !1;
            return !0
        });
        if (bcx9o)
            delete R0x[D0x]
    };
    h9c.s9j = db1x.s9j = function() {
        var cbK3x = function() {
            var bh0x = bg0x.Ct9k.apply(bg0x, arguments);
            if (!bh0x || !bh0x[2])
                return;
            var vs7l = a8i.lQ4U(bh0x[0])
              , py5D = R0x[vs7l] || {};
            R0x[vs7l] = py5D;
            vs7l = bh0x[4] || bh0x[1];
            var Be9V = py5D[vs7l] || [];
            py5D[vs7l] = Be9V;
            Be9V.push({
                type: bh0x[1],
                func: bh0x[2],
                capt: !!bh0x[3],
                sfun: bh0x[5] || bh0x[2]
            });
            return bh0x.slice(0, 4)
        };
        return function() {
            var bh0x = cbK3x.apply(null, arguments);
            if (!!bh0x)
                bg0x.biD1x.apply(bg0x, bh0x);
            return this
        }
    }();
    h9c.mL4P = db1x.mL4P = function() {
        var ccz3x = function() {
            var uy7r = arguments
              , vs7l = a8i.lQ4U(uy7r[0])
              , py5D = R0x[vs7l]
              , u9l = (uy7r[1] || "").toLowerCase()
              , d9g = uy7r[2];
            if (!py5D || !u9l || !d9g)
                return;
            py5D = py5D[u9l];
            if (!py5D)
                return;
            var ccB3x = !!uy7r[3]
              , r9i = k9b.dm1x(py5D, function(jr3x) {
                return d9g == jr3x.sfun && ccB3x == jr3x.capt
            });
            if (r9i < 0)
                return;
            var jr3x = py5D.splice(r9i, 1)[0];
            return !jr3x ? null : [a8i.B9s(vs7l), jr3x.type, jr3x.func, jr3x.capt]
        };
        return function() {
            var bh0x = ccz3x.apply(null, arguments);
            if (!!bh0x) {
                bg0x.bdY9P.apply(bg0x, bh0x);
                bKB7u(bh0x[0])
            }
            return this
        }
    }();
    h9c.ho2x = db1x.ho2x = function() {
        var bLF8x = function() {
            var uy7r = arguments
              , vs7l = a8i.lQ4U(uy7r[0])
              , py5D = R0x[vs7l]
              , Be9V = (uy7r[1] || "").toLowerCase();
            if (!py5D || !Be9V)
                return;
            var G0x = a8i.B9s(vs7l);
            k9b.nC4G(py5D[Be9V], function(jr3x, r9i, j9a) {
                bg0x.bdY9P(G0x, jr3x.type, jr3x.func, jr3x.capt);
                j9a.splice(r9i, 1)
            });
            delete py5D[Be9V]
        };
        var ccS3x = function(G0x) {
            G0x = a8i.B9s(G0x);
            if (!G0x)
                return;
            var D0x = G0x.id;
            k9b.eH1x(R0x[D0x], function(j9a, u9l) {
                bLF8x(D0x, u9l)
            });
            delete R0x[D0x]
        };
        return function(G0x, u9l) {
            !u9l ? ccS3x(G0x) : bLF8x(G0x, u9l);
            bKB7u(G0x);
            return this
        }
    }();
    h9c.X0x = function() {
        var btz3x;
        var Ns3x = function(W0x, G0x) {
            var bt0x = W0x.split(":");
            if (bt0x.length > 1) {
                if (!btz3x)
                    btz3x = {
                        c: a8i.bE0x,
                        d: a8i.t9k,
                        a: a8i.hb2x
                    };
                var Jh1x = btz3x[bt0x[0]];
                if (!!Jh1x)
                    return !!Jh1x(G0x, bt0x[1]);
                W0x = bt0x[1]
            }
            return !!a8i.hb2x(G0x, W0x) || !!a8i.t9k(G0x, W0x) || a8i.bE0x(G0x, W0x)
        };
        return function(d9g) {
            if (!d9g)
                return null;
            var G0x = d9g.target || d9g.srcElement
              , ed1x = arguments[1];
            if (!ed1x)
                return G0x;
            if (k9b.fJ2x(ed1x))
                ed1x = Ns3x.f9e(null, ed1x);
            if (k9b.gO2x(ed1x)) {
                while (G0x) {
                    if (!!ed1x(G0x))
                        return G0x;
                    G0x = G0x.parentNode
                }
                return null
            }
            return G0x
        }
    }();
    h9c.bf0x = function(d9g) {
        h9c.tH6B(d9g);
        h9c.co0x(d9g);
        return this
    }
    ;
    h9c.tH6B = function(d9g) {
        if (!!d9g) {
            !!d9g.stopPropagation ? d9g.stopPropagation() : d9g.cancelBubble = !0
        }
        return this
    }
    ;
    h9c.co0x = function(d9g) {
        if (!!d9g) {
            !!d9g.preventDefault ? d9g.preventDefault() : d9g.returnValue = !1
        }
        return this
    }
    ;
    h9c.cJF1x = function() {
        var qM5R = !1;
        var cfL4P = function() {
            if (qM5R)
                return;
            qM5R = !0;
            h9c.s9j(document, "click", cfT4X, !0)
        };
        var cfT4X = function(d9g) {
            var G0x = h9c.X0x(d9g)
              , cgf4j = a8i.t9k(G0x, "stopped");
            if (cgf4j == "true") {
                h9c.bf0x(d9g);
                a8i.t9k(G0x, "stopped", "false")
            }
        };
        return function(d9g) {
            if (!d9g)
                return;
            if (d9g.type == "click") {
                h9c.bf0x(d9g);
                return
            }
            cfL4P();
            a8i.t9k(h9c.X0x(d9g), "stopped", "true")
        }
    }();
    h9c.jN3x = function(d9g) {
        return d9g.pageX != null ? d9g.pageX : d9g.clientX + a8i.oJ5O().scrollLeft
    }
    ;
    h9c.mg4k = function(d9g) {
        return d9g.pageY != null ? d9g.pageY : d9g.clientY + a8i.oJ5O().scrollTop
    }
    ;
    h9c.z9q = db1x.z9q = function(G0x, u9l, e9f) {
        var bh0x = bg0x.Ct9k(G0x, u9l);
        if (!!bh0x)
            bg0x.biP1x(bh0x[0], bh0x[1], e9f);
        return this
    }
    ;
    c9h("dbg").dumpEV = function() {
        return R0x
    }
    ;
    db1x.isChange = !0
}
)();
(function() {
    var o = !0
      , w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a)
                return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify
                      , b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }
                        ).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)
                        return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)
                        try {
                            if (0 === a("0") && !a(!1)) {
                                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var e = 5 == f.a.length && 1 === f.a[0];
                                if (e) {
                                    try {
                                        e = !a('"\t"')
                                    } catch (g) {}
                                    if (e)
                                        try {
                                            e = 1 !== a("01")
                                        } catch (i) {}
                                }
                            }
                        } catch (O) {
                            e = !1
                        }
                    if (!c)
                        return e
                }
                return b && e
            }
        }
        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd, k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify,
        k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)
                var t = Math.floor
                  , J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                  , z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty))
                p = function(a) {
                    var f = {}, c;
                    if ((f.__proto__ = w,
                    f.__proto__ = {
                        toString: 1
                    },
                    f).toString != m)
                        p = function(a) {
                            var f = this.__proto__
                              , a = a in (this.__proto__ = w,
                            this);
                            this.__proto__ = f;
                            return a
                        }
                        ;
                    else {
                        c = f.constructor;
                        p = function(a) {
                            var f = (this.constructor || c).prototype;
                            return a in this && !(a in f && this[a] === f[a])
                        }
                    }
                    f = w;
                    return p.call(this, a)
                }
                ;
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0, b, h, n;
                (b = function() {
                    this.valueOf = 0
                }
                ).prototype.valueOf = 0;
                h = new b;
                for (n in h)
                    p.call(h, n) && c++;
                b = h = w;
                if (c)
                    c = c == 2 ? function(a, f) {
                        var c = {}, b = m.call(a) == "[object Function]", d;
                        for (d in a)
                            !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                    }
                    : function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        for (b in a)
                            !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                        (d || p.call(a, b = "constructor")) && f(b)
                    }
                    ;
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)
                            !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b))
                            ;
                    }
                }
                c(a, f)
            }
            ;
            if (!v("json-stringify")) {
                var L = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }
                  , u = function(a, f) {
                    return ("000000" + (f || 0)).slice(-a)
                }
                  , G = function(a) {
                    var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            f = f + L[e];
                            break;
                        default:
                            if (e < 32) {
                                f = f + ("\\u00" + u(2, e.toString(16)));
                                break
                            }
                            f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                }
                  , E = function(a, b, c, d, h, n, e) {
                    var g = b[a], i, j, k, l, q, s, v, x, y;
                    try {
                        g = b[a]
                    } catch (A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON"))
                            if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++)
                                        ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++)
                                        ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else
                                g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
                            g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w)
                        return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]")
                        return "" + g;
                    if (i == "[object Number]")
                        return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (i == "[object String]")
                        return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--; )
                            if (e[a] === g)
                                throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o),
                            j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null" : i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                        } else {
                            C(d || g, function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]")
                            h = b;
                        else if (m.call(b) == "[object Array]") {
                            j = {};
                            for (var e = 0, g = b.length, i; e < g; i = b[e++],
                            (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1))
                                ;
                        }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ")
                                    ;
                            }
                        } else
                            m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {},
                    i[""] = a,
                    i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode, N = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, b, A, j = function() {
                    b = A = w;
                    throw SyntaxError()
                }, q = function() {
                    for (var a = A, f = a.length, c, d, h, k, e; b < f; ) {
                        e = a.charCodeAt(b);
                        switch (e) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            b++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            c = s ? a.charAt(b) : a[b];
                            b++;
                            return c;
                        case 34:
                            c = "@";
                            for (b++; b < f; ) {
                                e = a.charCodeAt(b);
                                if (e < 32)
                                    j();
                                else if (e == 92) {
                                    e = a.charCodeAt(++b);
                                    switch (e) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        c = c + N[e];
                                        b++;
                                        break;
                                    case 117:
                                        d = ++b;
                                        for (h = b + 4; b < h; b++) {
                                            e = a.charCodeAt(b);
                                            e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                        }
                                        c = c + M("0x" + a.slice(d, b));
                                        break;
                                    default:
                                        j()
                                    }
                                } else {
                                    if (e == 34)
                                        break;
                                    e = a.charCodeAt(b);
                                    for (d = b; e >= 32 && e != 92 && e != 34; )
                                        e = a.charCodeAt(++b);
                                    c = c + a.slice(d, b)
                                }
                            }
                            if (a.charCodeAt(b) == 34) {
                                b++;
                                return c
                            }
                            j();
                        default:
                            d = b;
                            if (e == 45) {
                                k = o;
                                e = a.charCodeAt(++b)
                            }
                            if (e >= 48 && e <= 57) {
                                for (e == 48 && (e = a.charCodeAt(b + 1),
                                e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b),
                                e >= 48 && e <= 57); b++)
                                    ;
                                if (a.charCodeAt(b) == 46) {
                                    for (h = ++b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                e = a.charCodeAt(b);
                                if (e == 101 || e == 69) {
                                    e = a.charCodeAt(++b);
                                    (e == 43 || e == 45) && b++;
                                    for (h = b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                return +a.slice(d, b)
                            }
                            k && j();
                            if (a.slice(b, b + 4) == "true") {
                                b = b + 4;
                                return o
                            }
                            if (a.slice(b, b + 5) == "false") {
                                b = b + 5;
                                return false
                            }
                            if (a.slice(b, b + 4) == "null") {
                                b = b + 4;
                                return w
                            }
                            j()
                        }
                    }
                    return "$"
                }, F = function(a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@")
                            return a.slice(1);
                        if (a == "[") {
                            for (b = []; ; c || (c = o)) {
                                a = q();
                                if (a == "]")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else
                                        j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {}; ; c || (c = o)) {
                                a = q();
                                if (a == "}")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else
                                        j();
                                (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                }, I = function(a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                }, H = function(a, b, c) {
                    var d = a[b], h;
                    if (typeof d == "object" && d)
                        if (m.call(d) == "[object Array]")
                            for (h = d.length; h--; )
                                I(d, h, c);
                        else
                            C(d, function(a) {
                                I(d, a, c)
                            });
                    return c.call(a, b, d)
                };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                    d[""] = c,
                    d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    }
    )(this)
}
)();
(function() {
    var c9h = NEJ.P
      , O0x = c9h("nej.p");
    if (O0x.nG4K.trident0)
        return;
    JSON.parse = JSON.parse.eL2x(function(d9g) {
        var cQ1x = d9g.args[0] || "";
        if (cQ1x.length >= 5e5) {
            d9g.stopped = !0;
            d9g.value = eval("(" + cQ1x + ")")
        }
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, eq1x = c9h("nej.g"), a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), bg0x = c9h("nej.h"), db1x = c9h("nej.x"), Jj1x, bgK0x = {}, R0x = document.createDocumentFragment();
    a8i.lQ4U = db1x.lQ4U = function(G0x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return;
        var D0x = !!G0x.id ? G0x.id : "auto-id-" + k9b.SI6C(16);
        G0x.id = D0x;
        if (a8i.B9s(D0x) != G0x)
            bgK0x[D0x] = G0x;
        return D0x
    }
    ;
    a8i.B9s = db1x.B9s = function(G0x) {
        var g9d = bgK0x["" + G0x];
        if (!!g9d)
            return g9d;
        if (!k9b.fJ2x(G0x) && !k9b.tg6a(G0x))
            return G0x;
        return document.getElementById(G0x)
    }
    ;
    a8i.df1x = db1x.df1x = function(G0x, eg1x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return null;
        var j9a = bg0x.biR1x(G0x);
        if (!!eg1x)
            k9b.nC4G(j9a, function(g9d, r9i) {
                if (!a8i.bE0x(g9d, eg1x))
                    j9a.splice(r9i, 1)
            });
        return j9a
    }
    ;
    a8i.E0x = db1x.E0x = function(G0x, fV2x) {
        G0x = a8i.B9s(G0x);
        return !G0x ? null : bg0x.biX1x(G0x, fV2x.trim())
    }
    ;
    a8i.bNx8p = db1x.bNx8p = function(G0x) {
        G0x = a8i.B9s(G0x);
        if (!!G0x) {
            G0x = G0x.parentNode;
            while (!!G0x) {
                if (G0x.scrollHeight > G0x.clientHeight)
                    break;
                G0x = G0x.parentNode
            }
            if (!!G0x)
                return G0x
        }
        var py5D = document.body.scrollHeight
          , Be9V = document.documentElement.scrollHeight;
        return Be9V >= py5D ? document.documentElement : document.body
    }
    ;
    a8i.oJ5O = function() {
        var bNy8q = function(j9a) {
            var m9d = 0;
            k9b.bd0x(j9a, function(eI1x) {
                if (!eI1x)
                    return;
                if (!m9d) {
                    m9d = eI1x
                } else {
                    m9d = Math.min(m9d, eI1x)
                }
            });
            return m9d
        };
        return function(xi8a) {
            var JJ1x = xi8a || document
              , Cu9l = JJ1x.body
              , CH9y = JJ1x.documentElement
              , m9d = {
                scrollTop: Math.max(Cu9l.scrollTop, CH9y.scrollTop),
                scrollLeft: Math.max(Cu9l.scrollLeft, CH9y.scrollLeft),
                clientWidth: bNy8q([Cu9l.clientWidth, Cu9l.offsetWidth, CH9y.clientWidth, CH9y.offsetWidth]),
                clientHeight: bNy8q([Cu9l.clientHeight, Cu9l.offsetHeight, CH9y.clientHeight, CH9y.offsetHeight])
            };
            m9d.scrollWidth = Math.max(m9d.clientWidth, Cu9l.scrollWidth, CH9y.scrollWidth);
            m9d.scrollHeight = Math.max(m9d.clientHeight, Cu9l.scrollHeight, CH9y.scrollHeight);
            return m9d
        }
    }();
    a8i.cJo1x = function(fv2x, oN5S) {
        var m9d = NEJ.X({}, oN5S)
          , bNE8w = fv2x.width / fv2x.height
          , baK8C = oN5S.width / oN5S.height;
        if (bNE8w > baK8C && oN5S.height > fv2x.height) {
            m9d.height = fv2x.height;
            m9d.width = m9d.height * baK8C
        }
        if (bNE8w < baK8C && oN5S.width > fv2x.width) {
            m9d.width = fv2x.width;
            m9d.height = m9d.width / baK8C
        }
        return m9d
    }
    ;
    a8i.cJk1x = function() {
        var dh1x = /\s+/;
        var ww7p = {
            left: function() {
                return 0
            },
            center: function(hF2x, oN5S) {
                return (hF2x.width - oN5S.width) / 2
            },
            right: function(hF2x, oN5S) {
                return hF2x.width - oN5S.width
            },
            top: function() {
                return 0
            },
            middle: function(hF2x, oN5S) {
                return (hF2x.height - oN5S.height) / 2
            },
            bottom: function(hF2x, oN5S) {
                return hF2x.height - oN5S.height
            }
        };
        return function(hF2x, oN5S, on4r) {
            var m9d = {}
              , bt0x = (on4r || "").split(dh1x)
              , gG2x = ww7p[bt0x[1]] || ww7p.middle
              , hi2x = ww7p[bt0x[0]] || ww7p.center;
            m9d.top = gG2x(hF2x, oN5S);
            m9d.left = hi2x(hF2x, oN5S);
            return m9d
        }
    }();
    a8i.ug6a = db1x.ug6a = function(G0x, eg1x) {
        bg0x.blF1x(G0x, eg1x || a8i.t9k(G0x, "hover") || "js-hover");
        return this
    }
    ;
    a8i.KH2x = db1x.KH2x = function(G0x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return;
        bg0x.bmc1x(G0x)
    }
    ;
    a8i.ciS4W = db1x.ciS4W = function() {
        var R0x = {}
          , bOG8y = 2;
        var cks5x = function(D0x, eg1x, d9g) {
            R0x[D0x] = [h9c.jN3x(d9g), h9c.mg4k(d9g)];
            a8i.w9n(D0x, eg1x)
        };
        var cky5D = function(D0x, eg1x, d9g) {
            var bM0x = R0x[D0x];
            if (!k9b.ec1x(bM0x))
                return;
            var clE5J = Math.abs(h9c.jN3x(d9g) - bM0x[0])
              , clO5T = Math.abs(h9c.mg4k(d9g) - bM0x[1]);
            if (clE5J > bOG8y || clO5T > bOG8y)
                bof2x(D0x, eg1x)
        };
        var bof2x = function(D0x, eg1x) {
            if (k9b.ec1x(R0x[D0x])) {
                R0x[D0x] = -1;
                a8i.y9p(D0x, eg1x)
            }
        };
        return function(G0x, eg1x) {
            var D0x = a8i.lQ4U(G0x);
            if (!D0x || R0x[D0x] != null)
                return;
            R0x[D0x] = -1;
            eg1x = eg1x || a8i.t9k(D0x, "highlight") || "js-highlight";
            h9c.s9j(D0x, "touchstart", cks5x.f9e(null, D0x, eg1x));
            h9c.s9j(document, "touchmove", cky5D.f9e(null, D0x, eg1x));
            h9c.s9j(document, "touchend", bof2x.f9e(null, D0x, eg1x));
            h9c.s9j(document, "touchcancel", bof2x.f9e(null, D0x, eg1x))
        }
    }();
    a8i.Dr0x = db1x.Dr0x = function() {
        var cmg5l = function(D0x, eg1x, cnQ6K) {
            var G0x = a8i.B9s(D0x)
              , d9g = {
                clazz: eg1x,
                target: G0x
            };
            if (a8i.bE0x(G0x, eg1x)) {
                d9g.toggled = !1;
                a8i.y9p(G0x, eg1x)
            } else {
                d9g.toggled = !0;
                a8i.w9n(G0x, eg1x)
            }
            cnQ6K.call(null, d9g)
        };
        return function(G0x, e9f) {
            G0x = a8i.B9s(G0x);
            if (!!G0x) {
                var iv3x = {
                    ontoggle: br0x,
                    clazz: "js-toggle",
                    element: G0x.parentNode
                };
                if (k9b.fJ2x(e9f)) {
                    var g9d = a8i.B9s(e9f);
                    !!g9d ? iv3x.element = g9d : iv3x.clazz = e9f
                } else {
                    NEJ.EX(iv3x, e9f);
                    iv3x.element = a8i.B9s(iv3x.element)
                }
                var D0x = a8i.lQ4U(iv3x.element);
                h9c.s9j(G0x, "click", cmg5l.f9e(null, D0x, iv3x.clazz, iv3x.ontoggle || br0x))
            }
            return this
        }
    }();
    a8i.mF4J = db1x.mF4J = function(G0x, e9f) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return;
        var fu2x = 0
          , eg1x = "js-focus";
        if (k9b.tg6a(e9f)) {
            fu2x = e9f
        } else if (k9b.fJ2x(e9f)) {
            eg1x = e9f
        } else if (k9b.lY4c(e9f)) {
            fu2x = e9f.mode || fu2x;
            eg1x = e9f.clazz || eg1x
        }
        var C0x = parseInt(a8i.t9k(G0x, "mode"));
        if (!isNaN(C0x))
            fu2x = C0x;
        C0x = a8i.t9k(G0x, "focus");
        if (!!C0x)
            eg1x = C0x;
        bg0x.boz2x(G0x, fu2x, eg1x);
        return this
    }
    ;
    a8i.dk1x = function() {
        var bz0x = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fC2x, fV2x, bH0x) {
            var G0x = document.createElement(fC2x);
            NEJ.X(G0x, bz0x[fC2x.toLowerCase()]);
            if (!!fV2x)
                G0x.className = fV2x;
            bH0x = a8i.B9s(bH0x);
            if (!!bH0x)
                bH0x.appendChild(G0x);
            return G0x
        }
    }();
    a8i.bcR9I = function() {
        var cpV6P = function() {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cpX6R = function(W0x) {
            W0x = W0x.trim();
            if (!W0x)
                return a8i.dk1x("iframe");
            var eV2x;
            try {
                eV2x = document.createElement('<iframe name="' + W0x + '"></iframe>');
                eV2x.frameBorder = 0
            } catch (e) {
                eV2x = a8i.dk1x("iframe");
                eV2x.name = W0x
            }
            return eV2x
        };
        return function(e9f) {
            e9f = e9f || bb0x;
            var eV2x = cpX6R(e9f.name || "");
            if (!e9f.visible)
                eV2x.style.display = "none";
            if (k9b.gO2x(e9f.onload))
                h9c.s9j(eV2x, "load", function(d9g) {
                    if (!eV2x.src)
                        return;
                    h9c.ho2x(eV2x, "load");
                    e9f.onload(d9g)
                });
            var bH0x = e9f.parent;
            if (k9b.gO2x(bH0x)) {
                try {
                    bH0x(eV2x)
                } catch (e) {}
            } else {
                (a8i.B9s(bH0x) || document.body).appendChild(eV2x)
            }
            var cY1x = e9f.src || cpV6P();
            window.setTimeout(function() {
                eV2x.src = cY1x
            }, 0);
            return eV2x
        }
    }();
    a8i.cO1x = db1x.cO1x = function() {
        var bQV0x = function(Ay9p) {
            Ay9p.src = eq1x.bkK1x
        };
        var bQW0x = function(ep1x) {
            ep1x.src = "about:blank"
        };
        return function(G0x, cqd6X) {
            G0x = a8i.B9s(G0x);
            if (!G0x)
                return this;
            if (!cqd6X)
                h9c.ho2x(G0x);
            delete bgK0x[G0x.id];
            var fC2x = G0x.tagName;
            if (fC2x == "IFRAME") {
                bQW0x(G0x)
            } else if (fC2x == "IMG") {
                bQV0x(G0x)
            } else if (!!G0x.getElementsByTagName) {
                k9b.bd0x(G0x.getElementsByTagName("img"), bQV0x);
                k9b.bd0x(G0x.getElementsByTagName("iframe"), bQW0x)
            }
            if (!!G0x.parentNode) {
                G0x.parentNode.removeChild(G0x)
            }
            return this
        }
    }();
    a8i.mO4S = db1x.mO4S = function(G0x) {
        G0x = a8i.B9s(G0x);
        if (!!G0x)
            R0x.appendChild(G0x);
        return this
    }
    ;
    a8i.bRl0x = db1x.bRl0x = function(G0x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return;
        k9b.nC4G(G0x.childNodes, function(g9d) {
            a8i.cO1x(g9d)
        })
    }
    ;
    a8i.Mc2x = db1x.Mc2x = function() {
        var eg1x, gM2x = /\s+/;
        var crc6W = function() {
            if (!!eg1x)
                return;
            eg1x = a8i.uK7D(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a8i.bRw0x()
        };
        return function(G0x, e9f) {
            G0x = a8i.B9s(G0x);
            if (!G0x)
                return;
            crc6W();
            e9f = e9f || bb0x;
            var bH0x = G0x.parentNode;
            if (!a8i.bE0x(bH0x, eg1x)) {
                bH0x = a8i.dk1x("span", eg1x);
                G0x.insertAdjacentElement("beforeBegin", bH0x);
                bH0x.appendChild(G0x)
            }
            var bRx0x = e9f.nid || ""
              , g9d = a8i.E0x(bH0x, bRx0x || eg1x + "-show")[0];
            if (!g9d) {
                var ef1x = ((e9f.clazz || "") + " " + bRx0x).trim();
                ef1x = eg1x + "-show" + (!ef1x ? "" : " ") + ef1x;
                g9d = a8i.dk1x(e9f.tag || "span", ef1x);
                bH0x.appendChild(g9d)
            }
            var ef1x = e9f.clazz;
            if (!!ef1x) {
                ef1x = (ef1x || "").trim().split(gM2x)[0] + "-parent";
                a8i.w9n(bH0x, ef1x)
            }
            return g9d
        }
    }();
    a8i.t9k = db1x.t9k = function() {
        var buZ4d = {}
          , fC2x = "data-"
          , dh1x = /\-(.{1})/gi;
        var GM1x = function(G0x) {
            var D0x = a8i.lQ4U(G0x);
            if (!!buZ4d[D0x])
                return;
            var bz0x = {};
            k9b.bd0x(G0x.attributes, function(g9d) {
                var L0x = g9d.nodeName;
                if (L0x.indexOf(fC2x) != 0)
                    return;
                L0x = L0x.replace(fC2x, "").replace(dh1x, function($1, $2) {
                    return $2.toUpperCase()
                });
                bz0x[L0x] = g9d.nodeValue || ""
            });
            buZ4d[D0x] = bz0x
        };
        return function(G0x, L0x, C0x) {
            G0x = a8i.B9s(G0x);
            if (!G0x)
                return null;
            var ZR8J = G0x.dataset;
            if (!ZR8J) {
                GM1x(G0x);
                ZR8J = buZ4d[G0x.id]
            }
            if (C0x !== undefined)
                ZR8J[L0x] = C0x;
            return ZR8J[L0x]
        }
    }();
    a8i.hb2x = db1x.hb2x = function(G0x, W0x, C0x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return "";
        if (C0x !== undefined && !!G0x.setAttribute)
            G0x.setAttribute(W0x, C0x);
        return bg0x.bsh3x(G0x, W0x)
    }
    ;
    a8i.nY4c = function(dU1x) {
        var ta6U = document.createElement("div");
        ta6U.innerHTML = dU1x;
        var j9a = a8i.df1x(ta6U);
        return j9a.length > 1 ? ta6U : j9a[0]
    }
    ;
    a8i.crG6A = db1x.crG6A = function(G0x) {
        G0x = a8i.B9s(G0x);
        return !G0x ? "" : bg0x.buq3x(G0x)
    }
    ;
    a8i.bRM0x = function(BG9x) {
        BG9x = (BG9x || "").trim();
        return !BG9x ? null : bg0x.buM4Q(BG9x)
    }
    ;
    a8i.cso7h = function(cL1x, u9l) {
        cL1x = cL1x || "";
        switch (u9l) {
        case "xml":
            cL1x = a8i.bRM0x(cL1x);
            break;
        case "json":
            try {
                cL1x = JSON.parse(cL1x)
            } catch (ex) {
                cL1x = null
            }
            break
        }
        return cL1x
    }
    ;
    a8i.ic3x = db1x.ic3x = function() {
        var csr7k = function(G0x) {
            return G0x == document.body || G0x == document.documentElement
        };
        return function(ei1x, nq4u) {
            ei1x = a8i.B9s(ei1x);
            if (!ei1x)
                return null;
            nq4u = a8i.B9s(nq4u) || null;
            var m9d = {
                x: 0,
                y: 0
            }, bxX4b, dr1x, ZG8y;
            while (!!ei1x && ei1x != nq4u) {
                bxX4b = csr7k(ei1x);
                dr1x = bxX4b ? 0 : ei1x.scrollLeft;
                ZG8y = parseInt(a8i.di1x(ei1x, "borderLeftWidth")) || 0;
                m9d.x += ei1x.offsetLeft + ZG8y - dr1x;
                dr1x = bxX4b ? 0 : ei1x.scrollTop;
                ZG8y = parseInt(a8i.di1x(ei1x, "borderTopWidth")) || 0;
                m9d.y += ei1x.offsetTop + ZG8y - dr1x;
                ei1x = ei1x.offsetParent
            }
            return m9d
        }
    }();
    a8i.ny4C = db1x.ny4C = function(G0x) {
        var bj0x = a8i.ic3x(G0x);
        window.scrollTo(bj0x.x, bj0x.y);
        return this
    }
    ;
    a8i.cIj0x = function(tZ6T) {
        tZ6T = (tZ6T || "").trim();
        return bg0x.bHb7U(tZ6T)
    }
    ;
    a8i.csB7u = db1x.csB7u = function(G0x, W0x, bz0x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return this;
        var C0x = bg0x.bIN7G(W0x, bz0x);
        if (!C0x)
            return this;
        a8i.ba0x(G0x, "transform", C0x);
        return this
    }
    ;
    a8i.fh2x = db1x.fh2x = function(G0x, bz0x) {
        G0x = a8i.B9s(G0x);
        if (!!G0x)
            k9b.eH1x(bz0x, function(C0x, W0x) {
                a8i.ba0x(G0x, W0x, C0x)
            });
        return this
    }
    ;
    a8i.csD7w = db1x.csD7w = function(gr2x, e9f) {
        gr2x = a8i.B9s(gr2x);
        if (!gr2x)
            return {
                start: 0,
                end: 0
            };
        if (k9b.tg6a(e9f))
            e9f = {
                start: e9f,
                end: e9f
            };
        if (e9f != null) {
            if (e9f.end == null)
                e9f.end = e9f.start || 0;
            bg0x.bmD2x(gr2x, e9f)
        } else {
            e9f = bg0x.box2x(gr2x)
        }
        return e9f
    }
    ;
    a8i.ba0x = db1x.ba0x = function(G0x, W0x, C0x) {
        G0x = a8i.B9s(G0x);
        if (!!G0x)
            bg0x.bkF1x(G0x, W0x, C0x);
        return this
    }
    ;
    a8i.di1x = db1x.di1x = function(G0x, W0x) {
        G0x = a8i.B9s(G0x);
        if (!G0x)
            return "";
        var hs2x = !window.getComputedStyle ? G0x.currentStyle || bb0x : window.getComputedStyle(G0x, null);
        return hs2x[bg0x.bIO7H(W0x)] || ""
    }
    ;
    a8i.bSw0x = function() {
        var dh1x = /[\s\r\n]+/gi;
        return function(cj0x) {
            cj0x = (cj0x || "").trim().replace(dh1x, " ");
            if (!cj0x)
                return;
            var g9d = a8i.dk1x("style");
            document.head.appendChild(g9d);
            bg0x.bns2x(g9d, bg0x.bXy2x(cj0x));
            return g9d
        }
    }();
    a8i.bSz0x = function(yv8n) {
        try {
            yv8n = yv8n.trim();
            if (!!yv8n)
                return (new Function(yv8n))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    }
    ;
    a8i.uK7D = function() {
        var dh1x = /#<.*?>/g
          , gW2x = +(new Date);
        return function(kI3x) {
            if (!Jj1x)
                Jj1x = [];
            var fV2x = "auto-" + gW2x++;
            Jj1x.push(kI3x.replace(dh1x, fV2x));
            return fV2x
        }
    }();
    a8i.bRw0x = function() {
        if (!!Jj1x) {
            a8i.bSw0x(Jj1x.join(""));
            Jj1x = null
        }
        return this
    }
    ;
    a8i.cHJ0x = function(cj0x, kI3x) {
        cj0x = a8i.B9s(cj0x);
        return !cj0x ? null : bg0x.bol2x(cj0x, kI3x)
    }
    ;
    a8i.w9n = db1x.w9n = function() {
        bg0x.bje1x.apply(bg0x, arguments);
        return this
    }
    ;
    a8i.y9p = db1x.y9p = function() {
        bg0x.bkj1x.apply(bg0x, arguments);
        return this
    }
    ;
    a8i.fo2x = db1x.fo2x = function() {
        bg0x.PC4G.apply(bg0x, arguments);
        return this
    }
    ;
    a8i.bE0x = db1x.bE0x = function() {
        return bg0x.bkU1x.apply(bg0x, arguments)
    }
    ;
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    db1x.isChange = !0
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , fD2x = NEJ.R
      , br0x = NEJ.F
      , a8i = c9h("nej.e")
      , bg0x = c9h("nej.h")
      , k9b = c9h("nej.u");
    var HE1x = function(i9b, u9l) {
        try {
            u9l = u9l.toLowerCase();
            if (i9b === null)
                return u9l == "null";
            if (i9b === undefined)
                return u9l == "undefined";
            return bb0x.toString.call(i9b).toLowerCase() == "[object " + u9l + "]"
        } catch (e) {
            return !1
        }
    };
    k9b.gO2x = function(i9b) {
        return HE1x(i9b, "function")
    }
    ;
    k9b.fJ2x = function(i9b) {
        return HE1x(i9b, "string")
    }
    ;
    k9b.tg6a = function(i9b) {
        return HE1x(i9b, "number")
    }
    ;
    k9b.cHI0x = function(i9b) {
        return HE1x(i9b, "boolean")
    }
    ;
    k9b.HW1x = function(i9b) {
        return HE1x(i9b, "date")
    }
    ;
    k9b.ec1x = function(i9b) {
        return HE1x(i9b, "array")
    }
    ;
    k9b.lY4c = function(i9b) {
        return HE1x(i9b, "object")
    }
    ;
    k9b.fN2x = function() {
        var dh1x = /[^\x00-\xfff]/g;
        return function(bp0x) {
            return ("" + (bp0x || "")).replace(dh1x, "**").length
        }
    }();
    k9b.dm1x = function(j9a, p9g) {
        var ed1x = k9b.gO2x(p9g) ? p9g : function(C0x) {
            return C0x === p9g
        }
          , r9i = k9b.eH1x(j9a, ed1x);
        return r9i != null ? r9i : -1
    }
    ;
    k9b.cHH0x = function() {
        var bSC0x;
        var Ul6f = function(j9a, oX5c, pn5s) {
            if (oX5c > pn5s)
                return -1;
            var Ib1x = Math.ceil((oX5c + pn5s) / 2)
              , m9d = bSC0x(j9a[Ib1x], Ib1x, j9a);
            if (m9d == 0)
                return Ib1x;
            if (m9d < 0)
                return Ul6f(j9a, oX5c, Ib1x - 1);
            return Ul6f(j9a, Ib1x + 1, pn5s)
        };
        return function(j9a, Jh1x) {
            bSC0x = Jh1x || br0x;
            return Ul6f(j9a, 0, j9a.length - 1)
        }
    }();
    k9b.nC4G = function(j9a, cC1x, P0x) {
        if (!j9a || !j9a.length || !k9b.gO2x(cC1x))
            return null;
        for (var i = j9a.length - 1; i >= 0; i--)
            if (!!cC1x.call(P0x, j9a[i], i, j9a))
                return i;
        return null
    }
    ;
    k9b.bd0x = function(j9a, cC1x, P0x) {
        if (!j9a || !j9a.length || !k9b.gO2x(cC1x))
            return this;
        if (!!j9a.forEach) {
            j9a.forEach(cC1x, P0x);
            return this
        }
        for (var i = 0, l = j9a.length; i < l; i++)
            cC1x.call(P0x, j9a[i], i, j9a);
        return this
    }
    ;
    k9b.eH1x = function(j9a, cC1x, P0x) {
        if (!j9a || !k9b.gO2x(cC1x))
            return null;
        if (j9a.length != null) {
            if (j9a.length > 0)
                for (var i = 0, l = j9a.length; i < l; i++)
                    if (!!cC1x.call(P0x, j9a[i], i, j9a))
                        return i
        }
        if (k9b.lY4c(j9a)) {
            for (var x in j9a)
                if (j9a.hasOwnProperty(x) && !!cC1x.call(P0x, j9a[x], x, j9a))
                    return x
        }
        return null
    }
    ;
    k9b.cuv7o = function(jx3x, cuw7p, e9f) {
        jx3x = jx3x || [];
        e9f = e9f || bb0x;
        var bSS0x = !!e9f.union
          , xx8p = !!e9f.begin
          , YU8M = e9f.compare
          , cuF7y = bSS0x && xx8p ? k9b.nC4G : k9b.bd0x;
        cuF7y(cuw7p, function(p9g) {
            if (!!YU8M)
                YU8M = YU8M.ex1x(p9g);
            var r9i = k9b.dm1x(jx3x, YU8M || p9g);
            if (r9i >= 0)
                jx3x.splice(r9i, 1);
            if (bSS0x)
                jx3x[xx8p ? "unshift" : "push"](p9g)
        });
        return jx3x
    }
    ;
    k9b.BI9z = function(bz0x, bp0x) {
        if (!bz0x || !bp0x || !bp0x.replace)
            return bp0x || "";
        return bp0x.replace(bz0x.r, function($1) {
            var m9d = bz0x[!bz0x.i ? $1.toLowerCase() : $1];
            return m9d != null ? m9d : $1
        })
    }
    ;
    k9b.dI1x = function() {
        var bz0x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bp0x) {
            return k9b.BI9z(bz0x, bp0x)
        }
    }();
    k9b.BK9B = function() {
        var bz0x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bp0x) {
            return k9b.BI9z(bz0x, bp0x)
        }
    }();
    k9b.id3x = function() {
        var bz0x = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }
          , cvd7W = ["上午", "下午"]
          , cvn7g = ["A.M.", "P.M."]
          , bnc2x = ["日", "一", "二", "三", "四", "五", "六"]
          , cwx8p = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
          , cxH8z = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var UT6N = function(hk2x) {
            hk2x = parseInt(hk2x) || 0;
            return (hk2x < 10 ? "0" : "") + hk2x
        };
        var cxI8A = function(qi5n) {
            return qi5n < 12 ? 0 : 1
        };
        return function(bA0x, Kx2x, cyx8p) {
            if (!bA0x || !Kx2x)
                return "";
            bA0x = k9b.Ys7l(bA0x);
            bz0x.yyyy = bA0x.getFullYear();
            bz0x.yy = ("" + bz0x.yyyy).substr(2);
            bz0x.M = bA0x.getMonth() + 1;
            bz0x.MM = UT6N(bz0x.M);
            bz0x.eM = cxH8z[bz0x.M - 1];
            bz0x.cM = cwx8p[bz0x.M - 1];
            bz0x.d = bA0x.getDate();
            bz0x.dd = UT6N(bz0x.d);
            bz0x.H = bA0x.getHours();
            bz0x.HH = UT6N(bz0x.H);
            bz0x.m = bA0x.getMinutes();
            bz0x.mm = UT6N(bz0x.m);
            bz0x.s = bA0x.getSeconds();
            bz0x.ss = UT6N(bz0x.s);
            bz0x.ms = bA0x.getMilliseconds();
            bz0x.w = bnc2x[bA0x.getDay()];
            var bUE1x = cxI8A(bz0x.H);
            bz0x.ct = cvd7W[bUE1x];
            bz0x.et = cvn7g[bUE1x];
            if (!!cyx8p) {
                bz0x.H = bz0x.H % 12
            }
            return k9b.BI9z(bz0x, Kx2x)
        }
    }();
    k9b.Ys7l = function(bA0x) {
        var dc1x = bA0x;
        if (k9b.fJ2x(bA0x))
            dc1x = new Date(Date.parse(bA0x));
        if (!k9b.HW1x(bA0x))
            dc1x = new Date(bA0x);
        return dc1x
    }
    ;
    k9b.KH2x = function(czt8l, cAd8V) {
        return (new Number(czt8l)).toFixed(cAd8V)
    }
    ;
    k9b.brw3x = function() {
        var gM2x = /([^\/:])\/.*$/
          , kw3x = /\/[^\/]+$/
          , EP0x = /[#\?]/
          , brC3x = location.href.split(/[?#]/)[0]
          , tW6Q = document.createElement("a");
        var bsf3x = function(ju3x) {
            return (ju3x || "").indexOf("://") > 0
        };
        var bVm1x = function(ju3x) {
            return (ju3x || "").split(EP0x)[0].replace(kw3x, "/")
        };
        var cBY9P = function(ju3x, gj2x) {
            if (ju3x.indexOf("/") == 0)
                return gj2x.replace(gM2x, "$1") + ju3x;
            return bVm1x(gj2x) + ju3x
        };
        brC3x = bVm1x(brC3x);
        return function(ju3x, gj2x) {
            ju3x = (ju3x || "").trim();
            if (!bsf3x(gj2x))
                gj2x = brC3x;
            if (!ju3x)
                return gj2x;
            if (bsf3x(ju3x))
                return ju3x;
            ju3x = cBY9P(ju3x, gj2x);
            tW6Q.href = ju3x;
            ju3x = tW6Q.href;
            return bsf3x(ju3x) ? ju3x : tW6Q.getAttribute("href", 4)
        }
    }();
    k9b.cCB9s = function() {
        var dh1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y0x) {
            if (dh1x.test(Y0x || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k9b.bWz1x = function(H0x, iv3x) {
        if (!H0x)
            return iv3x;
        var W0x = H0x.tagName.toLowerCase()
          , j9a = a8i.df1x(H0x);
        if (!j9a || !j9a.length) {
            iv3x[W0x] = H0x.textContent || H0x.text || "";
            return iv3x
        }
        var cl0x = {};
        iv3x[W0x] = cl0x;
        k9b.bd0x(j9a, function(g9d) {
            k9b.bWz1x(g9d, cl0x)
        });
        return iv3x
    }
    ;
    k9b.cGL0x = function(BG9x) {
        try {
            return k9b.bWz1x(a8i.bRM0x(BG9x), {})
        } catch (ex) {
            return null
        }
    }
    ;
    k9b.VA6u = function(im3x, VD6x) {
        var iv3x = {};
        k9b.bd0x((im3x || "").split(VD6x), function(W0x) {
            var XT7M = W0x.split("=");
            if (!XT7M || !XT7M.length)
                return;
            var L0x = XT7M.shift();
            if (!L0x)
                return;
            iv3x[decodeURIComponent(L0x)] = decodeURIComponent(XT7M.join("="))
        });
        return iv3x
    }
    ;
    k9b.wz7s = function(gE2x, VD6x, cGy0x) {
        if (!gE2x)
            return "";
        var bt0x = [];
        for (var x in gE2x) {
            bt0x.push(encodeURIComponent(x) + "=" + (!!cGy0x ? encodeURIComponent(gE2x[x]) : gE2x[x]))
        }
        return bt0x.join(VD6x || ",")
    }
    ;
    k9b.hf2x = function(bv0x) {
        return k9b.VA6u(bv0x, "&")
    }
    ;
    k9b.cz0x = function(gE2x) {
        return k9b.wz7s(gE2x, "&", !0)
    }
    ;
    k9b.cGI0x = function(gE2x) {
        return bg0x.Kz2x(gE2x)
    }
    ;
    k9b.cJu1x = function(j9a, ed1x) {
        var m9d = {};
        k9b.bd0x(j9a, function(p9g) {
            var L0x = p9g;
            if (!!ed1x) {
                L0x = ed1x(p9g)
            }
            m9d[L0x] = p9g
        });
        return m9d
    }
    ;
    k9b.cGJ0x = function(hk2x, gk2x) {
        var cGu0x = ("" + hk2x).length
          , cGt0x = Math.max(1, parseInt(gk2x) || 0)
          , dr1x = cGt0x - cGu0x;
        if (dr1x > 0) {
            hk2x = (new Array(dr1x + 1)).join("0") + hk2x
        }
        return "" + hk2x
    }
    ;
    k9b.XN7G = function(gE2x, W0x) {
        if (!k9b.ec1x(W0x)) {
            try {
                delete gE2x[W0x]
            } catch (e) {
                gE2x[W0x] = undefined
            }
            return this
        }
        k9b.bd0x(W0x, k9b.XN7G.f9e(k9b, gE2x));
        return this
    }
    ;
    k9b.SI6C = function() {
        var bXc1x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bs0x) {
            bs0x = bs0x || 10;
            var m9d = [];
            for (var i = 0, bXa1x; i < bs0x; ++i) {
                bXa1x = Math.floor(Math.random() * bXc1x.length);
                m9d.push(bXc1x.charAt(bXa1x))
            }
            return m9d.join("")
        }
    }();
    k9b.CP9G = function(fI2x, fv2x) {
        return Math.floor(Math.random() * (fv2x - fI2x) + fI2x)
    }
    ;
    k9b.oG5L = function(bs0x) {
        bs0x = Math.max(0, Math.min(bs0x || 8, 30));
        var fI2x = Math.pow(10, bs0x - 1)
          , fv2x = fI2x * 10;
        return k9b.CP9G(fI2x, fv2x).toString()
    }
    ;
    k9b.Xz7s = function() {
        var gW2x = +(new Date);
        return function() {
            return "" + gW2x++
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, fD2x = NEJ.R, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), O0x = c9h("nej.ut"), pu5z;
    if (!!O0x.cH1x)
        return;
    O0x.cH1x = NEJ.C();
    pu5z = O0x.cH1x.prototype;
    O0x.cH1x.A9r = function(e9f) {
        e9f = e9f || {};
        var cF1x = !!this.CT9K && this.CT9K.shift();
        if (!cF1x) {
            cF1x = new this(e9f);
            this.cGk0x = (this.cGk0x || 0) + 1
        }
        cF1x.bm0x(e9f);
        return cF1x
    }
    ;
    O0x.cH1x.T0x = function() {
        var Ww7p = function(p9g, r9i, j9a) {
            p9g.T0x();
            j9a.splice(r9i, 1)
        };
        return function(cF1x) {
            if (!cF1x)
                return null;
            if (!k9b.ec1x(cF1x)) {
                if (!(cF1x instanceof this)) {
                    var fV2x = cF1x.constructor;
                    if (!!fV2x.T0x)
                        fV2x.T0x(cF1x);
                    return null
                }
                if (cF1x == this.fr2x)
                    delete this.fr2x;
                if (cF1x == this.Dd9U)
                    delete this.Dd9U;
                cF1x.bB0x();
                if (!this.CT9K)
                    this.CT9K = [];
                if (k9b.dm1x(this.CT9K, cF1x) < 0) {
                    this.CT9K.push(cF1x)
                }
                return null
            }
            k9b.nC4G(cF1x, Ww7p, this)
        }
    }();
    O0x.cH1x.fR2x = function(e9f) {
        e9f = e9f || {};
        if (!this.fr2x)
            this.fr2x = this.A9r(e9f);
        return this.fr2x
    }
    ;
    O0x.cH1x.bWZ1x = function(e9f, sX6R) {
        e9f = e9f || {};
        if (!!sX6R && !!this.Dd9U) {
            this.Dd9U.T0x();
            delete this.Dd9U
        }
        if (!this.Dd9U) {
            this.Dd9U = this.A9r(e9f)
        } else {
            this.Dd9U.bm0x(e9f)
        }
        return this.Dd9U
    }
    ;
    pu5z.cv0x = function() {
        var gW2x = +(new Date);
        return function() {
            this.id = gW2x++;
            this.mf4j = {};
            this.bWY1x = {}
        }
    }();
    pu5z.bm0x = function(e9f) {
        this.bgO0x(e9f)
    }
    ;
    pu5z.bB0x = function() {
        this.ho2x();
        this.IW1x()
    }
    ;
    pu5z.bX0x = function() {
        var gW2x = +(new Date);
        var cGh0x = function(bh0x) {
            if (!bh0x || bh0x.length < 3)
                return;
            this.bWY1x["de-" + gW2x++] = bh0x;
            h9c.s9j.apply(h9c, bh0x)
        };
        return function(j9a) {
            k9b.bd0x(j9a, cGh0x, this)
        }
    }();
    pu5z.IW1x = function() {
        var cGg0x = function(bh0x, L0x, bz0x) {
            delete bz0x[L0x];
            h9c.mL4P.apply(h9c, bh0x)
        };
        return function() {
            k9b.eH1x(this.bWY1x, cGg0x)
        }
    }();
    pu5z.cGM0x = function(ed1x) {
        ed1x = ed1x || br0x;
        k9b.eH1x(this, function(GN1x, L0x, bz0x) {
            if (!!GN1x && !!GN1x.T0x && !ed1x(GN1x)) {
                delete bz0x[L0x];
                GN1x.T0x()
            }
        })
    }
    ;
    pu5z.T0x = function() {
        this.constructor.T0x(this)
    }
    ;
    pu5z.bim0x = function(u9l) {
        var d9g = this.mf4j[u9l.toLowerCase()];
        return !!d9g && d9g !== br0x
    }
    ;
    pu5z.s9j = function(u9l, d9g) {
        this.xE8w.apply(this, arguments);
        return this
    }
    ;
    pu5z.mL4P = function(u9l, d9g) {
        var u9l = (u9l || "").toLowerCase()
          , ek1x = this.mf4j[u9l];
        if (!k9b.ec1x(ek1x)) {
            if (ek1x == d9g)
                delete this.mf4j[u9l];
            return
        }
        k9b.nC4G(ek1x, function(ez1x, r9i, j9a) {
            if (ez1x == d9g)
                j9a.splice(r9i, 1)
        })
    }
    ;
    pu5z.xE8w = function(u9l, d9g) {
        if (!!u9l && k9b.gO2x(d9g))
            this.mf4j[u9l.toLowerCase()] = d9g;
        return this
    }
    ;
    pu5z.bgO0x = function() {
        var cGb0x = function(d9g, u9l) {
            this.xE8w(u9l, d9g)
        };
        return function(ek1x) {
            k9b.eH1x(ek1x, cGb0x, this);
            return this
        }
    }();
    pu5z.ho2x = function() {
        var biI1x = function(d9g, u9l) {
            this.ho2x(u9l)
        };
        return function(u9l) {
            var u9l = (u9l || "").toLowerCase();
            if (!!u9l) {
                delete this.mf4j[u9l]
            } else {
                k9b.eH1x(this.mf4j, biI1x, this)
            }
            return this
        }
    }();
    pu5z.biN1x = function(u9l, d9g) {
        if (!u9l || !k9b.gO2x(d9g))
            return this;
        u9l = u9l.toLowerCase();
        var ek1x = this.mf4j[u9l];
        if (!ek1x) {
            this.mf4j[u9l] = d9g;
            return this
        }
        if (!k9b.ec1x(ek1x)) {
            this.mf4j[u9l] = [ek1x]
        }
        this.mf4j[u9l].push(d9g);
        return this
    }
    ;
    pu5z.z9q = function(u9l) {
        var d9g = this.mf4j[(u9l || "").toLowerCase()];
        if (!d9g)
            return this;
        var bh0x = fD2x.slice.call(arguments, 1);
        if (!k9b.ec1x(d9g))
            return d9g.apply(this, bh0x);
        k9b.bd0x(d9g, function(dw1x) {
            try {
                dw1x.apply(this, bh0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    }
    ;
    O0x.WZ7S = function() {
        var R0x = {};
        return function(D0x, fV2x, e9f) {
            var fn2x = fV2x.cFZ0x;
            if (!fn2x) {
                fn2x = k9b.SI6C(10);
                fV2x.cFZ0x = fn2x
            }
            var L0x = D0x + "-" + fn2x
              , cF1x = R0x[L0x];
            if (!!e9f && !cF1x) {
                cF1x = fV2x.A9r(e9f);
                cF1x.T0x = cF1x.T0x.eL2x(function(d9g) {
                    delete R0x[L0x];
                    delete cF1x.T0x
                });
                R0x[L0x] = cF1x
            }
            return cF1x
        }
    }()
}
)();
(function() {
    var o = NEJ.O
      , u = NEJ.P("nej.u")
      , j = NEJ.P("nej.j");
    j.gI2x = function() {
        var dc1x = new Date
          , cFU0x = +dc1x
          , bjq1x = 864e5;
        var cFT0x = function(W0x) {
            var te6Y = document.cookie
              , ti6c = "\\b" + W0x + "="
              , WU7N = te6Y.search(ti6c);
            if (WU7N < 0)
                return "";
            WU7N += ti6c.length - 2;
            var xG8y = te6Y.indexOf(";", WU7N);
            if (xG8y < 0)
                xG8y = te6Y.length;
            return te6Y.substring(WU7N, xG8y) || ""
        };
        return function(W0x, i9b) {
            if (i9b === undefined)
                return cFT0x(W0x);
            if (u.fJ2x(i9b)) {
                if (!!i9b) {
                    document.cookie = W0x + "=" + i9b + ";";
                    return i9b
                }
                i9b = {
                    expires: -100
                }
            }
            i9b = i9b || o;
            var te6Y = W0x + "=" + (i9b.value || "") + ";";
            delete i9b.value;
            if (i9b.expires !== undefined) {
                dc1x.setTime(cFU0x + i9b.expires * bjq1x);
                i9b.expires = dc1x.toGMTString()
            }
            te6Y += u.wz7s(i9b, ";");
            document.cookie = te6Y
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, iB3x = c9h("nej.c"), eq1x = c9h("nej.g"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), I0x = c9h("nej.ut"), O0x = c9h("nej.ut.j"), k9b = c9h("nej.u"), b9i;
    if (!!O0x.JB1x)
        return;
    O0x.JB1x = NEJ.C();
    b9i = O0x.JB1x.N0x(I0x.cH1x);
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.pN5S = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pN5S, e9f);
        var Bo9f = iB3x.B9s("csrf");
        if ((/^\/[^\/]/.test(this.pN5S.url) || this.pN5S.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Bo9f.cookie && !!Bo9f.param) {
            var bv0x = encodeURIComponent(Bo9f.param) + "=" + encodeURIComponent(v9m.gI2x(Bo9f.cookie) || "")
              , VD6x = this.pN5S.url.indexOf("?") < 0 ? "?" : "&";
            this.pN5S.url += VD6x + bv0x
        }
        this.WT7M = e9f.headers || {};
        var bp0x = this.WT7M[eq1x.yH8z];
        if (bp0x == null)
            this.WT7M[eq1x.yH8z] = eq1x.clg5l
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        delete this.DB0x;
        delete this.pN5S;
        delete this.WT7M
    }
    ;
    b9i.cFS0x = function(bp0x) {
        var bz0x = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pN5S.noescape) {
            return k9b.BI9z(bz0x, bp0x)
        } else {
            return bp0x
        }
    }
    ;
    b9i.wr7k = function(d9g) {
        var eA1x = d9g.status;
        if (eA1x == -1) {
            this.z9q("onerror", {
                code: eq1x.bDZ6T,
                message: "请求[" + this.pN5S.url + "]超时！"
            });
            return
        }
        if (("" + eA1x).indexOf("2") != 0) {
            this.z9q("onerror", {
                data: eA1x,
                code: eq1x.bza5f,
                message: "服务器返回异常状态[" + eA1x + "]!",
                extData: d9g.result
            });
            return
        }
        this.z9q("onload", a8i.cso7h(this.cFS0x(d9g.result), this.pN5S.type))
    }
    ;
    b9i.cm0x = br0x;
    b9i.bmf1x = function(i9b) {
        var Y0x = this.pN5S.url;
        if (!Y0x) {
            this.z9q("onerror", {
                code: eq1x.bqc2x,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pN5S.data = i9b == null ? null : i9b;
            var d9g = {
                request: this.pN5S,
                headers: this.WT7M
            };
            try {
                this.z9q("onbeforerequest", d9g)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cm0x(d9g)
        } catch (e) {
            this.z9q("onerror", {
                code: eq1x.bza5f,
                message: "请求[" + Y0x + "]失败:" + e.message + "！"
            })
        }
        return this
    }
    ;
    b9i.kF3x = br0x
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, bg0x = c9h("nej.h"), eq1x = c9h("nej.g"), k9b = c9h("nej.u"), O0x = c9h("nej.ut.j"), R0x = {}, WP7I;
    if (!!O0x.Xa7T)
        return;
    O0x.Xa7T = NEJ.C();
    WP7I = O0x.Xa7T.N0x(O0x.JB1x);
    WP7I.bB0x = function() {
        this.bG0x();
        window.clearTimeout(this.dJ1x);
        delete this.dJ1x;
        try {
            this.tb6V.onreadystatechange = br0x;
            this.tb6V.abort()
        } catch (e) {}
        delete this.tb6V
    }
    ;
    WP7I.cm0x = function() {
        var cFN0x = function(C0x, L0x) {
            this.tb6V.setRequestHeader(L0x, C0x)
        };
        return function(e9f) {
            var gp2x = e9f.request
              , pt5y = e9f.headers;
            this.tb6V = bg0x.bnY2x();
            if (pt5y[eq1x.yH8z] === eq1x.Ht1x) {
                delete pt5y[eq1x.yH8z];
                this.tb6V.upload.onprogress = this.gz2x.f9e(this, 1);
                if (gp2x.data.tagName === "FORM")
                    gp2x.data = new FormData(gp2x.data)
            }
            this.tb6V.onreadystatechange = this.gz2x.f9e(this, 2);
            if (gp2x.timeout != 0) {
                this.dJ1x = window.setTimeout(this.gz2x.f9e(this, 3), gp2x.timeout)
            }
            this.tb6V.open(gp2x.method, gp2x.url, !gp2x.sync);
            k9b.eH1x(pt5y, cFN0x, this);
            if (!!this.pN5S.cookie && "withCredentials"in this.tb6V)
                this.tb6V.withCredentials = !0;
            this.tb6V.send(gp2x.data)
        }
    }();
    WP7I.gz2x = function(u9l) {
        switch (u9l) {
        case 1:
            this.z9q("onuploading", arguments[1]);
            break;
        case 2:
            if (this.tb6V.readyState == 4)
                this.wr7k({
                    status: this.tb6V.status,
                    result: this.tb6V.responseText || ""
                });
            break;
        case 3:
            this.wr7k({
                status: -1
            });
            break
        }
    }
    ;
    WP7I.kF3x = function() {
        this.wr7k({
            status: 0
        });
        return this
    }
}
)();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var WK7D = {}, Xd7W = [], bWP1x = /\s+/g, gW2x = +(new Date), JP1x, bT0x, hW2x;
    var Hy1x = function() {
        var gM2x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/
          , kw3x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/
          , EP0x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i
          , bpj2x = /^new\s+/
          , cFL0x = /['"]/;
        var cFH0x = function(C0x) {
            if (gM2x.test(C0x))
                return;
            C0x = C0x.split(".")[0].trim();
            if (!C0x || cFL0x.test(C0x))
                return;
            C0x = C0x.replace(bpj2x, "");
            try {
                if (EP0x.test(C0x))
                    return;
                hW2x[C0x] = 1
            } catch (e) {}
        };
        return function(bp0x) {
            bp0x = bp0x || "";
            if (!bp0x || gM2x.test(bp0x))
                return;
            var bt0x = bp0x.split(kw3x);
            for (var i = 0, l = bt0x.length; i < l; i++)
                cFH0x(bt0x[i])
        }
    }();
    var cFz0x = function(dK1x) {
        if (dK1x[2] != "in")
            throw "bad for loop statement: " + dK1x.join(" ");
        Xd7W.push(dK1x[1]);
        Hy1x(dK1x[3]);
        return "var __HASH__" + dK1x[1] + " = " + dK1x[3] + "," + dK1x[1] + "," + dK1x[1] + "_count=0;" + "if (!!__HASH__" + dK1x[1] + ")" + "for(var " + dK1x[1] + "_key in __HASH__" + dK1x[1] + "){" + dK1x[1] + " = __HASH__" + dK1x[1] + "[" + dK1x[1] + "_key];" + "if (typeof(" + dK1x[1] + ')=="function") continue;' + dK1x[1] + "_count++;"
    };
    var cFy0x = function() {
        var dK1x = Xd7W[Xd7W.length - 1];
        return "}; if(!__HASH__" + dK1x + "||!" + dK1x + "_count){"
    };
    var cFu0x = function() {
        Xd7W.pop();
        return "};"
    };
    var cFt0x = function(dK1x) {
        if (dK1x[2] != "as")
            throw "bad for list loop statement: " + dK1x.join(" ");
        var WC7v = dK1x[1].split("..");
        if (WC7v.length > 1) {
            Hy1x(WC7v[0]);
            Hy1x(WC7v[1]);
            return "for(var " + dK1x[3] + "," + dK1x[3] + "_index=0," + dK1x[3] + "_beg=" + WC7v[0] + "," + dK1x[3] + "_end=" + WC7v[1] + "," + dK1x[3] + "_length=parseInt(" + dK1x[3] + "_end-" + dK1x[3] + "_beg+1);" + dK1x[3] + "_index<" + dK1x[3] + "_length;" + dK1x[3] + "_index++){" + dK1x[3] + " = " + dK1x[3] + "_beg+" + dK1x[3] + "_index;"
        } else {
            Hy1x(dK1x[1]);
            return "for(var __LIST__" + dK1x[3] + " = " + dK1x[1] + "," + dK1x[3] + "," + dK1x[3] + "_index=0," + dK1x[3] + "_length=__LIST__" + dK1x[3] + ".length;" + dK1x[3] + "_index<" + dK1x[3] + "_length;" + dK1x[3] + "_index++){" + dK1x[3] + " = __LIST__" + dK1x[3] + "[" + dK1x[3] + "_index];"
        }
    };
    var cFs0x = function(dK1x) {
        if (!dK1x || !dK1x.length)
            return;
        dK1x.shift();
        var W0x = dK1x[0].split("(")[0];
        return "var " + W0x + " = function" + dK1x.join("").replace(W0x, "") + "{var __OUT=[];"
    };
    var cFp0x = function(dK1x) {
        if (!dK1x[1])
            throw "bad include statement: " + dK1x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var brP3x = function(kB3x, dK1x) {
        Hy1x(dK1x.slice(1).join(" "));
        return kB3x
    };
    var cFn0x = function(dK1x) {
        return brP3x("if(", dK1x)
    };
    var cFm0x = function(dK1x) {
        return brP3x("}else if(", dK1x)
    };
    var cFg0x = function(dK1x) {
        return brP3x("var ", dK1x)
    };
    bT0x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cFn0x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cFm0x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cFz0x,
                pmin: 3
            },
            forelse: {
                pfix: cFy0x
            },
            "/for": {
                pfix: cFu0x
            },
            list: {
                pfix: cFt0x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cFg0x,
                sfix: ";"
            },
            macro: {
                pfix: cFs0x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    JP1x = !0
                }
            },
            "/trim": {
                pfix: function() {
                    JP1x = null
                }
            },
            inline: {
                pfix: cFp0x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(kB3x) {
                return (kB3x || "") + "" + gW2x
            },
            "default": function(C0x, kD3x) {
                return C0x || kD3x
            }
        }
    };
    var cFf0x = function() {
        var cFe0x = /\\([\{\}])/g;
        return function(bp0x, jK3x) {
            bp0x = bp0x.replace(cFe0x, "$1");
            var dK1x = bp0x.slice(1, -1).split(bWP1x)
              , bi0x = bT0x.def[dK1x[0]];
            if (!bi0x) {
                Xt7m(bp0x, jK3x);
                return
            }
            if (!!bi0x.pmin && bi0x.pmin >= dK1x.length)
                throw "Statement needs more parameters:" + bp0x;
            jK3x.push(!!bi0x.pfix && typeof bi0x.pfix != "string" ? bi0x.pfix(dK1x) : bi0x.pfix || "");
            if (!!bi0x.sfix) {
                if (dK1x.length <= 1) {
                    if (!!bi0x.pdft)
                        jK3x.push(bi0x.pdft)
                } else {
                    for (var i = 1, l = dK1x.length; i < l; i++) {
                        if (i > 1)
                            jK3x.push(" ");
                        jK3x.push(dK1x[i])
                    }
                }
                jK3x.push(bi0x.sfix)
            }
        }
    }();
    var bWL1x = function(Kq2x, jK3x) {
        if (!Kq2x || !Kq2x.length)
            return;
        if (Kq2x.length == 1) {
            var btD3x = Kq2x.pop();
            Hy1x(btD3x);
            jK3x.push(btD3x == "" ? '""' : btD3x);
            return
        }
        var btK3x = Kq2x.pop().split(":");
        jK3x.push("__MDF['" + btK3x.shift() + "'](");
        bWL1x(Kq2x, jK3x);
        if (btK3x.length > 0) {
            var bh0x = btK3x.join(":");
            Hy1x(bh0x);
            jK3x.push("," + bh0x)
        }
        jK3x.push(")")
    };
    var Xt7m = function(bp0x, jK3x) {
        if (!bp0x)
            return;
        var xK8C = bp0x.split("\n");
        if (!xK8C || !xK8C.length)
            return;
        for (var i = 0, l = xK8C.length, hJ2x; i < l; i++) {
            hJ2x = xK8C[i];
            if (!!JP1x) {
                hJ2x = hJ2x.trim();
                if (!hJ2x)
                    continue
            }
            cEX0x(hJ2x, jK3x);
            if (!!JP1x && i < l - 1)
                jK3x.push("__OUT.push('\\n');")
        }
    };
    var cEX0x = function() {
        var cEM0x = /\|\|/g
          , cEH0x = /#@@#/g;
        return function(bp0x, jK3x) {
            var VW6Q = "}", VS6M = -1, bs0x = bp0x.length, xx8p, fZ2x, KF2x, XW7P, VB6v;
            while (VS6M + VW6Q.length < bs0x) {
                xx8p = "${";
                fZ2x = "}";
                KF2x = bp0x.indexOf(xx8p, VS6M + VW6Q.length);
                if (KF2x < 0)
                    break;
                if (bp0x.charAt(KF2x + 2) == "%") {
                    xx8p = "${%";
                    fZ2x = "%}"
                }
                XW7P = bp0x.indexOf(fZ2x, KF2x + xx8p.length);
                if (XW7P < 0)
                    break;
                Yd7W(bp0x.substring(VS6M + VW6Q.length, KF2x), jK3x);
                VB6v = bp0x.substring(KF2x + xx8p.length, XW7P).replace(cEM0x, "#@@#").split("|");
                for (var i = 0, l = VB6v.length; i < l; VB6v[i] = VB6v[i].replace(cEH0x, "||"),
                i++)
                    ;
                jK3x.push("__OUT.push(");
                bWL1x(VB6v, jK3x);
                jK3x.push(");");
                VW6Q = fZ2x;
                VS6M = XW7P
            }
            Yd7W(bp0x.substring(VS6M + VW6Q.length), jK3x)
        }
    }();
    var Yd7W = function() {
        var bz0x = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cEG0x = function(bp0x) {
            return (bp0x || "").replace(bz0x.r, function($1) {
                return bz0x[$1] || $1
            })
        };
        return function(bp0x, jK3x) {
            if (!bp0x)
                return;
            jK3x.push("__OUT.push('" + cEG0x(bp0x) + "');")
        }
    }();
    var cEC0x = function() {
        var cEx9o = /\t/g
          , cEw9n = /\n/g
          , cEt9k = /\r\n?/g;
        var bWF1x = function(bp0x, xx8p) {
            var r9i = bp0x.indexOf("}", xx8p + 1);
            while (bp0x.charAt(r9i - 1) == "\\") {
                r9i = bp0x.indexOf("}", r9i + 1)
            }
            return r9i
        };
        var cEp9g = function() {
            var bt0x = []
              , Eo0x = arguments[0];
            for (var x in Eo0x) {
                x = (x || "").trim();
                if (!x)
                    continue;
                bt0x.push(x + "=$v('" + x + "')")
            }
            return bt0x.length > 0 ? "var " + bt0x.join(",") + ";" : ""
        };
        return function(bp0x) {
            hW2x = {};
            bp0x = bp0x.replace(cEt9k, "\n").replace(cEx9o, "    ");
            var sw6q = ["if(!__CTX) return '';", ""];
            sw6q.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sw6q.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sw6q.push("__OUT=[];");
            var Ep0x = -1
              , bs0x = bp0x.length;
            var nJ4N, Mh2x, UM6G, UL6F, BA9r, WS7L, byX5c, UH6B;
            while (Ep0x + 1 < bs0x) {
                nJ4N = Ep0x;
                nJ4N = bp0x.indexOf("{", nJ4N + 1);
                while (nJ4N >= 0) {
                    Mh2x = bWF1x(bp0x, nJ4N);
                    UM6G = bp0x.substring(nJ4N, Mh2x);
                    UL6F = UM6G.match(bT0x.blk);
                    if (!!UL6F) {
                        BA9r = UL6F[1].length + 1;
                        WS7L = bp0x.indexOf("}", nJ4N + BA9r);
                        if (WS7L >= 0) {
                            byX5c = WS7L - nJ4N - BA9r <= 0 ? "{/" + UL6F[1] + "}" : UM6G.substr(BA9r + 1);
                            BA9r = bp0x.indexOf(byX5c, WS7L + 1);
                            if (BA9r >= 0) {
                                Xt7m(bp0x.substring(Ep0x + 1, nJ4N), sw6q);
                                UH6B = bp0x.substring(WS7L + 1, BA9r);
                                switch (UL6F[1]) {
                                case "cdata":
                                    Yd7W(UH6B, sw6q);
                                    break;
                                case "minify":
                                    Yd7W(UH6B.replace(cEw9n, " ").replace(bWP1x, " "), sw6q);
                                    break;
                                case "eval":
                                    if (!!UH6B)
                                        sw6q.push("__OUT.push((function(){" + UH6B + "})());");
                                    break
                                }
                                nJ4N = Ep0x = BA9r + byX5c.length - 1
                            }
                        }
                    } else if (bp0x.charAt(nJ4N - 1) != "$" && bp0x.charAt(nJ4N - 1) != "\\" && UM6G.substr(UM6G.charAt(1) == "/" ? 2 : 1).search(bT0x.tag) == 0) {
                        break
                    }
                    nJ4N = bp0x.indexOf("{", nJ4N + 1)
                }
                if (nJ4N < 0)
                    break;
                Mh2x = bWF1x(bp0x, nJ4N);
                if (Mh2x < 0)
                    break;
                Xt7m(bp0x.substring(Ep0x + 1, nJ4N), sw6q);
                cFf0x(bp0x.substring(nJ4N, Mh2x + 1), sw6q);
                Ep0x = Mh2x
            }
            Xt7m(bp0x.substring(Ep0x + 1), sw6q);
            sw6q.push(';return __OUT.join("");');
            sw6q[1] = cEp9g(hW2x);
            hW2x = null;
            return new Function("__CTX","__MDF",sw6q.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gW2x
    }
    ;
    TrimPath.merge = function() {
        var UF6z = {};
        TrimPath.dump = function() {
            return {
                func: UF6z,
                text: WK7D
            }
        }
        ;
        return function(fn2x, i9b, jV3x) {
            try {
                i9b = i9b || {};
                if (!UF6z[fn2x] && !WK7D[fn2x])
                    return "";
                if (!UF6z[fn2x]) {
                    UF6z[fn2x] = cEC0x(WK7D[fn2x]);
                    delete WK7D[fn2x]
                }
                if (!!jV3x) {
                    for (var x in bT0x.ext)
                        if (!jV3x[x])
                            jV3x[x] = bT0x.ext[x]
                }
                return UF6z[fn2x](i9b, jV3x || bT0x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cEo9f = +(new Date);
        return function(bp0x, fn2x) {
            if (!bp0x)
                return "";
            fn2x = fn2x || "ck_" + cEo9f++;
            WK7D[fn2x] = bp0x;
            return fn2x
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P
      , a8i = c9h("nej.e")
      , k9b = c9h("nej.u")
      , dV1x = {}
      , bWE1x = {};
    a8i.Mx2x = TrimPath.seed;
    a8i.cc0x = function() {
        var bWD1x = function(D0x) {
            return !a8i.ij3x ? "" : a8i.ij3x(D0x)
        };
        return function(fn2x, i9b, jV3x) {
            i9b = NEJ.X(NEJ.X({}, bWE1x), i9b);
            i9b.inline = bWD1x;
            jV3x = NEJ.X(NEJ.X({}, dV1x), jV3x);
            jV3x.rand = k9b.oG5L;
            jV3x.format = k9b.id3x;
            jV3x.escape = k9b.dI1x;
            jV3x.inline = bWD1x;
            return TrimPath.merge(fn2x, i9b, jV3x)
        }
    }();
    a8i.ey1x = function(bp0x, cDV9M) {
        if (!bp0x)
            return "";
        var fn2x, G0x = a8i.B9s(bp0x);
        if (!!G0x) {
            fn2x = G0x.id;
            bp0x = G0x.value || G0x.innerText;
            if (!cDV9M)
                a8i.cO1x(G0x)
        }
        return TrimPath.parse(bp0x, fn2x)
    }
    ;
    a8i.dA1x = function(bH0x, fn2x, i9b, jV3x) {
        bH0x = a8i.B9s(bH0x);
        if (!!bH0x)
            bH0x.innerHTML = a8i.cc0x(fn2x, i9b, jV3x);
        return this
    }
    ;
    a8i.cGS0x = function(bz0x) {
        NEJ.X(dV1x, bz0x)
    }
    ;
    a8i.cDQ9H = function(bz0x) {
        NEJ.X(bWE1x, bz0x)
    }
    ;
    c9h("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
}
)();
(function() {
    var dz1x = NEJ.P("nej.p")
      , O0x = window
      , lF4J = dz1x.Ku2x
      , bWw1x = lF4J.ipad || lF4J.iphone;
    if (!bWw1x && !!O0x.requestAnimationFrame && !!O0x.cancelRequestAnimationFrame)
        return;
    var kB3x = dz1x.ds1x.prefix.pro;
    if (!bWw1x && !!O0x[kB3x + "RequestAnimationFrame"] && !!O0x[kB3x + "CancelRequestAnimationFrame"]) {
        O0x.requestAnimationFrame = O0x[kB3x + "RequestAnimationFrame"];
        O0x.cancelRequestAnimationFrame = O0x[kB3x + "CancelRequestAnimationFrame"];
        return
    }
    var Zx8p = lF4J.desktop ? 80 : lF4J.ios ? 50 : 30;
    O0x.requestAnimationFrame = function(cC1x) {
        return window.setTimeout(function() {
            try {
                cC1x(+(new Date))
            } catch (ex) {}
        }, 1e3 / Zx8p)
    }
    ;
    O0x.cancelRequestAnimationFrame = function(D0x) {
        window.clearTimeout(D0x);
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, k9b = c9h("nej.u"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), bg0x = c9h("nej.h"), db1x = c9h("nej.x"), ZQ8I = c9h("nej.ut.j.cb"), gs2x;
    if (!!a8i.sm6g)
        return;
    a8i.sm6g = db1x.sm6g = function() {
        var R0x = {}
          , gM2x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d9g) {
            var D0x = decodeURIComponent(d9g.target)
              , u9l = d9g.type.toLowerCase();
            var dw1x = R0x[D0x + "-on" + u9l];
            if (!!dw1x) {
                try {
                    dw1x(d9g)
                } catch (e) {}
                return
            }
            var cE1x = R0x[D0x + "-tgt"];
            if (!!cE1x && gM2x.test(u9l)) {
                bWu1x(cE1x, d9g)
            }
        }
        ;
        var biQ1x = function(e9f) {
            var bH0x = a8i.B9s(e9f.parent) || document.body
              , dU1x = a8i.cc0x(gs2x, e9f);
            bH0x.insertAdjacentHTML(!e9f.hidden ? "beforeEnd" : "afterBegin", dU1x)
        };
        var bWu1x = function(D0x, d9g) {
            var u9l = d9g.type.toLowerCase();
            requestAnimationFrame(function() {
                h9c.z9q(D0x, u9l)
            })
        };
        var cDG9x = function(ib3x) {
            return !!ib3x && !!ib3x.inited && !!ib3x.inited()
        };
        var TJ6D = function(D0x) {
            var bt0x = [document.embeds[D0x], a8i.B9s(D0x), document[D0x], window[D0x]]
              , r9i = k9b.eH1x(bt0x, cDG9x)
              , ib3x = bt0x[r9i]
              , bji1x = D0x + "-count";
            R0x[bji1x]++;
            if (!!ib3x || R0x[bji1x] > 100) {
                R0x[D0x](ib3x);
                delete R0x[D0x];
                delete R0x[bji1x];
                return
            }
            window.setTimeout(TJ6D.f9e(null, D0x), 300)
        };
        var cDF9w = function(e9f) {
            var D0x = e9f.id
              , cn0x = e9f.params;
            if (!cn0x) {
                cn0x = {};
                e9f.params = cn0x
            }
            var hW2x = cn0x.flashvars || "";
            hW2x += (!hW2x ? "" : "&") + ("id=" + D0x);
            if (!e9f.hidden && (!!e9f.target || bg0x.bdo9f(cn0x.wmode))) {
                var hY2x = a8i.lQ4U(e9f.target) || a8i.lQ4U(e9f.parent)
                  , bap8h = k9b.Xz7s();
                ZQ8I["cb" + bap8h] = bWu1x.f9e(null, hY2x);
                hW2x += "&onevent=nej.ut.j.cb.cb" + bap8h;
                R0x[D0x + "-tgt"] = hY2x
            }
            cn0x.flashvars = hW2x;
            k9b.eH1x(e9f, function(C0x, L0x) {
                if (k9b.gO2x(C0x) && L0x != "onready") {
                    R0x[D0x + "-" + L0x] = C0x
                }
            })
        };
        return function(e9f) {
            e9f = NEJ.X({}, e9f);
            if (!e9f.src)
                return;
            var D0x = "flash_" + k9b.Xz7s();
            e9f.id = D0x;
            cDF9w(e9f);
            biQ1x(e9f);
            if (!e9f.onready)
                return;
            R0x[D0x] = e9f.onready;
            R0x[D0x + "-count"] = 0;
            TJ6D(D0x)
        }
    }();
    gs2x = a8i.ey1x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    db1x.isChange = !0
}
)();
(function() {
    var c9h = NEJ.P, iB3x = c9h("nej.c"), a8i = c9h("nej.e"), k9b = c9h("nej.u"), O0x = c9h("nej.ut.j"), ZQ8I = c9h("nej.ut.j.cb"), R0x = {}, gW2x = +(new Date), bjw1x;
    if (!!O0x.bjz1x)
        return;
    ZQ8I["ld" + gW2x] = function(L0x, cL1x) {
        var kf3x = R0x[L0x];
        if (!kf3x)
            return;
        delete R0x[L0x];
        kf3x.wr7k({
            status: 200,
            result: cL1x
        })
    }
    ;
    ZQ8I["er" + gW2x] = function(L0x, eA1x) {
        var kf3x = R0x[L0x];
        if (!kf3x)
            return;
        delete R0x[L0x];
        kf3x.wr7k({
            status: eA1x || 0
        })
    }
    ;
    O0x.bjz1x = NEJ.C();
    bjw1x = O0x.bjz1x.N0x(O0x.JB1x);
    bjw1x.cm0x = function(e9f) {
        var ib3x = R0x.flash;
        if (k9b.ec1x(ib3x)) {
            ib3x.push(this.cm0x.f9e(this, e9f));
            return
        }
        if (!ib3x) {
            R0x.flash = [this.cm0x.f9e(this, e9f)];
            a8i.sm6g({
                hidden: !0,
                src: iB3x.B9s("ajax.swf"),
                onready: function(ib3x) {
                    if (!ib3x)
                        return;
                    var j9a = R0x.flash;
                    R0x.flash = ib3x;
                    k9b.nC4G(j9a, function(dw1x) {
                        try {
                            dw1x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.DB0x = "swf-" + k9b.oG5L();
        R0x[this.DB0x] = this;
        var i9b = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e9f.request);
        i9b.key = this.DB0x;
        i9b.headers = e9f.headers;
        i9b.onerror = "nej.ut.j.cb.er" + gW2x;
        i9b.onloaded = "nej.ut.j.cb.ld" + gW2x;
        var bWt1x = iB3x.cwc8U(i9b.url);
        if (!!bWt1x)
            i9b.policyURL = bWt1x;
        ib3x.request(i9b)
    }
    ;
    bjw1x.kF3x = function() {
        delete R0x[this.DB0x];
        this.wr7k({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , bg0x = c9h("nej.h");
    bg0x.bWs1x = function() {
        var dh1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(lm3x) {
            lm3x = lm3x || "";
            if (dh1x.test(lm3x))
                return RegExp.$1;
            return "*"
        }
    }();
    bg0x.bkm1x = function(i9b) {
        return i9b
    }
    ;
    bg0x.bkE1x = function(baC8u, e9f) {
        if (!baC8u.postMessage)
            return;
        e9f = e9f || bb0x;
        baC8u.postMessage(bg0x.bkm1x(e9f.data), bg0x.bWs1x(e9f.origin))
    }
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), O0x = c9h("nej.ut"), b9i;
    if (!!O0x.fK2x)
        return;
    O0x.fK2x = NEJ.C();
    b9i = O0x.fK2x.N0x(O0x.cH1x);
    b9i.cv0x = function() {
        this.S0x = {};
        this.cD1x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.Ti6c = a8i.B9s(e9f.element) || window;
        this.bWr1x(e9f.event);
        this.cDA9r();
        this.z9q("oninit")
    }
    ;
    b9i.bB0x = function() {
        var Fm0x = function(C0x, L0x, bz0x) {
            if (!k9b.ec1x(C0x)) {
                k9b.XN7G(this.Ti6c, L0x)
            }
            delete bz0x[L0x]
        };
        return function() {
            this.bG0x();
            k9b.eH1x(this.S0x, Fm0x, this);
            delete this.Ti6c
        }
    }();
    b9i.baP8H = function(G0x, u9l) {
        G0x = a8i.B9s(G0x);
        return G0x == this.Ti6c && (!u9l || !!this.S0x["on" + u9l])
    }
    ;
    b9i.bWr1x = function(d9g) {
        if (k9b.fJ2x(d9g)) {
            var W0x = "on" + d9g;
            if (!this.S0x[W0x]) {
                this.S0x[W0x] = this.cDu9l.f9e(this, d9g)
            }
            this.bWo1x(d9g);
            return
        }
        if (k9b.ec1x(d9g)) {
            k9b.bd0x(d9g, this.bWr1x, this)
        }
    }
    ;
    b9i.bWo1x = function(u9l) {
        var d9g = "on" + u9l
          , dw1x = this.Ti6c[d9g]
          , bWn1x = this.S0x[d9g];
        if (dw1x != bWn1x) {
            this.baQ8I(u9l);
            if (!!dw1x && dw1x != br0x)
                this.bWm1x(u9l, dw1x);
            this.Ti6c[d9g] = bWn1x
        }
    }
    ;
    b9i.bWm1x = function(u9l, dw1x, cDq9h) {
        var j9a = this.S0x[u9l];
        if (!j9a) {
            j9a = [];
            this.S0x[u9l] = j9a
        }
        if (k9b.gO2x(dw1x)) {
            !cDq9h ? j9a.push(dw1x) : j9a.unshift(dw1x)
        }
    }
    ;
    b9i.baQ8I = function(u9l, dw1x) {
        var j9a = this.S0x[u9l];
        if (!j9a || !j9a.length)
            return;
        if (!dw1x) {
            delete this.S0x[u9l];
            return
        }
        k9b.nC4G(j9a, function(C0x, r9i, IV1x) {
            if (dw1x === C0x) {
                IV1x.splice(r9i, 1);
                return !0
            }
        })
    }
    ;
    b9i.cDu9l = function(u9l, d9g) {
        d9g = d9g || {
            noargs: !0
        };
        d9g.type = u9l;
        this.z9q("ondispatch", d9g);
        if (!!d9g.stopped)
            return;
        k9b.bd0x(this.S0x[u9l], function(dw1x) {
            try {
                dw1x(d9g)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    }
    ;
    b9i.cDA9r = function() {
        var bml1x = function(d9g) {
            var bh0x = d9g.args
              , u9l = bh0x[1].toLowerCase();
            if (this.baP8H(bh0x[0], u9l)) {
                d9g.stopped = !0;
                this.bWo1x(u9l);
                this.bWm1x(u9l, bh0x[2], bh0x[3]);
                this.z9q("oneventadd", {
                    type: u9l,
                    listener: bh0x[2]
                })
            }
        };
        var cDn9e = function(d9g) {
            var bh0x = d9g.args
              , u9l = bh0x[1].toLowerCase();
            if (this.baP8H(bh0x[0], u9l)) {
                d9g.stopped = !0;
                this.baQ8I(u9l, bh0x[2])
            }
        };
        var biI1x = function(d9g) {
            var bh0x = d9g.args
              , u9l = (bh0x[1] || "").toLowerCase();
            if (this.baP8H(bh0x[0])) {
                if (!!u9l) {
                    this.baQ8I(u9l);
                    return
                }
                k9b.eH1x(this.S0x, function(C0x, L0x) {
                    if (k9b.ec1x(C0x)) {
                        this.baQ8I(L0x)
                    }
                }, this)
            }
        };
        var cDm9d = function(d9g) {
            var bh0x = d9g.args
              , u9l = bh0x[1].toLowerCase();
            if (this.baP8H(bh0x[0], u9l)) {
                d9g.stopped = !0;
                bh0x[0]["on" + u9l].apply(bh0x[0], bh0x.slice(2))
            }
        };
        return function() {
            if (!!this.cDd9U)
                return;
            this.cDd9U = true;
            h9c.s9j = h9c.s9j.eL2x(bml1x.f9e(this));
            h9c.mL4P = h9c.mL4P.eL2x(cDn9e.f9e(this));
            h9c.ho2x = h9c.ho2x.eL2x(biI1x.f9e(this));
            h9c.z9q = h9c.z9q.eL2x(cDm9d.f9e(this))
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P
      , O0x = c9h("nej.p")
      , bg0x = c9h("nej.h")
      , k9b = c9h("nej.u")
      , h9c = c9h("nej.v")
      , I0x = c9h("nej.ut");
    if (O0x.nG4K.trident)
        return;
    if (!!window.postMessage) {
        bg0x.bkm1x = bg0x.bkm1x.eL2x(function(d9g) {
            d9g.stopped = !0;
            d9g.value = JSON.stringify(d9g.args[0])
        });
        return
    }
    var L0x = "MSG|"
      , kx3x = [];
    var cDa9R = function() {
        var W0x = unescape(window.name || "").trim();
        if (!W0x || W0x.indexOf(L0x) != 0)
            return;
        window.name = "";
        var m9d = k9b.VA6u(W0x.replace(L0x, ""), "|")
          , lm3x = (m9d.origin || "").toLowerCase();
        if (!!lm3x && lm3x != "*" && location.href.toLowerCase().indexOf(lm3x) != 0)
            return;
        h9c.z9q(window, "message", {
            data: JSON.parse(m9d.data || "null"),
            source: window.frames[m9d.self] || m9d.self,
            origin: bg0x.bWs1x(m9d.ref || document.referrer)
        })
    };
    var cCZ9Q = function() {
        var baY9P;
        var cCY9P = function(bz0x, r9i, j9a) {
            if (k9b.dm1x(baY9P, bz0x.w) < 0) {
                baY9P.push(bz0x.w);
                j9a.splice(r9i, 1);
                bz0x.w.name = bz0x.d
            }
        };
        return function() {
            baY9P = [];
            k9b.nC4G(kx3x, cCY9P);
            baY9P = null
        }
    }();
    bg0x.bkE1x = function() {
        var cCW9N = function(i9b) {
            var m9d = {};
            i9b = i9b || bb0x;
            m9d.origin = i9b.origin || "";
            m9d.ref = location.href;
            m9d.self = i9b.source;
            m9d.data = JSON.stringify(i9b.data);
            return L0x + k9b.wz7s(m9d, "|", !0)
        };
        return bg0x.bkE1x.eL2x(function(d9g) {
            d9g.stopped = !0;
            var bh0x = d9g.args;
            kx3x.unshift({
                w: bh0x[0],
                d: escape(cCW9N(bh0x[1]))
            })
        })
    }();
    I0x.fK2x.A9r({
        element: window,
        event: "message"
    });
    window.setInterval(cCZ9Q, 100);
    window.setInterval(cDa9R, 20)
}
)();
(function() {
    var c9h = NEJ.P
      , bg0x = c9h("nej.h")
      , a8i = c9h("nej.e")
      , v9m = c9h("nej.j");
    v9m.cCU9L = function() {
        var fs2x = window.name || "_parent"
          , cCO9F = {
            gG2x: window.top,
            fs2x: window,
            bH0x: window.parent
        };
        return function(cE1x, e9f) {
            if (typeof cE1x == "string") {
                cE1x = cCO9F[cE1x] || window.frames[cE1x];
                if (!cE1x)
                    return this
            }
            var i9b = NEJ.X({
                origin: "*",
                source: fs2x
            }, e9f);
            bg0x.bkE1x(cE1x, i9b);
            return this
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P, iB3x = c9h("nej.c"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), O0x = c9h("nej.ut.j"), R0x = {}, bbp9g;
    if (!!O0x.boe2x)
        return;
    O0x.boe2x = NEJ.C();
    bbp9g = O0x.boe2x.N0x(O0x.JB1x);
    bbp9g.cv0x = function() {
        var fg2x = "NEJ-AJAX-DATA:"
          , GM1x = !1;
        var boj2x = function(d9g) {
            var i9b = d9g.data;
            if (i9b.indexOf(fg2x) != 0)
                return;
            i9b = JSON.parse(i9b.replace(fg2x, ""));
            var kf3x = R0x[i9b.key];
            if (!kf3x)
                return;
            delete R0x[i9b.key];
            i9b.result = decodeURIComponent(i9b.result || "");
            kf3x.wr7k(i9b)
        };
        var bok2x = function() {
            if (!GM1x) {
                GM1x = !0;
                h9c.s9j(window, "message", boj2x)
            }
        };
        return function() {
            this.cD1x();
            bok2x()
        }
    }();
    bbp9g.cm0x = function(e9f) {
        var gp2x = e9f.request
          , kf3x = iB3x.ckp5u(gp2x.url)
          , ep1x = R0x[kf3x];
        if (k9b.ec1x(ep1x)) {
            ep1x.push(this.cm0x.f9e(this, e9f));
            return
        }
        if (!ep1x) {
            R0x[kf3x] = [this.cm0x.f9e(this, e9f)];
            a8i.bcR9I({
                src: kf3x,
                visible: !1,
                onload: function(d9g) {
                    var j9a = R0x[kf3x];
                    R0x[kf3x] = h9c.X0x(d9g).contentWindow;
                    k9b.nC4G(j9a, function(dw1x) {
                        try {
                            dw1x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.DB0x = "frm-" + k9b.oG5L();
        R0x[this.DB0x] = this;
        var i9b = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gp2x);
        i9b.key = this.DB0x;
        i9b.headers = e9f.headers;
        v9m.cCU9L(R0x[kf3x], {
            data: i9b
        })
    }
    ;
    bbp9g.kF3x = function() {
        delete R0x[this.DB0x];
        this.wr7k({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, eq1x = c9h("nej.g"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), O0x = c9h("nej.ut.j"), R0x = {}, Jg1x;
    if (!!O0x.bom2x)
        return;
    O0x.bom2x = NEJ.C();
    Jg1x = O0x.bom2x.N0x(O0x.JB1x);
    Jg1x.cv0x = function() {
        var fg2x = "NEJ-UPLOAD-RESULT:"
          , GM1x = !1;
        var boj2x = function(d9g) {
            var i9b = d9g.data;
            if (i9b.indexOf(fg2x) != 0)
                return;
            i9b = JSON.parse(i9b.replace(fg2x, ""));
            var kf3x = R0x[i9b.key];
            if (!kf3x)
                return;
            delete R0x[i9b.key];
            kf3x.wr7k(decodeURIComponent(i9b.result))
        };
        var bok2x = function() {
            if (!GM1x) {
                GM1x = !0;
                h9c.s9j(window, "message", boj2x)
            }
        };
        return function() {
            this.cD1x();
            bok2x()
        }
    }();
    Jg1x.bB0x = function() {
        this.bG0x();
        a8i.cO1x(this.boo2x);
        delete this.boo2x;
        window.clearTimeout(this.dJ1x);
        delete this.dJ1x
    }
    ;
    Jg1x.wr7k = function(cL1x) {
        var Q0x;
        try {
            Q0x = JSON.parse(cL1x);
            this.z9q("onload", Q0x)
        } catch (e) {
            this.z9q("onerror", {
                code: eq1x.caO2x,
                message: cL1x
            })
        }
    }
    ;
    Jg1x.cm0x = function() {
        var cCL9C = function() {
            var nd4h, cL1x;
            try {
                var nd4h = this.boo2x.contentWindow.document.body
                  , cL1x = nd4h.innerText || nd4h.textContent
            } catch (e) {
                return
            }
            this.wr7k(cL1x)
        };
        var boN2x = function(Y0x, fu2x, te6Y) {
            v9m.bk0x(Y0x, {
                type: "json",
                method: "POST",
                cookie: te6Y,
                mode: parseInt(fu2x) || 0,
                onload: function(i9b) {
                    if (!this.dJ1x)
                        return;
                    this.z9q("onuploading", i9b);
                    this.dJ1x = window.setTimeout(boN2x.f9e(this, Y0x, fu2x, te6Y), 1e3)
                }
                .f9e(this),
                onerror: function(bY0x) {
                    if (!this.dJ1x)
                        return;
                    this.dJ1x = window.setTimeout(boN2x.f9e(this, Y0x, fu2x, te6Y), 1e3)
                }
                .f9e(this)
            })
        };
        return function(e9f) {
            var gp2x = e9f.request
              , pt5y = e9f.headers
              , fl2x = gp2x.data
              , W0x = "fom-" + k9b.oG5L();
            R0x[W0x] = this;
            fl2x.target = W0x;
            fl2x.method = "POST";
            fl2x.enctype = eq1x.Ht1x;
            fl2x.encoding = eq1x.Ht1x;
            var Y0x = fl2x.action || ""
              , lL4P = Y0x.indexOf("?") <= 0 ? "?" : "&";
            fl2x.action = Y0x + lL4P + "_proxy_=form";
            this.boo2x = a8i.bcR9I({
                name: W0x,
                onload: function(d9g) {
                    var ep1x = h9c.X0x(d9g);
                    h9c.s9j(ep1x, "load", cCL9C.f9e(this));
                    fl2x.submit();
                    var bWb1x = (fl2x.nej_query || bb0x).value;
                    if (!bWb1x)
                        return;
                    var fu2x = (fl2x.nej_mode || bb0x).value
                      , te6Y = (fl2x.nej_cookie || bb0x).value == "true";
                    this.dJ1x = window.setTimeout(boN2x.f9e(this, bWb1x, fu2x, te6Y), 100)
                }
                .f9e(this)
            })
        }
    }();
    Jg1x.kF3x = function() {
        this.z9q("onerror", {
            code: eq1x.cgj4n,
            message: "客户端终止文件上传"
        });
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , bg0x = c9h("nej.h")
      , O0x = c9h("nej.ut.j");
    bg0x.bnY2x = function() {
        return new XMLHttpRequest
    }
    ;
    bg0x.bqj2x = function(fu2x, bbz9q, e9f) {
        var bz0x = !!bbz9q ? {
            2: O0x.bom2x
        } : {
            2: O0x.boe2x,
            3: O0x.bjz1x
        };
        return (bz0x[fu2x] || O0x.Xa7T).A9r(e9f)
    }
}
)();
(function() {
    var c9h = NEJ.P
      , O0x = c9h("nej.p")
      , bg0x = c9h("nej.h");
    if (O0x.nG4K.trident)
        return;
    bg0x.bnY2x = function() {
        var Ro5t = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cCH9y = function() {
            for (var i = 0, l = Ro5t.length; i < l; i++) {
                try {
                    return new ActiveXObject(Ro5t[i])
                } catch (e) {}
            }
            return null
        };
        return bg0x.bnY2x.eL2x(function(d9g) {
            if (!!window.XMLHttpRequest)
                return;
            d9g.stopped = !0;
            d9g.value = cCH9y()
        })
    }();
    bg0x.bqj2x = function() {
        var Is1x = {
            0: 2,
            1: 3
        };
        return bg0x.bqj2x.eL2x(function(d9g) {
            var bh0x = d9g.args
              , fu2x = bh0x[0] || 0;
            bh0x[0] = !!bh0x[1] ? 2 : Is1x[fu2x] || fu2x
        })
    }()
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , br0x = NEJ.F
      , bg0x = c9h("nej.h")
      , eq1x = c9h("nej.g")
      , k9b = c9h("nej.u")
      , v9m = c9h("nej.j")
      , O0x = c9h("nej.ut.j")
      , oe4i = {}
      , Ns3x = br0x;
    v9m.kF3x = function(fn2x) {
        var R0x = oe4i[fn2x];
        if (!R0x)
            return this;
        R0x.req.kF3x();
        return this
    }
    ;
    v9m.bbE9v = function(ed1x) {
        Ns3x = ed1x || br0x;
        return this
    }
    ;
    v9m.bk0x = function() {
        var jQ3x = (location.protocol + "//" + location.host).toLowerCase();
        var cCG9x = function(Y0x) {
            var lm3x = k9b.cCB9s(Y0x);
            return !!lm3x && lm3x != jQ3x
        };
        var cCF9w = function(pt5y) {
            return (pt5y || bb0x)[eq1x.yH8z] == eq1x.Ht1x
        };
        var cCE9v = function(e9f) {
            var bbz9q = cCF9w(e9f.headers);
            if (!cCG9x(e9f.url) && !bbz9q)
                return O0x.Xa7T.A9r(e9f);
            return bg0x.bqj2x(e9f.mode, bbz9q, e9f)
        };
        var Fm0x = function(fn2x) {
            var R0x = oe4i[fn2x];
            if (!R0x)
                return;
            if (!!R0x.req)
                R0x.req.T0x();
            delete oe4i[fn2x]
        };
        var bWa1x = function(fn2x, u9l) {
            var R0x = oe4i[fn2x];
            if (!R0x)
                return;
            Fm0x(fn2x);
            try {
                var d9g = {
                    type: u9l,
                    result: arguments[2]
                };
                Ns3x(d9g);
                if (!d9g.stopped)
                    (R0x[u9l] || br0x)(d9g.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var Ab9S = function(fn2x, i9b) {
            bWa1x(fn2x, "onload", i9b)
        };
        var Cm9d = function(fn2x, bY0x) {
            bWa1x(fn2x, "onerror", bY0x)
        };
        return function(Y0x, e9f) {
            e9f = e9f || {};
            var fn2x = k9b.oG5L()
              , R0x = {
                onload: e9f.onload || br0x,
                onerror: e9f.onerror || br0x
            };
            oe4i[fn2x] = R0x;
            e9f.onload = Ab9S.f9e(null, fn2x);
            e9f.onerror = Cm9d.f9e(null, fn2x);
            if (!!e9f.query) {
                var lL4P = Y0x.indexOf("?") < 0 ? "?" : "&"
                  , bv0x = e9f.query;
                if (k9b.lY4c(bv0x))
                    bv0x = k9b.cz0x(bv0x);
                if (!!bv0x)
                    Y0x += lL4P + bv0x
            }
            e9f.url = Y0x;
            R0x.req = cCE9v(e9f);
            R0x.req.bmf1x(e9f.data);
            return fn2x
        }
    }();
    v9m.ia3x = function(fl2x, e9f) {
        var dO1x = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(dO1x, e9f);
        dO1x.data = fl2x;
        dO1x.method = "POST";
        dO1x.timeout = 0;
        dO1x.headers[eq1x.yH8z] = eq1x.Ht1x;
        return v9m.bk0x(fl2x.action, dO1x)
    }
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, eq1x = c9h("nej.g"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), O0x = c9h("nej.ut.j"), nh4l, hd2x = 6e4;
    if (!!O0x.Si5n)
        return;
    O0x.Si5n = NEJ.C();
    nh4l = O0x.Si5n.N0x(I0x.cH1x);
    nh4l.cv0x = function() {
        this.cD1x();
        this.Sh5m = {
            onerror: this.cCA9r.f9e(this),
            onloaded: this.cCx9o.f9e(this)
        };
        if (!this.constructor.S0x)
            this.constructor.S0x = {
                loaded: {}
            }
    }
    ;
    nh4l.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.JS1x = e9f.version;
        this.bty3x = e9f.timeout;
        this.Sh5m.version = this.JS1x;
        this.Sh5m.timeout = this.bty3x
    }
    ;
    nh4l.bVZ1x = function(L0x) {
        delete this.constructor.S0x[L0x]
    }
    ;
    nh4l.Cw9n = function(L0x) {
        return this.constructor.S0x[L0x]
    }
    ;
    nh4l.bVX1x = function(L0x, i9b) {
        this.constructor.S0x[L0x] = i9b
    }
    ;
    nh4l.bcv9m = br0x;
    nh4l.bVW1x = function(gp2x) {
        h9c.ho2x(gp2x)
    }
    ;
    nh4l.buj3x = function(gp2x) {
        gp2x.src = this.kT3x;
        document.head.appendChild(gp2x)
    }
    ;
    nh4l.CL9C = function() {
        var R0x = this.Cw9n(this.kT3x);
        if (!R0x)
            return;
        window.clearTimeout(R0x.timer);
        this.bVW1x(R0x.request);
        delete R0x.bind;
        delete R0x.timer;
        delete R0x.request;
        this.bVZ1x(this.kT3x);
        this.Cw9n("loaded")[this.kT3x] = !0
    }
    ;
    nh4l.bcP9G = function(W0x) {
        var R0x = this.Cw9n(this.kT3x);
        if (!R0x)
            return;
        var j9a = R0x.bind;
        this.CL9C();
        if (!!j9a && j9a.length > 0) {
            var cF1x;
            while (j9a.length) {
                cF1x = j9a.shift();
                try {
                    cF1x.z9q(W0x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cF1x.T0x()
            }
        }
    }
    ;
    nh4l.dQ1x = function(bY0x) {
        this.bcP9G("onerror", bY0x)
    }
    ;
    nh4l.bVV1x = function() {
        this.bcP9G("onloaded")
    }
    ;
    nh4l.cCf9W = function(Y0x) {
        this.constructor.A9r(this.Sh5m).KC2x(Y0x)
    }
    ;
    nh4l.bVS1x = function(bY0x) {
        var R0x = this.Cw9n(this.yc8U);
        if (!R0x)
            return;
        if (!!bY0x)
            R0x.error++;
        R0x.loaded++;
        if (R0x.loaded < R0x.total)
            return;
        this.bVZ1x(this.yc8U);
        this.z9q(R0x.error > 0 ? "onerror" : "onloaded")
    }
    ;
    nh4l.cCA9r = function(bY0x) {
        this.bVS1x(!0)
    }
    ;
    nh4l.cCx9o = function() {
        this.bVS1x()
    }
    ;
    nh4l.KC2x = function(Y0x) {
        Y0x = k9b.brw3x(Y0x);
        if (!Y0x) {
            this.z9q("onerror", {
                code: eq1x.bqc2x,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kT3x = Y0x;
        if (!!this.JS1x)
            this.kT3x += (this.kT3x.indexOf("?") < 0 ? "?" : "&") + this.JS1x;
        if (this.Cw9n("loaded")[this.kT3x]) {
            try {
                this.z9q("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T0x();
            return this
        }
        var R0x = this.Cw9n(this.kT3x), gp2x;
        if (!!R0x) {
            R0x.bind.unshift(this);
            R0x.timer = window.clearTimeout(R0x.timer)
        } else {
            gp2x = this.bcv9m();
            R0x = {
                request: gp2x,
                bind: [this]
            };
            this.bVX1x(this.kT3x, R0x);
            h9c.s9j(gp2x, "load", this.bVV1x.f9e(this));
            h9c.s9j(gp2x, "error", this.dQ1x.f9e(this, {
                code: eq1x.bza5f,
                message: "无法加载指定资源文件[" + this.kT3x + "]！"
            }))
        }
        if (this.bty3x != 0)
            R0x.timer = window.setTimeout(this.dQ1x.f9e(this, {
                code: eq1x.bDZ6T,
                message: "指定资源文件[" + this.kT3x + "]载入超时！"
            }), this.bty3x || hd2x);
        if (!!gp2x)
            this.buj3x(gp2x);
        this.z9q("onloading");
        return this
    }
    ;
    nh4l.bVQ1x = function(j9a) {
        if (!j9a || !j9a.length) {
            this.z9q("onerror", {
                code: eq1x.bqc2x,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.yc8U = k9b.oG5L();
        var R0x = {
            error: 0,
            loaded: 0,
            total: j9a.length
        };
        this.bVX1x(this.yc8U, R0x);
        for (var i = 0, l = j9a.length; i < l; i++) {
            if (!j9a[i]) {
                R0x.total--;
                continue
            }
            this.cCf9W(j9a[i])
        }
        this.z9q("onloading");
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), bg0x = c9h("nej.h"), O0x = c9h("nej.ut.j"), Rv5A;
    if (!!O0x.bwh4l)
        return;
    O0x.bwh4l = NEJ.C();
    Rv5A = O0x.bwh4l.N0x(O0x.Si5n);
    Rv5A.bcv9m = function() {
        var eV2x = a8i.dk1x("iframe");
        eV2x.width = 0;
        eV2x.height = 0;
        eV2x.style.display = "none";
        return eV2x
    }
    ;
    Rv5A.buj3x = function(gp2x) {
        gp2x.src = this.kT3x;
        document.body.appendChild(gp2x)
    }
    ;
    Rv5A.dQ1x = function(bY0x) {
        var eV2x = (this.Cw9n(this.kT3x) || bb0x).request;
        this.bcP9G("onerror", bY0x);
        bg0x.bdh9Y(eV2x)
    }
    ;
    Rv5A.bVV1x = function() {
        var nd4h = null
          , eV2x = (this.Cw9n(this.kT3x) || bb0x).request;
        try {
            nd4h = eV2x.contentWindow.document.body
        } catch (ex) {}
        this.bcP9G("onloaded", nd4h);
        bg0x.bdh9Y(eV2x)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), O0x = c9h("nej.ut.j"), bwk4o;
    if (!!O0x.bcW9N)
        return;
    O0x.bcW9N = NEJ.C();
    bwk4o = O0x.bcW9N.N0x(O0x.Si5n);
    bwk4o.bcv9m = function() {
        return a8i.dk1x("link")
    }
    ;
    bwk4o.buj3x = function(gp2x) {
        gp2x.href = this.kT3x;
        document.head.appendChild(gp2x)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), O0x = c9h("nej.ut.j"), bcY9P;
    if (!!O0x.bdb9S)
        return;
    O0x.bdb9S = NEJ.C();
    bcY9P = O0x.bdb9S.N0x(O0x.Si5n);
    bcY9P.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.bVP1x = e9f.async;
        this.bwO4S = e9f.charset;
        this.Sh5m.async = !1;
        this.Sh5m.charset = this.bwO4S
    }
    ;
    bcY9P.bcv9m = function() {
        var gp2x = a8i.dk1x("script");
        if (this.bVP1x != null)
            gp2x.async = !!this.bVP1x;
        if (this.bwO4S != null)
            gp2x.charset = this.bwO4S;
        return gp2x
    }
    ;
    bcY9P.bVW1x = function(gp2x) {
        a8i.cO1x(gp2x)
    }
}
)();
(function() {
    var c9h = NEJ.P
      , v9m = c9h("nej.j")
      , O0x = c9h("nej.ut.j");
    v9m.cCa9R = function(Y0x, e9f) {
        O0x.bdb9S.A9r(e9f).KC2x(Y0x);
        return this
    }
    ;
    v9m.cBZ9Q = function(j9a, e9f) {
        O0x.bdb9S.A9r(e9f).bVQ1x(j9a);
        return this
    }
    ;
    v9m.cGU0x = function(Y0x, e9f) {
        O0x.bcW9N.A9r(e9f).KC2x(Y0x);
        return this
    }
    ;
    v9m.cBX9O = function(j9a, e9f) {
        O0x.bcW9N.A9r(e9f).bVQ1x(j9a);
        return this
    }
    ;
    v9m.bVO1x = function(Y0x, e9f) {
        O0x.bwh4l.A9r(e9f).KC2x(Y0x);
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , k9b = c9h("nej.u")
      , v9m = c9h("nej.j")
      , I0x = c9h("nej.ut")
      , R0x = {}
      , tC6w = +(new Date) + "-";
    a8i.cU1x = function() {
        var cA0x = 0;
        var Rk5p = function() {
            if (cA0x > 0)
                return;
            cA0x = 0;
            h9c.z9q(document, "templateready");
            h9c.ho2x(document, "templateready")
        };
        var bdg9X = function(gr2x, e9f) {
            var cY1x = a8i.t9k(gr2x, "src");
            if (!cY1x)
                return;
            e9f = e9f || bb0x;
            var gj2x = e9f.root;
            if (!gj2x) {
                gj2x = gr2x.ownerDocument.location.href
            } else {
                gj2x = k9b.brw3x(gj2x)
            }
            cY1x = cY1x.split(",");
            k9b.bd0x(cY1x, function(C0x, r9i, j9a) {
                j9a[r9i] = k9b.brw3x(C0x, gj2x)
            });
            return cY1x
        };
        var cBV9M = function(gr2x, e9f) {
            if (!gr2x)
                return;
            var cY1x = bdg9X(gr2x, e9f);
            if (!!cY1x)
                v9m.cBX9O(cY1x, {
                    version: a8i.t9k(gr2x, "version")
                });
            a8i.bSw0x(gr2x.value)
        };
        var cBU9L = function(C0x) {
            cA0x--;
            a8i.bSz0x(C0x);
            Rk5p()
        };
        var cBQ9H = function(gr2x, e9f) {
            if (!gr2x)
                return;
            var cY1x = bdg9X(gr2x, e9f)
              , fA2x = gr2x.value;
            if (!!cY1x) {
                cA0x++;
                var e9f = {
                    version: a8i.t9k(gr2x, "version"),
                    onloaded: cBU9L.f9e(null, fA2x)
                };
                window.setTimeout(v9m.cBZ9Q.f9e(v9m, cY1x, e9f), 0);
                return
            }
            a8i.bSz0x(fA2x)
        };
        var cBP9G = function(nd4h) {
            cA0x--;
            a8i.cU1x(nd4h);
            Rk5p()
        };
        var cBM9D = function(gr2x, e9f) {
            if (!gr2x)
                return;
            var cY1x = bdg9X(gr2x, e9f)[0];
            if (!!cY1x) {
                cA0x++;
                var e9f = {
                    version: a8i.t9k(gr2x, "version"),
                    onloaded: cBP9G
                };
                window.setTimeout(v9m.bVO1x.f9e(v9m, cY1x, e9f), 0)
            }
        };
        var cBL9C = function(D0x, cL1x) {
            cA0x--;
            a8i.KY2x(D0x, cL1x || "");
            Rk5p()
        };
        var cBJ9A = function(gr2x, e9f) {
            if (!gr2x || !gr2x.id)
                return;
            var D0x = gr2x.id
              , cY1x = bdg9X(gr2x, e9f)[0];
            if (!!cY1x) {
                cA0x++;
                var Y0x = cY1x + (cY1x.indexOf("?") < 0 ? "?" : "&") + (a8i.t9k(gr2x, "version") || "")
                  , e9f = {
                    type: "text",
                    method: "GET",
                    onload: cBL9C.f9e(null, D0x)
                };
                window.setTimeout(v9m.bk0x.f9e(v9m, Y0x, e9f), 0)
            }
        };
        var cBH9y = function(g9d, e9f) {
            var u9l = g9d.name.toLowerCase();
            switch (u9l) {
            case "jst":
                a8i.ey1x(g9d, !0);
                return;
            case "txt":
                a8i.KY2x(g9d.id, g9d.value || "");
                return;
            case "ntp":
                a8i.jz3x(g9d.value || "", g9d.id);
                return;
            case "js":
                cBQ9H(g9d, e9f);
                return;
            case "css":
                cBV9M(g9d, e9f);
                return;
            case "html":
                cBM9D(g9d, e9f);
                return;
            case "res":
                cBJ9A(g9d, e9f);
                return
            }
        };
        I0x.fK2x.A9r({
            element: document,
            event: "templateready",
            oneventadd: Rk5p
        });
        return function(G0x, e9f) {
            G0x = a8i.B9s(G0x);
            if (!!G0x) {
                var j9a = G0x.tagName == "TEXTAREA" ? [G0x] : G0x.getElementsByTagName("textarea");
                k9b.bd0x(j9a, function(g9d) {
                    cBH9y(g9d, e9f)
                });
                a8i.cO1x(G0x, !0)
            }
            Rk5p();
            return this
        }
    }();
    a8i.KY2x = function(L0x, C0x) {
        R0x[L0x] = C0x || "";
        return this
    }
    ;
    a8i.ij3x = function(L0x) {
        return R0x[L0x] || ""
    }
    ;
    a8i.jz3x = function(G0x, L0x) {
        L0x = L0x || k9b.oG5L();
        G0x = a8i.B9s(G0x) || G0x;
        a8i.KY2x(tC6w + L0x, G0x);
        a8i.mO4S(G0x);
        return L0x
    }
    ;
    a8i.dD1x = function(L0x) {
        if (!L0x)
            return null;
        L0x = tC6w + L0x;
        var C0x = a8i.ij3x(L0x);
        if (!C0x)
            return null;
        if (k9b.fJ2x(C0x)) {
            C0x = a8i.nY4c(C0x);
            a8i.KY2x(L0x, C0x)
        }
        return C0x.cloneNode(!0)
    }
    ;
    a8i.CX9O = function() {
        var Ns3x = function(C0x, L0x) {
            return L0x == "offset" || L0x == "limit"
        };
        return function(j9a, p9g, e9f) {
            var bt0x = [];
            if (!j9a || !j9a.length || !p9g)
                return bt0x;
            e9f = e9f || bb0x;
            var dt1x = j9a.length
              , kk3x = parseInt(e9f.offset) || 0
              , fZ2x = Math.min(dt1x, kk3x + (parseInt(e9f.limit) || dt1x))
              , cu0x = {
                total: j9a.length,
                range: [kk3x, fZ2x]
            };
            NEJ.X(cu0x, e9f, Ns3x);
            for (var i = kk3x, cF1x; i < fZ2x; i++) {
                cu0x.index = i;
                cu0x.data = j9a[i];
                cF1x = p9g.A9r(cu0x);
                var D0x = cF1x.GW1x();
                R0x[D0x] = cF1x;
                cF1x.T0x = cF1x.T0x.eL2x(function(D0x, cF1x) {
                    delete R0x[D0x];
                    delete cF1x.T0x
                }
                .f9e(null, D0x, cF1x));
                bt0x.push(cF1x)
            }
            return bt0x
        }
    }();
    a8i.bVJ1x = function(D0x) {
        return R0x[D0x]
    }
    ;
    a8i.cGV0x = function(ef1x, e9f) {
        e9f = e9f || bb0x;
        a8i.cU1x(e9f.tid || "template-box");
        h9c.s9j(document, "templateready", function() {
            ef1x.A9r().z9q("onshow", e9f)
        })
    }
    ;
    c9h("dbg").dumpTC = function() {
        return R0x
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), O0x = c9h("nej.ui"), b9i;
    if (!!O0x.eo1x)
        return;
    O0x.eo1x = NEJ.C();
    b9i = O0x.eo1x.N0x(I0x.cH1x);
    b9i.cv0x = function() {
        this.cD1x();
        a8i.bRw0x();
        this.cf0x();
        this.bV0x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.cBy9p(e9f.clazz);
        this.bVE1x(e9f.parent)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        this.bVC1x();
        delete this.go2x;
        a8i.mO4S(this.o9f);
        a8i.y9p(this.o9f, this.biF1x);
        delete this.biF1x
    }
    ;
    b9i.cf0x = br0x;
    b9i.bV0x = function() {
        if (!this.ce0x)
            this.Lk2x();
        this.o9f = a8i.dD1x(this.ce0x);
        if (!this.o9f)
            this.o9f = a8i.dk1x("div", this.mt4x);
        a8i.w9n(this.o9f, this.mt4x)
    }
    ;
    b9i.Lk2x = br0x;
    b9i.cBy9p = function(eg1x) {
        this.biF1x = eg1x || "";
        a8i.w9n(this.o9f, this.biF1x)
    }
    ;
    b9i.cBu9l = function() {
        if (!this.mt4x)
            return;
        a8i.w9n(this.go2x, this.mt4x + "-parent")
    }
    ;
    b9i.bVC1x = function() {
        if (!this.mt4x)
            return;
        a8i.y9p(this.go2x, this.mt4x + "-parent")
    }
    ;
    b9i.md4h = function() {
        return this.o9f
    }
    ;
    b9i.bVE1x = function(bH0x) {
        if (!this.o9f)
            return this;
        this.bVC1x();
        if (k9b.gO2x(bH0x)) {
            this.go2x = bH0x(this.o9f)
        } else {
            this.go2x = a8i.B9s(bH0x);
            if (!!this.go2x)
                this.go2x.appendChild(this.o9f)
        }
        this.cBu9l();
        return this
    }
    ;
    b9i.J0x = function() {
        if (!this.go2x || !this.o9f || this.o9f.parentNode == this.go2x)
            return this;
        this.go2x.appendChild(this.o9f);
        return this
    }
    ;
    b9i.bq0x = function() {
        a8i.mO4S(this.o9f);
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), k9b = c9h("nej.u"), bg0x = c9h("nej.h"), O0x = c9h("nej.ui"), yg8Y, bVA1x;
    if (!!O0x.QB5G)
        return;
    O0x.QB5G = NEJ.C();
    yg8Y = O0x.QB5G.N0x(O0x.eo1x);
    bVA1x = O0x.QB5G.cr0x;
    yg8Y.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.xE8w("oncontentready", e9f.oncontentready || this.cBr9i.f9e(this));
        this.cBq9h = !!e9f.nohack;
        this.cBm9d = !!e9f.destroyable;
        this.LK2x(e9f.content)
    }
    ;
    yg8Y.bB0x = function() {
        this.z9q("onbeforerecycle");
        this.bG0x();
        this.bdX9O();
        this.LK2x("");
        a8i.fh2x(this.o9f, {
            top: "",
            left: ""
        })
    }
    ;
    yg8Y.cBr9i = br0x;
    yg8Y.LN2x = br0x;
    yg8Y.bdX9O = function() {
        a8i.mO4S(this.o9f);
        if (!!this.ox4B) {
            this.ox4B = bg0x.bxx4B(this.o9f);
            delete this.ox4B
        }
    }
    ;
    yg8Y.LK2x = function(bp0x) {
        if (!this.o9f || !this.Dl0x || bp0x == null)
            return this;
        bp0x = bp0x || "";
        k9b.fJ2x(bp0x) ? this.Dl0x.innerHTML = bp0x : this.Dl0x.appendChild(bp0x);
        this.z9q("oncontentready", this.Dl0x);
        return this
    }
    ;
    yg8Y.gL2x = function(bj0x) {
        var C0x = bj0x.top;
        if (C0x != null) {
            C0x += "px";
            a8i.ba0x(this.o9f, "top", C0x);
            a8i.ba0x(this.ox4B, "top", C0x)
        }
        var C0x = bj0x.left;
        if (C0x != null) {
            C0x += "px";
            a8i.ba0x(this.o9f, "left", C0x);
            a8i.ba0x(this.ox4B, "left", C0x)
        }
        return this
    }
    ;
    yg8Y.J0x = function() {
        a8i.ba0x(this.o9f, "visibility", "hidden");
        bVA1x.J0x.apply(this, arguments);
        this.LN2x();
        a8i.ba0x(this.o9f, "visibility", "");
        if (!this.cBq9h) {
            this.ox4B = bg0x.ox4B(this.o9f)
        }
        return this
    }
    ;
    yg8Y.bq0x = function() {
        this.cBm9d ? this.T0x() : this.bdX9O();
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, k9b = c9h("nej.u"), a8i = c9h("nej.e"), O0x = c9h("nej.ui"), Dm0x;
    if (!!O0x.bem9d)
        return;
    O0x.bem9d = NEJ.C();
    Dm0x = O0x.bem9d.N0x(O0x.eo1x);
    Dm0x.bm0x = function(e9f) {
        this.PY4c();
        this.bn0x(this.cBl9c(e9f));
        this.ci0x.onbeforerecycle = this.T0x.f9e(this);
        this.pl5q = this.bkL1x()
    }
    ;
    Dm0x.bB0x = function() {
        this.z9q("onbeforerecycle");
        this.bG0x();
        delete this.ci0x;
        a8i.mO4S(this.o9f);
        var Dp0x = this.pl5q;
        if (!!Dp0x) {
            delete this.pl5q;
            Dp0x.T0x()
        }
    }
    ;
    Dm0x.bkL1x = br0x;
    Dm0x.cBl9c = function(e9f) {
        var m9d = {};
        k9b.eH1x(e9f, function(p9g, L0x) {
            this.ci0x.hasOwnProperty(L0x) ? this.ci0x[L0x] = p9g : m9d[L0x] = p9g
        }, this);
        return m9d
    }
    ;
    Dm0x.PY4c = function() {
        this.ci0x = {
            clazz: "",
            parent: null,
            content: this.o9f,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    }
    ;
    Dm0x.J0x = function() {
        if (!!this.pl5q)
            this.pl5q.J0x();
        this.z9q("onaftershow");
        return this
    }
    ;
    Dm0x.bq0x = function() {
        if (!!this.pl5q)
            this.pl5q.bq0x();
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, eq1x = c9h("nej.g"), bg0x = c9h("nej.h"), a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), O0x = c9h("nej.ui"), PA4E, bVz1x;
    if (!!O0x.Mu2x)
        return;
    var iX3x = a8i.uK7D(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + eq1x.bkK1x + ");}");
    O0x.Mu2x = NEJ.C();
    PA4E = O0x.Mu2x.N0x(O0x.eo1x);
    bVz1x = O0x.Mu2x.cr0x;
    PA4E.bm0x = function(e9f) {
        this.bn0x(e9f);
        var bp0x = e9f.content || "&nbsp;";
        k9b.fJ2x(bp0x) ? this.o9f.innerHTML = bp0x : this.o9f.appendChild(bp0x)
    }
    ;
    PA4E.bB0x = function() {
        this.bG0x();
        this.o9f.innerHTML = "&nbsp;"
    }
    ;
    PA4E.cf0x = function() {
        this.mt4x = iX3x
    }
    ;
    PA4E.J0x = function() {
        bg0x.bvl4p(this.o9f);
        bVz1x.J0x.apply(this, arguments);
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), O0x = c9h("nej.ut"), yl8d;
    if (!!O0x.vC7v)
        return;
    O0x.vC7v = NEJ.C();
    yl8d = O0x.vC7v.N0x(O0x.cH1x);
    yl8d.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.cBj9a = !!e9f.overflow;
        this.o9f = a8i.B9s(e9f.body);
        this.DA0x = a8i.B9s(e9f.view) || a8i.bNx8p(this.o9f);
        this.bVv1x = a8i.B9s(e9f.mbar) || this.o9f;
        this.beI0x = parseInt(e9f.direction) || 0;
        if (!!e9f.isRelative) {
            this.o9f.style.position = "relative";
            this.blL1x = true;
            this.blT1x()
        }
        this.bX0x([[document, "mouseup", this.blV1x.f9e(this)], [document, "mousemove", this.bma1x.f9e(this)], [this.bVv1x, "mousedown", this.Pp4t.f9e(this)]])
    }
    ;
    yl8d.blT1x = function() {
        if (!!this.blL1x) {
            this.MC2x = a8i.ic3x(this.o9f, this.DA0x);
            this.MC2x.x -= parseInt(a8i.di1x(this.o9f, "left")) || 0;
            this.MC2x.y -= parseInt(a8i.di1x(this.o9f, "top")) || 0
        }
    }
    ;
    yl8d.bB0x = function() {
        this.bG0x();
        delete this.o9f;
        delete this.bVv1x;
        delete this.DA0x
    }
    ;
    yl8d.bmg1x = function() {
        return {
            x: Math.max(this.DA0x.clientWidth, this.DA0x.scrollWidth) - this.o9f.offsetWidth,
            y: Math.max(this.DA0x.clientHeight, this.DA0x.scrollHeight) - this.o9f.offsetHeight
        }
    }
    ;
    yl8d.Pp4t = function(d9g) {
        h9c.bf0x(d9g);
        if (!!this.hZ3x)
            return;
        this.hZ3x = {
            x: h9c.jN3x(d9g),
            y: h9c.mg4k(d9g)
        };
        this.bVs1x = this.bmg1x();
        this.z9q("ondragstart", d9g)
    }
    ;
    yl8d.bma1x = function(d9g) {
        if (!this.hZ3x)
            return;
        var bj0x = {
            x: h9c.jN3x(d9g),
            y: h9c.mg4k(d9g)
        };
        var pP5U = bj0x.x - this.hZ3x.x
          , pI5N = bj0x.y - this.hZ3x.y
          , C0x = {
            top: (parseInt(a8i.di1x(this.o9f, "top")) || 0) + pI5N,
            left: (parseInt(a8i.di1x(this.o9f, "left")) || 0) + pP5U
        };
        if (this.blL1x) {
            this.blT1x();
            C0x.top = C0x.top + this.MC2x.y;
            C0x.left = C0x.left + this.MC2x.x
        }
        this.hZ3x = bj0x;
        this.gL2x(C0x)
    }
    ;
    yl8d.blV1x = function(d9g) {
        if (!this.hZ3x)
            return;
        delete this.bVs1x;
        delete this.hZ3x;
        this.z9q("ondragend", this.bmL2x())
    }
    ;
    yl8d.gL2x = function(d9g) {
        if (!this.cBj9a) {
            var bVq1x = this.bVs1x || this.bmg1x();
            d9g.top = Math.min(bVq1x.y, Math.max(0, d9g.top));
            d9g.left = Math.min(bVq1x.x, Math.max(0, d9g.left))
        }
        var cj0x = this.o9f.style;
        if (this.blL1x) {
            this.blT1x();
            d9g.top = d9g.top - this.MC2x.y;
            d9g.left = d9g.left - this.MC2x.x
        }
        if (this.beI0x == 0 || this.beI0x == 2)
            cj0x.top = d9g.top + "px";
        if (this.beI0x == 0 || this.beI0x == 1)
            cj0x.left = d9g.left + "px";
        this.z9q("onchange", d9g);
        return this
    }
    ;
    yl8d.bmL2x = function() {
        return {
            left: parseInt(a8i.di1x(this.o9f, "left")) || 0,
            top: parseInt(a8i.di1x(this.o9f, "top")) || 0
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = NEJ.P("nej.e"), h9c = NEJ.P("nej.v"), k9b = NEJ.P("nej.u"), I0x = NEJ.P("nej.ut"), O0x = NEJ.P("nej.ui"), iX3x, gs2x, b9i, K0x;
    if (!!O0x.beV0x)
        return;
    O0x.beV0x = NEJ.C();
    b9i = O0x.beV0x.N0x(O0x.QB5G);
    K0x = O0x.beV0x.cr0x;
    b9i.cv0x = function() {
        this.sJ6D = {};
        this.lc3x = {
            onchange: this.bma1x.f9e(this)
        };
        this.cD1x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.cAW9N(e9f.mask);
        this.cAV9M(e9f.align);
        this.DK0x(e9f.title);
        if (!e9f.draggable)
            return;
        this.jl3x = I0x.vC7v.A9r(this.lc3x)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        delete this.qT5Y;
        delete this.OS4W;
        if (!!this.DN0x) {
            this.DN0x.T0x();
            delete this.DN0x
        }
        if (!!this.jl3x) {
            this.jl3x.T0x();
            delete this.jl3x
        }
    }
    ;
    b9i.cf0x = function() {
        this.mt4x = iX3x;
        this.ce0x = gs2x
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.df1x(this.o9f);
        this.Dl0x = j9a[1];
        this.lc3x.mbar = j9a[0];
        this.lc3x.body = this.o9f;
        h9c.s9j(j9a[2], "mousedown", this.cAS9J.f9e(this));
        h9c.s9j(this.lc3x.mbar, "mousedown", this.Pp4t.f9e(this));
        this.bVo1x = a8i.df1x(this.lc3x.mbar)[0]
    }
    ;
    b9i.cAS9J = function(d9g) {
        h9c.bf0x(d9g);
        this.z9q("onclose", d9g);
        if (!d9g.stopped) {
            this.bq0x()
        }
    }
    ;
    b9i.Pp4t = function(d9g) {
        h9c.z9q(document, "click")
    }
    ;
    b9i.bma1x = function(d9g) {
        if (!this.ox4B)
            return;
        a8i.fh2x(this.ox4B, {
            top: d9g.top + "px",
            left: d9g.left + "px"
        })
    }
    ;
    b9i.LN2x = function() {
        var ez1x = [function() {
            return 0
        }
        , function(of4j, ne4i, bj0x, L0x) {
            if (L0x == "top" && window.top != window.self) {
                var bfx0x = 0
                  , It1x = 0;
                if (top.g_topBarHeight)
                    bfx0x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight)
                    It1x = top.g_bottomBarHeight;
                if (of4j.top <= bfx0x) {
                    var boU2x = Math.max(0, (ne4i.height - (bfx0x - of4j.top) - It1x - bj0x.height) / 2);
                    return boU2x + bfx0x
                } else {
                    var boU2x = Math.max(0, (ne4i.height - It1x - bj0x.height) / 2);
                    return boU2x + of4j.top
                }
            }
            return Math.max(0, of4j[L0x] + (ne4i[iG3x[L0x]] - bj0x[iG3x[L0x]]) / 2)
        }
        , function(of4j, ne4i, bj0x, L0x) {
            return of4j[L0x] + (ne4i[iG3x[L0x]] - bj0x[iG3x[L0x]])
        }
        ]
          , cAP9G = ["left", "top"]
          , iG3x = {
            left: "width",
            top: "height"
        };
        return function() {
            var C0x = {}
              , cj0x = this.o9f.style
              , jM3x = a8i.oJ5O()
              , of4j = {
                left: jM3x.scrollLeft,
                top: jM3x.scrollTop
            }
              , ne4i = {
                width: jM3x.clientWidth,
                height: jM3x.clientHeight
            }
              , bj0x = {
                width: this.o9f.offsetWidth,
                height: this.o9f.offsetHeight
            }
              , dr1x = {
                left: jM3x.clientWidth - this.o9f.offsetWidth,
                top: jM3x.clientHeight - this.o9f.offsetHeight
            };
            k9b.bd0x(cAP9G, function(L0x, r9i) {
                var dw1x = ez1x[this.qT5Y[r9i]];
                if (!dw1x)
                    return;
                C0x[L0x] = dw1x(of4j, ne4i, bj0x, L0x)
            }, this);
            this.gL2x(C0x)
        }
    }();
    b9i.cAO9F = function() {
        if (!this.DN0x) {
            if (!this.OS4W)
                return;
            this.sJ6D.parent = this.go2x;
            this.DN0x = this.OS4W.A9r(this.sJ6D)
        }
        this.DN0x.J0x()
    }
    ;
    b9i.bdX9O = function() {
        if (!!this.DN0x)
            this.DN0x.bq0x();
        K0x.bdX9O.apply(this, arguments)
    }
    ;
    b9i.cAW9N = function(lz4D) {
        if (!!lz4D) {
            if (lz4D instanceof O0x.Mu2x) {
                this.DN0x = lz4D;
                return
            }
            if (k9b.gO2x(lz4D)) {
                this.OS4W = lz4D;
                return
            }
            this.OS4W = O0x.Mu2x;
            if (k9b.fJ2x(lz4D))
                this.sJ6D.clazz = lz4D;
            return
        }
        this.OS4W = null
    }
    ;
    b9i.DK0x = function(es1x, dU1x) {
        if (!!this.bVo1x) {
            var bgh0x = !dU1x ? "innerText" : "innerHTML";
            this.bVo1x[bgh0x] = es1x || "标题"
        }
        return this
    }
    ;
    b9i.cAV9M = function() {
        var dh1x = /\s+/
          , cAM9D = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        }
          , cAL9C = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(on4r) {
            this.qT5Y = (on4r || "").split(dh1x);
            var cl0x = cAM9D[this.qT5Y[0]];
            if (cl0x == null)
                cl0x = 1;
            this.qT5Y[0] = cl0x;
            var cl0x = cAL9C[this.qT5Y[1]];
            if (cl0x == null)
                cl0x = 1;
            this.qT5Y[1] = cl0x;
            return this
        }
    }();
    b9i.J0x = function() {
        K0x.J0x.apply(this, arguments);
        this.cAO9F();
        return this
    }
    ;
    iX3x = a8i.uK7D(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gs2x = a8i.jz3x('<div class="' + iX3x + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
}
)();
(function() {
    var c9h = NEJ.P, k9b = c9h("nej.u"), O0x = c9h("nej.ui"), bpR2x;
    if (!!O0x.bfz0x)
        return;
    O0x.bfz0x = NEJ.C();
    bpR2x = O0x.bfz0x.N0x(O0x.bem9d);
    bpR2x.bkL1x = function() {
        return O0x.beV0x.A9r(this.ci0x)
    }
    ;
    bpR2x.PY4c = function() {
        O0x.bfz0x.cr0x.PY4c.apply(this, arguments);
        this.ci0x.mask = null;
        this.ci0x.title = "标题";
        this.ci0x.align = "";
        this.ci0x.draggable = !1;
        this.ci0x.onclose = null
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), bc0x = c9h("nej.ui"), n9e = c9h("nm.l"), b9i, K0x;
    n9e.el1x = NEJ.C();
    b9i = n9e.el1x.N0x(bc0x.bfz0x);
    b9i.bm0x = function(e9f) {
        e9f.clazz = "m-layer z-show " + (e9f.clazz || "");
        e9f.nohack = true;
        e9f.draggable = true;
        this.bn0x(e9f)
    }
    ;
    b9i.ea1x = function(g9d, bF0x) {
        if (!g9d)
            return;
        a8i.ba0x(g9d, "display", !bF0x ? "none" : "");
        g9d.lastChild.innerText = bF0x || ""
    }
    ;
    b9i.dY1x = function(gR2x, dd1x, OB4F, OA4E) {
        var ef1x = "js-lock";
        if (dd1x === undefined)
            return a8i.bE0x(gR2x, ef1x);
        !dd1x ? a8i.y9p(gR2x, ef1x) : a8i.w9n(gR2x, ef1x);
        gR2x.firstChild.innerText = !dd1x ? OB4F : OA4E
    }
    ;
    n9e.el1x.J0x = function(e9f) {
        e9f = e9f || {};
        if (e9f.mask === undefined)
            e9f.mask = "m-mask";
        if (e9f.parent === undefined)
            e9f.parent = document.body;
        if (e9f.draggable === undefined)
            e9f.draggable = true;
        !!this.fr2x && this.fr2x.T0x();
        this.fr2x = this.A9r(e9f);
        this.fr2x.J0x(e9f);
        return this.fr2x
    }
    ;
    n9e.el1x.bq0x = function() {
        !!this.fr2x && this.fr2x.T0x()
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, K0x;
    n9e.brL3x = NEJ.C();
    b9i = n9e.brL3x.N0x(n9e.el1x);
    K0x = n9e.brL3x.cr0x;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        if (e9f.bubble === undefined)
            e9f.bubble = true;
        this.Ox4B = e9f.bubble;
        this.ri5n = e9f.message || ""
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = a8i.jz3x('<div class="lyct f-cb f-tc"></div>')
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        h9c.s9j(this.o9f, "click", this.cJ1x.f9e(this))
    }
    ;
    b9i.cJ1x = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:action");
        if (!g9d)
            return;
        if (g9d.href)
            h9c.co0x(d9g);
        if (a8i.t9k(g9d, "action") == "close")
            this.bq0x();
        if (this.Ox4B === !1)
            h9c.tH6B(d9g);
        this.z9q("onaction", a8i.t9k(g9d, "action"))
    }
    ;
    b9i.J0x = function() {
        K0x.J0x.call(this);
        this.o9f.innerHTML = this.ri5n
    }
    ;
    var gW2x = a8i.ey1x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l9c.nE4I = function() {
        var ej1x;
        var cF1x;
        var bsi3x = function(eK2x, U0x) {
            if (k9b.gO2x(eK2x, "function") && eK2x(U0x) != -1)
                cF1x.T0x()
        };
        var DX0x = function() {
            !!cF1x && cF1x.bq0x()
        };
        return function(e9f) {
            clearTimeout(ej1x);
            e9f = e9f || {};
            e9f.title = e9f.title || "提示";
            e9f.clazz = e9f.clazz || "";
            e9f.parent = e9f.parent || document.body;
            e9f.buttons = e9f.buttons || [];
            e9f.message = a8i.cc0x(gW2x, e9f);
            e9f.onaction = bsi3x.f9e(null, e9f.action);
            if (e9f.mask === undefined)
                e9f.mask = true;
            if (e9f.draggable === undefined)
                e9f.draggable = true;
            !!cF1x && cF1x.T0x();
            cF1x = n9e.brL3x.A9r(e9f);
            cF1x.J0x();
            if (e9f.autoclose)
                ej1x = setTimeout(DX0x.f9e(null), 2e3);
            return cF1x
        }
    }();
    l9c.eN2x = function(e9f) {
        e9f = e9f || {};
        e9f.clazz = e9f.clazz || "m-layer-w1";
        e9f.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e9f.btntxt || "确定"
        }];
        var cF1x = l9c.nE4I(e9f);
        return cF1x
    }
    ;
    l9c.hC2x = function(e9f) {
        e9f = e9f || {};
        e9f.clazz = e9f.clazz || "m-layer-w2";
        e9f.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e9f.btnok || "确定",
            style: e9f.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e9f.btncc || "取消",
            style: e9f.ccstyle || ""
        }];
        var cF1x = l9c.nE4I(e9f);
        return cF1x
    }
}
)();
(function() {
    var c9h = NEJ.P
      , br0x = NEJ.F
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , k9b = c9h("nej.u");
    a8i.cAI9z = function() {
        var gM2x = /[\r\n]/gi
          , R0x = {};
        var cAH9y = function(cQ1x) {
            return (cQ1x || "").replace(gM2x, "aa").length
        };
        var bVk1x = function(D0x) {
            var bi0x = R0x[D0x]
              , bVj1x = a8i.B9s(D0x)
              , rH5M = a8i.B9s(D0x + "-counter");
            if (!bVj1x || !bi0x)
                return;
            var d9g = {
                input: bVj1x.value
            };
            d9g.length = bi0x.onlength(d9g.input);
            d9g.delta = bi0x.max - d9g.length;
            bi0x.onchange(d9g);
            rH5M.innerHTML = d9g.value || "剩余" + d9g.delta + "个字"
        };
        return function(G0x, e9f) {
            var D0x = a8i.lQ4U(G0x);
            if (!D0x || !!R0x[D0x])
                return;
            var bi0x = NEJ.X({}, e9f);
            bi0x.onchange = bi0x.onchange || br0x;
            bi0x.onlength = cAH9y;
            if (!bi0x.max) {
                var bVi1x = parseInt(a8i.hb2x(D0x, "maxlength"))
                  , bVh1x = parseInt(a8i.t9k(D0x, "maxLength"));
                bi0x.max = bVi1x || bVh1x || 100;
                if (!bVi1x && !!bVh1x)
                    bi0x.onlength = k9b.fN2x
            }
            R0x[D0x] = bi0x;
            h9c.s9j(D0x, "input", bVk1x.f9e(null, D0x));
            var g9d = a8i.Mc2x(D0x, {
                nid: bi0x.nid || "js-counter",
                clazz: bi0x.clazz
            });
            bi0x.xid = D0x + "-counter";
            g9d.id = bi0x.xid;
            bVk1x(D0x)
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P
      , a8i = c9h("nej.e")
      , bg0x = c9h("nej.h");
    bg0x.buh3x = function(G0x, eg1x) {}
}
)();
(function() {
    var c9h = NEJ.P
      , br0x = NEJ.F
      , O0x = c9h("nej.p")
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , bg0x = c9h("nej.h");
    if (O0x.nG4K.trident)
        return;
    bg0x.buh3x = function() {
        var R0x = {};
        var Ji1x = function(d9g) {
            var cT1x = h9c.X0x(d9g);
            if (!!cT1x.value)
                return;
            a8i.ba0x(a8i.Mc2x(cT1x), "display", "none")
        };
        var Fh0x = function(d9g) {
            var cT1x = h9c.X0x(d9g);
            if (!!cT1x.value)
                return;
            a8i.ba0x(a8i.Mc2x(cT1x), "display", "")
        };
        var cAC9t = function(cT1x, eg1x) {
            var D0x = a8i.lQ4U(cT1x)
              , je3x = a8i.Mc2x(cT1x, {
                tag: "label",
                clazz: eg1x
            });
            je3x.htmlFor = D0x;
            var cL1x = a8i.hb2x(cT1x, "placeholder") || "";
            je3x.innerText = cL1x == "null" ? "" : cL1x;
            var cg0x = cT1x.offsetHeight + "px";
            a8i.fh2x(je3x, {
                left: 0,
                display: !cT1x.value ? "" : "none"
            })
        };
        return bg0x.buh3x.eL2x(function(d9g) {
            d9g.stopped = !0;
            var bh0x = d9g.args
              , cT1x = a8i.B9s(bh0x[0]);
            if (!!R0x[cT1x.id])
                return;
            cAC9t(cT1x, bh0x[1]);
            R0x[cT1x.id] = !0;
            h9c.s9j(cT1x, "blur", Fh0x.f9e(null));
            h9c.s9j(cT1x, "focus", Ji1x.f9e(null))
        })
    }()
}
)();
(function() {
    var c9h = NEJ.P
      , bg0x = c9h("nej.h")
      , a8i = c9h("nej.e")
      , db1x = c9h("nej.x");
    a8i.gQ2x = db1x.gQ2x = function(G0x, eg1x) {
        bg0x.buh3x(G0x, a8i.t9k(G0x, "holder") || eg1x || "js-placeholder");
        return this
    }
    ;
    db1x.isChange = !0
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), O0x = c9h("nej.ut"), ih3x;
    if (!!O0x.NU4Y)
        return;
    O0x.NU4Y = NEJ.C();
    ih3x = O0x.NU4Y.N0x(O0x.cH1x);
    ih3x.cv0x = function() {
        this.cD1x();
        this.IK1x = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    }
    ;
    ih3x.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.gB2x = document.forms[e9f.form] || a8i.B9s(e9f.form);
        this.bX0x([[this.gB2x, "keypress", this.cAA9r.f9e(this)]]);
        this.ri5n = e9f.message || {};
        this.ri5n.pass = this.ri5n.pass || "&nbsp;";
        var fu2x = this.qt5y(this.gB2x, "focusMode", 1);
        if (!isNaN(fu2x)) {
            this.bVf1x = {
                mode: fu2x,
                clazz: e9f.focus
            }
        }
        this.Ee0x = e9f.holder;
        this.IK1x.tp.clazz = "js-mhd " + (e9f.tip || "js-tip");
        this.IK1x.ok.clazz = "js-mhd " + (e9f.pass || "js-pass");
        this.IK1x.er.clazz = "js-mhd " + (e9f.error || "js-error");
        this.bVe1x = e9f.invalid || "js-invalid";
        this.cAw9n(e9f);
        this.gP2x();
        if (!!this.Ef0x)
            this.Ef0x.focus()
    }
    ;
    ih3x.bB0x = function() {
        this.bG0x();
        delete this.ri5n;
        delete this.Ef0x;
        delete this.IN1x;
        delete this.gB2x;
        delete this.bVc1x;
        delete this.NS4W
    }
    ;
    ih3x.qt5y = function(g9d, wU8M, u9l) {
        var C0x = a8i.t9k(g9d, wU8M);
        switch (u9l) {
        case 1:
            return parseInt(C0x);
        case 2:
            return (C0x || "").toLowerCase() == "true";
        case 3:
            return this.bxc4g(C0x)
        }
        return C0x
    }
    ;
    ih3x.Eb0x = function(C0x, u9l) {
        if (u9l == "date")
            return this.bxc4g(C0x);
        return parseInt(C0x)
    }
    ;
    ih3x.bfV0x = function() {
        var kw3x = /^button|submit|reset|image|hidden|file$/i;
        return function(g9d) {
            g9d = this.B9s(g9d) || g9d;
            var u9l = g9d.type;
            return !!g9d.name && !kw3x.test(g9d.type || "")
        }
    }();
    ih3x.cAt9k = function() {
        var kw3x = /^hidden$/i;
        return function(g9d) {
            if (this.bfV0x(g9d))
                return !0;
            g9d = this.B9s(g9d) || g9d;
            var u9l = g9d.type || "";
            return kw3x.test(u9l)
        }
    }();
    ih3x.bxc4g = function() {
        var dh1x = /[-\/]/;
        var cAs9j = function(C0x) {
            if (!C0x)
                return "";
            C0x = C0x.split(dh1x);
            C0x.push(C0x.shift());
            return C0x.join("/")
        };
        return function(C0x) {
            if ((C0x || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(cAs9j(C0x))
        }
    }();
    ih3x.cAA9r = function(d9g) {
        if (d9g.keyCode != 13)
            return;
        this.z9q("onenter", d9g)
    }
    ;
    ih3x.cAr9i = function(D0x, W0x) {
        var rU6O = this.NS4W[W0x]
          , C0x = this.qt5y(D0x, W0x);
        if (!C0x || !rU6O)
            return;
        this.bfP0x(D0x, rU6O);
        this.bxW4a(D0x, W0x, C0x)
    }
    ;
    ih3x.cAq9h = function(D0x, W0x) {
        try {
            var bVb1x = this.qt5y(D0x, W0x);
            if (!bVb1x)
                return;
            var C0x = new RegExp(bVb1x);
            this.bxW4a(D0x, W0x, C0x);
            this.bfP0x(D0x, this.NS4W[W0x])
        } catch (e) {}
    }
    ;
    ih3x.cAo9f = function(D0x, W0x) {
        var rU6O = this.NS4W[W0x];
        if (!!rU6O && this.qt5y(D0x, W0x, 2))
            this.bfP0x(D0x, rU6O)
    }
    ;
    ih3x.byc4g = function(D0x, W0x, C0x) {
        C0x = parseInt(C0x);
        if (isNaN(C0x))
            return;
        this.bxW4a(D0x, W0x, C0x);
        this.bfP0x(D0x, this.NS4W[W0x])
    }
    ;
    ih3x.bUZ1x = function(D0x, W0x) {
        this.byc4g(D0x, W0x, this.qt5y(D0x, W0x))
    }
    ;
    ih3x.bUY1x = function(D0x, W0x) {
        this.byc4g(D0x, W0x, a8i.hb2x(D0x, W0x))
    }
    ;
    ih3x.bUW1x = function(D0x, W0x, u9l) {
        var C0x = this.Eb0x(this.qt5y(D0x, W0x), this.qt5y(D0x, "type"));
        this.byc4g(D0x, W0x, C0x)
    }
    ;
    ih3x.cAe8W = function() {
        var gM2x = /^input|textarea$/i;
        var Ji1x = function(d9g) {
            this.qj5o(h9c.X0x(d9g))
        };
        var Fh0x = function(d9g) {
            var g9d = h9c.X0x(d9g);
            if (!this.qt5y(g9d, "ignore", 2)) {
                this.bUS1x(g9d)
            }
        };
        return function(g9d) {
            if (this.qt5y(g9d, "autoFocus", 2))
                this.Ef0x = g9d;
            var rn5s = a8i.hb2x(g9d, "placeholder");
            if (!!rn5s && rn5s != "null")
                a8i.gQ2x(g9d, this.Ee0x);
            if (!!this.bVf1x && gM2x.test(g9d.tagName))
                a8i.mF4J(g9d, this.bVf1x);
            var D0x = a8i.lQ4U(g9d);
            this.cAo9f(D0x, "required");
            this.cAr9i(D0x, "type");
            this.cAq9h(D0x, "pattern");
            this.bUY1x(D0x, "maxlength");
            this.bUY1x(D0x, "minlength");
            this.bUZ1x(D0x, "maxLength");
            this.bUZ1x(D0x, "minLength");
            this.bUW1x(D0x, "min");
            this.bUW1x(D0x, "max");
            var W0x = g9d.name;
            this.ri5n[W0x + "-tip"] = this.qt5y(g9d, "tip");
            this.ri5n[W0x + "-error"] = this.qt5y(g9d, "message");
            this.qj5o(g9d);
            var bx0x = this.IN1x[D0x]
              , i9b = (bx0x || bb0x).data || bb0x
              , Ov4z = this.qt5y(g9d, "counter", 2);
            if (Ov4z && (i9b.maxlength || i9b.maxLength)) {
                a8i.cAI9z(D0x, {
                    nid: this.IK1x.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bx0x && gM2x.test(g9d.tagName)) {
                this.bX0x([[g9d, "focus", Ji1x.f9e(this)], [g9d, "blur", Fh0x.f9e(this)]])
            } else if (this.qt5y(g9d, "focus", 2)) {
                this.bX0x([[g9d, "focus", Ji1x.f9e(this)]])
            }
        }
    }();
    ih3x.cAw9n = function() {
        var Iy1x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bxc4g(v))
            }
        };
        var cAb8T = {
            required: function(g9d) {
                var u9l = g9d.type
                  , czY8Q = !g9d.value
                  , czX8P = (u9l == "checkbox" || u9l == "radio") && !g9d.checked;
                if (czX8P || czY8Q)
                    return -1
            },
            type: function(g9d, e9f) {
                var dh1x = this.bVc1x[e9f.type]
                  , fA2x = g9d.value.trim()
                  , czW8O = !!dh1x.test && !dh1x.test(fA2x)
                  , czT8L = k9b.gO2x(dh1x) && !dh1x.call(this, fA2x);
                if (czW8O || czT8L)
                    return -2
            },
            pattern: function(g9d, e9f) {
                if (!e9f.pattern.test(g9d.value))
                    return -3
            },
            maxlength: function(g9d, e9f) {
                if (g9d.value.length > e9f.maxlength)
                    return -4
            },
            minlength: function(g9d, e9f) {
                if (g9d.value.length < e9f.minlength)
                    return -5
            },
            maxLength: function(g9d, e9f) {
                if (k9b.fN2x(g9d.value) > e9f.maxLength)
                    return -4
            },
            minLength: function(g9d, e9f) {
                if (k9b.fN2x(g9d.value) < e9f.minLength)
                    return -5
            },
            min: function(g9d, e9f) {
                var hk2x = this.Eb0x(g9d.value, e9f.type);
                if (isNaN(hk2x) || hk2x < e9f.min)
                    return -6
            },
            max: function(g9d, e9f) {
                var hk2x = this.Eb0x(g9d.value, e9f.type);
                if (isNaN(hk2x) || hk2x > e9f.max)
                    return -7
            }
        };
        return function(e9f) {
            this.bVc1x = NEJ.X(NEJ.X({}, Iy1x), e9f.type);
            this.NS4W = NEJ.X(NEJ.X({}, cAb8T), e9f.attr)
        }
    }();
    ih3x.bfP0x = function(D0x, AX9O) {
        if (!k9b.gO2x(AX9O))
            return;
        var bx0x = this.IN1x[D0x];
        if (!bx0x || !bx0x.func) {
            bx0x = bx0x || {};
            bx0x.func = [];
            this.IN1x[D0x] = bx0x
        }
        bx0x.func.push(AX9O)
    }
    ;
    ih3x.bxW4a = function(D0x, W0x, C0x) {
        if (!W0x)
            return;
        var bx0x = this.IN1x[D0x];
        if (!bx0x || !bx0x.data) {
            bx0x = bx0x || {};
            bx0x.data = {};
            this.IN1x[D0x] = bx0x
        }
        bx0x.data[W0x] = C0x
    }
    ;
    ih3x.bUS1x = function(g9d) {
        g9d = this.B9s(g9d) || g9d;
        var bx0x = this.IN1x[a8i.lQ4U(g9d)];
        if (!g9d || !bx0x || !this.bfV0x(g9d))
            return !0;
        var m9d;
        k9b.eH1x(bx0x.func, function(ez1x) {
            m9d = ez1x.call(this, g9d, bx0x.data);
            return m9d != null
        }, this);
        if (m9d == null) {
            var d9g = {
                target: g9d,
                form: this.gB2x
            };
            this.z9q("oncheck", d9g);
            m9d = d9g.value
        }
        var d9g = {
            target: g9d,
            form: this.gB2x
        };
        if (m9d != null) {
            d9g.code = m9d;
            this.z9q("oninvalid", d9g);
            if (!d9g.stopped) {
                this.czS8K(g9d, d9g.value || this.ri5n[g9d.name + m9d])
            }
        } else {
            this.z9q("onvalid", d9g);
            if (!d9g.stopped)
                this.czR8J(g9d, d9g.value)
        }
        return m9d == null
    }
    ;
    ih3x.AV9M = function() {
        var czP8H = function(beb9S, bdZ9Q) {
            return beb9S == bdZ9Q ? "block" : "none"
        };
        var czN8F = function(g9d, u9l, bF0x) {
            var rn5s = bUP1x.call(this, g9d, u9l);
            if (!rn5s && !!bF0x)
                rn5s = a8i.Mc2x(g9d, this.IK1x[u9l]);
            return rn5s
        };
        var bUP1x = function(g9d, u9l) {
            var rn5s;
            if (u9l == "tp")
                rn5s = a8i.B9s(g9d.name + "-tip");
            if (!rn5s)
                rn5s = a8i.E0x(g9d.parentNode, this.IK1x[u9l].nid)[0];
            return rn5s
        };
        return function(g9d, bF0x, u9l) {
            g9d = this.B9s(g9d) || g9d;
            if (!g9d)
                return;
            u9l == "er" ? a8i.w9n(g9d, this.bVe1x) : a8i.y9p(g9d, this.bVe1x);
            var rn5s = czN8F.call(this, g9d, u9l, bF0x);
            if (!!rn5s && !!bF0x)
                rn5s.innerHTML = bF0x;
            k9b.eH1x(this.IK1x, function(C0x, L0x) {
                a8i.ba0x(bUP1x.call(this, g9d, L0x), "display", czP8H(u9l, L0x))
            }, this)
        }
    }();
    ih3x.qj5o = function(g9d, bF0x) {
        this.AV9M(g9d, bF0x || this.ri5n[g9d.name + "-tip"], "tp");
        return this
    }
    ;
    ih3x.czR8J = function(g9d, bF0x) {
        this.AV9M(g9d, bF0x || this.ri5n[g9d.name + "-pass"] || this.ri5n.pass, "ok");
        return this
    }
    ;
    ih3x.czS8K = function(g9d, bF0x) {
        this.AV9M(g9d, bF0x || this.ri5n[g9d.name + "-error"], "er");
        return this
    }
    ;
    ih3x.jd3x = function() {
        var gM2x = /^(?:radio|checkbox)$/i;
        var czL8D = function(C0x) {
            return C0x == null ? "" : C0x
        };
        var bUO1x = function(C0x, g9d) {
            if (gM2x.test(g9d.type || "")) {
                g9d.checked = C0x == g9d.value
            } else {
                g9d.value = czL8D(C0x)
            }
        };
        return function(W0x, C0x) {
            var g9d = this.B9s(W0x);
            if (!g9d)
                return this;
            if (g9d.tagName == "SELECT" || !g9d.length) {
                bUO1x(C0x, g9d)
            } else {
                k9b.bd0x(g9d, bUO1x.f9e(null, C0x))
            }
            return this
        }
    }();
    ih3x.B9s = function(W0x) {
        return this.gB2x.elements[W0x]
    }
    ;
    ih3x.cHb0x = function() {
        return this.gB2x
    }
    ;
    ih3x.bfg0x = function() {
        var gM2x = /^radio|checkbox$/i
          , kw3x = /^number|date$/;
        var czE8w = function(bz0x, g9d) {
            var W0x = g9d.name
              , C0x = g9d.value
              , bx0x = bz0x[W0x]
              , u9l = this.qt5y(g9d, "type");
            if (kw3x.test(u9l))
                C0x = this.Eb0x(C0x, u9l);
            if (gM2x.test(g9d.type) && !g9d.checked) {
                C0x = this.qt5y(g9d, "value");
                if (!C0x)
                    return
            }
            if (!!bx0x) {
                if (!k9b.ec1x(bx0x)) {
                    bx0x = [bx0x];
                    bz0x[W0x] = bx0x
                }
                bx0x.push(C0x)
            } else {
                bz0x[W0x] = C0x
            }
        };
        return function() {
            var m9d = {};
            k9b.bd0x(this.gB2x.elements, function(g9d) {
                if (this.cAt9k(g9d))
                    czE8w.call(this, m9d, g9d)
            }, this);
            return m9d
        }
    }();
    ih3x.Pe4i = function() {
        var czD8v = function(g9d) {
            if (this.bfV0x(g9d))
                this.qj5o(g9d)
        };
        return function() {
            this.gB2x.reset();
            k9b.bd0x(this.gB2x.elements, czD8v, this);
            return this
        }
    }();
    ih3x.cHc0x = function() {
        this.gB2x.submit();
        return this
    }
    ;
    ih3x.gP2x = function() {
        var czz8r = function(g9d) {
            if (this.bfV0x(g9d))
                this.cAe8W(g9d)
        };
        return function() {
            this.IN1x = {};
            k9b.bd0x(this.gB2x.elements, czz8r, this);
            return this
        }
    }();
    ih3x.czy8q = function(g9d) {
        g9d = this.B9s(g9d) || g9d;
        if (!!g9d)
            return this.bUS1x(g9d);
        var m9d = !0;
        k9b.bd0x(this.gB2x.elements, function(g9d) {
            var in3x = this.czy8q(g9d);
            m9d = m9d && in3x
        }, this);
        return m9d
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), I0x = c9h("nej.ut"), k9b = c9h("nej.u"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, K0x;
    n9e.beS0x = NEJ.C();
    b9i = n9e.beS0x.N0x(n9e.el1x);
    K0x = n9e.beS0x.cr0x;
    b9i.bV0x = function() {
        this.ch0x();
        h9c.s9j(this.o9f, "click", this.cJ1x.f9e(this));
        h9c.s9j(document, "mousewheel", this.DF0x.f9e(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.DF0x.f9e(this))
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        if (e9f.jst) {
            this.o9f.innerHTML = a8i.cc0x(e9f.jst, e9f.data)
        } else if (e9f.ntp) {
            this.o9f.appendChild(a8i.dD1x(e9f.ntp))
        } else if (e9f.txt) {
            this.o9f.innerHTML = a8i.ij3x(e9f.txt)
        } else if (e9f.html) {
            this.o9f.innerHTML = e9f.html
        }
        var Pj4n = this.o9f.getElementsByTagName("form");
        if (Pj4n.length) {
            this.gB2x = I0x.NU4Y.A9r({
                form: Pj4n[0]
            })
        }
        this.HY1x = a8i.df1x(this.o9f)[0]
    }
    ;
    b9i.bB0x = function() {
        this.z9q("ondestroy");
        this.bG0x();
        this.o9f.innerHTML = "";
        delete this.HY1x
    }
    ;
    b9i.cJ1x = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:action")
          , i9b = this.gB2x ? this.gB2x.bfg0x() : null
          , d9g = {
            action: a8i.t9k(g9d, "action")
        };
        if (i9b)
            d9g.data = i9b;
        if (d9g.action) {
            this.z9q("onaction", d9g);
            if (d9g.stopped)
                return;
            this.bq0x()
        }
    }
    ;
    b9i.DF0x = function(d9g) {
        if (!this.HY1x)
            return;
        h9c.bf0x(d9g);
        var dr1x = d9g.wheelDelta || -d9g.detail;
        this.HY1x.scrollTop -= dr1x
    }
    ;
    l9c.jY3x = function(e9f) {
        e9f.destroyable = e9f.destroyable || true;
        e9f.title = e9f.title || "提示";
        e9f.draggable = true;
        e9f.parent = e9f.parent || document.body;
        e9f.mask = e9f.mask || true;
        var Dp0x = n9e.beS0x.A9r(e9f);
        Dp0x.J0x();
        return Dp0x
    }
}
)();
(function() {
    var p = NEJ.P("nej.u");
    var bUL1x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , Pt4x = {}
      , HT1x = {};
    for (var i = 0, l = bUL1x.length, c; i < l; i++) {
        c = bUL1x.charAt(i);
        Pt4x[i] = c;
        HT1x[c] = i
    }
    var czw8o = function(iA3x) {
        var r9i = 0, c, m9d = [];
        while (r9i < iA3x.length) {
            c = iA3x[r9i];
            if (c < 128) {
                m9d.push(String.fromCharCode(c));
                r9i++
            } else if (c > 191 && c < 224) {
                m9d.push(String.fromCharCode((c & 31) << 6 | iA3x[r9i + 1] & 63));
                r9i += 2
            } else {
                m9d.push(String.fromCharCode((c & 15) << 12 | (iA3x[r9i + 1] & 63) << 6 | iA3x[r9i + 2] & 63));
                r9i += 3
            }
        }
        return m9d.join("")
    };
    var czv8n = function() {
        var hJ2x = /\r\n/g;
        return function(i9b) {
            i9b = i9b.replace(hJ2x, "\n");
            var m9d = []
              , nc4g = String.fromCharCode(237);
            if (nc4g.charCodeAt(0) < 0)
                for (var i = 0, l = i9b.length, c; i < l; i++) {
                    c = i9b.charCodeAt(i);
                    c > 0 ? m9d.push(c) : m9d.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = i9b.length, c; i < l; i++) {
                    c = i9b.charCodeAt(i);
                    if (c < 128)
                        m9d.push(c);
                    else if (c > 127 && c < 2048)
                        m9d.push(c >> 6 | 192, c & 63 | 128);
                    else
                        m9d.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return m9d
        }
    }();
    var Mt2x = function(iA3x) {
        var r9i = 0
          , m9d = []
          , fu2x = iA3x.length % 3;
        if (fu2x == 1)
            iA3x.push(0, 0);
        if (fu2x == 2)
            iA3x.push(0);
        while (r9i < iA3x.length) {
            m9d.push(Pt4x[iA3x[r9i] >> 2], Pt4x[(iA3x[r9i] & 3) << 4 | iA3x[r9i + 1] >> 4], Pt4x[(iA3x[r9i + 1] & 15) << 2 | iA3x[r9i + 2] >> 6], Pt4x[iA3x[r9i + 2] & 63]);
            r9i += 3
        }
        if (fu2x == 1)
            m9d[m9d.length - 1] = m9d[m9d.length - 2] = "=";
        if (fu2x == 2)
            m9d[m9d.length - 1] = "=";
        return m9d.join("")
    };
    var bUK1x = function() {
        var sX6R = /\n|\r|=/g;
        return function(i9b) {
            var r9i = 0
              , m9d = [];
            i9b = i9b.replace(sX6R, "");
            for (var i = 0, l = i9b.length; i < l; i += 4)
                m9d.push(HT1x[i9b.charAt(i)] << 2 | HT1x[i9b.charAt(i + 1)] >> 4, (HT1x[i9b.charAt(i + 1)] & 15) << 4 | HT1x[i9b.charAt(i + 2)] >> 2, (HT1x[i9b.charAt(i + 2)] & 3) << 6 | HT1x[i9b.charAt(i + 3)]);
            var bs0x = m9d.length
              , fu2x = i9b.length % 4;
            if (fu2x == 2)
                m9d = m9d.slice(0, bs0x - 2);
            if (fu2x == 3)
                m9d = m9d.slice(0, bs0x - 1);
            return m9d
        }
    }();
    p.cHd0x = function(i9b) {
        return czw8o(bUK1x(i9b))
    }
    ;
    p.czr8j = function(i9b) {
        var iA3x = bUK1x(i9b), dt1x = iA3x.length, iB3x;
        var r9i = 0;
        while (iB3x = iA3x[r9i]) {
            if (iB3x > 128) {
                iA3x[r9i] = iB3x - 256
            }
            r9i++
        }
        return iA3x
    }
    ;
    p.czq8i = function(i9b) {
        try {
            return window.btoa(i9b)
        } catch (ex) {
            return Mt2x(czv8n(i9b))
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), O0x = c9h("nej.p"), k9b = c9h("nej.u"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), bC0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, K0x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n9e.bUJ1x = NEJ.C();
    b9i = n9e.bUJ1x.N0x(n9e.el1x);
    b9i.cf0x = function() {
        this.ce0x = "m-download-layer"
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.bjT1x = j9a[0];
        this.bjU1x = j9a[1];
        this.bUI1x = j9a[2];
        v9m.bk0x("/client/version/get", {
            type: "json",
            onload: this.czj8b.f9e(this)
        });
        if (O0x.Ku2x.mac) {
            a8i.y9p(this.bjT1x.parentNode, "f-hide");
            a8i.w9n(this.bjU1x.parentNode, "f-hide");
            a8i.w9n(this.bUI1x, "f-hide")
        } else {
            a8i.w9n(this.bjT1x.parentNode, "f-hide");
            a8i.y9p(this.bjU1x.parentNode, "f-hide");
            a8i.y9p(this.bUI1x, "f-hide")
        }
    }
    ;
    b9i.bm0x = function(e9f) {
        e9f.clazz = " m-layer-down";
        e9f.parent = e9f.parent || document.body;
        e9f.title = "下载";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bn0x(e9f);
        this.bX0x([[this.o9f, "click", this.bS0x.f9e(this)]]);
        this.eC1x = TYPE_MAP[e9f.type];
        this.he2x = e9f.id
    }
    ;
    b9i.bB0x = function() {
        this.bG0x()
    }
    ;
    b9i.Dt0x = function() {
        this.bq0x()
    }
    ;
    b9i.HG1x = function(d9g) {
        this.z9q("onok", C0x);
        this.bq0x()
    }
    ;
    b9i.bS0x = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:action");
        switch (a8i.t9k(g9d, "action")) {
        case "download":
            this.bq0x();
            window.open(a8i.t9k(g9d, "src"));
            break;
        case "orpheus":
            this.bq0x();
            location.href = "orpheus://" + k9b.czq8i(JSON.stringify({
                type: this.eC1x,
                id: this.he2x,
                cmd: "download"
            }));
            break
        }
    }
    ;
    b9i.czj8b = function(d9g) {
        if ((d9g || bb0x).code == 200) {
            this.JS1x = d9g.data;
            this.bjT1x.innerText = "V" + this.JS1x.mac;
            this.bjU1x.innerText = "V" + this.JS1x.pc
        }
    }
    ;
    l9c.Md2x = function(e9f) {
        n9e.bUJ1x.A9r(e9f).J0x()
    }
}
)();
(function() {
    var c9h = NEJ.P
      , l9c = c9h("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1]in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l9c.HA1x = FullscreenApi
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , k9b = c9h("nej.u")
      , q9h = c9h("nm.d")
      , bT0x = {};
    q9h.B9s = function(L0x) {
        return bT0x[L0x]
    }
    ;
    q9h.mJ4N = function(L0x, bi0x) {
        bT0x[L0x] = bi0x
    }
    ;
    q9h.fp2x = function(i9b) {
        k9b.eH1x(i9b, function(p9g, L0x) {
            var bi0x = bT0x[L0x] || {};
            NEJ.X(bi0x, p9g);
            bT0x[L0x] = bi0x
        })
    }
}
)();
(function() {
    var c9h = NEJ.P
      , br0x = NEJ.F
      , bg0x = c9h("nej.h");
    bg0x.beg9X = function(L0x) {
        return localStorage.getItem(L0x)
    }
    ;
    bg0x.bed9U = function(L0x, C0x) {
        localStorage.setItem(L0x, C0x)
    }
    ;
    bg0x.bkY1x = function(L0x) {
        localStorage.removeItem(L0x)
    }
    ;
    bg0x.blb1x = function() {
        localStorage.clear()
    }
    ;
    bg0x.czi8a = function() {
        var m9d = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            m9d.push(localStorage.key(i));
        return m9d
    }
    ;
    bg0x.blm1x = function() {
        (document.onstorageready || br0x)()
    }
    ;
    bg0x.bln1x = function() {
        return !0
    }
}
)();
(function() {
    var c9h = NEJ.P, O0x = c9h("nej.p"), iB3x = c9h("nej.c"), bg0x = c9h("nej.h"), tq6k;
    if (O0x.nG4K.trident || !!window.localStorage)
        return;
    var czd8V = function() {
        var ta6U, ej1x;
        var biQ1x = function() {
            ta6U = document.createElement("div");
            NEJ.X(ta6U.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", ta6U);
            ta6U.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iB3x.B9s("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var TJ6D = function() {
            ej1x = window.clearTimeout(ej1x);
            var ib3x = ta6U.getElementsByTagName("object")[0];
            if (!!ib3x.initStorage) {
                delete ta6U;
                tq6k = ib3x;
                tq6k.initStorage("nej-storage");
                (document.onstorageready || br0x)();
                return
            }
            ej1x = window.setTimeout(TJ6D, 500)
        };
        return function() {
            if (!!tq6k)
                return;
            biQ1x();
            TJ6D()
        }
    }();
    bg0x.beg9X = bg0x.beg9X.eL2x(function(d9g) {
        d9g.stopped = !0;
        if (!tq6k)
            return;
        d9g.value = tq6k.getItem(d9g.args[0])
    });
    bg0x.bed9U = bg0x.bed9U.eL2x(function(d9g) {
        d9g.stopped = !0;
        if (!tq6k)
            return;
        var bh0x = d9g.args;
        tq6k.setItem(bh0x[0], bh0x[1])
    });
    bg0x.bkY1x = bg0x.bkY1x.eL2x(function(d9g) {
        d9g.stopped = !0;
        if (!tq6k)
            return;
        tq6k.removeItem(d9g.args[0])
    });
    bg0x.blb1x = bg0x.blb1x.eL2x(function(d9g) {
        d9g.stopped = !0;
        if (!!tq6k)
            tq6k.clear()
    });
    bg0x.blm1x = bg0x.blm1x.eL2x(function(d9g) {
        d9g.stopped = !0;
        czd8V()
    });
    bg0x.bln1x = bg0x.bln1x.eL2x(function(d9g) {
        d9g.stopped = !0;
        d9g.value = !!tq6k
    })
}
)();
(function() {
    var c9h = NEJ.P
      , k9b = c9h("nej.u")
      , h9c = c9h("nej.v")
      , bg0x = c9h("nej.h")
      , v9m = c9h("nej.j")
      , I0x = c9h("nej.ut")
      , R0x = {};
    v9m.uM7F = function(L0x, C0x) {
        var bUG1x = JSON.stringify(C0x);
        try {
            bg0x.bed9U(L0x, bUG1x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bUG1x != bg0x.beg9X(L0x))
            R0x[L0x] = C0x;
        return this
    }
    ;
    v9m.tV6P = function(L0x) {
        var i9b = JSON.parse(bg0x.beg9X(L0x) || "null");
        return i9b == null ? R0x[L0x] : i9b
    }
    ;
    v9m.bUF1x = function(L0x, C0x) {
        var i9b = v9m.tV6P(L0x);
        if (i9b == null) {
            i9b = C0x;
            v9m.uM7F(L0x, i9b)
        }
        return i9b
    }
    ;
    v9m.LI2x = function(L0x) {
        delete R0x[L0x];
        bg0x.bkY1x(L0x);
        return this
    }
    ;
    v9m.cHe0x = function() {
        var blR1x = function(p9g, L0x, bz0x) {
            delete bz0x[L0x]
        };
        return function() {
            k9b.eH1x(R0x, blR1x);
            bg0x.blb1x();
            return this
        }
    }();
    v9m.cHf0x = function(m9d) {
        m9d = m9d || {};
        k9b.bd0x(bg0x.czi8a(), function(L0x) {
            m9d[L0x] = v9m.tV6P(L0x)
        });
        return m9d
    }
    ;
    I0x.fK2x.A9r({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (bg0x.bln1x()) {
                document.onstorageready()
            }
        }
    });
    var cyY8Q = function() {
        var cyW8O = function(C0x, L0x, bz0x) {
            bg0x.bed9U(L0x, JSON.stringify(C0x));
            delete bz0x[L0x]
        };
        return function() {
            k9b.eH1x(R0x, cyW8O)
        }
    }();
    h9c.s9j(document, "storageready", cyY8Q);
    bg0x.blm1x()
}
)();
(function() {
    var c9h = NEJ.P, h9c = c9h("nej.v"), k9b = c9h("nej.u"), O0x = c9h("nej.ut"), Lr2x;
    if (!!O0x.bme1x)
        return;
    O0x.bme1x = NEJ.C();
    Lr2x = O0x.bme1x.N0x(O0x.cH1x);
    Lr2x.cv0x = function() {
        var gW2x = +(new Date)
          , nu4y = "dat-" + gW2x;
        return function() {
            this.cD1x();
            var R0x = this.constructor[nu4y];
            if (!R0x) {
                R0x = {};
                this.constructor[nu4y] = R0x
            }
            this.S0x = R0x
        }
    }();
    Lr2x.B9s = function(L0x) {
        return this.S0x[L0x]
    }
    ;
    Lr2x.mJ4N = function(L0x, C0x) {
        var nv4z = this.S0x[L0x];
        this.S0x[L0x] = C0x;
        h9c.z9q(localCache, "cachechange", {
            key: L0x,
            type: "set",
            oldValue: nv4z,
            newValue: C0x
        });
        return this
    }
    ;
    Lr2x.cO1x = function(L0x) {
        var nv4z = this.S0x[L0x];
        k9b.XN7G(this.S0x, L0x);
        h9c.z9q(localCache, "cachechange", {
            key: L0x,
            type: "delete",
            oldValue: nv4z,
            newValue: undefined
        });
        return nv4z
    }
    ;
    Lr2x.bdK9B = function(Fk0x) {
        return NEJ.Q(this.S0x, Fk0x)
    }
    ;
    window.localCache = O0x.bme1x.A9r();
    O0x.fK2x.A9r({
        element: localCache,
        event: "cachechange"
    })
}
)();
(function() {
    var c9h = NEJ.P, fD2x = NEJ.R, br0x = NEJ.F, k9b = c9h("nej.u"), v9m = c9h("nej.j"), O0x = c9h("nej.ut"), nu4y = "dat-" + +(new Date), nx4B;
    if (!!O0x.bmo1x)
        return;
    O0x.bmo1x = NEJ.C();
    nx4B = O0x.bmo1x.N0x(O0x.cH1x);
    nx4B.cv0x = function() {
        this.cD1x();
        this.S0x = this.constructor[nu4y];
        if (!this.S0x) {
            this.S0x = {};
            this.S0x[nu4y + "-l"] = {};
            this.constructor[nu4y] = this.S0x
        }
    }
    ;
    nx4B.sZ6T = function(L0x) {
        return this.S0x[L0x]
    }
    ;
    nx4B.qb5g = function(L0x, C0x) {
        this.S0x[L0x] = C0x
    }
    ;
    nx4B.lP4T = function(L0x, kD3x) {
        var i9b = this.sZ6T(L0x);
        if (i9b == null) {
            i9b = kD3x;
            this.qb5g(L0x, i9b)
        }
        return i9b
    }
    ;
    nx4B.cyL8D = function(L0x) {
        if (L0x != null) {
            delete this.S0x[L0x];
            return
        }
        k9b.eH1x(this.S0x, function(p9g, L0x) {
            if (L0x == nu4y + "-l")
                return;
            this.cyL8D(L0x)
        }, this)
    }
    ;
    nx4B.cHg0x = function(L0x) {
        if (!!v9m.LI2x)
            return v9m.LI2x(L0x)
    }
    ;
    nx4B.cyH8z = function(L0x) {
        if (!!v9m.tV6P)
            return v9m.tV6P(L0x)
    }
    ;
    nx4B.cyC8u = function(L0x, C0x) {
        if (!!v9m.uM7F)
            v9m.uM7F(L0x, C0x)
    }
    ;
    nx4B.Hb1x = function(L0x, kD3x) {
        var i9b = this.QP5U(L0x);
        if (i9b == null) {
            i9b = kD3x;
            this.yd8V(L0x, i9b)
        }
        return i9b
    }
    ;
    nx4B.QP5U = function(L0x) {
        var i9b = this.sZ6T(L0x);
        if (i9b != null)
            return i9b;
        i9b = this.cyH8z(L0x);
        if (i9b != null)
            this.qb5g(L0x, i9b);
        return i9b
    }
    ;
    nx4B.yd8V = function(L0x, C0x) {
        this.cyC8u(L0x, C0x);
        this.qb5g(L0x, C0x)
    }
    ;
    nx4B.bUu1x = function(L0x) {
        if (L0x != null) {
            delete this.S0x[L0x];
            if (!!v9m.LI2x)
                v9m.LI2x(L0x);
            return
        }
        k9b.eH1x(this.S0x, function(p9g, L0x) {
            if (L0x == nu4y + "-l")
                return;
            this.bUu1x(L0x)
        }, this)
    }
    ;
    nx4B.cHh0x = function() {
        this.bUu1x();
        return this
    }
    ;
    nx4B.cHi0x = function(L0x) {
        var i9b = this.S0x[nu4y + "-l"];
        delete i9b[L0x]
    }
    ;
    nx4B.bnJ2x = function(L0x) {
        var i9b = this.S0x[nu4y + "-l"]
          , bh0x = fD2x.slice.call(arguments, 1);
        k9b.bd0x(i9b[L0x], function(cC1x) {
            try {
                cC1x.apply(null, bh0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete i9b[L0x]
    }
    ;
    nx4B.bnR2x = function(L0x, cC1x) {
        cC1x = cC1x || br0x;
        var j9a = this.S0x[nu4y + "-l"][L0x];
        if (!j9a) {
            j9a = [cC1x];
            this.S0x[nu4y + "-l"][L0x] = j9a;
            return !1
        }
        j9a.push(cC1x);
        return !0
    }
    ;
    nx4B.cyt8l = function(j9a, bj0x, gk2x) {
        if (!j9a)
            return !1;
        bj0x = parseInt(bj0x) || 0;
        gk2x = parseInt(gk2x) || 0;
        if (!gk2x) {
            if (!j9a.loaded)
                return !1;
            gk2x = j9a.length
        }
        if (!!j9a.loaded)
            gk2x = Math.min(gk2x, j9a.length - bj0x);
        for (var i = 0; i < gk2x; i++)
            if (!j9a[bj0x + i])
                return !1;
        return !0
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, k9b = c9h("nej.u"), O0x = c9h("nej.ut"), b9i, K0x;
    if (!!O0x.Ry5D)
        return;
    O0x.Ry5D = NEJ.C();
    b9i = O0x.Ry5D.N0x(O0x.bmo1x);
    K0x = O0x.Ry5D.cr0x;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.yc8U = e9f.key || "id";
        this.be0x = e9f.data || bb0x;
        this.cyr8j = !!e9f.autogc;
        this.cyq8i(e9f.id)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        if (!!this.dJ1x) {
            this.bUq1x()
        }
    }
    ;
    b9i.cyq8i = function(D0x) {
        var R0x;
        if (!!D0x) {
            R0x = this.S0x[D0x];
            if (!R0x) {
                R0x = {};
                this.S0x[D0x] = R0x
            }
        }
        R0x = R0x || this.S0x;
        R0x.hash = R0x.hash || {};
        this.RD5I = R0x
    }
    ;
    b9i.bUq1x = function() {
        this.dJ1x = window.clearTimeout(this.dJ1x);
        var bz0x = {};
        k9b.eH1x(this.RD5I, function(j9a, L0x) {
            if (L0x == "hash")
                return;
            if (!k9b.ec1x(j9a))
                return;
            k9b.bd0x(j9a, function(p9g) {
                if (!p9g)
                    return;
                bz0x[p9g[this.yc8U]] = !0
            }, this)
        }, this);
        k9b.eH1x(this.bcJ9A(), function(p9g, D0x, dR1x) {
            if (!bz0x[D0x]) {
                delete dR1x[D0x]
            }
        })
    }
    ;
    b9i.cyn8f = function() {
        if (!!this.dJ1x) {
            this.dJ1x = window.clearTimeout(this.dJ1x)
        }
        this.dJ1x = window.setTimeout(this.bUq1x.f9e(this), 150)
    }
    ;
    b9i.CJ9A = function(p9g, bcw9n) {
        p9g = this.bUp1x(p9g, bcw9n) || p9g;
        if (!p9g)
            return null;
        var L0x = p9g[this.yc8U];
        if (L0x != null) {
            var gx2x = this.bcJ9A()[L0x];
            if (!!gx2x)
                p9g = NEJ.X(gx2x, p9g);
            this.bcJ9A()[L0x] = p9g
        }
        delete p9g.bUo1x;
        return p9g
    }
    ;
    b9i.bUp1x = br0x;
    b9i.boI2x = function(L0x, p9g) {
        if (!p9g)
            return;
        if (!k9b.ec1x(p9g)) {
            var j9a = this.hH2x(L0x)
              , p9g = this.CJ9A(p9g, L0x);
            if (!!p9g)
                j9a.unshift(p9g);
            return
        }
        k9b.nC4G(p9g, this.boI2x.f9e(this, L0x))
    }
    ;
    b9i.RV5a = function(L0x, cB0x) {
        var j9a = this.hH2x(L0x);
        j9a.length = Math.max(j9a.length, cB0x);
        this.bpg2x(L0x);
        return this
    }
    ;
    b9i.lE4I = function(L0x) {
        return this.hH2x(L0x).length
    }
    ;
    b9i.bpg2x = function(L0x, pm5r) {
        this.hH2x(L0x).loaded = pm5r != !1;
        return this
    }
    ;
    b9i.bco9f = function(L0x) {
        return !!this.hH2x(L0x).loaded
    }
    ;
    b9i.uJ7C = function(L0x, j9a) {
        this.wm7f(L0x);
        this.bpS2x({
            key: L0x,
            offset: 0,
            limit: j9a.length + 1
        }, {
            list: j9a,
            total: j9a.length
        })
    }
    ;
    b9i.hH2x = function() {
        var FU0x = function(L0x) {
            return (L0x || "") + (!L0x ? "" : "-") + "list"
        };
        return function(L0x) {
            var L0x = FU0x(L0x)
              , j9a = this.RD5I[L0x];
            if (!j9a) {
                j9a = [];
                this.RD5I[L0x] = j9a
            }
            return j9a
        }
    }();
    b9i.bcJ9A = function() {
        var dR1x = this.RD5I.hash;
        if (!dR1x) {
            dR1x = {};
            this.RD5I.hash = dR1x
        }
        return dR1x
    }
    ;
    b9i.bqa2x = function() {
        var FU0x = function(e9f) {
            return "r-" + e9f.key
        };
        return function(e9f) {
            var iZ3x = NEJ.X({}, e9f)
              , oH5M = FU0x(iZ3x);
            if (!this.bnR2x(oH5M, this.z9q.f9e(this))) {
                iZ3x.rkey = oH5M;
                iZ3x.onload = this.cyj8b.f9e(this, iZ3x);
                this.z9q("dopullrefresh", iZ3x)
            }
            return this
        }
    }();
    b9i.cyj8b = function(e9f, j9a) {
        this.boI2x(e9f.key, j9a);
        this.bnJ2x(e9f.rkey, "onpullrefresh", e9f)
    }
    ;
    b9i.lJ4N = function() {
        var FU0x = function(e9f) {
            return "r-" + e9f.key + "-" + e9f.offset + "-" + e9f.limit
        };
        return function(e9f) {
            e9f = e9f || bb0x;
            var iZ3x = {
                key: "" + e9f.key || "",
                ext: e9f.ext || null,
                data: e9f.data || null,
                offset: parseInt(e9f.offset) || 0,
                limit: parseInt(e9f.limit) || 0
            }
              , j9a = this.hH2x(iZ3x.key);
            if (this.cyt8l(j9a, iZ3x.offset, iZ3x.limit)) {
                this.z9q("onlistload", iZ3x);
                return this
            }
            var oH5M = FU0x(iZ3x);
            if (!this.bnR2x(oH5M, this.z9q.f9e(this))) {
                iZ3x.rkey = oH5M;
                iZ3x.onload = this.bpS2x.f9e(this, iZ3x);
                this.z9q("doloadlist", iZ3x)
            }
            return this
        }
    }();
    b9i.bpS2x = function() {
        var Fm0x = function(p9g, r9i, j9a) {
            if (!!p9g) {
                return !0
            }
            j9a.splice(r9i, 1)
        };
        return function(e9f, m9d) {
            e9f = e9f || bb0x;
            var L0x = e9f.key
              , bj0x = e9f.offset
              , bUn1x = this.hH2x(L0x);
            var j9a = m9d || [];
            if (!k9b.ec1x(j9a)) {
                j9a = m9d.result || m9d.list || [];
                var cB0x = parseInt(m9d.total);
                if (!isNaN(cB0x) || cB0x > j9a.length) {
                    this.RV5a(L0x, cB0x)
                }
            }
            k9b.bd0x(j9a, function(p9g, r9i) {
                bUn1x[bj0x + r9i] = this.CJ9A(p9g, L0x)
            }, this);
            if (j9a.length < e9f.limit) {
                this.bpg2x(L0x);
                k9b.nC4G(bUn1x, Fm0x)
            }
            this.bnJ2x(e9f.rkey, "onlistload", e9f)
        }
    }();
    b9i.wm7f = function() {
        var Fm0x = function(p9g, r9i, j9a) {
            j9a.splice(r9i, 1)
        };
        return function(L0x) {
            var j9a = this.hH2x(L0x);
            k9b.nC4G(j9a, Fm0x);
            this.bpg2x(L0x, !1);
            if (this.cyr8j) {
                this.cyn8f()
            }
            return this
        }
    }();
    b9i.bUm1x = function(p9g, bcw9n) {
        return !p9g.bUo1x
    }
    ;
    b9i.eO2x = function(D0x) {
        return this.bcJ9A()[D0x]
    }
    ;
    b9i.cHj0x = function(D0x) {
        var p9g = this.eO2x(D0x);
        if (!!p9g)
            p9g.bUo1x = !0
    }
    ;
    b9i.bcg9X = function() {
        var FU0x = function(e9f) {
            return "r-" + e9f.key + "-" + e9f.id
        };
        return function(e9f) {
            e9f = e9f || bb0x;
            var D0x = e9f[this.yc8U]
              , iZ3x = {
                id: D0x,
                ext: e9f.ext,
                data: e9f.data || {},
                key: "" + e9f.key || ""
            };
            p9g = this.eO2x(D0x);
            iZ3x.data[this.yc8U] = D0x;
            if (!!p9g && this.bUm1x(p9g, iZ3x.key)) {
                this.z9q("onitemload", iZ3x);
                return this
            }
            var oH5M = FU0x(iZ3x);
            if (!this.bnR2x(oH5M, this.z9q.f9e(this))) {
                iZ3x.rkey = oH5M;
                iZ3x.onload = this.cyd8V.f9e(this, iZ3x);
                this.z9q("doloaditem", iZ3x)
            }
            return this
        }
    }();
    b9i.cyd8V = function(e9f, p9g) {
        e9f = e9f || bb0x;
        this.CJ9A(p9g, e9f.key);
        this.bnJ2x(e9f.rkey, "onitemload", e9f)
    }
    ;
    b9i.jq3x = function(e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.Ae9V.f9e(this, e9f);
        this.z9q("doadditem", e9f)
    }
    ;
    b9i.Ae9V = function(e9f, p9g) {
        var L0x = e9f.key;
        p9g = this.CJ9A(p9g, L0x);
        if (!!p9g) {
            var fg2x = 0
              , j9a = this.hH2x(L0x);
            if (!e9f.push) {
                fg2x = -1;
                var bj0x = e9f.offset || 0;
                j9a.splice(bj0x, 0, p9g)
            } else if (j9a.loaded) {
                fg2x = 1;
                j9a.push(p9g)
            } else {
                j9a.length++
            }
        }
        var d9g = {
            key: L0x,
            flag: fg2x,
            data: p9g,
            action: "add",
            ext: e9f.ext
        };
        this.z9q("onitemadd", d9g);
        return d9g
    }
    ;
    b9i.JF1x = function(e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.brE3x.f9e(this, e9f);
        this.z9q("dodeleteitem", e9f)
    }
    ;
    b9i.brE3x = function(e9f, bUk1x) {
        var p9g, L0x = e9f.key;
        if (!!bUk1x) {
            p9g = this.eO2x(e9f.id) || null;
            var D0x = e9f.id
              , cxW8O = this.yc8U
              , j9a = this.hH2x(L0x)
              , r9i = k9b.dm1x(j9a, function(gx2x) {
                return !!gx2x && gx2x[cxW8O] == D0x
            });
            if (r9i >= 0)
                j9a.splice(r9i, 1)
        }
        var d9g = {
            key: L0x,
            data: p9g,
            action: "delete",
            ext: e9f.ext
        };
        this.z9q("onitemdelete", d9g);
        return d9g
    }
    ;
    b9i.bbL9C = function(e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.cxU8M.f9e(this, e9f);
        this.z9q("doupdateitem", e9f)
    }
    ;
    b9i.cxU8M = function(e9f, p9g) {
        var L0x = e9f.key;
        if (!!p9g)
            p9g = this.CJ9A(p9g, L0x);
        var d9g = {
            key: L0x,
            data: p9g,
            action: "update",
            ext: e9f.ext
        };
        this.z9q("onitemupdate", d9g);
        return d9g
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, k9b = c9h("nej.u"), O0x = c9h("nej.ut"), b9i;
    if (!!O0x.brU3x)
        return;
    O0x.brU3x = NEJ.C();
    b9i = O0x.brU3x.N0x(O0x.Ry5D);
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.bgO0x({
            doloadlist: this.bbI9z.f9e(this),
            doloaditem: this.bsa3x.f9e(this),
            doadditem: this.bTZ1x.f9e(this),
            dodeleteitem: this.bby9p.f9e(this),
            doupdateitem: this.bbx9o.f9e(this),
            dopullrefresh: this.bTY1x.f9e(this)
        })
    }
    ;
    b9i.bbI9z = br0x;
    b9i.bTY1x = br0x;
    b9i.bsa3x = br0x;
    b9i.bTZ1x = br0x;
    b9i.bby9p = br0x;
    b9i.bbx9o = br0x
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), I0x = c9h("nej.ut"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), b9i, K0x;
    q9h.hE2x = NEJ.C();
    b9i = q9h.hE2x.N0x(I0x.brU3x);
    b9i.cm0x = function() {
        var Cd9U = location.protocol + "//" + location.host;
        var cxq8i = function(bt0x, i9b) {
            var bz0x = {
                conf: {},
                data: {},
                urls: []
            };
            k9b.bd0x(bt0x, function(L0x, r9i, j9a) {
                var bi0x = q9h.B9s(L0x);
                if (!bi0x)
                    return;
                var btp3x = bTW1x(bi0x.url, i9b[L0x]);
                bz0x.urls.push(btp3x);
                bz0x.conf[btp3x] = bi0x;
                bz0x.data[btp3x] = JSON.stringify(i9b[L0x] == null ? "" : i9b[L0x])
            });
            return bz0x
        };
        var bTW1x = function(Y0x, i9b) {
            return Y0x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return i9b[$2] || $1
            })
        };
        var bTP1x = function(bi0x, e9f, d9g) {
            h9c.z9q(window, "requesterror", d9g);
            if (!!d9g.stopped)
                return;
            var BX9O = bi0x.onerror || e9f.onerror;
            if (k9b.fJ2x(BX9O)) {
                this.z9q(BX9O, d9g, e9f)
            } else {
                (BX9O || br0x).call(this, d9g, e9f)
            }
            var d9g = {
                result: d9g,
                option: e9f
            };
            this.z9q("onerror", d9g);
            if (!d9g.stopped)
                (bi0x.onmessage || br0x).call(this, d9g.result.code, d9g.result)
        };
        var bTN1x = function(Q0x, bi0x, e9f) {
            var m9d = Q0x;
            if (k9b.gO2x(bi0x.format)) {
                m9d = bi0x.format.call(this, Q0x, e9f)
            }
            return m9d
        };
        var Ab9S = function(Q0x, bi0x, e9f, wC7v) {
            if (k9b.gO2x(bi0x.beforeload)) {
                bi0x.beforeload.call(this, Q0x, e9f, bi0x)
            }
            if (Q0x && Q0x.code != null && Q0x.code != 200) {
                bTP1x.call(this, bi0x, e9f, {
                    key: e9f.key,
                    code: Q0x.code,
                    message: Q0x.message || "",
                    captchaId: Q0x.captchaId,
                    ext: Q0x
                });
                return
            }
            var m9d = Q0x;
            if (!wC7v) {
                m9d = bTN1x.call(this, Q0x, bi0x, e9f)
            } else if (k9b.gO2x(bi0x.format)) {
                var btA3x = [];
                k9b.bd0x(wC7v.urls, function(Y0x) {
                    btA3x.push(bTN1x.call(this, Q0x[Y0x], wC7v.conf[Y0x], e9f))
                }, this);
                btA3x.push(e9f);
                m9d = bi0x.format.apply(this, btA3x)
            }
            var og4k = bi0x.onload || e9f.onload
              , bTM1x = bi0x.finaly || e9f.finaly || br0x;
            if (k9b.fJ2x(og4k)) {
                bTM1x.call(this, this.z9q(og4k, m9d), e9f)
            } else {
                bTM1x.call(this, (og4k || br0x).call(this, m9d), e9f)
            }
        };
        var Cm9d = function(bi0x, e9f, bY0x) {
            bTP1x.call(this, bi0x, e9f, {
                key: e9f.key,
                code: bY0x.code || -1,
                message: bY0x.message || ""
            })
        };
        return function(bi0x, e9f) {
            if (k9b.fJ2x(bi0x)) {
                bi0x = q9h.B9s(bi0x)
            }
            delete e9f.value;
            (bi0x.filter || br0x).call(this, e9f, bi0x);
            var Q0x = e9f.value;
            if (!!Q0x) {
                Ab9S.call(this, Q0x, bi0x, e9f);
                return
            }
            var Y0x, i9b = e9f.data || bb0x, zT9K = {
                cookie: !0,
                type: bi0x.rtype || "json",
                method: bi0x.type || "POST",
                onerror: Cm9d.f9e(this, bi0x, e9f),
                noescape: bi0x.noescape
            };
            if (k9b.ec1x(bi0x.url)) {
                var wC7v = cxq8i(bi0x.url, i9b);
                Y0x = Cd9U + "/api/batch";
                zT9K.data = k9b.cz0x(wC7v.data);
                zT9K.onload = Ab9S.ex1x(this, bi0x, e9f, wC7v);
                zT9K.headers = {
                    "batch-method": "POST"
                };
                delete wC7v.data
            } else {
                var kB3x = bi0x.url.indexOf(":") < 0 ? Cd9U : "";
                Y0x = bTW1x(kB3x + bi0x.url, i9b);
                zT9K.data = k9b.cz0x(e9f.data);
                zT9K.onload = Ab9S.ex1x(this, bi0x, e9f)
            }
            if (zT9K.method == "GET")
                zT9K.query = zT9K.data;
            return v9m.bk0x(Y0x, zT9K)
        }
    }();
    b9i.Fj0x = function() {
        var gM2x = /^get|list|pull$/i;
        return function(bTJ1x, e9f) {
            var L0x = e9f.key
              , bi0x = q9h.B9s(L0x.split("-")[0] + "-" + bTJ1x);
            if (gM2x.test(bTJ1x) && L0x.indexOf("post-") < 0)
                bi0x.type = "GET";
            this.cm0x(bi0x, e9f)
        }
    }();
    b9i.cHm0x = function(L0x, j9a) {
        var cB0x = j9a.length;
        this.bpS2x({
            key: L0x,
            offset: 0,
            limit: cB0x + 1
        }, {
            list: j9a,
            total: cB0x
        })
    }
    ;
    b9i.bbI9z = function(e9f) {
        this.Fj0x("list", e9f)
    }
    ;
    b9i.bsa3x = function(e9f) {
        this.Fj0x("get", e9f)
    }
    ;
    b9i.bTY1x = function(e9f) {
        this.Fj0x("pull", e9f)
    }
    ;
    b9i.bTZ1x = function(e9f) {
        this.Fj0x("add", e9f)
    }
    ;
    b9i.bby9p = function(e9f) {
        this.Fj0x("del", e9f)
    }
    ;
    b9i.bbx9o = function(e9f) {
        this.Fj0x("update", e9f)
    }
    ;
    b9i.cwQ8I = function(p9g) {
        this.CJ9A(p9g)
    }
    ;
    I0x.fK2x.A9r({
        element: window,
        event: "requesterror"
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), bum3x = {}, b9i, K0x;
    var va7T = function(m9d, e9f) {
        m9d.conf = e9f.conf;
        return m9d
    };
    q9h.fp2x({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q0x, e9f) {
                return va7T({
                    mv: Q0x
                }, e9f)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m9d, e9f) {
                if (!!m9d.songs && m9d.songs.length > 0)
                    m9d.song = m9d.songs[0];
                else
                    m9d.song = bum3x;
                delete m9d.songs;
                return va7T(m9d, e9f)
            },
            filter: function(e9f) {
                e9f.data.ids = "[" + e9f.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: va7T
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: va7T
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m9d, e9f) {
                m9d.playlist = m9d.result;
                delete m9d.result;
                return va7T(m9d, e9f)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: va7T
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: va7T
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: va7T
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e9f) {
                var j9a = e9f.data.id.split("-");
                e9f.data.radioId = j9a[0];
                e9f.data.asc = j9a[1] == 2;
                e9f.data.limit = 1e3;
                delete e9f.data.id
            },
            format: function(Q0x, e9f) {
                var cwN8F = {
                    id: e9f.data.radioId,
                    programs: Q0x.programs
                };
                return va7T({
                    djradio: cwN8F
                }, e9f)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: va7T
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e9f) {
                e9f.data.lv = 0;
                e9f.data.tv = 0
            },
            format: function(m9d, e9f) {
                var xX8P = {
                    lyric: "",
                    nolyric: true
                };
                if (m9d.code == 200 && m9d.lrc && m9d.lrc.lyric) {
                    xX8P.lyric = m9d.lrc.lyric;
                    xX8P.nolyric = false
                } else {
                    xX8P.nolyric = true
                }
                return va7T({
                    lyric: xX8P
                }, e9f)
            }
        }
    });
    q9h.xW8O = NEJ.C();
    b9i = q9h.xW8O.N0x(q9h.hE2x);
    b9i.cwK8C = function(u9l, cV1x) {
        return this.sZ6T(this.ZF8x(u9l, cV1x))
    }
    ;
    b9i.TV6P = function(u9l, cV1x, e9f) {
        e9f = e9f || {};
        var i9b = this.sZ6T(this.ZF8x(u9l, cV1x));
        if (i9b && (u9l != 13 && u9l != 19 || e9f.conf && e9f.conf.useCache)) {
            this.z9q("onresourceload", u9l, cV1x, i9b, e9f.conf);
            return
        }
        e9f.data = {
            id: cV1x
        };
        e9f.onload = this.cwH8z.f9e(this, u9l, cV1x);
        e9f.onerror = this.cwG8y.f9e(this, u9l, cV1x);
        this.cm0x("res-" + this.BE9v(u9l) + "-get", e9f)
    }
    ;
    b9i.cwH8z = function(u9l, cV1x, m9d) {
        var i9b = m9d[this.BE9v(u9l)];
        this.qb5g(this.ZF8x(u9l, cV1x), i9b);
        this.z9q("onresourceload", u9l, cV1x, i9b, m9d.conf)
    }
    ;
    b9i.cwG8y = function(u9l, cV1x, m9d, e9f) {
        if (m9d.code != 404) {
            this.z9q("onresourceerror", u9l, cV1x, m9d.code);
            return
        }
        this.qb5g(this.ZF8x(u9l, cV1x), bum3x);
        this.z9q("onresourceload", u9l, cV1x, bum3x, e9f.conf)
    }
    ;
    b9i.cHo0x = function(u9l, e9f) {
        this.cm0x("res-" + this.BE9v(u9l) + "-play", e9f)
    }
    ;
    b9i.ZF8x = function(u9l, cV1x) {
        return "res-" + this.BE9v(u9l) + "-" + cV1x
    }
    ;
    b9i.BE9v = function(u9l) {
        var bz0x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz0x[u9l]
    }
    ;
    q9h.xW8O.Mp2x = function(u9l, cV1x) {
        if (!this.fr2x)
            this.fr2x = q9h.xW8O.A9r({});
        return this.fr2x.cwK8C(u9l, cV1x)
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), bwg4k = /^[1-9][0-9]*$/, b9i, K0x;
    var LOCAL_LOG_KEY = "local-log";
    q9h.fp2x({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q9h.hP2x = NEJ.C();
    b9i = q9h.hP2x.N0x(q9h.hE2x);
    b9i.eR2x = function(U0x, bi0x) {
        if (!U0x || !bi0x)
            return;
        if (k9b.fJ2x(bi0x)) {
            try {
                bi0x = JSON.parse(bi0x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a8i)
                }
            }
        }
        if (!k9b.lY4c(bi0x))
            return;
        this.cm0x("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: U0x,
                    json: bi0x
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U0x + ", json=" + JSON.stringify(bi0x))
        }
    }
    ;
    b9i.YL7E = function(ok4o) {
        if (!k9b.ec1x(ok4o))
            return;
        this.cm0x("bi-batch-log", {
            data: {
                logs: JSON.stringify(ok4o)
            }
        })
    }
    ;
    b9i.bTB1x = function(bi0x) {
        if (!bi0x || !bi0x.type || !bi0x.rid)
            return;
        var ol4p = bi0x.type;
        if (bwg4k.test(ol4p)) {
            ol4p = this.BE9v(ol4p)
        }
        if (!ol4p)
            return;
        if (ol4p == "playlist")
            ol4p = "list";
        this.eR2x("search", {
            type: ol4p,
            id: bi0x.rid || null,
            keyword: bi0x.keyword || null
        })
    }
    ;
    b9i.UG6A = function() {
        var cwk8c = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bi0x) {
            if (!bi0x || !bi0x.type || !bi0x.rid)
                return;
            if (bi0x.play === undefined)
                bi0x.play = true;
            var ol4p = bi0x.type;
            if (bwg4k.test(ol4p)) {
                ol4p = this.BE9v(ol4p)
            }
            if (!ol4p)
                return;
            if (ol4p == "playlist")
                ol4p = "list";
            var Q0x = {
                id: bi0x.rid,
                type: ol4p
            };
            if (ol4p == "song" && bi0x.source) {
                Q0x.source = this.bTz1x(bi0x.source);
                if (!!bi0x.sourceid)
                    Q0x.sourceid = bi0x.sourceid
            }
            this.eR2x(!bi0x.play ? "addto" : "play", Q0x);
            if (ol4p == "song" && bi0x.hash && bi0x.hash.match(cwk8c)) {
                this.eR2x(!bi0x.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b9i.bwN4R = function(D0x, bA0x, ei1x, Ez0x) {
        var Q0x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cwi8a = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q0x.id = D0x;
        Q0x.time = Math.round(bA0x);
        Q0x.end = k9b.fJ2x(Ez0x) ? Ez0x : cwi8a[Ez0x] || "";
        if (ei1x && ei1x.fid) {
            Q0x.source = this.bTz1x(ei1x.fid);
            Q0x.sourceId = ei1x.fdata
        }
        this.eR2x("play", Q0x)
    }
    ;
    b9i.bTw1x = function(u9l, cV1x) {
        if (!u9l || !cV1x)
            return;
        if (bwg4k.test(u9l))
            u9l = this.BE9v(u9l);
        if (u9l != "playlist" && u9l != "dj")
            return;
        var bi0x = q9h.B9s("plus-" + u9l + "-count");
        if (!bi0x)
            return !1;
        this.cm0x(bi0x, {
            data: {
                id: cV1x
            }
        });
        var R0x = this.lP4T("play-hist-" + u9l, []);
        if (k9b.dm1x(R0x, cV1x) < 0) {
            R0x.push(cV1x);
            return !0
        }
        return !1
    }
    ;
    b9i.BE9v = function(u9l) {
        var bz0x = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz0x[u9l]
    }
    ;
    b9i.bTz1x = function(LY2x) {
        var bz0x = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz0x[LY2x]
    }
    ;
    b9i.bTv1x = function(hq2x) {
        var ok4o = this.Hb1x(LOCAL_LOG_KEY, []);
        ok4o.unshift(hq2x);
        if (ok4o.length > 200) {
            ok4o.length = 200
        }
        this.yd8V(LOCAL_LOG_KEY, ok4o)
    }
    ;
    b9i.cvY7R = function() {
        return this.QP5U(LOCAL_LOG_KEY)
    }
    ;
    b9i.er1x = function(Q0x) {
        this.eR2x("play", Q0x)
    }
    ;
    var bTr1x = q9h.hP2x.fR2x();
    l9c.sq6k = function() {
        bTr1x.eR2x.apply(bTr1x, arguments)
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , br0x = NEJ.F
      , h9c = c9h("nej.v")
      , v9m = c9h("nej.j")
      , I0x = c9h("nej.ut")
      , a8i = c9h("nej.e")
      , k9b = c9h("nej.u")
      , n9e = c9h("nm.l")
      , l9c = c9h("nm.x")
      , q9h = c9h("nm.d");
    var FullscreenApi = l9c.HA1x || {};
    if (!q9h.xW8O)
        return;
    var R0x = q9h.xW8O.A9r({
        onresourceload: cvS7L
    });
    var vO7H = q9h.hP2x.fR2x();
    function cvS7L(u9l, cV1x, i9b, bi0x) {
        var j9a = [];
        switch (parseInt(u9l)) {
        case 2:
            j9a = i9b;
            break;
        case 13:
            j9a = i9b.tracks;
            break;
        case 18:
            j9a.push(i9b);
            break;
        case 19:
            j9a = i9b.songs;
            break;
        case 21:
            if (i9b.mp && i9b.mp.fee && i9b.mp.pl <= 0) {
                l9c.YB7u(i9b.data.id, i9b.mp.fee);
                return
            }
            break
        }
        if (l9c.Lz2x(j9a, true, null, u9l == 19 ? {
            source: "album",
            sourceid: cV1x
        } : null) == 0) {
            return
        }
        l9c.eN2x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bi0x.message
        })
    }
    function cvR7K(d9g, nW4a, zA8s, dV1x) {
        dV1x = dV1x || {};
        if (d9g.action == "ok") {
            if (zA8s) {
                location.dispatch2("/payfee?songId=" + zA8s)
            } else {
                location.dispatch2("/payfee?fee=" + nW4a || 1)
            }
            vO7H.eR2x("click", {
                type: "tobuyvip",
                name: "box",
                source: dV1x.source || "song",
                sourceid: dV1x.sourceid || zA8s || 0
            })
        } else if (d9g.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + zA8s);
            vO7H.eR2x("click", {
                type: "tobuyone",
                name: "box",
                source: dV1x.source || "song",
                sourceid: dV1x.sourceid || zA8s || 0
            })
        }
    }
    function Vf6Z(bF0x) {
        l9c.eN2x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF0x,
            btntxt: "知道了"
        })
    }
    function Vm6g(bF0x, Q0x) {
        Vf6Z((Q0x || bb0x).toast || bF0x)
    }
    l9c.iE3x = function(bF0x, D0x, u9l, cvQ7J, bl0x) {
        bF0x = bF0x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cvQ7J && bl0x && bl0x.privilege && bl0x.privilege.toast) {
            v9m.bk0x("/api/song/toast", {
                query: {
                    id: bl0x.id
                },
                type: "json",
                onload: Vm6g.f9e(this, bF0x),
                onerror: Vm6g.f9e(this, bF0x)
            })
        } else if (D0x && u9l) {
            R0x.TV6P(u9l, D0x, {
                conf: {
                    message: bF0x,
                    useCache: u9l != 18
                }
            })
        } else {
            Vf6Z(bF0x)
        }
    }
    ;
    l9c.wc7V = function(nW4a, zA8s, u9l, dV1x, nH4L) {
        var bT0x, ph5m = "m-popup-info", byD4H = "单首购买", byE4I = "马上去开通", cP1x = "唱片公司要求，当前歌曲须付费使用。", bTp1x = true;
        try {
            bT0x = top.api.feeMessage || {}
        } catch (e) {
            bT0x = {}
        }
        if (nW4a == 1 || nW4a == 8 || nW4a == 16) {
            if (u9l == "song") {
                ph5m = "m-popup-song-buy";
                cP1x = bT0x["vip2"] || cP1x;
                byE4I = bT0x["vip2button"] || "包月购买";
                byD4H = bT0x["vip2link"] || byD4H;
                if (nH4L && nH4L.flag !== undefined) {
                    var bt0x = nH4L.flag.toString(2).split("");
                    if (parseInt(bt0x.pop(), 10) == 1) {
                        bTp1x = false
                    }
                }
            } else {
                cP1x = bT0x["vip"] || cP1x
            }
        } else if (nW4a == 4) {
            cP1x = bT0x["album"] || cP1x;
            byE4I = "立即订购"
        } else {
            cP1x = bT0x["unknow"] || cP1x
        }
        l9c.jY3x({
            clazz: "m-layer-w5",
            html: a8i.cc0x(ph5m, {
                songTxt: byD4H,
                tip: cP1x,
                oktext: byE4I,
                cctext: "以后再说",
                showSongText: bTp1x
            }),
            onaction: cvR7K.ex1x(null, nW4a, zA8s, dV1x)
        })
    }
    ;
    l9c.bTo1x = function(hM2x, gu2x) {
        l9c.hC2x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(u9l) {
                if (u9l == "ok") {
                    l9c.Md2x({
                        id: hM2x,
                        type: gu2x
                    })
                }
            }
        })
    }
    ;
    l9c.YB7u = function(kr3x, nW4a) {
        var bT0x, cP1x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bT0x = top.api.feeMessage || {}
        } catch (e) {
            bT0x = {}
        }
        if (nW4a == 1 || nW4a == 8) {
            cP1x = bT0x["vip"] || cP1x
        } else if (nW4a == 4) {
            cP1x = bT0x["album"] || cP1x
        } else {
            cP1x = bT0x["unknow"] || cP1x
        }
        return l9c.jY3x({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a8i.cc0x("m-popup-info", {
                tip: cP1x,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d9g) {
                if (d9g.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kr3x);
                    vO7H.eR2x("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: kr3x || 0
                    })
                }
            }
        })
    }
    ;
    l9c.Lz2x = function() {
        function compareFee(cvI7B, cvF7y) {
            var bz0x = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz0x[cvI7B] || 0) - (bz0x[cvF7y] || 0)
        }
        return function(j9a, cP1x, sI6C, dV1x) {
            sI6C = sI6C || {};
            var AX9O = []
              , Lf2x = {}
              , bTn1x = 0
              , bTm1x = 0
              , Ld2x = null;
            if (!j9a || !j9a.length)
                return AX9O;
            k9b.bd0x(j9a, function(bl0x) {
                var fF2x = l9c.qc5h(bl0x);
                if (fF2x == 0) {
                    AX9O.push(bl0x)
                } else if (fF2x == 10) {
                    if (bl0x.privilege) {
                        bl0x.fee = bl0x.privilege.fee
                    }
                    if (compareFee(bl0x.fee, Lf2x.fee) > 0) {
                        Lf2x = bl0x
                    }
                } else if (fF2x == 11) {
                    ++bTn1x;
                    if (!sI6C.play)
                        AX9O.push(bl0x)
                } else if (fF2x == 1e3) {
                    ++bTm1x;
                    if (!sI6C.download)
                        AX9O.push(bl0x)
                } else if (fF2x == 100) {
                    Ld2x = bl0x
                }
            });
            if (AX9O.length == 0 && cP1x) {
                if (bTn1x == j9a.length) {
                    var tK6E = j9a[0].privilege || {};
                    if (tK6E.payed) {
                        l9c.iE3x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l9c.wc7V(tK6E.fee, null, null, dV1x)
                    }
                } else if (bTm1x == j9a.length) {
                    l9c.iE3x("因版权方要求，该歌曲不支持下载")
                } else if (Lf2x.id) {
                    l9c.wc7V(Lf2x.fee, Lf2x.id, null, dV1x, Lf2x.privilege)
                } else {
                    if (Ld2x && j9a.length == 1 && Ld2x.privilege && Ld2x.privilege.st < 0 && Ld2x.privilege.toast) {
                        l9c.iE3x(null, null, null, true, Ld2x)
                    } else {
                        l9c.iE3x()
                    }
                }
            }
            return AX9O
        }
    }();
    l9c.qc5h = function(bl0x) {
        if (!bl0x)
            return 0;
        var fF2x = bl0x.privilege;
        if (bl0x.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (fF2x) {
            if (fF2x.st != null && fF2x.st < 0) {
                return 100
            }
            if (fF2x.fee > 0 && fF2x.fee != 8 && fF2x.payed == 0 && fF2x.pl <= 0)
                return 10;
            if (fF2x.fee == 16)
                return 11;
            if ((fF2x.fee == 0 || fF2x.payed) && fF2x.pl > 0 && fF2x.dl == 0)
                return 1e3;
            if (fF2x.pl == 0 && fF2x.dl == 0)
                return 100;
            return 0
        } else {
            var eA1x = bl0x.status != null ? bl0x.status : bl0x.st != null ? bl0x.st : 0;
            if (bl0x.status >= 0)
                return 0;
            if (bl0x.fee > 0)
                return 10;
            return 100
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, fD2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), x9o = c9h("nm.w"), b9i;
    if (!!x9o.bTl1x)
        return;
    var cl0x = ~[];
    cl0x = {
        bTj1x: ++cl0x,
        cvz7s: (![] + "")[cl0x],
        kz3x: ++cl0x,
        KW2x: (![] + "")[cl0x],
        Yj7c: (cl0x[cl0x] + "")[cl0x],
        bTi1x: ++cl0x,
        cHr0x: ({} + "")[cl0x],
        cvv7o: (cl0x[cl0x] + "")[cl0x],
        cvt7m: (![] + "")[cl0x],
        VP6J: ++cl0x,
        XP7I: (!"" + "")[cl0x],
        cHs0x: ++cl0x,
        DZ0x: ++cl0x,
        bTe1x: ({} + "")[cl0x],
        xJ8B: ++cl0x,
        cvp7i: ++cl0x,
        cHt0x: ++cl0x,
        cHu0x: ++cl0x
    };
    cl0x.Ks2x = (cl0x.Ks2x = cl0x + "")[cl0x.DZ0x] + (cl0x.Ko2x = cl0x.Ks2x[cl0x.kz3x]) + (cl0x.Xp7i = (cl0x.HS1x + "")[cl0x.kz3x]) + (!cl0x + "")[cl0x.VP6J] + (cl0x.HH1x = cl0x.Ks2x[cl0x.xJ8B]) + (cl0x.HS1x = (!"" + "")[cl0x.kz3x]) + (cvm7f = (!"" + "")[cl0x.bTi1x]) + cl0x.Ks2x[cl0x.DZ0x] + cl0x.HH1x + cl0x.Ko2x + cl0x.HS1x;
    cl0x.Xp7i = cl0x.HS1x + (!"" + "")[cl0x.VP6J] + cl0x.HH1x + cvm7f + cl0x.HS1x + cl0x.Xp7i;
    cl0x.HS1x = cl0x.bTj1x[cl0x.Ks2x][cl0x.Ks2x];
    x9o.bTl1x = cl0x
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), O0x = c9h("nej.ui"), b9i;
    if (!!O0x.Xn7g)
        return;
    var iX3x = a8i.uK7D(".#<uispace>{position:absolute;background:#fff;}");
    O0x.Xn7g = NEJ.C();
    b9i = O0x.Xn7g.N0x(O0x.QB5G);
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.bX0x([[document, "click", this.ts6m.f9e(this)]]);
        this.cvl7e = !!e9f.nostop;
        this.bTd1x = {
            top: e9f.top,
            left: e9f.left
        }
    }
    ;
    b9i.bB0x = function() {
        delete this.zi8a;
        delete this.bjd1x;
        delete this.qT5Y;
        delete this.bTc1x;
        delete this.Xh7a;
        delete this.bTd1x;
        this.bG0x()
    }
    ;
    b9i.cf0x = function() {
        this.mt4x = iX3x
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        this.Dl0x = this.o9f;
        h9c.s9j(this.o9f, "click", this.cvh7a.f9e(this))
    }
    ;
    b9i.ts6m = function(d9g) {
        if (d9g.button != 2)
            this.bq0x()
    }
    ;
    b9i.cvh7a = function(d9g) {
        if (this.cvl7e)
            return;
        h9c.tH6B(d9g);
        var G0x = h9c.X0x(d9g);
        if (G0x.tagName == "A")
            h9c.co0x(d9g)
    }
    ;
    b9i.cvf7Y = function() {
        var dh1x = /\s+/i;
        return function(on4r) {
            on4r = (on4r || "").trim().toLowerCase().split(dh1x);
            on4r[0] = on4r[0] || "bottom";
            on4r[1] = on4r[1] || "left";
            this.qT5Y = on4r
        }
    }();
    b9i.cve7X = function(on4r) {
        var m9d = {}
          , ns4w = this.bjd1x
          , cHv0x = a8i.oJ5O()
          , cG1x = this.o9f.offsetWidth
          , cg0x = this.o9f.offsetHeight;
        switch (on4r[0]) {
        case "top":
            m9d.top = ns4w.top - cg0x;
            m9d.left = on4r[1] == "right" ? ns4w.left + ns4w.width - cG1x : ns4w.left;
            break;
        case "left":
            m9d.left = ns4w.left - cG1x;
            m9d.top = on4r[1] == "bottom" ? ns4w.top + ns4w.height - cg0x : ns4w.top;
            break;
        case "right":
            m9d.left = ns4w.left + ns4w.width;
            m9d.top = on4r[1] == "bottom" ? ns4w.top + ns4w.height - cg0x : ns4w.top;
            break;
        default:
            m9d.top = ns4w.top + ns4w.height;
            m9d.left = on4r[1] == "right" ? ns4w.left + ns4w.width - cG1x : ns4w.left;
            break
        }
        return m9d
    }
    ;
    b9i.LN2x = function() {
        if (!this.bTc1x) {
            this.gL2x(this.bTd1x);
            return
        }
        if (!!this.Xh7a) {
            this.gL2x(this.zi8a);
            return
        }
        if (!!this.bjd1x)
            this.gL2x(this.cve7X(this.qT5Y))
    }
    ;
    b9i.cvc7V = function(G0x, dr1x, d9g) {
        dr1x = dr1x || bb0x;
        var bTa0x = a8i.oJ5O()
          , db1x = h9c.jN3x(d9g) + (dr1x.left || 0)
          , hO2x = h9c.mg4k(d9g) + (dr1x.top || 0)
          , cG1x = G0x.offsetWidth + (dr1x.right || 0)
          , cg0x = G0x.offsetHeight + (dr1x.bottom || 0)
          , Jp1x = bTa0x.scrollWidth
          , bjG1x = bTa0x.scrollHeight
          , bjN1x = db1x + cG1x
          , bjO1x = hO2x + cg0x;
        switch (this.qT5Y[0]) {
        case "top":
            hO2x = bjO1x > bjG1x ? hO2x - cg0x : hO2x;
            if (this.qT5Y[1] == "right") {
                db1x = db1x - cG1x < 0 ? 0 : db1x - cG1x
            } else {
                db1x = bjN1x > Jp1x ? Jp1x - cG1x : db1x
            }
            break;
        case "left":
            db1x = bjN1x > Jp1x ? Jp1x - cG1x : db1x;
            if (this.qT5Y[1] == "top") {
                hO2x = bjO1x > bjG1x ? hO2x - cg0x : hO2x
            } else {
                hO2x = hO2x - cg0x < 0 ? hO2x : hO2x - cg0x
            }
            break;
        case "right":
            db1x = db1x - cG1x < 0 ? 0 : db1x - cG1x;
            if (this.qT5Y[1] == "top") {
                hO2x = bjO1x > bjG1x ? hO2x - cg0x : hO2x
            } else {
                hO2x = hO2x - cg0x < 0 ? hO2x : hO2x - cg0x
            }
            break;
        default:
            hO2x = hO2x - cg0x < 0 ? hO2x : hO2x - cg0x;
            if (this.qT5Y[1] == "left") {
                db1x = bjN1x > Jp1x ? Jp1x - cG1x : db1x
            } else {
                db1x = db1x - cG1x < 0 ? 0 : db1x - cG1x
            }
            break
        }
        return {
            top: hO2x,
            left: db1x
        }
    }
    ;
    b9i.bjP1x = function() {
        var cuX7Q = function(G0x, dr1x) {
            G0x = a8i.B9s(G0x);
            if (!G0x)
                return;
            dr1x = dr1x || bb0x;
            var bj0x = a8i.ic3x(G0x);
            return {
                top: bj0x.y - (dr1x.top || 0),
                left: bj0x.x - (dr1x.left || 0),
                width: G0x.offsetWidth + (dr1x.right || 0),
                height: G0x.offsetHeight + (dr1x.bottom || 0)
            }
        };
        return function(e9f) {
            e9f = e9f || bb0x;
            this.Xh7a = e9f.event;
            this.cvf7Y(e9f.align);
            if (!!this.Xh7a)
                this.zi8a = this.cvc7V(e9f.target, e9f.delta, this.Xh7a);
            this.bjd1x = cuX7Q(e9f.target, e9f.delta);
            this.bTc1x = !!e9f.fitable;
            this.J0x();
            return this
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), O0x = c9h("nej.ui"), b9i, K0x;
    if (!!O0x.Dq0x)
        return;
    O0x.Dq0x = NEJ.C();
    b9i = O0x.Dq0x.N0x(O0x.bem9d);
    K0x = O0x.Dq0x.cr0x;
    O0x.Dq0x.cHw0x = function() {
        var cuV7O = function(d9g, D0x, fV2x, kG3x, WH7A) {
            var cF1x, L0x = D0x + "-i", R0x = fV2x.yW8O, bSY0x = !!kG3x.noclear, bSV0x = !!kG3x.toggled;
            if (k9b.gO2x(kG3x.onbeforeclick)) {
                var Xj7c = kG3x.noclear
                  , cuN7G = kG3x.toggled;
                try {
                    kG3x.onbeforeclick(kG3x)
                } catch (e) {}
                bSY0x = !!kG3x.noclear;
                bSV0x = !!kG3x.toggled;
                kG3x.toggled = cuN7G;
                kG3x.noclear = Xj7c
            }
            var GN1x = R0x[L0x];
            if (bSV0x && !!GN1x) {
                GN1x.bq0x();
                return
            }
            h9c.bf0x(d9g);
            if (!bSY0x) {
                h9c.z9q(document, "click");
                cF1x = fV2x.A9r(kG3x)
            } else {
                cF1x = fV2x.bWZ1x(kG3x, !0)
            }
            R0x[L0x] = cF1x;
            cF1x.xE8w("onbeforerecycle", function() {
                delete R0x[L0x]
            });
            cF1x.bjP1x(WH7A)
        };
        return function(g9d, e9f) {
            g9d = a8i.B9s(g9d);
            if (!g9d)
                return this;
            if (!this.yW8O)
                this.yW8O = {};
            var D0x = a8i.lQ4U(g9d);
            if (!!this.yW8O[D0x])
                return this;
            e9f = NEJ.X({}, e9f);
            var WH7A = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e9f);
            WH7A.target = D0x;
            e9f.destroyable = !0;
            if (!e9f.fixed) {
                WH7A.fitable = !0;
                e9f.parent = document.body
            }
            this.yW8O[D0x] = [D0x, e9f.event || "click", cuV7O.ex1x(null, D0x, this, e9f, WH7A)];
            h9c.s9j.apply(h9c, this.yW8O[D0x]);
            return this
        }
    }();
    O0x.Dq0x.cHy0x = function(g9d) {
        if (!this.yW8O)
            return this;
        var D0x = a8i.lQ4U(g9d)
          , d9g = this.yW8O[D0x];
        if (!d9g)
            return this;
        delete this.yW8O[D0x];
        h9c.mL4P.apply(h9c, d9g);
        var cF1x = this.yW8O[D0x + "-i"];
        if (!!cF1x)
            cF1x.bq0x();
        return this
    }
    ;
    b9i.bkL1x = function() {
        return O0x.Xn7g.A9r(this.ci0x)
    }
    ;
    b9i.PY4c = function() {
        K0x.PY4c.apply(this, arguments);
        this.ci0x.top = null;
        this.ci0x.left = null;
        this.ci0x.nostop = !1
    }
    ;
    b9i.bjP1x = function(e9f) {
        if (!!this.pl5q)
            this.pl5q.bjP1x(e9f);
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, bc0x = c9h("nej.ui"), n9e = c9h("nm.l"), b9i, K0x;
    n9e.bkJ1x = NEJ.C();
    b9i = n9e.bkJ1x.N0x(bc0x.Dq0x);
    b9i.bm0x = function(e9f) {
        e9f.nohack = true;
        this.bn0x(e9f)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), b9i, K0x;
    var FullscreenApi = l9c.HA1x || {};
    n9e.Z0x = NEJ.C();
    b9i = n9e.Z0x.N0x(n9e.bkJ1x);
    K0x = n9e.Z0x.cr0x;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.eC1x = e9f.type || 1
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        this.o9f = a8i.nY4c(this.cuL7E());
        var j9a = a8i.df1x(this.o9f);
        this.qW5b = j9a[0];
        this.cM1x = j9a[1]
    }
    ;
    b9i.cuL7E = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    }
    ;
    b9i.LN2x = function() {
        var C0x = {}
          , cj0x = this.o9f.style
          , jM3x = a8i.oJ5O()
          , of4j = {
            left: jM3x.scrollLeft,
            top: jM3x.scrollTop
        }
          , dr1x = {
            left: jM3x.clientWidth - this.o9f.offsetWidth,
            top: jM3x.clientHeight - this.o9f.offsetHeight
        };
        C0x.top = Math.max(0, of4j.top + dr1x.top / 2);
        C0x.left = Math.max(0, of4j.left + dr1x.left / 2);
        this.pl5q.gL2x(C0x)
    }
    ;
    b9i.J0x = function(e9f) {
        K0x.J0x.call(this);
        this.LN2x();
        this.eC1x == 1 ? a8i.fo2x(this.qW5b, "u-icn-32", "u-icn-31") : a8i.fo2x(this.qW5b, "u-icn-31", "u-icn-32");
        this.cM1x.innerHTML = e9f.tip || ""
    }
    ;
    window.g_showTipCard = n9e.Z0x.J0x = function() {
        var ej1x;
        return function(e9f) {
            clearTimeout(ej1x);
            if (e9f.parent === undefined)
                e9f.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e9f.autoclose === undefined)
                e9f.autoclose = true;
            e9f.clazz = "m-sysmsg";
            !!this.fr2x && this.fr2x.T0x();
            this.fr2x = this.A9r(e9f);
            this.fr2x.J0x(e9f);
            if (e9f.autoclose)
                ej1x = setTimeout(this.bq0x.f9e(this), 2e3)
        }
        .f9e(n9e.Z0x)
    }();
    n9e.Z0x.bq0x = function() {
        !!this.fr2x && this.fr2x.bq0x()
    }
}
)();
(function() {
    var c9h = NEJ.P
      , v9m = c9h("nej.j")
      , k9b = c9h("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v9m.bk0x = v9m.bk0x.eL2x(function(d9g) {
            e9f = d9g.args[1];
            e9f.query = e9f.query || {};
            if (k9b.fJ2x(e9f.query))
                e9f.query = k9b.hf2x(e9f.query);
            e9f.query.ref = "mail"
        })
    }
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, fD2x = NEJ.R, I0x = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), L0x = "playlist-tracks_", b9i;
    q9h.fp2x({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q0x, e9f) {
                this.cuK7D(Q0x.playlist);
                return {
                    total: 0,
                    list: fD2x
                }
            },
            onerror: function() {
                this.z9q("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q0x, e9f) {
                var nM4Q = Q0x.playlist;
                nM4Q.creator = GUser;
                nM4Q.isHost = !0;
                nM4Q.typeFlag = "playlist";
                return nM4Q
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.io3x, "listchange", d9g)
            },
            onmessage: function() {
                var ms4w = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bZ0x) {
                    n9e.Z0x.J0x({
                        tip: ms4w[bZ0x] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e9f) {
                e9f.id = e9f.data.pid
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.io3x, "listchange", d9g)
            },
            onmessage: function() {
                var ms4w = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bZ0x) {
                    n9e.Z0x.J0x({
                        tip: ms4w[bZ0x] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e9f) {
                var dV1x = e9f.ext || {};
                e9f.ext = NEJ.X(dV1x, e9f.data);
                e9f.data = {
                    id: e9f.ext.id
                }
            },
            format: function(Q0x, e9f) {
                n9e.Z0x.J0x({
                    tip: "收藏成功" + (Q0x.point > 0 ? ' 获得<em class="s-fc6">' + Q0x.point + "积分</em>" : "")
                });
                var p9g = e9f.ext;
                p9g.subscribedCount++;
                return p9g
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.cuJ7C, "listchange", d9g);
                h9c.z9q(q9h.cuJ7C, "itemchange", {
                    attr: "subscribedCount",
                    data: d9g.data
                })
            },
            onmessage: function() {
                var ms4w = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(bZ0x) {
                    n9e.Z0x.J0x({
                        type: 2,
                        tip: ms4w[bZ0x] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e9f) {
                e9f.id = e9f.data.id = e9f.data.pid
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.io3x, "listchange", d9g)
            },
            onmessage: function() {
                var ms4w = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bZ0x) {
                    n9e.Z0x.J0x({
                        tip: ms4w[bZ0x],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e9f) {
                var i9b = e9f.data
                  , Xm7f = {};
                Xm7f["playlist-update-name"] = {
                    id: i9b.id,
                    name: i9b.name
                };
                Xm7f["playlist-update-tag"] = {
                    id: i9b.id,
                    tags: i9b.tags.join(";")
                };
                Xm7f["playlist-update-desc"] = {
                    id: i9b.id,
                    desc: i9b.description
                };
                e9f.data = Xm7f;
                e9f.ext = i9b
            },
            format: function(W0x, rk5p, Wx7q, e9f) {
                if (W0x.code == 200 && rk5p.code == 200 && Wx7q.code == 200) {
                    e9f.ext.allSuccess = true;
                    n9e.Z0x.J0x({
                        tip: "保存成功"
                    })
                } else if (W0x.code == 407 || rk5p.code == 407 || Wx7q.code == 407) {
                    e9f.ext.allSuccess = false;
                    n9e.Z0x.J0x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e9f.ext.allSuccess = false;
                    n9e.Z0x.J0x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eO2x(e9f.ext.id)
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.io3x, "listchange", d9g)
            },
            onmessage: function(bZ0x) {
                n9e.Z0x.J0x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q0x, e9f) {
                var p9g = this.eO2x(e9f.ext.id);
                if (Q0x.code == 200)
                    p9g.name = e9f.ext.name;
                return Q0x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q0x, e9f) {
                var p9g = this.eO2x(e9f.ext.id);
                if (Q0x.code == 200)
                    p9g.tags = e9f.ext.tags;
                return Q0x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q0x, e9f) {
                var p9g = this.eO2x(e9f.ext.id);
                if (Q0x.code == 200)
                    p9g.description = e9f.ext.description;
                return Q0x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e9f) {
                e9f.url = e9f.data.url;
                delete e9f.data.url
            },
            format: function(Q0x, e9f) {
                n9e.Z0x.J0x({
                    tip: "保存成功"
                });
                var p9g = this.eO2x(e9f.data.id);
                p9g.coverImgUrl = e9f.url;
                e9f.ext = p9g;
                return p9g
            },
            onmessage: function(bZ0x) {
                n9e.Z0x.J0x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.io3x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e9f.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q0x, e9f) {
                var nM4Q = this.eO2x(e9f.data.id);
                if (!nM4Q)
                    return;
                nM4Q.playCount++;
                h9c.z9q(q9h.io3x, "itemchange", {
                    attr: "playcount",
                    data: nM4Q
                })
            }
        }
    });
    q9h.io3x = NEJ.C();
    b9i = q9h.io3x.N0x(q9h.hE2x);
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bSU0x = function() {
        var do1x = GUser.userId;
        this.lJ4N({
            limit: 1001,
            key: "playlist_my-" + do1x,
            data: {
                offset: 0,
                limit: 1001,
                uid: do1x
            }
        })
    }
    ;
    b9i.cuK7D = function(j9a) {
        var do1x = GUser.userId
          , iW3x = []
          , bST0x = [];
        k9b.bd0x(j9a, function(p9g) {
            p9g.typeFlag = "playlist";
            if (p9g.creator && p9g.creator.userId == do1x) {
                if (p9g.specialType == 5)
                    p9g.name = "我喜欢的音乐";
                p9g.isHost = !0;
                iW3x.push(p9g)
            } else {
                bST0x.push(p9g)
            }
        });
        this.uJ7C("playlist_new-" + do1x, iW3x);
        this.uJ7C("playlist_fav-" + do1x, bST0x)
    }
    ;
    b9i.cuG7z = function(i9b) {
        this.cm0x("playlist-update-cover", {
            data: i9b
        })
    }
    ;
    b9i.cHz0x = function() {
        var Wq7j = this.cuE7x.B9s("host-plist");
        if (Wq7j.length == 0) {
            return
        }
        if (Wq7j.length == 1 && Wq7j[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Wq7j.length; i < len; i++) {
            var p9g = Wq7j[i];
            if (p9g.trackCount > 0)
                return p9g.id
        }
        return this.cuE7x.B9s("host-plist")[0].id
    }
    ;
    b9i.cuD7w = function(D0x) {
        if (GUser && GUser.userId > 0) {
            this.cm0x("playlist-upcount", {
                data: {
                    id: D0x
                }
            })
        }
    }
    ;
    b9i.Gi0x = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
    ;
    b9i.cHA0x = function() {
        return GUser.userId
    }
    ;
    b9i.Gf0x = function(p9g) {
        if (p9g.userId == GUser.userId && p9g.specialType == 5)
            p9g.name = "我喜欢的音乐";
        h9c.z9q(this.constructor, "itemchange", {
            data: this.CJ9A(p9g)
        });
        return p9g
    }
    ;
    I0x.fK2x.A9r({
        element: q9h.io3x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
}
)();
(function() {
    var c9h = NEJ.P, fD2x = NEJ.R, br0x = NEJ.F, bb0x = NEJ.O, I0x = c9h("nej.ut"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), b9i, K0x;
    q9h.fp2x({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q0x) {
                return Q0x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e9f) {
                e9f.data.limit = 1e3;
                delete e9f.data.id
            },
            format: function(Q0x, e9f) {
                var bSR0x = []
                  , pT5Y = Q0x.programs;
                if (pT5Y) {
                    for (var i = 0, l = pT5Y.length; i < l; i++) {
                        if (pT5Y[i].programFeeType < 10 || pT5Y[i].buyed) {
                            bSR0x.push(pT5Y[i])
                        }
                    }
                }
                return bSR0x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q0x, e9f) {
                return Q0x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e9f) {
                e9f.ext = e9f.data;
                e9f.data = {
                    id: e9f.ext.id
                };
                e9f.id = e9f.data.id
            },
            format: function(Q0x, e9f) {
                n9e.Z0x.J0x({
                    tip: "收藏成功"
                });
                var p9g = e9f.ext;
                p9g.subscribedCount++;
                p9g.subscribed = !0;
                return p9g
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.rC5H, "listchange", d9g)
            },
            onmessage: function() {
                var ms4w = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(bZ0x) {
                    n9e.Z0x.J0x({
                        type: 2,
                        tip: ms4w[bZ0x] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.rC5H, "listchange", d9g)
            },
            onmessage: function() {
                var ms4w = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(bZ0x) {
                    l9c.blW1x({
                        txt: ms4w[bZ0x] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e9f) {
                var p9g = this.eO2x(e9f.data.id) || bb0x;
                e9f.ext = (p9g.listenerCount || 0) + 1
            },
            format: function(Q0x, e9f) {
                var p9g = this.eO2x(e9f.data.id);
                if (!!p9g) {
                    p9g.listenerCount = Math.max(e9f.ext, p9g.listenerCount || 0)
                }
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.rC5H, "itemchange", {
                    attr: "playCount",
                    data: this.eO2x(e9f.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e9f) {
                e9f.data = {
                    threadId: "A_DJ_1_" + e9f.id
                }
            },
            format: function(Q0x, e9f) {
                var p9g = e9f.ext.data || this.eO2x(e9f.id);
                p9g.liked = true;
                p9g.likedCount++;
                e9f.ext.data = p9g;
                try {
                    top.player.setLike(p9g)
                } catch (e) {}
                return p9g
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.rC5H, "itemchange", {
                    attr: "likedCount",
                    data: e9f.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e9f) {
                e9f.data = {
                    threadId: "A_DJ_1_" + e9f.id
                }
            },
            format: function(Q0x, e9f) {
                var p9g = e9f.ext.data || this.eO2x(e9f.id);
                p9g.liked = false;
                p9g.likedCount--;
                e9f.ext.data = p9g;
                try {
                    top.player.setLike(p9g)
                } catch (e) {}
                return p9g
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.rC5H, "itemchange", {
                    attr: "likedCount",
                    data: e9f.ext.data
                })
            }
        }
    });
    q9h.rC5H = NEJ.C();
    b9i = q9h.rC5H.N0x(q9h.hE2x);
    b9i.cHB0x = function() {
        var do1x = GUser.userId;
        this.lJ4N({
            limit: 1001,
            key: "program_fav-" + do1x,
            data: {
                offset: 0,
                limit: 1e3,
                uid: do1x
            }
        })
    }
    ;
    b9i.cHC0x = function(da1x) {
        var oE4I = da1x[this.yc8U];
        l9c.cux7q(4, function(R0x) {
            R0x.uJ7C("track_program-" + oE4I, da1x.songs)
        });
        delete da1x.songs;
        var bP0x = da1x.mainSong;
        l9c.cux7q(4, function(R0x) {
            R0x.uJ7C("track_program_main-" + oE4I, !bP0x ? [] : [bP0x])
        });
        da1x.mainSong = (bP0x || bb0x).id
    }
    ;
    b9i.cHD0x = function(D0x) {
        var da1x = this.eO2x(D0x)
          , do1x = localCache.bdK9B("host.profile.userId");
        return !!da1x && da1x.dj.userId == do1x
    }
    ;
    b9i.cHE0x = function(D0x) {
        return !1
    }
    ;
    b9i.Gf0x = function(p9g) {
        h9c.z9q(this.constructor, "itemchange", {
            attr: "detail",
            data: this.CJ9A(p9g)
        });
        return p9g
    }
    ;
    b9i.cuD7w = function(D0x) {
        this.cm0x("program-update-count", {
            data: {
                id: D0x
            }
        })
    }
    ;
    l9c.bSM0x = function(e9f) {
        var R0x = q9h.rC5H.A9r({
            onitemadd: function() {
                (e9f.onsuccess || br0x)()
            },
            onerror: function() {
                (e9f.onerror || br0x)()
            }
        });
        if (e9f.data.liked) {
            R0x.wl7e(e9f.data)
        } else {
            R0x.pj5o(e9f.data)
        }
    }
    ;
    b9i.pj5o = function(da1x) {
        if (!l9c.gZ2x())
            return;
        var cu0x = {
            ext: {}
        };
        if (k9b.lY4c(da1x)) {
            cu0x.id = da1x.id;
            cu0x.ext.data = da1x
        } else {
            cu0x.id = da1x
        }
        this.cm0x("program-like", cu0x)
    }
    ;
    b9i.wl7e = function(da1x) {
        if (!l9c.gZ2x())
            return;
        var cu0x = {
            ext: {}
        };
        if (k9b.lY4c(da1x)) {
            cu0x.id = da1x.id;
            cu0x.ext.data = da1x
        } else {
            cu0x.id = da1x
        }
        this.cm0x("program-unlike", cu0x)
    }
    ;
    I0x.fK2x.A9r({
        element: q9h.rC5H,
        event: ["listchange", "itemchange"]
    })
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, fD2x = NEJ.R, I0x = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), L0x = "playlist-tracks_", l9c = c9h("nm.x"), b9i;
    q9h.fp2x({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e9f) {
                e9f.data.c = JSON.stringify([{
                    id: e9f.data.id
                }])
            },
            format: function(Q0x, e9f) {
                var bl0x = l9c.Cz9q(Q0x.songs[0]);
                bl0x.privilege = Q0x.privileges[0];
                return bl0x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e9f) {
                e9f.data.n = 1e3
            },
            format: function(Q0x, e9f) {
                var hG2x = [];
                this.tL6F.Gf0x(Q0x.playlist);
                k9b.bd0x(Q0x.playlist.tracks, function(bP0x, r9i) {
                    var bSL0x = l9c.Cz9q(bP0x);
                    bSL0x.privilege = Q0x.privileges[r9i];
                    hG2x.push(bSL0x)
                }, this);
                return hG2x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q0x, e9f) {
                var hG2x = [];
                k9b.bd0x(Q0x.songs, function(bl0x) {
                    hG2x.push(l9c.Cz9q(bl0x))
                });
                return hG2x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e9f) {
                var bz0x = {}
                  , i9b = e9f.data
                  , cun7g = this.hH2x(e9f.key) || [];
                FF0x = [];
                k9b.bd0x(cun7g, function(bP0x) {
                    var D0x = k9b.lY4c(bP0x) ? bP0x.id : bP0x;
                    bz0x[D0x] = true
                });
                e9f.ext = [];
                k9b.bd0x(i9b.tracks, function(bP0x) {
                    var D0x = k9b.lY4c(bP0x) ? bP0x.id : bP0x;
                    if (!bz0x[D0x]) {
                        FF0x.push(D0x);
                        bz0x[D0x] = true;
                        e9f.ext.push(bP0x)
                    }
                });
                i9b.trackIds = JSON.stringify(FF0x);
                i9b.op = "add";
                if (!FF0x.length) {
                    e9f.value = {
                        code: 502
                    }
                }
            },
            format: function(Q0x, e9f) {
                n9e.Z0x.J0x({
                    tip: "已添加至歌单"
                });
                var nM4Q = this.tL6F.eO2x(e9f.data.pid);
                if (!!Q0x.coverImgUrl)
                    nM4Q.coverImgUrl = Q0x.coverImgUrl;
                k9b.nC4G(e9f.ext, function(bP0x) {
                    this.Ae9V(e9f, k9b.lY4c(bP0x) ? bP0x : null);
                    if (!!nM4Q)
                        nM4Q.trackCount++
                }, this);
                h9c.z9q(q9h.io3x, "itemchange", {
                    data: nM4Q || {},
                    cmd: "add"
                });
                this.z9q("onaddsuccess");
                return null
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.wt7m, "listchange", {
                    key: e9f.key,
                    action: "refresh"
                });
                var oE4I = e9f.data.pid
                  , cB0x = this.lE4I(e9f.key)
            },
            onmessage: function() {
                var ms4w = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(bZ0x) {
                    setTimeout(function() {
                        n9e.Z0x.J0x({
                            tip: ms4w[bZ0x] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e9f) {
                var i9b = e9f.data;
                e9f.ext = i9b.trackIds;
                i9b.trackIds = JSON.stringify(i9b.trackIds);
                i9b.op = "del"
            },
            format: function(Q0x, e9f) {
                var nM4Q = this.tL6F.eO2x(e9f.data.pid);
                k9b.bd0x(e9f.ext, function(D0x) {
                    this.brE3x({
                        id: D0x,
                        key: "track_playlist-" + e9f.data.pid
                    }, !0);
                    if (!!nM4Q)
                        nM4Q.trackCount = Math.max(0, nM4Q.trackCount - 1)
                }, this);
                h9c.z9q(q9h.io3x, "itemchange", {
                    data: nM4Q || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.wt7m, "listchange", {
                    key: e9f.key,
                    action: "refresh"
                })
            },
            onmessage: function(bZ0x) {
                l9c.blW1x({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q0x, e9f) {
                return this.bSJ0x.Gf0x(Q0x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q0x, e9f) {
                var j9a = [];
                if (e9f.data.type == -1) {
                    if (Q0x.weekData && Q0x.weekData.length) {
                        e9f.data.type = 1
                    } else {
                        e9f.data.type = 0
                    }
                }
                if (e9f.data.type == 1) {
                    j9a = this.bSI0x(Q0x.weekData)
                } else {
                    j9a = this.bSI0x(Q0x.allData)
                }
                return j9a
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q0x, e9f) {
                var ok4o = []
                  , j9a = Q0x.recommend || [];
                k9b.bd0x(j9a, function(bl0x, r9i) {
                    ok4o.push({
                        action: "recommendimpress",
                        json: {
                            alg: bl0x.alg,
                            scene: "user-song",
                            position: r9i,
                            id: bl0x.id
                        }
                    })
                });
                this.kN3x.YL7E(ok4o);
                e9f.limit = j9a.length;
                return j9a
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e9f) {
                e9f.data.lv = 0;
                e9f.data.tv = 0
            },
            format: function(m9d, e9f) {
                return m9d
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q9h.wt7m = NEJ.C();
    b9i = q9h.wt7m.N0x(q9h.hE2x);
    b9i.cv0x = function() {
        this.cD1x();
        this.tL6F = q9h.io3x.A9r();
        this.bSJ0x = q9h.rC5H.A9r();
        this.kN3x = q9h.hP2x.A9r()
    }
    ;
    b9i.bSI0x = function(j9a) {
        var m9d = []
          , fv2x = 0;
        k9b.bd0x(j9a, function(p9g, r9i) {
            var bl0x = l9c.Cz9q(p9g.song);
            if (r9i == 0) {
                fv2x = p9g.score
            }
            bl0x.max = fv2x;
            bl0x.playCount = p9g.playCount;
            bl0x.score = p9g.score;
            m9d.push(bl0x)
        });
        return m9d
    }
    ;
    I0x.fK2x.A9r({
        element: q9h.wt7m,
        event: ["listchange"]
    })
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , cw0x = c9h("nm.pc");
    var bnF2x = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qS5X = function(bT0x) {
        var Cd9U = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bT0x), Cd9U)
    };
    var cug7Z = function(mv4z) {
        var lm3x = "http://" + location.host + "/"
          , VH6B = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/
          , dS1x = VH6B.exec(mv4z);
        if (!dS1x)
            return cue7X(mv4z);
        var gu2x = dS1x[2]
          , hM2x = dS1x[3]
          , do1x = dS1x[4] || ""
          , jt3x = "";
        switch (gu2x) {
        case "album":
            jt3x = "#/m/album/comment/?rid=" + bnF2x[gu2x] + hM2x + "&id=" + hM2x;
            break;
        case "playlist":
            jt3x = "#/m/playlist/comment/?rid=" + bnF2x[gu2x] + hM2x + "&id=" + hM2x;
            break;
        case "song":
        case "dj":
        case "program":
            jt3x = "#/m/song?rid=" + bnF2x[gu2x] + hM2x;
            break;
        case "event":
            jt3x = "#/m/friend/event/?id=" + hM2x + "&uid=" + do1x;
            break;
        case "user/home":
            jt3x = "#/m/personal/?uid=" + hM2x;
            break;
        case "mv":
            jt3x = "#/m2/mv/?id=" + hM2x;
            break;
        case "activity":
            jt3x = "#/m/friend/activity?id=" + hM2x;
            break;
        case "video":
            jt3x = "#/m2/mv/?id=" + hM2x + "&type=1";
            break;
        default:
            jt3x = "#/m/" + gu2x + "/?id=" + hM2x
        }
        return lm3x + jt3x
    };
    var cue7X = function(mv4z) {
        var cuc7V = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dS1x = cuc7V.exec(mv4z);
        if (dS1x)
            return "http://v.youku.com/v_show/id_" + dS1x[1];
        return mv4z
    };
    cw0x.er1x = function(gu2x, hM2x) {
        qS5X({
            name: "play",
            args: {
                type: gu2x,
                id: hM2x
            }
        })
    }
    ;
    cw0x.fM2x = function() {
        qS5X({
            name: "pause"
        })
    }
    ;
    cw0x.Cc9T = function(mv4z) {
        qS5X({
            name: "open",
            args: {
                link: cug7Z(mv4z)
            }
        })
    }
    ;
    cw0x.kR3x = function(gu2x, hM2x, cL1x) {
        qS5X({
            name: "share",
            args: {
                type: gu2x,
                id: hM2x,
                shareContent: cL1x
            }
        })
    }
    ;
    cw0x.bSx0x = function(gu2x, hM2x) {
        qS5X({
            name: "comment",
            args: {
                type: gu2x,
                id: hM2x
            }
        })
    }
    ;
    cw0x.ctI7B = function() {
        qS5X({
            name: "init"
        })
    }
    ;
    cw0x.BY9P = function(cg0x) {
        qS5X({
            name: "setHeight",
            args: {
                height: cg0x
            }
        })
    }
    ;
    cw0x.iy3x = function(bF0x, V0x) {
        qS5X({
            name: "toast",
            args: {
                message: bF0x || "",
                state: V0x
            }
        })
    }
    ;
    cw0x.EY0x = function(mv4z) {
        qS5X({
            name: "login",
            args: {
                link: mv4z
            }
        })
    }
    ;
    cw0x.bSu0x = function(BR9I) {
        qS5X({
            name: "topbar",
            args: {
                show: !!BR9I
            }
        })
    }
    ;
    cw0x.ctr7k = function(bx0x) {
        qS5X({
            name: "refreshtopbar",
            args: {
                info: bx0x
            }
        })
    }
    ;
    cw0x.ctq7j = function(bt0x, r9i) {
        qS5X({
            name: "big",
            args: {
                arr: bt0x,
                index: r9i
            }
        })
    }
    ;
    cw0x.Md2x = function(cx0x) {
        qS5X({
            name: "download",
            args: {
                img: cx0x
            }
        })
    }
    ;
    cw0x.bSn0x = function(cti7b) {
        qS5X({
            name: "scrollable",
            args: {
                scrollable: cti7b
            }
        })
    }
}
)();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f)
                return f;
            if (0 != f.length % 2)
                throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d
      , d = (new J).d
      , e = (new J).d
      , f = (new J).d
      , g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")]
          , J = [g("YPU7UcUUUlYkU0VkUU")]
          , b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")]
          , c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")]
          , Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b)
                        return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
                        f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b)
                        return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])
                        return za(L);
                    if (h.length >= L) {
                        var c = a[15]
                          , l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)
                                throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)
                                l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)
                        c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++)
                            c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15])
                        h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++)
                            l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]], g = b[74], e = [];
                    if (l == a[541])
                        l = h[c],
                        d = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(g),
                        e.push(g);
                    else if (l == a[16])
                        l = h[c],
                        d = h[c + a[541]],
                        h = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(g);
                    else if (l == a[19])
                        l = h[c],
                        d = h[c + a[541]],
                        h = h[c + a[16]],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(f[h & a[153]]);
                    else
                        throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)
                        c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)
                            throw Error(b[131]);
                        if (h.length < f)
                            throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)
                            l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h)
                        return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l)
                                c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else
                                throw Error(b[146]);
                        else
                            c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15])
                        return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23]
                          , g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)
                        return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)
                        d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290])
                        return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])
                        return c;
                    if (c > a[282])
                        return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)
                            try {
                                var g = h[e];
                                l()(g) && f.push(g)
                            } catch (k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                            g.appendChild(k),
                            c.height = k.offsetHeight,
                            c.width = k.offsetWidth,
                            g[b[307]](k),
                            c
                        }
                        var d = [c[21], c[141], B[6]]
                          , l = []
                          , f = c[139]
                          , e = b[327]
                          , g = C[b[258]]
                          , k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)
                            l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f])
                                  , g = l[f];
                                if (e.height !== g.height || e.width !== g.width)
                                    return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null
                          , h = null
                          , d = [];
                        try {
                            h = C[b[167]](c[79]),
                            a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a)
                            return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76]
                              , l = b[240]
                              , g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]]()
                              , X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                            h[b[341]](la),
                            h[b[177]](t, X),
                            h[b[177]](t, la),
                            h[c[45]](t),
                            h[b[309]](t),
                            t.n = h[c[92]](t, b[205]),
                            t.m = h[c[62]](t, c[29]),
                            h[c[74]](t.o),
                            h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                            h[J[0]](t.m, a[541], a[541]),
                            h[b[139]](h[b[259]], a[15], g.l),
                            M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155])
                          , d = []
                          , f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])
                            return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)
                            try {
                                C[b[258]].appendChild(h),
                                h.style.color = f[l],
                                d.push(f[l]),
                                d.push(window[c[154]](h).getPropertyValue(c[36])),
                                C[b[258]][b[307]](h)
                            } catch (e) {
                                d.push(b[349])
                            }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79])
                              , d = h[B[7]](b[354])
                              , f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]])
                            return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]]
                          , d = []
                          , f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a])
                                return b[0];
                            a = y[b[4]][a];
                            if (!a)
                                return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a),
                                a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a)
                            return c;
                        if (I && a.map === I)
                            return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z)
                                b.forEach(h, void 0);
                            else if (b.length === +b.length)
                                for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++)
                                    ;
                            else
                                for (c in b)
                                    if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})
                                        break
                    }
                    var z = Array.prototype.forEach
                      , I = Array.prototype.map
                      , n = {
                        e: M,
                        j: !0,
                        i: !0,
                        h: !0,
                        b: !0,
                        a: !0
                    };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b),
                    null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = []
                          , l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)
                                try {
                                    var u = C[b[167]](c[79]);
                                    e = !(!u[B[7]] || !u[B[7]](b[354]))
                                } catch (r) {
                                    e = !1
                                }
                            if (e)
                                try {
                                    h.push(k()),
                                    n.b && h.push(f())
                                } catch (E) {
                                    h.push(b[59])
                                }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]],
                            typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))),
                        u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))),
                        u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f; )
                        k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                        ++m,
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k,
                        e = e << a[50] | e >>> a[64],
                        e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                        e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299],
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
                            try {
                                var q = parseInt(B.charAt(z) + b[0])
                                  , p = q || q === a[15] ? p + q : p + a[541];
                                E++
                            } catch (n) {
                                p += a[541],
                                E++
                            }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)
                            try {
                                var v = parseInt(G.charAt(F) + b[0]);
                                v || v === a[15] ? v < C ? (D++,
                                w += v) : (u++,
                                H += v) : (u++,
                                H += C)
                            } catch (A) {
                                u++,
                                H += C
                            }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [],
                        d.push(h),
                        d.push(U(N, b[35]).join(b[0])),
                        d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43])
                        throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)
                        e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)
                        throw Error(b[87]);
                    if (a.length == c)
                        return a;
                    for (var e = [], f = a.length; f < c; f++)
                        e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15])
                        return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)
                        d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))
                        return !1;
                    try {
                        if (r(window[a.f]))
                            return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c))
                        return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)
                            return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else
                                                        e = v(q, c[172])
                                                } else
                                                    e = v(q, b[342])
                                            } else
                                                e = v(q, c[30])
                                        } else
                                            e = v(q, c[16])
                                    } else
                                        e = v(q, B[2])
                                } else
                                    e = v(q, b[320])
                            } else
                                e = v(q, c[58])
                        } else
                            e = v(q, c[89])
                    } else
                        e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta
                          , f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)
                                return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]]
                      , e = b[0];
                    if (null == h || void 0 == h)
                        return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262], k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date,
                    a = new Date(f),
                    f = a[b[215]](),
                    g.push(c[91]),
                    g.push(b[172]),
                    g.push(b[305]),
                    g.push(b[325]),
                    g.push(b[319]),
                    g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]),
                    g.push(b[152]),
                    g.push(b[234]),
                    g.push(b[260]),
                    g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)
                        e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])
                        return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])
                        return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])
                        return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d),
                            Ha(V, d))
                        }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0
                      , t = {
                        v: b[227]
                    }
                      , l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa
                      , r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1
                    }
                    try {
                        var v = l = Ca(t)
                          , t = Za;
                        if (null == t || void 0 == t)
                            throw Error(b[120]);
                        if (null == v || void 0 == v)
                            v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y)
                          , p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301]
                              , z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15])
                            I = za(F);
                        else {
                            var n = A.length
                              , J = a[15]
                              , J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha
                              , z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)
                                z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])
                            throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)
                                I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N)
                                M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                                    w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w)
                                Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                                    D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w)
                                ia = null;
                            else if (null == D)
                                ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                                    H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E)
                              , ja = f(xa)
                              , ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G)
                            ka = null;
                        else if (G.length == a[15])
                            ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length; )
                                    if (R + ya <= G.length)
                                        u.push(k(G, R, ya)),
                                        R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                        h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67],b[13]), new m(b[330],b[14]), new m(c[6],b[11]), new m(c[65],b[12]), new m(c[140],b[10]), new m(b[257],b[9]), new m(b[2],b[19]), new m(b[235],b[22]), new m(c[119],b[6]), new m(c[89],c[164]), new m(c[58],c[162]), new m(b[320],c[163]), new m(B[2],c[159]), new m(c[16],c[161]), new m(c[30],c[156]), new m(b[342],c[158]), new m(c[172],c[165]), new m(b[171],c[168]), new m(b[253],c[128],!1), new m(b[294],c[129],!1), new m(b[168],c[126],!1), new m(b[311],c[127],!1), new m(b[265],c[144],!1)]
                  , Qa = da() ? !1 : !0
                  , Wa = window && window[c[65]] && window[c[65]].host || b[353]
                  , C = window[b[330]]
                  , y = window[c[6]]
                  , N = a[16]
                  , T = a[16]
                  , aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]]
                  , La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]]
                  , Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]]
                  , F = a[158]
                  , L = a[158]
                  , ha = a[23]
                  , va = a[23]
                  , d = function(b, c) {
                    if (null == b)
                        return null;
                    for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
                        e.push(Y(b[g], d++));
                    return e
                }
                  , Za = b[345]
                  , S = b[299]
                  , V = c[100]
                  , fa = a[91]
                  , ea = b[275]
                  , Ta = ea.length
                  , sa = a[444]
                  , ta = a[396]
                  , Ya = !1
                  , Xa = !1
                  , O = window && window[c[65]] && window[c[65]][b[310]] || c[95]
                  , A = c[56]
                  , A = function(d, e) {
                    if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])
                        return null;
                    e = e.split(b[56]);
                    for (var f = a[15]; f < e.length; f++) {
                        var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                        if (null != d.match(g) || null != (b[38] + d).match(g))
                            return e[f]
                    }
                    return null
                }(O, A)
                  , pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , K = function(c) {
                    var d = [];
                    if (!c)
                        return d;
                    c = c.split(b[38]);
                    for (var e = b[0], f = a[15]; f < c.length; f++)
                        f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e,
                        d.push(e));
                    return d
                }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                }
                )(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0])
                        a = !1;
                    else {
                        var c;
                        if (c = Ua())
                            a = ga(a),
                            c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                }
                )() ? (Da(Q()),
                Ea(ra()),
                O = Va(),
                window[b[124]] && window[b[124]](ua, O)) : ua()
            }
            )()
        }
        )()
    }
    )()
}
)();
(function() {}
)();
(function() {
    var bSj0x;
    var uQ7J = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cte7X = 0;
    var bSe0x = 0;
    var bSd0x = 1;
    var bSb0x = 0;
    var bpu2x = "";
    var bRX0x = "";
    var bRT0x = "";
    var Yv7o = "";
    var Yw7p = "";
    var bpT2x = "";
    var bRS0x = 0;
    var bRR0x = "";
    var Kh2x = "";
    var Eh0x = 0;
    var bqf2x = ntes_get_domain();
    var bqg2x = null;
    var cIk0x = "//analytics.163.com";
    var csq7j = function() {};
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqf2x
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqf2x
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqf2x
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = ""
          , n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var csp7i = 0;
    var UE6y = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * UE6y))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << UE6y) - 1;
        for (var b = 0; b < d.length * UE6y; b += UE6y) {
            c[b >> 5] |= (d.charCodeAt(b / UE6y) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = csp7i ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        Yv7o = "-";
        bpT2x = "-";
        Yw7p = "-";
        var c = window.self
          , b = window.screen
          , a = window.navigator;
        if (c.screen) {
            Yv7o = b.width + "x" + b.height;
            bpT2x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Yv7o = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Yw7p = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Yw7p = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bRS0x = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cIl0x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || csq7j;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        }
        ;
        a.onerror = function() {
            window[e] = null;
            d()
        }
        ;
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bSj0x;
        bpu2x = escape(a || document.location);
        bRX0x = escape(m || document.title);
        bRT0x = l === true ? "" : escape(l || document.referrer);
        bRR0x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bqg2x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bqg2x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpu2x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bqg2x) {
                uQ7J = fetch_visitor_hash();
                bSe0x = 1;
                ntes_set_cookie_long("_ntes_nnid", uQ7J + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uQ7J)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uQ7J = h.substr(0, o);
            Eh0x = h.substr(o + 1, p - o - 1);
            if (Eh0x == 0) {
                Eh0x = (new Date).getTime();
                f = true
            }
            if (!uQ7J) {
                uQ7J = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uQ7J + "," + Eh0x);
                ntes_set_cookie_long("_ntes_nuid", uQ7J)
            }
            if (Eh0x != 0 && b - Eh0x > 365 * 86400 * 1e3) {
                Eh0x = 0;
                ntes_set_cookie_long("_ntes_nnid", uQ7J + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uQ7J)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
              , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Kh2x = c("P_INFO", "P_OINFO");
        Kh2x = Kh2x ? Kh2x.substr(0, Kh2x.indexOf("|")) : "";
        bSb0x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uQ7J, "&_nvtm=", cte7X, "&_nvsf=", bSd0x, "&_nvfi=", bSe0x, "&_nlag=", Yw7p, "&_nlmf=", bRS0x, "&_nres=", Yv7o, "&_nscd=", bpT2x, "&_nstm=", bSb0x, "&_nurl=", bpu2x, "&_ntit=", bRX0x, "&_nref=", bRT0x, "&_nfla=", bRR0x, "&_nssn=", Kh2x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bSd0x = 0;
        neteaseTracker.callback = null
    }
    bSj0x = "iad";
    neteaseTracker()
}
)();
(function() {}
)();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {}
      , l = d.lib = {}
      , s = function() {}
      , t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments)
            }
            );
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a)
                a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words
              , e = a.words
              , j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4)
                for (var k = 0; k < a; k++)
                    c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length)
                for (k = 0; k < a; k += 4)
                    c[j + k >>> 2] = e[k >>> 2];
            else
                c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words
              , c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4)
                c.push(4294967296 * u.random() | 0);
            return new r.init(c,a)
        }
    })
      , w = d.enc = {}
      , v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2)
                e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e,c / 2)
        }
    }
      , b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++)
                e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j++)
                e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e,c)
        }
    }
      , x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }
      , q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this.i9b = new r.init;
            this.bRL0x = 0
        },
        YR8J: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.i9b.concat(a);
            this.bRL0x += a.sigBytes
        },
        BH9y: function(a) {
            var c = this.i9b
              , e = c.words
              , j = c.sigBytes
              , k = this.blockSize
              , b = j / (4 * k)
              , b = a ? u.ceil(b) : u.max((b | 0) - this.bRN0x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k)
                    this.bRK0x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q,j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.i9b = this.i9b.clone();
            return a
        },
        bRN0x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.brx3x()
        },
        update: function(a) {
            this.YR8J(a);
            this.BH9y();
            return this
        },
        finalize: function(a) {
            a && this.YR8J(a);
            return this.YX8P()
        },
        blockSize: 16,
        bru3x: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        csb7U: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS
      , p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words
              , p = d.sigBytes
              , t = this.bz0x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4; )
                    d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length
              , s = this.bz0x
              , t = s.charAt(64);
            t && (t = d.indexOf(t),
            -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4)
                      , b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bz0x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}
)();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        brx3x: function() {
            this.dR1x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bRK0x: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                  , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR1x.words
              , c = q[n + 0]
              , e = q[n + 1]
              , j = q[n + 2]
              , k = q[n + 3]
              , z = q[n + 4]
              , r = q[n + 5]
              , t = q[n + 6]
              , w = q[n + 7]
              , v = q[n + 8]
              , A = q[n + 9]
              , B = q[n + 10]
              , C = q[n + 11]
              , u = q[n + 12]
              , D = q[n + 13]
              , E = q[n + 14]
              , x = q[n + 15]
              , f = a[0]
              , m = a[1]
              , g = a[2]
              , h = a[3]
              , f = p(f, m, g, h, c, 7, b[0])
              , h = p(h, f, m, g, e, 12, b[1])
              , g = p(g, h, f, m, j, 17, b[2])
              , m = p(m, g, h, f, k, 22, b[3])
              , f = p(f, m, g, h, z, 7, b[4])
              , h = p(h, f, m, g, r, 12, b[5])
              , g = p(g, h, f, m, t, 17, b[6])
              , m = p(m, g, h, f, w, 22, b[7])
              , f = p(f, m, g, h, v, 7, b[8])
              , h = p(h, f, m, g, A, 12, b[9])
              , g = p(g, h, f, m, B, 17, b[10])
              , m = p(m, g, h, f, C, 22, b[11])
              , f = p(f, m, g, h, u, 7, b[12])
              , h = p(h, f, m, g, D, 12, b[13])
              , g = p(g, h, f, m, E, 17, b[14])
              , m = p(m, g, h, f, x, 22, b[15])
              , f = d(f, m, g, h, e, 5, b[16])
              , h = d(h, f, m, g, t, 9, b[17])
              , g = d(g, h, f, m, C, 14, b[18])
              , m = d(m, g, h, f, c, 20, b[19])
              , f = d(f, m, g, h, r, 5, b[20])
              , h = d(h, f, m, g, B, 9, b[21])
              , g = d(g, h, f, m, x, 14, b[22])
              , m = d(m, g, h, f, z, 20, b[23])
              , f = d(f, m, g, h, A, 5, b[24])
              , h = d(h, f, m, g, E, 9, b[25])
              , g = d(g, h, f, m, k, 14, b[26])
              , m = d(m, g, h, f, v, 20, b[27])
              , f = d(f, m, g, h, D, 5, b[28])
              , h = d(h, f, m, g, j, 9, b[29])
              , g = d(g, h, f, m, w, 14, b[30])
              , m = d(m, g, h, f, u, 20, b[31])
              , f = l(f, m, g, h, r, 4, b[32])
              , h = l(h, f, m, g, v, 11, b[33])
              , g = l(g, h, f, m, C, 16, b[34])
              , m = l(m, g, h, f, E, 23, b[35])
              , f = l(f, m, g, h, e, 4, b[36])
              , h = l(h, f, m, g, z, 11, b[37])
              , g = l(g, h, f, m, w, 16, b[38])
              , m = l(m, g, h, f, B, 23, b[39])
              , f = l(f, m, g, h, D, 4, b[40])
              , h = l(h, f, m, g, c, 11, b[41])
              , g = l(g, h, f, m, k, 16, b[42])
              , m = l(m, g, h, f, t, 23, b[43])
              , f = l(f, m, g, h, A, 4, b[44])
              , h = l(h, f, m, g, u, 11, b[45])
              , g = l(g, h, f, m, x, 16, b[46])
              , m = l(m, g, h, f, j, 23, b[47])
              , f = s(f, m, g, h, c, 6, b[48])
              , h = s(h, f, m, g, w, 10, b[49])
              , g = s(g, h, f, m, E, 15, b[50])
              , m = s(m, g, h, f, r, 21, b[51])
              , f = s(f, m, g, h, u, 6, b[52])
              , h = s(h, f, m, g, k, 10, b[53])
              , g = s(g, h, f, m, B, 15, b[54])
              , m = s(m, g, h, f, e, 21, b[55])
              , f = s(f, m, g, h, v, 6, b[56])
              , h = s(h, f, m, g, x, 10, b[57])
              , g = s(g, h, f, m, t, 15, b[58])
              , m = s(m, g, h, f, D, 21, b[59])
              , f = s(f, m, g, h, z, 6, b[60])
              , h = s(h, f, m, g, C, 10, b[61])
              , g = s(g, h, f, m, j, 15, b[62])
              , m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        YX8P: function() {
            var b = this.i9b
              , n = b.words
              , a = 8 * this.bRL0x
              , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.BH9y();
            b = this.dR1x;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dR1x = this.dR1x.clone();
            return b
        }
    });
    t.MD5 = v.bru3x(r);
    t.HmacMD5 = v.csb7U(r)
}
)(Math);
(function() {
    var u = CryptoJS
      , p = u.lib
      , d = p.Base
      , l = p.WordArray
      , p = u.algo
      , s = p.EvpKDF = d.extend({
        cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
        }),
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q; ) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++)
                    n = s.finalize(n),
                    s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
}
)();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS
      , d = p.lib
      , l = d.Base
      , s = d.WordArray
      , t = d.BufferedBlockAlgorithm
      , r = p.enc.Base64
      , w = p.algo.EvpKDF
      , v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this.brB3x, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.csa7T, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.bRJ0x = e;
            this.L0x = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.brx3x()
        },
        process: function(e) {
            this.YR8J(e);
            return this.BH9y()
        },
        finalize: function(e) {
            e && this.YR8J(e);
            return this.YX8P()
        },
        keySize: 4,
        ivSize: 4,
        brB3x: 1,
        csa7T: 2,
        bru3x: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        YX8P: function() {
            return this.BH9y(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
      , x = function(e, a, b) {
        var c = this.bRI0x;
        c ? this.bRI0x = u : c = this.bRF0x;
        for (var d = 0; d < b; d++)
            e[a + d] ^= c[d]
    }
      , q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.bRE0x = e;
            this.bRI0x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bRE0x
              , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bRF0x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bRE0x
              , c = b.blockSize
              , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bRF0x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg
              , b = a.iv
              , a = a.mode;
            if (this.bRJ0x == this.brB3x)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                this.bRN0x = 1;
            this.fu2x = c.call(a, this, b && b.words)
        },
        bRK0x: function(a, b) {
            this.fu2x.processBlock(a, b)
        },
        YX8P: function() {
            var a = this.cfg.padding;
            if (this.bRJ0x == this.brB3x) {
                a.pad(this.i9b, this.blockSize);
                var b = this.BH9y(!0)
            } else
                b = this.BH9y(!0),
                a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    })
      , b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({
                ciphertext: a,
                salt: c
            })
        }
    }
      , a = d.SerializableCipher = l.extend({
        cfg: l.extend({
            format: b
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.bdN9E(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        bdN9E: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    })
      , p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
                keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    }
      , c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
            kdf: p
        }),
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.bdN9E(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
          , k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e]
          , F = a[z]
          , G = a[F]
          , y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]],
        j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , d = d.AES = p.extend({
        brx3x: function() {
            for (var a = this.L0x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.crP6J = d + 6) + 1), e = this.crO6I = [], j = 0; j < a; j++)
                if (j < d)
                    e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                    k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                    k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
            c = this.crN6H = [];
            for (d = 0; d < a; d++)
                j = a - d,
                k = d % 4 ? e[j] : e[j - 4],
                c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.bRD0x(a, b, this.crO6I, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bRD0x(a, c, this.crN6H, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        bRD0x: function(a, b, c, d, e, j, l, f) {
            for (var m = this.crP6J, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++]
                  , s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++]
                  , t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++]
                  , n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++]
                  , g = q
                  , h = s
                  , k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        },
        keySize: 8
    });
    u.AES = p.bru3x(d)
}
)();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
    this.d = biFromHex(b),
    this.m = biFromHex(c),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e; )
        c[e] = b.charCodeAt(e),
        e++;
    for (; 0 != c.length % a.chunkSize; )
        c[e++] = 0;
    for (f = c.length,
    g = "",
    e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
        h = 0,
        i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
            j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
        l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
        g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
        g = a.barrett.powMod(h, a.d),
        f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
    d
}
function setMaxDigits(a) {
    maxDigits = a,
    ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
    bigOne = new BigInt,
    bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
    this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c); )
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c,
        f = e % dpl10,
        0 == f && (f = dpl10),
        d = biFromNumber(Number(a.substr(c, f))),
        c += f; c < a.length; )
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
            c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
    b.isNeg = a.isNeg,
    b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a,
    a = Math.abs(a),
    c = 0; a > 0; )
        b.digits[c++] = a & maxDigitVal,
        a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b,
    d = biDivideModulo(a, c),
    e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero); )
        d = biDivideModulo(d[0], c),
        digit = d[1].digits[0],
        e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10,
    c = biDivideModulo(a, b),
    d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero); )
        c = biDivideModulo(c[0], b),
        d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15
      , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
        a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
    d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
        b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
    e = 0; d > 0; d -= 4,
    ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1,
    g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g),
        i = charToHex(h),
        j = biMultiplyDigit(f, i),
        e = biAdd(e, j),
        f = biMultiplyDigit(f, b);
    return e.isNeg = c,
    e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biSubtract(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        d = 0,
        f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
            c.digits[f] = 65535 & e,
            d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biAdd(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        e = 0,
        f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
            c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
            e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
            f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b]; )
        --b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
        i = k,
        j = 0; e >= j; ++j,
        ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
            c.digits[i] = h & maxDigitVal,
            d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
    c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
    c = biHighIndex(a),
    d = 0,
    f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
        result.digits[f] = e & maxDigitVal,
        d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
    result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
    h = d; f > g; ++g,
    ++h)
        c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = d.digits.length - 1,
    h = g - 1; g > 0; --g,
    --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
    d.isNeg = a.isNeg,
    d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = 0,
    h = g + 1; g < d.digits.length - 1; ++g,
    ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
    d.isNeg = a.isNeg,
    d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
    c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
    c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
    c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
        f.isNeg = !b.isNeg,
        a.isNeg = !1,
        b.isNeg = !1,
        g = biSubtract(b, a),
        a.isNeg = !0,
        b.isNeg = e) : (f = new BigInt,
        g = biCopy(a)),
        new Array(f,g);
    for (f = new BigInt,
    g = a,
    h = Math.ceil(d / bitsPerDigit) - 1,
    i = 0; b.digits[h] < biHalfRadix; )
        b = biShiftLeft(b, 1),
        ++i,
        ++d,
        h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
    c += i,
    j = Math.ceil(c / bitsPerDigit) - 1,
    k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k); )
        ++f.digits[j - h],
        g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
        n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
        o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
        p = h >= b.digits.length ? 0 : b.digits[h],
        q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
        f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
        r = f.digits[l - h - 1] * (p * biRadix + q),
        s = m * biRadixSquared + (n * biRadix + o); r > s; )
            --f.digits[l - h - 1],
            r = f.digits[l - h - 1] * (p * biRadix | q),
            s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
        g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k),
        --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
    f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
    b = biShiftRight(b, i),
    g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f,g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ; ) {
        if (0 != (1 & b) && (c = biMultiply(c, d)),
        b >>= 1,
        0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ; ) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
        f = biShiftRight(f, 1),
        0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
    this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
    this.mu = biDivide(b, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
    i = biCompare(h, this.modulus) >= 0; i; )
        h = biSubtract(h, this.modulus),
        i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
    d = a,
    e = b; ; ) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
        e = biShiftRight(e, 1),
        0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20),
dpl10 = 15,
lr10 = biFromNumber(1e15),
hexatrigesimalToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"),
hexToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),
highBitMasks = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535),
lowBitMasks = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);
!function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)
          , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        console.log('params:',a,b)
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}
          , i = a(16);
        i = "u3wFl5eFwTWI7dHF";
        var _encSecKey = '1eb2800c1605520f6c62e45a3e7eb9a3d331a4f1491618e4c52c029fd29a2b8535dc58708ce099817dd52b4bb1c9b5243f734dd0236849fd0b2c912aa49fab35659cd72d6633850d121b824237b18b3485e2c36cef52a270fb177aa17b2c7a865a836263a6db440eb1e6cd4a6066a0e379715d78b4b1caacaec76f45ce8a4e28'
        console.log("i :", i)
        console.log("encSeckey :", c(i, e, f));
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
            h.encSecKey = _encSecKey,
        h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
}();
(function() {
    var c9h = NEJ.P
      , eq1x = c9h("nej.g")
      , v9m = c9h("nej.j")
      , k9b = c9h("nej.u")
      , Ua6U = c9h("nm.x.ek");
    Ua6U.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Ua6U.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
}
)();
(function() {
    console.log("test")
    var c9h = NEJ.P
      , eq1x = c9h("nej.g")
      , v9m = c9h("nej.j")
      , k9b = c9h("nej.u")
      , Ua6U = c9h("nm.x.ek")
      , l9c = c9h("nm.x");
    if (v9m.bk0x.redefine)
        return;
    window.GEnc = true;
    var brX3x = function(crL6F) {
        var m9d = [];
        k9b.bd0x(crL6F, function(crK6E) {
            m9d.push(Ua6U.emj[crK6E])
        });
        return m9d.join("")
    };
    // console.log(brX3x(["流泪", "强"]), brX3x(Ua6U.md), brX3x(["爱心", "女孩", "惊恐", "大笑"]));
    console.log(window.asrsea(JSON.stringify({ test: 'test' }), brX3x(["流泪", "强"]), brX3x(Ua6U.md), brX3x(["爱心", "女孩", "惊恐", "大笑"])))
    var crH6B = v9m.bk0x;
    v9m.bk0x = function(Y0x, e9f) {
        var i9b = {}
          , e9f = NEJ.X({}, e9f)
          , lL4P = Y0x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y0x) && !(e9f.headers && e9f.headers[eq1x.yH8z] == eq1x.Ht1x) && !e9f.noEnc) {
            if (lL4P != -1) {
                i9b = k9b.hf2x(Y0x.substring(lL4P + 1));
                Y0x = Y0x.substring(0, lL4P)
            }
            if (e9f.query) {
                i9b = NEJ.X(i9b, k9b.fJ2x(e9f.query) ? k9b.hf2x(e9f.query) : e9f.query)
            }
            if (e9f.data) {
                i9b = NEJ.X(i9b, k9b.fJ2x(e9f.data) ? k9b.hf2x(e9f.data) : e9f.data)
            }
            i9b["csrf_token"] = v9m.gI2x("__csrf");
            Y0x = Y0x.replace("api", "weapi");
            e9f.method = "post";
            delete e9f.query;
            var bRB0x = window.asrsea(JSON.stringify(i9b), brX3x(["流泪", "强"]), brX3x(Ua6U.md), brX3x(["爱心", "女孩", "惊恐", "大笑"]));
            console.log('test')
            console.log(brX3x(["流泪", "强"]), brX3x(Ua6U.md), brX3x(["爱心", "女孩", "惊恐", "大笑"]));
            e9f.data = k9b.cz0x({
                params: bRB0x.encText,
                encSecKey: bRB0x.encSecKey
            })
          }
        crH6B(Y0x, e9f)
    }
    ;
    v9m.bk0x.redefine = true
}
)();
(function() {
    window.setTimeout(function() {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi))
            return;
        var getNode = function(tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue)
                return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow")
            return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href)
            canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL)
            canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
}
)();
(function() {}
)();
(function() {}
)();
(function() {
    var c9h = NEJ.P
      , a8i = c9h("nej.e")
      , dz1x = c9h("nej.p")
      , k9b = c9h("nej.u")
      , h9c = c9h("nej.v")
      , v9m = c9h("nej.j")
      , dE1x = c9h("nm.u")
      , l9c = c9h("nm.x")
      , q9h = c9h("nm.d")
      , n9e = c9h("nm.l")
      , cw0x = c9h("nm.pc")
      , bsl3x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png"
      , i9b = {
        "大笑": "86",
        "可爱": "85",
        "憨笑": "359",
        "色": "95",
        "亲亲": "363",
        "惊恐": "96",
        "流泪": "356",
        "亲": "362",
        "呆": "352",
        "哀伤": "342",
        "呲牙": "343",
        "吐舌": "348",
        "撇嘴": "353",
        "怒": "361",
        "奸笑": "341",
        "汗": "97",
        "痛苦": "346",
        "惶恐": "354",
        "生病": "350",
        "口罩": "351",
        "大哭": "357",
        "晕": "355",
        "发怒": "115",
        "开心": "360",
        "鬼脸": "94",
        "皱眉": "87",
        "流感": "358",
        "爱心": "33",
        "心碎": "34",
        "钟情": "303",
        "星星": "309",
        "生气": "314",
        "便便": "89",
        "强": "13",
        "弱": "372",
        "拜": "14",
        "牵手": "379",
        "跳舞": "380",
        "禁止": "374",
        "这边": "262",
        "爱意": "106",
        "示爱": "376",
        "嘴唇": "367",
        "狗": "81",
        "猫": "78",
        "猪": "100",
        "兔子": "459",
        "小鸡": "450",
        "公鸡": "461",
        "幽灵": "116",
        "圣诞": "411",
        "外星": "101",
        "钻石": "52",
        "礼物": "107",
        "男孩": "0",
        "女孩": "1",
        "蛋糕": "337",
        18: "186",
        "圈": "312",
        "叉": "313"
    }
      , crD6x = function() {
        if (h9c && h9c.z9q) {
            h9c.dispatchEventalias = h9c.z9q
        }
    };
    crD6x();
    l9c.bsp3x = function(bP0x) {
        if (!bP0x || bP0x.copyrightId === undefined || !!bP0x.program)
            return false;
        if (window.GAbroad) {
            bP0x.fee = 0;
            return true
        }
        if (bP0x.status < 0)
            return true;
        var TQ6K;
        if (typeof GCopyrights !== "undefined")
            TQ6K = GCopyrights;
        try {
            if (!TQ6K && !!top.GCopyrights)
                TQ6K = top.GCopyrights
        } catch (e) {}
        if (TQ6K) {
            var r9i = k9b.dm1x(TQ6K, bP0x.copyrightId);
            if (r9i >= 0)
                return true
        }
        return false
    }
    ;
    l9c.bsv3x = function() {
        var Bf9W = /^\/m\/(song|album|artist|playlist|dj|search)\?/
          , xa8S = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }
          , crC6w = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var crB6v = function(L0x, i9b, TO6I) {
            switch (L0x) {
            case "event":
                i9b = i9b.split("|");
                return "/event?id=" + i9b[0] + "&uid=" + i9b[1];
            case "searchsong":
            case "searchlyric":
                var u9l = L0x == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(i9b) + "&type=" + u9l;
            case "toplist":
                return "/discover/toplist?id=" + i9b + "&_hash=songlist-" + TO6I;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + TO6I;
                ;
            case "record":
                i9b = i9b.split("|");
                return "/user/songs/rank?id=" + i9b[0] + "&cat=" + i9b[1];
                break;
            default:
                return "/" + L0x + "?id=" + i9b + "&_hash=songlist-" + TO6I
            }
        };
        return function(ei1x, TO6I) {
            if (!ei1x)
                return null;
            var LY2x = ei1x.fid || (ei1x.type != 18 ? ei1x.type : null)
              , btc3x = ei1x.fdata || ei1x.rid
              , bRA0x = ei1x.page || ei1x.fhref;
            var L0x = xa8S[LY2x];
            if (!L0x) {
                var AJ9A = (bRA0x || "").match(Bf9W);
                if (AJ9A)
                    L0x = AJ9A[1]
            }
            if (!L0x)
                return null;
            return {
                title: crC6w[L0x],
                link: !xa8S[LY2x] ? bRA0x : crB6v(L0x, btc3x, TO6I),
                fid: LY2x,
                fdata: btc3x
            }
        }
    }();
    l9c.bab8T = function(kD3x) {
        var dp1x = kD3x;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            dp1x = GUser;
        return dp1x
    }
    ;
    l9c.gZ2x = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    }
    ;
    l9c.LJ2x = function() {
        var Bf9W = /#(.*?)$/;
        return function(gG2x) {
            var jQ3x = gG2x === false ? location : top.location;
            return Bf9W.test(jQ3x.href) ? RegExp.$1 : ""
        }
    }();
    l9c.DH0x = function() {
        var DC0x = a8i.dk1x("audio")
          , cry6s = DC0x.canPlayType && DC0x.canPlayType("audio/mpeg");
        if (cry6s)
            return 2;
        var crx6r = l9c.btS3x().supported;
        if (crx6r)
            return 1;
        return 0
    }
    ;
    l9c.btS3x = function() {
        var gE2x, bub3x = !1, bud3x = "";
        if (dz1x.ds1x.browser == "ie") {
            try {
                gE2x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gE2x = null
            }
            if (gE2x) {
                bub3x = !0;
                bud3x = gE2x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gE2x = navigator.plugins["Shockwave Flash"];
                if (gE2x) {
                    bub3x = !0;
                    bud3x = gE2x.description
                }
            }
        }
        return {
            supported: bub3x,
            version: bud3x
        }
    }
    ;
    l9c.sb6V = function() {
        return "网易云音乐"
    }
    ;
    l9c.crw6q = function() {
        return i9b
    }
    ;
    l9c.bRz0x = function(cL1x) {
        var D0x = i9b[cL1x];
        return D0x == null ? "" : bsl3x.replace("{ID}", D0x)
    }
    ;
    l9c.xo8g = function(bp0x, ef1x, Df9W) {
        if (!bp0x)
            return "";
        if (!!Df9W) {
            bp0x = l9c.cru6o(bp0x)
        }
        return l9c.bay8q(l9c.crt6n(bp0x, ef1x))
    }
    ;
    l9c.baz8r = function() {
        var VH6B = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }
          , buP4T = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }
          , crr6l = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }
          , cro6i = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var crn6h = function(dL1x, bvc4g) {
            dL1x = JM1x(dL1x);
            if (!!bvc4g) {
                dL1x = dL1x.replace(VH6B.MLINE, "\n\n").replace(VH6B.LING, "</br>")
            }
            dL1x = l9c.bay8q(dL1x);
            return dL1x
        };
        var JM1x = function(bp0x) {
            return k9b.BI9z(crr6l, bp0x)
        };
        return function(dL1x, e9f, dF1x) {
            e9f = e9f || {};
            dF1x = dF1x || {};
            dF1x.actHash = {};
            var crm6g = !!e9f.parseLink
              , crl6f = !!e9f.parseAct
              , crk6e = e9f.linkTpl || buP4T.LINK
              , crj6d = e9f.atTpl || buP4T.AT
              , cri6c = e9f.atUrl || "/user/home?nickname="
              , crh6b = e9f.actTpl || buP4T.ACT
              , bvc4g = !!e9f.keepSpace
              , bvP4T = e9f.linkKlass || "s-fc7";
            cIo0x = e9f.actBiJson || "";
            if (!dL1x)
                return "";
            dL1x = dL1x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lV4Z = cro6i[crm6g + 2 * crl6f]
              , dh1x = VH6B[lV4Z]
              , bt0x = null
              , kc3x = null
              , gA2x = 0
              , cIp0x = ""
              , cIq0x = "";
            var qL5Q = [];
            dh1x.lastIndex = 0;
            while (bt0x = dh1x.exec(dL1x)) {
                var dS1x = {
                    html: "",
                    before: bt0x.index - 1,
                    after: bt0x.index + bt0x[0].length
                };
                if (bt0x[1]) {
                    var kc3x = bt0x[2].replace(/[^\x00-\xff]/g, "**");
                    if (kc3x.length < 4 || kc3x.length > 32) {} else {
                        var Id1x = a8i.ey1x(crj6d);
                        dS1x.html = a8i.cc0x(Id1x, {
                            value: JM1x(bt0x[2]),
                            url: encodeURI(cri6c + bt0x[2]),
                            klass: bvP4T
                        });
                        qL5Q.push(dS1x)
                    }
                } else if (bt0x.length > 8 && bt0x[4]) {
                    var Id1x = a8i.ey1x(crk6e);
                    dS1x.html = a8i.cc0x(Id1x, {
                        value: JM1x(bt0x[4]),
                        url: bt0x[4],
                        klass: bvP4T
                    });
                    qL5Q.push(dS1x)
                } else {
                    var bRt0x = lV4Z == "ACT_NOLINK" ? 4 : 9;
                    var Id1x = a8i.ey1x(crh6b);
                    dS1x.html = a8i.cc0x(Id1x, {
                        value: JM1x(bt0x[bRt0x]),
                        klass: bvP4T
                    });
                    qL5Q.push(dS1x);
                    dF1x.actHash[bt0x[bRt0x].slice(1, -1)] = true
                }
            }
            var bwA4E = qL5Q.length
              , kD3x = {
                before: dL1x.length - 1,
                after: 0
            }
              , bwG4K = "";
            for (var i = 0; i <= bwA4E; i++) {
                var hD2x, fZ2x;
                hD2x = (qL5Q[i - 1] || kD3x).after;
                fZ2x = (qL5Q[i] || kD3x).before;
                if (fZ2x >= hD2x && hD2x >= 0 && fZ2x <= dL1x.length - 1) {
                    bwG4K += crn6h(dL1x.substring(hD2x, fZ2x + 1), bvc4g)
                }
                if (qL5Q[i]) {
                    bwG4K += qL5Q[i].html
                }
            }
            return bwG4K
        }
    }();
    l9c.cru6o = function() {
        var dh1x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?","g");
        return function(bp0x) {
            return (bp0x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dh1x, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l9c.crt6n = function() {
        var dh1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ez1x = function(kc3x, ef1x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(kc3x) + '" class="' + (ef1x || "") + '">@' + kc3x + "</a>"
        };
        return function(bp0x, ef1x) {
            return (bp0x || "").replace(dh1x, function($0, $1) {
                return ez1x($1, ef1x)
            })
        }
    }();
    l9c.bay8q = function() {
        var dh1x = /\[(.*?)\]/g;
        return function(bp0x) {
            return (bp0x || "").replace(dh1x, function($1, $2) {
                var Y0x = l9c.bRz0x($2);
                return !Y0x ? $1 : '<img src="' + Y0x + '"/>'
            })
        }
    }();
    l9c.Dr0x = function(G0x, ef1x) {
        a8i.bE0x(G0x, ef1x) ? a8i.y9p(G0x, ef1x) : a8i.w9n(G0x, ef1x)
    }
    ;
    l9c.MP2x = function(cE1x, lm3x) {
        cE1x = a8i.B9s(cE1x);
        lm3x = a8i.B9s(lm3x);
        if (!cE1x || !lm3x)
            return !1;
        for (lm3x = lm3x.parentNode; !!lm3x && lm3x != cE1x; lm3x = lm3x.parentNode)
            ;
        return lm3x == cE1x
    }
    ;
    l9c.lC4G = function() {
        var bRr0x = function(hk2x) {
            return (hk2x < 10 ? "0" : "") + hk2x
        };
        return function(kO3x) {
            kO3x = parseInt(kO3x) || 0;
            if (!kO3x)
                return "00:00";
            var zx8p = Math.floor(kO3x % 60)
              , cqX6R = Math.floor(kO3x / 60);
            return bRr0x(cqX6R) + ":" + bRr0x(zx8p)
        }
    }();
    l9c.zu8m = function(gh2x, xl8d) {
        if (!gh2x || gh2x.length == 0)
            return "";
        xl8d = xl8d || "/";
        var bt0x = [];
        for (var i = gh2x.length - 1; i >= 0; i--) {
            bt0x.unshift(gh2x[i].name)
        }
        return bt0x.join(xl8d)
    }
    ;
    l9c.sG6A = function() {
        var Se5j = function(il3x, ef1x, cE1x, bcl9c) {
            var ez1x = bcl9c ? l9c.bxD4H : k9b.dI1x;
            if (!il3x || !il3x.name)
                return "";
            if (!il3x.id)
                return '<span class="' + ef1x + '">' + ez1x(il3x.name) + "</span>";
            return "<a" + (cE1x ? ' target="_blank"' : "") + ' class="' + ef1x + '" href="/artist?id=' + il3x.id + '" hidefocus="true">' + ez1x(il3x.name) + "</a>"
        };
        return function(gh2x, W0x, xl8d, cE1x, bRq0x, bcl9c) {
            if (!gh2x || !gh2x.length)
                return "";
            xl8d = xl8d || "/";
            W0x = W0x || "";
            LD2x = "";
            var es1x = [];
            for (var i = 0, j9a = [], tJ6D = [], fY2x; i < gh2x.length; ++i) {
                es1x.push(gh2x[i].name);
                if (!gh2x[i] || gh2x[i].id <= 0) {
                    tJ6D.push(gh2x[i]);
                    continue
                }
                if (k9b.gO2x(W0x)) {
                    fY2x = W0x(gh2x[i])
                } else {
                    fY2x = Se5j(gh2x[i], W0x, cE1x, bcl9c)
                }
                if (fY2x && bRq0x && gh2x[i].tns && gh2x[i].tns.length > 0) {
                    LD2x = k9b.dI1x(gh2x[i].tns[0]);
                    fY2x += '<span class="s-fc8" title="' + LD2x + '"> - (' + LD2x + ")</span>"
                }
                !!fY2x && j9a.push(fY2x)
            }
            for (var i = 0, fY2x; i < tJ6D.length; ++i) {
                if (k9b.gO2x(W0x)) {
                    fY2x = W0x(tJ6D[i])
                } else {
                    fY2x = Se5j(tJ6D[i], W0x, cE1x, bcl9c)
                }
                if (fY2x && bRq0x && tJ6D[i].tns && tJ6D[i].tns.length > 0) {
                    LD2x = k9b.dI1x(tJ6D[i].tns[0]);
                    fY2x += '<span class="s-fc8" title="' + LD2x + '"> - (' + LD2x + ")</span>"
                }
                !!fY2x && j9a.push(fY2x)
            }
            return '<span title="' + es1x.join(xl8d) + '">' + j9a.join(xl8d) + "</span>"
        }
    }();
    l9c.zo8g = function(fG2x, pX5c) {
        pX5c = pX5c || "86";
        return !!fG2x && (pX5c == "86" ? /^\d{11}$/ : /^\d+$/).test(fG2x)
    }
    ;
    l9c.cIr0x = function(fG2x) {
        if (!l9c.zo8g(fG2x))
            return fG2x;
        return fG2x.substring(0, 3) + "****" + fG2x.substr(7)
    }
    ;
    l9c.kp3x = function() {
        var dh1x = /^\s+$/g;
        return function(im3x) {
            return !im3x || dh1x.test(im3x)
        }
    }();
    l9c.RU5Z = function() {
        var bye4i = /[^\x00-\xfff]/g;
        return function(im3x) {
            var cqU6O = im3x.match(bye4i) || []
              , dt1x = cqU6O.length;
            return im3x.length + dt1x
        }
    }();
    l9c.DJ0x = function() {
        var bye4i = /[^\x00-\xfff]/;
        return function(im3x, eI1x) {
            for (var i = 0, len = im3x.length; i < len && eI1x > 0; i++) {
                if (bye4i.test(im3x.charAt(i))) {
                    eI1x -= 2;
                    if (eI1x < 0) {
                        break
                    }
                } else {
                    eI1x -= 1
                }
            }
            return im3x.substring(0, i)
        }
    }();
    l9c.DD0x = function(im3x, eI1x, Ov4z) {
        eI1x = eI1x || 10;
        Ov4z = Ov4z || nej.p.ds1x.engine == "trident" && parseInt(nej.p.ds1x.release) < 5;
        if (Ov4z && l9c.RU5Z(im3x) > eI1x) {
            return l9c.DJ0x(im3x, eI1x) + "..."
        } else {
            return im3x
        }
    }
    ;
    l9c.bRp0x = function(g9d) {
        return g9d === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g9d.type || g9d.href || ~g9d.tabIndex)
    }
    ;
    l9c.cqS6M = function(d9g, cE1x) {
        if (!d9g || !cE1x)
            return !0;
        var g9d, u9l = d9g.type.toLowerCase();
        if (u9l == "mouseout") {
            g9d = d9g.relatedTarget || d9g.toElement
        } else if (u9l == "mouseover") {
            g9d = d9g.relatedTarget || d9g.fromElement
        }
        return !g9d || g9d !== cE1x && !l9c.MP2x(cE1x, g9d)
    }
    ;
    l9c.ug6a = function() {
        R0x = {};
        return function(g9d, eg1x) {
            var D0x = a8i.lQ4U(g9d)
              , L0x = "hover-" + D0x;
            if (!eg1x || !D0x || !!R0x[L0x])
                return;
            R0x[L0x] = !0;
            h9c.s9j(D0x, "mouseover", function() {
                var byz4D = a8i.E0x(g9d, "hshow") || [];
                var byB4F = a8i.E0x(g9d, "icn-dislike") || [];
                a8i.w9n(D0x, "z-hover");
                a8i.ba0x(byz4D[0], "display", "block");
                a8i.ba0x(byB4F[0], "display", "block")
            });
            h9c.s9j(D0x, "mouseout", function() {
                var byz4D = a8i.E0x(g9d, "hshow") || [];
                var byB4F = a8i.E0x(g9d, "icn-dislike") || [];
                a8i.y9p(D0x, "z-hover");
                a8i.ba0x(byz4D[0], "display", "none");
                a8i.ba0x(byB4F[0], "display", "none")
            })
        }
    }();
    l9c.bRo0x = function() {
        var bz0x = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(im3x) {
            return k9b.BI9z(bz0x, im3x)
        }
    }();
    l9c.zm8e = function(bA0x) {
        if (k9b.HW1x(bA0x))
            bA0x = bA0x.getTime();
        var fb2x = new Date
          , ku3x = fb2x.getTime() - bA0x;
        if (ku3x <= 6e4)
            return "刚刚";
        var nU4Y = fb2x.getHours() * 36e5 + fb2x.getMinutes() * 6e4 + fb2x.getSeconds() * 1e3;
        if (ku3x <= nU4Y) {
            if (ku3x < 36e5) {
                var FW0x = Math.floor(ku3x / 6e4);
                return FW0x + "分钟前"
            }
            return k9b.id3x(bA0x, "HH:mm")
        } else {
            if (ku3x < nU4Y + 864e5) {
                return "昨天" + k9b.id3x(bA0x, "HH:mm")
            } else {
                var gX2x = fb2x.getFullYear()
                  , RQ5V = new Date(gX2x,0,1);
                var nU4Y = fb2x.getTime() - RQ5V.getTime();
                if (ku3x < nU4Y) {
                    return k9b.id3x(bA0x, "M月d日 HH:mm")
                }
                return k9b.id3x(bA0x, "yyyy年M月d日")
            }
        }
    }
    ;
    l9c.cqQ6K = function(bA0x) {
        if (k9b.HW1x(bA0x))
            bA0x = bA0x.getTime();
        var fb2x = new Date
          , ku3x = fb2x.getTime() - bA0x;
        var nU4Y = fb2x.getHours() * 36e5 + fb2x.getMinutes() * 6e4 + fb2x.getSeconds() * 1e3;
        if (ku3x <= nU4Y) {
            return "今天" + k9b.id3x(bA0x, "HH:mm")
        } else {
            if (ku3x < nU4Y + 864e5) {
                return "昨天" + k9b.id3x(bA0x, "HH:mm")
            } else {
                return k9b.id3x(bA0x, "yy-MM-dd HH:mm")
            }
        }
    }
    ;
    l9c.cqP6J = function(bA0x) {
        if (k9b.HW1x(bA0x))
            bA0x = bA0x.getTime();
        var fb2x = new Date
          , ku3x = fb2x.getTime() - bA0x;
        if (ku3x <= 6e4)
            return "刚刚";
        var nU4Y = fb2x.getHours() * 36e5 + fb2x.getMinutes() * 6e4 + fb2x.getSeconds() * 1e3;
        if (ku3x <= nU4Y) {
            if (ku3x < 36e5) {
                var FW0x = Math.floor(ku3x / 6e4);
                return FW0x + "分钟前"
            }
            return k9b.id3x(bA0x, "HH:mm")
        } else {
            if (ku3x < nU4Y + 864e5) {
                return "昨天" + k9b.id3x(bA0x, "HH:mm")
            } else if (ku3x < nU4Y + 864e5 * 6) {
                var gX2x = fb2x.getFullYear()
                  , RQ5V = new Date(gX2x,0,1);
                var nU4Y = fb2x.getTime() - RQ5V.getTime();
                if (ku3x < nU4Y) {
                    return k9b.id3x(bA0x, "M月d日 HH:mm")
                }
                return k9b.id3x(bA0x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    }
    ;
    l9c.bcU9L = function() {
        var dh1x = /\{(.*?)\}/gi;
        return function(ph5m, i9b) {
            return (ph5m || "").replace(dh1x, function($1, $2) {
                var C0x = i9b[$2];
                return C0x == null ? $1 : C0x
            })
        }
    }();
    l9c.fp2x = function() {
        var bh0x = Array.prototype.slice.call(arguments, 0)
          , ph5m = bh0x.shift();
        if (ph5m) {
            return ph5m.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bh0x.length ? bh0x[$2] : $1
            })
        }
        return ""
    }
    ;
    l9c.Kb2x = function(j9a, ef1x, kB3x) {
        return "";
        kB3x = kB3x || " - ";
        if (j9a && j9a.length) {
            return kB3x + (!!ef1x ? '<span class="' + ef1x + '">' + j9a[0] + "</span>" : j9a[0])
        }
        return ""
    }
    ;
    l9c.bRn0x = function() {
        if (window.getSelection) {
            var tc6W = window.getSelection();
            if (tc6W && tc6W.focusNode && tc6W.focusNode.tagName) {
                var qO5T = a8i.df1x(tc6W.focusNode);
                for (var i = 0, yY8Q; i < qO5T.length; ++i) {
                    yY8Q = qO5T[i].tagName;
                    if (!yY8Q)
                        continue;
                    yY8Q = yY8Q.toLowerCase();
                    if (yY8Q == "textarea" || yY8Q == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var de1x = document.selection.createRange();
            if (de1x) {
                var g9d = de1x.parentElement();
                if (g9d && g9d.tagName) {
                    var yY8Q = g9d.tagName.toLowerCase();
                    if (yY8Q == "textarea" || yY8Q == "input")
                        return !0
                }
            }
        }
        return !1
    }
    ;
    l9c.BU9L = function(fH2x) {
        if (/^[A-Z]\:\\/i.test(fH2x)) {
            fH2x = fH2x.split("\\")
        } else {
            fH2x = fH2x.split("/")
        }
        fH2x = fH2x[fH2x.length - 1];
        return fH2x
    }
    ;
    l9c.cqN6H = function() {
        var Iy1x = [13, 17, 34, 19, 18, 21];
        return function(D0x) {
            var bt0x = (D0x || "").split("_");
            return {
                type: Iy1x[bt0x[2]] || -1,
                id: bt0x[3] || ""
            }
        }
    }();
    l9c.bRm0x = function(gE2x) {
        if (!gE2x) {
            return true
        }
        for (var k in gE2x) {
            return false
        }
        return true
    }
    ;
    l9c.bgS0x = function(dp1x) {
        if (!dp1x) {
            return ""
        }
        if (4 == dp1x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp1x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp1x.expertTags && dp1x.expertTags.length || !l9c.bRm0x(dp1x.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    }
    ;
    l9c.Rc5h = function(hr2x) {
        if (!hr2x)
            return "";
        var dt1x = hr2x.length
          , iz3x = [];
        iz3x[0] = dt1x / 3 | 0;
        iz3x[1] = iz3x[0] + ((dt1x - iz3x[0]) / 2 | 0);
        return hr2x.substring(0, iz3x[0]) + hr2x.substring(iz3x[0], iz3x[1]).replace(/\d/g, "*") + hr2x.substring(iz3x[1], dt1x)
    }
    ;
    l9c.cIs0x = function(r9i, cB0x) {
        return (r9i % cB0x + cB0x) % cB0x
    }
    ;
    l9c.bhc0x = function() {
        var Iy1x = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(D0x) {
            var bt0x = (D0x || "").split("_")
              , m9d = {
                type: Iy1x[bt0x[2]] || -1,
                id: bt0x[3] || ""
            };
            if (m9d.type == "event") {
                m9d.uid = bt0x[4] || "";
                return "/" + m9d.type + "?id=" + m9d.id + "&uid=" + m9d.uid
            }
            return "/" + m9d.type + "?id=" + m9d.id
        }
    }();
    l9c.bhd0x = function() {
        var Iy1x = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(D0x) {
            var bt0x = (D0x || "").split("_");
            return Iy1x[bt0x[2]] || "资源"
        }
    }();
    l9c.cqI6C = function(bv0x) {
        var qs = bv0x.length > 0 ? bv0x.substring(1) : ""
          , args = {}
          , items = qs.length ? qs.split("&") : []
          , item = null
          , name = null
          , value = null
          , i = 0
          , len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    }
    ;
    l9c.bhg0x = function(oF4J, QV5a) {
        var bdv9m = 0
          , eA1x = new Array;
        k9b.bd0x(oF4J, function(Y0x, r9i) {
            var cx0x = a8i.dk1x("img");
            cx0x.src = Y0x;
            h9c.s9j(cx0x, "load", function(r9i, d9g) {
                eA1x[r9i] = 1;
                bdv9m++;
                if (bdv9m == oF4J.length)
                    QV5a(oF4J, eA1x)
            }
            .f9e(this, r9i));
            h9c.s9j(cx0x, "error", function(d9g, r9i) {
                eA1x[r9i] = 0;
                bdv9m++;
                if (bdv9m == oF4J.length)
                    QV5a(oF4J, eA1x)
            }
            .f9e(this, r9i))
        })
    }
    ;
    l9c.NL3x = function(j9a, ed1x) {
        var m9d = [];
        k9b.bd0x(j9a, function(p9g, r9i, P0x) {
            m9d.push(ed1x(p9g, r9i, P0x))
        });
        return m9d
    }
    ;
    l9c.bbE9v = function(j9a, ed1x, P0x) {
        var m9d = [];
        k9b.bd0x(j9a, function(p9g, r9i) {
            if (ed1x.call(P0x, p9g, r9i, j9a)) {
                m9d.push(p9g)
            }
        });
        return m9d
    }
    ;
    l9c.bRk0x = function(bp0x) {
        return k9b.dI1x((bp0x || "").replace(/\s{2,}/g, " ").trim())
    }
    ;
    var cqG6A = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l9c.cqF6z = function(bp0x) {
        return k9b.BI9z(cqG6A, bp0x)
    }
    ;
    l9c.bhv0x = function(bl0x) {
        if (bl0x.transNames && bl0x.transNames.length) {
            return bl0x.transNames[0]
        } else if (bl0x.alias && bl0x.alias.length) {
            return bl0x.alias[0]
        }
    }
    ;
    l9c.bhI0x = function(Wx7q) {
        if (Wx7q) {
            return Wx7q.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    }
    ;
    l9c.bhJ0x = function(g9d) {
        var g9d = a8i.B9s(g9d)
          , cL1x = g9d && g9d.getElementsByTagName("textarea")[0]
          , L0x = a8i.t9k(g9d, "key")
          , bhL0x = a8i.t9k(g9d, "simple") == "1"
          , cqE6y = a8i.t9k(g9d, "pvnamed") == "1"
          , bhW0x = q9h.wt7m.fR2x();
        if (!(g9d && cL1x && L0x))
            return;
        var bdA9r, bie0x, bdH9y;
        bdA9r = a8i.E0x(a8i.B9s("m-playlist"), "j-img");
        k9b.bd0x(bdA9r, function(ja3x) {
            if (!bdH9y && a8i.t9k(ja3x, "key")) {
                bdH9y = a8i.t9k(ja3x, "key");
                ja3x.removeAttribute("data-key")
            }
        });
        bdA9r = a8i.E0x(a8i.B9s("m-playlist"), "m-info");
        k9b.bd0x(bdA9r, function(ja3x) {
            if (!bie0x && ja3x.id && ja3x.id.indexOf("auto-id-") == 0) {
                bie0x = ja3x.id.slice(8, 12)
            }
        });
        var C0x = cL1x.value || cL1x.defaultValue;
        if (bdH9y) {
            C0x = decodeURIComponent(k9b.cqD6x(C0x, "param=" + bie0x + bdH9y))
        }
        C0x = JSON.parse(C0x);
        if (cqE6y) {
            l9c.cqC6w(C0x)
        }
        if (bhL0x) {
            C0x = l9c.Cz9q(C0x)
        }
        bhW0x.uJ7C(L0x, C0x);
        g9d.innerHTML = "";
        return L0x
    }
    ;
    l9c.cqB6v = function(pZ5e) {
        if (!pZ5e.onbeforelistload) {
            pZ5e.onbeforelistload = function(d9g) {
                d9g.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pZ5e.onemptylist) {
            pZ5e.onemptylist = function(d9g) {
                d9g.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pZ5e.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pZ5e
    }
    ;
    l9c.cqC6w = function(hG2x) {
        k9b.bd0x(hG2x, function(bP0x) {
            bP0x.privilege = bP0x.pv;
            delete bP0x.pv
        })
    }
    ;
    l9c.Cz9q = function(iw3x) {
        if (k9b.ec1x(iw3x)) {
            var dF1x = [];
            k9b.bd0x(iw3x, function(bhL0x) {
                dF1x.push(bRj0x(bhL0x))
            });
            return dF1x
        } else {
            return bRj0x(iw3x)
        }
        function bRj0x(iw3x) {
            if (!iw3x)
                return null;
            var dF1x = {
                album: iw3x.al,
                alias: iw3x.alia || iw3x.ala || [],
                artists: iw3x.ar || [],
                commentThreadId: "R_SO_4_" + iw3x.id,
                copyrightId: iw3x.cp || 0,
                duration: iw3x.dt || 0,
                id: iw3x.id,
                mvid: iw3x.mv || 0,
                name: iw3x.name || "",
                cd: iw3x.cd,
                position: iw3x.no || 0,
                ringtone: iw3x.rt,
                rtUrl: iw3x.rtUrl,
                status: iw3x.st || 0,
                pstatus: iw3x.pst || 0,
                fee: iw3x.fee || 0,
                version: iw3x.v || 0,
                eq: iw3x.eq,
                songType: iw3x.t || 0,
                mst: iw3x.mst,
                score: iw3x.pop || 0,
                ftype: iw3x.ftype,
                rtUrls: iw3x.rtUrls,
                transNames: iw3x.tns,
                privilege: iw3x.privilege,
                lyrics: iw3x.lyrics
            };
            return dF1x
        }
    }
    ;
    l9c.cIt0x = function() {
        var g9d = a8i.nY4c('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g9d);
        h9c.s9j(g9d, "click", function(d9g) {
            h9c.bf0x(d9g);
            a8i.cO1x(g9d)
        })
    }
    ;
    l9c.iQ3x = function(cA0x) {
        if (cA0x < 1e5) {
            return cA0x
        } else if (cA0x < 1e8) {
            return Math.floor(cA0x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cA0x / 1e7) / 10 + "亿"
        }
    }
    ;
    l9c.vE7x = function(cA0x, cL1x) {
        return "<i>" + (cA0x ? "(" + cA0x + ")" : cL1x) + "</i>"
    }
    ;
    l9c.bRh0x = function(u9l, ik3x) {
        var e9f = {};
        if (!k9b.lY4c(ik3x)) {
            return e9f
        }
        switch (parseInt(u9l)) {
        case 17:
            e9f.title = ik3x.name;
            e9f.author = (ik3x.radio || []).name;
            e9f.picUrl = ik3x.coverUrl;
            e9f.category = ik3x.radio.category;
            break;
        case 19:
            e9f.title = ik3x.name;
            e9f.author = l9c.zu8m(ik3x.artists);
            e9f.authors = l9c.zu8m(ik3x.artists, " / ");
            e9f.picUrl = ik3x.picUrl;
            break;
        case 13:
            e9f.title = ik3x.name;
            e9f.author = (ik3x.creator || []).nickname;
            e9f.picUrl = ik3x.coverImgUrl;
            break;
        case 18:
            e9f.title = ik3x.name;
            e9f.author = l9c.zu8m(ik3x.artists);
            e9f.picUrl = (ik3x.album || []).picUrl;
            break;
        case 20:
            e9f.title = ik3x.name;
            e9f.author = "";
            e9f.picUrl = ik3x.img1v1Url;
            break;
        case 21:
            e9f.title = ik3x.name;
            e9f.author = ik3x.artistName;
            e9f.authors = l9c.zu8m(ik3x.artists, " / ");
            e9f.picUrl = ik3x.newCover || ik3x.cover;
            break;
        case 70:
            e9f.title = ik3x.name;
            e9f.author = (ik3x.dj || []).nickname;
            e9f.picUrl = ik3x.picUrl;
            e9f.category = ik3x.category;
            break;
        default:
            break
        }
        return e9f
    }
    ;
    l9c.bRg0x = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    }
    ;
    l9c.Qp4t = function(ez1x, oA4E, e9f) {
        var bK0x, bh0x, m9d;
        var hd2x = null;
        var vK7D = 0;
        if (!e9f)
            e9f = {};
        var yr8j = function() {
            vK7D = e9f.leading === false ? 0 : +(new Date);
            hd2x = null;
            m9d = ez1x.apply(bK0x, bh0x);
            if (!hd2x)
                bK0x = bh0x = null
        };
        return function() {
            var fb2x = +(new Date);
            if (!vK7D && e9f.leading === false)
                vK7D = fb2x;
            var Hd1x = oA4E - (fb2x - vK7D);
            bK0x = this;
            bh0x = arguments;
            if (Hd1x <= 0 || Hd1x > oA4E) {
                if (hd2x) {
                    clearTimeout(hd2x);
                    hd2x = null
                }
                vK7D = fb2x;
                m9d = ez1x.apply(bK0x, bh0x);
                if (!hd2x)
                    bK0x = bh0x = null
            } else if (!hd2x && e9f.trailing !== false) {
                hd2x = setTimeout(yr8j, Hd1x)
            }
            return m9d
        }
    }
    ;
    l9c.KN2x = function(ez1x, oA4E, pb5g) {
        var hd2x, bh0x, bK0x, Dw0x, m9d;
        var yr8j = function() {
            var gA2x = new Date - Dw0x;
            if (gA2x < oA4E && gA2x >= 0) {
                hd2x = setTimeout(yr8j, oA4E - gA2x)
            } else {
                hd2x = null;
                if (!pb5g) {
                    m9d = ez1x.apply(bK0x, bh0x);
                    if (!hd2x)
                        bK0x = bh0x = null
                }
            }
        };
        return function() {
            bK0x = this;
            bh0x = arguments;
            Dw0x = new Date;
            var PZ4d = pb5g && !hd2x;
            if (!hd2x)
                hd2x = setTimeout(yr8j, oA4E);
            if (PZ4d) {
                m9d = ez1x.apply(bK0x, bh0x);
                bK0x = bh0x = null
            }
            return m9d
        }
    }
    ;
    l9c.PL4P = function(g9d, hz2x) {
        if (g9d) {
            var g9d = g9d.firstElementChild;
            if (g9d) {
                g9d.firstElementChild && (g9d = g9d.firstElementChild);
                g9d.setAttribute("xlink:href", "/style/pc/svg/" + hz2x)
            }
        }
    }
    ;
    l9c.bRe0x = function(es1x) {
        if (!es1x || !es1x.length) {
            return
        }
        es1x = /^#(.+?)#$/.exec(es1x)[1];
        es1x = es1x.replace(/\s/g, " ");
        v9m.bk0x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k9b.cz0x({
                actname: es1x
            }),
            onload: function(Q0x) {
                if (!Q0x || Q0x.code != 200 || !Q0x.act) {
                    n9e.Z0x.J0x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q0x.act.actId)
                }
            },
            onerror: function(bY0x) {
                n9e.Z0x.J0x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    }
    ;
    l9c.cqs6m = function(es1x) {
        if (!es1x || !es1x.length) {
            return
        }
        var Py4C = location.host;
        es1x = /^#(.+?)#$/.exec(es1x)[1];
        es1x = es1x.replace(/\s/g, " ");
        v9m.bk0x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k9b.cz0x({
                actname: es1x
            }),
            onload: function(Q0x) {
                if (!Q0x || Q0x.code != 200 || !Q0x.act) {
                    cw0x.iy3x("该话题暂未创建")
                } else {
                    cw0x.Cc9T(Py4C + "/activity?id=" + Q0x.act.actId)
                }
            },
            onerror: function(bY0x) {
                cw0x.iy3x("操作失败，请稍后再试")
            }
        })
    }
    ;
    l9c.bjy1x = function(zl8d, sE6y) {
        if (!zl8d || !sE6y)
            return false;
        if (zl8d == sE6y)
            return true;
        return l9c.bjy1x(zl8d, sE6y.parentNode)
    }
    ;
    a8i.cI1x = function(bH0x, jc3x) {
        if (!bH0x)
            return null;
        if (!jc3x)
            return bH0x.firstChild;
        return a8i.E0x(bH0x, jc3x)[0]
    }
    ;
    l9c.bRd0x = function(im3x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(im3x)
    }
    ;
    l9c.bRc0x = function(im3x, Pu4y) {
        Pu4y = Pu4y || "86";
        if (Pu4y == "86")
            return /^\d{11}$/.test(im3x);
        return /^\d+$/.test(im3x)
    }
    ;
    l9c.cIu0x = function(we7X) {
        if (!we7X) {
            return "0b"
        }
        var cqo6i = ["Bytes", "KB", "MB", "GB"];
        var bc0x = Math.floor(Math.log(we7X) / Math.log(1024));
        return (we7X / Math.pow(1024, Math.floor(bc0x))).toFixed(bc0x == 1 ? 0 : 1) + cqo6i[bc0x]
    }
    ;
    l9c.bRb0x = function(dL1x, fv2x, cqm6g) {
        if (!dL1x)
            return dL1x;
        var dt1x = k9b.fN2x(dL1x);
        if (dt1x <= fv2x)
            return dL1x;
        var bjY1x = dt1x - dL1x.length
          , bjZ1x = dL1x.length - bjY1x;
        var fI2x = Math.ceil(fv2x / 2)
          , cql6f = fv2x
          , bQX0x = 0;
        if (bjY1x < fI2x)
            fI2x = fv2x - bjY1x;
        if (bjZ1x < fv2x)
            fv2x = bjZ1x + Math.ceil((fv2x - bjZ1x) / 2);
        while (fI2x <= fv2x) {
            bQX0x = k9b.fN2x(dL1x.substr(0, fI2x));
            var bki1x = cql6f - bQX0x;
            if (bki1x == 0)
                break;
            if (bki1x == 1) {
                var cqe6Y = k9b.fN2x(dL1x.charAt(fI2x));
                if (cqe6Y == 1) {
                    fI2x++;
                    break
                } else {
                    break
                }
            }
            fI2x += Math.floor(bki1x / 2)
        }
        return dL1x.substr(0, fI2x) + (!!cqm6g ? "" : "...")
    }
    ;
    l9c.cpJ6D = function(bs0x) {
        bs0x = bs0x || 10;
        var cQ1x = "";
        for (var i = 0; i < bs0x; i++) {
            cQ1x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cQ1x
    }
    ;
    var cpz6t = /([A-Za-z0-9 \.\-\(\)\!\?])/
      , cpy6s = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/
      , cpk6e = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQM0x = function(cpe6Y) {
        var bs0x = k9b.CP9G(1, 5)
          , cpd6X = Math.random() < .5
          , iW3x = "";
        if (cpe6Y) {
            if (cpd6X) {
                while (bs0x >= 0) {
                    iW3x += cpk6e[k9b.CP9G(0, 500)];
                    bs0x--
                }
            } else {
                iW3x = l9c.cpJ6D(bs0x)
            }
        } else {
            iW3x = k9b.SI6C(bs0x)
        }
        return '<div class="soil">' + iW3x + "</div>"
    };
    l9c.bxD4H = function(ev1x) {
        ev1x = k9b.BK9B(ev1x);
        try {
            var bs0x = ev1x.length
              , r9i = k9b.CP9G(1, bs0x - 1);
            while (r9i < bs0x) {
                if (cpy6s.test(ev1x.charAt(r9i))) {
                    return k9b.dI1x(ev1x.slice(0, r9i)) + bQM0x(true) + k9b.dI1x(ev1x.slice(r9i))
                } else if (cpz6t.test(ev1x.charAt(r9i))) {
                    return k9b.dI1x(ev1x.slice(0, r9i)) + bQM0x() + k9b.dI1x(ev1x.slice(r9i))
                } else {
                    r9i++
                }
            }
            return k9b.dI1x(ev1x)
        } catch (e) {
            return k9b.dI1x(ev1x)
        }
    }
    ;
    l9c.beM0x = function(lH4L, mV4Z) {
        return "//nos.netease.com/" + lH4L + "/" + mV4Z
    }
    ;
    l9c.cpb6V = function(fH2x) {
        var dS1x = /(.+)(\.[^\.]+$)/.exec(fH2x);
        return dS1x ? {
            filename: dS1x[1],
            suffix: dS1x[2]
        } : {
            filename: fH2x || "",
            suffix: ""
        }
    }
    ;
    l9c.bQJ0x = function(bt0x, coV6P) {
        var dF1x = [];
        k9b.bd0x(bt0x, function(gx2x) {
            dF1x.push(coV6P(gx2x))
        });
        return dF1x
    }
    ;
    var coL6F = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l9c.bQw9n = function(AH9y) {
        var i9b = NEJ.X({}, AH9y);
        k9b.eH1x(AH9y, function(p9g, L0x) {
            var bQs9j = coL6F[L0x];
            if (bQs9j) {
                i9b[bQs9j] = p9g
            }
        });
        var OR4V = AH9y.creator || [];
        if (!k9b.ec1x(OR4V)) {
            OR4V = [OR4V]
        }
        if (OR4V) {
            i9b.artists = [];
            k9b.bd0x(OR4V, function(p9g) {
                i9b.artists.push({
                    name: p9g.nickname || p9g.userName,
                    id: p9g.userId
                })
            })
        }
        if (!!AH9y.aliaName) {
            i9b.alias = [AH9y.aliaName]
        }
        if (!!AH9y.transName) {
            i9b.transNames = [AH9y.transName]
        }
        return i9b
    }
    ;
    l9c.coC6w = function(Y0x) {
        return (Y0x || "").replace(/^https?:/, "")
    }
    ;
    l9c.Gf0x = function(cQ1x) {
        if (!k9b.fJ2x(cQ1x))
            return cQ1x;
        var dF1x = null;
        try {
            dF1x = JSON.parse(cQ1x)
        } catch (_e) {}
        return dF1x
    }
    ;
    var coB6v = '<span class="s-fc7 f-tdn">${value}</span>';
    l9c.coA6u = function(cL1x, us6m, e9f) {
        e9f = e9f || {};
        if (!us6m) {
            return k9b.dI1x(cL1x)
        }
        cL1x = k9b.BK9B(cL1x);
        var qL5Q = []
          , bt0x = null
          , Ri5n = new RegExp(l9c.bRo0x(us6m),"gi")
          , ph5m = e9f.tpl || coB6v;
        while (bt0x = Ri5n.exec(cL1x)) {
            var dS1x = {
                html: "",
                before: bt0x.index - 1,
                after: bt0x.index + bt0x[0].length
            };
            var Id1x = a8i.ey1x(ph5m);
            dS1x.html = a8i.cc0x(Id1x, {
                value: k9b.dI1x(bt0x[0])
            });
            qL5Q.push(dS1x)
        }
        var bwA4E = qL5Q.length
          , kD3x = {
            before: cL1x.length - 1,
            after: 0
        }
          , dF1x = "";
        for (var i = 0; i <= bwA4E; i++) {
            var hD2x, fZ2x;
            hD2x = (qL5Q[i - 1] || kD3x).after;
            fZ2x = (qL5Q[i] || kD3x).before;
            if (fZ2x >= hD2x && hD2x >= 0 && fZ2x <= cL1x.length - 1) {
                dF1x += k9b.dI1x(cL1x.substring(hD2x, fZ2x + 1))
            }
            if (qL5Q[i]) {
                dF1x += qL5Q[i].html
            }
        }
        return dF1x
    }
    ;
    l9c.lu4y = function() {
        if (!window.WM) {
            var g9d = document.createElement("script");
            var sk6e = window.location.hostname;
            var cIF0x = window.location.protocol;
            a8i.hb2x(g9d, "type", "text/javascript");
            a8i.hb2x(g9d, "src", "https://acstatic-dun.126.net/tool.min.js");
            g9d.onload = function(data) {
                initWatchman({
                    productNumber: "YD00000558929251",
                    onload: function(instance) {
                        window.WM = instance
                    }
                })
            }
            ;
            document.body.appendChild(g9d)
        }
    }
    ;
    l9c.nb4f = function(og4k) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", og4k)
        }
    }
    ;
    l9c.De9V = function(og4k) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", og4k)
        }
    }
}
)();
(function() {
    var k9b = NEJ.P("nej.u");
    function cov6p() {
        var BP9G = function(iq3x) {
            if (iq3x < -128) {
                return BP9G(128 - (-128 - iq3x))
            } else if (iq3x >= -128 && iq3x <= 127) {
                return iq3x
            } else if (iq3x > 127) {
                return BP9G(-129 + iq3x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cou6o = function(iq3x, bj0x) {
            return BP9G(iq3x + bj0x)
        };
        var cot6n = function(bfB0x, bly1x) {
            if (bfB0x == null) {
                return null
            }
            if (bly1x == null) {
                return bfB0x
            }
            var rc5h = [];
            var cos6m = bly1x.length;
            for (var i = 0, bs0x = bfB0x.length; i < bs0x; i++) {
                rc5h[i] = cou6o(bfB0x[i], bly1x[i % cos6m])
            }
            return rc5h
        };
        var coq6k = function(bfT0x) {
            if (bfT0x == null) {
                return bfT0x
            }
            var rc5h = [];
            var con6h = bfT0x.length;
            for (var i = 0, bs0x = con6h; i < bs0x; i++) {
                rc5h[i] = BP9G(0 - bfT0x[i])
            }
            return rc5h
        };
        var com6g = function(blQ1x, Oi4m) {
            blQ1x = BP9G(blQ1x);
            Oi4m = BP9G(Oi4m);
            return BP9G(blQ1x ^ Oi4m)
        };
        var bQo9f = function(Oe4i, blU1x) {
            if (Oe4i == null || blU1x == null || Oe4i.length != blU1x.length) {
                return Oe4i
            }
            var rc5h = [];
            var coj6d = Oe4i.length;
            for (var i = 0, bs0x = coj6d; i < bs0x; i++) {
                rc5h[i] = com6g(Oe4i[i], blU1x[i])
            }
            return rc5h
        };
        var bQm9d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var coh6b = function(dz1x) {
            var JH1x = [];
            JH1x.push(bQm9d[dz1x >>> 4 & 15]);
            JH1x.push(bQm9d[dz1x & 15]);
            return JH1x.join("")
        };
        var bQl9c = function(we7X) {
            var bs0x = we7X.length;
            if (we7X == null || bs0x < 0) {
                return new String("")
            }
            var JH1x = [];
            for (var i = 0; i < bs0x; i++) {
                JH1x.push(coh6b(we7X[i]))
            }
            return JH1x.join("")
        };
        var bQh9Y = function(bgp0x) {
            if (bgp0x == null || bgp0x.length == 0) {
                return bgp0x
            }
            var bmd1x = new String(bgp0x);
            var rc5h = [];
            var bs0x = bmd1x.length / 2;
            var bj0x = 0;
            for (var i = 0; i < bs0x; i++) {
                var pn5s = parseInt(bmd1x.charAt(bj0x++), 16) << 4;
                var oX5c = parseInt(bmd1x.charAt(bj0x++), 16);
                rc5h[i] = BP9G(pn5s + oX5c)
            }
            return rc5h
        };
        var bQf9W = function(cQ1x) {
            if (cQ1x == null || cQ1x == undefined) {
                return cQ1x
            }
            var NZ4d = encodeURIComponent(cQ1x);
            var we7X = [];
            var bQe9V = NZ4d.length;
            for (var i = 0; i < bQe9V; i++) {
                if (NZ4d.charAt(i) == "%") {
                    if (i + 2 < bQe9V) {
                        we7X.push(bQh9Y(NZ4d.charAt(++i) + "" + NZ4d.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    we7X.push(NZ4d.charCodeAt(i))
                }
            }
            return we7X
        };
        var cnJ6D = function(xD8v) {
            var bc0x = 0;
            bc0x += (xD8v[0] & 255) << 24;
            bc0x += (xD8v[1] & 255) << 16;
            bc0x += (xD8v[2] & 255) << 8;
            bc0x += xD8v[3] & 255;
            return bc0x
        };
        var cIH0x = function(bc0x) {
            var xD8v = [];
            xD8v[0] = bc0x >>> 24 & 255;
            xD8v[1] = bc0x >>> 16 & 255;
            xD8v[2] = bc0x >>> 8 & 255;
            xD8v[3] = bc0x & 255;
            return xD8v
        };
        var cnF6z = function(cY1x, bms1x, bs0x) {
            var dF1x = [];
            if (cY1x == null || cY1x.length == 0) {
                return dF1x
            }
            if (cY1x.length < bs0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bs0x; i++) {
                dF1x[i] = cY1x[bms1x + i]
            }
            return dF1x
        };
        var bmC2x = function(cY1x, bms1x, rV6P, cnE5J, bs0x) {
            if (cY1x == null || cY1x.length == 0) {
                return rV6P
            }
            if (rV6P == null) {
                throw new Error("1004")
            }
            if (cY1x.length < bs0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bs0x; i++) {
                rV6P[cnE5J + i] = cY1x[bms1x + i]
            }
            return rV6P
        };
        var cnC5H = function(bs0x) {
            var bt0x = [];
            for (var i = 0; i < bs0x; i++) {
                bt0x[i] = 0
            }
            return bt0x
        };
        var cnA5F = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var KX2x = 64;
        var bgj0x = 64;
        var bPX9O = 4;
        var cnt5y = function(rE5J) {
            var bPW9N = [];
            if (rE5J == null || rE5J == undefined || rE5J.length == 0) {
                return cnC5H(bgj0x)
            }
            if (rE5J.length >= bgj0x) {
                return cnF6z(rE5J, 0, bgj0x)
            } else {
                for (var i = 0; i < bgj0x; i++) {
                    bPW9N[i] = rE5J[i % rE5J.length]
                }
            }
            return bPW9N
        };
        var cno5t = function(bgg0x) {
            if (bgg0x == null || bgg0x.length % KX2x != 0) {
                throw new Error("1005")
            }
            var bnn2x = [];
            var bj0x = 0;
            var cnd5i = bgg0x.length / KX2x;
            for (var i = 0; i < cnd5i; i++) {
                bnn2x[i] = [];
                for (var j = 0; j < KX2x; j++) {
                    bnn2x[i][j] = bgg0x[bj0x++]
                }
            }
            return bnn2x
        };
        var cnc5h = function(bPR9I) {
            var pn5s = bPR9I >>> 4 & 15;
            var oX5c = bPR9I & 15;
            var bj0x = pn5s * 16 + oX5c;
            return cnA5F[bj0x]
        };
        var bPQ9H = function(bnw2x) {
            if (bnw2x == null) {
                return null
            }
            var bPM9D = [];
            for (var i = 0, bs0x = bnw2x.length; i < bs0x; i++) {
                bPM9D[i] = cnc5h(bnw2x[i])
            }
            return bPM9D
        };
        var bPL9C = function(Mq2x, rE5J) {
            if (Mq2x == null) {
                return null
            }
            if (Mq2x.length == 0) {
                return []
            }
            if (Mq2x.length % KX2x != 0) {
                throw new Error("1005")
            }
            rE5J = cnt5y(rE5J);
            var bnG2x = rE5J;
            var bnH2x = cno5t(Mq2x);
            var Of4j = [];
            var cmM5R = bnH2x.length;
            for (var i = 0; i < cmM5R; i++) {
                var bnO2x = bPQ9H(bnH2x[i]);
                bnO2x = bPQ9H(bnO2x);
                var bnP2x = bQo9f(bnO2x, bnG2x);
                var cmK5P = cot6n(bnP2x, coq6k(bnG2x));
                bnP2x = bQo9f(cmK5P, rE5J);
                bmC2x(bnP2x, 0, Of4j, i * KX2x, KX2x);
                bnG2x = bnH2x[i]
            }
            var bPI9z = [];
            bmC2x(Of4j, Of4j.length - bPX9O, bPI9z, 0, bPX9O);
            var bs0x = cnJ6D(bPI9z);
            if (bs0x > Of4j.length) {
                throw new Error("1006")
            }
            var rc5h = [];
            bmC2x(Of4j, 0, rc5h, 0, bs0x);
            return rc5h
        };
        var cmF5K = function(bfX0x, L0x) {
            if (bfX0x == null) {
                return null
            }
            var bPH9y = new String(bfX0x);
            if (bPH9y.length == 0) {
                return []
            }
            var Mq2x = bQh9Y(bPH9y);
            if (L0x == null || L0x == undefined) {
                throw new Error("1007")
            }
            var rE5J = bQf9W(L0x);
            return bPL9C(Mq2x, rE5J)
        };
        this.cmz5E = function(bfX0x, L0x) {
            var bod2x = cmF5K(bfX0x, L0x);
            var GO1x = new String(bQl9c(bod2x));
            var zR8J = [];
            var boh2x = GO1x.length / 2;
            var bj0x = 0;
            for (var i = 0; i < boh2x; i++) {
                zR8J.push("%");
                zR8J.push(GO1x.charAt(bj0x++));
                zR8J.push(GO1x.charAt(bj0x++))
            }
            return zR8J.join("")
        }
        ;
        k9b.cqD6x = function(boi2x, L0x) {
            return k9b.cmw5B(k9b.czr8j(boi2x), L0x)
        }
        ;
        k9b.cmw5B = function(boi2x, L0x) {
            var bod2x = bPL9C(boi2x, bQf9W(L0x));
            var GO1x = new String(bQl9c(bod2x));
            var zR8J = [];
            var boh2x = GO1x.length / 2;
            var bj0x = 0;
            for (var i = 0; i < boh2x; i++) {
                zR8J.push("%");
                zR8J.push(GO1x.charAt(bj0x++));
                zR8J.push(GO1x.charAt(bj0x++))
            }
            return zR8J.join("")
        }
    }
    window.settmusic = (new cov6p).cmz5E
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, I0x = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), L0x = "Search-tracks_", b9i;
    q9h.fp2x({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q0x) {
                return Q0x
            },
            onerror: function(Q0x, e9f) {
                if (Q0x.code == 407) {
                    e9f.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e9f, bi0x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cmv5A(parseInt(e9f.data.type)) || "suggest",
                    keyword: e9f.data.s,
                    offset: e9f.offset
                })
            },
            format: function(Q0x, e9f) {
                if (Q0x.abroad) {
                    try {
                        Q0x.result = JSON.parse(decodeURIComponent(settmusic(Q0x.result, q9h.sk)))
                    } catch (e) {}
                }
                Q0x.result = Q0x.result || {};
                var j9a, cB0x, hQ2x = [], qH5M = e9f.data.s || "", gk2x = e9f.data.limit, u9l = parseInt(e9f.data.type) || 1, m9d = Q0x.result;
                switch (u9l) {
                case 1:
                    j9a = this.bPF9w(m9d.songs, e9f.data.hlpretag, e9f.data.hlposttag);
                    cB0x = m9d.songCount;
                    break;
                case 10:
                    j9a = m9d.albums;
                    cB0x = m9d.albumCount;
                    break;
                case 100:
                    j9a = m9d.artists;
                    cB0x = m9d.artistCount;
                    break;
                case 1e3:
                    j9a = m9d.playlists;
                    cB0x = m9d.playlistCount;
                    break;
                case 1002:
                    j9a = m9d.userprofiles;
                    cB0x = m9d.userprofileCount;
                    break;
                case 1004:
                    j9a = m9d.mvs;
                    cB0x = m9d.mvCount;
                    break;
                case 1014:
                    j9a = l9c.bQJ0x(m9d.videos, l9c.bQw9n);
                    cB0x = m9d.videoCount;
                    break;
                case 1006:
                    j9a = this.bPF9w(m9d.songs, e9f.data.hlpretag, e9f.data.hlposttag);
                    cB0x = m9d.songCount;
                    break;
                case 1009:
                    var rs5x = m9d.djRadios;
                    if (!!rs5x) {
                        k9b.bd0x(rs5x, function(C0x, r9i, cmt5y) {
                            C0x.xid = C0x.id;
                            C0x.id = C0x.id + "_rad"
                        });
                        if (rs5x.length) {
                            this.uJ7C("radio_search-" + e9f.data.s, rs5x)
                        }
                    }
                    cB0x = Math.min(m9d.djprogramCount, 500);
                    j9a = m9d.djprograms || [];
                    if (e9f.data.isPub) {
                        k9b.nC4G(rs5x, function(C0x, r9i, cmt5y) {
                            C0x.stype = 1;
                            j9a.unshift(C0x)
                        });
                        cB0x = Math.min(j9a.length, 500)
                    }
                    break
                }
                this.z9q("onsearchload", Q0x);
                if (j9a && j9a.length) {
                    for (var i = 0; i < gk2x; i++) {
                        if (i < j9a.length) {
                            hQ2x.push(j9a[i])
                        } else {
                            hQ2x.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cB0x || 0, qH5M.length < 3 ? 500 : 5e3),
                    list: hQ2x
                }
            },
            onerror: function(Q0x, e9f) {
                e9f.onload(e9f, []);
                if (k9b.gO2x(e9f.onerror)) {
                    e9f.onerror(Q0x)
                }
            }
        }
    });
    q9h.Iu1x = NEJ.C();
    b9i = q9h.Iu1x.N0x(q9h.hE2x);
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.cms5x = function(L0x, e9f) {
        if (!L0x)
            return;
        if (!!this.bPD9u)
            v9m.kF3x(this.bPD9u);
        this.bPD9u = this.cm0x("search-suggest", NEJ.X({
            data: {
                s: L0x,
                limit: 8
            }
        }, e9f))
    }
    ;
    b9i.cmo5t = function(L0x, e9f) {
        if (!L0x)
            return;
        this.cm0x("search-multimatch", NEJ.X({
            data: {
                s: L0x
            }
        }, e9f))
    }
    ;
    b9i.bPF9w = function() {
        var cmi5n = function(hJ2x, bPA9r, bPz9q) {
            var clZ5e = hJ2x.match(new RegExp(bPA9r + "(.+?)" + bPz9q,"gi"))
              , cA0x = 0;
            k9b.bd0x(clZ5e, function(p9g) {
                cA0x += p9g.replace(new RegExp(bPA9r,"g"), "").replace(new RegExp(bPz9q,"g"), "").length
            });
            return cA0x
        };
        return function(jg3x, clY5d, clV5a) {
            var bPw9n = [];
            k9b.bd0x(jg3x, function(bl0x, bc0x) {
                bl0x = l9c.Cz9q(bl0x);
                var bfv0x = bl0x.lyrics || [], dt1x = bfv0x.length, kk3x = 0, cB0x = 4, bfu0x = {
                    l: 0,
                    v: 0
                }, bph2x;
                if (dt1x > 4) {
                    k9b.bd0x(bfv0x, function(hJ2x, r9i) {
                        var bPv9m = cmi5n(hJ2x, clY5d, clV5a);
                        if (bPv9m > bfu0x.v) {
                            bfu0x.v = bPv9m;
                            bfu0x.l = r9i
                        }
                    });
                    kk3x = bfu0x.l;
                    kk3x = Math.max(kk3x, 0);
                    bph2x = dt1x - kk3x - 4;
                    if (bph2x < 0)
                        kk3x += bph2x;
                    bl0x.lrcAbstractEnd = kk3x + cB0x - 1
                } else {
                    bl0x.lrcAbstractEnd = dt1x - 1
                }
                bl0x.lrcAbstractStart = kk3x;
                bl0x.indexId = (bfv0x && bfv0x.length ? "L" : "NL") + bl0x.id;
                bPw9n.push(bl0x)
            });
            return bPw9n
        }
    }();
    b9i.cmv5A = function(u9l) {
        switch (u9l) {
        case 1:
            return "song";
            break;
        case 100:
            return "artist";
            break;
        case 10:
            return "album";
            break;
        case 1004:
            return "mv";
            break;
        case 1014:
            return "video";
            break;
        case 1006:
            return "lyric";
            break;
        case 1e3:
            return "list";
            break;
        case 1009:
            return "djradio";
            break;
        case 1002:
            return "user";
            break;
        default:
            return "suggest";
            break
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), F0x = c9h("nm.m"), n9e = c9h("nm.l"), du1x = c9h("nm.i"), M0x = c9h("nm.m.sch"), b9i, K0x;
    var bfq0x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M0x.OJ4N = NEJ.C();
    b9i = M0x.OJ4N.N0x(I0x.cH1x);
    b9i.cv0x = function(g9d) {
        this.cD1x();
        this.bV0x(g9d);
        this.S0x = q9h.Iu1x.fR2x()
    }
    ;
    b9i.bV0x = function(g9d) {
        this.o9f = g9d;
        var j9a = a8i.E0x(g9d, "j-flag");
        this.fc2x = j9a[0];
        this.bpL2x = j9a[1];
        this.cy0x = j9a[2];
        this.nV4Z = j9a[3];
        h9c.s9j(this.fc2x, "input", this.gt2x.f9e(this));
        h9c.s9j(this.fc2x, "keyup", this.gt2x.f9e(this));
        h9c.s9j(this.fc2x, "focus", this.gY2x.f9e(this));
        h9c.s9j(this.bpL2x, "click", this.gY2x.f9e(this));
        h9c.s9j(this.fc2x, "blur", this.bpX2x.f9e(this));
        h9c.s9j(this.cy0x, "click", this.bfh0x.f9e(this));
        h9c.s9j(this.o9f, "keydown", this.bpZ2x.f9e(this));
        h9c.s9j(this.o9f, "keypress", this.bfe0x.f9e(this));
        h9c.s9j(this.nV4Z, "mouseover", this.Pa4e.f9e(this));
        h9c.s9j(this.nV4Z, "mouseout", this.Pa4e.f9e(this));
        if (this.fc2x.value) {
            this.fc2x.value = ""
        }
        if (this.fc2x.style.opacity != null) {
            this.fc2x.style.opacity = 1
        }
    }
    ;
    b9i.gt2x = function(d9g) {
        if (d9g.type == "keyup" && d9g.keyCode == 8 || d9g.keyCode == 46) {
            this.Hf1x()
        } else if (d9g.type == "input" || d9g.type == "propertychange") {
            setTimeout(this.Hf1x.f9e(this), 0)
        }
    }
    ;
    b9i.gY2x = function() {
        this.yM8E(this.bpL2x, !1);
        a8i.w9n(this.o9f, "m-srch-fcs");
        this.fc2x.focus();
        this.Hf1x();
        a8i.w9n((a8i.E0x("g-topbar", "j-showoff") || [])[0], "f-hide")
    }
    ;
    b9i.bpX2x = function() {
        if (!this.fc2x.value) {
            this.yM8E(this.bpL2x, !0)
        }
        var Hn1x = a8i.E0x(this.nV4Z, "slt");
        if (this.bfa0x(this.nV4Z) && Hn1x.length > 0 && a8i.t9k(Hn1x[0], "type")) {
            var hz2x = Hn1x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hz2x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.fc2x.value
                })
            }
            this.bqk2x(Hn1x[0].href)
        }
        this.yM8E(this.nV4Z, !1);
        a8i.y9p(this.o9f, "m-srch-fcs")
    }
    ;
    b9i.yM8E = function(g9d, mr4v) {
        a8i.ba0x(g9d, "display", !mr4v ? "none" : "")
    }
    ;
    b9i.bfa0x = function(g9d) {
        return a8i.di1x(g9d, "display") != "none"
    }
    ;
    b9i.Hf1x = function() {
        var clS5X = function(im3x) {
            im3x = k9b.BK9B(im3x);
            var eI1x = this.o9f.clientWidth > 250 ? 41 : 17;
            if (l9c.RU5Z(im3x) > eI1x) {
                im3x = l9c.DJ0x(im3x, eI1x) + "..."
            }
            return k9b.dI1x(im3x)
        };
        var beP0x = function(m9d) {
            return m9d.songs && m9d.songs.length || m9d.albums && m9d.albums.length || m9d.artists && m9d.artists.length || m9d.playlists && m9d.playlists.length
        };
        var og4k = function(us6m, d9g) {
            if (!l9c.bRp0x(this.fc2x) || l9c.kp3x(this.fc2x.value)) {
                this.yM8E(this.nV4Z, !1);
                return
            }
            d9g.keyword = k9b.dI1x(us6m);
            var dU1x = a8i.cc0x("m-search-suggest", d9g, {
                mark: l9c.coA6u.ex1x(this, us6m),
                cutStr: clS5X.f9e(this)
            })
              , uk6e = d9g.result.order;
            this.nV4Z.innerHTML = dU1x;
            this.yM8E(this.nV4Z, beP0x(d9g.result) ? !0 : !1);
            if (!!uk6e && !!uk6e.length && bfq0x[uk6e[0]]) {
                this.bqv2x = {
                    keyword: us6m,
                    type: bfq0x[uk6e[0]]
                }
            }
        };
        var clN5S = function() {
            this.yM8E(this.nV4Z, !1);
            return
        };
        return function() {
            var C0x = this.fc2x.value;
            if (l9c.kp3x(C0x)) {
                this.yM8E(this.nV4Z, !1);
                return
            }
            this.S0x.cms5x(C0x, {
                onload: og4k.f9e(this, C0x),
                onForbidden: clN5S.f9e(this)
            })
        }
    }();
    b9i.bfe0x = function(d9g) {
        if (d9g.keyCode != 13)
            return;
        var Hn1x = a8i.E0x(this.nV4Z, "slt");
        if (this.bfa0x(this.nV4Z) && Hn1x.length > 0) {
            this.bqk2x(Hn1x[0].href);
            this.yM8E(this.nV4Z, !1);
            return
        }
        this.bfh0x();
        this.yM8E(this.nV4Z, !1)
    }
    ;
    b9i.bpZ2x = function(d9g) {
        if (!this.bfa0x(this.nV4Z))
            return;
        var j9a = a8i.E0x(this.nV4Z, "xtag")
          , dt1x = j9a.length
          , r9i = k9b.dm1x(j9a, function(p9g) {
            return a8i.bE0x(p9g, "slt")
        });
        switch (d9g.keyCode) {
        case 38:
            if (r9i >= 0)
                a8i.y9p(j9a[r9i], "slt");
            a8i.w9n(j9a[r9i <= 0 ? dt1x - 1 : r9i - 1], "slt");
            break;
        case 40:
            if (r9i >= 0)
                a8i.y9p(j9a[r9i], "slt");
            a8i.w9n(j9a[(r9i + 1) % dt1x], "slt");
            break
        }
    }
    ;
    b9i.Pa4e = function(d9g) {
        if (!this.bfa0x(this.nV4Z))
            return;
        var Pn4r, G0x = h9c.X0x(d9g), j9a = a8i.E0x(this.nV4Z, "xtag");
        if (G0x.tagName.toLowerCase() == "a")
            Pn4r = G0x;
        else if (G0x.parentNode.tagName.toLowerCase() == "a")
            Pn4r = G0x.parentNode;
        if (!Pn4r)
            return;
        k9b.bd0x(j9a, function(p9g) {
            a8i.y9p(p9g, "slt");
            a8i.t9k(p9g, "type", "")
        });
        if (d9g.type == "mouseout")
            return;
        a8i.w9n(Pn4r, "slt");
        a8i.t9k(Pn4r, "type", "mouse")
    }
    ;
    b9i.bfh0x = function() {
        var dR1x = location.hash
          , r9i = dR1x.indexOf("?")
          , bv0x = k9b.hf2x(dR1x.substring(r9i + 1));
        bv0x.s = this.fc2x.value;
        if (l9c.kp3x(bv0x.s))
            return;
        if (!bv0x.type && this.bqv2x && this.bqv2x.keyword == bv0x.s) {
            bv0x.type = this.bqv2x.type
        }
        this.bqk2x("/search/#/?" + k9b.cz0x(bv0x));
        this.fc2x.blur()
    }
    ;
    b9i.bqk2x = function(Y0x) {
        if (location.dispatch2) {
            location.dispatch2(Y0x)
        } else {
            location.href = Y0x
        }
    }
    ;
    M0x.OJ4N.clM5R = function() {
        var j9a = a8i.E0x(document.body, "j-suggest");
        k9b.bd0x(j9a, function(p9g) {
            new M0x.OJ4N(p9g)
        })
    }
    ;
    M0x.OJ4N.clM5R()
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, I0x = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), b9i;
    q9h.fp2x({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q0x) {
                return {
                    total: Q0x.size || 0,
                    list: Q0x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q0x) {
                return {
                    total: Q0x.size || 0,
                    list: Q0x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q0x) {
                return Q0x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q0x, e9f) {
                if (e9f.offset == 0) {
                    var qr5w = Q0x.data[0];
                    this.z9q("onfirstload", qr5w);
                    Q0x.data.splice(0, 1);
                    return Q0x.data
                } else {
                    return Q0x.data
                }
            }
        }
    });
    q9h.Ig1x = NEJ.C();
    b9i = q9h.Ig1x.N0x(q9h.hE2x);
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bqT3x = function() {
        var tC6w = "LOCAL_FLAG";
        return function(u9l, clL5Q) {
            var i9b = this.Hb1x(tC6w, {});
            if (i9b[u9l]) {
                return true
            } else {
                if (!clL5Q) {
                    i9b[u9l] = true;
                    this.yd8V(tC6w, i9b)
                }
                return false
            }
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), O0x = c9h("nej.ut"), brf3x;
    if (!!O0x.oo4s)
        return;
    O0x.oo4s = NEJ.C();
    brf3x = O0x.oo4s.N0x(O0x.cH1x);
    brf3x.bm0x = function() {
        var clJ5O = function(d9g) {
            d9g.matched = d9g.source == d9g.target
        };
        return function(e9f) {
            e9f.oncheck = e9f.oncheck || clJ5O;
            this.bn0x(e9f);
            this.bU0x = e9f.list;
            this.iK3x = e9f.dataset || "id";
            this.kL3x = e9f.selected || "js-selected"
        }
    }();
    brf3x.os4w = function(C0x) {
        var G0x, d9g = {
            target: C0x
        };
        k9b.bd0x(this.bU0x, function(g9d) {
            delete d9g.matched;
            d9g.source = a8i.t9k(g9d, this.iK3x);
            this.z9q("oncheck", d9g);
            if (!d9g.matched) {
                a8i.y9p(g9d, this.kL3x)
            } else {
                G0x = g9d;
                a8i.w9n(g9d, this.kL3x)
            }
        }, this);
        return G0x
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), O0x = c9h("nej.ut"), qm5r;
    if (!!O0x.dj1x)
        return;
    O0x.dj1x = NEJ.C();
    qm5r = O0x.dj1x.N0x(O0x.cH1x);
    qm5r.cv0x = function() {
        this.iY3x = {};
        this.cD1x();
        this.bJ0x()
    }
    ;
    qm5r.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.brI3x = e9f.umi || "";
        this.Bh9Y = e9f.dispatcher;
        this.MG2x = e9f.composite || bb0x;
        this.bgO0x({
            onshow: this.ff2x.f9e(this),
            onhide: this.ko3x.f9e(this),
            onrefresh: this.eF1x.f9e(this),
            onmessage: this.rR5W.f9e(this),
            onbeforehide: this.clG5L.f9e(this)
        })
    }
    ;
    qm5r.bB0x = function() {
        delete this.brI3x;
        this.iY3x = {};
        this.bG0x()
    }
    ;
    qm5r.vV7O = function(d9g) {
        if (!!d9g)
            d9g.stopped = !0
    }
    ;
    qm5r.bJ0x = br0x;
    qm5r.ff2x = br0x;
    qm5r.ko3x = br0x;
    qm5r.eF1x = br0x;
    qm5r.rR5W = br0x;
    qm5r.clG5L = br0x;
    qm5r.nS4W = function(nq4u, bF0x, fu2x) {
        this.Bh9Y.brW3x({
            to: nq4u,
            mode: fu2x || 0,
            data: bF0x,
            from: this.brI3x
        })
    }
    ;
    qm5r.cIL0x = function(u9l, i9b) {
        this.Bh9Y.Br9i(u9l, {
            from: this.brI3x,
            data: i9b
        })
    }
    ;
    qm5r.cIM0x = function() {
        this.Bh9Y.nT4X.apply(this.Bh9Y, arguments)
    }
    ;
    qm5r.clD5I = function() {
        return this.iY3x
    }
    ;
    a8i.bex9o = function() {
        if (!!window.dispatcher) {
            dispatcher.bPr9i.apply(dispatcher, arguments)
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, bb0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), O0x = c9h("nej.ut"), zt8l;
    if (!!O0x.dq1x)
        return;
    O0x.dq1x = NEJ.C();
    zt8l = O0x.dq1x.N0x(O0x.dj1x);
    zt8l.clB5G = function(e9f) {
        var bH0x;
        if (!bH0x) {
            var i9b = e9f.input || bb0x;
            bH0x = a8i.B9s(i9b.parent)
        }
        if (!bH0x) {
            var i9b = e9f.data || bb0x;
            bH0x = a8i.B9s(i9b.parent)
        }
        if (!bH0x) {
            bH0x = a8i.B9s(e9f.parent)
        }
        return bH0x
    }
    ;
    zt8l.ff2x = function(e9f) {
        var bH0x = this.clB5G(e9f);
        if (!!bH0x && !!this.o9f)
            bH0x.appendChild(this.o9f);
        this.gT2x(e9f);
        this.bPq9h("onshow", e9f);
        this.eF1x(e9f)
    }
    ;
    zt8l.eF1x = function(e9f) {
        this.gq2x(e9f);
        this.bPq9h("onrefresh", e9f)
    }
    ;
    zt8l.ko3x = function() {
        this.lw4A();
        this.clq5v();
        a8i.mO4S(this.o9f)
    }
    ;
    zt8l.bPl8d = function() {
        var gM2x = /^onshow|onrefresh|delay$/;
        return function(ck0x) {
            return gM2x.test(ck0x)
        }
    }();
    zt8l.bPj8b = br0x;
    zt8l.bPq9h = function() {
        var bPi8a = function(bv0x, e9f, ck0x, oE4I) {
            if (this.bPl8d(oE4I))
                return;
            if (!!bv0x)
                ck0x += (ck0x.indexOf("?") > 1 ? "&" : "?") + bv0x;
            var cT1x = this.bPj8b(oE4I, e9f) || {};
            cT1x.location = e9f;
            cT1x.parent = this.iY3x[oE4I];
            this.Bh9Y.iL3x(ck0x, {
                input: cT1x
            })
        };
        return function(u9l, e9f) {
            if (!e9f.nodelay) {
                if (!!this.MG2x.delay)
                    return;
                var bPh8Z = this.MG2x[u9l] || bb0x;
                if (bPh8Z.delay)
                    return
            }
            var bv0x = k9b.cz0x(e9f.param) || "";
            if (u9l == "onrefresh") {
                k9b.eH1x(this.MG2x, bPi8a.f9e(this, bv0x, e9f))
            }
            k9b.eH1x(bPh8Z, bPi8a.f9e(this, bv0x, e9f))
        }
    }();
    zt8l.clq5v = function() {
        var DX0x = function(ck0x, oE4I) {
            if (!this.bPl8d(oE4I))
                this.Bh9Y.bq0x(ck0x)
        };
        return function() {
            k9b.eH1x(this.MG2x, DX0x, this);
            k9b.eH1x(this.MG2x.onshow, DX0x, this);
            k9b.eH1x(this.MG2x.onrefresh, DX0x, this)
        }
    }()
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), I0x = c9h("nej.ut"), v9m = c9h("nej.j"), k9b = c9h("nej.u"), F0x = c9h("nm.m"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), b9i, K0x;
    F0x.Qc4g = NEJ.C();
    b9i = F0x.Qc4g.N0x(I0x.cH1x);
    b9i.cv0x = function() {
        this.cD1x();
        this.o9f = a8i.B9s("g-topbar");
        var j9a = a8i.E0x(this.o9f, "j-tflag");
        this.btg3x = j9a[0];
        this.GG1x = j9a[1];
        this.bPf8X = j9a[2];
        this.btr3x = j9a[3];
        this.cli5n = I0x.oo4s.A9r({
            list: this.btg3x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.btu3x = I0x.oo4s.A9r({
            list: this.btr3x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX0x([[this.o9f, "click", this.Qd4h.f9e(this)], [this.GG1x, "click", this.cJ1x.f9e(this)], [this.GG1x, "mouseout", this.bPe8W.f9e(this, 0)], [this.GG1x, "mouseover", this.bPe8W.f9e(this, 1)]]);
        window.scrollTopbar = this.clf5k.f9e(this);
        window.matchNav = this.bPc8U.f9e(this);
        window.polling = this.vN7G.f9e(this);
        this.btB3x = q9h.Ig1x.A9r();
        this.cld5i();
        this.KQ2x();
        var bv0x = k9b.hf2x(location.href.split("?")[1]) || {};
        if (bv0x.market) {
            a8i.B9s("topbar-download-link").href = "/download?market=" + bv0x.market
        }
        var btL3x = a8i.E0x(this.o9f, "j-showoff");
        if (btL3x && !this.btB3x.bqT3x("newMvSearch")) {
            a8i.y9p(btL3x[0], "f-hide");
            window.setTimeout(function() {
                a8i.w9n(btL3x[0], "f-hide")
            }, 5e3)
        }
        l9c.lu4y()
    }
    ;
    b9i.vN7G = function(d9g) {
        var dR1x = l9c.LJ2x();
        if (!/^\/msg/.test(dR1x)) {
            var xc8U = 0;
            xc8U += d9g.comment;
            xc8U += d9g.forward;
            xc8U += d9g.msg;
            xc8U += d9g.notice;
            if (xc8U > 0) {
                xc8U = xc8U > 99 ? "99+" : xc8U;
                this.Qk4o.innerText = xc8U;
                this.Lj2x.innerText = xc8U;
                a8i.y9p(this.Qk4o, "f-hide");
                a8i.y9p(this.Lj2x, "f-hide");
                this.bec9T = true
            } else {
                a8i.w9n(this.Qk4o, "f-hide");
                a8i.w9n(this.Lj2x, "f-hide");
                this.bec9T = false
            }
            var eZ2x = "/at";
            if (d9g.notice)
                eZ2x = "/notify";
            if (d9g.comment)
                eZ2x = "/comment";
            if (d9g.msg > 0)
                eZ2x = "/private";
            if (d9g.forward > 0)
                eZ2x = "/at";
            this.Lj2x.parentNode.href = "/msg/#" + eZ2x
        } else {
            this.Lj2x.parentNode.href = "javascript:;";
            a8i.w9n(this.Qk4o, "f-hide");
            a8i.w9n(this.Lj2x, "f-hide");
            this.bec9T = false
        }
        var j9a = a8i.E0x(this.btg3x, "j-t");
        if (!/^\/friend/.test(dR1x)) {
            if (j9a && j9a.length) {
                a8i.ba0x(j9a[0], "display", d9g.event > 0 ? "" : "none")
            }
        } else {
            a8i.ba0x(j9a[0], "display", "none")
        }
    }
    ;
    b9i.cJ1x = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:action");
        if (g9d) {
            switch (a8i.t9k(g9d, "action")) {
            case "login":
                h9c.co0x(d9g);
                var u9l = a8i.t9k(g9d, "type");
                if (u9l) {
                    if (u9l == "sina" || u9l == "tencent") {
                        this.DO0x = g9d.href;
                        l9c.De9V(this.kV3x.f9e(this));
                        this.Qn4r = top.open()
                    } else
                        top.login(u9l == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h9c.co0x(d9g);
                top.logout();
                break;
            case "viewStore":
                if (!this.btB3x.bqT3x("storeNew")) {
                    a8i.w9n(this.cIO0x, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.btB3x.bqT3x("levelNew")) {
                    a8i.w9n(this.cIP0x, "f-vhide")
                }
                break
            }
        }
    }
    ;
    b9i.kV3x = function(cs0x) {
        this.DO0x += "&checkToken=" + cs0x || "";
        this.Qn4r.location.href = this.DO0x
    }
    ;
    b9i.Qd4h = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:action");
        if (!g9d)
            return;
        var U0x = a8i.t9k(g9d, "action");
        switch (U0x) {
        case "bilog":
            var buy3x = a8i.t9k(g9d, "logAction")
              , buC4G = a8i.t9k(g9d, "logJson");
            window.log(buy3x, buC4G);
            break
        }
    }
    ;
    b9i.bPe8W = function(Mj2x, d9g) {
        if (this.buI4M) {
            this.buI4M.style.display = !Mj2x ? "none" : "";
            (Mj2x || !this.bec9T ? a8i.w9n : a8i.y9p).call(window, this.Qk4o, "f-hide")
        }
    }
    ;
    b9i.clf5k = function(gn2x) {
        a8i.ba0x(this.o9f, "top", -gn2x + "px")
    }
    ;
    b9i.bPc8U = function(eZ2x, ckO5T) {
        this.cli5n.os4w(eZ2x);
        if (eZ2x == "discover") {
            a8i.w9n(this.bPf8X, "f-hide");
            a8i.y9p(this.btr3x, "f-hide");
            window.g_topBarHeight = 105;
            this.btu3x.os4w(ckO5T)
        } else {
            a8i.y9p(this.bPf8X, "f-hide");
            a8i.w9n(this.btr3x, "f-hide");
            window.g_topBarHeight = 75
        }
    }
    ;
    b9i.cld5i = function() {
        var ep1x = a8i.B9s("g_iframe");
        if (!ep1x)
            return;
        var gG2x = ep1x.contentWindow.document.getElementById("g_top");
        this.bPc8U(a8i.t9k(gG2x, "module"), a8i.t9k(gG2x, "sub"))
    }
    ;
    var bdP9G = {}
      , bOW8O = /\/\/\w+/
      , ckM5R = {
        avatarUrl: function(a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bOW8O, "") !== b.replace(bOW8O, "")
        },
        userId: true,
        nickname: true,
        reward: true,
        topic: true,
        djStatus: true
    };
    b9i.ckL5Q = function(vB7u) {
        var oB4F = k9b.dm1x(ckM5R, function(C0x, L0x) {
            if (k9b.gO2x(C0x)) {
                return C0x(vB7u[L0x], bdP9G[L0x])
            } else {
                return vB7u[L0x] !== bdP9G[L0x]
            }
        });
        bdP9G = vB7u;
        return vB7u[oB4F]
    }
    ;
    b9i.KQ2x = function() {
        var dp1x = GUser || {}
          , ckK5P = GUserAcc || {};
        if (dp1x && dp1x.userId) {
            var bOV8N = NEJ.X(dp1x, ckK5P);
            if (this.ckL5Q(bOV8N)) {
                a8i.dA1x(this.GG1x, "m-topbar-user-login", bOV8N)
            }
        } else {
            bdP9G = {};
            this.GG1x.innerHTML = a8i.ij3x("m-topbar-user-unlogin");
            var j9a = a8i.E0x(this.btg3x, "j-t");
            a8i.ba0x(j9a[0], "display", "none")
        }
        a8i.y9p(this.GG1x, "f-hide");
        this.bec9T = false;
        var j9a = a8i.E0x(this.GG1x, "j-uflag");
        if (dp1x && dp1x.userId) {
            this.Qk4o = j9a.shift();
            this.buI4M = j9a.shift();
            this.Lj2x = j9a.shift()
        } else {
            this.buI4M = j9a.shift()
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), b9i, K0x;
    q9h.fp2x({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q0x) {
                h9c.z9q(q9h.tv6p, "message", Q0x)
            }
        }
    });
    q9h.tv6p = NEJ.C();
    b9i = q9h.tv6p.N0x(q9h.hE2x);
    b9i.bdF9w = function() {
        this.cm0x("polling-get", {})
    }
    ;
    b9i.vu7n = function() {
        var ej1x;
        return function() {
            if (!!ej1x)
                return;
            ej1x = window.setInterval(this.bdF9w.f9e(this), 1e5);
            this.bdF9w()
        }
    }();
    I0x.fK2x.A9r({
        event: "message",
        element: q9h.tv6p
    })
}
)();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    }
    )("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || "")
              , uri = {}
              , i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        }
        ;
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol
              , host = uri.host
              , port = uri.port;
            if ("document"in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        }
        ;
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || "")
              , components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        }
        ;
        util.chunkQuery = function(qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        }
        ;
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document"in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        }
        ;
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        }
        ;
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        }
        ;
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        }
        ;
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        }
        ;
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        }
        ;
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        }
        ;
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        }
        ;
        util.intersect = function(arr, arr2) {
            var ret = []
              , longest = arr.length > arr2.length ? arr : arr2
              , shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))
                    ret.push(shortest[i])
            }
            return ret
        }
        ;
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        }
        ;
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)
                arr.push(enu[i]);
            return arr
        }
        ;
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    }
    )("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        }
        ;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        }
        ;
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        }
        ;
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        }
        ;
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        }
        ;
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
        ;
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
    )("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON
          , indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type)
              , id = packet.id || ""
              , endpoint = packet.endpoint || ""
              , ack = packet.ack
              , data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : ""
                  , adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "")
                    data = reason + (adv !== "" ? "+" + adv : "");
                break;
            case "message":
                if (packet.data !== "")
                    data = packet.data;
                break;
            case "event":
                var ev = {
                    name: packet.name
                };
                if (packet.args && packet.args.length) {
                    ev.args = packet.args
                }
                data = JSON.stringify(ev);
                break;
            case "json":
                data = JSON.stringify(packet.data);
                break;
            case "connect":
                if (packet.qs)
                    data = packet.qs;
                break;
            case "ack":
                data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)
                encoded.push(data);
            return encoded.join(":")
        }
        ;
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1)
                return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        }
        ;
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces)
                return {};
            var id = pieces[2] || ""
              , data = pieces[5] || ""
              , packet = {
                type: packets[pieces[1]],
                endpoint: pieces[4] || ""
            };
            if (id) {
                packet.id = id;
                if (pieces[3])
                    packet.ack = "data";
                else
                    packet.ack = true
            }
            switch (packet.type) {
            case "error":
                var pieces = data.split("+");
                packet.reason = reasons[pieces[0]] || "";
                packet.advice = advice[pieces[1]] || "";
                break;
            case "message":
                packet.data = data || "";
                break;
            case "event":
                try {
                    var opts = JSON.parse(data);
                    packet.name = opts.name;
                    packet.args = opts.args
                } catch (e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch (e) {}
                break;
            case "connect":
                packet.qs = data || "";
                break;
            case "ack":
                var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                if (pieces) {
                    packet.ackId = pieces[1];
                    packet.args = [];
                    if (pieces[3]) {
                        try {
                            packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                        } catch (e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        }
        ;
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        }
        ;
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        }
        ;
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        }
        ;
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        }
        ;
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen)
                this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        }
        ;
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        }
        ;
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        }
        ;
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        }
        ;
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        }
        ;
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        }
        ;
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        }
        ;
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        }
        ;
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        }
        ;
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document"in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this,name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        }
        ;
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        }
        ;
        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this
              , options = this.options;
            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0]
                  , script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                }
                ;
                xhr.send(null)
            }
        }
        ;
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this,this.sessionid)
                }
            }
            return null
        }
        ;
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)
                    self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)
                        self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)
                        return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        }
        ;
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        }
        ;
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        }
        ;
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        }
        ;
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        }
        ;
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        }
        ;
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        }
        ;
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        }
        ;
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        }
        ;
        Socket.prototype.onOpen = function() {
            this.open = true
        }
        ;
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        }
        ;
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        }
        ;
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        }
        ;
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected
              , wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        }
        ;
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this
              , maxAttempts = this.options["max reconnection attempts"]
              , tryMultiple = this.options["try multiple transports"]
              , limit = this.options["reconnection limit"];
            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this,"json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        }
        ;
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        }
        ;
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1)
              , lastArg = args[args.length - 1]
              , packet = {
                type: "event",
                name: name
            };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        }
        ;
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;
            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                if (this.name === "") {
                    this.socket.onDisconnect(packet.reason || "booted")
                } else {
                    this.$emit("disconnect", packet.reason)
                }
                break;
            case "message":
            case "json":
                var params = ["message", packet.data];
                if (packet.ack == "data") {
                    params.push(ack)
                } else if (packet.ack) {
                    this.packet({
                        type: "ack",
                        ackId: packet.id
                    })
                }
                this.$emit.apply(this, params);
                break;
            case "event":
                var params = [packet.name].concat(packet.args);
                if (packet.ack == "data")
                    params.push(ack);
                this.$emit.apply(this, params);
                break;
            case "ack":
                if (this.acks[packet.ackId]) {
                    this.acks[packet.ackId].apply(this, packet.args);
                    delete this.acks[packet.ackId]
                }
                break;
            case "error":
                if (packet.advice) {
                    this.socket.onError(packet)
                } else {
                    if (packet.reason == "unauthorized") {
                        this.$emit("connect_failed", packet.reason)
                    } else {
                        this.$emit("error", packet.reason)
                    }
                }
                break
            }
        }
        ;
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        }
        ;
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            }
            ;
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            }
            ;
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            }
            ;
            this.websocket.onerror = function(e) {
                self.onError(e)
            }
            ;
            return this
        }
        ;
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        }
        ;
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        }
        ;
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        }
        ;
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        }
        ;
        WS.check = function() {
            return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
        }
        ;
        WS.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("websocket")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this
              , args = arguments;
            WebSocket.bdy9p(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.send = function() {
            var self = this
              , args = arguments;
            WebSocket.bdy9p(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.close = function() {
            WebSocket.QQ5V.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        }
        ;
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options
                  , port = options["flash policy port"]
                  , path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bvy4C();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body)
                return init();
            io.util.load(init)
        }
        ;
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize"in WebSocket) || !swfobject)
                return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        }
        ;
        Flashsocket.xdomainCheck = function() {
            return true
        }
        ;
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function() {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D
                  , ah = t.userAgent.toLowerCase()
                  , Y = t.platform.toLowerCase()
                  , ae = Y ? /win/.test(Y) : /win/.test(ah)
                  , ac = Y ? /mac/.test(Y) : /mac/.test(ah)
                  , af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
                  , X = !+"1"
                  , ag = [0, 0, 0]
                  , ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new (window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch (Z) {}
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }(), k = function() {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x, function() {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) {
                            (function() {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch (X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            }
                            )()
                        }
                    }
                    if (M.wk) {
                        (function() {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        }
                        )()
                    }
                    s(f)
                }
            }();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    }
                    )()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn"
                      , ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        }
                        )()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    }
                    )()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        }
                        )()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv
                  , X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function() {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.he2x = WebSocket.ckI5N++;
            WebSocket.bOS8K[self.he2x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.mf4j = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.bdy9p(function() {
                    WebSocket.pV5a.create(self.he2x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        }
        ;
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pV5a.send(this.he2x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        }
        ;
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pV5a.close(this.he2x)
        }
        ;
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.mf4j)) {
                this.mf4j[type] = []
            }
            this.mf4j[type].push(listener)
        }
        ;
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.mf4j))
                return;
            var events = this.mf4j[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        }
        ;
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.mf4j[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        }
        ;
        WebSocket.prototype.ckE5J = function(flashEvent) {
            if ("readyState"in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol"in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bOR8J(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bOR8J("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.ckC5H("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        }
        ;
        WebSocket.prototype.bOR8J = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.prototype.ckC5H = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pV5a = null;
        WebSocket.bOS8K = {};
        WebSocket.QQ5V = [];
        WebSocket.ckI5N = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.bdy9p(function() {
                WebSocket.pV5a.loadManualPolicyFile(url)
            })
        }
        ;
        WebSocket.bvy4C = function() {
            if (WebSocket.pV5a)
                return;
            if (WebSocket.ckA5F) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.ckA5F
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.ckz5E()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        }
        ;
        WebSocket.cIS0x = function() {
            setTimeout(function() {
                WebSocket.pV5a = document.getElementById("webSocketFlash");
                WebSocket.pV5a.setCallerUrl(location.href);
                WebSocket.pV5a.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.QQ5V.length; ++i) {
                    WebSocket.QQ5V[i]()
                }
                WebSocket.QQ5V = []
            }, 0)
        }
        ;
        WebSocket.cIT0x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.pV5a.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bOS8K[events[i].webSocketId].ckE5J(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        }
        ;
        WebSocket.cIU0x = function(message) {
            console.log(decodeURIComponent(message))
        }
        ;
        WebSocket.ea1x = function(message) {
            console.error(decodeURIComponent(message))
        }
        ;
        WebSocket.bdy9p = function(task) {
            if (WebSocket.pV5a) {
                task()
            } else {
                WebSocket.QQ5V.push(task)
            }
        }
        ;
        WebSocket.ckz5E = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        }
        ;
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.bvy4C()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bvy4C()
                })
            }
        }
    }
    )();
    (function(exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)
                return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        }
        ;
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        }
        ;
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        }
        ;
        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        }
        ;
        XHR.prototype.close = function() {
            this.onClose();
            return this
        }
        ;
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain())
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        }
        ;
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        }
        ;
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain)
                  , usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest
                  , socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:"
                  , isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        }
        ;
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        }
        ;
        HTMLFile.prototype.c9h = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        }
        ;
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        }
        ;
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        }
        ;
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        }
        ;
        HTMLFile.xdomainCheck = function() {
            return false
        }
        ;
        io.transports.push("htmlfile")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        }
        ;
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        }
        ;
        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen)
                return;
            var self = this;
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        }
        ;
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        }
        ;
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        }
        ;
        io.transports.push("xhr-polling")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance"in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c9h(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        }
        ;
        JSONPPolling.prototype.get = function() {
            var self = this
              , script = document.createElement("script")
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            }
            ;
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        }
        ;
        JSONPPolling.prototype.c9h = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        }
        ;
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator)
                return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        }
        ;
        JSONPPolling.check = function() {
            return "document"in global
        }
        ;
        JSONPPolling.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("jsonp-polling")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
}
)();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;
    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.ek1x)
            this.ek1x = {};
        this.bOO8G = n
    }
    ;
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ek1x || !this.ek1x.error || isArray(this.ek1x.error) && !this.ek1x.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1]instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.ek1x)
            return false;
        var handler = this.ek1x[type];
        if (!handler)
            return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                var l = arguments.length;
                var args = new Array(l - 1);
                for (var i = 1; i < l; i++)
                    args[i - 1] = arguments[i];
                handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)
                args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    }
    ;
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.ek1x)
            this.ek1x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ek1x[type]) {
            this.ek1x[type] = listener
        } else if (isArray(this.ek1x[type])) {
            this.ek1x[type].push(listener)
        } else {
            this.ek1x[type] = [this.ek1x[type], listener]
        }
        if (isArray(this.ek1x[type]) && !this.ek1x[type].warned) {
            var m;
            if (this.bOO8G !== undefined) {
                m = this.bOO8G
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.ek1x[type].length > m) {
                this.ek1x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ek1x[type].length);
                console.trace()
            }
        }
        return this
    }
    ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;
        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    }
    ;
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.ek1x || !this.ek1x[type])
            return this;
        var list = this.ek1x[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.ek1x[type]
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.ek1x = {};
            return this
        }
        var events = this.ek1x && this.ek1x[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ek1x[type] = null
        }
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        if (!this.ek1x)
            this.ek1x = {};
        if (!this.ek1x[type])
            this.ek1x[type] = [];
        if (!isArray(this.ek1x[type])) {
            this.ek1x[type] = [this.ek1x[type]]
        }
        return this.ek1x[type]
    }
}
)();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    }
    ;
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    }
    ;
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    }
    ;
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    }
    ;
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    }
    ;
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    }
    ;
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    }
    ;
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
}
)();
(function() {
    eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        }
        ;
        if (!"".replace(/^/, String)) {
            while (c--)
                d[e(c)] = k[c] || e(c);
            k = [function(e) {
                return d[e]
            }
            ];
            e = function() {
                return "\\w+"
            }
            ;
            c = 1
        }
        while (c--)
            if (k[c])
                p = p.replace(new RegExp("\\b" + e(c) + "\\b","g"), k[c]);
        return p
    }("g 1=e;0.d=f(){3(1)h;1=c;3(a.9=='8.b.q'){0.4={2:'p.o.t.s',7:'6',5:'r'}}k{0.4={2:'j.i.n.m',7:'6',5:'l'}}}", 30, 30, "window|inited|pushHost|if|MUSIC_CONFIG|pushKey|6003|pushPort|music|host|location|163|true|initPushConfig|false|function|var|return|58|123|else|7bde08fbeb884e0e8459b1304df970cd|233|180|push|web|com|3b97981848064bbabeaaf2fb1eab7368|net|126".split("|"), 0, {}))
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), l9c = c9h("nm.x"), dE1x = c9h("nm.u"), q9h = c9h("nm.d"), Rf5k = c9h("pomelo"), V0x = 0, b9i, K0x;
    q9h.fp2x({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q0x) {
                V0x = 2;
                var tm6g = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey
                }
                  , i9b = Q0x.account || bb0x
                  , do1x = GUser.userId;
                Rf5k.init(tm6g.host, tm6g.port, true, this.cku5z.f9e(this, {
                    user: do1x,
                    nonce: i9b.nonce,
                    domain: tm6g.domain,
                    productKey: tm6g.key,
                    signature: i9b.signature,
                    expire_time: i9b.expireTime
                }))
            },
            onerror: function() {
                return this.bwq4u()
            }
        }
    });
    q9h.BT9K = NEJ.C();
    b9i = q9h.BT9K.N0x(q9h.hE2x);
    b9i.cv0x = function() {
        var qM5R = !1;
        return function(e9f) {
            if (!qM5R) {
                qM5R = !0
            }
            this.cD1x(e9f);
            Rf5k.on("specify", this.rR5W.f9e(this));
            Rf5k.on("broadcast", this.rR5W.f9e(this))
        }
    }();
    b9i.rR5W = function(d9g) {
        k9b.bd0x(d9g, function(bF0x) {
            h9c.z9q(q9h.BT9K, "message", bF0x)
        }, this)
    }
    ;
    b9i.bwq4u = function() {
        var bA0x = 500;
        return function() {
            V0x = 0;
            Rf5k.disconnect();
            if (bA0x > 6e4)
                bA0x = 500;
            bA0x *= 2
        }
    }();
    b9i.cku5z = function(e9f, bY0x) {
        if (!!bY0x) {
            return this.bwq4u()
        }
        V0x = 3;
        Rf5k.registerAndBind(e9f, function(m9d) {
            if (m9d.code != 200) {
                return this.bwq4u()
            }
            V0x = 4
        }
        .f9e(this))
    }
    ;
    b9i.cIV0x = function() {
        dE1x.ckr5w.fR2x().cIW1x()
    }
    ;
    b9i.cIZ1x = function() {
        dE1x.ckr5w.fR2x().cJc1x()
    }
    ;
    b9i.bwC4G = function() {
        var qM5R = !1;
        return function() {
            if (qM5R)
                return;
            qM5R = !0;
            if (window.initPushConfig) {
                try {
                    window.initPushConfig()
                } catch (e) {}
            }
            this.cm0x("polling-init", {})
        }
    }();
    I0x.fK2x.A9r({
        event: "message",
        element: q9h.BT9K
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), dz1x = c9h("nej.p"), k9b = c9h("nej.u"), n9e = c9h("nm.l"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), cw0x = c9h("api"), b9i, K0x;
    var gs2x = a8i.jz3x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n9e.bwF4J = NEJ.C();
    b9i = n9e.bwF4J.N0x(n9e.el1x);
    K0x = n9e.bwF4J.cr0x;
    b9i.bm0x = function(e9f) {
        e9f.title = "意见反馈";
        this.bn0x(e9f)
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = gs2x
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        this.hL2x = {};
        var JI1x = a8i.E0x;
        var EZ0x = h9c.s9j;
        this.hL2x.submit_btn = JI1x(this.o9f, "u-btn2")[0];
        this.hL2x.cancle_btn = JI1x(this.o9f, "u-btn2")[1];
        this.hL2x.prompt_msg = JI1x(this.o9f, "u-err")[0];
        this.hL2x.zs = JI1x(this.o9f, "zs")[0];
        a8i.ba0x(this.hL2x.zs, "display", "none");
        this.hL2x.fb_txt = JI1x(this.o9f, "u-txt")[0];
        this.hL2x.contact = JI1x(this.o9f, "u-txt")[1];
        a8i.gQ2x(this.hL2x.fb_txt, "holder");
        a8i.gQ2x(this.hL2x.contact, "holder");
        if (a8i.bE0x(this.hL2x.fb_txt.parentNode, "holder-parent")) {
            a8i.ba0x(this.hL2x.fb_txt.parentNode, "display", "block")
        }
        if (a8i.bE0x(this.hL2x.contact.parentNode, "holder-parent")) {
            a8i.ba0x(this.hL2x.contact.parentNode, "display", "block")
        }
        EZ0x(this.hL2x.submit_btn, "click", this.ckm5r.f9e(this));
        EZ0x(this.hL2x.cancle_btn, "click", this.ckl5q.f9e(this));
        EZ0x(this.hL2x.prompt_msg, "msgShow", this.ckj5o.f9e(this));
        EZ0x(this.hL2x.fb_txt, "keyup", this.vb7U.f9e(this));
        EZ0x(this.hL2x.fb_txt, "input", this.eQ2x.f9e(this));
        EZ0x(this.hL2x.contact, "keyup", this.cki5n.f9e(this));
        EZ0x(this.hL2x.contact, "input", this.bOK8C.f9e(this));
        this.kN3x = q9h.hP2x.A9r()
    }
    ;
    b9i.ckm5r = function(d9g) {
        h9c.bf0x(d9g);
        if (this.cR1x())
            return;
        var bp0x = this.hL2x.fb_txt.value.trim();
        var bs0x = bp0x.length;
        var e9f = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bOI8A = this.hL2x.contact.value.trim();
        var bcS9J = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l9c.btS3x(),
            contact: bOI8A
        };
        var i9b = {
            content: bp0x,
            client: "web",
            xInfo: JSON.stringify(bcS9J)
        }
          , ok4o = this.kN3x.cvY7R();
        if (ok4o && ok4o.length) {
            i9b.log = ok4o.join("\n")
        }
        if (bs0x == 0) {
            this.hL2x.prompt_msg.innerHTML = "反馈内容不能为空";
            a8i.ba0x(this.hL2x.prompt_msg, "display", "block");
            return
        }
        if (bOI8A.length > 100) {
            this.hL2x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a8i.ba0x(this.hL2x.prompt_msg, "display", "block");
            return
        }
        this.cR1x(true);
        e9f.data = k9b.cz0x(i9b);
        e9f.onload = this.ckd5i.f9e(this);
        e9f.onerror = this.jf3x.f9e(this);
        v9m.bk0x("/api/feedback/web", e9f)
    }
    ;
    b9i.eQ2x = function(d9g) {
        var bs0x = this.hL2x.fb_txt.value.trim().length;
        if (bs0x > 0)
            a8i.ba0x(this.hL2x.prompt_msg, "display", "none");
        dz1x.ds1x.browser == "ie" && dz1x.ds1x.version < "7.0" ? setTimeout(this.gt2x.f9e(this), 0) : this.gt2x()
    }
    ;
    b9i.vb7U = function(d9g) {
        if (d9g.keyCode === 8)
            this.gt2x()
    }
    ;
    b9i.gt2x = function() {
        var bs0x = this.hL2x.fb_txt.value.trim().length;
        this.hL2x.zs.innerHTML = !bs0x ? "0/140" : bs0x + "/140"
    }
    ;
    b9i.bOK8C = function(d9g) {
        var bs0x = this.hL2x.contact.value.trim().length;
        if (bs0x > 0)
            a8i.ba0x(this.hL2x.prompt_msg, "display", "none")
    }
    ;
    b9i.cki5n = function(d9g) {
        if (d9g.keyCode === 8)
            this.bOK8C()
    }
    ;
    b9i.ckl5q = function(d9g) {
        h9c.co0x(d9g);
        this.bq0x()
    }
    ;
    b9i.ckj5o = function(d9g) {
        var g9d = h9c.X0x(d9g);
        g9d.innerHTML = "请输入反馈内容"
    }
    ;
    b9i.cJd1x = function(cJf1x) {
        var g9d = h9c.X0x(d9g);
        g9d.innerHTML = ""
    }
    ;
    b9i.ckd5i = function(m9d) {
        this.cR1x(false);
        this.bq0x();
        n9e.Z0x.J0x({
            tip: "意见发送成功",
            autoclose: true
        })
    }
    ;
    b9i.jf3x = function(m9d) {
        this.cR1x(false);
        n9e.Z0x.J0x({
            tip: "意见发送失败",
            autoclose: true
        })
    }
    ;
    b9i.cR1x = function(dd1x) {
        return this.dY1x(this.hL2x.submit_btn, dd1x, "发送意见", "发送中...")
    }
    ;
    b9i.J0x = function() {
        K0x.J0x.call(this);
        this.cR1x(false);
        this.hL2x.fb_txt.value = "";
        this.hL2x.contact.value = "";
        a8i.ba0x(this.hL2x.prompt_msg, "display", "none");
        this.gt2x()
    }
    ;
    l9c.cka5f = function(e9f) {
        e9f = e9f || {};
        if (e9f.title === undefined)
            e9f.title = "意见反馈";
        n9e.bwF4J.J0x(e9f)
    }
    ;
    cw0x.feedback = l9c.feedback = l9c.cka5f
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, O0x = c9h("nej.ui"), b9i;
    if (!!O0x.zd8V)
        return;
    O0x.zd8V = NEJ.C();
    b9i = O0x.zd8V.N0x(O0x.eo1x);
    b9i.cv0x = function() {
        this.he2x = this.bOF8x();
        this.cD1x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.cq0x = e9f.index;
        this.gJ2x = e9f.total;
        this.hI2x = e9f.range;
        this.gP2x(e9f.data)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        delete this.be0x;
        delete this.cq0x;
        delete this.gJ2x;
        delete this.hI2x
    }
    ;
    b9i.iJ3x = br0x;
    b9i.bOF8x = function() {
        var gW2x = +(new Date);
        return function() {
            return "itm-" + ++gW2x
        }
    }();
    b9i.GW1x = function() {
        return this.he2x
    }
    ;
    b9i.hh2x = function() {
        return this.be0x
    }
    ;
    b9i.gP2x = function(i9b) {
        this.be0x = i9b || {};
        this.iJ3x(this.be0x)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), O0x = c9h("nej.ui"), b9i, K0x;
    if (!!O0x.uN7G)
        return;
    O0x.uN7G = NEJ.C();
    b9i = O0x.uN7G.N0x(O0x.zd8V);
    K0x = O0x.uN7G.cr0x;
    b9i.bm0x = function(e9f) {
        this.cjY5d = e9f.pkey || "id";
        this.bn0x(e9f)
    }
    ;
    b9i.Gr0x = function(i9b) {
        this.z9q("ondelete", {
            ext: i9b,
            id: this.GW1x(),
            data: this.hh2x(),
            body: this.md4h()
        })
    }
    ;
    b9i.tA6u = function(i9b) {
        this.z9q("onupdate", {
            ext: i9b,
            id: this.GW1x(),
            data: this.hh2x(),
            body: this.md4h()
        })
    }
    ;
    b9i.gP2x = function(i9b) {
        K0x.gP2x.apply(this, arguments);
        this.he2x = this.be0x[this.cjY5d] || this.bOF8x()
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, fD2x = NEJ.R, a8i = c9h("nej.e"), k9b = c9h("nej.u"), O0x = c9h("nej.ui"), b9i, iX3x, byg4k;
    if (!!O0x.byi4m)
        return;
    O0x.byi4m = NEJ.C();
    b9i = O0x.byi4m.N0x(O0x.eo1x);
    b9i.bm0x = function(e9f) {
        this.bcu9l = NEJ.X({}, e9f);
        this.gb2x = NEJ.X({}, e9f);
        delete this.bcu9l.onchange;
        this.gb2x.onchange = this.gm2x.f9e(this);
        this.bn0x(e9f);
        this.cjU5Z({
            number: e9f.number,
            label: e9f.label || bb0x
        })
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        if (!!this.lq3x) {
            this.lq3x.T0x();
            delete this.lq3x
        }
        delete this.bcu9l;
        delete this.gb2x;
        this.cjT5Y();
        this.o9f.innerHTML = "&nbsp;"
    }
    ;
    b9i.cf0x = function() {
        this.mt4x = iX3x
    }
    ;
    b9i.cjU5Z = function(i9b) {
        a8i.dA1x(this.o9f, byg4k, i9b);
        var gW2x = a8i.Mx2x();
        this.gb2x.list = a8i.E0x(this.o9f, "js-i-" + gW2x);
        this.gb2x.pbtn = (a8i.E0x(this.o9f, "js-p-" + gW2x) || fD2x)[0];
        this.gb2x.nbtn = (a8i.E0x(this.o9f, "js-n-" + gW2x) || fD2x)[0]
    }
    ;
    b9i.bV0x = function() {
        this.ch0x()
    }
    ;
    b9i.cJg1x = function(i9b) {
        return a8i.cc0x(byg4k, i9b)
    }
    ;
    b9i.gm2x = function(d9g) {
        if (this.Sb5g)
            return;
        var r9i = d9g.index
          , cB0x = d9g.total;
        this.Sb5g = !0;
        this.Sd5i(r9i, cB0x);
        k9b.bd0x(this.bce9V, function(tQ6K) {
            tQ6K.Sd5i(r9i, cB0x)
        });
        this.Sb5g = !1;
        this.z9q("onchange", d9g)
    }
    ;
    b9i.f9e = function(bH0x) {
        bH0x = a8i.B9s(bH0x);
        if (!bH0x)
            return this;
        var cu0x = NEJ.X({}, this.bcu9l);
        cu0x.parent = bH0x;
        cu0x.index = this.tR6L();
        cu0x.total = this.lE4I();
        var tQ6K = this.constructor.A9r(cu0x);
        tQ6K.xE8w("onchange", this.gb2x.onchange);
        if (!this.bce9V)
            this.bce9V = [];
        this.bce9V.push(tQ6K);
        return this
    }
    ;
    b9i.cjT5Y = function() {
        var blR1x = function(tQ6K, r9i, j9a) {
            tQ6K.T0x();
            j9a.splice(r9i, 1)
        };
        return function() {
            k9b.nC4G(this.bce9V, blR1x)
        }
    }();
    b9i.lp3x = function(r9i) {
        if (!this.lq3x)
            return;
        this.lq3x.lp3x(r9i)
    }
    ;
    b9i.tR6L = function() {
        if (!this.lq3x)
            return 1;
        return this.lq3x.tR6L()
    }
    ;
    b9i.lE4I = function() {
        if (!this.lq3x)
            return 1;
        return this.lq3x.lE4I()
    }
    ;
    b9i.Sd5i = function(r9i, cB0x) {
        if (!this.lq3x)
            return;
        this.lq3x.Sd5i(r9i, cB0x)
    }
    ;
    b9i.byV5a = function(cB0x) {
        if (!this.lq3x)
            return;
        this.lq3x.byV5a(cB0x)
    }
    ;
    iX3x = a8i.uK7D(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    byg4k = a8i.ey1x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), O0x = c9h("nej.ut"), b9i;
    if (!!O0x.bcc9T)
        return;
    O0x.bcc9T = NEJ.C();
    b9i = O0x.bcc9T.N0x(O0x.cH1x);
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.bbX9O = e9f.pbtn;
        this.cy0x = e9f.nbtn;
        this.bbV9M = e9f.sbtn;
        this.bbS9J = e9f.ebtn;
        this.iK3x = e9f.event || "click";
        this.kL3x = e9f.selected || "js-selected";
        this.oy4C = e9f.disabled || "js-disabled";
        this.cjR5W(e9f.list);
        this.Sd5i(e9f.index || 1, e9f.total || 1)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        delete this.bU0x;
        delete this.iK3x;
        delete this.bbX9O;
        delete this.cy0x;
        delete this.bbV9M;
        delete this.bbS9J;
        delete this.bOC8u;
        delete this.gJ2x;
        delete this.cq0x;
        delete this.kL3x;
        delete this.oy4C
    }
    ;
    b9i.cjR5W = function() {
        var bzg5l = function(g9d) {
            this.bU0x.push(g9d);
            this.bX0x([[g9d, this.iK3x, this.ct0x.ex1x(this, 0)]])
        };
        return function(j9a) {
            this.bU0x = [];
            this.bX0x([[this.bbX9O, "click", this.ct0x.ex1x(this, -1)], [this.cy0x, "click", this.ct0x.ex1x(this, 1)], [this.bbV9M, "click", this.ct0x.ex1x(this, -2)], [this.bbS9J, "click", this.ct0x.ex1x(this, 2)]]);
            k9b.bd0x(j9a, bzg5l, this)
        }
    }();
    b9i.HD1x = function(g9d, r9i) {
        if (r9i == null) {
            g9d.innerText = "";
            a8i.ba0x(g9d, "display", "none");
            a8i.y9p(g9d, this.kL3x)
        } else {
            g9d.innerText = r9i;
            a8i.ba0x(g9d, "display", "");
            r9i == this.cq0x ? a8i.w9n(g9d, this.kL3x) : a8i.y9p(g9d, this.kL3x)
        }
    }
    ;
    b9i.bgy0x = function() {
        if (this.cq0x <= 1) {
            a8i.w9n(this.bbX9O, this.oy4C);
            a8i.w9n(this.bbV9M, this.oy4C)
        } else {
            a8i.y9p(this.bbX9O, this.oy4C);
            a8i.y9p(this.bbV9M, this.oy4C)
        }
        if (this.cq0x >= this.gJ2x) {
            a8i.w9n(this.cy0x, this.oy4C);
            a8i.w9n(this.bbS9J, this.oy4C)
        } else {
            a8i.y9p(this.cy0x, this.oy4C);
            a8i.y9p(this.bbS9J, this.oy4C)
        }
    }
    ;
    b9i.bbO9F = br0x;
    b9i.bgA0x = function() {
        this.bbO9F();
        this.bgy0x();
        this.z9q("onchange", {
            last: this.bOC8u,
            total: this.gJ2x,
            index: this.cq0x,
            ext: this.bgB0x
        })
    }
    ;
    b9i.bOB8t = function(r9i) {
        r9i = parseInt(r9i);
        if (isNaN(r9i) || this.gJ2x == null)
            return !1;
        r9i = Math.max(1, Math.min(r9i, this.gJ2x));
        this.bOC8u = this.cq0x;
        this.cq0x = r9i;
        return !0
    }
    ;
    b9i.bgG0x = function(cB0x) {
        cB0x = parseInt(cB0x);
        if (isNaN(cB0x) || cB0x < 1)
            return !1;
        this.gJ2x = cB0x;
        return !0
    }
    ;
    b9i.ct0x = function(d9g, fg2x) {
        h9c.co0x(d9g);
        var G0x = h9c.X0x(d9g);
        if (!G0x || a8i.bE0x(G0x, this.kL3x) || a8i.bE0x(G0x, this.oy4C))
            return;
        var r9i = G0x.innerText;
        switch (fg2x) {
        case 1:
        case -1:
            r9i = this.cq0x + fg2x;
            break;
        case 2:
            r9i = this.gJ2x;
            break;
        case -2:
            r9i = 1;
            break
        }
        this.lp3x(r9i)
    }
    ;
    b9i.tR6L = function() {
        return this.cq0x
    }
    ;
    b9i.lp3x = function(r9i) {
        var cjL5Q = this.cq0x;
        this.bOB8t(r9i);
        if (cjL5Q != this.cq0x)
            this.bgA0x();
        return this
    }
    ;
    b9i.lE4I = function() {
        return this.gJ2x
    }
    ;
    b9i.RV5a = function(cB0x) {
        if (this.bgG0x(cB0x) && this.cq0x != null) {
            this.cq0x = 1;
            this.bgA0x()
        }
        return this
    }
    ;
    b9i.byV5a = function(cB0x) {
        if (this.bgG0x(cB0x)) {
            this.bbO9F();
            this.bgy0x()
        }
        return this
    }
    ;
    b9i.Sd5i = function(r9i, cB0x) {
        if (!this.bgG0x(cB0x) || !this.bOB8t(r9i))
            return this;
        this.bgA0x();
        return this
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), db1x = c9h("nej.x"), O0x = c9h("nej.ut"), b9i;
    if (!!O0x.Sp5u)
        return;
    O0x.Sp5u = NEJ.C();
    b9i = O0x.Sp5u.N0x(O0x.bcc9T);
    b9i.cv0x = function() {
        this.cD1x();
        var g9d = a8i.dk1x("span", "zdot");
        g9d.innerText = "...";
        this.bbK9B = [g9d.cloneNode(true), g9d]
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        this.bOA8s()
    }
    ;
    b9i.bOA8s = function() {
        a8i.mO4S(this.bbK9B[0]);
        a8i.mO4S(this.bbK9B[1])
    }
    ;
    b9i.bbO9F = function() {
        this.bgB0x = {
            last: !1,
            first: !1,
            list: this.bU0x
        };
        this.bOA8s();
        this.HD1x(this.bU0x[0], 1);
        var bM0x = 1
          , bs0x = this.bU0x.length;
        if (this.gJ2x < bs0x) {
            for (var qV5a; bM0x < bs0x; bM0x++) {
                qV5a = bM0x + 1;
                this.HD1x(this.bU0x[bM0x], qV5a > this.gJ2x ? null : qV5a)
            }
            return
        }
        if (this.cq0x > 1) {
            var cA0x = Math.floor((bs0x - 2) / 2)
              , cjJ5O = this.gJ2x - bs0x + 2
              , hD2x = Math.max(2, this.cq0x - cA0x);
            if (this.gJ2x >= bs0x) {
                hD2x = Math.min(hD2x, cjJ5O)
            }
            if (hD2x > 2) {
                this.bU0x[0].insertAdjacentElement("afterEnd", this.bbK9B[0]);
                this.bgB0x.first = !0
            }
            for (var r9i; ; bM0x++) {
                r9i = hD2x + bM0x - 1;
                if (r9i > this.cq0x)
                    break;
                this.HD1x(this.bU0x[bM0x], r9i)
            }
        }
        if (this.cq0x < this.gJ2x) {
            var r9i, hD2x = this.cq0x + 1;
            for (var i = 0, l = bs0x - 2; ; i++,
            bM0x++) {
                r9i = hD2x + i;
                if (bM0x > l || r9i > this.gJ2x)
                    break;
                this.HD1x(this.bU0x[bM0x], r9i)
            }
            if (r9i < this.gJ2x) {
                this.bU0x[bM0x].insertAdjacentElement("beforeBegin", this.bbK9B[1]);
                this.bgB0x.last = !0
            }
            if (r9i <= this.gJ2x) {
                this.HD1x(this.bU0x[bM0x++], this.gJ2x)
            }
        }
        for (; bM0x < bs0x; bM0x++) {
            this.HD1x(this.bU0x[bM0x])
        }
    }
    ;
    a8i.cjE5J = db1x.cjE5J = function(bH0x, e9f) {
        var D0x = a8i.lQ4U(bH0x);
        if (!D0x)
            return null;
        if (!O0x.WZ7S(D0x, O0x.Sp5u)) {
            e9f = e9f || {};
            var j9a = !e9f.clazz ? a8i.df1x(D0x) : a8i.E0x(D0x, e9f.clazz);
            e9f.pbtn = j9a.shift();
            e9f.nbtn = j9a.pop();
            e9f.list = j9a;
            delete e9f.clazz
        }
        return O0x.WZ7S(D0x, O0x.Sp5u, e9f || bb0x)
    }
    ;
    db1x.isChange = !0
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, fD2x = NEJ.R, a8i = c9h("nej.e"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), O0x = c9h("nej.ui"), b9i, K0x, gs2x;
    if (!!O0x.Sw5B)
        return;
    O0x.Sw5B = NEJ.C();
    b9i = O0x.Sw5B.N0x(O0x.byi4m);
    K0x = O0x.Sw5B.cr0x;
    b9i.bm0x = function(e9f) {
        e9f.number = parseInt(e9f.number) || 9;
        this.bn0x(e9f);
        this.lq3x = I0x.Sp5u.A9r(this.gb2x)
    }
    ;
    b9i.gm2x = function(d9g) {
        if (!!this.bcu9l.noend) {
            var bOv8n = d9g.ext || bb0x
              , j9a = bOv8n.list || fD2x;
            if (bOv8n.last) {
                a8i.ba0x(j9a[j9a.length - 1], "display", "none")
            }
        }
        K0x.gm2x.apply(this, arguments)
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), bc0x = c9h("nej.ui"), O0x = c9h("nej.ut"), b9i;
    if (!!O0x.bbA9r)
        return;
    O0x.bbA9r = NEJ.C();
    b9i = O0x.bbA9r.N0x(O0x.cH1x);
    b9i.bm0x = function(e9f) {
        this.jm3x = {};
        this.bn0x(e9f);
        this.iu3x = a8i.B9s(e9f.parent);
        this.ft2x = {
            parent: this.iu3x
        };
        this.oM5R = parseInt(e9f.limit) || 10;
        this.zM8E = parseInt(e9f.first) || this.oM5R;
        this.cjA5F(e9f.item);
        this.cjz5E(e9f.cache || bb0x);
        this.cjx5C(e9f.pager || bb0x);
        this.gP2x()
    }
    ;
    b9i.bB0x = function() {
        this.z9q("onbeforerecycle");
        this.SH6B();
        this.bG0x();
        if (this.jm3x.clear) {
            this.S0x.wm7f(this.jm3x.key)
        }
        this.S0x.T0x();
        if (!!this.jE3x) {
            this.jE3x.T0x();
            delete this.jE3x
        }
        delete this.bOs8k;
        delete this.gb2x;
        delete this.bbl9c;
        delete this.S0x;
        delete this.iu3x;
        delete this.SM6G;
        delete this.ft2x;
        delete this.jm3x
    }
    ;
    b9i.bOr8j = function() {
        var dh1x = /\{(.*?)\}/gi
          , cjt5y = function(ph5m, i9b) {
            return (ph5m || "{id}{seed}").replace(dh1x, function($1, $2) {
                var C0x = i9b[$2];
                return C0x == null ? $1 : C0x
            })
        };
        return function(D0x) {
            var L0x = cjt5y(this.ft2x.jstIdTempalte, {
                id: D0x,
                seed: a8i.Mx2x()
            });
            if (!this.ft2x.jstIdType) {
                return a8i.B9s(L0x)
            } else if (this.ft2x.jstIdType == 1) {
                return (a8i.E0x(this.iu3x, L0x) || [])[0]
            }
        }
    }();
    b9i.BV9M = function(bM0x, bj0x, gk2x, bs0x) {
        var m9d = {
            index: 1,
            total: 1
        };
        if (bj0x >= bM0x) {
            m9d.index = Math.floor((bj0x - bM0x) / gk2x) + 2
        }
        if (bs0x > bM0x) {
            m9d.total = Math.ceil((bs0x - bM0x) / gk2x) + 1
        }
        return m9d
    }
    ;
    b9i.bOq8i = function(L0x) {
        delete this.SM6G;
        this.JD1x = L0x;
        this.bX0x([[this.iu3x, "click", this.cjn5s.f9e(this)]])
    }
    ;
    b9i.cjA5F = function(p9g) {
        if (k9b.fJ2x(p9g)) {
            this.bOq8i(p9g);
            return
        }
        NEJ.X(this.ft2x, p9g);
        var ef1x = this.ft2x.klass;
        delete this.ft2x.klass;
        if (k9b.fJ2x(ef1x)) {
            this.bOq8i(ef1x);
            return
        }
        delete this.JD1x;
        this.SM6G = ef1x;
        this.ft2x.ondelete = this.z9q.f9e(this, "ondelete");
        this.ft2x.onupdate = this.z9q.f9e(this, "onupdate")
    }
    ;
    b9i.cjz5E = function(R0x) {
        var ef1x = R0x.klass
          , kG3x = NEJ.X({}, R0x);
        this.jm3x.key = kG3x.lkey;
        this.jm3x.data = kG3x.data || {};
        this.jm3x.clear = !!kG3x.clear;
        this.ft2x.pkey = kG3x.key || "id";
        kG3x.onlistload = this.bhO0x.f9e(this);
        kG3x.onpullrefresh = this.cjm4q.f9e(this);
        if (!!ef1x && "onlistchange"in ef1x) {
            this.bX0x([[ef1x, "listchange", this.bhU0x.f9e(this)]])
        } else {
            kG3x.onitemadd = this.bbf9W.f9e(this);
            kG3x.onitemdelete = this.bbb9S.f9e(this);
            kG3x.onitemupdate = this.bOp8h.f9e(this)
        }
        this.S0x = (ef1x || O0x.Ry5D).A9r(kG3x);
        if (R0x.total != null) {
            this.S0x.RV5a(this.jm3x.key, R0x.total)
        }
        if (!!R0x.list) {
            this.S0x.uJ7C(this.jm3x.key, R0x.list)
        }
    }
    ;
    b9i.cjx5C = function(tQ6K) {
        this.bOs8k = tQ6K.klass || bc0x.Sw5B;
        this.gb2x = NEJ.X({}, tQ6K);
        if (k9b.ec1x(tQ6K.parent)) {
            this.gb2x.parent = tQ6K.parent[0];
            this.SV6P = tQ6K.parent.slice(1);
            if (!this.SV6P || !this.SV6P.length) {
                delete this.SV6P
            }
        }
        delete this.gb2x.klass
    }
    ;
    b9i.SH6B = function() {
        var gM2x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z9q("onbeforelistclear", {
                parent: this.iu3x
            });
            if (!!this.fP2x && this.fP2x.length > 0) {
                this.fP2x = this.SM6G.T0x(this.fP2x);
                delete this.fP2x
            }
            if (gM2x.test(this.iu3x.tagName)) {
                a8i.bRl0x(this.iu3x)
            } else {
                this.iu3x.innerHTML = ""
            }
        }
    }();
    b9i.big0x = function(baV9M) {
        if (!!this.gb2x.fixed)
            return;
        a8i.ba0x(this.gb2x.parent, "display", baV9M);
        k9b.bd0x(this.SV6P, function(bH0x) {
            a8i.ba0x(bH0x, "display", baV9M)
        }, this)
    }
    ;
    b9i.bij0x = function() {
        var r9i = this.gb2x.index || 1;
        delete this.gb2x.index;
        if (!!this.jE3x) {
            r9i = this.jE3x.tR6L()
        }
        this.Cx9o({
            last: r9i,
            index: r9i
        })
    }
    ;
    b9i.Cx9o = function(d9g) {
        this.z9q("onpagechange", d9g)
    }
    ;
    b9i.bOo8g = function(bj0x) {
        this.jm3x.offset = bj0x;
        this.bbI9z()
    }
    ;
    b9i.bOm8e = function(e9f) {
        return e9f
    }
    ;
    b9i.bbI9z = function() {
        this.Tb6V();
        var i9b = this.jm3x.data;
        i9b.offset = this.jm3x.offset;
        var qr5w = i9b.offset == 0;
        i9b.total = qr5w;
        this.jm3x.limit = qr5w ? this.zM8E : this.oM5R;
        i9b.limit = this.jm3x.limit;
        this.S0x.lJ4N(this.bOm8e(NEJ.X({}, this.jm3x)))
    }
    ;
    b9i.bhO0x = function(e9f) {
        if (e9f.key != this.jm3x.key || e9f.offset != this.jm3x.offset)
            return;
        this.baR8J();
        var j9a = this.S0x.hH2x(e9f.key);
        if (!j9a || !j9a.length) {
            this.bis0x();
            return
        }
        var gk2x = e9f.limit
          , bj0x = e9f.offset;
        if (this.bix0x(j9a, bj0x, gk2x))
            return;
        this.z9q("onbeforelistrender", {
            list: j9a,
            offset: bj0x,
            parent: this.iu3x
        });
        if (!!this.JD1x) {
            this.ft2x.xlist = j9a;
            this.ft2x.beg = bj0x;
            this.ft2x.end = Math.min(j9a.length, bj0x + gk2x) - 1;
            this.ft2x.act = "list";
            var dU1x = a8i.cc0x(this.JD1x, this.ft2x);
            this.Tf6Z(dU1x)
        } else {
            this.ft2x.limit = gk2x;
            this.ft2x.offset = bj0x;
            var hy2x = a8i.CX9O(j9a, this.SM6G, this.ft2x);
            this.Th6b(hy2x)
        }
        this.z9q("onafterlistrender", {
            list: j9a,
            offset: bj0x,
            parent: this.iu3x
        })
    }
    ;
    b9i.cjm4q = function(e9f) {
        if (!this.bbl9c)
            return;
        delete this.bbl9c;
        this.baR8J("onafterpullrefresh");
        this.gP2x()
    }
    ;
    b9i.bOj8b = function(r9i, cB0x) {
        if (!!this.jE3x) {
            var xG8y = this.jE3x.tR6L()
              , cjd4h = this.jE3x.lE4I();
            if (xG8y > cB0x || cB0x != cjd4h) {
                this.jE3x.T0x();
                delete this.jE3x;
                this.Cx9o({
                    last: xG8y,
                    index: Math.min(r9i, cB0x)
                });
                return !0
            }
        } else {
            this.gb2x.index = r9i;
            this.gb2x.total = cB0x;
            this.jE3x = this.bOs8k.A9r(this.gb2x);
            this.jE3x.xE8w("onchange", this.Cx9o.f9e(this));
            k9b.bd0x(this.SV6P, function(bH0x) {
                this.jE3x.f9e(bH0x)
            }, this)
        }
    }
    ;
    b9i.baM8E = function() {
        var gW2x = +(new Date);
        return function(i9b) {
            var D0x = i9b[this.ft2x.pkey];
            if (!D0x) {
                i9b["dirty-data"] = !0;
                i9b[this.ft2x.pkey] = "dirty-" + gW2x++
            }
            return i9b
        }
    }();
    b9i.baJ8B = function(i9b) {
        var D0x = i9b[this.ft2x.pkey];
        if (!!i9b["dirty-data"]) {
            delete i9b["dirty-data"];
            delete i9b[this.ft2x.pkey]
        }
        return D0x
    }
    ;
    b9i.baI8A = function() {
        var ciZ4d = function(lj3x, nd4h) {
            this.iu3x.insertAdjacentElement(lj3x, nd4h)
        };
        return function(lj3x, i9b) {
            var IV1x = [i9b];
            if (!!this.JD1x) {
                this.ft2x.xlist = IV1x;
                this.ft2x.beg = 0;
                this.ft2x.end = 0;
                this.ft2x.act = "add";
                this.Tf6Z(a8i.cc0x(this.JD1x, this.ft2x), lj3x)
            } else {
                this.ft2x.limit = 1;
                this.ft2x.offset = 0;
                this.ft2x.parent = ciZ4d.f9e(this, lj3x);
                var hy2x = a8i.CX9O(IV1x, this.SM6G, this.ft2x);
                this.ft2x.parent = this.iu3x;
                this.Th6b(hy2x)
            }
        }
    }();
    b9i.Tb6V = br0x;
    b9i.baR8J = function(W0x) {
        var d9g = {
            parent: this.iu3x
        };
        this.z9q(W0x || "onafterlistload", d9g);
        if (!d9g.stopped) {
            a8i.mO4S(this.cM1x)
        }
    }
    ;
    b9i.bix0x = br0x;
    b9i.baB8t = function(bF0x, lj3x) {
        if (k9b.fJ2x(bF0x)) {
            if (!this.cM1x)
                this.cM1x = a8i.dk1x("div");
            this.cM1x.innerHTML = bF0x
        } else {
            this.cM1x = bF0x
        }
        this.iu3x.insertAdjacentElement(lj3x || "beforeEnd", this.cM1x)
    }
    ;
    b9i.AV9M = function(W0x, kD3x, lj3x) {
        var d9g = {
            parent: this.iu3x
        };
        this.z9q(W0x, d9g);
        if (!d9g.stopped) {
            this.baB8t(d9g.value || kD3x, lj3x)
        }
    }
    ;
    b9i.bis0x = br0x;
    b9i.Tf6Z = br0x;
    b9i.Th6b = br0x;
    b9i.cjn5s = function() {
        var gM2x = /^(?:delete|update)$/;
        return function(d9g) {
            var g9d = h9c.X0x(d9g, "d:action");
            if (!g9d)
                return;
            var U0x = a8i.t9k(g9d, "action");
            if (!gM2x.test(U0x))
                return;
            var D0x = a8i.t9k(g9d, "id");
            if (!D0x)
                return;
            var p9g = this.S0x.eO2x(D0x);
            if (!p9g)
                return;
            h9c.bf0x(d9g);
            this.z9q("on" + U0x, {
                data: p9g,
                id: p9g[this.ft2x.pkey],
                body: a8i.B9s(this.bOr8j(D0x))
            })
        }
    }();
    b9i.bbf9W = br0x;
    b9i.bby9p = function(d9g) {
        var i9b = d9g.data || {}
          , e9f = {
            data: i9b,
            key: this.jm3x.key,
            id: i9b[this.ft2x.pkey]
        };
        this.z9q("onbeforedelete", e9f);
        this.S0x.JF1x(e9f)
    }
    ;
    b9i.bbb9S = br0x;
    b9i.bbx9o = function(d9g) {
        var i9b = d9g.data || {}
          , e9f = {
            data: i9b,
            key: this.jm3x.key
        };
        this.z9q("onbeforeupdate", e9f);
        this.S0x.bbL9C(e9f)
    }
    ;
    b9i.bOp8h = function(d9g) {
        this.Tp6j(d9g, "onafterupdate");
        if (d9g.stopped)
            return;
        var D0x = d9g.data[this.ft2x.pkey];
        if (!!this.fP2x) {
            var p9g = a8i.bVJ1x(D0x);
            if (!!p9g)
                p9g.gP2x(d9g.data)
        } else {
            var g9d = a8i.B9s(D0x + "" + a8i.Mx2x());
            if (!g9d)
                return;
            var j9a = this.S0x.hH2x(d9g.key)
              , r9i = k9b.dm1x(j9a, d9g.data);
            if (r9i < 0)
                return;
            this.ft2x.list = j9a;
            this.ft2x.beg = r9i;
            this.ft2x.end = r9i;
            this.ft2x.act = "update";
            var dU1x = a8i.cc0x(this.JD1x, this.ft2x);
            g9d.insertAdjacentHTML("afterEnd", dU1x);
            a8i.cO1x(g9d)
        }
    }
    ;
    b9i.Tp6j = function(d9g, W0x) {
        var p9g = d9g.data;
        if (!p9g || p9g[this.ft2x.pkey] == null) {
            this.z9q("onerror", d9g);
            d9g.stopped = !0
        }
        if (!d9g.stopped) {
            this.z9q(W0x, d9g)
        }
    }
    ;
    b9i.biU1x = br0x;
    b9i.biW1x = br0x;
    b9i.bhU0x = function(d9g) {
        if (d9g.key != this.jm3x.key)
            return;
        switch (d9g.action) {
        case "add":
            this.bbf9W(d9g);
            break;
        case "delete":
            this.bbb9S(d9g);
            break;
        case "update":
            this.bOp8h(d9g);
            break;
        case "refresh":
            this.gP2x();
            break;
        case "unshift":
            this.biW1x(d9g.offset, d9g.limit);
            break;
        case "append":
            this.biU1x(d9g.offset, d9g.limit);
            break
        }
    }
    ;
    b9i.qD5I = function(p9g) {
        this.bbx9o({
            data: p9g
        })
    }
    ;
    b9i.mE4I = function(p9g) {
        this.bby9p({
            data: p9g
        })
    }
    ;
    b9i.ur6l = function(p9g) {
        this.S0x.jq3x({
            data: p9g,
            key: this.jm3x.key
        })
    }
    ;
    b9i.uv7o = function() {
        return this.S0x
    }
    ;
    b9i.bjk1x = function(i9b) {
        this.baI8A("afterBegin", this.baM8E(i9b));
        return this.baJ8B(i9b)
    }
    ;
    b9i.bOf8X = function(i9b) {
        this.baI8A("beforeEnd", this.baM8E(i9b));
        return this.baJ8B(i9b)
    }
    ;
    b9i.gP2x = function() {
        this.SH6B();
        this.bij0x()
    }
    ;
    b9i.cJh1x = function() {
        this.S0x.wm7f(this.jm3x.key);
        this.gP2x()
    }
    ;
    b9i.bqa2x = function() {
        if (!!this.bbl9c)
            return;
        this.bbl9c = !0;
        this.AV9M("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var j9a = this.S0x.hH2x(this.jm3x.key);
        if (j9a && j9a[0]) {
            this.jm3x.data.aftertime = j9a[0].eventTime || ""
        }
        this.S0x.bqa2x({
            key: this.jm3x.key,
            data: this.jm3x.data
        })
    }
    ;
    b9i.lE4I = function() {
        return this.S0x.lE4I(this.jm3x.key)
    }
    ;
    b9i.bOe8W = function() {
        return this.jE3x
    }
    ;
    b9i.bco9f = function() {
        return this.S0x.bco9f(this.jm3x.key)
    }
    ;
    b9i.ciQ4U = function() {
        return this.fP2x
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, fD2x = NEJ.R, k9b = c9h("nej.u"), a8i = c9h("nej.e"), O0x = c9h("nej.ut"), b9i, K0x;
    if (!!O0x.ks3x)
        return;
    O0x.ks3x = NEJ.C();
    b9i = O0x.ks3x.N0x(O0x.bbA9r);
    K0x = O0x.ks3x.cr0x;
    b9i.BV9M = function(bj0x, bs0x) {
        return K0x.BV9M.call(this, this.zM8E, bj0x, this.oM5R, bs0x)
    }
    ;
    b9i.bjt1x = function(r9i) {
        var bj0x = 0;
        if (r9i > 1)
            bj0x = this.zM8E + (r9i - 2) * this.oM5R;
        return bj0x
    }
    ;
    b9i.Cx9o = function(d9g) {
        K0x.Cx9o.apply(this, arguments);
        if (!d9g.stopped) {
            this.bOo8g(this.bjt1x(d9g.index))
        }
    }
    ;
    b9i.Tb6V = function() {
        this.SH6B();
        this.AV9M("onbeforelistload", "列表加载中...")
    }
    ;
    b9i.baR8J = function() {
        K0x.baR8J.apply(this, arguments);
        this.SH6B()
    }
    ;
    b9i.bix0x = function(j9a, bj0x, gk2x) {
        var bx0x = this.BV9M(bj0x, j9a.length);
        if (this.bOj8b(bx0x.index, bx0x.total))
            return !0;
        this.big0x(bx0x.total > 1 ? "" : "none")
    }
    ;
    b9i.bis0x = function() {
        this.AV9M("onemptylist", "没有列表数据！")
    }
    ;
    b9i.baB8t = function(bF0x, lj3x) {
        if (!lj3x && k9b.fJ2x(bF0x)) {
            this.iu3x.innerHTML = bF0x;
            return
        }
        K0x.baB8t.apply(this, arguments)
    }
    ;
    b9i.Tf6Z = function(dU1x) {
        this.iu3x.innerHTML = dU1x
    }
    ;
    b9i.Th6b = function(hy2x) {
        this.fP2x = hy2x
    }
    ;
    b9i.bbf9W = function(d9g) {
        this.Tp6j(d9g, "onafteradd");
        if (!d9g.stopped)
            this.gP2x()
    }
    ;
    b9i.bbb9S = function(d9g) {
        this.Tp6j(d9g, "onafterdelete");
        if (!d9g.stopped)
            this.gP2x()
    }
    ;
    b9i.biU1x = function(bj0x, gk2x) {
        var r9i = 1;
        if (!!this.jE3x) {
            r9i = this.jE3x.tR6L()
        }
        var kk3x = this.bjt1x(r9i)
          , fZ2x = kk3x + (r9i > 1 ? this.oM5R : this.zM8E);
        if (bj0x >= fZ2x && !!this.jE3x) {
            var bx0x = this.BV9M(0, this.lE4I());
            this.jE3x.byV5a(bx0x.total);
            this.big0x(bx0x.total > 1 ? "" : "none")
        } else {
            this.gP2x()
        }
    }
    ;
    b9i.biW1x = function(bj0x, gk2x) {
        var r9i = 1;
        if (!!this.jE3x) {
            r9i = this.jE3x.tR6L()
        }
        var kk3x = this.bjt1x(r9i)
          , bx0x = this.BV9M(kk3x, this.lE4I());
        this.Cx9o({
            last: r9i,
            index: bx0x.index
        })
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), I0x = c9h("nej.ut"), k9b = c9h("nej.u"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), x9o = c9h("nm.w"), fv2x = 40, b9i, K0x;
    x9o.bar8j = NEJ.C();
    b9i = x9o.bar8j.N0x(I0x.cH1x);
    K0x = x9o.bar8j.cr0x;
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.Tu6o = e9f.inputer;
        this.bjx1x = e9f.tipper;
        this.bX0x([[this.Tu6o, "input", this.eQ2x.f9e(this)]])
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        this.Lc2x(null, null)
    }
    ;
    b9i.eQ2x = function(d9g) {
        if (d9g && d9g.type == "keyup" && (d9g.keyCode != 8 || d9g.keyCode != 68))
            return;
        var W0x = this.Tu6o.value, cJi1x;
        if (l9c.RU5Z(W0x) > fv2x) {
            this.Tu6o.value = l9c.DJ0x(W0x, fv2x);
            this.Lc2x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f9e(this))
        } else if (W0x.indexOf("#") >= 0 || W0x.indexOf("@") >= 0) {
            this.Lc2x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Lc2x(null, null);
            this.z9q("onchange", {
                value: W0x
            })
        }
    }
    ;
    b9i.ciM4Q = function() {
        this.eQ2x()
    }
    ;
    b9i.Lc2x = function() {
        var D0x = 0;
        return function(dL1x, bOc8U) {
            if (!!D0x)
                window.clearTimeout(D0x);
            if (!dL1x) {
                a8i.w9n(this.bjx1x, "f-vhide");
                this.bOb8T = !1;
                return
            }
            this.bjx1x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dL1x;
            a8i.y9p(this.bjx1x, "f-vhide");
            this.bOb8T = !0;
            if (k9b.gO2x(bOc8U))
                D0x = window.setTimeout(function() {
                    this.Lc2x(null, null);
                    bOc8U()
                }
                .f9e(this), 1e3)
        }
    }();
    b9i.bNZ8R = function() {
        if (this.bOb8T)
            return !1;
        if (l9c.kp3x(this.Tu6o.value)) {
            this.Lc2x("歌单名不能为空");
            return !1
        }
        return !0
    }
    ;
    b9i.ga2x = function() {
        return this.Tu6o.value
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), bC0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, K0x;
    n9e.bal8d = NEJ.C();
    b9i = n9e.bal8d.N0x(n9e.el1x);
    K0x = n9e.bal8d.cr0x;
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.bak8c = {
            inputer: j9a[0],
            tipper: j9a[1]
        };
        this.iN3x = {
            onerror: this.bNX8P.f9e(this),
            onitemadd: this.bNX8P.f9e(this)
        };
        this.ma4e = j9a[2];
        h9c.s9j(j9a[2], "click", this.Go0x.f9e(this));
        h9c.s9j(j9a[3], "click", this.Dt0x.f9e(this));
        h9c.s9j(this.o9f, "keypress", this.bNW8O.f9e(this))
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "m-wgt-create"
    }
    ;
    b9i.bm0x = function(e9f) {
        e9f.clazz = " m-layer-w2";
        e9f.parent = e9f.parent || document.body;
        e9f.title = "新建歌单";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bn0x(e9f);
        this.bak8c.inputer.value = e9f.name || "";
        this.vP7I = x9o.bar8j.A9r(this.bak8c);
        this.vP7I.ciM4Q();
        this.S0x = q9h.io3x.A9r(this.iN3x);
        setTimeout(function() {
            this.bak8c.inputer.focus()
        }
        .f9e(this), 0)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        if (this.vP7I) {
            this.vP7I.T0x();
            delete this.vP7I
        }
        this.uE7x(!1);
        this.bak8c.inputer.value = ""
    }
    ;
    b9i.uE7x = function(TF6z) {
        this.pr5w = TF6z;
        if (TF6z) {
            this.ma4e.innerHTML = "<i>新建中...</i>";
            a8i.w9n(this.ma4e, "u-btn2-dis")
        } else {
            this.ma4e.innerHTML = "<i>新 建</i>";
            a8i.y9p(this.ma4e, "u-btn2-dis")
        }
    }
    ;
    b9i.Go0x = function() {
        if (this.pr5w || !this.vP7I.bNZ8R())
            return;
        var cu0x = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.vP7I.ga2x()
            },
            offset: 1
        };
        this.S0x.jq3x(cu0x);
        this.uE7x(!0)
    }
    ;
    b9i.bNX8P = function(d9g) {
        var bZ0x = (d9g.result || bb0x).code;
        if (!bZ0x) {
            this.z9q("onsuccess", d9g.data)
        } else {
            this.z9q("onerror", d9g)
        }
        this.bq0x()
    }
    ;
    b9i.Dt0x = function() {
        this.bq0x()
    }
    ;
    b9i.bNW8O = function(d9g) {
        if (d9g.keyCode == 13)
            this.Go0x()
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), v9m = c9h("nej.j"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), b9i, K0x;
    n9e.bka1x = NEJ.C();
    b9i = n9e.bka1x.N0x(n9e.el1x);
    K0x = n9e.bka1x.cr0x;
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.iR3x = {
            limit: 301,
            parent: j9a[1],
            cache: {
                klass: q9h.io3x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bkf1x.f9e(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l9c.DD0x,
                escape: k9b.dI1x
            }
        };
        this.iN3x = {
            onsuccess: this.baa8S.f9e(this),
            onerror: this.dQ1x.f9e(this)
        };
        h9c.s9j(j9a[0], "click", this.Go0x.f9e(this));
        h9c.s9j(j9a[1], "click", this.lh3x.f9e(this))
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "m-wgt-subscribe"
    }
    ;
    b9i.bm0x = function(e9f) {
        e9f.parent = e9f.parent || document.body;
        e9f.clazz = " m-layer-w2";
        e9f.title = "添加到歌单";
        e9f.draggable = !0;
        e9f.mask = !0;
        this.bn0x(e9f);
        this.ZS8K = (e9f.tracks || []).reverse();
        this.iR3x.item.size = this.ZS8K.length;
        this.iN3x.name = e9f.name || "";
        this.bNV8N = q9h.wt7m.A9r({
            onaddsuccess: this.Ec0x.f9e(this)
        });
        this.tL6F = q9h.io3x.A9r({
            onlistload: this.ciu4y.f9e(this)
        });
        this.tL6F.bSU0x();
        k9b.bd0x(this.ZS8K, function(p9g, r9i, j9a) {
            if (!k9b.lY4c(p9g)) {
                j9a[r9i] = this.bNV8N.eO2x(p9g) || p9g
            }
        }, this)
    }
    ;
    b9i.ciu4y = function() {
        if (this.dM1x)
            this.dM1x.T0x();
        this.dM1x = I0x.ks3x.A9r(this.iR3x)
    }
    ;
    b9i.Go0x = function() {
        this.bq0x();
        if (this.GX1x)
            this.GX1x.T0x();
        this.GX1x = n9e.bal8d.A9r(this.iN3x);
        this.GX1x.J0x()
    }
    ;
    b9i.lh3x = function() {
        var cit4x = function(g9d) {
            while (g9d && g9d != document) {
                if (g9d.tagName.toLowerCase() == "li") {
                    return g9d
                }
                g9d = g9d.parentNode
            }
        };
        return function(d9g) {
            h9c.co0x(d9g);
            var G0x = h9c.X0x(d9g)
              , AS9J = cit4x(G0x);
            if (!!AS9J && !a8i.bE0x(AS9J, "dis")) {
                this.baa8S({
                    id: a8i.t9k(AS9J, "id")
                })
            }
        }
    }();
    b9i.baa8S = function(d9g) {
        var D0x = d9g.id;
        if (!D0x || !this.ZS8K.length)
            return;
        this.bNV8N.jq3x({
            key: "track_playlist-" + D0x,
            data: {
                tracks: this.ZS8K,
                pid: D0x
            }
        });
        this.bq0x()
    }
    ;
    b9i.Ec0x = function() {
        this.z9q("onsuccess");
        n9e.Z0x.J0x({
            tip: "收藏成功"
        })
    }
    ;
    b9i.dQ1x = function(d9g) {
        this.bq0x();
        this.z9q("onerror", d9g);
        var cP1x = "收藏失败";
        switch (d9g.code) {
        case 405:
            cP1x = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cP1x = "歌单数量超过限制";
            break;
        case 502:
            cP1x = "歌曲已经存在"
        }
        n9e.Z0x.J0x({
            tip: cP1x,
            type: 2
        })
    }
    ;
    b9i.bkf1x = function() {
        this.bq0x();
        n9e.Z0x.J0x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    }
    ;
    l9c.nT4X = function(e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n9e.bka1x.J0x(e9f)
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , br0x = NEJ.F
      , dz1x = c9h("nej.p")
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , v9m = c9h("nej.j")
      , k9b = c9h("nej.u")
      , l9c = c9h("nm.x");
    var bkA1x, pm5r, Y0x = decodeURIComponent(location.href), kf3x = /.+(https?:\/\/.+\/proxy.html)/.test(Y0x) ? RegExp.$1 : "";
    if (!!kf3x) {
        v9m.uM7F("mail_proxy_url", kf3x)
    } else {
        kf3x = v9m.tV6P("mail_proxy_url") || "about:blank"
    }
    bkA1x = a8i.bcR9I({
        src: kf3x,
        onload: function() {
            pm5r = true
        }
    });
    var bNS8K = function() {
        v9m.gI2x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cir4v = function() {
        if (dz1x.ds1x.browser == "ie" && parseInt(dz1x.ds1x.version) < 9) {
            l9c.eN2x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l9c.MK2x = function(u9l, D0x, U0x) {
        if (!cir4v())
            return;
        bNS8K();
        if (U0x == "stop") {
            if (!pm5r)
                throw "proxy not loaded";
            bNS8K();
            bkA1x.contentWindow.location.replace(kf3x + "#" + k9b.cz0x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bkA1x.contentWindow.location.replace(kf3x + "#" + k9b.cz0x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u9l,
                    id: D0x,
                    s: +(new Date),
                    action: U0x
                })
            }))
        }
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , br0x = NEJ.F
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , v9m = c9h("nej.j")
      , k9b = c9h("nej.u")
      , l9c = c9h("nm.x")
      , n9e = c9h("nm.l")
      , q9h = c9h("nm.d");
    var kN3x = q9h.hP2x.A9r();
    var pH5M = q9h.wt7m.A9r({
        onlistload: cij4n,
        onitemload: cii4m,
        onerror: dQ1x
    });
    var Hj1x = q9h.rC5H.A9r({
        onlistload: cig4k,
        onitemload: cie4i,
        onerror: dQ1x
    });
    var bNO8G = {};
    function xt8l(d9g) {
        var g9d = h9c.X0x(d9g, "d:resAction")
          , U0x = a8i.t9k(g9d, "resAction");
        if (g9d && (U0x == "play" || U0x == "addto")) {
            var u9l = parseInt(a8i.t9k(g9d, "resType"));
            bNN8F({
                action: U0x,
                type: u9l,
                id: a8i.t9k(g9d, "resId"),
                from: a8i.t9k(g9d, "resFrom"),
                data: a8i.t9k(g9d, "resData"),
                order: a8i.t9k(g9d, "resOrder"),
                node: g9d
            });
            if (u9l != 13)
                bNM8E(g9d)
        }
    }
    function bNN8F(bT0x) {
        var U0x = bT0x.action
          , u9l = bT0x.type
          , D0x = bT0x.id
          , ei1x = bT0x.from
          , i9b = bT0x.data
          , uk6e = bT0x.order
          , e9f = {
            limit: 1e3,
            offset: 0,
            data: {
                id: D0x
            },
            ext: {
                id: D0x,
                action: U0x,
                type: u9l,
                from: ei1x,
                data: i9b,
                node: bT0x.node
            }
        };
        if (U0x != "play" && U0x != "addto" || !u9l)
            return;
        if (window.GRef && GRef == "mail") {
            l9c.MK2x(u9l, D0x, U0x);
            return
        }
        switch (u9l) {
        case 13:
            e9f.key = "track_playlist-" + D0x;
            pH5M.lJ4N(e9f);
            break;
        case 17:
            e9f.key = "program";
            e9f.id = D0x;
            Hj1x.bcg9X(e9f);
            if (U0x == "play") {
                v9m.bk0x("/api/dj/program/listen", {
                    query: {
                        id: D0x
                    }
                })
            }
            break;
        case 18:
            e9f.key = "track";
            e9f.id = D0x;
            pH5M.bcg9X(e9f);
            break;
        case 19:
            e9f.key = "track_album-" + D0x;
            pH5M.lJ4N(e9f);
            break;
        case 24:
            e9f.key = "track_day";
            pH5M.lJ4N(e9f);
            break;
        case 2:
            e9f.key = "track_artist_top-" + D0x;
            pH5M.lJ4N(e9f);
            break;
        case 70:
            e9f.key = "program_djradio-" + D0x + "-" + uk6e;
            e9f.data.radioId = D0x;
            e9f.data.asc = uk6e == 2;
            Hj1x.lJ4N(e9f);
            break
        }
    }
    function bNK8C(j9a) {
        var m9d = [];
        k9b.bd0x(j9a, function(p9g) {
            if (p9g.mainSong) {
                p9g.mainSong.program = p9g;
                m9d.push(p9g.mainSong);
                p9g.localupdatetime = +(new Date);
                pH5M.cwQ8I(p9g.mainSong);
                p9g.mainTrackId = p9g.mainSong.id;
                delete p9g.mainSong
            } else {
                var bNJ8B = pH5M.eO2x(p9g.mainTrackId);
                bNJ8B && m9d.push(bNJ8B)
            }
        });
        return m9d
    }
    function ZA8s(j9a, e9f) {
        var sX6R = e9f.action == "play" && e9f.type != 17 && e9f.type != 18
          , gi2x = e9f.action == "play";
        if (!j9a.length)
            return;
        if (e9f.type == 19) {
            j9a = l9c.Lz2x(j9a, true, {
                play: true
            }, {
                source: "album",
                sourceid: e9f.id
            })
        } else {
            j9a = l9c.Lz2x(j9a, true, {
                play: true
            })
        }
        k9b.bd0x(j9a, function(p9g) {
            p9g.source = l9c.bsv3x({
                fid: e9f.from,
                fdata: e9f.data,
                type: e9f.type,
                rid: e9f.id
            }, p9g.id)
        });
        top.player.addTo(j9a, sX6R, gi2x);
        kN3x.UG6A({
            rid: e9f.id,
            type: e9f.type,
            hash: l9c.LJ2x(),
            play: gi2x,
            source: e9f.from,
            sourceid: e9f.data
        })
    }
    function cij4n(d9g) {
        var dV1x = d9g.ext || {};
        j9a = pH5M.hH2x(d9g.key);
        ZA8s(j9a, dV1x);
        if (dV1x.type == 13 && dV1x.action == "play" && j9a && j9a.length > 0) {
            bNM8E(dV1x.node);
            v9m.bk0x("/api/playlist/update/playcount", {
                query: {
                    id: dV1x.id
                }
            })
        }
    }
    function cii4m(d9g) {
        var j9a = [pH5M.eO2x(d9g.id)]
          , bl0x = j9a[0]
          , rM5R = l9c.qc5h(bl0x)
          , tK6E = bl0x.privilege || {};
        if (rM5R == 10) {
            l9c.wc7V(tK6E.fee || bl0x.fee, bl0x.id, "song", null, tK6E)
        } else if (rM5R == 100) {
            l9c.iE3x(null, null, null, true, bl0x)
        } else if (rM5R == 11) {
            l9c.bTo1x(bl0x.id, 18)
        } else {
            ZA8s(j9a, d9g.ext)
        }
    }
    function cig4k(d9g) {
        var j9a = bNK8C(Hj1x.hH2x(d9g.key));
        ZA8s(j9a, d9g.ext)
    }
    function cie4i(d9g) {
        var j9a = bNK8C([Hj1x.eO2x(d9g.id)]);
        ZA8s(j9a, d9g.ext)
    }
    function dQ1x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bNM8E(g9d) {
        var u9l = a8i.t9k(g9d, "resType")
          , D0x = a8i.t9k(g9d, "resId")
          , L0x = u9l + "-" + D0x;
        if (bNO8G[L0x])
            return;
        var bNI8A = a8i.B9s("play-count")
          , bkX1x = a8i.E0x(g9d.parentNode, "nb")
          , TY6S = null;
        if (bNI8A) {
            TY6S = bNI8A
        } else {
            TY6S = !!bkX1x && !!bkX1x[0] ? bkX1x[0] : null
        }
        if (TY6S) {
            var cA0x = TY6S.innerHTML;
            if (/^\d+$/.test(cA0x)) {
                TY6S.innerText = +cA0x + 1
            }
            bNO8G[L0x] = true
        }
    }
    l9c.chQ4U = function(g9d) {
        h9c.s9j(g9d || document.body, "click", xt8l.f9e(this))
    }
    ;
    l9c.chP4T = function(U0x, u9l, D0x) {
        bNN8F({
            action: U0x,
            type: u9l,
            id: D0x
        })
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, K0x;
    q9h.fp2x({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m9d, e9f) {
                this.chO4S(m9d, e9f)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m9d, e9f) {
                this.z9q("onshareall", e9f.result)
            },
            onerror: function(m9d, e9f) {
                this.z9q("onshareall", e9f.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(m9d, e9f) {
                e9f.options.picUrl = m9d.picUrl;
                this.bNF8x(e9f.options, e9f.result)
            },
            onerror: function(m9d, e9f) {
                this.z9q("onshareall", e9f.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q0x, e9f) {
                this.qb5g("vid_info-" + e9f.data.nosKey, Q0x);
                return Q0x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e9f) {},
            format: function(m9d, e9f) {
                e9f.data = e9f.data2;
                this.cm0x("share-all", e9f)
            },
            onerror: "onshareerror"
        }
    });
    q9h.blh1x = NEJ.C();
    b9i = q9h.blh1x.N0x(q9h.hE2x);
    b9i.chE4I = function() {
        var vv7o = function(Q0x, e9f) {
            e9f.times++;
            if (e9f.times > 10) {
                this.z9q("onvinfoerror", e9f.key, Q0x)
            } else {
                setTimeout(ez1x.f9e(this, e9f), e9f.times * 1e3)
            }
        };
        var yw8o = function(Q0x, e9f) {
            this.z9q("onvinfo", e9f.key, Q0x)
        };
        var ez1x = function(e9f) {
            var Y0x = e9f.url;
            v9m.bk0x(Y0x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yw8o.ex1x(this, e9f),
                onerror: vv7o.ex1x(this, e9f)
            })
        };
        return function(e9f) {
            e9f.times = 0;
            ez1x.call(this, e9f)
        }
    }();
    b9i.cJl1x = function() {
        var HU1x;
        var vv7o = function(Q0x, e9f) {
            if (Q0x.code > 0) {
                clearInterval(this.HV1x);
                this.z9q("onviderror", e9f.data.nosKey)
            }
        };
        var yw8o = function(L0x, Q0x) {
            if (Q0x.vid && Q0x.covers) {
                clearInterval(this.HV1x);
                this.z9q("onvid", L0x, Q0x)
            }
        };
        var ez1x = function(e9f) {
            if (+(new Date) - HU1x > 60 * 60 * 1e3) {
                clearInterval(this.HV1x);
                this.z9q("onviderror", e9f.data.nosKey);
                return
            }
            e9f.onload = yw8o.f9e(this, e9f.data.nosKey);
            e9f.onerror = vv7o.f9e(this);
            this.cm0x("vid-get", e9f)
        };
        return function(e9f) {
            if (!e9f || !e9f.data)
                return;
            HU1x = +(new Date);
            this.HV1x = clearInterval(this.HV1x);
            this.HV1x = setInterval(ez1x.f9e(this, e9f), 1e4);
            ez1x.apply(this, arguments)
        }
    }();
    b9i.chz4D = function() {
        this.HV1x = clearInterval(this.HV1x)
    }
    ;
    b9i.chO4S = function(m9d, oa4e) {
        if (m9d.event && oa4e.snsTypes) {
            if (oa4e.pics) {
                var bNA8s = [];
                for (var i = 0, len = oa4e.pics.length; i < len; i++) {
                    bNA8s[i] = oa4e.pics[i].originId
                }
                this.cm0x("share_img_compound", {
                    data: {
                        picIds: bNA8s.join(",")
                    },
                    options: oa4e,
                    result: m9d
                })
            } else {
                oa4e.picUrl = oa4e.picUrl;
                this.bNF8x(oa4e, m9d)
            }
        } else {
            this.z9q("onshareall", m9d)
        }
        var vO7H = q9h.hP2x.A9r();
        vO7H.eR2x(oa4e.isPub ? "pubevent" : "shareevent", {
            id: m9d.id
        })
    }
    ;
    b9i.bNF8x = function(oa4e, m9d) {
        var cu0x = {}
          , d9g = m9d.event || {};
        cu0x.eventid = d9g.id;
        cu0x.eventtype = d9g.type;
        oa4e.picUrl && (cu0x.picUrl = oa4e.picUrl);
        cu0x.snsTypes = oa4e.snsTypes;
        cu0x.msg = oa4e.data.msg || "";
        cu0x.type = oa4e.data.type;
        oa4e.data.id && (cu0x.id = oa4e.data.id);
        if (cu0x.eventtype == 41) {
            var Q0x = l9c.Gf0x(d9g.json);
            cu0x.eventtype = 39;
            if (cu0x.msg) {
                cu0x.msg += "  "
            }
            cu0x.msg += "分享" + Q0x.video.creator.nickname + "的视频《" + Q0x.video.title + "》";
            delete cu0x.id
        }
        this.cm0x("share-sns", {
            data: cu0x,
            result: m9d
        })
    }
    ;
    b9i.chw4A = function(e9f) {
        var i9b = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k9b.oG5L(5)
        };
        i9b = NEJ.EX(i9b, e9f);
        if (i9b.id < 0) {
            delete i9b.id;
            i9b.type = "noresource"
        }
        if (!i9b.threadId) {
            delete i9b.threadId
        }
        if (!i9b.actId) {
            delete i9b.actId
        }
        if (!i9b.pics) {
            delete i9b.pics
        } else {
            i9b.pics = JSON.stringify(i9b.pics)
        }
        this.cm0x("share-all", {
            data: i9b,
            snsTypes: e9f.snsTypes,
            picUrl: e9f.picUrl,
            pics: e9f.pics,
            isPub: e9f.isPub
        })
    }
    ;
    b9i.chv4z = function(e9f) {
        this.cm0x("share-private", e9f)
    }
    ;
    b9i.chu4y = function(e9f) {
        this.cm0x("video-submit", e9f)
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, K0x;
    var chs4w = {
        40: !0
    };
    q9h.fp2x({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e9f) {
                e9f.data.getcounts = true;
                e9f.data.pagesize = e9f.data.limit;
                if (e9f.data.offset == 0) {
                    e9f.data.lasttime = -1
                }
                delete e9f.data.offset
            },
            format: function(Q0x, e9f) {
                Q0x.event = l9c.bbE9v(Q0x.event, function(p9g, r9i) {
                    return !chs4w[p9g.type]
                });
                this.chp4t(Q0x.event);
                e9f.data.lasttime = Q0x.lasttime;
                if (Q0x.event.length) {
                    Q0x.event.length = e9f.limit
                }
                return {
                    list: Q0x.event,
                    total: Q0x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q0x, e9f) {
                return {
                    list: Q0x.events,
                    total: Q0x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e9f) {
                e9f.data.pagesize = 20
            },
            format: function(Q0x, e9f) {
                return Q0x.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e9f) {
                if (e9f.data.offset == 0) {
                    e9f.data.time = -1
                }
                delete e9f.data.offset;
                e9f.data.getcounts = true
            },
            format: function(Q0x, e9f) {
                e9f.data.time = Q0x.lasttime;
                var j9a = Q0x.events;
                if (Q0x.more && j9a.length < e9f.data.limit) {
                    j9a = this.Jc1x(j9a, e9f.data.limit)
                }
                return {
                    list: j9a,
                    total: Q0x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m9d, e9f) {
                m9d.conf = e9f.conf;
                return m9d
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e9f, bi0x) {
                if (e9f.like) {
                    if (e9f.comment) {
                        bi0x.url = "/api/v1/comment/like"
                    } else {
                        bi0x.url = "/api/resource/like"
                    }
                    bi0x.onload = "oneventlike";
                    bi0x.onerror = "oneventlikeerr"
                } else {
                    if (e9f.comment) {
                        bi0x.url = "/api/v1/comment/unlike"
                    } else {
                        bi0x.url = "/api/resource/unlike"
                    }
                    bi0x.onload = "oneventunlike";
                    bi0x.onerror = "oneventunlikeerr"
                }
            },
            format: function(m9d, e9f) {
                m9d.eid = e9f.eid;
                m9d.origin = e9f.origin;
                m9d.ext = e9f.ext;
                return m9d
            },
            onmessage: function(bZ0x, m9d) {
                if (bZ0x == 250) {
                    n9e.Z0x.J0x({
                        tip: m9d.message || m9d.msg || "点赞异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m9d, e9f) {
                m9d.id = e9f.data.id;
                return m9d
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e9f, bi0x) {
                if (e9f.data.type == "nointer") {
                    bi0x.url = "/api/event/rcmd/reject"
                } else if (e9f.data.transcoding) {
                    bi0x.url = "/api/event/video/transcoding/delete"
                } else {
                    bi0x.url = "/api/event/delete"
                }
            },
            format: function(m9d, e9f) {
                m9d.id = e9f.data.id;
                return m9d
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m9d, e9f) {
                m9d.id = e9f.data.id;
                return m9d
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e9f) {
                e9f.data.lasttime = e9f.data.lasttime || -1;
                e9f.data.pagesize = e9f.data.limit;
                e9f.data.getcounts = true;
                delete e9f.data.offset
            },
            format: function(Q0x, e9f) {
                e9f.data.lasttime = Q0x.lasttime;
                var j9a = Q0x.events;
                if (Q0x.more)
                    j9a = this.Jc1x(j9a, e9f.data.pagesize);
                return {
                    list: j9a,
                    total: Q0x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q9h.yz8r = NEJ.C();
    b9i = q9h.yz8r.N0x(q9h.hE2x);
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.blG1x = function(u9l, cV1x) {
        return u9l + "-" + cV1x
    }
    ;
    b9i.cJm1x = function(e9f) {
        this.cm0x("ievent-get", e9f)
    }
    ;
    b9i.cJp1x = function(e9f) {
        this.cm0x("ievent-new-get", e9f)
    }
    ;
    b9i.cJq1x = function(e9f) {
        this.cm0x("ievent-user-get", e9f)
    }
    ;
    b9i.cJr1x = function(u9l, cV1x) {
        return this.sZ6T(this.blG1x(u9l, cV1x))
    }
    ;
    b9i.cJs1x = function(Jk1x, e9f) {
        if (!Jk1x || !Jk1x.length)
            return;
        e9f = e9f || {};
        var bz0x = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, FF0x = [], bNw8o = [], i9b; i < Jk1x.length; ++i) {
            i9b = Jk1x[i];
            i9b = this.sZ6T(this.blG1x(i9b.type, i9b.id));
            if (!i9b) {
                FF0x.push(Jk1x[i].id);
                bNw8o.push(bz0x[Jk1x[i].type] || 0)
            }
        }
        if (!FF0x.length) {
            this.z9q("oneventresload", e9f.conf);
            return
        }
        e9f.data = {
            ids: JSON.stringify(FF0x),
            types: JSON.stringify(bNw8o)
        };
        e9f.onload = this.chg4k.f9e(this);
        this.cm0x("ievent-res-get", e9f)
    }
    ;
    b9i.chg4k = function(m9d) {
        if (m9d.code != 200) {
            this.z9q("oneventreserror", m9d.code);
            return
        }
        var bz0x = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, j9a = m9d.results; i < j9a.length; ++i) {
            this.qb5g(this.blG1x(bz0x[j9a[i].type], j9a[i].id), j9a[i])
        }
        this.z9q("oneventresload", m9d.conf)
    }
    ;
    b9i.bNv8n = function(i9b) {
        var L0x = "event-list";
        this.boI2x(L0x, i9b);
        this.z9q("onitemadd", {
            key: L0x,
            action: "add",
            data: i9b,
            flag: -1
        })
    }
    ;
    b9i.pj5o = function(e9f) {
        this.cm0x("ievent-like", e9f)
    }
    ;
    b9i.mE4I = function(e9f) {
        this.cm0x("ievent-delete", e9f)
    }
    ;
    b9i.Jc1x = function(j9a, gk2x) {
        for (var i = j9a.length; i < gk2x; i++)
            j9a.push(null);
        return j9a
    }
    ;
    b9i.chp4t = function(j9a) {
        var m9d = [];
        if (!j9a || !j9a.length)
            return;
        k9b.bd0x(j9a, function(d9g) {
            d9g.biData = this.bNt8l(d9g)
        }, this)
    }
    ;
    b9i.bNt8l = function() {
        var bfq0x = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }
          , cgZ4d = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d9g) {
            var Q0x = {
                id: d9g.id,
                sourceid: d9g.user.userId,
                alg: d9g.rcmdInfo ? d9g.rcmdInfo.alg : null,
                contentType: bfq0x[d9g.type] || (k9b.dm1x(cgZ4d, d9g.type) != -1 ? "user_event" : "other")
            };
            return Q0x
        }
    }();
    b9i.Ip1x = function(cgY4c, d9g) {
        var Q0x = this.bNt8l(d9g);
        Q0x.actionType = cgY4c;
        if (window.log)
            log("eventclick", Q0x)
    }
    ;
    b9i.cJt1x = function(e9f) {
        this.cm0x("event_latest-list", e9f)
    }
}
)();
(function(factory) {
    window.SparkMD5 = factory()
}
)(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
        return a + b & 4294967295
    }
      , hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }
    function md5cycle(x, k) {
        var a = x[0]
          , b = x[1]
          , c = x[2]
          , d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }
    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }
    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }
    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535)
              , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this,begin,num);
                targetArray.set(sourceArray);
                return target
            }
        }
        )()
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }
    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    }
    ;
    SparkMD5.prototype.appendBinary = function(contents) {
        this.si6c += contents;
        this.bs0x += contents.length;
        var length = this.si6c.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR1x, md5blk(this.si6c.substring(i - 64, i)))
        }
        this.si6c = this.si6c.substring(i - 64);
        return this
    }
    ;
    SparkMD5.prototype.end = function(raw) {
        var buff = this.si6c, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.pc5h(tail, length);
        ret = hex(this.dR1x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.prototype.reset = function() {
        this.si6c = "";
        this.bs0x = 0;
        this.dR1x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.si6c,
            length: this.bs0x,
            hash: this.dR1x
        }
    }
    ;
    SparkMD5.prototype.setState = function(state) {
        this.si6c = state.buff;
        this.bs0x = state.length;
        this.dR1x = state.hash;
        return this
    }
    ;
    SparkMD5.prototype.destroy = function() {
        delete this.dR1x;
        delete this.si6c;
        delete this.bs0x
    }
    ;
    SparkMD5.prototype.pc5h = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR1x, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bs0x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR1x, tail)
    }
    ;
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    }
    ;
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content)
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    }
    ;
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.si6c.buffer, arr, true), length = buff.length, i;
        this.bs0x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR1x, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.si6c = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.si6c, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.pc5h(tail, length);
        ret = hex(this.dR1x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.si6c = new Uint8Array(0);
        this.bs0x = 0;
        this.dR1x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    }
    ;
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    }
    ;
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.pc5h = SparkMD5.prototype.pc5h;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr))
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    return SparkMD5
});
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , br0x = NEJ.F
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , v9m = c9h("nej.j")
      , eq1x = c9h("nej.g")
      , k9b = c9h("nej.u")
      , fY2x = c9h("nej.n")
      , I0x = c9h("nej.ut")
      , l9c = c9h("nm.x")
      , q9h = c9h("nm.d")
      , ix3x = c9h("nm.x.nos")
      , x9o = c9h("nm.w");
    var cgW4a = 1024 * 256
      , cgV4Z = 1024 * 1024 * 2
      , rA5F = {
        TOKEN_ERROR: -100,
        DNS_ERROR: -101
    }
      , bNr8j = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br0x
      , rz5E = {
        MD5_DONE: .2,
        TOKEN_GET: .22,
        DNS_GET: .24,
        UPLOADED: 1
    }
      , jJ3x = {
        AUDIO: "audio",
        IMAGE: "image",
        TXT: "txt",
        RAR: "rar",
        OTHER: "other",
        VIDEO: "video"
    };
    var oe4i = {};
    var vO7H = q9h.hP2x.A9r();
    ix3x.cMg1x = function() {
        return jJ3x
    }
    ;
    var cgR4V = function() {
        return k9b.oG5L(6) + +(new Date)
    };
    var JT1x = function(iO3x, e9f) {
        if (!oe4i[e9f.taskId]) {
            return
        }
        (e9f.onuploading || br0x).call(this, iO3x)
    };
    var bmn1x = function(R0x) {
        var cgQ4U = R0x.md5
          , cX1x = R0x.file
          , cgP4T = cgQ4U + cX1x.size;
        return "nos_file_hash_" + cgP4T
    };
    var cgO4S = function(R0x) {
        var L0x = bmn1x(R0x)
          , i9b = v9m.bUF1x(L0x, "{}");
        try {
            i9b = JSON.parse(i9b)
        } catch (e) {
            i9b = {}
        }
        return i9b
    };
    var cgN4R = function(R0x, e9f) {
        if (!R0x.md5) {
            return
        }
        var L0x = bmn1x(R0x)
          , i9b = v9m.bUF1x(L0x, "{}");
        try {
            i9b = JSON.parse(i9b)
        } catch (e) {
            i9b = {}
        }
        NEJ.X(i9b, e9f);
        v9m.uM7F(L0x, JSON.stringify(i9b))
    };
    var cgM4Q = function(R0x) {
        var L0x = bmn1x(R0x);
        v9m.LI2x(L0x)
    };
    var cgL4P = function(R0x, eK2x) {
        var Y0x = R0x.urls[Math.min(R0x.urlIndex, R0x.urls.length - 1)]
          , cX1x = R0x.file
          , lH4L = R0x.bucket
          , mV4Z = R0x.objectKey
          , cs0x = R0x.token
          , bK0x = R0x.context
          , pt5y = {}
          , UJ6D = bNr8j.call(cX1x, R0x.beg, R0x.end)
          , bv0x = {
            offset: R0x.beg,
            complete: R0x.lastChunk || false,
            version: "1.0"
        };
        if (bK0x) {
            bv0x.context = bK0x
        }
        pt5y["x-nos-token"] = cs0x;
        pt5y[eq1x.yH8z] = cX1x.type;
        R0x.reqId = v9m.bk0x(Y0x + "/" + lH4L + "/" + mV4Z, {
            type: "json",
            method: "POST",
            headers: pt5y,
            query: bv0x,
            data: UJ6D,
            onload: eK2x.onload,
            onerror: eK2x.onerror
        })
    };
    var cgK4O = function(m9d, R0x, e9f) {
        m9d = {
            code: 200,
            fileName: e9f.file.name,
            size: e9f.file.size,
            type: e9f.file.type,
            bucket: R0x.bucket,
            docId: R0x.docId,
            objectKey: R0x.objectKey,
            url: "//nos.netease.com/" + R0x.bucket + "/" + R0x.objectKey,
            taskId: e9f.taskId
        };
        cgM4Q(R0x);
        if (!oe4i[e9f.taskId]) {
            return
        }
        delete oe4i[e9f.taskId];
        vO7H.eR2x("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m9d)
        });
        (e9f.onsuccess || br0x).call(this, m9d)
    };
    var cgJ4N = function(m9d, e9f) {
        (e9f.onerror || br0x).call(this, m9d)
    };
    var cgI4M = function(m9d, R0x, e9f) {
        R0x.context = m9d.context;
        R0x.beg = m9d.offset;
        var iO3x = R0x.beg / R0x.file.size;
        cgN4R(R0x, {
            bucket: R0x.bucket,
            objectKey: R0x.objectKey,
            token: R0x.token,
            context: R0x.context,
            beg: R0x.beg,
            updateTime: +(new Date)
        });
        iO3x = rz5E.DNS_GET + (rz5E.UPLOADED - rz5E.DNS_GET) * iO3x;
        JT1x(iO3x, e9f);
        if (R0x.lastChunk) {
            cgK4O(m9d, R0x, e9f)
        } else {
            YC7v(R0x, e9f)
        }
    };
    var cgH4L = function(m9d, R0x, e9f) {
        vO7H.eR2x("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m9d.data,
            body: m9d.extData,
            ext: JSON.stringify(R0x),
            timging: +(new Date) - R0x.chuckUploadStartTime
        });
        if (R0x.urlIndex < Math.max(R0x.urls.length - 1, 5)) {
            R0x.urlIndex++;
            YC7v(R0x, e9f)
        } else {
            cgJ4N(m9d, e9f)
        }
    };
    var YC7v = function(R0x, e9f) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.end = R0x.beg + cgW4a;
        if (R0x.end >= R0x.file.size) {
            R0x.end = R0x.file.size;
            R0x.lastChunk = true
        }
        R0x.chuckUploadStartTime = +(new Date);
        cgL4P(R0x, {
            onload: cgI4M.ex1x(this, R0x, e9f),
            onerror: cgH4L.ex1x(this, R0x, e9f)
        })
    };
    var cgE4I = function(m9d, R0x, e9f) {
        R0x.beg = m9d.offset;
        var iO3x = R0x.beg / R0x.file.size;
        iO3x = rz5E.DNS_GET + (rz5E.UPLOADED - rz5E.DNS_GET) * iO3x;
        JT1x(iO3x, e9f);
        YC7v(R0x, e9f)
    };
    var cgD4H = function(m9d, R0x, e9f) {
        R0x.beg = 0;
        delete R0x.context;
        bmY2x(R0x, e9f)
    };
    var bNn8f = function(Ve6Y, R0x, e9f) {
        R0x.lastChunk = false;
        R0x.urls = Ve6Y;
        R0x.urlIndex = 0;
        JT1x(rz5E.DNS_GET, e9f);
        if (R0x.fromExist) {
            delete R0x.fromExist;
            var Y0x = R0x.urls[Math.min(R0x.urlIndex, R0x.urls.length - 1)]
              , lH4L = R0x.bucket
              , mV4Z = R0x.objectKey
              , cs0x = R0x.token
              , bK0x = R0x.context
              , pt5y = {}
              , bv0x = {
                context: bK0x,
                version: "1.0"
            };
            pt5y["x-nos-token"] = cs0x;
            R0x.reqId = v9m.bk0x(Y0x + "/" + lH4L + "/" + mV4Z + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: pt5y,
                query: bv0x,
                onload: cgE4I.ex1x(this, R0x, e9f),
                onerror: cgD4H.ex1x(this, R0x, e9f)
            })
        } else {
            R0x.beg = 0;
            YC7v(R0x, e9f)
        }
    };
    var cgB4F = function(m9d, R0x, e9f) {
        m9d.code = rA5F.DNS_ERROR;
        (e9f.onerror || br0x).call(this, m9d)
    };
    var bNm8e = function(i9b, e9f) {
        var m9d = i9b.result || {}
          , lH4L = m9d.bucket
          , mV4Z = m9d.objectKey
          , cs0x = m9d.token
          , R0x = oe4i[e9f.taskId];
        if (!lH4L || !mV4Z || !cs0x || !R0x) {
            m9d.code = rA5F.TOKEN_ERROR;
            (e9f.onerror || br0x).call(this, m9d);
            return
        }
        R0x.bucket = lH4L;
        R0x.objectKey = mV4Z;
        R0x.docId = m9d.docId;
        R0x.token = cs0x;
        JT1x(rz5E.TOKEN_GET, e9f);
        if (location.protocol == "https:") {
            bNn8f(["//nosup-hz1.127.net"], R0x, e9f)
        } else {
            R0x.reqId = ix3x.cgz4D({
                bucket: lH4L,
                onload: bNn8f.ex1x(this, R0x, e9f),
                onerror: cgB4F.ex1x(this, R0x, e9f)
            })
        }
        R0x.step = 1
    };
    var cgy4C = function(m9d, e9f) {
        m9d.code = rA5F.TOKEN_ERROR;
        (e9f.onerror || br0x).call(this, m9d)
    };
    var bmY2x = function(R0x, e9f) {
        var cX1x = e9f.file
          , eS2x = cX1x.name || ""
          , dV1x = eS2x.split(".").pop();
        ix3x.Yu7n(NEJ.X({
            filename: eS2x,
            ext: dV1x,
            onload: bNm8e.ex1x(this, e9f),
            onerror: cgy4C.ex1x(this, e9f)
        }, e9f, function(p9g) {
            return k9b.gO2x(p9g) || k9b.lY4c(p9g)
        }))
    };
    var cgx4B = function(R0x, e9f) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.md5 = R0x.spark.end();
        var KA2x = cgO4S(R0x) || {}
          , lH4L = KA2x.bucket
          , mV4Z = KA2x.objectKey
          , cs0x = KA2x.token;
        if (!lH4L || !mV4Z || !cs0x) {
            bmY2x(R0x, e9f)
        } else {
            R0x.context = KA2x.context;
            R0x.beg = KA2x.beg;
            R0x.fromExist = true;
            bNm8e({
                result: KA2x
            }, e9f)
        }
    };
    var cgw4A = function(EC0x, R0x, e9f) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.beg = R0x.end;
        var iO3x = R0x.beg / R0x.file.size;
        iO3x = 0 + rz5E.MD5_DONE * iO3x;
        JT1x(iO3x, e9f);
        R0x.spark.append(EC0x.result);
        if (R0x.lastChunk) {
            cgx4B(R0x, e9f)
        } else {
            bNl8d(R0x, e9f)
        }
    };
    var cgu4y = function(m9d, R0x, e9f) {
        R0x.md5 = "";
        bmY2x(R0x, e9f)
    };
    var bNl8d = function(R0x, e9f) {
        if (!R0x || R0x.step == -1) {
            return
        }
        R0x.end = R0x.beg + cgV4Z;
        if (R0x.end >= R0x.file.size) {
            R0x.end = R0x.file.size;
            R0x.lastChunk = true
        }
        var EC0x = new FileReader;
        EC0x.onload = cgw4A.f9e(this, EC0x, R0x, e9f);
        EC0x.onerror = cgu4y.f9e(this, EC0x, R0x, e9f);
        EC0x.readAsArrayBuffer(bNr8j.call(R0x.file, R0x.beg, R0x.end))
    };
    ix3x.ia3x = function(e9f) {
        var cX1x = e9f.file
          , eS2x = cX1x.name || ""
          , dV1x = eS2x.split(".").pop()
          , EH0x = cgR4V();
        e9f.taskId = EH0x;
        oe4i[EH0x] = {
            step: 0
        };
        JT1x(0, e9f);
        var R0x = oe4i[EH0x];
        R0x.id = EH0x;
        R0x.file = cX1x;
        R0x.beg = 0;
        R0x.lastChunk = false;
        R0x.spark = new SparkMD5.ArrayBuffer;
        var cgt4x = e9f.onerror || br0x;
        e9f.onerror = function() {
            if (!oe4i[EH0x]) {
                return
            }
            delete oe4i[EH0x];
            cgt4x.apply(this, arguments)
        }
        ;
        vO7H.eR2x("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bNl8d(R0x, e9f);
        return EH0x
    }
    ;
    ix3x.kF3x = function(D0x) {
        var R0x = oe4i[D0x];
        if (R0x) {
            if (R0x.step == 0) {
                delete oe4i[D0x]
            } else {
                R0x.step = -1;
                if (R0x.reqId) {
                    v9m.kF3x(R0x.reqId)
                }
                delete oe4i[D0x]
            }
        }
    }
    ;
    ix3x.Yu7n = function() {
        var Ab9S = function(m9d, e9f) {
            (e9f.onload || br0x).call(this, m9d)
        };
        var Cm9d = function(m9d, e9f) {
            (e9f.onerror || br0x).call(this, m9d)
        };
        var bNk8c = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e9f) {
            var Yt7m = e9f.returnBody || bNk8c;
            if (k9b.lY4c(Yt7m)) {
                try {
                    JSON.stringify(Yt7m)
                } catch (e) {
                    Yt7m = bNk8c
                }
            }
            return v9m.bk0x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e9f.filename || "",
                    ext: e9f.ext || "",
                    type: e9f.type || jJ3x.OTHER,
                    bucket: e9f.bucket || "",
                    local: e9f.local || false,
                    nos_product: e9f.nosProduct || 0,
                    return_body: Yt7m
                },
                onload: Ab9S.ex1x(this, e9f),
                onerror: Cm9d.ex1x(this, e9f)
            })
        }
    }();
    ix3x.cgz4D = function() {
        var cgr4v = "//wanproxy.127.net/lbs";
        var Ab9S = function(m9d, e9f) {
            if (m9d.lbs) {}
            var Ve6Y = m9d.upload;
            if (!Ve6Y || !Ve6Y.length) {
                Cm9d(m9d, e9f)
            }
            (e9f.onload || br0x).call(this, Ve6Y)
        };
        var Cm9d = function(m9d, e9f) {
            (e9f.onerror || br0x).call(this, m9d)
        };
        return function(e9f) {
            var lH4L = e9f.bucket;
            return v9m.bk0x(cgr4v, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: lH4L
                },
                onload: Ab9S.ex1x(this, e9f),
                onerror: Cm9d.ex1x(this, e9f)
            })
        }
    }();
    ix3x.Yr7k = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), cd0x = c9h("nej.ut"), bC0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), ix3x = c9h("nm.x.nos"), F0x = c9h("nm.m"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), b9i, K0x;
    var gs2x = a8i.jz3x('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    x9o.KM2x = NEJ.C();
    b9i = x9o.KM2x.N0x(bC0x.eo1x);
    b9i.cf0x = function() {
        this.ce0x = gs2x
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        this.bI0x = this.o9f;
        this.hN2x = a8i.E0x(this.o9f, "j-file")[0];
        h9c.s9j(this.hN2x, "change", this.qo5t.f9e(this))
    }
    ;
    b9i.bm0x = function(e9f) {
        e9f = e9f || {};
        this.bn0x(e9f);
        this.hN2x.id = e9f.inputId || "";
        this.hN2x.accept = e9f.accept || "*";
        this.xz8r = e9f
    }
    ;
    b9i.Yn7g = function() {
        return a8i.lQ4U(this.hN2x)
    }
    ;
    b9i.qo5t = function(d9g) {
        if (this.hN2x.value == "")
            return;
        var kY3x = this.hN2x.value.split("\\")
          , eS2x = kY3x.length > 0 ? kY3x[kY3x.length - 1] : kY3x[0]
          , oQ5V = (this.hN2x.files || [{}])[0];
        var cn0x = {
            files: this.hN2x.files,
            filename: eS2x,
            size: oQ5V.size,
            cancelUpload: false
        };
        this.z9q("onchange", cn0x);
        if (cn0x.cancelUpload) {
            this.hN2x.value = "";
            return
        }
        if (cn0x.stopped) {
            return
        }
        this.Vp6j()
    }
    ;
    b9i.Vp6j = function() {
        if (this.hN2x.value == "")
            return;
        var kY3x = this.hN2x.value.split("\\")
          , eS2x = kY3x.length > 0 ? kY3x[kY3x.length - 1] : kY3x[0]
          , dV1x = (eS2x.split(".") || []).pop()
          , oQ5V = (this.hN2x.files || [{}])[0]
          , Fc0x = (oQ5V.type || "").split("/").shift();
        if (oQ5V.size > 100 * 1024 * 1024) {
            return this.mu4y("onerror", {
                code: -200
            })
        }
        this.z9q("onuploading", 0);
        this.bNj8b = ix3x.Yu7n(NEJ.X({
            onload: this.Vs6m.ex1x(this, eS2x),
            onerror: this.mu4y.f9e(this)
        }, this.xz8r, function(p9g) {
            return k9b.gO2x(p9g) || k9b.lY4c(p9g)
        }))
    }
    ;
    b9i.Vs6m = function(bN0x, eS2x) {
        var m9d = bN0x.result || {}
          , lH4L = m9d.bucket
          , mV4Z = m9d.objectKey
          , cs0x = m9d.token;
        if (!lH4L || !mV4Z || !cs0x) {
            bN0x.code = -100;
            this.mu4y.call(this, bN0x);
            return
        }
        var oQ5V = (this.hN2x.files || [{}])[0];
        var hQ2x = a8i.df1x(this.bI0x);
        hQ2x[0].value = mV4Z;
        hQ2x[1].value = cs0x;
        hQ2x[2].value = "json";
        if (oQ5V.type && oQ5V.type.indexOf("audio") == 0) {
            hQ2x[3].value = "audio/mpeg"
        } else {
            hQ2x[3].value = oQ5V.type || ""
        }
        this.bI0x.action = "//nos.netease.com/" + lH4L;
        this.Ff0x = m9d;
        this.ra5f = eS2x;
        this.z9q("onuploading", .2);
        this.ia3x()
    }
    ;
    b9i.ia3x = function() {
        this.bNj8b = v9m.ia3x(this.bI0x, {
            type: "json",
            onload: this.wG8y.f9e(this),
            onerror: this.mu4y.f9e(this),
            onuploading: this.Yi7b.f9e(this)
        })
    }
    ;
    b9i.kF3x = function() {
        v9m.kF3x(this.bNj8b);
        this.bI0x.reset()
    }
    ;
    b9i.wG8y = function(bN0x) {
        var cs0x = this.Ff0x
          , eS2x = this.ra5f
          , oQ5V = (this.hN2x.files || [{}])[0]
          , kD3x = {
            code: 200,
            fileName: eS2x,
            size: oQ5V.size,
            bucket: cs0x.bucket,
            docId: cs0x.docId,
            objectKey: cs0x.objectKey,
            url: "//nos.netease.com/" + cs0x.bucket + "/" + cs0x.objectKey
        };
        if (!bN0x) {
            bN0x = kD3x
        }
        if (!bN0x.code || bN0x.code == 200) {
            this.z9q("onsuccess", NEJ.X(kD3x, bN0x))
        } else {
            this.z9q("onerror", bN0x)
        }
        this.bI0x.reset()
    }
    ;
    b9i.mu4y = function(bN0x) {
        this.z9q("onerror", bN0x);
        this.bI0x.reset()
    }
    ;
    b9i.Yi7b = function(iO3x) {
        this.z9q("onuploading", .2 + iO3x.loaded / iO3x.total * .8)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), cd0x = c9h("nej.ut"), bC0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), ix3x = c9h("nm.x.nos"), F0x = c9h("nm.m"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), b9i, K0x;
    x9o.Vx6r = NEJ.C();
    b9i = x9o.Vx6r.N0x(cd0x.cH1x);
    b9i.bm0x = function(e9f) {
        e9f = e9f || {};
        this.bn0x(e9f);
        this.Yc7V = x9o.KM2x.A9r(NEJ.X({
            parent: e9f.parent,
            onchange: this.qo5t.f9e(this),
            onuploading: this.z9q.f9e(this, "onuploading"),
            onsuccess: this.z9q.f9e(this, "onsuccess"),
            onerror: this.z9q.f9e(this, "onerror")
        }, e9f, function(p9g) {
            return k9b.gO2x(p9g) || k9b.lY4c(p9g)
        }));
        if (e9f.multiple && ix3x.Yr7k()) {
            a8i.hb2x(this.Yc7V.Yn7g(), "multiple", true)
        }
        this.xz8r = e9f
    }
    ;
    b9i.qo5t = function(e9f) {
        var eS2x = e9f.filename
          , dV1x = (eS2x.split(".") || []).pop();
        this.bNi8a = (e9f.files || [{}])[0];
        this.z9q("onchange", e9f);
        if (ix3x.Yr7k() && !e9f.stopped && !e9f.cancelUpload) {
            this.Vp6j(true);
            e9f.stopped = true
        }
    }
    ;
    b9i.Yn7g = function() {
        return this.Yc7V.Yn7g()
    }
    ;
    b9i.cgo4s = function() {
        return this.bNi8a
    }
    ;
    b9i.Vp6j = function(fg2x, cX1x) {
        cX1x = cX1x || this.bNi8a;
        if (ix3x.Yr7k()) {
            this.bNh8Z = ix3x.ia3x(NEJ.X({
                file: cX1x,
                local: this.xz8r.bucket && this.xz8r.bucket.length,
                onuploading: this.z9q.f9e(this, "onuploading"),
                onsuccess: this.z9q.f9e(this, "onsuccess"),
                onerror: this.z9q.f9e(this, "onerror")
            }, this.xz8r, function(p9g) {
                return k9b.gO2x(p9g) || k9b.lY4c(p9g)
            }));
            return this.bNh8Z
        } else if (!fg2x) {
            this.Yc7V.Vp6j()
        }
    }
    ;
    b9i.kF3x = function(D0x) {
        D0x = D0x || this.bNh8Z;
        if (D0x) {
            ix3x.kF3x(D0x)
        }
        this.Yc7V.kF3x()
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), eq1x = c9h("nej.g"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), fY2x = c9h("nej.n"), I0x = c9h("nej.ut"), bc0x = c9h("nej.ui"), x9o = c9h("nm.w"), n9e = c9h("nm.l"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), M0x = c9h("nm.x.f"), ix3x = c9h("nm.x.nos"), b9i, K0x, boq2x = {
        0: "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    }, bor2x = 5 * 1024 * 1024, cJv1x = 80, XZ7S = /\.(bmp|jpg|jpeg|png|gif)$/i;
    x9o.bNf8X = NEJ.C();
    b9i = x9o.bNf8X.N0x(I0x.vC7v);
    b9i.bmg1x = function() {
        return {
            x: this.DA0x.clientWidth - this.o9f.offsetWidth,
            y: this.DA0x.clientHeight - this.o9f.offsetHeight
        }
    }
    ;
    x9o.bow2x = NEJ.C();
    b9i = x9o.bow2x.N0x(bc0x.eo1x);
    b9i.cf0x = function() {
        this.ce0x = "m-xwgt-share-upload"
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.XY7R = j9a.shift();
        this.LF2x = j9a.shift();
        this.VE6y = j9a.shift();
        this.bNe8W = {
            onchange: this.bNc8U.ex1x(this, 0),
            onerror: this.dQ1x.f9e(this),
            onsuccess: this.sx6r.f9e(this),
            multiple: true,
            parent: this.LF2x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.boJ2x = {
            onchange: this.bNc8U.ex1x(this, 1),
            onerror: this.dQ1x.f9e(this),
            onsuccess: this.sx6r.f9e(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cgh4l = x9o.Vx6r.A9r(this.bNe8W)
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.boJ2x.parent = e9f.button;
        this.LR2x && this.LR2x.T0x();
        this.LR2x = x9o.Vx6r.A9r(this.boJ2x);
        this.o9f.style.display = "none";
        if (!!this.fd2x) {
            for (var i = this.fd2x.length - 1; i >= 0; i--) {
                a8i.cO1x(this.fd2x[i].element, false);
                if (this.fd2x[i].dragger)
                    this.fd2x[i].dragger.T0x()
            }
        }
        this.fd2x = [];
        if (this.Cq9h) {
            clearTimeout(this.Cq9h)
        }
        this.XU7N(0);
        this.VT6N = 0;
        this.bX0x([[this.bNe8W.parent, "click", this.bNa8S.f9e(this)], [this.boJ2x.parent, "click", this.bNa8S.f9e(this)]])
    }
    ;
    b9i.bB0x = function() {
        h9c.ho2x(this.sA6u, "click");
        if (!!this.fd2x) {
            for (var i = this.fd2x.length - 1; i >= 0; i--) {
                a8i.cO1x(this.fd2x[i].element, false);
                if (this.fd2x[i].dragger)
                    this.fd2x[i].dragger.T0x()
            }
        }
        this.fd2x = [];
        if (this.Cq9h) {
            clearTimeout(this.Cq9h)
        }
        this.Cq9h = 0;
        this.LR2x && this.LR2x.T0x();
        delete this.LR2x;
        this.bG0x()
    }
    ;
    b9i.bNa8S = function(d9g) {
        if (!ix3x.Yr7k() && this.fd2x.doing) {
            h9c.bf0x(d9g)
        }
    }
    ;
    b9i.bNc8U = function(e9f, r9i) {
        var lZ4d = e9f.files, hB2x;
        e9f.stopped = true;
        if (!lZ4d) {
            if (e9f.filename) {
                lZ4d = [{
                    name: e9f.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = lZ4d.length; i < len; i++) {
            if (!XZ7S.test(lZ4d[i].name)) {
                this.bpe2x({
                    path: lZ4d[i].name,
                    index: r9i,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (lZ4d[i].size > bor2x) {
                this.bpf2x(-3);
                this.bpe2x({
                    path: lZ4d[i].name,
                    index: r9i,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpe2x({
                    path: lZ4d[i].name,
                    file: lZ4d[i],
                    index: r9i,
                    status: 0
                })
            }
        }
    }
    ;
    b9i.bpe2x = function(tP6J) {
        if (this.fd2x.length >= 9) {
            this.bpf2x(-10, 3e3, this.bMZ8R.f9e(this));
            return
        }
        this.cfZ4d(tP6J);
        this.fd2x.push(tP6J);
        if (!!this.fd2x.length) {
            this.o9f.style.display = ""
        }
        if (this.fd2x.length >= 9) {
            this.LF2x.style.display = "none"
        } else {
            this.LF2x.style.display = ""
        }
        this.Mr2x()
    }
    ;
    b9i.Mr2x = function() {
        var bpm2x = -1
          , bMX8P = 0;
        for (var i = 0, l = this.fd2x.length; i < l; i++) {
            if (this.fd2x[i].status == 1) {
                return
            }
            if (this.fd2x[i].status == 0 && bpm2x < 0) {
                bpm2x = i
            }
            if (this.fd2x[i].status == 2 || this.fd2x[i].status < 0) {
                bMX8P++
            }
        }
        var p9g = this.fd2x[bpm2x];
        if (p9g) {
            (p9g.index == 0 ? this.cgh4l : this.LR2x).Vp6j(false, p9g.file);
            p9g.status = 1;
            this.fd2x.doing = p9g;
            this.z9q("onstartupload", {})
        } else if (bMX8P == this.fd2x.length) {
            this.z9q("onfinishupload", {})
        }
    }
    ;
    b9i.bpq2x = function() {
        return this.fd2x.doing || {}
    }
    ;
    b9i.dQ1x = function(d9g) {
        var tP6J = this.bpq2x();
        tP6J.status = -4;
        tP6J.fail = "上传<br>失败";
        this.bMW8O(tP6J);
        this.fd2x.doing = null;
        this.Mr2x()
    }
    ;
    b9i.sx6r = function(d9g) {
        var tP6J = this.bpq2x()
          , dS1x = d9g.fileName.match(XZ7S);
        tP6J.picUrl = d9g.url;
        v9m.bk0x("/upload/event/img/v1", {
            query: {
                imgid: d9g.docId,
                format: dS1x[1]
            },
            type: "json",
            onload: this.bMV8N.f9e(this),
            onerror: this.bMV8N.f9e(this)
        })
    }
    ;
    b9i.bMV8N = function(d9g) {
        if (d9g && d9g.code == 200 && d9g.picInfo) {
            var tP6J = this.bpq2x();
            tP6J.status = 2;
            var bx0x = NEJ.X({}, d9g.picInfo);
            bx0x.originId = bx0x.originIdStr;
            bx0x.squareId = bx0x.squareIdStr;
            bx0x.rectangleId = bx0x.rectangleIdStr;
            bx0x.pcSquareId = bx0x.pcSquareIdStr;
            bx0x.pcRectangleId = bx0x.pcRectangleIdStr;
            bx0x.originJpgId = bx0x.originJpgIdStr || bx0x.originJpgId;
            tP6J.picInfo = bx0x;
            this.bMW8O(tP6J);
            this.fd2x.doing = null;
            this.Mr2x()
        } else {
            this.dQ1x(d9g)
        }
    }
    ;
    b9i.bpf2x = function(r9i, kO3x, eK2x) {
        if (this.VT6N < r9i) {
            return
        }
        if (this.Cq9h) {
            clearTimeout(this.Cq9h);
            this.Cq9h = 0
        }
        if (kO3x) {
            this.VE6y.innerText = boq2x[r9i * 1];
            this.VT6N = r9i;
            this.Cq9h = setTimeout(this.XU7N.f9e(this, r9i, eK2x), kO3x)
        } else {
            this.VE6y.innerText = boq2x[r9i];
            this.VT6N = r9i
        }
        this.VE6y.style.display = ""
    }
    ;
    b9i.XU7N = function(r9i, eK2x) {
        if (r9i && this.VT6N !== r9i) {
            return
        }
        this.VT6N = 0;
        this.VE6y.innerText = boq2x[0];
        this.VE6y.style.display = "none";
        eK2x && eK2x()
    }
    ;
    b9i.cfZ4d = function(cX1x) {
        var i9b = {};
        if (cX1x.fail) {
            i9b.fail = cX1x.fail
        }
        var dU1x = a8i.cc0x("m-xwgt-share-upload-preview", i9b);
        cX1x.element = a8i.nY4c(dU1x);
        h9c.s9j(a8i.E0x(cX1x.element, "del")[0], "mousedown", this.cfV4Z.f9e(this, cX1x), false);
        this.XY7R.insertBefore(cX1x.element, this.XY7R.lastElementChild);
        cX1x.dragger = x9o.bNf8X.A9r({
            view: this.XY7R.parentNode,
            body: cX1x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Pp4t.f9e(this, cX1x),
            onchange: this.cfU4Y.f9e(this, cX1x),
            ondragend: this.blV1x.f9e(this, cX1x)
        })
    }
    ;
    b9i.bMW8O = function(cX1x) {
        if (!cX1x || !cX1x.element) {
            return false
        }
        var i9b = {};
        if (cX1x.fail) {
            i9b.fail = cX1x.fail
        } else {
            i9b.url = cX1x.picUrl
        }
        a8i.w9n(cX1x.element, "z-fail");
        cX1x.element.firstChild.outerHTML = a8i.cc0x("m-xwgt-share-upload-preview-img", i9b)
    }
    ;
    b9i.Pp4t = function(p9g, lj3x) {
        a8i.w9n(p9g.element, "z-sel")
    }
    ;
    b9i.cfU4Y = function(p9g, lj3x) {
        var cJz1x, gA2x = this.fd2x.length - 1, oB4F;
        for (var i = gA2x; i >= 0; i--) {
            a8i.y9p(this.fd2x[i].element, "z-jump");
            if (this.fd2x[i] == p9g) {
                oB4F = i
            } else {
                a8i.fh2x(this.fd2x[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var Wa6U = {
            x: 46 + 92 * (oB4F % 5) + lj3x.left,
            y: 46 + 92 * (oB4F / 5 >> 0) + lj3x.top
        };
        var bpM2x = Wa6U.x / 92 >> 0
          , bpO2x = Wa6U.y / 92 >> 0
          , yR8J = Math.max(0, Math.min(gA2x, bpO2x * 5 + bpM2x));
        if (yR8J == oB4F) {
            return
        }
        var cfP4T = yR8J < oB4F;
        for (var i = Math.min(yR8J, oB4F); i <= Math.max(yR8J, oB4F); i++) {
            if (i !== oB4F) {
                var bMQ8I = i % 5;
                if (cfP4T) {
                    if (bMQ8I == 4) {
                        a8i.fh2x(this.fd2x[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a8i.fh2x(this.fd2x[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bMQ8I == 0) {
                        a8i.fh2x(this.fd2x[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a8i.fh2x(this.fd2x[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    }
    ;
    b9i.blV1x = function(p9g, lj3x) {
        var cJA1x, gA2x = this.fd2x.length - 1, oB4F;
        for (var i = gA2x; i >= 0; i--) {
            a8i.fh2x(this.fd2x[i].element, {
                left: "",
                top: ""
            });
            if (this.fd2x[i] == p9g) {
                oB4F = i
            }
        }
        a8i.y9p(p9g.element, "z-sel");
        var Wa6U = {
            x: 46 + 92 * (oB4F % 5) + lj3x.left,
            y: 46 + 92 * (oB4F / 5 >> 0) + lj3x.top
        };
        var bpM2x = Wa6U.x / 92 >> 0
          , bpO2x = Wa6U.y / 92 >> 0
          , yR8J = Math.max(0, Math.min(gA2x, bpO2x * 5 + bpM2x));
        if (yR8J == oB4F) {
            return
        }
        this.XY7R.insertBefore(p9g.element, (this.fd2x[yR8J + (yR8J > oB4F ? 1 : 0)] || {}).element || this.LF2x);
        this.fd2x.splice(oB4F, 1);
        this.fd2x.splice(yR8J, 0, p9g)
    }
    ;
    b9i.cfV4Z = function(p9g, d9g) {
        a8i.cO1x(p9g.element, false);
        if (p9g.dragger)
            p9g.dragger.T0x();
        delete p9g.dragger;
        var r9i = -1;
        for (var i = this.fd2x.length - 1; i >= 0; i--) {
            if (this.fd2x[i] == p9g) {
                r9i = i;
                break
            }
        }
        this.fd2x.splice(r9i, r9i >= 0 ? 1 : 0);
        delete p9g;
        if (this.fd2x.length >= 9) {
            this.LF2x.style.display = "none"
        } else {
            this.LF2x.style.display = ""
        }
        if (!this.fd2x.length) {
            this.o9f.style.display = "none";
            this.XU7N(0)
        } else {
            this.bMZ8R()
        }
        if (this.fd2x.doing == p9g) {
            this.fd2x.doing = null
        }
        this.Mr2x()
    }
    ;
    b9i.bMZ8R = function() {
        var bMP8H = false;
        for (var i = 0, len = this.fd2x.length; i < len; i++) {
            if (this.fd2x[i].status == -3) {
                bMP8H = true
            }
        }
        if (bMP8H) {
            this.bpf2x(-3)
        } else {
            this.XU7N(-3)
        }
    }
    ;
    b9i.Wf7Y = function() {
        var dF1x = [];
        for (var i = this.fd2x.length - 1; i >= 0; i--) {
            if (this.fd2x[i].status == 2) {
                dF1x.unshift(this.fd2x[i].picInfo)
            }
        }
        return dF1x
    }
    ;
    I0x.fK2x.A9r({
        element: x9o.bow2x,
        event: ["onstartupload", "onfinishupload"]
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, fD2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), bc0x = c9h("nej.ui"), O0x = c9h("nej.ut"), b9i, K0x;
    if (!!O0x.nk4o)
        return;
    O0x.nk4o = NEJ.C();
    b9i = O0x.nk4o.N0x(O0x.bbA9r);
    K0x = O0x.nk4o.cr0x;
    b9i.bm0x = function(e9f) {
        this.cfF3x(e9f.more);
        this.Ga0x = a8i.B9s(e9f.sbody);
        this.cfD3x = e9f.fixScrollPosition;
        this.bX0x([[this.Ga0x, "scroll", this.cfz3x.f9e(this)]]);
        var dr1x = e9f.delta;
        if (dr1x == null)
            dr1x = 30;
        this.Wo7h = Math.max(0, dr1x);
        var cA0x = parseInt(e9f.count) || 0;
        this.jS3x = Math.max(0, cA0x);
        var hk2x = parseInt(e9f.number) || 0;
        if (hk2x > 1 && hk2x <= cA0x) {
            this.Eb0x = hk2x
        }
        this.bn0x(e9f)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        delete this.CR9I;
        delete this.Ga0x;
        delete this.tw6q;
        delete this.Xy7r
    }
    ;
    b9i.BV9M = function(bj0x, bs0x) {
        var bM0x = this.zM8E + (this.jS3x - 1) * this.oM5R
          , gk2x = this.jS3x * this.oM5R;
        return K0x.BV9M.call(this, bM0x, bj0x, gk2x, bs0x)
    }
    ;
    b9i.cfF3x = function(Xx7q) {
        this.CR9I = a8i.B9s(Xx7q);
        this.bX0x([[this.CR9I, "click", this.pv5A.f9e(this)]])
    }
    ;
    b9i.bqt2x = function(G0x) {
        G0x = G0x || {};
        if (this.tw6q || !G0x)
            return;
        if (!G0x.scrollHeight)
            G0x = a8i.oJ5O();
        var bj0x = a8i.ic3x(this.iu3x, this.cfD3x ? G0x : null)
          , dr1x = bj0x.y + this.iu3x.offsetHeight - G0x.scrollTop - G0x.clientHeight
          , bqu2x = G0x.scrollHeight <= G0x.clientHeight;
        if (dr1x <= this.Wo7h || bqu2x && !this.tw6q) {
            this.pv5A()
        }
    }
    ;
    b9i.cfz3x = function(d9g) {
        if (this.tw6q)
            return;
        this.bqt2x(h9c.X0x(d9g))
    }
    ;
    b9i.Cx9o = function(d9g) {
        K0x.Cx9o.apply(this, arguments);
        if (!d9g.stopped) {
            this.SH6B();
            var bj0x = 0;
            if (d9g.index > 1) {
                bj0x = this.zM8E + ((d9g.index - 1) * this.jS3x - 1) * this.oM5R
            }
            this.hZ3x = bj0x;
            this.pv5A()
        }
    }
    ;
    b9i.bOm8e = function(e9f) {
        if (!!this.Eb0x) {
            var dr1x = e9f.offset > 0 ? this.oM5R : this.zM8E
              , gk2x = dr1x + this.oM5R * (this.Eb0x - 1);
            this.hZ3x = e9f.offset + gk2x;
            e9f.data.limit = gk2x;
            e9f.limit = gk2x;
            delete this.Eb0x
        }
        return e9f
    }
    ;
    b9i.bhO0x = function(e9f) {
        delete this.Xy7r;
        K0x.bhO0x.apply(this, arguments);
        this.bMK8C()
    }
    ;
    b9i.bhU0x = function(d9g) {
        if (d9g.key != this.jm3x.key)
            return;
        switch (d9g.action) {
        case "refresh":
        case "append":
            delete this.Xy7r;
            break
        }
        K0x.bhU0x.apply(this, arguments)
    }
    ;
    b9i.Tb6V = function() {
        this.AV9M("onbeforelistload", "列表加载中...");
        a8i.ba0x(this.CR9I, "display", "none")
    }
    ;
    b9i.bix0x = function(j9a, bj0x, gk2x) {
        var bs0x = j9a.length
          , bqw2x = j9a.loaded ? bj0x + gk2x >= bs0x : bj0x + gk2x > bs0x;
        this.hZ3x = Math.min(this.hZ3x, bs0x);
        a8i.ba0x(this.CR9I, "display", bqw2x ? "none" : "");
        if (bqw2x)
            this.tw6q = !0;
        if (this.jS3x > 0) {
            var bx0x = this.BV9M(bj0x, j9a.length);
            if (this.bOj8b(bx0x.index, bx0x.total))
                return !0;
            var dr1x = this.zM8E - this.oM5R
              , hk2x = this.jS3x * this.oM5R;
            this.tw6q = (bj0x + gk2x - dr1x) % hk2x == 0 || bqw2x;
            a8i.ba0x(this.CR9I, "display", this.tw6q ? "none" : "");
            this.big0x(this.tw6q && bx0x.total > 1 ? "" : "none")
        }
    }
    ;
    b9i.bis0x = function() {
        this.hZ3x = 0;
        this.tw6q = !0;
        this.AV9M("onemptylist", "没有列表数据！")
    }
    ;
    b9i.Tf6Z = function(dU1x, lj3x) {
        this.iu3x.insertAdjacentHTML(lj3x || "beforeEnd", dU1x)
    }
    ;
    b9i.Th6b = function(hy2x) {
        this.fP2x = this.fP2x || [];
        if (k9b.ec1x(hy2x)) {
            fD2x.push.apply(this.fP2x, hy2x)
        } else {
            this.fP2x.push(hy2x)
        }
    }
    ;
    b9i.bbf9W = function(d9g) {
        a8i.mO4S(this.cM1x);
        this.Tp6j(d9g, "onafteradd");
        var fg2x = d9g.flag;
        if (d9g.stopped || !fg2x)
            return;
        if (this.jS3x > 0) {
            this.bij0x();
            return
        }
        this.hZ3x += 1;
        fg2x == -1 ? this.bjk1x(d9g.data) : this.bOf8X(d9g.data)
    }
    ;
    b9i.bbb9S = function(d9g) {
        this.Tp6j(d9g, "onafterdelete");
        if (d9g.stopped)
            return;
        if (this.jS3x > 0) {
            this.bij0x();
            return
        }
        var D0x = d9g.data[this.ft2x.pkey];
        if (!!this.fP2x) {
            var p9g = a8i.bVJ1x(D0x)
              , r9i = k9b.dm1x(this.fP2x, p9g);
            if (r9i >= 0) {
                this.fP2x.splice(r9i, 1);
                this.hZ3x -= 1
            }
            if (!!p9g)
                p9g.T0x()
        } else {
            var g9d = a8i.B9s(this.bOr8j(D0x));
            if (!!g9d)
                this.hZ3x -= 1;
            a8i.cO1x(g9d)
        }
        if (this.hZ3x <= 0)
            this.pv5A()
    }
    ;
    b9i.biU1x = function(bj0x, gk2x) {
        if (bj0x != this.hZ3x)
            return;
        if (this.bco9f()) {
            this.tw6q = !1;
            this.bMK8C()
        }
    }
    ;
    b9i.biW1x = function(bj0x, gk2x) {
        if (bj0x != 0)
            return;
        var IV1x = this.S0x.hH2x(this.jm3x.key);
        for (var i = gk2x - 1; i >= 0; i--) {
            this.bjk1x(IV1x[i])
        }
    }
    ;
    b9i.bMK8C = function() {
        var G0x = this.Ga0x;
        if (!G0x || this.tw6q)
            return;
        this.bqt2x(this.Ga0x)
    }
    ;
    b9i.gP2x = function() {
        delete this.tw6q;
        K0x.gP2x.apply(this, arguments)
    }
    ;
    b9i.pv5A = function() {
        if (!!this.Xy7r)
            return;
        this.Xy7r = !0;
        var bj0x = this.hZ3x;
        this.hZ3x += bj0x == 0 ? this.zM8E : this.oM5R;
        this.bOo8g(bj0x)
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), db1x = c9h("nej.x"), O0x = c9h("nej.ut"), b9i;
    if (!!O0x.Gm0x)
        return;
    O0x.Gm0x = NEJ.C();
    b9i = O0x.Gm0x.N0x(O0x.cH1x);
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.iK3x = e9f.event || "click";
        this.kL3x = e9f.selected || "js-selected";
        this.oy4C = e9f.disabled || "js-disabled";
        this.bMJ8B = !!e9f.inverse;
        this.cft3x(e9f.list);
        this.Wr7k(e9f.index || 0)
    }
    ;
    b9i.bB0x = function() {
        var cfs3x = function(g9d) {
            this.bqE3x(g9d, !1)
        };
        return function() {
            this.bG0x();
            k9b.bd0x(this.bU0x, cfs3x, this);
            delete this.bU0x;
            delete this.iK3x;
            delete this.cq0x;
            delete this.oy4C;
            delete this.kL3x;
            delete this.bMJ8B
        }
    }();
    b9i.cft3x = function() {
        var bzg5l = function(p9g) {
            if (!p9g)
                return;
            this.bU0x.push(p9g);
            var r9i = this.bU0x.length - 1
              , dw1x = this.bqF3x[r9i];
            if (!dw1x) {
                dw1x = this.Wr7k.f9e(this, r9i);
                this.bqF3x[r9i] = dw1x
            }
            this.bX0x([[p9g, this.iK3x, dw1x]])
        };
        return function(j9a) {
            this.bU0x = [];
            if (!this.bqF3x)
                this.bqF3x = [];
            k9b.bd0x(j9a, bzg5l, this)
        }
    }();
    b9i.bqE3x = function(G0x, cfp3x) {
        !!cfp3x && !this.bMJ8B ? a8i.w9n(G0x, this.kL3x) : a8i.y9p(G0x, this.kL3x)
    }
    ;
    b9i.Wr7k = function(r9i, Wt7m, i9b) {
        var G0x = this.bU0x[r9i];
        if (Wt7m != !0 && (r9i == this.cq0x || !G0x || a8i.bE0x(G0x, this.oy4C))) {
            h9c.co0x(arguments[1]);
            return this
        }
        var d9g = {
            index: r9i,
            last: this.cq0x,
            list: this.lJ4N(),
            data: i9b || a8i.t9k(G0x, "value")
        };
        this.cq0x = r9i;
        G0x = this.bU0x[d9g.last];
        if (!!G0x)
            this.bqE3x(G0x, !1);
        G0x = this.bU0x[this.cq0x];
        this.bqE3x(G0x, !0);
        this.z9q("onchange", d9g);
        if (!d9g.nostop)
            h9c.co0x(arguments[1]);
        return this
    }
    ;
    b9i.tR6L = function() {
        return this.cq0x
    }
    ;
    b9i.lJ4N = function() {
        return this.bU0x
    }
    ;
    a8i.cfn3x = db1x.cfn3x = function(bH0x, e9f) {
        var D0x = a8i.lQ4U(bH0x);
        if (!D0x)
            return null;
        if (!O0x.WZ7S(D0x, O0x.Gm0x)) {
            e9f = e9f || {};
            e9f.list = !e9f.clazz ? a8i.df1x(D0x) : a8i.E0x(D0x, e9f.clazz);
            delete e9f.clazz
        }
        return O0x.WZ7S(D0x, O0x.Gm0x, e9f || bb0x)
    }
    ;
    db1x.isChange = !0
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , k9b = c9h("nej.u")
      , v9m = c9h("nej.j")
      , l9c = c9h("nm.x");
    var SETTING_KEY = "player-setting";
    var nn4r = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nn4r = v9m.tV6P(SETTING_KEY) || nn4r;
    l9c.bqX3x = function() {
        return nn4r
    }
    ;
    l9c.Gw0x = function(Gx0x) {
        if (Gx0x) {
            nn4r = Gx0x;
            v9m.uM7F(SETTING_KEY, Gx0x)
        }
    }
}
)();
(function() {
    var c9h = NEJ.P
      , bb0x = NEJ.O
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , k9b = c9h("nej.u")
      , I0x = c9h("nej.ut")
      , l9c = c9h("nm.x")
      , q9h = c9h("nm.d")
      , hq2x = c9h("nm.w.player.log");
    var kN3x = q9h.hP2x.A9r();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var ht2x = function(u9l, bF0x, rM5R) {
        var cL1x = l9c.fp2x("{0} {1} {2}", k9b.id3x(new Date, "yyyy-MM-dd HH:mm:ss"), u9l, bF0x);
        if (rM5R == LogLevel.ERROR) {
            kN3x.eR2x("playerror", {
                message: bF0x
            })
        }
        if (rM5R >= LogLevel.INFO) {
            kN3x.bTv1x(cL1x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cL1x)
        }
    };
    hq2x.ca0x = function() {
        ht2x("PLAY_ERROR", l9c.fp2x.apply(null, arguments), LogLevel.ERROR)
    }
    ;
    hq2x.pL5Q = function() {
        ht2x("PLAY_INFO", l9c.fp2x.apply(null, arguments), LogLevel.INFO)
    }
    ;
    hq2x.cJC1x = function() {
        ht2x("PLAY_DEBUG", l9c.fp2x.apply(null, arguments), LogLevel.DEBUG)
    }
}
)();
(function() {
    var c9h = NEJ.P
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , I0x = c9h("nej.ut")
      , k9b = c9h("nej.u")
      , x9o = c9h("nm.w")
      , eK2x = c9h("flash.cb");
    var ek1x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var GF1x, Xf7Y, vo7h;
    x9o.cfj3x = function(u9l, cC1x) {
        if (u9l != "flash") {
            if (!GF1x) {
                GF1x = a8i.dk1x("audio");
                k9b.bd0x(ek1x, function(u9l) {
                    h9c.s9j(GF1x, u9l, onMediaCallBack)
                })
            }
            if (GF1x && GF1x.canPlayType && GF1x.canPlayType("audio/mpeg")) {
                cC1x(new MediaWrap("audio"));
                return
            }
        }
        if (!Xf7Y) {
            a8i.sm6g({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(ib3x) {
                    Xf7Y = ib3x;
                    k9b.bd0x(ek1x, function(u9l) {
                        eK2x[u9l] = onMediaCallBack;
                        Xf7Y.addCallback(u9l, "flash.cb." + u9l)
                    });
                    cC1x(new MediaWrap("flash"))
                }
                .f9e(this)
            })
        } else {
            cC1x(new MediaWrap("flash"))
        }
    }
    ;
    function MediaWrap(IQ1x) {
        var ha2x;
        I0x.fK2x.A9r({
            element: this,
            event: ek1x.concat(["interrupt", "recover"])
        });
        ha2x = IQ1x == "audio" ? GF1x : Xf7Y;
        this.type = IQ1x;
        this.destroy = function() {}
        ;
        this.setSrc = function(Y0x) {
            if (vo7h != this) {
                var gA2x = vo7h;
                if (gA2x) {
                    gA2x.interrupt()
                }
                vo7h = this
            }
            if (IQ1x == "flash") {
                ha2x.setSrc(Y0x)
            } else {
                ha2x.src = Y0x
            }
        }
        ;
        this.play = function() {
            if (vo7h != this) {
                var gA2x = vo7h;
                if (gA2x) {
                    gA2x.interrupt();
                    vo7h = this;
                    this.recover()
                } else {
                    vo7h = this
                }
            }
            if (IQ1x == "flash") {
                ha2x.as_play()
            } else {
                ha2x.play()
            }
        }
        ;
        this.pause = function() {
            if (vo7h != this)
                return;
            if (IQ1x == "flash") {
                ha2x.as_pause()
            } else {
                ha2x.pause()
            }
        }
        ;
        this.load = function() {
            if (vo7h != this)
                return;
            if (IQ1x == "flash") {
                ha2x.as_load()
            } else {
                ha2x.load()
            }
        }
        ;
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        }
        ;
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        }
        ;
        this.getMedia = function() {
            return ha2x
        }
        ;
        var pA5F = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k9b.bd0x(pA5F, function(W0x) {
            var WI7B = "get" + W0x
              , WL7E = "set" + W0x;
            if (IQ1x == "flash") {
                if (!this[WI7B]) {
                    this[WI7B] = function() {
                        return ha2x[WI7B]()
                    }
                }
                if (!this[WL7E]) {
                    this[WL7E] = function(value) {
                        ha2x[WL7E](value)
                    }
                }
            } else {
                var bMI8A = W0x.slice(0, 1).toLowerCase() + W0x.slice(1);
                if (!this[WI7B]) {
                    this[WI7B] = function() {
                        return ha2x[bMI8A]
                    }
                }
                if (!this[WL7E]) {
                    this[WL7E] = function(value) {
                        ha2x[bMI8A] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d9g) {
        if (vo7h) {
            h9c.z9q(vo7h, d9g.type, d9g)
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, h9c = c9h("nej.v"), v9m = c9h("nej.j"), I0x = c9h("nej.ut"), dz1x = c9h("nej.p"), x9o = c9h("nm.w"), l9c = c9h("nm.x"), hq2x = c9h("nm.w.player.log"), b9i;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bMG8y = false;
    x9o.gf2x = NEJ.C();
    b9i = x9o.gf2x.N0x(I0x.cH1x);
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.cS1x = {};
        this.WX7Q(e9f.media);
        v9m.bk0x("/api/cdns", {
            type: "json",
            onload: function(d9g) {
                if (d9g.code) {
                    this.rJ5O = d9g.data
                }
            }
            .f9e(this)
        })
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        delete this.cS1x
    }
    ;
    b9i.WW7P = function(bl0x) {
        if (!bl0x)
            return;
        var wT8L = this.cS1x.volume;
        if (this.dX1x) {
            this.dX1x.pause()
        }
        this.cS1x = {
            time: 0,
            id: bl0x.id,
            duration: bl0x.duration / 1e3,
            play: this.cS1x.play,
            stalledRetryCount: 0
        };
        if (wT8L != null) {
            this.cS1x.volume = wT8L
        }
        this.cS1x.loadState = LoadState.LOAD_START;
        this.bMD8v(bl0x.id);
        hq2x.pL5Q("play song id: {0}", bl0x.id)
    }
    ;
    b9i.er1x = function() {
        if (this.cS1x.error) {
            this.cS1x.error = null;
            if (this.cS1x.error == ErrorType.INFO_GET_ERR || this.bMC8u()) {
                this.bMB8t()
            } else {
                this.WR7K()
            }
        } else {
            if (this.dX1x) {
                this.dX1x.play()
            }
        }
        this.cS1x.play = true;
        this.pS5X("play")
    }
    ;
    b9i.fM2x = function() {
        if (this.dX1x) {
            this.dX1x.pause()
        }
        this.cS1x.play = false;
        this.pS5X("pause")
    }
    ;
    b9i.ps5x = function(bA0x) {
        if (this.dX1x) {
            this.dX1x.setCurrentTime(bA0x)
        }
        this.cS1x.time = bA0x;
        hq2x.pL5Q("seek to: {0}", bA0x)
    }
    ;
    b9i.bst3x = function() {
        return this.cS1x.duration || 0
    }
    ;
    b9i.uW7P = function() {
        return !!this.cS1x.play
    }
    ;
    b9i.my4C = function(WM7F) {
        this.cS1x.volume = WM7F;
        if (this.dX1x) {
            this.dX1x.setVolume(WM7F)
        }
    }
    ;
    b9i.Xb7U = function() {
        return this.cS1x.time
    }
    ;
    b9i.WX7Q = function(u9l) {
        x9o.cfj3x(u9l, function(ha2x) {
            this.dX1x = ha2x;
            hq2x.pL5Q("media loaded: {0}", ha2x.type);
            this.bX0x([[this.dX1x, "loadedmetadata", this.ceY3x.f9e(this)], [this.dX1x, "ended", this.ceU3x.f9e(this)], [this.dX1x, "waiting", this.zh8Z.f9e(this)], [this.dX1x, "play", this.uU7N.f9e(this)], [this.dX1x, "pause", this.bsX3x.f9e(this)], [this.dX1x, "playing", this.WF7y.f9e(this)], [this.dX1x, "timeupdate", this.ceT3x.f9e(this)], [this.dX1x, "progress", this.rr5w.f9e(this)], [this.dX1x, "stalled", this.btf3x.f9e(this)], [this.dX1x, "interrupt", this.fM2x.f9e(this)], [this.dX1x, "recover", this.ceS3x.f9e(this)], [this.dX1x, "error", this.dQ1x.f9e(this)]]);
            if (this.cS1x) {
                if (this.cS1x.loadState == LoadState.LOAD_START || this.cS1x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bto3x();
                    if (this.cS1x.volume != null) {
                        this.dX1x.setVolume(this.cS1x.volume)
                    }
                }
            }
        }
        .f9e(this))
    }
    ;
    b9i.ceR3x = function(u9l) {
        this.IW1x();
        this.dX1x.destroy();
        this.cS1x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zh8Z();
        this.WX7Q(u9l);
        hq2x.pL5Q("switch media")
    }
    ;
    b9i.cJD1x = function() {
        return this.dX1x
    }
    ;
    b9i.bMD8v = function() {
        this.zh8Z();
        v9m.bk0x("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cS1x.id]),
                br: DEFAULT_BR
            },
            onload: this.bMw8o.f9e(this),
            onerror: this.bMw8o.f9e(this)
        })
    }
    ;
    b9i.bMw8o = function(d9g) {
        if (d9g.code == 200 && d9g.data && d9g.data.length) {
            var bx0x = d9g.data[0];
            if (!bx0x.url) {
                this.cS1x.error = ErrorType.INFO_GET_ERR;
                this.pS5X("error", {
                    code: this.cS1x.error
                });
                return
            }
            this.cS1x.playUrl = bx0x.url;
            this.cS1x.expireTime = (new Date).getTime() + bx0x.expi * 1e3;
            this.bto3x()
        } else {
            this.cS1x.error = ErrorType.INFO_GET_ERR;
            this.pS5X("error", {
                code: this.cS1x.error
            });
            hq2x.ca0x("info load error")
        }
    }
    ;
    b9i.bto3x = function() {
        if (this.dX1x) {
            var Y0x = this.cS1x.playUrl;
            if (this.cS1x.time > 0 && (this.cS1x.loadState == LoadState.IN_RE_GET_URL || this.cS1x.loadState == LoadState.IN_RE_GET_URL)) {
                Y0x += "#t=" + this.cS1x.time
            }
            this.dX1x.setSrc(Y0x);
            hq2x.pL5Q("load mp3: {0},loadState: {1}.", Y0x, this.cS1x.loadState)
        }
    }
    ;
    b9i.bMv8n = function() {
        if (/#t=(\d+)$/.test(this.dX1x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    }
    ;
    b9i.WR7K = function() {
        var bA0x = parseInt(this.cS1x.time) || 0
          , ceM3x = this.bMv8n();
        if (bA0x === ceM3x) {
            this.dX1x.load()
        } else {
            this.dX1x.setSrc(this.cS1x.playUrl + "#t=" + bA0x)
        }
        this.cS1x.loadState = LoadState.IN_RELOAD;
        this.zh8Z();
        hq2x.pL5Q("reload from: {0}", bA0x)
    }
    ;
    b9i.bMB8t = function() {
        this.cS1x.loadState = LoadState.IN_RE_GET_URL;
        this.bMD8v()
    }
    ;
    b9i.bMu8m = function() {
        var sk6e = getHost(this.cS1x.playUrl);
        if (sk6e) {
            for (var i = 0; i < this.rJ5O.length; i++) {
                var iz3x = this.rJ5O[i] || []
                  , r9i = iz3x.indexOf(sk6e);
                if (r9i >= 0 && iz3x.length > 1) {
                    return iz3x[(r9i + 1) % iz3x.length]
                }
            }
        }
        function getHost(Y0x) {
            if (CDN_HOST_REG.test(Y0x))
                return RegExp.$1
        }
    }
    ;
    b9i.ceK3x = function() {
        this.cS1x.playUrl = this.cS1x.playUrl.replace(CDN_HOST_REG, this.bMu8m());
        this.cS1x.loadState = LoadState.IN_SWITCH_CDN;
        this.bto3x();
        this.zh8Z()
    }
    ;
    b9i.ceY3x = function() {
        if (this.cS1x.loadState == LoadState.LOAD_START) {
            this.cS1x.loadState = LoadState.LOADED_META;
            if (this.dX1x.type == "audio") {
                this.cS1x.duration = this.dX1x.getDuration()
            }
            this.pS5X("loadedmeta", {
                duration: this.cS1x.duration
            })
        } else {
            this.cS1x.loadState = LoadState.LOADED_META
        }
        if (this.cS1x.play) {
            this.dX1x.play()
        } else {
            this.dX1x.pause()
        }
        if (this.cS1x.time && parseInt(this.cS1x.time) != this.bMv8n()) {
            this.dX1x.setCurrentTime(this.cS1x.time)
        }
        this.Kc2x();
        this.WF7y();
        bMG8y = true;
        hq2x.pL5Q("loaded meta")
    }
    ;
    b9i.ceU3x = function() {
        this.cS1x.ended = true;
        this.pS5X("ended")
    }
    ;
    b9i.zh8Z = function() {
        if (!this.cS1x.waiting) {
            this.cS1x.waiting = true;
            this.cS1x.waitTimestamp = +(new Date);
            this.pS5X("waiting")
        }
    }
    ;
    b9i.WF7y = function() {
        this.cS1x.waiting = false;
        this.cS1x.waitTimestamp = 0;
        this.pS5X("playing")
    }
    ;
    b9i.uU7N = function() {
        this.pS5X("play")
    }
    ;
    b9i.bsX3x = function() {
        this.pS5X("pause")
    }
    ;
    b9i.ceT3x = function() {
        if (this.cS1x.loadState != LoadState.LOADED_META)
            return;
        var bA0x = this.dX1x.getCurrentTime();
        if (this.cS1x.waiting && bA0x > this.cS1x.time) {
            this.WF7y()
        }
        this.cS1x.time = bA0x;
        this.pS5X("timeupdate", {
            time: this.cS1x.time,
            duration: this.cS1x.duration
        })
    }
    ;
    b9i.rr5w = function(d9g) {
        if (this.cS1x.loadState != LoadState.LOADED_META)
            return;
        var m9d = {};
        if (d9g.data) {
            m9d.total = d9g.data.total;
            m9d.loaded = d9g.data.loaded
        } else {
            var zk8c = this.dX1x.getBuffered()
              , bA0x = this.dX1x.getCurrentTime()
              , pm5r = 0;
            for (var i = 0; i < zk8c.length; i++) {
                if (bA0x > zk8c.start(i) && bA0x < zk8c.end(i)) {
                    pm5r = zk8c.end(i);
                    break
                }
            }
            m9d.total = this.cS1x.duration;
            m9d.loaded = Math.min(pm5r, m9d.total)
        }
        this.pS5X("progress", m9d)
    }
    ;
    b9i.Kc2x = function() {
        if (this.cS1x.retry) {
            clearTimeout(this.cS1x.retry.tid);
            this.cS1x.retry = null
        }
    }
    ;
    b9i.dQ1x = function() {
        var bY0x = this.dX1x.getError();
        hq2x.ca0x("media error code: {0}, netState: {1}", bY0x.code, this.dX1x.getNetworkState());
        if (bY0x.code == MediaError.MEDIA_ERR_NETWORK || bY0x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gx0x = l9c.bqX3x();
            if (!this.cS1x.retry) {
                this.cS1x.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cS1x.retry.tid)
            }
            if (this.cS1x.retry.level == RetryLevel.NONE) {
                if (this.bMC8u()) {
                    this.cS1x.retry.level = RetryLevel.GET_URL;
                    this.bMB8t();
                    hq2x.pL5Q("Url expired, get url.")
                } else {
                    this.cS1x.retry.level = RetryLevel.RELOAD;
                    this.cS1x.retry.tid = setTimeout(this.WR7K.f9e(this), 3e3);
                    hq2x.pL5Q("Reload mp3 3s later.")
                }
            } else if (this.cS1x.retry.level == RetryLevel.GET_URL) {
                this.cS1x.retry.level = RetryLevel.RELOAD;
                this.cS1x.retry.tid = setTimeout(this.WR7K.f9e(this), 3e3);
                hq2x.pL5Q("Reload mp3 3s later.")
            } else if (this.cS1x.retry.level == RetryLevel.RELOAD) {
                this.cS1x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bMu8m()) {
                    this.cS1x.retry.tid = setTimeout(this.ceK3x.f9e(this), 5e3);
                    hq2x.pL5Q("Switch CDN 5s later.")
                } else {
                    this.cS1x.retry.tid = setTimeout(this.WR7K.f9e(this), 5e3);
                    hq2x.pL5Q("Reload mp3 5s later.")
                }
            } else if (!bMG8y && this.dX1x.type == "audio" && !Gx0x.useFlash && !dz1x.Ku2x.mac && l9c.btS3x().supported) {
                Gx0x.useFlash = true;
                l9c.Gw0x(Gx0x);
                this.ceR3x("flash")
            } else {
                this.Kc2x();
                this.fM2x();
                this.cS1x.error = ErrorType.NET_ERR;
                this.pS5X("error", {
                    code: this.cS1x.error
                });
                hq2x.ca0x("error can not retry.")
            }
        } else {
            this.Kc2x();
            this.fM2x();
            this.cS1x.error = ErrorType.UNKNOWN_ERR;
            this.pS5X("error", {
                code: this.cS1x.error
            });
            hq2x.ca0x("error can not retry.")
        }
    }
    ;
    b9i.btf3x = function() {
        var hY2x = 0
          , bMt8l = 5e3;
        return function() {
            this.zh8Z();
            clearTimeout(hY2x);
            setTimeout(function() {
                var fb2x = +(new Date);
                if (this.cS1x.waiting && fb2x - this.cS1x.waitTimestamp >= bMt8l && this.cS1x.stalledRetryCount < MAX_STALLED_RETRY) {
                    hq2x.pL5Q("stalled too long retry.");
                    this.cS1x.stalledRetryCount++;
                    this.WR7K()
                }
            }
            .f9e(this), bMt8l);
            hq2x.pL5Q("stalled")
        }
    }();
    b9i.bMC8u = function() {
        var fb2x = +(new Date);
        return fb2x > this.cS1x.expireTime
    }
    ;
    b9i.ceS3x = function() {
        var bA0x = parseInt(this.cS1x.time) || 0;
        this.dX1x.setSrc(this.cS1x.playUrl + "#t=" + bA0x);
        this.cS1x.loadState = LoadState.IN_RELOAD;
        this.zh8Z();
        hq2x.pL5Q("recover from: {0}", bA0x)
    }
    ;
    b9i.pS5X = function(U0x, i9b) {
        h9c.z9q(x9o.gf2x, "playaction", {
            action: U0x,
            data: i9b || {}
        })
    }
    ;
    I0x.fK2x.A9r({
        element: x9o.gf2x,
        event: ["playaction"]
    })
}
)();
(function() {
    if (!(window == top)) {
        return
    }
    var c9h = NEJ.P, h9c = c9h("nej.v"), I0x = c9h("nej.ut"), x9o = c9h("nm.w"), b9i;
    x9o.HQ1x = NEJ.C();
    b9i = x9o.HQ1x.N0x(x9o.gf2x);
    K0x = x9o.HQ1x.cr0x;
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.ceI3x = function(bP0x) {
        this.WW7P(bP0x);
        this.er1x()
    }
    ;
    b9i.btG3x = function() {
        this.fM2x()
    }
    ;
    b9i.xt8l = function(d9g) {
        if (d9g.action == "play") {
            this.fM2x()
        }
    }
    ;
    b9i.pS5X = function(U0x, i9b) {
        h9c.z9q(x9o.HQ1x, "tmpplayaction", {
            action: U0x,
            data: i9b || {},
            tmp: true
        })
    }
    ;
    b9i.tu6o = function() {
        return this.cS1x
    }
    ;
    I0x.fK2x.A9r({
        element: x9o.HQ1x,
        event: ["tmpplayaction"]
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), fY2x = c9h("nej.n"), v9m = c9h("nej.j"), I0x = c9h("nej.ut"), bc0x = c9h("nej.ui"), x9o = c9h("nm.w"), n9e = c9h("nm.l"), kX3x = c9h("nm.c"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, K0x, Xr7k = [{
        item: "m-publish-search-single",
        type: 1
    }, {
        item: "m-publish-search-artist",
        type: 100
    }, {
        item: "m-publish-search-album",
        type: 10
    }, {
        item: "m-publish-search-mv",
        type: 1004
    }, {
        item: "m-publish-search-playlist",
        type: 1e3
    }, {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var btN3x = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    x9o.btO3x = NEJ.C();
    b9i = x9o.btO3x.N0x(bc0x.eo1x);
    b9i.cv0x = function(e9f) {
        this.cD1x(e9f);
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.cJH1x = j9a.shift();
        this.ceA3x = j9a.shift();
        this.Kl2x = j9a.shift();
        this.btV3x = j9a.shift();
        this.btW3x = [j9a.shift(), j9a.shift(), j9a.shift(), j9a.shift(), j9a.shift(), j9a.shift()];
        this.Xw7p = j9a.shift();
        this.bMr8j = j9a.shift();
        this.sU6O = {
            list: this.btW3x,
            selected: "z-curr",
            onchange: this.bMq8i.f9e(this)
        };
        h9c.s9j(this.Kl2x, "input", this.XD7w.f9e(this));
        h9c.s9j(this.Kl2x, "propertychange", this.XD7w.f9e(this));
        h9c.s9j(this.Kl2x, "keyup", this.XD7w.f9e(this));
        h9c.s9j(this.ceA3x, "click", this.XD7w.f9e(this));
        h9c.s9j(this.Xw7p, "click", this.cJ1x.f9e(this));
        h9c.s9j(this.bMr8j, "click", function() {
            this.z9q("oncancel", {})
        }
        .f9e(this));
        this.S0x = q9h.Iu1x.fR2x();
        this.Wl7e = top.nm.w.HQ1x.fR2x();
        I0x.fK2x.A9r({
            element: top.nm.w.HQ1x,
            event: ["tmpplayaction"]
        });
        this.sJ6D = {
            limit: 100,
            offset: 0,
            parent: this.Xw7p,
            onbeforelistload: this.rb5g.f9e(this)
        };
        q9h.sk = "fuck" + a8i.t9k(this.btV3x, "xname") + "458";
        h9c.s9j(top.nm.w.HQ1x, "tmpplayaction", this.xt8l.f9e(this))
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "m-xwgt-publish-search"
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        if (!!this.DT0x) {
            this.DT0x.T0x();
            delete this.DT0x
        }
        this.sU6O.index = btN3x[e9f.type || "song"];
        this.DT0x = I0x.Gm0x.A9r(this.sU6O);
        this.Kl2x.value = "";
        this.Kl2x.focus();
        this.wL8D = "";
        this.cJI1x = 0;
        if (e9f.showMV == true) {
            this.btW3x[btN3x["mv"]].parentNode.style.display = "";
            a8i.w9n(this.btV3x, "srchtab-1")
        } else {
            this.btW3x[btN3x["mv"]].parentNode.style.display = "none";
            a8i.y9p(this.btV3x, "srchtab-1")
        }
        if (!!this.dM1x) {
            this.dM1x = this.dM1x.T0x()
        }
        if (e9f.hideBack) {
            a8i.w9n(this.bMr8j.parentNode, "f-hide")
        }
    }
    ;
    b9i.bB0x = function() {
        this.Wl7e.btG3x();
        this.bG0x()
    }
    ;
    b9i.XD7w = function() {
        var value = this.Kl2x.value.trim();
        if (value && value.length) {
            if (value != this.wL8D) {
                this.wL8D = value;
                this.bMq8i({
                    index: this.DT0x.tR6L()
                })
            }
        } else {
            if (this.dM1x) {
                this.dM1x = this.dM1x.T0x()
            }
        }
        this.wL8D = value
    }
    ;
    b9i.cJ1x = function() {
        var cev3x = function(G0x) {
            return a8i.bE0x(G0x, "sitm") || a8i.bE0x(G0x, "itm") || a8i.bE0x(G0x, "mv-item")
        }
          , ceu3x = function(G0x) {
            return a8i.bE0x(G0x, "ply")
        }
          , bMp8h = function() {
            n9e.Z0x.J0x({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        }
          , ces3x = function() {
            n9e.Z0x.J0x({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        }
          , buB4F = function(bl0x) {
            if (bl0x && bl0x.privilege && bl0x.privilege.toast) {
                v9m.bk0x("/api/song/toast", {
                    query: {
                        id: bl0x.id
                    },
                    type: "json",
                    onload: Vm6g.f9e(this),
                    onerror: Vm6g.f9e(this)
                })
            } else {
                Vf6Z()
            }
        }
          , Vm6g = function(Q0x) {
            Vf6Z((Q0x || bb0x).toast)
        }
          , Vf6Z = function(bF0x) {
            n9e.Z0x.J0x({
                type: 2,
                tip: bF0x || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d9g) {
            var wK8C = h9c.X0x(d9g, ceu3x)
              , j9a = h9c.X0x(d9g, cev3x)
              , eA1x = this.Wl7e.tu6o();
            if (!!j9a) {
                h9c.bf0x(d9g);
                this.Wj7c = a8i.t9k(j9a, "id");
                this.Wc7V = a8i.t9k(j9a, "type");
                if (this.Wc7V == 18) {
                    var bP0x = this.S0x.eO2x(this.Wj7c)
                      , rM5R = l9c.qc5h(bP0x);
                    if (!wK8C) {
                        if (rM5R == 10) {
                            bMp8h();
                            return
                        } else if (rM5R == 100) {
                            buB4F(bP0x);
                            return
                        }
                    } else {
                        if (rM5R == 10) {
                            bMp8h();
                            return
                        } else if (rM5R == 100) {
                            buB4F(bP0x);
                            return
                        } else if (rM5R == 11) {
                            ces3x();
                            return
                        } else {
                            a8i.y9p(this.Ed0x, "z-pause z-loading");
                            if (wK8C == this.Ed0x && eA1x.play && !eA1x.ended) {
                                this.Wl7e.btG3x()
                            } else {
                                this.Ed0x = wK8C;
                                this.Wl7e.ceI3x(bP0x)
                            }
                            return
                        }
                    }
                } else if (this.Wc7V == 70) {
                    if (a8i.bE0x(j9a, "z-noprogram")) {
                        n9e.Z0x.J0x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cer3x()
            }
        }
    }();
    b9i.cer3x = function() {
        var ik3x = this.S0x.eO2x(this.Wj7c)
          , ty6s = l9c.bRh0x(this.Wc7V, ik3x);
        ty6s.title = ty6s.title || "";
        ty6s.author = ty6s.author || "";
        ty6s.picUrl = ty6s.picUrl || "";
        ty6s.authors = ty6s.authors || "";
        if (this.Wc7V == 70) {
            this.Wj7c = this.Wj7c.slice(0, -4)
        }
        this.z9q("onfinish", {
            id: this.Wj7c,
            type: this.Wc7V,
            data: ty6s
        })
    }
    ;
    b9i.xt8l = function(d9g) {
        var i9b = d9g.data;
        if (!this.Ed0x) {
            return
        }
        switch (d9g.action) {
        case "play":
            a8i.fo2x(this.Ed0x, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a8i.y9p(this.Ed0x, "z-pause z-loading");
            break;
        case "error":
            n9e.Z0x.J0x({
                type: 2,
                tip: "试听遇到问题，播放失败"
            });
            a8i.y9p(this.Ed0x, "z-pause z-loading");
            break;
        case "playing":
            a8i.fo2x(this.Ed0x, "z-loading", "z-pause");
            break;
        case "waiting":
            a8i.fo2x(this.Ed0x, "z-pause", "z-loading");
            break
        }
    }
    ;
    b9i.ceq3x = function(d9g) {
        if (d9g.result.code == 407) {
            this.Xw7p.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Xw7p.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    }
    ;
    b9i.bMq8i = function(d9g) {
        if (!this.wL8D || d9g.index < 0 || d9g.index > 5) {
            return
        }
        this.Wl7e.btG3x();
        var bi0x = Xr7k[d9g.index]
          , e9f = NEJ.X({}, this.sJ6D);
        e9f.cache = {
            klass: q9h.Iu1x,
            clear: true,
            onerror: this.ceq3x.f9e(this)
        };
        e9f.cache.lkey = "search-publish-" + bi0x.type + "-" + this.wL8D;
        e9f.item = {
            klass: bi0x.item,
            getRestrictLevel: l9c.qc5h,
            dur2time: l9c.lC4G
        };
        if (!e9f.cache.data) {
            e9f.cache.data = {}
        }
        e9f.cache.data.s = this.wL8D;
        e9f.cache.data.type = bi0x.type;
        e9f.cache.data.isPub = true;
        if (bi0x.type == 1) {
            e9f.cache.data.hlpretag = '<span class="s-fc7">';
            e9f.cache.data.hlposttag = "</span>"
        }
        e9f.onemptylist = this.cem3x.f9e(this, this.wL8D);
        if (!!this.Il1x)
            this.S0x.wm7f(this.Il1x);
        if (!!this.dM1x) {
            this.dM1x = this.dM1x.T0x()
        }
        this.dM1x = I0x.nk4o.A9r(e9f);
        this.Il1x = e9f.cache.lkey
    }
    ;
    b9i.rb5g = function(d9g) {
        d9g.value = a8i.ij3x("m-publish-search-loading")
    }
    ;
    b9i.cem3x = function(L0x, d9g) {
        a8i.dA1x(d9g.parent, "m-publish-emtpy-message", {
            key: L0x
        });
        d9g.stopped = true
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), dz1x = c9h("nej.p"), v9m = c9h("nej.j"), cd0x = c9h("nej.ut"), bC0x = c9h("nej.ui"), x9o = c9h("nm.w"), b9i, K0x;
    var cec3x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    x9o.In1x = NEJ.C();
    b9i = x9o.In1x.N0x(bC0x.eo1x);
    var gs2x = a8i.ey1x("m-wgt-receiverInput");
    var ceb3x = a8i.ey1x("m-wgt-receiverList");
    var iX3x = a8i.uK7D(cec3x);
    var cea3x = a8i.ey1x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b9i.cv0x = function(e9f) {
        this.be0x = [];
        this.xN8F = e9f.receiver || null;
        this.cdZ3x = e9f.unique || false;
        this.gH2x = e9f.err;
        this.bMm8e(this.bMj8b, e9f.uid);
        this.cD1x(e9f)
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.VL6F();
        this.VK6E();
        this.Yf7Y();
        if (e9f.receiver)
            this.bvt4x(e9f.receiver.nickname, e9f.receiver.userId);
        a8i.ba0x(this.Ee0x, "display", "block");
        a8i.ba0x(this.bvv4z, "cursor", "text");
        a8i.ba0x(this.Ee0x, "cursor", "text")
    }
    ;
    b9i.cf0x = function() {
        var i9b = this.bMi8a();
        this.ce0x = a8i.jz3x(a8i.cc0x(gs2x, {
            receiver: this.xN8F,
            users: i9b
        }));
        this.mt4x = iX3x
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var bO0x = a8i.E0x(this.o9f, "j-flag");
        var hy2x = a8i.E0x(this.o9f, "j-item");
        this.bvv4z = bO0x[0];
        this.bMg8Y = bO0x[1];
        this.en1x = bO0x[2];
        this.Ee0x = bO0x[3];
        this.Yl7e = bO0x[4];
        this.bvK4O = bO0x[5];
        this.fP2x = hy2x;
        a8i.w9n(this.fP2x[0], "j-selected");
        h9c.s9j(this.en1x, "keyup", this.bvM4Q.f9e(this));
        h9c.s9j(this.en1x, "keydown", this.Vr6l.f9e(this));
        h9c.s9j(this.en1x, "focus", this.lv4z.f9e(this));
        h9c.s9j(this.Yl7e, "click", this.cdQ3x.f9e(this));
        h9c.s9j(this.bvv4z, "click", this.cdP3x.f9e(this));
        h9c.s9j(document.body, "click", this.oY5d.f9e(this));
        h9c.s9j(this.en1x, "input", this.eQ2x.f9e(this));
        h9c.s9j(this.en1x, "blur", this.ow4A.f9e(this))
    }
    ;
    b9i.bB0x = function(e9f) {
        h9c.mL4P(document.body, "click", this.oY5d.f9e(this));
        this.bG0x();
        this.Yf7Y();
        this.cdO3x();
        this.oY5d()
    }
    ;
    b9i.bvM4Q = function(d9g) {
        h9c.bf0x(d9g);
        var jW3x = d9g.keyCode || d9g.which;
        var bp0x = this.en1x.value;
        var bs0x = this.fP2x.length;
        var sH6B = a8i.E0x(this.o9f, "j-selected")[0];
        switch (jW3x) {
        case 13:
            var lt3x = a8i.hb2x(sH6B, "data-username");
            var hS2x = a8i.hb2x(sH6B, "data-userId");
            this.bvt4x(lt3x, hS2x);
            this.oY5d();
            this.en1x.value = "";
            break;
        case 38:
            var r9i = a8i.hb2x(sH6B, "data-index") - 1 < 0 ? bs0x - 1 : a8i.hb2x(sH6B, "data-index") - 1;
            a8i.y9p(sH6B, "j-selected");
            a8i.w9n(this.fP2x[r9i], "j-selected");
            break;
        case 40:
            var r9i = parseInt(a8i.hb2x(sH6B, "data-index")) + 1 >= bs0x ? 0 : parseInt(a8i.hb2x(sH6B, "data-index")) + 1;
            a8i.y9p(sH6B, "j-selected");
            a8i.w9n(this.fP2x[r9i], "j-selected");
            break;
        default:
            this.xT8L()
        }
    }
    ;
    b9i.Vr6l = function(d9g) {
        var jW3x = d9g.keyCode || d9g.which;
        var bp0x = this.en1x.value;
        var r9i = a8i.E0x(this.o9f, "j-receiver").length - 1;
        if (jW3x === 8 && bp0x === "")
            this.cdN3x(r9i)
    }
    ;
    b9i.eQ2x = function(d9g) {
        var bp0x = this.en1x.value;
        if (bp0x.length > 10) {
            this.en1x.value = bp0x.substring(0, 10);
            return
        }
        dz1x.ds1x.browser == "ie" && dz1x.ds1x.version < "7.0" ? setTimeout(this.bwo4s.f9e(this), 0) : this.bwo4s();
        this.VK6E()
    }
    ;
    b9i.lv4z = function() {
        if (this.be0x[0])
            this.xT8L();
        else
            this.bMm8e(this.cdM3x);
        a8i.ba0x(this.Ee0x, "display", "none")
    }
    ;
    b9i.ow4A = function() {
        var bs0x = a8i.E0x(this.o9f, "j-receiver").length;
        if (this.en1x.value.trim() == "" && bs0x <= 0)
            a8i.ba0x(this.Ee0x, "display", "block")
    }
    ;
    b9i.bvt4x = function(lt3x, hS2x) {
        var Lo2x = this.Vi6c();
        if (Lo2x.length >= 10) {
            this.ea1x();
            return
        }
        var bc0x;
        for (bc0x = 0; bc0x < Lo2x.length; bc0x++) {
            if (Lo2x[bc0x] == hS2x) {
                this.oY5d();
                return
            }
        }
        if (!lt3x || !hS2x)
            return;
        var g9d = a8i.dD1x(a8i.jz3x(a8i.cc0x(cea3x, {
            username: lt3x,
            userId: hS2x
        })));
        var bH0x = this.bMg8Y.parentNode;
        if (this.cdZ3x) {
            this.Yf7Y()
        }
        bH0x.insertBefore(g9d, this.bMg8Y);
        this.en1x.value = "";
        var bs0x = a8i.E0x(this.o9f, "j-receiver").length;
        if (bs0x > 1)
            a8i.ba0x(this.Ee0x, "display", "none");
        this.bwo4s();
        this.VK6E()
    }
    ;
    b9i.Yf7Y = function() {
        var Vh6b = a8i.E0x(this.o9f, "j-receiver");
        var bc0x;
        if (Vh6b.length > 0) {
            for (bc0x = 0; bc0x < Vh6b.length; bc0x++) {
                a8i.cO1x(Vh6b[bc0x], false)
            }
        }
    }
    ;
    b9i.cdO3x = function() {
        this.en1x.value = ""
    }
    ;
    b9i.cdN3x = function(r9i) {
        this.ea1x(!0);
        var Vh6b = a8i.E0x(this.o9f, "j-receiver");
        a8i.cO1x(Vh6b[r9i], false);
        this.VK6E()
    }
    ;
    b9i.xT8L = function() {
        var bp0x = this.en1x.value;
        var bv0x = bp0x.trim().toLowerCase();
        var i9b;
        bv0x = bv0x.replace(/\[/g, "\\[");
        bv0x = bv0x.replace(/\]/g, "\\]");
        i9b = this.bMi8a(bv0x);
        this.cdH3x(i9b)
    }
    ;
    b9i.oY5d = function(d9g) {
        a8i.ba0x(this.Yl7e, "display", "none")
    }
    ;
    b9i.ea1x = function(dO1x) {
        if (dO1x && this.gH2x) {
            a8i.ba0x(this.gH2x, "display", "none");
            return
        }
        if (this.gH2x)
            a8i.ba0x(this.gH2x, "display", "block")
    }
    ;
    b9i.cdQ3x = function(d9g) {
        h9c.co0x(d9g);
        var bQ0x = d9g.target || d9g.srcElement;
        if (a8i.bE0x(bQ0x, "j-flag"))
            return;
        var bH0x = bQ0x.nodeName.toLowerCase() == "a" ? bQ0x.parentNode : bQ0x.parentNode.parentNode;
        var lt3x = a8i.hb2x(bH0x, "data-username");
        var hS2x = a8i.hb2x(bH0x, "data-userId");
        this.bvt4x(lt3x, hS2x);
        this.oY5d();
        a8i.ba0x(this.Ee0x, "display", "none")
    }
    ;
    b9i.cdP3x = function(d9g) {
        h9c.bf0x(d9g);
        var bQ0x = d9g.target || d9g.srcElement;
        if (a8i.bE0x(bQ0x.parentNode, "j-receiver")) {
            a8i.cO1x(bQ0x.parentNode, false);
            this.ea1x(!0);
            this.VK6E()
        } else
            this.en1x.focus()
    }
    ;
    b9i.bwo4s = function() {
        this.bvK4O.innerHTML = this.en1x.value;
        var cG1x = this.bvK4O.offsetWidth + 2;
        a8i.ba0x(this.en1x, "width", cG1x + "px")
    }
    ;
    b9i.VK6E = function() {
        var Yy7r = a8i.ic3x(this.en1x, this.o9f).y;
        var bMb8T = Math.floor((Yy7r - 8) / 27);
        if (bMb8T < 0)
            return;
        a8i.ba0x(this.bvv4z, "height", 19 + bMb8T * 29 + "px")
    }
    ;
    b9i.VL6F = function() {
        var qp5u = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qp5u.length; i++) {
            a8i.ba0x(this.bvK4O, qp5u[i], a8i.di1x(this.en1x, qp5u[i]))
        }
    }
    ;
    b9i.bMm8e = function(cC1x, D0x) {
        var do1x = D0x ? D0x : window.GUser.userId;
        var Y0x = "/api/user/getfollows/" + do1x;
        var gp2x = v9m.bk0x(Y0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cC1x.f9e(this),
            onerror: function(i9b) {
                this.be0x = []
            },
            onbeforerequest: function(i9b) {}
        })
    }
    ;
    b9i.bMj8b = function(i9b) {
        this.be0x = JSON.parse(i9b).follow || [];
        var D0x = GUser.userId;
        for (var i = 0; i < this.be0x.length; i++) {
            if (this.be0x[i].userId == D0x) {
                this.be0x.splice(i, 1);
                continue
            }
            this.be0x[i].avatarUrl = this.be0x[i].avatarUrl + "?param=30y30"
        }
    }
    ;
    b9i.cdM3x = function(i9b) {
        if (this.be0x[0])
            return;
        this.bMj8b(i9b);
        this.xT8L()
    }
    ;
    b9i.bMi8a = function(bv0x) {
        var bv0x = bv0x ? bv0x : "";
        this.be0x = this.be0x[0] ? this.be0x : [];
        var bs0x = this.be0x.length;
        var UZ6T = this.Vi6c();
        var ud6X = [];
        var UY6S, UW6Q, bwM4Q;
        if (!this.be0x[0])
            return ud6X;
        for (var bc0x = 0; bc0x < bs0x; bc0x++) {
            bwM4Q = false;
            for (var v9m = 0; v9m < UZ6T.length; v9m++) {
                if (this.be0x[bc0x].userId == UZ6T[v9m]) {
                    bwM4Q = true;
                    break
                }
            }
            if (bwM4Q)
                continue;
            UY6S = this.be0x[bc0x].nickname.toLowerCase().search(bv0x);
            UW6Q = this.be0x[bc0x].py ? this.be0x[bc0x].py.toLowerCase().search(bv0x) : -1;
            if (UY6S !== -1 || UW6Q != -1)
                ud6X.push(this.be0x[bc0x])
        }
        return ud6X
    }
    ;
    b9i.cdH3x = function(i9b) {
        a8i.dA1x(this.Yl7e, ceb3x, {
            users: i9b
        });
        a8i.w9n(a8i.E0x(this.o9f, "j-item")[0], "j-selected");
        this.fP2x = a8i.E0x(this.o9f, "j-item");
        a8i.ba0x(this.Yl7e, "display", "block")
    }
    ;
    b9i.Vi6c = function() {
        var ud6X = a8i.E0x(this.o9f, "j-receiver") || [];
        var hS2x = [];
        for (var i = 0; i < ud6X.length; i++) {
            hS2x.push(a8i.hb2x(ud6X[i], "data-id"))
        }
        return hS2x
    }
    ;
    b9i.cJJ1x = function() {
        var hS2x = this.Vi6c();
        var ud6X = [];
        for (var i = 0; i < hS2x.length; i++) {
            for (var j = 0; j < this.be0x.length; j++) {
                if (hS2x[i] == this.be0x[j].userId)
                    ud6X.push(this.be0x[j])
            }
        }
        return ud6X
    }
    ;
    b9i.cdy3x = function() {
        this.Yf7Y()
    }
    ;
    x9o.In1x.J0x = function(e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n9e.pq5v.J0x({
                title: "登录"
            });
            return
        }
        e9f = e9f || {};
        if (e9f.parent === undefined)
            e9f.parent = document.body;
        !!this.fr2x && this.fr2x.T0x();
        this.fr2x = this.A9r(e9f)
    }
    ;
    x9o.In1x.bq0x = function() {
        !!this.fr2x && this.fr2x.T0x()
    }
    ;
    x9o.In1x.Eq0x = function() {
        return this.oY5d()
    }
    ;
    x9o.In1x.cJK1x = function() {
        return this.xT8L()
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, K0x;
    n9e.LP2x = NEJ.C();
    b9i = n9e.LP2x.N0x(n9e.bkJ1x);
    K0x = n9e.LP2x.cr0x;
    b9i.bm0x = function() {
        var Er0x;
        var cdn3x = function(C0x, L0x) {
            Er0x = Er0x || [];
            if (L0x != "18")
                Er0x.push({
                    key: L0x,
                    value: C0x
                })
        };
        return function(e9f) {
            this.bn0x(e9f);
            if (e9f.upwards) {
                a8i.w9n(this.o9f, "m-emts-up")
            } else {
                a8i.y9p(this.o9f, "m-emts-up")
            }
            if (e9f.rightwards) {
                a8i.w9n(this.o9f, "m-emts-right")
            } else {
                a8i.y9p(this.o9f, "m-emts-right")
            }
            if (!Er0x) {
                var bz0x = l9c.crw6q();
                k9b.eH1x(bz0x, cdn3x)
            }
            var bs0x = Er0x.length;
            Er0x.splice(bs0x - 2, 0, {
                key: "18",
                value: "186"
            });
            this.YE7x = Er0x;
            this.cdm3x = !!e9f.autoHide
        }
    }();
    b9i.cf0x = function() {
        this.ce0x = "ntp-portrait"
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.bL0x = j9a[0];
        this.cdl3x = j9a[1];
        this.cdk3x = j9a[2];
        this.cdj3x = j9a[3];
        h9c.s9j(this.bL0x, "click", this.zD8v.f9e(this));
        h9c.s9j(this.cdl3x, "click", this.Ev0x.f9e(this, 1));
        h9c.s9j(this.cdj3x, "click", this.Ev0x.f9e(this, 2))
    }
    ;
    b9i.bxz4D = function(r9i) {
        this.YF7y = r9i;
        var bj0x = (r9i - 1) * 50;
        var j9a = this.YE7x.slice(bj0x, Math.min(bj0x + 50, this.YE7x.length));
        this.bL0x.innerHTML = a8i.cc0x("jst-portrait", {
            plist: j9a
        }, {
            purl: l9c.bRz0x
        });
        this.cdk3x.innerText = r9i + "/" + Math.ceil(this.YE7x.length / 50)
    }
    ;
    b9i.Ev0x = function(r9i) {
        var cdi3x = Math.ceil(this.YE7x.length / 50);
        if (r9i == 1 && this.YF7y == 1 || r9i == 2 && this.YF7y == cdi3x)
            return;
        r9i == 1 ? this.bxz4D(this.YF7y - 1) : this.bxz4D(this.YF7y + 1)
    }
    ;
    b9i.zD8v = function(d9g) {
        var G0x = h9c.X0x(d9g, "d:text");
        if (!G0x)
            return;
        var d9g = {
            url: a8i.t9k(G0x, "url"),
            text: a8i.t9k(G0x, "text")
        };
        this.z9q("onselect", d9g);
        if (this.cdm3x && !d9g.stopped) {
            this.bq0x()
        }
    }
    ;
    b9i.J0x = function() {
        K0x.J0x.call(this);
        this.bxz4D(1)
    }
}
)();
(function() {
    var c9h = NEJ.P
      , h9c = c9h("nej.v")
      , k9b = c9h("nej.u")
      , dz1x = c9h("nej.p")
      , bg0x = c9h("nej.h")
      , I0x = c9h("nej.ut")
      , kw3x = /^[#?]+/
      , EP0x = /#(.*?)$/
      , zE8w = window
      , bxI4M = !history.pushState || dz1x.Ku2x.android || !history.auto;
    var YI7B = function(Y0x, bxN4R) {
        zE8w.history[!bxN4R ? "pushState" : "replaceState"](null, document.title, Y0x)
    };
    var YJ7C = function() {
        return location.parse(zE8w.location.href)
    };
    YI7B = YI7B.eL2x(function(d9g) {
        if (!bxI4M)
            return;
        var bh0x = d9g.args;
        d9g.stopped = !0;
        Y0x = bh0x[0].replace(kw3x, "");
        !bh0x[1] ? zE8w.location.hash = Y0x : zE8w.location.replace("#" + Y0x)
    });
    YJ7C = YJ7C.eL2x(function(d9g) {
        if (!bxI4M)
            return;
        d9g.stopped = !0;
        var dR1x = EP0x.test(zE8w.location.href) ? RegExp.$1 : "";
        d9g.value = location.parse(dR1x.replace(kw3x, ""))
    });
    location.redirect = function(Y0x, bxN4R) {
        YI7B(Y0x, bxN4R);
        return this
    }
    ;
    location.active = function() {
        var ej1x, Y0x, jQ3x, dd1x, QV5a;
        var bxP4T = function(hz2x) {
            if (!!dd1x) {
                dd1x = !1;
                return
            }
            var d9g = {
                oldValue: jQ3x,
                newValue: YJ7C()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h9c.z9q(location, "beforeurlchange", d9g);
                if (d9g.stopped) {
                    if (!!jQ3x) {
                        dd1x = !0;
                        YI7B(jQ3x.href, !0)
                    }
                    return
                }
            }
            Y0x = zE8w.location.href;
            jQ3x = d9g.newValue;
            h9c.z9q(location, "urlchange", jQ3x);
            bg0x.bxG4K(jQ3x.href)
        };
        var bLQ8I = function() {
            if (Y0x != zE8w.location.href)
                bxP4T();
            ej1x = requestAnimationFrame(bLQ8I)
        };
        return function(bK0x) {
            if (!!QV5a)
                return this;
            QV5a = !0;
            zE8w = bK0x || window;
            if (bxI4M && "onhashchange"in window && dz1x.nG4K.trident2) {
                h9c.s9j(zE8w, "hashchange", bxP4T);
                bxP4T()
            } else if (!ej1x) {
                ej1x = requestAnimationFrame(bLQ8I)
            }
            return this
        }
    }();
    location.parse = function() {
        var gM2x = /^https?:\/\/.*?\//i
          , kw3x = /[?#]/;
        return function(Y0x) {
            var m9d = {
                href: Y0x
            };
            Y0x = (Y0x || "").replace(gM2x, "/").split(kw3x);
            var cA0x = 1;
            if (Y0x[0] == "/" && (Y0x[1] || "").indexOf("/") == 0)
                cA0x = 2;
            m9d.path = Y0x.splice(0, cA0x).join("?");
            m9d.query = k9b.hf2x(Y0x.join("&"));
            return m9d
        }
    }();
    location.same = function(Y0x) {
        return YJ7C().href == Y0x
    }
    ;
    I0x.fK2x.A9r({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
}
)();
(function() {
    var c9h = NEJ.P
      , a8i = c9h("nej.e")
      , h9c = c9h("nej.v")
      , gC2x = c9h("nm.ut");
    gC2x.vt7m = function(ev1x) {
        var hu2x = {
            text: "",
            start: 0,
            end: 0
        };
        if (ev1x.setSelectionRange) {
            hu2x.start = ev1x.selectionStart;
            hu2x.end = ev1x.selectionEnd;
            hu2x.text = hu2x.start != hu2x.end ? ev1x.value.substring(hu2x.start, hu2x.end) : ""
        } else if (document.selection) {
            var i, YN7G = document.selection.createRange(), zG8y = document.body.createTextRange();
            zG8y.moveToElementText(ev1x);
            hu2x.text = YN7G.text;
            hu2x.bookmark = YN7G.getBookmark();
            for (i = 0; zG8y.compareEndPoints("StartToStart", YN7G) < 0 && YN7G.moveStart("character", -1) !== 0; i++) {
                if (ev1x.value.charAt(i) == "\n") {
                    i++
                }
            }
            hu2x.start = i;
            hu2x.end = hu2x.text.length + hu2x.start
        }
        return hu2x
    }
    ;
    gC2x.YP7I = function(ev1x, hu2x) {
        var zG8y;
        if (!hu2x) {
            hu2x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        ev1x.focus();
        if (ev1x.setSelectionRange) {
            ev1x.setSelectionRange(hu2x.start, hu2x.end)
        } else if (ev1x.createTextRange) {
            zG8y = ev1x.createTextRange();
            if (ev1x.value.length === hu2x.start) {
                zG8y.collapse(false);
                zG8y.select()
            } else {
                zG8y.moveToBookmark(hu2x.bookmark);
                zG8y.select()
            }
        }
    }
    ;
    gC2x.Mw2x = function(ev1x, hu2x, cL1x) {
        var hu2x = hu2x || {
            text: "",
            start: 0,
            end: 0
        };
        var byh4l, bLP8H, zG8y, Uy6s, bLO8G, bLL8D, EG0x;
        this.YP7I(ev1x, hu2x);
        if (ev1x.setSelectionRange) {
            byh4l = ev1x.value;
            bLP8H = byh4l.substring(0, hu2x.start) + cL1x + byh4l.substring(hu2x.end);
            bLO8G = bLL8D = hu2x.start + cL1x.length;
            EG0x = ev1x.scrollTop;
            ev1x.value = bLP8H;
            if (ev1x.scrollTop != EG0x) {
                ev1x.scrollTop = EG0x
            }
            ev1x.setSelectionRange(bLO8G, bLL8D)
        } else if (ev1x.createTextRange) {
            Uy6s = document.selection.createRange();
            Uy6s.text = cL1x;
            Uy6s.setEndPoint("StartToEnd", Uy6s);
            Uy6s.select()
        }
        h9c.z9q(ev1x, "keyup")
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), dz1x = c9h("nej.p"), k9b = c9h("nej.u"), cd0x = c9h("nej.ut"), x9o = c9h("nm.w"), gC2x = c9h("nm.ut"), b9i;
    x9o.bLI8A = NEJ.C();
    b9i = x9o.bLI8A.N0x(cd0x.cH1x);
    b9i.cv0x = function(e9f) {
        this.cD1x(e9f)
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.gw2x = e9f.txt;
        this.EI0x = e9f.sgtsContainer;
        this.bLH8z = e9f.sgtsList[0];
        this.YY8Q = e9f.sgtsItem;
        this.oU5Z = e9f.rangeData;
        this.MI2x = e9f.atIndex;
        a8i.w9n(this.YY8Q[0], "selected-item");
        this.EL0x()
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        h9c.mL4P(document.body, "keyup", this.bzk5p.f9e(this));
        h9c.mL4P(document.body, "click", this.bLE8w.f9e(this))
    }
    ;
    b9i.EL0x = function() {
        this.bX0x([[document.body, "keyup", this.bzk5p.f9e(this)], [document.body, "click", this.bLE8w.f9e(this)], [this.gw2x, "keydown", this.bLD8v.f9e(this)], [this.gw2x, "keypress", this.bLD8v.f9e(this)], [this.bLH8z, "click", this.bLC8u.f9e(this)], [this.bLH8z, "mouseover", this.EO0x.f9e(this)]])
    }
    ;
    b9i.EO0x = function(d9g) {
        var bQ0x = h9c.X0x(d9g);
        var p9g = a8i.E0x(this.EI0x, "selected-item");
        if (a8i.bE0x(bQ0x, "j-sgt")) {
            a8i.y9p(p9g[0], "selected-item");
            a8i.w9n(bQ0x, "selected-item")
        }
    }
    ;
    b9i.bzk5p = function(d9g) {
        var p9g = a8i.E0x(this.EI0x, "selected-item");
        var bs0x = this.YY8Q.length;
        var jW3x = d9g.keyCode || d9g.which;
        var r9i, i9b;
        switch (jW3x) {
        case 38:
            r9i = a8i.hb2x(p9g[0], "data-index") - 1 < 0 ? bs0x - 1 : a8i.hb2x(p9g[0], "data-index") - 1;
            a8i.y9p(p9g[0], "selected-item");
            a8i.w9n(this.YY8Q[r9i], "selected-item");
            break;
        case 40:
            r9i = parseInt(a8i.hb2x(p9g[0], "data-index")) + 1 >= bs0x ? 0 : parseInt(a8i.hb2x(p9g[0], "data-index")) + 1;
            a8i.y9p(p9g[0], "selected-item");
            a8i.w9n(this.YY8Q[r9i], "selected-item");
            break;
        case 13:
            this.bLC8u(d9g);
            break;
        case 27:
            this.oY5d();
            break;
        case 32:
            var bp0x = this.gw2x.value;
            var r9i = gC2x.vt7m(this.gw2x);
            if (bp0x.charAt(r9i.start - 1) !== " ")
                return;
            this.oY5d();
            break
        }
    }
    ;
    b9i.bLD8v = function(d9g) {
        var jW3x = d9g.keyCode || d9g.which;
        if (jW3x === 13 || jW3x === 38 || jW3x === 40) {
            h9c.co0x(d9g);
            d9g.keyCode = 0;
            d9g.which = 0;
            d9g.returnvalue = false
        }
    }
    ;
    b9i.bLE8w = function(d9g) {
        var bQ0x = d9g.target || d9g.srcElement;
        if (bQ0x === this.gw2x)
            return;
        this.oY5d()
    }
    ;
    b9i.bLC8u = function(d9g) {
        h9c.bf0x(d9g);
        var p9g = a8i.E0x(this.EI0x, "selected-item")[0];
        var sH6B = d9g.target || d9g.srcElement;
        var u9l = d9g.type;
        if (a8i.bE0x(sH6B, "lst"))
            return;
        if (u9l == "click") {
            a8i.y9p(p9g, "selected-item");
            a8i.w9n(sH6B, "selected-item")
        } else
            sH6B = p9g;
        var i9b = sH6B.innerHTML + " ";
        this.oY5d();
        var hu2x = this.oU5Z;
        hu2x.start = this.MI2x + 1;
        if (dz1x.ds1x.browser == "ie" && dz1x.ds1x.version < "9.0") {
            this.gw2x.value = this.gw2x.value.substring(0, hu2x.start) + this.gw2x.value.substring(hu2x.end, this.gw2x.value.length);
            hu2x.end = hu2x.start
        }
        gC2x.Mw2x(this.gw2x, hu2x, i9b);
        h9c.z9q(this.gw2x, "keyup")
    }
    ;
    b9i.oY5d = function(d9g) {
        if (!!this.EI0x)
            a8i.ba0x(this.EI0x, "display", "none");
        this.T0x()
    }
    ;
    b9i.xT8L = function(d9g) {
        if (!!this.EI0x)
            a8i.ba0x(this.EI0x, "display", "block")
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), x9o = c9h("nm.w"), cd0x = c9h("nej.ut"), bC0x = c9h("nej.ui"), b9i;
    var ccM3x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ccL3x = a8i.ey1x("m-wgt-atlist");
    var iX3x = a8i.uK7D(ccM3x);
    x9o.bLB8t = NEJ.C();
    b9i = x9o.bLB8t.N0x(bC0x.eo1x);
    b9i.cv0x = function(e9f) {
        this.gb2x = {};
        this.cD1x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.gb2x.txt = a8i.B9s(e9f.target);
        this.gb2x.data = e9f.data;
        this.gb2x.offset = e9f.offset;
        this.gb2x.rangeData = e9f.rangeData;
        this.gb2x.atIndex = e9f.atIndex;
        this.ccJ3x(e9f);
        this.bn0x(e9f);
        this.gb2x.sgtsContainer = this.o9f;
        this.gb2x.sgtsList = a8i.E0x(this.o9f, "lst");
        this.gb2x.sgtsItem = a8i.E0x(this.o9f, "f-thide");
        this.Pe4i(e9f);
        this.ccE3x = x9o.bLI8A.A9r(this.gb2x)
    }
    ;
    b9i.bB0x = function(e9f) {
        this.bG0x();
        this.ccE3x.T0x()
    }
    ;
    b9i.cf0x = function() {
        this.mt4x = iX3x
    }
    ;
    b9i.bV0x = function() {
        this.ch0x()
    }
    ;
    b9i.ccJ3x = function(e9f) {
        this.o9f = a8i.dD1x(a8i.jz3x(a8i.cc0x(ccL3x, e9f.data)))
    }
    ;
    b9i.Pe4i = function(e9f) {
        var bLy8q = a8i.E0x(this.o9f, "selected-item")[0];
        if (bLy8q)
            a8i.y9p(bLy8q, "selected-item");
        var db1x = e9f.offset.x + "px";
        var hO2x = e9f.offset.y + "px";
        a8i.ba0x(this.o9f, "left", db1x);
        a8i.ba0x(this.o9f, "top", hO2x)
    }
}
)();
(function() {
    var c9h = NEJ.P
      , v9m = c9h("nej.j")
      , gC2x = c9h("nm.ut");
    gC2x.bLw8o = function(bp0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var dh1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var MX2x = bp0x.match(dh1x) || [];
        for (var bc0x = 0; bc0x < MX2x.length; bc0x++) {
            MX2x[bc0x] = MX2x[bc0x].split("@")[1]
        }
        MX2x = MX2x.reverse();
        var hS2x = GUser.userId;
        var ccx3x = v9m.tV6P("mentioners" + hS2x) || [];
        var kh3x = MX2x.concat(ccx3x);
        if (kh3x.length > 10)
            kh3x = kh3x.slice(0, 10);
        v9m.uM7F("mentioners" + hS2x, kh3x)
    }
    ;
    gC2x.ccv3x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var hS2x = GUser.userId;
        return v9m.tV6P("mentioners" + hS2x) || []
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), dz1x = c9h("nej.p"), v9m = c9h("nej.j"), k9b = c9h("nej.u"), cd0x = c9h("nej.ut"), x9o = c9h("nm.w"), gC2x = c9h("nm.ut"), l9c = c9h("nm.x"), b9i;
    var FullscreenApi = l9c.HA1x || {};
    x9o.bLv8n = NEJ.C();
    b9i = x9o.bLv8n.N0x(cd0x.cH1x);
    b9i.cv0x = function(e9f) {
        this.cD1x(e9f);
        this.bLu8m()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.gw2x = e9f.txt;
        this.o9f = e9f.body;
        this.bLt8l = e9f.before;
        this.Sb5g = e9f.flag;
        this.cco3x = e9f.after;
        this.rh5m = [];
        if (dz1x.ds1x.browser != "ie") {
            setTimeout(function() {
                this.mk4o()
            }
            .f9e(this), 0)
        }
        this.EL0x()
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        if (this.vd7W)
            this.vd7W.T0x();
        delete this.vd7W
    }
    ;
    b9i.EL0x = function() {
        this.bX0x([[this.gw2x, "keyup", this.bLq8i.f9e(this, this.gw2x)], [this.gw2x, "click", this.bLq8i.f9e(this, this.gw2x)], [this.gw2x, "focus", this.mk4o.f9e(this)]])
    }
    ;
    b9i.mk4o = function(d9g) {
        this.oU5Z = gC2x.vt7m(this.gw2x)
    }
    ;
    b9i.bLu8m = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do1x = window.GUser.userId;
        var Y0x = "/api/user/getfollows/" + do1x;
        var gp2x = v9m.bk0x(Y0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(i9b) {
                window.GFollowers = JSON.parse(i9b).follow
            }
            .f9e(this),
            onerror: function(i9b) {},
            onbeforerequest: function(i9b) {}
        })
    }
    ;
    b9i.bLn8f = function(index) {
        var C0x = this.gw2x.value, bj0x, bgD0x, bgF0x, TR6L;
        this.bLt8l.innerHTML = k9b.dI1x(C0x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nc4g = a8i.E0x(this.bLt8l, "j-test");
        for (var bc0x = 0; bc0x < nc4g.length; bc0x++) {
            nc4g[bc0x].innerText = " "
        }
        this.Sb5g.innerHTML = C0x.charAt(index);
        this.cco3x.innerHTML = k9b.dI1x(C0x.substr(index + 1, C0x.length));
        TR6L = parseInt(a8i.di1x(this.gw2x, "lineHeight"));
        a8i.ba0x(this.o9f, "display", "block");
        bgD0x = a8i.ic3x(this.Sb5g, this.o9f);
        bgF0x = a8i.ic3x(this.gw2x);
        a8i.ba0x(this.o9f, "display", "none");
        var db1x = bgD0x.x + bgF0x.x;
        var hO2x = bgD0x.y + bgF0x.y + TR6L;
        bj0x = {
            x: db1x,
            y: hO2x
        };
        this.cch3x(bj0x)
    }
    ;
    b9i.bLq8i = function(ev1x, d9g) {
        h9c.co0x(d9g);
        var ev1x = ev1x;
        var C0x = ev1x.value;
        var bs0x = C0x.length;
        var r9i = gC2x.vt7m(ev1x).start;
        var bLm8e = 0;
        var jW3x = d9g.keyCode || d9g.which;
        var kh3x;
        this.oU5Z = gC2x.vt7m(ev1x);
        var bLl8d = false;
        for (var i = 1; i < 20; i++) {
            kh3x = r9i - i;
            if (C0x.charAt(kh3x) === " ")
                break;
            if (C0x.charAt(kh3x) === "@") {
                bLl8d = true;
                this.MI2x = bLm8e = kh3x;
                break
            }
        }
        if (bLl8d && d9g.shiftKey === false && jW3x !== 38 && jW3x !== 40) {
            if (jW3x !== 27 && jW3x !== 13) {
                this.vd7W ? this.vd7W.T0x() : null;
                this.bLn8f(bLm8e)
            }
        } else if (jW3x !== 38 && jW3x !== 40 && d9g.keyCode !== 32) {
            this.vd7W ? this.vd7W.T0x() : null
        }
    }
    ;
    b9i.cch3x = function(bj0x) {
        var bj0x = bj0x;
        var i9b = this.vc7V();
        var e9f = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bj0x,
            data: i9b,
            target: this.gw2x,
            rangeData: this.oU5Z,
            atIndex: this.MI2x
        };
        this.vd7W ? this.vd7W.T0x() : null;
        this.vd7W = x9o.bLB8t.A9r(e9f)
    }
    ;
    b9i.vc7V = function() {
        var ccb3x = gC2x.vt7m(this.gw2x).start;
        var cca3x = this.MI2x + 1;
        var bLi8a = gC2x.ccv3x() || [];
        var bLg7Z = [];
        var bv0x = this.gw2x.value.substring(cca3x, ccb3x).toLowerCase();
        bv0x = bv0x.replace(/\[/g, "\\[");
        bv0x = bv0x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.rh5m = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.rh5m = [];
        if (!this.rh5m[0])
            this.bLu8m();
        for (var bc0x = 0; bc0x < bLi8a.length; bc0x++) {
            for (var v9m = 0; v9m < this.rh5m.length; v9m++) {
                if (this.rh5m[v9m].nickname == bLi8a[bc0x])
                    bLg7Z.push(this.rh5m[v9m])
            }
        }
        this.rh5m = k9b.cuv7o(this.rh5m, bLg7Z, {
            union: true,
            begin: true
        });
        var cbQ3x = this.rh5m.length;
        var bad8V = [];
        var UY6S, UW6Q;
        if (!this.rh5m[0])
            return {
                suggests: bad8V
            };
        for (var i = 0; i < cbQ3x; i++) {
            UY6S = this.rh5m[i].nickname.toLowerCase().search(bv0x);
            UW6Q = this.rh5m[i].py ? this.rh5m[i].py.toLowerCase().search(bv0x) : -1;
            if (UY6S !== -1 || UW6Q != -1)
                bad8V.push(this.rh5m[i]);
            if (bad8V.length === 10)
                break
        }
        return {
            suggests: bad8V
        }
    }
    ;
    b9i.TD6x = function() {
        var hu2x = this.oU5Z || {
            text: "",
            start: 0,
            end: 0
        };
        h9c.z9q(this.gw2x, "focus");
        gC2x.Mw2x(this.gw2x, hu2x, "@");
        this.oU5Z = gC2x.vt7m(this.gw2x);
        this.MI2x = hu2x.start;
        this.bLn8f(this.MI2x)
    }
    ;
    b9i.Eq0x = function() {
        if (this.vd7W)
            this.vd7W.T0x()
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), x9o = c9h("nm.w"), cd0x = c9h("nej.ut"), bC0x = c9h("nej.ui"), b9i;
    var cbP3x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cbN3x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gs2x = a8i.jz3x(cbN3x);
    var iX3x = a8i.uK7D(cbP3x);
    x9o.TB6v = NEJ.C();
    b9i = x9o.TB6v.N0x(bC0x.eo1x);
    b9i.cv0x = function(e9f) {
        this.gb2x = {};
        this.cD1x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.gb2x.txt = a8i.B9s(e9f.target);
        this.VL6F();
        this.TA6u = x9o.bLv8n.A9r(this.gb2x)
    }
    ;
    b9i.bB0x = function(e9f) {
        this.bG0x();
        this.TA6u.T0x()
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = gs2x;
        this.mt4x = iX3x
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.df1x(a8i.B9s(this.o9f));
        this.gb2x.body = this.o9f;
        this.gb2x.before = j9a[0];
        this.gb2x.flag = j9a[1];
        this.gb2x.after = j9a[2]
    }
    ;
    b9i.VL6F = function() {
        var qp5u = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qp5u.length; i++) {
            if (qp5u[i] === "width" && a8i.di1x(this.gb2x.txt, qp5u[i]) == "100%") {
                var cbM3x = this.gb2x.txt.offsetWidth;
                if (!cbM3x) {
                    setTimeout(function() {
                        a8i.ba0x(this.o9f, qp5u[i], this.gb2x.txt.offsetWidth + "px")
                    }
                    .f9e(this), 300)
                } else {
                    a8i.ba0x(this.o9f, qp5u[i], this.gb2x.txt.offsetWidth + "px")
                }
                continue
            }
            a8i.ba0x(this.o9f, qp5u[i], a8i.di1x(this.gb2x.txt, qp5u[i]))
        }
    }
    ;
    b9i.TD6x = function() {
        this.TA6u.TD6x()
    }
    ;
    b9i.Eq0x = function() {
        this.TA6u.Eq0x()
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, fD2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), kX3x = c9h("nm.c"), R0x = {}, b9i;
    if (!!kX3x.bhe0x)
        return;
    kX3x.bhe0x = NEJ.C();
    b9i = kX3x.bhe0x.N0x(I0x.cH1x);
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x()
    }
    ;
    b9i.Fg0x = function(fn2x, cC1x, baw8o) {
        if (R0x[fn2x]) {
            this.gl2x("register commonJST[" + fn2x + "] duplicate");
            return
        }
        if (!k9b.gO2x(cC1x)) {
            cC1x = ctl.comJST.cbJ3x(fn2x, cC1x, baw8o)
        }
        R0x[fn2x] = cC1x
    }
    ;
    b9i.cbI3x = function(baE8w) {
        if (k9b.ec1x(baE8w)) {
            k9b.bd0x(baE8w, function(p9g) {
                ctl.comJST.Fg0x.apply(this, p9g)
            }, this)
        } else if (k9b.lY4c(baE8w)) {
            k9b.eH1x(baE8w, function(fA2x, L0x) {
                ctl.comJST.Fg0x(L0x, fA2x)
            })
        }
    }
    ;
    b9i.cbJ3x = function(fn2x, uV7O, baw8o) {
        uV7O = uV7O || {};
        NEJ.X(uV7O, {
            comJST: this.nO4S
        });
        if (uV7O.resetDataName && !k9b.ec1x(uV7O.resetDataName)) {
            uV7O.resetDataName = [uV7O.resetDataName]
        }
        return function() {
            var i9b = arguments[0]
              , jV3x = arguments[1];
            if (uV7O.resetDataName) {
                var kh3x = {};
                for (var i = 0, ii = uV7O.resetDataName.length; i < ii; i++) {
                    kh3x[uV7O.resetDataName[i]] = arguments[i]
                }
                i9b = kh3x;
                jV3x = arguments[ii]
            }
            NEJ.X(i9b, uV7O, ed1x);
            if (baw8o) {
                jV3x = jV3x || {};
                NEJ.X(jV3x, baw8o)
            }
            return a8i.cc0x(fn2x, i9b, jV3x)
        }
    }
    ;
    b9i.nO4S = function(fn2x) {
        if (!R0x[fn2x]) {
            this.gl2x("commonJST[" + fn2x + "] is unregister");
            return ""
        } else {
            return R0x[fn2x].apply(null, fD2x.slice.call(arguments, 1))
        }
    }
    ;
    b9i.dump = function() {
        return R0x
    }
    ;
    b9i.gl2x = function(cbG3x) {
        if (console && console.log) {
            console.log(cbG3x)
        }
    }
    ;
    var ed1x = function(fA2x, L0x) {
        return L0x == "resetDataName"
    };
    c9h("ctl").comJST = kX3x.bhe0x.fR2x();
    a8i.cDQ9H({
        comJST: c9h("ctl").comJST.nO4S
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, fD2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), kX3x = c9h("nm.c"), l9c = c9h("nm.x"), R0x = {}, b9i;
    if (!!kX3x.bho0x)
        return;
    kX3x.bho0x = NEJ.C();
    b9i = kX3x.bho0x.N0x(I0x.cH1x);
    b9i.cv0x = function() {
        this.cD1x();
        var e9f = {
            "com-mv-artists": function(gh2x, eg1x, Tg6a, bhq0x) {
                return a8i.cc0x("com-mv-artists", {
                    artists: gh2x,
                    clazz: eg1x,
                    boxClazz: bhq0x,
                    mark: Tg6a || function(cQ1x) {
                        return cQ1x
                    }
                    ,
                    escape: k9b.dI1x,
                    comJST: ctl.comJST.nO4S
                })
            },
            "com-album-artists": function(gh2x, eg1x, Tg6a, bhq0x) {
                return a8i.cc0x("com-album-artists", {
                    artists: gh2x,
                    clazz: eg1x,
                    boxClazz: bhq0x,
                    mark: Tg6a || function(cQ1x) {
                        return cQ1x
                    }
                    ,
                    escape: k9b.dI1x,
                    comJST: ctl.comJST.nO4S
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k9b.dI1x
            },
            "com-user-type": function(dp1x, eg1x, lK4O, xF8x, bLe7X) {
                return a8i.cc0x("com-user-type", {
                    x: dp1x,
                    clazz: eg1x || "",
                    clazz2: typeof bLe7X == "undefined" ? "icn" : bLe7X,
                    before: lK4O || "",
                    after: xF8x || "",
                    isEmptyObject: l9c.bRm0x
                })
            }
        };
        for (var D0x in e9f) {
            ctl.comJST.Fg0x(D0x, e9f[D0x])
        }
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x()
    }
    ;
    c9h("ctl").comJSTUtil = kX3x.bho0x.fR2x()
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), dz1x = c9h("nej.p"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), v9m = c9h("nej.j"), x9o = c9h("nm.w"), gC2x = c9h("nm.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), bhs0x = [2, 3], ef1x = ["sn", "db"], b9i, K0x, cbw2x = {
        13: "playlist",
        17: "djprogram",
        18: "song",
        19: "album",
        20: "artist",
        21: "mv",
        24: "topic",
        25: "activity",
        70: "djradio",
        38: "concert",
        39: "video",
        41: "cloudvideo"
    }, baU9L = {
        djprogram: "节目",
        album: "专辑",
        playlist: "歌单",
        song: "单曲",
        yunsong: "单曲",
        artist: "歌手",
        mv: "MV",
        topic: "音乐专栏",
        djradio: "电台",
        concert: "演出",
        video: "视频",
        cloudvideo: "视频"
    }, bLa7T = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by ",
        cloudvideo: " by "
    }, cbt2x = {
        0: 13,
        1: 17,
        3: 19,
        4: 18,
        5: 21,
        6: 24,
        14: 70,
        17: 20
    }, Fp0x = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    }, FullscreenApi = l9c.HA1x || {};
    n9e.pk5p = NEJ.C();
    b9i = n9e.pk5p.N0x(n9e.el1x);
    K0x = n9e.pk5p.cr0x;
    b9i.bm0x = function(e9f) {
        if (e9f.onclose === undefined) {
            e9f.onclose = this.bKR7K.f9e(this)
        }
        this.bn0x(e9f);
        this.zV9M = e9f.isPub;
        this.jn3x = e9f.rid || -1;
        this.eC1x = e9f.type || -1;
        this.bhM0x = e9f.purl;
        this.SX6R = e9f.name || "";
        this.SS6M = e9f.author || "";
        this.bhS0x = e9f.authors || "";
        this.baZ9Q = e9f.actId;
        this.bbn9e = e9f.actName;
        this.bKP7I = e9f.title;
        this.bbo9f = {};
        this.cbd2x = e9f.mesg || "";
        this.cba2x = e9f.placeholder || "说点什么吧";
        this.bic0x = e9f.hideTip;
        this.caY2x = e9f.videoJumpUrl;
        var j9a, fb2x = +(new Date);
        try {
            j9a = top.localCache.B9s("user") || {}
        } catch (e) {
            j9a = {}
        }
        for (var i = 0, j9a = j9a.bindings || [], cs0x; i < j9a.length; ++i) {
            cs0x = !j9a[i].tokenJsonStr ? null : JSON.parse(j9a[i].tokenJsonStr);
            if (!cs0x || cs0x.expires_in === undefined)
                continue;
            var bbq9h = parseInt(cs0x.expires_in)
              , bbu9l = parseInt(j9a[i].refreshTime)
              , caQ2x = (bbq9h + bbu9l) * 1e3 - 5 * 60 * 1e3;
            if (caQ2x > fb2x)
                this.bbo9f[j9a[i].type] = !0
        }
        this.xN8F = x9o.In1x.A9r({
            parent: this.bbw9n,
            err: this.bKF7y
        });
        if (this.hK2x) {
            this.hK2x.T0x()
        }
        this.hK2x = x9o.TB6v.A9r({
            parent: document.body,
            target: this.eB1x
        });
        if (this.eC1x == 24 || this.eC1x == 21 || this.eC1x == 41 || this.FB0x()) {
            this.Aa9R.style.display = "none"
        } else {
            this.Aa9R.style.display = "";
            this.pp5u = x9o.bow2x.A9r({
                parent: this.biq0x,
                button: this.Aa9R,
                onstartupload: this.bKE7x.f9e(this, true),
                onfinishupload: this.bKE7x.f9e(this, false)
            })
        }
        if (this.FB0x()) {
            this.qE5J.innerText = "";
            a8i.w9n(this.qE5J, "info-video");
            a8i.w9n(this.biw0x, "f-hide")
        } else {
            a8i.y9p(this.biw0x, "f-hide")
        }
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        if (this.xN8F) {
            this.xN8F.T0x();
            delete this.xN8F
        }
        if (this.hK2x) {
            this.hK2x.T0x();
            delete this.hK2x
        }
        if (this.pp5u) {
            this.pp5u.T0x();
            delete this.pp5u
        }
        if (this.nf4j) {
            this.nf4j.T0x();
            delete this.nf4j
        }
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "m-wgt-sharewin"
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        this.bKD7w = a8i.df1x(this.o9f)[0];
        var bu0x = a8i.E0x(this.o9f, "j-flag");
        this.rg5l = bu0x.shift();
        this.bKF7y = bu0x.shift();
        this.bbw9n = bu0x.shift();
        this.eB1x = bu0x.shift();
        this.qE5J = bu0x.shift();
        this.biE1x = bu0x.shift();
        this.caI2x = bu0x.shift();
        this.Aa9R = bu0x.shift();
        this.cM1x = bu0x.shift();
        this.biq0x = bu0x.shift();
        this.Ck9b = bu0x.shift();
        this.cJR1x = bu0x.shift();
        this.biw0x = bu0x.shift();
        this.em1x = bu0x.shift();
        this.bbN9E = a8i.E0x(this.biw0x, "j-t");
        this.DT0x = I0x.Gm0x.A9r({
            list: a8i.df1x(this.rg5l),
            selected: "z-slt",
            onchange: this.biL1x.f9e(this)
        });
        if (dz1x.ds1x.browser == "ie" && dz1x.ds1x.version < "8.0") {
            a8i.ba0x(this.bbw9n, "position", "relative");
            a8i.ba0x(this.bbw9n, "zIndex", "10")
        }
        h9c.s9j(window, "snsbind", this.Sm5r.f9e(this));
        h9c.s9j(this.eB1x, "input", this.eQ2x.f9e(this));
        h9c.s9j(this.eB1x, "keyup", this.vb7U.f9e(this));
        h9c.s9j(this.o9f, "click", this.cJ1x.f9e(this));
        this.S0x = q9h.blh1x.A9r();
        this.S0x.s9j("onshareall", this.bbR9I.f9e(this, 0));
        this.S0x.s9j("onshareerror", this.jf3x.f9e(this));
        this.S0x.s9j("onshareprivate", this.bbR9I.f9e(this, 1));
        this.bbU9L = q9h.yz8r.A9r();
        this.gl2x = q9h.hP2x.A9r();
        try {
            this.Sj5o = top.api.sharePermission
        } catch (e) {}
        if (!this.Sj5o) {
            this.Sj5o = Fp0x;
            v9m.bk0x("/api/event/user/permission", {
                type: "json",
                onload: function(d9g) {
                    if (d9g.code == 200) {
                        this.Sj5o = NEJ.EX(Fp0x, d9g)
                    }
                }
                .f9e(this)
            })
        }
        l9c.lu4y()
    }
    ;
    b9i.biL1x = function(d9g) {
        d9g.index == 0 ? a8i.y9p(this.bKD7w, "m-plshare") : a8i.w9n(this.bKD7w, "m-plshare");
        this.bbw9n.style.display = d9g.index == 0 ? "none" : "";
        this.caI2x.style.display = d9g.index == 0 ? "" : "none";
        this.Aa9R.style.display = d9g.index == 0 ? "" : "none";
        if (this.eC1x == 24 || this.eC1x == 21) {
            this.Aa9R.style.display = "none"
        }
        this.bKF7y.style.display = "none";
        this.eB1x.value = "";
        this.ca0x();
        this.FL0x();
        if (d9g.index == 0) {
            var cG1x = a8i.di1x(this.eB1x, "width");
            if (cG1x == "auto" || !cG1x) {
                return
            } else {
                if (this.hK2x) {
                    this.hK2x.T0x()
                }
                this.hK2x = x9o.TB6v.A9r({
                    parent: document.body,
                    target: this.eB1x
                })
            }
            this.biq0x.style.display = ""
        } else {
            if (this.hK2x) {
                this.hK2x.T0x();
                delete this.hK2x
            }
            this.biq0x.style.display = "none"
        }
    }
    ;
    b9i.cJ1x = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:action");
        if (!g9d)
            return;
        if (a8i.t9k(g9d, "action") == "search") {
            h9c.co0x(d9g)
        } else if (a8i.t9k(g9d, "default") === undefined) {
            h9c.co0x(d9g)
        }
        switch (a8i.t9k(g9d, "action")) {
        case "txt":
            this.mk4o();
            break;
        case "search":
            if (this.FB0x()) {
                top.location.href = this.caY2x
            } else if (this.zV9M && this.eC1x != 24) {
                if (this.nf4j) {
                    this.nf4j.T0x()
                }
                this.nf4j = x9o.btO3x.A9r({
                    parent: this.o9f.parentNode,
                    onfinish: this.biT1x.f9e(this),
                    oncancel: this.caF2x.f9e(this)
                });
                this.biV1x = true;
                this.o9f.style.display = "none";
                this.FN0x(this.jn3x < 0 ? "添加音乐" : "更换音乐")
            }
            break;
        case "at":
            h9c.tH6B(d9g);
            !!this.hx2x && this.hx2x.bq0x();
            this.hK2x.TD6x();
            this.gt2x();
            break;
        case "emot":
            h9c.tH6B(d9g);
            !!this.hK2x && this.hK2x.Eq0x();
            if (!this.hx2x) {
                this.hx2x = n9e.LP2x.A9r({
                    parent: this.biE1x
                });
                this.hx2x.s9j("onselect", this.zD8v.f9e(this))
            }
            this.hx2x.J0x();
            break;
        case "upload":
            break;
        case "sns":
            h9c.bf0x(d9g);
            var bjc1x, bv0x, u9l = a8i.t9k(g9d, "type");
            if (!this.bbo9f[u9l]) {
                bjc1x = g9d.href.split("?");
                bv0x = k9b.hf2x(bjc1x[1]);
                bv0x["csrf_token"] = v9m.gI2x("__csrf");
                top.open(bjc1x[0] + "?" + k9b.cz0x(bv0x));
                return
            }
            var bz0x = {
                2: "sn",
                3: "db",
                4: "rr"
            };
            l9c.Dr0x(g9d, "u-slg-" + bz0x[u9l] + "-gray");
            break;
        case "close":
            !!this.hx2x && this.hx2x.bq0x();
            this.bKR7K();
            break;
        case "share":
            h9c.bf0x(d9g);
            if (this.FB0x()) {
                if (!a8i.bE0x(g9d, "u-btn2-2-dis")) {
                    this.caE2x()
                }
            } else if (a8i.bE0x(g9d, "u-btn2-2-dis")) {
                if (!this.Sj5o.pubEventWithoutResource && this.jn3x < 0) {
                    this.caD2x()
                } else {}
            } else if (this.jn3x < 0 && !this.eB1x.value && this.pp5u && this.pp5u.Wf7Y().length == 0) {
                n9e.Z0x.J0x({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.caw2x()
            }
            break
        }
    }
    ;
    b9i.caD2x = function() {
        var uF7y = 0, bjj1x = function() {
            if (uF7y % 2) {
                a8i.y9p(this.qE5J, "z-show")
            } else {
                a8i.w9n(this.qE5J, "z-show")
            }
            uF7y++;
            if (uF7y > 5) {
                clearInterval(ej1x)
            }
        }, ej1x;
        return function() {
            uF7y = 0;
            clearInterval(ej1x);
            ej1x = setInterval(bjj1x.f9e(this), 200)
        }
    }();
    b9i.Sm5r = function(m9d) {
        m9d = m9d.result;
        this.bbo9f[m9d.type] = !0;
        var r9i = k9b.dm1x(bhs0x, m9d.type)
          , cj0x = "u-slg-" + ef1x[r9i] + "-gray";
        a8i.y9p(this.bbN9E[r9i], cj0x)
    }
    ;
    b9i.biT1x = function(bx0x) {
        var i9b = bx0x.data;
        this.jn3x = bx0x.id;
        this.eC1x = bx0x.type;
        this.o9f.style.display = "";
        this.FN0x(this.bKP7I);
        this.nf4j && this.nf4j.T0x();
        this.biV1x = false;
        this.bhM0x = i9b.picUrl;
        this.SX6R = i9b.title || "";
        this.SS6M = i9b.author || "";
        this.bhS0x = i9b.authors || "";
        this.cav2x();
        this.bcd9U()
    }
    ;
    b9i.caF2x = function() {
        this.nf4j && this.nf4j.T0x();
        this.o9f.style.display = "";
        this.FN0x(this.bKP7I);
        this.biV1x = false;
        this.bcd9U()
    }
    ;
    b9i.zD8v = function(d9g) {
        var bp0x = "[" + d9g.text + "]";
        gC2x.Mw2x(this.eB1x, this.oU5Z, bp0x);
        this.gt2x()
    }
    ;
    b9i.eQ2x = function(d9g) {
        dz1x.ds1x.browser == "ie" && dz1x.ds1x.version < "7.0" ? setTimeout(this.gt2x.f9e(this), 0) : this.gt2x()
    }
    ;
    b9i.vb7U = function(d9g) {
        this.mk4o();
        if (d9g.keyCode == 8)
            this.gt2x()
    }
    ;
    b9i.gt2x = function() {
        this.mk4o();
        this.FL0x()
    }
    ;
    b9i.FL0x = function() {
        var bs0x = Math.ceil(k9b.fN2x(this.eB1x.value.trim()) / 2);
        this.cM1x.innerText = 140 - bs0x;
        bs0x > 140 ? a8i.fo2x(this.cM1x, "s-fc4", "s-fc6") : a8i.fo2x(this.cM1x, "s-fc6", "s-fc4")
    }
    ;
    b9i.caw2x = function() {
        if (this.cR1x())
            return;
        if (k9b.fN2x(this.eB1x.value.trim()) > 280) {
            this.ca0x("字数超过140个字符");
            return
        }
        l9c.nb4f(this.cau2x.f9e(this))
    }
    ;
    b9i.cau2x = function(cs0x) {
        var u9l = this.DT0x.tR6L(), i9b;
        if (u9l == 0) {
            for (var i = 0, JL1x = []; i < this.bbN9E.length; ++i) {
                if (!a8i.bE0x(this.bbN9E[i], "u-slg-" + ef1x[i] + "-gray"))
                    JL1x.push(bhs0x[i])
            }
            this.cR1x(!0);
            i9b = {
                id: this.jn3x,
                msg: this.eB1x.value.trim(),
                type: this.bcf9W(this.eC1x),
                picUrl: this.bhM0x,
                snsTypes: JL1x.join(","),
                isPub: this.zV9M,
                checkToken: cs0x || ""
            };
            if (this.baZ9Q > 0) {
                i9b.actId = this.baZ9Q;
                if (this.bbn9e) {
                    i9b.msg = "#" + this.bbn9e + "#" + i9b.msg
                }
            }
            var nZ4d = this.pp5u && this.pp5u.Wf7Y();
            if (nZ4d && nZ4d.length) {
                i9b.pics = nZ4d
            }
            this.S0x.chw4A(i9b)
        } else {
            var ud6X = this.xN8F.Vi6c();
            if (ud6X.length <= 0) {
                this.ca0x("请至少选择一位好友");
                return
            }
            this.S0x.chv4z({
                data: {
                    id: this.jn3x,
                    msg: this.eB1x.value.trim(),
                    type: this.bcf9W(this.eC1x == 41 ? 39 : this.eC1x),
                    userIds: "[" + ud6X.join(",") + "]",
                    checkToken: cs0x || ""
                }
            })
        }
    }
    ;
    b9i.caE2x = function() {
        if (this.cR1x()) {
            return
        }
        this.gl2x.eR2x("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k9b.fN2x(this.eB1x.value.trim()) > 280) {
            this.ca0x("字数超过140个字符");
            return
        }
        l9c.nb4f(this.caq2x.bind(this))
    }
    ;
    b9i.caq2x = function(cs0x) {
        this.cR1x(!0);
        var i9b = {
            msg: this.eB1x.value.trim() || "",
            type: "video",
            checkToken: cs0x || ""
        }
          , cap2x = {
            videoId: this.jn3x
        };
        if (this.baZ9Q > 0) {
            i9b.actId = this.baZ9Q;
            if (this.bbn9e) {
                i9b.msg = "#" + this.bbn9e + "#" + i9b.msg
            }
        }
        i9b.videoinfo = JSON.stringify(cap2x);
        this.S0x.chu4y({
            data: {
                videoId: this.jn3x,
                commit: true
            },
            data2: i9b,
            snsTypes: ""
        })
    }
    ;
    b9i.bbR9I = function(u9l, m9d) {
        this.cR1x(!1);
        this.bq0x();
        if (!this.bic0x) {
            if (this.FB0x()) {
                n9e.Z0x.J0x({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n9e.Z0x.J0x({
                    tip: "分享成功" + (m9d.point > 0 ? ' 获得<em class="s-fc6">' + m9d.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h9c.z9q(n9e.pk5p, "sharesuccess", {
            isPrivate: u9l,
            rid: this.jn3x,
            rtype: this.eC1x,
            data: m9d.event
        });
        this.z9q("onshare")
    }
    ;
    b9i.jf3x = function(m9d) {
        this.cR1x(!1);
        var bF0x = "分享失败";
        if (m9d.code) {
            switch (m9d.code) {
            case 250:
                bF0x = m9d.message || m9d.msg || (this.zV9M ? "发布异常" : "分享异常");
                break;
            case 404:
                bF0x = "分享的资源不存在";
                break;
            case 407:
                bF0x = "输入内容包含有关键字";
                break;
            case 408:
                bF0x = "分享太快了，过会再分享吧";
                break;
            case 315:
                bF0x = m9d.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l9c.eN2x({
                    clazz: "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.ca0x(bF0x)
    }
    ;
    b9i.mk4o = function() {
        this.oU5Z = gC2x.vt7m(this.eB1x)
    }
    ;
    b9i.ca0x = function(bF0x) {
        this.ea1x(this.em1x, bF0x)
    }
    ;
    b9i.cR1x = function(dd1x) {
        return this.dY1x(this.Ck9b, dd1x, "分享", "分享中...")
    }
    ;
    b9i.bcf9W = function(iq3x) {
        return cbw2x[iq3x] || ""
    }
    ;
    b9i.caj2x = function() {
        var ev1x, wn7g = this.bcf9W(this.eC1x);
        this.qE5J.style.display = "";
        if (this.jn3x < 0) {
            this.qE5J.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.SX6R) {
                this.qE5J.style.display = "none";
                return
            }
            var bcj9a = this.zV9M && this.eC1x != 24;
            ev1x = (baU9L[wn7g] ? baU9L[wn7g] + "：" : "") + this.SX6R + (bLa7T[wn7g] || " ") + (wn7g == "mv" || wn7g == "album" ? this.bhS0x || this.SS6M : this.SS6M);
            a8i.dA1x(this.qE5J, "m-xwgt-share-infobar", {
                canChange: bcj9a,
                info: ev1x
            });
            if (bcj9a) {
                a8i.y9p(this.qE5J, "z-dis")
            } else {
                a8i.w9n(this.qE5J, "z-dis")
            }
        }
        a8i.y9p(this.qE5J, "info-video")
    }
    ;
    b9i.cav2x = function() {
        var wn7g = this.bcf9W(this.eC1x)
          , ev1x = (baU9L[wn7g] ? baU9L[wn7g] + "：" : "") + this.SX6R + (bLa7T[wn7g] || " ") + (wn7g == "mv" || wn7g == "album" ? this.bhS0x || this.SS6M : this.SS6M);
        bcj9a = this.zV9M && this.eC1x != 24;
        if (this.FB0x()) {} else {
            a8i.y9p(this.qE5J, "info-video");
            a8i.dA1x(this.qE5J, "m-xwgt-share-infobar", {
                canChange: bcj9a,
                isPub: this.zV9M,
                info: ev1x
            })
        }
    }
    ;
    b9i.cai2x = function() {
        var JU1x = this.eB1x.value;
        if (this.zV9M) {
            if (!!this.biV1x) {
                return !!JU1x && !!JU1x.length || !!this.pp5u && this.pp5u.Wf7Y().length > 0
            } else {
                return !(this.jn3x < 0) || !!JU1x && !!JU1x.length || !!this.pp5u && this.pp5u.Wf7Y().length > 0
            }
        } else {
            return !!JU1x && !!JU1x.length || !!this.pp5u && this.pp5u.Wf7Y().length > 0
        }
    }
    ;
    b9i.bcd9U = function() {
        var bKv7o = false;
        if (!this.zV9M || this.Sj5o.pubEventWithoutResource || !(this.jn3x < 0)) {
            bKv7o = true
        }
        if (bKv7o) {
            a8i.y9p(this.Ck9b, "u-btn2-2-dis")
        } else {
            a8i.w9n(this.Ck9b, "u-btn2-2-dis")
        }
    }
    ;
    b9i.bKE7x = function(bjB1x) {
        if (bjB1x) {
            a8i.w9n(this.Ck9b, "u-btn2-2-dis")
        } else {
            this.bcd9U()
        }
    }
    ;
    b9i.bKR7K = function(d9g) {
        if (d9g) {
            d9g.stopped = true
        }
        if (this.cai2x()) {
            l9c.hC2x({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(U0x) {
                    if (U0x == "ok") {
                        this.z9q("forceclose", {});
                        this.bq0x();
                        h9c.z9q(n9e.pk5p, "shareclose", {})
                    }
                }
                .f9e(this)
            })
        } else {
            this.z9q("forceclose", {});
            this.bq0x();
            h9c.z9q(n9e.pk5p, "shareclose", {})
        }
    }
    ;
    b9i.FN0x = function(es1x, dU1x) {
        this.pl5q.DK0x(es1x, dU1x)
    }
    ;
    b9i.bcm9d = function(u9l) {
        this.gl2x.eR2x("page", {
            type: u9l
        })
    }
    ;
    b9i.FB0x = function() {
        return this.eC1x == 39
    }
    ;
    b9i.J0x = function() {
        var cad2x = function(p9g, r9i) {
            var cj0x = "u-slg-" + ef1x[r9i] + "-gray";
            !this.bbo9f[bhs0x[r9i]] ? a8i.w9n(p9g, cj0x) : a8i.y9p(p9g, cj0x)
        };
        return function() {
            K0x.J0x.call(this);
            this.o9f.style.display = "";
            this.ca0x();
            this.cR1x(!1);
            this.DT0x.Wr7k(0);
            this.eB1x.focus();
            this.eB1x.value = this.cbd2x || "";
            this.eB1x.placeholder = this.cba2x || "";
            if (!this.FB0x()) {
                this.caj2x()
            } else {
                a8i.w9n(this.qE5J, "info-video");
                a8i.dA1x(this.qE5J, "m-xwgt-share-videobar", {
                    title: this.SX6R,
                    picUrl: this.bhM0x
                })
            }
            this.gt2x();
            this.xN8F.cdy3x();
            k9b.bd0x(this.bbN9E, cad2x, this);
            this.mk4o();
            if (this.zV9M) {
                this.rg5l.style.display = "none"
            } else {
                this.rg5l.style.display = ""
            }
            this.bcd9U()
        }
    }();
    b9i.bq0x = function(d9g) {
        K0x.bq0x.call(this);
        !!this.hx2x && this.hx2x.bq0x();
        if (this.xN8F) {
            this.xN8F.T0x();
            delete this.xN8F
        }
        if (this.hK2x) {
            this.hK2x.T0x();
            delete this.hK2x
        }
        if (this.pp5u) {
            this.pp5u.T0x();
            delete this.pp5u
        }
        if (this.bKq7j) {
            this.bKq7j = this.bKq7j.T0x()
        }
        if (this.nf4j) {
            this.nf4j.T0x();
            delete this.nf4j
        }
    }
    ;
    l9c.kR3x = function(e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e9f.title === undefined) {
            e9f.title = "分享"
        }
        if (e9f.actId && e9f.type != 39) {
            var u9l = cbt2x[e9f.resourceType], bW0x = e9f.resourceJson, ik3x;
            if (k9b.fJ2x(bW0x)) {
                try {
                    bW0x = JSON.parse(bW0x)
                } catch (e) {}
            }
            if (u9l) {
                ik3x = l9c.bRh0x(u9l, bW0x);
                e9f.name = ik3x.title;
                e9f.author = ik3x.author;
                e9f.picUrl = ik3x.picUrl;
                e9f.type = u9l;
                e9f.rid = (bW0x || []).id
            }
        }
        n9e.pk5p.J0x(e9f)
    }
    ;
    I0x.fK2x.A9r({
        element: n9e.pk5p,
        event: ["sharesuccess", "shareclose"]
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), bC0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, K0x;
    n9e.bcp9g = NEJ.C();
    b9i = n9e.bcp9g.N0x(n9e.el1x);
    K0x = n9e.bcp9g.cr0x;
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        h9c.s9j(j9a[0], "click", this.HG1x.f9e(this))
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "m-import-ok"
    }
    ;
    b9i.bm0x = function(e9f) {
        e9f.parent = e9f.parent || document.body;
        e9f.title = "歌曲同步完成";
        this.bn0x(e9f)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x()
    }
    ;
    b9i.HG1x = function(d9g) {
        this.bq0x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    }
    ;
    b9i.Dt0x = function() {
        this.bq0x()
    }
    ;
    b9i.bNW8O = function(d9g) {
        if (d9g.keyCode == 13)
            this.Go0x()
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), O0x = c9h("nej.p"), k9b = c9h("nej.u"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), bC0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, K0x;
    n9e.bKl7e = NEJ.C();
    b9i = n9e.bKl7e.N0x(n9e.el1x);
    b9i.cf0x = function() {
        this.ce0x = "m-programtips-layer"
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        this.bU0x = a8i.E0x(this.o9f, "j-flag")
    }
    ;
    b9i.bm0x = function(e9f) {
        if (e9f.inner) {
            var innerNode = a8i.E0x(this.o9f, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e9f.inner
            }
        }
        e9f.clazz = " m-layer-programtips " + (e9f.clazz || "");
        e9f.parent = e9f.parent || document.body;
        e9f.title = e9f.title || "付费内容提示";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bn0x(e9f);
        this.he2x = e9f.id;
        this.bZO2x = e9f.radiotype;
        this.kT3x = location.protocol + "//" + (this.bjJ1x() || "music.163.com") + "/m/" + this.bZO2x + "?id=" + this.he2x;
        this.kT3x = e9f.url || this.kT3x;
        this.bZN2x()
    }
    ;
    b9i.bB0x = function() {
        this.bG0x()
    }
    ;
    b9i.Dt0x = function() {
        this.bq0x()
    }
    ;
    b9i.HG1x = function(d9g) {
        this.z9q("onok", C0x);
        this.bq0x()
    }
    ;
    l9c.bjL1x = function(e9f) {
        n9e.bKl7e.A9r(e9f).J0x()
    }
    ;
    b9i.bZN2x = function() {
        v9m.bk0x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k9b.cz0x({
                url: this.kT3x,
                size: 180
            }),
            onload: function(i9b) {
                if (i9b.code == 200) {
                    this.bZM2x(i9b.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }
            .f9e(this)
        })
    }
    ;
    b9i.bjJ1x = function() {
        var Py4C = location.host;
        if (Py4C.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    }
    ;
    b9i.bZM2x = function(ki3x) {
        this.bU0x[0].style.backgroundImage = "url(" + ki3x + ")"
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), dz1x = c9h("nej.p"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), F0x = c9h("nm.m"), n9e = c9h("nm.l"), M0x = c9h("nm.m.f"), b9i, K0x;
    F0x.dj1x = NEJ.C();
    b9i = F0x.dj1x.N0x(I0x.dq1x);
    b9i.bJ0x = function() {
        var qM5R = !1;
        return function() {
            if (qM5R)
                return;
            qM5R = !0;
            this.bR0x();
            if (top == self) {
                return
            }
            this.uz7s = a8i.B9s("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bKk7d()
            }
            I0x.fK2x.A9r({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX0x([[window, "scroll", this.CA9r.f9e(this)], [document, "keyup", this.bZI2x.f9e(this)], [document.body, "click", this.ts6m.f9e(this)], [document, "mouseup", this.bZG2x.f9e(this)], [this.uz7s, "click", this.RS5X.f9e(this)], [q9h.tv6p, "message", this.vN7G.f9e(this)]]);
            l9c.chQ4U(document.body);
            this.CA9r();
            if (this.CC9t !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                q9h.tv6p.fR2x().vu7n();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dz1x.ds1x.browser == "ie" && parseInt(dz1x.ds1x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hs2x = top.player.getPlaying();
                    if (hs2x && hs2x.track && hs2x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hs2x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.Aj9a.f9e(this);
            this.kK3x = q9h.hP2x.A9r();
            window.log = this.ht2x.f9e(this);
            var ti6c = location.search;
            if (ti6c) {
                var bv0x = ti6c.substr(ti6c.indexOf("?") + 1)
                  , gE2x = k9b.hf2x(bv0x);
                if (gE2x && gE2x["_hash"])
                    location.hash = gE2x["_hash"]
            }
        }
    }();
    b9i.bZI2x = function(d9g) {
        var g9d = h9c.X0x(d9g);
        try {
            if (d9g.keyCode == 80 && l9c.bRn0x() || ["textarea", "input"].indexOf(g9d.tagName.toLowerCase()) >= 0)
                return;
            h9c.z9q(top.document, "keyup", {
                ctrlKey: d9g.ctrlKey,
                keyCode: d9g.keyCode
            })
        } catch (e) {}
    }
    ;
    b9i.ts6m = function(d9g) {
        var g9d = h9c.X0x(d9g);
        if (g9d && g9d.tagName == "INPUT")
            return;
        var g9d = h9c.X0x(d9g, "d:pid");
        if (g9d) {
            h9c.co0x(d9g);
            var oE4I = a8i.t9k(g9d, "pid")
              , CF9w = a8i.t9k(g9d, "ptype")
              , U0x = a8i.t9k(g9d, "action") || "play";
            switch (U0x) {
            case "subscribe":
                l9c.nT4X({
                    tracks: [oE4I]
                });
                break
            }
        }
        g9d = h9c.X0x(d9g, "d:resAction");
        if (g9d && g9d.className.indexOf("-dis") == -1) {
            var cV1x = a8i.t9k(g9d, "resId")
              , u9l = a8i.t9k(g9d, "resType")
              , bkb1x = a8i.t9k(g9d, "resRadiotype")
              , bkc1x = a8i.t9k(g9d, "resRadioid")
              , ei1x = a8i.t9k(g9d, "resFrom")
              , i9b = a8i.t9k(g9d, "resData")
              , U0x = a8i.t9k(g9d, "resAction")
              , buB4F = a8i.t9k(g9d, "resCopyright")
              , bcB9s = a8i.t9k(g9d, "resAuditstatus");
            if (U0x != "log" && U0x != "bilog")
                h9c.co0x(d9g);
            switch (U0x) {
            case "log":
                i9b = (i9b || "").split("|");
                if (!!i9b[0]) {
                    var bi0x = {
                        id: cV1x,
                        alg: i9b[2] || "itembased",
                        scene: i9b[3],
                        position: i9b[1] || 0
                    };
                    if (!!i9b[4])
                        bi0x.srcid = i9b[4];
                    window.log(i9b[0], bi0x)
                }
                break;
            case "bilog":
                var buy3x = a8i.t9k(g9d, "logAction")
                  , buC4G = a8i.t9k(g9d, "logJson");
                window.log(buy3x, buC4G);
                break;
            case "share":
                if (bcB9s && bcB9s == 1) {
                    l9c.iE3x("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cV1x, u9l, a8i.t9k(g9d, "resPic"), a8i.t9k(g9d, "resName"), a8i.t9k(g9d, "resAuthor"), a8i.t9k(g9d, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (u9l == 18) {
                    var rM5R = a8i.t9k(g9d, "resLevel")
                      , nW4a = a8i.t9k(g9d, "resFee");
                    if (rM5R == 10) {
                        l9c.wc7V(nW4a, cV1x, "song");
                        break
                    }
                    l9c.nT4X({
                        tracks: [cV1x]
                    })
                }
                break;
            case "download":
                l9c.Md2x({
                    id: cV1x,
                    type: u9l
                });
                break;
            case "programtips":
                if (bcB9s && bcB9s == 1) {
                    l9c.iE3x("由于版权问题，该节目暂时无法分享。")
                } else {
                    l9c.bjL1x({
                        id: bkc1x,
                        radiotype: bkb1x
                    })
                }
                break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(d9g)
        } catch (e) {}
    }
    ;
    b9i.bZG2x = function(d9g) {
        try {
            h9c.z9q(top.document, "mouseup")
        } catch (e) {}
    }
    ;
    b9i.CA9r = function() {
        var bZF2x = function() {
            var cg0x = window.innerHeight;
            if (!k9b.tg6a(cg0x))
                cg0x = (document.documentElement || document.body).clientHeight;
            return cg0x
        };
        return function(d9g) {
            if (!this.uz7s)
                return;
            var bcC9t = bZF2x()
              , gn2x = document.documentElement.scrollTop || document.body.scrollTop;
            a8i.ba0x(this.uz7s, "display", gn2x > 0 ? "" : "none");
            if (dz1x.ds1x.browser == "ie" && dz1x.ds1x.version < "7.0") {
                var gG2x = Math.min(document.body.clientHeight, bcC9t + gn2x) - 204;
                a8i.ba0x(this.uz7s, "top", gG2x + "px")
            }
        }
    }();
    b9i.RS5X = function(d9g) {
        h9c.co0x(d9g);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
    ;
    b9i.Aj9a = function() {
        var bkg1x = function(d9g) {
            h9c.z9q(window, "share", d9g)
        };
        return function(cV1x, u9l, Ak9b, W0x, Gp0x, Gq0x) {
            l9c.kR3x({
                rid: cV1x,
                type: u9l,
                purl: Ak9b,
                name: W0x,
                author: Gp0x,
                authors: Gq0x,
                onshare: bkg1x.f9e(this)
            })
        }
    }();
    b9i.ht2x = function(U0x, bi0x) {
        try {
            top.log(U0x, bi0x)
        } catch (e) {
            if (U0x.indexOf("new|") == 0) {
                return this.kK3x.eR2x(U0x.slice(4), bi0x)
            }
            switch (U0x) {
            case "play":
                this.kK3x.er1x(bi0x);
                break;
            case "search":
                this.kK3x.bTB1x(bi0x);
                break;
            default:
                this.kK3x.eR2x(U0x, bi0x)
            }
        }
    }
    ;
    b9i.bKk7d = function() {
        var bcD9u, bko1x = false, bt0x = [45, 60];
        var bZx2x = function(bF0x) {
            if (bF0x.title != "MailBoxImport")
                return;
            var Q0x = JSON.parse(bF0x.content || "null") || bb0x;
            if (Q0x.status == 10) {
                n9e.bcp9g.A9r().J0x();
                window.clearTimeout(bcD9u)
            }
        };
        var og4k = function(d9g) {
            if (d9g.code == 200) {
                if (d9g.status == 1) {
                    h9c.s9j(q9h.BT9K, "message", bZx2x.f9e(this));
                    q9h.BT9K.A9r().bwC4G();
                    bko1x = true
                } else {
                    if (bko1x) {
                        if (d9g.status == 10) {
                            n9e.bcp9g.A9r().J0x();
                            h9c.ho2x(q9h.BT9K, "message");
                            window.clearTimeout(bcD9u);
                            bko1x = false
                        }
                    } else {
                        window.clearTimeout(bcD9u)
                    }
                }
            }
        };
        return function() {
            var ut6n = bt0x.shift() * 1e3;
            v9m.bk0x("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: og4k.f9e(this)
            });
            if (ut6n) {
                bcD9u = window.setTimeout(arguments.callee, ut6n)
            }
        }
    }();
    b9i.vN7G = function(d9g) {
        try {
            top.polling(d9g)
        } catch (e) {}
    }
}
)()

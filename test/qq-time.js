define("js/common/comment.js", function(t) {
  var e = t("js/common/music.js"),
    n = t("js/common/music/lib/base.js"),
    o = e.$,
    c = e.widget.user,
    i = e.popup,
    r = e.jQueryAjax,
    a = 0,
    s = 0,
    m = !1,
    l = { ct: 24, cv: 101010 },
    p = e.statistics.pgvClickStat,
    d = n.extend({
      attrs: {
        cur_type: 0,
        type: 3,
        topid: 0,
        cur_page: 0,
        per_page: 25,
        total_page: 1,
        total_num: 0,
        hot_cur_page: 0,
        hot_per_page: 10,
        hot_total_page: 1,
        hot_total_num: 0,
        commentid: "",
        lasthotcommentid: "",
        score: 0,
        lastscore: 0,
        container: ".js_cmt_cont",
        outer_container: ".js_layout",
        subSource: "",
        opCallback: o.noop,
        isOnPage: !1,
        muscritComment: null,
        muscrittotal: 0,
        hotComment: null,
        hotCommenttotal: 0,
        isMuscritself: 0,
        scrollBar: document,
        auth: 0,
        commentStyle: null,
        replySongName: ""
      },
      initialize: function(t) {
        var e = this,
          n = t || {};
        a++,
          o.extend(n, t),
          o(t.container).data("comment", e),
          (s = t.topid),
          d.superclass.initialize.call(this, n),
          e.setReplyContent(),
          e.firstShowComment(n.cb),
          e.bindEvents(),
          e.initEmojj();
      },
      stringEncode: function(t) {
        return t
          .replace(/\\n/g, "＼n")
          .HtmlEncode()
          .replace(/\\n|＼n/g, "<br>");
      },
      formatDate: function(t) {
        var e = new Date(),
          n = e.getFullYear(),
          o = e.getMonth() + 1,
          c = e.getDate();
        if (t > 0) {
          if (((t = new Date(1e3 * t)), "Invalid Date" == t)) return "";
          var i = t.getFullYear(),
            r = t.getMonth() + 1,
            a = t.getDate(),
            s = t.getHours(),
            m = t.getMinutes(),
            l = "";
          return (
            i != n && (l += i + "年"),
            (i != n || r != o || a != c) && (l += r + "月" + a + "日 "),
            l + (10 > s ? "0" + s : s) + ":" + (10 > m ? "0" + m : m)
          );
        }
        return "";
      },
      getCmt: function(t, e) {
        var n = this,
          a = n.get("type") || 0,
          s = "jsoncallback" + (Math.random() + "").replace("0.", ""),
          m = {
            cid: 205360772,
            reqtype: 2,
            biztype: a,
            topid: n.get("topid") || 0,
            cmd: 8,
            needmusiccrit: 0,
            pagenum: 0,
            pagesize: 6 == t.cmd ? 10 : n.get("per_page") || 25,
            lasthotcommentid:
              6 == t.cmd
                ? n.get("lasthotcommentid") || ""
                : n.get("lastcommentid") || "",
            callback: s,
            format: "fs",
            domain: "qq.com"
          };
        o.extend(m, m, t);
        var _ =
          location.protocol +
          "//c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg";
        o.extend(m, l),
          r.jsonp({
            url: _,
            data: m,
            jsonpCallback: s,
            type: "post",
            success: function(t) {
              return t && "object" == typeof t
                ? (t.uin || (t.uin = c.getUin()), e && e(t), void 0)
                : (i.show(t.msg, 2e3, 1), !1);
            },
            error: function() {
              i.show("网络繁忙，请稍候重试。", 2e3, 1);
            }
          });
      },
      setPager: function(e, n, c, i) {
        {
          var r = this,
            a = r.get("per_page"),
            s = 0,
            m = r.get("cur_page"),
            l = r.get("cur_type");
          o(r.get("container"));
        }
        (c || e != l || m != n) &&
          (l != e && r.set("lasthotcommentid", ""),
          r.showPage(e, n, c, function(m) {
            (s = r.get("total_num")),
              setTimeout(function() {
                s > a
                  ? t.async("js/common/music/pager.js", function() {
                      o(".js_pager_comment").pager({
                        container: ".js_mod_all",
                        page: ".js_pager_comment",
                        total: s,
                        per: a,
                        cur: n + 1,
                        index: 3,
                        ns: "comment",
                        callback: function(t) {
                          r.pgvClickStat("pageturn"), r.setPager(e, t - 1, !1);
                        }
                      });
                    })
                  : !!o(".js_pager_comment") && o(".js_pager_comment").hide();
              }, 0),
              r.set("cur_page", n),
              r.set("cur_type", e),
              o("img.js_lazy_comment_pic").lazyload({ event: "scroll" }),
              i && i(m),
              c || o(".js_mod_all")[0].scrollIntoView(!0);
          }));
      },
      showPage: function(t, e, n, c) {
        var i = this,
          r = !1,
          a = 0,
          s = (i.get("scrollBar"), o(".js_reply_grade")),
          m = o(".js_hot_title"),
          l = m.position(),
          _ = ((l && l.top) || 0, o(i.get("container"))),
          p = {};
        n
          ? ((p.cmd = 8), (p.needmusiccrit = 0))
          : ((p.needmusiccrit = 0), 1 == t && (p.cmd = 9)),
          (p.pagenum = e),
          i.getCmt(p, function(m) {
            if (
              m &&
              m.comment &&
              m.comment.commentlist &&
              m.comment.commentlist.length
            ) {
              var l = o.extend(!0, [], m.comment.commentlist).pop();
              i.set("lastcommentid", l && l.commentid),
                i.set("cur_page", e),
                i.set("cur_type", t);
            }
            if (
              m &&
              m.hot_comment &&
              m.hot_comment.commentlist &&
              m.hot_comment.commentlist.length
            ) {
              var l = o.extend(!0, [], m.hot_comment.commentlist).pop();
              i.set("lasthotcommentid", l && l.commentid);
            }
            if (n) {
              (a = parseInt(m.lastscore, 10)),
                i.set("auth", m.auth),
                i.set("blackuin", m.blackuin),
                i.set("superadmin", m.superadmin),
                i.set("score", a),
                i.set("lastscore", a),
                s.data("cur", a);
              var p = 20 * a;
              p > 100 && (p = 100),
                s.width(p + "%"),
                m.muscritdouban || m.muscritzhihu
                  ? (i.set("isMuscritself", 0),
                    i.set(
                      "muscritComment",
                      o.extend(!0, [], m.muscritdouban || m.muscritzhihu)
                    ))
                  : m.muscritself &&
                    m.muscritself.length > 0 &&
                    (i.set("isMuscritself", 1),
                    i.set("muscritComment", o.extend(!0, [], m.muscritself))),
                m.muscrittotal > 0 &&
                  (i.set("muscrittotal", m.muscrittotal), i.renderMusicCmt(r)),
                m.hot_comment &&
                  m.hot_comment.commentlist &&
                  m.hot_comment.commentlist.length > 0 &&
                  i.renderHotComment(m.hot_comment, m.auth);
            }
            i.set("total_num", m.comment && m.comment.commenttotal),
              m.comment &&
              m.comment.commentlist &&
              m.comment.commentlist.length > 0
                ? i.renderComment(m.comment, m.auth)
                : !o("#js_rule_tip").length &&
                  _.append(
                    '<div class="mod_comment_none">还没有人评论，快来抢沙发吧~</div><p class="comment__rule"><a class="js_rule_btn" href="javascript:;">QQ音乐评论指北</a></p>'
                  ),
              c && c(m);
          });
      },
      getContent: function(t, n, c) {
        function r(t) {
          var n = o.extend(!0, {}, t),
            c = e.string.getRealLen(n.content);
          return (
            (c = Math.ceil(c / 2)),
            c > 300 ? (a = "超出300字上限") : t.content || (a = "请填评论内容"),
            a && i.show(a, 2e3, 1),
            a
          );
        }
        var a = r(t);
        a ? c && c() : n && n(t);
      },
      checkLogin: function() {
        var t = c.getUin();
        return t ? !0 : (c.openLogin(function() {}), !1);
      },
      sendCmt: function(t, n, a) {
        function m(t) {
          var m = "jsoncallback" + (Math.random() + "").replace("0.", "");
          if (!t || "" == t.content || "期待你的神评论" == o.trim(t.content))
            return i.show("评论不能为空", 2e3, 1), a && a(), void 0;
          var p = o.extend(
              {
                cid: 205360772,
                cmd: 1,
                reqtype: 2,
                biztype: d.get("type") || 0,
                topid: d.get("topid") || 0,
                format: "fs",
                callback: m,
                domain: "qq.com"
              },
              t
            ),
            h =
              location.protocol +
              "//c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg";
          o.extend(p, l),
            r.jsonp({
              url: h,
              data: p,
              jsonpCallback: m,
              type: "post",
              success: function(r) {
                if (0 == r.code) {
                  o(".mod_comment_none").remove(),
                    t.commentid
                      ? e.popup.show("回复成功！")
                      : e.popup.show("评论发表成功！"),
                    (p.content = d.stringEncode(p.content)),
                    (r.enable_delete = 1),
                    (r.uin = u),
                    (r.avatarurl = r.avatar),
                    (r.content = d.stringEncode(t.content)),
                    (r.score = p.score),
                    (r.commentid = r.newcommentid),
                    (r.ispraise = 0),
                    (r.commit_state =
                      "undefined" == typeof r.commit_state
                        ? 2
                        : r.commit_state),
                    (r.is_hot = 1),
                    (r.praisenum = 0),
                    (r.praisenum = 0),
                    t.rootcommentcontent
                      ? ((r.rootcommentcontent = d.parseEmoji(
                          d.stringEncode(t.rootcommentcontent)
                        )),
                        o.each(t.middlecommentcontent, function(t, e) {
                          r.middlecommentcontent ||
                            (r.middlecommentcontent = []),
                            (e.subcommentcontent = d.parseEmoji(
                              d.stringEncode(e.subcommentcontent)
                            )),
                            r.middlecommentcontent.push(e);
                        }))
                      : (r.rootcommentcontent = d.parseEmoji(
                          d.stringEncode(t.content)
                        ));
                  var m = r.newcommentid.split("_")[3];
                  (r.time = d.formatDate(m)), (r.loadImmediate = !0);
                  var l = o(".js_cmt_input"),
                    h = o(".js_mod_yueping"),
                    g = o(".js_mod_hot"),
                    f = o(".js_mod_all"),
                    j = l;
                  h.length > 0 && (j = h),
                    g.length > 0 && (j = g),
                    0 == f.length &&
                      (j.after(
                        (function(t) {
                          {
                            var e,
                              n = "";
                            Array.prototype.join;
                          }
                          return (
                            (n +=
                              '<div class="mod_all_comment js_mod_all">\r\n	<div class="comment_type__title c_b_normal">\r\n	    <h2>最新评论(' +
                              (null == (e = t.len) ? "" : e) +
                              ')</h2>\r\n	</div>\r\n    <ul class="comment__list js_all_list">\r\n    </ul>\r\n    '),
                            (n +=
                              t.len <= 25
                                ? '\r\n    <div class="comment__show_all"><span class="comment__show_all_link c_tx_thin">—— 以上为全部评论 ——</span></div>\r\n    '
                                : '\r\n    <div class="mod_page_nav js_pager_comment"></div>\r\n    '),
                            (n += "\r\n</div>")
                          );
                        })({ len: 1 })
                      ),
                      o(".js_all_comment_num").html("共1条评论")),
                    s == d.get("topid") &&
                      o(".js_all_list").prepend(
                        (function(t) {
                          {
                            var n,
                              c = "";
                            Array.prototype.join;
                          }
                          c += "";
                          for (
                            var i = t && t.content, r = 0, a = i.length;
                            a > r;
                            r++
                          ) {
                            var s = i[r],
                              m =
                                s.middlecommentcontent &&
                                s.middlecommentcontent.length > 0;
                            if (
                              (s.nick || (s.nick = s.uin),
                              (s.score = Math.round(s.score)),
                              (c +=
                                '\r\n<li class="comment__list_item c_b_normal js_cmt_li ' +
                                (null ==
                                (n =
                                  s.enable_delete && 5 == t.type
                                    ? " comment__self"
                                    : "")
                                  ? ""
                                  : n) +
                                '">\r\n    <a href="javascript:;" class="comment__avatar js_nick" data-uin="' +
                                (null == (n = s.uin) ? "" : n) +
                                '">\r\n        <img class="js_lazy_comment_pic" data-original="' +
                                (null == (n = e.fixUrl(s.avatarurl)) ? "" : n) +
                                '" alt="' +
                                (null == (n = s.nick) ? "" : _.escape(n)) +
                                '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000\';this.onerror=null" title="' +
                                (null == (n = s.nick) ? "" : _.escape(n)) +
                                '"'),
                              s.loadImmediate &&
                                (c +=
                                  ' src="' +
                                  (null == (n = s.avatarurl) ? "" : n) +
                                  '"'),
                              (c += ">\r\n	"),
                              s.identity_pic &&
                                (c +=
                                  '\r\n	<img class="comment__avatar_icon" src="' +
                                  (null == (n = e.fixUrl(s.identity_pic))
                                    ? ""
                                    : n) +
                                  '">\r\n	'),
                              (c +=
                                '\r\n    </a>\r\n<h4 class="comment__title"><a href="javascript:;" class="c_tx_thin js_nick js_nick_only" data-uin="' +
                                (null == (n = s.uin) ? "" : n) +
                                '">' +
                                (null == (n = o.trim(s.nick))
                                  ? ""
                                  : _.escape(n)) +
                                "</a>\r\n    "),
                              s.vipicon &&
                                (c +=
                                  '\r\n    <span class="vip_icon"><img src="' +
                                  (null == (n = e.fixUrl(s.vipicon)) ? "" : n) +
                                  '" alt="绿钻" /></span>\r\n    '),
                              (c += "\r\n    "),
                              s.is_stick &&
                                (c +=
                                  '\r\n	<span class="icon_comment icon_comment_top"></span>\r\n    '),
                              (c += "\r\n</h4>\r\n\r\n"),
                              m)
                            ) {
                              c +=
                                '\r\n<p class="c_tx_normal comment__text js_middle js_hot_text">\r\n    ';
                              for (
                                var l = s.middlecommentcontent.length, p = 0;
                                l > p;
                                p++
                              ) {
                                var d = s.middlecommentcontent[p];
                                d.replynick || (d.replynick = d.replyuin),
                                  d.replyednick ||
                                    (d.replyednick = d.replyeduin);
                                var u = "",
                                  h = "";
                                l > 1 && (u = " // "),
                                  (h = l > 2 && p != l - 1 ? " // " : ""),
                                  (c += "\r\n    "),
                                  (c +=
                                    0 == p
                                      ? '回复 <a href="javascript:;" class="js_nick js_replyed_nick c_tx_current" data-uin="' +
                                        (null == (n = d.replyeduin) ? "" : n) +
                                        '">' +
                                        (null == (n = d.replyednick)
                                          ? ""
                                          : _.escape(n)) +
                                        '</a>: <span class="js_subcomment">' +
                                        (null ==
                                        (n = d.subcommentcontent
                                          .replace(/\n/gi, "<br>")
                                          .replace(/\\n/gi, "<br>"))
                                          ? ""
                                          : n) +
                                        "</span>" +
                                        (null == (n = u) ? "" : n) +
                                        " "
                                      : '\r\n    <a href="javascript:;" class="js_nick js_reply_nick c_tx_current" data-uin="' +
                                        (null == (n = d.replyuin) ? "" : n) +
                                        '">' +
                                        (null == (n = d.replynick)
                                          ? ""
                                          : _.escape(n)) +
                                        '</a>  回复 <a href="javascript:;" class="js_nick js_replyed_nick c_tx_current" data-uin="' +
                                        (null == (n = d.replyeduin) ? "" : n) +
                                        '">' +
                                        (null == (n = d.replyednick)
                                          ? ""
                                          : _.escape(n)) +
                                        '</a> : <span class="js_subcomment">' +
                                        (null ==
                                        (n = d.subcommentcontent
                                          .replace(/\n/gi, "<br>")
                                          .replace(/\\n/gi, "<br>"))
                                          ? ""
                                          : n) +
                                        "</span>" +
                                        (null == (n = h) ? "" : n) +
                                        "\r\n    ");
                              }
                              c += "\r\n</p>\r\n";
                            } else
                              (c +=
                                '\r\n<p class="c_tx_normal comment__text js_hot_text">'),
                                s.rootcommentcontent &&
                                  (c +=
                                    "" +
                                    (null ==
                                    (n = s.rootcommentcontent
                                      .replace(/\n/gi, "<br>")
                                      .replace(/\\n/gi, "<br>"))
                                      ? ""
                                      : n)),
                                (c += "</p>\r\n");
                            (c += "\r\n"),
                              m &&
                                ((c +=
                                  '\r\n<p class="c_tx_normal comment__text c_tx_thin comment__text--history js_hot_text">'),
                                s.rootcommentcontent &&
                                  (c +=
                                    "" +
                                    (null ==
                                    (n = s.rootcommentcontent
                                      .replace(/\n/gi, "<br>")
                                      .replace(/\\n/gi, "<br>"))
                                      ? ""
                                      : n)),
                                (c += "</p>\r\n")),
                              (c +=
                                '\r\n<div class="comment__opt js_comment_opt" data-commentid="' +
                                (null == (n = s.commentid) ? "" : n) +
                                '">\r\n    <span class="comment__date c_tx_thin">' +
                                (null == (n = s.time) ? "" : _.escape(n)) +
                                "</span>\r\n    \r\n	"),
                              "undefined" == typeof s.commit_state &&
                                (s.commit_state = 2),
                              0 == s.commit_state
                                ? (c +=
                                    '\r\n	<a href="javascript:;" class="comment__link js_cmt_contribute" data-commentid="' +
                                    (null == (n = s.commentid) ? "" : n) +
                                    '">投稿</a>\r\n	')
                                : 1 == s.commit_state &&
                                  (c +=
                                    '\r\n	<span class="comment__link c_tx_thin js_cmt_contribute" data-commentid="' +
                                    (null == (n = s.commentid) ? "" : n) +
                                    '">已投稿</span>\r\n	'),
                              (c += "\r\n\r\n    "),
                              1 == t.superadmin &&
                                (c +=
                                  '<a class="comment__good c_tx_thin js_up_comment" href="javascript:;">' +
                                  (null ==
                                  (n = s.is_stick ? "取消置顶" : "置顶")
                                    ? ""
                                    : n) +
                                  "</a>"),
                              (c += "\r\n    "),
                              1 == s.enable_delete &&
                                (c +=
                                  '\r\n    <a class="comment__delete js_cmt_delete icon_comment icon_comment_delete" href="javascript:;">删除</a>\r\n    '),
                              (c += "\r\n    \r\n	"),
                              1 == s.is_hot &&
                                (c +=
                                  '\r\n	<a class="comment__zan js_cmt_praise ' +
                                  (null == (n = s.ispraise ? " done" : "")
                                    ? ""
                                    : n) +
                                  '" data-commentid="' +
                                  (null == (n = s.commentid) ? "" : n) +
                                  '" href="javascript:;"><i class="icon_comment icon_comment_like"></i><span class="js_praise_num">' +
                                  (null == (n = s.praisenum) ? "" : n) +
                                  '</span></a>\r\n	<a class="comment__feedback js_feedback icon_comment icon_comment_feedback" href="javascript:;" data-nick="' +
                                  (null == (n = s.nick) ? "" : _.escape(n)) +
                                  '" data-uin="' +
                                  (null == (n = s.uin) ? "" : n) +
                                  '" data-cmtid="' +
                                  (null == (n = s.commentid) ? "" : n) +
                                  '">回复</a>\r\n	'),
                              (c +=
                                '\r\n</div>\r\n<div class="js_reply_container"></div>\r\n        </li>\r\n');
                          }
                          return (c += "\r\n");
                        })({
                          content: [r],
                          type: d.get("type"),
                          auth: d.get("auth"),
                          uin: c.getUin()
                        })
                      ),
                    o("img.js_lazy_comment_pic").lazyload({ event: "scroll" }),
                    "function" == typeof n && n();
                } else
                  1e3 == r.code
                    ? c.openLogin()
                    : (i.show(r.msg, 2e3, 1), a && a());
              },
              error: function() {
                i.show("发表评论失败！网络繁忙，请稍候重试。", 2e3, 1),
                  a && a();
              }
            });
        }
        var p = t.content;
        if ("" == o.trim(p.replace(/\\n/gi, "")))
          return i.show("评论不能为空", 2e3, 1), a && a(), !1;
        var d = this,
          u = c.getUin();
        return u
          ? (d.getContent(t, m, a), void 0)
          : (c.openLogin(function() {}), void 0);
      },
      delCmt: function(t) {
        var e = c.getUin();
        if (!e) return c.openLogin(function() {}), void 0;
        var n = "jsoncallback" + (Math.random() + "").replace("0.", ""),
          a = {
            cid: 205360772,
            cmd: 3,
            commentid: t || "",
            callback: n,
            format: "fs",
            domain: "qq.com"
          },
          s =
            location.protocol +
            "//c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg";
        o.extend(a, l),
          r.jsonp({
            url: s,
            data: a,
            jsonpCallback: n,
            type: "post",
            success: function(e) {
              0 == e.code
                ? (o('.js_comment_opt[data-commentid="' + t + '"]')
                    .closest(".js_cmt_li")
                    .remove(),
                  0 == o(".js_all_list").children().length &&
                    o(".js_mod_all").remove(),
                  0 == o(".js_hot_list").children().length &&
                    o(".js_mod_hot").remove(),
                  i.show("删除成功", 2e3, 300))
                : 1e3 == e.code
                  ? c.openLogin()
                  : i.show(e.msg, 2e3, 1);
            },
            error: function() {
              i.show("网络繁忙，请稍候重试。", 2e3, 1);
            }
          });
      },
      praiseCmt: function(t, e) {
        var n = this,
          a = c.getUin();
        if (!a) return c.openLogin(function() {}), void 0;
        var s = "jsoncallback" + (Math.random() + "").replace("0.", ""),
          m = {
            cid: 205360774,
            cmd: e,
            reqtype: 2,
            biztype: n.get("type") || 0,
            topid: n.get("topid") || 0,
            commentid: t,
            qq: c.getUin(),
            callback: s,
            domain: "qq.com"
          };
        n.praiseCmt_sending = !0;
        var _ =
          location.protocol +
          "//c.y.qq.com/base/fcgi-bin/fcg_global_comment_praise_h5.fcg";
        o.extend(m, l),
          r.jsonp({
            url: _,
            data: m,
            jsonpCallback: s,
            type: "post",
            success: function(r) {
              if (0 == r.code) {
                var a = o(
                    '.js_comment_opt .js_cmt_praise[data-commentid="' + t + '"]'
                  ),
                  s = a.find(".js_praise_num").eq(0),
                  m = parseInt(s.text()) + (1 == e ? 1 : -1);
                a.html(
                  '<i class="icon_comment icon_comment_like"></i><span class="js_praise_num">' +
                    (m > 0 ? m : 0) +
                    "</span>"
                ),
                  a.toggleClass("done", 1 == e);
              } else 1e3 == r.code ? c.openLogin() : i.show(r.msg, 2e3, 1);
              n.praiseCmt_sending = !1;
            },
            error: function() {
              (n.praiseCmt_sending = !1),
                i.show("网络繁忙，请稍候重试。", 2e3, 1);
            }
          });
      },
      approveCmt: function(t, e) {
        var n = this,
          a = c.getUin();
        if (!a) return c.openLogin(function() {}), void 0;
        var s = "jsoncallback" + (Math.random() + "").replace("0.", ""),
          m = {
            cmd: e,
            comment_id: t,
            qq: c.getUin(),
            callback: s,
            domain: "qq.com"
          };
        n.approveCmt_sending = !0;
        var _ =
          location.protocol +
          "//c.y.qq.com/base/fcgi-bin/fcg_comment_notice.fcg";
        o.extend(m, l),
          r.jsonp({
            url: _,
            data: m,
            jsonpCallback: s,
            type: "post",
            success: function(r) {
              if (0 == r.code) {
                var a = o(
                  '.js_comment_opt[data-commentid="' + t + '"] .js_approve'
                );
                a.html(4 == e ? "取消通过审核" : "通过审核");
              } else 1e3 == r.code ? c.openLogin() : i.show(r.msg, 2e3, 1);
              n.approveCmt_sending = !1;
            },
            error: function() {
              (n.approveCmt_sending = !1),
                i.show("网络繁忙，请稍候重试。", 2e3, 1);
            }
          });
      },
      upCmt: function(t, e) {
        var n = c.getUin(),
          a = this;
        if (!n) return c.openLogin(function() {}), void 0;
        a.upCmt_sending = !0;
        var s = "jsoncallback" + (Math.random() + "").replace("0.", ""),
          m = {
            cid: 205360772,
            cmd: 12,
            commentid: t || "",
            stick_type: e || 1,
            callback: s,
            format: "fs",
            domain: "qq.com"
          },
          _ =
            location.protocol +
            "//c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg";
        o.extend(m, l),
          r.jsonp({
            url: _,
            data: m,
            jsonpCallback: s,
            type: "post",
            success: function(n) {
              if (0 == n.code) {
                var r = o(
                  '.js_comment_opt[data-commentid="' + t + '"] .js_up_comment'
                );
                r.html(1 == e ? "取消置顶" : "置顶");
              } else 1e3 == n.code ? c.openLogin() : i.show(n.msg, 2e3, 1);
              a.upCmt_sending = !1;
            },
            error: function() {
              (a.upCmt_sending = !1), i.show("网络繁忙，请稍候重试。", 2e3, 1);
            }
          });
      },
      reportCmt: function(t, e, n, a) {
        var s = c.getUin(),
          m = this;
        if (!s) return c.openLogin(function() {}), void 0;
        m.reportCmt_sending = !0;
        var _ = "jsoncallback" + (Math.random() + "").replace("0.", ""),
          p = {
            cid: 205360772,
            cmd: 10,
            commentid: t || "",
            rptcmd: a || 1,
            rptmsg: e || "其它",
            detailmsg: n || "",
            format: "fs",
            callback: _,
            domain: "qq.com"
          },
          d =
            location.protocol +
            "//c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg";
        o.extend(p, l),
          r.jsonp({
            url: d,
            data: p,
            jsonpCallback: _,
            type: "post",
            success: function(t) {
              0 == t.code ||
                (1e3 == t.code ? c.openLogin() : i.show(t.msg, 2e3, 1)),
                (m.reportCmt_sending = !1);
            },
            error: function() {
              (m.reportCmt_sending = !1),
                i.show("网络繁忙，请稍候重试。", 2e3, 1);
            }
          });
      },
      formatComments: function(t) {
        for (var e = this, n = null, o = 0, c = t.length; c > o; o++)
          (n = t[o]), (n.time = e.formatDate(n.time));
        return t || [];
      },
      setReplyContent: function() {
        var t = this,
          e = t.get("container");
        o(e).html(function() {
          {
            var t = "";
            Array.prototype.join;
          }
          return (t +=
            '<div class="part__hd">\r\n        <h2 class="part__tit">评论<span class="c_tx_thin part__tit_desc js_all_comment_num"></span></h2>\r\n    </div>\r\n<div class="mod_comment js_cmt_input">\r\n\r\n<div class="comment__input">\r\n	<div class="comment__textarea js_comment__textarea  c_bg_normal">\r\n		<div class="comment__textarea_inner">\r\n			<!--c_tx_normal-->\r\n                        <!--focus评论框的时候将.comment__textarea_default模块隐藏，同时显示.comment__textarea_input-->\r\n                        <div class="comment__textarea_default c_tx_thin js_reply_text_blur" name="" id="reply_text_blur" contenteditable="true">期待你的神评论……</div>\r\n                        <div class="js_reply_text comment__textarea_input c_tx_normal" name="" id="reply_text" contenteditable="true" style="display:none;"></div>\r\n		</div>\r\n		<!--字数超过后添加comment__tips--warn_tx 去掉c_tx_thin-->\r\n		<div class="comment__tips js_comment_tips c_tx_thin" data-max="300">剩余<span class="c_tx_highlight">300</span>字</div>\r\n	</div>\r\n	<a class="comment__face js_cmt_face" href="javascript:;" data-type="reply"><i class="icon_comment icon_comment_face"></i></a>\r\n        <div class="comment__tool"><a href="javascript:;" class="mod_btn_green comment__tool_btn js_send_reply">发表评论</a></div>\r\n	\r\n</div>\r\n</div>');
        });
      },
      renderMusicCmt: function(t) {
        var n = this,
          c = n.get("muscritComment"),
          i = n.get("muscrittotal"),
          r = n.get("isMuscritself"),
          a = n.get("type"),
          s = o.extend(!0, [], c) || [],
          m = o(".js_cmt_input"),
          l = o(".js_mod_yueping"),
          p = [],
          d = 0,
          u = "乐评";
        (d = t ? i : 3),
          (p = s.slice(0, d)),
          !r && (u = 1 == a ? "知乎乐评" : "豆瓣乐评"),
          0 == l.length &&
            m.after(
              (function(t) {
                {
                  var e,
                    n = "";
                  Array.prototype.join;
                }
                n +=
                  '<div class="mod_yueping js_mod_yueping">\r\n	<div class="comment_type__title c_b_normal">\r\n		<h2>' +
                  (null == (e = t.title) ? "" : _.escape(e)) +
                  "(" +
                  (null == (e = t.len) ? "" : e) +
                  ')</h2>\r\n		<!-- <a class="comment__control" href="#">管理全部评论&gt;&gt;</a> -->\r\n	</div>\r\n	<ul class="comment__list js_yueping_list">\r\n	</ul>\r\n	<!-- 展开状态comment__show_all--on -->\r\n	';
                var o = "全部乐评(" + t.len + ")";
                return (
                  t.len > 3 &&
                    (n +=
                      '\r\n	<div class="comment__show_all js_all_good_comments">\r\n		<a href="javascript:;" class="comment__show_all_link c_tx_thin">' +
                      (null == (e = o) ? "" : _.escape(e)) +
                      "</a>\r\n	</div>\r\n	"),
                  (n += "\r\n</div>")
                );
              })({ len: i, isall: t, title: u })
            );
        for (var h = 0, g = p.length; g > h; h++)
          p[h].muscritcontent &&
            "string" == typeof p[h].muscritcontent &&
            (p[h].muscritcontent = n.parseEmoji(
              n.stringEncode(p[h].muscritcontent)
            ));
        o(".js_yueping_list").html(
          (function(t) {
            {
              var n,
                o = "";
              Array.prototype.join;
            }
            o += "";
            for (var c = t.content, i = 0, r = c && c.length; r > i; i++) {
              var a = c[i];
              o +=
                '\r\n<li class="comment__list_item c_b_normal">\r\n	<div class="comment__avatar">\r\n		<img class="js_lazy_comment_pic"  data-original="' +
                (null == (n = e.fixUrl(a.avatarurl)) ? "" : n) +
                '" alt="' +
                (null == (n = a.author) ? "" : _.escape(n)) +
                '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=2592000\';this.onerror=null" title="' +
                (null == (n = a.author) ? "" : _.escape(n)) +
                '">\r\n	</div>\r\n	<h4 class="comment__title c_tx_thin">' +
                (null == (n = a.title) ? "" : _.escape(n)) +
                '</h4>\r\n	<p class="comment__text c_tx_normal">' +
                (null == (n = a.muscritcontent) ? "" : n) +
                '</p>\r\n	<p class="comment__more"><a class="c_tx_thin js_show_all" href="javascript:;" data-self="' +
                (null == (n = t.isMuscritself) ? "" : n) +
                "\" data-detail='" +
                (null == (n = t.isMuscritself ? JSON.stringify(a) : a.detailurl)
                  ? ""
                  : n) +
                "' data-index=\"" +
                (null == (n = i) ? "" : n) +
                '">查看全文</a>\r\n	</p>\r\n</li>\r\n';
            }
            return (o += "\r\n\r\n");
          })({ content: p, isMuscritself: r })
        ),
          o("img.js_lazy_comment_pic").lazyload({ event: "scroll" });
      },
      getMoreHotComment: function() {
        var t = this;
        t.getCmt(
          {
            cmd: 6,
            pagesize: t.get("hot_per_page"),
            pagenum: t.get("hot_cur_page") + 1
          },
          function(e) {
            o(".js_get_more_hot").data("loading", 0),
              (e.comment.more = e.morecomment),
              t.renderHotComment(e.comment, e.auth),
              o("img.js_lazy_comment_pic").lazyload({ event: "scroll" }),
              t.set("hot_cur_page", t.get("hot_cur_page") + 1);
          }
        );
      },
      renderHotComment: function(t, n) {
        {
          var i = this,
            r = (o.extend(!0, [], t), t.commenttotal),
            a = o.extend(!0, [], t.commentlist) || [],
            s = o(".js_cmt_input"),
            m = o(".js_mod_yueping"),
            l = s,
            p = o(".js_mod_hot"),
            d = null;
          o(i.get("container"));
        }
        (a = i.formatComments(a)),
          m.length > 0 && (l = m),
          i.set("hot_total_num", r);
        var u = i.get("hot_total_num"),
          h = i.get("hot_cur_page"),
          g = i.get("hot_per_page");
        0 == p.length &&
          l.after(
            (function(t) {
              {
                var e,
                  n = "";
                Array.prototype.join;
              }
              return (n +=
                '<div class="mod_comment js_mod_hot">\r\n<div class="mod_hot_comment">\r\n	<div class="comment_type__title c_b_normal">\r\n	    <h2>精彩评论(' +
                (null == (e = t.len) ? "" : e) +
                ')</h2>\r\n	</div>\r\n	<ul class="comment__list js_hot_list">\r\n	</ul>\r\n        <!-- 展开状态comment__show_all--on -->\r\n        <div class="comment__show_all"><a href="javascript:;" class="comment__show_all_link c_tx_thin js_get_more_hot" style="display:none;">点击加载更多<i class="comment__icon_arrow_down sprite"></i></a> </div>\r\n</div>\r\n</div>');
            })({
              len: r,
              more: "undefined" == typeof t.more ? u > (h + 1) * g : 1 == t.more
            })
          ),
          r > 0 &&
            i.get("$mod_title") &&
            i.get("$mod_title").text("精彩评论(" + r + ")");
        for (var f = 0, j = 0, v = a.length; v > j; j++)
          if (
            ((d = a[j]),
            d.is_hot && f++,
            d.rootcommentcontent &&
              "string" == typeof d.rootcommentcontent &&
              (d.rootcommentcontent = i.parseEmoji(
                i.stringEncode(d.rootcommentcontent)
              )),
            d.middlecommentcontent)
          )
            for (var y = 0, k = d.middlecommentcontent.length; k > y; y++) {
              var b = d.middlecommentcontent[y].subcommentcontent;
              b &&
                "string" == typeof b &&
                (b = i.parseEmoji(
                  i.stringEncode(d.middlecommentcontent[y].subcommentcontent)
                )),
                (d.middlecommentcontent[y].subcommentcontent = b);
            }
        o(".js_hot_list").append(
          (function(t) {
            {
              var n,
                c = "";
              Array.prototype.join;
            }
            c += "";
            for (var i = t && t.content, r = 0, a = i.length; a > r; r++) {
              var s = i[r],
                m = s.middlecommentcontent && s.middlecommentcontent.length > 0;
              if (
                (s.nick || (s.nick = s.uin),
                (s.score = Math.round(s.score)),
                (c +=
                  '\r\n<li class="comment__list_item c_b_normal js_cmt_li ' +
                  (null ==
                  (n = s.enable_delete && 5 == t.type ? "comment__self" : "")
                    ? ""
                    : n) +
                  '">\r\n	<a href="javascript:;" class="comment__avatar js_nick" data-uin="' +
                  (null == (n = s.uin) ? "" : n) +
                  '">\r\n		<img class="js_lazy_comment_pic" data-original="' +
                  (null == (n = e.fixUrl(s.avatarurl)) ? "" : n) +
                  '" alt="' +
                  (null == (n = s.nick) ? "" : _.escape(n)) +
                  '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=2592000\';this.onerror=null" title="' +
                  (null == (n = s.nick) ? "" : _.escape(n)) +
                  '"'),
                s.loadImmediate &&
                  (c += ' src="' + (null == (n = s.avatarurl) ? "" : n) + '"'),
                (c += ">\r\n		"),
                s.identity_pic &&
                  (c +=
                    '\r\n		<img class="comment__avatar_icon" src="' +
                    (null == (n = e.fixUrl(s.identity_pic)) ? "" : n) +
                    '">\r\n		'),
                (c +=
                  '\r\n	</a>\r\n<h4 class="comment__title"><a href="javascript:;" class="c_tx_thin js_nick js_nick_only" data-uin="' +
                  (null == (n = s.uin) ? "" : n) +
                  '">' +
                  (null == (n = o.trim(s.nick)) ? "" : _.escape(n)) +
                  "</a>\r\n	"),
                s.vipicon &&
                  (c +=
                    '\r\n	<span class="vip_icon"><img src="' +
                    (null == (n = e.fixUrl(s.vipicon)) ? "" : n) +
                    '" alt="绿钻" /></span>\r\n	'),
                (c += "\r\n	\r\n    "),
                s.is_stick &&
                  (c +=
                    '\r\n	<span class="icon_comment icon_comment_top"></span>\r\n    '),
                (c += "\r\n</h4>\r\n\r\n"),
                m)
              ) {
                c +=
                  '\r\n<p class="c_tx_normal comment__text js_middle js_hot_text">\r\n	';
                for (var l = s.middlecommentcontent.length, p = 0; l > p; p++) {
                  var d = s.middlecommentcontent[p];
                  d.replynick || (d.replynick = d.replyuin),
                    d.replyednick || (d.replyednick = d.replyeduin);
                  var u = "",
                    h = "";
                  l > 1 && (u = " // "),
                    (h = l > 2 && p != l - 1 ? " // " : ""),
                    (c += "\r\n	"),
                    (c +=
                      0 == p
                        ? '回复 <a href="javascript:;" class="js_nick js_replyed_nick c_tx_current" data-uin="' +
                          (null == (n = d.replyeduin) ? "" : n) +
                          '">' +
                          (null == (n = d.replyednick) ? "" : _.escape(n)) +
                          '</a>: <span class="js_subcomment">' +
                          (null ==
                          (n = d.subcommentcontent
                            .replace(/\n/gi, "<br>")
                            .replace(/\\n/gi, "<br>"))
                            ? ""
                            : n) +
                          "</span>" +
                          (null == (n = u) ? "" : n) +
                          " "
                        : '\r\n	<a href="javascript:;" class="js_nick js_reply_nick c_tx_current" data-uin="' +
                          (null == (n = d.replyuin) ? "" : n) +
                          '">' +
                          (null == (n = d.replynick) ? "" : _.escape(n)) +
                          '</a>  回复 <a href="javascript:;" class="js_nick js_replyed_nick c_tx_current" data-uin="' +
                          (null == (n = d.replyeduin) ? "" : n) +
                          '">' +
                          (null == (n = d.replyednick) ? "" : _.escape(n)) +
                          '</a> : <span class="js_subcomment">' +
                          (null ==
                          (n = d.subcommentcontent
                            .replace(/\n/gi, "<br>")
                            .replace(/\\n/gi, "<br>"))
                            ? ""
                            : n) +
                          "</span>" +
                          (null == (n = h) ? "" : n) +
                          "\r\n	");
                }
                c += "\r\n</p>\r\n";
              } else
                (c += '\r\n<p class="c_tx_normal comment__text js_hot_text">'),
                  s.rootcommentcontent &&
                    (c +=
                      "" +
                      (null ==
                      (n = s.rootcommentcontent
                        .replace(/\n/gi, "<br>")
                        .replace(/\\n/gi, "<br>"))
                        ? ""
                        : n)),
                  (c += "</p>\r\n");
              (c += "\r\n"),
                m &&
                  ((c +=
                    '\r\n<p class="c_tx_normal comment__text c_tx_thin comment__text--history js_hot_text">'),
                  s.rootcommentcontent &&
                    (c +=
                      "" +
                      (null ==
                      (n = s.rootcommentcontent
                        .replace(/\n/gi, "<br>")
                        .replace(/\\n/gi, "<br>"))
                        ? ""
                        : n)),
                  (c += "</p>\r\n")),
                (c +=
                  '\r\n<div class="comment__opt js_comment_opt" data-commentid="' +
                  (null == (n = s.commentid) ? "" : n) +
                  '">\r\n	<span class="comment__date c_tx_thin">' +
                  (null == (n = s.time) ? "" : _.escape(n)) +
                  "</span>\r\n	\r\n	"),
                "undefined" == typeof s.commit_state && (s.commit_state = 2),
                0 == s.commit_state
                  ? (c +=
                      '\r\n	<a href="javascript:;" class="comment__link js_cmt_contribute" data-commentid="' +
                      (null == (n = s.commentid) ? "" : n) +
                      '">投稿</a>\r\n	')
                  : 1 == s.commit_state &&
                    (c +=
                      '\r\n	<span class="comment__link c_tx_thin js_cmt_contribute" data-commentid="' +
                      (null == (n = s.commentid) ? "" : n) +
                      '">已投稿</span>\r\n	'),
                (c += "\r\n\r\n	"),
                1 == t.superadmin &&
                  (c +=
                    '<a class="comment__good c_tx_thin js_up_comment" href="javascript:;">' +
                    (null == (n = s.is_stick ? "取消置顶" : "置顶") ? "" : n) +
                    "</a>"),
                (c += "\r\n	"),
                1 == s.enable_delete &&
                  (c +=
                    '\r\n	<a class="comment__delete js_cmt_delete icon_comment icon_comment_delete" href="javascript:;">删除</a>\r\n	'),
                (c += "\r\n	"),
                1 == s.is_hot &&
                  (c +=
                    '\r\n	<a class="comment__zan js_cmt_praise ' +
                    (null == (n = s.ispraise ? " done" : "") ? "" : n) +
                    '" data-commentid="' +
                    (null == (n = s.commentid) ? "" : n) +
                    '" href="javascript:;"><i class="icon_comment icon_comment_like"></i><span class="js_praise_num">' +
                    (null == (n = s.praisenum) ? "" : n) +
                    '</span></a>\r\n	<a class="comment__feedback js_feedback icon_comment icon_comment_feedback" href="javascript:;" data-nick="' +
                    (null == (n = s.nick) ? "" : _.escape(n)) +
                    '" data-uin="' +
                    (null == (n = s.uin) ? "" : n) +
                    '" data-cmtid="' +
                    (null == (n = s.commentid) ? "" : n) +
                    '">回复</a>\r\n	'),
                (c +=
                  '\r\n</div>\r\n<div class="js_reply_container"></div>\r\n		</li>\r\n');
            }
            return (c += "\r\n");
          })({
            content: a,
            type: i.get("type"),
            auth: n,
            uin: c.getUin(),
            blackuin: i.get("blackuin"),
            superadmin: i.get("superadmin")
          })
        ),
          ("undefined" == typeof t.more
          ? u > (h + 1) * g
          : 1 == t.more)
            ? o(".js_get_more_hot").show()
            : setTimeout(function() {
                o(".js_get_more_hot").show(),
                  o(".js_get_more_hot")
                    .parent()
                    .html(
                      '<span class="comment__show_all_link c_tx_thin">精彩评论已加载完毕</span>'
                    );
              }, 800);
      },
      renderComment: function(t, n) {
        o(".mod_comment_none").remove();
        var i = this,
          r = (o.extend(!0, [], t), t.commenttotal),
          a = o.extend(!0, [], t.commentlist) || [],
          s = o(".js_cmt_input"),
          m = o(".js_mod_yueping"),
          l = o(".js_mod_hot"),
          p = o(".js_mod_all"),
          d = s,
          u = null,
          h = o(i.get("container"));
        m.length > 0 && (d = m),
          l.length > 0 && (d = l),
          (a = i.formatComments(a)),
          0 == p.length &&
            (d.after(
              (function(t) {
                {
                  var e,
                    n = "";
                  Array.prototype.join;
                }
                return (
                  (n +=
                    '<div class="mod_all_comment js_mod_all">\r\n	<div class="comment_type__title c_b_normal">\r\n	    <h2>最新评论(' +
                    (null == (e = t.len) ? "" : e) +
                    ')</h2>\r\n	</div>\r\n    <ul class="comment__list js_all_list">\r\n    </ul>\r\n    '),
                  (n +=
                    t.len <= 25
                      ? '\r\n    <div class="comment__show_all"><span class="comment__show_all_link c_tx_thin">—— 以上为全部评论 ——</span></div>\r\n    '
                      : '\r\n    <div class="mod_page_nav js_pager_comment"></div>\r\n    '),
                  (n += "\r\n</div>")
                );
              })({ len: r })
            ),
            o(".js_all_comment_num").html("共" + r + "条评论")),
          r > 0 &&
            i.get("$mod_title") &&
            i.get("$mod_title").text("全部评论(" + r + ")");
        for (var g = 0, f = 0, j = a.length; j > f; f++)
          if (
            ((u = a[f]),
            u.is_hot && g++,
            u.rootcommentcontent &&
              "string" == typeof u.rootcommentcontent &&
              (u.rootcommentcontent = i.parseEmoji(
                i.stringEncode(u.rootcommentcontent)
              )),
            u.middlecommentcontent)
          )
            for (var v = 0, y = u.middlecommentcontent.length; y > v; v++) {
              var k = u.middlecommentcontent[v].subcommentcontent;
              k &&
                "string" == typeof k &&
                (k = i.parseEmoji(
                  i.stringEncode(u.middlecommentcontent[v].subcommentcontent)
                )),
                (u.middlecommentcontent[v].subcommentcontent = k);
            }
        o(".js_all_list").html(
          (function(t) {
            {
              var n,
                c = "";
              Array.prototype.join;
            }
            c += "";
            for (var i = t && t.content, r = 0, a = i.length; a > r; r++) {
              var s = i[r],
                m = s.middlecommentcontent && s.middlecommentcontent.length > 0;
              if (
                (s.nick || (s.nick = s.uin),
                (s.score = Math.round(s.score)),
                (c +=
                  '\r\n<li class="comment__list_item c_b_normal js_cmt_li ' +
                  (null ==
                  (n = s.enable_delete && 5 == t.type ? " comment__self" : "")
                    ? ""
                    : n) +
                  '">\r\n    <a href="javascript:;" class="comment__avatar js_nick" data-uin="' +
                  (null == (n = s.uin) ? "" : n) +
                  '">\r\n        <img class="js_lazy_comment_pic" data-original="' +
                  (null == (n = e.fixUrl(s.avatarurl)) ? "" : n) +
                  '" alt="' +
                  (null == (n = s.nick) ? "" : _.escape(n)) +
                  '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000\';this.onerror=null" title="' +
                  (null == (n = s.nick) ? "" : _.escape(n)) +
                  '"'),
                s.loadImmediate &&
                  (c += ' src="' + (null == (n = s.avatarurl) ? "" : n) + '"'),
                (c += ">\r\n	"),
                s.identity_pic &&
                  (c +=
                    '\r\n	<img class="comment__avatar_icon" src="' +
                    (null == (n = e.fixUrl(s.identity_pic)) ? "" : n) +
                    '">\r\n	'),
                (c +=
                  '\r\n    </a>\r\n<h4 class="comment__title"><a href="javascript:;" class="c_tx_thin js_nick js_nick_only" data-uin="' +
                  (null == (n = s.uin) ? "" : n) +
                  '">' +
                  (null == (n = o.trim(s.nick)) ? "" : _.escape(n)) +
                  "</a>\r\n    "),
                s.vipicon &&
                  (c +=
                    '\r\n    <span class="vip_icon"><img src="' +
                    (null == (n = e.fixUrl(s.vipicon)) ? "" : n) +
                    '" alt="绿钻" /></span>\r\n    '),
                (c += "\r\n    "),
                s.is_stick &&
                  (c +=
                    '\r\n	<span class="icon_comment icon_comment_top"></span>\r\n    '),
                (c += "\r\n</h4>\r\n\r\n"),
                m)
              ) {
                c +=
                  '\r\n<p class="c_tx_normal comment__text js_middle js_hot_text">\r\n    ';
                for (var l = s.middlecommentcontent.length, p = 0; l > p; p++) {
                  var d = s.middlecommentcontent[p];
                  d.replynick || (d.replynick = d.replyuin),
                    d.replyednick || (d.replyednick = d.replyeduin);
                  var u = "",
                    h = "";
                  l > 1 && (u = " // "),
                    (h = l > 2 && p != l - 1 ? " // " : ""),
                    (c += "\r\n    "),
                    (c +=
                      0 == p
                        ? '回复 <a href="javascript:;" class="js_nick js_replyed_nick c_tx_current" data-uin="' +
                          (null == (n = d.replyeduin) ? "" : n) +
                          '">' +
                          (null == (n = d.replyednick) ? "" : _.escape(n)) +
                          '</a>: <span class="js_subcomment">' +
                          (null ==
                          (n = d.subcommentcontent
                            .replace(/\n/gi, "<br>")
                            .replace(/\\n/gi, "<br>"))
                            ? ""
                            : n) +
                          "</span>" +
                          (null == (n = u) ? "" : n) +
                          " "
                        : '\r\n    <a href="javascript:;" class="js_nick js_reply_nick c_tx_current" data-uin="' +
                          (null == (n = d.replyuin) ? "" : n) +
                          '">' +
                          (null == (n = d.replynick) ? "" : _.escape(n)) +
                          '</a>  回复 <a href="javascript:;" class="js_nick js_replyed_nick c_tx_current" data-uin="' +
                          (null == (n = d.replyeduin) ? "" : n) +
                          '">' +
                          (null == (n = d.replyednick) ? "" : _.escape(n)) +
                          '</a> : <span class="js_subcomment">' +
                          (null ==
                          (n = d.subcommentcontent
                            .replace(/\n/gi, "<br>")
                            .replace(/\\n/gi, "<br>"))
                            ? ""
                            : n) +
                          "</span>" +
                          (null == (n = h) ? "" : n) +
                          "\r\n    ");
                }
                c += "\r\n</p>\r\n";
              } else
                (c += '\r\n<p class="c_tx_normal comment__text js_hot_text">'),
                  s.rootcommentcontent &&
                    (c +=
                      "" +
                      (null ==
                      (n = s.rootcommentcontent
                        .replace(/\n/gi, "<br>")
                        .replace(/\\n/gi, "<br>"))
                        ? ""
                        : n)),
                  (c += "</p>\r\n");
              (c += "\r\n"),
                m &&
                  ((c +=
                    '\r\n<p class="c_tx_normal comment__text c_tx_thin comment__text--history js_hot_text">'),
                  s.rootcommentcontent &&
                    (c +=
                      "" +
                      (null ==
                      (n = s.rootcommentcontent
                        .replace(/\n/gi, "<br>")
                        .replace(/\\n/gi, "<br>"))
                        ? ""
                        : n)),
                  (c += "</p>\r\n")),
                (c +=
                  '\r\n<div class="comment__opt js_comment_opt" data-commentid="' +
                  (null == (n = s.commentid) ? "" : n) +
                  '">\r\n    <span class="comment__date c_tx_thin">' +
                  (null == (n = s.time) ? "" : _.escape(n)) +
                  "</span>\r\n    \r\n	"),
                "undefined" == typeof s.commit_state && (s.commit_state = 2),
                0 == s.commit_state
                  ? (c +=
                      '\r\n	<a href="javascript:;" class="comment__link js_cmt_contribute" data-commentid="' +
                      (null == (n = s.commentid) ? "" : n) +
                      '">投稿</a>\r\n	')
                  : 1 == s.commit_state &&
                    (c +=
                      '\r\n	<span class="comment__link c_tx_thin js_cmt_contribute" data-commentid="' +
                      (null == (n = s.commentid) ? "" : n) +
                      '">已投稿</span>\r\n	'),
                (c += "\r\n\r\n    "),
                1 == t.superadmin &&
                  (c +=
                    '<a class="comment__good c_tx_thin js_up_comment" href="javascript:;">' +
                    (null == (n = s.is_stick ? "取消置顶" : "置顶") ? "" : n) +
                    "</a>"),
                (c += "\r\n    "),
                1 == s.enable_delete &&
                  (c +=
                    '\r\n    <a class="comment__delete js_cmt_delete icon_comment icon_comment_delete" href="javascript:;">删除</a>\r\n    '),
                (c += "\r\n    \r\n	"),
                1 == s.is_hot &&
                  (c +=
                    '\r\n	<a class="comment__zan js_cmt_praise ' +
                    (null == (n = s.ispraise ? " done" : "") ? "" : n) +
                    '" data-commentid="' +
                    (null == (n = s.commentid) ? "" : n) +
                    '" href="javascript:;"><i class="icon_comment icon_comment_like"></i><span class="js_praise_num">' +
                    (null == (n = s.praisenum) ? "" : n) +
                    '</span></a>\r\n	<a class="comment__feedback js_feedback icon_comment icon_comment_feedback" href="javascript:;" data-nick="' +
                    (null == (n = s.nick) ? "" : _.escape(n)) +
                    '" data-uin="' +
                    (null == (n = s.uin) ? "" : n) +
                    '" data-cmtid="' +
                    (null == (n = s.commentid) ? "" : n) +
                    '">回复</a>\r\n	'),
                (c +=
                  '\r\n</div>\r\n<div class="js_reply_container"></div>\r\n        </li>\r\n');
            }
            return (c += "\r\n");
          })({
            content: a,
            type: i.get("type"),
            auth: n,
            uin: c.getUin(),
            blackuin: i.get("blackuin"),
            superadmin: i.get("superadmin")
          })
        ),
          o(".js_rule_btn")
            .parent()
            .remove(),
          !o("#js_rule_tip").length &&
            h.append(
              '<p class="comment__rule"><a class="js_rule_btn" href="javascript:;">QQ音乐评论指北</a></p>'
            );
      },
      firstShowComment: function(t) {
        var e = this,
          n = e.get("cur_type"),
          o = e.get("cur_page");
        e.setPager(n, o, !0, t);
      },
      lastEditRange: null,
      getCursor: function() {
        return this.lastEditRange ? this.lastEditRange.startOffset : 0;
      },
      setEmojiCursor: function(t, e, n) {
        n && n();
        var o = t[0],
          c = getSelection();
        if ("#text" != c.anchorNode.nodeName) {
          var i = document.createTextNode(e);
          if (o.childNodes.length > 0)
            for (var r = 0; r < o.childNodes.length; r++)
              r == c.anchorOffset && o.insertBefore(i, o.childNodes[r]);
          else o.appendChild(i);
          var a = document.createRange();
          a.selectNodeContents(i),
            a.setStart(i, i.length),
            a.collapse(!0),
            c.removeAllRanges(),
            c.addRange(a);
        } else {
          var a = this.lastEditRange || c.getRangeAt(0),
            s = a.startContainer,
            m = a.startOffset;
          s.insertData(m, e),
            a.setStart(s, m + e.length),
            a.collapse(!0),
            c.removeAllRanges(),
            c.addRange(a);
        }
      },
      showTitleNum: function(t, n) {
        var o = n.data("max"),
          c = e.string.getRealLen(t.text());
        (c = Math.ceil(c / 2)),
          o >= c
            ? (n.addClass("c_tx_thin"),
              n.removeClass("comment__tips--warn_tx"),
              n.html(
                '剩余<span class="c_tx_highlight">' + (o - c) + "</span>字"
              ))
            : (n.removeClass("c_tx_thin"),
              n.addClass("comment__tips--warn_tx"),
              n.html(
                '超过<span class="c_tx_highlight">' + (c - o) + "</span>字"
              ));
        var i = getSelection();
        this.lastEditRange = i.getRangeAt(0);
      },
      showMusicianDetail: function() {
        console.log(detailHtml);
      },
      showConfirm: function(e, n, o, c, i) {
        t.async("js/common/dialog.js", function(t) {
          t.show({
            mode: "common",
            title: "QQ音乐",
            icon_type: 2,
            sub_title: e,
            desc: n,
            button_info1: {
              highlight: 1,
              title: o || "确定",
              fn: function() {
                t.hide(), c && c();
              }
            },
            button_info2: {
              highlight: 0,
              title: i || "取消",
              fn: function() {
                t.hide();
              }
            }
          });
        });
      },
      parseEmoji: function(t) {
        return t
          .replace(
            /&#91;em&#93;e(\d{1,8})(?:,\d{1,3},\d{1,3})?&#91;&#47;em&#93;/gi,
            function(t, e) {
              return (
                "<img src='//y.gtimg.cn/mediastyle/global/emoji/img/e" +
                e +
                ".png' />"
              );
            }
          )
          .replace(
            /\[em(?:2)?\]e(\d{1,8})(?:,\d{1,3},\d{1,3})?\[\/em(?:2)?\]/gi,
            function(t, e) {
              return (
                "<img src='//y.gtimg.cn/mediastyle/global/emoji/img/e" +
                e +
                ".png' />"
              );
            }
          );
      },
      pgvClickStat: function(t) {
        var e = this;
        p("y_new." + e.get("subSource") + "." + t);
      },
      remove: function() {
        var t = this,
          e = o(t.get("container")),
          n = o(t.get("outer_container"));
        try {
          e.data("comment", null),
            e.remove(),
            n.remove(".js_emoji_dialog"),
            t.destroy();
        } catch (c) {}
      },
      initEmojj: function() {
        var t = "",
          e = this;
        if (!m) {
          t = (function() {
            {
              var t,
                e = "";
              Array.prototype.join;
            }
            e +=
              '\r\n<!--表情浮层-->\r\n<div class="js_emoji_dialog" style="position:absolute;width:400px;z-index: 999;display:none">\r\n	<div class="popup_face c_popup">\r\n		<a href="javascript:;" class="popup__close js_emojj_close" title="关闭"><i class="popup__icon_close sprite"></i><i class="icon_txt">关闭</i></a>\r\n		<div class="mod_emoji">\r\n		    <div class="emoji__page">\r\n		    ';
            for (var n = 1; 66 >= n; n++)
              e +=
                '\r\n			<a href="javascript:;" class="emoji__item emoji__item' +
                (null == (t = n) ? "" : t) +
                ' js_emoji" data-key="' +
                (null == (t = n) ? "" : t) +
                '"></a>\r\n		    ';
            return (e += "\r\n		    </div>\r\n		</div>\r\n	</div>\r\n</div>");
          })({});
          var n = {
            1: "e400846",
            2: "e400874",
            3: "e400825",
            4: "e400847",
            5: "e400835",
            6: "e400873",
            7: "e400836",
            8: "e400867",
            9: "e400832",
            10: "e400837",
            11: "e400875",
            12: "e400831",
            13: "e400855",
            14: "e400823",
            15: "e400862",
            16: "e400844",
            17: "e400841",
            18: "e400830",
            19: "e400828",
            20: "e400833",
            21: "e400822",
            22: "e400843",
            23: "e400829",
            24: "e400824",
            25: "e400834",
            26: "e400877",
            27: "e400132",
            28: "e400181",
            29: "e401067",
            30: "e400186",
            31: "e400343",
            32: "e400116",
            33: "e400126",
            34: "e400613",
            35: "e401236",
            36: "e400622",
            37: "e400637",
            38: "e400643",
            39: "e400773",
            40: "e400102",
            41: "e401328",
            42: "e400420",
            43: "e400914",
            44: "e400408",
            45: "e400414",
            46: "e401121",
            47: "e400396",
            48: "e400384",
            49: "e401115",
            50: "e400402",
            51: "e400905",
            52: "e400906",
            53: "e400907",
            54: "e400562",
            55: "e400932",
            56: "e400644",
            57: "e400611",
            58: "e400185",
            59: "e400655",
            60: "e400325",
            61: "e400612",
            62: "e400198",
            63: "e401685",
            64: "e400631",
            65: "e400768",
            66: "e400432"
          };
          o("body")
            .off("click", ".js_emoji_dialog .js_emoji")
            .on("click", ".js_emoji_dialog .js_emoji", function() {
              var t = o(this).parents(".comment__input"),
                c = o(this).data("key");
              o(".js_reply_text", t).length > 0
                ? (e.setEmojiCursor(
                    o("#reply_text"),
                    "[em]" + (c in n ? n[c] : c) + "[/em]",
                    function() {
                      o("#reply_text_blur").hide(),
                        o("#reply_text").show(),
                        o("#reply_text").focus();
                    }
                  ),
                  e.showTitleNum(o(".js_reply_text"), o(".js_comment_tips")))
                : (e.setEmojiCursor(
                    o("#replyed_text"),
                    "[em]" + (c in n ? n[c] : c) + "[/em]",
                    function() {
                      o("#replyed_text_blur").hide(),
                        o("#replyed_text").show(),
                        o("#replyed_text").focus();
                    }
                  ),
                  e.showTitleNum(
                    o(".js_replyed_text"),
                    o(".js_replyed_comment_tips")
                  )),
                o(".js_emoji_dialog").hide(),
                o(".js_cmt_face").removeClass("comment__face--select");
            })
            .on("click", function(t) {
              var e = o(t.target);
              e.hasClass("js_cmt_face") ||
                e.parents(".js_cmt_face").length ||
                e.hasClass("icon_comment_face") ||
                (e.parents(".js_emoji_dialog").length &&
                  !e.hasClass("js_emojj_close") &&
                  !e.parents(".js_emojj_close").length) ||
                (o(".js_emoji_dialog").hide(),
                o(".js_cmt_face").removeClass("comment__face--select"));
            })
            .off("click", ".js_cmt_face")
            .on("click", ".js_cmt_face", function() {
              o(this).addClass("comment__face--select");
              var e = o(this).parents(".comment__input");
              0 == o(".js_emoji_dialog", e).length && o(this).after(t),
                o(".js_emoji_dialog", e).css({
                  top: "152px",
                  left: e.width() - o(".js_emoji_dialog", e).width() + "px"
                }),
                o(".js_emoji_dialog", e).show();
            }),
            (m = !0);
        }
      },
      bindEvents: function() {
        function n(t, e, n) {
          o.trim(t.text()) ? e && e() : n && n();
        }
        function a(t) {
          var e = [];
          return (
            o.each(t.children(), function(t, n) {
              var c = o(n).html();
              o(n).html(
                c
                  .replace(/<br><div>/gi, "\\n")
                  .replace(/<div>/gi, "\\n")
                  .replace(/<\/div>/gi, "")
              ),
                e.push(o(n).html());
            }),
            "" == o.trim(e.join("\\n"))
              ? t
                  .html()
                  .replace(/<br><div>/gi, "\\n")
                  .replace(/<div>/gi, "\\n")
                  .replace(/<\/div>/gi, "")
              : t.html().split("<div>")[0] + e.join("\\n")
          );
        }
        function s(t) {
          var e = l.get("container"),
            n = o(e).offset().top,
            c =
              document.body.scrollTop ||
              document.documentElement.scrollTop ||
              window.pageYOffset,
            i = window.innerHeight;
          !window.commentReportShow &&
            (2 * i) / 3 > n - c &&
            (t
              ? ((window.commentReportShow = !0), l.pgvClickStat("show"))
              : window.commentReportShowStart ||
                setTimeout(function() {
                  (window.commentReportShowStart = !0), s(!0);
                }, 1e3)),
            t && (window.commentReportShowStart = !1);
        }
        function m() {
          var t = 100,
            n = o("#report_comment_popup textarea"),
            c = o("#report_comment_popup .popup_report_write__num"),
            i = e.string.getRealLen(n.val());
          (i = Math.ceil(i / 2)),
            c.html(i + "/" + t),
            i > t
              ? (c.css({ color: "red" }), c.data("over", 1))
              : (c.css({ color: "" }), c.data("over", 0));
        }
        var l = this,
          p = l.get("container");
        o(p)
          .off("click", ".js_grade_score a")
          .on("click", ".js_grade_score a", function() {
            var t = o(this).data("score") || 0,
              e = o(".js_reply_grade"),
              n = e.data("cur"),
              c = 0;
            (c = 20 * t),
              n == t && (c = t = 0),
              e.data("cur", t),
              l.set("score", parseInt(t, 10)),
              c > 100 && (c = 100),
              e.width(c + "%"),
              l.pgvClickStat("grade");
          })
          .off("mouseover", ".js_grade_score a")
          .on("mouseover", ".js_grade_score a", function() {
            var t = o(this).data("score") || 0,
              e = o(".js_reply_grade"),
              n = 0;
            (n = 20 * t), n > 100 && (n = 100), e.width(n + "%");
          })
          .off("mouseout", ".js_grade_score a")
          .on("mouseout", ".js_grade_score a", function() {
            var t = l.get("score") || 0,
              e = o(".js_reply_grade"),
              n = 0;
            (n = 20 * t), n > 100 && (n = 100), e.width(n + "%");
          })
          .off("click", ".js_nick")
          .on("click", ".js_nick", function() {
            l.pgvClickStat("people"),
              MUSIC.util.gotoUser({
                target: "_blank",
                uin: o(this).data("uin")
              });
          })
          .off("click", ".js_approve")
          .on("click", ".js_approve", function() {
            if (l.checkLogin()) {
              var t = o(this),
                e = t.parent(".js_comment_opt").data("commentid");
              l.set("commentid", e),
                l.approveCmt_sending ||
                  (l.approveCmt(e, "通过审核" == t.html() ? 4 : 5),
                  l.pgvClickStat("approve"));
            }
          })
          .off("click", ".js_up_comment")
          .on("click", ".js_up_comment", function() {
            if (!l.checkLogin()) return !1;
            var t = o(this),
              e = t.parent(".js_comment_opt").data("commentid");
            l.set("commentid", e),
              "取消置顶" == t.html()
                ? l.upCmt_sending ||
                  (l.upCmt(e, "取消置顶" == t.html() ? 2 : 1),
                  l.pgvClickStat("up"))
                : l.showConfirm(
                    "确认置顶此评论？",
                    "置顶后，评论作者将收到通知。",
                    "置顶",
                    function() {
                      l.upCmt_sending ||
                        (l.upCmt(e, "取消置顶" == t.html() ? 2 : 1),
                        l.pgvClickStat("up"));
                    },
                    "关闭"
                  );
          })
          .off("click", ".js_feedback")
          .on("click", ".js_feedback", function() {
            if (!l.checkLogin()) return !1;
            {
              var t = o(this);
              t.data("cmtid"), l.get("commentStyle");
            }
            l.set("commentid", t.parent(".js_comment_opt").data("commentid")),
              o(".js_cmt_replyed").remove(),
              t
                .closest(".js_cmt_li")
                .find(".js_reply_container")
                .html(
                  (function(t) {
                    {
                      var e,
                        n = "";
                      Array.prototype.join;
                    }
                    return (n +=
                      '<div class="comment_repeat js_cmt_replyed" data-uin="' +
                      (null == (e = t.uin) ? "" : e) +
                      '" data-cmtid="' +
                      (null == (e = t.cmtid) ? "" : e) +
                      '">\r\n	<div class="comment__input">		\r\n			    <div class="comment__textarea js_comment__textarea c_bg_normal">\r\n				<div class="comment__textarea_inner">\r\n				    <!--focus评论框的时候将.comment__textarea_default模块隐藏，同时显示.comment__textarea_input-->\r\n				    <div class="comment__textarea_default c_tx_thin js_replyed_text_blur" name="" id="replyed_text_blur" contenteditable="true">回复@' +
                      (null == (e = t.nick) ? "" : _.escape(e)) +
                      '</div>\r\n				    <div id="replyed_text" class="js_replyed_text comment__textarea_input c_tx_normal" contenteditable="true" style="display:none;"></div>\r\n				</div>\r\n				<div class="comment__tips c_tx_thin js_replyed_comment_tips" data-max="300">剩余<span class="c_tx_highlight">300</span>字</div>\r\n			    </div>\r\n		<a class="comment__face js_cmt_face" href="javascript:;" data-type="replyed"><i class="icon_comment icon_comment_face"></i></a>\r\n		<div class="comment__tool">\r\n			<a class="comment__tool_btn mod_btn_green js_send_replyed" href="javascript:;">回复</a>\r\n			<a class="mod_btn comment__tool_btn js_send_cancel" href="javascript:;">取消</a>\r\n		</div>\r\n</div>');
                  })({
                    nick: t.data("nick"),
                    uin: t.data("uin"),
                    cmtid: t.data("cmtid"),
                    subSource: l.get("subSource")
                  })
                );
          })
          .off("click", ".js_cmt_praise")
          .on("click", ".js_cmt_praise", function() {
            if (!l.checkLogin()) return !1;
            var t = o(this);
            l.set("commentid", t.data("commentid")),
              l.praiseCmt_sending ||
                (l.praiseCmt(l.get("commentid"), t.hasClass("done") ? 2 : 1),
                l.pgvClickStat("like"));
          })
          .off("click", ".js_cmt_contribute")
          .on("click", ".js_cmt_contribute", function() {
            if (!l.checkLogin()) return !1;
            var t = o(this);
            if (-1 != t.html().indexOf("已投稿"))
              return i.show("小编已收到你的投稿啦", 3e3, 1), !1;
            var e = t.data("commentid");
            l.set("commentid", e);
            var n = {};
            (n.comment = {
              method: "UpdateHotComment",
              module: "GlobalComment.GlobalCommentWriteServer",
              param: { comment_id: e, type: 9, uin: c.getUin() + "" }
            }),
              r.post({
                url: "//u.y.qq.com/cgi-bin/musicu.fcg",
                data: JSON.stringify(n),
                charset: "utf-8",
                success: function(n) {
                  (n = JSON.parse(n)),
                    0 == n.code &&
                      n.comment &&
                      0 == n.comment.code &&
                      (t.before(
                        '<span class="comment__link c_tx_thin js_cmt_contribute" data-commentid="' +
                          e +
                          '">已投稿</span>'
                      ),
                      t.remove()),
                    i.show("投稿成功");
                },
                error: function() {}
              });
          })
          .off("click", ".js_cmt_delete")
          .on("click", ".js_cmt_delete", function() {
            if (!l.checkLogin()) return !1;
            var t = o(this);
            l.showConfirm(
              "确认删除评论？ ",
              null,
              "删除",
              function() {
                l.delCmt(t.parent(".js_comment_opt").data("commentid"));
              },
              "关闭"
            ),
              l.pgvClickStat("delete");
          })
          .off("click", ".js_all_good_comments")
          .on("click", ".js_all_good_comments", function() {
            var t = !0;
            l.renderMusicCmt(t),
              o(".js_all_good_comments").hide(),
              l.pgvClickStat(
                1 == l.get("isMuscritself")
                  ? "qqcriticsall"
                  : 1 == l.get("type")
                    ? "zhihucriticsall"
                    : "doubancriticsall"
              );
          })
          .off("click", ".js_show_all")
          .on("click", ".js_show_all", function() {
            var t = o(this),
              e = t.data("self"),
              n = t.data("detail"),
              c = {};
            if (e) {
              if (
                ((c = o.extend(!0, {}, n)), "string" == typeof c.muscritcontent)
              ) {
                var i = c.muscritcontent.split(/\r\n/g) || [];
                c.muscritcontent = o.extend(!0, [], i);
              }
              l.pgvClickStat("qqcritics"), l.showMusicianDetail(c);
            } else l.pgvClickStat(1 == l.get("type") ? "zhihucritics" : "doubancritics"), (window.location.href = n);
          })
          .off("keyup propertychange input", ".js_reply_text")
          .on("keyup propertychange input", ".js_reply_text", function() {
            l.showTitleNum(o(".js_reply_text"), o(".js_comment_tips"));
          })
          .off("keyup propertychange input", ".js_replyed_text")
          .on("keyup propertychange input", ".js_replyed_text", function() {
            l.showTitleNum(
              o(".js_replyed_text"),
              o(".js_replyed_comment_tips")
            );
          })
          .off("keyup propertychange input", ".js_comment__textarea")
          .on(
            "keyup propertychange input",
            ".js_comment__textarea",
            function() {
              l.showTitleNum(
                o(".comment__textarea_input", o(this)),
                o(".comment__tips", o(this))
              );
            }
          )
          .on("click", "", function(t) {
            var e = o(t.target),
              c = null;
            e.hasClass("js_comment__textarea") ||
            e.parents(".js_comment__textarea").length > 0
              ? ((c = e.hasClass("js_comment__textarea")
                  ? e
                  : e.parents(".js_comment__textarea")),
                o(".comment__textarea_default", c).hide(),
                o(".comment__textarea_input", c).show(),
                o(".comment__textarea_input", c).focus(),
                l.showTitleNum(
                  o(".comment__textarea_input", c),
                  o(".comment__tips", c)
                ))
              : n(
                  o(".comment__textarea_input"),
                  function() {},
                  function() {
                    o(".comment__textarea_default").show(),
                      o(".comment__textarea_input").hide();
                  }
                );
          })
          .on("blur", ".js_reply_text", function() {
            n(
              o("#reply_text"),
              function() {},
              function() {
                o("#reply_text_blur").show(), o("#reply_text").hide();
              }
            );
          })
          .on("blur", ".js_replyed_text", function() {
            setTimeout(function() {
              n(
                o("#replyed_text"),
                function() {},
                function() {
                  o("#replyed_text_blur").show(), o("#replyed_text").hide();
                }
              );
            }, 100);
          })
          .off("click", ".js_send_reply")
          .on("click", ".js_send_reply", function() {
            if (!l.checkLogin()) return !1;
            var t = o("#reply_text");
            t.html(a(t));
            var e = t.text(),
              n = t,
              c = (o(".js_reply_text"),
              { content: e || "", score: l.get("score") });
            l.sendCmt(
              c,
              function() {
                n.html(""),
                  o("#reply_text_blur").show(),
                  o("#reply_text").hide();
              },
              function() {
                t.html(t.html().replace(/\\n/gi, "<div><br></div>"));
              }
            ),
              l.pgvClickStat("comment");
          })
          .off("click", ".js_send_replyed")
          .on("click", ".js_send_replyed", function() {
            if (!l.checkLogin()) return !1;
            var t = o("#replyed_text"),
              e = t.text();
            t.html(a(t));
            var n = t,
              c = n.parents(".js_cmt_li"),
              i = {
                content: e || "",
                commentid: t.parents(".js_cmt_replyed").data("cmtid"),
                score: l.get("score")
              };
            i.middlecommentcontent = [];
            var r = c.find(".js_nick_only").html(),
              s = c.find(".js_nick_only").data("uin"),
              m = {
                replynick: !0,
                replyuin: !0,
                replyednick: r,
                replyeduin: s,
                subcommentcontent: i.content
              };
            if (
              (i.middlecommentcontent.push(m),
              c.find(".comment__text--history").length > 0)
            ) {
              i.rootcommentcontent = c.find(".comment__text--history").html();
              var _ = c.find(".js_middle .js_nick");
              (m = { replynick: r, replyuin: s }),
                _.each(function(t, e) {
                  m.replynick &&
                    m.replyednick &&
                    (i.middlecommentcontent.push(m), (m = {})),
                    o(e).hasClass("js_replyed_nick")
                      ? ((m.replyednick = o(this).html()),
                        (m.replyeduin = o(this).data("uin")),
                        m.subcommentcontent ||
                          (m.subcommentcontent = o(this)
                            .next(".js_subcomment")
                            .html()))
                      : o(e).hasClass("js_reply_nick") &&
                        ((m.replynick = o(this).html()),
                        (m.replyuin = o(this).data("uin"))),
                    m.replynick &&
                      m.replyednick &&
                      (i.middlecommentcontent.push(m), (m = {}));
                });
            } else i.rootcommentcontent = c.find(".js_hot_text").html();
            l.sendCmt(
              i,
              function() {
                t.html(""),
                  setTimeout(function() {
                    o("#replyed_text_blur").show(),
                      o("#replyed_text").hide(),
                      n.closest(".js_cmt_replyed").hide();
                  }, 350);
              },
              function() {
                $text.html($text.html().replace(/\\n/gi, "<div><br></div>"));
              }
            ),
              l.pgvClickStat("reply");
          })
          .off("mouseover", ".js_cmt_li")
          .on("mouseover", ".js_cmt_li", function() {
            var t = o(this);
            t.addClass("hover");
          })
          .off("mouseout", ".js_cmt_li")
          .on("mouseout", ".js_cmt_li", function() {
            var t = o(this);
            t.removeClass("hover");
          })
          .off("click", ".js_send_cancel")
          .on("click", ".js_send_cancel", function() {
            var t = o(this);
            t.closest(".js_cmt_replyed").remove(),
              l.pgvClickStat("replycancle");
          })
          .off("click", ".js_order_type")
          .on("click", ".js_order_type", function() {
            var t = o(this);
            o(".js_order_type").removeClass("c_tx_current"),
              t.addClass("c_tx_current");
            var e = t.data("type");
            l.setPager(e, 0, !1);
          })
          .off("click", ".js_get_more_hot")
          .on("click", ".js_get_more_hot", function() {
            var t = parseInt(o(this).data("loading"));
            return 1 == t
              ? !1
              : (o(this).data("loading", 1), l.getMoreHotComment(), void 0);
          }),
          o(document)
            .off("click", ".js_rule_btn")
            .on("click", ".js_rule_btn", function() {
              var t = window.open(
                "https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=120574&mmkey=",
                "_blank"
              );
              t && (t.opener = null);
            })
            .off("click", ".js_close_comment_rule")
            .on("click", ".js_close_comment_rule", function() {
              o("#comment_popup").hide();
            })
            .on("click", "", function(t) {
              var e = o(t.target);
              e.hasClass("js_rule_btn") || o("#comment_popup").hide(),
                e.hasClass("js_report_comment") ||
                  0 != e.parents("#report_comment_popup").length ||
                  o("#report_comment_popup").hide();
            })
            .off("click", ".js_report_comment")
            .on("click", ".js_report_comment", function(e) {
              var n = o(this),
                c = n.parent(".js_comment_opt").data("commentid");
              l.set("commentid", c),
                0 == o("#report_comment_popup").length &&
                  (o("body").append(
                    (function() {
                      {
                        var t = "";
                        Array.prototype.join;
                      }
                      return (t +=
                        '<!-- 评论举报 -->\r\n    <div class="mod_popup_box" id="report_comment_popup" style="display:none;">\r\n        <div class="mod_popup popup_report c_popup" style="position: absolute;">\r\n            <div class="popup__hd">\r\n                <h2 class="popup__tit">评论举报</h2>\r\n                <a href="javascript:;" class="popup__close js_close_report_comment_popup" title="关闭"><i class="popup__icon_close"></i><i class="icon_txt">关闭</i></a>\r\n            </div>\r\n            <div class="popup__bd">\r\n                <div class="popup__bd_box">\r\n                    <ul class="popup_report_list">\r\n                        <!-- 通过获取radio信息提交 -->\r\n                        <!-- 选中加 check -->\r\n                        <li class="popup_report_list__item">\r\n                            <span class="popup_report_list__radio">\r\n                                <input type="radio" name="wrong" id="item1" class="popup_report_list__input">\r\n                            </span>\r\n                            <label for="item1">无意义的评论</label>\r\n                        </li>\r\n                        <li class="popup_report_list__item">\r\n                            <span class="popup_report_list__radio">\r\n                                <input type="radio" name="wrong" id="item2" class="popup_report_list__input">\r\n                            </span>\r\n                            <label for="item2">色情暴力</label>\r\n                        </li>\r\n                        <li class="popup_report_list__item">\r\n                            <span class="popup_report_list__radio">\r\n                                <input type="radio" name="wrong" id="item3" class="popup_report_list__input">\r\n                            </span>\r\n                            <label for="item3">政治反动</label>\r\n                        </li>\r\n                        <li class="popup_report_list__item">\r\n                            <span class="popup_report_list__radio">\r\n                                <input type="radio" name="wrong" id="item4" class="popup_report_list__input">\r\n                            </span>\r\n                            <label for="item4">恶意谩骂攻击</label>\r\n                        </li>\r\n                        <li class="popup_report_list__item">\r\n                            <span class="popup_report_list__radio">\r\n                                <input type="radio" name="wrong" id="item5" class="popup_report_list__input">\r\n                            </span>\r\n                            <label for="item5">营销广告</label>\r\n                        </li>\r\n                        <li class="popup_report_list__item check">\r\n                            <span class="popup_report_list__radio">\r\n                                <input type="radio" name="wrong" id="item6" class="popup_report_list__input">\r\n                            </span>\r\n                            <label for="item6">其他</label>\r\n                        </li>\r\n                    </ul>\r\n                    <div class="popup_report_write c_popup__disabled">\r\n                        <textarea class="popup_report_write__content" placeholder="请在些说明情况"></textarea>\r\n                        <div class="popup_report_write__num">0/100</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <footer class="popup__ft">\r\n                <button class="mod_btn c_popup__btn_skin js_submit_report_comment_popup" href="javascript:;">确定</button>\r\n                <button class="mod_btn c_popup__btn js_close_report_comment_popup" href="javascript:;">取消</button>\r\n            </footer>\r\n        </div>\r\n    </div>\r\n');
                    })({ cmtid: c })
                  ),
                  o("#report_comment_popup textarea").on(
                    "keyup input propertychange",
                    function() {
                      m();
                    }
                  )),
                t.load(
                  "//y.gtimg.cn/mediastyle/macmusic_v4/popup.css?max_age=25920000&v=20171115",
                  function() {
                    o("#report_comment_popup").show();
                    var t =
                        e.clientY -
                        o("#report_comment_popup .c_popup").height() / 2 +
                        document.body.scrollTop,
                      n =
                        window.innerWidth / 2 -
                        o("#report_comment_popup .c_popup").width() / 2;
                    o("#report_comment_popup .c_popup").css({
                      left: (n > 0 ? n : 0) + "px",
                      top: (t > 0 ? t : 0) + "px"
                    });
                  }
                );
            })
            .off("click", "#report_comment_popup input")
            .on("click", "#report_comment_popup input", function() {
              o(this)
                .parents(".popup_report_list__item")
                .hasClass("check") ||
                (o(
                  "#report_comment_popup .popup_report_list__item"
                ).removeClass("check"),
                o(this)
                  .parents(".popup_report_list__item")
                  .addClass("check"));
            })
            .off("click", ".js_close_report_comment_popup")
            .on("click", ".js_close_report_comment_popup", function() {
              o("#report_comment_popup").hide(),
                o("#report_comment_popup textarea").val(""),
                o("#report_comment_popup .popup_report_list__item").removeClass(
                  "check"
                ),
                o("#item6")
                  .parents(".popup_report_list__item")
                  .addClass("check");
            })
            .off("click", ".js_submit_report_comment_popup")
            .on("click", ".js_submit_report_comment_popup", function() {
              var t = o.trim(o("#report_comment_popup .check").text()),
                n = o.trim(o("#report_comment_popup textarea").val());
              return "其它" != t || n
                ? 1 ==
                  o("#report_comment_popup .popup_report_write__num").data(
                    "over"
                  )
                  ? (e.popup.show("字数超过100字限制", 3e3, 1), !1)
                  : (o("#report_comment_popup").hide(),
                    o("#report_comment_popup textarea").val(""),
                    o(
                      "#report_comment_popup .popup_report_list__item"
                    ).removeClass("check"),
                    o("#item6")
                      .parents(".popup_report_list__item")
                      .addClass("check"),
                    m(),
                    l.reportCmt(l.get("commentid"), t, n),
                    void 0)
                : (e.popup.show("请正确填写举报内容！", 3e3, 1), !1);
            })
            .on("scroll", function() {
              s();
            }),
          s();
      },
      Statics: {
        init: function(t) {
          try {
            var e = o(t.container).data("comment");
            e = null;
          } catch (n) {}
          return new d(t);
        }
      }
    });
  return d;
});

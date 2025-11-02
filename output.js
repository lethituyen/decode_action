//Sun Nov 02 2025 05:52:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
$(function () {
  $(".nav li").hover(function () {
    $(this).children(".sub_nav").stop().slideDown();
    $(this).addClass("hover");
  }, function () {
    $(this).children(".sub_nav").stop().slideUp();
    $(this).removeClass("hover");
  });
  $(".navM .btnMenu").click(function () {
    $(".headerW").css("display", "block");
  });
  $(".headerW .close").click(function () {
    console.log("aaaa");
    $(".headerW").css("display", "none");
  });
  $(".navM ul li .title").click(function () {
    $(".navM li .arrow").css("display") == "block" && ($(this).parent().hasClass("show") ? $(this).parent().removeClass("show") : ($(this).parent().siblings().removeClass("show"), $(this).parent().addClass("show")));
  });
  $(".btnRW .btnReadMore").click(function () {
    $(".chapBox .content").addClass("more");
  });
  $(".chapBox .tab li").click(function () {
    var _0x2eb1f9 = $(this).index();
    $(this).siblings().removeClass("cur");
    $(this).addClass("cur");
    var _0xe704e4 = $(this).parent().parent().parent().children(".conCZ").children(".conC");
    _0xe704e4.eq(_0x2eb1f9).css("display", "block");
    _0xe704e4.eq(_0x2eb1f9).siblings().css("display", "none");
  });
  $(".popupAsk .popupBox .close").click(function () {
    $(this).parent().parent().removeClass("show");
  });
  $(".btnAskBook").click(function () {
    $(".popupAsk").addClass("show");
  });
  $(".btnBlue").click(function () {
    var _0x5e2cc4 = $(this).parents("form");
    var _0x35bbfc = _0x5e2cc4.find("input[class=\"input\"]").val();
    var _0x4b5a57 = _0x5e2cc4.find("textarea[class=\"textarea\"]").val();
    if (!_0x35bbfc || _0x35bbfc == "" || _0x35bbfc == undefined) {
      layer.msg("请输入书籍名称", {
        "icon": 2,
        "timer": 1000
      });
      return;
    }
    $.post("/index.php?action=askBook", {
      "bookName": _0x35bbfc,
      "subordinate": _0x4b5a57
    }, function (_0x27dd44) {
      if (_0x27dd44.code == 0) {
        layer.msg(_0x27dd44.msg, {
          "icon": 1,
          "timer": 1000
        });
        _0x5e2cc4.parents(".popupAsk").removeClass("show");
        return;
      }
      layer.msg(_0x27dd44.msg, {
        "icon": 2,
        "timer": 1000
      });
    }, "json");
  });
  $(".popupError .popupBox .close").click(function () {
    $(this).parent().parent().removeClass("show");
  });
  $(".btnError").click(function () {
    $(".popupError").addClass("show");
  });
  $(".popupError .popupBox .list li").click(function () {
    $(this).toggleClass("sel");
  });
  $(".topM .btnSet").click(function () {
    $(".popupSet").addClass("show");
  });
  $(".popupSet .popupBox .close").click(function () {
    $(this).parent().parent().removeClass("show");
  });
  $(".recoBox .tab li").click(function () {
    {
      var _0x5e0afd = $(this).index();
      $(this).siblings().removeClass("cur");
      $(this).addClass("cur");
      var _0x1b67a0 = $(this).parent().parent().parent().children(".conREZ").children(".conRE");
      _0x1b67a0.eq(_0x5e0afd).addClass("show");
      _0x1b67a0.eq(_0x5e0afd).siblings().removeClass("show");
    }
  });
  $(".recoBox2 .tab li").click(function () {
    {
      var _0x25e638 = $(this).index();
      $(this).siblings().removeClass("cur");
      $(this).addClass("cur");
      var _0x34533c = $(this).parent().parent().parent().children(".conREZ").children(".conRE");
      _0x34533c.eq(_0x25e638).addClass("show");
      _0x34533c.eq(_0x25e638).siblings().removeClass("show");
    }
  });
  $(".selBox .btn").click(function () {
    event.stopPropagation();
    $(".selBox .btn").not($(this)).parent().children(".dropDown").css("display", "none");
    $(".selBox .btn").not($(this)).parent().removeClass("show");
    $(this).parent().hasClass("show") ? ($(this).parent().children(".dropDown").css("display", "none"), $(this).parent().removeClass("show")) : ($(this).parent().siblings().children(".dropDown").css("display", "none"), $(this).parent().siblings().removeClass("show"), $(this).parent().children(".dropDown").css("display", "block"), $(this).parent().addClass("show"));
  });
  var _0x460a1c = 1;
  $(".selBox .dropDown li").click(function () {
    $(this).parent().parent().css("display", "none");
    $(this).parent().parent().parent().removeClass("show");
    $(this).parent().parent().parent().children(".btn").children(".txt").text($(this).text());
    $(this).parent().parent().parent().parent().parent().children(".downW").children(".downabout").text($(this).attr("data-info"));
    var _0x41fa95 = $(this).data("p");
    var _0xebd4ec = $(this).parents(".dropDown").data("aid");
    _0x41fa95 != _0x460a1c && (_0x460a1c = _0x41fa95, loadChapterPage(_0xebd4ec, _0x460a1c));
  });
  $(".next").click(function () {
    if (_0x460a1c >= $(".selBox .dropDown li").length) return;
    var _0x1c942e = _0x460a1c + 1;
    var _0x32a66b = $(".selBox .dropDown li:eq(" + (_0x1c942e - 1) + ")");
    $(this).parent().children(".selBox").children(".btn").children(".txt").text($(_0x32a66b).text());
    var _0x47bedf = $(this).parent().find(".selBox .dropDown").data("aid");
    _0x460a1c = _0x1c942e;
    loadChapterPage(_0x47bedf, _0x460a1c);
  });
  $(".upper").click(function () {
    {
      if (_0x460a1c <= 1) return;
      var _0x5863e0 = _0x460a1c - 1;
      var _0x47551e = $(".selBox .dropDown li:eq(" + (_0x5863e0 - 1) + ")");
      $(this).parent().children(".selBox").children(".btn").children(".txt").text($(_0x47551e).text());
      var _0x3d79c3 = $(this).parent().find(".selBox .dropDown").data("aid");
      _0x460a1c = _0x5863e0;
      loadChapterPage(_0x3d79c3, _0x460a1c);
    }
  });
  $("body").on("click", ".btnSearch", function () {
    var _0x3d56ed = $("input[name=\"keyword\"]").val();
    if (!_0x3d56ed) {
      layer.msg("è¯·è¾“å…¥å…³é”®è¯", {
        "icon": 2,
        "timer": 1000
      });
      return false;
    }
    _0x3d56ed = encryptText(_0x3d56ed);
    window.location.href = search_url.replace("{keyword}", _0x3d56ed);
  });
  var _0x3f982b = $(".selBox .dropDown li.cur");
  _0x3f982b.each(function () {
    $(this).parent().parent().parent().children(".btn").children(".txt").text($(this).text());
  });
  $("body").click(function () {
    $(".selBox").removeClass("show");
    $(".selBox .dropDown").css("display", "none");
  });
});
function openUrl(_0x15cf34 = "") {
  let _0x4050e0 = CryptoJS.enc.Base64.parse(_0x15cf34),
    _0x2b9145 = CryptoJS.lib.WordArray.create(_0x4050e0.words.slice(0, 4), 16),
    _0x52b55b = CryptoJS.lib.WordArray.create(_0x4050e0.words.slice(4), _0x4050e0.sigBytes - 16),
    _0x5d940e = navigator.userAgent.toLowerCase(),
    _0x2a56dc = CryptoJS.enc.Base64.parse(num);
  numStr = CryptoJS.enc.Utf8.stringify(_0x2a56dc);
  let _0x5bc7c0 = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(_0x5d940e + numStr).toString().toLowerCase()),
    _0x1d43c1 = CryptoJS.AES.decrypt({
      "ciphertext": _0x52b55b
    }, _0x5bc7c0, {
      "iv": _0x2b9145,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x1d43c1.toString(CryptoJS.enc.Utf8);
}
function toUrl(_0x1d4acf = "", _0x18bab3 = "") {
  if (_0x18bab3) {
    {
      _0x18bab3 = openUrl(_0x18bab3);
      if (_0x18bab3) upclick(_0x18bab3);
    }
  }
  window.open(openUrl(_0x1d4acf));
}
function upclick(_0x497b71 = "") {
  $.post("/index.php?action=upclick", {
    "bookId": _0x497b71
  }, function (_0x2f56d5) {
    {
      if (_0x2f56d5.code == 0) {}
    }
  }, "json");
}
function handleEnter(_0x5e6d4d) {
  var _0x33edc8 = _0x5e6d4d.keyCode ? _0x5e6d4d.keyCode : _0x5e6d4d.which;
  if (_0x33edc8 == "13") {
    {
      var _0x587af9 = $("input[name=\"keyword\"]").val();
      if (!_0x587af9) {
        layer.msg("è¯·è¾“å…¥å…³é”®è¯", {
          "icon": 2,
          "timer": 1000
        });
        return false;
      }
      _0x587af9 = encryptText(_0x587af9);
      window.location.href = search_url.replace("{keyword}", _0x587af9);
    }
  }
}
function search() {
  var _0x42ab27 = $("input[name=\"keyword\"]").val();
  if (!_0x42ab27) return layer.msg("请输入关键词", {
    "icon": 2,
    "timer": 1000
  }), false;
  _0x42ab27 = encryptText(_0x42ab27);
  window.location.href = search_url.replace("{keyword}", _0x42ab27);
}
function encryptText(_0x82c8bd, _0x296e4e = "zc89s30ipHG2Dw") {
  const _0x45c20c = CryptoJS.enc.Utf8.parse(_0x296e4e.padEnd(32, "\0")),
    _0x299b69 = CryptoJS.enc.Utf8.parse(_0x296e4e.padEnd(16, "\0")),
    _0x833272 = CryptoJS.AES.encrypt(_0x82c8bd, _0x45c20c, {
      "iv": _0x299b69,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return encodeURIComponent(_0x833272.toString());
}
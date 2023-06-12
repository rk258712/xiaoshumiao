if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$z = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$y = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-7920e3e0"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$x = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor, "border-bottom-color": $options.themeColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-26544265"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$w = {
    name: "UniSwiperDot",
    emits: ["clickItem"],
    props: {
      info: {
        type: Array,
        default() {
          return [];
        }
      },
      current: {
        type: Number,
        default: 0
      },
      dotsStyles: {
        type: Object,
        default() {
          return {};
        }
      },
      // 类型 ：default(默认) indexes long nav
      mode: {
        type: String,
        default: "default"
      },
      // 只在 nav 模式下生效，变量名称
      field: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dots: {
          width: 6,
          height: 6,
          bottom: 10,
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          selectedBackgroundColor: "#333",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        }
      };
    },
    watch: {
      dotsStyles(newVal) {
        this.dots = Object.assign(this.dots, this.dotsStyles);
      },
      mode(newVal) {
        if (newVal === "indexes") {
          this.dots.width = 14;
          this.dots.height = 14;
        } else {
          this.dots.width = 6;
          this.dots.height = 6;
        }
      }
    },
    created() {
      if (this.mode === "indexes") {
        this.dots.width = 12;
        this.dots.height = 12;
      }
      this.dots = Object.assign(this.dots, this.dotsStyles);
    },
    methods: {
      clickItem(index) {
        this.$emit("clickItem", index);
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-swiper__warp" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.mode === "default" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "default"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                style: vue.normalizeStyle({
                  "width": (index === $props.current ? $data.dots.width * 2 : $data.dots.width) + "px",
                  "height": $data.dots.width / 2 + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border-radius": "0px"
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-bar"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "dot" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "dot"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                style: vue.normalizeStyle({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "round" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "round"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                class: vue.normalizeClass([[index === $props.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"]),
                style: vue.normalizeStyle({
                  "width": (index === $props.current ? $data.dots.width * 3 : $data.dots.width) + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index
              }, null, 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "nav" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: "nav",
          style: vue.normalizeStyle({ "background-color": $props.dotsStyles.backgroundColor, "bottom": "0" }),
          class: "uni-swiper__dots-box uni-swiper__dots-nav"
        },
        [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "color": $props.dotsStyles.color }),
              class: "uni-swiper__dots-nav-item"
            },
            vue.toDisplayString($props.current + 1 + "/" + $props.info.length + " " + $props.info[$props.current][$props.field]),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "indexes" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: "indexes",
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                style: vue.normalizeStyle({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "color": index === $props.current ? $data.dots.selectedColor : $data.dots.color,
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-indexes"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-swiper__dots-indexes-text" },
                  vue.toDisplayString(index + 1),
                  1
                  /* TEXT */
                )
              ], 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-0667e3db"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
  const _sfc_main$v = {
    name: "UniRate",
    props: {
      isFill: {
        // 星星的类型，是否镂空
        type: [Boolean, String],
        default: true
      },
      color: {
        // 星星未选中的颜色
        type: String,
        default: "#ececec"
      },
      activeColor: {
        // 星星选中状态颜色
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        // 星星禁用状态颜色
        type: String,
        default: "#c0c0c0"
      },
      size: {
        // 星星的大小
        type: [Number, String],
        default: 24
      },
      value: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      modelValue: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      max: {
        // 最大评分
        type: [Number, String],
        default: 5
      },
      margin: {
        // 星星的间距
        type: [Number, String],
        default: 0
      },
      disabled: {
        // 是否可点击
        type: [Boolean, String],
        default: false
      },
      readonly: {
        // 是否只读
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        // 是否显示半星
        type: [Boolean, String],
        default: false
      },
      touchable: {
        // 是否支持滑动手势
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i = 0; i < this.max; i++) {
          if (floorValue > i) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e) {
      },
      mousemove(e) {
      },
      mouseleave(e) {
      },
      /**
       * 获取星星个数
       */
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (isNaN(size)) {
          return new Error("size 属性只能设置为数字");
        }
        const rateMoveRange = clientX - this._rateBoxLeft;
        let index = parseInt(rateMoveRange / (size + this.marginNumber));
        index = index < 0 ? 0 : index;
        index = index > this.max ? this.max : index;
        const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
        let value = 0;
        if (this._oldValue === index && !this.PC)
          return;
        this._oldValue = index;
        if (this.allowHalf) {
          if (range > size / 2) {
            value = index + 1;
          } else {
            value = index + 0.5;
          }
        } else {
          value = index + 1;
        }
        value = Math.max(0.5, Math.min(value, this.max));
        this.valueSync = value;
        this._onChange();
      },
      /**
       * 触发动态修改
       */
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      /**
       * 获取星星距离屏幕左侧距离
       */
      _getSize() {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
          }
        });
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          ref: "uni-rate",
          class: "uni-rate"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.stars, (star, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
                  style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
                  key: index,
                  onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
                  onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
                  onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
                  onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
                  onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    color: $props.color,
                    size: $props.size,
                    type: $props.isFill ? "star-filled" : "star"
                  }, null, 8, ["color", "size", "type"]),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ width: star.activeWitch }),
                      class: "uni-rate__icon-on"
                    },
                    [
                      vue.createVNode(_component_uni_icons, {
                        color: $props.disabled ? $props.disabledColor : $props.activeColor,
                        size: $props.size,
                        type: "star-filled"
                      }, null, 8, ["color", "size"])
                    ],
                    4
                    /* STYLE */
                  )
                ],
                38
                /* CLASS, STYLE, HYDRATE_EVENTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const UserKey = "user";
  function getUser() {
    return uni.getStorageSync(UserKey);
  }
  function setUser(user) {
    return uni.setStorageSync(UserKey, user);
  }
  const TokenKey = "token";
  function getToken() {
    return uni.getStorageSync(TokenKey);
  }
  function setToken(token) {
    return uni.setStorageSync(TokenKey, token);
  }
  function isLogin() {
    return getToken();
  }
  const _sfc_main$u = {
    data() {
      return {
        BKType: uni.getStorageSync("BKType"),
        data: {},
        ad: [],
        courseCategory: [],
        free: [],
        pay: [],
        hot: [],
        current: 0,
        mode: "round",
        user: null,
        dotsStyles: {
          border: "1px #C0C0C0 solid",
          backgroundColor: "#C0C0C0",
          selectedBackgroundColor: "#5F7FC0",
          selectedBorder: "1px #5F7FC0 solid",
          width: 6,
          height: 2,
          bottom: 0
        }
      };
    },
    onLoad() {
      this.getIndex();
    },
    onShow() {
      this.user = getUser();
      let type = uni.getStorageSync("BKType");
      if (this.BKType != type) {
        this.BKType = type;
        this.getIndex();
      }
    },
    methods: {
      switchType() {
        if (this.BKType == 1) {
          this.BKType = 2;
        } else {
          this.BKType = 1;
        }
        uni.setStorageSync("BKType", this.BKType);
        this.getIndex();
      },
      goInformation() {
        formatAppLog("log", "at pages/study/study.vue:180", "跳转最新资讯");
        uni.navigateTo({
          url: "/pages/study/infomation/infomation"
        });
      },
      goSearch() {
        if (!isLogin()) {
          uni.navigateTo({
            url: "/pages/login/login"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/study/search/search"
        });
      },
      change(e) {
        this.current = e.detail.current;
      },
      clickGold(e) {
        this.goCourseList({
          "typeId": e.id
        });
      },
      getIndex() {
        let that = this;
        this.$request.get("/api/index/index", null).then((res) => {
          that.data = res.data;
          that.ad = res.data.ad;
          that.courseCategory = res.data.courseCategory;
          that.free = res.data.free;
          that.pay = res.data.pay;
          that.hot = res.data.hot;
        }, function(err) {
          formatAppLog("log", "at pages/study/study.vue:214", err);
        });
      },
      goFreeCourseList() {
        this.goCourseList({
          "isPay": 0
        });
      },
      goPayCourseList() {
        this.goCourseList({
          "isPay": 1
        });
      },
      goHotCourseList() {
        this.goCourseList({
          "isHot": 1
        });
      },
      goCourseList(data) {
        uni.navigateTo({
          url: "/pages/study/courseList/courseList?data=" + encodeURIComponent(JSON.stringify(data))
        });
      },
      goCourseDetail(item) {
        if (!isLogin()) {
          uni.navigateTo({
            url: "/pages/login/login"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/study/courseDetail/courseDetail?data=" + encodeURIComponent(JSON.stringify(item))
        });
      }
    },
    computed: {
      hotPrice() {
        return function(item) {
          let price = item.price;
          if (this.user.isVip == 1) {
            price = item.vipPrice;
          }
          return price.toFixed(2);
        };
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    const _component_uni_swiper_dot = resolveEasycom(vue.resolveDynamicComponent("uni-swiper-dot"), __easycom_2$1);
    const _component_van_icon = vue.resolveComponent("van-icon");
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        statusBar: "",
        border: false,
        fixed: "true",
        rightWidth: "50vw",
        leftWidth: "50vw",
        height: "60px"
      }, {
        left: vue.withCtx(() => [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.switchType && $options.switchType(...args)),
            class: "d-flex align-items-center"
          }, [
            vue.createElementVNode(
              "view",
              { class: "left-title" },
              vue.toDisplayString($data.BKType == 1 ? "艺考学习" : "兴趣培训"),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "swich-bg" },
              vue.toDisplayString($data.BKType == 1 ? "切换兴趣版" : "切换艺考版"),
              1
              /* TEXT */
            )
          ])
        ]),
        right: vue.withCtx(() => [
          vue.createElementVNode("view", {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.goInformation && $options.goInformation(...args)),
            class: "d-flex align-items-center"
          }, [
            vue.createElementVNode("view", { class: "right-title" }, "最新资讯"),
            vue.createElementVNode("image", {
              class: "nav-information",
              src: "/static/study/nav_information.png"
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "search-view" }, [
        vue.createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.goSearch && $options.goSearch(...args)),
          class: "search-placeholder flex-fill fo-14"
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "search",
            color: "#777777",
            style: { "margin-right": "10px" }
          }),
          vue.createTextVNode("搜索课程")
        ])
      ]),
      $data.ad.length != 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "swiper-bg"
      }, [
        vue.createVNode(_component_uni_swiper_dot, {
          info: $data.ad,
          current: $data.current,
          field: "content",
          mode: $data.mode,
          "dots-styles": $data.dotsStyles
        }, {
          default: vue.withCtx(() => [
            $data.ad.length != 0 ? (vue.openBlock(), vue.createElementBlock(
              "swiper",
              {
                key: 0,
                class: "swiper",
                circular: "",
                autoplay: "false",
                interval: "3000",
                onChange: _cache[3] || (_cache[3] = (...args) => $options.change && $options.change(...args))
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.ad, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", { class: "swiper-item" }, [
                      vue.createElementVNode("image", {
                        class: "ad",
                        src: _ctx.$request.imageBaseUrl + item.imgurl
                      }, null, 8, ["src"])
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ],
              32
              /* HYDRATE_EVENTS */
            )) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["info", "current", "mode", "dots-styles"])
      ])) : vue.createCommentVNode("v-if", true),
      $data.courseCategory.length != 0 ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
        key: 1,
        "scroll-x": "true",
        "show-scrollbar": "false",
        class: "gold-scroll-view"
      }, [
        vue.createElementVNode("view", { class: "gold-bg" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.courseCategory, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "gold-item",
                onClick: ($event) => $options.clickGold(item)
              }, [
                vue.createElementVNode("image", {
                  class: "gold-item-image",
                  src: _ctx.$request.imageBaseUrl + item.iconPath
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  { class: "gold-item-title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ])) : vue.createCommentVNode("v-if", true),
      $data.free.length != 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("view", { class: "section-title-bg" }, [
            vue.createElementVNode("view", { class: "section-title-line" }, "免费课程")
          ]),
          vue.createElementVNode("view", {
            class: "more-course",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.goFreeCourseList && $options.goFreeCourseList(...args))
          }, [
            vue.createElementVNode("image", {
              class: "more-course-icon",
              src: "/static/study/more_course.png"
            }),
            vue.createElementVNode("text", { class: "more-course-title" }, "更多好课"),
            vue.createVNode(_component_van_icon, {
              name: "arrow",
              color: "#969696",
              size: "12"
            })
          ])
        ]),
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          "show-scrollbar": "false",
          class: "free-scroll-view"
        }, [
          vue.createElementVNode("view", { class: "free-bg" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.free, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "free-item",
                  onClick: ($event) => $options.goCourseDetail(item)
                }, [
                  vue.createElementVNode("image", {
                    class: "free-item-image",
                    src: _ctx.$request.imageBaseUrl + item.iconPath
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    { class: "free-item-title" },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      $data.pay.length != 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("view", { class: "section-title-bg" }, [
            vue.createElementVNode("view", { class: "section-title-line" }, "付费课程")
          ]),
          vue.createElementVNode("view", {
            class: "more-course",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.goPayCourseList && $options.goPayCourseList(...args))
          }, [
            vue.createElementVNode("image", {
              class: "more-course-icon",
              src: "/static/study/more_course.png"
            }),
            vue.createElementVNode("text", { class: "more-course-title" }, "更多好课"),
            vue.createVNode(_component_van_icon, {
              name: "arrow",
              color: "#969696",
              size: "12"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "pay-bg" }, [
          vue.createElementVNode("view", { class: "pay-tip-bg" }, [
            vue.createElementVNode("text", { class: "pay-tip" }, [
              vue.createTextVNode("音你而来"),
              vue.createElementVNode("text", { class: "fo-14" }, "\\n乐理基础精讲课程")
            ]),
            vue.createElementVNode("view", { class: "pay-score" }, "9.0分")
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-x": "true",
            "show-scrollbar": "false",
            class: "pay-scroll-view"
          }, [
            vue.createElementVNode("view", { class: "pay-scroll-bg" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.pay, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "pay-item",
                    onClick: ($event) => $options.goCourseDetail(item)
                  }, [
                    vue.createElementVNode("image", {
                      class: "pay-item-image",
                      src: _ctx.$request.imageBaseUrl + item.iconPath
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      { class: "pay-item-title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      $data.hot.length != 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 4 }, [
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("view", { class: "section-title-bg" }, [
            vue.createElementVNode("view", { class: "section-title-line" }, "热门课程")
          ]),
          vue.createElementVNode("view", {
            class: "more-course",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.goHotCourseList && $options.goHotCourseList(...args))
          }, [
            vue.createElementVNode("text", { class: "more-course-title" }, "更多课程"),
            vue.createVNode(_component_van_icon, {
              name: "arrow",
              color: "#969696",
              size: "12"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "hot-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.hot, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "hot-item",
                onClick: ($event) => $options.goCourseDetail(item)
              }, [
                vue.createElementVNode("image", {
                  class: "hot-item-image",
                  src: _ctx.$request.imageBaseUrl + item.iconPath
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "hot-info" }, [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode(
                      "text",
                      { class: "pay-item-title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "star-bg" }, [
                      vue.createVNode(_component_uni_rate, {
                        size: 10,
                        readonly: true,
                        max: 5,
                        value: item.star
                      }, null, 8, ["value"]),
                      vue.createElementVNode(
                        "text",
                        { class: "star-text" },
                        vue.toDisplayString(item.star) + "分",
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "price-bg" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "price-text" },
                      "¥ " + vue.toDisplayString($options.hotPrice(item)),
                      1
                      /* TEXT */
                    ),
                    !$data.user || $data.user.isVip == 0 ? (vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: 0,
                        class: "vip-price-text"
                      },
                      vue.toDisplayString(item.vipPrice == 0 ? "VIP免费" : "VIP: ￥" + item.vipPrice),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ])
                ])
              ], 8, ["onClick"]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesStudyStudy = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/study.vue"]]);
  const _sfc_main$t = {
    data() {
      return {
        BKType: uni.getStorageSync("BKType"),
        info: null
      };
    },
    onLoad() {
      this.getIndex();
    },
    onShow() {
      let type = uni.getStorageSync("BKType");
      if (this.BKType != type) {
        this.BKType = type;
        this.getIndex();
      }
    },
    methods: {
      switchType() {
        if (this.BKType == 1) {
          this.BKType = 2;
        } else {
          this.BKType = 1;
        }
        uni.setStorageSync("BKType", this.BKType);
        this.getIndex();
      },
      getIndex() {
        this.getInfo();
      },
      getInfo() {
        let that = this;
        this.$request.get("/api/topic/getInfo", {}).then((res) => {
          that.info = res.data;
        }, function(err) {
        });
      },
      goRank() {
        uni.navigateTo({
          url: "/pages/exercise/rank/rank"
        });
      },
      clickItem(item) {
        switch (item) {
          case 0:
            {
              uni.navigateTo({
                url: "/pages/exercise/dailyPractice/dailyPractice"
              });
            }
            break;
          case 1:
            {
              uni.navigateTo({
                url: "/pages/exercise/simulationTest/simulationTest"
              });
            }
            break;
          case 2:
            {
              let item2 = {
                "fromType": 5
              };
              uni.navigateTo({
                url: "/pages/exercise/question/question?data=" + encodeURIComponent(JSON.stringify(item2))
              });
            }
            break;
          case 3:
            {
              let item2 = {
                "fromType": 7
              };
              uni.navigateTo({
                url: "/pages/exercise/question/question?data=" + encodeURIComponent(JSON.stringify(item2))
              });
            }
            break;
        }
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        "background-color": "#70CAA3",
        statusBar: "",
        border: false,
        fixed: "true",
        rightWidth: "50vw",
        leftWidth: "50vw",
        height: "60px"
      }, {
        left: vue.withCtx(() => [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.switchType && $options.switchType(...args)),
            class: "d-flex align-items-center"
          }, [
            vue.createElementVNode(
              "view",
              { class: "left-title" },
              vue.toDisplayString($data.BKType == 1 ? "艺考学习" : "兴趣培训"),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "swich-bg" },
              vue.toDisplayString($data.BKType == 1 ? "切换兴趣版" : "切换艺考版"),
              1
              /* TEXT */
            )
          ])
        ]),
        right: vue.withCtx(() => [
          vue.createElementVNode("view", {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.goRank && $options.goRank(...args)),
            class: "d-flex align-items-center"
          }, [
            vue.createElementVNode("view", { class: "right-title" }, "排行榜"),
            vue.createElementVNode("image", {
              class: "nav-information",
              src: "/static//exercise/nav_trophy.png"
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "info-bg" }, [
        vue.createElementVNode("view", { class: "info-round-bg" }),
        vue.createElementVNode("view", { class: "info-content-bg" }, [
          vue.createElementVNode("view", { class: "info-content" }, [
            vue.createElementVNode("view", null, "今日答题"),
            vue.createElementVNode("view", { class: "info-content-item-bg" }, [
              vue.createElementVNode("view", null, [
                vue.createTextVNode("试卷 "),
                vue.createElementVNode(
                  "text",
                  { class: "info-number fo-14" },
                  vue.toDisplayString($data.info ? $data.info.today_exam : 0),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "info-number" }, "套")
              ]),
              vue.createElementVNode("view", null, [
                vue.createTextVNode("练习 "),
                vue.createElementVNode(
                  "text",
                  { class: "info-number fo-14" },
                  vue.toDisplayString($data.info ? $data.info.today : 0),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "info-number" }, "道")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "info-content" }, [
            vue.createElementVNode("view", null, "累计做题"),
            vue.createElementVNode("view", { class: "info-content-item-bg" }, [
              vue.createElementVNode("view", null, [
                vue.createTextVNode("试卷 "),
                vue.createElementVNode(
                  "text",
                  { class: "info-number fo-14" },
                  vue.toDisplayString($data.info ? $data.info.all_exam : 0),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "info-number" }, "套")
              ]),
              vue.createElementVNode("view", null, [
                vue.createTextVNode("练习 "),
                vue.createElementVNode(
                  "text",
                  { class: "info-number fo-14" },
                  vue.toDisplayString($data.info ? $data.info.all : 0),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "info-number" }, "道")
              ])
            ])
          ])
        ])
      ]),
      (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList([0, 1, 2, 3], (item) => {
          return vue.createElementVNode("image", {
            class: "item",
            onClick: ($event) => $options.clickItem(item),
            src: "/static/exercise/exercise" + item + ".png"
          }, null, 8, ["onClick", "src"]);
        }),
        64
        /* STABLE_FRAGMENT */
      ))
    ]);
  }
  const PagesExerciseExercise = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/exercise/exercise.vue"]]);
  const _sfc_main$s = {
    name: "fui-tabs",
    emits: ["change"],
    props: {
      type: {
        type: [String],
        default: ""
      },
      // 标签页数据源
      tabs: {
        type: Array,
        default() {
          return [];
        }
      },
      // 当前选项卡
      current: {
        type: Number,
        default: 0
      },
      // 是否可以滚动
      scroll: {
        type: Boolean,
        default: false
      },
      // tab高度 rpx
      height: {
        type: [Number, String],
        default: 96
      },
      background: {
        type: String,
        default: "#fff"
      },
      //字体大小
      size: {
        type: [Number, String],
        default: 28
      },
      //字体颜色
      color: {
        type: String,
        default: ""
      },
      //选中前字重
      fontWeight: {
        type: [Number, String],
        default: "normal"
      },
      //仅Nvue端生效，代替scale属性
      selectedSize: {
        type: [Number, String],
        default: 32
      },
      //选中后字体颜色
      selectedColor: {
        type: String,
        default: ""
      },
      //选中后字重 
      selectedFontWeight: {
        type: [Number, String],
        default: 500
      },
      duration: {
        // 滑动动画时长 单位毫秒
        type: [Number, String],
        default: 200
      },
      //选中后字体缩放倍数
      //Nvue端 Android 暂不支持设置overflow:visible，放大后文字超出部分被隐藏
      scale: {
        type: [Number, String],
        default: 1.2
      },
      badgeColor: {
        type: String,
        default: "#fff"
      },
      badgeBackground: {
        type: String,
        default: ""
      },
      isDot: {
        type: Boolean,
        default: false
      },
      isSlider: {
        type: Boolean,
        default: true
      },
      //滑块高度
      sliderHeight: {
        type: [Number, String],
        default: 5
      },
      //滑块背景颜
      sliderBackground: {
        type: String,
        default: ""
      },
      //滑块 radius
      sliderRadius: {
        type: [Number, String],
        default: -1
      },
      //滑块左右padding值
      padding: {
        type: [Number, String],
        default: 0
      },
      //滑块bottom
      bottom: {
        type: [Number, String],
        default: 0
      },
      //滑块是否固定为较短的长度45rpx
      short: {
        type: Boolean,
        default: true
      },
      //滑块是否居中显示
      center: {
        type: Boolean,
        default: false
      },
      //是否固定
      isFixed: {
        type: Boolean,
        default: false
      },
      //吸顶效果，为true时isFixed失效
      isSticky: {
        type: Boolean,
        default: false
      },
      //isFixed或isSticky为true时，tabs top值 px
      top: {
        type: [Number, String],
        default: 0
      },
      //当数据不满一屏时，item项是否靠左对齐，默认均分铺满
      alignLeft: {
        type: Boolean,
        default: false
      },
      //tabs item项排列方式：row、column
      direction: {
        type: String,
        default: "row"
      },
      zIndex: {
        type: [Number, String],
        default: 996
      }
    },
    watch: {
      tabs(vals) {
        this.initData(vals);
      },
      current(newVal, oldVal) {
        this.switchTab(newVal);
      }
    },
    created() {
      this.initData(this.tabs);
    },
    mounted() {
      this.putChange(0);
    },
    data() {
      let isNvue = false;
      return {
        vals: [],
        scrollInto: "",
        tabIndex: 0,
        isNvue,
        d: this.duration,
        translateX: 0,
        putChangeKey: `putChange_${this.type}`
      };
    },
    methods: {
      getId() {
        return `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      },
      initData(vals) {
        if (vals && vals.length > 0) {
          if (typeof vals[0] === "object") {
            vals.map((item) => {
              const scrollId = this.getId();
              item.fui_s_id = scrollId;
            });
          } else {
            vals = vals.map((item) => {
              const scrollId = this.getId();
              return {
                name: item,
                fui_s_id: scrollId
              };
            });
          }
          this.vals = vals;
          this.$nextTick(() => {
            setTimeout(() => {
              this.switchTab(this.current);
            }, 50);
          });
        }
      },
      switchTab(index) {
        const item = {
          ...this.vals[index]
        };
        if (this.tabIndex === index || item.disabled)
          return;
        this.tabIndex = index;
        this.translateX = -100 * index;
        let scrollIndex = index - 1 < 0 ? 0 : index - 1;
        this.scrollInto = this.vals[scrollIndex].fui_s_id;
        delete item.fui_s_id;
        this.$emit("change", {
          index,
          ...item
        });
        this.putChange(index);
      },
      putChange(index) {
        let name2 = this.type + "_" + index;
        uni.$emit(this.putChangeKey, {
          name: name2,
          duration: 200,
          type: index > this.tabIndex ? 1 : 2
        });
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("scroll-view", {
          class: vue.normalizeClass(["fui-tabs__scrollbox", { "fui-tabs__fixed": $props.isFixed && !$props.isSticky, "fui-tabs__sticky": $props.isSticky }]),
          "scroll-with-animation": "",
          "scroll-x": $props.scroll,
          "show-scrollbar": false,
          "scroll-into-view": $data.scrollInto,
          style: vue.normalizeStyle({ background: $props.background, zIndex: $props.isFixed || $props.isSticky ? $props.zIndex : 1, top: $props.isFixed || $props.isSticky ? $props.top + "px" : "auto" })
        }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["fui-scroll__view", { "fui-tabs__full": !$props.alignLeft }])
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.vals, (tab, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass(["fui-tabs__item", { "fui-tabs__full": !$props.alignLeft }]),
                    id: tab.fui_s_id,
                    onClick: ($event) => $options.switchTab(index)
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["fui-tabs__text-wrap", { "fui-tabs__wrap-disabled": tab.disabled, "fui-tabs__item-column": $props.direction === "column" && tab.icon }]),
                        style: vue.normalizeStyle({ height: $props.height + "rpx" })
                      },
                      [
                        $props.isSlider ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: vue.normalizeClass(["fui-tabs__line-wrap", { "fui-tabs__line-center": $props.center }]),
                            style: vue.normalizeStyle({ bottom: $props.bottom + "rpx", left: `-${$props.padding}rpx`, right: `-${$props.padding}rpx` })
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: vue.normalizeClass(["fui-tabs__ac-line", { "fui-tabs__line-short": $props.short, "fui-tabs__full": !$props.short, "fui-tabs__slider-color": !$props.sliderBackground }]),
                                style: vue.normalizeStyle({ height: $props.sliderHeight + "rpx", background: $props.sliderBackground, borderRadius: $props.sliderRadius == -1 ? $props.sliderHeight + "rpx" : $props.sliderRadius + "rpx", transform: `scale(${$data.tabIndex === index ? $data.isNvue ? 1 : $props.scale : $data.isNvue ? 1e-5 : 0})` })
                              },
                              null,
                              6
                              /* CLASS, STYLE */
                            )
                          ],
                          6
                          /* CLASS, STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        tab.icon ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 1,
                          class: vue.normalizeClass(["fui-tabs__icon", { "fui-tabs__icon-column": $props.direction === "column" }]),
                          src: $data.tabIndex === index && tab.selectedIcon ? tab.selectedIcon : tab.icon
                        }, null, 10, ["src"])) : vue.createCommentVNode("v-if", true),
                        vue.createCommentVNode("vue3中text嵌套text使用v-if会显示v-if文本"),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["fui-tabs__text", { "fui-tabs__selected-color": !$props.selectedColor && $data.tabIndex === index, "fui-tabs__text-color": !$props.color && $data.tabIndex !== index }]),
                            style: vue.normalizeStyle({ fontSize: ($data.tabIndex === index && $data.isNvue ? $props.selectedSize : $props.size) + "rpx", color: $data.tabIndex === index ? $props.selectedColor : $props.color, fontWeight: $data.tabIndex === index ? $props.selectedFontWeight : $props.fontWeight, transform: `scale(${$data.tabIndex === index && !$data.isNvue ? $props.scale : 1})` })
                          },
                          [
                            vue.createTextVNode(
                              vue.toDisplayString(tab.name),
                              1
                              /* TEXT */
                            ),
                            tab.badge ? (vue.openBlock(), vue.createElementBlock(
                              "text",
                              {
                                key: 0,
                                class: vue.normalizeClass({ "fui-tabs__badge-color": !$props.badgeBackground, "fui-tabs__badge-dot": $props.isDot, "fui-tabs__badge": !$props.isDot }),
                                style: vue.normalizeStyle({ color: $props.badgeColor, background: $props.badgeBackground })
                              },
                              vue.toDisplayString($props.isDot ? "" : tab.badge),
                              7
                              /* TEXT, CLASS, STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          6
                          /* CLASS, STYLE */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    )
                  ], 10, ["id", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ], 14, ["scroll-x", "scroll-into-view"]),
        vue.createElementVNode(
          "view",
          {
            class: "tab-cont",
            style: vue.normalizeStyle({ "transform": `translateX(${$data.translateX}%)`, "transition": `transform ${$data.d / 1e3}s ease-in-out` })
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-7b309eb2"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/components/fui-tabs/fui-tabs.vue"]]);
  const _sfc_main$r = {
    data() {
      return {
        BKType: uni.getStorageSync("BKType"),
        types: [],
        currentIndex: 0,
        list: [],
        user: null
      };
    },
    onShow() {
      this.user = getUser();
      this.BKType = uni.getStorageSync("BKType");
      if (this.types.length == 0) {
        this.getTypes();
      }
    },
    methods: {
      switchType() {
        if (this.BKType == 1) {
          this.BKType = 2;
        } else {
          this.BKType = 1;
        }
        uni.setStorageSync("BKType", this.BKType);
        this.currentIndex = 0;
        this.getTypes();
      },
      onClickTab(e) {
        this.currentIndex = e.index;
        this.getPaperList();
      },
      getTypes() {
        let that = this;
        this.$request.get("/api/index/getType", {}).then((res) => {
          that.types = res.data;
          that.getPaperList();
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      getPaperList() {
        uni.showLoading({
          title: ""
        });
        let item = this.types[this.currentIndex];
        let that = this;
        this.$request.get("/api/paper/paper_list", {
          type: item.id
        }).then((res) => {
          uni.hideLoading();
          that.list = res.rows;
        }, function(err) {
          uni.hideLoading();
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      goDetail(item) {
        if (item.chargeStatus == 1) {
          uni.navigateTo({
            url: "/pages/buy/buy"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/datum/datumDetail?data=" + encodeURIComponent(JSON.stringify(item))
        });
      }
    },
    computed: {
      titles() {
        return this.types.map((item) => item.title);
      },
      coursePrice() {
        return function(item) {
          let price = item.price;
          if (this.user.isVip == 1) {
            price = item.vipPrice;
          }
          return price.toFixed(2);
        };
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    const _component_fui_tabs = resolveEasycom(vue.resolveDynamicComponent("fui-tabs"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        statusBar: "",
        border: false,
        fixed: "true",
        rightWidth: "50vw",
        leftWidth: "50vw",
        height: "60px"
      }, {
        left: vue.withCtx(() => [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.switchType && $options.switchType(...args)),
            class: "d-flex align-items-center"
          }, [
            vue.createElementVNode(
              "view",
              { class: "left-title" },
              vue.toDisplayString($data.BKType == 1 ? "艺考学习" : "兴趣培训"),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "swich-bg" },
              vue.toDisplayString($data.BKType == 1 ? "切换兴趣版" : "切换艺考版"),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_fui_tabs, {
        tabs: $options.titles,
        scroll: "",
        center: true,
        short: false,
        fontWeight: "bold",
        selectedFontWeight: "bold",
        color: "#333333",
        "selected-color": "#70CAA3",
        size: "28",
        "selected-size": "28",
        "slider-background": "#70CAA3",
        bottom: "15",
        scale: "1.0",
        onChange: $options.onClickTab
      }, null, 8, ["tabs", "onChange"]),
      vue.createElementVNode("view", { class: "list-bg" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              onClick: ($event) => $options.goDetail(item),
              class: "list-item"
            }, [
              vue.createElementVNode("image", {
                class: "item-image",
                src: _ctx.$request.imageBaseUrl + item.iconUrl
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "course-info" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "price-text" },
                  "¥ " + vue.toDisplayString($options.coursePrice(item)),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesDatumDatum = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/datum/datum.vue"]]);
  const _sfc_main$q = {
    data() {
      return {};
    },
    onShow() {
      if (!isLogin()) {
        uni.navigateTo({
          url: "/pages/login/login"
        });
        return;
      }
    },
    methods: {}
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/my/my.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$p = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name2) {
        return name2.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$o = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth: windowWidth2,
          windowHeight: windowHeight2,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth2;
        this.popupHeight = windowHeight2 + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-4dd3c44b"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$n = {
    data() {
      return {
        currentSelect: 1
      };
    },
    onReady() {
      let isAgree = uni.getStorageSync("XieYi");
      if (!isAgree) {
        this.$refs.popup.open("center");
      }
    },
    methods: {
      userAgreement() {
        let data = {
          "typeStr": "1",
          "title": "用户协议"
        };
        uni.navigateTo({
          url: "/pages/agreement/agreement?data=" + encodeURIComponent(JSON.stringify(data))
        });
      },
      privacyAgreement() {
        let data = {
          "typeStr": "2",
          "title": "隐私协议"
        };
        uni.navigateTo({
          url: "/pages/agreement/agreement?data=" + encodeURIComponent(JSON.stringify(data))
        });
      },
      cancel() {
        switch (uni.getSystemInfoSync().platform) {
          case "android":
            plus.runtime.quit();
            break;
          case "ios":
            plus.ios.import("UIApplication").sharedApplication().performSelector("exit");
            break;
        }
      },
      closePopup() {
        this.$refs.popup.close();
        uni.setStorageSync("XieYi", 1);
      },
      selectType(e) {
        this.currentSelect = e;
      },
      enter() {
        uni.setStorageSync("BKType", this.currentSelect);
        uni.reLaunch({
          url: "/pages/study/study"
        });
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", { class: "title" }, "选择适合你的学习板块"),
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("image", {
              onClick: _cache[0] || (_cache[0] = ($event) => $options.selectType(1)),
              class: "item-image d-flex flex-fill",
              src: "/static/select/select_type_1.png"
            }),
            $data.currentSelect == 1 ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              class: "select-dot",
              src: "/static/select/select_dot.png"
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("image", {
              onClick: _cache[1] || (_cache[1] = ($event) => $options.selectType(2)),
              class: "item-image d-flex flex-fill",
              src: "/static/select/select_type_2.png"
            }),
            $data.currentSelect == 2 ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              class: "select-dot",
              src: "/static/select/select_dot.png"
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.enter && $options.enter(...args)),
            class: "enter"
          }, "进入")
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popup",
            type: "center"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popup-content" }, [
                vue.createElementVNode("view", { class: "popup-title" }, "欢迎下载并使用"),
                vue.createElementVNode("view", { class: "popup-des" }, [
                  vue.createTextVNode(" 在使用前，请您务必审慎阅读、充分理解“用户协议”和“隐私政策”各条款，包括但不限于：为了向您提供内容分析等服务，我们需要收集您的设备信息、操作日志等个人信息。您可以在“手机设置”中查看、变更、删除个人信息并管理您的授权。您可仔细阅读 "),
                  vue.createElementVNode("text", {
                    onClick: _cache[3] || (_cache[3] = (...args) => $options.userAgreement && $options.userAgreement(...args)),
                    class: "agreement"
                  }, "《用户协议》"),
                  vue.createTextVNode("和"),
                  vue.createElementVNode("text", {
                    onClick: _cache[4] || (_cache[4] = (...args) => $options.privacyAgreement && $options.privacyAgreement(...args)),
                    class: "agreement"
                  }, "《隐私政策》"),
                  vue.createTextVNode("了解详细信息。 ")
                ]),
                vue.createElementVNode("view", { class: "popup-des" }, "如您同意，请点击“同意”开始接受我们的服务。"),
                vue.createElementVNode("view", { class: "popup-bt-bg" }, [
                  vue.createElementVNode("view", {
                    onClick: _cache[5] || (_cache[5] = (...args) => $options.cancel && $options.cancel(...args)),
                    class: "popup-cancel"
                  }, "取消"),
                  vue.createElementVNode("view", {
                    onClick: _cache[6] || (_cache[6] = (...args) => $options.closePopup && $options.closePopup(...args)),
                    class: "popup-confim"
                  }, "确定")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesSelectSelect = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/select/select.vue"]]);
  const _sfc_main$m = {
    data() {
      return {
        typeStr: "",
        fromType: "",
        body: null
      };
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      this.typeStr = data.typeStr;
      this.fromType = data.fromType;
      uni.setNavigationBarTitle({
        title: data.title
      });
      this.getAgreementContent();
    },
    methods: {
      getAgreementContent() {
        let url = "api/settings/xieyi";
        let tempDic = {
          "type": this.typeStr
        };
        if (this.fromType == "2") {
          url = "api/news/danye";
          tempDic["type_id"] = this.typeStr;
        }
        let that = this;
        this.$request.post(url, tempDic).then((res) => {
          that.body = res.data.value;
        }, function(err) {
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.body != null ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        innerHTML: $data.body
      }, null, 8, ["innerHTML"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesAgreementAgreement = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/agreement/agreement.vue"]]);
  const _sfc_main$l = {
    data() {
      return {};
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesStudyInfomationInfomation = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/infomation/infomation.vue"]]);
  const _sfc_main$k = {
    data() {
      return {
        phone: "",
        password: "",
        smsCode: "",
        securityInput: true,
        agreementChecked: false,
        passwordLogin: true,
        sending: false,
        codetime: 0
      };
    },
    onShow() {
      formatAppLog("log", "at pages/login/login.vue:65", "onShow for login");
      let res = uni.getStorageSync("LoginAgreement");
      if (res) {
        this.agreementChecked = res;
      }
    },
    methods: {
      onClickLeft() {
        uni.switchTab({
          url: "/pages/study/study"
        });
      },
      inputPhone(e) {
        formatAppLog("log", "at pages/login/login.vue:78", e.detail.value);
        this.phone = e.detail.value;
      },
      inputPassword(e) {
        formatAppLog("log", "at pages/login/login.vue:82", e.detail.value);
        this.password = e.detail.value;
      },
      inputSmsCode(e) {
        formatAppLog("log", "at pages/login/login.vue:86", e.detail.value);
        this.smsCode = e.detail.value;
      },
      userAgreement() {
        let data = {
          "typeStr": "1",
          "title": "用户协议"
        };
        uni.navigateTo({
          url: "/pages/agreement/agreement?data=" + encodeURIComponent(JSON.stringify(data))
        });
      },
      privacyAgreement() {
        let data = {
          "typeStr": "2",
          "title": "隐私协议"
        };
        uni.navigateTo({
          url: "/pages/agreement/agreement?data=" + encodeURIComponent(JSON.stringify(data))
        });
      },
      login() {
        if (this.phone.length == 0) {
          this.showToast("请输入手机号");
          return;
        }
        if (this.passwordLogin) {
          if (this.password.length == 0) {
            this.showToast("请输入密码");
            return;
          }
        } else {
          if (this.smsCode.length == 0) {
            this.showToast("请输入验证码");
            return;
          }
        }
        if (!this.agreementChecked) {
          this.showToast("请同意用户协议和隐私政策");
          return;
        }
        this.$request.post("/api/login/login", {
          mobile: this.phone,
          password: this.password
        }).then((res) => {
          let token = res.data.token;
          setToken(token);
          let user = res.data;
          setUser(user);
          uni.navigateBack();
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      forget() {
        uni.navigateTo({
          url: "/pages/login/forget"
        });
      },
      regist() {
        uni.navigateTo({
          url: "/pages/login/regist"
        });
      },
      changeSecurity() {
        this.securityInput = !this.securityInput;
      },
      changeAgreementStatus() {
        this.agreementChecked = !this.agreementChecked;
        uni.setStorageSync("LoginAgreement", this.agreementChecked);
      },
      changeLoginType() {
        this.passwordLogin = !this.passwordLogin;
      },
      sendPhoneCode() {
        if (this.codetime > 0) {
          return;
        }
        if (this.phone.length == 0) {
          this.showToast("请输入手机号");
          return;
        }
        uni.showLoading();
        let that = this;
        this.$request.post("/api/login/yzm", {
          phone: this.phone
        }).then((res) => {
          uni.hideLoading();
          uni.showToast({
            title: that.$t("sendSuccessfully"),
            duration: 2e3,
            icon: "none"
          });
          that.countTime();
        }, function(err) {
          uni.hideLoading();
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      countTime() {
        this.codetime = 60;
        let timer = setInterval(() => {
          formatAppLog("log", "at pages/login/login.vue:198", "codetime:" + this.codetime);
          this.codetime--;
          if (this.codetime < 1) {
            clearInterval(timer);
            this.codetime = 0;
          }
        }, 1e3);
      },
      showToast(msg) {
        uni.showToast({
          title: msg,
          duration: 2e3,
          icon: "none"
        });
      }
    },
    computed: {
      mailPleaseHodel() {
        return this.$t("login.mailboxNumberPleaseHolder");
      },
      passwordPleaseHodel() {
        return this.$t("login.passwordPleaseHolder");
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(` <van-icon name="arrow-left" size="20" color='#333' style="margin-top: 58px;margin-left: 13px;"\r
			@click='onClickLeft' /> `),
      vue.createElementVNode("view", { class: "lg" }, [
        vue.createElementVNode(
          "text",
          { style: { "color": "#333333", "font-size": "24px" } },
          vue.toDisplayString($data.passwordLogin ? "密码登录" : "短信验证码登录"),
          1
          /* TEXT */
        ),
        !$data.passwordLogin ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "smslogin-tip"
        }, "未注册的手机号将在验证过后自动注册。")) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", { class: "content-bg" }, [
        vue.createElementVNode("view", { class: "input-content-bg" }, [
          vue.createElementVNode("view", { class: "title" }, "+86"),
          vue.createElementVNode("view", { class: "v-line" }),
          vue.createElementVNode(
            "input",
            {
              class: "input",
              placeholder: "请输入手机号码",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.inputPhone && $options.inputPhone(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        $data.passwordLogin ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "input-content-bg"
        }, [
          vue.createElementVNode("view", { class: "title" }, "密码"),
          vue.createElementVNode("view", { class: "v-line" }),
          vue.createElementVNode(
            "input",
            {
              class: "input",
              placeholder: "请输入密码",
              onInput: _cache[1] || (_cache[1] = (...args) => $options.inputPassword && $options.inputPassword(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ])) : vue.createCommentVNode("v-if", true),
        !$data.passwordLogin ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "input-content-bg"
        }, [
          vue.createElementVNode("view", { class: "title" }, "验证码"),
          vue.createElementVNode("view", { class: "v-line" }),
          vue.createElementVNode(
            "input",
            {
              class: "input",
              placeholder: "请输入验证码",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.inputSmsCode && $options.inputSmsCode(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          ),
          0 < $data.codetime ? (vue.openBlock(), vue.createElementBlock(
            "button",
            {
              key: 0,
              class: "send fix-width send-dis"
            },
            vue.toDisplayString($data.codetime + "秒"),
            1
            /* TEXT */
          )) : (vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            class: "send",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.sendPhoneCode && $options.sendPhoneCode(...args))
          }, "获取验证码"))
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "agreement-tip" }, [
          vue.createElementVNode("checkbox", {
            onClick: _cache[4] || (_cache[4] = (...args) => $options.changeAgreementStatus && $options.changeAgreementStatus(...args)),
            style: { "transform": "scale(0.6)" },
            checked: $data.agreementChecked,
            color: "#70CAA3"
          }, null, 8, ["checked"]),
          vue.createTextVNode("我已阅读并且同意"),
          vue.createElementVNode("text", {
            class: "agreement",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.userAgreement && $options.userAgreement(...args))
          }, "服务使用协议"),
          vue.createTextVNode("和"),
          vue.createElementVNode("text", {
            class: "agreement",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.privacyAgreement && $options.privacyAgreement(...args))
          }, "隐私协议")
        ]),
        vue.createElementVNode("view", {
          class: "login-btn",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.login && $options.login(...args))
        }, "登录"),
        vue.createElementVNode("view", {
          class: "switch-login-type",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.changeLoginType && $options.changeLoginType(...args))
        }, "切换为验证码登录"),
        !$data.passwordLogin ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          onClick: _cache[9] || (_cache[9] = (...args) => $options.forget && $options.forget(...args)),
          class: "forget-password"
        }, "忘记密码")) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/login/login.vue"]]);
  const _sfc_main$j = {
    data() {
      return {
        phone: "",
        password: "",
        securityInput: true,
        agreementChecked: false,
        passwordLogin: true,
        sending: false,
        codetime: 0
      };
    },
    onShow() {
      formatAppLog("log", "at pages/login/forget.vue:53", "onShow for login");
    },
    methods: {
      onClickLeft() {
        uni.navigateBack();
      },
      inputPhone(e) {
        formatAppLog("log", "at pages/login/forget.vue:60", e.detail.value);
        this.phone = e.detail.value;
      },
      inputPassword(e) {
        formatAppLog("log", "at pages/login/forget.vue:64", e.detail.value);
        this.password = e.detail.value;
      },
      login() {
        let that = this;
        if (this.phone.length == 0) {
          uni.showToast({
            title: "请输入手机号",
            duration: 2e3,
            icon: "none"
          });
          return;
        }
        if (this.password.length == 0) {
          uni.showToast({
            title: that.$t("login.passwordPleaseHolder"),
            duration: 2e3,
            icon: "none"
          });
          return;
        }
        this.$request.post("/api/login/login", {
          type: 2,
          mobile: this.phone,
          password: this.password
        }).then((res) => {
          let token = res.data.token;
          let user = res.data.user;
          setUser(user);
          setToken(token);
          uni.navigateBack();
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      forget() {
        uni.navigateTo({
          url: "/pages/login/forget"
        });
      },
      regist() {
        uni.navigateTo({
          url: "/pages/login/regist"
        });
      },
      changeSecurity() {
        this.securityInput = !this.securityInput;
      },
      changeAgreementStatus() {
        this.agreementChecked = !this.agreementChecked;
      },
      changeLoginType() {
        this.passwordLogin = !this.passwordLogin;
      },
      sendPhoneCode() {
        if (this.codetime > 0) {
          return;
        }
        if (this.phone.length == 0) {
          this.showToast("请输入手机号");
          return;
        }
        uni.showLoading();
        let that = this;
        this.$request.post("/api/login/yzm", {
          phone: this.phone
        }).then((res) => {
          uni.hideLoading();
          uni.showToast({
            title: that.$t("sendSuccessfully"),
            duration: 2e3,
            icon: "none"
          });
          that.countTime();
        }, function(err) {
          uni.hideLoading();
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      countTime() {
        this.codetime = 60;
        let timer = setInterval(() => {
          formatAppLog("log", "at pages/login/forget.vue:154", "codetime:" + this.codetime);
          this.codetime--;
          if (this.codetime < 1) {
            clearInterval(timer);
            this.codetime = 0;
          }
        }, 1e3);
      },
      showToast(msg) {
        uni.showToast({
          title: msg,
          duration: 2e3,
          icon: "none"
        });
      }
    },
    computed: {
      mailPleaseHodel() {
        return this.$t("login.mailboxNumberPleaseHolder");
      },
      passwordPleaseHodel() {
        return this.$t("login.passwordPleaseHolder");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(` <van-icon name="arrow-left" size="20" color='#333' style="margin-top: 58px;margin-left: 13px;"\r
			@click='onClickLeft' /> `),
      vue.createElementVNode("view", { class: "lg" }, [
        vue.createElementVNode("text", { style: { "color": "#333333", "font-size": "24px" } }, "账号验证")
      ]),
      vue.createElementVNode("view", { class: "content-bg" }, [
        vue.createElementVNode("view", { class: "input-content-bg" }, [
          vue.createElementVNode("view", { class: "title" }, "+86"),
          vue.createElementVNode("view", { class: "v-line" }),
          vue.createElementVNode(
            "input",
            {
              class: "input",
              placeholder: "请输入手机号码",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.inputPhone && $options.inputPhone(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "input-content-bg" }, [
          vue.createElementVNode("view", { class: "title" }, "验证码"),
          vue.createElementVNode("view", { class: "v-line" }),
          vue.createElementVNode(
            "input",
            {
              class: "input",
              placeholder: "请输入验证码",
              onInput: _cache[1] || (_cache[1] = (...args) => $options.inputPassword && $options.inputPassword(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          ),
          0 < $data.codetime ? (vue.openBlock(), vue.createElementBlock(
            "button",
            {
              key: 0,
              class: "send fix-width send-dis"
            },
            vue.toDisplayString($data.codetime + "秒"),
            1
            /* TEXT */
          )) : (vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            class: "send",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.sendPhoneCode && $options.sendPhoneCode(...args))
          }, "获取验证码"))
        ]),
        vue.createElementVNode("view", { class: "login-btn" }, "下一步")
      ])
    ]);
  }
  const PagesLoginForget = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/login/forget.vue"]]);
  const _sfc_main$i = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-c97cb896"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$h = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            const allPadding = paddingArr[0];
            this.padding = {
              "top": allPadding,
              "right": allPadding,
              "bottom": allPadding,
              "left": allPadding
            };
          } else if (paddingArr.length === 2) {
            const [verticalPadding, horizontalPadding] = paddingArr;
            this.padding = {
              "top": verticalPadding,
              "right": horizontalPadding,
              "bottom": verticalPadding,
              "left": horizontalPadding
            };
          } else if (paddingArr.length === 4) {
            const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
            this.padding = {
              "top": topPadding,
              "right": rightPadding,
              "bottom": bottomPadding,
              "left": leftPadding
            };
          }
        },
        immediate: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name2 = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name2) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: vue.normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
          style: vue.normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
        },
        [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("view", { class: "uni-list-item__header" }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                vue.createElementVNode("image", {
                  src: $props.thumb,
                  class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                vue.createVNode(_component_uni_icons, {
                  customPrefix: $props.extraIcon.customPrefix,
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["customPrefix", "color", "size", "type"])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ], true),
          vue.renderSlot(_ctx.$slots, "body", {}, () => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
              },
              [
                $props.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                  },
                  vue.toDisplayString($props.title),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true),
                $props.note ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    class: "uni-list-item__content-note"
                  },
                  vue.toDisplayString($props.note),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ], true),
          vue.renderSlot(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
              },
              [
                $props.rightText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-list-item__extra-text"
                  },
                  vue.toDisplayString($props.rightText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                  key: 1,
                  type: $props.badgeType,
                  text: $props.badgeText,
                  "custom-style": $props.badgeStyle
                }, null, 8, ["type", "text", "custom-style"])) : vue.createCommentVNode("v-if", true),
                $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
                  key: 2,
                  disabled: $props.disabled,
                  checked: $props.switchChecked,
                  onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
                }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-c7524739"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$g = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-c2f1266a"], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        courseData: null,
        courseDetail: null,
        courseComment: [],
        courseInfo: null,
        courseCatalogList: [],
        user: null,
        isCollect: false,
        selectType: 0
      };
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      formatAppLog("log", "at pages/study/courseDetail/courseDetail.vue:123", data);
      this.courseData = data;
    },
    onShow() {
      this.getCourseDetail();
    },
    methods: {
      onClickLeft() {
        uni.navigateBack();
      },
      getCourseDetail() {
        let that = this;
        this.$request.get("/api/course/course_details_new", {
          id: this.courseData.id
        }).then((res) => {
          that.courseDetail = res.data;
          that.courseComment = res.data.courseComment;
          that.courseInfo = res.data.courseInfo;
          that.user = res.data.userinfo;
          that.courseCatalogList = that.terrList(res.data.courseInfo.qycCourseCatalogList);
          that.isCollect = res.data.userinfo.isCollection == true;
        }, function(err) {
        });
      },
      star() {
        let that = this;
        this.$request.post("/api/course/add_collection", {
          courseId: this.courseData.id
        }).then((res) => {
          uni.showToast({
            title: "收藏成功",
            duration: 2e3,
            icon: "none"
          });
          that.isCollect = true;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      unStar() {
        let that = this;
        this.$request.post("/api/course/del_collection", {
          courseId: this.courseData.id
        }).then((res) => {
          uni.showToast({
            title: "取消成功",
            duration: 2e3,
            icon: "none"
          });
          that.isCollect = false;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      clickSwitch(e) {
        this.selectType = e;
      },
      clickCourseItem(item) {
        if (item.chargeStatus == 1) {
          uni.navigateTo({
            url: "/pages/buy/buy"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/study/courseCatalogDetail/courseCatalogDetail?data=" + encodeURIComponent(JSON.stringify(item))
        });
      },
      joinStudy() {
      },
      writeComment() {
        let item = this.courseData;
        uni.navigateTo({
          url: "/pages/study/courseDetail/courseComment?data=" + encodeURIComponent(JSON.stringify(item))
        });
      },
      readComment() {
        let item = this.courseData;
        uni.navigateTo({
          url: "/pages/study/courseDetail/courseReadComment?data=" + encodeURIComponent(JSON.stringify(item))
        });
      },
      terrList(list) {
        const treeList = [];
        const map = {};
        list.forEach((item) => {
          if (!item.children) {
            item.children = [];
          }
          map[item.id] = item;
        });
        list.forEach((item) => {
          const parent = map[item.pid];
          if (parent) {
            parent.children.push(item);
          } else {
            treeList.push(item);
          }
        });
        return treeList;
      }
    },
    computed: {
      brief() {
        return this.courseInfo.brief.replaceAll("img", 'img style="width:100%;height:auto"');
      },
      coursePrice() {
        return function(item) {
          let price = item.price;
          if (this.user.isVip == 1) {
            price = item.vipPrice;
          }
          return price.toFixed(2);
        };
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_van_icon = vue.resolveComponent("van-icon");
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$2);
    const _component_van_divider = vue.resolveComponent("van-divider");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2$2);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_2);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        statusBar: "",
        fixed: true,
        border: false,
        "left-width": "22px",
        "right-width": "22px"
      }, {
        left: vue.withCtx(() => [
          vue.createVNode(_component_van_icon, {
            onClick: $options.onClickLeft,
            name: "arrow-left",
            size: "22",
            color: "#333"
          }, null, 8, ["onClick"])
        ]),
        right: vue.withCtx(() => [
          $data.isCollect ? (vue.openBlock(), vue.createBlock(_component_van_icon, {
            key: 0,
            onClick: $options.unStar,
            name: "star",
            size: "20",
            color: "#FECB65"
          }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createBlock(_component_van_icon, {
            key: 1,
            onClick: $options.star,
            name: "star-o",
            size: "20",
            color: "#333"
          }, null, 8, ["onClick"]))
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "title" }, "课程详情")
        ]),
        _: 1
        /* STABLE */
      }),
      $data.courseDetail != null ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createElementVNode("view", { class: "head-bg" }, [
            vue.createElementVNode("image", {
              class: "header-image",
              src: _ctx.$request.imageBaseUrl + $data.courseInfo.iconPath
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "header-info-bg" }, [
              vue.createElementVNode("view", { class: "header-info-left" }, [
                vue.createElementVNode("view", { class: "header-title-bg" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "coutse-category" },
                    vue.toDisplayString($data.courseInfo.typeName),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "course-title" },
                    vue.toDisplayString($data.courseInfo.title) + "中国音乐学院基本乐科1级",
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "num-people" },
                  vue.toDisplayString($data.courseInfo.numPeople) + "人已学习",
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "star-bg" }, [
                vue.createElementVNode("text", { class: "p-b-xs" }, [
                  vue.createTextVNode(
                    vue.toDisplayString($data.courseInfo.star.toFixed(1)),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "star-text" }, "分")
                ]),
                vue.createVNode(_component_uni_rate, {
                  size: 10,
                  readonly: true,
                  max: 5,
                  value: $data.courseInfo.star
                }, null, 8, ["value"])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "course-bg" }, [
            vue.createElementVNode("view", { class: "course-content" }, [
              vue.createElementVNode("view", { class: "switch-title" }, [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = ($event) => $options.clickSwitch(0)),
                    class: vue.normalizeClass(["section-title-bg", { "switch-select": $data.selectType == 0 }])
                  },
                  [
                    vue.createElementVNode("view", { class: "section-title-line" }, "课程介绍")
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[1] || (_cache[1] = ($event) => $options.clickSwitch(1)),
                    class: vue.normalizeClass(["section-title-bg", { "switch-select": $data.selectType == 1 }])
                  },
                  [
                    vue.createElementVNode("view", { class: "section-title-line" }, "课程目标")
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = ($event) => $options.clickSwitch(2)),
                    class: vue.normalizeClass(["section-title-bg", { "switch-select": $data.selectType == 2 }])
                  },
                  [
                    vue.createElementVNode("view", { class: "section-title-line" }, "课程评价")
                  ],
                  2
                  /* CLASS */
                )
              ]),
              vue.createVNode(_component_van_divider, { style: { "margin": "0px" } }),
              $data.selectType == 0 ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "brief",
                innerHTML: $options.brief
              }, null, 8, ["innerHTML"])) : $data.selectType == 1 ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 1 },
                vue.renderList($data.courseCatalogList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "course-catalog" }, [
                    vue.createElementVNode("view", { class: "d-flex" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "course-section" },
                        vue.toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ]),
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item.children, (subItem, index2) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          onClick: ($event) => $options.clickCourseItem(subItem),
                          class: "course-item"
                        }, [
                          vue.createElementVNode(
                            "view",
                            {
                              class: vue.normalizeClass({ "newd-charge": subItem.chargeStatus == 1 })
                            },
                            vue.toDisplayString(subItem.title),
                            3
                            /* TEXT, CLASS */
                          ),
                          vue.createElementVNode("view", { class: "course-item-icon" }, [
                            subItem.chargeStatus != 1 ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                              key: 0,
                              type: "forward",
                              size: "18"
                            })) : (vue.openBlock(), vue.createElementBlock("image", {
                              key: 1,
                              class: "lock",
                              src: "/static/study/course_detail_lock.png"
                            }))
                          ])
                        ], 8, ["onClick"]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )) : $data.selectType == 2 ? (vue.openBlock(), vue.createBlock(_component_uni_list, { key: 2 }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.courseComment, (item, index) => {
                      return vue.openBlock(), vue.createBlock(
                        _component_uni_list_item,
                        null,
                        {
                          body: vue.withCtx(() => [
                            vue.createElementVNode("view", { class: "comment-body" }, [
                              vue.createElementVNode("view", { class: "user-info" }, [
                                vue.createElementVNode("image", {
                                  class: "user-header",
                                  src: _ctx.$request.imageBaseUrl + item.qycUsermember.headIconPath
                                }, null, 8, ["src"]),
                                vue.createElementVNode("view", { class: "m-l-md" }, [
                                  vue.createElementVNode(
                                    "view",
                                    { class: "user-nick" },
                                    vue.toDisplayString(item.qycUsermember.userName),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode(
                                    "view",
                                    { class: "creattime" },
                                    vue.toDisplayString(item.createTime),
                                    1
                                    /* TEXT */
                                  )
                                ])
                              ]),
                              vue.createElementVNode(
                                "view",
                                { class: "comment-content" },
                                vue.toDisplayString(item.content),
                                1
                                /* TEXT */
                              )
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      );
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "bottom-bg" }, [
            vue.createElementVNode("view", { class: "space" }),
            vue.createElementVNode("view", { class: "bottom-content" }, [
              vue.createElementVNode("view", { class: "price-bg" }, [
                $data.user != null && $data.courseInfo != null && $data.courseInfo.isPay == 1 ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createElementVNode("view", null, "价格："),
                    vue.createElementVNode(
                      "view",
                      { class: "price-text" },
                      "¥ " + vue.toDisplayString($options.coursePrice($data.courseInfo)),
                      1
                      /* TEXT */
                    ),
                    !$data.user || $data.user.isVip == 0 ? (vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: 0,
                        class: "vip-price-text"
                      },
                      vue.toDisplayString($data.courseInfo.vipPrice == 0 ? "VIP免费" : "VIP: ￥" + $data.courseInfo.vipPrice),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : vue.createCommentVNode("v-if", true)
              ]),
              $data.courseInfo.isPay != 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                onClick: _cache[3] || (_cache[3] = (...args) => $options.joinStudy && $options.joinStudy(...args)),
                class: "bottom-btn"
              }, "加入学习")) : $data.courseInfo.isComment == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                onClick: _cache[4] || (_cache[4] = (...args) => $options.readComment && $options.readComment(...args)),
                class: "bottom-btn"
              }, "查看评价")) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                onClick: _cache[5] || (_cache[5] = (...args) => $options.writeComment && $options.writeComment(...args)),
                class: "bottom-btn"
              }, "写评价,得金币"))
            ])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesStudyCourseDetailCourseDetail = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/courseDetail/courseDetail.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        searchValue: "",
        searchHot: [],
        list: []
      };
    },
    onLoad() {
      this.getSearchIndex();
      let searchHot = uni.getStorageSync("searchHot");
      if (searchHot) {
        this.searchHot = searchHot;
      }
      let searchHistroyJson = uni.getStorageSync("searchHistroy");
      if (searchHistroyJson) {
        this.list = JSON.parse(searchHistroyJson);
      }
    },
    methods: {
      onClickLeft() {
        uni.navigateBack();
      },
      getSearchIndex() {
        let that = this;
        this.$request.get("/api/search/index", {}).then((res) => {
          that.searchHot = res.rows;
          uni.setStorageSync("searchHot", res.rows);
        }, function(err) {
        });
      },
      goResult(keyword) {
        let data = {
          "keyword": keyword
        };
        uni.navigateTo({
          url: "/pages/study/courseList/courseList?data=" + encodeURIComponent(JSON.stringify(data))
        });
        this.addHistory(keyword);
      },
      search() {
        this.goResult(this.searchValue);
      },
      addHistory(searchValue) {
        if (!searchValue) {
          return;
        }
        const findItem = this.list.findIndex((item) => item == searchValue);
        formatAppLog("log", "at pages/study/search/search.vue:87", findItem);
        formatAppLog("log", "at pages/study/search/search.vue:88", "======");
        if (findItem !== -1) {
          this.list.splice(findItem, 1);
          this.list.unshift(searchValue);
        } else {
          this.list.unshift(searchValue);
        }
        uni.setStorageSync("searchHistroy", JSON.stringify(this.list));
      },
      clearHistory() {
        uni.removeStorageSync("searchHistory");
        this.list = [];
        uni.showToast({
          title: "操作成功",
          duration: 2e3,
          icon: "none"
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_van_icon = vue.resolveComponent("van-icon");
    const _component_van_search = vue.resolveComponent("van-search");
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        statusBar: "",
        fixed: true,
        border: false,
        "left-width": "22px",
        "right-width": "0px"
      }, {
        left: vue.withCtx(() => [
          vue.createVNode(_component_van_icon, {
            onClick: $options.onClickLeft,
            name: "arrow-left",
            size: "22",
            color: "#333"
          }, null, 8, ["onClick"])
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { style: { "display": "flex", "align-items": "center", "flex-grow": "1" } }, [
            vue.createVNode(_component_van_search, {
              modelValue: $data.searchValue,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchValue = $event),
              shape: "round",
              background: "#ffffff",
              placeholder: "请输入要查找的内容",
              style: { "flex-grow": "1" },
              clearable: false,
              onSearch: $options.search
            }, null, 8, ["modelValue", "onSearch"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "p-x-md p-y-md" }, [
        vue.createElementVNode("view", { class: "d-flex justify-between p-y-md" }, [
          vue.createElementVNode("text", { class: "section-title" }, "最近搜索"),
          $data.list.length != 0 ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "section-title-right",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.clearHistory && $options.clearHistory(...args))
          }, "清空")) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "d-flex flex-wrap fo-13" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "item",
                onClick: ($event) => $options.goResult(item)
              }, vue.toDisplayString(item), 9, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "d-flex justify-between p-y-md" }, [
          vue.createElementVNode("text", { class: "section-title" }, "热门搜索")
        ]),
        vue.createElementVNode("view", { class: "d-flex flex-wrap fo-13" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.searchHot, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "item",
                onClick: ($event) => $options.goResult(item.title)
              }, vue.toDisplayString(item.title), 9, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesStudySearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/search/search.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        data: null,
        user: null,
        course: [],
        title: "课程列表"
      };
    },
    onLoad(option) {
      this.data = JSON.parse(decodeURIComponent(option.data));
      this.getCourseList();
    },
    onShow() {
      this.user = getUser();
    },
    methods: {
      onClickLeft() {
        uni.navigateBack();
      },
      getCourseList() {
        let that = this;
        let params = {};
        let keyword = this.data.keyword;
        if (keyword != void 0) {
          params["keyword"] = keyword;
        }
        let isPay = this.data.isPay;
        if (isPay != void 0) {
          params["isPay"] = isPay;
        }
        let isHot = this.data.isHot;
        if (isHot != void 0) {
          params["isHot"] = isHot;
        }
        let typeId = this.data.typeId;
        if (typeId != void 0) {
          params["typeId"] = typeId;
        }
        this.$request.get("/api/course/course_list_new", params).then((res) => {
          that.course = res.data.course;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      goCourseDetail(item) {
        if (!isLogin()) {
          uni.navigateTo({
            url: "/pages/login/login"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/study/courseDetail/courseDetail?data=" + encodeURIComponent(JSON.stringify(item))
        });
      }
    },
    computed: {
      coursePrice() {
        return function(item) {
          let price = item.price;
          if (this.user.isVip == 1) {
            price = item.vipPrice;
          }
          return price.toFixed(2);
        };
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_van_icon = vue.resolveComponent("van-icon");
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        statusBar: "",
        fixed: true,
        border: false,
        "left-width": "50px",
        "right-width": "50px"
      }, {
        left: vue.withCtx(() => [
          vue.createVNode(_component_van_icon, {
            onClick: $options.onClickLeft,
            name: "arrow-left",
            size: "22",
            color: "#333"
          }, null, 8, ["onClick"])
        ]),
        right: vue.withCtx(() => [
          vue.createElementVNode("text", null, "失效课程")
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            { class: "title" },
            vue.toDisplayString($data.title),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "course-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.course, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "course-item",
              onClick: ($event) => $options.goCourseDetail(item)
            }, [
              vue.createElementVNode("image", {
                class: "course-item-image",
                src: _ctx.$request.imageBaseUrl + item.iconPath
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "course-info" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode(
                    "text",
                    { class: "pay-item-title" },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "star-bg" }, [
                    vue.createVNode(_component_uni_rate, {
                      size: 10,
                      readonly: true,
                      max: 5,
                      value: item.star
                    }, null, 8, ["value"]),
                    vue.createElementVNode(
                      "text",
                      { class: "star-text" },
                      vue.toDisplayString(item.star) + "分",
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { class: "price-bg" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "price-text" },
                    "¥ " + vue.toDisplayString($options.coursePrice(item)),
                    1
                    /* TEXT */
                  ),
                  !$data.user || $data.user.isVip == 0 ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "vip-price-text"
                    },
                    vue.toDisplayString(item.vipPrice == 0 ? "VIP免费" : "VIP: ￥" + item.vipPrice),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ])
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesStudyCourseListCourseList = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/courseList/courseList.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        titles: ["刷题排行", "试卷套数排行"],
        questionRanks: [],
        examRanks: [],
        type: 1,
        user: null
      };
    },
    onLoad() {
      this.getUserTop(1);
      this.user = getUser();
    },
    methods: {
      onClickLeft() {
        uni.navigateBack();
      },
      // type，1试题排行，2试卷排行
      getUserTop(type) {
        let that = this;
        this.$request.get("/api/topic/user_topic", {
          type
        }).then((res) => {
          if (type == 1) {
            that.questionRanks = res.data;
          }
          if (type == 2) {
            that.examRanks = res.data;
          }
        }, function(err) {
        });
      },
      onClickTab(e) {
        this.type = e.index + 1;
        if (this.type == 1 && this.questionRanks.length == 0) {
          this.getUserTop(1);
        }
        if (this.type == 2 && this.examRanks.length == 0) {
          this.getUserTop(2);
        }
      }
    },
    computed: {
      myRank() {
        let that = this;
        return function() {
          let list = that.type == 1 ? that.questionRanks : that.examRanks;
          if (list.length == 0 || that.user == null) {
            return "未排名";
          }
          for (var i = 0; i < list.length; i++) {
            let item = list[i];
            if (item.uid == that.user.id) {
              let rank = i + 1;
              if (100 < rank) {
                return "99+";
              }
              return rank;
            }
          }
          return "未排名";
        };
      },
      list() {
        return this.type == 1 ? this.questionRanks : this.examRanks;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_van_icon = vue.resolveComponent("van-icon");
    const _component_fui_tabs = resolveEasycom(vue.resolveDynamicComponent("fui-tabs"), __easycom_0$1);
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_2);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        statusBar: "",
        fixed: true,
        border: false,
        "left-width": "50px",
        "right-width": "50px"
      }, {
        left: vue.withCtx(() => [
          vue.createVNode(_component_van_icon, {
            onClick: $options.onClickLeft,
            name: "arrow-left",
            size: "22",
            color: "#333"
          }, null, 8, ["onClick"])
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createVNode(_component_fui_tabs, {
              tabs: $data.titles,
              scroll: "",
              height: 64,
              center: true,
              short: false,
              fontWeight: "bold",
              selectedFontWeight: "bold",
              color: "#333333",
              "selected-color": "#333333",
              size: "28",
              "selected-size": "28",
              "slider-background": "#70CAA3",
              scale: "1.0",
              onChange: $options.onClickTab
            }, null, 8, ["tabs", "onChange"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "section-header" }, [
        vue.createElementVNode("view", { class: "my-rank-bg" }, [
          vue.createElementVNode("text", { class: "my-rank-title" }, "我的排名"),
          vue.createElementVNode(
            "view",
            { class: "my-rank-num" },
            vue.toDisplayString($options.myRank()),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "list-title" }, [
          vue.createElementVNode("text", null, "排名"),
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($data.type == 1 ? "答对题数" : "试卷套数"),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createVNode(_component_uni_list, null, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.list, (item, index) => {
              return vue.openBlock(), vue.createBlock(
                _component_uni_list_item,
                { class: "item" },
                {
                  body: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "item-body" }, [
                      vue.createElementVNode("view", { class: "item-body-left" }, [
                        index == 0 ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 0,
                          class: "item-icon-no-1",
                          src: "/static/exercise/nav_trophy.png"
                        })) : (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 1,
                            class: vue.normalizeClass(["item-rank", { "rank-color-1": index == 1, "rank-color-2": index == 2, "rank-color-other": index != 1 && index != 2 }])
                          },
                          vue.toDisplayString(index + 1),
                          3
                          /* TEXT, CLASS */
                        )),
                        vue.createElementVNode(
                          "view",
                          { class: "item-username" },
                          vue.toDisplayString(item.username),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "item-count" },
                        vue.toDisplayString(item.counts),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              );
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesExerciseRankRank = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/exercise/rank/rank.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        titles: ["模拟试卷", "历年真题"],
        type: 0,
        simulations: [],
        historys: [],
        colors: ["#FFD478", "#5BBF94", "#FEA08E", "#DAAFDE", "#8FCFD5"]
      };
    },
    onLoad() {
      this.getTypeList(0);
    },
    methods: {
      onClickTab(e) {
        this.type = e.index;
        if (e.index == 0 && this.simulations.length == 0) {
          this.getTypeList(0);
        }
        if (e.index == 1 && this.historys.length == 0) {
          this.getTypeList(1);
        }
      },
      getTypeList(type) {
        let that = this;
        this.$request.get("/api/exam/type_list", {
          type: type + 1
        }).then((res) => {
          if (type == 0) {
            that.simulations = res.rows;
          }
          if (type == 1) {
            that.historys = res.rows;
          }
        }, function(err) {
        });
      },
      goExamList(item) {
        uni.navigateTo({
          url: "/pages/exercise/simulationTest/examList?data=" + encodeURIComponent(JSON.stringify(item))
        });
      }
    },
    computed: {
      list() {
        return this.type == 0 ? this.simulations : this.historys;
      },
      lineColor() {
        return function(index) {
          if (index / 5 > 0) {
            return this.colors[index % 5];
          } else {
            if (index % 4 == 0) {
              return this.colors.lastobject;
            } else {
              return this.colors[index % 4];
            }
          }
        };
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_tabs = resolveEasycom(vue.resolveDynamicComponent("fui-tabs"), __easycom_0$1);
    const _component_van_icon = vue.resolveComponent("van-icon");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_fui_tabs, {
        tabs: $data.titles,
        scroll: "",
        center: true,
        short: false,
        fontWeight: "bold",
        selectedFontWeight: "bold",
        color: "#333333",
        "selected-color": "#70CAA3",
        size: "28",
        "selected-size": "28",
        "slider-background": "#70CAA3",
        scale: "1.0",
        onChange: $options.onClickTab
      }, null, 8, ["tabs", "onChange"]),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($options.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.goExamList(item),
            class: "item"
          }, [
            vue.createElementVNode("view", { class: "d-flex align-items-center" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "line",
                  style: vue.normalizeStyle({ backgroundColor: $options.lineColor(index) })
                },
                null,
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(item.title),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "d-flex align-items-center" }, [
              vue.createElementVNode(
                "text",
                { class: "des" },
                vue.toDisplayString(item.count) + "套",
                1
                /* TEXT */
              ),
              vue.createVNode(_component_van_icon, {
                name: "arrow",
                color: "#777777"
              })
            ])
          ], 8, ["onClick"]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesExerciseSimulationTestSimulationTest = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/exercise/simulationTest/simulationTest.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        titles: ["乐理", "音乐鉴赏", "视唱", "听记"]
      };
    },
    methods: {
      clickItem(index) {
        this.$request.get("/api/usermember/viewDay", {
          dayId: index + 1
        }).then((res) => {
          let item = {
            "dayId": index + 1,
            "fromType": 4
          };
          uni.navigateTo({
            url: "/pages/exercise/question/question?data=" + encodeURIComponent(JSON.stringify(item))
          });
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "item-bg justify-between" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.titles, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "item",
              onClick: ($event) => $options.clickItem(index)
            }, [
              vue.createElementVNode("image", {
                class: "image",
                src: "/static/exercise/daily_practice/daily_practice" + index + ".png"
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "text",
                { class: "text" },
                vue.toDisplayString(item),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesExerciseDailyPracticeDailyPractice = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/exercise/dailyPractice/dailyPractice.vue"]]);
  const _sfc_main$9 = {
    name: "CheckOption",
    data() {
      return {};
    },
    props: {
      data: {
        data: [Object],
        default: null
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.data.listQycTopicOptionLower, (option, index) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            [
              option.type == 1 ? (vue.openBlock(), vue.createElementBlock(
                "text",
                { key: 0 },
                vue.toDisplayString(option.content),
                1
                /* TEXT */
              )) : option.type == 2 ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 1,
                src: _ctx.$request.imageBaseUrl + option.fileUrl
              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const CheckOption = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/components/checkOption/checkOption.vue"]]);
  const _sfc_main$8 = {
    components: {
      CheckOption
    },
    data() {
      return {
        title: "",
        // 1视频练习 2自由练习 3闯关练习 4 每日一练 5 错题集 6 模拟测试 7 我的收藏 8 每日一练回顾 9自由练习回顾 10 试题回顾 11 重新测试 12 重新闯关 13 闯关练习回顾
        fromType: 1,
        cateLogDetail: null,
        dayId: null,
        exam: null,
        isCollection: false,
        //是否已收藏
        // 当前题型id  1:填空题 2:单选题 3:多选题 4判断题 5主观题
        subjectIndex: 0,
        //跳转索引
        autoShowAnswer: false,
        //答错是否显答案
        autoRadioNext: false,
        //判断题、单项题，自动移下一题
        swiperHeight: "800px",
        //
        subjectList: [],
        modalCard: null
        //显示答题卡
      };
    },
    onReady() {
      var tempHeight = 800;
      var that = this;
      uni.getSystemInfo({
        //获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
        success: function(res) {
          tempHeight = res.windowHeight;
          formatAppLog("log", "at pages/exercise/question/question.vue:190", "屏幕可用高度 " + tempHeight);
          uni.createSelectorQuery().select("#top-box").fields({
            size: true,
            scrollOffset: true
          }, (data) => {
            tempHeight -= data.height;
            formatAppLog("log", "at pages/exercise/question/question.vue:197", "减掉顶部后的高度 " + tempHeight);
            uni.createSelectorQuery().select("#foot-box").fields({
              size: true,
              scrollOffset: true
            }, (data2) => {
              tempHeight -= data2.height;
              formatAppLog("log", "at pages/exercise/question/question.vue:204", "减掉底部后的高度 " + tempHeight);
              uni.createSelectorQuery().select("#nav-bar").fields({
                size: true,
                scrollOffset: true
              }, (data3) => {
                tempHeight -= data3.height;
                formatAppLog("log", "at pages/exercise/question/question.vue:211", "减掉导航栏后的高度 " + tempHeight);
                that.swiperHeight = tempHeight + "px";
                formatAppLog("log", "at pages/exercise/question/question.vue:213", "滑屏最后高度 " + that.swiperHeight);
              }).exec();
            }).exec();
          }).exec();
        }
      });
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      formatAppLog("log", "at pages/exercise/question/question.vue:224", data);
      if (data.fromType) {
        this.fromType = data.fromType;
        switch (this.fromType) {
          case 4:
            {
              this.title = "每日一练";
            }
            break;
        }
      }
      if (data.cateLogDetail) {
        this.cateLogDetail = data.cateLogDetail;
      }
      if (data.dayId) {
        this.dayId = data.dayId;
      }
      if (data.exam) {
        this.exam = data.exam;
        this.title = this.exam.name;
        this.examId = this.exam.id;
      }
      this.getQuestions();
    },
    methods: {
      onClickLeft() {
        uni.navigateBack();
      },
      getQuestions() {
        let url = "";
        let params = {};
        if (this.fromType == 1) {
          url = "/api/topic/topic_continue_study";
          params["courseId"] = this.cateLogDetail.courseId;
          params["catalogId"] = this.cateLogDetail.id;
        }
        if (this.fromType == 4) {
          url = "/api/usermember/showDay";
          params["dayId"] = this.dayId;
        }
        if (this.fromType == 5) {
          url = "/api/usermember/showMyError";
        }
        if (this.fromType == 6) {
          url = "/api/exam/topicListByExam";
          params["id"] = this.exam.id;
        }
        if (this.fromType == 7) {
          url = "/api/usermember/showMyCollection";
          params["type"] = 2;
        }
        let that = this;
        this.$request.get(url, params).then((res) => {
          that.subjectList = res.data.list;
          that.subjectIndex = res.data.myCurrentTopic;
          that.isCollection = that.subjectList[that.subjectIndex].isCollection;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      showCardModal: function(e) {
        this.modalCard = e.currentTarget.dataset.target;
      },
      hideCardModal: function(e) {
        this.modalCard = null;
      },
      SwiperChange: function(e) {
        let index = e.target.current;
        if (index != void 0) {
          this.subjectIndex = index;
          this.isCollection = this.subjectList[index].isCollection;
        }
      },
      next() {
        if (this.subjectIndex < this.subjectList.length - 1) {
          this.subjectIndex += 1;
        }
      },
      RadioboxChange: function(e) {
        var values = [e];
        this.subjectList[this.subjectIndex].answer = values;
        this.commitAnswer();
      },
      CheckboxChange: function(e) {
        var values = e;
        this.subjectList[this.subjectIndex].answer = values;
      },
      fillBlanksInput(e) {
        let key = e.target.id;
        let value = e.detail.value;
        let inputs = this.subjectList[this.subjectIndex].inputs;
        inputs[key] = value;
        this.subjectList[this.subjectIndex].inputs = inputs;
      },
      textInput: function(e) {
        this.subjectList[this.subjectIndex].answer = e.detail.value;
      },
      commitAnswer() {
        let item = this.subjectList[this.subjectIndex];
        if (item.answerResult != void 0) {
          return;
        }
        let url = "";
        let params = {
          topicId: item.id,
          answerList: item.answer
        };
        if (this.cateLogDetail != null) {
          params["catalogId"] = this.cateLogDetail.id;
          params["courseId"] = this.cateLogDetail.courseId;
        }
        if (this.dayId) {
          params["dayId"] = this.dayId;
        }
        if (this.examId) {
          params["examId"] = this.examId;
        }
        let that = this;
        let topicTypeId = item.topicTypeId;
        if (topicTypeId == 1) {
          let sortedKeys = Object.keys(item.inputs).sort();
          let sortedValues = sortedKeys.map((key) => item.inputs[key]).filter((item2) => {
            if (item2.length != 0) {
              return item2;
            }
          });
          if (sortedValues.length == 0 || sortedValues.length != item.fillBlanks.length) {
            uni.showToast({
              title: "请填写完整答案",
              duration: 2e3,
              icon: "none"
            });
            return;
          }
          params["answerList"] = sortedValues;
          url = "/api/topic/topic_sub1";
        } else if (topicTypeId == 2) {
          url = "/api/topic/topic_sub2";
        } else if (topicTypeId == 3) {
          url = "/api/topic/topic_sub3";
        } else
          ;
        this.$request.post(url, params).then((res) => {
          that.subjectList[that.subjectIndex].answerResult = res.data;
          if (that.autoRadioNext) {
            that.next();
          }
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      ShowAnswerChange: function(e) {
        if (this.subjectList[this.subjectIndex].showAnswer) {
          this.subjectList[this.subjectIndex].showAnswer = false;
        } else {
          this.subjectList[this.subjectIndex].showAnswer = true;
        }
      },
      FavorSubject: function(e) {
        if (this.isCollection) {
          let item = this.subjectList[this.subjectIndex];
          let that = this;
          this.$request.post("/api/topic/del_collection", {
            targetId: item.id,
            type: 2
          }).then((res) => {
            that.isCollection = false;
            that.subjectList[that.subjectIndex].isCollection = false;
            uni.showToast({
              title: "取消成功",
              duration: 2e3,
              icon: "none"
            });
          }, function(err) {
            uni.showToast({
              title: err.msg,
              duration: 2e3,
              icon: "none"
            });
          });
        } else {
          let item = this.subjectList[this.subjectIndex];
          let that = this;
          this.$request.post("/api/topic/add_collection", {
            targetId: item.id,
            type: 2
          }).then((res) => {
            that.isCollection = true;
            that.subjectList[that.subjectIndex].isCollection = true;
            uni.showToast({
              title: "收藏成功",
              duration: 2e3,
              icon: "none"
            });
          }, function(err) {
            uni.showToast({
              title: err.msg,
              duration: 2e3,
              icon: "none"
            });
          });
        }
      },
      MoveSubject: function(e) {
        if (e === -1 && this.subjectIndex != 0) {
          this.subjectIndex -= 1;
        }
        if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
          this.subjectIndex += 1;
        }
        this.isCollection = this.subjectList[this.subjectIndex].isCollection;
      },
      AppointedSubject: function(e) {
        this.modalCard = null;
        this.subjectIndex = e;
      },
      generateStemHtml(item) {
        for (var stem of item.listQycTopicStem) {
          formatAppLog("log", "at pages/exercise/question/question.vue:474", stem);
          switch (stem.type) {
          }
        }
        return item.topicHtml;
      }
    },
    computed: {
      judgeChecked() {
        return function(subject, str) {
          if (subject == void 0 || str.length == 0) {
            return -1;
          }
          let res = -1;
          if (subject.answerResult != void 0 && subject.answerResult.answer != void 0) {
            res = subject.answerResult.answer.indexOf(str);
          }
          if (res == -1 && subject.answer) {
            res = subject.answer.indexOf(str);
          }
          return res;
        };
      },
      checkedImage() {
        return function(subject, str) {
          if (subject == void 0 || str.length == 0 || subject.answerResult == void 0) {
            return "/static/question/select.png";
          }
          if (subject.answerResult.answer.indexOf(str) != -1) {
            return "/static/question/correct.png";
          } else {
            return "/static/question/error.png";
          }
        };
      },
      fillBlanks() {
        return function(subject) {
          if (subject.fillBlanks != void 0) {
            return subject.fillBlanks;
          }
          let fillBlanks = subject.listQycTopicStem.filter((item) => {
            if (item.type == 2) {
              return item;
            }
          });
          subject.inputs = {};
          subject.fillBlanks = fillBlanks;
          return fillBlanks;
        };
      },
      indexOf() {
        return function(obj, str) {
          if (obj == void 0 || str.length == 0) {
            return -1;
          }
          return obj.indexOf(str);
        };
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_van_icon = vue.resolveComponent("van-icon");
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
    const _component_van_radio = vue.resolveComponent("van-radio");
    const _component_CheckOption = vue.resolveComponent("CheckOption");
    const _component_van_radio_group = vue.resolveComponent("van-radio-group");
    const _component_van_checkbox = vue.resolveComponent("van-checkbox");
    const _component_van_checkbox_group = vue.resolveComponent("van-checkbox-group");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_nav_bar, {
        id: "nav-bar",
        statusBar: "",
        fixed: true,
        border: false,
        "left-width": "22px",
        "right-width": "22px"
      }, {
        left: vue.withCtx(() => [
          vue.createVNode(_component_van_icon, {
            onClick: $options.onClickLeft,
            name: "arrow-left",
            size: "22",
            color: "#333"
          }, null, 8, ["onClick"])
        ]),
        right: vue.withCtx(() => [
          $data.isCollection == true ? (vue.openBlock(), vue.createBlock(_component_van_icon, {
            key: 0,
            onClick: $options.FavorSubject,
            name: "star",
            size: "20",
            color: "#FECB65"
          }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createBlock(_component_van_icon, {
            key: 1,
            onClick: $options.FavorSubject,
            name: "star-o",
            size: "20",
            color: "#333"
          }, null, 8, ["onClick"]))
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            { class: "title" },
            vue.toDisplayString($data.title),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", {
        id: "top-box",
        class: "cu-bar bg-white solid-bottom"
      }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($data.subjectIndex + 1),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            null,
            "/" + vue.toDisplayString($data.subjectList.length),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("swiper", {
        current: $data.subjectIndex,
        class: "swiper-box bg-white",
        onChange: _cache[3] || (_cache[3] = (...args) => $options.SwiperChange && $options.SwiperChange(...args)),
        style: vue.normalizeStyle({ "height": $data.swiperHeight })
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.subjectList, (subject, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
              index - $data.subjectIndex >= -1 && index - $data.subjectIndex <= 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createElementVNode("view", { class: "margin-left margin-right stem-bg" }, [
                  vue.createElementVNode("text", { class: "topic-type" }, [
                    subject.topicTypeId === 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "填空题")) : subject.topicTypeId === 2 ? (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "单选题")) : subject.topicTypeId === 3 ? (vue.openBlock(), vue.createElementBlock("text", { key: 2 }, "多选题")) : subject.topicTypeId === 4 ? (vue.openBlock(), vue.createElementBlock("text", { key: 3 }, "判断题")) : subject.topicTypeId === 5 ? (vue.openBlock(), vue.createElementBlock("text", { key: 4 }, "主观题")) : vue.createCommentVNode("v-if", true)
                  ]),
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(subject.listQycTopicStem, (stem, index2) => {
                      return vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        [
                          vue.createCommentVNode(" 题干类型1文字 2填空 3变量 4 图片 5录音 6特殊键盘 7填空题题干 8 五线谱题干 "),
                          stem.type == 1 ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 0,
                              class: "stem-text"
                            },
                            vue.toDisplayString(stem.title),
                            1
                            /* TEXT */
                          )) : stem.type == 2 ? (vue.openBlock(), vue.createElementBlock("text", {
                            key: 1,
                            class: "underline"
                          })) : vue.createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("view", null, [
                  subject.topicTypeId === 2 || subject.topicTypeId === 4 ? (vue.openBlock(), vue.createBlock(_component_van_radio_group, {
                    key: 0,
                    modelValue: subject.model,
                    "onUpdate:modelValue": ($event) => subject.model = $event,
                    disabled: subject.answerResult != null,
                    class: "block",
                    onChange: $options.RadioboxChange
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(subject.listQycTopicOption, (option) => {
                          return vue.openBlock(), vue.createElementBlock("view", { class: "cu-form-group" }, [
                            vue.createVNode(_component_van_radio, {
                              checked: $options.judgeChecked(subject, option.label) > -1 ? true : false,
                              name: option.label
                            }, {
                              icon: vue.withCtx((props) => [
                                vue.createElementVNode("img", {
                                  class: "radio-img-icon",
                                  src: props.checked ? $options.checkedImage(subject, option.label) : "/static/question/unselect.png"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["checked", "name"]),
                            vue.createElementVNode(
                              "view",
                              { class: "text-black option-title" },
                              vue.toDisplayString(option.label) + ".",
                              1
                              /* TEXT */
                            ),
                            vue.createVNode(_component_CheckOption, { data: option }, null, 8, ["data"])
                          ]);
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])) : subject.topicTypeId === 3 ? (vue.openBlock(), vue.createBlock(_component_van_checkbox_group, {
                    key: 1,
                    modelValue: subject.model,
                    "onUpdate:modelValue": ($event) => subject.model = $event,
                    disabled: subject.answerResult != null,
                    class: "block",
                    onChange: $options.CheckboxChange
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(subject.listQycTopicOption, (option) => {
                          return vue.openBlock(), vue.createElementBlock("view", { class: "cu-form-group" }, [
                            vue.createVNode(_component_van_checkbox, {
                              checked: $options.judgeChecked(subject, option.label) > -1 ? true : false,
                              name: option.label
                            }, {
                              icon: vue.withCtx((props) => [
                                vue.createElementVNode("img", {
                                  class: "radio-img-icon",
                                  src: props.checked ? $options.checkedImage(subject, option.label) : "/static/question/unselect.png"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["checked", "name"]),
                            vue.createElementVNode(
                              "view",
                              { class: "text-black option-title" },
                              vue.toDisplayString(option.label) + ".",
                              1
                              /* TEXT */
                            ),
                            vue.createVNode(_component_CheckOption, { data: option }, null, 8, ["data"])
                          ]);
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])) : subject.topicTypeId === 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList($options.fillBlanks(subject), (stem, index2) => {
                        return vue.openBlock(), vue.createElementBlock("view", { class: "cu-form-group padding-tb-sm" }, [
                          vue.createElementVNode(
                            "view",
                            { class: "fill-Blanks-title" },
                            " 第" + vue.toDisplayString(index2 + 1) + "空： ",
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("view", { class: "solid-bottom flex-fill fill-Blanks-input-bg" }, [
                            vue.createElementVNode("input", {
                              disabled: subject.answerResult != null,
                              id: "input" + index2,
                              onInput: _cache[0] || (_cache[0] = (...args) => $options.fillBlanksInput && $options.fillBlanksInput(...args)),
                              placeholder: "点击此处输入答案",
                              "placeholder-style": "color:#AAAAAA",
                              value: subject.answerResult == null ? "" : subject.answerResult.result[index2].value
                            }, null, 40, ["disabled", "id", "value"])
                          ]),
                          vue.createElementVNode("view", { style: { "width": "20px", "height": "20px" } }, [
                            subject.answerResult ? (vue.openBlock(), vue.createElementBlock(
                              vue.Fragment,
                              { key: 0 },
                              [
                                subject.answerResult.result[index2].status == true ? (vue.openBlock(), vue.createElementBlock("image", {
                                  key: 0,
                                  style: { "width": "20px", "height": "20px" },
                                  src: "/static/question/correct.png"
                                })) : vue.createCommentVNode("v-if", true),
                                subject.answerResult.result[index2].status == false ? (vue.openBlock(), vue.createElementBlock("image", {
                                  key: 1,
                                  style: { "width": "20px", "height": "20px" },
                                  src: "/static/question/error.png"
                                })) : vue.createCommentVNode("v-if", true)
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : vue.createCommentVNode("v-if", true)
                          ])
                        ]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ])) : subject.topicTypeId === 5 ? (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
                    vue.createElementVNode("view", { class: "cu-bar cu-bar-title bg-white margin-top" }, [
                      vue.createElementVNode("view", { class: "action text-black" }, " 答： ")
                    ]),
                    vue.createElementVNode("view", { class: "cu-form-group solid margin" }, [
                      vue.withDirectives(vue.createElementVNode("textarea", {
                        maxlength: "-1",
                        onBlur: _cache[1] || (_cache[1] = (...args) => $options.textInput && $options.textInput(...args)),
                        "onUpdate:modelValue": ($event) => subject.answer = $event,
                        placeholder: "多行文本输入框"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vue.vModelText, subject.answer]
                      ])
                    ])
                  ])) : vue.createCommentVNode("v-if", true)
                ]),
                subject.topicTypeId != 2 && subject.topicTypeId != 4 && subject.answerResult == null ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "commit-bg",
                  style: { "display": "flex" }
                }, [
                  vue.createElementVNode("view", {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.commitAnswer && $options.commitAnswer(...args)),
                    class: "commit-btn"
                  }, "提交")
                ])) : vue.createCommentVNode("v-if", true),
                subject.answerResult != null ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "margin-top margin-left margin-right"
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["answer-result margin-bottom-lg", { "answer-result-error": subject.answerResult.isTrue == false }])
                    },
                    vue.toDisplayString(subject.answerResult.isTrue == true ? "回答正确" : "回答错误"),
                    3
                    /* TEXT, CLASS */
                  ),
                  vue.createElementVNode("view", { class: "margin-bottom-lg" }, [
                    vue.createElementVNode("text", { class: "text-bold margin-right" }, "答案"),
                    vue.createElementVNode("text", {
                      class: "padding-left-ml text-theme fo-17",
                      innerHTML: subject.answerResult.answer
                    }, null, 8, ["innerHTML"])
                  ]),
                  vue.createElementVNode("view", { class: "d-flex" }, [
                    vue.createElementVNode("text", {
                      class: "margin-right",
                      style: { "flex-shrink": "0" }
                    }, "解析"),
                    vue.createElementVNode("text", {
                      innerHTML: subject.answerResult.topicInfo.analysis
                    }, null, 8, ["innerHTML"])
                  ])
                ])) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true)
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ], 44, ["current"]),
      vue.createElementVNode("view", {
        id: "foot-box",
        class: "cu-bar tabbar bg-white shadow foot"
      }, [
        vue.createElementVNode("view", {
          class: "action",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.MoveSubject(-1))
        }, [
          vue.createElementVNode("view", { class: "cuIcon-cu-image" }, [
            vue.createElementVNode("text", { class: "lg cuIcon-back text-gray" })
          ]),
          vue.createElementVNode("view", { class: "text-gray" }, "上一题")
        ]),
        vue.createElementVNode("view", {
          class: "action",
          onClick: _cache[5] || (_cache[5] = ($event) => $options.MoveSubject(1))
        }, [
          vue.createElementVNode("view", { class: "cuIcon-cu-image" }, [
            vue.createElementVNode("text", { class: "lg text-gray cuIcon-right" })
          ]),
          vue.createElementVNode("view", { class: "text-gray" }, "下一题")
        ])
      ])
    ]);
  }
  const PagesExerciseQuestionQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/exercise/question/question.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        courseData: null,
        cateLogDetail: null
      };
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      formatAppLog("log", "at pages/study/courseCatalogDetail/courseCatalogDetail.vue:17", data);
      this.courseData = data;
      this.getCateLogDetail();
    },
    methods: {
      getCateLogDetail() {
        let that = this;
        this.$request.get("/api/course/courseCateLog_detail", {
          id: that.courseData.id
        }).then((res) => {
          that.cateLogDetail = res.data;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      videoStudy() {
        let item = this.cateLogDetail;
        uni.navigateTo({
          url: "/pages/study/courseCatalogDetail/courseVideoPlay?data=" + encodeURIComponent(JSON.stringify(item))
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.videoStudy && $options.videoStudy(...args))
      }, "视频学习")
    ]);
  }
  const PagesStudyCourseCatalogDetailCourseCatalogDetail = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/courseCatalogDetail/courseCatalogDetail.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesBuyBuy = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/buy/buy.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        star: 0,
        text: "",
        courseData: null,
        commentRes: null
      };
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      this.courseData = data;
    },
    methods: {
      onChange(e) {
        this.star = e.value;
      },
      input(e) {
        this.text = e.detail.value;
      },
      comment() {
        if (this.text.length == 0) {
          uni.showToast({
            title: "请输入评论内容",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        if (this.star == 0) {
          uni.showToast({
            title: "请选择评分",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        let that = this;
        this.$request.post("/api/course/add_comment", {
          stars: that.star,
          content: that.text,
          courseId: that.courseData.id
        }).then((res) => {
          that.$refs.popup.open("center");
          that.commentRes = res;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      readComment() {
        this.$refs.popup.close();
        let item = this.courseData;
        uni.redirectTo({
          url: "/pages/study/courseDetail/courseReadComment?data=" + encodeURIComponent(JSON.stringify(item))
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "star-bg" }, [
        vue.createElementVNode("view", { class: "d-flex align-items-center" }, [
          vue.createElementVNode("view", null, "课程评分"),
          vue.createVNode(_component_uni_rate, {
            onChange: $options.onChange,
            class: "rete",
            "is-fill": false,
            size: 25,
            max: 5,
            value: $data.star,
            color: "rgb(252,155,9)",
            "active-color": "rgb(252,155,9)"
          }, null, 8, ["onChange", "value"])
        ]),
        vue.createElementVNode("text", { class: "star-text" }, [
          vue.createTextVNode(
            vue.toDisplayString($data.star.toFixed(1)),
            1
            /* TEXT */
          ),
          vue.createElementVNode("text", { class: "star-suffix" }, "分")
        ])
      ]),
      vue.createElementVNode("view", { class: "uni-textarea" }, [
        vue.createElementVNode(
          "textarea",
          {
            style: { "width": "100%" },
            onInput: _cache[0] || (_cache[0] = (...args) => $options.input && $options.input(...args)),
            maxlength: "250",
            placeholder: "请输入您的评价"
          },
          null,
          32
          /* HYDRATE_EVENTS */
        )
      ]),
      vue.createElementVNode("view", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.comment && $options.comment(...args)),
        class: "comment-bg"
      }, "提交评价"),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup",
          type: "center"
        },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "popup-content" }, [
              vue.createElementVNode("text", { class: "popup-title" }, "感谢您的评价!"),
              vue.createElementVNode("view", { class: "gold-coin-bg" }, [
                vue.createElementVNode("image", {
                  class: "gold-coin",
                  src: "/static/study/course_gold_coin.png"
                }),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($data.commentRes == null ? "+0" : $data.commentRes.msg),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", {
                onClick: _cache[2] || (_cache[2] = (...args) => $options.readComment && $options.readComment(...args)),
                class: "read-comment-btn"
              }, "查看评价")
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesStudyCourseDetailCourseComment = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/courseDetail/courseComment.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        star: 0,
        text: "",
        courseData: null,
        comment: null,
        isDelete: false
      };
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      this.courseData = data;
      this.getComment();
    },
    methods: {
      getComment() {
        let that = this;
        this.$request.get("/api/course/comment", {
          courseId: that.courseData.id
        }).then((res) => {
          that.comment = res.data;
          that.star = res.data.stars;
          that.text = res.data.content;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      deleteComment() {
        let that = this;
        uni.showModal({
          confirmText: "删除",
          confirmColor: "#70CAA3",
          title: "温馨提示",
          content: "评价删除后不可恢复，确认删除该评价吗?",
          success: function(res) {
            if (res.confirm) {
              that.deleteAction();
            }
          }
        });
      },
      deleteAction() {
        let that = this;
        this.$request.get("/api/course/del_comment", {
          id: that.comment.id
        }).then((res) => {
          that.isDelete = true;
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$2);
    const _component_van_divider = vue.resolveComponent("van-divider");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        $data.comment != null && !$data.isDelete ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
          vue.createElementVNode("view", { class: "star-bg" }, [
            vue.createElementVNode("view", { class: "d-flex align-items-center" }, [
              vue.createElementVNode("view", null, "课程评分"),
              vue.createVNode(_component_uni_rate, {
                class: "rete",
                "is-fill": false,
                size: 25,
                readonly: true,
                max: 5,
                value: $data.star,
                color: "rgb(252,155,9)",
                "active-color": "rgb(252,155,9)"
              }, null, 8, ["value"])
            ]),
            vue.createElementVNode("text", { class: "star-text" }, [
              vue.createTextVNode(
                vue.toDisplayString($data.star.toFixed(1)),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", { class: "star-suffix" }, "分")
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-textarea" }, [
            vue.createElementVNode("view", { class: "comment-title" }, "评价详情"),
            vue.createVNode(_component_van_divider, { style: { "margin": "0px", "margin-bottom": "15px" } }),
            vue.createElementVNode("textarea", {
              style: { "width": "100%" },
              value: $data.text,
              disabled: true,
              maxlength: "250",
              placeholder: "请输入您的评价"
            }, null, 8, ["value"])
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.deleteComment && $options.deleteComment(...args)),
            class: "comment-bg"
          }, "删除评价")
        ])) : vue.createCommentVNode("v-if", true),
        $data.isDelete ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          style: { "display": "flex", "justify-content": "center", "margin-top": "40px", "flex-direction": "column", "align-items": "center" }
        }, [
          vue.createElementVNode("image", {
            style: { "width": "170px", "height": "100px" },
            src: "/static/study/empty_comment.png"
          }),
          vue.createElementVNode("text", { style: { "color": "#969799", "font-size": "14px", "margin-top": "16px" } }, "评价已删除")
        ])) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesStudyCourseDetailCourseReadComment = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/courseDetail/courseReadComment.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        cateLogDetail: null
      };
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      formatAppLog("log", "at pages/study/courseCatalogDetail/courseVideoPlay.vue:16", data);
      this.cateLogDetail = data;
    },
    methods: {
      goStudy() {
        let item = {
          "cateLogDetail": this.cateLogDetail,
          "fromType": 1
        };
        uni.navigateTo({
          url: "/pages/exercise/question/question?data=" + encodeURIComponent(JSON.stringify(item))
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.goStudy && $options.goStudy(...args)),
        class: ""
      }, "继续学习")
    ]);
  }
  const PagesStudyCourseCatalogDetailCourseVideoPlay = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/study/courseCatalogDetail/courseVideoPlay.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        typeItem: null,
        currentPage: 1,
        isLastPage: false,
        list: [],
        user: null
      };
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      formatAppLog("log", "at pages/exercise/simulationTest/examList.vue:48", data);
      this.typeItem = data;
    },
    onShow() {
      this.user = getUser();
      setTimeout(() => {
        uni.startPullDownRefresh();
      }, 100);
    },
    onPullDownRefresh() {
      this.getListData();
    },
    onReachBottom() {
      if (this.isLastPage) {
        return;
      }
      this.getListData(this.currentPage + 1);
    },
    methods: {
      getListData(page = 1) {
        let that = this;
        this.$request.get("/api/exam/exam_list", {
          typeId: that.typeItem.id,
          pageNum: page
        }).then((res) => {
          uni.stopPullDownRefresh();
          that.currentPage = page;
          if (page == 1) {
            that.list = res.rows;
            formatAppLog("log", "at pages/exercise/simulationTest/examList.vue:77", res.rows);
          } else {
            let list = res.rows;
            that.list.push(...list);
          }
          that.isLastPage = res.total == that.list.length;
          formatAppLog("log", "at pages/exercise/simulationTest/examList.vue:83", that.list);
        }, function(err) {
          uni.stopPullDownRefresh();
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      },
      favorSubject(item, index) {
        if (item.isCollection) {
          let that = this;
          this.$request.post("/api/topic/del_collection", {
            targetId: item.id,
            type: 3
          }).then((res) => {
            that.list[index].isCollection = false;
            uni.showToast({
              title: "取消成功",
              duration: 2e3,
              icon: "none"
            });
          }, function(err) {
            uni.showToast({
              title: err.msg,
              duration: 2e3,
              icon: "none"
            });
          });
        } else {
          let that = this;
          this.$request.post("/api/topic/add_collection", {
            targetId: item.id,
            type: 3
          }).then((res) => {
            that.list[index].isCollection = true;
            uni.showToast({
              title: "收藏成功",
              duration: 2e3,
              icon: "none"
            });
          }, function(err) {
            uni.showToast({
              title: err.msg,
              duration: 2e3,
              icon: "none"
            });
          });
        }
      },
      goExamDetail(item) {
        let price = (this.user != null && this.user.isVip == 1 ? item.vipPrice : item.price).toFixed(2);
        if (item.isBuy == false && price != 0) {
          uni.navigateTo({
            url: "/pages/buy/buy"
          });
          return;
        }
        let data = {
          "exam": item,
          "fromType": 6
        };
        this.$request.get("/api/exam/viewExam", {
          examId: item.id
        }).then((res) => {
          uni.navigateTo({
            url: "/pages/exercise/question/question?data=" + encodeURIComponent(JSON.stringify(data))
          });
        }, function(err) {
          uni.showToast({
            title: err.msg,
            duration: 2e3,
            icon: "none"
          });
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_van_divider = vue.resolveComponent("van-divider");
    const _component_van_icon = vue.resolveComponent("van-icon");
    return vue.openBlock(), vue.createElementBlock("view", { style: { "padding-top": "9px" } }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.goExamDetail(item),
            class: "list-item",
            key: index
          }, [
            vue.createElementVNode("view", { class: "p-x-md p-y-md d-flex justify-between" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  { class: "title" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                ),
                item.lv == 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  class: "lv"
                }, "简单")) : item.lv == 2 ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 1,
                  class: "lv lv2"
                }, "中等")) : item.lv == 3 ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 2,
                  class: "lv lv3"
                }, "较难")) : item.lv == 4 ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 3,
                  class: "lv lv4"
                }, "困难")) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createElementVNode("view", { class: "d-flex flex-direction-column justify-content-end" }, [
                vue.createElementVNode("image", {
                  style: { "width": "23px", "height": "27px" },
                  src: "/static/exercise/exam-list-icon.png"
                })
              ])
            ]),
            vue.createVNode(_component_van_divider, { style: { "margin": "0px" } }),
            vue.createElementVNode("view", { class: "d-flex justify-between p-x-md p-y-md" }, [
              vue.createElementVNode("view", {
                onClick: vue.withModifiers(($event) => $options.favorSubject(item, index), ["stop"]),
                class: "d-flex align-items-center"
              }, [
                item.isCollection == 1 ? (vue.openBlock(), vue.createBlock(_component_van_icon, {
                  key: 0,
                  name: "star",
                  size: "20",
                  color: "#FECB65"
                })) : (vue.openBlock(), vue.createBlock(_component_van_icon, {
                  key: 1,
                  name: "star-o",
                  size: "20",
                  color: "#A9A9A9"
                })),
                vue.createElementVNode(
                  "view",
                  {
                    class: "m-l-ms fo-14",
                    style: { "color": "#A9A9A9" }
                  },
                  vue.toDisplayString(item.isCollection == true ? "已收藏" : "收藏"),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]),
              vue.createElementVNode(
                "view",
                { class: "price" },
                "¥" + vue.toDisplayString(($data.user != null && $data.user.isVip == 1 ? item.vipPrice : item.price).toFixed(2)),
                1
                /* TEXT */
              )
            ])
          ], 8, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $data.isLastPage ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "refresh-footer"
      }, "没有更多了")) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesExerciseSimulationTestExamList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/exercise/simulationTest/examList.vue"]]);
  const isDef = (val) => val !== void 0 && val !== null;
  const isFunction = (val) => typeof val === "function";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
  const isDate = (val) => Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());
  function isMobile(value) {
    value = value.replace(/[^-|\d]/g, "");
    return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
  }
  const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
  const isIOS$1 = () => inBrowser$1 ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
  function noop() {
  }
  const extend = Object.assign;
  const inBrowser$1 = typeof window !== "undefined";
  function get$1(object, path) {
    const keys = path.split(".");
    let result = object;
    keys.forEach((key) => {
      var _a;
      result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
    });
    return result;
  }
  function pick(obj, keys, ignoreUndefined) {
    return keys.reduce((ret, key) => {
      if (!ignoreUndefined || obj[key] !== void 0) {
        ret[key] = obj[key];
      }
      return ret;
    }, {});
  }
  const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
  const toArray = (item) => Array.isArray(item) ? item : [item];
  const unknownProp = null;
  const numericProp = [Number, String];
  const truthProp = {
    type: Boolean,
    default: true
  };
  const makeRequiredProp = (type) => ({
    type,
    required: true
  });
  const makeArrayProp = () => ({
    type: Array,
    default: () => []
  });
  const makeNumberProp = (defaultVal) => ({
    type: Number,
    default: defaultVal
  });
  const makeNumericProp = (defaultVal) => ({
    type: numericProp,
    default: defaultVal
  });
  const makeStringProp = (defaultVal) => ({
    type: String,
    default: defaultVal
  });
  var inBrowser = typeof window !== "undefined";
  function raf(fn) {
    return inBrowser ? requestAnimationFrame(fn) : -1;
  }
  function cancelRaf(id) {
    if (inBrowser) {
      cancelAnimationFrame(id);
    }
  }
  function doubleRaf(fn) {
    raf(() => raf(fn));
  }
  var isWindow = (val) => val === window;
  var makeDOMRect = (width2, height2) => ({
    top: 0,
    left: 0,
    right: width2,
    bottom: height2,
    width: width2,
    height: height2
  });
  var useRect = (elementOrRef) => {
    const element = vue.unref(elementOrRef);
    if (isWindow(element)) {
      const width2 = element.innerWidth;
      const height2 = element.innerHeight;
      return makeDOMRect(width2, height2);
    }
    if (element == null ? void 0 : element.getBoundingClientRect) {
      return element.getBoundingClientRect();
    }
    return makeDOMRect(0, 0);
  };
  function useToggle(defaultValue = false) {
    const state = vue.ref(defaultValue);
    const toggle = (value = !state.value) => {
      state.value = value;
    };
    return [state, toggle];
  }
  function useParent(key) {
    const parent = vue.inject(key, null);
    if (parent) {
      const instance2 = vue.getCurrentInstance();
      const { link, unlink, internalChildren } = parent;
      link(instance2);
      vue.onUnmounted(() => unlink(instance2));
      const index = vue.computed(() => internalChildren.indexOf(instance2));
      return {
        parent,
        index
      };
    }
    return {
      parent: null,
      index: vue.ref(-1)
    };
  }
  function flattenVNodes(children) {
    const result = [];
    const traverse = (children2) => {
      if (Array.isArray(children2)) {
        children2.forEach((child) => {
          var _a;
          if (vue.isVNode(child)) {
            result.push(child);
            if ((_a = child.component) == null ? void 0 : _a.subTree) {
              result.push(child.component.subTree);
              traverse(child.component.subTree.children);
            }
            if (child.children) {
              traverse(child.children);
            }
          }
        });
      }
    };
    traverse(children);
    return result;
  }
  var findVNodeIndex = (vnodes, vnode) => {
    const index = vnodes.indexOf(vnode);
    if (index === -1) {
      return vnodes.findIndex(
        (item) => vnode.key !== void 0 && vnode.key !== null && item.type === vnode.type && item.key === vnode.key
      );
    }
    return index;
  };
  function sortChildren(parent, publicChildren, internalChildren) {
    const vnodes = flattenVNodes(parent.subTree.children);
    internalChildren.sort(
      (a, b) => findVNodeIndex(vnodes, a.vnode) - findVNodeIndex(vnodes, b.vnode)
    );
    const orderedPublicChildren = internalChildren.map((item) => item.proxy);
    publicChildren.sort((a, b) => {
      const indexA = orderedPublicChildren.indexOf(a);
      const indexB = orderedPublicChildren.indexOf(b);
      return indexA - indexB;
    });
  }
  function useChildren(key) {
    const publicChildren = vue.reactive([]);
    const internalChildren = vue.reactive([]);
    const parent = vue.getCurrentInstance();
    const linkChildren = (value) => {
      const link = (child) => {
        if (child.proxy) {
          internalChildren.push(child);
          publicChildren.push(child.proxy);
          sortChildren(parent, publicChildren, internalChildren);
        }
      };
      const unlink = (child) => {
        const index = internalChildren.indexOf(child);
        publicChildren.splice(index, 1);
        internalChildren.splice(index, 1);
      };
      vue.provide(
        key,
        Object.assign(
          {
            link,
            unlink,
            children: publicChildren,
            internalChildren
          },
          value
        )
      );
    };
    return {
      children: publicChildren,
      linkChildren
    };
  }
  var SECOND = 1e3;
  var MINUTE = 60 * SECOND;
  var HOUR = 60 * MINUTE;
  var DAY = 24 * HOUR;
  function parseTime(time) {
    const days = Math.floor(time / DAY);
    const hours = Math.floor(time % DAY / HOUR);
    const minutes = Math.floor(time % HOUR / MINUTE);
    const seconds = Math.floor(time % MINUTE / SECOND);
    const milliseconds = Math.floor(time % SECOND);
    return {
      total: time,
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    };
  }
  function isSameSecond(time1, time2) {
    return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
  }
  function useCountDown(options) {
    let rafId;
    let endTime;
    let counting;
    let deactivated;
    const remain = vue.ref(options.time);
    const current2 = vue.computed(() => parseTime(remain.value));
    const pause = () => {
      counting = false;
      cancelRaf(rafId);
    };
    const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);
    const setRemain = (value) => {
      var _a, _b;
      remain.value = value;
      (_a = options.onChange) == null ? void 0 : _a.call(options, current2.value);
      if (value === 0) {
        pause();
        (_b = options.onFinish) == null ? void 0 : _b.call(options);
      }
    };
    const microTick = () => {
      rafId = raf(() => {
        if (counting) {
          setRemain(getCurrentRemain());
          if (remain.value > 0) {
            microTick();
          }
        }
      });
    };
    const macroTick = () => {
      rafId = raf(() => {
        if (counting) {
          const remainRemain = getCurrentRemain();
          if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
            setRemain(remainRemain);
          }
          if (remain.value > 0) {
            macroTick();
          }
        }
      });
    };
    const tick = () => {
      if (!inBrowser) {
        return;
      }
      if (options.millisecond) {
        microTick();
      } else {
        macroTick();
      }
    };
    const start2 = () => {
      if (!counting) {
        endTime = Date.now() + remain.value;
        counting = true;
        tick();
      }
    };
    const reset = (totalTime = options.time) => {
      pause();
      remain.value = totalTime;
    };
    vue.onBeforeUnmount(pause);
    vue.onActivated(() => {
      if (deactivated) {
        counting = true;
        deactivated = false;
        tick();
      }
    });
    vue.onDeactivated(() => {
      if (counting) {
        pause();
        deactivated = true;
      }
    });
    return {
      start: start2,
      pause,
      reset,
      current: current2
    };
  }
  function onMountedOrActivated(hook) {
    let mounted;
    vue.onMounted(() => {
      hook();
      vue.nextTick(() => {
        mounted = true;
      });
    });
    vue.onActivated(() => {
      if (mounted) {
        hook();
      }
    });
  }
  function useEventListener(type, listener, options = {}) {
    if (!inBrowser) {
      return;
    }
    const { target = window, passive: passive2 = false, capture = false } = options;
    let cleaned = false;
    let attached;
    const add = (target2) => {
      if (cleaned) {
        return;
      }
      const element = vue.unref(target2);
      if (element && !attached) {
        element.addEventListener(type, listener, {
          capture,
          passive: passive2
        });
        attached = true;
      }
    };
    const remove = (target2) => {
      if (cleaned) {
        return;
      }
      const element = vue.unref(target2);
      if (element && attached) {
        element.removeEventListener(type, listener, capture);
        attached = false;
      }
    };
    vue.onUnmounted(() => remove(target));
    vue.onDeactivated(() => remove(target));
    onMountedOrActivated(() => add(target));
    let stopWatch;
    if (vue.isRef(target)) {
      stopWatch = vue.watch(target, (val, oldVal) => {
        remove(oldVal);
        add(val);
      });
    }
    return () => {
      stopWatch == null ? void 0 : stopWatch();
      remove(target);
      cleaned = true;
    };
  }
  function useClickAway(target, listener, options = {}) {
    if (!inBrowser) {
      return;
    }
    const { eventName = "click" } = options;
    const onClick = (event) => {
      const targets = Array.isArray(target) ? target : [target];
      const isClickAway = targets.every((item) => {
        const element = vue.unref(item);
        return element && !element.contains(event.target);
      });
      if (isClickAway) {
        listener(event);
      }
    };
    useEventListener(eventName, onClick, { target: document });
  }
  var width;
  var height;
  function useWindowSize() {
    if (!width) {
      width = vue.ref(0);
      height = vue.ref(0);
      if (inBrowser) {
        const update = () => {
          width.value = window.innerWidth;
          height.value = window.innerHeight;
        };
        update();
        window.addEventListener("resize", update, { passive: true });
        window.addEventListener("orientationchange", update, { passive: true });
      }
    }
    return { width, height };
  }
  var overflowScrollReg = /scroll|auto|overlay/i;
  var defaultRoot = inBrowser ? window : void 0;
  function isElement$1(node) {
    const ELEMENT_NODE_TYPE = 1;
    return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
  }
  function getScrollParent$1(el, root = defaultRoot) {
    let node = el;
    while (node && node !== root && isElement$1(node)) {
      const { overflowY } = window.getComputedStyle(node);
      if (overflowScrollReg.test(overflowY)) {
        return node;
      }
      node = node.parentNode;
    }
    return root;
  }
  function useScrollParent(el, root = defaultRoot) {
    const scrollParent = vue.ref();
    vue.onMounted(() => {
      if (el.value) {
        scrollParent.value = getScrollParent$1(el.value, root);
      }
    });
    return scrollParent;
  }
  var visibility;
  function usePageVisibility() {
    if (!visibility) {
      visibility = vue.ref("visible");
      if (inBrowser) {
        const update = () => {
          visibility.value = document.hidden ? "hidden" : "visible";
        };
        update();
        window.addEventListener("visibilitychange", update);
      }
    }
    return visibility;
  }
  var CUSTOM_FIELD_INJECTION_KEY = Symbol("van-field");
  function useCustomFieldValue(customValue) {
    const field = vue.inject(CUSTOM_FIELD_INJECTION_KEY, null);
    if (field && !field.customValue.value) {
      field.customValue.value = customValue;
      vue.watch(customValue, () => {
        field.resetValidation();
        field.validateWithTrigger("onChange");
      });
    }
  }
  function getScrollTop(el) {
    const top2 = "scrollTop" in el ? el.scrollTop : el.pageYOffset;
    return Math.max(top2, 0);
  }
  function setScrollTop(el, value) {
    if ("scrollTop" in el) {
      el.scrollTop = value;
    } else {
      el.scrollTo(el.scrollX, value);
    }
  }
  function getRootScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  function setRootScrollTop(value) {
    setScrollTop(window, value);
    setScrollTop(document.body, value);
  }
  function getElementTop(el, scroller) {
    if (el === window) {
      return 0;
    }
    const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
    return useRect(el).top + scrollTop;
  }
  const isIOS = isIOS$1();
  function resetScroll() {
    if (isIOS) {
      setRootScrollTop(getRootScrollTop());
    }
  }
  const stopPropagation = (event) => event.stopPropagation();
  function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      stopPropagation(event);
    }
  }
  function isHidden(elementRef) {
    const el = vue.unref(elementRef);
    if (!el) {
      return false;
    }
    const style = window.getComputedStyle(el);
    const hidden = style.display === "none";
    const parentHidden = el.offsetParent === null && style.position !== "fixed";
    return hidden || parentHidden;
  }
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  function addUnit(value) {
    if (isDef(value)) {
      return isNumeric(value) ? `${value}px` : String(value);
    }
    return void 0;
  }
  function getSizeStyle(originSize) {
    if (isDef(originSize)) {
      if (Array.isArray(originSize)) {
        return {
          width: addUnit(originSize[0]),
          height: addUnit(originSize[1])
        };
      }
      const size = addUnit(originSize);
      return {
        width: size,
        height: size
      };
    }
  }
  function getZIndexStyle(zIndex) {
    const style = {};
    if (zIndex !== void 0) {
      style.zIndex = +zIndex;
    }
    return style;
  }
  let rootFontSize;
  function getRootFontSize() {
    if (!rootFontSize) {
      const doc = document.documentElement;
      const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
      rootFontSize = parseFloat(fontSize);
    }
    return rootFontSize;
  }
  function convertRem(value) {
    value = value.replace(/rem/g, "");
    return +value * getRootFontSize();
  }
  function convertVw(value) {
    value = value.replace(/vw/g, "");
    return +value * windowWidth.value / 100;
  }
  function convertVh(value) {
    value = value.replace(/vh/g, "");
    return +value * windowHeight.value / 100;
  }
  function unitToPx(value) {
    if (typeof value === "number") {
      return value;
    }
    if (inBrowser$1) {
      if (value.includes("rem")) {
        return convertRem(value);
      }
      if (value.includes("vw")) {
        return convertVw(value);
      }
      if (value.includes("vh")) {
        return convertVh(value);
      }
    }
    return parseFloat(value);
  }
  const camelizeRE = /-(\w)/g;
  const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
  const kebabCase = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  function padZero(num, targetLength = 2) {
    let str = num + "";
    while (str.length < targetLength) {
      str = "0" + str;
    }
    return str;
  }
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  function trimExtraChar(value, char, regExp) {
    const index = value.indexOf(char);
    if (index === -1) {
      return value;
    }
    if (char === "-" && index !== 0) {
      return value.slice(0, index);
    }
    return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
  }
  function formatNumber(value, allowDot = true, allowMinus = true) {
    if (allowDot) {
      value = trimExtraChar(value, ".", /\./g);
    } else {
      value = value.split(".")[0];
    }
    if (allowMinus) {
      value = trimExtraChar(value, "-", /-/g);
    } else {
      value = value.replace(/-/, "");
    }
    const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
    return value.replace(regExp, "");
  }
  function addNumber(num1, num2) {
    const cardinal = 10 ** 10;
    return Math.round((num1 + num2) * cardinal) / cardinal;
  }
  const { hasOwnProperty } = Object.prototype;
  function assignKey(to, from, key) {
    const val = from[key];
    if (!isDef(val)) {
      return;
    }
    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
      to[key] = val;
    } else {
      to[key] = deepAssign(Object(to[key]), val);
    }
  }
  function deepAssign(to, from) {
    Object.keys(from).forEach((key) => {
      assignKey(to, from, key);
    });
    return to;
  }
  var stdin_default$1M = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    confirm: "确认",
    cancel: "取消",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
      end: "结束",
      start: "开始",
      title: "日期选择",
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      monthTitle: (year, month) => `${year}年${month}月`,
      rangePrompt: (maxRange) => `最多选择 ${maxRange} 天`
    },
    vanCascader: {
      select: "请选择"
    },
    vanPagination: {
      prev: "上一页",
      next: "下一页"
    },
    vanPullRefresh: {
      pulling: "下拉即可刷新...",
      loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
      label: "合计:"
    },
    vanCoupon: {
      unlimited: "无门槛",
      discount: (discount) => `${discount}折`,
      condition: (condition) => `满${condition}元可用`
    },
    vanCouponCell: {
      title: "优惠券",
      count: (count) => `${count}张可用`
    },
    vanCouponList: {
      exchange: "兑换",
      close: "不使用",
      enable: "可用",
      disabled: "不可用",
      placeholder: "输入优惠码"
    },
    vanAddressEdit: {
      area: "地区",
      areaEmpty: "请选择地区",
      addressEmpty: "请填写详细地址",
      addressDetail: "详细地址",
      defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
      add: "新增地址"
    }
  };
  const lang = vue.ref("zh-CN");
  const messages = vue.reactive({
    "zh-CN": stdin_default$1M
  });
  const Locale = {
    messages() {
      return messages[lang.value];
    },
    use(newLang, newMessages) {
      lang.value = newLang;
      this.add({ [newLang]: newMessages });
    },
    add(newMessages = {}) {
      deepAssign(messages, newMessages);
    }
  };
  var stdin_default$1L = Locale;
  function createTranslate(name2) {
    const prefix = camelize(name2) + ".";
    return (path, ...args) => {
      const messages2 = stdin_default$1L.messages();
      const message = get$1(messages2, prefix + path) || get$1(messages2, path);
      return isFunction(message) ? message(...args) : message;
    };
  }
  function genBem(name2, mods) {
    if (!mods) {
      return "";
    }
    if (typeof mods === "string") {
      return ` ${name2}--${mods}`;
    }
    if (Array.isArray(mods)) {
      return mods.reduce(
        (ret, item) => ret + genBem(name2, item),
        ""
      );
    }
    return Object.keys(mods).reduce(
      (ret, key) => ret + (mods[key] ? genBem(name2, key) : ""),
      ""
    );
  }
  function createBEM(name2) {
    return (el, mods) => {
      if (el && typeof el !== "string") {
        mods = el;
        el = "";
      }
      el = el ? `${name2}__${el}` : name2;
      return `${el}${genBem(el, mods)}`;
    };
  }
  function createNamespace(name2) {
    const prefixedName = `van-${name2}`;
    return [
      prefixedName,
      createBEM(prefixedName),
      createTranslate(prefixedName)
    ];
  }
  const BORDER = "van-hairline";
  const BORDER_TOP = `${BORDER}--top`;
  const BORDER_LEFT = `${BORDER}--left`;
  const BORDER_BOTTOM = `${BORDER}--bottom`;
  const BORDER_SURROUND = `${BORDER}--surround`;
  const BORDER_TOP_BOTTOM = `${BORDER}--top-bottom`;
  const BORDER_UNSET_TOP_BOTTOM = `${BORDER}-unset--top-bottom`;
  const HAPTICS_FEEDBACK = "van-haptics-feedback";
  const FORM_KEY = Symbol("van-form");
  const LONG_PRESS_START_TIME = 500;
  function callInterceptor(interceptor, {
    args = [],
    done,
    canceled
  }) {
    if (interceptor) {
      const returnVal = interceptor.apply(null, args);
      if (isPromise(returnVal)) {
        returnVal.then((value) => {
          if (value) {
            done();
          } else if (canceled) {
            canceled();
          }
        }).catch(noop);
      } else if (returnVal) {
        done();
      } else if (canceled) {
        canceled();
      }
    } else {
      done();
    }
  }
  function withInstall(options) {
    options.install = (app) => {
      const { name: name2 } = options;
      if (name2) {
        app.component(name2, options);
        app.component(camelize(`-${name2}`), options);
      }
    };
    return options;
  }
  const POPUP_TOGGLE_KEY = Symbol();
  function onPopupReopen(callback) {
    const popupToggleStatus = vue.inject(POPUP_TOGGLE_KEY, null);
    if (popupToggleStatus) {
      vue.watch(popupToggleStatus, (show) => {
        if (show) {
          callback();
        }
      });
    }
  }
  const useHeight = (element, withSafeArea) => {
    const height2 = vue.ref();
    const setHeight = () => {
      height2.value = useRect(element).height;
    };
    vue.onMounted(() => {
      vue.nextTick(setHeight);
      if (withSafeArea) {
        for (let i = 1; i <= 3; i++) {
          setTimeout(setHeight, 100 * i);
        }
      }
    });
    onPopupReopen(() => vue.nextTick(setHeight));
    vue.watch([windowWidth, windowHeight], setHeight);
    return height2;
  };
  function usePlaceholder(contentRef, bem2) {
    const height2 = useHeight(contentRef, true);
    return (renderContent) => vue.createVNode("div", {
      "class": bem2("placeholder"),
      "style": {
        height: height2.value ? `${height2.value}px` : void 0
      }
    }, [renderContent()]);
  }
  const [name$1D, bem$1y] = createNamespace("action-bar");
  const ACTION_BAR_KEY = Symbol(name$1D);
  const actionBarProps = {
    placeholder: Boolean,
    safeAreaInsetBottom: truthProp
  };
  var stdin_default$1K = vue.defineComponent({
    name: name$1D,
    props: actionBarProps,
    setup(props, {
      slots
    }) {
      const root = vue.ref();
      const renderPlaceholder = usePlaceholder(root, bem$1y);
      const {
        linkChildren
      } = useChildren(ACTION_BAR_KEY);
      linkChildren();
      const renderActionBar = () => {
        var _a;
        return vue.createVNode("div", {
          "ref": root,
          "class": [bem$1y(), {
            "van-safe-area-bottom": props.safeAreaInsetBottom
          }]
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
      return () => {
        if (props.placeholder) {
          return renderPlaceholder(renderActionBar);
        }
        return renderActionBar();
      };
    }
  });
  const ActionBar = withInstall(stdin_default$1K);
  function useExpose(apis) {
    const instance2 = vue.getCurrentInstance();
    if (instance2) {
      extend(instance2.proxy, apis);
    }
  }
  const routeProps = {
    to: [String, Object],
    url: String,
    replace: Boolean
  };
  function route({
    to,
    url,
    replace,
    $router: router
  }) {
    if (to && router) {
      router[replace ? "replace" : "push"](to);
    } else if (url) {
      replace ? location.replace(url) : location.href = url;
    }
  }
  function useRoute() {
    const vm = vue.getCurrentInstance().proxy;
    return () => route(vm);
  }
  const [name$1C, bem$1x] = createNamespace("badge");
  const badgeProps = {
    dot: Boolean,
    max: numericProp,
    tag: makeStringProp("div"),
    color: String,
    offset: Array,
    content: numericProp,
    showZero: truthProp,
    position: makeStringProp("top-right")
  };
  var stdin_default$1J = vue.defineComponent({
    name: name$1C,
    props: badgeProps,
    setup(props, {
      slots
    }) {
      const hasContent = () => {
        if (slots.content) {
          return true;
        }
        const {
          content,
          showZero
        } = props;
        return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
      };
      const renderContent = () => {
        const {
          dot,
          max,
          content
        } = props;
        if (!dot && hasContent()) {
          if (slots.content) {
            return slots.content();
          }
          if (isDef(max) && isNumeric(content) && +content > +max) {
            return `${max}+`;
          }
          return content;
        }
      };
      const getOffsetWithMinusString = (val) => val.startsWith("-") ? val.replace("-", "") : `-${val}`;
      const style = vue.computed(() => {
        const style2 = {
          background: props.color
        };
        if (props.offset) {
          const [x, y] = props.offset;
          const {
            position
          } = props;
          const [offsetY, offsetX] = position.split("-");
          if (slots.default) {
            if (typeof y === "number") {
              style2[offsetY] = addUnit(offsetY === "top" ? y : -y);
            } else {
              style2[offsetY] = offsetY === "top" ? addUnit(y) : getOffsetWithMinusString(y);
            }
            if (typeof x === "number") {
              style2[offsetX] = addUnit(offsetX === "left" ? x : -x);
            } else {
              style2[offsetX] = offsetX === "left" ? addUnit(x) : getOffsetWithMinusString(x);
            }
          } else {
            style2.marginTop = addUnit(y);
            style2.marginLeft = addUnit(x);
          }
        }
        return style2;
      });
      const renderBadge = () => {
        if (hasContent() || props.dot) {
          return vue.createVNode("div", {
            "class": bem$1x([props.position, {
              dot: props.dot,
              fixed: !!slots.default
            }]),
            "style": style.value
          }, [renderContent()]);
        }
      };
      return () => {
        if (slots.default) {
          const {
            tag
          } = props;
          return vue.createVNode(tag, {
            "class": bem$1x("wrapper")
          }, {
            default: () => [slots.default(), renderBadge()]
          });
        }
        return renderBadge();
      };
    }
  });
  const Badge = withInstall(stdin_default$1J);
  let globalZIndex = 2e3;
  const useGlobalZIndex = () => ++globalZIndex;
  const setGlobalZIndex = (val) => {
    globalZIndex = val;
  };
  const [name$1B, bem$1w] = createNamespace("config-provider");
  const CONFIG_PROVIDER_KEY = Symbol(name$1B);
  const configProviderProps = {
    tag: makeStringProp("div"),
    theme: makeStringProp("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    iconPrefix: String
  };
  function mapThemeVarsToCSSVars(themeVars) {
    const cssVars = {};
    Object.keys(themeVars).forEach((key) => {
      cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
    });
    return cssVars;
  }
  var stdin_default$1I = vue.defineComponent({
    name: name$1B,
    props: configProviderProps,
    setup(props, {
      slots
    }) {
      const style = vue.computed(() => mapThemeVarsToCSSVars(extend({}, props.themeVars, props.theme === "dark" ? props.themeVarsDark : props.themeVarsLight)));
      if (inBrowser$1) {
        const addTheme = () => {
          document.documentElement.classList.add(`van-theme-${props.theme}`);
        };
        const removeTheme = (theme = props.theme) => {
          document.documentElement.classList.remove(`van-theme-${theme}`);
        };
        vue.watch(() => props.theme, (newVal, oldVal) => {
          if (oldVal) {
            removeTheme(oldVal);
          }
          addTheme();
        }, {
          immediate: true
        });
        vue.onActivated(addTheme);
        vue.onDeactivated(removeTheme);
        vue.onBeforeUnmount(removeTheme);
      }
      vue.provide(CONFIG_PROVIDER_KEY, props);
      vue.watchEffect(() => {
        if (props.zIndex !== void 0) {
          setGlobalZIndex(props.zIndex);
        }
      });
      return () => vue.createVNode(props.tag, {
        "class": bem$1w(),
        "style": style.value
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    }
  });
  const [name$1A, bem$1v] = createNamespace("icon");
  const isImage$1 = (name2) => name2 == null ? void 0 : name2.includes("/");
  const iconProps = {
    dot: Boolean,
    tag: makeStringProp("i"),
    name: String,
    size: numericProp,
    badge: numericProp,
    color: String,
    badgeProps: Object,
    classPrefix: String
  };
  var stdin_default$1H = vue.defineComponent({
    name: name$1A,
    props: iconProps,
    setup(props, {
      slots
    }) {
      const config = vue.inject(CONFIG_PROVIDER_KEY, null);
      const classPrefix = vue.computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem$1v());
      return () => {
        const {
          tag,
          dot,
          name: name2,
          size,
          badge,
          color
        } = props;
        const isImageIcon = isImage$1(name2);
        return vue.createVNode(Badge, vue.mergeProps({
          "dot": dot,
          "tag": tag,
          "class": [classPrefix.value, isImageIcon ? "" : `${classPrefix.value}-${name2}`],
          "style": {
            color,
            fontSize: addUnit(size)
          },
          "content": badge
        }, props.badgeProps), {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots), isImageIcon && vue.createVNode("img", {
              "class": bem$1v("image"),
              "src": name2
            }, null)];
          }
        });
      };
    }
  });
  const Icon = withInstall(stdin_default$1H);
  const [name$1z, bem$1u] = createNamespace("loading");
  const SpinIcon = Array(12).fill(null).map((_, index) => vue.createVNode("i", {
    "class": bem$1u("line", String(index + 1))
  }, null));
  const CircularIcon = vue.createVNode("svg", {
    "class": bem$1u("circular"),
    "viewBox": "25 25 50 50"
  }, [vue.createVNode("circle", {
    "cx": "50",
    "cy": "50",
    "r": "20",
    "fill": "none"
  }, null)]);
  const loadingProps = {
    size: numericProp,
    type: makeStringProp("circular"),
    color: String,
    vertical: Boolean,
    textSize: numericProp,
    textColor: String
  };
  var stdin_default$1G = vue.defineComponent({
    name: name$1z,
    props: loadingProps,
    setup(props, {
      slots
    }) {
      const spinnerStyle = vue.computed(() => extend({
        color: props.color
      }, getSizeStyle(props.size)));
      const renderIcon = () => {
        const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
        return vue.createVNode("span", {
          "class": bem$1u("spinner", props.type),
          "style": spinnerStyle.value
        }, [slots.icon ? slots.icon() : DefaultIcon]);
      };
      const renderText = () => {
        var _a;
        if (slots.default) {
          return vue.createVNode("span", {
            "class": bem$1u("text"),
            "style": {
              fontSize: addUnit(props.textSize),
              color: (_a = props.textColor) != null ? _a : props.color
            }
          }, [slots.default()]);
        }
      };
      return () => {
        const {
          type,
          vertical
        } = props;
        return vue.createVNode("div", {
          "class": bem$1u([type, {
            vertical
          }]),
          "aria-live": "polite",
          "aria-busy": true
        }, [renderIcon(), renderText()]);
      };
    }
  });
  const Loading = withInstall(stdin_default$1G);
  const [name$1y, bem$1t] = createNamespace("button");
  const buttonProps = extend({}, routeProps, {
    tag: makeStringProp("button"),
    text: String,
    icon: String,
    type: makeStringProp("default"),
    size: makeStringProp("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: makeStringProp("button"),
    loadingSize: numericProp,
    loadingText: String,
    loadingType: String,
    iconPosition: makeStringProp("left")
  });
  var stdin_default$1F = vue.defineComponent({
    name: name$1y,
    props: buttonProps,
    emits: ["click"],
    setup(props, {
      emit,
      slots
    }) {
      const route2 = useRoute();
      const renderLoadingIcon = () => {
        if (slots.loading) {
          return slots.loading();
        }
        return vue.createVNode(Loading, {
          "size": props.loadingSize,
          "type": props.loadingType,
          "class": bem$1t("loading")
        }, null);
      };
      const renderIcon = () => {
        if (props.loading) {
          return renderLoadingIcon();
        }
        if (slots.icon) {
          return vue.createVNode("div", {
            "class": bem$1t("icon")
          }, [slots.icon()]);
        }
        if (props.icon) {
          return vue.createVNode(Icon, {
            "name": props.icon,
            "class": bem$1t("icon"),
            "classPrefix": props.iconPrefix
          }, null);
        }
      };
      const renderText = () => {
        let text;
        if (props.loading) {
          text = props.loadingText;
        } else {
          text = slots.default ? slots.default() : props.text;
        }
        if (text) {
          return vue.createVNode("span", {
            "class": bem$1t("text")
          }, [text]);
        }
      };
      const getStyle = () => {
        const {
          color,
          plain
        } = props;
        if (color) {
          const style = {
            color: plain ? color : "white"
          };
          if (!plain) {
            style.background = color;
          }
          if (color.includes("gradient")) {
            style.border = 0;
          } else {
            style.borderColor = color;
          }
          return style;
        }
      };
      const onClick = (event) => {
        if (props.loading) {
          preventDefault(event);
        } else if (!props.disabled) {
          emit("click", event);
          route2();
        }
      };
      return () => {
        const {
          tag,
          type,
          size,
          block,
          round: round2,
          plain,
          square,
          loading,
          disabled,
          hairline,
          nativeType,
          iconPosition
        } = props;
        const classes = [bem$1t([type, size, {
          plain,
          block,
          round: round2,
          square,
          loading,
          disabled,
          hairline
        }]), {
          [BORDER_SURROUND]: hairline
        }];
        return vue.createVNode(tag, {
          "type": nativeType,
          "class": classes,
          "style": getStyle(),
          "disabled": disabled,
          "onClick": onClick
        }, {
          default: () => [vue.createVNode("div", {
            "class": bem$1t("content")
          }, [iconPosition === "left" && renderIcon(), renderText(), iconPosition === "right" && renderIcon()])]
        });
      };
    }
  });
  const Button = withInstall(stdin_default$1F);
  const [name$1x, bem$1s] = createNamespace("action-bar-button");
  const actionBarButtonProps = extend({}, routeProps, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  });
  var stdin_default$1E = vue.defineComponent({
    name: name$1x,
    props: actionBarButtonProps,
    setup(props, {
      slots
    }) {
      const route2 = useRoute();
      const {
        parent,
        index
      } = useParent(ACTION_BAR_KEY);
      const isFirst = vue.computed(() => {
        if (parent) {
          const prev = parent.children[index.value - 1];
          return !(prev && "isButton" in prev);
        }
      });
      const isLast = vue.computed(() => {
        if (parent) {
          const next = parent.children[index.value + 1];
          return !(next && "isButton" in next);
        }
      });
      useExpose({
        isButton: true
      });
      return () => {
        const {
          type,
          icon,
          text,
          color,
          loading,
          disabled
        } = props;
        return vue.createVNode(Button, {
          "class": bem$1s([type, {
            last: isLast.value,
            first: isFirst.value
          }]),
          "size": "large",
          "type": type,
          "icon": icon,
          "color": color,
          "loading": loading,
          "disabled": disabled,
          "onClick": route2
        }, {
          default: () => [slots.default ? slots.default() : text]
        });
      };
    }
  });
  const ActionBarButton = withInstall(stdin_default$1E);
  const [name$1w, bem$1r] = createNamespace("action-bar-icon");
  const actionBarIconProps = extend({}, routeProps, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: numericProp,
    iconClass: unknownProp,
    badgeProps: Object,
    iconPrefix: String
  });
  var stdin_default$1D = vue.defineComponent({
    name: name$1w,
    props: actionBarIconProps,
    setup(props, {
      slots
    }) {
      const route2 = useRoute();
      useParent(ACTION_BAR_KEY);
      const renderIcon = () => {
        const {
          dot,
          badge,
          icon,
          color,
          iconClass,
          badgeProps: badgeProps2,
          iconPrefix
        } = props;
        if (slots.icon) {
          return vue.createVNode(Badge, vue.mergeProps({
            "dot": dot,
            "class": bem$1r("icon"),
            "content": badge
          }, badgeProps2), {
            default: slots.icon
          });
        }
        return vue.createVNode(Icon, {
          "tag": "div",
          "dot": dot,
          "name": icon,
          "badge": badge,
          "color": color,
          "class": [bem$1r("icon"), iconClass],
          "badgeProps": badgeProps2,
          "classPrefix": iconPrefix
        }, null);
      };
      return () => vue.createVNode("div", {
        "role": "button",
        "class": bem$1r(),
        "tabindex": 0,
        "onClick": route2
      }, [renderIcon(), slots.default ? slots.default() : props.text]);
    }
  });
  const ActionBarIcon = withInstall(stdin_default$1D);
  const popupSharedProps = {
    // whether to show popup
    show: Boolean,
    // z-index
    zIndex: numericProp,
    // whether to show overlay
    overlay: truthProp,
    // transition duration
    duration: numericProp,
    // teleport
    teleport: [String, Object],
    // prevent body scroll
    lockScroll: truthProp,
    // whether to lazy render
    lazyRender: truthProp,
    // callback function before close
    beforeClose: Function,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: unknownProp,
    // Initial rendering animation
    transitionAppear: Boolean,
    // whether to close popup when overlay is clicked
    closeOnClickOverlay: truthProp
  };
  const popupSharedPropKeys = Object.keys(
    popupSharedProps
  );
  function getDirection(x, y) {
    if (x > y) {
      return "horizontal";
    }
    if (y > x) {
      return "vertical";
    }
    return "";
  }
  function useTouch() {
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    const deltaX = vue.ref(0);
    const deltaY = vue.ref(0);
    const offsetX = vue.ref(0);
    const offsetY = vue.ref(0);
    const direction = vue.ref("");
    const isVertical = () => direction.value === "vertical";
    const isHorizontal = () => direction.value === "horizontal";
    const reset = () => {
      deltaX.value = 0;
      deltaY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      direction.value = "";
    };
    const start2 = (event) => {
      reset();
      startX.value = event.touches[0].clientX;
      startY.value = event.touches[0].clientY;
    };
    const move = (event) => {
      const touch = event.touches[0];
      deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value;
      deltaY.value = touch.clientY - startY.value;
      offsetX.value = Math.abs(deltaX.value);
      offsetY.value = Math.abs(deltaY.value);
      const LOCK_DIRECTION_DISTANCE = 10;
      if (!direction.value || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
        direction.value = getDirection(offsetX.value, offsetY.value);
      }
    };
    return {
      move,
      start: start2,
      reset,
      startX,
      startY,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      direction,
      isVertical,
      isHorizontal
    };
  }
  let totalLockCount = 0;
  const BODY_LOCK_CLASS = "van-overflow-hidden";
  function useLockScroll(rootRef, shouldLock) {
    const touch = useTouch();
    const DIRECTION_UP = "01";
    const DIRECTION_DOWN = "10";
    const onTouchMove = (event) => {
      touch.move(event);
      const direction = touch.deltaY.value > 0 ? DIRECTION_DOWN : DIRECTION_UP;
      const el = getScrollParent$1(
        event.target,
        rootRef.value
      );
      const { scrollHeight, offsetHeight, scrollTop } = el;
      let status = "11";
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? "00" : "01";
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = "10";
      }
      if (status !== "11" && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
        preventDefault(event, true);
      }
    };
    const lock = () => {
      document.addEventListener("touchstart", touch.start);
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      if (!totalLockCount) {
        document.body.classList.add(BODY_LOCK_CLASS);
      }
      totalLockCount++;
    };
    const unlock = () => {
      if (totalLockCount) {
        document.removeEventListener("touchstart", touch.start);
        document.removeEventListener("touchmove", onTouchMove);
        totalLockCount--;
        if (!totalLockCount) {
          document.body.classList.remove(BODY_LOCK_CLASS);
        }
      }
    };
    const init = () => shouldLock() && lock();
    const destroy = () => shouldLock() && unlock();
    onMountedOrActivated(init);
    vue.onDeactivated(destroy);
    vue.onBeforeUnmount(destroy);
    vue.watch(shouldLock, (value) => {
      value ? lock() : unlock();
    });
  }
  function useLazyRender(show) {
    const inited = vue.ref(false);
    vue.watch(
      show,
      (value) => {
        if (value) {
          inited.value = value;
        }
      },
      { immediate: true }
    );
    return (render) => () => inited.value ? render() : null;
  }
  const [name$1v, bem$1q] = createNamespace("overlay");
  const overlayProps = {
    show: Boolean,
    zIndex: numericProp,
    duration: numericProp,
    className: unknownProp,
    lockScroll: truthProp,
    lazyRender: truthProp,
    customStyle: Object
  };
  var stdin_default$1C = vue.defineComponent({
    name: name$1v,
    props: overlayProps,
    setup(props, {
      slots
    }) {
      const root = vue.ref();
      const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
      const onTouchMove = (event) => {
        if (props.lockScroll) {
          preventDefault(event, true);
        }
      };
      const renderOverlay = lazyRender(() => {
        var _a;
        const style = extend(getZIndexStyle(props.zIndex), props.customStyle);
        if (isDef(props.duration)) {
          style.animationDuration = `${props.duration}s`;
        }
        return vue.withDirectives(vue.createVNode("div", {
          "ref": root,
          "style": style,
          "class": [bem$1q(), props.className]
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vue.vShow, props.show]]);
      });
      useEventListener("touchmove", onTouchMove, {
        target: root
      });
      return () => vue.createVNode(vue.Transition, {
        "name": "van-fade",
        "appear": true
      }, {
        default: renderOverlay
      });
    }
  });
  const Overlay = withInstall(stdin_default$1C);
  const popupProps$2 = extend({}, popupSharedProps, {
    round: Boolean,
    position: makeStringProp("center"),
    closeIcon: makeStringProp("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: makeStringProp("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
  });
  const [name$1u, bem$1p] = createNamespace("popup");
  var stdin_default$1B = vue.defineComponent({
    name: name$1u,
    inheritAttrs: false,
    props: popupProps$2,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(props, {
      emit,
      attrs,
      slots
    }) {
      let opened;
      let shouldReopen;
      const zIndex = vue.ref();
      const popupRef = vue.ref();
      const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
      const style = vue.computed(() => {
        const style2 = {
          zIndex: zIndex.value
        };
        if (isDef(props.duration)) {
          const key = props.position === "center" ? "animationDuration" : "transitionDuration";
          style2[key] = `${props.duration}s`;
        }
        return style2;
      });
      const open = () => {
        if (!opened) {
          opened = true;
          zIndex.value = props.zIndex !== void 0 ? +props.zIndex : useGlobalZIndex();
          emit("open");
        }
      };
      const close = () => {
        if (opened) {
          callInterceptor(props.beforeClose, {
            done() {
              opened = false;
              emit("close");
              emit("update:show", false);
            }
          });
        }
      };
      const onClickOverlay = (event) => {
        emit("clickOverlay", event);
        if (props.closeOnClickOverlay) {
          close();
        }
      };
      const renderOverlay = () => {
        if (props.overlay) {
          return vue.createVNode(Overlay, {
            "show": props.show,
            "class": props.overlayClass,
            "zIndex": zIndex.value,
            "duration": props.duration,
            "customStyle": props.overlayStyle,
            "role": props.closeOnClickOverlay ? "button" : void 0,
            "tabindex": props.closeOnClickOverlay ? 0 : void 0,
            "onClick": onClickOverlay
          }, {
            default: slots["overlay-content"]
          });
        }
      };
      const onClickCloseIcon = (event) => {
        emit("clickCloseIcon", event);
        close();
      };
      const renderCloseIcon = () => {
        if (props.closeable) {
          return vue.createVNode(Icon, {
            "role": "button",
            "tabindex": 0,
            "name": props.closeIcon,
            "class": [bem$1p("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
            "classPrefix": props.iconPrefix,
            "onClick": onClickCloseIcon
          }, null);
        }
      };
      const onOpened = () => emit("opened");
      const onClosed = () => emit("closed");
      const onKeydown = (event) => emit("keydown", event);
      const renderPopup = lazyRender(() => {
        var _a;
        const {
          round: round2,
          position,
          safeAreaInsetTop,
          safeAreaInsetBottom
        } = props;
        return vue.withDirectives(vue.createVNode("div", vue.mergeProps({
          "ref": popupRef,
          "style": style.value,
          "role": "dialog",
          "tabindex": 0,
          "class": [bem$1p({
            round: round2,
            [position]: position
          }), {
            "van-safe-area-top": safeAreaInsetTop,
            "van-safe-area-bottom": safeAreaInsetBottom
          }],
          "onKeydown": onKeydown
        }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots), renderCloseIcon()]), [[vue.vShow, props.show]]);
      });
      const renderTransition = () => {
        const {
          position,
          transition,
          transitionAppear
        } = props;
        const name2 = position === "center" ? "van-fade" : `van-popup-slide-${position}`;
        return vue.createVNode(vue.Transition, {
          "name": transition || name2,
          "appear": transitionAppear,
          "onAfterEnter": onOpened,
          "onAfterLeave": onClosed
        }, {
          default: renderPopup
        });
      };
      vue.watch(() => props.show, (show) => {
        if (show && !opened) {
          open();
          if (attrs.tabindex === 0) {
            vue.nextTick(() => {
              var _a;
              (_a = popupRef.value) == null ? void 0 : _a.focus();
            });
          }
        }
        if (!show && opened) {
          opened = false;
          emit("close");
        }
      });
      useExpose({
        popupRef
      });
      useLockScroll(popupRef, () => props.show && props.lockScroll);
      useEventListener("popstate", () => {
        if (props.closeOnPopstate) {
          close();
          shouldReopen = false;
        }
      });
      vue.onMounted(() => {
        if (props.show) {
          open();
        }
      });
      vue.onActivated(() => {
        if (shouldReopen) {
          emit("update:show", true);
          shouldReopen = false;
        }
      });
      vue.onDeactivated(() => {
        if (props.show && props.teleport) {
          close();
          shouldReopen = true;
        }
      });
      vue.provide(POPUP_TOGGLE_KEY, () => props.show);
      return () => {
        if (props.teleport) {
          return vue.createVNode(vue.Teleport, {
            "to": props.teleport
          }, {
            default: () => [renderOverlay(), renderTransition()]
          });
        }
        return vue.createVNode(vue.Fragment, null, [renderOverlay(), renderTransition()]);
      };
    }
  });
  const Popup = withInstall(stdin_default$1B);
  const [name$1t, bem$1o] = createNamespace("action-sheet");
  const actionSheetProps = extend({}, popupSharedProps, {
    title: String,
    round: truthProp,
    actions: makeArrayProp(),
    closeIcon: makeStringProp("cross"),
    closeable: truthProp,
    cancelText: String,
    description: String,
    closeOnPopstate: truthProp,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: truthProp
  });
  const popupInheritKeys$2 = [...popupSharedPropKeys, "round", "closeOnPopstate", "safeAreaInsetBottom"];
  var stdin_default$1A = vue.defineComponent({
    name: name$1t,
    props: actionSheetProps,
    emits: ["select", "cancel", "update:show"],
    setup(props, {
      slots,
      emit
    }) {
      const updateShow = (show) => emit("update:show", show);
      const onCancel = () => {
        updateShow(false);
        emit("cancel");
      };
      const renderHeader = () => {
        if (props.title) {
          return vue.createVNode("div", {
            "class": bem$1o("header")
          }, [props.title, props.closeable && vue.createVNode(Icon, {
            "name": props.closeIcon,
            "class": [bem$1o("close"), HAPTICS_FEEDBACK],
            "onClick": onCancel
          }, null)]);
        }
      };
      const renderCancel = () => {
        if (slots.cancel || props.cancelText) {
          return [vue.createVNode("div", {
            "class": bem$1o("gap")
          }, null), vue.createVNode("button", {
            "type": "button",
            "class": bem$1o("cancel"),
            "onClick": onCancel
          }, [slots.cancel ? slots.cancel() : props.cancelText])];
        }
      };
      const renderActionContent = (action, index) => {
        if (action.loading) {
          return vue.createVNode(Loading, {
            "class": bem$1o("loading-icon")
          }, null);
        }
        if (slots.action) {
          return slots.action({
            action,
            index
          });
        }
        return [vue.createVNode("span", {
          "class": bem$1o("name")
        }, [action.name]), action.subname && vue.createVNode("div", {
          "class": bem$1o("subname")
        }, [action.subname])];
      };
      const renderAction = (action, index) => {
        const {
          color,
          loading,
          callback,
          disabled,
          className
        } = action;
        const onClick = () => {
          if (disabled || loading) {
            return;
          }
          if (callback) {
            callback(action);
          }
          if (props.closeOnClickAction) {
            updateShow(false);
          }
          vue.nextTick(() => emit("select", action, index));
        };
        return vue.createVNode("button", {
          "type": "button",
          "style": {
            color
          },
          "class": [bem$1o("item", {
            loading,
            disabled
          }), className],
          "onClick": onClick
        }, [renderActionContent(action, index)]);
      };
      const renderDescription = () => {
        if (props.description || slots.description) {
          const content = slots.description ? slots.description() : props.description;
          return vue.createVNode("div", {
            "class": bem$1o("description")
          }, [content]);
        }
      };
      return () => vue.createVNode(Popup, vue.mergeProps({
        "class": bem$1o(),
        "position": "bottom",
        "onUpdate:show": updateShow
      }, pick(props, popupInheritKeys$2)), {
        default: () => {
          var _a;
          return [renderHeader(), renderDescription(), vue.createVNode("div", {
            "class": bem$1o("content")
          }, [props.actions.map(renderAction), (_a = slots.default) == null ? void 0 : _a.call(slots)]), renderCancel()];
        }
      });
    }
  });
  const ActionSheet = withInstall(stdin_default$1A);
  const [name$1s, bem$1n, t$j] = createNamespace("picker");
  const getFirstEnabledOption = (options) => options.find((option) => !option.disabled) || options[0];
  function getColumnsType(columns, fields) {
    const firstColumn = columns[0];
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return "multiple";
      }
      if (fields.children in firstColumn) {
        return "cascade";
      }
    }
    return "default";
  }
  function findIndexOfEnabledOption(options, index) {
    index = clamp(index, 0, options.length);
    for (let i = index; i < options.length; i++) {
      if (!options[i].disabled)
        return i;
    }
    for (let i = index - 1; i >= 0; i--) {
      if (!options[i].disabled)
        return i;
    }
    return 0;
  }
  const isOptionExist = (options, value, fields) => value !== void 0 && !!options.find((option) => option[fields.value] === value);
  function findOptionByValue(options, value, fields) {
    const index = options.findIndex((option) => option[fields.value] === value);
    const enabledIndex = findIndexOfEnabledOption(options, index);
    return options[enabledIndex];
  }
  function formatCascadeColumns(columns, fields, selectedValues) {
    const formatted = [];
    let cursor = {
      [fields.children]: columns
    };
    let columnIndex = 0;
    while (cursor && cursor[fields.children]) {
      const options = cursor[fields.children];
      const value = selectedValues.value[columnIndex];
      cursor = isDef(value) ? findOptionByValue(options, value, fields) : void 0;
      if (!cursor && options.length) {
        const firstValue = getFirstEnabledOption(options)[fields.value];
        cursor = findOptionByValue(options, firstValue, fields);
      }
      columnIndex++;
      formatted.push(options);
    }
    return formatted;
  }
  function getElementTranslateY(element) {
    const { transform } = window.getComputedStyle(element);
    const translateY = transform.slice(7, transform.length - 1).split(", ")[5];
    return Number(translateY);
  }
  function assignDefaultFields(fields) {
    return extend(
      {
        text: "text",
        value: "value",
        children: "children"
      },
      fields
    );
  }
  const DEFAULT_DURATION = 200;
  const MOMENTUM_TIME = 300;
  const MOMENTUM_DISTANCE = 15;
  const [name$1r, bem$1m] = createNamespace("picker-column");
  const PICKER_KEY = Symbol(name$1r);
  var stdin_default$1z = vue.defineComponent({
    name: name$1r,
    props: {
      value: numericProp,
      fields: makeRequiredProp(Object),
      options: makeArrayProp(),
      readonly: Boolean,
      allowHtml: Boolean,
      optionHeight: makeRequiredProp(Number),
      swipeDuration: makeRequiredProp(numericProp),
      visibleOptionNum: makeRequiredProp(numericProp)
    },
    emits: ["change", "clickOption"],
    setup(props, {
      emit,
      slots
    }) {
      let moving;
      let startOffset;
      let touchStartTime;
      let momentumOffset;
      let transitionEndTrigger;
      const root = vue.ref();
      const wrapper = vue.ref();
      const currentOffset = vue.ref(0);
      const currentDuration = vue.ref(0);
      const touch = useTouch();
      const count = () => props.options.length;
      const baseOffset = () => props.optionHeight * (+props.visibleOptionNum - 1) / 2;
      const updateValueByIndex = (index) => {
        const enabledIndex = findIndexOfEnabledOption(props.options, index);
        const offset2 = -enabledIndex * props.optionHeight;
        const trigger = () => {
          const value = props.options[enabledIndex][props.fields.value];
          if (value !== props.value) {
            emit("change", value);
          }
        };
        if (moving && offset2 !== currentOffset.value) {
          transitionEndTrigger = trigger;
        } else {
          trigger();
        }
        currentOffset.value = offset2;
      };
      const isReadonly = () => props.readonly || !props.options.length;
      const onClickOption = (index) => {
        if (moving || isReadonly()) {
          return;
        }
        transitionEndTrigger = null;
        currentDuration.value = DEFAULT_DURATION;
        updateValueByIndex(index);
        emit("clickOption", props.options[index]);
      };
      const getIndexByOffset = (offset2) => clamp(Math.round(-offset2 / props.optionHeight), 0, count() - 1);
      const momentum = (distance, duration) => {
        const speed = Math.abs(distance / duration);
        distance = currentOffset.value + speed / 3e-3 * (distance < 0 ? -1 : 1);
        const index = getIndexByOffset(distance);
        currentDuration.value = +props.swipeDuration;
        updateValueByIndex(index);
      };
      const stopMomentum = () => {
        moving = false;
        currentDuration.value = 0;
        if (transitionEndTrigger) {
          transitionEndTrigger();
          transitionEndTrigger = null;
        }
      };
      const onTouchStart = (event) => {
        if (isReadonly()) {
          return;
        }
        touch.start(event);
        if (moving) {
          const translateY = getElementTranslateY(wrapper.value);
          currentOffset.value = Math.min(0, translateY - baseOffset());
        }
        currentDuration.value = 0;
        startOffset = currentOffset.value;
        touchStartTime = Date.now();
        momentumOffset = startOffset;
        transitionEndTrigger = null;
      };
      const onTouchMove = (event) => {
        if (isReadonly()) {
          return;
        }
        touch.move(event);
        if (touch.isVertical()) {
          moving = true;
          preventDefault(event, true);
        }
        currentOffset.value = clamp(startOffset + touch.deltaY.value, -(count() * props.optionHeight), props.optionHeight);
        const now = Date.now();
        if (now - touchStartTime > MOMENTUM_TIME) {
          touchStartTime = now;
          momentumOffset = currentOffset.value;
        }
      };
      const onTouchEnd = () => {
        if (isReadonly()) {
          return;
        }
        const distance = currentOffset.value - momentumOffset;
        const duration = Date.now() - touchStartTime;
        const startMomentum = duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE;
        if (startMomentum) {
          momentum(distance, duration);
          return;
        }
        const index = getIndexByOffset(currentOffset.value);
        currentDuration.value = DEFAULT_DURATION;
        updateValueByIndex(index);
        setTimeout(() => {
          moving = false;
        }, 0);
      };
      const renderOptions = () => {
        const optionStyle = {
          height: `${props.optionHeight}px`
        };
        return props.options.map((option, index) => {
          const text = option[props.fields.text];
          const {
            disabled
          } = option;
          const value = option[props.fields.value];
          const data = {
            role: "button",
            style: optionStyle,
            tabindex: disabled ? -1 : 0,
            class: [bem$1m("item", {
              disabled,
              selected: value === props.value
            }), option.className],
            onClick: () => onClickOption(index)
          };
          const childData = {
            class: "van-ellipsis",
            [props.allowHtml ? "innerHTML" : "textContent"]: text
          };
          return vue.createVNode("li", data, [slots.option ? slots.option(option, index) : vue.createVNode("div", childData, null)]);
        });
      };
      useParent(PICKER_KEY);
      useExpose({
        stopMomentum
      });
      vue.watchEffect(() => {
        const index = props.options.findIndex((option) => option[props.fields.value] === props.value);
        const enabledIndex = findIndexOfEnabledOption(props.options, index);
        const offset2 = -enabledIndex * props.optionHeight;
        currentOffset.value = offset2;
      });
      useEventListener("touchmove", onTouchMove, {
        target: root
      });
      return () => vue.createVNode("div", {
        "ref": root,
        "class": bem$1m(),
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [vue.createVNode("ul", {
        "ref": wrapper,
        "style": {
          transform: `translate3d(0, ${currentOffset.value + baseOffset()}px, 0)`,
          transitionDuration: `${currentDuration.value}ms`,
          transitionProperty: currentDuration.value ? "all" : "none"
        },
        "class": bem$1m("wrapper"),
        "onTransitionend": stopMomentum
      }, [renderOptions()])]);
    }
  });
  const [name$1q] = createNamespace("picker-toolbar");
  const pickerToolbarProps = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
  };
  const pickerToolbarSlots = ["cancel", "confirm", "title", "toolbar"];
  const pickerToolbarPropKeys = Object.keys(pickerToolbarProps);
  var stdin_default$1y = vue.defineComponent({
    name: name$1q,
    props: pickerToolbarProps,
    emits: ["confirm", "cancel"],
    setup(props, {
      emit,
      slots
    }) {
      const renderTitle = () => {
        if (slots.title) {
          return slots.title();
        }
        if (props.title) {
          return vue.createVNode("div", {
            "class": [bem$1n("title"), "van-ellipsis"]
          }, [props.title]);
        }
      };
      const onCancel = () => emit("cancel");
      const onConfirm = () => emit("confirm");
      const renderCancel = () => {
        const text = props.cancelButtonText || t$j("cancel");
        return vue.createVNode("button", {
          "type": "button",
          "class": [bem$1n("cancel"), HAPTICS_FEEDBACK],
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : text]);
      };
      const renderConfirm = () => {
        const text = props.confirmButtonText || t$j("confirm");
        return vue.createVNode("button", {
          "type": "button",
          "class": [bem$1n("confirm"), HAPTICS_FEEDBACK],
          "onClick": onConfirm
        }, [slots.confirm ? slots.confirm() : text]);
      };
      return () => vue.createVNode("div", {
        "class": bem$1n("toolbar")
      }, [slots.toolbar ? slots.toolbar() : [renderCancel(), renderTitle(), renderConfirm()]]);
    }
  });
  function scrollLeftTo(scroller, to, duration) {
    let count = 0;
    const from = scroller.scrollLeft;
    const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
    function animate() {
      scroller.scrollLeft += (to - from) / frames;
      if (++count < frames) {
        raf(animate);
      }
    }
    animate();
  }
  function scrollTopTo(scroller, to, duration, callback) {
    let current2 = getScrollTop(scroller);
    const isDown = current2 < to;
    const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
    const step = (to - current2) / frames;
    function animate() {
      current2 += step;
      if (isDown && current2 > to || !isDown && current2 < to) {
        current2 = to;
      }
      setScrollTop(scroller, current2);
      if (isDown && current2 < to || !isDown && current2 > to) {
        raf(animate);
      } else if (callback) {
        raf(callback);
      }
    }
    animate();
  }
  let current = 0;
  function useId() {
    const vm = vue.getCurrentInstance();
    const { name: name2 = "unknown" } = (vm == null ? void 0 : vm.type) || {};
    return `${name2}-${++current}`;
  }
  function useRefs() {
    const refs = vue.ref([]);
    const cache = [];
    vue.onBeforeUpdate(() => {
      refs.value = [];
    });
    const setRefs = (index) => {
      if (!cache[index]) {
        cache[index] = (el) => {
          refs.value[index] = el;
        };
      }
      return cache[index];
    };
    return [refs, setRefs];
  }
  function useVisibilityChange(target, onChange) {
    if (!inBrowser$1 || !window.IntersectionObserver) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        onChange(entries[0].intersectionRatio > 0);
      },
      { root: document.body }
    );
    const observe = () => {
      if (target.value) {
        observer.observe(target.value);
      }
    };
    const unobserve = () => {
      if (target.value) {
        observer.unobserve(target.value);
      }
    };
    vue.onDeactivated(unobserve);
    vue.onBeforeUnmount(unobserve);
    onMountedOrActivated(observe);
  }
  const [name$1p, bem$1l] = createNamespace("sticky");
  const stickyProps = {
    zIndex: numericProp,
    position: makeStringProp("top"),
    container: Object,
    offsetTop: makeNumericProp(0),
    offsetBottom: makeNumericProp(0)
  };
  var stdin_default$1x = vue.defineComponent({
    name: name$1p,
    props: stickyProps,
    emits: ["scroll", "change"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const scrollParent = useScrollParent(root);
      const state = vue.reactive({
        fixed: false,
        width: 0,
        // root width
        height: 0,
        // root height
        transform: 0
      });
      const offset2 = vue.computed(() => unitToPx(props.position === "top" ? props.offsetTop : props.offsetBottom));
      const rootStyle = vue.computed(() => {
        const {
          fixed,
          height: height2,
          width: width2
        } = state;
        if (fixed) {
          return {
            width: `${width2}px`,
            height: `${height2}px`
          };
        }
      });
      const stickyStyle = vue.computed(() => {
        if (!state.fixed) {
          return;
        }
        const style = extend(getZIndexStyle(props.zIndex), {
          width: `${state.width}px`,
          height: `${state.height}px`,
          [props.position]: `${offset2.value}px`
        });
        if (state.transform) {
          style.transform = `translate3d(0, ${state.transform}px, 0)`;
        }
        return style;
      });
      const emitScroll = (scrollTop) => emit("scroll", {
        scrollTop,
        isFixed: state.fixed
      });
      const onScroll = () => {
        if (!root.value || isHidden(root)) {
          return;
        }
        const {
          container,
          position
        } = props;
        const rootRect = useRect(root);
        const scrollTop = getScrollTop(window);
        state.width = rootRect.width;
        state.height = rootRect.height;
        if (position === "top") {
          if (container) {
            const containerRect = useRect(container);
            const difference = containerRect.bottom - offset2.value - state.height;
            state.fixed = offset2.value > rootRect.top && containerRect.bottom > 0;
            state.transform = difference < 0 ? difference : 0;
          } else {
            state.fixed = offset2.value > rootRect.top;
          }
        } else {
          const {
            clientHeight
          } = document.documentElement;
          if (container) {
            const containerRect = useRect(container);
            const difference = clientHeight - containerRect.top - offset2.value - state.height;
            state.fixed = clientHeight - offset2.value < rootRect.bottom && clientHeight > containerRect.top;
            state.transform = difference < 0 ? -difference : 0;
          } else {
            state.fixed = clientHeight - offset2.value < rootRect.bottom;
          }
        }
        emitScroll(scrollTop);
      };
      vue.watch(() => state.fixed, (value) => emit("change", value));
      useEventListener("scroll", onScroll, {
        target: scrollParent,
        passive: true
      });
      useVisibilityChange(root, onScroll);
      return () => {
        var _a;
        return vue.createVNode("div", {
          "ref": root,
          "style": rootStyle.value
        }, [vue.createVNode("div", {
          "class": bem$1l({
            fixed: state.fixed
          }),
          "style": stickyStyle.value
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
      };
    }
  });
  const Sticky = withInstall(stdin_default$1x);
  const [name$1o, bem$1k] = createNamespace("tab");
  var stdin_default$1w = vue.defineComponent({
    name: name$1o,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: numericProp,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: truthProp
    },
    setup(props, {
      slots
    }) {
      const style = vue.computed(() => {
        const style2 = {};
        const {
          type,
          color,
          disabled,
          isActive,
          activeColor,
          inactiveColor
        } = props;
        const isCard = type === "card";
        if (color && isCard) {
          style2.borderColor = color;
          if (!disabled) {
            if (isActive) {
              style2.backgroundColor = color;
            } else {
              style2.color = color;
            }
          }
        }
        const titleColor = isActive ? activeColor : inactiveColor;
        if (titleColor) {
          style2.color = titleColor;
        }
        return style2;
      });
      const renderText = () => {
        const Text = vue.createVNode("span", {
          "class": bem$1k("text", {
            ellipsis: !props.scrollable
          })
        }, [slots.title ? slots.title() : props.title]);
        if (props.dot || isDef(props.badge) && props.badge !== "") {
          return vue.createVNode(Badge, {
            "dot": props.dot,
            "content": props.badge,
            "showZero": props.showZeroBadge
          }, {
            default: () => [Text]
          });
        }
        return Text;
      };
      return () => vue.createVNode("div", {
        "id": props.id,
        "role": "tab",
        "class": [bem$1k([props.type, {
          grow: props.scrollable && !props.shrink,
          shrink: props.shrink,
          active: props.isActive,
          disabled: props.disabled
        }])],
        "style": style.value,
        "tabindex": props.disabled ? void 0 : props.isActive ? 0 : -1,
        "aria-selected": props.isActive,
        "aria-disabled": props.disabled || void 0,
        "aria-controls": props.controls
      }, [renderText()]);
    }
  });
  const [name$1n, bem$1j] = createNamespace("swipe");
  const swipeProps = {
    loop: truthProp,
    width: numericProp,
    height: numericProp,
    vertical: Boolean,
    autoplay: makeNumericProp(0),
    duration: makeNumericProp(500),
    touchable: truthProp,
    lazyRender: Boolean,
    initialSwipe: makeNumericProp(0),
    indicatorColor: String,
    showIndicators: truthProp,
    stopPropagation: truthProp
  };
  const SWIPE_KEY = Symbol(name$1n);
  var stdin_default$1v = vue.defineComponent({
    name: name$1n,
    props: swipeProps,
    emits: ["change", "dragStart", "dragEnd"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const track = vue.ref();
      const state = vue.reactive({
        rect: null,
        width: 0,
        height: 0,
        offset: 0,
        active: 0,
        swiping: false
      });
      let dragging = false;
      const touch = useTouch();
      const {
        children,
        linkChildren
      } = useChildren(SWIPE_KEY);
      const count = vue.computed(() => children.length);
      const size = vue.computed(() => state[props.vertical ? "height" : "width"]);
      const delta = vue.computed(() => props.vertical ? touch.deltaY.value : touch.deltaX.value);
      const minOffset = vue.computed(() => {
        if (state.rect) {
          const base = props.vertical ? state.rect.height : state.rect.width;
          return base - size.value * count.value;
        }
        return 0;
      });
      const maxCount = vue.computed(() => size.value ? Math.ceil(Math.abs(minOffset.value) / size.value) : count.value);
      const trackSize = vue.computed(() => count.value * size.value);
      const activeIndicator = vue.computed(() => (state.active + count.value) % count.value);
      const isCorrectDirection = vue.computed(() => {
        const expect = props.vertical ? "vertical" : "horizontal";
        return touch.direction.value === expect;
      });
      const trackStyle = vue.computed(() => {
        const style = {
          transitionDuration: `${state.swiping ? 0 : props.duration}ms`,
          transform: `translate${props.vertical ? "Y" : "X"}(${state.offset}px)`
        };
        if (size.value) {
          const mainAxis = props.vertical ? "height" : "width";
          const crossAxis = props.vertical ? "width" : "height";
          style[mainAxis] = `${trackSize.value}px`;
          style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : "";
        }
        return style;
      });
      const getTargetActive = (pace) => {
        const {
          active
        } = state;
        if (pace) {
          if (props.loop) {
            return clamp(active + pace, -1, count.value);
          }
          return clamp(active + pace, 0, maxCount.value);
        }
        return active;
      };
      const getTargetOffset = (targetActive, offset2 = 0) => {
        let currentPosition = targetActive * size.value;
        if (!props.loop) {
          currentPosition = Math.min(currentPosition, -minOffset.value);
        }
        let targetOffset = offset2 - currentPosition;
        if (!props.loop) {
          targetOffset = clamp(targetOffset, minOffset.value, 0);
        }
        return targetOffset;
      };
      const move = ({
        pace = 0,
        offset: offset2 = 0,
        emitChange
      }) => {
        if (count.value <= 1) {
          return;
        }
        const {
          active
        } = state;
        const targetActive = getTargetActive(pace);
        const targetOffset = getTargetOffset(targetActive, offset2);
        if (props.loop) {
          if (children[0] && targetOffset !== minOffset.value) {
            const outRightBound = targetOffset < minOffset.value;
            children[0].setOffset(outRightBound ? trackSize.value : 0);
          }
          if (children[count.value - 1] && targetOffset !== 0) {
            const outLeftBound = targetOffset > 0;
            children[count.value - 1].setOffset(outLeftBound ? -trackSize.value : 0);
          }
        }
        state.active = targetActive;
        state.offset = targetOffset;
        if (emitChange && targetActive !== active) {
          emit("change", activeIndicator.value);
        }
      };
      const correctPosition = () => {
        state.swiping = true;
        if (state.active <= -1) {
          move({
            pace: count.value
          });
        } else if (state.active >= count.value) {
          move({
            pace: -count.value
          });
        }
      };
      const prev = () => {
        correctPosition();
        touch.reset();
        doubleRaf(() => {
          state.swiping = false;
          move({
            pace: -1,
            emitChange: true
          });
        });
      };
      const next = () => {
        correctPosition();
        touch.reset();
        doubleRaf(() => {
          state.swiping = false;
          move({
            pace: 1,
            emitChange: true
          });
        });
      };
      let autoplayTimer;
      const stopAutoplay = () => clearTimeout(autoplayTimer);
      const autoplay = () => {
        stopAutoplay();
        if (+props.autoplay > 0 && count.value > 1) {
          autoplayTimer = setTimeout(() => {
            next();
            autoplay();
          }, +props.autoplay);
        }
      };
      const initialize = (active = +props.initialSwipe) => {
        if (!root.value) {
          return;
        }
        const cb = () => {
          var _a, _b;
          if (!isHidden(root)) {
            const rect = {
              width: root.value.offsetWidth,
              height: root.value.offsetHeight
            };
            state.rect = rect;
            state.width = +((_a = props.width) != null ? _a : rect.width);
            state.height = +((_b = props.height) != null ? _b : rect.height);
          }
          if (count.value) {
            active = Math.min(count.value - 1, active);
            if (active === -1) {
              active = count.value - 1;
            }
          }
          state.active = active;
          state.swiping = true;
          state.offset = getTargetOffset(active);
          children.forEach((swipe) => {
            swipe.setOffset(0);
          });
          autoplay();
        };
        if (isHidden(root)) {
          vue.nextTick().then(cb);
        } else {
          cb();
        }
      };
      const resize = () => initialize(state.active);
      let touchStartTime;
      const onTouchStart = (event) => {
        if (!props.touchable || // avoid resetting position on multi-finger touch
        event.touches.length > 1)
          return;
        touch.start(event);
        dragging = false;
        touchStartTime = Date.now();
        stopAutoplay();
        correctPosition();
      };
      const onTouchMove = (event) => {
        if (props.touchable && state.swiping) {
          touch.move(event);
          if (isCorrectDirection.value) {
            const isEdgeTouch = !props.loop && (state.active === 0 && delta.value > 0 || state.active === count.value - 1 && delta.value < 0);
            if (!isEdgeTouch) {
              preventDefault(event, props.stopPropagation);
              move({
                offset: delta.value
              });
              if (!dragging) {
                emit("dragStart", {
                  index: activeIndicator.value
                });
                dragging = true;
              }
            }
          }
        }
      };
      const onTouchEnd = () => {
        if (!props.touchable || !state.swiping) {
          return;
        }
        const duration = Date.now() - touchStartTime;
        const speed = delta.value / duration;
        const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2;
        if (shouldSwipe && isCorrectDirection.value) {
          const offset2 = props.vertical ? touch.offsetY.value : touch.offsetX.value;
          let pace = 0;
          if (props.loop) {
            pace = offset2 > 0 ? delta.value > 0 ? -1 : 1 : 0;
          } else {
            pace = -Math[delta.value > 0 ? "ceil" : "floor"](delta.value / size.value);
          }
          move({
            pace,
            emitChange: true
          });
        } else if (delta.value) {
          move({
            pace: 0
          });
        }
        dragging = false;
        state.swiping = false;
        emit("dragEnd", {
          index: activeIndicator.value
        });
        autoplay();
      };
      const swipeTo = (index, options = {}) => {
        correctPosition();
        touch.reset();
        doubleRaf(() => {
          let targetIndex;
          if (props.loop && index === count.value) {
            targetIndex = state.active === 0 ? 0 : index;
          } else {
            targetIndex = index % count.value;
          }
          if (options.immediate) {
            doubleRaf(() => {
              state.swiping = false;
            });
          } else {
            state.swiping = false;
          }
          move({
            pace: targetIndex - state.active,
            emitChange: true
          });
        });
      };
      const renderDot = (_, index) => {
        const active = index === activeIndicator.value;
        const style = active ? {
          backgroundColor: props.indicatorColor
        } : void 0;
        return vue.createVNode("i", {
          "style": style,
          "class": bem$1j("indicator", {
            active
          })
        }, null);
      };
      const renderIndicator = () => {
        if (slots.indicator) {
          return slots.indicator({
            active: activeIndicator.value,
            total: count.value
          });
        }
        if (props.showIndicators && count.value > 1) {
          return vue.createVNode("div", {
            "class": bem$1j("indicators", {
              vertical: props.vertical
            })
          }, [Array(count.value).fill("").map(renderDot)]);
        }
      };
      useExpose({
        prev,
        next,
        state,
        resize,
        swipeTo
      });
      linkChildren({
        size,
        props,
        count,
        activeIndicator
      });
      vue.watch(() => props.initialSwipe, (value) => initialize(+value));
      vue.watch(count, () => initialize(state.active));
      vue.watch(() => props.autoplay, autoplay);
      vue.watch([windowWidth, windowHeight, () => props.width, () => props.height], resize);
      vue.watch(usePageVisibility(), (visible) => {
        if (visible === "visible") {
          autoplay();
        } else {
          stopAutoplay();
        }
      });
      vue.onMounted(initialize);
      vue.onActivated(() => initialize(state.active));
      onPopupReopen(() => initialize(state.active));
      vue.onDeactivated(stopAutoplay);
      vue.onBeforeUnmount(stopAutoplay);
      useEventListener("touchmove", onTouchMove, {
        target: track
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "ref": root,
          "class": bem$1j()
        }, [vue.createVNode("div", {
          "ref": track,
          "style": trackStyle.value,
          "class": bem$1j("track", {
            vertical: props.vertical
          }),
          "onTouchstartPassive": onTouchStart,
          "onTouchend": onTouchEnd,
          "onTouchcancel": onTouchEnd
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderIndicator()]);
      };
    }
  });
  const Swipe = withInstall(stdin_default$1v);
  const [name$1m, bem$1i] = createNamespace("tabs");
  var stdin_default$1u = vue.defineComponent({
    name: name$1m,
    props: {
      count: makeRequiredProp(Number),
      inited: Boolean,
      animated: Boolean,
      duration: makeRequiredProp(numericProp),
      swipeable: Boolean,
      lazyRender: Boolean,
      currentIndex: makeRequiredProp(Number)
    },
    emits: ["change"],
    setup(props, {
      emit,
      slots
    }) {
      const swipeRef = vue.ref();
      const onChange = (index) => emit("change", index);
      const renderChildren = () => {
        var _a;
        const Content = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (props.animated || props.swipeable) {
          return vue.createVNode(Swipe, {
            "ref": swipeRef,
            "loop": false,
            "class": bem$1i("track"),
            "duration": +props.duration * 1e3,
            "touchable": props.swipeable,
            "lazyRender": props.lazyRender,
            "showIndicators": false,
            "onChange": onChange
          }, {
            default: () => [Content]
          });
        }
        return Content;
      };
      const swipeToCurrentTab = (index) => {
        const swipe = swipeRef.value;
        if (swipe && swipe.state.active !== index) {
          swipe.swipeTo(index, {
            immediate: !props.inited
          });
        }
      };
      vue.watch(() => props.currentIndex, swipeToCurrentTab);
      vue.onMounted(() => {
        swipeToCurrentTab(props.currentIndex);
      });
      useExpose({
        swipeRef
      });
      return () => vue.createVNode("div", {
        "class": bem$1i("content", {
          animated: props.animated || props.swipeable
        })
      }, [renderChildren()]);
    }
  });
  const [name$1l, bem$1h] = createNamespace("tabs");
  const tabsProps = {
    type: makeStringProp("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: makeNumericProp(0),
    duration: makeNumericProp(0.3),
    animated: Boolean,
    ellipsis: truthProp,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: makeNumericProp(0),
    background: String,
    lazyRender: truthProp,
    lineWidth: numericProp,
    lineHeight: numericProp,
    beforeChange: Function,
    swipeThreshold: makeNumericProp(5),
    titleActiveColor: String,
    titleInactiveColor: String
  };
  const TABS_KEY = Symbol(name$1l);
  var stdin_default$1t = vue.defineComponent({
    name: name$1l,
    props: tabsProps,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(props, {
      emit,
      slots
    }) {
      let tabHeight;
      let lockScroll;
      let stickyFixed;
      const root = vue.ref();
      const navRef = vue.ref();
      const wrapRef = vue.ref();
      const contentRef = vue.ref();
      const id = useId();
      const scroller = useScrollParent(root);
      const [titleRefs, setTitleRefs] = useRefs();
      const {
        children,
        linkChildren
      } = useChildren(TABS_KEY);
      const state = vue.reactive({
        inited: false,
        position: "",
        lineStyle: {},
        currentIndex: -1
      });
      const scrollable = vue.computed(() => children.length > +props.swipeThreshold || !props.ellipsis || props.shrink);
      const navStyle = vue.computed(() => ({
        borderColor: props.color,
        background: props.background
      }));
      const getTabName = (tab, index) => {
        var _a;
        return (_a = tab.name) != null ? _a : index;
      };
      const currentName = vue.computed(() => {
        const activeTab = children[state.currentIndex];
        if (activeTab) {
          return getTabName(activeTab, state.currentIndex);
        }
      });
      const offsetTopPx = vue.computed(() => unitToPx(props.offsetTop));
      const scrollOffset = vue.computed(() => {
        if (props.sticky) {
          return offsetTopPx.value + tabHeight;
        }
        return 0;
      });
      const scrollIntoView = (immediate) => {
        const nav = navRef.value;
        const titles = titleRefs.value;
        if (!scrollable.value || !nav || !titles || !titles[state.currentIndex]) {
          return;
        }
        const title = titles[state.currentIndex].$el;
        const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
        scrollLeftTo(nav, to, immediate ? 0 : +props.duration);
      };
      const setLine = () => {
        const shouldAnimate = state.inited;
        vue.nextTick(() => {
          const titles = titleRefs.value;
          if (!titles || !titles[state.currentIndex] || props.type !== "line" || isHidden(root.value)) {
            return;
          }
          const title = titles[state.currentIndex].$el;
          const {
            lineWidth,
            lineHeight
          } = props;
          const left2 = title.offsetLeft + title.offsetWidth / 2;
          const lineStyle = {
            width: addUnit(lineWidth),
            backgroundColor: props.color,
            transform: `translateX(${left2}px) translateX(-50%)`
          };
          if (shouldAnimate) {
            lineStyle.transitionDuration = `${props.duration}s`;
          }
          if (isDef(lineHeight)) {
            const height2 = addUnit(lineHeight);
            lineStyle.height = height2;
            lineStyle.borderRadius = height2;
          }
          state.lineStyle = lineStyle;
        });
      };
      const findAvailableTab = (index) => {
        const diff = index < state.currentIndex ? -1 : 1;
        while (index >= 0 && index < children.length) {
          if (!children[index].disabled) {
            return index;
          }
          index += diff;
        }
      };
      const setCurrentIndex = (currentIndex, skipScrollIntoView) => {
        const newIndex = findAvailableTab(currentIndex);
        if (!isDef(newIndex)) {
          return;
        }
        const newTab = children[newIndex];
        const newName = getTabName(newTab, newIndex);
        const shouldEmitChange = state.currentIndex !== null;
        if (state.currentIndex !== newIndex) {
          state.currentIndex = newIndex;
          if (!skipScrollIntoView) {
            scrollIntoView();
          }
          setLine();
        }
        if (newName !== props.active) {
          emit("update:active", newName);
          if (shouldEmitChange) {
            emit("change", newName, newTab.title);
          }
        }
        if (stickyFixed && !props.scrollspy) {
          setRootScrollTop(Math.ceil(getElementTop(root.value) - offsetTopPx.value));
        }
      };
      const setCurrentIndexByName = (name2, skipScrollIntoView) => {
        const matched = children.find((tab, index2) => getTabName(tab, index2) === name2);
        const index = matched ? children.indexOf(matched) : 0;
        setCurrentIndex(index, skipScrollIntoView);
      };
      const scrollToCurrentContent = (immediate = false) => {
        if (props.scrollspy) {
          const target = children[state.currentIndex].$el;
          if (target && scroller.value) {
            const to = getElementTop(target, scroller.value) - scrollOffset.value;
            lockScroll = true;
            scrollTopTo(scroller.value, to, immediate ? 0 : +props.duration, () => {
              lockScroll = false;
            });
          }
        }
      };
      const onClickTab = (item, index, event) => {
        const {
          title,
          disabled
        } = children[index];
        const name2 = getTabName(children[index], index);
        if (!disabled) {
          callInterceptor(props.beforeChange, {
            args: [name2],
            done: () => {
              setCurrentIndex(index);
              scrollToCurrentContent();
            }
          });
          route(item);
        }
        emit("clickTab", {
          name: name2,
          title,
          event,
          disabled
        });
      };
      const onStickyScroll = (params) => {
        stickyFixed = params.isFixed;
        emit("scroll", params);
      };
      const scrollTo = (name2) => {
        vue.nextTick(() => {
          setCurrentIndexByName(name2);
          scrollToCurrentContent(true);
        });
      };
      const getCurrentIndexOnScroll = () => {
        for (let index = 0; index < children.length; index++) {
          const {
            top: top2
          } = useRect(children[index].$el);
          if (top2 > scrollOffset.value) {
            return index === 0 ? 0 : index - 1;
          }
        }
        return children.length - 1;
      };
      const onScroll = () => {
        if (props.scrollspy && !lockScroll) {
          const index = getCurrentIndexOnScroll();
          setCurrentIndex(index);
        }
      };
      const renderNav = () => children.map((item, index) => vue.createVNode(stdin_default$1w, vue.mergeProps({
        "key": item.id,
        "id": `${id}-${index}`,
        "ref": setTitleRefs(index),
        "type": props.type,
        "color": props.color,
        "style": item.titleStyle,
        "class": item.titleClass,
        "shrink": props.shrink,
        "isActive": index === state.currentIndex,
        "controls": item.id,
        "scrollable": scrollable.value,
        "activeColor": props.titleActiveColor,
        "inactiveColor": props.titleInactiveColor,
        "onClick": (event) => onClickTab(item, index, event)
      }, pick(item, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
        title: item.$slots.title
      }));
      const renderLine = () => {
        if (props.type === "line" && children.length) {
          return vue.createVNode("div", {
            "class": bem$1h("line"),
            "style": state.lineStyle
          }, null);
        }
      };
      const renderHeader = () => {
        var _a, _b, _c;
        const {
          type,
          border,
          sticky
        } = props;
        const Header = [vue.createVNode("div", {
          "ref": sticky ? void 0 : wrapRef,
          "class": [bem$1h("wrap"), {
            [BORDER_TOP_BOTTOM]: type === "line" && border
          }]
        }, [vue.createVNode("div", {
          "ref": navRef,
          "role": "tablist",
          "class": bem$1h("nav", [type, {
            shrink: props.shrink,
            complete: scrollable.value
          }]),
          "style": navStyle.value,
          "aria-orientation": "horizontal"
        }, [(_a = slots["nav-left"]) == null ? void 0 : _a.call(slots), renderNav(), renderLine(), (_b = slots["nav-right"]) == null ? void 0 : _b.call(slots)])]), (_c = slots["nav-bottom"]) == null ? void 0 : _c.call(slots)];
        if (sticky) {
          return vue.createVNode("div", {
            "ref": wrapRef
          }, [Header]);
        }
        return Header;
      };
      vue.watch([() => props.color, windowWidth], setLine);
      vue.watch(() => props.active, (value) => {
        if (value !== currentName.value) {
          setCurrentIndexByName(value);
        }
      });
      vue.watch(() => children.length, () => {
        if (state.inited) {
          setCurrentIndexByName(props.active);
          setLine();
          vue.nextTick(() => {
            scrollIntoView(true);
          });
        }
      });
      const init = () => {
        setCurrentIndexByName(props.active, true);
        vue.nextTick(() => {
          state.inited = true;
          if (wrapRef.value) {
            tabHeight = useRect(wrapRef.value).height;
          }
          scrollIntoView(true);
        });
      };
      const onRendered = (name2, title) => emit("rendered", name2, title);
      const resize = () => {
        setLine();
        vue.nextTick(() => {
          var _a, _b;
          return (_b = (_a = contentRef.value) == null ? void 0 : _a.swipeRef.value) == null ? void 0 : _b.resize();
        });
      };
      useExpose({
        resize,
        scrollTo
      });
      vue.onActivated(setLine);
      onPopupReopen(setLine);
      onMountedOrActivated(init);
      useVisibilityChange(root, setLine);
      useEventListener("scroll", onScroll, {
        target: scroller,
        passive: true
      });
      linkChildren({
        id,
        props,
        setLine,
        onRendered,
        currentName,
        scrollIntoView
      });
      return () => vue.createVNode("div", {
        "ref": root,
        "class": bem$1h([props.type])
      }, [props.sticky ? vue.createVNode(Sticky, {
        "container": root.value,
        "offsetTop": offsetTopPx.value,
        "onScroll": onStickyScroll
      }, {
        default: () => [renderHeader()]
      }) : renderHeader(), vue.createVNode(stdin_default$1u, {
        "ref": contentRef,
        "count": children.length,
        "inited": state.inited,
        "animated": props.animated,
        "duration": props.duration,
        "swipeable": props.swipeable,
        "lazyRender": props.lazyRender,
        "currentIndex": state.currentIndex,
        "onChange": setCurrentIndex
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      })]);
    }
  });
  const TAB_STATUS_KEY = Symbol();
  const useTabStatus = () => vue.inject(TAB_STATUS_KEY, null);
  const [name$1k, bem$1g] = createNamespace("swipe-item");
  var stdin_default$1s = vue.defineComponent({
    name: name$1k,
    setup(props, {
      slots
    }) {
      let rendered;
      const state = vue.reactive({
        offset: 0,
        inited: false,
        mounted: false
      });
      const {
        parent,
        index
      } = useParent(SWIPE_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/swipe-item/SwipeItem.mjs:25", "[Vant] <SwipeItem> must be a child component of <Swipe>.");
        }
        return;
      }
      const style = vue.computed(() => {
        const style2 = {};
        const {
          vertical
        } = parent.props;
        if (parent.size.value) {
          style2[vertical ? "height" : "width"] = `${parent.size.value}px`;
        }
        if (state.offset) {
          style2.transform = `translate${vertical ? "Y" : "X"}(${state.offset}px)`;
        }
        return style2;
      });
      const shouldRender = vue.computed(() => {
        const {
          loop,
          lazyRender
        } = parent.props;
        if (!lazyRender || rendered) {
          return true;
        }
        if (!state.mounted) {
          return false;
        }
        const active = parent.activeIndicator.value;
        const maxActive = parent.count.value - 1;
        const prevActive = active === 0 && loop ? maxActive : active - 1;
        const nextActive = active === maxActive && loop ? 0 : active + 1;
        rendered = index.value === active || index.value === prevActive || index.value === nextActive;
        return rendered;
      });
      const setOffset = (offset2) => {
        state.offset = offset2;
      };
      vue.onMounted(() => {
        vue.nextTick(() => {
          state.mounted = true;
        });
      });
      useExpose({
        setOffset
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": bem$1g(),
          "style": style.value
        }, [shouldRender.value ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null]);
      };
    }
  });
  const SwipeItem = withInstall(stdin_default$1s);
  const [name$1j, bem$1f] = createNamespace("tab");
  const tabProps = extend({}, routeProps, {
    dot: Boolean,
    name: numericProp,
    badge: numericProp,
    title: String,
    disabled: Boolean,
    titleClass: unknownProp,
    titleStyle: [String, Object],
    showZeroBadge: truthProp
  });
  var stdin_default$1r = vue.defineComponent({
    name: name$1j,
    props: tabProps,
    setup(props, {
      slots
    }) {
      const id = useId();
      const inited = vue.ref(false);
      const {
        parent,
        index
      } = useParent(TABS_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/tab/Tab.mjs:36", "[Vant] <Tab> must be a child component of <Tabs>.");
        }
        return;
      }
      const getName = () => {
        var _a;
        return (_a = props.name) != null ? _a : index.value;
      };
      const init = () => {
        inited.value = true;
        if (parent.props.lazyRender) {
          vue.nextTick(() => {
            parent.onRendered(getName(), props.title);
          });
        }
      };
      const active = vue.computed(() => {
        const isActive = getName() === parent.currentName.value;
        if (isActive && !inited.value) {
          init();
        }
        return isActive;
      });
      const hasInactiveClass = vue.ref(!active.value);
      vue.watch(active, (val) => {
        if (val) {
          hasInactiveClass.value = false;
        } else {
          doubleRaf(() => {
            hasInactiveClass.value = true;
          });
        }
      });
      vue.watch(() => props.title, () => {
        parent.setLine();
        parent.scrollIntoView();
      });
      vue.provide(TAB_STATUS_KEY, active);
      return () => {
        var _a;
        const label = `${parent.id}-${index.value}`;
        const {
          animated,
          swipeable,
          scrollspy,
          lazyRender
        } = parent.props;
        if (!slots.default && !animated) {
          return;
        }
        const show = scrollspy || active.value;
        if (animated || swipeable) {
          return vue.createVNode(SwipeItem, {
            "id": id,
            "role": "tabpanel",
            "class": bem$1f("panel-wrapper", {
              inactive: hasInactiveClass.value
            }),
            "tabindex": active.value ? 0 : -1,
            "aria-hidden": !active.value,
            "aria-labelledby": label
          }, {
            default: () => {
              var _a2;
              return [vue.createVNode("div", {
                "class": bem$1f("panel")
              }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])];
            }
          });
        }
        const shouldRender = inited.value || scrollspy || !lazyRender;
        const Content = shouldRender ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null;
        useExpose({
          id
        });
        return vue.withDirectives(vue.createVNode("div", {
          "id": id,
          "role": "tabpanel",
          "class": bem$1f("panel"),
          "tabindex": show ? 0 : -1,
          "aria-labelledby": label
        }, [Content]), [[vue.vShow, show]]);
      };
    }
  });
  const Tab = withInstall(stdin_default$1r);
  const Tabs = withInstall(stdin_default$1t);
  const [name$1i, bem$1e] = createNamespace("picker-group");
  const PICKER_GROUP_KEY = Symbol(name$1i);
  const pickerGroupProps = extend({
    tabs: makeArrayProp(),
    nextStepText: String
  }, pickerToolbarProps);
  var stdin_default$1q = vue.defineComponent({
    name: name$1i,
    props: pickerGroupProps,
    emits: ["confirm", "cancel"],
    setup(props, {
      emit,
      slots
    }) {
      const activeTab = vue.ref(0);
      const {
        children,
        linkChildren
      } = useChildren(PICKER_GROUP_KEY);
      linkChildren();
      const showNextButton = () => activeTab.value < props.tabs.length - 1 && props.nextStepText;
      const onConfirm = () => {
        if (showNextButton()) {
          activeTab.value++;
        } else {
          emit("confirm", children.map((item) => item.confirm()));
        }
      };
      const onCancel = () => emit("cancel");
      return () => {
        var _a;
        const childNodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        const confirmButtonText = showNextButton() ? props.nextStepText : props.confirmButtonText;
        return vue.createVNode("div", {
          "class": bem$1e()
        }, [vue.createVNode(stdin_default$1y, {
          "title": props.title,
          "cancelButtonText": props.cancelButtonText,
          "confirmButtonText": confirmButtonText,
          "onConfirm": onConfirm,
          "onCancel": onCancel
        }, pick(slots, pickerToolbarSlots)), vue.createVNode(Tabs, {
          "active": activeTab.value,
          "onUpdate:active": ($event) => activeTab.value = $event,
          "class": bem$1e("tabs"),
          "shrink": true,
          "animated": true,
          "lazyRender": false
        }, {
          default: () => [props.tabs.map((title, index) => vue.createVNode(Tab, {
            "title": title,
            "titleClass": bem$1e("tab-title")
          }, {
            default: () => [childNodes == null ? void 0 : childNodes[index]]
          }))]
        })]);
      };
    }
  });
  const pickerSharedProps = extend({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: makeNumericProp(44),
    showToolbar: truthProp,
    swipeDuration: makeNumericProp(1e3),
    visibleOptionNum: makeNumericProp(6)
  }, pickerToolbarProps);
  const pickerProps = extend({}, pickerSharedProps, {
    columns: makeArrayProp(),
    modelValue: makeArrayProp(),
    toolbarPosition: makeStringProp("top"),
    columnsFieldNames: Object
  });
  var stdin_default$1p = vue.defineComponent({
    name: name$1s,
    props: pickerProps,
    emits: ["confirm", "cancel", "change", "clickOption", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const columnsRef = vue.ref();
      const selectedValues = vue.ref(props.modelValue.slice(0));
      const {
        parent
      } = useParent(PICKER_GROUP_KEY);
      const {
        children,
        linkChildren
      } = useChildren(PICKER_KEY);
      linkChildren();
      const fields = vue.computed(() => assignDefaultFields(props.columnsFieldNames));
      const optionHeight = vue.computed(() => unitToPx(props.optionHeight));
      const columnsType = vue.computed(() => getColumnsType(props.columns, fields.value));
      const currentColumns = vue.computed(() => {
        const {
          columns
        } = props;
        switch (columnsType.value) {
          case "multiple":
            return columns;
          case "cascade":
            return formatCascadeColumns(columns, fields.value, selectedValues);
          default:
            return [columns];
        }
      });
      const hasOptions = vue.computed(() => currentColumns.value.some((options) => options.length));
      const selectedOptions = vue.computed(() => currentColumns.value.map((options, index) => findOptionByValue(options, selectedValues.value[index], fields.value)));
      const selectedIndexes = vue.computed(() => currentColumns.value.map((options, index) => options.findIndex((option) => option[fields.value.value] === selectedValues.value[index])));
      const setValue = (index, value) => {
        if (selectedValues.value[index] !== value) {
          const newValues = selectedValues.value.slice(0);
          newValues[index] = value;
          selectedValues.value = newValues;
        }
      };
      const getEventParams = () => ({
        selectedValues: selectedValues.value.slice(0),
        selectedOptions: selectedOptions.value,
        selectedIndexes: selectedIndexes.value
      });
      const onChange = (value, columnIndex) => {
        setValue(columnIndex, value);
        if (columnsType.value === "cascade") {
          selectedValues.value.forEach((value2, index) => {
            const options = currentColumns.value[index];
            if (!isOptionExist(options, value2, fields.value)) {
              setValue(index, options.length ? options[0][fields.value.value] : void 0);
            }
          });
        }
        vue.nextTick(() => {
          emit("change", extend({
            columnIndex
          }, getEventParams()));
        });
      };
      const onClickOption = (currentOption, columnIndex) => emit("clickOption", extend({
        columnIndex,
        currentOption
      }, getEventParams()));
      const confirm = () => {
        children.forEach((child) => child.stopMomentum());
        const params = getEventParams();
        vue.nextTick(() => {
          emit("confirm", params);
        });
        return params;
      };
      const cancel = () => emit("cancel", getEventParams());
      const renderColumnItems = () => currentColumns.value.map((options, columnIndex) => vue.createVNode(stdin_default$1z, {
        "value": selectedValues.value[columnIndex],
        "fields": fields.value,
        "options": options,
        "readonly": props.readonly,
        "allowHtml": props.allowHtml,
        "optionHeight": optionHeight.value,
        "swipeDuration": props.swipeDuration,
        "visibleOptionNum": props.visibleOptionNum,
        "onChange": (value) => onChange(value, columnIndex),
        "onClickOption": (option) => onClickOption(option, columnIndex)
      }, {
        option: slots.option
      }));
      const renderMask = (wrapHeight) => {
        if (hasOptions.value) {
          const frameStyle = {
            height: `${optionHeight.value}px`
          };
          const maskStyle = {
            backgroundSize: `100% ${(wrapHeight - optionHeight.value) / 2}px`
          };
          return [vue.createVNode("div", {
            "class": bem$1n("mask"),
            "style": maskStyle
          }, null), vue.createVNode("div", {
            "class": [BORDER_UNSET_TOP_BOTTOM, bem$1n("frame")],
            "style": frameStyle
          }, null)];
        }
      };
      const renderColumns = () => {
        const wrapHeight = optionHeight.value * +props.visibleOptionNum;
        const columnsStyle = {
          height: `${wrapHeight}px`
        };
        return vue.createVNode("div", {
          "ref": columnsRef,
          "class": bem$1n("columns"),
          "style": columnsStyle
        }, [renderColumnItems(), renderMask(wrapHeight)]);
      };
      const renderToolbar = () => {
        if (props.showToolbar && !parent) {
          return vue.createVNode(stdin_default$1y, vue.mergeProps(pick(props, pickerToolbarPropKeys), {
            "onConfirm": confirm,
            "onCancel": cancel
          }), pick(slots, pickerToolbarSlots));
        }
      };
      vue.watch(currentColumns, (columns) => {
        columns.forEach((options, index) => {
          if (options.length && !isOptionExist(options, selectedValues.value[index], fields.value)) {
            setValue(index, getFirstEnabledOption(options)[fields.value.value]);
          }
        });
      }, {
        immediate: true
      });
      let lastEmittedModelValue;
      vue.watch(() => props.modelValue, (newValues) => {
        if (!isSameValue(newValues, selectedValues.value) && !isSameValue(newValues, lastEmittedModelValue)) {
          selectedValues.value = newValues.slice(0);
          lastEmittedModelValue = newValues.slice(0);
        }
      }, {
        deep: true
      });
      vue.watch(selectedValues, (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          lastEmittedModelValue = newValues.slice(0);
          emit("update:modelValue", lastEmittedModelValue);
        }
      }, {
        immediate: true
      });
      useEventListener("touchmove", preventDefault, {
        target: columnsRef
      });
      const getSelectedOptions = () => selectedOptions.value;
      useExpose({
        confirm,
        getSelectedOptions
      });
      return () => {
        var _a, _b;
        return vue.createVNode("div", {
          "class": bem$1n()
        }, [props.toolbarPosition === "top" ? renderToolbar() : null, props.loading ? vue.createVNode(Loading, {
          "class": bem$1n("loading")
        }, null) : null, (_a = slots["columns-top"]) == null ? void 0 : _a.call(slots), renderColumns(), (_b = slots["columns-bottom"]) == null ? void 0 : _b.call(slots), props.toolbarPosition === "bottom" ? renderToolbar() : null]);
      };
    }
  });
  const AREA_EMPTY_CODE = "000000";
  const INHERIT_SLOTS = [
    "title",
    "cancel",
    "confirm",
    "toolbar",
    "columns-top",
    "columns-bottom"
  ];
  const INHERIT_PROPS = [
    "title",
    "loading",
    "readonly",
    "optionHeight",
    "swipeDuration",
    "visibleOptionNum",
    "cancelButtonText",
    "confirmButtonText"
  ];
  const makeOption = (text = "", value = AREA_EMPTY_CODE, children = void 0) => ({
    text,
    value,
    children
  });
  function formatDataForCascade({
    areaList,
    columnsNum,
    columnsPlaceholder: placeholder
  }) {
    const {
      city_list: city = {},
      county_list: county = {},
      province_list: province = {}
    } = areaList;
    const showCity = +columnsNum > 1;
    const showCounty = +columnsNum > 2;
    const getProvinceChildren = () => {
      if (showCity) {
        return placeholder.length ? [
          makeOption(
            placeholder[0],
            AREA_EMPTY_CODE,
            showCounty ? [] : void 0
          )
        ] : [];
      }
    };
    const provinceMap = /* @__PURE__ */ new Map();
    Object.keys(province).forEach((code) => {
      provinceMap.set(
        code.slice(0, 2),
        makeOption(province[code], code, getProvinceChildren())
      );
    });
    const cityMap = /* @__PURE__ */ new Map();
    if (showCity) {
      const getCityChildren = () => {
        if (showCounty) {
          return placeholder.length ? [makeOption(placeholder[1])] : [];
        }
      };
      Object.keys(city).forEach((code) => {
        const option = makeOption(city[code], code, getCityChildren());
        cityMap.set(code.slice(0, 4), option);
        const province2 = provinceMap.get(code.slice(0, 2));
        if (province2) {
          province2.children.push(option);
        }
      });
    }
    if (showCounty) {
      Object.keys(county).forEach((code) => {
        const city2 = cityMap.get(code.slice(0, 4));
        if (city2) {
          city2.children.push(makeOption(county[code], code));
        }
      });
    }
    const options = Array.from(provinceMap.values());
    if (placeholder.length) {
      const county2 = showCounty ? [makeOption(placeholder[2])] : void 0;
      const city2 = showCity ? [makeOption(placeholder[1], AREA_EMPTY_CODE, county2)] : void 0;
      options.unshift(makeOption(placeholder[0], AREA_EMPTY_CODE, city2));
    }
    return options;
  }
  const Picker = withInstall(stdin_default$1p);
  const [name$1h, bem$1d] = createNamespace("area");
  const areaProps = extend({}, pickerSharedProps, {
    modelValue: String,
    columnsNum: makeNumericProp(3),
    columnsPlaceholder: makeArrayProp(),
    areaList: {
      type: Object,
      default: () => ({})
    }
  });
  var stdin_default$1o = vue.defineComponent({
    name: name$1h,
    props: areaProps,
    emits: ["change", "confirm", "cancel", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const codes = vue.ref([]);
      const picker = vue.ref();
      const columns = vue.computed(() => formatDataForCascade(props));
      const onChange = (...args) => emit("change", ...args);
      const onCancel = (...args) => emit("cancel", ...args);
      const onConfirm = (...args) => emit("confirm", ...args);
      vue.watch(codes, (newCodes) => {
        const lastCode = newCodes.length ? newCodes[newCodes.length - 1] : "";
        if (lastCode && lastCode !== props.modelValue) {
          emit("update:modelValue", lastCode);
        }
      }, {
        deep: true
      });
      vue.watch(() => props.modelValue, (newCode) => {
        if (newCode) {
          const lastCode = codes.value.length ? codes.value[codes.value.length - 1] : "";
          if (newCode !== lastCode) {
            codes.value = [`${newCode.slice(0, 2)}0000`, `${newCode.slice(0, 4)}00`, newCode].slice(0, +props.columnsNum);
          }
        } else {
          codes.value = [];
        }
      }, {
        immediate: true
      });
      useExpose({
        confirm: () => {
          var _a;
          return (_a = picker.value) == null ? void 0 : _a.confirm();
        },
        getSelectedOptions: () => {
          var _a;
          return ((_a = picker.value) == null ? void 0 : _a.getSelectedOptions()) || [];
        }
      });
      return () => vue.createVNode(Picker, vue.mergeProps({
        "ref": picker,
        "modelValue": codes.value,
        "onUpdate:modelValue": ($event) => codes.value = $event,
        "class": bem$1d(),
        "columns": columns.value,
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, pick(props, INHERIT_PROPS)), pick(slots, INHERIT_SLOTS));
    }
  });
  const Area = withInstall(stdin_default$1o);
  const [name$1g, bem$1c] = createNamespace("cell");
  const cellSharedProps = {
    tag: makeStringProp("div"),
    icon: String,
    size: String,
    title: numericProp,
    value: numericProp,
    label: numericProp,
    center: Boolean,
    isLink: Boolean,
    border: truthProp,
    required: Boolean,
    iconPrefix: String,
    valueClass: unknownProp,
    labelClass: unknownProp,
    titleClass: unknownProp,
    titleStyle: null,
    arrowDirection: String,
    clickable: {
      type: Boolean,
      default: null
    }
  };
  const cellProps = extend({}, cellSharedProps, routeProps);
  var stdin_default$1n = vue.defineComponent({
    name: name$1g,
    props: cellProps,
    setup(props, {
      slots
    }) {
      const route2 = useRoute();
      const renderLabel = () => {
        const showLabel = slots.label || isDef(props.label);
        if (showLabel) {
          return vue.createVNode("div", {
            "class": [bem$1c("label"), props.labelClass]
          }, [slots.label ? slots.label() : props.label]);
        }
      };
      const renderTitle = () => {
        var _a;
        if (slots.title || isDef(props.title)) {
          const titleSlot = (_a = slots.title) == null ? void 0 : _a.call(slots);
          if (Array.isArray(titleSlot) && titleSlot.length === 0) {
            return;
          }
          return vue.createVNode("div", {
            "class": [bem$1c("title"), props.titleClass],
            "style": props.titleStyle
          }, [titleSlot || vue.createVNode("span", null, [props.title]), renderLabel()]);
        }
      };
      const renderValue = () => {
        const slot = slots.value || slots.default;
        const hasValue = slot || isDef(props.value);
        if (hasValue) {
          return vue.createVNode("div", {
            "class": [bem$1c("value"), props.valueClass]
          }, [slot ? slot() : vue.createVNode("span", null, [props.value])]);
        }
      };
      const renderLeftIcon = () => {
        if (slots.icon) {
          return slots.icon();
        }
        if (props.icon) {
          return vue.createVNode(Icon, {
            "name": props.icon,
            "class": bem$1c("left-icon"),
            "classPrefix": props.iconPrefix
          }, null);
        }
      };
      const renderRightIcon = () => {
        if (slots["right-icon"]) {
          return slots["right-icon"]();
        }
        if (props.isLink) {
          const name2 = props.arrowDirection && props.arrowDirection !== "right" ? `arrow-${props.arrowDirection}` : "arrow";
          return vue.createVNode(Icon, {
            "name": name2,
            "class": bem$1c("right-icon")
          }, null);
        }
      };
      return () => {
        var _a;
        const {
          tag,
          size,
          center,
          border,
          isLink,
          required
        } = props;
        const clickable = (_a = props.clickable) != null ? _a : isLink;
        const classes = {
          center,
          required,
          clickable,
          borderless: !border
        };
        if (size) {
          classes[size] = !!size;
        }
        return vue.createVNode(tag, {
          "class": bem$1c(classes),
          "role": clickable ? "button" : void 0,
          "tabindex": clickable ? 0 : void 0,
          "onClick": route2
        }, {
          default: () => {
            var _a2;
            return [renderLeftIcon(), renderTitle(), renderValue(), renderRightIcon(), (_a2 = slots.extra) == null ? void 0 : _a2.call(slots)];
          }
        });
      };
    }
  });
  const Cell = withInstall(stdin_default$1n);
  const [name$1f, bem$1b] = createNamespace("form");
  const formProps = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    showError: Boolean,
    labelWidth: numericProp,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    submitOnEnter: truthProp,
    showErrorMessage: truthProp,
    errorMessageAlign: String,
    validateTrigger: {
      type: [String, Array],
      default: "onBlur"
    }
  };
  var stdin_default$1m = vue.defineComponent({
    name: name$1f,
    props: formProps,
    emits: ["submit", "failed"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        children,
        linkChildren
      } = useChildren(FORM_KEY);
      const getFieldsByNames = (names) => {
        if (names) {
          return children.filter((field) => names.includes(field.name));
        }
        return children;
      };
      const validateSeq = (names) => new Promise((resolve, reject) => {
        const errors = [];
        const fields = getFieldsByNames(names);
        fields.reduce((promise, field) => promise.then(() => {
          if (!errors.length) {
            return field.validate().then((error) => {
              if (error) {
                errors.push(error);
              }
            });
          }
        }), Promise.resolve()).then(() => {
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
      const validateAll = (names) => new Promise((resolve, reject) => {
        const fields = getFieldsByNames(names);
        Promise.all(fields.map((item) => item.validate())).then((errors) => {
          errors = errors.filter(Boolean);
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
      const validateField = (name2) => {
        const matched = children.find((item) => item.name === name2);
        if (matched) {
          return new Promise((resolve, reject) => {
            matched.validate().then((error) => {
              if (error) {
                reject(error);
              } else {
                resolve();
              }
            });
          });
        }
        return Promise.reject();
      };
      const validate = (name2) => {
        if (typeof name2 === "string") {
          return validateField(name2);
        }
        return props.validateFirst ? validateSeq(name2) : validateAll(name2);
      };
      const resetValidation = (name2) => {
        if (typeof name2 === "string") {
          name2 = [name2];
        }
        const fields = getFieldsByNames(name2);
        fields.forEach((item) => {
          item.resetValidation();
        });
      };
      const getValidationStatus = () => children.reduce((form, field) => {
        form[field.name] = field.getValidationStatus();
        return form;
      }, {});
      const scrollToField = (name2, options) => {
        children.some((item) => {
          if (item.name === name2) {
            item.$el.scrollIntoView(options);
            return true;
          }
          return false;
        });
      };
      const getValues = () => children.reduce((form, field) => {
        if (field.name !== void 0) {
          form[field.name] = field.formValue.value;
        }
        return form;
      }, {});
      const submit = () => {
        const values = getValues();
        validate().then(() => emit("submit", values)).catch((errors) => {
          emit("failed", {
            values,
            errors
          });
          if (props.scrollToError && errors[0].name) {
            scrollToField(errors[0].name);
          }
        });
      };
      const onSubmit = (event) => {
        preventDefault(event);
        submit();
      };
      linkChildren({
        props
      });
      useExpose({
        submit,
        validate,
        getValues,
        scrollToField,
        resetValidation,
        getValidationStatus
      });
      return () => {
        var _a;
        return vue.createVNode("form", {
          "class": bem$1b(),
          "onSubmit": onSubmit
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Form = withInstall(stdin_default$1m);
  function isEmptyValue(value) {
    if (Array.isArray(value)) {
      return !value.length;
    }
    if (value === 0) {
      return false;
    }
    return !value;
  }
  function runSyncRule(value, rule) {
    if (isEmptyValue(value)) {
      if (rule.required) {
        return false;
      }
      if (rule.validateEmpty === false) {
        return true;
      }
    }
    if (rule.pattern && !rule.pattern.test(String(value))) {
      return false;
    }
    return true;
  }
  function runRuleValidator(value, rule) {
    return new Promise((resolve) => {
      const returnVal = rule.validator(value, rule);
      if (isPromise(returnVal)) {
        returnVal.then(resolve);
        return;
      }
      resolve(returnVal);
    });
  }
  function getRuleMessage(value, rule) {
    const { message } = rule;
    if (isFunction(message)) {
      return message(value, rule);
    }
    return message || "";
  }
  function startComposing({ target }) {
    target.composing = true;
  }
  function endComposing({ target }) {
    if (target.composing) {
      target.composing = false;
      target.dispatchEvent(new Event("input"));
    }
  }
  function resizeTextarea(input, autosize) {
    const scrollTop = getRootScrollTop();
    input.style.height = "auto";
    let height2 = input.scrollHeight;
    if (isObject(autosize)) {
      const { maxHeight, minHeight } = autosize;
      if (maxHeight !== void 0) {
        height2 = Math.min(height2, maxHeight);
      }
      if (minHeight !== void 0) {
        height2 = Math.max(height2, minHeight);
      }
    }
    if (height2) {
      input.style.height = `${height2}px`;
      setRootScrollTop(scrollTop);
    }
  }
  function mapInputType(type) {
    if (type === "number") {
      return {
        type: "text",
        inputmode: "decimal"
      };
    }
    if (type === "digit") {
      return {
        type: "tel",
        inputmode: "numeric"
      };
    }
    return { type };
  }
  function getStringLength(str) {
    return [...str].length;
  }
  function cutString(str, maxlength) {
    return [...str].slice(0, maxlength).join("");
  }
  const [name$1e, bem$1a] = createNamespace("field");
  const fieldSharedProps = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: numericProp,
    formatter: Function,
    clearIcon: makeStringProp("clear"),
    modelValue: makeNumericProp(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: makeStringProp("focus"),
    formatTrigger: makeStringProp("onChange"),
    error: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    readonly: {
      type: Boolean,
      default: null
    }
  };
  const fieldProps = extend({}, cellSharedProps, fieldSharedProps, {
    rows: numericProp,
    type: makeStringProp("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: numericProp,
    labelClass: unknownProp,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
      type: Boolean,
      default: null
    }
  });
  var stdin_default$1l = vue.defineComponent({
    name: name$1e,
    props: fieldProps,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const id = useId();
      const state = vue.reactive({
        status: "unvalidated",
        focused: false,
        validateMessage: ""
      });
      const inputRef = vue.ref();
      const clearIconRef = vue.ref();
      const customValue = vue.ref();
      const {
        parent: form
      } = useParent(FORM_KEY);
      const getModelValue = () => {
        var _a;
        return String((_a = props.modelValue) != null ? _a : "");
      };
      const getProp = (key) => {
        if (isDef(props[key])) {
          return props[key];
        }
        if (form && isDef(form.props[key])) {
          return form.props[key];
        }
      };
      const showClear = vue.computed(() => {
        const readonly = getProp("readonly");
        if (props.clearable && !readonly) {
          const hasValue = getModelValue() !== "";
          const trigger = props.clearTrigger === "always" || props.clearTrigger === "focus" && state.focused;
          return hasValue && trigger;
        }
        return false;
      });
      const formValue = vue.computed(() => {
        if (customValue.value && slots.input) {
          return customValue.value();
        }
        return props.modelValue;
      });
      const runRules = (rules) => rules.reduce((promise, rule) => promise.then(() => {
        if (state.status === "failed") {
          return;
        }
        let {
          value
        } = formValue;
        if (rule.formatter) {
          value = rule.formatter(value, rule);
        }
        if (!runSyncRule(value, rule)) {
          state.status = "failed";
          state.validateMessage = getRuleMessage(value, rule);
          return;
        }
        if (rule.validator) {
          if (isEmptyValue(value) && rule.validateEmpty === false) {
            return;
          }
          return runRuleValidator(value, rule).then((result) => {
            if (result && typeof result === "string") {
              state.status = "failed";
              state.validateMessage = result;
            } else if (result === false) {
              state.status = "failed";
              state.validateMessage = getRuleMessage(value, rule);
            }
          });
        }
      }), Promise.resolve());
      const resetValidation = () => {
        state.status = "unvalidated";
        state.validateMessage = "";
      };
      const endValidate = () => emit("endValidate", {
        status: state.status,
        message: state.validateMessage
      });
      const validate = (rules = props.rules) => new Promise((resolve) => {
        resetValidation();
        if (rules) {
          emit("startValidate");
          runRules(rules).then(() => {
            if (state.status === "failed") {
              resolve({
                name: props.name,
                message: state.validateMessage
              });
              endValidate();
            } else {
              state.status = "passed";
              resolve();
              endValidate();
            }
          });
        } else {
          resolve();
        }
      });
      const validateWithTrigger = (trigger) => {
        if (form && props.rules) {
          const {
            validateTrigger
          } = form.props;
          const defaultTrigger = toArray(validateTrigger).includes(trigger);
          const rules = props.rules.filter((rule) => {
            if (rule.trigger) {
              return toArray(rule.trigger).includes(trigger);
            }
            return defaultTrigger;
          });
          if (rules.length) {
            validate(rules);
          }
        }
      };
      const limitValueLength = (value) => {
        var _a;
        const {
          maxlength
        } = props;
        if (isDef(maxlength) && getStringLength(value) > +maxlength) {
          const modelValue = getModelValue();
          if (modelValue && getStringLength(modelValue) === +maxlength) {
            return modelValue;
          }
          const selectionEnd = (_a = inputRef.value) == null ? void 0 : _a.selectionEnd;
          if (state.focused && selectionEnd) {
            const valueArr = [...value];
            const exceededLength = valueArr.length - +maxlength;
            valueArr.splice(selectionEnd - exceededLength, exceededLength);
            return valueArr.join("");
          }
          return cutString(value, +maxlength);
        }
        return value;
      };
      const updateValue = (value, trigger = "onChange") => {
        const originalValue = value;
        value = limitValueLength(value);
        const limitDiffLen = getStringLength(originalValue) - getStringLength(value);
        if (props.type === "number" || props.type === "digit") {
          const isNumber = props.type === "number";
          value = formatNumber(value, isNumber, isNumber);
        }
        let formatterDiffLen = 0;
        if (props.formatter && trigger === props.formatTrigger) {
          const {
            formatter,
            maxlength
          } = props;
          value = formatter(value);
          if (isDef(maxlength) && getStringLength(value) > +maxlength) {
            value = cutString(value, +maxlength);
          }
          if (inputRef.value && state.focused) {
            const {
              selectionEnd
            } = inputRef.value;
            const bcoVal = cutString(originalValue, selectionEnd);
            formatterDiffLen = getStringLength(formatter(bcoVal)) - getStringLength(bcoVal);
          }
        }
        if (inputRef.value && inputRef.value.value !== value) {
          if (state.focused) {
            let {
              selectionStart,
              selectionEnd
            } = inputRef.value;
            inputRef.value.value = value;
            if (isDef(selectionStart) && isDef(selectionEnd)) {
              const valueLen = getStringLength(value);
              if (limitDiffLen) {
                selectionStart -= limitDiffLen;
                selectionEnd -= limitDiffLen;
              } else if (formatterDiffLen) {
                selectionStart += formatterDiffLen;
                selectionEnd += formatterDiffLen;
              }
              inputRef.value.setSelectionRange(Math.min(selectionStart, valueLen), Math.min(selectionEnd, valueLen));
            }
          } else {
            inputRef.value.value = value;
          }
        }
        if (value !== props.modelValue) {
          emit("update:modelValue", value);
        }
      };
      const onInput = (event) => {
        if (!event.target.composing) {
          updateValue(event.target.value);
        }
      };
      const blur = () => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.blur();
      };
      const focus = () => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.focus();
      };
      const adjustTextareaSize = () => {
        const input = inputRef.value;
        if (props.type === "textarea" && props.autosize && input) {
          resizeTextarea(input, props.autosize);
        }
      };
      const onFocus = (event) => {
        state.focused = true;
        emit("focus", event);
        vue.nextTick(adjustTextareaSize);
        if (getProp("readonly")) {
          blur();
        }
      };
      const onBlur = (event) => {
        state.focused = false;
        updateValue(getModelValue(), "onBlur");
        emit("blur", event);
        if (getProp("readonly")) {
          return;
        }
        validateWithTrigger("onBlur");
        vue.nextTick(adjustTextareaSize);
        resetScroll();
      };
      const onClickInput = (event) => emit("clickInput", event);
      const onClickLeftIcon = (event) => emit("clickLeftIcon", event);
      const onClickRightIcon = (event) => emit("clickRightIcon", event);
      const onClear = (event) => {
        preventDefault(event);
        emit("update:modelValue", "");
        emit("clear", event);
      };
      const showError = vue.computed(() => {
        if (typeof props.error === "boolean") {
          return props.error;
        }
        if (form && form.props.showError && state.status === "failed") {
          return true;
        }
      });
      const labelStyle = vue.computed(() => {
        const labelWidth = getProp("labelWidth");
        const labelAlign = getProp("labelAlign");
        if (labelWidth && labelAlign !== "top") {
          return {
            width: addUnit(labelWidth)
          };
        }
      });
      const onKeypress = (event) => {
        const ENTER_CODE = 13;
        if (event.keyCode === ENTER_CODE) {
          const submitOnEnter = form && form.props.submitOnEnter;
          if (!submitOnEnter && props.type !== "textarea") {
            preventDefault(event);
          }
          if (props.type === "search") {
            blur();
          }
        }
        emit("keypress", event);
      };
      const getInputId = () => props.id || `${id}-input`;
      const getValidationStatus = () => state.status;
      const renderInput = () => {
        const controlClass = bem$1a("control", [getProp("inputAlign"), {
          error: showError.value,
          custom: !!slots.input,
          "min-height": props.type === "textarea" && !props.autosize
        }]);
        if (slots.input) {
          return vue.createVNode("div", {
            "class": controlClass,
            "onClick": onClickInput
          }, [slots.input()]);
        }
        const inputAttrs = {
          id: getInputId(),
          ref: inputRef,
          name: props.name,
          rows: props.rows !== void 0 ? +props.rows : void 0,
          class: controlClass,
          disabled: getProp("disabled"),
          readonly: getProp("readonly"),
          autofocus: props.autofocus,
          placeholder: props.placeholder,
          autocomplete: props.autocomplete,
          enterkeyhint: props.enterkeyhint,
          "aria-labelledby": props.label ? `${id}-label` : void 0,
          onBlur,
          onFocus,
          onInput,
          onClick: onClickInput,
          onChange: endComposing,
          onKeypress,
          onCompositionend: endComposing,
          onCompositionstart: startComposing
        };
        if (props.type === "textarea") {
          return vue.createVNode("textarea", inputAttrs, null);
        }
        return vue.createVNode("input", vue.mergeProps(mapInputType(props.type), inputAttrs), null);
      };
      const renderLeftIcon = () => {
        const leftIconSlot = slots["left-icon"];
        if (props.leftIcon || leftIconSlot) {
          return vue.createVNode("div", {
            "class": bem$1a("left-icon"),
            "onClick": onClickLeftIcon
          }, [leftIconSlot ? leftIconSlot() : vue.createVNode(Icon, {
            "name": props.leftIcon,
            "classPrefix": props.iconPrefix
          }, null)]);
        }
      };
      const renderRightIcon = () => {
        const rightIconSlot = slots["right-icon"];
        if (props.rightIcon || rightIconSlot) {
          return vue.createVNode("div", {
            "class": bem$1a("right-icon"),
            "onClick": onClickRightIcon
          }, [rightIconSlot ? rightIconSlot() : vue.createVNode(Icon, {
            "name": props.rightIcon,
            "classPrefix": props.iconPrefix
          }, null)]);
        }
      };
      const renderWordLimit = () => {
        if (props.showWordLimit && props.maxlength) {
          const count = getStringLength(getModelValue());
          return vue.createVNode("div", {
            "class": bem$1a("word-limit")
          }, [vue.createVNode("span", {
            "class": bem$1a("word-num")
          }, [count]), vue.createTextVNode("/"), props.maxlength]);
        }
      };
      const renderMessage = () => {
        if (form && form.props.showErrorMessage === false) {
          return;
        }
        const message = props.errorMessage || state.validateMessage;
        if (message) {
          const slot = slots["error-message"];
          const errorMessageAlign = getProp("errorMessageAlign");
          return vue.createVNode("div", {
            "class": bem$1a("error-message", errorMessageAlign)
          }, [slot ? slot({
            message
          }) : message]);
        }
      };
      const renderLabel = () => {
        const labelWidth = getProp("labelWidth");
        const labelAlign = getProp("labelAlign");
        const colon = getProp("colon") ? ":" : "";
        if (slots.label) {
          return [slots.label(), colon];
        }
        if (props.label) {
          return vue.createVNode("label", {
            "id": `${id}-label`,
            "for": getInputId(),
            "style": labelAlign === "top" && labelWidth ? {
              width: addUnit(labelWidth)
            } : void 0
          }, [props.label + colon]);
        }
      };
      const renderFieldBody = () => [vue.createVNode("div", {
        "class": bem$1a("body")
      }, [renderInput(), showClear.value && vue.createVNode(Icon, {
        "ref": clearIconRef,
        "name": props.clearIcon,
        "class": bem$1a("clear")
      }, null), renderRightIcon(), slots.button && vue.createVNode("div", {
        "class": bem$1a("button")
      }, [slots.button()])]), renderWordLimit(), renderMessage()];
      useExpose({
        blur,
        focus,
        validate,
        formValue,
        resetValidation,
        getValidationStatus
      });
      vue.provide(CUSTOM_FIELD_INJECTION_KEY, {
        customValue,
        resetValidation,
        validateWithTrigger
      });
      vue.watch(() => props.modelValue, () => {
        updateValue(getModelValue());
        resetValidation();
        validateWithTrigger("onChange");
        vue.nextTick(adjustTextareaSize);
      });
      vue.onMounted(() => {
        updateValue(getModelValue(), props.formatTrigger);
        vue.nextTick(adjustTextareaSize);
      });
      useEventListener("touchstart", onClear, {
        target: vue.computed(() => {
          var _a;
          return (_a = clearIconRef.value) == null ? void 0 : _a.$el;
        })
      });
      return () => {
        const disabled = getProp("disabled");
        const labelAlign = getProp("labelAlign");
        const LeftIcon = renderLeftIcon();
        const renderTitle = () => {
          const Label = renderLabel();
          if (labelAlign === "top") {
            return [LeftIcon, Label].filter(Boolean);
          }
          return Label || [];
        };
        return vue.createVNode(Cell, {
          "size": props.size,
          "class": bem$1a({
            error: showError.value,
            disabled,
            [`label-${labelAlign}`]: labelAlign
          }),
          "center": props.center,
          "border": props.border,
          "isLink": props.isLink,
          "clickable": props.clickable,
          "titleStyle": labelStyle.value,
          "valueClass": bem$1a("value"),
          "titleClass": [bem$1a("label", [labelAlign, {
            required: props.required
          }]), props.labelClass],
          "arrowDirection": props.arrowDirection
        }, {
          icon: LeftIcon && labelAlign !== "top" ? () => LeftIcon : null,
          title: renderTitle,
          value: renderFieldBody,
          extra: slots.extra
        });
      };
    }
  });
  const Field = withInstall(stdin_default$1l);
  let lockCount = 0;
  function lockClick(lock) {
    if (lock) {
      if (!lockCount) {
        document.body.classList.add("van-toast--unclickable");
      }
      lockCount++;
    } else if (lockCount) {
      lockCount--;
      if (!lockCount) {
        document.body.classList.remove("van-toast--unclickable");
      }
    }
  }
  const [name$1d, bem$19] = createNamespace("toast");
  const popupInheritProps = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"];
  const toastProps = {
    icon: String,
    show: Boolean,
    type: makeStringProp("text"),
    overlay: Boolean,
    message: numericProp,
    iconSize: numericProp,
    duration: makeNumberProp(2e3),
    position: makeStringProp("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: unknownProp,
    iconPrefix: String,
    transition: makeStringProp("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: unknownProp,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean
  };
  var stdin_default$1k = vue.defineComponent({
    name: name$1d,
    props: toastProps,
    emits: ["update:show"],
    setup(props, {
      emit,
      slots
    }) {
      let timer;
      let clickable = false;
      const toggleClickable = () => {
        const newValue = props.show && props.forbidClick;
        if (clickable !== newValue) {
          clickable = newValue;
          lockClick(clickable);
        }
      };
      const updateShow = (show) => emit("update:show", show);
      const onClick = () => {
        if (props.closeOnClick) {
          updateShow(false);
        }
      };
      const clearTimer = () => clearTimeout(timer);
      const renderIcon = () => {
        const {
          icon,
          type,
          iconSize,
          iconPrefix,
          loadingType
        } = props;
        const hasIcon = icon || type === "success" || type === "fail";
        if (hasIcon) {
          return vue.createVNode(Icon, {
            "name": icon || type,
            "size": iconSize,
            "class": bem$19("icon"),
            "classPrefix": iconPrefix
          }, null);
        }
        if (type === "loading") {
          return vue.createVNode(Loading, {
            "class": bem$19("loading"),
            "size": iconSize,
            "type": loadingType
          }, null);
        }
      };
      const renderMessage = () => {
        const {
          type,
          message
        } = props;
        if (slots.message) {
          return vue.createVNode("div", {
            "class": bem$19("text")
          }, [slots.message()]);
        }
        if (isDef(message) && message !== "") {
          return type === "html" ? vue.createVNode("div", {
            "key": 0,
            "class": bem$19("text"),
            "innerHTML": String(message)
          }, null) : vue.createVNode("div", {
            "class": bem$19("text")
          }, [message]);
        }
      };
      vue.watch(() => [props.show, props.forbidClick], toggleClickable);
      vue.watch(() => [props.show, props.type, props.message, props.duration], () => {
        clearTimer();
        if (props.show && props.duration > 0) {
          timer = setTimeout(() => {
            updateShow(false);
          }, props.duration);
        }
      });
      vue.onMounted(toggleClickable);
      vue.onUnmounted(toggleClickable);
      return () => vue.createVNode(Popup, vue.mergeProps({
        "class": [bem$19([props.position, props.wordBreak === "normal" ? "break-normal" : props.wordBreak, {
          [props.type]: !props.icon
        }]), props.className],
        "lockScroll": false,
        "onClick": onClick,
        "onClosed": clearTimer,
        "onUpdate:show": updateShow
      }, pick(props, popupInheritProps)), {
        default: () => [renderIcon(), renderMessage()]
      });
    }
  });
  function usePopupState() {
    const state = vue.reactive({
      show: false
    });
    const toggle = (show) => {
      state.show = show;
    };
    const open = (props) => {
      extend(state, props, { transitionAppear: true });
      toggle(true);
    };
    const close = () => toggle(false);
    useExpose({ open, close, toggle });
    return {
      open,
      close,
      state,
      toggle
    };
  }
  function mountComponent(RootComponent) {
    const app = vue.createApp(RootComponent);
    const root = document.createElement("div");
    document.body.appendChild(root);
    return {
      instance: app.mount(root),
      unmount() {
        app.unmount();
        document.body.removeChild(root);
      }
    };
  }
  const defaultOptions = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: false,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: false,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: false,
    closeOnClickOverlay: false
  };
  let queue = [];
  let allowMultiple = false;
  let currentOptions = extend({}, defaultOptions);
  const defaultOptionsMap = /* @__PURE__ */ new Map();
  function parseOptions(message) {
    if (isObject(message)) {
      return message;
    }
    return {
      message
    };
  }
  function createInstance() {
    const {
      instance: instance2,
      unmount
    } = mountComponent({
      setup() {
        const message = vue.ref("");
        const {
          open,
          state,
          close,
          toggle
        } = usePopupState();
        const onClosed = () => {
        };
        const render = () => {
          const attrs = {
            onClosed,
            "onUpdate:show": toggle
          };
          return vue.createVNode(stdin_default$1k, vue.mergeProps(state, attrs), null);
        };
        vue.watch(message, (val) => {
          state.message = val;
        });
        vue.getCurrentInstance().render = render;
        return {
          open,
          close,
          message
        };
      }
    });
    return instance2;
  }
  function getInstance() {
    if (!queue.length || allowMultiple) {
      const instance2 = createInstance();
      queue.push(instance2);
    }
    return queue[queue.length - 1];
  }
  function showToast(options = {}) {
    if (!inBrowser$1) {
      return {};
    }
    const toast = getInstance();
    const parsedOptions = parseOptions(options);
    toast.open(extend({}, currentOptions, defaultOptionsMap.get(parsedOptions.type || currentOptions.type), parsedOptions));
    return toast;
  }
  const Toast = withInstall(stdin_default$1k);
  const [name$1c, bem$18] = createNamespace("switch");
  const switchProps = {
    size: numericProp,
    loading: Boolean,
    disabled: Boolean,
    modelValue: unknownProp,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: unknownProp,
      default: true
    },
    inactiveValue: {
      type: unknownProp,
      default: false
    }
  };
  var stdin_default$1j = vue.defineComponent({
    name: name$1c,
    props: switchProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const isChecked = () => props.modelValue === props.activeValue;
      const onClick = () => {
        if (!props.disabled && !props.loading) {
          const newValue = isChecked() ? props.inactiveValue : props.activeValue;
          emit("update:modelValue", newValue);
          emit("change", newValue);
        }
      };
      const renderLoading = () => {
        if (props.loading) {
          const color = isChecked() ? props.activeColor : props.inactiveColor;
          return vue.createVNode(Loading, {
            "class": bem$18("loading"),
            "color": color
          }, null);
        }
        if (slots.node) {
          return slots.node();
        }
      };
      useCustomFieldValue(() => props.modelValue);
      return () => {
        var _a;
        const {
          size,
          loading,
          disabled,
          activeColor,
          inactiveColor
        } = props;
        const checked = isChecked();
        const style = {
          fontSize: addUnit(size),
          backgroundColor: checked ? activeColor : inactiveColor
        };
        return vue.createVNode("div", {
          "role": "switch",
          "class": bem$18({
            on: checked,
            loading,
            disabled
          }),
          "style": style,
          "tabindex": disabled ? void 0 : 0,
          "aria-checked": checked,
          "onClick": onClick
        }, [vue.createVNode("div", {
          "class": bem$18("node")
        }, [renderLoading()]), (_a = slots.background) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Switch = withInstall(stdin_default$1j);
  const [name$1b, bem$17] = createNamespace("address-edit-detail");
  const t$i = createNamespace("address-edit")[2];
  var stdin_default$1i = vue.defineComponent({
    name: name$1b,
    props: {
      show: Boolean,
      rows: numericProp,
      value: String,
      rules: Array,
      focused: Boolean,
      maxlength: numericProp,
      searchResult: Array,
      showSearchResult: Boolean
    },
    emits: ["blur", "focus", "input", "selectSearch"],
    setup(props, {
      emit
    }) {
      const field = vue.ref();
      const showSearchResult = () => props.focused && props.searchResult && props.showSearchResult;
      const onSelect = (express) => {
        emit("selectSearch", express);
        emit("input", `${express.address || ""} ${express.name || ""}`.trim());
      };
      const renderSearchResult = () => {
        if (!showSearchResult()) {
          return;
        }
        const {
          searchResult
        } = props;
        return searchResult.map((express) => vue.createVNode(Cell, {
          "clickable": true,
          "key": (express.name || "") + (express.address || ""),
          "icon": "location-o",
          "title": express.name,
          "label": express.address,
          "class": bem$17("search-item"),
          "border": false,
          "onClick": () => onSelect(express)
        }, null));
      };
      const onBlur = (event) => emit("blur", event);
      const onFocus = (event) => emit("focus", event);
      const onInput = (value) => emit("input", value);
      return () => {
        if (props.show) {
          return vue.createVNode(vue.Fragment, null, [vue.createVNode(Field, {
            "autosize": true,
            "clearable": true,
            "ref": field,
            "class": bem$17(),
            "rows": props.rows,
            "type": "textarea",
            "rules": props.rules,
            "label": t$i("addressDetail"),
            "border": !showSearchResult(),
            "maxlength": props.maxlength,
            "modelValue": props.value,
            "placeholder": t$i("addressDetail"),
            "onBlur": onBlur,
            "onFocus": onFocus,
            "onUpdate:modelValue": onInput
          }, null), renderSearchResult()]);
        }
      };
    }
  });
  const [name$1a, bem$16, t$h] = createNamespace("address-edit");
  const DEFAULT_DATA = {
    name: "",
    tel: "",
    city: "",
    county: "",
    country: "",
    province: "",
    areaCode: "",
    isDefault: false,
    addressDetail: ""
  };
  const addressEditProps = {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showArea: truthProp,
    showDetail: truthProp,
    showDelete: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: numericProp,
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    detailRows: makeNumericProp(1),
    detailMaxlength: makeNumericProp(200),
    areaColumnsPlaceholder: makeArrayProp(),
    addressInfo: {
      type: Object,
      default: () => extend({}, DEFAULT_DATA)
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  };
  var stdin_default$1h = vue.defineComponent({
    name: name$1a,
    props: addressEditProps,
    emits: ["save", "focus", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
    setup(props, {
      emit,
      slots
    }) {
      const areaRef = vue.ref();
      const data = vue.reactive({});
      const showAreaPopup = vue.ref(false);
      const detailFocused = vue.ref(false);
      const areaListLoaded = vue.computed(() => isObject(props.areaList) && Object.keys(props.areaList).length);
      const areaText = vue.computed(() => {
        const {
          province,
          city,
          county,
          areaCode
        } = data;
        if (areaCode) {
          const arr = [province, city, county];
          if (province && province === city) {
            arr.splice(1, 1);
          }
          return arr.filter(Boolean).join("/");
        }
        return "";
      });
      const hideBottomFields = vue.computed(() => {
        var _a;
        return ((_a = props.searchResult) == null ? void 0 : _a.length) && detailFocused.value;
      });
      const onFocus = (key) => {
        detailFocused.value = key === "addressDetail";
        emit("focus", key);
      };
      const rules = vue.computed(() => {
        const {
          validator,
          telValidator
        } = props;
        const makeRule = (name2, emptyMessage) => ({
          validator: (value) => {
            if (validator) {
              const message = validator(name2, value);
              if (message) {
                return message;
              }
            }
            if (!value) {
              return emptyMessage;
            }
            return true;
          }
        });
        return {
          name: [makeRule("name", t$h("nameEmpty"))],
          tel: [makeRule("tel", t$h("telInvalid")), {
            validator: telValidator,
            message: t$h("telInvalid")
          }],
          areaCode: [makeRule("areaCode", t$h("areaEmpty"))],
          addressDetail: [makeRule("addressDetail", t$h("addressEmpty"))]
        };
      });
      const onSave = () => emit("save", data);
      const onChangeDetail = (val) => {
        data.addressDetail = val;
        emit("changeDetail", val);
      };
      const assignAreaText = (options) => {
        data.province = options[0].text;
        data.city = options[1].text;
        data.county = options[2].text;
      };
      const onAreaConfirm = ({
        selectedValues,
        selectedOptions
      }) => {
        if (selectedValues.some((value) => value === AREA_EMPTY_CODE)) {
          showToast(t$h("areaEmpty"));
        } else {
          showAreaPopup.value = false;
          assignAreaText(selectedOptions);
          emit("changeArea", selectedOptions);
        }
      };
      const onDelete = () => emit("delete", data);
      const setAreaCode = (code) => {
        data.areaCode = code || "";
      };
      const onDetailBlur = () => {
        setTimeout(() => {
          detailFocused.value = false;
        });
      };
      const setAddressDetail = (value) => {
        data.addressDetail = value;
      };
      const renderSetDefaultCell = () => {
        if (props.showSetDefault) {
          const slots2 = {
            "right-icon": () => vue.createVNode(Switch, {
              "modelValue": data.isDefault,
              "onUpdate:modelValue": ($event) => data.isDefault = $event,
              "onChange": (event) => emit("changeDefault", event)
            }, null)
          };
          return vue.withDirectives(vue.createVNode(Cell, {
            "center": true,
            "title": t$h("defaultAddress"),
            "class": bem$16("default")
          }, slots2), [[vue.vShow, !hideBottomFields.value]]);
        }
      };
      useExpose({
        setAreaCode,
        setAddressDetail
      });
      vue.watch(() => props.addressInfo, (value) => {
        extend(data, DEFAULT_DATA, value);
        vue.nextTick(() => {
          var _a;
          const options = (_a = areaRef.value) == null ? void 0 : _a.getSelectedOptions();
          if (options && options.every((option) => option && option.value !== AREA_EMPTY_CODE)) {
            assignAreaText(options);
          }
        });
      }, {
        deep: true,
        immediate: true
      });
      return () => {
        const {
          disableArea
        } = props;
        return vue.createVNode(Form, {
          "class": bem$16(),
          "onSubmit": onSave
        }, {
          default: () => {
            var _a;
            return [vue.createVNode("div", {
              "class": bem$16("fields")
            }, [vue.createVNode(Field, {
              "modelValue": data.name,
              "onUpdate:modelValue": ($event) => data.name = $event,
              "clearable": true,
              "label": t$h("name"),
              "rules": rules.value.name,
              "placeholder": t$h("name"),
              "onFocus": () => onFocus("name")
            }, null), vue.createVNode(Field, {
              "modelValue": data.tel,
              "onUpdate:modelValue": ($event) => data.tel = $event,
              "clearable": true,
              "type": "tel",
              "label": t$h("tel"),
              "rules": rules.value.tel,
              "maxlength": props.telMaxlength,
              "placeholder": t$h("tel"),
              "onFocus": () => onFocus("tel")
            }, null), vue.withDirectives(vue.createVNode(Field, {
              "readonly": true,
              "label": t$h("area"),
              "is-link": !disableArea,
              "modelValue": areaText.value,
              "rules": rules.value.areaCode,
              "placeholder": props.areaPlaceholder || t$h("area"),
              "onFocus": () => onFocus("areaCode"),
              "onClick": () => {
                emit("clickArea");
                showAreaPopup.value = !disableArea;
              }
            }, null), [[vue.vShow, props.showArea]]), vue.createVNode(stdin_default$1i, {
              "show": props.showDetail,
              "rows": props.detailRows,
              "rules": rules.value.addressDetail,
              "value": data.addressDetail,
              "focused": detailFocused.value,
              "maxlength": props.detailMaxlength,
              "searchResult": props.searchResult,
              "showSearchResult": props.showSearchResult,
              "onBlur": onDetailBlur,
              "onFocus": () => onFocus("addressDetail"),
              "onInput": onChangeDetail,
              "onSelectSearch": (event) => emit("selectSearch", event)
            }, null), (_a = slots.default) == null ? void 0 : _a.call(slots)]), renderSetDefaultCell(), vue.withDirectives(vue.createVNode("div", {
              "class": bem$16("buttons")
            }, [vue.createVNode(Button, {
              "block": true,
              "round": true,
              "type": "primary",
              "text": props.saveButtonText || t$h("save"),
              "class": bem$16("button"),
              "loading": props.isSaving,
              "nativeType": "submit"
            }, null), props.showDelete && vue.createVNode(Button, {
              "block": true,
              "round": true,
              "class": bem$16("button"),
              "loading": props.isDeleting,
              "text": props.deleteButtonText || t$h("delete"),
              "onClick": onDelete
            }, null)]), [[vue.vShow, !hideBottomFields.value]]), vue.createVNode(Popup, {
              "show": showAreaPopup.value,
              "onUpdate:show": ($event) => showAreaPopup.value = $event,
              "round": true,
              "teleport": "body",
              "position": "bottom",
              "lazyRender": false
            }, {
              default: () => [vue.createVNode(Area, {
                "modelValue": data.areaCode,
                "onUpdate:modelValue": ($event) => data.areaCode = $event,
                "ref": areaRef,
                "loading": !areaListLoaded.value,
                "areaList": props.areaList,
                "columnsPlaceholder": props.areaColumnsPlaceholder,
                "onConfirm": onAreaConfirm,
                "onCancel": () => {
                  showAreaPopup.value = false;
                }
              }, null)]
            })];
          }
        });
      };
    }
  });
  const AddressEdit = withInstall(stdin_default$1h);
  const [name$19, bem$15] = createNamespace("radio-group");
  const radioGroupProps = {
    disabled: Boolean,
    iconSize: numericProp,
    direction: String,
    modelValue: unknownProp,
    checkedColor: String
  };
  const RADIO_KEY = Symbol(name$19);
  var stdin_default$1g = vue.defineComponent({
    name: name$19,
    props: radioGroupProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        linkChildren
      } = useChildren(RADIO_KEY);
      const updateValue = (value) => emit("update:modelValue", value);
      vue.watch(() => props.modelValue, (value) => emit("change", value));
      linkChildren({
        props,
        updateValue
      });
      useCustomFieldValue(() => props.modelValue);
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": bem$15([props.direction]),
          "role": "radiogroup"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const RadioGroup = withInstall(stdin_default$1g);
  const [name$18, bem$14] = createNamespace("tag");
  const tagProps = {
    size: String,
    mark: Boolean,
    show: truthProp,
    type: makeStringProp("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
  };
  var stdin_default$1f = vue.defineComponent({
    name: name$18,
    props: tagProps,
    emits: ["close"],
    setup(props, {
      slots,
      emit
    }) {
      const onClose = (event) => {
        event.stopPropagation();
        emit("close", event);
      };
      const getStyle = () => {
        if (props.plain) {
          return {
            color: props.textColor || props.color,
            borderColor: props.color
          };
        }
        return {
          color: props.textColor,
          background: props.color
        };
      };
      const renderTag = () => {
        var _a;
        const {
          type,
          mark,
          plain,
          round: round2,
          size,
          closeable
        } = props;
        const classes = {
          mark,
          plain,
          round: round2
        };
        if (size) {
          classes[size] = size;
        }
        const CloseIcon = closeable && vue.createVNode(Icon, {
          "name": "cross",
          "class": [bem$14("close"), HAPTICS_FEEDBACK],
          "onClick": onClose
        }, null);
        return vue.createVNode("span", {
          "style": getStyle(),
          "class": bem$14([classes, type])
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots), CloseIcon]);
      };
      return () => vue.createVNode(vue.Transition, {
        "name": props.closeable ? "van-fade" : void 0
      }, {
        default: () => [props.show ? renderTag() : null]
      });
    }
  });
  const Tag = withInstall(stdin_default$1f);
  const checkerProps = {
    name: unknownProp,
    shape: makeStringProp("round"),
    disabled: Boolean,
    iconSize: numericProp,
    modelValue: unknownProp,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
  };
  var stdin_default$1e = vue.defineComponent({
    props: extend({}, checkerProps, {
      bem: makeRequiredProp(Function),
      role: String,
      parent: Object,
      checked: Boolean,
      bindGroup: truthProp
    }),
    emits: ["click", "toggle"],
    setup(props, {
      emit,
      slots
    }) {
      const iconRef = vue.ref();
      const getParentProp = (name2) => {
        if (props.parent && props.bindGroup) {
          return props.parent.props[name2];
        }
      };
      const disabled = vue.computed(() => getParentProp("disabled") || props.disabled);
      const direction = vue.computed(() => getParentProp("direction"));
      const iconStyle = vue.computed(() => {
        const checkedColor = props.checkedColor || getParentProp("checkedColor");
        if (checkedColor && props.checked && !disabled.value) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      });
      const onClick = (event) => {
        const {
          target
        } = event;
        const icon = iconRef.value;
        const iconClicked = icon === target || (icon == null ? void 0 : icon.contains(target));
        if (!disabled.value && (iconClicked || !props.labelDisabled)) {
          emit("toggle");
        }
        emit("click", event);
      };
      const renderIcon = () => {
        const {
          bem: bem2,
          shape,
          checked
        } = props;
        const iconSize = props.iconSize || getParentProp("iconSize");
        return vue.createVNode("div", {
          "ref": iconRef,
          "class": bem2("icon", [shape, {
            disabled: disabled.value,
            checked
          }]),
          "style": {
            fontSize: addUnit(iconSize)
          }
        }, [slots.icon ? slots.icon({
          checked,
          disabled: disabled.value
        }) : vue.createVNode(Icon, {
          "name": "success",
          "style": iconStyle.value
        }, null)]);
      };
      const renderLabel = () => {
        if (slots.default) {
          return vue.createVNode("span", {
            "class": props.bem("label", [props.labelPosition, {
              disabled: disabled.value
            }])
          }, [slots.default()]);
        }
      };
      return () => {
        const nodes = props.labelPosition === "left" ? [renderLabel(), renderIcon()] : [renderIcon(), renderLabel()];
        return vue.createVNode("div", {
          "role": props.role,
          "class": props.bem([{
            disabled: disabled.value,
            "label-disabled": props.labelDisabled
          }, direction.value]),
          "tabindex": disabled.value ? void 0 : 0,
          "aria-checked": props.checked,
          "onClick": onClick
        }, [nodes]);
      };
    }
  });
  const [name$17, bem$13] = createNamespace("radio");
  var stdin_default$1d = vue.defineComponent({
    name: name$17,
    props: checkerProps,
    emits: ["update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        parent
      } = useParent(RADIO_KEY);
      const checked = () => {
        const value = parent ? parent.props.modelValue : props.modelValue;
        return value === props.name;
      };
      const toggle = () => {
        if (parent) {
          parent.updateValue(props.name);
        } else {
          emit("update:modelValue", props.name);
        }
      };
      return () => vue.createVNode(stdin_default$1e, vue.mergeProps({
        "bem": bem$13,
        "role": "radio",
        "parent": parent,
        "checked": checked(),
        "onToggle": toggle
      }, props), pick(slots, ["default", "icon"]));
    }
  });
  const Radio = withInstall(stdin_default$1d);
  const [name$16, bem$12] = createNamespace("address-item");
  var stdin_default$1c = vue.defineComponent({
    name: name$16,
    props: {
      address: makeRequiredProp(Object),
      disabled: Boolean,
      switchable: Boolean,
      defaultTagText: String
    },
    emits: ["edit", "click", "select"],
    setup(props, {
      slots,
      emit
    }) {
      const onClick = () => {
        if (props.switchable) {
          emit("select");
        }
        emit("click");
      };
      const renderRightIcon = () => vue.createVNode(Icon, {
        "name": "edit",
        "class": bem$12("edit"),
        "onClick": (event) => {
          event.stopPropagation();
          emit("edit");
          emit("click");
        }
      }, null);
      const renderTag = () => {
        if (slots.tag) {
          return slots.tag(props.address);
        }
        if (props.address.isDefault && props.defaultTagText) {
          return vue.createVNode(Tag, {
            "type": "primary",
            "round": true,
            "class": bem$12("tag")
          }, {
            default: () => [props.defaultTagText]
          });
        }
      };
      const renderContent = () => {
        const {
          address,
          disabled,
          switchable
        } = props;
        const Info = [vue.createVNode("div", {
          "class": bem$12("name")
        }, [`${address.name} ${address.tel}`, renderTag()]), vue.createVNode("div", {
          "class": bem$12("address")
        }, [address.address])];
        if (switchable && !disabled) {
          return vue.createVNode(Radio, {
            "name": address.id,
            "iconSize": 18
          }, {
            default: () => [Info]
          });
        }
        return Info;
      };
      return () => {
        var _a;
        const {
          disabled
        } = props;
        return vue.createVNode("div", {
          "class": bem$12({
            disabled
          }),
          "onClick": onClick
        }, [vue.createVNode(Cell, {
          "border": false,
          "titleClass": bem$12("title")
        }, {
          title: renderContent,
          "right-icon": renderRightIcon
        }), (_a = slots.bottom) == null ? void 0 : _a.call(slots, extend({}, props.address, {
          disabled
        }))]);
      };
    }
  });
  const [name$15, bem$11, t$g] = createNamespace("address-list");
  const addressListProps = {
    list: makeArrayProp(),
    modelValue: numericProp,
    switchable: truthProp,
    disabledText: String,
    disabledList: makeArrayProp(),
    addButtonText: String,
    defaultTagText: String
  };
  var stdin_default$1b = vue.defineComponent({
    name: name$15,
    props: addressListProps,
    emits: ["add", "edit", "select", "clickItem", "editDisabled", "selectDisabled", "update:modelValue"],
    setup(props, {
      slots,
      emit
    }) {
      const renderItem = (item, index, disabled) => {
        const onEdit = () => emit(disabled ? "editDisabled" : "edit", item, index);
        const onClick = () => emit("clickItem", item, index);
        const onSelect = () => {
          emit(disabled ? "selectDisabled" : "select", item, index);
          if (!disabled) {
            emit("update:modelValue", item.id);
          }
        };
        return vue.createVNode(stdin_default$1c, {
          "key": item.id,
          "address": item,
          "disabled": disabled,
          "switchable": props.switchable,
          "defaultTagText": props.defaultTagText,
          "onEdit": onEdit,
          "onClick": onClick,
          "onSelect": onSelect
        }, {
          bottom: slots["item-bottom"],
          tag: slots.tag
        });
      };
      const renderList = (list, disabled) => {
        if (list) {
          return list.map((item, index) => renderItem(item, index, disabled));
        }
      };
      const renderBottom = () => vue.createVNode("div", {
        "class": [bem$11("bottom"), "van-safe-area-bottom"]
      }, [vue.createVNode(Button, {
        "round": true,
        "block": true,
        "type": "primary",
        "text": props.addButtonText || t$g("add"),
        "class": bem$11("add"),
        "onClick": () => emit("add")
      }, null)]);
      return () => {
        var _a, _b;
        const List2 = renderList(props.list);
        const DisabledList = renderList(props.disabledList, true);
        const DisabledText = props.disabledText && vue.createVNode("div", {
          "class": bem$11("disabled-text")
        }, [props.disabledText]);
        return vue.createVNode("div", {
          "class": bem$11()
        }, [(_a = slots.top) == null ? void 0 : _a.call(slots), vue.createVNode(RadioGroup, {
          "modelValue": props.modelValue
        }, {
          default: () => [List2]
        }), DisabledText, DisabledList, (_b = slots.default) == null ? void 0 : _b.call(slots), renderBottom()]);
      };
    }
  });
  const AddressList = withInstall(stdin_default$1b);
  function throttle(action, delay) {
    let timeout = null;
    let lastRun = 0;
    return function(...args) {
      if (timeout) {
        return;
      }
      const elapsed = Date.now() - lastRun;
      const runCallback = () => {
        lastRun = Date.now();
        timeout = false;
        action.apply(this, args);
      };
      if (elapsed >= delay) {
        runCallback();
      } else {
        timeout = setTimeout(runCallback, delay);
      }
    };
  }
  const [name$14, bem$10] = createNamespace("back-top");
  const backTopProps = {
    right: numericProp,
    bottom: numericProp,
    zIndex: numericProp,
    target: [String, Object],
    offset: makeNumericProp(200),
    immediate: Boolean,
    teleport: {
      type: [String, Object],
      default: "body"
    }
  };
  var stdin_default$1a = vue.defineComponent({
    name: name$14,
    inheritAttrs: false,
    props: backTopProps,
    emits: ["click"],
    setup(props, {
      emit,
      slots,
      attrs
    }) {
      const show = vue.ref(false);
      const root = vue.ref();
      const scrollParent = vue.ref();
      const style = vue.computed(() => extend(getZIndexStyle(props.zIndex), {
        right: addUnit(props.right),
        bottom: addUnit(props.bottom)
      }));
      const onClick = (event) => {
        var _a;
        emit("click", event);
        (_a = scrollParent.value) == null ? void 0 : _a.scrollTo({
          top: 0,
          behavior: props.immediate ? "auto" : "smooth"
        });
      };
      const scroll = () => {
        show.value = scrollParent.value ? getScrollTop(scrollParent.value) >= +props.offset : false;
      };
      const getTarget = () => {
        const {
          target
        } = props;
        if (typeof target === "string") {
          const el = document.querySelector(target);
          if (el) {
            return el;
          }
          {
            formatAppLog("error", "at node_modules/vant/es/back-top/BackTop.mjs:58", `[Vant] BackTop: target element "${target}" was not found, the BackTop component will not be rendered.`);
          }
        } else {
          return target;
        }
      };
      const updateTarget = () => {
        if (inBrowser$1) {
          vue.nextTick(() => {
            scrollParent.value = props.target ? getTarget() : getScrollParent$1(root.value);
            scroll();
          });
        }
      };
      useEventListener("scroll", throttle(scroll, 100), {
        target: scrollParent
      });
      vue.onMounted(updateTarget);
      vue.watch(() => props.target, updateTarget);
      return () => {
        const Content = vue.createVNode("div", vue.mergeProps({
          "ref": root,
          "class": bem$10({
            active: show.value
          }),
          "style": style.value,
          "onClick": onClick
        }, attrs), [slots.default ? slots.default() : vue.createVNode(Icon, {
          "name": "back-top",
          "class": bem$10("icon")
        }, null)]);
        if (props.teleport) {
          return vue.createVNode(vue.Teleport, {
            "to": props.teleport
          }, {
            default: () => [Content]
          });
        }
        return Content;
      };
    }
  });
  const BackTop = withInstall(stdin_default$1a);
  const [name$13, bem$$, t$f] = createNamespace("calendar");
  const formatMonthTitle = (date) => t$f("monthTitle", date.getFullYear(), date.getMonth() + 1);
  function compareMonth(date1, date2) {
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();
    if (year1 === year2) {
      const month1 = date1.getMonth();
      const month2 = date2.getMonth();
      return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
    }
    return year1 > year2 ? 1 : -1;
  }
  function compareDay(day1, day2) {
    const compareMonthResult = compareMonth(day1, day2);
    if (compareMonthResult === 0) {
      const date1 = day1.getDate();
      const date2 = day2.getDate();
      return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
    }
    return compareMonthResult;
  }
  const cloneDate = (date) => new Date(date);
  const cloneDates = (dates) => Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates);
  function getDayByOffset(date, offset2) {
    const cloned = cloneDate(date);
    cloned.setDate(cloned.getDate() + offset2);
    return cloned;
  }
  const getPrevDay = (date) => getDayByOffset(date, -1);
  const getNextDay = (date) => getDayByOffset(date, 1);
  const getToday = () => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  };
  function calcDateNum(date) {
    const day1 = date[0].getTime();
    const day2 = date[1].getTime();
    return (day2 - day1) / (1e3 * 60 * 60 * 24) + 1;
  }
  const sharedProps = extend({}, pickerSharedProps, {
    modelValue: makeArrayProp(),
    filter: Function,
    formatter: {
      type: Function,
      default: (type, option) => option
    }
  });
  const pickerInheritKeys = Object.keys(pickerSharedProps);
  function times(n, iteratee) {
    if (n < 0) {
      return [];
    }
    const result = Array(n);
    let index = -1;
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  const getMonthEndDay = (year, month) => 32 - new Date(year, month - 1, 32).getDate();
  const genOptions = (min, max, type, formatter, filter) => {
    const options = times(max - min + 1, (index) => {
      const value = padZero(min + index);
      return formatter(type, {
        text: value,
        value
      });
    });
    return filter ? filter(type, options) : options;
  };
  const formatValueRange = (values, columns) => values.map((value, index) => {
    const column = columns[index];
    if (column.length) {
      const maxValue = +column[column.length - 1].value;
      if (+value > maxValue) {
        return String(maxValue);
      }
    }
    return value;
  });
  const [name$12] = createNamespace("calendar-day");
  var stdin_default$19 = vue.defineComponent({
    name: name$12,
    props: {
      item: makeRequiredProp(Object),
      color: String,
      index: Number,
      offset: makeNumberProp(0),
      rowHeight: String
    },
    emits: ["click"],
    setup(props, {
      emit,
      slots
    }) {
      const style = vue.computed(() => {
        var _a;
        const {
          item,
          index,
          color,
          offset: offset2,
          rowHeight
        } = props;
        const style2 = {
          height: rowHeight
        };
        if (item.type === "placeholder") {
          style2.width = "100%";
          return style2;
        }
        if (index === 0) {
          style2.marginLeft = `${100 * offset2 / 7}%`;
        }
        if (color) {
          switch (item.type) {
            case "end":
            case "start":
            case "start-end":
            case "multiple-middle":
            case "multiple-selected":
              style2.background = color;
              break;
            case "middle":
              style2.color = color;
              break;
          }
        }
        if (offset2 + (((_a = item.date) == null ? void 0 : _a.getDate()) || 1) > 28) {
          style2.marginBottom = 0;
        }
        return style2;
      });
      const onClick = () => {
        if (props.item.type !== "disabled") {
          emit("click", props.item);
        }
      };
      const renderTopInfo = () => {
        const {
          topInfo
        } = props.item;
        if (topInfo || slots["top-info"]) {
          return vue.createVNode("div", {
            "class": bem$$("top-info")
          }, [slots["top-info"] ? slots["top-info"](props.item) : topInfo]);
        }
      };
      const renderBottomInfo = () => {
        const {
          bottomInfo
        } = props.item;
        if (bottomInfo || slots["bottom-info"]) {
          return vue.createVNode("div", {
            "class": bem$$("bottom-info")
          }, [slots["bottom-info"] ? slots["bottom-info"](props.item) : bottomInfo]);
        }
      };
      const renderContent = () => {
        const {
          item,
          color,
          rowHeight
        } = props;
        const {
          type,
          text
        } = item;
        const Nodes = [renderTopInfo(), text, renderBottomInfo()];
        if (type === "selected") {
          return vue.createVNode("div", {
            "class": bem$$("selected-day"),
            "style": {
              width: rowHeight,
              height: rowHeight,
              background: color
            }
          }, [Nodes]);
        }
        return Nodes;
      };
      return () => {
        const {
          type,
          className
        } = props.item;
        if (type === "placeholder") {
          return vue.createVNode("div", {
            "class": bem$$("day"),
            "style": style.value
          }, null);
        }
        return vue.createVNode("div", {
          "role": "gridcell",
          "style": style.value,
          "class": [bem$$("day", type), className],
          "tabindex": type === "disabled" ? void 0 : -1,
          "onClick": onClick
        }, [renderContent()]);
      };
    }
  });
  const [name$11] = createNamespace("calendar-month");
  const calendarMonthProps = {
    date: makeRequiredProp(Date),
    type: String,
    color: String,
    minDate: makeRequiredProp(Date),
    maxDate: makeRequiredProp(Date),
    showMark: Boolean,
    rowHeight: numericProp,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
  };
  var stdin_default$18 = vue.defineComponent({
    name: name$11,
    props: calendarMonthProps,
    emits: ["click"],
    setup(props, {
      emit,
      slots
    }) {
      const [visible, setVisible] = useToggle();
      const daysRef = vue.ref();
      const monthRef = vue.ref();
      const height2 = useHeight(monthRef);
      const title = vue.computed(() => formatMonthTitle(props.date));
      const rowHeight = vue.computed(() => addUnit(props.rowHeight));
      const offset2 = vue.computed(() => {
        const realDay = props.date.getDay();
        if (props.firstDayOfWeek) {
          return (realDay + 7 - props.firstDayOfWeek) % 7;
        }
        return realDay;
      });
      const totalDay = vue.computed(() => getMonthEndDay(props.date.getFullYear(), props.date.getMonth() + 1));
      const shouldRender = vue.computed(() => visible.value || !props.lazyRender);
      const getTitle = () => title.value;
      const getMultipleDayType = (day) => {
        const isSelected = (date) => props.currentDate.some((item) => compareDay(item, date) === 0);
        if (isSelected(day)) {
          const prevDay = getPrevDay(day);
          const nextDay = getNextDay(day);
          const prevSelected = isSelected(prevDay);
          const nextSelected = isSelected(nextDay);
          if (prevSelected && nextSelected) {
            return "multiple-middle";
          }
          if (prevSelected) {
            return "end";
          }
          if (nextSelected) {
            return "start";
          }
          return "multiple-selected";
        }
        return "";
      };
      const getRangeDayType = (day) => {
        const [startDay, endDay] = props.currentDate;
        if (!startDay) {
          return "";
        }
        const compareToStart = compareDay(day, startDay);
        if (!endDay) {
          return compareToStart === 0 ? "start" : "";
        }
        const compareToEnd = compareDay(day, endDay);
        if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
          return "start-end";
        }
        if (compareToStart === 0) {
          return "start";
        }
        if (compareToEnd === 0) {
          return "end";
        }
        if (compareToStart > 0 && compareToEnd < 0) {
          return "middle";
        }
        return "";
      };
      const getDayType = (day) => {
        const {
          type,
          minDate,
          maxDate,
          currentDate
        } = props;
        if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
          return "disabled";
        }
        if (currentDate === null) {
          return "";
        }
        if (Array.isArray(currentDate)) {
          if (type === "multiple") {
            return getMultipleDayType(day);
          }
          if (type === "range") {
            return getRangeDayType(day);
          }
        } else if (type === "single") {
          return compareDay(day, currentDate) === 0 ? "selected" : "";
        }
        return "";
      };
      const getBottomInfo = (dayType) => {
        if (props.type === "range") {
          if (dayType === "start" || dayType === "end") {
            return t$f(dayType);
          }
          if (dayType === "start-end") {
            return `${t$f("start")}/${t$f("end")}`;
          }
        }
      };
      const renderTitle = () => {
        if (props.showMonthTitle) {
          return vue.createVNode("div", {
            "class": bem$$("month-title")
          }, [slots["month-title"] ? slots["month-title"]({
            date: props.date,
            text: title.value
          }) : title.value]);
        }
      };
      const renderMark = () => {
        if (props.showMark && shouldRender.value) {
          return vue.createVNode("div", {
            "class": bem$$("month-mark")
          }, [props.date.getMonth() + 1]);
        }
      };
      const placeholders = vue.computed(() => {
        const count = Math.ceil((totalDay.value + offset2.value) / 7);
        return Array(count).fill({
          type: "placeholder"
        });
      });
      const days = vue.computed(() => {
        const days2 = [];
        const year = props.date.getFullYear();
        const month = props.date.getMonth();
        for (let day = 1; day <= totalDay.value; day++) {
          const date = new Date(year, month, day);
          const type = getDayType(date);
          let config = {
            date,
            type,
            text: day,
            bottomInfo: getBottomInfo(type)
          };
          if (props.formatter) {
            config = props.formatter(config);
          }
          days2.push(config);
        }
        return days2;
      });
      const disabledDays = vue.computed(() => days.value.filter((day) => day.type === "disabled"));
      const scrollToDate = (body, targetDate) => {
        if (daysRef.value) {
          const daysRect = useRect(daysRef.value);
          const totalRows = placeholders.value.length;
          const currentRow = Math.ceil((targetDate.getDate() + offset2.value) / 7);
          const rowOffset = (currentRow - 1) * daysRect.height / totalRows;
          setScrollTop(body, daysRect.top + rowOffset + body.scrollTop - useRect(body).top);
        }
      };
      const renderDay = (item, index) => vue.createVNode(stdin_default$19, {
        "item": item,
        "index": index,
        "color": props.color,
        "offset": offset2.value,
        "rowHeight": rowHeight.value,
        "onClick": (item2) => emit("click", item2)
      }, pick(slots, ["top-info", "bottom-info"]));
      const renderDays = () => vue.createVNode("div", {
        "ref": daysRef,
        "role": "grid",
        "class": bem$$("days")
      }, [renderMark(), (shouldRender.value ? days : placeholders).value.map(renderDay)]);
      useExpose({
        getTitle,
        getHeight: () => height2.value,
        setVisible,
        scrollToDate,
        disabledDays
      });
      return () => vue.createVNode("div", {
        "class": bem$$("month"),
        "ref": monthRef
      }, [renderTitle(), renderDays()]);
    }
  });
  const [name$10] = createNamespace("calendar-header");
  var stdin_default$17 = vue.defineComponent({
    name: name$10,
    props: {
      date: Date,
      title: String,
      subtitle: String,
      showTitle: Boolean,
      showSubtitle: Boolean,
      firstDayOfWeek: Number
    },
    emits: ["clickSubtitle"],
    setup(props, {
      slots,
      emit
    }) {
      const renderTitle = () => {
        if (props.showTitle) {
          const text = props.title || t$f("title");
          const title = slots.title ? slots.title() : text;
          return vue.createVNode("div", {
            "class": bem$$("header-title")
          }, [title]);
        }
      };
      const onClickSubtitle = (event) => emit("clickSubtitle", event);
      const renderSubtitle = () => {
        if (props.showSubtitle) {
          const title = slots.subtitle ? slots.subtitle({
            date: props.date,
            text: props.subtitle
          }) : props.subtitle;
          return vue.createVNode("div", {
            "class": bem$$("header-subtitle"),
            "onClick": onClickSubtitle
          }, [title]);
        }
      };
      const renderWeekDays = () => {
        const {
          firstDayOfWeek
        } = props;
        const weekdays = t$f("weekdays");
        const renderWeekDays2 = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];
        return vue.createVNode("div", {
          "class": bem$$("weekdays")
        }, [renderWeekDays2.map((text) => vue.createVNode("span", {
          "class": bem$$("weekday")
        }, [text]))]);
      };
      return () => vue.createVNode("div", {
        "class": bem$$("header")
      }, [renderTitle(), renderSubtitle(), renderWeekDays()]);
    }
  });
  const calendarProps = {
    show: Boolean,
    type: makeStringProp("single"),
    title: String,
    color: String,
    round: truthProp,
    readonly: Boolean,
    poppable: truthProp,
    maxRange: makeNumericProp(null),
    position: makeStringProp("bottom"),
    teleport: [String, Object],
    showMark: truthProp,
    showTitle: truthProp,
    formatter: Function,
    rowHeight: numericProp,
    confirmText: String,
    rangePrompt: String,
    lazyRender: truthProp,
    showConfirm: truthProp,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: truthProp,
    closeOnPopstate: truthProp,
    showRangePrompt: truthProp,
    confirmDisabledText: String,
    closeOnClickOverlay: truthProp,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: truthProp,
    minDate: {
      type: Date,
      validator: isDate,
      default: getToday
    },
    maxDate: {
      type: Date,
      validator: isDate,
      default: () => {
        const now = getToday();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      }
    },
    firstDayOfWeek: {
      type: numericProp,
      default: 0,
      validator: (val) => val >= 0 && val <= 6
    }
  };
  var stdin_default$16 = vue.defineComponent({
    name: name$13,
    props: calendarProps,
    emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle"],
    setup(props, {
      emit,
      slots
    }) {
      const limitDateRange = (date, minDate = props.minDate, maxDate = props.maxDate) => {
        if (compareDay(date, minDate) === -1) {
          return minDate;
        }
        if (compareDay(date, maxDate) === 1) {
          return maxDate;
        }
        return date;
      };
      const getInitialDate = (defaultDate = props.defaultDate) => {
        const {
          type,
          minDate,
          maxDate,
          allowSameDay
        } = props;
        if (defaultDate === null) {
          return defaultDate;
        }
        const now = getToday();
        if (type === "range") {
          if (!Array.isArray(defaultDate)) {
            defaultDate = [];
          }
          const start2 = limitDateRange(defaultDate[0] || now, minDate, allowSameDay ? maxDate : getPrevDay(maxDate));
          const end2 = limitDateRange(defaultDate[1] || now, allowSameDay ? minDate : getNextDay(minDate));
          return [start2, end2];
        }
        if (type === "multiple") {
          if (Array.isArray(defaultDate)) {
            return defaultDate.map((date) => limitDateRange(date));
          }
          return [limitDateRange(now)];
        }
        if (!defaultDate || Array.isArray(defaultDate)) {
          defaultDate = now;
        }
        return limitDateRange(defaultDate);
      };
      let bodyHeight;
      const bodyRef = vue.ref();
      const subtitle = vue.ref({
        text: "",
        date: void 0
      });
      const currentDate = vue.ref(getInitialDate());
      const [monthRefs, setMonthRefs] = useRefs();
      const dayOffset = vue.computed(() => props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0);
      const months = vue.computed(() => {
        const months2 = [];
        const cursor = new Date(props.minDate);
        cursor.setDate(1);
        do {
          months2.push(new Date(cursor));
          cursor.setMonth(cursor.getMonth() + 1);
        } while (compareMonth(cursor, props.maxDate) !== 1);
        return months2;
      });
      const buttonDisabled = vue.computed(() => {
        if (currentDate.value) {
          if (props.type === "range") {
            return !currentDate.value[0] || !currentDate.value[1];
          }
          if (props.type === "multiple") {
            return !currentDate.value.length;
          }
        }
        return !currentDate.value;
      });
      const getSelectedDate = () => currentDate.value;
      const onScroll = () => {
        const top2 = getScrollTop(bodyRef.value);
        const bottom2 = top2 + bodyHeight;
        const heights = months.value.map((item, index) => monthRefs.value[index].getHeight());
        const heightSum = heights.reduce((a, b) => a + b, 0);
        if (bottom2 > heightSum && top2 > 0) {
          return;
        }
        let height2 = 0;
        let currentMonth;
        const visibleRange = [-1, -1];
        for (let i = 0; i < months.value.length; i++) {
          const month = monthRefs.value[i];
          const visible = height2 <= bottom2 && height2 + heights[i] >= top2;
          if (visible) {
            visibleRange[1] = i;
            if (!currentMonth) {
              currentMonth = month;
              visibleRange[0] = i;
            }
            if (!monthRefs.value[i].showed) {
              monthRefs.value[i].showed = true;
              emit("monthShow", {
                date: month.date,
                title: month.getTitle()
              });
            }
          }
          height2 += heights[i];
        }
        months.value.forEach((month, index) => {
          const visible = index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
          monthRefs.value[index].setVisible(visible);
        });
        if (currentMonth) {
          subtitle.value = {
            text: currentMonth.getTitle(),
            date: currentMonth.date
          };
        }
      };
      const scrollToDate = (targetDate) => {
        raf(() => {
          months.value.some((month, index) => {
            if (compareMonth(month, targetDate) === 0) {
              if (bodyRef.value) {
                monthRefs.value[index].scrollToDate(bodyRef.value, targetDate);
              }
              return true;
            }
            return false;
          });
          onScroll();
        });
      };
      const scrollToCurrentDate = () => {
        if (props.poppable && !props.show) {
          return;
        }
        if (currentDate.value) {
          const targetDate = props.type === "single" ? currentDate.value : currentDate.value[0];
          if (isDate(targetDate)) {
            scrollToDate(targetDate);
          }
        } else {
          raf(onScroll);
        }
      };
      const init = () => {
        if (props.poppable && !props.show) {
          return;
        }
        raf(() => {
          bodyHeight = Math.floor(useRect(bodyRef).height);
        });
        scrollToCurrentDate();
      };
      const reset = (date = getInitialDate()) => {
        currentDate.value = date;
        scrollToCurrentDate();
      };
      const checkRange = (date) => {
        const {
          maxRange,
          rangePrompt,
          showRangePrompt
        } = props;
        if (maxRange && calcDateNum(date) > +maxRange) {
          if (showRangePrompt) {
            showToast(rangePrompt || t$f("rangePrompt", maxRange));
          }
          emit("overRange");
          return false;
        }
        return true;
      };
      const onConfirm = () => {
        var _a;
        return emit("confirm", (_a = currentDate.value) != null ? _a : cloneDates(currentDate.value));
      };
      const select = (date, complete) => {
        const setCurrentDate = (date2) => {
          currentDate.value = date2;
          emit("select", cloneDates(date2));
        };
        if (complete && props.type === "range") {
          const valid = checkRange(date);
          if (!valid) {
            setCurrentDate([date[0], getDayByOffset(date[0], +props.maxRange - 1)]);
            return;
          }
        }
        setCurrentDate(date);
        if (complete && !props.showConfirm) {
          onConfirm();
        }
      };
      const getDisabledDate = (disabledDays2, startDay, date) => {
        var _a;
        return (_a = disabledDays2.find((day) => compareDay(startDay, day.date) === -1 && compareDay(day.date, date) === -1)) == null ? void 0 : _a.date;
      };
      const disabledDays = vue.computed(() => monthRefs.value.reduce((arr, ref2) => {
        var _a, _b;
        arr.push(...(_b = (_a = ref2.disabledDays) == null ? void 0 : _a.value) != null ? _b : []);
        return arr;
      }, []));
      const onClickDay = (item) => {
        if (props.readonly || !item.date) {
          return;
        }
        const {
          date
        } = item;
        const {
          type
        } = props;
        if (type === "range") {
          if (!currentDate.value) {
            select([date]);
            return;
          }
          const [startDay, endDay] = currentDate.value;
          if (startDay && !endDay) {
            const compareToStart = compareDay(date, startDay);
            if (compareToStart === 1) {
              const disabledDay = getDisabledDate(disabledDays.value, startDay, date);
              if (disabledDay) {
                const endDay2 = getPrevDay(disabledDay);
                if (compareDay(startDay, endDay2) === -1) {
                  select([startDay, endDay2]);
                } else {
                  select([date]);
                }
              } else {
                select([startDay, date], true);
              }
            } else if (compareToStart === -1) {
              select([date]);
            } else if (props.allowSameDay) {
              select([date, date], true);
            }
          } else {
            select([date]);
          }
        } else if (type === "multiple") {
          if (!currentDate.value) {
            select([date]);
            return;
          }
          const dates = currentDate.value;
          const selectedIndex = dates.findIndex((dateItem) => compareDay(dateItem, date) === 0);
          if (selectedIndex !== -1) {
            const [unselectedDate] = dates.splice(selectedIndex, 1);
            emit("unselect", cloneDate(unselectedDate));
          } else if (props.maxRange && dates.length >= +props.maxRange) {
            showToast(props.rangePrompt || t$f("rangePrompt", props.maxRange));
          } else {
            select([...dates, date]);
          }
        } else {
          select(date, true);
        }
      };
      const updateShow = (value) => emit("update:show", value);
      const renderMonth = (date, index) => {
        const showMonthTitle = index !== 0 || !props.showSubtitle;
        return vue.createVNode(stdin_default$18, vue.mergeProps({
          "ref": setMonthRefs(index),
          "date": date,
          "currentDate": currentDate.value,
          "showMonthTitle": showMonthTitle,
          "firstDayOfWeek": dayOffset.value
        }, pick(props, ["type", "color", "minDate", "maxDate", "showMark", "formatter", "rowHeight", "lazyRender", "showSubtitle", "allowSameDay"]), {
          "onClick": onClickDay
        }), pick(slots, ["top-info", "bottom-info", "month-title"]));
      };
      const renderFooterButton = () => {
        if (slots.footer) {
          return slots.footer();
        }
        if (props.showConfirm) {
          const slot = slots["confirm-text"];
          const disabled = buttonDisabled.value;
          const text = disabled ? props.confirmDisabledText : props.confirmText;
          return vue.createVNode(Button, {
            "round": true,
            "block": true,
            "type": "primary",
            "color": props.color,
            "class": bem$$("confirm"),
            "disabled": disabled,
            "nativeType": "button",
            "onClick": onConfirm
          }, {
            default: () => [slot ? slot({
              disabled
            }) : text || t$f("confirm")]
          });
        }
      };
      const renderFooter = () => vue.createVNode("div", {
        "class": [bem$$("footer"), {
          "van-safe-area-bottom": props.safeAreaInsetBottom
        }]
      }, [renderFooterButton()]);
      const renderCalendar = () => vue.createVNode("div", {
        "class": bem$$()
      }, [vue.createVNode(stdin_default$17, {
        "date": subtitle.value.date,
        "title": props.title,
        "subtitle": subtitle.value.text,
        "showTitle": props.showTitle,
        "showSubtitle": props.showSubtitle,
        "firstDayOfWeek": dayOffset.value,
        "onClickSubtitle": (event) => emit("clickSubtitle", event)
      }, pick(slots, ["title", "subtitle"])), vue.createVNode("div", {
        "ref": bodyRef,
        "class": bem$$("body"),
        "onScroll": onScroll
      }, [months.value.map(renderMonth)]), renderFooter()]);
      vue.watch(() => props.show, init);
      vue.watch(() => [props.type, props.minDate, props.maxDate], () => reset(getInitialDate(currentDate.value)));
      vue.watch(() => props.defaultDate, (value = null) => {
        currentDate.value = value;
        scrollToCurrentDate();
      });
      useExpose({
        reset,
        scrollToDate,
        getSelectedDate
      });
      onMountedOrActivated(init);
      return () => {
        if (props.poppable) {
          return vue.createVNode(Popup, {
            "show": props.show,
            "class": bem$$("popup"),
            "round": props.round,
            "position": props.position,
            "closeable": props.showTitle || props.showSubtitle,
            "teleport": props.teleport,
            "closeOnPopstate": props.closeOnPopstate,
            "safeAreaInsetTop": props.safeAreaInsetTop,
            "closeOnClickOverlay": props.closeOnClickOverlay,
            "onUpdate:show": updateShow
          }, {
            default: renderCalendar
          });
        }
        return renderCalendar();
      };
    }
  });
  const Calendar = withInstall(stdin_default$16);
  const [name$$, bem$_] = createNamespace("image");
  const imageProps = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: numericProp,
    height: numericProp,
    radius: numericProp,
    lazyLoad: Boolean,
    iconSize: numericProp,
    showError: truthProp,
    errorIcon: makeStringProp("photo-fail"),
    iconPrefix: String,
    showLoading: truthProp,
    loadingIcon: makeStringProp("photo")
  };
  var stdin_default$15 = vue.defineComponent({
    name: name$$,
    props: imageProps,
    emits: ["load", "error"],
    setup(props, {
      emit,
      slots
    }) {
      const error = vue.ref(false);
      const loading = vue.ref(true);
      const imageRef = vue.ref();
      const {
        $Lazyload
      } = vue.getCurrentInstance().proxy;
      const style = vue.computed(() => {
        const style2 = {
          width: addUnit(props.width),
          height: addUnit(props.height)
        };
        if (isDef(props.radius)) {
          style2.overflow = "hidden";
          style2.borderRadius = addUnit(props.radius);
        }
        return style2;
      });
      vue.watch(() => props.src, () => {
        error.value = false;
        loading.value = true;
      });
      const onLoad = (event) => {
        if (loading.value) {
          loading.value = false;
          emit("load", event);
        }
      };
      const triggerLoad = () => {
        const loadEvent = new Event("load");
        Object.defineProperty(loadEvent, "target", {
          value: imageRef.value,
          enumerable: true
        });
        onLoad(loadEvent);
      };
      const onError = (event) => {
        error.value = true;
        loading.value = false;
        emit("error", event);
      };
      const renderIcon = (name2, className, slot) => {
        if (slot) {
          return slot();
        }
        return vue.createVNode(Icon, {
          "name": name2,
          "size": props.iconSize,
          "class": className,
          "classPrefix": props.iconPrefix
        }, null);
      };
      const renderPlaceholder = () => {
        if (loading.value && props.showLoading) {
          return vue.createVNode("div", {
            "class": bem$_("loading")
          }, [renderIcon(props.loadingIcon, bem$_("loading-icon"), slots.loading)]);
        }
        if (error.value && props.showError) {
          return vue.createVNode("div", {
            "class": bem$_("error")
          }, [renderIcon(props.errorIcon, bem$_("error-icon"), slots.error)]);
        }
      };
      const renderImage = () => {
        if (error.value || !props.src) {
          return;
        }
        const attrs = {
          alt: props.alt,
          class: bem$_("img"),
          style: {
            objectFit: props.fit,
            objectPosition: props.position
          }
        };
        if (props.lazyLoad) {
          return vue.withDirectives(vue.createVNode("img", vue.mergeProps({
            "ref": imageRef
          }, attrs), null), [[vue.resolveDirective("lazy"), props.src]]);
        }
        return vue.createVNode("img", vue.mergeProps({
          "ref": imageRef,
          "src": props.src,
          "onLoad": onLoad,
          "onError": onError
        }, attrs), null);
      };
      const onLazyLoaded = ({
        el
      }) => {
        const check = () => {
          if (el === imageRef.value && loading.value) {
            triggerLoad();
          }
        };
        if (imageRef.value) {
          check();
        } else {
          vue.nextTick(check);
        }
      };
      const onLazyLoadError = ({
        el
      }) => {
        if (el === imageRef.value && !error.value) {
          onError();
        }
      };
      if ($Lazyload && inBrowser$1) {
        $Lazyload.$on("loaded", onLazyLoaded);
        $Lazyload.$on("error", onLazyLoadError);
        vue.onBeforeUnmount(() => {
          $Lazyload.$off("loaded", onLazyLoaded);
          $Lazyload.$off("error", onLazyLoadError);
        });
      }
      vue.onMounted(() => {
        vue.nextTick(() => {
          var _a;
          if ((_a = imageRef.value) == null ? void 0 : _a.complete) {
            triggerLoad();
          }
        });
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": bem$_({
            round: props.round,
            block: props.block
          }),
          "style": style.value
        }, [renderImage(), renderPlaceholder(), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Image$1 = withInstall(stdin_default$15);
  const [name$_, bem$Z] = createNamespace("card");
  const cardProps = {
    tag: String,
    num: numericProp,
    desc: String,
    thumb: String,
    title: String,
    price: numericProp,
    centered: Boolean,
    lazyLoad: Boolean,
    currency: makeStringProp("¥"),
    thumbLink: String,
    originPrice: numericProp
  };
  var stdin_default$14 = vue.defineComponent({
    name: name$_,
    props: cardProps,
    emits: ["clickThumb"],
    setup(props, {
      slots,
      emit
    }) {
      const renderTitle = () => {
        if (slots.title) {
          return slots.title();
        }
        if (props.title) {
          return vue.createVNode("div", {
            "class": [bem$Z("title"), "van-multi-ellipsis--l2"]
          }, [props.title]);
        }
      };
      const renderThumbTag = () => {
        if (slots.tag || props.tag) {
          return vue.createVNode("div", {
            "class": bem$Z("tag")
          }, [slots.tag ? slots.tag() : vue.createVNode(Tag, {
            "mark": true,
            "type": "primary"
          }, {
            default: () => [props.tag]
          })]);
        }
      };
      const renderThumbImage = () => {
        if (slots.thumb) {
          return slots.thumb();
        }
        return vue.createVNode(Image$1, {
          "src": props.thumb,
          "fit": "cover",
          "width": "100%",
          "height": "100%",
          "lazyLoad": props.lazyLoad
        }, null);
      };
      const renderThumb = () => {
        if (slots.thumb || props.thumb) {
          return vue.createVNode("a", {
            "href": props.thumbLink,
            "class": bem$Z("thumb"),
            "onClick": (event) => emit("clickThumb", event)
          }, [renderThumbImage(), renderThumbTag()]);
        }
      };
      const renderDesc = () => {
        if (slots.desc) {
          return slots.desc();
        }
        if (props.desc) {
          return vue.createVNode("div", {
            "class": [bem$Z("desc"), "van-ellipsis"]
          }, [props.desc]);
        }
      };
      const renderPriceText = () => {
        const priceArr = props.price.toString().split(".");
        return vue.createVNode("div", null, [vue.createVNode("span", {
          "class": bem$Z("price-currency")
        }, [props.currency]), vue.createVNode("span", {
          "class": bem$Z("price-integer")
        }, [priceArr[0]]), vue.createTextVNode("."), vue.createVNode("span", {
          "class": bem$Z("price-decimal")
        }, [priceArr[1]])]);
      };
      return () => {
        var _a, _b, _c;
        const showNum = slots.num || isDef(props.num);
        const showPrice = slots.price || isDef(props.price);
        const showOriginPrice = slots["origin-price"] || isDef(props.originPrice);
        const showBottom = showNum || showPrice || showOriginPrice || slots.bottom;
        const Price = showPrice && vue.createVNode("div", {
          "class": bem$Z("price")
        }, [slots.price ? slots.price() : renderPriceText()]);
        const OriginPrice = showOriginPrice && vue.createVNode("div", {
          "class": bem$Z("origin-price")
        }, [slots["origin-price"] ? slots["origin-price"]() : `${props.currency} ${props.originPrice}`]);
        const Num = showNum && vue.createVNode("div", {
          "class": bem$Z("num")
        }, [slots.num ? slots.num() : `x${props.num}`]);
        const Footer = slots.footer && vue.createVNode("div", {
          "class": bem$Z("footer")
        }, [slots.footer()]);
        const Bottom = showBottom && vue.createVNode("div", {
          "class": bem$Z("bottom")
        }, [(_a = slots["price-top"]) == null ? void 0 : _a.call(slots), Price, OriginPrice, Num, (_b = slots.bottom) == null ? void 0 : _b.call(slots)]);
        return vue.createVNode("div", {
          "class": bem$Z()
        }, [vue.createVNode("div", {
          "class": bem$Z("header")
        }, [renderThumb(), vue.createVNode("div", {
          "class": bem$Z("content", {
            centered: props.centered
          })
        }, [vue.createVNode("div", null, [renderTitle(), renderDesc(), (_c = slots.tags) == null ? void 0 : _c.call(slots)]), Bottom])]), Footer]);
      };
    }
  });
  const Card = withInstall(stdin_default$14);
  const [name$Z, bem$Y, t$e] = createNamespace("cascader");
  const cascaderProps = {
    title: String,
    options: makeArrayProp(),
    closeable: truthProp,
    swipeable: truthProp,
    closeIcon: makeStringProp("cross"),
    showHeader: truthProp,
    modelValue: numericProp,
    fieldNames: Object,
    placeholder: String,
    activeColor: String
  };
  var stdin_default$13 = vue.defineComponent({
    name: name$Z,
    props: cascaderProps,
    emits: ["close", "change", "finish", "clickTab", "update:modelValue"],
    setup(props, {
      slots,
      emit
    }) {
      const tabs = vue.ref([]);
      const activeTab = vue.ref(0);
      const {
        text: textKey,
        value: valueKey,
        children: childrenKey
      } = extend({
        text: "text",
        value: "value",
        children: "children"
      }, props.fieldNames);
      const getSelectedOptionsByValue = (options, value) => {
        for (const option of options) {
          if (option[valueKey] === value) {
            return [option];
          }
          if (option[childrenKey]) {
            const selectedOptions = getSelectedOptionsByValue(option[childrenKey], value);
            if (selectedOptions) {
              return [option, ...selectedOptions];
            }
          }
        }
      };
      const updateTabs = () => {
        const {
          options,
          modelValue
        } = props;
        if (modelValue !== void 0) {
          const selectedOptions = getSelectedOptionsByValue(options, modelValue);
          if (selectedOptions) {
            let optionsCursor = options;
            tabs.value = selectedOptions.map((option) => {
              const tab = {
                options: optionsCursor,
                selected: option
              };
              const next = optionsCursor.find((item) => item[valueKey] === option[valueKey]);
              if (next) {
                optionsCursor = next[childrenKey];
              }
              return tab;
            });
            if (optionsCursor) {
              tabs.value.push({
                options: optionsCursor,
                selected: null
              });
            }
            vue.nextTick(() => {
              activeTab.value = tabs.value.length - 1;
            });
            return;
          }
        }
        tabs.value = [{
          options,
          selected: null
        }];
      };
      const onSelect = (option, tabIndex) => {
        if (option.disabled) {
          return;
        }
        tabs.value[tabIndex].selected = option;
        if (tabs.value.length > tabIndex + 1) {
          tabs.value = tabs.value.slice(0, tabIndex + 1);
        }
        if (option[childrenKey]) {
          const nextTab = {
            options: option[childrenKey],
            selected: null
          };
          if (tabs.value[tabIndex + 1]) {
            tabs.value[tabIndex + 1] = nextTab;
          } else {
            tabs.value.push(nextTab);
          }
          vue.nextTick(() => {
            activeTab.value++;
          });
        }
        const selectedOptions = tabs.value.map((tab) => tab.selected).filter(Boolean);
        emit("update:modelValue", option[valueKey]);
        const params = {
          value: option[valueKey],
          tabIndex,
          selectedOptions
        };
        emit("change", params);
        if (!option[childrenKey]) {
          emit("finish", params);
        }
      };
      const onClose = () => emit("close");
      const onClickTab = ({
        name: name2,
        title
      }) => emit("clickTab", name2, title);
      const renderHeader = () => props.showHeader ? vue.createVNode("div", {
        "class": bem$Y("header")
      }, [vue.createVNode("h2", {
        "class": bem$Y("title")
      }, [slots.title ? slots.title() : props.title]), props.closeable ? vue.createVNode(Icon, {
        "name": props.closeIcon,
        "class": [bem$Y("close-icon"), HAPTICS_FEEDBACK],
        "onClick": onClose
      }, null) : null]) : null;
      const renderOption = (option, selectedOption, tabIndex) => {
        const {
          disabled
        } = option;
        const selected = !!(selectedOption && option[valueKey] === selectedOption[valueKey]);
        const color = option.color || (selected ? props.activeColor : void 0);
        const Text = slots.option ? slots.option({
          option,
          selected
        }) : vue.createVNode("span", null, [option[textKey]]);
        return vue.createVNode("li", {
          "role": "menuitemradio",
          "class": [bem$Y("option", {
            selected,
            disabled
          }), option.className],
          "style": {
            color
          },
          "tabindex": disabled ? void 0 : selected ? 0 : -1,
          "aria-checked": selected,
          "aria-disabled": disabled || void 0,
          "onClick": () => onSelect(option, tabIndex)
        }, [Text, selected ? vue.createVNode(Icon, {
          "name": "success",
          "class": bem$Y("selected-icon")
        }, null) : null]);
      };
      const renderOptions = (options, selectedOption, tabIndex) => vue.createVNode("ul", {
        "role": "menu",
        "class": bem$Y("options")
      }, [options.map((option) => renderOption(option, selectedOption, tabIndex))]);
      const renderTab = (tab, tabIndex) => {
        const {
          options,
          selected
        } = tab;
        const placeholder = props.placeholder || t$e("select");
        const title = selected ? selected[textKey] : placeholder;
        return vue.createVNode(Tab, {
          "title": title,
          "titleClass": bem$Y("tab", {
            unselected: !selected
          })
        }, {
          default: () => {
            var _a, _b;
            return [(_a = slots["options-top"]) == null ? void 0 : _a.call(slots, {
              tabIndex
            }), renderOptions(options, selected, tabIndex), (_b = slots["options-bottom"]) == null ? void 0 : _b.call(slots, {
              tabIndex
            })];
          }
        });
      };
      const renderTabs = () => vue.createVNode(Tabs, {
        "active": activeTab.value,
        "onUpdate:active": ($event) => activeTab.value = $event,
        "shrink": true,
        "animated": true,
        "class": bem$Y("tabs"),
        "color": props.activeColor,
        "swipeable": props.swipeable,
        "onClickTab": onClickTab
      }, {
        default: () => [tabs.value.map(renderTab)]
      });
      updateTabs();
      vue.watch(() => props.options, updateTabs, {
        deep: true
      });
      vue.watch(() => props.modelValue, (value) => {
        if (value !== void 0) {
          const values = tabs.value.map((tab) => {
            var _a;
            return (_a = tab.selected) == null ? void 0 : _a[valueKey];
          });
          if (values.includes(value)) {
            return;
          }
        }
        updateTabs();
      });
      return () => vue.createVNode("div", {
        "class": bem$Y()
      }, [renderHeader(), renderTabs()]);
    }
  });
  const Cascader = withInstall(stdin_default$13);
  const [name$Y, bem$X] = createNamespace("cell-group");
  const cellGroupProps = {
    title: String,
    inset: Boolean,
    border: truthProp
  };
  var stdin_default$12 = vue.defineComponent({
    name: name$Y,
    inheritAttrs: false,
    props: cellGroupProps,
    setup(props, {
      slots,
      attrs
    }) {
      const renderGroup = () => {
        var _a;
        return vue.createVNode("div", vue.mergeProps({
          "class": [bem$X({
            inset: props.inset
          }), {
            [BORDER_TOP_BOTTOM]: props.border && !props.inset
          }]
        }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
      const renderTitle = () => vue.createVNode("div", {
        "class": bem$X("title", {
          inset: props.inset
        })
      }, [slots.title ? slots.title() : props.title]);
      return () => {
        if (props.title || slots.title) {
          return vue.createVNode(vue.Fragment, null, [renderTitle(), renderGroup()]);
        }
        return renderGroup();
      };
    }
  });
  const CellGroup = withInstall(stdin_default$12);
  const [name$X, bem$W] = createNamespace("checkbox-group");
  const checkboxGroupProps = {
    max: numericProp,
    disabled: Boolean,
    iconSize: numericProp,
    direction: String,
    modelValue: makeArrayProp(),
    checkedColor: String
  };
  const CHECKBOX_GROUP_KEY = Symbol(name$X);
  var stdin_default$11 = vue.defineComponent({
    name: name$X,
    props: checkboxGroupProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        children,
        linkChildren
      } = useChildren(CHECKBOX_GROUP_KEY);
      const updateValue = (value) => emit("update:modelValue", value);
      const toggleAll = (options = {}) => {
        if (typeof options === "boolean") {
          options = {
            checked: options
          };
        }
        const {
          checked,
          skipDisabled
        } = options;
        const checkedChildren = children.filter((item) => {
          if (!item.props.bindGroup) {
            return false;
          }
          if (item.props.disabled && skipDisabled) {
            return item.checked.value;
          }
          return checked != null ? checked : !item.checked.value;
        });
        const names = checkedChildren.map((item) => item.name);
        updateValue(names);
      };
      vue.watch(() => props.modelValue, (value) => emit("change", value));
      useExpose({
        toggleAll
      });
      useCustomFieldValue(() => props.modelValue);
      linkChildren({
        props,
        updateValue
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": bem$W([props.direction])
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const [name$W, bem$V] = createNamespace("checkbox");
  const checkboxProps = extend({}, checkerProps, {
    bindGroup: truthProp
  });
  var stdin_default$10 = vue.defineComponent({
    name: name$W,
    props: checkboxProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        parent
      } = useParent(CHECKBOX_GROUP_KEY);
      const setParentValue = (checked2) => {
        const {
          name: name2
        } = props;
        const {
          max,
          modelValue
        } = parent.props;
        const value = modelValue.slice();
        if (checked2) {
          const overlimit = max && value.length >= +max;
          if (!overlimit && !value.includes(name2)) {
            value.push(name2);
            if (props.bindGroup) {
              parent.updateValue(value);
            }
          }
        } else {
          const index = value.indexOf(name2);
          if (index !== -1) {
            value.splice(index, 1);
            if (props.bindGroup) {
              parent.updateValue(value);
            }
          }
        }
      };
      const checked = vue.computed(() => {
        if (parent && props.bindGroup) {
          return parent.props.modelValue.indexOf(props.name) !== -1;
        }
        return !!props.modelValue;
      });
      const toggle = (newValue = !checked.value) => {
        if (parent && props.bindGroup) {
          setParentValue(newValue);
        } else {
          emit("update:modelValue", newValue);
        }
      };
      vue.watch(() => props.modelValue, (value) => emit("change", value));
      useExpose({
        toggle,
        props,
        checked
      });
      useCustomFieldValue(() => props.modelValue);
      return () => vue.createVNode(stdin_default$1e, vue.mergeProps({
        "bem": bem$V,
        "role": "checkbox",
        "parent": parent,
        "checked": checked.value,
        "onToggle": toggle
      }, props), pick(slots, ["default", "icon"]));
    }
  });
  const Checkbox = withInstall(stdin_default$10);
  const CheckboxGroup = withInstall(stdin_default$11);
  const [name$V, bem$U] = createNamespace("circle");
  let uid = 0;
  const format$1 = (rate) => Math.min(Math.max(+rate, 0), 100);
  function getPath(clockwise, viewBoxSize) {
    const sweepFlag = clockwise ? 1 : 0;
    return `M ${viewBoxSize / 2} ${viewBoxSize / 2} m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
  }
  const circleProps = {
    text: String,
    size: numericProp,
    fill: makeStringProp("none"),
    rate: makeNumericProp(100),
    speed: makeNumericProp(0),
    color: [String, Object],
    clockwise: truthProp,
    layerColor: String,
    currentRate: makeNumberProp(0),
    strokeWidth: makeNumericProp(40),
    strokeLinecap: String,
    startPosition: makeStringProp("top")
  };
  var stdin_default$$ = vue.defineComponent({
    name: name$V,
    props: circleProps,
    emits: ["update:currentRate"],
    setup(props, {
      emit,
      slots
    }) {
      const id = `van-circle-${uid++}`;
      const viewBoxSize = vue.computed(() => +props.strokeWidth + 1e3);
      const path = vue.computed(() => getPath(props.clockwise, viewBoxSize.value));
      const svgStyle = vue.computed(() => {
        const ROTATE_ANGLE_MAP = {
          top: 0,
          right: 90,
          bottom: 180,
          left: 270
        };
        const angleValue = ROTATE_ANGLE_MAP[props.startPosition];
        if (angleValue) {
          return {
            transform: `rotate(${angleValue}deg)`
          };
        }
      });
      vue.watch(() => props.rate, (rate) => {
        let rafId;
        const startTime = Date.now();
        const startRate = props.currentRate;
        const endRate = format$1(rate);
        const duration = Math.abs((startRate - endRate) * 1e3 / +props.speed);
        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const rate2 = progress * (endRate - startRate) + startRate;
          emit("update:currentRate", format$1(parseFloat(rate2.toFixed(1))));
          if (endRate > startRate ? rate2 < endRate : rate2 > endRate) {
            rafId = raf(animate);
          }
        };
        if (props.speed) {
          if (rafId) {
            cancelRaf(rafId);
          }
          rafId = raf(animate);
        } else {
          emit("update:currentRate", endRate);
        }
      }, {
        immediate: true
      });
      const renderHover = () => {
        const PERIMETER = 3140;
        const {
          strokeWidth,
          currentRate,
          strokeLinecap
        } = props;
        const offset2 = PERIMETER * currentRate / 100;
        const color = isObject(props.color) ? `url(#${id})` : props.color;
        const style = {
          stroke: color,
          strokeWidth: `${+strokeWidth + 1}px`,
          strokeLinecap,
          strokeDasharray: `${offset2}px ${PERIMETER}px`
        };
        return vue.createVNode("path", {
          "d": path.value,
          "style": style,
          "class": bem$U("hover"),
          "stroke": color
        }, null);
      };
      const renderLayer = () => {
        const style = {
          fill: props.fill,
          stroke: props.layerColor,
          strokeWidth: `${props.strokeWidth}px`
        };
        return vue.createVNode("path", {
          "class": bem$U("layer"),
          "style": style,
          "d": path.value
        }, null);
      };
      const renderGradient = () => {
        const {
          color
        } = props;
        if (!isObject(color)) {
          return;
        }
        const Stops = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b)).map((key, index) => vue.createVNode("stop", {
          "key": index,
          "offset": key,
          "stop-color": color[key]
        }, null));
        return vue.createVNode("defs", null, [vue.createVNode("linearGradient", {
          "id": id,
          "x1": "100%",
          "y1": "0%",
          "x2": "0%",
          "y2": "0%"
        }, [Stops])]);
      };
      const renderText = () => {
        if (slots.default) {
          return slots.default();
        }
        if (props.text) {
          return vue.createVNode("div", {
            "class": bem$U("text")
          }, [props.text]);
        }
      };
      return () => vue.createVNode("div", {
        "class": bem$U(),
        "style": getSizeStyle(props.size)
      }, [vue.createVNode("svg", {
        "viewBox": `0 0 ${viewBoxSize.value} ${viewBoxSize.value}`,
        "style": svgStyle.value
      }, [renderGradient(), renderLayer(), renderHover()]), renderText()]);
    }
  });
  const Circle = withInstall(stdin_default$$);
  const [name$U, bem$T] = createNamespace("row");
  const ROW_KEY = Symbol(name$U);
  const rowProps = {
    tag: makeStringProp("div"),
    wrap: truthProp,
    align: String,
    gutter: makeNumericProp(0),
    justify: String
  };
  var stdin_default$_ = vue.defineComponent({
    name: name$U,
    props: rowProps,
    setup(props, {
      slots
    }) {
      const {
        children,
        linkChildren
      } = useChildren(ROW_KEY);
      const groups = vue.computed(() => {
        const groups2 = [[]];
        let totalSpan = 0;
        children.forEach((child, index) => {
          totalSpan += Number(child.span);
          if (totalSpan > 24) {
            groups2.push([index]);
            totalSpan -= 24;
          } else {
            groups2[groups2.length - 1].push(index);
          }
        });
        return groups2;
      });
      const spaces = vue.computed(() => {
        const gutter = Number(props.gutter);
        const spaces2 = [];
        if (!gutter) {
          return spaces2;
        }
        groups.value.forEach((group) => {
          const averagePadding = gutter * (group.length - 1) / group.length;
          group.forEach((item, index) => {
            if (index === 0) {
              spaces2.push({
                right: averagePadding
              });
            } else {
              const left2 = gutter - spaces2[item - 1].right;
              const right2 = averagePadding - left2;
              spaces2.push({
                left: left2,
                right: right2
              });
            }
          });
        });
        return spaces2;
      });
      linkChildren({
        spaces
      });
      return () => {
        const {
          tag,
          wrap,
          align,
          justify
        } = props;
        return vue.createVNode(tag, {
          "class": bem$T({
            [`align-${align}`]: align,
            [`justify-${justify}`]: justify,
            nowrap: !wrap
          })
        }, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        });
      };
    }
  });
  const [name$T, bem$S] = createNamespace("col");
  const colProps = {
    tag: makeStringProp("div"),
    span: makeNumericProp(0),
    offset: numericProp
  };
  var stdin_default$Z = vue.defineComponent({
    name: name$T,
    props: colProps,
    setup(props, {
      slots
    }) {
      const {
        parent,
        index
      } = useParent(ROW_KEY);
      const style = vue.computed(() => {
        if (!parent) {
          return;
        }
        const {
          spaces
        } = parent;
        if (spaces && spaces.value && spaces.value[index.value]) {
          const {
            left: left2,
            right: right2
          } = spaces.value[index.value];
          return {
            paddingLeft: left2 ? `${left2}px` : null,
            paddingRight: right2 ? `${right2}px` : null
          };
        }
      });
      return () => {
        const {
          tag,
          span,
          offset: offset2
        } = props;
        return vue.createVNode(tag, {
          "style": style.value,
          "class": bem$S({
            [span]: span,
            [`offset-${offset2}`]: offset2
          })
        }, {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        });
      };
    }
  });
  const Col = withInstall(stdin_default$Z);
  const [name$S, bem$R] = createNamespace("collapse");
  const COLLAPSE_KEY = Symbol(name$S);
  const collapseProps = {
    border: truthProp,
    accordion: Boolean,
    modelValue: {
      type: [String, Number, Array],
      default: ""
    }
  };
  function validateModelValue(modelValue, accordion) {
    if (accordion && Array.isArray(modelValue)) {
      formatAppLog("error", "at node_modules/vant/es/collapse/Collapse.mjs:18", '[Vant] Collapse: "v-model" should not be Array in accordion mode');
      return false;
    }
    if (!accordion && !Array.isArray(modelValue)) {
      formatAppLog("error", "at node_modules/vant/es/collapse/Collapse.mjs:22", '[Vant] Collapse: "v-model" should be Array in non-accordion mode');
      return false;
    }
    return true;
  }
  var stdin_default$Y = vue.defineComponent({
    name: name$S,
    props: collapseProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        linkChildren,
        children
      } = useChildren(COLLAPSE_KEY);
      const updateName = (name2) => {
        emit("change", name2);
        emit("update:modelValue", name2);
      };
      const toggle = (name2, expanded) => {
        const {
          accordion,
          modelValue
        } = props;
        if (accordion) {
          updateName(name2 === modelValue ? "" : name2);
        } else if (expanded) {
          updateName(modelValue.concat(name2));
        } else {
          updateName(modelValue.filter((activeName) => activeName !== name2));
        }
      };
      const toggleAll = (options = {}) => {
        if (props.accordion) {
          return;
        }
        if (typeof options === "boolean") {
          options = {
            expanded: options
          };
        }
        const {
          expanded,
          skipDisabled
        } = options;
        const expandedChildren = children.filter((item) => {
          if (item.disabled && skipDisabled) {
            return item.expanded.value;
          }
          return expanded != null ? expanded : !item.expanded.value;
        });
        const names = expandedChildren.map((item) => item.itemName.value);
        updateName(names);
      };
      const isExpanded = (name2) => {
        const {
          accordion,
          modelValue
        } = props;
        if (!validateModelValue(modelValue, accordion)) {
          return false;
        }
        return accordion ? modelValue === name2 : modelValue.includes(name2);
      };
      useExpose({
        toggleAll
      });
      linkChildren({
        toggle,
        isExpanded
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": [bem$R(), {
            [BORDER_TOP_BOTTOM]: props.border
          }]
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Collapse = withInstall(stdin_default$Y);
  const [name$R, bem$Q] = createNamespace("collapse-item");
  const CELL_SLOTS = ["icon", "title", "value", "label", "right-icon"];
  const collapseItemProps = extend({}, cellSharedProps, {
    name: numericProp,
    isLink: truthProp,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: truthProp
  });
  var stdin_default$X = vue.defineComponent({
    name: name$R,
    props: collapseItemProps,
    setup(props, {
      slots
    }) {
      const wrapperRef = vue.ref();
      const contentRef = vue.ref();
      const {
        parent,
        index
      } = useParent(COLLAPSE_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/collapse-item/CollapseItem.mjs:33", "[Vant] <CollapseItem> must be a child component of <Collapse>.");
        }
        return;
      }
      const name2 = vue.computed(() => {
        var _a;
        return (_a = props.name) != null ? _a : index.value;
      });
      const expanded = vue.computed(() => parent.isExpanded(name2.value));
      const show = vue.ref(expanded.value);
      const lazyRender = useLazyRender(() => show.value || !props.lazyRender);
      const onTransitionEnd = () => {
        if (!expanded.value) {
          show.value = false;
        } else if (wrapperRef.value) {
          wrapperRef.value.style.height = "";
        }
      };
      vue.watch(expanded, (value, oldValue) => {
        if (oldValue === null) {
          return;
        }
        if (value) {
          show.value = true;
        }
        const tick = value ? vue.nextTick : raf;
        tick(() => {
          if (!contentRef.value || !wrapperRef.value) {
            return;
          }
          const {
            offsetHeight
          } = contentRef.value;
          if (offsetHeight) {
            const contentHeight = `${offsetHeight}px`;
            wrapperRef.value.style.height = value ? "0" : contentHeight;
            doubleRaf(() => {
              if (wrapperRef.value) {
                wrapperRef.value.style.height = value ? contentHeight : "0";
              }
            });
          } else {
            onTransitionEnd();
          }
        });
      });
      const toggle = (newValue = !expanded.value) => {
        parent.toggle(name2.value, newValue);
      };
      const onClickTitle = () => {
        if (!props.disabled && !props.readonly) {
          toggle();
        }
      };
      const renderTitle = () => {
        const {
          border,
          disabled,
          readonly
        } = props;
        const attrs = pick(props, Object.keys(cellSharedProps));
        if (readonly) {
          attrs.isLink = false;
        }
        if (disabled || readonly) {
          attrs.clickable = false;
        }
        return vue.createVNode(Cell, vue.mergeProps({
          "role": "button",
          "class": bem$Q("title", {
            disabled,
            expanded: expanded.value,
            borderless: !border
          }),
          "aria-expanded": String(expanded.value),
          "onClick": onClickTitle
        }, attrs), pick(slots, CELL_SLOTS));
      };
      const renderContent = lazyRender(() => {
        var _a;
        return vue.withDirectives(vue.createVNode("div", {
          "ref": wrapperRef,
          "class": bem$Q("wrapper"),
          "onTransitionend": onTransitionEnd
        }, [vue.createVNode("div", {
          "ref": contentRef,
          "class": bem$Q("content")
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vue.vShow, show.value]]);
      });
      useExpose({
        toggle,
        expanded,
        itemName: name2
      });
      return () => vue.createVNode("div", {
        "class": [bem$Q({
          border: index.value && props.border
        })]
      }, [renderTitle(), renderContent()]);
    }
  });
  const CollapseItem = withInstall(stdin_default$X);
  const ConfigProvider = withInstall(stdin_default$1I);
  const [name$Q, bem$P, t$d] = createNamespace("contact-card");
  const contactCardProps = {
    tel: String,
    name: String,
    type: makeStringProp("add"),
    addText: String,
    editable: truthProp
  };
  var stdin_default$W = vue.defineComponent({
    name: name$Q,
    props: contactCardProps,
    emits: ["click"],
    setup(props, {
      emit
    }) {
      const onClick = (event) => {
        if (props.editable) {
          emit("click", event);
        }
      };
      const renderContent = () => {
        if (props.type === "add") {
          return props.addText || t$d("addContact");
        }
        return [vue.createVNode("div", null, [`${t$d("name")}：${props.name}`]), vue.createVNode("div", null, [`${t$d("tel")}：${props.tel}`])];
      };
      return () => vue.createVNode(Cell, {
        "center": true,
        "icon": props.type === "edit" ? "contact" : "add-square",
        "class": bem$P([props.type]),
        "border": false,
        "isLink": props.editable,
        "titleClass": bem$P("title"),
        "onClick": onClick
      }, {
        title: renderContent
      });
    }
  });
  const ContactCard = withInstall(stdin_default$W);
  const [name$P, bem$O, t$c] = createNamespace("contact-edit");
  const DEFAULT_CONTACT = {
    tel: "",
    name: ""
  };
  const contactEditProps = {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: () => extend({}, DEFAULT_CONTACT)
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  };
  var stdin_default$V = vue.defineComponent({
    name: name$P,
    props: contactEditProps,
    emits: ["save", "delete", "changeDefault"],
    setup(props, {
      emit
    }) {
      const contact = vue.reactive(extend({}, DEFAULT_CONTACT, props.contactInfo));
      const onSave = () => {
        if (!props.isSaving) {
          emit("save", contact);
        }
      };
      const onDelete = () => emit("delete", contact);
      const renderButtons = () => vue.createVNode("div", {
        "class": bem$O("buttons")
      }, [vue.createVNode(Button, {
        "block": true,
        "round": true,
        "type": "primary",
        "text": t$c("save"),
        "class": bem$O("button"),
        "loading": props.isSaving,
        "nativeType": "submit"
      }, null), props.isEdit && vue.createVNode(Button, {
        "block": true,
        "round": true,
        "text": t$c("delete"),
        "class": bem$O("button"),
        "loading": props.isDeleting,
        "onClick": onDelete
      }, null)]);
      const renderSwitch = () => vue.createVNode(Switch, {
        "modelValue": contact.isDefault,
        "onUpdate:modelValue": ($event) => contact.isDefault = $event,
        "onChange": (checked) => emit("changeDefault", checked)
      }, null);
      const renderSetDefault = () => {
        if (props.showSetDefault) {
          return vue.createVNode(Cell, {
            "title": props.setDefaultLabel,
            "class": bem$O("switch-cell"),
            "border": false
          }, {
            "right-icon": renderSwitch
          });
        }
      };
      vue.watch(() => props.contactInfo, (value) => extend(contact, DEFAULT_CONTACT, value));
      return () => vue.createVNode(Form, {
        "class": bem$O(),
        "onSubmit": onSave
      }, {
        default: () => [vue.createVNode("div", {
          "class": bem$O("fields")
        }, [vue.createVNode(Field, {
          "modelValue": contact.name,
          "onUpdate:modelValue": ($event) => contact.name = $event,
          "clearable": true,
          "label": t$c("name"),
          "rules": [{
            required: true,
            message: t$c("nameEmpty")
          }],
          "maxlength": "30",
          "placeholder": t$c("name")
        }, null), vue.createVNode(Field, {
          "modelValue": contact.tel,
          "onUpdate:modelValue": ($event) => contact.tel = $event,
          "clearable": true,
          "type": "tel",
          "label": t$c("tel"),
          "rules": [{
            validator: props.telValidator,
            message: t$c("telInvalid")
          }],
          "placeholder": t$c("tel")
        }, null)]), renderSetDefault(), renderButtons()]
      });
    }
  });
  const ContactEdit = withInstall(stdin_default$V);
  const [name$O, bem$N, t$b] = createNamespace("contact-list");
  const contactListProps = {
    list: Array,
    addText: String,
    modelValue: unknownProp,
    defaultTagText: String
  };
  var stdin_default$U = vue.defineComponent({
    name: name$O,
    props: contactListProps,
    emits: ["add", "edit", "select", "update:modelValue"],
    setup(props, {
      emit
    }) {
      const renderItem = (item, index) => {
        const onClick = () => {
          emit("update:modelValue", item.id);
          emit("select", item, index);
        };
        const renderRightIcon = () => vue.createVNode(Radio, {
          "class": bem$N("radio"),
          "name": item.id,
          "iconSize": 16
        }, null);
        const renderEditIcon = () => vue.createVNode(Icon, {
          "name": "edit",
          "class": bem$N("edit"),
          "onClick": (event) => {
            event.stopPropagation();
            emit("edit", item, index);
          }
        }, null);
        const renderContent = () => {
          const nodes = [`${item.name}，${item.tel}`];
          if (item.isDefault && props.defaultTagText) {
            nodes.push(vue.createVNode(Tag, {
              "type": "primary",
              "round": true,
              "class": bem$N("item-tag")
            }, {
              default: () => [props.defaultTagText]
            }));
          }
          return nodes;
        };
        return vue.createVNode(Cell, {
          "key": item.id,
          "isLink": true,
          "center": true,
          "class": bem$N("item"),
          "titleClass": bem$N("item-title"),
          "onClick": onClick
        }, {
          icon: renderEditIcon,
          title: renderContent,
          "right-icon": renderRightIcon
        });
      };
      return () => vue.createVNode("div", {
        "class": bem$N()
      }, [vue.createVNode(RadioGroup, {
        "modelValue": props.modelValue,
        "class": bem$N("group")
      }, {
        default: () => [props.list && props.list.map(renderItem)]
      }), vue.createVNode("div", {
        "class": [bem$N("bottom"), "van-safe-area-bottom"]
      }, [vue.createVNode(Button, {
        "round": true,
        "block": true,
        "type": "primary",
        "class": bem$N("add"),
        "text": props.addText || t$b("addContact"),
        "onClick": () => emit("add")
      }, null)])]);
    }
  });
  const ContactList = withInstall(stdin_default$U);
  function parseFormat(format2, currentTime) {
    const { days } = currentTime;
    let { hours, minutes, seconds, milliseconds } = currentTime;
    if (format2.includes("DD")) {
      format2 = format2.replace("DD", padZero(days));
    } else {
      hours += days * 24;
    }
    if (format2.includes("HH")) {
      format2 = format2.replace("HH", padZero(hours));
    } else {
      minutes += hours * 60;
    }
    if (format2.includes("mm")) {
      format2 = format2.replace("mm", padZero(minutes));
    } else {
      seconds += minutes * 60;
    }
    if (format2.includes("ss")) {
      format2 = format2.replace("ss", padZero(seconds));
    } else {
      milliseconds += seconds * 1e3;
    }
    if (format2.includes("S")) {
      const ms = padZero(milliseconds, 3);
      if (format2.includes("SSS")) {
        format2 = format2.replace("SSS", ms);
      } else if (format2.includes("SS")) {
        format2 = format2.replace("SS", ms.slice(0, 2));
      } else {
        format2 = format2.replace("S", ms.charAt(0));
      }
    }
    return format2;
  }
  const [name$N, bem$M] = createNamespace("count-down");
  const countDownProps = {
    time: makeNumericProp(0),
    format: makeStringProp("HH:mm:ss"),
    autoStart: truthProp,
    millisecond: Boolean
  };
  var stdin_default$T = vue.defineComponent({
    name: name$N,
    props: countDownProps,
    emits: ["change", "finish"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        start: start2,
        pause,
        reset,
        current: current2
      } = useCountDown({
        time: +props.time,
        millisecond: props.millisecond,
        onChange: (current22) => emit("change", current22),
        onFinish: () => emit("finish")
      });
      const timeText = vue.computed(() => parseFormat(props.format, current2.value));
      const resetTime = () => {
        reset(+props.time);
        if (props.autoStart) {
          start2();
        }
      };
      vue.watch(() => props.time, resetTime, {
        immediate: true
      });
      useExpose({
        start: start2,
        pause,
        reset: resetTime
      });
      return () => vue.createVNode("div", {
        "role": "timer",
        "class": bem$M()
      }, [slots.default ? slots.default(current2.value) : timeText.value]);
    }
  });
  const CountDown = withInstall(stdin_default$T);
  function getDate(timeStamp) {
    const date = new Date(timeStamp * 1e3);
    return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(
      date.getDate()
    )}`;
  }
  const formatDiscount = (discount) => (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
  const formatAmount = (amount) => (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
  const [name$M, bem$L, t$a] = createNamespace("coupon");
  var stdin_default$S = vue.defineComponent({
    name: name$M,
    props: {
      chosen: Boolean,
      coupon: makeRequiredProp(Object),
      disabled: Boolean,
      currency: makeStringProp("¥")
    },
    setup(props) {
      const validPeriod = vue.computed(() => {
        const {
          startAt,
          endAt
        } = props.coupon;
        return `${getDate(startAt)} - ${getDate(endAt)}`;
      });
      const faceAmount = vue.computed(() => {
        const {
          coupon,
          currency
        } = props;
        if (coupon.valueDesc) {
          return [coupon.valueDesc, vue.createVNode("span", null, [coupon.unitDesc || ""])];
        }
        if (coupon.denominations) {
          const denominations = formatAmount(coupon.denominations);
          return [vue.createVNode("span", null, [currency]), ` ${denominations}`];
        }
        if (coupon.discount) {
          return t$a("discount", formatDiscount(coupon.discount));
        }
        return "";
      });
      const conditionMessage = vue.computed(() => {
        const condition = formatAmount(props.coupon.originCondition || 0);
        return condition === "0" ? t$a("unlimited") : t$a("condition", condition);
      });
      return () => {
        const {
          chosen,
          coupon,
          disabled
        } = props;
        const description = disabled && coupon.reason || coupon.description;
        return vue.createVNode("div", {
          "class": bem$L({
            disabled
          })
        }, [vue.createVNode("div", {
          "class": bem$L("content")
        }, [vue.createVNode("div", {
          "class": bem$L("head")
        }, [vue.createVNode("h2", {
          "class": bem$L("amount")
        }, [faceAmount.value]), vue.createVNode("p", {
          "class": bem$L("condition")
        }, [coupon.condition || conditionMessage.value])]), vue.createVNode("div", {
          "class": bem$L("body")
        }, [vue.createVNode("p", {
          "class": bem$L("name")
        }, [coupon.name]), vue.createVNode("p", {
          "class": bem$L("valid")
        }, [validPeriod.value]), !disabled && vue.createVNode(Checkbox, {
          "class": bem$L("corner"),
          "modelValue": chosen
        }, null)])]), description && vue.createVNode("p", {
          "class": bem$L("description")
        }, [description])]);
      };
    }
  });
  const Coupon = withInstall(stdin_default$S);
  const [name$L, bem$K, t$9] = createNamespace("coupon-cell");
  const couponCellProps = {
    title: String,
    border: truthProp,
    editable: truthProp,
    coupons: makeArrayProp(),
    currency: makeStringProp("¥"),
    chosenCoupon: makeNumericProp(-1)
  };
  function formatValue({
    coupons,
    chosenCoupon,
    currency
  }) {
    const coupon = coupons[+chosenCoupon];
    if (coupon) {
      let value = 0;
      if (isDef(coupon.value)) {
        ({
          value
        } = coupon);
      } else if (isDef(coupon.denominations)) {
        value = coupon.denominations;
      }
      return `-${currency} ${(value / 100).toFixed(2)}`;
    }
    return coupons.length === 0 ? t$9("noCoupon") : t$9("count", coupons.length);
  }
  var stdin_default$R = vue.defineComponent({
    name: name$L,
    props: couponCellProps,
    setup(props) {
      return () => {
        const selected = props.coupons[+props.chosenCoupon];
        return vue.createVNode(Cell, {
          "class": bem$K(),
          "value": formatValue(props),
          "title": props.title || t$9("title"),
          "border": props.border,
          "isLink": props.editable,
          "valueClass": bem$K("value", {
            selected
          })
        }, null);
      };
    }
  });
  const CouponCell = withInstall(stdin_default$R);
  const [name$K, bem$J] = createNamespace("empty");
  const emptyProps = {
    image: makeStringProp("default"),
    imageSize: [Number, String, Array],
    description: String
  };
  var stdin_default$Q = vue.defineComponent({
    name: name$K,
    props: emptyProps,
    setup(props, {
      slots
    }) {
      const renderDescription = () => {
        const description = slots.description ? slots.description() : props.description;
        if (description) {
          return vue.createVNode("p", {
            "class": bem$J("description")
          }, [description]);
        }
      };
      const renderBottom = () => {
        if (slots.default) {
          return vue.createVNode("div", {
            "class": bem$J("bottom")
          }, [slots.default()]);
        }
      };
      const baseId = useId();
      const getId = (num) => `${baseId}-${num}`;
      const getUrlById = (num) => `url(#${getId(num)})`;
      const renderStop = (color, offset2, opacity) => vue.createVNode("stop", {
        "stop-color": color,
        "offset": `${offset2}%`,
        "stop-opacity": opacity
      }, null);
      const renderStops = (fromColor, toColor) => [renderStop(fromColor, 0), renderStop(toColor, 100)];
      const renderShadow = (id) => [vue.createVNode("defs", null, [vue.createVNode("radialGradient", {
        "id": getId(id),
        "cx": "50%",
        "cy": "54%",
        "fx": "50%",
        "fy": "54%",
        "r": "297%",
        "gradientTransform": "matrix(-.16 0 0 -.33 .58 .72)"
      }, [renderStop("#EBEDF0", 0), renderStop("#F2F3F5", 100, 0.3)])]), vue.createVNode("ellipse", {
        "fill": getUrlById(id),
        "opacity": ".8",
        "cx": "80",
        "cy": "140",
        "rx": "46",
        "ry": "8"
      }, null)];
      const renderBuilding = () => [vue.createVNode("defs", null, [vue.createVNode("linearGradient", {
        "id": getId("a"),
        "x1": "64%",
        "y1": "100%",
        "x2": "64%"
      }, [renderStop("#FFF", 0, 0.5), renderStop("#F2F3F5", 100)])]), vue.createVNode("g", {
        "opacity": ".8"
      }, [vue.createVNode("path", {
        "d": "M36 131V53H16v20H2v58h34z",
        "fill": getUrlById("a")
      }, null), vue.createVNode("path", {
        "d": "M123 15h22v14h9v77h-31V15z",
        "fill": getUrlById("a")
      }, null)])];
      const renderCloud = () => [vue.createVNode("defs", null, [vue.createVNode("linearGradient", {
        "id": getId("b"),
        "x1": "64%",
        "y1": "97%",
        "x2": "64%",
        "y2": "0%"
      }, [renderStop("#F2F3F5", 0, 0.3), renderStop("#F2F3F5", 100)])]), vue.createVNode("g", {
        "opacity": ".8"
      }, [vue.createVNode("path", {
        "d": "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
        "fill": getUrlById("b")
      }, null), vue.createVNode("path", {
        "d": "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
        "fill": getUrlById("b")
      }, null)])];
      const renderNetwork = () => vue.createVNode("svg", {
        "viewBox": "0 0 160 160"
      }, [vue.createVNode("defs", null, [vue.createVNode("linearGradient", {
        "id": getId(1),
        "x1": "64%",
        "y1": "100%",
        "x2": "64%"
      }, [renderStop("#FFF", 0, 0.5), renderStop("#F2F3F5", 100)]), vue.createVNode("linearGradient", {
        "id": getId(2),
        "x1": "50%",
        "x2": "50%",
        "y2": "84%"
      }, [renderStop("#EBEDF0", 0), renderStop("#DCDEE0", 100, 0)]), vue.createVNode("linearGradient", {
        "id": getId(3),
        "x1": "100%",
        "x2": "100%",
        "y2": "100%"
      }, [renderStops("#EAEDF0", "#DCDEE0")]), vue.createVNode("radialGradient", {
        "id": getId(4),
        "cx": "50%",
        "cy": "0%",
        "fx": "50%",
        "fy": "0%",
        "r": "100%",
        "gradientTransform": "matrix(0 1 -.54 0 .5 -.5)"
      }, [renderStop("#EBEDF0", 0), renderStop("#FFF", 100, 0)])]), vue.createVNode("g", {
        "fill": "none"
      }, [renderBuilding(), vue.createVNode("path", {
        "fill": getUrlById(4),
        "d": "M0 139h160v21H0z"
      }, null), vue.createVNode("path", {
        "d": "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
        "fill": getUrlById(2)
      }, null), vue.createVNode("g", {
        "opacity": ".6",
        "stroke-linecap": "round",
        "stroke-width": "7"
      }, [vue.createVNode("path", {
        "d": "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
        "stroke": getUrlById(3)
      }, null), vue.createVNode("path", {
        "d": "M53 36a34 34 0 0 0 0 48",
        "stroke": getUrlById(3)
      }, null), vue.createVNode("path", {
        "d": "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
        "stroke": getUrlById(3)
      }, null), vue.createVNode("path", {
        "d": "M106 84a34 34 0 0 0 0-48",
        "stroke": getUrlById(3)
      }, null)]), vue.createVNode("g", {
        "transform": "translate(31 105)"
      }, [vue.createVNode("rect", {
        "fill": "#EBEDF0",
        "width": "98",
        "height": "34",
        "rx": "2"
      }, null), vue.createVNode("rect", {
        "fill": "#FFF",
        "x": "9",
        "y": "8",
        "width": "80",
        "height": "18",
        "rx": "1.1"
      }, null), vue.createVNode("rect", {
        "fill": "#EBEDF0",
        "x": "15",
        "y": "12",
        "width": "18",
        "height": "6",
        "rx": "1.1"
      }, null)])])]);
      const renderMaterial = () => vue.createVNode("svg", {
        "viewBox": "0 0 160 160"
      }, [vue.createVNode("defs", null, [vue.createVNode("linearGradient", {
        "x1": "50%",
        "x2": "50%",
        "y2": "100%",
        "id": getId(5)
      }, [renderStops("#F2F3F5", "#DCDEE0")]), vue.createVNode("linearGradient", {
        "x1": "95%",
        "y1": "48%",
        "x2": "5.5%",
        "y2": "51%",
        "id": getId(6)
      }, [renderStops("#EAEDF1", "#DCDEE0")]), vue.createVNode("linearGradient", {
        "y1": "45%",
        "x2": "100%",
        "y2": "54%",
        "id": getId(7)
      }, [renderStops("#EAEDF1", "#DCDEE0")])]), renderBuilding(), renderCloud(), vue.createVNode("g", {
        "transform": "translate(36 50)",
        "fill": "none"
      }, [vue.createVNode("g", {
        "transform": "translate(8)"
      }, [vue.createVNode("rect", {
        "fill": "#EBEDF0",
        "opacity": ".6",
        "x": "38",
        "y": "13",
        "width": "36",
        "height": "53",
        "rx": "2"
      }, null), vue.createVNode("rect", {
        "fill": getUrlById(5),
        "width": "64",
        "height": "66",
        "rx": "2"
      }, null), vue.createVNode("rect", {
        "fill": "#FFF",
        "x": "6",
        "y": "6",
        "width": "52",
        "height": "55",
        "rx": "1"
      }, null), vue.createVNode("g", {
        "transform": "translate(15 17)",
        "fill": getUrlById(6)
      }, [vue.createVNode("rect", {
        "width": "34",
        "height": "6",
        "rx": "1"
      }, null), vue.createVNode("path", {
        "d": "M0 14h34v6H0z"
      }, null), vue.createVNode("rect", {
        "y": "28",
        "width": "34",
        "height": "6",
        "rx": "1"
      }, null)])]), vue.createVNode("rect", {
        "fill": getUrlById(7),
        "y": "61",
        "width": "88",
        "height": "28",
        "rx": "1"
      }, null), vue.createVNode("rect", {
        "fill": "#F7F8FA",
        "x": "29",
        "y": "72",
        "width": "30",
        "height": "6",
        "rx": "1"
      }, null)])]);
      const renderError = () => vue.createVNode("svg", {
        "viewBox": "0 0 160 160"
      }, [vue.createVNode("defs", null, [vue.createVNode("linearGradient", {
        "x1": "50%",
        "x2": "50%",
        "y2": "100%",
        "id": getId(8)
      }, [renderStops("#EAEDF1", "#DCDEE0")])]), renderBuilding(), renderCloud(), renderShadow("c"), vue.createVNode("path", {
        "d": "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
        "fill": getUrlById(8)
      }, null)]);
      const renderSearch = () => vue.createVNode("svg", {
        "viewBox": "0 0 160 160"
      }, [vue.createVNode("defs", null, [vue.createVNode("linearGradient", {
        "x1": "50%",
        "y1": "100%",
        "x2": "50%",
        "id": getId(9)
      }, [renderStops("#EEE", "#D8D8D8")]), vue.createVNode("linearGradient", {
        "x1": "100%",
        "y1": "50%",
        "y2": "50%",
        "id": getId(10)
      }, [renderStops("#F2F3F5", "#DCDEE0")]), vue.createVNode("linearGradient", {
        "x1": "50%",
        "x2": "50%",
        "y2": "100%",
        "id": getId(11)
      }, [renderStops("#F2F3F5", "#DCDEE0")]), vue.createVNode("linearGradient", {
        "x1": "50%",
        "x2": "50%",
        "y2": "100%",
        "id": getId(12)
      }, [renderStops("#FFF", "#F7F8FA")])]), renderBuilding(), renderCloud(), renderShadow("d"), vue.createVNode("g", {
        "transform": "rotate(-45 113 -4)",
        "fill": "none"
      }, [vue.createVNode("rect", {
        "fill": getUrlById(9),
        "x": "24",
        "y": "52.8",
        "width": "5.8",
        "height": "19",
        "rx": "1"
      }, null), vue.createVNode("rect", {
        "fill": getUrlById(10),
        "x": "22.1",
        "y": "67.3",
        "width": "9.9",
        "height": "28",
        "rx": "1"
      }, null), vue.createVNode("circle", {
        "stroke": getUrlById(11),
        "stroke-width": "8",
        "cx": "27",
        "cy": "27",
        "r": "27"
      }, null), vue.createVNode("circle", {
        "fill": getUrlById(12),
        "cx": "27",
        "cy": "27",
        "r": "16"
      }, null), vue.createVNode("path", {
        "d": "M37 7c-8 0-15 5-16 12",
        "stroke": getUrlById(11),
        "stroke-width": "3",
        "opacity": ".5",
        "stroke-linecap": "round",
        "transform": "rotate(45 29 13)"
      }, null)])]);
      const renderImage = () => {
        var _a;
        if (slots.image) {
          return slots.image();
        }
        const PRESET_IMAGES = {
          error: renderError,
          search: renderSearch,
          network: renderNetwork,
          default: renderMaterial
        };
        return ((_a = PRESET_IMAGES[props.image]) == null ? void 0 : _a.call(PRESET_IMAGES)) || vue.createVNode("img", {
          "src": props.image
        }, null);
      };
      return () => vue.createVNode("div", {
        "class": bem$J()
      }, [vue.createVNode("div", {
        "class": bem$J("image"),
        "style": getSizeStyle(props.imageSize)
      }, [renderImage()]), renderDescription(), renderBottom()]);
    }
  });
  const Empty = withInstall(stdin_default$Q);
  const [name$J, bem$I, t$8] = createNamespace("coupon-list");
  const couponListProps = {
    code: makeStringProp(""),
    coupons: makeArrayProp(),
    currency: makeStringProp("¥"),
    showCount: truthProp,
    emptyImage: String,
    chosenCoupon: makeNumberProp(-1),
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: makeArrayProp(),
    showExchangeBar: truthProp,
    showCloseButton: truthProp,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeMinLength: makeNumberProp(1),
    exchangeButtonText: String,
    displayedCouponIndex: makeNumberProp(-1),
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean
  };
  var stdin_default$P = vue.defineComponent({
    name: name$J,
    props: couponListProps,
    emits: ["change", "exchange", "update:code"],
    setup(props, {
      emit,
      slots
    }) {
      const [couponRefs, setCouponRefs] = useRefs();
      const root = vue.ref();
      const barRef = vue.ref();
      const activeTab = vue.ref(0);
      const listHeight = vue.ref(0);
      const currentCode = vue.ref(props.code);
      const buttonDisabled = vue.computed(() => !props.exchangeButtonLoading && (props.exchangeButtonDisabled || !currentCode.value || currentCode.value.length < props.exchangeMinLength));
      const updateListHeight = () => {
        const TABS_HEIGHT = 44;
        const rootHeight = useRect(root).height;
        const headerHeight = useRect(barRef).height + TABS_HEIGHT;
        listHeight.value = (rootHeight > headerHeight ? rootHeight : windowHeight.value) - headerHeight;
      };
      const onExchange = () => {
        emit("exchange", currentCode.value);
        if (!props.code) {
          currentCode.value = "";
        }
      };
      const scrollToCoupon = (index) => {
        vue.nextTick(() => {
          var _a;
          return (_a = couponRefs.value[index]) == null ? void 0 : _a.scrollIntoView();
        });
      };
      const renderEmpty = () => vue.createVNode(Empty, {
        "image": props.emptyImage
      }, {
        default: () => [vue.createVNode("p", {
          "class": bem$I("empty-tip")
        }, [t$8("noCoupon")])]
      });
      const renderExchangeBar = () => {
        if (props.showExchangeBar) {
          return vue.createVNode("div", {
            "ref": barRef,
            "class": bem$I("exchange-bar")
          }, [vue.createVNode(Field, {
            "modelValue": currentCode.value,
            "onUpdate:modelValue": ($event) => currentCode.value = $event,
            "clearable": true,
            "border": false,
            "class": bem$I("field"),
            "placeholder": props.inputPlaceholder || t$8("placeholder"),
            "maxlength": "20"
          }, null), vue.createVNode(Button, {
            "plain": true,
            "type": "primary",
            "class": bem$I("exchange"),
            "text": props.exchangeButtonText || t$8("exchange"),
            "loading": props.exchangeButtonLoading,
            "disabled": buttonDisabled.value,
            "onClick": onExchange
          }, null)]);
        }
      };
      const renderCouponTab = () => {
        const {
          coupons
        } = props;
        const count = props.showCount ? ` (${coupons.length})` : "";
        const title = (props.enabledTitle || t$8("enable")) + count;
        return vue.createVNode(Tab, {
          "title": title
        }, {
          default: () => {
            var _a;
            return [vue.createVNode("div", {
              "class": bem$I("list", {
                "with-bottom": props.showCloseButton
              }),
              "style": {
                height: `${listHeight.value}px`
              }
            }, [coupons.map((coupon, index) => vue.createVNode(Coupon, {
              "key": coupon.id,
              "ref": setCouponRefs(index),
              "coupon": coupon,
              "chosen": index === props.chosenCoupon,
              "currency": props.currency,
              "onClick": () => emit("change", index)
            }, null)), !coupons.length && renderEmpty(), (_a = slots["list-footer"]) == null ? void 0 : _a.call(slots)])];
          }
        });
      };
      const renderDisabledTab = () => {
        const {
          disabledCoupons
        } = props;
        const count = props.showCount ? ` (${disabledCoupons.length})` : "";
        const title = (props.disabledTitle || t$8("disabled")) + count;
        return vue.createVNode(Tab, {
          "title": title
        }, {
          default: () => {
            var _a;
            return [vue.createVNode("div", {
              "class": bem$I("list", {
                "with-bottom": props.showCloseButton
              }),
              "style": {
                height: `${listHeight.value}px`
              }
            }, [disabledCoupons.map((coupon) => vue.createVNode(Coupon, {
              "disabled": true,
              "key": coupon.id,
              "coupon": coupon,
              "currency": props.currency
            }, null)), !disabledCoupons.length && renderEmpty(), (_a = slots["disabled-list-footer"]) == null ? void 0 : _a.call(slots)])];
          }
        });
      };
      vue.watch(() => props.code, (value) => {
        currentCode.value = value;
      });
      vue.watch(windowHeight, updateListHeight);
      vue.watch(currentCode, (value) => emit("update:code", value));
      vue.watch(() => props.displayedCouponIndex, scrollToCoupon);
      vue.onMounted(() => {
        updateListHeight();
        scrollToCoupon(props.displayedCouponIndex);
      });
      return () => vue.createVNode("div", {
        "ref": root,
        "class": bem$I()
      }, [renderExchangeBar(), vue.createVNode(Tabs, {
        "active": activeTab.value,
        "onUpdate:active": ($event) => activeTab.value = $event,
        "class": bem$I("tab")
      }, {
        default: () => [renderCouponTab(), renderDisabledTab()]
      }), vue.createVNode("div", {
        "class": bem$I("bottom")
      }, [vue.withDirectives(vue.createVNode(Button, {
        "round": true,
        "block": true,
        "type": "primary",
        "class": bem$I("close"),
        "text": props.closeButtonText || t$8("close"),
        "onClick": () => emit("change", -1)
      }, null), [[vue.vShow, props.showCloseButton]])])]);
    }
  });
  const CouponList = withInstall(stdin_default$P);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const [name$I] = createNamespace("date-picker");
  const datePickerProps = extend({}, sharedProps, {
    columnsType: {
      type: Array,
      default: () => ["year", "month", "day"]
    },
    minDate: {
      type: Date,
      default: () => new Date(currentYear - 10, 0, 1),
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: () => new Date(currentYear + 10, 11, 31),
      validator: isDate
    }
  });
  var stdin_default$O = vue.defineComponent({
    name: name$I,
    props: datePickerProps,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const currentValues = vue.ref(props.modelValue);
      const genYearOptions = () => {
        const minYear = props.minDate.getFullYear();
        const maxYear = props.maxDate.getFullYear();
        return genOptions(minYear, maxYear, "year", props.formatter, props.filter);
      };
      const isMinYear = (year) => year === props.minDate.getFullYear();
      const isMaxYear = (year) => year === props.maxDate.getFullYear();
      const isMinMonth = (month) => month === props.minDate.getMonth() + 1;
      const isMaxMonth = (month) => month === props.maxDate.getMonth() + 1;
      const getValue = (type) => {
        const {
          minDate,
          columnsType
        } = props;
        const index = columnsType.indexOf(type);
        const value = currentValues.value[index];
        if (value) {
          return +value;
        }
        switch (type) {
          case "year":
            return minDate.getFullYear();
          case "month":
            return minDate.getMonth() + 1;
          case "day":
            return minDate.getDate();
        }
      };
      const genMonthOptions = () => {
        const year = getValue("year");
        const minMonth = isMinYear(year) ? props.minDate.getMonth() + 1 : 1;
        const maxMonth = isMaxYear(year) ? props.maxDate.getMonth() + 1 : 12;
        return genOptions(minMonth, maxMonth, "month", props.formatter, props.filter);
      };
      const genDayOptions = () => {
        const year = getValue("year");
        const month = getValue("month");
        const minDate = isMinYear(year) && isMinMonth(month) ? props.minDate.getDate() : 1;
        const maxDate = isMaxYear(year) && isMaxMonth(month) ? props.maxDate.getDate() : getMonthEndDay(year, month);
        return genOptions(minDate, maxDate, "day", props.formatter, props.filter);
      };
      const columns = vue.computed(() => props.columnsType.map((type) => {
        switch (type) {
          case "year":
            return genYearOptions();
          case "month":
            return genMonthOptions();
          case "day":
            return genDayOptions();
          default: {
            throw new Error(`[Vant] DatePicker: unsupported columns type: ${type}`);
          }
        }
      }));
      vue.watch(currentValues, (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          emit("update:modelValue", newValues);
        }
      });
      vue.watch(() => props.modelValue, (newValues) => {
        newValues = formatValueRange(newValues, columns.value);
        if (!isSameValue(newValues, currentValues.value)) {
          currentValues.value = newValues;
        }
      }, {
        immediate: true
      });
      const onChange = (...args) => emit("change", ...args);
      const onCancel = (...args) => emit("cancel", ...args);
      const onConfirm = (...args) => emit("confirm", ...args);
      return () => vue.createVNode(Picker, vue.mergeProps({
        "modelValue": currentValues.value,
        "onUpdate:modelValue": ($event) => currentValues.value = $event,
        "columns": columns.value,
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, pick(props, pickerInheritKeys)), slots);
    }
  });
  const DatePicker = withInstall(stdin_default$O);
  const [name$H, bem$H, t$7] = createNamespace("dialog");
  const dialogProps = extend({}, popupSharedProps, {
    title: String,
    theme: String,
    width: numericProp,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: unknownProp,
    transition: makeStringProp("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: truthProp,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: truthProp,
    closeOnClickOverlay: Boolean
  });
  const popupInheritKeys$1 = [...popupSharedPropKeys, "transition", "closeOnPopstate"];
  var stdin_default$N = vue.defineComponent({
    name: name$H,
    props: dialogProps,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const loading = vue.reactive({
        confirm: false,
        cancel: false
      });
      const updateShow = (value) => emit("update:show", value);
      const close = (action) => {
        var _a;
        updateShow(false);
        (_a = props.callback) == null ? void 0 : _a.call(props, action);
      };
      const getActionHandler = (action) => () => {
        if (!props.show) {
          return;
        }
        emit(action);
        if (props.beforeClose) {
          loading[action] = true;
          callInterceptor(props.beforeClose, {
            args: [action],
            done() {
              close(action);
              loading[action] = false;
            },
            canceled() {
              loading[action] = false;
            }
          });
        } else {
          close(action);
        }
      };
      const onCancel = getActionHandler("cancel");
      const onConfirm = getActionHandler("confirm");
      const onKeydown = vue.withKeys((event) => {
        var _a, _b;
        if (event.target !== ((_b = (_a = root.value) == null ? void 0 : _a.popupRef) == null ? void 0 : _b.value)) {
          return;
        }
        const onEventType = {
          Enter: props.showConfirmButton ? onConfirm : noop,
          Escape: props.showCancelButton ? onCancel : noop
        };
        onEventType[event.key]();
        emit("keydown", event);
      }, ["enter", "esc"]);
      const renderTitle = () => {
        const title = slots.title ? slots.title() : props.title;
        if (title) {
          return vue.createVNode("div", {
            "class": bem$H("header", {
              isolated: !props.message && !slots.default
            })
          }, [title]);
        }
      };
      const renderMessage = (hasTitle) => {
        const {
          message,
          allowHtml,
          messageAlign
        } = props;
        const classNames = bem$H("message", {
          "has-title": hasTitle,
          [messageAlign]: messageAlign
        });
        const content = isFunction(message) ? message() : message;
        if (allowHtml && typeof content === "string") {
          return vue.createVNode("div", {
            "class": classNames,
            "innerHTML": content
          }, null);
        }
        return vue.createVNode("div", {
          "class": classNames
        }, [content]);
      };
      const renderContent = () => {
        if (slots.default) {
          return vue.createVNode("div", {
            "class": bem$H("content")
          }, [slots.default()]);
        }
        const {
          title,
          message,
          allowHtml
        } = props;
        if (message) {
          const hasTitle = !!(title || slots.title);
          return vue.createVNode("div", {
            "key": allowHtml ? 1 : 0,
            "class": bem$H("content", {
              isolated: !hasTitle
            })
          }, [renderMessage(hasTitle)]);
        }
      };
      const renderButtons = () => vue.createVNode("div", {
        "class": [BORDER_TOP, bem$H("footer")]
      }, [props.showCancelButton && vue.createVNode(Button, {
        "size": "large",
        "text": props.cancelButtonText || t$7("cancel"),
        "class": bem$H("cancel"),
        "style": {
          color: props.cancelButtonColor
        },
        "loading": loading.cancel,
        "disabled": props.cancelButtonDisabled,
        "onClick": onCancel
      }, null), props.showConfirmButton && vue.createVNode(Button, {
        "size": "large",
        "text": props.confirmButtonText || t$7("confirm"),
        "class": [bem$H("confirm"), {
          [BORDER_LEFT]: props.showCancelButton
        }],
        "style": {
          color: props.confirmButtonColor
        },
        "loading": loading.confirm,
        "disabled": props.confirmButtonDisabled,
        "onClick": onConfirm
      }, null)]);
      const renderRoundButtons = () => vue.createVNode(ActionBar, {
        "class": bem$H("footer")
      }, {
        default: () => [props.showCancelButton && vue.createVNode(ActionBarButton, {
          "type": "warning",
          "text": props.cancelButtonText || t$7("cancel"),
          "class": bem$H("cancel"),
          "color": props.cancelButtonColor,
          "loading": loading.cancel,
          "disabled": props.cancelButtonDisabled,
          "onClick": onCancel
        }, null), props.showConfirmButton && vue.createVNode(ActionBarButton, {
          "type": "danger",
          "text": props.confirmButtonText || t$7("confirm"),
          "class": bem$H("confirm"),
          "color": props.confirmButtonColor,
          "loading": loading.confirm,
          "disabled": props.confirmButtonDisabled,
          "onClick": onConfirm
        }, null)]
      });
      const renderFooter = () => {
        if (slots.footer) {
          return slots.footer();
        }
        return props.theme === "round-button" ? renderRoundButtons() : renderButtons();
      };
      return () => {
        const {
          width: width2,
          title,
          theme,
          message,
          className
        } = props;
        return vue.createVNode(Popup, vue.mergeProps({
          "ref": root,
          "role": "dialog",
          "class": [bem$H([theme]), className],
          "style": {
            width: addUnit(width2)
          },
          "tabindex": 0,
          "aria-labelledby": title || message,
          "onKeydown": onKeydown,
          "onUpdate:show": updateShow
        }, pick(props, popupInheritKeys$1)), {
          default: () => [renderTitle(), renderContent(), renderFooter()]
        });
      };
    }
  });
  const Dialog = withInstall(stdin_default$N);
  const [name$G, bem$G] = createNamespace("divider");
  const dividerProps = {
    dashed: Boolean,
    hairline: truthProp,
    contentPosition: makeStringProp("center")
  };
  var stdin_default$M = vue.defineComponent({
    name: name$G,
    props: dividerProps,
    setup(props, {
      slots
    }) {
      return () => {
        var _a;
        return vue.createVNode("div", {
          "role": "separator",
          "class": bem$G({
            dashed: props.dashed,
            hairline: props.hairline,
            [`content-${props.contentPosition}`]: !!slots.default
          })
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Divider = withInstall(stdin_default$M);
  const [name$F, bem$F] = createNamespace("dropdown-menu");
  const dropdownMenuProps = {
    overlay: truthProp,
    zIndex: numericProp,
    duration: makeNumericProp(0.2),
    direction: makeStringProp("down"),
    activeColor: String,
    closeOnClickOutside: truthProp,
    closeOnClickOverlay: truthProp
  };
  const DROPDOWN_KEY = Symbol(name$F);
  var stdin_default$L = vue.defineComponent({
    name: name$F,
    props: dropdownMenuProps,
    setup(props, {
      slots
    }) {
      const id = useId();
      const root = vue.ref();
      const barRef = vue.ref();
      const offset2 = vue.ref(0);
      const {
        children,
        linkChildren
      } = useChildren(DROPDOWN_KEY);
      const scrollParent = useScrollParent(root);
      const opened = vue.computed(() => children.some((item) => item.state.showWrapper));
      const barStyle = vue.computed(() => {
        if (opened.value && isDef(props.zIndex)) {
          return {
            zIndex: +props.zIndex + 1
          };
        }
      });
      const onClickAway = () => {
        if (props.closeOnClickOutside) {
          children.forEach((item) => {
            item.toggle(false);
          });
        }
      };
      const updateOffset = () => {
        if (barRef.value) {
          const rect = useRect(barRef);
          if (props.direction === "down") {
            offset2.value = rect.bottom;
          } else {
            offset2.value = windowHeight.value - rect.top;
          }
        }
      };
      const onScroll = () => {
        if (opened.value) {
          updateOffset();
        }
      };
      const toggleItem = (active) => {
        children.forEach((item, index) => {
          if (index === active) {
            item.toggle();
          } else if (item.state.showPopup) {
            item.toggle(false, {
              immediate: true
            });
          }
        });
      };
      const renderTitle = (item, index) => {
        const {
          showPopup
        } = item.state;
        const {
          disabled,
          titleClass
        } = item;
        return vue.createVNode("div", {
          "id": `${id}-${index}`,
          "role": "button",
          "tabindex": disabled ? void 0 : 0,
          "class": [bem$F("item", {
            disabled
          }), {
            [HAPTICS_FEEDBACK]: !disabled
          }],
          "onClick": () => {
            if (!disabled) {
              toggleItem(index);
            }
          }
        }, [vue.createVNode("span", {
          "class": [bem$F("title", {
            down: showPopup === (props.direction === "down"),
            active: showPopup
          }), titleClass],
          "style": {
            color: showPopup ? props.activeColor : ""
          }
        }, [vue.createVNode("div", {
          "class": "van-ellipsis"
        }, [item.renderTitle()])])]);
      };
      linkChildren({
        id,
        props,
        offset: offset2,
        updateOffset
      });
      useClickAway(root, onClickAway);
      useEventListener("scroll", onScroll, {
        target: scrollParent,
        passive: true
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "ref": root,
          "class": bem$F()
        }, [vue.createVNode("div", {
          "ref": barRef,
          "style": barStyle.value,
          "class": bem$F("bar", {
            opened: opened.value
          })
        }, [children.map(renderTitle)]), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const [name$E, bem$E] = createNamespace("dropdown-item");
  const dropdownItemProps = {
    title: String,
    options: makeArrayProp(),
    disabled: Boolean,
    teleport: [String, Object],
    lazyRender: truthProp,
    modelValue: unknownProp,
    titleClass: unknownProp
  };
  var stdin_default$K = vue.defineComponent({
    name: name$E,
    inheritAttrs: false,
    props: dropdownItemProps,
    emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
    setup(props, {
      emit,
      slots,
      attrs
    }) {
      const state = vue.reactive({
        showPopup: false,
        transition: true,
        showWrapper: false
      });
      const {
        parent,
        index
      } = useParent(DROPDOWN_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/dropdown-item/DropdownItem.mjs:41", "[Vant] <DropdownItem> must be a child component of <DropdownMenu>.");
        }
        return;
      }
      const getEmitter = (name2) => () => emit(name2);
      const onOpen = getEmitter("open");
      const onClose = getEmitter("close");
      const onOpened = getEmitter("opened");
      const onClosed = () => {
        state.showWrapper = false;
        emit("closed");
      };
      const onClickWrapper = (event) => {
        if (props.teleport) {
          event.stopPropagation();
        }
      };
      const toggle = (show = !state.showPopup, options = {}) => {
        if (show === state.showPopup) {
          return;
        }
        state.showPopup = show;
        state.transition = !options.immediate;
        if (show) {
          parent.updateOffset();
          state.showWrapper = true;
        }
      };
      const renderTitle = () => {
        if (slots.title) {
          return slots.title();
        }
        if (props.title) {
          return props.title;
        }
        const match = props.options.find((option) => option.value === props.modelValue);
        return match ? match.text : "";
      };
      const renderOption = (option) => {
        const {
          activeColor
        } = parent.props;
        const active = option.value === props.modelValue;
        const onClick = () => {
          state.showPopup = false;
          if (option.value !== props.modelValue) {
            emit("update:modelValue", option.value);
            emit("change", option.value);
          }
        };
        const renderIcon = () => {
          if (active) {
            return vue.createVNode(Icon, {
              "class": bem$E("icon"),
              "color": activeColor,
              "name": "success"
            }, null);
          }
        };
        return vue.createVNode(Cell, {
          "role": "menuitem",
          "key": option.value,
          "icon": option.icon,
          "title": option.text,
          "class": bem$E("option", {
            active
          }),
          "style": {
            color: active ? activeColor : ""
          },
          "tabindex": active ? 0 : -1,
          "clickable": true,
          "onClick": onClick
        }, {
          value: renderIcon
        });
      };
      const renderContent = () => {
        const {
          offset: offset2
        } = parent;
        const {
          zIndex,
          overlay,
          duration,
          direction,
          closeOnClickOverlay
        } = parent.props;
        const style = getZIndexStyle(zIndex);
        if (direction === "down") {
          style.top = `${offset2.value}px`;
        } else {
          style.bottom = `${offset2.value}px`;
        }
        return vue.withDirectives(vue.createVNode("div", vue.mergeProps({
          "style": style,
          "class": bem$E([direction]),
          "onClick": onClickWrapper
        }, attrs), [vue.createVNode(Popup, {
          "show": state.showPopup,
          "onUpdate:show": ($event) => state.showPopup = $event,
          "role": "menu",
          "class": bem$E("content"),
          "overlay": overlay,
          "position": direction === "down" ? "top" : "bottom",
          "duration": state.transition ? duration : 0,
          "lazyRender": props.lazyRender,
          "overlayStyle": {
            position: "absolute"
          },
          "aria-labelledby": `${parent.id}-${index.value}`,
          "closeOnClickOverlay": closeOnClickOverlay,
          "onOpen": onOpen,
          "onClose": onClose,
          "onOpened": onOpened,
          "onClosed": onClosed
        }, {
          default: () => {
            var _a;
            return [props.options.map(renderOption), (_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]), [[vue.vShow, state.showWrapper]]);
      };
      useExpose({
        state,
        toggle,
        renderTitle
      });
      return () => {
        if (props.teleport) {
          return vue.createVNode(vue.Teleport, {
            "to": props.teleport
          }, {
            default: () => [renderContent()]
          });
        }
        return renderContent();
      };
    }
  });
  const DropdownItem = withInstall(stdin_default$K);
  const DropdownMenu = withInstall(stdin_default$L);
  const [name$D, bem$D] = createNamespace("grid");
  const gridProps = {
    square: Boolean,
    center: truthProp,
    border: truthProp,
    gutter: numericProp,
    reverse: Boolean,
    iconSize: numericProp,
    direction: String,
    clickable: Boolean,
    columnNum: makeNumericProp(4)
  };
  const GRID_KEY = Symbol(name$D);
  var stdin_default$J = vue.defineComponent({
    name: name$D,
    props: gridProps,
    setup(props, {
      slots
    }) {
      const {
        linkChildren
      } = useChildren(GRID_KEY);
      linkChildren({
        props
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "style": {
            paddingLeft: addUnit(props.gutter)
          },
          "class": [bem$D(), {
            [BORDER_TOP]: props.border && !props.gutter
          }]
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Grid = withInstall(stdin_default$J);
  const [name$C, bem$C] = createNamespace("grid-item");
  const gridItemProps = extend({}, routeProps, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: numericProp,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object
  });
  var stdin_default$I = vue.defineComponent({
    name: name$C,
    props: gridItemProps,
    setup(props, {
      slots
    }) {
      const {
        parent,
        index
      } = useParent(GRID_KEY);
      const route2 = useRoute();
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/grid-item/GridItem.mjs:32", "[Vant] <GridItem> must be a child component of <Grid>.");
        }
        return;
      }
      const rootStyle = vue.computed(() => {
        const {
          square,
          gutter,
          columnNum
        } = parent.props;
        const percent = `${100 / +columnNum}%`;
        const style = {
          flexBasis: percent
        };
        if (square) {
          style.paddingTop = percent;
        } else if (gutter) {
          const gutterValue = addUnit(gutter);
          style.paddingRight = gutterValue;
          if (index.value >= +columnNum) {
            style.marginTop = gutterValue;
          }
        }
        return style;
      });
      const contentStyle = vue.computed(() => {
        const {
          square,
          gutter
        } = parent.props;
        if (square && gutter) {
          const gutterValue = addUnit(gutter);
          return {
            right: gutterValue,
            bottom: gutterValue,
            height: "auto"
          };
        }
      });
      const renderIcon = () => {
        if (slots.icon) {
          return vue.createVNode(Badge, vue.mergeProps({
            "dot": props.dot,
            "content": props.badge
          }, props.badgeProps), {
            default: slots.icon
          });
        }
        if (props.icon) {
          return vue.createVNode(Icon, {
            "dot": props.dot,
            "name": props.icon,
            "size": parent.props.iconSize,
            "badge": props.badge,
            "class": bem$C("icon"),
            "color": props.iconColor,
            "badgeProps": props.badgeProps,
            "classPrefix": props.iconPrefix
          }, null);
        }
      };
      const renderText = () => {
        if (slots.text) {
          return slots.text();
        }
        if (props.text) {
          return vue.createVNode("span", {
            "class": bem$C("text")
          }, [props.text]);
        }
      };
      const renderContent = () => {
        if (slots.default) {
          return slots.default();
        }
        return [renderIcon(), renderText()];
      };
      return () => {
        const {
          center,
          border,
          square,
          gutter,
          reverse,
          direction,
          clickable
        } = parent.props;
        const classes = [bem$C("content", [direction, {
          center,
          square,
          reverse,
          clickable,
          surround: border && gutter
        }]), {
          [BORDER]: border
        }];
        return vue.createVNode("div", {
          "class": [bem$C({
            square
          })],
          "style": rootStyle.value
        }, [vue.createVNode("div", {
          "role": clickable ? "button" : void 0,
          "class": classes,
          "style": contentStyle.value,
          "tabindex": clickable ? 0 : void 0,
          "onClick": route2
        }, [renderContent()])]);
      };
    }
  });
  const GridItem = withInstall(stdin_default$I);
  const getDistance = (touches) => Math.sqrt((touches[0].clientX - touches[1].clientX) ** 2 + (touches[0].clientY - touches[1].clientY) ** 2);
  const bem$B = createNamespace("image-preview")[1];
  var stdin_default$H = vue.defineComponent({
    props: {
      src: String,
      show: Boolean,
      active: Number,
      minZoom: makeRequiredProp(numericProp),
      maxZoom: makeRequiredProp(numericProp),
      rootWidth: makeRequiredProp(Number),
      rootHeight: makeRequiredProp(Number),
      disableZoom: Boolean
    },
    emits: ["scale", "close", "longPress"],
    setup(props, {
      emit,
      slots
    }) {
      const state = vue.reactive({
        scale: 1,
        moveX: 0,
        moveY: 0,
        moving: false,
        zooming: false,
        imageRatio: 0,
        displayWidth: 0,
        displayHeight: 0
      });
      const touch = useTouch();
      const swipeItem = vue.ref();
      const vertical = vue.computed(() => {
        const {
          rootWidth,
          rootHeight
        } = props;
        const rootRatio = rootHeight / rootWidth;
        return state.imageRatio > rootRatio;
      });
      const imageStyle = vue.computed(() => {
        const {
          scale,
          moveX,
          moveY,
          moving,
          zooming
        } = state;
        const style = {
          transitionDuration: zooming || moving ? "0s" : ".3s"
        };
        if (scale !== 1) {
          const offsetX = moveX / scale;
          const offsetY = moveY / scale;
          style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
        }
        return style;
      });
      const maxMoveX = vue.computed(() => {
        if (state.imageRatio) {
          const {
            rootWidth,
            rootHeight
          } = props;
          const displayWidth = vertical.value ? rootHeight / state.imageRatio : rootWidth;
          return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
        }
        return 0;
      });
      const maxMoveY = vue.computed(() => {
        if (state.imageRatio) {
          const {
            rootWidth,
            rootHeight
          } = props;
          const displayHeight = vertical.value ? rootHeight : rootWidth * state.imageRatio;
          return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
        }
        return 0;
      });
      const setScale = (scale) => {
        scale = clamp(scale, +props.minZoom, +props.maxZoom + 1);
        if (scale !== state.scale) {
          state.scale = scale;
          emit("scale", {
            scale,
            index: props.active
          });
        }
      };
      const resetScale = () => {
        setScale(1);
        state.moveX = 0;
        state.moveY = 0;
      };
      const toggleScale = () => {
        const scale = state.scale > 1 ? 1 : 2;
        setScale(scale);
        state.moveX = 0;
        state.moveY = 0;
      };
      let fingerNum;
      let startMoveX;
      let startMoveY;
      let startScale;
      let startDistance;
      let doubleTapTimer;
      let touchStartTime;
      let isImageMoved = false;
      const onTouchStart = (event) => {
        const {
          touches
        } = event;
        fingerNum = touches.length;
        if (fingerNum === 2 && props.disableZoom) {
          return;
        }
        const {
          offsetX
        } = touch;
        touch.start(event);
        startMoveX = state.moveX;
        startMoveY = state.moveY;
        touchStartTime = Date.now();
        isImageMoved = false;
        state.moving = fingerNum === 1 && state.scale !== 1;
        state.zooming = fingerNum === 2 && !offsetX.value;
        if (state.zooming) {
          startScale = state.scale;
          startDistance = getDistance(event.touches);
        }
      };
      const onTouchMove = (event) => {
        const {
          touches
        } = event;
        touch.move(event);
        if (state.moving) {
          const {
            deltaX,
            deltaY
          } = touch;
          const moveX = deltaX.value + startMoveX;
          const moveY = deltaY.value + startMoveY;
          if ((moveX > maxMoveX.value || moveX < -maxMoveX.value) && !isImageMoved && touch.isHorizontal()) {
            state.moving = false;
            return;
          }
          isImageMoved = true;
          preventDefault(event, true);
          state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
          state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
        }
        if (state.zooming) {
          preventDefault(event, true);
          if (touches.length === 2) {
            const distance = getDistance(touches);
            const scale = startScale * distance / startDistance;
            setScale(scale);
          }
        }
      };
      const checkTap = () => {
        if (fingerNum > 1) {
          return;
        }
        const {
          offsetX,
          offsetY
        } = touch;
        const deltaTime = Date.now() - touchStartTime;
        const TAP_TIME = 250;
        const TAP_OFFSET = 5;
        if (offsetX.value < TAP_OFFSET && offsetY.value < TAP_OFFSET) {
          if (deltaTime < TAP_TIME) {
            if (doubleTapTimer) {
              clearTimeout(doubleTapTimer);
              doubleTapTimer = null;
              toggleScale();
            } else {
              doubleTapTimer = setTimeout(() => {
                emit("close");
                doubleTapTimer = null;
              }, TAP_TIME);
            }
          } else if (deltaTime > LONG_PRESS_START_TIME) {
            emit("longPress");
          }
        }
      };
      const onTouchEnd = (event) => {
        let stopPropagation2 = false;
        if (state.moving || state.zooming) {
          stopPropagation2 = true;
          if (state.moving && startMoveX === state.moveX && startMoveY === state.moveY) {
            stopPropagation2 = false;
          }
          if (!event.touches.length) {
            if (state.zooming) {
              state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
              state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
              state.zooming = false;
            }
            state.moving = false;
            startMoveX = 0;
            startMoveY = 0;
            startScale = 1;
            if (state.scale < 1) {
              resetScale();
            }
            const maxZoom = +props.maxZoom;
            if (state.scale > maxZoom) {
              state.scale = maxZoom;
            }
          }
        }
        preventDefault(event, stopPropagation2);
        checkTap();
        touch.reset();
      };
      const onLoad = (event) => {
        const {
          naturalWidth,
          naturalHeight
        } = event.target;
        state.imageRatio = naturalHeight / naturalWidth;
      };
      vue.watch(() => props.active, resetScale);
      vue.watch(() => props.show, (value) => {
        if (!value) {
          resetScale();
        }
      });
      useEventListener("touchmove", onTouchMove, {
        target: vue.computed(() => {
          var _a;
          return (_a = swipeItem.value) == null ? void 0 : _a.$el;
        })
      });
      return () => {
        const imageSlots = {
          loading: () => vue.createVNode(Loading, {
            "type": "spinner"
          }, null)
        };
        return vue.createVNode(SwipeItem, {
          "ref": swipeItem,
          "class": bem$B("swipe-item"),
          "onTouchstartPassive": onTouchStart,
          "onTouchend": onTouchEnd,
          "onTouchcancel": onTouchEnd
        }, {
          default: () => [slots.image ? vue.createVNode("div", {
            "class": bem$B("image-wrap")
          }, [slots.image({
            src: props.src
          })]) : vue.createVNode(Image$1, {
            "src": props.src,
            "fit": "contain",
            "class": bem$B("image", {
              vertical: vertical.value
            }),
            "style": imageStyle.value,
            "onLoad": onLoad
          }, imageSlots)]
        });
      };
    }
  });
  const [name$B, bem$A] = createNamespace("image-preview");
  const popupProps$1 = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"];
  const imagePreviewProps = {
    show: Boolean,
    loop: truthProp,
    images: makeArrayProp(),
    minZoom: makeNumericProp(1 / 3),
    maxZoom: makeNumericProp(3),
    overlay: truthProp,
    closeable: Boolean,
    showIndex: truthProp,
    className: unknownProp,
    closeIcon: makeStringProp("clear"),
    transition: String,
    beforeClose: Function,
    overlayClass: unknownProp,
    overlayStyle: Object,
    swipeDuration: makeNumericProp(300),
    startPosition: makeNumericProp(0),
    showIndicators: Boolean,
    closeOnPopstate: truthProp,
    closeIconPosition: makeStringProp("top-right"),
    teleport: [String, Object]
  };
  var stdin_default$G = vue.defineComponent({
    name: name$B,
    props: imagePreviewProps,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(props, {
      emit,
      slots
    }) {
      const swipeRef = vue.ref();
      const state = vue.reactive({
        active: 0,
        rootWidth: 0,
        rootHeight: 0,
        disableZoom: false
      });
      const resize = () => {
        if (swipeRef.value) {
          const rect = useRect(swipeRef.value.$el);
          state.rootWidth = rect.width;
          state.rootHeight = rect.height;
          swipeRef.value.resize();
        }
      };
      const emitScale = (args) => emit("scale", args);
      const updateShow = (show) => emit("update:show", show);
      const emitClose = () => {
        callInterceptor(props.beforeClose, {
          args: [state.active],
          done: () => updateShow(false)
        });
      };
      const setActive = (active) => {
        if (active !== state.active) {
          state.active = active;
          emit("change", active);
        }
      };
      const renderIndex = () => {
        if (props.showIndex) {
          return vue.createVNode("div", {
            "class": bem$A("index")
          }, [slots.index ? slots.index({
            index: state.active
          }) : `${state.active + 1} / ${props.images.length}`]);
        }
      };
      const renderCover = () => {
        if (slots.cover) {
          return vue.createVNode("div", {
            "class": bem$A("cover")
          }, [slots.cover()]);
        }
      };
      const onDragStart = () => {
        state.disableZoom = true;
      };
      const onDragEnd = () => {
        state.disableZoom = false;
      };
      const renderImages = () => vue.createVNode(Swipe, {
        "ref": swipeRef,
        "lazyRender": true,
        "loop": props.loop,
        "class": bem$A("swipe"),
        "duration": props.swipeDuration,
        "initialSwipe": props.startPosition,
        "showIndicators": props.showIndicators,
        "indicatorColor": "white",
        "onChange": setActive,
        "onDragEnd": onDragEnd,
        "onDragStart": onDragStart
      }, {
        default: () => [props.images.map((image, index) => vue.createVNode(stdin_default$H, {
          "src": image,
          "show": props.show,
          "active": state.active,
          "maxZoom": props.maxZoom,
          "minZoom": props.minZoom,
          "rootWidth": state.rootWidth,
          "rootHeight": state.rootHeight,
          "disableZoom": state.disableZoom,
          "onScale": emitScale,
          "onClose": emitClose,
          "onLongPress": () => emit("longPress", {
            index
          })
        }, {
          image: slots.image
        }))]
      });
      const renderClose = () => {
        if (props.closeable) {
          return vue.createVNode(Icon, {
            "role": "button",
            "name": props.closeIcon,
            "class": [bem$A("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
            "onClick": emitClose
          }, null);
        }
      };
      const onClosed = () => emit("closed");
      const swipeTo = (index, options) => {
        var _a;
        return (_a = swipeRef.value) == null ? void 0 : _a.swipeTo(index, options);
      };
      useExpose({
        swipeTo
      });
      vue.onMounted(resize);
      vue.watch([windowWidth, windowHeight], resize);
      vue.watch(() => props.startPosition, (value) => setActive(+value));
      vue.watch(() => props.show, (value) => {
        const {
          images,
          startPosition
        } = props;
        if (value) {
          setActive(+startPosition);
          vue.nextTick(() => {
            resize();
            swipeTo(+startPosition, {
              immediate: true
            });
          });
        } else {
          emit("close", {
            index: state.active,
            url: images[state.active]
          });
        }
      });
      return () => vue.createVNode(Popup, vue.mergeProps({
        "class": [bem$A(), props.className],
        "overlayClass": [bem$A("overlay"), props.overlayClass],
        "onClosed": onClosed,
        "onUpdate:show": updateShow
      }, pick(props, popupProps$1)), {
        default: () => [renderClose(), renderImages(), renderIndex(), renderCover()]
      });
    }
  });
  let instance;
  const defaultConfig = {
    loop: true,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    teleport: "body",
    className: "",
    showIndex: true,
    closeable: false,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: false,
    closeOnPopstate: true,
    closeIconPosition: "top-right"
  };
  function initInstance() {
    ({
      instance
    } = mountComponent({
      setup() {
        const {
          state,
          toggle
        } = usePopupState();
        const onClosed = () => {
          state.images = [];
        };
        return () => vue.createVNode(stdin_default$G, vue.mergeProps(state, {
          "onClosed": onClosed,
          "onUpdate:show": toggle
        }), null);
      }
    }));
  }
  const showImagePreview = (options, startPosition = 0) => {
    if (!inBrowser$1) {
      return;
    }
    if (!instance) {
      initInstance();
    }
    options = Array.isArray(options) ? {
      images: options,
      startPosition
    } : options;
    instance.open(extend({}, defaultConfig, options));
    return instance;
  };
  const ImagePreview = withInstall(stdin_default$G);
  function genAlphabet() {
    const charCodeOfA = "A".charCodeAt(0);
    const indexList = Array(26).fill("").map((_, i) => String.fromCharCode(charCodeOfA + i));
    return indexList;
  }
  const [name$A, bem$z] = createNamespace("index-bar");
  const indexBarProps = {
    sticky: truthProp,
    zIndex: numericProp,
    teleport: [String, Object],
    highlightColor: String,
    stickyOffsetTop: makeNumberProp(0),
    indexList: {
      type: Array,
      default: genAlphabet
    }
  };
  const INDEX_BAR_KEY = Symbol(name$A);
  var stdin_default$F = vue.defineComponent({
    name: name$A,
    props: indexBarProps,
    emits: ["select", "change"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const sidebar = vue.ref();
      const activeAnchor = vue.ref("");
      const touch = useTouch();
      const scrollParent = useScrollParent(root);
      const {
        children,
        linkChildren
      } = useChildren(INDEX_BAR_KEY);
      let selectActiveIndex;
      linkChildren({
        props
      });
      const sidebarStyle = vue.computed(() => {
        if (isDef(props.zIndex)) {
          return {
            zIndex: +props.zIndex + 1
          };
        }
      });
      const highlightStyle = vue.computed(() => {
        if (props.highlightColor) {
          return {
            color: props.highlightColor
          };
        }
      });
      const getActiveAnchor = (scrollTop, rects) => {
        for (let i = children.length - 1; i >= 0; i--) {
          const prevHeight = i > 0 ? rects[i - 1].height : 0;
          const reachTop = props.sticky ? prevHeight + props.stickyOffsetTop : 0;
          if (scrollTop + reachTop >= rects[i].top) {
            return i;
          }
        }
        return -1;
      };
      const getMatchAnchor = (index) => children.find((item) => String(item.index) === index);
      const onScroll = () => {
        if (isHidden(root)) {
          return;
        }
        const {
          sticky,
          indexList
        } = props;
        const scrollTop = getScrollTop(scrollParent.value);
        const scrollParentRect = useRect(scrollParent);
        const rects = children.map((item) => item.getRect(scrollParent.value, scrollParentRect));
        let active = -1;
        if (selectActiveIndex) {
          const match = getMatchAnchor(selectActiveIndex);
          if (match) {
            const rect = match.getRect(scrollParent.value, scrollParentRect);
            active = getActiveAnchor(rect.top, rects);
          }
        } else {
          active = getActiveAnchor(scrollTop, rects);
        }
        activeAnchor.value = indexList[active];
        if (sticky) {
          children.forEach((item, index) => {
            const {
              state,
              $el
            } = item;
            if (index === active || index === active - 1) {
              const rect = $el.getBoundingClientRect();
              state.left = rect.left;
              state.width = rect.width;
            } else {
              state.left = null;
              state.width = null;
            }
            if (index === active) {
              state.active = true;
              state.top = Math.max(props.stickyOffsetTop, rects[index].top - scrollTop) + scrollParentRect.top;
            } else if (index === active - 1 && selectActiveIndex === "") {
              const activeItemTop = rects[active].top - scrollTop;
              state.active = activeItemTop > 0;
              state.top = activeItemTop + scrollParentRect.top - rects[index].height;
            } else {
              state.active = false;
            }
          });
        }
        selectActiveIndex = "";
      };
      const init = () => {
        vue.nextTick(onScroll);
      };
      useEventListener("scroll", onScroll, {
        target: scrollParent,
        passive: true
      });
      vue.onMounted(init);
      vue.watch(() => props.indexList, init);
      vue.watch(activeAnchor, (value) => {
        if (value) {
          emit("change", value);
        }
      });
      const renderIndexes = () => props.indexList.map((index) => {
        const active = index === activeAnchor.value;
        return vue.createVNode("span", {
          "class": bem$z("index", {
            active
          }),
          "style": active ? highlightStyle.value : void 0,
          "data-index": index
        }, [index]);
      });
      const scrollTo = (index) => {
        selectActiveIndex = String(index);
        const match = getMatchAnchor(selectActiveIndex);
        if (match) {
          const scrollTop = getScrollTop(scrollParent.value);
          const scrollParentRect = useRect(scrollParent);
          const {
            offsetHeight
          } = document.documentElement;
          match.$el.scrollIntoView();
          if (scrollTop === offsetHeight - scrollParentRect.height) {
            onScroll();
            return;
          }
          if (props.sticky && props.stickyOffsetTop) {
            setRootScrollTop(getRootScrollTop() - props.stickyOffsetTop);
          }
          emit("select", match.index);
        }
      };
      const scrollToElement = (element) => {
        const {
          index
        } = element.dataset;
        if (index) {
          scrollTo(index);
        }
      };
      const onClickSidebar = (event) => {
        scrollToElement(event.target);
      };
      let touchActiveIndex;
      const onTouchMove = (event) => {
        touch.move(event);
        if (touch.isVertical()) {
          preventDefault(event);
          const {
            clientX,
            clientY
          } = event.touches[0];
          const target = document.elementFromPoint(clientX, clientY);
          if (target) {
            const {
              index
            } = target.dataset;
            if (index && touchActiveIndex !== index) {
              touchActiveIndex = index;
              scrollToElement(target);
            }
          }
        }
      };
      const renderSidebar = () => vue.createVNode("div", {
        "ref": sidebar,
        "class": bem$z("sidebar"),
        "style": sidebarStyle.value,
        "onClick": onClickSidebar,
        "onTouchstartPassive": touch.start
      }, [renderIndexes()]);
      useExpose({
        scrollTo
      });
      useEventListener("touchmove", onTouchMove, {
        target: sidebar
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "ref": root,
          "class": bem$z()
        }, [props.teleport ? vue.createVNode(vue.Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderSidebar()]
        }) : renderSidebar(), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const [name$z, bem$y] = createNamespace("index-anchor");
  const indexAnchorProps = {
    index: numericProp
  };
  var stdin_default$E = vue.defineComponent({
    name: name$z,
    props: indexAnchorProps,
    setup(props, {
      slots
    }) {
      const state = vue.reactive({
        top: 0,
        left: null,
        rect: {
          top: 0,
          height: 0
        },
        width: null,
        active: false
      });
      const root = vue.ref();
      const {
        parent
      } = useParent(INDEX_BAR_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/index-anchor/IndexAnchor.mjs:34", "[Vant] <IndexAnchor> must be a child component of <IndexBar>.");
        }
        return;
      }
      const isSticky = () => state.active && parent.props.sticky;
      const anchorStyle = vue.computed(() => {
        const {
          zIndex,
          highlightColor
        } = parent.props;
        if (isSticky()) {
          return extend(getZIndexStyle(zIndex), {
            left: state.left ? `${state.left}px` : void 0,
            width: state.width ? `${state.width}px` : void 0,
            transform: state.top ? `translate3d(0, ${state.top}px, 0)` : void 0,
            color: highlightColor
          });
        }
      });
      const getRect = (scrollParent, scrollParentRect) => {
        const rootRect = useRect(root);
        state.rect.height = rootRect.height;
        if (scrollParent === window || scrollParent === document.body) {
          state.rect.top = rootRect.top + getRootScrollTop();
        } else {
          state.rect.top = rootRect.top + getScrollTop(scrollParent) - scrollParentRect.top;
        }
        return state.rect;
      };
      useExpose({
        state,
        getRect
      });
      return () => {
        const sticky = isSticky();
        return vue.createVNode("div", {
          "ref": root,
          "style": {
            height: sticky ? `${state.rect.height}px` : void 0
          }
        }, [vue.createVNode("div", {
          "style": anchorStyle.value,
          "class": [bem$y({
            sticky
          }), {
            [BORDER_BOTTOM]: sticky
          }]
        }, [slots.default ? slots.default() : props.index])]);
      };
    }
  });
  const IndexAnchor = withInstall(stdin_default$E);
  const IndexBar = withInstall(stdin_default$F);
  const [name$y, bem$x, t$6] = createNamespace("list");
  const listProps = {
    error: Boolean,
    offset: makeNumericProp(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    errorText: String,
    direction: makeStringProp("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: truthProp
  };
  var stdin_default$D = vue.defineComponent({
    name: name$y,
    props: listProps,
    emits: ["load", "update:error", "update:loading"],
    setup(props, {
      emit,
      slots
    }) {
      const loading = vue.ref(props.loading);
      const root = vue.ref();
      const placeholder = vue.ref();
      const tabStatus = useTabStatus();
      const scrollParent = useScrollParent(root);
      const check = () => {
        vue.nextTick(() => {
          if (loading.value || props.finished || props.disabled || props.error || // skip check when inside an inactive tab
          (tabStatus == null ? void 0 : tabStatus.value) === false) {
            return;
          }
          const {
            direction
          } = props;
          const offset2 = +props.offset;
          const scrollParentRect = useRect(scrollParent);
          if (!scrollParentRect.height || isHidden(root)) {
            return;
          }
          let isReachEdge = false;
          const placeholderRect = useRect(placeholder);
          if (direction === "up") {
            isReachEdge = scrollParentRect.top - placeholderRect.top <= offset2;
          } else {
            isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset2;
          }
          if (isReachEdge) {
            loading.value = true;
            emit("update:loading", true);
            emit("load");
          }
        });
      };
      const renderFinishedText = () => {
        if (props.finished) {
          const text = slots.finished ? slots.finished() : props.finishedText;
          if (text) {
            return vue.createVNode("div", {
              "class": bem$x("finished-text")
            }, [text]);
          }
        }
      };
      const clickErrorText = () => {
        emit("update:error", false);
        check();
      };
      const renderErrorText = () => {
        if (props.error) {
          const text = slots.error ? slots.error() : props.errorText;
          if (text) {
            return vue.createVNode("div", {
              "role": "button",
              "class": bem$x("error-text"),
              "tabindex": 0,
              "onClick": clickErrorText
            }, [text]);
          }
        }
      };
      const renderLoading = () => {
        if (loading.value && !props.finished && !props.disabled) {
          return vue.createVNode("div", {
            "class": bem$x("loading")
          }, [slots.loading ? slots.loading() : vue.createVNode(Loading, {
            "class": bem$x("loading-icon")
          }, {
            default: () => [props.loadingText || t$6("loading")]
          })]);
        }
      };
      vue.watch(() => [props.loading, props.finished, props.error], check);
      if (tabStatus) {
        vue.watch(tabStatus, (tabActive) => {
          if (tabActive) {
            check();
          }
        });
      }
      vue.onUpdated(() => {
        loading.value = props.loading;
      });
      vue.onMounted(() => {
        if (props.immediateCheck) {
          check();
        }
      });
      useExpose({
        check
      });
      useEventListener("scroll", check, {
        target: scrollParent,
        passive: true
      });
      return () => {
        var _a;
        const Content = (_a = slots.default) == null ? void 0 : _a.call(slots);
        const Placeholder = vue.createVNode("div", {
          "ref": placeholder,
          "class": bem$x("placeholder")
        }, null);
        return vue.createVNode("div", {
          "ref": root,
          "role": "feed",
          "class": bem$x(),
          "aria-busy": loading.value
        }, [props.direction === "down" ? Content : Placeholder, renderLoading(), renderFinishedText(), renderErrorText(), props.direction === "up" ? Content : Placeholder]);
      };
    }
  });
  const List = withInstall(stdin_default$D);
  const [name$x, bem$w] = createNamespace("nav-bar");
  const navBarProps = {
    title: String,
    fixed: Boolean,
    zIndex: numericProp,
    border: truthProp,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: truthProp
  };
  var stdin_default$C = vue.defineComponent({
    name: name$x,
    props: navBarProps,
    emits: ["clickLeft", "clickRight"],
    setup(props, {
      emit,
      slots
    }) {
      const navBarRef = vue.ref();
      const renderPlaceholder = usePlaceholder(navBarRef, bem$w);
      const onClickLeft = (event) => emit("clickLeft", event);
      const onClickRight = (event) => emit("clickRight", event);
      const renderLeft = () => {
        if (slots.left) {
          return slots.left();
        }
        return [props.leftArrow && vue.createVNode(Icon, {
          "class": bem$w("arrow"),
          "name": "arrow-left"
        }, null), props.leftText && vue.createVNode("span", {
          "class": bem$w("text")
        }, [props.leftText])];
      };
      const renderRight = () => {
        if (slots.right) {
          return slots.right();
        }
        return vue.createVNode("span", {
          "class": bem$w("text")
        }, [props.rightText]);
      };
      const renderNavBar = () => {
        const {
          title,
          fixed,
          border,
          zIndex
        } = props;
        const style = getZIndexStyle(zIndex);
        const hasLeft = props.leftArrow || props.leftText || slots.left;
        const hasRight = props.rightText || slots.right;
        return vue.createVNode("div", {
          "ref": navBarRef,
          "style": style,
          "class": [bem$w({
            fixed
          }), {
            [BORDER_BOTTOM]: border,
            "van-safe-area-top": props.safeAreaInsetTop
          }]
        }, [vue.createVNode("div", {
          "class": bem$w("content")
        }, [hasLeft && vue.createVNode("div", {
          "class": [bem$w("left"), props.clickable ? HAPTICS_FEEDBACK : ""],
          "onClick": onClickLeft
        }, [renderLeft()]), vue.createVNode("div", {
          "class": [bem$w("title"), "van-ellipsis"]
        }, [slots.title ? slots.title() : title]), hasRight && vue.createVNode("div", {
          "class": [bem$w("right"), props.clickable ? HAPTICS_FEEDBACK : ""],
          "onClick": onClickRight
        }, [renderRight()])])]);
      };
      return () => {
        if (props.fixed && props.placeholder) {
          return renderPlaceholder(renderNavBar);
        }
        return renderNavBar();
      };
    }
  });
  const NavBar = withInstall(stdin_default$C);
  const [name$w, bem$v] = createNamespace("notice-bar");
  const noticeBarProps = {
    text: String,
    mode: String,
    color: String,
    delay: makeNumericProp(1),
    speed: makeNumericProp(60),
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null
    }
  };
  var stdin_default$B = vue.defineComponent({
    name: name$w,
    props: noticeBarProps,
    emits: ["close", "replay"],
    setup(props, {
      emit,
      slots
    }) {
      let wrapWidth = 0;
      let contentWidth = 0;
      let startTimer;
      const wrapRef = vue.ref();
      const contentRef = vue.ref();
      const state = vue.reactive({
        show: true,
        offset: 0,
        duration: 0
      });
      const renderLeftIcon = () => {
        if (slots["left-icon"]) {
          return slots["left-icon"]();
        }
        if (props.leftIcon) {
          return vue.createVNode(Icon, {
            "class": bem$v("left-icon"),
            "name": props.leftIcon
          }, null);
        }
      };
      const getRightIconName = () => {
        if (props.mode === "closeable") {
          return "cross";
        }
        if (props.mode === "link") {
          return "arrow";
        }
      };
      const onClickRightIcon = (event) => {
        if (props.mode === "closeable") {
          state.show = false;
          emit("close", event);
        }
      };
      const renderRightIcon = () => {
        if (slots["right-icon"]) {
          return slots["right-icon"]();
        }
        const name2 = getRightIconName();
        if (name2) {
          return vue.createVNode(Icon, {
            "name": name2,
            "class": bem$v("right-icon"),
            "onClick": onClickRightIcon
          }, null);
        }
      };
      const onTransitionEnd = () => {
        state.offset = wrapWidth;
        state.duration = 0;
        raf(() => {
          doubleRaf(() => {
            state.offset = -contentWidth;
            state.duration = (contentWidth + wrapWidth) / +props.speed;
            emit("replay");
          });
        });
      };
      const renderMarquee = () => {
        const ellipsis = props.scrollable === false && !props.wrapable;
        const style = {
          transform: state.offset ? `translateX(${state.offset}px)` : "",
          transitionDuration: `${state.duration}s`
        };
        return vue.createVNode("div", {
          "ref": wrapRef,
          "role": "marquee",
          "class": bem$v("wrap")
        }, [vue.createVNode("div", {
          "ref": contentRef,
          "style": style,
          "class": [bem$v("content"), {
            "van-ellipsis": ellipsis
          }],
          "onTransitionend": onTransitionEnd
        }, [slots.default ? slots.default() : props.text])]);
      };
      const reset = () => {
        const {
          delay,
          speed,
          scrollable
        } = props;
        const ms = isDef(delay) ? +delay * 1e3 : 0;
        wrapWidth = 0;
        contentWidth = 0;
        state.offset = 0;
        state.duration = 0;
        clearTimeout(startTimer);
        startTimer = setTimeout(() => {
          if (!wrapRef.value || !contentRef.value || scrollable === false) {
            return;
          }
          const wrapRefWidth = useRect(wrapRef).width;
          const contentRefWidth = useRect(contentRef).width;
          if (scrollable || contentRefWidth > wrapRefWidth) {
            doubleRaf(() => {
              wrapWidth = wrapRefWidth;
              contentWidth = contentRefWidth;
              state.offset = -contentWidth;
              state.duration = contentWidth / +speed;
            });
          }
        }, ms);
      };
      onPopupReopen(reset);
      onMountedOrActivated(reset);
      useEventListener("pageshow", reset);
      useExpose({
        reset
      });
      vue.watch(() => [props.text, props.scrollable], reset);
      return () => {
        const {
          color,
          wrapable,
          background
        } = props;
        return vue.withDirectives(vue.createVNode("div", {
          "role": "alert",
          "class": bem$v({
            wrapable
          }),
          "style": {
            color,
            background
          }
        }, [renderLeftIcon(), renderMarquee(), renderRightIcon()]), [[vue.vShow, state.show]]);
      };
    }
  });
  const NoticeBar = withInstall(stdin_default$B);
  const [name$v, bem$u] = createNamespace("notify");
  const notifyProps = extend({}, popupSharedProps, {
    type: makeStringProp("danger"),
    color: String,
    message: numericProp,
    position: makeStringProp("top"),
    className: unknownProp,
    background: String,
    lockScroll: Boolean
  });
  var stdin_default$A = vue.defineComponent({
    name: name$v,
    props: notifyProps,
    emits: ["update:show"],
    setup(props, {
      emit,
      slots
    }) {
      const updateShow = (show) => emit("update:show", show);
      return () => vue.createVNode(Popup, {
        "show": props.show,
        "class": [bem$u([props.type]), props.className],
        "style": {
          color: props.color,
          background: props.background
        },
        "overlay": false,
        "zIndex": props.zIndex,
        "position": props.position,
        "duration": 0.2,
        "lockScroll": props.lockScroll,
        "onUpdate:show": updateShow
      }, {
        default: () => [slots.default ? slots.default() : props.message]
      });
    }
  });
  const Notify = withInstall(stdin_default$A);
  const [name$u, bem$t] = createNamespace("key");
  const CollapseIcon = vue.createVNode("svg", {
    "class": bem$t("collapse-icon"),
    "viewBox": "0 0 30 24"
  }, [vue.createVNode("path", {
    "d": "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
    "fill": "currentColor"
  }, null)]);
  const DeleteIcon = vue.createVNode("svg", {
    "class": bem$t("delete-icon"),
    "viewBox": "0 0 32 22"
  }, [vue.createVNode("path", {
    "d": "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
    "fill": "currentColor"
  }, null)]);
  var stdin_default$z = vue.defineComponent({
    name: name$u,
    props: {
      type: String,
      text: numericProp,
      color: String,
      wider: Boolean,
      large: Boolean,
      loading: Boolean
    },
    emits: ["press"],
    setup(props, {
      emit,
      slots
    }) {
      const active = vue.ref(false);
      const touch = useTouch();
      const onTouchStart = (event) => {
        touch.start(event);
        active.value = true;
      };
      const onTouchMove = (event) => {
        touch.move(event);
        if (touch.direction.value) {
          active.value = false;
        }
      };
      const onTouchEnd = (event) => {
        if (active.value) {
          if (!slots.default) {
            preventDefault(event);
          }
          active.value = false;
          emit("press", props.text, props.type);
        }
      };
      const renderContent = () => {
        if (props.loading) {
          return vue.createVNode(Loading, {
            "class": bem$t("loading-icon")
          }, null);
        }
        const text = slots.default ? slots.default() : props.text;
        switch (props.type) {
          case "delete":
            return text || DeleteIcon;
          case "extra":
            return text || CollapseIcon;
          default:
            return text;
        }
      };
      return () => vue.createVNode("div", {
        "class": bem$t("wrapper", {
          wider: props.wider
        }),
        "onTouchstartPassive": onTouchStart,
        "onTouchmovePassive": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [vue.createVNode("div", {
        "role": "button",
        "tabindex": 0,
        "class": bem$t([props.color, {
          large: props.large,
          active: active.value,
          delete: props.type === "delete"
        }])
      }, [renderContent()])]);
    }
  });
  const [name$t, bem$s] = createNamespace("number-keyboard");
  const numberKeyboardProps = {
    show: Boolean,
    title: String,
    theme: makeStringProp("default"),
    zIndex: numericProp,
    teleport: [String, Object],
    maxlength: makeNumericProp(Infinity),
    modelValue: makeStringProp(""),
    transition: truthProp,
    blurOnClose: truthProp,
    showDeleteKey: truthProp,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: truthProp,
    safeAreaInsetBottom: truthProp,
    extraKey: {
      type: [String, Array],
      default: ""
    }
  };
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  var stdin_default$y = vue.defineComponent({
    name: name$t,
    inheritAttrs: false,
    props: numberKeyboardProps,
    emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
    setup(props, {
      emit,
      slots,
      attrs
    }) {
      const root = vue.ref();
      const genBasicKeys = () => {
        const keys2 = Array(9).fill("").map((_, i) => ({
          text: i + 1
        }));
        if (props.randomKeyOrder) {
          shuffle(keys2);
        }
        return keys2;
      };
      const genDefaultKeys = () => [...genBasicKeys(), {
        text: props.extraKey,
        type: "extra"
      }, {
        text: 0
      }, {
        text: props.showDeleteKey ? props.deleteButtonText : "",
        type: props.showDeleteKey ? "delete" : ""
      }];
      const genCustomKeys = () => {
        const keys2 = genBasicKeys();
        const {
          extraKey
        } = props;
        const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];
        if (extraKeys.length === 1) {
          keys2.push({
            text: 0,
            wider: true
          }, {
            text: extraKeys[0],
            type: "extra"
          });
        } else if (extraKeys.length === 2) {
          keys2.push({
            text: extraKeys[0],
            type: "extra"
          }, {
            text: 0
          }, {
            text: extraKeys[1],
            type: "extra"
          });
        }
        return keys2;
      };
      const keys = vue.computed(() => props.theme === "custom" ? genCustomKeys() : genDefaultKeys());
      const onBlur = () => {
        if (props.show) {
          emit("blur");
        }
      };
      const onClose = () => {
        emit("close");
        if (props.blurOnClose) {
          onBlur();
        }
      };
      const onAnimationEnd = () => emit(props.show ? "show" : "hide");
      const onPress = (text, type) => {
        if (text === "") {
          if (type === "extra") {
            onBlur();
          }
          return;
        }
        const value = props.modelValue;
        if (type === "delete") {
          emit("delete");
          emit("update:modelValue", value.slice(0, value.length - 1));
        } else if (type === "close") {
          onClose();
        } else if (value.length < +props.maxlength) {
          emit("input", text);
          emit("update:modelValue", value + text);
        }
      };
      const renderTitle = () => {
        const {
          title,
          theme,
          closeButtonText
        } = props;
        const leftSlot = slots["title-left"];
        const showClose = closeButtonText && theme === "default";
        const showTitle = title || showClose || leftSlot;
        if (!showTitle) {
          return;
        }
        return vue.createVNode("div", {
          "class": bem$s("header")
        }, [leftSlot && vue.createVNode("span", {
          "class": bem$s("title-left")
        }, [leftSlot()]), title && vue.createVNode("h2", {
          "class": bem$s("title")
        }, [title]), showClose && vue.createVNode("button", {
          "type": "button",
          "class": [bem$s("close"), HAPTICS_FEEDBACK],
          "onClick": onClose
        }, [closeButtonText])]);
      };
      const renderKeys = () => keys.value.map((key) => {
        const keySlots = {};
        if (key.type === "delete") {
          keySlots.default = slots.delete;
        }
        if (key.type === "extra") {
          keySlots.default = slots["extra-key"];
        }
        return vue.createVNode(stdin_default$z, {
          "key": key.text,
          "text": key.text,
          "type": key.type,
          "wider": key.wider,
          "color": key.color,
          "onPress": onPress
        }, keySlots);
      });
      const renderSidebar = () => {
        if (props.theme === "custom") {
          return vue.createVNode("div", {
            "class": bem$s("sidebar")
          }, [props.showDeleteKey && vue.createVNode(stdin_default$z, {
            "large": true,
            "text": props.deleteButtonText,
            "type": "delete",
            "onPress": onPress
          }, {
            delete: slots.delete
          }), vue.createVNode(stdin_default$z, {
            "large": true,
            "text": props.closeButtonText,
            "type": "close",
            "color": "blue",
            "loading": props.closeButtonLoading,
            "onPress": onPress
          }, null)]);
        }
      };
      vue.watch(() => props.show, (value) => {
        if (!props.transition) {
          emit(value ? "show" : "hide");
        }
      });
      if (props.hideOnClickOutside) {
        useClickAway(root, onBlur, {
          eventName: "touchstart"
        });
      }
      return () => {
        const Title = renderTitle();
        const Content = vue.createVNode(vue.Transition, {
          "name": props.transition ? "van-slide-up" : ""
        }, {
          default: () => [vue.withDirectives(vue.createVNode("div", vue.mergeProps({
            "ref": root,
            "style": getZIndexStyle(props.zIndex),
            "class": bem$s({
              unfit: !props.safeAreaInsetBottom,
              "with-title": !!Title
            }),
            "onAnimationend": onAnimationEnd,
            "onTouchstartPassive": stopPropagation
          }, attrs), [Title, vue.createVNode("div", {
            "class": bem$s("body")
          }, [vue.createVNode("div", {
            "class": bem$s("keys")
          }, [renderKeys()]), renderSidebar()])]), [[vue.vShow, props.show]])]
        });
        if (props.teleport) {
          return vue.createVNode(vue.Teleport, {
            "to": props.teleport
          }, {
            default: () => [Content]
          });
        }
        return Content;
      };
    }
  });
  const NumberKeyboard = withInstall(stdin_default$y);
  const [name$s, bem$r, t$5] = createNamespace("pagination");
  const makePage = (number, text, active) => ({
    number,
    text,
    active
  });
  const paginationProps = {
    mode: makeStringProp("multi"),
    prevText: String,
    nextText: String,
    pageCount: makeNumericProp(0),
    modelValue: makeNumberProp(0),
    totalItems: makeNumericProp(0),
    showPageSize: makeNumericProp(5),
    itemsPerPage: makeNumericProp(10),
    forceEllipses: Boolean
  };
  var stdin_default$x = vue.defineComponent({
    name: name$s,
    props: paginationProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const count = vue.computed(() => {
        const {
          pageCount,
          totalItems,
          itemsPerPage
        } = props;
        const count2 = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
        return Math.max(1, count2);
      });
      const pages = vue.computed(() => {
        const items = [];
        const pageCount = count.value;
        const showPageSize = +props.showPageSize;
        const {
          modelValue,
          forceEllipses
        } = props;
        let startPage = 1;
        let endPage = pageCount;
        const isMaxSized = showPageSize < pageCount;
        if (isMaxSized) {
          startPage = Math.max(modelValue - Math.floor(showPageSize / 2), 1);
          endPage = startPage + showPageSize - 1;
          if (endPage > pageCount) {
            endPage = pageCount;
            startPage = endPage - showPageSize + 1;
          }
        }
        for (let number = startPage; number <= endPage; number++) {
          const page = makePage(number, number, number === modelValue);
          items.push(page);
        }
        if (isMaxSized && showPageSize > 0 && forceEllipses) {
          if (startPage > 1) {
            const prevPages = makePage(startPage - 1, "...");
            items.unshift(prevPages);
          }
          if (endPage < pageCount) {
            const nextPages = makePage(endPage + 1, "...");
            items.push(nextPages);
          }
        }
        return items;
      });
      const updateModelValue = (value, emitChange) => {
        value = clamp(value, 1, count.value);
        if (props.modelValue !== value) {
          emit("update:modelValue", value);
          if (emitChange) {
            emit("change", value);
          }
        }
      };
      vue.watchEffect(() => updateModelValue(props.modelValue));
      const renderDesc = () => vue.createVNode("li", {
        "class": bem$r("page-desc")
      }, [slots.pageDesc ? slots.pageDesc() : `${props.modelValue}/${count.value}`]);
      const renderPrevButton = () => {
        const {
          mode,
          modelValue
        } = props;
        const slot = slots["prev-text"];
        const disabled = modelValue === 1;
        return vue.createVNode("li", {
          "class": [bem$r("item", {
            disabled,
            border: mode === "simple",
            prev: true
          }), BORDER_SURROUND]
        }, [vue.createVNode("button", {
          "type": "button",
          "disabled": disabled,
          "onClick": () => updateModelValue(modelValue - 1, true)
        }, [slot ? slot() : props.prevText || t$5("prev")])]);
      };
      const renderNextButton = () => {
        const {
          mode,
          modelValue
        } = props;
        const slot = slots["next-text"];
        const disabled = modelValue === count.value;
        return vue.createVNode("li", {
          "class": [bem$r("item", {
            disabled,
            border: mode === "simple",
            next: true
          }), BORDER_SURROUND]
        }, [vue.createVNode("button", {
          "type": "button",
          "disabled": disabled,
          "onClick": () => updateModelValue(modelValue + 1, true)
        }, [slot ? slot() : props.nextText || t$5("next")])]);
      };
      const renderPages = () => pages.value.map((page) => vue.createVNode("li", {
        "class": [bem$r("item", {
          active: page.active,
          page: true
        }), BORDER_SURROUND]
      }, [vue.createVNode("button", {
        "type": "button",
        "aria-current": page.active || void 0,
        "onClick": () => updateModelValue(page.number, true)
      }, [slots.page ? slots.page(page) : page.text])]));
      return () => vue.createVNode("nav", {
        "role": "navigation",
        "class": bem$r()
      }, [vue.createVNode("ul", {
        "class": bem$r("items")
      }, [renderPrevButton(), props.mode === "simple" ? renderDesc() : renderPages(), renderNextButton()])]);
    }
  });
  const Pagination = withInstall(stdin_default$x);
  const [name$r, bem$q] = createNamespace("password-input");
  const passwordInputProps = {
    info: String,
    mask: truthProp,
    value: makeStringProp(""),
    gutter: numericProp,
    length: makeNumericProp(6),
    focused: Boolean,
    errorInfo: String
  };
  var stdin_default$w = vue.defineComponent({
    name: name$r,
    props: passwordInputProps,
    emits: ["focus"],
    setup(props, {
      emit
    }) {
      const onTouchStart = (event) => {
        event.stopPropagation();
        emit("focus", event);
      };
      const renderPoints = () => {
        const Points = [];
        const {
          mask,
          value,
          gutter,
          focused
        } = props;
        const length = +props.length;
        for (let i = 0; i < length; i++) {
          const char = value[i];
          const showBorder = i !== 0 && !gutter;
          const showCursor = focused && i === value.length;
          let style;
          if (i !== 0 && gutter) {
            style = {
              marginLeft: addUnit(gutter)
            };
          }
          Points.push(vue.createVNode("li", {
            "class": [{
              [BORDER_LEFT]: showBorder
            }, bem$q("item", {
              focus: showCursor
            })],
            "style": style
          }, [mask ? vue.createVNode("i", {
            "style": {
              visibility: char ? "visible" : "hidden"
            }
          }, null) : char, showCursor && vue.createVNode("div", {
            "class": bem$q("cursor")
          }, null)]));
        }
        return Points;
      };
      return () => {
        const info = props.errorInfo || props.info;
        return vue.createVNode("div", {
          "class": bem$q()
        }, [vue.createVNode("ul", {
          "class": [bem$q("security"), {
            [BORDER_SURROUND]: !props.gutter
          }],
          "onTouchstartPassive": onTouchStart
        }, [renderPoints()]), info && vue.createVNode("div", {
          "class": bem$q(props.errorInfo ? "error-info" : "info")
        }, [info])]);
      };
    }
  });
  const PasswordInput = withInstall(stdin_default$w);
  const PickerGroup = withInstall(stdin_default$1q);
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width2 = clientRect.width / scaleX;
    var height2 = clientRect.height / scaleY;
    return {
      width: width2,
      height: height2,
      top: y,
      right: x + width2,
      bottom: y + height2,
      left: x,
      x,
      y
    };
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width2 = element.offsetWidth;
    var height2 = element.offsetHeight;
    if (Math.abs(clientRect.width - width2) <= 1) {
      width2 = clientRect.width;
    }
    if (Math.abs(clientRect.height - height2) <= 1) {
      height2 = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width2,
      height: height2
    };
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }
  function format(str) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return [].concat(args).reduce(function(p, c) {
      return p.replace(/%s/, c);
    }, str);
  }
  var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
  function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
      [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
        return self.indexOf(value) === index;
      }).forEach(function(key) {
        switch (key) {
          case "name":
            if (typeof modifier.name !== "string") {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:376", format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
            }
            break;
          case "enabled":
            if (typeof modifier.enabled !== "boolean") {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:381", format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
            }
            break;
          case "phase":
            if (modifierPhases.indexOf(modifier.phase) < 0) {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:386", format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
            }
            break;
          case "fn":
            if (typeof modifier.fn !== "function") {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:391", format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
            }
            break;
          case "effect":
            if (modifier.effect != null && typeof modifier.effect !== "function") {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:396", format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
            }
            break;
          case "requires":
            if (modifier.requires != null && !Array.isArray(modifier.requires)) {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:401", format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
            }
            break;
          case "requiresIfExists":
            if (!Array.isArray(modifier.requiresIfExists)) {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:406", format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
            }
            break;
          case "options":
          case "data":
            break;
          default:
            formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:413", 'PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
              return '"' + s + '"';
            }).join(", ") + '; but "' + key + '" was provided.');
        }
        modifier.requires && modifier.requires.forEach(function(requirement) {
          if (modifiers.find(function(mod) {
            return mod.name === requirement;
          }) == null) {
            formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:421", format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
          }
        });
      });
    });
  }
  function uniqueBy(arr, fn2) {
    var identifiers = /* @__PURE__ */ new Set();
    return arr.filter(function(item) {
      var identifier = fn2(item);
      if (!identifiers.has(identifier)) {
        identifiers.add(identifier);
        return true;
      }
    });
  }
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current2) {
      var existing = merged2[current2.name];
      merged2[current2.name] = existing ? Object.assign({}, existing, current2, {
        options: Object.assign({}, existing.options, current2.options),
        data: Object.assign({}, existing.data, current2.data)
      }) : current2;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
  var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions2;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
        modifiersData: {},
        elements: {
          reference,
          popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance2 = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions2, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          {
            var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
              var name2 = _ref.name;
              return name2;
            });
            validateModifiers(modifiers);
            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function(_ref2) {
                var name2 = _ref2.name;
                return name2 === "flip";
              });
              if (!flipModifier) {
                formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:590", ['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
              }
            }
            var _getComputedStyle = getComputedStyle(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
            if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
              return parseFloat(margin);
            })) {
              formatAppLog("warn", "at node_modules/@vant/popperjs/dist/index.esm.mjs:597", ['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
            }
          }
          runModifierEffects();
          return instance2.update();
        },
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
          if (!areValidElements(reference2, popper2)) {
            {
              formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:610", INVALID_ELEMENT_ERROR);
            }
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference2, getOffsetParent(popper2), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper2)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          var __debug_loops__ = 0;
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            {
              __debug_loops__ += 1;
              if (__debug_loops__ > 100) {
                formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:628", INFINITE_LOOP_ERROR);
                break;
              }
            }
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name2 = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name: name2,
                instance: instance2
              }) || state;
            }
          }
        },
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance2.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference, popper)) {
        {
          formatAppLog("error", "at node_modules/@vant/popperjs/dist/index.esm.mjs:661", INVALID_ELEMENT_ERROR);
        }
        return instance2;
      }
      instance2.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref3) {
          var name2 = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect3 = _ref3.effect;
          if (typeof effect3 === "function") {
            var cleanupFn = effect3({
              state,
              name: name2,
              instance: instance2,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance2;
    };
  }
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance2.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance2.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance2.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name2 = _ref.name;
    state.modifiersData[name2] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);
        if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    {
      var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
      if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
      })) {
        formatAppLog("warn", "at node_modules/@vant/popperjs/dist/index.esm.mjs:837", ["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
      }
    }
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name2) {
      var style = state.styles[name2] || {};
      var attributes = state.attributes[name2] || {};
      var element = state.elements[name2];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name22) {
        var value = attributes[name22];
        if (value === false) {
          element.removeAttribute(name22);
        } else {
          element.setAttribute(name22, value === true ? "" : value);
        }
      });
    });
  }
  function effect2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name2) {
        var element = state.elements[name2];
        var attributes = state.attributes[name2] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name2) ? state.styles[name2] : initialStyles[name2]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect2,
    requires: ["computeStyles"]
  };
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name2 = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name2] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  const useSyncPropRef = (getProp, setProp) => {
    const propRef = vue.ref(getProp());
    vue.watch(getProp, (value) => {
      if (value !== propRef.value) {
        propRef.value = value;
      }
    });
    vue.watch(propRef, (value) => {
      if (value !== getProp()) {
        setProp(value);
      }
    });
    return propRef;
  };
  const [name$q, bem$p] = createNamespace("popover");
  const popupProps = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"];
  const popoverProps = {
    show: Boolean,
    theme: makeStringProp("light"),
    overlay: Boolean,
    actions: makeArrayProp(),
    trigger: makeStringProp("click"),
    duration: numericProp,
    showArrow: truthProp,
    placement: makeStringProp("bottom"),
    iconPrefix: String,
    overlayClass: unknownProp,
    overlayStyle: Object,
    closeOnClickAction: truthProp,
    closeOnClickOverlay: truthProp,
    closeOnClickOutside: truthProp,
    offset: {
      type: Array,
      default: () => [0, 8]
    },
    teleport: {
      type: [String, Object],
      default: "body"
    }
  };
  var stdin_default$v = vue.defineComponent({
    name: name$q,
    props: popoverProps,
    emits: ["select", "touchstart", "update:show"],
    setup(props, {
      emit,
      slots,
      attrs
    }) {
      let popper;
      const popupRef = vue.ref();
      const wrapperRef = vue.ref();
      const popoverRef = vue.ref();
      const show = useSyncPropRef(() => props.show, (value) => emit("update:show", value));
      const getPopoverOptions = () => ({
        placement: props.placement,
        modifiers: [{
          name: "computeStyles",
          options: {
            adaptive: false,
            gpuAcceleration: false
          }
        }, extend({}, offset_default, {
          options: {
            offset: props.offset
          }
        })]
      });
      const createPopperInstance = () => {
        if (wrapperRef.value && popoverRef.value) {
          return createPopper(wrapperRef.value, popoverRef.value.popupRef.value, getPopoverOptions());
        }
        return null;
      };
      const updateLocation = () => {
        vue.nextTick(() => {
          if (!show.value) {
            return;
          }
          if (!popper) {
            popper = createPopperInstance();
            if (inBrowser$1) {
              window.addEventListener("animationend", updateLocation);
              window.addEventListener("transitionend", updateLocation);
            }
          } else {
            popper.setOptions(getPopoverOptions());
          }
        });
      };
      const updateShow = (value) => {
        show.value = value;
      };
      const onClickWrapper = () => {
        if (props.trigger === "click") {
          show.value = !show.value;
        }
      };
      const onClickAction = (action, index) => {
        if (action.disabled) {
          return;
        }
        emit("select", action, index);
        if (props.closeOnClickAction) {
          show.value = false;
        }
      };
      const onClickAway = () => {
        if (show.value && props.closeOnClickOutside && (!props.overlay || props.closeOnClickOverlay)) {
          show.value = false;
        }
      };
      const renderActionContent = (action, index) => {
        if (slots.action) {
          return slots.action({
            action,
            index
          });
        }
        return [action.icon && vue.createVNode(Icon, {
          "name": action.icon,
          "classPrefix": props.iconPrefix,
          "class": bem$p("action-icon")
        }, null), vue.createVNode("div", {
          "class": [bem$p("action-text"), BORDER_BOTTOM]
        }, [action.text])];
      };
      const renderAction = (action, index) => {
        const {
          icon,
          color,
          disabled,
          className
        } = action;
        return vue.createVNode("div", {
          "role": "menuitem",
          "class": [bem$p("action", {
            disabled,
            "with-icon": icon
          }), className],
          "style": {
            color
          },
          "tabindex": disabled ? void 0 : 0,
          "aria-disabled": disabled || void 0,
          "onClick": () => onClickAction(action, index)
        }, [renderActionContent(action, index)]);
      };
      vue.onMounted(() => {
        updateLocation();
        vue.watchEffect(() => {
          var _a;
          popupRef.value = (_a = popoverRef.value) == null ? void 0 : _a.popupRef.value;
        });
      });
      vue.onBeforeUnmount(() => {
        if (popper) {
          if (inBrowser$1) {
            window.removeEventListener("animationend", updateLocation);
            window.removeEventListener("transitionend", updateLocation);
          }
          popper.destroy();
          popper = null;
        }
      });
      vue.watch(() => [show.value, props.offset, props.placement], updateLocation);
      useClickAway([wrapperRef, popupRef], onClickAway, {
        eventName: "touchstart"
      });
      return () => {
        var _a;
        return vue.createVNode(vue.Fragment, null, [vue.createVNode("span", {
          "ref": wrapperRef,
          "class": bem$p("wrapper"),
          "onClick": onClickWrapper
        }, [(_a = slots.reference) == null ? void 0 : _a.call(slots)]), vue.createVNode(Popup, vue.mergeProps({
          "ref": popoverRef,
          "show": show.value,
          "class": bem$p([props.theme]),
          "position": "",
          "transition": "van-popover-zoom",
          "lockScroll": false,
          "onUpdate:show": updateShow
        }, attrs, pick(props, popupProps)), {
          default: () => [props.showArrow && vue.createVNode("div", {
            "class": bem$p("arrow")
          }, null), vue.createVNode("div", {
            "role": "menu",
            "class": bem$p("content")
          }, [slots.default ? slots.default() : props.actions.map(renderAction)])]
        })]);
      };
    }
  });
  const Popover = withInstall(stdin_default$v);
  const [name$p, bem$o] = createNamespace("progress");
  const progressProps = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: truthProp,
    pivotColor: String,
    trackColor: String,
    strokeWidth: numericProp,
    percentage: {
      type: numericProp,
      default: 0,
      validator: (value) => +value >= 0 && +value <= 100
    }
  };
  var stdin_default$u = vue.defineComponent({
    name: name$p,
    props: progressProps,
    setup(props) {
      const background = vue.computed(() => props.inactive ? void 0 : props.color);
      const renderPivot = () => {
        const {
          textColor,
          pivotText,
          pivotColor,
          percentage
        } = props;
        const text = pivotText != null ? pivotText : `${percentage}%`;
        if (props.showPivot && text) {
          const style = {
            color: textColor,
            left: `${+percentage}%`,
            transform: `translate(-${+percentage}%,-50%)`,
            background: pivotColor || background.value
          };
          return vue.createVNode("span", {
            "style": style,
            "class": bem$o("pivot", {
              inactive: props.inactive
            })
          }, [text]);
        }
      };
      return () => {
        const {
          trackColor,
          percentage,
          strokeWidth
        } = props;
        const rootStyle = {
          background: trackColor,
          height: addUnit(strokeWidth)
        };
        const portionStyle = {
          width: `${percentage}%`,
          background: background.value
        };
        return vue.createVNode("div", {
          "class": bem$o(),
          "style": rootStyle
        }, [vue.createVNode("span", {
          "class": bem$o("portion", {
            inactive: props.inactive
          }),
          "style": portionStyle
        }, null), renderPivot()]);
      };
    }
  });
  const Progress = withInstall(stdin_default$u);
  const [name$o, bem$n, t$4] = createNamespace("pull-refresh");
  const DEFAULT_HEAD_HEIGHT = 50;
  const TEXT_STATUS = ["pulling", "loosing", "success"];
  const pullRefreshProps = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: makeNumericProp(DEFAULT_HEAD_HEIGHT),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: numericProp,
    successDuration: makeNumericProp(500),
    animationDuration: makeNumericProp(300)
  };
  var stdin_default$t = vue.defineComponent({
    name: name$o,
    props: pullRefreshProps,
    emits: ["change", "refresh", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      let reachTop;
      const root = vue.ref();
      const track = vue.ref();
      const scrollParent = useScrollParent(root);
      const state = vue.reactive({
        status: "normal",
        distance: 0,
        duration: 0
      });
      const touch = useTouch();
      const getHeadStyle = () => {
        if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
          return {
            height: `${props.headHeight}px`
          };
        }
      };
      const isTouchable = () => state.status !== "loading" && state.status !== "success" && !props.disabled;
      const ease = (distance) => {
        const pullDistance = +(props.pullDistance || props.headHeight);
        if (distance > pullDistance) {
          if (distance < pullDistance * 2) {
            distance = pullDistance + (distance - pullDistance) / 2;
          } else {
            distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
          }
        }
        return Math.round(distance);
      };
      const setStatus = (distance, isLoading) => {
        const pullDistance = +(props.pullDistance || props.headHeight);
        state.distance = distance;
        if (isLoading) {
          state.status = "loading";
        } else if (distance === 0) {
          state.status = "normal";
        } else if (distance < pullDistance) {
          state.status = "pulling";
        } else {
          state.status = "loosing";
        }
        emit("change", {
          status: state.status,
          distance
        });
      };
      const getStatusText = () => {
        const {
          status
        } = state;
        if (status === "normal") {
          return "";
        }
        return props[`${status}Text`] || t$4(status);
      };
      const renderStatus = () => {
        const {
          status,
          distance
        } = state;
        if (slots[status]) {
          return slots[status]({
            distance
          });
        }
        const nodes = [];
        if (TEXT_STATUS.includes(status)) {
          nodes.push(vue.createVNode("div", {
            "class": bem$n("text")
          }, [getStatusText()]));
        }
        if (status === "loading") {
          nodes.push(vue.createVNode(Loading, {
            "class": bem$n("loading")
          }, {
            default: getStatusText
          }));
        }
        return nodes;
      };
      const showSuccessTip = () => {
        state.status = "success";
        setTimeout(() => {
          setStatus(0);
        }, +props.successDuration);
      };
      const checkPosition = (event) => {
        reachTop = getScrollTop(scrollParent.value) === 0;
        if (reachTop) {
          state.duration = 0;
          touch.start(event);
        }
      };
      const onTouchStart = (event) => {
        if (isTouchable()) {
          checkPosition(event);
        }
      };
      const onTouchMove = (event) => {
        if (isTouchable()) {
          if (!reachTop) {
            checkPosition(event);
          }
          const {
            deltaY
          } = touch;
          touch.move(event);
          if (reachTop && deltaY.value >= 0 && touch.isVertical()) {
            preventDefault(event);
            setStatus(ease(deltaY.value));
          }
        }
      };
      const onTouchEnd = () => {
        if (reachTop && touch.deltaY.value && isTouchable()) {
          state.duration = +props.animationDuration;
          if (state.status === "loosing") {
            setStatus(+props.headHeight, true);
            emit("update:modelValue", true);
            vue.nextTick(() => emit("refresh"));
          } else {
            setStatus(0);
          }
        }
      };
      vue.watch(() => props.modelValue, (value) => {
        state.duration = +props.animationDuration;
        if (value) {
          setStatus(+props.headHeight, true);
        } else if (slots.success || props.successText) {
          showSuccessTip();
        } else {
          setStatus(0, false);
        }
      });
      useEventListener("touchmove", onTouchMove, {
        target: track
      });
      return () => {
        var _a;
        const trackStyle = {
          transitionDuration: `${state.duration}ms`,
          transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : ""
        };
        return vue.createVNode("div", {
          "ref": root,
          "class": bem$n()
        }, [vue.createVNode("div", {
          "ref": track,
          "class": bem$n("track"),
          "style": trackStyle,
          "onTouchstartPassive": onTouchStart,
          "onTouchend": onTouchEnd,
          "onTouchcancel": onTouchEnd
        }, [vue.createVNode("div", {
          "class": bem$n("head"),
          "style": getHeadStyle()
        }, [renderStatus()]), (_a = slots.default) == null ? void 0 : _a.call(slots)])]);
      };
    }
  });
  const PullRefresh = withInstall(stdin_default$t);
  const [name$n, bem$m] = createNamespace("rate");
  function getRateStatus(value, index, allowHalf, readonly) {
    if (value >= index) {
      return {
        status: "full",
        value: 1
      };
    }
    if (value + 0.5 >= index && allowHalf && !readonly) {
      return {
        status: "half",
        value: 0.5
      };
    }
    if (value + 1 >= index && allowHalf && readonly) {
      const cardinal = 10 ** 10;
      return {
        status: "half",
        value: Math.round((value - index + 1) * cardinal) / cardinal
      };
    }
    return {
      status: "void",
      value: 0
    };
  }
  const rateProps = {
    size: numericProp,
    icon: makeStringProp("star"),
    color: String,
    count: makeNumericProp(5),
    gutter: numericProp,
    readonly: Boolean,
    disabled: Boolean,
    voidIcon: makeStringProp("star-o"),
    allowHalf: Boolean,
    voidColor: String,
    touchable: truthProp,
    iconPrefix: String,
    modelValue: makeNumberProp(0),
    disabledColor: String
  };
  var stdin_default$s = vue.defineComponent({
    name: name$n,
    props: rateProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit
    }) {
      const touch = useTouch();
      const [itemRefs, setItemRefs] = useRefs();
      const groupRef = vue.ref();
      const untouchable = () => props.readonly || props.disabled || !props.touchable;
      const list = vue.computed(() => Array(+props.count).fill("").map((_, i) => getRateStatus(props.modelValue, i + 1, props.allowHalf, props.readonly)));
      let ranges;
      let groupRefRect;
      let minRectTop = Number.MAX_SAFE_INTEGER;
      let maxRectTop = Number.MIN_SAFE_INTEGER;
      const updateRanges = () => {
        groupRefRect = useRect(groupRef);
        const rects = itemRefs.value.map(useRect);
        ranges = [];
        rects.forEach((rect, index) => {
          minRectTop = Math.min(rect.top, minRectTop);
          maxRectTop = Math.max(rect.top, maxRectTop);
          if (props.allowHalf) {
            ranges.push({
              score: index + 0.5,
              left: rect.left,
              top: rect.top,
              height: rect.height
            }, {
              score: index + 1,
              left: rect.left + rect.width / 2,
              top: rect.top,
              height: rect.height
            });
          } else {
            ranges.push({
              score: index + 1,
              left: rect.left,
              top: rect.top,
              height: rect.height
            });
          }
        });
      };
      const getScoreByPosition = (x, y) => {
        for (let i = ranges.length - 1; i > 0; i--) {
          if (y >= groupRefRect.top && y <= groupRefRect.bottom) {
            if (x > ranges[i].left && y >= ranges[i].top && y <= ranges[i].top + ranges[i].height) {
              return ranges[i].score;
            }
          } else {
            const curTop = y < groupRefRect.top ? minRectTop : maxRectTop;
            if (x > ranges[i].left && ranges[i].top === curTop) {
              return ranges[i].score;
            }
          }
        }
        return props.allowHalf ? 0.5 : 1;
      };
      const select = (index) => {
        if (!props.disabled && !props.readonly && index !== props.modelValue) {
          emit("update:modelValue", index);
          emit("change", index);
        }
      };
      const onTouchStart = (event) => {
        if (untouchable()) {
          return;
        }
        touch.start(event);
        updateRanges();
      };
      const onTouchMove = (event) => {
        if (untouchable()) {
          return;
        }
        touch.move(event);
        if (touch.isHorizontal()) {
          const {
            clientX,
            clientY
          } = event.touches[0];
          preventDefault(event);
          select(getScoreByPosition(clientX, clientY));
        }
      };
      const renderStar = (item, index) => {
        const {
          icon,
          size,
          color,
          count,
          gutter,
          voidIcon,
          disabled,
          voidColor,
          allowHalf,
          iconPrefix,
          disabledColor
        } = props;
        const score = index + 1;
        const isFull = item.status === "full";
        const isVoid = item.status === "void";
        const renderHalf = allowHalf && item.value > 0 && item.value < 1;
        let style;
        if (gutter && score !== +count) {
          style = {
            paddingRight: addUnit(gutter)
          };
        }
        const onClickItem = (event) => {
          updateRanges();
          select(allowHalf ? getScoreByPosition(event.clientX, event.clientY) : score);
        };
        return vue.createVNode("div", {
          "key": index,
          "ref": setItemRefs(index),
          "role": "radio",
          "style": style,
          "class": bem$m("item"),
          "tabindex": disabled ? void 0 : 0,
          "aria-setsize": count,
          "aria-posinset": score,
          "aria-checked": !isVoid,
          "onClick": onClickItem
        }, [vue.createVNode(Icon, {
          "size": size,
          "name": isFull ? icon : voidIcon,
          "class": bem$m("icon", {
            disabled,
            full: isFull
          }),
          "color": disabled ? disabledColor : isFull ? color : voidColor,
          "classPrefix": iconPrefix
        }, null), renderHalf && vue.createVNode(Icon, {
          "size": size,
          "style": {
            width: item.value + "em"
          },
          "name": isVoid ? voidIcon : icon,
          "class": bem$m("icon", ["half", {
            disabled,
            full: !isVoid
          }]),
          "color": disabled ? disabledColor : isVoid ? voidColor : color,
          "classPrefix": iconPrefix
        }, null)]);
      };
      useCustomFieldValue(() => props.modelValue);
      useEventListener("touchmove", onTouchMove, {
        target: groupRef
      });
      return () => vue.createVNode("div", {
        "ref": groupRef,
        "role": "radiogroup",
        "class": bem$m({
          readonly: props.readonly,
          disabled: props.disabled
        }),
        "tabindex": props.disabled ? void 0 : 0,
        "aria-disabled": props.disabled,
        "aria-readonly": props.readonly,
        "onTouchstartPassive": onTouchStart
      }, [list.value.map(renderStar)]);
    }
  });
  const Rate = withInstall(stdin_default$s);
  const Row = withInstall(stdin_default$_);
  const [name$m, bem$l, t$3] = createNamespace("search");
  const searchProps = extend({}, fieldSharedProps, {
    label: String,
    shape: makeStringProp("square"),
    leftIcon: makeStringProp("search"),
    clearable: truthProp,
    actionText: String,
    background: String,
    showAction: Boolean
  });
  var stdin_default$r = vue.defineComponent({
    name: name$m,
    props: searchProps,
    emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(props, {
      emit,
      slots,
      attrs
    }) {
      const id = useId();
      const fieldRef = vue.ref();
      const onCancel = () => {
        if (!slots.action) {
          emit("update:modelValue", "");
          emit("cancel");
        }
      };
      const onKeypress = (event) => {
        const ENTER_CODE = 13;
        if (event.keyCode === ENTER_CODE) {
          preventDefault(event);
          emit("search", props.modelValue);
        }
      };
      const getInputId = () => props.id || `${id}-input`;
      const renderLabel = () => {
        if (slots.label || props.label) {
          return vue.createVNode("label", {
            "class": bem$l("label"),
            "for": getInputId()
          }, [slots.label ? slots.label() : props.label]);
        }
      };
      const renderAction = () => {
        if (props.showAction) {
          const text = props.actionText || t$3("cancel");
          return vue.createVNode("div", {
            "class": bem$l("action"),
            "role": "button",
            "tabindex": 0,
            "onClick": onCancel
          }, [slots.action ? slots.action() : text]);
        }
      };
      const blur = () => {
        var _a;
        return (_a = fieldRef.value) == null ? void 0 : _a.blur();
      };
      const focus = () => {
        var _a;
        return (_a = fieldRef.value) == null ? void 0 : _a.focus();
      };
      const onBlur = (event) => emit("blur", event);
      const onFocus = (event) => emit("focus", event);
      const onClear = (event) => emit("clear", event);
      const onClickInput = (event) => emit("clickInput", event);
      const onClickLeftIcon = (event) => emit("clickLeftIcon", event);
      const onClickRightIcon = (event) => emit("clickRightIcon", event);
      const fieldPropNames = Object.keys(fieldSharedProps);
      const renderField = () => {
        const fieldAttrs = extend({}, attrs, pick(props, fieldPropNames), {
          id: getInputId()
        });
        const onInput = (value) => emit("update:modelValue", value);
        return vue.createVNode(Field, vue.mergeProps({
          "ref": fieldRef,
          "type": "search",
          "class": bem$l("field"),
          "border": false,
          "onBlur": onBlur,
          "onFocus": onFocus,
          "onClear": onClear,
          "onKeypress": onKeypress,
          "onClickInput": onClickInput,
          "onClickLeftIcon": onClickLeftIcon,
          "onClickRightIcon": onClickRightIcon,
          "onUpdate:modelValue": onInput
        }, fieldAttrs), pick(slots, ["left-icon", "right-icon"]));
      };
      useExpose({
        focus,
        blur
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": bem$l({
            "show-action": props.showAction
          }),
          "style": {
            background: props.background
          }
        }, [(_a = slots.left) == null ? void 0 : _a.call(slots), vue.createVNode("div", {
          "class": bem$l("content", props.shape)
        }, [renderLabel(), renderField()]), renderAction()]);
      };
    }
  });
  const Search = withInstall(stdin_default$r);
  const isImage = (name2) => name2 == null ? void 0 : name2.includes("/");
  const popupInheritKeys = [...popupSharedPropKeys, "round", "closeOnPopstate", "safeAreaInsetBottom"];
  const iconMap = {
    qq: "qq",
    link: "link-o",
    weibo: "weibo",
    qrcode: "qr",
    poster: "photo-o",
    wechat: "wechat",
    "weapp-qrcode": "miniprogram-o",
    "wechat-moments": "wechat-moments"
  };
  const [name$l, bem$k, t$2] = createNamespace("share-sheet");
  const shareSheetProps = extend({}, popupSharedProps, {
    title: String,
    round: truthProp,
    options: makeArrayProp(),
    cancelText: String,
    description: String,
    closeOnPopstate: truthProp,
    safeAreaInsetBottom: truthProp
  });
  var stdin_default$q = vue.defineComponent({
    name: name$l,
    props: shareSheetProps,
    emits: ["cancel", "select", "update:show"],
    setup(props, {
      emit,
      slots
    }) {
      const updateShow = (value) => emit("update:show", value);
      const onCancel = () => {
        updateShow(false);
        emit("cancel");
      };
      const onSelect = (option, index) => emit("select", option, index);
      const renderHeader = () => {
        const title = slots.title ? slots.title() : props.title;
        const description = slots.description ? slots.description() : props.description;
        if (title || description) {
          return vue.createVNode("div", {
            "class": bem$k("header")
          }, [title && vue.createVNode("h2", {
            "class": bem$k("title")
          }, [title]), description && vue.createVNode("span", {
            "class": bem$k("description")
          }, [description])]);
        }
      };
      const renderIcon = (icon) => {
        if (isImage(icon)) {
          return vue.createVNode("img", {
            "src": icon,
            "class": bem$k("image-icon")
          }, null);
        }
        return vue.createVNode("div", {
          "class": bem$k("icon", [icon])
        }, [vue.createVNode(Icon, {
          "name": iconMap[icon] || icon
        }, null)]);
      };
      const renderOption = (option, index) => {
        const {
          name: name2,
          icon,
          className,
          description
        } = option;
        return vue.createVNode("div", {
          "role": "button",
          "tabindex": 0,
          "class": [bem$k("option"), className, HAPTICS_FEEDBACK],
          "onClick": () => onSelect(option, index)
        }, [renderIcon(icon), name2 && vue.createVNode("span", {
          "class": bem$k("name")
        }, [name2]), description && vue.createVNode("span", {
          "class": bem$k("option-description")
        }, [description])]);
      };
      const renderOptions = (options, border) => vue.createVNode("div", {
        "class": bem$k("options", {
          border
        })
      }, [options.map(renderOption)]);
      const renderRows = () => {
        const {
          options
        } = props;
        if (Array.isArray(options[0])) {
          return options.map((item, index) => renderOptions(item, index !== 0));
        }
        return renderOptions(options);
      };
      const renderCancelButton = () => {
        var _a;
        const cancelText = (_a = props.cancelText) != null ? _a : t$2("cancel");
        if (slots.cancel || cancelText) {
          return vue.createVNode("button", {
            "type": "button",
            "class": bem$k("cancel"),
            "onClick": onCancel
          }, [slots.cancel ? slots.cancel() : cancelText]);
        }
      };
      return () => vue.createVNode(Popup, vue.mergeProps({
        "class": bem$k(),
        "position": "bottom",
        "onUpdate:show": updateShow
      }, pick(props, popupInheritKeys)), {
        default: () => [renderHeader(), renderRows(), renderCancelButton()]
      });
    }
  });
  const ShareSheet = withInstall(stdin_default$q);
  const [name$k, bem$j] = createNamespace("sidebar");
  const SIDEBAR_KEY = Symbol(name$k);
  const sidebarProps = {
    modelValue: makeNumericProp(0)
  };
  var stdin_default$p = vue.defineComponent({
    name: name$k,
    props: sidebarProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        linkChildren
      } = useChildren(SIDEBAR_KEY);
      const getActive = () => +props.modelValue;
      const setActive = (value) => {
        if (value !== getActive()) {
          emit("update:modelValue", value);
          emit("change", value);
        }
      };
      linkChildren({
        getActive,
        setActive
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "role": "tablist",
          "class": bem$j()
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
    }
  });
  const Sidebar = withInstall(stdin_default$p);
  const [name$j, bem$i] = createNamespace("sidebar-item");
  const sidebarItemProps = extend({}, routeProps, {
    dot: Boolean,
    title: String,
    badge: numericProp,
    disabled: Boolean,
    badgeProps: Object
  });
  var stdin_default$o = vue.defineComponent({
    name: name$j,
    props: sidebarItemProps,
    emits: ["click"],
    setup(props, {
      emit,
      slots
    }) {
      const route2 = useRoute();
      const {
        parent,
        index
      } = useParent(SIDEBAR_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/sidebar-item/SidebarItem.mjs:31", "[Vant] <SidebarItem> must be a child component of <Sidebar>.");
        }
        return;
      }
      const onClick = () => {
        if (props.disabled) {
          return;
        }
        emit("click", index.value);
        parent.setActive(index.value);
        route2();
      };
      return () => {
        const {
          dot,
          badge,
          title,
          disabled
        } = props;
        const selected = index.value === parent.getActive();
        return vue.createVNode("div", {
          "role": "tab",
          "class": bem$i({
            select: selected,
            disabled
          }),
          "tabindex": disabled ? void 0 : 0,
          "aria-selected": selected,
          "onClick": onClick
        }, [vue.createVNode(Badge, vue.mergeProps({
          "dot": dot,
          "class": bem$i("text"),
          "content": badge
        }, props.badgeProps), {
          default: () => [slots.title ? slots.title() : title]
        })]);
      };
    }
  });
  const SidebarItem = withInstall(stdin_default$o);
  const [name$i, bem$h] = createNamespace("skeleton-title");
  const skeletonTitleProps = {
    round: Boolean,
    titleWidth: numericProp
  };
  var stdin_default$n = vue.defineComponent({
    name: name$i,
    props: skeletonTitleProps,
    setup(props) {
      return () => vue.createVNode("h3", {
        "class": bem$h([{
          round: props.round
        }]),
        "style": {
          width: addUnit(props.titleWidth)
        }
      }, null);
    }
  });
  const SkeletonTitle = withInstall(stdin_default$n);
  var stdin_default$m = SkeletonTitle;
  const [name$h, bem$g] = createNamespace("skeleton-avatar");
  const skeletonAvatarProps = {
    avatarSize: numericProp,
    avatarShape: makeStringProp("round")
  };
  var stdin_default$l = vue.defineComponent({
    name: name$h,
    props: skeletonAvatarProps,
    setup(props) {
      return () => vue.createVNode("div", {
        "class": bem$g([props.avatarShape]),
        "style": getSizeStyle(props.avatarSize)
      }, null);
    }
  });
  const SkeletonAvatar = withInstall(stdin_default$l);
  var stdin_default$k = SkeletonAvatar;
  const DEFAULT_ROW_WIDTH = "100%";
  const skeletonParagraphProps = {
    round: Boolean,
    rowWidth: {
      type: numericProp,
      default: DEFAULT_ROW_WIDTH
    }
  };
  const [name$g, bem$f] = createNamespace("skeleton-paragraph");
  var stdin_default$j = vue.defineComponent({
    name: name$g,
    props: skeletonParagraphProps,
    setup(props) {
      return () => vue.createVNode("div", {
        "class": bem$f([{
          round: props.round
        }]),
        "style": {
          width: props.rowWidth
        }
      }, null);
    }
  });
  const SkeletonParagraph = withInstall(stdin_default$j);
  var stdin_default$i = SkeletonParagraph;
  const [name$f, bem$e] = createNamespace("skeleton");
  const DEFAULT_LAST_ROW_WIDTH = "60%";
  const skeletonProps = {
    row: makeNumericProp(0),
    round: Boolean,
    title: Boolean,
    titleWidth: numericProp,
    avatar: Boolean,
    avatarSize: numericProp,
    avatarShape: makeStringProp("round"),
    loading: truthProp,
    animate: truthProp,
    rowWidth: {
      type: [Number, String, Array],
      default: DEFAULT_ROW_WIDTH
    }
  };
  var stdin_default$h = vue.defineComponent({
    name: name$f,
    inheritAttrs: false,
    props: skeletonProps,
    setup(props, {
      slots,
      attrs
    }) {
      const renderAvatar = () => {
        if (props.avatar) {
          return vue.createVNode(stdin_default$k, {
            "avatarShape": props.avatarShape,
            "avatarSize": props.avatarSize
          }, null);
        }
      };
      const renderTitle = () => {
        if (props.title) {
          return vue.createVNode(stdin_default$m, {
            "round": props.round,
            "titleWidth": props.titleWidth
          }, null);
        }
      };
      const getRowWidth = (index) => {
        const {
          rowWidth
        } = props;
        if (rowWidth === DEFAULT_ROW_WIDTH && index === +props.row - 1) {
          return DEFAULT_LAST_ROW_WIDTH;
        }
        if (Array.isArray(rowWidth)) {
          return rowWidth[index];
        }
        return rowWidth;
      };
      const renderRows = () => Array(+props.row).fill("").map((_, i) => vue.createVNode(stdin_default$i, {
        "key": i,
        "round": props.round,
        "rowWidth": addUnit(getRowWidth(i))
      }, null));
      const renderContents = () => {
        if (slots.template) {
          return slots.template();
        }
        return vue.createVNode(vue.Fragment, null, [renderAvatar(), vue.createVNode("div", {
          "class": bem$e("content")
        }, [renderTitle(), renderRows()])]);
      };
      return () => {
        var _a;
        if (!props.loading) {
          return (_a = slots.default) == null ? void 0 : _a.call(slots);
        }
        return vue.createVNode("div", vue.mergeProps({
          "class": bem$e({
            animate: props.animate,
            round: props.round
          })
        }, attrs), [renderContents()]);
      };
    }
  });
  const Skeleton = withInstall(stdin_default$h);
  const [name$e, bem$d] = createNamespace("skeleton-image");
  const skeletonImageProps = {
    imageSize: numericProp,
    imageShape: makeStringProp("square")
  };
  var stdin_default$g = vue.defineComponent({
    name: name$e,
    props: skeletonImageProps,
    setup(props) {
      return () => vue.createVNode("div", {
        "class": bem$d([props.imageShape]),
        "style": getSizeStyle(props.imageSize)
      }, [vue.createVNode(Icon, {
        "name": "photo",
        "class": bem$d("icon")
      }, null)]);
    }
  });
  const SkeletonImage = withInstall(stdin_default$g);
  const [name$d, bem$c] = createNamespace("slider");
  const sliderProps = {
    min: makeNumericProp(0),
    max: makeNumericProp(100),
    step: makeNumericProp(1),
    range: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vertical: Boolean,
    barHeight: numericProp,
    buttonSize: numericProp,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  };
  var stdin_default$f = vue.defineComponent({
    name: name$d,
    props: sliderProps,
    emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      let buttonIndex;
      let current2;
      let startValue;
      const root = vue.ref();
      const slider = [vue.ref(), vue.ref()];
      const dragStatus = vue.ref();
      const touch = useTouch();
      const scope = vue.computed(() => Number(props.max) - Number(props.min));
      const wrapperStyle = vue.computed(() => {
        const crossAxis = props.vertical ? "width" : "height";
        return {
          background: props.inactiveColor,
          [crossAxis]: addUnit(props.barHeight)
        };
      });
      const isRange = (val) => props.range && Array.isArray(val);
      const calcMainAxis = () => {
        const {
          modelValue,
          min
        } = props;
        if (isRange(modelValue)) {
          return `${(modelValue[1] - modelValue[0]) * 100 / scope.value}%`;
        }
        return `${(modelValue - Number(min)) * 100 / scope.value}%`;
      };
      const calcOffset = () => {
        const {
          modelValue,
          min
        } = props;
        if (isRange(modelValue)) {
          return `${(modelValue[0] - Number(min)) * 100 / scope.value}%`;
        }
        return "0%";
      };
      const barStyle = vue.computed(() => {
        const mainAxis = props.vertical ? "height" : "width";
        const style = {
          [mainAxis]: calcMainAxis(),
          background: props.activeColor
        };
        if (dragStatus.value) {
          style.transition = "none";
        }
        const getPositionKey = () => {
          if (props.vertical) {
            return props.reverse ? "bottom" : "top";
          }
          return props.reverse ? "right" : "left";
        };
        style[getPositionKey()] = calcOffset();
        return style;
      });
      const format2 = (value) => {
        const min = +props.min;
        const max = +props.max;
        const step = +props.step;
        value = clamp(value, min, max);
        const diff = Math.round((value - min) / step) * step;
        return addNumber(min, diff);
      };
      const handleRangeValue = (value) => {
        var _a, _b;
        const left2 = (_a = value[0]) != null ? _a : Number(props.min);
        const right2 = (_b = value[1]) != null ? _b : Number(props.max);
        return left2 > right2 ? [right2, left2] : [left2, right2];
      };
      const updateValue = (value, end2) => {
        if (isRange(value)) {
          value = handleRangeValue(value).map(format2);
        } else {
          value = format2(value);
        }
        if (!isSameValue(value, props.modelValue)) {
          emit("update:modelValue", value);
        }
        if (end2 && !isSameValue(value, startValue)) {
          emit("change", value);
        }
      };
      const onClick = (event) => {
        event.stopPropagation();
        if (props.disabled || props.readonly) {
          return;
        }
        const {
          min,
          reverse,
          vertical,
          modelValue
        } = props;
        const rect = useRect(root);
        const getDelta = () => {
          if (vertical) {
            if (reverse) {
              return rect.bottom - event.clientY;
            }
            return event.clientY - rect.top;
          }
          if (reverse) {
            return rect.right - event.clientX;
          }
          return event.clientX - rect.left;
        };
        const total = vertical ? rect.height : rect.width;
        const value = Number(min) + getDelta() / total * scope.value;
        if (isRange(modelValue)) {
          const [left2, right2] = modelValue;
          const middle = (left2 + right2) / 2;
          if (value <= middle) {
            updateValue([value, right2], true);
          } else {
            updateValue([left2, value], true);
          }
        } else {
          updateValue(value, true);
        }
      };
      const onTouchStart = (event) => {
        if (props.disabled || props.readonly) {
          return;
        }
        touch.start(event);
        current2 = props.modelValue;
        if (isRange(current2)) {
          startValue = current2.map(format2);
        } else {
          startValue = format2(current2);
        }
        dragStatus.value = "start";
      };
      const onTouchMove = (event) => {
        if (props.disabled || props.readonly) {
          return;
        }
        if (dragStatus.value === "start") {
          emit("dragStart", event);
        }
        preventDefault(event, true);
        touch.move(event);
        dragStatus.value = "dragging";
        const rect = useRect(root);
        const delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
        const total = props.vertical ? rect.height : rect.width;
        let diff = delta / total * scope.value;
        if (props.reverse) {
          diff = -diff;
        }
        if (isRange(startValue)) {
          const index = props.reverse ? 1 - buttonIndex : buttonIndex;
          current2[index] = startValue[index] + diff;
        } else {
          current2 = startValue + diff;
        }
        updateValue(current2);
      };
      const onTouchEnd = (event) => {
        if (props.disabled || props.readonly) {
          return;
        }
        if (dragStatus.value === "dragging") {
          updateValue(current2, true);
          emit("dragEnd", event);
        }
        dragStatus.value = "";
      };
      const getButtonClassName = (index) => {
        if (typeof index === "number") {
          const position = ["left", "right"];
          return bem$c(`button-wrapper`, position[index]);
        }
        return bem$c("button-wrapper", props.reverse ? "left" : "right");
      };
      const renderButtonContent = (value, index) => {
        if (typeof index === "number") {
          const slot = slots[index === 0 ? "left-button" : "right-button"];
          if (slot) {
            return slot({
              value
            });
          }
        }
        if (slots.button) {
          return slots.button({
            value
          });
        }
        return vue.createVNode("div", {
          "class": bem$c("button"),
          "style": getSizeStyle(props.buttonSize)
        }, null);
      };
      const renderButton = (index) => {
        const current22 = typeof index === "number" ? props.modelValue[index] : props.modelValue;
        return vue.createVNode("div", {
          "ref": slider[index != null ? index : 0],
          "role": "slider",
          "class": getButtonClassName(index),
          "tabindex": props.disabled ? void 0 : 0,
          "aria-valuemin": props.min,
          "aria-valuenow": current22,
          "aria-valuemax": props.max,
          "aria-disabled": props.disabled || void 0,
          "aria-readonly": props.readonly || void 0,
          "aria-orientation": props.vertical ? "vertical" : "horizontal",
          "onTouchstartPassive": (event) => {
            if (typeof index === "number") {
              buttonIndex = index;
            }
            onTouchStart(event);
          },
          "onTouchend": onTouchEnd,
          "onTouchcancel": onTouchEnd,
          "onClick": stopPropagation
        }, [renderButtonContent(current22, index)]);
      };
      updateValue(props.modelValue);
      useCustomFieldValue(() => props.modelValue);
      slider.forEach((item) => {
        useEventListener("touchmove", onTouchMove, {
          target: item
        });
      });
      return () => vue.createVNode("div", {
        "ref": root,
        "style": wrapperStyle.value,
        "class": bem$c({
          vertical: props.vertical,
          disabled: props.disabled
        }),
        "onClick": onClick
      }, [vue.createVNode("div", {
        "class": bem$c("bar"),
        "style": barStyle.value
      }, [props.range ? [renderButton(0), renderButton(1)] : renderButton()])]);
    }
  });
  const Slider = withInstall(stdin_default$f);
  const [name$c, bem$b] = createNamespace("space");
  const spaceProps = {
    align: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: 8
    },
    wrap: Boolean,
    fill: Boolean
  };
  function filterEmpty(children = []) {
    const nodes = [];
    children.forEach((child) => {
      if (Array.isArray(child)) {
        nodes.push(...child);
      } else if (child.type === vue.Fragment) {
        nodes.push(...filterEmpty(child.children));
      } else {
        nodes.push(child);
      }
    });
    return nodes.filter((c) => {
      var _a;
      return !(c && (c.type === vue.Comment || c.type === vue.Fragment && ((_a = c.children) == null ? void 0 : _a.length) === 0 || c.type === vue.Text && c.children.trim() === ""));
    });
  }
  var stdin_default$e = vue.defineComponent({
    name: name$c,
    props: spaceProps,
    setup(props, {
      slots
    }) {
      const mergedAlign = vue.computed(() => {
        var _a;
        return (_a = props.align) != null ? _a : props.direction === "horizontal" ? "center" : "";
      });
      const getMargin = (size) => {
        if (typeof size === "number") {
          return size + "px";
        }
        return size;
      };
      const getMarginStyle = (isLast) => {
        const style = {};
        const marginRight = `${getMargin(Array.isArray(props.size) ? props.size[0] : props.size)}`;
        const marginBottom = `${getMargin(Array.isArray(props.size) ? props.size[1] : props.size)}`;
        if (isLast) {
          return props.wrap ? {
            marginBottom
          } : {};
        }
        if (props.direction === "horizontal") {
          style.marginRight = marginRight;
        }
        if (props.direction === "vertical" || props.wrap) {
          style.marginBottom = marginBottom;
        }
        return style;
      };
      return () => {
        var _a;
        const children = filterEmpty((_a = slots.default) == null ? void 0 : _a.call(slots));
        return vue.createVNode("div", {
          "class": [bem$b({
            [props.direction]: props.direction,
            [`align-${mergedAlign.value}`]: mergedAlign.value,
            wrap: props.wrap,
            fill: props.fill
          })]
        }, [children.map((c, i) => vue.createVNode("div", {
          "key": `item-${i}`,
          "class": `${name$c}-item`,
          "style": getMarginStyle(i === children.length - 1)
        }, [c]))]);
      };
    }
  });
  const Space = withInstall(stdin_default$e);
  const [name$b, bem$a] = createNamespace("steps");
  const stepsProps = {
    active: makeNumericProp(0),
    direction: makeStringProp("horizontal"),
    activeIcon: makeStringProp("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String
  };
  const STEPS_KEY = Symbol(name$b);
  var stdin_default$d = vue.defineComponent({
    name: name$b,
    props: stepsProps,
    emits: ["clickStep"],
    setup(props, {
      emit,
      slots
    }) {
      const {
        linkChildren
      } = useChildren(STEPS_KEY);
      const onClickStep = (index) => emit("clickStep", index);
      linkChildren({
        props,
        onClickStep
      });
      return () => {
        var _a;
        return vue.createVNode("div", {
          "class": bem$a([props.direction])
        }, [vue.createVNode("div", {
          "class": bem$a("items")
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
      };
    }
  });
  const [name$a, bem$9] = createNamespace("step");
  var stdin_default$c = vue.defineComponent({
    name: name$a,
    setup(props, {
      slots
    }) {
      const {
        parent,
        index
      } = useParent(STEPS_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/step/Step.mjs:19", "[Vant] <Step> must be a child component of <Steps>.");
        }
        return;
      }
      const parentProps = parent.props;
      const getStatus = () => {
        const active = +parentProps.active;
        if (index.value < active) {
          return "finish";
        }
        return index.value === active ? "process" : "waiting";
      };
      const isActive = () => getStatus() === "process";
      const lineStyle = vue.computed(() => ({
        background: getStatus() === "finish" ? parentProps.activeColor : parentProps.inactiveColor
      }));
      const titleStyle = vue.computed(() => {
        if (isActive()) {
          return {
            color: parentProps.activeColor
          };
        }
        if (getStatus() === "waiting") {
          return {
            color: parentProps.inactiveColor
          };
        }
      });
      const onClickStep = () => parent.onClickStep(index.value);
      const renderCircle = () => {
        const {
          iconPrefix,
          finishIcon,
          activeIcon,
          activeColor,
          inactiveIcon
        } = parentProps;
        if (isActive()) {
          if (slots["active-icon"]) {
            return slots["active-icon"]();
          }
          return vue.createVNode(Icon, {
            "class": bem$9("icon", "active"),
            "name": activeIcon,
            "color": activeColor,
            "classPrefix": iconPrefix
          }, null);
        }
        if (getStatus() === "finish" && (finishIcon || slots["finish-icon"])) {
          if (slots["finish-icon"]) {
            return slots["finish-icon"]();
          }
          return vue.createVNode(Icon, {
            "class": bem$9("icon", "finish"),
            "name": finishIcon,
            "color": activeColor,
            "classPrefix": iconPrefix
          }, null);
        }
        if (slots["inactive-icon"]) {
          return slots["inactive-icon"]();
        }
        if (inactiveIcon) {
          return vue.createVNode(Icon, {
            "class": bem$9("icon"),
            "name": inactiveIcon,
            "classPrefix": iconPrefix
          }, null);
        }
        return vue.createVNode("i", {
          "class": bem$9("circle"),
          "style": lineStyle.value
        }, null);
      };
      return () => {
        var _a;
        const status = getStatus();
        return vue.createVNode("div", {
          "class": [BORDER, bem$9([parentProps.direction, {
            [status]: status
          }])]
        }, [vue.createVNode("div", {
          "class": bem$9("title", {
            active: isActive()
          }),
          "style": titleStyle.value,
          "onClick": onClickStep
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), vue.createVNode("div", {
          "class": bem$9("circle-container"),
          "onClick": onClickStep
        }, [renderCircle()]), vue.createVNode("div", {
          "class": bem$9("line"),
          "style": lineStyle.value
        }, null)]);
      };
    }
  });
  const Step = withInstall(stdin_default$c);
  const [name$9, bem$8] = createNamespace("stepper");
  const LONG_PRESS_INTERVAL = 200;
  const isEqual = (value1, value2) => String(value1) === String(value2);
  const stepperProps = {
    min: makeNumericProp(1),
    max: makeNumericProp(Infinity),
    name: makeNumericProp(""),
    step: makeNumericProp(1),
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    showPlus: truthProp,
    showMinus: truthProp,
    showInput: truthProp,
    longPress: truthProp,
    autoFixed: truthProp,
    allowEmpty: Boolean,
    modelValue: numericProp,
    inputWidth: numericProp,
    buttonSize: numericProp,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: makeNumericProp(1),
    decimalLength: numericProp
  };
  var stdin_default$b = vue.defineComponent({
    name: name$9,
    props: stepperProps,
    emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
    setup(props, {
      emit
    }) {
      const format2 = (value, autoFixed = true) => {
        const {
          min,
          max,
          allowEmpty,
          decimalLength
        } = props;
        if (allowEmpty && value === "") {
          return value;
        }
        value = formatNumber(String(value), !props.integer);
        value = value === "" ? 0 : +value;
        value = Number.isNaN(value) ? +min : value;
        value = autoFixed ? Math.max(Math.min(+max, value), +min) : value;
        if (isDef(decimalLength)) {
          value = value.toFixed(+decimalLength);
        }
        return value;
      };
      const getInitialValue = () => {
        var _a;
        const defaultValue = (_a = props.modelValue) != null ? _a : props.defaultValue;
        const value = format2(defaultValue);
        if (!isEqual(value, props.modelValue)) {
          emit("update:modelValue", value);
        }
        return value;
      };
      let actionType;
      const inputRef = vue.ref();
      const current2 = vue.ref(getInitialValue());
      const minusDisabled = vue.computed(() => props.disabled || props.disableMinus || +current2.value <= +props.min);
      const plusDisabled = vue.computed(() => props.disabled || props.disablePlus || +current2.value >= +props.max);
      const inputStyle = vue.computed(() => ({
        width: addUnit(props.inputWidth),
        height: addUnit(props.buttonSize)
      }));
      const buttonStyle = vue.computed(() => getSizeStyle(props.buttonSize));
      const check = () => {
        const value = format2(current2.value);
        if (!isEqual(value, current2.value)) {
          current2.value = value;
        }
      };
      const setValue = (value) => {
        if (props.beforeChange) {
          callInterceptor(props.beforeChange, {
            args: [value],
            done() {
              current2.value = value;
            }
          });
        } else {
          current2.value = value;
        }
      };
      const onChange = () => {
        if (actionType === "plus" && plusDisabled.value || actionType === "minus" && minusDisabled.value) {
          emit("overlimit", actionType);
          return;
        }
        const diff = actionType === "minus" ? -props.step : +props.step;
        const value = format2(addNumber(+current2.value, diff));
        setValue(value);
        emit(actionType);
      };
      const onInput = (event) => {
        const input = event.target;
        const {
          value
        } = input;
        const {
          decimalLength
        } = props;
        let formatted = formatNumber(String(value), !props.integer);
        if (isDef(decimalLength) && formatted.includes(".")) {
          const pair = formatted.split(".");
          formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`;
        }
        if (props.beforeChange) {
          input.value = String(current2.value);
        } else if (!isEqual(value, formatted)) {
          input.value = formatted;
        }
        const isNumeric2 = formatted === String(+formatted);
        setValue(isNumeric2 ? +formatted : formatted);
      };
      const onFocus = (event) => {
        var _a;
        if (props.disableInput) {
          (_a = inputRef.value) == null ? void 0 : _a.blur();
        } else {
          emit("focus", event);
        }
      };
      const onBlur = (event) => {
        const input = event.target;
        const value = format2(input.value, props.autoFixed);
        input.value = String(value);
        current2.value = value;
        vue.nextTick(() => {
          emit("blur", event);
          resetScroll();
        });
      };
      let isLongPress;
      let longPressTimer;
      const longPressStep = () => {
        longPressTimer = setTimeout(() => {
          onChange();
          longPressStep();
        }, LONG_PRESS_INTERVAL);
      };
      const onTouchStart = () => {
        if (props.longPress) {
          isLongPress = false;
          clearTimeout(longPressTimer);
          longPressTimer = setTimeout(() => {
            isLongPress = true;
            onChange();
            longPressStep();
          }, LONG_PRESS_START_TIME);
        }
      };
      const onTouchEnd = (event) => {
        if (props.longPress) {
          clearTimeout(longPressTimer);
          if (isLongPress) {
            preventDefault(event);
          }
        }
      };
      const onMousedown = (event) => {
        if (props.disableInput) {
          preventDefault(event);
        }
      };
      const createListeners = (type) => ({
        onClick: (event) => {
          preventDefault(event);
          actionType = type;
          onChange();
        },
        onTouchstartPassive: () => {
          actionType = type;
          onTouchStart();
        },
        onTouchend: onTouchEnd,
        onTouchcancel: onTouchEnd
      });
      vue.watch(() => [props.max, props.min, props.integer, props.decimalLength], check);
      vue.watch(() => props.modelValue, (value) => {
        if (!isEqual(value, current2.value)) {
          current2.value = format2(value);
        }
      });
      vue.watch(current2, (value) => {
        emit("update:modelValue", value);
        emit("change", value, {
          name: props.name
        });
      });
      useCustomFieldValue(() => props.modelValue);
      return () => vue.createVNode("div", {
        "role": "group",
        "class": bem$8([props.theme])
      }, [vue.withDirectives(vue.createVNode("button", vue.mergeProps({
        "type": "button",
        "style": buttonStyle.value,
        "class": [bem$8("minus", {
          disabled: minusDisabled.value
        }), {
          [HAPTICS_FEEDBACK]: !minusDisabled.value
        }],
        "aria-disabled": minusDisabled.value || void 0
      }, createListeners("minus")), null), [[vue.vShow, props.showMinus]]), vue.withDirectives(vue.createVNode("input", {
        "ref": inputRef,
        "type": props.integer ? "tel" : "text",
        "role": "spinbutton",
        "class": bem$8("input"),
        "value": current2.value,
        "style": inputStyle.value,
        "disabled": props.disabled,
        "readonly": props.disableInput,
        "inputmode": props.integer ? "numeric" : "decimal",
        "placeholder": props.placeholder,
        "aria-valuemax": props.max,
        "aria-valuemin": props.min,
        "aria-valuenow": current2.value,
        "onBlur": onBlur,
        "onInput": onInput,
        "onFocus": onFocus,
        "onMousedown": onMousedown
      }, null), [[vue.vShow, props.showInput]]), vue.withDirectives(vue.createVNode("button", vue.mergeProps({
        "type": "button",
        "style": buttonStyle.value,
        "class": [bem$8("plus", {
          disabled: plusDisabled.value
        }), {
          [HAPTICS_FEEDBACK]: !plusDisabled.value
        }],
        "aria-disabled": plusDisabled.value || void 0
      }, createListeners("plus")), null), [[vue.vShow, props.showPlus]])]);
    }
  });
  const Stepper = withInstall(stdin_default$b);
  const Steps = withInstall(stdin_default$d);
  const [name$8, bem$7, t$1] = createNamespace("submit-bar");
  const submitBarProps = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: makeStringProp("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: makeStringProp("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: makeNumericProp(2),
    safeAreaInsetBottom: truthProp
  };
  var stdin_default$a = vue.defineComponent({
    name: name$8,
    props: submitBarProps,
    emits: ["submit"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const renderPlaceholder = usePlaceholder(root, bem$7);
      const renderText = () => {
        const {
          price,
          label,
          currency,
          textAlign,
          suffixLabel,
          decimalLength
        } = props;
        if (typeof price === "number") {
          const pricePair = (price / 100).toFixed(+decimalLength).split(".");
          const decimal = decimalLength ? `.${pricePair[1]}` : "";
          return vue.createVNode("div", {
            "class": bem$7("text"),
            "style": {
              textAlign
            }
          }, [vue.createVNode("span", null, [label || t$1("label")]), vue.createVNode("span", {
            "class": bem$7("price")
          }, [currency, vue.createVNode("span", {
            "class": bem$7("price-integer")
          }, [pricePair[0]]), decimal]), suffixLabel && vue.createVNode("span", {
            "class": bem$7("suffix-label")
          }, [suffixLabel])]);
        }
      };
      const renderTip = () => {
        var _a;
        const {
          tip,
          tipIcon
        } = props;
        if (slots.tip || tip) {
          return vue.createVNode("div", {
            "class": bem$7("tip")
          }, [tipIcon && vue.createVNode(Icon, {
            "class": bem$7("tip-icon"),
            "name": tipIcon
          }, null), tip && vue.createVNode("span", {
            "class": bem$7("tip-text")
          }, [tip]), (_a = slots.tip) == null ? void 0 : _a.call(slots)]);
        }
      };
      const onClickButton = () => emit("submit");
      const renderButton = () => {
        if (slots.button) {
          return slots.button();
        }
        return vue.createVNode(Button, {
          "round": true,
          "type": props.buttonType,
          "text": props.buttonText,
          "class": bem$7("button", props.buttonType),
          "color": props.buttonColor,
          "loading": props.loading,
          "disabled": props.disabled,
          "onClick": onClickButton
        }, null);
      };
      const renderSubmitBar = () => {
        var _a, _b;
        return vue.createVNode("div", {
          "ref": root,
          "class": [bem$7(), {
            "van-safe-area-bottom": props.safeAreaInsetBottom
          }]
        }, [(_a = slots.top) == null ? void 0 : _a.call(slots), renderTip(), vue.createVNode("div", {
          "class": bem$7("bar")
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots), renderText(), renderButton()])]);
      };
      return () => {
        if (props.placeholder) {
          return renderPlaceholder(renderSubmitBar);
        }
        return renderSubmitBar();
      };
    }
  });
  const SubmitBar = withInstall(stdin_default$a);
  const [name$7, bem$6] = createNamespace("swipe-cell");
  const swipeCellProps = {
    name: makeNumericProp(""),
    disabled: Boolean,
    leftWidth: numericProp,
    rightWidth: numericProp,
    beforeClose: Function,
    stopPropagation: Boolean
  };
  var stdin_default$9 = vue.defineComponent({
    name: name$7,
    props: swipeCellProps,
    emits: ["open", "close", "click"],
    setup(props, {
      emit,
      slots
    }) {
      let opened;
      let lockClick2;
      let startOffset;
      const root = vue.ref();
      const leftRef = vue.ref();
      const rightRef = vue.ref();
      const state = vue.reactive({
        offset: 0,
        dragging: false
      });
      const touch = useTouch();
      const getWidthByRef = (ref2) => ref2.value ? useRect(ref2).width : 0;
      const leftWidth = vue.computed(() => isDef(props.leftWidth) ? +props.leftWidth : getWidthByRef(leftRef));
      const rightWidth = vue.computed(() => isDef(props.rightWidth) ? +props.rightWidth : getWidthByRef(rightRef));
      const open = (side) => {
        state.offset = side === "left" ? leftWidth.value : -rightWidth.value;
        if (!opened) {
          opened = true;
          emit("open", {
            name: props.name,
            position: side
          });
        }
      };
      const close = (position) => {
        state.offset = 0;
        if (opened) {
          opened = false;
          emit("close", {
            name: props.name,
            position
          });
        }
      };
      const toggle = (side) => {
        const offset2 = Math.abs(state.offset);
        const THRESHOLD = 0.15;
        const threshold = opened ? 1 - THRESHOLD : THRESHOLD;
        const width2 = side === "left" ? leftWidth.value : rightWidth.value;
        if (width2 && offset2 > width2 * threshold) {
          open(side);
        } else {
          close(side);
        }
      };
      const onTouchStart = (event) => {
        if (!props.disabled) {
          startOffset = state.offset;
          touch.start(event);
        }
      };
      const onTouchMove = (event) => {
        if (props.disabled) {
          return;
        }
        const {
          deltaX
        } = touch;
        touch.move(event);
        if (touch.isHorizontal()) {
          lockClick2 = true;
          state.dragging = true;
          const isEdge = !opened || deltaX.value * startOffset < 0;
          if (isEdge) {
            preventDefault(event, props.stopPropagation);
          }
          state.offset = clamp(deltaX.value + startOffset, -rightWidth.value, leftWidth.value);
        }
      };
      const onTouchEnd = () => {
        if (state.dragging) {
          state.dragging = false;
          toggle(state.offset > 0 ? "left" : "right");
          setTimeout(() => {
            lockClick2 = false;
          }, 0);
        }
      };
      const onClick = (position = "outside") => {
        emit("click", position);
        if (opened && !lockClick2) {
          callInterceptor(props.beforeClose, {
            args: [{
              name: props.name,
              position
            }],
            done: () => close(position)
          });
        }
      };
      const getClickHandler = (position, stop) => (event) => {
        if (stop) {
          event.stopPropagation();
        }
        onClick(position);
      };
      const renderSideContent = (side, ref2) => {
        const contentSlot = slots[side];
        if (contentSlot) {
          return vue.createVNode("div", {
            "ref": ref2,
            "class": bem$6(side),
            "onClick": getClickHandler(side, true)
          }, [contentSlot()]);
        }
      };
      useExpose({
        open,
        close
      });
      useClickAway(root, () => onClick("outside"), {
        eventName: "touchstart"
      });
      useEventListener("touchmove", onTouchMove, {
        target: root
      });
      return () => {
        var _a;
        const wrapperStyle = {
          transform: `translate3d(${state.offset}px, 0, 0)`,
          transitionDuration: state.dragging ? "0s" : ".6s"
        };
        return vue.createVNode("div", {
          "ref": root,
          "class": bem$6(),
          "onClick": getClickHandler("cell", lockClick2),
          "onTouchstartPassive": onTouchStart,
          "onTouchend": onTouchEnd,
          "onTouchcancel": onTouchEnd
        }, [vue.createVNode("div", {
          "class": bem$6("wrapper"),
          "style": wrapperStyle
        }, [renderSideContent("left", leftRef), (_a = slots.default) == null ? void 0 : _a.call(slots), renderSideContent("right", rightRef)])]);
      };
    }
  });
  const SwipeCell = withInstall(stdin_default$9);
  const [name$6, bem$5] = createNamespace("tabbar");
  const tabbarProps = {
    route: Boolean,
    fixed: truthProp,
    border: truthProp,
    zIndex: numericProp,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: makeNumericProp(0),
    safeAreaInsetBottom: {
      type: Boolean,
      default: null
    }
  };
  const TABBAR_KEY = Symbol(name$6);
  var stdin_default$8 = vue.defineComponent({
    name: name$6,
    props: tabbarProps,
    emits: ["change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const root = vue.ref();
      const {
        linkChildren
      } = useChildren(TABBAR_KEY);
      const renderPlaceholder = usePlaceholder(root, bem$5);
      const enableSafeArea = () => {
        var _a;
        return (_a = props.safeAreaInsetBottom) != null ? _a : props.fixed;
      };
      const renderTabbar = () => {
        var _a;
        const {
          fixed,
          zIndex,
          border
        } = props;
        return vue.createVNode("div", {
          "ref": root,
          "role": "tablist",
          "style": getZIndexStyle(zIndex),
          "class": [bem$5({
            fixed
          }), {
            [BORDER_TOP_BOTTOM]: border,
            "van-safe-area-bottom": enableSafeArea()
          }]
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      };
      const setActive = (active, afterChange) => {
        callInterceptor(props.beforeChange, {
          args: [active],
          done() {
            emit("update:modelValue", active);
            emit("change", active);
            afterChange();
          }
        });
      };
      linkChildren({
        props,
        setActive
      });
      return () => {
        if (props.fixed && props.placeholder) {
          return renderPlaceholder(renderTabbar);
        }
        return renderTabbar();
      };
    }
  });
  const Tabbar = withInstall(stdin_default$8);
  const [name$5, bem$4] = createNamespace("tabbar-item");
  const tabbarItemProps = extend({}, routeProps, {
    dot: Boolean,
    icon: String,
    name: numericProp,
    badge: numericProp,
    badgeProps: Object,
    iconPrefix: String
  });
  var stdin_default$7 = vue.defineComponent({
    name: name$5,
    props: tabbarItemProps,
    emits: ["click"],
    setup(props, {
      emit,
      slots
    }) {
      const route2 = useRoute();
      const vm = vue.getCurrentInstance().proxy;
      const {
        parent,
        index
      } = useParent(TABBAR_KEY);
      if (!parent) {
        {
          formatAppLog("error", "at node_modules/vant/es/tabbar-item/TabbarItem.mjs:34", "[Vant] <TabbarItem> must be a child component of <Tabbar>.");
        }
        return;
      }
      const active = vue.computed(() => {
        var _a;
        const {
          route: route22,
          modelValue
        } = parent.props;
        if (route22 && "$route" in vm) {
          const {
            $route
          } = vm;
          const {
            to
          } = props;
          const config = isObject(to) ? to : {
            path: to
          };
          return !!$route.matched.find((val) => {
            const pathMatched = "path" in config && config.path === val.path;
            const nameMatched = "name" in config && config.name === val.name;
            return pathMatched || nameMatched;
          });
        }
        return ((_a = props.name) != null ? _a : index.value) === modelValue;
      });
      const onClick = (event) => {
        var _a;
        if (!active.value) {
          parent.setActive((_a = props.name) != null ? _a : index.value, route2);
        }
        emit("click", event);
      };
      const renderIcon = () => {
        if (slots.icon) {
          return slots.icon({
            active: active.value
          });
        }
        if (props.icon) {
          return vue.createVNode(Icon, {
            "name": props.icon,
            "classPrefix": props.iconPrefix
          }, null);
        }
      };
      return () => {
        var _a;
        const {
          dot,
          badge
        } = props;
        const {
          activeColor,
          inactiveColor
        } = parent.props;
        const color = active.value ? activeColor : inactiveColor;
        return vue.createVNode("div", {
          "role": "tab",
          "class": bem$4({
            active: active.value
          }),
          "style": {
            color
          },
          "tabindex": 0,
          "aria-selected": active.value,
          "onClick": onClick
        }, [vue.createVNode(Badge, vue.mergeProps({
          "dot": dot,
          "class": bem$4("icon"),
          "content": badge
        }, props.badgeProps), {
          default: renderIcon
        }), vue.createVNode("div", {
          "class": bem$4("text")
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          active: active.value
        })])]);
      };
    }
  });
  const TabbarItem = withInstall(stdin_default$7);
  const [name$4, bem$3] = createNamespace("text-ellipsis");
  const textEllipsisProps = {
    rows: makeNumericProp(1),
    dots: makeStringProp("..."),
    content: makeStringProp(""),
    expandText: makeStringProp(""),
    collapseText: makeStringProp("")
  };
  var stdin_default$6 = vue.defineComponent({
    name: name$4,
    props: textEllipsisProps,
    emits: ["clickAction"],
    setup(props, {
      emit
    }) {
      const text = vue.ref("");
      const expanded = vue.ref(false);
      const hasAction = vue.ref(false);
      const root = vue.ref();
      const pxToNum = (value) => {
        if (!value)
          return 0;
        const match = value.match(/^\d*(\.\d*)?/);
        return match ? Number(match[0]) : 0;
      };
      const calcEllipsised = () => {
        const cloneContainer = () => {
          if (!root.value)
            return;
          const originStyle = window.getComputedStyle(root.value);
          const container2 = document.createElement("div");
          const styleNames = Array.prototype.slice.apply(originStyle);
          styleNames.forEach((name2) => {
            container2.style.setProperty(name2, originStyle.getPropertyValue(name2));
          });
          container2.style.position = "fixed";
          container2.style.zIndex = "-9999";
          container2.style.top = "-9999px";
          container2.style.height = "auto";
          container2.style.minHeight = "auto";
          container2.style.maxHeight = "auto";
          container2.innerText = props.content;
          document.body.appendChild(container2);
          return container2;
        };
        const calcEllipsisText = (container2, maxHeight2) => {
          const {
            dots,
            content,
            expandText
          } = props;
          let left2 = 0;
          let right2 = content.length;
          let res = -1;
          while (left2 <= right2) {
            const mid = Math.floor((left2 + right2) / 2);
            container2.innerText = content.slice(0, mid) + dots + expandText;
            if (container2.offsetHeight <= maxHeight2) {
              left2 = mid + 1;
              res = mid;
            } else {
              right2 = mid - 1;
            }
          }
          return content.slice(0, res) + dots;
        };
        const container = cloneContainer();
        if (!container)
          return;
        const {
          paddingBottom,
          paddingTop,
          lineHeight
        } = container.style;
        const maxHeight = (Number(props.rows) + 0.5) * pxToNum(lineHeight) + pxToNum(paddingTop) + pxToNum(paddingBottom);
        if (maxHeight < container.offsetHeight) {
          hasAction.value = true;
          text.value = calcEllipsisText(container, maxHeight);
        } else {
          hasAction.value = false;
          text.value = props.content;
        }
        document.body.removeChild(container);
      };
      const onClickAction = (event) => {
        expanded.value = !expanded.value;
        emit("clickAction", event);
      };
      const renderAction = () => vue.createVNode("span", {
        "class": bem$3("action"),
        "onClick": onClickAction
      }, [expanded.value ? props.collapseText : props.expandText]);
      vue.onMounted(calcEllipsised);
      vue.watch(() => [props.content, props.rows], calcEllipsised);
      useEventListener("resize", calcEllipsised);
      return () => vue.createVNode("div", {
        "ref": root,
        "class": bem$3()
      }, [expanded.value ? props.content : text.value, hasAction.value ? renderAction() : null]);
    }
  });
  const TextEllipsis = withInstall(stdin_default$6);
  const [name$3] = createNamespace("time-picker");
  const timePickerProps = extend({}, sharedProps, {
    minHour: makeNumericProp(0),
    maxHour: makeNumericProp(23),
    minMinute: makeNumericProp(0),
    maxMinute: makeNumericProp(59),
    minSecond: makeNumericProp(0),
    maxSecond: makeNumericProp(59),
    columnsType: {
      type: Array,
      default: () => ["hour", "minute"]
    }
  });
  var stdin_default$5 = vue.defineComponent({
    name: name$3,
    props: timePickerProps,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const currentValues = vue.ref(props.modelValue);
      const columns = vue.computed(() => props.columnsType.map((type) => {
        const {
          filter,
          formatter
        } = props;
        switch (type) {
          case "hour":
            return genOptions(+props.minHour, +props.maxHour, type, formatter, filter);
          case "minute":
            return genOptions(+props.minMinute, +props.maxMinute, type, formatter, filter);
          case "second":
            return genOptions(+props.minSecond, +props.maxSecond, type, formatter, filter);
          default: {
            throw new Error(`[Vant] DatePicker: unsupported columns type: ${type}`);
          }
        }
      }));
      vue.watch(currentValues, (newValues) => {
        if (!isSameValue(newValues, props.modelValue)) {
          emit("update:modelValue", newValues);
        }
      });
      vue.watch(() => props.modelValue, (newValues) => {
        newValues = formatValueRange(newValues, columns.value);
        if (!isSameValue(newValues, currentValues.value)) {
          currentValues.value = newValues;
        }
      }, {
        immediate: true
      });
      const onChange = (...args) => emit("change", ...args);
      const onCancel = (...args) => emit("cancel", ...args);
      const onConfirm = (...args) => emit("confirm", ...args);
      return () => vue.createVNode(Picker, vue.mergeProps({
        "modelValue": currentValues.value,
        "onUpdate:modelValue": ($event) => currentValues.value = $event,
        "columns": columns.value,
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, pick(props, pickerInheritKeys)), slots);
    }
  });
  const TimePicker = withInstall(stdin_default$5);
  const [name$2, bem$2] = createNamespace("tree-select");
  const treeSelectProps = {
    max: makeNumericProp(Infinity),
    items: makeArrayProp(),
    height: makeNumericProp(300),
    selectedIcon: makeStringProp("success"),
    mainActiveIndex: makeNumericProp(0),
    activeId: {
      type: [Number, String, Array],
      default: 0
    }
  };
  var stdin_default$4 = vue.defineComponent({
    name: name$2,
    props: treeSelectProps,
    emits: ["clickNav", "clickItem", "update:activeId", "update:mainActiveIndex"],
    setup(props, {
      emit,
      slots
    }) {
      const isActiveItem = (id) => Array.isArray(props.activeId) ? props.activeId.includes(id) : props.activeId === id;
      const renderSubItem = (item) => {
        const onClick = () => {
          if (item.disabled) {
            return;
          }
          let activeId;
          if (Array.isArray(props.activeId)) {
            activeId = props.activeId.slice();
            const index = activeId.indexOf(item.id);
            if (index !== -1) {
              activeId.splice(index, 1);
            } else if (activeId.length < +props.max) {
              activeId.push(item.id);
            }
          } else {
            activeId = item.id;
          }
          emit("update:activeId", activeId);
          emit("clickItem", item);
        };
        return vue.createVNode("div", {
          "key": item.id,
          "class": ["van-ellipsis", bem$2("item", {
            active: isActiveItem(item.id),
            disabled: item.disabled
          })],
          "onClick": onClick
        }, [item.text, isActiveItem(item.id) && vue.createVNode(Icon, {
          "name": props.selectedIcon,
          "class": bem$2("selected")
        }, null)]);
      };
      const onSidebarChange = (index) => {
        emit("update:mainActiveIndex", index);
      };
      const onClickSidebarItem = (index) => emit("clickNav", index);
      const renderSidebar = () => {
        const Items = props.items.map((item) => vue.createVNode(SidebarItem, {
          "dot": item.dot,
          "badge": item.badge,
          "class": [bem$2("nav-item"), item.className],
          "disabled": item.disabled,
          "onClick": onClickSidebarItem
        }, {
          title: () => slots["nav-text"] ? slots["nav-text"](item) : item.text
        }));
        return vue.createVNode(Sidebar, {
          "class": bem$2("nav"),
          "modelValue": props.mainActiveIndex,
          "onChange": onSidebarChange
        }, {
          default: () => [Items]
        });
      };
      const renderContent = () => {
        if (slots.content) {
          return slots.content();
        }
        const selected = props.items[+props.mainActiveIndex] || {};
        if (selected.children) {
          return selected.children.map(renderSubItem);
        }
      };
      return () => vue.createVNode("div", {
        "class": bem$2(),
        "style": {
          height: addUnit(props.height)
        }
      }, [renderSidebar(), vue.createVNode("div", {
        "class": bem$2("content")
      }, [renderContent()])]);
    }
  });
  const TreeSelect = withInstall(stdin_default$4);
  const [name$1, bem$1, t] = createNamespace("uploader");
  function readFileContent(file, resultType) {
    return new Promise((resolve) => {
      if (resultType === "file") {
        resolve();
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      if (resultType === "dataUrl") {
        reader.readAsDataURL(file);
      } else if (resultType === "text") {
        reader.readAsText(file);
      }
    });
  }
  function isOversize(items, maxSize) {
    return toArray(items).some((item) => {
      if (item.file) {
        if (isFunction(maxSize)) {
          return maxSize(item.file);
        }
        return item.file.size > +maxSize;
      }
      return false;
    });
  }
  function filterFiles(items, maxSize) {
    const valid = [];
    const invalid = [];
    items.forEach((item) => {
      if (isOversize(item, maxSize)) {
        invalid.push(item);
      } else {
        valid.push(item);
      }
    });
    return { valid, invalid };
  }
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i;
  const isImageUrl = (url) => IMAGE_REGEXP.test(url);
  function isImageFile(item) {
    if (item.isImage) {
      return true;
    }
    if (item.file && item.file.type) {
      return item.file.type.indexOf("image") === 0;
    }
    if (item.url) {
      return isImageUrl(item.url);
    }
    if (typeof item.content === "string") {
      return item.content.indexOf("data:image") === 0;
    }
    return false;
  }
  var stdin_default$3 = vue.defineComponent({
    props: {
      name: numericProp,
      item: makeRequiredProp(Object),
      index: Number,
      imageFit: String,
      lazyLoad: Boolean,
      deletable: Boolean,
      previewSize: [Number, String, Array],
      beforeDelete: Function
    },
    emits: ["delete", "preview"],
    setup(props, {
      emit,
      slots
    }) {
      const renderMask = () => {
        const {
          status,
          message
        } = props.item;
        if (status === "uploading" || status === "failed") {
          const MaskIcon = status === "failed" ? vue.createVNode(Icon, {
            "name": "close",
            "class": bem$1("mask-icon")
          }, null) : vue.createVNode(Loading, {
            "class": bem$1("loading")
          }, null);
          const showMessage = isDef(message) && message !== "";
          return vue.createVNode("div", {
            "class": bem$1("mask")
          }, [MaskIcon, showMessage && vue.createVNode("div", {
            "class": bem$1("mask-message")
          }, [message])]);
        }
      };
      const onDelete = (event) => {
        const {
          name: name2,
          item,
          index,
          beforeDelete
        } = props;
        event.stopPropagation();
        callInterceptor(beforeDelete, {
          args: [item, {
            name: name2,
            index
          }],
          done: () => emit("delete")
        });
      };
      const onPreview = () => emit("preview");
      const renderDeleteIcon = () => {
        if (props.deletable && props.item.status !== "uploading") {
          const slot = slots["preview-delete"];
          return vue.createVNode("div", {
            "role": "button",
            "class": bem$1("preview-delete", {
              shadow: !slot
            }),
            "tabindex": 0,
            "aria-label": t("delete"),
            "onClick": onDelete
          }, [slot ? slot() : vue.createVNode(Icon, {
            "name": "cross",
            "class": bem$1("preview-delete-icon")
          }, null)]);
        }
      };
      const renderCover = () => {
        if (slots["preview-cover"]) {
          const {
            index,
            item
          } = props;
          return vue.createVNode("div", {
            "class": bem$1("preview-cover")
          }, [slots["preview-cover"](extend({
            index
          }, item))]);
        }
      };
      const renderPreview = () => {
        const {
          item,
          lazyLoad,
          imageFit,
          previewSize
        } = props;
        if (isImageFile(item)) {
          return vue.createVNode(Image$1, {
            "fit": imageFit,
            "src": item.content || item.url,
            "class": bem$1("preview-image"),
            "width": Array.isArray(previewSize) ? previewSize[0] : previewSize,
            "height": Array.isArray(previewSize) ? previewSize[1] : previewSize,
            "lazyLoad": lazyLoad,
            "onClick": onPreview
          }, {
            default: renderCover
          });
        }
        return vue.createVNode("div", {
          "class": bem$1("file"),
          "style": getSizeStyle(props.previewSize)
        }, [vue.createVNode(Icon, {
          "class": bem$1("file-icon"),
          "name": "description"
        }, null), vue.createVNode("div", {
          "class": [bem$1("file-name"), "van-ellipsis"]
        }, [item.file ? item.file.name : item.url]), renderCover()]);
      };
      return () => vue.createVNode("div", {
        "class": bem$1("preview")
      }, [renderPreview(), renderMask(), renderDeleteIcon()]);
    }
  });
  const uploaderProps = {
    name: makeNumericProp(""),
    accept: makeStringProp("image/*"),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: makeNumericProp(Infinity),
    imageFit: makeStringProp("cover"),
    resultType: makeStringProp("dataUrl"),
    uploadIcon: makeStringProp("photograph"),
    uploadText: String,
    deletable: truthProp,
    afterRead: Function,
    showUpload: truthProp,
    modelValue: makeArrayProp(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: truthProp,
    previewOptions: Object,
    previewFullImage: truthProp,
    maxSize: {
      type: [Number, String, Function],
      default: Infinity
    }
  };
  var stdin_default$2 = vue.defineComponent({
    name: name$1,
    props: uploaderProps,
    emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "update:modelValue"],
    setup(props, {
      emit,
      slots
    }) {
      const inputRef = vue.ref();
      const urls = [];
      const getDetail = (index = props.modelValue.length) => ({
        name: props.name,
        index
      });
      const resetInput = () => {
        if (inputRef.value) {
          inputRef.value.value = "";
        }
      };
      const onAfterRead = (items) => {
        resetInput();
        if (isOversize(items, props.maxSize)) {
          if (Array.isArray(items)) {
            const result = filterFiles(items, props.maxSize);
            items = result.valid;
            emit("oversize", result.invalid, getDetail());
            if (!items.length) {
              return;
            }
          } else {
            emit("oversize", items, getDetail());
            return;
          }
        }
        items = vue.reactive(items);
        emit("update:modelValue", [...props.modelValue, ...toArray(items)]);
        if (props.afterRead) {
          props.afterRead(items, getDetail());
        }
      };
      const readFile = (files) => {
        const {
          maxCount,
          modelValue,
          resultType
        } = props;
        if (Array.isArray(files)) {
          const remainCount = +maxCount - modelValue.length;
          if (files.length > remainCount) {
            files = files.slice(0, remainCount);
          }
          Promise.all(files.map((file) => readFileContent(file, resultType))).then((contents) => {
            const fileList = files.map((file, index) => {
              const result = {
                file,
                status: "",
                message: ""
              };
              if (contents[index]) {
                result.content = contents[index];
              }
              return result;
            });
            onAfterRead(fileList);
          });
        } else {
          readFileContent(files, resultType).then((content) => {
            const result = {
              file: files,
              status: "",
              message: ""
            };
            if (content) {
              result.content = content;
            }
            onAfterRead(result);
          });
        }
      };
      const onChange = (event) => {
        const {
          files
        } = event.target;
        if (props.disabled || !files || !files.length) {
          return;
        }
        const file = files.length === 1 ? files[0] : [].slice.call(files);
        if (props.beforeRead) {
          const response = props.beforeRead(file, getDetail());
          if (!response) {
            resetInput();
            return;
          }
          if (isPromise(response)) {
            response.then((data) => {
              if (data) {
                readFile(data);
              } else {
                readFile(file);
              }
            }).catch(resetInput);
            return;
          }
        }
        readFile(file);
      };
      let imagePreview;
      const onClosePreview = () => emit("closePreview");
      const previewImage = (item) => {
        if (props.previewFullImage) {
          const imageFiles = props.modelValue.filter(isImageFile);
          const images = imageFiles.map((item2) => {
            if (item2.file && !item2.url && item2.status !== "failed") {
              item2.url = URL.createObjectURL(item2.file);
              urls.push(item2.url);
            }
            return item2.url;
          }).filter(Boolean);
          imagePreview = showImagePreview(extend({
            images,
            startPosition: imageFiles.indexOf(item),
            onClose: onClosePreview
          }, props.previewOptions));
        }
      };
      const closeImagePreview = () => {
        if (imagePreview) {
          imagePreview.close();
        }
      };
      const deleteFile = (item, index) => {
        const fileList = props.modelValue.slice(0);
        fileList.splice(index, 1);
        emit("update:modelValue", fileList);
        emit("delete", item, getDetail(index));
      };
      const renderPreviewItem = (item, index) => {
        const needPickData = ["imageFit", "deletable", "previewSize", "beforeDelete"];
        const previewData = extend(pick(props, needPickData), pick(item, needPickData, true));
        return vue.createVNode(stdin_default$3, vue.mergeProps({
          "item": item,
          "index": index,
          "onClick": () => emit("clickPreview", item, getDetail(index)),
          "onDelete": () => deleteFile(item, index),
          "onPreview": () => previewImage(item)
        }, pick(props, ["name", "lazyLoad"]), previewData), pick(slots, ["preview-cover", "preview-delete"]));
      };
      const renderPreviewList = () => {
        if (props.previewImage) {
          return props.modelValue.map(renderPreviewItem);
        }
      };
      const onClickUpload = (event) => emit("clickUpload", event);
      const renderUpload = () => {
        if (props.modelValue.length >= +props.maxCount) {
          return;
        }
        const Input = props.readonly ? null : vue.createVNode("input", {
          "ref": inputRef,
          "type": "file",
          "class": bem$1("input"),
          "accept": props.accept,
          "capture": props.capture,
          "multiple": props.multiple,
          "disabled": props.disabled,
          "onChange": onChange
        }, null);
        if (slots.default) {
          return vue.createVNode("div", {
            "class": bem$1("input-wrapper"),
            "onClick": onClickUpload
          }, [slots.default(), Input]);
        }
        return vue.withDirectives(vue.createVNode("div", {
          "class": bem$1("upload", {
            readonly: props.readonly
          }),
          "style": getSizeStyle(props.previewSize),
          "onClick": onClickUpload
        }, [vue.createVNode(Icon, {
          "name": props.uploadIcon,
          "class": bem$1("upload-icon")
        }, null), props.uploadText && vue.createVNode("span", {
          "class": bem$1("upload-text")
        }, [props.uploadText]), Input]), [[vue.vShow, props.showUpload]]);
      };
      const chooseFile = () => {
        if (inputRef.value && !props.disabled) {
          inputRef.value.click();
        }
      };
      vue.onBeforeUnmount(() => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      });
      useExpose({
        chooseFile,
        closeImagePreview
      });
      useCustomFieldValue(() => props.modelValue);
      return () => vue.createVNode("div", {
        "class": bem$1()
      }, [vue.createVNode("div", {
        "class": bem$1("wrapper", {
          disabled: props.disabled
        })
      }, [renderPreviewList(), renderUpload()])]);
    }
  });
  const Uploader = withInstall(stdin_default$2);
  const [name, bem] = createNamespace("watermark");
  const watermarkProps = {
    gapX: makeNumberProp(0),
    gapY: makeNumberProp(0),
    image: String,
    width: makeNumberProp(100),
    height: makeNumberProp(100),
    rotate: makeNumericProp(-22),
    zIndex: numericProp,
    content: String,
    opacity: numericProp,
    fullPage: truthProp,
    textColor: makeStringProp("#dcdee0")
  };
  var stdin_default$1 = vue.defineComponent({
    name,
    props: watermarkProps,
    setup(props, {
      slots
    }) {
      const svgElRef = vue.ref();
      const watermarkUrl = vue.ref("");
      const imageBase64 = vue.ref("");
      const renderWatermark = () => {
        const rotateStyle = {
          transformOrigin: "center",
          transform: `rotate(${props.rotate}deg)`
        };
        const svgInner = () => {
          if (props.image && !slots.content) {
            return vue.createVNode("image", {
              "href": imageBase64.value,
              "x": "0",
              "y": "0",
              "width": props.width,
              "height": props.height,
              "style": rotateStyle
            }, null);
          }
          return vue.createVNode("foreignObject", {
            "x": "0",
            "y": "0",
            "width": props.width,
            "height": props.height
          }, [vue.createVNode("div", {
            "xmlns": "http://www.w3.org/1999/xhtml",
            "style": rotateStyle
          }, [slots.content ? slots.content() : vue.createVNode("span", {
            "style": {
              color: props.textColor
            }
          }, [props.content])])]);
        };
        const svgWidth = props.width + props.gapX;
        const svgHeight = props.height + props.gapY;
        return vue.createVNode("svg", {
          "viewBox": `0 0 ${svgWidth} ${svgHeight}`,
          "width": svgWidth,
          "height": svgHeight,
          "xmlns": "http://www.w3.org/2000/svg",
          "style": {
            padding: `0 ${props.gapX}px ${props.gapY}px 0`,
            opacity: props.opacity
          }
        }, [svgInner()]);
      };
      const makeImageToBase64 = (url) => {
        const canvas = document.createElement("canvas");
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.referrerPolicy = "no-referrer";
        image.onload = () => {
          canvas.width = image.naturalWidth;
          canvas.height = image.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx == null ? void 0 : ctx.drawImage(image, 0, 0);
          imageBase64.value = canvas.toDataURL();
        };
        image.src = url;
      };
      const makeSvgToBlobUrl = (svgStr) => {
        const svgBlob = new Blob([svgStr], {
          type: "image/svg+xml;charset=utf-8"
        });
        return URL.createObjectURL(svgBlob);
      };
      vue.watchEffect(() => {
        if (props.image) {
          makeImageToBase64(props.image);
        }
      });
      vue.watch(() => [imageBase64.value, props.content, props.textColor, props.height, props.width, props.rotate, props.gapX, props.gapY], () => {
        vue.nextTick(() => {
          if (svgElRef.value) {
            if (watermarkUrl.value) {
              URL.revokeObjectURL(watermarkUrl.value);
            }
            watermarkUrl.value = makeSvgToBlobUrl(svgElRef.value.innerHTML);
          }
        });
      }, {
        immediate: true
      });
      vue.onUnmounted(() => {
        if (watermarkUrl.value) {
          URL.revokeObjectURL(watermarkUrl.value);
        }
      });
      return () => {
        const style = extend({
          backgroundImage: `url(${watermarkUrl.value})`
        }, getZIndexStyle(props.zIndex));
        return vue.createVNode("div", {
          "class": bem({
            full: props.fullPage
          }),
          "style": style
        }, [vue.createVNode("div", {
          "class": bem("wrapper"),
          "ref": svgElRef
        }, [renderWatermark()])]);
      };
    }
  });
  const Watermark = withInstall(stdin_default$1);
  const version = "4.2.0";
  function install(app) {
    const components = [
      ActionBar,
      ActionBarButton,
      ActionBarIcon,
      ActionSheet,
      AddressEdit,
      AddressList,
      Area,
      BackTop,
      Badge,
      Button,
      Calendar,
      Card,
      Cascader,
      Cell,
      CellGroup,
      Checkbox,
      CheckboxGroup,
      Circle,
      Col,
      Collapse,
      CollapseItem,
      ConfigProvider,
      ContactCard,
      ContactEdit,
      ContactList,
      CountDown,
      Coupon,
      CouponCell,
      CouponList,
      DatePicker,
      Dialog,
      Divider,
      DropdownItem,
      DropdownMenu,
      Empty,
      Field,
      Form,
      Grid,
      GridItem,
      Icon,
      Image$1,
      ImagePreview,
      IndexAnchor,
      IndexBar,
      List,
      Loading,
      Locale,
      NavBar,
      NoticeBar,
      Notify,
      NumberKeyboard,
      Overlay,
      Pagination,
      PasswordInput,
      Picker,
      PickerGroup,
      Popover,
      Popup,
      Progress,
      PullRefresh,
      Radio,
      RadioGroup,
      Rate,
      Row,
      Search,
      ShareSheet,
      Sidebar,
      SidebarItem,
      Skeleton,
      SkeletonAvatar,
      SkeletonImage,
      SkeletonParagraph,
      SkeletonTitle,
      Slider,
      Space,
      Step,
      Stepper,
      Steps,
      Sticky,
      SubmitBar,
      Swipe,
      SwipeCell,
      SwipeItem,
      Switch,
      Tab,
      Tabbar,
      TabbarItem,
      Tabs,
      Tag,
      TextEllipsis,
      TimePicker,
      Toast,
      TreeSelect,
      Uploader,
      Watermark
    ];
    components.forEach((item) => {
      if (item.install) {
        app.use(item);
      } else if (item.name) {
        app.component(item.name, item);
      }
    });
  }
  var stdin_default = {
    install,
    version
  };
  const _sfc_main$1 = {
    data() {
      return {
        datum: null,
        webviewStyles: {
          height: "0"
        },
        src: null,
        caches: null,
        findItem: null,
        downloadIng: false
      };
    },
    onReady() {
      if (this.findItem == null) {
        let systemInfo = uni.getSystemInfoSync();
        let navBarHeight = systemInfo.statusBarHeight + systemInfo.windowTop;
        let height2 = uni.getSystemInfoSync().windowHeight - navBarHeight;
        uni.createSelectorQuery().select("#bottom").fields({
          size: true,
          scrollOffset: true
        }, (data) => {
          let bottomHeight = data.height;
          let tempHeight = height2 - bottomHeight;
          this.webviewStyles.height = tempHeight + "px";
        }).exec();
      }
      setTimeout(() => {
        uni.setNavigationBarTitle({
          title: "资料详情"
        });
      }, 2e3);
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data));
      formatAppLog("log", "at pages/datum/datumDetail.vue:51", data);
      this.datum = data;
      this.caches = uni.getStorageSync("datum-list") || [];
      this.findItem = this.caches.find((item) => item.id === this.datum.id);
      formatAppLog("log", "at pages/datum/datumDetail.vue:55", "------findItem");
      formatAppLog("log", "at pages/datum/datumDetail.vue:56", this.findItem);
      this.src = this.$request.imageBaseUrl + this.datum.pdfUrl;
      formatAppLog("log", "at pages/datum/datumDetail.vue:60", this.src);
    },
    methods: {
      save() {
        const findItem = this.caches.findIndex((item) => item.id == this.datum.id);
        formatAppLog("log", "at pages/datum/datumDetail.vue:65", findItem);
        formatAppLog("log", "at pages/datum/datumDetail.vue:66", "======");
        if (findItem !== -1) {
          this.caches.splice(findItem, 1);
          this.caches.unshift(this.datum);
        } else {
          this.caches.unshift(this.datum);
        }
        uni.setStorageSync("datum-list", this.caches);
      },
      downloadFile() {
        let that = this;
        let downloadTask = uni.downloadFile({
          url: this.src,
          success: (res) => {
            if (res.statusCode === 200) {
              uni.saveFile({
                tempFilePath: res.tempFilePath,
                success: function(res2) {
                  that.datum.filePath = res2.savedFilePath;
                  that.save();
                  uni.showToast({
                    title: "下载成功",
                    duration: 2e3,
                    icon: "none"
                  });
                }
              });
            } else {
              uni.showToast({
                title: res.msg,
                duration: 2e3,
                icon: "none"
              });
            }
          }
        });
        downloadTask.onProgressUpdate((res) => {
          formatAppLog("log", "at pages/datum/datumDetail.vue:105", "下载进度" + res.progress);
          formatAppLog("log", "at pages/datum/datumDetail.vue:106", "已经下载的数据长度" + res.totalBytesWritten);
          formatAppLog("log", "at pages/datum/datumDetail.vue:107", "预期需要下载的数据总长度" + res.totalBytesExpectedToWrite);
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      $data.src != null ? (vue.openBlock(), vue.createElementBlock("web-view", {
        key: 0,
        style: { "position": "absolute", "display": "block", "border": "0px", "top": "44px", "left": "0px", "width": "414px" },
        src: $data.src,
        "webview-styles": $data.webviewStyles
      }, null, 8, ["src", "webview-styles"])) : vue.createCommentVNode("v-if", true),
      $data.findItem == null ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        id: "bottom",
        class: "commit-bg"
      }, [
        vue.createElementVNode("view", {
          class: "commit",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.downloadFile && $options.downloadFile(...args))
        }, "下载资料")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesDatumDatumDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/pages/datum/datumDetail.vue"]]);
  __definePage("pages/study/study", PagesStudyStudy);
  __definePage("pages/exercise/exercise", PagesExerciseExercise);
  __definePage("pages/datum/datum", PagesDatumDatum);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/select/select", PagesSelectSelect);
  __definePage("pages/agreement/agreement", PagesAgreementAgreement);
  __definePage("pages/study/infomation/infomation", PagesStudyInfomationInfomation);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/login/forget", PagesLoginForget);
  __definePage("pages/study/courseDetail/courseDetail", PagesStudyCourseDetailCourseDetail);
  __definePage("pages/study/search/search", PagesStudySearchSearch);
  __definePage("pages/study/courseList/courseList", PagesStudyCourseListCourseList);
  __definePage("pages/exercise/rank/rank", PagesExerciseRankRank);
  __definePage("pages/exercise/simulationTest/simulationTest", PagesExerciseSimulationTestSimulationTest);
  __definePage("pages/exercise/dailyPractice/dailyPractice", PagesExerciseDailyPracticeDailyPractice);
  __definePage("pages/exercise/question/question", PagesExerciseQuestionQuestion);
  __definePage("pages/study/courseCatalogDetail/courseCatalogDetail", PagesStudyCourseCatalogDetailCourseCatalogDetail);
  __definePage("pages/buy/buy", PagesBuyBuy);
  __definePage("pages/study/courseDetail/courseComment", PagesStudyCourseDetailCourseComment);
  __definePage("pages/study/courseDetail/courseReadComment", PagesStudyCourseDetailCourseReadComment);
  __definePage("pages/study/courseCatalogDetail/courseVideoPlay", PagesStudyCourseCatalogDetailCourseVideoPlay);
  __definePage("pages/exercise/simulationTest/examList", PagesExerciseSimulationTestExamList);
  __definePage("pages/datum/datumDetail", PagesDatumDatumDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      const type = uni.getStorageSync("BKType");
      if (!type) {
        uni.reLaunch({
          url: "/pages/select/select",
          success: () => {
            plus.navigator.closeSplashscreen();
          }
        });
      } else {
        plus.navigator.closeSplashscreen();
      }
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:22", "App Show");
      setTimeout(() => {
        plus.navigator.closeSplashscreen();
      }, 2e3);
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:30", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/Job/Desktop/ProjectCode/ncyy_uni/App.vue"]]);
  const imageBaseUrl = "http://www.xsmyy.cn";
  const baseUrl = "http://192.168.31.63/dev-api";
  const request = (options = {}) => {
    var header = options.header || {};
    header["content-type"] = "application/json";
    let token = getToken();
    if (token) {
      header["Authorization"] = `Bearer ${token}`;
    }
    options.header = header;
    var data = options.data || {};
    let pid = uni.getStorageSync("BKType") || 1;
    if (pid) {
      data["categoryId"] = pid;
      data["pid"] = pid;
    }
    let user = getUser();
    if (user) {
      data["uid"] = user.id;
    }
    options.data = data;
    return new Promise((resolve, reject) => {
      let url = baseUrl + (options.url || "") + "?isMobile=isMobile";
      uni.request({
        url,
        method: options.type || "GET",
        data: options.data || {},
        header: options.header || {}
      }).then((response) => {
        setTimeout(function() {
          uni.hideLoading();
        }, 200);
        if (response.data.code !== 200) {
          formatAppLog("log", "at common/request.js:53", "请求失败：" + url);
          reject(response.data);
        } else {
          formatAppLog("log", "at common/request.js:56", "请求成功：" + url);
          formatAppLog("log", "at common/request.js:57", response.data);
          resolve(response.data);
        }
      }).catch((error) => {
        formatAppLog("log", "at common/request.js:61", "请求失败：" + url);
        formatAppLog("log", "at common/request.js:62", error);
        reject(error.err);
      });
    });
  };
  const get = (url, data, options = {}) => {
    options.type = "get";
    options.data = data;
    options.url = url;
    return request(options);
  };
  const post = (url, data, options = {}) => {
    options.type = "post";
    options.data = data;
    options.url = url;
    return request(options);
  };
  const del = (url, data, options = {}) => {
    options.type = "delete";
    options.data = data;
    options.url = url;
    return request(options);
  };
  const put = (url, data, options = {}) => {
    options.type = "put";
    options.data = data;
    options.url = url;
    return request(options);
  };
  const request$1 = {
    request,
    get,
    post,
    del,
    put,
    baseUrl,
    imageBaseUrl
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$request = request$1;
    app.use(stdin_default);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);

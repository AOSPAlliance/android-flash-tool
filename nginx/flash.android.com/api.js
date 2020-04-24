'use strict';
var gapi = window.gapi = window.gapi || {};
/** @type {number} */
gapi._bs = (new Date).getTime();
(function() {
  /**
   * @return {undefined}
   */
  var C = function() {
    /** @type {string} */
    this.g = "";
  };
  /**
   * @return {?}
   */
  C.prototype.toString = function() {
    return "SafeScript{" + this.g + "}";
  };
  /**
   * @param {string} p
   * @return {undefined}
   */
  C.prototype.a = function(p) {
    /** @type {string} */
    this.g = p;
  };
  (new C).a("");
  /**
   * @return {undefined}
   */
  var copy = function() {
    /** @type {string} */
    this.j = "";
  };
  /**
   * @return {?}
   */
  copy.prototype.toString = function() {
    return "SafeStyle{" + this.j + "}";
  };
  /**
   * @param {string} b
   * @return {undefined}
   */
  copy.prototype.a = function(b) {
    /** @type {string} */
    this.j = b;
  };
  (new copy).a("");
  /**
   * @return {undefined}
   */
  var foo = function() {
    /** @type {string} */
    this.i = "";
  };
  /**
   * @return {?}
   */
  foo.prototype.toString = function() {
    return "SafeStyleSheet{" + this.i + "}";
  };
  /**
   * @param {string} c
   * @return {undefined}
   */
  foo.prototype.a = function(c) {
    /** @type {string} */
    this.i = c;
  };
  (new foo).a("");
  /**
   * @return {undefined}
   */
  var fn = function() {
    /** @type {string} */
    this.f = "";
  };
  /**
   * @return {?}
   */
  fn.prototype.toString = function() {
    return "SafeHtml{" + this.f + "}";
  };
  /**
   * @param {string} val
   * @return {undefined}
   */
  fn.prototype.a = function(val) {
    /** @type {string} */
    this.f = val;
  };
  (new fn).a("<!DOCTYPE html>");
  (new fn).a("");
  (new fn).a("<br>");
  /** @type {!Window} */
  var self = window;
  /** @type {!HTMLDocument} */
  var doc = document;
  /** @type {!Location} */
  var prev = self.location;
  /**
   * @return {undefined}
   */
  var url = function() {
  };
  /** @type {!RegExp} */
  var rtranslate = /\[native code\]/;
  /**
   * @param {!Object} options
   * @param {string} name
   * @param {?} defaultValue
   * @return {?}
   */
  var $ = function(options, name, defaultValue) {
    return options[name] = options[name] || defaultValue;
  };
  /**
   * @param {!Array} data
   * @return {?}
   */
  var callbackFn = function(data) {
    data = data.sort();
    /** @type {!Array} */
    var view = [];
    var oType = void 0;
    /** @type {number} */
    var i = 0;
    for (; i < data.length; i++) {
      var type = data[i];
      if (type != oType) {
        view.push(type);
      }
      oType = type;
    }
    return view;
  };
  /**
   * @return {?}
   */
  var render = function() {
    var func;
    if ((func = Object.create) && rtranslate.test(func)) {
      /** @type {!Object} */
      func = func(null);
    } else {
      func = {};
      var f;
      for (f in func) {
        func[f] = void 0;
      }
    }
    return func;
  };
  var link = $(self, "gapi", {});
  var data;
  data = $(self, "___jsl", render());
  $(data, "I", 0);
  $(data, "hel", 10);
  /**
   * @return {?}
   */
  var get = function() {
    /** @type {string} */
    var s = prev.href;
    if (data.dpo) {
      var height = data.h;
    } else {
      height = data.h;
      /** @type {!RegExp} */
      var c = /([#].*&|[#])jsh=([^&#]*)/g;
      /** @type {!RegExp} */
      var d = /([?#].*&|[?#])jsh=([^&#]*)/g;
      if (s = s && (c.exec(s) || d.exec(s))) {
        try {
          /** @type {string} */
          height = decodeURIComponent(s[2]);
        } catch (e) {
        }
      }
    }
    return height;
  };
  /**
   * @param {!Function} r
   * @return {undefined}
   */
  var e = function(r) {
    var e = $(data, "PQ", []);
    /** @type {!Array} */
    data.PQ = [];
    var n = e.length;
    if (0 === n) {
      r();
    } else {
      /** @type {number} */
      var broadcasts = 0;
      /**
       * @return {undefined}
       */
      var s = function() {
        if (++broadcasts === n) {
          r();
        }
      };
      /** @type {number} */
      var i = 0;
      for (; i < n; i++) {
        e[i](s);
      }
    }
  };
  /**
   * @param {string} start
   * @return {?}
   */
  var set = function(start) {
    return $($(data, "H", render()), start, render());
  };
  var element = $(data, "perf", render());
  var nodes = $(element, "g", render());
  var s = $(element, "i", render());
  $(element, "r", []);
  render();
  render();
  /**
   * @param {string} x
   * @param {string} n
   * @param {string} r
   * @return {undefined}
   */
  var run = function(x, n, r) {
    var d = element.r;
    if ("function" === typeof d) {
      d(x, n, r);
    } else {
      d.push([x, n, r]);
    }
  };
  /**
   * @param {string} value
   * @param {string} str
   * @param {string} data
   * @return {undefined}
   */
  var check = function(value, str, data) {
    if (str && 0 < str.length) {
      str = capitalize(str);
      if (data && 0 < data.length) {
        /** @type {string} */
        str = str + ("___" + capitalize(data));
      }
      if (28 < str.length) {
        str = str.substr(0, 28) + (str.length - 28);
      }
      /** @type {string} */
      data = str;
      str = $(s, "_p", render());
      /** @type {number} */
      $(str, data, render())[value] = (new Date).getTime();
      run(value, "_p", data);
    }
  };
  /**
   * @param {string} val
   * @return {?}
   */
  var capitalize = function(val) {
    return val.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_");
  };
  var page = render();
  /** @type {!Array} */
  var spheres = [];
  /**
   * @param {string} f
   * @return {?}
   */
  var error = function(f) {
    throw Error("Bad hint" + (f ? ": " + f : ""));
  };
  spheres.push(["jsl", function(values) {
    var i;
    for (i in values) {
      if (Object.prototype.hasOwnProperty.call(values, i)) {
        var name = values[i];
        if ("object" == typeof name) {
          data[i] = $(data, i, []).concat(name);
        } else {
          $(data, i, name);
        }
      }
    }
    if (i = values.u) {
      values = $(data, "us", []);
      values.push(i);
      if (i = /^https:(.*)$/.exec(i)) {
        values.push("http:" + i[1]);
      }
    }
  }]);
  /** @type {!RegExp} */
  var rootRegExp = /^(\/[a-zA-Z0-9_\-]+)+$/;
  /** @type {!Array} */
  var typeSpec = [/\/amp\//, /\/amp$/, /^\/amp$/];
  /** @type {!RegExp} */
  var reFeaturedMethod = /^[a-zA-Z0-9\-_\.,!]+$/;
  /** @type {!RegExp} */
  var matchLetter = /^gapi\.loaded_[0-9]+$/;
  /** @type {!RegExp} */
  var rNum = /^[a-zA-Z0-9,._-]+$/;
  /**
   * @param {string} prefix
   * @param {number} key
   * @param {string} i
   * @param {!Array} val
   * @return {?}
   */
  var f = function(prefix, key, i, val) {
    var t = prefix.split(";");
    var method = t.shift();
    var fn = page[method];
    /** @type {null} */
    var ret = null;
    if (fn) {
      ret = fn(t, key, i, val);
    } else {
      error("no hint processor for: " + method);
    }
    if (!ret) {
      error("failed to generate load url");
    }
    /** @type {null} */
    key = ret;
    i = key.match(n);
    return ret;
  };
  /**
   * @param {!Object} data
   * @param {number} o
   * @param {number} c
   * @param {number} x
   * @return {?}
   */
  var create = function(data, o, c, x) {
    data = translate(data);
    if (!matchLetter.test(c)) {
      error("invalid_callback");
    }
    o = g(o);
    x = x && x.length ? g(x) : null;
    /**
     * @param {number} value
     * @return {?}
     */
    var filter = function(value) {
      return encodeURIComponent(value).replace(/%2C/g, ",");
    };
    return [encodeURIComponent(data.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", filter(data.version), "/m=", filter(o), x ? "/exm=" + filter(x) : "", "/rt=j/sv=1/d=1/ed=1", data.b ? "/am=" + filter(data.b) : "", data.l ? "/rs=" + filter(data.l) : "", data.o ? "/t=" + filter(data.o) : "", "/cb=", filter(c)].join("");
  };
  /**
   * @param {!Object} id
   * @return {?}
   */
  var translate = function(id) {
    if ("/" !== id.charAt(0)) {
      error("relative path");
    }
    var result = id.substring(1).split("/");
    /** @type {!Array} */
    var key = [];
    for (; result.length;) {
      id = result.shift();
      if (!id.length || 0 == id.indexOf(".")) {
        error("empty/relative directory");
      } else {
        if (0 < id.indexOf("=")) {
          result.unshift(id);
          break;
        }
      }
      key.push(id);
    }
    id = {};
    /** @type {number} */
    var i = 0;
    var bl = result.length;
    for (; i < bl; ++i) {
      var allSides = result[i].split("=");
      /** @type {string} */
      var s = decodeURIComponent(allSides[0]);
      /** @type {string} */
      var _ = decodeURIComponent(allSides[1]);
      if (2 == allSides.length && s && _) {
        id[s] = id[s] || _;
      }
    }
    /** @type {string} */
    result = "/" + key.join("/");
    if (!rootRegExp.test(result)) {
      error("invalid_prefix");
    }
    /** @type {number} */
    key = 0;
    /** @type {number} */
    i = typeSpec.length;
    for (; key < i; ++key) {
      if (typeSpec[key].test(result)) {
        error("invalid_prefix");
      }
    }
    key = callback(id, "k", true);
    i = callback(id, "am");
    bl = callback(id, "rs");
    id = callback(id, "t");
    return {
      pathPrefix : result,
      version : key,
      b : i,
      l : bl,
      o : id
    };
  };
  /**
   * @param {number} date
   * @return {?}
   */
  var g = function(date) {
    /** @type {!Array} */
    var cmd = [];
    /** @type {number} */
    var j = 0;
    var jlen = date.length;
    for (; j < jlen; ++j) {
      var val = date[j].replace(/\./g, "_").replace(/-/g, "_");
      if (rNum.test(val)) {
        cmd.push(val);
      }
    }
    return cmd.join(",");
  };
  /**
   * @param {!Object} t
   * @param {string} name
   * @param {boolean} e
   * @return {?}
   */
  var callback = function(t, name, e) {
    t = t[name];
    if (!t && e) {
      error("missing: " + name);
    }
    if (t) {
      if (reFeaturedMethod.test(t)) {
        return t;
      }
      error("invalid: " + name);
    }
    return null;
  };
  /** @type {!RegExp} */
  var VALID_IDENTIFIER_EXPR = /^http?:\/\/localhost(rs)?(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/;
  /** @type {!RegExp} */
  var rOtherVals = /\/cb=/g;
  /** @type {!RegExp} */
  var n = /\/\//g;
  /**
   * @return {?}
   */
  var format = function() {
    var year = get();
    if (!year) {
      throw Error("Bad hint");
    }
    return year;
  };
  /**
   * @param {!Object} b
   * @param {undefined} a
   * @param {undefined} i
   * @param {undefined} t
   * @return {?}
   */
  page.m = function(b, a, i, t) {
    if (!(b = b[0])) {
      error("missing_hint");
    }
    return "http://localhost:8080" + create(b, a, i, t);
  };
  /** @type {string} */
  var name = decodeURI("%73cript");
  /** @type {!RegExp} */
  var wildcardRe = /^[-+_0-9\/A-Za-z]+={0,2}$/;
  /**
   * @param {!Array} a
   * @param {!NodeList} d
   * @return {?}
   */
  var reduce = function(a, d) {
    /** @type {!Array} */
    var result = [];
    /** @type {number} */
    var j = 0;
    for (; j < a.length; ++j) {
      var v = a[j];
      var i;
      if (i = v) {
        a: {
          /** @type {number} */
          i = 0;
          for (; i < d.length; i++) {
            if (d[i] === v) {
              break a;
            }
          }
          /** @type {number} */
          i = -1;
        }
        /** @type {boolean} */
        i = 0 > i;
      }
      if (i) {
        result.push(v);
      }
    }
    return result;
  };
  /**
   * @return {?}
   */
  var transform = function() {
    var value = data.nonce;
    return void 0 !== value ? value && value === String(value) && value.match(wildcardRe) ? value : data.nonce = null : doc.querySelector ? (value = doc.querySelector("script[nonce]")) ? (value = value.nonce || value.getAttribute("nonce") || "", value && value === String(value) && value.match(wildcardRe) ? data.nonce = value : data.nonce = null) : null : null;
  };
  /**
   * @param {string} a
   * @return {undefined}
   */
  var loadKekuleLib = function(a) {
    if ("loading" != doc.readyState) {
      write(a);
    } else {
      var graphql = transform();
      /** @type {string} */
      var c = "";
      if (null !== graphql) {
        /** @type {string} */
        c = ' nonce="' + graphql + '"';
      }
      /** @type {string} */
      a = "<" + name + ' src="' + encodeURI(a) + '"' + c + "></" + name + ">";
      doc.write(a);
    }
  };
  /**
   * @param {!Object} start
   * @return {undefined}
   */
  var write = function(start) {
    /** @type {!Element} */
    var node = doc.createElement(name);
    node.setAttribute("src", start);
    start = transform();
    if (null !== start) {
      node.setAttribute("nonce", start);
    }
    /** @type {string} */
    node.async = "true";
    if (start = doc.getElementsByTagName(name)[0]) {
      start.parentNode.insertBefore(node, start);
    } else {
      (doc.head || doc.body || doc.documentElement).appendChild(node);
    }
  };
  /**
   * @param {string} key
   * @param {?} obj
   * @return {undefined}
   */
  var all = function(key, obj) {
    var c = obj && obj._c;
    if (c) {
      /** @type {number} */
      var iter_sph = 0;
      for (; iter_sph < spheres.length; iter_sph++) {
        var name = spheres[iter_sph][0];
        var f = spheres[iter_sph][1];
        if (f && Object.prototype.hasOwnProperty.call(c, name)) {
          f(c[name], key, obj);
        }
      }
    }
  };
  /**
   * @param {?} type
   * @param {string} index
   * @param {!Object} data
   * @return {undefined}
   */
  var next = function(type, index, data) {
    parse(function() {
      var content = index === get() ? $(link, "_", render()) : render();
      content = $(set(index), "_", content);
      type(content);
    }, data);
  };
  /**
   * @param {string} value
   * @param {!Object} options
   * @return {undefined}
   */
  var show = function(value, options) {
    var item = options || {};
    if ("function" == typeof options) {
      item = {};
      /** @type {!Object} */
      item.callback = options;
    }
    all(value, item);
    options = value ? value.split(":") : [];
    var att = item.h || format();
    var browser = $(data, "ah", render());
    if (browser["::"] && options.length) {
      /** @type {!Array} */
      value = [];
      /** @type {null} */
      var relPath = null;
      for (; relPath = options.shift();) {
        var idx = relPath.split(".");
        idx = browser[relPath] || browser[idx[1] && "ns:" + idx[0] || ""] || att;
        var info = value.length && value[value.length - 1] || null;
        var result = info;
        if (!(info && info.hint == idx)) {
          result = {
            hint : idx,
            c : []
          };
          value.push(result);
        }
        result.c.push(relPath);
      }
      /** @type {number} */
      var valueLength = value.length;
      if (1 < valueLength) {
        var callback = item.callback;
        if (callback) {
          /**
           * @return {undefined}
           */
          item.callback = function() {
            if (0 == --valueLength) {
              callback();
            }
          };
        }
      }
      for (; options = value.shift();) {
        init(options.c, item, options.hint);
      }
    } else {
      init(options || [], item, att);
    }
  };
  /**
   * @param {!Array} val
   * @param {!Object} options
   * @param {string} value
   * @return {undefined}
   */
  var init = function(val, options, value) {
    val = callbackFn(val) || [];
    var callback = options.callback;
    var obj = options.config;
    var timeout = options.timeout;
    var pending = options.ontimeout;
    var m = options.onerror;
    var j = void 0;
    if ("function" == typeof m) {
      /** @type {!Function} */
      j = m;
    }
    /** @type {null} */
    var timeoutHandler = null;
    /** @type {boolean} */
    var A = false;
    if (timeout && !pending || !timeout && pending) {
      throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
    }
    m = $(set(value), "r", []).sort();
    var path = $(set(value), "L", []).sort();
    /** @type {!Array<?>} */
    var expected = [].concat(m);
    /**
     * @param {string} dir
     * @param {?} data
     * @return {?}
     */
    var start = function(dir, data) {
      if (A) {
        return 0;
      }
      self.clearTimeout(timeoutHandler);
      path.push.apply(path, name);
      var group = ((link || {}).config || {}).update;
      if (group) {
        group(obj);
      } else {
        if (obj) {
          $(data, "cu", []).push(obj);
        }
      }
      if (data) {
        check("me0", dir, expected);
        try {
          next(data, value, j);
        } finally {
          check("me1", dir, expected);
        }
      }
      return 1;
    };
    if (0 < timeout) {
      timeoutHandler = self.setTimeout(function() {
        /** @type {boolean} */
        A = true;
        pending();
      }, timeout);
    }
    var name = reduce(val, path);
    if (name.length) {
      name = reduce(val, m);
      var r = $(data, "CP", []);
      var i = r.length;
      /**
       * @param {?} cb
       * @return {?}
       */
      r[i] = function(cb) {
        if (!cb) {
          return 0;
        }
        check("ml1", name, expected);
        /**
         * @param {!Function} next
         * @return {undefined}
         */
        var B = function(next) {
          /** @type {null} */
          r[i] = null;
          if (start(name, cb)) {
            e(function() {
              if (callback) {
                callback();
              }
              next();
            });
          }
        };
        /**
         * @return {undefined}
         */
        var j = function() {
          var c = r[i + 1];
          if (c) {
            c();
          }
        };
        if (0 < i && r[i - 1]) {
          /**
           * @return {undefined}
           */
          r[i] = function() {
            B(j);
          };
        } else {
          B(j);
        }
      };
      if (name.length) {
        /** @type {string} */
        var source = "loaded_" + data.I++;
        /**
         * @param {?} url
         * @return {undefined}
         */
        link[source] = function(url) {
          r[i](url);
          /** @type {null} */
          link[source] = null;
        };
        val = f(value, name, "gapi." + source, m);
        m.push.apply(m, name);
        check("ml0", name, expected);
        if (options.sync || self.___gapisync) {
          loadKekuleLib(val);
        } else {
          write(val);
        }
      } else {
        r[i](url);
      }
    } else {
      if (start(name) && callback) {
        callback();
      }
    }
  };
  /**
   * @param {!Function} n
   * @param {!Object} callback
   * @return {?}
   */
  var parse = function(n, callback) {
    if (data.hee && 0 < data.hel) {
      try {
        return n();
      } catch (credential_list) {
        if (callback) {
          callback(credential_list);
        }
        data.hel--;
        show("debug_error", function() {
          try {
            window.___jsl.hefn(credential_list);
          } catch (d) {
            throw credential_list;
          }
        });
      }
    } else {
      try {
        return n();
      } catch (jsonNote) {
        throw callback && callback(jsonNote), jsonNote;
      }
    }
  };
  /**
   * @param {string} id
   * @param {!Object} n
   * @return {?}
   */
  link.load = function(id, n) {
    return parse(function() {
      return show(id, n);
    });
  };
  nodes.bs0 = window.gapi._bs || (new Date).getTime();
  run("bs0");
  /** @type {number} */
  nodes.bs1 = (new Date).getTime();
  run("bs1");
  delete window.gapi._bs;
}).call(this);
gapi.load("", {
  callback : window["gapi_onload"],
  _c : {
    "jsl" : {
      "ci" : {
        "deviceType" : "desktop",
        "oauth-flow" : {
          "authUrl" : "https://accounts.google.com/o/oauth2/auth",
          "proxyUrl" : "https://accounts.google.com/o/oauth2/postmessageRelay",
          "disableOpt" : true,
          "idpIframeUrl" : "https://accounts.google.com/o/oauth2/iframe",
          "usegapi" : false
        },
        "debug" : {
          "reportExceptionRate" : 0.05,
          "forceIm" : false,
          "rethrowException" : false,
          "host" : "https://apis.google.com"
        },
        "enableMultilogin" : true,
        "googleapis.config" : {
          "auth" : {
            "useFirstPartyAuthV2" : false
          }
        },
        "isPlusUser" : false,
        "inline" : {
          "css" : 1
        },
        "disableRealtimeCallback" : false,
        "drive_share" : {
          "skipInitCommand" : true
        },
        "csi" : {
          "rate" : 0.01
        },
        "client" : {
          "cors" : false
        },
        "isLoggedIn" : false,
        "signInDeprecation" : {
          "rate" : 0.0
        },
        "include_granted_scopes" : true,
        "llang" : "en",
        "iframes" : {
          "youtube" : {
            "params" : {
              "location" : ["search", "hash"]
            },
            "url" : ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
            "methods" : ["scroll", "openwindow"]
          },
          "ytsubscribe" : {
            "url" : "https://www.youtube.com/subscribe_embed?usegapi=1"
          },
          "plus_circle" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
          },
          "plus_share" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
          },
          "rbr_s" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
          },
          ":source:" : "3p",
          "playemm" : {
            "url" : "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
          },
          "savetoandroidpay" : {
            "url" : "https://pay.google.com/gp/v/widget/save"
          },
          "blogger" : {
            "params" : {
              "location" : ["search", "hash"]
            },
            "url" : ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
            "methods" : ["scroll", "openwindow"]
          },
          "evwidget" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
          },
          "partnersbadge" : {
            "url" : "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
          },
          "dataconnector" : {
            "url" : "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
          },
          "surveyoptin" : {
            "url" : "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
          },
          ":socialhost:" : "https://apis.google.com",
          "shortlists" : {
            "url" : ""
          },
          "hangout" : {
            "url" : "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
          },
          "plus_followers" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
          },
          "post" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
          },
          ":gplus_url:" : "https://plus.google.com",
          "signin" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
            "methods" : ["onauth"]
          },
          "rbr_i" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
          },
          "donation" : {
            "url" : "https://onetoday.google.com/home/donationWidget?usegapi=1"
          },
          "share" : {
            "url" : ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
          },
          "plusone" : {
            "params" : {
              "count" : "",
              "size" : "",
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
          },
          "comments" : {
            "params" : {
              "location" : ["search", "hash"]
            },
            "url" : ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
            "methods" : ["scroll", "openwindow"]
          },
          ":im_socialhost:" : "https://plus.googleapis.com",
          "backdrop" : {
            "url" : "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
          },
          "visibility" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
          },
          "autocomplete" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix:_/widget/render/autocomplete"
          },
          "additnow" : {
            "url" : "https://apis.google.com/marketplace/button?usegapi=1",
            "methods" : ["launchurl"]
          },
          ":signuphost:" : "https://plus.google.com",
          "ratingbadge" : {
            "url" : "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
          },
          "appcirclepicker" : {
            "url" : ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
          },
          "follow" : {
            "url" : ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
          },
          "community" : {
            "url" : ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
          },
          "sharetoclassroom" : {
            "url" : "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi=1"
          },
          "ytshare" : {
            "params" : {
              "url" : ""
            },
            "url" : ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
          },
          "plus" : {
            "url" : ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
          },
          "family_creation" : {
            "params" : {
              "url" : ""
            },
            "url" : "https://families.google.com/webcreation?usegapi=1&usegapi=1"
          },
          "commentcount" : {
            "url" : ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
          },
          "configurator" : {
            "url" : ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
          },
          "zoomableimage" : {
            "url" : "https://ssl.gstatic.com/microscope/embed/"
          },
          "appfinder" : {
            "url" : "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
          },
          "savetowallet" : {
            "url" : "https://pay.google.com/gp/v/widget/save"
          },
          "person" : {
            "url" : ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
          },
          "savetodrive" : {
            "url" : "https://drive.google.com/savetodrivebutton?usegapi=1",
            "methods" : ["save"]
          },
          "page" : {
            "url" : ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
          },
          "card" : {
            "url" : ":socialhost:/:session_prefix:_/hovercard/card"
          }
        }
      },
      "h" : "m;/_/scs/apps-static/_/js/k=oz.gapi.en_US.ebk8EhJxLu4.O/am=wQE/d=1/ct=zgms/rs=AGLTcCP6GuLd1aTsaaFO6Zp_Rjnyu1Wv5g/m=__features__",
      "u" : "http://localhost:8080/api.js",
      "hee" : true,
      "fp" : "3062b5bb7f024cab7e33463197a0fb6966f3cf84",
      "dpo" : false
    },
    "fp" : "3062b5bb7f024cab7e33463197a0fb6966f3cf84",
    "annotation" : ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
    "bimodal" : ["signin", "share"]
  }
});

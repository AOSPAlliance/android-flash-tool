/* JS */
gapi.loaded_0(function(_) {
    var window = this;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var qa, ya, Ja, Ka, Ma, Na;
    _.ia = function(a) {
        return function() {
            return _.ha[a].apply(this, arguments)
        }
    };
    _._DumpException = function(a) {
        throw a;
    };
    _.ha = [];
    qa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    _.va = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: qa(a)
        }
    };
    _.wa = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    };
    if ("function" == typeof Object.setPrototypeOf) ya = Object.setPrototypeOf;
    else {
        var Da;
        a: {
            var Fa = {
                    a: !0
                },
                Ga = {};
            try {
                Ga.__proto__ = Fa;
                Da = Ga.a;
                break a
            } catch (a) {}
            Da = !1
        }
        ya = Da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    _.Ia = ya;
    Ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };
    Ka = function(a) {
        a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("a");
    };
    Ma = Ka(this);
    Na = function(a, b) {
        if (b) {
            var c = Ma;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && Ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    Na("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var Pa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Na("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Pa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    Na("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Pa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    var Qa = function() {
            Qa = function() {};
            Ma.Symbol || (Ma.Symbol = Ra)
        },
        Sa = function(a, b) {
            this.uP = a;
            Ja(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    Sa.prototype.toString = function() {
        return this.uP
    };
    var Ra = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new Sa("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        Va = function() {
            Qa();
            var a = Ma.Symbol.iterator;
            a || (a = Ma.Symbol.iterator = Ma.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && Ja(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Ua(qa(this))
                }
            });
            Va = function() {}
        },
        Ua = function(a) {
            Va();
            a = {
                next: a
            };
            a[Ma.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        Wa = function(a, b) {
            Va();
            a instanceof String && (a += "");
            var c = 0,
                d = {
                    next: function() {
                        if (c < a.length) {
                            var e = c++;
                            return {
                                value: b(e, a[e]),
                                done: !1
                            }
                        }
                        d.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        };
                        return d.next()
                    }
                };
            d[Symbol.iterator] = function() {
                return d
            };
            return d
        };
    Na("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Wa(this, function(b) {
                return b
            })
        }
    });
    Na("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Wa(this, function(b, c) {
                return c
            })
        }
    });
    Na("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    Na("Promise", function(a) {
        function b() {
            this.Re = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(k) {
                k(g)
            })
        }
        if (a) return a;
        b.prototype.vH = function(g) {
            if (null == this.Re) {
                this.Re = [];
                var k = this;
                this.wH(function() {
                    k.jU()
                })
            }
            this.Re.push(g)
        };
        var d = Ma.setTimeout;
        b.prototype.wH = function(g) {
            d(g, 0)
        };
        b.prototype.jU = function() {
            for (; this.Re && this.Re.length;) {
                var g = this.Re;
                this.Re = [];
                for (var k = 0; k < g.length; ++k) {
                    var l = g[k];
                    g[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.qn(m)
                    }
                }
            }
            this.Re = null
        };
        b.prototype.qn = function(g) {
            this.wH(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.Da = 0;
            this.Pf = void 0;
            this.vo = [];
            var k = this.Oz();
            try {
                g(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.Oz = function() {
            function g(m) {
                return function(n) {
                    l || (l = !0, m.call(k, n))
                }
            }
            var k = this,
                l = !1;
            return {
                resolve: g(this.l0),
                reject: g(this.rj)
            }
        };
        e.prototype.l0 = function(g) {
            if (g === this) this.rj(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.Y1(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var k = null != g;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ?
                this.k0(g) : this.fJ(g)
            }
        };
        e.prototype.k0 = function(g) {
            var k = void 0;
            try {
                k = g.then
            } catch (l) {
                this.rj(l);
                return
            }
            "function" == typeof k ? this.Z1(k, g) : this.fJ(g)
        };
        e.prototype.rj = function(g) {
            this.pO(2, g)
        };
        e.prototype.fJ = function(g) {
            this.pO(1, g)
        };
        e.prototype.pO = function(g, k) {
            if (0 != this.Da) throw Error("b`" + g + "`" + k + "`" + this.Da);
            this.Da = g;
            this.Pf = k;
            this.lU()
        };
        e.prototype.lU = function() {
            if (null != this.vo) {
                for (var g = 0; g < this.vo.length; ++g) f.vH(this.vo[g]);
                this.vo = null
            }
        };
        var f = new b;
        e.prototype.Y1 = function(g) {
            var k = this.Oz();
            g.Xt(k.resolve, k.reject)
        };
        e.prototype.Z1 = function(g, k) {
            var l = this.Oz();
            try {
                g.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function(g, k) {
            function l(t, r) {
                return "function" == typeof t ? function(v) {
                    try {
                        m(t(v))
                    } catch (u) {
                        n(u)
                    }
                } : r
            }
            var m, n, p = new e(function(t, r) {
                m = t;
                n = r
            });
            this.Xt(l(g, m), l(k, n));
            return p
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Xt = function(g, k) {
            function l() {
                switch (m.Da) {
                    case 1:
                        g(m.Pf);
                        break;
                    case 2:
                        k(m.Pf);
                        break;
                    default:
                        throw Error("c`" + m.Da);
                }
            }
            var m = this;
            null == this.vo ? f.vH(l) : this.vo.push(l)
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(k, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(k, l) {
                for (var m = _.va(g), n = m.next(); !n.done; n = m.next()) c(n.value).Xt(k, l)
            })
        };
        e.all = function(g) {
            var k = _.va(g),
                l = k.next();
            return l.done ? c([]) : new e(function(m, n) {
                function p(v) {
                    return function(u) {
                        t[v] = u;
                        r--;
                        0 == r && m(t)
                    }
                }
                var t = [],
                    r = 0;
                do t.push(void 0), r++, c(l.value).Xt(p(t.length - 1), n), l = k.next(); while (!l.done)
            })
        };
        return e
    });
    Na("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    Na("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    Na("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Pa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    var Xa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Na("WeakMap", function(a) {
        function b() {}

        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function d(l) {
            if (!Xa(l, f)) {
                var m = new b;
                Ja(l, f, {
                    value: m
                })
            }
        }

        function e(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof b) return n;
                d(n);
                return m(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(m)) return !1;
                    n.delete(l);
                    n.set(m, 4);
                    return !n.has(l) && 4 == n.get(m)
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            k = function(l) {
                this.Ca = (g += Math.random() + 1).toString();
                if (l) {
                    l = _.va(l);
                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        k.prototype.set = function(l, m) {
            if (!c(l)) throw Error("d");
            d(l);
            if (!Xa(l, f)) throw Error("e`" + l);
            l[f][this.Ca] = m;
            return this
        };
        k.prototype.get = function(l) {
            return c(l) && Xa(l, f) ? l[f][this.Ca] : void 0
        };
        k.prototype.has = function(l) {
            return c(l) && Xa(l, f) && Xa(l[f], this.Ca)
        };
        k.prototype.delete =
            function(l) {
                return c(l) && Xa(l, f) && Xa(l[f], this.Ca) ? delete l[f][this.Ca] : !1
            };
        return k
    });
    Na("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        l = new a(_.va([
                            [k, "s"]
                        ]));
                    if ("s" != l.get(k) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        Va();
        var b = new WeakMap,
            c = function(k) {
                this.yf = {};
                this.Xe = f();
                this.size = 0;
                if (k) {
                    k = _.va(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.yf[m.id] = []);
            m.ve ? m.ve.value = l : (m.ve = {
                next: this.Xe,
                oj: this.Xe.oj,
                head: this.Xe,
                key: k,
                value: l
            }, m.list.push(m.ve), this.Xe.oj.next = m.ve, this.Xe.oj = m.ve, this.size++);
            return this
        };
        c.prototype.delete = function(k) {
            k = d(this, k);
            return k.ve && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.yf[k.id], k.ve.oj.next = k.ve.next,
                k.ve.next.oj = k.ve.oj, k.ve.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.yf = {};
            this.Xe = this.Xe.oj = f();
            this.size = 0
        };
        c.prototype.has = function(k) {
            return !!d(this, k).ve
        };
        c.prototype.get = function(k) {
            return (k = d(this, k).ve) && k.value
        };
        c.prototype.entries = function() {
            return e(this, function(k) {
                return [k.key, k.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(k) {
                return k.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(k) {
                return k.value
            })
        };
        c.prototype.forEach = function(k, l) {
            for (var m =
                    this.entries(), n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(k, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
                var n = k.yf[m];
                if (n && Xa(k.yf, m))
                    for (k = 0; k < n.length; k++) {
                        var p = n[k];
                        if (l !== l && p.key !== p.key || l === p.key) return {
                            id: m,
                            list: n,
                            index: k,
                            ve: p
                        }
                    }
                return {
                    id: m,
                    list: n,
                    index: -1,
                    ve: void 0
                }
            },
            e = function(k, l) {
                var m = k.Xe;
                return Ua(function() {
                    if (m) {
                        for (; m.head != k.Xe;) m = m.oj;
                        for (; m.next !=
                            m.head;) return m = m.next, {
                            done: !1,
                            value: l(m)
                        };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var k = {};
                return k.oj = k.next = k.head = k
            },
            g = 0;
        return c
    });
    Na("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.va([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        Va();
        var b = function(c) {
            this.U = new Map;
            if (c) {
                c = _.va(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.U.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.U.set(c, c);
            this.size = this.U.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.U.delete(c);
            this.size = this.U.size;
            return c
        };
        b.prototype.clear = function() {
            this.U.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.U.has(c)
        };
        b.prototype.entries = function() {
            return this.U.entries()
        };
        b.prototype.values = function() {
            return this.U.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.U.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    Na("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Xa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    _.Za = _.Za || {};
    _.q = this || self;
    _.$a = "closure_uid_" + (1E9 * Math.random() >>> 0);
    _.ab = Date.now || function() {
        return +new Date
    };
    _.z = function(a, b) {
        a = a.split(".");
        var c = _.q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    };
    _.G = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.H = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Op = function(d, e, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g)
        }
    };
    gadgets = window.gadgets || {};
    osapi = window.osapi = window.osapi || {};

    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            blogger: {
                url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            appfinder: {
                url: "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        },
        client: {
            perApiBatch: !0
        }
    });

    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "onload"
        },
        iframes: {
            ":source:": "3p"
        }
    });

    var nb, ob;
    _.gb = function() {};
    _.hb = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" ==
            b && "undefined" == typeof a.call) return "object";
        return b
    };
    _.ib = function(a) {
        return "array" == _.hb(a)
    };
    _.jb = function(a) {
        var b = _.hb(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.kb = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.lb = function(a) {
        return "function" == _.hb(a)
    };
    nb = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    ob = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.L = function(a, b, c) {
        _.L = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? nb : ob;
        return _.L.apply(null, arguments)
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.qb = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, _.qb);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    _.G(_.qb, Error);
    _.qb.prototype.name = "CustomError";
    var rb = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        _.qb.call(this, c + a[d])
    };
    _.G(rb, _.qb);
    rb.prototype.name = "AssertionError";
    _.sb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.tb = Array.prototype.lastIndexOf ? function(a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    } : function(a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.vb = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.wb = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    };
    _.yb = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    _.zb = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1
    };
    _.Ab = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };
    _.Bb = function(a, b) {
        return 0 <= (0, _.sb)(a, b)
    };
    var Db;
    _.Cb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    _.Eb = function(a, b) {
        var c = 0;
        a = (0, _.Cb)(String(a)).split(".");
        b = (0, _.Cb)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Db(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Db(0 == f[2].length, 0 == g[2].length) || Db(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    };
    Db = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    a: {
        var Gb = _.q.navigator;
        if (Gb) {
            var Hb = Gb.userAgent;
            if (Hb) {
                _.Fb = Hb;
                break a
            }
        }
        _.Fb = ""
    }
    _.Ib = function(a) {
        return -1 != _.Fb.indexOf(a)
    };
    var Kb;
    _.Jb = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    Kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    _.Lb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Kb.length; f++) c = Kb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    _.Mb = function() {
        return _.Ib("Opera")
    };
    _.Nb = function() {
        return _.Ib("Trident") || _.Ib("MSIE")
    };
    _.Ob = function() {
        return _.Ib("Firefox") || _.Ib("FxiOS")
    };
    _.Pb = function() {
        return (_.Ib("Chrome") || _.Ib("CriOS")) && !_.Ib("Edge")
    };
    _.Qb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Sb, Rb;
    _.Tb = function(a, b) {
        this.FO = a === Rb && b || "";
        this.fS = Sb
    };
    _.Tb.prototype.kh = !0;
    _.Tb.prototype.Hf = function() {
        return this.FO
    };
    _.Ub = function(a) {
        return a instanceof _.Tb && a.constructor === _.Tb && a.fS === Sb ? a.FO : "type_error:Const"
    };
    _.Vb = function(a) {
        return new _.Tb(Rb, a)
    };
    Sb = {};
    Rb = {};
    _.Wb = _.Vb("");
    var Xb = function() {
        this.JM = ""
    };
    Xb.prototype.kh = !0;
    Xb.prototype.Hf = function() {
        return this.JM.toString()
    };
    Xb.prototype.lh = function(a) {
        this.JM = a;
        return this
    };
    (new Xb).lh("");
    var $b;
    _.ac = function(a, b) {
        this.KM = a === _.Zb && b || "";
        this.PR = $b
    };
    _.ac.prototype.kh = !0;
    _.ac.prototype.Hf = function() {
        return this.KM.toString()
    };
    _.ac.prototype.iC = !0;
    _.ac.prototype.Ph = _.ia(1);
    _.bc = function(a) {
        if (a instanceof _.ac && a.constructor === _.ac && a.PR === $b) return a.KM;
        _.hb(a);
        return "type_error:SafeUrl"
    };
    _.cc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.dc = function(a) {
        if (a instanceof _.ac) return a;
        a = "object" == typeof a && a.kh ? a.Hf() : String(a);
        _.cc.test(a) || (a = "about:invalid#zClosurez");
        return new _.ac(_.Zb, a)
    };
    $b = {};
    _.Zb = {};
    var hc, ic, oc, mc, lc, kc, nc, pc;
    _.fc = function() {
        this.ND = "";
        this.OR = ec
    };
    _.fc.prototype.kh = !0;
    var ec = {};
    _.fc.prototype.Hf = function() {
        return this.ND
    };
    _.gc = function(a) {
        if (a instanceof _.fc && a.constructor === _.fc && a.OR === ec) return a.ND;
        _.hb(a);
        return "type_error:SafeStyle"
    };
    _.fc.prototype.lh = function(a) {
        this.ND = a;
        return this
    };
    hc = (new _.fc).lh("");
    _.jc = function(a) {
        var b = "",
            c;
        for (c in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("j`" + c);
            var d = a[c];
            null != d && (d = Array.isArray(d) ? (0, _.yb)(d, ic).join(" ") : ic(d), b += c + ":" + d + ";")
        }
        return b ? (new _.fc).lh(b) : hc
    };
    ic = function(a) {
        if (a instanceof _.ac) return 'url("' + _.bc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof _.Tb) a = _.Ub(a);
        else {
            a = String(a);
            var b = a.replace(kc, "$1").replace(kc, "$1").replace(lc, "url");
            if (mc.test(b)) {
                if (b = !nc.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && oc(a)
                }
                a = b ? pc(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new rb("Value does not allow [{;}], got: %s.", [a]);
        return a
    };
    oc = function(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    };
    mc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/;
    lc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    kc = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
    nc = /\/\*/;
    pc = function(a) {
        return a.replace(lc, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, k, l) {
                f = k;
                return l
            });
            b = _.dc(d).Hf();
            return c + f + b + f + e
        })
    };
    _.rc = function() {
        this.MD = "";
        this.NR = _.qc
    };
    _.rc.prototype.kh = !0;
    _.qc = {};
    _.tc = function(a) {
        a = _.Ub(a);
        return 0 === a.length ? sc : (new _.rc).lh(a)
    };
    _.rc.prototype.Hf = function() {
        return this.MD
    };
    _.rc.prototype.lh = function(a) {
        this.MD = a;
        return this
    };
    var sc = (new _.rc).lh("");
    var uc;
    _.vc = function() {
        this.LD = "";
        this.MR = uc;
        this.AI = null
    };
    _.vc.prototype.iC = !0;
    _.vc.prototype.Ph = _.ia(0);
    _.vc.prototype.kh = !0;
    _.vc.prototype.Hf = function() {
        return this.LD.toString()
    };
    _.xc = function(a) {
        if (a instanceof _.vc && a.constructor === _.vc && a.MR === uc) return a.LD;
        _.hb(a);
        return "type_error:SafeHtml"
    };
    uc = {};
    _.yc = function(a, b) {
        return (new _.vc).lh(a, b)
    };
    _.vc.prototype.lh = function(a, b) {
        this.LD = a;
        this.AI = b;
        return this
    };
    _.yc("<!DOCTYPE html>", 0);
    _.zc = _.yc("", 0);
    _.Ac = _.yc("<br>", 0);
    _.Bc = _.Qb(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.xc(_.zc);
        return !b.parentElement
    });
    _.Cc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    _.Dc = 2147483648 * Math.random() | 0;
    _.Ec = function() {
        return _.Ib("iPhone") && !_.Ib("iPod") && !_.Ib("iPad")
    };
    _.Fc = function() {
        return _.Ec() || _.Ib("iPad") || _.Ib("iPod")
    };
    var Gc = function(a) {
            Gc[" "](a);
            return a
        },
        Jc;
    Gc[" "] = _.gb;
    _.Hc = function(a, b) {
        try {
            return Gc(a[b]), !0
        } catch (c) {}
        return !1
    };
    Jc = function(a, b) {
        var c = Ic;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var $c, ad, Ic, id;
    _.Kc = _.Mb();
    _.Lc = _.Nb();
    _.Mc = _.Ib("Edge");
    _.Nc = _.Mc || _.Lc;
    _.Oc = _.Ib("Gecko") && !(-1 != _.Fb.toLowerCase().indexOf("webkit") && !_.Ib("Edge")) && !(_.Ib("Trident") || _.Ib("MSIE")) && !_.Ib("Edge");
    _.Pc = -1 != _.Fb.toLowerCase().indexOf("webkit") && !_.Ib("Edge");
    _.Qc = _.Pc && _.Ib("Mobile");
    _.Rc = _.Ib("Macintosh");
    _.Sc = _.Ib("Windows");
    _.Tc = _.Ib("Linux") || _.Ib("CrOS");
    _.Uc = _.Ib("Android");
    _.Vc = _.Ec();
    _.Wc = _.Ib("iPad");
    _.Xc = _.Ib("iPod");
    _.Yc = _.Fc();
    $c = function() {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var bd = "",
            cd = function() {
                var a = _.Fb;
                if (_.Oc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (_.Mc) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Lc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.Pc) return /WebKit\/(\S+)/.exec(a);
                if (_.Kc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();cd && (bd = cd ? cd[1] : "");
        if (_.Lc) {
            var dd = $c();
            if (null != dd && dd > parseFloat(bd)) {
                ad = String(dd);
                break a
            }
        }
        ad = bd
    }
    _.ed = ad;
    Ic = {};
    _.fd = function(a) {
        return Jc(a, function() {
            return 0 <= _.Eb(_.ed, a)
        })
    };
    _.hd = function(a) {
        return Number(_.gd) >= a
    };
    if (_.q.document && _.Lc) {
        var jd = $c();
        id = jd ? jd : parseInt(_.ed, 10) || void 0
    } else id = void 0;
    _.gd = id;

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ld, nd, rd, sd, td, ud, vd, xd, yd, Bd, Md, Nd;
    _.kd = function(a, b) {
        return _.ha[a] = b
    };
    _.ac.prototype.Ph = _.kd(1, function() {
        return 1
    });
    _.vc.prototype.Ph = _.kd(0, function() {
        return this.AI
    });
    ld = 0;
    _.md = function(a) {
        return Object.prototype.hasOwnProperty.call(a, _.$a) && a[_.$a] || (a[_.$a] = ++ld)
    };
    _.od = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.pd = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    _.qd = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    rd = /&/g;
    sd = /</g;
    td = />/g;
    ud = /"/g;
    vd = /'/g;
    xd = /\x00/g;
    yd = /[\x00&<>"']/;
    _.zd = function(a, b) {
        if (b) a = a.replace(rd, "&amp;").replace(sd, "&lt;").replace(td, "&gt;").replace(ud, "&quot;").replace(vd, "&#39;").replace(xd, "&#0;");
        else {
            if (!yd.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(rd, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(sd, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(td, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ud, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(vd, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(xd, "&#0;"))
        }
        return a
    };
    _.Ad = {};
    Bd = {};
    _.Cd = function(a, b) {
        this.LM = a === _.Ad && b || "";
        this.pS = Bd
    };
    _.Cd.prototype.kh = !0;
    _.Cd.prototype.Hf = function() {
        return this.LM.toString()
    };
    _.Cd.prototype.iC = !0;
    _.Cd.prototype.Ph = function() {
        return 1
    };
    _.Dd = function(a) {
        if (a instanceof _.Cd && a.constructor === _.Cd && a.pS === Bd) return a.LM;
        _.hb(a);
        return "type_error:TrustedResourceUrl"
    };
    _.Ed = function(a) {
        return _.Dd(a).toString()
    };
    _.Fd = function(a) {
        return new _.Cd(_.Ad, _.Ub(a))
    };
    _.Gd = function(a) {
        if (a instanceof _.ac) return a;
        a = "object" == typeof a && a.kh ? a.Hf() : String(a);
        _.cc.test(a) || (a = "about:invalid#zClosurez");
        return new _.ac(_.Zb, a)
    };
    _.Hd = function(a) {
        if (a instanceof _.vc) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.iC && (c = a.Ph());
        return _.yc(_.zd(b && a.kh ? a.Hf() : String(a)), c)
    };
    _.Id = function(a, b) {
        if ((0, _.Bc)())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = _.xc(b)
    };
    _.Jd = function(a, b) {
        b = b instanceof _.ac ? b : _.Gd(b);
        a.href = _.bc(b)
    };
    _.Kd = function(a) {
        return a = _.zd(a, void 0)
    };
    _.Ld = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Md = !_.Lc || _.hd(9);
    Nd = !_.Oc && !_.Lc || _.Lc && _.hd(9) || _.Oc && _.fd("1.9.1");
    _.Od = _.Lc && !_.fd("9");
    _.Pd = _.Lc || _.Kc || _.Pc;
    _.Qd = _.Lc && !_.hd(9);
    var Yd, be, de;
    _.Td = function(a) {
        return a ? new _.Rd(_.Sd(a)) : nd || (nd = new _.Rd)
    };
    _.Ud = function(a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    };
    _.Vd = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.Bb(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    };
    _.Zd = function(a, b) {
        _.Jb(b, function(c, d) {
            c && "object" == typeof c && c.kh && (c = c.Hf());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Yd.hasOwnProperty(d) ? a.setAttribute(Yd[d], c) : _.qd(d, "aria-") || _.qd(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    };
    Yd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.$d = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.ce = function(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!Md && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', _.Kd(d.name), '"');
            if (d.type) {
                c.push(' type="', _.Kd(d.type), '"');
                var e = {};
                _.Lb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = _.ae(a, c);
        d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : _.Zd(c, d));
        2 < b.length && be(a, c, b, 2);
        return c
    };
    be = function(a, b, c, d) {
        function e(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !_.jb(f) || _.kb(f) && 0 < f.nodeType ? e(f) : (0, _.vb)(de(f) ? _.pd(f) : f, e)
        }
    };
    _.ee = function(a) {
        return _.ae(document, a)
    };
    _.ae = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.fe = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    _.ge = function(a, b) {
        be(_.Sd(a), a, arguments, 1)
    };
    _.he = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    _.ie = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    _.je = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.ke = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode) return a.removeNode(!1);
            for (; b = a.firstChild;) c.insertBefore(b, a);
            return _.je(a)
        }
    };
    _.le = function(a) {
        return Nd && void 0 != a.children ? a.children : (0, _.wb)(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    };
    _.me = function(a) {
        return _.kb(a) && 1 == a.nodeType
    };
    _.ne = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.Sd = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.oe = function(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else _.he(a), a.appendChild(_.Sd(a).createTextNode(String(b)))
    };
    de = function(a) {
        if (a && "number" == typeof a.length) {
            if (_.kb(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (_.lb(a)) return "function" == typeof a.item
        }
        return !1
    };
    _.Rd = function(a) {
        this.mb = a || _.q.document || document
    };
    _.h = _.Rd.prototype;
    _.h.Fa = _.Td;
    _.h.GE = _.ia(2);
    _.h.rb = function() {
        return this.mb
    };
    _.h.T = function(a) {
        return _.Ud(this.mb, a)
    };
    _.h.getElementsByTagName = function(a, b) {
        return (b || this.mb).getElementsByTagName(String(a))
    };
    _.h.ma = function(a, b, c) {
        return _.ce(this.mb, arguments)
    };
    _.h.createElement = function(a) {
        return _.ae(this.mb, a)
    };
    _.h.createTextNode = function(a) {
        return this.mb.createTextNode(String(a))
    };
    _.h.vb = function() {
        var a = this.mb;
        return a.parentWindow || a.defaultView
    };
    _.h.appendChild = function(a, b) {
        a.appendChild(b)
    };
    _.h.append = _.ge;
    _.h.canHaveChildren = _.fe;
    _.h.Ld = _.he;
    _.h.aL = _.ie;
    _.h.removeNode = _.je;
    _.h.AU = _.ke;
    _.h.WA = _.le;
    _.h.isElement = _.me;
    _.h.contains = _.ne;
    _.h.Yh = _.ia(3);
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.pe = window;
    _.qe = document;
    _.se = _.pe.location;
    _.te = /\[native code\]/;
    _.ue = function(a, b, c) {
        return a[b] = a[b] || c
    };
    _.ve = function() {
        var a;
        if ((a = Object.create) && _.te.test(a)) a = a(null);
        else {
            a = {};
            for (var b in a) a[b] = void 0
        }
        return a
    };
    _.we = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    _.xe = function(a, b) {
        a = a || {};
        for (var c in a) _.we(a, c) && (b[c] = a[c])
    };
    _.ye = _.ue(_.pe, "gapi", {});
    _.ze = function(a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
        if (a = a && (d.exec(a) || b.exec(a))) try {
            c = decodeURIComponent(a[2])
        } catch (e) {}
        return c
    };
    _.Ae = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
    _.Be = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g");
    _.Ce = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i");
    _.Ee = function(a, b, c) {
        _.De(a, b, c, "add", "at")
    };
    _.De = function(a, b, c, d, e) {
        if (a[d + "EventListener"]) a[d + "EventListener"](b, c, !1);
        else if (a[e + "tachEvent"]) a[e + "tachEvent"]("on" + b, c)
    };
    _.Fe = _.ue(_.pe, "___jsl", _.ve());
    _.ue(_.Fe, "I", 0);
    _.ue(_.Fe, "hel", 10);
    var Ge, He, Ie, Je, Ke, Le, Me;
    Ge = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    };
    He = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    };
    Ie = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    };
    Je = function(a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !Ie(a[d]) && !Ie(b[d]) ? Je(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = Ie(b[d]) ? [] : {}, Je(a[d], b[d])) : a[d] = b[d])
    };
    Ke = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a)
            } catch (c) {}
            if ("object" === typeof b) return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {}
            if ("object" === typeof b) return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {}
            return "object" === typeof b ? b : {}
        }
    };
    Le = function(a, b) {
        var c = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        Je(c, b);
        a.push(c)
    };
    Me = function(a) {
        He(!0);
        var b = window.___gcfg,
            c = Ge("cu"),
            d = window.___gu;
        b && b !== d && (Le(c, b), window.___gu = b);
        b = Ge("cu");
        var e = document.scripts || document.getElementsByTagName("script") || [];
        d = [];
        var f = [];
        f.push.apply(f, Ge("us"));
        for (var g = 0; g < e.length; ++g)
            for (var k = e[g], l = 0; l < f.length; ++l) k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g =
            f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = Ke(f)) && b.push(f));
        a && Le(c, a);
        d = Ge("cd");
        a = 0;
        for (b = d.length; a < b; ++a) Je(He(), d[a], !0);
        d = Ge("ci");
        a = 0;
        for (b = d.length; a < b; ++a) Je(He(), d[a], !0);
        a = 0;
        for (b = c.length; a < b; ++a) Je(He(), c[a], !0)
    };
    _.R = function(a, b) {
        var c = He();
        if (!a) return c;
        a = a.split("/");
        for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d) c = c[a[d]];
        return d === a.length && void 0 !== c ? c : b
    };
    _.Ne = function(a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var g = {};
                d = d[a[e]] = g
            }
            d[a[e]] = b
        } else c = a;
        Me(c)
    };
    var Oe = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.ue(_.Fe, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    Oe && Oe();
    Me();
    _.z("gapi.config.get", _.R);
    _.z("gapi.config.update", _.Ne);

    _.Pe = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (_.jb(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    };
    _.Qe = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++];
            var f = e;
            f = _.kb(f) ? "o" + _.md(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    };
    _.Re = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    _.Se = function(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.Vd(c, "*", a, b)[0] || null
        }
        return a || null
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.Kj = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    _.Lj = function(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    _.Mj = [];
    _.Nj = [];
    _.Oj = !1;
    _.Pj = function(a) {
        _.Mj[_.Mj.length] = a;
        if (_.Oj)
            for (var b = 0; b < _.Nj.length; b++) a((0, _.L)(_.Nj[b].wrap, _.Nj[b]))
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Qj, Rj, Sj, ak;
    Qj = null;
    Rj = /^[\w+/_-]+[=]{0,2}$/;
    Sj = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Rj.test(a) ? a : ""
    };
    _.Tj = function(a) {
        if (a && a != _.q) return Sj(a.document);
        null === Qj && (Qj = Sj(_.q.document));
        return Qj
    };
    _.Uj = function(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    };
    _.Vj = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    _.Wj = function(a) {
        return a
    };
    _.Xj = function(a, b) {
        a.src = _.Ed(b)
    };
    _.Yj = function(a, b) {
        a.src = _.Dd(b);
        (b = _.Tj()) && a.setAttribute("nonce", b)
    };
    _.Zj = function(a) {
        var b = window.location;
        a = a instanceof _.ac ? a : _.Gd(a);
        b.href = _.bc(a)
    };
    ak = function(a, b) {
        this.KT = a;
        this.i0 = b;
        this.uw = 0;
        this.Xe = null
    };
    ak.prototype.get = function() {
        if (0 < this.uw) {
            this.uw--;
            var a = this.Xe;
            this.Xe = a.next;
            a.next = null
        } else a = this.KT();
        return a
    };
    ak.prototype.put = function(a) {
        this.i0(a);
        100 > this.uw && (this.uw++, a.next = this.Xe, this.Xe = a)
    };
    var bk, dk, ek, ck;
    bk = function(a) {
        _.q.setTimeout(function() {
            throw a;
        }, 0)
    };
    _.fk = function(a) {
        a = ck(a);
        !_.lb(_.q.setImmediate) || _.q.Window && _.q.Window.prototype && !_.Ib("Edge") && _.q.Window.prototype.setImmediate == _.q.setImmediate ? (dk || (dk = ek()), dk(a)) : _.q.setImmediate(a)
    };
    ek = function() {
        var a = _.q.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.Ib("Presto") && (a = function() {
            var e = _.ee("IFRAME");
            e.style.display = "none";
            _.Xj(e, _.Fd(_.Wb));
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(_.xc(_.zc));
            e.close();
            var g = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0, _.L)(function(l) {
                if (("*" == k || l.origin ==
                        k) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, k)
                }
            }
        });
        if ("undefined" !== typeof a && !_.Nb()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            _.q.setTimeout(e, 0)
        }
    };
    ck = _.Wj;
    _.Pj(function(a) {
        ck = a
    });
    var gk = function() {
            this.Xx = this.kp = null
        },
        ik = new ak(function() {
            return new hk
        }, function(a) {
            a.reset()
        });
    gk.prototype.add = function(a, b) {
        var c = ik.get();
        c.set(a, b);
        this.Xx ? this.Xx.next = c : this.kp = c;
        this.Xx = c
    };
    gk.prototype.remove = function() {
        var a = null;
        this.kp && (a = this.kp, this.kp = this.kp.next, this.kp || (this.Xx = null), a.next = null);
        return a
    };
    var hk = function() {
        this.next = this.scope = this.Yg = null
    };
    hk.prototype.set = function(a, b) {
        this.Yg = a;
        this.scope = b;
        this.next = null
    };
    hk.prototype.reset = function() {
        this.next = this.scope = this.Yg = null
    };
    var jk, kk, lk, mk, ok;
    _.nk = function(a, b) {
        jk || kk();
        lk || (jk(), lk = !0);
        mk.add(a, b)
    };
    kk = function() {
        if (_.q.Promise && _.q.Promise.resolve) {
            var a = _.q.Promise.resolve(void 0);
            jk = function() {
                a.then(ok)
            }
        } else jk = function() {
            _.fk(ok)
        }
    };
    lk = !1;
    mk = new gk;
    ok = function() {
        for (var a; a = mk.remove();) {
            try {
                a.Yg.call(a.scope)
            } catch (b) {
                bk(b)
            }
            ik.put(a)
        }
        lk = !1
    };
    _.pk = function(a) {
        a.prototype.$goog_Thenable = !0
    };
    _.qk = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var sk, tk, Ek, Ck;
    _.rk = function(a, b) {
        this.Da = 0;
        this.Pf = void 0;
        this.un = this.Yj = this.$a = null;
        this.mv = this.AA = !1;
        if (a != _.gb) try {
            var c = this;
            a.call(b, function(d) {
                c.xh(2, d)
            }, function(d) {
                c.xh(3, d)
            })
        } catch (d) {
            this.xh(3, d)
        }
    };
    sk = function() {
        this.next = this.context = this.uo = this.Tr = this.vl = null;
        this.Jp = !1
    };
    sk.prototype.reset = function() {
        this.context = this.uo = this.Tr = this.vl = null;
        this.Jp = !1
    };
    tk = new ak(function() {
        return new sk
    }, function(a) {
        a.reset()
    });
    _.uk = function(a, b, c) {
        var d = tk.get();
        d.Tr = a;
        d.uo = b;
        d.context = c;
        return d
    };
    _.vk = function(a) {
        if (a instanceof _.rk) return a;
        var b = new _.rk(_.gb);
        b.xh(2, a);
        return b
    };
    _.wk = function(a) {
        return new _.rk(function(b, c) {
            c(a)
        })
    };
    _.yk = function(a, b, c) {
        xk(a, b, c, null) || _.nk(_.Kj(b, a))
    };
    _.zk = function(a) {
        return new _.rk(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(m, n) {
                        d--;
                        e[m] = n;
                        0 == d && b(e)
                    }, g = function(m) {
                        c(m)
                    }, k = 0, l; k < a.length; k++) l = a[k], _.yk(l, _.Kj(f, k), g);
            else b(e)
        })
    };
    _.Bk = function() {
        var a, b, c = new _.rk(function(d, e) {
            a = d;
            b = e
        });
        return new Ak(c, a, b)
    };
    _.rk.prototype.then = function(a, b, c) {
        return Ck(this, _.lb(a) ? a : null, _.lb(b) ? b : null, c)
    };
    _.pk(_.rk);
    _.rk.prototype.Ix = function(a, b) {
        return Ck(this, null, a, b)
    };
    _.rk.prototype.cancel = function(a) {
        if (0 == this.Da) {
            var b = new Dk(a);
            _.nk(function() {
                Ek(this, b)
            }, this)
        }
    };
    Ek = function(a, b) {
        if (0 == a.Da)
            if (a.$a) {
                var c = a.$a;
                if (c.Yj) {
                    for (var d = 0, e = null, f = null, g = c.Yj; g && (g.Jp || (d++, g.vl == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.Da && 1 == d ? Ek(c, b) : (f ? (d = f, d.next == c.un && (c.un = d), d.next = d.next.next) : Fk(c), Gk(c, e, 3, b)))
                }
                a.$a = null
            } else a.xh(3, b)
    };
    _.Ik = function(a, b) {
        a.Yj || 2 != a.Da && 3 != a.Da || Hk(a);
        a.un ? a.un.next = b : a.Yj = b;
        a.un = b
    };
    Ck = function(a, b, c, d) {
        var e = _.uk(null, null, null);
        e.vl = new _.rk(function(f, g) {
            e.Tr = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.uo = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof Dk ? g(k) : f(l)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.vl.$a = a;
        _.Ik(a, e);
        return e.vl
    };
    _.rk.prototype.R2 = function(a) {
        this.Da = 0;
        this.xh(2, a)
    };
    _.rk.prototype.S2 = function(a) {
        this.Da = 0;
        this.xh(3, a)
    };
    _.rk.prototype.xh = function(a, b) {
        0 == this.Da && (this === b && (a = 3, b = new TypeError("Promise cannot resolve to itself")), this.Da = 1, xk(b, this.R2, this.S2, this) || (this.Pf = b, this.Da = a, this.$a = null, Hk(this), 3 != a || b instanceof Dk || Jk(this, b)))
    };
    var xk = function(a, b, c, d) {
            if (a instanceof _.rk) return _.Ik(a, _.uk(b || _.gb, c || null, d)), !0;
            if (_.qk(a)) return a.then(b, c, d), !0;
            if (_.kb(a)) try {
                var e = a.then;
                if (_.lb(e)) return Kk(a, e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        },
        Kk = function(a, b, c, d, e) {
            var f = !1,
                g = function(l) {
                    f || (f = !0, c.call(e, l))
                },
                k = function(l) {
                    f || (f = !0, d.call(e, l))
                };
            try {
                b.call(a, g, k)
            } catch (l) {
                k(l)
            }
        },
        Hk = function(a) {
            a.AA || (a.AA = !0, _.nk(a.kU, a))
        },
        Fk = function(a) {
            var b = null;
            a.Yj && (b = a.Yj, a.Yj = b.next, b.next = null);
            a.Yj || (a.un = null);
            return b
        };
    _.rk.prototype.kU = function() {
        for (var a; a = Fk(this);) Gk(this, a, this.Da, this.Pf);
        this.AA = !1
    };
    var Gk = function(a, b, c, d) {
            if (3 == c && b.uo && !b.Jp)
                for (; a && a.mv; a = a.$a) a.mv = !1;
            if (b.vl) b.vl.$a = null, Lk(b, c, d);
            else try {
                b.Jp ? b.Tr.call(b.context) : Lk(b, c, d)
            } catch (e) {
                Mk.call(null, e)
            }
            tk.put(b)
        },
        Lk = function(a, b, c) {
            2 == b ? a.Tr.call(a.context, c) : a.uo && a.uo.call(a.context, c)
        },
        Jk = function(a, b) {
            a.mv = !0;
            _.nk(function() {
                a.mv && Mk.call(null, b)
            })
        },
        Mk = bk,
        Dk = function(a) {
            _.qb.call(this, a)
        };
    _.G(Dk, _.qb);
    Dk.prototype.name = "cancel";
    var Ak = function(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };

    var Px = function() {};
    Px.prototype.LH = null;
    Px.prototype.getOptions = function() {
        var a;
        (a = this.LH) || (a = {}, _.Qx(this) && (a[0] = !0, a[1] = !0), a = this.LH = a);
        return a
    };
    var Sx;
    Sx = function() {};
    _.G(Sx, Px);
    _.Qx = function(a) {
        if (!a.JK && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.JK = d
                } catch (e) {}
            }
            throw Error("na");
        }
        return a.JK
    };
    _.Rx = new Sx;

    _.Te = _.Te || {};

    _.Te = _.Te || {};
    (function() {
        function a(c, d) {
            return String.fromCharCode(d)
        }
        var b = {
            0: !1,
            10: !0,
            13: !0,
            34: !0,
            39: !0,
            60: !0,
            62: !0,
            92: !0,
            8232: !0,
            8233: !0,
            65282: !0,
            65287: !0,
            65308: !0,
            65310: !0,
            65340: !0
        };
        _.Te.escape = function(c, d) {
            if (c) {
                if ("string" === typeof c) return _.Te.escapeString(c);
                if ("Array" === typeof c) {
                    var e = 0;
                    for (d = c.length; e < d; ++e) c[e] = _.Te.escape(c[e])
                } else if ("object" === typeof c && d) {
                    d = {};
                    for (e in c) c.hasOwnProperty(e) && (d[_.Te.escapeString(e)] = _.Te.escape(c[e], !0));
                    return d
                }
            }
            return c
        };
        _.Te.escapeString = function(c) {
            if (!c) return c;
            for (var d = [], e, f, g = 0, k = c.length; g < k; ++g) e = c.charCodeAt(g), f = b[e], !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(c.charAt(g));
            return d.join("")
        };
        _.Te.unescapeString = function(c) {
            return c ? c.replace(/&#([0-9]+);/g, a) : c
        }
    })();

    _.Te = _.Te || {};
    (function() {
        function a(b) {
            var c = "";
            if (3 == b.nodeType || 4 == b.nodeType) c = b.nodeValue;
            else if (b.innerText) c = b.innerText;
            else if (b.innerHTML) c = b.innerHTML;
            else if (b.firstChild) {
                c = [];
                for (b = b.firstChild; b; b = b.nextSibling) c.push(a(b));
                c = c.join("")
            }
            return c
        }
        _.Te.createElement = function(b) {
            if (!document.body || document.body.namespaceURI) try {
                var c = document.createElementNS("http://www.w3.org/1999/xhtml", b)
            } catch (d) {}
            return c || document.createElement(b)
        };
        _.Te.createIframeElement = function(b) {
            var c = _.Te.createElement("iframe");
            try {
                var d = ["<", "iframe"],
                    e = b || {},
                    f;
                for (f in e) e.hasOwnProperty(f) && (d.push(" "), d.push(f), d.push('="'), d.push(_.Te.escapeString(e[f])), d.push('"'));
                d.push("></");
                d.push("iframe");
                d.push(">");
                var g = _.Te.createElement(d.join(""));
                g && (!c || g.tagName == c.tagName && g.namespaceURI == c.namespaceURI) && (c = g)
            } catch (l) {}
            d = c;
            b = b || {};
            for (var k in b) b.hasOwnProperty(k) && (d[k] = b[k]);
            return c
        };
        _.Te.getBodyElement = function() {
            if (document.body) return document.body;
            try {
                var b = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml",
                    "body");
                if (b && 1 == b.length) return b[0]
            } catch (c) {}
            return document.documentElement || document
        };
        _.Te.Bba = function(b) {
            return a(b)
        }
    })();

    (function() {
        function a(e, f) {
            if (!(e < c) && d)
                if (2 === e && d.warn) d.warn(f);
                else if (3 === e && d.error) try {
                d.error(f)
            } catch (g) {} else d.log && d.log(f)
        }
        var b = function(e) {
            a(1, e)
        };
        _.db = function(e) {
            a(2, e)
        };
        _.fb = function(e) {
            a(3, e)
        };
        _.Ue = function() {};
        b.INFO = 1;
        b.WARNING = 2;
        b.NONE = 4;
        var c = 1,
            d = window.console ? window.console : window.opera ? window.opera.postError : void 0;
        return b
    })();

    _.Te = _.Te || {};
    (function() {
        var a = [];
        _.Te.registerOnLoadHandler = function(b) {
            a.push(b)
        };
        _.Te.Mca = function() {
            for (var b = 0, c = a.length; b < c; ++b) a[b]()
        }
    })();

    _.Te = _.Te || {};
    (function() {
        var a = null;
        _.Te.getUrlParameters = function(b) {
            var c = "undefined" === typeof b;
            if (null !== a && c) return a;
            var d = {};
            b = b || window.location.href;
            var e = b.indexOf("?"),
                f = b.indexOf("#");
            b = (-1 === f ? b.substr(e + 1) : [b.substr(e + 1, f - e - 1), "&", b.substr(f + 1)].join("")).split("&");
            e = window.decodeURIComponent ? decodeURIComponent : unescape;
            f = 0;
            for (var g = b.length; f < g; ++f) {
                var k = b[f].indexOf("=");
                if (-1 !== k) {
                    var l = b[f].substring(0, k);
                    k = b[f].substring(k + 1);
                    k = k.replace(/\+/g, " ");
                    try {
                        d[l] = e(k)
                    } catch (m) {}
                }
            }
            c && (a = d);
            return d
        };
        _.Te.getUrlParameters()
    })();
    _.z("gadgets.util.getUrlParameters", _.Te.getUrlParameters);

    var Ve;
    Ve = window.console;
    _.We = function(a) {
        Ve && Ve.log && Ve.log(a)
    };
    _.Xe = function(a) {
        Ve && (Ve.error ? Ve.error(a) : Ve.log && Ve.log(a))
    };
    _.Ye = function(a) {
        Ve && (Ve.warn ? Ve.warn(a) : Ve.log && Ve.log(a))
    };
    _.Ze = function() {};

    _.$e = function() {
        var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
        a && _.Ne(a());
        return {
            register: function(b, c, d) {
                d && d(_.R())
            },
            get: function(b) {
                return _.R(b)
            },
            update: function(b, c) {
                if (c) throw "Config replacement is not supported";
                _.Ne(b)
            },
            init: function() {}
        }
    }();
    _.z("gadgets.config.register", _.$e.register);
    _.z("gadgets.config.get", _.$e.get);
    _.z("gadgets.config.init", _.$e.init);
    _.z("gadgets.config.update", _.$e.update);

    var af, bf, cf, df, ff, gf, hf, jf, kf, lf, mf, nf, of, pf, qf, rf, sf, tf, uf, vf, wf, xf, yf, zf, Af, Bf, Cf, Df, Ef, Ff, Gf, Lf, Mf;
    cf = void 0;
    df = function(a) {
        try {
            return _.q.JSON.parse.call(_.q.JSON, a)
        } catch (b) {
            return !1
        }
    };
    ff = function(a) {
        return Object.prototype.toString.call(a)
    };
    gf = ff(0);
    hf = ff(new Date(0));
    jf = ff(!0);
    kf = ff("");
    lf = ff({});
    mf = ff([]);
    nf = function(a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = ff(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== mf || a.constructor !== Array && a.constructor !== Object) && (e !== lf || a.constructor !== Array && a.constructor !== Object) && e !== kf && e !== gf && e !== jf && e !== hf)) return nf(a.toJSON.call(a), c);
            if (null ==
                a) b[b.length] = "null";
            else if (e === gf) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
            else if (e === jf) b[b.length] = String(!!Number(a));
            else {
                if (e === hf) return nf(a.toISOString.call(a), c);
                if (e === mf && ff(a.length) === gf) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f) f && (b[b.length] = ","), b[b.length] = nf(a[f], c) || "null";
                    b[b.length] = "]"
                } else if (e == kf && ff(a.length) === gf) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f),
                        e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e = nf(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = nf(f), b[b.length] = ":", b[b.length] = e));
                    b[b.length] = "}"
                } else return
            }
            return b.join("")
        }
    };
    of = /[\0-\x07\x0b\x0e-\x1f]/;
    pf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
    qf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
    rf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
    sf = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
    tf = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
    uf = /[ \t\n\r]+/g;
    vf = /[^"]:/;
    wf = /""/g;
    xf = /true|false|null/g;
    yf = /00/;
    zf = /[\{]([^0\}]|0[^:])/;
    Af = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
    Bf = /[^\[,:][\[\{]/;
    Cf = /^(\{|\}|\[|\]|,|:|0)+/;
    Df = /\u2028/g;
    Ef = /\u2029/g;
    Ff = function(a) {
        a = String(a);
        if (of.test(a) || pf.test(a) || qf.test(a) || rf.test(a)) return !1;
        var b = a.replace(sf, '""');
        b = b.replace(tf, "0");
        b = b.replace(uf, "");
        if (vf.test(b)) return !1;
        b = b.replace(wf, "0");
        b = b.replace(xf, "0");
        if (yf.test(b) || zf.test(b) || Af.test(b) || Bf.test(b) || !b || (b = b.replace(Cf, ""))) return !1;
        a = a.replace(Df, "\\u2028").replace(Ef, "\\u2029");
        b = void 0;
        try {
            b = cf ? [df(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 ===
            b.length ? b[0] : !1
    };
    Gf = function() {
        var a = ((_.q.document || {}).scripts || []).length;
        if ((void 0 === af || void 0 === cf || bf !== a) && -1 !== bf) {
            af = cf = !1;
            bf = -1;
            try {
                try {
                    cf = !!_.q.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.q.JSON.stringify.call(_.q.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === df("true") && 3 === df('[{"a":3}]')[0].a
                } catch (b) {}
                af = cf && !df("[00]") && !df('"\u0007"') && !df('"\\0"') && !df('"\\v"')
            } finally {
                bf = a
            }
        }
    };
    _.Hf = function(a) {
        if (-1 === bf) return !1;
        Gf();
        return (af ? df : Ff)(a)
    };
    _.If = function(a) {
        if (-1 !== bf) return Gf(), cf ? _.q.JSON.stringify.call(_.q.JSON, a) : nf(a)
    };
    Lf = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
    Mf = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
            "Z"
        ].join("")
    };
    Date.prototype.toISOString = Lf ? Mf : Date.prototype.toISOString;

    _.z("gadgets.json.stringify", _.If);
    _.z("gadgets.json.parse", _.Hf);

    _.Nf = function() {
        var a = _.qe.readyState;
        return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
    };
    _.Of = function(a) {
        if (_.Nf()) a();
        else {
            var b = !1,
                c = function() {
                    if (!b) return b = !0, a.apply(this, arguments)
                };
            _.pe.addEventListener ? (_.pe.addEventListener("load", c, !1), _.pe.addEventListener("DOMContentLoaded", c, !1)) : _.pe.attachEvent && (_.pe.attachEvent("onreadystatechange", function() {
                _.Nf() && c.apply(this, arguments)
            }), _.pe.attachEvent("onload", c))
        }
    };
    _.ze(_.pe.location.href, "rpctoken") && _.Ee(_.qe, "unload", function() {});
    var Pf = Pf || {};
    Pf.hN = null;
    Pf.VL = null;
    Pf.Av = null;
    Pf.frameElement = null;
    Pf = Pf || {};
    Pf.RF || (Pf.RF = function() {
        function a(f, g, k) {
            "undefined" != typeof window.addEventListener ? window.addEventListener(f, g, k) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + f, g);
            "message" === f && (window.___jsl = window.___jsl || {}, f = window.___jsl, f.RPMQ = f.RPMQ || [], f.RPMQ.push(g))
        }

        function b(f) {
            var g = _.Hf(f.data);
            if (g && g.f) {
                (0, _.Ue)("gadgets.rpc.receive(" + window.name + "): " + f.data);
                var k = _.Qf.getTargetOrigin(g.f);
                e && ("undefined" !== typeof f.origin ? f.origin !== k : f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1]) ? _.fb("Invalid rpc message origin. " +
                    k + " vs " + (f.origin || "")) : c(g, f.origin)
            }
        }
        var c, d, e = !0;
        return {
            oJ: function() {
                return "wpm"
            },
            QY: function() {
                return !0
            },
            init: function(f, g) {
                _.$e.register("rpc", null, function(k) {
                    "true" === String((k && k.rpc || {}).disableForceSecure) && (e = !1)
                });
                c = f;
                d = g;
                a("message", b, !1);
                d("..", !0);
                return !0
            },
            Bc: function(f) {
                d(f, !0);
                return !0
            },
            call: function(f, g, k) {
                var l = _.Qf.getTargetOrigin(f),
                    m = _.Qf.ZG(f);
                l ? window.setTimeout(function() {
                    var n = _.If(k);
                    (0, _.Ue)("gadgets.rpc.send(" + window.name + "): " + n);
                    m.postMessage(n, l)
                }, 0) : ".." != f && _.fb("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                return !0
            }
        }
    }());
    if (window.gadgets && window.gadgets.rpc) "undefined" != typeof _.Qf && _.Qf || (_.Qf = window.gadgets.rpc, _.Qf.config = _.Qf.config, _.Qf.register = _.Qf.register, _.Qf.unregister = _.Qf.unregister, _.Qf.registerDefault = _.Qf.registerDefault, _.Qf.unregisterDefault = _.Qf.unregisterDefault, _.Qf.forceParentVerifiable = _.Qf.forceParentVerifiable, _.Qf.call = _.Qf.call, _.Qf.getRelayUrl = _.Qf.getRelayUrl, _.Qf.setRelayUrl = _.Qf.setRelayUrl, _.Qf.setAuthToken = _.Qf.setAuthToken, _.Qf.setupReceiver = _.Qf.setupReceiver, _.Qf.getAuthToken =
        _.Qf.getAuthToken, _.Qf.removeReceiver = _.Qf.removeReceiver, _.Qf.getRelayChannel = _.Qf.getRelayChannel, _.Qf.receive = _.Qf.receive, _.Qf.SM = _.Qf.receiveSameDomain, _.Qf.getOrigin = _.Qf.getOrigin, _.Qf.getTargetOrigin = _.Qf.getTargetOrigin, _.Qf.ZG = _.Qf._getTargetWin, _.Qf.ES = _.Qf._parseSiblingId);
    else {
        _.Qf = function() {
            function a(x, O) {
                if (!N[x]) {
                    var ba = Ea;
                    O || (ba = ma);
                    N[x] = ba;
                    O = J[x] || [];
                    for (var aa = 0; aa < O.length; ++aa) {
                        var ka = O[aa];
                        ka.t = B[x];
                        ba.call(x, ka.f, ka)
                    }
                    J[x] = []
                }
            }

            function b() {
                function x() {
                    ja = !0
                }
                Ca || ("undefined" !=
                    typeof window.addEventListener ? window.addEventListener("unload", x, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", x), Ca = !0)
            }

            function c(x, O, ba, aa, ka) {
                B[O] && B[O] === ba || (_.fb("Invalid gadgets.rpc token. " + B[O] + " vs " + ba), sa(O, 2));
                ka.onunload = function() {
                    K[O] && !ja && (sa(O, 1), _.Qf.removeReceiver(O))
                };
                b();
                aa = _.Hf(decodeURIComponent(aa))
            }

            function d(x, O) {
                if (x && "string" === typeof x.s && "string" === typeof x.f && x.a instanceof Array)
                    if (B[x.f] && B[x.f] !== x.t && (_.fb("Invalid gadgets.rpc token. " +
                            B[x.f] + " vs " + x.t), sa(x.f, 2)), "__ack" === x.s) window.setTimeout(function() {
                        a(x.f, !0)
                    }, 0);
                    else {
                        x.c && (x.callback = function(ra) {
                            _.Qf.call(x.f, (x.g ? "legacy__" : "") + "__cb", null, x.c, ra)
                        });
                        if (O) {
                            var ba = e(O);
                            x.origin = O;
                            var aa = x.r;
                            try {
                                var ka = e(aa)
                            } catch (ra) {}
                            aa && ka == ba || (aa = O);
                            x.referer = aa
                        }
                        O = (u[x.s] || u[""]).apply(x, x.a);
                        x.c && "undefined" !== typeof O && _.Qf.call(x.f, "__cb", null, x.c, O)
                    }
            }

            function e(x) {
                if (!x) return "";
                x = x.split("#")[0].split("?")[0];
                x = x.toLowerCase();
                0 == x.indexOf("//") && (x = window.location.protocol + x); -
                1 == x.indexOf("://") && (x = window.location.protocol + "//" + x);
                var O = x.substring(x.indexOf("://") + 3),
                    ba = O.indexOf("/"); - 1 != ba && (O = O.substring(0, ba));
                x = x.substring(0, x.indexOf("://"));
                if ("http" !== x && "https" !== x && "chrome-extension" !== x && "file" !== x && "android-app" !== x && "chrome-search" !== x) throw Error("o");
                ba = "";
                var aa = O.indexOf(":");
                if (-1 != aa) {
                    var ka = O.substring(aa + 1);
                    O = O.substring(0, aa);
                    if ("http" === x && "80" !== ka || "https" === x && "443" !== ka) ba = ":" + ka
                }
                return x + "://" + O + ba
            }

            function f(x) {
                if ("/" == x.charAt(0)) {
                    var O =
                        x.indexOf("|");
                    return {
                        id: 0 < O ? x.substring(1, O) : x.substring(1),
                        origin: 0 < O ? x.substring(O + 1) : null
                    }
                }
                return null
            }

            function g(x) {
                if ("undefined" === typeof x || ".." === x) return window.parent;
                var O = f(x);
                if (O) return window.top.frames[O.id];
                x = String(x);
                return (O = window.frames[x]) ? O : (O = document.getElementById(x)) && O.contentWindow ? O.contentWindow : null
            }

            function k(x, O) {
                if (!0 !== K[x]) {
                    "undefined" === typeof K[x] && (K[x] = 0);
                    var ba = g(x);
                    ".." !== x && null == ba || !0 !== Ea.Bc(x, O) ? !0 !== K[x] && 10 > K[x]++ ? window.setTimeout(function() {
                        k(x,
                            O)
                    }, 500) : (N[x] = ma, K[x] = !0) : K[x] = !0
                }
            }

            function l(x) {
                (x = w[x]) && "/" === x.substring(0, 1) && (x = "/" === x.substring(1, 2) ? document.location.protocol + x : document.location.protocol + "//" + document.location.host + x);
                return x
            }

            function m(x, O, ba) {
                O && !/http(s)?:\/\/.+/.test(O) && (0 == O.indexOf("//") ? O = window.location.protocol + O : "/" == O.charAt(0) ? O = window.location.protocol + "//" + window.location.host + O : -1 == O.indexOf("://") && (O = window.location.protocol + "//" + O));
                w[x] = O;
                "undefined" !== typeof ba && (y[x] = !!ba)
            }

            function n(x, O) {
                O = O ||
                    "";
                B[x] = String(O);
                k(x, O)
            }

            function p(x) {
                x = (x.passReferrer || "").split(":", 2);
                I = x[0] || "none";
                X = x[1] || "origin"
            }

            function t(x) {
                "true" === String(x.useLegacyProtocol) && (Ea = Pf.Av || ma, Ea.init(d, a))
            }

            function r(x, O) {
                function ba(aa) {
                    aa = aa && aa.rpc || {};
                    p(aa);
                    var ka = aa.parentRelayUrl || "";
                    ka = e(W.parent || O) + ka;
                    m("..", ka, "true" === String(aa.useLegacyProtocol));
                    t(aa);
                    n("..", x)
                }!W.parent && O ? ba({}) : _.$e.register("rpc", null, ba)
            }

            function v(x, O, ba) {
                if (".." === x) r(ba || W.rpctoken || W.ifpctok || "", O);
                else a: {
                    var aa = null;
                    if ("/" !=
                        x.charAt(0)) {
                        if (!_.Te) break a;
                        aa = document.getElementById(x);
                        if (!aa) throw Error("p`" + x);
                    }
                    aa = aa && aa.src;O = O || _.Qf.getOrigin(aa);m(x, O);O = _.Te.getUrlParameters(aa);n(x, ba || O.rpctoken)
                }
            }
            var u = {},
                w = {},
                y = {},
                B = {},
                A = 0,
                E = {},
                K = {},
                W = {},
                N = {},
                J = {},
                I = null,
                X = null,
                pa = window.top !== window.self,
                xa = window.name,
                sa = function() {},
                La = window.console,
                Ha = La && La.log && function(x) {
                    La.log(x)
                } || function() {},
                ma = function() {
                    function x(O) {
                        return function() {
                            Ha(O + ": call ignored")
                        }
                    }
                    return {
                        oJ: function() {
                            return "noop"
                        },
                        QY: function() {
                            return !0
                        },
                        init: x("init"),
                        Bc: x("setup"),
                        call: x("call")
                    }
                }();
            _.Te && (W = _.Te.getUrlParameters());
            var ja = !1,
                Ca = !1,
                Ea = function() {
                    if ("rmr" == W.rpctx) return Pf.hN;
                    var x = "function" === typeof window.postMessage ? Pf.RF : "object" === typeof window.postMessage ? Pf.RF : window.ActiveXObject ? Pf.VL ? Pf.VL : Pf.Av : 0 < navigator.userAgent.indexOf("WebKit") ? Pf.hN : "Gecko" === navigator.product ? Pf.frameElement : Pf.Av;
                    x || (x = ma);
                    return x
                }();
            u[""] = function() {
                Ha("Unknown RPC service: " + this.s)
            };
            u.__cb = function(x, O) {
                var ba = E[x];
                ba && (delete E[x], ba.call(this,
                    O))
            };
            return {
                config: function(x) {
                    "function" === typeof x.nN && (sa = x.nN)
                },
                register: function(x, O) {
                    if ("__cb" === x || "__ack" === x) throw Error("q");
                    if ("" === x) throw Error("r");
                    u[x] = O
                },
                unregister: function(x) {
                    if ("__cb" === x || "__ack" === x) throw Error("s");
                    if ("" === x) throw Error("t");
                    delete u[x]
                },
                registerDefault: function(x) {
                    u[""] = x
                },
                unregisterDefault: function() {
                    delete u[""]
                },
                forceParentVerifiable: function() {},
                call: function(x, O, ba, aa) {
                    x = x || "..";
                    var ka = "..";
                    ".." === x ? ka = xa : "/" == x.charAt(0) && (ka = _.Qf.getOrigin(window.location.href),
                        ka = "/" + xa + (ka ? "|" + ka : ""));
                    ++A;
                    ba && (E[A] = ba);
                    var ra = {
                        s: O,
                        f: ka,
                        c: ba ? A : 0,
                        a: Array.prototype.slice.call(arguments, 3),
                        t: B[x],
                        l: !!y[x]
                    };
                    a: if ("bidir" === I || "c2p" === I && ".." === x || "p2c" === I && ".." !== x) {
                        var F = window.location.href;
                        var D = "?";
                        if ("query" === X) D = "#";
                        else if ("hash" === X) break a;
                        D = F.lastIndexOf(D);
                        D = -1 === D ? F.length : D;
                        F = F.substring(0, D)
                    } else F = null;
                    F && (ra.r = F);
                    if (".." === x || null != f(x) || document.getElementById(x))(F = N[x]) || null === f(x) || (F = Ea), 0 === O.indexOf("legacy__") && (F = Ea, ra.s = O.substring(8), ra.c = ra.c ?
                        ra.c : A), ra.g = !0, ra.r = ka, F ? (y[x] && (F = Pf.Av), !1 === F.call(x, ka, ra) && (N[x] = ma, Ea.call(x, ka, ra))) : J[x] ? J[x].push(ra) : J[x] = [ra]
                },
                getRelayUrl: l,
                setRelayUrl: m,
                setAuthToken: n,
                setupReceiver: v,
                getAuthToken: function(x) {
                    return B[x]
                },
                removeReceiver: function(x) {
                    delete w[x];
                    delete y[x];
                    delete B[x];
                    delete K[x];
                    delete N[x]
                },
                getRelayChannel: function() {
                    return Ea.oJ()
                },
                receive: function(x, O) {
                    4 < x.length ? Ea.Kaa(x, d) : c.apply(null, x.concat(O))
                },
                SM: function(x) {
                    x.a = Array.prototype.slice.call(x.a);
                    window.setTimeout(function() {
                            d(x)
                        },
                        0)
                },
                getOrigin: e,
                getTargetOrigin: function(x) {
                    var O = null,
                        ba = l(x);
                    ba ? O = ba : (ba = f(x)) ? O = ba.origin : ".." == x ? O = W.parent : (x = document.getElementById(x)) && "iframe" === x.tagName.toLowerCase() && (O = x.src);
                    return e(O)
                },
                init: function() {
                    !1 === Ea.init(d, a) && (Ea = ma);
                    pa ? v("..") : _.$e.register("rpc", null, function(x) {
                        x = x.rpc || {};
                        p(x);
                        t(x)
                    })
                },
                ZG: g,
                ES: f,
                ACK: "__ack",
                t9: xa || "..",
                H9: 0,
                G9: 1,
                E9: 2
            }
        }();
        _.Qf.init()
    };
    _.Qf.config({
        nN: function(a) {
            throw Error("u`" + a);
        }
    });
    _.Ue = _.Ze;
    _.z("gadgets.rpc.config", _.Qf.config);
    _.z("gadgets.rpc.register", _.Qf.register);
    _.z("gadgets.rpc.unregister", _.Qf.unregister);
    _.z("gadgets.rpc.registerDefault", _.Qf.registerDefault);
    _.z("gadgets.rpc.unregisterDefault", _.Qf.unregisterDefault);
    _.z("gadgets.rpc.forceParentVerifiable", _.Qf.forceParentVerifiable);
    _.z("gadgets.rpc.call", _.Qf.call);
    _.z("gadgets.rpc.getRelayUrl", _.Qf.getRelayUrl);
    _.z("gadgets.rpc.setRelayUrl", _.Qf.setRelayUrl);
    _.z("gadgets.rpc.setAuthToken", _.Qf.setAuthToken);
    _.z("gadgets.rpc.setupReceiver", _.Qf.setupReceiver);
    _.z("gadgets.rpc.getAuthToken", _.Qf.getAuthToken);
    _.z("gadgets.rpc.removeReceiver", _.Qf.removeReceiver);
    _.z("gadgets.rpc.getRelayChannel", _.Qf.getRelayChannel);
    _.z("gadgets.rpc.receive", _.Qf.receive);
    _.z("gadgets.rpc.receiveSameDomain", _.Qf.SM);
    _.z("gadgets.rpc.getOrigin", _.Qf.getOrigin);
    _.z("gadgets.rpc.getTargetOrigin", _.Qf.getTargetOrigin);

    _.vg = window.gapi && window.gapi.util || {};

    var wg = _.vg = _.vg || {};
    window.___jsl = window.___jsl || {};
    wg.gz = {
        xba: function() {
            return window.___jsl.bsh
        },
        yJ: function() {
            return window.___jsl.h
        },
        wE: function(a) {
            window.___jsl.bsh = a
        },
        v1: function(a) {
            window.___jsl.h = a
        }
    };

    _.xg = function(a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("v`" + a);
        c = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0,
                d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    };

    _.vg.getOrigin = function(a) {
        return _.xg(a)
    };

    var Gh;
    Gh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
    _.Hh = function(a) {
        var b = _.R("googleapis.config/sessionIndex");
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (b = window.__X_GOOG_AUTHUSER);
        "string" === typeof b && 254 < b.length && (b = null);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (a = a || window.location.href, b = _.ze(a, "authuser") || null, null == b && (b = (b = a.match(Gh)) ? b[1] : null));
        if (null == b) return null;
        b = String(b);
        254 < b.length && (b = null);
        return b
    };

    _.Ih = {};
    _.Jh = function(a) {
        return _.Ih[a || "token"] || null
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Kh = function() {
        this.Wj = -1
    };
    var Lh = function() {
        this.Wj = 64;
        this.Dc = [];
        this.lz = [];
        this.xS = [];
        this.Iw = [];
        this.Iw[0] = 128;
        for (var a = 1; a < this.Wj; ++a) this.Iw[a] = 0;
        this.Kx = this.Zn = 0;
        this.reset()
    };
    _.G(Lh, Kh);
    Lh.prototype.reset = function() {
        this.Dc[0] = 1732584193;
        this.Dc[1] = 4023233417;
        this.Dc[2] = 2562383102;
        this.Dc[3] = 271733878;
        this.Dc[4] = 3285377520;
        this.Kx = this.Zn = 0
    };
    var Mh = function(a, b, c) {
        c || (c = 0);
        var d = a.xS;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.Dc[0];
        c = a.Dc[1];
        var g = a.Dc[2],
            k = a.Dc[3],
            l = a.Dc[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ c & (g ^ k);
                    var m = 1518500249
                } else f = c ^ g ^ k, m = 1859775393;
            else 60 > e ? (f = c & g | k & (c | g),
                m = 2400959708) : (f = c ^ g ^ k, m = 3395469782);
            f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
            l = k;
            k = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.Dc[0] = a.Dc[0] + b & 4294967295;
        a.Dc[1] = a.Dc[1] + c & 4294967295;
        a.Dc[2] = a.Dc[2] + g & 4294967295;
        a.Dc[3] = a.Dc[3] + k & 4294967295;
        a.Dc[4] = a.Dc[4] + l & 4294967295
    };
    Lh.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.Wj, d = 0, e = this.lz, f = this.Zn; d < b;) {
                if (0 == f)
                    for (; d <= c;) Mh(this, a, d), d += this.Wj;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Wj) {
                            Mh(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.Wj) {
                                Mh(this, e);
                                f = 0;
                                break
                            }
            }
            this.Zn = f;
            this.Kx += b
        }
    };
    Lh.prototype.digest = function() {
        var a = [],
            b = 8 * this.Kx;
        56 > this.Zn ? this.update(this.Iw, 56 - this.Zn) : this.update(this.Iw, this.Wj - (this.Zn - 56));
        for (var c = this.Wj - 1; 56 <= c; c--) this.lz[c] = b & 255, b /= 256;
        Mh(this, this.lz);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.Dc[c] >> d & 255, ++b;
        return a
    };
    _.Nh = function() {
        this.XE = new Lh
    };
    _.h = _.Nh.prototype;
    _.h.reset = function() {
        this.XE.reset()
    };
    _.h.aP = function(a) {
        this.XE.update(a)
    };
    _.h.zI = function() {
        return this.XE.digest()
    };
    _.h.AF = function(a) {
        a = unescape(encodeURIComponent(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
        this.aP(b)
    };
    _.h.Vg = function() {
        for (var a = this.zI(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
        return b
    };

    var Ph, Qh;
    _.Oh = function(a, b) {
        this.Ad = a;
        a = b || {};
        this.lZ = Number(a.maxAge) || 0;
        this.Vc = a.domain;
        this.mj = a.path;
        this.L0 = !!a.secure
    };
    Ph = /^[-+/_=.:|%&a-zA-Z0-9@]*$/;
    Qh = /^[A-Z_][A-Z0-9_]{0,63}$/;
    _.Oh.prototype.read = function() {
        for (var a = this.Ad + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a)) return d.substr(a.length)
        }
    };
    _.Oh.prototype.write = function(a, b) {
        if (!Qh.test(this.Ad)) throw "Invalid cookie name";
        if (!Ph.test(a)) throw "Invalid cookie value";
        a = this.Ad + "=" + a;
        this.Vc && (a += ";domain=" + this.Vc);
        this.mj && (a += ";path=" + this.mj);
        b = "number" === typeof b ? b : this.lZ;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.L0 && (a += ";secure");
        document.cookie = a;
        return !0
    };
    _.Oh.prototype.clear = function() {
        this.write("", 0)
    };
    _.Oh.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="))
        }
    };
    var Sh;
    _.Rh = function(a) {
        this.Zh = a
    };
    Sh = {};
    _.Rh.prototype.read = function() {
        if (Sh.hasOwnProperty(this.Zh)) return Sh[this.Zh]
    };
    _.Rh.prototype.write = function(a) {
        Sh[this.Zh] = a;
        return !0
    };
    _.Rh.prototype.clear = function() {
        delete Sh[this.Zh]
    };
    _.Rh.iterate = function(a) {
        for (var b in Sh) Sh.hasOwnProperty(b) && a(b, Sh[b])
    };
    var Th = function() {
            this.je = null;
            this.key = function() {
                return null
            };
            this.getItem = function() {
                return this.je
            };
            this.setItem = function(a, b) {
                this.je = b;
                this.length = 1
            };
            this.removeItem = function() {
                this.clear()
            };
            this.clear = function() {
                this.je = null;
                this.length = 0
            };
            this.length = 0
        },
        Uh = function(a) {
            try {
                var b = a || window.sessionStorage;
                if (!b) return !1;
                b.setItem("gapi.sessionStorageTest", "gapi.sessionStorageTest" + b.length);
                b.removeItem("gapi.sessionStorageTest");
                return !0
            } catch (c) {
                return !1
            }
        },
        Vh = function(a, b) {
            this.Ad = a;
            this.Rf =
                Uh(b) ? b || window.sessionStorage : new Th
        };
    Vh.prototype.read = function() {
        return this.Rf.getItem(this.Ad)
    };
    Vh.prototype.write = function(a) {
        try {
            this.Rf.setItem(this.Ad, a)
        } catch (b) {
            return !1
        }
        return !0
    };
    Vh.prototype.clear = function() {
        this.Rf.removeItem(this.Ad)
    };
    Vh.iterate = function(a) {
        if (Uh())
            for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
                var d = window.sessionStorage.key(b);
                a(d, window.sessionStorage[d])
            }
    };
    for (var Wh = 0; 64 > Wh; ++Wh);
    _.Xh = "https:" === window.location.protocol;
    _.Yh = _.Xh || "http:" === window.location.protocol ? _.Oh : _.Rh;
    _.Zh = function(a) {
        var b = a.substr(1),
            c = "",
            d = window.location.hostname;
        if ("" !== b) {
            c = parseInt(b, 10);
            if (isNaN(c)) return null;
            b = d.split(".");
            if (b.length < c - 1) return null;
            b.length == c - 1 && (d = "." + d)
        } else d = "";
        return {
            De: "S" == a.charAt(0),
            domain: d,
            Jh: c
        }
    };
    _.$h = function(a) {
        if (0 !== a.indexOf("GCSC")) return null;
        var b = {
            xC: !1
        };
        a = a.substr(4);
        if (!a) return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d) return b;
        var e = _.Zh(a.substr(d + 1));
        if (null == e) return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0)) return b;
        d = "E" === c && e.De;
        return !d && ("U" !== c || e.De) || d && !_.Xh ? b : {
            xC: !0,
            De: d,
            wT: a.substr(1),
            domain: e.domain,
            Jh: e.Jh
        }
    };
    var ai, bi, ei, fi, gi;
    ai = _.ve();
    bi = _.ve();
    _.ci = _.ve();
    _.di = _.ve();
    ei = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
    fi = function(a) {
        this.BM = a;
        this.UC = null
    };
    fi.prototype.write = function(a) {
        var b = _.ve(),
            c = _.ve();
        for (d in a) _.we(a, d) && (c[d] = a[d], b[d] = a[d]);
        var d = 0;
        for (var e = ei.length; d < e; ++d) delete c[ei[d]];
        a = String(a.authuser || 0);
        d = _.ve();
        d[a] = _.Te.getUrlParameters("#" + gi(c));
        this.BM.write(_.If(d));
        this.UC = b
    };
    fi.prototype.read = function() {
        return this.UC
    };
    fi.prototype.clear = function() {
        this.BM.clear();
        this.UC = _.ve()
    };
    _.hi = function(a) {
        return a ? {
            domain: a.domain,
            path: "/",
            secure: a.De
        } : null
    };
    gi = function(a) {
        var b = "";
        if (!a) return b;
        for (var c in a)
            if ({}.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (null != d) {
                    var e = [encodeURIComponent(c), "="];
                    if (d instanceof Array) {
                        for (var f = [], g = 0; g < d.length; g++) f.push(encodeURIComponent(d[g]));
                        e.push(f.join("+"))
                    } else e.push(encodeURIComponent(d));
                    d = e.join("")
                } else d = "";
                d && (b && (b += "&"), b += d)
            }
        return b
    };
    Vh.iterate(function(a) {
        var b = _.$h(a);
        b && b.xC && (ai[a] = new fi(new Vh(a)))
    });
    _.Yh.iterate(function(a) {
        ai[a] && (bi[a] = new _.Yh(a, _.hi(_.$h(a))))
    });

    _.yg = window.googleapis && window.googleapis.server || {};

    _.Hg = function() {
        var a = /\s*;\s*/;
        return {
            get: function(b, c) {
                b += "=";
                for (var d = (document.cookie || "").split(a), e = 0, f; f = d[e]; ++e)
                    if (0 == f.indexOf(b)) return f.substr(b.length);
                return c
            }
        }
    }();

    var ji;
    _.ii = function(a) {
        this.mb = a || {
            cookie: ""
        }
    };
    _.h = _.ii.prototype;
    _.h.isEnabled = function() {
        return navigator.cookieEnabled
    };
    _.h.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Nca;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var k = c.HL
        }
        if (/[;=\s]/.test(a)) throw Error("A`" + a);
        if (/[;\r\n]/.test(b)) throw Error("B`" + b);
        void 0 === k && (k = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        k = 0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.ab)() + 1E3 * k)).toUTCString();
        this.mb.cookie = a + "=" + b + c + g + k + d + (null != e ? ";samesite=" + e : "")
    };
    _.h.get = function(a, b) {
        for (var c = a + "=", d = (this.mb.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = (0, _.Cb)(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    _.h.remove = function(a, b, c) {
        var d = this.Rd(a);
        this.set(a, "", {
            HL: 0,
            path: b,
            domain: c
        });
        return d
    };
    _.h.ze = function() {
        return ji(this).keys
    };
    _.h.Xc = function() {
        return ji(this).values
    };
    _.h.isEmpty = function() {
        return !this.mb.cookie
    };
    _.h.Cb = function() {
        return this.mb.cookie ? (this.mb.cookie || "").split(";").length : 0
    };
    _.h.Rd = function(a) {
        return void 0 !== this.get(a)
    };
    _.h.$j = function(a) {
        for (var b = ji(this).values, c = 0; c < b.length; c++)
            if (b[c] == a) return !0;
        return !1
    };
    _.h.clear = function() {
        for (var a = ji(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    ji = function(a) {
        a = (a.mb.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.Cb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    _.ki = new _.ii("undefined" == typeof document ? null : document);

    _.li = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0
        }

        function b(p) {
            for (var t = g, r = 0; 64 > r; r += 4) t[r / 4] = p[r] << 24 | p[r + 1] << 16 | p[r + 2] << 8 | p[r + 3];
            for (r = 16; 80 > r; r++) p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16], t[r] = (p << 1 | p >>> 31) & 4294967295;
            p = e[0];
            var v = e[1],
                u = e[2],
                w = e[3],
                y = e[4];
            for (r = 0; 80 > r; r++) {
                if (40 > r)
                    if (20 > r) {
                        var B = w ^ v & (u ^ w);
                        var A = 1518500249
                    } else B = v ^ u ^ w, A = 1859775393;
                else 60 > r ? (B = v & u | w & (v | u), A = 2400959708) : (B = v ^ u ^ w, A = 3395469782);
                B = ((p << 5 | p >>> 27) & 4294967295) +
                    B + y + A + t[r] & 4294967295;
                y = w;
                w = u;
                u = (v << 30 | v >>> 2) & 4294967295;
                v = p;
                p = B
            }
            e[0] = e[0] + p & 4294967295;
            e[1] = e[1] + v & 4294967295;
            e[2] = e[2] + u & 4294967295;
            e[3] = e[3] + w & 4294967295;
            e[4] = e[4] + y & 4294967295
        }

        function c(p, t) {
            if ("string" === typeof p) {
                p = unescape(encodeURIComponent(p));
                for (var r = [], v = 0, u = p.length; v < u; ++v) r.push(p.charCodeAt(v));
                p = r
            }
            t || (t = p.length);
            r = 0;
            if (0 == m)
                for (; r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64;
            for (; r < t;)
                if (f[m++] = p[r++], n++, 64 == m)
                    for (m = 0, b(f); r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64
        }

        function d() {
            var p = [],
                t = 8 * n;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var r = 63; 56 <= r; r--) f[r] = t & 255, t >>>= 8;
            b(f);
            for (r = t = 0; 5 > r; r++)
                for (var v = 24; 0 <= v; v -= 8) p[t++] = e[r] >> v & 255;
            return p
        }
        for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Vg: function() {
                for (var p = d(), t = "", r = 0; r < p.length; r++) t += "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) + "0123456789ABCDEF".charAt(p[r] % 16);
                return t
            }
        }
    };
    var ni = function(a, b, c) {
            var d = [],
                e = [];
            if (1 == (_.ib(c) ? 2 : 1)) return e = [b, a], (0, _.vb)(d, function(k) {
                e.push(k)
            }), mi(e.join(" "));
            var f = [],
                g = [];
            (0, _.vb)(c, function(k) {
                g.push(k.key);
                f.push(k.value)
            });
            c = Math.floor((new Date).getTime() / 1E3);
            e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
            (0, _.vb)(d, function(k) {
                e.push(k)
            });
            a = mi(e.join(" "));
            a = [c, a];
            0 == g.length || a.push(g.join(""));
            return a.join("_")
        },
        mi = function(a) {
            var b = _.li();
            b.update(a);
            return b.Vg().toLowerCase()
        };
    _.oi = function() {
        var a = _.q.__SAPISID || _.q.__APISID || _.q.__OVERRIDE_SID;
        if (a) return !0;
        a = new _.ii(document);
        a = a.get("SAPISID") || a.get("APISID") || a.get("__Secure-3PAPISID") || a.get("SID");
        return !!a
    };
    _.pi = function(a) {
        var b = _.xg(String(_.q.location.href));
        if (_.oi()) {
            var c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? _.q.__SAPISID : _.q.__APISID;
            c || (c = new _.ii(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID"));
            if (c) {
                b = b ? "SAPISIDHASH" : "APISIDHASH";
                var d = String(_.q.location.href);
                return d && c && b ? [b, ni(_.xg(d), c, a || null)].join(" ") : null
            }
        }
        return null
    };

    _.qi = function(a) {
        var b = {
            SAPISIDHASH: !0,
            APISIDHASH: !0
        };
        return a && (a.OriginToken || a.Authorization && b[String(a.Authorization).split(" ")[0]]) ? !0 : !1
    };
    _.ri = {
        JX: _.qi,
        MY: _.oi,
        VV: function() {
            var a = null;
            _.oi() && (a = window.__PVT, null == a && (a = _.Hg.get("BEAT")));
            return a
        },
        RA: _.pi
    };

    _.Te = _.Te || {};
    _.Te.attachBrowserEvent = function(a, b, c, d) {
        "undefined" != typeof a.addEventListener ? a.addEventListener(b, c, d) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, c) : _.db("cannot attachBrowserEvent: " + b)
    };
    _.Te.P_ = function(a) {
        var b = window;
        b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.db("cannot removeBrowserEvent: mousemove")
    };

    _.zg = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0
        }

        function b(p) {
            for (var t = g, r = 0; 64 > r; r += 4) t[r / 4] = p[r] << 24 | p[r + 1] << 16 | p[r + 2] << 8 | p[r + 3];
            for (r = 16; 80 > r; r++) p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16], t[r] = (p << 1 | p >>> 31) & 4294967295;
            p = e[0];
            var v = e[1],
                u = e[2],
                w = e[3],
                y = e[4];
            for (r = 0; 80 > r; r++) {
                if (40 > r)
                    if (20 > r) {
                        var B = w ^ v & (u ^ w);
                        var A = 1518500249
                    } else B = v ^ u ^ w, A = 1859775393;
                else 60 > r ? (B = v & u | w & (v | u), A = 2400959708) : (B = v ^ u ^ w, A = 3395469782);
                B = ((p << 5 | p >>> 27) & 4294967295) +
                    B + y + A + t[r] & 4294967295;
                y = w;
                w = u;
                u = (v << 30 | v >>> 2) & 4294967295;
                v = p;
                p = B
            }
            e[0] = e[0] + p & 4294967295;
            e[1] = e[1] + v & 4294967295;
            e[2] = e[2] + u & 4294967295;
            e[3] = e[3] + w & 4294967295;
            e[4] = e[4] + y & 4294967295
        }

        function c(p, t) {
            if ("string" === typeof p) {
                p = unescape(encodeURIComponent(p));
                for (var r = [], v = 0, u = p.length; v < u; ++v) r.push(p.charCodeAt(v));
                p = r
            }
            t || (t = p.length);
            r = 0;
            if (0 == m)
                for (; r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64;
            for (; r < t;)
                if (f[m++] = p[r++], n++, 64 == m)
                    for (m = 0, b(f); r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64
        }

        function d() {
            var p = [],
                t = 8 * n;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var r = 63; 56 <= r; r--) f[r] = t & 255, t >>>= 8;
            b(f);
            for (r = t = 0; 5 > r; r++)
                for (var v = 24; 0 <= v; v -= 8) p[t++] = e[r] >> v & 255;
            return p
        }
        for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Vg: function() {
                for (var p = d(), t = "", r = 0; r < p.length; r++) t += "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) + "0123456789ABCDEF".charAt(p[r] % 16);
                return t
            }
        }
    };
    _.Ag = function() {
        function a(m) {
            var n = _.zg();
            n.update(m);
            return n.Vg()
        }
        var b = window.crypto;
        if (b && "function" == typeof b.getRandomValues) return function() {
            var m = new window.Uint32Array(1);
            b.getRandomValues(m);
            return Number("0." + m[0])
        };
        var c = _.R("random/maxObserveMousemove");
        null == c && (c = -1);
        var d = 0,
            e = Math.random(),
            f = 1,
            g = 1E6 * (screen.width * screen.width + screen.height),
            k = function(m) {
                m = m || window.event;
                var n = m.screenX + m.clientX << 16;
                n += m.screenY + m.clientY;
                n *= (new Date).getTime() % 1E6;
                f = f * n % g;
                0 < c && ++d == c && _.Te.P_(k)
            };
        0 != c && _.Te.attachBrowserEvent(window, "mousemove", k, !1);
        var l = a(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + e);
        return function() {
            var m = f;
            m += parseInt(l.substr(0, 20), 16);
            l = a(l);
            return m / (g + Math.pow(16, 20))
        }
    }();
    _.z("shindig.random", _.Ag);

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.qh = function(a) {
        return encodeURIComponent(String(a))
    };
    _.rh = function(a) {
        return null == a ? "" : String(a)
    };
    _.sh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.th = function(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };
    _.uh = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.uh(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + _.qh(b)))
    };
    _.vh = function(a) {
        var b = [],
            c;
        for (c in a) _.uh(c, a[c], b);
        return b.join("&")
    };
    _.wh = function(a, b) {
        b = _.vh(b);
        return _.th(a, b)
    };
    _.xh = function(a, b, c) {
        for (var d = 0, e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
            var f = a.charCodeAt(d - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) return d;
            d += e + 1
        }
        return -1
    };
    _.yh = /#|$/;

    var si;
    si = function(a, b) {
        a = _.Te.createIframeElement({
            id: a,
            name: a
        });
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.position = "absolute";
        a.style.top = "-100px";
        a.style.display = "none";
        if (window.navigator) {
            var c = window.navigator.userAgent || "";
            var d = window.navigator.product || "";
            c = 0 != c.indexOf("Opera") && -1 == c.indexOf("WebKit") && "Gecko" == d && 0 < c.indexOf("rv:1.")
        } else c = !1;
        a.src = c ? "about:blank" : b;
        a.tabIndex = -1;
        "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true";
        document.body.appendChild(a);
        c &&
            (a.src = b);
        return a
    };
    _.ti = function() {
        function a() {
            return !!g("auth/useFirstPartyAuthV2")
        }

        function b(p, t, r, v, u) {
            var w = g("proxy");
            if (v || !w) {
                w = g("root");
                var y = g("root-1p") || w;
                w = w || "https://content.googleapis.com";
                y = y || "https://clients6.google.com";
                var B = g("xd3") || "/static/proxy.html";
                w = (v || String(t ? y : w)) + B
            }
            w = String(w);
            r && (w += (0 <= w.indexOf("?") ? "&" : "?") + "usegapi=1");
            (t = _.Te.getUrlParameters().jsh || _.vg.gz.yJ()) && (w += (0 <= w.indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(t));
            w += "#parent=" + encodeURIComponent(null != u ? String(u) :
                _.vg.getOrigin(document.location.href));
            return w + ("&rpctoken=" + p)
        }

        function c(p, t, r, v, u) {
            var w = e(r, v, u);
            l[w] || (r = si(w, t), _.Qf.register("ready:" + p, function() {
                _.Qf.unregister("ready:" + p);
                if (!m[w]) {
                    m[w] = !0;
                    var y = n[w];
                    n[w] = [];
                    for (var B = 0, A = y.length; B < A; ++B) {
                        var E = y[B];
                        f(E.rpc, E.e0, E.callback)
                    }
                }
            }), _.Qf.setupReceiver(w, t), l[w] = r)
        }

        function d(p, t, r) {
            var v = String(2147483647 * (0, _.Ag)() | 0),
                u = b(v, p, t, r);
            _.Of(function() {
                c(v, u, p, t, r)
            })
        }

        function e(p, t, r) {
            p = b("", p, t, r, "");
            r = k[p + t];
            if (!r) {
                r = _.zg();
                r.update(p);
                r = r.Vg().toLowerCase();
                var v = (0, _.Ag)();
                r += v;
                k[p + t] = r
            }
            return "apiproxy" + r
        }

        function f(p, t, r) {
            var v = void 0,
                u = !1;
            if ("makeHttpRequests" !== p) throw 'only "makeHttpRequests" RPCs are implemented';
            var w = function(K) {
                if (K) {
                    if ("undefined" != typeof v && "undefined" != typeof K.root && v != K.root) throw "all requests in a batch must have the same root URL";
                    v = K.root || v;
                    u = _.ri.JX(K.headers)
                }
            };
            if (t)
                for (var y = 0, B = t.length; y < B; ++y) {
                    var A = t[y];
                    A && w(A.params)
                }
            w = !!g("useGapiForXd3");
            var E = e(u, w, v);
            l[E] || d(u, w, v);
            m[E] ? _.Qf.call(E, p, function(K) {
                if (this.f ==
                    E && this.t == _.Qf.getAuthToken(this.f) && this.origin == _.Qf.getTargetOrigin(this.f)) {
                    var W = _.Hf(K);
                    r(W, K)
                }
            }, t) : (n[E] || (n[E] = []), n[E].push({
                rpc: p,
                e0: t,
                callback: r
            }))
        }

        function g(p) {
            return _.R("googleapis.config/" + p)
        }
        var k = {},
            l = {},
            m = {},
            n = {};
        return {
            IS: function(p, t, r) {
                var v = r || "auto";
                p = p || {};
                if ("none" == v) return p;
                t = t || window.location.href;
                r = p.Authorization;
                var u = p.OriginToken;
                if (!r && !u) {
                    (u = _.Jh()) && u.access_token && ("oauth2" == v || "auto" == v) && (r = String(u.token_type || "Bearer") + " " + u.access_token);
                    if (u = !r) u = (!!g("auth/useFirstPartyAuth") ||
                        "1p" == v) && "oauth2" != v;
                    if (u && _.ri.MY()) {
                        if (a()) {
                            r = g("primaryEmail");
                            v = g("appDomain");
                            u = g("fogId");
                            var w = [];
                            r && w.push({
                                key: "e",
                                value: r
                            });
                            v && w.push({
                                key: "a",
                                value: v
                            });
                            u && w.push({
                                key: "u",
                                value: u
                            });
                            r = _.ri.RA(w)
                        } else r = _.ri.RA();
                        r && (t = _.Hh(t), t = p["X-Goog-AuthUser"] || t, _.Re(_.rh(t)) && (!a() || a() && _.Re(_.rh(g("primaryEmail"))) && _.Re(_.rh(g("appDomain"))) && _.Re(_.rh(g("fogId")))) && (t = "0"), _.Re(_.rh(t)) || (p["X-Goog-AuthUser"] = t))
                    }
                    r ? p.Authorization = r : !1 !== g("auth/useOriginToken") && (u = _.ri.VV()) && (p.OriginToken =
                        u)
                }
                return p
            },
            vj: f
        }
    }();

    var Jg, Kg;
    _.Ig = {
        AUTHORIZATION: "Authorization",
        iy: "Content-ID",
        jy: "Content-Transfer-Encoding",
        CONTENT_TYPE: "Content-Type",
        UP: "Date",
        dR: "OriginToken",
        wS: "WWW-Authenticate",
        QG: "X-ClientDetails",
        zS: "X-Goog-AuthUser",
        Ny: "X-Goog-Encode-Response-If-Executable",
        SG: "X-Goog-Meeting-Botguardid",
        TG: "X-Goog-Meeting-Debugid",
        UG: "X-Goog-Meeting-Token",
        AS: "X-Goog-PageId",
        Oy: "X-Goog-Safety-Content-Type",
        Py: "X-Goog-Safety-Encoding",
        VG: "X-HTTP-Method-Override",
        WG: "X-JavaScript-User-Agent",
        XG: "X-Origin",
        Qy: "X-Referer",
        YG: "X-Requested-With",
        BS: "X-Use-HTTP-Status-Code-Override"
    };
    Jg = ["Accept", "Accept-Language", _.Ig.AUTHORIZATION, "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", _.Ig.jy, _.Ig.CONTENT_TYPE, _.Ig.UP, "GData-Version", "google-cloud-resource-prefix", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "MIME-Version", "Origin", _.Ig.dR, "Pragma", "Range", "Slug", "Transfer-Encoding", "Want-Digest", "x-chrome-connected", "X-Client-Data", _.Ig.QG, "X-Client-Version", "X-Firebase-Locale",
        "X-GData-Client", "X-GData-Key", _.Ig.zS, _.Ig.AS, _.Ig.Ny, "X-GoogApps-Allowed-Domains", "X-Goog-AdX-Buyer-Impersonation", "X-Goog-Api-Client", "X-Goog-Api-Key", "X-Goog-Correlation-Id", "X-Goog-Request-Info", "X-Goog-Request-Reason", "X-Goog-Experiments", "x-goog-ext-124712974-jspb", "x-goog-ext-259736195-jspb", "x-goog-ext-275505673-bin", "X-Goog-Firebase-Installations-Auth", "X-Firebase-Client", "X-Firebase-Client-Log-Type", "x-goog-iam-authority-selector", "x-goog-iam-authorization-token", "X-Goog-Spatula", "X-Goog-Travel-Bgr",
        "X-Goog-Travel-Settings", "X-Goog-Upload-Command", "X-Goog-Upload-Content-Disposition", "X-Goog-Upload-Content-Length", "X-Goog-Upload-Content-Type", "X-Goog-Upload-File-Name", "X-Goog-Upload-Header-Content-Length", "X-Goog-Upload-Offset", "X-Goog-Upload-Protocol", "X-Goog-User-Project", "X-Goog-Visitor-Id", "X-Goog-FieldMask", "X-Google-Project-Override", _.Ig.VG, _.Ig.WG, "X-Pan-Versionid", "X-Proxied-User-IP", _.Ig.XG, _.Ig.Qy, _.Ig.YG, "X-Stadia-Client-Context", "X-Upload-Content-Length", "X-Upload-Content-Type", _.Ig.BS,
        "X-Ios-Bundle-Identifier", "X-Android-Package", "X-Ariane-Xsrf-Token", "X-Earth-Engine-App-ID-Token", "X-Earth-Engine-Computation-Profile", "X-Earth-Engine-Computation-Profiling", "X-Play-Console-Experiments-Override", "X-Play-Console-Session-Id", "X-YouTube-VVT", "X-YouTube-Page-CL", "X-YouTube-Page-Timestamp", _.Ig.SG, _.Ig.TG, _.Ig.UG, "X-Sfdc-Authorization"
    ];
    Kg = ["Digest", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", _.Ig.jy, _.Ig.CONTENT_TYPE, "Date", "ETag", "Expires", "Last-Modified", "Location", "Pragma", "Range", "Server", "Transfer-Encoding", _.Ig.wS, "Vary", "Unzipped-Content-MD5", "X-Correlation-ID", "X-Goog-Generation", "X-Goog-Metageneration", _.Ig.Oy, _.Ig.Py, "X-Google-Trace", "X-Goog-Upload-Chunk-Granularity", "X-Goog-Upload-Control-URL", "X-Goog-Upload-Size-Received", "X-Goog-Upload-Status",
        "X-Goog-Upload-URL", "X-Goog-Diff-Download-Range", "X-Goog-Hash", "X-Goog-Updated-Authorization", "X-Server-Object-Version", "X-Guploader-Customer", "X-Guploader-Upload-Result", "X-Guploader-Uploadid", "X-Google-Gfe-Backend-Request-Cost", "X-Earth-Engine-Computation-Profile", _.Ig.SG, _.Ig.TG, _.Ig.UG
    ];
    var Lg, Mg, Ng, Og, Qg, Rg, Sg, Tg, Ug, Vg, Wg, Xg;
    Lg = null;
    Mg = null;
    Ng = null;
    Og = function(a, b) {
        var c = a.length;
        if (c != b.length) return !1;
        for (var d = 0; d < c; ++d) {
            var e = a.charCodeAt(d),
                f = b.charCodeAt(d);
            65 <= e && 90 >= e && (e += 32);
            65 <= f && 90 >= f && (f += 32);
            if (e != f) return !1
        }
        return !0
    };
    _.Pg = function(a) {
        a = String(a || "").split("\x00").join("");
        for (var b = [], c = !0, d = 0, e = a.length; d < e; ++d) {
            var f = a.charAt(d),
                g = a.charCodeAt(d);
            if (55296 <= g && 56319 >= g && d + 1 < e) {
                var k = a.charAt(d + 1),
                    l = a.charCodeAt(d + 1);
                56320 <= l && 57343 >= l && (f += k, g = 65536 + (g - 55296 << 10) + (l - 56320), ++d)
            }
            if (!(0 <= g && 1114109 >= g) || 55296 <= g && 57343 >= g || 64976 <= g && 65007 >= g || 65534 == (g & 65534)) g = 65533, f = String.fromCharCode(g);
            k = !(32 <= g && 126 >= g) || " " == f || c && ":" == f || "\\" == f;
            !c || "/" != f && "?" != f || (c = !1);
            "%" == f && (d + 2 >= e ? k = !0 : (l = 16 * parseInt(a.charAt(d +
                1), 16) + parseInt(a.charAt(d + 2), 16), 0 <= l && 255 >= l ? (g = l, f = 0 == g ? "" : "%" + (256 + l).toString(16).toUpperCase().substr(1), d += 2) : k = !0));
            k && (f = encodeURIComponent(f), 1 >= f.length && (0 <= g && 127 >= g ? f = "%" + (256 + g).toString(16).toUpperCase().substr(1) : (g = 65533, f = encodeURIComponent(String.fromCharCode(g)))));
            b.push(f)
        }
        a = b.join("");
        a = a.split("#")[0];
        a = a.split("?");
        b = a[0].split("/");
        c = [];
        d = 0;
        for (e = b.length; d < e; ++d) f = b[d], g = f.split("%2E").join("."), g = g.split(encodeURIComponent("\uff0e")).join("."), "." == g ? d + 1 == e && c.push("") :
            ".." == g ? (0 < c.length && c.pop(), d + 1 == e && c.push("")) : c.push(f);
        a[0] = c.join("/");
        for (a = a.join("?"); a && "/" == a.charAt(0);) a = a.substr(1);
        return "/" + a
    };
    Qg = {
        "access-control-allow-origin": !0,
        "access-control-allow-credentials": !0,
        "access-control-expose-headers": !0,
        "access-control-max-age": !0,
        "access-control-allow-headers": !0,
        "access-control-allow-methods": !0,
        p3p: !0,
        "proxy-authenticate": !0,
        "set-cookie": !0,
        "set-cookie2": !0,
        status: !0,
        tsv: !0,
        "": !0
    };
    Rg = {
        "accept-charset": !0,
        "accept-encoding": !0,
        "access-control-request-headers": !0,
        "access-control-request-method": !0,
        "client-ip": !0,
        clientip: !0,
        connection: !0,
        "content-length": !0,
        cookie: !0,
        cookie2: !0,
        date: !0,
        dnt: !0,
        expect: !0,
        forwarded: !0,
        "forwarded-for": !0,
        "front-end-https": !0,
        host: !0,
        "keep-alive": !0,
        "max-forwards": !0,
        method: !0,
        origin: !0,
        "raw-post-data": !0,
        referer: !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0,
        url: !0,
        "user-agent": !0,
        version: !0,
        via: !0,
        "x-att-deviceid": !0,
        "x-chrome-connected": !0,
        "x-client-data": !0,
        "x-client-ip": !0,
        "x-do-not-track": !0,
        "x-forwarded-by": !0,
        "x-forwarded-for": !0,
        "x-forwarded-host": !0,
        "x-forwarded-proto": !0,
        "x-geo": !0,
        "x-googapps-allowed-domains": !0,
        "x-origin": !0,
        "x-proxyuser-ip": !0,
        "x-real-ip": !0,
        "x-referer": !0,
        "x-uidh": !0,
        "x-user-ip": !0,
        "x-wap-profile": !0,
        "": !0
    };
    Sg = function(a) {
        if (!_.jb(a)) return null;
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c];
            if ("string" === typeof d && d) {
                var e = d.toLowerCase();
                Og(d, e) && (b[e] = d)
            }
        }
        for (var f in _.Ig) Object.prototype.hasOwnProperty.call(_.Ig, f) && (d = _.Ig[f], e = d.toLowerCase(), Og(d, e) && Object.prototype.hasOwnProperty.call(b, e) && (b[e] = d));
        return b
    };
    Tg = new RegExp("(" + /[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source + "|" + /[\uD800-\uDBFF][\uDC00-\uDFFF]/.source + "){1,100}", "g");
    Ug = /[ \t]*(\r?\n[ \t]+)+/g;
    Vg = /^[ \t]+|[ \t]+$/g;
    Wg = function(a, b) {
        if (!b && "object" === typeof a && a && "number" === typeof a.length) {
            b = a;
            a = "";
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = Wg(b[c], !0);
                e && (a && (e = a + ", " + e), a = e)
            }
        }
        if ("string" === typeof a && (a = a.replace(Ug, " "), a = a.replace(Vg, ""), "" == a.replace(Tg, "") && a)) return a
    };
    Xg = /^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g;
    _.Yg = function(a) {
        if ("string" !== typeof a || !a || !a.match(Xg)) return null;
        a = a.toLowerCase();
        if (null == Ng) {
            var b = [],
                c = _.R("googleapis/headers/response");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.R("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Kg);
            (c = _.R("googleapis/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.R("client/headers/request")) &&
            "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Jg);
            for (var d in _.Ig) Object.prototype.hasOwnProperty.call(_.Ig, d) && b.push(_.Ig[d]);
            Ng = Sg(b)
        }
        return null != Ng && Ng.hasOwnProperty(a) ? Ng[a] : a
    };
    _.Zg = function(a, b) {
        if (!_.Yg(a) || !Wg(b)) return null;
        a = a.toLowerCase();
        if (a.match(/^x-google|^x-gfe|^proxy-|^sec-/i) || Rg[a]) return null;
        if (null == Lg) {
            b = [];
            var c = _.R("googleapis/headers/request");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.R("client/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Jg);
            Lg = Sg(b)
        }
        return null != Lg && Lg.hasOwnProperty(a) ? Lg[a] : null
    };
    _.$g = function(a, b) {
        if (!_.Yg(a) || !Wg(b)) return null;
        a = a.toLowerCase();
        if (Qg[a]) return null;
        if (null == Mg) {
            b = [];
            var c = _.R("googleapis/headers/response");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.R("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(Kg);
            Mg = Sg(b)
        }
        return null != Mg && Mg.hasOwnProperty(a) ? a : null
    };
    _.ah = function(a, b) {
        if (_.Yg(b) && null != a && "object" === typeof a) {
            var c = void 0,
                d;
            for (d in a)
                if (Object.prototype.hasOwnProperty.call(a, d) && Og(d, b)) {
                    var e = Wg(a[d]);
                    e && (void 0 !== c && (e = c + ", " + e), c = e)
                }
            return c
        }
    };
    _.bh = function(a, b, c, d) {
        var e = _.Yg(b);
        if (e) {
            c && (c = Wg(c));
            b = b.toLowerCase();
            for (var f in a) Object.prototype.hasOwnProperty.call(a, f) && Og(f, b) && delete a[f];
            c && (d || (b = e), a[b] = c)
        }
    };
    _.ch = function(a, b) {
        var c = {};
        if (!a) return c;
        a = a.split("\r\n");
        for (var d = 0, e = a.length; d < e; ++d) {
            var f = a[d];
            if (!f) break;
            var g = f.indexOf(":");
            if (!(0 >= g)) {
                var k = f.substring(0, g);
                if (k = _.Yg(k)) {
                    for (f = f.substring(g + 1); d + 1 < e && a[d + 1].match(/^[ \t]/);) f += "\r\n" + a[d + 1], ++d;
                    if (f = Wg(f))
                        if (k = _.$g(k, f) || (b ? void 0 : k)) k = k.toLowerCase(), g = _.ah(c, k), void 0 !== g && (f = g + ", " + f), _.bh(c, k, f, !0)
                }
            }
        }
        return c
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.dh = function() {
        return _.Ib("Safari") && !(_.Pb() || _.Ib("Coast") || _.Mb() || _.Ib("Edge") || _.Ib("Edg/") || _.Ib("OPR") || _.Ob() || _.Ib("Silk") || _.Ib("Android"))
    };
    _.eh = function() {
        return _.Ib("Android") && !(_.Pb() || _.Ob() || _.Mb() || _.Ib("Silk"))
    };
    _.fh = _.Ob();
    _.gh = _.Ec() || _.Ib("iPod");
    _.hh = _.Ib("iPad");
    _.ih = _.eh();
    _.jh = _.Pb();
    _.kh = _.dh() && !_.Fc();

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var lh;
    lh = {};
    _.mh = null;
    _.nh = _.Oc || _.Pc && !_.kh || _.Kc || !_.kh && !_.Lc && "function" == typeof _.q.atob;
    _.ph = function(a, b) {
        void 0 === b && (b = 0);
        _.oh();
        b = lh[b];
        for (var c = [], d = 0; d < a.length; d += 3) {
            var e = a[d],
                f = d + 1 < a.length,
                g = f ? a[d + 1] : 0,
                k = d + 2 < a.length,
                l = k ? a[d + 2] : 0,
                m = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            g = (g & 15) << 2 | l >> 6;
            l &= 63;
            k || (l = 64, f || (g = 64));
            c.push(b[m], b[e], b[g] || "", b[l] || "")
        }
        return c.join("")
    };
    _.oh = function() {
        if (!_.mh) {
            _.mh = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                lh[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === _.mh[f] && (_.mh[f] = e)
                }
            }
        }
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var fq;
    _.dq = function(a, b) {
        a = a.split(".");
        b = b || _.q;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    };
    _.eq = function(a, b) {
        b = (0, _.sb)(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    fq = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    _.gq = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    };
    _.hq = function() {
        this.Lb = this.Lb;
        this.vm = this.vm
    };
    _.hq.prototype.Lb = !1;
    _.hq.prototype.eo = function() {
        return this.Lb
    };
    _.hq.prototype.Ea = function() {
        this.Lb || (this.Lb = !0, this.ua())
    };
    _.kq = function(a, b) {
        _.iq(a, _.Kj(_.jq, b))
    };
    _.iq = function(a, b) {
        a.Lb ? b() : (a.vm || (a.vm = []), a.vm.push(b))
    };
    _.hq.prototype.ua = function() {
        if (this.vm)
            for (; this.vm.length;) this.vm.shift()()
    };
    _.jq = function(a) {
        a && "function" == typeof a.Ea && a.Ea()
    };
    _.lq = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Dm = !1
    };
    _.lq.prototype.stopPropagation = function() {
        this.Dm = !0
    };
    _.lq.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var nq, oq;
    _.mq = !_.Lc || _.hd(9);
    nq = !_.Lc || _.hd(9);
    oq = _.Lc && !_.fd("9");
    !_.Pc || _.fd("528");
    _.Oc && _.fd("1.9b") || _.Lc && _.fd("8") || _.Kc && _.fd("9.5") || _.Pc && _.fd("528");
    _.Oc && !_.fd("8") || _.Lc && _.fd("9");
    var pq = function() {
        if (!_.q.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            _.q.addEventListener("test", _.gb, b), _.q.removeEventListener("test", _.gb, b)
        } catch (c) {}
        return a
    }();
    _.qq = _.Pc ? "webkitTransitionEnd" : _.Kc ? "otransitionend" : "transitionend";
    _.rq = function(a, b) {
        _.lq.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.FD = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.we = null;
        a && this.init(a, b)
    };
    _.G(_.rq, _.lq);
    var sq = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    _.rq.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? _.Oc && (_.Hc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = _.Pc || void 0 !==
            a.offsetX ? a.offsetX : a.layerX, this.offsetY = _.Pc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.FD = _.Rc ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId ||
            0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : sq[a.pointerType] || "";
        this.state = a.state;
        this.we = a;
        a.defaultPrevented && this.preventDefault()
    };
    _.rq.prototype.stopPropagation = function() {
        _.rq.H.stopPropagation.call(this);
        this.we.stopPropagation ? this.we.stopPropagation() : this.we.cancelBubble = !0
    };
    _.rq.prototype.preventDefault = function() {
        _.rq.H.preventDefault.call(this);
        var a = this.we;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, oq) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var vq;
    _.tq = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.uq = function(a) {
        return !(!a || !a[_.tq])
    };
    vq = 0;
    var wq = function(a, b, c, d, e) {
            this.listener = a;
            this.Qw = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.We = e;
            this.key = ++vq;
            this.Co = this.Wt = !1
        },
        xq = function(a) {
            a.Co = !0;
            a.listener = null;
            a.Qw = null;
            a.src = null;
            a.We = null
        };
    _.yq = function(a) {
        this.src = a;
        this.yd = {};
        this.dt = 0
    };
    _.yq.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.yd[f];
        a || (a = this.yd[f] = [], this.dt++);
        var g = zq(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Wt = !1)) : (b = new wq(b, this.src, f, !!d, e), b.Wt = c, a.push(b));
        return b
    };
    _.yq.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.yd)) return !1;
        var e = this.yd[a];
        b = zq(e, b, c, d);
        return -1 < b ? (xq(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.yd[a], this.dt--), !0) : !1
    };
    _.Aq = function(a, b) {
        var c = b.type;
        if (!(c in a.yd)) return !1;
        var d = _.eq(a.yd[c], b);
        d && (xq(b), 0 == a.yd[c].length && (delete a.yd[c], a.dt--));
        return d
    };
    _.yq.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.yd)
            if (!a || c == a) {
                for (var d = this.yd[c], e = 0; e < d.length; e++) ++b, xq(d[e]);
                delete this.yd[c];
                this.dt--
            }
        return b
    };
    _.yq.prototype.In = function(a, b, c, d) {
        a = this.yd[a.toString()];
        var e = -1;
        a && (e = zq(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    _.yq.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return fq(this.yd, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var zq = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Co && f.listener == b && f.capture == !!c && f.We == d) return e
        }
        return -1
    };
    var Bq, Cq, Dq, Hq, Jq, Kq, Oq, Nq, Lq, Pq;
    Bq = "closure_lm_" + (1E6 * Math.random() | 0);
    Cq = {};
    Dq = 0;
    _.Fq = function(a, b, c, d, e) {
        if (d && d.once) return _.Eq(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.Fq(a, b[f], c, d, e);
            return null
        }
        c = _.Gq(c);
        return _.uq(a) ? a.V(b, c, _.kb(d) ? !!d.capture : !!d, e) : Hq(a, b, c, !1, d, e)
    };
    Hq = function(a, b, c, d, e, f) {
        if (!b) throw Error("F");
        var g = _.kb(e) ? !!e.capture : !!e,
            k = _.Iq(a);
        k || (a[Bq] = k = new _.yq(a));
        c = k.add(b, c, d, g, f);
        if (c.Qw) return c;
        d = Jq();
        c.Qw = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) pq || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Kq(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("G");
        Dq++;
        return c
    };
    Jq = function() {
        var a = Lq,
            b = nq ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    _.Eq = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.Eq(a, b[f], c, d, e);
            return null
        }
        c = _.Gq(c);
        return _.uq(a) ? a.oo(b, c, _.kb(d) ? !!d.capture : !!d, e) : Hq(a, b, c, !0, d, e)
    };
    _.Mq = function(a) {
        if ("number" === typeof a || !a || a.Co) return !1;
        var b = a.src;
        if (_.uq(b)) return b.vF(a);
        var c = a.type,
            d = a.Qw;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Kq(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Dq--;
        (c = _.Iq(b)) ? (_.Aq(c, a), 0 == c.dt && (c.src = null, b[Bq] = null)) : xq(a);
        return !0
    };
    Kq = function(a) {
        return a in Cq ? Cq[a] : Cq[a] = "on" + a
    };
    Oq = function(a, b, c, d) {
        var e = !0;
        if (a = _.Iq(a))
            if (b = a.yd[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Co && (f = Nq(f, d), e = e && !1 !== f)
                }
            return e
    };
    Nq = function(a, b) {
        var c = a.listener,
            d = a.We || a.src;
        a.Wt && _.Mq(a);
        return c.call(d, b)
    };
    Lq = function(a, b) {
        if (a.Co) return !0;
        if (!nq) {
            var c = b || _.dq("window.event");
            b = new _.rq(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.currentTarget; e; e = e.parentNode) c.push(e);a = a.type;
                for (e = c.length - 1; !b.Dm && 0 <= e; e--) {
                    b.currentTarget = c[e];
                    var f = Oq(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.Dm && e < c.length; e++) b.currentTarget = c[e],
                f = Oq(c[e], a, !1, b),
                d = d && f
            }
            return d
        }
        return Nq(a, new _.rq(b,
            this))
    };
    _.Iq = function(a) {
        a = a[Bq];
        return a instanceof _.yq ? a : null
    };
    Pq = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.Gq = function(a) {
        if (_.lb(a)) return a;
        a[Pq] || (a[Pq] = function(b) {
            return a.handleEvent(b)
        });
        return a[Pq]
    };
    _.Pj(function(a) {
        Lq = a(Lq)
    });

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.Qq = function(a, b) {
        a.prototype = (0, _.wa)(b.prototype);
        a.prototype.constructor = a;
        if (_.Ia)(0, _.Ia)(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.H = b.prototype
    };
    _.Rq = function(a) {
        a.oC = void 0;
        a.Ma = function() {
            return a.oC ? a.oC : a.oC = new a
        }
    };
    _.Sq = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    _.Tq = function(a) {
        for (var b in a) return !1;
        return !0
    };
    _.Uq = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) _.Uq(a, b[f], c, d, e);
        else d = _.kb(d) ? !!d.capture : !!d, c = _.Gq(c), _.uq(a) ? a.$b(b, c, d, e) : a && (a = _.Iq(a)) && (b = a.In(b, c, d, e)) && _.Mq(b)
    };
    _.Vq = function() {
        _.hq.call(this);
        this.Ti = new _.yq(this);
        this.HS = this;
        this.AD = null
    };
    _.G(_.Vq, _.hq);
    _.Vq.prototype[_.tq] = !0;
    _.h = _.Vq.prototype;
    _.h.Pl = function() {
        return this.AD
    };
    _.h.tx = _.ia(20);
    _.h.addEventListener = function(a, b, c, d) {
        _.Fq(this, a, b, c, d)
    };
    _.h.removeEventListener = function(a, b, c, d) {
        _.Uq(this, a, b, c, d)
    };
    _.h.dispatchEvent = function(a) {
        var b, c = this.Pl();
        if (c)
            for (b = []; c; c = c.Pl()) b.push(c);
        c = this.HS;
        var d = a.type || a;
        if ("string" === typeof a) a = new _.lq(a, c);
        else if (a instanceof _.lq) a.target = a.target || c;
        else {
            var e = a;
            a = new _.lq(d, c);
            _.Lb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.Dm && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = g.xq(d, !0, a) && e
            }
        a.Dm || (g = a.currentTarget = c, e = g.xq(d, !0, a) && e, a.Dm || (e = g.xq(d, !1, a) && e));
        if (b)
            for (f = 0; !a.Dm && f < b.length; f++) g = a.currentTarget = b[f], e = g.xq(d, !1, a) && e;
        return e
    };
    _.h.ua = function() {
        _.Vq.H.ua.call(this);
        this.SD();
        this.AD = null
    };
    _.h.V = function(a, b, c, d) {
        return this.Ti.add(String(a), b, !1, c, d)
    };
    _.h.oo = function(a, b, c, d) {
        return this.Ti.add(String(a), b, !0, c, d)
    };
    _.h.$b = function(a, b, c, d) {
        return this.Ti.remove(String(a), b, c, d)
    };
    _.h.vF = function(a) {
        return _.Aq(this.Ti, a)
    };
    _.h.SD = function(a) {
        this.Ti && this.Ti.removeAll(a)
    };
    _.h.xq = function(a, b, c) {
        a = this.Ti.yd[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.Co && f.capture == b) {
                var g = f.listener,
                    k = f.We || f.src;
                f.Wt && this.vF(f);
                d = !1 !== g.call(k, c) && d
            }
        }
        return d && !c.defaultPrevented
    };
    _.h.In = function(a, b, c, d) {
        return this.Ti.In(String(a), b, c, d)
    };
    _.h.hasListener = function(a, b) {
        return this.Ti.hasListener(void 0 !== a ? String(a) : void 0, b)
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.Ht = "StopIteration" in _.q ? _.q.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    _.It = function() {};
    _.It.prototype.next = function() {
        throw _.Ht;
    };
    _.It.prototype.Fi = function() {
        return this
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.Jt = function(a, b) {
        this.U = {};
        this.Pb = [];
        this.Uf = this.Xb = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("i");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    _.h = _.Jt.prototype;
    _.h.Cb = function() {
        return this.Xb
    };
    _.h.Xc = function() {
        Kt(this);
        for (var a = [], b = 0; b < this.Pb.length; b++) a.push(this.U[this.Pb[b]]);
        return a
    };
    _.h.ze = function() {
        Kt(this);
        return this.Pb.concat()
    };
    _.h.Rd = function(a) {
        return _.Lt(this.U, a)
    };
    _.h.$j = _.ia(4);
    _.h.equals = function(a, b) {
        if (this === a) return !0;
        if (this.Xb != a.Cb()) return !1;
        b = b || Mt;
        Kt(this);
        for (var c, d = 0; c = this.Pb[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    var Mt = function(a, b) {
        return a === b
    };
    _.Jt.prototype.isEmpty = function() {
        return 0 == this.Xb
    };
    _.Jt.prototype.clear = function() {
        this.U = {};
        this.Uf = this.Xb = this.Pb.length = 0
    };
    _.Jt.prototype.remove = function(a) {
        return _.Lt(this.U, a) ? (delete this.U[a], this.Xb--, this.Uf++, this.Pb.length > 2 * this.Xb && Kt(this), !0) : !1
    };
    var Kt = function(a) {
        if (a.Xb != a.Pb.length) {
            for (var b = 0, c = 0; b < a.Pb.length;) {
                var d = a.Pb[b];
                _.Lt(a.U, d) && (a.Pb[c++] = d);
                b++
            }
            a.Pb.length = c
        }
        if (a.Xb != a.Pb.length) {
            var e = {};
            for (c = b = 0; b < a.Pb.length;) d = a.Pb[b], _.Lt(e, d) || (a.Pb[c++] = d, e[d] = 1), b++;
            a.Pb.length = c
        }
    };
    _.h = _.Jt.prototype;
    _.h.get = function(a, b) {
        return _.Lt(this.U, a) ? this.U[a] : b
    };
    _.h.set = function(a, b) {
        _.Lt(this.U, a) || (this.Xb++, this.Pb.push(a), this.Uf++);
        this.U[a] = b
    };
    _.h.addAll = function(a) {
        if (a instanceof _.Jt)
            for (var b = a.ze(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    _.h.forEach = function(a, b) {
        for (var c = this.ze(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    _.h.clone = function() {
        return new _.Jt(this)
    };
    _.h.Fi = function(a) {
        Kt(this);
        var b = 0,
            c = this.Uf,
            d = this,
            e = new _.It;
        e.next = function() {
            if (c != d.Uf) throw Error("L");
            if (b >= d.Pb.length) throw _.Ht;
            var f = d.Pb[b++];
            return a ? f : d.U[f]
        };
        return e
    };
    _.Lt = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.Nt = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    _.Ot = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    _.Pt = function(a, b) {
        var c = _.jb(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a) return;
            a = a[d[c]]
        }
        return a
    };
    _.Qt = function(a) {
        if (a.Xc && "function" == typeof a.Xc) return a.Xc();
        if ("string" === typeof a) return a.split("");
        if (_.jb(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return _.Nt(a)
    };
    _.Rt = function(a) {
        if (a.ze && "function" == typeof a.ze) return a.ze();
        if (!a.Xc || "function" != typeof a.Xc) {
            if (_.jb(a) || "string" === typeof a) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            return _.Ot(a)
        }
    };
    _.St = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (_.jb(a) || "string" === typeof a)(0, _.vb)(a, b, c);
        else
            for (var d = _.Rt(a), e = _.Qt(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Tx;
    _.Ux = function(a) {
        return (new Tx).zh(a)
    };
    Tx = function() {};
    Tx.prototype.zh = function(a) {
        var b = [];
        Wx(this, a, b);
        return b.join("")
    };
    var Wx = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), Wx(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Xx(d, c), c.push(":"), Wx(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Xx(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("pa`" + typeof b);
                }
            }
        },
        Yx = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Zx = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Xx = function(a, b) {
            b.push('"', a.replace(Zx, function(c) {
                var d = Yx[c];
                d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Yx[c] =
                    d);
                return d
            }), '"')
        };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.$x = function(a, b, c) {
        if (_.lb(a)) c && (a = (0, _.L)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, _.L)(a.handleEvent, a);
        else throw Error("qa");
        return 2147483647 < Number(b) ? -1 : _.q.setTimeout(a, b || 0)
    };
    _.ay = function(a) {
        _.q.clearTimeout(a)
    };
    _.by = function(a) {
        var b = null;
        return (new _.rk(function(c, d) {
            b = _.$x(function() {
                c(void 0)
            }, a); - 1 == b && d(Error("ra"))
        })).Ix(function(c) {
            _.ay(b);
            throw c;
        })
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.cy = function(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };

    var fy, jy, ky, my, ny, Ey, Gy;
    _.dy = function(a) {
        return (a = _.Qx(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    };
    _.ey = function(a) {
        if (!Array.isArray(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    };
    fy = function(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    _.gy = function(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    };
    _.hy = function(a, b) {
        return null !== a && b in a
    };
    _.iy = function(a) {
        var b = _.hb(a);
        if ("object" == b || "array" == b) {
            if (_.lb(a.clone)) return a.clone();
            b = "array" == b ? [] : {};
            for (var c in a) b[c] = _.iy(a[c]);
            return b
        }
        return a
    };
    jy = function(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };
    ky = function() {
        function a(e) {
            e = _.Lj(e, d);
            return c[e] || ""
        }
        var b = _.Fb;
        if (_.Nb()) return jy(b);
        b = fy(b);
        var c = {};
        (0, _.vb)(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = _.Kj(_.hy, c);
        return _.Mb() ? a(["Version", "Opera"]) : _.Ib("Edge") ? a(["Edge"]) : _.Ib("Edg/") ? a(["Edg"]) : _.Pb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    };
    _.ly = function(a) {
        return 0 <= _.Eb(ky(), a)
    };
    my = function(a) {
        return Array.prototype.join.call(arguments, "")
    };
    ny = function(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) _.uh(a[b], a[b + 1], c);
        return c.join("&")
    };
    _.oy = function(a, b) {
        var c = 2 == arguments.length ? ny(arguments[1], 0) : ny(arguments, 1);
        return _.th(a, c)
    };
    _.py = function(a, b, c) {
        c = null != c ? "=" + _.qh(c) : "";
        return _.th(a, b + c)
    };
    _.qy = function(a, b) {
        _.Sq(a, "/") && (a = a.substr(0, a.length - 1));
        _.qd(b, "/") && (b = b.substr(1));
        return my(a, "/", b)
    };
    Ey = {};
    _.Fy = function(a) {
        if (Ey[a]) return Ey[a];
        a = String(a);
        if (!Ey[a]) {
            var b = /function\s+([^\(]+)/m.exec(a);
            Ey[a] = b ? b[1] : "[Anonymous]"
        }
        return Ey[a]
    };
    Gy = function(a, b) {
        var c = [];
        if (_.Bb(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(_.Fy(a) + "(");
            for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                0 < e && c.push(", ");
                var f = d[e];
                switch (typeof f) {
                    case "object":
                        f = f ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        f = String(f);
                        break;
                    case "boolean":
                        f = f ? "true" : "false";
                        break;
                    case "function":
                        f = (f = _.Fy(f)) ? f : "[fn]";
                        break;
                    default:
                        f = typeof f
                }
                40 < f.length && (f = f.substr(0, 40) + "...");
                c.push(f)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(Gy(a.caller,
                    b))
            } catch (g) {
                c.push("[exception trying to get caller]\n")
            }
        } else a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    };
    _.Hy = function(a) {
        var b = Error();
        if (Error.captureStackTrace) Error.captureStackTrace(b, a || _.Hy), b = String(b.stack);
        else {
            try {
                throw b;
            } catch (c) {
                b = c
            }
            b = (b = b.stack) ? String(b) : null
        }
        b || (b = Gy(a || arguments.callee.caller, []));
        return b
    };
    _.Iy = function(a) {
        switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                return !0;
            default:
                return !1
        }
    };
    _.Jy = function(a, b) {
        _.Vq.call(this);
        this.Ck = a || 1;
        this.Xs = b || _.q;
        this.GH = (0, _.L)(this.L2, this);
        this.vL = (0, _.ab)()
    };
    _.G(_.Jy, _.Vq);
    _.h = _.Jy.prototype;
    _.h.enabled = !1;
    _.h.nc = null;
    _.h.setInterval = function(a) {
        this.Ck = a;
        this.nc && this.enabled ? (this.stop(), this.start()) : this.nc && this.stop()
    };
    _.h.L2 = function() {
        if (this.enabled) {
            var a = (0, _.ab)() - this.vL;
            0 < a && a < .8 * this.Ck ? this.nc = this.Xs.setTimeout(this.GH, this.Ck - a) : (this.nc && (this.Xs.clearTimeout(this.nc), this.nc = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    _.h.start = function() {
        this.enabled = !0;
        this.nc || (this.nc = this.Xs.setTimeout(this.GH, this.Ck), this.vL = (0, _.ab)())
    };
    _.h.stop = function() {
        this.enabled = !1;
        this.nc && (this.Xs.clearTimeout(this.nc), this.nc = null)
    };
    _.h.ua = function() {
        _.Jy.H.ua.call(this);
        this.stop();
        delete this.Xs
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ly, My, Ny;
    _.Ky = function(a) {
        _.Vq.call(this);
        this.headers = new _.Jt;
        this.Zx = a || null;
        this.tf = !1;
        this.Yx = this.Pa = null;
        this.Zv = "";
        this.jo = 0;
        this.jm = this.kC = this.Cv = this.vA = !1;
        this.Rm = 0;
        this.ld = null;
        this.Nk = "";
        this.EF = this.sf = !1
    };
    _.G(_.Ky, _.Vq);
    _.Ky.prototype.Db = null;
    Ly = /^https?$/i;
    My = ["POST", "PUT"];
    Ny = [];
    _.Oy = function(a, b, c, d, e, f, g) {
        var k = new _.Ky;
        Ny.push(k);
        b && k.V("complete", b);
        k.oo("ready", k.rT);
        f && k.VE(f);
        g && (k.sf = g);
        k.send(a, c, d, e)
    };
    _.Ky.prototype.rT = function() {
        this.Ea();
        _.eq(Ny, this)
    };
    _.Ky.prototype.VE = function(a) {
        this.Rm = Math.max(0, a)
    };
    _.Ky.prototype.send = function(a, b, c, d) {
        if (this.Pa) throw Error("sa`" + this.Zv + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Zv = a;
        this.jo = 0;
        this.vA = !1;
        this.tf = !0;
        this.Pa = this.Zx ? _.dy(this.Zx) : _.dy(_.Rx);
        this.Yx = this.Zx ? this.Zx.getOptions() : _.Rx.getOptions();
        this.Pa.onreadystatechange = (0, _.L)(this.kM, this);
        try {
            this.kC = !0, this.Pa.open(b, String(a), !0), this.kC = !1
        } catch (f) {
            this.Gu(5, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && _.St(d, function(f, g) {
            e.set(g, f)
        });
        d = _.Lj(e.ze(), Py);
        c = _.q.FormData && a instanceof _.q.FormData;
        !_.Bb(My, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.Pa.setRequestHeader(g, f)
        }, this);
        this.Nk && (this.Pa.responseType = this.Nk);
        "withCredentials" in this.Pa && this.Pa.withCredentials !== this.sf && (this.Pa.withCredentials = this.sf);
        try {
            Qy(this), 0 < this.Rm && ((this.EF = Ry(this.Pa)) ? (this.Pa.timeout = this.Rm, this.Pa.ontimeout = (0, _.L)(this.Gg, this)) : this.ld = _.$x(this.Gg, this.Rm, this)), this.Cv = !0, this.Pa.send(a), this.Cv = !1
        } catch (f) {
            this.Gu(5, f)
        }
    };
    var Ry = function(a) {
            return _.Lc && _.fd(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        Py = function(a) {
            return "content-type" == a.toLowerCase()
        };
    _.Ky.prototype.Gg = function() {
        "undefined" != typeof _.Za && this.Pa && (this.jo = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    _.Ky.prototype.Gu = function(a) {
        this.tf = !1;
        this.Pa && (this.jm = !0, this.Pa.abort(), this.jm = !1);
        this.jo = a;
        Sy(this);
        Ty(this)
    };
    var Sy = function(a) {
        a.vA || (a.vA = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    _.Ky.prototype.abort = function(a) {
        this.Pa && this.tf && (this.tf = !1, this.jm = !0, this.Pa.abort(), this.jm = !1, this.jo = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ty(this))
    };
    _.Ky.prototype.ua = function() {
        this.Pa && (this.tf && (this.tf = !1, this.jm = !0, this.Pa.abort(), this.jm = !1), Ty(this, !0));
        _.Ky.H.ua.call(this)
    };
    _.Ky.prototype.kM = function() {
        this.Lb || (this.kC || this.Cv || this.jm ? Uy(this) : this.mD())
    };
    _.Ky.prototype.mD = function() {
        Uy(this)
    };
    var Uy = function(a) {
            if (a.tf && "undefined" != typeof _.Za && (!a.Yx[1] || 4 != _.Vy(a) || 2 != a.getStatus()))
                if (a.Cv && 4 == _.Vy(a)) _.$x(a.kM, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == _.Vy(a)) {
                a.tf = !1;
                try {
                    _.Wy(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.jo = 6, a.getStatus(), Sy(a))
                } finally {
                    Ty(a)
                }
            }
        },
        Ty = function(a, b) {
            if (a.Pa) {
                Qy(a);
                var c = a.Pa,
                    d = a.Yx[0] ? _.gb : null;
                a.Pa = null;
                a.Yx = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        Qy = function(a) {
            a.Pa && a.EF && (a.Pa.ontimeout =
                null);
            a.ld && (_.ay(a.ld), a.ld = null)
        };
    _.Ky.prototype.Xd = function() {
        return !!this.Pa
    };
    _.Wy = function(a) {
        var b = a.getStatus(),
            c;
        if (!(c = _.Iy(b))) {
            if (b = 0 === b) a = String(a.Zv).match(_.sh)[1] || null, !a && _.q.self && _.q.self.location && (a = _.q.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Ly.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    };
    _.Vy = function(a) {
        return a.Pa ? a.Pa.readyState : 0
    };
    _.Ky.prototype.getStatus = function() {
        try {
            return 2 < _.Vy(this) ? this.Pa.status : -1
        } catch (a) {
            return -1
        }
    };
    _.Xy = function(a) {
        try {
            return a.Pa ? a.Pa.responseText : ""
        } catch (b) {
            return ""
        }
    };
    _.Yy = function(a) {
        try {
            if (!a.Pa) return null;
            if ("response" in a.Pa) return a.Pa.response;
            switch (a.Nk) {
                case "":
                case "text":
                    return a.Pa.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in a.Pa) return a.Pa.mozResponseArrayBuffer
            }
            return null
        } catch (b) {
            return null
        }
    };
    _.Ky.prototype.getResponseHeader = function(a) {
        if (this.Pa && 4 == _.Vy(this)) return a = this.Pa.getResponseHeader(a), null === a ? void 0 : a
    };
    _.Ky.prototype.getAllResponseHeaders = function() {
        return this.Pa && 4 == _.Vy(this) ? this.Pa.getAllResponseHeaders() || "" : ""
    };
    _.Pj(function(a) {
        _.Ky.prototype.mD = a(_.Ky.prototype.mD)
    });

    var Bg = function(a) {
            return {
                execute: function(b) {
                    var c = {
                            method: a.httpMethod || "GET",
                            root: a.root,
                            path: a.url,
                            params: a.urlParams,
                            headers: a.headers,
                            body: a.body
                        },
                        d = window.gapi,
                        e = function() {
                            var f = d.config.get("client/apiKey"),
                                g = d.config.get("client/version");
                            try {
                                var k = d.config.get("googleapis.config/developerKey"),
                                    l = d.config.get("client/apiKey", k);
                                d.config.update("client/apiKey", l);
                                d.config.update("client/version", "1.0.0-alpha");
                                var m = d.client;
                                m.request.call(m, c).then(b, b)
                            } finally {
                                d.config.update("client/apiKey",
                                    f), d.config.update("client/version", g)
                            }
                        };
                    d.client ? e() : d.load.call(d, "client", e)
                }
            }
        },
        Cg = function(a, b) {
            return function(c) {
                var d = {};
                c = c.body;
                var e = _.Hf(c),
                    f = {};
                if (e && e.length)
                    for (var g = 0, k = e.length; g < k; ++g) {
                        var l = e[g];
                        f[l.id] = l
                    }
                g = 0;
                for (k = b.length; g < k; ++g) l = b[g].id, d[l] = e && e.length ? f[l] : e;
                a(d, c)
            }
        },
        Dg = function(a) {
            a.transport = {
                name: "googleapis",
                execute: function(b, c) {
                    for (var d = [], e = 0, f = b.length; e < f; ++e) {
                        var g = b[e],
                            k = g.method,
                            l = String(k).split(".")[0];
                        l = _.R("googleapis.config/versions/" + k) || _.R("googleapis.config/versions/" +
                            l) || "v1";
                        d.push({
                            jsonrpc: "2.0",
                            id: g.id,
                            method: k,
                            apiVersion: String(l),
                            params: g.params
                        })
                    }
                    b = Bg({
                        httpMethod: "POST",
                        root: a.transport.root,
                        url: "/rpc?pp=0",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: d
                    });
                    b.execute.call(b, Cg(c, d))
                },
                root: void 0
            }
        },
        Eg = function(a) {
            var b = this.method,
                c = this.transport;
            c.execute.call(c, [{
                method: b,
                id: b,
                params: this.rpc
            }], function(d) {
                d = d[b];
                d.error || (d = d.data || d.result);
                a(d)
            })
        },
        Gg = function() {
            for (var a = Fg, b = a.split("."), c = function(k) {
                    k = k || {};
                    k.groupId = k.groupId || "@self";
                    k.userId =
                        k.userId || "@viewer";
                    k = {
                        method: a,
                        rpc: k || {}
                    };
                    Dg(k);
                    k.execute = Eg;
                    return k
                }, d = _.q, e = 0, f = b.length; e < f; ++e) {
                var g = d[b[e]] || {};
                e + 1 == f && (g = c);
                d = d[b[e]] = g
            }
            if (1 < b.length && "googleapis" != b[0])
                for (b[0] = "googleapis", "delete" == b[b.length - 1] && (b[b.length - 1] = "remove"), d = _.q, e = 0, f = b.length; e < f; ++e) g = d[b[e]] || {}, e + 1 == f && (g = c), d = d[b[e]] = g
        },
        Fg;
    for (Fg in _.R("googleapis.config/methods")) Gg();
    _.z("googleapis.newHttpRequest", function(a) {
        return Bg(a)
    });
    _.z("googleapis.setUrlParameter", function(a, b) {
        if ("trace" !== a) throw Error("w");
        _.Ne("client/trace", b)
    });

    var Ou, Pu, Qu, Ru, Tu, Uu, Vu, Wu, Yu;
    oauth2 = {};
    _.Nu = !1;
    Ou = function(a) {
        try {
            _.Nu && window.console && window.console.log && window.console.log(a)
        } catch (b) {}
    };
    Pu = function(a, b) {
        if (!a) return -1;
        if (a.indexOf) return a.indexOf(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b) return c;
        return -1
    };
    Qu = function(a, b) {
        function c() {}
        if (!a) throw "Child class cannot be empty.";
        if (!b) throw "Parent class cannot be empty.";
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    Ru = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    };
    _.Su = function(a) {
        var b = {};
        if (a)
            for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    };
    Tu = function(a) {
        var b = location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        b = decodeURIComponent(b);
        b = a.exec(b);
        return null == b ? "" : b[1].replace(/\+/g, " ")
    };
    Uu = function(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1);
        else if (a.attachEvent) a.attachEvent("on" + b, c);
        else throw "Add event handler for " + b + " failed.";
    };
    Vu = {
        token: 1,
        id_token: 1
    };
    Wu = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
    };
    _.Xu = window.JSON;
    Yu = function(a) {
        this.IF = a || [];
        this.Yb = {}
    };
    Yu.prototype.addEventListener = function(a, b) {
        if (!(0 <= Pu(this.IF, a))) throw "Unrecognized event type: " + a;
        if (!Ru(b)) throw "The listener for event '" + a + "' is not a function.";
        this.Yb[a] || (this.Yb[a] = []);
        0 > Pu(this.Yb[a], b) && this.Yb[a].push(b)
    };
    Yu.prototype.removeEventListener = function(a, b) {
        if (!(0 <= Pu(this.IF, a))) throw "Unrecognized event type: " + a;
        Ru(b) && this.Yb[a] && this.Yb[a].length && (b = Pu(this.Yb[a], b), 0 <= b && this.Yb[a].splice(b, 1))
    };
    Yu.prototype.dispatchEvent = function(a) {
        var b = a.type;
        if (!(b && 0 <= Pu(this.IF, b))) throw "Failed to dispatch unrecognized event type: " + b;
        if (this.Yb[b] && this.Yb[b].length)
            for (var c = 0, d = this.Yb[b].length; c < d; c++) this.Yb[b][c](a)
    };
    var Zu, $u, av, ev, fv, wv, xv, zv, Av, Cv, Lv;
    Zu = {};
    $u = {};
    av = {
        google: {
            authServerUrl: "https://accounts.google.com/o/oauth2/auth",
            idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe"
        }
    };
    _.bv = function(a, b) {
        if (a = av[a]) return a[b]
    };
    _.cv = function(a, b) {
        if (!a) throw Error("O");
        if (!b.authServerUrl) throw Error("P");
        if (!b.idpIFrameUrl) throw Error("Q");
        av[a] = {
            authServerUrl: b.authServerUrl,
            idpIFrameUrl: b.idpIFrameUrl
        }
    };
    _.dv = void 0;
    ev = function(a) {
        a.style.position = "absolute";
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.left = "-9999px";
        a.style.top = "-9999px";
        a.style.right = "-9999px";
        a.style.bottom = "-9999px";
        a.style.display = "none";
        a.setAttribute("aria-hidden", "true")
    };
    fv = function() {
        this.u3 = window;
        this.ou = this.yl = this.bs = this.rh = null
    };
    fv.prototype.open = function(a, b, c, d) {
        gv(this);
        this.bs ? (this.yl && (this.yl(), this.yl = null), hv(this)) : this.bs = "authPopup" + Math.floor(1E6 * Math.random() + 1);
        a: {
            this.rh = this.u3.open(a, this.bs, b);
            try {
                this.rh.focus();
                if (this.rh.closed || "undefined" == typeof this.rh.closed) throw Error("S");
                _.dv = this.rh
            } catch (e) {
                d && setTimeout(d, 0);
                this.rh = null;
                break a
            }
            c && (this.yl = c, iv(this))
        }
    };
    var gv = function(a) {
            try {
                if (null == a.rh || a.rh.closed) a.rh = null, a.bs = null, hv(a), a.yl && (a.yl(), a.yl = null)
            } catch (b) {
                a.rh = null, a.bs = null, hv(a)
            }
        },
        iv = function(a) {
            a.ou = window.setInterval(function() {
                gv(a)
            }, 300)
        },
        hv = function(a) {
            a.ou && (window.clearInterval(a.ou), a.ou = null)
        };
    $u = $u || {};
    var jv = function(a, b) {
        this.Jb = a;
        this.sC = b;
        this.ld = null;
        this.bm = !1
    };
    jv.prototype.start = function() {
        if (!this.bm && !this.ld) {
            var a = this;
            this.ld = window.setTimeout(function() {
                a.clear();
                a.bm || (a.Jb(), a.bm = !0)
            }, $u.RJ(this.sC))
        }
    };
    jv.prototype.clear = function() {
        this.ld && (window.clearTimeout(this.ld), this.ld = null)
    };
    var kv = function(a, b) {
        var c = $u.Gp;
        this.WX = $u.wp;
        this.jP = c;
        this.Jb = a;
        this.sC = b;
        this.ld = null;
        this.bm = !1;
        var d = this;
        this.kP = function() {
            document[d.WX] || (d.clear(), d.start())
        }
    };
    kv.prototype.start = function() {
        if (!this.bm && !this.ld) {
            Uu(document, this.jP, this.kP);
            var a = this;
            this.ld = window.setTimeout(function() {
                a.clear();
                a.bm || (a.Jb(), a.bm = !0)
            }, $u.RJ(this.sC))
        }
    };
    kv.prototype.clear = function() {
        var a = this.jP,
            b = this.kP,
            c = document;
        if (c.removeEventListener) c.removeEventListener(a, b, !1);
        else if (c.detachEvent) c.detachEvent("on" + a, b);
        else throw "Remove event handler for " + a + " failed.";
        this.ld && (window.clearTimeout(this.ld), this.ld = null)
    };
    $u.wp = null;
    $u.Gp = null;
    $u.sY = function() {
        var a = document;
        "undefined" !== typeof a.hidden ? ($u.wp = "hidden", $u.Gp = "visibilitychange") : "undefined" !== typeof a.msHidden ? ($u.wp = "msHidden", $u.Gp = "msvisibilitychange") : "undefined" !== typeof a.webkitHidden && ($u.wp = "webkitHidden", $u.Gp = "webkitvisibilitychange")
    };
    $u.sY();
    $u.JT = function(a, b) {
        return $u.wp && $u.Gp ? new kv(a, b) : new jv(a, b)
    };
    $u.RJ = function(a) {
        return Math.max(1, a - (new Date).getTime())
    };
    var lv = function(a, b) {
            document.cookie = "G_ENABLED_IDPS=" + a + ";domain=." + b + ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/"
        },
        mv = function() {
            function a() {
                e[0] = 1732584193;
                e[1] = 4023233417;
                e[2] = 2562383102;
                e[3] = 271733878;
                e[4] = 3285377520;
                n = m = 0
            }

            function b(p) {
                for (var t = g, r = 0; 64 > r; r += 4) t[r / 4] = p[r] << 24 | p[r + 1] << 16 | p[r + 2] << 8 | p[r + 3];
                for (r = 16; 80 > r; r++) p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16], t[r] = (p << 1 | p >>> 31) & 4294967295;
                p = e[0];
                var v = e[1],
                    u = e[2],
                    w = e[3],
                    y = e[4];
                for (r = 0; 80 > r; r++) {
                    if (40 > r)
                        if (20 > r) {
                            var B = w ^ v & (u ^ w);
                            var A = 1518500249
                        } else B =
                            v ^ u ^ w, A = 1859775393;
                    else 60 > r ? (B = v & u | w & (v | u), A = 2400959708) : (B = v ^ u ^ w, A = 3395469782);
                    B = ((p << 5 | p >>> 27) & 4294967295) + B + y + A + t[r] & 4294967295;
                    y = w;
                    w = u;
                    u = (v << 30 | v >>> 2) & 4294967295;
                    v = p;
                    p = B
                }
                e[0] = e[0] + p & 4294967295;
                e[1] = e[1] + v & 4294967295;
                e[2] = e[2] + u & 4294967295;
                e[3] = e[3] + w & 4294967295;
                e[4] = e[4] + y & 4294967295
            }

            function c(p, t) {
                if ("string" === typeof p) {
                    p = unescape(encodeURIComponent(p));
                    for (var r = [], v = 0, u = p.length; v < u; ++v) r.push(p.charCodeAt(v));
                    p = r
                }
                t || (t = p.length);
                r = 0;
                if (0 == m)
                    for (; r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64;
                for (; r <
                    t;)
                    if (f[m++] = p[r++], n++, 64 == m)
                        for (m = 0, b(f); r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64
            }

            function d() {
                var p = [],
                    t = 8 * n;
                56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
                for (var r = 63; 56 <= r; r--) f[r] = t & 255, t >>>= 8;
                b(f);
                for (r = t = 0; 5 > r; r++)
                    for (var v = 24; 0 <= v; v -= 8) p[t++] = e[r] >> v & 255;
                return p
            }
            for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
            var m, n;
            a();
            return {
                reset: a,
                update: c,
                digest: d,
                Vg: function() {
                    for (var p = d(), t = "", r = 0; r < p.length; r++) t += "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) + "0123456789ABCDEF".charAt(p[r] % 16);
                    return t
                }
            }
        },
        nv =
        window.crypto,
        ov = !1,
        pv = 0,
        qv = 1,
        rv = 0,
        sv = "",
        tv = function(a) {
            a = a || window.event;
            var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            qv = qv * b % rv;
            if (3 == ++pv)
                if (a = window, b = tv, a.removeEventListener) a.removeEventListener("mousemove", b, !1);
                else if (a.detachEvent) a.detachEvent("onmousemove", b);
            else throw Error("T`mousemove");
        },
        uv = function(a) {
            var b = mv();
            b.update(a);
            return b.Vg()
        };
    ov = !!nv && "function" == typeof nv.getRandomValues;
    ov || (rv = 1E6 * (screen.width * screen.width + screen.height), sv = uv(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + Math.random()), Uu(window, "mousemove", tv));
    Zu = Zu || {};
    Zu.sQ = "ssIFrame_";
    _.vv = function(a, b) {
        this.Gb = a;
        if (!this.Gb) throw Error("U");
        a = _.bv(a, "idpIFrameUrl");
        if (!a) throw Error("V");
        this.IK = a;
        if (!b) throw Error("W");
        this.Hm = b;
        a = this.IK;
        b = document.createElement("a");
        b.setAttribute("href", a);
        a = [b.protocol, "//", b.hostname];
        "http:" == b.protocol && "" != b.port && "0" != b.port && "80" != b.port ? (a.push(":"), a.push(b.port)) : "https:" == b.protocol && "" != b.port && "0" != b.port && "443" != b.port && (a.push(":"), a.push(b.port));
        this.cC = a.join("");
        this.z0 = [location.protocol, "//", location.host].join("");
        this.bC =
            this.Yn = !1;
        this.EK = null;
        this.Cw = [];
        this.Ao = [];
        this.Ji = {};
        this.fm = void 0
    };
    _.vv.prototype.show = function() {
        var a = this.fm;
        a.style.position = "fixed";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.left = "0px";
        a.style.top = "0px";
        a.style.right = "0px";
        a.style.bottom = "0px";
        a.style.display = "block";
        a.style.zIndex = "9999999";
        a.style.overflow = "hidden";
        a.setAttribute("aria-hidden", "false")
    };
    _.vv.prototype.lc = function() {
        ev(this.fm)
    };
    _.vv.prototype.bw = function(a) {
        if (this.Yn) a && a(this);
        else {
            if (!this.fm) {
                var b = Zu.sQ + this.Gb;
                var c = this.Gb;
                var d = location.hostname;
                var e, f = document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");
                f && 2 < f.length && (e = f[2]);
                (f = e && 0 <= Pu(e.split("|"), c)) ? lv(e, d): lv(e ? e + "|" + c : c, d);
                c = !f;
                f = this.IK;
                var g = this.z0;
                d = this.Hm;
                e = document.createElement("iframe");
                e.setAttribute("id", b);
                b = "allow-scripts allow-same-origin";
                document.requestStorageAccess && Ru(document.requestStorageAccess) && (b += " allow-storage-access-by-user-activation");
                e.setAttribute("sandbox", b);
                ev(e);
                e.setAttribute("frame-border", "0");
                b = [f, "#origin=", encodeURIComponent(g)];
                b.push("&rpcToken=");
                b.push(encodeURIComponent(d));
                c && b.push("&clearCache=1");
                _.Nu && b.push("&debug=1");
                document.body.appendChild(e);
                e.setAttribute("src", b.join(""));
                this.fm = e
            }
            a && this.Cw.push(a)
        }
    };
    _.vv.prototype.Ol = function() {
        return this.EK
    };
    wv = function(a) {
        for (var b = 0; b < a.Cw.length; b++) a.Cw[b](a);
        a.Cw = []
    };
    _.yv = function(a, b, c, d) {
        if (a.Yn) {
            if (a.Yn && a.bC) throw a = "Failed to communicate with IDP IFrame due to unitialization error: " + a.Ol(), Ou(a), Error(a);
            xv(a, {
                method: b,
                params: c
            }, d)
        } else a.Ao.push({
            rpc: {
                method: b,
                params: c
            },
            callback: d
        }), a.bw()
    };
    xv = function(a, b, c) {
        if (c) {
            for (var d = b.id; !d || a.Ji[d];) d = (new Date).getMilliseconds() + "-" + (1E6 * Math.random() + 1);
            b.id = d;
            a.Ji[d] = c
        }
        b.rpcToken = a.Hm;
        a.fm.contentWindow.postMessage(_.Xu.stringify(b), a.cC)
    };
    zv = function(a) {
        if (a && 0 <= a.indexOf("::")) throw Error("X");
    };
    _.vv.prototype.$h = function(a, b, c, d, e, f, g, k) {
        zv(f);
        b = _.Su(b);
        _.yv(this, "getTokenResponse", {
            clientId: a,
            loginHint: c,
            request: b,
            sessionSelector: d,
            forceRefresh: g,
            skipCache: k,
            id: f
        }, e)
    };
    _.vv.prototype.$v = function(a, b, c, d, e) {
        b = _.Su(b);
        _.yv(this, "listIdpSessions", {
            clientId: a,
            request: b,
            sessionSelector: c,
            forceRefresh: e
        }, d)
    };
    Av = function(a, b, c) {
        zv(b.identifier);
        _.yv(a, "getSessionSelector", b, c)
    };
    _.Bv = function(a, b, c, d, e) {
        zv(b.identifier);
        _.yv(a, "setSessionSelector", {
            domain: b.domain,
            crossSubDomains: b.crossSubDomains,
            policy: b.policy,
            id: b.id,
            hint: d,
            disabled: !!c
        }, e)
    };
    Cv = function(a, b, c) {
        _.yv(a, "monitorClient", {
            clientId: b
        }, c)
    };
    _.vv.prototype.ns = _.ia(27);
    _.vv.prototype.Cx = function(a, b) {
        _.yv(this, "showDialog", {
            iba: a
        }, b)
    };
    _.vv.prototype.Yp = _.ia(29);
    Zu.zv = {};
    Zu.hB = function(a) {
        return Zu.zv[a]
    };
    Zu.bw = function(a, b) {
        var c = Zu.hB(a);
        if (!c) {
            c = String;
            if (ov) {
                var d = new window.Uint32Array(1);
                nv.getRandomValues(d);
                d = Number("0." + d[0])
            } else d = qv, d += parseInt(sv.substr(0, 20), 16), sv = uv(sv), d /= rv + Math.pow(16, 20);
            c = c(2147483647 * d);
            c = new _.vv(a, c);
            Zu.zv[a] = c
        }
        c.bw(b)
    };
    Zu.kV = function(a) {
        for (var b in Zu.zv) {
            var c = Zu.hB(b);
            if (c && c.fm && c.fm.contentWindow == a.source && c.cC == a.origin) return c
        }
    };
    Zu.UV = function(a) {
        for (var b in Zu.zv) {
            var c = Zu.hB(b);
            if (c && c.cC == a) return c
        }
    };
    Zu = Zu || {};
    var Ev = function() {
        var a = [],
            b;
        for (b in Dv) a.push(Dv[b]);
        Yu.call(this, a);
        this.xk = {};
        Ou("EventBus is ready.")
    };
    Qu(Ev, Yu);
    var Dv = {
            SR: "sessionSelectorChanged",
            Cy: "sessionStateChanged",
            gy: "authResult",
            aQ: "displayIFrame"
        },
        Gv = function(a) {
            var b = Fv;
            a && (b.xk[a] || (b.xk[a] = []))
        },
        Hv = function(a, b, c) {
            return b && a.xk[b] && 0 <= Pu(a.xk[b], c)
        };
    _.h = Ev.prototype;
    _.h.D_ = function(a) {
        var b, c = !!a.source && (a.source.opener === window || a.source === _.dv);
        if (b = c ? Zu.UV(a.origin) : Zu.kV(a)) {
            try {
                var d = _.Xu.parse(a.data)
            } catch (e) {
                Ou("Bad event, an error happened when parsing data.");
                return
            }
            if (!c) {
                if (!d || !d.rpcToken || d.rpcToken != b.Hm) {
                    Ou("Bad event, no RPC token.");
                    return
                }
                if (d.id && !d.method) {
                    c = d;
                    if (a = b.Ji[c.id]) delete b.Ji[c.id], a(c.result, c.error);
                    return
                }
            }
            "fireIdpEvent" != d.method ? Ou("Bad IDP event, method unknown.") : (a = d.params) && a.type && this.HK[a.type] ? (d = this.HK[a.type],
                c && !d.NS ? Ou("Bad IDP event. Source window cannot be a popup.") : d.hp && !d.hp.call(this, b, a) ? Ou("Bad IDP event.") : d.We.call(this, b, a)) : Ou("Bad IDP event.")
        } else Ou("Bad event, no corresponding Idp Stub.")
    };
    _.h.$0 = function(a, b) {
        return Hv(this, a.Gb, b.clientId)
    };
    _.h.Z0 = function(a, b) {
        b = b.clientId;
        return !b || Hv(this, a.Gb, b)
    };
    _.h.YS = function(a, b) {
        return Hv(this, a.Gb, b.clientId)
    };
    _.h.LZ = function(a) {
        a.Yn = !0;
        wv(a);
        for (var b = 0; b < a.Ao.length; b++) xv(a, a.Ao[b].rpc, a.Ao[b].callback);
        a.Ao = []
    };
    _.h.KZ = function(a, b) {
        b = {
            error: b.error
        };
        a.Yn = !0;
        a.bC = !0;
        a.EK = b;
        a.Ao = [];
        wv(a)
    };
    _.h.Vw = function(a, b) {
        b.originIdp = a.Gb;
        this.dispatchEvent(b)
    };
    var Fv = new Ev,
        Iv = Fv,
        Jv = {};
    Jv.idpReady = {
        We: Iv.LZ
    };
    Jv.idpError = {
        We: Iv.KZ
    };
    Jv.sessionStateChanged = {
        We: Iv.Vw,
        hp: Iv.$0
    };
    Jv.sessionSelectorChanged = {
        We: Iv.Vw,
        hp: Iv.Z0
    };
    Jv.authResult = {
        We: Iv.Vw,
        hp: Iv.YS,
        NS: !0
    };
    Jv.displayIFrame = {
        We: Iv.Vw
    };
    Fv.HK = Jv || {};
    Uu(window, "message", function(a) {
        Fv.D_.call(Fv, a)
    });
    _.Kv = function(a, b) {
        this.he = !1;
        if (!a) throw Error("Y");
        var c = [],
            d;
        for (d in a) c.push(a[d]);
        Yu.call(this, c);
        this.Bd = [location.protocol, "//", location.host].join("");
        this.Vc = b.crossSubDomains ? b.domain || this.Bd : this.Bd;
        if (!b) throw Error("Z");
        if (!b.idpId) throw Error("$");
        if (!_.bv(b.idpId, "authServerUrl") || !_.bv(b.idpId, "idpIFrameUrl")) throw Error("aa`" + b.idpId);
        this.Gb = b.idpId;
        this.Wb = void 0;
        this.PT = !!b.disableTokenRefresh;
        this.JU = !!b.forceTokenRefresh;
        this.j2 = !!b.skipTokenCache;
        this.setOptions(b);
        this.jq = [];
        this.km = this.gL = !1;
        this.co = void 0;
        this.TM();
        this.Zc = void 0;
        var e = this,
            f = function() {
                Ou("Token Manager is ready.");
                if (e.jq.length)
                    for (var g = 0; g < e.jq.length; g++) e.jq[g].call(e);
                e.gL = !0;
                e.jq = []
            };
        Zu.bw(this.Gb, function(g) {
            e.Zc = g;
            g.Yn && g.bC ? (e.km = !0, e.co = g.Ol(), e.yw(e.co)) : e.Wb ? Cv(e.Zc, e.Wb, function(k) {
                if (k) {
                    k = e.Gb;
                    var l = e.Wb,
                        m = Fv;
                    k && l && (m.xk[k] || (m.xk[k] = []), 0 > Pu(m.xk[k], l) && m.xk[k].push(l));
                    f()
                } else e.co = {
                    error: "Not a valid origin for the client: " + e.Bd + " has not been whitelisted for client ID " + e.Wb +
                        ". Please go to https://console.developers.google.com/ and whitelist this origin for your project's client ID."
                }, e.km = !0, e.yw(e.co)
            }) : (Gv(e.Gb), f())
        })
    };
    Qu(_.Kv, Yu);
    _.Kv.prototype.setOptions = function() {};
    _.Kv.prototype.TM = function() {};
    _.Kv.prototype.yw = function() {};
    _.Kv.prototype.Ol = function() {
        return this.co
    };
    Lv = function(a, b, c) {
        return function() {
            b.apply(a, c)
        }
    };
    _.Mv = function(a, b, c) {
        if (a.gL) b.apply(a, c);
        else {
            if (a.km) throw a.co;
            a.jq.push(Lv(a, b, c))
        }
    };
    _.Kv.prototype.TH = _.ia(30);
    _.Kv.prototype.Yp = _.ia(28);
    _.Ov = function(a, b) {
        _.Kv.call(this, a, b);
        this.CM = new fv;
        this.qj = this.zm = null;
        Nv(this)
    };
    Qu(_.Ov, _.Kv);
    _.Ov.prototype.setOptions = function() {};
    var Pv = function(a, b) {
            a.fe = {
                crossSubDomains: !!b.crossSubDomains,
                id: b.sessionSelectorId,
                domain: a.Vc
            };
            b.crossSubDomains && (a.fe.policy = b.policy)
        },
        Qv = function(a, b) {
            if (!b.authParameters) throw Error("ba");
            if (!b.authParameters.scope) throw Error("ca");
            if (!b.authParameters.response_type) throw Error("da");
            a.Mp = b.authParameters;
            a.Mp.redirect_uri || (a.Mp.redirect_uri = [location.protocol, "//", location.host, location.pathname].join(""));
            a.mi = _.Su(b.rpcAuthParameters || a.Mp);
            if (!a.mi.scope) throw Error("ea");
            if (!a.mi.response_type) throw Error("fa");
            a: {
                var c = a.mi.response_type.split(" ");
                for (var d = 0, e = c.length; d < e; d++)
                    if (c[d] && !Vu[c[d]]) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            if (c) throw Error("ga");
            b.enableSerialConsent && (a.mi.enable_serial_consent = !0);
            b.authResultIdentifier && (a.ZS = b.authResultIdentifier);
            b.spec_compliant && (a.mi.spec_compliant = b.spec_compliant)
        };
    _.Ov.prototype.TM = function() {
        var a = this;
        Fv.addEventListener(Dv.SR, function(b) {
            a.he && a.fe && b.originIdp == a.Gb && !b.crossSubDomains == !a.fe.crossSubDomains && b.domain == a.fe.domain && b.id == a.fe.id && a.oM(b)
        });
        Fv.addEventListener(Dv.Cy, function(b) {
            a.he && b.originIdp == a.Gb && b.clientId == a.Wb && a.pM(b)
        });
        Fv.addEventListener(Dv.gy, function(b) {
            _.dv = void 0;
            a.he && b.originIdp == a.Gb && b.clientId == a.Wb && b.id == a.nj && (a.zm && (window.clearTimeout(a.zm), a.zm = null), a.nj = void 0, a.Qr(b))
        });
        Fv.addEventListener(Dv.aQ, function(b) {
            a.he &&
                b.originIdp == a.Gb && (b.lc ? a.Zc.lc() : a.Zc.show())
        })
    };
    _.Ov.prototype.oM = function() {};
    _.Ov.prototype.pM = function() {};
    _.Ov.prototype.Qr = function() {};
    var Sv = function(a, b) {
            Rv(a);
            a.PT || (a.qj = $u.JT(function() {
                a.$h(!0)
            }, b - 3E5), navigator.onLine && a.qj.start())
        },
        Rv = function(a) {
            a.qj && (a.qj.clear(), a.qj = null)
        },
        Nv = function(a) {
            var b = window;
            Wu() && (b = document.body);
            Uu(b, "online", function() {
                a.qj && a.qj.start()
            });
            Uu(b, "offline", function() {
                a.qj && a.qj.clear()
            })
        };
    _.h = _.Ov.prototype;
    _.h.$h = function() {};
    _.h.Cx = function(a, b) {
        this.Zc.Cx(a, b)
    };
    _.h.YL = _.ia(31);
    _.h.aZ = function(a, b) {
        if (!this.Wb) throw Error("ka");
        this.Zc.$v(this.Wb, this.mi, this.fe, a, b)
    };
    _.h.$v = function(a, b) {
        _.Mv(this, this.aZ, [a, b])
    };
    _.Uv = function(a) {
        this.$d = void 0;
        this.Wg = !1;
        this.Qo = void 0;
        _.Ov.call(this, _.Tv, a)
    };
    Qu(_.Uv, _.Ov);
    _.Tv = {
        tG: "noSessionBound",
        Fp: "userLoggedOut",
        wP: "activeSessionChanged",
        Cy: "sessionStateChanged",
        nS: "tokenReady",
        mS: "tokenFailed",
        gy: "authResult",
        ERROR: "error"
    };
    _.Uv.prototype.setOptions = function(a) {
        if (!a.clientId) throw Error("la");
        this.Wb = a.clientId;
        this.Ca = a.id;
        Pv(this, a);
        Qv(this, a)
    };
    _.Uv.prototype.yw = function(a) {
        this.dispatchEvent({
            type: _.Tv.ERROR,
            error: "idpiframe_initialization_failed",
            details: a.error,
            idpId: this.Gb
        })
    };
    var Vv = function(a) {
        Rv(a);
        a.Qo = void 0;
        a.EC = void 0
    };
    _.h = _.Uv.prototype;
    _.h.oM = function(a) {
        var b = a.newValue || {};
        if (this.$d != b.hint || this.Wg != !!b.disabled) {
            a = this.$d;
            var c = !this.$d || this.Wg;
            Vv(this);
            this.$d = b.hint;
            this.Wg = !!b.disabled;
            (b = !this.$d || this.Wg) && !c ? this.dispatchEvent({
                type: _.Tv.Fp,
                idpId: this.Gb
            }) : b || (a != this.$d && this.dispatchEvent({
                type: _.Tv.wP,
                idpId: this.Gb
            }), this.$d && this.$h())
        }
    };
    _.h.pM = function(a) {
        this.Wg || (this.$d ? a.user || this.Qo ? a.user == this.$d && (this.Qo ? a.sessionState ? this.Qo = a.sessionState : (Vv(this), this.dispatchEvent({
            type: _.Tv.Fp,
            idpId: this.Gb
        })) : a.sessionState && (this.Qo = a.sessionState, this.$h())) : this.$h() : this.dispatchEvent({
            type: _.Tv.Cy,
            idpId: this.Gb
        }))
    };
    _.h.Qr = function(a) {
        this.dispatchEvent({
            type: _.Tv.gy,
            authResult: a.authResult
        })
    };
    _.h.Kq = _.ia(33);
    _.h.Dq = function(a) {
        _.Mv(this, this.VA, [a])
    };
    _.h.VA = function(a) {
        Av(this.Zc, this.fe, a)
    };
    _.h.Dx = function(a, b, c) {
        if (!a) throw Error("ma");
        Vv(this);
        this.$d = a;
        this.Wg = !1;
        b && _.Bv(this.Zc, this.fe, !1, this.$d);
        this.he = !0;
        this.$h(c, !0)
    };
    _.h.start = function() {
        _.Mv(this, this.p2, [])
    };
    _.h.p2 = function() {
        var a = this.Wb == Tu("client_id") ? Tu("login_hint") : void 0;
        var b = this.Wb == Tu("client_id") ? Tu("state") : void 0;
        this.fD = b;
        if (a) window.history.replaceState ? window.history.replaceState(null, document.title, window.location.href.split("#")[0]) : window.location.href.hash = "", this.Dx(a, !0, !0);
        else {
            var c = this;
            this.Dq(function(d) {
                c.he = !0;
                d && d.hint ? (Vv(c), c.$d = d.hint, c.Wg = !!d.disabled, c.Wg ? c.dispatchEvent({
                    type: _.Tv.Fp,
                    idpId: c.Gb
                }) : c.Dx(d.hint)) : (Vv(c), c.$d = void 0, c.Wg = !(!d || !d.disabled), c.dispatchEvent({
                    type: _.Tv.tG,
                    autoOpenAuthUrl: !c.Wg,
                    idpId: c.Gb
                }))
            })
        }
    };
    _.h.eJ = _.ia(34);
    _.h.$h = function(a, b) {
        var c = this;
        this.Zc.$h(this.Wb, this.mi, this.$d, this.fe, function(d, e) {
            (e = e || d.error) ? "user_logged_out" == e ? (Vv(c), c.dispatchEvent({
                type: _.Tv.Fp,
                idpId: c.Gb
            })) : (c.EC = null, c.dispatchEvent({
                type: _.Tv.mS,
                idpId: c.Gb,
                error: e
            })): (c.EC = d, c.Qo = d.session_state, Sv(c, d.expires_at), d.idpId = c.Gb, b && c.fD && (d.state = c.fD, c.fD = void 0), c.dispatchEvent({
                type: _.Tv.nS,
                idpId: c.Gb,
                response: d
            }))
        }, this.Ca, a)
    };
    _.h.ns = _.ia(26);
    _.h.gN = _.ia(35);
    _.Wv = function(a) {
        this.ql = null;
        _.Ov.call(this, {}, a);
        this.he = !0
    };
    Qu(_.Wv, _.Ov);
    _.h = _.Wv.prototype;
    _.h.setOptions = function(a) {
        if (!a.clientId) throw Error("la");
        this.Wb = a.clientId;
        this.Ca = a.id;
        Pv(this, a);
        Qv(this, a)
    };
    _.h.yw = function(a) {
        this.ql && (this.ql({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.error
            }
        }), this.ql = null)
    };
    _.h.Qr = function(a) {
        if (this.ql) {
            var b = this.ql;
            this.ql = null;
            b(a)
        }
    };
    _.h.Kq = _.ia(32);
    _.h.Dq = function(a) {
        this.km ? a(this.Ol()) : _.Mv(this, this.VA, [a])
    };
    _.h.VA = function(a) {
        Av(this.Zc, this.fe, a)
    };
    _.Xv = function(a, b, c) {
        a.km ? c(a.Ol()) : _.Mv(a, a.c_, [b, c])
    };
    _.Wv.prototype.c_ = function(a, b) {
        this.Zc.$h(this.Wb, this.mi, a, this.fe, function(c, d) {
            d ? b({
                error: d
            }) : b(c)
        }, this.Ca, this.JU, this.j2)
    };
    _.Wv.prototype.zL = _.ia(36);

    var Zv, $v, aw, bw, cw, dw, ew, fw, gw, hw, iw, jw, mw;
    _.Yv = function() {
        try {
            var a = Array.from((window.crypto || window.msCrypto).getRandomValues(new Uint8Array(64)))
        } catch (c) {
            a = [];
            for (var b = 0; 64 > b; b++) a[b] = Math.floor(256 * Math.random())
        }
        return _.ph(a, 3).substring(0, 64)
    };
    Zv = function(a, b, c) {
        if (!a.he) throw Error("ha");
        b ? _.Bv(a.Zc, a.fe, !0, void 0, c) : _.Bv(a.Zc, a.fe, !0, a.$d, c)
    };
    $v = function(a) {
        if (!a.he) throw Error("ha");
        return a.EC
    };
    _.Wv.prototype.zL = _.kd(36, function(a, b) {
        var c = this.Zc,
            d = this.Wb,
            e = this.fe,
            f = _.Su(this.mi);
        delete f.response_type;
        _.yv(c, "getOnlineCode", {
            clientId: d,
            loginHint: a,
            request: f,
            sessionSelector: e
        }, b)
    });
    _.Uv.prototype.gN = _.kd(35, function(a) {
        $v(this) && $v(this).access_token && (this.Zc.ns(this.Wb, $v(this).access_token, a), Zv(this, !0))
    });
    _.Uv.prototype.eJ = _.kd(34, function() {
        var a = this;
        this.Dq(function(b) {
            b && b.hint ? b.disabled ? a.dispatchEvent({
                type: _.Tv.Fp,
                idpId: a.Gb
            }) : a.$h(!0) : a.dispatchEvent({
                type: _.Tv.tG,
                idpId: a.Gb
            })
        })
    });
    _.Uv.prototype.Kq = _.kd(33, function() {
        var a = this;
        return function(b) {
            b && b.authResult && b.authResult.login_hint && a.Dx(b.authResult.login_hint, a.Wg || b.authResult.login_hint != a.$d, !0)
        }
    });
    _.Wv.prototype.Kq = _.kd(32, function(a) {
        var b = this;
        return function(c) {
            c && c.authResult && c.authResult.login_hint ? b.Dq(function(d) {
                _.Bv(b.Zc, b.fe, d && d.disabled, c.authResult.login_hint, function() {
                    _.Xv(b, c.authResult.login_hint, a)
                })
            }) : a(c && c.authResult && c.authResult.error ? c.authResult : c && c.authResult && !c.authResult.login_hint ? {
                error: "wrong_response_type"
            } : {
                error: "unknown_error"
            })
        }
    });
    _.Ov.prototype.YL = _.kd(31, function() {
        this.Wb && _.yv(this.Zc, "startPolling", {
            clientId: this.Wb,
            origin: this.Bd,
            id: this.nj
        }, void 0)
    });
    _.vv.prototype.ns = _.kd(27, function(a, b, c) {
        _.yv(this, "revoke", {
            clientId: a,
            token: b
        }, c)
    });
    _.Uv.prototype.ns = _.kd(26, function(a) {
        _.Mv(this, this.gN, [a])
    });
    aw = function() {
        var a = navigator.userAgent,
            b;
        if (b = !!a && -1 != a.indexOf("CriOS")) b = -1, (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1), b = 48 > b;
        return b
    };
    bw = function() {
        var a = navigator.userAgent.toLowerCase();
        if (!(-1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android"))) return !1;
        var b = /version\/(\d+)\.(\d+)[\.0-9]*/.exec(navigator.userAgent.toLowerCase());
        if (!b || 3 > b.length) return !1;
        a = parseInt(b[1], 10);
        b = parseInt(b[2], 10);
        return 12 < a || 12 == a && 1 <= b
    };
    cw = function(a, b, c, d, e, f, g) {
        var k = _.bv(a, "authServerUrl");
        if (!k) throw Error("R`" + a);
        a = _.Su(d);
        a.response_type = g || "permission";
        a.client_id = c;
        a.ss_domain = b;
        if (f && f.extraQueryParams)
            for (var l in f.extraQueryParams) a[l] = f.extraQueryParams[l];
        e && bw() && !a.prompt && (a.prompt = "select_account");
        b = k + (0 > k.indexOf("?") ? "?" : "&");
        c = [];
        for (var m in a)
            if (a.hasOwnProperty(m)) {
                e = a[m];
                if (null === e || void 0 === e) e = "";
                c.push(encodeURIComponent(m) + "=" + encodeURIComponent(e))
            }
        return b + c.join("&")
    };
    dw = function(a, b, c, d) {
        if (!a.Wb) throw Error("ia");
        a.nj = c || a.ZS || "auth" + Math.floor(1E6 * Math.random() + 1);
        b = b || {};
        b.extraQueryParams = b.extraQueryParams || {};
        if (!b.extraQueryParams.redirect_uri) {
            var e = a.Bd.split("//");
            c = b.extraQueryParams;
            var f = e[0],
                g = f.indexOf(":");
            0 < g && (f = f.substring(0, g));
            e = ["storagerelay://", f, "/", e[1], "?"];
            e.push("id=" + a.nj);
            c.redirect_uri = e.join("")
        }
        return cw(a.Gb, a.Vc, a.Wb, a.Mp, !0, b, d)
    };
    ew = function(a, b, c) {
        if (!a.Wb) throw Error("ia");
        return cw(a.Gb, a.Vc, a.Wb, a.Mp, !1, b, c)
    };
    fw = function(a, b) {
        a.zm && window.clearTimeout(a.zm);
        a.zm = window.setTimeout(function() {
            a.nj == b && (_.dv = void 0, a.zm = null, a.nj = void 0, a.Qr({
                authResult: {
                    error: "popup_closed_by_user"
                }
            }))
        }, 1E3)
    };
    gw = function(a, b, c) {
        if (!a.Wb) throw Error("ja");
        c = c || {};
        c = dw(a, c.sessionMeta, c.oneTimeId, c.responseType);
        (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject || aw()) && _.Mv(a, a.YL, []);
        var d = a.nj;
        a.CM.open(c, b, function() {
            a.nj == d && fw(a, d)
        }, function() {
            a.nj = void 0;
            a.Qr({
                authResult: {
                    error: "popup_blocked_by_browser"
                }
            })
        })
    };
    hw = function(a) {
        _.Mv(a, a.eJ, [])
    };
    iw = function(a, b, c) {
        a.km ? c(a.Ol()) : _.Mv(a, a.zL, [b, c])
    };
    jw = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.kw = function(a) {
        for (var b = [], c = 0, d = 0; c < a.length;) {
            var e = a[c++];
            if (128 > e) b[d++] = String.fromCharCode(e);
            else if (191 < e && 224 > e) {
                var f = a[c++];
                b[d++] = String.fromCharCode((e & 31) << 6 | f & 63)
            } else if (239 < e && 365 > e) {
                f = a[c++];
                var g = a[c++],
                    k = a[c++];
                e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | k & 63) - 65536;
                b[d++] = String.fromCharCode(55296 + (e >> 10));
                b[d++] = String.fromCharCode(56320 + (e & 1023))
            } else f = a[c++], g = a[c++], b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
        }
        return b.join("")
    };
    _.lw = function(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = _.mh[m];
                if (null != n) return n;
                if (!_.Re(m)) throw Error("x`" + m);
            }
            return l
        }
        _.oh();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                k = c(64);
            if (64 === k && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
        }
    };
    mw = function(a) {
        var b = [];
        _.lw(a, function(c) {
            b.push(c)
        });
        return b
    };
    _.nw = function(a, b) {
        _.Ih[b || "token"] = a
    };
    _.ow = function(a) {
        delete _.Ih[a || "token"]
    };
    _.Xu = {
        parse: function(a) {
            a = _.Hf("[" + String(a) + "]");
            if (!1 === a || 1 !== a.length) throw new SyntaxError("JSON parsing failed.");
            return a[0]
        },
        stringify: function(a) {
            return _.If(a)
        }
    };
    _.Wv.prototype.GA = function(a, b) {
        _.Mv(this, this.sU, [a, b])
    };
    _.Wv.prototype.sU = function(a, b) {
        this.Zc.GA(this.Wb, a, this.mi, this.fe, b)
    };
    _.vv.prototype.GA = function(a, b, c, d, e) {
        c = _.Su(c);
        _.yv(this, "gsi:fetchLoginHint", {
            clientId: a,
            loginHint: b,
            request: c,
            sessionSelector: d
        }, e)
    };
    var pw, qw = ["client_id", "cookie_policy", "scope"],
        rw = "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection gsiwebsdk".split(" "),
        sw = ["authuser", "after_redirect", "access_type", "hl"],
        tw = ["login_hint", "prompt"],
        uw = {
            clientid: "client_id",
            cookiepolicy: "cookie_policy"
        },
        vw = ["approval_prompt", "authuser", "login_hint",
            "prompt", "hd"
        ],
        ww = ["login_hint", "g-oauth-window", "status"],
        xw = Math.min(_.R("oauth-flow/authWindowWidth", 599), screen.width - 20),
        yw = Math.min(_.R("oauth-flow/authWindowHeight", 600), screen.height - 30);
    var zw = function(a) {
        _.qb.call(this, a)
    };
    _.Qq(zw, _.qb);
    zw.prototype.name = "gapi.auth2.ExternallyVisibleError";
    var Aw = function() {};
    Aw.prototype.select = function(a, b) {
        if (a.sessions && 1 == a.sessions.length && (a = a.sessions[0], a.login_hint)) {
            b(a);
            return
        }
        b()
    };
    var Bw = function() {};
    Bw.prototype.select = function(a, b) {
        if (a.sessions && a.sessions.length)
            for (var c = 0; c < a.sessions.length; c++) {
                var d = a.sessions[c];
                if (d.login_hint) {
                    b(d);
                    return
                }
            }
        b()
    };
    var Cw = function(a) {
        this.$S = a
    };
    Cw.prototype.select = function(a, b) {
        if (a.sessions)
            for (var c = 0; c < a.sessions.length; c++) {
                var d = a.sessions[c];
                if (d.session_state && d.session_state.extraQueryParams && d.session_state.extraQueryParams.authuser == this.$S) {
                    d.login_hint ? b(d) : b();
                    return
                }
            }
        b()
    };
    var Dw = function(a) {
        this.Od = a;
        this.jx = []
    };
    Dw.prototype.select = function(a) {
        var b = 0,
            c = this,
            d = function(e) {
                if (e) a(e);
                else {
                    var f = c.jx[b];
                    f ? (b++, c.Od.$v(function(g) {
                        g ? f.select(g, d) : d()
                    })) : a()
                }
            };
        d()
    };
    var Ew = function(a) {
            a = new Dw(a);
            a.jx.push(new Aw);
            return a
        },
        Fw = function(a) {
            a = new Dw(a);
            a.jx.push(new Bw);
            return a
        },
        Gw = function(a, b) {
            void 0 === b || null === b ? b = Ew(a) : (a = new Dw(a), a.jx.push(new Cw(b)), b = a);
            return b
        };
    var Hw = function(a) {
        this.We = a;
        this.Xd = !0
    };
    Hw.prototype.remove = function() {
        this.Xd = !1
    };
    Hw.prototype.trigger = function() {};
    var Iw = function(a) {
            this.remove = function() {
                a.remove()
            };
            this.trigger = function() {
                a.trigger()
            }
        },
        Jw = function() {
            this.Yb = []
        };
    Jw.prototype.add = function(a) {
        this.Yb.push(a)
    };
    Jw.prototype.notify = function(a) {
        for (var b = this.Yb, c = [], d = 0; d < b.length; d++) {
            var e = b[d];
            e.Xd && (c.push(e), _.fk(Kw(e.We, a)))
        }
        this.Yb = c
    };
    var Kw = function(a, b) {
        return function() {
            a(b)
        }
    };
    var Mw = function(a) {
        this.je = null;
        this.m3 = new Lw(this);
        this.Yb = new Jw;
        void 0 != a && this.set(a)
    };
    Mw.prototype.set = function(a) {
        a != this.je && (this.je = a, this.m3.value = a, this.Yb.notify(this.je))
    };
    Mw.prototype.get = function() {
        return this.je
    };
    Mw.prototype.V = function(a) {
        a = new Nw(this, a);
        this.Yb.add(a);
        return a
    };
    var Nw = function(a, b) {
        Hw.call(this, b);
        this.dZ = a
    };
    _.G(Nw, Hw);
    Nw.prototype.trigger = function() {
        var a = this.We;
        a(this.dZ.get())
    };
    var Lw = function(a) {
        this.value = null;
        this.V = function(b) {
            return new Iw(a.V(b))
        }
    };
    var Ow = {
            R5: "fetch_basic_profile",
            b7: "login_hint",
            V8: "prompt",
            g9: "redirect_uri",
            x9: "scope",
            gaa: "ux_mode",
            E$: "state"
        },
        Pw = function(a) {
            this.Ba = {};
            if (a && !_.Tq(a))
                if ("function" == typeof a.get) this.Ba = a.get();
                else
                    for (var b in Ow) {
                        var c = Ow[b];
                        c in a && (this.Ba[c] = a[c])
                    }
        };
    Pw.prototype.get = function() {
        return this.Ba
    };
    Pw.prototype.cO = function(a) {
        this.Ba.scope = a;
        return this
    };
    Pw.prototype.Vq = function() {
        return this.Ba.scope
    };
    var Qw = function(a, b) {
        var c = a.Ba.scope;
        b = jw(b.split(" "), c ? c.split(" ") : []);
        _.Qe(b);
        a.Ba.scope = b.join(" ")
    };
    _.h = Pw.prototype;
    _.h.M1 = function(a) {
        this.Ba.prompt = a;
        return this
    };
    _.h.YV = function() {
        return this.Ba.prompt
    };
    _.h.c1 = function() {
        _.Ye("Property app_package_name no longer supported and was not set");
        return this
    };
    _.h.PU = function() {
        _.Ye("Property app_package_name no longer supported")
    };
    _.h.lf = function(a) {
        this.Ba.state = a
    };
    _.h.getState = function() {
        return this.Ba.state
    };
    var Rw = function() {
            return ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + xw, "height=" + yw, "top=" + (screen.height - yw) / 2, "left=" + (screen.width - xw) / 2].join()
        },
        Sw = function(a) {
            a = a && a.id_token;
            if (!a || !a.split(".")[1]) return null;
            a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
            return JSON.parse(_.kw(mw(a)))
        },
        Tw = function() {
            pw = _.R("auth2/idpValue", "google");
            var a = _.R("oauth-flow/authUrl", "https://accounts.google.com/o/oauth2/auth"),
                b = _.R("oauth-flow/idpIframeUrl", "https://accounts.google.com/o/oauth2/iframe");
            _.cv(pw, {
                authServerUrl: a,
                idpIFrameUrl: b
            })
        },
        Uw = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                if (d === b.length - 1) {
                    a[e] = c;
                    break
                }
                _.kb(a[e]) || (a[e] = {});
                a = a[e]
            }
        },
        Vw = function() {
            var a = window.location.origin;
            a || (a = window.location.protocol + "//" + window.location.host);
            return a
        };
    var Ww = function(a) {
        var b = a ? (b = Sw(a)) ? b.sub : null : null;
        this.Ca = b;
        this.tc = a ? _.Vj(a) : null
    };
    _.h = Ww.prototype;
    _.h.getId = function() {
        return this.Ca
    };
    _.h.eB = function() {
        var a = Sw(this.tc);
        return a ? a.hd : null
    };
    _.h.Kf = function() {
        return !!this.tc
    };
    _.h.kk = function(a) {
        if (a) return this.tc;
        a = Xw;
        var b = _.Vj(this.tc);
        !a.Jv || a.jr || a.KX || (delete b.access_token, delete b.scope);
        return b
    };
    _.h.RD = function() {
        return Xw.RD()
    };
    _.h.Fj = function() {
        this.tc = null
    };
    _.h.tV = function() {
        return this.tc ? this.tc.scope : null
    };
    _.h.update = function(a) {
        this.Ca = a.Ca;
        this.tc = a.tc;
        this.tc.id_token ? this.Pt = new Yw(this.tc) : this.Pt && (this.Pt = null)
    };
    var Zw = function(a) {
        return a.tc && "object" == typeof a.tc.session_state ? _.Vj(a.tc.session_state.extraQueryParams || {}) : {}
    };
    _.h = Ww.prototype;
    _.h.zq = function() {
        var a = Zw(this);
        return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null
    };
    _.h.Ej = function(a) {
        var b = Xw,
            c = new Pw(a);
        c.Vq() ? b.jr = !0 : b.jr = !1;
        Xw.Jv && Qw(c, "openid profile email");
        return new _.rk(function(d, e) {
            var f = Zw(this);
            f.login_hint = this.getId();
            f.scope = c.Vq();
            $w(b, d, e, f)
        }, this)
    };
    _.h.Yq = function(a) {
        return new _.rk(function(b, c) {
            var d = a || {},
                e = Xw;
            d.login_hint = this.getId();
            e.Yq(d).then(b, c)
        }, this)
    };
    _.h.sW = function(a) {
        return this.Ej(a)
    };
    _.h.disconnect = function() {
        return Xw.disconnect()
    };
    _.h.SU = function() {
        return this.Pt
    };
    _.h.wv = function(a) {
        if (!this.Kf()) return !1;
        var b = this.tc && this.tc.scope ? this.tc.scope.split(" ") : "";
        return (0, _.Ab)(a ? a.split(" ") : [], function(c) {
            return _.Bb(b, c)
        })
    };
    var Yw = function(a) {
        a = Sw(a);
        this.MU = a.sub;
        this.Ad = a.name;
        this.pW = a.given_name;
        this.qU = a.family_name;
        this.QK = a.picture;
        this.yu = a.email
    };
    _.h = Yw.prototype;
    _.h.getId = function() {
        return this.MU
    };
    _.h.getName = function() {
        return this.Ad
    };
    _.h.rV = function() {
        return this.pW
    };
    _.h.mV = function() {
        return this.qU
    };
    _.h.BV = function() {
        return this.QK
    };
    _.h.Wu = function() {
        return this.yu
    };
    var bx = function(a, b, c) {
            this.um = b;
            this.zZ = a;
            for (var d in a) a.hasOwnProperty(d) && ax(this, d);
            if (c && c.length)
                for (a = 0; a < c.length; a++) this[c[a]] = this.um[c[a]]
        },
        ax = function(a, b) {
            a[b] = function() {
                return a.zZ[b].apply(a.um, arguments)
            }
        };
    bx.prototype.then = function(a, b, c) {
        var d = this;
        return _.vk().then(function() {
            return cx(d.um, a, b, c)
        })
    };
    _.pk(bx);
    var dx;
    dx = function(a) {
        var b = location;
        if (a && "none" != a) return "single_host_origin" == a ? b.protocol + "//" + b.host : a
    };
    _.ex = function(a) {
        if (!a) throw new zw("No cookiePolicy");
        var b = window.location.hostname;
        "single_host_origin" == a && (a = window.location.protocol + "//" + b);
        if ("none" == a) return null;
        var c = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
        if (!c) throw new zw("Invalid cookiePolicy");
        a = c[2];
        c = c[1];
        var d = {};
        d.dotValue = a.split(".").length;
        d.isSecure = -1 != c.indexOf("https");
        d.domain = a;
        if (!_.Sq(b, "." + a) && !_.Sq(b, a)) throw new zw("Invalid cookiePolicy domain");
        return d
    };
    var gx, fx, hx, ix, jx, kx, mx, rx, nx, tx, ux, ox;
    gx = function(a) {
        var b = a || {},
            c = fx();
        (0, _.vb)(rw, function(d) {
            "undefined" === typeof b[d] && "undefined" !== typeof c[d] && (b[d] = c[d])
        });
        return b
    };
    fx = function() {
        for (var a = {}, b = document.getElementsByTagName("meta"), c = 0; c < b.length; ++c)
            if (b[c].name) {
                var d = b[c].name;
                if (0 == d.indexOf("google-signin-")) {
                    d = d.substring(14);
                    var e = b[c].content;
                    uw[d] && (d = uw[d]);
                    _.Bb(rw, d) && e && (a[d] = "true" == e ? !0 : "false" == e ? !1 : e)
                }
            }
        return a
    };
    hx = function(a) {
        return String(a).replace(/_([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    ix = function(a) {
        (0, _.vb)(rw, function(b) {
            var c = hx(b);
            "undefined" !== typeof a[c] && "undefined" === typeof a[b] && (a[b] = a[c], delete a[c])
        })
    };
    jx = function(a) {
        a = gx(a);
        ix(a);
        a.cookie_policy || (a.cookie_policy = "single_host_origin");
        var b = rw + sw,
            c;
        for (c in a) 0 > b.indexOf(c) && delete a[c];
        return a
    };
    kx = function(a, b) {
        if (!a) throw new zw("Empty initial options.");
        for (var c = 0; c < qw.length; ++c)
            if (!(b && "scope" == qw[c] || a[qw[c]])) throw new zw("Missing required parameter '" + qw[c] + "'");
        _.ex(a.cookie_policy)
    };
    mx = function(a) {
        var b = {
            authParameters: {
                redirect_uri: void 0,
                response_type: "token id_token",
                scope: a.scope,
                "openid.realm": a.openid_realm
            },
            clientId: a.client_id,
            crossSubDomains: !0,
            domain: dx(a.cookie_policy),
            disableTokenRefresh: !!a.disable_token_refresh,
            idpId: pw
        };
        _.lx(b, a);
        (0, _.vb)(tw, function(c) {
            a[c] && (b.authParameters[c] = a[c])
        });
        "boolean" == typeof a.enable_serial_consent && (b.enableSerialConsent = a.enable_serial_consent);
        return b
    };
    _.lx = function() {};
    rx = function(a) {
        var b = a.client_id,
            c = a.cookie_policy,
            d = a.scope,
            e = a.openid_realm,
            f = a.hosted_domain,
            g = a.oidc_spec_compliant,
            k = a.nonce,
            l = nx(a),
            m = {
                authParameters: {
                    response_type: l,
                    scope: d,
                    "openid.realm": e
                },
                rpcAuthParameters: {
                    response_type: l,
                    scope: d,
                    "openid.realm": e
                },
                clientId: b,
                crossSubDomains: !0,
                domain: dx(c),
                idpId: pw
            };
        f && (m.authParameters.hd = f, m.rpcAuthParameters.hd = f);
        g && (m.rpcAuthParameters.spec_compliant = g, k = k || _.Yv());
        k && (m.authParameters.nonce = k, m.rpcAuthParameters.nonce = k, m.forceTokenRefresh = !0, m.skipTokenCache = !0);
        (0, _.vb)(tw.concat(sw), function(n) {
            a[n] && (m.authParameters[n] = a[n])
        });
        void 0 !== a.authuser && null !== a.authuser && (m.authParameters.authuser = a.authuser);
        "boolean" == typeof a.include_granted_scopes && (b = new ox(a.response_type || "token"), px(b) && (m.authParameters.include_granted_scopes = a.include_granted_scopes), qx(b) && (m.rpcAuthParameters.include_granted_scopes = a.include_granted_scopes, !1 === a.include_granted_scopes && (m.forceTokenRefresh = !0, m.skipTokenCache = !0)));
        "boolean" == typeof a.enable_serial_consent &&
            (m.enableSerialConsent = a.enable_serial_consent);
        return m
    };
    nx = function(a) {
        a = new ox(a.response_type || "token");
        var b = [];
        qx(a) && b.push("token");
        sx(a, "id_token") && b.push("id_token");
        0 == b.length && (b = ["token", "id_token"]);
        return b.join(" ")
    };
    tx = ["permission", "id_token"];
    ux = /(^|[^_])token/;
    ox = function(a) {
        this.Ho = [];
        this.nC(a)
    };
    ox.prototype.nC = function(a) {
        a ? ((0 <= a.indexOf("permission") || a.match(ux)) && this.Ho.push("permission"), 0 <= a.indexOf("id_token") && this.Ho.push("id_token"), 0 <= a.indexOf("code") && this.Ho.push("code")) : this.Ho = tx
    };
    var px = function(a) {
            return sx(a, "code")
        },
        qx = function(a) {
            return sx(a, "permission")
        };
    ox.prototype.toString = function() {
        return this.Ho.join(" ")
    };
    var sx = function(a, b) {
        var c = !1;
        (0, _.vb)(a.Ho, function(d) {
            d == b && (c = !0)
        });
        return c
    };
    var Xw, vx, xx, zx, Ax, cx;
    Xw = null;
    _.wx = function() {
        return Xw ? vx() : null
    };
    vx = function() {
        return new bx(xx.prototype, Xw, ["currentUser", "isSignedIn"])
    };
    xx = function(a) {
        delete a.include_granted_scopes;
        this.Ba = mx(a);
        this.FT = a.cookie_policy;
        this.KX = !!a.scope;
        (this.Jv = !1 !== a.fetch_basic_profile) && (this.Ba.authParameters.scope = yx(this, "openid profile email"));
        this.nr = a.hosted_domain;
        this.i3 = a.ux_mode || "popup";
        this.I_ = a.redirect_uri || null;
        zx(this)
    };
    zx = function(a) {
        a.currentUser = new Mw(new Ww(null));
        a.isSignedIn = new Mw(!1);
        a.Od = new _.Uv(a.Ba);
        a.ho = null;
        a.Qv = null;
        a.RY = new _.rk(function(b, c) {
            this.ho = b;
            this.Qv = c
        }, a);
        a.Bw = {};
        a.Br = !0;
        Ax(a);
        a.Od.start()
    };
    Ax = function(a) {
        a.Od.addEventListener("error", function(b) {
            a.Br && a.ho && (a.Br = !1, a.Qv({
                error: b.error,
                details: b.details
            }), a.ho = null, a.Qv = null)
        });
        a.Od.addEventListener("authResult", function(b) {
            b && b.authResult && a.Se(b);
            a.Od.Kq()(b)
        });
        a.Od.addEventListener("tokenReady", function(b) {
            var c = new Ww(b.response);
            if (a.nr && a.nr != c.eB()) a.Se({
                type: "tokenFailed",
                reason: "Account domain does not match hosted_domain specified by gapi.auth2.init.",
                accountDomain: c.eB(),
                expectedDomain: a.nr
            });
            else {
                a.currentUser.get().update(c);
                var d = a.currentUser;
                d.Yb.notify(d.je);
                a.isSignedIn.set(!0);
                c = c.zq();
                (d = _.ex(a.FT)) && c && _.ki.set(["G_AUTHUSER_", "https:" === window.location.protocol && d.De ? "S" : "H", d.Jh].join(""), c, {
                    domain: d.domain,
                    secure: d.isSecure
                });
                _.nw(b.response);
                a.Se(b)
            }
        });
        a.Od.addEventListener("noSessionBound", function(b) {
            a.Br && b.autoOpenAuthUrl ? (a.Br = !1, Ew(a.Od).select(function(c) {
                if (c && c.login_hint) {
                    var d = a.Od;
                    _.Mv(d, d.Dx, [c.login_hint, !0])
                } else a.currentUser.set(new Ww(null)), a.isSignedIn.set(!1), _.ow(), a.Se(b)
            })) : (a.currentUser.set(new Ww(null)),
                a.isSignedIn.set(!1), _.ow(), a.Se(b))
        });
        a.Od.addEventListener("tokenFailed", function(b) {
            a.Se(b)
        });
        a.Od.addEventListener("userLoggedOut", function(b) {
            a.currentUser.get().Fj();
            var c = a.currentUser;
            c.Yb.notify(c.je);
            a.isSignedIn.set(!1);
            _.ow();
            a.Se(b)
        })
    };
    cx = function(a, b, c, d) {
        return a.RY.then(function(e) {
            if (b) return b(e.qW)
        }, c, d)
    };
    xx.prototype.Se = function(a) {
        if (a) {
            this.Br = !1;
            var b = a.type || "";
            if (this.Bw[b]) this.Bw[b](a);
            this.ho && (this.ho({
                qW: this
            }), this.Qv = this.ho = null)
        }
    };
    var Bx = function(a, b) {
            _.Jb(b, function(c, d) {
                a.Bw[d] = function(e) {
                    a.Bw = {};
                    c(e)
                }
            })
        },
        $w = function(a, b, c, d) {
            d = _.Vj(d);
            a.nr && (d.hd = a.nr);
            var e = d.ux_mode || a.i3;
            delete d.ux_mode;
            delete d.app_package_name;
            var f = {
                sessionMeta: {
                    extraQueryParams: d
                },
                responseType: "permission id_token"
            };
            "redirect" == e ? (d.redirect_uri || (d.redirect_uri = a.I_ || Vw() + window.location.pathname), Cx(a, f)) : (delete d.redirect_uri, Dx(a, f), Bx(a, {
                authResult: function(g) {
                    g.authResult && g.authResult.error ? c(g.authResult) : Bx(a, {
                        tokenReady: function() {
                            b(a.currentUser.get())
                        },
                        tokenFailed: c
                    })
                }
            }))
        };
    xx.prototype.Ej = function(a) {
        return new _.rk(function(b, c) {
            var d = new Pw(a);
            d.Vq() ? this.jr = !0 : this.jr = !1;
            this.Jv ? (d.Ba.fetch_basic_profile = !0, Qw(d, "email profile openid")) : d.Ba.fetch_basic_profile = !1;
            var e = yx(this, d.Vq());
            d.cO(e);
            $w(this, b, c, d.get())
        }, this)
    };
    xx.prototype.Yq = function(a) {
        var b = a || {};
        this.jr = !!b.scope;
        a = yx(this, b.scope);
        if ("" == a) return _.wk({
            error: "Missing required parameter: scope"
        });
        var c = {
            scope: a,
            access_type: "offline",
            include_granted_scopes: !0
        };
        (0, _.vb)(vw, function(d) {
            null != b[d] && (c[d] = b[d])
        });
        c.hasOwnProperty("prompt") || c.hasOwnProperty("approval_prompt") || (c.prompt = "consent");
        return "postmessage" == b.redirect_uri || void 0 == b.redirect_uri ? Ex(this, c) : Fx(this, c, b.redirect_uri)
    };
    var Fx = function(a, b, c) {
            b.redirect_uri = c;
            Cx(a, {
                sessionMeta: {
                    extraQueryParams: b
                },
                responseType: "code id_token"
            });
            return _.vk({
                message: "Redirecting to IDP."
            })
        },
        Ex = function(a, b) {
            b.origin = Vw();
            delete b.redirect_uri;
            Dx(a, {
                sessionMeta: {
                    extraQueryParams: b
                },
                responseType: "code permission id_token"
            });
            return new _.rk(function(c, d) {
                Bx(this, {
                    authResult: function(e) {
                        (e = e && e.authResult) && e.code ? c({
                            code: e.code
                        }) : d(e && e.error ? e : {
                            error: "unknown_error"
                        })
                    }
                })
            }, a)
        },
        Dx = function(a, b) {
            Uw(b, ["sessionMeta", "extraQueryParams",
                "gsiwebsdk"
            ], "2");
            gw(a.Od, Rw(), b)
        },
        Cx = function(a, b) {
            Uw(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
            b = b || {};
            window.location.assign(ew(a.Od, b.sessionMeta, b.responseType))
        };
    xx.prototype.Fj = function(a) {
        var b = a || !1;
        return new _.rk(function(c) {
            Zv(this.Od, b, function() {
                c()
            })
        }, this)
    };
    xx.prototype.AJ = function() {
        return this.Ba.authParameters.scope
    };
    var yx = function(a, b) {
        a = a.AJ();
        b = jw(b ? b.split(" ") : [], a ? a.split(" ") : []);
        _.Qe(b);
        return b.join(" ")
    };
    xx.prototype.RD = function() {
        var a = this;
        return new _.rk(function(b, c) {
            Bx(a, {
                noSessionBound: c,
                tokenFailed: c,
                userLoggedOut: c,
                tokenReady: function(d) {
                    b(d.response)
                }
            });
            hw(a.Od)
        })
    };
    xx.prototype.WS = function(a, b, c, d) {
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            var e = this;
            _.Fq(a, "click", function() {
                var f = b;
                "function" == typeof b && (f = b());
                e.Ej(f).then(function(g) {
                    c && c(g)
                }, function(g) {
                    d && d(g)
                })
            })
        } else d && d({
            error: "Could not attach click handler to the element. Reason: element not found."
        })
    };
    xx.prototype.disconnect = function() {
        return new _.rk(function(a) {
            this.Od.ns(function() {
                a()
            })
        }, this)
    };
    var Gx;
    _.rk.prototype["catch"] = _.rk.prototype.Ix;
    Gx = null;
    _.Hx = function(a) {
        a = jx(a);
        if (Xw) {
            if (_.Uj(a, Gx || {})) return vx();
            throw new zw("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");
        }
        kx(a, !1 !== a.fetch_basic_profile);
        Tw();
        Gx = a;
        Xw = new xx(a);
        _.Fe.ga = 1;
        return vx()
    };
    var Jx, Lx, Ix, Nx, Mx, Ox;
    _.Kx = function(a, b) {
        Tw();
        a = jx(a);
        kx(a);
        var c = rx(a),
            d = new _.Wv(c);
        "none" == a.prompt ? Ix(d, a, function(e) {
            e.status = e.error ? {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            } : {
                signed_in: !0,
                method: "AUTO",
                google_logged_in: !0
            };
            b(e)
        }) : Jx(d, a, function(e) {
            if (e.error) e.status = {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            };
            else {
                var f = e.access_token || e.id_token;
                e.status = {
                    signed_in: !!f,
                    method: "PROMPT",
                    google_logged_in: !!f
                }
            }
            e["g-oauth-window"] = d.CM.rh;
            b(e)
        })
    };
    Jx = function(a, b, c) {
        var d = new ox(b.response_type);
        c = Lx(a, d, c);
        var e = {
            responseType: d.toString()
        };
        Uw(e, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], b.gsiwebsdk || "2");
        px(d) && Uw(e, ["sessionMeta", "extraQueryParams", "access_type"], b.access_type || "offline");
        b.redirect_uri && Uw(e, ["sessionMeta", "extraQueryParams", "redirect_uri"], b.redirect_uri);
        b.state && Uw(e, ["sessionMeta", "extraQueryParams", "state"], b.state);
        b = Rw();
        a.km ? c({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.Ol().error
            }
        }) : (a.ql =
            c, gw(a, b, e))
    };
    Lx = function(a, b, c) {
        if (qx(b)) {
            var d = Mx(c);
            return function(e) {
                e && e.authResult && !e.authResult.error ? a.Kq(function(f) {
                    f && !f.error ? (f = _.Vj(f), px(b) && (f.code = e.authResult.code), d(f)) : d(f ? f : {
                        error: "unknown_error"
                    })
                })(e) : d(e && e.authResult ? e.authResult : {
                    error: "unknown_error"
                })
            }
        }
        return function(e) {
            e && e.authResult && !e.authResult.error ? c(_.Vj(e.authResult)) : c(e && e.authResult ? e.authResult : {
                error: "unknown_error"
            })
        }
    };
    Ix = function(a, b, c) {
        if (px(new ox(b.response_type)) && "offline" == b.access_type) c({
            error: "immediate_failed",
            error_subtype: "access_denied"
        });
        else {
            var d = Mx(c);
            b.login_hint ? a.GA(b.login_hint, function(e) {
                e ? Nx(a, b, e, d) : c({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : void 0 !== b.authuser && null !== b.authuser ? Gw(a, b.authuser).select(function(e) {
                e && e.login_hint ? Nx(a, b, e.login_hint, d) : d({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : a.Dq(function(e) {
                e && e.hint ? Nx(a, b, e.hint, d) : e && e.disabled ?
                    d({
                        error: "immediate_failed",
                        error_subtype: "no_user_bound"
                    }) : ("first_valid" == b.session_selection ? Fw(a) : Ew(a)).select(function(f) {
                        f && f.login_hint ? Nx(a, b, f.login_hint, d) : d({
                            error: "immediate_failed",
                            error_subtype: "no_user_bound"
                        })
                    })
            })
        }
    };
    Nx = function(a, b, c, d) {
        b = new ox(b.response_type);
        var e = 0,
            f = {},
            g = function(k) {
                !k || k.error ? d(k) : (e--, _.Lb(f, k), 0 == e && d(f))
            };
        (qx(b) || sx(b, "id_token")) && e++;
        px(b) && e++;
        (qx(b) || sx(b, "id_token")) && _.Xv(a, c, g);
        px(b) && iw(a, c, g)
    };
    Mx = function(a) {
        return function(b) {
            if (!b || b.error) _.ow(), b ? a(b) : a({
                error: "unknown_error"
            });
            else {
                if (b.access_token) {
                    var c = _.Vj(b);
                    Ox(c);
                    delete c.id_token;
                    delete c.code;
                    _.nw(c)
                }
                a(b)
            }
        }
    };
    Ox = function(a) {
        (0, _.vb)(ww, function(b) {
            delete a[b]
        })
    };
    _.z("gapi.auth2.init", _.Hx);
    _.z("gapi.auth2.authorize", function(a, b) {
        if (null != Xw) throw new zw("gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters).");
        _.Kx(a, function(c) {
            Ox(c);
            b(c)
        })
    });
    _.z("gapi.auth2._gt", function() {
        return _.Jh()
    });
    _.z("gapi.auth2.enableDebugLogs", function(a) {
        a = !1 !== a;
        _.Nu = "0" != a && !!a
    });
    _.z("gapi.auth2.getAuthInstance", _.wx);
    _.z("gapi.auth2.BasicProfile", Yw);
    _.z("gapi.auth2.BasicProfile.prototype.getId", Yw.prototype.getId);
    _.z("gapi.auth2.BasicProfile.prototype.getName", Yw.prototype.getName);
    _.z("gapi.auth2.BasicProfile.prototype.getGivenName", Yw.prototype.rV);
    _.z("gapi.auth2.BasicProfile.prototype.getFamilyName", Yw.prototype.mV);
    _.z("gapi.auth2.BasicProfile.prototype.getImageUrl", Yw.prototype.BV);
    _.z("gapi.auth2.BasicProfile.prototype.getEmail", Yw.prototype.Wu);
    _.z("gapi.auth2.GoogleAuth", xx);
    _.z("gapi.auth2.GoogleAuth.prototype.attachClickHandler", xx.prototype.WS);
    _.z("gapi.auth2.GoogleAuth.prototype.disconnect", xx.prototype.disconnect);
    _.z("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", xx.prototype.Yq);
    _.z("gapi.auth2.GoogleAuth.prototype.signIn", xx.prototype.Ej);
    _.z("gapi.auth2.GoogleAuth.prototype.signOut", xx.prototype.Fj);
    _.z("gapi.auth2.GoogleAuth.prototype.getInitialScopes", xx.prototype.AJ);
    _.z("gapi.auth2.GoogleUser", Ww);
    _.z("gapi.auth2.GoogleUser.prototype.grant", Ww.prototype.sW);
    _.z("gapi.auth2.GoogleUser.prototype.getId", Ww.prototype.getId);
    _.z("gapi.auth2.GoogleUser.prototype.isSignedIn", Ww.prototype.Kf);
    _.z("gapi.auth2.GoogleUser.prototype.getAuthResponse", Ww.prototype.kk);
    _.z("gapi.auth2.GoogleUser.prototype.getBasicProfile", Ww.prototype.SU);
    _.z("gapi.auth2.GoogleUser.prototype.getGrantedScopes", Ww.prototype.tV);
    _.z("gapi.auth2.GoogleUser.prototype.getHostedDomain", Ww.prototype.eB);
    _.z("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", Ww.prototype.Yq);
    _.z("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", Ww.prototype.wv);
    _.z("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", Ww.prototype.RD);
    _.z("gapi.auth2.LiveValue", Mw);
    _.z("gapi.auth2.LiveValue.prototype.listen", Mw.prototype.V);
    _.z("gapi.auth2.LiveValue.prototype.get", Mw.prototype.get);
    _.z("gapi.auth2.SigninOptionsBuilder", Pw);
    _.z("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", Pw.prototype.PU);
    _.z("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", Pw.prototype.c1);
    _.z("gapi.auth2.SigninOptionsBuilder.prototype.getScope", Pw.prototype.Vq);
    _.z("gapi.auth2.SigninOptionsBuilder.prototype.setScope", Pw.prototype.cO);
    _.z("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", Pw.prototype.YV);
    _.z("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", Pw.prototype.M1);
    _.z("gapi.auth2.SigninOptionsBuilder.prototype.get", Pw.prototype.get);

    _.lx = function(a, b) {
        var c = b.oidc_spec_compliant;
        b = b.nonce;
        c && (a.spec_compliant = c, b = b || _.Yv());
        b && (a.authParameters.nonce = b, a.forceTokenRefresh = !0, a.skipTokenCache = !0)
    };

    _.vi = function(a) {
        this.S = a
    };
    _.h = _.vi.prototype;
    _.h.value = function() {
        return this.S
    };
    _.h.Cj = function(a) {
        this.S.width = a;
        return this
    };
    _.h.Oc = function() {
        return this.S.width
    };
    _.h.ni = function(a) {
        this.S.height = a;
        return this
    };
    _.h.getHeight = function() {
        return this.S.height
    };
    _.h.jd = function(a) {
        this.S.style = a;
        return this
    };
    _.h.Wl = _.ia(6);
    var wi = function(a) {
        this.S = a
    };
    wi.prototype.Ro = function(a) {
        this.S.anchor = a;
        return this
    };
    wi.prototype.Ef = function() {
        return this.S.anchor
    };
    wi.prototype.uE = function(a) {
        this.S.anchorPosition = a;
        return this
    };
    _.xi = function(a) {
        a.S.show = !0;
        return a
    };
    wi.prototype.ni = function(a) {
        this.S.height = a;
        return this
    };
    wi.prototype.getHeight = function() {
        return this.S.height
    };
    wi.prototype.Cj = function(a) {
        this.S.width = a;
        return this
    };
    wi.prototype.Oc = function() {
        return this.S.width
    };
    _.yi = function(a) {
        this.S = a || {}
    };
    _.yi.prototype.value = function() {
        return this.S
    };
    _.yi.prototype.setUrl = function(a) {
        this.S.url = a;
        return this
    };
    _.yi.prototype.getUrl = function() {
        return this.S.url
    };
    _.zi = function(a, b) {
        a.S.where = b;
        return a
    };
    _.h = _.yi.prototype;
    _.h.jd = function(a) {
        this.S.style = a;
        return this
    };
    _.h.Wl = _.ia(5);
    _.h.Je = function(a) {
        this.S.id = a;
        return this
    };
    _.h.getId = function() {
        return this.S.id
    };
    _.h.Rk = _.ia(7);
    _.Ai = function(a, b) {
        a.S.queryParams = b;
        return a
    };
    _.Bi = function(a, b) {
        a.S.relayOpen = b;
        return a
    };
    _.Ci = function(a, b) {
        a.S.messageHandlers = b;
        return a
    };
    _.Di = function(a, b) {
        a.S.messageHandlersFilter = b;
        return a
    };
    _.yi.prototype.So = _.ia(8);
    _.yi.prototype.getContext = function() {
        return this.S.context
    };
    _.yi.prototype.Nc = function() {
        return this.S.openerIframe
    };
    _.Ei = function(a) {
        return new wi(a.S)
    };
    _.yi.prototype.Nl = function() {
        this.S.attributes = this.S.attributes || {};
        return new _.vi(this.S.attributes)
    };
    _.Fi = function(a) {
        a.S.connectWithQueryParams = !0;
        return a
    };

    var Hi, Gi, Ni, Oi, Ii, Li, Ji, Pi, Ki;
    _.Mi = function() {
        if (Gi) {
            var a = new _.pe.Uint32Array(1);
            Hi.getRandomValues(a);
            a = Number("0." + a[0])
        } else a = Ii, a += parseInt(Ji.substr(0, 20), 16), Ji = Ki(Ji), a /= Li + Math.pow(16, 20);
        return a
    };
    Hi = _.pe.crypto;
    Gi = !1;
    Ni = 0;
    Oi = 0;
    Ii = 1;
    Li = 0;
    Ji = "";
    Pi = function(a) {
        a = a || _.pe.event;
        var b = a.screenX + a.clientX << 16;
        b += a.screenY + a.clientY;
        b *= (new Date).getTime() % 1E6;
        Ii = Ii * b % Li;
        0 < Ni && ++Oi == Ni && _.De(_.pe, "mousemove", Pi, "remove", "de")
    };
    Ki = function(a) {
        var b = new _.Nh;
        b.AF(a);
        return b.Vg()
    };
    Gi = !!Hi && "function" == typeof Hi.getRandomValues;
    Gi || (Li = 1E6 * (screen.width * screen.width + screen.height), Ji = Ki(_.qe.cookie + "|" + _.qe.location + "|" + (new Date).getTime() + "|" + Math.random()), Ni = _.R("random/maxObserveMousemove") || 0, 0 != Ni && _.Ee(_.pe, "mousemove", Pi));

    var Ti, Ui, Vi, Wi, Xi, Yi, Zi, $i, bj, cj, dj, ij, mj, oj, pj, qj;
    _.Qi = function(a) {
        return !!a && "object" === typeof a && _.te.test(a.push)
    };
    _.Ri = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a) return b;
        return -1
    };
    _.Si = function(a, b) {
        if (!a) throw Error(b || "");
    };
    Ti = /&/g;
    Ui = /</g;
    Vi = />/g;
    Wi = /"/g;
    Xi = /'/g;
    Yi = function(a) {
        return String(a).replace(Ti, "&amp;").replace(Ui, "&lt;").replace(Vi, "&gt;").replace(Wi, "&quot;").replace(Xi, "&#39;")
    };
    Zi = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
    $i = /%([a-f]|[0-9a-fA-F][a-f])/g;
    bj = /^(https?|ftp|file|chrome-extension):$/i;
    cj = function(a) {
        a = String(a);
        a = a.replace(Zi, function(e) {
            try {
                return encodeURIComponent(e)
            } catch (f) {
                return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
            }
        }).replace(_.Be, function(e) {
            return e.replace(/%/g, "%25")
        }).replace($i, function(e) {
            return e.toUpperCase()
        });
        a = a.match(_.Ae) || [];
        var b = _.ve(),
            c = function(e) {
                return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
            },
            d = !!(a[1] || "").match(bj);
        b.Op = c((a[1] || "") + (a[2] || "") + (a[3] ||
            (a[2] && d ? "/" : "")));
        d = function(e) {
            return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
        };
        b.query = a[5] ? [d(a[5])] : [];
        b.Nh = a[7] ? [d(a[7])] : [];
        return b
    };
    dj = function(a) {
        return a.Op + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Nh.length ? "#" + a.Nh.join("&") : "")
    };
    ij = function(a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (_.we(a, d) && null != a[d]) {
                    var e = b ? b(a[d]) : a[d];
                    c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                }
        return c
    };
    _.jj = function(a, b, c, d) {
        a = cj(a);
        a.query.push.apply(a.query, ij(b, d));
        a.Nh.push.apply(a.Nh, ij(c, d));
        return dj(a)
    };
    _.kj = function(a, b) {
        var c = cj(b);
        b = c.Op;
        c.query.length && (b += "?" + c.query.join(""));
        c.Nh.length && (b += "#" + c.Nh.join(""));
        var d = "";
        2E3 < b.length && (c = b, b = b.substr(0, 2E3), b = b.replace(_.Ce, ""), d = c.substr(b.length));
        var e = a.createElement("div");
        a = a.createElement("a");
        c = cj(b);
        b = c.Op;
        c.query.length && (b += "?" + c.query.join(""));
        c.Nh.length && (b += "#" + c.Nh.join(""));
        _.Jd(a, new _.ac(_.Zb, b));
        e.appendChild(a);
        b = _.yc(e.innerHTML, null);
        _.Id(e, b);
        b = String(e.firstChild.href);
        e.parentNode && e.parentNode.removeChild(e);
        c = cj(b +
            d);
        b = c.Op;
        c.query.length && (b += "?" + c.query.join(""));
        c.Nh.length && (b += "#" + c.Nh.join(""));
        return b
    };
    _.lj = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    mj = function(a) {
        for (; a.firstChild;) a.removeChild(a.firstChild)
    };
    _.nj = function(a, b) {
        var c = _.ue(_.Fe, "watt", _.ve());
        _.ue(c, a, b)
    };
    oj = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
    pj = function(a) {
        var b = _.R("googleapis.config/sessionDelegate");
        "string" === typeof b && 21 < b.length && (b = null);
        null == b && (b = (a = (a || window.location.href).match(oj)) ? a[1] : null);
        if (null == b) return null;
        b = String(b);
        21 < b.length && (b = null);
        return b
    };
    var rj = function() {
            var a = _.Fe.onl;
            if (!a) {
                a = _.ve();
                _.Fe.onl = a;
                var b = _.ve();
                a.e = function(c) {
                    var d = b[c];
                    d && (delete b[c], d())
                };
                a.a = function(c, d) {
                    b[c] = d
                };
                a.r = function(c) {
                    delete b[c]
                }
            }
            return a
        },
        sj = function(a, b) {
            b = b.onload;
            return "function" === typeof b ? (rj().a(a, b), b) : null
        },
        tj = function(a) {
            _.Si(/^\w+$/.test(a), "Unsupported id - " + a);
            rj();
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        },
        uj = function(a) {
            rj().r(a)
        };
    var wj, xj, Bj;
    _.vj = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    };
    wj = {
        allowtransparency: !0,
        onload: !0
    };
    xj = 0;
    _.yj = function(a, b) {
        var c = 0;
        do var d = b.id || ["I", xj++, "_", (new Date).getTime()].join(""); while (a.getElementById(d) && 5 > ++c);
        _.Si(5 > c, "Error creating iframe id");
        return d
    };
    _.zj = function(a, b) {
        return a ? b + "/" + a : ""
    };
    _.Aj = function(a, b, c, d) {
        var e = {},
            f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        _.xe(d.queryParams || {}, e);
        _.xe(d.fragmentParams || {}, f);
        var g = d.pfname;
        var k = _.ve();
        _.R("iframes/dropLegacyIdParam") || (k.id = c);
        k._gfid = c;
        k.parent = a.location.protocol + "//" + a.location.host;
        c = _.ze(a.location.href, "parent");
        g = g || "";
        !g && c && (g = _.ze(a.location.href, "_gfid", "") || _.ze(a.location.href, "id", ""), g = _.zj(g, _.ze(a.location.href, "pfname", "")));
        g || (c = _.Hf(_.ze(a.location.href, "jcp", ""))) && "object" ==
            typeof c && (g = _.zj(c.id, c.pfname));
        k.pfname = g;
        d.connectWithJsonParam && (g = {}, g.jcp = _.If(k), k = g);
        g = _.ze(b, "rpctoken") || e.rpctoken || f.rpctoken;
        g || (g = d.rpctoken || String(Math.round(1E8 * _.Mi())), k.rpctoken = g);
        d.rpctoken = g;
        _.xe(k, d.connectWithQueryParams ? e : f);
        k = a.location.href;
        a = _.ve();
        (g = _.ze(k, "_bsh", _.Fe.bsh)) && (a._bsh = g);
        (k = _.Fe.dpo ? _.Fe.h : _.ze(k, "jsh", _.Fe.h)) && (a.jsh = k);
        d.hintInFragment ? _.xe(a, f) : _.xe(a, e);
        return _.jj(b, e, f, d.paramsSerializer)
    };
    Bj = function(a) {
        _.Si(!a || _.lj.test(a), "Illegal url for new iframe - " + a)
    };
    _.Cj = function(a, b, c, d, e) {
        Bj(c.src);
        var f, g = sj(d, c),
            k = g ? tj(d) : "";
        try {
            document.all && (f = a.createElement('<iframe frameborder="' + Yi(String(c.frameborder)) + '" scrolling="' + Yi(String(c.scrolling)) + '" ' + k + ' name="' + Yi(String(c.name)) + '"/>'))
        } catch (m) {} finally {
            f || (f = a.createElement("iframe"), g && (f.onload = function() {
                f.onload = null;
                g.call(this)
            }, uj(d)))
        }
        f.setAttribute("ng-non-bindable", "");
        for (var l in c) a = c[l], "style" === l && "object" === typeof a ? _.xe(a, f.style) : wj[l] || f.setAttribute(l, String(a));
        (l = e && e.beforeNode ||
            null) || e && e.dontclear || mj(b);
        b.insertBefore(f, l);
        f = l ? l.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    };
    var Dj, Gj;
    Dj = /^:[\w]+$/;
    _.Ej = /:([a-zA-Z_]+):/g;
    _.Fj = function() {
        var a = _.Hh() || "0",
            b = pj();
        var c = _.Hh(void 0) || a;
        var d = pj(void 0),
            e = "";
        c && (e += "u/" + encodeURIComponent(String(c)) + "/");
        d && (e += "b/" + encodeURIComponent(String(d)) + "/");
        c = e || null;
        (e = (d = !1 === _.R("isLoggedIn")) ? "_/im/" : "") && (c = "");
        var f = _.R("iframes/:socialhost:"),
            g = _.R("iframes/:im_socialhost:");
        return qj = {
            socialhost: f,
            ctx_socialhost: d ? g : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    };
    Gj = function(a, b) {
        return _.Fj()[b] || ""
    };
    _.Hj = function(a) {
        return _.kj(_.qe, a.replace(_.Ej, Gj))
    };
    _.Ij = function(a) {
        var b = a;
        Dj.test(a) && (b = _.R("iframes/" + b.substring(1) + "/url"), _.Si(!!b, "Unknown iframe url config for - " + a));
        return _.Hj(b)
    };
    _.Jj = function(a, b, c) {
        var d = c || {};
        c = d.attributes || {};
        _.Si(!(d.allowPost || d.forcePost) || !c.onload, "onload is not supported by post iframe (allowPost or forcePost)");
        a = _.Ij(a);
        c = b.ownerDocument || _.qe;
        var e = _.yj(c, d);
        a = _.Aj(c, a, e, d);
        var f = _.ve();
        _.xe(_.vj, f);
        _.xe(d.attributes, f);
        f.name = f.id = e;
        f.src = a;
        d.eurl = a;
        var g = d || {},
            k = !!g.allowPost;
        if (g.forcePost || k && 2E3 < a.length) {
            g = cj(a);
            f.src = "";
            d.dropDataPostorigin || (f["data-postorigin"] = a);
            a = _.Cj(c, b, f, e);
            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                var l = a.contentWindow.document;
                l.open();
                f = l.createElement("div");
                k = {};
                var m = e + "_inner";
                k.name = m;
                k.src = "";
                k.style = "display:none";
                _.Cj(c, f, k, m, d)
            }
            f = (d = g.query[0]) ? d.split("&") : [];
            d = [];
            for (k = 0; k < f.length; k++) m = f[k].split("=", 2), d.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
            g.query = [];
            f = dj(g);
            _.Si(_.lj.test(f), "Invalid URL: " + f);
            g = c.createElement("form");
            g.method = "POST";
            g.target = e;
            g.style.display = "none";
            e = f instanceof _.ac ? f : _.Gd(f);
            g.action = _.bc(e);
            for (e = 0; e < d.length; e++) f = c.createElement("input"), f.type = "hidden", f.name =
                d[e][0], f.value = d[e][1], g.appendChild(f);
            b.appendChild(g);
            g.submit();
            g.parentNode.removeChild(g);
            l && l.close();
            b = a
        } else b = _.Cj(c, b, f, e, d);
        return b
    };

    _.Nk = function(a) {
        return new _.rk(a)
    };

    var Vk = function() {
        this.ct = {
            VM: Ok ? "../" + Ok : null,
            Zz: Pk,
            WJ: Qk,
            oca: Rk,
            kv: Sk,
            Wca: Tk
        };
        this.rf = _.pe;
        this.EM = this.NT;
        this.EU = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
        if (this.ct.VM) {
            this.rf = this.ct.WJ(this.rf, this.ct.VM);
            var a = this.rf.document,
                b = a.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
            a.body.appendChild(b);
            this.EM = this.rf.doPostMsg
        }
        this.YE = {};
        this.xF = {};
        a = (0, _.L)(this.OB,
            this);
        _.Ee(this.rf, "message", a);
        _.ue(_.Fe, "RPMQ", []).push(a);
        this.rf != this.rf.parent && Uk(this, this.rf.parent, this.PC(this.rf.name), "*")
    };
    Vk.prototype.PC = function(a) {
        return '{"h":"' + escape(a) + '"}'
    };
    var Wk = function(a) {
            var b = null;
            0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
            return b
        },
        Xk = function(a) {
            if (!/^\s*{/.test(a)) return !1;
            a = _.Hf(a);
            return null !== a && "object" === typeof a && !!a.g
        };
    Vk.prototype.OB = function(a) {
        var b = String(a.data);
        (0, _.Ze)("gapi.rpc.receive(" + Rk + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
        var c = 0 !== b.indexOf("!_");
        c || (b = b.substring(2));
        var d = Xk(b);
        if (!c && !d) {
            if (!d && (c = Wk(b))) {
                if (this.YE[c]) this.YE[c]();
                else this.xF[c] = 1;
                return
            }
            var e = a.origin,
                f = this.ct.Zz;
            this.EU ? _.pe.setTimeout(function() {
                f(b, e)
            }, 0) : f(b, e)
        }
    };
    Vk.prototype.Bc = function(a, b) {
        ".." === a || this.xF[a] ? (b(), delete this.xF[a]) : this.YE[a] = b
    };
    var Uk = function(a, b, c, d) {
        var e = Xk(c) ? "" : "!_";
        (0, _.Ze)("gapi.rpc.send(" + Rk + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
        a.EM(b, e + c, d)
    };
    Vk.prototype.NT = function(a, b, c) {
        a.postMessage(b, c)
    };
    Vk.prototype.send = function(a, b, c) {
        (a = this.ct.WJ(this.rf, a)) && !a.closed && Uk(this, a, b, c)
    };
    var Yk, Zk, $k, al, bl, cl, dl, Ok, Rk, el, gl, hl, Qk, Sk, jl, kl, pl, ql, sl, Tk, ul, tl, ll, ml, vl, Pk, wl, xl;
    Yk = 0;
    Zk = [];
    $k = {};
    al = {};
    bl = _.pe.location.href;
    cl = _.ze(bl, "rpctoken");
    dl = _.ze(bl, "parent") || _.qe.referrer;
    Ok = _.ze(bl, "rly");
    Rk = Ok || (_.pe !== _.pe.top || _.pe.opener) && _.pe.name || "..";
    el = null;
    gl = {};
    hl = function() {};
    _.il = {
        send: hl,
        Bc: hl,
        PC: hl
    };
    Qk = function(a, b) {
        "/" == b.charAt(0) && (b = b.substring(1), a = _.pe.top);
        if (0 === b.length) return a;
        for (b = b.split("/"); b.length;) {
            var c = b.shift();
            "{" == c.charAt(0) && "}" == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
            if (".." === c) a = a == a.parent ? a.opener : a.parent;
            else if (".." !== c && a.frames[c]) {
                if (a = a.frames[c], !("postMessage" in a)) throw "Not a window";
            } else return null
        }
        return a
    };
    Sk = function(a) {
        return (a = $k[a]) && a.Wk
    };
    jl = function(a) {
        if (a.f in {}) return !1;
        var b = a.t,
            c = $k[a.r];
        a = a.origin;
        return c && (c.Wk === b || !c.Wk && !b) && (a === c.origin || "*" === c.origin)
    };
    kl = function(a) {
        var b = a.id.split("/"),
            c = b[b.length - 1],
            d = a.origin;
        return function(e) {
            var f = e.origin;
            return e.f == c && (d == f || "*" == d)
        }
    };
    _.nl = function(a, b, c) {
        a = ll(a);
        al[a.name] = {
            Yg: b,
            Fr: a.Fr,
            hp: c || jl
        };
        ml()
    };
    _.ol = function(a) {
        delete al[ll(a).name]
    };
    pl = {};
    ql = function(a, b) {
        (a = pl["_" + a]) && a[1](this) && a[0].call(this, b)
    };
    sl = function(a) {
        var b = a.c;
        if (!b) return hl;
        var c = a.r,
            d = a.g ? "legacy__" : "";
        return function() {
            var e = [].slice.call(arguments, 0);
            e.unshift(c, d + "__cb", null, b);
            _.rl.apply(null, e)
        }
    };
    Tk = function(a) {
        el = a
    };
    ul = function(a) {
        gl[a] || (gl[a] = _.pe.setTimeout(function() {
            gl[a] = !1;
            tl(a)
        }, 0))
    };
    tl = function(a) {
        var b = $k[a];
        if (b && b.ready) {
            var c = b.PD;
            for (b.PD = []; c.length;) _.il.send(a, _.If(c.shift()), b.origin)
        }
    };
    ll = function(a) {
        return 0 === a.indexOf("legacy__") ? {
            name: a.substring(8),
            Fr: !0
        } : {
            name: a,
            Fr: !1
        }
    };
    ml = function() {
        for (var a = _.R("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c = 0, d; d = Zk[c]; ++c) {
            var e = d.rpc;
            if (!e || 0 < a && b - d.timestamp > a) Zk.splice(c, 1), --c;
            else {
                var f = e.s,
                    g = al[f] || al["*"];
                if (g)
                    if (Zk.splice(c, 1), --c, e.origin = d.origin, d = sl(e), e.callback = d, g.hp(e)) {
                        if ("__cb" !== f && !!g.Fr != !!e.g) break;
                        e = g.Yg.apply(e, e.a);
                        void 0 !== e && d(e)
                    } else(0, _.Ze)("gapi.rpc.rejected(" + Rk + "): " + f)
            }
        }
    };
    vl = function(a, b, c) {
        Zk.push({
            rpc: a,
            origin: b,
            timestamp: (new Date).getTime() / 1E3
        });
        c || ml()
    };
    Pk = function(a, b) {
        a = _.Hf(a);
        vl(a, b, !1)
    };
    wl = function(a) {
        for (; a.length;) vl(a.shift(), this.origin, !0);
        ml()
    };
    xl = function(a) {
        var b = !1;
        a = a.split("|");
        var c = a[0];
        0 <= c.indexOf("/") && (b = !0);
        return {
            id: c,
            origin: a[1] || "*",
            vC: b
        }
    };
    _.yl = function(a, b, c, d) {
        var e = xl(a);
        d && (_.pe.frames[e.id] = _.pe.frames[e.id] || d);
        a = e.id;
        if (!$k.hasOwnProperty(a)) {
            c = c || null;
            d = e.origin;
            if (".." === a) d = _.xg(dl), c = c || cl;
            else if (!e.vC) {
                var f = _.qe.getElementById(a);
                f && (f = f.src, d = _.xg(f), c = c || _.ze(f, "rpctoken"))
            }
            "*" === e.origin && d || (d = e.origin);
            $k[a] = {
                Wk: c,
                PD: [],
                origin: d,
                w0: b,
                QM: function() {
                    var g = a;
                    $k[g].ready = 1;
                    tl(g)
                }
            };
            _.il.Bc(a, $k[a].QM)
        }
        return $k[a].QM
    };
    _.rl = function(a, b, c, d) {
        a = a || "..";
        _.yl(a);
        a = a.split("|", 1)[0];
        var e = b,
            f = [].slice.call(arguments, 3),
            g = c,
            k = Rk,
            l = cl,
            m = $k[a],
            n = k,
            p = xl(a);
        if (m && ".." !== a) {
            if (p.vC) {
                if (!(l = $k[a].w0)) {
                    l = el ? el.substring(1).split("/") : [Rk];
                    n = l.length - 1;
                    for (var t = _.pe.parent; t !== _.pe.top;) {
                        var r = t.parent;
                        if (!n--) {
                            for (var v = null, u = r.frames.length, w = 0; w < u; ++w) r.frames[w] == t && (v = w);
                            l.unshift("{" + v + "}")
                        }
                        t = r
                    }
                    l = "/" + l.join("/")
                }
                n = l
            } else n = k = "..";
            l = m.Wk
        }
        g && p ? (m = jl, p.vC && (m = kl(p)), pl["_" + ++Yk] = [g, m], g = Yk) : g = null;
        f = {
            s: e,
            f: k,
            r: n,
            t: l,
            c: g,
            a: f
        };
        e = ll(e);
        f.s = e.name;
        f.g = e.Fr;
        $k[a].PD.push(f);
        ul(a)
    };
    if ("function" === typeof _.pe.postMessage || "object" === typeof _.pe.postMessage) _.il = new Vk, _.nl("__cb", ql, function() {
        return !0
    }), _.nl("_processBatch", wl, function() {
        return !0
    }), _.yl("..");

    var zl = function(a, b) {
            a = window.getComputedStyle(a, "").getPropertyValue(b).match(/^([0-9]+)/);
            return parseInt(a[0], 10)
        },
        Al, Dl, Hl, Il, Kl, Jl;
    _.vi.prototype.Wl = _.kd(6, function() {
        return this.S.style
    });
    _.yi.prototype.Wl = _.kd(5, function() {
        return this.S.style
    });
    Al = function(a, b) {
        a.S.onload = b
    };
    _.Bl = function(a) {
        return a.S.rpctoken
    };
    _.Cl = function(a) {
        a.S.waitForOnload = !0;
        return a
    };
    Dl = function(a) {
        return (a = a.S.timeout) ? a : null
    };
    _.El = function(a, b, c) {
        if (a) {
            _.Si(_.Qi(a), "arrayForEach was called with a non array value");
            for (var d = 0; d < a.length; d++) b.call(c, a[d], d)
        }
    };
    _.Fl = function(a, b, c) {
        if (a)
            if (_.Qi(a)) _.El(a, b, c);
            else {
                _.Si("object" === typeof a, "objectForEach was called with a non object value");
                c = c || a;
                for (var d in a) _.we(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
            }
    };
    Kl = function(a) {
        this.resolve = this.reject = null;
        this.promise = _.Nk((0, _.L)(function(b, c) {
            this.resolve = b;
            this.reject = c
        }, this));
        a && (this.promise = Jl(this.promise, a))
    };
    Jl = function(a, b) {
        return a.then(function(c) {
            try {
                b(c)
            } catch (d) {}
            return c
        })
    };
    _.Ll = function(a, b, c, d) {
        this.Lb = !1;
        this.Oi = a;
        this.dE = b;
        this.lg = c;
        this.Ba = d;
        this.fN = this.Ba.eh();
        this.Bd = this.Ba.getOrigin();
        this.hY = this.Ba.Ia();
        this.zO = this.Ba.S.where;
        this.Bo = [];
        this.Kp("_default");
        a = this.Ba.S.apis || [];
        for (b = 0; b < a.length; b++) this.Kp(a[b]);
        this.Oi.xf[c] = this
    };
    _.h = _.Ll.prototype;
    _.h.eo = _.ia(10);
    _.h.Ea = function() {
        if (!this.Lb) {
            for (var a = 0; a < this.Bo.length; a++) this.unregister(this.Bo[a]);
            delete _.Gl.xf[this.wd()];
            this.Lb = !0
        }
    };
    _.h.getContext = function() {
        return this.Oi
    };
    _.h.getOptions = function() {
        return this.Ba
    };
    _.h.Ff = function() {
        return this.dE
    };
    _.h.eh = function() {
        return this.fN
    };
    _.h.wd = function() {
        return this.lg
    };
    _.h.Ia = function() {
        return this.hY
    };
    _.h.Za = function() {
        return this.zO
    };
    _.h.kf = function(a) {
        this.zO = a
    };
    _.h.Aj = function() {
        (0, this.Ba.S._rpcReadyFn)()
    };
    _.h.YN = function(a, b) {
        this.Ba.value()[a] = b
    };
    _.h.ev = _.ia(11);
    _.h.Sb = function() {
        return this.Ba.value()
    };
    _.h.getId = function() {
        return this.Ba.getId()
    };
    _.h.getOrigin = function() {
        return this.Bd
    };
    _.h.register = function(a, b, c) {
        _.Si(!this.Lb, "Cannot register handler on disposed iframe " + a);
        _.Si((c || _.Ml)(this), "Rejecting untrusted message " + a);
        c = this.lg + ":" + this.Oi.lg + ":" + a;
        1 == _.ue(Hl, c, []).push(b) && (this.Bo.push(a), _.nl(c, Nl(c, this, "_g_wasClosed" === a)))
    };
    _.h.unregister = function(a, b) {
        var c = this.lg + ":" + this.Oi.lg + ":" + a,
            d = Hl[c];
        d && (b ? (b = _.Ri.call(d, b), 0 <= b && d.splice(b, 1)) : d.splice(0, d.length), 0 == d.length && (b = _.Ri.call(this.Bo, a), 0 <= b && this.Bo.splice(b, 1), _.ol(c)))
    };
    _.h.ZV = function() {
        return this.Bo
    };
    _.h.Kp = function(a) {
        this.Wy = this.Wy || [];
        if (!(0 <= _.Ri.call(this.Wy, a))) {
            this.Wy.push(a);
            a = Il[a] || {
                map: {}
            };
            for (var b in a.map) _.we(a.map, b) && this.register(b, a.map[b], a.filter)
        }
    };
    _.h.vb = function() {
        if (!_.Ml(this)) return null;
        var a = this.Ba.S._popupWindow;
        if (a) return a;
        var b = this.dE.split("/");
        a = this.getContext().vb();
        for (var c = 0; c < b.length && a; c++) {
            var d = b[c];
            a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
        }
        return a
    };
    _.Ql = function(a) {
        var b = {};
        if (a)
            for (var c in a) _.we(a, c) && _.we(Ol, c) && Pl.test(a[c]) && (b[c] = a[c]);
        return b
    };
    _.h = _.Ll.prototype;
    _.h.close = function(a, b) {
        return _.Rl(this, "_g_close", a, b)
    };
    _.h.Io = _.ia(12);
    _.h.Jo = function(a, b) {
        return _.Rl(this, "_g_restyleDone", a, b)
    };
    _.h.yT = function(a) {
        return this.getContext().Az(a, void 0, this)
    };
    _.h.s0 = function(a) {
        if (a && "object" === typeof a) return this.getContext().bE(a, void 0, this)
    };
    _.h.t0 = function(a) {
        var b = this.Ba.S.onRestyle;
        b && b.call(this, a, this);
        a = a && "object" === typeof a ? _.Ql(a) : {};
        (b = this.Ia()) && a && "object" === typeof a && (_.we(a, "height") && (a.height = _.Sl(a.height)), _.we(a, "width") && (a.width = _.Sl(a.width)), _.xe(a, b.style))
    };
    _.h.zT = function(a) {
        var b = this.Ba.S.onClose;
        b && b.call(this, a, this);
        this.xz && this.xz() || (b = this.Ia()) && b.parentNode && b.parentNode.removeChild(b);
        if (b = this.Ba.S.controller) {
            var c = {};
            c.frameName = this.wd();
            _.Rl(b, "_g_disposeControl", c)
        }
        Tl(this.lg + ":" + this.Oi.lg + ":_g_wasClosed", a, this)
    };
    _.h.UM = _.ia(13);
    _.h.Jk = function(a, b) {
        this.register("_g_wasClosed", a, b)
    };
    _.h.q3 = function() {
        delete this.getContext().xf[this.wd()];
        this.getContext().vb().setTimeout((0, _.L)(function() {
            this.Ea()
        }, this), 0)
    };
    _.h.send = function(a, b, c, d) {
        _.Si(!this.Lb, "Cannot send message to disposed iframe - " + a);
        _.Si((d || _.Ml)(this), "Wrong target for message " + a);
        c = new Kl(c);
        _.rl(this.dE, this.Oi.lg + ":" + this.lg + ":" + a, c.resolve, b);
        return c.promise
    };
    _.Rl = function(a, b, c, d) {
        return a.send(b, c, d, _.Ul)
    };
    _.Ll.prototype.s_ = function(a) {
        return a
    };
    _.Ll.prototype.ping = function(a, b) {
        return _.Rl(this, "_g_ping", b, a)
    };
    _.Vl = function(a) {
        this.S = a || {}
    };
    _.G(_.Vl, _.yi);
    _.Wl = function(a, b) {
        a.S.frameName = b;
        return a
    };
    _.Vl.prototype.wd = function() {
        return this.S.frameName
    };
    _.Xl = function(a, b) {
        a.S.rpcAddr = b;
        return a
    };
    _.Vl.prototype.Ff = function() {
        return this.S.rpcAddr
    };
    _.Yl = function(a, b) {
        a.S.retAddr = b;
        return a
    };
    _.Vl.prototype.eh = function() {
        return this.S.retAddr
    };
    _.Vl.prototype.ui = function(a) {
        this.S.origin = a;
        return this
    };
    _.Vl.prototype.getOrigin = function() {
        return this.S.origin
    };
    _.Vl.prototype.Aj = function(a) {
        this.S.setRpcReady = a;
        return this
    };
    _.Zl = function(a) {
        return a.S.setRpcReady
    };
    _.Vl.prototype.Uo = function(a) {
        this.S.context = a
    };
    var $l = function(a, b) {
        a.S._rpcReadyFn = b
    };
    _.Vl.prototype.Ia = function() {
        return this.S.iframeEl
    };
    _.am = function() {
        var a = 0;
        self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
        var b = document.body,
            c = document.documentElement;
        if ("CSS1Compat" === document.compatMode && c.scrollHeight) return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
        if (0 <= navigator.userAgent.indexOf("AppleWebKit")) {
            a = 0;
            for (b = [document.body]; 0 < b.length;) {
                var d = b.shift();
                c = d.childNodes;
                if ("undefined" !==
                    typeof d.style) {
                    var e = d.style.overflowY;
                    e || (e = (e = document.defaultView.getComputedStyle(d, null)) ? e.overflowY : null);
                    if ("visible" != e && "inherit" != e && (e = d.style.height, e || (e = (e = document.defaultView.getComputedStyle(d, null)) ? e.height : ""), 0 < e.length && "auto" != e)) continue
                }
                for (d = 0; d < c.length; d++) {
                    e = c[d];
                    if ("undefined" !== typeof e.offsetTop && "undefined" !== typeof e.offsetHeight) {
                        var f = e.offsetTop + e.offsetHeight + zl(e, "margin-bottom");
                        a = Math.max(a, f)
                    }
                    b.push(e)
                }
            }
            return a + zl(document.body, "border-bottom") + zl(document.body,
                "margin-bottom") + zl(document.body, "padding-bottom")
        }
        if (b && c) return d = c.scrollHeight, e = c.offsetHeight, c.clientHeight !== e && (d = b.scrollHeight, e = b.offsetHeight), d > a ? d > e ? d : e : d < e ? d : e
    };
    _.cm = function(a) {
        a = a || {};
        this.Lb = !1;
        this.yM = _.ve();
        this.xf = _.ve();
        this.rf = a._window || _.pe;
        this.nd = this.rf.location.href;
        this.zM = (this.BD = bm(this.nd, "parent")) ? bm(this.nd, "pfname") : "";
        this.Ca = this.BD ? bm(this.nd, "_gfid") || bm(this.nd, "id") : "";
        this.lg = _.zj(this.Ca, this.zM);
        this.Bd = _.xg(this.nd);
        if (this.Ca) {
            var b = new _.Vl;
            _.Xl(b, a._parentRpcAddr || "..");
            _.Yl(b, a._parentRetAddr || this.Ca);
            b.ui(_.xg(this.BD || this.nd));
            _.Wl(b, this.zM);
            this.$a = this.Uj(b.value())
        } else this.$a = null
    };
    _.h = _.cm.prototype;
    _.h.eo = _.ia(9);
    _.h.Ea = function() {
        var a = this.xf;
        if (!this.Lb) {
            for (var b = 0; b < a.length; b++) a[b].Ea();
            this.Lb = !0
        }
    };
    _.h.wd = function() {
        return this.lg
    };
    _.h.vb = function() {
        return this.rf
    };
    _.h.rb = function() {
        return this.rf.document
    };
    _.h.ox = _.ia(14);
    _.h.dB = function(a) {
        return this.yM[a]
    };
    _.h.Uj = function(a) {
        _.Si(!this.Lb, "Cannot attach iframe in disposed context");
        a = new _.Vl(a);
        a.Ff() || _.Xl(a, a.getId());
        a.eh() || _.Yl(a, "..");
        a.getOrigin() || a.ui(_.xg(a.getUrl()));
        a.wd() || _.Wl(a, _.zj(a.getId(), this.lg));
        var b = a.wd();
        if (this.xf[b]) return this.xf[b];
        var c = a.Ff(),
            d = c;
        a.getOrigin() && (d = c + "|" + a.getOrigin());
        var e = a.eh(),
            f = _.Bl(a);
        f || (f = (f = a.Ia()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(), f = _.ze(f, "rpctoken"));
        $l(a, _.yl(d, e, f, a.S._popupWindow));
        d = ((window.gadgets || {}).rpc || {}).setAuthToken;
        f && d && d(c, f);
        var g = new _.Ll(this, c, b, a),
            k = a.S.messageHandlersFilter;
        _.Fl(a.S.messageHandlers, function(l, m) {
            g.register(m, l, k)
        });
        _.Zl(a) && g.Aj();
        _.Rl(g, "_g_rpcReady");
        return g
    };
    _.h.eE = function(a) {
        _.Wl(a, null);
        var b = a.getId();
        !b || dm.test(b) && !this.vb().document.getElementById(b) || (_.We("Ignoring requested iframe ID - " + b), a.Je(null))
    };
    var bm = function(a, b) {
        var c = _.ze(a, b);
        c || (c = _.Hf(_.ze(a, "jcp", ""))[b]);
        return c || ""
    };
    _.cm.prototype.fi = function(a) {
        _.Si(!this.Lb, "Cannot open iframe in disposed context");
        var b = new _.Vl(a);
        em(this, b);
        var c = b.wd();
        if (c && this.xf[c]) return this.xf[c];
        this.eE(b);
        c = b.getUrl();
        _.Si(c, "No url for new iframe");
        var d = b.S.queryParams || {};
        d.usegapi = "1";
        _.Ai(b, d);
        d = this.VB && this.VB(c, b);
        d || (d = b.S.where, _.Si(!!d, "No location for new iframe"), c = _.Jj(c, d, a), b.S.iframeEl = c, d = c.getAttribute("id"));
        _.Xl(b, d).Je(d);
        b.ui(_.xg(b.S.eurl || ""));
        this.QC && this.QC(b, b.Ia());
        c = this.Uj(a);
        c.sx && c.sx(c, a);
        (a =
            b.S.onCreate) && a(c);
        b.S.disableRelayOpen || c.Kp("_open");
        return c
    };
    var fm = function(a, b, c) {
            var d = b.S.canvasUrl;
            if (!d) return c;
            _.Si(!b.S.allowPost && !b.S.forcePost, "Post is not supported when using canvas url");
            var e = b.getUrl();
            _.Si(e && _.xg(e) === a.Bd && _.xg(d) === a.Bd, "Wrong origin for canvas or hidden url " + d);
            b.setUrl(d);
            _.Cl(b);
            b.S.canvasUrl = null;
            return function(f) {
                var g = f.vb(),
                    k = g.location.hash;
                k = _.Ij(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
                g.location.replace(k);
                c && c(f)
            }
        },
        hm = function(a, b, c) {
            var d = b.S.relayOpen;
            if (d) {
                var e = a.$a;
                d instanceof _.Ll ? (e = d, _.Bi(b, 0)) : 0 < Number(d) &&
                    _.Bi(b, Number(d) - 1);
                if (e) {
                    _.Si(!!e.sD, "Relaying iframe open is disabled");
                    if (d = b.Wl())
                        if (d = _.gm[d]) b.Uo(a), d(b.value()), b.Uo(null);
                    b.S.openerIframe = null;
                    c.resolve(e.sD(b));
                    return !0
                }
            }
            return !1
        },
        lm = function(a, b, c) {
            var d = b.Wl();
            if (d)
                if (_.Si(!!_.im, "Defer style is disabled, when requesting style " + d), _.jm[d]) em(a, b);
                else return km(d, function() {
                    _.Si(!!_.jm[d], "Fail to load style - " + d);
                    c.resolve(a.open(b.value()))
                }), !0;
            return !1
        };
    _.cm.prototype.open = function(a, b) {
        _.Si(!this.Lb, "Cannot open iframe in disposed context");
        var c = new _.Vl(a);
        b = fm(this, c, b);
        var d = new Kl(b);
        (b = c.getUrl()) && c.setUrl(_.Ij(b));
        if (hm(this, c, d) || lm(this, c, d) || hm(this, c, d)) return d.promise;
        if (null != Dl(c)) {
            var e = setTimeout(function() {
                    g.Ia().src = "about:blank";
                    d.reject({
                        timeout: "Exceeded time limit of :" + Dl(c) + "milliseconds"
                    })
                }, Dl(c)),
                f = d.resolve;
            d.resolve = function(k) {
                clearTimeout(e);
                f(k)
            }
        }
        c.S.waitForOnload && Al(c.Nl(), function() {
            d.resolve(g)
        });
        var g = this.fi(a);
        c.S.waitForOnload || d.resolve(g);
        return d.promise
    };
    _.cm.prototype.HJ = _.ia(15);
    var mm = function(a, b) {
        var c = a.$a,
            d = !0;
        b.filter && (d = b.filter.call(b.Jf, b.params));
        return _.vk(d).then(function(e) {
            return e && c ? (b.xM && b.xM.call(a, b.params), e = b.sender ? b.sender(b.params) : _.Rl(c, b.message, b.params), b.n3 ? e.then(function() {
                return !0
            }) : !0) : !1
        })
    };
    _.h = _.cm.prototype;
    _.h.Az = function(a, b, c) {
        a = mm(this, {
            sender: function(d) {
                var e = _.Gl.$a;
                _.Fl(_.Gl.xf, function(f) {
                    f !== e && _.Rl(f, "_g_wasClosed", d)
                });
                return _.Rl(e, "_g_closeMe", d)
            },
            message: "_g_closeMe",
            params: a,
            Jf: c,
            filter: this.dB("onCloseSelfFilter")
        });
        b = new Kl(b);
        b.resolve(a);
        return b.promise
    };
    _.h.bE = function(a, b, c) {
        a = a || {};
        b = new Kl(b);
        b.resolve(mm(this, {
            message: "_g_restyleMe",
            params: a,
            Jf: c,
            filter: this.dB("onRestyleSelfFilter"),
            n3: !0,
            xM: this.$O
        }));
        return b.promise
    };
    _.h.$O = function(a) {
        "auto" === a.height && (a.height = _.am())
    };
    _.h.DN = _.ia(16);
    _.h.aO = _.ia(17);
    var em = function(a, b) {
        var c = b.Wl();
        if (c) {
            b.jd(null);
            var d = _.jm[c];
            _.Si(d, "No such style: " + c);
            b.Uo(a);
            d(b.value());
            b.Uo(null)
        }
    };
    var dm, Nl, Tl;
    dm = /^[\w\.\-]*$/;
    _.Ml = function(a) {
        return a.Bd === a.getContext().Bd
    };
    _.Ul = function() {
        return !0
    };
    Nl = function(a, b, c) {
        return function(d) {
            if (!b.Lb) {
                var e = this.origin,
                    f = b.getOrigin();
                _.Si(e === f, "Wrong origin " + e + " != " + f);
                e = this.callback;
                d = Tl(a, d, b);
                !c && 0 < d.length && _.zk(d).then(e)
            }
        }
    };
    Tl = function(a, b, c) {
        a = Hl[a];
        if (!a) return [];
        for (var d = [], e = 0; e < a.length; e++) d.push(_.vk(a[e].call(c, b, c)));
        return d
    };
    _.nm = function(a, b, c) {
        _.Si("_default" != a, "Cannot update default api");
        Il[a] = {
            map: b,
            filter: c
        }
    };
    _.om = function(a, b, c) {
        _.Si("_default" != a, "Cannot update default api");
        _.ue(Il, a, {
            map: {},
            filter: _.Ml
        }).map[b] = c
    };
    _.pm = function(a, b) {
        _.ue(Il, "_default", {
            map: {},
            filter: _.Ul
        }).map[a] = b;
        _.Fl(_.Gl.xf, function(c) {
            c.register(a, b, _.Ul)
        })
    };
    _.qm = function() {
        return _.Gl
    };
    Hl = _.ve();
    Il = _.ve();
    _.Gl = new _.cm;
    _.pm("_g_rpcReady", _.Ll.prototype.Aj);
    _.pm("_g_discover", _.Ll.prototype.ZV);
    _.pm("_g_ping", _.Ll.prototype.s_);
    var Ol, Pl;
    Ol = {
        height: !0,
        width: !0
    };
    Pl = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.Sl = function(a) {
        "number" === typeof a && (a = String(a) + "px");
        return a
    };
    _.pm("_g_close", _.Ll.prototype.yT);
    _.pm("_g_closeMe", _.Ll.prototype.zT);
    _.pm("_g_restyle", _.Ll.prototype.s0);
    _.pm("_g_restyleMe", _.Ll.prototype.t0);
    _.pm("_g_wasClosed", _.Ll.prototype.q3);
    var km;
    _.jm = _.ve();
    _.gm = _.ve();
    _.im = function(a) {
        return _.jm[a]
    };
    km = function(a, b) {
        _.ye.load("gapi.iframes.style." + a, b)
    };

    var vm;
    _.yi.prototype.So = _.kd(8, function(a) {
        this.S.apis = a;
        return this
    });
    _.yi.prototype.Rk = _.kd(7, function(a) {
        this.S.rpctoken = a;
        return this
    });
    _.rm = function(a, b) {
        a.S.onClose = b;
        return a
    };
    _.sm = function(a) {
        this.S = a || {}
    };
    _.sm.prototype.value = function() {
        return this.S
    };
    _.sm.prototype.getIframe = function() {
        return this.S.iframe
    };
    _.tm = function(a, b) {
        a.S.role = b;
        return a
    };
    _.sm.prototype.Aj = function(a) {
        this.S.setRpcReady = a;
        return this
    };
    _.sm.prototype.Rk = function(a) {
        this.S.rpctoken = a;
        return this
    };
    _.um = function(a) {
        a.S.selfConnect = !0;
        return a
    };
    vm = function(a) {
        this.S = a || {}
    };
    vm.prototype.value = function() {
        return this.S
    };
    var wm = function(a) {
        var b = new vm;
        b.S.role = a;
        return b
    };
    vm.prototype.NJ = function() {
        return this.S.role
    };
    vm.prototype.Zb = function(a) {
        this.S.handler = a;
        return this
    };
    vm.prototype.kb = function() {
        return this.S.handler
    };
    var xm = function(a, b) {
        a.S.filter = b;
        return a
    };
    vm.prototype.So = function(a) {
        this.S.apis = a;
        return this
    };
    var ym = function(a) {
        a.S.runOnce = !0;
        return a
    };
    _.h = _.Ll.prototype;
    _.h.CT = function(a) {
        var b = new _.Vl(a);
        a = new _.sm(b.value());
        if (a.S.selfConnect) var c = this;
        else(_.Si(zm.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()), c = this.getContext().xf[b.wd()], c) ? _.Zl(b) && (c.Aj(), _.Rl(c, "_g_rpcReady")) : (b = _.Wl(_.Yl(_.Xl(new _.Vl, b.Ff()), b.eh()).ui(b.getOrigin()), b.wd()).Aj(_.Zl(b)).Rk(_.Bl(b)), c = this.getContext().Uj(b.value()));
        b = this.getContext();
        var d = a.S.role;
        a = a.S.data;
        Am(b);
        d = d || "";
        _.ue(b.Fz, d, []).push({
            Jf: c.wd(),
            data: a
        });
        Bm(c, a, b.iD[d])
    };
    _.h.sx = function(a, b) {
        (new _.Vl(b)).S._relayedDepth || (b = {}, _.um(_.tm(new _.sm(b), "_opener")), _.Rl(a, "_g_connect", b))
    };
    _.h.sD = function(a) {
        var b = this,
            c = a.S.messageHandlers,
            d = a.S.messageHandlersFilter,
            e = a.S.onClose;
        _.rm(_.Di(_.Ci(a, null), null), null);
        return _.Rl(this, "_g_open", a.value()).then(function(f) {
            var g = new _.Vl(f[0]),
                k = g.wd();
            f = new _.Vl;
            var l = b.eh(),
                m = g.eh();
            _.Yl(_.Xl(f, b.Ff() + "/" + g.Ff()), m + "/" + l);
            _.Wl(f, k);
            f.ui(g.getOrigin());
            f.So(g.S.apis);
            f.Rk(_.Bl(a));
            _.Ci(f, c);
            _.Di(f, d);
            _.rm(f, e);
            (g = b.getContext().xf[k]) || (g = b.getContext().Uj(f.value()));
            return g
        })
    };
    _.h.eE = function(a) {
        var b = a.getUrl();
        _.Si(!b || _.lj.test(b), "Illegal url for new iframe - " + b);
        var c = a.Nl().value();
        b = {};
        for (var d in c) _.we(c, d) && _.we(Cm, d) && (b[d] = c[d]);
        _.we(c, "style") && (d = c.style, "object" === typeof d && (b.style = _.Ql(d)));
        a.value().attributes = b
    };
    _.h.e_ = function(a) {
        a = new _.Vl(a);
        this.eE(a);
        var b = a.S._relayedDepth || 0;
        a.S._relayedDepth = b + 1;
        a.S.openerIframe = this;
        var c = _.Bl(a);
        a.Rk(null);
        return this.getContext().open(a.value()).then((0, _.L)(function(d) {
            var e = (new _.Vl(d.Sb())).S.apis,
                f = new _.Vl;
            _.Dm(d, this, f);
            0 == b && _.tm(new _.sm(f.value()), "_opener");
            f.Aj(!0);
            f.Rk(c);
            _.Rl(d, "_g_connect", f.value());
            f = new _.Vl;
            _.Wl(_.Yl(_.Xl(f, d.Ff()), d.fN), d.wd()).ui(d.getOrigin()).So(e);
            return f.value()
        }, this))
    };
    _.h.r0 = function(a) {
        this.getContext().Rj(function(b) {
            b.send("_g_wasRestyled", a, void 0, _.Ul)
        }, null, _.Ul)
    };
    var zm, Cm, Em;
    zm = /^https?:\/\/[^\/%\\?#\s]+$/i;
    Cm = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        "class": !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    };
    _.Dm = function(a, b, c) {
        var d = a.Ff(),
            e = b.eh();
        _.Yl(_.Xl(c, a.eh() + "/" + b.Ff()), e + "/" + d);
        _.Wl(c, b.wd()).ui(b.getOrigin())
    };
    Em = _.Gl.$a;
    Em && Em.register("_g_restyleDone", _.Ll.prototype.r0, _.Ul);
    _.pm("_g_connect", _.Ll.prototype.CT);
    var Fm = {};
    Fm._g_open = _.Ll.prototype.e_;
    _.nm("_open", Fm, _.Ul);
    _.cm.prototype.ready = function(a, b, c, d) {
        var e = b || {},
            f = this.$a;
        this.Rj(function(k) {
            _.Fl(e, function(l, m) {
                k.register(m, l, d)
            }, this);
            k !== f && k.send("_ready", g, void 0, d)
        }, void 0, d);
        var g = a || {};
        g.height = g.height || "auto";
        this.$O(g);
        f && f.send("_ready", g, c, _.Ul)
    };
    _.cm.prototype.Dz = _.ia(18);
    var Am = function(a) {
        a.Fz || (a.Fz = _.ve(), a.iD = _.ve())
    };
    _.cm.prototype.Ry = function(a, b, c, d) {
        Am(this);
        "object" === typeof a ? (b = new vm(a), c = b.NJ() || "") : (b = xm(wm(a).Zb(b).So(c), d), c = a);
        d = this.Fz[c] || [];
        a = !1;
        for (var e = 0; e < d.length && !a; e++) Bm(this.xf[d[e].Jf], d[e].data, [b]), a = b.S.runOnce;
        c = _.ue(this.iD, c, []);
        a || b.S.dontWait || c.push(b)
    };
    _.cm.prototype.XM = _.ia(19);
    var Bm = function(a, b, c) {
        c = c || [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e && a) {
                var f = e.S.filter || _.Ml;
                if (a && f(a)) {
                    f = e.S.apis || [];
                    for (var g = 0; g < f.length; g++) a.Kp(f[g]);
                    e.kb() && e.kb()(a, b);
                    e.S.runOnce && (c.splice(d, 1), --d)
                }
            }
        }
    };
    _.cm.prototype.Rj = function(a, b, c) {
        this.Ry(ym(xm(wm("_opener").Zb(a).So(b), c)).value())
    };

    _.Ll.prototype.Io = _.kd(12, function(a, b) {
        return _.Rl(this, "_g_restyle", a, b)
    });
    _.Ll.prototype.ev = _.kd(11, function(a) {
        return this.Ba.value()[a]
    });
    _.Gm = function(a) {
        for (var b = _.ve(), c = 0; c < a.length; c++) b[a[c]] = !0;
        return function(d) {
            return !!b[d.Bd]
        }
    };
    _.cm.prototype.VB = function() {};
    _.cm.prototype.QC = function() {};
    _.Ll.prototype.xz = function() {};

    _.$e.K5 = function(a) {
        var b = [];
        if (1 < arguments.length)
            for (var c = 0, d; d = arguments[c]; ++c) b.push(d);
        else b = a;
        return function(e) {
            for (var f = 0; b[f]; ++f)
                if (e === b[f]) return !0;
            return !1
        }
    };
    _.$e.u9 = function(a) {
        return function(b) {
            return a.test(b)
        }
    };
    _.$e.iQ = function(a) {
        return "undefined" !== typeof a
    };
    _.$e.d8 = function(a) {
        return "string" === typeof a && 0 < a.length
    };
    _.$e.a4 = function(a) {
        return "boolean" === typeof a
    };
    _.$e.g7 = function(a) {
        return function(b) {
            for (var c in a)
                if (a.hasOwnProperty(c) && !(0, a[c])(b[c])) return !1;
            return !0
        }
    };

    _.Te = _.Te || {};
    _.Te.makeClosure = function(a, b, c) {
        for (var d = [], e = 2, f = arguments.length; e < f; ++e) d.push(arguments[e]);
        return function() {
            for (var g = d.slice(), k = 0, l = arguments.length; k < l; ++k) g.push(arguments[k]);
            return b.apply(a, g)
        }
    };
    _.Te.Kr = function(a) {
        var b, c, d = {};
        for (b = 0; c = a[b]; ++b) d[c] = c;
        return d
    };

    _.Te = _.Te || {};
    (function() {
        function a(d) {
            b = d["core.util"] || {}
        }
        var b = {},
            c = {};
        _.$e && _.$e.register("core.util", null, a);
        _.Te.getFeatureParameters = function(d) {
            return "undefined" === typeof b[d] ? null : b[d]
        };
        _.Te.hasFeature = function(d) {
            return "undefined" !== typeof b[d]
        };
        _.Te.Iba = function() {
            return c
        }
    })();

    _.Pm = _.ve();

    _.Rm = function(a) {
        var b = window;
        a = (a || b.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
        return "1" === decodeURIComponent(a[a.length - 1] || "")
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ur, wr, xr, yr, zr, Cr, Gr, Hr, Ir;
    _.hr = function(a, b) {
        return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    };
    _.ir = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.h = _.ir.prototype;
    _.h.clone = function() {
        return new _.ir(this.x, this.y)
    };
    _.h.equals = function(a) {
        return a instanceof _.ir && _.hr(this, a)
    };
    _.h.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.h.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.h.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.h.translate = function(a, b) {
        a instanceof _.ir ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    _.h.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    _.jr = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.h = _.jr.prototype;
    _.h.clone = function() {
        return new _.jr(this.width, this.height)
    };
    _.h.aspectRatio = function() {
        return this.width / this.height
    };
    _.h.isEmpty = function() {
        return !(this.width * this.height)
    };
    _.h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.h.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    _.kr = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.lr = function(a) {
        a = a.document;
        a = _.kr(a) ? a.documentElement : a.body;
        return new _.jr(a.clientWidth, a.clientHeight)
    };
    _.mr = function(a) {
        return _.lr(a || window)
    };
    _.nr = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.Pc && _.kr(a) ? a.documentElement : a.body || a.documentElement
    };
    _.or = function(a) {
        var b = _.nr(a);
        a = a.parentWindow || a.defaultView;
        return _.Lc && _.fd("10") && a.pageYOffset != b.scrollTop ? new _.ir(b.scrollLeft, b.scrollTop) : new _.ir(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    _.pr = function(a, b, c, d) {
        return _.Vd(a.mb, b, c, d)
    };
    _.qr = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    _.rr = function(a, b, c, d) {
        return Array.prototype.splice.apply(a, _.qr(arguments, 1))
    };
    _.sr = function(a, b, c) {
        if (null !== a && b in a) throw Error("h`" + b);
        a[b] = c
    };
    ur = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    _.vr = function(a) {
        if (a instanceof _.rc && a.constructor === _.rc && a.NR === _.qc) return a.MD;
        _.hb(a);
        return "type_error:SafeStyleSheet"
    };
    wr = /^[a-zA-Z0-9-]+$/;
    xr = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    yr = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    zr = function(a) {
        var b = _.Hd(_.zc),
            c = b.Ph(),
            d = [],
            e = function(f) {
                Array.isArray(f) ? (0, _.vb)(f, e) : (f = _.Hd(f), d.push(_.xc(f).toString()), f = f.Ph(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        (0, _.vb)(a, e);
        return _.yc(d.join(_.xc(b).toString()), c)
    };
    _.Ar = function(a) {
        return zr(Array.prototype.slice.call(arguments))
    };
    _.Br = function(a, b, c) {
        var d = String(a);
        if (!wr.test(d)) throw Error("n");
        if (d.toUpperCase() in yr) throw Error("n");
        a = String(a);
        d = null;
        var e = "<" + a,
            f = "";
        if (b)
            for (l in b) {
                if (!wr.test(l)) throw Error("n");
                var g = b[l];
                if (null != g) {
                    var k = l;
                    if (g instanceof _.Tb) g = _.Ub(g);
                    else if ("style" == k.toLowerCase()) {
                        if (!_.kb(g)) throw Error("n");
                        g instanceof _.fc || (g = _.jc(g));
                        g = _.gc(g)
                    } else {
                        if (/^on/i.test(k)) throw Error("n");
                        if (k.toLowerCase() in xr)
                            if (g instanceof _.Cd) g = _.Ed(g);
                            else if (g instanceof _.ac) g = _.bc(g);
                        else if ("string" ===
                            typeof g) g = _.dc(g).Hf();
                        else throw Error("n");
                    }
                    g.kh && (g = g.Hf());
                    k = k + '="' + _.zd(String(g)) + '"';
                    f += " " + k
                }
            }
        var l = e + f;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === ur[a.toLowerCase()] ? l += ">" : (c = _.Ar(c), l += ">" + _.xc(c).toString() + "</" + a + ">", d = c.Ph());
        (b = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
        return _.yc(l, d)
    };
    Cr = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    _.Dr = function(a, b, c) {
        return _.ce(document, arguments)
    };
    _.Er = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    _.Fr = function(a) {
        var b;
        if (_.Pd && !(_.Lc && _.fd("9") && !_.fd("10") && _.q.SVGElement && a instanceof _.q.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.me(b) ? b : null
    };
    Gr = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    Hr = {
        IMG: " ",
        BR: "\n"
    };
    Ir = function(a, b, c) {
        if (!(a.nodeName in Gr))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Hr) b.push(Hr[a.nodeName]);
        else
            for (a = a.firstChild; a;) Ir(a, b, c), a = a.nextSibling
    };
    _.Jr = function(a) {
        if (_.Od && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Ir(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        _.Od || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    };
    _.Kr = function(a) {
        var b = [];
        Ir(a, b, !1);
        return b.join("")
    };
    _.Lr = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.h = _.Lr.prototype;
    _.h.Oc = function() {
        return this.right - this.left
    };
    _.h.getHeight = function() {
        return this.bottom - this.top
    };
    _.h.clone = function() {
        return new _.Lr(this.top, this.right, this.bottom, this.left)
    };
    _.h.contains = function(a) {
        return this && a ? a instanceof _.Lr ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.h.expand = function(a, b, c, d) {
        _.kb(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    _.h.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    _.h.translate = function(a, b) {
        a instanceof _.ir ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    _.h.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Or, Zr, Xr, bs, os, ps;
    _.Nr = function(a, b, c) {
        if ("string" === typeof b)(b = _.Mr(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.Mr(c, d);
                f && (c.style[f] = e)
            }
    };
    Or = {};
    _.Mr = function(a, b) {
        var c = Or[b];
        if (!c) {
            var d = _.Ld(b);
            c = d;
            void 0 === a.style[d] && (d = (_.Pc ? "Webkit" : _.Oc ? "Moz" : _.Lc ? "ms" : _.Kc ? "O" : null) + Cr(d), void 0 !== a.style[d] && (c = d));
            Or[b] = c
        }
        return c
    };
    _.Pr = function(a, b) {
        var c = _.Sd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    _.Qr = function(a, b) {
        return a.currentStyle ? a.currentStyle[b] : null
    };
    _.Rr = function(a, b) {
        return _.Pr(a, b) || _.Qr(a, b) || a.style && a.style[b]
    };
    _.Yr = function(a, b, c) {
        if (b instanceof _.ir) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = Xr(d, !1);
        a.style.top = Xr(b, !1)
    };
    Zr = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        _.Lc && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    _.cs = function(a, b) {
        b = b || _.nr(document);
        var c = b || _.nr(document);
        var d = _.$r(a),
            e = _.$r(c),
            f = _.as(c);
        if (c == _.nr(document)) {
            var g = d.x - c.scrollLeft;
            d = d.y - c.scrollTop;
            _.Lc && !_.hd(10) && (g += f.left, d += f.top)
        } else g = d.x - e.x - f.left, d = d.y - e.y - f.top;
        a = bs(a);
        f = c.clientHeight - a.height;
        e = c.scrollLeft;
        var k = c.scrollTop;
        e += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
        k += Math.min(d, Math.max(d - f, 0));
        c = new _.ir(e, k);
        b.scrollLeft = c.x;
        b.scrollTop = c.y
    };
    _.$r = function(a) {
        var b = _.Sd(a),
            c = new _.ir(0, 0);
        var d = b ? _.Sd(b) : document;
        d = !_.Lc || _.hd(9) || _.kr(_.Td(d).mb) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Zr(a);
        b = _.or(_.Td(b).mb);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.es = function(a, b) {
        var c = new _.ir(0, 0),
            d = _.$d(_.Sd(a));
        if (!_.Hc(d, "parent")) return c;
        do {
            var e = d == b ? _.$r(a) : _.ds(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.ds = function(a) {
        a = Zr(a);
        return new _.ir(a.left, a.top)
    };
    _.fs = function(a, b, c) {
        if (b instanceof _.jr) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("I");
        a.style.width = Xr(b, !0);
        a.style.height = Xr(c, !0)
    };
    Xr = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.gs = function(a) {
        var b = bs;
        if ("none" != _.Rr(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    bs = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = _.Pc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Zr(a), new _.jr(a.right - a.left, a.bottom - a.top)) : new _.jr(b, c)
    };
    _.hs = function(a, b) {
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    };
    _.is = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    _.ks = function(a) {
        var b = _.Td(void 0),
            c = b.rb();
        if (_.Lc && c.createStyleSheet) return b = c.createStyleSheet(), _.js(b, a), b;
        c = _.pr(b, "HEAD")[0];
        if (!c) {
            var d = _.pr(b, "BODY")[0];
            c = b.ma("HEAD");
            d.parentNode.insertBefore(c, d)
        }
        d = b.ma("STYLE");
        _.js(d, a);
        b.appendChild(c, d);
        return d
    };
    _.js = function(a, b) {
        b = _.vr(b);
        _.Lc && void 0 !== a.cssText ? a.cssText = b : a.innerHTML = b
    };
    _.ls = function(a) {
        return "rtl" == _.Rr(a, "direction")
    };
    _.ms = _.Oc ? "MozUserSelect" : _.Pc || _.Mc ? "WebkitUserSelect" : null;
    _.ns = function(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    };
    os = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    ps = function(a, b) {
        if ("none" == _.Qr(a, b + "Style")) return 0;
        b = _.Qr(a, b + "Width");
        return b in os ? os[b] : _.ns(a, b)
    };
    _.as = function(a) {
        if (_.Lc && !_.hd(9)) {
            var b = ps(a, "borderLeft"),
                c = ps(a, "borderRight"),
                d = ps(a, "borderTop");
            a = ps(a, "borderBottom");
            return new _.Lr(d, c, a, b)
        }
        b = _.Pr(a, "borderLeftWidth");
        c = _.Pr(a, "borderRightWidth");
        d = _.Pr(a, "borderTopWidth");
        a = _.Pr(a, "borderBottomWidth");
        return new _.Lr(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.Zy = function(a) {
        this.Q2 = a
    };
    _.Zy.prototype.toString = function() {
        return this.Q2
    };
    _.$y = function(a) {
        _.hq.call(this);
        this.Zh = 1;
        this.Mw = [];
        this.Rw = 0;
        this.nf = [];
        this.Ai = {};
        this.VS = !!a
    };
    _.G(_.$y, _.hq);
    _.h = _.$y.prototype;
    _.h.subscribe = function(a, b, c) {
        var d = this.Ai[a];
        d || (d = this.Ai[a] = []);
        var e = this.Zh;
        this.nf[e] = a;
        this.nf[e + 1] = b;
        this.nf[e + 2] = c;
        this.Zh = e + 3;
        d.push(e);
        return e
    };
    _.h.Ss = _.ia(38);
    _.h.unsubscribe = function(a, b, c) {
        if (a = this.Ai[a]) {
            var d = this.nf;
            if (a = _.Lj(a, function(e) {
                    return d[e + 1] == b && d[e + 2] == c
                })) return this.Kj(a)
        }
        return !1
    };
    _.h.Kj = function(a) {
        var b = this.nf[a];
        if (b) {
            var c = this.Ai[b];
            0 != this.Rw ? (this.Mw.push(a), this.nf[a + 1] = _.gb) : (c && _.eq(c, a), delete this.nf[a], delete this.nf[a + 1], delete this.nf[a + 2])
        }
        return !!b
    };
    _.h.zo = function(a, b) {
        var c = this.Ai[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.VS)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    az(this.nf[g + 1], this.nf[g + 2], d)
                } else {
                    this.Rw++;
                    try {
                        for (e = 0, f = c.length; e < f; e++) g = c[e], this.nf[g + 1].apply(this.nf[g + 2], d)
                    } finally {
                        if (this.Rw--, 0 < this.Mw.length && 0 == this.Rw)
                            for (; c = this.Mw.pop();) this.Kj(c)
                    }
                }
            return 0 != e
        }
        return !1
    };
    var az = function(a, b, c) {
        _.nk(function() {
            a.apply(b, c)
        })
    };
    _.$y.prototype.clear = function(a) {
        if (a) {
            var b = this.Ai[a];
            b && ((0, _.vb)(b, this.Kj, this), delete this.Ai[a])
        } else this.nf.length = 0, this.Ai = {}
    };
    _.$y.prototype.Cb = function(a) {
        if (a) {
            var b = this.Ai[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.Ai) a += this.Cb(b);
        return a
    };
    _.$y.prototype.ua = function() {
        _.$y.H.ua.call(this);
        this.clear();
        this.Mw.length = 0
    };
    _.bz = function(a) {
        _.hq.call(this);
        this.Jd = new _.$y(a);
        _.kq(this, this.Jd)
    };
    _.G(_.bz, _.hq);
    _.h = _.bz.prototype;
    _.h.subscribe = function(a, b, c) {
        return this.Jd.subscribe(a.toString(), b, c)
    };
    _.h.Ss = _.ia(37);
    _.h.unsubscribe = function(a, b, c) {
        return this.Jd.unsubscribe(a.toString(), b, c)
    };
    _.h.Kj = function(a) {
        return this.Jd.Kj(a)
    };
    _.h.zo = function(a, b) {
        return this.Jd.zo(a.toString(), b)
    };
    _.h.clear = function(a) {
        this.Jd.clear(void 0 !== a ? a.toString() : void 0)
    };
    _.h.Cb = function(a) {
        return this.Jd.Cb(void 0 !== a ? a.toString() : void 0)
    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.cz = function(a, b) {
        Array.isArray(b) || (b = [b]);
        b = (0, _.yb)(b, function(c) {
            return "string" === typeof c ? c : c.Pw + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        _.Nr(a, "transition", b.join(","))
    };
    _.dz = _.Qb(function() {
        if (_.Lc) return _.fd("10.0");
        var a = _.ee("DIV"),
            b = _.Pc ? "-webkit" : _.Oc ? "-moz" : _.Lc ? "-ms" : _.Kc ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = _.Br("div", {
            style: c
        });
        _.Id(a, b);
        a = a.firstChild;
        b = a.style[_.Ld("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[_.Mr(a, "transition")] || "")
    });

    _.fz = !1;
    _.gz = function() {
        _.ez = "oauth2relay" + String(2147483647 * (0, _.Ag)() | 0)
    };
    _.hz = new _.bz;
    _.iz = new _.Zy("oauth");
    _.gz();
    _.R("oauth-flow/client_id");
    var jz = String(_.R("oauth-flow/redirectUri"));
    if (jz) jz.replace(/[#][\s\S]*/, "");
    else {
        var kz = _.vg.getOrigin(window.location.href);
        _.R("oauth-flow/callbackUrl");
        encodeURIComponent(kz)
    }
    _.vg.getOrigin(window.location.href);

    _.fz = !0;

    _.Hm = _.ue(_.Fe, "rw", _.ve());

    var Im = function(a, b) {
        (a = _.Hm[a]) && a.state < b && (a.state = b)
    };
    var Jm = function(a) {
        a = (a = _.Hm[a]) ? a.oid : void 0;
        if (a) {
            var b = _.qe.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete _.Hm[a];
            Jm(a)
        }
    };
    _.Km = function(a) {
        a = a.container;
        "string" === typeof a && (a = document.getElementById(a));
        return a
    };
    _.Lm = function(a) {
        var b = a.clientWidth;
        return "position:absolute;top:-10000px;width:" + (b ? b + "px" : a.style.width || "300px") + ";margin:0px;border-style:none;"
    };
    _.Mm = function(a, b) {
        var c = {},
            d = a.Sb(),
            e = b && b.width,
            f = b && b.height,
            g = b && b.verticalAlign;
        g && (c.verticalAlign = g);
        e || (e = d.width || a.width);
        f || (f = d.height || a.height);
        d.width = c.width = e;
        d.height = c.height = f;
        d = a.Ia();
        e = a.getId();
        Im(e, 2);
        a: {
            e = a.Za();c = c || {};
            if (_.Fe.oa) {
                var k = d.id;
                if (k) {
                    f = (f = _.Hm[k]) ? f.state : void 0;
                    if (1 === f || 4 === f) break a;
                    Jm(k)
                }
            }(f = e.nextSibling) && f.getAttribute && f.getAttribute("data-gapistub") && (e.parentNode.removeChild(f), e.style.cssText = "");f = c.width;g = c.height;
            var l = e.style;l.textIndent = "0";
            l.margin = "0";l.padding = "0";l.background = "transparent";l.borderStyle = "none";l.cssFloat = "none";l.styleFloat = "none";l.lineHeight = "normal";l.fontSize = "1px";l.verticalAlign = "baseline";e = e.style;e.display = "inline-block";d = d.style;d.position = "static";d.left = "0";d.top = "0";d.visibility = "visible";f && (e.width = d.width = f + "px");g && (e.height = d.height = g + "px");c.verticalAlign && (e.verticalAlign = c.verticalAlign);k && Im(k, 3)
        }(k = b ? b.title : null) && a.Ia().setAttribute("title", k);
        (b = b ? b.ariaLabel : null) && a.Ia().setAttribute("aria-label",
            b)
    };
    _.Nm = function(a) {
        var b = a.Za();
        b && b.removeChild(a.Ia())
    };
    _.Om = function(a) {
        a.where = _.Km(a);
        var b = a.messageHandlers = a.messageHandlers || {},
            c = function(e) {
                _.Mm(this, e)
            };
        b._ready = c;
        b._renderstart = c;
        var d = a.onClose;
        a.onClose = function(e) {
            d && d.call(this, e);
            _.Nm(this)
        };
        a.onCreate = function(e) {
            e = e.Ia();
            e.style.cssText = _.Lm(e)
        }
    };

    _.sp = _.sp || {};
    _.sp.getViewportDimensions = function() {
        var a = 0,
            b = 0;
        self.innerHeight ? (a = self.innerWidth, b = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (a = document.documentElement.clientWidth, b = document.documentElement.clientHeight) : document.body && (a = document.body.clientWidth, b = document.body.clientHeight);
        return {
            width: a,
            height: b
        }
    };

    _.sp = _.sp || {};
    (function() {
        function a(b, c) {
            b = window.getComputedStyle(b, "").getPropertyValue(c).match(/^([0-9]+)/);
            return parseInt(b[0], 10)
        }
        _.sp.getHeight = function() {
            var b = _.sp.getViewportDimensions().height,
                c = document.body,
                d = document.documentElement;
            if ("CSS1Compat" === document.compatMode && d.scrollHeight) return d.scrollHeight !== b ? d.scrollHeight : d.offsetHeight;
            if (0 <= navigator.userAgent.indexOf("AppleWebKit")) {
                b = 0;
                for (c = [document.body]; 0 < c.length;) {
                    var e = c.shift();
                    d = e.childNodes;
                    if ("undefined" !== typeof e.style) {
                        var f = e.style.overflowY;
                        f || (f = (f = document.defaultView.getComputedStyle(e, null)) ? f.overflowY : null);
                        if ("visible" != f && "inherit" != f && (f = e.style.height, f || (f = (f = document.defaultView.getComputedStyle(e, null)) ? f.height : ""), 0 < f.length && "auto" != f)) continue
                    }
                    for (e = 0; e < d.length; e++) {
                        f = d[e];
                        if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
                            var g = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
                            b = Math.max(b, g)
                        }
                        c.push(f)
                    }
                }
                return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body,
                    "padding-bottom")
            }
            if (c && d) return e = d.scrollHeight, f = d.offsetHeight, d.clientHeight !== f && (e = c.scrollHeight, f = c.offsetHeight), e > b ? e > f ? e : f : e < f ? e : f
        }
    })();

    _.S = {};
    _.Qm = {};
    window.iframer = _.Qm;

    _.S.util = _.S.util || {};
    _.S.util.kT = function(a) {
        try {
            return !!a.document
        } catch (b) {}
        return !1
    };
    _.S.util.TJ = function(a) {
        var b = a.parent;
        return a != b && _.S.util.kT(b) ? _.S.util.TJ(b) : a
    };
    _.S.util.Qba = function(a) {
        var b = a.userAgent || "";
        a = a.product || "";
        return 0 != b.indexOf("Opera") && -1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
    };

    var tp, up, vp, xp, yp, zp, Ep, Fp, Gp, Hp, Jp, Kp, Lp, Np, Op, Qp;
    tp = function() {
        _.S.LK++;
        return ["I", _.S.LK, "_", (new Date).getTime()].join("")
    };
    up = function(a) {
        return a instanceof Array ? a.join(",") : a instanceof Object ? _.If(a) : a
    };
    vp = function(a) {
        var b = _.R("googleapis.config/elog");
        if (b) try {
            b(a)
        } catch (c) {}
    };
    xp = function(a) {
        a && a.match(wp) && _.Ne("googleapis.config/gcv", a)
    };
    yp = function(a) {
        _.vg.gz.v1(a)
    };
    zp = function(a) {
        _.vg.gz.wE(a)
    };
    _.Ap = function(a, b) {
        b = b || {};
        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    };
    _.Cp = function(a, b, c, d, e) {
        var f = [],
            g;
        for (g in a)
            if (a.hasOwnProperty(g)) {
                var k = b,
                    l = c,
                    m = a[g],
                    n = d,
                    p = Bp(g);
                p[k] = p[k] || {};
                n = _.Te.makeClosure(n, m);
                m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0);
                p[k][l] = n;
                f.push(g)
            }
        if (e)
            for (g in _.S.Pn) _.S.Pn.hasOwnProperty(g) && f.push(g);
        return f.join(",")
    };
    Ep = function(a, b, c) {
        var d = {};
        if (a && a._methods) {
            a = a._methods.split(",");
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                d[f] = Dp(f, b, c)
            }
        }
        return d
    };
    Fp = function(a) {
        if (a && a.disableMultiLevelParentRelay) a = !1;
        else {
            var b;
            if (b = _.Qm && _.Qm._open && "inline" != a.style && !0 !== a.inline) a = a.container, b = !(a && ("string" == typeof a && document.getElementById(a) || document == (a.ownerDocument || a.document)));
            a = b
        }
        return a
    };
    Gp = function(a, b) {
        var c = {};
        b = b.params || {};
        for (var d in a) "#" == d.charAt(0) && (c[d.substring(1)] = a[d]), 0 == d.indexOf("fr-") && (c[d.substring(3)] = a[d]), "#" == b[d] && (c[d] = a[d]);
        for (var e in c) delete a["fr-" + e], delete a["#" + e], delete a[e];
        return c
    };
    Hp = function(a) {
        if (":" == a.charAt(0)) {
            var b = _.R("iframes/" + a.substring(1));
            a = {};
            _.xe(b, a);
            (b = a.url) && (a.url = _.Hj(b));
            a.params || (a.params = {});
            return a
        }
        return {
            url: _.Hj(a)
        }
    };
    Jp = function(a) {
        function b() {}
        b.prototype = Ip.prototype;
        a.prototype = new b
    };
    Kp = function(a) {
        return _.S.Rs[a]
    };
    Lp = function(a, b) {
        _.S.Rs[a] = b
    };
    Np = function(a) {
        a = a || {};
        "auto" === a.height && (a.height = _.sp.getHeight());
        var b = window && Mp && Mp.Ma();
        b ? b.dN(a.width || 0, a.height || 0) : _.Qm && _.Qm._resizeMe && _.Qm._resizeMe(a)
    };
    Op = function(a) {
        xp(a)
    };
    _.Pp = function() {
        return _.pe.location.origin || _.pe.location.protocol + "//" + _.pe.location.host
    };
    Qp = function(a) {
        var b = _.ze(a.location.href, "urlindex");
        if (b = _.ue(_.Fe, "fUrl", [])[parseInt(b, 10)]) {
            var c = a.location.hash;
            b += /#/.test(b) ? c.replace(/^#/, "&") : c;
            a.location.replace(b)
        }
    };
    if (window.ToolbarApi) Mp = window.ToolbarApi, Mp.Ma = window.ToolbarApi.getInstance, Mp.prototype = window.ToolbarApi.prototype, _.h = Mp.prototype, _.h.openWindow = Mp.prototype.openWindow, _.h.bI = Mp.prototype.closeWindow, _.h.WN = Mp.prototype.setOnCloseHandler, _.h.OH = Mp.prototype.canClosePopup, _.h.dN = Mp.prototype.resizeWindow;
    else {
        var Mp = function() {},
            Rp = null;
        Mp.Ma = function() {
            !Rp && window.external && window.external.GTB_IsToolbar && (Rp = new Mp);
            return Rp
        };
        _.h = Mp.prototype;
        _.h.openWindow = function(a) {
            return window.external.GTB_OpenPopup &&
                window.external.GTB_OpenPopup(a)
        };
        _.h.bI = function(a) {
            window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
        };
        _.h.WN = function(a, b) {
            window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
        };
        _.h.OH = function(a) {
            return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
        };
        _.h.dN = function(a, b) {
            return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
        };
        window.ToolbarApi = Mp;
        window.ToolbarApi.getInstance = Mp.Ma
    };
    var Sp = function() {
            _.Qf.register("_noop_echo", function() {
                this.callback(_.S.TV(_.S.wk[this.f]))
            })
        },
        Tp = function() {
            window.setTimeout(function() {
                _.Qf.call("..", "_noop_echo", _.S.n_)
            }, 0)
        },
        Dp = function(a, b, c) {
            var d = function(e) {
                var f = Array.prototype.slice.call(arguments, 0),
                    g = f[f.length - 1];
                if ("function" === typeof g) {
                    var k = g;
                    f.pop()
                }
                f.unshift(b, a, k, c);
                _.Qf.call.apply(_.Qf, f)
            };
            d._iframe_wrapped_rpc_ = !0;
            return d
        },
        Bp = function(a) {
            _.S.Uw[a] || (_.S.Uw[a] = {}, _.Qf.register(a, function(b, c) {
                var d = this.f;
                if (!("string" != typeof b ||
                        b in {} || d in {})) {
                    var e = this.callback,
                        f = _.S.Uw[a][d],
                        g;
                    f && Object.hasOwnProperty.call(f, b) ? g = f[b] : Object.hasOwnProperty.call(_.S.Pn, a) && (g = _.S.Pn[a]);
                    if (g) return d = Array.prototype.slice.call(arguments, 1), g._iframe_wrapped_rpc_ && e && d.push(e), g.apply({}, d)
                }
                _.fb(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
                return null
            }));
            return _.S.Uw[a]
        };
    _.S.hT = function(a, b, c) {
        var d = Array.prototype.slice.call(arguments);
        _.S.IJ(function(e) {
            e.sameOrigin && (d.unshift("/" + e.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host), _.Qf.call.apply(_.Qf, d))
        })
    };
    _.S.L_ = function(a, b) {
        _.Qf.register(a, b)
    };
    var wp = /^[-_.0-9A-Za-z]+$/,
        Up = {
            open: "open",
            onready: "ready",
            close: "close",
            onresize: "resize",
            onOpen: "open",
            onReady: "ready",
            onClose: "close",
            onResize: "resize",
            onRenderStart: "renderstart"
        },
        Vp = {
            onBeforeParentOpen: "beforeparentopen"
        },
        Wp = {
            onOpen: function(a) {
                var b = a.Sb();
                a.Nf(b.container || b.element);
                return a
            },
            onClose: function(a) {
                a.remove()
            }
        };
    _.S.Nl = function(a) {
        var b = _.ve();
        _.xe(_.vj, b);
        _.xe(a, b);
        return b
    };
    var Ip = function(a, b, c, d, e, f, g, k) {
        this.config = Hp(a);
        this.openParams = this.Xr = b || {};
        this.params = c || {};
        this.methods = d;
        this.Ex = !1;
        Xp(this, b.style);
        this.Sp = {};
        Yp(this, function() {
            var l;
            (l = this.Xr.style) && _.S.Rs[l] ? l = _.S.Rs[l] : l ? (_.db(['Missing handler for style "', l, '". Continuing with default handler.'].join("")), l = null) : l = Wp;
            if (l) {
                if ("function" === typeof l) var m = l(this);
                else {
                    var n = {};
                    for (m in l) {
                        var p = l[m];
                        n[m] = "function" === typeof p ? _.Te.makeClosure(l, p, this) : p
                    }
                    m = n
                }
                for (var t in e) l = m[t], "function" === typeof l &&
                    Zp(this, e[t], _.Te.makeClosure(m, l))
            }
            f && Zp(this, "close", f)
        });
        this.lj = this.ac = g;
        this.uD = (k || []).slice();
        g && this.uD.unshift(g.getId())
    };
    Ip.prototype.Sb = function() {
        return this.Xr
    };
    Ip.prototype.getParams = function() {
        return this.params
    };
    Ip.prototype.cv = function() {
        return this.methods
    };
    Ip.prototype.Nc = function() {
        return this.lj
    };
    var Xp = function(a, b) {
            a.Ex || ((b = b && !_.S.Rs[b] && _.S.Tz[b]) ? (a.Sz = [], b(function() {
                a.Ex = !0;
                for (var c = 0, d = a.Sz.length; c < d; ++c) a.Sz[c].call(a)
            })) : a.Ex = !0)
        },
        Yp = function(a, b) {
            a.Ex ? b.call(a) : a.Sz.push(b)
        };
    Ip.prototype.Tc = function(a, b) {
        Yp(this, function() {
            Zp(this, a, b)
        })
    };
    var Zp = function(a, b, c) {
        a.Sp[b] = a.Sp[b] || [];
        a.Sp[b].push(c)
    };
    Ip.prototype.Em = function(a, b) {
        Yp(this, function() {
            var c = this.Sp[a];
            if (c)
                for (var d = 0, e = c.length; d < e; ++d)
                    if (c[d] === b) {
                        c.splice(d, 1);
                        break
                    }
        })
    };
    Ip.prototype.fh = function(a, b) {
        var c = this.Sp[a];
        if (c)
            for (var d = Array.prototype.slice.call(arguments, 1), e = 0, f = c.length; e < f; ++e) try {
                var g = c[e].apply({}, d)
            } catch (k) {
                _.fb(['Exception when calling callback "', a, '" with exception "', k.name, ": ", k.message, '".'].join("")), vp(k)
            }
        return g
    };
    var $p = function(a) {
            return "number" == typeof a ? {
                value: a,
                MA: a + "px"
            } : "100%" == a ? {
                value: 100,
                MA: "100%",
                jL: !0
            } : null
        },
        aq = function(a, b, c, d, e, f, g) {
            Ip.call(this, a, b, c, d, Up, e, f, g);
            this.id = b.id || tp();
            this.rs = b.rpctoken && String(b.rpctoken) || Math.round(1E9 * (0, _.Ag)());
            this.VX = Gp(this.params, this.config);
            this.DA = {};
            Yp(this, function() {
                this.fh("open");
                _.Ap(this.DA, this)
            })
        };
    Jp(aq);
    _.h = aq.prototype;
    _.h.Nf = function(a, b) {
        if (!this.config.url) return _.fb("Cannot open iframe, empty URL."), this;
        var c = this.id;
        _.S.wk[c] = this;
        var d = _.Ap(this.methods);
        d._ready = this.Dw;
        d._close = this.close;
        d._open = this.Ew;
        d._resizeMe = this.Fo;
        d._renderstart = this.mM;
        var e = this.VX;
        this.rs && (e.rpctoken = this.rs);
        e._methods = _.Cp(d, c, "", this, !0);
        this.el = a = "string" === typeof a ? document.getElementById(a) : a;
        d = {};
        d.id = c;
        if (b) {
            d.attributes = b;
            var f = b.style;
            if ("string" === typeof f) {
                if (f) {
                    var g = [];
                    f = f.split(";");
                    for (var k = 0, l = f.length; k <
                        l; ++k) {
                        var m = f[k];
                        if (0 != m.length || k + 1 != l) m = m.split(":"), 2 == m.length && m[0].match(/^[ a-zA-Z_-]+$/) && m[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? g.push(m.join(":")) : _.fb(['Iframe style "', f[k], '" not allowed.'].join(""))
                    }
                    g = g.join(";")
                } else g = "";
                b.style = g
            }
        }
        this.Sb().allowPost && (d.allowPost = !0);
        this.Sb().forcePost && (d.forcePost = !0);
        d.queryParams = this.params;
        d.fragmentParams = e;
        d.paramsSerializer = up;
        this.jh = _.Jj(this.config.url, a, d);
        a = this.jh.getAttribute("data-postorigin") || this.jh.src;
        _.S.wk[c] = this;
        _.Qf.setAuthToken(this.id,
            this.rs);
        _.Qf.setRelayUrl(this.id, a);
        return this
    };
    _.h.xe = function(a, b) {
        this.DA[a] = b
    };
    _.h.getId = function() {
        return this.id
    };
    _.h.Ia = function() {
        return this.jh
    };
    _.h.Za = function() {
        return this.el
    };
    _.h.kf = function(a) {
        this.el = a
    };
    _.h.Dw = function(a) {
        var b = Ep(a, this.id, "");
        this.lj && "function" == typeof this.methods._ready && (a._methods = _.Cp(b, this.lj.getId(), this.id, this, !1), this.methods._ready(a));
        _.Ap(a, this);
        _.Ap(b, this);
        this.fh("ready", a)
    };
    _.h.mM = function(a) {
        this.fh("renderstart", a)
    };
    _.h.close = function(a) {
        a = this.fh("close", a);
        delete _.S.wk[this.id];
        return a
    };
    _.h.remove = function() {
        var a = document.getElementById(this.id);
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    _.h.Ew = function(a) {
        var b = Ep(a.params, this.id, a.proxyId);
        delete a.params._methods;
        "_parent" == a.openParams.anchor && (a.openParams.anchor = this.el);
        if (Fp(a.openParams)) new bq(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain);
        else {
            var c = new aq(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain),
                d = this;
            Yp(c, function() {
                var e = {
                        childId: c.getId()
                    },
                    f = c.DA;
                f._toclose = c.close;
                e._methods = _.Cp(f, d.id, c.id, c, !1);
                b._onopen(e)
            })
        }
    };
    _.h.Fo = function(a) {
        if (void 0 === this.fh("resize", a) && this.jh) {
            var b = $p(a.width);
            null != b && (this.jh.style.width = b.MA);
            a = $p(a.height);
            null != a && (this.jh.style.height = a.MA);
            this.jh.parentElement && (null != b && b.jL || null != a && a.jL) && (this.jh.parentElement.style.display = "block")
        }
    };
    var bq = function(a, b, c, d, e, f, g) {
        Ip.call(this, a, b, c, d, Vp, e, f, g);
        this.url = a;
        this.Qm = null;
        this.OD = tp();
        Yp(this, function() {
            this.fh("beforeparentopen");
            var k = _.Ap(this.methods);
            k._onopen = this.d_;
            k._ready = this.Dw;
            k._onclose = this.b_;
            this.params._methods = _.Cp(k, "..", this.OD, this, !0);
            k = {};
            for (m in this.params) k[m] = up(this.params[m]);
            var l = this.config.url;
            if (this.Xr.hideUrlFromParent) {
                var m = window.name;
                var n = l;
                l = _.jj(this.config.url, this.params, {}, up);
                var p = k;
                k = {};
                k._methods = p._methods;
                k["#opener"] = p["#opener"];
                k["#urlindex"] = p["#urlindex"];
                k["#opener"] && void 0 != p["#urlindex"] ? (k["#opener"] = m + "," + k["#opener"], m = n) : (n = _.ue(_.Fe, "fUrl", []), p = n.length, n[p] = l, _.Fe.rUrl = Qp, k["#opener"] = m, k["#urlindex"] = p, m = _.xg(_.pe.location.href), l = _.R("iframes/relay_url_" + encodeURIComponent(m)) || "/_/gapi/sibling/1/frame.html", m += l);
                l = m
            }
            _.Qm._open({
                url: l,
                openParams: this.Xr,
                params: k,
                proxyId: this.OD,
                openedByProxyChain: this.uD
            })
        })
    };
    Jp(bq);
    bq.prototype.iW = function() {
        return this.Qm
    };
    bq.prototype.d_ = function(a) {
        this.Qm = a.childId;
        var b = Ep(a, "..", this.Qm);
        _.Ap(b, this);
        this.close = b._toclose;
        _.S.wk[this.Qm] = this;
        this.lj && this.methods._onopen && (a._methods = _.Cp(b, this.lj.getId(), this.Qm, this, !1), this.methods._onopen(a))
    };
    bq.prototype.Dw = function(a) {
        var b = String(this.Qm),
            c = Ep(a, "..", b);
        _.Ap(a, this);
        _.Ap(c, this);
        this.fh("ready", a);
        this.lj && this.methods._ready && (a._methods = _.Cp(c, this.lj.getId(), b, this, !1), this.methods._ready(a))
    };
    bq.prototype.b_ = function(a) {
        if (this.lj && this.methods._onclose) this.methods._onclose(a);
        else return a = this.fh("close", a), delete _.S.wk[this.Qm], a
    };
    var cq = function(a, b, c, d, e, f, g) {
        Ip.call(this, a, b, c, d, Vp, f, g);
        this.id = b.id || tp();
        this.P2 = e;
        d._close = this.close;
        this.onClosed = this.fM;
        this.qP = 0;
        Yp(this, function() {
            this.fh("beforeparentopen");
            var k = _.Ap(this.methods);
            this.params._methods = _.Cp(k, "..", this.OD, this, !0);
            k = {};
            k.queryParams = this.params;
            a = _.Aj(_.qe, this.config.url, this.id, k);
            var l = e.openWindow(a);
            this.canAutoClose = function(m) {
                m(e.OH(l))
            };
            e.WN(l, this);
            this.qP = l
        })
    };
    Jp(cq);
    cq.prototype.close = function(a) {
        a = this.fh("close", a);
        this.P2.bI(this.qP);
        return a
    };
    cq.prototype.fM = function() {
        this.fh("close")
    };
    (function() {
        _.S.wk = {};
        _.S.Rs = {};
        _.S.Tz = {};
        _.S.LK = 0;
        _.S.Uw = {};
        _.S.Pn = {};
        _.S.Kw = null;
        _.S.Jw = [];
        _.S.n_ = function(c) {
            var d = !1;
            try {
                if (null != c) {
                    var e = window.parent.frames[c.id];
                    d = e.iframer.id == c.id && e.iframes.openedId_(_.Qm.id)
                }
            } catch (f) {}
            try {
                _.S.Kw = {
                    origin: this.origin,
                    referer: this.referer,
                    claimedOpenerId: c && c.id,
                    claimedOpenerProxyChain: c && c.proxyChain || [],
                    sameOrigin: d
                };
                for (c = 0; c < _.S.Jw.length; ++c) _.S.Jw[c](_.S.Kw);
                _.S.Jw = []
            } catch (f) {
                vp(f)
            }
        };
        _.S.TV = function(c) {
            var d = c && c.lj,
                e = null;
            d && (e = {}, e.id = d.getId(),
                e.proxyChain = c.uD);
            return e
        };
        Sp();
        if (window.parent != window) {
            var a = _.Te.getUrlParameters();
            a.gcv && xp(a.gcv);
            var b = a.jsh;
            b && yp(b);
            _.Ap(Ep(a, "..", ""), _.Qm);
            _.Ap(a, _.Qm);
            Tp()
        }
        _.S.kb = Kp;
        _.S.Zb = Lp;
        _.S.u1 = Op;
        _.S.resize = Np;
        _.S.hV = function(c) {
            return _.S.Tz[c]
        };
        _.S.CE = function(c, d) {
            _.S.Tz[c] = d
        };
        _.S.cN = Np;
        _.S.X1 = Op;
        _.S.uv = {};
        _.S.uv.get = Kp;
        _.S.uv.set = Lp;
        _.S.allow = function(c, d) {
            Bp(c);
            _.S.Pn[c] = d || window[c]
        };
        _.S.lba = function(c) {
            delete _.S.Pn[c]
        };
        _.S.open = function(c, d, e, f, g, k) {
            3 == arguments.length ? f = {} : 4 == arguments.length &&
                "function" === typeof f && (g = f, f = {});
            var l = "bubble" === d.style && Mp ? Mp.Ma() : null;
            return l ? new cq(c, d, e, f, l, g, k) : Fp(d) ? new bq(c, d, e, f, g, k) : new aq(c, d, e, f, g, k)
        };
        _.S.close = function(c, d) {
            _.Qm && _.Qm._close && _.Qm._close(c, d)
        };
        _.S.ready = function(c, d, e) {
            2 == arguments.length && "function" === typeof d && (e = d, d = {});
            var f = c || {};
            "height" in f || (f.height = _.sp.getHeight());
            f._methods = _.Cp(d || {}, "..", "", _.Qm, !0);
            _.Qm && _.Qm._ready && _.Qm._ready(f, e)
        };
        _.S.IJ = function(c) {
            _.S.Kw ? c(_.S.Kw) : _.S.Jw.push(c)
        };
        _.S.h_ = function(c) {
            return !!_.S.wk[c]
        };
        _.S.sV = function() {
            return ["https://ssl.gstatic.com/gb/js/", _.R("googleapis.config/gcv")].join("")
        };
        _.S.MM = function(c) {
            var d = {
                mouseover: 1,
                mouseout: 1
            };
            if (_.Qm._event)
                for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    f in d && document.addEventListener(f, function(g) {
                        _.Qm._event({
                            event: g.type,
                            timestamp: (new Date).getTime()
                        })
                    }, !0)
                }
        };
        _.S.H1 = yp;
        _.S.wE = zp;
        _.S.BL = vp;
        _.S.PK = _.Qm
    })();
    _.z("iframes.allow", _.S.allow);
    _.z("iframes.callSiblingOpener", _.S.hT);
    _.z("iframes.registerForOpenedSibling", _.S.L_);
    _.z("iframes.close", _.S.close);
    _.z("iframes.getGoogleConnectJsUri", _.S.sV);
    _.z("iframes.getHandler", _.S.kb);
    _.z("iframes.getDeferredHandler", _.S.hV);
    _.z("iframes.getParentInfo", _.S.IJ);
    _.z("iframes.iframer", _.S.PK);
    _.z("iframes.open", _.S.open);
    _.z("iframes.openedId_", _.S.h_);
    _.z("iframes.propagate", _.S.MM);
    _.z("iframes.ready", _.S.ready);
    _.z("iframes.resize", _.S.resize);
    _.z("iframes.setGoogleConnectJsVersion", _.S.u1);
    _.z("iframes.setBootstrapHint", _.S.wE);
    _.z("iframes.setJsHint", _.S.H1);
    _.z("iframes.setHandler", _.S.Zb);
    _.z("iframes.setDeferredHandler", _.S.CE);
    _.z("IframeBase", Ip);
    _.z("IframeBase.prototype.addCallback", Ip.prototype.Tc);
    _.z("IframeBase.prototype.getMethods", Ip.prototype.cv);
    _.z("IframeBase.prototype.getOpenerIframe", Ip.prototype.Nc);
    _.z("IframeBase.prototype.getOpenParams", Ip.prototype.Sb);
    _.z("IframeBase.prototype.getParams", Ip.prototype.getParams);
    _.z("IframeBase.prototype.removeCallback", Ip.prototype.Em);
    _.z("Iframe", aq);
    _.z("Iframe.prototype.close", aq.prototype.close);
    _.z("Iframe.prototype.exposeMethod", aq.prototype.xe);
    _.z("Iframe.prototype.getId", aq.prototype.getId);
    _.z("Iframe.prototype.getIframeEl", aq.prototype.Ia);
    _.z("Iframe.prototype.getSiteEl", aq.prototype.Za);
    _.z("Iframe.prototype.openInto", aq.prototype.Nf);
    _.z("Iframe.prototype.remove", aq.prototype.remove);
    _.z("Iframe.prototype.setSiteEl", aq.prototype.kf);
    _.z("Iframe.prototype.addCallback", aq.prototype.Tc);
    _.z("Iframe.prototype.getMethods", aq.prototype.cv);
    _.z("Iframe.prototype.getOpenerIframe", aq.prototype.Nc);
    _.z("Iframe.prototype.getOpenParams", aq.prototype.Sb);
    _.z("Iframe.prototype.getParams", aq.prototype.getParams);
    _.z("Iframe.prototype.removeCallback", aq.prototype.Em);
    _.z("IframeProxy", bq);
    _.z("IframeProxy.prototype.getTargetIframeId", bq.prototype.iW);
    _.z("IframeProxy.prototype.addCallback", bq.prototype.Tc);
    _.z("IframeProxy.prototype.getMethods", bq.prototype.cv);
    _.z("IframeProxy.prototype.getOpenerIframe", bq.prototype.Nc);
    _.z("IframeProxy.prototype.getOpenParams", bq.prototype.Sb);
    _.z("IframeProxy.prototype.getParams", bq.prototype.getParams);
    _.z("IframeProxy.prototype.removeCallback", bq.prototype.Em);
    _.z("IframeWindow", cq);
    _.z("IframeWindow.prototype.close", cq.prototype.close);
    _.z("IframeWindow.prototype.onClosed", cq.prototype.fM);
    _.z("iframes.util.getTopMostAccessibleWindow", _.S.util.TJ);
    _.z("iframes.handlers.get", _.S.uv.get);
    _.z("iframes.handlers.set", _.S.uv.set);
    _.z("iframes.resizeMe", _.S.cN);
    _.z("iframes.setVersionOverride", _.S.X1);
    Ip.prototype.send = function(a, b, c) {
        _.S.qN(this, a, b, c)
    };
    _.Qm.send = function(a, b, c) {
        _.S.qN(_.Qm, a, b, c)
    };
    Ip.prototype.register = function(a, b) {
        var c = this;
        c.Tc(a, function(d) {
            b.call(c, d)
        })
    };
    _.S.qN = function(a, b, c, d) {
        var e = [];
        void 0 !== c && e.push(c);
        d && e.push(function(f) {
            d.call(this, [f])
        });
        a[b] && a[b].apply(a, e)
    };
    _.S.rp = function() {
        return !0
    };
    _.z("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.S.rp);
    _.z("IframeBase.prototype.send", Ip.prototype.send);
    _.z("IframeBase.prototype.register", Ip.prototype.register);
    _.z("Iframe.prototype.send", aq.prototype.send);
    _.z("Iframe.prototype.register", aq.prototype.register);
    _.z("IframeProxy.prototype.send", bq.prototype.send);
    _.z("IframeProxy.prototype.register", bq.prototype.register);
    _.z("IframeWindow.prototype.send", cq.prototype.send);
    _.z("IframeWindow.prototype.register", cq.prototype.register);
    _.z("iframes.iframer.send", _.S.PK.send);

    var ht = _.S.Zb,
        it = {
            open: function(a) {
                var b = _.Km(a.Sb());
                return a.Nf(b, {
                    style: _.Lm(b)
                })
            },
            attach: function(a, b) {
                var c = _.Km(a.Sb()),
                    d = b.id,
                    e = b.getAttribute("data-postorigin") || b.src,
                    f = /#(?:.*&)?rpctoken=(\d+)/.exec(e);
                f = f && f[1];
                a.id = d;
                a.rs = f;
                a.el = c;
                a.jh = b;
                _.S.wk[d] = a;
                b = _.Ap(a.methods);
                b._ready = a.Dw;
                b._close = a.close;
                b._open = a.Ew;
                b._resizeMe = a.Fo;
                b._renderstart = a.mM;
                _.Cp(b, d, "", a, !0);
                _.Qf.setAuthToken(a.id, a.rs);
                _.Qf.setRelayUrl(a.id, e);
                c = _.S.Nl({
                    style: _.Lm(c)
                });
                for (var g in c) Object.prototype.hasOwnProperty.call(c,
                    g) && ("style" == g ? a.jh.style.cssText = c[g] : a.jh.setAttribute(g, c[g]))
            }
        };
    it.onready = _.Mm;
    it.onRenderStart = _.Mm;
    it.close = _.Nm;
    ht("inline", it);

    _.ug = (window.gapi || {}).load;

    var Sm, Tm, Um, Vm, Wm, Xm, an, bn;
    Sm = function(a) {
        if (_.te.test(Object.keys)) return Object.keys(a);
        var b = [],
            c;
        for (c in a) _.we(a, c) && b.push(c);
        return b
    };
    Tm = function(a, b) {
        if (!_.Nf()) try {
            a()
        } catch (c) {}
        _.Of(b)
    };
    Um = {
        button: !0,
        div: !0,
        span: !0
    };
    Vm = function(a) {
        var b = _.ue(_.Fe, "sws", []);
        return 0 <= _.Ri.call(b, a)
    };
    Wm = function(a) {
        return _.ue(_.Fe, "watt", _.ve())[a]
    };
    Xm = function(a) {
        return function(b, c) {
            return a ? _.Fj()[c] || a[c] || "" : _.Fj()[c] || ""
        }
    };
    _.Ym = {
        callback: 1,
        clientid: 1,
        cookiepolicy: 1,
        openidrealm: -1,
        includegrantedscopes: -1,
        requestvisibleactions: 1,
        scope: 1
    };
    _.Zm = !1;
    _.$m = function() {
        if (!_.Zm) {
            for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                var c = a[b].name.toLowerCase();
                if (_.qd(c, "google-signin-")) {
                    c = c.substring(14);
                    var d = a[b].content;
                    _.Ym[c] && d && (_.Pm[c] = d)
                }
            }
            if (window.self !== window.top) {
                a = document.location.toString();
                for (var e in _.Ym) 0 < _.Ym[e] && (b = _.ze(a, e, "")) && (_.Pm[e] = b)
            }
            _.Zm = !0
        }
        e = _.ve();
        _.xe(_.Pm, e);
        return e
    };
    an = function(a) {
        var b;
        a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
        return _.kj(document, b ? b : a)
    };
    bn = function(a) {
        a = a || "canonical";
        for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                f = e.getAttribute("rel");
            if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = an(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e
        }
        return window.location.href
    };
    _.cn = function() {
        return window.location.origin || window.location.protocol + "//" + window.location.host
    };
    _.dn = function(a, b, c, d) {
        return (a = "string" == typeof a ? a : void 0) ? an(a) : bn(d)
    };
    _.en = function(a, b, c) {
        null == a && c && (a = c.db, null == a && (a = c.gwidget && c.gwidget.db));
        return a || void 0
    };
    _.fn = function(a, b, c) {
        null == a && c && (a = c.ecp, null == a && (a = c.gwidget && c.gwidget.ecp));
        return a || void 0
    };
    _.gn = function(a, b, c) {
        return _.dn(a, b, c, b.action ? void 0 : "publisher")
    };
    var hn, jn, kn, ln, mn, nn, pn, on;
    hn = {
        se: "0"
    };
    jn = {
        post: !0
    };
    kn = {
        style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
    };
    ln = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");
    mn = _.ue(_.Fe, "WI", _.ve());
    nn = ["style", "data-gapiscan"];
    pn = function(a) {
        for (var b = _.ve(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
            var f = a.attributes[d],
                g = f.name,
                k = f.value;
            0 <= _.Ri.call(nn, g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
        }
        a = a.style;
        (c = on(a && a.height)) && (b.height = String(c));
        (a = on(a && a.width)) && (b.width = String(a));
        return b
    };
    _.rn = function(a, b, c, d, e, f) {
        if (c.rd) var g = b;
        else g = document.createElement("div"), b.setAttribute("data-gapistub", !0), g.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(g, b);
        f.siteElement = g;
        g.id || (g.id = _.qn(a));
        b = _.ve();
        b[">type"] = a;
        _.xe(c, b);
        a = _.Jj(d, g, e);
        f.iframeNode = a;
        f.id = a.getAttribute("id")
    };
    _.qn = function(a) {
        _.ue(mn, a, 0);
        return "___" + a + "_" + mn[a]++
    };
    on = function(a) {
        var b = void 0;
        "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
        return b
    };
    var sn = function() {},
        vn = function(a) {
            var b = a.zn,
                c = function(l) {
                    c.H.constructor.call(this, l);
                    var m = this.Ih.length;
                    this.Ug = [];
                    for (var n = 0; n < m; ++n) this.Ih[n].hba || (this.Ug[n] = new this.Ih[n](l))
                };
            _.G(c, b);
            for (var d = []; a && a !== Object;) {
                if (b = a.zn) {
                    b.Ih && (_.Pe(d, b.Ih), _.Qe(d));
                    var e = b.prototype,
                        f;
                    for (f in e)
                        if (e.hasOwnProperty(f) && _.lb(e[f]) && e[f] !== b) {
                            var g = !!e[f].Saa,
                                k = tn(f, e, d, g);
                            (g = un(f, e, k, g)) && (c.prototype[f] = g)
                        }
                }
                a = a === Object ? Object : Object.getPrototypeOf ? Object.getPrototypeOf(a.prototype).constructor ||
                    Object : a.H && a.H.constructor || Object
            }
            c.prototype.Ih = d;
            return c
        },
        tn = function(a, b, c, d) {
            for (var e = [], f = 0; f < c.length && (c[f].prototype[a] === b[a] || (e.push(f), !d)); ++f);
            return e
        },
        un = function(a, b, c, d) {
            return c.length ? d ? function(e) {
                var f = this.Ug[c[0]];
                return f ? f[a].apply(this.Ug[c[0]], arguments) : this.Ih[c[0]].prototype[a].apply(this, arguments)
            } : b[a].jT ? function(e) {
                a: {
                    var f = Array.prototype.slice.call(arguments, 0);
                    for (var g = 0; g < c.length; ++g) {
                        var k = this.Ug[c[g]];
                        if (k = k ? k[a].apply(k, f) : this.Ih[c[g]].prototype[a].apply(this,
                                f)) {
                            f = k;
                            break a
                        }
                    }
                    f = !1
                }
                return f
            } : b[a].iT ? function(e) {
                a: {
                    var f = Array.prototype.slice.call(arguments, 0);
                    for (var g = 0; g < c.length; ++g) {
                        var k = this.Ug[c[g]];
                        k = k ? k[a].apply(k, f) : this.Ih[c[g]].prototype[a].apply(this, f);
                        if (null != k) {
                            f = k;
                            break a
                        }
                    }
                    f = void 0
                }
                return f
            } : b[a].XL ? function(e) {
                for (var f = Array.prototype.slice.call(arguments, 0), g = 0; g < c.length; ++g) {
                    var k = this.Ug[c[g]];
                    k ? k[a].apply(k, f) : this.Ih[c[g]].prototype[a].apply(this, f)
                }
            } : function(e) {
                for (var f = Array.prototype.slice.call(arguments, 0), g = [], k = 0; k < c.length; ++k) {
                    var l =
                        this.Ug[c[k]];
                    g.push(l ? l[a].apply(l, f) : this.Ih[c[k]].prototype[a].apply(this, f))
                }
                return g
            } : d || b[a].jT || b[a].iT || b[a].XL ? null : wn
        },
        wn = function() {
            return []
        };
    sn.prototype.IA = function(a) {
        if (this.Ug)
            for (var b = 0; b < this.Ug.length; ++b)
                if (this.Ug[b] instanceof a) return this.Ug[b];
        return null
    };
    var xn = function(a) {
        return this.Xa.IA(a)
    };
    var yn, zn, An, Dn, En = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Fn = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    yn = _.ue(_.Fe, "SW", _.ve());
    zn = _.ue(_.Fe, "SA", _.ve());
    An = _.ue(_.Fe, "SM", _.ve());
    Dn = _.ue(_.Fe, "FW", []);
    var Gn = function(a, b) {
            return ("string" === typeof a ? document.getElementById(a) : a) || b
        },
        Ln = function(a, b) {
            var c;
            Hn.ps0 = (new Date).getTime();
            In("ps0");
            a = Gn(a, _.qe);
            var d = _.qe.documentMode;
            if (a.querySelectorAll && (!d || 8 < d)) {
                d = b ? [b] : Sm(yn).concat(Sm(zn)).concat(Sm(An));
                for (var e = [], f = 0; f < d.length; f++) {
                    var g = d[f];
                    e.push(".g-" + g, "g\\:" + g)
                }
                d = a.querySelectorAll(e.join(","))
            } else d = a.getElementsByTagName("*");
            a = _.ve();
            for (e = 0; e < d.length; e++) {
                f = d[e];
                var k = f;
                g = b;
                var l = k.nodeName.toLowerCase(),
                    m = void 0;
                if (k.getAttribute("data-gapiscan")) g =
                    null;
                else {
                    var n = l.indexOf("g:");
                    0 == n ? m = l.substr(2) : (n = (n = String(k.className || k.getAttribute("class"))) && En.exec(n)) && (m = n[1]);
                    g = !m || !(yn[m] || zn[m] || An[m]) || g && m !== g ? null : m
                }
                g && (Fn[g] || 0 == f.nodeName.toLowerCase().indexOf("g:") || 0 != Sm(pn(f)).length) && (f.setAttribute("data-gapiscan", !0), _.ue(a, g, []).push(f))
            }
            for (p in a) Dn.push(p);
            Hn.ps1 = (new Date).getTime();
            In("ps1");
            if (b = Dn.join(":")) try {
                _.ye.load(b, void 0)
            } catch (t) {
                _.We(t);
                return
            }
            e = [];
            for (c in a) {
                d = a[c];
                var p = 0;
                for (b = d.length; p < b; p++) f = d[p], Kn(c, f,
                    pn(f), e, b)
            }
        };
    var Mn = function(a, b) {
            var c = Wm(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : _.ye.load(a, function() {
                var d = Wm(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = _.ye[a].go, "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
            })
        },
        Kn = function(a, b, c, d, e, f, g) {
            switch (Nn(b, a, f)) {
                case 0:
                    a = An[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    Mn(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var k in c) {
                            if (f = _.we(c, k)) f = c[k], f = !!f && "object" === typeof f && (!f.toString ||
                                f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                            if (f) try {
                                c[k] = _.If(c[k])
                            } catch (w) {
                                delete c[k]
                            }
                        }
                        k = !0;
                        c.dontclear && (k = !1);
                        delete c.dontclear;
                        var l;
                        f = {};
                        var m = l = a;
                        "plus" == a && c.action && (l = a + "_" + c.action, m = a + "/" + c.action);
                        (l = _.R("iframes/" + l + "/url")) || (l = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + m + "?usegapi=1");
                        for (n in hn) f[n] = n + "/" + (c[n] || hn[n]) + "/";
                        var n = _.kj(_.qe, l.replace(_.Ej, Xm(f)));
                        m = "iframes/" + a + "/params/";
                        f = {};
                        _.xe(c, f);
                        (l = _.R("lang") || _.R("gwidget/lang")) &&
                        (f.hl = l);
                        jn[a] || (f.origin = _.cn());
                        f.exp = _.R(m + "exp");
                        if (m = _.R(m + "location"))
                            for (l = 0; l < m.length; l++) {
                                var p = m[l];
                                f[p] = _.pe.location[p]
                            }
                        switch (a) {
                            case "plus":
                            case "follow":
                                f.url = _.gn(f.href, c, null);
                                delete f.href;
                                break;
                            case "plusone":
                                m = (m = c.href) ? an(m) : bn();
                                f.url = m;
                                f.db = _.en(c.db, void 0, _.R());
                                f.ecp = _.fn(c.ecp, void 0, _.R());
                                delete f.href;
                                break;
                            case "signin":
                                f.url = bn()
                        }
                        _.Fe.ILI && (f.iloader = "1");
                        delete f["data-onload"];
                        delete f.rd;
                        for (var t in hn) f[t] && delete f[t];
                        f.gsrc = _.R("iframes/:source:");
                        t = _.R("inline/css");
                        "undefined" !== typeof t && 0 < e && t >= e && (f.ic = "1");
                        t = /^#|^fr-/;
                        e = {};
                        for (var r in f) _.we(f, r) && t.test(r) && (e[r.replace(t, "")] = f[r], delete f[r]);
                        r = "q" == _.R("iframes/" + a + "/params/si") ? f : e;
                        t = _.$m();
                        for (var v in t) !_.we(t, v) || _.we(f, v) || _.we(e, v) || (r[v] = t[v]);
                        v = [].concat(ln);
                        r = _.R("iframes/" + a + "/methods");
                        _.Qi(r) && (v = v.concat(r));
                        for (u in c) _.we(c, u) && /^on/.test(u) && ("plus" != a || "onconnect" != u) && (v.push(u), delete f[u]);
                        delete f.callback;
                        e._methods = v.join(",");
                        var u = _.jj(n, f, e);
                        v = g || {};
                        v.allowPost = 1;
                        v.attributes =
                            kn;
                        v.dontclear = !k;
                        g = {};
                        g.userParams = c;
                        g.url = u;
                        g.type = a;
                        _.rn(a, b, c, u, v, g);
                        b = g.id;
                        c = _.ve();
                        c.id = b;
                        c.userParams = g.userParams;
                        c.url = g.url;
                        c.type = g.type;
                        c.state = 1;
                        _.Hm[b] = c;
                        b = g
                    } else b = null;
                    b && ((c = b.id) && d.push(c), Mn(a, b))
            }
        },
        Nn = function(a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (An[b]) {
                    if (Um[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (zn[b]) return 0;
                    if (yn[b]) return 1
                }
            }
            return null
        };
    _.ue(_.ye, "platform", {}).go = function(a, b) {
        Ln(a, b)
    };
    var On = _.ue(_.Fe, "perf", _.ve()),
        Hn = _.ue(On, "g", _.ve()),
        Pn = _.ue(On, "i", _.ve()),
        Qn, Rn, Sn, In, Un, Vn, Wn;
    _.ue(On, "r", []);
    Qn = _.ve();
    Rn = _.ve();
    Sn = function(a, b, c, d) {
        Qn[c] = Qn[c] || !!d;
        _.ue(Rn, c, []);
        Rn[c].push([a, b])
    };
    In = function(a, b, c) {
        var d = On.r;
        "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    };
    Un = function(a, b, c, d) {
        if ("_p" == b) throw Error("C");
        _.Tn(a, b, c, d)
    };
    _.Tn = function(a, b, c, d) {
        Vn(b, c)[a] = d || (new Date).getTime();
        In(a, b, c)
    };
    Vn = function(a, b) {
        a = _.ue(Pn, a, _.ve());
        return _.ue(a, b, _.ve())
    };
    Wn = function(a, b, c) {
        var d = null;
        b && c && (d = Vn(b, c)[a]);
        return d || Hn[a]
    };
    (function() {
        function a(g) {
            this.t = {};
            this.tick = function(k, l, m) {
                this.t[k] = [void 0 != m ? m : (new Date).getTime(), l];
                if (void 0 == m) try {
                    window.console.timeStamp("CSI/" + k)
                } catch (n) {}
            };
            this.tick("start", null, g)
        }
        var b;
        if (window.performance) var c = (b = window.performance.timing) && b.responseStart;
        var d = 0 < c ? new a(c) : new a;
        window.__gapi_jstiming__ = {
            Timer: a,
            load: d
        };
        if (b) {
            var e = b.navigationStart;
            0 < e && c >= e && (window.__gapi_jstiming__.srt = c - e)
        }
        if (b) {
            var f = window.__gapi_jstiming__.load;
            0 < e && c >= e && (f.tick("_wtsrt", void 0, e),
                f.tick("wtsrt_", "_wtsrt", c), f.tick("tbsd_", "wtsrt_"))
        }
        try {
            b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT), f && 0 < e && (f.tick("_tbnd", void 0, window.chrome.csi().startE), f.tick("tbnd_", "_tbnd", e))), null == b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT, f && 0 < e && (f.tick("_tbnd", void 0, window.external.startE), f.tick("tbnd_", "_tbnd", e))), b && (window.__gapi_jstiming__.pt = b)
        } catch (g) {}
    })();
    if (window.__gapi_jstiming__) {
        window.__gapi_jstiming__.CH = {};
        window.__gapi_jstiming__.Z_ = 1;
        var Xn = function(a, b, c) {
                var d = a.t[b],
                    e = a.t.start;
                if (d && (e || c)) return d = a.t[b][0], e = void 0 != c ? c : e[0], Math.round(d - e)
            },
            Yn = function(a, b, c) {
                var d = "";
                window.__gapi_jstiming__.srt && (d += "&srt=" + window.__gapi_jstiming__.srt, delete window.__gapi_jstiming__.srt);
                window.__gapi_jstiming__.pt && (d += "&tbsrt=" + window.__gapi_jstiming__.pt, delete window.__gapi_jstiming__.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" +
                        window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (p) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes)) {
                    e().wasFetchedViaSpdy && (d += "&p=s");
                    if (e().wasNpnNegotiated) {
                        d += "&npn=1";
                        var f = e().npnNegotiatedProtocol;
                        f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                    }
                    e().wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var g = a.t,
                    k = g.start;
                e = [];
                f = [];
                for (var l in g)
                    if ("start" != l && 0 != l.indexOf("_")) {
                        var m =
                            g[l][1];
                        m ? g[m] && f.push(l + "." + Xn(a, l, g[m][0])) : k && e.push(l + "." + Xn(a, l))
                    }
                delete g.start;
                if (b)
                    for (var n in b) d += "&" + n + "=" + b[n];
                (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.__gapi_jstiming__.sn || "gwidget") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
            },
            Zn = function(a, b, c) {
                a = Yn(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.__gapi_jstiming__.Z_++;
                window.__gapi_jstiming__.CH[d] = b;
                b.onload = b.onerror = function() {
                    window.__gapi_jstiming__ && delete window.__gapi_jstiming__.CH[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.__gapi_jstiming__.report = function(a, b, c) {
            var d = document.visibilityState,
                e = "visibilitychange";
            d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
            if ("prerender" == d) {
                var f = !1,
                    g = function() {
                        if (!f) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var k = !1;
                            else Zn(a, b, c), k = !0;
                            k && (f = !0, document.removeEventListener(e,
                                g, !1))
                        }
                    };
                document.addEventListener(e, g, !1);
                return ""
            }
            return Zn(a, b, c)
        }
    };
    var $n = {
            g: "gapi_global",
            m: "gapi_module",
            w: "gwidget"
        },
        ao = function(a, b) {
            this.type = a ? "_p" == a ? "m" : "w" : "g";
            this.name = a;
            this.$o = b
        };
    ao.prototype.key = function() {
        switch (this.type) {
            case "g":
                return this.type;
            case "m":
                return this.type + "." + this.$o;
            case "w":
                return this.type + "." + this.name + this.$o
        }
    };
    var bo = new ao,
        co = navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/),
        eo = _.ue(On, "_c", _.ve()),
        fo = Math.random() < (_.R("csi/rate") || 0),
        ho = function(a, b, c) {
            for (var d = new ao(b, c), e = _.ue(eo, d.key(), _.ve()), f = Rn[a] || [], g = 0; g < f.length; ++g) {
                var k = f[g],
                    l = k[0],
                    m = a,
                    n = b,
                    p = c;
                k = Wn(k[1], n, p);
                m = Wn(m, n, p);
                e[l] = k && m ? m - k : null
            }
            Qn[a] && fo && (go(bo), go(d))
        },
        io = function(a, b) {
            b = b || [];
            for (var c = [], d = 0; d < b.length; d++) c.push(a + b[d]);
            return c
        },
        go = function(a) {
            var b = _.pe.__gapi_jstiming__;
            b.sn = $n[a.type];
            var c = new b.Timer(0);
            a: {
                switch (a.type) {
                    case "g":
                        var d = "global";
                        break a;
                    case "m":
                        d = a.$o;
                        break a;
                    case "w":
                        d = a.name;
                        break a
                }
                d = void 0
            }
            c.name = d;
            d = !1;
            var e = a.key(),
                f = eo[e];
            c.tick("_start", null, 0);
            for (var g in f) c.tick(g, "_start", f[g]), d = !0;
            eo[e] = _.ve();
            d && (g = [], g.push("l" + (_.R("isPlusUser") ? "1" : "0")), d = "m" + (co ? "1" : "0"), g.push(d), "m" == a.type ? g.push("p" + a.$o) : "w" == a.type && (e = "n" + a.$o, g.push(e), "0" == a.$o && g.push(d + e)), g.push("u" + (_.R("isLoggedIn") ? "1" : "0")), a = io("", g), a = io("abc_", a).join(","), b.report(c, {
                e: a
            }))
        };
    Sn("blt", "bs0", "bs1");
    Sn("psi", "ps0", "ps1");
    Sn("rpcqi", "rqe", "rqd");
    Sn("bsprt", "bsrt0", "bsrt1");
    Sn("bsrqt", "bsrt1", "bsrt2");
    Sn("bsrst", "bsrt2", "bsrt3");
    Sn("mli", "ml0", "ml1");
    Sn("mei", "me0", "me1", !0);
    Sn("wcdi", "wrs", "wcdi");
    Sn("wci", "wrs", "wdc");
    Sn("wdi", "wrs", "wrdi");
    Sn("wdt", "bs0", "wrdt");
    Sn("wri", "wrs", "wrri", !0);
    Sn("wrt", "bs0", "wrrt");
    Sn("wji", "wje0", "wje1", !0);
    Sn("wjli", "wjl0", "wjl1");
    Sn("whi", "wh0", "wh1", !0);
    Sn("wai", "waaf0", "waaf1", !0);
    Sn("wadi", "wrs", "waaf1", !0);
    Sn("wadt", "bs0", "waaf1", !0);
    Sn("wprt", "wrt0", "wrt1");
    Sn("wrqt", "wrt1", "wrt2");
    Sn("wrst", "wrt2", "wrt3", !0);
    Sn("fbprt", "fsrt0", "fsrt1");
    Sn("fbrqt", "fsrt1", "fsrt2");
    Sn("fbrst", "fsrt2", "fsrt3", !0);
    Sn("fdns", "fdns0", "fdns1");
    Sn("fcon", "fcon0", "fcon1");
    Sn("freq", "freq0", "freq1");
    Sn("frsp", "frsp0", "frsp1");
    Sn("fttfb", "fttfb0", "fttfb1");
    Sn("ftot", "ftot0", "ftot1", !0);
    var jo = On.r;
    if ("function" !== typeof jo) {
        for (var ko; ko = jo.shift();) ho.apply(null, ko);
        On.r = ho
    };
    var lo = ["div"],
        mo = "onload",
        no = !0,
        oo = !0,
        po = function(a) {
            return a
        },
        qo = null,
        ro = function(a) {
            var b = _.R(a);
            return "undefined" !== typeof b ? b : _.R("gwidget/" + a)
        },
        No, Oo, Po, Qo, Go, Io, Ro, Ho, So, To, Uo, Vo;
    qo = _.R();
    _.R("gwidget");
    var so = ro("parsetags");
    mo = "explicit" === so || "onload" === so ? so : mo;
    var to = ro("google_analytics");
    "undefined" !== typeof to && (no = !!to);
    var uo = ro("data_layer");
    "undefined" !== typeof uo && (oo = !!uo);
    var vo = function() {
            var a = this && this.getId();
            a && (_.Fe.drw = a)
        },
        wo = function() {
            _.Fe.drw = null
        },
        xo = function(a) {
            return function(b) {
                var c = a;
                "number" === typeof b ? c = b : "string" === typeof b && (c = b.indexOf("px"), -1 != c && (b = b.substring(0, c)), c = parseInt(b, 10));
                return c
            }
        },
        yo = function(a) {
            "string" === typeof a && (a = window[a]);
            return "function" === typeof a ? a : null
        },
        zo = function() {
            return ro("lang") || "en-US"
        },
        Ao = function(a) {
            if (!_.S.kb("attach")) {
                var b = {},
                    c = _.S.kb("inline"),
                    d;
                for (d in c) c.hasOwnProperty(d) && (b[d] = c[d]);
                b.open = function(e) {
                    var f =
                        e.Sb().renderData.id;
                    f = document.getElementById(f);
                    if (!f) throw Error("D");
                    return c.attach(e, f)
                };
                _.S.Zb("attach", b)
            }
            a.style = "attach"
        },
        Bo = function() {
            var a = {};
            a.width = [xo(450)];
            a.height = [xo(24)];
            a.onready = [yo];
            a.lang = [zo, "hl"];
            a.iloader = [function() {
                return _.Fe.ILI
            }, "iloader"];
            return a
        }(),
        Eo = function(a) {
            var b = {};
            b.Ne = a[0];
            b.jp = -1;
            b.jda = "___" + b.Ne + "_";
            b.r3 = "g:" + b.Ne;
            b.aca = "g-" + b.Ne;
            b.YM = [];
            b.config = {};
            b.Yt = [];
            b.dP = {};
            b.Lx = {};
            var c = function(e) {
                    for (var f in e)
                        if (_.we(e, f)) {
                            b.config[f] = [yo];
                            b.Yt.push(f);
                            var g =
                                e[f],
                                k = null,
                                l = null,
                                m = null;
                            "function" === typeof g ? k = g : g && "object" === typeof g && (k = g.Pba, l = g.Mx, m = g.GF);
                            m && (b.Yt.push(m), b.config[m] = [yo], b.dP[f] = m);
                            k && (b.config[f] = [k]);
                            l && (b.Lx[f] = l)
                        }
                },
                d = function(e) {
                    for (var f = {}, g = 0; g < e.length; ++g) f[e[g].toLowerCase()] = 1;
                    f[b.r3] = 1;
                    b.jZ = f
                };
            a[1] && (b.parameters = a[1]);
            (function(e) {
                b.config = e;
                for (var f in Bo) Bo.hasOwnProperty(f) && !b.config.hasOwnProperty(f) && (b.config[f] = Bo[f])
            })(a[2] || {});
            a[3] && c(a[3]);
            a[4] && d(a[4]);
            a[5] && (b.Lk = a[5]);
            b.bda = !0 === a[6];
            b.A_ = a[7];
            b.b3 = a[8];
            b.jZ || d(lo);
            b.oD = function(e) {
                b.jp++;
                Un("wrs", b.Ne, String(b.jp));
                var f = [],
                    g = e.element,
                    k = e.config,
                    l = ":" + b.Ne;
                ":plus" == l && e.Ik && e.Ik.action && (l += "_" + e.Ik.action);
                var m = Co(b, k),
                    n = {};
                _.xe(_.$m(), n);
                for (var p in e.Ik) null != e.Ik[p] && (n[p] = e.Ik[p]);
                p = {
                    container: g.id,
                    renderData: e.U_,
                    style: "inline",
                    height: k.height,
                    width: k.width
                };
                Ao(p);
                b.Lk && (f[2] = p, f[3] = n, f[4] = m, b.Lk("i", f));
                l = _.S.open(l, p, n, m);
                Do(b, l, k, g, e.LT);
                f[5] = l;
                b.Lk && b.Lk("e", f)
            };
            return b
        },
        Co = function(a, b) {
            for (var c = {}, d = a.Yt.length - 1; 0 <= d; --d) {
                var e =
                    a.Yt[d],
                    f = b[a.dP[e] || e] || b[e],
                    g = b[e];
                g && f !== g && (f = function(l, m) {
                    return function(n) {
                        m.apply(this, arguments);
                        l.apply(this, arguments)
                    }
                }(f, g));
                f && (c[e] = f)
            }
            for (var k in a.Lx) a.Lx.hasOwnProperty(k) && (c[k] = Fo(c[k] || function() {}, a.Lx[k]));
            c.drefresh = vo;
            c.erefresh = wo;
            return c
        },
        Fo = function(a, b) {
            return function(c) {
                var d = b(c);
                if (d) {
                    var e = c.href || null;
                    if (no) {
                        if (window._gat) try {
                            var f = window._gat._getTrackerByName("~0");
                            f && "UA-XXXXX-X" != f._getAccount() ? f._trackSocial("Google", d, e) : window._gaq && window._gaq.push(["_trackSocial",
                                "Google", d, e
                            ])
                        } catch (k) {}
                        if (window.ga && window.ga.getAll) try {
                            var g = window.ga.getAll();
                            for (f = 0; f < g.length; f++) g[f].send("social", "Google", d, e)
                        } catch (k) {}
                    }
                    if (oo && window.dataLayer) try {
                        window.dataLayer.push({
                            event: "social",
                            socialNetwork: "Google",
                            socialAction: d,
                            socialTarget: e
                        })
                    } catch (k) {}
                }
                a.call(this, c)
            }
        },
        Do = function(a, b, c, d, e) {
            Go(b, c);
            Ho(b, d);
            Io(a, b, e);
            Jo(a.Ne, a.jp.toString(), b);
            (new Ko).Xa.ll(a, b, c, d, e)
        },
        Ko = function() {
            if (!this.Xa) {
                for (var a = this.constructor; a && !a.zn;) a = a.H && a.H.constructor;
                a.zn.uI || (a.zn.uI =
                    vn(a));
                this.Xa = new a.zn.uI(this);
                this.IA || (this.IA = xn)
            }
        },
        Lo = function() {},
        Mo = Ko;
    Lo.H || _.G(Lo, sn);
    Mo.zn = Lo;
    Lo.prototype.ll = function(a) {
        a = a ? a : function() {};
        a.XL = !0;
        return a
    }();
    No = function(a) {
        return _.Ll && "undefined" != typeof _.Ll && a instanceof _.Ll
    };
    Oo = function(a) {
        return No(a) ? "_renderstart" : "renderstart"
    };
    Po = function(a) {
        return No(a) ? "_ready" : "ready"
    };
    Qo = function() {
        return !0
    };
    Go = function(a, b) {
        if (b.onready) {
            var c = !1,
                d = function() {
                    c || (c = !0, b.onready.call(null))
                };
            a.register(Po(a), d, Qo);
            a.register(Oo(a), d, Qo)
        }
    };
    Io = function(a, b, c) {
        var d = a.Ne,
            e = String(a.jp),
            f = !1,
            g = function() {
                f || (f = !0, c && Un("wrdt", d, e), Un("wrdi", d, e))
            };
        b.register(Oo(b), g, Qo);
        var k = !1;
        a = function() {
            k || (k = !0, g(), c && Un("wrrt", d, e), Un("wrri", d, e))
        };
        b.register(Po(b), a, Qo);
        No(b) ? b.register("widget-interactive-" + b.id, a, Qo) : _.Qf.register("widget-interactive-" + b.id, a);
        _.Qf.register("widget-csi-tick-" + b.id, function(l, m, n) {
            "wdc" === l ? Un("wdc", d, e, n) : "wje0" === l ? Un("wje0", d, e, n) : "wje1" === l ? Un("wje1", d, e, n) : "wh0" == l ? _.Tn("wh0", d, e, n) : "wh1" == l ? _.Tn("wh1", d,
                e, n) : "wcdi" == l && _.Tn("wcdi", d, e, n)
        })
    };
    Ro = function(a) {
        return "number" == typeof a ? a + "px" : "100%" == a ? a : null
    };
    Ho = function(a, b) {
        var c = function(d) {
            d = d || a;
            var e = Ro(d.width);
            e && b.style.width != e && (b.style.width = e);
            (d = Ro(d.height)) && b.style.height != d && (b.style.height = d)
        };
        No(a) ? a.YN("onRestyle", c) : (a.register("ready", c, Qo), a.register("renderstart", c, Qo), a.register("resize", c, Qo))
    };
    So = function(a, b) {
        for (var c in Bo)
            if (Bo.hasOwnProperty(c)) {
                var d = Bo[c][1];
                d && !b.hasOwnProperty(d) && (b[d] = a[d])
            }
        return b
    };
    To = function(a, b) {
        var c = {},
            d;
        for (d in a) a.hasOwnProperty(d) && (c[a[d][1] || d] = (a[d] && a[d][0] || po)(b[d.toLowerCase()], b, qo));
        return c
    };
    Uo = function(a) {
        if (a = a.A_)
            for (var b = 0; b < a.length; b++)(new Image).src = a[b]
    };
    Vo = function(a, b) {
        var c = b.userParams,
            d = b.siteElement;
        d || (d = (d = b.iframeNode) && d.parentNode);
        if (d && 1 === d.nodeType) {
            var e = To(a.config, c);
            a.YM.push({
                element: d,
                config: e,
                Ik: So(e, To(a.parameters, c)),
                Hca: 3,
                LT: !!c["data-onload"],
                U_: b
            })
        }
        b = a.YM;
        for (a = a.oD; 0 < b.length;) a(b.shift())
    };
    _.Wo = function(a) {
        var b = Eo(a);
        Uo(b);
        _.nj(b.Ne, function(d) {
            Vo(b, d)
        });
        yn[b.Ne] = !0;
        var c = {
            wa: function(d, e, f) {
                var g = e || {};
                g.type = b.Ne;
                e = g.type;
                delete g.type;
                var k = Gn(d);
                if (k) {
                    d = {};
                    for (var l in g) _.we(g, l) && (d[l.toLowerCase()] = g[l]);
                    d.rd = 1;
                    (l = !!d.ri) && delete d.ri;
                    Kn(e, k, d, [], 0, l, f)
                } else _.We("string" === "gapi." + e + ".render: missing element " + typeof d ? d : "")
            },
            go: function(d) {
                Ln(d, b.Ne)
            },
            Ica: function() {
                var d = _.ue(_.Fe, "WI", _.ve()),
                    e;
                for (e in d) delete d[e]
            }
        };
        a = function() {
            "onload" === mo && c.go()
        };
        Vm(b.Ne) || Tm(a,
            a);
        _.z("gapi." + b.Ne + ".go", c.go);
        _.z("gapi." + b.Ne + ".render", c.wa);
        return c
    };
    var Xo = Vo,
        Yo = function(a, b) {
            a.jp++;
            Un("wrs", a.Ne, String(a.jp));
            var c = b.userParams,
                d = To(a.config, c),
                e = [],
                f = b.iframeNode,
                g = b.siteElement,
                k = Co(a, d),
                l = To(a.parameters, c);
            _.xe(_.$m(), l);
            l = So(d, l);
            c = !!c["data-onload"];
            var m = _.Gl,
                n = _.ve();
            n.renderData = b;
            n.height = d.height;
            n.width = d.width;
            n.id = b.id;
            n.url = b.url;
            n.iframeEl = f;
            n.where = n.container = g;
            n.apis = ["_open"];
            n.messageHandlers = k;
            n.messageHandlersFilter = _.Ul;
            _.Om(n);
            f = l;
            a.Lk && (e[2] = n, e[3] = f, e[4] = k, a.Lk("i", e));
            k = m.Uj(n);
            k.id = b.id;
            k.sx(k, n);
            Do(a, k, d, g, c);
            e[5] =
                k;
            a.Lk && a.Lk("e", e)
        };
    Vo = function(a, b) {
        var c = b.url;
        a.b3 || _.Rm(c) ? _.qm ? Yo(a, b) : (0, _.ug)("gapi.iframes.impl", function() {
            Yo(a, b)
        }) : _.S.open ? Xo(a, b) : (0, _.ug)("iframes", function() {
            Xo(a, b)
        })
    };
    var Zo = function() {
            var a = window;
            return !!a.performance && !!a.performance.getEntries
        },
        Jo = function(a, b, c) {
            if (Zo()) {
                var d = function() {
                        var f = !1;
                        return function() {
                            if (f) return !0;
                            f = !0;
                            return !1
                        }
                    }(),
                    e = function() {
                        d() || window.setTimeout(function() {
                            var f = c.Ia().src;
                            var g = f.indexOf("#"); - 1 != g && (f = f.substring(0, g));
                            f = window.performance.getEntriesByName(f);
                            1 > f.length ? f = null : (f = f[0], f = 0 == f.responseStart ? null : f);
                            if (f) {
                                g = Math.round(f.requestStart);
                                var k = Math.round(f.responseStart),
                                    l = Math.round(f.responseEnd);
                                Un("wrt0",
                                    a, b, Math.round(f.startTime));
                                Un("wrt1", a, b, g);
                                Un("wrt2", a, b, k);
                                Un("wrt3", a, b, l)
                            }
                        }, 1E3)
                    };
                c.register(Oo(c), e, Qo);
                c.register(Po(c), e, Qo)
            }
        };
    _.z("gapi.widget.make", _.Wo);

    var lz, mz, oz, pz, qz, rz, sz, tz, uz, vz, wz, yz, zz, Az, Bz, Cz, Dz, Ez, Fz, Gz, Hz, Iz, Jz, Kz, Lz, Mz, Nz, Oz, Pz, Qz, Rz, Sz, Tz, Uz, Vz, Wz, Xz, Yz, Zz, $z, aA, bA, eA, dA, fA, gA, hA, iA, jA, kA, mA, nA, pA;
    _.nz = function(a, b) {
        if (_.nh && !b) return _.q.atob(a);
        var c = "";
        _.lw(a, function(d) {
            c += String.fromCharCode(d)
        });
        return c
    };
    oz = function(a) {
        var b = String(a("immediate") || "");
        a = String(a("prompt") || "");
        return "true" === b || "none" === a
    };
    pz = function(a) {
        return _.R("enableMultilogin") && a("cookie_policy") && !oz(a) ? !0 : !1
    };
    qz = function() {
        var a, b = null;
        _.Yh.iterate(function(c, d) {
            0 === c.indexOf("G_AUTHUSER_") && (c = _.Zh(c.substring(11)), !a || c.De && !a.De || c.De == a.De && c.Jh > a.Jh) && (a = c, b = d)
        });
        return {
            eT: a,
            authuser: b
        }
    };
    rz = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
    sz = function(a) {
        a = a.toUpperCase();
        for (var b = 0, c = rz.length; b < c; ++b) {
            var d = a.split(rz[b]);
            2 == d.length && "" === d[1] && (a = d[0])
        }
        a = a.replace(/-/g, "_").toUpperCase();
        40 < a.length && (b = new _.Nh, b.AF(a), a = b.Vg().toUpperCase());
        return a
    };
    tz = function(a) {
        if (!a) return [];
        a = a.split("=");
        return a[1] ? a[1].split("|") : []
    };
    uz = function(a) {
        a = a.split(":");
        return {
            clientId: a[0].split("=")[1],
            a1: tz(a[1]),
            ica: tz(a[2]),
            sba: tz(a[3])
        }
    };
    vz = function(a) {
        var b = qz(),
            c = b.eT;
        b = b.authuser;
        var d = a && sz(a);
        if (null !== b) {
            var e;
            _.Yh.iterate(function(g, k) {
                (g = _.$h(g)) && g.xC && (d && g.wT != d || g.De == c.De && g.Jh == c.Jh && (e = k))
            });
            if (e) {
                var f = uz(e);
                a = f && f.a1[Number(b)];
                f = f && f.clientId;
                if (a) return {
                    authuser: b,
                    Sca: a,
                    clientId: f
                }
            }
        }
        return null
    };
    wz = function(a, b) {
        a = _.Jh(a);
        if (!a || !b && a.error) return null;
        b = Math.floor((new Date).getTime() / 1E3);
        return a.expires_at && b > a.expires_at ? null : a
    };
    _.xz = function(a, b) {
        if (b) {
            var c = b;
            var d = a
        } else "string" === typeof a ? d = a : c = a;
        c ? _.nw(c, d) : _.ow(d)
    };
    yz = function(a) {
        if (!a) return null;
        "single_host_origin" !== a && (a = _.Qf.getOrigin(a));
        var b = window.location.hostname,
            c = b,
            d = _.Xh;
        if ("single_host_origin" !== a) {
            c = a.split("://");
            if (2 == c.length) d = "https" === c.shift();
            else return _.We("WARNING invalid cookie_policy: " + a), null;
            c = c[0]
        }
        if (-1 !== c.indexOf(":")) c = b = "";
        else {
            a = "." + c;
            if (b.lastIndexOf(a) !== b.length - a.length) return _.We("Invalid cookie_policy domain: " + c), null;
            c = a;
            b = c.split(".").length - 1
        }
        return {
            domain: c,
            De: d,
            Jh: b
        }
    };
    zz = function(a) {
        var b = yz(a);
        if (!b) return new _.Rh("G_USERSTATE_");
        a = ["G_USERSTATE_", _.Xh && b.De ? "S" : "H", b.Jh].join("");
        var c = _.di[a];
        c || (c = {
            HL: 63072E3
        }, _.xe(_.hi(b), c), c = new _.Oh(a, c), _.di[a] = c, b = c.read(), "undefined" !== typeof b && null !== b && (document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/", c.write(b)));
        return c
    };
    Az = function(a) {
        var b = zz(a).read();
        a = _.ve();
        if (b) {
            b = b.split(":");
            for (var c; c = b.shift();) c = c.split("="), a[c[0]] = c[1]
        }
        return a
    };
    Bz = function(a, b, c) {
        var d = Az(b),
            e = d[a];
        d[a] = "0";
        var f = [];
        _.Fl(d, function(k, l) {
            f.push(l + "=" + k)
        });
        var g = f.join(":");
        b = zz(b);
        g ? b.write(g) : b.clear();
        d[a] !== e && c && c()
    };
    Cz = function(a, b) {
        b = Az(b);
        return "0" == b[a] || "X" == b[a]
    };
    Dz = function(a) {
        a = yz(a.g_user_cookie_policy);
        if (!a || a.De && !_.Xh) a = null;
        else {
            var b = ["G_AUTHUSER_", _.Xh && a.De ? "S" : "H", a.Jh].join(""),
                c = _.ci[b];
            c || (c = new _.Yh(b, _.hi(a)), _.ci[b] = c);
            a = c
        }
        _.Ne("googleapis.config/sessionIndex", null);
        a.clear()
    };
    Ez = function(a) {
        return oz(function(b) {
            return a[b]
        })
    };
    Fz = 0;
    Gz = !1;
    Hz = [];
    Iz = {};
    Jz = {};
    Kz = null;
    Lz = function(a) {
        var b = _.ez;
        return function(c) {
            if (this.f == b && this.t == _.Qf.getAuthToken(this.f) && this.origin == _.Qf.getTargetOrigin(this.f)) return a.apply(this, arguments)
        }
    };
    Mz = function(a) {
        "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true"
    };
    Nz = function(a) {
        if (_.fz && a && !decodeURIComponent(a).startsWith("m;/_/scs/")) throw Error("ua");
    };
    Oz = function(a) {
        var b = _.Te.getUrlParameters,
            c = b(a).jsh;
        if (null != c) return Nz(c), a;
        if (b = String(b().jsh || _.Fe.h || "")) Nz(b), c = (a + "#").indexOf("#"), a = a.substr(0, c) + (-1 !== a.substr(0, c).indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(b) + a.substr(c);
        return a
    };
    Pz = function() {
        return !!_.R("oauth-flow/usegapi")
    };
    Qz = function(a, b) {
        Pz() ? Kz.unregister(a) : _.Qf.unregister(a + ":" + b)
    };
    Rz = function(a, b, c) {
        Pz() ? Kz.register(a, c, _.Ul) : _.Qf.register(a + ":" + b, Lz(c))
    };
    Sz = function() {
        lz.parentNode.removeChild(lz)
    };
    Tz = function(a) {
        var b = lz;
        _.cz(b, [{
            Pw: "-webkit-transform",
            duration: 1,
            timing: "ease",
            delay: 0
        }]);
        _.cz(b, [{
            Pw: "transform",
            duration: 1,
            timing: "ease",
            delay: 0
        }]);
        _.$x(function() {
            b.style.webkitTransform = "translate3d(0px," + a + "px,0px)";
            b.style.transform = "translate3d(0px," + a + "px,0px)"
        }, 0)
    };
    Uz = function() {
        var a = mz + 88;
        Tz(a);
        mz = a
    };
    Vz = function() {
        var a = mz - 88;
        Tz(a);
        mz = a
    };
    Wz = function(a) {
        var b = a ? Uz : Vz,
            c = a ? Vz : Uz;
        a = a ? "-" : "";
        mz = parseInt(a + 88, 10);
        lz.style.webkitTransform = "translate3d(0px," + a + 88 + "px,0px)";
        lz.style.transform = "translate3d(0px," + a + 88 + "px,0px)";
        lz.style.display = "";
        lz.style.visibility = "visible";
        b();
        _.$x(c, 4E3);
        _.$x(Sz, 5E3)
    };
    Xz = function(a) {
        var b = _.R("oauth-flow/toast/position");
        "top" !== b && (b = "bottom");
        var c = document.createElement("div");
        lz = c;
        c.style.cssText = "position:fixed;left:0px;z-index:1000;width:100%;";
        _.Nr(c, "visibility", "hidden");
        _.Nr(c, b, "-40px");
        _.Nr(c, "height", "128px");
        var d = c;
        if ("desktop" == _.R("deviceType")) {
            d = document.createElement("div");
            d.style.cssText = "float:left;position:relative;left:50%;";
            c.appendChild(d);
            var e = document.createElement("div");
            e.style.cssText = "float:left;position:relative;left:-50%";
            d.appendChild(e);
            d = e
        }
        e = "top" == b ? "-" : "";
        mz = parseInt(e + 88, 10);
        lz.style.webkitTransform = "translate3d(0px," + e + 88 + "px,0px)";
        lz.style.transform = "translate3d(0px," + e + 88 + "px,0px)";
        e = window;
        try {
            for (; e.parent != e && e.parent.document;) e = e.parent
        } catch (f) {}
        e = e.document.body;
        try {
            e.insertBefore(c, e.firstChild)
        } catch (f) {}
        _.Gl.fi({
            url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
            queryParams: {
                clientId: a.client_id,
                idToken: a.id_token
            },
            where: d,
            onRestyle: function() {
                "top" === b ? Wz(!0) : Wz(!1)
            }
        })
    };
    Yz = function(a) {
        var b = _.$m(),
            c = b && b.scope;
        b = a && a.scope;
        b = "string" === typeof b ? b.split(" ") : b || [];
        if (c) {
            c = c.split(" ");
            for (var d = 0; d < c.length; ++d) {
                var e = c[d]; - 1 == _.Ri.call(b, e) && b.push(e)
            }
            0 < b.length && (a.scope = b.join(" "))
        }
        return a
    };
    Zz = function(a, b) {
        var c = null;
        a && b && (c = b.client_id = b.client_id || a.client_id, b.scope = b.scope || a.scope, b.g_user_cookie_policy = a.cookie_policy, b.cookie_policy = b.cookie_policy || a.cookie_policy, b.response_type = b.response_type || a.response_type);
        if (b) {
            b.issued_at || (b.issued_at = String(Math.floor((new Date).getTime() / 1E3)));
            var d = parseInt(b.expires_in, 10) || 86400;
            b.error && (d = _.R("oauth-flow/errorMaxAge") || 86400);
            b.expires_in = String(d);
            b.expires_at || (b.expires_at = String(Math.floor((new Date).getTime() / 1E3) + d));
            b._aa || b.error || null != vz(c) || !Ez(a) || (b._aa = "1");
            a = b.status = {};
            a.google_logged_in = !!b.session_state;
            c = a.signed_in = !!b.access_token;
            a.method = c ? b["g-oauth-window"] ? "PROMPT" : "AUTO" : null
        }
        return b
    };
    $z = function(a) {
        a = a && a.id_token;
        if (!a || !a.split(".")[1]) return null;
        a = (a.split(".")[1] + "...").replace(/^((....)+)\.?\.?\.?$/, "$1");
        a = _.Hf(_.nz(a, !0));
        if (!1 === a) throw Error("va");
        return a
    };
    aA = function(a) {
        return (a = $z(a)) ? a.sub : null
    };
    bA = function(a) {
        a && Hz.push(a);
        a = _.ez;
        var b = document.getElementById(a),
            c = (new Date).getTime();
        if (b) {
            if (Fz && 6E4 > c - Fz) return;
            var d = _.Qf.getAuthToken(a);
            d && (Qz("oauth2relayReady", d), Qz("oauth2callback", d));
            b.parentNode.removeChild(b);
            if (/Firefox/.test(navigator.userAgent)) try {
                window.frames[a] = void 0
            } catch (f) {}
            _.gz();
            a = _.ez
        }
        Fz = c;
        var e = String(2147483647 * (0, _.Ag)() | 0);
        b = _.R("oauth-flow/proxyUrl") || _.R("oauth-flow/relayUrl");
        Pz() ? Kz = _.Gl.fi({
            where: _.Te.getBodyElement(),
            url: b,
            id: a,
            attributes: {
                style: {
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                    top: "-100px",
                    display: "none"
                },
                "aria-hidden": "true"
            },
            dontclear: !0
        }) : (b = [b, "?parent=", encodeURIComponent(_.vg.getOrigin(window.location.href)), "#rpctoken=", e, "&forcesecure=1"].join(""), c = _.Te.getBodyElement(), d = _.Te.createIframeElement({
            name: a,
            id: a
        }), d.src = Oz(b), d.style.width = "1px", d.style.height = "1px", d.style.position = "absolute", d.style.top = "-100px", d.tabIndex = -1, Mz(d), c.appendChild(d), _.Qf.setupReceiver(a));
        Rz("oauth2relayReady", e, function() {
            Qz("oauth2relayReady", e);
            var f = Hz;
            if (null !== f) {
                Hz = null;
                for (var g = 0, k = f.length; g < k; ++g) f[g]()
            }
        });
        Rz("oauth2callback", e, function(f) {
            var g = _.Te.getUrlParameters;
            g = g(f);
            var k = g.state;
            f = k.replace(/\|.*$/, "");
            f = {}.hasOwnProperty.call(Jz, f) ? Jz[f] : null;
            g.state = f;
            if (null != g.state) {
                f = Iz[k];
                delete Iz[k];
                k = f && f.key || "token";
                var l = g = Zz(f && f.params, g);
                var m = (m = aA(l)) ? Cz(m, l.cookie_policy) : !1;
                !m && l && 0 <= (" " + (l.scope || "") + " ").indexOf(" https://www.googleapis.com/auth/plus.login ") && _.R("isLoggedIn") && "1" === (l && l._aa) && (l._aa = "0", Gz || (Gz = !0, Xz(l)));
                _.xz(k, g);
                g = wz(k);
                if (f) {
                    k = f.popup;
                    l = f.after_redirect;
                    if (k && "keep_open" != l) try {
                        k.close()
                    } catch (n) {}
                    f.callback && (f.callback(g), f.callback = null)
                }
            }
        })
    };
    _.cA = function(a) {
        null !== Hz ? bA(a) : a && a()
    };
    eA = function(a, b) {
        var c = dA,
            d = aA(a);
        d && (Dz(a), Bz(d, b, function() {
            if (c) {
                var e = {
                    error: "user_signed_out"
                };
                e.client_id = a.client_id;
                e.g_user_cookie_policy = a.g_user_cookie_policy;
                e.scope = a.scope;
                e.response_type = a.response_type;
                e.session_state = a.session_state;
                e = Zz(null, e);
                c(e)
            }
        }))
    };
    dA = function(a) {
        a || (a = wz(void 0, !0));
        a && "object" === typeof a || (a = {
            error: "invalid_request",
            error_description: "no callback data"
        });
        var b = a.error_description;
        b && window.console && (window.console.error(a.error), window.console.error(b));
        a.error || (_.Fe.drw = null);
        _.xz(a);
        if (b = a.authuser) _.R("googleapis.config/sessionIndex"), _.Ne("googleapis.config/sessionIndex", b);
        _.hz.zo(_.iz, a);
        return a
    };
    fA = ["client_id", "cookie_policy", "response_type"];
    gA = "client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state".split(" ");
    hA = function(a) {
        var b = _.Vj(a);
        b.session_state && b.session_state.extraQueryParams && (b.authuser = b.session_state.extraQueryParams.authuser);
        b.session_state = null;
        a.expires_at && (b.expires_at = parseInt(a.expires_at / 1E3).toString());
        a.expires_in && (b.expires_in = a.expires_in.toString());
        a.first_issued_at && (b.issued_at = parseInt(a.first_issued_at / 1E3).toString(), delete b.first_issued_at);
        _.nw(b);
        return b
    };
    iA = function(a) {
        if (void 0 === a.include_granted_scopes) {
            var b = _.R("include_granted_scopes");
            a.include_granted_scopes = !!b
        }
    };
    jA = function(a) {
        window.console && ("function" === typeof window.console.warn ? window.console.warn(a) : "function" === typeof window.console.log && window.console.log(a))
    };
    kA = function(a) {
        var b = a || {},
            c = {};
        (0, _.vb)(gA, function(d) {
            null != b[d] && (c[d] = b[d])
        });
        a = _.R("googleapis/overrideClientId");
        null != a && (c.client_id = a);
        iA(c);
        "string" === typeof b.scope ? c.scope = b.scope : _.ib(b.scope) && (c.scope = b.scope.join(" "));
        null != b["openid.realm"] && (c.openid_realm = b["openid.realm"]);
        null != b.cookie_policy ? c.cookie_policy = b.cookie_policy : null != b.cookiepolicy && (c.cookie_policy = b.cookiepolicy);
        null == c.login_hint && null != b.user_id && (c.login_hint = b.user_id);
        try {
            _.ex(c.cookie_policy)
        } catch (d) {
            c.cookie_policy &&
                jA("The cookie_policy configuration: '" + c.cookie_policy + "' is illegal, and thus ignored."), delete c.cookie_policy
        }
        null != b.hd && (c.hosted_domain = b.hd);
        null == c.prompt && (1 == b.immediate || "true" == b.immediate ? c.prompt = "none" : "force" == b.approval_prompt && (c.prompt = "consent"));
        "none" == c.prompt && (c.session_selection = "first_valid");
        "none" == c.prompt && "offline" == c.access_type && delete c.access_type;
        "undefined" === typeof c.authuser && (a = _.Hh(), null != a && (c.authuser = a));
        a = b.redirect_uri || _.R("oauth-flow/redirectUri");
        null != a && "postmessage" != a && (c.redirect_uri = a);
        c.gsiwebsdk = "shim";
        return c
    };
    _.lA = function(a, b) {
        var c = kA(a),
            d = new _.rk(function(e, f) {
                _.Kx(c, function(g) {
                    var k = g || {};
                    (0, _.vb)(fA, function(l) {
                        null == k[l] && (k[l] = c[l])
                    });
                    !c.include_granted_scopes && a && a.scope && (k.scope = a.scope);
                    a && null != a.state && (k.state = a.state);
                    k.error ? ("none" == c.prompt && "user_logged_out" == k.error && (k.error = "immediate_failed_user_logged_out"), f(k)) : (g = hA(k), null != g.authuser && _.Ne("googleapis.config/sessionIndex", g.authuser), e(g))
                })
            });
        b && d.then(b, b);
        return d
    };
    mA = _.ri.RA;
    nA = null;
    _.qA = function(a, b) {
        if ("force" !== a.approvalprompt) {
            a = _.oA(a);
            a.prompt = "none";
            delete a.redirect_uri;
            delete a.approval_prompt;
            delete a.immediate;
            if (b = !b) nA ? (a.client_id !== nA.client_id && window.console && window.console.log && window.console.log("Ignoring mismatched page-level auth param client_id=" + a.client_id), b = !0) : (nA = a, b = !1);
            b || pA(a)
        }
    };
    _.oA = function(a) {
        var b = a.redirecturi || "postmessage",
            c = (0, _.Cb)((a.scope || "").replace(/[\s\xa0]+/g, " "));
        b = {
            client_id: a.clientid,
            redirect_uri: b,
            response_type: "code token id_token gsession",
            scope: c
        };
        a.approvalprompt && (b.approval_prompt = a.approvalprompt);
        a.state && (b.state = a.state);
        a.openidrealm && (b["openid.realm"] = a.openidrealm);
        c = "offline" == a.accesstype ? !0 : (c = a.redirecturi) && "postmessage" != c;
        c && (b.access_type = "offline");
        a.requestvisibleactions && (b.request_visible_actions = (0, _.Cb)(a.requestvisibleactions.replace(/[\s\xa0]+/g,
            " ")));
        a.after_redirect && (b.after_redirect = a.after_redirect);
        a.cookiepolicy && "none" !== a.cookiepolicy && (b.cookie_policy = a.cookiepolicy);
        "undefined" != typeof a.includegrantedscopes && (b.include_granted_scopes = a.includegrantedscopes);
        a.e && (b.e = a.e);
        (a = a.authuser || _.R("googleapis.config/sessionIndex")) && (b.authuser = a);
        (a = _.R("useoriginassocialhost")) && (b.use_origin_as_socialhost = a);
        return b
    };
    pA = function(a) {
        _.Tn("waaf0", "signin", "0");
        _.lA(a, function(b) {
            _.Tn("waaf1", "signin", "0");
            dA(b)
        })
    };
    _.rA = function(a) {
        a = _.oA(a);
        _.Ne("oauth-flow/authWindowWidth", 445);
        _.Ne("oauth-flow/authWindowHeight", 615);
        pA(a)
    };
    _.sA = function(a) {
        _.hz.unsubscribe(_.iz, a);
        _.hz.subscribe(_.iz, a)
    };
    var zA, CA;
    _.uA = function(a) {
        return a.cookiepolicy ? !0 : (_.tA("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."), !1)
    };
    _.tA = function(a) {
        window.console && (window.console.error ? window.console.error(a) : window.console.log && window.console.log(a))
    };
    _.yA = function(a, b) {
        var c = _.$m();
        _.xe(a, c);
        c = Yz(c);
        if (_.uA(c)) {
            var d = _.vA();
            _.wA(c);
            b ? _.Ee(b, "click", function() {
                _.xA(c, d)
            }) : _.xA(c, d)
        }
    };
    _.vA = function() {
        var a = new zA;
        _.sA(function(b) {
            a.TC && b && (b.access_token && _.Ne("isPlusUser", !0), b["g-oauth-window"] && (a.TC = !1, _.Ye("OTA app install is no longer supported.")))
        });
        return a
    };
    zA = function() {
        this.TC = !1
    };
    _.wA = function(a) {
        a = _.AA(a);
        _.BA(a.callback);
        _.cA(function() {
            _.qA(a)
        })
    };
    _.AA = function(a) {
        CA(a);
        a.redirecturi && delete a.redirecturi;
        pz(function(b) {
            return a[b]
        }) || (a.authuser = 0);
        return a
    };
    CA = function(a) {
        /^\s*$/.test(a.scope || "") && (a.scope = "https://www.googleapis.com/auth/plus.login")
    };
    _.BA = function(a) {
        if ("string" === typeof a)
            if (window[a]) a = window[a];
            else {
                _.tA('Callback function named "' + a + '" not found');
                return
            }
        a && _.sA(a)
    };
    _.xA = function(a, b) {
        b.TC = !0;
        a = _.AA(a);
        _.rA(a)
    };
    _.z("gapi.auth.authorize", _.lA);
    _.z("gapi.auth.checkSessionState", function(a, b) {
        var c = _.ve();
        c.client_id = a.client_id;
        c.session_state = a.session_state;
        _.cA(function() {
            Pz() ? Kz.send("check_session_state", c, function(d) {
                b.call(null, d[0])
            }, _.Ul) : _.Qf.call(_.ez, "check_session_state", Lz(function(d) {
                b.call(null, d)
            }), c.session_state, c.client_id)
        })
    });
    _.z("gapi.auth.getAuthHeaderValueForFirstParty", mA);
    _.z("gapi.auth.getToken", wz);
    _.z("gapi.auth.getVersionInfo", function(a, b) {
        _.cA(function() {
            var c = _.pi() || "",
                d = null,
                e = null;
            c && (e = c.split(" "), 2 == e.length && (d = e[1]));
            d ? Pz() ? Kz.send("get_versioninfo", {
                xapisidHash: d,
                sessionIndex: b
            }, function(f) {
                a(f[0])
            }, _.Ul) : _.Qf.call(_.ez, "get_versioninfo", Lz(function(f) {
                a(f)
            }), d, b) : a()
        })
    });
    _.z("gapi.auth.init", _.cA);
    _.z("gapi.auth.setToken", _.xz);
    _.z("gapi.auth.signIn", function(a) {
        _.yA(a)
    });
    _.z("gapi.auth.signOut", function() {
        var a = wz();
        a && eA(a, a.cookie_policy)
    });
    _.z("gapi.auth.unsafeUnpackIdToken", $z);
    _.z("gapi.auth._pimf", _.qA);
    _.z("gapi.auth._oart", Xz);
    _.z("gapi.auth._guss", function(a) {
        return zz(a).read()
    });

    _.DA = function(a) {
        return !!(a.clientid && a.scope && a.callback)
    };
    _.EA = function() {
        var a = _.$m();
        _.DA(a) && !_.R("disableRealtimeCallback") ? _.wA(a) : _.cA()
    };
    _.fk(function() {
        _.EA()
    });

    _.EA = function() {
        var a = _.$m();
        _.DA(a) && !_.R("disableRealtimeCallback") && _.wA(a)
    };

    var FA, GA, HA, IA = {
            DH: function(a) {
                FA = a;
                try {
                    delete IA.DH
                } catch (b) {}
            },
            EH: function(a) {
                GA = a;
                try {
                    delete IA.EH
                } catch (b) {}
            },
            FH: function(a) {
                HA = a;
                try {
                    delete IA.FH
                } catch (b) {}
            }
        },
        JA = function() {
            var a = !0,
                b = _.dy(_.Rx);
            b && void 0 !== b.withCredentials || (a = !1);
            return a
        },
        KA = function(a, b) {
            if (null == b) return b;
            b = String(b);
            b.match(/^\/\/.*/) && (b = ("http:" == window.location.protocol ? "http:" : "https:") + b);
            b.match(/^\/([^\/].*)?$/) && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = window.location.protocol +
                "//" + window.location.host + b);
            var c = b.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i);
            c && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = c[1] + "//" + window.location.host + (c[3] || ""));
            b = b.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, "$1");
            b = b.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, "$1$2");
            b = b.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, "$1$2");
            b.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) && (b = b.toLowerCase());
            c = _.R("client/rewrite");
            _.kb(c) && Object.prototype.hasOwnProperty.call(c,
                b) ? b = String(c[b] || b) : (b = b.replace(/^(https?):\/\/www\.googleapis\.com$/, "$1://content.googleapis.com"), b = b.replace(/^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/, "$1://content-$2"), b.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) || (b = b.replace(/^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/, "$1://content-$2")));
            a && (a = _.R("client/firstPartyRewrite"), _.kb(a) && Object.prototype.hasOwnProperty.call(a, b) ? b = String(a[b] || b) : (b = b.replace(/^(https?):\/\/content\.googleapis\.com$/,
                "$1://clients6.google.com"), b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/, "$1://$2-googleapis.$3.google.com"), b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/, "$1://$2.clients6.google.com"), b = b.replace(/^(https?):\/\/([-a-z0-9]+)-www-googleapis\.([-a-z0-9]+).google.com$/, "$1://content-googleapis-$2.$3.google.com")));
            return b
        },
        LA = function(a) {
            _.qb.call(this, a)
        };
    _.Qq(LA, _.qb);
    LA.prototype.name = "gapi.client.Error";
    var MA = function(a) {
        if (!a || !_.lb(a)) throw new LA("Must provide a function.");
        this.Of = null;
        this.mU = a
    };
    MA.prototype.then = function(a, b, c) {
        this.Of || (this.Of = this.mU());
        return this.Of.then(a, b, c)
    };
    MA.prototype.vx = function(a) {
        this.Of || (this.Of = a)
    };
    var NA = {};
    NA = function(a) {
        var b = {},
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = _.ah(a, c);
                d && (c = _.$g(c, d)) && _.bh(b, c, d, !0)
            }
        return b
    };
    var OA = {
            error: {
                code: -1,
                message: "A network error occurred and the request could not be completed."
            }
        },
        PA = function(a, b, c, d) {
            _.Ky.call(this);
            this.nd = a;
            this.XC = b;
            this.sd = c;
            a = {};
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (b = _.ah(d, e), void 0 !== b && (e = _.Zg(e, b)) && _.bh(a, e, b));
            d = {};
            for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[unescape(encodeURIComponent(e))] = unescape(encodeURIComponent(a[e])));
            this.kr = d;
            this.Of = null
        };
    _.Qq(PA, _.Ky);
    PA.prototype.then = function(a) {
        this.Of || (this.Of = (new _.rk(function(b, c) {
            this.V("error", (0, _.L)(function() {
                c(QA(this))
            }, this));
            this.V("success", (0, _.L)(function() {
                b(QA(this))
            }, this));
            this.send(this.nd, this.XC, this.sd, this.kr)
        }, this)).then(function(b) {
            b.headers = NA(b.headers);
            return b
        }, function(b) {
            return b.status ? (b.headers = NA(b.headers), _.wk(b)) : _.wk({
                result: OA,
                body: '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
                headers: null,
                status: null,
                statusText: null
            })
        }));
        return this.Of.then.apply(this.Of, arguments)
    };
    var QA = function(a) {
            var b = a.getStatus(),
                c = _.Xy(a);
            var d = 204 == b ? !1 : "" == a.Nk ? _.Hf(c) : _.Yy(a);
            var e = a.getAllResponseHeaders();
            e = _.ch(e, !1);
            try {
                var f = 2 < _.Vy(a) ? a.Pa.statusText : ""
            } catch (g) {
                f = ""
            }
            return {
                result: d,
                body: c,
                headers: e,
                status: b,
                statusText: f
            }
        },
        RA = /;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i,
        SA = /^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i,
        TA = /;\s*charset\s*=/i,
        UA = /(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g,
        VA =
        function(a) {
            var b = [];
            a = a.replace(UA, function(c) {
                b.push(_.nz(c));
                return ""
            });
            if (a.length) throw Error("ta");
            return b.join("")
        },
        WA = function(a) {
            var b = a.headers;
            if (b && "base64" === _.ah(b, _.Ig.Py)) {
                var c = VA(a.body),
                    d = _.ah(b, _.Ig.Oy);
                b[_.Ig.CONTENT_TYPE] = d;
                if (d.match(RA) || d.match(SA) && !d.match(TA)) {
                    d = [];
                    for (var e = 0, f = 0; f < c.length; f++) {
                        var g = c.charCodeAt(f);
                        255 < g && (d[e++] = g & 255, g >>= 8);
                        d[e++] = g
                    }
                    c = _.kw(d)
                }
                _.bh(b, _.Ig.Py);
                _.bh(b, _.Ig.Oy);
                a.body = c
            }
        },
        XA = function(a, b, c) {
            c || ((c = _.R("googleapis.config/proxy")) && (c =
                String(c).replace(/\/static\/proxy\.html$/, "") || "/"), c = String(c || ""));
            c || (c = _.R("googleapis.config/root"), b && (c = _.R("googleapis.config/root-1p") || c), c = String(c || ""));
            c = String(KA(b, c) || c);
            return a = _.qy(c, a)
        },
        YA = function(a) {
            var b = _.Pt(a, "params", "headers");
            b && "object" === typeof b || (b = {});
            a = {};
            for (var c in b)
                if (Object.prototype.hasOwnProperty.call(b, c)) {
                    var d = _.ah(b, c);
                    d && (_.Zg(c, d), _.bh(a, c, d))
                }
            c = "chrome-extension" == (window.location.href.match(_.sh)[1] || null);
            a = _.qi(a);
            return !(c && a) && JA()
        },
        ZA = function(a,
            b) {
            var c = a.params || _.ve();
            c.url = c.path;
            var d = c.root;
            d = XA("/", _.qi(c.headers), d);
            d.match(/^(.*[^\/])?\/$/) && (d = d.substr(0, d.length - 1));
            c.root = d;
            a.params = c;
            _.ti.vj("makeHttpRequests", [a], function(e, f) {
                e && e.gapiRequest ? (e.gapiRequest.data ? WA(e.gapiRequest.data) : WA(e), b(e, _.If(e))) : b(e, f)
            })
        },
        $A = function(a) {
            return new _.rk(function(b, c) {
                var d = function(e) {
                    e && e.gapiRequest ? e = e.gapiRequest.data || e : c(e);
                    e = {
                        result: 204 != e.status && _.Hf(e.body),
                        body: e.body,
                        headers: e.headers || null,
                        status: e.status || null,
                        statusText: e.statusText ||
                            null
                    };
                    _.Iy(e.status) ? b(e) : c(e)
                };
                try {
                    ZA(a, d)
                } catch (e) {
                    c(e)
                }
            })
        },
        aB = function(a) {
            var b = !_.R("client/cors") || !!_.R("client/xd4"),
                c = {};
            _.Fl(a, function(d, e) {
                (d = _.Zg(e, d)) || b || (d = _.Yg(e));
                d && (e = _.ah(a, d)) && _.bh(c, d, e)
            });
            return c
        },
        bB = function(a) {
            var b = a.params || _.ve();
            a = _.Vj(b.headers || {});
            var c = b.httpMethod || "GET",
                d = String(b.url || ""),
                e = encodeURIComponent("$unique");
            if (!("POST" === c || 0 <= _.xh(d, "$unique", d.search(_.yh)) || 0 <= _.xh(d, e, d.search(_.yh)))) {
                var f = [];
                for (g in a) Object.prototype.hasOwnProperty.call(a,
                    g) && f.push(g.toLowerCase());
                f.sort();
                f.push(_.xg(location.href));
                var g = f.join(":");
                f = _.li();
                f.update(g);
                g = f.Vg().toLowerCase().substr(0, 7);
                g = String(parseInt(g, 16) % 1E3 + 1E3).substr(1);
                d = _.oy(d, e, "gc" + g)
            }
            e = b.body || null;
            g = b.responseType || null;
            b = _.qi(a) || "1p" == b.authType;
            f = !!_.R("googleapis.config/auth/useUberProxyAuth");
            _.bh(a, _.Ig.Qy, void 0);
            a = aB(a);
            var k = new PA(d, c, e, a);
            k.sf = b || f;
            g && (k.Nk = g);
            return new _.rk(function(l, m) {
                k.then(function(n) {
                    WA(n);
                    l(n)
                }, function(n) {
                    m(n)
                })
            })
        },
        cB = function(a, b) {
            var c = function(d) {
                d =
                    _.Vj(d);
                delete d.result;
                d = {
                    gapiRequest: {
                        data: d
                    }
                };
                b && b(d, _.If(d))
            };
            bB(a).then(c, c)
        },
        dB = function(a, b) {
            (_.R("client/cors") || _.R("client/xd4")) && YA(a) ? cB(a, b) : ZA(a, b)
        },
        eB = function(a) {
            this.Sc = a;
            this.tf = !1;
            this.promise = {
                then: (0, _.L)(function(b, c, d) {
                    this.tf || (this.tf = !0);
                    this.ms && !this.js ? this.Sc.resolve(this.ms) : this.js && !this.ms && this.Sc.reject(this.js);
                    return this.Sc.promise.then(b, c, d)
                }, this)
            }
        };
    eB.prototype.resolve = function(a) {
        this.tf ? this.Sc.resolve(a) : this.ms || this.js || (this.ms = a)
    };
    eB.prototype.reject = function(a) {
        this.tf ? this.Sc.reject(a) : this.ms || this.js || (this.js = a)
    };
    var fB = function(a) {
            a = _.iy(a.error);
            return {
                code: a.code,
                data: a.errors,
                message: a.message
            }
        },
        gB = function(a) {
            throw Error("wa`" + a);
        };
    var hB = function(a) {
        MA.call(this, hB.prototype.Cm);
        if (!a || "object" != typeof a && "string" != typeof a) throw new LA("Missing required parameters");
        if ("string" === typeof a) {
            var b = {};
            b.path = a
        } else b = a;
        if (!b.path) throw new LA('Missing required parameter: "path"');
        this.wh = {};
        this.wh.path = b.path;
        this.wh.method = b.method || "GET";
        this.wh.params = b.params || {};
        this.wh.headers = b.headers || {};
        this.wh.body = b.body;
        this.wh.root = b.root;
        this.wh.responseType = b.responseType;
        this.wh.apiId = b.apiId;
        this.Np = b.authType || "auto";
        this.XY = !!b.isXd4;
        this.$M = !1
    };
    _.G(hB, MA);
    var iB = ["appVersion", "platform", "userAgent"],
        jB = {
            "google-api-gwt-client": !0,
            "google-api-javascript-client": !0
        };
    hB.prototype.qg = function() {
        return this.wh
    };
    hB.prototype.xj = function(a) {
        this.Np = a
    };
    hB.prototype.Hk = function() {
        if (!this.$M) {
            this.$M = !0;
            var a = this.wh,
                b = a.headers = a.headers || {},
                c = [],
                d = [];
            for (g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    c.push(g);
                    var e = g,
                        f = _.ah(b, e);
                    f && (e = _.Zg(e, f) || _.Yg(e)) && d.push([e, f])
                }
            var g = 0;
            for (e = c.length; g < e; ++g) delete b[c[g]];
            c = 0;
            for (g = d.length; c < g; ++c) _.bh(b, d[c][0], d[c][1]);
            if (this.XY) d = "1p" == this.Np;
            else {
                d = b;
                c = _.Ig.WG;
                g = String(_.R("client/version", "1.1.0"));
                e = String(_.R("client/name", "google-api-javascript-client"));
                e = !0 === jB[e] ? e : "google-api-javascript-client";
                f = String(_.R("client/appName", ""));
                var k = [];
                f && (k.push(f), k.push(" "));
                k.push(e);
                g && (k.push("/"), k.push(g));
                _.bh(d, c, k.join(""));
                _.bh(b, _.Ig.YG, "XMLHttpRequest");
                d = _.ah(b, _.Ig.CONTENT_TYPE);
                a.body && !d && _.bh(b, _.Ig.CONTENT_TYPE, "application/json");
                _.R("client/allowExecutableResponse") || _.bh(b, _.Ig.Ny, "base64");
                (d = _.ah(b, _.Ig.CONTENT_TYPE)) && "application/json" == d.toLowerCase() && !a.params.alt && (a.params.alt = "json");
                (d = a.body || null) && _.kb(d) && (a.body = _.If(d));
                a.key = a.id;
                b = _.ti.IS(b, void 0, this.Np);
                d =
                    _.qi(b);
                if ((c = b) && window.navigator) {
                    g = [];
                    for (e = 0; e < iB.length; e++)(f = window.navigator[iB[e]]) && g.push(encodeURIComponent(iB[e]) + "=" + encodeURIComponent(f));
                    _.bh(c, _.Ig.QG, g.join("&"))
                }(c = _.R("client/apiKey")) && void 0 === a.params.key && (a.params.key = c);
                (c = _.R("client/trace")) && !a.params.trace && (a.params.trace = c)
            }
            "auto" == this.Np && (d ? this.xj("1p") : (b = _.ah(b, _.Ig.AUTHORIZATION)) && String(b).match(/^(Bearer|MAC)[ \t]/i) ? this.xj("oauth2") : this.xj("none"));
            (b = String(a.path || "").match(/^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i)) &&
            !a.root && (a.root = String(b[1]), a.path = String(b[2] || "/"), a.path.match(/^\/_ah\/api(\/.*)?$/) ? (a.root += "/_ah/api", a.path = a.path.substr(8)) : (b = _.R("googleapis.config/root"), d && (b = _.R("googleapis.config/root-1p") || b), b = String(b || ""), c = a.root + a.path, b && c.substr(0, b.length) === b && (a.path = c.substr(b.length), a.root = b)));
            b = a.params;
            c = _.Pg(a.path);
            g = String(_.R("googleapis.config/xd3") || "");
            18 <= g.length && "/static/proxy.html" == g.substring(g.length - 18) && (g = g.substring(0, g.length - 18));
            g || (g = "/");
            e = _.Pg(g);
            if (g !=
                e) throw Error("y");
            "/" != g.charAt(g.length - 1) && (g += "/");
            c = _.qy(g, c);
            _.Sq(c, "/") && (c = c.substring(0, c.length - 1));
            g = _.ve();
            for (var l in b) Object.prototype.hasOwnProperty.call(b, l) && (e = encodeURIComponent(l), g[e] = b[l]);
            c = _.wh(c, g);
            a.path = c;
            a.root = KA(!!d, a.root);
            a.url = XA(a.path, !!d, a.root)
        }
    };
    var kB = function(a) {
        a.Hk();
        var b = a.wh;
        return {
            key: "gapiRequest",
            params: {
                id: b.id,
                key: b.key,
                url: b.url,
                path: b.path,
                httpMethod: b.method,
                body: b.body || "",
                headers: b.headers || {},
                urlParams: {},
                root: b.root,
                authType: a.Np
            }
        }
    };
    hB.prototype.execute = function(a) {
        var b = kB(this);
        dB(b, function(c, d) {
            var e = c;
            c.gapiRequest && (e = c.gapiRequest);
            e && e.data && (e = e.data);
            c = e instanceof Array ? e[0] : e;
            if (204 != c.status && c.body) try {
                var f = _.Hf(c.body)
            } catch (g) {}
            a && a(f, d)
        })
    };
    hB.prototype.Cm = function() {
        var a = kB(this);
        return (_.R("client/cors") || _.R("client/xd4")) && YA(a) ? bB(a) : $A(a)
    };
    hB.prototype.rk = function() {
        return this.Cm()
    };
    hB.prototype.execute = hB.prototype.execute;
    hB.prototype.then = hB.prototype.then;
    hB.prototype.getPromise = hB.prototype.rk;
    var lB = function(a) {
        if (!a || "object" != typeof a) throw new LA("Missing rpc parameters");
        if (!a.method) throw new LA("Missing rpc method");
        this.gx = a
    };
    lB.prototype.Ul = function() {
        var a = this.gx.transport;
        return a ? a.root || null : null
    };
    lB.prototype.execute = function(a) {
        var b = GA();
        b.add(this, {
            id: "gapiRpc",
            callback: this.Jr(a)
        });
        b.execute()
    };
    lB.prototype.ew = function(a) {
        var b = this.gx.method,
            c = String,
            d;
        (d = this.gx.apiVersion) || (d = String(b).split(".")[0], d = _.R("googleapis.config/versions/" + b) || _.R("googleapis.config/versions/" + d) || "v1", d = String(d));
        c = c(d);
        a = {
            jsonrpc: "2.0",
            id: a,
            method: b,
            apiVersion: c
        };
        (b = this.gx.rpcParams) && (a.params = b);
        return a
    };
    lB.prototype.Jr = function(a) {
        return function(b, c) {
            if (b)
                if (b.error) {
                    var d = b.error;
                    null == d.error && (d.error = _.Vj(b.error))
                } else d = b.result || b.data, _.kb(d) && null == d.result && (d.result = _.Vj(b.result || b.data));
            else d = !1;
            a(d, c)
        }
    };
    lB.prototype.execute = lB.prototype.execute;
    var nB = function(a, b) {
            this.Df = b || 0;
            2 == this.Df ? (b = null, null != a && _.kb(a) && (b = {}, b.method = a.method, b.rpcParams = a.rpcParams, b.transport = a.transport, b.root = a.root, b.apiVersion = a.apiVersion, b.authType = a.authType), this.Nb = new lB(b)) : (0 == this.Df && (b = a && a.callback) && (a.callback = mB(b)), b = null, null != a && (_.kb(a) ? (b = {}, b.path = a.path, b.method = a.method, b.params = a.params, b.headers = a.headers, b.body = a.body, b.root = a.root, b.responseType = a.responseType, b.authType = a.authType, b.apiId = a.apiId) : "string" === typeof a && (b = a)),
                this.Nb = new hB(b))
        },
        mB = function(a) {
            return function(b) {
                if (null != b && _.kb(b) && b.error) {
                    var c = fB(b);
                    b = _.If([{
                        id: "gapiRpc",
                        error: c
                    }]);
                    c.error = _.iy(c)
                } else null == b && (b = {}), c = _.iy(b), c.result = _.iy(b), b = _.If([{
                    id: "gapiRpc",
                    result: b
                }]);
                a(c, b)
            }
        };
    _.h = nB.prototype;
    _.h.getFormat = function() {
        return this.Df
    };
    _.h.execute = function(a) {
        this.Nb.execute(a && 1 == this.Df ? mB(a) : a)
    };
    _.h.then = function(a, b, c) {
        2 == this.Df && gB('The "then" method is not available on this object.');
        return this.Nb.then(a, b, c)
    };
    _.h.vx = function(a) {
        this.Nb.vx && this.Nb.vx(a)
    };
    _.h.qg = function() {
        if (this.Nb.qg) return this.Nb.qg()
    };
    _.h.Hk = function() {
        this.Nb.qg && this.Nb.Hk()
    };
    _.h.Ul = function() {
        if (this.Nb.Ul) return this.Nb.Ul()
    };
    _.h.ew = function(a) {
        if (this.Nb.ew) return this.Nb.ew(a)
    };
    _.h.xj = function(a) {
        this.Nb.xj && this.Nb.xj(a)
    };
    _.h.rk = function() {
        if (this.Nb.rk) return this.Nb.rk()
    };
    nB.prototype.execute = nB.prototype.execute;
    nB.prototype.then = nB.prototype.then;
    nB.prototype.getPromise = nB.prototype.rk;
    var oB = function(a) {
        MA.call(this, oB.prototype.Cm);
        this.Nb = a
    };
    _.G(oB, MA);
    _.h = oB.prototype;
    _.h.execute = function(a) {
        var b = this.getFormat(),
            c = function(d) {
                if (_.lb(a)) {
                    var e = {
                            gapiRequest: {
                                data: {
                                    status: d && d.status,
                                    statusText: d && d.statusText,
                                    headers: d && d.headers,
                                    body: d && d.body
                                }
                            }
                        },
                        f = a,
                        g = void 0;
                    1 === b && (f = mB(f), g = {});
                    var k = d ? d.result : !1;
                    d && 204 == d.status && (k = g, delete e.gapiRequest.data.body);
                    d = _.If(e);
                    f(k, d)
                }
            };
        this.rk().then(c, c)
    };
    _.h.Cm = function() {
        return new _.rk(function(a, b) {
            var c = FA(),
                d = c.add(this.Nb, {
                    id: "gapiRequest"
                });
            return c.then(function(e) {
                var f = e.result;
                if (f && (f = f[d])) {
                    Object.prototype.hasOwnProperty.call(f, "result") || (f.result = !1);
                    Object.prototype.hasOwnProperty.call(f, "body") || (f.body = "");
                    _.Iy(f.status) ? a(f) : b(f);
                    return
                }
                b(e)
            }, b)
        }, this)
    };
    _.h.qg = function() {
        if (this.Nb.qg) return this.Nb.qg()
    };
    _.h.Hk = function() {
        this.Nb.Hk && this.Nb.Hk()
    };
    _.h.Ul = function() {
        if (this.Nb.Ul) return this.Nb.Ul()
    };
    _.h.xj = function(a) {
        this.Nb.xj && this.Nb.xj(a)
    };
    _.h.getFormat = function() {
        var a = void 0;
        this.Nb.getFormat && (a = this.Nb.getFormat());
        void 0 === a && (a = 0);
        return a
    };
    _.h.rk = function() {
        return this.Cm()
    };
    oB.prototype.execute = oB.prototype.execute;
    oB.prototype.then = oB.prototype.then;
    oB.prototype.getPromise = oB.prototype.rk;
    var pB = /<response-(.*)>/,
        qB = /^application\/http(;.+$|$)/,
        rB = function(a, b) {
            a = _.ah(a, b);
            if (!a) throw new LA("Unable to retrieve header.");
            return a
        },
        tB = function(a, b, c, d) {
            var e = "batch" + String(Math.round(2147483647 * (0, _.Ag)())) + String(Math.round(2147483647 * (0, _.Ag)())),
                f = "--" + e;
            e = "multipart/mixed; boundary=" + e;
            a: {
                var g = void 0;
                for (var k = 0; k < a.length; k++) {
                    var l = a[k].request.qg().apiId;
                    if ("string" !== typeof l) {
                        g = "batch";
                        break a
                    }
                    if (void 0 === g) g = l;
                    else if (g != l) {
                        g = "batch";
                        break a
                    }
                }
                g = _.R("client/batchPath/" + g) ||
                "batch/" + g.split(":").join("/")
            }
            g = {
                path: g,
                method: "POST"
            };
            k = [];
            for (l = 0; l < a.length; l++) k.push(sB(a[l].request, [f.substr(f.indexOf("--") + 2), "+", encodeURIComponent(a[l].id).split("(").join("%28").split(")").join("%29").split(".").join("%2E"), "@googleapis.com"].join("")));
            g.body = [f, k.join("\r\n" + f + "\r\n"), f + "--"].join("\r\n") + "\r\n";
            g.root = b || null;
            if (_.R("client/xd4") && JA()) return g.isXd4 = !0, g.params = {
                    $ct: e
                }, g.headers = {}, _.bh(g.headers, _.Ig.CONTENT_TYPE, "text/plain; charset=UTF-8"), c ? g.authType = "1p" : d &&
                (g.authType = "oauth2"), new hB(g);
            g.headers = {};
            _.bh(g.headers, _.Ig.CONTENT_TYPE, e);
            return HA(g)
        },
        sB = function(a, b) {
            var c = [];
            a = a.qg();
            var d = function(f, g) {
                    _.Fl(f, function(k, l) {
                        g.push(l + ": " + k)
                    })
                },
                e = {};
            e[_.Ig.CONTENT_TYPE] = "application/http";
            e[_.Ig.jy] = "binary";
            e[_.Ig.iy] = "<" + b + ">";
            d(e, c);
            c.push("");
            c.push(a.method + " " + a.path);
            d(a.headers, c);
            c.push("");
            a.body && c.push(a.body);
            return c.join("\r\n")
        },
        vB = function(a, b) {
            a = uB(a, b);
            var c = {};
            _.Jb(a, function(d, e) {
                c[e] = {
                    result: d.result || d.body,
                    rawResult: _.If({
                        id: e,
                        result: d.result || d.body
                    }),
                    id: e
                }
            });
            return c
        },
        uB = function(a, b) {
            a = (0, _.Cb)(a);
            _.Sq(a, "--") && (a = a.substring(0, a.length - 2));
            a = a.split(b);
            b = _.ve();
            for (var c = 0; c < a.length; c++)
                if (a[c]) {
                    var d;
                    if (d = a[c]) {
                        _.Sq(d, "\r\n") && (d = d.substring(0, d.length - 2));
                        if (d) {
                            d = d.split("\r\n");
                            for (var e = 0, f = {
                                    headers: {},
                                    body: ""
                                }; e < d.length && "" == d[e];) e++;
                            for (f.outerHeaders = wB(d, e); e < d.length && "" != d[e];) e++;
                            e++;
                            var g = d[e++].split(" ");
                            f.status = Number(g[1]);
                            f.statusText = g.slice(2).join(" ");
                            for (f.headers = wB(d, e); e < d.length && "" != d[e];) e++;
                            e++;
                            f.body = d.slice(e).join("\r\n");
                            WA(f);
                            d = f
                        } else d = null;
                        e = _.ve();
                        f = rB(d.outerHeaders, _.Ig.CONTENT_TYPE);
                        if (null == qB.exec(f)) throw new LA("Unexpected Content-Type <" + f + ">");
                        f = rB(d.outerHeaders, _.Ig.iy);
                        f = pB.exec(f);
                        if (!f) throw new LA("Unable to recognize Content-Id.");
                        e.id = decodeURIComponent(f[1].split("@")[0].replace(/^.*[+]/, ""));
                        e.response = {
                            status: d.status,
                            statusText: d.statusText,
                            headers: d.headers
                        };
                        204 != d.status && (e.response.body = d.body, e.response.result = _.Hf(d.body));
                        d = e
                    } else d = null;
                    d && d.id &&
                        (b[d.id] = d.response)
                }
            return b
        },
        wB = function(a, b) {
            for (var c = []; b < a.length && a[b]; b++) c.push(a[b]);
            return _.ch(c.join("\r\n"), !1)
        };
    var xB = function(a) {
        MA.call(this, xB.prototype.Cm);
        this.Lc = [];
        this.Bg = a;
        this.kZ = !!a;
        this.sK = this.qK = !1
    };
    _.G(xB, MA);
    var yB = function(a, b) {
        for (var c = 0; c < a.Lc.length; c++)
            if (a.Lc[c].id == b) return !0;
        return !1
    };
    xB.prototype.qn = function(a) {
        (function(b) {
            setTimeout(function() {
                throw b;
            })
        })(a)
    };
    xB.prototype.add = function(a, b) {
        b = b || _.ve();
        var c = _.ve();
        if (!a) throw new LA("Batch entry " + (_.we(b, "id") ? '"' + b.id + '" ' : "") + "is missing a request method");
        a.Hk();
        c.request = a;
        var d = _.Bk();
        d = new eB(d);
        c.Go = d;
        a.vx(c.Go.promise);
        d = a.qg().headers;
        _.qi(d) && (this.qK = !0);
        (d = String((d || {}).Authorization || "") || null) && d.match(/^Bearer|MAC[ \t]/i) && (this.sK = !0);
        a = a.qg().root;
        if (!this.kZ) {
            if (a && this.Bg && a != this.Bg) throw new LA('The "root" provided in this request is not consistent with that of existing requests in the batch.');
            this.Bg = a || this.Bg
        }
        if (_.we(b, "id")) {
            a = b.id;
            if (yB(this, a)) throw new LA('Batch ID "' + a + '" already in use, please use another.');
            c.id = a
        } else {
            do c.id = String(Math.round(2147483647 * (0, _.Ag)())); while (yB(this, c.id))
        }
        c.callback = b.callback;
        this.Lc.push(c);
        return c.id
    };
    xB.prototype.execute = function(a) {
        1 > this.Lc.length || (a = this.Jr(a), zB(this).execute(a))
    };
    var zB = function(a) {
        _.El(a.Lc, function(b) {
            b.request.Hk()
        });
        return tB(a.Lc, a.Bg, a.qK, a.sK)
    };
    xB.prototype.Cm = function() {
        var a = this;
        return 1 > this.Lc.length ? Promise.resolve({}) : zB(this).then(function(b) {
            return AB(a, b, !0)
        }, function(b) {
            return BB(a, b, !0)
        })
    };
    var AB = function(a, b, c, d, e) {
            var f = _.Ig.CONTENT_TYPE;
            if (!c) {
                if (d && !b) {
                    var g = _.Hf(d);
                    g && (b = g.gapiRequest ? g.gapiRequest.data : g)
                }
                if (!b) throw new LA("The batch response is missing.");
            }
            if (g = b) {
                var k = g.headers;
                if (k) {
                    var l = _.ve();
                    for (p in k)
                        if (Object.prototype.hasOwnProperty.call(k, p)) {
                            var m = _.ah(k, p);
                            _.bh(l, p, m, !0)
                        }
                    g.headers = l
                }
            }
            if (0 != rB(b.headers, f).indexOf("multipart/mixed")) throw new LA("The response's Content-Type is not multipart/mixed.");
            f = b.status;
            if (200 <= f && 299 >= f || c) {
                var n = rB(b.headers, _.Ig.CONTENT_TYPE).split("boundary=")[1];
                if (!n) throw new LA("Boundary not indicated in response.");
                n = (c ? uB : vB)(b.body, "--" + n);
                b.result = n || {};
                a = _.va(a.Lc);
                for (f = a.next(); !f.done; f = a.next()) {
                    f = f.value;
                    var p = n[f.id];
                    if (c) p && _.Iy(p.status) ? f.Go.resolve(p) : f.Go.reject(p);
                    else if (f.callback) {
                        if (p && p.rawResult) try {
                            delete p.rawResult
                        } catch (t) {}
                        try {
                            f.callback(p || !1, _.If(p))
                        } catch (t) {
                            xB.prototype.qn(t)
                        }
                    }
                }
            }
            if (e) try {
                e(n || null, d)
            } catch (t) {
                xB.prototype.qn(t)
            }
            return b
        },
        BB = function(a, b, c, d) {
            var e = {
                error: {
                    code: 0,
                    message: "The batch request could not be fulfilled."
                }
            };
            b && b.message || b.message ? e.error.message += " " + (b.message || b.message) : b && b.error && b.error.message && (e.error.message = b.error.message, e.error.code = b.error.code || 0);
            e = {
                result: e,
                body: _.If(e),
                headers: null,
                status: null,
                statusText: null
            };
            var f = _.If(e),
                g = 0;
            if (a.Lc)
                for (var k = _.va(a.Lc), l = k.next(); !l.done; l = k.next())
                    if (l = l.value, c) l.Go.reject(e);
                    else if (l.callback) try {
                g++, l.callback(e, f)
            } catch (m) {
                xB.prototype.qn(m)
            }
            if (d) try {
                d(e, f)
            } catch (m) {
                xB.prototype.qn(m)
            } else if (g !== a.Lc.length) throw b;
        };
    xB.prototype.Jr = function(a) {
        return (0, _.L)(function(b, c) {
            this.fz(b, c, a)
        }, this)
    };
    xB.prototype.fz = function(a, b, c) {
        try {
            AB(this, a, !1, b, c)
        } catch (d) {
            BB(this, d, !1, c)
        }
    };
    xB.prototype.add = xB.prototype.add;
    xB.prototype.execute = xB.prototype.execute;
    xB.prototype.then = xB.prototype.then;
    var CB = function() {
        this.Lc = [];
        this.Bg = this.Rc = null
    };
    CB.prototype.add = function(a, b) {
        b = b || {};
        var c = {},
            d = Object.prototype.hasOwnProperty;
        if (a) c.rpc = a;
        else throw new LA("Batch entry " + (d.call(b, "id") ? '"' + b.id + '" ' : "") + "is missing a request method");
        if (d.call(b, "id")) {
            a = b.id;
            for (d = 0; d < this.Lc.length; d++)
                if (this.Lc[d].id == a) throw new LA('Batch ID "' + a + '" already in use, please use another.');
            c.id = a
        } else {
            do c.id = String(2147483647 * (0, _.Ag)() | 0); while (d.call(this.Lc, c.id))
        }
        c.callback = b.callback;
        this.Lc.push(c);
        return c.id
    };
    var DB = function(a) {
        return function(b) {
            var c = b.body;
            if (b = b.result) {
                for (var d = {}, e = 0, f = b.length; e < f; ++e) d[b[e].id] = b[e];
                a(d, c)
            } else a(b, c)
        }
    };
    CB.prototype.execute = function(a) {
        this.Rc = [];
        for (var b, c, d = 0; d < this.Lc.length; d++) b = this.Lc[d], c = b.rpc, this.Rc.push(c.ew(b.id)), this.Bg = c.Ul() || this.Bg;
        b = {
            requests: this.Rc,
            root: this.Bg
        };
        c = this.Jr(a);
        a = {};
        d = b.headers || {};
        for (var e in d) {
            var f = e;
            if (Object.prototype.hasOwnProperty.call(d, f)) {
                var g = _.ah(d, f);
                g && (f = _.Zg(f, g) || _.Yg(f)) && _.bh(a, f, g)
            }
        }
        _.bh(a, _.Ig.CONTENT_TYPE, "application/json");
        e = DB(c);
        HA({
            method: "POST",
            root: b.root || void 0,
            path: "/rpc",
            params: b.urlParams,
            headers: a,
            body: b.requests || []
        }).then(e,
            e)
    };
    CB.prototype.Jr = function(a) {
        var b = this;
        return function(c, d) {
            b.fz(c, d, a)
        }
    };
    CB.prototype.fz = function(a, b, c) {
        a || (a = {});
        for (var d = 0; d < this.Lc.length; d++) {
            var e = this.Lc[d];
            e.callback && e.callback(a[e.id] || !1, b)
        }
        c && c(a, b)
    };
    IA.EH(function() {
        return new CB
    });
    CB.prototype.add = CB.prototype.add;
    CB.prototype.execute = CB.prototype.execute;
    var EB = function(a, b) {
        this.j_ = a;
        this.Df = b || null;
        this.Re = null
    };
    EB.prototype.nC = function(a) {
        this.Df = a;
        this.Re = 2 == this.Df ? new CB : new xB(this.j_)
    };
    EB.prototype.add = function(a, b) {
        if (!a) throw a = b || _.ve(), new LA("Batch entry " + (_.we(a, "id") ? '"' + a.id + '" ' : "") + "is missing a request method");
        null === this.Df && this.nC(a.getFormat());
        this.Df !== a.getFormat() && gB("Unable to add item to batch.");
        var c = b && b.callback;
        1 == this.Df && c && (b.callback = function(d) {
            d = FB(d);
            var e = _.If([d]);
            c(d, e)
        });
        return this.Re.add(a, b)
    };
    EB.prototype.execute = function(a) {
        var b = a && 1 == this.Df ? function(c) {
            var d = [];
            _.Fl(c, function(f, g) {
                f = FB(f);
                c[g] = f;
                d.push(f)
            });
            var e = _.If(d);
            a(c, e)
        } : a;
        this.Re && this.Re.execute(b)
    };
    var FB = function(a) {
        var b = a ? _.Pt(a, "result") : null;
        _.kb(b) && null != b.error && (b = fB(b), a = {
            id: a.id,
            error: b
        });
        return a
    };
    EB.prototype.then = function(a, b, c) {
        2 == this.Df && gB('The "then" method is not available on this object.');
        return this.Re.then(a, b, c)
    };
    EB.prototype.add = EB.prototype.add;
    EB.prototype.execute = EB.prototype.execute;
    EB.prototype.then = EB.prototype.then;
    var GB = "/rest?fields=" + encodeURIComponent("kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id") + "&pp=0",
        HB = function(a, b) {
            return "/discovery/v1/apis/" + (encodeURIComponent(a) + "/" + encodeURIComponent(b) + GB)
        },
        JB = function(a, b, c, d) {
            if (_.kb(a)) {
                var e = a;
                var f = a.name;
                a = a.version || "v1"
            } else f = a, a = b;
            if (!f || !a) throw new LA("Missing required parameters.");
            var g = c || function() {},
                k = _.kb(d) ? d : {};
            c = function(l) {
                var m = l && l.result;
                if (!m || m.error || !m.name || !l || l.error || l.message || l.message) g(m &&
                    m.error ? m : l && (l.error || l.message || l.message) ? l : new LA("API discovery response missing required fields."));
                else {
                    l = k.root;
                    l = null != m.rootUrl ? String(m.rootUrl) : l;
                    l = "string" === typeof l ? l.replace(/([^\/])\/$/, "$1") : void 0;
                    k.root = l;
                    m.name && m.version && !m.id && (m.id = [m.name, m.version].join(":"));
                    m.id && (k.apiId = m.id, l = "client/batchPath/" + m.id, m.batchPath && !_.R(l) && _.Ne(l, m.batchPath));
                    var n = m.servicePath,
                        p = m.parameters,
                        t = function(v) {
                            _.Fl(v, function(u) {
                                if (!(u && u.id && u.path && u.httpMethod)) throw new LA("Missing required parameters");
                                var w = u.id.split("."),
                                    y = window.gapi.client,
                                    B;
                                for (B = 0; B < w.length - 1; B++) {
                                    var A = w[B];
                                    y[A] = y[A] || {};
                                    y = y[A]
                                }
                                var E, K;
                                k && (k.hasOwnProperty("root") && (E = k.root), k.hasOwnProperty("apiId") && (K = k.apiId));
                                A = window.gapi.client[w[0]];
                                A.TF || (A.TF = {
                                    servicePath: n || "",
                                    parameters: p,
                                    apiId: K
                                });
                                w = w[B];
                                y[w] || (y[w] = _.Kj(IB, {
                                        path: "string" === typeof u.path ? u.path : null,
                                        httpMethod: "string" === typeof u.httpMethod ? u.httpMethod : null,
                                        parameters: u.parameters,
                                        parameterName: (u.request || {}).parameterName || "",
                                        request: u.request,
                                        root: E
                                    },
                                    A.TF))
                            })
                        },
                        r = function(v) {
                            _.Fl(v, function(u) {
                                t(u.methods);
                                r(u.resources)
                            })
                        };
                    r(m.resources);
                    t(m.methods);
                    g.call()
                }
            };
            e ? c({
                result: e
            }) : 0 < f.indexOf("://") ? HA({
                path: f,
                params: {
                    pp: 0,
                    fields: 0 <= ("/" + f).indexOf("/discovery/v1/apis/") ? "kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id" : 'fields["kind"],fields["name"],fields["version"],fields["rootUrl"],fields["servicePath"],fields["resources"],fields["parameters"],fields["methods"],fields["batchPath"],fields["id"]'
                }
            }).then(c, c) : HA({
                path: HB(f,
                    a),
                root: d && d.root
            }).then(c, c)
        },
        IB = function(a, b, c, d) {
            var e = b.servicePath || "";
            _.qd(e, "/") || (e = "/" + e);
            var f = KB(a.path, [a.parameters, b.parameters], c || {});
            c = f.Ik;
            var g = f.X2;
            e = _.qy(e, f.path);
            f = g.root;
            delete g.root;
            var k = a.parameterName;
            !k && 1 == _.gy(g) && g.hasOwnProperty("resource") && (k = "resource");
            if (k) {
                var l = g[k];
                delete g[k]
            }
            null == l && (l = d);
            null == l && a.request && (_.Tq(g) && (g = void 0), l = g);
            k = {};
            var m = a.httpMethod;
            "GET" == m && void 0 !== l && "" != String(l) && (_.bh(k, _.Ig.VG, m), m = "POST");
            if ((null == l || null != d) && g)
                for (var n in g) "string" ===
                    typeof g[n] && (c[n] = g[n]);
            return HA({
                path: e,
                method: m,
                params: c,
                headers: k,
                body: l,
                root: f || a.root,
                apiId: b.apiId
            }, 1)
        },
        KB = function(a, b, c) {
            c = _.Vj(c);
            var d = {};
            _.El(b, function(e) {
                _.Fl(e, function(f, g) {
                    var k = f.required;
                    if ("path" == f.location)
                        if (Object.prototype.hasOwnProperty.call(c, g)) - 1 != a.indexOf("{" + g + "}") ? (f = _.qh(c[g]), a = a.replace("{" + g + "}", f)) : -1 != a.indexOf("{+" + g + "}") && (f = encodeURI(String(c[g])), a = a.replace("{+" + g + "}", f)), delete c[g];
                        else {
                            if (k) throw new LA("Required path parameter " + g + " is missing.");
                        }
                    else "query" ==
                        f.location && Object.prototype.hasOwnProperty.call(c, g) && (d[g] = c[g], delete c[g])
                })
            });
            if (b = c.trace) d.trace = b, delete c.trace;
            return {
                path: a,
                Ik: d,
                X2: c
            }
        };
    var LB = function(a, b, c, d) {
            var e = b || "v1",
                f = _.kb(d) ? d : {
                    root: d
                };
            if (c) JB(a, e, function(g) {
                if (g)
                    if (g.error) c(g);
                    else {
                        var k = "API discovery was unsuccessful.";
                        if (g.message || g.message) k = g.message || g.message;
                        c({
                            error: k,
                            code: 0
                        })
                    }
                else c()
            }, f);
            else return new _.rk(function(g, k) {
                var l = function(m) {
                    m ? k(m) : g()
                };
                try {
                    JB(a, e, l, f)
                } catch (m) {
                    k(m)
                }
            })
        },
        MB = new RegExp(/^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source + /(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source),
        NB = function(a, b) {
            if (!a) throw new LA("Missing required parameters");
            var c = "object" === typeof a ? a : {
                path: a
            };
            a = c.callback;
            delete c.callback;
            b = new nB(c, b);
            if (c = !!_.R("client/xd4") && JA()) {
                var d = b.qg();
                c = d.path;
                (d = d.root) && "/" !== d.charAt(d.length - 1) && (d += "/");
                d && c && c.substr(0, d.length) === d && (c = c.substr(d.length));
                c = !c.match(MB)
            }
            c && (b = new oB(b));
            return a ? (b.execute(a), null) : b
        };
    IA.FH(function(a) {
        return NB.apply(null, arguments)
    });
    var OB = function(a, b) {
            if (!a) throw new LA("Missing required parameters");
            for (var c = a.split("."), d = window.gapi.client, e = 0; e < c.length - 1; e++) {
                var f = c[e];
                d[f] = d[f] || {};
                d = d[f]
            }
            c = c[c.length - 1];
            if (!d[c]) {
                var g = b || {};
                d[c] = function(k) {
                    var l = "string" == typeof g ? g : g.root;
                    k && k.root && (l = k.root);
                    return new nB({
                        method: a,
                        apiVersion: g.apiVersion,
                        rpcParams: k,
                        transport: {
                            name: "googleapis",
                            root: l
                        }
                    }, 2)
                }
            }
        },
        PB = function(a) {
            return new EB(a)
        };
    IA.DH(function(a) {
        return PB.apply(null, arguments)
    });
    var QB = function(a) {
        _.We(a + " is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs")
    };
    _.z("gapi.client.init", function(a) {
        a.apiKey && _.Ne("client/apiKey", a.apiKey);
        var b = (0, _.yb)(a.discoveryDocs || [], function(d) {
            return LB(d)
        });
        if ((a.clientId || a.client_id) && a.scope) {
            var c = new _.rk(function(d, e) {
                _.q.gapi.load("auth2", {
                    callback: function() {
                        _.q.gapi.auth2.init.call(_.q.gapi.auth2, a).then(function() {
                            d()
                        }, e)
                    },
                    onerror: function(f) {
                        e(f || Error("xa"))
                    }
                })
            });
            b.push(c)
        } else(a.clientId || a.client_id || a.scope) && _.We("client_id and scope must both be provided to initialize OAuth.");
        return _.zk(b).then(function() {})
    });
    _.z("gapi.client.load", LB);
    _.z("gapi.client.newBatch", PB);
    _.z("gapi.client.newRpcBatch", function() {
        QB("gapi.client.newRpcBatch");
        return PB()
    });
    _.z("gapi.client.newHttpBatch", function(a) {
        QB("gapi.client.newHttpBatch");
        return new EB(a, 0)
    });
    _.z("gapi.client.register", function(a, b) {
        QB("gapi.client.register");
        var c;
        b && (c = {
            apiVersion: b.apiVersion,
            root: b.root
        });
        OB(a, c)
    });
    _.z("gapi.client.request", NB);
    _.z("gapi.client.rpcRequest", function(a, b, c) {
        QB("gapi.client.rpcRequest");
        if (!a) throw new LA('Missing required parameter "method".');
        return new nB({
            method: a,
            apiVersion: b,
            rpcParams: c,
            transport: {
                name: "googleapis",
                root: c && c.root || ""
            }
        }, 2)
    });
    _.z("gapi.client.setApiKey", function(a) {
        _.Ne("client/apiKey", a);
        _.Ne("googleapis.config/developerKey", a)
    });
    _.z("gapi.client.setApiVersions", function(a) {
        QB("gapi.client.setApiVersions");
        _.Ne("googleapis.config/versions", a)
    });
    _.z("gapi.client.getToken", function(a) {
        return _.Jh(a)
    });
    _.z("gapi.client.setToken", function(a, b) {
        a ? _.nw(a, b) : _.ow(b)
    });
    _.z("gapi.client.AuthType", {
        M3: "auto",
        NONE: "none",
        e8: "oauth2",
        V5: "1p"
    });
    _.z("gapi.client.AuthType.AUTO", "auto");
    _.z("gapi.client.AuthType.NONE", "none");
    _.z("gapi.client.AuthType.OAUTH2", "oauth2");
    _.z("gapi.client.AuthType.FIRST_PARTY", "1p");

});
// Google Inc.

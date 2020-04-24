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

    _.z("gapi.iframes.create", _.Jj);

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

    _.fp = function(a) {
        a.S.closeClickDetection = !0
    };
    _.Ll.prototype.sx = function() {};
    _.Ll.prototype.sD = function() {};

    _.cm.prototype.aO = _.kd(17, function(a) {
        this.ox("onRestyleSelfFilter", a)
    });
    _.cm.prototype.DN = _.kd(16, function(a) {
        this.ox("onCloseSelfFilter", a)
    });
    _.cm.prototype.HJ = _.kd(15, function() {
        return this.$a
    });
    _.cm.prototype.ox = _.kd(14, function(a, b) {
        this.yM[a] = b
    });
    _.Ll.prototype.UM = _.kd(13, function(a, b) {
        this.register("_g_wasRestyled", a, b)
    });
    _.Ll.prototype.eo = _.kd(10, function() {
        return this.Lb
    });
    _.cm.prototype.eo = _.kd(9, function() {
        return this.Lb
    });
    _.z("gapi.iframes.registerStyle", function(a, b) {
        _.jm[a] = b
    });
    _.z("gapi.iframes.registerBeforeOpenStyle", function(a, b) {
        _.gm[a] = b
    });
    _.z("gapi.iframes.getStyle", _.im);
    _.z("gapi.iframes.getBeforeOpenStyle", function(a) {
        return _.gm[a]
    });
    _.z("gapi.iframes.registerIframesApi", _.nm);
    _.z("gapi.iframes.registerIframesApiHandler", _.om);
    _.z("gapi.iframes.getContext", _.qm);
    _.z("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.Ml);
    _.z("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.Ul);
    _.z("gapi.iframes.makeWhiteListIframesFilter", _.Gm);
    _.z("gapi.iframes.Context", _.cm);
    _.z("gapi.iframes.Context.prototype.isDisposed", _.cm.prototype.eo);
    _.z("gapi.iframes.Context.prototype.getWindow", _.cm.prototype.vb);
    _.z("gapi.iframes.Context.prototype.getFrameName", _.cm.prototype.wd);
    _.z("gapi.iframes.Context.prototype.getGlobalParam", _.cm.prototype.dB);
    _.z("gapi.iframes.Context.prototype.setGlobalParam", _.cm.prototype.ox);
    _.z("gapi.iframes.Context.prototype.open", _.cm.prototype.open);
    _.z("gapi.iframes.Context.prototype.openChild", _.cm.prototype.fi);
    _.z("gapi.iframes.Context.prototype.getParentIframe", _.cm.prototype.HJ);
    _.z("gapi.iframes.Context.prototype.closeSelf", _.cm.prototype.Az);
    _.z("gapi.iframes.Context.prototype.restyleSelf", _.cm.prototype.bE);
    _.z("gapi.iframes.Context.prototype.setCloseSelfFilter", _.cm.prototype.DN);
    _.z("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.cm.prototype.aO);
    _.z("gapi.iframes.Iframe", _.Ll);
    _.z("gapi.iframes.Iframe.prototype.isDisposed", _.Ll.prototype.eo);
    _.z("gapi.iframes.Iframe.prototype.getContext", _.Ll.prototype.getContext);
    _.z("gapi.iframes.Iframe.prototype.getFrameName", _.Ll.prototype.wd);
    _.z("gapi.iframes.Iframe.prototype.getId", _.Ll.prototype.getId);
    _.z("gapi.iframes.Iframe.prototype.register", _.Ll.prototype.register);
    _.z("gapi.iframes.Iframe.prototype.unregister", _.Ll.prototype.unregister);
    _.z("gapi.iframes.Iframe.prototype.send", _.Ll.prototype.send);
    _.z("gapi.iframes.Iframe.prototype.applyIframesApi", _.Ll.prototype.Kp);
    _.z("gapi.iframes.Iframe.prototype.getIframeEl", _.Ll.prototype.Ia);
    _.z("gapi.iframes.Iframe.prototype.getSiteEl", _.Ll.prototype.Za);
    _.z("gapi.iframes.Iframe.prototype.setSiteEl", _.Ll.prototype.kf);
    _.z("gapi.iframes.Iframe.prototype.getWindow", _.Ll.prototype.vb);
    _.z("gapi.iframes.Iframe.prototype.getOrigin", _.Ll.prototype.getOrigin);
    _.z("gapi.iframes.Iframe.prototype.close", _.Ll.prototype.close);
    _.z("gapi.iframes.Iframe.prototype.restyle", _.Ll.prototype.Io);
    _.z("gapi.iframes.Iframe.prototype.restyleDone", _.Ll.prototype.Jo);
    _.z("gapi.iframes.Iframe.prototype.registerWasRestyled", _.Ll.prototype.UM);
    _.z("gapi.iframes.Iframe.prototype.registerWasClosed", _.Ll.prototype.Jk);
    _.z("gapi.iframes.Iframe.prototype.getParam", _.Ll.prototype.ev);
    _.z("gapi.iframes.Iframe.prototype.setParam", _.Ll.prototype.YN);
    _.z("gapi.iframes.Iframe.prototype.ping", _.Ll.prototype.ping);

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

    var ZO = function(a, b) {
        a.S.data = b;
        return a
    };
    _.cm.prototype.XM = _.kd(19, function(a, b) {
        a = _.ue(this.iD, a, []);
        if (b)
            for (var c = 0, d = !1; !d && c < a.length; c++) a[c].kb() === b && (d = !0, a.splice(c, 1));
        else a.splice(0, a.length)
    });
    _.cm.prototype.Dz = _.kd(18, function(a, b) {
        a = new _.sm(a);
        var c = new _.sm(b),
            d = _.Zl(a);
        b = a.getIframe();
        var e = c.getIframe();
        if (e) {
            var f = _.Bl(a),
                g = new _.Vl;
            _.Dm(b, e, g);
            ZO(_.tm((new _.sm(g.value())).Rk(f), a.S.role), a.S.data).Aj(d);
            var k = new _.Vl;
            _.Dm(e, b, k);
            ZO(_.tm((new _.sm(k.value())).Rk(f), c.S.role), c.S.data).Aj(!0);
            _.Rl(b, "_g_connect", g.value(), function() {
                d || _.Rl(e, "_g_connect", k.value())
            });
            d && _.Rl(e, "_g_connect", k.value())
        } else c = {}, ZO(_.tm(_.um(new _.sm(c)), a.S.role), a.S.data), _.Rl(b, "_g_connect", c)
    });
    _.z("gapi.iframes.Context.prototype.addOnConnectHandler", _.cm.prototype.Ry);
    _.z("gapi.iframes.Context.prototype.removeOnConnectHandler", _.cm.prototype.XM);
    _.z("gapi.iframes.Context.prototype.addOnOpenerHandler", _.cm.prototype.Rj);
    _.z("gapi.iframes.Context.prototype.connectIframes", _.cm.prototype.Dz);

});
// Google Inc.

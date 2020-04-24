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

    var zh, Ah = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (a) {}
            return null
        },
        Bh = function(a) {
            var b = _.Pg(a);
            if (String(a) != b) throw Error("y");
            (a = b) && "/" == a.charAt(a.length - 1) || (a = (a || "") + "/");
            _.Qf.register("init", function() {
                Bh(a)
            });
            zh = a;
            _.Te.getUrlParameters(window.location.href)
        },
        Ch = function(a, b, c, d) {
            var e = {};
            if (b)
                for (var f in b)
                    if (Object.prototype.hasOwnProperty.call(b, f)) {
                        var g = _.ah(b, f),
                            k = _.$g(f, g);
                        k && void 0 !== g && _.bh(e, k, g, !0)
                    }
            return {
                body: a,
                headers: e,
                status: "number" === typeof c ? c : void 0,
                statusText: d || void 0
            }
        },
        Dh = function(a, b) {
            a = {
                error: {
                    code: -1,
                    message: a
                }
            };
            if ("/rpc" == b.url) {
                b = b.body;
                for (var c = [], d = 0; d < b.length; d++) {
                    var e = _.If(a);
                    e = _.Hf(e);
                    e.id = b[d].id;
                    c.push(e)
                }
                a = c
            }
            return _.If(a)
        },
        Eh = function(a, b, c, d) {
            a = a || {};
            var e = a.headers || {},
                f = a.httpMethod || "GET",
                g = String(a.url || ""),
                k = a.urlParams || null,
                l = a.body || null;
            c = c || null;
            d = d || null;
            g = _.Pg(g);
            g = zh + String(g || "/").substr(1);
            g = _.wh(g, k);
            var m = [];
            k = [];
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e,
                        n)) {
                    m.push(n);
                    var p = _.ah(e, n);
                    void 0 !== p && (n = _.Zg(n, p)) && k.push([n, p])
                }
            for (; m.length;) delete e[m.pop()];
            for (; k.length;) m = k.pop(), _.bh(e, m[0], m[1]);
            _.bh(e, _.Ig.XG, c || void 0);
            _.bh(e, _.Ig.Qy, d || void 0);
            _.bh(e, _.Ig.Ny, "base64");
            l && "object" === typeof l && (l = _.If(l));
            var t = Ah();
            if (!t) throw Error("z");
            t.open(f, g);
            t.onreadystatechange = function() {
                if (4 == t.readyState && 0 !== t.status) {
                    var r = Ch(t.responseText, _.ch(t.getAllResponseHeaders(), !0), t.status, t.statusText);
                    b(r)
                }
            };
            t.onerror = function() {
                var r = Dh("A network error occurred, and the request could not be completed.",
                    a);
                r = Ch(r);
                b(r)
            };
            for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (f = e[n], t.setRequestHeader(unescape(encodeURIComponent(n)), unescape(encodeURIComponent(f))));
            t.send(l ? l : null)
        },
        Fh = function(a, b, c, d) {
            var e = {},
                f = 0;
            if (0 == a.length) b(e);
            else {
                var g = function(k) {
                    var l = k.key;
                    k = k.params;
                    try {
                        Eh(k, function(n) {
                            e[l] = {
                                data: n
                            };
                            f++;
                            a.length == f ? b(_.If(e)) : g(a[f])
                        }, c, d)
                    } catch (n) {
                        var m = "";
                        n && (m += " [", n.name && (m += n.name + ": "), m += n.message || String(n), m += "]");
                        k = Dh("An error occurred, and the request could not be completed." +
                            m, k);
                        k = Ch(k);
                        e[l] = {
                            data: k
                        };
                        f++;
                        a.length == f ? b(_.If(e)) : g(a[f])
                    }
                };
                g(a[f])
            }
        };
    _.yg = _.yg || {};
    _.yg.N_ = function() {
        _.Qf.register("makeHttpRequests", function(a) {
            ".." == this.f && this.t == _.Qf.getAuthToken("..") && this.origin == _.Qf.getTargetOrigin("..") && Fh.call(this, a, this.callback, this.origin, this.referer)
        })
    };
    _.yg.init = function() {
        var a = String(window.location.pathname);
        18 <= a.length && "/static/proxy.html" == a.substr(a.length - 18) && (a = a.substr(0, a.length - 18));
        a || (a = "/");
        _.yg.WK(a)
    };
    _.yg.WK = function(a) {
        var b = _.Pg(a);
        if (String(a) != b) throw Error("y");
        _.yg.N_();
        Bh(a);
        _.Qf.call("..", "ready:" + _.Qf.getAuthToken(".."))
    };
    _.z("googleapis.ApiServer.makeHttpRequests", Fh);
    _.z("googleapis.ApiServer.initWithPath", Bh);
    _.z("googleapis.server.init", _.yg.init);
    _.z("googleapis.server.initWithPath", _.yg.WK);

});
// Google Inc.

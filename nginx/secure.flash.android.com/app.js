/*

 ISC License (ISC)
 Copyright (c) 2016, Jake Archibald <jaffathecake@gmail.com>

 Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee
 is hereby granted, provided that the above copyright notice and this permission notice appear in all
 copies.

 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS
 SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
 AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS
 SOFTWARE.
*/
var idb = function(e) {
    const t = (e,t)=>t.some(t=>e instanceof t);
    let n, r;
    const o = new WeakMap
      , s = new WeakMap
      , a = new WeakMap
      , i = new WeakMap
      , c = new WeakMap;
    let u = {
        get(e, t, n) {
            if (e instanceof IDBTransaction) {
                if ("done" === t)
                    return s.get(e);
                if ("objectStoreNames" === t)
                    return e.objectStoreNames || a.get(e);
                if ("store" === t)
                    return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
            }
            return p(e[t])
        },
        has: (e,t)=>e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };
    function d(e) {
        return e !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (r || (r = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
            return e.apply(l(this), t),
            p(o.get(this))
        }
        : function(...t) {
            return p(e.apply(l(this), t))
        }
        : function(t, ...n) {
            const r = e.call(l(this), t, ...n);
            return a.set(r, t.sort ? t.sort() : [t]),
            p(r)
        }
    }
    function f(e) {
        return "function" == typeof e ? d(e) : (e instanceof IDBTransaction && function(e) {
            if (s.has(e))
                return;
            const t = new Promise((t,n)=>{
                const r = ()=>{
                    e.removeEventListener("complete", o),
                    e.removeEventListener("error", s),
                    e.removeEventListener("abort", s)
                }
                  , o = ()=>{
                    t(),
                    r()
                }
                  , s = ()=>{
                    n(e.error),
                    r()
                }
                ;
                e.addEventListener("complete", o),
                e.addEventListener("error", s),
                e.addEventListener("abort", s)
            }
            );
            s.set(e, t)
        }(e),
        t(e, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e,u) : e)
    }
    function p(e) {
        if (e instanceof IDBRequest)
            return function(e) {
                const t = new Promise((t,n)=>{
                    const r = ()=>{
                        e.removeEventListener("success", o),
                        e.removeEventListener("error", s)
                    }
                      , o = ()=>{
                        t(p(e.result)),
                        r()
                    }
                      , s = ()=>{
                        n(e.error),
                        r()
                    }
                    ;
                    e.addEventListener("success", o),
                    e.addEventListener("error", s)
                }
                );
                return t.then(t=>{
                    t instanceof IDBCursor && o.set(t, e)
                }
                ),
                c.set(t, e),
                t
            }(e);
        if (i.has(e))
            return i.get(e);
        const t = f(e);
        return t !== e && (i.set(e, t),
        c.set(t, e)),
        t
    }
    const l = e=>c.get(e);
    const D = ["get", "getKey", "getAll", "getAllKeys", "count"]
      , v = ["put", "add", "delete", "clear"]
      , B = new Map;
    function I(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
            return;
        if (B.get(t))
            return B.get(t);
        const n = t.replace(/FromIndex$/, "")
          , r = t !== n
          , o = v.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !D.includes(n))
            return;
        const s = async function(e, ...t) {
            const s = this.transaction(e, o ? "readwrite" : "readonly");
            let a = s.store;
            r && (a = a.index(t.shift()));
            const i = a[n](...t);
            return o && await s.done,
            i
        };
        return B.set(t, s),
        s
    }
    return u = (e=>({
        get: (t,n,r)=>I(t, n) || e.get(t, n, r),
        has: (t,n)=>!!I(t, n) || e.has(t, n)
    }))(u),
    e.openDB = function(e, t, {blocked: n, upgrade: r, blocking: o}={}) {
        const s = indexedDB.open(e, t)
          , a = p(s);
        return r && s.addEventListener("upgradeneeded", e=>{
            r(p(s.result), e.oldVersion, e.newVersion, p(s.transaction))
        }
        ),
        n && s.addEventListener("blocked", ()=>n()),
        o && a.then(e=>e.addEventListener("versionchange", o)),
        a
    }
    ,
    e.deleteDB = function(e, {blocked: t}={}) {
        const n = indexedDB.deleteDatabase(e);
        return t && n.addEventListener("blocked", ()=>t()),
        p(n).then(()=>void 0)
    }
    ,
    e.unwrap = l,
    e.wrap = p,
    e
}({});
/*

 Copyright (c) 2003-2005 Tom Wu
 All Rights Reserved.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
 EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
 WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

 IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
 INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
 THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
 OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

 In addition, the following condition applies:

 All redistributions must retain an intact copy of this copyright notice
 and disclaimer.
*/
var dbits;
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 16777215) == 15715070;
function BigInteger(a, b, c) {
    if (a != null)
        if ("number" == typeof a)
            this.fromNumber(a, b, c);
        else if (b == null && "string" != typeof a)
            this.fromString(a, 256);
        else
            this.fromString(a, b)
}
function nbi() {
    return new BigInteger(null)
}
function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
        var v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 67108864);
        w[j++] = v & 67108863
    }
    return c
}
function am2(i, x, w, j, c, n) {
    var xl = x & 32767
      , xh = x >> 15;
    while (--n >= 0) {
        var l = this[i] & 32767;
        var h = this[i++] >> 15;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 1073741823
    }
    return c
}
function am3(i, x, w, j, c, n) {
    var xl = x & 16383
      , xh = x >> 14;
    while (--n >= 0) {
        var l = this[i] & 16383;
        var h = this[i++] >> 14;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 16383) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 268435455
    }
    return c
}
if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30
} else if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26
} else {
    BigInteger.prototype.am = am3;
    dbits = 28
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv)
    BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv)
    BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv)
    BI_RC[rr++] = vv;
function int2char(n) {
    return BI_RM.charAt(n)
}
function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return c == null ? -1 : c
}
function bnpCopyTo(r) {
    for (var i = this.t - 1; i >= 0; --i)
        r[i] = this[i];
    r.t = this.t;
    r.s = this.s
}
function bnpFromInt(x) {
    this.t = 1;
    this.s = x < 0 ? -1 : 0;
    if (x > 0)
        this[0] = x;
    else if (x < -1)
        this[0] = x + this.DV;
    else
        this.t = 0
}
function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r
}
function bnpFromString(s, b) {
    var k;
    if (b == 16)
        k = 4;
    else if (b == 8)
        k = 3;
    else if (b == 256)
        k = 8;
    else if (b == 2)
        k = 1;
    else if (b == 32)
        k = 5;
    else if (b == 4)
        k = 2;
    else {
        this.fromRadix(s, b);
        return
    }
    this.t = 0;
    this.s = 0;
    var i = s.length
      , mi = false
      , sh = 0;
    while (--i >= 0) {
        var x = k == 8 ? s[i] & 255 : intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-")
                mi = true;
            continue
        }
        mi = false;
        if (sh == 0)
            this[this.t++] = x;
        else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
            this[this.t++] = x >> this.DB - sh
        } else
            this[this.t - 1] |= x << sh;
        sh += k;
        if (sh >= this.DB)
            sh -= this.DB
    }
    if (k == 8 && (s[0] & 128) != 0) {
        this.s = -1;
        if (sh > 0)
            this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh
    }
    this.clamp();
    if (mi)
        BigInteger.ZERO.subTo(this, this)
}
function bnpClamp() {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c)
        --this.t
}
function bnToString(b) {
    if (this.s < 0)
        return "-" + this.negate().toString(b);
    var k;
    if (b == 16)
        k = 4;
    else if (b == 8)
        k = 3;
    else if (b == 2)
        k = 1;
    else if (b == 32)
        k = 5;
    else if (b == 4)
        k = 2;
    else
        return this.toRadix(b);
    var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
    var p = this.DB - i * this.DB % k;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d)
        }
        while (i >= 0) {
            if (p < k) {
                d = (this[i] & (1 << p) - 1) << k - p;
                d |= this[--i] >> (p += this.DB - k)
            } else {
                d = this[i] >> (p -= k) & km;
                if (p <= 0) {
                    p += this.DB;
                    --i
                }
            }
            if (d > 0)
                m = true;
            if (m)
                r += int2char(d)
        }
    }
    return m ? r : "0"
}
function bnNegate() {
    var r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r
}
function bnAbs() {
    return this.s < 0 ? this.negate() : this
}
function bnCompareTo(a) {
    var r = this.s - a.s;
    if (r != 0)
        return r;
    var i = this.t;
    r = i - a.t;
    if (r != 0)
        return this.s < 0 ? -r : r;
    while (--i >= 0)
        if ((r = this[i] - a[i]) != 0)
            return r;
    return 0
}
function nbits(x) {
    var r = 1, t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1
    }
    return r
}
function bnBitLength() {
    if (this.t <= 0)
        return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}
function bnpDLShiftTo(n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i)
        r[i + n] = this[i];
    for (i = n - 1; i >= 0; --i)
        r[i] = 0;
    r.t = this.t + n;
    r.s = this.s
}
function bnpDRShiftTo(n, r) {
    for (var i = n; i < this.t; ++i)
        r[i - n] = this[i];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s
}
function bnpLShiftTo(n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = this[i] >> cbs | c;
        c = (this[i] & bm) << bs
    }
    for (i = ds - 1; i >= 0; --i)
        r[i] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp()
}
function bnpRShiftTo(n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
        r.t = 0;
        return
    }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs
    }
    if (bs > 0)
        r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp()
}
function bnpSubTo(a, r) {
    var i = 0
      , c = 0
      , m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB
    }
    if (a.t < this.t) {
        c -= a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c += this.s
    } else {
        c += this.s;
        while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c -= a.s
    }
    r.s = c < 0 ? -1 : 0;
    if (c < -1)
        r[i++] = this.DV + c;
    else if (c > 0)
        r[i++] = c;
    r.t = i;
    r.clamp()
}
function bnpMultiplyTo(a, r) {
    var x = this.abs()
      , y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0)
        r[i] = 0;
    for (i = 0; i < y.t; ++i)
        r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s != a.s)
        BigInteger.ZERO.subTo(r, r)
}
function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2 * x.t;
    while (--i >= 0)
        r[i] = 0;
    for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x[i], r, 2 * i, 0, 1);
        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1
        }
    }
    if (r.t > 0)
        r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    r.s = 0;
    r.clamp()
}
function bnpDivRemTo(m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0)
        return;
    var pt = this.abs();
    if (pt.t < pm.t) {
        if (q != null)
            q.fromInt(0);
        if (r != null)
            this.copyTo(r);
        return
    }
    if (r == null)
        r = nbi();
    var y = nbi()
      , ts = this.s
      , ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]);
    if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r)
    } else {
        pm.copyTo(y);
        pt.copyTo(r)
    }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0)
        return;
    var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt
      , d2 = (1 << this.F1) / yt
      , e = 1 << this.F2;
    var i = r.t
      , j = i - ys
      , t = q == null ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r)
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);
    while (y.t < ys)
        y[y.t++] = 0;
    while (--j >= 0) {
        var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd)
                r.subTo(t, r)
        }
    }
    if (q != null) {
        r.drShiftTo(ys, q);
        if (ts != ms)
            BigInteger.ZERO.subTo(q, q)
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0)
        r.rShiftTo(nsh, r);
    if (ts < 0)
        BigInteger.ZERO.subTo(r, r)
}
function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
        a.subTo(r, r);
    return r
}
function Classic(m) {
    this.m = m
}
function cConvert(x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0)
        return x.mod(this.m);
    else
        return x
}
function cRevert(x) {
    return x
}
function cReduce(x) {
    x.divRemTo(this.m, null, x)
}
function cMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r)
}
function cSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r)
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
    if (this.t < 1)
        return 0;
    var x = this[0];
    if ((x & 1) == 0)
        return 0;
    var y = x & 3;
    y = y * (2 - (x & 15) * y) & 15;
    y = y * (2 - (x & 255) * y) & 255;
    y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
    y = y * (2 - x * y % this.DV) % this.DV;
    return y > 0 ? this.DV - y : -y
}
function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << m.DB - 15) - 1;
    this.mt2 = 2 * m.t
}
function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
        this.m.subTo(r, r);
    return r
}
function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r
}
function montReduce(x) {
    while (x.t <= this.mt2)
        x[x.t++] = 0;
    for (var i = 0; i < this.m.t; ++i) {
        var j = x[i] & 32767;
        var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++
        }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0)
        x.subTo(this.m, x)
}
function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r)
}
function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r)
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0
}
function bnpExp(e, z) {
    if (e > 4294967295 || e < 1)
        return BigInteger.ONE;
    var r = nbi()
      , r2 = nbi()
      , g = z.convert(this)
      , i = nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
        z.sqrTo(r, r2);
        if ((e & 1 << i) > 0)
            z.mulTo(r2, g, r);
        else {
            var t = r;
            r = r2;
            r2 = t
        }
    }
    return z.revert(r)
}
function bnModPowInt(e, m) {
    var z;
    if (e < 256 || m.isEven())
        z = new Classic(m);
    else
        z = new Montgomery(m);
    return this.exp(e, z)
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
function bnClone() {
    var r = nbi();
    this.copyTo(r);
    return r
}
function bnIntValue() {
    if (this.s < 0)
        if (this.t == 1)
            return this[0] - this.DV;
        else {
            if (this.t == 0)
                return -1
        }
    else if (this.t == 1)
        return this[0];
    else if (this.t == 0)
        return 0;
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
}
function bnByteValue() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24
}
function bnShortValue() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16
}
function bnpChunkSize(r) {
    return Math.floor(Math.LN2 * this.DB / Math.log(r))
}
function bnSigNum() {
    if (this.s < 0)
        return -1;
    else if (this.t <= 0 || this.t == 1 && this[0] <= 0)
        return 0;
    else
        return 1
}
function bnpToRadix(b) {
    if (b == null)
        b = 10;
    if (this.signum() == 0 || b < 2 || b > 36)
        return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b, cs);
    var d = nbv(a)
      , y = nbi()
      , z = nbi()
      , r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z)
    }
    return z.intValue().toString(b) + r
}
function bnpFromRadix(s, b) {
    this.fromInt(0);
    if (b == null)
        b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs)
      , mi = false
      , j = 0
      , w = 0;
    for (var i = 0; i < s.length; ++i) {
        var x = intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0)
                mi = true;
            continue
        }
        w = b * w + x;
        if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0
        }
    }
    if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0)
    }
    if (mi)
        BigInteger.ZERO.subTo(this, this)
}
function bnpFromNumber(a, b, c) {
    if ("number" == typeof b)
        if (a < 2)
            this.fromInt(1);
        else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1))
                this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
            if (this.isEven())
                this.dAddOffset(1, 0);
            while (!this.isProbablePrime(b)) {
                this.dAddOffset(2, 0);
                if (this.bitLength() > a)
                    this.subTo(BigInteger.ONE.shiftLeft(a - 1), this)
            }
        }
    else {
        var x = new Array
          , t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);
        if (t > 0)
            x[0] &= (1 << t) - 1;
        else
            x[0] = 0;
        this.fromString(x, 256)
    }
}
function bnToByteArray() {
    var i = this.t
      , r = new Array;
    r[0] = this.s;
    var p = this.DB - i * this.DB % 8, d, k = 0;
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
            r[k++] = d | this.s << this.DB - p;
        while (i >= 0) {
            if (p < 8) {
                d = (this[i] & (1 << p) - 1) << 8 - p;
                d |= this[--i] >> (p += this.DB - 8)
            } else {
                d = this[i] >> (p -= 8) & 255;
                if (p <= 0) {
                    p += this.DB;
                    --i
                }
            }
            if ((d & 128) != 0)
                d |= -256;
            if (k == 0 && (this.s & 128) != (d & 128))
                ++k;
            if (k > 0 || d != this.s)
                r[k++] = d
        }
    }
    return r
}
function bnEquals(a) {
    return this.compareTo(a) == 0
}
function bnMin(a) {
    return this.compareTo(a) < 0 ? this : a
}
function bnMax(a) {
    return this.compareTo(a) > 0 ? this : a
}
function bnpBitwiseTo(a, op, r) {
    var i, f, m = Math.min(a.t, this.t);
    for (i = 0; i < m; ++i)
        r[i] = op(this[i], a[i]);
    if (a.t < this.t) {
        f = a.s & this.DM;
        for (i = m; i < this.t; ++i)
            r[i] = op(this[i], f);
        r.t = this.t
    } else {
        f = this.s & this.DM;
        for (i = m; i < a.t; ++i)
            r[i] = op(f, a[i]);
        r.t = a.t
    }
    r.s = op(this.s, a.s);
    r.clamp()
}
function op_and(x, y) {
    return x & y
}
function bnAnd(a) {
    var r = nbi();
    this.bitwiseTo(a, op_and, r);
    return r
}
function op_or(x, y) {
    return x | y
}
function bnOr(a) {
    var r = nbi();
    this.bitwiseTo(a, op_or, r);
    return r
}
function op_xor(x, y) {
    return x ^ y
}
function bnXor(a) {
    var r = nbi();
    this.bitwiseTo(a, op_xor, r);
    return r
}
function op_andnot(x, y) {
    return x & ~y
}
function bnAndNot(a) {
    var r = nbi();
    this.bitwiseTo(a, op_andnot, r);
    return r
}
function bnNot() {
    var r = nbi();
    for (var i = 0; i < this.t; ++i)
        r[i] = this.DM & ~this[i];
    r.t = this.t;
    r.s = ~this.s;
    return r
}
function bnShiftLeft(n) {
    var r = nbi();
    if (n < 0)
        this.rShiftTo(-n, r);
    else
        this.lShiftTo(n, r);
    return r
}
function bnShiftRight(n) {
    var r = nbi();
    if (n < 0)
        this.lShiftTo(-n, r);
    else
        this.rShiftTo(n, r);
    return r
}
function lbit(x) {
    if (x == 0)
        return -1;
    var r = 0;
    if ((x & 65535) == 0) {
        x >>= 16;
        r += 16
    }
    if ((x & 255) == 0) {
        x >>= 8;
        r += 8
    }
    if ((x & 15) == 0) {
        x >>= 4;
        r += 4
    }
    if ((x & 3) == 0) {
        x >>= 2;
        r += 2
    }
    if ((x & 1) == 0)
        ++r;
    return r
}
function bnGetLowestSetBit() {
    for (var i = 0; i < this.t; ++i)
        if (this[i] != 0)
            return i * this.DB + lbit(this[i]);
    if (this.s < 0)
        return this.t * this.DB;
    return -1
}
function cbit(x) {
    var r = 0;
    while (x != 0) {
        x &= x - 1;
        ++r
    }
    return r
}
function bnBitCount() {
    var r = 0
      , x = this.s & this.DM;
    for (var i = 0; i < this.t; ++i)
        r += cbit(this[i] ^ x);
    return r
}
function bnTestBit(n) {
    var j = Math.floor(n / this.DB);
    if (j >= this.t)
        return this.s != 0;
    return (this[j] & 1 << n % this.DB) != 0
}
function bnpChangeBit(n, op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r
}
function bnSetBit(n) {
    return this.changeBit(n, op_or)
}
function bnClearBit(n) {
    return this.changeBit(n, op_andnot)
}
function bnFlipBit(n) {
    return this.changeBit(n, op_xor)
}
function bnpAddTo(a, r) {
    var i = 0
      , c = 0
      , m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB
    }
    if (a.t < this.t) {
        c += a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c += this.s
    } else {
        c += this.s;
        while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        c += a.s
    }
    r.s = c < 0 ? -1 : 0;
    if (c > 0)
        r[i++] = c;
    else if (c < -1)
        r[i++] = this.DV + c;
    r.t = i;
    r.clamp()
}
function bnAdd(a) {
    var r = nbi();
    this.addTo(a, r);
    return r
}
function bnSubtract(a) {
    var r = nbi();
    this.subTo(a, r);
    return r
}
function bnMultiply(a) {
    var r = nbi();
    this.multiplyTo(a, r);
    return r
}
function bnSquare() {
    var r = nbi();
    this.squareTo(r);
    return r
}
function bnDivide(a) {
    var r = nbi();
    this.divRemTo(a, r, null);
    return r
}
function bnRemainder(a) {
    var r = nbi();
    this.divRemTo(a, null, r);
    return r
}
function bnDivideAndRemainder(a) {
    var q = nbi()
      , r = nbi();
    this.divRemTo(a, q, r);
    return new Array(q,r)
}
function bnpDMultiply(n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp()
}
function bnpDAddOffset(n, w) {
    if (n == 0)
        return;
    while (this.t <= w)
        this[this.t++] = 0;
    this[w] += n;
    while (this[w] >= this.DV) {
        this[w] -= this.DV;
        if (++w >= this.t)
            this[this.t++] = 0;
        ++this[w]
    }
}
function NullExp() {}
function nNop(x) {
    return x
}
function nMulTo(x, y, r) {
    x.multiplyTo(y, r)
}
function nSqrTo(x, r) {
    x.squareTo(r)
}
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;
function bnPow(e) {
    return this.exp(e, new NullExp)
}
function bnpMultiplyLowerTo(a, n, r) {
    var i = Math.min(this.t + a.t, n);
    r.s = 0;
    r.t = i;
    while (i > 0)
        r[--i] = 0;
    var j;
    for (j = r.t - this.t; i < j; ++i)
        r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
    for (j = Math.min(a.t, n); i < j; ++i)
        this.am(0, a[i], r, i, 0, n - i);
    r.clamp()
}
function bnpMultiplyUpperTo(a, n, r) {
    --n;
    var i = r.t = this.t + a.t - n;
    r.s = 0;
    while (--i >= 0)
        r[i] = 0;
    for (i = Math.max(n - this.t, 0); i < a.t; ++i)
        r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
    r.clamp();
    r.drShiftTo(1, r)
}
function Barrett(m) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m
}
function barrettConvert(x) {
    if (x.s < 0 || x.t > 2 * this.m.t)
        return x.mod(this.m);
    else if (x.compareTo(this.m) < 0)
        return x;
    else {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r
    }
}
function barrettRevert(x) {
    return x
}
function barrettReduce(x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp()
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0)
        x.dAddOffset(1, this.m.t + 1);
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0)
        x.subTo(this.m, x)
}
function barrettSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r)
}
function barrettMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r)
}
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;
function bnModPow(e, m) {
    var i = e.bitLength(), k, r = nbv(1), z;
    if (i <= 0)
        return r;
    else if (i < 18)
        k = 1;
    else if (i < 48)
        k = 3;
    else if (i < 144)
        k = 4;
    else if (i < 768)
        k = 5;
    else
        k = 6;
    if (i < 8)
        z = new Classic(m);
    else if (m.isEven())
        z = new Barrett(m);
    else
        z = new Montgomery(m);
    var g = new Array
      , n = 3
      , k1 = k - 1
      , km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1], g2);
        while (n <= km) {
            g[n] = nbi();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2
        }
    }
    var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
    i = nbits(e[j]) - 1;
    while (j >= 0) {
        if (i >= k1)
            w = e[j] >> i - k1 & km;
        else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0)
                w |= e[j - 1] >> this.DB + i - k1
        }
        n = k;
        while ((w & 1) == 0) {
            w >>= 1;
            --n
        }
        if ((i -= n) < 0) {
            i += this.DB;
            --j
        }
        if (is1) {
            g[w].copyTo(r);
            is1 = false
        } else {
            while (n > 1) {
                z.sqrTo(r, r2);
                z.sqrTo(r2, r);
                n -= 2
            }
            if (n > 0)
                z.sqrTo(r, r2);
            else {
                t = r;
                r = r2;
                r2 = t
            }
            z.mulTo(r2, g[w], r)
        }
        while (j >= 0 && (e[j] & 1 << i) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
                i = this.DB - 1;
                --j
            }
        }
    }
    return z.revert(r)
}
function bnGCD(a) {
    var x = this.s < 0 ? this.negate() : this.clone();
    var y = a.s < 0 ? a.negate() : a.clone();
    if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t
    }
    var i = x.getLowestSetBit()
      , g = y.getLowestSetBit();
    if (g < 0)
        return x;
    if (i < g)
        g = i;
    if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y)
    }
    while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0)
            x.rShiftTo(i, x);
        if ((i = y.getLowestSetBit()) > 0)
            y.rShiftTo(i, y);
        if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x)
        } else {
            y.subTo(x, y);
            y.rShiftTo(1, y)
        }
    }
    if (g > 0)
        y.lShiftTo(g, y);
    return y
}
function bnpModInt(n) {
    if (n <= 0)
        return 0;
    var d = this.DV % n
      , r = this.s < 0 ? n - 1 : 0;
    if (this.t > 0)
        if (d == 0)
            r = this[0] % n;
        else
            for (var i = this.t - 1; i >= 0; --i)
                r = (d * r + this[i]) % n;
    return r
}
function bnModInverse(m) {
    var ac = m.isEven();
    if (this.isEven() && ac || m.signum() == 0)
        return BigInteger.ZERO;
    var u = m.clone()
      , v = this.clone();
    var a = nbv(1)
      , b = nbv(0)
      , c = nbv(0)
      , d = nbv(1);
    while (u.signum() != 0) {
        while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
                if (!a.isEven() || !b.isEven()) {
                    a.addTo(this, a);
                    b.subTo(m, b)
                }
                a.rShiftTo(1, a)
            } else if (!b.isEven())
                b.subTo(m, b);
            b.rShiftTo(1, b)
        }
        while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
                if (!c.isEven() || !d.isEven()) {
                    c.addTo(this, c);
                    d.subTo(m, d)
                }
                c.rShiftTo(1, c)
            } else if (!d.isEven())
                d.subTo(m, d);
            d.rShiftTo(1, d)
        }
        if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac)
                a.subTo(c, a);
            b.subTo(d, b)
        } else {
            v.subTo(u, v);
            if (ac)
                c.subTo(a, c);
            d.subTo(b, d)
        }
    }
    if (v.compareTo(BigInteger.ONE) != 0)
        return BigInteger.ZERO;
    if (d.compareTo(m) >= 0)
        return d.subtract(m);
    if (d.signum() < 0)
        d.addTo(m, d);
    else
        return d;
    if (d.signum() < 0)
        return d.add(m);
    else
        return d
}
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
function bnIsProbablePrime(t) {
    var i, x = this.abs();
    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i)
            if (x[0] == lowprimes[i])
                return true;
        return false
    }
    if (x.isEven())
        return false;
    i = 1;
    while (i < lowprimes.length) {
        var m = lowprimes[i]
          , j = i + 1;
        while (j < lowprimes.length && m < lplim)
            m *= lowprimes[j++];
        m = x.modInt(m);
        while (i < j)
            if (m % lowprimes[i++] == 0)
                return false
    }
    return x.millerRabin(t)
}
function bnpMillerRabin(t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0)
        return false;
    var r = n1.shiftRight(k);
    t = t + 1 >> 1;
    if (t > lowprimes.length)
        t = lowprimes.length;
    var a = nbi();
    for (var i = 0; i < t; ++i) {
        a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var y = a.modPow(r, this);
        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
                y = y.modPowInt(2, this);
                if (y.compareTo(BigInteger.ONE) == 0)
                    return false
            }
            if (y.compareTo(n1) != 0)
                return false
        }
    }
    return true
}
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
BigInteger.prototype.square = bnSquare;
function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array
}
function ARC4init(key) {
    var i, j, t;
    for (i = 0; i < 256; ++i)
        this.S[i] = i;
    j = 0;
    for (i = 0; i < 256; ++i) {
        j = j + this.S[i] + key[i % key.length] & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t
    }
    this.i = 0;
    this.j = 0
}
function ARC4next() {
    var t;
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[t + this.S[this.i] & 255]
}
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
function prng_newstate() {
    return new Arcfour
}
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
function rng_seed_int(x) {
    rng_pool[rng_pptr++] ^= x & 255;
    rng_pool[rng_pptr++] ^= x >> 8 & 255;
    rng_pool[rng_pptr++] ^= x >> 16 & 255;
    rng_pool[rng_pptr++] ^= x >> 24 & 255;
    if (rng_pptr >= rng_psize)
        rng_pptr -= rng_psize
}
function rng_seed_time() {
    rng_seed_int((new Date).getTime())
}
if (rng_pool == null) {
    rng_pool = new Array;
    rng_pptr = 0;
    var t;
    if (window.crypto && window.crypto.getRandomValues) {
        var ua = new Uint8Array(32);
        window.crypto.getRandomValues(ua);
        for (t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t]
    }
    if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
        var z = window.crypto.random(32);
        for (t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255
    }
    while (rng_pptr < rng_psize) {
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255
    }
    rng_pptr = 0;
    rng_seed_time()
}
function rng_get_byte() {
    if (rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
            rng_pool[rng_pptr] = 0;
        rng_pptr = 0
    }
    return rng_state.next()
}
function rng_get_bytes(ba) {
    var i;
    for (i = 0; i < ba.length; ++i)
        ba[i] = rng_get_byte()
}
function SecureRandom() {}
SecureRandom.prototype.nextBytes = rng_get_bytes;
function parseBigInt(str, r) {
    return new BigInteger(str,r)
}
function linebrk(s, n) {
    var ret = "";
    var i = 0;
    while (i + n < s.length) {
        ret += s.substring(i, i + n) + "\n";
        i += n
    }
    return ret + s.substring(i, s.length)
}
function byte2Hex(b) {
    if (b < 16)
        return "0" + b.toString(16);
    else
        return b.toString(16)
}
function pkcs1pad2(s, n) {
    if (n < s.length + 11) {
        alert("Message too long for RSA");
        return null
    }
    var ba = new Array;
    var i = s.length - 1;
    while (i >= 0 && n > 0) {
        var c = s.charCodeAt(i--);
        if (c < 128)
            ba[--n] = c;
        else if (c > 127 && c < 2048) {
            ba[--n] = c & 63 | 128;
            ba[--n] = c >> 6 | 192
        } else {
            ba[--n] = c & 63 | 128;
            ba[--n] = c >> 6 & 63 | 128;
            ba[--n] = c >> 12 | 224
        }
    }
    ba[--n] = 0;
    var rng = new SecureRandom;
    var x = new Array;
    while (n > 2) {
        x[0] = 0;
        while (x[0] == 0)
            rng.nextBytes(x);
        ba[--n] = x[0]
    }
    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba)
}
function RSAKey() {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null
}
function RSASetPublic(N, E) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16)
    } else
        alert("Invalid RSA public key")
}
function RSADoPublic(x) {
    return x.modPowInt(this.e, this.n)
}
function RSAEncrypt(text) {
    var m = pkcs1pad2(text, this.n.bitLength() + 7 >> 3);
    if (m == null)
        return null;
    var c = this.doPublic(m);
    if (c == null)
        return null;
    var h = c.toString(16);
    if ((h.length & 1) == 0)
        return h;
    else
        return "0" + h
}
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] == 0)
        ++i;
    if (b.length - i != n - 1 || b[i] != 2)
        return null;
    ++i;
    while (b[i] != 0)
        if (++i >= b.length)
            return null;
    var ret = "";
    while (++i < b.length) {
        var c = b[i] & 255;
        if (c < 128)
            ret += String.fromCharCode(c);
        else if (c > 191 && c < 224) {
            ret += String.fromCharCode((c & 31) << 6 | b[i + 1] & 63);
            ++i
        } else {
            ret += String.fromCharCode((c & 15) << 12 | (b[i + 1] & 63) << 6 | b[i + 2] & 63);
            i += 2
        }
    }
    return ret
}
function RSASetPrivate(N, E, D) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16)
    } else
        alert("Invalid RSA private key")
}
function RSASetPrivateEx(N, E, D, P, Q, DP, DQ, C) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16);
        this.p = parseBigInt(P, 16);
        this.q = parseBigInt(Q, 16);
        this.dmp1 = parseBigInt(DP, 16);
        this.dmq1 = parseBigInt(DQ, 16);
        this.coeff = parseBigInt(C, 16)
    } else
        alert("Invalid RSA private key")
}
function RSAGenerate(B, E) {
    var rng = new SecureRandom;
    var qs = B >> 1;
    this.e = parseInt(E, 16);
    var ee = new BigInteger(E,16);
    for (; ; ) {
        for (; ; ) {
            this.p = new BigInteger(B - qs,1,rng);
            if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10))
                break
        }
        for (; ; ) {
            this.q = new BigInteger(qs,1,rng);
            if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10))
                break
        }
        if (this.p.compareTo(this.q) <= 0) {
            var t = this.p;
            this.p = this.q;
            this.q = t
        }
        var p1 = this.p.subtract(BigInteger.ONE);
        var q1 = this.q.subtract(BigInteger.ONE);
        var phi = p1.multiply(q1);
        if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
            this.n = this.p.multiply(this.q);
            this.d = ee.modInverse(phi);
            this.dmp1 = this.d.mod(p1);
            this.dmq1 = this.d.mod(q1);
            this.coeff = this.q.modInverse(this.p);
            break
        }
    }
}
function RSADoPrivate(x) {
    if (this.p == null || this.q == null)
        return x.modPow(this.d, this.n);
    var xp = x.mod(this.p).modPow(this.dmp1, this.p);
    var xq = x.mod(this.q).modPow(this.dmq1, this.q);
    while (xp.compareTo(xq) < 0)
        xp = xp.add(this.p);
    return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq)
}
function RSADecrypt(ctext) {
    var c = parseBigInt(ctext, 16);
    var m = this.doPrivate(c);
    if (m == null)
        return null;
    return pkcs1unpad2(m, this.n.bitLength() + 7 >> 3)
}
RSAKey.prototype.doPrivate = RSADoPrivate;
RSAKey.prototype.setPrivate = RSASetPrivate;
RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.decrypt = RSADecrypt;
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var p = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
      , r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }
      , aa = function(a) {
        a = ["object" == typeof globalThis && globalThis, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
      , u = aa(this)
      , v = function() {
        v = function() {}
        ;
        u.Symbol || (u.Symbol = ba)
    }
      , w = function(a, b) {
        this.O = a;
        r(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    w.prototype.toString = function() {
        return this.O
    }
    ;
    var ba = function() {
        function a(c) {
            if (this instanceof a)
                throw new TypeError("Symbol is not a constructor");
            return new w("jscomp_symbol_" + (c || "") + "_" + b++,c)
        }
        var b = 0;
        return a
    }(), y = function() {
        v();
        var a = u.Symbol.iterator;
        a || (a = u.Symbol.iterator = u.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && r(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ca(p(this))
            }
        });
        y = function() {}
    }, ca = function(a) {
        y();
        a = {
            next: a
        };
        a[u.Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }, z = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: p(a)
        }
    }, da = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , A;
    if ("function" == typeof Object.setPrototypeOf)
        A = Object.setPrototypeOf;
    else {
        var B;
        a: {
            var ea = {
                P: !0
            }
              , C = {};
            try {
                C.__proto__ = ea;
                B = C.P;
                break a
            } catch (a) {}
            B = !1
        }
        A = B ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var D = A
      , E = function() {
        this.o = !1;
        this.i = null;
        this.c = void 0;
        this.b = 1;
        this.J = this.A = 0;
        this.j = null
    }
      , F = function(a) {
        if (a.o)
            throw new TypeError("Generator is already running");
        a.o = !0
    };
    E.prototype.s = function(a) {
        this.c = a
    }
    ;
    E.prototype.v = function(a) {
        this.j = {
            I: a,
            V: !0
        };
        this.b = this.A || this.J
    }
    ;
    E.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.b = this.J
    }
    ;
    var G = function(a, b, c) {
        a.b = c;
        return {
            value: b
        }
    }
      , H = function(a) {
        this.a = new E;
        this.Z = a
    };
    H.prototype.s = function(a) {
        F(this.a);
        if (this.a.i)
            return I(this, this.a.i.next, a, this.a.s);
        this.a.s(a);
        return J(this)
    }
    ;
    var fa = function(a, b) {
        F(a.a);
        var c = a.a.i;
        if (c)
            return I(a, "return"in c ? c["return"] : function(f) {
                return {
                    value: f,
                    done: !0
                }
            }
            , b, a.a.return);
        a.a.return(b);
        return J(a)
    };
    H.prototype.v = function(a) {
        F(this.a);
        if (this.a.i)
            return I(this, this.a.i["throw"], a, this.a.s);
        this.a.v(a);
        return J(this)
    }
    ;
    var I = function(a, b, c, f) {
        try {
            var e = b.call(a.a.i, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.a.o = !1,
                e;
            var g = e.value
        } catch (d) {
            return a.a.i = null,
            a.a.v(d),
            J(a)
        }
        a.a.i = null;
        f.call(a.a, g);
        return J(a)
    }
      , J = function(a) {
        for (; a.a.b; )
            try {
                var b = a.Z(a.a);
                if (b)
                    return a.a.o = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.a.c = void 0,
                a.a.v(c)
            }
        a.a.o = !1;
        if (a.a.j) {
            b = a.a.j;
            a.a.j = null;
            if (b.V)
                throw b.I;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
      , ha = function(a) {
        this.next = function(b) {
            return a.s(b)
        }
        ;
        this.throw = function(b) {
            return a.v(b)
        }
        ;
        this.return = function(b) {
            return fa(a, b)
        }
        ;
        y();
        this[Symbol.iterator] = function() {
            return this
        }
    }
      , K = function(a, b) {
        b = new ha(new H(b));
        D && D(b, a.prototype);
        return b
    }
      , L = function(a, b) {
        if (b) {
            var c = u;
            a = a.split(".");
            for (var f = 0; f < a.length - 1; f++) {
                var e = a[f];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            f = c[a];
            b = b(f);
            b != f && null != b && r(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    L("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            if (null == this)
                throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");
            var c = this + "";
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var f = ""; b; )
                if (b & 1 && (f += c),
                b >>>= 1)
                    c += c;
            return f
        }
    });
    L("Object.setPrototypeOf", function(a) {
        return a || D
    });
    var ia = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var f = arguments[c];
            if (f)
                for (var e in f)
                    Object.prototype.hasOwnProperty.call(f, e) && (a[e] = f[e])
        }
        return a
    }
    ;
    L("Object.assign", function(a) {
        return a || ia
    });
    L("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(d) {
            return d instanceof e ? d : new e(function(h) {
                h(d)
            }
            )
        }
        if (a)
            return a;
        b.prototype.G = function(d) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.H(function() {
                    h.S()
                })
            }
            this.g.push(d)
        }
        ;
        var f = u.setTimeout;
        b.prototype.H = function(d) {
            f(d, 0)
        }
        ;
        b.prototype.S = function() {
            for (; this.g && this.g.length; ) {
                var d = this.g;
                this.g = [];
                for (var h = 0; h < d.length; ++h) {
                    var k = d[h];
                    d[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.R(m)
                    }
                }
            }
            this.g = null
        }
        ;
        b.prototype.R = function(d) {
            this.H(function() {
                throw d;
            })
        }
        ;
        var e = function(d) {
            this.u = 0;
            this.D = void 0;
            this.l = [];
            var h = this.B();
            try {
                d(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.B = function() {
            function d(m) {
                return function(l) {
                    k || (k = !0,
                    m.call(h, l))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: d(this.aa),
                reject: d(this.C)
            }
        }
        ;
        e.prototype.aa = function(d) {
            if (d === this)
                this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (d instanceof e)
                this.ba(d);
            else {
                a: switch (typeof d) {
                case "object":
                    var h = null != d;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.$(d) : this.K(d)
            }
        }
        ;
        e.prototype.$ = function(d) {
            var h = void 0;
            try {
                h = d.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.ca(h, d) : this.K(d)
        }
        ;
        e.prototype.C = function(d) {
            this.N(2, d)
        }
        ;
        e.prototype.K = function(d) {
            this.N(1, d)
        }
        ;
        e.prototype.N = function(d, h) {
            if (0 != this.u)
                throw Error("Cannot settle(" + d + ", " + h + "): Promise already settled in state" + this.u);
            this.u = d;
            this.D = h;
            this.T()
        }
        ;
        e.prototype.T = function() {
            if (null != this.l) {
                for (var d = 0; d < this.l.length; ++d)
                    g.G(this.l[d]);
                this.l = null
            }
        }
        ;
        var g = new b;
        e.prototype.ba = function(d) {
            var h = this.B();
            d.w(h.resolve, h.reject)
        }
        ;
        e.prototype.ca = function(d, h) {
            var k = this.B();
            try {
                d.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        }
        ;
        e.prototype.then = function(d, h) {
            function k(n, t) {
                return "function" == typeof n ? function(x) {
                    try {
                        m(n(x))
                    } catch (R) {
                        l(R)
                    }
                }
                : t
            }
            var m, l, q = new e(function(n, t) {
                m = n;
                l = t
            }
            );
            this.w(k(d, m), k(h, l));
            return q
        }
        ;
        e.prototype.catch = function(d) {
            return this.then(void 0, d)
        }
        ;
        e.prototype.w = function(d, h) {
            function k() {
                switch (m.u) {
                case 1:
                    d(m.D);
                    break;
                case 2:
                    h(m.D);
                    break;
                default:
                    throw Error("Unexpected state: " + m.u);
                }
            }
            var m = this;
            null == this.l ? g.G(k) : this.l.push(k)
        }
        ;
        e.resolve = c;
        e.reject = function(d) {
            return new e(function(h, k) {
                k(d)
            }
            )
        }
        ;
        e.race = function(d) {
            return new e(function(h, k) {
                for (var m = z(d), l = m.next(); !l.done; l = m.next())
                    c(l.value).w(h, k)
            }
            )
        }
        ;
        e.all = function(d) {
            var h = z(d)
              , k = h.next();
            return k.done ? c([]) : new e(function(m, l) {
                function q(x) {
                    return function(R) {
                        n[x] = R;
                        t--;
                        0 == t && m(n)
                    }
                }
                var n = []
                  , t = 0;
                do
                    n.push(void 0),
                    t++,
                    c(k.value).w(q(n.length - 1), l),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return e
    });
    var ja = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var M = function(a) {
        if (8192 >= a.length)
            return String.fromCharCode.apply(null, a);
        for (var b = "", c = 0; c < a.length; c += 8192)
            b += String.fromCharCode.apply(null, ja(a, c, c + 8192));
        return b
    };
    /*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
    var ka = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(a, b) {
        a.__proto__ = b
    }
    || function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , N = function(a, b) {
        var c = void 0, f = void 0, e;
        if (!(e = f)) {
            if ("undefined" !== typeof Promise)
                e = Promise;
            else
                throw Error("Promise or polyfill not available.");
            e = f = e
        }
        return new e(function(g, d) {
            function h(l) {
                try {
                    m(b.next(l))
                } catch (q) {
                    d(q)
                }
            }
            function k(l) {
                try {
                    m(b["throw"](l))
                } catch (q) {
                    d(q)
                }
            }
            function m(l) {
                l.done ? g(l.value) : (new f(function(q) {
                    q(l.value)
                }
                )).then(h, k)
            }
            m((b = b.apply(a, c)).next())
        }
        )
    };
    function O(a) {
        var b = Error(a);
        a && (this.message = a);
        this.name = b.name;
        this.stack = b.stack;
        return this
    }
    (function(a, b) {
        function c() {
            this.constructor = a
        }
        ka(a, b);
        a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype,
        new c)
    }
    )(O, Error);
    var google3$third_party$javascript$node_modules$idb$v4_0_3$build$esm$entry = window.idb
      , google3$third_party$javascript$node_modules$idb$v4_0_3$build$esm$index = window.idb
      , google3$third_party$javascript$node_modules$idb$v4_0_3$build$esm$util = window.idb;
    function P(a) {
        if (a && "object" === typeof a) {
            if (a.message)
                return String(a.message);
            if (a.error && a.error.message)
                return String(a.error.message)
        }
        var b = String(a);
        if ("[object Object]" === b)
            try {
                return JSON.stringify(a)
            } catch (c) {}
        return b
    }
    ;function Q(a, b) {
        for (a = a.toByteArray(); a.length < b; )
            a.unshift(0);
        for (; a.length > b; ) {
            if (0 !== a[0])
                throw Error("BigInteger value exceeds available size");
            a.shift()
        }
        return a
    }
    var S = function(a) {
        this.offset = a;
        this.size = 256
    };
    S.prototype.L = function() {
        throw Error("Reading a BigInteger field is not yet supported");
    }
    ;
    S.prototype.M = function(a, b, c, f) {
        a = Q(f, this.size).reverse();
        b = Uint8Array;
        (new b(c.buffer,c.byteOffset,c.byteLength / b.BYTES_PER_ELEMENT)).set(a, this.offset)
    }
    ;
    var T = function(a, b) {
        this.offset = a;
        this.type = 2;
        this.m = b
    };
    T.prototype.L = function(a, b, c) {
        switch (this.type) {
        case 0:
            a = c.getUint8(this.offset);
            break;
        case 1:
            a = c.getUint16(this.offset, a.h);
            break;
        case 2:
            a = c.getUint32(this.offset, a.h);
            break;
        case 3:
            a = c.getInt8(this.offset);
            break;
        case 4:
            a = c.getInt16(this.offset, a.h);
            break;
        case 5:
            a = c.getInt32(this.offset, a.h);
            break;
        default:
            throw Error("Unexpected Field Type: " + this.type);
        }
        if ("undefined" !== typeof this.m && (c = this.m,
        a !== c))
            throw Error(b + " was not fixed value: value=" + (a + ", expected=" + c));
        return a
    }
    ;
    T.prototype.M = function(a, b, c, f) {
        if ("undefined" !== typeof this.m && f !== this.m)
            throw Error(b + " was not fixed value: value=" + (f + ", expected=" + this.m));
        switch (this.type) {
        case 0:
            c.setUint8(this.offset, f);
            break;
        case 1:
            c.setUint16(this.offset, f, a.h);
            break;
        case 2:
            c.setUint32(this.offset, f, a.h);
            break;
        case 3:
            c.setInt8(this.offset, f);
            break;
        case 4:
            c.setInt16(this.offset, f, a.h);
            break;
        case 5:
            c.setInt32(this.offset, f, a.h);
            break;
        default:
            throw Error("Unexpected Field Type: " + this.type);
        }
    }
    ;
    var U = function(a) {
        this.description = a
    };
    U.prototype.get = function(a) {
        if (a.byteLength < this.size)
            throw Error("Source buffer too small");
        var b = {}, c;
        for (c in this.description.fields)
            this.description.fields.hasOwnProperty(c) && (b[c] = this.description.fields[c].L(this.description, c, a));
        return b
    }
    ;
    U.prototype.set = function(a, b) {
        if (a.byteLength < this.size)
            throw Error("Target buffer too small");
        for (var c in this.description.fields)
            this.description.fields.hasOwnProperty(c) && this.description.fields[c].M(this.description, c, a, b[c])
    }
    ;
    u.Object.defineProperties(U.prototype, {
        size: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.description.size
            }
        }
    });
    var la = new Uint8Array([1, 0, 1])
      , ma = new U({
        size: 524,
        h: !0,
        fields: {
            X: new T(0,64),
            Y: new T(4,void 0),
            W: new S(8),
            rr: new S(264),
            U: new T(520,void 0)
        }
    })
      , na = BigInteger.ONE.shiftLeft(32)
      , oa = [0, 48, 33, 48, 9, 6, 5, 43, 14, 3, 2, 26, 5, 0, 4, 20];
    var pa = {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
            name: "SHA-1"
        }
    }
      , qa = Object.assign(Object.assign({}, pa), {
        modulusLength: 2048,
        publicExponent: la
    })
      , ra = ["sign"];
    function sa() {
        return crypto && crypto.subtle ? Promise.resolve(crypto.subtle.generateKey(qa, !0, ra).then(function(a) {
            return a.privateKey
        })) : Promise.reject(Error("webcrypto not supported"))
    }
    function ta(a) {
        return Promise.resolve(crypto.subtle.importKey("jwk", a, pa, !0, ra))
    }
    function V(a) {
        a = atob(a.replace(/-/g, "+").replace(/_/g, "/"));
        for (var b = "", c = 0; c < a.length; ++c) {
            var f = a.charCodeAt(c).toString(16).toString();
            f = "0".repeat(Math.max(0, 2 - f.length)) + f;
            b += f
        }
        return b
    }
    function ua(a) {
        return Promise.resolve(crypto.subtle.exportKey("jwk", a)).then(function(b) {
            var c = new RSAKey;
            c.setPrivateEx(V(b.n), V(b.e), V(b.d), V(b.p), V(b.q), V(b.dp), V(b.dq), V(b.qi));
            return c
        })
    }
    ;var W = function(a, b, c) {
        var f = O.call(this, P(a)) || this;
        f.kind = b;
        f.da = c;
        a instanceof Error ? (f.name = "KnownError<" + a.name + ">",
        f.stack = a.stack) : f.name = "KnownError";
        return f
    };
    W.prototype = da(O.prototype);
    W.prototype.constructor = W;
    if (D)
        D(W, O);
    else
        for (var X in O)
            if ("prototype" != X)
                if (Object.defineProperties) {
                    var va = Object.getOwnPropertyDescriptor(O, X);
                    va && Object.defineProperty(W, X, va)
                } else
                    W[X] = O[X];
    function wa(a) {
        a.createObjectStore("keys", {
            autoIncrement: !0,
            keyPath: "key"
        })
    }
    function xa(a) {
        return N(this, function c() {
            var f, e;
            return K(c, function(g) {
                if (1 == g.b)
                    return G(g, ua(a.privateKey), 2);
                if (3 != g.b) {
                    f = g.c;
                    var d = na.subtract(f.n.modInverse(na)).intValue();
                    var h = BigInteger.ONE.shiftLeft(1).pow(2048);
                    h = h.multiply(h).mod(f.n);
                    d = {
                        X: 64,
                        Y: d,
                        W: f.n,
                        rr: h,
                        U: f.e
                    };
                    h = new ArrayBuffer(ma.size);
                    ma.set(new DataView(h), d);
                    d = new Uint8Array(h);
                    return G(g, d, 3)
                }
                e = g.c;
                return g.return({
                    key: a.key,
                    publicKeyByteString: M(e)
                })
            })
        })
    }
    var Y = function() {
        this.F = !1
    };
    Y.prototype.init = function() {
        return N(this, function b() {
            var c = this, f, e;
            return K(b, function(g) {
                switch (g.b) {
                case 1:
                    return g.A = 2,
                    G(g, google3$third_party$javascript$node_modules$idb$v4_0_3$build$esm$index.openDB("adb_keys", 1, {
                        upgrade: wa
                    }), 4);
                case 4:
                    c.f = g.c;
                    g.b = 3;
                    g.A = 0;
                    break;
                case 2:
                    g.A = 0;
                    var d = g.j.I;
                    g.j = null;
                    f = d;
                    if ("The user denied permission to access the database." === f.message)
                        throw new W(f,27);
                    throw f;
                case 3:
                    return G(g, c.f.count("keys"), 5);
                case 5:
                    return e = g.c,
                    g.return({
                        version: "androidbuild_huckle_web_flashstation_secure_20200413.00_RC00",
                        adbKeyCount: e
                    })
                }
            })
        })
    }
    ;
    Y.prototype.unlock = function() {
        return N(this, function b() {
            var c = this, f;
            return K(b, function(e) {
                if (!c.f)
                    throw Error("Uninitialized");
                if (c.F)
                    return e.return();
                if (f = window.confirm("Allow site access to your ADB keys in order to communicate with devices?"))
                    c.F = !0;
                else
                    throw new W("User did not grant access",24);
                e.b = 0
            })
        })
    }
    ;
    var Z = function(a) {
        if (!a.F)
            throw new W("Keystore locked",31);
    };
    Y.prototype.generateKey = function() {
        return N(this, function b() {
            var c = this, f, e;
            return K(b, function(g) {
                if (1 == g.b)
                    return Z(c),
                    G(g, sa(), 2);
                if (3 != g.b)
                    return f = g.c,
                    G(g, ya(c, [f]), 3);
                e = g.c;
                return g.return(e[0])
            })
        })
    }
    ;
    var ya = function(a, b) {
        return N(a, function f() {
            var e = this, g, d, h;
            return K(f, function(k) {
                if (1 == k.b) {
                    g = e;
                    if (!e.f)
                        throw Error("Uninitialized");
                    Z(e);
                    d = e.f.transaction("keys", "readwrite");
                    return G(k, Promise.all(b.map(function(m) {
                        return N(g, function q() {
                            var n, t;
                            return K(q, function(x) {
                                if (1 == x.b)
                                    return n = {
                                        privateKey: m
                                    },
                                    G(x, d.store.add(n), 2);
                                t = x.c;
                                return x.return(xa(Object.assign(Object.assign({}, n), {
                                    key: t
                                })))
                            })
                        })
                    })), 2)
                }
                return 3 != k.b ? (h = k.c,
                G(k, d.done, 3)) : k.return(h)
            })
        })
    }
      , za = function(a) {
        return N(a, function c() {
            var f = this, e;
            return K(c, function(g) {
                if (1 == g.b) {
                    if (!f.f)
                        throw Error("Uninitialized");
                    Z(f);
                    return G(g, f.f.getAll("keys"), 2)
                }
                e = g.c;
                return g.return(Promise.all(e.map(xa)))
            })
        })
    }
      , Aa = function(a, b) {
        return N(a, function f() {
            var e = this, g;
            return K(f, function(d) {
                if (1 == d.b) {
                    if (!e.f)
                        throw Error("Uninitialized");
                    Z(e);
                    return G(d, Promise.all(b.map(ta)), 2)
                }
                g = d.c;
                return d.return(ya(e, g))
            })
        })
    }
      , Ba = function(a, b) {
        return N(a, function f() {
            var e = this;
            return K(f, function(g) {
                if (!e.f)
                    throw Error("Uninitialized");
                Z(e);
                return G(g, e.f.delete("keys", b.key), 0)
            })
        })
    }
      , Ca = function(a, b) {
        return N(a, function f() {
            var e = this, g, d, h, k;
            return K(f, function(m) {
                if (1 == m.b) {
                    if (!e.f)
                        throw Error("Uninitialized");
                    Z(e);
                    return G(m, e.f.get("keys", b.key.key), 2)
                }
                if (3 != m.b) {
                    g = m.c;
                    if (!g)
                        throw Error("Key not found");
                    for (var l = b.challengeByteString, q = new Uint8Array(l.length), n = 0; n < l.length; ++n)
                        q[n] = l.charCodeAt(n);
                    d = q;
                    return G(m, ua(g.privateKey), 3)
                }
                h = m.c;
                l = h.n.bitLength();
                if (2048 !== l)
                    throw Error("Expected key to have 2048 bits, but only has " + l);
                l = new Uint8Array(256);
                l.fill(255);
                l[0] = 0;
                l[1] = 1;
                l.set(oa, l.length - oa.length - d.length);
                l.set(d, l.length - d.length);
                l = new BigInteger(Array.apply([], l));
                l = h.doPrivate(l);
                k = new Uint8Array(Q(l, 256));
                return m.return(M(k))
            })
        })
    };
    function Da(a) {
        var b = a instanceof W ? a.kind : void 0
          , c = {};
        return c.__$$API_ERROR$$__ = !0,
        c.version = "androidbuild_huckle_web_flashstation_secure_20200413.00_RC00",
        c.name = a && a.name,
        c.message = P(a),
        c.stack = a && a.stack,
        c.knownErrorKind = b,
        c
    }
    ;var Ea = window;
    (function() {
        function a(c) {
            return c.getOrigin() === b
        }
        if (!Ea.WEB_FLASHSTATION_SECURE_PARENT_ORIGIN)
            throw Error("No parent origin found");
        var b = Ea.WEB_FLASHSTATION_SECURE_PARENT_ORIGIN;
        gapi.load("gapi.iframes", function() {
            function c(g, d) {
                f.register(g, function(h) {
                    return d(h).catch(Da)
                }, a)
            }
            var f = gapi.iframes.getContext().getParentIframe()
              , e = new Y;
            c("init", function() {
                return e.init()
            });
            c("generateAdbKey", function() {
                return e.generateKey()
            });
            c("listAdbKeys", function() {
                return za(e)
            });
            c("removeAdbKey", function(g) {
                return Ba(e, g)
            });
            c("signAdbChallenge", function(g) {
                return Ca(e, g)
            });
            c("unlockAdbKeys", function() {
                return e.unlock()
            });
            c("addAdbKeys", function(g) {
                return Aa(e, g)
            })
        })
    }
    )();
}
).call(this);

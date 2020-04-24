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
/* JS */
gapi.loaded_1(function(_) {
    var window = this;
    _.z("gapi.iframes.create", _.Jj);

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

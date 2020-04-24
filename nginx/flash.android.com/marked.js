    /*

 Copyright (c) 2011-2018, Christopher Jeffrey (https://github.com/chjj/)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
    var nQ = function(a, b, c) {
        if (0 === a.length)
            return "";
        for (var d = 0; d < a.length; ) {
            var e = a.charAt(a.length - d - 1);
            if (e !== b || c)
                if (e !== b && c)
                    d++;
                else
                    break;
            else
                d++
        }
        return a.substr(0, a.length - d)
    }
      , oQ = function(a, b) {
        a = a.replace(/\|/g, function(d, e, f) {
            for (d = !1; 0 <= --e && "\\" === f[e]; )
                d = !d;
            return d ? "|" : " |"
        }).split(/ \|/);
        var c = 0;
        if (a.length > b)
            a.splice(b);
        else
            for (; a.length < b; )
                a.push("");
        for (; c < a.length; c++)
            a[c] = a[c].trim().replace(/\\\|/g, "|");
        return a
    }
      , pQ = function(a, b) {
        for (var c = 1, d, e; c < arguments.length; c++)
            for (e in d = arguments[c],
            d)
                Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
        return a
    }
      , qQ = function() {}
      , uQ = function(a, b, c) {
        if (a) {
            try {
                var d = decodeURIComponent(rQ(c)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (e) {
                return null
            }
            if (0 === d.indexOf("javascript:") || 0 === d.indexOf("vbscript:") || 0 === d.indexOf("data:"))
                return null
        }
        b && !sQ.test(c) && (a = b,
        tQ[" " + a] || (tQ[" " + a] = /^[^:]+:\/*[^/]*$/.test(a) ? a + "/" : nQ(a, "/", !0)),
        a = tQ[" " + a],
        c = "//" === c.slice(0, 2) ? a.replace(/:[\s\S]*/, ":") + c : "/" === c.charAt(0) ? a.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + c : a + c);
        try {
            c = encodeURI(c).replace(/%25/g, "%")
        } catch (e) {
            return null
        }
        return c
    }
      , vQ = function(a, b) {
        a = a.source || a;
        b = b || "";
        return {
            replace: function(c, d) {
                d = d.source || d;
                d = d.replace(/(^|[^\[])\^/g, "$1");
                a = a.replace(c, d);
                return this
            },
            Fc: function() {
                return new RegExp(a,b)
            }
        }
    }
      , rQ = function(a) {
        return a.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(b, c) {
            c = c.toLowerCase();
            return "colon" === c ? ":" : "#" === c.charAt(0) ? "x" === c.charAt(1) ? String.fromCharCode(parseInt(c.substring(2), 16)) : String.fromCharCode(+c.substring(1)) : ""
        })
    }
      , BQ = function(a, b) {
        if (b) {
            if (wQ.test(a))
                return a.replace(xQ, function(c) {
                    return yQ[c]
                })
        } else if (zQ.test(a))
            return a.replace(AQ, function(c) {
                return yQ[c]
            });
        return a
    }
      , CQ = function() {
        this.du = {}
    }
      , EQ = function(a) {
        this.ob = [];
        this.X = null;
        this.options = a || marked.defaults;
        this.options.renderer = this.options.renderer || new DQ;
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.V7 = new CQ
    }
      , FQ = function() {}
      , DQ = function(a) {
        this.options = a || marked.defaults
    }
      , HQ = function(a, b) {
        this.options = b || marked.defaults;
        this.links = a;
        this.rules = GQ.Um;
        this.renderer = this.options.renderer || new DQ;
        this.renderer.options = this.options;
        this.Qi = !1;
        if (!this.links)
            throw Error("Tokens array requires a `links` property.");
        this.options.pedantic ? this.rules = GQ.pedantic : this.options.gfm && (this.rules = this.options.breaks ? GQ.breaks : GQ.gfm)
    }
      , JQ = function(a) {
        this.ob = [];
        this.ob.links = Object.create(null);
        this.options = a || marked.defaults;
        this.rules = IQ.Um;
        this.options.pedantic ? this.rules = IQ.pedantic : this.options.gfm && (this.rules = this.options.tables ? IQ.tables : IQ.gfm)
    }
      , IQ = {
        v6: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        iF: qQ,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
        VS: qQ,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
        ta: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        table: qQ,
        cS: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
        text: /^[^\n]+/,
        Re: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
        qD: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    };
    IQ.ta = vQ(IQ.ta).replace("label", IQ.Re).replace("title", IQ.qD).Fc();
    IQ.eE = /(?:[*+-]|\d{1,9}\.)/;
    IQ.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
    IQ.item = vQ(IQ.item, "gm").replace(/bull/g, IQ.eE).Fc();
    IQ.list = vQ(IQ.list).replace(/bull/g, IQ.eE).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + IQ.ta.source + ")").Fc();
    IQ.uM = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    IQ.YA = /\x3c!--(?!-?>)[\s\S]*?--\x3e/;
    IQ.html = vQ(IQ.html, "i").replace("comment", IQ.YA).replace("tag", IQ.uM).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).Fc();
    IQ.paragraph = vQ(IQ.paragraph).replace("hr", IQ.hr).replace("heading", IQ.heading).replace("lheading", IQ.cS).replace("tag", IQ.uM).Fc();
    IQ.blockquote = vQ(IQ.blockquote).replace("paragraph", IQ.paragraph).Fc();
    IQ.Um = pQ({}, IQ);
    IQ.gfm = pQ({}, IQ.Um, {
        iF: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    });
    IQ.gfm.paragraph = vQ(IQ.paragraph).replace("(?!", "(?!" + IQ.gfm.iF.source.replace("\\1", "\\2") + "|" + IQ.list.source.replace("\\1", "\\3") + "|").Fc();
    IQ.tables = pQ({}, IQ.gfm, {
        VS: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
        table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
    });
    IQ.pedantic = pQ({}, IQ.Um, {
        html: vQ("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", IQ.YA).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").Fc(),
        ta: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
    });
    var KQ = function(a, b) {
        b = new JQ(b);
        a = a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
        return b.X(a, !0)
    };
    JQ.prototype.X = function(a, b) {
        a = a.replace(/^ +$/gm, "");
        for (var c, d, e, f, g, h, k, m, p, t, v; a; ) {
            if (e = this.rules.v6.exec(a))
                a = a.substring(e[0].length),
                1 < e[0].length && this.ob.push({
                    type: "space"
                });
            if (e = this.rules.code.exec(a))
                a = a.substring(e[0].length),
                e = e[0].replace(/^ {4}/gm, ""),
                this.ob.push({
                    type: "code",
                    text: this.options.pedantic ? e : nQ(e, "\n")
                });
            else if (e = this.rules.iF.exec(a))
                a = a.substring(e[0].length),
                this.ob.push({
                    type: "code",
                    lang: e[2] ? e[2].trim() : e[2],
                    text: e[3] || ""
                });
            else if (e = this.rules.heading.exec(a))
                a = a.substring(e[0].length),
                this.ob.push({
                    type: "heading",
                    depth: e[1].length,
                    text: e[2]
                });
            else {
                if (b && (e = this.rules.VS.exec(a)) && (g = {
                    type: "table",
                    header: oQ(e[1].replace(/^ *| *\| *$/g, "")),
                    align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : []
                },
                g.header.length === g.align.length)) {
                    a = a.substring(e[0].length);
                    for (m = 0; m < g.align.length; m++)
                        g.align[m] = /^ *-+: *$/.test(g.align[m]) ? "right" : /^ *:-+: *$/.test(g.align[m]) ? "center" : /^ *:-+ *$/.test(g.align[m]) ? "left" : null;
                    for (m = 0; m < g.cells.length; m++)
                        g.cells[m] = oQ(g.cells[m], g.header.length);
                    this.ob.push(g);
                    continue
                }
                if (e = this.rules.hr.exec(a))
                    a = a.substring(e[0].length),
                    this.ob.push({
                        type: "hr"
                    });
                else if (e = this.rules.blockquote.exec(a))
                    a = a.substring(e[0].length),
                    this.ob.push({
                        type: "blockquote_start"
                    }),
                    e = e[0].replace(/^ *> ?/gm, ""),
                    this.X(e, b),
                    this.ob.push({
                        type: "blockquote_end"
                    });
                else if (e = this.rules.list.exec(a)) {
                    a = a.substring(e[0].length);
                    f = e[2];
                    c = 1 < f.length;
                    h = {
                        type: "list_start",
                        ordered: c,
                        start: c ? +f : "",
                        tt: !1
                    };
                    this.ob.push(h);
                    e = e[0].match(this.rules.item);
                    k = [];
                    c = !1;
                    p = e.length;
                    for (m = 0; m < p; m++)
                        g = e[m],
                        d = g.length,
                        g = g.replace(/^ *([*+-]|\d+\.) */, ""),
                        ~g.indexOf("\n ") && (d -= g.length,
                        g = this.options.pedantic ? g.replace(/^ {1,4}/gm, "") : g.replace(new RegExp("^ {1," + d + "}","gm"), "")),
                        m !== p - 1 && (d = IQ.eE.exec(e[m + 1])[0],
                        1 < f.length ? 1 === d.length : 1 < d.length || this.options.smartLists && d !== f) && (a = e.slice(m + 1).join("\n") + a,
                        m = p - 1),
                        d = c || /\n\n(?!\s*$)/.test(g),
                        m !== p - 1 && (c = "\n" === g.charAt(g.length - 1),
                        d || (d = c)),
                        d && (h.tt = !0),
                        t = /^\[[ xX]\] /.test(g),
                        v = void 0,
                        t && (v = " " !== g[1],
                        g = g.replace(/^\[[ xX]\] +/, "")),
                        d = {
                            type: "list_item_start",
                            bi: t,
                            checked: v,
                            tt: d
                        },
                        k.push(d),
                        this.ob.push(d),
                        this.X(g, !1),
                        this.ob.push({
                            type: "list_item_end"
                        });
                    if (h.tt)
                        for (p = k.length,
                        m = 0; m < p; m++)
                            k[m].tt = !0;
                    this.ob.push({
                        type: "list_end"
                    })
                } else if (e = this.rules.html.exec(a))
                    a = a.substring(e[0].length),
                    this.ob.push({
                        type: this.options.sanitize ? "paragraph" : "html",
                        N$: !this.options.vn && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                        text: e[0]
                    });
                else if (b && (e = this.rules.ta.exec(a)))
                    a = a.substring(e[0].length),
                    e[3] && (e[3] = e[3].substring(1, e[3].length - 1)),
                    f = e[1].toLowerCase().replace(/\s+/g, " "),
                    this.ob.links[f] || (this.ob.links[f] = {
                        href: e[2],
                        title: e[3]
                    });
                else {
                    if (b && (e = this.rules.table.exec(a)) && (g = {
                        type: "table",
                        header: oQ(e[1].replace(/^ *| *\| *$/g, "")),
                        align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: e[3] ? e[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
                    },
                    g.header.length === g.align.length)) {
                        a = a.substring(e[0].length);
                        for (m = 0; m < g.align.length; m++)
                            g.align[m] = /^ *-+: *$/.test(g.align[m]) ? "right" : /^ *:-+: *$/.test(g.align[m]) ? "center" : /^ *:-+ *$/.test(g.align[m]) ? "left" : null;
                        for (m = 0; m < g.cells.length; m++)
                            g.cells[m] = oQ(g.cells[m].replace(/^ *\| *| *\| *$/g, ""), g.header.length);
                        this.ob.push(g);
                        continue
                    }
                    if (e = this.rules.cS.exec(a))
                        a = a.substring(e[0].length),
                        this.ob.push({
                            type: "heading",
                            depth: "=" === e[2] ? 1 : 2,
                            text: e[1]
                        });
                    else if (b && (e = this.rules.paragraph.exec(a)))
                        a = a.substring(e[0].length),
                        this.ob.push({
                            type: "paragraph",
                            text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1]
                        });
                    else if (e = this.rules.text.exec(a))
                        a = a.substring(e[0].length),
                        this.ob.push({
                            type: "text",
                            text: e[0]
                        });
                    else if (a)
                        throw Error("Infinite loop on byte: " + a.charCodeAt(0));
                }
            }
        }
        return this.ob
    }
    ;
    var GQ = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        XD: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: qQ,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
        lz: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        E6: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
        em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: qQ,
        text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
        Q0: "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"
    };
    GQ.em = vQ(GQ.em).replace(/punctuation/g, GQ.Q0).Fc();
    GQ.BZ = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    GQ.k1 = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    GQ.zZ = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    GQ.XD = vQ(GQ.XD).replace("scheme", GQ.k1).replace("email", GQ.zZ).Fc();
    GQ.nY = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    GQ.tag = vQ(GQ.tag).replace("comment", IQ.YA).replace("attribute", GQ.nY).Fc();
    GQ.Re = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
    GQ.w_ = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
    GQ.qD = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    GQ.link = vQ(GQ.link).replace("label", GQ.Re).replace("href", GQ.w_).replace("title", GQ.qD).Fc();
    GQ.lz = vQ(GQ.lz).replace("label", GQ.Re).Fc();
    GQ.Um = pQ({}, GQ);
    GQ.pedantic = pQ({}, GQ.Um, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
        link: vQ(/^!?\[(label)\]\((.*?)\)/).replace("label", GQ.Re).Fc(),
        lz: vQ(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", GQ.Re).Fc()
    });
    GQ.gfm = pQ({}, GQ.Um, {
        escape: vQ(GQ.escape).replace("])", "~|])").Fc(),
        FZ: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        oY: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^~+(?=\S)([\s\S]*?\S)~+/,
        text: vQ(GQ.text).replace("]|", "~]|").replace("|$", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").Fc()
    });
    GQ.gfm.url = vQ(GQ.gfm.url, "i").replace("email", GQ.gfm.FZ).Fc();
    GQ.breaks = pQ({}, GQ.gfm, {
        br: vQ(GQ.br).replace("{2,}", "*").Fc(),
        text: vQ(GQ.gfm.text).replace("{2,}", "*").Fc()
    });
    HQ.prototype.Ee = function(a) {
        for (var b = "", c, d, e; a; )
            if (e = this.rules.escape.exec(a))
                a = a.substring(e[0].length),
                b += BQ(e[1]);
            else if (e = this.rules.tag.exec(a))
                !this.Qi && /^<a /i.test(e[0]) ? this.Qi = !0 : this.Qi && /^<\/a>/i.test(e[0]) && (this.Qi = !1),
                !this.ry && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.ry = !0 : this.ry && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.ry = !1),
                a = a.substring(e[0].length),
                b += this.options.sanitize ? this.options.vn ? this.options.vn(e[0]) : BQ(e[0]) : e[0];
            else if (e = this.rules.link.exec(a)) {
                a: {
                    d = e[2];
                    if (-1 !== d.indexOf(")"))
                        for (var f = c = 0; f < d.length; f++)
                            if ("\\" === d[f])
                                f++;
                            else if ("(" === d[f])
                                c++;
                            else if (")" === d[f] && (c--,
                            0 > c)) {
                                d = f;
                                break a
                            }
                    d = -1
                }
                -1 < d && (c = e[2].length - d,
                e[2] = e[2].substring(0, d),
                e[0] = e[0].substring(0, e[0].length - c));
                a = a.substring(e[0].length);
                this.Qi = !0;
                d = e[2];
                this.options.pedantic ? (c = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(d)) ? (d = c[1],
                c = c[3]) : c = "" : c = e[3] ? e[3].slice(1, -1) : "";
                d = d.trim().replace(/^<([\s\S]*)>$/, "$1");
                b += LQ(this, e, {
                    href: MQ(d),
                    title: MQ(c)
                });
                this.Qi = !1
            } else if ((e = this.rules.lz.exec(a)) || (e = this.rules.E6.exec(a)))
                a = a.substring(e[0].length),
                c = (e[2] || e[1]).replace(/\s+/g, " "),
                (c = this.links[c.toLowerCase()]) && c.href ? (this.Qi = !0,
                b += LQ(this, e, c),
                this.Qi = !1) : (b += e[0].charAt(0),
                a = e[0].substring(1) + a);
            else if (e = this.rules.strong.exec(a))
                a = a.substring(e[0].length),
                b += this.renderer.strong(this.Ee(e[4] || e[3] || e[2] || e[1]));
            else if (e = this.rules.em.exec(a))
                a = a.substring(e[0].length),
                b += this.renderer.em(this.Ee(e[6] || e[5] || e[4] || e[3] || e[2] || e[1]));
            else if (e = this.rules.code.exec(a))
                a = a.substring(e[0].length),
                b += this.renderer.codespan(BQ(e[2].trim(), !0));
            else if (e = this.rules.br.exec(a))
                a = a.substring(e[0].length),
                b += this.renderer.br();
            else if (e = this.rules.del.exec(a))
                a = a.substring(e[0].length),
                b += this.renderer.del(this.Ee(e[1]));
            else if (e = this.rules.XD.exec(a))
                a = a.substring(e[0].length),
                "@" === e[2] ? (c = BQ(this.bG(e[1])),
                d = "mailto:" + c) : d = c = BQ(e[1]),
                b += this.renderer.link(d, null, c);
            else if (!this.Qi && (e = this.rules.url.exec(a))) {
                if ("@" === e[2])
                    c = BQ(e[0]),
                    d = "mailto:" + c;
                else {
                    do
                        d = e[0],
                        e[0] = this.rules.oY.exec(e[0])[0];
                    while (d !== e[0]);c = BQ(e[0]);
                    d = "www." === e[1] ? "http://" + c : c
                }
                a = a.substring(e[0].length);
                b += this.renderer.link(d, null, c)
            } else if (e = this.rules.text.exec(a))
                a = a.substring(e[0].length),
                b = this.ry ? b + this.renderer.text(e[0]) : b + this.renderer.text(BQ(this.smartypants(e[0])));
            else if (a)
                throw Error("Infinite loop on byte: " + a.charCodeAt(0));
        return b
    }
    ;
    var MQ = function(a) {
        return a ? a.replace(GQ.BZ, "$1") : a
    }
      , LQ = function(a, b, c) {
        var d = c.href;
        c = c.title ? BQ(c.title) : null;
        return "!" !== b[0].charAt(0) ? a.renderer.link(d, c, a.Ee(b[1])) : a.renderer.image(d, c, BQ(b[1]))
    };
    HQ.prototype.smartypants = function(a) {
        return this.options.smartypants ? a.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : a
    }
    ;
    HQ.prototype.bG = function(a) {
        if (!this.options.bG)
            return a;
        for (var b = "", c = a.length, d = 0, e; d < c; d++)
            e = a.charCodeAt(d),
            .5 < Math.random() && (e = "x" + e.toString(16)),
            b += "&#" + e + ";";
        return b
    }
    ;
    l = DQ.prototype;
    l.code = function(a, b, c) {
        b = (b || "").match(/\S*/)[0];
        if (this.options.highlight) {
            var d = this.options.highlight(a, b);
            null != d && d !== a && (c = !0,
            a = d)
        }
        return b ? '<pre><code class="' + this.options.langPrefix + BQ(b, !0) + '">' + (c ? a : BQ(a, !0)) + "</code></pre>\n" : "<pre><code>" + (c ? a : BQ(a, !0)) + "</code></pre>"
    }
    ;
    l.blockquote = function(a) {
        return "<blockquote>\n" + a + "</blockquote>\n"
    }
    ;
    l.html = function(a) {
        return a
    }
    ;
    l.heading = function(a, b, c, d) {
        if (this.options.n5) {
            var e = "<h" + b + ' id="' + this.options.o5;
            c = c.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
            if (d.du.hasOwnProperty(c)) {
                var f = c;
                do
                    d.du[f]++,
                    c = f + "-" + d.du[f];
                while (d.du.hasOwnProperty(c))
            }
            d.du[c] = 0;
            a = e + c + '">' + a + "</h" + b + ">\n"
        } else
            a = "<h" + b + ">" + a + "</h" + b + ">\n";
        return a
    }
    ;
    l.hr = function() {
        return this.options.eA ? "<hr/>\n" : "<hr>\n"
    }
    ;
    l.list = function(a, b, c) {
        var d = b ? "ol" : "ul";
        return "<" + d + (b && 1 !== c ? ' start="' + c + '"' : "") + ">\n" + a + "</" + d + ">\n"
    }
    ;
    l.listitem = function(a) {
        return "<li>" + a + "</li>\n"
    }
    ;
    l.paragraph = function(a) {
        return "<p>" + a + "</p>\n"
    }
    ;
    l.table = function(a, b) {
        b && (b = "<tbody>" + b + "</tbody>");
        return "<table>\n<thead>\n" + a + "</thead>\n" + b + "</table>\n"
    }
    ;
    l.tablerow = function(a) {
        return "<tr>\n" + a + "</tr>\n"
    }
    ;
    l.tablecell = function(a, b) {
        var c = b.header ? "th" : "td";
        return (b.align ? "<" + c + ' align="' + b.align + '">' : "<" + c + ">") + a + "</" + c + ">\n"
    }
    ;
    l.strong = function(a) {
        return "<strong>" + a + "</strong>"
    }
    ;
    l.em = function(a) {
        return "<em>" + a + "</em>"
    }
    ;
    l.codespan = function(a) {
        return "<code>" + a + "</code>"
    }
    ;
    l.br = function() {
        return this.options.eA ? "<br/>" : "<br>"
    }
    ;
    l.del = function(a) {
        return "<del>" + a + "</del>"
    }
    ;
    l.link = function(a, b, c) {
        a = uQ(this.options.sanitize, this.options.VN, a);
        if (null === a)
            return c;
        a = '<a href="' + BQ(a) + '"';
        b && (a += ' title="' + b + '"');
        return a + (">" + c + "</a>")
    }
    ;
    l.image = function(a, b, c) {
        a = uQ(this.options.sanitize, this.options.VN, a);
        if (null === a)
            return c;
        a = '<img src="' + a + '" alt="' + c + '"';
        b && (a += ' title="' + b + '"');
        return a += this.options.eA ? "/>" : ">"
    }
    ;
    l.text = function(a) {
        return a
    }
    ;
    l = FQ.prototype;
    l.strong = function(a) {
        return a
    }
    ;
    l.em = function(a) {
        return a
    }
    ;
    l.codespan = function(a) {
        return a
    }
    ;
    l.del = function(a) {
        return a
    }
    ;
    l.text = function(a) {
        return a
    }
    ;
    l.link = function(a, b, c) {
        return "" + c
    }
    ;
    l.image = function(a, b, c) {
        return "" + c
    }
    ;
    l.br = function() {
        return ""
    }
    ;
    var NQ = function(a, b) {
        return (new EQ(b)).parse(a)
    };
    EQ.prototype.parse = function(a) {
        this.inline = new HQ(a.links,this.options);
        this.z5 = new HQ(a.links,pQ({}, this.options, {
            renderer: new FQ
        }));
        this.ob = a.reverse();
        for (a = ""; this.next(); )
            a += OQ(this);
        return a
    }
    ;
    EQ.prototype.next = function() {
        return this.X = this.ob.pop()
    }
    ;
    var PQ = function(a) {
        for (var b = a.X.text; "text" === (a.ob[a.ob.length - 1] || 0).type; )
            b += "\n" + a.next().text;
        return a.inline.Ee(b)
    }
      , OQ = function(a) {
        switch (a.X.type) {
        case "space":
            return "";
        case "hr":
            return a.renderer.hr();
        case "heading":
            return a.renderer.heading(a.inline.Ee(a.X.text), a.X.depth, rQ(a.z5.Ee(a.X.text)), a.V7);
        case "code":
            return a.renderer.code(a.X.text, a.X.lang, a.X.o4);
        case "table":
            var b = "", c = "", d, e;
            var f = "";
            for (d = 0; d < a.X.header.length; d++)
                f += a.renderer.tablecell(a.inline.Ee(a.X.header[d]), {
                    header: !0,
                    align: a.X.align[d]
                });
            b += a.renderer.tablerow(f);
            for (d = 0; d < a.X.cells.length; d++) {
                var g = a.X.cells[d];
                f = "";
                for (e = 0; e < g.length; e++)
                    f += a.renderer.tablecell(a.inline.Ee(g[e]), {
                        header: !1,
                        align: a.X.align[e]
                    });
                c += a.renderer.tablerow(f)
            }
            return a.renderer.table(b, c);
        case "blockquote_start":
            for (c = ""; "blockquote_end" !== a.next().type; )
                c += OQ(a);
            return a.renderer.blockquote(c);
        case "list_start":
            c = "";
            b = a.X.ordered;
            for (d = a.X.start; "list_end" !== a.next().type; )
                c += OQ(a);
            return a.renderer.list(c, b, d);
        case "list_item_start":
            c = "";
            b = a.X.tt;
            for (a.X.bi && (c += "<input " + (a.X.checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (a.renderer.options.eA ? " /" : "") + "> "); "list_item_end" !== a.next().type; )
                c += b || "text" !== a.X.type ? OQ(a) : PQ(a);
            return a.renderer.listitem(c);
        case "html":
            return a.renderer.html(a.X.text);
        case "paragraph":
            return a.renderer.paragraph(a.inline.Ee(a.X.text));
        case "text":
            return a.renderer.paragraph(PQ(a));
        default:
            c = 'Token with "' + a.X.type + '" type was not found.';
            if (a.options.silent)
                return console.log(c),
                "";
            throw Error(c);
        }
    }
      , wQ = /[&<>"']/
      , xQ = /[&<>"']/g
      , yQ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , zQ = /[<>"']|&(?!#?\w+;)/
      , AQ = /[<>"']|&(?!#?\w+;)/g
      , tQ = {}
      , sQ = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    qQ.exec = qQ;
    var marked = function(a, b, c) {
        if ("undefined" === typeof a || null === a)
            throw Error("marked(): input parameter is undefined or null");
        if ("string" !== typeof a)
            throw Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
        if (c || "function" === typeof b) {
            c || (c = b,
            b = null);
            b = pQ({}, marked.defaults, b || {});
            var d = b.highlight
              , e = 0;
            try {
                var f = KQ(a, b)
            } catch (k) {
                return c(k)
            }
            var g = f.length;
            var h = function(k) {
                if (k)
                    return b.highlight = d,
                    c(k);
                try {
                    var m = NQ(f, b)
                } catch (p) {
                    k = p
                }
                b.highlight = d;
                return k ? c(k) : c(null, m)
            };
            if (!d || 3 > d.length)
                return h();
            delete b.highlight;
            if (!g)
                return h();
            for (; e < f.length; e++)
                (function(k) {
                    return "code" !== k.type ? --g || h() : d(k.text, k.lang, function(m, p) {
                        if (m)
                            return h(m);
                        if (null == p || p === k.text)
                            return --g || h();
                        k.text = p;
                        k.o4 = !0;
                        --g || h()
                    })
                }
                )(f[e])
        } else
            try {
                return b && (b = pQ({}, marked.defaults, b)),
                NQ(KQ(a, b), b)
            } catch (k) {
                k.message += "\nPlease report this to https://github.com/markedjs/marked.";
                if ((b || marked.defaults).silent)
                    return "<p>An error occurred:</p><pre>" + BQ(k.message + "", !0) + "</pre>";
                throw k;
            }
    };
    marked.options = marked.setOptions = function(a) {
        pQ(marked.defaults, a);
        return marked
    }
    ;
    marked.b5 = function() {
        return {
            VN: null,
            breaks: !1,
            gfm: !0,
            n5: !0,
            o5: "",
            highlight: null,
            langPrefix: "language-",
            bG: !0,
            pedantic: !1,
            renderer: new DQ,
            sanitize: !1,
            vn: null,
            silent: !1,
            smartLists: !1,
            smartypants: !1,
            tables: !0,
            eA: !1
        }
    }
    ;
    marked.defaults = marked.b5();
    marked.Parser = EQ;
    marked.parser = NQ;
    marked.Renderer = DQ;
    marked.d9 = FQ;
    marked.N8 = JQ;
    marked.lexer = KQ;
    marked.M8 = HQ;
    marked.v$ = function(a, b, c) {
        return (new HQ(b,c)).Ee(a)
    }
    ;
    marked.c9 = CQ;
    marked.parse = marked;
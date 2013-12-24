var loadOutbrain = function(){
window.OBR = window.OBR || {};
(function (OBR) {
    window.OB_releaseVer = "141356";
    window.OBR = window.OBR || {};
    OBR.j = OBR.j || [];
    OBR.oa = OBR.oa || {};
    window.OBR$ = function (d) {
        return document.getElementById(d)
    };
    OBR.c = OBR.c || function () {
        var d = {}, a = {
                u: function () {
                    return d
                },
                h: function (a) {
                    d.T = a;
                    d.ma = [];
                    d.startTime = (new Date).getTime()
                },
                startTime: function () {
                    return d.startTime
                },
                log: function (a) {
                    var e = ((new Date).getTime() - d.startTime) / 1E3;
                    1E3 > d.ma.length && d.ma.push(e + " >" + a)
                },
                printLog: function () {
                    if (d.T.b.hf) window.console.log(d.ma.join("\n"));
                    else {
                        var a = d.T.a.Ca();
                        a && (a.innerHTML = d.ma.join("<br>"), a.style.display = "block")
                    }
                    return d.ma.join("\n")
                }
            };
        a.h(OBR);
        return a
    }();
    OBR.printLog = OBR.c.printLog;
    OBR.p = function () {
        this.D = []
    };
    OBR.p.prototype.add = function (d, a) {
        var c;
        "string" === typeof d && "function" === typeof a && (c = {}, c.name = d, c.Ae = a, this.D.push(c))
    };
    OBR.p.prototype.Eb = function (d) {
        var a, c;
        OBR.c.log("remove event :" + d);
        a = 0;
        for (c = this.D.length; a < c; a += 1)
            if (this.D[a] && this.D[a].name && this.D[a].name === d) try {
                this.D.splice(a, 1)
            } catch (e) {
                OBR.c.log("rm evnt err: " + e)
            }
    };
    OBR.p.prototype.k = function (d, a, c) {
        var e, b, g, f;
        a = a || [];
        c = !! c;
        OBR.c.log("event fire:" + d);
        e = 0;
        for (b = this.D.length; e < b; e += 1)
            if (g = this.D[e].name || "", f = this.D[e].Ae, g === d) try {
                f.apply(this, a)
            } catch (k) {
                OBR.c.log("fire evnt *" + d + "* error: " + k)
            }!0 === c && this.Eb(d)
    };
    OBR.p.prototype.O = function () {
        this.D = []
    };
    OBR.a = OBR.a || function () {
        var d = {}, a = {}, c = document,
            e = OBR;
        a.u = function () {
            d.T = e;
            return d
        };
        a.h = function (b) {
            e = b
        };
        a.aa = function () {
            return function () {}
        };
        a.Xe = function () {
            var b = window.jQuery;
            return void 0 !== b ? !(/1\.(0|1|2|3|4)\.(0|1)/.test(b.fn.jquery) || /^1\.1/.test(b.fn.jquery) || /^1\.2/.test(b.fn.jquery) || /^1\.3/.test(b.fn.jquery)) : !1
        };
        a.V = function (b) {
            return null === b || isNaN(b) ? null : e.o("outbrain_widget_" + b)
        };
        a.Ca = function () {
            return e.o("ob_holder")
        };
        a.pb = function () {
            if (!e.o(e.b.Ka)) {
                var b = e.a.createElement("iframe",
                    e.b.Ka),
                    g = b.style;
                g.display = "none";
                g.width = "1px";
                g.height = "1px";
                b.src = "about:blank";
                (g = a.Ca()) || (g = a.mc());
                e.a.W(b, g)
            }
        };
        a.mc = function () {
            if (c.body) return c.body;
            var b;
            b = e.a.Ba("", "", "body", !0);
            return 0 >= b.length ? c.lastChild : b[0]
        };
        a.createElement = function (b, a, f) {
            b = c.createElement(b);
            "string" === typeof a && b.setAttribute("id", a);
            "string" === typeof f && (b.style.cssText = f);
            return b
        };
        a.La = function (b) {
            if (e.b.Td === e.b.Qb) try {
                document.createStyleSheet().cssText = b
            } catch (a) {} else {
                var f = c.createElement("style"),
                    d = c.body ? "string" === typeof c.body.style.WebkitAppearance : !1;
                f.type = "text/css";
                c.getElementsByTagName("head")[0].appendChild(f);
                f[d ? "innerText" : "innerHTML"] = b
            }
        };
        a.C = function (b, a) {
            var f = c.createElement("script");
            f.type = e.b.zf;
            f.src = b;
            f.async = !! a;
            f.defer = !1;
            return f
        };
        a.jh = function (b, a) {
            var f = e.a.createElement("link", b);
            f.setAttribute("rel", "stylesheet");
            f.setAttribute("type", e.b.ke);
            a && f.setAttribute("href", a);
            return f
        };
        a.be = function (b) {
            var a = e.o("ob_iframe");
            a && (a.src = b)
        };
        a.Vc = function () {
            var b;
            b = isNaN(b) ?
                1E5 : b;
            return Math.floor(Math.random() * b)
        };
        a.ng = function (b, a, f) {
            return b.replace(a, f)
        };
        a.Ne = function (b, a) {
            var f = [];
            f.push('<body onload="');
            f.push("var js = document.createElement('script');");
            f.push("js.src = '" + b + "';");
            "number" === typeof a && f.push("js.onerror = function(){ top.OBR.extern.errorInjectionHandler(" + a + ") };");
            f.push("var d = document;d.getElementsByTagName('head')[0].appendChild(js);\">");
            f.push("<script type='text/javascript'>");
            f.push("window.OBR={extern:{}};");
            f.push("OBR.extern.returnedHtmlData=function(json,idx){(top.OBR.extern.returnedHtmlData)&& top.OBR.extern.returnedHtmlData(json,idx); };");
            f.push("OBR.extern.returnedIrdData=function(json,idx){(top.OBR.extern.returnedIrdData)&& top.OBR.extern.returnedIrdData (json,idx);};");
            f.push("OBR.extern.returnedJsonData=function(json,idx){(top.OBR.extern.returnedJsonData)&& top.OBR.extern.returnedJsonData(json,idx);};");
            f.push("OBR.extern.returnedError=function(json){(top.OBR.extern.returnedError)&& top.OBR.extern.returnedError(json);};");
            f.push("window.outbrain={};");
            f.push("outbrain.returnedIrdJsonData=function(json,idx){(top.outbrain.returnedIrdJsonData) && top.outbrain.returnedIrdJsonData(json,idx);  };");
            f.push("outbrain.returnedJsonData =function(json,idx){(top.outbrain.returnedJsonData) && top.outbrain.returnedJsonData(json,idx); };");
            f.push("outbrain.returnedError=function(json){(top.outbrain.returnedError) && top.outbrain.returnedError(json);};");
            f.push("\x3c/script>");
            f.push("</body>");
            return f.join("")
        };
        a.Me = function () {
            var b;
            if (b = OBR.o("objsonpp"))
                if (a.nf()) a.X(b.parentNode) && b.parentNode.removeChild(b);
                else return OBR.o("objsonpp");
            b = document.createElement("iframe");
            b.id = "objsonpp";
            b.ug && (b.ug =
                "seamless");
            (b.frameElement || b).style.cssText = "width: 0; height: 0; border: 0";
            b.src = "javascript:false";
            document.body.appendChild(b);
            return b
        };
        a.df = function (b) {
            var g = a.Me(),
                g = g.contentWindow || g.contentDocument;
            g.document && (g = g.document);
            g.open().write(b);
            g.close()
        };
        a.H = function (b) {
            var a = e.b.oe,
                f, c;
            c = a.getElementsByTagName("head");
            try {
                c && 0 < c.length ? c[0].insertBefore(b, c[0].firstChild) : (f = a.getElementsByTagName("script"), f[0].insertBefore(b, f[0].firstChild))
            } catch (d) {
                e.c.log("Err insertToHead:" + d)
            }
        };
        a.gf = function (b, g) {
            var f = a.Ne(g, b);
            a.sb(f) || a.df(f)
        };
        a.nh = function (b) {
            b = b || OBR;
            return "function" !== typeof b.p ? (OBR.c.log("namespace.EventManager not function"), null) : new b.p
        };
        a.M = function (b) {
            return encodeURIComponent(b)
        };
        a.X = function (b) {
            return null !== b
        };
        a.vf = function () {
            var b, g, f, c, d;
            b = document.getElementsByTagName("div");
            g = b.length;
            d = e.b.hd;
            for (f = 0; f < g; f += 1)
                if (c = b[f].getAttribute(d), a.sb(c)) return !0;
            return !1
        };
        a.uf = function (b) {
            var g;
            if (a.rb(b)) return !1;
            g = b.lb().recMode || "";
            b = b.lb().dynamicWidgetLayout ||
                "";
            return "1" !== (e.b.sg[g] || "") && "1" !== (e.b.tg[b] || "") || !a.vf() ? !1 : !0
        };
        a.rb = function (b) {
            return "undefined" === typeof b || null === b
        };
        a.sb = function (b) {
            return a.rb(b) || "" === b
        };
        a.Ba = function (b, g, f, e) {
            var d, l, m, p, n;
            l = [];
            e = !! e;
            d = a.sb(d) ? !0 : !1;
            f = c.getElementsByTagName(f || "*");
            m = 0;
            for (p = f.length; m < p; m += 1) n = "class" === b ? f[m].className : f[m].getAttribute(b), null !== n && (!1 === d && (n = n.toLowerCase(), g = g.toLowerCase()), (n = "" === b ? !0 : e ? -1 < n.indexOf(g) : n === g) && l.push(f[m]));
            return l
        };
        a.lg = function (b) {
            var a = window;
            a.detachEvent ?
                a.detachEvent("onscroll", b) : a.removeEventListener && a.removeEventListener("scroll", b, !1)
        };
        a.m = function (b, a, f) {
            b.attachEvent ? b.attachEvent("on" + a, function () {
                f.call(b)
            }) : b.addEventListener && b.addEventListener(a, f, !1)
        };
        a.W = function (b, a) {
            try {
                a.appendChild(b)
            } catch (f) {
                e.c.log("fail insert into Dom:" + f)
            }
        };
        a.Sa = function (b) {
            b = e.o(b);
            !a.rb(b) && a.X(b.parentNode) && b.parentNode.removeChild(b)
        };
        a.insertBefore = function (b, a) {
            return a.parentNode.insertBefore(b, a)
        };
        a.isArray = function (b) {
            return b instanceof Array ? !0 :
                "[object Array]" === Object.prototype.toString.call(b)
        };
        a.Ua = function (b, a) {
            var f = /htt(p|ps)?:\/\/127\.0\.0\.1(:\d\d\d\d)?$/i;
            return /htt(p|ps)?:\/\/([\w\-]*|[\w\-]*\.[\w\-]*)\.outbrain\.com(:\d\d\d\d)?$/i.test(b) || f.test(b) ? b : a
        };
        a.Wg = function (b) {
            b = b.replace(/^(\s*)/g, "");
            var a = c.createElement("div");
            a.innerHTML = b;
            return a.childNodes
        };
        a.F = function (b, a) {
            return b ? b.getAttribute(a) : null
        };
        a.B = function (b, a, f) {
            b && b.setAttribute(a, f)
        };
        a.Rb = function (b, a) {
            b && (b.className += " " + a)
        };
        a.P = function (b, a) {
            b = b.replace(/[\[]/,
                "\\[").replace(/[\]]/, "\\]");
            var f, c;
            try {
                return f = RegExp("[\\?&]" + b + "=([^&#]*)", "i"), c = f.exec(decodeURIComponent(window.location.href.replace(/\+/g, " "))), null === c ? a : c[1]
            } catch (e) {
                return a
            }
        };
        a.fe = function (b) {
            "string" === typeof b && 0 < b.indexOf("#") && (b = b.substr(0, b.lastIndexOf("#")));
            return b
        };
        a.$b = function (b) {
            var a = e.b.S + "/strip_default.png";
            b.src !== a && (b.alt = "", b.title = "", b.src = a)
        };
        a.se = function () {
            var b = null,
                a, f, e = null;
            if ("string" === typeof window.OB_MP_feed) b = window.OB_MP_feed;
            else if ((a = c.getElementsByTagName("head")) &&
                0 < a.length)
                for (f = a[0].getElementsByTagName("link"), a = 0; a < f.length; a += 1)
                    if (e = f[a], null !== e.type && ("application/rss+xml" === e.type || "application/atom+xml" === e.type) && null !== e.href && "" !== e.href) {
                        b = e.href;
                        break
                    }
            return b
        };
        a.uc = function (b) {
            var a = null;
            b.currentStyle ? a = b.currentStyle.color : window.getComputedStyle && (a = document.defaultView.getComputedStyle(b, null).getPropertyValue("color"));
            return a
        };
        a.yg = function () {
            var b = a.Ca(),
                c, f;
            a.X(b) && (c = e.a.createElement("span", "ob_a"), a.insertBefore(c, b), c.innerHTML =
                ".", f = a.uc(c), a.Sa("ob_a"), c = e.a.createElement("a", "ob_a"), c.setAttribute("href", "void(0)"), c.innerHTML = ".", a.insertBefore(c, b), b = a.uc(c), a.Sa("ob_a"), f = "rgb(0, 0, 0)" === f || "#000000" === f ? "#555" : f, a.La(".ob-tcolor{color:" + f + "} .ob-lcolor{color:" + b + "} .ob-bgtcolor{background-color:" + f + "} .item-link-container:hover .ob-tcolor{border-color:" + f + "}"))
        };
        a.sc = function (b) {
            var c = a.rc("property", "og:url", "meta", "content");
            null === c && (c = a.rc("rel", "canonical", "link", "href"));
            null !== c || b || (c = window.location.href);
            null === c && (c = "");
            return c
        };
        a.rc = function (b, c, f, e) {
            var d = null;
            b = a.Ba(b, c, f, !1);
            null !== b && 0 < b.length && (d = b[0].getAttribute(e));
            return d
        };
        a.ce = function (b) {
            var c, f, d;
            f = e.j[b].l("tracking", !1);
            c = e.b.Na;
            b = e.j[b].l("comScoreEnabled", !0);
            d = e.b.ac;
            !1 === f && (!1 === c && !0 === b && !1 === d) && (a.pb(), c = e.o(e.b.Ka)) && (c.src = e.b.S + "/" + e.b.Ra + "3rd/comScore/comScore.htm", e.b.ac = !0)
        };
        a.Ve = function () {
            var b = a.kb(8),
                c = "";
            "string" === typeof window.name && ("" === window.name || -1 < window.name.indexOf("frame")) ? (window.name = b, c = window.name) :
                c = "string" === typeof window.name && "" !== window.name ? window.name : b;
            return c
        };
        a.kb = function (b) {
            var a, f;
            a = [];
            b = "number" === typeof b ? b : 8;
            for (f = 0; f < b; f += 1) a.push("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(61 * Math.random())));
            return a.join("")
        };
        a.Ea = function (b) {
            for (var a in e.oa)
                if (e.oa[a].i === b) return e.oa[a];
            return null
        };
        a.wc = function (b) {
            var a, f;
            f = e.j;
            for (a = 0; a < f.length; a += 1)
                if (f[a].ka() === b) return f[a];
            return null
        };
        a.rf = function (b) {
            for (var a in b)
                if (b.hasOwnProperty(a)) return !1;
            return !0
        };
        a.ba = function (b, a) {
            return "function" !== typeof b ? null : "undefined" === typeof a ? b() : b(a)
        };
        a.nf = function () {
            return "Microsoft Internet Explorer" == navigator.appName
        };
        a.le = function (b, a) {
            return b * a
        };
        a.pc = function (b) {
            if (!b || "" === b) return [];
            b = b.replace("", "").replace("http://", "").replace("https://", "").replace("www.", "").replace("www2.", "").split("/");
            b.pop();
            return 0 < b.length ? b : []
        };
        a.He = function (b, c) {
            var f = a.pc(b),
                e = [],
                d = "";
            if (c >= f.length) d = f.join(".");
            else {
                e[0] = f[0];
                for (d = 1; d <= c; d += 1) e[d] = f[d];
                d =
                    e.join(".")
            }
            return d
        };
        a.Re = function () {
            return "http" + ("https:" === c.location.protocol ? "s" : "")
        };
        a.Pe = function () {
            var b, e;
            b = c.getElementById("widgetVersionSync");
            null === b && (b = a.createElement("iframe", "widgetVersionSync"), e = a.createElement("div", null, "display:none; height:0px; width:0px; border:none;"), e.appendChild(b), a.mc().appendChild(e));
            return b
        };
        a.ah = function (b) {
            var c;
            c = window.OB_releaseVer;
            isNaN(c) || (isNaN(b) || c >= b) || (b = a.Re() + "://widgets.outbrain.com/external/sync/outbrainjs.html?needToBeVer=" + b.toString(),
                c = a.Pe(), c.src = b)
        };
        a.Qd = function (b) {
            b = b.l("widgetVersionSync", 1);
            isNaN(b) || "" === b || (b = parseInt(b, 10) || 1, a.ah(b))
        };
        a.Qe = function (b, c) {
            var f = b.parentNode;
            return f ? f.tagName.toLowerCase() == c ? f : a.Qe(f, c) : !1
        };
        a.h(OBR);
        return a
    }();
    OBR.N = function (d, a, c, e, b, g, f, k, h) {
        var l, m;
        l = this;
        m = 0;
        h = "function" === typeof h ? h : OBR.a.le;
        l.start = function () {
            var p;
            m += 1;
            OBR.a.ba(d, m) ? OBR.a.ba(a, m) : (p = OBR.a.ba(k, m)) ? OBR.a.ba(e, m) : (p = m === g && 1E3 !== g) ? OBR.a.ba(e, m) : (OBR.a.ba(c, m), p = f ? h(m, b) : b, setTimeout(function () {
                l.start()
            }, p))
        };
        l.start()
    };
    OBR.ec = OBR.ec || {
        kf: function () {
            return "complete" === document.readyState
        }
    };
    OBR.ue = function () {
        var d = {}, a = [];
        d.add = function (c) {
            a.push(c)
        };
        d.remove = function (c) {
            a.splice(c, 1)
        };
        d.top = function () {
            return 0 < a.length ? a.shift() : null
        };
        d.mh = function () {
            return a
        };
        d.ee = function () {
            a = []
        };
        return d
    };
    OBR.b = OBR.b || function () {
        var d = {}, a = {}, c = OBR,
            e;
        a.Fd = "opera";
        a.Qb = "msie";
        a.zd = "firefox";
        a.yd = "chrome";
        a.Id = "safari";
        a.Cd = "mozilla";
        a.ih = "boolean";
        a.Ah = "string";
        a.th = "object";
        a.Bh = "undefined";
        a.Ka = "ob_iframe";
        a.Ac = !0;
        a.Tc = 0;
        a.Lb = "outbrain_widget_";
        a.zf = "text/javascript";
        a.ke = "text/css";
        a.oe = document;
        a.Ec = "undefined" !== typeof document.createElement("script").async;
        a.wd = c.a.Ve();
        a.ig = document.referrer;
        a.hg = c.a.M(document.referrer);
        a.Cf = document.location.href;
        a.rh = c.a.M(a.Cf);
        a.ya = !1;
        a.Pd = navigator.userAgent.toLowerCase();
        a.xh = navigator.platform.toLowerCase();
        e = a.Pd;
        a.Td = /opera/.test(e) ? a.Fd : /msie/.test(e) ? a.Qb : /firefox/.test(e) ? a.zd : /chrome/.test(e) ? a.yd : /safari/.test(e) ? a.Id : a.Cd;
        a.Na = !! /(iphone|ipod|symbian|android|windows ce|blackberry|palm|ipad)/.test(e);
        a.pf = 0;
        a.of = function () {
            return void 0 === window.XMLHttpRequest && void 0 !== ActiveXObject
        };
        a.cg = window.OB_platformType || null;
        a.Pa = "number" === typeof a.cg;
        a.jd = null;
        a.gc = null;
        a.Vg = function () {
            a.Pa && (a.jd && a.gc) && (a.jd(), a.gc())
        };
        a.ua = "string" === typeof window.OB_releaseVer ?
            window.OB_releaseVer : "0";
        a.Jf = !0 === window.OB_disable_odbl;
        e = ("https:" === document.location.protocol ? "https" : "http") + "://";
        a.Zd = "/blogutils/ExcludeRec.action?bocr=";
        a.uh = "html";
        a.Ze = c.a.Ua(c.a.P("wiodb", e + "hpr.outbrain.com"), e + "hpr.outbrain.com");
        a.Ab = c.a.Ua(c.a.P("wiodb", e + "odb.outbrain.com"), e + "odb.outbrain.com");
        a.$d = "http://storage.outbrain.com/";
        a.S = c.a.Ua(c.a.P("wihost", e + "widgets.outbrain.com"), e + "widgets.outbrain.com");
        a.Yf = c.a.Ua(c.a.P("wiout", e + "outbrain.com"), e + "outbrain.com");
        a.Sc = e + "log.outbrain.com/";
        a.Ra = "nanoWidget/";
        a.Zf = a.Pa ? "NANOWDGTLT13" : "NANOWDGT01";
        a.Gf = a.S + "/" + a.Ra + a.ua + (a.Pa ? "/moduleLT" : "/module");
        a.Ff = a.S + "/" + a.Ra + "3rd";
        a.hf = "object" === typeof window.console;
        a.pd = c.a.fe(c.a.se());
        a.od = null === a.pd ? "" : c.a.M(a.pd);
        a.ac = !1;
        a.Kf = "true" === c.a.P("obdraft", !1) ? "&obDraft=true" : "";
        a.Ld = !1 !== c.a.P("obAbtest", !1) ? "&obAbtest=" + c.a.P("obAbtest", "") : "";
        a.md = function (b) {
            a.Ma = a.Ma || b;
            return a.Ma
        };
        a.Ma = a.md("true" === c.a.P("advanceLoader", "false").toLowerCase());
        a.Jc = 0;
        a.na = null;
        a.hd = "data-obscrollable";
        a.sg = {
            touch_strip: "1"
        };
        a.tg = {
            "touch-strip": "1"
        };
        a.u = function () {
            d.T = c;
            return d
        };
        return a
    }();
    OBR.d = OBR.d || function () {
        var d = {}, a, c = {};
        d.h = function (c, b) {
            a = c;
            d.gg(b)
        };
        d.f = {
            Ya: "POPUPDESCRIPTION",
            wa: "WIDGETSTATISTICS",
            va: "WHATIS",
            Xa: "FLYTHROUGH",
            cb: "VIDEOPLUGIN",
            ga: "POSCUL",
            ab: "SCROLL",
            bb: "SCROLLEXTERNAL",
            Za: "RECINIFRAME",
            $a: "REGISTER"
        };
        d.Hd = function (a, b) {
            var c = {
                kh: a,
                url: b,
                version: -1,
                state: 0,
                eb: null,
                bc: this,
                Sb: null,
                de: function () {
                    if (2 === c.state) c.Ic();
                    else if (0 === c.state) {
                        var b = OBR.a.C(c.url, !0);
                        c.state = 1;
                        OBR.a.H(b)
                    }
                },
                Ic: function () {
                    c.state = 2;
                    "function" === typeof c.eb && c.eb.call(c.bc, c.Sb)
                }
            };
            return c
        };
        d.gg = function (c) {
            function b(b) {
                return a.b.Gf + "/" + b
            }

            function g(b, a) {
                c[b] || (c[b] = new d.Hd(b, a))
            }
            g(d.f.Ya, b("popupDescription.js"));
            g(d.f.wa, b("widgetStatistics.js"));
            g(d.f.va, b("whatis.js"));
            g(d.f.Xa, b("flyThrough.js"));
            g(d.f.cb, b("videoPlugin.js"));
            g(d.f.ga, b("positionCalculation.js"));
            g(d.f.Za, b("recInIframe.js"));
            g(d.f.$a, b("registration.js"));
            g(d.f.ab, b("scroll.js"));
            g(d.f.bb, a.b.Ff + "/scroll/scrollExternal.js")
        };
        d.Ke = function (a) {
            return c[a]
        };
        d.v = function (a, b, c, f) {
            if (a = d.Ke(a)) a.eb = b || OBR.a.aa(),
            a.bc = c, a.Sb = f, a.de()
        };
        d.tc = function (a) {
            return c[a].state
        };
        d.I = function (e) {
            "-1" !== a.b.ua && c[e].Ic()
        };
        d.h(OBR, c);
        return d
    }();
    OBR.h = OBR.h || void 0;
    OBR.o = function (d) {
        return document.getElementById(d)
    };
    OBR.J = OBR.J || function () {
        var d = {}, a = {}, c, e;
        a.h = function (b) {
            c = b = b || OBR;
            d.pa = new c.p;
            e = !1
        };
        a.u = function () {
            return d
        };
        d.ff = function () {
            var b, a;
            b = c.a.createElement("iframe", "ob_ping");
            b.setAttribute("id", "ob_ping");
            b.style.border = "0px";
            b.style.width = "0px";
            b.style.height = "0px";
            b.setAttribute("src", c.b.Ab + "/utils/ping.html?r=" + c.a.Vc());
            c.a.m(b, "load", function () {
                c.c.log("ping returned");
                c.b.Tc = 2;
                d.pa.k("success");
                c.J.cd()
            });
            a = c.a.Ca();
            null !== a && (c.c.log("ping inserted"), c.a.W(b, a))
        };
        d.bg = function () {
            c.c.log("ping Wait");
            new c.N(function () {
                return 2 === c.b.Tc
            }, function () {}, c.a.aa(), function () {
                d.pa.k("fail");
                c.J.cd()
            }, 50, 200, !1)
        };
        a.cd = function () {
            c.a.Sa("ob_ping")
        };
        a.Uf = function (b) {
            d.pa.add("success", b)
        };
        a.Tf = function (b) {
            d.pa.add("fail", b)
        };
        a.sf = function () {
            return e
        };
        a.nd = function () {
            e = !0
        };
        a.ag = function () {
            d.ff();
            d.bg()
        };
        a.w = function () {
            d.pa.O()
        };
        a.h(OBR);
        return a
    }();
    OBR.ca = OBR.ca || function () {
        var d, a = {}, c = {}, e;
        a.h = function (b) {
            d = b = b || OBR;
            e = new d.p
        };
        a.u = function () {
            return c
        };
        c.gb = function (b) {
            var a, f;
            a = 0;
            for (f = b.length; a < f; a += 1) d.a.B(b[a], "data-ob-mark", "true"), e.k("find", [b[a]])
        };
        c.lc = function () {
            return d.a.Ba("class", "OUTBRAIN", "div", !0)
        };
        c.Ge = function (b) {
            var a, f, c = [],
                e = [];
            a = 0;
            for (f = b.length; a < f; a += 1)
                if ("string" === typeof b[a].containerId)
                    if (d.o(b[a].containerId)) {
                        var l = d.o(b[a].containerId);
                        "string" === typeof b[a].widgetId && d.a.B(l, "data-widget-id", b[a].widgetId);
                        "string" === typeof b[a].permalink && d.a.B(l, "data-src", b[a].permalink);
                        "boolean" === typeof b[a].advanceLoader && d.a.B(l, "data-advance-loader", b[a].advanceLoader);
                        "boolean" === typeof b[a].dynLoad && d.a.B(l, "data-dynLoad", b[a].dynLoad);
                        "string" === typeof b[a].widgetType && d.a.B(l, "data-widget-type", b[a].widgetType);
                        "string" === typeof b[a].timeout && d.a.B(l, "data-timeout", b[a].timeout);
                        "string" === typeof b[a].fbk && d.a.B(l, "data-fbk", b[a].fbk);
                        e.push(l)
                    } else c.push(b[a]);
            window.OB_elements = c;
            return e
        };
        c.Oe = function () {
            var b = [];
            "object" === typeof window.OB_elements && 0 < window.OB_elements.length && (b = window.OB_elements);
            return b
        };
        c.Le = function () {
            var b = [],
                a = c.lc(),
                f, e;
            f = 0;
            for (e = a.length; f < e; f += 1) {
                var h = d.a.F(a[f], "data-ob-mark");
                null !== h && "true" === h || !a[f] || b.push(a[f])
            }
            f = c.Oe();
            if (0 < f.length)
                for (d.c.log("Array of elements found!"), a = c.Ge(f), f = 0, e = a.length; f < e; f += 1) b.push(a[f]);
            return b
        };
        a.hh = function (b) {
            c.ic(b)
        };
        c.ic = function (b) {
            if (void 0 === b) {
                var a = !1;
                d.c.log("searching for containers");
                new d.N(function () {
                        return a
                    }, d.a.aa(),
                    function () {
                        a = d.ec.kf();
                        var b = c.Le();
                        a && d.c.log("checking:(" + a + ")");
                        0 < b.length && c.gb(b)
                    }, e.k("stopSearch"), 50, 1E3, !1)
            } else 0 < (b.length || 0) && c.gb(b)
        };
        a.ph = function () {
            return 0 < c.lc().length
        };
        a.Nf = function (b) {
            e.add("find", b)
        };
        a.wh = function (b) {
            e.add("stopSearch", b)
        };
        a.hc = function () {
            c.ic()
        };
        a.ve = function (b) {
            var a = [],
                f, e;
            d.r.bf();
            f = 0;
            for (e = d.j.length; f < e; f += 1) {
                var h = d.a.V(f);
                null !== h && ("string" === typeof b && d.a.B(h, "data-src", b), d.a.B(h, "data-ob-mark", "false"), a.push(h))
            }
            0 < a.length && (d.j = [], c.gb(a))
        };
        a.w =
            function () {
                e.O();
                d.j = []
        };
        a.h(OBR);
        return a
    }();
    OBR.r = OBR.r || function () {
        var d = {}, a = {}, c;
        a.h = function (a) {
            c = a = a || OBR;
            d.Cb = new c.ue;
            d.zb = new c.p;
            d.Oa = !1
        };
        d.Ce = function (a) {
            var b;
            b = a.Ue();
            var d, f = c.a.ng;
            b = b && "hp" === b ? c.b.Ze + "/utils/get?url=$LNK$SRC&settings=$SET&recs=$REC&widgetJSId=$WID&key=$KEY&idx=$IDX&version=$VER&ref=$REF&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$DRFT$ABTEST" : c.b.Ab + "/utils/get?url=$LNK$SRC&settings=$SET&recs=$REC&widgetJSId=$WID&key=$KEY&idx=$IDX&version=$VER&ref=$REF&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$DRFT$ABTEST";
            d = a.ka();
            b = f(b + ("" !== d && null !== d ? "&fbk=" + d : ""), "$LNK", c.a.M(a.da()));
            b = f(b, "$SRC", 0 < c.b.od.length ? "&srcUrl=" + c.b.od : "");
            b = f(b, "$IDX", a.i);
            b = f(b, "$SET", !0);
            b = f(b, "$REC", !0);
            b = f(b, "$KEY", c.b.Zf);
            b = f(b, "$WID", a.A());
            b = f(b, "$VER", c.b.ua);
            b = f(b, "$REF", c.b.hg);
            b = f(b, "$SIG", c.b.wd);
            b = f(b, "$APV", c.b.ya);
            b = f(b, "$FRT", a.Ie());
            b = f(b, "$RND", c.a.Vc());
            b = f(b, "$DRFT", c.b.Kf);
            return b = f(b, "$ABTEST", c.b.Ld)
        };
        d.ob = function (a, b, g) {
            g = c.b.Ma && g;
            var f = b.i;
            b.t.Hg();
            g ? c.a.gf(f, a) : (g = c.a.C(a, !0), "" !== b.ka() && c.a.m(g, "error", function () {
                    OBR.extern.errorInjectionHandler(f)
                }),
                c.a.H(g));
            d.zb.k("onOdbFire_" + f + "_" + b.A(), [b], !0);
            c.c.log("fire this src " + a)
        };
        d.Ig = function (a) {
            c.b.Ec && setTimeout(function () {
                d.bd(a.i, a.A())
            }, 1E4)
        };
        d.bd = function (a, b) {
            c.a.Sa("ob_odbCall_" + a + b)
        };
        a.k = function () {
            if (!0 !== d.Oa && !0 === c.J.sf()) {
                d.Oa = !0;
                var a = d.Cb.top(),
                    b;
                a ? (c.c.log("fire odb for " + a.da()), b = d.Ce(a), d.ob(b, a, !0), d.Ig(a)) : d.Oa = !1
            }
        };
        a.Rf = function (a, b) {
            d.zb.add("onOdbFire_" + a.i + "_" + a.A(), b)
        };
        a.Jb = function (a, b) {
            d.Oa = !1;
            d.bd(a, b)
        };
        a.xg = function (a) {
            !0 === a && (OBR.b.ya = a)
        };
        a.bf = function () {
            OBR.b.ya = !1
        };
        a.Zc = function (e) {
            d.Cb.add(e);
            c.c.log("register odb for " + e.da());
            a.k()
        };
        a.Ud = function (c) {
            a.Jb(c.i, c.A());
            a.k()
        };
        a.w = function () {
            d.Cb.ee();
            d.zb.O()
        };
        a.u = function () {
            d.T = c;
            return d
        };
        a.h(OBR);
        return a
    }();
    OBR.g = OBR.g || function () {
        function d() {
            c.c.log("ping fail")
        }

        function a() {
            c.c.log("ping success");
            c.J.nd();
            c.display.Mf(b.Od);
            c.r.k()
        }
        var c, e = {}, b = {}, g;
        b.wb = "manualDataReady";
        b.vb = "manualClickReady";
        e.h = function (a) {
            c = a = a || OBR;
            g = new c.p;
            e.jg(b.Bf)
        };
        e.u = function () {
            return b
        };
        e.jg = function (b) {
            g.add("onHtmlReturn", b)
        };
        b.Od = function (a) {
            c.c.log("rec " + a + " was rendered");
            var e = c.j[a];
            e.$(!0);
            e.t.Kg();
            0 === a && c.a.yg();
            b.xf(e) && b.wg(e);
            c.a.Qd(e);
            c.display.ef(e)
        };
        b.Se = function (b) {
            return Math.floor(Math.random() *
                b) + 1
        };
        b.xf = function (a) {
            var e = c.b.Na,
                d = a.l("tracking", !1);
            if (!a.l("widgetStatistics", !1) || e || d) return !1;
            a = a.l("wsSampling", 0);
            return 0 === a ? !0 : b.Se(a) === a
        };
        b.wg = function (b) {
            2 === c.d.tc(c.d.f.wa) && 2 === c.d.tc(c.d.f.ga) ? c.q.Ub(b.i) : c.d.v(c.d.f.ga, function () {
                c.d.v(c.d.f.wa, function () {
                    c.q.Ub(b.i)
                }, this)
            }, this)
        };
        b.$g = function (a) {
            c.c.log("widget was found");
            a = c.Wa.Nd(a);
            0 === a.i && b.Vd();
            !0 === a.lf() ? c.c.log("Dynamic loader - stop odb!") : c.r.Zc(a)
        };
        e.Nc = function (a, d) {
            var h = "NA",
                l = a && a.response ? a.response : null,
                m;
            if (m = c.a.Ea(d))
                if (g.k("onmManualOdbReturned_" + d, [l, d]), m.Y()) return;
            l && (l.request && l.request.widgetJsId) && (h = l.request.widgetJsId);
            c.r.Jb(d, h);
            m && (l && l.documents) && (m.$(!0), e.kc(b.wb, d, h, a));
            c.r.k()
        };
        e.Sf = function (b, a) {
            g.add("onmManualOdbReturned_" + b, a)
        };
        e.kc = function (b, a, c, e) {
            b = b + a + c;
            g.k(b, [e.response.documents, a]);
            g.Eb(b)
        };
        e.Kc = function (a, d) {
            if (null !== a) {
                var h = 0,
                    l = a.permalink,
                    m = a.widgetId,
                    p = a.widgetType,
                    n = a.fbk,
                    q = a.timeout;
                l && "string" === typeof l && (m && "string" === typeof m) && (c.c.log("manual Odb call"),
                    h = e.Df(l), e.Qa(b.wb + h + m, d), l = c.Wa.cc(h, l, m, !1, p, n, q, !0), l.Eg(), c.oa[h] = l, g.k("onmManualOdbCall", [l, b.wb]), c.J.nd(), c.r.Zc(l))
            }
        };
        e.Qa = function (b, a) {
            g.add(b, a)
        };
        e.Wf = function (b) {
            g.add("onmManualOdbCall", b)
        };
        e.Df = function (b) {
            var a = 0,
                e = c.b;
            null === e.na && (e.na = 0 < c.j.length ? c.j[0].da() : null);
            e.na === b ? a = e.Jc + 1 : e.na = b;
            return e.Jc = a
        };
        e.ub = function (a, e) {
            var d = OBR.o(c.b.Ka);
            c.a.X(d) && c.a.X(d.parentNode) && d.parentNode.removeChild(d);
            c.a.pb();
            "function" === typeof e && g.add(b.vb, e);
            if (null !== a && (d = a.link) && "string" ===
                typeof d) {
                c.c.log("manual Click");
                if (null !== d.match(/http:\/\/.+outbrain.com/i)) c.a.be(d + "&noRedirect=true");
                else throw "Wrong redirect link: " + d;
                g.k(b.vb);
                g.Eb(b.vb)
            }
        };
        b.wf = function (a) {
            return b.Dc(a) || a.l("stopWidget", !1)
        };
        b.Dc = function (b) {
            return b.l("stopRater", !1)
        };
        b.Vd = function () {
            c.J.Uf(a);
            c.J.Tf(d);
            c.b.Jf || c.b.Ec ? (c.c.log("async - no ping"), a()) : c.J.ag()
        };
        e.Bb = function (a, d) {
            var h, l;
            OBR.c.log("HTML returned");
            (h = c.j[d]) ? (h.t.Gg(), h.Y() || (h.setData(a), l = h.A(), b.wf(h) || b.yf(h.Da()) || (c.r.xg(a.response.settings.apv),
                e.tf(h) ? e.fa(d) : e.We(h), l && g.k("odbRtn_" + l, [h]), g.k("onHtmlReturn", [h]))), e.ye(h)) : c.c.log("odbHtmlReturned : Widget not found")
        };
        b.Bf = function (b) {
            !0 === b.l("isRegistrationEnabled", !1) && c.d.v(c.d.f.$a, function () {
                c.ad.mg()
            }, this)
        };
        b.yf = function (b) {
            var a = !1;
            null !== b.match(/(<\/?met|<\/?scr)/i) && (a = !0, c.c.log("SECURITY"));
            return a
        };
        e.ye = function (a) {
            b.Dc(a) || (c.r.Jb(a.i, a.A()), c.r.k())
        };
        e.tf = function (b) {
            var a = !0;
            if (b.Hc() || b.Bc()) a = !1;
            return a
        };
        e.We = function (b) {
            var a = b.i;
            b.Hc() ? c.d.v(c.d.f.cb, function () {
                    c.Va.je(a)
                },
                this) : b.Bc() && c.display.cf(b)
        };
        e.fa = function (b) {
            c.display.fa(c.j[b]);
            c.c.log("HTML - Render");
            e.dg(b)
        };
        e.dg = function (b) {
            c.a.ce(b)
        };
        e.Wc = function (b, a) {
            c.a.Rb(a, "ob_clicked");
            var e = c.a.F(a, "data-redirect");
            null !== e && (a.href = e);
            return !0
        };
        e.Yc = function (b) {
            c.q && c.q.Rc();
            c.ca.ve(b);
            return !0
        };
        e.w = function () {
            g.O()
        };
        e.fd = function () {
            c.ca.Nf(b.$g);
            c.b.Pa ? c.b.Vg() : c.ca.hc()
        };
        e.Yd = function (b, a, e) {
            if (confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?")) {
                var d =
                    "https://my.outbrain.com/manage/";
                c.c.log("isAd = " + e + " type = " + typeof e);
                d = !1 === e ? d + ("add-zapped-document?publisherId=" + a + "&docUrl=" + c.a.M(b)) : d + ("add-rule?publisherId=" + a + "&ruleValue=" + c.a.M(b) + "&ruleType=" + e);
                b = c.a.C(d, !0);
                c.a.H(b)
            }
        };
        e.Xd = function (b) {
            confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?") && (b = c.a.C(c.b.Ab + c.b.Zd + b + "&index=1&templateIndex=1&sig=" + c.b.wd, !0),
                c.a.H(b))
        };
        e.rg = function (b) {
            b && (b.ob_exclude_resp && b.ob_exclude_resp.code && 1 !== b.ob_exclude_resp.code) && e.Yc()
        };
        e.$c = function (b, a) {
            if (a && "function" === typeof a) {
                var e = "odbRtn_" + b;
                g.add(e, a);
                var d = c.Mb.xc(b);
                d && d.jf() && g.k(e, [d])
            }
        };
        e.De = function (b) {
            return (b = c.Mb.xc(b)) ? b.G("tcr", -1) : null
        };
        e.qg = function () {
            c.ca.hc()
        };
        e.O = function () {
            c.q && c.q.Rc();
            c.display.w();
            c.r.w();
            c.J.w();
            this.w();
            c.ca.w();
            c.ia && c.ia.w();
            c.b.ya = !1
        };
        e.kg = function () {
            this.O();
            this.fd()
        };
        e.h(OBR);
        return e
    }();
    OBR.display = OBR.display || function () {
        var d, a = {}, c;
        a.h = function (a) {
            d = a = a || OBR;
            c = new d.p
        };
        a.yc = function (a, b) {
            var c = d.a.Wg(a),
                f = d.a.V(b.i);
            f && (c && 0 < c.length) && (f.innerHTML = "", d.a.W(c[0], f), d.c.log("element inserted"))
        };
        a.vh = function (a) {
            c.add("beforeRender", a)
        };
        a.Mf = function (a) {
            c.add("afterRender", a)
        };
        a.ef = function (a) {
            d.a.uf(a) && OBR.d.v(OBR.d.f.ab, function (b) {
                OBR.scroll.Ef(b)
            }, this, a)
        };
        a.cf = function (c) {
            OBR.d.v(OBR.d.f.ga, d.a.aa(), this);
            OBR.d.v(OBR.d.f.Xa, function () {
                a.ze(c)
            }, this)
        };
        a.ze = function (d) {
            a.yc(OBR.Aa.$e(d),
                d);
            OBR.Aa.h();
            c.k("afterRender", [d.i])
        };
        a.fa = function (e) {
            d.c.log("HTML - render widget with " + e.Da());
            a.yc(e.Da(), e);
            e.$(!0);
            c.k("afterRender", [e.i])
        };
        a.w = function () {
            c.O()
        };
        a.h(OBR);
        return a
    }();
    OBR.td = OBR.td || function (d) {
        var a = {}, c = {}, e = {}, b = "",
            g = null,
            f = null,
            k = !1,
            h = 0,
            l = "html",
            m = !1,
            p = 4E3,
            n = "nano",
            q = !1,
            s = !1,
            r = {}, t = new OBR.p;
        a.gh = 0;
        a.fh = 1E3;
        a.eh = 2;
        a.i = d;
        a.za = "";
        a.Cg = function (b, a) {
            t.add("onInjectError_" + b.i, a)
        };
        a.xe = function (b) {
            t.k("onInjectError_" + b, [b], !0)
        };
        a.t = {
            Pc: -1,
            Oc: -1,
            ed: -1,
            Ga: function () {
                var b = [];
                b.push(a.t.Pc);
                b.push(a.t.Oc);
                b.push(a.t.ed);
                return b
            },
            Hg: function () {
                a.t.Pc = (new Date).getTime()
            },
            Gg: function () {
                a.t.Oc = (new Date).getTime()
            },
            Kg: function () {
                a.t.ed = (new Date).getTime()
            }
        };
        a.te = {
            slow: 7E3,
            normal: 5E3,
            fast: 3E3,
            qa: 5
        };
        a.setData = function (a) {
            a && a.response && (a = a.response, a.request && (e = a.request), a.settings && (c = a.settings), a.html && (b = a.html), m = !0)
        };
        a.lb = function () {
            return c
        };
        a.l = function (b, a) {
            var f;
            f = c[b];
            return "undefined" !== typeof f && null !== f ? f : a
        };
        a.G = function (b, a) {
            var c = e[b];
            return c ? c : a
        };
        a.Da = function () {
            return b
        };
        a.A = function () {
            return g
        };
        a.Pg = function (b) {
            g = "string" === typeof b ? b : "NA"
        };
        a.Eg = function () {
            l = "japi"
        };
        a.Ie = function () {
            return l
        };
        a.yh = function (b) {
            h = b
        };
        a.lh = function () {
            return h
        };
        a.da = function () {
            return f
        };
        a.Jg = function (b) {
            f = b
        };
        a.lf = function () {
            return k
        };
        a.Ag = function (b) {
            k = "true" === b || !0 === b
        };
        a.Bc = function () {
            return "flyThrough" === a.l("displayMode", "")
        };
        a.Hc = function () {
            return "video" === a.l("displayMode", "")
        };
        a.qh = function () {
            return "recInIframe" === a.l("displayMode", "")
        };
        a.jf = function () {
            return m
        };
        a.Ue = function () {
            return n
        };
        a.Qg = function (b) {
            "string" === typeof b && (n = b.toLowerCase())
        };
        a.Ng = function (b) {
            "string" === typeof b && "" !== b && (a.za = b)
        };
        a.mf = function () {
            return !isNaN(parseInt(a.za, 10))
        };
        a.ka = function () {
            var b;
            b = parseInt(a.za, 10);
            return a.mf() && "number" === typeof b && 0 <= b && 10 > b ? OBR.a.He(f, b) : a.za
        };
        a.Y = function () {
            return q
        };
        a.$ = function (b) {
            "boolean" === typeof b && (q = b)
        };
        a.oh = function () {
            return "hp" === n
        };
        a.n = function () {
            return r
        };
        a.Bg = function () {
            var b = {
                timeout: 0,
                ra: null,
                fb: 0,
                Xb: !1,
                Lf: !1,
                Qa: "",
                Ja: !1,
                Hb: !1,
                Db: !1,
                xa: !1,
                vd: "NA",
                reason: 0,
                qb: !0
            };
            "object" === typeof b && (r = b)
        };
        a.qf = function () {
            return s
        };
        a.qc = function () {
            return p
        };
        a.Dg = function (b) {
            p = a.te[b] || 6E3
        };
        a.Fg = function (b) {
            "boolean" === typeof b && (s =
                b)
        };
        return a
    };
    OBR.Wa = OBR.Wa || function () {
        var d = OBR,
            a = {}, c = new d.p;
        a.cc = function (a, b, g, f, k, h, l, m) {
            a = new d.td(a);
            a.Jg(b);
            a.Pg(g);
            a.Ag(f);
            a.Qg(k);
            a.Ng(h);
            a.Dg(l);
            "boolean" === typeof m && a.Fg(m);
            c.k("onWidgetCreate", [a]);
            return a
        };
        a.Nd = function (c) {
            var b = d.a.F(c, "data-src"),
                g = d.a.F(c, "data-widget-id"),
                f = d.a.F(c, "data-widget-type"),
                k = d.a.F(c, "data-timeout"),
                h = d.a.F(c, "data-fbk"),
                l = d.a.F(c, "data-advance-loader"),
                m = d.a.F(c, "data-dynLoad");
            d.a.B(c, "data-dynLoad", "");
            d.b.md("true" === (l || "").toLowerCase());
            if ("string" !== typeof b) b =
                d.a.sc(!1);
            else if (0 === b.length || 0 === b.indexOf("DROP")) b = d.a.sc(!0);
            l = 0 === d.j.length && d.b.na === b ? 1 : d.j.length;
            b = a.cc(l, b, g, m, f, h, k, !1);
            d.j[l] = b;
            0 === l && (g = d.a.createElement("div", "ob_holder"), g.style.display = "none", d.a.insertBefore(g, c), d.a.pb());
            c.id = d.b.Lb + l;
            return b
        };
        a.Vf = function (a) {
            c.add("onWidgetCreate", a)
        };
        return a
    }();
    OBR.Mb = OBR.Mb || function () {
        var d = OBR;
        return {
            xc: function (a) {
                var c, e, b;
                if (d.j)
                    for (e = d.j.length, c = 0; c < e; c += 1)
                        if ((b = d.j[c]) && b.A() === a) return b;
                return null
            }
        }
    }();
    OBR.ia = OBR.ia || function () {
        var d = {}, a = OBR,
            c = {}, e = new a.p;
        c.qe = function (b) {
            b.Bg();
            "" !== b.ka() && (b.Cg(b, function () {
                d.Ye(b.i)
            }), OBR.r.Rf(b, function () {
                c.Og(b)
            }), OBR.g.$c(b.A(), d.Qf))
        };
        c.Og = function (b) {
            var a;
            a = b.n();
            a.timeout = b.qc();
            a.Ja || (a.ra = setTimeout(function () {
                c.ae(b)
            }, a.timeout))
        };
        d.Qf = function (b) {
            var a = b.n();
            a.Lf = !0;
            b.l("ispartialrecs", !1) && (clearTimeout(a.ra), a.reason = 3, a.Db = !0, c.ib(b))
        };
        d.Of = function (b, d) {
            var f;
            b && (b.settings && !0 === b.settings.ispartialrecs) && (f = a.a.Ea(d), clearTimeout(f.n().ra),
                c.dd(f))
        };
        c.Pf = function (b, c) {
            b.n().Qa = c;
            a.g.Sf(b.i, d.Of)
        };
        a.Wa.Vf(c.qe);
        a.g.Wf(c.Pf);
        d.Wb = function (b, d) {
            var f, e, h;
            b && b.response && (f = b.response, OBR.c.log("Cdn response returned"), (e = c.vc(d)) ? (a.r.Ud(e), h = e.n(), h.tb = b, f.request && (h.vd = f.request.widgetJsId || "NA"), h.Xb = (new Date).getTime(), h.Ja && !h.xa ? (h.Ja = !1, c.nb(e)) : h.Hb && !h.xa ? (h.Hb = !1, c.nb(e)) : h.Db && !h.xa && (h.Db = !1, c.nb(e))) : a.c.log("Editorial Widget : Widget not found"))
        };
        c.nb = function (b) {
            var a = b.n();
            a.xa = !0;
            c.dd(b);
            d.Bd(b);
            clearTimeout(b.n().ra);
            a.reason = 0;
            a.qb = !0
        };
        c.vc = function (b) {
            var c = a.j[b];
            return c ? c : a.a.Ea(b)
        };
        c.wc = function (b) {
            return (b = a.a.wc(b)) ? b : a.a.Ea("fbk")
        };
        c.ae = function (b) {
            var a = b.n();
            b.Y() || (a.reason = 1, a.Hb = !0, c.ib(b))
        };
        c.dd = function (b) {
            var c = b.n();
            b.Y() && !b.l("ispartialrecs", !1) ? c.qb = !1 : (b.qf() ? a.g.kc(c.Qa, b.i, c.vd, c.tb) : (b.setData(c.tb), OBR.g.fa(b.i)), b.$(!0))
        };
        d.Bd = function (b) {
            var c, f, d;
            f = b.n();
            a.a.rf(b.lb()) && b.setData(f.tb);
            d = "" !== b.da() ? a.a.M(b.da()) : window.location.href;
            c = b.l("irdfb", "");
            "" !== c && (c += "&reason=" + f.reason ||
                "", c = c + ("&url=" + d || "") + ("&at=" + (b.n().Xb - b.n().fb) || ""), c += "&to=" + b.qc() || "", c += "&ir=" + (f.qb ? 1 : 0) || "", b = OBR.a.C(c, !1), OBR.a.H(b))
        };
        c.ib = function (b) {
            if (0 === b.n().fb) {
                var d = c.Be(b);
                c.ob(d, b);
                a.c.log("CDN call: cdnCall")
            }
        };
        c.Be = function (b) {
            var c;
            c = a.b.$d;
            b = b.ka() + "_" + b.A() + "_" + b.i;
            return c + b
        };
        d.Ye = function (b) {
            b = c.vc(b);
            var a;
            b && (a = b.n(), clearTimeout(a.ra), a.Ja = !0, a.reason = 2, c.ib(b))
        };
        c.ob = function (b, c) {
            var f = a.a.C(b, !1);
            c.n().fb = (new Date).getTime();
            a.a.H(f);
            a.c.log("fire this src " + b)
        };
        d.w = function () {
            e.O()
        };
        d.u = function () {
            return c
        };
        return d
    }();
    OBR.extern = OBR.extern || function () {
        var d = OBR;
        return {
            getStat: function () {
                d.q.gd()
            },
            showDescription: function (a, c) {
                d.d.v(OBR.d.f.Ya, function () {
                    OBR.Uc.Af(a, c)
                }, this)
            },
            returnedHtmlData: function (a, c) {
                d.g.Bb(a, c)
            },
            returnedIrdData: function (a, c) {
                d.ia.Wb(a, c)
            },
            returnedJsonData: function (a, c) {
                d.g.Nc(a, c)
            },
            returnedError: function (a) {
                OBR.c.log("Call made using extern class");
                d.c.log("Callback error" + a)
            },
            callRecs: function (a, c) {
                OBR.c.log("Call made using extern class");
                d.g.Kc(a, c)
            },
            callClick: function (a, c) {
                OBR.c.log("Call made using extern class");
                d.g.ub(a, c)
            },
            callWhatIs: function (a, c, d, b, g, f) {
                OBR.d.v(OBR.d.f.va, function () {
                    OBR.Kb.Vb(a, c, d, b, g, f)
                }, this);
                return !1
            },
            recClicked: function (a, c) {
                OBR.c.log("Call made using extern class");
                d.g.Wc(a, c)
            },
            imageError: function (a) {
                OBR.c.log("Call made using extern class");
                d.a.$b(a)
            },
            showRecInIframe: function (a, c, e, b, g) {
                d.d.v(d.d.f.Za, function () {
                    d.Xc.Rg(a, c, e, b, g)
                }, this)
            },
            errorInjectionHandler: function (a) {
                OBR.j[a].xe(a)
            },
            reloadWidget: function () {
                OBR.c.log("reload widget");
                d.g.kg()
            },
            researchWidget: function () {
                OBR.c.log("research widget");
                d.g.qg()
            },
            cancelRecommendation: function (a) {
                OBR.c.log("cancel recommendation with bocr " + a);
                d.g.Xd(a)
            },
            cancelRecs: function (a, c, e) {
                OBR.c.log("cancel recommendation by doc url " + a + " publisher id = " + c + " isAd = " + e);
                d.g.Yd(a, c, e)
            },
            refreshWidget: function (a) {
                OBR.c.log("refresh widget");
                d.g.Yc(a)
            },
            getCountOfRecs: function (a) {
                return d.g.De(a)
            },
            onOdbReturn: function (a, c) {
                d.g.$c(a, c)
            },
            closeCard: function () {
                d.Aa.ge()
            },
            closeModal: function () {
                try {
                    d.modal.hideModal()
                } catch (a) {}
            },
            scrollLoad: function () {
                try {
                    OBR.d.I(OBR.d.f.bb)
                } catch (a) {}
            }
        }
    }();
    window.outbrain = window.outbrain || {};
    window.outbrain.returnedHtmlData = function (d, a) {
        OBR.g.Bb(d, a)
    };
    window.outbrain.returnedIrdJsonData = function (d, a) {
        OBR.ia.Wb(d, a)
    };
    window.outbrain.returnedJsonData = function (d, a) {
        OBR.g.Nc(d, a)
    };
    window.outbrain.returnedError = function (d) {
        OBR.c.log("Callback error" + d)
    };
    window.outbrain.callRecs = function (d, a) {
        OBR.g.Kc(d, a)
    };
    window.outbrain.callClick = function (d, a) {
        OBR.g.ub(d, a)
    };
    window.outbrain.callWhatIs = function (d, a, c, e, b, g) {
        OBR.d.v(OBR.d.f.va, function () {
            OBR.Kb.Vb(d, a, c, e, b, g)
        }, this)
    };
    window.outbrain.recClicked = function (d, a) {
        OBR.g.Wc(d, a)
    };
    window.outbrain.imageError = function (d) {
        OBR.a.$b(d)
    };
    window.outbrain.closeModal = function () {
        try {
            OBR.modal.hideModal()
        } catch (d) {}
    };
    window.outbrain_rater = window.outbrain_rater || {};
    window.outbrain_rater.returnedHtmlData = function (d, a) {
        OBR.g.Bb(d, a)
    };
    window.outbrain_rater.returnedCancelOdbData = function (d) {
        OBR.g.rg(d)
    };
    !0 === OBR.b.Ac && (OBR.c.log("Widget Start!"), OBR.b.Ac = !1, "boolean" === typeof window.OB_PASSIVE_MODE && !0 === window.OB_PASSIVE_MODE ? OBR.c.log("passive") : OBR.g.fd());
})(window.OBR);

};
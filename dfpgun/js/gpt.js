(function () {
    var e, g = this,
        aa = function (a) {
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
                else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }, k = function (a) {
            return "array" == aa(a)
        }, ba = function (a) {
            var b = aa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }, l = function (a) {
            return "string" == typeof a
        }, ca = function (a) {
            return "boolean" == typeof a
        }, n = function (a) {
            return "number" == typeof a
        }, da = function (a) {
            return "function" == aa(a)
        }, ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0,
        ga = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        }, ha = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        }, ia = function (a, b, c) {
            ia = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
            return ia.apply(null, arguments)
        }, ja = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.pc = b.prototype;
            a.prototype = new c
        };
    var p = function (a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    }, ka = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,
        la = function (a, b) {
            if (!a) return b;
            var c = a.match(ka);
            return c ? c[0] : b
        };
    var ma = p("0.02"),
        na = p("1");
    var oa = p("0.005"),
        pa = p("0.01"),
        qa = p("0.001"),
        ra = parseInt("1500", 10),
        sa = isNaN(ra) ? 1500 : ra,
        ta = p("0.01"),
        ua = p("1.0"),
        va = p("0.1"),
        wa = p("0.0");
    var xa = /^true$/.test("false") ? !0 : !1;
    var ya = function () {
        return la("", "pagead2.googlesyndication.com")
    };
    var za = function (a) {
        return /^[\s\xa0]*$/.test(a)
    };
    var Aa = function (a, b) {
        this.width = a;
        this.height = b
    };
    Aa.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Aa.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ba = "http://" + ya() + "/pagead/show_ads.js";
    var q = function () {
        return g.googletag || (g.googletag = {})
    }, r = function (a, b, c) {
            var d = q();
            a in d && !c || (d[a] = b)
        }, Ca = function (a, b) {
            a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
        };
    var s = {};
    s[1] = ya();
    s[2] = la("", "pubads.g.doubleclick.net");
    s[3] = la("", "securepubads.g.doubleclick.net");
    s[4] = la("", "partner.googleadservices.com");
    s[5] = Ba;
    s[6] = xa;
    s[7] = ma;
    s[8] = na;
    s[10] = pa;
    s[11] = qa;
    s[12] = oa;
    s[13] = sa;
    s[16] = ta;
    s[17] = ua;
    s[18] = va;
    s[19] = wa;
    r("_vars_", s);
    var t = function (a, b) {
        this.sb = a;
        this.pb = b || []
    };
    t.prototype.Ub = function () {
        return this.sb
    };
    t.prototype.Tb = function () {
        return this.pb
    };
    t.prototype.getMessageId = t.prototype.Ub;
    t.prototype.getMessageArgs = t.prototype.Tb;
    var v = function (a, b, c, d, f) {
        this.oa = new Date;
        this.k = d || null;
        this.na = c || null;
        this.Wa = a;
        this.Xa = b;
        this.ma = f || null
    };
    e = v.prototype;
    e.gb = function () {
        return this.k
    };
    e.fb = function () {
        return this.na
    };
    e.eb = function () {
        return this.Wa
    };
    e.ab = function () {
        return this.oa
    };
    e.Sb = function () {
        return this.Xa
    };
    e.Wb = function () {
        return this.ma
    };
    var Da = ["Debug", "Info", "Warning", "Error", "Fatal"];
    v.prototype.toString = function () {
        var a = this.oa.toTimeString() + ": " + Da[this.Wa] + ": " + this.Xa;
        this.ma && (a += " Duration: " + (this.oa.getTime() - this.ma.ab().getTime()) + "ms.");
        return a
    };
    v.prototype.getTimestamp = v.prototype.ab;
    v.prototype.getService = v.prototype.fb;
    v.prototype.getSlot = v.prototype.gb;
    v.prototype.getLevel = v.prototype.eb;
    v.prototype.getMessage = v.prototype.Sb;
    v.prototype.getReference = v.prototype.Wb;
    var w = function () {
        this.H = []
    };
    w.prototype.Gb = function () {
        return this.H
    };
    w.prototype.Pb = function (a) {
        return Ea(this, function (b) {
            return b.fb() === a
        })
    };
    w.prototype.Qb = function (a) {
        return Ea(this, function (b) {
            return b.gb() === a
        })
    };
    w.prototype.Ob = function (a) {
        return Ea(this, function (b) {
            return b.eb() >= a
        })
    };
    var Ea = function (a, b) {
        for (var c = [], d = 0; d < a.H.length; ++d) b(a.H[d]) && c.push(a.H[d]);
        return c
    };
    w.prototype.log = function (a, b, c, d, f) {
        a = new v(a, b, c, d, f);
        this.H.push(a);
        return a
    };
    w.prototype.info = function (a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    var x = function (a, b, c, d) {
        a.log(2, b, c, d, void 0)
    };
    w.prototype.error = function (a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    var z = function () {
        var a = q();
        return a.debug_log || (a.debug_log = new w)
    };
    r("getEventLog", z);
    w.prototype.getAllEvents = w.prototype.Gb;
    w.prototype.getEventsByService = w.prototype.Pb;
    w.prototype.getEventsBySlot = w.prototype.Qb;
    w.prototype.getEventsByLevel = w.prototype.Ob;
    var A = function (a) {
        return function () {
            return new t(a, [])
        }
    }, B = function (a) {
            return function (b) {
                return new t(a, [b])
            }
        }, E = function (a) {
            return function (b, c) {
                return new t(a, [b, c])
            }
        }, F = function (a) {
            return function (b, c, d) {
                return new t(a, [b, c, d])
            }
        }, Fa = A(1),
        Ga = B(2),
        Ha = B(3),
        Ia = B(4),
        Ja = B(5),
        Ka = B(6),
        La = A(8),
        Ma = F(9),
        Na = F(10),
        Oa = F(11),
        Pa = E(12),
        Qa = B(13),
        Ra = B(14),
        Sa = A(15),
        Ta = A(16),
        Ua = F(17),
        Va = F(18),
        Wa = A(19),
        Xa = B(20),
        Ya = B(21),
        Za = E(22),
        $a = E(23),
        ab = B(26),
        bb = B(27),
        cb = B(28),
        db = F(29),
        eb = B(30),
        fb = E(31),
        gb = B(32),
        hb = B(33),
        ib = A(34),
        jb = B(35),
        kb = F(36),
        lb = F(37),
        mb = A(38),
        nb = B(39),
        ob = E(40),
        pb = A(41),
        qb = A(42),
        rb = E(43),
        sb = A(44),
        tb = A(45),
        ub = B(46),
        vb = B(47),
        wb = B(48),
        xb = A(49),
        yb = A(50),
        zb = B(51),
        Ab = A(52),
        Bb = E(53),
        Cb = E(54),
        Db = B(55),
        Eb = B(56),
        Fb = E(57),
        Gb = F(58),
        Hb = B(59),
        Ib = B(60),
        Jb = E(61),
        Kb = E(62),
        Lb = B(63),
        Mb = E(64),
        Nb = B(65),
        Ob = A(66),
        Pb = A(67),
        Qb = A(68),
        Rb = A(69),
        Sb = A(70),
        Tb = A(71),
        Ub = A(72),
        Vb = B(73),
        Wb = B(74),
        H = B(75),
        Xb = B(76),
        Yb = F(77),
        Zb = B(78),
        $b = A(79),
        ac = B(80),
        bc = A(81),
        cc = E(82),
        dc = E(83),
        ec = E(84),
        fc = B(85),
        gc = A(86),
        hc = A(87),
        ic = F(88),
        jc = F(89),
        kc = B(90);
    var lc = function () {
        this.bb = this.ua = 0
    };
    lc.prototype.push = function (a) {
        for (var b = z(), c = 0; c < arguments.length; ++c) try {
            da(arguments[c]) && (arguments[c](), this.ua++)
        } catch (d) {
            this.bb++, b.error(eb(String(d.message)))
        }
        b.info(fb(String(this.ua), String(this.bb)));
        return this.ua
    };
    lc.prototype.push = lc.prototype.push;
    (function () {
        function a(a) {
            this.t = {};
            this.tick = function (a, b, c) {
                this.t[a] = [void 0 != c ? c : (new Date).getTime(), b];
                window.console && window.console.timeStamp && void 0 == c && window.console.timeStamp("CSI/" + a)
            };
            this.tick("start", null, a)
        }
        var b;
        window.performance && (b = window.performance.timing);
        var c = b ? new a(b.responseStart) : new a;
        window.GPT_jstiming = {
            Timer: a,
            load: c
        };
        if (b) {
            var d = b.navigationStart,
                f = b.responseStart;
            0 < d && f >= d && (window.GPT_jstiming.srt = f - d)
        }
        if (b) {
            var h = window.GPT_jstiming.load;
            0 < d && f >= d && (h.tick("_wtsrt",
                void 0, d), h.tick("wtsrt_", "_wtsrt", f), h.tick("tbsd_", "wtsrt_"))
        }
        try {
            b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT), h && 0 < d && (h.tick("_tbnd", void 0, window.chrome.csi().startE), h.tick("tbnd_", "_tbnd", d))), null == b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT, h && 0 < d && (h.tick("_tbnd", void 0, window.external.startE), h.tick("tbnd_", "_tbnd", d))), b && (window.GPT_jstiming.pt = b)
        } catch (m) {}
    })();
    if (window.GPT_jstiming) {
        window.GPT_jstiming.cb = {};
        window.GPT_jstiming.ob = 1;
        var mc = function (a, b, c) {
            var d = a.t[b],
                f = a.t.start;
            if (d && (f || c)) return d = a.t[b][0], void 0 != c ? f = c : f = f[0], d - f
        }, nc = function (a, b, c) {
                var d = "";
                window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt, delete window.GPT_jstiming.srt);
                window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt, delete window.GPT_jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ?
                        d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (f) {}
                var h = window.chrome;
                if (h && (h = h.loadTimes)) {
                    h().wasFetchedViaSpdy && (d += "&p=s");
                    if (h().wasNpnNegotiated) {
                        var d = d + "&npn=1",
                            m = h().npnNegotiatedProtocol;
                        m && (d += "&npnv=" + (encodeURIComponent || escape)(m))
                    }
                    h().wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var u = a.t,
                    C = u.start,
                    h = [],
                    m = [],
                    y;
                for (y in u)
                    if ("start" != y && 0 != y.indexOf("_")) {
                        var D = u[y][1];
                        D ? u[D] && m.push(y + "." + mc(a, y, u[D][0])) : C && h.push(y +
                            "." + mc(a, y))
                    }
                delete u.start;
                if (b)
                    for (var G in b) d += "&" + G + "=" + b[G];
                (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, m.length ? "&it=" + m.join(",") : "", d, "&rt=", h.join(",")].join("")
            }, oc = function (a, b, c) {
                a = nc(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.GPT_jstiming.ob++;
                window.GPT_jstiming.cb[d] = b;
                b.onload = b.onerror = function () {
                    window.GPT_jstiming && delete window.GPT_jstiming.cb[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.GPT_jstiming.report = function (a, b, c) {
            if ("prerender" == document.webkitVisibilityState) {
                var d = !1,
                    f = function () {
                        if (!d) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            var h;
                            "prerender" == document.webkitVisibilityState ? h = !1 : (oc(a, b, c), h = !0);
                            h && (d = !0, document.removeEventListener("webkitvisibilitychange", f, !1))
                        }
                    };
                document.addEventListener("webkitvisibilitychange", f, !1);
                return ""
            }
            return oc(a, b, c)
        }
    };
    var I = Array.prototype,
        pc = I.indexOf ? function (a, b, c) {
            return I.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, qc = I.forEach ? function (a, b, c) {
            I.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, f = l(a) ? a.split("") : a, h = 0; h < d; h++) h in f && b.call(c, f[h], h, a)
        }, rc = I.map ? function (a, b, c) {
            return I.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, f = Array(d), h = l(a) ? a.split("") :
                    a, m = 0; m < d; m++) m in h && (f[m] = b.call(c, h[m], m, a));
            return f
        }, sc = I.every ? function (a, b, c) {
            return I.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, f = l(a) ? a.split("") : a, h = 0; h < d; h++)
                if (h in f && !b.call(c, f[h], h, a)) return !1;
            return !0
        }, tc = function (a, b) {
            var c;
            t: {
                c = a.length;
                for (var d = l(a) ? a.split("") : a, f = 0; f < c; f++)
                    if (f in d && b.call(void 0, d[f], f, a)) {
                        c = f;
                        break t
                    }
                c = -1
            }
            return 0 > c ? null : l(a) ? a.charAt(c) : a[c]
        }, uc = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }, wc =
            function (a, b) {
                I.sort.call(a, b || vc)
        }, yc = function (a) {
            for (var b = xc, c = 0; c < a.length; c++) a[c] = {
                index: c,
                value: a[c]
            };
            var d = b || vc;
            wc(a, function (a, b) {
                return d(a.value, b.value) || a.index - b.index
            });
            for (c = 0; c < a.length; c++) a[c] = a[c].value
        }, vc = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var J, zc, Ac, Bc, Cc = function () {
            return g.navigator ? g.navigator.userAgent : null
        };
    Bc = Ac = zc = J = !1;
    var K;
    if (K = Cc()) {
        var Dc = g.navigator;
        J = 0 == K.lastIndexOf("Opera", 0);
        zc = !J && (-1 != K.indexOf("MSIE") || -1 != K.indexOf("Trident"));
        Ac = !J && -1 != K.indexOf("WebKit");
        Bc = !J && !Ac && !zc && "Gecko" == Dc.product
    }
    var Ec = J,
        L = zc,
        Fc = Bc,
        Gc = Ac,
        Hc = function () {
            var a = g.document;
            return a ? a.documentMode : void 0
        }, Ic;
    t: {
        var Jc = "",
            M;
        if (Ec && g.opera) var Kc = g.opera.version,
        Jc = "function" == typeof Kc ? Kc() : Kc;
        else if (Fc ? M = /rv\:([^\);]+)(\)|;)/ : L ? M = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Gc && (M = /WebKit\/(\S+)/), M) var Lc = M.exec(Cc()),
        Jc = Lc ? Lc[1] : "";
        if (L) {
            var Mc = Hc();
            if (Mc > parseFloat(Jc)) {
                Ic = String(Mc);
                break t
            }
        }
        Ic = Jc
    }
    var Nc = Ic,
        Oc = {}, Pc = function (a) {
            if (!Oc[a]) {
                for (var b = 0, c = String(Nc).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), h = 0; 0 == b && h < f; h++) {
                    var m = c[h] || "",
                        u = d[h] || "",
                        C = RegExp("(\\d*)(\\D*)", "g"),
                        y = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var D = C.exec(m) || ["", "", ""],
                            G = y.exec(u) || ["", "", ""];
                        if (0 == D[0].length && 0 == G[0].length) break;
                        b = ((0 == D[1].length ? 0 : parseInt(D[1], 10)) < (0 == G[1].length ? 0 : parseInt(G[1], 10)) ? -1 : (0 == D[1].length ? 0 :
                            parseInt(D[1], 10)) > (0 == G[1].length ? 0 : parseInt(G[1], 10)) ? 1 : 0) || ((0 == D[2].length) < (0 == G[2].length) ? -1 : (0 == D[2].length) > (0 == G[2].length) ? 1 : 0) || (D[2] < G[2] ? -1 : D[2] > G[2] ? 1 : 0)
                    } while (0 == b)
                }
                Oc[a] = 0 <= b
            }
        }, Qc = g.document,
        Rc = Qc && L ? Hc() || ("CSS1Compat" == Qc.compatMode ? parseInt(Nc, 10) : 5) : void 0;
    if (Fc || L) {
        var Sc;
        if (Sc = L) Sc = L && 9 <= Rc;
        Sc || Fc && Pc("1.9.1")
    }
    L && Pc("9");
    var Tc = function (a) {
        return n(a) && isFinite(a) && 0 == a % 1 && 0 <= a
    }, Uc = function (a) {
            return a.replace(/[^a-zA-Z0-9]/g, function (a) {
                return "&#" + a.charCodeAt() + ";"
            })
        }, Vc = function () {
            var a = null,
                b = window,
                c = null;
            try {
                for (; null != b && b !== a;) {
                    c = b.location.protocol;
                    if ("https:" === c) break;
                    else if ("http:" === c || "file:" === c) return "http:";
                    a = b;
                    b = b.parent
                }
            } catch (d) {}
            return "https:"
        };
    var Wc = function (a) {
        return k(a) && 2 == a.length && Tc(a[0]) && Tc(a[1])
    }, Xc = function (a) {
            if (!k(a)) return !1;
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (!k(c) || 2 != c.length) return !1;
                for (var d = 0; d < c.length; ++d)
                    if (!n(c[d])) return !1
            }
            return !0
        }, Yc = function (a) {
            return k(a) && 1 < a.length && n(a[0]) && n(a[1])
        };
    var N = function (a, b) {
        this.ub = a;
        this.qb = b
    };
    N.prototype.ac = function () {
        return this.ub
    };
    N.prototype.Rb = function () {
        return this.qb
    };
    var Zc = function (a) {
        var b = [];
        if (k(a))
            if (Yc(a)) b.push(new N(a[0], a[1]));
            else
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    Yc(d) && b.push(new N(d[0], d[1]))
                }
            return b
    };
    N.prototype.getWidth = N.prototype.ac;
    N.prototype.getHeight = N.prototype.Rb;
    var O = function (a, b, c) {
        this.A = a;
        this.Ya = n(b) ? b : 0;
        this.g = this.A + "_" + this.Ya;
        this.mb = c || "gpt_unit_" + this.g
    };
    e = O.prototype;
    e.q = function () {
        return this.g
    };
    e.getName = function () {
        return this.A
    };
    e.$a = function () {
        return this.Ya
    };
    e.toString = O.prototype.q;
    e.m = function () {
        return this.mb
    };
    O.prototype.getId = O.prototype.q;
    O.prototype.getName = O.prototype.getName;
    O.prototype.getDomId = O.prototype.m;
    O.prototype.getInstance = O.prototype.$a;
    var $c = function (a, b) {
        this.rb = a;
        this.nb = b
    };
    $c.prototype.getKey = function () {
        return this.rb
    };
    var ad = function (a) {
        this.tb = a
    }, bd = function (a, b) {
            var c = tc(a.tb, function (a) {
                a = a.getKey();
                return a.width <= b.width && a.height <= b.height
            });
            return null == c ? null : c.nb
        }, cd = function (a) {
            if (!k(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
            var b;
            b = a[0];
            if (!Wc(b)) throw Error("Size has to be an array of two non-negative integers");
            b = new Aa(b[0], b[1]);
            a = Zc(a[1]);
            if (0 == a.length) throw Error("At least one slot size must be present");
            return new $c(b, a)
        };
    var P = function (a, b, c, d) {
        this.A = a;
        this.jb = Zc(c);
        this.aa = null;
        this.g = new O(a, b, d);
        this.c = [];
        this.h = {};
        this.o = null;
        this.b = z();
        this.b.info(Ga(this.g.toString()), null, this);
        this.w = this.M = null;
        this.La = this.Ja = "";
        this.T = !0;
        this.d = {};
        this.Z = [];
        this.Ma = !1;
        this.Ia = this.Ha = null;
        this.Ka = 0;
        this.n = -1
    };
    e = P.prototype;
    e.set = function (a, b) {
        var c = this.getName();
        (a = a || "") && l(a) && b ? (this.h[a] = b, this.M || this.w ? x(this.b, Na(a, String(b), c), null, this) : this.b.info(Ma(a, String(b), c), null, this)) : x(this.b, Oa(String(a), String(b), c), null, this);
        return this
    };
    e.get = function (a) {
        return a in this.h ? this.h[a] : null
    };
    e.C = function () {
        var a = [],
            b;
        for (b in this.h) da(this.h[b]) || a.push(b);
        return a
    };
    e.ja = function (a) {
        for (var b = 0; b < this.c.length; ++b)
            if (a == this.c[b]) return x(this.b, Pa(a.getName(), this.g.toString()), a, this), this;
        this.c.push(a);
        a.fa(this);
        return this
    };
    e.getName = function () {
        return this.A
    };
    e.i = function () {
        return this.g
    };
    e.Xb = function () {
        return this.c
    };
    e.Yb = function (a) {
        return a && this.aa ? bd(this.aa, a) : this.jb
    };
    e.zb = function (a) {
        try {
            if (!k(a)) throw Error("Size mapping has to be an array");
            var b = rc(a, cd);
            this.aa = new ad(b)
        } catch (c) {
            x(this.b, Qa(c.message), null, this)
        }
        return this
    };
    e.B = function () {
        return !!document.getElementById(this.g.m())
    };
    e.R = function (a) {
        this.o = a
    };
    e.G = function (a) {
        this.La = a;
        return this
    };
    e.Jb = function () {
        return this.La
    };
    e.xa = function (a) {
        if (l(a) && !za(null == a ? "" : String(a))) {
            var b = this.Z;
            0 <= pc(b, a) || b.push(a);
            this.b.info(Ra(a), null, this)
        } else x(this.b, Sa(), null, this);
        return this
    };
    e.va = function () {
        this.b.info(Ta(), null, this);
        this.Z = [];
        return this
    };
    e.Ib = function () {
        return uc(this.Z)
    };
    e.s = function (a, b) {
        var c = [];
        k(b) ? c = b : b && c.push(b.toString());
        if (a && l(a)) {
            this.b.info(Ua(a, c.join(), this.getName()), null, this);
            var d;
            t: {
                d = this.d[a];
                var f = c;
                if (ba(d) && ba(f) && d.length == f.length) {
                    for (var h = d.length, m = 0; m < h; m++)
                        if (d[m] !== f[m]) {
                            d = !1;
                            break t
                        }
                    d = !0
                } else d = !1
            }
            this.d[a] = c;
            if (!d && (this.M || this.w))
                for (d = 0; d < this.c.length; ++d) f = this.c[d], f.isEnabled() && f.Na(this, a, c)
        } else x(this.b, Va(String(a), c.join(), this.getName()), null, this);
        return this
    };
    e.wa = function () {
        this.b.info(Wa(), null, this);
        var a;
        t: {
            a = this.d;
            for (var b in a) {
                a = !1;
                break t
            }
            a = !0
        }
        this.d = {};
        if (!a)
            for (a = 0; a < this.c.length; ++a) b = this.c[a], b.isEnabled() && b.clearSlotTargeting(this);
        return this
    };
    e.Zb = function () {
        var a = this.d,
            b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    };
    e.Vb = function () {
        return this.Ma
    };
    e.qa = function (a) {
        Tc(a) && (this.Ka = a)
    };
    e.Hb = function () {
        return this.Ka
    };
    e.setTagForChildDirectedTreatment = function (a) {
        if (0 === a || 1 === a) this.n = a
    };
    e.bc = function () {
        return this.n
    };
    e.jc = function (a, b) {
        this.Ia = (this.Ha = a) && Boolean(b);
        b && !a && x(this.b, Xa(this.g.toString()), null, this);
        return this
    };
    e.Kb = function () {
        return this.Ha
    };
    e.Nb = function () {
        return this.Ia
    };
    var dd = function (a) {
        if (!a.B()) return a.b.error(Ya(a.g.toString()), null, a), !1;
        var b = g.document,
            c = a.g.m(),
            b = b && b.getElementById(c);
        if (!b) return a.b.error(Za(c, a.g.toString()), null, a), !1;
        c = a.o;
        return l(c) && 0 < c.length ? (a.Ra(), b.innerHTML = c, a.Qa(), !0) : !1
    };
    e = P.prototype;
    e.Eb = function (a) {
        this.M = this.b.info(Ha(this.getName()), null, this);
        this.Ja = a
    };
    e.Lb = function () {
        return this.Ja
    };
    e.Db = function () {
        this.b.info(Ia(this.getName()), null, this, this.M)
    };
    e.Ra = function () {
        this.w = this.b.info(Ja(this.getName()), null, this)
    };
    e.Qa = function () {
        this.b.info(Ka(this.getName()), null, this, this.w)
    };
    P.prototype.set = P.prototype.set;
    P.prototype.get = P.prototype.get;
    P.prototype.getName = P.prototype.getName;
    P.prototype.getSlotId = P.prototype.i;
    P.prototype.getSizes = P.prototype.Yb;
    P.prototype.defineSizeMapping = P.prototype.zb;
    P.prototype.addService = P.prototype.ja;
    P.prototype.getOutOfPage = P.prototype.Vb;
    P.prototype.getServices = P.prototype.Xb;
    P.prototype.getAttributeKeys = P.prototype.C;
    P.prototype.fetchStarted = P.prototype.Eb;
    P.prototype.fetchEnded = P.prototype.Db;
    P.prototype.renderStarted = P.prototype.Ra;
    P.prototype.renderEnded = P.prototype.Qa;
    P.prototype.hasWrapperDiv = P.prototype.B;
    P.prototype.getContentUrl = P.prototype.Lb;
    P.prototype.setClickUrl = P.prototype.G;
    P.prototype.getClickUrl = P.prototype.Jb;
    P.prototype.clearTargeting = P.prototype.wa;
    P.prototype.getTargetingMap = P.prototype.Zb;
    P.prototype.setTargeting = P.prototype.s;
    P.prototype.setCategoryExclusion = P.prototype.xa;
    P.prototype.clearCategoryExclusions = P.prototype.va;
    P.prototype.getCategoryExclusions = P.prototype.Ib;
    P.prototype.getCollapseEmptyDiv = P.prototype.Kb;
    P.prototype.setCollapseEmptyDiv = P.prototype.jc;
    P.prototype.getDivStartsCollapsed = P.prototype.Nb;
    P.prototype.getAudExtId = P.prototype.Hb;
    P.prototype.gtfcd = P.prototype.bc;
    var Q = function () {
        this.F = {};
        this.N = {};
        this.b = z()
    };
    Q.prototype.add = function (a, b, c) {
        if (!l(a) || 0 >= a.length || !b) return null;
        a in this.F || (this.F[a] = []);
        b = new P(a, this.F[a].length, b, c);
        c = b.i().m();
        if (this.N[c]) return this.b.error(cb(c)), null;
        this.F[a].push(b);
        return this.N[b.i().m()] = b
    };
    Q.prototype.find = function (a, b) {
        var c = b || 0,
            d = l(a) && this.F[a] || [];
        return 0 <= c && c < d.length && (d = d[c], d.i().$a() == c) ? d : null
    };
    var ed = function () {
        var a = q();
        return a.slot_manager_instance || (a.slot_manager_instance = new Q)
    }, fd = function (a, b, c) {
            var d = ed();
            return d && d.add(a, b, c)
        };
    r("defineOutOfPageSlot", function (a, b) {
        var c = ed();
        return c ? (c = c.add(a, [1, 1], b)) ? (c.Ma = !0, c) : null : null
    });
    r("defineSlot", fd);
    r("defineUnit", fd);
    Q.prototype.find = Q.prototype.find;
    Q.getInstance = ed;
    var gd = function (a) {
        var b = z();
        if (l(a)) {
            var c;
            c = ed();
            if (c = c.N[a] ? c.N[a] : null)
                if (c.T && !c.B()) x(c.b, $a(c.A, c.g.m()), null, c);
                else
                    for (a = 0; a < c.c.length; ++a) c.c[a].isEnabled() && c.c[a].I(c);
                else b.error(bb(String(a)))
        } else b.error(ab(String(a)))
    };
    r("display", gd, !0);
    var R = function () {
        this.Ua = [];
        this.Va = {};
        this.pa = !1;
        this.h = {};
        this.log = z();
        this.log.info(jb(this.getName()), this)
    };
    e = R.prototype;
    e.getName = function () {
        return "unknown"
    };
    e.getVersion = function () {
        return "unversioned"
    };
    e.set = function (a, b) {
        l(a) && 0 < a.length ? (this.h[a] = b, this.log.info(kb(a, String(b), this.getName()), this, null)) : x(this.log, lb(String(a), String(b), this.getName()), this, null);
        return this
    };
    e.get = function (a) {
        return this.h[a]
    };
    e.C = function () {
        var a = [],
            b;
        for (b in this.h) "function" != typeof this.h[b] && a.push(b);
        return a
    };
    e.j = function () {
        return this.Ua
    };
    e.hb = function () {
        return this.Va
    };
    e.isEnabled = function () {
        return this.pa
    };
    e.enable = function () {
        if (this.pa) this.log.info(mb(), this);
        else {
            this.pa = !0;
            try {
                this.ta()
            } catch (a) {
                this.log.error(nb(String(a)), this)
            }
        }
    };
    e.display = function (a, b, c, d) {
        this.enable();
        a = c ? fd(a, b, c) : fd(a, b);
        a.ja(this);
        d && a.G(d);
        gd(a.i().m())
    };
    e.fa = function (a) {
        this.Ua.push(a);
        this.Va[a.i().q()] = a;
        this.log.info(ob(this.getName(), a.getName()), this, a)
    };
    e.clearSlotTargeting = function () {};
    e.Na = function () {};
    R.prototype.getSlots = R.prototype.j;
    R.prototype.getSlotIdMap = R.prototype.hb;
    R.prototype.enable = R.prototype.enable;
    R.prototype.set = R.prototype.set;
    R.prototype.get = R.prototype.get;
    R.prototype.getAttributeKeys = R.prototype.C;
    R.prototype.display = R.prototype.display;
    var hd = function (a, b) {
        this.name = a;
        this.sa = b ? b : new g.GPT_jstiming.Timer;
        this.sa.name = a;
        this.ra = []
    };
    e = hd.prototype;
    e.getName = function () {
        return this.name
    };
    e.tick = function (a, b) {
        this.sa.tick(a, b)
    };
    e.Za = function (a) {
        a && this.ra.push(a)
    };
    e.report = function () {
        var a = "https:" == g.location.protocol ? "https://www.google.com/csi" : "http://csi.gstatic.com/csi",
            b = {};
        this.ra.length && (b.e = this.ra.join());
        return g.GPT_jstiming.report(this.sa, b, a)
    };
    e.ib = function (a) {
        Ca(window, function () {
            setTimeout(a, 10)
        })
    };
    var S = function (a) {
        this.name = a
    };
    ja(S, hd);
    S.prototype.tick = function () {};
    S.prototype.Za = function () {};
    S.prototype.report = function () {
        return null
    };
    S.prototype.ib = function () {};
    var id = function () {
        var a = g.GPT_jstiming.load,
            b = 0.01;
        void 0 == b && (b = 0.01);
        return g.GPT_jstiming && g.GPT_jstiming.load && ("http:" == g.location.protocol || "https:" == g.location.protocol) && Math.random() < b ? new hd("global", a) : new S("global")
    };
    (function () {
        if (!q()._gpt_timer_ && g.GPT_jstiming) {
            var a = id();
            a.ib(function () {
                a.tick("load");
                a.report()
            });
            r("_gpt_timer_", a)
        }
        return q()._gpt_timer_
    })();
    var T = function () {
        this.c = {};
        this.$ = !1;
        this.b = z();
        this.kb = this.b.info(La());
        Ca(window, ia(T.prototype.lb, this))
    };
    T.prototype.add = function (a) {
        this.c[a.getName()] = a
    };
    T.prototype.find = function (a) {
        var b = null;
        a in this.c && (b = this.c[a]);
        return b
    };
    T.prototype.lb = function () {
        this.$ = !0;
        this.b.info(Fa(), null, null, this.kb)
    };
    var U = function () {
        var a = q();
        return a.service_manager_instance || (a.service_manager_instance = new T)
    };
    r("enableServices", function () {
        var a = U(),
            b;
        for (b in a.c) {
            var c = a.c[b];
            if (!da(c)) {
                c.enable();
                var c = b,
                    d = q()._gpt_timer_;
                d && d.Za(c)
            }
        }
    });
    var V = function () {
        R.call(this);
        this.Oa = !0;
        this.ga = this.ia = !1;
        this.P = 0;
        this.Q = "";
        this.ea = this.da = this.ca = this.D = void 0;
        this.Pa = this.ha = !1;
        this.ba = {};
        this.O = !1
    };
    ja(V, R);
    e = V.prototype;
    e.ta = function () {
        if (this.Oa) {
            if (!this.Pa) {
                var a = document,
                    b = document.createElement("script");
                b.async = !0;
                b.type = "text/javascript";
                b.src = this.p();
                try {
                    var c = a.getElementsByTagName("script")[0];
                    this.log.info(ub("GPT CompanionAds"), this);
                    this.Pa = !0;
                    c.parentNode && c.parentNode.insertBefore(b, c)
                } catch (d) {
                    this.log.error(vb("GPT CompanionAds"), this)
                }
            }
        } else this.ha || (g.document.write('<script type="text/javascript" src="' + Uc(this.p()) + '">\x3c/script>'), this.ha = !0)
    };
    e.Ab = function () {
        this.Oa = !1
    };
    e.kc = function (a) {
        ca(a) && (this.ia = a)
    };
    e.ic = function (a) {
        ca(a) && (this.ga = a)
    };
    e.dc = function (a) {
        if (this.ia) jd(this, kd(this, a));
        else if (this.ga) {
            a = kd(this, a);
            var b = googletag.pubads();
            b.isEnabled() ? b.clear(a) : this.log.error(rb("PubAds", "clear"))
        }
    };
    e.Sa = function () {
        var a = googletag.pubads();
        if (!a.isEnabled()) return !1;
        var a = a.j(),
            b = this.j();
        if (a.length != b.length) return !1;
        for (var c = 0; c < b.length; ++c) {
            for (var d = !1, f = 0; f < a.length; ++f)
                if (b[c] === a[f]) {
                    d = !0;
                    break
                }
            if (!d) return !1
        }
        return !0
    };
    e.gc = function () {
        this.ia && jd(this, null)
    };
    e.mc = function (a, b, c, d, f, h, m) {
        this.O = !1;
        this.P = 0;
        this.Q = "";
        this.ea = this.da = this.ca = this.D = void 0;
        this.P = a;
        this.Q = b;
        this.D = c;
        0 == this.D.length && (this.D = void 0);
        t: {
            a = d.split(",");
            b = [];
            for (c = 0; c < a.length; ++c) {
                d = a[c].split("x");
                if (2 != d.length) {
                    this.log.error(pb());
                    a = void 0;
                    break t
                }
                d = [Number(d[0]), Number(d[1])];
                if (!k(d) || 2 != d.length || isNaN(d[0]) || isNaN(d[1])) {
                    this.log.error(pb());
                    a = void 0;
                    break t
                }
                b.push(d)
            }
            a = b
        }
        this.ca = a;
        void 0 !== f && (this.da = f);
        void 0 !== h && (this.ea = h);
        void 0 !== m && (this.O = m)
    };
    e.Mb = function () {
        return googletag.pubads().getCorrelator()
    };
    e.getVideoStreamCorrelator = function () {
        return googletag.pubads().getVideoStreamCorrelator()
    };
    e.nc = function (a) {
        this.P = a
    };
    e.oc = function (a) {
        this.Q = a
    };
    var jd = function (a, b) {
        var c = googletag.pubads();
        if (c.isEnabled()) {
            if (a.O) {
                if (!a.Sa()) {
                    x(a.log, qb());
                    return
                }
                c.clearNoRefreshState();
                c.clear()
            }
            c.Ta(b, a.P, a.Q, a.D, a.ca, a.da, a.ea, a.O, a.ga)
        } else a.log.error(rb("PubAds", "refresh"))
    };
    V.prototype.isSlotAPersistentRoadblock = function (a) {
        var b = googletag.pubads();
        if (b.isEnabled()) return b.isSlotAPersistentRoadblock(a);
        this.log.error(sb());
        return !1
    };
    var kd = function (a, b) {
        for (var c = a.hb(), d = [], f = 0; f < b.length; ++f) {
            var h = b[f];
            h in c ? d.push(c[h]) : x(a.log, tb(), a)
        }
        return d
    };
    e = V.prototype;
    e.getName = function () {
        return "companion_ads"
    };
    e.p = function () {
        return Vc() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    };
    e.fc = function () {
        this.log.info(wb("GPT CompanionAds"), this);
        this.ha = !0
    };
    e.r = function (a) {
        var b = a && a.i().q();
        return b && b in this.ba && a.B() && this.isEnabled() && !this.isSlotAPersistentRoadblock(a) ? (a.R(this.ba[b]), dd(a)) : !1
    };
    e.I = function (a) {
        this.r(a)
    };
    e.fillSlot = function (a, b) {
        return a && l(b) && 0 < b.length ? (this.ba[a.i().toString()] = b, this.r(a)) : !1
    };
    r("companionAds", function () {
        var a = U(),
            b = a.find("companion_ads");
        b || (b = new V, a.add(b));
        return b
    });
    V.prototype.fillSlot = V.prototype.fillSlot;
    V.prototype.enableSyncLoading = V.prototype.Ab;
    V.prototype.isSlotAPersistentRoadblock = V.prototype.isSlotAPersistentRoadblock;
    V.prototype.isRoadblockingSupported = V.prototype.Sa;
    V.prototype.onImplementationLoaded = V.prototype.fc;
    V.prototype.notifyUnfilledSlots = V.prototype.dc;
    V.prototype.refreshAllSlots = V.prototype.gc;
    V.prototype.setRefreshUnfilledSlots = V.prototype.kc;
    V.prototype.setClearUnfilledSlots = V.prototype.ic;
    V.prototype.setXfpCorrelator = V.prototype.nc;
    V.prototype.setXfpPreviousAdsToken = V.prototype.oc;
    V.prototype.setVideoSessionInfo = V.prototype.mc;
    V.prototype.getDisplayAdsCorrelator = V.prototype.Mb;
    V.prototype.getVideoStreamCorrelator = V.prototype.getVideoStreamCorrelator;
    var W = function () {
        R.call(this);
        this.o = {}
    };
    ja(W, R);
    e = W.prototype;
    e.getName = function () {
        return "content"
    };
    e.r = function (a) {
        var b = a && a.i().q();
        return b in this.o && this.isEnabled() && a.B() && !a.w ? (a.R(this.o[b]), dd(a)) : !1
    };
    e.ta = function () {
        for (var a = this.j(), b = 0; b < a.length; ++b) this.r(a[b])
    };
    e.I = function (a) {
        this.r(a)
    };
    e.R = function (a, b) {
        a && l(b) && 0 < b.length && (this.o[a.i().q()] = b, this.r(a))
    };
    r("content", function () {
        var a = U(),
            b = a.find("content");
        b || (b = new W, a.add(b));
        return b
    });
    W.prototype.setContent = W.prototype.R;
    var ld = null,
        md = Fc || Gc || Ec || "function" == typeof g.atob;
    var X = function (a, b, c) {
        !l(a) || 0 >= a.length || !Boolean(b) || !c ? z().error(db(String(a), String(b), String(c))) : (this.k = new P(a, this[ea] || (this[ea] = ++fa), b), this.k.ja(c), this.na = c)
    };
    e = X.prototype;
    e.G = function (a) {
        this.k.G(a);
        return this
    };
    e.s = function (a, b) {
        this.k.s(a, b);
        return this
    };
    e.qa = function (a) {
        this.k.qa(a);
        return this
    };
    e.setTagForChildDirectedTreatment = function (a) {
        this.k.setTagForChildDirectedTreatment(a);
        return this
    };
    e.display = function () {
        nd(this.na, this.k)
    };
    X.prototype.setClickUrl = X.prototype.G;
    X.prototype.setTargeting = X.prototype.s;
    X.prototype.setAudExtId = X.prototype.qa;
    X.prototype.setTagForChildDirectedTreatment = X.prototype.setTagForChildDirectedTreatment;
    X.prototype.display = X.prototype.display;
    var Y = function () {
        R.call(this);
        this.v = !1;
        this.a = null;
        this.ya = 0;
        this.n = -1;
        this.d = {};
        this.U = [];
        this.Ea = this.W = "";
        this.Da = !1;
        this.Aa = !0;
        this.u = this.za = !1;
        this.f = !0;
        this.S = this.J = this.Ba = !1;
        this.l = [];
        this.K = [];
        this.L = [];
        this.V = !1;
        this.X = {};
        this.Y = !1;
        this.Fa = this.Ga = "";
        this.Ca = []
    };
    ja(Y, R);
    var od = {
        adsense_ad_format: "google_ad_format",
        adsense_ad_types: "google_ad_type",
        adsense_allow_expandable_ads: "google_allow_expandable_ads",
        adsense_background_color: "google_color_bg",
        adsense_bid: "google_bid",
        adsense_border_color: "google_color_border",
        adsense_channel_ids: "google_ad_channel",
        adsense_content_section: "google_ad_section",
        adsense_cpm: "google_cpm",
        adsense_ed: "google_ed",
        adsense_encoding: "google_encoding",
        adsense_family_safe: "google_safe",
        adsense_feedback: "google_feedback",
        adsense_flash_version: "google_flash_version",
        adsense_font_face: "google_font_face",
        adsense_font_size: "google_font_size",
        adsense_hints: "google_hints",
        adsense_host: "google_ad_host",
        adsense_host_channel: "google_ad_host_channel",
        adsense_host_tier_id: "google_ad_host_tier_id",
        adsense_keyword_type: "google_kw_type",
        adsense_keywords: "google_kw",
        adsense_line_color: "google_line_color",
        adsense_link_color: "google_color_link",
        adsense_relevant_content: "google_contents",
        adsense_reuse_colors: "google_reuse_colors",
        adsense_targeting: "google_targeting",
        adsense_targeting_types: "google_targeting",
        adsense_test_mode: "google_adtest",
        adsense_text_color: "google_color_text",
        adsense_ui_features: "google_ui_features",
        adsense_ui_version: "google_ui_version",
        adsense_url_color: "google_color_url",
        alternate_ad_iframe_color: "google_alternate_color",
        alternate_ad_url: "google_alternate_ad_url",
        demographic_age: "google_cust_age",
        demographic_ch: "google_cust_ch",
        demographic_gender: "google_cust_gender",
        demographic_interests: "google_cust_interests",
        demographic_job: "google_cust_job",
        demographic_l: "google_cust_l",
        demographic_lh: "google_cust_lh",
        demographic_u_url: "google_cust_u_url",
        demographic_unique_id: "google_cust_id",
        document_language: "google_language",
        geography_override_city: "google_city",
        geography_override_country: "google_country",
        geography_override_region: "google_region",
        page_url: "google_page_url"
    };
    Y.prototype.ta = function () {
        if (this.f) {
            if (!this.v) {
                var a = document,
                    b = a.createElement("script");
                U();
                b.async = !0;
                b.type = "text/javascript";
                b.src = this.p();
                (a = a.getElementsByTagName("head")[0] || a.getElementsByTagName("body")[0]) ? (this.log.info(ub("GPT PubAds"), this), a.appendChild(b), this.v = !0) : this.log.error(vb("GPT PubAds"), this)
            }
        } else pd(this)
    };
    Y.prototype.getName = function () {
        return "publisher_ads"
    };
    Y.prototype.p = function () {
        return Vc() + "//partner.googleadservices.com/gpt/pubads_impl_31.js"
    };
    var pd = function (a) {
        var b = U();
        a.v || b.$ || (b = document, a.v = !0, b.write('<script type="text/javascript" src="' + Uc(a.p()) + '">\x3c/script>'))
    };
    Y.prototype.fillSlot = function (a) {
        this.log.info(yb());
        this.a.fillSlot(a);
        this.X[a.getName()] = !0;
        if (this.a)
            if (this.V)(a = this.j()[0]) && a.getName() in this.X && (this.refresh(), this.V = !1);
            else
                for (a = 0; a < this.L.length; a++) {
                    var b = this.L[a];
                    b[0].getName() in this.X && (this.refresh(b), I.splice.call(this.L, a, 1), a--)
                } else this.log.error(xb(), this)
    };
    Y.prototype.ec = function () {
        U();
        var a = q().impl;
        if (a && a.pubads) {
            this.a = a.pubads;
            this.log.info(wb("GPT"), this);
            this.a.setCookieOptions(this.ya);
            this.a.setTagForChildDirectedTreatment(this.n);
            this.Aa || this.a.disableFetch();
            this.J && this.a.collapseEmptyDivs(this.S);
            if (this.u) {
                this.f ? this.a.enableAsyncSingleRequest() : this.a.enableSingleRequest();
                qd(this);
                for (var a = this.j(), b = 0; b < a.length; ++b) rd(this, a[b])
            } else this.f && this.a.enableAsyncRendering();
            this.za && this.a.disableInitialLoad();
            sd(this);
            if (0 < this.l.length)
                for (b =
                    0; b < this.l.length; ++b) this.I(this.l[b]);
            if (0 < this.K.length)
                for (b = 0; b < this.K.length; ++b) nd(this, this.K[b])
        } else this.log.error(zb(this.p()), this)
    };
    Y.prototype.fa = function (a) {
        this.f || (a.T = !1);
        R.prototype.fa.call(this, a)
    };
    Y.prototype.I = function (a) {
        if (U().$ && !this.f) this.log.error(Ab(), this);
        else if (this.a) qd(this), rd(this, a) && this.fillSlot(a);
        else if (this.f || this.v && 0 == this.l.length) {
            for (var b = !1, c = 0; c < this.l.length; ++c) a === this.l[c] && (b = !0);
            b || (this.log.info(Bb(a.getName(), "GPT"), this, a), this.l.push(a))
        } else this.log.error(Db(a.getName()), this, a)
    };
    var rd = function (a, b) {
        if (a.a && null == a.a.addSlot(b)) return a.log.error(Eb(b.getName()), a, b), !1;
        for (var c = b.C(), d = 0; d < c.length; ++d) c[d] in od ? a.a.addAdSenseSlotAttribute(b, od[c[d]], b.get(c[d])) : x(a.log, Gb(String(c[d]), String(b.get(c[d])), b.getName()), a, b);
        var c = [],
            f;
        for (f in b.d) da(b.d[f]) || c.push(f);
        for (f = 0; f < c.length; ++f) a.a.addSlotTargeting(b, c[f], c[f] in b.d ? b.d[c[f]] : []);
        return !0
    }, qd = function (a) {
            if (!a.Da) {
                a.Da = !0;
                for (var b = a.C(), c = 0; c < b.length; ++c) b[c] in od ? a.a.addAdSensePageAttribute(od[b[c]], a.get(b[c])) :
                    x(a.log, Fb(String(b[c]), String(a.get(b[c]))), a);
                a.a.addAdSensePageAttribute("google_tag_info", "v2");
                for (var d in a.d)
                    if (b = a.d[d], k(b))
                        for (c = 0; c < b.length; ++c) a.a.addAttribute(d, b[c]);
                qc(a.U, function (a) {
                    this.a.addPageCategoryExclusion(a)
                }, a);
                a.a.setPublisherProvidedId(a.Ea);
                a.W && a.a.setLocation(a.W);
                a.a.setCenterAds(a.Ba);
                qc(a.Ca, function (a) {
                    this.a.setApiExperiment(a)
                }, a)
            }
        };
    e = Y.prototype;
    e.setCookieOptions = function (a) {
        if (!Tc(a)) return x(this.log, Hb(String(a)), this), this;
        this.ya = a;
        this.a && this.a.setCookieOptions(a);
        return this
    };
    e.setTagForChildDirectedTreatment = function (a) {
        if (0 !== a && 1 !== a) return x(this.log, kc(String(a)), this), this;
        this.n = a;
        this.a && this.a.setTagForChildDirectedTreatment(a);
        return this
    };
    e.xb = function () {
        this.n = -1;
        this.a && this.a.setTagForChildDirectedTreatment(-1);
        return this
    };
    e.s = function (a, b) {
        var c = null;
        l(b) ? c = [b] : k(b) ? c = b : ba(b) && (c = uc(b));
        var d = c ? c.join() : String(b);
        if (!l(a) || za(null == a ? "" : String(a)) || !c) return x(this.log, jc(String(a), d, this.getName()), this), this;
        this.d[a] = c;
        this.log.info(ic(a, d, this.getName()), this);
        if (this.a)
            for (this.a.clearAttribute(a), d = 0; d < c.length; ++d) this.a.addAttribute(a, c[d]);
        return this
    };
    e.wa = function (a) {
        if (!l(a) || za(null == a ? "" : String(a))) return x(this.log, dc(String(a), this.getName()), this), this;
        if (!this.d[a]) return x(this.log, ec(a, this.getName()), this), this;
        delete this.d[a];
        this.log.info(cc(a, this.getName()), this);
        this.a && this.a.clearAttribute(a);
        return this
    };
    e.xa = function (a) {
        if (!l(a) || za(null == a ? "" : String(a))) return x(this.log, gc(), this), this;
        var b = this.U;
        0 <= pc(b, a) || b.push(a);
        this.log.info(fc(a), this);
        this.a && this.a.addPageCategoryExclusion(a);
        return this
    };
    e.va = function () {
        this.U = [];
        this.log.info(hc(), this);
        this.a && this.a.clearPageCategoryExclusions();
        return this
    };
    e.cc = function () {
        this.a ? x(this.log, Jb("noFetch", "pubads"), this) : this.Aa = !1
    };
    e.disableInitialLoad = function () {
        this.a ? x(this.log, Jb("disableInitialLoad", "pubads"), this) : this.za = !0
    };
    e.enableSingleRequest = function () {
        this.isEnabled() && !this.u ? x(this.log, Ib("enableSingleRequest"), this) : (this.log.info(Lb("single request"), this), this.u = !0);
        return this.u
    };
    e.enableAsyncRendering = function () {
        this.isEnabled() && !this.f ? x(this.log, Ib("enableAsyncRendering"), this) : (this.log.info(Lb("asynchronous rendering"), this), this.f = !0);
        return this.f
    };
    e.Bb = function () {
        if (this.isEnabled() && this.f) x(this.log, Ib("enableSyncRendering"), this);
        else {
            this.log.info(Lb("synchronous rendering"), this);
            this.f = !1;
            for (var a = this.j(), b = 0; b < a.length; ++b) a[b].T = !1
        }
        return !this.f
    };
    e.hc = function (a) {
        this.log.info(Mb("centering", String(a)), this);
        this.Ba = a
    };
    e.setPublisherProvidedId = function (a) {
        this.isEnabled() ? x(this.log, Kb("setPublisherProvidedId", a), this) : (this.log.info(Mb("PPID", a), this), this.Ea = a);
        return this
    };
    e.yb = function (a, b) {
        return new X(a, b, this)
    };
    var nd = function (a, b) {
        pd(a);
        a.a ? a.a.passback(b) : (a.log.info(Cb(b.getName(), "GPT"), a, b), a.K.push(b))
    };
    e = Y.prototype;
    e.refresh = function (a) {
        if (a && !k(a)) x(this.log, Vb("Slots to refresh"), this);
        else {
            var b = null;
            if (a && (b = td(this, a), !b.length)) {
                this.log.error(Nb("Refresh"), this);
                return
            }
            this.a ? (this.log.info(Sb(), this), this.a.refresh(b)) : this.u ? (this.log.info(Rb(), this), b ? (a = this.L, 0 <= pc(a, b) || a.push(b)) : this.V = !0) : x(this.log, Ob(), this)
        }
    };
    e.Ta = function (a, b, c, d, f, h, m, u, C) {
        if (a && !k(a)) x(this.log, Vb("Slot list"), this);
        else if (b && !n(b)) x(this.log, H("Correlator"), this);
        else if (c && !l(c)) x(this.log, Xb("Pstok"), this);
        else if (d && !l(d)) x(this.log, Xb("Video IU"), this);
        else if (f && !k(f)) x(this.log, Vb("Video IU sizes"), this);
        else if (h && !n(h)) x(this.log, H("Pod number"), this);
        else if (m && !n(m)) x(this.log, H("Pod position"), this);
        else if (u && !ca(u)) x(this.log, Wb("Persistent roadblocks only"), this);
        else if (C && !ca(C)) x(this.log, Wb("Clear unfilled slots"),
            this);
        else if (this.a) {
            var y = null;
            if (a && (y = td(this, a), !y.length)) {
                this.log.error(Nb("refresh"), this);
                return
            }
            f && !Xc(f) ? this.log.error(bc(), this) : (this.log.info(Sb(), this), this.a.refresh(y, b, c, d, f, h, m, u, C))
        } else x(this.log, Ob(), this)
    };
    e.Cb = function () {
        this.Y = !0;
        sd(this)
    };
    e.lc = function (a, b) {
        this.Y = !0;
        this.Ga = a;
        this.Fa = b;
        sd(this)
    };
    e.$b = function () {
        return this.a ? this.a.getVideoContentInformation() : null
    };
    var sd = function (a) {
        a.Y && a.a && a.a.setVideoContentInformation(a.Ga, a.Fa)
    };
    e = Y.prototype;
    e.getCorrelator = function () {
        return 0 == this.j().length ? "not_available" : this.a ? this.a.getCorrelator() : "not_loaded"
    };
    e.getVideoStreamCorrelator = function () {
        if (!this.a) return 0;
        var a = this.a.getVideoStreamCorrelator();
        return isNaN(a) ? 0 : a
    };
    e.isAdRequestFinished = function () {
        return this.a ? this.a.isAdRequestFinished() : !1
    };
    e.isSlotAPersistentRoadblock = function (a) {
        return this.a ? this.a.isSlotAPersistentRoadblock(a) : !1
    };
    e.collapseEmptyDivs = function (a) {
        this.J ? x(this.log, $b(), this) : this.isEnabled() ? x(this.log, Ib("collapseEmptyDivs"), this) : (this.S = Boolean(a), this.log.info(Zb(String(this.S)), this), this.J = !0);
        return this.J
    };
    e.clear = function (a) {
        if (!this.a) return x(this.log, Qb(), this), !1;
        var b = null;
        if (a && (b = td(this, a), 0 == b.length)) return this.log.error(Nb("Clear"), this), !1;
        this.log.info(Tb(), this);
        return this.a.clearSlotContents(b)
    };
    e.clearNoRefreshState = function () {
        this.a ? (this.log.info(Ub(), this), this.a.clearNoRefreshState()) : x(this.log, Pb(), this)
    };
    e.clearSlotTargeting = function (a) {
        this.a && this.a.clearSlotTargeting(a)
    };
    e.Na = function (a, b, c) {
        this.a && this.a.addSlotTargeting(a, b, c)
    };
    e.setLocation = function (a, b, c) {
        var d = "role:1 producer:12";
        if (void 0 !== b) {
            if (!n(a)) return x(this.log, H("Latitude")), this;
            if (!n(b)) return x(this.log, H("Longitude")), this;
            d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
            if (void 0 !== c) {
                if (isNaN(c)) return x(this.log, H("Radius")), this;
                d += " radius:" + Math.round(c)
            }
        } else 50 < a.length && (b = a.substring(0, 50), x(this.log, Yb(String(a), "50", b)), a = b), d += ' loc:"' + a + '"'; if (md) d = g.btoa(d);
        else {
            a = d;
            d = [];
            for (c = b = 0; c < a.length; c++) {
                for (var f =
                    a.charCodeAt(c); 255 < f;) d[b++] = f & 255, f >>= 8;
                d[b++] = f
            }
            if (!ba(d)) throw Error("encodeByteArray takes an array as a parameter");
            if (!ld)
                for (ld = {}, a = 0; 65 > a; a++) ld[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
            a = ld;
            b = [];
            for (c = 0; c < d.length; c += 3) {
                var h = d[c],
                    m = (f = c + 1 < d.length) ? d[c + 1] : 0,
                    u = c + 2 < d.length,
                    C = u ? d[c + 2] : 0,
                    y = h >> 2,
                    h = (h & 3) << 4 | m >> 4,
                    m = (m & 15) << 2 | C >> 6,
                    C = C & 63;
                u || (C = 64, f || (m = 64));
                b.push(a[y], a[h], a[m], a[C])
            }
            d = b.join("")
        }
        this.W = "a " + d;
        return this
    };
    e.getVersion = function () {
        return this.a ? this.a.getVersion() : void 0
    };
    e.Fb = function (a) {
        this.isEnabled() ? x(this.log, Kb("forceExperiment", a), this) : this.Ca.push(a)
    };
    var td = function (a, b) {
        for (var c = [], d = 0; d < b.length; ++d) {
            var f = b[d];
            f instanceof P ? c.push(f) : x(a.log, ac(String(d)), a)
        }
        return c
    };
    r("pubads", function () {
        var a = U(),
            b = a.find("publisher_ads");
        b || (b = new Y, a.add(b));
        return b
    });
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.clearNoRefreshState = Y.prototype.clearNoRefreshState;
    Y.prototype.collapseEmptyDivs = Y.prototype.collapseEmptyDivs;
    Y.prototype.definePassback = Y.prototype.yb;
    Y.prototype.disableInitialLoad = Y.prototype.disableInitialLoad;
    Y.prototype.enableAsyncRendering = Y.prototype.enableAsyncRendering;
    Y.prototype.enableSingleRequest = Y.prototype.enableSingleRequest;
    Y.prototype.enableSyncRendering = Y.prototype.Bb;
    Y.prototype.enableVideoAds = Y.prototype.Cb;
    Y.prototype.forceExperiment = Y.prototype.Fb;
    Y.prototype.getCorrelator = Y.prototype.getCorrelator;
    Y.prototype.getVideoContent = Y.prototype.$b;
    Y.prototype.getVideoStreamCorrelator = Y.prototype.getVideoStreamCorrelator;
    Y.prototype.isAdRequestFinished = Y.prototype.isAdRequestFinished;
    Y.prototype.isSlotAPersistentRoadblock = Y.prototype.isSlotAPersistentRoadblock;
    Y.prototype.noFetch = Y.prototype.cc;
    Y.prototype.onGoogleAdsJsLoad = Y.prototype.ec;
    Y.prototype.refresh = Y.prototype.refresh;
    Y.prototype.setLocation = Y.prototype.setLocation;
    Y.prototype.setTargeting = Y.prototype.s;
    Y.prototype.clearTargeting = Y.prototype.wa;
    Y.prototype.setCategoryExclusion = Y.prototype.xa;
    Y.prototype.clearCategoryExclusions = Y.prototype.va;
    Y.prototype.setVideoContent = Y.prototype.lc;
    Y.prototype.getVersion = Y.prototype.getVersion;
    Y.prototype.videoRefresh = Y.prototype.Ta;
    Y.prototype.setCentering = Y.prototype.hc;
    Y.prototype.setPublisherProvidedId = Y.prototype.setPublisherProvidedId;
    Y.prototype.setCookieOptions = Y.prototype.setCookieOptions;
    Y.prototype.setTagForChildDirectedTreatment = Y.prototype.setTagForChildDirectedTreatment;
    Y.prototype.clearTagForChildDirectedTreatment = Y.prototype.xb;
    var ud = /#|$/,
        vd = function (a, b) {
            var c = a.search(ud),
                d;
            t: {
                d = 0;
                for (var f = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var h = a.charCodeAt(d - 1);
                    if (38 == h || 63 == h)
                        if (h = a.charCodeAt(d + f), !h || 61 == h || 38 == h || 35 == h) break t;
                    d += f + 1
                }
                d = -1
            }
            if (0 > d) return null;
            f = a.indexOf("&", d);
            if (0 > f || f > c) f = c;
            d += b.length + 1;
            return decodeURIComponent(a.substr(d, f - d).replace(/\+/g, " "))
        };
    var wd = function () {
        var a = window,
            b = document;
        if (q()._pubconsole_disable_) return !1;
        var c;
        c = document.cookie.split("google_pubconsole=");
        if (c = 2 == c.length ? c[1].split(";")[0] : "")
            if (c = c.split("|"), 0 < c.length && ("1" == c[0] || "0" == c[0])) return !0;
        U();
        c = !1;
        try {
            c = a.top.document.URL === b.URL
        } catch (d) {}
        a = c ? b.URL : b.referrer;
        return null !== vd(a, "google_debug") || null !== vd(a, "google_console") || null !== vd(a, "google_force_console") || null !== vd(a, "googfc")
    }, xd = function () {
            if (wd()) {
                var a = document,
                    b = a.createElement("script");
                b.type =
                    "text/javascript";
                b.src = Vc() + "//publisherconsole.appspot.com/js/loader.js";
                b.async = !0;
                (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(b, a)
            }
        };
    "complete" === document.readyState ? xd() : Ca(window, xd);
    r("disablePublisherConsole", function () {
        q()._pubconsole_disable_ = !0
    });
    var Z = function () {
        this.la = [];
        this.ka = !1;
        this.b = z()
    };
    Z.prototype.vb = function (a, b) {
        if (!Wc(a)) return this.ka = !0, x(this.b, hb(String(a))), this;
        if (!(Wc(b) || k(b) && sc(b, Wc))) return this.ka = !0, x(this.b, gb(String(b))), this;
        this.la.push([a, b]);
        return this
    };
    Z.prototype.wb = function () {
        if (this.ka) return x(this.b, ib()), null;
        yc(this.la);
        return this.la
    };
    var xc = function (a, b) {
        var c;
        t: {
            c = b[0];
            for (var d = a[0], f = vc, h = Math.min(c.length, d.length), m = 0; m < h; m++) {
                var u = f(c[m], d[m]);
                if (0 != u) {
                    c = u;
                    break t
                }
            }
            c = vc(c.length, d.length)
        }
        return c
    };
    r("sizeMapping", function () {
        return new Z
    });
    Z.prototype.addSize = Z.prototype.vb;
    Z.prototype.build = Z.prototype.wb;
    r("getVersion", function () {
        return "31"
    });
    var $ = q().cmd;
    if (!$ || k($)) {
        var yd = q().cmd = new lc;
        $ && 0 < $.length && yd.push.apply(yd, $)
    }(function () {
        var a = document.getElementsByTagName("script");
        0 < a.length && (a = a[a.length - 1], a.src && 0 <= a.src.indexOf("/tag/js/gpt.js") && a.innerHTML && !a.googletag_executed && (a.googletag_executed = !0, eval(a.innerHTML)))
    })();
})()
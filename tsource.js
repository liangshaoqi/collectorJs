if (config != undefined && !config.open) {
    (function () {
        var e = [], d = {}, g = {}, j = {id: config.trackid, version: "1.0.21", q: null};
        g.achieve = {};
        g.achieve.os = function (h, c) {
            var k = navigator.platform, l = navigator.userAgent;
            if (h.indexOf("Win") > -1) {
                if (c.indexOf("Windows NT 5.0") > -1) {
                    return "Windows 2000"
                } else {
                    if (c.indexOf("Windows NT 5.1") > -1) {
                        return "Windows XP"
                    } else {
                        if (c.indexOf("Windows NT 5.2") > -1) {
                            return "Windows 2003"
                        } else {
                            if (c.indexOf("Windows NT 6.0") > -1) {
                                return "Windows Vista"
                            } else {
                                if (c.indexOf("Windows NT 6.1") > -1 || c.indexOf("Windows 7") > -1) {
                                    return "Windows 7"
                                } else {
                                    if (c.indexOf("Windows 8") > -1) {
                                        return "Windows 8"
                                    } else {
                                        return "Other"
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (h.indexOf("Mac") > -1) {
                    return "Mac"
                } else {
                    if (h.indexOf("X11") > -1) {
                        return "Unix"
                    } else {
                        if (h.indexOf("Linux") > -1) {
                            return "Linux"
                        } else {
                            if (h.indexOf("Android") > -1 || h.indexOf("Linux") > -1) {
                                return "Android"
                            } else {
                                if (h.indexOf("iPhone") > -1) {
                                    return "iPhone"
                                } else {
                                    if (h.indexOf("Windows Phone") > -1) {
                                        return "Windows Phone"
                                    } else {
                                        return "Other"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        g.achieve.browser = function (c) {
            var h;
            if (/AppleWebKit.*Mobile/i.test(c) || /Android/i.test(c) || /BlackBerry/i.test(c) || /IEMobile/i.test(c) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(c))) {
                return "Mobile Browser"
            } else {
                if (/[Ff]irefox(\/\d+\.\d+)/.test(c)) {
                    h = /([Ff]irefox)\/(\d+\.\d+)/.exec(c);
                    return h[1] + h[2]
                } else {
                    if (/MSIE \d+\.\d+/.test(c)) {
                        h = /MS(IE) (\d+\.\d+)/.exec(c);
                        return h[1] + h[2]
                    } else {
                        if (/[Cc]hrome\/\d+/.test(c)) {
                            h = /([Cc]hrome)\/(\d+)/.exec(c);
                            return h[1] + h[2]
                        } else {
                            if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(c)) {
                                h = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(c);
                                return h[3] + h[1]
                            } else {
                                if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(c)) {
                                    h = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(c);
                                    return h[1] + h[2]
                                } else {
                                    if (/[Tt]rident\/\d+\.\d+/.test(c)) {
                                        h = /[Tt]rident\/(\d+)\.\d+/.exec(c);
                                        return h[1] + h[2]
                                    } else {
                                        if (/[Aa]ppleWebKit\/\d+\.\d+/.test(c)) {
                                            h = /[Aa]ppleWebKit\/(\d+)\.\d+/.exec(c);
                                            return h[1] + h[2]
                                        } else {
                                            if (/[Gg]ecko\/\d+\.\d+/.test(c)) {
                                                h = /[Gg]ecko\/(\d+)\.\d+/.exec(c);
                                                return h[1] + h[2]
                                            } else {
                                                if (/[Kk]HTML\/\d+\.\d+/.test(c)) {
                                                    h = /[Kk]HTML\/(\d+)\.\d+/.exec(c);
                                                    return h[1] + h[2]
                                                } else {
                                                    return "Other"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        g.achieve.flashV = function (c) {
            var h;
            for (var k = 0; k < c.length; k++) {
                if (c[k].name.toLowerCase().indexOf("shockwave flash") >= 0) {
                    h = c[k].description.substring(c[k].description.toLowerCase().lastIndexOf("flash ") + 6, c[k].description.length);
                    h = h.substring(0, h.indexOf(" "))
                }
            }
            return ((h == undefined || h == "") ? "" : h)
        };
        g.V = {};
        g.V.log = function (h, c) {
            var k = new Image, l = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
            window[l] = k;
            k.onload = k.onerror = k.onabort = function () {
                k.onload = k.onerror = k.onabort = j.q;
                k = window[l] = j.q;
                c && c(h)
            };
            k.src = h
        };
        g.cookie = {};
        g.getDomain = function () {
            var h = document.location.hostname;
            var c = d.I.u;
            h = "." + h.replace(/:\d+/, "");
            c = "." + c.replace(/:\d+/, "");
            var k = h.indexOf(c);
            return (-1 < k && k + c.length == h.length) ? c.replace(/(:\d+)?[\/\?#].*/) : ""
        };
        g.cookie.set = function (k, h, l) {
            document.cookie = k + "=" + escape(h) + "; path=/"
        };
        g.cookie.setNull = function (h, c) {
            document.cookie = h + "=" + escape(c) + "; path=/"
        };
        g.cookie.get = function (h) {
            var c, k = new RegExp("(^| )" + h + "=([^;]*)(;|$)");
            if (c = document.cookie.match(k)) {
                return unescape(c[2])
            } else {
                return null
            }
        };
        g.cookie.remove = function (c) {
            var k = new Date();
            k.setTime(k.getTime() - 1);
            var h = g.cookie.get(c);
            if (h != null) {
                document.cookie = c + "=" + h + ";expires=" + k.toGMTString()
            }
        };
        g.achieve.PorM = function (c) {
            if (/AppleWebKit.*Mobile/i.test(c) || /Android/i.test(c) || /BlackBerry/i.test(c) || /IEMobile/i.test(c) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(c))) {
                if (/iPad/i.test(c)) {
                    return "1"
                } else {
                    return "1"
                }
            } else {
                return "0"
            }
        };
        var i = !0, b = null, a = !1, f = g.achieve;
        g.g = {};
        g.g.os = f.os(navigator.platform, navigator.userAgent);
        g.g.br = f.browser(navigator.userAgent);
        g.g.fl = f.flashV(navigator.plugins);
        g.g.pm = f.PorM(navigator.userAgent);
        g.g.sr = window.screen.width + "x" + window.screen.height;
        g.g.lg = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        g.g.ck = (navigator.cookieEnabled ? "1" : "0");
        g.g.ja = (navigator.javaEnabled() ? "1" : "0");
        g.g.sc = window.screen.colorDepth + "-bit";
        g.g.dt = new Date().getTime();
        g.g.rf = document.referrer == "" ? "-" : encodeURIComponent(document.referrer);
        g.g.loc = window.location.href;
        g.g.v = j.version;
        g.g.tit = encodeURIComponent(document.title);
        g.g.ct = ((g.cookie.get("vid") == null || g.cookie.get("vid") == undefined || g.cookie.get("vid") == "") ? "0" : "1");
        g.event = {};
        g.event.e = function (h, c, k) {
            h.attachEvent ? h.attachEvent("on" + c, function (l) {
                k.call(h, l)
            }) : h.addEventListener && h.addEventListener(c, k, a)
        };
        g.event.preventDefault = function (c) {
            c.preventDefault ? c.preventDefault() : c.returnValue = a
        };
        g.lang = {};
        g.lang.d = function (h, c) {
            return "[object " + c + "]" === {}.toString.call(h)
        };
        g.localStorage = {};
        g.localStorage.f = "";
        g.localStorage.s = function () {
            if (!g.localStorage.f) {
                try {
                    g.localStorage.f = document.createElement("input"), g.localStorage.f.type = "hidden", g.localStorage.f.style.display = "none", g.localStorage.f.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(g.localStorage.f)
                } catch (c) {
                    return a
                }
            }
            return i
        };
        g.localStorage.set = function (h, c, l) {
            var m = new Date;
            m.setTime(m.getTime() + l || 31536000000);
            try {
                window.localStorage ? (c = m.getTime() + "|" + c, window.localStorage.setItem(h, c)) : g.localStorage.s() && (g.localStorage.f.expires = m.toUTCString(), g.localStorage.f.load(document.location.hostname), g.localStorage.f.setAttribute(h, c), g.localStorage.f.save(document.location.hostname))
            } catch (k) {
            }
        };
        g.localStorage.get = function (c) {
            if (window.localStorage) {
                if (c = window.localStorage.getItem(c)) {
                    return window.localStorage.getItem(c)
                }
            } else {
                if (g.localStorage.s()) {
                    try {
                        return g.localStorage.f.load(document.location.hostname), g.localStorage.f.getAttribute(c)
                    } catch (h) {
                    }
                }
            }
            return window.localStorage.getItem(c)
        };
        g.localStorage.remove = function (h) {
            if (window.localStorage) {
                window.localStorage.removeItem(h)
            } else {
                if (g.localStorage.s()) {
                    try {
                        g.localStorage.f.load(document.location.hostname), g.localStorage.f.removeAttribute(h), g.localStorage.f.save(document.location.hostname)
                    } catch (c) {
                    }
                }
            }
        };
        g.sessionStorage = {};
        g.sessionStorage.set = function (h, c) {
            if (window.sessionStorage) {
                try {
                    window.sessionStorage.setItem(h, c)
                } catch (k) {
                }
            }
        };
        g.sessionStorage.get = function (c) {
            return window.sessionStorage ? window.sessionStorage.getItem(c) : b
        };
        g.sessionStorage.remove = function (c) {
            window.sessionStorage && window.sessionStorage.removeItem(c)
        };
        g.UUID = {};
        g.UUID.toString = function () {
            return this.id
        };
        g.UUID.rand = function (c) {
            return Math.floor(Math.random() * (c + 1))
        };
        g.UUID.returnBase = function (c, h) {
            return (c).toString(h).toUpperCase()
        };
        g.UUID.getIntegerBits = function (o, p, k) {
            var h = g.UUID;
            var c = h.returnBase(o, 16);
            var m = new Array();
            var n = "";
            var l = 0;
            for (l = 0; l < c.length; l++) {
                m.push(c.substring(l, l + 1))
            }
            for (l = Math.floor(p / 4); l <= Math.floor(k / 4); l++) {
                if (!m[l] || m[l] == "") {
                    n += "0"
                } else {
                    n += m[l]
                }
            }
            return n
        };
        g.UUID.createUUID = function () {
            var l = g.UUID;
            var k = new Date(1582, 10, 15, 0, 0, 0, 0);
            var p = new Date();
            var r = p.getTime() - k.getTime();
            var s = l.getIntegerBits(r, 0, 31);
            var q = l.getIntegerBits(r, 32, 47);
            var o = l.getIntegerBits(r, 48, 59) + "1";
            var h = l.getIntegerBits(l.rand(4095), 0, 7);
            var m = l.getIntegerBits(l.rand(4095), 0, 7);
            var c = l.getIntegerBits(l.rand(8191), 0, 7) + l.getIntegerBits(l.rand(8191), 8, 15) + l.getIntegerBits(l.rand(8191), 0, 7) + l.getIntegerBits(l.rand(8191), 8, 15) + l.getIntegerBits(l.rand(8191), 0, 15);
            return s + q + o + h + m + c
        };
        d.I = {

            R: "192.168.1.104:8000",
            RS: "192.168.1.104:8001",
            u: config.domain,
            P: "192.168.100.10:9090",
            S: "pft.gif",
            protocol: "https:" == document.location.protocol ? "https:" : "http:",
            Q: "os tit br fl pm sr lg ck ja sc dt rf loc tt ct vid u api et cv ut duration durPage n v adtrack".split(" "),
            PQ: "os tit br fl pm sr lg ck ja sc dt rf loc tt ct vid u api p_name p_type p_record p_orderid p_income p_conversionrate".split(" "),
            HMQ: "dt tt vid loc xy dh v".split(" ")
        };
        g.g.getOrderId = function () {
            if (g.g.loc.indexOf("[[[") > 0 && g.g.loc.indexOf("]]]") && g.g.loc.indexOf("[[[") < g.g.loc.indexOf("]]]")) {
                return g.g.loc.substring(g.g.loc.indexOf("[[[") + 3, g.g.loc.indexOf("]]]"))
            } else {
                return ""
            }
        };
        (function () {
            var c = {
                i: {}, e: function (h, k) {
                    this.i[h] = this.i[h] || [];
                    this.i[h].push(k)
                }, o: function (h, l) {
                    this.i[h] = this.i[h] || [];
                    for (var m = this.i[h].length, k = 0; k < m; k++) {
                        this.i[h][k](l)
                    }
                }
            };
            return d.w = c
        })();
        (function () {
            function c(l) {
                return l.replace ? l.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : l
            }

            var m = g.lang, h = d.w, k = {
                init: function () {
                    _pct.putPar = function (n) {
                        if (g.lang.d(n, "Array")) {
                            var l = n[0];
                            if (k.hasOwnProperty(l) && g.lang.d(k[l], "Function")) {
                                k[l](n)
                            }
                        }
                    }
                }, D: function (n) {
                    if (m.d(n, "Array")) {
                        var l = n[0];
                        if (l != undefined && l != null && l != "") {
                            if (k.hasOwnProperty(l) && m.d(k[l], "Function")) {
                                k[l](n)
                            }
                        }
                    }
                }, _trackPageview: function (l) {
                    l[1].indexOf("/") == 0 ? "" : l[1] = "/" + l[1];
                    g.g.u = d.I.protocol + "//" + document.location.host + l[1];
                    g.g.dt = new Date().getTime();
                    g.g.api = "1_0";
                    d.b.init()
                }, _trackEvent: function (l) {
                    if (l[1] != undefined && l[1] != "" && l[1] != null) {
                        if (l[2] != undefined && l[2] != "" && l[2] != null) {
                            g.g.dt = new Date().getTime();
                            2 < l.length && (g.g.api = "2_0", g.g.et = c(l[1]) + "*" + c(l[2]) + "*" + c(l[3]) + (l[4] ? "*" + c(l[4]) : ""), d.b.init())
                        }
                    }
                }, _setCustomVar: function (n) {
                    if (!(4 > n.length)) {
                        var t = n[1], s = n[4] || 3;
                        if (0 < t && 6 > t && 0 < s && 4 > s) {
                            var q = d.b.getSessionData("PFT_CV_" + j.id);
                            if (q == undefined || q == null || q == "") {
                                var l = "", o = n[n.length - 1];
                                if (o == undefined || o == "" || o == null) {
                                    n[n.length - 1] = 3
                                }
                                for (var p = 1; p < n.length; p++) {
                                    l = l + (n[p] == undefined ? "" : n[p] + "*")
                                }
                                l = l.substring(0, l.length - 1);
                                g.cookie.set("PFT_CV_" + j.id, decodeURIComponent(l), 1);
                                g.cookie.set("PFT_API", decodeURIComponent("3_0"), 1)
                            }
                        }
                    }
                }
            };
            k.init();
            d.T = k;
            return d.T
        })();
        (function () {
            function l() {
                this.init()
            }

            var o = g.g, c = g.V, h = g.achieve, q = g.sessionStorage, n = g.localStorage, k = g.cookie, p = g.UUID, m = g.position;
            l.prototype = {
                setData: function (r) {
                    try {
                        k.set(r, p.createUUID(), 1);
                        n.set(r, p.createUUID())
                    } catch (s) {
                    }
                }, setSessionData: function (s, r) {
                    q.set(s, r)
                }, getSessionData: function (r) {
                    return q.get(r)
                }, getData: function (r) {
                    return k.get(r)
                }, uv: function () {
                    var r = new Date().getTime()
                }, matchUrl: function (r) {
                    return (r = r.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? r[2].replace(/.*@/, "") : null
                }, na: function () {
                    var y, x = this.getData("PFT_COOKIE_RF") == null ? "-" : this.getData("PFT_COOKIE_RF");
                    g.g.tt = y = this.getData("PFT_" + j.id);
                    var z = decodeURIComponent(g.g.rf).replace("http://", "");
                    if (z.indexOf("/") != -1) {
                        z = (z == "-" ? z : z.substring(0, z.indexOf("/")))
                    }
                    var u = decodeURIComponent(g.g.loc).replace("http://", "");
                    if (u.indexOf("/") != -1) {
                        u = (u == "-" ? u : u.substring(0, u.indexOf("/")))
                    }
                    var v = (z != "-" && (x == j.q || z != u));
                    if (null == y || undefined == y || "" == y) {
                        if (z != document.location.hostname) {
                            k.set("PFT_COOKIE_RF", g.g.rf)
                        }
                        this.setData("PFT_" + j.id);
                        g.g.tt = this.getData("PFT_" + j.id);
                        g.g.n = "1";
                        g.cookie.remove("PFT_DTNJ");
                        g.cookie.remove("PFT_DTNP")
                    } else {
                        if (v) {
                            if (z != document.location.hostname) {
                                k.set("PFT_COOKIE_RF", g.g.rf);
                                this.setData("PFT_" + j.id);
                                g.g.tt = this.getData("PFT_" + j.id);
                                g.g.n = "1";
                                g.cookie.remove("PFT_DTNJ");
                                g.cookie.remove("PFT_DTNP")
                            }
                        } else {
                            var t = this.getData("PFT_SJKD");
                            var w = new Date().getDate();
                            if (t != undefined && t < w) {
                                this.setData("PFT_" + j.id);
                                g.g.n = "1"
                            }
                        }
                    }
                    var s = document.cookie.indexOf("vid");
                    if (s == -1) {
                        var r = new Date();
                        r.setTime(r.getTime() * 100);
                        document.cookie = "vid=" + p.createUUID() + ";expires=" + r.toGMTString() + ";domain=" + g.getDomain() + "; path=/"
                    }
                    g.g.vid = this.getData("vid")
                }, par: function () {
                    var s = "", r = d.I.Q, u = g.g, t = g.cookie;
                    for (var v = 0; v < r.length; v++) {
                        u[r[v]] != undefined && u[r[v]] != "" && u[r[v]] != null ? s = s + r[v] + "=" + u[r[v]] + ((r[v] == "v") ? "" : "&") : ""
                    }
                    t.set("PFT_SJKD", new Date().getDate());
                    return s
                }, pagePar: function () {
                    var s = "", r = d.I.PQ, u = g.g, t = g.cookie;
                    for (var v = 0; v < r.length; v++) {
                        u[r[v]] != undefined && u[r[v]] != "" && u[r[v]] != null ? s = s + r[v] + "=" + u[r[v]] + ((r[v] == "v") ? "" : "&") : ""
                    }
                    t.set("PFT_PAGE", new Date().getDate());
                    return s
                }, hotMapPar: function () {
                    var s = "", r = d.I.HMQ, u = g.g, t = g.cookie;
                    for (var v = 0; v < r.length; v++) {
                        u[r[v]] != undefined && u[r[v]] != "" && u[r[v]] != null ? s = s + r[v] + "=" + u[r[v]] + ((r[v] == "v") ? "" : "&") : ""
                    }
                    t.set("PFT_HOT_MAP", new Date().getDate());
                    return s
                }, custor: function () {
                    g.g.cv = g.cookie.get("PFT_CV_" + j.id);
                    g.g.api = g.cookie.get("PFT_API");
                    if (g.g.cv != null && g.g.cv != undefined && g.g.cv != "") {
                        g.cookie.remove("PFT_CV_" + j.id);
                        g.cookie.remove("PFT_API");
                        this.sm()
                    }
                }, sm: function (r) {
                    var s = d.I;
                    var t = s.protocol + "//" + s.P + "/" + s.S + "?t=" + j.id + "&" + this.par();
                    c.log(t)
                }, pageSm: function (r) {
                    var s = d.I;
                    var t = s.protocol + "//" + s.P + "/" + s.S + "?t=" + j.id + "&" + this.pagePar();
                    c.log(t)
                }, hotMapSm: function (r) {
                    var s = d.I;
                    var t = s.protocol + "//" + s.P + "/" + s.S + "?t=" + j.id + "&" + this.hotMapPar();
                    c.log(t)
                }, hbInfo: function () {
                    var s = d.I;
                    var r = document.createElement("script");
                    r.setAttribute("type", "text/javascript");
                    r.setAttribute("charset", "utf-8");
                    r.setAttribute("src", s.protocol + "//" + s.P + "/" + s.S + "?t=" + j.id + "tt=" + g.g.tt + "&rf='-'&ping=" + Date.parse(new Date()));
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(r, t)
                }, heartBeat: function (s) {
                    var r = 5 * 60 * 1000, v = 3 * 60 * 1000;
                    s == undefined || s == "" || s == null ? r : s = s * 60 * 1000;
                    var t = s < v ? r : s;
                    var u = setInterval(this.hbInfo, t)
                }, getSelectJS: function () {
                    var s = document.referrer;
                    if (document.location.href.indexOf("jn=select") > -1 && (s.indexOf("http://" + d.I.R) === 0 || s.indexOf("https://" + d.I.R) === 0)) {
                        var r = document.createElement("script");
                        r.setAttribute("type", "text/javascript");
                        r.setAttribute("src", d.I.protocol + "//" + d.I.RS + "/t.js/select?tid=" + j.id);
                        var t = document.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(r, t)
                    }
                }, getHeatUrlJS: function () {
                    var s = document.referrer;
                    if (document.location.href.indexOf("jn=heatUrl") > -1 && (s.indexOf("http://" + d.I.R) === 0 || s.indexOf("https://" + d.I.R) === 0)) {
                        var r = document.createElement("script");
                        r.setAttribute("type", "text/javascript");
                        r.setAttribute("src", d.I.protocol + "//" + d.I.RS + "/t.js/heatUrl");
                        var t = document.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(r, t)
                    }
                }, init: function () {
                    d.b = this;
                    this.na();
                    this.sm();
                    this.custor();
                    this.getSelectJS();
                    this.getHeatUrlJS()
                }
            };
            return new l
        })();
        (function () {
            //判定浏览器兼容性问题，IE8.0以下包括IE8.0 不支持
            var h = /MS(IE) (\d+\.\d+)/.exec(c);
            if (h!=undefined&&h!=""&&h!="IE6.0"&&h!="IE7.0"&&h!="IE8.0"&&performance != undefined) {
                var c = g.event, h = g.cookie;
                var l = function (n) {
                    var m = performance.timing, o = m[n + "Start"] ? m[n + "Start"] : 0;
                    n = m[n + "End"] ? m[n + "End"] : 0;
                    return {start: o, end: n, value: 0 < n - o ? n - o : 0}
                };
                var k = function () {
                    var m, n, p;
                    p = l("navigation");
                    n = l("request");
                    m = {
                        nett: n.start - p.start,
                        netd: l("domainLookup").value,
                        nttp: l("connect").value,
                        srv: l("response").start - n.start,
                        dms: performance.timing.domInteractive - performance.timing.fetchStart,
                        let: l("loadEvent").end - p.start
                    };
                    var o = h.get("judge");
                    if (o != h.get("PFT_" + j.id)) {
                        h.set("judge", g.g.tt);
                        g.g.ut = JSON.stringify(m);
                        d.b.sm();
                        g.g.ut = null
                    }
                };
                c.e(window, "load", function () {
                    setTimeout(k, 400)
                })
            }
        })();
        if (config.duration != undefined && config.duration.ttpause) {
            (function () {
                var c = g.cookie;
                c.get("PFT_DTNJ") === null ? c.set("PFT_DTNJ", true) : "";
                if (c.get("PFT_DTNJ") == "true") {
                    var h = function () {
                        var m = c.get("PFT_DTN") == null ? c.set("PFT_DTN", new Date().getTime()) : c.get("PFT_DTN");
                        var l = new Date().getTime();
                        if (parseInt((l - m) / 1000) >= config.duration.tttime) {
                            g.g.duration = 1;
                            d.b.sm();
                            g.g.duration = null;
                            clearInterval(k);
                            c.set("PFT_DTNJ", false)
                        }
                    }
                }
                var k = setInterval(h, 1000)
            }())
        }
        if (config.visit != undefined && config.visit.pvpause) {
            (function () {
                var c = g.cookie;
                c.get("PFT_DTNP") == null ? c.set("PFT_DTNP", true) : "";
                if (c.get("PFT_DTNP") === "true") {
                    var h = c.get("PFT_PAGE") == null ? c.set("PFT_PAGE", 0) : c.get("PFT_PAGE");
                    if (parseInt(h) >= config.visit.pvtimes) {
                        g.g.durPage = 1;
                        d.b.sm();
                        g.g.durPage = null;
                        c.set("PFT_DTNP", false)
                    } else {
                        c.set("PFT_PAGE", parseInt(c.get("PFT_PAGE")) + 1)
                    }
                }
            }())
        }
        (function () {
            document.onclick = function (k) {
                var m = k || window.event;
                var n = document.documentElement.scrollLeft || document.body.scrollLeft;
                var l = document.documentElement.scrollTop || document.body.scrollTop;
                var h = m.pageX || m.clientX + n;
                var o = m.pageY || m.clientY + l;
                var c = {x: h, y: o};
                e.push(c);
                if (e.length >= 5) {
                    g.g.xy = JSON.stringify(e);
                    g.g.dh = document.body.scrollHeight;
                    d.b.hotMapSm();
                    e = []
                }
            }
        })();
        if (config != undefined && config.e != undefined && config.e.length > 0) {
            //window.onload = function () {
            config.e.forEach(function (k, h) {
                if (!k.evpause) {
                    var l =""
                    if(g.g.br.indexOf("IE")>-1){
                        l = document.location.toString();
                    }else{
                        l = document.location.href
                    }
                    if (l.indexOf(k.evpage) > -1 || k.evpage.indexOf(l) > -1) {
                        var m = document.getElementById(k.eid);
                        var c = m.attributes.getNamedItem("onclick");
                        if (m != undefined && m != null) {
                            if (c == null) {
                                m.onclick = function () {
                                    _pct.putPar(["_trackEvent", k.eid, k.evttag, k.evtarget ? 1 : 0])
                                }
                            } else {
                                if (c.nodeValue.indexOf("_pct.putPar") == -1) {
                                    m.onclick = function () {
                                        _pct.putPar(["_trackEvent", k.eid, k.evttag, k.evtarget ? 1 : 0])
                                    }
                                }
                            }
                        }
                    }
                }
            })
            //}
        }
        if (config != undefined) {
            if (g.g.loc.indexOf("www.farmer.com.cn") < 0) {
                (function () {
                    var o = "https:" == document.location.protocol ? "https:" : "http:";
                    var h = (config.iconNumber != undefined ? config.iconNumber : "1");
                    var q = document.createElement("a");
                    q.setAttribute("href", o + "//hy.best-ad.cn");
                    q.setAttribute("class", "baisi");
                    q.setAttribute("id", "baisi");
                    q.setAttribute("target", "_blank");
                    q.setAttribute("title", "百思统计");
                    var c = new Image();
                    c.src = o + "//hy.best-ad.cn/img/" + h + ".gif";
                    q.appendChild(c);
                    var p = document.getElementsByTagName("script");
                    var n;
                    for (var l = 0; l < p.length; l++) {
                        if (p[l].text.indexOf("_pct") != -1) {
                            n = l
                        }
                    }
                    var m = document.getElementsByTagName("script")[n];
                    m.parentNode.insertBefore(q, m)
                })()
            }
        }
        var rm = g.cookie.get("RF_map" + j.id);
        if (g.g.rf != g.g.loc) {
            if (rm == undefined || rm == "") {
                rm = 0 + "*" + g.g.rf;
                g.cookie.set("RF_map" + j.id, rm)
            } else {
                var rmarr = rm.split("|");
                var last = rmarr[rmarr.length - 1].split("*", 2);
                if (last[1] != g.g.rf) {
                    if (rmarr.length == 10) {
                        rmarr.splice(0, 1)
                    }
                    rmarr.push(rm = 0 + "*" + g.g.rf);
                    rm = rmarr.join("|");
                    g.cookie.set("RF_map" + j.id, rm)
                }
            }
        }
        if (config != undefined && config.pc != undefined) {
            if (config.pc.pause == undefined || config.pc.pause) {
                return
            }
            if (config.pc.paths == undefined || config.pc.paths.length == 0) {
                g.g.p_name =encodeURIComponent( config.pc.target_name);
                g.g.p_record = config.pc.record_type;
                g.g.p_orderid = g.g.getOrderId();
                g.g.p_income = config.pc.expected_yield;
                g.g.p_conversionrate = config.pc.pecent_yield;
                d.b.pageSm()
            } else {
                var rm = g.cookie.get("RF_map" + j.id);
                if (rm == undefined || rm == "") {
                    return
                } else {
                    var rmarr = rm.split("|");
                    config.pc.paths.forEach(function (path) {
                        if (path.steps.length < rmarr.length) {
                            var flag = true;
                            var last = rmarr[rmarr.length - 1].split("*", 2);
                            if (last[0] == "0") {
                                for (var index = 0; index < path.steps; index++) {
                                    var step = path.steps[index];
                                    flag = true;
                                    step.forEach(function (url) {
                                        var temprm = rmarr[rmarr.length - path.steps.length + index].split("*", 2);
                                        if (url != temprm[1]) {
                                            flag = false
                                        }
                                    });
                                    if (flag) {
                                        break
                                    }
                                }
                                if (flag) {
                                    last[0] = "1";
                                    rmarr[rmarr.length - 1] = last.join("*");
                                    g.cookie.set("RF_map" + j.id, rmarr.join("|"));
                                    g.g.p_name = encodeURIComponent( config.pc.target_name);
                                    g.g.p_record = config.pc.record_type;
                                    g.g.p_orderid = g.g.getOrderId();
                                    g.g.p_income = config.pc.expected_yield;
                                    g.g.p_conversionrate = config.pc.pecent_yield;
                                    d.b.pageSm()
                                }
                            }
                        }
                    })
                }
            }
        }
    })()
}
;
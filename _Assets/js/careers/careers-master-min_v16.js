$("#location").on("change", function () {
    var e = $(this).find("option:selected").val(),
        t = $("#careers-question-in"),
        a = $("input[name=WcoFormId]");
    "Noida" == e ? (t.attr("action", "http://snippet.omm.crownpeak.com/p/6e64fc3d-fcdc-4771-9277-b69be54bf562"), console.log(e), a.attr("value", "bf3f0654-c74d-4ae0-9d1c-dc5e56672798")) : "Gurgaon" == e ? (t.attr("action", "http://snippet.omm.crownpeak.com/p/22dcf3b4-06c4-4400-be90-6f3e143a3fc1"), console.log(e), a.attr("value", "8f4b8b47-2d5f-45db-99ac-c00796bec4bd")) : (t.attr("action", "https://snippet.omm.crownpeak.com/p/9eb1019d-b927-48fd-860b-3cbe7a44c19e"), console.log(e), a.attr("value", "8ea919af-5878-4bc8-b4c0-d17f40556d04"))
}), $(document).ready(function () {
    var e = $("#subscribe-form"),
        t = $("#subscribe-form :input"),
        a = $("#subscribe-form-body"),
        n = (t = $("#subscribe-form-body :input"), $("#thank-you-body"));
    e.validate({
        messages: {
            email: {
                required: !0,
                email: !0
            }
        },
        messages: {
            email: {
                required: "Please enter a valid email address"
            }
        }
    }), t.focus(function () {
        $(this).parent().addClass("valid-group").children("label.label-focus").removeClass("label-focus").addClass("label-blur")
    }), -1 < window.location.href.indexOf("b309b5f2-3dd0-40b1-92c0-c0c605ff664e") && (e.addClass("hide"), $(".thank-you").removeClass("hide"), $("html, body").animate({
        scrollTop: $("#popup-fixed").offset().top - 150
    }, "fast")), e.submit(function () {
        $.ajax({
            type: "POST",
            url: "http://info.nthrive.com/l/311601/2017-06-14/d34n",
            data: {
                email: $("input[name=email]#email-1").val()
            },
            success: function () {
                e.addClass("hide"), $(".thank-you").removeClass("hide")
            }
        })
    }), a.validate({
        messages: {
            email: {
                required: !0,
                email: !0
            }
        },
        messages: {
            email: {
                required: "Please enter a valid email address"
            }
        }
    }), t.focus(function () {
        $(this).parent().addClass("valid-group").children("label.label-focus").removeClass("label-focus").addClass("label-blur")
    }), -1 < window.location.href.indexOf("WcoFormId=e03e8096-9bb4-4cf4-9006-1d86466b63a2") && (a.addClass("hide"), n.removeClass("hide"), $("html, body").animate({
        scrollTop: $("#subscribe-body-anchor").offset().top - 150
    }, "fast")), a.submit(function () {
        $.ajax({
            type: "POST",
            url: "http://info.nthrive.com/l/311601/2017-06-14/d34n",
            data: {
                email: $("input[name=email]#email-2").val()
            },
            success: function () {
                a.addClass("hide"), $(".thank-you-body").removeClass("hide")
            }
        })
    }), $("html").removeClass("no-js")
}), $(".popup-option-overlay").click(function () {
    $("body").removeClass("no-scroll")
}), $(".comment-link").click(function () {
    $("body").addClass("no-scroll")
});
var swfobject = function () {
    var v = "undefined",
        b = "object",
        c = "Shockwave Flash",
        p = "ShockwaveFlash.ShockwaveFlash",
        $ = "application/x-shockwave-flash",
        l = "SWFObjectExprInst",
        g = window,
        u = document,
        h = navigator,
        i = [],
        s = [],
        o = null,
        d = null,
        f = null,
        r = !1,
        m = !1,
        y = function () {
            var e = typeof u.getElementById != v && typeof u.getElementsByTagName != v && typeof u.createElement != v && typeof u.appendChild != v && typeof u.replaceChild != v && typeof u.removeChild != v && typeof u.cloneNode != v,
                t = [0, 0, 0],
                a = null;
            if (typeof h.plugins != v && typeof h.plugins[c] == b) (a = h.plugins[c].description) && (a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), t[0] = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), t[1] = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), t[2] = /r/.test(a) ? parseInt(a.replace(/^.*r(.*)$/, "$1"), 10) : 0);
            else if (typeof g.ActiveXObject != v) {
                var n = null,
                    i = !1;
                try {
                    n = new ActiveXObject(p + ".7")
                } catch (e) {
                    try {
                        n = new ActiveXObject(p + ".6"), t = [6, 0, 21], n.AllowScriptAccess = "always"
                    } catch (e) {
                        6 == t[0] && (i = !0)
                    }
                    if (!i) try {
                        n = new ActiaveXObject(p)
                    } catch (e) { }
                }
                if (!i && n) try {
                    (a = n.GetVariable("$version")) && (a = a.split(" ")[1].split(","), t = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)])
                } catch (e) { }
            }
            var o = h.userAgent.toLowerCase(),
                s = h.platform.toLowerCase(),
                r = !!/webkit/.test(o) && parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                l = /win/.test(s || o),
                d = /mac/.test(s || o);
            return {
                w3cdom: e,
                pv: t,
                webkit: r,
                ie: !1,
                win: l,
                mac: d
            }
        }();
    ! function () {
        if (y.w3cdom) {
            if (w(n), y.ie && y.win) try {
                u.write("<script id=__ie_ondomload defer=true src=//:><\/script>");
                var e = T("__ie_ondomload");
                e && (e.onreadystatechange = function () {
                    "complete" == this.readyState && (this.parentNode.removeChild(this), t())
                })
            } catch (e) { }
            y.webkit && typeof u.readyState != v && (o = setInterval(function () {
                /loaded|complete/.test(u.readyState) && t()
            }, 10)), typeof u.addEventListener != v && u.addEventListener("DOMContentLoaded", t, null), a(t)
        }
    }();

    function t() {
        if (!r) {
            if (y.ie && y.win) {
                var e = E("span");
                try {
                    var t = u.getElementsByTagName("body")[0].appendChild(e);
                    t.parentNode.removeChild(t)
                } catch (e) {
                    return
                }
            }
            r = !0, o && (clearInterval(o), o = null);
            for (var a = i.length, n = 0; n < a; n++) i[n]()
        }
    }

    function w(e) {
        r ? e() : i[i.length] = e
    }

    function a(e) {
        if (typeof g.addEventListener != v) g.addEventListener("load", e, !1);
        else if (typeof u.addEventListener != v) u.addEventListener("load", e, !1);
        else if (typeof g.attachEvent != v) g.attachEvent("onload", e);
        else if ("function" == typeof g.onload) {
            var t = g.onload;
            g.onload = function () {
                t(), e()
            }
        } else g.onload = e
    }

    function n() {
        for (var e = s.length, t = 0; t < e; t++) {
            var a = s[t].id;
            if (0 < y.pv[0]) {
                var n = T(a);
                n && (s[t].width = n.getAttribute("width") ? n.getAttribute("width") : "0", s[t].height = n.getAttribute("height") ? n.getAttribute("height") : "0", A(s[t].swfVersion) ? (y.webkit && y.webkit < 312 && C(n), L(a, !0)) : s[t].expressInstall && !m && A("6.0.65") && (y.win || y.mac) ? k(s[t]) : O(n))
            } else L(a, !0)
        }
    }

    function C(e) {
        var t = e.getElementsByTagName(b)[0];
        if (t) {
            var a = E("embed"),
                n = t.attributes;
            if (n)
                for (var i = n.length, o = 0; o < i; o++) "data" == n[o].nodeName.toLowerCase() ? a.setAttribute("src", n[o].nodeValue) : a.setAttribute(n[o].nodeName, n[o].nodeValue);
            var s = t.childNodes;
            if (s)
                for (var r = s.length, l = 0; l < r; l++) 1 == s[l].nodeType && "param" == s[l].nodeName.toLowerCase() && a.setAttribute(s[l].getAttribute("name"), s[l].getAttribute("value"));
            e.parentNode.replaceChild(a, e)
        }
    }

    function k(e) {
        m = !0;
        var t = T(e.id);
        if (t) {
            if (e.altContentId) {
                var a = T(e.altContentId);
                a && (d = a, f = e.altContentId)
            } else d = S(t);
            !/%$/.test(e.width) && parseInt(e.width, 10) < 310 && (e.width = "310"), !/%$/.test(e.height) && parseInt(e.height, 10) < 137 && (e.height = "137"), u.title = u.title.slice(0, 47) + " - Flash Player Installation";
            var n = y.ie && y.win ? "ActiveX" : "PlugIn",
                i = u.title,
                o = "MMredirectURL=" + g.location + "&MMplayerType=" + n + "&MMdoctitle=" + i,
                s = e.id;
            if (y.ie && y.win && 4 != t.readyState) {
                var r = E("div");
                s += "SWFObjectNew", r.setAttribute("id", s), t.parentNode.insertBefore(r, t), t.style.display = "none", g.attachEvent("onload", function () {
                    t.parentNode.removeChild(t)
                })
            }
            x({
                data: e.expressInstall,
                id: l,
                width: e.width,
                height: e.height
            }, {
                flashvars: o
            }, s)
        }
    }

    function O(e) {
        if (y.ie && y.win && 4 != e.readyState) {
            var t = E("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(S(e), t), e.style.display = "none", g.attachEvent("onload", function () {
                e.parentNode.removeChild(e)
            })
        } else e.parentNode.replaceChild(S(e), e)
    }

    function S(e) {
        var t = E("div");
        if (y.win && y.ie) t.innerHTML = e.innerHTML;
        else {
            var a = e.getElementsByTagName(b)[0];
            if (a) {
                var n = a.childNodes;
                if (n)
                    for (var i = n.length, o = 0; o < i; o++) 1 == n[o].nodeType && "param" == n[o].nodeName.toLowerCase() || 8 == n[o].nodeType || t.appendChild(n[o].cloneNode(!0))
            }
        }
        return t
    }

    function x(e, t, a) {
        var n, i, o = T(a);
        if (typeof e.id == v && (e.id = a), y.ie && y.win) {
            var s = "";
            for (var r in e) e[r] != Object.prototype[r] && ("data" == r ? t.movie = e[r] : "styleclass" == r.toLowerCase() ? s += ' class="' + e[r] + '"' : "classid" != r && (s += " " + r + '="' + e[r] + '"'));
            var l = "";
            for (var d in t) t[d] != Object.prototype[d] && (l += '<param name="' + d + '" value="' + t[d] + '" />');
            o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + l + "</object>", i = e.id, y.ie && y.win && A("8.0.0") && g.attachEvent("onunload", function () {
                var e = T(i);
                if (e) {
                    for (var t in e) "function" == typeof e[t] && (e[t] = function () { });
                    e.parentNode.removeChild(e)
                }
            }), n = T(e.id)
        } else if (y.webkit && y.webkit < 312) {
            var c = E("embed");
            for (var p in c.setAttribute("type", $), e) e[p] != Object.prototype[p] && ("data" == p ? c.setAttribute("src", e[p]) : "styleclass" == p.toLowerCase() ? c.setAttribute("class", e[p]) : "classid" != p && c.setAttribute(p, e[p]));
            for (var u in t) t[u] != Object.prototype[u] && "movie" != u && c.setAttribute(u, t[u]);
            o.parentNode.replaceChild(c, o), n = c
        } else {
            var h = E(b);
            for (var f in h.setAttribute("type", $), e) e[f] != Object.prototype[f] && ("styleclass" == f.toLowerCase() ? h.setAttribute("class", e[f]) : "classid" != f && h.setAttribute(f, e[f]));
            for (var m in t) t[m] != Object.prototype[m] && "movie" != m && N(h, m, t[m]);
            o.parentNode.replaceChild(h, o), n = h
        }
        return n
    }

    function N(e, t, a) {
        var n = E("param");
        n.setAttribute("name", t), n.setAttribute("value", a), e.appendChild(n)
    }

    function T(e) {
        return u.getElementById(e)
    }

    function E(e) {
        return u.createElement(e)
    }

    function A(e) {
        var t = y.pv,
            a = e.split(".");
        return a[0] = parseInt(a[0], 10), a[1] = parseInt(a[1], 10), a[2] = parseInt(a[2], 10), t[0] > a[0] || t[0] == a[0] && t[1] > a[1] || t[0] == a[0] && t[1] == a[1] && t[2] >= a[2]
    }

    function P(e, t) {
        if (!y.ie || !y.mac) {
            var a = u.getElementsByTagName("head")[0],
                n = E("style");
            if (n.setAttribute("type", "text/css"), n.setAttribute("media", "screen"), y.ie && y.win || typeof u.createTextNode == v || n.appendChild(u.createTextNode(e + " {" + t + "}")), a.appendChild(n), y.ie && y.win && typeof u.styleSheets != v && 0 < u.styleSheets.length) {
                var i = u.styleSheets[u.styleSheets.length - 1];
                typeof i.addRule == b && i.addRule(e, t)
            }
        }
    }

    function L(e, t) {
        var a = t ? "inherit" : "hidden";
        r ? T(e).style.visibility = a : P("#" + e, "visibility:" + a)
    }
    return {
        registerObject: function (e, t, a) {
            if (y.w3cdom && e) {
                var n = document.getElementById(e),
                    i = function (e) {
                        if (!e) return "";
                        for (var t = e.childNodes, a = t.length, n = 0; n < a; n++)
                            if (1 == t[n].nodeType && "object" == t[n].nodeName.toLowerCase() && (a = (t = t[n].childNodes).length, n = 0), 1 == t[n].nodeType && "param" == t[n].nodeName.toLowerCase() && "expressinstall" == t[n].getAttribute("name")) return t[n].getAttribute("value");
                        return ""
                    }(n),
                    o = {};
                o.id = e, o.swfVersion = t || function (e) {
                    if (!e) return 0;
                    for (var t = e.childNodes, a = t.length, n = 0; n < a; n++)
                        if (1 == t[n].nodeType && "object" == t[n].nodeName.toLowerCase() && (a = (t = t[n].childNodes).length, n = 0), 1 == t[n].nodeType && "param" == t[n].nodeName.toLowerCase() && "swfversion" == t[n].getAttribute("name")) return t[n].getAttribute("value");
                    return 0
                }(n), o.expressInstall = a || "" != i && i, s[s.length] = o, L(e, !1)
            }
        },
        getObjectById: function (e) {
            var t = null;
            if (y.w3cdom && r) {
                var a = T(e);
                if (a) {
                    var n = a.getElementsByTagName(b)[0];
                    !n || n && typeof a.SetVariable != v ? t = a : typeof n.SetVariable != v && (t = n)
                }
            }
            return t
        },
        embedSWF: function (e, t, a, n, i, o, s, r, l) {
            if (y.w3cdom && e && t && a && n && i)
                if (a += "", n += "", A(i)) {
                    L(t, !1);
                    var d = typeof l == b ? l : {};
                    d.data = e, d.width = a, d.height = n;
                    var c = typeof r == b ? r : {};
                    if (typeof s == b)
                        for (var p in s) s[p] != Object.prototype[p] && (typeof c.flashvars != v ? c.flashvars += "&" + p + "=" + s[p] : c.flashvars = p + "=" + s[p]);
                    w(function () {
                        x(d, c, t), d.id == t && L(t, !0)
                    })
                } else o && !m && A("6.0.65") && (y.win || y.mac) && (L(t, !1), w(function () {
                    var e = {};
                    e.id = e.altContentId = t, e.width = a, e.height = n, e.expressInstall = o, k(e)
                }))
        },
        getFlashPlayerVersion: function () {
            return {
                major: y.pv[0],
                minor: y.pv[1],
                release: y.pv[2]
            }
        },
        hasFlashPlayerVersion: A,
        createSWF: function (e, t, a) {
            return y.w3cdom && r ? x(e, t, a) : void 0
        },
        createCSS: function (e, t) {
            y.w3cdom && P(e, t)
        },
        addDomLoadEvent: w,
        addLoadEvent: a,
        getQueryParamValue: function (e) {
            var t = u.location.search || u.location.hash;
            if (null == e) return t;
            if (t)
                for (var a = t.substring(1).split("&"), n = 0; n < a.length; n++)
                    if (a[n].substring(0, a[n].indexOf("=")) == e) return a[n].substring(a[n].indexOf("=") + 1);
            return ""
        },
        expressInstallCallback: function () {
            if (m && d) {
                var e = T(l);
                e && (e.parentNode.replaceChild(d, e), f && (L(f, !0), y.ie && y.win && (d.style.display = "block")), f = d = null, m = !1)
            }
        }
    }
}();

function sticky_relocate() {
    var e = $(window).scrollTop(),
        t = $("#sticky-anchor");
    t.length && (t.offset().top - 80 < e ? ($(".search-bar").addClass("stick"), $("#sticky-anchor").height($(".search-bar").outerHeight())) : ($(".search-bar").removeClass("stick"), $("#sticky-anchor").height(0)))
} ! function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (l) {
    var n = -1,
        i = -1,
        d = function (e) {
            return parseFloat(e) || 0
        },
        c = function (e) {
            var t = l(e),
                n = null,
                i = [];
            return t.each(function () {
                var e = l(this),
                    t = e.offset().top - d(e.css("margin-top")),
                    a = 0 < i.length ? i[i.length - 1] : null;
                null === a ? i.push(e) : Math.floor(Math.abs(n - t)) <= 1 ? i[i.length - 1] = a.add(e) : i.push(e), n = t
            }), i
        },
        p = function (e) {
            var t = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? l.extend(t, e) : ("boolean" == typeof e ? t.byRow = e : "remove" === e && (t.remove = !0), t)
        },
        u = l.fn.matchHeight = function (e) {
            var t = p(e);
            if (t.remove) {
                var a = this;
                return this.css(t.property, ""), l.each(u._groups, function (e, t) {
                    t.elements = t.elements.not(a)
                }), this
            }
            return this.length <= 1 && !t.target || (u._groups.push({
                elements: this,
                options: t
            }), u._apply(this, t)), this
        };
    u.version = "0.7.0", u._groups = [], u._throttle = 80, u._maintainScroll = !1, u._beforeUpdate = null, u._afterUpdate = null, u._rows = c, u._parse = d, u._parseOptions = p, u._apply = function (e, t) {
        var o = p(t),
            a = l(e),
            n = [a],
            i = l(window).scrollTop(),
            s = l("html").outerHeight(!0),
            r = a.parents().filter(":hidden");
        return r.each(function () {
            var e = l(this);
            e.data("style-cache", e.attr("style"))
        }), r.css("display", "block"), o.byRow && !o.target && (a.each(function () {
            var e = l(this),
                t = e.css("display");
            "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: t,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), n = c(a), a.each(function () {
            var e = l(this);
            e.attr("style", e.data("style-cache") || "")
        })), l.each(n, function (e, t) {
            var a = l(t),
                i = 0;
            if (o.target) i = o.target.outerHeight(!1);
            else {
                if (o.byRow && a.length <= 1) return void a.css(o.property, "");
                a.each(function () {
                    var e = l(this),
                        t = e.attr("style"),
                        a = e.css("display");
                    "inline-block" !== a && "flex" !== a && "inline-flex" !== a && (a = "block");
                    var n = {
                        display: a
                    };
                    n[o.property] = "", e.css(n), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), t ? e.attr("style", t) : e.css("display", "")
                })
            }
            a.each(function () {
                var e = l(this),
                    t = 0;
                o.target && e.is(o.target) || ("border-box" !== e.css("box-sizing") && (t += d(e.css("border-top-width")) + d(e.css("border-bottom-width")), t += d(e.css("padding-top")) + d(e.css("padding-bottom"))), e.css(o.property, i - t + "px"))
            })
        }), r.each(function () {
            var e = l(this);
            e.attr("style", e.data("style-cache") || null)
        }), u._maintainScroll && l(window).scrollTop(i / s * l("html").outerHeight(!0)), this
    }, u._applyDataApi = function () {
        var a = {};
        l("[data-match-height], [data-mh]").each(function () {
            var e = l(this),
                t = e.attr("data-mh") || e.attr("data-match-height");
            a[t] = t in a ? a[t].add(e) : e
        }), l.each(a, function () {
            this.matchHeight(!0)
        })
    };
    var o = function (e) {
        u._beforeUpdate && u._beforeUpdate(e, u._groups), l.each(u._groups, function () {
            u._apply(this.elements, this.options)
        }), u._afterUpdate && u._afterUpdate(e, u._groups)
    };
    u._update = function (e, t) {
        if (t && "resize" === t.type) {
            var a = l(window).width();
            if (a === n) return;
            n = a
        }
        e ? -1 === i && (i = setTimeout(function () {
            o(t), i = -1
        }, u._throttle)) : o(t)
    }, l(u._applyDataApi), l(window).bind("load", function (e) {
        u._update(!1, e)
    }), l(window).bind("resize orientationchange", function (e) {
        u._update(!0, e)
    })
}), $(function () {
    function e() {
        $(window).width(), $(window).innerHeight()
    }
    e(), $(window).resize(function () {
        e()
    }), $(window).scroll(function () {
        20 < $(this).scrollTop() ? $("body").addClass("sticky") : $("body").removeClass("sticky")
    }), 20 < $(this).scrollTop() ? $("body").addClass("sticky") : $("body").removeClass("sticky")
}), $(function () {
    $(window).scroll(sticky_relocate), sticky_relocate()
});
var dir = 1,
    MIN_TOP = 200,
    MAX_TOP = 350;

function autoscroll() {
    var e = $(window).scrollTop() + dir;
    MAX_TOP <= e ? (e = MAX_TOP, dir = -1) : e <= MIN_TOP && (e = MIN_TOP, dir = 1), $(window).scrollTop(e), window.setTimeout(autoscroll, 100)
}

function videoClose() {
    location.reload()
} ! function (t, a) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return a(t, e)
    }) : "object" == typeof exports ? a(t, require("jquery")) : a(t, t.jQuery || t.Zepto)
}(this, function (e, s) {
    "use strict";
    var t, n, a, o = "popup",
        i = e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.NAMESPACE || o,
        r = s.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function (e) {
            return e + "." + i
        }).join(" "),
        l = s.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function (e) {
            return e + "." + i
        }).join(" "),
        d = s.extend({
            hashTracking: !0,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            closeOnEscape: !0,
            closeOnOutsideClick: !0,
            modifier: ""
        }, e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.DEFAULTS),
        c = {
            CLOSING: "closing",
            CLOSED: "closed",
            OPENING: "opening",
            OPENED: "opened"
        },
        p = "confirmation",
        u = "cancellation",
        h = void 0 !== (t = document.createElement("div").style).animationName || void 0 !== t.WebkitAnimationName || void 0 !== t.MozAnimationName || void 0 !== t.msAnimationName || void 0 !== t.OAnimationName,
        f = /iPad|iPhone|iPod/.test(navigator.platform);

    function m(e) {
        if (h && "none" === e.css("animation-name") && "none" === e.css("-webkit-animation-name") && "none" === e.css("-moz-animation-name") && "none" === e.css("-o-animation-name") && "none" === e.css("-ms-animation-name")) return 0;
        var t, a, n, i, o = e.css("animation-duration") || e.css("-webkit-animation-duration") || e.css("-moz-animation-duration") || e.css("-o-animation-duration") || e.css("-ms-animation-duration") || "0s",
            s = e.css("animation-delay") || e.css("-webkit-animation-delay") || e.css("-moz-animation-delay") || e.css("-o-animation-delay") || e.css("-ms-animation-delay") || "0s",
            r = e.css("animation-iteration-count") || e.css("-webkit-animation-iteration-count") || e.css("-moz-animation-iteration-count") || e.css("-o-animation-iteration-count") || e.css("-ms-animation-iteration-count") || "1";
        for (o = o.split(", "), s = s.split(", "), r = r.split(", "), i = 0, a = o.length, t = Number.NEGATIVE_INFINITY; i < a; i++) t < (n = parseFloat(o[i]) * parseInt(r[i], 10) + parseFloat(s[i])) && (t = n);
        return n
    }

    function v() {
        if (s(document.body).height() <= s(window).height()) return 0;
        var e, t, a = document.createElement("div"),
            n = document.createElement("div");
        return a.style.visibility = "hidden", a.style.width = "100px", document.body.appendChild(a), e = a.offsetWidth, a.style.overflow = "scroll", n.style.width = "100%", a.appendChild(n), t = n.offsetWidth, a.parentNode.removeChild(a), e - t
    }

    function b() {
        if (!f) {
            var e, t, a = s("html"),
                n = w("is-locked");
            a.hasClass(n) && (t = s(document.body), e = parseInt(t.css("padding-right"), 10) - v(), t.css("padding-right", e + "px"), a.removeClass(n))
        }
    }

    function $(e, t, a, n) {
        var i = w("is", t),
            o = [w("is", c.CLOSING), w("is", c.OPENING), w("is", c.CLOSED), w("is", c.OPENED)].join(" ");
        e.$bg.removeClass(o).addClass(i), e.$overlay.removeClass(o).addClass(i), e.$wrapper.removeClass(o).addClass(i), e.$modal.removeClass(o).addClass(i), e.state = t, !a && e.$modal.trigger({
            type: t,
            reason: n
        }, [{
            reason: n
        }])
    }

    function g(e, t, a) {
        var n = 0,
            i = function (e) {
                e.target === this && n++
            },
            o = function (e) {
                e.target === this && 0 == --n && (s.each(["$bg", "$overlay", "$wrapper", "$modal"], function (e, t) {
                    a[t].off(r + " " + l)
                }), t())
            };
        s.each(["$bg", "$overlay", "$wrapper", "$modal"], function (e, t) {
            a[t].on(r, i).on(l, o)
        }), e(), 0 === m(a.$bg) && 0 === m(a.$overlay) && 0 === m(a.$wrapper) && 0 === m(a.$modal) && (s.each(["$bg", "$overlay", "$wrapper", "$modal"], function (e, t) {
            a[t].off(r + " " + l)
        }), t())
    }

    function y(a) {
        a.state !== c.CLOSED && (s.each(["$bg", "$overlay", "$wrapper", "$modal"], function (e, t) {
            a[t].off(r + " " + l)
        }), a.$bg.removeClass(a.settings.modifier), a.$overlay.removeClass(a.settings.modifier).hide(), a.$wrapper.hide(), b(), $(a, c.CLOSED, !0))
    }

    function w() {
        for (var e = i, t = 0; t < arguments.length; ++t) e += "-" + arguments[t];
        return e
    }

    function C() {
        var e, t, a = location.hash.replace("#", "");
        if (a) {
            try {
                t = s('[data-popup-id="' + a + '"]')
            } catch (e) { }
            t && t.length && (e = s[o].lookup[t.data(o)]) && e.settings.hashTracking && e.open()
        } else n && n.state === c.OPENED && n.settings.hashTracking && n.close()
    }

    function k(e, t) {
        var a = s(document.body),
            n = this;
        n.settings = s.extend({}, d, t), n.index = s[o].lookup.push(n) - 1, n.state = c.CLOSED, n.$overlay = s("." + w("overlay")), n.$overlay.length || (n.$overlay = s("<div>").addClass(w("overlay") + " " + w("is", c.CLOSED)).hide(), a.append(n.$overlay)), n.$bg = s("." + w("bg")).addClass(w("is", c.CLOSED)), n.$modal = e.addClass(i + " " + w("is-initialized") + " " + n.settings.modifier + " " + w("is", c.CLOSED)).attr("tabindex", "-1"), n.$wrapper = s("<div>").addClass(w("wrapper") + " " + n.settings.modifier + " " + w("is", c.CLOSED)).hide().append(n.$modal), a.append(n.$wrapper), n.$wrapper.on("click." + i, '[data-popup-action="close"]', function (e) {
            e.preventDefault(), n.close()
        }), n.$wrapper.on("click." + i, '[data-popup-action="cancel"]', function (e) {
            e.preventDefault(), n.$modal.trigger(u), n.settings.closeOnCancel && n.close(u)
        }), n.$wrapper.on("click." + i, '[data-popup-action="confirm"]', function (e) {
            e.preventDefault(), n.$modal.trigger(p), n.settings.closeOnConfirm && n.close(p)
        }), n.$wrapper.on("click." + i, function (e) {
            s(e.target).hasClass(w("wrapper")) && n.settings.closeOnOutsideClick && n.close()
        })
    }
    k.prototype.open = function () {
        var e, t = this;
        t.state !== c.OPENING && t.state !== c.CLOSING && ((e = t.$modal.attr("data-popup-id")) && t.settings.hashTracking && (a = s(window).scrollTop(), location.hash = e), n && n !== t && y(n), n = t, function () {
            if (!f) {
                var e, t, a = s("html"),
                    n = w("is-locked");
                a.hasClass(n) || (t = s(document.body), e = parseInt(t.css("padding-right"), 10) + v(), t.css("padding-right", e + "px"), a.addClass(n))
            }
        }(), t.$bg.addClass(t.settings.modifier), t.$overlay.addClass(t.settings.modifier).show(), t.$wrapper.show().scrollTop(0), t.$modal.focus(), g(function () {
            $(t, c.OPENING)
        }, function () {
            $(t, c.OPENED)
        }, t))
    }, k.prototype.close = function (e) {
        var t = this;
        t.state !== c.OPENING && t.state !== c.CLOSING && (t.settings.hashTracking && t.$modal.attr("data-popup-id") === location.hash.substr(1) && (location.hash = "", s(window).scrollTop(a)), g(function () {
            $(t, c.CLOSING, !1, e)
        }, function () {
            t.$bg.removeClass(t.settings.modifier), t.$overlay.removeClass(t.settings.modifier).hide(), t.$wrapper.hide(), b(), location.reload(), $(t, c.CLOSED, !1, e)
        }, t))
    }, k.prototype.getState = function () {
        return this.state
    }, k.prototype.destroy = function () {
        var e = s[o].lookup;
        y(this), this.$wrapper.remove(), delete e[this.index], 0 === s.grep(e, function (e) {
            return !!e
        }).length && (this.$overlay.remove(), this.$bg.removeClass(w("is", c.CLOSING) + " " + w("is", c.OPENING) + " " + w("is", c.CLOSED) + " " + w("is", c.OPENED)))
    }, s[o] = {
        lookup: []
    }, s.fn[o] = function (a) {
        var n, i;
        return this.each(function (e, t) {
            null == (i = s(t)).data(o) ? (n = new k(i, a), i.data(o, n.index), n.settings.hashTracking && i.attr("data-popup-id") === location.hash.substr(1) && n.open()) : n = s[o].lookup[i.data(o)]
        }), n
    }, s(document).ready(function () {
        s(document).on("click", "[data-popup-target]", function (e) {
            e.preventDefault();
            var t = e.currentTarget.getAttribute("data-popup-target"),
                a = s('[data-popup-id="' + t + '"]');
            s[o].lookup[a.data(o)].open()
        }), s(document).find("." + i).each(function (e, t) {
            var a = s(t),
                n = a.data(o + "-options");
            n ? ("string" == typeof n || n instanceof String) && (n = function (e) {
                var t, a, n, i, o = {};
                for (i = 0, a = (t = (e = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",")).split(",")).length; i < a; i++) t[i] = t[i].split(":"), ("string" == typeof (n = t[i][1]) || n instanceof String) && (n = "true" === n || "false" !== n && n), ("string" == typeof n || n instanceof String) && (n = isNaN(n) ? n : +n), o[t[i][0]] = n;
                return o
            }(n)) : n = {}, a[o](n)
        }), s(document).on("keydown." + i, function (e) {
            n && n.settings.closeOnEscape && n.state === c.OPENED && 27 === e.keyCode && n.close()
        }), s(window).on("hashchange." + i, C)
    })
}), $(document).ready(function () {
    $(":input", "form").not(":button, :submit, :reset, :hidden, :checkbox").val("").prop("checked", !1).prop("selected", !1)
}), $(document).ready(function () {
    $("a").attr("data-focus", "none"), $("button").attr("data-focus", "none"), $("a").removeClass("focus-h");
    var t = $("#nth-menuanchor-open"),
        a = $("#primary-nav > ul > li:not(#nth-menuanchor-open)");
    $("html").removeClass("no-js"), t.on("click", function () {
        return $(this).hasClass("nth-open") ? (a.removeClass("nth-show-menu"), $(this).removeClass("nth-open"), $(this).attr("aria-expanded", !1)) : (a.addClass("nth-show-menu"), $(this).addClass("nth-open"), $(this).attr("aria-expanded", !0)), !1
    }), $("a").on("keyup change", function (e) {
        $("a").attr("data-focus", "none"), $("a").removeClass("focus-h"), 9 === e.keyCode && $(this).is(":focus") && ($(this).attr("data-focus", "focused"), $(this).addClass("focus-h")), e.shiftKey && $(this).is(":focus") && ($(this).attr("data-focus", "focused"), $(this).removeClass("focus-h"))
    }), $("button").on("keyup change", function (e) {
        $("button").attr("data-focus", "none"), 9 === e.keyCode && $(this).is(":focus") && $(this).attr("data-focus", "focused")
    }), $(document).on("keydown", function (e) {
        27 === e.keyCode && (a.removeClass("nth-show-menu"), t.removeClass("nth-open"), t.attr("aria-expanded", !1)), 9 === e.keyCode && $(this).addClass("yes")
    }), $('li:has("ul") > a').addClass("menu-hover"), $("li.nav-dropdown").hover(function () {
        $(this).children("ul.first").after('<span class="uparrow"></span>')
    }, function () {
        $(this).children("ul.first").nextAll().remove()
    }), $("li:not(:has(ul))").on("mouseover keyup click mouseleave", function (e) {
        16 === e.keyCode | 9 === e.keyCode | "mouseover" === e.type && ($(".nav-dropdown").children("ul").removeClass("nth-show-menu").addClass("nth-hide-menu"), $(".menu-hover").attr("aria-expanded", !1))
    }), $('li:has("ul")').on("mouseover keyup click mouseleave", function (e) {
        if (9 === e.keyCode | "mouseover" === e.type && ($(this).children("ul").removeClass("nth-hide-menu").addClass("nth-show-menu"), $(this).children("a").attr("aria-expanded", !0)), "mouseleave" === e.type && ($(this).children("ul").removeClass("nth-show-menu").addClass("nth-hide-menu"), $(this).children("a").attr("aria-expanded", !1)), "click" === e.type) return $(this).children("a").hasClass("nth-openSubMenu") ? ($(this).children("a").removeClass("nth-openSubMenu").attr("aria-expanded", !1), $(this).children("ul").removeClass("nth-show-menu").addClass("nth-hide-menu")) : ($(this).children("a").addClass("nth-openSubMenu").attr("aria-expanded", !0), $(this).children("ul").removeClass("nth-hide-menu").addClass("nth-show-menu")), !0
    }), $("li > ul > li:last-child > a").on("keydown", function (e) {
        9 == e.keyCode && 0 == $(this).parent("li").children("ul").length && ($(this).parent("li").parent("ul").removeClass("nth-show-menu").addClass("nth-hide-menu"), $(this).parent("li").parent("ul").prev("a").attr("aria-expanded", !1), 0 < $(this).parent("li").parent("ul").parent("li").parent("ul").parent("li").children("ul").length && $(this).parent("li").parent("ul").parent("li").is(":last-child") && ($(this).parent("li").parent("ul").parent("li").parent("ul").removeClass("nth-show-menu").addClass("nth-hide-menu"), $(this).parent("li").parent("ul").prev("a").attr("aria-expanded", !0)))
    })
}), $(document).ready(function () {
    $(this).val();
    if ($("#jsb-position").change(function () {
            var e = $("#jsb-position option:selected").text();
            0 < $("#jsb-position").val().length ? ($("#filter-wrap").removeClass("hide1"), $("#filter-1").remove(), $("#filter-wrap").append('<div class="filter-list l-align-left" id="filter-1"><a href="#" class="filter-item" id="filter-item-1">' + e + "</a></div>")) : ($("#filter-wrap").addClass("hide1"), $("#filter-1").remove())
    }), $("#jsb-location").change(function () {
            var e = $("#jsb-location option:selected").text();
            0 < $("#jsb-location").val().length ? ($("#filter-wrap").removeClass("hide2"), $("#filter-2").remove(), $("#filter-wrap").append('<div class="filter-list l-align-left" id="filter-2"><a href="#" class="filter-item" id="filter-item-2">' + e + "</a></div>")) : ($("#filter-wrap").addClass("hide2"), $("#filter-2").remove())
    }), $("#clear-filters").click(function () {
            $("#filter-1").remove(), $("#filter-2").remove(), $("#filter-wrap").addClass("hide1").addClass("hide2"), $("#jsb-position").val("").trigger("change"), $("#jsb-location").val("").trigger("change")
    }), $(document).on("click", "#filter-item-1", function (e) {
            e.preventDefault(), $(this).remove(), $("#filter-wrap").addClass("hide1"), $("#jsb-position").val("").trigger("change")
    }), $(document).on("click", "#filter-item-2", function (e) {
            e.preventDefault(), $("#filter-2").remove(), $("#filter-wrap").addClass("hide2"), $("#jsb-location").val("").trigger("change")
    }), $("#page-nav").length) $("#page-nav").offset().top;
    $(window).scroll(function () {
        500 <= $(this).scrollTop() ? ($("#page-nav").addClass("fixed"), $(".logo-anim").addClass("move")) : ($("#page-nav").removeClass("fixed"), $(".logo-anim").removeClass("move"))
    })
}), $(document).on("ready", function () {
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        asNavFor: ".slider-nav"
    }), $(".slider-nav").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: !1,
        asNavFor: ".slider-for",
        dots: !0,
        centerMode: !0,
        centerPadding: "20px",
        focusOnSelect: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0
            }
        }]
    }), $(".single-item-rtl").slick({
        arrows: !0,
        rtl: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0
            }
        }]
    })
}), $(document).ready(function () {
    $("#careers-question").validate({
        messages: {
            first_name: {
                required: !0,
                minlength: 3
            },
            last_name: {
                required: !0,
                minlength: 3
            },
            reason_for_contact: {
                required: !0
            },
            email: {
                required: !0
            },
            message: {
                required: !0,
                minlength: 5
            }
        },
        messages: {
            first_name: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 3 characters"
            },
            last_name: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 3 characters"
            },
            reason_for_contact: "Please select your reason for contact",
            email: {
                required: "Please enter a valid email address"
            },
            message: {
                required: "Please enter your question",
                minlength: "Your question must consist of at least 5 characters"
            }
        }
    }), $("#careers-question").submit(function () {
        $(".select-style-light").after($("#reason-for-contact-error"))
    }), $("#search-form :input").focus(function () {
        $(this).parent().addClass("valid-group").children("label.label-focus").removeClass("label-focus").addClass("label-blur")
    }), $("#search-form :input").blur(function () {
        $("#jsb-keywords").val().length < 1 ? $(this).prev().removeClass("label-blur").addClass("label-focus") : $(this).prev().removeClass("label-focus").addClass("label-blur")
    }), $("#careers-question :input").focus(function () {
        $(this).parent().addClass("valid-group").children("label.label-focus").removeClass("label-focus").addClass("label-blur")
    }), $("#careers-question :input").blur(function () {
        $(this).next("label.label-blur").removeClass("label-blur").addClass("label-focus")
    });
    var t = $("#secondary-nav"),
        a = $(".last-line"),
        n = $("#page-nav .l-site-width");

    function i() {
        $(window).width() < 829 ? a.append(t) : n.append(t)
    }
    i(), $(window).resize(function () {
        i()
    });
    var o = $(".box"),
        s = ".over";
    o.each(function () {
        o.hover(function () {
            $(this).attr("aria-expanded", "true"), $(s).attr("aria-hidden", "false")
        }, function () {
            $(this).attr("aria-expanded", "false"), $(s).attr("aria-hidden", "true"), $(this).siblings().attr("aria-expanded", "false"), $(s).siblings().attr("aria-hidden", "true")
        })
    }), o.on("keyup change", function (e) {
        o.attr("aria-expanded", "false"), 9 === e.keyCode && $(this).is(":focus") && ("false" == $(this).attr("aria-expanded") ? ($(this).attr("aria-expanded", "true"), $(s).attr("aria-hidden", "false")) : ($(this).attr("aria-expanded", "false"), $(s).attr("aria-hidden", "true"), $(this).siblings().attr("aria-expanded", "false"), $(s).siblings().attr("aria-hidden", "true")))
    }), o.bind("touchstart", function () {
        return e.preventDefault(), $(this).attr("aria-expanded", "true"), $(s).attr("aria-hidden", "false"), !0
    }).bind("touchend", function () {
        return $(this).attr("aria-expanded", "false"), $(s).attr("aria-hidden", "true"), $(this).siblings().attr("aria-expanded", "false"), $(s).siblings().attr("aria-hidden", "true"), !1
    });
    var r = $(".anim-pic"),
        l = $(window);
    l.on("scroll resize", function () {
        var e = l.height(),
            n = l.scrollTop(),
            i = n + e;
        $.each(r, function () {
            var e = $(this),
                t = e.outerHeight();
            if (e.length) var a = e.offset().top;
            n <= a + t && a <= i ? e.addClass("in-view") : e.removeClass("in-view")
        })
    }), l.trigger("scroll")
}), $(document).ready(function () {
    console.log("DOM is ready"), $('nav a[href^="#"]').click(function () {
        var e = $(this.hash);
        return 0 == e.length && (e = $('a[name="' + this.hash.substr(1) + '"]')), 0 == e.length && (e = $("html")), $("html, body").animate({
            scrollTop: e.offset().top
        }, 500), !1
    }), $(window).on("load", function () {
        var e = new TimelineMax({
            delay: .3
        });
        e.to(".inner-banner .anim-pic", .4, {
            opacity: 1
        }).to(".l-banner-h-width #b-4", .9, {
            bottom: 0,
            opacity: 1,
            ease: Power2.easeOut
        }, "0.3").to(".l-banner-h-width #b-1", 1.1, {
            bottom: 22,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=0.8").to(".l-banner-h-width #b-6", 1, {
            bottom: 0,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=1.0").to(".l-banner-h-width #b-7", 1, {
            bottom: 11,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=1.0").to(".l-banner-h-width #b-3", 2.5, {
            bottom: 92,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=2").to(".l-banner-h-width #b-3", 3.5, {
            bottom: 72,
            opacity: 1,
            ease: Power0.ease
        }).to(".l-banner-h-width #b-2", 2, {
            bottom: 7,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=5.0").to(".l-banner-h-width #b-5", 2.4, {
            bottom: 20,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=5.0");
        var t = new TimelineMax({
            delay: .3
        });
        t.to(".inner-banner .anim-pic", .4, {
            opacity: 1
        }).to(".l-banner-v-width #b-1", .9, {
            bottom: 160,
            opacity: 1,
            ease: Power2.easeOut
        }, "0.3").to(".l-banner-v-width #b-2", .9, {
            bottom: 207,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=0.6").to(".l-banner-v-width #b-3", 1, {
            bottom: 178,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=0.5").to(".l-banner-v-width #b-4", 1.2, {
            bottom: 75,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=1.8").to(".l-banner-v-width #b-4", 1.5, {
            bottom: 0,
            opacity: 1,
            ease: Power0.ease
        }, "-=1.1").to(".l-banner-v-width #b-6", 1, {
            bottom: 53,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=1.9").to(".l-banner-v-width #b-6", 1.5, {
            bottom: 3,
            opacity: 1,
            ease: Power0.ease
        }, "-=1.0").to(".l-banner-v-width #b-5", 1.3, {
            bottom: 30,
            opacity: 1,
            ease: Power2.easeOut
        }, "-=2.7"), e.restart(), t.restart()
    })
});
var iScrollPos = 0,
    $bannerPic = $(".inner-banner .anim-pic"),
    $anaPic = $(".alter-content .anim-pic");
$(window).scroll(function () {
    var e = $(this).scrollTop();
    $(document);
    iScrollPos < e ? $anaPic.addClass("scroll-down").removeClass("scroll-up") : $anaPic.removeClass("scroll-down").addClass("scroll-up"), iScrollPos = e
}), $(".panel-content").hide(), $(".accordion").attr({
    role: "tablist",
    multiselectable: "true"
}), $(".panel-content").attr("id", function (e) {
    return "panel-" + e
}), $(".panel-content").attr("aria-labelledby", function (e) {
    return "control-panel-" + e
}), $(".panel-content").attr("aria-hidden", "true"), $(".accordion .panel-content").attr("role", "tabpanel"), $(".panel-title").each(function (e) {
    $target = $(this).parent(".acc-header-wrap").next(".panel-content")[0].id, $link = $("<a>", {
        href: "#" + $target,
        "aria-expanded": "false",
        "aria-controls": $target,
        id: "control-" + $target,
        class: "show-content"
    }), $(this).wrapInner($link)
}), $(".cta-btn .panel-title ul").append('<li class="arrow-row"><span class="arrow-toggle"><span class="t-circle t-toggle-circle"></span><span class="t-arrow-down t-toggle-arrow-down"></span></span></li>'), $(".no-cta-btn .panel-title a").after('<span class="t-circle t-toggle-circle"></span><span class="t-arrow-down t-toggle-arrow-down"></span>'), $(".panel-title a").click(function () {
    return "false" == $(this).attr("aria-expanded") ? ($(this).parents(".accordion").find("[aria-expanded=true]").attr("aria-expanded", !1).removeClass("active").parent().parent(".acc-header-wrap").next(".panel-content").slideUp(200).attr("aria-hidden", "true"), $(this).attr("aria-expanded", !0).addClass("active").parent().parent(".acc-header-wrap").next(".panel-content").slideDown(200).attr("aria-hidden", "false")) : $(this).attr("aria-expanded", !1).removeClass("active").parent().parent(".acc-header-wrap").next(".panel-content").slideUp(200).attr("aria-hidden", "true"), !1
});
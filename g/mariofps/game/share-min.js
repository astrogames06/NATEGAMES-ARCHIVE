function reddit() { return window.location = "//www.reddit.com/submit?url=" + encodeURIComponent(window.location), !1 } function facebook() { var n = "http://www.facebook.com/sharer/sharer.php?u=" + window.location.href; window.open(n, "sharer", "toolbar=0,status=0,width=625,height=435") } function twitter() { var n = "https://twitter.com/intent/tweet?text=" + document.title + "!&url=" + window.location.href; window.open(n, "sharer", "toolbar=0,status=0,width=550,height=420") } function leftClick(n) { return window.focus(), n || (n = event), typeof n.which == "undefined" ? n.button == 1 : n.which == 1 || n.button == 0 } function nrc(n) { if (leftClick(n) == !1) return ce(n) } function cp(n) { n || (n = event), n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "undefined" && (n.cancelBubble = !0) } function ce(n) { return n || (n = event), typeof n.preventDefault != "undefined" ? n.preventDefault() : typeof n.cancelBubble != "undefined" && (n.returnValue = 0, n.cancelBubble = !0), !1 } typeof document.onselectstart != "undefined" && (document.onselectstart = ce), typeof document.ondragstart != "undefined" && (document.ondragstart = ce), function () { var n = document.createElement("script"), t; n.type = "text/javascript", n.async = !0, n.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//platform.stumbleupon.com/1/widgets.js", t = document.getElementsByTagName("script")[0], t.parentNode.insertBefore(n, t) }()
! function(t, e, n, o, i, a, s) {
	if (null == n.doctype || "HTML" != n.documentElement.nodeName || e.innerWidth <= 2 || e.innerHeight <= 2) return;
	const l = i.local;
	let r, d, g = !1,
		c = !1,
		h = !1,
		p = !1;
	const u = t.isProbablyReaderable,
		m = t.Readability,
		f = a.id,
		y = "tint-f3a23x80",
		v = "ruler-f3a23x80",
		b = `\n    <div id="${v}"></div>\n  `,
		$ = "ruler-top-f3a23x80",
		w = `\n    <div id="${$}"></div>\n  `,
		C = "ruler-bottom-f3a23x80",
		x = `\n    <div id="${C}"></div>\n  `;
	let k = 0,
		T = [],
		S = 0,
		E = 0;
	const P = a.getURL("html/sidebar.html"),
		I = "sidebar-iframe-f3a23x80",
		R = "widget-f3a23x80",
		M = `\n    <div>\n      <iframe id="${I}" src="${P}"></iframe>\n\n      <div id="${R}" style="--widget-display:none;">\n        <div class="reader-view toggle-btn widget-icon collapsable"></div>\n        <div class="dictionary toggle-btn widget-icon collapsable"></div>\n        <div class="mute-sounds toggle-btn widget-icon collapsable"></div>\n        <div class="tts-highlight toggle-btn widget-icon collapsable"></div>\n        <div class="tts-previous tts-btn widget-icon collapsable"></div>\n        <div class="tts-play tts-btn widget-icon collapsable"></div>\n        <div class="tts-pause tts-btn widget-icon collapsable"></div>\n        <div class="tts-stop tts-btn widget-icon collapsable"></div>\n        <div class="tts-next tts-btn widget-icon collapsable"></div>\n        <div class="main-icon widget-icon"></div>\n      </div>\n\n      <div class="backgroud-overlay"></div>\n\n      <div id="reader-view">\n        <div class="bg">\n          <h2 class="title"></h2>\n          <pre class="content"></pre>\n        </div>\n        <div class="close-btn"></div>\n      </div>\n    </div>\n  `,
		H = "tooltip-tag-f3a23x80",
		V = `\n  <div id="${H}"></div>\n  `;

	function _() {
		r && function t() {
			l.get(["widgetIconTop", "widgetIconRight", "config", "showWidget"], (t => {
				t.widgetIconTop && t.widgetIconRight ? (n.documentElement.style.setProperty("--widget-top", t.widgetIconTop), n.documentElement.style.setProperty("--widget-right", t.widgetIconRight)) : n.documentElement.style.setProperty("--widget-bottom", "20px");
				(t.config?.isOn ?? !0) || (t.config = {}, B(!1), z(!1));
				const i = t.config?.fontFamily ?? "",
					s = t.config?.ttsHighlight ?? !1,
					l = t.config?.boldText ?? !1,
					d = t.config?.italicText ?? !1,
					g = t.config?.fontColor || "",
					c = t.config?.lineSpacing || "",
					h = t.config?.wordSpacing || "",
					u = t.config?.letterSpacing || "",
					m = t.config?.screenTintColor ?? "",
					f = t.config?.screenTintBrightness ?? 55,
					b = t.config?.maskMode,
					w = t.config?.maskHeight ?? 75,
					x = t.config?.maskBrightness ?? 30,
					T = t.config?.maskColor || _maskColors[0],
					S = t.config?.scaleValue ?? "",
					E = t.config?.alignText ?? "",
					P = t.showWidget ?? !0,
					I = t.config?.pauseAnim ?? !1,
					M = t.config?.hideImages ?? !1,
					H = t.config?.biggerCursor || "",
					V = t.config?.contrast ?? "",
					_ = t.config?.saturation ?? "",
					D = t.config?.highlightLinks ?? !1,
					O = t.config?.muteSounds ?? !1;
				p = t.config?.dictionary ?? !1, o(`#${R} > .dictionary`).toggleClass("active", p), o(`#${R} > .mute-sounds`).toggleClass("active", O),
					function U(t) {
						if (!r) return;
						for (; r.cssRules.length > 0;) r.deleteRule(0);
						o("html").removeClass(`${y}`), t && A(!1), t && F(!1),
							function e() {
								o(".has-bg-img").removeClass("has-bg-img")
							}()
					}(!0), o("body").toggleClass("tts-highlight-status", s), o(`#${R} > .tts-highlight`).toggleClass("active", s), s && smoothScrollTo(o(".read-aloud-highlight")), r.insertRule(`* {\n              ${i?`font-family: ${i}, OpenDyslexic !important;`:""}\n              ${l?"font-weight: bold !important;":""}\n              ${d?"font-style: italic !important;":""}\n              ${g?`color: ${g} !important;`:""}\n              ${c?`line-height: ${c} !important;`:""}\n              ${h?`word-spacing: ${h} !important;`:""}\n              ${u?`letter-spacing: ${u} !important;`:""}\n          }`);
				let W, N, Y = "",
					j = "";
				switch (V) {
					case "light":
						Y = "background-color: white !important; color: black !important;";
						break;
					case "dark":
						Y = "background-color: black !important; color: white !important;";
						break;
					case "invert":
						Y = "invert(100%)";
						break
				}
				switch (_) {
					case "low":
						j = "saturate(0.5)";
						break;
					case "high":
						j = "saturate(3)";
						break;
					case "desaturate":
						j = "saturate(0)";
						break
				}
				if ((Y || j) && (r.insertRule(`html {\n            filter: ${"invert"===V?Y:""} ${j} !important;\n          }`), r.insertRule(`*:not(img):not(iframe):not(video):not(audio):not(#${v}):not(#${$}):not(#${C}):not(.${y}) {\n            ${"invert"!==V?Y:""}\n          }`)), n.documentElement.style.removeProperty("--adhd-tint-color"), m) {
					const t = Math.round(2.55 * f).toString(16);
					n.documentElement.style.setProperty("--adhd-tint-color", `${m}${t}`), o("html").addClass(`${y}`), r.insertRule(`html.${y}:after {\n              background: var(--adhd-tint-color, #ffa500${t}) !important;\n            }`)
				}
				"reversed" === b ? A(w, x) : "normal" === b && F(w, x), T ? n.documentElement.style.setProperty("--adhd-ruler-color", T + Math.floor(x / 100 * 256).toString(16)) : n.documentElement.style.removeProperty("--adhd-ruler-color"), r.insertRule(`\n          * {\n            ${S?`font-size: ${S} !important;`:""}\n          }\n        `), E && r.insertRule(`\n                * {\n                  text-align: ${E} !important;\n                }\n              `), L(k), o(`#${R}`).css("--widget-display", P ? "flex" : "none"), I && r.insertRule("\n          * {\n            -webkit-animation-play-state: paused !important;\n            -moz-animation-play-state: paused !important;\n            -o-animation-play-state: paused; !important;\n            animation-play-state: paused !important;\n\n            transition-timing-function: step-end !important;\n            transition-duration: 0s !important;\n            animation-timing-function: step-end !important;\n            animation-iteration-count: 1 !important;\n            animation-duration: 0s !important;\n          }\n        "), M && (r.insertRule(`\n          picture,img,canvas,svg,video,.html5-video-player,.has-bg-img:not(#${R} *) {\n            opacity: 0 !important;\n          }\n        `), function X() {
					o("*").filter((function() {
						return this.currentStyle ? "none" !== this.currentStyle.backgroundImage : e.getComputedStyle ? "none" !== n.defaultView.getComputedStyle(this, null).getPropertyValue("background-image") : void 0
					})).each((function() {
						o(this).text() || o(this).html() || o(this).addClass("has-bg-img")
					}))
				}()), "black" === H ? (W = a.getURL("res/cursors/cursor_black.svg"), N = a.getURL("res/cursors/cursor_black_select.svg")) : "white" === H && (W = a.getURL("res/cursors/cursor_white.svg"), N = a.getURL("res/cursors/cursor_white_select.svg")), W && N && (r.insertRule(`* {\n              cursor: url("${W}"), auto !important;\n            }`), r.insertRule(`a, a *, button, #${R} {\n              cursor: url("${N}") 24 0, auto !important;\n            }`)), D && r.insertRule("a {\n            text-decoration: underline !important;\n            border: 1px solid black !important;\n            border-radius: 4px;\n          }")
			}))
		}()
	}

	function L(t) {
		const e = Math.min(n.documentElement.scrollHeight, n.documentElement.offsetHeight, n.documentElement.clientHeight);
		let i = t,
			a = e;
		if (!isNaN(parseInt(n.documentElement.style.zoom)) && "100%" !== n.documentElement.style.zoom && (i = Math.round(100 * t / parseInt(n.documentElement.style.zoom)), a = Math.round(100 * a / parseInt(n.documentElement.style.zoom))), n.getElementById(v)) {
			const s = n.getElementById(v);
			let l = Math.max(e, a);
			if (n.location.href.match(/google.com\/search/) && o("html").css("zoom") && (l = Math.min(e, a)), Math.max(t, i) < s.offsetHeight / 2) s.style.top = 0;
			else if (i > l - s.offsetHeight / 2) {
				const t = l - s.offsetHeight;
				s.style.top = `${t}px`
			} else {
				const t = Math.round(i - s.offsetHeight / 2);
				s.style.top = Math.max(t, 0) + "px"
			}
		} else if (n.getElementById($)) {
			const s = n.getElementById($),
				l = n.getElementById(C),
				r = parseInt(s.dataset.rulerValue);
			let d;
			d = n.location.href.match(/google.com\/search/) && o("html").css("zoom") ? Math.min(e, a) : Math.max(e, a), Math.max(t, i) < r / 2 ? (s.style.height = "0px", l.style.height = d - r + "px") : i > d - r / 2 ? (l.style.height = "0px", s.style.height = d - r + "px") : (s.style.height = Math.floor(i - r / 2) + "px", l.style.height = Math.min(d - i - r / 2, d - r) + "px")
		}
	}

	function B(t) {
		if (t) {
			const e = n.cloneNode(!0);
			if (u(e)) {
				c = t, o("body").toggleClass("reader-view-on", t);
				let n = new m(e, {
					keepClasses: !0
				}).parse();
				o("#reader-view > .bg > .title").text(n.title), o("#reader-view > .bg > .content").append(n.content), o(`#${R} > .reader-view`).addClass("active")
			}
		} else c = t, o("body").toggleClass("reader-view-on", t), o("#reader-view > .bg > .content").empty(), o(`#${R} > .reader-view`).removeClass("active")
	}

	function z(t) {
		h = t, h ? O(!0) : (o(`#${R}`).removeClass("playing tts-on"), W(), j(!0))
	}

	function D() {
		o(".read-aloud-highlight").removeClass("read-aloud-highlight")
	}

	function O(t) {
		if (o(`#${R}`).addClass("playing tts-on"), h) {
			if (!T || 0 === T.length) {
				j(!0);
				const t = getTextNodes();
				for (var e = [], n = 0; n < t.length; n++) e.push.apply(e, findHeadingsFor(t[n], t[n - 1])), e.push(t[n]);
				T = e.map(getTexts)
			}
			T && 0 !== T.length ? (U(), t && delay(0).then((() => {
				W()
			})).then((() => delay(1e3))).then((() => {
				O()
			}))) : z(!1)
		} else z(!0)
	}

	function U(t) {
		if (TtsPlayer.isTtsAvailable() && T && T.length > 0)
			if (!t && TtsPlayer.isPaused()) {
				o(`#${R}`).addClass("playing tts-on"), TtsPlayer.resume(), D();
				const t = o(`*[data-read-aloud-highlight-index="${S}-${E}"]`);
				o("body").hasClass("tts-highlight-status") && smoothScrollTo(t), t.addClass("read-aloud-highlight"), delay(100).then((() => {
					TtsPlayer.isPaused() && (j(!0), U(!0))
				}))
			} else if (!t && o(`#${R}`).addClass("playing tts-on"), TtsPlayer.isSpeaking() && j(!0), S === T.length) S = 0, E = 0, o(`#${R}`).removeClass("playing tts-on"), j(!0);
		else {
			D();
			const t = o(`*[data-read-aloud-highlight-index="${S}-${E}"]`);
			o("body").hasClass("tts-highlight-status") && smoothScrollTo(t), t.addClass("read-aloud-highlight"),
				function e(t) {
					l.get(["config"], (e => {
						let n;
						switch (e.config?.readingSpeed || "1") {
							case "2":
								n = .75;
								break;
							case "3":
								n = 1.2;
								break;
							default:
								n = .9
						}
						t(n)
					}))
				}((t => {
					const e = new SpeechSynthesisUtterance(T[S][E]);
					e.rate = t, e.onend = e.onerror = () => {
						h && (E === T[S].length - 1 ? (S++, E = 0) : E++, U())
					}, TtsPlayer.speak(e)
				}))
		}
	}

	function W() {
		D(), o(`#${R}`).removeClass("playing"), TtsPlayer.pause()
	}

	function N() {
		h && (E > 0 ? E-- : S > 0 && (S--, E = T[S].length - 1), j(!0), U())
	}

	function Y() {
		h && (E < T[S].length - 1 ? E++ : S < T.length - 1 && (S++, E = 0), j(!0), U())
	}

	function j(t) {
		D(), h && TtsPlayer.cancel(t)
	}

	function A(t, e) {
		(t = t || 0) ? (o(`#${$}`).remove(), o(`#${C}`).remove(), 0 === o(`#${v}`).length && o("body").append(b), o(`#${v}`).css("height", t + "px"), o(`#${v}`).css("background-color", `var(--adhd-ruler-color, rgba(0, 0, 0, ${e/100}))`), L(k)) : o(`#${v}`).remove()
	}

	function F(t, e) {
		(t = t || 0) ? (o(`#${v}`).remove(), 0 === o(`#${$}`).length && o("body").append(w), 0 === o(`#${C}`).length && o("body").append(x), o(`#${$}`).attr("data-ruler-value", t), o(`#${$}`).css("background-color", `var(--adhd-ruler-color, rgba(0, 0, 0, ${e/100}))`), o(`#${C}`).css("background-color", `var(--adhd-ruler-color, rgba(0, 0, 0, ${e/100}))`), o(`#${$}`).css("height", "0"), o(`#${C}`).css("height", Math.min(n.documentElement.scrollHeight, n.documentElement.offsetHeight, n.documentElement.clientHeight) - t + "px"), L(k)) : (o(`#${$}`).remove(), o(`#${C}`).remove())
	}

	function X() {
		o(`#${I}`).removeClass("showing")
	}
	o(n).ready((() => {
		if (!g) {
			g = !0, TtsPlayer.isSpeaking() && j(!0), o(n.body).append(V), d = tippy(`#${H}`, {
				offset: [0, 20],
				trigger: "manual",
				allowHTML: !0,
				appendTo: "parent"
			}), "object" == typeof d && d.length > 0 && (d = d[0]), o("head").append(`<style title="${f}">`), a.sendMessage({
				m: "getMyInfo"
			}, (t => {
				a.lastError;
				if (0 === t.frameId) {
					o("body > header").length > 0 ? o("body > header").append(M) : o("body").append(M), _();
					const t = () => {
						n.documentElement.style.removeProperty("--widget-bottom")
					};
					! function i(t, a, s, l, r) {
						if (!t) return;
						let d = 0,
							g = 0,
							c = 0,
							h = 0;

						function p(i) {
							(i = i || e.event).preventDefault(), c = i.clientX, h = i.clientY, o(t).removeData("drag-pos-top", "drag-pos-right"), n.onmouseup = m, n.onmousemove = u, o(t).data("start-pos-top", n.documentElement.style.getPropertyValue("--widget-top")), o(t).data("start-pos-right", n.documentElement.style.getPropertyValue("--widget-right"))
						}

						function u(n) {
							(n = n || e.event).preventDefault();
							const i = n.clientX,
								s = n.clientY;
							if (i > 20 && s > 20 && i < e.innerWidth - 20 && s < e.innerHeight - 20 && c - i != 0) {
								d = c - i, g = h - s, c = i, h = s;
								const n = t.offsetTop - g + "px";
								let l = parseInt(r()) + d + "px";
								parseInt(l) > e.innerWidth - 20 && (l = e.innerWidth - 20 + "px"), o(t).data("drag-pos-top", n), o(t).data("drag-pos-right", l), a && a(o(t).data("drag-pos-top"), o(t).data("drag-pos-right")), o(t).data("start-pos-top") || (o(t).data("start-pos-top", o(t).data("drag-pos-top")), o(t).data("start-pos-right", o(t).data("drag-pos-right")))
							}
						}

						function m(e) {
							e.preventDefault(), n.onmouseup = null, n.onmousemove = null, s && o(t).data("drag-pos-top") && o(t).data("drag-pos-right") && (Math.abs(parseInt(o(t).data("drag-pos-top")) - parseInt(o(t).data("start-pos-top"))) > 3 || Math.abs(parseInt(o(t).data("drag-pos-right")) - parseInt(o(t).data("start-pos-right"))) > 3) ? s(o(t).data("drag-pos-top"), o(t).data("drag-pos-right")) : l && l(e)
						}
						t.onmousedown = p
					}(n.getElementById(R), ((e, o) => {
						n.documentElement.style.setProperty("--widget-top", e), n.documentElement.style.setProperty("--widget-right", o), t()
					}), ((e, n) => {
						l.set({
							widgetIconTop: e,
							widgetIconRight: n
						}), t()
					}), (t => {
						const e = o(t.target);
						e.hasClass("main-icon") ? o(`#${I}`).addClass("showing") : e.hasClass("tts-highlight") ? updateConfigValue(l, "ttsHighlight", void 0, void 0, !0) : e.hasClass("tts-previous") ? N() : e.hasClass("tts-play") ? O() : e.hasClass("tts-pause") ? W() : e.hasClass("tts-stop") ? z(!1) : e.hasClass("tts-next") ? Y() : e.hasClass("reader-view") ? B(!c) : e.hasClass("dictionary") ? updateConfigValue(l, "dictionary", void 0, void 0, !0) : e.hasClass("mute-sounds") && updateConfigValue(l, "muteSounds", void 0, void 0, !0)
					}), (() => o(n.body).css("--widget-right") || 20))
				}
			}));
			for (let t = 0; t < e.document.styleSheets.length; t++)
				if (e.document.styleSheets[t].title === f) {
					r = e.document.styleSheets[t];
					break
				} r && _(), o("body").mousemove(o.throttle(20, (function t(e) {
				if (e.clientY === k) return;
				k = e.clientY, L(e.clientY)
			})))
		}
	})), e.onunload = () => {
		z(!1)
	}, i.onChanged.addListener(o.throttle(100, (function q(t) {
		if (_(), void 0 !== t.config) {
			!1 !== t.config.newValue?.isOn ? t.config.newValue?.readingSpeed !== t.config.oldValue?.readingSpeed && (TtsPlayer.isPaused() ? j(!1) : TtsPlayer.isSpeaking() && (N(), D(), delay(50).then((() => {
				Y()
			})))) : (B(!1), z(!1), W())
		}
	}))), a.onMessage.addListener(((t, e, n) => {
		"closeSidebar" === t.m ? (X(), n && n()) : "getReaderViewStatus" === t.m ? n({
			status: c
		}) : "updateReaderView" === t.m ? (n({
			success: !0
		}), B(t.status)) : "getTextToSpeedStatus" === t.m ? n({
			status: h
		}) : "updateTextToSpeech" === t.m && (n({
			success: !0
		}), z(t.status))
	})), o(n).mouseup((function G(t) {
		const e = o(`#${I}`),
			i = o(`#${R}`);
		"mouseup" === t.type && (!async function a() {
			if (p) {
				await delay(100);
				const t = n.getSelection(),
					e = t.toString().trim();
				if (e.match(/^\w+$/) && d) {
					const o = t.getRangeAt(0).getBoundingClientRect(),
						i = {
							x: o.x + o.width / 2,
							y: o.y
						};
					n.documentElement.style.setProperty("--tooltip-tag-top", i.y + 4 + "px"), n.documentElement.style.setProperty("--tooltip-tag-left", i.x + "px"), d.show(), d.setProps({
							content: `${s.getMessage("loading")}...`
						}),
						function t(e) {
							fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e}`).then((t => t.json())).then((t => {
								if ("object" == typeof t && t.length > 0 && (t = t[0]), t.word) {
									const e = t.meanings.find((t => t.definitions.length > 0 && t.definitions[0].definition));
									return `<strong>${t.word}</strong> (${e.partOfSpeech??""})<br>${e.definitions[0].definition}`
								}
								return t.title || s.getMessage("no_definition_found")
							})).catch((t => s.getMessage("failed_to_load_definition"))).then((t => {
								d.setProps({
									content: t
								})
							}))
						}(e)
				} else d.hide()
			}
		}(), !e.hasClass("showing") || isChildOf(t.target, e) || isChildOf(t.target, i) ? c && isChildOf(t.target, o("#reader-view > .close-btn")) && (t.preventDefault(), B(!1)) : (t.preventDefault(), X()))
	}))
}(this, window, document, $, chrome.storage, chrome.runtime, chrome.i18n);
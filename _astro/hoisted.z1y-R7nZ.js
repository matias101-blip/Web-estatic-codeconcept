var Tr =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  Cr = { exports: {} };
/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (is, Or) {
  (function (te, Be) {
    is.exports = Be();
  })(Tr, function () {
    const te = new Map(),
      Be = {
        set(i, e, t) {
          te.has(i) || te.set(i, new Map());
          const n = te.get(i);
          n.has(e) || n.size === 0
            ? n.set(e, t)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`,
              );
        },
        get: (i, e) => (te.has(i) && te.get(i).get(e)) || null,
        remove(i, e) {
          if (!te.has(i)) return;
          const t = te.get(i);
          t.delete(e), t.size === 0 && te.delete(i);
        },
      },
      Et = "transitionend",
      ci = (i) => (
        i &&
          window.CSS &&
          window.CSS.escape &&
          (i = i.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
        i
      ),
      hi = (i) => {
        i.dispatchEvent(new Event(Et));
      },
      ie = (i) =>
        !(!i || typeof i != "object") &&
        (i.jquery !== void 0 && (i = i[0]), i.nodeType !== void 0),
      ae = (i) =>
        ie(i)
          ? i.jquery
            ? i[0]
            : i
          : typeof i == "string" && i.length > 0
            ? document.querySelector(ci(i))
            : null,
      Te = (i) => {
        if (!ie(i) || i.getClientRects().length === 0) return !1;
        const e =
            getComputedStyle(i).getPropertyValue("visibility") === "visible",
          t = i.closest("details:not([open])");
        if (!t) return e;
        if (t !== i) {
          const n = i.closest("summary");
          if ((n && n.parentNode !== t) || n === null) return !1;
        }
        return e;
      },
      le = (i) =>
        !i ||
        i.nodeType !== Node.ELEMENT_NODE ||
        !!i.classList.contains("disabled") ||
        (i.disabled !== void 0
          ? i.disabled
          : i.hasAttribute("disabled") &&
            i.getAttribute("disabled") !== "false"),
      di = (i) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof i.getRootNode == "function") {
          const e = i.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return i instanceof ShadowRoot
          ? i
          : i.parentNode
            ? di(i.parentNode)
            : null;
      },
      et = () => {},
      ze = (i) => {
        i.offsetHeight;
      },
      ui = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      At = [],
      B = () => document.documentElement.dir === "rtl",
      z = (i) => {
        var e;
        (e = () => {
          const t = ui();
          if (t) {
            const n = i.NAME,
              s = t.fn[n];
            (t.fn[n] = i.jQueryInterface),
              (t.fn[n].Constructor = i),
              (t.fn[n].noConflict = () => ((t.fn[n] = s), i.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (At.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const t of At) t();
                }),
              At.push(e))
            : e();
      },
      j = (i, e = [], t = i) => (typeof i == "function" ? i(...e) : t),
      fi = (i, e, t = !0) => {
        if (!t) return void j(i);
        const n =
          ((r) => {
            if (!r) return 0;
            let { transitionDuration: a, transitionDelay: c } =
              window.getComputedStyle(r);
            const d = Number.parseFloat(a),
              u = Number.parseFloat(c);
            return d || u
              ? ((a = a.split(",")[0]),
                (c = c.split(",")[0]),
                1e3 * (Number.parseFloat(a) + Number.parseFloat(c)))
              : 0;
          })(e) + 5;
        let s = !1;
        const o = ({ target: r }) => {
          r === e && ((s = !0), e.removeEventListener(Et, o), j(i));
        };
        e.addEventListener(Et, o),
          setTimeout(() => {
            s || hi(e);
          }, n);
      },
      Tt = (i, e, t, n) => {
        const s = i.length;
        let o = i.indexOf(e);
        return o === -1
          ? !t && n
            ? i[s - 1]
            : i[0]
          : ((o += t ? 1 : -1),
            n && (o = (o + s) % s),
            i[Math.max(0, Math.min(o, s - 1))]);
      },
      ns = /[^.]*(?=\..*)\.|.*/,
      ss = /\..*/,
      os = /::\d+$/,
      Ct = {};
    let pi = 1;
    const mi = { mouseenter: "mouseover", mouseleave: "mouseout" },
      rs = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function gi(i, e) {
      return (e && `${e}::${pi++}`) || i.uidEvent || pi++;
    }
    function _i(i) {
      const e = gi(i);
      return (i.uidEvent = e), (Ct[e] = Ct[e] || {}), Ct[e];
    }
    function bi(i, e, t = null) {
      return Object.values(i).find(
        (n) => n.callable === e && n.delegationSelector === t,
      );
    }
    function vi(i, e, t) {
      const n = typeof e == "string",
        s = n ? t : e || t;
      let o = wi(i);
      return rs.has(o) || (o = i), [n, s, o];
    }
    function yi(i, e, t, n, s) {
      if (typeof e != "string" || !i) return;
      let [o, r, a] = vi(e, t, n);
      e in mi &&
        (r = ((g) =>
          function (m) {
            if (
              !m.relatedTarget ||
              (m.relatedTarget !== m.delegateTarget &&
                !m.delegateTarget.contains(m.relatedTarget))
            )
              return g.call(this, m);
          })(r));
      const c = _i(i),
        d = c[a] || (c[a] = {}),
        u = bi(d, r, o ? t : null);
      if (u) return void (u.oneOff = u.oneOff && s);
      const h = gi(r, e.replace(ns, "")),
        b = o
          ? (function (p, g, m) {
              return function _(C) {
                const k = p.querySelectorAll(g);
                for (let { target: y } = C; y && y !== this; y = y.parentNode)
                  for (const E of k)
                    if (E === y)
                      return (
                        xt(C, { delegateTarget: y }),
                        _.oneOff && l.off(p, C.type, g, m),
                        m.apply(y, [C])
                      );
              };
            })(i, t, r)
          : (function (p, g) {
              return function m(_) {
                return (
                  xt(_, { delegateTarget: p }),
                  m.oneOff && l.off(p, _.type, g),
                  g.apply(p, [_])
                );
              };
            })(i, r);
      (b.delegationSelector = o ? t : null),
        (b.callable = r),
        (b.oneOff = s),
        (b.uidEvent = h),
        (d[h] = b),
        i.addEventListener(a, b, o);
    }
    function Ot(i, e, t, n, s) {
      const o = bi(e[t], n, s);
      o && (i.removeEventListener(t, o, !!s), delete e[t][o.uidEvent]);
    }
    function as(i, e, t, n) {
      const s = e[t] || {};
      for (const [o, r] of Object.entries(s))
        o.includes(n) && Ot(i, e, t, r.callable, r.delegationSelector);
    }
    function wi(i) {
      return (i = i.replace(ss, "")), mi[i] || i;
    }
    const l = {
      on(i, e, t, n) {
        yi(i, e, t, n, !1);
      },
      one(i, e, t, n) {
        yi(i, e, t, n, !0);
      },
      off(i, e, t, n) {
        if (typeof e != "string" || !i) return;
        const [s, o, r] = vi(e, t, n),
          a = r !== e,
          c = _i(i),
          d = c[r] || {},
          u = e.startsWith(".");
        if (o === void 0) {
          if (u) for (const h of Object.keys(c)) as(i, c, h, e.slice(1));
          for (const [h, b] of Object.entries(d)) {
            const p = h.replace(os, "");
            (a && !e.includes(p)) ||
              Ot(i, c, r, b.callable, b.delegationSelector);
          }
        } else {
          if (!Object.keys(d).length) return;
          Ot(i, c, r, o, s ? t : null);
        }
      },
      trigger(i, e, t) {
        if (typeof e != "string" || !i) return null;
        const n = ui();
        let s = null,
          o = !0,
          r = !0,
          a = !1;
        e !== wi(e) &&
          n &&
          ((s = n.Event(e, t)),
          n(i).trigger(s),
          (o = !s.isPropagationStopped()),
          (r = !s.isImmediatePropagationStopped()),
          (a = s.isDefaultPrevented()));
        const c = xt(new Event(e, { bubbles: o, cancelable: !0 }), t);
        return (
          a && c.preventDefault(),
          r && i.dispatchEvent(c),
          c.defaultPrevented && s && s.preventDefault(),
          c
        );
      },
    };
    function xt(i, e = {}) {
      for (const [t, n] of Object.entries(e))
        try {
          i[t] = n;
        } catch {
          Object.defineProperty(i, t, { configurable: !0, get: () => n });
        }
      return i;
    }
    function Ei(i) {
      if (i === "true") return !0;
      if (i === "false") return !1;
      if (i === Number(i).toString()) return Number(i);
      if (i === "" || i === "null") return null;
      if (typeof i != "string") return i;
      try {
        return JSON.parse(decodeURIComponent(i));
      } catch {
        return i;
      }
    }
    function kt(i) {
      return i.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
    }
    const ne = {
      setDataAttribute(i, e, t) {
        i.setAttribute(`data-bs-${kt(e)}`, t);
      },
      removeDataAttribute(i, e) {
        i.removeAttribute(`data-bs-${kt(e)}`);
      },
      getDataAttributes(i) {
        if (!i) return {};
        const e = {},
          t = Object.keys(i.dataset).filter(
            (n) => n.startsWith("bs") && !n.startsWith("bsConfig"),
          );
        for (const n of t) {
          let s = n.replace(/^bs/, "");
          (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)),
            (e[s] = Ei(i.dataset[n]));
        }
        return e;
      },
      getDataAttribute: (i, e) => Ei(i.getAttribute(`data-bs-${kt(e)}`)),
    };
    class Re {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!',
        );
      }
      _getConfig(e) {
        return (
          (e = this._mergeConfigObj(e)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      _configAfterMerge(e) {
        return e;
      }
      _mergeConfigObj(e, t) {
        const n = ie(t) ? ne.getDataAttribute(t, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof n == "object" ? n : {}),
          ...(ie(t) ? ne.getDataAttributes(t) : {}),
          ...(typeof e == "object" ? e : {}),
        };
      }
      _typeCheckConfig(e, t = this.constructor.DefaultType) {
        for (const [s, o] of Object.entries(t)) {
          const r = e[s],
            a = ie(r)
              ? "element"
              : (n = r) == null
                ? `${n}`
                : Object.prototype.toString
                    .call(n)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${o}".`,
            );
        }
        var n;
      }
    }
    class U extends Re {
      constructor(e, t) {
        super(),
          (e = ae(e)) &&
            ((this._element = e),
            (this._config = this._getConfig(t)),
            Be.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        Be.remove(this._element, this.constructor.DATA_KEY),
          l.off(this._element, this.constructor.EVENT_KEY);
        for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
      }
      _queueCallback(e, t, n = !0) {
        fi(e, t, n);
      }
      _getConfig(e) {
        return (
          (e = this._mergeConfigObj(e, this._element)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      static getInstance(e) {
        return Be.get(ae(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, typeof t == "object" ? t : null)
        );
      }
      static get VERSION() {
        return "5.3.2";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(e) {
        return `${e}${this.EVENT_KEY}`;
      }
    }
    const Lt = (i) => {
        let e = i.getAttribute("data-bs-target");
        if (!e || e === "#") {
          let t = i.getAttribute("href");
          if (!t || (!t.includes("#") && !t.startsWith("."))) return null;
          t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`),
            (e = t && t !== "#" ? ci(t.trim()) : null);
        }
        return e;
      },
      f = {
        find: (i, e = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(e, i)),
        findOne: (i, e = document.documentElement) =>
          Element.prototype.querySelector.call(e, i),
        children: (i, e) =>
          [].concat(...i.children).filter((t) => t.matches(e)),
        parents(i, e) {
          const t = [];
          let n = i.parentNode.closest(e);
          for (; n; ) t.push(n), (n = n.parentNode.closest(e));
          return t;
        },
        prev(i, e) {
          let t = i.previousElementSibling;
          for (; t; ) {
            if (t.matches(e)) return [t];
            t = t.previousElementSibling;
          }
          return [];
        },
        next(i, e) {
          let t = i.nextElementSibling;
          for (; t; ) {
            if (t.matches(e)) return [t];
            t = t.nextElementSibling;
          }
          return [];
        },
        focusableChildren(i) {
          const e = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((t) => `${t}:not([tabindex^="-"])`)
            .join(",");
          return this.find(e, i).filter((t) => !le(t) && Te(t));
        },
        getSelectorFromElement(i) {
          const e = Lt(i);
          return e && f.findOne(e) ? e : null;
        },
        getElementFromSelector(i) {
          const e = Lt(i);
          return e ? f.findOne(e) : null;
        },
        getMultipleElementsFromSelector(i) {
          const e = Lt(i);
          return e ? f.find(e) : [];
        },
      },
      tt = (i, e = "hide") => {
        const t = `click.dismiss${i.EVENT_KEY}`,
          n = i.NAME;
        l.on(document, t, `[data-bs-dismiss="${n}"]`, function (s) {
          if (
            (["A", "AREA"].includes(this.tagName) && s.preventDefault(),
            le(this))
          )
            return;
          const o = f.getElementFromSelector(this) || this.closest(`.${n}`);
          i.getOrCreateInstance(o)[e]();
        });
      },
      Ai = ".bs.alert",
      ls = `close${Ai}`,
      cs = `closed${Ai}`;
    class qe extends U {
      static get NAME() {
        return "alert";
      }
      close() {
        if (l.trigger(this._element, ls).defaultPrevented) return;
        this._element.classList.remove("show");
        const e = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }
      _destroyElement() {
        this._element.remove(), l.trigger(this._element, cs), this.dispose();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = qe.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    tt(qe, "close"), z(qe);
    const Ti = '[data-bs-toggle="button"]';
    class Ve extends U {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active"),
        );
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ve.getOrCreateInstance(this);
          e === "toggle" && t[e]();
        });
      }
    }
    l.on(document, "click.bs.button.data-api", Ti, (i) => {
      i.preventDefault();
      const e = i.target.closest(Ti);
      Ve.getOrCreateInstance(e).toggle();
    }),
      z(Ve);
    const Ce = ".bs.swipe",
      hs = `touchstart${Ce}`,
      ds = `touchmove${Ce}`,
      us = `touchend${Ce}`,
      fs = `pointerdown${Ce}`,
      ps = `pointerup${Ce}`,
      ms = { endCallback: null, leftCallback: null, rightCallback: null },
      gs = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class it extends Re {
      constructor(e, t) {
        super(),
          (this._element = e),
          e &&
            it.isSupported() &&
            ((this._config = this._getConfig(t)),
            (this._deltaX = 0),
            (this._supportPointerEvents = !!window.PointerEvent),
            this._initEvents());
      }
      static get Default() {
        return ms;
      }
      static get DefaultType() {
        return gs;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        l.off(this._element, Ce);
      }
      _start(e) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
          : (this._deltaX = e.touches[0].clientX);
      }
      _end(e) {
        this._eventIsPointerPenTouch(e) &&
          (this._deltaX = e.clientX - this._deltaX),
          this._handleSwipe(),
          j(this._config.endCallback);
      }
      _move(e) {
        this._deltaX =
          e.touches && e.touches.length > 1
            ? 0
            : e.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const e = Math.abs(this._deltaX);
        if (e <= 40) return;
        const t = e / this._deltaX;
        (this._deltaX = 0),
          t &&
            j(t > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (l.on(this._element, fs, (e) => this._start(e)),
            l.on(this._element, ps, (e) => this._end(e)),
            this._element.classList.add("pointer-event"))
          : (l.on(this._element, hs, (e) => this._start(e)),
            l.on(this._element, ds, (e) => this._move(e)),
            l.on(this._element, us, (e) => this._end(e)));
      }
      _eventIsPointerPenTouch(e) {
        return (
          this._supportPointerEvents &&
          (e.pointerType === "pen" || e.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const ce = ".bs.carousel",
      Ci = ".data-api",
      Ke = "next",
      Oe = "prev",
      xe = "left",
      nt = "right",
      _s = `slide${ce}`,
      St = `slid${ce}`,
      bs = `keydown${ce}`,
      vs = `mouseenter${ce}`,
      ys = `mouseleave${ce}`,
      ws = `dragstart${ce}`,
      Es = `load${ce}${Ci}`,
      As = `click${ce}${Ci}`,
      Oi = "carousel",
      st = "active",
      xi = ".active",
      ki = ".carousel-item",
      Ts = xi + ki,
      Cs = { ArrowLeft: nt, ArrowRight: xe },
      Os = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      xs = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class ke extends U {
      constructor(e, t) {
        super(e, t),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = f.findOne(
            ".carousel-indicators",
            this._element,
          )),
          this._addEventListeners(),
          this._config.ride === Oi && this.cycle();
      }
      static get Default() {
        return Os;
      }
      static get DefaultType() {
        return xs;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Ke);
      }
      nextWhenVisible() {
        !document.hidden && Te(this._element) && this.next();
      }
      prev() {
        this._slide(Oe);
      }
      pause() {
        this._isSliding && hi(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval,
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? l.one(this._element, St, () => this.cycle())
            : this.cycle());
      }
      to(e) {
        const t = this._getItems();
        if (e > t.length - 1 || e < 0) return;
        if (this._isSliding)
          return void l.one(this._element, St, () => this.to(e));
        const n = this._getItemIndex(this._getActive());
        if (n === e) return;
        const s = e > n ? Ke : Oe;
        this._slide(s, t[e]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(e) {
        return (e.defaultInterval = e.interval), e;
      }
      _addEventListeners() {
        this._config.keyboard &&
          l.on(this._element, bs, (e) => this._keydown(e)),
          this._config.pause === "hover" &&
            (l.on(this._element, vs, () => this.pause()),
            l.on(this._element, ys, () => this._maybeEnableCycle())),
          this._config.touch &&
            it.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const t of f.find(".carousel-item img", this._element))
          l.on(t, ws, (n) => n.preventDefault());
        const e = {
          leftCallback: () => this._slide(this._directionToOrder(xe)),
          rightCallback: () => this._slide(this._directionToOrder(nt)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval,
              )));
          },
        };
        this._swipeHelper = new it(this._element, e);
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = Cs[e.key];
        t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
      }
      _getItemIndex(e) {
        return this._getItems().indexOf(e);
      }
      _setActiveIndicatorElement(e) {
        if (!this._indicatorsElement) return;
        const t = f.findOne(xi, this._indicatorsElement);
        t.classList.remove(st), t.removeAttribute("aria-current");
        const n = f.findOne(
          `[data-bs-slide-to="${e}"]`,
          this._indicatorsElement,
        );
        n && (n.classList.add(st), n.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const e = this._activeElement || this._getActive();
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        this._config.interval = t || this._config.defaultInterval;
      }
      _slide(e, t = null) {
        if (this._isSliding) return;
        const n = this._getActive(),
          s = e === Ke,
          o = t || Tt(this._getItems(), n, s, this._config.wrap);
        if (o === n) return;
        const r = this._getItemIndex(o),
          a = (h) =>
            l.trigger(this._element, h, {
              relatedTarget: o,
              direction: this._orderToDirection(e),
              from: this._getItemIndex(n),
              to: r,
            });
        if (a(_s).defaultPrevented || !n || !o) return;
        const c = !!this._interval;
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(r),
          (this._activeElement = o);
        const d = s ? "carousel-item-start" : "carousel-item-end",
          u = s ? "carousel-item-next" : "carousel-item-prev";
        o.classList.add(u),
          ze(o),
          n.classList.add(d),
          o.classList.add(d),
          this._queueCallback(
            () => {
              o.classList.remove(d, u),
                o.classList.add(st),
                n.classList.remove(st, u, d),
                (this._isSliding = !1),
                a(St);
            },
            n,
            this._isAnimated(),
          ),
          c && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return f.findOne(Ts, this._element);
      }
      _getItems() {
        return f.find(ki, this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(e) {
        return B() ? (e === xe ? Oe : Ke) : e === xe ? Ke : Oe;
      }
      _orderToDirection(e) {
        return B() ? (e === Oe ? xe : nt) : e === Oe ? nt : xe;
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = ke.getOrCreateInstance(this, e);
          if (typeof e != "number") {
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          } else t.to(e);
        });
      }
    }
    l.on(document, As, "[data-bs-slide], [data-bs-slide-to]", function (i) {
      const e = f.getElementFromSelector(this);
      if (!e || !e.classList.contains(Oi)) return;
      i.preventDefault();
      const t = ke.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to");
      return n
        ? (t.to(n), void t._maybeEnableCycle())
        : ne.getDataAttribute(this, "slide") === "next"
          ? (t.next(), void t._maybeEnableCycle())
          : (t.prev(), void t._maybeEnableCycle());
    }),
      l.on(window, Es, () => {
        const i = f.find('[data-bs-ride="carousel"]');
        for (const e of i) ke.getOrCreateInstance(e);
      }),
      z(ke);
    const Xe = ".bs.collapse",
      ks = `show${Xe}`,
      Ls = `shown${Xe}`,
      Ss = `hide${Xe}`,
      Ds = `hidden${Xe}`,
      $s = `click${Xe}.data-api`,
      Dt = "show",
      Le = "collapse",
      ot = "collapsing",
      Is = `:scope .${Le} .${Le}`,
      $t = '[data-bs-toggle="collapse"]',
      Ns = { parent: null, toggle: !0 },
      Ps = { parent: "(null|element)", toggle: "boolean" };
    class Se extends U {
      constructor(e, t) {
        super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
        const n = f.find($t);
        for (const s of n) {
          const o = f.getSelectorFromElement(s),
            r = f.find(o).filter((a) => a === this._element);
          o !== null && r.length && this._triggerArray.push(s);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Ns;
      }
      static get DefaultType() {
        return Ps;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e = [];
        if (
          (this._config.parent &&
            (e = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing",
            )
              .filter((s) => s !== this._element)
              .map((s) => Se.getOrCreateInstance(s, { toggle: !1 }))),
          (e.length && e[0]._isTransitioning) ||
            l.trigger(this._element, ks).defaultPrevented)
        )
          return;
        for (const s of e) s.hide();
        const t = this._getDimension();
        this._element.classList.remove(Le),
          this._element.classList.add(ot),
          (this._element.style[t] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ot),
              this._element.classList.add(Le, Dt),
              (this._element.style[t] = ""),
              l.trigger(this._element, Ls);
          },
          this._element,
          !0,
        ),
          (this._element.style[t] = `${this._element[n]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          l.trigger(this._element, Ss).defaultPrevented
        )
          return;
        const e = this._getDimension();
        (this._element.style[e] =
          `${this._element.getBoundingClientRect()[e]}px`),
          ze(this._element),
          this._element.classList.add(ot),
          this._element.classList.remove(Le, Dt);
        for (const t of this._triggerArray) {
          const n = f.getElementFromSelector(t);
          n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(ot),
                this._element.classList.add(Le),
                l.trigger(this._element, Ds);
            },
            this._element,
            !0,
          );
      }
      _isShown(e = this._element) {
        return e.classList.contains(Dt);
      }
      _configAfterMerge(e) {
        return (e.toggle = !!e.toggle), (e.parent = ae(e.parent)), e;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const e = this._getFirstLevelChildren($t);
        for (const t of e) {
          const n = f.getElementFromSelector(t);
          n && this._addAriaAndCollapsedClass([t], this._isShown(n));
        }
      }
      _getFirstLevelChildren(e) {
        const t = f.find(Is, this._config.parent);
        return f.find(e, this._config.parent).filter((n) => !t.includes(n));
      }
      _addAriaAndCollapsedClass(e, t) {
        if (e.length)
          for (const n of e)
            n.classList.toggle("collapsed", !t),
              n.setAttribute("aria-expanded", t);
      }
      static jQueryInterface(e) {
        const t = {};
        return (
          typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1),
          this.each(function () {
            const n = Se.getOrCreateInstance(this, t);
            if (typeof e == "string") {
              if (n[e] === void 0)
                throw new TypeError(`No method named "${e}"`);
              n[e]();
            }
          })
        );
      }
    }
    l.on(document, $s, $t, function (i) {
      (i.target.tagName === "A" ||
        (i.delegateTarget && i.delegateTarget.tagName === "A")) &&
        i.preventDefault();
      for (const e of f.getMultipleElementsFromSelector(this))
        Se.getOrCreateInstance(e, { toggle: !1 }).toggle();
    }),
      z(Se);
    var $ = "top",
      M = "bottom",
      F = "right",
      I = "left",
      rt = "auto",
      De = [$, M, F, I],
      fe = "start",
      $e = "end",
      Li = "clippingParents",
      It = "viewport",
      Ie = "popper",
      Si = "reference",
      Nt = De.reduce(function (i, e) {
        return i.concat([e + "-" + fe, e + "-" + $e]);
      }, []),
      Pt = [].concat(De, [rt]).reduce(function (i, e) {
        return i.concat([e, e + "-" + fe, e + "-" + $e]);
      }, []),
      Di = "beforeRead",
      $i = "read",
      Ii = "afterRead",
      Ni = "beforeMain",
      Pi = "main",
      ji = "afterMain",
      Mi = "beforeWrite",
      Fi = "write",
      Hi = "afterWrite",
      Wi = [Di, $i, Ii, Ni, Pi, ji, Mi, Fi, Hi];
    function G(i) {
      return i ? (i.nodeName || "").toLowerCase() : null;
    }
    function H(i) {
      if (i == null) return window;
      if (i.toString() !== "[object Window]") {
        var e = i.ownerDocument;
        return (e && e.defaultView) || window;
      }
      return i;
    }
    function pe(i) {
      return i instanceof H(i).Element || i instanceof Element;
    }
    function R(i) {
      return i instanceof H(i).HTMLElement || i instanceof HTMLElement;
    }
    function jt(i) {
      return (
        typeof ShadowRoot < "u" &&
        (i instanceof H(i).ShadowRoot || i instanceof ShadowRoot)
      );
    }
    const Mt = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (i) {
        var e = i.state;
        Object.keys(e.elements).forEach(function (t) {
          var n = e.styles[t] || {},
            s = e.attributes[t] || {},
            o = e.elements[t];
          R(o) &&
            G(o) &&
            (Object.assign(o.style, n),
            Object.keys(s).forEach(function (r) {
              var a = s[r];
              a === !1
                ? o.removeAttribute(r)
                : o.setAttribute(r, a === !0 ? "" : a);
            }));
        });
      },
      effect: function (i) {
        var e = i.state,
          t = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(e.elements.popper.style, t.popper),
          (e.styles = t),
          e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
          function () {
            Object.keys(e.elements).forEach(function (n) {
              var s = e.elements[n],
                o = e.attributes[n] || {},
                r = Object.keys(
                  e.styles.hasOwnProperty(n) ? e.styles[n] : t[n],
                ).reduce(function (a, c) {
                  return (a[c] = ""), a;
                }, {});
              R(s) &&
                G(s) &&
                (Object.assign(s.style, r),
                Object.keys(o).forEach(function (a) {
                  s.removeAttribute(a);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function Z(i) {
      return i.split("-")[0];
    }
    var me = Math.max,
      at = Math.min,
      Ne = Math.round;
    function Ft() {
      var i = navigator.userAgentData;
      return i != null && i.brands && Array.isArray(i.brands)
        ? i.brands
            .map(function (e) {
              return e.brand + "/" + e.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function Bi() {
      return !/^((?!chrome|android).)*safari/i.test(Ft());
    }
    function Pe(i, e, t) {
      e === void 0 && (e = !1), t === void 0 && (t = !1);
      var n = i.getBoundingClientRect(),
        s = 1,
        o = 1;
      e &&
        R(i) &&
        ((s = (i.offsetWidth > 0 && Ne(n.width) / i.offsetWidth) || 1),
        (o = (i.offsetHeight > 0 && Ne(n.height) / i.offsetHeight) || 1));
      var r = (pe(i) ? H(i) : window).visualViewport,
        a = !Bi() && t,
        c = (n.left + (a && r ? r.offsetLeft : 0)) / s,
        d = (n.top + (a && r ? r.offsetTop : 0)) / o,
        u = n.width / s,
        h = n.height / o;
      return {
        width: u,
        height: h,
        top: d,
        right: c + u,
        bottom: d + h,
        left: c,
        x: c,
        y: d,
      };
    }
    function Ht(i) {
      var e = Pe(i),
        t = i.offsetWidth,
        n = i.offsetHeight;
      return (
        Math.abs(e.width - t) <= 1 && (t = e.width),
        Math.abs(e.height - n) <= 1 && (n = e.height),
        { x: i.offsetLeft, y: i.offsetTop, width: t, height: n }
      );
    }
    function zi(i, e) {
      var t = e.getRootNode && e.getRootNode();
      if (i.contains(e)) return !0;
      if (t && jt(t)) {
        var n = e;
        do {
          if (n && i.isSameNode(n)) return !0;
          n = n.parentNode || n.host;
        } while (n);
      }
      return !1;
    }
    function se(i) {
      return H(i).getComputedStyle(i);
    }
    function js(i) {
      return ["table", "td", "th"].indexOf(G(i)) >= 0;
    }
    function he(i) {
      return ((pe(i) ? i.ownerDocument : i.document) || window.document)
        .documentElement;
    }
    function lt(i) {
      return G(i) === "html"
        ? i
        : i.assignedSlot || i.parentNode || (jt(i) ? i.host : null) || he(i);
    }
    function Ri(i) {
      return R(i) && se(i).position !== "fixed" ? i.offsetParent : null;
    }
    function Ue(i) {
      for (var e = H(i), t = Ri(i); t && js(t) && se(t).position === "static"; )
        t = Ri(t);
      return t &&
        (G(t) === "html" || (G(t) === "body" && se(t).position === "static"))
        ? e
        : t ||
            (function (n) {
              var s = /firefox/i.test(Ft());
              if (/Trident/i.test(Ft()) && R(n) && se(n).position === "fixed")
                return null;
              var o = lt(n);
              for (
                jt(o) && (o = o.host);
                R(o) && ["html", "body"].indexOf(G(o)) < 0;

              ) {
                var r = se(o);
                if (
                  r.transform !== "none" ||
                  r.perspective !== "none" ||
                  r.contain === "paint" ||
                  ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
                  (s && r.willChange === "filter") ||
                  (s && r.filter && r.filter !== "none")
                )
                  return o;
                o = o.parentNode;
              }
              return null;
            })(i) ||
            e;
    }
    function Wt(i) {
      return ["top", "bottom"].indexOf(i) >= 0 ? "x" : "y";
    }
    function Ye(i, e, t) {
      return me(i, at(e, t));
    }
    function qi(i) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, i);
    }
    function Vi(i, e) {
      return e.reduce(function (t, n) {
        return (t[n] = i), t;
      }, {});
    }
    const Ki = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (i) {
        var e,
          t = i.state,
          n = i.name,
          s = i.options,
          o = t.elements.arrow,
          r = t.modifiersData.popperOffsets,
          a = Z(t.placement),
          c = Wt(a),
          d = [I, F].indexOf(a) >= 0 ? "height" : "width";
        if (o && r) {
          var u = (function (O, T) {
              return qi(
                typeof (O =
                  typeof O == "function"
                    ? O(Object.assign({}, T.rects, { placement: T.placement }))
                    : O) != "number"
                  ? O
                  : Vi(O, De),
              );
            })(s.padding, t),
            h = Ht(o),
            b = c === "y" ? $ : I,
            p = c === "y" ? M : F,
            g =
              t.rects.reference[d] +
              t.rects.reference[c] -
              r[c] -
              t.rects.popper[d],
            m = r[c] - t.rects.reference[c],
            _ = Ue(o),
            C = _ ? (c === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
            k = g / 2 - m / 2,
            y = u[b],
            E = C - h[d] - u[p],
            v = C / 2 - h[d] / 2 + k,
            w = Ye(y, v, E),
            A = c;
          t.modifiersData[n] = (((e = {})[A] = w), (e.centerOffset = w - v), e);
        }
      },
      effect: function (i) {
        var e = i.state,
          t = i.options.element,
          n = t === void 0 ? "[data-popper-arrow]" : t;
        n != null &&
          (typeof n != "string" || (n = e.elements.popper.querySelector(n))) &&
          zi(e.elements.popper, n) &&
          (e.elements.arrow = n);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function je(i) {
      return i.split("-")[1];
    }
    var Ms = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Xi(i) {
      var e,
        t = i.popper,
        n = i.popperRect,
        s = i.placement,
        o = i.variation,
        r = i.offsets,
        a = i.position,
        c = i.gpuAcceleration,
        d = i.adaptive,
        u = i.roundOffsets,
        h = i.isFixed,
        b = r.x,
        p = b === void 0 ? 0 : b,
        g = r.y,
        m = g === void 0 ? 0 : g,
        _ = typeof u == "function" ? u({ x: p, y: m }) : { x: p, y: m };
      (p = _.x), (m = _.y);
      var C = r.hasOwnProperty("x"),
        k = r.hasOwnProperty("y"),
        y = I,
        E = $,
        v = window;
      if (d) {
        var w = Ue(t),
          A = "clientHeight",
          O = "clientWidth";
        w === H(t) &&
          se((w = he(t))).position !== "static" &&
          a === "absolute" &&
          ((A = "scrollHeight"), (O = "scrollWidth")),
          (s === $ || ((s === I || s === F) && o === $e)) &&
            ((E = M),
            (m -=
              (h && w === v && v.visualViewport
                ? v.visualViewport.height
                : w[A]) - n.height),
            (m *= c ? 1 : -1)),
          (s !== I && ((s !== $ && s !== M) || o !== $e)) ||
            ((y = F),
            (p -=
              (h && w === v && v.visualViewport
                ? v.visualViewport.width
                : w[O]) - n.width),
            (p *= c ? 1 : -1));
      }
      var T,
        S = Object.assign({ position: a }, d && Ms),
        W =
          u === !0
            ? (function (Q, N) {
                var V = Q.x,
                  K = Q.y,
                  L = N.devicePixelRatio || 1;
                return { x: Ne(V * L) / L || 0, y: Ne(K * L) / L || 0 };
              })({ x: p, y: m }, H(t))
            : { x: p, y: m };
      return (
        (p = W.x),
        (m = W.y),
        c
          ? Object.assign(
              {},
              S,
              (((T = {})[E] = k ? "0" : ""),
              (T[y] = C ? "0" : ""),
              (T.transform =
                (v.devicePixelRatio || 1) <= 1
                  ? "translate(" + p + "px, " + m + "px)"
                  : "translate3d(" + p + "px, " + m + "px, 0)"),
              T),
            )
          : Object.assign(
              {},
              S,
              (((e = {})[E] = k ? m + "px" : ""),
              (e[y] = C ? p + "px" : ""),
              (e.transform = ""),
              e),
            )
      );
    }
    const Bt = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (i) {
        var e = i.state,
          t = i.options,
          n = t.gpuAcceleration,
          s = n === void 0 || n,
          o = t.adaptive,
          r = o === void 0 || o,
          a = t.roundOffsets,
          c = a === void 0 || a,
          d = {
            placement: Z(e.placement),
            variation: je(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: s,
            isFixed: e.options.strategy === "fixed",
          };
        e.modifiersData.popperOffsets != null &&
          (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            Xi(
              Object.assign({}, d, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: c,
              }),
            ),
          )),
          e.modifiersData.arrow != null &&
            (e.styles.arrow = Object.assign(
              {},
              e.styles.arrow,
              Xi(
                Object.assign({}, d, {
                  offsets: e.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: c,
                }),
              ),
            )),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
          }));
      },
      data: {},
    };
    var ct = { passive: !0 };
    const zt = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (i) {
        var e = i.state,
          t = i.instance,
          n = i.options,
          s = n.scroll,
          o = s === void 0 || s,
          r = n.resize,
          a = r === void 0 || r,
          c = H(e.elements.popper),
          d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          o &&
            d.forEach(function (u) {
              u.addEventListener("scroll", t.update, ct);
            }),
          a && c.addEventListener("resize", t.update, ct),
          function () {
            o &&
              d.forEach(function (u) {
                u.removeEventListener("scroll", t.update, ct);
              }),
              a && c.removeEventListener("resize", t.update, ct);
          }
        );
      },
      data: {},
    };
    var Fs = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function ht(i) {
      return i.replace(/left|right|bottom|top/g, function (e) {
        return Fs[e];
      });
    }
    var Hs = { start: "end", end: "start" };
    function Ui(i) {
      return i.replace(/start|end/g, function (e) {
        return Hs[e];
      });
    }
    function Rt(i) {
      var e = H(i);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function qt(i) {
      return Pe(he(i)).left + Rt(i).scrollLeft;
    }
    function Vt(i) {
      var e = se(i),
        t = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(t + s + n);
    }
    function Yi(i) {
      return ["html", "body", "#document"].indexOf(G(i)) >= 0
        ? i.ownerDocument.body
        : R(i) && Vt(i)
          ? i
          : Yi(lt(i));
    }
    function Qe(i, e) {
      var t;
      e === void 0 && (e = []);
      var n = Yi(i),
        s = n === ((t = i.ownerDocument) == null ? void 0 : t.body),
        o = H(n),
        r = s ? [o].concat(o.visualViewport || [], Vt(n) ? n : []) : n,
        a = e.concat(r);
      return s ? a : a.concat(Qe(lt(r)));
    }
    function Kt(i) {
      return Object.assign({}, i, {
        left: i.x,
        top: i.y,
        right: i.x + i.width,
        bottom: i.y + i.height,
      });
    }
    function Qi(i, e, t) {
      return e === It
        ? Kt(
            (function (n, s) {
              var o = H(n),
                r = he(n),
                a = o.visualViewport,
                c = r.clientWidth,
                d = r.clientHeight,
                u = 0,
                h = 0;
              if (a) {
                (c = a.width), (d = a.height);
                var b = Bi();
                (b || (!b && s === "fixed")) &&
                  ((u = a.offsetLeft), (h = a.offsetTop));
              }
              return { width: c, height: d, x: u + qt(n), y: h };
            })(i, t),
          )
        : pe(e)
          ? (function (n, s) {
              var o = Pe(n, !1, s === "fixed");
              return (
                (o.top = o.top + n.clientTop),
                (o.left = o.left + n.clientLeft),
                (o.bottom = o.top + n.clientHeight),
                (o.right = o.left + n.clientWidth),
                (o.width = n.clientWidth),
                (o.height = n.clientHeight),
                (o.x = o.left),
                (o.y = o.top),
                o
              );
            })(e, t)
          : Kt(
              (function (n) {
                var s,
                  o = he(n),
                  r = Rt(n),
                  a = (s = n.ownerDocument) == null ? void 0 : s.body,
                  c = me(
                    o.scrollWidth,
                    o.clientWidth,
                    a ? a.scrollWidth : 0,
                    a ? a.clientWidth : 0,
                  ),
                  d = me(
                    o.scrollHeight,
                    o.clientHeight,
                    a ? a.scrollHeight : 0,
                    a ? a.clientHeight : 0,
                  ),
                  u = -r.scrollLeft + qt(n),
                  h = -r.scrollTop;
                return (
                  se(a || o).direction === "rtl" &&
                    (u += me(o.clientWidth, a ? a.clientWidth : 0) - c),
                  { width: c, height: d, x: u, y: h }
                );
              })(he(i)),
            );
    }
    function Gi(i) {
      var e,
        t = i.reference,
        n = i.element,
        s = i.placement,
        o = s ? Z(s) : null,
        r = s ? je(s) : null,
        a = t.x + t.width / 2 - n.width / 2,
        c = t.y + t.height / 2 - n.height / 2;
      switch (o) {
        case $:
          e = { x: a, y: t.y - n.height };
          break;
        case M:
          e = { x: a, y: t.y + t.height };
          break;
        case F:
          e = { x: t.x + t.width, y: c };
          break;
        case I:
          e = { x: t.x - n.width, y: c };
          break;
        default:
          e = { x: t.x, y: t.y };
      }
      var d = o ? Wt(o) : null;
      if (d != null) {
        var u = d === "y" ? "height" : "width";
        switch (r) {
          case fe:
            e[d] = e[d] - (t[u] / 2 - n[u] / 2);
            break;
          case $e:
            e[d] = e[d] + (t[u] / 2 - n[u] / 2);
        }
      }
      return e;
    }
    function Me(i, e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.placement,
        s = n === void 0 ? i.placement : n,
        o = t.strategy,
        r = o === void 0 ? i.strategy : o,
        a = t.boundary,
        c = a === void 0 ? Li : a,
        d = t.rootBoundary,
        u = d === void 0 ? It : d,
        h = t.elementContext,
        b = h === void 0 ? Ie : h,
        p = t.altBoundary,
        g = p !== void 0 && p,
        m = t.padding,
        _ = m === void 0 ? 0 : m,
        C = qi(typeof _ != "number" ? _ : Vi(_, De)),
        k = b === Ie ? Si : Ie,
        y = i.rects.popper,
        E = i.elements[g ? k : b],
        v = (function (N, V, K, L) {
          var J =
              V === "clippingParents"
                ? (function (x) {
                    var P = Qe(lt(x)),
                      X =
                        ["absolute", "fixed"].indexOf(se(x).position) >= 0 &&
                        R(x)
                          ? Ue(x)
                          : x;
                    return pe(X)
                      ? P.filter(function (ue) {
                          return pe(ue) && zi(ue, X) && G(ue) !== "body";
                        })
                      : [];
                  })(N)
                : [].concat(V),
            ee = [].concat(J, [K]),
            We = ee[0],
            D = ee.reduce(
              function (x, P) {
                var X = Qi(N, P, L);
                return (
                  (x.top = me(X.top, x.top)),
                  (x.right = at(X.right, x.right)),
                  (x.bottom = at(X.bottom, x.bottom)),
                  (x.left = me(X.left, x.left)),
                  x
                );
              },
              Qi(N, We, L),
            );
          return (
            (D.width = D.right - D.left),
            (D.height = D.bottom - D.top),
            (D.x = D.left),
            (D.y = D.top),
            D
          );
        })(pe(E) ? E : E.contextElement || he(i.elements.popper), c, u, r),
        w = Pe(i.elements.reference),
        A = Gi({
          reference: w,
          element: y,
          strategy: "absolute",
          placement: s,
        }),
        O = Kt(Object.assign({}, y, A)),
        T = b === Ie ? O : w,
        S = {
          top: v.top - T.top + C.top,
          bottom: T.bottom - v.bottom + C.bottom,
          left: v.left - T.left + C.left,
          right: T.right - v.right + C.right,
        },
        W = i.modifiersData.offset;
      if (b === Ie && W) {
        var Q = W[s];
        Object.keys(S).forEach(function (N) {
          var V = [F, M].indexOf(N) >= 0 ? 1 : -1,
            K = [$, M].indexOf(N) >= 0 ? "y" : "x";
          S[N] += Q[K] * V;
        });
      }
      return S;
    }
    function Ws(i, e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.placement,
        s = t.boundary,
        o = t.rootBoundary,
        r = t.padding,
        a = t.flipVariations,
        c = t.allowedAutoPlacements,
        d = c === void 0 ? Pt : c,
        u = je(n),
        h = u
          ? a
            ? Nt
            : Nt.filter(function (g) {
                return je(g) === u;
              })
          : De,
        b = h.filter(function (g) {
          return d.indexOf(g) >= 0;
        });
      b.length === 0 && (b = h);
      var p = b.reduce(function (g, m) {
        return (
          (g[m] = Me(i, {
            placement: m,
            boundary: s,
            rootBoundary: o,
            padding: r,
          })[Z(m)]),
          g
        );
      }, {});
      return Object.keys(p).sort(function (g, m) {
        return p[g] - p[m];
      });
    }
    const Zi = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (i) {
        var e = i.state,
          t = i.options,
          n = i.name;
        if (!e.modifiersData[n]._skip) {
          for (
            var s = t.mainAxis,
              o = s === void 0 || s,
              r = t.altAxis,
              a = r === void 0 || r,
              c = t.fallbackPlacements,
              d = t.padding,
              u = t.boundary,
              h = t.rootBoundary,
              b = t.altBoundary,
              p = t.flipVariations,
              g = p === void 0 || p,
              m = t.allowedAutoPlacements,
              _ = e.options.placement,
              C = Z(_),
              k =
                c ||
                (C !== _ && g
                  ? (function (x) {
                      if (Z(x) === rt) return [];
                      var P = ht(x);
                      return [Ui(x), P, Ui(P)];
                    })(_)
                  : [ht(_)]),
              y = [_].concat(k).reduce(function (x, P) {
                return x.concat(
                  Z(P) === rt
                    ? Ws(e, {
                        placement: P,
                        boundary: u,
                        rootBoundary: h,
                        padding: d,
                        flipVariations: g,
                        allowedAutoPlacements: m,
                      })
                    : P,
                );
              }, []),
              E = e.rects.reference,
              v = e.rects.popper,
              w = new Map(),
              A = !0,
              O = y[0],
              T = 0;
            T < y.length;
            T++
          ) {
            var S = y[T],
              W = Z(S),
              Q = je(S) === fe,
              N = [$, M].indexOf(W) >= 0,
              V = N ? "width" : "height",
              K = Me(e, {
                placement: S,
                boundary: u,
                rootBoundary: h,
                altBoundary: b,
                padding: d,
              }),
              L = N ? (Q ? F : I) : Q ? M : $;
            E[V] > v[V] && (L = ht(L));
            var J = ht(L),
              ee = [];
            if (
              (o && ee.push(K[W] <= 0),
              a && ee.push(K[L] <= 0, K[J] <= 0),
              ee.every(function (x) {
                return x;
              }))
            ) {
              (O = S), (A = !1);
              break;
            }
            w.set(S, ee);
          }
          if (A)
            for (
              var We = function (x) {
                  var P = y.find(function (X) {
                    var ue = w.get(X);
                    if (ue)
                      return ue.slice(0, x).every(function (vt) {
                        return vt;
                      });
                  });
                  if (P) return (O = P), "break";
                },
                D = g ? 3 : 1;
              D > 0 && We(D) !== "break";
              D--
            );
          e.placement !== O &&
            ((e.modifiersData[n]._skip = !0),
            (e.placement = O),
            (e.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function Ji(i, e, t) {
      return (
        t === void 0 && (t = { x: 0, y: 0 }),
        {
          top: i.top - e.height - t.y,
          right: i.right - e.width + t.x,
          bottom: i.bottom - e.height + t.y,
          left: i.left - e.width - t.x,
        }
      );
    }
    function en(i) {
      return [$, F, M, I].some(function (e) {
        return i[e] >= 0;
      });
    }
    const tn = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (i) {
          var e = i.state,
            t = i.name,
            n = e.rects.reference,
            s = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = Me(e, { elementContext: "reference" }),
            a = Me(e, { altBoundary: !0 }),
            c = Ji(r, n),
            d = Ji(a, s, o),
            u = en(c),
            h = en(d);
          (e.modifiersData[t] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: d,
            isReferenceHidden: u,
            hasPopperEscaped: h,
          }),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": u,
              "data-popper-escaped": h,
            }));
        },
      },
      nn = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (i) {
          var e = i.state,
            t = i.options,
            n = i.name,
            s = t.offset,
            o = s === void 0 ? [0, 0] : s,
            r = Pt.reduce(function (u, h) {
              return (
                (u[h] = (function (b, p, g) {
                  var m = Z(b),
                    _ = [I, $].indexOf(m) >= 0 ? -1 : 1,
                    C =
                      typeof g == "function"
                        ? g(Object.assign({}, p, { placement: b }))
                        : g,
                    k = C[0],
                    y = C[1];
                  return (
                    (k = k || 0),
                    (y = (y || 0) * _),
                    [I, F].indexOf(m) >= 0 ? { x: y, y: k } : { x: k, y }
                  );
                })(h, e.rects, o)),
                u
              );
            }, {}),
            a = r[e.placement],
            c = a.x,
            d = a.y;
          e.modifiersData.popperOffsets != null &&
            ((e.modifiersData.popperOffsets.x += c),
            (e.modifiersData.popperOffsets.y += d)),
            (e.modifiersData[n] = r);
        },
      },
      Xt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (i) {
          var e = i.state,
            t = i.name;
          e.modifiersData[t] = Gi({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      },
      sn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (i) {
          var e = i.state,
            t = i.options,
            n = i.name,
            s = t.mainAxis,
            o = s === void 0 || s,
            r = t.altAxis,
            a = r !== void 0 && r,
            c = t.boundary,
            d = t.rootBoundary,
            u = t.altBoundary,
            h = t.padding,
            b = t.tether,
            p = b === void 0 || b,
            g = t.tetherOffset,
            m = g === void 0 ? 0 : g,
            _ = Me(e, {
              boundary: c,
              rootBoundary: d,
              padding: h,
              altBoundary: u,
            }),
            C = Z(e.placement),
            k = je(e.placement),
            y = !k,
            E = Wt(C),
            v = E === "x" ? "y" : "x",
            w = e.modifiersData.popperOffsets,
            A = e.rects.reference,
            O = e.rects.popper,
            T =
              typeof m == "function"
                ? m(Object.assign({}, e.rects, { placement: e.placement }))
                : m,
            S =
              typeof T == "number"
                ? { mainAxis: T, altAxis: T }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
            W = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement]
              : null,
            Q = { x: 0, y: 0 };
          if (w) {
            if (o) {
              var N,
                V = E === "y" ? $ : I,
                K = E === "y" ? M : F,
                L = E === "y" ? "height" : "width",
                J = w[E],
                ee = J + _[V],
                We = J - _[K],
                D = p ? -O[L] / 2 : 0,
                x = k === fe ? A[L] : O[L],
                P = k === fe ? -O[L] : -A[L],
                X = e.elements.arrow,
                ue = p && X ? Ht(X) : { width: 0, height: 0 },
                vt = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                qn = vt[V],
                Vn = vt[K],
                yt = Ye(0, A[L], ue[L]),
                gr = y
                  ? A[L] / 2 - D - yt - qn - S.mainAxis
                  : x - yt - qn - S.mainAxis,
                _r = y
                  ? -A[L] / 2 + D + yt + Vn + S.mainAxis
                  : P + yt + Vn + S.mainAxis,
                ri = e.elements.arrow && Ue(e.elements.arrow),
                br = ri
                  ? E === "y"
                    ? ri.clientTop || 0
                    : ri.clientLeft || 0
                  : 0,
                Kn = (N = W?.[E]) != null ? N : 0,
                vr = J + _r - Kn,
                Xn = Ye(
                  p ? at(ee, J + gr - Kn - br) : ee,
                  J,
                  p ? me(We, vr) : We,
                );
              (w[E] = Xn), (Q[E] = Xn - J);
            }
            if (a) {
              var Un,
                yr = E === "x" ? $ : I,
                wr = E === "x" ? M : F,
                Ae = w[v],
                wt = v === "y" ? "height" : "width",
                Yn = Ae + _[yr],
                Qn = Ae - _[wr],
                ai = [$, I].indexOf(C) !== -1,
                Gn = (Un = W?.[v]) != null ? Un : 0,
                Zn = ai ? Yn : Ae - A[wt] - O[wt] - Gn + S.altAxis,
                Jn = ai ? Ae + A[wt] + O[wt] - Gn - S.altAxis : Qn,
                es =
                  p && ai
                    ? (function (Er, Ar, li) {
                        var ts = Ye(Er, Ar, li);
                        return ts > li ? li : ts;
                      })(Zn, Ae, Jn)
                    : Ye(p ? Zn : Yn, Ae, p ? Jn : Qn);
              (w[v] = es), (Q[v] = es - Ae);
            }
            e.modifiersData[n] = Q;
          }
        },
        requiresIfExists: ["offset"],
      };
    function Bs(i, e, t) {
      t === void 0 && (t = !1);
      var n,
        s,
        o = R(e),
        r =
          R(e) &&
          (function (h) {
            var b = h.getBoundingClientRect(),
              p = Ne(b.width) / h.offsetWidth || 1,
              g = Ne(b.height) / h.offsetHeight || 1;
            return p !== 1 || g !== 1;
          })(e),
        a = he(e),
        c = Pe(i, r, t),
        d = { scrollLeft: 0, scrollTop: 0 },
        u = { x: 0, y: 0 };
      return (
        (o || (!o && !t)) &&
          ((G(e) !== "body" || Vt(a)) &&
            (d =
              (n = e) !== H(n) && R(n)
                ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
                : Rt(n)),
          R(e)
            ? (((u = Pe(e, !0)).x += e.clientLeft), (u.y += e.clientTop))
            : a && (u.x = qt(a))),
        {
          x: c.left + d.scrollLeft - u.x,
          y: c.top + d.scrollTop - u.y,
          width: c.width,
          height: c.height,
        }
      );
    }
    function zs(i) {
      var e = new Map(),
        t = new Set(),
        n = [];
      function s(o) {
        t.add(o.name),
          []
            .concat(o.requires || [], o.requiresIfExists || [])
            .forEach(function (r) {
              if (!t.has(r)) {
                var a = e.get(r);
                a && s(a);
              }
            }),
          n.push(o);
      }
      return (
        i.forEach(function (o) {
          e.set(o.name, o);
        }),
        i.forEach(function (o) {
          t.has(o.name) || s(o);
        }),
        n
      );
    }
    var on = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function rn() {
      for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
        e[t] = arguments[t];
      return !e.some(function (n) {
        return !(n && typeof n.getBoundingClientRect == "function");
      });
    }
    function dt(i) {
      i === void 0 && (i = {});
      var e = i,
        t = e.defaultModifiers,
        n = t === void 0 ? [] : t,
        s = e.defaultOptions,
        o = s === void 0 ? on : s;
      return function (r, a, c) {
        c === void 0 && (c = o);
        var d,
          u,
          h = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, on, o),
            modifiersData: {},
            elements: { reference: r, popper: a },
            attributes: {},
            styles: {},
          },
          b = [],
          p = !1,
          g = {
            state: h,
            setOptions: function (_) {
              var C = typeof _ == "function" ? _(h.options) : _;
              m(),
                (h.options = Object.assign({}, o, h.options, C)),
                (h.scrollParents = {
                  reference: pe(r)
                    ? Qe(r)
                    : r.contextElement
                      ? Qe(r.contextElement)
                      : [],
                  popper: Qe(a),
                });
              var k,
                y,
                E = (function (v) {
                  var w = zs(v);
                  return Wi.reduce(function (A, O) {
                    return A.concat(
                      w.filter(function (T) {
                        return T.phase === O;
                      }),
                    );
                  }, []);
                })(
                  ((k = [].concat(n, h.options.modifiers)),
                  (y = k.reduce(function (v, w) {
                    var A = v[w.name];
                    return (
                      (v[w.name] = A
                        ? Object.assign({}, A, w, {
                            options: Object.assign({}, A.options, w.options),
                            data: Object.assign({}, A.data, w.data),
                          })
                        : w),
                      v
                    );
                  }, {})),
                  Object.keys(y).map(function (v) {
                    return y[v];
                  })),
                );
              return (
                (h.orderedModifiers = E.filter(function (v) {
                  return v.enabled;
                })),
                h.orderedModifiers.forEach(function (v) {
                  var w = v.name,
                    A = v.options,
                    O = A === void 0 ? {} : A,
                    T = v.effect;
                  if (typeof T == "function") {
                    var S = T({ state: h, name: w, instance: g, options: O });
                    b.push(S || function () {});
                  }
                }),
                g.update()
              );
            },
            forceUpdate: function () {
              if (!p) {
                var _ = h.elements,
                  C = _.reference,
                  k = _.popper;
                if (rn(C, k)) {
                  (h.rects = {
                    reference: Bs(C, Ue(k), h.options.strategy === "fixed"),
                    popper: Ht(k),
                  }),
                    (h.reset = !1),
                    (h.placement = h.options.placement),
                    h.orderedModifiers.forEach(function (T) {
                      return (h.modifiersData[T.name] = Object.assign(
                        {},
                        T.data,
                      ));
                    });
                  for (var y = 0; y < h.orderedModifiers.length; y++)
                    if (h.reset !== !0) {
                      var E = h.orderedModifiers[y],
                        v = E.fn,
                        w = E.options,
                        A = w === void 0 ? {} : w,
                        O = E.name;
                      typeof v == "function" &&
                        (h =
                          v({ state: h, options: A, name: O, instance: g }) ||
                          h);
                    } else (h.reset = !1), (y = -1);
                }
              }
            },
            update:
              ((d = function () {
                return new Promise(function (_) {
                  g.forceUpdate(), _(h);
                });
              }),
              function () {
                return (
                  u ||
                    (u = new Promise(function (_) {
                      Promise.resolve().then(function () {
                        (u = void 0), _(d());
                      });
                    })),
                  u
                );
              }),
            destroy: function () {
              m(), (p = !0);
            },
          };
        if (!rn(r, a)) return g;
        function m() {
          b.forEach(function (_) {
            return _();
          }),
            (b = []);
        }
        return (
          g.setOptions(c).then(function (_) {
            !p && c.onFirstUpdate && c.onFirstUpdate(_);
          }),
          g
        );
      };
    }
    var Rs = dt(),
      qs = dt({ defaultModifiers: [zt, Xt, Bt, Mt] }),
      Ut = dt({ defaultModifiers: [zt, Xt, Bt, Mt, nn, Zi, sn, Ki, tn] });
    const an = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            afterMain: ji,
            afterRead: Ii,
            afterWrite: Hi,
            applyStyles: Mt,
            arrow: Ki,
            auto: rt,
            basePlacements: De,
            beforeMain: Ni,
            beforeRead: Di,
            beforeWrite: Mi,
            bottom: M,
            clippingParents: Li,
            computeStyles: Bt,
            createPopper: Ut,
            createPopperBase: Rs,
            createPopperLite: qs,
            detectOverflow: Me,
            end: $e,
            eventListeners: zt,
            flip: Zi,
            hide: tn,
            left: I,
            main: Pi,
            modifierPhases: Wi,
            offset: nn,
            placements: Pt,
            popper: Ie,
            popperGenerator: dt,
            popperOffsets: Xt,
            preventOverflow: sn,
            read: $i,
            reference: Si,
            right: F,
            start: fe,
            top: $,
            variationPlacements: Nt,
            viewport: It,
            write: Fi,
          },
          Symbol.toStringTag,
          { value: "Module" },
        ),
      ),
      ln = "dropdown",
      ge = ".bs.dropdown",
      Yt = ".data-api",
      Vs = "ArrowUp",
      cn = "ArrowDown",
      Ks = `hide${ge}`,
      Xs = `hidden${ge}`,
      Us = `show${ge}`,
      Ys = `shown${ge}`,
      hn = `click${ge}${Yt}`,
      dn = `keydown${ge}${Yt}`,
      Qs = `keyup${ge}${Yt}`,
      Fe = "show",
      _e = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Gs = `${_e}.${Fe}`,
      ut = ".dropdown-menu",
      Zs = B() ? "top-end" : "top-start",
      Js = B() ? "top-start" : "top-end",
      eo = B() ? "bottom-end" : "bottom-start",
      to = B() ? "bottom-start" : "bottom-end",
      io = B() ? "left-start" : "right-start",
      no = B() ? "right-start" : "left-start",
      so = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      oo = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class Y extends U {
      constructor(e, t) {
        super(e, t),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            f.next(this._element, ut)[0] ||
            f.prev(this._element, ut)[0] ||
            f.findOne(ut, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return so;
      }
      static get DefaultType() {
        return oo;
      }
      static get NAME() {
        return ln;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (le(this._element) || this._isShown()) return;
        const e = { relatedTarget: this._element };
        if (!l.trigger(this._element, Us, e).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const t of [].concat(...document.body.children))
              l.on(t, "mouseover", et);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Fe),
            this._element.classList.add(Fe),
            l.trigger(this._element, Ys, e);
        }
      }
      hide() {
        if (le(this._element) || !this._isShown()) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(e) {
        if (!l.trigger(this._element, Ks, e).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const t of [].concat(...document.body.children))
              l.off(t, "mouseover", et);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Fe),
            this._element.classList.remove(Fe),
            this._element.setAttribute("aria-expanded", "false"),
            ne.removeDataAttribute(this._menu, "popper"),
            l.trigger(this._element, Xs, e);
        }
      }
      _getConfig(e) {
        if (
          typeof (e = super._getConfig(e)).reference == "object" &&
          !ie(e.reference) &&
          typeof e.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${ln.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
          );
        return e;
      }
      _createPopper() {
        if (an === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)",
          );
        let e = this._element;
        this._config.reference === "parent"
          ? (e = this._parent)
          : ie(this._config.reference)
            ? (e = ae(this._config.reference))
            : typeof this._config.reference == "object" &&
              (e = this._config.reference);
        const t = this._getPopperConfig();
        this._popper = Ut(e, this._menu, t);
      }
      _isShown() {
        return this._menu.classList.contains(Fe);
      }
      _getPlacement() {
        const e = this._parent;
        if (e.classList.contains("dropend")) return io;
        if (e.classList.contains("dropstart")) return no;
        if (e.classList.contains("dropup-center")) return "top";
        if (e.classList.contains("dropdown-center")) return "bottom";
        const t =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return e.classList.contains("dropup") ? (t ? Js : Zs) : t ? to : eo;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
          ? e.split(",").map((t) => Number.parseInt(t, 10))
          : typeof e == "function"
            ? (t) => e(t, this._element)
            : e;
      }
      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (ne.setDataAttribute(this._menu, "popper", "static"),
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...e, ...j(this._config.popperConfig, [e]) }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        const n = f
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu,
          )
          .filter((s) => Te(s));
        n.length && Tt(n, t, e === cn, !n.includes(t)).focus();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Y.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
      static clearMenus(e) {
        if (e.button === 2 || (e.type === "keyup" && e.key !== "Tab")) return;
        const t = f.find(Gs);
        for (const n of t) {
          const s = Y.getInstance(n);
          if (!s || s._config.autoClose === !1) continue;
          const o = e.composedPath(),
            r = o.includes(s._menu);
          if (
            o.includes(s._element) ||
            (s._config.autoClose === "inside" && !r) ||
            (s._config.autoClose === "outside" && r) ||
            (s._menu.contains(e.target) &&
              ((e.type === "keyup" && e.key === "Tab") ||
                /input|select|option|textarea|form/i.test(e.target.tagName)))
          )
            continue;
          const a = { relatedTarget: s._element };
          e.type === "click" && (a.clickEvent = e), s._completeHide(a);
        }
      }
      static dataApiKeydownHandler(e) {
        const t = /input|textarea/i.test(e.target.tagName),
          n = e.key === "Escape",
          s = [Vs, cn].includes(e.key);
        if ((!s && !n) || (t && !n)) return;
        e.preventDefault();
        const o = this.matches(_e)
            ? this
            : f.prev(this, _e)[0] ||
              f.next(this, _e)[0] ||
              f.findOne(_e, e.delegateTarget.parentNode),
          r = Y.getOrCreateInstance(o);
        if (s) return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
        r._isShown() && (e.stopPropagation(), r.hide(), o.focus());
      }
    }
    l.on(document, dn, _e, Y.dataApiKeydownHandler),
      l.on(document, dn, ut, Y.dataApiKeydownHandler),
      l.on(document, hn, Y.clearMenus),
      l.on(document, Qs, Y.clearMenus),
      l.on(document, hn, _e, function (i) {
        i.preventDefault(), Y.getOrCreateInstance(this).toggle();
      }),
      z(Y);
    const un = "backdrop",
      fn = "show",
      pn = `mousedown.bs.${un}`,
      ro = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      ao = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class mn extends Re {
      constructor(e) {
        super(),
          (this._config = this._getConfig(e)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return ro;
      }
      static get DefaultType() {
        return ao;
      }
      static get NAME() {
        return un;
      }
      show(e) {
        if (!this._config.isVisible) return void j(e);
        this._append();
        const t = this._getElement();
        this._config.isAnimated && ze(t),
          t.classList.add(fn),
          this._emulateAnimation(() => {
            j(e);
          });
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove(fn),
            this._emulateAnimation(() => {
              this.dispose(), j(e);
            }))
          : j(e);
      }
      dispose() {
        this._isAppended &&
          (l.off(this._element, pn),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          (e.className = this._config.className),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e);
        }
        return this._element;
      }
      _configAfterMerge(e) {
        return (e.rootElement = ae(e.rootElement)), e;
      }
      _append() {
        if (this._isAppended) return;
        const e = this._getElement();
        this._config.rootElement.append(e),
          l.on(e, pn, () => {
            j(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(e) {
        fi(e, this._getElement(), this._config.isAnimated);
      }
    }
    const ft = ".bs.focustrap",
      lo = `focusin${ft}`,
      co = `keydown.tab${ft}`,
      gn = "backward",
      ho = { autofocus: !0, trapElement: null },
      uo = { autofocus: "boolean", trapElement: "element" };
    class _n extends Re {
      constructor(e) {
        super(),
          (this._config = this._getConfig(e)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return ho;
      }
      static get DefaultType() {
        return uo;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          l.off(document, ft),
          l.on(document, lo, (e) => this._handleFocusin(e)),
          l.on(document, co, (e) => this._handleKeydown(e)),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), l.off(document, ft));
      }
      _handleFocusin(e) {
        const { trapElement: t } = this._config;
        if (e.target === document || e.target === t || t.contains(e.target))
          return;
        const n = f.focusableChildren(t);
        n.length === 0
          ? t.focus()
          : this._lastTabNavDirection === gn
            ? n[n.length - 1].focus()
            : n[0].focus();
      }
      _handleKeydown(e) {
        e.key === "Tab" &&
          (this._lastTabNavDirection = e.shiftKey ? gn : "forward");
      }
    }
    const bn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      vn = ".sticky-top",
      pt = "padding-right",
      yn = "margin-right";
    class Qt {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, pt, (t) => t + e),
          this._setElementAttributes(bn, pt, (t) => t + e),
          this._setElementAttributes(vn, yn, (t) => t - e);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, pt),
          this._resetElementAttributes(bn, pt),
          this._resetElementAttributes(vn, yn);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(e, t, n) {
        const s = this.getWidth();
        this._applyManipulationCallback(e, (o) => {
          if (o !== this._element && window.innerWidth > o.clientWidth + s)
            return;
          this._saveInitialAttribute(o, t);
          const r = window.getComputedStyle(o).getPropertyValue(t);
          o.style.setProperty(t, `${n(Number.parseFloat(r))}px`);
        });
      }
      _saveInitialAttribute(e, t) {
        const n = e.style.getPropertyValue(t);
        n && ne.setDataAttribute(e, t, n);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (n) => {
          const s = ne.getDataAttribute(n, t);
          s !== null
            ? (ne.removeDataAttribute(n, t), n.style.setProperty(t, s))
            : n.style.removeProperty(t);
        });
      }
      _applyManipulationCallback(e, t) {
        if (ie(e)) t(e);
        else for (const n of f.find(e, this._element)) t(n);
      }
    }
    const q = ".bs.modal",
      fo = `hide${q}`,
      po = `hidePrevented${q}`,
      wn = `hidden${q}`,
      En = `show${q}`,
      mo = `shown${q}`,
      go = `resize${q}`,
      _o = `click.dismiss${q}`,
      bo = `mousedown.dismiss${q}`,
      vo = `keydown.dismiss${q}`,
      yo = `click${q}.data-api`,
      An = "modal-open",
      Tn = "show",
      Gt = "modal-static",
      wo = { backdrop: !0, focus: !0, keyboard: !0 },
      Eo = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class be extends U {
      constructor(e, t) {
        super(e, t),
          (this._dialog = f.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new Qt()),
          this._addEventListeners();
      }
      static get Default() {
        return wo;
      }
      static get DefaultType() {
        return Eo;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          l.trigger(this._element, En, { relatedTarget: e }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(An),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(e)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (l.trigger(this._element, fo).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(Tn),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated(),
            )));
      }
      dispose() {
        l.off(window, q),
          l.off(this._dialog, q),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new mn({
          isVisible: !!this._config.backdrop,
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new _n({ trapElement: this._element });
      }
      _showElement(e) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const t = f.findOne(".modal-body", this._dialog);
        t && (t.scrollTop = 0),
          ze(this._element),
          this._element.classList.add(Tn),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                l.trigger(this._element, mo, { relatedTarget: e });
            },
            this._dialog,
            this._isAnimated(),
          );
      }
      _addEventListeners() {
        l.on(this._element, vo, (e) => {
          e.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : this._triggerBackdropTransition());
        }),
          l.on(window, go, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          l.on(this._element, bo, (e) => {
            l.one(this._element, _o, (t) => {
              this._element === e.target &&
                this._element === t.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(An),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              l.trigger(this._element, wn);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (l.trigger(this._element, po).defaultPrevented) return;
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._element.style.overflowY;
        t === "hidden" ||
          this._element.classList.contains(Gt) ||
          (e || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(Gt),
          this._queueCallback(() => {
            this._element.classList.remove(Gt),
              this._queueCallback(() => {
                this._element.style.overflowY = t;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          n = t > 0;
        if (n && !e) {
          const s = B() ? "paddingLeft" : "paddingRight";
          this._element.style[s] = `${t}px`;
        }
        if (!n && e) {
          const s = B() ? "paddingRight" : "paddingLeft";
          this._element.style[s] = `${t}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(e, t) {
        return this.each(function () {
          const n = be.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (n[e] === void 0) throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }
    }
    l.on(document, yo, '[data-bs-toggle="modal"]', function (i) {
      const e = f.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && i.preventDefault(),
        l.one(e, En, (n) => {
          n.defaultPrevented ||
            l.one(e, wn, () => {
              Te(this) && this.focus();
            });
        });
      const t = f.findOne(".modal.show");
      t && be.getInstance(t).hide(), be.getOrCreateInstance(e).toggle(this);
    }),
      tt(be),
      z(be);
    const oe = ".bs.offcanvas",
      Cn = ".data-api",
      Ao = `load${oe}${Cn}`,
      On = "show",
      xn = "showing",
      kn = "hiding",
      Ln = ".offcanvas.show",
      To = `show${oe}`,
      Co = `shown${oe}`,
      Oo = `hide${oe}`,
      Sn = `hidePrevented${oe}`,
      Dn = `hidden${oe}`,
      xo = `resize${oe}`,
      ko = `click${oe}${Cn}`,
      Lo = `keydown.dismiss${oe}`,
      So = { backdrop: !0, keyboard: !0, scroll: !1 },
      Do = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class re extends U {
      constructor(e, t) {
        super(e, t),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return So;
      }
      static get DefaultType() {
        return Do;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          l.trigger(this._element, To, { relatedTarget: e }).defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new Qt().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(xn),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(On),
                this._element.classList.remove(xn),
                l.trigger(this._element, Co, { relatedTarget: e });
            },
            this._element,
            !0,
          ));
      }
      hide() {
        this._isShown &&
          (l.trigger(this._element, Oo).defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(kn),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(On, kn),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new Qt().reset(),
                  l.trigger(this._element, Dn);
              },
              this._element,
              !0,
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const e = !!this._config.backdrop;
        return new mn({
          className: "offcanvas-backdrop",
          isVisible: e,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: e
            ? () => {
                this._config.backdrop !== "static"
                  ? this.hide()
                  : l.trigger(this._element, Sn);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new _n({ trapElement: this._element });
      }
      _addEventListeners() {
        l.on(this._element, Lo, (e) => {
          e.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : l.trigger(this._element, Sn));
        });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = re.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    l.on(document, ko, '[data-bs-toggle="offcanvas"]', function (i) {
      const e = f.getElementFromSelector(this);
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), le(this))
      )
        return;
      l.one(e, Dn, () => {
        Te(this) && this.focus();
      });
      const t = f.findOne(Ln);
      t && t !== e && re.getInstance(t).hide(),
        re.getOrCreateInstance(e).toggle(this);
    }),
      l.on(window, Ao, () => {
        for (const i of f.find(Ln)) re.getOrCreateInstance(i).show();
      }),
      l.on(window, xo, () => {
        for (const i of f.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(i).position !== "fixed" &&
            re.getOrCreateInstance(i).hide();
      }),
      tt(re),
      z(re);
    const $n = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      $o = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      Io = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      No = (i, e) => {
        const t = i.nodeName.toLowerCase();
        return e.includes(t)
          ? !$o.has(t) || !!Io.test(i.nodeValue)
          : e.filter((n) => n instanceof RegExp).some((n) => n.test(t));
      },
      Po = {
        allowList: $n,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      jo = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      Mo = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class Fo extends Re {
      constructor(e) {
        super(), (this._config = this._getConfig(e));
      }
      static get Default() {
        return Po;
      }
      static get DefaultType() {
        return jo;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((e) => this._resolvePossibleFunction(e))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(e) {
        return (
          this._checkContent(e),
          (this._config.content = { ...this._config.content, ...e }),
          this
        );
      }
      toHtml() {
        const e = document.createElement("div");
        e.innerHTML = this._maybeSanitize(this._config.template);
        for (const [s, o] of Object.entries(this._config.content))
          this._setContent(e, o, s);
        const t = e.children[0],
          n = this._resolvePossibleFunction(this._config.extraClass);
        return n && t.classList.add(...n.split(" ")), t;
      }
      _typeCheckConfig(e) {
        super._typeCheckConfig(e), this._checkContent(e.content);
      }
      _checkContent(e) {
        for (const [t, n] of Object.entries(e))
          super._typeCheckConfig({ selector: t, entry: n }, Mo);
      }
      _setContent(e, t, n) {
        const s = f.findOne(n, e);
        s &&
          ((t = this._resolvePossibleFunction(t))
            ? ie(t)
              ? this._putElementInTemplate(ae(t), s)
              : this._config.html
                ? (s.innerHTML = this._maybeSanitize(t))
                : (s.textContent = t)
            : s.remove());
      }
      _maybeSanitize(e) {
        return this._config.sanitize
          ? (function (t, n, s) {
              if (!t.length) return t;
              if (s && typeof s == "function") return s(t);
              const o = new window.DOMParser().parseFromString(t, "text/html"),
                r = [].concat(...o.body.querySelectorAll("*"));
              for (const a of r) {
                const c = a.nodeName.toLowerCase();
                if (!Object.keys(n).includes(c)) {
                  a.remove();
                  continue;
                }
                const d = [].concat(...a.attributes),
                  u = [].concat(n["*"] || [], n[c] || []);
                for (const h of d) No(h, u) || a.removeAttribute(h.nodeName);
              }
              return o.body.innerHTML;
            })(e, this._config.allowList, this._config.sanitizeFn)
          : e;
      }
      _resolvePossibleFunction(e) {
        return j(e, [this]);
      }
      _putElementInTemplate(e, t) {
        if (this._config.html) return (t.innerHTML = ""), void t.append(e);
        t.textContent = e.textContent;
      }
    }
    const Ho = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Zt = "fade",
      mt = "show",
      In = ".modal",
      Nn = "hide.bs.modal",
      Ge = "hover",
      Jt = "focus",
      Wo = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: B() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: B() ? "right" : "left",
      },
      Bo = {
        allowList: $n,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      zo = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class ve extends U {
      constructor(e, t) {
        if (an === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)",
          );
        super(e, t),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return Bo;
      }
      static get DefaultType() {
        return zo;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          l.off(this._element.closest(In), Nn, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title"),
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const e = l.trigger(this._element, this.constructor.eventName("show")),
          t = (
            di(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (e.defaultPrevented || !t) return;
        this._disposePopper();
        const n = this._getTipElement();
        this._element.setAttribute("aria-describedby", n.getAttribute("id"));
        const { container: s } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (s.append(n),
            l.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(n)),
          n.classList.add(mt),
          "ontouchstart" in document.documentElement)
        )
          for (const o of [].concat(...document.body.children))
            l.on(o, "mouseover", et);
        this._queueCallback(
          () => {
            l.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated(),
        );
      }
      hide() {
        if (
          this._isShown() &&
          !l.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(mt),
            "ontouchstart" in document.documentElement)
          )
            for (const e of [].concat(...document.body.children))
              l.off(e, "mouseover", et);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[Jt] = !1),
            (this._activeTrigger[Ge] = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  l.trigger(
                    this._element,
                    this.constructor.eventName("hidden"),
                  ));
              },
              this.tip,
              this._isAnimated(),
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate(),
            )),
          this.tip
        );
      }
      _createTipElement(e) {
        const t = this._getTemplateFactory(e).toHtml();
        if (!t) return null;
        t.classList.remove(Zt, mt),
          t.classList.add(`bs-${this.constructor.NAME}-auto`);
        const n = ((s) => {
          do s += Math.floor(1e6 * Math.random());
          while (document.getElementById(s));
          return s;
        })(this.constructor.NAME).toString();
        return (
          t.setAttribute("id", n), this._isAnimated() && t.classList.add(Zt), t
        );
      }
      setContent(e) {
        (this._newContent = e),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(e) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(e)
            : (this._templateFactory = new Fo({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(
                  this._config.customClass,
                ),
              })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(e) {
        return this.constructor.getOrCreateInstance(
          e.delegateTarget,
          this._getDelegateConfig(),
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(Zt))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(mt);
      }
      _createPopper(e) {
        const t = j(this._config.placement, [this, e, this._element]),
          n = Wo[t.toUpperCase()];
        return Ut(this._element, e, this._getPopperConfig(n));
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
          ? e.split(",").map((t) => Number.parseInt(t, 10))
          : typeof e == "function"
            ? (t) => e(t, this._element)
            : e;
      }
      _resolvePossibleFunction(e) {
        return j(e, [this._element]);
      }
      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (n) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  n.state.placement,
                );
              },
            },
          ],
        };
        return { ...t, ...j(this._config.popperConfig, [t]) };
      }
      _setListeners() {
        const e = this._config.trigger.split(" ");
        for (const t of e)
          if (t === "click")
            l.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (n) => {
                this._initializeOnDelegatedTarget(n).toggle();
              },
            );
          else if (t !== "manual") {
            const n =
                t === Ge
                  ? this.constructor.eventName("mouseenter")
                  : this.constructor.eventName("focusin"),
              s =
                t === Ge
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            l.on(this._element, n, this._config.selector, (o) => {
              const r = this._initializeOnDelegatedTarget(o);
              (r._activeTrigger[o.type === "focusin" ? Jt : Ge] = !0),
                r._enter();
            }),
              l.on(this._element, s, this._config.selector, (o) => {
                const r = this._initializeOnDelegatedTarget(o);
                (r._activeTrigger[o.type === "focusout" ? Jt : Ge] =
                  r._element.contains(o.relatedTarget)),
                  r._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          l.on(this._element.closest(In), Nn, this._hideModalHandler);
      }
      _fixTitle() {
        const e = this._element.getAttribute("title");
        e &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", e),
          this._element.setAttribute("data-bs-original-title", e),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(e, t) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(e) {
        const t = ne.getDataAttributes(this._element);
        for (const n of Object.keys(t)) Ho.has(n) && delete t[n];
        return (
          (e = { ...t, ...(typeof e == "object" && e ? e : {}) }),
          (e = this._mergeConfigObj(e)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      _configAfterMerge(e) {
        return (
          (e.container = e.container === !1 ? document.body : ae(e.container)),
          typeof e.delay == "number" &&
            (e.delay = { show: e.delay, hide: e.delay }),
          typeof e.title == "number" && (e.title = e.title.toString()),
          typeof e.content == "number" && (e.content = e.content.toString()),
          e
        );
      }
      _getDelegateConfig() {
        const e = {};
        for (const [t, n] of Object.entries(this._config))
          this.constructor.Default[t] !== n && (e[t] = n);
        return (e.selector = !1), (e.trigger = "manual"), e;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = ve.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    z(ve);
    const Ro = {
        ...ve.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      qo = { ...ve.DefaultType, content: "(null|string|element|function)" };
    class gt extends ve {
      static get Default() {
        return Ro;
      }
      static get DefaultType() {
        return qo;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = gt.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    z(gt);
    const ei = ".bs.scrollspy",
      Vo = `activate${ei}`,
      Pn = `click${ei}`,
      Ko = `load${ei}.data-api`,
      He = "active",
      ti = "[href]",
      jn = ".nav-link",
      Xo = `${jn}, .nav-item > ${jn}, .list-group-item`,
      Uo = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      Yo = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class Ze extends U {
      constructor(e, t) {
        super(e, t),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return Uo;
      }
      static get DefaultType() {
        return Yo;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const e of this._observableSections.values())
          this._observer.observe(e);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(e) {
        return (
          (e.target = ae(e.target) || document.body),
          (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
          typeof e.threshold == "string" &&
            (e.threshold = e.threshold
              .split(",")
              .map((t) => Number.parseFloat(t))),
          e
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (l.off(this._config.target, Pn),
          l.on(this._config.target, Pn, ti, (e) => {
            const t = this._observableSections.get(e.target.hash);
            if (t) {
              e.preventDefault();
              const n = this._rootElement || window,
                s = t.offsetTop - this._element.offsetTop;
              if (n.scrollTo)
                return void n.scrollTo({ top: s, behavior: "smooth" });
              n.scrollTop = s;
            }
          }));
      }
      _getNewObserver() {
        const e = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((t) => this._observerCallback(t), e);
      }
      _observerCallback(e) {
        const t = (r) => this._targetLinks.get(`#${r.target.id}`),
          n = (r) => {
            (this._previousScrollData.visibleEntryTop = r.target.offsetTop),
              this._process(t(r));
          },
          s = (this._rootElement || document.documentElement).scrollTop,
          o = s >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = s;
        for (const r of e) {
          if (!r.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(t(r));
            continue;
          }
          const a =
            r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (o && a) {
            if ((n(r), !s)) return;
          } else o || a || n(r);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const e = f.find(ti, this._config.target);
        for (const t of e) {
          if (!t.hash || le(t)) continue;
          const n = f.findOne(decodeURI(t.hash), this._element);
          Te(n) &&
            (this._targetLinks.set(decodeURI(t.hash), t),
            this._observableSections.set(t.hash, n));
        }
      }
      _process(e) {
        this._activeTarget !== e &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = e),
          e.classList.add(He),
          this._activateParents(e),
          l.trigger(this._element, Vo, { relatedTarget: e }));
      }
      _activateParents(e) {
        if (e.classList.contains("dropdown-item"))
          f.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(
            He,
          );
        else
          for (const t of f.parents(e, ".nav, .list-group"))
            for (const n of f.prev(t, Xo)) n.classList.add(He);
      }
      _clearActiveClass(e) {
        e.classList.remove(He);
        const t = f.find(`${ti}.${He}`, e);
        for (const n of t) n.classList.remove(He);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ze.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(window, Ko, () => {
      for (const i of f.find('[data-bs-spy="scroll"]'))
        Ze.getOrCreateInstance(i);
    }),
      z(Ze);
    const ye = ".bs.tab",
      Qo = `hide${ye}`,
      Go = `hidden${ye}`,
      Zo = `show${ye}`,
      Jo = `shown${ye}`,
      er = `click${ye}`,
      tr = `keydown${ye}`,
      ir = `load${ye}`,
      nr = "ArrowLeft",
      Mn = "ArrowRight",
      sr = "ArrowUp",
      Fn = "ArrowDown",
      ii = "Home",
      Hn = "End",
      we = "active",
      Wn = "fade",
      ni = "show",
      Bn = ".dropdown-toggle",
      si = `:not(${Bn})`,
      zn =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      oi = `.nav-link${si}, .list-group-item${si}, [role="tab"]${si}, ${zn}`,
      or = `.${we}[data-bs-toggle="tab"], .${we}[data-bs-toggle="pill"], .${we}[data-bs-toggle="list"]`;
    class Ee extends U {
      constructor(e) {
        super(e),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]',
          )),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            l.on(this._element, tr, (t) => this._keydown(t)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const e = this._element;
        if (this._elemIsActive(e)) return;
        const t = this._getActiveElem(),
          n = t ? l.trigger(t, Qo, { relatedTarget: e }) : null;
        l.trigger(e, Zo, { relatedTarget: t }).defaultPrevented ||
          (n && n.defaultPrevented) ||
          (this._deactivate(t, e), this._activate(e, t));
      }
      _activate(e, t) {
        e &&
          (e.classList.add(we),
          this._activate(f.getElementFromSelector(e)),
          this._queueCallback(
            () => {
              e.getAttribute("role") === "tab"
                ? (e.removeAttribute("tabindex"),
                  e.setAttribute("aria-selected", !0),
                  this._toggleDropDown(e, !0),
                  l.trigger(e, Jo, { relatedTarget: t }))
                : e.classList.add(ni);
            },
            e,
            e.classList.contains(Wn),
          ));
      }
      _deactivate(e, t) {
        e &&
          (e.classList.remove(we),
          e.blur(),
          this._deactivate(f.getElementFromSelector(e)),
          this._queueCallback(
            () => {
              e.getAttribute("role") === "tab"
                ? (e.setAttribute("aria-selected", !1),
                  e.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(e, !1),
                  l.trigger(e, Go, { relatedTarget: t }))
                : e.classList.remove(ni);
            },
            e,
            e.classList.contains(Wn),
          ));
      }
      _keydown(e) {
        if (![nr, Mn, sr, Fn, ii, Hn].includes(e.key)) return;
        e.stopPropagation(), e.preventDefault();
        const t = this._getChildren().filter((s) => !le(s));
        let n;
        if ([ii, Hn].includes(e.key)) n = t[e.key === ii ? 0 : t.length - 1];
        else {
          const s = [Mn, Fn].includes(e.key);
          n = Tt(t, e.target, s, !0);
        }
        n && (n.focus({ preventScroll: !0 }), Ee.getOrCreateInstance(n).show());
      }
      _getChildren() {
        return f.find(oi, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((e) => this._elemIsActive(e)) || null;
      }
      _setInitialAttributes(e, t) {
        this._setAttributeIfNotExists(e, "role", "tablist");
        for (const n of t) this._setInitialAttributesOnChild(n);
      }
      _setInitialAttributesOnChild(e) {
        e = this._getInnerElement(e);
        const t = this._elemIsActive(e),
          n = this._getOuterElement(e);
        e.setAttribute("aria-selected", t),
          n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
          t || e.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(e, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(e);
      }
      _setInitialAttributesOnTargetPanel(e) {
        const t = f.getElementFromSelector(e);
        t &&
          (this._setAttributeIfNotExists(t, "role", "tabpanel"),
          e.id &&
            this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
      }
      _toggleDropDown(e, t) {
        const n = this._getOuterElement(e);
        if (!n.classList.contains("dropdown")) return;
        const s = (o, r) => {
          const a = f.findOne(o, n);
          a && a.classList.toggle(r, t);
        };
        s(Bn, we), s(".dropdown-menu", ni), n.setAttribute("aria-expanded", t);
      }
      _setAttributeIfNotExists(e, t, n) {
        e.hasAttribute(t) || e.setAttribute(t, n);
      }
      _elemIsActive(e) {
        return e.classList.contains(we);
      }
      _getInnerElement(e) {
        return e.matches(oi) ? e : f.findOne(oi, e);
      }
      _getOuterElement(e) {
        return e.closest(".nav-item, .list-group-item") || e;
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ee.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(document, er, zn, function (i) {
      ["A", "AREA"].includes(this.tagName) && i.preventDefault(),
        le(this) || Ee.getOrCreateInstance(this).show();
    }),
      l.on(window, ir, () => {
        for (const i of f.find(or)) Ee.getOrCreateInstance(i);
      }),
      z(Ee);
    const de = ".bs.toast",
      rr = `mouseover${de}`,
      ar = `mouseout${de}`,
      lr = `focusin${de}`,
      cr = `focusout${de}`,
      hr = `hide${de}`,
      dr = `hidden${de}`,
      ur = `show${de}`,
      fr = `shown${de}`,
      Rn = "hide",
      _t = "show",
      bt = "showing",
      pr = { animation: "boolean", autohide: "boolean", delay: "number" },
      mr = { animation: !0, autohide: !0, delay: 5e3 };
    class Je extends U {
      constructor(e, t) {
        super(e, t),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return mr;
      }
      static get DefaultType() {
        return pr;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        l.trigger(this._element, ur).defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(Rn),
          ze(this._element),
          this._element.classList.add(_t, bt),
          this._queueCallback(
            () => {
              this._element.classList.remove(bt),
                l.trigger(this._element, fr),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation,
          ));
      }
      hide() {
        this.isShown() &&
          (l.trigger(this._element, hr).defaultPrevented ||
            (this._element.classList.add(bt),
            this._queueCallback(
              () => {
                this._element.classList.add(Rn),
                  this._element.classList.remove(bt, _t),
                  l.trigger(this._element, dr);
              },
              this._element,
              this._config.animation,
            )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(_t),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(_t);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n ||
          this._element.contains(n) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        l.on(this._element, rr, (e) => this._onInteraction(e, !0)),
          l.on(this._element, ar, (e) => this._onInteraction(e, !1)),
          l.on(this._element, lr, (e) => this._onInteraction(e, !0)),
          l.on(this._element, cr, (e) => this._onInteraction(e, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Je.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return (
      tt(Je),
      z(Je),
      {
        Alert: qe,
        Button: Ve,
        Carousel: ke,
        Collapse: Se,
        Dropdown: Y,
        Modal: be,
        Offcanvas: re,
        Popover: gt,
        ScrollSpy: Ze,
        Tab: Ee,
        Toast: Je,
        Tooltip: ve,
      }
    );
  });
})(Cr);

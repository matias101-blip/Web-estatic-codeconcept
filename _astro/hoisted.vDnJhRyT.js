var U = (g, p) => () => (p || g((p = { exports: {} }).exports, p), p.exports);
import "./hoisted.z1y-R7nZ.js";
var V = U((X, z) => {
  var G =
      typeof window < "u"
        ? window
        : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
          ? self
          : {},
    s = (function (g) {
      var p = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
        v = 0,
        F = {},
        e = {
          manual: g.Prism && g.Prism.manual,
          disableWorkerMessageHandler:
            g.Prism && g.Prism.disableWorkerMessageHandler,
          util: {
            encode: function n(t) {
              return t instanceof l
                ? new l(t.type, n(t.content), t.alias)
                : Array.isArray(t)
                  ? t.map(n)
                  : t
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\u00a0/g, " ");
            },
            type: function (n) {
              return Object.prototype.toString.call(n).slice(8, -1);
            },
            objId: function (n) {
              return (
                n.__id || Object.defineProperty(n, "__id", { value: ++v }),
                n.__id
              );
            },
            clone: function n(t, r) {
              var a, i;
              switch (((r = r || {}), e.util.type(t))) {
                case "Object":
                  if (((i = e.util.objId(t)), r[i])) return r[i];
                  for (var u in ((a = {}), (r[i] = a), t))
                    t.hasOwnProperty(u) && (a[u] = n(t[u], r));
                  return a;
                case "Array":
                  return (
                    (i = e.util.objId(t)),
                    r[i]
                      ? r[i]
                      : ((a = []),
                        (r[i] = a),
                        t.forEach(function (o, c) {
                          a[c] = n(o, r);
                        }),
                        a)
                  );
                default:
                  return t;
              }
            },
            getLanguage: function (n) {
              for (; n; ) {
                var t = p.exec(n.className);
                if (t) return t[1].toLowerCase();
                n = n.parentElement;
              }
              return "none";
            },
            setLanguage: function (n, t) {
              (n.className = n.className.replace(RegExp(p, "gi"), "")),
                n.classList.add("language-" + t);
            },
            currentScript: function () {
              if (typeof document > "u") return null;
              if ("currentScript" in document) return document.currentScript;
              try {
                throw new Error();
              } catch (a) {
                var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) ||
                  [])[1];
                if (n) {
                  var t = document.getElementsByTagName("script");
                  for (var r in t) if (t[r].src == n) return t[r];
                }
                return null;
              }
            },
            isActive: function (n, t, r) {
              for (var a = "no-" + t; n; ) {
                var i = n.classList;
                if (i.contains(t)) return !0;
                if (i.contains(a)) return !1;
                n = n.parentElement;
              }
              return !!r;
            },
          },
          languages: {
            plain: F,
            plaintext: F,
            text: F,
            txt: F,
            extend: function (n, t) {
              var r = e.util.clone(e.languages[n]);
              for (var a in t) r[a] = t[a];
              return r;
            },
            insertBefore: function (n, t, r, a) {
              var i = (a = a || e.languages)[n],
                u = {};
              for (var o in i)
                if (i.hasOwnProperty(o)) {
                  if (o == t)
                    for (var c in r) r.hasOwnProperty(c) && (u[c] = r[c]);
                  r.hasOwnProperty(o) || (u[o] = i[o]);
                }
              var m = a[n];
              return (
                (a[n] = u),
                e.languages.DFS(e.languages, function (h, T) {
                  T === m && h != n && (this[h] = u);
                }),
                u
              );
            },
            DFS: function n(t, r, a, i) {
              i = i || {};
              var u = e.util.objId;
              for (var o in t)
                if (t.hasOwnProperty(o)) {
                  r.call(t, o, t[o], a || o);
                  var c = t[o],
                    m = e.util.type(c);
                  m !== "Object" || i[u(c)]
                    ? m !== "Array" ||
                      i[u(c)] ||
                      ((i[u(c)] = !0), n(c, r, o, i))
                    : ((i[u(c)] = !0), n(c, r, null, i));
                }
            },
          },
          plugins: {},
          highlightAll: function (n, t) {
            e.highlightAllUnder(document, n, t);
          },
          highlightAllUnder: function (n, t, r) {
            var a = {
              callback: r,
              container: n,
              selector:
                'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
            };
            e.hooks.run("before-highlightall", a),
              (a.elements = Array.prototype.slice.apply(
                a.container.querySelectorAll(a.selector),
              )),
              e.hooks.run("before-all-elements-highlight", a);
            for (var i, u = 0; (i = a.elements[u++]); )
              e.highlightElement(i, t === !0, a.callback);
          },
          highlightElement: function (n, t, r) {
            var a = e.util.getLanguage(n),
              i = e.languages[a];
            e.util.setLanguage(n, a);
            var u = n.parentElement;
            u && u.nodeName.toLowerCase() === "pre" && e.util.setLanguage(u, a);
            var o = {
              element: n,
              language: a,
              grammar: i,
              code: n.textContent,
            };
            function c(h) {
              (o.highlightedCode = h),
                e.hooks.run("before-insert", o),
                (o.element.innerHTML = o.highlightedCode),
                e.hooks.run("after-highlight", o),
                e.hooks.run("complete", o),
                r && r.call(o.element);
            }
            if (
              (e.hooks.run("before-sanity-check", o),
              (u = o.element.parentElement) &&
                u.nodeName.toLowerCase() === "pre" &&
                !u.hasAttribute("tabindex") &&
                u.setAttribute("tabindex", "0"),
              !o.code)
            )
              return e.hooks.run("complete", o), void (r && r.call(o.element));
            if ((e.hooks.run("before-highlight", o), o.grammar))
              if (t && g.Worker) {
                var m = new Worker(e.filename);
                (m.onmessage = function (h) {
                  c(h.data);
                }),
                  m.postMessage(
                    JSON.stringify({
                      language: o.language,
                      code: o.code,
                      immediateClose: !0,
                    }),
                  );
              } else c(e.highlight(o.code, o.grammar, o.language));
            else c(e.util.encode(o.code));
          },
          highlight: function (n, t, r) {
            var a = { code: n, grammar: t, language: r };
            if ((e.hooks.run("before-tokenize", a), !a.grammar))
              throw new Error(
                'The language "' + a.language + '" has no grammar.',
              );
            return (
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run("after-tokenize", a),
              l.stringify(e.util.encode(a.tokens), a.language)
            );
          },
          tokenize: function (n, t) {
            var r = t.rest;
            if (r) {
              for (var a in r) t[a] = r[a];
              delete t.rest;
            }
            var i = new x();
            return (
              y(i, i.head, n),
              f(n, i, t, i.head, 0),
              (function (u) {
                for (var o = [], c = u.head.next; c !== u.tail; )
                  o.push(c.value), (c = c.next);
                return o;
              })(i)
            );
          },
          hooks: {
            all: {},
            add: function (n, t) {
              var r = e.hooks.all;
              (r[n] = r[n] || []), r[n].push(t);
            },
            run: function (n, t) {
              var r = e.hooks.all[n];
              if (r && r.length) for (var a, i = 0; (a = r[i++]); ) a(t);
            },
          },
          Token: l,
        };
      function l(n, t, r, a) {
        (this.type = n),
          (this.content = t),
          (this.alias = r),
          (this.length = 0 | (a || "").length);
      }
      function d(n, t, r, a) {
        n.lastIndex = t;
        var i = n.exec(r);
        if (i && a && i[1]) {
          var u = i[1].length;
          (i.index += u), (i[0] = i[0].slice(u));
        }
        return i;
      }
      function f(n, t, r, a, i, u) {
        for (var o in r)
          if (r.hasOwnProperty(o) && r[o]) {
            var c = r[o];
            c = Array.isArray(c) ? c : [c];
            for (var m = 0; m < c.length; ++m) {
              if (u && u.cause == o + "," + m) return;
              var h = c[m],
                T = h.inside,
                B = !!h.lookbehind,
                I = !!h.greedy,
                W = h.alias;
              if (I && !h.pattern.global) {
                var H = h.pattern.toString().match(/[imsuy]*$/)[0];
                h.pattern = RegExp(h.pattern.source, H + "g");
              }
              for (
                var M = h.pattern || h, b = a.next, A = i;
                b !== t.tail && !(u && A >= u.reach);
                A += b.value.length, b = b.next
              ) {
                var j = b.value;
                if (t.length > n.length) return;
                if (!(j instanceof l)) {
                  var $,
                    C = 1;
                  if (I) {
                    if (!($ = d(M, A, n, B)) || $.index >= n.length) break;
                    var L = $.index,
                      J = $.index + $[0].length,
                      S = A;
                    for (S += b.value.length; L >= S; )
                      S += (b = b.next).value.length;
                    if (((A = S -= b.value.length), b.value instanceof l))
                      continue;
                    for (
                      var O = b;
                      O !== t.tail && (S < J || typeof O.value == "string");
                      O = O.next
                    )
                      C++, (S += O.value.length);
                    C--, (j = n.slice(A, S)), ($.index -= A);
                  } else if (!($ = d(M, 0, j, B))) continue;
                  L = $.index;
                  var N = $[0],
                    P = j.slice(0, L),
                    q = j.slice(L + N.length),
                    R = A + j.length;
                  u && R > u.reach && (u.reach = R);
                  var D = b.prev;
                  if (
                    (P && ((D = y(t, D, P)), (A += P.length)),
                    w(t, D, C),
                    (b = y(t, D, new l(o, T ? e.tokenize(N, T) : N, W, N))),
                    q && y(t, b, q),
                    C > 1)
                  ) {
                    var Z = { cause: o + "," + m, reach: R };
                    f(n, t, r, b.prev, A, Z),
                      u && Z.reach > u.reach && (u.reach = Z.reach);
                  }
                }
              }
            }
          }
      }
      function x() {
        var n = { value: null, prev: null, next: null },
          t = { value: null, prev: n, next: null };
        (n.next = t), (this.head = n), (this.tail = t), (this.length = 0);
      }
      function y(n, t, r) {
        var a = t.next,
          i = { value: r, prev: t, next: a };
        return (t.next = i), (a.prev = i), n.length++, i;
      }
      function w(n, t, r) {
        for (var a = t.next, i = 0; i < r && a !== n.tail; i++) a = a.next;
        (t.next = a), (a.prev = t), (n.length -= i);
      }
      if (
        ((g.Prism = e),
        (l.stringify = function n(t, r) {
          if (typeof t == "string") return t;
          if (Array.isArray(t)) {
            var a = "";
            return (
              t.forEach(function (m) {
                a += n(m, r);
              }),
              a
            );
          }
          var i = {
              type: t.type,
              content: n(t.content, r),
              tag: "span",
              classes: ["token", t.type],
              attributes: {},
              language: r,
            },
            u = t.alias;
          u &&
            (Array.isArray(u)
              ? Array.prototype.push.apply(i.classes, u)
              : i.classes.push(u)),
            e.hooks.run("wrap", i);
          var o = "";
          for (var c in i.attributes)
            o +=
              " " +
              c +
              '="' +
              (i.attributes[c] || "").replace(/"/g, "&quot;") +
              '"';
          return (
            "<" +
            i.tag +
            ' class="' +
            i.classes.join(" ") +
            '"' +
            o +
            ">" +
            i.content +
            "</" +
            i.tag +
            ">"
          );
        }),
        !g.document)
      )
        return (
          g.addEventListener &&
            (e.disableWorkerMessageHandler ||
              g.addEventListener(
                "message",
                function (n) {
                  var t = JSON.parse(n.data),
                    r = t.language,
                    a = t.code,
                    i = t.immediateClose;
                  g.postMessage(e.highlight(a, e.languages[r], r)),
                    i && g.close();
                },
                !1,
              )),
          e
        );
      var k = e.util.currentScript();
      function _() {
        e.manual || e.highlightAll();
      }
      if (
        (k &&
          ((e.filename = k.src),
          k.hasAttribute("data-manual") && (e.manual = !0)),
        !e.manual)
      ) {
        var E = document.readyState;
        E === "loading" || (E === "interactive" && k && k.defer)
          ? document.addEventListener("DOMContentLoaded", _)
          : window.requestAnimationFrame
            ? window.requestAnimationFrame(_)
            : window.setTimeout(_, 16);
      }
      return e;
    })(G);
  typeof z < "u" && z.exports && (z.exports = s),
    typeof global < "u" && (global.Prism = s);
  (s.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              { pattern: /^=/, alias: "attr-equals" },
              { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
            ],
          },
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (s.languages.markup.tag.inside["attr-value"].inside.entity =
      s.languages.markup.entity),
    (s.languages.markup.doctype.inside["internal-subset"].inside =
      s.languages.markup),
    s.hooks.add("wrap", function (g) {
      g.type === "entity" &&
        (g.attributes.title = g.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(s.languages.markup.tag, "addInlined", {
      value: function (g, p) {
        var v = {};
        (v["language-" + p] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: s.languages[p],
        }),
          (v.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var F = {
          "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: v },
        };
        F["language-" + p] = { pattern: /[\s\S]+/, inside: s.languages[p] };
        var e = {};
        (e[g] = {
          pattern: RegExp(
            "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
              /__/g,
              function () {
                return g;
              },
            ),
            "i",
          ),
          lookbehind: !0,
          greedy: !0,
          inside: F,
        }),
          s.languages.insertBefore("markup", "cdata", e);
      },
    }),
    Object.defineProperty(s.languages.markup.tag, "addAttribute", {
      value: function (g, p) {
        s.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            `(^|["'\\s])(?:` +
              g +
              `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,
            "i",
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [p, "language-" + p],
                  inside: s.languages[p],
                },
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (s.languages.html = s.languages.markup),
    (s.languages.mathml = s.languages.markup),
    (s.languages.svg = s.languages.markup),
    (s.languages.xml = s.languages.extend("markup", {})),
    (s.languages.ssml = s.languages.xml),
    (s.languages.atom = s.languages.xml),
    (s.languages.rss = s.languages.xml);
  (function (g) {
    var p =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (g.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp(
          `@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|` +
            p.source +
            ")*?(?:;|(?=\\s*\\{))",
        ),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector",
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          "\\burl\\((?:" +
            p.source +
            `|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,
          "i",
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp("^" + p.source + "$"), alias: "url" },
        },
      },
      selector: {
        pattern: RegExp(
          `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
            p.source +
            ")*(?=\\s*\\{)",
        ),
        lookbehind: !0,
      },
      string: { pattern: p, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (g.languages.css.atrule.inside.rest = g.languages.css);
    var v = g.languages.markup;
    v && (v.tag.addInlined("style", "css"), v.tag.addAttribute("style", "css"));
  })(s);
  s.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
  (s.languages.javascript = s.languages.extend("clike", {
    "class-name": [
      s.languages.clike["class-name"],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        "(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])",
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (s.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    s.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern:
          RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: s.languages.regex,
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: s.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: s.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: s.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: s.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    s.languages.insertBefore("javascript", "string", {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
      "template-string": {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation",
              },
              rest: s.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
      },
    }),
    s.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property",
      },
    }),
    s.languages.markup &&
      (s.languages.markup.tag.addInlined("script", "javascript"),
      s.languages.markup.tag.addAttribute(
        "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
        "javascript",
      )),
    (s.languages.js = s.languages.javascript);
  (s.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    "string-interpolation": {
      pattern:
        /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          pattern:
            /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
            "conversion-option": {
              pattern: /![sra](?=[:}]$)/,
              alias: "punctuation",
            },
            rest: null,
          },
        },
        string: /[\s\S]+/,
      },
    },
    "triple-quoted-string": {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: "string",
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0,
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0,
    },
    "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ["annotation", "punctuation"],
      inside: { punctuation: /\./ },
    },
    keyword:
      /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
      /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number:
      /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/,
  }),
    (s.languages.python[
      "string-interpolation"
    ].inside.interpolation.inside.rest = s.languages.python),
    (s.languages.py = s.languages.python);
  (function () {
    if (typeof s < "u") {
      var g =
          Object.assign ||
          function (e, l) {
            for (var d in l) l.hasOwnProperty(d) && (e[d] = l[d]);
            return e;
          },
        p = {
          "remove-trailing": "boolean",
          "remove-indent": "boolean",
          "left-trim": "boolean",
          "right-trim": "boolean",
          "break-lines": "number",
          indent: "number",
          "remove-initial-line-feed": "boolean",
          "tabs-to-spaces": "number",
          "spaces-to-tabs": "number",
        };
      (v.prototype = {
        setDefaults: function (e) {
          this.defaults = g(this.defaults, e);
        },
        normalize: function (e, l) {
          for (var d in (l = g(this.defaults, l))) {
            var f = d.replace(/-(\w)/g, function (x, y) {
              return y.toUpperCase();
            });
            d !== "normalize" &&
              f !== "setDefaults" &&
              l[d] &&
              this[f] &&
              (e = this[f].call(this, e, l[d]));
          }
          return e;
        },
        leftTrim: function (e) {
          return e.replace(/^\s+/, "");
        },
        rightTrim: function (e) {
          return e.replace(/\s+$/, "");
        },
        tabsToSpaces: function (e, l) {
          return (l = 0 | l || 4), e.replace(/\t/g, new Array(++l).join(" "));
        },
        spacesToTabs: function (e, l) {
          return (l = 0 | l || 4), e.replace(RegExp(" {" + l + "}", "g"), "	");
        },
        removeTrailing: function (e) {
          return e.replace(/\s*?$/gm, "");
        },
        removeInitialLineFeed: function (e) {
          return e.replace(/^(?:\r?\n|\r)/, "");
        },
        removeIndent: function (e) {
          var l = e.match(/^[^\S\n\r]*(?=\S)/gm);
          return l && l[0].length
            ? (l.sort(function (d, f) {
                return d.length - f.length;
              }),
              l[0].length ? e.replace(RegExp("^" + l[0], "gm"), "") : e)
            : e;
        },
        indent: function (e, l) {
          return e.replace(
            /^[^\S\n\r]*(?=\S)/gm,
            new Array(++l).join("	") + "$&",
          );
        },
        breakLines: function (e, l) {
          l = l === !0 ? 80 : 0 | l || 80;
          for (
            var d = e.split(`
`),
              f = 0;
            f < d.length;
            ++f
          )
            if (!(F(d[f]) <= l)) {
              for (
                var x = d[f].split(/(\s+)/g), y = 0, w = 0;
                w < x.length;
                ++w
              ) {
                var k = F(x[w]);
                (y += k) > l &&
                  ((x[w] =
                    `
` + x[w]),
                  (y = k));
              }
              d[f] = x.join("");
            }
          return d.join(`
`);
        },
      }),
        typeof z < "u" && z.exports && (z.exports = v),
        (s.plugins.NormalizeWhitespace = new v({
          "remove-trailing": !0,
          "remove-indent": !0,
          "left-trim": !0,
          "right-trim": !0,
        })),
        s.hooks.add("before-sanity-check", function (e) {
          var l = s.plugins.NormalizeWhitespace;
          if (
            (!e.settings || e.settings["whitespace-normalization"] !== !1) &&
            s.util.isActive(e.element, "whitespace-normalization", !0)
          )
            if ((e.element && e.element.parentNode) || !e.code) {
              var d = e.element.parentNode;
              if (e.code && d && d.nodeName.toLowerCase() === "pre") {
                for (var f in (e.settings == null && (e.settings = {}), p))
                  if (Object.hasOwnProperty.call(p, f)) {
                    var x = p[f];
                    if (d.hasAttribute("data-" + f))
                      try {
                        var y = JSON.parse(
                          d.getAttribute("data-" + f) || "true",
                        );
                        typeof y === x && (e.settings[f] = y);
                      } catch {}
                  }
                for (
                  var w = d.childNodes, k = "", _ = "", E = !1, n = 0;
                  n < w.length;
                  ++n
                ) {
                  var t = w[n];
                  t == e.element
                    ? (E = !0)
                    : t.nodeName === "#text" &&
                      (E ? (_ += t.nodeValue) : (k += t.nodeValue),
                      d.removeChild(t),
                      --n);
                }
                if (e.element.children.length && s.plugins.KeepMarkup) {
                  var r = k + e.element.innerHTML + _;
                  (e.element.innerHTML = l.normalize(r, e.settings)),
                    (e.code = e.element.textContent);
                } else
                  (e.code = k + e.code + _),
                    (e.code = l.normalize(e.code, e.settings));
              }
            } else e.code = l.normalize(e.code, e.settings);
        });
    }
    function v(e) {
      this.defaults = g({}, e);
    }
    function F(e) {
      for (var l = 0, d = 0; d < e.length; ++d)
        e.charCodeAt(d) == 9 && (l += 3);
      return e.length + l;
    }
  })();
});
export default V();

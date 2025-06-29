/*! For license information please see content.js.LICENSE.txt */
(() => {
  var e = {
    551: (e, n, t) => {
      var r = t(540),
        a = t(194),
        MSApp = window.MSApp, // Declare MSApp variable
        ya = (node) => node, // Declare ya variable
        xa = (node) => node, // Declare xa variable
        ba = (node) => node, // Declare ba variable
        Gr = (node, eventType) => [], // Declare Gr variable
        wa = (node) => node, // Declare wa variable
        ga = "someKey", // Declare ga variable
        $r = (inst, listener, currentTarget) => ({ inst, listener, currentTarget }); // Declare $r variable

      function i(e) {
        for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
          n += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }

      var l = new Set(),
        o = {};

      function s(e, n) {
        u(e, n), u(e + "Capture", n);
      }

      function u(e, n) {
        for (o[e] = n, e = 0; e < n.length; e++) l.add(n[e]);
      }

      var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        d = Object.prototype.hasOwnProperty,
        f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = {},
        h = {};

      function g(e, n, t, r, a, i, l) {
        this.acceptsBooleans = 2 === n || 3 === n || 4 === n;
        this.attributeName = r;
        this.attributeNamespace = a;
        this.mustUseProperty = t;
        this.propertyName = e;
        this.type = n;
        this.sanitizeURL = i;
        this.removeEmptyString = l;
      }

      var m = {};

      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(((e) => {
        m[e] = new g(e, 0, !1, e, null, !1, !1);
      }));

      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(((e) => {
        var n = e[0];
        m[n] = new g(n, 1, !1, e[1], null, !1, !1);
      }));

      ["contentEditable", "draggable", "spellCheck", "value"].forEach(((e) => {
        m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }));

      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(((e) => {
        m[e] = new g(e, 2, !1, e, null, !1, !1);
      }));

      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(((e) => {
        m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }));

      ["checked", "multiple", "muted", "selected"].forEach(((e) => {
        m[e] = new g(e, 3, !0, e, null, !1, !1);
      }));

      ["capture", "download"].forEach(((e) => {
        m[e] = new g(e, 4, !1, e, null, !1, !1);
      }));

      ["cols", "rows", "size", "span"].forEach(((e) => {
        m[e] = new g(e, 6, !1, e, null, !1, !1);
      }));

      ["rowSpan", "start"].forEach(((e) => {
        m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }));

      var v = /[-:]([a-z])/g;

      function b(e) {
        return e[1].toUpperCase();
      }

      function y(e, n, t, r) {
        var a = m.hasOwnProperty(n) ? m[n] : null;
        (null !== a ? 0 !== a.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (((e, n, t, r) => {
          if (null == n || ((e, n, t, r) => {
            if (null !== t && 0 === t.type) return !1;
            switch (typeof n) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
              default:
                return !1;
            }
          })(e, n, t, r)) return !0;
        if (r) return !1;
        if (null !== t) switch (t.type) {
          case 3:
            return !n;
          case 4:
            return !1 === n;
          case 5:
            return isNaN(n);
          case 6:
            return isNaN(n) || 1 > n;
        }
        return !1;
      })\
      (n, t, a, r) && (t = null), r || null === a ? ((e) => !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1)))(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "\" + t)) : a.mustUseProperty ? e[a.propertyName] = null === t ? 3 !== a.type && \"\" : t : ((n = a.attributeName, r = a.attributeNamespace), null === t ? e.removeAttribute(n) : (t = 3 === (a = a.type) || 4 === a && !0 === t ? \"\" : \"\" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t)));
    }\
  };

  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(((e) => {
    var n = e.replace(v, b);
    m[n] = new g(n, 1, !1, e, null, !1, !1);
  }));

  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(((e) => {
    var n = e.replace(v, b);
    m[n] = new g(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }));

  ["xml:base", "xml:lang", "xml:space"].forEach(((e) => {
    var n = e.replace(v, b);
    m[n] = new g(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }));

  ["tabIndex", "crossOrigin"].forEach(((e) => {
    m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }));

  m.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);

  ["src", "href", "action", "formAction"].forEach(((e) => {
    m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
  }));

  var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    x = Symbol.for("react.element"),
    k = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    S = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    N = Symbol.for("react.provider"),
    C = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    L = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    A = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    z = Symbol.for("react.offscreen");

  Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");

  var I = Symbol.iterator;

  function O(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof (e = I && e[I] || e["@@iterator"]) ? e : null;
  }

  var D, M = Object.assign;

  function F(e) {
    if (void 0 === D) try {
      throw Error();
    } catch (e) {
      var n = e.stack.trim().match(/\n( *(at )?)/);
      D = n && n[1] || "";
    }
    return "\n" + D + e;
  }

  var U = !1;

  function B(e, n) {
    if (!e || U) return "";
    U = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = () => {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", {
        set: () => {
          throw Error();
        }
      }), "object" == typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (e) {
          var r = e;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (e) {
          r = e;
        }
        e.call(n.prototype);
      } else {
        try {
          throw Error();
        } catch (e) {
          r = e;
        }
        e();
      }
    } catch (n) {
      if (n && r && "string" == typeof n.stack) {
        for (var a = n.stack.split("\n"), i = r.stack.split("\n"), l = a.length - 1, o = i.length - 1; 1 <= l && 0 <= o && a[l] !== i[o];) o--;
        for (; 1 <= l && 0 <= o; l--, o--) if (a[l] !== i[o]) {
          if (1 !== l || 1 !== o) do {
            if (l--, 0 > --o || a[l] !== i[o]) {
              var s = "\n" + a[l].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          } while (1 <= l && 0 <= o);
          break;
        }
      }
    } finally {
      U = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }

  function j(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return B(e.type, !1);
      case 11:
        return B(e.type.render, !1);
      case 1:
        return B(e.type, !0);
      default:
        return "";
    }
  }

  function H(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case _:
        return "Fragment";
      case k:
        return "Portal";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case L:
        return "Suspense";
      case P:
        return "SuspenseList";
    }
    if ("object" == typeof e) switch (e.$$typeof) {
      case C:
        return (e.displayName || "Context") + ".Consumer";
      case N:
        return (e._context.displayName || "Context") + ".Provider";
      case T:
        var n = e.render;
        return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case A:
        return null !== (n = e.displayName || null) ? n : H(e.type) || "Memo";
      case R:
        n = e._payload;
        e = e._init;
        try {
          return H(e(n));
        } catch (e) {
        }
    }
    return null;
  }

  function V(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = (e = n.render).displayName || e.name || "", n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return H(n);
      case 8:
        return n === S ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" == typeof n) return n.displayName || n.name || null;
        if ("string" == typeof n) return n;
    }
    return null;
  }

  function W(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e;
      default:
        return "";
    }
  }

  function $(e) {
    var n = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n);
  }

  function G(e) {
    e._valueTracker || (e._valueTracker = ((e) => {
      var n = $(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
      if (!e.hasOwnProperty(n) && void 0 !== t && "function" == typeof t.get && "function" == typeof t.set) {
        var a = t.get,
          i = t.set;
        return Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (e) {
            r = "" + e, i.call(this, e);
          }
        }), Object.defineProperty(e, n, {
          enumerable: t.enumerable
        }), {
          getValue: () => r,
          setValue: (e) => {
            r = "" + e;
          },
          stopTracking: () => {
            e._valueTracker = null, delete e[n];
          }
        };
      }
    })(e));
  }

  function Q(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== t && (n.setValue(e), !0);
  }

  function X(e) {
    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
    try {
      return e.activeElement || e.body;
    } catch (n) {
      return e.body;
    }
  }

  function Y(e, n) {
    var t = null == n.defaultValue ? "" : n.defaultValue,
      r = null != n.checked ? n.checked : n.defaultChecked;
    t = W(null != n.value ? n.value : t);
    e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
    };
  }

  function q(e, n) {
    var t = null == n.defaultValue ? "" : n.defaultValue,
      r = null != n.checked ? n.checked : n.defaultChecked;
    t = W(n.value);
    e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
    };
  }

  function K(e, n) {
    null != (n = n.checked) && y(e, "checked", n, !1);
  }

  function J(e, n) {
    K(e, n);
    var t = W(n.value),
      r = n.type;
    null != t ? "number" === r ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t) : "submit" === r || "reset" === r ? void e.removeAttribute("value") : n.hasOwnProperty("value") ? ee(e, n.type, t) : n.hasOwnProperty("defaultValue") && ee(e, n.type, W(n.defaultValue)), null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked);
  }

  function Z(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!("submit" !== r && "reset" !== r || void 0 !== n.value && null !== n.value)) return;
      n = "" + e._wrapperState.initialValue;
      t || n === e.value || (e.value = n);
      e.defaultValue = n;
    }
    "" !== (t = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== t && (e.name = t);
  }

  function ee(e, n, t) {
    "number" === n && X(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }

  var ne = Array.isArray;

  function te(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
      for (t = 0; t < e.length; t++) a = n.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + W(t), n = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
        null !== n || e[a].disabled || (n = e[a]);
      }
      null !== n && (n.selected = !0);
    }
  }

  function re(e, n) {
    if (null != n.dangerouslySetInnerHTML) throw Error(i(91));
    return M({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }

  function ae(e, n) {
    var t = n.value;\
    null == t && (t = n.children, n = n.defaultValue, null != t && (null != n && throw Error(i(92)), ne(t) && (1 < t.length && throw Error(i(93)), t = t[0]), n = t);
    null == n && (n = "");
    t = n;
  }

  e._wrapperState = {
    initialValue: W(t)
  };
  }
\
function ie(e, n) {
  var t = W(n.value),
    r = W(n.defaultValue)
  null != t &&
    ((t = "" + t) !== e.value && (e.value = t), null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
    null != r && (e.defaultValue = "" + r)
}

function le(e) {
  var n = e.textContent
  n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n)
}

function oe(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg"
    case "math":
      return "http://www.w3.org/1998/Math/MathML"
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function se(e, n) {
  return null == e || "http://www.w3.org/1999/xhtml" === e
    ? oe(n)
    : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
      ? "http://www.w3.org/1999/xhtml"
      : e
}

var ue,
  ce,
  de =
    ((ce = (e, n) => {
      if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = n
      else {
        for (
          (ue = ue || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = ue.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild)
        while (n.firstChild) e.appendChild(n.firstChild)
      }
    }),
    "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? (e, n, t, r) => {
          MSApp.execUnsafeLocalFunction(() => ce(e, n))
        }
      : ce)

function fe(e, n) {
  if (n) {
    var t = e.firstChild
    if (t && t === e.lastChild && 3 === t.nodeType) return void (t.nodeValue = n)
  }
  e.textContent = n
}

var pe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  he = ["Webkit", "ms", "Moz", "O"]

function ge(e, n, t) {
  return null == n || "boolean" == typeof n || "" === n
    ? ""
    : t || "number" != typeof n || 0 === n || (pe.hasOwnProperty(e) && pe[e])
      ? ("" + n).trim()
      : n + "px"
}

function me(e, n) {
  for (var t in ((e = e.style), n))
    if (n.hasOwnProperty(t)) {
      var r = 0 === t.indexOf("--"),
        a = ge(t, n[t], r)
      "float" === t && (t = "cssFloat"), r ? e.setProperty(t, a) : (e[t] = a)
    }
}

Object.keys(pe).forEach((e) => {
  he.forEach((n) => {
    ;(n = n + e.charAt(0).toUpperCase() + e.substring(1)), (pe[n] = pe[e])
  })
})

var ve = M(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)

function be(e, n) {
  if (n) {
    if (ve[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(i(137, e))
    if (null != n.dangerouslySetInnerHTML) {
      if (null != n.children) throw Error(i(60))
      if ("object" != typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML)) throw Error(i(61))
    }
    if (null != n.style && "object" != typeof n.style) throw Error(i(62))
  }
}

function ye(e) {
  if (-1 === e.indexOf("-")) return "string" == typeof e.is
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1
    default:
      return !0
  }
}

var we = null

function xe(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  )
}

var ke = null,
  _e = null,
  Se = null

function Ee(e) {
  if ((e = ya(e))) {
    if ("function" != typeof ke) throw Error(i(280))
    var n = e.stateNode
    n && ((n = xa(n)), ke(e.stateNode, e.type, n))
  }
}

function Ne(e) {
  _e ? (Se ? Se.push(e) : (Se = [e])) : (_e = e)
}

function Ce() {
  if (_e) {
    var e = _e,
      n = Se
    ;(Se = _e = null), Ee(e), n && (Le(), Ce())
  }
}

function Te(e, n) {
  return e(n)
}

function Le() {}

var Pe = !1

function Ae(e, n, t) {
  if (Pe) return e(n, t)
  Pe = !0
  try {
    return Te(e, n, t)
  } finally {
    ;(Pe = !1), (null !== _e || null !== Se) && (Le(), Ce())
  }
}

function Re(e, n) {
  var t = e.stateNode
  if (null === t) return null
  var r = xa(t)
  if (null === r) return null
  t = r[n]
  switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ;(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e))
      e = !r
      break
    default:
      e = !1
  }
  if (e) return null
  if (t && "function" != typeof t) throw Error(i(231, n, typeof t))
  return t
}

var ze = !1

if (c)
  try {
    var Ie = {}
    Object.defineProperty(Ie, "passive", {
      get: () => {
        ze = !0
      },
    }),
      window.addEventListener("test", Ie, Ie),
      window.removeEventListener("test", Ie, Ie)
  } catch (ce) {
    ze = !1
  }

function Oe(e, n, t, r, a, i, l, o, s) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    n.apply(t, u)
  } catch (e) {
    this.onError(e)
  }
}

var De = !1,
  Me = null,
  Fe = !1,
  Ue = null,
  Be = {
    onError: (e) => {
      ;(De = !0), (Me = e)
    },
  }

function je(e, n, t, r, a, i, l, o, s) {
  ;(De = !1), (Me = null), Oe.apply(Be, arguments)
}

function He(e) {
  var n = e,
    t = e
  if (e.alternate) while (n.return) n = n.return
  else {
    e = n
    do {
      !!(4098 & (n = e).flags) && (t = n.return), (e = n.return)
    } while (e)
  }
  return 3 === n.tag ? t : null
}

function showNotification(message, isSuccess) {
  // Remove any existing notifications
  const existingNotification = document.getElementById("mindwell-notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement("div")
  notification.id = "mindwell-notification"
  notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      padding: 16px 20px;
      border-radius: 12px;
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      max-width: 350px;
      animation: slideIn 0.3s ease-out;
      background: ${
        isSuccess
          ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
          : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
      };
    `

  // Add animation keyframes
  if (!document.getElementById("mindwell-notification-styles")) {
    const style = document.createElement("style")
    style.id = "mindwell-notification-styles"
    style.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `
    document.head.appendChild(style)
  }

  notification.textContent = message
  document.body.appendChild(notification)

  // Auto-remove after 4 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOut 0.3s ease-in"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove()
        }
      }, 300)
    }
  }, 4000)

  // Allow manual dismissal by clicking
  notification.addEventListener("click", () => {
    notification.style.animation = "slideOut 0.3s ease-in"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove()
      }
    }, 300)
  })
}

function Ve(e) {
  if (13 === e.tag) {
    var n = e.memoizedState
    if ((null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n)) return n.dehydrated
  }
  return null
}

function We(e) {
  if (He(e) !== e) throw Error(i(188))
}

function $e(e) {
  return null !==
    (e = ((e) => {
      var n = e.alternate
      if (!n) {
        if (null === (n = He(e))) throw Error(i(188))
        return n !== e ? null : e
      }
      for (var t = e, r = n; ; ) {
        var a = t.return
        if (null === a) break
        var l = a.alternate
        if (null === l) {
          if (null !== (r = a.return)) {
            t = r
            continue
          }
          break
        }
        if (a.child === l.child) {
          for (l = a.child; l; ) {
            if (l === t) return We(a), e
            if (l === r) return We(a), n
            l = l.sibling
          }
          throw Error(i(188))
        }
        if (t.return !== r.return) (t = a), (r = l)
        else {
          for (var o = !1, s = a.child; s; ) {
            if (s === t) {
              ;(o = !0), (t = a), (r = l)
              break
            }
            if (s === r) {
              ;(o = !0), (r = a), (t = l)
              break
            }
            s = s.sibling
          }
          if (!o) {
            for (s = l.child; s; ) {
              if (s === t) {
                ;(o = !0), (t = l), (r = a)
                break
              }
              if (s === r) {
                ;(o = !0), (r = l), (t = a)
                break
              }
              s = s.sibling
            }
            if (!o) throw Error(i(189))
          }
        }
        if (t.alternate !== r) throw Error(i(190))
      }
      if (3 !== t.tag) throw Error(i(188))
      return t.stateNode.current === t ? e : n
    })(e))
    ? Ge(e)
    : null
}

function Ge(e) {
  if (5 === e.tag || 6 === e.tag) return e
  for (e = e.child; null !== e; ) {
    var n = Ge(e)
    if (null !== n) return n
    e = e.sibling
  }
  return null
}

var Qe = a.unstable_scheduleCallback,
  Xe = a.unstable_cancelCallback,
  Ye = a.unstable_shouldYield,
  qe = a.unstable_requestPaint,
  Ke = a.unstable_now,
  Je = a.unstable_getCurrentPriorityLevel,
  Ze = a.unstable_ImmediatePriority,
  en = a.unstable_UserBlockingPriority,
  nn = a.unstable_NormalPriority,
  tn = a.unstable_LowPriority,
  rn = a.unstable_IdlePriority,
  an = null,
  ln = null,
  on = Math.clz32 ? Math.clz32 : (e) => (0 === (e >>>= 0) ? 32 : (31 - ((sn(e) / un) | 0)) | 0),
  sn = Math.log,
  un = Math.LN2,
  cn = 64,
  dn = 4194304

function fn(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}

function pn(e, n) {
  var t = e.pendingLanes
  if (0 === t) return 0
  var r = 0,
    a = e.suspendedLanes,
    i = e.pingedLanes,
    l = 268435455 & t
  if (0 !== l) {
    var o = l & ~a
    0 !== o ? (r = fn(o)) : 0 != (i &= l) && (r = fn(i))
  } else 0 != (l = t & ~a) ? (r = fn(l)) : 0 !== i && (r = fn(i))
  if (0 === r) return 0
  if (0 !== n && n !== r && !(n & a) && ((a = r & -r) >= (i = n & -n) || (16 === a && 4194240 & i))) return n
  if ((4 & r && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
    for (e = e.entanglements, n &= r; 0 < n; ) (a = 1 << (t = 31 - on(n))), (r |= e[t]), (n &= ~a)
  return r
}

function hn(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3
    default:
      return -1
  }
}

function gn(e) {
  return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
}

function mn() {
  var e = cn
  return !(4194240 & (cn <<= 1)) && (cn = 64), e
}

function vn(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e)
  return n
}

function bn(e, n, t) {
  ;(e.pendingLanes |= n),
    536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    ((e = e.eventTimes)[(n = 31 - on(n))] = t)
}

function yn(e, n) {
  var t = (e.entangledLanes |= n)
  for (e = e.entanglements; t; ) {
    var r = 31 - on(t),
      a = 1 << r
    ;(a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a)
  }
  var wn = 0
  function xn(e) {
    return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1
  }
  var kn,
    _n,
    Sn,
    En,
    Nn,
    Cn = !1,
    Tn = [],
    Ln = null,
    Pn = null,
    An = null,
    Rn = new Map(),
    zn = new Map(),
    In = [],
    On =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      )

  function Dn(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ln = null
        break
      case "dragenter":
      case "dragleave":
        Pn = null
        break
      case "mouseover":
      case "mouseout":
        An = null
        break
      case "pointerover":
      case "pointerout":
        Rn.delete(n.pointerId)
        break
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(n.pointerId)
    }
  }

  function Mn(e, n, t, r, a, i) {
    return null === e || e.nativeEvent !== i
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [a],
        }),
        null !== n && null !== (n = ya(n)) && _n(n),
        e)
      : ((e.eventSystemFlags |= r), (n = e.targetContainers), null !== a && -1 === n.indexOf(a) && n.push(a), e)
  }

  function Fn(e) {
    var n = ba(e.target)
    if (null !== n) {
      var t = He(n)
      if (null !== t)
        if (13 === (n = t.tag)) {
          if (null !== (n = Ve(t)))
            return (
              (e.blockedOn = n),
              void Nn(e.priority, () => {
                Sn(t)
              })
            )
        } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn = 3 === n.tag ? t.stateNode.containerInfo : null)
    }
    e.blockedOn = null
  }

  function Un(e) {
    if (null !== e.blockedOn) return !1
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = qn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent)
      if (null !== t) return null !== (n = ya(t)) && _n(n), (e.blockedOn = t), !1
      var r = new (t = e.nativeEvent).constructor(t.type, t)
      ;(we = r), t.target.dispatchEvent(r), (we = null), n.shift()
    }
    return !0
  }

  function Bn(e, n, t) {
    Un(e) && t.delete(n)
  }

  function jn() {
    ;(Cn = !1),
      null !== Ln && Un(Ln) && (Ln = null),
      null !== Pn && Un(Pn) && (Pn = null),
      null !== An && Un(An) && (An = null),
      Rn.forEach(Bn),
      zn.forEach(Bn)
  }

  function Hn(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null), Cn || ((Cn = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, jn)))
  }

  function Vn(e) {
    function n(n) {
      return Hn(n, e)
    }
    if (0 < Tn.length) {
      Hn(Tn[0], e)
      for (var t = 1; t < Tn.length; t++) {
        var r = Tn[t]
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (
      null !== Ln && Hn(Ln, e), null !== Pn && Hn(Pn, e), null !== An && Hn(An, e), Rn.forEach(n), zn.forEach(n), t = 0;
      t < In.length;
      t++
    )
      (r = In[t]).blockedOn === e && (r.blockedOn = null)
    while (0 < In.length && null === (t = In[0]).blockedOn) Fn(t), null === t.blockedOn && In.shift()
  }

  var Wn = w.ReactCurrentBatchConfig,
    $n = !0

  function Gn(e, n, t, r) {
    var a = wn,
      i = Wn.transition
    Wn.transition = null
    try {
      ;(wn = 1), Xn(e, n, t, r)
    } finally {
      ;(wn = a), (Wn.transition = i)
    }
  }

  function Qn(e, n, t, r) {
    var a = wn,
      i = Wn.transition
    Wn.transition = null
    try {
      ;(wn = 4), Xn(e, n, t, r)
    } finally {
      ;(wn = a), (Wn.transition = i)
    }
  }

  function Xn(e, n, t, r) {
    if ($n) {
      var a = qn(e, n, t, r)
      if (null === a) Wr(e, n, r, Yn, t), Dn(e, r)
      else if (
        ((e, n, t, r, a) => {
          switch (n) {
            case "focusin":
              return (Ln = Mn(Ln, e, n, t, r, a)), !0
            case "dragenter":
              return (Pn = Mn(Pn, e, n, t, r, a)), !0
            case "mouseover":
              return (An = Mn(An, e, n, t, r, a)), !0
            case "pointerover":
              var i = a.pointerId
              return Rn.set(i, Mn(Rn.get(i) || null, e, n, t, r, a)), !0
            case "gotpointercapture":
              return (i = a.pointerId), zn.set(i, Mn(zn.get(i) || null, e, n, t, r, a)), !0
          }
          return !1
        })(a, e, n, t, r)
      )
        r.stopPropagation()
      \
        else Dn(e, r), 4 & n && -1 < On.indexOf(e) && (
      while (null !== a) {
        var i = ya(a)
        if ((null !== i && kn(i), null === (i = qn(e, n, t, r)))) Wr(e, n, r, Yn, t), (i = null)
        if (i === a) break
        a = i
        \
      }
      , null !== a && r.stopPropagation())
      \
        else Wr(e, n, r, null, t)
    }
  }

  var Yn = null

  function qn(e, n, t, r) {
    if (((Yn = null), null !== (e = ba((e = xe(r))))))
      if (null === (n = He(e))) e = null
      else if (13 === (t = n.tag)) {
        if (null !== (e = Ve(n))) return e
        e = null
      } else if (3 === t) {
        if (n.stateNode.current.memoizedState.isDehydrated) return 3 === n.tag ? n.stateNode.containerInfo : null
        e = null
      } else n !== e && (e = null)
    return (Yn = e), null
  }

  function Kn(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "playing":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4
      case "message":
        switch (Je()) {
          case Ze:
            return 1
          case en:
            return 4
          case nn:
          case tn:
            return 16
          case rn:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }

  var Jn = null,
    Zn = null,
    et = null

  function nt() {
    if (et) return et
    var e,
      n,
      t = Zn,
      r = t.length,
      a = "value" in Jn ? Jn.value : Jn.textContent,
      i = a.length
    for (e = 0; e < r && t[e] === a[e]; e++);
    var l = r - e
    for (n = 1; n <= l && t[r - n] === a[i - n]; n++);
    return (et = a.slice(e, 1 < n ? 1 - n : void 0))
  }

  function tt(e) {
    var n = e.keyCode
    return (
      "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : (e = n),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    )
  }

  function rt() {
    return !0
  }

  function at() {
    return !1
  }

  function it(e) {
    function n(n, t, r, a, i) {
      for (var l in ((this._reactName = n),
      (this._targetInst = r),
      (this.type = t),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]))
      return (
        (this.isDefaultPrevented = (null !== a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? rt : at),
        (this.isPropagationStopped = at),
        this
      )
    }

    return (
      M(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var e = this.nativeEvent
          e &&
            (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = rt))
        },
        stopPropagation: function () {
          var e = this.nativeEvent
          e &&
            (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = rt))
        },
        persist: () => {},
        isPersistent: rt,
      }),
      n
    )
  }

  var lt,
    ot,
    st,
    ut = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: (e) => e.timeStamp || Date.now(),
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ct = it(ut),
    dt = M({}, ut, {
      view: 0,
      detail: 0,
    }),
    ft = it(dt),
    pt = M({}, dt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Et,
      button: 0,
      buttons: 0,
      relatedTarget: (e) =>
        void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget,
      movementX: (e) =>
        "movementX" in e
          ? e.movementX
          : (e !== st &&
              (st && "mousemove" === e.type
                ? ((lt = e.screenX - st.screenX), (ot = e.screenY - st.screenY))
                : (ot = lt = 0),
              (st = e)),
            lt),
      movementY: (e) => ("movementY" in e ? e.movementY : ot),
    }),
    ht = it(pt),
    gt = it(
      M({}, pt, {
        dataTransfer: 0,
      }),
    ),
    mt = it(
      M({}, dt, {
        relatedTarget: 0,
      }),
    ),
    vt = it(
      M({}, ut, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0,
      }),
    ),
    bt = M({}, ut, {
      clipboardData: (e) => ("clipboardData" in e ? e.clipboardData : window.clipboardData),
    }),
    yt = it(bt),
    wt = it(
      M({}, ut, {
        data: 0,
      }),
    ),
    xt = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    kt = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _t = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    }

  function St(e) {
    var n = this.nativeEvent
    return n.getModifierState ? n.getModifierState(e) : !!(_t[e] && n[_t[e]])
  }

  function Et() {
    return St
  }

  var Nt = M({}, dt, {
      key: (e) => {
        if (e.key) {
          var n = xt[e.key] || e.key
          if ("Unidentified" !== n) return n
        }
        return "keypress" === e.type
          ? 13 === (e = tt(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
            ? kt[e.keyCode] || "Unidentified"
            : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Et,
      charCode: (e) => ("keypress" === e.type ? tt(e) : 0),
      keyCode: (e) => ("keydown" === e.type || "keyup" === e.type ? e.keyCode : 0),
      which: (e) => ("keypress" === e.type ? tt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0),
    }),
    Ct = it(Nt),
    Tt = it(
      M({}, pt, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
    ),
    Lt = it(
      M({}, dt, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Et,
      }),
    ),
    Pt = it(
      M({}, ut, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0,
      }),
    ),
    At = M({}, pt, {
      deltaX: (e) => ("deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0),
      deltaY: (e) =>
        "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0,
      deltaZ: 0,
      deltaMode: 0,
    }),
    Rt = it(At),
    zt = [9, 13, 27, 32],
    It = c && "CompositionEvent" in window,
    Ot = null
  c && "documentMode" in document && (Ot = document.documentMode)
  var Dt = c && "TextEvent" in window && !Ot,
    Mt = c && (!It || (Ot && 8 < Ot && 11 >= Ot)),
    Ft = String.fromCharCode(32),
    Ut = !1

  function Bt(e, n) {
    switch (e) {
      case "keyup":
        return -1 !== zt.indexOf(n.keyCode)
      case "keydown":
        return 229 !== n.keyCode
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0
      default:
        return !1
    }
  }

  function jt(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
  }

  var Ht = !1,
    Vt = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    }

  function Wt(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase()
    return "input" === n ? !!Vt[e.type] : "textarea" === n
  }

  function $t(e, n, t, r) {
    Ne(r),
      0 < (n = Gr(n, "onChange")).length &&
        ((t = new ct("onChange", "change", null, t, r)),
        e.push({
          event: t,
          listeners: n,
        }))
  }

  var Gt = null,
    Qt = null

  function Xt(e) {
    Fr(e, 0)
  }

  function Yt(e) {
    if (Q(wa(e))) return e
  }

  function qt(e, n) {
    if ("click" === e) return n
  }

  var Kt = !1

  if (c) {
    var Jt
    if (c) {
      var Zt = "oninput" in document
      if (!Zt) {
        var er = document.createElement("div")
        er.setAttribute("oninput", "return;"), (Zt = "function" == typeof er.oninput)
      }
      Jt = Zt
    } else Jt = !1
    Kt = Jt && (!document.documentMode || 9 < document.documentMode)
  }

  function nr() {
    Gt && (Gt.detachEvent("onpropertychange", tr), (Qt = Gt = null))
  }

  function tr(e) {
    if ("value" === e.propertyName && Yt(Qt)) {
      var n = []
      $t(n, Qt, e, xe(e)), Ae(Xt, n)
    }
  }

  function rr(e, n, t) {
    "focusin" === e ? (nr(), (Qt = t), (Gt = n).attachEvent("onpropertychange", tr)) : "focusout" === e && nr()
  }

  function ar(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yt(Qt)
  }

  function ir(e, n) {
    if ("click" === e) return Yt(n)
  }

  function lr(e, n) {
    if ("input" === e || "change" === e) return Yt(n)
  }

  var or =
    "function" == typeof Object.is
      ? Object.is
      : (e, n) => (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n)

  function sr(e, n) {
    if (or(e, n)) return !0
    if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1
    var t = Object.keys(e),
      r = Object.keys(n)
    if (t.length !== r.length) return !1
    for (r = 0; r < t.length; r++) {
      var a = t[r]
      if (!d.call(n, a) || !or(e[a], n[a])) return !1
    }
    return !0
  }

  function ur(e) {
    while (e && e.firstChild) e = e.firstChild
    return e
  }

  function cr(e, n) {
    var t,
      r = ur(e)
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((t = e + r.textContent.length), e <= n && t >= n))
          return {
            node: r,
            offset: n - e,
          }
        e = t
      }
      while (r) {
        if (r.nextSibling) {
          r = r.nextSibling
          break
        }
        r = r.parentNode
      }
      r = void 0
    }
    r = ur(r)
  }

  function dr(e, n) {
    return (
      !(!e || !n) &&
      (e === n ||
        ((!e || 3 !== e.nodeType) &&
          (n && 3 === n.nodeType
            ? dr(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n)))))
    )
  }

  function fr() {
    for (var e = window, n = X(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = "string" == typeof n.contentWindow.location.href
      } catch (e) {
        t = !1
      }
      if (!t) break
      n = X((e = n.contentWindow).document)
    }
    return n
  }

  function pr(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      n &&
      (("input" === n &&
        ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) ||
        "textarea" === n ||
        "true" === e.contentEditable)
    )
  }

  function hr(e) {
    var n = fr(),
      t = e.focusedElem,
      r = e.selectionRange
    if (n !== t && t && t.ownerDocument && dr(t.ownerDocument.documentElement, t)) {
      if (null !== r && pr(t))
        if (((n = r.start), void 0 === (e = r.end) && (e = n), "selectionStart" in t))
          (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length))
        else if ((e = ((n = t.ownerDocument || document) && n.defaultView) || window).getSelection) {
          e = e.getSelection()
          var a = t.textContent.length,
            i = Math.min(r.start, a)
          r = void 0 === r.end ? i : Math.min(r.end, a)
          !e.extend && i > r && ((a = r), (r = i), (i = a))
          a = cr(t, i)
          var l = cr(t, r)
          a &&
            l &&
            (1 !== e.rangeCount ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== l.node ||
              e.focusOffset !== l.offset) &&
            ((n = n.createRange()).setStart(a.node, a.offset),
            e.removeAllRanges(),
            i > r ? (e.addRange(n), e.extend(l.node, l.offset)) : (n.setEnd(l.node, l.offset), e.addRange(n)))
        }
    }
    for (n = [], e = t; (e = e.parentNode); )
      1 === e.nodeType &&
        n.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        })
    for ("function" == typeof t.focus && t.focus(), t = 0; t < n.length; t++)
      ((e = n[t]).element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }

  var gr = c && "documentMode" in document && 11 >= document.documentMode,
    mr = null,
    vr = null,
    br = null,
    yr = !1

  function wr(e, n, t) {
    var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument
    yr ||
      null == mr ||
      mr !== X(r) ||
      ((r =
        "selectionStart" in (r = mr) && pr(r)
          ? {
              start: r.selectionStart,
              end: r.selectionEnd,
            }
          : {
              anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
      (br && sr(br, r)) ||
        ((br = r),
        0 < (r = Gr(vr, "onSelect")).length &&
          ((n = new ct("onSelect", "select", null, n, t)),
          e.push({
            event: n,
            listeners: r,
          }),
          (n.target = mr))))
  }

  var xr = (e, n) => {
    var t = {}
    return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n)
  }

  var kr = {
      animationend: xr("Animation", "AnimationEnd"),
      animationiteration: xr("Animation", "AnimationIteration"),
      animationstart: xr("Animation", "AnimationStart"),
      transitionend: xr("Transition", "TransitionEnd"),
    },
    _r = {},
    Sr = {}

  function Er(e) {
    if (_r[e]) return _r[e]
    if (!kr[e]) return e
    var n,
      t = kr[e]
    for (n in t) if (t.hasOwnProperty(n) && n in Sr) return (_r[e] = t[n])
    return e
  }

  c &&
    ((Sr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation),
    "TransitionEvent" in window || delete kr.transitionend.transition)

  var Nr = Er("animationend"),
    Cr = Er("animationiteration"),
    Tr = Er("animationstart"),
    Lr = Er("transitionend"),
    Pr = new Map(),
    Ar =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      )

  function Rr(e, n) {
    Pr.set(e, n), s(n, [e])
  }

  for (var zr = 0; zr < Ar.length; zr++) {
    var Ir = Ar[zr]
    Rr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)))
  }

  Rr(Nr, "onAnimationEnd"),
    Rr(Cr, "onAnimationIteration"),
    Rr(Tr, "onAnimationStart"),
    Rr("dblclick", "onDoubleClick"),
    Rr("focusin", "onFocus"),
    Rr("focusout", "onBlur"),
    Rr(Lr, "onTransitionEnd"),
    s("onMouseEnter", ["mouseout", "mouseover"]),
    s("onMouseLeave", ["mouseout", "mouseover"]),
    s("onPointerEnter", ["pointerout", "pointerover"]),
    s("onPointerLeave", ["pointerout", "pointerover"]),
    s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "))

  var Or =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or))

  function Mr(e, n) {
    var t = e.type || "unknown-event"
    ;(e.currentTarget = n),
      (function (e, n, t, r, a, l, o, s, u) {
        if ((je.apply(this, arguments), De)) {
          if (!De) throw Error(i(198))
          var c = Me
          ;(De = !1), (Me = null), Fe || ((Fe = !0), (Ue = c))
        }
      })(t, n, void 0, e),
      (e.currentTarget = null)
  }

  function Fr(e, n) {
    n = !!(4 & n)
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.event
      r = r.listeners
      e: for (var i = void 0; n; )
        for (var l = r.length - 1; 0 <= l; l--) {
          var o = r[l],
            s = o.instance,
            u = o.currentTarget
          if (((o = o.listener), s !== i && a.isPropagationStopped())) break e
          Mr(a, o, u), (i = s)
        }
      for (l = 0; l < r.length; l++)
        if (((s = (o = r[l]).instance), (u = o.currentTarget), (o = o.listener), s !== i && a.isPropagationStopped()))
          break e;
      Mr(a, o, u), (i = s)
    }
    if (Fe) throw ((e = Ue), (Fe = !1), (Ue = null), e)
  }

  function Ur(e, n) {
    var t = n[ga]
    void 0 === t && (t = n[ga] = new Set())
    var r = e + "__bubble"
    t.has(r) || (Vr(n, e, 2, !1), t.add(r))
  }

  function Br(e, n, t) {
    var r = 0
    n && (r |= 4), Vr(t, e, r, n)
  }

  var jr = "_reactListening" + Math.random().toString(36).slice(2)

  function Hr(e) {
    if (!e[jr]) {
      ;(e[jr] = !0),
        l.forEach((n) => {
          "selectionchange" !== n && (Dr.has(n) || Br(n, !1, e), Br(n, !0, e))
        })
      var n = 9 === e.nodeType ? e : e.ownerDocument
      null === n || n[jr] || ((n[jr] = !0), Br("selectionchange", !1, n))
    }
  }

  function Vr(e, n, t, r) {
    switch (Kn(n)) {
      case 1:
        var a = Gn
        break
      case 4:
        a = Qn
        break
      default:
        a = Xn
    }
    ;(t = a.bind(null, n, t, e)),
      (a = void 0),
      !ze || ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) || (a = !0),
      r
        ? void 0 !== a
          ? e.addEventListener(n, t, {
              capture: !0,
              passive: a,
            })
          : e.addEventListener(n, t, !0)
        : void 0 !== a
          ? e.addEventListener(n, t, {
              passive: a,
            })
          : e.addEventListener(n, t, !1)
  }

  function Wr(e, n, t, r, a) {
    var i = r
    if (!(1 & n || 2 & n || null === r))
      e: for (;;) {
        if (null === r) return
        var l = r.tag
        if (3 === l || 4 === l) {
          var o = r.stateNode.containerInfo
          if (o === a || (8 === o.nodeType && o.parentNode === a)) break
          if (4 === l)
            for (l = r.return; null !== l; ) {
              var s = l.tag
              if (
                (3 === s || 4 === s) &&
                ((s = l.stateNode.containerInfo) === a || (8 === s.nodeType && s.parentNode === a))
              )
                return
              l = l.return
            }
          while (null !== o) {
            if (null === (l = ba(o))) return
            if (5 === (s = l.tag) || 6 === s) {
              r = i = l
              continue e
            }
            o = o.parentNode
          }
        }
        r = r.return
      }
    r = r.return
  }

  Ae(() => {
    var r = i,
      a = xe(t),
      l = []
    e: for (var o = Pr.get(e); void 0 !== o; ) {
      var s = ct,
        u = e
      switch (e) {
        case "keypress":
          if (0 === tt(t)) break e
        case "keydown":
        case "keyup":
          s = Ct
          break
        case "focusin":
          ;(u = "focus"), (s = mt)
          break
        case "focusout":
          ;(u = "blur"), (s = mt)
          break
        case "beforeblur":
        case "afterblur":
          s = mt
          break
        case "click":
          if (2 === t.button) break e
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          s = ht
          break
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          s = gt
          break
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          s = Lt
          break
        case Nr:
        case Cr:
        case Tr:
          s = vt
          break
        case Lr:
          s = Pt
          break
        case "scroll":
          s = ft
          break
        case "wheel":
          s = Rt
          break
        case "copy":
        case "cut":
        case "paste":
          s = yt
          break
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          s = Tt
      }
      var c = !!(4 & n),
        d = !c && "scroll" === e,
        f = c ? (null !== o ? o + "Capture" : null) : o
      c = []
      for (var p, h = r; null !== h; ) {
        var g = (p = h).stateNode
        if (5 === p.tag && null !== g && ((p = g), null !== f && null !== (g = Re(h, f)) && c.push($r(h, g, p))));
        d &&
        break
        h = h.return
      }
      0 < c.length &&
        ((o = new s(o, u, null, t, a)),
        l.push({
          event: o,
          listeners: c,
        }))
    }
    if (!(7 & n)) {
      if (
        ((s = "mouseout" === e || "pointerout" === e),
        !(o = "mouseover" === e || "pointerover" === e) ||
          t === we ||
          !(u = t.relatedTarget || t.fromElement) ||
          (!ba(u) && ""))
      )
        return
    }
  })
}

// Content script for MindWell Knowledge Hub extension
console.log("MindWell content script loaded")

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "SHOW_NOTIFICATION") {
    showNotification(request.message, request.success)
    sendResponse({ received: true })
  }
})
\
})()

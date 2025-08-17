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
        (null !== a ? 0 !== a.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (function(e, n, t, r) {
          if (null == n || function(e, n, t, r) {
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
          }(e, n, t, r)) return !0;
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
        }(n, t, a, r) && (t = null), r || null === a ? (function(e) {
          return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1));
        })(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = null === t ? 3 !== a.type && "" : t : ((n = a.attributeName, r = a.attributeNamespace), null === t ? e.removeAttribute(n) : (t = 3 === (a = a.type) || 4 === a && !0 === t ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
      }

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
          if (n) {
            if (n = function() {
              throw Error();
            }, Object.defineProperty(n.prototype, "props", {
              set: function() {
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
            }
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
            for (; 1 <= l && 0 <= o; l--, o--) {
              if (a[l] !== i[o]) {
                if (1 !== l || 1 !== o) {
                  do {
                    if (l--, 0 > --o || a[l] !== i[o]) {
                      var s = "\n" + a[l].replace(" at new ", " at ");
                      return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                    }
                  } while (1 <= l && 0 <= o);
                }
                break;
              }
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
            } catch (e) {}
        }
        return null;
      }

      function V(e) {
        var n = e.stateNode;
        if (null === n) return null;
        var t = xa(n);
        if (null === t) return null;
        t = t[n];
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
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e));
            e = !r;
            break;
          default:
            e = !1;
        }
        if (e) return null;
        if (t && "function" != typeof t) throw Error(i(231, n, typeof t));
        return t;
      }

      var W = {
          onError: function(e) {
            De = !0, Me = e;
          }
        },
        $ = !1,
        G = null,
        Q = !1,
        X = null;

      function Y(e, n, t, r, a, i, l, o, s) {
        De = !1, G = null, Oe.apply(W, arguments);
      }

      function q(e) {
        var n = e,
          t = e;
        if (e.alternate) while (n.return) n = n.return;
        else {
          e = n;
          do {
            if (4098 & (n = e).flags) t = n.return;
            e = n.return;
          } while (e);
        }
        return 3 === n.tag ? t : null;
      }

      function showNotification(message, isSuccess) {
        // Remove any existing notifications
        const existingNotification = document.getElementById("mindwell-notification");
        if (existingNotification) {
          existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement("div");
        notification.id = "mindwell-notification";
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
        `;

        // Add animation keyframes
        if (!document.getElementById("mindwell-notification-styles")) {
          const style = document.createElement("style");
          style.id = "mindwell-notification-styles";
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
          `;
          document.head.appendChild(style);
        }

        notification.textContent = message;
        document.body.appendChild(notification);

        // Auto-remove after 4 seconds
        setTimeout(() => {
          if (notification.parentNode) {
            notification.style.animation = "slideOut 0.3s ease-in";
            setTimeout(() => {
              if (notification.parentNode) {
                notification.remove();
              }
            }, 300);
          }
        }, 4000);

        // Allow manual dismissal by clicking
        notification.addEventListener("click", () => {
          notification.style.animation = "slideOut 0.3s ease-in";
          setTimeout(() => {
            if (notification.parentNode) {
              notification.remove();
            }
          }, 300);
        });
      }

      // Content script for MindWell Knowledge Hub extension
      console.log("MindWell content script loaded");

      // Listen for messages from the popup or background script
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.type === "SHOW_NOTIFICATION") {
          showNotification(request.message, request.success);
          sendResponse({ received: true });
        }
      });
    }
  };

  // Execute the module
  e[551](e, e[551], t);
})();
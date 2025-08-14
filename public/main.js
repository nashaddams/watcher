var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno:https://esm.sh/react@19.1.1/denonext/jsx-runtime.mjs
var p = Object.create;
var j = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var a = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf;
var T = Object.prototype.hasOwnProperty;
var n = (e, r3) => () => (r3 || e((r3 = {
  exports: {}
}).exports, r3), r3.exports);
var f = (e, r3, t, o4) => {
  if (r3 && typeof r3 == "object" || typeof r3 == "function") for (let s2 of a(r3)) !T.call(e, s2) && s2 !== t && j(e, s2, {
    get: () => r3[s2],
    enumerable: !(o4 = v(r3, s2)) || o4.enumerable
  });
  return e;
};
var m = (e, r3, t) => (t = e != null ? p(k(e)) : {}, f(r3 || !e || !e.__esModule ? j(t, "default", {
  value: e,
  enumerable: true
}) : t, e));
var E = n((l6) => {
  "use strict";
  var _5 = Symbol.for("react.transitional.element"), c3 = Symbol.for("react.fragment");
  function x9(e, r3, t) {
    var o4 = null;
    if (t !== void 0 && (o4 = "" + t), r3.key !== void 0 && (o4 = "" + r3.key), "key" in r3) {
      t = {};
      for (var s2 in r3) s2 !== "key" && (t[s2] = r3[s2]);
    } else t = r3;
    return r3 = t.ref, {
      $$typeof: _5,
      type: e,
      key: o4,
      ref: r3 !== void 0 ? r3 : null,
      props: t
    };
  }
  l6.Fragment = c3;
  l6.jsx = x9;
  l6.jsxs = x9;
});
var i = n((P6, d4) => {
  "use strict";
  d4.exports = E();
});
var u = m(i());
var { Fragment: R, jsx: q, jsxs: C } = u;
var M = u.default ?? u;

// deno:https://esm.sh/react@19.1.1?target=es2022
var react_19_1_exports = {};
__export(react_19_1_exports, {
  Children: () => ce,
  Component: () => pe,
  Fragment: () => ae,
  Profiler: () => _e,
  PureComponent: () => le,
  StrictMode: () => Ee,
  Suspense: () => ye,
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => ve,
  __COMPILER_RUNTIME: () => Re,
  cache: () => me,
  cloneElement: () => Te,
  createContext: () => de,
  createElement: () => Ce,
  createRef: () => Se,
  default: () => Qe,
  forwardRef: () => Ae,
  isValidElement: () => we,
  lazy: () => he,
  memo: () => Oe,
  startTransition: () => ge,
  unstable_useCacheRefresh: () => Ne,
  use: () => je,
  useActionState: () => Pe,
  useCallback: () => He,
  useContext: () => Ie,
  useDebugValue: () => $e,
  useDeferredValue: () => Me,
  useEffect: () => Le,
  useId: () => Ue,
  useImperativeHandle: () => Ye,
  useInsertionEffect: () => xe,
  useLayoutEffect: () => De,
  useMemo: () => be,
  useOptimistic: () => ke,
  useReducer: () => qe,
  useRef: () => ze,
  useState: () => Ge,
  useSyncExternalStore: () => Ke,
  useTransition: () => We,
  version: () => Be
});

// deno:https://esm.sh/react@19.1.1/es2022/react.mjs
var x = Object.create;
var C2 = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var k2 = Object.getPrototypeOf;
var q2 = Object.prototype.hasOwnProperty;
var S = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
var z = (e, t, n2, r3) => {
  if (t && typeof t == "object" || typeof t == "function") for (let u6 of b(t)) !q2.call(e, u6) && u6 !== n2 && C2(e, u6, {
    get: () => t[u6],
    enumerable: !(r3 = D(t, u6)) || r3.enumerable
  });
  return e;
};
var G = (e, t, n2) => (n2 = e != null ? x(k2(e)) : {}, z(t || !e || !e.__esModule ? C2(n2, "default", {
  value: e,
  enumerable: true
}) : n2, e));
var M2 = S((o4) => {
  "use strict";
  var v8 = Symbol.for("react.transitional.element"), K6 = Symbol.for("react.portal"), W4 = Symbol.for("react.fragment"), B6 = Symbol.for("react.strict_mode"), Q4 = Symbol.for("react.profiler"), V6 = Symbol.for("react.consumer"), X5 = Symbol.for("react.context"), Z5 = Symbol.for("react.forward_ref"), J4 = Symbol.for("react.suspense"), F6 = Symbol.for("react.memo"), N5 = Symbol.for("react.lazy"), A10 = Symbol.iterator;
  function ee3(e) {
    return e === null || typeof e != "object" ? null : (e = A10 && e[A10] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var j10 = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P6 = Object.assign, H9 = {};
  function _5(e, t, n2) {
    this.props = e, this.context = t, this.refs = H9, this.updater = n2 || j10;
  }
  _5.prototype.isReactComponent = {};
  _5.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  _5.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function I5() {
  }
  I5.prototype = _5.prototype;
  function R4(e, t, n2) {
    this.props = e, this.context = t, this.refs = H9, this.updater = n2 || j10;
  }
  var m6 = R4.prototype = new I5();
  m6.constructor = R4;
  P6(m6, _5.prototype);
  m6.isPureReactComponent = true;
  var w6 = Array.isArray, i3 = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
  }, $5 = Object.prototype.hasOwnProperty;
  function T6(e, t, n2, r3, u6, f4) {
    return n2 = f4.ref, {
      $$typeof: v8,
      type: e,
      key: t,
      ref: n2 !== void 0 ? n2 : null,
      props: f4
    };
  }
  function te2(e, t) {
    return T6(e.type, t, void 0, void 0, void 0, e.props);
  }
  function d4(e) {
    return typeof e == "object" && e !== null && e.$$typeof === v8;
  }
  function ne3(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n2) {
      return t[n2];
    });
  }
  var h4 = /\/+/g;
  function y7(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ne3("" + e.key) : t.toString(36);
  }
  function O5() {
  }
  function re5(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (typeof e.status == "string" ? e.then(O5, O5) : (e.status = "pending", e.then(function(t) {
          e.status === "pending" && (e.status = "fulfilled", e.value = t);
        }, function(t) {
          e.status === "pending" && (e.status = "rejected", e.reason = t);
        })), e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }
  function a4(e, t, n2, r3, u6) {
    var f4 = typeof e;
    (f4 === "undefined" || f4 === "boolean") && (e = null);
    var s2 = false;
    if (e === null) s2 = true;
    else switch (f4) {
      case "bigint":
      case "string":
      case "number":
        s2 = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case v8:
          case K6:
            s2 = true;
            break;
          case N5:
            return s2 = e._init, a4(s2(e._payload), t, n2, r3, u6);
        }
    }
    if (s2) return u6 = u6(e), s2 = r3 === "" ? "." + y7(e, 0) : r3, w6(u6) ? (n2 = "", s2 != null && (n2 = s2.replace(h4, "$&/") + "/"), a4(u6, t, n2, "", function(Y5) {
      return Y5;
    })) : u6 != null && (d4(u6) && (u6 = te2(u6, n2 + (u6.key == null || e && e.key === u6.key ? "" : ("" + u6.key).replace(h4, "$&/") + "/") + s2)), t.push(u6)), 1;
    s2 = 0;
    var p6 = r3 === "" ? "." : r3 + ":";
    if (w6(e)) for (var c3 = 0; c3 < e.length; c3++) r3 = e[c3], f4 = p6 + y7(r3, c3), s2 += a4(r3, t, n2, f4, u6);
    else if (c3 = ee3(e), typeof c3 == "function") for (e = c3.call(e), c3 = 0; !(r3 = e.next()).done; ) r3 = r3.value, f4 = p6 + y7(r3, c3++), s2 += a4(r3, t, n2, f4, u6);
    else if (f4 === "object") {
      if (typeof e.then == "function") return a4(re5(e), t, n2, r3, u6);
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    return s2;
  }
  function l6(e, t, n2) {
    if (e == null) return e;
    var r3 = [], u6 = 0;
    return a4(e, r3, "", "", function(f4) {
      return t.call(n2, f4, u6++);
    }), r3;
  }
  function oe5(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n2) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n2);
      }, function(n2) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n2);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var g7 = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function ue4() {
  }
  o4.Children = {
    map: l6,
    forEach: function(e, t, n2) {
      l6(e, function() {
        t.apply(this, arguments);
      }, n2);
    },
    count: function(e) {
      var t = 0;
      return l6(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return l6(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!d4(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  o4.Component = _5;
  o4.Fragment = W4;
  o4.Profiler = Q4;
  o4.PureComponent = R4;
  o4.StrictMode = B6;
  o4.Suspense = J4;
  o4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i3;
  o4.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e) {
      return i3.H.useMemoCache(e);
    }
  };
  o4.cache = function(e) {
    return function() {
      return e.apply(null, arguments);
    };
  };
  o4.cloneElement = function(e, t, n2) {
    if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
    var r3 = P6({}, e.props), u6 = e.key, f4 = void 0;
    if (t != null) for (s2 in t.ref !== void 0 && (f4 = void 0), t.key !== void 0 && (u6 = "" + t.key), t) !$5.call(t, s2) || s2 === "key" || s2 === "__self" || s2 === "__source" || s2 === "ref" && t.ref === void 0 || (r3[s2] = t[s2]);
    var s2 = arguments.length - 2;
    if (s2 === 1) r3.children = n2;
    else if (1 < s2) {
      for (var p6 = Array(s2), c3 = 0; c3 < s2; c3++) p6[c3] = arguments[c3 + 2];
      r3.children = p6;
    }
    return T6(e.type, u6, void 0, void 0, f4, r3);
  };
  o4.createContext = function(e) {
    return e = {
      $$typeof: X5,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e.Provider = e, e.Consumer = {
      $$typeof: V6,
      _context: e
    }, e;
  };
  o4.createElement = function(e, t, n2) {
    var r3, u6 = {}, f4 = null;
    if (t != null) for (r3 in t.key !== void 0 && (f4 = "" + t.key), t) $5.call(t, r3) && r3 !== "key" && r3 !== "__self" && r3 !== "__source" && (u6[r3] = t[r3]);
    var s2 = arguments.length - 2;
    if (s2 === 1) u6.children = n2;
    else if (1 < s2) {
      for (var p6 = Array(s2), c3 = 0; c3 < s2; c3++) p6[c3] = arguments[c3 + 2];
      u6.children = p6;
    }
    if (e && e.defaultProps) for (r3 in s2 = e.defaultProps, s2) u6[r3] === void 0 && (u6[r3] = s2[r3]);
    return T6(e, f4, void 0, void 0, null, u6);
  };
  o4.createRef = function() {
    return {
      current: null
    };
  };
  o4.forwardRef = function(e) {
    return {
      $$typeof: Z5,
      render: e
    };
  };
  o4.isValidElement = d4;
  o4.lazy = function(e) {
    return {
      $$typeof: N5,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: oe5
    };
  };
  o4.memo = function(e, t) {
    return {
      $$typeof: F6,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  o4.startTransition = function(e) {
    var t = i3.T, n2 = {};
    i3.T = n2;
    try {
      var r3 = e(), u6 = i3.S;
      u6 !== null && u6(n2, r3), typeof r3 == "object" && r3 !== null && typeof r3.then == "function" && r3.then(ue4, g7);
    } catch (f4) {
      g7(f4);
    } finally {
      i3.T = t;
    }
  };
  o4.unstable_useCacheRefresh = function() {
    return i3.H.useCacheRefresh();
  };
  o4.use = function(e) {
    return i3.H.use(e);
  };
  o4.useActionState = function(e, t, n2) {
    return i3.H.useActionState(e, t, n2);
  };
  o4.useCallback = function(e, t) {
    return i3.H.useCallback(e, t);
  };
  o4.useContext = function(e) {
    return i3.H.useContext(e);
  };
  o4.useDebugValue = function() {
  };
  o4.useDeferredValue = function(e, t) {
    return i3.H.useDeferredValue(e, t);
  };
  o4.useEffect = function(e, t, n2) {
    var r3 = i3.H;
    if (typeof n2 == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return r3.useEffect(e, t);
  };
  o4.useId = function() {
    return i3.H.useId();
  };
  o4.useImperativeHandle = function(e, t, n2) {
    return i3.H.useImperativeHandle(e, t, n2);
  };
  o4.useInsertionEffect = function(e, t) {
    return i3.H.useInsertionEffect(e, t);
  };
  o4.useLayoutEffect = function(e, t) {
    return i3.H.useLayoutEffect(e, t);
  };
  o4.useMemo = function(e, t) {
    return i3.H.useMemo(e, t);
  };
  o4.useOptimistic = function(e, t) {
    return i3.H.useOptimistic(e, t);
  };
  o4.useReducer = function(e, t, n2) {
    return i3.H.useReducer(e, t, n2);
  };
  o4.useRef = function(e) {
    return i3.H.useRef(e);
  };
  o4.useState = function(e) {
    return i3.H.useState(e);
  };
  o4.useSyncExternalStore = function(e, t, n2) {
    return i3.H.useSyncExternalStore(e, t, n2);
  };
  o4.useTransition = function() {
    return i3.H.useTransition();
  };
  o4.version = "19.1.1";
});
var U = S((fe4, L2) => {
  "use strict";
  L2.exports = M2();
});
var E2 = G(U());
var { Children: ce, Component: pe, Fragment: ae, Profiler: _e, PureComponent: le, StrictMode: Ee, Suspense: ye, __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: ve, __COMPILER_RUNTIME: Re, cache: me, cloneElement: Te, createContext: de, createElement: Ce, createRef: Se, forwardRef: Ae, isValidElement: we, lazy: he, memo: Oe, startTransition: ge, unstable_useCacheRefresh: Ne, use: je, useActionState: Pe, useCallback: He, useContext: Ie, useDebugValue: $e, useDeferredValue: Me, useEffect: Le, useId: Ue, useImperativeHandle: Ye, useInsertionEffect: xe, useLayoutEffect: De, useMemo: be, useOptimistic: ke, useReducer: qe, useRef: ze, useState: Ge, useSyncExternalStore: Ke, useTransition: We, version: Be } = E2;
var Qe = E2.default ?? E2;

// deno:https://esm.sh/react-dom@19.1.1/X-ZXJlYWN0/es2022/react-dom.mjs
var react_dom_exports = {};
__export(react_dom_exports, {
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => H,
  createPortal: () => I,
  default: () => K,
  flushSync: () => b2,
  preconnect: () => F,
  prefetchDNS: () => j2,
  preinit: () => k3,
  preinitModule: () => G2,
  preload: () => q3,
  preloadModule: () => w,
  requestFormReset: () => V,
  unstable_batchedUpdates: () => x2,
  useFormState: () => Y,
  useFormStatus: () => z2,
  version: () => B
});
var require2 = (n2) => {
  const e = (m6) => typeof m6.default < "u" ? m6.default : m6, c3 = (m6) => Object.assign({
    __esModule: true
  }, m6);
  switch (n2) {
    case "react":
      return e(react_19_1_exports);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var S2 = Object.create;
var l = Object.defineProperty;
var E3 = Object.getOwnPropertyDescriptor;
var T2 = Object.getOwnPropertyNames;
var R2 = Object.getPrototypeOf;
var N = Object.prototype.hasOwnProperty;
var p2 = ((r3) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(r3, {
  get: (e, t) => (typeof require2 < "u" ? require2 : e)[t]
}) : r3)(function(r3) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + r3 + '" is not supported');
});
var y = (r3, e) => () => (e || r3((e = {
  exports: {}
}).exports, e), e.exports);
var A = (r3, e, t, c3) => {
  if (e && typeof e == "object" || typeof e == "function") for (let a4 of T2(e)) !N.call(r3, a4) && a4 !== t && l(r3, a4, {
    get: () => e[a4],
    enumerable: !(c3 = E3(e, a4)) || c3.enumerable
  });
  return r3;
};
var D2 = (r3, e, t) => (t = r3 != null ? S2(R2(r3)) : {}, A(e || !r3 || !r3.__esModule ? l(t, "default", {
  value: r3,
  enumerable: true
}) : t, r3));
var _ = y((i3) => {
  "use strict";
  var h4 = p2("react");
  function o4(r3) {
    var e = "https://react.dev/errors/" + r3;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + r3 + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f4() {
  }
  var n2 = {
    d: {
      f: f4,
      r: function() {
        throw Error(o4(522));
      },
      D: f4,
      C: f4,
      L: f4,
      m: f4,
      X: f4,
      S: f4,
      M: f4
    },
    p: 0,
    findDOMNode: null
  }, P6 = Symbol.for("react.portal");
  function C8(r3, e, t) {
    var c3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P6,
      key: c3 == null ? null : "" + c3,
      children: r3,
      containerInfo: e,
      implementation: t
    };
  }
  var u6 = h4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s2(r3, e) {
    if (r3 === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  i3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n2;
  i3.createPortal = function(r3, e) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(o4(299));
    return C8(r3, e, null, t);
  };
  i3.flushSync = function(r3) {
    var e = u6.T, t = n2.p;
    try {
      if (u6.T = null, n2.p = 2, r3) return r3();
    } finally {
      u6.T = e, n2.p = t, n2.d.f();
    }
  };
  i3.preconnect = function(r3, e) {
    typeof r3 == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n2.d.C(r3, e));
  };
  i3.prefetchDNS = function(r3) {
    typeof r3 == "string" && n2.d.D(r3);
  };
  i3.preinit = function(r3, e) {
    if (typeof r3 == "string" && e && typeof e.as == "string") {
      var t = e.as, c3 = s2(t, e.crossOrigin), a4 = typeof e.integrity == "string" ? e.integrity : void 0, g7 = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      t === "style" ? n2.d.S(r3, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: c3,
        integrity: a4,
        fetchPriority: g7
      }) : t === "script" && n2.d.X(r3, {
        crossOrigin: c3,
        integrity: a4,
        fetchPriority: g7,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  i3.preinitModule = function(r3, e) {
    if (typeof r3 == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var t = s2(e.as, e.crossOrigin);
        n2.d.M(r3, {
          crossOrigin: t,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && n2.d.M(r3);
  };
  i3.preload = function(r3, e) {
    if (typeof r3 == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var t = e.as, c3 = s2(t, e.crossOrigin);
      n2.d.L(r3, t, {
        crossOrigin: c3,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0,
        type: typeof e.type == "string" ? e.type : void 0,
        fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
        referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
        imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
        imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
        media: typeof e.media == "string" ? e.media : void 0
      });
    }
  };
  i3.preloadModule = function(r3, e) {
    if (typeof r3 == "string") if (e) {
      var t = s2(e.as, e.crossOrigin);
      n2.d.m(r3, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: t,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else n2.d.m(r3);
  };
  i3.requestFormReset = function(r3) {
    n2.d.r(r3);
  };
  i3.unstable_batchedUpdates = function(r3, e) {
    return r3(e);
  };
  i3.useFormState = function(r3, e, t) {
    return u6.H.useFormState(r3, e, t);
  };
  i3.useFormStatus = function() {
    return u6.H.useHostTransitionStatus();
  };
  i3.version = "19.1.1";
});
var v2 = y((M8, O5) => {
  "use strict";
  function m6() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m6);
    } catch (r3) {
      console.error(r3);
    }
  }
  m6(), O5.exports = _();
});
var d = D2(v2());
var { __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: H, createPortal: I, flushSync: b2, preconnect: F, prefetchDNS: j2, preinit: k3, preinitModule: G2, preload: q3, preloadModule: w, requestFormReset: V, unstable_batchedUpdates: x2, useFormState: Y, useFormStatus: z2, version: B } = d;
var K = d.default ?? d;

// deno:https://esm.sh/scheduler@^0.26.0?target=es2022
var scheduler_0_26_exports = {};
__export(scheduler_0_26_exports, {
  default: () => we2,
  unstable_IdlePriority: () => re,
  unstable_ImmediatePriority: () => ue,
  unstable_LowPriority: () => se,
  unstable_NormalPriority: () => oe,
  unstable_Profiling: () => ie,
  unstable_UserBlockingPriority: () => ce2,
  unstable_cancelCallback: () => fe,
  unstable_forceFrameRate: () => be2,
  unstable_getCurrentPriorityLevel: () => _e2,
  unstable_next: () => de2,
  unstable_now: () => ae2,
  unstable_requestPaint: () => ve2,
  unstable_runWithPriority: () => ye2,
  unstable_scheduleCallback: () => ke2,
  unstable_shouldYield: () => me2,
  unstable_wrapCallback: () => Pe2
});

// deno:https://esm.sh/scheduler@0.26.0/es2022/scheduler.mjs
var __setImmediate$ = (cb, ...args) => ({
  $t: setTimeout(cb, 0, ...args),
  [Symbol.dispose]() {
    clearTimeout(this.t);
  }
});
var J = Object.create;
var F2 = Object.defineProperty;
var K2 = Object.getOwnPropertyDescriptor;
var X = Object.getOwnPropertyNames;
var Z = Object.getPrototypeOf;
var $ = Object.prototype.hasOwnProperty;
var Y2 = (e, n2) => () => (n2 || e((n2 = {
  exports: {}
}).exports, n2), n2.exports);
var x3 = (e, n2, l6, t) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function") for (let a4 of X(n2)) !$.call(e, a4) && a4 !== l6 && F2(e, a4, {
    get: () => n2[a4],
    enumerable: !(t = K2(n2, a4)) || t.enumerable
  });
  return e;
};
var h = (e, n2, l6) => (l6 = e != null ? J(Z(e)) : {}, x3(n2 || !e || !e.__esModule ? F2(l6, "default", {
  value: e,
  enumerable: true
}) : l6, e));
var z3 = Y2((r3) => {
  "use strict";
  function H9(e, n2) {
    var l6 = e.length;
    e.push(n2);
    e: for (; 0 < l6; ) {
      var t = l6 - 1 >>> 1, a4 = e[t];
      if (0 < w6(a4, n2)) e[t] = n2, e[l6] = a4, l6 = t;
      else break e;
    }
  }
  function o4(e) {
    return e.length === 0 ? null : e[0];
  }
  function T6(e) {
    if (e.length === 0) return null;
    var n2 = e[0], l6 = e.pop();
    if (l6 !== n2) {
      e[0] = l6;
      e: for (var t = 0, a4 = e.length, k9 = a4 >>> 1; t < k9; ) {
        var m6 = 2 * (t + 1) - 1, j10 = e[m6], f4 = m6 + 1, P6 = e[f4];
        if (0 > w6(j10, l6)) f4 < a4 && 0 > w6(P6, j10) ? (e[t] = P6, e[f4] = l6, t = f4) : (e[t] = j10, e[m6] = l6, t = m6);
        else if (f4 < a4 && 0 > w6(P6, l6)) e[t] = P6, e[f4] = l6, t = f4;
        else break e;
      }
    }
    return n2;
  }
  function w6(e, n2) {
    var l6 = e.sortIndex - n2.sortIndex;
    return l6 !== 0 ? l6 : e.id - n2.id;
  }
  r3.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function" ? (B6 = performance, r3.unstable_now = function() {
    return B6.now();
  }) : (q10 = Date, D8 = q10.now(), r3.unstable_now = function() {
    return q10.now() - D8;
  });
  var B6, q10, D8, i3 = [], c3 = [], ee3 = 1, s2 = null, u6 = 3, N5 = false, d4 = false, v8 = false, R4 = false, L2 = typeof setTimeout == "function" ? setTimeout : null, M8 = typeof clearTimeout == "function" ? clearTimeout : null, E11 = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  function C8(e) {
    for (var n2 = o4(c3); n2 !== null; ) {
      if (n2.callback === null) T6(c3);
      else if (n2.startTime <= e) T6(c3), n2.sortIndex = n2.expirationTime, H9(i3, n2);
      else break;
      n2 = o4(c3);
    }
  }
  function S7(e) {
    if (v8 = false, C8(e), !d4) if (o4(i3) !== null) d4 = true, _5 || (_5 = true, b10());
    else {
      var n2 = o4(c3);
      n2 !== null && U4(S7, n2.startTime - e);
    }
  }
  var _5 = false, y7 = -1, O5 = 5, V6 = -1;
  function W4() {
    return R4 ? true : !(r3.unstable_now() - V6 < O5);
  }
  function I5() {
    if (R4 = false, _5) {
      var e = r3.unstable_now();
      V6 = e;
      var n2 = true;
      try {
        e: {
          d4 = false, v8 && (v8 = false, M8(y7), y7 = -1), N5 = true;
          var l6 = u6;
          try {
            n: {
              for (C8(e), s2 = o4(i3); s2 !== null && !(s2.expirationTime > e && W4()); ) {
                var t = s2.callback;
                if (typeof t == "function") {
                  s2.callback = null, u6 = s2.priorityLevel;
                  var a4 = t(s2.expirationTime <= e);
                  if (e = r3.unstable_now(), typeof a4 == "function") {
                    s2.callback = a4, C8(e), n2 = true;
                    break n;
                  }
                  s2 === o4(i3) && T6(i3), C8(e);
                } else T6(i3);
                s2 = o4(i3);
              }
              if (s2 !== null) n2 = true;
              else {
                var k9 = o4(c3);
                k9 !== null && U4(S7, k9.startTime - e), n2 = false;
              }
            }
            break e;
          } finally {
            s2 = null, u6 = l6, N5 = false;
          }
          n2 = void 0;
        }
      } finally {
        n2 ? b10() : _5 = false;
      }
    }
  }
  var b10;
  typeof E11 == "function" ? b10 = function() {
    E11(I5);
  } : typeof MessageChannel < "u" ? (p6 = new MessageChannel(), Q4 = p6.port2, p6.port1.onmessage = I5, b10 = function() {
    Q4.postMessage(null);
  }) : b10 = function() {
    L2(I5, 0);
  };
  var p6, Q4;
  function U4(e, n2) {
    y7 = L2(function() {
      e(r3.unstable_now());
    }, n2);
  }
  r3.unstable_IdlePriority = 5;
  r3.unstable_ImmediatePriority = 1;
  r3.unstable_LowPriority = 4;
  r3.unstable_NormalPriority = 3;
  r3.unstable_Profiling = null;
  r3.unstable_UserBlockingPriority = 2;
  r3.unstable_cancelCallback = function(e) {
    e.callback = null;
  };
  r3.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O5 = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  r3.unstable_getCurrentPriorityLevel = function() {
    return u6;
  };
  r3.unstable_next = function(e) {
    switch (u6) {
      case 1:
      case 2:
      case 3:
        var n2 = 3;
        break;
      default:
        n2 = u6;
    }
    var l6 = u6;
    u6 = n2;
    try {
      return e();
    } finally {
      u6 = l6;
    }
  };
  r3.unstable_requestPaint = function() {
    R4 = true;
  };
  r3.unstable_runWithPriority = function(e, n2) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var l6 = u6;
    u6 = e;
    try {
      return n2();
    } finally {
      u6 = l6;
    }
  };
  r3.unstable_scheduleCallback = function(e, n2, l6) {
    var t = r3.unstable_now();
    switch (typeof l6 == "object" && l6 !== null ? (l6 = l6.delay, l6 = typeof l6 == "number" && 0 < l6 ? t + l6 : t) : l6 = t, e) {
      case 1:
        var a4 = -1;
        break;
      case 2:
        a4 = 250;
        break;
      case 5:
        a4 = 1073741823;
        break;
      case 4:
        a4 = 1e4;
        break;
      default:
        a4 = 5e3;
    }
    return a4 = l6 + a4, e = {
      id: ee3++,
      callback: n2,
      priorityLevel: e,
      startTime: l6,
      expirationTime: a4,
      sortIndex: -1
    }, l6 > t ? (e.sortIndex = l6, H9(c3, e), o4(i3) === null && e === o4(c3) && (v8 ? (M8(y7), y7 = -1) : v8 = true, U4(S7, l6 - t))) : (e.sortIndex = a4, H9(i3, e), d4 || N5 || (d4 = true, _5 || (_5 = true, b10()))), e;
  };
  r3.unstable_shouldYield = W4;
  r3.unstable_wrapCallback = function(e) {
    var n2 = u6;
    return function() {
      var l6 = u6;
      u6 = n2;
      try {
        return e.apply(this, arguments);
      } finally {
        u6 = l6;
      }
    };
  };
});
var G3 = Y2((te2, A10) => {
  "use strict";
  A10.exports = z3();
});
var g = h(G3());
var { unstable_now: ae2, unstable_IdlePriority: re, unstable_ImmediatePriority: ue, unstable_LowPriority: se, unstable_NormalPriority: oe, unstable_Profiling: ie, unstable_UserBlockingPriority: ce2, unstable_cancelCallback: fe, unstable_forceFrameRate: be2, unstable_getCurrentPriorityLevel: _e2, unstable_next: de2, unstable_requestPaint: ve2, unstable_runWithPriority: ye2, unstable_scheduleCallback: ke2, unstable_shouldYield: me2, unstable_wrapCallback: Pe2 } = g;
var we2 = g.default ?? g;

// deno:https://esm.sh/react-dom@19.1.1/X-ZXJlYWN0/es2022/client.mjs
var require3 = (n2) => {
  const e = (m6) => typeof m6.default < "u" ? m6.default : m6, c3 = (m6) => Object.assign({
    __esModule: true
  }, m6);
  switch (n2) {
    case "scheduler":
      return e(scheduler_0_26_exports);
    case "react":
      return e(react_19_1_exports);
    case "react-dom":
      return e(react_dom_exports);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var Cv = Object.create;
var Xe = Object.defineProperty;
var Lv = Object.getOwnPropertyDescriptor;
var pv = Object.getOwnPropertyNames;
var Jv = Object.getPrototypeOf;
var Wv = Object.prototype.hasOwnProperty;
var Sf = ((l6) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(l6, {
  get: (u6, a4) => (typeof require3 < "u" ? require3 : u6)[a4]
}) : l6)(function(l6) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + l6 + '" is not supported');
});
var Ge2 = (l6, u6) => () => (u6 || l6((u6 = {
  exports: {}
}).exports, u6), u6.exports);
var wv = (l6, u6, a4, t) => {
  if (u6 && typeof u6 == "object" || typeof u6 == "function") for (let n2 of pv(u6)) !Wv.call(l6, n2) && n2 !== a4 && Xe(l6, n2, {
    get: () => u6[n2],
    enumerable: !(t = Lv(u6, n2)) || t.enumerable
  });
  return l6;
};
var $v = (l6, u6, a4) => (a4 = l6 != null ? Cv(Jv(l6)) : {}, wv(u6 || !l6 || !l6.__esModule ? Xe(a4, "default", {
  value: l6,
  enumerable: true
}) : a4, l6));
var Zv = Ge2((yf) => {
  "use strict";
  var I5 = Sf("scheduler"), t0 = Sf("react"), Fv = Sf("react-dom");
  function A10(l6) {
    var u6 = "https://react.dev/errors/" + l6;
    if (1 < arguments.length) {
      u6 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a4 = 2; a4 < arguments.length; a4++) u6 += "&args[]=" + encodeURIComponent(arguments[a4]);
    }
    return "Minified React error #" + l6 + "; visit " + u6 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n0(l6) {
    return !(!l6 || l6.nodeType !== 1 && l6.nodeType !== 9 && l6.nodeType !== 11);
  }
  function Ht3(l6) {
    var u6 = l6, a4 = l6;
    if (l6.alternate) for (; u6.return; ) u6 = u6.return;
    else {
      l6 = u6;
      do
        u6 = l6, (u6.flags & 4098) !== 0 && (a4 = u6.return), l6 = u6.return;
      while (l6);
    }
    return u6.tag === 3 ? a4 : null;
  }
  function f0(l6) {
    if (l6.tag === 13) {
      var u6 = l6.memoizedState;
      if (u6 === null && (l6 = l6.alternate, l6 !== null && (u6 = l6.memoizedState)), u6 !== null) return u6.dehydrated;
    }
    return null;
  }
  function Qe4(l6) {
    if (Ht3(l6) !== l6) throw Error(A10(188));
  }
  function kv(l6) {
    var u6 = l6.alternate;
    if (!u6) {
      if (u6 = Ht3(l6), u6 === null) throw Error(A10(188));
      return u6 !== l6 ? null : l6;
    }
    for (var a4 = l6, t = u6; ; ) {
      var n2 = a4.return;
      if (n2 === null) break;
      var f4 = n2.alternate;
      if (f4 === null) {
        if (t = n2.return, t !== null) {
          a4 = t;
          continue;
        }
        break;
      }
      if (n2.child === f4.child) {
        for (f4 = n2.child; f4; ) {
          if (f4 === a4) return Qe4(n2), l6;
          if (f4 === t) return Qe4(n2), u6;
          f4 = f4.sibling;
        }
        throw Error(A10(188));
      }
      if (a4.return !== t.return) a4 = n2, t = f4;
      else {
        for (var c3 = false, e = n2.child; e; ) {
          if (e === a4) {
            c3 = true, a4 = n2, t = f4;
            break;
          }
          if (e === t) {
            c3 = true, t = n2, a4 = f4;
            break;
          }
          e = e.sibling;
        }
        if (!c3) {
          for (e = f4.child; e; ) {
            if (e === a4) {
              c3 = true, a4 = f4, t = n2;
              break;
            }
            if (e === t) {
              c3 = true, t = f4, a4 = n2;
              break;
            }
            e = e.sibling;
          }
          if (!c3) throw Error(A10(189));
        }
      }
      if (a4.alternate !== t) throw Error(A10(190));
    }
    if (a4.tag !== 3) throw Error(A10(188));
    return a4.stateNode.current === a4 ? l6 : u6;
  }
  function c0(l6) {
    var u6 = l6.tag;
    if (u6 === 5 || u6 === 26 || u6 === 27 || u6 === 6) return l6;
    for (l6 = l6.child; l6 !== null; ) {
      if (u6 = c0(l6), u6 !== null) return u6;
      l6 = l6.sibling;
    }
    return null;
  }
  var j10 = Object.assign, rv = Symbol.for("react.element"), Ct2 = Symbol.for("react.transitional.element"), $a2 = Symbol.for("react.portal"), ta2 = Symbol.for("react.fragment"), e0 = Symbol.for("react.strict_mode"), Jf = Symbol.for("react.profiler"), Iv = Symbol.for("react.provider"), i0 = Symbol.for("react.consumer"), $l = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Wf = Symbol.for("react.suspense"), wf = Symbol.for("react.suspense_list"), Kc = Symbol.for("react.memo"), vu2 = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  var $f = Symbol.for("react.activity");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.tracing_marker");
  var Pv = Symbol.for("react.memo_cache_sentinel");
  Symbol.for("react.view_transition");
  var Ze3 = Symbol.iterator;
  function ja3(l6) {
    return l6 === null || typeof l6 != "object" ? null : (l6 = Ze3 && l6[Ze3] || l6["@@iterator"], typeof l6 == "function" ? l6 : null);
  }
  var lh = Symbol.for("react.client.reference");
  function Ff(l6) {
    if (l6 == null) return null;
    if (typeof l6 == "function") return l6.$$typeof === lh ? null : l6.displayName || l6.name || null;
    if (typeof l6 == "string") return l6;
    switch (l6) {
      case ta2:
        return "Fragment";
      case Jf:
        return "Profiler";
      case e0:
        return "StrictMode";
      case Wf:
        return "Suspense";
      case wf:
        return "SuspenseList";
      case $f:
        return "Activity";
    }
    if (typeof l6 == "object") switch (l6.$$typeof) {
      case $a2:
        return "Portal";
      case $l:
        return (l6.displayName || "Context") + ".Provider";
      case i0:
        return (l6._context.displayName || "Context") + ".Consumer";
      case jc:
        var u6 = l6.render;
        return l6 = l6.displayName, l6 || (l6 = u6.displayName || u6.name || "", l6 = l6 !== "" ? "ForwardRef(" + l6 + ")" : "ForwardRef"), l6;
      case Kc:
        return u6 = l6.displayName || null, u6 !== null ? u6 : Ff(l6.type) || "Memo";
      case vu2:
        u6 = l6._payload, l6 = l6._init;
        try {
          return Ff(l6(u6));
        } catch {
        }
    }
    return null;
  }
  var Fa = Array.isArray, s2 = t0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, o4 = Fv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qu = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, kf = [], na = -1;
  function Cl2(l6) {
    return {
      current: l6
    };
  }
  function tl2(l6) {
    0 > na || (l6.current = kf[na], kf[na] = null, na--);
  }
  function C8(l6, u6) {
    na++, kf[na] = l6.current, l6.current = u6;
  }
  var Vl2 = Cl2(null), dt = Cl2(null), Tu = Cl2(null), Tn = Cl2(null);
  function Mn(l6, u6) {
    switch (C8(Tu, u6), C8(dt, l6), C8(Vl2, null), u6.nodeType) {
      case 9:
      case 11:
        l6 = (l6 = u6.documentElement) && (l6 = l6.namespaceURI) ? Li(l6) : 0;
        break;
      default:
        if (l6 = u6.tagName, u6 = u6.namespaceURI) u6 = Li(u6), l6 = Uv(u6, l6);
        else switch (l6) {
          case "svg":
            l6 = 1;
            break;
          case "math":
            l6 = 2;
            break;
          default:
            l6 = 0;
        }
    }
    tl2(Vl2), C8(Vl2, l6);
  }
  function Oa() {
    tl2(Vl2), tl2(dt), tl2(Tu);
  }
  function rf(l6) {
    l6.memoizedState !== null && C8(Tn, l6);
    var u6 = Vl2.current, a4 = Uv(u6, l6.type);
    u6 !== a4 && (C8(dt, l6), C8(Vl2, a4));
  }
  function En2(l6) {
    dt.current === l6 && (tl2(Vl2), tl2(dt)), Tn.current === l6 && (tl2(Tn), Dt2._currentValue = Qu);
  }
  var If = Object.prototype.hasOwnProperty, Cc = I5.unstable_scheduleCallback, mf = I5.unstable_cancelCallback, uh = I5.unstable_shouldYield, ah = I5.unstable_requestPaint, jl2 = I5.unstable_now, th = I5.unstable_getCurrentPriorityLevel, v0 = I5.unstable_ImmediatePriority, h0 = I5.unstable_UserBlockingPriority, Dn = I5.unstable_NormalPriority, nh = I5.unstable_LowPriority, y0 = I5.unstable_IdlePriority, fh = I5.log, ch = I5.unstable_setDisableYieldValue, Nt2 = null, Tl2 = null;
  function gu(l6) {
    if (typeof fh == "function" && ch(l6), Tl2 && typeof Tl2.setStrictMode == "function") try {
      Tl2.setStrictMode(Nt2, l6);
    } catch {
    }
  }
  var Ml3 = Math.clz32 ? Math.clz32 : vh, eh = Math.log, ih = Math.LN2;
  function vh(l6) {
    return l6 >>>= 0, l6 === 0 ? 32 : 31 - (eh(l6) / ih | 0) | 0;
  }
  var Lt4 = 256, pt2 = 4194304;
  function _u(l6) {
    var u6 = l6 & 42;
    if (u6 !== 0) return u6;
    switch (l6 & -l6) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
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
        return l6 & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l6 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l6;
    }
  }
  function Fn(l6, u6, a4) {
    var t = l6.pendingLanes;
    if (t === 0) return 0;
    var n2 = 0, f4 = l6.suspendedLanes, c3 = l6.pingedLanes;
    l6 = l6.warmLanes;
    var e = t & 134217727;
    return e !== 0 ? (t = e & ~f4, t !== 0 ? n2 = _u(t) : (c3 &= e, c3 !== 0 ? n2 = _u(c3) : a4 || (a4 = e & ~l6, a4 !== 0 && (n2 = _u(a4))))) : (e = t & ~f4, e !== 0 ? n2 = _u(e) : c3 !== 0 ? n2 = _u(c3) : a4 || (a4 = t & ~l6, a4 !== 0 && (n2 = _u(a4)))), n2 === 0 ? 0 : u6 !== 0 && u6 !== n2 && (u6 & f4) === 0 && (f4 = n2 & -n2, a4 = u6 & -u6, f4 >= a4 || f4 === 32 && (a4 & 4194048) !== 0) ? u6 : n2;
  }
  function qt3(l6, u6) {
    return (l6.pendingLanes & ~(l6.suspendedLanes & ~l6.pingedLanes) & u6) === 0;
  }
  function hh(l6, u6) {
    switch (l6) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return u6 + 250;
      case 16:
      case 32:
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
        return u6 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function d0() {
    var l6 = Lt4;
    return Lt4 <<= 1, (Lt4 & 4194048) === 0 && (Lt4 = 256), l6;
  }
  function S0() {
    var l6 = pt2;
    return pt2 <<= 1, (pt2 & 62914560) === 0 && (pt2 = 4194304), l6;
  }
  function gf(l6) {
    for (var u6 = [], a4 = 0; 31 > a4; a4++) u6.push(l6);
    return u6;
  }
  function Bt3(l6, u6) {
    l6.pendingLanes |= u6, u6 !== 268435456 && (l6.suspendedLanes = 0, l6.pingedLanes = 0, l6.warmLanes = 0);
  }
  function yh(l6, u6, a4, t, n2, f4) {
    var c3 = l6.pendingLanes;
    l6.pendingLanes = a4, l6.suspendedLanes = 0, l6.pingedLanes = 0, l6.warmLanes = 0, l6.expiredLanes &= a4, l6.entangledLanes &= a4, l6.errorRecoveryDisabledLanes &= a4, l6.shellSuspendCounter = 0;
    var e = l6.entanglements, i3 = l6.expirationTimes, d4 = l6.hiddenUpdates;
    for (a4 = c3 & ~a4; 0 < a4; ) {
      var g7 = 31 - Ml3(a4), z7 = 1 << g7;
      e[g7] = 0, i3[g7] = -1;
      var S7 = d4[g7];
      if (S7 !== null) for (d4[g7] = null, g7 = 0; g7 < S7.length; g7++) {
        var m6 = S7[g7];
        m6 !== null && (m6.lane &= -536870913);
      }
      a4 &= ~z7;
    }
    t !== 0 && m0(l6, t, 0), f4 !== 0 && n2 === 0 && l6.tag !== 0 && (l6.suspendedLanes |= f4 & ~(c3 & ~u6));
  }
  function m0(l6, u6, a4) {
    l6.pendingLanes |= u6, l6.suspendedLanes &= ~u6;
    var t = 31 - Ml3(u6);
    l6.entangledLanes |= u6, l6.entanglements[t] = l6.entanglements[t] | 1073741824 | a4 & 4194090;
  }
  function g0(l6, u6) {
    var a4 = l6.entangledLanes |= u6;
    for (l6 = l6.entanglements; a4; ) {
      var t = 31 - Ml3(a4), n2 = 1 << t;
      n2 & u6 | l6[t] & u6 && (l6[t] |= u6), a4 &= ~n2;
    }
  }
  function Lc(l6) {
    switch (l6) {
      case 2:
        l6 = 1;
        break;
      case 8:
        l6 = 4;
        break;
      case 32:
        l6 = 16;
        break;
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
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l6 = 128;
        break;
      case 268435456:
        l6 = 134217728;
        break;
      default:
        l6 = 0;
    }
    return l6;
  }
  function pc(l6) {
    return l6 &= -l6, 2 < l6 ? 8 < l6 ? (l6 & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function b0() {
    var l6 = o4.p;
    return l6 !== 0 ? l6 : (l6 = window.event, l6 === void 0 ? 32 : Gv(l6.type));
  }
  function dh(l6, u6) {
    var a4 = o4.p;
    try {
      return o4.p = l6, u6();
    } finally {
      o4.p = a4;
    }
  }
  var Ru2 = Math.random().toString(36).slice(2), el2 = "__reactFiber$" + Ru2, Sl2 = "__reactProps$" + Ru2, Xa = "__reactContainer$" + Ru2, Pf = "__reactEvents$" + Ru2, Sh = "__reactListeners$" + Ru2, mh = "__reactHandles$" + Ru2, xe5 = "__reactResources$" + Ru2, Rt2 = "__reactMarker$" + Ru2;
  function Jc(l6) {
    delete l6[el2], delete l6[Sl2], delete l6[Pf], delete l6[Sh], delete l6[mh];
  }
  function fa(l6) {
    var u6 = l6[el2];
    if (u6) return u6;
    for (var a4 = l6.parentNode; a4; ) {
      if (u6 = a4[Xa] || a4[el2]) {
        if (a4 = u6.alternate, u6.child !== null || a4 !== null && a4.child !== null) for (l6 = Wi(l6); l6 !== null; ) {
          if (a4 = l6[el2]) return a4;
          l6 = Wi(l6);
        }
        return u6;
      }
      l6 = a4, a4 = l6.parentNode;
    }
    return null;
  }
  function Ga2(l6) {
    if (l6 = l6[el2] || l6[Xa]) {
      var u6 = l6.tag;
      if (u6 === 5 || u6 === 6 || u6 === 13 || u6 === 26 || u6 === 27 || u6 === 3) return l6;
    }
    return null;
  }
  function ka(l6) {
    var u6 = l6.tag;
    if (u6 === 5 || u6 === 26 || u6 === 27 || u6 === 6) return l6.stateNode;
    throw Error(A10(33));
  }
  function ga2(l6) {
    var u6 = l6[xe5];
    return u6 || (u6 = l6[xe5] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), u6;
  }
  function ul2(l6) {
    l6[Rt2] = true;
  }
  var z0 = /* @__PURE__ */ new Set(), A0 = {};
  function wu(l6, u6) {
    sa(l6, u6), sa(l6 + "Capture", u6);
  }
  function sa(l6, u6) {
    for (A0[l6] = u6, l6 = 0; l6 < u6.length; l6++) z0.add(u6[l6]);
  }
  var gh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ve4 = {}, je6 = {};
  function bh(l6) {
    return If.call(je6, l6) ? true : If.call(Ve4, l6) ? false : gh.test(l6) ? je6[l6] = true : (Ve4[l6] = true, false);
  }
  function fn2(l6, u6, a4) {
    if (bh(u6)) if (a4 === null) l6.removeAttribute(u6);
    else {
      switch (typeof a4) {
        case "undefined":
        case "function":
        case "symbol":
          l6.removeAttribute(u6);
          return;
        case "boolean":
          var t = u6.toLowerCase().slice(0, 5);
          if (t !== "data-" && t !== "aria-") {
            l6.removeAttribute(u6);
            return;
          }
      }
      l6.setAttribute(u6, "" + a4);
    }
  }
  function Jt2(l6, u6, a4) {
    if (a4 === null) l6.removeAttribute(u6);
    else {
      switch (typeof a4) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l6.removeAttribute(u6);
          return;
      }
      l6.setAttribute(u6, "" + a4);
    }
  }
  function pl(l6, u6, a4, t) {
    if (t === null) l6.removeAttribute(a4);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l6.removeAttribute(a4);
          return;
      }
      l6.setAttributeNS(u6, a4, "" + t);
    }
  }
  var bf, Ke4;
  function la(l6) {
    if (bf === void 0) try {
      throw Error();
    } catch (a4) {
      var u6 = a4.stack.trim().match(/\n( *(at )?)/);
      bf = u6 && u6[1] || "", Ke4 = -1 < a4.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a4.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + bf + l6 + Ke4;
  }
  var zf = false;
  function Af(l6, u6) {
    if (!l6 || zf) return "";
    zf = true;
    var a4 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = {
        DetermineComponentFrameRoot: function() {
          try {
            if (u6) {
              var z7 = function() {
                throw Error();
              };
              if (Object.defineProperty(z7.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z7, []);
                } catch (m6) {
                  var S7 = m6;
                }
                Reflect.construct(l6, [], z7);
              } else {
                try {
                  z7.call();
                } catch (m6) {
                  S7 = m6;
                }
                l6.call(z7.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m6) {
                S7 = m6;
              }
              (z7 = l6()) && typeof z7.catch == "function" && z7.catch(function() {
              });
            }
          } catch (m6) {
            if (m6 && S7 && typeof m6.stack == "string") return [
              m6.stack,
              S7.stack
            ];
          }
          return [
            null,
            null
          ];
        }
      };
      t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n2 = Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot, "name");
      n2 && n2.configurable && Object.defineProperty(t.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var f4 = t.DetermineComponentFrameRoot(), c3 = f4[0], e = f4[1];
      if (c3 && e) {
        var i3 = c3.split(`
`), d4 = e.split(`
`);
        for (n2 = t = 0; t < i3.length && !i3[t].includes("DetermineComponentFrameRoot"); ) t++;
        for (; n2 < d4.length && !d4[n2].includes("DetermineComponentFrameRoot"); ) n2++;
        if (t === i3.length || n2 === d4.length) for (t = i3.length - 1, n2 = d4.length - 1; 1 <= t && 0 <= n2 && i3[t] !== d4[n2]; ) n2--;
        for (; 1 <= t && 0 <= n2; t--, n2--) if (i3[t] !== d4[n2]) {
          if (t !== 1 || n2 !== 1) do
            if (t--, n2--, 0 > n2 || i3[t] !== d4[n2]) {
              var g7 = `
` + i3[t].replace(" at new ", " at ");
              return l6.displayName && g7.includes("<anonymous>") && (g7 = g7.replace("<anonymous>", l6.displayName)), g7;
            }
          while (1 <= t && 0 <= n2);
          break;
        }
      }
    } finally {
      zf = false, Error.prepareStackTrace = a4;
    }
    return (a4 = l6 ? l6.displayName || l6.name : "") ? la(a4) : "";
  }
  function zh(l6) {
    switch (l6.tag) {
      case 26:
      case 27:
      case 5:
        return la(l6.type);
      case 16:
        return la("Lazy");
      case 13:
        return la("Suspense");
      case 19:
        return la("SuspenseList");
      case 0:
      case 15:
        return Af(l6.type, false);
      case 11:
        return Af(l6.type.render, false);
      case 1:
        return Af(l6.type, true);
      case 31:
        return la("Activity");
      default:
        return "";
    }
  }
  function Ce5(l6) {
    try {
      var u6 = "";
      do
        u6 += zh(l6), l6 = l6.return;
      while (l6);
      return u6;
    } catch (a4) {
      return `
Error generating stack: ` + a4.message + `
` + a4.stack;
    }
  }
  function Ul2(l6) {
    switch (typeof l6) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l6;
      case "object":
        return l6;
      default:
        return "";
    }
  }
  function T0(l6) {
    var u6 = l6.type;
    return (l6 = l6.nodeName) && l6.toLowerCase() === "input" && (u6 === "checkbox" || u6 === "radio");
  }
  function Ah(l6) {
    var u6 = T0(l6) ? "checked" : "value", a4 = Object.getOwnPropertyDescriptor(l6.constructor.prototype, u6), t = "" + l6[u6];
    if (!l6.hasOwnProperty(u6) && typeof a4 < "u" && typeof a4.get == "function" && typeof a4.set == "function") {
      var n2 = a4.get, f4 = a4.set;
      return Object.defineProperty(l6, u6, {
        configurable: true,
        get: function() {
          return n2.call(this);
        },
        set: function(c3) {
          t = "" + c3, f4.call(this, c3);
        }
      }), Object.defineProperty(l6, u6, {
        enumerable: a4.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(c3) {
          t = "" + c3;
        },
        stopTracking: function() {
          l6._valueTracker = null, delete l6[u6];
        }
      };
    }
  }
  function On(l6) {
    l6._valueTracker || (l6._valueTracker = Ah(l6));
  }
  function M0(l6) {
    if (!l6) return false;
    var u6 = l6._valueTracker;
    if (!u6) return true;
    var a4 = u6.getValue(), t = "";
    return l6 && (t = T0(l6) ? l6.checked ? "true" : "false" : l6.value), l6 = t, l6 !== a4 ? (u6.setValue(l6), true) : false;
  }
  function sn2(l6) {
    if (l6 = l6 || (typeof document < "u" ? document : void 0), typeof l6 > "u") return null;
    try {
      return l6.activeElement || l6.body;
    } catch {
      return l6.body;
    }
  }
  var Th = /[\n"\\]/g;
  function ql(l6) {
    return l6.replace(Th, function(u6) {
      return "\\" + u6.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l6, u6, a4, t, n2, f4, c3, e) {
    l6.name = "", c3 != null && typeof c3 != "function" && typeof c3 != "symbol" && typeof c3 != "boolean" ? l6.type = c3 : l6.removeAttribute("type"), u6 != null ? c3 === "number" ? (u6 === 0 && l6.value === "" || l6.value != u6) && (l6.value = "" + Ul2(u6)) : l6.value !== "" + Ul2(u6) && (l6.value = "" + Ul2(u6)) : c3 !== "submit" && c3 !== "reset" || l6.removeAttribute("value"), u6 != null ? uc(l6, c3, Ul2(u6)) : a4 != null ? uc(l6, c3, Ul2(a4)) : t != null && l6.removeAttribute("value"), n2 == null && f4 != null && (l6.defaultChecked = !!f4), n2 != null && (l6.checked = n2 && typeof n2 != "function" && typeof n2 != "symbol"), e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" ? l6.name = "" + Ul2(e) : l6.removeAttribute("name");
  }
  function E0(l6, u6, a4, t, n2, f4, c3, e) {
    if (f4 != null && typeof f4 != "function" && typeof f4 != "symbol" && typeof f4 != "boolean" && (l6.type = f4), u6 != null || a4 != null) {
      if (!(f4 !== "submit" && f4 !== "reset" || u6 != null)) return;
      a4 = a4 != null ? "" + Ul2(a4) : "", u6 = u6 != null ? "" + Ul2(u6) : a4, e || u6 === l6.value || (l6.value = u6), l6.defaultValue = u6;
    }
    t = t ?? n2, t = typeof t != "function" && typeof t != "symbol" && !!t, l6.checked = e ? l6.checked : !!t, l6.defaultChecked = !!t, c3 != null && typeof c3 != "function" && typeof c3 != "symbol" && typeof c3 != "boolean" && (l6.name = c3);
  }
  function uc(l6, u6, a4) {
    u6 === "number" && sn2(l6.ownerDocument) === l6 || l6.defaultValue === "" + a4 || (l6.defaultValue = "" + a4);
  }
  function ba2(l6, u6, a4, t) {
    if (l6 = l6.options, u6) {
      u6 = {};
      for (var n2 = 0; n2 < a4.length; n2++) u6["$" + a4[n2]] = true;
      for (a4 = 0; a4 < l6.length; a4++) n2 = u6.hasOwnProperty("$" + l6[a4].value), l6[a4].selected !== n2 && (l6[a4].selected = n2), n2 && t && (l6[a4].defaultSelected = true);
    } else {
      for (a4 = "" + Ul2(a4), u6 = null, n2 = 0; n2 < l6.length; n2++) {
        if (l6[n2].value === a4) {
          l6[n2].selected = true, t && (l6[n2].defaultSelected = true);
          return;
        }
        u6 !== null || l6[n2].disabled || (u6 = l6[n2]);
      }
      u6 !== null && (u6.selected = true);
    }
  }
  function D0(l6, u6, a4) {
    if (u6 != null && (u6 = "" + Ul2(u6), u6 !== l6.value && (l6.value = u6), a4 == null)) {
      l6.defaultValue !== u6 && (l6.defaultValue = u6);
      return;
    }
    l6.defaultValue = a4 != null ? "" + Ul2(a4) : "";
  }
  function O0(l6, u6, a4, t) {
    if (u6 == null) {
      if (t != null) {
        if (a4 != null) throw Error(A10(92));
        if (Fa(t)) {
          if (1 < t.length) throw Error(A10(93));
          t = t[0];
        }
        a4 = t;
      }
      a4 == null && (a4 = ""), u6 = a4;
    }
    a4 = Ul2(u6), l6.defaultValue = a4, t = l6.textContent, t === a4 && t !== "" && t !== null && (l6.value = t);
  }
  function Ua3(l6, u6) {
    if (u6) {
      var a4 = l6.firstChild;
      if (a4 && a4 === l6.lastChild && a4.nodeType === 3) {
        a4.nodeValue = u6;
        return;
      }
    }
    l6.textContent = u6;
  }
  var Mh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Le5(l6, u6, a4) {
    var t = u6.indexOf("--") === 0;
    a4 == null || typeof a4 == "boolean" || a4 === "" ? t ? l6.setProperty(u6, "") : u6 === "float" ? l6.cssFloat = "" : l6[u6] = "" : t ? l6.setProperty(u6, a4) : typeof a4 != "number" || a4 === 0 || Mh.has(u6) ? u6 === "float" ? l6.cssFloat = a4 : l6[u6] = ("" + a4).trim() : l6[u6] = a4 + "px";
  }
  function s0(l6, u6, a4) {
    if (u6 != null && typeof u6 != "object") throw Error(A10(62));
    if (l6 = l6.style, a4 != null) {
      for (var t in a4) !a4.hasOwnProperty(t) || u6 != null && u6.hasOwnProperty(t) || (t.indexOf("--") === 0 ? l6.setProperty(t, "") : t === "float" ? l6.cssFloat = "" : l6[t] = "");
      for (var n2 in u6) t = u6[n2], u6.hasOwnProperty(n2) && a4[n2] !== t && Le5(l6, n2, t);
    } else for (var f4 in u6) u6.hasOwnProperty(f4) && Le5(l6, f4, u6[f4]);
  }
  function Wc(l6) {
    if (l6.indexOf("-") === -1) return false;
    switch (l6) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Eh = /* @__PURE__ */ new Map([
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ],
    [
      "crossOrigin",
      "crossorigin"
    ],
    [
      "accentHeight",
      "accent-height"
    ],
    [
      "alignmentBaseline",
      "alignment-baseline"
    ],
    [
      "arabicForm",
      "arabic-form"
    ],
    [
      "baselineShift",
      "baseline-shift"
    ],
    [
      "capHeight",
      "cap-height"
    ],
    [
      "clipPath",
      "clip-path"
    ],
    [
      "clipRule",
      "clip-rule"
    ],
    [
      "colorInterpolation",
      "color-interpolation"
    ],
    [
      "colorInterpolationFilters",
      "color-interpolation-filters"
    ],
    [
      "colorProfile",
      "color-profile"
    ],
    [
      "colorRendering",
      "color-rendering"
    ],
    [
      "dominantBaseline",
      "dominant-baseline"
    ],
    [
      "enableBackground",
      "enable-background"
    ],
    [
      "fillOpacity",
      "fill-opacity"
    ],
    [
      "fillRule",
      "fill-rule"
    ],
    [
      "floodColor",
      "flood-color"
    ],
    [
      "floodOpacity",
      "flood-opacity"
    ],
    [
      "fontFamily",
      "font-family"
    ],
    [
      "fontSize",
      "font-size"
    ],
    [
      "fontSizeAdjust",
      "font-size-adjust"
    ],
    [
      "fontStretch",
      "font-stretch"
    ],
    [
      "fontStyle",
      "font-style"
    ],
    [
      "fontVariant",
      "font-variant"
    ],
    [
      "fontWeight",
      "font-weight"
    ],
    [
      "glyphName",
      "glyph-name"
    ],
    [
      "glyphOrientationHorizontal",
      "glyph-orientation-horizontal"
    ],
    [
      "glyphOrientationVertical",
      "glyph-orientation-vertical"
    ],
    [
      "horizAdvX",
      "horiz-adv-x"
    ],
    [
      "horizOriginX",
      "horiz-origin-x"
    ],
    [
      "imageRendering",
      "image-rendering"
    ],
    [
      "letterSpacing",
      "letter-spacing"
    ],
    [
      "lightingColor",
      "lighting-color"
    ],
    [
      "markerEnd",
      "marker-end"
    ],
    [
      "markerMid",
      "marker-mid"
    ],
    [
      "markerStart",
      "marker-start"
    ],
    [
      "overlinePosition",
      "overline-position"
    ],
    [
      "overlineThickness",
      "overline-thickness"
    ],
    [
      "paintOrder",
      "paint-order"
    ],
    [
      "panose-1",
      "panose-1"
    ],
    [
      "pointerEvents",
      "pointer-events"
    ],
    [
      "renderingIntent",
      "rendering-intent"
    ],
    [
      "shapeRendering",
      "shape-rendering"
    ],
    [
      "stopColor",
      "stop-color"
    ],
    [
      "stopOpacity",
      "stop-opacity"
    ],
    [
      "strikethroughPosition",
      "strikethrough-position"
    ],
    [
      "strikethroughThickness",
      "strikethrough-thickness"
    ],
    [
      "strokeDasharray",
      "stroke-dasharray"
    ],
    [
      "strokeDashoffset",
      "stroke-dashoffset"
    ],
    [
      "strokeLinecap",
      "stroke-linecap"
    ],
    [
      "strokeLinejoin",
      "stroke-linejoin"
    ],
    [
      "strokeMiterlimit",
      "stroke-miterlimit"
    ],
    [
      "strokeOpacity",
      "stroke-opacity"
    ],
    [
      "strokeWidth",
      "stroke-width"
    ],
    [
      "textAnchor",
      "text-anchor"
    ],
    [
      "textDecoration",
      "text-decoration"
    ],
    [
      "textRendering",
      "text-rendering"
    ],
    [
      "transformOrigin",
      "transform-origin"
    ],
    [
      "underlinePosition",
      "underline-position"
    ],
    [
      "underlineThickness",
      "underline-thickness"
    ],
    [
      "unicodeBidi",
      "unicode-bidi"
    ],
    [
      "unicodeRange",
      "unicode-range"
    ],
    [
      "unitsPerEm",
      "units-per-em"
    ],
    [
      "vAlphabetic",
      "v-alphabetic"
    ],
    [
      "vHanging",
      "v-hanging"
    ],
    [
      "vIdeographic",
      "v-ideographic"
    ],
    [
      "vMathematical",
      "v-mathematical"
    ],
    [
      "vectorEffect",
      "vector-effect"
    ],
    [
      "vertAdvY",
      "vert-adv-y"
    ],
    [
      "vertOriginX",
      "vert-origin-x"
    ],
    [
      "vertOriginY",
      "vert-origin-y"
    ],
    [
      "wordSpacing",
      "word-spacing"
    ],
    [
      "writingMode",
      "writing-mode"
    ],
    [
      "xmlnsXlink",
      "xmlns:xlink"
    ],
    [
      "xHeight",
      "x-height"
    ]
  ]), Dh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cn2(l6) {
    return Dh.test("" + l6) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l6;
  }
  var ac = null;
  function wc(l6) {
    return l6 = l6.target || l6.srcElement || window, l6.correspondingUseElement && (l6 = l6.correspondingUseElement), l6.nodeType === 3 ? l6.parentNode : l6;
  }
  var ca = null, za2 = null;
  function pe3(l6) {
    var u6 = Ga2(l6);
    if (u6 && (l6 = u6.stateNode)) {
      var a4 = l6[Sl2] || null;
      l: switch (l6 = u6.stateNode, u6.type) {
        case "input":
          if (lc(l6, a4.value, a4.defaultValue, a4.defaultValue, a4.checked, a4.defaultChecked, a4.type, a4.name), u6 = a4.name, a4.type === "radio" && u6 != null) {
            for (a4 = l6; a4.parentNode; ) a4 = a4.parentNode;
            for (a4 = a4.querySelectorAll('input[name="' + ql("" + u6) + '"][type="radio"]'), u6 = 0; u6 < a4.length; u6++) {
              var t = a4[u6];
              if (t !== l6 && t.form === l6.form) {
                var n2 = t[Sl2] || null;
                if (!n2) throw Error(A10(90));
                lc(t, n2.value, n2.defaultValue, n2.defaultValue, n2.checked, n2.defaultChecked, n2.type, n2.name);
              }
            }
            for (u6 = 0; u6 < a4.length; u6++) t = a4[u6], t.form === l6.form && M0(t);
          }
          break l;
        case "textarea":
          D0(l6, a4.value, a4.defaultValue);
          break l;
        case "select":
          u6 = a4.value, u6 != null && ba2(l6, !!a4.multiple, u6, false);
      }
    }
  }
  var Tf = false;
  function U0(l6, u6, a4) {
    if (Tf) return l6(u6, a4);
    Tf = true;
    try {
      var t = l6(u6);
      return t;
    } finally {
      if (Tf = false, (ca !== null || za2 !== null) && (ff(), ca && (u6 = ca, l6 = za2, za2 = ca = null, pe3(u6), l6))) for (u6 = 0; u6 < l6.length; u6++) pe3(l6[u6]);
    }
  }
  function St2(l6, u6) {
    var a4 = l6.stateNode;
    if (a4 === null) return null;
    var t = a4[Sl2] || null;
    if (t === null) return null;
    a4 = t[u6];
    l: switch (u6) {
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
        (t = !t.disabled) || (l6 = l6.type, t = !(l6 === "button" || l6 === "input" || l6 === "select" || l6 === "textarea")), l6 = !t;
        break l;
      default:
        l6 = false;
    }
    if (l6) return null;
    if (a4 && typeof a4 != "function") throw Error(A10(231, u6, typeof a4));
    return a4;
  }
  var uu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tc = false;
  if (uu) try {
    ru = {}, Object.defineProperty(ru, "passive", {
      get: function() {
        tc = true;
      }
    }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
  } catch {
    tc = false;
  }
  var ru, bu = null, $c = null, en = null;
  function H0() {
    if (en) return en;
    var l6, u6 = $c, a4 = u6.length, t, n2 = "value" in bu ? bu.value : bu.textContent, f4 = n2.length;
    for (l6 = 0; l6 < a4 && u6[l6] === n2[l6]; l6++) ;
    var c3 = a4 - l6;
    for (t = 1; t <= c3 && u6[a4 - t] === n2[f4 - t]; t++) ;
    return en = n2.slice(l6, 1 < t ? 1 - t : void 0);
  }
  function vn2(l6) {
    var u6 = l6.keyCode;
    return "charCode" in l6 ? (l6 = l6.charCode, l6 === 0 && u6 === 13 && (l6 = 13)) : l6 = u6, l6 === 10 && (l6 = 13), 32 <= l6 || l6 === 13 ? l6 : 0;
  }
  function Wt2() {
    return true;
  }
  function Je4() {
    return false;
  }
  function ml(l6) {
    function u6(a4, t, n2, f4, c3) {
      this._reactName = a4, this._targetInst = n2, this.type = t, this.nativeEvent = f4, this.target = c3, this.currentTarget = null;
      for (var e in l6) l6.hasOwnProperty(e) && (a4 = l6[e], this[e] = a4 ? a4(f4) : f4[e]);
      return this.isDefaultPrevented = (f4.defaultPrevented != null ? f4.defaultPrevented : f4.returnValue === false) ? Wt2 : Je4, this.isPropagationStopped = Je4, this;
    }
    return j10(u6.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var a4 = this.nativeEvent;
        a4 && (a4.preventDefault ? a4.preventDefault() : typeof a4.returnValue != "unknown" && (a4.returnValue = false), this.isDefaultPrevented = Wt2);
      },
      stopPropagation: function() {
        var a4 = this.nativeEvent;
        a4 && (a4.stopPropagation ? a4.stopPropagation() : typeof a4.cancelBubble != "unknown" && (a4.cancelBubble = true), this.isPropagationStopped = Wt2);
      },
      persist: function() {
      },
      isPersistent: Wt2
    }), u6;
  }
  var $u = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l6) {
      return l6.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kn = ml($u), Yt2 = j10({}, $u, {
    view: 0,
    detail: 0
  }), Oh = ml(Yt2), Mf, Ef, Ka2, rn2 = j10({}, Yt2, {
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
    getModifierState: Fc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l6) {
      return l6.relatedTarget === void 0 ? l6.fromElement === l6.srcElement ? l6.toElement : l6.fromElement : l6.relatedTarget;
    },
    movementX: function(l6) {
      return "movementX" in l6 ? l6.movementX : (l6 !== Ka2 && (Ka2 && l6.type === "mousemove" ? (Mf = l6.screenX - Ka2.screenX, Ef = l6.screenY - Ka2.screenY) : Ef = Mf = 0, Ka2 = l6), Mf);
    },
    movementY: function(l6) {
      return "movementY" in l6 ? l6.movementY : Ef;
    }
  }), We4 = ml(rn2), sh = j10({}, rn2, {
    dataTransfer: 0
  }), Uh = ml(sh), Hh = j10({}, Yt2, {
    relatedTarget: 0
  }), Df = ml(Hh), Nh = j10({}, $u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qh = ml(Nh), Bh = j10({}, $u, {
    clipboardData: function(l6) {
      return "clipboardData" in l6 ? l6.clipboardData : window.clipboardData;
    }
  }), Rh = ml(Bh), Yh = j10({}, $u, {
    data: 0
  }), we5 = ml(Yh), oh = {
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
    MozPrintableKey: "Unidentified"
  }, _h = {
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
    224: "Meta"
  }, Xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Gh(l6) {
    var u6 = this.nativeEvent;
    return u6.getModifierState ? u6.getModifierState(l6) : (l6 = Xh[l6]) ? !!u6[l6] : false;
  }
  function Fc() {
    return Gh;
  }
  var Qh = j10({}, Yt2, {
    key: function(l6) {
      if (l6.key) {
        var u6 = oh[l6.key] || l6.key;
        if (u6 !== "Unidentified") return u6;
      }
      return l6.type === "keypress" ? (l6 = vn2(l6), l6 === 13 ? "Enter" : String.fromCharCode(l6)) : l6.type === "keydown" || l6.type === "keyup" ? _h[l6.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fc,
    charCode: function(l6) {
      return l6.type === "keypress" ? vn2(l6) : 0;
    },
    keyCode: function(l6) {
      return l6.type === "keydown" || l6.type === "keyup" ? l6.keyCode : 0;
    },
    which: function(l6) {
      return l6.type === "keypress" ? vn2(l6) : l6.type === "keydown" || l6.type === "keyup" ? l6.keyCode : 0;
    }
  }), Zh = ml(Qh), xh = j10({}, rn2, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $e4 = ml(xh), Vh = j10({}, Yt2, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fc
  }), jh = ml(Vh), Kh = j10({}, $u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ch = ml(Kh), Lh = j10({}, rn2, {
    deltaX: function(l6) {
      return "deltaX" in l6 ? l6.deltaX : "wheelDeltaX" in l6 ? -l6.wheelDeltaX : 0;
    },
    deltaY: function(l6) {
      return "deltaY" in l6 ? l6.deltaY : "wheelDeltaY" in l6 ? -l6.wheelDeltaY : "wheelDelta" in l6 ? -l6.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ph = ml(Lh), Jh = j10({}, $u, {
    newState: 0,
    oldState: 0
  }), Wh = ml(Jh), wh = [
    9,
    13,
    27,
    32
  ], kc = uu && "CompositionEvent" in window, Ia = null;
  uu && "documentMode" in document && (Ia = document.documentMode);
  var $h = uu && "TextEvent" in window && !Ia, N0 = uu && (!kc || Ia && 8 < Ia && 11 >= Ia), Fe4 = " ", ke6 = false;
  function q0(l6, u6) {
    switch (l6) {
      case "keyup":
        return wh.indexOf(u6.keyCode) !== -1;
      case "keydown":
        return u6.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function B0(l6) {
    return l6 = l6.detail, typeof l6 == "object" && "data" in l6 ? l6.data : null;
  }
  var ea = false;
  function Fh(l6, u6) {
    switch (l6) {
      case "compositionend":
        return B0(u6);
      case "keypress":
        return u6.which !== 32 ? null : (ke6 = true, Fe4);
      case "textInput":
        return l6 = u6.data, l6 === Fe4 && ke6 ? null : l6;
      default:
        return null;
    }
  }
  function kh(l6, u6) {
    if (ea) return l6 === "compositionend" || !kc && q0(l6, u6) ? (l6 = H0(), en = $c = bu = null, ea = false, l6) : null;
    switch (l6) {
      case "paste":
        return null;
      case "keypress":
        if (!(u6.ctrlKey || u6.altKey || u6.metaKey) || u6.ctrlKey && u6.altKey) {
          if (u6.char && 1 < u6.char.length) return u6.char;
          if (u6.which) return String.fromCharCode(u6.which);
        }
        return null;
      case "compositionend":
        return N0 && u6.locale !== "ko" ? null : u6.data;
      default:
        return null;
    }
  }
  var rh = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function re5(l6) {
    var u6 = l6 && l6.nodeName && l6.nodeName.toLowerCase();
    return u6 === "input" ? !!rh[l6.type] : u6 === "textarea";
  }
  function R0(l6, u6, a4, t) {
    ca ? za2 ? za2.push(t) : za2 = [
      t
    ] : ca = t, u6 = Cn2(u6, "onChange"), 0 < u6.length && (a4 = new kn("onChange", "change", null, a4, t), l6.push({
      event: a4,
      listeners: u6
    }));
  }
  var Pa2 = null, mt2 = null;
  function Ih(l6) {
    Dv(l6, 0);
  }
  function In(l6) {
    var u6 = ka(l6);
    if (M0(u6)) return l6;
  }
  function Ie3(l6, u6) {
    if (l6 === "change") return u6;
  }
  var Y0 = false;
  uu && (uu ? ($t3 = "oninput" in document, $t3 || (Of = document.createElement("div"), Of.setAttribute("oninput", "return;"), $t3 = typeof Of.oninput == "function"), wt2 = $t3) : wt2 = false, Y0 = wt2 && (!document.documentMode || 9 < document.documentMode));
  var wt2, $t3, Of;
  function Pe6() {
    Pa2 && (Pa2.detachEvent("onpropertychange", o0), mt2 = Pa2 = null);
  }
  function o0(l6) {
    if (l6.propertyName === "value" && In(mt2)) {
      var u6 = [];
      R0(u6, mt2, l6, wc(l6)), U0(Ih, u6);
    }
  }
  function Ph(l6, u6, a4) {
    l6 === "focusin" ? (Pe6(), Pa2 = u6, mt2 = a4, Pa2.attachEvent("onpropertychange", o0)) : l6 === "focusout" && Pe6();
  }
  function ly(l6) {
    if (l6 === "selectionchange" || l6 === "keyup" || l6 === "keydown") return In(mt2);
  }
  function uy(l6, u6) {
    if (l6 === "click") return In(u6);
  }
  function ay(l6, u6) {
    if (l6 === "input" || l6 === "change") return In(u6);
  }
  function ty(l6, u6) {
    return l6 === u6 && (l6 !== 0 || 1 / l6 === 1 / u6) || l6 !== l6 && u6 !== u6;
  }
  var Ol3 = typeof Object.is == "function" ? Object.is : ty;
  function gt2(l6, u6) {
    if (Ol3(l6, u6)) return true;
    if (typeof l6 != "object" || l6 === null || typeof u6 != "object" || u6 === null) return false;
    var a4 = Object.keys(l6), t = Object.keys(u6);
    if (a4.length !== t.length) return false;
    for (t = 0; t < a4.length; t++) {
      var n2 = a4[t];
      if (!If.call(u6, n2) || !Ol3(l6[n2], u6[n2])) return false;
    }
    return true;
  }
  function li2(l6) {
    for (; l6 && l6.firstChild; ) l6 = l6.firstChild;
    return l6;
  }
  function ui3(l6, u6) {
    var a4 = li2(l6);
    l6 = 0;
    for (var t; a4; ) {
      if (a4.nodeType === 3) {
        if (t = l6 + a4.textContent.length, l6 <= u6 && t >= u6) return {
          node: a4,
          offset: u6 - l6
        };
        l6 = t;
      }
      l: {
        for (; a4; ) {
          if (a4.nextSibling) {
            a4 = a4.nextSibling;
            break l;
          }
          a4 = a4.parentNode;
        }
        a4 = void 0;
      }
      a4 = li2(a4);
    }
  }
  function _0(l6, u6) {
    return l6 && u6 ? l6 === u6 ? true : l6 && l6.nodeType === 3 ? false : u6 && u6.nodeType === 3 ? _0(l6, u6.parentNode) : "contains" in l6 ? l6.contains(u6) : l6.compareDocumentPosition ? !!(l6.compareDocumentPosition(u6) & 16) : false : false;
  }
  function X0(l6) {
    l6 = l6 != null && l6.ownerDocument != null && l6.ownerDocument.defaultView != null ? l6.ownerDocument.defaultView : window;
    for (var u6 = sn2(l6.document); u6 instanceof l6.HTMLIFrameElement; ) {
      try {
        var a4 = typeof u6.contentWindow.location.href == "string";
      } catch {
        a4 = false;
      }
      if (a4) l6 = u6.contentWindow;
      else break;
      u6 = sn2(l6.document);
    }
    return u6;
  }
  function rc(l6) {
    var u6 = l6 && l6.nodeName && l6.nodeName.toLowerCase();
    return u6 && (u6 === "input" && (l6.type === "text" || l6.type === "search" || l6.type === "tel" || l6.type === "url" || l6.type === "password") || u6 === "textarea" || l6.contentEditable === "true");
  }
  var ny = uu && "documentMode" in document && 11 >= document.documentMode, ia = null, nc = null, lt = null, fc = false;
  function ai2(l6, u6, a4) {
    var t = a4.window === a4 ? a4.document : a4.nodeType === 9 ? a4 : a4.ownerDocument;
    fc || ia == null || ia !== sn2(t) || (t = ia, "selectionStart" in t && rc(t) ? t = {
      start: t.selectionStart,
      end: t.selectionEnd
    } : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = {
      anchorNode: t.anchorNode,
      anchorOffset: t.anchorOffset,
      focusNode: t.focusNode,
      focusOffset: t.focusOffset
    }), lt && gt2(lt, t) || (lt = t, t = Cn2(nc, "onSelect"), 0 < t.length && (u6 = new kn("onSelect", "select", null, u6, a4), l6.push({
      event: u6,
      listeners: t
    }), u6.target = ia)));
  }
  function ou(l6, u6) {
    var a4 = {};
    return a4[l6.toLowerCase()] = u6.toLowerCase(), a4["Webkit" + l6] = "webkit" + u6, a4["Moz" + l6] = "moz" + u6, a4;
  }
  var va = {
    animationend: ou("Animation", "AnimationEnd"),
    animationiteration: ou("Animation", "AnimationIteration"),
    animationstart: ou("Animation", "AnimationStart"),
    transitionrun: ou("Transition", "TransitionRun"),
    transitionstart: ou("Transition", "TransitionStart"),
    transitioncancel: ou("Transition", "TransitionCancel"),
    transitionend: ou("Transition", "TransitionEnd")
  }, sf = {}, G0 = {};
  uu && (G0 = document.createElement("div").style, "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in window || delete va.transitionend.transition);
  function Fu2(l6) {
    if (sf[l6]) return sf[l6];
    if (!va[l6]) return l6;
    var u6 = va[l6], a4;
    for (a4 in u6) if (u6.hasOwnProperty(a4) && a4 in G0) return sf[l6] = u6[a4];
    return l6;
  }
  var Q0 = Fu2("animationend"), Z0 = Fu2("animationiteration"), x0 = Fu2("animationstart"), fy = Fu2("transitionrun"), cy = Fu2("transitionstart"), ey = Fu2("transitioncancel"), V0 = Fu2("transitionend"), j0 = /* @__PURE__ */ new Map(), cc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  cc.push("scrollEnd");
  function Gl(l6, u6) {
    j0.set(l6, u6), wu(u6, [
      l6
    ]);
  }
  var ti2 = /* @__PURE__ */ new WeakMap();
  function Bl2(l6, u6) {
    if (typeof l6 == "object" && l6 !== null) {
      var a4 = ti2.get(l6);
      return a4 !== void 0 ? a4 : (u6 = {
        value: l6,
        source: u6,
        stack: Ce5(u6)
      }, ti2.set(l6, u6), u6);
    }
    return {
      value: l6,
      source: u6,
      stack: Ce5(u6)
    };
  }
  var sl = [], ha = 0, Ic = 0;
  function Pn2() {
    for (var l6 = ha, u6 = Ic = ha = 0; u6 < l6; ) {
      var a4 = sl[u6];
      sl[u6++] = null;
      var t = sl[u6];
      sl[u6++] = null;
      var n2 = sl[u6];
      sl[u6++] = null;
      var f4 = sl[u6];
      if (sl[u6++] = null, t !== null && n2 !== null) {
        var c3 = t.pending;
        c3 === null ? n2.next = n2 : (n2.next = c3.next, c3.next = n2), t.pending = n2;
      }
      f4 !== 0 && K0(a4, n2, f4);
    }
  }
  function lf(l6, u6, a4, t) {
    sl[ha++] = l6, sl[ha++] = u6, sl[ha++] = a4, sl[ha++] = t, Ic |= t, l6.lanes |= t, l6 = l6.alternate, l6 !== null && (l6.lanes |= t);
  }
  function Pc(l6, u6, a4, t) {
    return lf(l6, u6, a4, t), Un(l6);
  }
  function Qa2(l6, u6) {
    return lf(l6, null, null, u6), Un(l6);
  }
  function K0(l6, u6, a4) {
    l6.lanes |= a4;
    var t = l6.alternate;
    t !== null && (t.lanes |= a4);
    for (var n2 = false, f4 = l6.return; f4 !== null; ) f4.childLanes |= a4, t = f4.alternate, t !== null && (t.childLanes |= a4), f4.tag === 22 && (l6 = f4.stateNode, l6 === null || l6._visibility & 1 || (n2 = true)), l6 = f4, f4 = f4.return;
    return l6.tag === 3 ? (f4 = l6.stateNode, n2 && u6 !== null && (n2 = 31 - Ml3(a4), l6 = f4.hiddenUpdates, t = l6[n2], t === null ? l6[n2] = [
      u6
    ] : t.push(u6), u6.lane = a4 | 536870912), f4) : null;
  }
  function Un(l6) {
    if (50 < ht3) throw ht3 = 0, Nc = null, Error(A10(185));
    for (var u6 = l6.return; u6 !== null; ) l6 = u6, u6 = l6.return;
    return l6.tag === 3 ? l6.stateNode : null;
  }
  var ya3 = {};
  function iy(l6, u6, a4, t) {
    this.tag = l6, this.key = a4, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = u6, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Al2(l6, u6, a4, t) {
    return new iy(l6, u6, a4, t);
  }
  function le3(l6) {
    return l6 = l6.prototype, !(!l6 || !l6.isReactComponent);
  }
  function Pl2(l6, u6) {
    var a4 = l6.alternate;
    return a4 === null ? (a4 = Al2(l6.tag, u6, l6.key, l6.mode), a4.elementType = l6.elementType, a4.type = l6.type, a4.stateNode = l6.stateNode, a4.alternate = l6, l6.alternate = a4) : (a4.pendingProps = u6, a4.type = l6.type, a4.flags = 0, a4.subtreeFlags = 0, a4.deletions = null), a4.flags = l6.flags & 65011712, a4.childLanes = l6.childLanes, a4.lanes = l6.lanes, a4.child = l6.child, a4.memoizedProps = l6.memoizedProps, a4.memoizedState = l6.memoizedState, a4.updateQueue = l6.updateQueue, u6 = l6.dependencies, a4.dependencies = u6 === null ? null : {
      lanes: u6.lanes,
      firstContext: u6.firstContext
    }, a4.sibling = l6.sibling, a4.index = l6.index, a4.ref = l6.ref, a4.refCleanup = l6.refCleanup, a4;
  }
  function C0(l6, u6) {
    l6.flags &= 65011714;
    var a4 = l6.alternate;
    return a4 === null ? (l6.childLanes = 0, l6.lanes = u6, l6.child = null, l6.subtreeFlags = 0, l6.memoizedProps = null, l6.memoizedState = null, l6.updateQueue = null, l6.dependencies = null, l6.stateNode = null) : (l6.childLanes = a4.childLanes, l6.lanes = a4.lanes, l6.child = a4.child, l6.subtreeFlags = 0, l6.deletions = null, l6.memoizedProps = a4.memoizedProps, l6.memoizedState = a4.memoizedState, l6.updateQueue = a4.updateQueue, l6.type = a4.type, u6 = a4.dependencies, l6.dependencies = u6 === null ? null : {
      lanes: u6.lanes,
      firstContext: u6.firstContext
    }), l6;
  }
  function hn(l6, u6, a4, t, n2, f4) {
    var c3 = 0;
    if (t = l6, typeof l6 == "function") le3(l6) && (c3 = 1);
    else if (typeof l6 == "string") c3 = id(l6, a4, Vl2.current) ? 26 : l6 === "html" || l6 === "head" || l6 === "body" ? 27 : 5;
    else l: switch (l6) {
      case $f:
        return l6 = Al2(31, a4, u6, n2), l6.elementType = $f, l6.lanes = f4, l6;
      case ta2:
        return Zu(a4.children, n2, f4, u6);
      case e0:
        c3 = 8, n2 |= 24;
        break;
      case Jf:
        return l6 = Al2(12, a4, u6, n2 | 2), l6.elementType = Jf, l6.lanes = f4, l6;
      case Wf:
        return l6 = Al2(13, a4, u6, n2), l6.elementType = Wf, l6.lanes = f4, l6;
      case wf:
        return l6 = Al2(19, a4, u6, n2), l6.elementType = wf, l6.lanes = f4, l6;
      default:
        if (typeof l6 == "object" && l6 !== null) switch (l6.$$typeof) {
          case Iv:
          case $l:
            c3 = 10;
            break l;
          case i0:
            c3 = 9;
            break l;
          case jc:
            c3 = 11;
            break l;
          case Kc:
            c3 = 14;
            break l;
          case vu2:
            c3 = 16, t = null;
            break l;
        }
        c3 = 29, a4 = Error(A10(130, l6 === null ? "null" : typeof l6, "")), t = null;
    }
    return u6 = Al2(c3, a4, u6, n2), u6.elementType = l6, u6.type = t, u6.lanes = f4, u6;
  }
  function Zu(l6, u6, a4, t) {
    return l6 = Al2(7, l6, t, u6), l6.lanes = a4, l6;
  }
  function Uf(l6, u6, a4) {
    return l6 = Al2(6, l6, null, u6), l6.lanes = a4, l6;
  }
  function Hf(l6, u6, a4) {
    return u6 = Al2(4, l6.children !== null ? l6.children : [], l6.key, u6), u6.lanes = a4, u6.stateNode = {
      containerInfo: l6.containerInfo,
      pendingChildren: null,
      implementation: l6.implementation
    }, u6;
  }
  var da2 = [], Sa2 = 0, Hn = null, Nn = 0, Hl = [], Nl3 = 0, xu = null, Fl3 = 1, kl2 = "";
  function Xu(l6, u6) {
    da2[Sa2++] = Nn, da2[Sa2++] = Hn, Hn = l6, Nn = u6;
  }
  function L0(l6, u6, a4) {
    Hl[Nl3++] = Fl3, Hl[Nl3++] = kl2, Hl[Nl3++] = xu, xu = l6;
    var t = Fl3;
    l6 = kl2;
    var n2 = 32 - Ml3(t) - 1;
    t &= ~(1 << n2), a4 += 1;
    var f4 = 32 - Ml3(u6) + n2;
    if (30 < f4) {
      var c3 = n2 - n2 % 5;
      f4 = (t & (1 << c3) - 1).toString(32), t >>= c3, n2 -= c3, Fl3 = 1 << 32 - Ml3(u6) + n2 | a4 << n2 | t, kl2 = f4 + l6;
    } else Fl3 = 1 << f4 | a4 << n2 | t, kl2 = l6;
  }
  function ue4(l6) {
    l6.return !== null && (Xu(l6, 1), L0(l6, 1, 0));
  }
  function ae5(l6) {
    for (; l6 === Hn; ) Hn = da2[--Sa2], da2[Sa2] = null, Nn = da2[--Sa2], da2[Sa2] = null;
    for (; l6 === xu; ) xu = Hl[--Nl3], Hl[Nl3] = null, kl2 = Hl[--Nl3], Hl[Nl3] = null, Fl3 = Hl[--Nl3], Hl[Nl3] = null;
  }
  var vl2 = null, p6 = null, Y5 = false, Vu2 = null, Zl = false, ec = Error(A10(519));
  function Lu(l6) {
    var u6 = Error(A10(418, ""));
    throw bt2(Bl2(u6, l6)), ec;
  }
  function ni2(l6) {
    var u6 = l6.stateNode, a4 = l6.type, t = l6.memoizedProps;
    switch (u6[el2] = l6, u6[Sl2] = t, a4) {
      case "dialog":
        N5("cancel", u6), N5("close", u6);
        break;
      case "iframe":
      case "object":
      case "embed":
        N5("load", u6);
        break;
      case "video":
      case "audio":
        for (a4 = 0; a4 < Tt3.length; a4++) N5(Tt3[a4], u6);
        break;
      case "source":
        N5("error", u6);
        break;
      case "img":
      case "image":
      case "link":
        N5("error", u6), N5("load", u6);
        break;
      case "details":
        N5("toggle", u6);
        break;
      case "input":
        N5("invalid", u6), E0(u6, t.value, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name, true), On(u6);
        break;
      case "select":
        N5("invalid", u6);
        break;
      case "textarea":
        N5("invalid", u6), O0(u6, t.value, t.defaultValue, t.children), On(u6);
    }
    a4 = t.children, typeof a4 != "string" && typeof a4 != "number" && typeof a4 != "bigint" || u6.textContent === "" + a4 || t.suppressHydrationWarning === true || sv(u6.textContent, a4) ? (t.popover != null && (N5("beforetoggle", u6), N5("toggle", u6)), t.onScroll != null && N5("scroll", u6), t.onScrollEnd != null && N5("scrollend", u6), t.onClick != null && (u6.onclick = vf), u6 = true) : u6 = false, u6 || Lu(l6);
  }
  function fi2(l6) {
    for (vl2 = l6.return; vl2; ) switch (vl2.tag) {
      case 5:
      case 13:
        Zl = false;
        return;
      case 27:
      case 3:
        Zl = true;
        return;
      default:
        vl2 = vl2.return;
    }
  }
  function Ca2(l6) {
    if (l6 !== vl2) return false;
    if (!Y5) return fi2(l6), Y5 = true, false;
    var u6 = l6.tag, a4;
    if ((a4 = u6 !== 3 && u6 !== 27) && ((a4 = u6 === 5) && (a4 = l6.type, a4 = !(a4 !== "form" && a4 !== "button") || _c(l6.type, l6.memoizedProps)), a4 = !a4), a4 && p6 && Lu(l6), fi2(l6), u6 === 13) {
      if (l6 = l6.memoizedState, l6 = l6 !== null ? l6.dehydrated : null, !l6) throw Error(A10(317));
      l: {
        for (l6 = l6.nextSibling, u6 = 0; l6; ) {
          if (l6.nodeType === 8) if (a4 = l6.data, a4 === "/$") {
            if (u6 === 0) {
              p6 = Xl(l6.nextSibling);
              break l;
            }
            u6--;
          } else a4 !== "$" && a4 !== "$!" && a4 !== "$?" || u6++;
          l6 = l6.nextSibling;
        }
        p6 = null;
      }
    } else u6 === 27 ? (u6 = p6, Yu2(l6.type) ? (l6 = Qc, Qc = null, p6 = l6) : p6 = u6) : p6 = vl2 ? Xl(l6.stateNode.nextSibling) : null;
    return true;
  }
  function ot4() {
    p6 = vl2 = null, Y5 = false;
  }
  function ci() {
    var l6 = Vu2;
    return l6 !== null && (dl2 === null ? dl2 = l6 : dl2.push.apply(dl2, l6), Vu2 = null), l6;
  }
  function bt2(l6) {
    Vu2 === null ? Vu2 = [
      l6
    ] : Vu2.push(l6);
  }
  var ic = Cl2(null), ku2 = null, rl = null;
  function yu2(l6, u6, a4) {
    C8(ic, u6._currentValue), u6._currentValue = a4;
  }
  function lu(l6) {
    l6._currentValue = ic.current, tl2(ic);
  }
  function vc(l6, u6, a4) {
    for (; l6 !== null; ) {
      var t = l6.alternate;
      if ((l6.childLanes & u6) !== u6 ? (l6.childLanes |= u6, t !== null && (t.childLanes |= u6)) : t !== null && (t.childLanes & u6) !== u6 && (t.childLanes |= u6), l6 === a4) break;
      l6 = l6.return;
    }
  }
  function hc(l6, u6, a4, t) {
    var n2 = l6.child;
    for (n2 !== null && (n2.return = l6); n2 !== null; ) {
      var f4 = n2.dependencies;
      if (f4 !== null) {
        var c3 = n2.child;
        f4 = f4.firstContext;
        l: for (; f4 !== null; ) {
          var e = f4;
          f4 = n2;
          for (var i3 = 0; i3 < u6.length; i3++) if (e.context === u6[i3]) {
            f4.lanes |= a4, e = f4.alternate, e !== null && (e.lanes |= a4), vc(f4.return, a4, l6), t || (c3 = null);
            break l;
          }
          f4 = e.next;
        }
      } else if (n2.tag === 18) {
        if (c3 = n2.return, c3 === null) throw Error(A10(341));
        c3.lanes |= a4, f4 = c3.alternate, f4 !== null && (f4.lanes |= a4), vc(c3, a4, l6), c3 = null;
      } else c3 = n2.child;
      if (c3 !== null) c3.return = n2;
      else for (c3 = n2; c3 !== null; ) {
        if (c3 === l6) {
          c3 = null;
          break;
        }
        if (n2 = c3.sibling, n2 !== null) {
          n2.return = c3.return, c3 = n2;
          break;
        }
        c3 = c3.return;
      }
      n2 = c3;
    }
  }
  function _t2(l6, u6, a4, t) {
    l6 = null;
    for (var n2 = u6, f4 = false; n2 !== null; ) {
      if (!f4) {
        if ((n2.flags & 524288) !== 0) f4 = true;
        else if ((n2.flags & 262144) !== 0) break;
      }
      if (n2.tag === 10) {
        var c3 = n2.alternate;
        if (c3 === null) throw Error(A10(387));
        if (c3 = c3.memoizedProps, c3 !== null) {
          var e = n2.type;
          Ol3(n2.pendingProps.value, c3.value) || (l6 !== null ? l6.push(e) : l6 = [
            e
          ]);
        }
      } else if (n2 === Tn.current) {
        if (c3 = n2.alternate, c3 === null) throw Error(A10(387));
        c3.memoizedState.memoizedState !== n2.memoizedState.memoizedState && (l6 !== null ? l6.push(Dt2) : l6 = [
          Dt2
        ]);
      }
      n2 = n2.return;
    }
    l6 !== null && hc(u6, l6, a4, t), u6.flags |= 262144;
  }
  function qn(l6) {
    for (l6 = l6.firstContext; l6 !== null; ) {
      if (!Ol3(l6.context._currentValue, l6.memoizedValue)) return true;
      l6 = l6.next;
    }
    return false;
  }
  function pu2(l6) {
    ku2 = l6, rl = null, l6 = l6.dependencies, l6 !== null && (l6.firstContext = null);
  }
  function il(l6) {
    return p0(ku2, l6);
  }
  function Ft3(l6, u6) {
    return ku2 === null && pu2(l6), p0(l6, u6);
  }
  function p0(l6, u6) {
    var a4 = u6._currentValue;
    if (u6 = {
      context: u6,
      memoizedValue: a4,
      next: null
    }, rl === null) {
      if (l6 === null) throw Error(A10(308));
      rl = u6, l6.dependencies = {
        lanes: 0,
        firstContext: u6
      }, l6.flags |= 524288;
    } else rl = rl.next = u6;
    return a4;
  }
  var vy = typeof AbortController < "u" ? AbortController : function() {
    var l6 = [], u6 = this.signal = {
      aborted: false,
      addEventListener: function(a4, t) {
        l6.push(t);
      }
    };
    this.abort = function() {
      u6.aborted = true, l6.forEach(function(a4) {
        return a4();
      });
    };
  }, hy = I5.unstable_scheduleCallback, yy = I5.unstable_NormalPriority, k9 = {
    $$typeof: $l,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function te2() {
    return {
      controller: new vy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xt2(l6) {
    l6.refCount--, l6.refCount === 0 && hy(yy, function() {
      l6.controller.abort();
    });
  }
  var ut3 = null, yc = 0, Ha2 = 0, Aa = null;
  function dy(l6, u6) {
    if (ut3 === null) {
      var a4 = ut3 = [];
      yc = 0, Ha2 = He4(), Aa = {
        status: "pending",
        value: void 0,
        then: function(t) {
          a4.push(t);
        }
      };
    }
    return yc++, u6.then(ei2, ei2), u6;
  }
  function ei2() {
    if (--yc === 0 && ut3 !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var l6 = ut3;
      ut3 = null, Ha2 = 0, Aa = null;
      for (var u6 = 0; u6 < l6.length; u6++) (0, l6[u6])();
    }
  }
  function Sy(l6, u6) {
    var a4 = [], t = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n2) {
        a4.push(n2);
      }
    };
    return l6.then(function() {
      t.status = "fulfilled", t.value = u6;
      for (var n2 = 0; n2 < a4.length; n2++) (0, a4[n2])(u6);
    }, function(n2) {
      for (t.status = "rejected", t.reason = n2, n2 = 0; n2 < a4.length; n2++) (0, a4[n2])(void 0);
    }), t;
  }
  var ii2 = s2.S;
  s2.S = function(l6, u6) {
    typeof u6 == "object" && u6 !== null && typeof u6.then == "function" && dy(l6, u6), ii2 !== null && ii2(l6, u6);
  };
  var ju = Cl2(null);
  function ne3() {
    var l6 = ju.current;
    return l6 !== null ? l6 : V6.pooledCache;
  }
  function yn2(l6, u6) {
    u6 === null ? C8(ju, ju.current) : C8(ju, u6.pool);
  }
  function J0() {
    var l6 = ne3();
    return l6 === null ? null : {
      parent: k9._currentValue,
      pool: l6
    };
  }
  var Gt3 = Error(A10(460)), W0 = Error(A10(474)), uf = Error(A10(542)), dc = {
    then: function() {
    }
  };
  function vi3(l6) {
    return l6 = l6.status, l6 === "fulfilled" || l6 === "rejected";
  }
  function kt3() {
  }
  function w0(l6, u6, a4) {
    switch (a4 = l6[a4], a4 === void 0 ? l6.push(u6) : a4 !== u6 && (u6.then(kt3, kt3), u6 = a4), u6.status) {
      case "fulfilled":
        return u6.value;
      case "rejected":
        throw l6 = u6.reason, yi3(l6), l6;
      default:
        if (typeof u6.status == "string") u6.then(kt3, kt3);
        else {
          if (l6 = V6, l6 !== null && 100 < l6.shellSuspendCounter) throw Error(A10(482));
          l6 = u6, l6.status = "pending", l6.then(function(t) {
            if (u6.status === "pending") {
              var n2 = u6;
              n2.status = "fulfilled", n2.value = t;
            }
          }, function(t) {
            if (u6.status === "pending") {
              var n2 = u6;
              n2.status = "rejected", n2.reason = t;
            }
          });
        }
        switch (u6.status) {
          case "fulfilled":
            return u6.value;
          case "rejected":
            throw l6 = u6.reason, yi3(l6), l6;
        }
        throw at3 = u6, Gt3;
    }
  }
  var at3 = null;
  function hi2() {
    if (at3 === null) throw Error(A10(459));
    var l6 = at3;
    return at3 = null, l6;
  }
  function yi3(l6) {
    if (l6 === Gt3 || l6 === uf) throw Error(A10(483));
  }
  var hu = false;
  function fe4(l6) {
    l6.updateQueue = {
      baseState: l6.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Sc(l6, u6) {
    l6 = l6.updateQueue, u6.updateQueue === l6 && (u6.updateQueue = {
      baseState: l6.baseState,
      firstBaseUpdate: l6.firstBaseUpdate,
      lastBaseUpdate: l6.lastBaseUpdate,
      shared: l6.shared,
      callbacks: null
    });
  }
  function Mu2(l6) {
    return {
      lane: l6,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Eu(l6, u6, a4) {
    var t = l6.updateQueue;
    if (t === null) return null;
    if (t = t.shared, (X5 & 2) !== 0) {
      var n2 = t.pending;
      return n2 === null ? u6.next = u6 : (u6.next = n2.next, n2.next = u6), t.pending = u6, u6 = Un(l6), K0(l6, null, a4), u6;
    }
    return lf(l6, t, u6, a4), Un(l6);
  }
  function tt3(l6, u6, a4) {
    if (u6 = u6.updateQueue, u6 !== null && (u6 = u6.shared, (a4 & 4194048) !== 0)) {
      var t = u6.lanes;
      t &= l6.pendingLanes, a4 |= t, u6.lanes = a4, g0(l6, a4);
    }
  }
  function Nf(l6, u6) {
    var a4 = l6.updateQueue, t = l6.alternate;
    if (t !== null && (t = t.updateQueue, a4 === t)) {
      var n2 = null, f4 = null;
      if (a4 = a4.firstBaseUpdate, a4 !== null) {
        do {
          var c3 = {
            lane: a4.lane,
            tag: a4.tag,
            payload: a4.payload,
            callback: null,
            next: null
          };
          f4 === null ? n2 = f4 = c3 : f4 = f4.next = c3, a4 = a4.next;
        } while (a4 !== null);
        f4 === null ? n2 = f4 = u6 : f4 = f4.next = u6;
      } else n2 = f4 = u6;
      a4 = {
        baseState: t.baseState,
        firstBaseUpdate: n2,
        lastBaseUpdate: f4,
        shared: t.shared,
        callbacks: t.callbacks
      }, l6.updateQueue = a4;
      return;
    }
    l6 = a4.lastBaseUpdate, l6 === null ? a4.firstBaseUpdate = u6 : l6.next = u6, a4.lastBaseUpdate = u6;
  }
  var mc = false;
  function nt5() {
    if (mc) {
      var l6 = Aa;
      if (l6 !== null) throw l6;
    }
  }
  function ft(l6, u6, a4, t) {
    mc = false;
    var n2 = l6.updateQueue;
    hu = false;
    var f4 = n2.firstBaseUpdate, c3 = n2.lastBaseUpdate, e = n2.shared.pending;
    if (e !== null) {
      n2.shared.pending = null;
      var i3 = e, d4 = i3.next;
      i3.next = null, c3 === null ? f4 = d4 : c3.next = d4, c3 = i3;
      var g7 = l6.alternate;
      g7 !== null && (g7 = g7.updateQueue, e = g7.lastBaseUpdate, e !== c3 && (e === null ? g7.firstBaseUpdate = d4 : e.next = d4, g7.lastBaseUpdate = i3));
    }
    if (f4 !== null) {
      var z7 = n2.baseState;
      c3 = 0, g7 = d4 = i3 = null, e = f4;
      do {
        var S7 = e.lane & -536870913, m6 = S7 !== e.lane;
        if (m6 ? (B6 & S7) === S7 : (t & S7) === S7) {
          S7 !== 0 && S7 === Ha2 && (mc = true), g7 !== null && (g7 = g7.next = {
            lane: 0,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          });
          l: {
            var O5 = l6, E11 = e;
            S7 = u6;
            var G7 = a4;
            switch (E11.tag) {
              case 1:
                if (O5 = E11.payload, typeof O5 == "function") {
                  z7 = O5.call(G7, z7, S7);
                  break l;
                }
                z7 = O5;
                break l;
              case 3:
                O5.flags = O5.flags & -65537 | 128;
              case 0:
                if (O5 = E11.payload, S7 = typeof O5 == "function" ? O5.call(G7, z7, S7) : O5, S7 == null) break l;
                z7 = j10({}, z7, S7);
                break l;
              case 2:
                hu = true;
            }
          }
          S7 = e.callback, S7 !== null && (l6.flags |= 64, m6 && (l6.flags |= 8192), m6 = n2.callbacks, m6 === null ? n2.callbacks = [
            S7
          ] : m6.push(S7));
        } else m6 = {
          lane: S7,
          tag: e.tag,
          payload: e.payload,
          callback: e.callback,
          next: null
        }, g7 === null ? (d4 = g7 = m6, i3 = z7) : g7 = g7.next = m6, c3 |= S7;
        if (e = e.next, e === null) {
          if (e = n2.shared.pending, e === null) break;
          m6 = e, e = m6.next, m6.next = null, n2.lastBaseUpdate = m6, n2.shared.pending = null;
        }
      } while (true);
      g7 === null && (i3 = z7), n2.baseState = i3, n2.firstBaseUpdate = d4, n2.lastBaseUpdate = g7, f4 === null && (n2.shared.lanes = 0), Bu2 |= c3, l6.lanes = c3, l6.memoizedState = z7;
    }
  }
  function $0(l6, u6) {
    if (typeof l6 != "function") throw Error(A10(191, l6));
    l6.call(u6);
  }
  function F0(l6, u6) {
    var a4 = l6.callbacks;
    if (a4 !== null) for (l6.callbacks = null, l6 = 0; l6 < a4.length; l6++) $0(a4[l6], u6);
  }
  var Na3 = Cl2(null), Bn2 = Cl2(0);
  function di2(l6, u6) {
    l6 = nu, C8(Bn2, l6), C8(Na3, u6), nu = l6 | u6.baseLanes;
  }
  function gc() {
    C8(Bn2, nu), C8(Na3, Na3.current);
  }
  function ce5() {
    nu = Bn2.current, tl2(Na3), tl2(Bn2);
  }
  var Nu = 0, U4 = null, Z5 = null, $5 = null, Rn2 = false, Ta = false, Ju = false, Yn = 0, zt4 = 0, Ma = null, my = 0;
  function W4() {
    throw Error(A10(321));
  }
  function ee3(l6, u6) {
    if (u6 === null) return false;
    for (var a4 = 0; a4 < u6.length && a4 < l6.length; a4++) if (!Ol3(l6[a4], u6[a4])) return false;
    return true;
  }
  function ie4(l6, u6, a4, t, n2, f4) {
    return Nu = f4, U4 = u6, u6.memoizedState = null, u6.updateQueue = null, u6.lanes = 0, s2.H = l6 === null || l6.memoizedState === null ? H12 : N1, Ju = false, f4 = a4(t, n2), Ju = false, Ta && (f4 = r0(u6, a4, t, n2)), k0(l6), f4;
  }
  function k0(l6) {
    s2.H = on4;
    var u6 = Z5 !== null && Z5.next !== null;
    if (Nu = 0, $5 = Z5 = U4 = null, Rn2 = false, zt4 = 0, Ma = null, u6) throw Error(A10(300));
    l6 === null || al || (l6 = l6.dependencies, l6 !== null && qn(l6) && (al = true));
  }
  function r0(l6, u6, a4, t) {
    U4 = l6;
    var n2 = 0;
    do {
      if (Ta && (Ma = null), zt4 = 0, Ta = false, 25 <= n2) throw Error(A10(301));
      if (n2 += 1, $5 = Z5 = null, l6.updateQueue != null) {
        var f4 = l6.updateQueue;
        f4.lastEffect = null, f4.events = null, f4.stores = null, f4.memoCache != null && (f4.memoCache.index = 0);
      }
      s2.H = Ey, f4 = u6(a4, t);
    } while (Ta);
    return f4;
  }
  function gy() {
    var l6 = s2.H, u6 = l6.useState()[0];
    return u6 = typeof u6.then == "function" ? Qt(u6) : u6, l6 = l6.useState()[0], (Z5 !== null ? Z5.memoizedState : null) !== l6 && (U4.flags |= 1024), u6;
  }
  function ve6() {
    var l6 = Yn !== 0;
    return Yn = 0, l6;
  }
  function he4(l6, u6, a4) {
    u6.updateQueue = l6.updateQueue, u6.flags &= -2053, l6.lanes &= ~a4;
  }
  function ye5(l6) {
    if (Rn2) {
      for (l6 = l6.memoizedState; l6 !== null; ) {
        var u6 = l6.queue;
        u6 !== null && (u6.pending = null), l6 = l6.next;
      }
      Rn2 = false;
    }
    Nu = 0, $5 = Z5 = U4 = null, Ta = false, zt4 = Yn = 0, Ma = null;
  }
  function hl2() {
    var l6 = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $5 === null ? U4.memoizedState = $5 = l6 : $5 = $5.next = l6, $5;
  }
  function F6() {
    if (Z5 === null) {
      var l6 = U4.alternate;
      l6 = l6 !== null ? l6.memoizedState : null;
    } else l6 = Z5.next;
    var u6 = $5 === null ? U4.memoizedState : $5.next;
    if (u6 !== null) $5 = u6, Z5 = l6;
    else {
      if (l6 === null) throw U4.alternate === null ? Error(A10(467)) : Error(A10(310));
      Z5 = l6, l6 = {
        memoizedState: Z5.memoizedState,
        baseState: Z5.baseState,
        baseQueue: Z5.baseQueue,
        queue: Z5.queue,
        next: null
      }, $5 === null ? U4.memoizedState = $5 = l6 : $5 = $5.next = l6;
    }
    return $5;
  }
  function de5() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Qt(l6) {
    var u6 = zt4;
    return zt4 += 1, Ma === null && (Ma = []), l6 = w0(Ma, l6, u6), u6 = U4, ($5 === null ? u6.memoizedState : $5.next) === null && (u6 = u6.alternate, s2.H = u6 === null || u6.memoizedState === null ? H12 : N1), l6;
  }
  function af(l6) {
    if (l6 !== null && typeof l6 == "object") {
      if (typeof l6.then == "function") return Qt(l6);
      if (l6.$$typeof === $l) return il(l6);
    }
    throw Error(A10(438, String(l6)));
  }
  function Se5(l6) {
    var u6 = null, a4 = U4.updateQueue;
    if (a4 !== null && (u6 = a4.memoCache), u6 == null) {
      var t = U4.alternate;
      t !== null && (t = t.updateQueue, t !== null && (t = t.memoCache, t != null && (u6 = {
        data: t.data.map(function(n2) {
          return n2.slice();
        }),
        index: 0
      })));
    }
    if (u6 == null && (u6 = {
      data: [],
      index: 0
    }), a4 === null && (a4 = de5(), U4.updateQueue = a4), a4.memoCache = u6, a4 = u6.data[u6.index], a4 === void 0) for (a4 = u6.data[u6.index] = Array(l6), t = 0; t < l6; t++) a4[t] = Pv;
    return u6.index++, a4;
  }
  function au(l6, u6) {
    return typeof u6 == "function" ? u6(l6) : u6;
  }
  function dn2(l6) {
    var u6 = F6();
    return me7(u6, Z5, l6);
  }
  function me7(l6, u6, a4) {
    var t = l6.queue;
    if (t === null) throw Error(A10(311));
    t.lastRenderedReducer = a4;
    var n2 = l6.baseQueue, f4 = t.pending;
    if (f4 !== null) {
      if (n2 !== null) {
        var c3 = n2.next;
        n2.next = f4.next, f4.next = c3;
      }
      u6.baseQueue = n2 = f4, t.pending = null;
    }
    if (f4 = l6.baseState, n2 === null) l6.memoizedState = f4;
    else {
      u6 = n2.next;
      var e = c3 = null, i3 = null, d4 = u6, g7 = false;
      do {
        var z7 = d4.lane & -536870913;
        if (z7 !== d4.lane ? (B6 & z7) === z7 : (Nu & z7) === z7) {
          var S7 = d4.revertLane;
          if (S7 === 0) i3 !== null && (i3 = i3.next = {
            lane: 0,
            revertLane: 0,
            action: d4.action,
            hasEagerState: d4.hasEagerState,
            eagerState: d4.eagerState,
            next: null
          }), z7 === Ha2 && (g7 = true);
          else if ((Nu & S7) === S7) {
            d4 = d4.next, S7 === Ha2 && (g7 = true);
            continue;
          } else z7 = {
            lane: 0,
            revertLane: d4.revertLane,
            action: d4.action,
            hasEagerState: d4.hasEagerState,
            eagerState: d4.eagerState,
            next: null
          }, i3 === null ? (e = i3 = z7, c3 = f4) : i3 = i3.next = z7, U4.lanes |= S7, Bu2 |= S7;
          z7 = d4.action, Ju && a4(f4, z7), f4 = d4.hasEagerState ? d4.eagerState : a4(f4, z7);
        } else S7 = {
          lane: z7,
          revertLane: d4.revertLane,
          action: d4.action,
          hasEagerState: d4.hasEagerState,
          eagerState: d4.eagerState,
          next: null
        }, i3 === null ? (e = i3 = S7, c3 = f4) : i3 = i3.next = S7, U4.lanes |= z7, Bu2 |= z7;
        d4 = d4.next;
      } while (d4 !== null && d4 !== u6);
      if (i3 === null ? c3 = f4 : i3.next = e, !Ol3(f4, l6.memoizedState) && (al = true, g7 && (a4 = Aa, a4 !== null))) throw a4;
      l6.memoizedState = f4, l6.baseState = c3, l6.baseQueue = i3, t.lastRenderedState = f4;
    }
    return n2 === null && (t.lanes = 0), [
      l6.memoizedState,
      t.dispatch
    ];
  }
  function qf(l6) {
    var u6 = F6(), a4 = u6.queue;
    if (a4 === null) throw Error(A10(311));
    a4.lastRenderedReducer = l6;
    var t = a4.dispatch, n2 = a4.pending, f4 = u6.memoizedState;
    if (n2 !== null) {
      a4.pending = null;
      var c3 = n2 = n2.next;
      do
        f4 = l6(f4, c3.action), c3 = c3.next;
      while (c3 !== n2);
      Ol3(f4, u6.memoizedState) || (al = true), u6.memoizedState = f4, u6.baseQueue === null && (u6.baseState = f4), a4.lastRenderedState = f4;
    }
    return [
      f4,
      t
    ];
  }
  function I0(l6, u6, a4) {
    var t = U4, n2 = F6(), f4 = Y5;
    if (f4) {
      if (a4 === void 0) throw Error(A10(407));
      a4 = a4();
    } else a4 = u6();
    var c3 = !Ol3((Z5 || n2).memoizedState, a4);
    c3 && (n2.memoizedState = a4, al = true), n2 = n2.queue;
    var e = u1.bind(null, t, n2, l6);
    if (Zt(2048, 8, e, [
      l6
    ]), n2.getSnapshot !== u6 || c3 || $5 !== null && $5.memoizedState.tag & 1) {
      if (t.flags |= 2048, qa2(9, tf(), l1.bind(null, t, n2, a4, u6), null), V6 === null) throw Error(A10(349));
      f4 || (Nu & 124) !== 0 || P0(t, u6, a4);
    }
    return a4;
  }
  function P0(l6, u6, a4) {
    l6.flags |= 16384, l6 = {
      getSnapshot: u6,
      value: a4
    }, u6 = U4.updateQueue, u6 === null ? (u6 = de5(), U4.updateQueue = u6, u6.stores = [
      l6
    ]) : (a4 = u6.stores, a4 === null ? u6.stores = [
      l6
    ] : a4.push(l6));
  }
  function l1(l6, u6, a4, t) {
    u6.value = a4, u6.getSnapshot = t, a1(u6) && t1(l6);
  }
  function u1(l6, u6, a4) {
    return a4(function() {
      a1(u6) && t1(l6);
    });
  }
  function a1(l6) {
    var u6 = l6.getSnapshot;
    l6 = l6.value;
    try {
      var a4 = u6();
      return !Ol3(l6, a4);
    } catch {
      return true;
    }
  }
  function t1(l6) {
    var u6 = Qa2(l6, 2);
    u6 !== null && Dl3(u6, l6, 2);
  }
  function bc(l6) {
    var u6 = hl2();
    if (typeof l6 == "function") {
      var a4 = l6;
      if (l6 = a4(), Ju) {
        gu(true);
        try {
          a4();
        } finally {
          gu(false);
        }
      }
    }
    return u6.memoizedState = u6.baseState = l6, u6.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: au,
      lastRenderedState: l6
    }, u6;
  }
  function n1(l6, u6, a4, t) {
    return l6.baseState = a4, me7(l6, Z5, typeof t == "function" ? t : au);
  }
  function by(l6, u6, a4, t, n2) {
    if (nf(l6)) throw Error(A10(485));
    if (l6 = u6.action, l6 !== null) {
      var f4 = {
        payload: n2,
        action: l6,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c3) {
          f4.listeners.push(c3);
        }
      };
      s2.T !== null ? a4(true) : f4.isTransition = false, t(f4), a4 = u6.pending, a4 === null ? (f4.next = u6.pending = f4, f1(u6, f4)) : (f4.next = a4.next, u6.pending = a4.next = f4);
    }
  }
  function f1(l6, u6) {
    var a4 = u6.action, t = u6.payload, n2 = l6.state;
    if (u6.isTransition) {
      var f4 = s2.T, c3 = {};
      s2.T = c3;
      try {
        var e = a4(n2, t), i3 = s2.S;
        i3 !== null && i3(c3, e), Si2(l6, u6, e);
      } catch (d4) {
        zc(l6, u6, d4);
      } finally {
        s2.T = f4;
      }
    } else try {
      f4 = a4(n2, t), Si2(l6, u6, f4);
    } catch (d4) {
      zc(l6, u6, d4);
    }
  }
  function Si2(l6, u6, a4) {
    a4 !== null && typeof a4 == "object" && typeof a4.then == "function" ? a4.then(function(t) {
      mi2(l6, u6, t);
    }, function(t) {
      return zc(l6, u6, t);
    }) : mi2(l6, u6, a4);
  }
  function mi2(l6, u6, a4) {
    u6.status = "fulfilled", u6.value = a4, c1(u6), l6.state = a4, u6 = l6.pending, u6 !== null && (a4 = u6.next, a4 === u6 ? l6.pending = null : (a4 = a4.next, u6.next = a4, f1(l6, a4)));
  }
  function zc(l6, u6, a4) {
    var t = l6.pending;
    if (l6.pending = null, t !== null) {
      t = t.next;
      do
        u6.status = "rejected", u6.reason = a4, c1(u6), u6 = u6.next;
      while (u6 !== t);
    }
    l6.action = null;
  }
  function c1(l6) {
    l6 = l6.listeners;
    for (var u6 = 0; u6 < l6.length; u6++) (0, l6[u6])();
  }
  function e1(l6, u6) {
    return u6;
  }
  function gi3(l6, u6) {
    if (Y5) {
      var a4 = V6.formState;
      if (a4 !== null) {
        l: {
          var t = U4;
          if (Y5) {
            if (p6) {
              u: {
                for (var n2 = p6, f4 = Zl; n2.nodeType !== 8; ) {
                  if (!f4) {
                    n2 = null;
                    break u;
                  }
                  if (n2 = Xl(n2.nextSibling), n2 === null) {
                    n2 = null;
                    break u;
                  }
                }
                f4 = n2.data, n2 = f4 === "F!" || f4 === "F" ? n2 : null;
              }
              if (n2) {
                p6 = Xl(n2.nextSibling), t = n2.data === "F!";
                break l;
              }
            }
            Lu(t);
          }
          t = false;
        }
        t && (u6 = a4[0]);
      }
    }
    return a4 = hl2(), a4.memoizedState = a4.baseState = u6, t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e1,
      lastRenderedState: u6
    }, a4.queue = t, a4 = O1.bind(null, U4, t), t.dispatch = a4, t = bc(false), f4 = Ae4.bind(null, U4, false, t.queue), t = hl2(), n2 = {
      state: u6,
      dispatch: null,
      action: l6,
      pending: null
    }, t.queue = n2, a4 = by.bind(null, U4, n2, f4, a4), n2.dispatch = a4, t.memoizedState = l6, [
      u6,
      a4,
      false
    ];
  }
  function bi2(l6) {
    var u6 = F6();
    return i1(u6, Z5, l6);
  }
  function i1(l6, u6, a4) {
    if (u6 = me7(l6, u6, e1)[0], l6 = dn2(au)[0], typeof u6 == "object" && u6 !== null && typeof u6.then == "function") try {
      var t = Qt(u6);
    } catch (c3) {
      throw c3 === Gt3 ? uf : c3;
    }
    else t = u6;
    u6 = F6();
    var n2 = u6.queue, f4 = n2.dispatch;
    return a4 !== u6.memoizedState && (U4.flags |= 2048, qa2(9, tf(), zy.bind(null, n2, a4), null)), [
      t,
      f4,
      l6
    ];
  }
  function zy(l6, u6) {
    l6.action = u6;
  }
  function zi2(l6) {
    var u6 = F6(), a4 = Z5;
    if (a4 !== null) return i1(u6, a4, l6);
    F6(), u6 = u6.memoizedState, a4 = F6();
    var t = a4.queue.dispatch;
    return a4.memoizedState = l6, [
      u6,
      t,
      false
    ];
  }
  function qa2(l6, u6, a4, t) {
    return l6 = {
      tag: l6,
      create: a4,
      deps: t,
      inst: u6,
      next: null
    }, u6 = U4.updateQueue, u6 === null && (u6 = de5(), U4.updateQueue = u6), a4 = u6.lastEffect, a4 === null ? u6.lastEffect = l6.next = l6 : (t = a4.next, a4.next = l6, l6.next = t, u6.lastEffect = l6), l6;
  }
  function tf() {
    return {
      destroy: void 0,
      resource: void 0
    };
  }
  function v1() {
    return F6().memoizedState;
  }
  function Sn2(l6, u6, a4, t) {
    var n2 = hl2();
    t = t === void 0 ? null : t, U4.flags |= l6, n2.memoizedState = qa2(1 | u6, tf(), a4, t);
  }
  function Zt(l6, u6, a4, t) {
    var n2 = F6();
    t = t === void 0 ? null : t;
    var f4 = n2.memoizedState.inst;
    Z5 !== null && t !== null && ee3(t, Z5.memoizedState.deps) ? n2.memoizedState = qa2(u6, f4, a4, t) : (U4.flags |= l6, n2.memoizedState = qa2(1 | u6, f4, a4, t));
  }
  function Ai(l6, u6) {
    Sn2(8390656, 8, l6, u6);
  }
  function h1(l6, u6) {
    Zt(2048, 8, l6, u6);
  }
  function y1(l6, u6) {
    return Zt(4, 2, l6, u6);
  }
  function d1(l6, u6) {
    return Zt(4, 4, l6, u6);
  }
  function S1(l6, u6) {
    if (typeof u6 == "function") {
      l6 = l6();
      var a4 = u6(l6);
      return function() {
        typeof a4 == "function" ? a4() : u6(null);
      };
    }
    if (u6 != null) return l6 = l6(), u6.current = l6, function() {
      u6.current = null;
    };
  }
  function m1(l6, u6, a4) {
    a4 = a4 != null ? a4.concat([
      l6
    ]) : null, Zt(4, 4, S1.bind(null, u6, l6), a4);
  }
  function ge5() {
  }
  function g1(l6, u6) {
    var a4 = F6();
    u6 = u6 === void 0 ? null : u6;
    var t = a4.memoizedState;
    return u6 !== null && ee3(u6, t[1]) ? t[0] : (a4.memoizedState = [
      l6,
      u6
    ], l6);
  }
  function b1(l6, u6) {
    var a4 = F6();
    u6 = u6 === void 0 ? null : u6;
    var t = a4.memoizedState;
    if (u6 !== null && ee3(u6, t[1])) return t[0];
    if (t = l6(), Ju) {
      gu(true);
      try {
        l6();
      } finally {
        gu(false);
      }
    }
    return a4.memoizedState = [
      t,
      u6
    ], t;
  }
  function be7(l6, u6, a4) {
    return a4 === void 0 || (Nu & 1073741824) !== 0 ? l6.memoizedState = u6 : (l6.memoizedState = a4, l6 = cv(), U4.lanes |= l6, Bu2 |= l6, a4);
  }
  function z1(l6, u6, a4, t) {
    return Ol3(a4, u6) ? a4 : Na3.current !== null ? (l6 = be7(l6, a4, t), Ol3(l6, u6) || (al = true), l6) : (Nu & 42) === 0 ? (al = true, l6.memoizedState = a4) : (l6 = cv(), U4.lanes |= l6, Bu2 |= l6, u6);
  }
  function A1(l6, u6, a4, t, n2) {
    var f4 = o4.p;
    o4.p = f4 !== 0 && 8 > f4 ? f4 : 8;
    var c3 = s2.T, e = {};
    s2.T = e, Ae4(l6, false, u6, a4);
    try {
      var i3 = n2(), d4 = s2.S;
      if (d4 !== null && d4(e, i3), i3 !== null && typeof i3 == "object" && typeof i3.then == "function") {
        var g7 = Sy(i3, t);
        ct3(l6, u6, g7, El2(l6));
      } else ct3(l6, u6, t, El2(l6));
    } catch (z7) {
      ct3(l6, u6, {
        then: function() {
        },
        status: "rejected",
        reason: z7
      }, El2());
    } finally {
      o4.p = f4, s2.T = c3;
    }
  }
  function Ay() {
  }
  function Ac(l6, u6, a4, t) {
    if (l6.tag !== 5) throw Error(A10(476));
    var n2 = T1(l6).queue;
    A1(l6, n2, u6, Qu, a4 === null ? Ay : function() {
      return M1(l6), a4(t);
    });
  }
  function T1(l6) {
    var u6 = l6.memoizedState;
    if (u6 !== null) return u6;
    u6 = {
      memoizedState: Qu,
      baseState: Qu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: au,
        lastRenderedState: Qu
      },
      next: null
    };
    var a4 = {};
    return u6.next = {
      memoizedState: a4,
      baseState: a4,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: au,
        lastRenderedState: a4
      },
      next: null
    }, l6.memoizedState = u6, l6 = l6.alternate, l6 !== null && (l6.memoizedState = u6), u6;
  }
  function M1(l6) {
    var u6 = T1(l6).next.queue;
    ct3(l6, u6, {}, El2());
  }
  function ze4() {
    return il(Dt2);
  }
  function E1() {
    return F6().memoizedState;
  }
  function D1() {
    return F6().memoizedState;
  }
  function Ty(l6) {
    for (var u6 = l6.return; u6 !== null; ) {
      switch (u6.tag) {
        case 24:
        case 3:
          var a4 = El2();
          l6 = Mu2(a4);
          var t = Eu(u6, l6, a4);
          t !== null && (Dl3(t, u6, a4), tt3(t, u6, a4)), u6 = {
            cache: te2()
          }, l6.payload = u6;
          return;
      }
      u6 = u6.return;
    }
  }
  function My(l6, u6, a4) {
    var t = El2();
    a4 = {
      lane: t,
      revertLane: 0,
      action: a4,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l6) ? s1(u6, a4) : (a4 = Pc(l6, u6, a4, t), a4 !== null && (Dl3(a4, l6, t), U1(a4, u6, t)));
  }
  function O1(l6, u6, a4) {
    var t = El2();
    ct3(l6, u6, a4, t);
  }
  function ct3(l6, u6, a4, t) {
    var n2 = {
      lane: t,
      revertLane: 0,
      action: a4,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (nf(l6)) s1(u6, n2);
    else {
      var f4 = l6.alternate;
      if (l6.lanes === 0 && (f4 === null || f4.lanes === 0) && (f4 = u6.lastRenderedReducer, f4 !== null)) try {
        var c3 = u6.lastRenderedState, e = f4(c3, a4);
        if (n2.hasEagerState = true, n2.eagerState = e, Ol3(e, c3)) return lf(l6, u6, n2, 0), V6 === null && Pn2(), false;
      } catch {
      } finally {
      }
      if (a4 = Pc(l6, u6, n2, t), a4 !== null) return Dl3(a4, l6, t), U1(a4, u6, t), true;
    }
    return false;
  }
  function Ae4(l6, u6, a4, t) {
    if (t = {
      lane: 2,
      revertLane: He4(),
      action: t,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l6)) {
      if (u6) throw Error(A10(479));
    } else u6 = Pc(l6, a4, t, 2), u6 !== null && Dl3(u6, l6, 2);
  }
  function nf(l6) {
    var u6 = l6.alternate;
    return l6 === U4 || u6 !== null && u6 === U4;
  }
  function s1(l6, u6) {
    Ta = Rn2 = true;
    var a4 = l6.pending;
    a4 === null ? u6.next = u6 : (u6.next = a4.next, a4.next = u6), l6.pending = u6;
  }
  function U1(l6, u6, a4) {
    if ((a4 & 4194048) !== 0) {
      var t = u6.lanes;
      t &= l6.pendingLanes, a4 |= t, u6.lanes = a4, g0(l6, a4);
    }
  }
  var on4 = {
    readContext: il,
    use: af,
    useCallback: W4,
    useContext: W4,
    useEffect: W4,
    useImperativeHandle: W4,
    useLayoutEffect: W4,
    useInsertionEffect: W4,
    useMemo: W4,
    useReducer: W4,
    useRef: W4,
    useState: W4,
    useDebugValue: W4,
    useDeferredValue: W4,
    useTransition: W4,
    useSyncExternalStore: W4,
    useId: W4,
    useHostTransitionStatus: W4,
    useFormState: W4,
    useActionState: W4,
    useOptimistic: W4,
    useMemoCache: W4,
    useCacheRefresh: W4
  }, H12 = {
    readContext: il,
    use: af,
    useCallback: function(l6, u6) {
      return hl2().memoizedState = [
        l6,
        u6 === void 0 ? null : u6
      ], l6;
    },
    useContext: il,
    useEffect: Ai,
    useImperativeHandle: function(l6, u6, a4) {
      a4 = a4 != null ? a4.concat([
        l6
      ]) : null, Sn2(4194308, 4, S1.bind(null, u6, l6), a4);
    },
    useLayoutEffect: function(l6, u6) {
      return Sn2(4194308, 4, l6, u6);
    },
    useInsertionEffect: function(l6, u6) {
      Sn2(4, 2, l6, u6);
    },
    useMemo: function(l6, u6) {
      var a4 = hl2();
      u6 = u6 === void 0 ? null : u6;
      var t = l6();
      if (Ju) {
        gu(true);
        try {
          l6();
        } finally {
          gu(false);
        }
      }
      return a4.memoizedState = [
        t,
        u6
      ], t;
    },
    useReducer: function(l6, u6, a4) {
      var t = hl2();
      if (a4 !== void 0) {
        var n2 = a4(u6);
        if (Ju) {
          gu(true);
          try {
            a4(u6);
          } finally {
            gu(false);
          }
        }
      } else n2 = u6;
      return t.memoizedState = t.baseState = n2, l6 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l6,
        lastRenderedState: n2
      }, t.queue = l6, l6 = l6.dispatch = My.bind(null, U4, l6), [
        t.memoizedState,
        l6
      ];
    },
    useRef: function(l6) {
      var u6 = hl2();
      return l6 = {
        current: l6
      }, u6.memoizedState = l6;
    },
    useState: function(l6) {
      l6 = bc(l6);
      var u6 = l6.queue, a4 = O1.bind(null, U4, u6);
      return u6.dispatch = a4, [
        l6.memoizedState,
        a4
      ];
    },
    useDebugValue: ge5,
    useDeferredValue: function(l6, u6) {
      var a4 = hl2();
      return be7(a4, l6, u6);
    },
    useTransition: function() {
      var l6 = bc(false);
      return l6 = A1.bind(null, U4, l6.queue, true, false), hl2().memoizedState = l6, [
        false,
        l6
      ];
    },
    useSyncExternalStore: function(l6, u6, a4) {
      var t = U4, n2 = hl2();
      if (Y5) {
        if (a4 === void 0) throw Error(A10(407));
        a4 = a4();
      } else {
        if (a4 = u6(), V6 === null) throw Error(A10(349));
        (B6 & 124) !== 0 || P0(t, u6, a4);
      }
      n2.memoizedState = a4;
      var f4 = {
        value: a4,
        getSnapshot: u6
      };
      return n2.queue = f4, Ai(u1.bind(null, t, f4, l6), [
        l6
      ]), t.flags |= 2048, qa2(9, tf(), l1.bind(null, t, f4, a4, u6), null), a4;
    },
    useId: function() {
      var l6 = hl2(), u6 = V6.identifierPrefix;
      if (Y5) {
        var a4 = kl2, t = Fl3;
        a4 = (t & ~(1 << 32 - Ml3(t) - 1)).toString(32) + a4, u6 = "\xAB" + u6 + "R" + a4, a4 = Yn++, 0 < a4 && (u6 += "H" + a4.toString(32)), u6 += "\xBB";
      } else a4 = my++, u6 = "\xAB" + u6 + "r" + a4.toString(32) + "\xBB";
      return l6.memoizedState = u6;
    },
    useHostTransitionStatus: ze4,
    useFormState: gi3,
    useActionState: gi3,
    useOptimistic: function(l6) {
      var u6 = hl2();
      u6.memoizedState = u6.baseState = l6;
      var a4 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return u6.queue = a4, u6 = Ae4.bind(null, U4, true, a4), a4.dispatch = u6, [
        l6,
        u6
      ];
    },
    useMemoCache: Se5,
    useCacheRefresh: function() {
      return hl2().memoizedState = Ty.bind(null, U4);
    }
  }, N1 = {
    readContext: il,
    use: af,
    useCallback: g1,
    useContext: il,
    useEffect: h1,
    useImperativeHandle: m1,
    useInsertionEffect: y1,
    useLayoutEffect: d1,
    useMemo: b1,
    useReducer: dn2,
    useRef: v1,
    useState: function() {
      return dn2(au);
    },
    useDebugValue: ge5,
    useDeferredValue: function(l6, u6) {
      var a4 = F6();
      return z1(a4, Z5.memoizedState, l6, u6);
    },
    useTransition: function() {
      var l6 = dn2(au)[0], u6 = F6().memoizedState;
      return [
        typeof l6 == "boolean" ? l6 : Qt(l6),
        u6
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze4,
    useFormState: bi2,
    useActionState: bi2,
    useOptimistic: function(l6, u6) {
      var a4 = F6();
      return n1(a4, Z5, l6, u6);
    },
    useMemoCache: Se5,
    useCacheRefresh: D1
  }, Ey = {
    readContext: il,
    use: af,
    useCallback: g1,
    useContext: il,
    useEffect: h1,
    useImperativeHandle: m1,
    useInsertionEffect: y1,
    useLayoutEffect: d1,
    useMemo: b1,
    useReducer: qf,
    useRef: v1,
    useState: function() {
      return qf(au);
    },
    useDebugValue: ge5,
    useDeferredValue: function(l6, u6) {
      var a4 = F6();
      return Z5 === null ? be7(a4, l6, u6) : z1(a4, Z5.memoizedState, l6, u6);
    },
    useTransition: function() {
      var l6 = qf(au)[0], u6 = F6().memoizedState;
      return [
        typeof l6 == "boolean" ? l6 : Qt(l6),
        u6
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze4,
    useFormState: zi2,
    useActionState: zi2,
    useOptimistic: function(l6, u6) {
      var a4 = F6();
      return Z5 !== null ? n1(a4, Z5, l6, u6) : (a4.baseState = l6, [
        l6,
        a4.queue.dispatch
      ]);
    },
    useMemoCache: Se5,
    useCacheRefresh: D1
  }, Ea2 = null, At2 = 0;
  function rt3(l6) {
    var u6 = At2;
    return At2 += 1, Ea2 === null && (Ea2 = []), w0(Ea2, l6, u6);
  }
  function La3(l6, u6) {
    u6 = u6.props.ref, l6.ref = u6 !== void 0 ? u6 : null;
  }
  function It3(l6, u6) {
    throw u6.$$typeof === rv ? Error(A10(525)) : (l6 = Object.prototype.toString.call(u6), Error(A10(31, l6 === "[object Object]" ? "object with keys {" + Object.keys(u6).join(", ") + "}" : l6)));
  }
  function Ti(l6) {
    var u6 = l6._init;
    return u6(l6._payload);
  }
  function q1(l6) {
    function u6(h4, v8) {
      if (l6) {
        var y7 = h4.deletions;
        y7 === null ? (h4.deletions = [
          v8
        ], h4.flags |= 16) : y7.push(v8);
      }
    }
    function a4(h4, v8) {
      if (!l6) return null;
      for (; v8 !== null; ) u6(h4, v8), v8 = v8.sibling;
      return null;
    }
    function t(h4) {
      for (var v8 = /* @__PURE__ */ new Map(); h4 !== null; ) h4.key !== null ? v8.set(h4.key, h4) : v8.set(h4.index, h4), h4 = h4.sibling;
      return v8;
    }
    function n2(h4, v8) {
      return h4 = Pl2(h4, v8), h4.index = 0, h4.sibling = null, h4;
    }
    function f4(h4, v8, y7) {
      return h4.index = y7, l6 ? (y7 = h4.alternate, y7 !== null ? (y7 = y7.index, y7 < v8 ? (h4.flags |= 67108866, v8) : y7) : (h4.flags |= 67108866, v8)) : (h4.flags |= 1048576, v8);
    }
    function c3(h4) {
      return l6 && h4.alternate === null && (h4.flags |= 67108866), h4;
    }
    function e(h4, v8, y7, b10) {
      return v8 === null || v8.tag !== 6 ? (v8 = Uf(y7, h4.mode, b10), v8.return = h4, v8) : (v8 = n2(v8, y7), v8.return = h4, v8);
    }
    function i3(h4, v8, y7, b10) {
      var T6 = y7.type;
      return T6 === ta2 ? g7(h4, v8, y7.props.children, b10, y7.key) : v8 !== null && (v8.elementType === T6 || typeof T6 == "object" && T6 !== null && T6.$$typeof === vu2 && Ti(T6) === v8.type) ? (v8 = n2(v8, y7.props), La3(v8, y7), v8.return = h4, v8) : (v8 = hn(y7.type, y7.key, y7.props, null, h4.mode, b10), La3(v8, y7), v8.return = h4, v8);
    }
    function d4(h4, v8, y7, b10) {
      return v8 === null || v8.tag !== 4 || v8.stateNode.containerInfo !== y7.containerInfo || v8.stateNode.implementation !== y7.implementation ? (v8 = Hf(y7, h4.mode, b10), v8.return = h4, v8) : (v8 = n2(v8, y7.children || []), v8.return = h4, v8);
    }
    function g7(h4, v8, y7, b10, T6) {
      return v8 === null || v8.tag !== 7 ? (v8 = Zu(y7, h4.mode, b10, T6), v8.return = h4, v8) : (v8 = n2(v8, y7), v8.return = h4, v8);
    }
    function z7(h4, v8, y7) {
      if (typeof v8 == "string" && v8 !== "" || typeof v8 == "number" || typeof v8 == "bigint") return v8 = Uf("" + v8, h4.mode, y7), v8.return = h4, v8;
      if (typeof v8 == "object" && v8 !== null) {
        switch (v8.$$typeof) {
          case Ct2:
            return y7 = hn(v8.type, v8.key, v8.props, null, h4.mode, y7), La3(y7, v8), y7.return = h4, y7;
          case $a2:
            return v8 = Hf(v8, h4.mode, y7), v8.return = h4, v8;
          case vu2:
            var b10 = v8._init;
            return v8 = b10(v8._payload), z7(h4, v8, y7);
        }
        if (Fa(v8) || ja3(v8)) return v8 = Zu(v8, h4.mode, y7, null), v8.return = h4, v8;
        if (typeof v8.then == "function") return z7(h4, rt3(v8), y7);
        if (v8.$$typeof === $l) return z7(h4, Ft3(h4, v8), y7);
        It3(h4, v8);
      }
      return null;
    }
    function S7(h4, v8, y7, b10) {
      var T6 = v8 !== null ? v8.key : null;
      if (typeof y7 == "string" && y7 !== "" || typeof y7 == "number" || typeof y7 == "bigint") return T6 !== null ? null : e(h4, v8, "" + y7, b10);
      if (typeof y7 == "object" && y7 !== null) {
        switch (y7.$$typeof) {
          case Ct2:
            return y7.key === T6 ? i3(h4, v8, y7, b10) : null;
          case $a2:
            return y7.key === T6 ? d4(h4, v8, y7, b10) : null;
          case vu2:
            return T6 = y7._init, y7 = T6(y7._payload), S7(h4, v8, y7, b10);
        }
        if (Fa(y7) || ja3(y7)) return T6 !== null ? null : g7(h4, v8, y7, b10, null);
        if (typeof y7.then == "function") return S7(h4, v8, rt3(y7), b10);
        if (y7.$$typeof === $l) return S7(h4, v8, Ft3(h4, y7), b10);
        It3(h4, y7);
      }
      return null;
    }
    function m6(h4, v8, y7, b10, T6) {
      if (typeof b10 == "string" && b10 !== "" || typeof b10 == "number" || typeof b10 == "bigint") return h4 = h4.get(y7) || null, e(v8, h4, "" + b10, T6);
      if (typeof b10 == "object" && b10 !== null) {
        switch (b10.$$typeof) {
          case Ct2:
            return h4 = h4.get(b10.key === null ? y7 : b10.key) || null, i3(v8, h4, b10, T6);
          case $a2:
            return h4 = h4.get(b10.key === null ? y7 : b10.key) || null, d4(v8, h4, b10, T6);
          case vu2:
            var H9 = b10._init;
            return b10 = H9(b10._payload), m6(h4, v8, y7, b10, T6);
        }
        if (Fa(b10) || ja3(b10)) return h4 = h4.get(y7) || null, g7(v8, h4, b10, T6, null);
        if (typeof b10.then == "function") return m6(h4, v8, y7, rt3(b10), T6);
        if (b10.$$typeof === $l) return m6(h4, v8, y7, Ft3(v8, b10), T6);
        It3(v8, b10);
      }
      return null;
    }
    function O5(h4, v8, y7, b10) {
      for (var T6 = null, H9 = null, M8 = v8, D8 = v8 = 0, P6 = null; M8 !== null && D8 < y7.length; D8++) {
        M8.index > D8 ? (P6 = M8, M8 = null) : P6 = M8.sibling;
        var R4 = S7(h4, M8, y7[D8], b10);
        if (R4 === null) {
          M8 === null && (M8 = P6);
          break;
        }
        l6 && M8 && R4.alternate === null && u6(h4, M8), v8 = f4(R4, v8, D8), H9 === null ? T6 = R4 : H9.sibling = R4, H9 = R4, M8 = P6;
      }
      if (D8 === y7.length) return a4(h4, M8), Y5 && Xu(h4, D8), T6;
      if (M8 === null) {
        for (; D8 < y7.length; D8++) M8 = z7(h4, y7[D8], b10), M8 !== null && (v8 = f4(M8, v8, D8), H9 === null ? T6 = M8 : H9.sibling = M8, H9 = M8);
        return Y5 && Xu(h4, D8), T6;
      }
      for (M8 = t(M8); D8 < y7.length; D8++) P6 = m6(M8, h4, D8, y7[D8], b10), P6 !== null && (l6 && P6.alternate !== null && M8.delete(P6.key === null ? D8 : P6.key), v8 = f4(P6, v8, D8), H9 === null ? T6 = P6 : H9.sibling = P6, H9 = P6);
      return l6 && M8.forEach(function(cu) {
        return u6(h4, cu);
      }), Y5 && Xu(h4, D8), T6;
    }
    function E11(h4, v8, y7, b10) {
      if (y7 == null) throw Error(A10(151));
      for (var T6 = null, H9 = null, M8 = v8, D8 = v8 = 0, P6 = null, R4 = y7.next(); M8 !== null && !R4.done; D8++, R4 = y7.next()) {
        M8.index > D8 ? (P6 = M8, M8 = null) : P6 = M8.sibling;
        var cu = S7(h4, M8, R4.value, b10);
        if (cu === null) {
          M8 === null && (M8 = P6);
          break;
        }
        l6 && M8 && cu.alternate === null && u6(h4, M8), v8 = f4(cu, v8, D8), H9 === null ? T6 = cu : H9.sibling = cu, H9 = cu, M8 = P6;
      }
      if (R4.done) return a4(h4, M8), Y5 && Xu(h4, D8), T6;
      if (M8 === null) {
        for (; !R4.done; D8++, R4 = y7.next()) R4 = z7(h4, R4.value, b10), R4 !== null && (v8 = f4(R4, v8, D8), H9 === null ? T6 = R4 : H9.sibling = R4, H9 = R4);
        return Y5 && Xu(h4, D8), T6;
      }
      for (M8 = t(M8); !R4.done; D8++, R4 = y7.next()) R4 = m6(M8, h4, D8, R4.value, b10), R4 !== null && (l6 && R4.alternate !== null && M8.delete(R4.key === null ? D8 : R4.key), v8 = f4(R4, v8, D8), H9 === null ? T6 = R4 : H9.sibling = R4, H9 = R4);
      return l6 && M8.forEach(function(Kv) {
        return u6(h4, Kv);
      }), Y5 && Xu(h4, D8), T6;
    }
    function G7(h4, v8, y7, b10) {
      if (typeof y7 == "object" && y7 !== null && y7.type === ta2 && y7.key === null && (y7 = y7.props.children), typeof y7 == "object" && y7 !== null) {
        switch (y7.$$typeof) {
          case Ct2:
            l: {
              for (var T6 = y7.key; v8 !== null; ) {
                if (v8.key === T6) {
                  if (T6 = y7.type, T6 === ta2) {
                    if (v8.tag === 7) {
                      a4(h4, v8.sibling), b10 = n2(v8, y7.props.children), b10.return = h4, h4 = b10;
                      break l;
                    }
                  } else if (v8.elementType === T6 || typeof T6 == "object" && T6 !== null && T6.$$typeof === vu2 && Ti(T6) === v8.type) {
                    a4(h4, v8.sibling), b10 = n2(v8, y7.props), La3(b10, y7), b10.return = h4, h4 = b10;
                    break l;
                  }
                  a4(h4, v8);
                  break;
                } else u6(h4, v8);
                v8 = v8.sibling;
              }
              y7.type === ta2 ? (b10 = Zu(y7.props.children, h4.mode, b10, y7.key), b10.return = h4, h4 = b10) : (b10 = hn(y7.type, y7.key, y7.props, null, h4.mode, b10), La3(b10, y7), b10.return = h4, h4 = b10);
            }
            return c3(h4);
          case $a2:
            l: {
              for (T6 = y7.key; v8 !== null; ) {
                if (v8.key === T6) if (v8.tag === 4 && v8.stateNode.containerInfo === y7.containerInfo && v8.stateNode.implementation === y7.implementation) {
                  a4(h4, v8.sibling), b10 = n2(v8, y7.children || []), b10.return = h4, h4 = b10;
                  break l;
                } else {
                  a4(h4, v8);
                  break;
                }
                else u6(h4, v8);
                v8 = v8.sibling;
              }
              b10 = Hf(y7, h4.mode, b10), b10.return = h4, h4 = b10;
            }
            return c3(h4);
          case vu2:
            return T6 = y7._init, y7 = T6(y7._payload), G7(h4, v8, y7, b10);
        }
        if (Fa(y7)) return O5(h4, v8, y7, b10);
        if (ja3(y7)) {
          if (T6 = ja3(y7), typeof T6 != "function") throw Error(A10(150));
          return y7 = T6.call(y7), E11(h4, v8, y7, b10);
        }
        if (typeof y7.then == "function") return G7(h4, v8, rt3(y7), b10);
        if (y7.$$typeof === $l) return G7(h4, v8, Ft3(h4, y7), b10);
        It3(h4, y7);
      }
      return typeof y7 == "string" && y7 !== "" || typeof y7 == "number" || typeof y7 == "bigint" ? (y7 = "" + y7, v8 !== null && v8.tag === 6 ? (a4(h4, v8.sibling), b10 = n2(v8, y7), b10.return = h4, h4 = b10) : (a4(h4, v8), b10 = Uf(y7, h4.mode, b10), b10.return = h4, h4 = b10), c3(h4)) : a4(h4, v8);
    }
    return function(h4, v8, y7, b10) {
      try {
        At2 = 0;
        var T6 = G7(h4, v8, y7, b10);
        return Ea2 = null, T6;
      } catch (M8) {
        if (M8 === Gt3 || M8 === uf) throw M8;
        var H9 = Al2(29, M8, null, h4.mode);
        return H9.lanes = b10, H9.return = h4, H9;
      } finally {
      }
    };
  }
  var Ba = q1(true), B1 = q1(false), Yl2 = Cl2(null), Kl = null;
  function du(l6) {
    var u6 = l6.alternate;
    C8(r3, r3.current & 1), C8(Yl2, l6), Kl === null && (u6 === null || Na3.current !== null || u6.memoizedState !== null) && (Kl = l6);
  }
  function R1(l6) {
    if (l6.tag === 22) {
      if (C8(r3, r3.current), C8(Yl2, l6), Kl === null) {
        var u6 = l6.alternate;
        u6 !== null && u6.memoizedState !== null && (Kl = l6);
      }
    } else Su(l6);
  }
  function Su() {
    C8(r3, r3.current), C8(Yl2, Yl2.current);
  }
  function Il3(l6) {
    tl2(Yl2), Kl === l6 && (Kl = null), tl2(r3);
  }
  var r3 = Cl2(0);
  function _n(l6) {
    for (var u6 = l6; u6 !== null; ) {
      if (u6.tag === 13) {
        var a4 = u6.memoizedState;
        if (a4 !== null && (a4 = a4.dehydrated, a4 === null || a4.data === "$?" || Gc(a4))) return u6;
      } else if (u6.tag === 19 && u6.memoizedProps.revealOrder !== void 0) {
        if ((u6.flags & 128) !== 0) return u6;
      } else if (u6.child !== null) {
        u6.child.return = u6, u6 = u6.child;
        continue;
      }
      if (u6 === l6) break;
      for (; u6.sibling === null; ) {
        if (u6.return === null || u6.return === l6) return null;
        u6 = u6.return;
      }
      u6.sibling.return = u6.return, u6 = u6.sibling;
    }
    return null;
  }
  function Bf(l6, u6, a4, t) {
    u6 = l6.memoizedState, a4 = a4(t, u6), a4 = a4 == null ? u6 : j10({}, u6, a4), l6.memoizedState = a4, l6.lanes === 0 && (l6.updateQueue.baseState = a4);
  }
  var Tc = {
    enqueueSetState: function(l6, u6, a4) {
      l6 = l6._reactInternals;
      var t = El2(), n2 = Mu2(t);
      n2.payload = u6, a4 != null && (n2.callback = a4), u6 = Eu(l6, n2, t), u6 !== null && (Dl3(u6, l6, t), tt3(u6, l6, t));
    },
    enqueueReplaceState: function(l6, u6, a4) {
      l6 = l6._reactInternals;
      var t = El2(), n2 = Mu2(t);
      n2.tag = 1, n2.payload = u6, a4 != null && (n2.callback = a4), u6 = Eu(l6, n2, t), u6 !== null && (Dl3(u6, l6, t), tt3(u6, l6, t));
    },
    enqueueForceUpdate: function(l6, u6) {
      l6 = l6._reactInternals;
      var a4 = El2(), t = Mu2(a4);
      t.tag = 2, u6 != null && (t.callback = u6), u6 = Eu(l6, t, a4), u6 !== null && (Dl3(u6, l6, a4), tt3(u6, l6, a4));
    }
  };
  function Mi(l6, u6, a4, t, n2, f4, c3) {
    return l6 = l6.stateNode, typeof l6.shouldComponentUpdate == "function" ? l6.shouldComponentUpdate(t, f4, c3) : u6.prototype && u6.prototype.isPureReactComponent ? !gt2(a4, t) || !gt2(n2, f4) : true;
  }
  function Ei2(l6, u6, a4, t) {
    l6 = u6.state, typeof u6.componentWillReceiveProps == "function" && u6.componentWillReceiveProps(a4, t), typeof u6.UNSAFE_componentWillReceiveProps == "function" && u6.UNSAFE_componentWillReceiveProps(a4, t), u6.state !== l6 && Tc.enqueueReplaceState(u6, u6.state, null);
  }
  function Wu(l6, u6) {
    var a4 = u6;
    if ("ref" in u6) {
      a4 = {};
      for (var t in u6) t !== "ref" && (a4[t] = u6[t]);
    }
    if (l6 = l6.defaultProps) {
      a4 === u6 && (a4 = j10({}, a4));
      for (var n2 in l6) a4[n2] === void 0 && (a4[n2] = l6[n2]);
    }
    return a4;
  }
  var Xn = typeof reportError == "function" ? reportError : function(l6) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var u6 = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof l6 == "object" && l6 !== null && typeof l6.message == "string" ? String(l6.message) : String(l6),
        error: l6
      });
      if (!window.dispatchEvent(u6)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l6);
      return;
    }
    console.error(l6);
  };
  function Y1(l6) {
    Xn(l6);
  }
  function o1(l6) {
    console.error(l6);
  }
  function _1(l6) {
    Xn(l6);
  }
  function Gn2(l6, u6) {
    try {
      var a4 = l6.onUncaughtError;
      a4(u6.value, {
        componentStack: u6.stack
      });
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  function Di(l6, u6, a4) {
    try {
      var t = l6.onCaughtError;
      t(a4.value, {
        componentStack: a4.stack,
        errorBoundary: u6.tag === 1 ? u6.stateNode : null
      });
    } catch (n2) {
      setTimeout(function() {
        throw n2;
      });
    }
  }
  function Mc(l6, u6, a4) {
    return a4 = Mu2(a4), a4.tag = 3, a4.payload = {
      element: null
    }, a4.callback = function() {
      Gn2(l6, u6);
    }, a4;
  }
  function X1(l6) {
    return l6 = Mu2(l6), l6.tag = 3, l6;
  }
  function G1(l6, u6, a4, t) {
    var n2 = a4.type.getDerivedStateFromError;
    if (typeof n2 == "function") {
      var f4 = t.value;
      l6.payload = function() {
        return n2(f4);
      }, l6.callback = function() {
        Di(u6, a4, t);
      };
    }
    var c3 = a4.stateNode;
    c3 !== null && typeof c3.componentDidCatch == "function" && (l6.callback = function() {
      Di(u6, a4, t), typeof n2 != "function" && (Du === null ? Du = /* @__PURE__ */ new Set([
        this
      ]) : Du.add(this));
      var e = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: e !== null ? e : ""
      });
    });
  }
  function Dy(l6, u6, a4, t, n2) {
    if (a4.flags |= 32768, t !== null && typeof t == "object" && typeof t.then == "function") {
      if (u6 = a4.alternate, u6 !== null && _t2(u6, a4, n2, true), a4 = Yl2.current, a4 !== null) {
        switch (a4.tag) {
          case 13:
            return Kl === null ? qc() : a4.alternate === null && J4 === 0 && (J4 = 3), a4.flags &= -257, a4.flags |= 65536, a4.lanes = n2, t === dc ? a4.flags |= 16384 : (u6 = a4.updateQueue, u6 === null ? a4.updateQueue = /* @__PURE__ */ new Set([
              t
            ]) : u6.add(t), jf(l6, t, n2)), false;
          case 22:
            return a4.flags |= 65536, t === dc ? a4.flags |= 16384 : (u6 = a4.updateQueue, u6 === null ? (u6 = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                t
              ])
            }, a4.updateQueue = u6) : (a4 = u6.retryQueue, a4 === null ? u6.retryQueue = /* @__PURE__ */ new Set([
              t
            ]) : a4.add(t)), jf(l6, t, n2)), false;
        }
        throw Error(A10(435, a4.tag));
      }
      return jf(l6, t, n2), qc(), false;
    }
    if (Y5) return u6 = Yl2.current, u6 !== null ? ((u6.flags & 65536) === 0 && (u6.flags |= 256), u6.flags |= 65536, u6.lanes = n2, t !== ec && (l6 = Error(A10(422), {
      cause: t
    }), bt2(Bl2(l6, a4)))) : (t !== ec && (u6 = Error(A10(423), {
      cause: t
    }), bt2(Bl2(u6, a4))), l6 = l6.current.alternate, l6.flags |= 65536, n2 &= -n2, l6.lanes |= n2, t = Bl2(t, a4), n2 = Mc(l6.stateNode, t, n2), Nf(l6, n2), J4 !== 4 && (J4 = 2)), false;
    var f4 = Error(A10(520), {
      cause: t
    });
    if (f4 = Bl2(f4, a4), vt2 === null ? vt2 = [
      f4
    ] : vt2.push(f4), J4 !== 4 && (J4 = 2), u6 === null) return true;
    t = Bl2(t, a4), a4 = u6;
    do {
      switch (a4.tag) {
        case 3:
          return a4.flags |= 65536, l6 = n2 & -n2, a4.lanes |= l6, l6 = Mc(a4.stateNode, t, l6), Nf(a4, l6), false;
        case 1:
          if (u6 = a4.type, f4 = a4.stateNode, (a4.flags & 128) === 0 && (typeof u6.getDerivedStateFromError == "function" || f4 !== null && typeof f4.componentDidCatch == "function" && (Du === null || !Du.has(f4)))) return a4.flags |= 65536, n2 &= -n2, a4.lanes |= n2, n2 = X1(n2), G1(n2, l6, a4, t), Nf(a4, n2), false;
      }
      a4 = a4.return;
    } while (a4 !== null);
    return false;
  }
  var Q1 = Error(A10(461)), al = false;
  function nl(l6, u6, a4, t) {
    u6.child = l6 === null ? B1(u6, null, a4, t) : Ba(u6, l6.child, a4, t);
  }
  function Oi(l6, u6, a4, t, n2) {
    a4 = a4.render;
    var f4 = u6.ref;
    if ("ref" in t) {
      var c3 = {};
      for (var e in t) e !== "ref" && (c3[e] = t[e]);
    } else c3 = t;
    return pu2(u6), t = ie4(l6, u6, a4, c3, f4, n2), e = ve6(), l6 !== null && !al ? (he4(l6, u6, n2), tu(l6, u6, n2)) : (Y5 && e && ue4(u6), u6.flags |= 1, nl(l6, u6, t, n2), u6.child);
  }
  function si2(l6, u6, a4, t, n2) {
    if (l6 === null) {
      var f4 = a4.type;
      return typeof f4 == "function" && !le3(f4) && f4.defaultProps === void 0 && a4.compare === null ? (u6.tag = 15, u6.type = f4, Z1(l6, u6, f4, t, n2)) : (l6 = hn(a4.type, null, t, u6, u6.mode, n2), l6.ref = u6.ref, l6.return = u6, u6.child = l6);
    }
    if (f4 = l6.child, !Te4(l6, n2)) {
      var c3 = f4.memoizedProps;
      if (a4 = a4.compare, a4 = a4 !== null ? a4 : gt2, a4(c3, t) && l6.ref === u6.ref) return tu(l6, u6, n2);
    }
    return u6.flags |= 1, l6 = Pl2(f4, t), l6.ref = u6.ref, l6.return = u6, u6.child = l6;
  }
  function Z1(l6, u6, a4, t, n2) {
    if (l6 !== null) {
      var f4 = l6.memoizedProps;
      if (gt2(f4, t) && l6.ref === u6.ref) if (al = false, u6.pendingProps = t = f4, Te4(l6, n2)) (l6.flags & 131072) !== 0 && (al = true);
      else return u6.lanes = l6.lanes, tu(l6, u6, n2);
    }
    return Ec(l6, u6, a4, t, n2);
  }
  function x1(l6, u6, a4) {
    var t = u6.pendingProps, n2 = t.children, f4 = l6 !== null ? l6.memoizedState : null;
    if (t.mode === "hidden") {
      if ((u6.flags & 128) !== 0) {
        if (t = f4 !== null ? f4.baseLanes | a4 : a4, l6 !== null) {
          for (n2 = u6.child = l6.child, f4 = 0; n2 !== null; ) f4 = f4 | n2.lanes | n2.childLanes, n2 = n2.sibling;
          u6.childLanes = f4 & ~t;
        } else u6.childLanes = 0, u6.child = null;
        return Ui(l6, u6, t, a4);
      }
      if ((a4 & 536870912) !== 0) u6.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l6 !== null && yn2(u6, f4 !== null ? f4.cachePool : null), f4 !== null ? di2(u6, f4) : gc(), R1(u6);
      else return u6.lanes = u6.childLanes = 536870912, Ui(l6, u6, f4 !== null ? f4.baseLanes | a4 : a4, a4);
    } else f4 !== null ? (yn2(u6, f4.cachePool), di2(u6, f4), Su(u6), u6.memoizedState = null) : (l6 !== null && yn2(u6, null), gc(), Su(u6));
    return nl(l6, u6, n2, a4), u6.child;
  }
  function Ui(l6, u6, a4, t) {
    var n2 = ne3();
    return n2 = n2 === null ? null : {
      parent: k9._currentValue,
      pool: n2
    }, u6.memoizedState = {
      baseLanes: a4,
      cachePool: n2
    }, l6 !== null && yn2(u6, null), gc(), R1(u6), l6 !== null && _t2(l6, u6, t, true), null;
  }
  function mn(l6, u6) {
    var a4 = u6.ref;
    if (a4 === null) l6 !== null && l6.ref !== null && (u6.flags |= 4194816);
    else {
      if (typeof a4 != "function" && typeof a4 != "object") throw Error(A10(284));
      (l6 === null || l6.ref !== a4) && (u6.flags |= 4194816);
    }
  }
  function Ec(l6, u6, a4, t, n2) {
    return pu2(u6), a4 = ie4(l6, u6, a4, t, void 0, n2), t = ve6(), l6 !== null && !al ? (he4(l6, u6, n2), tu(l6, u6, n2)) : (Y5 && t && ue4(u6), u6.flags |= 1, nl(l6, u6, a4, n2), u6.child);
  }
  function Hi(l6, u6, a4, t, n2, f4) {
    return pu2(u6), u6.updateQueue = null, a4 = r0(u6, t, a4, n2), k0(l6), t = ve6(), l6 !== null && !al ? (he4(l6, u6, f4), tu(l6, u6, f4)) : (Y5 && t && ue4(u6), u6.flags |= 1, nl(l6, u6, a4, f4), u6.child);
  }
  function Ni2(l6, u6, a4, t, n2) {
    if (pu2(u6), u6.stateNode === null) {
      var f4 = ya3, c3 = a4.contextType;
      typeof c3 == "object" && c3 !== null && (f4 = il(c3)), f4 = new a4(t, f4), u6.memoizedState = f4.state !== null && f4.state !== void 0 ? f4.state : null, f4.updater = Tc, u6.stateNode = f4, f4._reactInternals = u6, f4 = u6.stateNode, f4.props = t, f4.state = u6.memoizedState, f4.refs = {}, fe4(u6), c3 = a4.contextType, f4.context = typeof c3 == "object" && c3 !== null ? il(c3) : ya3, f4.state = u6.memoizedState, c3 = a4.getDerivedStateFromProps, typeof c3 == "function" && (Bf(u6, a4, c3, t), f4.state = u6.memoizedState), typeof a4.getDerivedStateFromProps == "function" || typeof f4.getSnapshotBeforeUpdate == "function" || typeof f4.UNSAFE_componentWillMount != "function" && typeof f4.componentWillMount != "function" || (c3 = f4.state, typeof f4.componentWillMount == "function" && f4.componentWillMount(), typeof f4.UNSAFE_componentWillMount == "function" && f4.UNSAFE_componentWillMount(), c3 !== f4.state && Tc.enqueueReplaceState(f4, f4.state, null), ft(u6, t, f4, n2), nt5(), f4.state = u6.memoizedState), typeof f4.componentDidMount == "function" && (u6.flags |= 4194308), t = true;
    } else if (l6 === null) {
      f4 = u6.stateNode;
      var e = u6.memoizedProps, i3 = Wu(a4, e);
      f4.props = i3;
      var d4 = f4.context, g7 = a4.contextType;
      c3 = ya3, typeof g7 == "object" && g7 !== null && (c3 = il(g7));
      var z7 = a4.getDerivedStateFromProps;
      g7 = typeof z7 == "function" || typeof f4.getSnapshotBeforeUpdate == "function", e = u6.pendingProps !== e, g7 || typeof f4.UNSAFE_componentWillReceiveProps != "function" && typeof f4.componentWillReceiveProps != "function" || (e || d4 !== c3) && Ei2(u6, f4, t, c3), hu = false;
      var S7 = u6.memoizedState;
      f4.state = S7, ft(u6, t, f4, n2), nt5(), d4 = u6.memoizedState, e || S7 !== d4 || hu ? (typeof z7 == "function" && (Bf(u6, a4, z7, t), d4 = u6.memoizedState), (i3 = hu || Mi(u6, a4, i3, t, S7, d4, c3)) ? (g7 || typeof f4.UNSAFE_componentWillMount != "function" && typeof f4.componentWillMount != "function" || (typeof f4.componentWillMount == "function" && f4.componentWillMount(), typeof f4.UNSAFE_componentWillMount == "function" && f4.UNSAFE_componentWillMount()), typeof f4.componentDidMount == "function" && (u6.flags |= 4194308)) : (typeof f4.componentDidMount == "function" && (u6.flags |= 4194308), u6.memoizedProps = t, u6.memoizedState = d4), f4.props = t, f4.state = d4, f4.context = c3, t = i3) : (typeof f4.componentDidMount == "function" && (u6.flags |= 4194308), t = false);
    } else {
      f4 = u6.stateNode, Sc(l6, u6), c3 = u6.memoizedProps, g7 = Wu(a4, c3), f4.props = g7, z7 = u6.pendingProps, S7 = f4.context, d4 = a4.contextType, i3 = ya3, typeof d4 == "object" && d4 !== null && (i3 = il(d4)), e = a4.getDerivedStateFromProps, (d4 = typeof e == "function" || typeof f4.getSnapshotBeforeUpdate == "function") || typeof f4.UNSAFE_componentWillReceiveProps != "function" && typeof f4.componentWillReceiveProps != "function" || (c3 !== z7 || S7 !== i3) && Ei2(u6, f4, t, i3), hu = false, S7 = u6.memoizedState, f4.state = S7, ft(u6, t, f4, n2), nt5();
      var m6 = u6.memoizedState;
      c3 !== z7 || S7 !== m6 || hu || l6 !== null && l6.dependencies !== null && qn(l6.dependencies) ? (typeof e == "function" && (Bf(u6, a4, e, t), m6 = u6.memoizedState), (g7 = hu || Mi(u6, a4, g7, t, S7, m6, i3) || l6 !== null && l6.dependencies !== null && qn(l6.dependencies)) ? (d4 || typeof f4.UNSAFE_componentWillUpdate != "function" && typeof f4.componentWillUpdate != "function" || (typeof f4.componentWillUpdate == "function" && f4.componentWillUpdate(t, m6, i3), typeof f4.UNSAFE_componentWillUpdate == "function" && f4.UNSAFE_componentWillUpdate(t, m6, i3)), typeof f4.componentDidUpdate == "function" && (u6.flags |= 4), typeof f4.getSnapshotBeforeUpdate == "function" && (u6.flags |= 1024)) : (typeof f4.componentDidUpdate != "function" || c3 === l6.memoizedProps && S7 === l6.memoizedState || (u6.flags |= 4), typeof f4.getSnapshotBeforeUpdate != "function" || c3 === l6.memoizedProps && S7 === l6.memoizedState || (u6.flags |= 1024), u6.memoizedProps = t, u6.memoizedState = m6), f4.props = t, f4.state = m6, f4.context = i3, t = g7) : (typeof f4.componentDidUpdate != "function" || c3 === l6.memoizedProps && S7 === l6.memoizedState || (u6.flags |= 4), typeof f4.getSnapshotBeforeUpdate != "function" || c3 === l6.memoizedProps && S7 === l6.memoizedState || (u6.flags |= 1024), t = false);
    }
    return f4 = t, mn(l6, u6), t = (u6.flags & 128) !== 0, f4 || t ? (f4 = u6.stateNode, a4 = t && typeof a4.getDerivedStateFromError != "function" ? null : f4.render(), u6.flags |= 1, l6 !== null && t ? (u6.child = Ba(u6, l6.child, null, n2), u6.child = Ba(u6, null, a4, n2)) : nl(l6, u6, a4, n2), u6.memoizedState = f4.state, l6 = u6.child) : l6 = tu(l6, u6, n2), l6;
  }
  function qi(l6, u6, a4, t) {
    return ot4(), u6.flags |= 256, nl(l6, u6, a4, t), u6.child;
  }
  var Rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Yf(l6) {
    return {
      baseLanes: l6,
      cachePool: J0()
    };
  }
  function of(l6, u6, a4) {
    return l6 = l6 !== null ? l6.childLanes & ~a4 : 0, u6 && (l6 |= Rl2), l6;
  }
  function V1(l6, u6, a4) {
    var t = u6.pendingProps, n2 = false, f4 = (u6.flags & 128) !== 0, c3;
    if ((c3 = f4) || (c3 = l6 !== null && l6.memoizedState === null ? false : (r3.current & 2) !== 0), c3 && (n2 = true, u6.flags &= -129), c3 = (u6.flags & 32) !== 0, u6.flags &= -33, l6 === null) {
      if (Y5) {
        if (n2 ? du(u6) : Su(u6), Y5) {
          var e = p6, i3;
          if (i3 = e) {
            l: {
              for (i3 = e, e = Zl; i3.nodeType !== 8; ) {
                if (!e) {
                  e = null;
                  break l;
                }
                if (i3 = Xl(i3.nextSibling), i3 === null) {
                  e = null;
                  break l;
                }
              }
              e = i3;
            }
            e !== null ? (u6.memoizedState = {
              dehydrated: e,
              treeContext: xu !== null ? {
                id: Fl3,
                overflow: kl2
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i3 = Al2(18, null, null, 0), i3.stateNode = e, i3.return = u6, u6.child = i3, vl2 = u6, p6 = null, i3 = true) : i3 = false;
          }
          i3 || Lu(u6);
        }
        if (e = u6.memoizedState, e !== null && (e = e.dehydrated, e !== null)) return Gc(e) ? u6.lanes = 32 : u6.lanes = 536870912, null;
        Il3(u6);
      }
      return e = t.children, t = t.fallback, n2 ? (Su(u6), n2 = u6.mode, e = Qn({
        mode: "hidden",
        children: e
      }, n2), t = Zu(t, n2, a4, null), e.return = u6, t.return = u6, e.sibling = t, u6.child = e, n2 = u6.child, n2.memoizedState = Yf(a4), n2.childLanes = of(l6, c3, a4), u6.memoizedState = Rf, t) : (du(u6), Dc(u6, e));
    }
    if (i3 = l6.memoizedState, i3 !== null && (e = i3.dehydrated, e !== null)) {
      if (f4) u6.flags & 256 ? (du(u6), u6.flags &= -257, u6 = _f(l6, u6, a4)) : u6.memoizedState !== null ? (Su(u6), u6.child = l6.child, u6.flags |= 128, u6 = null) : (Su(u6), n2 = t.fallback, e = u6.mode, t = Qn({
        mode: "visible",
        children: t.children
      }, e), n2 = Zu(n2, e, a4, null), n2.flags |= 2, t.return = u6, n2.return = u6, t.sibling = n2, u6.child = t, Ba(u6, l6.child, null, a4), t = u6.child, t.memoizedState = Yf(a4), t.childLanes = of(l6, c3, a4), u6.memoizedState = Rf, u6 = n2);
      else if (du(u6), Gc(e)) {
        if (c3 = e.nextSibling && e.nextSibling.dataset, c3) var d4 = c3.dgst;
        c3 = d4, t = Error(A10(419)), t.stack = "", t.digest = c3, bt2({
          value: t,
          source: null,
          stack: null
        }), u6 = _f(l6, u6, a4);
      } else if (al || _t2(l6, u6, a4, false), c3 = (a4 & l6.childLanes) !== 0, al || c3) {
        if (c3 = V6, c3 !== null && (t = a4 & -a4, t = (t & 42) !== 0 ? 1 : Lc(t), t = (t & (c3.suspendedLanes | a4)) !== 0 ? 0 : t, t !== 0 && t !== i3.retryLane)) throw i3.retryLane = t, Qa2(l6, t), Dl3(c3, l6, t), Q1;
        e.data === "$?" || qc(), u6 = _f(l6, u6, a4);
      } else e.data === "$?" ? (u6.flags |= 192, u6.child = l6.child, u6 = null) : (l6 = i3.treeContext, p6 = Xl(e.nextSibling), vl2 = u6, Y5 = true, Vu2 = null, Zl = false, l6 !== null && (Hl[Nl3++] = Fl3, Hl[Nl3++] = kl2, Hl[Nl3++] = xu, Fl3 = l6.id, kl2 = l6.overflow, xu = u6), u6 = Dc(u6, t.children), u6.flags |= 4096);
      return u6;
    }
    return n2 ? (Su(u6), n2 = t.fallback, e = u6.mode, i3 = l6.child, d4 = i3.sibling, t = Pl2(i3, {
      mode: "hidden",
      children: t.children
    }), t.subtreeFlags = i3.subtreeFlags & 65011712, d4 !== null ? n2 = Pl2(d4, n2) : (n2 = Zu(n2, e, a4, null), n2.flags |= 2), n2.return = u6, t.return = u6, t.sibling = n2, u6.child = t, t = n2, n2 = u6.child, e = l6.child.memoizedState, e === null ? e = Yf(a4) : (i3 = e.cachePool, i3 !== null ? (d4 = k9._currentValue, i3 = i3.parent !== d4 ? {
      parent: d4,
      pool: d4
    } : i3) : i3 = J0(), e = {
      baseLanes: e.baseLanes | a4,
      cachePool: i3
    }), n2.memoizedState = e, n2.childLanes = of(l6, c3, a4), u6.memoizedState = Rf, t) : (du(u6), a4 = l6.child, l6 = a4.sibling, a4 = Pl2(a4, {
      mode: "visible",
      children: t.children
    }), a4.return = u6, a4.sibling = null, l6 !== null && (c3 = u6.deletions, c3 === null ? (u6.deletions = [
      l6
    ], u6.flags |= 16) : c3.push(l6)), u6.child = a4, u6.memoizedState = null, a4);
  }
  function Dc(l6, u6) {
    return u6 = Qn({
      mode: "visible",
      children: u6
    }, l6.mode), u6.return = l6, l6.child = u6;
  }
  function Qn(l6, u6) {
    return l6 = Al2(22, l6, null, u6), l6.lanes = 0, l6.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l6;
  }
  function _f(l6, u6, a4) {
    return Ba(u6, l6.child, null, a4), l6 = Dc(u6, u6.pendingProps.children), l6.flags |= 2, u6.memoizedState = null, l6;
  }
  function Bi(l6, u6, a4) {
    l6.lanes |= u6;
    var t = l6.alternate;
    t !== null && (t.lanes |= u6), vc(l6.return, u6, a4);
  }
  function Xf(l6, u6, a4, t, n2) {
    var f4 = l6.memoizedState;
    f4 === null ? l6.memoizedState = {
      isBackwards: u6,
      rendering: null,
      renderingStartTime: 0,
      last: t,
      tail: a4,
      tailMode: n2
    } : (f4.isBackwards = u6, f4.rendering = null, f4.renderingStartTime = 0, f4.last = t, f4.tail = a4, f4.tailMode = n2);
  }
  function j1(l6, u6, a4) {
    var t = u6.pendingProps, n2 = t.revealOrder, f4 = t.tail;
    if (nl(l6, u6, t.children, a4), t = r3.current, (t & 2) !== 0) t = t & 1 | 2, u6.flags |= 128;
    else {
      if (l6 !== null && (l6.flags & 128) !== 0) l: for (l6 = u6.child; l6 !== null; ) {
        if (l6.tag === 13) l6.memoizedState !== null && Bi(l6, a4, u6);
        else if (l6.tag === 19) Bi(l6, a4, u6);
        else if (l6.child !== null) {
          l6.child.return = l6, l6 = l6.child;
          continue;
        }
        if (l6 === u6) break l;
        for (; l6.sibling === null; ) {
          if (l6.return === null || l6.return === u6) break l;
          l6 = l6.return;
        }
        l6.sibling.return = l6.return, l6 = l6.sibling;
      }
      t &= 1;
    }
    switch (C8(r3, t), n2) {
      case "forwards":
        for (a4 = u6.child, n2 = null; a4 !== null; ) l6 = a4.alternate, l6 !== null && _n(l6) === null && (n2 = a4), a4 = a4.sibling;
        a4 = n2, a4 === null ? (n2 = u6.child, u6.child = null) : (n2 = a4.sibling, a4.sibling = null), Xf(u6, false, n2, a4, f4);
        break;
      case "backwards":
        for (a4 = null, n2 = u6.child, u6.child = null; n2 !== null; ) {
          if (l6 = n2.alternate, l6 !== null && _n(l6) === null) {
            u6.child = n2;
            break;
          }
          l6 = n2.sibling, n2.sibling = a4, a4 = n2, n2 = l6;
        }
        Xf(u6, true, a4, null, f4);
        break;
      case "together":
        Xf(u6, false, null, null, void 0);
        break;
      default:
        u6.memoizedState = null;
    }
    return u6.child;
  }
  function tu(l6, u6, a4) {
    if (l6 !== null && (u6.dependencies = l6.dependencies), Bu2 |= u6.lanes, (a4 & u6.childLanes) === 0) if (l6 !== null) {
      if (_t2(l6, u6, a4, false), (a4 & u6.childLanes) === 0) return null;
    } else return null;
    if (l6 !== null && u6.child !== l6.child) throw Error(A10(153));
    if (u6.child !== null) {
      for (l6 = u6.child, a4 = Pl2(l6, l6.pendingProps), u6.child = a4, a4.return = u6; l6.sibling !== null; ) l6 = l6.sibling, a4 = a4.sibling = Pl2(l6, l6.pendingProps), a4.return = u6;
      a4.sibling = null;
    }
    return u6.child;
  }
  function Te4(l6, u6) {
    return (l6.lanes & u6) !== 0 ? true : (l6 = l6.dependencies, !!(l6 !== null && qn(l6)));
  }
  function Oy(l6, u6, a4) {
    switch (u6.tag) {
      case 3:
        Mn(u6, u6.stateNode.containerInfo), yu2(u6, k9, l6.memoizedState.cache), ot4();
        break;
      case 27:
      case 5:
        rf(u6);
        break;
      case 4:
        Mn(u6, u6.stateNode.containerInfo);
        break;
      case 10:
        yu2(u6, u6.type, u6.memoizedProps.value);
        break;
      case 13:
        var t = u6.memoizedState;
        if (t !== null) return t.dehydrated !== null ? (du(u6), u6.flags |= 128, null) : (a4 & u6.child.childLanes) !== 0 ? V1(l6, u6, a4) : (du(u6), l6 = tu(l6, u6, a4), l6 !== null ? l6.sibling : null);
        du(u6);
        break;
      case 19:
        var n2 = (l6.flags & 128) !== 0;
        if (t = (a4 & u6.childLanes) !== 0, t || (_t2(l6, u6, a4, false), t = (a4 & u6.childLanes) !== 0), n2) {
          if (t) return j1(l6, u6, a4);
          u6.flags |= 128;
        }
        if (n2 = u6.memoizedState, n2 !== null && (n2.rendering = null, n2.tail = null, n2.lastEffect = null), C8(r3, r3.current), t) break;
        return null;
      case 22:
      case 23:
        return u6.lanes = 0, x1(l6, u6, a4);
      case 24:
        yu2(u6, k9, l6.memoizedState.cache);
    }
    return tu(l6, u6, a4);
  }
  function K1(l6, u6, a4) {
    if (l6 !== null) if (l6.memoizedProps !== u6.pendingProps) al = true;
    else {
      if (!Te4(l6, a4) && (u6.flags & 128) === 0) return al = false, Oy(l6, u6, a4);
      al = (l6.flags & 131072) !== 0;
    }
    else al = false, Y5 && (u6.flags & 1048576) !== 0 && L0(u6, Nn, u6.index);
    switch (u6.lanes = 0, u6.tag) {
      case 16:
        l: {
          l6 = u6.pendingProps;
          var t = u6.elementType, n2 = t._init;
          if (t = n2(t._payload), u6.type = t, typeof t == "function") le3(t) ? (l6 = Wu(t, l6), u6.tag = 1, u6 = Ni2(null, u6, t, l6, a4)) : (u6.tag = 0, u6 = Ec(null, u6, t, l6, a4));
          else {
            if (t != null) {
              if (n2 = t.$$typeof, n2 === jc) {
                u6.tag = 11, u6 = Oi(null, u6, t, l6, a4);
                break l;
              } else if (n2 === Kc) {
                u6.tag = 14, u6 = si2(null, u6, t, l6, a4);
                break l;
              }
            }
            throw u6 = Ff(t) || t, Error(A10(306, u6, ""));
          }
        }
        return u6;
      case 0:
        return Ec(l6, u6, u6.type, u6.pendingProps, a4);
      case 1:
        return t = u6.type, n2 = Wu(t, u6.pendingProps), Ni2(l6, u6, t, n2, a4);
      case 3:
        l: {
          if (Mn(u6, u6.stateNode.containerInfo), l6 === null) throw Error(A10(387));
          t = u6.pendingProps;
          var f4 = u6.memoizedState;
          n2 = f4.element, Sc(l6, u6), ft(u6, t, null, a4);
          var c3 = u6.memoizedState;
          if (t = c3.cache, yu2(u6, k9, t), t !== f4.cache && hc(u6, [
            k9
          ], a4, true), nt5(), t = c3.element, f4.isDehydrated) if (f4 = {
            element: t,
            isDehydrated: false,
            cache: c3.cache
          }, u6.updateQueue.baseState = f4, u6.memoizedState = f4, u6.flags & 256) {
            u6 = qi(l6, u6, t, a4);
            break l;
          } else if (t !== n2) {
            n2 = Bl2(Error(A10(424)), u6), bt2(n2), u6 = qi(l6, u6, t, a4);
            break l;
          } else {
            switch (l6 = u6.stateNode.containerInfo, l6.nodeType) {
              case 9:
                l6 = l6.body;
                break;
              default:
                l6 = l6.nodeName === "HTML" ? l6.ownerDocument.body : l6;
            }
            for (p6 = Xl(l6.firstChild), vl2 = u6, Y5 = true, Vu2 = null, Zl = true, a4 = B1(u6, null, t, a4), u6.child = a4; a4; ) a4.flags = a4.flags & -3 | 4096, a4 = a4.sibling;
          }
          else {
            if (ot4(), t === n2) {
              u6 = tu(l6, u6, a4);
              break l;
            }
            nl(l6, u6, t, a4);
          }
          u6 = u6.child;
        }
        return u6;
      case 26:
        return mn(l6, u6), l6 === null ? (a4 = $i2(u6.type, null, u6.pendingProps, null)) ? u6.memoizedState = a4 : Y5 || (a4 = u6.type, l6 = u6.pendingProps, t = Ln(Tu.current).createElement(a4), t[el2] = u6, t[Sl2] = l6, cl(t, a4, l6), ul2(t), u6.stateNode = t) : u6.memoizedState = $i2(u6.type, l6.memoizedProps, u6.pendingProps, l6.memoizedState), null;
      case 27:
        return rf(u6), l6 === null && Y5 && (t = u6.stateNode = Nv(u6.type, u6.pendingProps, Tu.current), vl2 = u6, Zl = true, n2 = p6, Yu2(u6.type) ? (Qc = n2, p6 = Xl(t.firstChild)) : p6 = n2), nl(l6, u6, u6.pendingProps.children, a4), mn(l6, u6), l6 === null && (u6.flags |= 4194304), u6.child;
      case 5:
        return l6 === null && Y5 && ((n2 = t = p6) && (t = Fy(t, u6.type, u6.pendingProps, Zl), t !== null ? (u6.stateNode = t, vl2 = u6, p6 = Xl(t.firstChild), Zl = false, n2 = true) : n2 = false), n2 || Lu(u6)), rf(u6), n2 = u6.type, f4 = u6.pendingProps, c3 = l6 !== null ? l6.memoizedProps : null, t = f4.children, _c(n2, f4) ? t = null : c3 !== null && _c(n2, c3) && (u6.flags |= 32), u6.memoizedState !== null && (n2 = ie4(l6, u6, gy, null, null, a4), Dt2._currentValue = n2), mn(l6, u6), nl(l6, u6, t, a4), u6.child;
      case 6:
        return l6 === null && Y5 && ((l6 = a4 = p6) && (a4 = ky(a4, u6.pendingProps, Zl), a4 !== null ? (u6.stateNode = a4, vl2 = u6, p6 = null, l6 = true) : l6 = false), l6 || Lu(u6)), null;
      case 13:
        return V1(l6, u6, a4);
      case 4:
        return Mn(u6, u6.stateNode.containerInfo), t = u6.pendingProps, l6 === null ? u6.child = Ba(u6, null, t, a4) : nl(l6, u6, t, a4), u6.child;
      case 11:
        return Oi(l6, u6, u6.type, u6.pendingProps, a4);
      case 7:
        return nl(l6, u6, u6.pendingProps, a4), u6.child;
      case 8:
        return nl(l6, u6, u6.pendingProps.children, a4), u6.child;
      case 12:
        return nl(l6, u6, u6.pendingProps.children, a4), u6.child;
      case 10:
        return t = u6.pendingProps, yu2(u6, u6.type, t.value), nl(l6, u6, t.children, a4), u6.child;
      case 9:
        return n2 = u6.type._context, t = u6.pendingProps.children, pu2(u6), n2 = il(n2), t = t(n2), u6.flags |= 1, nl(l6, u6, t, a4), u6.child;
      case 14:
        return si2(l6, u6, u6.type, u6.pendingProps, a4);
      case 15:
        return Z1(l6, u6, u6.type, u6.pendingProps, a4);
      case 19:
        return j1(l6, u6, a4);
      case 31:
        return t = u6.pendingProps, a4 = u6.mode, t = {
          mode: t.mode,
          children: t.children
        }, l6 === null ? (a4 = Qn(t, a4), a4.ref = u6.ref, u6.child = a4, a4.return = u6, u6 = a4) : (a4 = Pl2(l6.child, t), a4.ref = u6.ref, u6.child = a4, a4.return = u6, u6 = a4), u6;
      case 22:
        return x1(l6, u6, a4);
      case 24:
        return pu2(u6), t = il(k9), l6 === null ? (n2 = ne3(), n2 === null && (n2 = V6, f4 = te2(), n2.pooledCache = f4, f4.refCount++, f4 !== null && (n2.pooledCacheLanes |= a4), n2 = f4), u6.memoizedState = {
          parent: t,
          cache: n2
        }, fe4(u6), yu2(u6, k9, n2)) : ((l6.lanes & a4) !== 0 && (Sc(l6, u6), ft(u6, null, null, a4), nt5()), n2 = l6.memoizedState, f4 = u6.memoizedState, n2.parent !== t ? (n2 = {
          parent: t,
          cache: t
        }, u6.memoizedState = n2, u6.lanes === 0 && (u6.memoizedState = u6.updateQueue.baseState = n2), yu2(u6, k9, t)) : (t = f4.cache, yu2(u6, k9, t), t !== n2.cache && hc(u6, [
          k9
        ], a4, true))), nl(l6, u6, u6.pendingProps.children, a4), u6.child;
      case 29:
        throw u6.pendingProps;
    }
    throw Error(A10(156, u6.tag));
  }
  function Jl2(l6) {
    l6.flags |= 4;
  }
  function Ri2(l6, u6) {
    if (u6.type !== "stylesheet" || (u6.state.loading & 4) !== 0) l6.flags &= -16777217;
    else if (l6.flags |= 16777216, !Rv(u6)) {
      if (u6 = Yl2.current, u6 !== null && ((B6 & 4194048) === B6 ? Kl !== null : (B6 & 62914560) !== B6 && (B6 & 536870912) === 0 || u6 !== Kl)) throw at3 = dc, W0;
      l6.flags |= 8192;
    }
  }
  function Pt3(l6, u6) {
    u6 !== null && (l6.flags |= 4), l6.flags & 16384 && (u6 = l6.tag !== 22 ? S0() : 536870912, l6.lanes |= u6, Ra2 |= u6);
  }
  function pa2(l6, u6) {
    if (!Y5) switch (l6.tailMode) {
      case "hidden":
        u6 = l6.tail;
        for (var a4 = null; u6 !== null; ) u6.alternate !== null && (a4 = u6), u6 = u6.sibling;
        a4 === null ? l6.tail = null : a4.sibling = null;
        break;
      case "collapsed":
        a4 = l6.tail;
        for (var t = null; a4 !== null; ) a4.alternate !== null && (t = a4), a4 = a4.sibling;
        t === null ? u6 || l6.tail === null ? l6.tail = null : l6.tail.sibling = null : t.sibling = null;
    }
  }
  function L2(l6) {
    var u6 = l6.alternate !== null && l6.alternate.child === l6.child, a4 = 0, t = 0;
    if (u6) for (var n2 = l6.child; n2 !== null; ) a4 |= n2.lanes | n2.childLanes, t |= n2.subtreeFlags & 65011712, t |= n2.flags & 65011712, n2.return = l6, n2 = n2.sibling;
    else for (n2 = l6.child; n2 !== null; ) a4 |= n2.lanes | n2.childLanes, t |= n2.subtreeFlags, t |= n2.flags, n2.return = l6, n2 = n2.sibling;
    return l6.subtreeFlags |= t, l6.childLanes = a4, u6;
  }
  function sy(l6, u6, a4) {
    var t = u6.pendingProps;
    switch (ae5(u6), u6.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return L2(u6), null;
      case 1:
        return L2(u6), null;
      case 3:
        return a4 = u6.stateNode, t = null, l6 !== null && (t = l6.memoizedState.cache), u6.memoizedState.cache !== t && (u6.flags |= 2048), lu(k9), Oa(), a4.pendingContext && (a4.context = a4.pendingContext, a4.pendingContext = null), (l6 === null || l6.child === null) && (Ca2(u6) ? Jl2(u6) : l6 === null || l6.memoizedState.isDehydrated && (u6.flags & 256) === 0 || (u6.flags |= 1024, ci())), L2(u6), null;
      case 26:
        return a4 = u6.memoizedState, l6 === null ? (Jl2(u6), a4 !== null ? (L2(u6), Ri2(u6, a4)) : (L2(u6), u6.flags &= -16777217)) : a4 ? a4 !== l6.memoizedState ? (Jl2(u6), L2(u6), Ri2(u6, a4)) : (L2(u6), u6.flags &= -16777217) : (l6.memoizedProps !== t && Jl2(u6), L2(u6), u6.flags &= -16777217), null;
      case 27:
        En2(u6), a4 = Tu.current;
        var n2 = u6.type;
        if (l6 !== null && u6.stateNode != null) l6.memoizedProps !== t && Jl2(u6);
        else {
          if (!t) {
            if (u6.stateNode === null) throw Error(A10(166));
            return L2(u6), null;
          }
          l6 = Vl2.current, Ca2(u6) ? ni2(u6, l6) : (l6 = Nv(n2, t, a4), u6.stateNode = l6, Jl2(u6));
        }
        return L2(u6), null;
      case 5:
        if (En2(u6), a4 = u6.type, l6 !== null && u6.stateNode != null) l6.memoizedProps !== t && Jl2(u6);
        else {
          if (!t) {
            if (u6.stateNode === null) throw Error(A10(166));
            return L2(u6), null;
          }
          if (l6 = Vl2.current, Ca2(u6)) ni2(u6, l6);
          else {
            switch (n2 = Ln(Tu.current), l6) {
              case 1:
                l6 = n2.createElementNS("http://www.w3.org/2000/svg", a4);
                break;
              case 2:
                l6 = n2.createElementNS("http://www.w3.org/1998/Math/MathML", a4);
                break;
              default:
                switch (a4) {
                  case "svg":
                    l6 = n2.createElementNS("http://www.w3.org/2000/svg", a4);
                    break;
                  case "math":
                    l6 = n2.createElementNS("http://www.w3.org/1998/Math/MathML", a4);
                    break;
                  case "script":
                    l6 = n2.createElement("div"), l6.innerHTML = "<script><\/script>", l6 = l6.removeChild(l6.firstChild);
                    break;
                  case "select":
                    l6 = typeof t.is == "string" ? n2.createElement("select", {
                      is: t.is
                    }) : n2.createElement("select"), t.multiple ? l6.multiple = true : t.size && (l6.size = t.size);
                    break;
                  default:
                    l6 = typeof t.is == "string" ? n2.createElement(a4, {
                      is: t.is
                    }) : n2.createElement(a4);
                }
            }
            l6[el2] = u6, l6[Sl2] = t;
            l: for (n2 = u6.child; n2 !== null; ) {
              if (n2.tag === 5 || n2.tag === 6) l6.appendChild(n2.stateNode);
              else if (n2.tag !== 4 && n2.tag !== 27 && n2.child !== null) {
                n2.child.return = n2, n2 = n2.child;
                continue;
              }
              if (n2 === u6) break l;
              for (; n2.sibling === null; ) {
                if (n2.return === null || n2.return === u6) break l;
                n2 = n2.return;
              }
              n2.sibling.return = n2.return, n2 = n2.sibling;
            }
            u6.stateNode = l6;
            l: switch (cl(l6, a4, t), a4) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l6 = !!t.autoFocus;
                break l;
              case "img":
                l6 = true;
                break l;
              default:
                l6 = false;
            }
            l6 && Jl2(u6);
          }
        }
        return L2(u6), u6.flags &= -16777217, null;
      case 6:
        if (l6 && u6.stateNode != null) l6.memoizedProps !== t && Jl2(u6);
        else {
          if (typeof t != "string" && u6.stateNode === null) throw Error(A10(166));
          if (l6 = Tu.current, Ca2(u6)) {
            if (l6 = u6.stateNode, a4 = u6.memoizedProps, t = null, n2 = vl2, n2 !== null) switch (n2.tag) {
              case 27:
              case 5:
                t = n2.memoizedProps;
            }
            l6[el2] = u6, l6 = !!(l6.nodeValue === a4 || t !== null && t.suppressHydrationWarning === true || sv(l6.nodeValue, a4)), l6 || Lu(u6);
          } else l6 = Ln(l6).createTextNode(t), l6[el2] = u6, u6.stateNode = l6;
        }
        return L2(u6), null;
      case 13:
        if (t = u6.memoizedState, l6 === null || l6.memoizedState !== null && l6.memoizedState.dehydrated !== null) {
          if (n2 = Ca2(u6), t !== null && t.dehydrated !== null) {
            if (l6 === null) {
              if (!n2) throw Error(A10(318));
              if (n2 = u6.memoizedState, n2 = n2 !== null ? n2.dehydrated : null, !n2) throw Error(A10(317));
              n2[el2] = u6;
            } else ot4(), (u6.flags & 128) === 0 && (u6.memoizedState = null), u6.flags |= 4;
            L2(u6), n2 = false;
          } else n2 = ci(), l6 !== null && l6.memoizedState !== null && (l6.memoizedState.hydrationErrors = n2), n2 = true;
          if (!n2) return u6.flags & 256 ? (Il3(u6), u6) : (Il3(u6), null);
        }
        if (Il3(u6), (u6.flags & 128) !== 0) return u6.lanes = a4, u6;
        if (a4 = t !== null, l6 = l6 !== null && l6.memoizedState !== null, a4) {
          t = u6.child, n2 = null, t.alternate !== null && t.alternate.memoizedState !== null && t.alternate.memoizedState.cachePool !== null && (n2 = t.alternate.memoizedState.cachePool.pool);
          var f4 = null;
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (f4 = t.memoizedState.cachePool.pool), f4 !== n2 && (t.flags |= 2048);
        }
        return a4 !== l6 && a4 && (u6.child.flags |= 8192), Pt3(u6, u6.updateQueue), L2(u6), null;
      case 4:
        return Oa(), l6 === null && Ne4(u6.stateNode.containerInfo), L2(u6), null;
      case 10:
        return lu(u6.type), L2(u6), null;
      case 19:
        if (tl2(r3), n2 = u6.memoizedState, n2 === null) return L2(u6), null;
        if (t = (u6.flags & 128) !== 0, f4 = n2.rendering, f4 === null) if (t) pa2(n2, false);
        else {
          if (J4 !== 0 || l6 !== null && (l6.flags & 128) !== 0) for (l6 = u6.child; l6 !== null; ) {
            if (f4 = _n(l6), f4 !== null) {
              for (u6.flags |= 128, pa2(n2, false), l6 = f4.updateQueue, u6.updateQueue = l6, Pt3(u6, l6), u6.subtreeFlags = 0, l6 = a4, a4 = u6.child; a4 !== null; ) C0(a4, l6), a4 = a4.sibling;
              return C8(r3, r3.current & 1 | 2), u6.child;
            }
            l6 = l6.sibling;
          }
          n2.tail !== null && jl2() > xn2 && (u6.flags |= 128, t = true, pa2(n2, false), u6.lanes = 4194304);
        }
        else {
          if (!t) if (l6 = _n(f4), l6 !== null) {
            if (u6.flags |= 128, t = true, l6 = l6.updateQueue, u6.updateQueue = l6, Pt3(u6, l6), pa2(n2, true), n2.tail === null && n2.tailMode === "hidden" && !f4.alternate && !Y5) return L2(u6), null;
          } else 2 * jl2() - n2.renderingStartTime > xn2 && a4 !== 536870912 && (u6.flags |= 128, t = true, pa2(n2, false), u6.lanes = 4194304);
          n2.isBackwards ? (f4.sibling = u6.child, u6.child = f4) : (l6 = n2.last, l6 !== null ? l6.sibling = f4 : u6.child = f4, n2.last = f4);
        }
        return n2.tail !== null ? (u6 = n2.tail, n2.rendering = u6, n2.tail = u6.sibling, n2.renderingStartTime = jl2(), u6.sibling = null, l6 = r3.current, C8(r3, t ? l6 & 1 | 2 : l6 & 1), u6) : (L2(u6), null);
      case 22:
      case 23:
        return Il3(u6), ce5(), t = u6.memoizedState !== null, l6 !== null ? l6.memoizedState !== null !== t && (u6.flags |= 8192) : t && (u6.flags |= 8192), t ? (a4 & 536870912) !== 0 && (u6.flags & 128) === 0 && (L2(u6), u6.subtreeFlags & 6 && (u6.flags |= 8192)) : L2(u6), a4 = u6.updateQueue, a4 !== null && Pt3(u6, a4.retryQueue), a4 = null, l6 !== null && l6.memoizedState !== null && l6.memoizedState.cachePool !== null && (a4 = l6.memoizedState.cachePool.pool), t = null, u6.memoizedState !== null && u6.memoizedState.cachePool !== null && (t = u6.memoizedState.cachePool.pool), t !== a4 && (u6.flags |= 2048), l6 !== null && tl2(ju), null;
      case 24:
        return a4 = null, l6 !== null && (a4 = l6.memoizedState.cache), u6.memoizedState.cache !== a4 && (u6.flags |= 2048), lu(k9), L2(u6), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(A10(156, u6.tag));
  }
  function Uy(l6, u6) {
    switch (ae5(u6), u6.tag) {
      case 1:
        return l6 = u6.flags, l6 & 65536 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 3:
        return lu(k9), Oa(), l6 = u6.flags, (l6 & 65536) !== 0 && (l6 & 128) === 0 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 26:
      case 27:
      case 5:
        return En2(u6), null;
      case 13:
        if (Il3(u6), l6 = u6.memoizedState, l6 !== null && l6.dehydrated !== null) {
          if (u6.alternate === null) throw Error(A10(340));
          ot4();
        }
        return l6 = u6.flags, l6 & 65536 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 19:
        return tl2(r3), null;
      case 4:
        return Oa(), null;
      case 10:
        return lu(u6.type), null;
      case 22:
      case 23:
        return Il3(u6), ce5(), l6 !== null && tl2(ju), l6 = u6.flags, l6 & 65536 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 24:
        return lu(k9), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function C1(l6, u6) {
    switch (ae5(u6), u6.tag) {
      case 3:
        lu(k9), Oa();
        break;
      case 26:
      case 27:
      case 5:
        En2(u6);
        break;
      case 4:
        Oa();
        break;
      case 13:
        Il3(u6);
        break;
      case 19:
        tl2(r3);
        break;
      case 10:
        lu(u6.type);
        break;
      case 22:
      case 23:
        Il3(u6), ce5(), l6 !== null && tl2(ju);
        break;
      case 24:
        lu(k9);
    }
  }
  function xt3(l6, u6) {
    try {
      var a4 = u6.updateQueue, t = a4 !== null ? a4.lastEffect : null;
      if (t !== null) {
        var n2 = t.next;
        a4 = n2;
        do {
          if ((a4.tag & l6) === l6) {
            t = void 0;
            var f4 = a4.create, c3 = a4.inst;
            t = f4(), c3.destroy = t;
          }
          a4 = a4.next;
        } while (a4 !== n2);
      }
    } catch (e) {
      x9(u6, u6.return, e);
    }
  }
  function qu(l6, u6, a4) {
    try {
      var t = u6.updateQueue, n2 = t !== null ? t.lastEffect : null;
      if (n2 !== null) {
        var f4 = n2.next;
        t = f4;
        do {
          if ((t.tag & l6) === l6) {
            var c3 = t.inst, e = c3.destroy;
            if (e !== void 0) {
              c3.destroy = void 0, n2 = u6;
              var i3 = a4, d4 = e;
              try {
                d4();
              } catch (g7) {
                x9(n2, i3, g7);
              }
            }
          }
          t = t.next;
        } while (t !== f4);
      }
    } catch (g7) {
      x9(u6, u6.return, g7);
    }
  }
  function L1(l6) {
    var u6 = l6.updateQueue;
    if (u6 !== null) {
      var a4 = l6.stateNode;
      try {
        F0(u6, a4);
      } catch (t) {
        x9(l6, l6.return, t);
      }
    }
  }
  function p1(l6, u6, a4) {
    a4.props = Wu(l6.type, l6.memoizedProps), a4.state = l6.memoizedState;
    try {
      a4.componentWillUnmount();
    } catch (t) {
      x9(l6, u6, t);
    }
  }
  function et4(l6, u6) {
    try {
      var a4 = l6.ref;
      if (a4 !== null) {
        switch (l6.tag) {
          case 26:
          case 27:
          case 5:
            var t = l6.stateNode;
            break;
          case 30:
            t = l6.stateNode;
            break;
          default:
            t = l6.stateNode;
        }
        typeof a4 == "function" ? l6.refCleanup = a4(t) : a4.current = t;
      }
    } catch (n2) {
      x9(l6, u6, n2);
    }
  }
  function xl2(l6, u6) {
    var a4 = l6.ref, t = l6.refCleanup;
    if (a4 !== null) if (typeof t == "function") try {
      t();
    } catch (n2) {
      x9(l6, u6, n2);
    } finally {
      l6.refCleanup = null, l6 = l6.alternate, l6 != null && (l6.refCleanup = null);
    }
    else if (typeof a4 == "function") try {
      a4(null);
    } catch (n2) {
      x9(l6, u6, n2);
    }
    else a4.current = null;
  }
  function J1(l6) {
    var u6 = l6.type, a4 = l6.memoizedProps, t = l6.stateNode;
    try {
      l: switch (u6) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a4.autoFocus && t.focus();
          break l;
        case "img":
          a4.src ? t.src = a4.src : a4.srcSet && (t.srcset = a4.srcSet);
      }
    } catch (n2) {
      x9(l6, l6.return, n2);
    }
  }
  function Gf(l6, u6, a4) {
    try {
      var t = l6.stateNode;
      py(t, l6.type, a4, u6), t[Sl2] = u6;
    } catch (n2) {
      x9(l6, l6.return, n2);
    }
  }
  function W1(l6) {
    return l6.tag === 5 || l6.tag === 3 || l6.tag === 26 || l6.tag === 27 && Yu2(l6.type) || l6.tag === 4;
  }
  function Qf(l6) {
    l: for (; ; ) {
      for (; l6.sibling === null; ) {
        if (l6.return === null || W1(l6.return)) return null;
        l6 = l6.return;
      }
      for (l6.sibling.return = l6.return, l6 = l6.sibling; l6.tag !== 5 && l6.tag !== 6 && l6.tag !== 18; ) {
        if (l6.tag === 27 && Yu2(l6.type) || l6.flags & 2 || l6.child === null || l6.tag === 4) continue l;
        l6.child.return = l6, l6 = l6.child;
      }
      if (!(l6.flags & 2)) return l6.stateNode;
    }
  }
  function Oc(l6, u6, a4) {
    var t = l6.tag;
    if (t === 5 || t === 6) l6 = l6.stateNode, u6 ? (a4.nodeType === 9 ? a4.body : a4.nodeName === "HTML" ? a4.ownerDocument.body : a4).insertBefore(l6, u6) : (u6 = a4.nodeType === 9 ? a4.body : a4.nodeName === "HTML" ? a4.ownerDocument.body : a4, u6.appendChild(l6), a4 = a4._reactRootContainer, a4 != null || u6.onclick !== null || (u6.onclick = vf));
    else if (t !== 4 && (t === 27 && Yu2(l6.type) && (a4 = l6.stateNode, u6 = null), l6 = l6.child, l6 !== null)) for (Oc(l6, u6, a4), l6 = l6.sibling; l6 !== null; ) Oc(l6, u6, a4), l6 = l6.sibling;
  }
  function Zn2(l6, u6, a4) {
    var t = l6.tag;
    if (t === 5 || t === 6) l6 = l6.stateNode, u6 ? a4.insertBefore(l6, u6) : a4.appendChild(l6);
    else if (t !== 4 && (t === 27 && Yu2(l6.type) && (a4 = l6.stateNode), l6 = l6.child, l6 !== null)) for (Zn2(l6, u6, a4), l6 = l6.sibling; l6 !== null; ) Zn2(l6, u6, a4), l6 = l6.sibling;
  }
  function w1(l6) {
    var u6 = l6.stateNode, a4 = l6.memoizedProps;
    try {
      for (var t = l6.type, n2 = u6.attributes; n2.length; ) u6.removeAttributeNode(n2[0]);
      cl(u6, t, a4), u6[el2] = l6, u6[Sl2] = a4;
    } catch (f4) {
      x9(l6, l6.return, f4);
    }
  }
  var wl2 = false, w6 = false, Zf = false, Yi = typeof WeakSet == "function" ? WeakSet : Set, ll = null;
  function Hy(l6, u6) {
    if (l6 = l6.containerInfo, Yc = wn, l6 = X0(l6), rc(l6)) {
      if ("selectionStart" in l6) var a4 = {
        start: l6.selectionStart,
        end: l6.selectionEnd
      };
      else l: {
        a4 = (a4 = l6.ownerDocument) && a4.defaultView || window;
        var t = a4.getSelection && a4.getSelection();
        if (t && t.rangeCount !== 0) {
          a4 = t.anchorNode;
          var n2 = t.anchorOffset, f4 = t.focusNode;
          t = t.focusOffset;
          try {
            a4.nodeType, f4.nodeType;
          } catch {
            a4 = null;
            break l;
          }
          var c3 = 0, e = -1, i3 = -1, d4 = 0, g7 = 0, z7 = l6, S7 = null;
          u: for (; ; ) {
            for (var m6; z7 !== a4 || n2 !== 0 && z7.nodeType !== 3 || (e = c3 + n2), z7 !== f4 || t !== 0 && z7.nodeType !== 3 || (i3 = c3 + t), z7.nodeType === 3 && (c3 += z7.nodeValue.length), (m6 = z7.firstChild) !== null; ) S7 = z7, z7 = m6;
            for (; ; ) {
              if (z7 === l6) break u;
              if (S7 === a4 && ++d4 === n2 && (e = c3), S7 === f4 && ++g7 === t && (i3 = c3), (m6 = z7.nextSibling) !== null) break;
              z7 = S7, S7 = z7.parentNode;
            }
            z7 = m6;
          }
          a4 = e === -1 || i3 === -1 ? null : {
            start: e,
            end: i3
          };
        } else a4 = null;
      }
      a4 = a4 || {
        start: 0,
        end: 0
      };
    } else a4 = null;
    for (oc = {
      focusedElem: l6,
      selectionRange: a4
    }, wn = false, ll = u6; ll !== null; ) if (u6 = ll, l6 = u6.child, (u6.subtreeFlags & 1024) !== 0 && l6 !== null) l6.return = u6, ll = l6;
    else for (; ll !== null; ) {
      switch (u6 = ll, f4 = u6.alternate, l6 = u6.flags, u6.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l6 & 1024) !== 0 && f4 !== null) {
            l6 = void 0, a4 = u6, n2 = f4.memoizedProps, f4 = f4.memoizedState, t = a4.stateNode;
            try {
              var O5 = Wu(a4.type, n2, a4.elementType === a4.type);
              l6 = t.getSnapshotBeforeUpdate(O5, f4), t.__reactInternalSnapshotBeforeUpdate = l6;
            } catch (E11) {
              x9(a4, a4.return, E11);
            }
          }
          break;
        case 3:
          if ((l6 & 1024) !== 0) {
            if (l6 = u6.stateNode.containerInfo, a4 = l6.nodeType, a4 === 9) Xc(l6);
            else if (a4 === 1) switch (l6.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Xc(l6);
                break;
              default:
                l6.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l6 & 1024) !== 0) throw Error(A10(163));
      }
      if (l6 = u6.sibling, l6 !== null) {
        l6.return = u6.return, ll = l6;
        break;
      }
      ll = u6.return;
    }
  }
  function $1(l6, u6, a4) {
    var t = a4.flags;
    switch (a4.tag) {
      case 0:
      case 11:
      case 15:
        eu(l6, a4), t & 4 && xt3(5, a4);
        break;
      case 1:
        if (eu(l6, a4), t & 4) if (l6 = a4.stateNode, u6 === null) try {
          l6.componentDidMount();
        } catch (c3) {
          x9(a4, a4.return, c3);
        }
        else {
          var n2 = Wu(a4.type, u6.memoizedProps);
          u6 = u6.memoizedState;
          try {
            l6.componentDidUpdate(n2, u6, l6.__reactInternalSnapshotBeforeUpdate);
          } catch (c3) {
            x9(a4, a4.return, c3);
          }
        }
        t & 64 && L1(a4), t & 512 && et4(a4, a4.return);
        break;
      case 3:
        if (eu(l6, a4), t & 64 && (l6 = a4.updateQueue, l6 !== null)) {
          if (u6 = null, a4.child !== null) switch (a4.child.tag) {
            case 27:
            case 5:
              u6 = a4.child.stateNode;
              break;
            case 1:
              u6 = a4.child.stateNode;
          }
          try {
            F0(l6, u6);
          } catch (c3) {
            x9(a4, a4.return, c3);
          }
        }
        break;
      case 27:
        u6 === null && t & 4 && w1(a4);
      case 26:
      case 5:
        eu(l6, a4), u6 === null && t & 4 && J1(a4), t & 512 && et4(a4, a4.return);
        break;
      case 12:
        eu(l6, a4);
        break;
      case 13:
        eu(l6, a4), t & 4 && r1(l6, a4), t & 64 && (l6 = a4.memoizedState, l6 !== null && (l6 = l6.dehydrated, l6 !== null && (a4 = Gy.bind(null, a4), ry(l6, a4))));
        break;
      case 22:
        if (t = a4.memoizedState !== null || wl2, !t) {
          u6 = u6 !== null && u6.memoizedState !== null || w6, n2 = wl2;
          var f4 = w6;
          wl2 = t, (w6 = u6) && !f4 ? iu(l6, a4, (a4.subtreeFlags & 8772) !== 0) : eu(l6, a4), wl2 = n2, w6 = f4;
        }
        break;
      case 30:
        break;
      default:
        eu(l6, a4);
    }
  }
  function F12(l6) {
    var u6 = l6.alternate;
    u6 !== null && (l6.alternate = null, F12(u6)), l6.child = null, l6.deletions = null, l6.sibling = null, l6.tag === 5 && (u6 = l6.stateNode, u6 !== null && Jc(u6)), l6.stateNode = null, l6.return = null, l6.dependencies = null, l6.memoizedProps = null, l6.memoizedState = null, l6.pendingProps = null, l6.stateNode = null, l6.updateQueue = null;
  }
  var K6 = null, yl2 = false;
  function Wl(l6, u6, a4) {
    for (a4 = a4.child; a4 !== null; ) k1(l6, u6, a4), a4 = a4.sibling;
  }
  function k1(l6, u6, a4) {
    if (Tl2 && typeof Tl2.onCommitFiberUnmount == "function") try {
      Tl2.onCommitFiberUnmount(Nt2, a4);
    } catch {
    }
    switch (a4.tag) {
      case 26:
        w6 || xl2(a4, u6), Wl(l6, u6, a4), a4.memoizedState ? a4.memoizedState.count-- : a4.stateNode && (a4 = a4.stateNode, a4.parentNode.removeChild(a4));
        break;
      case 27:
        w6 || xl2(a4, u6);
        var t = K6, n2 = yl2;
        Yu2(a4.type) && (K6 = a4.stateNode, yl2 = false), Wl(l6, u6, a4), yt2(a4.stateNode), K6 = t, yl2 = n2;
        break;
      case 5:
        w6 || xl2(a4, u6);
      case 6:
        if (t = K6, n2 = yl2, K6 = null, Wl(l6, u6, a4), K6 = t, yl2 = n2, K6 !== null) if (yl2) try {
          (K6.nodeType === 9 ? K6.body : K6.nodeName === "HTML" ? K6.ownerDocument.body : K6).removeChild(a4.stateNode);
        } catch (f4) {
          x9(a4, u6, f4);
        }
        else try {
          K6.removeChild(a4.stateNode);
        } catch (f4) {
          x9(a4, u6, f4);
        }
        break;
      case 18:
        K6 !== null && (yl2 ? (l6 = K6, Ji(l6.nodeType === 9 ? l6.body : l6.nodeName === "HTML" ? l6.ownerDocument.body : l6, a4.stateNode), Ut2(l6)) : Ji(K6, a4.stateNode));
        break;
      case 4:
        t = K6, n2 = yl2, K6 = a4.stateNode.containerInfo, yl2 = true, Wl(l6, u6, a4), K6 = t, yl2 = n2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        w6 || qu(2, a4, u6), w6 || qu(4, a4, u6), Wl(l6, u6, a4);
        break;
      case 1:
        w6 || (xl2(a4, u6), t = a4.stateNode, typeof t.componentWillUnmount == "function" && p1(a4, u6, t)), Wl(l6, u6, a4);
        break;
      case 21:
        Wl(l6, u6, a4);
        break;
      case 22:
        w6 = (t = w6) || a4.memoizedState !== null, Wl(l6, u6, a4), w6 = t;
        break;
      default:
        Wl(l6, u6, a4);
    }
  }
  function r1(l6, u6) {
    if (u6.memoizedState === null && (l6 = u6.alternate, l6 !== null && (l6 = l6.memoizedState, l6 !== null && (l6 = l6.dehydrated, l6 !== null)))) try {
      Ut2(l6);
    } catch (a4) {
      x9(u6, u6.return, a4);
    }
  }
  function Ny(l6) {
    switch (l6.tag) {
      case 13:
      case 19:
        var u6 = l6.stateNode;
        return u6 === null && (u6 = l6.stateNode = new Yi()), u6;
      case 22:
        return l6 = l6.stateNode, u6 = l6._retryCache, u6 === null && (u6 = l6._retryCache = new Yi()), u6;
      default:
        throw Error(A10(435, l6.tag));
    }
  }
  function xf(l6, u6) {
    var a4 = Ny(l6);
    u6.forEach(function(t) {
      var n2 = Qy.bind(null, l6, t);
      a4.has(t) || (a4.add(t), t.then(n2, n2));
    });
  }
  function gl2(l6, u6) {
    var a4 = u6.deletions;
    if (a4 !== null) for (var t = 0; t < a4.length; t++) {
      var n2 = a4[t], f4 = l6, c3 = u6, e = c3;
      l: for (; e !== null; ) {
        switch (e.tag) {
          case 27:
            if (Yu2(e.type)) {
              K6 = e.stateNode, yl2 = false;
              break l;
            }
            break;
          case 5:
            K6 = e.stateNode, yl2 = false;
            break l;
          case 3:
          case 4:
            K6 = e.stateNode.containerInfo, yl2 = true;
            break l;
        }
        e = e.return;
      }
      if (K6 === null) throw Error(A10(160));
      k1(f4, c3, n2), K6 = null, yl2 = false, f4 = n2.alternate, f4 !== null && (f4.return = null), n2.return = null;
    }
    if (u6.subtreeFlags & 13878) for (u6 = u6.child; u6 !== null; ) I1(u6, l6), u6 = u6.sibling;
  }
  var _l2 = null;
  function I1(l6, u6) {
    var a4 = l6.alternate, t = l6.flags;
    switch (l6.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gl2(u6, l6), bl3(l6), t & 4 && (qu(3, l6, l6.return), xt3(3, l6), qu(5, l6, l6.return));
        break;
      case 1:
        gl2(u6, l6), bl3(l6), t & 512 && (w6 || a4 === null || xl2(a4, a4.return)), t & 64 && wl2 && (l6 = l6.updateQueue, l6 !== null && (t = l6.callbacks, t !== null && (a4 = l6.shared.hiddenCallbacks, l6.shared.hiddenCallbacks = a4 === null ? t : a4.concat(t))));
        break;
      case 26:
        var n2 = _l2;
        if (gl2(u6, l6), bl3(l6), t & 512 && (w6 || a4 === null || xl2(a4, a4.return)), t & 4) {
          var f4 = a4 !== null ? a4.memoizedState : null;
          if (t = l6.memoizedState, a4 === null) if (t === null) if (l6.stateNode === null) {
            l: {
              t = l6.type, a4 = l6.memoizedProps, n2 = n2.ownerDocument || n2;
              u: switch (t) {
                case "title":
                  f4 = n2.getElementsByTagName("title")[0], (!f4 || f4[Rt2] || f4[el2] || f4.namespaceURI === "http://www.w3.org/2000/svg" || f4.hasAttribute("itemprop")) && (f4 = n2.createElement(t), n2.head.insertBefore(f4, n2.querySelector("head > title"))), cl(f4, t, a4), f4[el2] = l6, ul2(f4), t = f4;
                  break l;
                case "link":
                  var c3 = ki("link", "href", n2).get(t + (a4.href || ""));
                  if (c3) {
                    for (var e = 0; e < c3.length; e++) if (f4 = c3[e], f4.getAttribute("href") === (a4.href == null || a4.href === "" ? null : a4.href) && f4.getAttribute("rel") === (a4.rel == null ? null : a4.rel) && f4.getAttribute("title") === (a4.title == null ? null : a4.title) && f4.getAttribute("crossorigin") === (a4.crossOrigin == null ? null : a4.crossOrigin)) {
                      c3.splice(e, 1);
                      break u;
                    }
                  }
                  f4 = n2.createElement(t), cl(f4, t, a4), n2.head.appendChild(f4);
                  break;
                case "meta":
                  if (c3 = ki("meta", "content", n2).get(t + (a4.content || ""))) {
                    for (e = 0; e < c3.length; e++) if (f4 = c3[e], f4.getAttribute("content") === (a4.content == null ? null : "" + a4.content) && f4.getAttribute("name") === (a4.name == null ? null : a4.name) && f4.getAttribute("property") === (a4.property == null ? null : a4.property) && f4.getAttribute("http-equiv") === (a4.httpEquiv == null ? null : a4.httpEquiv) && f4.getAttribute("charset") === (a4.charSet == null ? null : a4.charSet)) {
                      c3.splice(e, 1);
                      break u;
                    }
                  }
                  f4 = n2.createElement(t), cl(f4, t, a4), n2.head.appendChild(f4);
                  break;
                default:
                  throw Error(A10(468, t));
              }
              f4[el2] = l6, ul2(f4), t = f4;
            }
            l6.stateNode = t;
          } else ri2(n2, l6.type, l6.stateNode);
          else l6.stateNode = Fi(n2, t, l6.memoizedProps);
          else f4 !== t ? (f4 === null ? a4.stateNode !== null && (a4 = a4.stateNode, a4.parentNode.removeChild(a4)) : f4.count--, t === null ? ri2(n2, l6.type, l6.stateNode) : Fi(n2, t, l6.memoizedProps)) : t === null && l6.stateNode !== null && Gf(l6, l6.memoizedProps, a4.memoizedProps);
        }
        break;
      case 27:
        gl2(u6, l6), bl3(l6), t & 512 && (w6 || a4 === null || xl2(a4, a4.return)), a4 !== null && t & 4 && Gf(l6, l6.memoizedProps, a4.memoizedProps);
        break;
      case 5:
        if (gl2(u6, l6), bl3(l6), t & 512 && (w6 || a4 === null || xl2(a4, a4.return)), l6.flags & 32) {
          n2 = l6.stateNode;
          try {
            Ua3(n2, "");
          } catch (m6) {
            x9(l6, l6.return, m6);
          }
        }
        t & 4 && l6.stateNode != null && (n2 = l6.memoizedProps, Gf(l6, n2, a4 !== null ? a4.memoizedProps : n2)), t & 1024 && (Zf = true);
        break;
      case 6:
        if (gl2(u6, l6), bl3(l6), t & 4) {
          if (l6.stateNode === null) throw Error(A10(162));
          t = l6.memoizedProps, a4 = l6.stateNode;
          try {
            a4.nodeValue = t;
          } catch (m6) {
            x9(l6, l6.return, m6);
          }
        }
        break;
      case 3:
        if (zn = null, n2 = _l2, _l2 = pn(u6.containerInfo), gl2(u6, l6), _l2 = n2, bl3(l6), t & 4 && a4 !== null && a4.memoizedState.isDehydrated) try {
          Ut2(u6.containerInfo);
        } catch (m6) {
          x9(l6, l6.return, m6);
        }
        Zf && (Zf = false, P1(l6));
        break;
      case 4:
        t = _l2, _l2 = pn(l6.stateNode.containerInfo), gl2(u6, l6), bl3(l6), _l2 = t;
        break;
      case 12:
        gl2(u6, l6), bl3(l6);
        break;
      case 13:
        gl2(u6, l6), bl3(l6), l6.child.flags & 8192 && l6.memoizedState !== null != (a4 !== null && a4.memoizedState !== null) && (se4 = jl2()), t & 4 && (t = l6.updateQueue, t !== null && (l6.updateQueue = null, xf(l6, t)));
        break;
      case 22:
        n2 = l6.memoizedState !== null;
        var i3 = a4 !== null && a4.memoizedState !== null, d4 = wl2, g7 = w6;
        if (wl2 = d4 || n2, w6 = g7 || i3, gl2(u6, l6), w6 = g7, wl2 = d4, bl3(l6), t & 8192) l: for (u6 = l6.stateNode, u6._visibility = n2 ? u6._visibility & -2 : u6._visibility | 1, n2 && (a4 === null || i3 || wl2 || w6 || Gu(l6)), a4 = null, u6 = l6; ; ) {
          if (u6.tag === 5 || u6.tag === 26) {
            if (a4 === null) {
              i3 = a4 = u6;
              try {
                if (f4 = i3.stateNode, n2) c3 = f4.style, typeof c3.setProperty == "function" ? c3.setProperty("display", "none", "important") : c3.display = "none";
                else {
                  e = i3.stateNode;
                  var z7 = i3.memoizedProps.style, S7 = z7 != null && z7.hasOwnProperty("display") ? z7.display : null;
                  e.style.display = S7 == null || typeof S7 == "boolean" ? "" : ("" + S7).trim();
                }
              } catch (m6) {
                x9(i3, i3.return, m6);
              }
            }
          } else if (u6.tag === 6) {
            if (a4 === null) {
              i3 = u6;
              try {
                i3.stateNode.nodeValue = n2 ? "" : i3.memoizedProps;
              } catch (m6) {
                x9(i3, i3.return, m6);
              }
            }
          } else if ((u6.tag !== 22 && u6.tag !== 23 || u6.memoizedState === null || u6 === l6) && u6.child !== null) {
            u6.child.return = u6, u6 = u6.child;
            continue;
          }
          if (u6 === l6) break l;
          for (; u6.sibling === null; ) {
            if (u6.return === null || u6.return === l6) break l;
            a4 === u6 && (a4 = null), u6 = u6.return;
          }
          a4 === u6 && (a4 = null), u6.sibling.return = u6.return, u6 = u6.sibling;
        }
        t & 4 && (t = l6.updateQueue, t !== null && (a4 = t.retryQueue, a4 !== null && (t.retryQueue = null, xf(l6, a4))));
        break;
      case 19:
        gl2(u6, l6), bl3(l6), t & 4 && (t = l6.updateQueue, t !== null && (l6.updateQueue = null, xf(l6, t)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        gl2(u6, l6), bl3(l6);
    }
  }
  function bl3(l6) {
    var u6 = l6.flags;
    if (u6 & 2) {
      try {
        for (var a4, t = l6.return; t !== null; ) {
          if (W1(t)) {
            a4 = t;
            break;
          }
          t = t.return;
        }
        if (a4 == null) throw Error(A10(160));
        switch (a4.tag) {
          case 27:
            var n2 = a4.stateNode, f4 = Qf(l6);
            Zn2(l6, f4, n2);
            break;
          case 5:
            var c3 = a4.stateNode;
            a4.flags & 32 && (Ua3(c3, ""), a4.flags &= -33);
            var e = Qf(l6);
            Zn2(l6, e, c3);
            break;
          case 3:
          case 4:
            var i3 = a4.stateNode.containerInfo, d4 = Qf(l6);
            Oc(l6, d4, i3);
            break;
          default:
            throw Error(A10(161));
        }
      } catch (g7) {
        x9(l6, l6.return, g7);
      }
      l6.flags &= -3;
    }
    u6 & 4096 && (l6.flags &= -4097);
  }
  function P1(l6) {
    if (l6.subtreeFlags & 1024) for (l6 = l6.child; l6 !== null; ) {
      var u6 = l6;
      P1(u6), u6.tag === 5 && u6.flags & 1024 && u6.stateNode.reset(), l6 = l6.sibling;
    }
  }
  function eu(l6, u6) {
    if (u6.subtreeFlags & 8772) for (u6 = u6.child; u6 !== null; ) $1(l6, u6.alternate, u6), u6 = u6.sibling;
  }
  function Gu(l6) {
    for (l6 = l6.child; l6 !== null; ) {
      var u6 = l6;
      switch (u6.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qu(4, u6, u6.return), Gu(u6);
          break;
        case 1:
          xl2(u6, u6.return);
          var a4 = u6.stateNode;
          typeof a4.componentWillUnmount == "function" && p1(u6, u6.return, a4), Gu(u6);
          break;
        case 27:
          yt2(u6.stateNode);
        case 26:
        case 5:
          xl2(u6, u6.return), Gu(u6);
          break;
        case 22:
          u6.memoizedState === null && Gu(u6);
          break;
        case 30:
          Gu(u6);
          break;
        default:
          Gu(u6);
      }
      l6 = l6.sibling;
    }
  }
  function iu(l6, u6, a4) {
    for (a4 = a4 && (u6.subtreeFlags & 8772) !== 0, u6 = u6.child; u6 !== null; ) {
      var t = u6.alternate, n2 = l6, f4 = u6, c3 = f4.flags;
      switch (f4.tag) {
        case 0:
        case 11:
        case 15:
          iu(n2, f4, a4), xt3(4, f4);
          break;
        case 1:
          if (iu(n2, f4, a4), t = f4, n2 = t.stateNode, typeof n2.componentDidMount == "function") try {
            n2.componentDidMount();
          } catch (d4) {
            x9(t, t.return, d4);
          }
          if (t = f4, n2 = t.updateQueue, n2 !== null) {
            var e = t.stateNode;
            try {
              var i3 = n2.shared.hiddenCallbacks;
              if (i3 !== null) for (n2.shared.hiddenCallbacks = null, n2 = 0; n2 < i3.length; n2++) $0(i3[n2], e);
            } catch (d4) {
              x9(t, t.return, d4);
            }
          }
          a4 && c3 & 64 && L1(f4), et4(f4, f4.return);
          break;
        case 27:
          w1(f4);
        case 26:
        case 5:
          iu(n2, f4, a4), a4 && t === null && c3 & 4 && J1(f4), et4(f4, f4.return);
          break;
        case 12:
          iu(n2, f4, a4);
          break;
        case 13:
          iu(n2, f4, a4), a4 && c3 & 4 && r1(n2, f4);
          break;
        case 22:
          f4.memoizedState === null && iu(n2, f4, a4), et4(f4, f4.return);
          break;
        case 30:
          break;
        default:
          iu(n2, f4, a4);
      }
      u6 = u6.sibling;
    }
  }
  function Me6(l6, u6) {
    var a4 = null;
    l6 !== null && l6.memoizedState !== null && l6.memoizedState.cachePool !== null && (a4 = l6.memoizedState.cachePool.pool), l6 = null, u6.memoizedState !== null && u6.memoizedState.cachePool !== null && (l6 = u6.memoizedState.cachePool.pool), l6 !== a4 && (l6 != null && l6.refCount++, a4 != null && Xt2(a4));
  }
  function Ee4(l6, u6) {
    l6 = null, u6.alternate !== null && (l6 = u6.alternate.memoizedState.cache), u6 = u6.memoizedState.cache, u6 !== l6 && (u6.refCount++, l6 != null && Xt2(l6));
  }
  function Ql(l6, u6, a4, t) {
    if (u6.subtreeFlags & 10256) for (u6 = u6.child; u6 !== null; ) lv(l6, u6, a4, t), u6 = u6.sibling;
  }
  function lv(l6, u6, a4, t) {
    var n2 = u6.flags;
    switch (u6.tag) {
      case 0:
      case 11:
      case 15:
        Ql(l6, u6, a4, t), n2 & 2048 && xt3(9, u6);
        break;
      case 1:
        Ql(l6, u6, a4, t);
        break;
      case 3:
        Ql(l6, u6, a4, t), n2 & 2048 && (l6 = null, u6.alternate !== null && (l6 = u6.alternate.memoizedState.cache), u6 = u6.memoizedState.cache, u6 !== l6 && (u6.refCount++, l6 != null && Xt2(l6)));
        break;
      case 12:
        if (n2 & 2048) {
          Ql(l6, u6, a4, t), l6 = u6.stateNode;
          try {
            var f4 = u6.memoizedProps, c3 = f4.id, e = f4.onPostCommit;
            typeof e == "function" && e(c3, u6.alternate === null ? "mount" : "update", l6.passiveEffectDuration, -0);
          } catch (i3) {
            x9(u6, u6.return, i3);
          }
        } else Ql(l6, u6, a4, t);
        break;
      case 13:
        Ql(l6, u6, a4, t);
        break;
      case 23:
        break;
      case 22:
        f4 = u6.stateNode, c3 = u6.alternate, u6.memoizedState !== null ? f4._visibility & 2 ? Ql(l6, u6, a4, t) : it2(l6, u6) : f4._visibility & 2 ? Ql(l6, u6, a4, t) : (f4._visibility |= 2, ua(l6, u6, a4, t, (u6.subtreeFlags & 10256) !== 0)), n2 & 2048 && Me6(c3, u6);
        break;
      case 24:
        Ql(l6, u6, a4, t), n2 & 2048 && Ee4(u6.alternate, u6);
        break;
      default:
        Ql(l6, u6, a4, t);
    }
  }
  function ua(l6, u6, a4, t, n2) {
    for (n2 = n2 && (u6.subtreeFlags & 10256) !== 0, u6 = u6.child; u6 !== null; ) {
      var f4 = l6, c3 = u6, e = a4, i3 = t, d4 = c3.flags;
      switch (c3.tag) {
        case 0:
        case 11:
        case 15:
          ua(f4, c3, e, i3, n2), xt3(8, c3);
          break;
        case 23:
          break;
        case 22:
          var g7 = c3.stateNode;
          c3.memoizedState !== null ? g7._visibility & 2 ? ua(f4, c3, e, i3, n2) : it2(f4, c3) : (g7._visibility |= 2, ua(f4, c3, e, i3, n2)), n2 && d4 & 2048 && Me6(c3.alternate, c3);
          break;
        case 24:
          ua(f4, c3, e, i3, n2), n2 && d4 & 2048 && Ee4(c3.alternate, c3);
          break;
        default:
          ua(f4, c3, e, i3, n2);
      }
      u6 = u6.sibling;
    }
  }
  function it2(l6, u6) {
    if (u6.subtreeFlags & 10256) for (u6 = u6.child; u6 !== null; ) {
      var a4 = l6, t = u6, n2 = t.flags;
      switch (t.tag) {
        case 22:
          it2(a4, t), n2 & 2048 && Me6(t.alternate, t);
          break;
        case 24:
          it2(a4, t), n2 & 2048 && Ee4(t.alternate, t);
          break;
        default:
          it2(a4, t);
      }
      u6 = u6.sibling;
    }
  }
  var ra = 8192;
  function Iu(l6) {
    if (l6.subtreeFlags & ra) for (l6 = l6.child; l6 !== null; ) uv(l6), l6 = l6.sibling;
  }
  function uv(l6) {
    switch (l6.tag) {
      case 26:
        Iu(l6), l6.flags & ra && l6.memoizedState !== null && hd(_l2, l6.memoizedState, l6.memoizedProps);
        break;
      case 5:
        Iu(l6);
        break;
      case 3:
      case 4:
        var u6 = _l2;
        _l2 = pn(l6.stateNode.containerInfo), Iu(l6), _l2 = u6;
        break;
      case 22:
        l6.memoizedState === null && (u6 = l6.alternate, u6 !== null && u6.memoizedState !== null ? (u6 = ra, ra = 16777216, Iu(l6), ra = u6) : Iu(l6));
        break;
      default:
        Iu(l6);
    }
  }
  function av(l6) {
    var u6 = l6.alternate;
    if (u6 !== null && (l6 = u6.child, l6 !== null)) {
      u6.child = null;
      do
        u6 = l6.sibling, l6.sibling = null, l6 = u6;
      while (l6 !== null);
    }
  }
  function Ja(l6) {
    var u6 = l6.deletions;
    if ((l6.flags & 16) !== 0) {
      if (u6 !== null) for (var a4 = 0; a4 < u6.length; a4++) {
        var t = u6[a4];
        ll = t, nv(t, l6);
      }
      av(l6);
    }
    if (l6.subtreeFlags & 10256) for (l6 = l6.child; l6 !== null; ) tv(l6), l6 = l6.sibling;
  }
  function tv(l6) {
    switch (l6.tag) {
      case 0:
      case 11:
      case 15:
        Ja(l6), l6.flags & 2048 && qu(9, l6, l6.return);
        break;
      case 3:
        Ja(l6);
        break;
      case 12:
        Ja(l6);
        break;
      case 22:
        var u6 = l6.stateNode;
        l6.memoizedState !== null && u6._visibility & 2 && (l6.return === null || l6.return.tag !== 13) ? (u6._visibility &= -3, gn2(l6)) : Ja(l6);
        break;
      default:
        Ja(l6);
    }
  }
  function gn2(l6) {
    var u6 = l6.deletions;
    if ((l6.flags & 16) !== 0) {
      if (u6 !== null) for (var a4 = 0; a4 < u6.length; a4++) {
        var t = u6[a4];
        ll = t, nv(t, l6);
      }
      av(l6);
    }
    for (l6 = l6.child; l6 !== null; ) {
      switch (u6 = l6, u6.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, u6, u6.return), gn2(u6);
          break;
        case 22:
          a4 = u6.stateNode, a4._visibility & 2 && (a4._visibility &= -3, gn2(u6));
          break;
        default:
          gn2(u6);
      }
      l6 = l6.sibling;
    }
  }
  function nv(l6, u6) {
    for (; ll !== null; ) {
      var a4 = ll;
      switch (a4.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, a4, u6);
          break;
        case 23:
        case 22:
          if (a4.memoizedState !== null && a4.memoizedState.cachePool !== null) {
            var t = a4.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          Xt2(a4.memoizedState.cache);
      }
      if (t = a4.child, t !== null) t.return = a4, ll = t;
      else l: for (a4 = l6; ll !== null; ) {
        t = ll;
        var n2 = t.sibling, f4 = t.return;
        if (F12(t), t === a4) {
          ll = null;
          break l;
        }
        if (n2 !== null) {
          n2.return = f4, ll = n2;
          break l;
        }
        ll = f4;
      }
    }
  }
  var qy = {
    getCacheForType: function(l6) {
      var u6 = il(k9), a4 = u6.data.get(l6);
      return a4 === void 0 && (a4 = l6(), u6.data.set(l6, a4)), a4;
    }
  }, By = typeof WeakMap == "function" ? WeakMap : Map, X5 = 0, V6 = null, q10 = null, B6 = 0, _5 = 0, zl2 = null, zu = false, Za2 = false, De4 = false, nu = 0, J4 = 0, Bu2 = 0, Ku2 = 0, Oe4 = 0, Rl2 = 0, Ra2 = 0, vt2 = null, dl2 = null, sc = false, se4 = 0, xn2 = 1 / 0, Vn = null, Du = null, fl2 = 0, Ou = null, Ya2 = null, Da = 0, Uc = 0, Hc = null, fv = null, ht3 = 0, Nc = null;
  function El2() {
    if ((X5 & 2) !== 0 && B6 !== 0) return B6 & -B6;
    if (s2.T !== null) {
      var l6 = Ha2;
      return l6 !== 0 ? l6 : He4();
    }
    return b0();
  }
  function cv() {
    Rl2 === 0 && (Rl2 = (B6 & 536870912) === 0 || Y5 ? d0() : 536870912);
    var l6 = Yl2.current;
    return l6 !== null && (l6.flags |= 32), Rl2;
  }
  function Dl3(l6, u6, a4) {
    (l6 === V6 && (_5 === 2 || _5 === 9) || l6.cancelPendingCommit !== null) && (oa(l6, 0), Au(l6, B6, Rl2, false)), Bt3(l6, a4), ((X5 & 2) === 0 || l6 !== V6) && (l6 === V6 && ((X5 & 2) === 0 && (Ku2 |= a4), J4 === 4 && Au(l6, B6, Rl2, false)), Ll3(l6));
  }
  function ev(l6, u6, a4) {
    if ((X5 & 6) !== 0) throw Error(A10(327));
    var t = !a4 && (u6 & 124) === 0 && (u6 & l6.expiredLanes) === 0 || qt3(l6, u6), n2 = t ? oy(l6, u6) : Vf(l6, u6, true), f4 = t;
    do {
      if (n2 === 0) {
        Za2 && !t && Au(l6, u6, 0, false);
        break;
      } else {
        if (a4 = l6.current.alternate, f4 && !Ry(a4)) {
          n2 = Vf(l6, u6, false), f4 = false;
          continue;
        }
        if (n2 === 2) {
          if (f4 = u6, l6.errorRecoveryDisabledLanes & f4) var c3 = 0;
          else c3 = l6.pendingLanes & -536870913, c3 = c3 !== 0 ? c3 : c3 & 536870912 ? 536870912 : 0;
          if (c3 !== 0) {
            u6 = c3;
            l: {
              var e = l6;
              n2 = vt2;
              var i3 = e.current.memoizedState.isDehydrated;
              if (i3 && (oa(e, c3).flags |= 256), c3 = Vf(e, c3, false), c3 !== 2) {
                if (De4 && !i3) {
                  e.errorRecoveryDisabledLanes |= f4, Ku2 |= f4, n2 = 4;
                  break l;
                }
                f4 = dl2, dl2 = n2, f4 !== null && (dl2 === null ? dl2 = f4 : dl2.push.apply(dl2, f4));
              }
              n2 = c3;
            }
            if (f4 = false, n2 !== 2) continue;
          }
        }
        if (n2 === 1) {
          oa(l6, 0), Au(l6, u6, 0, true);
          break;
        }
        l: {
          switch (t = l6, f4 = n2, f4) {
            case 0:
            case 1:
              throw Error(A10(345));
            case 4:
              if ((u6 & 4194048) !== u6) break;
            case 6:
              Au(t, u6, Rl2, !zu);
              break l;
            case 2:
              dl2 = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(A10(329));
          }
          if ((u6 & 62914560) === u6 && (n2 = se4 + 300 - jl2(), 10 < n2)) {
            if (Au(t, u6, Rl2, !zu), Fn(t, 0, true) !== 0) break l;
            t.timeoutHandle = Hv(oi3.bind(null, t, a4, dl2, Vn, sc, u6, Rl2, Ku2, Ra2, zu, f4, 2, -0, 0), n2);
            break l;
          }
          oi3(t, a4, dl2, Vn, sc, u6, Rl2, Ku2, Ra2, zu, f4, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Ll3(l6);
  }
  function oi3(l6, u6, a4, t, n2, f4, c3, e, i3, d4, g7, z7, S7, m6) {
    if (l6.timeoutHandle = -1, z7 = u6.subtreeFlags, (z7 & 8192 || (z7 & 16785408) === 16785408) && (Et3 = {
      stylesheets: null,
      count: 0,
      unsuspend: vd
    }, uv(u6), z7 = yd(), z7 !== null)) {
      l6.cancelPendingCommit = z7(Xi3.bind(null, l6, u6, f4, a4, t, n2, c3, e, i3, g7, 1, S7, m6)), Au(l6, f4, c3, !d4);
      return;
    }
    Xi3(l6, u6, f4, a4, t, n2, c3, e, i3);
  }
  function Ry(l6) {
    for (var u6 = l6; ; ) {
      var a4 = u6.tag;
      if ((a4 === 0 || a4 === 11 || a4 === 15) && u6.flags & 16384 && (a4 = u6.updateQueue, a4 !== null && (a4 = a4.stores, a4 !== null))) for (var t = 0; t < a4.length; t++) {
        var n2 = a4[t], f4 = n2.getSnapshot;
        n2 = n2.value;
        try {
          if (!Ol3(f4(), n2)) return false;
        } catch {
          return false;
        }
      }
      if (a4 = u6.child, u6.subtreeFlags & 16384 && a4 !== null) a4.return = u6, u6 = a4;
      else {
        if (u6 === l6) break;
        for (; u6.sibling === null; ) {
          if (u6.return === null || u6.return === l6) return true;
          u6 = u6.return;
        }
        u6.sibling.return = u6.return, u6 = u6.sibling;
      }
    }
    return true;
  }
  function Au(l6, u6, a4, t) {
    u6 &= ~Oe4, u6 &= ~Ku2, l6.suspendedLanes |= u6, l6.pingedLanes &= ~u6, t && (l6.warmLanes |= u6), t = l6.expirationTimes;
    for (var n2 = u6; 0 < n2; ) {
      var f4 = 31 - Ml3(n2), c3 = 1 << f4;
      t[f4] = -1, n2 &= ~c3;
    }
    a4 !== 0 && m0(l6, a4, u6);
  }
  function ff() {
    return (X5 & 6) === 0 ? (Vt3(0, false), false) : true;
  }
  function Ue5() {
    if (q10 !== null) {
      if (_5 === 0) var l6 = q10.return;
      else l6 = q10, rl = ku2 = null, ye5(l6), Ea2 = null, At2 = 0, l6 = q10;
      for (; l6 !== null; ) C1(l6.alternate, l6), l6 = l6.return;
      q10 = null;
    }
  }
  function oa(l6, u6) {
    var a4 = l6.timeoutHandle;
    a4 !== -1 && (l6.timeoutHandle = -1, Wy(a4)), a4 = l6.cancelPendingCommit, a4 !== null && (l6.cancelPendingCommit = null, a4()), Ue5(), V6 = l6, q10 = a4 = Pl2(l6.current, null), B6 = u6, _5 = 0, zl2 = null, zu = false, Za2 = qt3(l6, u6), De4 = false, Ra2 = Rl2 = Oe4 = Ku2 = Bu2 = J4 = 0, dl2 = vt2 = null, sc = false, (u6 & 8) !== 0 && (u6 |= u6 & 32);
    var t = l6.entangledLanes;
    if (t !== 0) for (l6 = l6.entanglements, t &= u6; 0 < t; ) {
      var n2 = 31 - Ml3(t), f4 = 1 << n2;
      u6 |= l6[n2], t &= ~f4;
    }
    return nu = u6, Pn2(), a4;
  }
  function iv(l6, u6) {
    U4 = null, s2.H = on4, u6 === Gt3 || u6 === uf ? (u6 = hi2(), _5 = 3) : u6 === W0 ? (u6 = hi2(), _5 = 4) : _5 = u6 === Q1 ? 8 : u6 !== null && typeof u6 == "object" && typeof u6.then == "function" ? 6 : 1, zl2 = u6, q10 === null && (J4 = 1, Gn2(l6, Bl2(u6, l6.current)));
  }
  function vv() {
    var l6 = s2.H;
    return s2.H = on4, l6 === null ? on4 : l6;
  }
  function hv() {
    var l6 = s2.A;
    return s2.A = qy, l6;
  }
  function qc() {
    J4 = 4, zu || (B6 & 4194048) !== B6 && Yl2.current !== null || (Za2 = true), (Bu2 & 134217727) === 0 && (Ku2 & 134217727) === 0 || V6 === null || Au(V6, B6, Rl2, false);
  }
  function Vf(l6, u6, a4) {
    var t = X5;
    X5 |= 2;
    var n2 = vv(), f4 = hv();
    (V6 !== l6 || B6 !== u6) && (Vn = null, oa(l6, u6)), u6 = false;
    var c3 = J4;
    l: do
      try {
        if (_5 !== 0 && q10 !== null) {
          var e = q10, i3 = zl2;
          switch (_5) {
            case 8:
              Ue5(), c3 = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Yl2.current === null && (u6 = true);
              var d4 = _5;
              if (_5 = 0, zl2 = null, ma(l6, e, i3, d4), a4 && Za2) {
                c3 = 0;
                break l;
              }
              break;
            default:
              d4 = _5, _5 = 0, zl2 = null, ma(l6, e, i3, d4);
          }
        }
        Yy(), c3 = J4;
        break;
      } catch (g7) {
        iv(l6, g7);
      }
    while (true);
    return u6 && l6.shellSuspendCounter++, rl = ku2 = null, X5 = t, s2.H = n2, s2.A = f4, q10 === null && (V6 = null, B6 = 0, Pn2()), c3;
  }
  function Yy() {
    for (; q10 !== null; ) yv(q10);
  }
  function oy(l6, u6) {
    var a4 = X5;
    X5 |= 2;
    var t = vv(), n2 = hv();
    V6 !== l6 || B6 !== u6 ? (Vn = null, xn2 = jl2() + 500, oa(l6, u6)) : Za2 = qt3(l6, u6);
    l: do
      try {
        if (_5 !== 0 && q10 !== null) {
          u6 = q10;
          var f4 = zl2;
          u: switch (_5) {
            case 1:
              _5 = 0, zl2 = null, ma(l6, u6, f4, 1);
              break;
            case 2:
            case 9:
              if (vi3(f4)) {
                _5 = 0, zl2 = null, _i(u6);
                break;
              }
              u6 = function() {
                _5 !== 2 && _5 !== 9 || V6 !== l6 || (_5 = 7), Ll3(l6);
              }, f4.then(u6, u6);
              break l;
            case 3:
              _5 = 7;
              break l;
            case 4:
              _5 = 5;
              break l;
            case 7:
              vi3(f4) ? (_5 = 0, zl2 = null, _i(u6)) : (_5 = 0, zl2 = null, ma(l6, u6, f4, 7));
              break;
            case 5:
              var c3 = null;
              switch (q10.tag) {
                case 26:
                  c3 = q10.memoizedState;
                case 5:
                case 27:
                  var e = q10;
                  if (!c3 || Rv(c3)) {
                    _5 = 0, zl2 = null;
                    var i3 = e.sibling;
                    if (i3 !== null) q10 = i3;
                    else {
                      var d4 = e.return;
                      d4 !== null ? (q10 = d4, cf(d4)) : q10 = null;
                    }
                    break u;
                  }
              }
              _5 = 0, zl2 = null, ma(l6, u6, f4, 5);
              break;
            case 6:
              _5 = 0, zl2 = null, ma(l6, u6, f4, 6);
              break;
            case 8:
              Ue5(), J4 = 6;
              break l;
            default:
              throw Error(A10(462));
          }
        }
        _y();
        break;
      } catch (g7) {
        iv(l6, g7);
      }
    while (true);
    return rl = ku2 = null, s2.H = t, s2.A = n2, X5 = a4, q10 !== null ? 0 : (V6 = null, B6 = 0, Pn2(), J4);
  }
  function _y() {
    for (; q10 !== null && !uh(); ) yv(q10);
  }
  function yv(l6) {
    var u6 = K1(l6.alternate, l6, nu);
    l6.memoizedProps = l6.pendingProps, u6 === null ? cf(l6) : q10 = u6;
  }
  function _i(l6) {
    var u6 = l6, a4 = u6.alternate;
    switch (u6.tag) {
      case 15:
      case 0:
        u6 = Hi(a4, u6, u6.pendingProps, u6.type, void 0, B6);
        break;
      case 11:
        u6 = Hi(a4, u6, u6.pendingProps, u6.type.render, u6.ref, B6);
        break;
      case 5:
        ye5(u6);
      default:
        C1(a4, u6), u6 = q10 = C0(u6, nu), u6 = K1(a4, u6, nu);
    }
    l6.memoizedProps = l6.pendingProps, u6 === null ? cf(l6) : q10 = u6;
  }
  function ma(l6, u6, a4, t) {
    rl = ku2 = null, ye5(u6), Ea2 = null, At2 = 0;
    var n2 = u6.return;
    try {
      if (Dy(l6, n2, u6, a4, B6)) {
        J4 = 1, Gn2(l6, Bl2(a4, l6.current)), q10 = null;
        return;
      }
    } catch (f4) {
      if (n2 !== null) throw q10 = n2, f4;
      J4 = 1, Gn2(l6, Bl2(a4, l6.current)), q10 = null;
      return;
    }
    u6.flags & 32768 ? (Y5 || t === 1 ? l6 = true : Za2 || (B6 & 536870912) !== 0 ? l6 = false : (zu = l6 = true, (t === 2 || t === 9 || t === 3 || t === 6) && (t = Yl2.current, t !== null && t.tag === 13 && (t.flags |= 16384))), dv(u6, l6)) : cf(u6);
  }
  function cf(l6) {
    var u6 = l6;
    do {
      if ((u6.flags & 32768) !== 0) {
        dv(u6, zu);
        return;
      }
      l6 = u6.return;
      var a4 = sy(u6.alternate, u6, nu);
      if (a4 !== null) {
        q10 = a4;
        return;
      }
      if (u6 = u6.sibling, u6 !== null) {
        q10 = u6;
        return;
      }
      q10 = u6 = l6;
    } while (u6 !== null);
    J4 === 0 && (J4 = 5);
  }
  function dv(l6, u6) {
    do {
      var a4 = Uy(l6.alternate, l6);
      if (a4 !== null) {
        a4.flags &= 32767, q10 = a4;
        return;
      }
      if (a4 = l6.return, a4 !== null && (a4.flags |= 32768, a4.subtreeFlags = 0, a4.deletions = null), !u6 && (l6 = l6.sibling, l6 !== null)) {
        q10 = l6;
        return;
      }
      q10 = l6 = a4;
    } while (l6 !== null);
    J4 = 6, q10 = null;
  }
  function Xi3(l6, u6, a4, t, n2, f4, c3, e, i3) {
    l6.cancelPendingCommit = null;
    do
      ef();
    while (fl2 !== 0);
    if ((X5 & 6) !== 0) throw Error(A10(327));
    if (u6 !== null) {
      if (u6 === l6.current) throw Error(A10(177));
      if (f4 = u6.lanes | u6.childLanes, f4 |= Ic, yh(l6, a4, f4, c3, e, i3), l6 === V6 && (q10 = V6 = null, B6 = 0), Ya2 = u6, Ou = l6, Da = a4, Uc = f4, Hc = n2, fv = t, (u6.subtreeFlags & 10256) !== 0 || (u6.flags & 10256) !== 0 ? (l6.callbackNode = null, l6.callbackPriority = 0, Zy(Dn, function() {
        return zv(true), null;
      })) : (l6.callbackNode = null, l6.callbackPriority = 0), t = (u6.flags & 13878) !== 0, (u6.subtreeFlags & 13878) !== 0 || t) {
        t = s2.T, s2.T = null, n2 = o4.p, o4.p = 2, c3 = X5, X5 |= 4;
        try {
          Hy(l6, u6, a4);
        } finally {
          X5 = c3, o4.p = n2, s2.T = t;
        }
      }
      fl2 = 1, Sv(), mv(), gv();
    }
  }
  function Sv() {
    if (fl2 === 1) {
      fl2 = 0;
      var l6 = Ou, u6 = Ya2, a4 = (u6.flags & 13878) !== 0;
      if ((u6.subtreeFlags & 13878) !== 0 || a4) {
        a4 = s2.T, s2.T = null;
        var t = o4.p;
        o4.p = 2;
        var n2 = X5;
        X5 |= 4;
        try {
          I1(u6, l6);
          var f4 = oc, c3 = X0(l6.containerInfo), e = f4.focusedElem, i3 = f4.selectionRange;
          if (c3 !== e && e && e.ownerDocument && _0(e.ownerDocument.documentElement, e)) {
            if (i3 !== null && rc(e)) {
              var d4 = i3.start, g7 = i3.end;
              if (g7 === void 0 && (g7 = d4), "selectionStart" in e) e.selectionStart = d4, e.selectionEnd = Math.min(g7, e.value.length);
              else {
                var z7 = e.ownerDocument || document, S7 = z7 && z7.defaultView || window;
                if (S7.getSelection) {
                  var m6 = S7.getSelection(), O5 = e.textContent.length, E11 = Math.min(i3.start, O5), G7 = i3.end === void 0 ? E11 : Math.min(i3.end, O5);
                  !m6.extend && E11 > G7 && (c3 = G7, G7 = E11, E11 = c3);
                  var h4 = ui3(e, E11), v8 = ui3(e, G7);
                  if (h4 && v8 && (m6.rangeCount !== 1 || m6.anchorNode !== h4.node || m6.anchorOffset !== h4.offset || m6.focusNode !== v8.node || m6.focusOffset !== v8.offset)) {
                    var y7 = z7.createRange();
                    y7.setStart(h4.node, h4.offset), m6.removeAllRanges(), E11 > G7 ? (m6.addRange(y7), m6.extend(v8.node, v8.offset)) : (y7.setEnd(v8.node, v8.offset), m6.addRange(y7));
                  }
                }
              }
            }
            for (z7 = [], m6 = e; m6 = m6.parentNode; ) m6.nodeType === 1 && z7.push({
              element: m6,
              left: m6.scrollLeft,
              top: m6.scrollTop
            });
            for (typeof e.focus == "function" && e.focus(), e = 0; e < z7.length; e++) {
              var b10 = z7[e];
              b10.element.scrollLeft = b10.left, b10.element.scrollTop = b10.top;
            }
          }
          wn = !!Yc, oc = Yc = null;
        } finally {
          X5 = n2, o4.p = t, s2.T = a4;
        }
      }
      l6.current = u6, fl2 = 2;
    }
  }
  function mv() {
    if (fl2 === 2) {
      fl2 = 0;
      var l6 = Ou, u6 = Ya2, a4 = (u6.flags & 8772) !== 0;
      if ((u6.subtreeFlags & 8772) !== 0 || a4) {
        a4 = s2.T, s2.T = null;
        var t = o4.p;
        o4.p = 2;
        var n2 = X5;
        X5 |= 4;
        try {
          $1(l6, u6.alternate, u6);
        } finally {
          X5 = n2, o4.p = t, s2.T = a4;
        }
      }
      fl2 = 3;
    }
  }
  function gv() {
    if (fl2 === 4 || fl2 === 3) {
      fl2 = 0, ah();
      var l6 = Ou, u6 = Ya2, a4 = Da, t = fv;
      (u6.subtreeFlags & 10256) !== 0 || (u6.flags & 10256) !== 0 ? fl2 = 5 : (fl2 = 0, Ya2 = Ou = null, bv(l6, l6.pendingLanes));
      var n2 = l6.pendingLanes;
      if (n2 === 0 && (Du = null), pc(a4), u6 = u6.stateNode, Tl2 && typeof Tl2.onCommitFiberRoot == "function") try {
        Tl2.onCommitFiberRoot(Nt2, u6, void 0, (u6.current.flags & 128) === 128);
      } catch {
      }
      if (t !== null) {
        u6 = s2.T, n2 = o4.p, o4.p = 2, s2.T = null;
        try {
          for (var f4 = l6.onRecoverableError, c3 = 0; c3 < t.length; c3++) {
            var e = t[c3];
            f4(e.value, {
              componentStack: e.stack
            });
          }
        } finally {
          s2.T = u6, o4.p = n2;
        }
      }
      (Da & 3) !== 0 && ef(), Ll3(l6), n2 = l6.pendingLanes, (a4 & 4194090) !== 0 && (n2 & 42) !== 0 ? l6 === Nc ? ht3++ : (ht3 = 0, Nc = l6) : ht3 = 0, Vt3(0, false);
    }
  }
  function bv(l6, u6) {
    (l6.pooledCacheLanes &= u6) === 0 && (u6 = l6.pooledCache, u6 != null && (l6.pooledCache = null, Xt2(u6)));
  }
  function ef(l6) {
    return Sv(), mv(), gv(), zv(l6);
  }
  function zv() {
    if (fl2 !== 5) return false;
    var l6 = Ou, u6 = Uc;
    Uc = 0;
    var a4 = pc(Da), t = s2.T, n2 = o4.p;
    try {
      o4.p = 32 > a4 ? 32 : a4, s2.T = null, a4 = Hc, Hc = null;
      var f4 = Ou, c3 = Da;
      if (fl2 = 0, Ya2 = Ou = null, Da = 0, (X5 & 6) !== 0) throw Error(A10(331));
      var e = X5;
      if (X5 |= 4, tv(f4.current), lv(f4, f4.current, c3, a4), X5 = e, Vt3(0, false), Tl2 && typeof Tl2.onPostCommitFiberRoot == "function") try {
        Tl2.onPostCommitFiberRoot(Nt2, f4);
      } catch {
      }
      return true;
    } finally {
      o4.p = n2, s2.T = t, bv(l6, u6);
    }
  }
  function Gi2(l6, u6, a4) {
    u6 = Bl2(a4, u6), u6 = Mc(l6.stateNode, u6, 2), l6 = Eu(l6, u6, 2), l6 !== null && (Bt3(l6, 2), Ll3(l6));
  }
  function x9(l6, u6, a4) {
    if (l6.tag === 3) Gi2(l6, l6, a4);
    else for (; u6 !== null; ) {
      if (u6.tag === 3) {
        Gi2(u6, l6, a4);
        break;
      } else if (u6.tag === 1) {
        var t = u6.stateNode;
        if (typeof u6.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (Du === null || !Du.has(t))) {
          l6 = Bl2(a4, l6), a4 = X1(2), t = Eu(u6, a4, 2), t !== null && (G1(a4, t, u6, l6), Bt3(t, 2), Ll3(t));
          break;
        }
      }
      u6 = u6.return;
    }
  }
  function jf(l6, u6, a4) {
    var t = l6.pingCache;
    if (t === null) {
      t = l6.pingCache = new By();
      var n2 = /* @__PURE__ */ new Set();
      t.set(u6, n2);
    } else n2 = t.get(u6), n2 === void 0 && (n2 = /* @__PURE__ */ new Set(), t.set(u6, n2));
    n2.has(a4) || (De4 = true, n2.add(a4), l6 = Xy.bind(null, l6, u6, a4), u6.then(l6, l6));
  }
  function Xy(l6, u6, a4) {
    var t = l6.pingCache;
    t !== null && t.delete(u6), l6.pingedLanes |= l6.suspendedLanes & a4, l6.warmLanes &= ~a4, V6 === l6 && (B6 & a4) === a4 && (J4 === 4 || J4 === 3 && (B6 & 62914560) === B6 && 300 > jl2() - se4 ? (X5 & 2) === 0 && oa(l6, 0) : Oe4 |= a4, Ra2 === B6 && (Ra2 = 0)), Ll3(l6);
  }
  function Av(l6, u6) {
    u6 === 0 && (u6 = S0()), l6 = Qa2(l6, u6), l6 !== null && (Bt3(l6, u6), Ll3(l6));
  }
  function Gy(l6) {
    var u6 = l6.memoizedState, a4 = 0;
    u6 !== null && (a4 = u6.retryLane), Av(l6, a4);
  }
  function Qy(l6, u6) {
    var a4 = 0;
    switch (l6.tag) {
      case 13:
        var t = l6.stateNode, n2 = l6.memoizedState;
        n2 !== null && (a4 = n2.retryLane);
        break;
      case 19:
        t = l6.stateNode;
        break;
      case 22:
        t = l6.stateNode._retryCache;
        break;
      default:
        throw Error(A10(314));
    }
    t !== null && t.delete(u6), Av(l6, a4);
  }
  function Zy(l6, u6) {
    return Cc(l6, u6);
  }
  var jn = null, aa = null, Bc = false, Kn = false, Kf = false, Cu = 0;
  function Ll3(l6) {
    l6 !== aa && l6.next === null && (aa === null ? jn = aa = l6 : aa = aa.next = l6), Kn = true, Bc || (Bc = true, Vy());
  }
  function Vt3(l6, u6) {
    if (!Kf && Kn) {
      Kf = true;
      do
        for (var a4 = false, t = jn; t !== null; ) {
          if (!u6) if (l6 !== 0) {
            var n2 = t.pendingLanes;
            if (n2 === 0) var f4 = 0;
            else {
              var c3 = t.suspendedLanes, e = t.pingedLanes;
              f4 = (1 << 31 - Ml3(42 | l6) + 1) - 1, f4 &= n2 & ~(c3 & ~e), f4 = f4 & 201326741 ? f4 & 201326741 | 1 : f4 ? f4 | 2 : 0;
            }
            f4 !== 0 && (a4 = true, Qi2(t, f4));
          } else f4 = B6, f4 = Fn(t, t === V6 ? f4 : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), (f4 & 3) === 0 || qt3(t, f4) || (a4 = true, Qi2(t, f4));
          t = t.next;
        }
      while (a4);
      Kf = false;
    }
  }
  function xy() {
    Tv();
  }
  function Tv() {
    Kn = Bc = false;
    var l6 = 0;
    Cu !== 0 && (Jy() && (l6 = Cu), Cu = 0);
    for (var u6 = jl2(), a4 = null, t = jn; t !== null; ) {
      var n2 = t.next, f4 = Mv(t, u6);
      f4 === 0 ? (t.next = null, a4 === null ? jn = n2 : a4.next = n2, n2 === null && (aa = a4)) : (a4 = t, (l6 !== 0 || (f4 & 3) !== 0) && (Kn = true)), t = n2;
    }
    Vt3(l6, false);
  }
  function Mv(l6, u6) {
    for (var a4 = l6.suspendedLanes, t = l6.pingedLanes, n2 = l6.expirationTimes, f4 = l6.pendingLanes & -62914561; 0 < f4; ) {
      var c3 = 31 - Ml3(f4), e = 1 << c3, i3 = n2[c3];
      i3 === -1 ? ((e & a4) === 0 || (e & t) !== 0) && (n2[c3] = hh(e, u6)) : i3 <= u6 && (l6.expiredLanes |= e), f4 &= ~e;
    }
    if (u6 = V6, a4 = B6, a4 = Fn(l6, l6 === u6 ? a4 : 0, l6.cancelPendingCommit !== null || l6.timeoutHandle !== -1), t = l6.callbackNode, a4 === 0 || l6 === u6 && (_5 === 2 || _5 === 9) || l6.cancelPendingCommit !== null) return t !== null && t !== null && mf(t), l6.callbackNode = null, l6.callbackPriority = 0;
    if ((a4 & 3) === 0 || qt3(l6, a4)) {
      if (u6 = a4 & -a4, u6 === l6.callbackPriority) return u6;
      switch (t !== null && mf(t), pc(a4)) {
        case 2:
        case 8:
          a4 = h0;
          break;
        case 32:
          a4 = Dn;
          break;
        case 268435456:
          a4 = y0;
          break;
        default:
          a4 = Dn;
      }
      return t = Ev.bind(null, l6), a4 = Cc(a4, t), l6.callbackPriority = u6, l6.callbackNode = a4, u6;
    }
    return t !== null && t !== null && mf(t), l6.callbackPriority = 2, l6.callbackNode = null, 2;
  }
  function Ev(l6, u6) {
    if (fl2 !== 0 && fl2 !== 5) return l6.callbackNode = null, l6.callbackPriority = 0, null;
    var a4 = l6.callbackNode;
    if (ef(true) && l6.callbackNode !== a4) return null;
    var t = B6;
    return t = Fn(l6, l6 === V6 ? t : 0, l6.cancelPendingCommit !== null || l6.timeoutHandle !== -1), t === 0 ? null : (ev(l6, t, u6), Mv(l6, jl2()), l6.callbackNode != null && l6.callbackNode === a4 ? Ev.bind(null, l6) : null);
  }
  function Qi2(l6, u6) {
    if (ef()) return null;
    ev(l6, u6, true);
  }
  function Vy() {
    wy(function() {
      (X5 & 6) !== 0 ? Cc(v0, xy) : Tv();
    });
  }
  function He4() {
    return Cu === 0 && (Cu = d0()), Cu;
  }
  function Zi2(l6) {
    return l6 == null || typeof l6 == "symbol" || typeof l6 == "boolean" ? null : typeof l6 == "function" ? l6 : cn2("" + l6);
  }
  function xi2(l6, u6) {
    var a4 = u6.ownerDocument.createElement("input");
    return a4.name = u6.name, a4.value = u6.value, l6.id && a4.setAttribute("form", l6.id), u6.parentNode.insertBefore(a4, u6), l6 = new FormData(l6), a4.parentNode.removeChild(a4), l6;
  }
  function jy(l6, u6, a4, t, n2) {
    if (u6 === "submit" && a4 && a4.stateNode === n2) {
      var f4 = Zi2((n2[Sl2] || null).action), c3 = t.submitter;
      c3 && (u6 = (u6 = c3[Sl2] || null) ? Zi2(u6.formAction) : c3.getAttribute("formAction"), u6 !== null && (f4 = u6, c3 = null));
      var e = new kn("action", "action", null, t, n2);
      l6.push({
        event: e,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (t.defaultPrevented) {
                if (Cu !== 0) {
                  var i3 = c3 ? xi2(n2, c3) : new FormData(n2);
                  Ac(a4, {
                    pending: true,
                    data: i3,
                    method: n2.method,
                    action: f4
                  }, null, i3);
                }
              } else typeof f4 == "function" && (e.preventDefault(), i3 = c3 ? xi2(n2, c3) : new FormData(n2), Ac(a4, {
                pending: true,
                data: i3,
                method: n2.method,
                action: f4
              }, f4, i3));
            },
            currentTarget: n2
          }
        ]
      });
    }
  }
  for (ln4 = 0; ln4 < cc.length; ln4++) un2 = cc[ln4], Vi = un2.toLowerCase(), ji = un2[0].toUpperCase() + un2.slice(1), Gl(Vi, "on" + ji);
  var un2, Vi, ji, ln4;
  Gl(Q0, "onAnimationEnd");
  Gl(Z0, "onAnimationIteration");
  Gl(x0, "onAnimationStart");
  Gl("dblclick", "onDoubleClick");
  Gl("focusin", "onFocus");
  Gl("focusout", "onBlur");
  Gl(fy, "onTransitionRun");
  Gl(cy, "onTransitionStart");
  Gl(ey, "onTransitionCancel");
  Gl(V0, "onTransitionEnd");
  sa("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  sa("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  sa("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  sa("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  wu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  wu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  wu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  wu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  wu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  wu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Tt3 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ky = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tt3));
  function Dv(l6, u6) {
    u6 = (u6 & 4) !== 0;
    for (var a4 = 0; a4 < l6.length; a4++) {
      var t = l6[a4], n2 = t.event;
      t = t.listeners;
      l: {
        var f4 = void 0;
        if (u6) for (var c3 = t.length - 1; 0 <= c3; c3--) {
          var e = t[c3], i3 = e.instance, d4 = e.currentTarget;
          if (e = e.listener, i3 !== f4 && n2.isPropagationStopped()) break l;
          f4 = e, n2.currentTarget = d4;
          try {
            f4(n2);
          } catch (g7) {
            Xn(g7);
          }
          n2.currentTarget = null, f4 = i3;
        }
        else for (c3 = 0; c3 < t.length; c3++) {
          if (e = t[c3], i3 = e.instance, d4 = e.currentTarget, e = e.listener, i3 !== f4 && n2.isPropagationStopped()) break l;
          f4 = e, n2.currentTarget = d4;
          try {
            f4(n2);
          } catch (g7) {
            Xn(g7);
          }
          n2.currentTarget = null, f4 = i3;
        }
      }
    }
  }
  function N5(l6, u6) {
    var a4 = u6[Pf];
    a4 === void 0 && (a4 = u6[Pf] = /* @__PURE__ */ new Set());
    var t = l6 + "__bubble";
    a4.has(t) || (Ov(u6, l6, 2, false), a4.add(t));
  }
  function Cf(l6, u6, a4) {
    var t = 0;
    u6 && (t |= 4), Ov(a4, l6, t, u6);
  }
  var an = "_reactListening" + Math.random().toString(36).slice(2);
  function Ne4(l6) {
    if (!l6[an]) {
      l6[an] = true, z0.forEach(function(a4) {
        a4 !== "selectionchange" && (Ky.has(a4) || Cf(a4, false, l6), Cf(a4, true, l6));
      });
      var u6 = l6.nodeType === 9 ? l6 : l6.ownerDocument;
      u6 === null || u6[an] || (u6[an] = true, Cf("selectionchange", false, u6));
    }
  }
  function Ov(l6, u6, a4, t) {
    switch (Gv(u6)) {
      case 2:
        var n2 = md;
        break;
      case 8:
        n2 = gd;
        break;
      default:
        n2 = Ye4;
    }
    a4 = n2.bind(null, u6, a4, l6), n2 = void 0, !tc || u6 !== "touchstart" && u6 !== "touchmove" && u6 !== "wheel" || (n2 = true), t ? n2 !== void 0 ? l6.addEventListener(u6, a4, {
      capture: true,
      passive: n2
    }) : l6.addEventListener(u6, a4, true) : n2 !== void 0 ? l6.addEventListener(u6, a4, {
      passive: n2
    }) : l6.addEventListener(u6, a4, false);
  }
  function Lf(l6, u6, a4, t, n2) {
    var f4 = t;
    if ((u6 & 1) === 0 && (u6 & 2) === 0 && t !== null) l: for (; ; ) {
      if (t === null) return;
      var c3 = t.tag;
      if (c3 === 3 || c3 === 4) {
        var e = t.stateNode.containerInfo;
        if (e === n2) break;
        if (c3 === 4) for (c3 = t.return; c3 !== null; ) {
          var i3 = c3.tag;
          if ((i3 === 3 || i3 === 4) && c3.stateNode.containerInfo === n2) return;
          c3 = c3.return;
        }
        for (; e !== null; ) {
          if (c3 = fa(e), c3 === null) return;
          if (i3 = c3.tag, i3 === 5 || i3 === 6 || i3 === 26 || i3 === 27) {
            t = f4 = c3;
            continue l;
          }
          e = e.parentNode;
        }
      }
      t = t.return;
    }
    U0(function() {
      var d4 = f4, g7 = wc(a4), z7 = [];
      l: {
        var S7 = j0.get(l6);
        if (S7 !== void 0) {
          var m6 = kn, O5 = l6;
          switch (l6) {
            case "keypress":
              if (vn2(a4) === 0) break l;
            case "keydown":
            case "keyup":
              m6 = Zh;
              break;
            case "focusin":
              O5 = "focus", m6 = Df;
              break;
            case "focusout":
              O5 = "blur", m6 = Df;
              break;
            case "beforeblur":
            case "afterblur":
              m6 = Df;
              break;
            case "click":
              if (a4.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m6 = We4;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m6 = Uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m6 = jh;
              break;
            case Q0:
            case Z0:
            case x0:
              m6 = qh;
              break;
            case V0:
              m6 = Ch;
              break;
            case "scroll":
            case "scrollend":
              m6 = Oh;
              break;
            case "wheel":
              m6 = ph;
              break;
            case "copy":
            case "cut":
            case "paste":
              m6 = Rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m6 = $e4;
              break;
            case "toggle":
            case "beforetoggle":
              m6 = Wh;
          }
          var E11 = (u6 & 4) !== 0, G7 = !E11 && (l6 === "scroll" || l6 === "scrollend"), h4 = E11 ? S7 !== null ? S7 + "Capture" : null : S7;
          E11 = [];
          for (var v8 = d4, y7; v8 !== null; ) {
            var b10 = v8;
            if (y7 = b10.stateNode, b10 = b10.tag, b10 !== 5 && b10 !== 26 && b10 !== 27 || y7 === null || h4 === null || (b10 = St2(v8, h4), b10 != null && E11.push(Mt3(v8, b10, y7))), G7) break;
            v8 = v8.return;
          }
          0 < E11.length && (S7 = new m6(S7, O5, null, a4, g7), z7.push({
            event: S7,
            listeners: E11
          }));
        }
      }
      if ((u6 & 7) === 0) {
        l: {
          if (S7 = l6 === "mouseover" || l6 === "pointerover", m6 = l6 === "mouseout" || l6 === "pointerout", S7 && a4 !== ac && (O5 = a4.relatedTarget || a4.fromElement) && (fa(O5) || O5[Xa])) break l;
          if ((m6 || S7) && (S7 = g7.window === g7 ? g7 : (S7 = g7.ownerDocument) ? S7.defaultView || S7.parentWindow : window, m6 ? (O5 = a4.relatedTarget || a4.toElement, m6 = d4, O5 = O5 ? fa(O5) : null, O5 !== null && (G7 = Ht3(O5), E11 = O5.tag, O5 !== G7 || E11 !== 5 && E11 !== 27 && E11 !== 6) && (O5 = null)) : (m6 = null, O5 = d4), m6 !== O5)) {
            if (E11 = We4, b10 = "onMouseLeave", h4 = "onMouseEnter", v8 = "mouse", (l6 === "pointerout" || l6 === "pointerover") && (E11 = $e4, b10 = "onPointerLeave", h4 = "onPointerEnter", v8 = "pointer"), G7 = m6 == null ? S7 : ka(m6), y7 = O5 == null ? S7 : ka(O5), S7 = new E11(b10, v8 + "leave", m6, a4, g7), S7.target = G7, S7.relatedTarget = y7, b10 = null, fa(g7) === d4 && (E11 = new E11(h4, v8 + "enter", O5, a4, g7), E11.target = y7, E11.relatedTarget = G7, b10 = E11), G7 = b10, m6 && O5) u: {
              for (E11 = m6, h4 = O5, v8 = 0, y7 = E11; y7; y7 = Pu(y7)) v8++;
              for (y7 = 0, b10 = h4; b10; b10 = Pu(b10)) y7++;
              for (; 0 < v8 - y7; ) E11 = Pu(E11), v8--;
              for (; 0 < y7 - v8; ) h4 = Pu(h4), y7--;
              for (; v8--; ) {
                if (E11 === h4 || h4 !== null && E11 === h4.alternate) break u;
                E11 = Pu(E11), h4 = Pu(h4);
              }
              E11 = null;
            }
            else E11 = null;
            m6 !== null && Ki2(z7, S7, m6, E11, false), O5 !== null && G7 !== null && Ki2(z7, G7, O5, E11, true);
          }
        }
        l: {
          if (S7 = d4 ? ka(d4) : window, m6 = S7.nodeName && S7.nodeName.toLowerCase(), m6 === "select" || m6 === "input" && S7.type === "file") var T6 = Ie3;
          else if (re5(S7)) if (Y0) T6 = ay;
          else {
            T6 = ly;
            var H9 = Ph;
          }
          else m6 = S7.nodeName, !m6 || m6.toLowerCase() !== "input" || S7.type !== "checkbox" && S7.type !== "radio" ? d4 && Wc(d4.elementType) && (T6 = Ie3) : T6 = uy;
          if (T6 && (T6 = T6(l6, d4))) {
            R0(z7, T6, a4, g7);
            break l;
          }
          H9 && H9(l6, S7, d4), l6 === "focusout" && d4 && S7.type === "number" && d4.memoizedProps.value != null && uc(S7, "number", S7.value);
        }
        switch (H9 = d4 ? ka(d4) : window, l6) {
          case "focusin":
            (re5(H9) || H9.contentEditable === "true") && (ia = H9, nc = d4, lt = null);
            break;
          case "focusout":
            lt = nc = ia = null;
            break;
          case "mousedown":
            fc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = false, ai2(z7, a4, g7);
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            ai2(z7, a4, g7);
        }
        var M8;
        if (kc) l: {
          switch (l6) {
            case "compositionstart":
              var D8 = "onCompositionStart";
              break l;
            case "compositionend":
              D8 = "onCompositionEnd";
              break l;
            case "compositionupdate":
              D8 = "onCompositionUpdate";
              break l;
          }
          D8 = void 0;
        }
        else ea ? q0(l6, a4) && (D8 = "onCompositionEnd") : l6 === "keydown" && a4.keyCode === 229 && (D8 = "onCompositionStart");
        D8 && (N0 && a4.locale !== "ko" && (ea || D8 !== "onCompositionStart" ? D8 === "onCompositionEnd" && ea && (M8 = H0()) : (bu = g7, $c = "value" in bu ? bu.value : bu.textContent, ea = true)), H9 = Cn2(d4, D8), 0 < H9.length && (D8 = new we5(D8, l6, null, a4, g7), z7.push({
          event: D8,
          listeners: H9
        }), M8 ? D8.data = M8 : (M8 = B0(a4), M8 !== null && (D8.data = M8)))), (M8 = $h ? Fh(l6, a4) : kh(l6, a4)) && (D8 = Cn2(d4, "onBeforeInput"), 0 < D8.length && (H9 = new we5("onBeforeInput", "beforeinput", null, a4, g7), z7.push({
          event: H9,
          listeners: D8
        }), H9.data = M8)), jy(z7, l6, d4, a4, g7);
      }
      Dv(z7, u6);
    });
  }
  function Mt3(l6, u6, a4) {
    return {
      instance: l6,
      listener: u6,
      currentTarget: a4
    };
  }
  function Cn2(l6, u6) {
    for (var a4 = u6 + "Capture", t = []; l6 !== null; ) {
      var n2 = l6, f4 = n2.stateNode;
      if (n2 = n2.tag, n2 !== 5 && n2 !== 26 && n2 !== 27 || f4 === null || (n2 = St2(l6, a4), n2 != null && t.unshift(Mt3(l6, n2, f4)), n2 = St2(l6, u6), n2 != null && t.push(Mt3(l6, n2, f4))), l6.tag === 3) return t;
      l6 = l6.return;
    }
    return [];
  }
  function Pu(l6) {
    if (l6 === null) return null;
    do
      l6 = l6.return;
    while (l6 && l6.tag !== 5 && l6.tag !== 27);
    return l6 || null;
  }
  function Ki2(l6, u6, a4, t, n2) {
    for (var f4 = u6._reactName, c3 = []; a4 !== null && a4 !== t; ) {
      var e = a4, i3 = e.alternate, d4 = e.stateNode;
      if (e = e.tag, i3 !== null && i3 === t) break;
      e !== 5 && e !== 26 && e !== 27 || d4 === null || (i3 = d4, n2 ? (d4 = St2(a4, f4), d4 != null && c3.unshift(Mt3(a4, d4, i3))) : n2 || (d4 = St2(a4, f4), d4 != null && c3.push(Mt3(a4, d4, i3)))), a4 = a4.return;
    }
    c3.length !== 0 && l6.push({
      event: u6,
      listeners: c3
    });
  }
  var Cy = /\r\n?/g, Ly = /\u0000|\uFFFD/g;
  function Ci2(l6) {
    return (typeof l6 == "string" ? l6 : "" + l6).replace(Cy, `
`).replace(Ly, "");
  }
  function sv(l6, u6) {
    return u6 = Ci2(u6), Ci2(l6) === u6;
  }
  function vf() {
  }
  function Q4(l6, u6, a4, t, n2, f4) {
    switch (a4) {
      case "children":
        typeof t == "string" ? u6 === "body" || u6 === "textarea" && t === "" || Ua3(l6, t) : (typeof t == "number" || typeof t == "bigint") && u6 !== "body" && Ua3(l6, "" + t);
        break;
      case "className":
        Jt2(l6, "class", t);
        break;
      case "tabIndex":
        Jt2(l6, "tabindex", t);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jt2(l6, a4, t);
        break;
      case "style":
        s0(l6, t, f4);
        break;
      case "data":
        if (u6 !== "object") {
          Jt2(l6, "data", t);
          break;
        }
      case "src":
      case "href":
        if (t === "" && (u6 !== "a" || a4 !== "href")) {
          l6.removeAttribute(a4);
          break;
        }
        if (t == null || typeof t == "function" || typeof t == "symbol" || typeof t == "boolean") {
          l6.removeAttribute(a4);
          break;
        }
        t = cn2("" + t), l6.setAttribute(a4, t);
        break;
      case "action":
      case "formAction":
        if (typeof t == "function") {
          l6.setAttribute(a4, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f4 == "function" && (a4 === "formAction" ? (u6 !== "input" && Q4(l6, u6, "name", n2.name, n2, null), Q4(l6, u6, "formEncType", n2.formEncType, n2, null), Q4(l6, u6, "formMethod", n2.formMethod, n2, null), Q4(l6, u6, "formTarget", n2.formTarget, n2, null)) : (Q4(l6, u6, "encType", n2.encType, n2, null), Q4(l6, u6, "method", n2.method, n2, null), Q4(l6, u6, "target", n2.target, n2, null)));
        if (t == null || typeof t == "symbol" || typeof t == "boolean") {
          l6.removeAttribute(a4);
          break;
        }
        t = cn2("" + t), l6.setAttribute(a4, t);
        break;
      case "onClick":
        t != null && (l6.onclick = vf);
        break;
      case "onScroll":
        t != null && N5("scroll", l6);
        break;
      case "onScrollEnd":
        t != null && N5("scrollend", l6);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(A10(61));
          if (a4 = t.__html, a4 != null) {
            if (n2.children != null) throw Error(A10(60));
            l6.innerHTML = a4;
          }
        }
        break;
      case "multiple":
        l6.multiple = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "muted":
        l6.muted = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (t == null || typeof t == "function" || typeof t == "boolean" || typeof t == "symbol") {
          l6.removeAttribute("xlink:href");
          break;
        }
        a4 = cn2("" + t), l6.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a4);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t != null && typeof t != "function" && typeof t != "symbol" ? l6.setAttribute(a4, "" + t) : l6.removeAttribute(a4);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        t && typeof t != "function" && typeof t != "symbol" ? l6.setAttribute(a4, "") : l6.removeAttribute(a4);
        break;
      case "capture":
      case "download":
        t === true ? l6.setAttribute(a4, "") : t !== false && t != null && typeof t != "function" && typeof t != "symbol" ? l6.setAttribute(a4, t) : l6.removeAttribute(a4);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t != null && typeof t != "function" && typeof t != "symbol" && !isNaN(t) && 1 <= t ? l6.setAttribute(a4, t) : l6.removeAttribute(a4);
        break;
      case "rowSpan":
      case "start":
        t == null || typeof t == "function" || typeof t == "symbol" || isNaN(t) ? l6.removeAttribute(a4) : l6.setAttribute(a4, t);
        break;
      case "popover":
        N5("beforetoggle", l6), N5("toggle", l6), fn2(l6, "popover", t);
        break;
      case "xlinkActuate":
        pl(l6, "http://www.w3.org/1999/xlink", "xlink:actuate", t);
        break;
      case "xlinkArcrole":
        pl(l6, "http://www.w3.org/1999/xlink", "xlink:arcrole", t);
        break;
      case "xlinkRole":
        pl(l6, "http://www.w3.org/1999/xlink", "xlink:role", t);
        break;
      case "xlinkShow":
        pl(l6, "http://www.w3.org/1999/xlink", "xlink:show", t);
        break;
      case "xlinkTitle":
        pl(l6, "http://www.w3.org/1999/xlink", "xlink:title", t);
        break;
      case "xlinkType":
        pl(l6, "http://www.w3.org/1999/xlink", "xlink:type", t);
        break;
      case "xmlBase":
        pl(l6, "http://www.w3.org/XML/1998/namespace", "xml:base", t);
        break;
      case "xmlLang":
        pl(l6, "http://www.w3.org/XML/1998/namespace", "xml:lang", t);
        break;
      case "xmlSpace":
        pl(l6, "http://www.w3.org/XML/1998/namespace", "xml:space", t);
        break;
      case "is":
        fn2(l6, "is", t);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a4.length) || a4[0] !== "o" && a4[0] !== "O" || a4[1] !== "n" && a4[1] !== "N") && (a4 = Eh.get(a4) || a4, fn2(l6, a4, t));
    }
  }
  function Rc(l6, u6, a4, t, n2, f4) {
    switch (a4) {
      case "style":
        s0(l6, t, f4);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(A10(61));
          if (a4 = t.__html, a4 != null) {
            if (n2.children != null) throw Error(A10(60));
            l6.innerHTML = a4;
          }
        }
        break;
      case "children":
        typeof t == "string" ? Ua3(l6, t) : (typeof t == "number" || typeof t == "bigint") && Ua3(l6, "" + t);
        break;
      case "onScroll":
        t != null && N5("scroll", l6);
        break;
      case "onScrollEnd":
        t != null && N5("scrollend", l6);
        break;
      case "onClick":
        t != null && (l6.onclick = vf);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!A0.hasOwnProperty(a4)) l: {
          if (a4[0] === "o" && a4[1] === "n" && (n2 = a4.endsWith("Capture"), u6 = a4.slice(2, n2 ? a4.length - 7 : void 0), f4 = l6[Sl2] || null, f4 = f4 != null ? f4[a4] : null, typeof f4 == "function" && l6.removeEventListener(u6, f4, n2), typeof t == "function")) {
            typeof f4 != "function" && f4 !== null && (a4 in l6 ? l6[a4] = null : l6.hasAttribute(a4) && l6.removeAttribute(a4)), l6.addEventListener(u6, t, n2);
            break l;
          }
          a4 in l6 ? l6[a4] = t : t === true ? l6.setAttribute(a4, "") : fn2(l6, a4, t);
        }
    }
  }
  function cl(l6, u6, a4) {
    switch (u6) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        N5("error", l6), N5("load", l6);
        var t = false, n2 = false, f4;
        for (f4 in a4) if (a4.hasOwnProperty(f4)) {
          var c3 = a4[f4];
          if (c3 != null) switch (f4) {
            case "src":
              t = true;
              break;
            case "srcSet":
              n2 = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(A10(137, u6));
            default:
              Q4(l6, u6, f4, c3, a4, null);
          }
        }
        n2 && Q4(l6, u6, "srcSet", a4.srcSet, a4, null), t && Q4(l6, u6, "src", a4.src, a4, null);
        return;
      case "input":
        N5("invalid", l6);
        var e = f4 = c3 = n2 = null, i3 = null, d4 = null;
        for (t in a4) if (a4.hasOwnProperty(t)) {
          var g7 = a4[t];
          if (g7 != null) switch (t) {
            case "name":
              n2 = g7;
              break;
            case "type":
              c3 = g7;
              break;
            case "checked":
              i3 = g7;
              break;
            case "defaultChecked":
              d4 = g7;
              break;
            case "value":
              f4 = g7;
              break;
            case "defaultValue":
              e = g7;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g7 != null) throw Error(A10(137, u6));
              break;
            default:
              Q4(l6, u6, t, g7, a4, null);
          }
        }
        E0(l6, f4, e, i3, d4, c3, n2, false), On(l6);
        return;
      case "select":
        N5("invalid", l6), t = c3 = f4 = null;
        for (n2 in a4) if (a4.hasOwnProperty(n2) && (e = a4[n2], e != null)) switch (n2) {
          case "value":
            f4 = e;
            break;
          case "defaultValue":
            c3 = e;
            break;
          case "multiple":
            t = e;
          default:
            Q4(l6, u6, n2, e, a4, null);
        }
        u6 = f4, a4 = c3, l6.multiple = !!t, u6 != null ? ba2(l6, !!t, u6, false) : a4 != null && ba2(l6, !!t, a4, true);
        return;
      case "textarea":
        N5("invalid", l6), f4 = n2 = t = null;
        for (c3 in a4) if (a4.hasOwnProperty(c3) && (e = a4[c3], e != null)) switch (c3) {
          case "value":
            t = e;
            break;
          case "defaultValue":
            n2 = e;
            break;
          case "children":
            f4 = e;
            break;
          case "dangerouslySetInnerHTML":
            if (e != null) throw Error(A10(91));
            break;
          default:
            Q4(l6, u6, c3, e, a4, null);
        }
        O0(l6, t, n2, f4), On(l6);
        return;
      case "option":
        for (i3 in a4) if (a4.hasOwnProperty(i3) && (t = a4[i3], t != null)) switch (i3) {
          case "selected":
            l6.selected = t && typeof t != "function" && typeof t != "symbol";
            break;
          default:
            Q4(l6, u6, i3, t, a4, null);
        }
        return;
      case "dialog":
        N5("beforetoggle", l6), N5("toggle", l6), N5("cancel", l6), N5("close", l6);
        break;
      case "iframe":
      case "object":
        N5("load", l6);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Tt3.length; t++) N5(Tt3[t], l6);
        break;
      case "image":
        N5("error", l6), N5("load", l6);
        break;
      case "details":
        N5("toggle", l6);
        break;
      case "embed":
      case "source":
      case "link":
        N5("error", l6), N5("load", l6);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d4 in a4) if (a4.hasOwnProperty(d4) && (t = a4[d4], t != null)) switch (d4) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A10(137, u6));
          default:
            Q4(l6, u6, d4, t, a4, null);
        }
        return;
      default:
        if (Wc(u6)) {
          for (g7 in a4) a4.hasOwnProperty(g7) && (t = a4[g7], t !== void 0 && Rc(l6, u6, g7, t, a4, void 0));
          return;
        }
    }
    for (e in a4) a4.hasOwnProperty(e) && (t = a4[e], t != null && Q4(l6, u6, e, t, a4, null));
  }
  function py(l6, u6, a4, t) {
    switch (u6) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n2 = null, f4 = null, c3 = null, e = null, i3 = null, d4 = null, g7 = null;
        for (m6 in a4) {
          var z7 = a4[m6];
          if (a4.hasOwnProperty(m6) && z7 != null) switch (m6) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i3 = z7;
            default:
              t.hasOwnProperty(m6) || Q4(l6, u6, m6, null, t, z7);
          }
        }
        for (var S7 in t) {
          var m6 = t[S7];
          if (z7 = a4[S7], t.hasOwnProperty(S7) && (m6 != null || z7 != null)) switch (S7) {
            case "type":
              f4 = m6;
              break;
            case "name":
              n2 = m6;
              break;
            case "checked":
              d4 = m6;
              break;
            case "defaultChecked":
              g7 = m6;
              break;
            case "value":
              c3 = m6;
              break;
            case "defaultValue":
              e = m6;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (m6 != null) throw Error(A10(137, u6));
              break;
            default:
              m6 !== z7 && Q4(l6, u6, S7, m6, t, z7);
          }
        }
        lc(l6, c3, e, i3, d4, g7, f4, n2);
        return;
      case "select":
        m6 = c3 = e = S7 = null;
        for (f4 in a4) if (i3 = a4[f4], a4.hasOwnProperty(f4) && i3 != null) switch (f4) {
          case "value":
            break;
          case "multiple":
            m6 = i3;
          default:
            t.hasOwnProperty(f4) || Q4(l6, u6, f4, null, t, i3);
        }
        for (n2 in t) if (f4 = t[n2], i3 = a4[n2], t.hasOwnProperty(n2) && (f4 != null || i3 != null)) switch (n2) {
          case "value":
            S7 = f4;
            break;
          case "defaultValue":
            e = f4;
            break;
          case "multiple":
            c3 = f4;
          default:
            f4 !== i3 && Q4(l6, u6, n2, f4, t, i3);
        }
        u6 = e, a4 = c3, t = m6, S7 != null ? ba2(l6, !!a4, S7, false) : !!t != !!a4 && (u6 != null ? ba2(l6, !!a4, u6, true) : ba2(l6, !!a4, a4 ? [] : "", false));
        return;
      case "textarea":
        m6 = S7 = null;
        for (e in a4) if (n2 = a4[e], a4.hasOwnProperty(e) && n2 != null && !t.hasOwnProperty(e)) switch (e) {
          case "value":
            break;
          case "children":
            break;
          default:
            Q4(l6, u6, e, null, t, n2);
        }
        for (c3 in t) if (n2 = t[c3], f4 = a4[c3], t.hasOwnProperty(c3) && (n2 != null || f4 != null)) switch (c3) {
          case "value":
            S7 = n2;
            break;
          case "defaultValue":
            m6 = n2;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n2 != null) throw Error(A10(91));
            break;
          default:
            n2 !== f4 && Q4(l6, u6, c3, n2, t, f4);
        }
        D0(l6, S7, m6);
        return;
      case "option":
        for (var O5 in a4) if (S7 = a4[O5], a4.hasOwnProperty(O5) && S7 != null && !t.hasOwnProperty(O5)) switch (O5) {
          case "selected":
            l6.selected = false;
            break;
          default:
            Q4(l6, u6, O5, null, t, S7);
        }
        for (i3 in t) if (S7 = t[i3], m6 = a4[i3], t.hasOwnProperty(i3) && S7 !== m6 && (S7 != null || m6 != null)) switch (i3) {
          case "selected":
            l6.selected = S7 && typeof S7 != "function" && typeof S7 != "symbol";
            break;
          default:
            Q4(l6, u6, i3, S7, t, m6);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var E11 in a4) S7 = a4[E11], a4.hasOwnProperty(E11) && S7 != null && !t.hasOwnProperty(E11) && Q4(l6, u6, E11, null, t, S7);
        for (d4 in t) if (S7 = t[d4], m6 = a4[d4], t.hasOwnProperty(d4) && S7 !== m6 && (S7 != null || m6 != null)) switch (d4) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (S7 != null) throw Error(A10(137, u6));
            break;
          default:
            Q4(l6, u6, d4, S7, t, m6);
        }
        return;
      default:
        if (Wc(u6)) {
          for (var G7 in a4) S7 = a4[G7], a4.hasOwnProperty(G7) && S7 !== void 0 && !t.hasOwnProperty(G7) && Rc(l6, u6, G7, void 0, t, S7);
          for (g7 in t) S7 = t[g7], m6 = a4[g7], !t.hasOwnProperty(g7) || S7 === m6 || S7 === void 0 && m6 === void 0 || Rc(l6, u6, g7, S7, t, m6);
          return;
        }
    }
    for (var h4 in a4) S7 = a4[h4], a4.hasOwnProperty(h4) && S7 != null && !t.hasOwnProperty(h4) && Q4(l6, u6, h4, null, t, S7);
    for (z7 in t) S7 = t[z7], m6 = a4[z7], !t.hasOwnProperty(z7) || S7 === m6 || S7 == null && m6 == null || Q4(l6, u6, z7, S7, t, m6);
  }
  var Yc = null, oc = null;
  function Ln(l6) {
    return l6.nodeType === 9 ? l6 : l6.ownerDocument;
  }
  function Li(l6) {
    switch (l6) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uv(l6, u6) {
    if (l6 === 0) switch (u6) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l6 === 1 && u6 === "foreignObject" ? 0 : l6;
  }
  function _c(l6, u6) {
    return l6 === "textarea" || l6 === "noscript" || typeof u6.children == "string" || typeof u6.children == "number" || typeof u6.children == "bigint" || typeof u6.dangerouslySetInnerHTML == "object" && u6.dangerouslySetInnerHTML !== null && u6.dangerouslySetInnerHTML.__html != null;
  }
  var pf = null;
  function Jy() {
    var l6 = window.event;
    return l6 && l6.type === "popstate" ? l6 === pf ? false : (pf = l6, true) : (pf = null, false);
  }
  var Hv = typeof setTimeout == "function" ? setTimeout : void 0, Wy = typeof clearTimeout == "function" ? clearTimeout : void 0, pi2 = typeof Promise == "function" ? Promise : void 0, wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof pi2 < "u" ? function(l6) {
    return pi2.resolve(null).then(l6).catch($y);
  } : Hv;
  function $y(l6) {
    setTimeout(function() {
      throw l6;
    });
  }
  function Yu2(l6) {
    return l6 === "head";
  }
  function Ji(l6, u6) {
    var a4 = u6, t = 0, n2 = 0;
    do {
      var f4 = a4.nextSibling;
      if (l6.removeChild(a4), f4 && f4.nodeType === 8) if (a4 = f4.data, a4 === "/$") {
        if (0 < t && 8 > t) {
          a4 = t;
          var c3 = l6.ownerDocument;
          if (a4 & 1 && yt2(c3.documentElement), a4 & 2 && yt2(c3.body), a4 & 4) for (a4 = c3.head, yt2(a4), c3 = a4.firstChild; c3; ) {
            var e = c3.nextSibling, i3 = c3.nodeName;
            c3[Rt2] || i3 === "SCRIPT" || i3 === "STYLE" || i3 === "LINK" && c3.rel.toLowerCase() === "stylesheet" || a4.removeChild(c3), c3 = e;
          }
        }
        if (n2 === 0) {
          l6.removeChild(f4), Ut2(u6);
          return;
        }
        n2--;
      } else a4 === "$" || a4 === "$?" || a4 === "$!" ? n2++ : t = a4.charCodeAt(0) - 48;
      else t = 0;
      a4 = f4;
    } while (a4);
    Ut2(u6);
  }
  function Xc(l6) {
    var u6 = l6.firstChild;
    for (u6 && u6.nodeType === 10 && (u6 = u6.nextSibling); u6; ) {
      var a4 = u6;
      switch (u6 = u6.nextSibling, a4.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a4), Jc(a4);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a4.rel.toLowerCase() === "stylesheet") continue;
      }
      l6.removeChild(a4);
    }
  }
  function Fy(l6, u6, a4, t) {
    for (; l6.nodeType === 1; ) {
      var n2 = a4;
      if (l6.nodeName.toLowerCase() !== u6.toLowerCase()) {
        if (!t && (l6.nodeName !== "INPUT" || l6.type !== "hidden")) break;
      } else if (t) {
        if (!l6[Rt2]) switch (u6) {
          case "meta":
            if (!l6.hasAttribute("itemprop")) break;
            return l6;
          case "link":
            if (f4 = l6.getAttribute("rel"), f4 === "stylesheet" && l6.hasAttribute("data-precedence")) break;
            if (f4 !== n2.rel || l6.getAttribute("href") !== (n2.href == null || n2.href === "" ? null : n2.href) || l6.getAttribute("crossorigin") !== (n2.crossOrigin == null ? null : n2.crossOrigin) || l6.getAttribute("title") !== (n2.title == null ? null : n2.title)) break;
            return l6;
          case "style":
            if (l6.hasAttribute("data-precedence")) break;
            return l6;
          case "script":
            if (f4 = l6.getAttribute("src"), (f4 !== (n2.src == null ? null : n2.src) || l6.getAttribute("type") !== (n2.type == null ? null : n2.type) || l6.getAttribute("crossorigin") !== (n2.crossOrigin == null ? null : n2.crossOrigin)) && f4 && l6.hasAttribute("async") && !l6.hasAttribute("itemprop")) break;
            return l6;
          default:
            return l6;
        }
      } else if (u6 === "input" && l6.type === "hidden") {
        var f4 = n2.name == null ? null : "" + n2.name;
        if (n2.type === "hidden" && l6.getAttribute("name") === f4) return l6;
      } else return l6;
      if (l6 = Xl(l6.nextSibling), l6 === null) break;
    }
    return null;
  }
  function ky(l6, u6, a4) {
    if (u6 === "") return null;
    for (; l6.nodeType !== 3; ) if ((l6.nodeType !== 1 || l6.nodeName !== "INPUT" || l6.type !== "hidden") && !a4 || (l6 = Xl(l6.nextSibling), l6 === null)) return null;
    return l6;
  }
  function Gc(l6) {
    return l6.data === "$!" || l6.data === "$?" && l6.ownerDocument.readyState === "complete";
  }
  function ry(l6, u6) {
    var a4 = l6.ownerDocument;
    if (l6.data !== "$?" || a4.readyState === "complete") u6();
    else {
      var t = function() {
        u6(), a4.removeEventListener("DOMContentLoaded", t);
      };
      a4.addEventListener("DOMContentLoaded", t), l6._reactRetry = t;
    }
  }
  function Xl(l6) {
    for (; l6 != null; l6 = l6.nextSibling) {
      var u6 = l6.nodeType;
      if (u6 === 1 || u6 === 3) break;
      if (u6 === 8) {
        if (u6 = l6.data, u6 === "$" || u6 === "$!" || u6 === "$?" || u6 === "F!" || u6 === "F") break;
        if (u6 === "/$") return null;
      }
    }
    return l6;
  }
  var Qc = null;
  function Wi(l6) {
    l6 = l6.previousSibling;
    for (var u6 = 0; l6; ) {
      if (l6.nodeType === 8) {
        var a4 = l6.data;
        if (a4 === "$" || a4 === "$!" || a4 === "$?") {
          if (u6 === 0) return l6;
          u6--;
        } else a4 === "/$" && u6++;
      }
      l6 = l6.previousSibling;
    }
    return null;
  }
  function Nv(l6, u6, a4) {
    switch (u6 = Ln(a4), l6) {
      case "html":
        if (l6 = u6.documentElement, !l6) throw Error(A10(452));
        return l6;
      case "head":
        if (l6 = u6.head, !l6) throw Error(A10(453));
        return l6;
      case "body":
        if (l6 = u6.body, !l6) throw Error(A10(454));
        return l6;
      default:
        throw Error(A10(451));
    }
  }
  function yt2(l6) {
    for (var u6 = l6.attributes; u6.length; ) l6.removeAttributeNode(u6[0]);
    Jc(l6);
  }
  var ol = /* @__PURE__ */ new Map(), wi3 = /* @__PURE__ */ new Set();
  function pn(l6) {
    return typeof l6.getRootNode == "function" ? l6.getRootNode() : l6.nodeType === 9 ? l6 : l6.ownerDocument;
  }
  var fu = o4.d;
  o4.d = {
    f: Iy,
    r: Py,
    D: ld,
    C: ud,
    L: ad,
    m: td,
    X: fd,
    S: nd,
    M: cd
  };
  function Iy() {
    var l6 = fu.f(), u6 = ff();
    return l6 || u6;
  }
  function Py(l6) {
    var u6 = Ga2(l6);
    u6 !== null && u6.tag === 5 && u6.type === "form" ? M1(u6) : fu.r(l6);
  }
  var xa3 = typeof document > "u" ? null : document;
  function qv(l6, u6, a4) {
    var t = xa3;
    if (t && typeof u6 == "string" && u6) {
      var n2 = ql(u6);
      n2 = 'link[rel="' + l6 + '"][href="' + n2 + '"]', typeof a4 == "string" && (n2 += '[crossorigin="' + a4 + '"]'), wi3.has(n2) || (wi3.add(n2), l6 = {
        rel: l6,
        crossOrigin: a4,
        href: u6
      }, t.querySelector(n2) === null && (u6 = t.createElement("link"), cl(u6, "link", l6), ul2(u6), t.head.appendChild(u6)));
    }
  }
  function ld(l6) {
    fu.D(l6), qv("dns-prefetch", l6, null);
  }
  function ud(l6, u6) {
    fu.C(l6, u6), qv("preconnect", l6, u6);
  }
  function ad(l6, u6, a4) {
    fu.L(l6, u6, a4);
    var t = xa3;
    if (t && l6 && u6) {
      var n2 = 'link[rel="preload"][as="' + ql(u6) + '"]';
      u6 === "image" && a4 && a4.imageSrcSet ? (n2 += '[imagesrcset="' + ql(a4.imageSrcSet) + '"]', typeof a4.imageSizes == "string" && (n2 += '[imagesizes="' + ql(a4.imageSizes) + '"]')) : n2 += '[href="' + ql(l6) + '"]';
      var f4 = n2;
      switch (u6) {
        case "style":
          f4 = _a3(l6);
          break;
        case "script":
          f4 = Va2(l6);
      }
      ol.has(f4) || (l6 = j10({
        rel: "preload",
        href: u6 === "image" && a4 && a4.imageSrcSet ? void 0 : l6,
        as: u6
      }, a4), ol.set(f4, l6), t.querySelector(n2) !== null || u6 === "style" && t.querySelector(jt2(f4)) || u6 === "script" && t.querySelector(Kt2(f4)) || (u6 = t.createElement("link"), cl(u6, "link", l6), ul2(u6), t.head.appendChild(u6)));
    }
  }
  function td(l6, u6) {
    fu.m(l6, u6);
    var a4 = xa3;
    if (a4 && l6) {
      var t = u6 && typeof u6.as == "string" ? u6.as : "script", n2 = 'link[rel="modulepreload"][as="' + ql(t) + '"][href="' + ql(l6) + '"]', f4 = n2;
      switch (t) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f4 = Va2(l6);
      }
      if (!ol.has(f4) && (l6 = j10({
        rel: "modulepreload",
        href: l6
      }, u6), ol.set(f4, l6), a4.querySelector(n2) === null)) {
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a4.querySelector(Kt2(f4))) return;
        }
        t = a4.createElement("link"), cl(t, "link", l6), ul2(t), a4.head.appendChild(t);
      }
    }
  }
  function nd(l6, u6, a4) {
    fu.S(l6, u6, a4);
    var t = xa3;
    if (t && l6) {
      var n2 = ga2(t).hoistableStyles, f4 = _a3(l6);
      u6 = u6 || "default";
      var c3 = n2.get(f4);
      if (!c3) {
        var e = {
          loading: 0,
          preload: null
        };
        if (c3 = t.querySelector(jt2(f4))) e.loading = 5;
        else {
          l6 = j10({
            rel: "stylesheet",
            href: l6,
            "data-precedence": u6
          }, a4), (a4 = ol.get(f4)) && qe4(l6, a4);
          var i3 = c3 = t.createElement("link");
          ul2(i3), cl(i3, "link", l6), i3._p = new Promise(function(d4, g7) {
            i3.onload = d4, i3.onerror = g7;
          }), i3.addEventListener("load", function() {
            e.loading |= 1;
          }), i3.addEventListener("error", function() {
            e.loading |= 2;
          }), e.loading |= 4, bn(c3, u6, t);
        }
        c3 = {
          type: "stylesheet",
          instance: c3,
          count: 1,
          state: e
        }, n2.set(f4, c3);
      }
    }
  }
  function fd(l6, u6) {
    fu.X(l6, u6);
    var a4 = xa3;
    if (a4 && l6) {
      var t = ga2(a4).hoistableScripts, n2 = Va2(l6), f4 = t.get(n2);
      f4 || (f4 = a4.querySelector(Kt2(n2)), f4 || (l6 = j10({
        src: l6,
        async: true
      }, u6), (u6 = ol.get(n2)) && Be4(l6, u6), f4 = a4.createElement("script"), ul2(f4), cl(f4, "link", l6), a4.head.appendChild(f4)), f4 = {
        type: "script",
        instance: f4,
        count: 1,
        state: null
      }, t.set(n2, f4));
    }
  }
  function cd(l6, u6) {
    fu.M(l6, u6);
    var a4 = xa3;
    if (a4 && l6) {
      var t = ga2(a4).hoistableScripts, n2 = Va2(l6), f4 = t.get(n2);
      f4 || (f4 = a4.querySelector(Kt2(n2)), f4 || (l6 = j10({
        src: l6,
        async: true,
        type: "module"
      }, u6), (u6 = ol.get(n2)) && Be4(l6, u6), f4 = a4.createElement("script"), ul2(f4), cl(f4, "link", l6), a4.head.appendChild(f4)), f4 = {
        type: "script",
        instance: f4,
        count: 1,
        state: null
      }, t.set(n2, f4));
    }
  }
  function $i2(l6, u6, a4, t) {
    var n2 = (n2 = Tu.current) ? pn(n2) : null;
    if (!n2) throw Error(A10(446));
    switch (l6) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a4.precedence == "string" && typeof a4.href == "string" ? (u6 = _a3(a4.href), a4 = ga2(n2).hoistableStyles, t = a4.get(u6), t || (t = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a4.set(u6, t)), t) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a4.rel === "stylesheet" && typeof a4.href == "string" && typeof a4.precedence == "string") {
          l6 = _a3(a4.href);
          var f4 = ga2(n2).hoistableStyles, c3 = f4.get(l6);
          if (c3 || (n2 = n2.ownerDocument || n2, c3 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f4.set(l6, c3), (f4 = n2.querySelector(jt2(l6))) && !f4._p && (c3.instance = f4, c3.state.loading = 5), ol.has(l6) || (a4 = {
            rel: "preload",
            as: "style",
            href: a4.href,
            crossOrigin: a4.crossOrigin,
            integrity: a4.integrity,
            media: a4.media,
            hrefLang: a4.hrefLang,
            referrerPolicy: a4.referrerPolicy
          }, ol.set(l6, a4), f4 || ed(n2, l6, a4, c3.state))), u6 && t === null) throw Error(A10(528, ""));
          return c3;
        }
        if (u6 && t !== null) throw Error(A10(529, ""));
        return null;
      case "script":
        return u6 = a4.async, a4 = a4.src, typeof a4 == "string" && u6 && typeof u6 != "function" && typeof u6 != "symbol" ? (u6 = Va2(a4), a4 = ga2(n2).hoistableScripts, t = a4.get(u6), t || (t = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a4.set(u6, t)), t) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(A10(444, l6));
    }
  }
  function _a3(l6) {
    return 'href="' + ql(l6) + '"';
  }
  function jt2(l6) {
    return 'link[rel="stylesheet"][' + l6 + "]";
  }
  function Bv(l6) {
    return j10({}, l6, {
      "data-precedence": l6.precedence,
      precedence: null
    });
  }
  function ed(l6, u6, a4, t) {
    l6.querySelector('link[rel="preload"][as="style"][' + u6 + "]") ? t.loading = 1 : (u6 = l6.createElement("link"), t.preload = u6, u6.addEventListener("load", function() {
      return t.loading |= 1;
    }), u6.addEventListener("error", function() {
      return t.loading |= 2;
    }), cl(u6, "link", a4), ul2(u6), l6.head.appendChild(u6));
  }
  function Va2(l6) {
    return '[src="' + ql(l6) + '"]';
  }
  function Kt2(l6) {
    return "script[async]" + l6;
  }
  function Fi(l6, u6, a4) {
    if (u6.count++, u6.instance === null) switch (u6.type) {
      case "style":
        var t = l6.querySelector('style[data-href~="' + ql(a4.href) + '"]');
        if (t) return u6.instance = t, ul2(t), t;
        var n2 = j10({}, a4, {
          "data-href": a4.href,
          "data-precedence": a4.precedence,
          href: null,
          precedence: null
        });
        return t = (l6.ownerDocument || l6).createElement("style"), ul2(t), cl(t, "style", n2), bn(t, a4.precedence, l6), u6.instance = t;
      case "stylesheet":
        n2 = _a3(a4.href);
        var f4 = l6.querySelector(jt2(n2));
        if (f4) return u6.state.loading |= 4, u6.instance = f4, ul2(f4), f4;
        t = Bv(a4), (n2 = ol.get(n2)) && qe4(t, n2), f4 = (l6.ownerDocument || l6).createElement("link"), ul2(f4);
        var c3 = f4;
        return c3._p = new Promise(function(e, i3) {
          c3.onload = e, c3.onerror = i3;
        }), cl(f4, "link", t), u6.state.loading |= 4, bn(f4, a4.precedence, l6), u6.instance = f4;
      case "script":
        return f4 = Va2(a4.src), (n2 = l6.querySelector(Kt2(f4))) ? (u6.instance = n2, ul2(n2), n2) : (t = a4, (n2 = ol.get(f4)) && (t = j10({}, a4), Be4(t, n2)), l6 = l6.ownerDocument || l6, n2 = l6.createElement("script"), ul2(n2), cl(n2, "link", t), l6.head.appendChild(n2), u6.instance = n2);
      case "void":
        return null;
      default:
        throw Error(A10(443, u6.type));
    }
    else u6.type === "stylesheet" && (u6.state.loading & 4) === 0 && (t = u6.instance, u6.state.loading |= 4, bn(t, a4.precedence, l6));
    return u6.instance;
  }
  function bn(l6, u6, a4) {
    for (var t = a4.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n2 = t.length ? t[t.length - 1] : null, f4 = n2, c3 = 0; c3 < t.length; c3++) {
      var e = t[c3];
      if (e.dataset.precedence === u6) f4 = e;
      else if (f4 !== n2) break;
    }
    f4 ? f4.parentNode.insertBefore(l6, f4.nextSibling) : (u6 = a4.nodeType === 9 ? a4.head : a4, u6.insertBefore(l6, u6.firstChild));
  }
  function qe4(l6, u6) {
    l6.crossOrigin == null && (l6.crossOrigin = u6.crossOrigin), l6.referrerPolicy == null && (l6.referrerPolicy = u6.referrerPolicy), l6.title == null && (l6.title = u6.title);
  }
  function Be4(l6, u6) {
    l6.crossOrigin == null && (l6.crossOrigin = u6.crossOrigin), l6.referrerPolicy == null && (l6.referrerPolicy = u6.referrerPolicy), l6.integrity == null && (l6.integrity = u6.integrity);
  }
  var zn = null;
  function ki(l6, u6, a4) {
    if (zn === null) {
      var t = /* @__PURE__ */ new Map(), n2 = zn = /* @__PURE__ */ new Map();
      n2.set(a4, t);
    } else n2 = zn, t = n2.get(a4), t || (t = /* @__PURE__ */ new Map(), n2.set(a4, t));
    if (t.has(l6)) return t;
    for (t.set(l6, null), a4 = a4.getElementsByTagName(l6), n2 = 0; n2 < a4.length; n2++) {
      var f4 = a4[n2];
      if (!(f4[Rt2] || f4[el2] || l6 === "link" && f4.getAttribute("rel") === "stylesheet") && f4.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c3 = f4.getAttribute(u6) || "";
        c3 = l6 + c3;
        var e = t.get(c3);
        e ? e.push(f4) : t.set(c3, [
          f4
        ]);
      }
    }
    return t;
  }
  function ri2(l6, u6, a4) {
    l6 = l6.ownerDocument || l6, l6.head.insertBefore(a4, u6 === "title" ? l6.querySelector("head > title") : null);
  }
  function id(l6, u6, a4) {
    if (a4 === 1 || u6.itemProp != null) return false;
    switch (l6) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof u6.precedence != "string" || typeof u6.href != "string" || u6.href === "") break;
        return true;
      case "link":
        if (typeof u6.rel != "string" || typeof u6.href != "string" || u6.href === "" || u6.onLoad || u6.onError) break;
        switch (u6.rel) {
          case "stylesheet":
            return l6 = u6.disabled, typeof u6.precedence == "string" && l6 == null;
          default:
            return true;
        }
      case "script":
        if (u6.async && typeof u6.async != "function" && typeof u6.async != "symbol" && !u6.onLoad && !u6.onError && u6.src && typeof u6.src == "string") return true;
    }
    return false;
  }
  function Rv(l6) {
    return !(l6.type === "stylesheet" && (l6.state.loading & 3) === 0);
  }
  var Et3 = null;
  function vd() {
  }
  function hd(l6, u6, a4) {
    if (Et3 === null) throw Error(A10(475));
    var t = Et3;
    if (u6.type === "stylesheet" && (typeof a4.media != "string" || matchMedia(a4.media).matches !== false) && (u6.state.loading & 4) === 0) {
      if (u6.instance === null) {
        var n2 = _a3(a4.href), f4 = l6.querySelector(jt2(n2));
        if (f4) {
          l6 = f4._p, l6 !== null && typeof l6 == "object" && typeof l6.then == "function" && (t.count++, t = Jn.bind(t), l6.then(t, t)), u6.state.loading |= 4, u6.instance = f4, ul2(f4);
          return;
        }
        f4 = l6.ownerDocument || l6, a4 = Bv(a4), (n2 = ol.get(n2)) && qe4(a4, n2), f4 = f4.createElement("link"), ul2(f4);
        var c3 = f4;
        c3._p = new Promise(function(e, i3) {
          c3.onload = e, c3.onerror = i3;
        }), cl(f4, "link", a4), u6.instance = f4;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(u6, l6), (l6 = u6.state.preload) && (u6.state.loading & 3) === 0 && (t.count++, u6 = Jn.bind(t), l6.addEventListener("load", u6), l6.addEventListener("error", u6));
    }
  }
  function yd() {
    if (Et3 === null) throw Error(A10(475));
    var l6 = Et3;
    return l6.stylesheets && l6.count === 0 && Zc(l6, l6.stylesheets), 0 < l6.count ? function(u6) {
      var a4 = setTimeout(function() {
        if (l6.stylesheets && Zc(l6, l6.stylesheets), l6.unsuspend) {
          var t = l6.unsuspend;
          l6.unsuspend = null, t();
        }
      }, 6e4);
      return l6.unsuspend = u6, function() {
        l6.unsuspend = null, clearTimeout(a4);
      };
    } : null;
  }
  function Jn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Zc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l6 = this.unsuspend;
        this.unsuspend = null, l6();
      }
    }
  }
  var Wn = null;
  function Zc(l6, u6) {
    l6.stylesheets = null, l6.unsuspend !== null && (l6.count++, Wn = /* @__PURE__ */ new Map(), u6.forEach(dd, l6), Wn = null, Jn.call(l6));
  }
  function dd(l6, u6) {
    if (!(u6.state.loading & 4)) {
      var a4 = Wn.get(l6);
      if (a4) var t = a4.get(null);
      else {
        a4 = /* @__PURE__ */ new Map(), Wn.set(l6, a4);
        for (var n2 = l6.querySelectorAll("link[data-precedence],style[data-precedence]"), f4 = 0; f4 < n2.length; f4++) {
          var c3 = n2[f4];
          (c3.nodeName === "LINK" || c3.getAttribute("media") !== "not all") && (a4.set(c3.dataset.precedence, c3), t = c3);
        }
        t && a4.set(null, t);
      }
      n2 = u6.instance, c3 = n2.getAttribute("data-precedence"), f4 = a4.get(c3) || t, f4 === t && a4.set(null, n2), a4.set(c3, n2), this.count++, t = Jn.bind(this), n2.addEventListener("load", t), n2.addEventListener("error", t), f4 ? f4.parentNode.insertBefore(n2, f4.nextSibling) : (l6 = l6.nodeType === 9 ? l6.head : l6, l6.insertBefore(n2, l6.firstChild)), u6.state.loading |= 4;
    }
  }
  var Dt2 = {
    $$typeof: $l,
    Provider: null,
    Consumer: null,
    _currentValue: Qu,
    _currentValue2: Qu,
    _threadCount: 0
  };
  function Sd(l6, u6, a4, t, n2, f4, c3, e) {
    this.tag = 1, this.containerInfo = l6, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.hiddenUpdates = gf(null), this.identifierPrefix = t, this.onUncaughtError = n2, this.onCaughtError = f4, this.onRecoverableError = c3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = e, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yv(l6, u6, a4, t, n2, f4, c3, e, i3, d4, g7, z7) {
    return l6 = new Sd(l6, u6, a4, c3, e, i3, d4, z7), u6 = 1, f4 === true && (u6 |= 24), f4 = Al2(3, null, null, u6), l6.current = f4, f4.stateNode = l6, u6 = te2(), u6.refCount++, l6.pooledCache = u6, u6.refCount++, f4.memoizedState = {
      element: t,
      isDehydrated: a4,
      cache: u6
    }, fe4(f4), l6;
  }
  function ov(l6) {
    return l6 ? (l6 = ya3, l6) : ya3;
  }
  function _v(l6, u6, a4, t, n2, f4) {
    n2 = ov(n2), t.context === null ? t.context = n2 : t.pendingContext = n2, t = Mu2(u6), t.payload = {
      element: a4
    }, f4 = f4 === void 0 ? null : f4, f4 !== null && (t.callback = f4), a4 = Eu(l6, t, u6), a4 !== null && (Dl3(a4, l6, u6), tt3(a4, l6, u6));
  }
  function Ii(l6, u6) {
    if (l6 = l6.memoizedState, l6 !== null && l6.dehydrated !== null) {
      var a4 = l6.retryLane;
      l6.retryLane = a4 !== 0 && a4 < u6 ? a4 : u6;
    }
  }
  function Re5(l6, u6) {
    Ii(l6, u6), (l6 = l6.alternate) && Ii(l6, u6);
  }
  function Xv(l6) {
    if (l6.tag === 13) {
      var u6 = Qa2(l6, 67108864);
      u6 !== null && Dl3(u6, l6, 67108864), Re5(l6, 67108864);
    }
  }
  var wn = true;
  function md(l6, u6, a4, t) {
    var n2 = s2.T;
    s2.T = null;
    var f4 = o4.p;
    try {
      o4.p = 2, Ye4(l6, u6, a4, t);
    } finally {
      o4.p = f4, s2.T = n2;
    }
  }
  function gd(l6, u6, a4, t) {
    var n2 = s2.T;
    s2.T = null;
    var f4 = o4.p;
    try {
      o4.p = 8, Ye4(l6, u6, a4, t);
    } finally {
      o4.p = f4, s2.T = n2;
    }
  }
  function Ye4(l6, u6, a4, t) {
    if (wn) {
      var n2 = xc(t);
      if (n2 === null) Lf(l6, u6, t, $n, a4), Pi2(l6, t);
      else if (zd(n2, l6, u6, a4, t)) t.stopPropagation();
      else if (Pi2(l6, t), u6 & 4 && -1 < bd.indexOf(l6)) {
        for (; n2 !== null; ) {
          var f4 = Ga2(n2);
          if (f4 !== null) switch (f4.tag) {
            case 3:
              if (f4 = f4.stateNode, f4.current.memoizedState.isDehydrated) {
                var c3 = _u(f4.pendingLanes);
                if (c3 !== 0) {
                  var e = f4;
                  for (e.pendingLanes |= 2, e.entangledLanes |= 2; c3; ) {
                    var i3 = 1 << 31 - Ml3(c3);
                    e.entanglements[1] |= i3, c3 &= ~i3;
                  }
                  Ll3(f4), (X5 & 6) === 0 && (xn2 = jl2() + 500, Vt3(0, false));
                }
              }
              break;
            case 13:
              e = Qa2(f4, 2), e !== null && Dl3(e, f4, 2), ff(), Re5(f4, 2);
          }
          if (f4 = xc(t), f4 === null && Lf(l6, u6, t, $n, a4), f4 === n2) break;
          n2 = f4;
        }
        n2 !== null && t.stopPropagation();
      } else Lf(l6, u6, t, null, a4);
    }
  }
  function xc(l6) {
    return l6 = wc(l6), oe5(l6);
  }
  var $n = null;
  function oe5(l6) {
    if ($n = null, l6 = fa(l6), l6 !== null) {
      var u6 = Ht3(l6);
      if (u6 === null) l6 = null;
      else {
        var a4 = u6.tag;
        if (a4 === 13) {
          if (l6 = f0(u6), l6 !== null) return l6;
          l6 = null;
        } else if (a4 === 3) {
          if (u6.stateNode.current.memoizedState.isDehydrated) return u6.tag === 3 ? u6.stateNode.containerInfo : null;
          l6 = null;
        } else u6 !== l6 && (l6 = null);
      }
    }
    return $n = l6, null;
  }
  function Gv(l6) {
    switch (l6) {
      case "beforetoggle":
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
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (th()) {
          case v0:
            return 2;
          case h0:
            return 8;
          case Dn:
          case nh:
            return 32;
          case y0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = false, su = null, Uu = null, Hu2 = null, Ot2 = /* @__PURE__ */ new Map(), st2 = /* @__PURE__ */ new Map(), mu = [], bd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Pi2(l6, u6) {
    switch (l6) {
      case "focusin":
      case "focusout":
        su = null;
        break;
      case "dragenter":
      case "dragleave":
        Uu = null;
        break;
      case "mouseover":
      case "mouseout":
        Hu2 = null;
        break;
      case "pointerover":
      case "pointerout":
        Ot2.delete(u6.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        st2.delete(u6.pointerId);
    }
  }
  function Wa(l6, u6, a4, t, n2, f4) {
    return l6 === null || l6.nativeEvent !== f4 ? (l6 = {
      blockedOn: u6,
      domEventName: a4,
      eventSystemFlags: t,
      nativeEvent: f4,
      targetContainers: [
        n2
      ]
    }, u6 !== null && (u6 = Ga2(u6), u6 !== null && Xv(u6)), l6) : (l6.eventSystemFlags |= t, u6 = l6.targetContainers, n2 !== null && u6.indexOf(n2) === -1 && u6.push(n2), l6);
  }
  function zd(l6, u6, a4, t, n2) {
    switch (u6) {
      case "focusin":
        return su = Wa(su, l6, u6, a4, t, n2), true;
      case "dragenter":
        return Uu = Wa(Uu, l6, u6, a4, t, n2), true;
      case "mouseover":
        return Hu2 = Wa(Hu2, l6, u6, a4, t, n2), true;
      case "pointerover":
        var f4 = n2.pointerId;
        return Ot2.set(f4, Wa(Ot2.get(f4) || null, l6, u6, a4, t, n2)), true;
      case "gotpointercapture":
        return f4 = n2.pointerId, st2.set(f4, Wa(st2.get(f4) || null, l6, u6, a4, t, n2)), true;
    }
    return false;
  }
  function Qv(l6) {
    var u6 = fa(l6.target);
    if (u6 !== null) {
      var a4 = Ht3(u6);
      if (a4 !== null) {
        if (u6 = a4.tag, u6 === 13) {
          if (u6 = f0(a4), u6 !== null) {
            l6.blockedOn = u6, dh(l6.priority, function() {
              if (a4.tag === 13) {
                var t = El2();
                t = Lc(t);
                var n2 = Qa2(a4, t);
                n2 !== null && Dl3(n2, a4, t), Re5(a4, t);
              }
            });
            return;
          }
        } else if (u6 === 3 && a4.stateNode.current.memoizedState.isDehydrated) {
          l6.blockedOn = a4.tag === 3 ? a4.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l6.blockedOn = null;
  }
  function An(l6) {
    if (l6.blockedOn !== null) return false;
    for (var u6 = l6.targetContainers; 0 < u6.length; ) {
      var a4 = xc(l6.nativeEvent);
      if (a4 === null) {
        a4 = l6.nativeEvent;
        var t = new a4.constructor(a4.type, a4);
        ac = t, a4.target.dispatchEvent(t), ac = null;
      } else return u6 = Ga2(a4), u6 !== null && Xv(u6), l6.blockedOn = a4, false;
      u6.shift();
    }
    return true;
  }
  function l0(l6, u6, a4) {
    An(l6) && a4.delete(u6);
  }
  function Ad() {
    Vc = false, su !== null && An(su) && (su = null), Uu !== null && An(Uu) && (Uu = null), Hu2 !== null && An(Hu2) && (Hu2 = null), Ot2.forEach(l0), st2.forEach(l0);
  }
  function tn2(l6, u6) {
    l6.blockedOn === u6 && (l6.blockedOn = null, Vc || (Vc = true, I5.unstable_scheduleCallback(I5.unstable_NormalPriority, Ad)));
  }
  var nn2 = null;
  function u0(l6) {
    nn2 !== l6 && (nn2 = l6, I5.unstable_scheduleCallback(I5.unstable_NormalPriority, function() {
      nn2 === l6 && (nn2 = null);
      for (var u6 = 0; u6 < l6.length; u6 += 3) {
        var a4 = l6[u6], t = l6[u6 + 1], n2 = l6[u6 + 2];
        if (typeof t != "function") {
          if (oe5(t || a4) === null) continue;
          break;
        }
        var f4 = Ga2(a4);
        f4 !== null && (l6.splice(u6, 3), u6 -= 3, Ac(f4, {
          pending: true,
          data: n2,
          method: a4.method,
          action: t
        }, t, n2));
      }
    }));
  }
  function Ut2(l6) {
    function u6(i3) {
      return tn2(i3, l6);
    }
    su !== null && tn2(su, l6), Uu !== null && tn2(Uu, l6), Hu2 !== null && tn2(Hu2, l6), Ot2.forEach(u6), st2.forEach(u6);
    for (var a4 = 0; a4 < mu.length; a4++) {
      var t = mu[a4];
      t.blockedOn === l6 && (t.blockedOn = null);
    }
    for (; 0 < mu.length && (a4 = mu[0], a4.blockedOn === null); ) Qv(a4), a4.blockedOn === null && mu.shift();
    if (a4 = (l6.ownerDocument || l6).$$reactFormReplay, a4 != null) for (t = 0; t < a4.length; t += 3) {
      var n2 = a4[t], f4 = a4[t + 1], c3 = n2[Sl2] || null;
      if (typeof f4 == "function") c3 || u0(a4);
      else if (c3) {
        var e = null;
        if (f4 && f4.hasAttribute("formAction")) {
          if (n2 = f4, c3 = f4[Sl2] || null) e = c3.formAction;
          else if (oe5(n2) !== null) continue;
        } else e = c3.action;
        typeof e == "function" ? a4[t + 1] = e : (a4.splice(t, 3), t -= 3), u0(a4);
      }
    }
  }
  function _e5(l6) {
    this._internalRoot = l6;
  }
  hf.prototype.render = _e5.prototype.render = function(l6) {
    var u6 = this._internalRoot;
    if (u6 === null) throw Error(A10(409));
    var a4 = u6.current, t = El2();
    _v(a4, t, l6, u6, null, null);
  };
  hf.prototype.unmount = _e5.prototype.unmount = function() {
    var l6 = this._internalRoot;
    if (l6 !== null) {
      this._internalRoot = null;
      var u6 = l6.containerInfo;
      _v(l6.current, 2, null, l6, null, null), ff(), u6[Xa] = null;
    }
  };
  function hf(l6) {
    this._internalRoot = l6;
  }
  hf.prototype.unstable_scheduleHydration = function(l6) {
    if (l6) {
      var u6 = b0();
      l6 = {
        blockedOn: null,
        target: l6,
        priority: u6
      };
      for (var a4 = 0; a4 < mu.length && u6 !== 0 && u6 < mu[a4].priority; a4++) ;
      mu.splice(a4, 0, l6), a4 === 0 && Qv(l6);
    }
  };
  var a0 = t0.version;
  if (a0 !== "19.1.1") throw Error(A10(527, a0, "19.1.1"));
  o4.findDOMNode = function(l6) {
    var u6 = l6._reactInternals;
    if (u6 === void 0) throw typeof l6.render == "function" ? Error(A10(188)) : (l6 = Object.keys(l6).join(","), Error(A10(268, l6)));
    return l6 = kv(u6), l6 = l6 !== null ? c0(l6) : null, l6 = l6 === null ? null : l6.stateNode, l6;
  };
  var Td = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: s2,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (wa = __REACT_DEVTOOLS_GLOBAL_HOOK__, !wa.isDisabled && wa.supportsFiber)) try {
    Nt2 = wa.inject(Td), Tl2 = wa;
  } catch {
  }
  var wa;
  yf.createRoot = function(l6, u6) {
    if (!n0(l6)) throw Error(A10(299));
    var a4 = false, t = "", n2 = Y1, f4 = o1, c3 = _1, e = null;
    return u6 != null && (u6.unstable_strictMode === true && (a4 = true), u6.identifierPrefix !== void 0 && (t = u6.identifierPrefix), u6.onUncaughtError !== void 0 && (n2 = u6.onUncaughtError), u6.onCaughtError !== void 0 && (f4 = u6.onCaughtError), u6.onRecoverableError !== void 0 && (c3 = u6.onRecoverableError), u6.unstable_transitionCallbacks !== void 0 && (e = u6.unstable_transitionCallbacks)), u6 = Yv(l6, 1, false, null, null, a4, t, n2, f4, c3, e, null), l6[Xa] = u6.current, Ne4(l6), new _e5(u6);
  };
  yf.hydrateRoot = function(l6, u6, a4) {
    if (!n0(l6)) throw Error(A10(299));
    var t = false, n2 = "", f4 = Y1, c3 = o1, e = _1, i3 = null, d4 = null;
    return a4 != null && (a4.unstable_strictMode === true && (t = true), a4.identifierPrefix !== void 0 && (n2 = a4.identifierPrefix), a4.onUncaughtError !== void 0 && (f4 = a4.onUncaughtError), a4.onCaughtError !== void 0 && (c3 = a4.onCaughtError), a4.onRecoverableError !== void 0 && (e = a4.onRecoverableError), a4.unstable_transitionCallbacks !== void 0 && (i3 = a4.unstable_transitionCallbacks), a4.formState !== void 0 && (d4 = a4.formState)), u6 = Yv(l6, 1, true, u6, a4 ?? null, t, n2, f4, c3, e, i3, d4), u6.context = ov(null), a4 = u6.current, t = El2(), t = Lc(t), n2 = Mu2(t), n2.callback = null, Eu(a4, n2, t), a4 = t, u6.current.lanes = a4, Bt3(u6, a4), Ll3(u6), l6[Xa] = u6.current, Ne4(l6), new hf(u6);
  };
  yf.version = "19.1.1";
});
var jv = Ge2((Dd, Vv) => {
  "use strict";
  function xv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv);
    } catch (l6) {
      console.error(l6);
    }
  }
  xv(), Vv.exports = Zv();
});
var df = $v(jv());
var { createRoot: Od, hydrateRoot: sd, version: Ud } = df;
var Hd = df.default ?? df;

// deno:https://esm.sh/cookie@1.0.2/es2022/cookie.mjs
var E4 = Object.create;
var x4 = Object.defineProperty;
var b3 = Object.getOwnPropertyDescriptor;
var v3 = Object.getOwnPropertyNames;
var I2 = Object.getPrototypeOf;
var k4 = Object.prototype.hasOwnProperty;
var $2 = (t, r3) => () => (r3 || t((r3 = {
  exports: {}
}).exports, r3), r3.exports);
var A2 = (t, r3, e, a4) => {
  if (r3 && typeof r3 == "object" || typeof r3 == "function") for (let n2 of v3(r3)) !k4.call(t, n2) && n2 !== e && x4(t, n2, {
    get: () => r3[n2],
    enumerable: !(a4 = b3(r3, n2)) || a4.enumerable
  });
  return t;
};
var O = (t, r3, e) => (e = t != null ? E4(I2(t)) : {}, A2(r3 || !t || !t.__esModule ? x4(e, "default", {
  value: t,
  enumerable: true
}) : e, t));
var p3 = $2((u6) => {
  "use strict";
  Object.defineProperty(u6, "__esModule", {
    value: true
  });
  u6.parse = _5;
  u6.serialize = N5;
  var C8 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, z7 = /^[\u0021-\u003A\u003C-\u007E]*$/, T6 = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, j10 = /^[\u0020-\u003A\u003D-\u007E]*$/, P6 = Object.prototype.toString, R4 = (() => {
    let t = function() {
    };
    return t.prototype = /* @__PURE__ */ Object.create(null), t;
  })();
  function _5(t, r3) {
    let e = new R4(), a4 = t.length;
    if (a4 < 2) return e;
    let n2 = r3?.decode || D8, i3 = 0;
    do {
      let c3 = t.indexOf("=", i3);
      if (c3 === -1) break;
      let l6 = t.indexOf(";", i3), o4 = l6 === -1 ? a4 : l6;
      if (c3 > o4) {
        i3 = t.lastIndexOf(";", c3 - 1) + 1;
        continue;
      }
      let f4 = y7(t, i3, c3), w6 = h4(t, c3, f4), s2 = t.slice(f4, w6);
      if (e[s2] === void 0) {
        let m6 = y7(t, c3 + 1, o4), g7 = h4(t, o4, m6), S7 = n2(t.slice(m6, g7));
        e[s2] = S7;
      }
      i3 = o4 + 1;
    } while (i3 < a4);
    return e;
  }
  function y7(t, r3, e) {
    do {
      let a4 = t.charCodeAt(r3);
      if (a4 !== 32 && a4 !== 9) return r3;
    } while (++r3 < e);
    return e;
  }
  function h4(t, r3, e) {
    for (; r3 > e; ) {
      let a4 = t.charCodeAt(--r3);
      if (a4 !== 32 && a4 !== 9) return r3 + 1;
    }
    return e;
  }
  function N5(t, r3, e) {
    let a4 = e?.encode || encodeURIComponent;
    if (!C8.test(t)) throw new TypeError(`argument name is invalid: ${t}`);
    let n2 = a4(r3);
    if (!z7.test(n2)) throw new TypeError(`argument val is invalid: ${r3}`);
    let i3 = t + "=" + n2;
    if (!e) return i3;
    if (e.maxAge !== void 0) {
      if (!Number.isInteger(e.maxAge)) throw new TypeError(`option maxAge is invalid: ${e.maxAge}`);
      i3 += "; Max-Age=" + e.maxAge;
    }
    if (e.domain) {
      if (!T6.test(e.domain)) throw new TypeError(`option domain is invalid: ${e.domain}`);
      i3 += "; Domain=" + e.domain;
    }
    if (e.path) {
      if (!j10.test(e.path)) throw new TypeError(`option path is invalid: ${e.path}`);
      i3 += "; Path=" + e.path;
    }
    if (e.expires) {
      if (!L2(e.expires) || !Number.isFinite(e.expires.valueOf())) throw new TypeError(`option expires is invalid: ${e.expires}`);
      i3 += "; Expires=" + e.expires.toUTCString();
    }
    if (e.httpOnly && (i3 += "; HttpOnly"), e.secure && (i3 += "; Secure"), e.partitioned && (i3 += "; Partitioned"), e.priority) switch (typeof e.priority == "string" ? e.priority.toLowerCase() : void 0) {
      case "low":
        i3 += "; Priority=Low";
        break;
      case "medium":
        i3 += "; Priority=Medium";
        break;
      case "high":
        i3 += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${e.priority}`);
    }
    if (e.sameSite) switch (typeof e.sameSite == "string" ? e.sameSite.toLowerCase() : e.sameSite) {
      case true:
      case "strict":
        i3 += "; SameSite=Strict";
        break;
      case "lax":
        i3 += "; SameSite=Lax";
        break;
      case "none":
        i3 += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${e.sameSite}`);
    }
    return i3;
  }
  function D8(t) {
    if (t.indexOf("%") === -1) return t;
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  }
  function L2(t) {
    return P6.call(t) === "[object Date]";
  }
});
var d2 = O(p3());
var { __esModule: V2, parse: H2, serialize: q4 } = d2;
var F3 = d2.default ?? d2;

// deno:https://esm.sh/set-cookie-parser@2.7.1/es2022/set-cookie-parser.mjs
var w2 = Object.create;
var g2 = Object.defineProperty;
var x5 = Object.getOwnPropertyDescriptor;
var A3 = Object.getOwnPropertyNames;
var b4 = Object.getPrototypeOf;
var j3 = Object.prototype.hasOwnProperty;
var k5 = (e, a4) => () => (a4 || e((a4 = {
  exports: {}
}).exports, a4), a4.exports);
var O2 = (e, a4, r3, s2) => {
  if (a4 && typeof a4 == "object" || typeof a4 == "function") for (let t of A3(a4)) !j3.call(e, t) && t !== r3 && g2(e, t, {
    get: () => a4[t],
    enumerable: !(s2 = x5(a4, t)) || s2.enumerable
  });
  return e;
};
var V3 = (e, a4, r3) => (r3 = e != null ? w2(b4(e)) : {}, O2(a4 || !e || !e.__esModule ? g2(r3, "default", {
  value: e,
  enumerable: true
}) : r3, e));
var C3 = k5((E11, u6) => {
  "use strict";
  var d4 = {
    decodeValues: true,
    map: false,
    silent: false
  };
  function p6(e) {
    return typeof e == "string" && !!e.trim();
  }
  function m6(e, a4) {
    var r3 = e.split(";").filter(p6), s2 = r3.shift(), t = I5(s2), i3 = t.name, n2 = t.value;
    a4 = a4 ? Object.assign({}, d4, a4) : d4;
    try {
      n2 = a4.decodeValues ? decodeURIComponent(n2) : n2;
    } catch (o4) {
      console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + n2 + "'. Set options.decodeValues to false to disable this feature.", o4);
    }
    var l6 = {
      name: i3,
      value: n2
    };
    return r3.forEach(function(o4) {
      var h4 = o4.split("="), f4 = h4.shift().trimLeft().toLowerCase(), c3 = h4.join("=");
      f4 === "expires" ? l6.expires = new Date(c3) : f4 === "max-age" ? l6.maxAge = parseInt(c3, 10) : f4 === "secure" ? l6.secure = true : f4 === "httponly" ? l6.httpOnly = true : f4 === "samesite" ? l6.sameSite = c3 : f4 === "partitioned" ? l6.partitioned = true : l6[f4] = c3;
    }), l6;
  }
  function I5(e) {
    var a4 = "", r3 = "", s2 = e.split("=");
    return s2.length > 1 ? (a4 = s2.shift(), r3 = s2.join("=")) : r3 = e, {
      name: a4,
      value: r3
    };
  }
  function y7(e, a4) {
    if (a4 = a4 ? Object.assign({}, d4, a4) : d4, !e) return a4.map ? {} : [];
    if (e.headers) if (typeof e.headers.getSetCookie == "function") e = e.headers.getSetCookie();
    else if (e.headers["set-cookie"]) e = e.headers["set-cookie"];
    else {
      var r3 = e.headers[Object.keys(e.headers).find(function(t) {
        return t.toLowerCase() === "set-cookie";
      })];
      !r3 && e.headers.cookie && !a4.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = r3;
    }
    if (Array.isArray(e) || (e = [
      e
    ]), a4.map) {
      var s2 = {};
      return e.filter(p6).reduce(function(t, i3) {
        var n2 = m6(i3, a4);
        return t[n2.name] = n2, t;
      }, s2);
    } else return e.filter(p6).map(function(t) {
      return m6(t, a4);
    });
  }
  function L2(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != "string") return [];
    var a4 = [], r3 = 0, s2, t, i3, n2, l6;
    function o4() {
      for (; r3 < e.length && /\s/.test(e.charAt(r3)); ) r3 += 1;
      return r3 < e.length;
    }
    function h4() {
      return t = e.charAt(r3), t !== "=" && t !== ";" && t !== ",";
    }
    for (; r3 < e.length; ) {
      for (s2 = r3, l6 = false; o4(); ) if (t = e.charAt(r3), t === ",") {
        for (i3 = r3, r3 += 1, o4(), n2 = r3; r3 < e.length && h4(); ) r3 += 1;
        r3 < e.length && e.charAt(r3) === "=" ? (l6 = true, r3 = n2, a4.push(e.substring(s2, i3)), s2 = r3) : r3 = i3 + 1;
      } else r3 += 1;
      (!l6 || r3 >= e.length) && a4.push(e.substring(s2, e.length));
    }
    return a4;
  }
  u6.exports = y7;
  u6.exports.parse = y7;
  u6.exports.parseString = m6;
  u6.exports.splitCookiesString = L2;
});
var v4 = V3(C3());
var { parse: N2, parseString: P, splitCookiesString: S3 } = v4;
var W = v4.default ?? v4;

// deno:https://esm.sh/react-router@7.8.0/X-ZXJlYWN0/es2022/dom.mjs
function j4(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
function q5(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function je2({ pathname: e = "/", search: t = "", hash: r3 = "" }) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r3 && r3 !== "#" && (e += r3.charAt(0) === "#" ? r3 : "#" + r3), e;
}
function Oe2(e) {
  let t = {};
  if (e) {
    let r3 = e.indexOf("#");
    r3 >= 0 && (t.hash = e.substring(r3), e = e.substring(0, r3));
    let a4 = e.indexOf("?");
    a4 >= 0 && (t.search = e.substring(a4), e = e.substring(0, a4)), e && (t.pathname = e);
  }
  return t;
}
function ga(e) {
  return {
    defaultValue: e
  };
}
var ct;
ct = /* @__PURE__ */ new WeakMap();
function be3(e, t, r3 = "/") {
  return Mt(e, t, r3, false);
}
function Mt(e, t, r3, a4) {
  let n2 = typeof t == "string" ? Oe2(t) : t, o4 = me3(n2.pathname || "/", r3);
  if (o4 == null) return null;
  let l6 = ba(e);
  ro(l6);
  let u6 = null;
  for (let i3 = 0; u6 == null && i3 < l6.length; ++i3) {
    let s2 = ho(o4);
    u6 = fo(l6[i3], s2, a4);
  }
  return u6;
}
function Ea(e, t) {
  let { route: r3, pathname: a4, params: n2 } = e;
  return {
    id: r3.id,
    pathname: a4,
    params: n2,
    data: t[r3.id],
    loaderData: t[r3.id],
    handle: r3.handle
  };
}
function ba(e, t = [], r3 = [], a4 = "") {
  let n2 = (o4, l6, u6) => {
    let i3 = {
      relativePath: u6 === void 0 ? o4.path || "" : u6,
      caseSensitive: o4.caseSensitive === true,
      childrenIndex: l6,
      route: o4
    };
    i3.relativePath.startsWith("/") && (j4(i3.relativePath.startsWith(a4), `Absolute route path "${i3.relativePath}" nested under path "${a4}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), i3.relativePath = i3.relativePath.slice(a4.length));
    let s2 = Le2([
      a4,
      i3.relativePath
    ]), d4 = r3.concat(i3);
    o4.children && o4.children.length > 0 && (j4(o4.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${s2}".`), ba(o4.children, t, d4, s2)), !(o4.path == null && !o4.index) && t.push({
      path: s2,
      score: uo(s2, o4.index),
      routesMeta: d4
    });
  };
  return e.forEach((o4, l6) => {
    if (o4.path === "" || !o4.path?.includes("?")) n2(o4, l6);
    else for (let u6 of Sa(o4.path)) n2(o4, l6, u6);
  }), t;
}
function Sa(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r3, ...a4] = t, n2 = r3.endsWith("?"), o4 = r3.replace(/\?$/, "");
  if (a4.length === 0) return n2 ? [
    o4,
    ""
  ] : [
    o4
  ];
  let l6 = Sa(a4.join("/")), u6 = [];
  return u6.push(...l6.map((i3) => i3 === "" ? o4 : [
    o4,
    i3
  ].join("/"))), n2 && u6.push(...l6), u6.map((i3) => e.startsWith("/") && i3 === "" ? "/" : i3);
}
function ro(e) {
  e.sort((t, r3) => t.score !== r3.score ? r3.score - t.score : co(t.routesMeta.map((a4) => a4.childrenIndex), r3.routesMeta.map((a4) => a4.childrenIndex)));
}
var ao = /^:[\w-]+$/;
var no = 3;
var oo = 2;
var io = 1;
var lo = 10;
var so = -2;
var Qr = (e) => e === "*";
function uo(e, t) {
  let r3 = e.split("/"), a4 = r3.length;
  return r3.some(Qr) && (a4 += so), t && (a4 += oo), r3.filter((n2) => !Qr(n2)).reduce((n2, o4) => n2 + (ao.test(o4) ? no : o4 === "" ? io : lo), a4);
}
function co(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a4, n2) => a4 === t[n2]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function fo(e, t, r3 = false) {
  let { routesMeta: a4 } = e, n2 = {}, o4 = "/", l6 = [];
  for (let u6 = 0; u6 < a4.length; ++u6) {
    let i3 = a4[u6], s2 = u6 === a4.length - 1, d4 = o4 === "/" ? t : t.slice(o4.length) || "/", m6 = $t({
      path: i3.relativePath,
      caseSensitive: i3.caseSensitive,
      end: s2
    }, d4), f4 = i3.route;
    if (!m6 && s2 && r3 && !a4[a4.length - 1].route.index && (m6 = $t({
      path: i3.relativePath,
      caseSensitive: i3.caseSensitive,
      end: false
    }, d4)), !m6) return null;
    Object.assign(n2, m6.params), l6.push({
      params: n2,
      pathname: Le2([
        o4,
        m6.pathname
      ]),
      pathnameBase: wo(Le2([
        o4,
        m6.pathnameBase
      ])),
      route: f4
    }), m6.pathnameBase !== "/" && (o4 = Le2([
      o4,
      m6.pathnameBase
    ]));
  }
  return l6;
}
function $t(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: false,
    end: true
  });
  let [r3, a4] = Ca(e.path, e.caseSensitive, e.end), n2 = t.match(r3);
  if (!n2) return null;
  let o4 = n2[0], l6 = o4.replace(/(.)\/+$/, "$1"), u6 = n2.slice(1);
  return {
    params: a4.reduce((s2, { paramName: d4, isOptional: m6 }, f4) => {
      if (d4 === "*") {
        let g7 = u6[f4] || "";
        l6 = o4.slice(0, o4.length - g7.length).replace(/(.)\/+$/, "$1");
      }
      let R4 = u6[f4];
      return m6 && !R4 ? s2[d4] = void 0 : s2[d4] = (R4 || "").replace(/%2F/g, "/"), s2;
    }, {}),
    pathname: o4,
    pathnameBase: l6,
    pattern: e
  };
}
function Ca(e, t = false, r3 = true) {
  q5(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
  let a4 = [], n2 = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l6, u6, i3) => (a4.push({
    paramName: u6,
    isOptional: i3 != null
  }), i3 ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (a4.push({
    paramName: "*"
  }), n2 += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r3 ? n2 += "\\/*$" : e !== "" && e !== "/" && (n2 += "(?:(?=\\/|$))"), [
    new RegExp(n2, t ? void 0 : "i"),
    a4
  ];
}
function ho(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return q5(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
  }
}
function me3(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r3 = t.endsWith("/") ? t.length - 1 : t.length, a4 = e.charAt(r3);
  return a4 && a4 !== "/" ? null : e.slice(r3) || "/";
}
function po(e, t = "/") {
  let { pathname: r3, search: a4 = "", hash: n2 = "" } = typeof e == "string" ? Oe2(e) : e;
  return {
    pathname: r3 ? r3.startsWith("/") ? r3 : yo(r3, t) : t,
    search: Ro(a4),
    hash: vo(n2)
  };
}
function yo(e, t) {
  let r3 = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n2) => {
    n2 === ".." ? r3.length > 1 && r3.pop() : n2 !== "." && r3.push(n2);
  }), r3.length > 1 ? r3.join("/") : "/";
}
function qt(e, t, r3, a4) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a4)}].  Please separate it out to the \`to.${r3}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function xa(e) {
  return e.filter((t, r3) => r3 === 0 || t.route.path && t.route.path.length > 0);
}
function yr(e) {
  let t = xa(e);
  return t.map((r3, a4) => a4 === t.length - 1 ? r3.pathname : r3.pathnameBase);
}
function wr(e, t, r3, a4 = false) {
  let n2;
  typeof e == "string" ? n2 = Oe2(e) : (n2 = {
    ...e
  }, j4(!n2.pathname || !n2.pathname.includes("?"), qt("?", "pathname", "search", n2)), j4(!n2.pathname || !n2.pathname.includes("#"), qt("#", "pathname", "hash", n2)), j4(!n2.search || !n2.search.includes("#"), qt("#", "search", "hash", n2)));
  let o4 = e === "" || n2.pathname === "", l6 = o4 ? "/" : n2.pathname, u6;
  if (l6 == null) u6 = r3;
  else {
    let m6 = t.length - 1;
    if (!a4 && l6.startsWith("..")) {
      let f4 = l6.split("/");
      for (; f4[0] === ".."; ) f4.shift(), m6 -= 1;
      n2.pathname = f4.join("/");
    }
    u6 = m6 >= 0 ? t[m6] : "/";
  }
  let i3 = po(n2, u6), s2 = l6 && l6 !== "/" && l6.endsWith("/"), d4 = (o4 || l6 === ".") && r3.endsWith("/");
  return !i3.pathname.endsWith("/") && (s2 || d4) && (i3.pathname += "/"), i3;
}
var Le2 = (e) => e.join("/").replace(/\/\/+/g, "/");
var wo = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
var Ro = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
var vo = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Me2(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var La = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var bo = new Set(La);
var So = [
  "GET",
  ...La
];
var Co = new Set(So);
var _a = Symbol("ResetLoaderData");
var Xe2 = de(null);
Xe2.displayName = "DataRouter";
var et = de(null);
et.displayName = "DataRouterState";
var Na = de(false);
var Er = de({
  isTransitioning: false
});
Er.displayName = "ViewTransition";
var $a = de(/* @__PURE__ */ new Map());
$a.displayName = "Fetchers";
var Go = de(null);
Go.displayName = "Await";
var ge2 = de(null);
ge2.displayName = "Navigation";
var ht = de(null);
ht.displayName = "Location";
var Fe = de({
  outlet: null,
  matches: [],
  isDataRoute: false
});
Fe.displayName = "Route";
var br = de(null);
br.displayName = "RouteError";
var Pe3 = true;
function Ko(e, { relative: t } = {}) {
  j4(mt(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r3, navigator: a4 } = Ie(ge2), { hash: n2, pathname: o4, search: l6 } = pt(e, {
    relative: t
  }), u6 = o4;
  return r3 !== "/" && (u6 = o4 === "/" ? r3 : Le2([
    r3,
    o4
  ])), a4.createHref({
    pathname: u6,
    search: l6,
    hash: n2
  });
}
function mt() {
  return Ie(ht) != null;
}
function ke3() {
  return j4(mt(), "useLocation() may be used only in the context of a <Router> component."), Ie(ht).location;
}
var Ha = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ua(e) {
  Ie(ge2).static || De(e);
}
function Qo() {
  let { isDataRoute: e } = Ie(Fe);
  return e ? ui() : Zo();
}
function Zo() {
  j4(mt(), "useNavigate() may be used only in the context of a <Router> component.");
  let e = Ie(Xe2), { basename: t, navigator: r3 } = Ie(ge2), { matches: a4 } = Ie(Fe), { pathname: n2 } = ke3(), o4 = JSON.stringify(yr(a4)), l6 = ze(false);
  return Ua(() => {
    l6.current = true;
  }), He((i3, s2 = {}) => {
    if (q5(l6.current, Ha), !l6.current) return;
    if (typeof i3 == "number") {
      r3.go(i3);
      return;
    }
    let d4 = wr(i3, JSON.parse(o4), n2, s2.relative === "path");
    e == null && t !== "/" && (d4.pathname = d4.pathname === "/" ? t : Le2([
      t,
      d4.pathname
    ])), (s2.replace ? r3.replace : r3.push)(d4, s2.state, s2);
  }, [
    t,
    r3,
    o4,
    n2,
    e
  ]);
}
var Il = de(null);
function pt(e, { relative: t } = {}) {
  let { matches: r3 } = Ie(Fe), { pathname: a4 } = ke3(), n2 = JSON.stringify(yr(r3));
  return be(() => wr(e, JSON.parse(n2), a4, t === "path"), [
    e,
    n2,
    a4,
    t
  ]);
}
function qo(e, t, r3, a4) {
  j4(mt(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: n2 } = Ie(ge2), { matches: o4 } = Ie(Fe), l6 = o4[o4.length - 1], u6 = l6 ? l6.params : {}, i3 = l6 ? l6.pathname : "/", s2 = l6 ? l6.pathnameBase : "/", d4 = l6 && l6.route;
  if (Pe3) {
    let w6 = d4 && d4.path || "";
    za(i3, !d4 || w6.endsWith("*") || w6.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${i3}" (under <Route path="${w6}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w6}"> to <Route path="${w6 === "/" ? "*" : `${w6}/*`}">.`);
  }
  let m6 = ke3(), f4;
  if (t) {
    let w6 = typeof t == "string" ? Oe2(t) : t;
    j4(s2 === "/" || w6.pathname?.startsWith(s2), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s2}" but pathname "${w6.pathname}" was given in the \`location\` prop.`), f4 = w6;
  } else f4 = m6;
  let R4 = f4.pathname || "/", g7 = R4;
  if (s2 !== "/") {
    let w6 = s2.replace(/^\//, "").split("/");
    g7 = "/" + R4.replace(/^\//, "").split("/").slice(w6.length).join("/");
  }
  let b10 = be3(e, {
    pathname: g7
  });
  Pe3 && (q5(d4 || b10 != null, `No routes matched location "${f4.pathname}${f4.search}${f4.hash}" `), q5(b10 == null || b10[b10.length - 1].route.element !== void 0 || b10[b10.length - 1].route.Component !== void 0 || b10[b10.length - 1].route.lazy !== void 0, `Matched leaf route at location "${f4.pathname}${f4.search}${f4.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));
  let v8 = ni(b10 && b10.map((w6) => Object.assign({}, w6, {
    params: Object.assign({}, u6, w6.params),
    pathname: Le2([
      s2,
      n2.encodeLocation ? n2.encodeLocation(w6.pathname).pathname : w6.pathname
    ]),
    pathnameBase: w6.pathnameBase === "/" ? s2 : Le2([
      s2,
      n2.encodeLocation ? n2.encodeLocation(w6.pathnameBase).pathname : w6.pathnameBase
    ])
  })), o4, r3, a4);
  return t && v8 ? Ce(ht.Provider, {
    value: {
      location: {
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default",
        ...f4
      },
      navigationType: "POP"
    }
  }, v8) : v8;
}
function ei() {
  let e = Dr(), t = Me2(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r3 = e instanceof Error ? e.stack : null, a4 = "rgba(200,200,200, 0.5)", n2 = {
    padding: "0.5rem",
    backgroundColor: a4
  }, o4 = {
    padding: "2px 4px",
    backgroundColor: a4
  }, l6 = null;
  return Pe3 && (console.error("Error handled by React Router default ErrorBoundary:", e), l6 = Ce(ae, null, Ce("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), Ce("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", Ce("code", {
    style: o4
  }, "ErrorBoundary"), " or", " ", Ce("code", {
    style: o4
  }, "errorElement"), " prop on your route."))), Ce(ae, null, Ce("h2", null, "Unexpected Application Error!"), Ce("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r3 ? Ce("pre", {
    style: n2
  }, r3) : null, l6);
}
var ti = Ce(ei, null);
var ri = class extends pe {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error("React Router caught the following error during render", e, t);
  }
  render() {
    return this.state.error !== void 0 ? Ce(Fe.Provider, {
      value: this.props.routeContext
    }, Ce(br.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
};
function ai({ routeContext: e, match: t, children: r3 }) {
  let a4 = Ie(Xe2);
  return a4 && a4.static && a4.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a4.staticContext._deepestRenderedBoundaryId = t.route.id), Ce(Fe.Provider, {
    value: e
  }, r3);
}
function ni(e, t = [], r3 = null, a4 = null) {
  if (e == null) {
    if (!r3) return null;
    if (r3.errors) e = r3.matches;
    else if (t.length === 0 && !r3.initialized && r3.matches.length > 0) e = r3.matches;
    else return null;
  }
  let n2 = e, o4 = r3?.errors;
  if (o4 != null) {
    let i3 = n2.findIndex((s2) => s2.route.id && o4?.[s2.route.id] !== void 0);
    j4(i3 >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o4).join(",")}`), n2 = n2.slice(0, Math.min(n2.length, i3 + 1));
  }
  let l6 = false, u6 = -1;
  if (r3) for (let i3 = 0; i3 < n2.length; i3++) {
    let s2 = n2[i3];
    if ((s2.route.HydrateFallback || s2.route.hydrateFallbackElement) && (u6 = i3), s2.route.id) {
      let { loaderData: d4, errors: m6 } = r3, f4 = s2.route.loader && !d4.hasOwnProperty(s2.route.id) && (!m6 || m6[s2.route.id] === void 0);
      if (s2.route.lazy || f4) {
        l6 = true, u6 >= 0 ? n2 = n2.slice(0, u6 + 1) : n2 = [
          n2[0]
        ];
        break;
      }
    }
  }
  return n2.reduceRight((i3, s2, d4) => {
    let m6, f4 = false, R4 = null, g7 = null;
    r3 && (m6 = o4 && s2.route.id ? o4[s2.route.id] : void 0, R4 = s2.route.errorElement || ti, l6 && (u6 < 0 && d4 === 0 ? (za("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), f4 = true, g7 = null) : u6 === d4 && (f4 = true, g7 = s2.route.hydrateFallbackElement || null)));
    let b10 = t.concat(n2.slice(0, d4 + 1)), v8 = () => {
      let w6;
      return m6 ? w6 = R4 : f4 ? w6 = g7 : s2.route.Component ? w6 = Ce(s2.route.Component, null) : s2.route.element ? w6 = s2.route.element : w6 = i3, Ce(ai, {
        match: s2,
        routeContext: {
          outlet: i3,
          matches: b10,
          isDataRoute: r3 != null
        },
        children: w6
      });
    };
    return r3 && (s2.route.ErrorBoundary || s2.route.errorElement || d4 === 0) ? Ce(ri, {
      location: r3.location,
      revalidation: r3.revalidation,
      component: R4,
      error: m6,
      children: v8(),
      routeContext: {
        outlet: null,
        matches: b10,
        isDataRoute: true
      }
    }) : v8();
  }, null);
}
function Sr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function oi(e) {
  let t = Ie(Xe2);
  return j4(t, Sr(e)), t;
}
function Cr(e) {
  let t = Ie(et);
  return j4(t, Sr(e)), t;
}
function ii(e) {
  let t = Ie(Fe);
  return j4(t, Sr(e)), t;
}
function xr(e) {
  let t = ii(e), r3 = t.matches[t.matches.length - 1];
  return j4(r3.route.id, `${e} can only be used on routes that contain a unique "id"`), r3.route.id;
}
function li() {
  return xr("useRouteId");
}
function si() {
  return Cr("useNavigation").navigation;
}
function ja() {
  let { matches: e, loaderData: t } = Cr("useMatches");
  return be(() => e.map((r3) => Ea(r3, t)), [
    e,
    t
  ]);
}
function Dr() {
  let e = Ie(br), t = Cr("useRouteError"), r3 = xr("useRouteError");
  return e !== void 0 ? e : t.errors?.[r3];
}
function ui() {
  let { router: e } = oi("useNavigate"), t = xr("useNavigate"), r3 = ze(false);
  return Ua(() => {
    r3.current = true;
  }), He(async (n2, o4 = {}) => {
    q5(r3.current, Ha), r3.current && (typeof n2 == "number" ? e.navigate(n2) : await e.navigate(n2, {
      fromRouteId: t,
      ...o4
    }));
  }, [
    e,
    t
  ]);
}
var da = {};
function za(e, t, r3) {
  !t && !da[e] && (da[e] = true, q5(false, r3));
}
var di = Oe(fi);
function fi({ routes: e, future: t, state: r3 }) {
  return qo(e, void 0, r3, t);
}
function Va({ basename: e = "/", children: t = null, location: r3, navigationType: a4 = "POP", navigator: n2, static: o4 = false }) {
  j4(!mt(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let l6 = e.replace(/^\/*/, "/"), u6 = be(() => ({
    basename: l6,
    navigator: n2,
    static: o4,
    future: {}
  }), [
    l6,
    n2,
    o4
  ]);
  typeof r3 == "string" && (r3 = Oe2(r3));
  let { pathname: i3 = "/", search: s2 = "", hash: d4 = "", state: m6 = null, key: f4 = "default" } = r3, R4 = be(() => {
    let g7 = me3(i3, l6);
    return g7 == null ? null : {
      location: {
        pathname: g7,
        search: s2,
        hash: d4,
        state: m6,
        key: f4
      },
      navigationType: a4
    };
  }, [
    l6,
    i3,
    s2,
    d4,
    m6,
    f4,
    a4
  ]);
  return q5(R4 != null, `<Router basename="${l6}"> is not able to match the URL "${i3}${s2}${d4}" because it does not start with the basename, so the <Router> won't render anything.`), R4 == null ? null : Ce(ge2.Provider, {
    value: u6
  }, Ce(ht.Provider, {
    children: t,
    value: R4
  }));
}
var Ft = "get";
var kt = "application/x-www-form-urlencoded";
function Vt(e) {
  return e != null && typeof e.tagName == "string";
}
function hi(e) {
  return Vt(e) && e.tagName.toLowerCase() === "button";
}
function mi(e) {
  return Vt(e) && e.tagName.toLowerCase() === "form";
}
function pi(e) {
  return Vt(e) && e.tagName.toLowerCase() === "input";
}
function yi(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function wi(e, t) {
  return e.button === 0 && (!t || t === "_self") && !yi(e);
}
var Lt = null;
function Ri() {
  if (Lt === null) try {
    new FormData(document.createElement("form"), 0), Lt = false;
  } catch {
    Lt = true;
  }
  return Lt;
}
var vi = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function rr(e) {
  return e != null && !vi.has(e) ? (q5(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kt}"`), null) : e;
}
function gi(e, t) {
  let r3, a4, n2, o4, l6;
  if (mi(e)) {
    let u6 = e.getAttribute("action");
    a4 = u6 ? me3(u6, t) : null, r3 = e.getAttribute("method") || Ft, n2 = rr(e.getAttribute("enctype")) || kt, o4 = new FormData(e);
  } else if (hi(e) || pi(e) && (e.type === "submit" || e.type === "image")) {
    let u6 = e.form;
    if (u6 == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let i3 = e.getAttribute("formaction") || u6.getAttribute("action");
    if (a4 = i3 ? me3(i3, t) : null, r3 = e.getAttribute("formmethod") || u6.getAttribute("method") || Ft, n2 = rr(e.getAttribute("formenctype")) || rr(u6.getAttribute("enctype")) || kt, o4 = new FormData(u6, e), !Ri()) {
      let { name: s2, type: d4, value: m6 } = e;
      if (d4 === "image") {
        let f4 = s2 ? `${s2}.` : "";
        o4.append(`${f4}x`, "0"), o4.append(`${f4}y`, "0");
      } else s2 && o4.append(s2, m6);
    }
  } else {
    if (Vt(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r3 = Ft, a4 = null, n2 = kt, l6 = e;
  }
  return o4 && n2 === "text/plain" && (l6 = o4, o4 = void 0), {
    action: a4,
    method: r3.toLowerCase(),
    encType: n2,
    formData: o4,
    body: l6
  };
}
var Nl = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ue2(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
var zt = Symbol("SingleFetchRedirect");
var _r = /* @__PURE__ */ new Set([
  100,
  101,
  204,
  205
]);
function Tr(e, t, r3) {
  let a4 = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
  return a4.pathname === "/" ? a4.pathname = `_root.${r3}` : t && me3(a4.pathname, t) === "/" ? a4.pathname = `${t.replace(/\/$/, "")}/_root.${r3}` : a4.pathname = `${a4.pathname.replace(/\/$/, "")}.${r3}`, a4;
}
async function tn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r3 = await import(e.module);
    return t[e.id] = r3, r3;
  } catch (r3) {
    if (console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(r3), window.__reactRouterContext && window.__reactRouterContext.isSpaMode && import.meta.hot) throw r3;
    return window.location.reload(), new Promise(() => {
    });
  }
}
function on(e) {
  return e != null && typeof e.page == "string";
}
function Xi(e) {
  return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Gi(e, t, r3) {
  let a4 = await Promise.all(e.map(async (n2) => {
    let o4 = t.routes[n2.route.id];
    if (o4) {
      let l6 = await tn(o4, r3);
      return l6.links ? l6.links() : [];
    }
    return [];
  }));
  return Zi(a4.flat(1).filter(Xi).filter((n2) => n2.rel === "stylesheet" || n2.rel === "preload").map((n2) => n2.rel === "stylesheet" ? {
    ...n2,
    rel: "prefetch",
    as: "style"
  } : {
    ...n2,
    rel: "prefetch"
  }));
}
function ya(e, t, r3, a4, n2, o4) {
  let l6 = (i3, s2) => r3[s2] ? i3.route.id !== r3[s2].route.id : true, u6 = (i3, s2) => r3[s2].pathname !== i3.pathname || r3[s2].route.path?.endsWith("*") && r3[s2].params["*"] !== i3.params["*"];
  return o4 === "assets" ? t.filter((i3, s2) => l6(i3, s2) || u6(i3, s2)) : o4 === "data" ? t.filter((i3, s2) => {
    let d4 = a4.routes[i3.route.id];
    if (!d4 || !d4.hasLoader) return false;
    if (l6(i3, s2) || u6(i3, s2)) return true;
    if (i3.route.shouldRevalidate) {
      let m6 = i3.route.shouldRevalidate({
        currentUrl: new URL(n2.pathname + n2.search + n2.hash, window.origin),
        currentParams: r3[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: i3.params,
        defaultShouldRevalidate: true
      });
      if (typeof m6 == "boolean") return m6;
    }
    return true;
  }) : [];
}
function ln(e, t, { includeHydrateFallback: r3 } = {}) {
  return Ki(e.map((a4) => {
    let n2 = t.routes[a4.route.id];
    if (!n2) return [];
    let o4 = [
      n2.module
    ];
    return n2.clientActionModule && (o4 = o4.concat(n2.clientActionModule)), n2.clientLoaderModule && (o4 = o4.concat(n2.clientLoaderModule)), r3 && n2.hydrateFallbackModule && (o4 = o4.concat(n2.hydrateFallbackModule)), n2.imports && (o4 = o4.concat(n2.imports)), o4;
  }).flat(1));
}
function Ki(e) {
  return [
    ...new Set(e)
  ];
}
function Qi(e) {
  let t = {}, r3 = Object.keys(e).sort();
  for (let a4 of r3) t[a4] = e[a4];
  return t;
}
function Zi(e, t) {
  let r3 = /* @__PURE__ */ new Set(), a4 = new Set(t);
  return e.reduce((n2, o4) => {
    if (t && !on(o4) && o4.as === "script" && o4.href && a4.has(o4.href)) return n2;
    let u6 = JSON.stringify(Qi(o4));
    return r3.has(u6) || (r3.add(u6), n2.push({
      key: u6,
      link: o4
    })), n2;
  }, []);
}
function Fr() {
  let e = Ie(Xe2);
  return ue2(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function yn() {
  let e = Ie(et);
  return ue2(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var Ge3 = de(void 0);
Ge3.displayName = "FrameworkContext";
function Jt() {
  let e = Ie(Ge3);
  return ue2(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function ul(e, t) {
  let r3 = Ie(Ge3), [a4, n2] = Ge(false), [o4, l6] = Ge(false), { onFocus: u6, onBlur: i3, onMouseEnter: s2, onMouseLeave: d4, onTouchStart: m6 } = t, f4 = ze(null);
  Le(() => {
    if (e === "render" && l6(true), e === "viewport") {
      let b10 = (w6) => {
        w6.forEach((D8) => {
          l6(D8.isIntersecting);
        });
      }, v8 = new IntersectionObserver(b10, {
        threshold: 0.5
      });
      return f4.current && v8.observe(f4.current), () => {
        v8.disconnect();
      };
    }
  }, [
    e
  ]), Le(() => {
    if (a4) {
      let b10 = setTimeout(() => {
        l6(true);
      }, 100);
      return () => {
        clearTimeout(b10);
      };
    }
  }, [
    a4
  ]);
  let R4 = () => {
    n2(true);
  }, g7 = () => {
    n2(false), l6(false);
  };
  return r3 ? e !== "intent" ? [
    o4,
    f4,
    {}
  ] : [
    o4,
    f4,
    {
      onFocus: ut(u6, R4),
      onBlur: ut(i3, g7),
      onMouseEnter: ut(s2, R4),
      onMouseLeave: ut(d4, g7),
      onTouchStart: ut(m6, R4)
    }
  ] : [
    false,
    f4,
    {}
  ];
}
function ut(e, t) {
  return (r3) => {
    e && e(r3), r3.defaultPrevented || t(r3);
  };
}
function dl({ page: e, ...t }) {
  let { router: r3 } = Fr(), a4 = be(() => be3(r3.routes, e, r3.basename), [
    r3.routes,
    e,
    r3.basename
  ]);
  return a4 ? Ce(hl, {
    page: e,
    matches: a4,
    ...t
  }) : null;
}
function fl(e) {
  let { manifest: t, routeModules: r3 } = Jt(), [a4, n2] = Ge([]);
  return Le(() => {
    let o4 = false;
    return Gi(e, t, r3).then((l6) => {
      o4 || n2(l6);
    }), () => {
      o4 = true;
    };
  }, [
    e,
    t,
    r3
  ]), a4;
}
function hl({ page: e, matches: t, ...r3 }) {
  let a4 = ke3(), { manifest: n2, routeModules: o4 } = Jt(), { basename: l6 } = Fr(), { loaderData: u6, matches: i3 } = yn(), s2 = be(() => ya(e, t, i3, n2, a4, "data"), [
    e,
    t,
    i3,
    n2,
    a4
  ]), d4 = be(() => ya(e, t, i3, n2, a4, "assets"), [
    e,
    t,
    i3,
    n2,
    a4
  ]), m6 = be(() => {
    if (e === a4.pathname + a4.search + a4.hash) return [];
    let g7 = /* @__PURE__ */ new Set(), b10 = false;
    if (t.forEach((w6) => {
      let D8 = n2.routes[w6.route.id];
      !D8 || !D8.hasLoader || (!s2.some((C8) => C8.route.id === w6.route.id) && w6.route.id in u6 && o4[w6.route.id]?.shouldRevalidate || D8.hasClientLoader ? b10 = true : g7.add(w6.route.id));
    }), g7.size === 0) return [];
    let v8 = Tr(e, l6, "data");
    return b10 && g7.size > 0 && v8.searchParams.set("_routes", t.filter((w6) => g7.has(w6.route.id)).map((w6) => w6.route.id).join(",")), [
      v8.pathname + v8.search
    ];
  }, [
    l6,
    u6,
    a4,
    n2,
    s2,
    t,
    e,
    o4
  ]), f4 = be(() => ln(d4, n2), [
    d4,
    n2
  ]), R4 = fl(d4);
  return Ce(ae, null, m6.map((g7) => Ce("link", {
    key: g7,
    rel: "prefetch",
    as: "fetch",
    href: g7,
    ...r3
  })), f4.map((g7) => Ce("link", {
    key: g7,
    rel: "modulepreload",
    href: g7,
    ...r3
  })), R4.map(({ key: g7, link: b10 }) => Ce("link", {
    key: g7,
    nonce: r3.nonce,
    ...b10
  })));
}
function yl(...e) {
  return (t) => {
    e.forEach((r3) => {
      typeof r3 == "function" ? r3(t) : r3 != null && (r3.current = t);
    });
  };
}
var Rn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Rn && (window.__reactRouterVersion = "7.8.0");
} catch {
}
function wl({ basename: e, children: t, history: r3 }) {
  let [a4, n2] = Ge({
    action: r3.action,
    location: r3.location
  }), o4 = He((l6) => {
    ge(() => n2(l6));
  }, [
    n2
  ]);
  return De(() => r3.listen(o4), [
    r3,
    o4
  ]), Ce(Va, {
    basename: e,
    children: t,
    location: a4.location,
    navigationType: a4.action,
    navigator: r3
  });
}
wl.displayName = "unstable_HistoryRouter";
var vn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var gn = Ae(function({ onClick: t, discover: r3 = "render", prefetch: a4 = "none", relative: n2, reloadDocument: o4, replace: l6, state: u6, target: i3, to: s2, preventScrollReset: d4, viewTransition: m6, ...f4 }, R4) {
  let { basename: g7 } = Ie(ge2), b10 = typeof s2 == "string" && vn.test(s2), v8, w6 = false;
  if (typeof s2 == "string" && b10 && (v8 = s2, Rn)) try {
    let z7 = new URL(window.location.href), X5 = s2.startsWith("//") ? new URL(z7.protocol + s2) : new URL(s2), ie4 = me3(X5.pathname, g7);
    X5.origin === z7.origin && ie4 != null ? s2 = ie4 + X5.search + X5.hash : w6 = true;
  } catch {
    q5(false, `<Link to="${s2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  let D8 = Ko(s2, {
    relative: n2
  }), [C8, x9, L2] = ul(a4, f4), p6 = bl(s2, {
    replace: l6,
    state: u6,
    target: i3,
    preventScrollReset: d4,
    relative: n2,
    viewTransition: m6
  });
  function H9(z7) {
    t && t(z7), z7.defaultPrevented || p6(z7);
  }
  let B6 = Ce("a", {
    ...f4,
    ...L2,
    href: v8 || D8,
    onClick: w6 || o4 ? t : H9,
    ref: yl(R4, x9),
    target: i3,
    "data-discover": !b10 && r3 === "render" ? "true" : void 0
  });
  return C8 && !b10 ? Ce(ae, null, B6, Ce(dl, {
    page: D8
  })) : B6;
});
gn.displayName = "Link";
var Rl = Ae(function({ "aria-current": t = "page", caseSensitive: r3 = false, className: a4 = "", end: n2 = false, style: o4, to: l6, viewTransition: u6, children: i3, ...s2 }, d4) {
  let m6 = pt(l6, {
    relative: s2.relative
  }), f4 = ke3(), R4 = Ie(et), { navigator: g7, basename: b10 } = Ie(ge2), v8 = R4 != null && _l(m6) && u6 === true, w6 = g7.encodeLocation ? g7.encodeLocation(m6).pathname : m6.pathname, D8 = f4.pathname, C8 = R4 && R4.navigation && R4.navigation.location ? R4.navigation.location.pathname : null;
  r3 || (D8 = D8.toLowerCase(), C8 = C8 ? C8.toLowerCase() : null, w6 = w6.toLowerCase()), C8 && b10 && (C8 = me3(C8, b10) || C8);
  let x9 = w6 !== "/" && w6.endsWith("/") ? w6.length - 1 : w6.length, L2 = D8 === w6 || !n2 && D8.startsWith(w6) && D8.charAt(x9) === "/", p6 = C8 != null && (C8 === w6 || !n2 && C8.startsWith(w6) && C8.charAt(w6.length) === "/"), H9 = {
    isActive: L2,
    isPending: p6,
    isTransitioning: v8
  }, B6 = L2 ? t : void 0, z7;
  typeof a4 == "function" ? z7 = a4(H9) : z7 = [
    a4,
    L2 ? "active" : null,
    p6 ? "pending" : null,
    v8 ? "transitioning" : null
  ].filter(Boolean).join(" ");
  let X5 = typeof o4 == "function" ? o4(H9) : o4;
  return Ce(gn, {
    ...s2,
    "aria-current": B6,
    className: z7,
    ref: d4,
    style: X5,
    to: l6,
    viewTransition: u6
  }, typeof i3 == "function" ? i3(H9) : i3);
});
Rl.displayName = "NavLink";
var vl = Ae(({ discover: e = "render", fetcherKey: t, navigate: r3, reloadDocument: a4, replace: n2, state: o4, method: l6 = Ft, action: u6, onSubmit: i3, relative: s2, preventScrollReset: d4, viewTransition: m6, ...f4 }, R4) => {
  let g7 = xl(), b10 = Dl(u6, {
    relative: s2
  }), v8 = l6.toLowerCase() === "get" ? "get" : "post", w6 = typeof u6 == "string" && vn.test(u6);
  return Ce("form", {
    ref: R4,
    method: v8,
    action: b10,
    onSubmit: a4 ? i3 : (C8) => {
      if (i3 && i3(C8), C8.defaultPrevented) return;
      C8.preventDefault();
      let x9 = C8.nativeEvent.submitter, L2 = x9?.getAttribute("formmethod") || l6;
      g7(x9 || C8.currentTarget, {
        fetcherKey: t,
        method: L2,
        navigate: r3,
        replace: n2,
        state: o4,
        relative: s2,
        preventScrollReset: d4,
        viewTransition: m6
      });
    },
    ...f4,
    "data-discover": !w6 && e === "render" ? "true" : void 0
  });
});
vl.displayName = "Form";
function gl({ getKey: e, storageKey: t, ...r3 }) {
  let a4 = Ie(Ge3), { basename: n2 } = Ie(ge2), o4 = ke3(), l6 = ja();
  Ll({
    getKey: e,
    storageKey: t
  });
  let u6 = be(() => {
    if (!a4 || !e) return null;
    let s2 = mr(o4, l6, n2, e);
    return s2 !== o4.key ? s2 : null;
  }, []);
  if (!a4 || a4.isSpaMode) return null;
  let i3 = ((s2, d4) => {
    if (!window.history.state || !window.history.state.key) {
      let m6 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: m6
      }, "");
    }
    try {
      let f4 = JSON.parse(sessionStorage.getItem(s2) || "{}")[d4 || window.history.state.key];
      typeof f4 == "number" && window.scrollTo(0, f4);
    } catch (m6) {
      console.error(m6), sessionStorage.removeItem(s2);
    }
  }).toString();
  return Ce("script", {
    ...r3,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${i3})(${JSON.stringify(t || hr)}, ${JSON.stringify(u6)})`
    }
  });
}
gl.displayName = "ScrollRestoration";
function En(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ar(e) {
  let t = Ie(Xe2);
  return j4(t, En(e)), t;
}
function El(e) {
  let t = Ie(et);
  return j4(t, En(e)), t;
}
function bl(e, { target: t, replace: r3, state: a4, preventScrollReset: n2, relative: o4, viewTransition: l6 } = {}) {
  let u6 = Qo(), i3 = ke3(), s2 = pt(e, {
    relative: o4
  });
  return He((d4) => {
    if (wi(d4, t)) {
      d4.preventDefault();
      let m6 = r3 !== void 0 ? r3 : je2(i3) === je2(s2);
      u6(e, {
        replace: m6,
        state: a4,
        preventScrollReset: n2,
        relative: o4,
        viewTransition: l6
      });
    }
  }, [
    i3,
    u6,
    s2,
    r3,
    a4,
    t,
    e,
    n2,
    o4,
    l6
  ]);
}
var Sl = 0;
var Cl = () => `__${String(++Sl)}__`;
function xl() {
  let { router: e } = Ar("useSubmit"), { basename: t } = Ie(ge2), r3 = li();
  return He(async (a4, n2 = {}) => {
    let { action: o4, method: l6, encType: u6, formData: i3, body: s2 } = gi(a4, t);
    if (n2.navigate === false) {
      let d4 = n2.fetcherKey || Cl();
      await e.fetch(d4, r3, n2.action || o4, {
        preventScrollReset: n2.preventScrollReset,
        formData: i3,
        body: s2,
        formMethod: n2.method || l6,
        formEncType: n2.encType || u6,
        flushSync: n2.flushSync
      });
    } else await e.navigate(n2.action || o4, {
      preventScrollReset: n2.preventScrollReset,
      formData: i3,
      body: s2,
      formMethod: n2.method || l6,
      formEncType: n2.encType || u6,
      replace: n2.replace,
      state: n2.state,
      fromRouteId: r3,
      flushSync: n2.flushSync,
      viewTransition: n2.viewTransition
    });
  }, [
    e,
    t,
    r3
  ]);
}
function Dl(e, { relative: t } = {}) {
  let { basename: r3 } = Ie(ge2), a4 = Ie(Fe);
  j4(a4, "useFormAction must be used inside a RouteContext");
  let [n2] = a4.matches.slice(-1), o4 = {
    ...pt(e || ".", {
      relative: t
    })
  }, l6 = ke3();
  if (e == null) {
    o4.search = l6.search;
    let u6 = new URLSearchParams(o4.search), i3 = u6.getAll("index");
    if (i3.some((d4) => d4 === "")) {
      u6.delete("index"), i3.filter((m6) => m6).forEach((m6) => u6.append("index", m6));
      let d4 = u6.toString();
      o4.search = d4 ? `?${d4}` : "";
    }
  }
  return (!e || e === ".") && n2.route.index && (o4.search = o4.search ? o4.search.replace(/^\?/, "?index&") : "?index"), r3 !== "/" && (o4.pathname = o4.pathname === "/" ? r3 : Le2([
    r3,
    o4.pathname
  ])), je2(o4);
}
var hr = "react-router-scroll-positions";
var Tt = {};
function mr(e, t, r3, a4) {
  let n2 = null;
  return a4 && (r3 !== "/" ? n2 = a4({
    ...e,
    pathname: me3(e.pathname, r3) || e.pathname
  }, t) : n2 = a4(e, t)), n2 == null && (n2 = e.key), n2;
}
function Ll({ getKey: e, storageKey: t } = {}) {
  let { router: r3 } = Ar("useScrollRestoration"), { restoreScrollPosition: a4, preventScrollReset: n2 } = El("useScrollRestoration"), { basename: o4 } = Ie(ge2), l6 = ke3(), u6 = ja(), i3 = si();
  Le(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), Pl(He(() => {
    if (i3.state === "idle") {
      let s2 = mr(l6, u6, o4, e);
      Tt[s2] = window.scrollY;
    }
    try {
      sessionStorage.setItem(t || hr, JSON.stringify(Tt));
    } catch (s2) {
      q5(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${s2}).`);
    }
    window.history.scrollRestoration = "auto";
  }, [
    i3.state,
    e,
    o4,
    l6,
    u6,
    t
  ])), typeof document < "u" && (De(() => {
    try {
      let s2 = sessionStorage.getItem(t || hr);
      s2 && (Tt = JSON.parse(s2));
    } catch {
    }
  }, [
    t
  ]), De(() => {
    let s2 = r3?.enableScrollRestoration(Tt, () => window.scrollY, e ? (d4, m6) => mr(d4, m6, o4, e) : void 0);
    return () => s2 && s2();
  }, [
    r3,
    o4,
    e
  ]), De(() => {
    if (a4 !== false) {
      if (typeof a4 == "number") {
        window.scrollTo(0, a4);
        return;
      }
      try {
        if (l6.hash) {
          let s2 = document.getElementById(decodeURIComponent(l6.hash.slice(1)));
          if (s2) {
            s2.scrollIntoView();
            return;
          }
        }
      } catch {
        q5(false, `"${l6.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
      }
      n2 !== true && window.scrollTo(0, 0);
    }
  }, [
    l6,
    a4,
    n2
  ]));
}
function Pl(e, t) {
  let { capture: r3 } = t || {};
  Le(() => {
    let a4 = r3 != null ? {
      capture: r3
    } : void 0;
    return window.addEventListener("pagehide", e, a4), () => {
      window.removeEventListener("pagehide", e, a4);
    };
  }, [
    e,
    r3
  ]);
}
function _l(e, { relative: t } = {}) {
  let r3 = Ie(Er);
  j4(r3 != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let { basename: a4 } = Ar("useViewTransitionState"), n2 = pt(e, {
    relative: t
  });
  if (!r3.isTransitioning) return false;
  let o4 = me3(r3.currentLocation.pathname, a4) || r3.currentLocation.pathname, l6 = me3(r3.nextLocation.pathname, a4) || r3.nextLocation.pathname;
  return $t(n2.pathname, l6) != null || $t(n2.pathname, o4) != null;
}
var ps = /* @__PURE__ */ new Set([
  ..._r,
  304
]);
var ws = class extends Qe.Component {
  constructor(e) {
    super(e), this.state = {
      error: null,
      location: e.location
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ? {
      error: null,
      location: e.location
    } : {
      error: t.error,
      location: t.location
    };
  }
  render() {
    return this.state.error ? Qe.createElement(Ml, {
      error: this.state.error,
      renderAppShell: true
    }) : this.props.children;
  }
};
function Sn({ renderAppShell: e, title: t, children: r3 }) {
  return e ? Qe.createElement("html", {
    lang: "en"
  }, Qe.createElement("head", null, Qe.createElement("meta", {
    charSet: "utf-8"
  }), Qe.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), Qe.createElement("title", null, t)), Qe.createElement("body", null, Qe.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, r3))) : r3;
}
function Ml({ error: e, renderAppShell: t }) {
  console.error(e);
  let r3 = Qe.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
    }
  });
  if (Me2(e)) return Qe.createElement(Sn, {
    renderAppShell: t,
    title: "Unhandled Thrown Response!"
  }, Qe.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, e.status, " ", e.statusText), Pe3 ? r3 : null);
  let a4;
  if (e instanceof Error) a4 = e;
  else {
    let n2 = e == null ? "Unknown Error" : typeof e == "object" && "toString" in e ? e.toString() : JSON.stringify(e);
    a4 = new Error(n2);
  }
  return Qe.createElement(Sn, {
    renderAppShell: t,
    title: "Application Error!"
  }, Qe.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), Qe.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, a4.stack), r3);
}
var Rs = ga();
var vs = new TextEncoder();
var Ol = "use";
var gs = react_19_1_exports[Ol];

// deno:https://esm.sh/node/process.mjs
var v5 = function() {
};
function u2(e, t = {}) {
  v5.prototype.name = e;
  let r3 = {};
  return new Proxy(v5, {
    get(n2, a4) {
      return a4 === "caller" ? null : a4 === "__createMock__" ? u2 : a4 === "__unenv__" ? true : a4 in t ? t[a4] : r3[a4] = r3[a4] || u2(`${e}.${a4.toString()}`);
    },
    apply(n2, a4, o4) {
      return u2(`${e}()`);
    },
    construct(n2, a4, o4) {
      return u2(`[${e}]`);
    },
    enumerate() {
      return [];
    }
  });
}
var d3 = u2("mock");
function m2(e) {
  return new Error(`[unenv] ${e} is not implemented yet!`);
}
function s(e) {
  return Object.assign(() => {
    throw m2(e);
  }, {
    __unenv__: true
  });
}
var b5 = Object.freeze(Object.create(null, {
  __unenv__: {
    get: () => true
  }
}));
var p4 = /* @__PURE__ */ Object.create(null);
var h2 = globalThis.process?.env;
var l2 = (e) => h2 || globalThis.__env__ || (e ? p4 : globalThis);
var x6 = new Proxy(p4, {
  get(e, t) {
    return l2()[t] ?? p4[t];
  },
  has(e, t) {
    let r3 = l2();
    return t in r3 || t in p4;
  },
  set(e, t, r3) {
    let n2 = l2(true);
    return n2[t] = r3, true;
  },
  deleteProperty(e, t) {
    let r3 = l2(true);
    return delete r3[t], true;
  },
  ownKeys() {
    let e = l2();
    return Object.keys(e);
  }
});
var k6 = Object.assign(function(e) {
  let t = Date.now(), r3 = Math.trunc(t / 1e3), n2 = t % 1e3 * 1e6;
  if (e) {
    let a4 = r3 - e[0], o4 = n2 - e[0];
    return o4 < 0 && (a4 = a4 - 1, o4 = 1e9 + o4), [
      a4,
      o4
    ];
  }
  return [
    r3,
    n2
  ];
}, {
  bigint: function() {
    return BigInt(Date.now() * 1e6);
  }
});
var E5 = globalThis.queueMicrotask ? (e, ...t) => {
  globalThis.queueMicrotask(e.bind(void 0, ...t));
} : M3();
function M3() {
  let e = [], t = false, r3, n2 = -1;
  function a4() {
    !t || !r3 || (t = false, r3.length > 0 ? e = [
      ...r3,
      ...e
    ] : n2 = -1, e.length > 0 && o4());
  }
  function o4() {
    if (t) return;
    let g7 = setTimeout(a4);
    t = true;
    let c3 = e.length;
    for (; c3; ) {
      for (r3 = e, e = []; ++n2 < c3; ) r3 && r3[n2]();
      n2 = -1, c3 = e.length;
    }
    r3 = void 0, t = false, clearTimeout(g7);
  }
  return (g7, ...c3) => {
    e.push(g7.bind(void 0, ...c3)), e.length === 1 && !t && setTimeout(o4);
  };
}
var w3 = "unenv";
var L = [];
var y2 = "";
var C4 = {
  ares: "",
  http_parser: "",
  icu: "",
  modules: "",
  node: "",
  openssl: "",
  uv: "",
  v8: "",
  zlib: ""
};
function i2() {
  return _2;
}
var P2 = i2;
var U2 = i2;
var O3 = i2;
var A4 = i2;
var j5 = i2;
var N3 = i2;
var T3 = function(e) {
  return e === "message" || e === "multipleResolves" ? _2 : false;
};
var R3 = i2;
var I3 = i2;
var S4 = function(e) {
  return [];
};
var B2 = () => 0;
var D3 = function(e) {
  throw new Error("[unenv] process.binding is not supported");
};
var f2 = "/";
var F4 = function() {
  return f2;
};
var $3 = function(e) {
  f2 = e;
};
var q6 = function() {
  return 0;
};
var z4 = function() {
  return 1e3;
};
var H3 = function() {
  return 1e3;
};
var W2 = function() {
  return 1e3;
};
var K3 = function() {
  return 1e3;
};
var G4 = function() {
  return [];
};
var J2 = (e) => {
};
var Q = s("process.abort");
var V4 = /* @__PURE__ */ new Set();
var X2 = "";
var Y3 = "";
var Z2 = b5;
var ee = false;
var se2 = () => 0;
var te = () => 0;
var re2 = s("process.cpuUsage");
var ae3 = 0;
var ne = s("process.dlopen");
var ie2 = i2;
var oe2 = i2;
var ce3 = s("process.eventNames");
var ue3 = [];
var le2 = "";
var de3 = s("process.exit");
var pe2 = /* @__PURE__ */ Object.create({
  inspector: void 0,
  debug: void 0,
  uv: void 0,
  ipv6: void 0,
  tls_alpn: void 0,
  tls_sni: void 0,
  tls_ocsp: void 0,
  tls: void 0,
  cached_builtins: void 0
});
var ge3 = () => [];
var _e3 = s("process.getMaxListeners");
var ve3 = s("process.kill");
var fe2 = Object.assign(() => ({
  arrayBuffers: 0,
  rss: 0,
  external: 0,
  heapTotal: 0,
  heapUsed: 0
}), {
  rss: () => 0
});
var me4 = 1e3;
var be4 = "";
var he2 = 1e3;
var xe2 = s("process.rawListeners");
var ke4 = /* @__PURE__ */ Object.create({
  name: "",
  lts: "",
  sourceUrl: void 0,
  headersUrl: void 0
});
var Ee2 = /* @__PURE__ */ Object.create({
  compact: void 0,
  directory: void 0,
  filename: void 0,
  getReport: s("process.report.getReport"),
  reportOnFatalError: void 0,
  reportOnSignal: void 0,
  reportOnUncaughtException: void 0,
  signal: void 0,
  writeReport: s("process.report.writeReport")
});
var Me3 = s("process.resourceUsage");
var we3 = s("process.setegid");
var Le3 = s("process.seteuid");
var ye3 = s("process.setgid");
var Ce2 = s("process.setgroups");
var Pe4 = s("process.setuid");
var Ue2 = s("process.setMaxListeners");
var Oe3 = s("process.setSourceMapsEnabled");
var Ae2 = d3.__createMock__("process.stdout");
var je3 = d3.__createMock__("process.stderr");
var Ne2 = d3.__createMock__("process.stdin");
var Te2 = false;
var Re2 = () => 0;
var Ie2 = 0;
var Se2 = s("process.setUncaughtExceptionCaptureCallback");
var Be2 = () => false;
var De2 = false;
var Fe2 = s("process.loadEnvFile");
var $e2 = void 0;
var qe2 = {
  has: () => false
};
var ze2 = {
  ref() {
  },
  unref() {
  }
};
var He2 = false;
var We2 = {
  register() {
  },
  unregister() {
  },
  registerBeforeExit() {
  }
};
var Ke2 = s("process.assert");
var Ge4 = s("process.openStdin");
var Je = s("process._debugEnd");
var Qe2 = s("process._debugProcess");
var Ve = s("process._fatalException");
var Xe3 = s("process._getActiveHandles");
var Ye2 = s("process._getActiveRequests");
var Ze = s("process._kill");
var es = [];
var ss = s("process._rawDebug");
var ts = s("process._startProfilerIdleNotifier");
var rs = s("process.__stopProfilerIdleNotifier");
var as = s("process._tickCallback");
var hs = s("process._linkedBinding");
var ns = void 0;
var is = s("process.initgroups");
var os = [];
var cs = i2;
var us = false;
var ls = [];
var ds = 0;
var ps2 = 0;
var _2 = {
  _events: ls,
  _eventsCount: ds,
  _exiting: us,
  _maxListeners: ps2,
  _debugEnd: Je,
  _debugProcess: Qe2,
  _fatalException: Ve,
  _getActiveHandles: Xe3,
  _getActiveRequests: Ye2,
  _kill: Ze,
  _preload_modules: es,
  _rawDebug: ss,
  _startProfilerIdleNotifier: ts,
  _stopProfilerIdleNotifier: rs,
  _tickCallback: as,
  domain: ns,
  initgroups: is,
  moduleLoadList: os,
  reallyExit: cs,
  exitCode: Ie2,
  abort: Q,
  addListener: U2,
  allowedNodeEnvironmentFlags: V4,
  hasUncaughtExceptionCaptureCallback: Be2,
  setUncaughtExceptionCaptureCallback: Se2,
  loadEnvFile: Fe2,
  sourceMapsEnabled: De2,
  throwDeprecation: He2,
  mainModule: $e2,
  permission: qe2,
  channel: ze2,
  arch: X2,
  argv: L,
  argv0: Y3,
  assert: Ke2,
  binding: D3,
  chdir: $3,
  config: Z2,
  connected: ee,
  constrainedMemory: se2,
  availableMemory: te,
  cpuUsage: re2,
  cwd: F4,
  debugPort: ae3,
  dlopen: ne,
  disconnect: ie2,
  emit: T3,
  emitWarning: oe2,
  env: x6,
  eventNames: ce3,
  execArgv: ue3,
  execPath: le2,
  exit: de3,
  finalization: We2,
  features: pe2,
  getBuiltinModule: J2,
  getegid: z4,
  geteuid: H3,
  getgid: W2,
  getgroups: G4,
  getuid: K3,
  getActiveResourcesInfo: ge3,
  getMaxListeners: _e3,
  hrtime: k6,
  kill: ve3,
  listeners: S4,
  listenerCount: B2,
  memoryUsage: fe2,
  nextTick: E5,
  on: P2,
  off: A4,
  once: O3,
  openStdin: Ge4,
  pid: me4,
  platform: be4,
  ppid: he2,
  prependListener: R3,
  prependOnceListener: I3,
  rawListeners: xe2,
  release: ke4,
  removeAllListeners: N3,
  removeListener: j5,
  report: Ee2,
  resourceUsage: Me3,
  setegid: we3,
  seteuid: Le3,
  setgid: ye3,
  setgroups: Ce2,
  setuid: Pe4,
  setMaxListeners: Ue2,
  setSourceMapsEnabled: Oe3,
  stderr: je3,
  stdin: Ne2,
  stdout: Ae2,
  title: w3,
  traceDeprecation: Te2,
  umask: q6,
  uptime: Re2,
  version: y2,
  versions: C4
};
var xs = _2;

// deno:https://esm.sh/react-router@7.8.0/X-ZXJlYWN0/es2022/react-router.mjs
var Zn = ((e) => (e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE", e))(Zn || {});
var Cn = "popstate";
function eo(e = {}) {
  function t(n2, o4) {
    let { pathname: i3 = "/", search: s2 = "", hash: l6 = "" } = xe3(n2.location.hash.substring(1));
    return !i3.startsWith("/") && !i3.startsWith(".") && (i3 = "/" + i3), Ve2("", {
      pathname: i3,
      search: s2,
      hash: l6
    }, o4.state && o4.state.usr || null, o4.state && o4.state.key || "default");
  }
  function r3(n2, o4) {
    let i3 = n2.document.querySelector("base"), s2 = "";
    if (i3 && i3.getAttribute("href")) {
      let l6 = n2.location.href, u6 = l6.indexOf("#");
      s2 = u6 === -1 ? l6 : l6.slice(0, u6);
    }
    return s2 + "#" + (typeof o4 == "string" ? o4 : ve4(o4));
  }
  function a4(n2, o4) {
    K4(n2.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(o4)})`);
  }
  return to(t, r3, a4, e);
}
function M4(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
function K4(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function bl2() {
  return Math.random().toString(36).substring(2, 10);
}
function xn(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Ve2(e, t, r3 = null, a4) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? xe3(t) : t,
    state: r3,
    key: t && t.key || a4 || bl2()
  };
}
function ve4({ pathname: e = "/", search: t = "", hash: r3 = "" }) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r3 && r3 !== "#" && (e += r3.charAt(0) === "#" ? r3 : "#" + r3), e;
}
function xe3(e) {
  let t = {};
  if (e) {
    let r3 = e.indexOf("#");
    r3 >= 0 && (t.hash = e.substring(r3), e = e.substring(0, r3));
    let a4 = e.indexOf("?");
    a4 >= 0 && (t.search = e.substring(a4), e = e.substring(0, a4)), e && (t.pathname = e);
  }
  return t;
}
function to(e, t, r3, a4 = {}) {
  let { window: n2 = document.defaultView, v5Compat: o4 = false } = a4, i3 = n2.history, s2 = "POP", l6 = null, u6 = d4();
  u6 == null && (u6 = 0, i3.replaceState({
    ...i3.state,
    idx: u6
  }, ""));
  function d4() {
    return (i3.state || {
      idx: null
    }).idx;
  }
  function f4() {
    s2 = "POP";
    let y7 = d4(), R4 = y7 == null ? null : y7 - u6;
    u6 = y7, l6 && l6({
      action: s2,
      location: w6.location,
      delta: R4
    });
  }
  function c3(y7, R4) {
    s2 = "PUSH";
    let x9 = Ve2(w6.location, y7, R4);
    r3 && r3(x9, y7), u6 = d4() + 1;
    let C8 = xn(x9, u6), S7 = w6.createHref(x9);
    try {
      i3.pushState(C8, "", S7);
    } catch (E11) {
      if (E11 instanceof DOMException && E11.name === "DataCloneError") throw E11;
      n2.location.assign(S7);
    }
    o4 && l6 && l6({
      action: s2,
      location: w6.location,
      delta: 1
    });
  }
  function h4(y7, R4) {
    s2 = "REPLACE";
    let x9 = Ve2(w6.location, y7, R4);
    r3 && r3(x9, y7), u6 = d4();
    let C8 = xn(x9, u6), S7 = w6.createHref(x9);
    i3.replaceState(C8, "", S7), o4 && l6 && l6({
      action: s2,
      location: w6.location,
      delta: 0
    });
  }
  function m6(y7) {
    return ro2(y7);
  }
  let w6 = {
    get action() {
      return s2;
    },
    get location() {
      return e(n2, i3);
    },
    listen(y7) {
      if (l6) throw new Error("A history only accepts one active listener");
      return n2.addEventListener(Cn, f4), l6 = y7, () => {
        n2.removeEventListener(Cn, f4), l6 = null;
      };
    },
    createHref(y7) {
      return t(n2, y7);
    },
    createURL: m6,
    encodeLocation(y7) {
      let R4 = m6(y7);
      return {
        pathname: R4.pathname,
        search: R4.search,
        hash: R4.hash
      };
    },
    push: c3,
    replace: h4,
    go(y7) {
      return i3.go(y7);
    }
  };
  return w6;
}
function ro2(e, t = false) {
  let r3 = "http://localhost";
  typeof window < "u" && (r3 = window.location.origin !== "null" ? window.location.origin : window.location.href), M4(r3, "No window.location.(origin|href) available to create URL");
  let a4 = typeof e == "string" ? e : ve4(e);
  return a4 = a4.replace(/ $/, "%20"), !t && a4.startsWith("//") && (a4 = r3 + a4), new URL(a4, r3);
}
function Ra(e) {
  return {
    defaultValue: e
  };
}
var Ht;
Ht = /* @__PURE__ */ new WeakMap();
function Re3(e, t, r3 = "/") {
  return fr(e, t, r3, false);
}
function fr(e, t, r3, a4) {
  let n2 = typeof t == "string" ? xe3(t) : t, o4 = oe3(n2.pathname || "/", r3);
  if (o4 == null) return null;
  let i3 = no2(e);
  Ll2(i3);
  let s2 = null;
  for (let l6 = 0; s2 == null && l6 < i3.length; ++l6) {
    let u6 = lo2(o4);
    s2 = Il2(i3[l6], u6, a4);
  }
  return s2;
}
function ao2(e, t) {
  let { route: r3, pathname: a4, params: n2 } = e;
  return {
    id: r3.id,
    pathname: a4,
    params: n2,
    data: t[r3.id],
    loaderData: t[r3.id],
    handle: r3.handle
  };
}
function no2(e, t = [], r3 = [], a4 = "") {
  let n2 = (o4, i3, s2) => {
    let l6 = {
      relativePath: s2 === void 0 ? o4.path || "" : s2,
      caseSensitive: o4.caseSensitive === true,
      childrenIndex: i3,
      route: o4
    };
    l6.relativePath.startsWith("/") && (M4(l6.relativePath.startsWith(a4), `Absolute route path "${l6.relativePath}" nested under path "${a4}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), l6.relativePath = l6.relativePath.slice(a4.length));
    let u6 = Ue3([
      a4,
      l6.relativePath
    ]), d4 = r3.concat(l6);
    o4.children && o4.children.length > 0 && (M4(o4.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${u6}".`), no2(o4.children, t, d4, u6)), !(o4.path == null && !o4.index) && t.push({
      path: u6,
      score: Ol2(u6, o4.index),
      routesMeta: d4
    });
  };
  return e.forEach((o4, i3) => {
    if (o4.path === "" || !o4.path?.includes("?")) n2(o4, i3);
    else for (let s2 of oo2(o4.path)) n2(o4, i3, s2);
  }), t;
}
function oo2(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r3, ...a4] = t, n2 = r3.endsWith("?"), o4 = r3.replace(/\?$/, "");
  if (a4.length === 0) return n2 ? [
    o4,
    ""
  ] : [
    o4
  ];
  let i3 = oo2(a4.join("/")), s2 = [];
  return s2.push(...i3.map((l6) => l6 === "" ? o4 : [
    o4,
    l6
  ].join("/"))), n2 && s2.push(...i3), s2.map((l6) => e.startsWith("/") && l6 === "" ? "/" : l6);
}
function Ll2(e) {
  e.sort((t, r3) => t.score !== r3.score ? r3.score - t.score : Nl2(t.routesMeta.map((a4) => a4.childrenIndex), r3.routesMeta.map((a4) => a4.childrenIndex)));
}
var Dl2 = /^:[\w-]+$/;
var Tl = 3;
var Fl = 2;
var Al = 1;
var Ml2 = 10;
var kl = -2;
var Pn = (e) => e === "*";
function Ol2(e, t) {
  let r3 = e.split("/"), a4 = r3.length;
  return r3.some(Pn) && (a4 += kl), t && (a4 += Fl), r3.filter((n2) => !Pn(n2)).reduce((n2, o4) => n2 + (Dl2.test(o4) ? Tl : o4 === "" ? Al : Ml2), a4);
}
function Nl2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a4, n2) => a4 === t[n2]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Il2(e, t, r3 = false) {
  let { routesMeta: a4 } = e, n2 = {}, o4 = "/", i3 = [];
  for (let s2 = 0; s2 < a4.length; ++s2) {
    let l6 = a4[s2], u6 = s2 === a4.length - 1, d4 = o4 === "/" ? t : t.slice(o4.length) || "/", f4 = Et({
      path: l6.relativePath,
      caseSensitive: l6.caseSensitive,
      end: u6
    }, d4), c3 = l6.route;
    if (!f4 && u6 && r3 && !a4[a4.length - 1].route.index && (f4 = Et({
      path: l6.relativePath,
      caseSensitive: l6.caseSensitive,
      end: false
    }, d4)), !f4) return null;
    Object.assign(n2, f4.params), i3.push({
      params: n2,
      pathname: Ue3([
        o4,
        f4.pathname
      ]),
      pathnameBase: jl(Ue3([
        o4,
        f4.pathnameBase
      ])),
      route: c3
    }), f4.pathnameBase !== "/" && (o4 = Ue3([
      o4,
      f4.pathnameBase
    ]));
  }
  return i3;
}
function Et(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: false,
    end: true
  });
  let [r3, a4] = io2(e.path, e.caseSensitive, e.end), n2 = t.match(r3);
  if (!n2) return null;
  let o4 = n2[0], i3 = o4.replace(/(.)\/+$/, "$1"), s2 = n2.slice(1);
  return {
    params: a4.reduce((u6, { paramName: d4, isOptional: f4 }, c3) => {
      if (d4 === "*") {
        let m6 = s2[c3] || "";
        i3 = o4.slice(0, o4.length - m6.length).replace(/(.)\/+$/, "$1");
      }
      let h4 = s2[c3];
      return f4 && !h4 ? u6[d4] = void 0 : u6[d4] = (h4 || "").replace(/%2F/g, "/"), u6;
    }, {}),
    pathname: o4,
    pathnameBase: i3,
    pattern: e
  };
}
function io2(e, t = false, r3 = true) {
  K4(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
  let a4 = [], n2 = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i3, s2, l6) => (a4.push({
    paramName: s2,
    isOptional: l6 != null
  }), l6 ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (a4.push({
    paramName: "*"
  }), n2 += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r3 ? n2 += "\\/*$" : e !== "" && e !== "/" && (n2 += "(?:(?=\\/|$))"), [
    new RegExp(n2, t ? void 0 : "i"),
    a4
  ];
}
function lo2(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return K4(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
  }
}
function oe3(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r3 = t.endsWith("/") ? t.length - 1 : t.length, a4 = e.charAt(r3);
  return a4 && a4 !== "/" ? null : e.slice(r3) || "/";
}
function so2(e, t = "/") {
  let { pathname: r3, search: a4 = "", hash: n2 = "" } = typeof e == "string" ? xe3(e) : e;
  return {
    pathname: r3 ? r3.startsWith("/") ? r3 : Ul(r3, t) : t,
    search: zl(a4),
    hash: Bl(n2)
  };
}
function Ul(e, t) {
  let r3 = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n2) => {
    n2 === ".." ? r3.length > 1 && r3.pop() : n2 !== "." && r3.push(n2);
  }), r3.length > 1 ? r3.join("/") : "/";
}
function qr(e, t, r3, a4) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a4)}].  Please separate it out to the \`to.${r3}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function uo2(e) {
  return e.filter((t, r3) => r3 === 0 || t.route.path && t.route.path.length > 0);
}
function Er2(e) {
  let t = uo2(e);
  return t.map((r3, a4) => a4 === t.length - 1 ? r3.pathname : r3.pathnameBase);
}
function br2(e, t, r3, a4 = false) {
  let n2;
  typeof e == "string" ? n2 = xe3(e) : (n2 = {
    ...e
  }, M4(!n2.pathname || !n2.pathname.includes("?"), qr("?", "pathname", "search", n2)), M4(!n2.pathname || !n2.pathname.includes("#"), qr("#", "pathname", "hash", n2)), M4(!n2.search || !n2.search.includes("#"), qr("#", "search", "hash", n2)));
  let o4 = e === "" || n2.pathname === "", i3 = o4 ? "/" : n2.pathname, s2;
  if (i3 == null) s2 = r3;
  else {
    let f4 = t.length - 1;
    if (!a4 && i3.startsWith("..")) {
      let c3 = i3.split("/");
      for (; c3[0] === ".."; ) c3.shift(), f4 -= 1;
      n2.pathname = c3.join("/");
    }
    s2 = f4 >= 0 ? t[f4] : "/";
  }
  let l6 = so2(n2, s2), u6 = i3 && i3 !== "/" && i3.endsWith("/"), d4 = (o4 || i3 === ".") && r3.endsWith("/");
  return !l6.pathname.endsWith("/") && (u6 || d4) && (l6.pathname += "/"), l6;
}
var Ue3 = (e) => e.join("/").replace(/\/\/+/g, "/");
var jl = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
var zl = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
var Bl = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function re3(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var fo2 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var Vl = new Set(fo2);
var Yl = [
  "GET",
  ...fo2
];
var Jl = new Set(Yl);
var yo2 = Symbol("ResetLoaderData");
var Je2 = de(null);
Je2.displayName = "DataRouter";
var rt = de(null);
rt.displayName = "DataRouterState";
var Cr2 = de(false);
var Gt = de({
  isTransitioning: false
});
Gt.displayName = "ViewTransition";
var Xt = de(/* @__PURE__ */ new Map());
Xt.displayName = "Fetchers";
var zt2 = de(null);
zt2.displayName = "Await";
var be5 = de(null);
be5.displayName = "Navigation";
var ht2 = de(null);
ht2.displayName = "Location";
var Se3 = de({
  outlet: null,
  matches: [],
  isDataRoute: false
});
Se3.displayName = "Route";
var xa2 = de(null);
xa2.displayName = "RouteError";
var je4 = true;
function Do(e, { relative: t } = {}) {
  M4(at(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r3, navigator: a4 } = Ie(be5), { hash: n2, pathname: o4, search: i3 } = xt(e, {
    relative: t
  }), s2 = o4;
  return r3 !== "/" && (s2 = o4 === "/" ? r3 : Ue3([
    r3,
    o4
  ])), a4.createHref({
    pathname: s2,
    search: i3,
    hash: n2
  });
}
function at() {
  return Ie(ht2) != null;
}
function Ce3() {
  return M4(at(), "useLocation() may be used only in the context of a <Router> component."), Ie(ht2).location;
}
var To = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Fo(e) {
  Ie(be5).static || De(e);
}
function xr2() {
  let { isDataRoute: e } = Ie(Se3);
  return e ? Ps() : ms();
}
function ms() {
  M4(at(), "useNavigate() may be used only in the context of a <Router> component.");
  let e = Ie(Je2), { basename: t, navigator: r3 } = Ie(be5), { matches: a4 } = Ie(Se3), { pathname: n2 } = Ce3(), o4 = JSON.stringify(Er2(a4)), i3 = ze(false);
  return Fo(() => {
    i3.current = true;
  }), He((l6, u6 = {}) => {
    if (K4(i3.current, To), !i3.current) return;
    if (typeof l6 == "number") {
      r3.go(l6);
      return;
    }
    let d4 = br2(l6, JSON.parse(o4), n2, u6.relative === "path");
    e == null && t !== "/" && (d4.pathname = d4.pathname === "/" ? t : Ue3([
      t,
      d4.pathname
    ])), (u6.replace ? r3.replace : r3.push)(d4, u6.state, u6);
  }, [
    t,
    r3,
    o4,
    n2,
    e
  ]);
}
var Ao = de(null);
function Pr() {
  let { matches: e } = Ie(Se3), t = e[e.length - 1];
  return t ? t.params : {};
}
function xt(e, { relative: t } = {}) {
  let { matches: r3 } = Ie(Se3), { pathname: a4 } = Ce3(), n2 = JSON.stringify(Er2(r3));
  return be(() => br2(e, JSON.parse(n2), a4, t === "path"), [
    e,
    n2,
    a4,
    t
  ]);
}
function ko(e, t) {
  return Pa(e, t);
}
function Pa(e, t, r3, a4) {
  M4(at(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: n2 } = Ie(be5), { matches: o4 } = Ie(Se3), i3 = o4[o4.length - 1], s2 = i3 ? i3.params : {}, l6 = i3 ? i3.pathname : "/", u6 = i3 ? i3.pathnameBase : "/", d4 = i3 && i3.route;
  if (je4) {
    let R4 = d4 && d4.path || "";
    $o(l6, !d4 || R4.endsWith("*") || R4.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l6}" (under <Route path="${R4}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R4}"> to <Route path="${R4 === "/" ? "*" : `${R4}/*`}">.`);
  }
  let f4 = Ce3(), c3;
  if (t) {
    let R4 = typeof t == "string" ? xe3(t) : t;
    M4(u6 === "/" || R4.pathname?.startsWith(u6), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u6}" but pathname "${R4.pathname}" was given in the \`location\` prop.`), c3 = R4;
  } else c3 = f4;
  let h4 = c3.pathname || "/", m6 = h4;
  if (u6 !== "/") {
    let R4 = u6.replace(/^\//, "").split("/");
    m6 = "/" + h4.replace(/^\//, "").split("/").slice(R4.length).join("/");
  }
  let w6 = Re3(e, {
    pathname: m6
  });
  je4 && (K4(d4 || w6 != null, `No routes matched location "${c3.pathname}${c3.search}${c3.hash}" `), K4(w6 == null || w6[w6.length - 1].route.element !== void 0 || w6[w6.length - 1].route.Component !== void 0 || w6[w6.length - 1].route.lazy !== void 0, `Matched leaf route at location "${c3.pathname}${c3.search}${c3.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));
  let y7 = Oo(w6 && w6.map((R4) => Object.assign({}, R4, {
    params: Object.assign({}, s2, R4.params),
    pathname: Ue3([
      u6,
      n2.encodeLocation ? n2.encodeLocation(R4.pathname).pathname : R4.pathname
    ]),
    pathnameBase: R4.pathnameBase === "/" ? u6 : Ue3([
      u6,
      n2.encodeLocation ? n2.encodeLocation(R4.pathnameBase).pathname : R4.pathnameBase
    ])
  })), o4, r3, a4);
  return t && y7 ? Ce(ht2.Provider, {
    value: {
      location: {
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default",
        ...c3
      },
      navigationType: "POP"
    }
  }, y7) : y7;
}
function ys() {
  let e = Pt(), t = re3(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r3 = e instanceof Error ? e.stack : null, a4 = "rgba(200,200,200, 0.5)", n2 = {
    padding: "0.5rem",
    backgroundColor: a4
  }, o4 = {
    padding: "2px 4px",
    backgroundColor: a4
  }, i3 = null;
  return je4 && (console.error("Error handled by React Router default ErrorBoundary:", e), i3 = Ce(ae, null, Ce("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), Ce("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", Ce("code", {
    style: o4
  }, "ErrorBoundary"), " or", " ", Ce("code", {
    style: o4
  }, "errorElement"), " prop on your route."))), Ce(ae, null, Ce("h2", null, "Unexpected Application Error!"), Ce("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r3 ? Ce("pre", {
    style: n2
  }, r3) : null, i3);
}
var Rs2 = Ce(ys, null);
var vs2 = class extends pe {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error("React Router caught the following error during render", e, t);
  }
  render() {
    return this.state.error !== void 0 ? Ce(Se3.Provider, {
      value: this.props.routeContext
    }, Ce(xa2.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
};
function ws2({ routeContext: e, match: t, children: r3 }) {
  let a4 = Ie(Je2);
  return a4 && a4.static && a4.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a4.staticContext._deepestRenderedBoundaryId = t.route.id), Ce(Se3.Provider, {
    value: e
  }, r3);
}
function Oo(e, t = [], r3 = null, a4 = null) {
  if (e == null) {
    if (!r3) return null;
    if (r3.errors) e = r3.matches;
    else if (t.length === 0 && !r3.initialized && r3.matches.length > 0) e = r3.matches;
    else return null;
  }
  let n2 = e, o4 = r3?.errors;
  if (o4 != null) {
    let l6 = n2.findIndex((u6) => u6.route.id && o4?.[u6.route.id] !== void 0);
    M4(l6 >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o4).join(",")}`), n2 = n2.slice(0, Math.min(n2.length, l6 + 1));
  }
  let i3 = false, s2 = -1;
  if (r3) for (let l6 = 0; l6 < n2.length; l6++) {
    let u6 = n2[l6];
    if ((u6.route.HydrateFallback || u6.route.hydrateFallbackElement) && (s2 = l6), u6.route.id) {
      let { loaderData: d4, errors: f4 } = r3, c3 = u6.route.loader && !d4.hasOwnProperty(u6.route.id) && (!f4 || f4[u6.route.id] === void 0);
      if (u6.route.lazy || c3) {
        i3 = true, s2 >= 0 ? n2 = n2.slice(0, s2 + 1) : n2 = [
          n2[0]
        ];
        break;
      }
    }
  }
  return n2.reduceRight((l6, u6, d4) => {
    let f4, c3 = false, h4 = null, m6 = null;
    r3 && (f4 = o4 && u6.route.id ? o4[u6.route.id] : void 0, h4 = u6.route.errorElement || Rs2, i3 && (s2 < 0 && d4 === 0 ? ($o("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), c3 = true, m6 = null) : s2 === d4 && (c3 = true, m6 = u6.route.hydrateFallbackElement || null)));
    let w6 = t.concat(n2.slice(0, d4 + 1)), y7 = () => {
      let R4;
      return f4 ? R4 = h4 : c3 ? R4 = m6 : u6.route.Component ? R4 = Ce(u6.route.Component, null) : u6.route.element ? R4 = u6.route.element : R4 = l6, Ce(ws2, {
        match: u6,
        routeContext: {
          outlet: l6,
          matches: w6,
          isDataRoute: r3 != null
        },
        children: R4
      });
    };
    return r3 && (u6.route.ErrorBoundary || u6.route.errorElement || d4 === 0) ? Ce(vs2, {
      location: r3.location,
      revalidation: r3.revalidation,
      component: h4,
      error: f4,
      children: y7(),
      routeContext: {
        outlet: null,
        matches: w6,
        isDataRoute: true
      }
    }) : y7();
  }, null);
}
function _a2(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function La2(e) {
  let t = Ie(Je2);
  return M4(t, _a2(e)), t;
}
function nt(e) {
  let t = Ie(rt);
  return M4(t, _a2(e)), t;
}
function gs2(e) {
  let t = Ie(Se3);
  return M4(t, _a2(e)), t;
}
function Kt(e) {
  let t = gs2(e), r3 = t.matches[t.matches.length - 1];
  return M4(r3.route.id, `${e} can only be used on routes that contain a unique "id"`), r3.route.id;
}
function Es() {
  return Kt("useRouteId");
}
function No() {
  return nt("useNavigation").navigation;
}
function _r2() {
  let { matches: e, loaderData: t } = nt("useMatches");
  return be(() => e.map((r3) => ao2(r3, t)), [
    e,
    t
  ]);
}
function Pt() {
  let e = Ie(xa2), t = nt("useRouteError"), r3 = Kt("useRouteError");
  return e !== void 0 ? e : t.errors?.[r3];
}
function Ps() {
  let { router: e } = La2("useNavigate"), t = Kt("useNavigate"), r3 = ze(false);
  return Fo(() => {
    r3.current = true;
  }), He(async (n2, o4 = {}) => {
    K4(r3.current, To), r3.current && (typeof n2 == "number" ? e.navigate(n2) : await e.navigate(n2, {
      fromRouteId: t,
      ...o4
    }));
  }, [
    e,
    t
  ]);
}
var Bn = {};
function $o(e, t, r3) {
  !t && !Bn[e] && (Bn[e] = true, K4(false, r3));
}
var Ls = Oe(Ds);
function Ds({ routes: e, future: t, state: r3 }) {
  return Pa(e, void 0, r3, t);
}
function Uo(e) {
  M4(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function ot({ basename: e = "/", children: t = null, location: r3, navigationType: a4 = "POP", navigator: n2, static: o4 = false }) {
  M4(!at(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let i3 = e.replace(/^\/*/, "/"), s2 = be(() => ({
    basename: i3,
    navigator: n2,
    static: o4,
    future: {}
  }), [
    i3,
    n2,
    o4
  ]);
  typeof r3 == "string" && (r3 = xe3(r3));
  let { pathname: l6 = "/", search: u6 = "", hash: d4 = "", state: f4 = null, key: c3 = "default" } = r3, h4 = be(() => {
    let m6 = oe3(l6, i3);
    return m6 == null ? null : {
      location: {
        pathname: m6,
        search: u6,
        hash: d4,
        state: f4,
        key: c3
      },
      navigationType: a4
    };
  }, [
    i3,
    l6,
    u6,
    d4,
    f4,
    c3,
    a4
  ]);
  return K4(h4 != null, `<Router basename="${i3}"> is not able to match the URL "${l6}${u6}${d4}" because it does not start with the basename, so the <Router> won't render anything.`), h4 == null ? null : Ce(be5.Provider, {
    value: s2
  }, Ce(ht2.Provider, {
    children: t,
    value: h4
  }));
}
function As({ children: e, location: t }) {
  return ko(Bt(e), t);
}
function Bt(e, t = []) {
  let r3 = [];
  return ce.forEach(e, (a4, n2) => {
    if (!we(a4)) return;
    let o4 = [
      ...t,
      n2
    ];
    if (a4.type === ae) {
      r3.push.apply(r3, Bt(a4.props.children, o4));
      return;
    }
    M4(a4.type === Uo, `[${typeof a4.type == "string" ? a4.type : a4.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), M4(!a4.props.index || !a4.props.children, "An index route cannot have child routes.");
    let i3 = {
      id: a4.props.id || o4.join("-"),
      caseSensitive: a4.props.caseSensitive,
      element: a4.props.element,
      Component: a4.props.Component,
      index: a4.props.index,
      path: a4.props.path,
      loader: a4.props.loader,
      action: a4.props.action,
      hydrateFallbackElement: a4.props.hydrateFallbackElement,
      HydrateFallback: a4.props.HydrateFallback,
      errorElement: a4.props.errorElement,
      ErrorBoundary: a4.props.ErrorBoundary,
      hasErrorBoundary: a4.props.hasErrorBoundary === true || a4.props.ErrorBoundary != null || a4.props.errorElement != null,
      shouldRevalidate: a4.props.shouldRevalidate,
      handle: a4.props.handle,
      lazy: a4.props.lazy
    };
    a4.props.children && (i3.children = Bt(a4.props.children, o4)), r3.push(i3);
  }), r3;
}
var hr2 = "get";
var mr2 = "application/x-www-form-urlencoded";
function Ar2(e) {
  return e != null && typeof e.tagName == "string";
}
function js(e) {
  return Ar2(e) && e.tagName.toLowerCase() === "button";
}
function zs(e) {
  return Ar2(e) && e.tagName.toLowerCase() === "form";
}
function Bs(e) {
  return Ar2(e) && e.tagName.toLowerCase() === "input";
}
function Ws(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vs(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ws(e);
}
var sr = null;
function Js() {
  if (sr === null) try {
    new FormData(document.createElement("form"), 0), sr = false;
  } catch {
    sr = true;
  }
  return sr;
}
var Gs = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ta(e) {
  return e != null && !Gs.has(e) ? (K4(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mr2}"`), null) : e;
}
function Xs(e, t) {
  let r3, a4, n2, o4, i3;
  if (zs(e)) {
    let s2 = e.getAttribute("action");
    a4 = s2 ? oe3(s2, t) : null, r3 = e.getAttribute("method") || hr2, n2 = ta(e.getAttribute("enctype")) || mr2, o4 = new FormData(e);
  } else if (js(e) || Bs(e) && (e.type === "submit" || e.type === "image")) {
    let s2 = e.form;
    if (s2 == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let l6 = e.getAttribute("formaction") || s2.getAttribute("action");
    if (a4 = l6 ? oe3(l6, t) : null, r3 = e.getAttribute("formmethod") || s2.getAttribute("method") || hr2, n2 = ta(e.getAttribute("formenctype")) || ta(s2.getAttribute("enctype")) || mr2, o4 = new FormData(s2, e), !Js()) {
      let { name: u6, type: d4, value: f4 } = e;
      if (d4 === "image") {
        let c3 = u6 ? `${u6}.` : "";
        o4.append(`${c3}x`, "0"), o4.append(`${c3}y`, "0");
      } else u6 && o4.append(u6, f4);
    }
  } else {
    if (Ar2(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r3 = hr2, a4 = null, n2 = mr2, i3 = e;
  }
  return o4 && n2 === "text/plain" && (i3 = o4, o4 = void 0), {
    action: a4,
    method: r3.toLowerCase(),
    encType: n2,
    formData: o4,
    body: i3
  };
}
var Zs = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function me5(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
var Me4 = Symbol("SingleFetchRedirect");
var Na2 = /* @__PURE__ */ new Set([
  100,
  101,
  204,
  205
]);
function Mr(e, t, r3) {
  let a4 = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
  return a4.pathname === "/" ? a4.pathname = `_root.${r3}` : t && oe3(a4.pathname, t) === "/" ? a4.pathname = `${t.replace(/\/$/, "")}/_root.${r3}` : a4.pathname = `${a4.pathname.replace(/\/$/, "")}.${r3}`, a4;
}
async function oi2(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r3 = await import(e.module);
    return t[e.id] = r3, r3;
  } catch (r3) {
    if (console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(r3), window.__reactRouterContext && window.__reactRouterContext.isSpaMode && import.meta.hot) throw r3;
    return window.location.reload(), new Promise(() => {
    });
  }
}
function Ua2(e) {
  return e != null && typeof e.page == "string";
}
function pu(e) {
  return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function yu(e, t, r3) {
  let a4 = await Promise.all(e.map(async (n2) => {
    let o4 = t.routes[n2.route.id];
    if (o4) {
      let i3 = await oi2(o4, r3);
      return i3.links ? i3.links() : [];
    }
    return [];
  }));
  return ui2(a4.flat(1).filter(pu).filter((n2) => n2.rel === "stylesheet" || n2.rel === "preload").map((n2) => n2.rel === "stylesheet" ? {
    ...n2,
    rel: "prefetch",
    as: "style"
  } : {
    ...n2,
    rel: "prefetch"
  }));
}
function Gn(e, t, r3, a4, n2, o4) {
  let i3 = (l6, u6) => r3[u6] ? l6.route.id !== r3[u6].route.id : true, s2 = (l6, u6) => r3[u6].pathname !== l6.pathname || r3[u6].route.path?.endsWith("*") && r3[u6].params["*"] !== l6.params["*"];
  return o4 === "assets" ? t.filter((l6, u6) => i3(l6, u6) || s2(l6, u6)) : o4 === "data" ? t.filter((l6, u6) => {
    let d4 = a4.routes[l6.route.id];
    if (!d4 || !d4.hasLoader) return false;
    if (i3(l6, u6) || s2(l6, u6)) return true;
    if (l6.route.shouldRevalidate) {
      let f4 = l6.route.shouldRevalidate({
        currentUrl: new URL(n2.pathname + n2.search + n2.hash, window.origin),
        currentParams: r3[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l6.params,
        defaultShouldRevalidate: true
      });
      if (typeof f4 == "boolean") return f4;
    }
    return true;
  }) : [];
}
function ja2(e, t, { includeHydrateFallback: r3 } = {}) {
  return Ru(e.map((a4) => {
    let n2 = t.routes[a4.route.id];
    if (!n2) return [];
    let o4 = [
      n2.module
    ];
    return n2.clientActionModule && (o4 = o4.concat(n2.clientActionModule)), n2.clientLoaderModule && (o4 = o4.concat(n2.clientLoaderModule)), r3 && n2.hydrateFallbackModule && (o4 = o4.concat(n2.hydrateFallbackModule)), n2.imports && (o4 = o4.concat(n2.imports)), o4;
  }).flat(1));
}
function Ru(e) {
  return [
    ...new Set(e)
  ];
}
function vu(e) {
  let t = {}, r3 = Object.keys(e).sort();
  for (let a4 of r3) t[a4] = e[a4];
  return t;
}
function ui2(e, t) {
  let r3 = /* @__PURE__ */ new Set(), a4 = new Set(t);
  return e.reduce((n2, o4) => {
    if (t && !Ua2(o4) && o4.as === "script" && o4.href && a4.has(o4.href)) return n2;
    let s2 = JSON.stringify(vu(o4));
    return r3.has(s2) || (r3.add(s2), n2.push({
      key: s2,
      link: o4
    })), n2;
  }, []);
}
function Ya() {
  let e = Ie(Je2);
  return me5(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function Nr() {
  let e = Ie(rt);
  return me5(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var ze3 = de(void 0);
ze3.displayName = "FrameworkContext";
function Lt2() {
  let e = Ie(ze3);
  return me5(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function Fu(e, t) {
  let r3 = Ie(ze3), [a4, n2] = Ge(false), [o4, i3] = Ge(false), { onFocus: s2, onBlur: l6, onMouseEnter: u6, onMouseLeave: d4, onTouchStart: f4 } = t, c3 = ze(null);
  Le(() => {
    if (e === "render" && i3(true), e === "viewport") {
      let w6 = (R4) => {
        R4.forEach((x9) => {
          i3(x9.isIntersecting);
        });
      }, y7 = new IntersectionObserver(w6, {
        threshold: 0.5
      });
      return c3.current && y7.observe(c3.current), () => {
        y7.disconnect();
      };
    }
  }, [
    e
  ]), Le(() => {
    if (a4) {
      let w6 = setTimeout(() => {
        i3(true);
      }, 100);
      return () => {
        clearTimeout(w6);
      };
    }
  }, [
    a4
  ]);
  let h4 = () => {
    n2(true);
  }, m6 = () => {
    n2(false), i3(false);
  };
  return r3 ? e !== "intent" ? [
    o4,
    c3,
    {}
  ] : [
    o4,
    c3,
    {
      onFocus: It(s2, h4),
      onBlur: It(l6, m6),
      onMouseEnter: It(u6, h4),
      onMouseLeave: It(d4, m6),
      onTouchStart: It(f4, h4)
    }
  ] : [
    false,
    c3,
    {}
  ];
}
function It(e, t) {
  return (r3) => {
    e && e(r3), r3.defaultPrevented || t(r3);
  };
}
function Ga({ page: e, ...t }) {
  let { router: r3 } = Ya(), a4 = be(() => Re3(r3.routes, e, r3.basename), [
    r3.routes,
    e,
    r3.basename
  ]);
  return a4 ? Ce(ku, {
    page: e,
    matches: a4,
    ...t
  }) : null;
}
function Mu(e) {
  let { manifest: t, routeModules: r3 } = Lt2(), [a4, n2] = Ge([]);
  return Le(() => {
    let o4 = false;
    return yu(e, t, r3).then((i3) => {
      o4 || n2(i3);
    }), () => {
      o4 = true;
    };
  }, [
    e,
    t,
    r3
  ]), a4;
}
function ku({ page: e, matches: t, ...r3 }) {
  let a4 = Ce3(), { manifest: n2, routeModules: o4 } = Lt2(), { basename: i3 } = Ya(), { loaderData: s2, matches: l6 } = Nr(), u6 = be(() => Gn(e, t, l6, n2, a4, "data"), [
    e,
    t,
    l6,
    n2,
    a4
  ]), d4 = be(() => Gn(e, t, l6, n2, a4, "assets"), [
    e,
    t,
    l6,
    n2,
    a4
  ]), f4 = be(() => {
    if (e === a4.pathname + a4.search + a4.hash) return [];
    let m6 = /* @__PURE__ */ new Set(), w6 = false;
    if (t.forEach((R4) => {
      let x9 = n2.routes[R4.route.id];
      !x9 || !x9.hasLoader || (!u6.some((C8) => C8.route.id === R4.route.id) && R4.route.id in s2 && o4[R4.route.id]?.shouldRevalidate || x9.hasClientLoader ? w6 = true : m6.add(R4.route.id));
    }), m6.size === 0) return [];
    let y7 = Mr(e, i3, "data");
    return w6 && m6.size > 0 && y7.searchParams.set("_routes", t.filter((R4) => m6.has(R4.route.id)).map((R4) => R4.route.id).join(",")), [
      y7.pathname + y7.search
    ];
  }, [
    i3,
    s2,
    a4,
    n2,
    u6,
    t,
    e,
    o4
  ]), c3 = be(() => ja2(d4, n2), [
    d4,
    n2
  ]), h4 = Mu(d4);
  return Ce(ae, null, f4.map((m6) => Ce("link", {
    key: m6,
    rel: "prefetch",
    as: "fetch",
    href: m6,
    ...r3
  })), c3.map((m6) => Ce("link", {
    key: m6,
    rel: "modulepreload",
    href: m6,
    ...r3
  })), h4.map(({ key: m6, link: w6 }) => Ce("link", {
    key: m6,
    nonce: r3.nonce,
    ...w6
  })));
}
function Hu(...e) {
  return (t) => {
    e.forEach((r3) => {
      typeof r3 == "function" ? r3(t) : r3 != null && (r3.current = t);
    });
  };
}
var yi2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  yi2 && (window.__reactRouterVersion = "7.8.0");
} catch {
}
function Bu({ basename: e, children: t, window: r3 }) {
  let a4 = ze();
  a4.current == null && (a4.current = eo({
    window: r3,
    v5Compat: true
  }));
  let n2 = a4.current, [o4, i3] = Ge({
    action: n2.action,
    location: n2.location
  }), s2 = He((l6) => {
    ge(() => i3(l6));
  }, [
    i3
  ]);
  return De(() => n2.listen(s2), [
    n2,
    s2
  ]), Ce(ot, {
    basename: e,
    children: t,
    location: o4.location,
    navigationType: o4.action,
    navigator: n2
  });
}
function vi2({ basename: e, children: t, history: r3 }) {
  let [a4, n2] = Ge({
    action: r3.action,
    location: r3.location
  }), o4 = He((i3) => {
    ge(() => n2(i3));
  }, [
    n2
  ]);
  return De(() => r3.listen(o4), [
    r3,
    o4
  ]), Ce(ot, {
    basename: e,
    children: t,
    location: a4.location,
    navigationType: a4.action,
    navigator: r3
  });
}
vi2.displayName = "unstable_HistoryRouter";
var wi2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Ka = Ae(function({ onClick: t, discover: r3 = "render", prefetch: a4 = "none", relative: n2, reloadDocument: o4, replace: i3, state: s2, target: l6, to: u6, preventScrollReset: d4, viewTransition: f4, ...c3 }, h4) {
  let { basename: m6 } = Ie(be5), w6 = typeof u6 == "string" && wi2.test(u6), y7, R4 = false;
  if (typeof u6 == "string" && w6 && (y7 = u6, yi2)) try {
    let A10 = new URL(window.location.href), B6 = u6.startsWith("//") ? new URL(A10.protocol + u6) : new URL(u6), V6 = oe3(B6.pathname, m6);
    B6.origin === A10.origin && V6 != null ? u6 = V6 + B6.search + B6.hash : R4 = true;
  } catch {
    K4(false, `<Link to="${u6}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  let x9 = Do(u6, {
    relative: n2
  }), [C8, S7, E11] = Fu(a4, c3), v8 = Si(u6, {
    replace: i3,
    state: s2,
    target: l6,
    preventScrollReset: d4,
    relative: n2,
    viewTransition: f4
  });
  function O5(A10) {
    t && t(A10), A10.defaultPrevented || v8(A10);
  }
  let _5 = Ce("a", {
    ...c3,
    ...E11,
    href: y7 || x9,
    onClick: R4 || o4 ? t : O5,
    ref: Hu(h4, S7),
    target: l6,
    "data-discover": !w6 && r3 === "render" ? "true" : void 0
  });
  return C8 && !w6 ? Ce(ae, null, _5, Ce(Ga, {
    page: x9
  })) : _5;
});
Ka.displayName = "Link";
var gi2 = Ae(function({ "aria-current": t = "page", caseSensitive: r3 = false, className: a4 = "", end: n2 = false, style: o4, to: i3, viewTransition: s2, children: l6, ...u6 }, d4) {
  let f4 = xt(i3, {
    relative: u6.relative
  }), c3 = Ce3(), h4 = Ie(rt), { navigator: m6, basename: w6 } = Ie(be5), y7 = h4 != null && Pi(f4) && s2 === true, R4 = m6.encodeLocation ? m6.encodeLocation(f4).pathname : f4.pathname, x9 = c3.pathname, C8 = h4 && h4.navigation && h4.navigation.location ? h4.navigation.location.pathname : null;
  r3 || (x9 = x9.toLowerCase(), C8 = C8 ? C8.toLowerCase() : null, R4 = R4.toLowerCase()), C8 && w6 && (C8 = oe3(C8, w6) || C8);
  let S7 = R4 !== "/" && R4.endsWith("/") ? R4.length - 1 : R4.length, E11 = x9 === R4 || !n2 && x9.startsWith(R4) && x9.charAt(S7) === "/", v8 = C8 != null && (C8 === R4 || !n2 && C8.startsWith(R4) && C8.charAt(R4.length) === "/"), O5 = {
    isActive: E11,
    isPending: v8,
    isTransitioning: y7
  }, _5 = E11 ? t : void 0, A10;
  typeof a4 == "function" ? A10 = a4(O5) : A10 = [
    a4,
    E11 ? "active" : null,
    v8 ? "pending" : null,
    y7 ? "transitioning" : null
  ].filter(Boolean).join(" ");
  let B6 = typeof o4 == "function" ? o4(O5) : o4;
  return Ce(Ka, {
    ...u6,
    "aria-current": _5,
    className: A10,
    ref: d4,
    style: B6,
    to: i3,
    viewTransition: s2
  }, typeof l6 == "function" ? l6(O5) : l6);
});
gi2.displayName = "NavLink";
var Qa = Ae(({ discover: e = "render", fetcherKey: t, navigate: r3, reloadDocument: a4, replace: n2, state: o4, method: i3 = hr2, action: s2, onSubmit: l6, relative: u6, preventScrollReset: d4, viewTransition: f4, ...c3 }, h4) => {
  let m6 = qa(), w6 = Ci(s2, {
    relative: u6
  }), y7 = i3.toLowerCase() === "get" ? "get" : "post", R4 = typeof s2 == "string" && wi2.test(s2);
  return Ce("form", {
    ref: h4,
    method: y7,
    action: w6,
    onSubmit: a4 ? l6 : (C8) => {
      if (l6 && l6(C8), C8.defaultPrevented) return;
      C8.preventDefault();
      let S7 = C8.nativeEvent.submitter, E11 = S7?.getAttribute("formmethod") || i3;
      m6(S7 || C8.currentTarget, {
        fetcherKey: t,
        method: E11,
        navigate: r3,
        replace: n2,
        state: o4,
        relative: u6,
        preventScrollReset: d4,
        viewTransition: f4
      });
    },
    ...c3,
    "data-discover": !R4 && e === "render" ? "true" : void 0
  });
});
Qa.displayName = "Form";
function Ei({ getKey: e, storageKey: t, ...r3 }) {
  let a4 = Ie(ze3), { basename: n2 } = Ie(be5), o4 = Ce3(), i3 = _r2();
  xi({
    getKey: e,
    storageKey: t
  });
  let s2 = be(() => {
    if (!a4 || !e) return null;
    let u6 = ya2(o4, i3, n2, e);
    return u6 !== o4.key ? u6 : null;
  }, []);
  if (!a4 || a4.isSpaMode) return null;
  let l6 = ((u6, d4) => {
    if (!window.history.state || !window.history.state.key) {
      let f4 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: f4
      }, "");
    }
    try {
      let c3 = JSON.parse(sessionStorage.getItem(u6) || "{}")[d4 || window.history.state.key];
      typeof c3 == "number" && window.scrollTo(0, c3);
    } catch (f4) {
      console.error(f4), sessionStorage.removeItem(u6);
    }
  }).toString();
  return Ce("script", {
    ...r3,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${l6})(${JSON.stringify(t || pa)}, ${JSON.stringify(s2)})`
    }
  });
}
Ei.displayName = "ScrollRestoration";
function bi(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ir(e) {
  let t = Ie(Je2);
  return M4(t, bi(e)), t;
}
function Za(e) {
  let t = Ie(rt);
  return M4(t, bi(e)), t;
}
function Si(e, { target: t, replace: r3, state: a4, preventScrollReset: n2, relative: o4, viewTransition: i3 } = {}) {
  let s2 = xr2(), l6 = Ce3(), u6 = xt(e, {
    relative: o4
  });
  return He((d4) => {
    if (Vs(d4, t)) {
      d4.preventDefault();
      let f4 = r3 !== void 0 ? r3 : ve4(l6) === ve4(u6);
      s2(e, {
        replace: f4,
        state: a4,
        preventScrollReset: n2,
        relative: o4,
        viewTransition: i3
      });
    }
  }, [
    l6,
    s2,
    u6,
    r3,
    a4,
    t,
    e,
    n2,
    o4,
    i3
  ]);
}
var Vu = 0;
var Yu = () => `__${String(++Vu)}__`;
function qa() {
  let { router: e } = Ir("useSubmit"), { basename: t } = Ie(be5), r3 = Es();
  return He(async (a4, n2 = {}) => {
    let { action: o4, method: i3, encType: s2, formData: l6, body: u6 } = Xs(a4, t);
    if (n2.navigate === false) {
      let d4 = n2.fetcherKey || Yu();
      await e.fetch(d4, r3, n2.action || o4, {
        preventScrollReset: n2.preventScrollReset,
        formData: l6,
        body: u6,
        formMethod: n2.method || i3,
        formEncType: n2.encType || s2,
        flushSync: n2.flushSync
      });
    } else await e.navigate(n2.action || o4, {
      preventScrollReset: n2.preventScrollReset,
      formData: l6,
      body: u6,
      formMethod: n2.method || i3,
      formEncType: n2.encType || s2,
      replace: n2.replace,
      state: n2.state,
      fromRouteId: r3,
      flushSync: n2.flushSync,
      viewTransition: n2.viewTransition
    });
  }, [
    e,
    t,
    r3
  ]);
}
function Ci(e, { relative: t } = {}) {
  let { basename: r3 } = Ie(be5), a4 = Ie(Se3);
  M4(a4, "useFormAction must be used inside a RouteContext");
  let [n2] = a4.matches.slice(-1), o4 = {
    ...xt(e || ".", {
      relative: t
    })
  }, i3 = Ce3();
  if (e == null) {
    o4.search = i3.search;
    let s2 = new URLSearchParams(o4.search), l6 = s2.getAll("index");
    if (l6.some((d4) => d4 === "")) {
      s2.delete("index"), l6.filter((f4) => f4).forEach((f4) => s2.append("index", f4));
      let d4 = s2.toString();
      o4.search = d4 ? `?${d4}` : "";
    }
  }
  return (!e || e === ".") && n2.route.index && (o4.search = o4.search ? o4.search.replace(/^\?/, "?index&") : "?index"), r3 !== "/" && (o4.pathname = o4.pathname === "/" ? r3 : Ue3([
    r3,
    o4.pathname
  ])), ve4(o4);
}
var pa = "react-router-scroll-positions";
var dr = {};
function ya2(e, t, r3, a4) {
  let n2 = null;
  return a4 && (r3 !== "/" ? n2 = a4({
    ...e,
    pathname: oe3(e.pathname, r3) || e.pathname
  }, t) : n2 = a4(e, t)), n2 == null && (n2 = e.key), n2;
}
function xi({ getKey: e, storageKey: t } = {}) {
  let { router: r3 } = Ir("useScrollRestoration"), { restoreScrollPosition: a4, preventScrollReset: n2 } = Za("useScrollRestoration"), { basename: o4 } = Ie(be5), i3 = Ce3(), s2 = _r2(), l6 = No();
  Le(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), Ku(He(() => {
    if (l6.state === "idle") {
      let u6 = ya2(i3, s2, o4, e);
      dr[u6] = window.scrollY;
    }
    try {
      sessionStorage.setItem(t || pa, JSON.stringify(dr));
    } catch (u6) {
      K4(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u6}).`);
    }
    window.history.scrollRestoration = "auto";
  }, [
    l6.state,
    e,
    o4,
    i3,
    s2,
    t
  ])), typeof document < "u" && (De(() => {
    try {
      let u6 = sessionStorage.getItem(t || pa);
      u6 && (dr = JSON.parse(u6));
    } catch {
    }
  }, [
    t
  ]), De(() => {
    let u6 = r3?.enableScrollRestoration(dr, () => window.scrollY, e ? (d4, f4) => ya2(d4, f4, o4, e) : void 0);
    return () => u6 && u6();
  }, [
    r3,
    o4,
    e
  ]), De(() => {
    if (a4 !== false) {
      if (typeof a4 == "number") {
        window.scrollTo(0, a4);
        return;
      }
      try {
        if (i3.hash) {
          let u6 = document.getElementById(decodeURIComponent(i3.hash.slice(1)));
          if (u6) {
            u6.scrollIntoView();
            return;
          }
        }
      } catch {
        K4(false, `"${i3.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
      }
      n2 !== true && window.scrollTo(0, 0);
    }
  }, [
    i3,
    a4,
    n2
  ]));
}
function Ku(e, t) {
  let { capture: r3 } = t || {};
  Le(() => {
    let a4 = r3 != null ? {
      capture: r3
    } : void 0;
    return window.addEventListener("pagehide", e, a4), () => {
      window.removeEventListener("pagehide", e, a4);
    };
  }, [
    e,
    r3
  ]);
}
function Pi(e, { relative: t } = {}) {
  let r3 = Ie(Gt);
  M4(r3 != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let { basename: a4 } = Ir("useViewTransitionState"), n2 = xt(e, {
    relative: t
  });
  if (!r3.isTransitioning) return false;
  let o4 = oe3(r3.currentLocation.pathname, a4) || r3.currentLocation.pathname, i3 = oe3(r3.nextLocation.pathname, a4) || r3.nextLocation.pathname;
  return Et(n2.pathname, i3) != null || Et(n2.pathname, o4) != null;
}
var ln2 = new TextEncoder();
var zi = ((e) => (e.Development = "development", e.Production = "production", e.Test = "test", e))(zi || {});
var Xi2 = /* @__PURE__ */ new Set([
  ...Na2,
  304
]);
var el = class extends Qe.Component {
  constructor(e) {
    super(e), this.state = {
      error: null,
      location: e.location
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ? {
      error: null,
      location: e.location
    } : {
      error: t.error,
      location: t.location
    };
  }
  render() {
    return this.state.error ? Qe.createElement(tl, {
      error: this.state.error,
      renderAppShell: true
    }) : this.props.children;
  }
};
function Ni({ renderAppShell: e, title: t, children: r3 }) {
  return e ? Qe.createElement("html", {
    lang: "en"
  }, Qe.createElement("head", null, Qe.createElement("meta", {
    charSet: "utf-8"
  }), Qe.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), Qe.createElement("title", null, t)), Qe.createElement("body", null, Qe.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, r3))) : r3;
}
function tl({ error: e, renderAppShell: t }) {
  console.error(e);
  let r3 = Qe.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
    }
  });
  if (re3(e)) return Qe.createElement(Ni, {
    renderAppShell: t,
    title: "Unhandled Thrown Response!"
  }, Qe.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, e.status, " ", e.statusText), je4 ? r3 : null);
  let a4;
  if (e instanceof Error) a4 = e;
  else {
    let n2 = e == null ? "Unknown Error" : typeof e == "object" && "toString" in e ? e.toString() : JSON.stringify(e);
    a4 = new Error(n2);
  }
  return Qe.createElement(Ni, {
    renderAppShell: t,
    title: "Application Error!"
  }, Qe.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), Qe.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, a4.stack), r3);
}
var nn = Ra();
var on2 = new TextEncoder();
var rd = "use";
var $i = react_19_1_exports[rd];

// deno:https://esm.sh/@emotion/memoize@0.8.1/es2022/memoize.mjs
function u3(t) {
  var n2 = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return n2[e] === void 0 && (n2[e] = t(e)), n2[e];
  };
}

// deno:https://esm.sh/@emotion/is-prop-valid@1.2.2/es2022/is-prop-valid.mjs
var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var a2 = u3(function(e) {
  return r.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});

// deno:https://esm.sh/@emotion/unitless@0.8.1/es2022/unitless.mjs
var o = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// deno:https://esm.sh/shallowequal@1.1.0/es2022/shallowequal.mjs
var g3 = Object.create;
var y3 = Object.defineProperty;
var o2 = Object.getOwnPropertyDescriptor;
var w4 = Object.getOwnPropertyNames;
var P3 = Object.getPrototypeOf;
var k7 = Object.prototype.hasOwnProperty;
var q7 = (t, r3) => () => (r3 || t((r3 = {
  exports: {}
}).exports, r3), r3.exports);
var E6 = (t, r3, e, a4) => {
  if (r3 && typeof r3 == "object" || typeof r3 == "function") for (let f4 of w4(r3)) !k7.call(t, f4) && f4 !== e && y3(t, f4, {
    get: () => r3[f4],
    enumerable: !(a4 = o2(r3, f4)) || a4.enumerable
  });
  return t;
};
var H4 = (t, r3, e) => (e = t != null ? g3(P3(t)) : {}, E6(r3 || !t || !t.__esModule ? y3(e, "default", {
  value: t,
  enumerable: true
}) : e, t));
var h3 = q7((z7, d4) => {
  d4.exports = function(r3, e, a4, f4) {
    var s2 = a4 ? a4.call(f4, r3, e) : void 0;
    if (s2 !== void 0) return !!s2;
    if (r3 === e) return true;
    if (typeof r3 != "object" || !r3 || typeof e != "object" || !e) return false;
    var n2 = Object.keys(r3), p6 = Object.keys(e);
    if (n2.length !== p6.length) return false;
    for (var O5 = Object.prototype.hasOwnProperty.bind(e), i3 = 0; i3 < n2.length; i3++) {
      var l6 = n2[i3];
      if (!O5(l6)) return false;
      var v8 = r3[l6], c3 = e[l6];
      if (s2 = a4 ? a4.call(f4, v8, c3, l6) : void 0, s2 === false || s2 === void 0 && v8 !== c3) return false;
    }
    return true;
  };
});
var u4 = H4(h3());
var D4 = u4.default ?? u4;

// deno:https://esm.sh/stylis@4.3.2/es2022/stylis.mjs
var o3 = "-ms-";
var F5 = "-moz-";
var a3 = "-webkit-";
var Q2 = "comm";
var D5 = "rule";
var _3 = "decl";
var ur = "@import";
var X3 = "@keyframes";
var br3 = "@layer";
var cr = Math.abs;
var W3 = String.fromCharCode;
var G5 = Object.assign;
function wr2(r3, t) {
  return p5(r3, 0) ^ 45 ? (((t << 2 ^ p5(r3, 0)) << 2 ^ p5(r3, 1)) << 2 ^ p5(r3, 2)) << 2 ^ p5(r3, 3) : 0;
}
function v6(r3) {
  return r3.trim();
}
function A5(r3, t) {
  return (r3 = t.exec(r3)) ? r3[0] : r3;
}
function c(r3, t, e) {
  return r3.replace(t, e);
}
function j6(r3, t, e) {
  return r3.indexOf(t, e);
}
function p5(r3, t) {
  return r3.charCodeAt(t) | 0;
}
function g4(r3, t, e) {
  return r3.slice(t, e);
}
function b6(r3) {
  return r3.length;
}
function B3(r3) {
  return r3.length;
}
function O4(r3, t) {
  return t.push(r3), r3;
}
function nr(r3, t) {
  return r3.map(t).join("");
}
function ar(r3, t) {
  return r3.filter(function(e) {
    return !A5(e, t);
  });
}
var rr2 = 1;
var Z3 = 1;
var hr3 = 0;
var m3 = 0;
var f3 = 0;
var y4 = "";
function H5(r3, t, e, s2, n2, w6, $5, x9) {
  return {
    value: r3,
    root: t,
    parent: e,
    type: s2,
    props: n2,
    children: w6,
    line: rr2,
    column: Z3,
    length: $5,
    return: "",
    siblings: x9
  };
}
function S5(r3, t) {
  return G5(H5("", null, null, "", null, null, 0, r3.siblings), r3, {
    length: -r3.length
  }, t);
}
function K5(r3) {
  for (; r3.root; ) r3 = S5(r3.root, {
    children: [
      r3
    ]
  });
  O4(r3, r3.siblings);
}
function mr3() {
  return f3;
}
function Er3() {
  return f3 = m3 > 0 ? p5(y4, --m3) : 0, Z3--, f3 === 10 && (Z3 = 1, rr2--), f3;
}
function E7() {
  return f3 = m3 < hr3 ? p5(y4, m3++) : 0, Z3++, f3 === 10 && (Z3 = 1, rr2++), f3;
}
function I4() {
  return p5(y4, m3);
}
function q8() {
  return m3;
}
function tr(r3, t) {
  return g4(y4, r3, t);
}
function l3(r3) {
  switch (r3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ir(r3) {
  return rr2 = Z3 = 1, hr3 = b6(y4 = r3), m3 = 0, [];
}
function pr(r3) {
  return y4 = "", r3;
}
function J3(r3) {
  return v6(tr(m3 - 1, or(r3 === 91 ? r3 + 2 : r3 === 40 ? r3 + 1 : r3)));
}
function gr(r3) {
  for (; (f3 = I4()) && f3 < 33; ) E7();
  return l3(r3) > 2 || l3(f3) > 3 ? "" : " ";
}
function $r(r3, t) {
  for (; --t && E7() && !(f3 < 48 || f3 > 102 || f3 > 57 && f3 < 65 || f3 > 70 && f3 < 97); ) ;
  return tr(r3, q8() + (t < 6 && I4() == 32 && E7() == 32));
}
function or(r3) {
  for (; E7(); ) switch (f3) {
    case r3:
      return m3;
    case 34:
    case 39:
      r3 !== 34 && r3 !== 39 && or(f3);
      break;
    case 40:
      r3 === 41 && or(r3);
      break;
    case 92:
      E7();
      break;
  }
  return m3;
}
function Tr2(r3, t) {
  for (; E7() && r3 + f3 !== 57; ) if (r3 + f3 === 84 && I4() === 47) break;
  return "/*" + tr(t, m3 - 1) + "*" + W3(r3 === 47 ? r3 : E7());
}
function fr2(r3) {
  for (; !l3(I4()); ) E7();
  return tr(r3, m3);
}
function yr2(r3) {
  return pr(er("", null, null, null, [
    ""
  ], r3 = ir(r3), 0, [
    0
  ], r3));
}
function er(r3, t, e, s2, n2, w6, $5, x9, T6) {
  for (var d4 = 0, C8 = 0, h4 = $5, Y5 = 0, L2 = 0, U4 = 0, k9 = 1, V6 = 1, R4 = 1, u6 = 0, N5 = "", P6 = n2, z7 = w6, M8 = s2, i3 = N5; V6; ) switch (U4 = u6, u6 = E7()) {
    case 40:
      if (U4 != 108 && p5(i3, h4 - 1) == 58) {
        j6(i3 += c(J3(u6), "&", "&\f"), "&\f", cr(d4 ? x9[d4 - 1] : 0)) != -1 && (R4 = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      i3 += J3(u6);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      i3 += gr(U4);
      break;
    case 92:
      i3 += $r(q8() - 1, 7);
      continue;
    case 47:
      switch (I4()) {
        case 42:
        case 47:
          O4(Or(Tr2(E7(), q8()), t, e, T6), T6);
          break;
        default:
          i3 += "/";
      }
      break;
    case 123 * k9:
      x9[d4++] = b6(i3) * R4;
    case 125 * k9:
    case 59:
    case 0:
      switch (u6) {
        case 0:
        case 125:
          V6 = 0;
        case 59 + C8:
          R4 == -1 && (i3 = c(i3, /\f/g, "")), L2 > 0 && b6(i3) - h4 && O4(L2 > 32 ? Ar3(i3 + ";", s2, e, h4 - 1, T6) : Ar3(c(i3, " ", "") + ";", s2, e, h4 - 2, T6), T6);
          break;
        case 59:
          i3 += ";";
        default:
          if (O4(M8 = dr2(i3, t, e, d4, C8, n2, x9, N5, P6 = [], z7 = [], h4, w6), w6), u6 === 123) if (C8 === 0) er(i3, t, M8, M8, P6, w6, h4, x9, z7);
          else switch (Y5 === 99 && p5(i3, 3) === 110 ? 100 : Y5) {
            case 100:
            case 108:
            case 109:
            case 115:
              er(r3, M8, M8, s2 && O4(dr2(r3, M8, M8, 0, 0, n2, x9, N5, n2, P6 = [], h4, z7), z7), n2, z7, h4, x9, s2 ? P6 : z7);
              break;
            default:
              er(i3, M8, M8, M8, [
                ""
              ], z7, 0, x9, z7);
          }
      }
      d4 = C8 = L2 = 0, k9 = R4 = 1, N5 = i3 = "", h4 = $5;
      break;
    case 58:
      h4 = 1 + b6(i3), L2 = U4;
    default:
      if (k9 < 1) {
        if (u6 == 123) --k9;
        else if (u6 == 125 && k9++ == 0 && Er3() == 125) continue;
      }
      switch (i3 += W3(u6), u6 * k9) {
        case 38:
          R4 = C8 > 0 ? 1 : (i3 += "\f", -1);
          break;
        case 44:
          x9[d4++] = (b6(i3) - 1) * R4, R4 = 1;
          break;
        case 64:
          I4() === 45 && (i3 += J3(E7())), Y5 = I4(), C8 = h4 = b6(N5 = i3 += fr2(q8())), u6++;
          break;
        case 45:
          U4 === 45 && b6(i3) == 2 && (k9 = 0);
      }
  }
  return w6;
}
function dr2(r3, t, e, s2, n2, w6, $5, x9, T6, d4, C8, h4) {
  for (var Y5 = n2 - 1, L2 = n2 === 0 ? w6 : [
    ""
  ], U4 = B3(L2), k9 = 0, V6 = 0, R4 = 0; k9 < s2; ++k9) for (var u6 = 0, N5 = g4(r3, Y5 + 1, Y5 = cr(V6 = $5[k9])), P6 = r3; u6 < U4; ++u6) (P6 = v6(V6 > 0 ? L2[u6] + " " + N5 : c(N5, /&\f/g, L2[u6]))) && (T6[R4++] = P6);
  return H5(r3, t, e, n2 === 0 ? D5 : x9, T6, d4, C8, h4);
}
function Or(r3, t, e, s2) {
  return H5(r3, t, e, Q2, W3(mr3()), g4(r3, 2, -2), 0, s2);
}
function Ar3(r3, t, e, s2, n2) {
  return H5(r3, t, e, _3, g4(r3, 0, s2), g4(r3, s2 + 1, -1), s2, n2);
}
function xr3(r3, t, e) {
  switch (wr2(r3, t)) {
    case 5103:
      return a3 + "print-" + r3 + r3;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a3 + r3 + r3;
    case 4789:
      return F5 + r3 + r3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a3 + r3 + F5 + r3 + o3 + r3 + r3;
    case 5936:
      switch (p5(r3, t + 11)) {
        case 114:
          return a3 + r3 + o3 + c(r3, /[svh]\w+-[tblr]{2}/, "tb") + r3;
        case 108:
          return a3 + r3 + o3 + c(r3, /[svh]\w+-[tblr]{2}/, "tb-rl") + r3;
        case 45:
          return a3 + r3 + o3 + c(r3, /[svh]\w+-[tblr]{2}/, "lr") + r3;
      }
    case 6828:
    case 4268:
    case 2903:
      return a3 + r3 + o3 + r3 + r3;
    case 6165:
      return a3 + r3 + o3 + "flex-" + r3 + r3;
    case 5187:
      return a3 + r3 + c(r3, /(\w+).+(:[^]+)/, a3 + "box-$1$2" + o3 + "flex-$1$2") + r3;
    case 5443:
      return a3 + r3 + o3 + "flex-item-" + c(r3, /flex-|-self/g, "") + (A5(r3, /flex-|baseline/) ? "" : o3 + "grid-row-" + c(r3, /flex-|-self/g, "")) + r3;
    case 4675:
      return a3 + r3 + o3 + "flex-line-pack" + c(r3, /align-content|flex-|-self/g, "") + r3;
    case 5548:
      return a3 + r3 + o3 + c(r3, "shrink", "negative") + r3;
    case 5292:
      return a3 + r3 + o3 + c(r3, "basis", "preferred-size") + r3;
    case 6060:
      return a3 + "box-" + c(r3, "-grow", "") + a3 + r3 + o3 + c(r3, "grow", "positive") + r3;
    case 4554:
      return a3 + c(r3, /([^-])(transform)/g, "$1" + a3 + "$2") + r3;
    case 6187:
      return c(c(c(r3, /(zoom-|grab)/, a3 + "$1"), /(image-set)/, a3 + "$1"), r3, "") + r3;
    case 5495:
    case 3959:
      return c(r3, /(image-set\([^]*)/, a3 + "$1$`$1");
    case 4968:
      return c(c(r3, /(.+:)(flex-)?(.*)/, a3 + "box-pack:$3" + o3 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a3 + r3 + r3;
    case 4200:
      if (!A5(r3, /flex-|baseline/)) return o3 + "grid-column-align" + g4(r3, t) + r3;
      break;
    case 2592:
    case 3360:
      return o3 + c(r3, "template-", "") + r3;
    case 4384:
    case 3616:
      return e && e.some(function(s2, n2) {
        return t = n2, A5(s2.props, /grid-\w+-end/);
      }) ? ~j6(r3 + (e = e[t].value), "span", 0) ? r3 : o3 + c(r3, "-start", "") + r3 + o3 + "grid-row-span:" + (~j6(e, "span", 0) ? A5(e, /\d+/) : +A5(e, /\d+/) - +A5(r3, /\d+/)) + ";" : o3 + c(r3, "-start", "") + r3;
    case 4896:
    case 4128:
      return e && e.some(function(s2) {
        return A5(s2.props, /grid-\w+-start/);
      }) ? r3 : o3 + c(c(r3, "-end", "-span"), "span ", "") + r3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return c(r3, /(.+)-inline(.+)/, a3 + "$1$2") + r3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (b6(r3) - 1 - t > 6) switch (p5(r3, t + 1)) {
        case 109:
          if (p5(r3, t + 4) !== 45) break;
        case 102:
          return c(r3, /(.+:)(.+)-([^]+)/, "$1" + a3 + "$2-$3$1" + F5 + (p5(r3, t + 3) == 108 ? "$3" : "$2-$3")) + r3;
        case 115:
          return ~j6(r3, "stretch", 0) ? xr3(c(r3, "stretch", "fill-available"), t, e) + r3 : r3;
      }
      break;
    case 5152:
    case 5920:
      return c(r3, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(s2, n2, w6, $5, x9, T6, d4) {
        return o3 + n2 + ":" + w6 + d4 + ($5 ? o3 + n2 + "-span:" + (x9 ? T6 : +T6 - +w6) + d4 : "") + r3;
      });
    case 4949:
      if (p5(r3, t + 6) === 121) return c(r3, ":", ":" + a3) + r3;
      break;
    case 6444:
      switch (p5(r3, p5(r3, 14) === 45 ? 18 : 11)) {
        case 120:
          return c(r3, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + a3 + (p5(r3, 14) === 45 ? "inline-" : "") + "box$3$1" + a3 + "$2$3$1" + o3 + "$2box$3") + r3;
        case 100:
          return c(r3, ":", ":" + o3) + r3;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return c(r3, "scroll-", "scroll-snap-") + r3;
  }
  return r3;
}
function sr2(r3, t) {
  for (var e = "", s2 = 0; s2 < r3.length; s2++) e += t(r3[s2], s2, r3, t) || "";
  return e;
}
function Xr(r3, t, e, s2) {
  switch (r3.type) {
    case br3:
      if (r3.children.length) break;
    case ur:
    case _3:
      return r3.return = r3.return || r3.value;
    case Q2:
      return "";
    case X3:
      return r3.return = r3.value + "{" + sr2(r3.children, s2) + "}";
    case D5:
      if (!b6(r3.value = r3.props.join(","))) return "";
  }
  return b6(e = sr2(r3.children, s2)) ? r3.return = r3.value + "{" + e + "}" : "";
}
function ct2(r3) {
  var t = B3(r3);
  return function(e, s2, n2, w6) {
    for (var $5 = "", x9 = 0; x9 < t; x9++) $5 += r3[x9](e, s2, n2, w6) || "";
    return $5;
  };
}
function nt2(r3) {
  return function(t) {
    t.root || (t = t.return) && r3(t);
  };
}
function at2(r3, t, e, s2) {
  if (r3.length > -1 && !r3.return) switch (r3.type) {
    case _3:
      r3.return = xr3(r3.value, r3.length, e);
      return;
    case X3:
      return sr2([
        S5(r3, {
          value: c(r3.value, "@", "@" + a3)
        })
      ], s2);
    case D5:
      if (r3.length) return nr(e = r3.props, function(n2) {
        switch (A5(n2, s2 = /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            K5(S5(r3, {
              props: [
                c(n2, /:(read-\w+)/, ":" + F5 + "$1")
              ]
            })), K5(S5(r3, {
              props: [
                n2
              ]
            })), G5(r3, {
              props: ar(e, s2)
            });
            break;
          case "::placeholder":
            K5(S5(r3, {
              props: [
                c(n2, /:(plac\w+)/, ":" + a3 + "input-$1")
              ]
            })), K5(S5(r3, {
              props: [
                c(n2, /:(plac\w+)/, ":" + F5 + "$1")
              ]
            })), K5(S5(r3, {
              props: [
                c(n2, /:(plac\w+)/, o3 + "input-$1")
              ]
            })), K5(S5(r3, {
              props: [
                n2
              ]
            })), G5(r3, {
              props: ar(e, s2)
            });
            break;
        }
        return "";
      });
  }
}

// deno:https://esm.sh/tslib@2.6.2/es2022/tslib.mjs
var m4 = function() {
  return m4 = Object.assign || function(t) {
    for (var n2, r3 = 1, i3 = arguments.length; r3 < i3; r3++) {
      n2 = arguments[r3];
      for (var o4 in n2) Object.prototype.hasOwnProperty.call(n2, o4) && (t[o4] = n2[o4]);
    }
    return t;
  }, m4.apply(this, arguments);
};
function M5(e, t, n2) {
  if (n2 || arguments.length === 2) for (var r3 = 0, i3 = t.length, o4; r3 < i3; r3++) (o4 || !(r3 in t)) && (o4 || (o4 = Array.prototype.slice.call(t, 0, r3)), o4[r3] = t[r3]);
  return e.concat(o4 || Array.prototype.slice.call(t));
}

// deno:https://esm.sh/styled-components@6.1.19/X-ZXJlYWN0/es2022/styled-components.mjs
var C5 = typeof xs < "u" && xs.env !== void 0 && (xs.env.REACT_APP_SC_ATTR || xs.env.SC_ATTR) || "data-styled";
var $e3 = "active";
var re4 = "data-styled-version";
var B4 = "6.1.19";
var we4 = `/*!sc*/
`;
var se3 = typeof window < "u" && typeof document < "u";
var yt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xs < "u" && xs.env !== void 0 && xs.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xs.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xs.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xs.env.REACT_APP_SC_DISABLE_SPEEDY : typeof xs < "u" && xs.env !== void 0 && xs.env.SC_DISABLE_SPEEDY !== void 0 && xs.env.SC_DISABLE_SPEEDY !== "" && xs.env.SC_DISABLE_SPEEDY !== "false" && xs.env.SC_DISABLE_SPEEDY);
var vt = {};
var ce4 = Object.freeze([]);
var z5 = Object.freeze({});
function Ee3(t, e, n2) {
  return n2 === void 0 && (n2 = z5), t.theme !== n2.theme && t.theme || e || n2.theme;
}
var Ge5 = /* @__PURE__ */ new Set([
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "u",
  "ul",
  "use",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
]);
var gt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var St = /(^-|-$)/g;
function De3(t) {
  return t.replace(gt, "-").replace(St, "");
}
var wt = /(a)(d)/gi;
var Q3 = 52;
var Te3 = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function me6(t) {
  var e, n2 = "";
  for (e = Math.abs(t); e > Q3; e = e / Q3 | 0) n2 = Te3(e % Q3) + n2;
  return (Te3(e % Q3) + n2).replace(wt, "$1-$2");
}
var de4;
var Le4 = 5381;
var M6 = function(t, e) {
  for (var n2 = e.length; n2; ) t = 33 * t ^ e.charCodeAt(--n2);
  return t;
};
var Ye3 = function(t) {
  return M6(Le4, t);
};
function be6(t) {
  return me6(Ye3(t) >>> 0);
}
function We3(t) {
  return t.displayName || t.name || "Component";
}
function he3(t) {
  return typeof t == "string" && true;
}
var qe3 = typeof Symbol == "function" && Symbol.for;
var He3 = qe3 ? Symbol.for("react.memo") : 60115;
var Et2 = qe3 ? Symbol.for("react.forward_ref") : 60112;
var bt = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var Nt = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var Ue4 = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var Pt2 = ((de4 = {})[Et2] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
}, de4[He3] = Ue4, de4);
function Re4(t) {
  return ("type" in (e = t) && e.type.$$typeof) === He3 ? Ue4 : "$$typeof" in t ? Pt2[t.$$typeof] : bt;
  var e;
}
var _t = Object.defineProperty;
var Ct = Object.getOwnPropertyNames;
var ke5 = Object.getOwnPropertySymbols;
var At = Object.getOwnPropertyDescriptor;
var It2 = Object.getPrototypeOf;
var xe4 = Object.prototype;
function Ne3(t, e, n2) {
  if (typeof e != "string") {
    if (xe4) {
      var o4 = It2(e);
      o4 && o4 !== xe4 && Ne3(t, o4, n2);
    }
    var r3 = Ct(e);
    ke5 && (r3 = r3.concat(ke5(e)));
    for (var s2 = Re4(t), i3 = Re4(e), u6 = 0; u6 < r3.length; ++u6) {
      var a4 = r3[u6];
      if (!(a4 in Nt || n2 && n2[a4] || i3 && a4 in i3 || s2 && a4 in s2)) {
        var c3 = At(e, a4);
        try {
          _t(t, a4, c3);
        } catch {
        }
      }
    }
  }
  return t;
}
function j7(t) {
  return typeof t == "function";
}
function Pe5(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function x7(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function H6(t, e) {
  if (t.length === 0) return "";
  for (var n2 = t[0], o4 = 1; o4 < t.length; o4++) n2 += e ? e + t[o4] : t[o4];
  return n2;
}
function U3(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function ye4(t, e, n2) {
  if (n2 === void 0 && (n2 = false), !n2 && !U3(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (var o4 = 0; o4 < e.length; o4++) t[o4] = ye4(t[o4], e[o4]);
  else if (U3(e)) for (var o4 in e) t[o4] = ye4(t[o4], e[o4]);
  return t;
}
function _e4(t, e) {
  Object.defineProperty(t, "toString", {
    value: e
  });
}
function E8(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var Ot = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var n2 = 0, o4 = 0; o4 < e; o4++) n2 += this.groupSizes[o4];
    return n2;
  }, t.prototype.insertRules = function(e, n2) {
    if (e >= this.groupSizes.length) {
      for (var o4 = this.groupSizes, r3 = o4.length, s2 = r3; e >= s2; ) if ((s2 <<= 1) < 0) throw E8(16, "".concat(e));
      this.groupSizes = new Uint32Array(s2), this.groupSizes.set(o4), this.length = s2;
      for (var i3 = r3; i3 < s2; i3++) this.groupSizes[i3] = 0;
    }
    for (var u6 = this.indexOfGroup(e + 1), a4 = (i3 = 0, n2.length); i3 < a4; i3++) this.tag.insertRule(u6, n2[i3]) && (this.groupSizes[e]++, u6++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var n2 = this.groupSizes[e], o4 = this.indexOfGroup(e), r3 = o4 + n2;
      this.groupSizes[e] = 0;
      for (var s2 = o4; s2 < r3; s2++) this.tag.deleteRule(o4);
    }
  }, t.prototype.getGroup = function(e) {
    var n2 = "";
    if (e >= this.length || this.groupSizes[e] === 0) return n2;
    for (var o4 = this.groupSizes[e], r3 = this.indexOfGroup(e), s2 = r3 + o4, i3 = r3; i3 < s2; i3++) n2 += "".concat(this.tag.getRule(i3)).concat(we4);
    return n2;
  }, t;
}();
var on3 = 1 << 30;
var ne2 = /* @__PURE__ */ new Map();
var ie3 = /* @__PURE__ */ new Map();
var oe4 = 1;
var ee2 = function(t) {
  if (ne2.has(t)) return ne2.get(t);
  for (; ie3.has(oe4); ) oe4++;
  var e = oe4++;
  return ne2.set(t, e), ie3.set(e, t), e;
};
var Dt = function(t, e) {
  oe4 = e + 1, ne2.set(t, e), ie3.set(e, t);
};
var Tt2 = "style[".concat(C5, "][").concat(re4, '="').concat(B4, '"]');
var Rt = new RegExp("^".concat(C5, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
var kt2 = function(t, e, n2) {
  for (var o4, r3 = n2.split(","), s2 = 0, i3 = r3.length; s2 < i3; s2++) (o4 = r3[s2]) && t.registerName(e, o4);
};
var xt2 = function(t, e) {
  for (var n2, o4 = ((n2 = e.textContent) !== null && n2 !== void 0 ? n2 : "").split(we4), r3 = [], s2 = 0, i3 = o4.length; s2 < i3; s2++) {
    var u6 = o4[s2].trim();
    if (u6) {
      var a4 = u6.match(Rt);
      if (a4) {
        var c3 = 0 | parseInt(a4[1], 10), l6 = a4[2];
        c3 !== 0 && (Dt(l6, c3), kt2(t, l6, a4[3]), t.getTag().insertRules(c3, r3)), r3.length = 0;
      } else r3.push(u6);
    }
  }
};
var je5 = function(t) {
  for (var e = document.querySelectorAll(Tt2), n2 = 0, o4 = e.length; n2 < o4; n2++) {
    var r3 = e[n2];
    r3 && r3.getAttribute(C5) !== $e3 && (xt2(t, r3), r3.parentNode && r3.parentNode.removeChild(r3));
  }
};
function ve5() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Je3 = function(t) {
  var e = document.head, n2 = t || e, o4 = document.createElement("style"), r3 = function(u6) {
    var a4 = Array.from(u6.querySelectorAll("style[".concat(C5, "]")));
    return a4[a4.length - 1];
  }(n2), s2 = r3 !== void 0 ? r3.nextSibling : null;
  o4.setAttribute(C5, $e3), o4.setAttribute(re4, B4);
  var i3 = ve5();
  return i3 && o4.setAttribute("nonce", i3), n2.insertBefore(o4, s2), o4;
};
var jt = function() {
  function t(e) {
    this.element = Je3(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n2) {
      if (n2.sheet) return n2.sheet;
      for (var o4 = document.styleSheets, r3 = 0, s2 = o4.length; r3 < s2; r3++) {
        var i3 = o4[r3];
        if (i3.ownerNode === n2) return i3;
      }
      throw E8(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, n2) {
    try {
      return this.sheet.insertRule(n2, e), this.length++, true;
    } catch {
      return false;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var n2 = this.sheet.cssRules[e];
    return n2 && n2.cssText ? n2.cssText : "";
  }, t;
}();
var Vt2 = function() {
  function t(e) {
    this.element = Je3(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, n2) {
    if (e <= this.length && e >= 0) {
      var o4 = document.createTextNode(n2);
      return this.element.insertBefore(o4, this.nodes[e] || null), this.length++, true;
    }
    return false;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}();
var Mt2 = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, n2) {
    return e <= this.length && (this.rules.splice(e, 0, n2), this.length++, true);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}();
var Ve3 = se3;
var Ft2 = {
  isServer: !se3,
  useCSSOMInjection: !yt
};
var $4 = function() {
  function t(e, n2, o4) {
    e === void 0 && (e = z5), n2 === void 0 && (n2 = {});
    var r3 = this;
    this.options = m4(m4({}, Ft2), e), this.gs = n2, this.names = new Map(o4), this.server = !!e.isServer, !this.server && se3 && Ve3 && (Ve3 = false, je5(this)), _e4(this, function() {
      return function(s2) {
        for (var i3 = s2.getTag(), u6 = i3.length, a4 = "", c3 = function(h4) {
          var p6 = function(P6) {
            return ie3.get(P6);
          }(h4);
          if (p6 === void 0) return "continue";
          var d4 = s2.names.get(p6), v8 = i3.getGroup(h4);
          if (d4 === void 0 || !d4.size || v8.length === 0) return "continue";
          var A10 = "".concat(C5, ".g").concat(h4, '[id="').concat(p6, '"]'), T6 = "";
          d4 !== void 0 && d4.forEach(function(P6) {
            P6.length > 0 && (T6 += "".concat(P6, ","));
          }), a4 += "".concat(v8).concat(A10, '{content:"').concat(T6, '"}').concat(we4);
        }, l6 = 0; l6 < u6; l6++) c3(l6);
        return a4;
      }(r3);
    });
  }
  return t.registerId = function(e) {
    return ee2(e);
  }, t.prototype.rehydrate = function() {
    !this.server && se3 && je5(this);
  }, t.prototype.reconstructWithOptions = function(e, n2) {
    return n2 === void 0 && (n2 = true), new t(m4(m4({}, this.options), e), this.gs, n2 && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n2) {
      var o4 = n2.useCSSOMInjection, r3 = n2.target;
      return n2.isServer ? new Mt2(r3) : o4 ? new jt(r3) : new Vt2(r3);
    }(this.options), new Ot(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, n2) {
    return this.names.has(e) && this.names.get(e).has(n2);
  }, t.prototype.registerName = function(e, n2) {
    if (ee2(e), this.names.has(e)) this.names.get(e).add(n2);
    else {
      var o4 = /* @__PURE__ */ new Set();
      o4.add(n2), this.names.set(e, o4);
    }
  }, t.prototype.insertRules = function(e, n2, o4) {
    this.registerName(e, n2), this.getTag().insertRules(ee2(e), o4);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(ee2(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}();
var Bt2 = /&/g;
var zt3 = /^\s*\/\/.*$/gm;
function Xe4(t, e) {
  return t.map(function(n2) {
    return n2.type === "rule" && (n2.value = "".concat(e, " ").concat(n2.value), n2.value = n2.value.replaceAll(",", ",".concat(e, " ")), n2.props = n2.props.map(function(o4) {
      return "".concat(e, " ").concat(o4);
    })), Array.isArray(n2.children) && n2.type !== "@keyframes" && (n2.children = Xe4(n2.children, e)), n2;
  });
}
function Ze2(t) {
  var e, n2, o4, r3 = t === void 0 ? z5 : t, s2 = r3.options, i3 = s2 === void 0 ? z5 : s2, u6 = r3.plugins, a4 = u6 === void 0 ? ce4 : u6, c3 = function(p6, d4, v8) {
    return v8.startsWith(n2) && v8.endsWith(n2) && v8.replaceAll(n2, "").length > 0 ? ".".concat(e) : p6;
  }, l6 = a4.slice();
  l6.push(function(p6) {
    p6.type === D5 && p6.value.includes("&") && (p6.props[0] = p6.props[0].replace(Bt2, n2).replace(o4, c3));
  }), i3.prefix && l6.push(at2), l6.push(Xr);
  var h4 = function(p6, d4, v8, A10) {
    d4 === void 0 && (d4 = ""), v8 === void 0 && (v8 = ""), A10 === void 0 && (A10 = "&"), e = A10, n2 = d4, o4 = new RegExp("\\".concat(n2, "\\b"), "g");
    var T6 = p6.replace(zt3, ""), P6 = yr2(v8 || d4 ? "".concat(v8, " ").concat(d4, " { ").concat(T6, " }") : T6);
    i3.namespace && (P6 = Xe4(P6, i3.namespace));
    var G7 = [];
    return sr2(P6, ct2(l6.concat(nt2(function(g7) {
      return G7.push(g7);
    })))), G7;
  };
  return h4.hash = a4.length ? a4.reduce(function(p6, d4) {
    return d4.name || E8(15), M6(p6, d4.name);
  }, Le4).toString() : "", h4;
}
var Ke3 = new $4();
var ge4 = Ze2();
var Ce4 = Qe.createContext({
  shouldForwardProp: void 0,
  styleSheet: Ke3,
  stylis: ge4
});
var rn = Ce4.Consumer;
var $t2 = Qe.createContext(void 0);
function ae4() {
  return Ie(Ce4);
}
function Gt2(t) {
  var e = Ge(t.stylisPlugins), n2 = e[0], o4 = e[1], r3 = ae4().styleSheet, s2 = be(function() {
    var a4 = r3;
    return t.sheet ? a4 = t.sheet : t.target && (a4 = a4.reconstructWithOptions({
      target: t.target
    }, false)), t.disableCSSOMInjection && (a4 = a4.reconstructWithOptions({
      useCSSOMInjection: false
    })), a4;
  }, [
    t.disableCSSOMInjection,
    t.sheet,
    t.target,
    r3
  ]), i3 = be(function() {
    return Ze2({
      options: {
        namespace: t.namespace,
        prefix: t.enableVendorPrefixes
      },
      plugins: n2
    });
  }, [
    t.enableVendorPrefixes,
    t.namespace,
    n2
  ]);
  Le(function() {
    D4(n2, t.stylisPlugins) || o4(t.stylisPlugins);
  }, [
    t.stylisPlugins
  ]);
  var u6 = be(function() {
    return {
      shouldForwardProp: t.shouldForwardProp,
      styleSheet: s2,
      stylis: i3
    };
  }, [
    t.shouldForwardProp,
    s2,
    i3
  ]);
  return Qe.createElement(Ce4.Provider, {
    value: u6
  }, Qe.createElement($t2.Provider, {
    value: i3
  }, t.children));
}
var Qe3 = function() {
  function t(e, n2) {
    var o4 = this;
    this.inject = function(r3, s2) {
      s2 === void 0 && (s2 = ge4);
      var i3 = o4.name + s2.hash;
      r3.hasNameForId(o4.id, i3) || r3.insertRules(o4.id, i3, s2(o4.rules, i3, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n2, _e4(this, function() {
      throw E8(12, String(o4.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = ge4), this.name + e.hash;
  }, t;
}();
var Lt3 = function(t) {
  return t >= "A" && t <= "Z";
};
function Me5(t) {
  for (var e = "", n2 = 0; n2 < t.length; n2++) {
    var o4 = t[n2];
    if (n2 === 1 && o4 === "-" && t[0] === "-") return t;
    Lt3(o4) ? e += "-" + o4.toLowerCase() : e += o4;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var et2 = function(t) {
  return t == null || t === false || t === "";
};
var tt = function(t) {
  var e, n2, o4 = [];
  for (var r3 in t) {
    var s2 = t[r3];
    t.hasOwnProperty(r3) && !et2(s2) && (Array.isArray(s2) && s2.isCss || j7(s2) ? o4.push("".concat(Me5(r3), ":"), s2, ";") : U3(s2) ? o4.push.apply(o4, M5(M5([
      "".concat(r3, " {")
    ], tt(s2), false), [
      "}"
    ], false)) : o4.push("".concat(Me5(r3), ": ").concat((e = r3, (n2 = s2) == null || typeof n2 == "boolean" || n2 === "" ? "" : typeof n2 != "number" || n2 === 0 || e in o || e.startsWith("--") ? String(n2).trim() : "".concat(n2, "px")), ";")));
  }
  return o4;
};
function D6(t, e, n2, o4) {
  if (et2(t)) return [];
  if (Pe5(t)) return [
    ".".concat(t.styledComponentId)
  ];
  if (j7(t)) {
    if (!j7(s2 = t) || s2.prototype && s2.prototype.isReactComponent || !e) return [
      t
    ];
    var r3 = t(e);
    return D6(r3, e, n2, o4);
  }
  var s2;
  return t instanceof Qe3 ? n2 ? (t.inject(n2, o4), [
    t.getName(o4)
  ]) : [
    t
  ] : U3(t) ? tt(t) : Array.isArray(t) ? Array.prototype.concat.apply(ce4, t.map(function(i3) {
    return D6(i3, e, n2, o4);
  })) : [
    t.toString()
  ];
}
function nt3(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n2 = t[e];
    if (j7(n2) && !Pe5(n2)) return false;
  }
  return true;
}
var Yt = Ye3(B4);
var Wt = function() {
  function t(e, n2, o4) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (o4 === void 0 || o4.isStatic) && nt3(e), this.componentId = n2, this.baseHash = M6(Yt, n2), this.baseStyle = o4, $4.registerId(n2);
  }
  return t.prototype.generateAndInjectStyles = function(e, n2, o4) {
    var r3 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n2, o4) : "";
    if (this.isStatic && !o4.hash) if (this.staticRulesId && n2.hasNameForId(this.componentId, this.staticRulesId)) r3 = x7(r3, this.staticRulesId);
    else {
      var s2 = H6(D6(this.rules, e, n2, o4)), i3 = me6(M6(this.baseHash, s2) >>> 0);
      if (!n2.hasNameForId(this.componentId, i3)) {
        var u6 = o4(s2, ".".concat(i3), void 0, this.componentId);
        n2.insertRules(this.componentId, i3, u6);
      }
      r3 = x7(r3, i3), this.staticRulesId = i3;
    }
    else {
      for (var a4 = M6(this.baseHash, o4.hash), c3 = "", l6 = 0; l6 < this.rules.length; l6++) {
        var h4 = this.rules[l6];
        if (typeof h4 == "string") c3 += h4;
        else if (h4) {
          var p6 = H6(D6(h4, e, n2, o4));
          a4 = M6(a4, p6 + l6), c3 += p6;
        }
      }
      if (c3) {
        var d4 = me6(a4 >>> 0);
        n2.hasNameForId(this.componentId, d4) || n2.insertRules(this.componentId, d4, o4(c3, ".".concat(d4), void 0, this.componentId)), r3 = x7(r3, d4);
      }
    }
    return r3;
  }, t;
}();
var V5 = Qe.createContext(void 0);
var sn = V5.Consumer;
function cn(t) {
  var e = Qe.useContext(V5), n2 = be(function() {
    return function(o4, r3) {
      if (!o4) throw E8(14);
      if (j7(o4)) {
        var s2 = o4(r3);
        return s2;
      }
      if (Array.isArray(o4) || typeof o4 != "object") throw E8(8);
      return r3 ? m4(m4({}, r3), o4) : o4;
    }(t.theme, e);
  }, [
    t.theme,
    e
  ]);
  return t.children ? Qe.createElement(V5.Provider, {
    value: n2
  }, t.children) : null;
}
var fe3 = {};
function qt2(t, e, n2) {
  var o4 = Pe5(t), r3 = t, s2 = !he3(t), i3 = e.attrs, u6 = i3 === void 0 ? ce4 : i3, a4 = e.componentId, c3 = a4 === void 0 ? function(S7, b10) {
    var y7 = typeof S7 != "string" ? "sc" : De3(S7);
    fe3[y7] = (fe3[y7] || 0) + 1;
    var N5 = "".concat(y7, "-").concat(be6(B4 + y7 + fe3[y7]));
    return b10 ? "".concat(b10, "-").concat(N5) : N5;
  }(e.displayName, e.parentComponentId) : a4, l6 = e.displayName, h4 = l6 === void 0 ? function(S7) {
    return he3(S7) ? "styled.".concat(S7) : "Styled(".concat(We3(S7), ")");
  }(t) : l6, p6 = e.displayName && e.componentId ? "".concat(De3(e.displayName), "-").concat(e.componentId) : e.componentId || c3, d4 = o4 && r3.attrs ? r3.attrs.concat(u6).filter(Boolean) : u6, v8 = e.shouldForwardProp;
  if (o4 && r3.shouldForwardProp) {
    var A10 = r3.shouldForwardProp;
    if (e.shouldForwardProp) {
      var T6 = e.shouldForwardProp;
      v8 = function(S7, b10) {
        return A10(S7, b10) && T6(S7, b10);
      };
    } else v8 = A10;
  }
  var P6 = new Wt(n2, p6, o4 ? r3.componentStyle : void 0);
  function G7(S7, b10) {
    return function(y7, N5, R4) {
      var L2 = y7.attrs, rt3 = y7.componentStyle, st2 = y7.defaultProps, it2 = y7.foldedComponentIds, at3 = y7.styledComponentId, ct3 = y7.target, ut3 = Qe.useContext(V5), lt = ae4(), ue4 = y7.shouldForwardProp || lt.shouldForwardProp, Ie3 = Ee3(N5, ut3, st2) || z5, _5 = function(X5, W4, Z5) {
        for (var q10, k9 = m4(m4({}, W4), {
          className: void 0,
          theme: Z5
        }), pe3 = 0; pe3 < X5.length; pe3 += 1) {
          var K6 = j7(q10 = X5[pe3]) ? q10(k9) : q10;
          for (var O5 in K6) k9[O5] = O5 === "className" ? x7(k9[O5], K6[O5]) : O5 === "style" ? m4(m4({}, k9[O5]), K6[O5]) : K6[O5];
        }
        return W4.className && (k9.className = x7(k9.className, W4.className)), k9;
      }(L2, N5, Ie3), J4 = _5.as || ct3, Y5 = {};
      for (var I5 in _5) _5[I5] === void 0 || I5[0] === "$" || I5 === "as" || I5 === "theme" && _5.theme === Ie3 || (I5 === "forwardedAs" ? Y5.as = _5.forwardedAs : ue4 && !ue4(I5, J4) || (Y5[I5] = _5[I5]));
      var Oe4 = function(X5, W4) {
        var Z5 = ae4(), q10 = X5.generateAndInjectStyles(W4, Z5.styleSheet, Z5.stylis);
        return q10;
      }(rt3, _5), le3 = x7(it2, at3);
      return Oe4 && (le3 += " " + Oe4), _5.className && (le3 += " " + _5.className), Y5[he3(J4) && !Ge5.has(J4) ? "class" : "className"] = le3, R4 && (Y5.ref = R4), Ce(J4, Y5);
    }(g7, S7, b10);
  }
  G7.displayName = h4;
  var g7 = Qe.forwardRef(G7);
  return g7.attrs = d4, g7.componentStyle = P6, g7.displayName = h4, g7.shouldForwardProp = v8, g7.foldedComponentIds = o4 ? x7(r3.foldedComponentIds, r3.styledComponentId) : "", g7.styledComponentId = p6, g7.target = o4 ? r3.target : t, Object.defineProperty(g7, "defaultProps", {
    get: function() {
      return this._foldedDefaultProps;
    },
    set: function(S7) {
      this._foldedDefaultProps = o4 ? function(b10) {
        for (var y7 = [], N5 = 1; N5 < arguments.length; N5++) y7[N5 - 1] = arguments[N5];
        for (var R4 = 0, L2 = y7; R4 < L2.length; R4++) ye4(b10, L2[R4], true);
        return b10;
      }({}, r3.defaultProps, S7) : S7;
    }
  }), _e4(g7, function() {
    return ".".concat(g7.styledComponentId);
  }), s2 && Ne3(g7, t, {
    attrs: true,
    componentStyle: true,
    displayName: true,
    foldedComponentIds: true,
    shouldForwardProp: true,
    styledComponentId: true,
    target: true
  }), g7;
}
function Fe3(t, e) {
  for (var n2 = [
    t[0]
  ], o4 = 0, r3 = e.length; o4 < r3; o4 += 1) n2.push(e[o4], t[o4 + 1]);
  return n2;
}
var Be3 = function(t) {
  return Object.assign(t, {
    isCss: true
  });
};
function Ae3(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  if (j7(t) || U3(t)) return Be3(D6(Fe3(ce4, M5([
    t
  ], e, true))));
  var o4 = t;
  return e.length === 0 && o4.length === 1 && typeof o4[0] == "string" ? D6(o4) : Be3(D6(Fe3(o4, e)));
}
function Se4(t, e, n2) {
  if (n2 === void 0 && (n2 = z5), !e) throw E8(1, e);
  var o4 = function(r3) {
    for (var s2 = [], i3 = 1; i3 < arguments.length; i3++) s2[i3 - 1] = arguments[i3];
    return t(e, n2, Ae3.apply(void 0, M5([
      r3
    ], s2, false)));
  };
  return o4.attrs = function(r3) {
    return Se4(t, e, m4(m4({}, n2), {
      attrs: Array.prototype.concat(n2.attrs, r3).filter(Boolean)
    }));
  }, o4.withConfig = function(r3) {
    return Se4(t, e, m4(m4({}, n2), r3));
  }, o4;
}
var ot2 = function(t) {
  return Se4(qt2, t);
};
var Ht2 = ot2;
Ge5.forEach(function(t) {
  Ht2[t] = ot2(t);
});
var Ut = function() {
  function t(e, n2) {
    this.rules = e, this.componentId = n2, this.isStatic = nt3(e), $4.registerId(this.componentId + 1);
  }
  return t.prototype.createStyles = function(e, n2, o4, r3) {
    var s2 = r3(H6(D6(this.rules, n2, o4, r3)), ""), i3 = this.componentId + e;
    o4.insertRules(i3, i3, s2);
  }, t.prototype.removeStyles = function(e, n2) {
    n2.clearRules(this.componentId + e);
  }, t.prototype.renderStyles = function(e, n2, o4, r3) {
    e > 2 && $4.registerId(this.componentId + e), this.removeStyles(e, o4), this.createStyles(e, n2, o4, r3);
  }, t;
}();
function un(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  var o4 = Ae3.apply(void 0, M5([
    t
  ], e, false)), r3 = "sc-global-".concat(be6(JSON.stringify(o4))), s2 = new Ut(o4, r3), i3 = function(a4) {
    var c3 = ae4(), l6 = Qe.useContext(V5), h4 = Qe.useRef(c3.styleSheet.allocateGSInstance(r3)).current;
    return c3.styleSheet.server && u6(h4, a4, c3.styleSheet, l6, c3.stylis), Qe.useLayoutEffect(function() {
      if (!c3.styleSheet.server) return u6(h4, a4, c3.styleSheet, l6, c3.stylis), function() {
        return s2.removeStyles(h4, c3.styleSheet);
      };
    }, [
      h4,
      a4,
      c3.styleSheet,
      l6,
      c3.stylis
    ]), null;
  };
  function u6(a4, c3, l6, h4, p6) {
    if (s2.isStatic) s2.renderStyles(a4, vt, l6, p6);
    else {
      var d4 = m4(m4({}, c3), {
        theme: Ee3(c3, h4, i3.defaultProps)
      });
      s2.renderStyles(a4, d4, l6, p6);
    }
  }
  return Qe.memo(i3);
}
function ln3(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  var o4 = H6(Ae3.apply(void 0, M5([
    t
  ], e, false))), r3 = be6(o4);
  return new Qe3(r3, o4);
}
var dn = function() {
  function t() {
    var e = this;
    this._emitSheetCSS = function() {
      var n2 = e.instance.toString();
      if (!n2) return "";
      var o4 = ve5(), r3 = H6([
        o4 && 'nonce="'.concat(o4, '"'),
        "".concat(C5, '="true"'),
        "".concat(re4, '="').concat(B4, '"')
      ].filter(Boolean), " ");
      return "<style ".concat(r3, ">").concat(n2, "</style>");
    }, this.getStyleTags = function() {
      if (e.sealed) throw E8(2);
      return e._emitSheetCSS();
    }, this.getStyleElement = function() {
      var n2;
      if (e.sealed) throw E8(2);
      var o4 = e.instance.toString();
      if (!o4) return [];
      var r3 = ((n2 = {})[C5] = "", n2[re4] = B4, n2.dangerouslySetInnerHTML = {
        __html: o4
      }, n2), s2 = ve5();
      return s2 && (r3.nonce = s2), [
        Qe.createElement("style", m4({}, r3, {
          key: "sc-0-0"
        }))
      ];
    }, this.seal = function() {
      e.sealed = true;
    }, this.instance = new $4({
      isServer: true
    }), this.sealed = false;
  }
  return t.prototype.collectStyles = function(e) {
    if (this.sealed) throw E8(2);
    return Qe.createElement(Gt2, {
      sheet: this.instance
    }, e);
  }, t.prototype.interleaveWithNodeStream = function(e) {
    throw E8(3);
  }, t;
}();
var fn = "__sc-".concat(C5, "__");

// deno:https://esm.sh/dayjs@1.11.13/denonext/dayjs.mjs
var X4 = Object.create;
var E9 = Object.defineProperty;
var tt2 = Object.getOwnPropertyDescriptor;
var et3 = Object.getOwnPropertyNames;
var nt4 = Object.getPrototypeOf;
var rt2 = Object.prototype.hasOwnProperty;
var it = (h4, c3) => () => (c3 || h4((c3 = {
  exports: {}
}).exports, c3), c3.exports);
var st = (h4, c3, g7, _5) => {
  if (c3 && typeof c3 == "object" || typeof c3 == "function") for (let M8 of et3(c3)) !rt2.call(h4, M8) && M8 !== g7 && E9(h4, M8, {
    get: () => c3[M8],
    enumerable: !(_5 = tt2(c3, M8)) || _5.enumerable
  });
  return h4;
};
var ut2 = (h4, c3, g7) => (g7 = h4 != null ? X4(nt4(h4)) : {}, st(c3 || !h4 || !h4.__esModule ? E9(g7, "default", {
  value: h4,
  enumerable: true
}) : g7, h4));
var P4 = it((F6, J4) => {
  (function(h4, c3) {
    typeof F6 == "object" && typeof J4 < "u" ? J4.exports = c3() : typeof define == "function" && define.amd ? define(c3) : (h4 = typeof globalThis < "u" ? globalThis : h4 || self).dayjs = c3();
  })(F6, function() {
    "use strict";
    var h4 = 1e3, c3 = 6e4, g7 = 36e5, _5 = "millisecond", M8 = "second", k9 = "minute", T6 = "hour", D8 = "day", W4 = "week", v8 = "month", z7 = "quarter", p6 = "year", Y5 = "date", V6 = "Invalid Date", Q4 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, G7 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K6 = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function(i3) {
        var n2 = [
          "th",
          "st",
          "nd",
          "rd"
        ], t = i3 % 100;
        return "[" + i3 + (n2[(t - 20) % 10] || n2[t] || n2[0]) + "]";
      }
    }, N5 = function(i3, n2, t) {
      var r3 = String(i3);
      return !r3 || r3.length >= n2 ? i3 : "" + Array(n2 + 1 - r3.length).join(t) + i3;
    }, R4 = {
      s: N5,
      z: function(i3) {
        var n2 = -i3.utcOffset(), t = Math.abs(n2), r3 = Math.floor(t / 60), e = t % 60;
        return (n2 <= 0 ? "+" : "-") + N5(r3, 2, "0") + ":" + N5(e, 2, "0");
      },
      m: function i3(n2, t) {
        if (n2.date() < t.date()) return -i3(t, n2);
        var r3 = 12 * (t.year() - n2.year()) + (t.month() - n2.month()), e = n2.clone().add(r3, v8), s2 = t - e < 0, u6 = n2.clone().add(r3 + (s2 ? -1 : 1), v8);
        return +(-(r3 + (t - e) / (s2 ? e - u6 : u6 - e)) || 0);
      },
      a: function(i3) {
        return i3 < 0 ? Math.ceil(i3) || 0 : Math.floor(i3);
      },
      p: function(i3) {
        return {
          M: v8,
          y: p6,
          w: W4,
          d: D8,
          D: Y5,
          h: T6,
          m: k9,
          s: M8,
          ms: _5,
          Q: z7
        }[i3] || String(i3 || "").toLowerCase().replace(/s$/, "");
      },
      u: function(i3) {
        return i3 === void 0;
      }
    }, j10 = "en", w6 = {};
    w6[j10] = K6;
    var q10 = "$isDayjsObject", U4 = function(i3) {
      return i3 instanceof A10 || !(!i3 || !i3[q10]);
    }, C8 = function i3(n2, t, r3) {
      var e;
      if (!n2) return j10;
      if (typeof n2 == "string") {
        var s2 = n2.toLowerCase();
        w6[s2] && (e = s2), t && (w6[s2] = t, e = s2);
        var u6 = n2.split("-");
        if (!e && u6.length > 1) return i3(u6[0]);
      } else {
        var o4 = n2.name;
        w6[o4] = n2, e = o4;
      }
      return !r3 && e && (j10 = e), e || !r3 && j10;
    }, d4 = function(i3, n2) {
      if (U4(i3)) return i3.clone();
      var t = typeof n2 == "object" ? n2 : {};
      return t.date = i3, t.args = arguments, new A10(t);
    }, a4 = R4;
    a4.l = C8, a4.i = U4, a4.w = function(i3, n2) {
      return d4(i3, {
        locale: n2.$L,
        utc: n2.$u,
        x: n2.$x,
        $offset: n2.$offset
      });
    };
    var A10 = function() {
      function i3(t) {
        this.$L = C8(t.locale, null, true), this.parse(t), this.$x = this.$x || t.x || {}, this[q10] = true;
      }
      var n2 = i3.prototype;
      return n2.parse = function(t) {
        this.$d = function(r3) {
          var e = r3.date, s2 = r3.utc;
          if (e === null) return /* @__PURE__ */ new Date(NaN);
          if (a4.u(e)) return /* @__PURE__ */ new Date();
          if (e instanceof Date) return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var u6 = e.match(Q4);
            if (u6) {
              var o4 = u6[2] - 1 || 0, f4 = (u6[7] || "0").substring(0, 3);
              return s2 ? new Date(Date.UTC(u6[1], o4, u6[3] || 1, u6[4] || 0, u6[5] || 0, u6[6] || 0, f4)) : new Date(u6[1], o4, u6[3] || 1, u6[4] || 0, u6[5] || 0, u6[6] || 0, f4);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, n2.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n2.$utils = function() {
        return a4;
      }, n2.isValid = function() {
        return this.$d.toString() !== V6;
      }, n2.isSame = function(t, r3) {
        var e = d4(t);
        return this.startOf(r3) <= e && e <= this.endOf(r3);
      }, n2.isAfter = function(t, r3) {
        return d4(t) < this.startOf(r3);
      }, n2.isBefore = function(t, r3) {
        return this.endOf(r3) < d4(t);
      }, n2.$g = function(t, r3, e) {
        return a4.u(t) ? this[r3] : this.set(e, t);
      }, n2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n2.valueOf = function() {
        return this.$d.getTime();
      }, n2.startOf = function(t, r3) {
        var e = this, s2 = !!a4.u(r3) || r3, u6 = a4.p(t), o4 = function(b10, m6) {
          var S7 = a4.w(e.$u ? Date.UTC(e.$y, m6, b10) : new Date(e.$y, m6, b10), e);
          return s2 ? S7 : S7.endOf(D8);
        }, f4 = function(b10, m6) {
          return a4.w(e.toDate()[b10].apply(e.toDate("s"), (s2 ? [
            0,
            0,
            0,
            0
          ] : [
            23,
            59,
            59,
            999
          ]).slice(m6)), e);
        }, $5 = this.$W, l6 = this.$M, y7 = this.$D, H9 = "set" + (this.$u ? "UTC" : "");
        switch (u6) {
          case p6:
            return s2 ? o4(1, 0) : o4(31, 11);
          case v8:
            return s2 ? o4(1, l6) : o4(0, l6 + 1);
          case W4:
            var O5 = this.$locale().weekStart || 0, x9 = ($5 < O5 ? $5 + 7 : $5) - O5;
            return o4(s2 ? y7 - x9 : y7 + (6 - x9), l6);
          case D8:
          case Y5:
            return f4(H9 + "Hours", 0);
          case T6:
            return f4(H9 + "Minutes", 1);
          case k9:
            return f4(H9 + "Seconds", 2);
          case M8:
            return f4(H9 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n2.endOf = function(t) {
        return this.startOf(t, false);
      }, n2.$set = function(t, r3) {
        var e, s2 = a4.p(t), u6 = "set" + (this.$u ? "UTC" : ""), o4 = (e = {}, e[D8] = u6 + "Date", e[Y5] = u6 + "Date", e[v8] = u6 + "Month", e[p6] = u6 + "FullYear", e[T6] = u6 + "Hours", e[k9] = u6 + "Minutes", e[M8] = u6 + "Seconds", e[_5] = u6 + "Milliseconds", e)[s2], f4 = s2 === D8 ? this.$D + (r3 - this.$W) : r3;
        if (s2 === v8 || s2 === p6) {
          var $5 = this.clone().set(Y5, 1);
          $5.$d[o4](f4), $5.init(), this.$d = $5.set(Y5, Math.min(this.$D, $5.daysInMonth())).$d;
        } else o4 && this.$d[o4](f4);
        return this.init(), this;
      }, n2.set = function(t, r3) {
        return this.clone().$set(t, r3);
      }, n2.get = function(t) {
        return this[a4.p(t)]();
      }, n2.add = function(t, r3) {
        var e, s2 = this;
        t = Number(t);
        var u6 = a4.p(r3), o4 = function(l6) {
          var y7 = d4(s2);
          return a4.w(y7.date(y7.date() + Math.round(l6 * t)), s2);
        };
        if (u6 === v8) return this.set(v8, this.$M + t);
        if (u6 === p6) return this.set(p6, this.$y + t);
        if (u6 === D8) return o4(1);
        if (u6 === W4) return o4(7);
        var f4 = (e = {}, e[k9] = c3, e[T6] = g7, e[M8] = h4, e)[u6] || 1, $5 = this.$d.getTime() + t * f4;
        return a4.w($5, this);
      }, n2.subtract = function(t, r3) {
        return this.add(-1 * t, r3);
      }, n2.format = function(t) {
        var r3 = this, e = this.$locale();
        if (!this.isValid()) return e.invalidDate || V6;
        var s2 = t || "YYYY-MM-DDTHH:mm:ssZ", u6 = a4.z(this), o4 = this.$H, f4 = this.$m, $5 = this.$M, l6 = e.weekdays, y7 = e.months, H9 = e.meridiem, O5 = function(m6, S7, L2, I5) {
          return m6 && (m6[S7] || m6(r3, s2)) || L2[S7].slice(0, I5);
        }, x9 = function(m6) {
          return a4.s(o4 % 12 || 12, m6, "0");
        }, b10 = H9 || function(m6, S7, L2) {
          var I5 = m6 < 12 ? "AM" : "PM";
          return L2 ? I5.toLowerCase() : I5;
        };
        return s2.replace(G7, function(m6, S7) {
          return S7 || function(L2) {
            switch (L2) {
              case "YY":
                return String(r3.$y).slice(-2);
              case "YYYY":
                return a4.s(r3.$y, 4, "0");
              case "M":
                return $5 + 1;
              case "MM":
                return a4.s($5 + 1, 2, "0");
              case "MMM":
                return O5(e.monthsShort, $5, y7, 3);
              case "MMMM":
                return O5(y7, $5);
              case "D":
                return r3.$D;
              case "DD":
                return a4.s(r3.$D, 2, "0");
              case "d":
                return String(r3.$W);
              case "dd":
                return O5(e.weekdaysMin, r3.$W, l6, 2);
              case "ddd":
                return O5(e.weekdaysShort, r3.$W, l6, 3);
              case "dddd":
                return l6[r3.$W];
              case "H":
                return String(o4);
              case "HH":
                return a4.s(o4, 2, "0");
              case "h":
                return x9(1);
              case "hh":
                return x9(2);
              case "a":
                return b10(o4, f4, true);
              case "A":
                return b10(o4, f4, false);
              case "m":
                return String(f4);
              case "mm":
                return a4.s(f4, 2, "0");
              case "s":
                return String(r3.$s);
              case "ss":
                return a4.s(r3.$s, 2, "0");
              case "SSS":
                return a4.s(r3.$ms, 3, "0");
              case "Z":
                return u6;
            }
            return null;
          }(m6) || u6.replace(":", "");
        });
      }, n2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n2.diff = function(t, r3, e) {
        var s2, u6 = this, o4 = a4.p(r3), f4 = d4(t), $5 = (f4.utcOffset() - this.utcOffset()) * c3, l6 = this - f4, y7 = function() {
          return a4.m(u6, f4);
        };
        switch (o4) {
          case p6:
            s2 = y7() / 12;
            break;
          case v8:
            s2 = y7();
            break;
          case z7:
            s2 = y7() / 3;
            break;
          case W4:
            s2 = (l6 - $5) / 6048e5;
            break;
          case D8:
            s2 = (l6 - $5) / 864e5;
            break;
          case T6:
            s2 = l6 / g7;
            break;
          case k9:
            s2 = l6 / c3;
            break;
          case M8:
            s2 = l6 / h4;
            break;
          default:
            s2 = l6;
        }
        return e ? s2 : a4.a(s2);
      }, n2.daysInMonth = function() {
        return this.endOf(v8).$D;
      }, n2.$locale = function() {
        return w6[this.$L];
      }, n2.locale = function(t, r3) {
        if (!t) return this.$L;
        var e = this.clone(), s2 = C8(t, r3, true);
        return s2 && (e.$L = s2), e;
      }, n2.clone = function() {
        return a4.w(this.$d, this);
      }, n2.toDate = function() {
        return new Date(this.valueOf());
      }, n2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n2.toISOString = function() {
        return this.$d.toISOString();
      }, n2.toString = function() {
        return this.$d.toUTCString();
      }, i3;
    }(), B6 = A10.prototype;
    return d4.prototype = B6, [
      [
        "$ms",
        _5
      ],
      [
        "$s",
        M8
      ],
      [
        "$m",
        k9
      ],
      [
        "$H",
        T6
      ],
      [
        "$W",
        D8
      ],
      [
        "$M",
        v8
      ],
      [
        "$y",
        p6
      ],
      [
        "$D",
        Y5
      ]
    ].forEach(function(i3) {
      B6[i3[1]] = function(n2) {
        return this.$g(n2, i3[0], i3[1]);
      };
    }), d4.extend = function(i3, n2) {
      return i3.$i || (i3(n2, A10, d4), i3.$i = true), d4;
    }, d4.locale = C8, d4.isDayjs = U4, d4.unix = function(i3) {
      return d4(1e3 * i3);
    }, d4.en = w6[j10], d4.Ls = w6, d4.p = {}, d4;
  });
});
var Z4 = ut2(P4());
var ot3 = Z4.default ?? Z4;

// deno:https://esm.sh/dayjs@1.11.13/denonext/plugin/relativeTime.mjs
var k8 = Object.create;
var N4 = Object.defineProperty;
var x8 = Object.getOwnPropertyDescriptor;
var q9 = Object.getOwnPropertyNames;
var z6 = Object.getPrototypeOf;
var A6 = Object.prototype.hasOwnProperty;
var C6 = (r3, t) => () => (t || r3((t = {
  exports: {}
}).exports, t), t.exports);
var D7 = (r3, t, n2, o4) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i3 of q9(t)) !A6.call(r3, i3) && i3 !== n2 && N4(r3, i3, {
    get: () => t[i3],
    enumerable: !(o4 = x8(t, i3)) || o4.enumerable
  });
  return r3;
};
var E10 = (r3, t, n2) => (n2 = r3 != null ? k8(z6(r3)) : {}, D7(t || !r3 || !r3.__esModule ? N4(n2, "default", {
  value: r3,
  enumerable: true
}) : n2, r3));
var _4 = C6((g7, T6) => {
  (function(r3, t) {
    typeof g7 == "object" && typeof T6 < "u" ? T6.exports = t() : typeof define == "function" && define.amd ? define(t) : (r3 = typeof globalThis < "u" ? globalThis : r3 || self).dayjs_plugin_relativeTime = t();
  })(g7, function() {
    "use strict";
    return function(r3, t, n2) {
      r3 = r3 || {};
      var o4 = t.prototype, i3 = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function j10(e, d4, a4, m6) {
        return o4.fromToBase(e, d4, a4, m6);
      }
      n2.en.relativeTime = i3, o4.fromToBase = function(e, d4, a4, m6, B6) {
        for (var h4, l6, c3, y7 = a4.$locale().relativeTime || i3, p6 = r3.thresholds || [
          {
            l: "s",
            r: 44,
            d: "second"
          },
          {
            l: "m",
            r: 89
          },
          {
            l: "mm",
            r: 44,
            d: "minute"
          },
          {
            l: "h",
            r: 89
          },
          {
            l: "hh",
            r: 21,
            d: "hour"
          },
          {
            l: "d",
            r: 35
          },
          {
            l: "dd",
            r: 25,
            d: "day"
          },
          {
            l: "M",
            r: 45
          },
          {
            l: "MM",
            r: 10,
            d: "month"
          },
          {
            l: "y",
            r: 17
          },
          {
            l: "yy",
            d: "year"
          }
        ], $5 = p6.length, s2 = 0; s2 < $5; s2 += 1) {
          var f4 = p6[s2];
          f4.d && (h4 = m6 ? n2(e).diff(a4, f4.d, true) : a4.diff(e, f4.d, true));
          var u6 = (r3.rounding || Math.round)(Math.abs(h4));
          if (c3 = h4 > 0, u6 <= f4.r || !f4.r) {
            u6 <= 1 && s2 > 0 && (f4 = p6[s2 - 1]);
            var M8 = y7[f4.l];
            B6 && (u6 = B6("" + u6)), l6 = typeof M8 == "string" ? M8.replace("%d", u6) : M8(u6, d4, f4.l, c3);
            break;
          }
        }
        if (d4) return l6;
        var v8 = c3 ? y7.future : y7.past;
        return typeof v8 == "function" ? v8(l6) : v8.replace("%s", l6);
      }, o4.to = function(e, d4) {
        return j10(e, d4, this, true);
      }, o4.from = function(e, d4) {
        return j10(e, d4, this);
      };
      var w6 = function(e) {
        return e.$u ? n2.utc() : n2();
      };
      o4.toNow = function(e) {
        return this.to(w6(this), e);
      }, o4.fromNow = function(e) {
        return this.from(w6(this), e);
      };
    };
  });
});
var b7 = E10(_4());
var G6 = b7.default ?? b7;

// deno:https://esm.sh/dayjs@1.11.13/denonext/plugin/isBetween.mjs
var B5 = Object.create;
var l4 = Object.defineProperty;
var m5 = Object.getOwnPropertyDescriptor;
var j8 = Object.getOwnPropertyNames;
var A7 = Object.getPrototypeOf;
var b8 = Object.prototype.hasOwnProperty;
var g5 = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);
var w5 = (t, e, i3, o4) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n2 of j8(e)) !b8.call(t, n2) && n2 !== i3 && l4(t, n2, {
    get: () => e[n2],
    enumerable: !(o4 = m5(e, n2)) || o4.enumerable
  });
  return t;
};
var T4 = (t, e, i3) => (i3 = t != null ? B5(A7(t)) : {}, w5(e || !t || !t.__esModule ? l4(i3, "default", {
  value: t,
  enumerable: true
}) : i3, t));
var y5 = g5((d4, h4) => {
  (function(t, e) {
    typeof d4 == "object" && typeof h4 < "u" ? h4.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_isBetween = e();
  })(d4, function() {
    "use strict";
    return function(t, e, i3) {
      e.prototype.isBetween = function(o4, n2, f4, u6) {
        var s2 = i3(o4), r3 = i3(n2), p6 = (u6 = u6 || "()")[0] === "(", a4 = u6[1] === ")";
        return (p6 ? this.isAfter(s2, f4) : !this.isBefore(s2, f4)) && (a4 ? this.isBefore(r3, f4) : !this.isAfter(r3, f4)) || (p6 ? this.isBefore(s2, f4) : !this.isAfter(s2, f4)) && (a4 ? this.isAfter(r3, f4) : !this.isBefore(r3, f4));
      };
    };
  });
});
var c2 = T4(y5());
var v7 = c2.default ?? c2;

// deno:https://esm.sh/dayjs@1.11.13/denonext/plugin/localizedFormat.mjs
var y6 = Object.create;
var Y4 = Object.defineProperty;
var T5 = Object.getOwnPropertyDescriptor;
var g6 = Object.getOwnPropertyNames;
var j9 = Object.getPrototypeOf;
var A8 = Object.prototype.hasOwnProperty;
var b9 = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
var H7 = (e, t, o4, i3) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n2 of g6(t)) !A8.call(e, n2) && n2 !== o4 && Y4(e, n2, {
    get: () => t[n2],
    enumerable: !(i3 = T5(t, n2)) || i3.enumerable
  });
  return e;
};
var S6 = (e, t, o4) => (o4 = e != null ? y6(j9(e)) : {}, H7(t || !e || !e.__esModule ? Y4(o4, "default", {
  value: e,
  enumerable: true
}) : o4, e));
var u5 = b9((a4, d4) => {
  (function(e, t) {
    typeof a4 == "object" && typeof d4 < "u" ? d4.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs_plugin_localizedFormat = t();
  })(a4, function() {
    "use strict";
    var e = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    return function(t, o4, i3) {
      var n2 = o4.prototype, c3 = n2.format;
      i3.en.formats = e, n2.format = function(r3) {
        r3 === void 0 && (r3 = "YYYY-MM-DDTHH:mm:ssZ");
        var m6 = this.$locale().formats, l6 = function(L2, s2) {
          return L2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_5, p6, f4) {
            var h4 = f4 && f4.toUpperCase();
            return p6 || s2[f4] || e[f4] || s2[h4].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x9, D8, v8) {
              return D8 || v8.slice(1);
            });
          });
        }(r3, m6 === void 0 ? {} : m6);
        return c3.call(this, l6);
      };
    };
  });
});
var M7 = S6(u5());
var C7 = M7.default ?? M7;

// src/dayjs.ts
ot3.extend(G6);
ot3.extend(v7);
ot3.extend(C7);

// src/global.tsx
var Color = {
  Bg: "#0a1929",
  BgSecondary: "#192533",
  Text: "white",
  Accent: "#ffab00"
};
var GlobalStyle = un`
  * {
    font-family:
      -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
      Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-optical-sizing: auto;
  }

  *::selection {
    background-color: ${Color.Accent};
  }

  body {
    background-color: ${Color.Bg};
    color: ${Color.Text};
    padding: 0;
    margin: 0;
  }
`;
var linkCss = Ae3`
  display: inline-block;
  color: ${Color.Accent};
  font-style: normal;
  text-decoration: none;
  cursor: pointer;
`;
var theme = {};

// src/hooks.ts
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = Ge(() => {
    try {
      const item = globalThis.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      setStoredValue(value);
      globalThis.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  return [
    storedValue,
    setValue
  ];
}

// deno:https://jsr.io/@nashaddams/tmdb/0.1.0/src/v3/mod.ts
var TmdbApi = class {
  #base_url = "https://api.themoviedb.org";
  #api_key;
  constructor(api_key) {
    this.#api_key = api_key;
  }
  /**
   * Search for movies by their original, translated and alternative titles.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; primary_release_year?: string; page?: number; region?: string; year?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-movie
   */
  async searchMovie(opts) {
    let queryParams = "";
    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["primary_release_year"]) {
      queryParams += `&primary_release_year=${opts["primary_release_year"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    if (opts["year"]) {
      queryParams += `&year=${opts["year"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/search/movie?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Find movies using over 30 filters and sort options.
   *
   * @param {{ certification?: string; "certification.gte"?: string; "certification.lte"?: string; certification_country?: string; include_adult?: boolean; include_video?: boolean; language?: string; page?: number; primary_release_year?: number; "primary_release_date.gte"?: string; "primary_release_date.lte"?: string; region?: string; "release_date.gte"?: string; "release_date.lte"?: string; sort_by?: "original_title.asc" | "original_title.desc" | "popularity.asc" | "popularity.desc" | "revenue.asc" | "revenue.desc" | "primary_release_date.asc" | "title.asc" | "title.desc" | "primary_release_date.desc" | "vote_average.asc" | "vote_average.desc" | "vote_count.asc" | "vote_count.desc"; "vote_average.gte"?: number; "vote_average.lte"?: number; "vote_count.gte"?: number; "vote_count.lte"?: number; watch_region?: string; with_cast?: string; with_companies?: string; with_crew?: string; with_genres?: string; with_keywords?: string; with_origin_country?: string; with_original_language?: string; with_people?: string; with_release_type?: number; "with_runtime.gte"?: number; "with_runtime.lte"?: number; with_watch_monetization_types?: string; with_watch_providers?: string; without_companies?: string; without_genres?: string; without_keywords?: string; without_watch_providers?: string; year?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/discover-movie
   */
  async discoverMovie(opts) {
    let queryParams = "";
    if (opts?.["certification"]) {
      queryParams += `&certification=${opts["certification"]}`;
    }
    if (opts?.["certification.gte"]) {
      queryParams += `&certification.gte=${opts["certification.gte"]}`;
    }
    if (opts?.["certification.lte"]) {
      queryParams += `&certification.lte=${opts["certification.lte"]}`;
    }
    if (opts?.["certification_country"]) {
      queryParams += `&certification_country=${opts["certification_country"]}`;
    }
    if (opts?.["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts?.["include_video"]) {
      queryParams += `&include_video=${opts["include_video"]}`;
    }
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["primary_release_year"]) {
      queryParams += `&primary_release_year=${opts["primary_release_year"]}`;
    }
    if (opts?.["primary_release_date.gte"]) {
      queryParams += `&primary_release_date.gte=${opts["primary_release_date.gte"]}`;
    }
    if (opts?.["primary_release_date.lte"]) {
      queryParams += `&primary_release_date.lte=${opts["primary_release_date.lte"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    if (opts?.["release_date.gte"]) {
      queryParams += `&release_date.gte=${opts["release_date.gte"]}`;
    }
    if (opts?.["release_date.lte"]) {
      queryParams += `&release_date.lte=${opts["release_date.lte"]}`;
    }
    if (opts?.["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    if (opts?.["vote_average.gte"]) {
      queryParams += `&vote_average.gte=${opts["vote_average.gte"]}`;
    }
    if (opts?.["vote_average.lte"]) {
      queryParams += `&vote_average.lte=${opts["vote_average.lte"]}`;
    }
    if (opts?.["vote_count.gte"]) {
      queryParams += `&vote_count.gte=${opts["vote_count.gte"]}`;
    }
    if (opts?.["vote_count.lte"]) {
      queryParams += `&vote_count.lte=${opts["vote_count.lte"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }
    if (opts?.["with_cast"]) {
      queryParams += `&with_cast=${opts["with_cast"]}`;
    }
    if (opts?.["with_companies"]) {
      queryParams += `&with_companies=${opts["with_companies"]}`;
    }
    if (opts?.["with_crew"]) {
      queryParams += `&with_crew=${opts["with_crew"]}`;
    }
    if (opts?.["with_genres"]) {
      queryParams += `&with_genres=${opts["with_genres"]}`;
    }
    if (opts?.["with_keywords"]) {
      queryParams += `&with_keywords=${opts["with_keywords"]}`;
    }
    if (opts?.["with_origin_country"]) {
      queryParams += `&with_origin_country=${opts["with_origin_country"]}`;
    }
    if (opts?.["with_original_language"]) {
      queryParams += `&with_original_language=${opts["with_original_language"]}`;
    }
    if (opts?.["with_people"]) {
      queryParams += `&with_people=${opts["with_people"]}`;
    }
    if (opts?.["with_release_type"]) {
      queryParams += `&with_release_type=${opts["with_release_type"]}`;
    }
    if (opts?.["with_runtime.gte"]) {
      queryParams += `&with_runtime.gte=${opts["with_runtime.gte"]}`;
    }
    if (opts?.["with_runtime.lte"]) {
      queryParams += `&with_runtime.lte=${opts["with_runtime.lte"]}`;
    }
    if (opts?.["with_watch_monetization_types"]) {
      queryParams += `&with_watch_monetization_types=${opts["with_watch_monetization_types"]}`;
    }
    if (opts?.["with_watch_providers"]) {
      queryParams += `&with_watch_providers=${opts["with_watch_providers"]}`;
    }
    if (opts?.["without_companies"]) {
      queryParams += `&without_companies=${opts["without_companies"]}`;
    }
    if (opts?.["without_genres"]) {
      queryParams += `&without_genres=${opts["without_genres"]}`;
    }
    if (opts?.["without_keywords"]) {
      queryParams += `&without_keywords=${opts["without_keywords"]}`;
    }
    if (opts?.["without_watch_providers"]) {
      queryParams += `&without_watch_providers=${opts["without_watch_providers"]}`;
    }
    if (opts?.["year"]) {
      queryParams += `&year=${opts["year"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/discover/movie?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the top level details of a movie by ID.
   *
   * @param {{ movie_id: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-details
   */
  async movieDetails(opts) {
    let queryParams = "";
    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the details of a TV show.
   *
   * @param {{ series_id: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-details
   */
  async tvSeriesDetails(opts) {
    let queryParams = "";
    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Search for TV shows by their original, translated and also known as names.
   *
   * @param {{ query: string; first_air_date_year?: number; include_adult?: boolean; language?: string; page?: number; year?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-tv
   */
  async searchTv(opts) {
    let queryParams = "";
    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["first_air_date_year"]) {
      queryParams += `&first_air_date_year=${opts["first_air_date_year"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["year"]) {
      queryParams += `&year=${opts["year"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/search/tv?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Use multi search when you want to search for movies, TV shows and people in a single request.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-multi
   */
  async searchMulti(opts) {
    let queryParams = "";
    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/search/multi?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Search for people by their name and also known as names.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-person
   */
  async searchPerson(opts) {
    let queryParams = "";
    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/search/person?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Query the API configuration details.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-details
   */
  async configurationDetails() {
    return await (await fetch(`${this.#base_url}/3/configuration?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Query the details of a TV season.
   *
   * @param {{ series_id: number; season_number: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-details
   */
  async tvSeasonDetails(opts) {
    let queryParams = "";
    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Query the details of a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-details
   */
  async tvEpisodeDetails(opts) {
    let queryParams = "";
    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Find TV shows using over 30 filters and sort options.
   *
   * @param {{ "air_date.gte"?: string; "air_date.lte"?: string; first_air_date_year?: number; "first_air_date.gte"?: string; "first_air_date.lte"?: string; include_adult?: boolean; include_null_first_air_dates?: boolean; language?: string; page?: number; screened_theatrically?: boolean; sort_by?: "first_air_date.asc" | "first_air_date.desc" | "name.asc" | "name.desc" | "original_name.asc" | "original_name.desc" | "popularity.asc" | "popularity.desc" | "vote_average.asc" | "vote_average.desc" | "vote_count.asc" | "vote_count.desc"; timezone?: string; "vote_average.gte"?: number; "vote_average.lte"?: number; "vote_count.gte"?: number; "vote_count.lte"?: number; watch_region?: string; with_companies?: string; with_genres?: string; with_keywords?: string; with_networks?: number; with_origin_country?: string; with_original_language?: string; "with_runtime.gte"?: number; "with_runtime.lte"?: number; with_status?: string; with_watch_monetization_types?: string; with_watch_providers?: string; without_companies?: string; without_genres?: string; without_keywords?: string; without_watch_providers?: string; with_type?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/discover-tv
   */
  async discoverTv(opts) {
    let queryParams = "";
    if (opts?.["air_date.gte"]) {
      queryParams += `&air_date.gte=${opts["air_date.gte"]}`;
    }
    if (opts?.["air_date.lte"]) {
      queryParams += `&air_date.lte=${opts["air_date.lte"]}`;
    }
    if (opts?.["first_air_date_year"]) {
      queryParams += `&first_air_date_year=${opts["first_air_date_year"]}`;
    }
    if (opts?.["first_air_date.gte"]) {
      queryParams += `&first_air_date.gte=${opts["first_air_date.gte"]}`;
    }
    if (opts?.["first_air_date.lte"]) {
      queryParams += `&first_air_date.lte=${opts["first_air_date.lte"]}`;
    }
    if (opts?.["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts?.["include_null_first_air_dates"]) {
      queryParams += `&include_null_first_air_dates=${opts["include_null_first_air_dates"]}`;
    }
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["screened_theatrically"]) {
      queryParams += `&screened_theatrically=${opts["screened_theatrically"]}`;
    }
    if (opts?.["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    if (opts?.["timezone"]) {
      queryParams += `&timezone=${opts["timezone"]}`;
    }
    if (opts?.["vote_average.gte"]) {
      queryParams += `&vote_average.gte=${opts["vote_average.gte"]}`;
    }
    if (opts?.["vote_average.lte"]) {
      queryParams += `&vote_average.lte=${opts["vote_average.lte"]}`;
    }
    if (opts?.["vote_count.gte"]) {
      queryParams += `&vote_count.gte=${opts["vote_count.gte"]}`;
    }
    if (opts?.["vote_count.lte"]) {
      queryParams += `&vote_count.lte=${opts["vote_count.lte"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }
    if (opts?.["with_companies"]) {
      queryParams += `&with_companies=${opts["with_companies"]}`;
    }
    if (opts?.["with_genres"]) {
      queryParams += `&with_genres=${opts["with_genres"]}`;
    }
    if (opts?.["with_keywords"]) {
      queryParams += `&with_keywords=${opts["with_keywords"]}`;
    }
    if (opts?.["with_networks"]) {
      queryParams += `&with_networks=${opts["with_networks"]}`;
    }
    if (opts?.["with_origin_country"]) {
      queryParams += `&with_origin_country=${opts["with_origin_country"]}`;
    }
    if (opts?.["with_original_language"]) {
      queryParams += `&with_original_language=${opts["with_original_language"]}`;
    }
    if (opts?.["with_runtime.gte"]) {
      queryParams += `&with_runtime.gte=${opts["with_runtime.gte"]}`;
    }
    if (opts?.["with_runtime.lte"]) {
      queryParams += `&with_runtime.lte=${opts["with_runtime.lte"]}`;
    }
    if (opts?.["with_status"]) {
      queryParams += `&with_status=${opts["with_status"]}`;
    }
    if (opts?.["with_watch_monetization_types"]) {
      queryParams += `&with_watch_monetization_types=${opts["with_watch_monetization_types"]}`;
    }
    if (opts?.["with_watch_providers"]) {
      queryParams += `&with_watch_providers=${opts["with_watch_providers"]}`;
    }
    if (opts?.["without_companies"]) {
      queryParams += `&without_companies=${opts["without_companies"]}`;
    }
    if (opts?.["without_genres"]) {
      queryParams += `&without_genres=${opts["without_genres"]}`;
    }
    if (opts?.["without_keywords"]) {
      queryParams += `&without_keywords=${opts["without_keywords"]}`;
    }
    if (opts?.["without_watch_providers"]) {
      queryParams += `&without_watch_providers=${opts["without_watch_providers"]}`;
    }
    if (opts?.["with_type"]) {
      queryParams += `&with_type=${opts["with_type"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/discover/tv?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the images that belong to a movie.
   *
   * @param {{ movie_id: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-images
   */
  async movieImages(opts) {
    let queryParams = "";
    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${opts["include_image_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/images?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the images that belong to a TV series.
   *
   * @param {{ series_id: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-images
   */
  async tvSeriesImages(opts) {
    let queryParams = "";
    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${opts["include_image_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/images?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the images that belong to a TV season.
   *
   * @param {{ series_id: number; season_number: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-images
   */
  async tvSeasonImages(opts) {
    let queryParams = "";
    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${opts["include_image_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/images?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the images that belong to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-images
   */
  async tvEpisodeImages(opts) {
    let queryParams = "";
    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${opts["include_image_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/images?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the trending movies, TV shows and people.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-all
   */
  async trendingAll(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/trending/all/${opts.time_window}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the trending movies on TMDB.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-movies
   */
  async trendingMovies(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/trending/movie/${opts.time_window}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the trending TV shows on TMDB.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-tv
   */
  async trendingTv(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/trending/tv/${opts.time_window}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the rating, watchlist and favourite status of an account.
   *
   * @param {{ movie_id: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-account-states
   */
  async movieAccountStates(opts) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/account_states?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the rating, watchlist and favourite status.
   *
   * @param {{ series_id: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-account-states
   */
  async tvSeriesAccountStates(opts) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/account_states?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the rating, watchlist and favourite status.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-account-states
   */
  async tvEpisodeAccountStates(opts) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/account_states?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the trending people on TMDB.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-people
   */
  async trendingPeople(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/trending/person/${opts.time_window}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the alternative titles for a movie.
   *
   * @param {{ movie_id: number; country?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-alternative-titles
   */
  async movieAlternativeTitles(opts) {
    let queryParams = "";
    if (opts["country"]) {
      queryParams += `&country=${opts["country"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/alternative_titles?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the recent changes for a movie.
   *
   * @param {{ movie_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-changes
   */
  async movieChanges(opts) {
    let queryParams = "";
    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/changes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ movie_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-credits
   */
  async movieCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-external-ids
   */
  async movieExternalIds(opts) {
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/external_ids?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ movie_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-keywords
   */
  async movieKeywords(opts) {
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/keywords?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the lists that a movie has been added to.
   *
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-lists
   */
  async movieLists(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/lists?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-recommendations
   */
  async movieRecommendations(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/recommendations?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the release dates and certifications for a movie.
   *
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-release-dates
   */
  async movieReleaseDates(opts) {
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/release_dates?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the user reviews for a movie.
   *
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-reviews
   */
  async movieReviews(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/reviews?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the similar movies based on genres and keywords.
   *
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-similar
   */
  async movieSimilar(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/similar?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the translations for a movie.
   *
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-translations
   */
  async movieTranslations(opts) {
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/translations?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ movie_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-videos
   */
  async movieVideos(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/videos?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of streaming providers we have for a movie.
   *
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-watch-providers
   */
  async movieWatchProviders(opts) {
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/watch/providers?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Rate a movie and save it to your rated list.
   *
   * @param {{ movie_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/movie-add-rating
   */
  async movieAddRating(opts, body) {
    let queryParams = "";
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/rating?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Delete a user rating.
   *
   * @param {{ movie_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-delete-rating
   */
  async movieDeleteRating(opts) {
    let queryParams = "";
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/${opts.movie_id}/rating?api_key=${this.#api_key}${queryParams}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /** @see https://developer.themoviedb.org/v3/reference/authentication-create-guest-session */
  async authenticationCreateGuestSession() {
    return await (await fetch(`${this.#base_url}/3/authentication/guest_session/new?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /** @see https://developer.themoviedb.org/v3/reference/authentication-create-request-token */
  async authenticationCreateRequestToken() {
    return await (await fetch(`${this.#base_url}/3/authentication/token/new?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-create-session
   */
  async authenticationCreateSession(body) {
    return await (await fetch(`${this.#base_url}/3/authentication/session/new?api_key=${this.#api_key}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-create-session-from-v4-token
   */
  async authenticationCreateSessionFromV4Token(body) {
    return await (await fetch(`${this.#base_url}/3/authentication/session/convert/4?api_key=${this.#api_key}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-delete-session
   */
  async authenticationDeleteSession(body) {
    return await (await fetch(`${this.#base_url}/3/authentication/session?api_key=${this.#api_key}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Find data by external ID's.
   *
   * @param {{ external_id: string; external_source: "imdb_id" | "facebook_id" | "instagram_id" | "tvdb_id" | "tiktok_id" | "twitter_id" | "wikidata_id" | "youtube_id"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/find-by-id
   */
  async findById(opts) {
    let queryParams = "";
    if (opts["external_source"]) {
      queryParams += `&external_source=${opts["external_source"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/find/${opts.external_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Query the top level details of a person.
   *
   * @param {{ person_id: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-details
   */
  async personDetails(opts) {
    let queryParams = "";
    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the recent changes for a person.
   *
   * @param {{ person_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-changes
   */
  async personChanges(opts) {
    let queryParams = "";
    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/changes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the recent changes for a TV show.
   *
   * @param {{ series_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-changes
   */
  async tvSeriesChanges(opts) {
    let queryParams = "";
    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/changes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the profile images that belong to a person.
   *
   * @param {{ person_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-images
   */
  async personImages(opts) {
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/images?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the movie credits for a person.
   *
   * @param {{ person_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-movie-credits
   */
  async personMovieCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/movie_credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the TV credits that belong to a person.
   *
   * @param {{ person_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-tv-credits
   */
  async personTvCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/tv_credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the combined movie and TV credits that belong to a person.
   *
   * @param {{ person_id: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-combined-credits
   */
  async personCombinedCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/combined_credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the external ID's that belong to a person.
   *
   * @param {{ person_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-external-ids
   */
  async personExternalIds(opts) {
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/external_ids?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the tagged images for a person.
   *
   * @param {{ person_id: number; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-tagged-images
   */
  async personTaggedImages(opts) {
    let queryParams = "";
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/tagged_images?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the translations that belong to a person.
   *
   * @param {{ person_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/translations
   */
  async translations(opts) {
    return await (await fetch(`${this.#base_url}/3/person/${opts.person_id}/translations?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of people ordered by popularity.
   *
   * @param {{ language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-popular-list
   */
  async personPopularList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/popular?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of movies ordered by popularity.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-popular-list
   */
  async moviePopularList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/popular?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of movies ordered by rating.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-top-rated-list
   */
  async movieTopRatedList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/top_rated?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of movies that are being released soon.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-upcoming-list
   */
  async movieUpcomingList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/upcoming?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of movies that are currently in theatres.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-now-playing-list
   */
  async movieNowPlayingList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/now_playing?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of TV shows airing today.
   *
   * @param {{ language?: string; page?: number; timezone?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-airing-today-list
   */
  async tvSeriesAiringTodayList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["timezone"]) {
      queryParams += `&timezone=${opts["timezone"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/airing_today?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of TV shows that air in the next 7 days.
   *
   * @param {{ language?: string; page?: number; timezone?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-on-the-air-list
   */
  async tvSeriesOnTheAirList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["timezone"]) {
      queryParams += `&timezone=${opts["timezone"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/on_the_air?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of TV shows ordered by popularity.
   *
   * @param {{ language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-popular-list
   */
  async tvSeriesPopularList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/popular?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of TV shows ordered by rating.
   *
   * @param {{ language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-top-rated-list
   */
  async tvSeriesTopRatedList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/top_rated?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the newest movie ID.
   *
   * @see https://developer.themoviedb.org/v3/reference/movie-latest-id
   */
  async movieLatestId() {
    return await (await fetch(`${this.#base_url}/3/movie/latest?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the newest TV show ID.
   *
   * @see https://developer.themoviedb.org/v3/reference/tv-series-latest-id
   */
  async tvSeriesLatestId() {
    return await (await fetch(`${this.#base_url}/3/tv/latest?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the aggregate credits (cast and crew) that have been added to a TV show.
   *
   * @param {{ series_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-aggregate-credits
   */
  async tvSeriesAggregateCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/aggregate_credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the alternative titles that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-alternative-titles
   */
  async tvSeriesAlternativeTitles(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/alternative_titles?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the content ratings that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-content-ratings
   */
  async tvSeriesContentRatings(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/content_ratings?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the latest season credits of a TV show.
   *
   * @param {{ series_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-credits
   */
  async tvSeriesCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the episode groups that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-episode-groups
   */
  async tvSeriesEpisodeGroups(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/episode_groups?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of external IDs that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-external-ids
   */
  async tvSeriesExternalIds(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/external_ids?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of keywords that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-keywords
   */
  async tvSeriesKeywords(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/keywords?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ series_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-recommendations
   */
  async tvSeriesRecommendations(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/recommendations?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the reviews that have been added to a TV show.
   *
   * @param {{ series_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-reviews
   */
  async tvSeriesReviews(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/reviews?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the seasons and episodes that have screened theatrically.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-screened-theatrically
   */
  async tvSeriesScreenedTheatrically(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/screened_theatrically?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the similar TV shows.
   *
   * @param {{ series_id: string; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-similar
   */
  async tvSeriesSimilar(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/similar?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the translations that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-translations
   */
  async tvSeriesTranslations(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/translations?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the videos that belong to a TV show.
   *
   * @param {{ series_id: number; include_video_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-videos
   */
  async tvSeriesVideos(opts) {
    let queryParams = "";
    if (opts["include_video_language"]) {
      queryParams += `&include_video_language=${opts["include_video_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/videos?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of streaming providers we have for a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-watch-providers
   */
  async tvSeriesWatchProviders(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/watch/providers?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Rate a TV show and save it to your rated list.
   *
   * @param {{ series_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/tv-series-add-rating
   */
  async tvSeriesAddRating(opts, body) {
    let queryParams = "";
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/rating?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * @param {{ series_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-delete-rating
   */
  async tvSeriesDeleteRating(opts) {
    let queryParams = "";
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/rating?api_key=${this.#api_key}${queryParams}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the rating, watchlist and favourite status.
   *
   * @param {{ series_id: number; season_number: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-account-states
   */
  async tvSeasonAccountStates(opts) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/account_states?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the aggregate credits (cast and crew) that have been added to a TV season.
   *
   * @param {{ series_id: number; season_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-aggregate-credits
   */
  async tvSeasonAggregateCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/aggregate_credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the recent changes for a TV season.
   *
   * @param {{ season_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-changes-by-id
   */
  async tvSeasonChangesById(opts) {
    let queryParams = "";
    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/season/${opts.season_id}/changes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ series_id: number; season_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-credits
   */
  async tvSeasonCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of external IDs that have been added to a TV season.
   *
   * @param {{ series_id: number; season_number: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-external-ids
   */
  async tvSeasonExternalIds(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/external_ids?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the translations for a TV season.
   *
   * @param {{ series_id: number; season_number: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-translations
   */
  async tvSeasonTranslations(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/translations?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the videos that belong to a TV season.
   *
   * @param {{ series_id: number; season_number: number; include_video_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-videos
   */
  async tvSeasonVideos(opts) {
    let queryParams = "";
    if (opts["include_video_language"]) {
      queryParams += `&include_video_language=${opts["include_video_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/videos?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ series_id: number; season_number: number; episode_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-credits
   */
  async tvEpisodeCredits(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/credits?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of external IDs that have been added to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-external-ids
   */
  async tvEpisodeExternalIds(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/external_ids?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the translations that have been added to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-translations
   */
  async tvEpisodeTranslations(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/translations?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the videos that belong to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; include_video_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-videos
   */
  async tvEpisodeVideos(opts) {
    let queryParams = "";
    if (opts["include_video_language"]) {
      queryParams += `&include_video_language=${opts["include_video_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/videos?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Rate a TV episode and save it to your rated list.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; guest_session_id?: string; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-add-rating
   */
  async tvEpisodeAddRating(opts, body) {
    let queryParams = "";
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/rating?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Delete your rating on a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; guest_session_id?: string; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-delete-rating
   */
  async tvEpisodeDeleteRating(opts) {
    let queryParams = "";
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/rating?api_key=${this.#api_key}${queryParams}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the public details of an account on TMDB.
   *
   * @param {{ account_id: number; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-details
   */
  async accountDetails(opts) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a users list of custom lists.
   *
   * @param {{ account_id: number; page?: number; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-lists
   */
  async accountLists(opts) {
    let queryParams = "";
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/lists?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a users list of favourite movies.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-get-favorites
   */
  async accountGetFavorites(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/favorite/movies?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a users list of favourite TV shows.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-favorite-tv
   */
  async accountFavoriteTv(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/favorite/tv?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a users list of rated movies.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-rated-movies
   */
  async accountRatedMovies(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/rated/movies?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a users list of rated TV shows.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-rated-tv
   */
  async accountRatedTv(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/rated/tv?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a users list of rated TV episodes.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-rated-tv-episodes
   */
  async accountRatedTvEpisodes(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/rated/tv/episodes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of movies added to a users watchlist.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-watchlist-movies
   */
  async accountWatchlistMovies(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/watchlist/movies?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of TV shows added to a users watchlist.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-watchlist-tv
   */
  async accountWatchlistTv(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/watchlist/tv?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Mark a movie or TV show as a favourite.
   *
   * @param {{ account_id: number; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/account-add-favorite
   */
  async accountAddFavorite(opts, body) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/favorite?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Add a movie or TV show to your watchlist.
   *
   * @param {{ account_id: number; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/account-add-to-watchlist
   */
  async accountAddToWatchlist(opts, body) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/account/${opts.account_id}/watchlist?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Get an up to date list of the officially supported movie certifications on TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/certification-movie-list
   */
  async certificationMovieList() {
    return await (await fetch(`${this.#base_url}/3/certification/movie/list?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /** @see https://developer.themoviedb.org/v3/reference/certifications-tv-list */
  async certificationsTvList() {
    return await (await fetch(`${this.#base_url}/3/certification/tv/list?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of all of the movie ids that have been changed in the past 24 hours.
   *
   * @param {{ end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/changes-movie-list
   */
  async changesMovieList(opts) {
    let queryParams = "";
    if (opts?.["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/movie/changes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/changes-tv-list
   */
  async changesTvList(opts) {
    let queryParams = "";
    if (opts?.["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/changes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/changes-people-list
   */
  async changesPeopleList(opts) {
    let queryParams = "";
    if (opts?.["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/person/changes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get collection details by ID.
   *
   * @param {{ collection_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/collection-details
   */
  async collectionDetails(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/collection/${opts.collection_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the images that belong to a collection.
   *
   * @param {{ collection_id: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/collection-images
   */
  async collectionImages(opts) {
    let queryParams = "";
    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${opts["include_image_language"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/collection/${opts.collection_id}/images?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ collection_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/collection-translations
   */
  async collectionTranslations(opts) {
    return await (await fetch(`${this.#base_url}/3/collection/${opts.collection_id}/translations?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the company details by ID.
   *
   * @param {{ company_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/company-details
   */
  async companyDetails(opts) {
    return await (await fetch(`${this.#base_url}/3/company/${opts.company_id}?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the company details by ID.
   *
   * @param {{ company_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/company-alternative-names
   */
  async companyAlternativeNames(opts) {
    return await (await fetch(`${this.#base_url}/3/company/${opts.company_id}/alternative_names?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the company logos by id.
   *
   * @param {{ company_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/company-images
   */
  async companyImages(opts) {
    return await (await fetch(`${this.#base_url}/3/company/${opts.company_id}/images?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a movie or TV credit details by ID.
   *
   * @param {{ credit_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/credit-details
   */
  async creditDetails(opts) {
    return await (await fetch(`${this.#base_url}/3/credit/${opts.credit_id}?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of official genres for movies.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/genre-movie-list
   */
  async genreMovieList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/genre/movie/list?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of official genres for TV shows.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/genre-tv-list
   */
  async genreTvList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/genre/tv/list?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the rated movies for a guest session.
   *
   * @param {{ guest_session_id: string; language?: string; page?: number; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/guest-session-rated-movies
   */
  async guestSessionRatedMovies(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/guest_session/${opts.guest_session_id}/rated/movies?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the rated TV shows for a guest session.
   *
   * @param {{ guest_session_id: string; language?: string; page?: number; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/guest-session-rated-tv
   */
  async guestSessionRatedTv(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/guest_session/${opts.guest_session_id}/rated/tv?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the rated TV episodes for a guest session.
   *
   * @param {{ guest_session_id: string; language?: string; page?: number; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/guest-session-rated-tv-episodes
   */
  async guestSessionRatedTvEpisodes(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/guest_session/${opts.guest_session_id}/rated/tv/episodes?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of the countries we have watch provider (OTT/streaming) data for.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/watch-providers-available-regions
   */
  async watchProvidersAvailableRegions(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/watch/providers/regions?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of streaming providers we have for movies.
   *
   * @param {{ language?: string; watch_region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/watch-providers-movie-list
   */
  async watchProvidersMovieList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/watch/providers/movie?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of streaming providers we have for TV shows.
   *
   * @param {{ language?: string; watch_region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/watch-provider-tv-list
   */
  async watchProviderTvList(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/watch/providers/tv?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ keyword_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/keyword-details
   */
  async keywordDetails(opts) {
    return await (await fetch(`${this.#base_url}/3/keyword/${opts.keyword_id}?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ keyword_id: string; include_adult?: boolean; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/keyword-movies
   */
  async keywordMovies(opts) {
    let queryParams = "";
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/keyword/${opts.keyword_id}/movies?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ list_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-details
   */
  async listDetails(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/list/${opts.list_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Delete a list.
   *
   * @param {{ list_id: number; session_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-delete
   */
  async listDelete(opts) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/list/${opts.list_id}?api_key=${this.#api_key}${queryParams}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Use this method to check if an item has already been added to the list.
   *
   * @param {{ list_id: number; language?: string; movie_id?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-check-item-status
   */
  async listCheckItemStatus(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["movie_id"]) {
      queryParams += `&movie_id=${opts["movie_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/list/${opts.list_id}/item_status?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ session_id: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/list-create
   */
  async listCreate(opts, body) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/list?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Add a movie to a list.
   *
   * @param {{ list_id: number; session_id: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/list-add-movie
   */
  async listAddMovie(opts, body) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/list/${opts.list_id}/add_item?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Remove a movie from a list.
   *
   * @param {{ list_id: number; session_id: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/list-remove-movie
   */
  async listRemoveMovie(opts, body) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/list/${opts.list_id}/remove_item?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Clear all items from a list.
   *
   * @param {{ list_id: number; session_id: string; confirm: boolean; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-clear
   */
  async listClear(opts) {
    let queryParams = "";
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["confirm"]) {
      queryParams += `&confirm=${opts["confirm"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/list/${opts.list_id}/clear?api_key=${this.#api_key}${queryParams}`, {
      method: "POST",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * @param {{ network_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/network-details
   */
  async networkDetails(opts) {
    return await (await fetch(`${this.#base_url}/3/network/${opts.network_id}?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the alternative names of a network.
   *
   * @param {{ network_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/details-copy
   */
  async detailsCopy(opts) {
    return await (await fetch(`${this.#base_url}/3/network/${opts.network_id}/alternative_names?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the TV network logos by id.
   *
   * @param {{ network_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/alternative-names-copy
   */
  async alternativeNamesCopy(opts) {
    return await (await fetch(`${this.#base_url}/3/network/${opts.network_id}/images?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Retrieve the details of a movie or TV show review.
   *
   * @param {{ review_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/review-details
   */
  async reviewDetails(opts) {
    return await (await fetch(`${this.#base_url}/3/review/${opts.review_id}?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Test your API Key to see if it's valid.
   *
   * @see https://developer.themoviedb.org/v3/reference/authentication-validate-key
   */
  async authenticationValidateKey() {
    return await (await fetch(`${this.#base_url}/3/authentication?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of streaming providers we have for a TV season.
   *
   * @param {{ series_id: number; season_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-watch-providers
   */
  async tvSeasonWatchProviders(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/watch/providers?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/configuration-countries
   */
  async configurationCountries(opts) {
    let queryParams = "";
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/configuration/countries?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of the jobs and departments we use on TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-jobs
   */
  async configurationJobs() {
    return await (await fetch(`${this.#base_url}/3/configuration/jobs?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-languages
   */
  async configurationLanguages() {
    return await (await fetch(`${this.#base_url}/3/configuration/languages?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get a list of the officially supported translations on TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-primary-translations
   */
  async configurationPrimaryTranslations() {
    return await (await fetch(`${this.#base_url}/3/configuration/primary_translations?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the list of timezones used throughout TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-timezones
   */
  async configurationTimezones() {
    return await (await fetch(`${this.#base_url}/3/configuration/timezones?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * This method allows an application to validate a request token by entering a username and password.
   *
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-create-session-from-login
   */
  async authenticationCreateSessionFromLogin(body) {
    return await (await fetch(`${this.#base_url}/3/authentication/token/validate_with_login?api_key=${this.#api_key}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        body: JSON.stringify(body)
      }
    })).json();
  }
  /**
   * Get the newest created person. This is a live response and will continuously change.
   *
   * @see https://developer.themoviedb.org/v3/reference/person-latest-id
   */
  async personLatestId() {
    return await (await fetch(`${this.#base_url}/3/person/latest?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the recent changes for a TV episode.
   *
   * @param {{ episode_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-changes-by-id
   */
  async tvEpisodeChangesById(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/episode/${opts.episode_id}/changes?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the details of a TV episode group.
   *
   * @param {{ tv_episode_group_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-group-details
   */
  async tvEpisodeGroupDetails(opts) {
    return await (await fetch(`${this.#base_url}/3/tv/episode_group/${opts.tv_episode_group_id}?api_key=${this.#api_key}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Search for companies by their original and alternative names.
   *
   * @param {{ query: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-company
   */
  async searchCompany(opts) {
    let queryParams = "";
    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/search/company?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Search for collections by their original, translated and alternative names.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-collection
   */
  async searchCollection(opts) {
    let queryParams = "";
    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/search/collection?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Search for keywords by their name.
   *
   * @param {{ query: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-keyword
   */
  async searchKeyword(opts) {
    let queryParams = "";
    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/search/keyword?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
  /**
   * Get the lists that a TV series has been added to.
   *
   * @param {{ series_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/lists-copy
   */
  async listsCopy(opts) {
    let queryParams = "";
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    return await (await fetch(`${this.#base_url}/3/tv/${opts.series_id}/lists?api_key=${this.#api_key}${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }
};

// src/api.ts
var Api = class {
  #apiKey;
  #tmdbApi;
  constructor(apiKey) {
    this.#apiKey = apiKey;
    this.#tmdbApi = new TmdbApi(apiKey);
  }
  #inferPosterPath(posterPath, width = 200) {
    return posterPath ? `https://image.tmdb.org/t/p/w${width}${posterPath}` : posterPath;
  }
  async isApiKeyValid() {
    const { success } = await this.#tmdbApi.authenticationValidateKey();
    return success;
  }
  async search(query) {
    if (query !== "") {
      const api = new TmdbApi(this.#apiKey);
      return {
        shows: (await api.searchTv({
          query
        })).results.map((r3) => ({
          id: r3.id,
          name: r3.name ?? r3.original_name,
          releaseDate: r3.first_air_date,
          posterPath: this.#inferPosterPath(r3.poster_path)
        })),
        movies: (await api.searchMovie({
          query
        })).results.map((r3) => ({
          id: r3.id,
          name: r3.title ?? r3.original_title,
          releaseDate: r3.release_date,
          posterPath: this.#inferPosterPath(r3.poster_path)
        }))
      };
    }
    return {
      shows: [],
      movies: []
    };
  }
  async fetchShows(ids) {
    return await Promise.all(ids.map(async (id) => {
      const show = await this.#tmdbApi.tvSeriesDetails({
        series_id: id
      });
      const episodes = (await Promise.all(show.seasons.filter((s2) => ot3(s2.air_date).isBetween(ot3().subtract(1, "year"), ot3().add(1, "year"))).flatMap(async (s2) => (await this.#tmdbApi.tvSeasonDetails({
        series_id: show.id,
        season_number: s2.season_number
      })).episodes.map((e) => ({
        id: e.id,
        name: show.name,
        releaseDate: e.air_date,
        posterPath: this.#inferPosterPath(show.poster_path),
        description: `S${e.season_number}E${e.episode_number} ${e.name}`
      }))))).flat();
      return {
        id: show.id,
        name: show.name ?? show.original_name,
        releaseDate: show.first_air_date,
        posterPath: this.#inferPosterPath(show.poster_path),
        status: show.status,
        episodes
      };
    }));
  }
  async fetchShowDetails(id) {
    const show = await this.#tmdbApi.tvSeriesDetails({
      series_id: id,
      append_to_response: "credits,external_ids,similar"
    });
    return {
      ...show,
      poster_path: this.#inferPosterPath(show.poster_path, 500),
      credits: {
        cast: show.credits.cast.map((c3) => ({
          ...c3,
          profile_path: this.#inferPosterPath(c3.profile_path)
        })),
        crew: show.credits.crew.map((c3) => ({
          ...c3,
          profile_path: this.#inferPosterPath(c3.profile_path)
        }))
      },
      networks: show.networks.map((n2) => ({
        ...n2,
        logo_path: this.#inferPosterPath(n2.logo_path)
      })),
      similar: {
        ...show.similar,
        results: show.similar.results.map((r3) => ({
          ...r3,
          poster_path: this.#inferPosterPath(r3.poster_path)
        }))
      }
    };
  }
  async fetchMovies(ids) {
    return await Promise.all(ids.map(async (id) => {
      const movie = await this.#tmdbApi.movieDetails({
        movie_id: id
      });
      return {
        id: movie.id,
        name: movie.title ?? movie.original_title,
        releaseDate: movie.release_date,
        posterPath: this.#inferPosterPath(movie.poster_path),
        status: movie.status
      };
    }));
  }
  async fetchMovieDetails(id) {
    const movie = await this.#tmdbApi.movieDetails({
      movie_id: id,
      append_to_response: "credits,external_ids,similar"
    });
    return {
      ...movie,
      poster_path: this.#inferPosterPath(movie.poster_path, 500),
      credits: {
        cast: movie.credits.cast.map((c3) => ({
          ...c3,
          profile_path: this.#inferPosterPath(c3.profile_path)
        })),
        crew: movie.credits.crew.map((c3) => ({
          ...c3,
          profile_path: this.#inferPosterPath(c3.profile_path)
        }))
      },
      production_companies: movie.production_companies.map((pc) => ({
        ...pc,
        logo_path: this.#inferPosterPath(pc.logo_path)
      })),
      similar: {
        ...movie.similar,
        results: movie.similar.results.map((r3) => ({
          ...r3,
          poster_path: this.#inferPosterPath(r3.poster_path)
        }))
      }
    };
  }
  async fetchPersonDetails(id) {
    const person = await this.#tmdbApi.personDetails({
      person_id: id,
      append_to_response: "images,tv_credits,movie_credits"
    });
    return {
      ...person,
      profile_path: this.#inferPosterPath(person.profile_path),
      images: {
        ...person.images,
        profiles: person.images.profiles.map((p6) => ({
          ...p6,
          file_path: this.#inferPosterPath(p6.file_path)
        }))
      },
      tv_credits: {
        ...person.tv_credits,
        cast: person.tv_credits.cast.map((c3) => ({
          ...c3,
          poster_path: this.#inferPosterPath(c3.poster_path)
        }))
      },
      movie_credits: {
        ...person.movie_credits,
        cast: person.movie_credits.cast.map((c3) => ({
          ...c3,
          poster_path: this.#inferPosterPath(c3.poster_path)
        }))
      }
    };
  }
  async fetchTrending() {
    return {
      shows: (await this.#tmdbApi.trendingTv({
        time_window: "week"
      })).results.map((r3) => ({
        id: r3.id,
        name: r3.name ?? r3.original_name,
        releaseDate: r3.first_air_date,
        posterPath: this.#inferPosterPath(r3.poster_path)
      })),
      movies: (await this.#tmdbApi.trendingMovies({
        time_window: "week"
      })).results.map((r3) => ({
        id: r3.id,
        name: r3.title ?? r3.original_title,
        releaseDate: r3.release_date,
        posterPath: this.#inferPosterPath(r3.poster_path)
      }))
    };
  }
  async fetchF1() {
    const { races } = await (await fetch(`https://raw.githubusercontent.com/sportstimes/f1/refs/heads/main/_db/f1/${ot3().format("YYYY")}.json`)).json();
    return races.map((r3) => ({
      id: ot3(r3.sessions.gp).unix(),
      name: `${r3.name.replace("Grand Prix", "").trim()} Grand Prix`,
      description: r3.location,
      releaseDate: r3.sessions.gp,
      posterPath: "https://raw.githubusercontent.com/nashaddams/watcher/refs/heads/main/public/f1.svg"
    }));
  }
  async fetchF1Details(id) {
    const { races } = await (await fetch(`https://raw.githubusercontent.com/sportstimes/f1/refs/heads/main/_db/f1/${ot3().format("YYYY")}.json`)).json();
    const race = races.find((r3) => ot3(r3.sessions.gp).unix() === id);
    return {
      ...race,
      name: `${race.name.replace("Grand Prix", "").trim()} Grand Prix`,
      round: `${race.round} / ${races.length}`
    };
  }
};

// src/shared/elements.tsx
var Main = Ht2.main`
  padding: 24px;
`;
var H1 = Ht2.h1`
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 300;
  margin: 0 0 24px 0;
`;
var H22 = Ht2.h2`
  font-size: 1.4rem;
  line-height: 1.4rem;
  font-weight: 300;
  margin: 0 0 16px 0;
`;
var Input = Ht2.input`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 6px 10px;
  color: white;
  background-color: ${Color.BgSecondary};
  font-size: 1rem;
`;

// deno:https://esm.sh/@smakss/react-scroll-direction@4.2.0/X-ZXJlYWN0/es2022/react-scroll-direction.mjs
var l5;
(function(o4) {
  o4.X = "x", o4.Y = "y";
})(l5 || (l5 = {}));
var r2;
(function(o4) {
  o4.Up = "up", o4.Down = "down", o4.Left = "left", o4.Right = "right", o4.Still = "still";
})(r2 || (r2 = {}));
function H8(o4 = {}) {
  let { target: t = typeof window < "u" ? window : void 0, thr: S7 = 0, axis: n2 = l5.Y, scrollUp: a4 = n2 === l5.Y ? r2.Up : r2.Left, scrollDown: u6 = n2 === l5.Y ? r2.Down : r2.Right, still: Y5 = r2.Still } = o4, [W4, E11] = Ge(Y5), [L2, v8] = Ge({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }), f4 = Math.max(0, S7), i3 = ze(false), s2 = ze(0), d4 = He(() => {
    if (!t) return;
    let e;
    t instanceof Window ? e = n2 === l5.Y ? t.scrollY : t.scrollX : e = n2 === l5.Y ? t.scrollTop : t.scrollLeft, Math.abs(e - s2.current) >= f4 && (E11(e > s2.current ? u6 : a4), s2.current = Math.max(0, e)), i3.current = false;
  }, [
    t,
    n2,
    f4,
    u6,
    a4
  ]);
  return Le(() => {
    if (!t) {
      console.warn("useDetectScroll: target is not set. Falling back to window.");
      return;
    }
    let e = () => {
      if (!t) return;
      let w6 = t instanceof Window ? t.scrollY : t.scrollTop, h4 = t instanceof Window ? t.scrollX : t.scrollLeft, b10 = (t instanceof Window ? document.documentElement.scrollHeight - t.innerHeight : t.scrollHeight - t.clientHeight) - w6, D8 = (t instanceof Window ? document.documentElement.scrollWidth - t.innerWidth : t.scrollWidth - t.clientWidth) - h4;
      v8({
        top: w6,
        bottom: b10,
        left: h4,
        right: D8
      });
    };
    e();
    let c3 = t;
    return c3.addEventListener("scroll", e), () => {
      c3.removeEventListener("scroll", e);
    };
  }, [
    t
  ]), Le(() => {
    if (!t) {
      console.warn("useDetectScroll: target is not set. Falling back to window.");
      return;
    }
    t instanceof Window ? s2.current = n2 === l5.Y ? t.scrollY : t.scrollX : s2.current = n2 === l5.Y ? t.scrollTop : t.scrollLeft;
    let e = () => {
      i3.current || (window.requestAnimationFrame(d4), i3.current = true);
    }, c3 = t;
    return c3.addEventListener("scroll", e), () => c3.removeEventListener("scroll", e);
  }, [
    t,
    n2,
    d4
  ]), {
    scrollDir: W4,
    scrollPosition: L2
  };
}

// src/shared/nav.tsx
var Wrapper = Ht2.nav`
  position: fixed;
  bottom: ${({ hide }) => hide ? "-100px" : "16px"};
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
  justify-items: center;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(3px);
  border: solid rgba(255, 255, 255, 0.05) 2px;
  border-radius: 48px;
  padding: 8px 22px;

  transition: bottom 0.3s ease-in-out;
`;
var Link = Ht2(Ka)`
  filter: none;
  text-decoration: none;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 4px;
  cursor: pointer;
  color: white;
  opacity: ${({ selected }) => selected ? 1 : 0.6};
`;
var Svg = Ht2.svg`
  height: 22px;
  width: auto;
  justify-self: center;
`;
var Text = Ht2.div`
  font-size: 0.6rem;
  font-weight: 600;
`;
var Icon = {
  Library: () => /* @__PURE__ */ q(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    children: /* @__PURE__ */ q("path", {
      d: "M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V15.2973L15.9995 19.9996C16.1143 20.5398 16.6454 20.8847 17.1856 20.7699L21.0982 19.9382C21.6384 19.8234 21.9832 19.2924 21.8684 18.7522L18.9576 5.0581C18.8428 4.51788 18.3118 4.17304 17.7716 4.28786L14.9927 4.87853C14.9328 4.38353 14.5112 4 14 4H10C10 3.44772 9.55228 3 9 3H4ZM10 6H13V14H10V6ZM10 19V16H13V19H10ZM8 5V15H5V5H8ZM8 17V19H5V17H8ZM17.3321 16.6496L19.2884 16.2338L19.7042 18.1898L17.7479 18.6057L17.3321 16.6496ZM16.9163 14.6933L15.253 6.86789L17.2092 6.45207L18.8726 14.2775L16.9163 14.6933Z"
    })
  }),
  Recent: () => /* @__PURE__ */ q(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    children: /* @__PURE__ */ q("path", {
      d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"
    })
  }),
  Upcoming: () => /* @__PURE__ */ q(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    children: /* @__PURE__ */ q("path", {
      d: "M7 3V1H9V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V9H20V5H17V7H15V5H9V7H7V5H4V19H10V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7ZM17 12C14.7909 12 13 13.7909 13 16C13 18.2091 14.7909 20 17 20C19.2091 20 21 18.2091 21 16C21 13.7909 19.2091 12 17 12ZM11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16ZM16 13V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V13H16Z"
    })
  }),
  Trending: () => /* @__PURE__ */ q(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    children: /* @__PURE__ */ q("path", {
      d: "M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z"
    })
  })
};
function Nav() {
  const { pathname } = Ce3();
  const { scrollDir } = H8({
    thr: 100
  });
  return /* @__PURE__ */ C(Wrapper, {
    hide: scrollDir === "down",
    children: [
      /* @__PURE__ */ C(Link, {
        to: "/library",
        selected: pathname === "/library",
        children: [
          /* @__PURE__ */ q(Icon.Library, {}),
          /* @__PURE__ */ q(Text, {
            children: "Library"
          })
        ]
      }),
      /* @__PURE__ */ C(Link, {
        to: "/",
        selected: pathname === "/",
        children: [
          /* @__PURE__ */ q(Icon.Recent, {}),
          /* @__PURE__ */ q(Text, {
            children: "Recent"
          })
        ]
      }),
      /* @__PURE__ */ C(Link, {
        to: "/upcoming",
        selected: pathname === "/upcoming",
        children: [
          /* @__PURE__ */ q(Icon.Upcoming, {}),
          /* @__PURE__ */ q(Text, {
            children: "Upcoming"
          })
        ]
      }),
      /* @__PURE__ */ C(Link, {
        to: "/trending",
        selected: pathname === "/trending",
        children: [
          /* @__PURE__ */ q(Icon.Trending, {}),
          /* @__PURE__ */ q(Text, {
            children: "Trending"
          })
        ]
      })
    ]
  });
}

// src/shared/missing-api-key.tsx
var Link2 = Ht2(Ka)`
  ${linkCss};
`;
var Wrapper2 = Ht2.div`
  position: fixed;
  top: 24px;
  right: 24px;
  left: 24px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  background-color: #d32f2f;
  padding: 11px 12px 12px 12px;
  border-radius: 6px;
`;
function MissingApiKey({ missing, invalid }) {
  if (missing) {
    return /* @__PURE__ */ C(Wrapper2, {
      children: [
        /* @__PURE__ */ q("div", {
          children: "Missing TMDB API Key."
        }),
        /* @__PURE__ */ q(Link2, {
          to: "/settings",
          children: "Settings"
        })
      ]
    });
  }
  if (invalid) {
    return /* @__PURE__ */ C(Wrapper2, {
      children: [
        /* @__PURE__ */ q("div", {
          children: "Invalid TMDB API Key."
        }),
        /* @__PURE__ */ q(Link2, {
          to: "/settings",
          children: "Go to Settings"
        })
      ]
    });
  }
  return null;
}

// src/shared/poster.tsx
var Wrapper3 = Ht2.div`
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ height }) => height};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`;
var Img = Ht2.img`
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  border-radius: 6px;
  object-fit: cover;
  object-position: center;
  opacity: ${({ loaded }) => loaded ? 1 : 0};
  transition: opacity 0.3s;
`;
var Poster = ({ posterPath, width, height }) => {
  const [loading, setLoading] = Ge(true);
  const [loaded, setLoaded] = Ge(false);
  return /* @__PURE__ */ q(Wrapper3, {
    width,
    height,
    children: posterPath ? /* @__PURE__ */ q(Img, {
      src: posterPath,
      width,
      loaded: !loading && loaded,
      onLoad: () => {
        setLoading(false);
        setLoaded(true);
      },
      onError: () => {
        setLoading(false);
        setLoaded(false);
      }
    }) : null
  });
};

// src/shared/item.tsx
var Wrapper4 = Ht2.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 12px;

  &:first-child {
    margin-top: 12px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
var Info = Ht2.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 4px;
`;
var Title = Ht2.div`
  font-weight: 500;
`;
var Description = Ht2.div`
  font-size: 0.9rem;
`;
var Secondary = Ht2.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
`;
function Item({ name, description, releaseDate, posterPath, status, action, link }) {
  return /* @__PURE__ */ C(Wrapper4, {
    children: [
      link ? /* @__PURE__ */ q(Ka, {
        to: link,
        children: /* @__PURE__ */ q(Poster, {
          posterPath,
          width: "64px",
          height: "96px"
        })
      }) : /* @__PURE__ */ q(Poster, {
        posterPath,
        width: "64px",
        height: "96px"
      }),
      /* @__PURE__ */ C(Info, {
        children: [
          /* @__PURE__ */ q(Title, {
            children: name
          }),
          description ? /* @__PURE__ */ q(Description, {
            children: description
          }) : null,
          /* @__PURE__ */ q(Secondary, {
            children: releaseDate ? releaseDate : status
          })
        ]
      }),
      action
    ]
  });
}

// src/shared/item-list.tsx
function ItemList({ title, items }) {
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ q(H1, {
        children: title
      }),
      items.map((i3) => /* @__PURE__ */ q(Item, {
        id: i3.id,
        name: i3.name,
        description: i3.description,
        releaseDate: ot3(i3.releaseDate).fromNow(),
        posterPath: i3.posterPath,
        link: i3.link
      }))
    ]
  });
}

// src/shared/loader.tsx
var loader = ln3`
  0% {  transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;
var Wrapper5 = Ht2.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ stroke }) => stroke}px;
  border-radius: ${({ stroke }) => stroke / 2}px;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: ${({ stroke }) => stroke / 2}px;
    animation: ${loader} ${({ speed }) => speed}s ease-in-out infinite;
    transform: translateX(-95%);
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.3s ease;
  }
`;
function Loader() {
  return /* @__PURE__ */ q(Wrapper5, {
    stroke: 2,
    speed: 1.2
  });
}

// deno:https://jsr.io/@std/async/1.0.14/debounce.ts
function debounce(fn2, wait) {
  let timeout = null;
  let flush = null;
  const debounced = (...args) => {
    debounced.clear();
    flush = () => {
      debounced.clear();
      fn2.call(debounced, ...args);
    };
    timeout = Number(setTimeout(flush, wait));
  };
  debounced.clear = () => {
    if (typeof timeout === "number") {
      clearTimeout(timeout);
      timeout = null;
      flush = null;
    }
  };
  debounced.flush = () => {
    flush?.();
  };
  Object.defineProperty(debounced, "pending", {
    get: () => typeof timeout === "number"
  });
  return debounced;
}

// src/library/icons.tsx
var SvgSettings = Ht2.svg`
  height: 2rem;
  width: 2rem;
`;
var SvgSearch = Ht2.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8px;
  margin: auto;
  height: 20px;
`;
var SvgClear = Ht2.svg`
  position: absolute;
  top: 0;
  right: 12px;
  bottom: 0;
  margin: auto;
  height: 20px;
  cursor: pointer;
`;
var SvgAdd = Ht2.svg`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
var SvgAdded = Ht2.svg`
  height: 20px;
  width: 20px;
`;
var SvgRemove = Ht2.svg`
  height: 20px;
  width: 20px;
  margin-right: 12px;
  cursor: pointer;
`;
var Icon2 = {
  Settings: () => /* @__PURE__ */ q(SvgSettings, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    children: /* @__PURE__ */ q("path", {
      d: "M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"
    })
  }),
  Search: () => /* @__PURE__ */ q(SvgSearch, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    children: /* @__PURE__ */ q("path", {
      d: "M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
    })
  }),
  Clear: (props) => /* @__PURE__ */ q(SvgClear, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    ...props,
    children: /* @__PURE__ */ q("path", {
      d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"
    })
  }),
  Add: (props) => /* @__PURE__ */ q(SvgAdd, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    ...props,
    children: /* @__PURE__ */ q("path", {
      d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
    })
  }),
  Added: (props) => /* @__PURE__ */ q(SvgAdded, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "#388E3C",
    ...props,
    children: /* @__PURE__ */ q("path", {
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"
    })
  }),
  Remove: (props) => /* @__PURE__ */ q(SvgRemove, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    ...props,
    children: /* @__PURE__ */ q("path", {
      d: "M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z"
    })
  })
};

// src/library/search.tsx
var Wrapper6 = Ht2.div`
  position: relative;
  margin-bottom: 24px;
`;
var Results = Ht2.div`
  position: fixed;
  top: 130px;
  right: 24px;
  left: 24px;
  max-height: calc(100dvh - 220px);
  overflow: hidden;
  overflow-y: auto;
  background-color: ${Color.BgSecondary};
  border-radius: 6px;
  padding: 0 12px 12px 12px;
`;
function Search({ apiKey, showIds, movieIds, addShow, addMovie }) {
  const [query, setQuery] = Ge("");
  const [shows, setShows] = Ge([]);
  const [movies, setMovies] = Ge([]);
  const [loading, setLoading] = Ge(false);
  const clear = () => {
    setQuery("");
    setShows([]);
    setMovies([]);
  };
  Le(debounce(async () => {
    const api = new Api(apiKey);
    const valid = await api.isApiKeyValid();
    if (valid) {
      setLoading(true);
      const { shows: s2, movies: m6 } = await api.search(query);
      setShows(s2);
      setMovies(m6);
      setLoading(false);
    }
  }, 300), [
    query
  ]);
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ C(Wrapper6, {
        children: [
          /* @__PURE__ */ q(Input, {
            type: "text",
            name: "search-input",
            placeholder: "Shows & Movies",
            autoComplete: "off",
            style: {
              padding: "6px 36px 6px 32px"
            },
            value: query,
            onChange: (e) => setQuery(e.target.value)
          }),
          /* @__PURE__ */ q(Icon2.Search, {}),
          query !== "" && /* @__PURE__ */ q(Icon2.Clear, {
            onClick: () => clear()
          })
        ]
      }),
      [
        ...shows,
        ...movies
      ].length ? /* @__PURE__ */ C(Results, {
        children: [
          shows.map((s2) => /* @__PURE__ */ q(Item, {
            id: s2.id,
            name: s2.name,
            releaseDate: s2.releaseDate ? ot3(s2.releaseDate).format("YYYY") : "",
            posterPath: s2.posterPath,
            status: s2.status,
            action: showIds.includes(s2.id) ? /* @__PURE__ */ q(Icon2.Added, {}) : /* @__PURE__ */ q(Icon2.Add, {
              onClick: () => {
                addShow(s2.id);
                clear();
              }
            })
          })),
          movies.map((m6) => /* @__PURE__ */ q(Item, {
            id: m6.id,
            name: m6.name,
            releaseDate: m6.releaseDate ? ot3(m6.releaseDate).format("YYYY") : "",
            posterPath: m6.posterPath,
            status: m6.status,
            action: movieIds.includes(m6.id) ? /* @__PURE__ */ q(Icon2.Added, {}) : /* @__PURE__ */ q(Icon2.Add, {
              onClick: () => {
                addMovie(m6.id);
                clear();
              }
            })
          }))
        ]
      }) : null,
      loading ? /* @__PURE__ */ q(Loader, {}) : null
    ]
  });
}

// src/library/mod.tsx
var Header = Ht2.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;

  & > :last-child {
    justify-self: end;
    margin: 5px 6px 0 0;
  }
`;
function Library({ apiKey, showIds, movieIds, shows, movies, addShow, addMovie, removeShow, removeMovie }) {
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ C(Header, {
        children: [
          /* @__PURE__ */ q(H1, {
            children: "Library"
          }),
          /* @__PURE__ */ q(Ka, {
            to: "/settings",
            children: /* @__PURE__ */ q(Icon2.Settings, {})
          })
        ]
      }),
      /* @__PURE__ */ q(Search, {
        apiKey,
        showIds,
        movieIds,
        addShow,
        addMovie
      }),
      shows.sort((s1, s2) => s1.name.localeCompare(s2.name)).map((s2) => /* @__PURE__ */ q(Item, {
        id: s2.id,
        name: s2.name,
        releaseDate: s2.releaseDate ? ot3(s2.releaseDate).format("YYYY") : "",
        posterPath: s2.posterPath,
        status: s2.status,
        action: /* @__PURE__ */ q(Icon2.Remove, {
          onClick: () => removeShow(s2.id)
        }),
        link: `/show/${s2.id}`
      })),
      movies.sort((m1, m22) => m1.name.localeCompare(m22.name)).map((m6) => /* @__PURE__ */ q(Item, {
        id: m6.id,
        name: m6.name,
        releaseDate: m6.releaseDate ? ot3(m6.releaseDate).format("YYYY") : "",
        posterPath: m6.posterPath,
        status: m6.status,
        action: /* @__PURE__ */ q(Icon2.Remove, {
          onClick: () => removeMovie(m6.id)
        }),
        link: `/movie/${m6.id}`
      }))
    ]
  });
}

// src/trending/mod.tsx
function Trending({ apiKey, showIds, movieIds, addShow, addMovie }) {
  const [shows, setShows] = Ge([]);
  const [movies, setMovies] = Ge([]);
  const [loading, setLoading] = Ge(false);
  Le(() => {
    (async () => {
      const api = new Api(apiKey);
      const valid = await api.isApiKeyValid();
      if (valid) {
        setLoading(true);
        const { shows: shows2, movies: movies2 } = await api.fetchTrending();
        setShows(shows2);
        setMovies(movies2);
        setLoading(false);
      }
    })();
  }, [
    apiKey
  ]);
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ q(H1, {
        children: "Trending"
      }),
      shows.map((s2) => /* @__PURE__ */ q(Item, {
        id: s2.id,
        name: s2.name,
        releaseDate: s2.releaseDate ? ot3(s2.releaseDate).format("YYYY") : "",
        posterPath: s2.posterPath,
        status: s2.status,
        action: showIds.includes(s2.id) ? /* @__PURE__ */ q(Icon2.Added, {}) : /* @__PURE__ */ q(Icon2.Add, {
          onClick: () => addShow(s2.id)
        }),
        link: `/show/${s2.id}`
      })),
      movies.map((m6) => /* @__PURE__ */ q(Item, {
        id: m6.id,
        name: m6.name,
        releaseDate: m6.releaseDate ? ot3(m6.releaseDate).format("YYYY") : "",
        posterPath: m6.posterPath,
        status: m6.status,
        action: movieIds.includes(m6.id) ? /* @__PURE__ */ q(Icon2.Added, {}) : /* @__PURE__ */ q(Icon2.Add, {
          onClick: () => addMovie(m6.id)
        }),
        link: `/movie/${m6.id}`
      })),
      loading ? /* @__PURE__ */ q(Loader, {}) : null
    ]
  });
}

// src/settings/form.tsx
var Wrapper7 = Ht2.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  margin-top: 16px;
`;
var Button = Ht2.div`
  border-radius: 6px;
  padding: 6px;
  background-color: ${Color.BgSecondary};
  border: none;
  cursor: pointer;
`;
var Svg2 = Ht2.svg`
  height: 20px;
  width: auto;
  margin: 4px 4px 0 5px;
`;
var Form = {
  Wrapper: Wrapper7,
  Input,
  SaveButton: (props) => /* @__PURE__ */ q(Button, {
    ...props,
    children: /* @__PURE__ */ q(Svg2, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "white",
      children: /* @__PURE__ */ q("path", {
        d: "M18 19H19V6.82843L17.1716 5H16V9H7V5H5V19H6V12H18V19ZM4 3H18L20.7071 5.70711C20.8946 5.89464 21 6.149 21 6.41421V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM8 14V19H16V14H8Z"
      })
    })
  })
};

// src/settings/api-key.tsx
var Svg3 = Ht2.svg`
  height: 0.8rem;
  padding-top: 3px;
`;
function ApiKey({ addApiKey }) {
  const [apiKeyInput, setApiKeyInput] = Ge("");
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ q(H22, {
        children: "TMDB API Key"
      }),
      /* @__PURE__ */ C("div", {
        children: [
          "Add a",
          " ",
          /* @__PURE__ */ q("a", {
            href: "https://www.themoviedb.org/",
            target: "_blank",
            children: /* @__PURE__ */ C(Svg3, {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 273.42 35.52",
              children: [
                /* @__PURE__ */ q("defs", {
                  children: /* @__PURE__ */ C("linearGradient", {
                    id: "linear-gradient",
                    y1: "17.76",
                    x2: "273.42",
                    y2: "17.76",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ q("stop", {
                        offset: "0",
                        "stop-color": "#90cea1"
                      }),
                      /* @__PURE__ */ q("stop", {
                        offset: "0.56",
                        "stop-color": "#3cbec9"
                      }),
                      /* @__PURE__ */ q("stop", {
                        offset: "1",
                        "stop-color": "#00b3e5"
                      })
                    ]
                  })
                }),
                /* @__PURE__ */ q("title", {
                  children: "Asset 3"
                }),
                /* @__PURE__ */ q("g", {
                  id: "Layer_2",
                  "data-name": "Layer 2",
                  children: /* @__PURE__ */ q("g", {
                    id: "Layer_1-2",
                    "data-name": "Layer 1",
                    children: /* @__PURE__ */ q("path", {
                      style: {
                        fill: "url(#linear-gradient)"
                      },
                      d: "M191.85,35.37h63.9A17.67,17.67,0,0,0,273.42,17.7h0A17.67,17.67,0,0,0,255.75,0h-63.9A17.67,17.67,0,0,0,174.18,17.7h0A17.67,17.67,0,0,0,191.85,35.37ZM10.1,35.42h7.8V6.92H28V0H0v6.9H10.1Zm28.1,0H46V8.25h.1L55.05,35.4h6L70.3,8.25h.1V35.4h7.8V0H66.45l-8.2,23.1h-.1L50,0H38.2ZM89.14.12h11.7a33.56,33.56,0,0,1,8.08,1,18.52,18.52,0,0,1,6.67,3.08,15.09,15.09,0,0,1,4.53,5.52,18.5,18.5,0,0,1,1.67,8.25,16.91,16.91,0,0,1-1.62,7.58,16.3,16.3,0,0,1-4.38,5.5,19.24,19.24,0,0,1-6.35,3.37,24.53,24.53,0,0,1-7.55,1.15H89.14Zm7.8,28.2h4a21.66,21.66,0,0,0,5-.55A10.58,10.58,0,0,0,110,26a8.73,8.73,0,0,0,2.68-3.35,11.9,11.9,0,0,0,1-5.08,9.87,9.87,0,0,0-1-4.52,9.17,9.17,0,0,0-2.63-3.18A11.61,11.61,0,0,0,106.22,8a17.06,17.06,0,0,0-4.68-.63h-4.6ZM133.09.12h13.2a32.87,32.87,0,0,1,4.63.33,12.66,12.66,0,0,1,4.17,1.3,7.94,7.94,0,0,1,3,2.72,8.34,8.34,0,0,1,1.15,4.65,7.48,7.48,0,0,1-1.67,5,9.13,9.13,0,0,1-4.43,2.82V17a10.28,10.28,0,0,1,3.18,1,8.51,8.51,0,0,1,2.45,1.85,7.79,7.79,0,0,1,1.57,2.62,9.16,9.16,0,0,1,.55,3.2,8.52,8.52,0,0,1-1.2,4.68,9.32,9.32,0,0,1-3.1,3A13.38,13.38,0,0,1,152.32,35a22.5,22.5,0,0,1-4.73.5h-14.5Zm7.8,14.15h5.65a7.65,7.65,0,0,0,1.78-.2,4.78,4.78,0,0,0,1.57-.65,3.43,3.43,0,0,0,1.13-1.2,3.63,3.63,0,0,0,.42-1.8A3.3,3.3,0,0,0,151,8.6a3.42,3.42,0,0,0-1.23-1.13A6.07,6.07,0,0,0,148,6.9a9.9,9.9,0,0,0-1.85-.18h-5.3Zm0,14.65h7a8.27,8.27,0,0,0,1.83-.2,4.67,4.67,0,0,0,1.67-.7,3.93,3.93,0,0,0,1.23-1.3,3.8,3.8,0,0,0,.47-1.95,3.16,3.16,0,0,0-.62-2,4,4,0,0,0-1.58-1.18,8.23,8.23,0,0,0-2-.55,15.12,15.12,0,0,0-2.05-.15h-5.9Z"
                    })
                  })
                })
              ]
            })
          }),
          " ",
          "API key to add shows and movies."
        ]
      }),
      /* @__PURE__ */ C(Form.Wrapper, {
        children: [
          /* @__PURE__ */ q(Form.Input, {
            type: "password",
            name: "api-key-input",
            value: apiKeyInput,
            onChange: (e) => setApiKeyInput(e.target.value)
          }),
          /* @__PURE__ */ q(Form.SaveButton, {
            onClick: () => {
              if (apiKeyInput !== "") {
                addApiKey(apiKeyInput);
              }
            }
          })
        ]
      })
    ]
  });
}

// src/settings/backup-restore.tsx
var Wrapper8 = Ht2.div`
  margin-top: 12px;
  background-color: ${Color.BgSecondary};
  padding: 12px;
  border-radius: 6px;
  word-break: break-all;
`;
var Code = Ht2.code`
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9rem;
`;
var RestoreDescription = Ht2.div`
  margin-top: 12px;
`;
function BackupRestore({ showIds, movieIds, restoreShowsAndMovies }) {
  const [restoreInput, setRestoreInput] = Ge("");
  const backupObj = JSON.stringify({
    shows: showIds,
    movies: movieIds
  });
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ q(H22, {
        children: "Backup & Restore"
      }),
      /* @__PURE__ */ q("div", {
        children: "1. Copy and store the following text:"
      }),
      /* @__PURE__ */ q(Wrapper8, {
        children: /* @__PURE__ */ q(Code, {
          children: backupObj
        })
      }),
      /* @__PURE__ */ q(RestoreDescription, {
        children: "2. Paste and save the previously exported text:"
      }),
      /* @__PURE__ */ C(Form.Wrapper, {
        children: [
          /* @__PURE__ */ q(Form.Input, {
            type: "text",
            name: "restore-input",
            value: restoreInput,
            onChange: (e) => setRestoreInput(e.target.value)
          }),
          /* @__PURE__ */ q(Form.SaveButton, {
            onClick: () => {
              if (restoreInput !== "") {
                try {
                  restoreShowsAndMovies(JSON.parse(restoreInput));
                } catch (err) {
                  console.warn("Invalid restore input.", err);
                  setRestoreInput("");
                }
              }
            }
          })
        ]
      })
    ]
  });
}

// src/settings/f1.tsx
var A9 = Ht2.a`
  ${linkCss};
`;
var Wrapper9 = Ht2.div`
  display: grid;
  grid-template-columns: 160px auto;
  gap: 4px;
`;
var ToggleWrapper = Ht2.div`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${Color.BgSecondary};
  border-radius: 12px;
  padding: 3px;
  cursor: pointer;
`;
var Toggle = Ht2.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 3px;
  margin: auto;
  width: 18px;
  height: 18px;
  background-color: ${({ active }) => active ? Color.Accent : "white"};
  border-radius: 50%;
  border: solid white 2px;
  transition: transform 0.2s ease-in-out, background-color 0.3s ease-in-out;
  transform: ${({ active }) => active ? "translateX(calc(100% + 6px))" : "translateX(0)"};
`;
var PoweredBy = Ht2.div`
  margin: 12px 0 64px 0;
  font-size: 0.8rem;
`;
function F1({ f1Active, activateF1 }) {
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ q(H22, {
        children: "F1"
      }),
      /* @__PURE__ */ C(Wrapper9, {
        children: [
          /* @__PURE__ */ q("div", {
            children: "Activate F1 calendar:"
          }),
          /* @__PURE__ */ q("div", {
            children: /* @__PURE__ */ q(ToggleWrapper, {
              onClick: () => activateF1(!f1Active),
              children: /* @__PURE__ */ q(Toggle, {
                active: f1Active
              })
            })
          })
        ]
      }),
      /* @__PURE__ */ C(PoweredBy, {
        children: [
          "Powered by",
          " ",
          /* @__PURE__ */ q(A9, {
            href: "https://github.com/sportstimes/f1",
            target: "_blank",
            children: "github.com/sportstimes/f1"
          })
        ]
      })
    ]
  });
}

// src/settings/mod.tsx
var Section = Ht2.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
function Settings({ addApiKey, showIds, movieIds, restoreShowsAndMovies, f1Active, activateF1 }) {
  return /* @__PURE__ */ C(R, {
    children: [
      /* @__PURE__ */ q(H1, {
        children: "Settings"
      }),
      /* @__PURE__ */ q(Section, {
        children: /* @__PURE__ */ q(ApiKey, {
          addApiKey
        })
      }),
      /* @__PURE__ */ q(Section, {
        children: /* @__PURE__ */ q(BackupRestore, {
          showIds,
          movieIds,
          restoreShowsAndMovies
        })
      }),
      /* @__PURE__ */ q(Section, {
        children: /* @__PURE__ */ q(F1, {
          f1Active,
          activateF1
        })
      })
    ]
  });
}

// src/details/shared/elements.tsx
var Background = Ht2.img`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.2;
`;
var Foreground = Ht2.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 24px;
`;
var Tagline = Ht2.div`
  font-size: 1.4rem;
  text-wrap: balance;
`;
var ReleaseYear = Ht2.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.4);
`;
var Genre = Ht2.div`
  display: inline-block;
  vertical-align: top;
  padding: 4px 6px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  margin: 4px 4px 4px 0;
`;
var P5 = Ht2.p`
  margin: 12px 0 12px 0;
  padding: 0;
  text-wrap: balance;
`;
var Grid = Ht2.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 4px;
  margin-bottom: 24px;
`;

// src/details/shared/gallery.tsx
var Wrapper10 = Ht2.div`
  width: 100%;
  display: grid;
  grid-auto-columns: 128px;
  grid-auto-flow: column;
  align-items: start;
  gap: 12px;
  overflow: hidden;
  overflow-x: auto;
`;
var Item2 = Ht2.div`
  display: grid;
  grid-template-rows: auto auto auto;
  margin-bottom: 24px;
`;
var Title2 = Ht2.div`
  font-size: 0.9rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 12px 12px 0 12px;
`;
var Description2 = Ht2.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 12px 0 12px;
`;
var Gallery = ({ title, items }) => {
  if (items?.length) {
    return /* @__PURE__ */ C(R, {
      children: [
        title ? /* @__PURE__ */ q(H22, {
          children: title
        }) : null,
        /* @__PURE__ */ q(Wrapper10, {
          children: items.map((i3) => /* @__PURE__ */ C(Item2, {
            children: [
              i3.link ? /* @__PURE__ */ q(Ka, {
                to: i3.link,
                children: /* @__PURE__ */ q(Poster, {
                  posterPath: i3.posterPath,
                  width: "128px",
                  height: "192px"
                })
              }) : /* @__PURE__ */ q(Poster, {
                posterPath: i3.posterPath,
                width: "128px",
                height: "192px"
              }),
              i3.title ? /* @__PURE__ */ q(Title2, {
                title: i3.title,
                children: i3.title
              }) : null,
              i3.description ? /* @__PURE__ */ q(Description2, {
                title: i3.description,
                children: i3.description
              }) : null
            ]
          }))
        })
      ]
    });
  }
  return null;
};

// src/details/shared/icons.tsx
var SvgImdb = Ht2.svg`
  width: 80px;
  height: auto;
  margin-bottom: 24px;
`;
var Imdb = () => /* @__PURE__ */ C(SvgImdb, {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 575 289.83",
  width: "575",
  height: "289.83",
  children: [
    /* @__PURE__ */ C("defs", {
      children: [
        /* @__PURE__ */ q("path", {
          d: "M575 24.91C573.44 12.15 563.97 1.98 551.91 0C499.05 0 76.18 0 23.32 0C10.11 2.17 0 14.16 0 28.61C0 51.84 0 237.64 0 260.86C0 276.86 12.37 289.83 27.64 289.83C79.63 289.83 495.6 289.83 547.59 289.83C561.65 289.83 573.26 278.82 575 264.57C575 216.64 575 48.87 575 24.91Z",
          id: "d1pwhf9wy2"
        }),
        /* @__PURE__ */ q("path", {
          d: "M69.35 58.24L114.98 58.24L114.98 233.89L69.35 233.89L69.35 58.24Z",
          id: "g5jjnq26yS"
        }),
        /* @__PURE__ */ q("path", {
          d: "M201.2 139.15C197.28 112.38 195.1 97.5 194.67 94.53C192.76 80.2 190.94 67.73 189.2 57.09C185.25 57.09 165.54 57.09 130.04 57.09L130.04 232.74L170.01 232.74L170.15 116.76L186.97 232.74L215.44 232.74L231.39 114.18L231.54 232.74L271.38 232.74L271.38 57.09L211.77 57.09L201.2 139.15Z",
          id: "i3Prh1JpXt"
        }),
        /* @__PURE__ */ q("path", {
          d: "M346.71 93.63C347.21 95.87 347.47 100.95 347.47 108.89C347.47 115.7 347.47 170.18 347.47 176.99C347.47 188.68 346.71 195.84 345.2 198.48C343.68 201.12 339.64 202.43 333.09 202.43C333.09 190.9 333.09 98.66 333.09 87.13C338.06 87.13 341.45 87.66 343.25 88.7C345.05 89.75 346.21 91.39 346.71 93.63ZM367.32 230.95C372.75 229.76 377.31 227.66 381.01 224.67C384.7 221.67 387.29 217.52 388.77 212.21C390.26 206.91 391.14 196.38 391.14 180.63C391.14 174.47 391.14 125.12 391.14 118.95C391.14 102.33 390.49 91.19 389.48 85.53C388.46 79.86 385.93 74.71 381.88 70.09C377.82 65.47 371.9 62.15 364.12 60.13C356.33 58.11 343.63 57.09 321.54 57.09C319.27 57.09 307.93 57.09 287.5 57.09L287.5 232.74L342.78 232.74C355.52 232.34 363.7 231.75 367.32 230.95Z",
          id: "a4ov9rRGQm"
        }),
        /* @__PURE__ */ q("path", {
          d: "M464.76 204.7C463.92 206.93 460.24 208.06 457.46 208.06C454.74 208.06 452.93 206.98 452.01 204.81C451.09 202.65 450.64 197.72 450.64 190C450.64 185.36 450.64 148.22 450.64 143.58C450.64 135.58 451.04 130.59 451.85 128.6C452.65 126.63 454.41 125.63 457.13 125.63C459.91 125.63 463.64 126.76 464.6 129.03C465.55 131.3 466.03 136.15 466.03 143.58C466.03 146.58 466.03 161.58 466.03 188.59C465.74 197.84 465.32 203.21 464.76 204.7ZM406.68 231.21L447.76 231.21C449.47 224.5 450.41 220.77 450.6 220.02C454.32 224.52 458.41 227.9 462.9 230.14C467.37 232.39 474.06 233.51 479.24 233.51C486.45 233.51 492.67 231.62 497.92 227.83C503.16 224.05 506.5 219.57 507.92 214.42C509.34 209.26 510.05 201.42 510.05 190.88C510.05 185.95 510.05 146.53 510.05 141.6C510.05 131 509.81 124.08 509.34 120.83C508.87 117.58 507.47 114.27 505.14 110.88C502.81 107.49 499.42 104.86 494.98 102.98C490.54 101.1 485.3 100.16 479.26 100.16C474.01 100.16 467.29 101.21 462.81 103.28C458.34 105.35 454.28 108.49 450.64 112.7C450.64 108.89 450.64 89.85 450.64 55.56L406.68 55.56L406.68 231.21Z",
          id: "fk968BpsX"
        })
      ]
    }),
    /* @__PURE__ */ q("g", {
      children: /* @__PURE__ */ C("g", {
        children: [
          /* @__PURE__ */ C("g", {
            children: [
              /* @__PURE__ */ q("use", {
                xlinkHref: "#d1pwhf9wy2",
                opacity: "1",
                fill: "#f6c700",
                "fill-opacity": "1"
              }),
              /* @__PURE__ */ q("g", {
                children: /* @__PURE__ */ q("use", {
                  xlinkHref: "#d1pwhf9wy2",
                  opacity: "1",
                  "fill-opacity": "0",
                  stroke: "#000000",
                  "stroke-width": "1",
                  "stroke-opacity": "0"
                })
              })
            ]
          }),
          /* @__PURE__ */ C("g", {
            children: [
              /* @__PURE__ */ q("use", {
                xlinkHref: "#g5jjnq26yS",
                opacity: "1",
                fill: "#000000",
                "fill-opacity": "1"
              }),
              /* @__PURE__ */ q("g", {
                children: /* @__PURE__ */ q("use", {
                  xlinkHref: "#g5jjnq26yS",
                  opacity: "1",
                  "fill-opacity": "0",
                  stroke: "#000000",
                  "stroke-width": "1",
                  "stroke-opacity": "0"
                })
              })
            ]
          }),
          /* @__PURE__ */ C("g", {
            children: [
              /* @__PURE__ */ q("use", {
                xlinkHref: "#i3Prh1JpXt",
                opacity: "1",
                fill: "#000000",
                "fill-opacity": "1"
              }),
              /* @__PURE__ */ q("g", {
                children: /* @__PURE__ */ q("use", {
                  xlinkHref: "#i3Prh1JpXt",
                  opacity: "1",
                  "fill-opacity": "0",
                  stroke: "#000000",
                  "stroke-width": "1",
                  "stroke-opacity": "0"
                })
              })
            ]
          }),
          /* @__PURE__ */ C("g", {
            children: [
              /* @__PURE__ */ q("use", {
                xlinkHref: "#a4ov9rRGQm",
                opacity: "1",
                fill: "#000000",
                "fill-opacity": "1"
              }),
              /* @__PURE__ */ q("g", {
                children: /* @__PURE__ */ q("use", {
                  xlinkHref: "#a4ov9rRGQm",
                  opacity: "1",
                  "fill-opacity": "0",
                  stroke: "#000000",
                  "stroke-width": "1",
                  "stroke-opacity": "0"
                })
              })
            ]
          }),
          /* @__PURE__ */ C("g", {
            children: [
              /* @__PURE__ */ q("use", {
                xlinkHref: "#fk968BpsX",
                opacity: "1",
                fill: "#000000",
                "fill-opacity": "1"
              }),
              /* @__PURE__ */ q("g", {
                children: /* @__PURE__ */ q("use", {
                  xlinkHref: "#fk968BpsX",
                  opacity: "1",
                  "fill-opacity": "0",
                  stroke: "#000000",
                  "stroke-width": "1",
                  "stroke-opacity": "0"
                })
              })
            ]
          })
        ]
      })
    })
  ]
});
var Icon3 = {
  Imdb
};

// src/details/show.tsx
function parseNetworkLogos(networks) {
  const logos = /* @__PURE__ */ new Map();
  const sorted = networks.sort((n1, n2) => n1.id - n2.id);
  for (const network of sorted) {
    if (!logos.has(network.name)) {
      logos.set(network.name, network.logo_path);
    }
  }
  return [
    ...logos.values()
  ];
}
var NetworkLogo = Ht2.img`
  display: inline-block;
  vertical-align: top;
  height: 1.35rem;
  width: auto;
  margin: 4px 4px 4px 0;
  border-top: 4px;
  border-bottom: 4px;
  border-right: 6px;
  border-left: 6px;
  border-style: solid;
  border-color: white;
  background-color: white;
  border-radius: 6px;
`;
function ShowDetails({ apiKey }) {
  const { id } = Pr();
  const [details, setDetails] = Ge();
  const [loading, setLoading] = Ge(false);
  De(() => {
    globalThis.scrollTo(0, 0);
  }, [
    id
  ]);
  Le(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchShowDetails(+id));
        setLoading(false);
      }
    })();
  }, [
    id
  ]);
  if (details) {
    const { poster_path, name, original_name, first_air_date, status, genres, tagline, overview, created_by, number_of_seasons, number_of_episodes, credits, external_ids, networks, similar } = details;
    return /* @__PURE__ */ C(R, {
      children: [
        /* @__PURE__ */ q(Background, {
          src: poster_path
        }),
        /* @__PURE__ */ C(Foreground, {
          children: [
            /* @__PURE__ */ q(H1, {
              style: {
                marginBottom: "6px"
              },
              children: name || original_name
            }),
            /* @__PURE__ */ q(Tagline, {
              children: tagline
            }),
            /* @__PURE__ */ q(ReleaseYear, {
              children: first_air_date ? ot3(first_air_date).format("YYYY") : status
            }),
            genres.map((g7) => /* @__PURE__ */ q(Genre, {
              children: g7.name
            }, g7.id)),
            parseNetworkLogos(networks).map((logo) => /* @__PURE__ */ q(NetworkLogo, {
              src: logo
            }, logo)),
            /* @__PURE__ */ q(P5, {
              children: overview
            }),
            /* @__PURE__ */ C(Grid, {
              children: [
                /* @__PURE__ */ q("div", {
                  children: "Created by:"
                }),
                /* @__PURE__ */ q("div", {
                  children: created_by.map((c3) => c3.name).join(", ")
                }),
                /* @__PURE__ */ q("div", {
                  children: "Seasons:"
                }),
                /* @__PURE__ */ q("div", {
                  children: number_of_seasons
                }),
                /* @__PURE__ */ q("div", {
                  children: "Episodes:"
                }),
                /* @__PURE__ */ q("div", {
                  children: number_of_episodes
                })
              ]
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Cast",
              items: credits?.cast.slice(0, 24).map((c3) => ({
                id: c3.id,
                posterPath: c3.profile_path,
                title: c3.name || c3.original_name,
                description: c3.character,
                link: `/person/${c3.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Crew",
              items: credits?.crew.filter((c3) => c3.job.includes("Producer")).slice(0, 24).map((c3) => ({
                id: c3.id,
                posterPath: c3.profile_path,
                title: c3.name || c3.original_name,
                description: c3.job,
                link: `/person/${c3.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Similar",
              items: similar?.results.slice(0, 24).map((r3) => ({
                id: r3.id,
                posterPath: r3.poster_path,
                title: r3.name || r3.original_name,
                description: r3.first_air_date ? ot3(r3.first_air_date).format("YYYY") : void 0,
                link: `/show/${r3.id}`
              }))
            }),
            /* @__PURE__ */ q("a", {
              href: `https://www.imdb.com/title/${external_ids?.imdb_id}`,
              target: "_blank",
              children: /* @__PURE__ */ q(Icon3.Imdb, {})
            })
          ]
        }),
        loading ? /* @__PURE__ */ q(Loader, {}) : null
      ]
    });
  }
  return null;
}

// src/details/movie.tsx
function humanizeRuntime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const humanized = [];
  if (hours === 1) {
    humanized.push(`${hours} hour`);
  } else if (hours > 1) {
    humanized.push(`${hours} hours`);
  }
  if (minutes === 1) {
    humanized.push(`${minutes} minute`);
  } else if (minutes > 1) {
    humanized.push(`${minutes} minutes`);
  }
  return humanized.join(" ");
}
var NetworkLogo2 = Ht2.img`
  display: inline-block;
  vertical-align: top;
  height: 1.35rem;
  width: auto;
  margin: 4px 4px 4px 0;
  border-top: 4px;
  border-bottom: 4px;
  border-right: 6px;
  border-left: 6px;
  border-style: solid;
  border-color: white;
  background-color: white;
  border-radius: 6px;
`;
function MovieDetails({ apiKey }) {
  const { id } = Pr();
  const [details, setDetails] = Ge();
  const [loading, setLoading] = Ge(false);
  De(() => {
    globalThis.scrollTo(0, 0);
  }, [
    id
  ]);
  Le(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchMovieDetails(+id));
        setLoading(false);
      }
    })();
  }, [
    id
  ]);
  if (details) {
    const { poster_path, title, original_title, release_date, status, genres, tagline, overview, runtime, credits, external_ids, production_companies, budget, revenue, similar } = details;
    const humanizedRuntime = humanizeRuntime(runtime);
    return /* @__PURE__ */ C(R, {
      children: [
        /* @__PURE__ */ q(Background, {
          src: poster_path
        }),
        /* @__PURE__ */ C(Foreground, {
          children: [
            /* @__PURE__ */ q(H1, {
              style: {
                marginBottom: "6px"
              },
              children: title || original_title
            }),
            /* @__PURE__ */ q(Tagline, {
              children: tagline
            }),
            /* @__PURE__ */ q(ReleaseYear, {
              children: release_date ? ot3(release_date).format("YYYY") : status
            }),
            genres.map((g7) => /* @__PURE__ */ q(Genre, {
              children: g7.name
            }, g7.id)),
            production_companies.filter((pc) => pc.logo_path).map((pc) => /* @__PURE__ */ q(NetworkLogo2, {
              src: pc.logo_path
            }, pc.id)),
            /* @__PURE__ */ q(P5, {
              children: overview
            }),
            /* @__PURE__ */ C(Grid, {
              children: [
                humanizedRuntime ? /* @__PURE__ */ C(R, {
                  children: [
                    /* @__PURE__ */ q("div", {
                      children: "Runtime:"
                    }),
                    /* @__PURE__ */ q("div", {
                      children: humanizedRuntime
                    })
                  ]
                }) : null,
                budget > 0 ? /* @__PURE__ */ C(R, {
                  children: [
                    /* @__PURE__ */ q("div", {
                      children: "Budget:"
                    }),
                    /* @__PURE__ */ C("div", {
                      children: [
                        budget.toLocaleString(),
                        " USD"
                      ]
                    })
                  ]
                }) : null,
                revenue > 0 ? /* @__PURE__ */ C(R, {
                  children: [
                    /* @__PURE__ */ q("div", {
                      children: "Revenue:"
                    }),
                    /* @__PURE__ */ C("div", {
                      children: [
                        revenue.toLocaleString(),
                        " USD"
                      ]
                    })
                  ]
                }) : null
              ]
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Cast",
              items: credits?.cast.slice(0, 24).map((c3) => ({
                id: c3.id,
                posterPath: c3.profile_path,
                title: c3.name || c3.original_name,
                description: c3.character,
                link: `/person/${c3.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Crew",
              items: credits?.crew.filter((c3) => c3.job.includes("Producer")).slice(0, 24).map((c3) => ({
                id: c3.id,
                posterPath: c3.profile_path,
                title: c3.name || c3.original_name,
                description: c3.job,
                link: `/person/${c3.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Similar",
              items: similar?.results.slice(0, 24).map((r3) => ({
                id: r3.id,
                posterPath: r3.poster_path,
                title: r3.title || r3.original_title,
                description: r3.release_date ? ot3(r3.release_date).format("YYYY") : void 0,
                link: `/movie/${r3.id}`
              }))
            }),
            /* @__PURE__ */ q("a", {
              href: `https://www.imdb.com/title/${external_ids?.imdb_id}`,
              target: "_blank",
              children: /* @__PURE__ */ q(Icon3.Imdb, {})
            })
          ]
        }),
        loading ? /* @__PURE__ */ q(Loader, {}) : null
      ]
    });
  }
  return null;
}

// src/details/person.tsx
function PersonDetails({ apiKey }) {
  const { id } = Pr();
  const [details, setDetails] = Ge();
  const [loading, setLoading] = Ge(false);
  De(() => {
    globalThis.scrollTo(0, 0);
  }, [
    id
  ]);
  Le(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchPersonDetails(+id));
        setLoading(false);
      }
    })();
  }, [
    id
  ]);
  if (details) {
    const { name, place_of_birth, birthday, biography, images, tv_credits, movie_credits, imdb_id } = details;
    return /* @__PURE__ */ C(R, {
      children: [
        /* @__PURE__ */ C(Foreground, {
          children: [
            /* @__PURE__ */ q(H1, {
              style: {
                marginBottom: "6px"
              },
              children: name
            }),
            /* @__PURE__ */ q(Tagline, {
              children: place_of_birth
            }),
            birthday ? /* @__PURE__ */ C(ReleaseYear, {
              children: [
                ot3(birthday).format("LL"),
                " ",
                "(",
                ot3().from(ot3(birthday), true).replace(" years", ""),
                ")"
              ]
            }) : null,
            /* @__PURE__ */ q(P5, {
              style: {
                marginBottom: "24px"
              },
              children: biography
            }),
            /* @__PURE__ */ q(Gallery, {
              items: images?.profiles.slice(0, 24).map((p6) => ({
                posterPath: p6.file_path
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Shows",
              items: tv_credits?.cast.map((c3) => ({
                id: c3.id,
                posterPath: c3.poster_path,
                title: c3.name,
                description: c3.character,
                link: `/show/${c3.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Movies",
              items: movie_credits?.cast.map((c3) => ({
                id: c3.id,
                posterPath: c3.poster_path,
                title: c3.title,
                description: c3.character,
                link: `/movie/${c3.id}`
              }))
            }),
            /* @__PURE__ */ q("a", {
              href: `https://www.imdb.com/name/${imdb_id}`,
              target: "_blank",
              children: /* @__PURE__ */ q(Icon3.Imdb, {})
            })
          ]
        }),
        loading ? /* @__PURE__ */ q(Loader, {}) : null
      ]
    });
  }
  return null;
}

// src/details/f1.tsx
var Grid2 = Ht2.div`
  display: grid;
  grid-template-columns: 136px 32px 64px 64px;
  gap: 4px;
  margin-bottom: 12px;
`;
function F1Details({ apiKey }) {
  const { id } = Pr();
  const [details, setDetails] = Ge();
  const [loading, setLoading] = Ge(false);
  Le(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchF1Details(+id));
        setLoading(false);
      }
    })();
  }, [
    id
  ]);
  if (details) {
    const { name, location: location2, round, sessions } = details;
    const format1 = "ddd";
    const format2 = "DD. MMM";
    const format3 = "HH:mm";
    return /* @__PURE__ */ C(R, {
      children: [
        /* @__PURE__ */ C(Foreground, {
          children: [
            /* @__PURE__ */ q(H1, {
              style: {
                marginBottom: "6px"
              },
              children: name
            }),
            /* @__PURE__ */ q(Tagline, {
              children: location2
            }),
            /* @__PURE__ */ q(ReleaseYear, {
              style: {
                marginBottom: "12px"
              },
              children: round
            }),
            /* @__PURE__ */ C(Grid2, {
              children: [
                /* @__PURE__ */ q("div", {
                  children: "Free Practice 1:"
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.fp1).format(format1)
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.fp1).format(format2)
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.fp1).format(format3)
                }),
                sessions.fp2 ? /* @__PURE__ */ C(R, {
                  children: [
                    /* @__PURE__ */ q("div", {
                      children: "Free Practice 2:"
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.fp2).format(format1)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.fp2).format(format2)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.fp2).format(format3)
                    })
                  ]
                }) : null,
                sessions.fp3 ? /* @__PURE__ */ C(R, {
                  children: [
                    /* @__PURE__ */ q("div", {
                      children: "Free Practice 3:"
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.fp3).format(format1)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.fp3).format(format2)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.fp3).format(format3)
                    })
                  ]
                }) : null,
                sessions.sprintQualifying ? /* @__PURE__ */ C(R, {
                  children: [
                    /* @__PURE__ */ q("div", {
                      children: "Sprint Qualifying:"
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.sprintQualifying).format(format1)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.sprintQualifying).format(format2)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.sprintQualifying).format(format3)
                    })
                  ]
                }) : null,
                sessions.sprint ? /* @__PURE__ */ C(R, {
                  children: [
                    /* @__PURE__ */ q("div", {
                      children: "Sprint:"
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.sprint).format(format1)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.sprint).format(format2)
                    }),
                    /* @__PURE__ */ q("div", {
                      children: ot3(sessions.sprint).format(format3)
                    })
                  ]
                }) : null
              ]
            }),
            /* @__PURE__ */ C(Grid2, {
              children: [
                /* @__PURE__ */ q("div", {
                  children: "Qualifying:"
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.qualifying).format(format1)
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.qualifying).format(format2)
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.qualifying).format(format3)
                }),
                /* @__PURE__ */ q("div", {
                  children: "Grand Prix:"
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.gp).format(format1)
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.gp).format(format2)
                }),
                /* @__PURE__ */ q("div", {
                  children: ot3(sessions.gp).format(format3)
                })
              ]
            })
          ]
        }),
        loading ? /* @__PURE__ */ q(Loader, {}) : null
      ]
    });
  }
  return null;
}

// src/app.tsx
function App() {
  const [apiKey, setApiKey] = useLocalStorage("WATCHER_TMDB_API_KEY_V1", "");
  const [showIds, setShowIds] = useLocalStorage("WATCHER_SHOW_IDS_V1", []);
  const [movieIds, setMovieIds] = useLocalStorage("WATCHER_MOVIE_IDS_V1", []);
  const [f1Active, setF1Active] = useLocalStorage("WATCHER_F1_ACTIVE_V1", false);
  const [validApiKey, setValidApiKey] = Ge(true);
  const [shows, setShows] = Ge([]);
  const [movies, setMovies] = Ge([]);
  const [f1, setF1] = Ge([]);
  const [loading, setLoading] = Ge(false);
  const addApiKey = (apiKey2) => {
    setApiKey(apiKey2);
  };
  const addShow = (id) => {
    setShowIds([
      .../* @__PURE__ */ new Set([
        ...showIds,
        id
      ])
    ]);
  };
  const addMovie = (id) => {
    setMovieIds([
      .../* @__PURE__ */ new Set([
        ...movieIds,
        id
      ])
    ]);
  };
  const removeShow = (id) => {
    setShowIds(showIds.filter((sid) => sid !== id));
  };
  const removeMovie = (id) => {
    setMovieIds(movieIds.filter((mid) => mid !== id));
  };
  const restoreShowsAndMovies = ({ shows: shows2, movies: movies2 }) => {
    setShowIds(shows2);
    setMovieIds(movies2);
  };
  const activateF1 = (active) => {
    setF1Active(active);
  };
  Le(() => {
    (async () => {
      const api = new Api(apiKey);
      const valid = await api.isApiKeyValid();
      setValidApiKey(valid);
      if (valid) {
        setLoading(true);
        const showList = await api.fetchShows(showIds);
        const movieList = await api.fetchMovies(movieIds);
        const f12 = f1Active ? await api.fetchF1() : [];
        setShows(showList);
        setMovies(movieList);
        setF1(f12);
        setLoading(false);
      }
    })();
  }, [
    showIds.length,
    movieIds.length,
    apiKey,
    f1Active
  ]);
  const items = [
    ...shows.map((s2) => s2.episodes.map((e) => ({
      ...e,
      id: s2.id,
      link: `/show/${s2.id}`
    }))),
    ...movies.map((m6) => ({
      ...m6,
      link: `/movie/${m6.id}`
    })),
    ...f1.map((f4) => ({
      ...f4,
      link: `/f1/${f4.id}`
    }))
  ].flat();
  const recent = items.filter((i3) => ot3(i3?.releaseDate).isBetween(ot3().subtract(500, "year"), ot3())).sort((i1, i22) => ot3(i22.releaseDate).valueOf() - ot3(i1.releaseDate).valueOf());
  const upcoming = items.filter((i3) => ot3(i3?.releaseDate).isBetween(ot3(), ot3().add(500, "year"))).sort((i1, i22) => ot3(i1.releaseDate).valueOf() - ot3(i22.releaseDate).valueOf());
  return /* @__PURE__ */ q(Bu, {
    children: /* @__PURE__ */ C(cn, {
      theme,
      children: [
        /* @__PURE__ */ q(Main, {
          children: /* @__PURE__ */ C(As, {
            children: [
              /* @__PURE__ */ q(Uo, {
                index: true,
                element: /* @__PURE__ */ q(ItemList, {
                  title: "Recent",
                  items: recent
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/library",
                element: /* @__PURE__ */ q(Library, {
                  apiKey,
                  showIds: shows.map((s2) => s2.id),
                  movieIds: movies.map((m6) => m6.id),
                  shows,
                  movies,
                  addShow,
                  addMovie,
                  removeShow,
                  removeMovie
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/upcoming",
                element: /* @__PURE__ */ q(ItemList, {
                  title: "Upcoming",
                  items: upcoming
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/trending",
                element: /* @__PURE__ */ q(Trending, {
                  apiKey,
                  showIds: shows.map((s2) => s2.id),
                  movieIds: movies.map((m6) => m6.id),
                  addShow,
                  addMovie
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/settings",
                element: /* @__PURE__ */ q(Settings, {
                  addApiKey,
                  showIds: shows.map((s2) => s2.id),
                  movieIds: movies.map((m6) => m6.id),
                  restoreShowsAndMovies,
                  f1Active,
                  activateF1
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/show/:id",
                element: /* @__PURE__ */ q(ShowDetails, {
                  apiKey
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/movie/:id",
                element: /* @__PURE__ */ q(MovieDetails, {
                  apiKey
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/person/:id",
                element: /* @__PURE__ */ q(PersonDetails, {
                  apiKey
                })
              }),
              /* @__PURE__ */ q(Uo, {
                path: "/f1/:id",
                element: /* @__PURE__ */ q(F1Details, {
                  apiKey
                })
              })
            ]
          })
        }),
        /* @__PURE__ */ q(Nav, {}),
        /* @__PURE__ */ q(MissingApiKey, {
          missing: apiKey === "",
          invalid: !validApiKey
        }),
        loading ? /* @__PURE__ */ q(Loader, {}) : null,
        /* @__PURE__ */ q(GlobalStyle, {})
      ]
    })
  });
}
Od(document.getElementById("root")).render(/* @__PURE__ */ q(App, {}));
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-router/dist/development/chunk-ZYFC6VSF.mjs:
react-router/dist/development/chunk-HZX6U7MI.mjs:
react-router/dist/development/dom-export.mjs:
  (**
   * react-router v7.8.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
/*! Bundled license information:

react-router/dist/development/chunk-ZYFC6VSF.mjs:
react-router/dist/development/chunk-HZX6U7MI.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.8.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
/*! Bundled license information:

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.8.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

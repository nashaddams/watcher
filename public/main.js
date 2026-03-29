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
var n = (e, r4) => () => (r4 || e((r4 = {
  exports: {}
}).exports, r4), r4.exports);
var f = (e, r4, t, o7) => {
  if (r4 && typeof r4 == "object" || typeof r4 == "function") for (let s3 of a(r4)) !T.call(e, s3) && s3 !== t && j(e, s3, {
    get: () => r4[s3],
    enumerable: !(o7 = v(r4, s3)) || o7.enumerable
  });
  return e;
};
var m = (e, r4, t) => (t = e != null ? p(k(e)) : {}, f(r4 || !e || !e.__esModule ? j(t, "default", {
  value: e,
  enumerable: true
}) : t, e));
var E = n((l6) => {
  "use strict";
  var _8 = Symbol.for("react.transitional.element"), c4 = Symbol.for("react.fragment");
  function x9(e, r4, t) {
    var o7 = null;
    if (t !== void 0 && (o7 = "" + t), r4.key !== void 0 && (o7 = "" + r4.key), "key" in r4) {
      t = {};
      for (var s3 in r4) s3 !== "key" && (t[s3] = r4[s3]);
    } else t = r4;
    return r4 = t.ref, {
      $$typeof: _8,
      type: e,
      key: o7,
      ref: r4 !== void 0 ? r4 : null,
      props: t
    };
  }
  l6.Fragment = c4;
  l6.jsx = x9;
  l6.jsxs = x9;
});
var i = n((P5, d4) => {
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
var z = (e, t, n2, r4) => {
  if (t && typeof t == "object" || typeof t == "function") for (let u6 of b(t)) !q2.call(e, u6) && u6 !== n2 && C2(e, u6, {
    get: () => t[u6],
    enumerable: !(r4 = D(t, u6)) || r4.enumerable
  });
  return e;
};
var G = (e, t, n2) => (n2 = e != null ? x(k2(e)) : {}, z(t || !e || !e.__esModule ? C2(n2, "default", {
  value: e,
  enumerable: true
}) : n2, e));
var M2 = S((o7) => {
  "use strict";
  var v9 = Symbol.for("react.transitional.element"), K8 = Symbol.for("react.portal"), W6 = Symbol.for("react.fragment"), B10 = Symbol.for("react.strict_mode"), Q5 = Symbol.for("react.profiler"), V6 = Symbol.for("react.consumer"), X7 = Symbol.for("react.context"), Z5 = Symbol.for("react.forward_ref"), J6 = Symbol.for("react.suspense"), F6 = Symbol.for("react.memo"), N7 = Symbol.for("react.lazy"), A12 = Symbol.iterator;
  function ee3(e) {
    return e === null || typeof e != "object" ? null : (e = A12 && e[A12] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var j12 = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P5 = Object.assign, H10 = {};
  function _8(e, t, n2) {
    this.props = e, this.context = t, this.refs = H10, this.updater = n2 || j12;
  }
  _8.prototype.isReactComponent = {};
  _8.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  _8.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function I10() {
  }
  I10.prototype = _8.prototype;
  function R7(e, t, n2) {
    this.props = e, this.context = t, this.refs = H10, this.updater = n2 || j12;
  }
  var m6 = R7.prototype = new I10();
  m6.constructor = R7;
  P5(m6, _8.prototype);
  m6.isPureReactComponent = true;
  var w8 = Array.isArray, i3 = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
  }, $4 = Object.prototype.hasOwnProperty;
  function T10(e, t, n2, r4, u6, f4) {
    return n2 = f4.ref, {
      $$typeof: v9,
      type: e,
      key: t,
      ref: n2 !== void 0 ? n2 : null,
      props: f4
    };
  }
  function te4(e, t) {
    return T10(e.type, t, void 0, void 0, void 0, e.props);
  }
  function d4(e) {
    return typeof e == "object" && e !== null && e.$$typeof === v9;
  }
  function ne5(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n2) {
      return t[n2];
    });
  }
  var h5 = /\/+/g;
  function y10(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ne5("" + e.key) : t.toString(36);
  }
  function O6() {
  }
  function re5(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (typeof e.status == "string" ? e.then(O6, O6) : (e.status = "pending", e.then(function(t) {
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
  function a6(e, t, n2, r4, u6) {
    var f4 = typeof e;
    (f4 === "undefined" || f4 === "boolean") && (e = null);
    var s3 = false;
    if (e === null) s3 = true;
    else switch (f4) {
      case "bigint":
      case "string":
      case "number":
        s3 = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case v9:
          case K8:
            s3 = true;
            break;
          case N7:
            return s3 = e._init, a6(s3(e._payload), t, n2, r4, u6);
        }
    }
    if (s3) return u6 = u6(e), s3 = r4 === "" ? "." + y10(e, 0) : r4, w8(u6) ? (n2 = "", s3 != null && (n2 = s3.replace(h5, "$&/") + "/"), a6(u6, t, n2, "", function(Y7) {
      return Y7;
    })) : u6 != null && (d4(u6) && (u6 = te4(u6, n2 + (u6.key == null || e && e.key === u6.key ? "" : ("" + u6.key).replace(h5, "$&/") + "/") + s3)), t.push(u6)), 1;
    s3 = 0;
    var p5 = r4 === "" ? "." : r4 + ":";
    if (w8(e)) for (var c4 = 0; c4 < e.length; c4++) r4 = e[c4], f4 = p5 + y10(r4, c4), s3 += a6(r4, t, n2, f4, u6);
    else if (c4 = ee3(e), typeof c4 == "function") for (e = c4.call(e), c4 = 0; !(r4 = e.next()).done; ) r4 = r4.value, f4 = p5 + y10(r4, c4++), s3 += a6(r4, t, n2, f4, u6);
    else if (f4 === "object") {
      if (typeof e.then == "function") return a6(re5(e), t, n2, r4, u6);
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    return s3;
  }
  function l6(e, t, n2) {
    if (e == null) return e;
    var r4 = [], u6 = 0;
    return a6(e, r4, "", "", function(f4) {
      return t.call(n2, f4, u6++);
    }), r4;
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
  var g8 = typeof reportError == "function" ? reportError : function(e) {
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
  o7.Children = {
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
  o7.Component = _8;
  o7.Fragment = W6;
  o7.Profiler = Q5;
  o7.PureComponent = R7;
  o7.StrictMode = B10;
  o7.Suspense = J6;
  o7.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i3;
  o7.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e) {
      return i3.H.useMemoCache(e);
    }
  };
  o7.cache = function(e) {
    return function() {
      return e.apply(null, arguments);
    };
  };
  o7.cloneElement = function(e, t, n2) {
    if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
    var r4 = P5({}, e.props), u6 = e.key, f4 = void 0;
    if (t != null) for (s3 in t.ref !== void 0 && (f4 = void 0), t.key !== void 0 && (u6 = "" + t.key), t) !$4.call(t, s3) || s3 === "key" || s3 === "__self" || s3 === "__source" || s3 === "ref" && t.ref === void 0 || (r4[s3] = t[s3]);
    var s3 = arguments.length - 2;
    if (s3 === 1) r4.children = n2;
    else if (1 < s3) {
      for (var p5 = Array(s3), c4 = 0; c4 < s3; c4++) p5[c4] = arguments[c4 + 2];
      r4.children = p5;
    }
    return T10(e.type, u6, void 0, void 0, f4, r4);
  };
  o7.createContext = function(e) {
    return e = {
      $$typeof: X7,
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
  o7.createElement = function(e, t, n2) {
    var r4, u6 = {}, f4 = null;
    if (t != null) for (r4 in t.key !== void 0 && (f4 = "" + t.key), t) $4.call(t, r4) && r4 !== "key" && r4 !== "__self" && r4 !== "__source" && (u6[r4] = t[r4]);
    var s3 = arguments.length - 2;
    if (s3 === 1) u6.children = n2;
    else if (1 < s3) {
      for (var p5 = Array(s3), c4 = 0; c4 < s3; c4++) p5[c4] = arguments[c4 + 2];
      u6.children = p5;
    }
    if (e && e.defaultProps) for (r4 in s3 = e.defaultProps, s3) u6[r4] === void 0 && (u6[r4] = s3[r4]);
    return T10(e, f4, void 0, void 0, null, u6);
  };
  o7.createRef = function() {
    return {
      current: null
    };
  };
  o7.forwardRef = function(e) {
    return {
      $$typeof: Z5,
      render: e
    };
  };
  o7.isValidElement = d4;
  o7.lazy = function(e) {
    return {
      $$typeof: N7,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: oe5
    };
  };
  o7.memo = function(e, t) {
    return {
      $$typeof: F6,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  o7.startTransition = function(e) {
    var t = i3.T, n2 = {};
    i3.T = n2;
    try {
      var r4 = e(), u6 = i3.S;
      u6 !== null && u6(n2, r4), typeof r4 == "object" && r4 !== null && typeof r4.then == "function" && r4.then(ue4, g8);
    } catch (f4) {
      g8(f4);
    } finally {
      i3.T = t;
    }
  };
  o7.unstable_useCacheRefresh = function() {
    return i3.H.useCacheRefresh();
  };
  o7.use = function(e) {
    return i3.H.use(e);
  };
  o7.useActionState = function(e, t, n2) {
    return i3.H.useActionState(e, t, n2);
  };
  o7.useCallback = function(e, t) {
    return i3.H.useCallback(e, t);
  };
  o7.useContext = function(e) {
    return i3.H.useContext(e);
  };
  o7.useDebugValue = function() {
  };
  o7.useDeferredValue = function(e, t) {
    return i3.H.useDeferredValue(e, t);
  };
  o7.useEffect = function(e, t, n2) {
    var r4 = i3.H;
    if (typeof n2 == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return r4.useEffect(e, t);
  };
  o7.useId = function() {
    return i3.H.useId();
  };
  o7.useImperativeHandle = function(e, t, n2) {
    return i3.H.useImperativeHandle(e, t, n2);
  };
  o7.useInsertionEffect = function(e, t) {
    return i3.H.useInsertionEffect(e, t);
  };
  o7.useLayoutEffect = function(e, t) {
    return i3.H.useLayoutEffect(e, t);
  };
  o7.useMemo = function(e, t) {
    return i3.H.useMemo(e, t);
  };
  o7.useOptimistic = function(e, t) {
    return i3.H.useOptimistic(e, t);
  };
  o7.useReducer = function(e, t, n2) {
    return i3.H.useReducer(e, t, n2);
  };
  o7.useRef = function(e) {
    return i3.H.useRef(e);
  };
  o7.useState = function(e) {
    return i3.H.useState(e);
  };
  o7.useSyncExternalStore = function(e, t, n2) {
    return i3.H.useSyncExternalStore(e, t, n2);
  };
  o7.useTransition = function() {
    return i3.H.useTransition();
  };
  o7.version = "19.1.1";
});
var U = S((fe5, L3) => {
  "use strict";
  L3.exports = M2();
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
  const e = (m6) => typeof m6.default < "u" ? m6.default : m6, c4 = (m6) => Object.assign({
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
var p2 = ((r4) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(r4, {
  get: (e, t) => (typeof require2 < "u" ? require2 : e)[t]
}) : r4)(function(r4) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + r4 + '" is not supported');
});
var y = (r4, e) => () => (e || r4((e = {
  exports: {}
}).exports, e), e.exports);
var A = (r4, e, t, c4) => {
  if (e && typeof e == "object" || typeof e == "function") for (let a6 of T2(e)) !N.call(r4, a6) && a6 !== t && l(r4, a6, {
    get: () => e[a6],
    enumerable: !(c4 = E3(e, a6)) || c4.enumerable
  });
  return r4;
};
var D2 = (r4, e, t) => (t = r4 != null ? S2(R2(r4)) : {}, A(e || !r4 || !r4.__esModule ? l(t, "default", {
  value: r4,
  enumerable: true
}) : t, r4));
var _ = y((i3) => {
  "use strict";
  var h5 = p2("react");
  function o7(r4) {
    var e = "https://react.dev/errors/" + r4;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + r4 + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f4() {
  }
  var n2 = {
    d: {
      f: f4,
      r: function() {
        throw Error(o7(522));
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
  }, P5 = Symbol.for("react.portal");
  function C8(r4, e, t) {
    var c4 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P5,
      key: c4 == null ? null : "" + c4,
      children: r4,
      containerInfo: e,
      implementation: t
    };
  }
  var u6 = h5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s3(r4, e) {
    if (r4 === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  i3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n2;
  i3.createPortal = function(r4, e) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(o7(299));
    return C8(r4, e, null, t);
  };
  i3.flushSync = function(r4) {
    var e = u6.T, t = n2.p;
    try {
      if (u6.T = null, n2.p = 2, r4) return r4();
    } finally {
      u6.T = e, n2.p = t, n2.d.f();
    }
  };
  i3.preconnect = function(r4, e) {
    typeof r4 == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n2.d.C(r4, e));
  };
  i3.prefetchDNS = function(r4) {
    typeof r4 == "string" && n2.d.D(r4);
  };
  i3.preinit = function(r4, e) {
    if (typeof r4 == "string" && e && typeof e.as == "string") {
      var t = e.as, c4 = s3(t, e.crossOrigin), a6 = typeof e.integrity == "string" ? e.integrity : void 0, g8 = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      t === "style" ? n2.d.S(r4, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: c4,
        integrity: a6,
        fetchPriority: g8
      }) : t === "script" && n2.d.X(r4, {
        crossOrigin: c4,
        integrity: a6,
        fetchPriority: g8,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  i3.preinitModule = function(r4, e) {
    if (typeof r4 == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var t = s3(e.as, e.crossOrigin);
        n2.d.M(r4, {
          crossOrigin: t,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && n2.d.M(r4);
  };
  i3.preload = function(r4, e) {
    if (typeof r4 == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var t = e.as, c4 = s3(t, e.crossOrigin);
      n2.d.L(r4, t, {
        crossOrigin: c4,
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
  i3.preloadModule = function(r4, e) {
    if (typeof r4 == "string") if (e) {
      var t = s3(e.as, e.crossOrigin);
      n2.d.m(r4, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: t,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else n2.d.m(r4);
  };
  i3.requestFormReset = function(r4) {
    n2.d.r(r4);
  };
  i3.unstable_batchedUpdates = function(r4, e) {
    return r4(e);
  };
  i3.useFormState = function(r4, e, t) {
    return u6.H.useFormState(r4, e, t);
  };
  i3.useFormStatus = function() {
    return u6.H.useHostTransitionStatus();
  };
  i3.version = "19.1.1";
});
var v2 = y((M7, O6) => {
  "use strict";
  function m6() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m6);
    } catch (r4) {
      console.error(r4);
    }
  }
  m6(), O6.exports = _();
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
  if (n2 && typeof n2 == "object" || typeof n2 == "function") for (let a6 of X(n2)) !$.call(e, a6) && a6 !== l6 && F2(e, a6, {
    get: () => n2[a6],
    enumerable: !(t = K2(n2, a6)) || t.enumerable
  });
  return e;
};
var h = (e, n2, l6) => (l6 = e != null ? J(Z(e)) : {}, x3(n2 || !e || !e.__esModule ? F2(l6, "default", {
  value: e,
  enumerable: true
}) : l6, e));
var z3 = Y2((r4) => {
  "use strict";
  function H10(e, n2) {
    var l6 = e.length;
    e.push(n2);
    e: for (; 0 < l6; ) {
      var t = l6 - 1 >>> 1, a6 = e[t];
      if (0 < w8(a6, n2)) e[t] = n2, e[l6] = a6, l6 = t;
      else break e;
    }
  }
  function o7(e) {
    return e.length === 0 ? null : e[0];
  }
  function T10(e) {
    if (e.length === 0) return null;
    var n2 = e[0], l6 = e.pop();
    if (l6 !== n2) {
      e[0] = l6;
      e: for (var t = 0, a6 = e.length, k10 = a6 >>> 1; t < k10; ) {
        var m6 = 2 * (t + 1) - 1, j12 = e[m6], f4 = m6 + 1, P5 = e[f4];
        if (0 > w8(j12, l6)) f4 < a6 && 0 > w8(P5, j12) ? (e[t] = P5, e[f4] = l6, t = f4) : (e[t] = j12, e[m6] = l6, t = m6);
        else if (f4 < a6 && 0 > w8(P5, l6)) e[t] = P5, e[f4] = l6, t = f4;
        else break e;
      }
    }
    return n2;
  }
  function w8(e, n2) {
    var l6 = e.sortIndex - n2.sortIndex;
    return l6 !== 0 ? l6 : e.id - n2.id;
  }
  r4.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function" ? (B10 = performance, r4.unstable_now = function() {
    return B10.now();
  }) : (q10 = Date, D11 = q10.now(), r4.unstable_now = function() {
    return q10.now() - D11;
  });
  var B10, q10, D11, i3 = [], c4 = [], ee3 = 1, s3 = null, u6 = 3, N7 = false, d4 = false, v9 = false, R7 = false, L3 = typeof setTimeout == "function" ? setTimeout : null, M7 = typeof clearTimeout == "function" ? clearTimeout : null, E14 = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  function C8(e) {
    for (var n2 = o7(c4); n2 !== null; ) {
      if (n2.callback === null) T10(c4);
      else if (n2.startTime <= e) T10(c4), n2.sortIndex = n2.expirationTime, H10(i3, n2);
      else break;
      n2 = o7(c4);
    }
  }
  function S10(e) {
    if (v9 = false, C8(e), !d4) if (o7(i3) !== null) d4 = true, _8 || (_8 = true, b10());
    else {
      var n2 = o7(c4);
      n2 !== null && U5(S10, n2.startTime - e);
    }
  }
  var _8 = false, y10 = -1, O6 = 5, V6 = -1;
  function W6() {
    return R7 ? true : !(r4.unstable_now() - V6 < O6);
  }
  function I10() {
    if (R7 = false, _8) {
      var e = r4.unstable_now();
      V6 = e;
      var n2 = true;
      try {
        e: {
          d4 = false, v9 && (v9 = false, M7(y10), y10 = -1), N7 = true;
          var l6 = u6;
          try {
            n: {
              for (C8(e), s3 = o7(i3); s3 !== null && !(s3.expirationTime > e && W6()); ) {
                var t = s3.callback;
                if (typeof t == "function") {
                  s3.callback = null, u6 = s3.priorityLevel;
                  var a6 = t(s3.expirationTime <= e);
                  if (e = r4.unstable_now(), typeof a6 == "function") {
                    s3.callback = a6, C8(e), n2 = true;
                    break n;
                  }
                  s3 === o7(i3) && T10(i3), C8(e);
                } else T10(i3);
                s3 = o7(i3);
              }
              if (s3 !== null) n2 = true;
              else {
                var k10 = o7(c4);
                k10 !== null && U5(S10, k10.startTime - e), n2 = false;
              }
            }
            break e;
          } finally {
            s3 = null, u6 = l6, N7 = false;
          }
          n2 = void 0;
        }
      } finally {
        n2 ? b10() : _8 = false;
      }
    }
  }
  var b10;
  typeof E14 == "function" ? b10 = function() {
    E14(I10);
  } : typeof MessageChannel < "u" ? (p5 = new MessageChannel(), Q5 = p5.port2, p5.port1.onmessage = I10, b10 = function() {
    Q5.postMessage(null);
  }) : b10 = function() {
    L3(I10, 0);
  };
  var p5, Q5;
  function U5(e, n2) {
    y10 = L3(function() {
      e(r4.unstable_now());
    }, n2);
  }
  r4.unstable_IdlePriority = 5;
  r4.unstable_ImmediatePriority = 1;
  r4.unstable_LowPriority = 4;
  r4.unstable_NormalPriority = 3;
  r4.unstable_Profiling = null;
  r4.unstable_UserBlockingPriority = 2;
  r4.unstable_cancelCallback = function(e) {
    e.callback = null;
  };
  r4.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O6 = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  r4.unstable_getCurrentPriorityLevel = function() {
    return u6;
  };
  r4.unstable_next = function(e) {
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
  r4.unstable_requestPaint = function() {
    R7 = true;
  };
  r4.unstable_runWithPriority = function(e, n2) {
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
  r4.unstable_scheduleCallback = function(e, n2, l6) {
    var t = r4.unstable_now();
    switch (typeof l6 == "object" && l6 !== null ? (l6 = l6.delay, l6 = typeof l6 == "number" && 0 < l6 ? t + l6 : t) : l6 = t, e) {
      case 1:
        var a6 = -1;
        break;
      case 2:
        a6 = 250;
        break;
      case 5:
        a6 = 1073741823;
        break;
      case 4:
        a6 = 1e4;
        break;
      default:
        a6 = 5e3;
    }
    return a6 = l6 + a6, e = {
      id: ee3++,
      callback: n2,
      priorityLevel: e,
      startTime: l6,
      expirationTime: a6,
      sortIndex: -1
    }, l6 > t ? (e.sortIndex = l6, H10(c4, e), o7(i3) === null && e === o7(c4) && (v9 ? (M7(y10), y10 = -1) : v9 = true, U5(S10, l6 - t))) : (e.sortIndex = a6, H10(i3, e), d4 || N7 || (d4 = true, _8 || (_8 = true, b10()))), e;
  };
  r4.unstable_shouldYield = W6;
  r4.unstable_wrapCallback = function(e) {
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
var G3 = Y2((te4, A12) => {
  "use strict";
  A12.exports = z3();
});
var g = h(G3());
var { unstable_now: ae2, unstable_IdlePriority: re, unstable_ImmediatePriority: ue, unstable_LowPriority: se, unstable_NormalPriority: oe, unstable_Profiling: ie, unstable_UserBlockingPriority: ce2, unstable_cancelCallback: fe, unstable_forceFrameRate: be2, unstable_getCurrentPriorityLevel: _e2, unstable_next: de2, unstable_requestPaint: ve2, unstable_runWithPriority: ye2, unstable_scheduleCallback: ke2, unstable_shouldYield: me2, unstable_wrapCallback: Pe2 } = g;
var we2 = g.default ?? g;

// deno:https://esm.sh/react-dom@19.1.1/X-ZXJlYWN0/es2022/client.mjs
var require3 = (n2) => {
  const e = (m6) => typeof m6.default < "u" ? m6.default : m6, c4 = (m6) => Object.assign({
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
  get: (u6, a6) => (typeof require3 < "u" ? require3 : u6)[a6]
}) : l6)(function(l6) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + l6 + '" is not supported');
});
var Ge2 = (l6, u6) => () => (u6 || l6((u6 = {
  exports: {}
}).exports, u6), u6.exports);
var wv = (l6, u6, a6, t) => {
  if (u6 && typeof u6 == "object" || typeof u6 == "function") for (let n2 of pv(u6)) !Wv.call(l6, n2) && n2 !== a6 && Xe(l6, n2, {
    get: () => u6[n2],
    enumerable: !(t = Lv(u6, n2)) || t.enumerable
  });
  return l6;
};
var $v = (l6, u6, a6) => (a6 = l6 != null ? Cv(Jv(l6)) : {}, wv(u6 || !l6 || !l6.__esModule ? Xe(a6, "default", {
  value: l6,
  enumerable: true
}) : a6, l6));
var Zv = Ge2((yf) => {
  "use strict";
  var I10 = Sf("scheduler"), t0 = Sf("react"), Fv = Sf("react-dom");
  function A12(l6) {
    var u6 = "https://react.dev/errors/" + l6;
    if (1 < arguments.length) {
      u6 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a6 = 2; a6 < arguments.length; a6++) u6 += "&args[]=" + encodeURIComponent(arguments[a6]);
    }
    return "Minified React error #" + l6 + "; visit " + u6 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n0(l6) {
    return !(!l6 || l6.nodeType !== 1 && l6.nodeType !== 9 && l6.nodeType !== 11);
  }
  function Ht3(l6) {
    var u6 = l6, a6 = l6;
    if (l6.alternate) for (; u6.return; ) u6 = u6.return;
    else {
      l6 = u6;
      do
        u6 = l6, (u6.flags & 4098) !== 0 && (a6 = u6.return), l6 = u6.return;
      while (l6);
    }
    return u6.tag === 3 ? a6 : null;
  }
  function f0(l6) {
    if (l6.tag === 13) {
      var u6 = l6.memoizedState;
      if (u6 === null && (l6 = l6.alternate, l6 !== null && (u6 = l6.memoizedState)), u6 !== null) return u6.dehydrated;
    }
    return null;
  }
  function Qe5(l6) {
    if (Ht3(l6) !== l6) throw Error(A12(188));
  }
  function kv(l6) {
    var u6 = l6.alternate;
    if (!u6) {
      if (u6 = Ht3(l6), u6 === null) throw Error(A12(188));
      return u6 !== l6 ? null : l6;
    }
    for (var a6 = l6, t = u6; ; ) {
      var n2 = a6.return;
      if (n2 === null) break;
      var f4 = n2.alternate;
      if (f4 === null) {
        if (t = n2.return, t !== null) {
          a6 = t;
          continue;
        }
        break;
      }
      if (n2.child === f4.child) {
        for (f4 = n2.child; f4; ) {
          if (f4 === a6) return Qe5(n2), l6;
          if (f4 === t) return Qe5(n2), u6;
          f4 = f4.sibling;
        }
        throw Error(A12(188));
      }
      if (a6.return !== t.return) a6 = n2, t = f4;
      else {
        for (var c4 = false, e = n2.child; e; ) {
          if (e === a6) {
            c4 = true, a6 = n2, t = f4;
            break;
          }
          if (e === t) {
            c4 = true, t = n2, a6 = f4;
            break;
          }
          e = e.sibling;
        }
        if (!c4) {
          for (e = f4.child; e; ) {
            if (e === a6) {
              c4 = true, a6 = f4, t = n2;
              break;
            }
            if (e === t) {
              c4 = true, t = f4, a6 = n2;
              break;
            }
            e = e.sibling;
          }
          if (!c4) throw Error(A12(189));
        }
      }
      if (a6.alternate !== t) throw Error(A12(190));
    }
    if (a6.tag !== 3) throw Error(A12(188));
    return a6.stateNode.current === a6 ? l6 : u6;
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
  var j12 = Object.assign, rv = Symbol.for("react.element"), Ct3 = Symbol.for("react.transitional.element"), $a = Symbol.for("react.portal"), ta = Symbol.for("react.fragment"), e0 = Symbol.for("react.strict_mode"), Jf = Symbol.for("react.profiler"), Iv = Symbol.for("react.provider"), i0 = Symbol.for("react.consumer"), $l = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Wf = Symbol.for("react.suspense"), wf = Symbol.for("react.suspense_list"), Kc = Symbol.for("react.memo"), vu = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  var $f = Symbol.for("react.activity");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.tracing_marker");
  var Pv = Symbol.for("react.memo_cache_sentinel");
  Symbol.for("react.view_transition");
  var Ze4 = Symbol.iterator;
  function ja(l6) {
    return l6 === null || typeof l6 != "object" ? null : (l6 = Ze4 && l6[Ze4] || l6["@@iterator"], typeof l6 == "function" ? l6 : null);
  }
  var lh = Symbol.for("react.client.reference");
  function Ff(l6) {
    if (l6 == null) return null;
    if (typeof l6 == "function") return l6.$$typeof === lh ? null : l6.displayName || l6.name || null;
    if (typeof l6 == "string") return l6;
    switch (l6) {
      case ta:
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
      case $a:
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
      case vu:
        u6 = l6._payload, l6 = l6._init;
        try {
          return Ff(l6(u6));
        } catch {
        }
    }
    return null;
  }
  var Fa2 = Array.isArray, s3 = t0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, o7 = Fv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qu = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, kf = [], na2 = -1;
  function Cl(l6) {
    return {
      current: l6
    };
  }
  function tl2(l6) {
    0 > na2 || (l6.current = kf[na2], kf[na2] = null, na2--);
  }
  function C8(l6, u6) {
    na2++, kf[na2] = l6.current, l6.current = u6;
  }
  var Vl = Cl(null), dt2 = Cl(null), Tu = Cl(null), Tn = Cl(null);
  function Mn2(l6, u6) {
    switch (C8(Tu, u6), C8(dt2, l6), C8(Vl, null), u6.nodeType) {
      case 9:
      case 11:
        l6 = (l6 = u6.documentElement) && (l6 = l6.namespaceURI) ? Li2(l6) : 0;
        break;
      default:
        if (l6 = u6.tagName, u6 = u6.namespaceURI) u6 = Li2(u6), l6 = Uv(u6, l6);
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
    tl2(Vl), C8(Vl, l6);
  }
  function Oa2() {
    tl2(Vl), tl2(dt2), tl2(Tu);
  }
  function rf(l6) {
    l6.memoizedState !== null && C8(Tn, l6);
    var u6 = Vl.current, a6 = Uv(u6, l6.type);
    u6 !== a6 && (C8(dt2, l6), C8(Vl, a6));
  }
  function En2(l6) {
    dt2.current === l6 && (tl2(Vl), tl2(dt2)), Tn.current === l6 && (tl2(Tn), Dt4._currentValue = Qu);
  }
  var If = Object.prototype.hasOwnProperty, Cc = I10.unstable_scheduleCallback, mf = I10.unstable_cancelCallback, uh = I10.unstable_shouldYield, ah = I10.unstable_requestPaint, jl2 = I10.unstable_now, th = I10.unstable_getCurrentPriorityLevel, v0 = I10.unstable_ImmediatePriority, h0 = I10.unstable_UserBlockingPriority, Dn3 = I10.unstable_NormalPriority, nh = I10.unstable_LowPriority, y0 = I10.unstable_IdlePriority, fh = I10.log, ch = I10.unstable_setDisableYieldValue, Nt2 = null, Tl = null;
  function gu2(l6) {
    if (typeof fh == "function" && ch(l6), Tl && typeof Tl.setStrictMode == "function") try {
      Tl.setStrictMode(Nt2, l6);
    } catch {
    }
  }
  var Ml = Math.clz32 ? Math.clz32 : vh, eh = Math.log, ih = Math.LN2;
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
  function Fn2(l6, u6, a6) {
    var t = l6.pendingLanes;
    if (t === 0) return 0;
    var n2 = 0, f4 = l6.suspendedLanes, c4 = l6.pingedLanes;
    l6 = l6.warmLanes;
    var e = t & 134217727;
    return e !== 0 ? (t = e & ~f4, t !== 0 ? n2 = _u(t) : (c4 &= e, c4 !== 0 ? n2 = _u(c4) : a6 || (a6 = e & ~l6, a6 !== 0 && (n2 = _u(a6))))) : (e = t & ~f4, e !== 0 ? n2 = _u(e) : c4 !== 0 ? n2 = _u(c4) : a6 || (a6 = t & ~l6, a6 !== 0 && (n2 = _u(a6)))), n2 === 0 ? 0 : u6 !== 0 && u6 !== n2 && (u6 & f4) === 0 && (f4 = n2 & -n2, a6 = u6 & -u6, f4 >= a6 || f4 === 32 && (a6 & 4194048) !== 0) ? u6 : n2;
  }
  function qt2(l6, u6) {
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
    for (var u6 = [], a6 = 0; 31 > a6; a6++) u6.push(l6);
    return u6;
  }
  function Bt2(l6, u6) {
    l6.pendingLanes |= u6, u6 !== 268435456 && (l6.suspendedLanes = 0, l6.pingedLanes = 0, l6.warmLanes = 0);
  }
  function yh(l6, u6, a6, t, n2, f4) {
    var c4 = l6.pendingLanes;
    l6.pendingLanes = a6, l6.suspendedLanes = 0, l6.pingedLanes = 0, l6.warmLanes = 0, l6.expiredLanes &= a6, l6.entangledLanes &= a6, l6.errorRecoveryDisabledLanes &= a6, l6.shellSuspendCounter = 0;
    var e = l6.entanglements, i3 = l6.expirationTimes, d4 = l6.hiddenUpdates;
    for (a6 = c4 & ~a6; 0 < a6; ) {
      var g8 = 31 - Ml(a6), z10 = 1 << g8;
      e[g8] = 0, i3[g8] = -1;
      var S10 = d4[g8];
      if (S10 !== null) for (d4[g8] = null, g8 = 0; g8 < S10.length; g8++) {
        var m6 = S10[g8];
        m6 !== null && (m6.lane &= -536870913);
      }
      a6 &= ~z10;
    }
    t !== 0 && m0(l6, t, 0), f4 !== 0 && n2 === 0 && l6.tag !== 0 && (l6.suspendedLanes |= f4 & ~(c4 & ~u6));
  }
  function m0(l6, u6, a6) {
    l6.pendingLanes |= u6, l6.suspendedLanes &= ~u6;
    var t = 31 - Ml(u6);
    l6.entangledLanes |= u6, l6.entanglements[t] = l6.entanglements[t] | 1073741824 | a6 & 4194090;
  }
  function g0(l6, u6) {
    var a6 = l6.entangledLanes |= u6;
    for (l6 = l6.entanglements; a6; ) {
      var t = 31 - Ml(a6), n2 = 1 << t;
      n2 & u6 | l6[t] & u6 && (l6[t] |= u6), a6 &= ~n2;
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
    var l6 = o7.p;
    return l6 !== 0 ? l6 : (l6 = window.event, l6 === void 0 ? 32 : Gv(l6.type));
  }
  function dh(l6, u6) {
    var a6 = o7.p;
    try {
      return o7.p = l6, u6();
    } finally {
      o7.p = a6;
    }
  }
  var Ru2 = Math.random().toString(36).slice(2), el2 = "__reactFiber$" + Ru2, Sl = "__reactProps$" + Ru2, Xa3 = "__reactContainer$" + Ru2, Pf = "__reactEvents$" + Ru2, Sh = "__reactListeners$" + Ru2, mh = "__reactHandles$" + Ru2, xe5 = "__reactResources$" + Ru2, Rt3 = "__reactMarker$" + Ru2;
  function Jc(l6) {
    delete l6[el2], delete l6[Sl], delete l6[Pf], delete l6[Sh], delete l6[mh];
  }
  function fa(l6) {
    var u6 = l6[el2];
    if (u6) return u6;
    for (var a6 = l6.parentNode; a6; ) {
      if (u6 = a6[Xa3] || a6[el2]) {
        if (a6 = u6.alternate, u6.child !== null || a6 !== null && a6.child !== null) for (l6 = Wi3(l6); l6 !== null; ) {
          if (a6 = l6[el2]) return a6;
          l6 = Wi3(l6);
        }
        return u6;
      }
      l6 = a6, a6 = l6.parentNode;
    }
    return null;
  }
  function Ga2(l6) {
    if (l6 = l6[el2] || l6[Xa3]) {
      var u6 = l6.tag;
      if (u6 === 5 || u6 === 6 || u6 === 13 || u6 === 26 || u6 === 27 || u6 === 3) return l6;
    }
    return null;
  }
  function ka(l6) {
    var u6 = l6.tag;
    if (u6 === 5 || u6 === 26 || u6 === 27 || u6 === 6) return l6.stateNode;
    throw Error(A12(33));
  }
  function ga(l6) {
    var u6 = l6[xe5];
    return u6 || (u6 = l6[xe5] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), u6;
  }
  function ul2(l6) {
    l6[Rt3] = true;
  }
  var z0 = /* @__PURE__ */ new Set(), A0 = {};
  function wu(l6, u6) {
    sa(l6, u6), sa(l6 + "Capture", u6);
  }
  function sa(l6, u6) {
    for (A0[l6] = u6, l6 = 0; l6 < u6.length; l6++) z0.add(u6[l6]);
  }
  var gh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ve3 = {}, je7 = {};
  function bh(l6) {
    return If.call(je7, l6) ? true : If.call(Ve3, l6) ? false : gh.test(l6) ? je7[l6] = true : (Ve3[l6] = true, false);
  }
  function fn2(l6, u6, a6) {
    if (bh(u6)) if (a6 === null) l6.removeAttribute(u6);
    else {
      switch (typeof a6) {
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
      l6.setAttribute(u6, "" + a6);
    }
  }
  function Jt3(l6, u6, a6) {
    if (a6 === null) l6.removeAttribute(u6);
    else {
      switch (typeof a6) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l6.removeAttribute(u6);
          return;
      }
      l6.setAttribute(u6, "" + a6);
    }
  }
  function pl3(l6, u6, a6, t) {
    if (t === null) l6.removeAttribute(a6);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l6.removeAttribute(a6);
          return;
      }
      l6.setAttributeNS(u6, a6, "" + t);
    }
  }
  var bf, Ke5;
  function la(l6) {
    if (bf === void 0) try {
      throw Error();
    } catch (a6) {
      var u6 = a6.stack.trim().match(/\n( *(at )?)/);
      bf = u6 && u6[1] || "", Ke5 = -1 < a6.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a6.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + bf + l6 + Ke5;
  }
  var zf = false;
  function Af(l6, u6) {
    if (!l6 || zf) return "";
    zf = true;
    var a6 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = {
        DetermineComponentFrameRoot: function() {
          try {
            if (u6) {
              var z10 = function() {
                throw Error();
              };
              if (Object.defineProperty(z10.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z10, []);
                } catch (m6) {
                  var S10 = m6;
                }
                Reflect.construct(l6, [], z10);
              } else {
                try {
                  z10.call();
                } catch (m6) {
                  S10 = m6;
                }
                l6.call(z10.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m6) {
                S10 = m6;
              }
              (z10 = l6()) && typeof z10.catch == "function" && z10.catch(function() {
              });
            }
          } catch (m6) {
            if (m6 && S10 && typeof m6.stack == "string") return [
              m6.stack,
              S10.stack
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
      var f4 = t.DetermineComponentFrameRoot(), c4 = f4[0], e = f4[1];
      if (c4 && e) {
        var i3 = c4.split(`
`), d4 = e.split(`
`);
        for (n2 = t = 0; t < i3.length && !i3[t].includes("DetermineComponentFrameRoot"); ) t++;
        for (; n2 < d4.length && !d4[n2].includes("DetermineComponentFrameRoot"); ) n2++;
        if (t === i3.length || n2 === d4.length) for (t = i3.length - 1, n2 = d4.length - 1; 1 <= t && 0 <= n2 && i3[t] !== d4[n2]; ) n2--;
        for (; 1 <= t && 0 <= n2; t--, n2--) if (i3[t] !== d4[n2]) {
          if (t !== 1 || n2 !== 1) do
            if (t--, n2--, 0 > n2 || i3[t] !== d4[n2]) {
              var g8 = `
` + i3[t].replace(" at new ", " at ");
              return l6.displayName && g8.includes("<anonymous>") && (g8 = g8.replace("<anonymous>", l6.displayName)), g8;
            }
          while (1 <= t && 0 <= n2);
          break;
        }
      }
    } finally {
      zf = false, Error.prepareStackTrace = a6;
    }
    return (a6 = l6 ? l6.displayName || l6.name : "") ? la(a6) : "";
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
    } catch (a6) {
      return `
Error generating stack: ` + a6.message + `
` + a6.stack;
    }
  }
  function Ul(l6) {
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
    var u6 = T0(l6) ? "checked" : "value", a6 = Object.getOwnPropertyDescriptor(l6.constructor.prototype, u6), t = "" + l6[u6];
    if (!l6.hasOwnProperty(u6) && typeof a6 < "u" && typeof a6.get == "function" && typeof a6.set == "function") {
      var n2 = a6.get, f4 = a6.set;
      return Object.defineProperty(l6, u6, {
        configurable: true,
        get: function() {
          return n2.call(this);
        },
        set: function(c4) {
          t = "" + c4, f4.call(this, c4);
        }
      }), Object.defineProperty(l6, u6, {
        enumerable: a6.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(c4) {
          t = "" + c4;
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
    var a6 = u6.getValue(), t = "";
    return l6 && (t = T0(l6) ? l6.checked ? "true" : "false" : l6.value), l6 = t, l6 !== a6 ? (u6.setValue(l6), true) : false;
  }
  function sn3(l6) {
    if (l6 = l6 || (typeof document < "u" ? document : void 0), typeof l6 > "u") return null;
    try {
      return l6.activeElement || l6.body;
    } catch {
      return l6.body;
    }
  }
  var Th = /[\n"\\]/g;
  function ql3(l6) {
    return l6.replace(Th, function(u6) {
      return "\\" + u6.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l6, u6, a6, t, n2, f4, c4, e) {
    l6.name = "", c4 != null && typeof c4 != "function" && typeof c4 != "symbol" && typeof c4 != "boolean" ? l6.type = c4 : l6.removeAttribute("type"), u6 != null ? c4 === "number" ? (u6 === 0 && l6.value === "" || l6.value != u6) && (l6.value = "" + Ul(u6)) : l6.value !== "" + Ul(u6) && (l6.value = "" + Ul(u6)) : c4 !== "submit" && c4 !== "reset" || l6.removeAttribute("value"), u6 != null ? uc(l6, c4, Ul(u6)) : a6 != null ? uc(l6, c4, Ul(a6)) : t != null && l6.removeAttribute("value"), n2 == null && f4 != null && (l6.defaultChecked = !!f4), n2 != null && (l6.checked = n2 && typeof n2 != "function" && typeof n2 != "symbol"), e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" ? l6.name = "" + Ul(e) : l6.removeAttribute("name");
  }
  function E0(l6, u6, a6, t, n2, f4, c4, e) {
    if (f4 != null && typeof f4 != "function" && typeof f4 != "symbol" && typeof f4 != "boolean" && (l6.type = f4), u6 != null || a6 != null) {
      if (!(f4 !== "submit" && f4 !== "reset" || u6 != null)) return;
      a6 = a6 != null ? "" + Ul(a6) : "", u6 = u6 != null ? "" + Ul(u6) : a6, e || u6 === l6.value || (l6.value = u6), l6.defaultValue = u6;
    }
    t = t ?? n2, t = typeof t != "function" && typeof t != "symbol" && !!t, l6.checked = e ? l6.checked : !!t, l6.defaultChecked = !!t, c4 != null && typeof c4 != "function" && typeof c4 != "symbol" && typeof c4 != "boolean" && (l6.name = c4);
  }
  function uc(l6, u6, a6) {
    u6 === "number" && sn3(l6.ownerDocument) === l6 || l6.defaultValue === "" + a6 || (l6.defaultValue = "" + a6);
  }
  function ba2(l6, u6, a6, t) {
    if (l6 = l6.options, u6) {
      u6 = {};
      for (var n2 = 0; n2 < a6.length; n2++) u6["$" + a6[n2]] = true;
      for (a6 = 0; a6 < l6.length; a6++) n2 = u6.hasOwnProperty("$" + l6[a6].value), l6[a6].selected !== n2 && (l6[a6].selected = n2), n2 && t && (l6[a6].defaultSelected = true);
    } else {
      for (a6 = "" + Ul(a6), u6 = null, n2 = 0; n2 < l6.length; n2++) {
        if (l6[n2].value === a6) {
          l6[n2].selected = true, t && (l6[n2].defaultSelected = true);
          return;
        }
        u6 !== null || l6[n2].disabled || (u6 = l6[n2]);
      }
      u6 !== null && (u6.selected = true);
    }
  }
  function D0(l6, u6, a6) {
    if (u6 != null && (u6 = "" + Ul(u6), u6 !== l6.value && (l6.value = u6), a6 == null)) {
      l6.defaultValue !== u6 && (l6.defaultValue = u6);
      return;
    }
    l6.defaultValue = a6 != null ? "" + Ul(a6) : "";
  }
  function O0(l6, u6, a6, t) {
    if (u6 == null) {
      if (t != null) {
        if (a6 != null) throw Error(A12(92));
        if (Fa2(t)) {
          if (1 < t.length) throw Error(A12(93));
          t = t[0];
        }
        a6 = t;
      }
      a6 == null && (a6 = ""), u6 = a6;
    }
    a6 = Ul(u6), l6.defaultValue = a6, t = l6.textContent, t === a6 && t !== "" && t !== null && (l6.value = t);
  }
  function Ua3(l6, u6) {
    if (u6) {
      var a6 = l6.firstChild;
      if (a6 && a6 === l6.lastChild && a6.nodeType === 3) {
        a6.nodeValue = u6;
        return;
      }
    }
    l6.textContent = u6;
  }
  var Mh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Le5(l6, u6, a6) {
    var t = u6.indexOf("--") === 0;
    a6 == null || typeof a6 == "boolean" || a6 === "" ? t ? l6.setProperty(u6, "") : u6 === "float" ? l6.cssFloat = "" : l6[u6] = "" : t ? l6.setProperty(u6, a6) : typeof a6 != "number" || a6 === 0 || Mh.has(u6) ? u6 === "float" ? l6.cssFloat = a6 : l6[u6] = ("" + a6).trim() : l6[u6] = a6 + "px";
  }
  function s0(l6, u6, a6) {
    if (u6 != null && typeof u6 != "object") throw Error(A12(62));
    if (l6 = l6.style, a6 != null) {
      for (var t in a6) !a6.hasOwnProperty(t) || u6 != null && u6.hasOwnProperty(t) || (t.indexOf("--") === 0 ? l6.setProperty(t, "") : t === "float" ? l6.cssFloat = "" : l6[t] = "");
      for (var n2 in u6) t = u6[n2], u6.hasOwnProperty(n2) && a6[n2] !== t && Le5(l6, n2, t);
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
  function cn3(l6) {
    return Dh.test("" + l6) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l6;
  }
  var ac = null;
  function wc(l6) {
    return l6 = l6.target || l6.srcElement || window, l6.correspondingUseElement && (l6 = l6.correspondingUseElement), l6.nodeType === 3 ? l6.parentNode : l6;
  }
  var ca = null, za2 = null;
  function pe4(l6) {
    var u6 = Ga2(l6);
    if (u6 && (l6 = u6.stateNode)) {
      var a6 = l6[Sl] || null;
      l: switch (l6 = u6.stateNode, u6.type) {
        case "input":
          if (lc(l6, a6.value, a6.defaultValue, a6.defaultValue, a6.checked, a6.defaultChecked, a6.type, a6.name), u6 = a6.name, a6.type === "radio" && u6 != null) {
            for (a6 = l6; a6.parentNode; ) a6 = a6.parentNode;
            for (a6 = a6.querySelectorAll('input[name="' + ql3("" + u6) + '"][type="radio"]'), u6 = 0; u6 < a6.length; u6++) {
              var t = a6[u6];
              if (t !== l6 && t.form === l6.form) {
                var n2 = t[Sl] || null;
                if (!n2) throw Error(A12(90));
                lc(t, n2.value, n2.defaultValue, n2.defaultValue, n2.checked, n2.defaultChecked, n2.type, n2.name);
              }
            }
            for (u6 = 0; u6 < a6.length; u6++) t = a6[u6], t.form === l6.form && M0(t);
          }
          break l;
        case "textarea":
          D0(l6, a6.value, a6.defaultValue);
          break l;
        case "select":
          u6 = a6.value, u6 != null && ba2(l6, !!a6.multiple, u6, false);
      }
    }
  }
  var Tf = false;
  function U0(l6, u6, a6) {
    if (Tf) return l6(u6, a6);
    Tf = true;
    try {
      var t = l6(u6);
      return t;
    } finally {
      if (Tf = false, (ca !== null || za2 !== null) && (ff(), ca && (u6 = ca, l6 = za2, za2 = ca = null, pe4(u6), l6))) for (u6 = 0; u6 < l6.length; u6++) pe4(l6[u6]);
    }
  }
  function St3(l6, u6) {
    var a6 = l6.stateNode;
    if (a6 === null) return null;
    var t = a6[Sl] || null;
    if (t === null) return null;
    a6 = t[u6];
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
    if (a6 && typeof a6 != "function") throw Error(A12(231, u6, typeof a6));
    return a6;
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
  var ru, bu = null, $c = null, en3 = null;
  function H0() {
    if (en3) return en3;
    var l6, u6 = $c, a6 = u6.length, t, n2 = "value" in bu ? bu.value : bu.textContent, f4 = n2.length;
    for (l6 = 0; l6 < a6 && u6[l6] === n2[l6]; l6++) ;
    var c4 = a6 - l6;
    for (t = 1; t <= c4 && u6[a6 - t] === n2[f4 - t]; t++) ;
    return en3 = n2.slice(l6, 1 < t ? 1 - t : void 0);
  }
  function vn(l6) {
    var u6 = l6.keyCode;
    return "charCode" in l6 ? (l6 = l6.charCode, l6 === 0 && u6 === 13 && (l6 = 13)) : l6 = u6, l6 === 10 && (l6 = 13), 32 <= l6 || l6 === 13 ? l6 : 0;
  }
  function Wt3() {
    return true;
  }
  function Je4() {
    return false;
  }
  function ml2(l6) {
    function u6(a6, t, n2, f4, c4) {
      this._reactName = a6, this._targetInst = n2, this.type = t, this.nativeEvent = f4, this.target = c4, this.currentTarget = null;
      for (var e in l6) l6.hasOwnProperty(e) && (a6 = l6[e], this[e] = a6 ? a6(f4) : f4[e]);
      return this.isDefaultPrevented = (f4.defaultPrevented != null ? f4.defaultPrevented : f4.returnValue === false) ? Wt3 : Je4, this.isPropagationStopped = Je4, this;
    }
    return j12(u6.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var a6 = this.nativeEvent;
        a6 && (a6.preventDefault ? a6.preventDefault() : typeof a6.returnValue != "unknown" && (a6.returnValue = false), this.isDefaultPrevented = Wt3);
      },
      stopPropagation: function() {
        var a6 = this.nativeEvent;
        a6 && (a6.stopPropagation ? a6.stopPropagation() : typeof a6.cancelBubble != "unknown" && (a6.cancelBubble = true), this.isPropagationStopped = Wt3);
      },
      persist: function() {
      },
      isPersistent: Wt3
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
  }, kn = ml2($u), Yt4 = j12({}, $u, {
    view: 0,
    detail: 0
  }), Oh = ml2(Yt4), Mf, Ef, Ka2, rn2 = j12({}, Yt4, {
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
  }), We5 = ml2(rn2), sh = j12({}, rn2, {
    dataTransfer: 0
  }), Uh = ml2(sh), Hh = j12({}, Yt4, {
    relatedTarget: 0
  }), Df = ml2(Hh), Nh = j12({}, $u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qh = ml2(Nh), Bh = j12({}, $u, {
    clipboardData: function(l6) {
      return "clipboardData" in l6 ? l6.clipboardData : window.clipboardData;
    }
  }), Rh = ml2(Bh), Yh = j12({}, $u, {
    data: 0
  }), we6 = ml2(Yh), oh = {
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
  var Qh = j12({}, Yt4, {
    key: function(l6) {
      if (l6.key) {
        var u6 = oh[l6.key] || l6.key;
        if (u6 !== "Unidentified") return u6;
      }
      return l6.type === "keypress" ? (l6 = vn(l6), l6 === 13 ? "Enter" : String.fromCharCode(l6)) : l6.type === "keydown" || l6.type === "keyup" ? _h[l6.keyCode] || "Unidentified" : "";
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
      return l6.type === "keypress" ? vn(l6) : 0;
    },
    keyCode: function(l6) {
      return l6.type === "keydown" || l6.type === "keyup" ? l6.keyCode : 0;
    },
    which: function(l6) {
      return l6.type === "keypress" ? vn(l6) : l6.type === "keydown" || l6.type === "keyup" ? l6.keyCode : 0;
    }
  }), Zh = ml2(Qh), xh = j12({}, rn2, {
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
  }), $e4 = ml2(xh), Vh = j12({}, Yt4, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fc
  }), jh = ml2(Vh), Kh = j12({}, $u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ch = ml2(Kh), Lh = j12({}, rn2, {
    deltaX: function(l6) {
      return "deltaX" in l6 ? l6.deltaX : "wheelDeltaX" in l6 ? -l6.wheelDeltaX : 0;
    },
    deltaY: function(l6) {
      return "deltaY" in l6 ? l6.deltaY : "wheelDeltaY" in l6 ? -l6.wheelDeltaY : "wheelDelta" in l6 ? -l6.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ph = ml2(Lh), Jh = j12({}, $u, {
    newState: 0,
    oldState: 0
  }), Wh = ml2(Jh), wh = [
    9,
    13,
    27,
    32
  ], kc = uu && "CompositionEvent" in window, Ia = null;
  uu && "documentMode" in document && (Ia = document.documentMode);
  var $h = uu && "TextEvent" in window && !Ia, N0 = uu && (!kc || Ia && 8 < Ia && 11 >= Ia), Fe4 = " ", ke5 = false;
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
  var ea3 = false;
  function Fh(l6, u6) {
    switch (l6) {
      case "compositionend":
        return B0(u6);
      case "keypress":
        return u6.which !== 32 ? null : (ke5 = true, Fe4);
      case "textInput":
        return l6 = u6.data, l6 === Fe4 && ke5 ? null : l6;
      default:
        return null;
    }
  }
  function kh(l6, u6) {
    if (ea3) return l6 === "compositionend" || !kc && q0(l6, u6) ? (l6 = H0(), en3 = $c = bu = null, ea3 = false, l6) : null;
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
  function R0(l6, u6, a6, t) {
    ca ? za2 ? za2.push(t) : za2 = [
      t
    ] : ca = t, u6 = Cn2(u6, "onChange"), 0 < u6.length && (a6 = new kn("onChange", "change", null, a6, t), l6.push({
      event: a6,
      listeners: u6
    }));
  }
  var Pa = null, mt2 = null;
  function Ih(l6) {
    Dv(l6, 0);
  }
  function In(l6) {
    var u6 = ka(l6);
    if (M0(u6)) return l6;
  }
  function Ie4(l6, u6) {
    if (l6 === "change") return u6;
  }
  var Y0 = false;
  uu && (uu ? ($t2 = "oninput" in document, $t2 || (Of = document.createElement("div"), Of.setAttribute("oninput", "return;"), $t2 = typeof Of.oninput == "function"), wt3 = $t2) : wt3 = false, Y0 = wt3 && (!document.documentMode || 9 < document.documentMode));
  var wt3, $t2, Of;
  function Pe7() {
    Pa && (Pa.detachEvent("onpropertychange", o0), mt2 = Pa = null);
  }
  function o0(l6) {
    if (l6.propertyName === "value" && In(mt2)) {
      var u6 = [];
      R0(u6, mt2, l6, wc(l6)), U0(Ih, u6);
    }
  }
  function Ph(l6, u6, a6) {
    l6 === "focusin" ? (Pe7(), Pa = u6, mt2 = a6, Pa.attachEvent("onpropertychange", o0)) : l6 === "focusout" && Pe7();
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
  var Ol = typeof Object.is == "function" ? Object.is : ty;
  function gt5(l6, u6) {
    if (Ol(l6, u6)) return true;
    if (typeof l6 != "object" || l6 === null || typeof u6 != "object" || u6 === null) return false;
    var a6 = Object.keys(l6), t = Object.keys(u6);
    if (a6.length !== t.length) return false;
    for (t = 0; t < a6.length; t++) {
      var n2 = a6[t];
      if (!If.call(u6, n2) || !Ol(l6[n2], u6[n2])) return false;
    }
    return true;
  }
  function li(l6) {
    for (; l6 && l6.firstChild; ) l6 = l6.firstChild;
    return l6;
  }
  function ui(l6, u6) {
    var a6 = li(l6);
    l6 = 0;
    for (var t; a6; ) {
      if (a6.nodeType === 3) {
        if (t = l6 + a6.textContent.length, l6 <= u6 && t >= u6) return {
          node: a6,
          offset: u6 - l6
        };
        l6 = t;
      }
      l: {
        for (; a6; ) {
          if (a6.nextSibling) {
            a6 = a6.nextSibling;
            break l;
          }
          a6 = a6.parentNode;
        }
        a6 = void 0;
      }
      a6 = li(a6);
    }
  }
  function _0(l6, u6) {
    return l6 && u6 ? l6 === u6 ? true : l6 && l6.nodeType === 3 ? false : u6 && u6.nodeType === 3 ? _0(l6, u6.parentNode) : "contains" in l6 ? l6.contains(u6) : l6.compareDocumentPosition ? !!(l6.compareDocumentPosition(u6) & 16) : false : false;
  }
  function X0(l6) {
    l6 = l6 != null && l6.ownerDocument != null && l6.ownerDocument.defaultView != null ? l6.ownerDocument.defaultView : window;
    for (var u6 = sn3(l6.document); u6 instanceof l6.HTMLIFrameElement; ) {
      try {
        var a6 = typeof u6.contentWindow.location.href == "string";
      } catch {
        a6 = false;
      }
      if (a6) l6 = u6.contentWindow;
      else break;
      u6 = sn3(l6.document);
    }
    return u6;
  }
  function rc2(l6) {
    var u6 = l6 && l6.nodeName && l6.nodeName.toLowerCase();
    return u6 && (u6 === "input" && (l6.type === "text" || l6.type === "search" || l6.type === "tel" || l6.type === "url" || l6.type === "password") || u6 === "textarea" || l6.contentEditable === "true");
  }
  var ny = uu && "documentMode" in document && 11 >= document.documentMode, ia = null, nc2 = null, lt2 = null, fc = false;
  function ai3(l6, u6, a6) {
    var t = a6.window === a6 ? a6.document : a6.nodeType === 9 ? a6 : a6.ownerDocument;
    fc || ia == null || ia !== sn3(t) || (t = ia, "selectionStart" in t && rc2(t) ? t = {
      start: t.selectionStart,
      end: t.selectionEnd
    } : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = {
      anchorNode: t.anchorNode,
      anchorOffset: t.anchorOffset,
      focusNode: t.focusNode,
      focusOffset: t.focusOffset
    }), lt2 && gt5(lt2, t) || (lt2 = t, t = Cn2(nc2, "onSelect"), 0 < t.length && (u6 = new kn("onSelect", "select", null, u6, a6), l6.push({
      event: u6,
      listeners: t
    }), u6.target = ia)));
  }
  function ou(l6, u6) {
    var a6 = {};
    return a6[l6.toLowerCase()] = u6.toLowerCase(), a6["Webkit" + l6] = "webkit" + u6, a6["Moz" + l6] = "moz" + u6, a6;
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
  function Fu(l6) {
    if (sf[l6]) return sf[l6];
    if (!va[l6]) return l6;
    var u6 = va[l6], a6;
    for (a6 in u6) if (u6.hasOwnProperty(a6) && a6 in G0) return sf[l6] = u6[a6];
    return l6;
  }
  var Q0 = Fu("animationend"), Z0 = Fu("animationiteration"), x0 = Fu("animationstart"), fy = Fu("transitionrun"), cy = Fu("transitionstart"), ey = Fu("transitioncancel"), V0 = Fu("transitionend"), j0 = /* @__PURE__ */ new Map(), cc2 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  cc2.push("scrollEnd");
  function Gl3(l6, u6) {
    j0.set(l6, u6), wu(u6, [
      l6
    ]);
  }
  var ti = /* @__PURE__ */ new WeakMap();
  function Bl(l6, u6) {
    if (typeof l6 == "object" && l6 !== null) {
      var a6 = ti.get(l6);
      return a6 !== void 0 ? a6 : (u6 = {
        value: l6,
        source: u6,
        stack: Ce5(u6)
      }, ti.set(l6, u6), u6);
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
      var a6 = sl[u6];
      sl[u6++] = null;
      var t = sl[u6];
      sl[u6++] = null;
      var n2 = sl[u6];
      sl[u6++] = null;
      var f4 = sl[u6];
      if (sl[u6++] = null, t !== null && n2 !== null) {
        var c4 = t.pending;
        c4 === null ? n2.next = n2 : (n2.next = c4.next, c4.next = n2), t.pending = n2;
      }
      f4 !== 0 && K0(a6, n2, f4);
    }
  }
  function lf(l6, u6, a6, t) {
    sl[ha++] = l6, sl[ha++] = u6, sl[ha++] = a6, sl[ha++] = t, Ic |= t, l6.lanes |= t, l6 = l6.alternate, l6 !== null && (l6.lanes |= t);
  }
  function Pc(l6, u6, a6, t) {
    return lf(l6, u6, a6, t), Un(l6);
  }
  function Qa2(l6, u6) {
    return lf(l6, null, null, u6), Un(l6);
  }
  function K0(l6, u6, a6) {
    l6.lanes |= a6;
    var t = l6.alternate;
    t !== null && (t.lanes |= a6);
    for (var n2 = false, f4 = l6.return; f4 !== null; ) f4.childLanes |= a6, t = f4.alternate, t !== null && (t.childLanes |= a6), f4.tag === 22 && (l6 = f4.stateNode, l6 === null || l6._visibility & 1 || (n2 = true)), l6 = f4, f4 = f4.return;
    return l6.tag === 3 ? (f4 = l6.stateNode, n2 && u6 !== null && (n2 = 31 - Ml(a6), l6 = f4.hiddenUpdates, t = l6[n2], t === null ? l6[n2] = [
      u6
    ] : t.push(u6), u6.lane = a6 | 536870912), f4) : null;
  }
  function Un(l6) {
    if (50 < ht2) throw ht2 = 0, Nc = null, Error(A12(185));
    for (var u6 = l6.return; u6 !== null; ) l6 = u6, u6 = l6.return;
    return l6.tag === 3 ? l6.stateNode : null;
  }
  var ya2 = {};
  function iy(l6, u6, a6, t) {
    this.tag = l6, this.key = a6, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = u6, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Al(l6, u6, a6, t) {
    return new iy(l6, u6, a6, t);
  }
  function le4(l6) {
    return l6 = l6.prototype, !(!l6 || !l6.isReactComponent);
  }
  function Pl(l6, u6) {
    var a6 = l6.alternate;
    return a6 === null ? (a6 = Al(l6.tag, u6, l6.key, l6.mode), a6.elementType = l6.elementType, a6.type = l6.type, a6.stateNode = l6.stateNode, a6.alternate = l6, l6.alternate = a6) : (a6.pendingProps = u6, a6.type = l6.type, a6.flags = 0, a6.subtreeFlags = 0, a6.deletions = null), a6.flags = l6.flags & 65011712, a6.childLanes = l6.childLanes, a6.lanes = l6.lanes, a6.child = l6.child, a6.memoizedProps = l6.memoizedProps, a6.memoizedState = l6.memoizedState, a6.updateQueue = l6.updateQueue, u6 = l6.dependencies, a6.dependencies = u6 === null ? null : {
      lanes: u6.lanes,
      firstContext: u6.firstContext
    }, a6.sibling = l6.sibling, a6.index = l6.index, a6.ref = l6.ref, a6.refCleanup = l6.refCleanup, a6;
  }
  function C0(l6, u6) {
    l6.flags &= 65011714;
    var a6 = l6.alternate;
    return a6 === null ? (l6.childLanes = 0, l6.lanes = u6, l6.child = null, l6.subtreeFlags = 0, l6.memoizedProps = null, l6.memoizedState = null, l6.updateQueue = null, l6.dependencies = null, l6.stateNode = null) : (l6.childLanes = a6.childLanes, l6.lanes = a6.lanes, l6.child = a6.child, l6.subtreeFlags = 0, l6.deletions = null, l6.memoizedProps = a6.memoizedProps, l6.memoizedState = a6.memoizedState, l6.updateQueue = a6.updateQueue, l6.type = a6.type, u6 = a6.dependencies, l6.dependencies = u6 === null ? null : {
      lanes: u6.lanes,
      firstContext: u6.firstContext
    }), l6;
  }
  function hn(l6, u6, a6, t, n2, f4) {
    var c4 = 0;
    if (t = l6, typeof l6 == "function") le4(l6) && (c4 = 1);
    else if (typeof l6 == "string") c4 = id(l6, a6, Vl.current) ? 26 : l6 === "html" || l6 === "head" || l6 === "body" ? 27 : 5;
    else l: switch (l6) {
      case $f:
        return l6 = Al(31, a6, u6, n2), l6.elementType = $f, l6.lanes = f4, l6;
      case ta:
        return Zu(a6.children, n2, f4, u6);
      case e0:
        c4 = 8, n2 |= 24;
        break;
      case Jf:
        return l6 = Al(12, a6, u6, n2 | 2), l6.elementType = Jf, l6.lanes = f4, l6;
      case Wf:
        return l6 = Al(13, a6, u6, n2), l6.elementType = Wf, l6.lanes = f4, l6;
      case wf:
        return l6 = Al(19, a6, u6, n2), l6.elementType = wf, l6.lanes = f4, l6;
      default:
        if (typeof l6 == "object" && l6 !== null) switch (l6.$$typeof) {
          case Iv:
          case $l:
            c4 = 10;
            break l;
          case i0:
            c4 = 9;
            break l;
          case jc:
            c4 = 11;
            break l;
          case Kc:
            c4 = 14;
            break l;
          case vu:
            c4 = 16, t = null;
            break l;
        }
        c4 = 29, a6 = Error(A12(130, l6 === null ? "null" : typeof l6, "")), t = null;
    }
    return u6 = Al(c4, a6, u6, n2), u6.elementType = l6, u6.type = t, u6.lanes = f4, u6;
  }
  function Zu(l6, u6, a6, t) {
    return l6 = Al(7, l6, t, u6), l6.lanes = a6, l6;
  }
  function Uf(l6, u6, a6) {
    return l6 = Al(6, l6, null, u6), l6.lanes = a6, l6;
  }
  function Hf(l6, u6, a6) {
    return u6 = Al(4, l6.children !== null ? l6.children : [], l6.key, u6), u6.lanes = a6, u6.stateNode = {
      containerInfo: l6.containerInfo,
      pendingChildren: null,
      implementation: l6.implementation
    }, u6;
  }
  var da = [], Sa2 = 0, Hn = null, Nn = 0, Hl = [], Nl2 = 0, xu = null, Fl = 1, kl = "";
  function Xu(l6, u6) {
    da[Sa2++] = Nn, da[Sa2++] = Hn, Hn = l6, Nn = u6;
  }
  function L0(l6, u6, a6) {
    Hl[Nl2++] = Fl, Hl[Nl2++] = kl, Hl[Nl2++] = xu, xu = l6;
    var t = Fl;
    l6 = kl;
    var n2 = 32 - Ml(t) - 1;
    t &= ~(1 << n2), a6 += 1;
    var f4 = 32 - Ml(u6) + n2;
    if (30 < f4) {
      var c4 = n2 - n2 % 5;
      f4 = (t & (1 << c4) - 1).toString(32), t >>= c4, n2 -= c4, Fl = 1 << 32 - Ml(u6) + n2 | a6 << n2 | t, kl = f4 + l6;
    } else Fl = 1 << f4 | a6 << n2 | t, kl = l6;
  }
  function ue4(l6) {
    l6.return !== null && (Xu(l6, 1), L0(l6, 1, 0));
  }
  function ae6(l6) {
    for (; l6 === Hn; ) Hn = da[--Sa2], da[Sa2] = null, Nn = da[--Sa2], da[Sa2] = null;
    for (; l6 === xu; ) xu = Hl[--Nl2], Hl[Nl2] = null, kl = Hl[--Nl2], Hl[Nl2] = null, Fl = Hl[--Nl2], Hl[Nl2] = null;
  }
  var vl = null, p5 = null, Y7 = false, Vu = null, Zl2 = false, ec = Error(A12(519));
  function Lu2(l6) {
    var u6 = Error(A12(418, ""));
    throw bt3(Bl(u6, l6)), ec;
  }
  function ni3(l6) {
    var u6 = l6.stateNode, a6 = l6.type, t = l6.memoizedProps;
    switch (u6[el2] = l6, u6[Sl] = t, a6) {
      case "dialog":
        N7("cancel", u6), N7("close", u6);
        break;
      case "iframe":
      case "object":
      case "embed":
        N7("load", u6);
        break;
      case "video":
      case "audio":
        for (a6 = 0; a6 < Tt3.length; a6++) N7(Tt3[a6], u6);
        break;
      case "source":
        N7("error", u6);
        break;
      case "img":
      case "image":
      case "link":
        N7("error", u6), N7("load", u6);
        break;
      case "details":
        N7("toggle", u6);
        break;
      case "input":
        N7("invalid", u6), E0(u6, t.value, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name, true), On(u6);
        break;
      case "select":
        N7("invalid", u6);
        break;
      case "textarea":
        N7("invalid", u6), O0(u6, t.value, t.defaultValue, t.children), On(u6);
    }
    a6 = t.children, typeof a6 != "string" && typeof a6 != "number" && typeof a6 != "bigint" || u6.textContent === "" + a6 || t.suppressHydrationWarning === true || sv(u6.textContent, a6) ? (t.popover != null && (N7("beforetoggle", u6), N7("toggle", u6)), t.onScroll != null && N7("scroll", u6), t.onScrollEnd != null && N7("scrollend", u6), t.onClick != null && (u6.onclick = vf), u6 = true) : u6 = false, u6 || Lu2(l6);
  }
  function fi2(l6) {
    for (vl = l6.return; vl; ) switch (vl.tag) {
      case 5:
      case 13:
        Zl2 = false;
        return;
      case 27:
      case 3:
        Zl2 = true;
        return;
      default:
        vl = vl.return;
    }
  }
  function Ca(l6) {
    if (l6 !== vl) return false;
    if (!Y7) return fi2(l6), Y7 = true, false;
    var u6 = l6.tag, a6;
    if ((a6 = u6 !== 3 && u6 !== 27) && ((a6 = u6 === 5) && (a6 = l6.type, a6 = !(a6 !== "form" && a6 !== "button") || _c(l6.type, l6.memoizedProps)), a6 = !a6), a6 && p5 && Lu2(l6), fi2(l6), u6 === 13) {
      if (l6 = l6.memoizedState, l6 = l6 !== null ? l6.dehydrated : null, !l6) throw Error(A12(317));
      l: {
        for (l6 = l6.nextSibling, u6 = 0; l6; ) {
          if (l6.nodeType === 8) if (a6 = l6.data, a6 === "/$") {
            if (u6 === 0) {
              p5 = Xl3(l6.nextSibling);
              break l;
            }
            u6--;
          } else a6 !== "$" && a6 !== "$!" && a6 !== "$?" || u6++;
          l6 = l6.nextSibling;
        }
        p5 = null;
      }
    } else u6 === 27 ? (u6 = p5, Yu(l6.type) ? (l6 = Qc, Qc = null, p5 = l6) : p5 = u6) : p5 = vl ? Xl3(l6.stateNode.nextSibling) : null;
    return true;
  }
  function ot4() {
    p5 = vl = null, Y7 = false;
  }
  function ci() {
    var l6 = Vu;
    return l6 !== null && (dl2 === null ? dl2 = l6 : dl2.push.apply(dl2, l6), Vu = null), l6;
  }
  function bt3(l6) {
    Vu === null ? Vu = [
      l6
    ] : Vu.push(l6);
  }
  var ic = Cl(null), ku = null, rl2 = null;
  function yu2(l6, u6, a6) {
    C8(ic, u6._currentValue), u6._currentValue = a6;
  }
  function lu(l6) {
    l6._currentValue = ic.current, tl2(ic);
  }
  function vc2(l6, u6, a6) {
    for (; l6 !== null; ) {
      var t = l6.alternate;
      if ((l6.childLanes & u6) !== u6 ? (l6.childLanes |= u6, t !== null && (t.childLanes |= u6)) : t !== null && (t.childLanes & u6) !== u6 && (t.childLanes |= u6), l6 === a6) break;
      l6 = l6.return;
    }
  }
  function hc(l6, u6, a6, t) {
    var n2 = l6.child;
    for (n2 !== null && (n2.return = l6); n2 !== null; ) {
      var f4 = n2.dependencies;
      if (f4 !== null) {
        var c4 = n2.child;
        f4 = f4.firstContext;
        l: for (; f4 !== null; ) {
          var e = f4;
          f4 = n2;
          for (var i3 = 0; i3 < u6.length; i3++) if (e.context === u6[i3]) {
            f4.lanes |= a6, e = f4.alternate, e !== null && (e.lanes |= a6), vc2(f4.return, a6, l6), t || (c4 = null);
            break l;
          }
          f4 = e.next;
        }
      } else if (n2.tag === 18) {
        if (c4 = n2.return, c4 === null) throw Error(A12(341));
        c4.lanes |= a6, f4 = c4.alternate, f4 !== null && (f4.lanes |= a6), vc2(c4, a6, l6), c4 = null;
      } else c4 = n2.child;
      if (c4 !== null) c4.return = n2;
      else for (c4 = n2; c4 !== null; ) {
        if (c4 === l6) {
          c4 = null;
          break;
        }
        if (n2 = c4.sibling, n2 !== null) {
          n2.return = c4.return, c4 = n2;
          break;
        }
        c4 = c4.return;
      }
      n2 = c4;
    }
  }
  function _t3(l6, u6, a6, t) {
    l6 = null;
    for (var n2 = u6, f4 = false; n2 !== null; ) {
      if (!f4) {
        if ((n2.flags & 524288) !== 0) f4 = true;
        else if ((n2.flags & 262144) !== 0) break;
      }
      if (n2.tag === 10) {
        var c4 = n2.alternate;
        if (c4 === null) throw Error(A12(387));
        if (c4 = c4.memoizedProps, c4 !== null) {
          var e = n2.type;
          Ol(n2.pendingProps.value, c4.value) || (l6 !== null ? l6.push(e) : l6 = [
            e
          ]);
        }
      } else if (n2 === Tn.current) {
        if (c4 = n2.alternate, c4 === null) throw Error(A12(387));
        c4.memoizedState.memoizedState !== n2.memoizedState.memoizedState && (l6 !== null ? l6.push(Dt4) : l6 = [
          Dt4
        ]);
      }
      n2 = n2.return;
    }
    l6 !== null && hc(u6, l6, a6, t), u6.flags |= 262144;
  }
  function qn(l6) {
    for (l6 = l6.firstContext; l6 !== null; ) {
      if (!Ol(l6.context._currentValue, l6.memoizedValue)) return true;
      l6 = l6.next;
    }
    return false;
  }
  function pu(l6) {
    ku = l6, rl2 = null, l6 = l6.dependencies, l6 !== null && (l6.firstContext = null);
  }
  function il(l6) {
    return p0(ku, l6);
  }
  function Ft2(l6, u6) {
    return ku === null && pu(l6), p0(l6, u6);
  }
  function p0(l6, u6) {
    var a6 = u6._currentValue;
    if (u6 = {
      context: u6,
      memoizedValue: a6,
      next: null
    }, rl2 === null) {
      if (l6 === null) throw Error(A12(308));
      rl2 = u6, l6.dependencies = {
        lanes: 0,
        firstContext: u6
      }, l6.flags |= 524288;
    } else rl2 = rl2.next = u6;
    return a6;
  }
  var vy = typeof AbortController < "u" ? AbortController : function() {
    var l6 = [], u6 = this.signal = {
      aborted: false,
      addEventListener: function(a6, t) {
        l6.push(t);
      }
    };
    this.abort = function() {
      u6.aborted = true, l6.forEach(function(a6) {
        return a6();
      });
    };
  }, hy = I10.unstable_scheduleCallback, yy = I10.unstable_NormalPriority, k10 = {
    $$typeof: $l,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function te4() {
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
  var ut4 = null, yc2 = 0, Ha = 0, Aa = null;
  function dy(l6, u6) {
    if (ut4 === null) {
      var a6 = ut4 = [];
      yc2 = 0, Ha = He4(), Aa = {
        status: "pending",
        value: void 0,
        then: function(t) {
          a6.push(t);
        }
      };
    }
    return yc2++, u6.then(ei3, ei3), u6;
  }
  function ei3() {
    if (--yc2 === 0 && ut4 !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var l6 = ut4;
      ut4 = null, Ha = 0, Aa = null;
      for (var u6 = 0; u6 < l6.length; u6++) (0, l6[u6])();
    }
  }
  function Sy(l6, u6) {
    var a6 = [], t = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n2) {
        a6.push(n2);
      }
    };
    return l6.then(function() {
      t.status = "fulfilled", t.value = u6;
      for (var n2 = 0; n2 < a6.length; n2++) (0, a6[n2])(u6);
    }, function(n2) {
      for (t.status = "rejected", t.reason = n2, n2 = 0; n2 < a6.length; n2++) (0, a6[n2])(void 0);
    }), t;
  }
  var ii = s3.S;
  s3.S = function(l6, u6) {
    typeof u6 == "object" && u6 !== null && typeof u6.then == "function" && dy(l6, u6), ii !== null && ii(l6, u6);
  };
  var ju2 = Cl(null);
  function ne5() {
    var l6 = ju2.current;
    return l6 !== null ? l6 : V6.pooledCache;
  }
  function yn(l6, u6) {
    u6 === null ? C8(ju2, ju2.current) : C8(ju2, u6.pool);
  }
  function J0() {
    var l6 = ne5();
    return l6 === null ? null : {
      parent: k10._currentValue,
      pool: l6
    };
  }
  var Gt2 = Error(A12(460)), W0 = Error(A12(474)), uf = Error(A12(542)), dc2 = {
    then: function() {
    }
  };
  function vi(l6) {
    return l6 = l6.status, l6 === "fulfilled" || l6 === "rejected";
  }
  function kt4() {
  }
  function w0(l6, u6, a6) {
    switch (a6 = l6[a6], a6 === void 0 ? l6.push(u6) : a6 !== u6 && (u6.then(kt4, kt4), u6 = a6), u6.status) {
      case "fulfilled":
        return u6.value;
      case "rejected":
        throw l6 = u6.reason, yi2(l6), l6;
      default:
        if (typeof u6.status == "string") u6.then(kt4, kt4);
        else {
          if (l6 = V6, l6 !== null && 100 < l6.shellSuspendCounter) throw Error(A12(482));
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
            throw l6 = u6.reason, yi2(l6), l6;
        }
        throw at3 = u6, Gt2;
    }
  }
  var at3 = null;
  function hi() {
    if (at3 === null) throw Error(A12(459));
    var l6 = at3;
    return at3 = null, l6;
  }
  function yi2(l6) {
    if (l6 === Gt2 || l6 === uf) throw Error(A12(483));
  }
  var hu2 = false;
  function fe5(l6) {
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
  function Mu(l6) {
    return {
      lane: l6,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Eu2(l6, u6, a6) {
    var t = l6.updateQueue;
    if (t === null) return null;
    if (t = t.shared, (X7 & 2) !== 0) {
      var n2 = t.pending;
      return n2 === null ? u6.next = u6 : (u6.next = n2.next, n2.next = u6), t.pending = u6, u6 = Un(l6), K0(l6, null, a6), u6;
    }
    return lf(l6, t, u6, a6), Un(l6);
  }
  function tt6(l6, u6, a6) {
    if (u6 = u6.updateQueue, u6 !== null && (u6 = u6.shared, (a6 & 4194048) !== 0)) {
      var t = u6.lanes;
      t &= l6.pendingLanes, a6 |= t, u6.lanes = a6, g0(l6, a6);
    }
  }
  function Nf(l6, u6) {
    var a6 = l6.updateQueue, t = l6.alternate;
    if (t !== null && (t = t.updateQueue, a6 === t)) {
      var n2 = null, f4 = null;
      if (a6 = a6.firstBaseUpdate, a6 !== null) {
        do {
          var c4 = {
            lane: a6.lane,
            tag: a6.tag,
            payload: a6.payload,
            callback: null,
            next: null
          };
          f4 === null ? n2 = f4 = c4 : f4 = f4.next = c4, a6 = a6.next;
        } while (a6 !== null);
        f4 === null ? n2 = f4 = u6 : f4 = f4.next = u6;
      } else n2 = f4 = u6;
      a6 = {
        baseState: t.baseState,
        firstBaseUpdate: n2,
        lastBaseUpdate: f4,
        shared: t.shared,
        callbacks: t.callbacks
      }, l6.updateQueue = a6;
      return;
    }
    l6 = a6.lastBaseUpdate, l6 === null ? a6.firstBaseUpdate = u6 : l6.next = u6, a6.lastBaseUpdate = u6;
  }
  var mc = false;
  function nt5() {
    if (mc) {
      var l6 = Aa;
      if (l6 !== null) throw l6;
    }
  }
  function ft2(l6, u6, a6, t) {
    mc = false;
    var n2 = l6.updateQueue;
    hu2 = false;
    var f4 = n2.firstBaseUpdate, c4 = n2.lastBaseUpdate, e = n2.shared.pending;
    if (e !== null) {
      n2.shared.pending = null;
      var i3 = e, d4 = i3.next;
      i3.next = null, c4 === null ? f4 = d4 : c4.next = d4, c4 = i3;
      var g8 = l6.alternate;
      g8 !== null && (g8 = g8.updateQueue, e = g8.lastBaseUpdate, e !== c4 && (e === null ? g8.firstBaseUpdate = d4 : e.next = d4, g8.lastBaseUpdate = i3));
    }
    if (f4 !== null) {
      var z10 = n2.baseState;
      c4 = 0, g8 = d4 = i3 = null, e = f4;
      do {
        var S10 = e.lane & -536870913, m6 = S10 !== e.lane;
        if (m6 ? (B10 & S10) === S10 : (t & S10) === S10) {
          S10 !== 0 && S10 === Ha && (mc = true), g8 !== null && (g8 = g8.next = {
            lane: 0,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          });
          l: {
            var O6 = l6, E14 = e;
            S10 = u6;
            var G10 = a6;
            switch (E14.tag) {
              case 1:
                if (O6 = E14.payload, typeof O6 == "function") {
                  z10 = O6.call(G10, z10, S10);
                  break l;
                }
                z10 = O6;
                break l;
              case 3:
                O6.flags = O6.flags & -65537 | 128;
              case 0:
                if (O6 = E14.payload, S10 = typeof O6 == "function" ? O6.call(G10, z10, S10) : O6, S10 == null) break l;
                z10 = j12({}, z10, S10);
                break l;
              case 2:
                hu2 = true;
            }
          }
          S10 = e.callback, S10 !== null && (l6.flags |= 64, m6 && (l6.flags |= 8192), m6 = n2.callbacks, m6 === null ? n2.callbacks = [
            S10
          ] : m6.push(S10));
        } else m6 = {
          lane: S10,
          tag: e.tag,
          payload: e.payload,
          callback: e.callback,
          next: null
        }, g8 === null ? (d4 = g8 = m6, i3 = z10) : g8 = g8.next = m6, c4 |= S10;
        if (e = e.next, e === null) {
          if (e = n2.shared.pending, e === null) break;
          m6 = e, e = m6.next, m6.next = null, n2.lastBaseUpdate = m6, n2.shared.pending = null;
        }
      } while (true);
      g8 === null && (i3 = z10), n2.baseState = i3, n2.firstBaseUpdate = d4, n2.lastBaseUpdate = g8, f4 === null && (n2.shared.lanes = 0), Bu2 |= c4, l6.lanes = c4, l6.memoizedState = z10;
    }
  }
  function $0(l6, u6) {
    if (typeof l6 != "function") throw Error(A12(191, l6));
    l6.call(u6);
  }
  function F0(l6, u6) {
    var a6 = l6.callbacks;
    if (a6 !== null) for (l6.callbacks = null, l6 = 0; l6 < a6.length; l6++) $0(a6[l6], u6);
  }
  var Na2 = Cl(null), Bn2 = Cl(0);
  function di(l6, u6) {
    l6 = nu, C8(Bn2, l6), C8(Na2, u6), nu = l6 | u6.baseLanes;
  }
  function gc2() {
    C8(Bn2, nu), C8(Na2, Na2.current);
  }
  function ce6() {
    nu = Bn2.current, tl2(Na2), tl2(Bn2);
  }
  var Nu = 0, U5 = null, Z5 = null, $4 = null, Rn = false, Ta2 = false, Ju = false, Yn = 0, zt2 = 0, Ma = null, my = 0;
  function W6() {
    throw Error(A12(321));
  }
  function ee3(l6, u6) {
    if (u6 === null) return false;
    for (var a6 = 0; a6 < u6.length && a6 < l6.length; a6++) if (!Ol(l6[a6], u6[a6])) return false;
    return true;
  }
  function ie6(l6, u6, a6, t, n2, f4) {
    return Nu = f4, U5 = u6, u6.memoizedState = null, u6.updateQueue = null, u6.lanes = 0, s3.H = l6 === null || l6.memoizedState === null ? H12 : N1, Ju = false, f4 = a6(t, n2), Ju = false, Ta2 && (f4 = r0(u6, a6, t, n2)), k0(l6), f4;
  }
  function k0(l6) {
    s3.H = on2;
    var u6 = Z5 !== null && Z5.next !== null;
    if (Nu = 0, $4 = Z5 = U5 = null, Rn = false, zt2 = 0, Ma = null, u6) throw Error(A12(300));
    l6 === null || al3 || (l6 = l6.dependencies, l6 !== null && qn(l6) && (al3 = true));
  }
  function r0(l6, u6, a6, t) {
    U5 = l6;
    var n2 = 0;
    do {
      if (Ta2 && (Ma = null), zt2 = 0, Ta2 = false, 25 <= n2) throw Error(A12(301));
      if (n2 += 1, $4 = Z5 = null, l6.updateQueue != null) {
        var f4 = l6.updateQueue;
        f4.lastEffect = null, f4.events = null, f4.stores = null, f4.memoCache != null && (f4.memoCache.index = 0);
      }
      s3.H = Ey, f4 = u6(a6, t);
    } while (Ta2);
    return f4;
  }
  function gy() {
    var l6 = s3.H, u6 = l6.useState()[0];
    return u6 = typeof u6.then == "function" ? Qt3(u6) : u6, l6 = l6.useState()[0], (Z5 !== null ? Z5.memoizedState : null) !== l6 && (U5.flags |= 1024), u6;
  }
  function ve6() {
    var l6 = Yn !== 0;
    return Yn = 0, l6;
  }
  function he6(l6, u6, a6) {
    u6.updateQueue = l6.updateQueue, u6.flags &= -2053, l6.lanes &= ~a6;
  }
  function ye6(l6) {
    if (Rn) {
      for (l6 = l6.memoizedState; l6 !== null; ) {
        var u6 = l6.queue;
        u6 !== null && (u6.pending = null), l6 = l6.next;
      }
      Rn = false;
    }
    Nu = 0, $4 = Z5 = U5 = null, Ta2 = false, zt2 = Yn = 0, Ma = null;
  }
  function hl2() {
    var l6 = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $4 === null ? U5.memoizedState = $4 = l6 : $4 = $4.next = l6, $4;
  }
  function F6() {
    if (Z5 === null) {
      var l6 = U5.alternate;
      l6 = l6 !== null ? l6.memoizedState : null;
    } else l6 = Z5.next;
    var u6 = $4 === null ? U5.memoizedState : $4.next;
    if (u6 !== null) $4 = u6, Z5 = l6;
    else {
      if (l6 === null) throw U5.alternate === null ? Error(A12(467)) : Error(A12(310));
      Z5 = l6, l6 = {
        memoizedState: Z5.memoizedState,
        baseState: Z5.baseState,
        baseQueue: Z5.baseQueue,
        queue: Z5.queue,
        next: null
      }, $4 === null ? U5.memoizedState = $4 = l6 : $4 = $4.next = l6;
    }
    return $4;
  }
  function de6() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Qt3(l6) {
    var u6 = zt2;
    return zt2 += 1, Ma === null && (Ma = []), l6 = w0(Ma, l6, u6), u6 = U5, ($4 === null ? u6.memoizedState : $4.next) === null && (u6 = u6.alternate, s3.H = u6 === null || u6.memoizedState === null ? H12 : N1), l6;
  }
  function af(l6) {
    if (l6 !== null && typeof l6 == "object") {
      if (typeof l6.then == "function") return Qt3(l6);
      if (l6.$$typeof === $l) return il(l6);
    }
    throw Error(A12(438, String(l6)));
  }
  function Se5(l6) {
    var u6 = null, a6 = U5.updateQueue;
    if (a6 !== null && (u6 = a6.memoCache), u6 == null) {
      var t = U5.alternate;
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
    }), a6 === null && (a6 = de6(), U5.updateQueue = a6), a6.memoCache = u6, a6 = u6.data[u6.index], a6 === void 0) for (a6 = u6.data[u6.index] = Array(l6), t = 0; t < l6; t++) a6[t] = Pv;
    return u6.index++, a6;
  }
  function au(l6, u6) {
    return typeof u6 == "function" ? u6(l6) : u6;
  }
  function dn2(l6) {
    var u6 = F6();
    return me8(u6, Z5, l6);
  }
  function me8(l6, u6, a6) {
    var t = l6.queue;
    if (t === null) throw Error(A12(311));
    t.lastRenderedReducer = a6;
    var n2 = l6.baseQueue, f4 = t.pending;
    if (f4 !== null) {
      if (n2 !== null) {
        var c4 = n2.next;
        n2.next = f4.next, f4.next = c4;
      }
      u6.baseQueue = n2 = f4, t.pending = null;
    }
    if (f4 = l6.baseState, n2 === null) l6.memoizedState = f4;
    else {
      u6 = n2.next;
      var e = c4 = null, i3 = null, d4 = u6, g8 = false;
      do {
        var z10 = d4.lane & -536870913;
        if (z10 !== d4.lane ? (B10 & z10) === z10 : (Nu & z10) === z10) {
          var S10 = d4.revertLane;
          if (S10 === 0) i3 !== null && (i3 = i3.next = {
            lane: 0,
            revertLane: 0,
            action: d4.action,
            hasEagerState: d4.hasEagerState,
            eagerState: d4.eagerState,
            next: null
          }), z10 === Ha && (g8 = true);
          else if ((Nu & S10) === S10) {
            d4 = d4.next, S10 === Ha && (g8 = true);
            continue;
          } else z10 = {
            lane: 0,
            revertLane: d4.revertLane,
            action: d4.action,
            hasEagerState: d4.hasEagerState,
            eagerState: d4.eagerState,
            next: null
          }, i3 === null ? (e = i3 = z10, c4 = f4) : i3 = i3.next = z10, U5.lanes |= S10, Bu2 |= S10;
          z10 = d4.action, Ju && a6(f4, z10), f4 = d4.hasEagerState ? d4.eagerState : a6(f4, z10);
        } else S10 = {
          lane: z10,
          revertLane: d4.revertLane,
          action: d4.action,
          hasEagerState: d4.hasEagerState,
          eagerState: d4.eagerState,
          next: null
        }, i3 === null ? (e = i3 = S10, c4 = f4) : i3 = i3.next = S10, U5.lanes |= z10, Bu2 |= z10;
        d4 = d4.next;
      } while (d4 !== null && d4 !== u6);
      if (i3 === null ? c4 = f4 : i3.next = e, !Ol(f4, l6.memoizedState) && (al3 = true, g8 && (a6 = Aa, a6 !== null))) throw a6;
      l6.memoizedState = f4, l6.baseState = c4, l6.baseQueue = i3, t.lastRenderedState = f4;
    }
    return n2 === null && (t.lanes = 0), [
      l6.memoizedState,
      t.dispatch
    ];
  }
  function qf(l6) {
    var u6 = F6(), a6 = u6.queue;
    if (a6 === null) throw Error(A12(311));
    a6.lastRenderedReducer = l6;
    var t = a6.dispatch, n2 = a6.pending, f4 = u6.memoizedState;
    if (n2 !== null) {
      a6.pending = null;
      var c4 = n2 = n2.next;
      do
        f4 = l6(f4, c4.action), c4 = c4.next;
      while (c4 !== n2);
      Ol(f4, u6.memoizedState) || (al3 = true), u6.memoizedState = f4, u6.baseQueue === null && (u6.baseState = f4), a6.lastRenderedState = f4;
    }
    return [
      f4,
      t
    ];
  }
  function I0(l6, u6, a6) {
    var t = U5, n2 = F6(), f4 = Y7;
    if (f4) {
      if (a6 === void 0) throw Error(A12(407));
      a6 = a6();
    } else a6 = u6();
    var c4 = !Ol((Z5 || n2).memoizedState, a6);
    c4 && (n2.memoizedState = a6, al3 = true), n2 = n2.queue;
    var e = u1.bind(null, t, n2, l6);
    if (Zt(2048, 8, e, [
      l6
    ]), n2.getSnapshot !== u6 || c4 || $4 !== null && $4.memoizedState.tag & 1) {
      if (t.flags |= 2048, qa3(9, tf(), l1.bind(null, t, n2, a6, u6), null), V6 === null) throw Error(A12(349));
      f4 || (Nu & 124) !== 0 || P0(t, u6, a6);
    }
    return a6;
  }
  function P0(l6, u6, a6) {
    l6.flags |= 16384, l6 = {
      getSnapshot: u6,
      value: a6
    }, u6 = U5.updateQueue, u6 === null ? (u6 = de6(), U5.updateQueue = u6, u6.stores = [
      l6
    ]) : (a6 = u6.stores, a6 === null ? u6.stores = [
      l6
    ] : a6.push(l6));
  }
  function l1(l6, u6, a6, t) {
    u6.value = a6, u6.getSnapshot = t, a1(u6) && t1(l6);
  }
  function u1(l6, u6, a6) {
    return a6(function() {
      a1(u6) && t1(l6);
    });
  }
  function a1(l6) {
    var u6 = l6.getSnapshot;
    l6 = l6.value;
    try {
      var a6 = u6();
      return !Ol(l6, a6);
    } catch {
      return true;
    }
  }
  function t1(l6) {
    var u6 = Qa2(l6, 2);
    u6 !== null && Dl(u6, l6, 2);
  }
  function bc2(l6) {
    var u6 = hl2();
    if (typeof l6 == "function") {
      var a6 = l6;
      if (l6 = a6(), Ju) {
        gu2(true);
        try {
          a6();
        } finally {
          gu2(false);
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
  function n1(l6, u6, a6, t) {
    return l6.baseState = a6, me8(l6, Z5, typeof t == "function" ? t : au);
  }
  function by(l6, u6, a6, t, n2) {
    if (nf(l6)) throw Error(A12(485));
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
        then: function(c4) {
          f4.listeners.push(c4);
        }
      };
      s3.T !== null ? a6(true) : f4.isTransition = false, t(f4), a6 = u6.pending, a6 === null ? (f4.next = u6.pending = f4, f1(u6, f4)) : (f4.next = a6.next, u6.pending = a6.next = f4);
    }
  }
  function f1(l6, u6) {
    var a6 = u6.action, t = u6.payload, n2 = l6.state;
    if (u6.isTransition) {
      var f4 = s3.T, c4 = {};
      s3.T = c4;
      try {
        var e = a6(n2, t), i3 = s3.S;
        i3 !== null && i3(c4, e), Si(l6, u6, e);
      } catch (d4) {
        zc(l6, u6, d4);
      } finally {
        s3.T = f4;
      }
    } else try {
      f4 = a6(n2, t), Si(l6, u6, f4);
    } catch (d4) {
      zc(l6, u6, d4);
    }
  }
  function Si(l6, u6, a6) {
    a6 !== null && typeof a6 == "object" && typeof a6.then == "function" ? a6.then(function(t) {
      mi2(l6, u6, t);
    }, function(t) {
      return zc(l6, u6, t);
    }) : mi2(l6, u6, a6);
  }
  function mi2(l6, u6, a6) {
    u6.status = "fulfilled", u6.value = a6, c1(u6), l6.state = a6, u6 = l6.pending, u6 !== null && (a6 = u6.next, a6 === u6 ? l6.pending = null : (a6 = a6.next, u6.next = a6, f1(l6, a6)));
  }
  function zc(l6, u6, a6) {
    var t = l6.pending;
    if (l6.pending = null, t !== null) {
      t = t.next;
      do
        u6.status = "rejected", u6.reason = a6, c1(u6), u6 = u6.next;
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
  function gi(l6, u6) {
    if (Y7) {
      var a6 = V6.formState;
      if (a6 !== null) {
        l: {
          var t = U5;
          if (Y7) {
            if (p5) {
              u: {
                for (var n2 = p5, f4 = Zl2; n2.nodeType !== 8; ) {
                  if (!f4) {
                    n2 = null;
                    break u;
                  }
                  if (n2 = Xl3(n2.nextSibling), n2 === null) {
                    n2 = null;
                    break u;
                  }
                }
                f4 = n2.data, n2 = f4 === "F!" || f4 === "F" ? n2 : null;
              }
              if (n2) {
                p5 = Xl3(n2.nextSibling), t = n2.data === "F!";
                break l;
              }
            }
            Lu2(t);
          }
          t = false;
        }
        t && (u6 = a6[0]);
      }
    }
    return a6 = hl2(), a6.memoizedState = a6.baseState = u6, t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e1,
      lastRenderedState: u6
    }, a6.queue = t, a6 = O1.bind(null, U5, t), t.dispatch = a6, t = bc2(false), f4 = Ae4.bind(null, U5, false, t.queue), t = hl2(), n2 = {
      state: u6,
      dispatch: null,
      action: l6,
      pending: null
    }, t.queue = n2, a6 = by.bind(null, U5, n2, f4, a6), n2.dispatch = a6, t.memoizedState = l6, [
      u6,
      a6,
      false
    ];
  }
  function bi2(l6) {
    var u6 = F6();
    return i1(u6, Z5, l6);
  }
  function i1(l6, u6, a6) {
    if (u6 = me8(l6, u6, e1)[0], l6 = dn2(au)[0], typeof u6 == "object" && u6 !== null && typeof u6.then == "function") try {
      var t = Qt3(u6);
    } catch (c4) {
      throw c4 === Gt2 ? uf : c4;
    }
    else t = u6;
    u6 = F6();
    var n2 = u6.queue, f4 = n2.dispatch;
    return a6 !== u6.memoizedState && (U5.flags |= 2048, qa3(9, tf(), zy.bind(null, n2, a6), null)), [
      t,
      f4,
      l6
    ];
  }
  function zy(l6, u6) {
    l6.action = u6;
  }
  function zi3(l6) {
    var u6 = F6(), a6 = Z5;
    if (a6 !== null) return i1(u6, a6, l6);
    F6(), u6 = u6.memoizedState, a6 = F6();
    var t = a6.queue.dispatch;
    return a6.memoizedState = l6, [
      u6,
      t,
      false
    ];
  }
  function qa3(l6, u6, a6, t) {
    return l6 = {
      tag: l6,
      create: a6,
      deps: t,
      inst: u6,
      next: null
    }, u6 = U5.updateQueue, u6 === null && (u6 = de6(), U5.updateQueue = u6), a6 = u6.lastEffect, a6 === null ? u6.lastEffect = l6.next = l6 : (t = a6.next, a6.next = l6, l6.next = t, u6.lastEffect = l6), l6;
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
  function Sn2(l6, u6, a6, t) {
    var n2 = hl2();
    t = t === void 0 ? null : t, U5.flags |= l6, n2.memoizedState = qa3(1 | u6, tf(), a6, t);
  }
  function Zt(l6, u6, a6, t) {
    var n2 = F6();
    t = t === void 0 ? null : t;
    var f4 = n2.memoizedState.inst;
    Z5 !== null && t !== null && ee3(t, Z5.memoizedState.deps) ? n2.memoizedState = qa3(u6, f4, a6, t) : (U5.flags |= l6, n2.memoizedState = qa3(1 | u6, f4, a6, t));
  }
  function Ai2(l6, u6) {
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
      var a6 = u6(l6);
      return function() {
        typeof a6 == "function" ? a6() : u6(null);
      };
    }
    if (u6 != null) return l6 = l6(), u6.current = l6, function() {
      u6.current = null;
    };
  }
  function m1(l6, u6, a6) {
    a6 = a6 != null ? a6.concat([
      l6
    ]) : null, Zt(4, 4, S1.bind(null, u6, l6), a6);
  }
  function ge7() {
  }
  function g1(l6, u6) {
    var a6 = F6();
    u6 = u6 === void 0 ? null : u6;
    var t = a6.memoizedState;
    return u6 !== null && ee3(u6, t[1]) ? t[0] : (a6.memoizedState = [
      l6,
      u6
    ], l6);
  }
  function b1(l6, u6) {
    var a6 = F6();
    u6 = u6 === void 0 ? null : u6;
    var t = a6.memoizedState;
    if (u6 !== null && ee3(u6, t[1])) return t[0];
    if (t = l6(), Ju) {
      gu2(true);
      try {
        l6();
      } finally {
        gu2(false);
      }
    }
    return a6.memoizedState = [
      t,
      u6
    ], t;
  }
  function be5(l6, u6, a6) {
    return a6 === void 0 || (Nu & 1073741824) !== 0 ? l6.memoizedState = u6 : (l6.memoizedState = a6, l6 = cv(), U5.lanes |= l6, Bu2 |= l6, a6);
  }
  function z1(l6, u6, a6, t) {
    return Ol(a6, u6) ? a6 : Na2.current !== null ? (l6 = be5(l6, a6, t), Ol(l6, u6) || (al3 = true), l6) : (Nu & 42) === 0 ? (al3 = true, l6.memoizedState = a6) : (l6 = cv(), U5.lanes |= l6, Bu2 |= l6, u6);
  }
  function A1(l6, u6, a6, t, n2) {
    var f4 = o7.p;
    o7.p = f4 !== 0 && 8 > f4 ? f4 : 8;
    var c4 = s3.T, e = {};
    s3.T = e, Ae4(l6, false, u6, a6);
    try {
      var i3 = n2(), d4 = s3.S;
      if (d4 !== null && d4(e, i3), i3 !== null && typeof i3 == "object" && typeof i3.then == "function") {
        var g8 = Sy(i3, t);
        ct4(l6, u6, g8, El(l6));
      } else ct4(l6, u6, t, El(l6));
    } catch (z10) {
      ct4(l6, u6, {
        then: function() {
        },
        status: "rejected",
        reason: z10
      }, El());
    } finally {
      o7.p = f4, s3.T = c4;
    }
  }
  function Ay() {
  }
  function Ac(l6, u6, a6, t) {
    if (l6.tag !== 5) throw Error(A12(476));
    var n2 = T1(l6).queue;
    A1(l6, n2, u6, Qu, a6 === null ? Ay : function() {
      return M1(l6), a6(t);
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
    var a6 = {};
    return u6.next = {
      memoizedState: a6,
      baseState: a6,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: au,
        lastRenderedState: a6
      },
      next: null
    }, l6.memoizedState = u6, l6 = l6.alternate, l6 !== null && (l6.memoizedState = u6), u6;
  }
  function M1(l6) {
    var u6 = T1(l6).next.queue;
    ct4(l6, u6, {}, El());
  }
  function ze5() {
    return il(Dt4);
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
          var a6 = El();
          l6 = Mu(a6);
          var t = Eu2(u6, l6, a6);
          t !== null && (Dl(t, u6, a6), tt6(t, u6, a6)), u6 = {
            cache: te4()
          }, l6.payload = u6;
          return;
      }
      u6 = u6.return;
    }
  }
  function My(l6, u6, a6) {
    var t = El();
    a6 = {
      lane: t,
      revertLane: 0,
      action: a6,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l6) ? s1(u6, a6) : (a6 = Pc(l6, u6, a6, t), a6 !== null && (Dl(a6, l6, t), U1(a6, u6, t)));
  }
  function O1(l6, u6, a6) {
    var t = El();
    ct4(l6, u6, a6, t);
  }
  function ct4(l6, u6, a6, t) {
    var n2 = {
      lane: t,
      revertLane: 0,
      action: a6,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (nf(l6)) s1(u6, n2);
    else {
      var f4 = l6.alternate;
      if (l6.lanes === 0 && (f4 === null || f4.lanes === 0) && (f4 = u6.lastRenderedReducer, f4 !== null)) try {
        var c4 = u6.lastRenderedState, e = f4(c4, a6);
        if (n2.hasEagerState = true, n2.eagerState = e, Ol(e, c4)) return lf(l6, u6, n2, 0), V6 === null && Pn2(), false;
      } catch {
      } finally {
      }
      if (a6 = Pc(l6, u6, n2, t), a6 !== null) return Dl(a6, l6, t), U1(a6, u6, t), true;
    }
    return false;
  }
  function Ae4(l6, u6, a6, t) {
    if (t = {
      lane: 2,
      revertLane: He4(),
      action: t,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l6)) {
      if (u6) throw Error(A12(479));
    } else u6 = Pc(l6, a6, t, 2), u6 !== null && Dl(u6, l6, 2);
  }
  function nf(l6) {
    var u6 = l6.alternate;
    return l6 === U5 || u6 !== null && u6 === U5;
  }
  function s1(l6, u6) {
    Ta2 = Rn = true;
    var a6 = l6.pending;
    a6 === null ? u6.next = u6 : (u6.next = a6.next, a6.next = u6), l6.pending = u6;
  }
  function U1(l6, u6, a6) {
    if ((a6 & 4194048) !== 0) {
      var t = u6.lanes;
      t &= l6.pendingLanes, a6 |= t, u6.lanes = a6, g0(l6, a6);
    }
  }
  var on2 = {
    readContext: il,
    use: af,
    useCallback: W6,
    useContext: W6,
    useEffect: W6,
    useImperativeHandle: W6,
    useLayoutEffect: W6,
    useInsertionEffect: W6,
    useMemo: W6,
    useReducer: W6,
    useRef: W6,
    useState: W6,
    useDebugValue: W6,
    useDeferredValue: W6,
    useTransition: W6,
    useSyncExternalStore: W6,
    useId: W6,
    useHostTransitionStatus: W6,
    useFormState: W6,
    useActionState: W6,
    useOptimistic: W6,
    useMemoCache: W6,
    useCacheRefresh: W6
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
    useEffect: Ai2,
    useImperativeHandle: function(l6, u6, a6) {
      a6 = a6 != null ? a6.concat([
        l6
      ]) : null, Sn2(4194308, 4, S1.bind(null, u6, l6), a6);
    },
    useLayoutEffect: function(l6, u6) {
      return Sn2(4194308, 4, l6, u6);
    },
    useInsertionEffect: function(l6, u6) {
      Sn2(4, 2, l6, u6);
    },
    useMemo: function(l6, u6) {
      var a6 = hl2();
      u6 = u6 === void 0 ? null : u6;
      var t = l6();
      if (Ju) {
        gu2(true);
        try {
          l6();
        } finally {
          gu2(false);
        }
      }
      return a6.memoizedState = [
        t,
        u6
      ], t;
    },
    useReducer: function(l6, u6, a6) {
      var t = hl2();
      if (a6 !== void 0) {
        var n2 = a6(u6);
        if (Ju) {
          gu2(true);
          try {
            a6(u6);
          } finally {
            gu2(false);
          }
        }
      } else n2 = u6;
      return t.memoizedState = t.baseState = n2, l6 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l6,
        lastRenderedState: n2
      }, t.queue = l6, l6 = l6.dispatch = My.bind(null, U5, l6), [
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
      l6 = bc2(l6);
      var u6 = l6.queue, a6 = O1.bind(null, U5, u6);
      return u6.dispatch = a6, [
        l6.memoizedState,
        a6
      ];
    },
    useDebugValue: ge7,
    useDeferredValue: function(l6, u6) {
      var a6 = hl2();
      return be5(a6, l6, u6);
    },
    useTransition: function() {
      var l6 = bc2(false);
      return l6 = A1.bind(null, U5, l6.queue, true, false), hl2().memoizedState = l6, [
        false,
        l6
      ];
    },
    useSyncExternalStore: function(l6, u6, a6) {
      var t = U5, n2 = hl2();
      if (Y7) {
        if (a6 === void 0) throw Error(A12(407));
        a6 = a6();
      } else {
        if (a6 = u6(), V6 === null) throw Error(A12(349));
        (B10 & 124) !== 0 || P0(t, u6, a6);
      }
      n2.memoizedState = a6;
      var f4 = {
        value: a6,
        getSnapshot: u6
      };
      return n2.queue = f4, Ai2(u1.bind(null, t, f4, l6), [
        l6
      ]), t.flags |= 2048, qa3(9, tf(), l1.bind(null, t, f4, a6, u6), null), a6;
    },
    useId: function() {
      var l6 = hl2(), u6 = V6.identifierPrefix;
      if (Y7) {
        var a6 = kl, t = Fl;
        a6 = (t & ~(1 << 32 - Ml(t) - 1)).toString(32) + a6, u6 = "\xAB" + u6 + "R" + a6, a6 = Yn++, 0 < a6 && (u6 += "H" + a6.toString(32)), u6 += "\xBB";
      } else a6 = my++, u6 = "\xAB" + u6 + "r" + a6.toString(32) + "\xBB";
      return l6.memoizedState = u6;
    },
    useHostTransitionStatus: ze5,
    useFormState: gi,
    useActionState: gi,
    useOptimistic: function(l6) {
      var u6 = hl2();
      u6.memoizedState = u6.baseState = l6;
      var a6 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return u6.queue = a6, u6 = Ae4.bind(null, U5, true, a6), a6.dispatch = u6, [
        l6,
        u6
      ];
    },
    useMemoCache: Se5,
    useCacheRefresh: function() {
      return hl2().memoizedState = Ty.bind(null, U5);
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
    useDebugValue: ge7,
    useDeferredValue: function(l6, u6) {
      var a6 = F6();
      return z1(a6, Z5.memoizedState, l6, u6);
    },
    useTransition: function() {
      var l6 = dn2(au)[0], u6 = F6().memoizedState;
      return [
        typeof l6 == "boolean" ? l6 : Qt3(l6),
        u6
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze5,
    useFormState: bi2,
    useActionState: bi2,
    useOptimistic: function(l6, u6) {
      var a6 = F6();
      return n1(a6, Z5, l6, u6);
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
    useDebugValue: ge7,
    useDeferredValue: function(l6, u6) {
      var a6 = F6();
      return Z5 === null ? be5(a6, l6, u6) : z1(a6, Z5.memoizedState, l6, u6);
    },
    useTransition: function() {
      var l6 = qf(au)[0], u6 = F6().memoizedState;
      return [
        typeof l6 == "boolean" ? l6 : Qt3(l6),
        u6
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze5,
    useFormState: zi3,
    useActionState: zi3,
    useOptimistic: function(l6, u6) {
      var a6 = F6();
      return Z5 !== null ? n1(a6, Z5, l6, u6) : (a6.baseState = l6, [
        l6,
        a6.queue.dispatch
      ]);
    },
    useMemoCache: Se5,
    useCacheRefresh: D1
  }, Ea = null, At2 = 0;
  function rt4(l6) {
    var u6 = At2;
    return At2 += 1, Ea === null && (Ea = []), w0(Ea, l6, u6);
  }
  function La(l6, u6) {
    u6 = u6.props.ref, l6.ref = u6 !== void 0 ? u6 : null;
  }
  function It2(l6, u6) {
    throw u6.$$typeof === rv ? Error(A12(525)) : (l6 = Object.prototype.toString.call(u6), Error(A12(31, l6 === "[object Object]" ? "object with keys {" + Object.keys(u6).join(", ") + "}" : l6)));
  }
  function Ti(l6) {
    var u6 = l6._init;
    return u6(l6._payload);
  }
  function q1(l6) {
    function u6(h5, v9) {
      if (l6) {
        var y10 = h5.deletions;
        y10 === null ? (h5.deletions = [
          v9
        ], h5.flags |= 16) : y10.push(v9);
      }
    }
    function a6(h5, v9) {
      if (!l6) return null;
      for (; v9 !== null; ) u6(h5, v9), v9 = v9.sibling;
      return null;
    }
    function t(h5) {
      for (var v9 = /* @__PURE__ */ new Map(); h5 !== null; ) h5.key !== null ? v9.set(h5.key, h5) : v9.set(h5.index, h5), h5 = h5.sibling;
      return v9;
    }
    function n2(h5, v9) {
      return h5 = Pl(h5, v9), h5.index = 0, h5.sibling = null, h5;
    }
    function f4(h5, v9, y10) {
      return h5.index = y10, l6 ? (y10 = h5.alternate, y10 !== null ? (y10 = y10.index, y10 < v9 ? (h5.flags |= 67108866, v9) : y10) : (h5.flags |= 67108866, v9)) : (h5.flags |= 1048576, v9);
    }
    function c4(h5) {
      return l6 && h5.alternate === null && (h5.flags |= 67108866), h5;
    }
    function e(h5, v9, y10, b10) {
      return v9 === null || v9.tag !== 6 ? (v9 = Uf(y10, h5.mode, b10), v9.return = h5, v9) : (v9 = n2(v9, y10), v9.return = h5, v9);
    }
    function i3(h5, v9, y10, b10) {
      var T10 = y10.type;
      return T10 === ta ? g8(h5, v9, y10.props.children, b10, y10.key) : v9 !== null && (v9.elementType === T10 || typeof T10 == "object" && T10 !== null && T10.$$typeof === vu && Ti(T10) === v9.type) ? (v9 = n2(v9, y10.props), La(v9, y10), v9.return = h5, v9) : (v9 = hn(y10.type, y10.key, y10.props, null, h5.mode, b10), La(v9, y10), v9.return = h5, v9);
    }
    function d4(h5, v9, y10, b10) {
      return v9 === null || v9.tag !== 4 || v9.stateNode.containerInfo !== y10.containerInfo || v9.stateNode.implementation !== y10.implementation ? (v9 = Hf(y10, h5.mode, b10), v9.return = h5, v9) : (v9 = n2(v9, y10.children || []), v9.return = h5, v9);
    }
    function g8(h5, v9, y10, b10, T10) {
      return v9 === null || v9.tag !== 7 ? (v9 = Zu(y10, h5.mode, b10, T10), v9.return = h5, v9) : (v9 = n2(v9, y10), v9.return = h5, v9);
    }
    function z10(h5, v9, y10) {
      if (typeof v9 == "string" && v9 !== "" || typeof v9 == "number" || typeof v9 == "bigint") return v9 = Uf("" + v9, h5.mode, y10), v9.return = h5, v9;
      if (typeof v9 == "object" && v9 !== null) {
        switch (v9.$$typeof) {
          case Ct3:
            return y10 = hn(v9.type, v9.key, v9.props, null, h5.mode, y10), La(y10, v9), y10.return = h5, y10;
          case $a:
            return v9 = Hf(v9, h5.mode, y10), v9.return = h5, v9;
          case vu:
            var b10 = v9._init;
            return v9 = b10(v9._payload), z10(h5, v9, y10);
        }
        if (Fa2(v9) || ja(v9)) return v9 = Zu(v9, h5.mode, y10, null), v9.return = h5, v9;
        if (typeof v9.then == "function") return z10(h5, rt4(v9), y10);
        if (v9.$$typeof === $l) return z10(h5, Ft2(h5, v9), y10);
        It2(h5, v9);
      }
      return null;
    }
    function S10(h5, v9, y10, b10) {
      var T10 = v9 !== null ? v9.key : null;
      if (typeof y10 == "string" && y10 !== "" || typeof y10 == "number" || typeof y10 == "bigint") return T10 !== null ? null : e(h5, v9, "" + y10, b10);
      if (typeof y10 == "object" && y10 !== null) {
        switch (y10.$$typeof) {
          case Ct3:
            return y10.key === T10 ? i3(h5, v9, y10, b10) : null;
          case $a:
            return y10.key === T10 ? d4(h5, v9, y10, b10) : null;
          case vu:
            return T10 = y10._init, y10 = T10(y10._payload), S10(h5, v9, y10, b10);
        }
        if (Fa2(y10) || ja(y10)) return T10 !== null ? null : g8(h5, v9, y10, b10, null);
        if (typeof y10.then == "function") return S10(h5, v9, rt4(y10), b10);
        if (y10.$$typeof === $l) return S10(h5, v9, Ft2(h5, y10), b10);
        It2(h5, y10);
      }
      return null;
    }
    function m6(h5, v9, y10, b10, T10) {
      if (typeof b10 == "string" && b10 !== "" || typeof b10 == "number" || typeof b10 == "bigint") return h5 = h5.get(y10) || null, e(v9, h5, "" + b10, T10);
      if (typeof b10 == "object" && b10 !== null) {
        switch (b10.$$typeof) {
          case Ct3:
            return h5 = h5.get(b10.key === null ? y10 : b10.key) || null, i3(v9, h5, b10, T10);
          case $a:
            return h5 = h5.get(b10.key === null ? y10 : b10.key) || null, d4(v9, h5, b10, T10);
          case vu:
            var H10 = b10._init;
            return b10 = H10(b10._payload), m6(h5, v9, y10, b10, T10);
        }
        if (Fa2(b10) || ja(b10)) return h5 = h5.get(y10) || null, g8(v9, h5, b10, T10, null);
        if (typeof b10.then == "function") return m6(h5, v9, y10, rt4(b10), T10);
        if (b10.$$typeof === $l) return m6(h5, v9, y10, Ft2(v9, b10), T10);
        It2(v9, b10);
      }
      return null;
    }
    function O6(h5, v9, y10, b10) {
      for (var T10 = null, H10 = null, M7 = v9, D11 = v9 = 0, P5 = null; M7 !== null && D11 < y10.length; D11++) {
        M7.index > D11 ? (P5 = M7, M7 = null) : P5 = M7.sibling;
        var R7 = S10(h5, M7, y10[D11], b10);
        if (R7 === null) {
          M7 === null && (M7 = P5);
          break;
        }
        l6 && M7 && R7.alternate === null && u6(h5, M7), v9 = f4(R7, v9, D11), H10 === null ? T10 = R7 : H10.sibling = R7, H10 = R7, M7 = P5;
      }
      if (D11 === y10.length) return a6(h5, M7), Y7 && Xu(h5, D11), T10;
      if (M7 === null) {
        for (; D11 < y10.length; D11++) M7 = z10(h5, y10[D11], b10), M7 !== null && (v9 = f4(M7, v9, D11), H10 === null ? T10 = M7 : H10.sibling = M7, H10 = M7);
        return Y7 && Xu(h5, D11), T10;
      }
      for (M7 = t(M7); D11 < y10.length; D11++) P5 = m6(M7, h5, D11, y10[D11], b10), P5 !== null && (l6 && P5.alternate !== null && M7.delete(P5.key === null ? D11 : P5.key), v9 = f4(P5, v9, D11), H10 === null ? T10 = P5 : H10.sibling = P5, H10 = P5);
      return l6 && M7.forEach(function(cu2) {
        return u6(h5, cu2);
      }), Y7 && Xu(h5, D11), T10;
    }
    function E14(h5, v9, y10, b10) {
      if (y10 == null) throw Error(A12(151));
      for (var T10 = null, H10 = null, M7 = v9, D11 = v9 = 0, P5 = null, R7 = y10.next(); M7 !== null && !R7.done; D11++, R7 = y10.next()) {
        M7.index > D11 ? (P5 = M7, M7 = null) : P5 = M7.sibling;
        var cu2 = S10(h5, M7, R7.value, b10);
        if (cu2 === null) {
          M7 === null && (M7 = P5);
          break;
        }
        l6 && M7 && cu2.alternate === null && u6(h5, M7), v9 = f4(cu2, v9, D11), H10 === null ? T10 = cu2 : H10.sibling = cu2, H10 = cu2, M7 = P5;
      }
      if (R7.done) return a6(h5, M7), Y7 && Xu(h5, D11), T10;
      if (M7 === null) {
        for (; !R7.done; D11++, R7 = y10.next()) R7 = z10(h5, R7.value, b10), R7 !== null && (v9 = f4(R7, v9, D11), H10 === null ? T10 = R7 : H10.sibling = R7, H10 = R7);
        return Y7 && Xu(h5, D11), T10;
      }
      for (M7 = t(M7); !R7.done; D11++, R7 = y10.next()) R7 = m6(M7, h5, D11, R7.value, b10), R7 !== null && (l6 && R7.alternate !== null && M7.delete(R7.key === null ? D11 : R7.key), v9 = f4(R7, v9, D11), H10 === null ? T10 = R7 : H10.sibling = R7, H10 = R7);
      return l6 && M7.forEach(function(Kv) {
        return u6(h5, Kv);
      }), Y7 && Xu(h5, D11), T10;
    }
    function G10(h5, v9, y10, b10) {
      if (typeof y10 == "object" && y10 !== null && y10.type === ta && y10.key === null && (y10 = y10.props.children), typeof y10 == "object" && y10 !== null) {
        switch (y10.$$typeof) {
          case Ct3:
            l: {
              for (var T10 = y10.key; v9 !== null; ) {
                if (v9.key === T10) {
                  if (T10 = y10.type, T10 === ta) {
                    if (v9.tag === 7) {
                      a6(h5, v9.sibling), b10 = n2(v9, y10.props.children), b10.return = h5, h5 = b10;
                      break l;
                    }
                  } else if (v9.elementType === T10 || typeof T10 == "object" && T10 !== null && T10.$$typeof === vu && Ti(T10) === v9.type) {
                    a6(h5, v9.sibling), b10 = n2(v9, y10.props), La(b10, y10), b10.return = h5, h5 = b10;
                    break l;
                  }
                  a6(h5, v9);
                  break;
                } else u6(h5, v9);
                v9 = v9.sibling;
              }
              y10.type === ta ? (b10 = Zu(y10.props.children, h5.mode, b10, y10.key), b10.return = h5, h5 = b10) : (b10 = hn(y10.type, y10.key, y10.props, null, h5.mode, b10), La(b10, y10), b10.return = h5, h5 = b10);
            }
            return c4(h5);
          case $a:
            l: {
              for (T10 = y10.key; v9 !== null; ) {
                if (v9.key === T10) if (v9.tag === 4 && v9.stateNode.containerInfo === y10.containerInfo && v9.stateNode.implementation === y10.implementation) {
                  a6(h5, v9.sibling), b10 = n2(v9, y10.children || []), b10.return = h5, h5 = b10;
                  break l;
                } else {
                  a6(h5, v9);
                  break;
                }
                else u6(h5, v9);
                v9 = v9.sibling;
              }
              b10 = Hf(y10, h5.mode, b10), b10.return = h5, h5 = b10;
            }
            return c4(h5);
          case vu:
            return T10 = y10._init, y10 = T10(y10._payload), G10(h5, v9, y10, b10);
        }
        if (Fa2(y10)) return O6(h5, v9, y10, b10);
        if (ja(y10)) {
          if (T10 = ja(y10), typeof T10 != "function") throw Error(A12(150));
          return y10 = T10.call(y10), E14(h5, v9, y10, b10);
        }
        if (typeof y10.then == "function") return G10(h5, v9, rt4(y10), b10);
        if (y10.$$typeof === $l) return G10(h5, v9, Ft2(h5, y10), b10);
        It2(h5, y10);
      }
      return typeof y10 == "string" && y10 !== "" || typeof y10 == "number" || typeof y10 == "bigint" ? (y10 = "" + y10, v9 !== null && v9.tag === 6 ? (a6(h5, v9.sibling), b10 = n2(v9, y10), b10.return = h5, h5 = b10) : (a6(h5, v9), b10 = Uf(y10, h5.mode, b10), b10.return = h5, h5 = b10), c4(h5)) : a6(h5, v9);
    }
    return function(h5, v9, y10, b10) {
      try {
        At2 = 0;
        var T10 = G10(h5, v9, y10, b10);
        return Ea = null, T10;
      } catch (M7) {
        if (M7 === Gt2 || M7 === uf) throw M7;
        var H10 = Al(29, M7, null, h5.mode);
        return H10.lanes = b10, H10.return = h5, H10;
      } finally {
      }
    };
  }
  var Ba2 = q1(true), B1 = q1(false), Yl2 = Cl(null), Kl3 = null;
  function du2(l6) {
    var u6 = l6.alternate;
    C8(r4, r4.current & 1), C8(Yl2, l6), Kl3 === null && (u6 === null || Na2.current !== null || u6.memoizedState !== null) && (Kl3 = l6);
  }
  function R1(l6) {
    if (l6.tag === 22) {
      if (C8(r4, r4.current), C8(Yl2, l6), Kl3 === null) {
        var u6 = l6.alternate;
        u6 !== null && u6.memoizedState !== null && (Kl3 = l6);
      }
    } else Su2(l6);
  }
  function Su2() {
    C8(r4, r4.current), C8(Yl2, Yl2.current);
  }
  function Il2(l6) {
    tl2(Yl2), Kl3 === l6 && (Kl3 = null), tl2(r4);
  }
  var r4 = Cl(0);
  function _n2(l6) {
    for (var u6 = l6; u6 !== null; ) {
      if (u6.tag === 13) {
        var a6 = u6.memoizedState;
        if (a6 !== null && (a6 = a6.dehydrated, a6 === null || a6.data === "$?" || Gc(a6))) return u6;
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
  function Bf(l6, u6, a6, t) {
    u6 = l6.memoizedState, a6 = a6(t, u6), a6 = a6 == null ? u6 : j12({}, u6, a6), l6.memoizedState = a6, l6.lanes === 0 && (l6.updateQueue.baseState = a6);
  }
  var Tc = {
    enqueueSetState: function(l6, u6, a6) {
      l6 = l6._reactInternals;
      var t = El(), n2 = Mu(t);
      n2.payload = u6, a6 != null && (n2.callback = a6), u6 = Eu2(l6, n2, t), u6 !== null && (Dl(u6, l6, t), tt6(u6, l6, t));
    },
    enqueueReplaceState: function(l6, u6, a6) {
      l6 = l6._reactInternals;
      var t = El(), n2 = Mu(t);
      n2.tag = 1, n2.payload = u6, a6 != null && (n2.callback = a6), u6 = Eu2(l6, n2, t), u6 !== null && (Dl(u6, l6, t), tt6(u6, l6, t));
    },
    enqueueForceUpdate: function(l6, u6) {
      l6 = l6._reactInternals;
      var a6 = El(), t = Mu(a6);
      t.tag = 2, u6 != null && (t.callback = u6), u6 = Eu2(l6, t, a6), u6 !== null && (Dl(u6, l6, a6), tt6(u6, l6, a6));
    }
  };
  function Mi(l6, u6, a6, t, n2, f4, c4) {
    return l6 = l6.stateNode, typeof l6.shouldComponentUpdate == "function" ? l6.shouldComponentUpdate(t, f4, c4) : u6.prototype && u6.prototype.isPureReactComponent ? !gt5(a6, t) || !gt5(n2, f4) : true;
  }
  function Ei(l6, u6, a6, t) {
    l6 = u6.state, typeof u6.componentWillReceiveProps == "function" && u6.componentWillReceiveProps(a6, t), typeof u6.UNSAFE_componentWillReceiveProps == "function" && u6.UNSAFE_componentWillReceiveProps(a6, t), u6.state !== l6 && Tc.enqueueReplaceState(u6, u6.state, null);
  }
  function Wu(l6, u6) {
    var a6 = u6;
    if ("ref" in u6) {
      a6 = {};
      for (var t in u6) t !== "ref" && (a6[t] = u6[t]);
    }
    if (l6 = l6.defaultProps) {
      a6 === u6 && (a6 = j12({}, a6));
      for (var n2 in l6) a6[n2] === void 0 && (a6[n2] = l6[n2]);
    }
    return a6;
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
  function Gn(l6, u6) {
    try {
      var a6 = l6.onUncaughtError;
      a6(u6.value, {
        componentStack: u6.stack
      });
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  function Di(l6, u6, a6) {
    try {
      var t = l6.onCaughtError;
      t(a6.value, {
        componentStack: a6.stack,
        errorBoundary: u6.tag === 1 ? u6.stateNode : null
      });
    } catch (n2) {
      setTimeout(function() {
        throw n2;
      });
    }
  }
  function Mc(l6, u6, a6) {
    return a6 = Mu(a6), a6.tag = 3, a6.payload = {
      element: null
    }, a6.callback = function() {
      Gn(l6, u6);
    }, a6;
  }
  function X1(l6) {
    return l6 = Mu(l6), l6.tag = 3, l6;
  }
  function G1(l6, u6, a6, t) {
    var n2 = a6.type.getDerivedStateFromError;
    if (typeof n2 == "function") {
      var f4 = t.value;
      l6.payload = function() {
        return n2(f4);
      }, l6.callback = function() {
        Di(u6, a6, t);
      };
    }
    var c4 = a6.stateNode;
    c4 !== null && typeof c4.componentDidCatch == "function" && (l6.callback = function() {
      Di(u6, a6, t), typeof n2 != "function" && (Du3 === null ? Du3 = /* @__PURE__ */ new Set([
        this
      ]) : Du3.add(this));
      var e = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: e !== null ? e : ""
      });
    });
  }
  function Dy(l6, u6, a6, t, n2) {
    if (a6.flags |= 32768, t !== null && typeof t == "object" && typeof t.then == "function") {
      if (u6 = a6.alternate, u6 !== null && _t3(u6, a6, n2, true), a6 = Yl2.current, a6 !== null) {
        switch (a6.tag) {
          case 13:
            return Kl3 === null ? qc() : a6.alternate === null && J6 === 0 && (J6 = 3), a6.flags &= -257, a6.flags |= 65536, a6.lanes = n2, t === dc2 ? a6.flags |= 16384 : (u6 = a6.updateQueue, u6 === null ? a6.updateQueue = /* @__PURE__ */ new Set([
              t
            ]) : u6.add(t), jf(l6, t, n2)), false;
          case 22:
            return a6.flags |= 65536, t === dc2 ? a6.flags |= 16384 : (u6 = a6.updateQueue, u6 === null ? (u6 = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                t
              ])
            }, a6.updateQueue = u6) : (a6 = u6.retryQueue, a6 === null ? u6.retryQueue = /* @__PURE__ */ new Set([
              t
            ]) : a6.add(t)), jf(l6, t, n2)), false;
        }
        throw Error(A12(435, a6.tag));
      }
      return jf(l6, t, n2), qc(), false;
    }
    if (Y7) return u6 = Yl2.current, u6 !== null ? ((u6.flags & 65536) === 0 && (u6.flags |= 256), u6.flags |= 65536, u6.lanes = n2, t !== ec && (l6 = Error(A12(422), {
      cause: t
    }), bt3(Bl(l6, a6)))) : (t !== ec && (u6 = Error(A12(423), {
      cause: t
    }), bt3(Bl(u6, a6))), l6 = l6.current.alternate, l6.flags |= 65536, n2 &= -n2, l6.lanes |= n2, t = Bl(t, a6), n2 = Mc(l6.stateNode, t, n2), Nf(l6, n2), J6 !== 4 && (J6 = 2)), false;
    var f4 = Error(A12(520), {
      cause: t
    });
    if (f4 = Bl(f4, a6), vt3 === null ? vt3 = [
      f4
    ] : vt3.push(f4), J6 !== 4 && (J6 = 2), u6 === null) return true;
    t = Bl(t, a6), a6 = u6;
    do {
      switch (a6.tag) {
        case 3:
          return a6.flags |= 65536, l6 = n2 & -n2, a6.lanes |= l6, l6 = Mc(a6.stateNode, t, l6), Nf(a6, l6), false;
        case 1:
          if (u6 = a6.type, f4 = a6.stateNode, (a6.flags & 128) === 0 && (typeof u6.getDerivedStateFromError == "function" || f4 !== null && typeof f4.componentDidCatch == "function" && (Du3 === null || !Du3.has(f4)))) return a6.flags |= 65536, n2 &= -n2, a6.lanes |= n2, n2 = X1(n2), G1(n2, l6, a6, t), Nf(a6, n2), false;
      }
      a6 = a6.return;
    } while (a6 !== null);
    return false;
  }
  var Q1 = Error(A12(461)), al3 = false;
  function nl3(l6, u6, a6, t) {
    u6.child = l6 === null ? B1(u6, null, a6, t) : Ba2(u6, l6.child, a6, t);
  }
  function Oi(l6, u6, a6, t, n2) {
    a6 = a6.render;
    var f4 = u6.ref;
    if ("ref" in t) {
      var c4 = {};
      for (var e in t) e !== "ref" && (c4[e] = t[e]);
    } else c4 = t;
    return pu(u6), t = ie6(l6, u6, a6, c4, f4, n2), e = ve6(), l6 !== null && !al3 ? (he6(l6, u6, n2), tu2(l6, u6, n2)) : (Y7 && e && ue4(u6), u6.flags |= 1, nl3(l6, u6, t, n2), u6.child);
  }
  function si(l6, u6, a6, t, n2) {
    if (l6 === null) {
      var f4 = a6.type;
      return typeof f4 == "function" && !le4(f4) && f4.defaultProps === void 0 && a6.compare === null ? (u6.tag = 15, u6.type = f4, Z1(l6, u6, f4, t, n2)) : (l6 = hn(a6.type, null, t, u6, u6.mode, n2), l6.ref = u6.ref, l6.return = u6, u6.child = l6);
    }
    if (f4 = l6.child, !Te5(l6, n2)) {
      var c4 = f4.memoizedProps;
      if (a6 = a6.compare, a6 = a6 !== null ? a6 : gt5, a6(c4, t) && l6.ref === u6.ref) return tu2(l6, u6, n2);
    }
    return u6.flags |= 1, l6 = Pl(f4, t), l6.ref = u6.ref, l6.return = u6, u6.child = l6;
  }
  function Z1(l6, u6, a6, t, n2) {
    if (l6 !== null) {
      var f4 = l6.memoizedProps;
      if (gt5(f4, t) && l6.ref === u6.ref) if (al3 = false, u6.pendingProps = t = f4, Te5(l6, n2)) (l6.flags & 131072) !== 0 && (al3 = true);
      else return u6.lanes = l6.lanes, tu2(l6, u6, n2);
    }
    return Ec(l6, u6, a6, t, n2);
  }
  function x1(l6, u6, a6) {
    var t = u6.pendingProps, n2 = t.children, f4 = l6 !== null ? l6.memoizedState : null;
    if (t.mode === "hidden") {
      if ((u6.flags & 128) !== 0) {
        if (t = f4 !== null ? f4.baseLanes | a6 : a6, l6 !== null) {
          for (n2 = u6.child = l6.child, f4 = 0; n2 !== null; ) f4 = f4 | n2.lanes | n2.childLanes, n2 = n2.sibling;
          u6.childLanes = f4 & ~t;
        } else u6.childLanes = 0, u6.child = null;
        return Ui2(l6, u6, t, a6);
      }
      if ((a6 & 536870912) !== 0) u6.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l6 !== null && yn(u6, f4 !== null ? f4.cachePool : null), f4 !== null ? di(u6, f4) : gc2(), R1(u6);
      else return u6.lanes = u6.childLanes = 536870912, Ui2(l6, u6, f4 !== null ? f4.baseLanes | a6 : a6, a6);
    } else f4 !== null ? (yn(u6, f4.cachePool), di(u6, f4), Su2(u6), u6.memoizedState = null) : (l6 !== null && yn(u6, null), gc2(), Su2(u6));
    return nl3(l6, u6, n2, a6), u6.child;
  }
  function Ui2(l6, u6, a6, t) {
    var n2 = ne5();
    return n2 = n2 === null ? null : {
      parent: k10._currentValue,
      pool: n2
    }, u6.memoizedState = {
      baseLanes: a6,
      cachePool: n2
    }, l6 !== null && yn(u6, null), gc2(), R1(u6), l6 !== null && _t3(l6, u6, t, true), null;
  }
  function mn(l6, u6) {
    var a6 = u6.ref;
    if (a6 === null) l6 !== null && l6.ref !== null && (u6.flags |= 4194816);
    else {
      if (typeof a6 != "function" && typeof a6 != "object") throw Error(A12(284));
      (l6 === null || l6.ref !== a6) && (u6.flags |= 4194816);
    }
  }
  function Ec(l6, u6, a6, t, n2) {
    return pu(u6), a6 = ie6(l6, u6, a6, t, void 0, n2), t = ve6(), l6 !== null && !al3 ? (he6(l6, u6, n2), tu2(l6, u6, n2)) : (Y7 && t && ue4(u6), u6.flags |= 1, nl3(l6, u6, a6, n2), u6.child);
  }
  function Hi2(l6, u6, a6, t, n2, f4) {
    return pu(u6), u6.updateQueue = null, a6 = r0(u6, t, a6, n2), k0(l6), t = ve6(), l6 !== null && !al3 ? (he6(l6, u6, f4), tu2(l6, u6, f4)) : (Y7 && t && ue4(u6), u6.flags |= 1, nl3(l6, u6, a6, f4), u6.child);
  }
  function Ni(l6, u6, a6, t, n2) {
    if (pu(u6), u6.stateNode === null) {
      var f4 = ya2, c4 = a6.contextType;
      typeof c4 == "object" && c4 !== null && (f4 = il(c4)), f4 = new a6(t, f4), u6.memoizedState = f4.state !== null && f4.state !== void 0 ? f4.state : null, f4.updater = Tc, u6.stateNode = f4, f4._reactInternals = u6, f4 = u6.stateNode, f4.props = t, f4.state = u6.memoizedState, f4.refs = {}, fe5(u6), c4 = a6.contextType, f4.context = typeof c4 == "object" && c4 !== null ? il(c4) : ya2, f4.state = u6.memoizedState, c4 = a6.getDerivedStateFromProps, typeof c4 == "function" && (Bf(u6, a6, c4, t), f4.state = u6.memoizedState), typeof a6.getDerivedStateFromProps == "function" || typeof f4.getSnapshotBeforeUpdate == "function" || typeof f4.UNSAFE_componentWillMount != "function" && typeof f4.componentWillMount != "function" || (c4 = f4.state, typeof f4.componentWillMount == "function" && f4.componentWillMount(), typeof f4.UNSAFE_componentWillMount == "function" && f4.UNSAFE_componentWillMount(), c4 !== f4.state && Tc.enqueueReplaceState(f4, f4.state, null), ft2(u6, t, f4, n2), nt5(), f4.state = u6.memoizedState), typeof f4.componentDidMount == "function" && (u6.flags |= 4194308), t = true;
    } else if (l6 === null) {
      f4 = u6.stateNode;
      var e = u6.memoizedProps, i3 = Wu(a6, e);
      f4.props = i3;
      var d4 = f4.context, g8 = a6.contextType;
      c4 = ya2, typeof g8 == "object" && g8 !== null && (c4 = il(g8));
      var z10 = a6.getDerivedStateFromProps;
      g8 = typeof z10 == "function" || typeof f4.getSnapshotBeforeUpdate == "function", e = u6.pendingProps !== e, g8 || typeof f4.UNSAFE_componentWillReceiveProps != "function" && typeof f4.componentWillReceiveProps != "function" || (e || d4 !== c4) && Ei(u6, f4, t, c4), hu2 = false;
      var S10 = u6.memoizedState;
      f4.state = S10, ft2(u6, t, f4, n2), nt5(), d4 = u6.memoizedState, e || S10 !== d4 || hu2 ? (typeof z10 == "function" && (Bf(u6, a6, z10, t), d4 = u6.memoizedState), (i3 = hu2 || Mi(u6, a6, i3, t, S10, d4, c4)) ? (g8 || typeof f4.UNSAFE_componentWillMount != "function" && typeof f4.componentWillMount != "function" || (typeof f4.componentWillMount == "function" && f4.componentWillMount(), typeof f4.UNSAFE_componentWillMount == "function" && f4.UNSAFE_componentWillMount()), typeof f4.componentDidMount == "function" && (u6.flags |= 4194308)) : (typeof f4.componentDidMount == "function" && (u6.flags |= 4194308), u6.memoizedProps = t, u6.memoizedState = d4), f4.props = t, f4.state = d4, f4.context = c4, t = i3) : (typeof f4.componentDidMount == "function" && (u6.flags |= 4194308), t = false);
    } else {
      f4 = u6.stateNode, Sc(l6, u6), c4 = u6.memoizedProps, g8 = Wu(a6, c4), f4.props = g8, z10 = u6.pendingProps, S10 = f4.context, d4 = a6.contextType, i3 = ya2, typeof d4 == "object" && d4 !== null && (i3 = il(d4)), e = a6.getDerivedStateFromProps, (d4 = typeof e == "function" || typeof f4.getSnapshotBeforeUpdate == "function") || typeof f4.UNSAFE_componentWillReceiveProps != "function" && typeof f4.componentWillReceiveProps != "function" || (c4 !== z10 || S10 !== i3) && Ei(u6, f4, t, i3), hu2 = false, S10 = u6.memoizedState, f4.state = S10, ft2(u6, t, f4, n2), nt5();
      var m6 = u6.memoizedState;
      c4 !== z10 || S10 !== m6 || hu2 || l6 !== null && l6.dependencies !== null && qn(l6.dependencies) ? (typeof e == "function" && (Bf(u6, a6, e, t), m6 = u6.memoizedState), (g8 = hu2 || Mi(u6, a6, g8, t, S10, m6, i3) || l6 !== null && l6.dependencies !== null && qn(l6.dependencies)) ? (d4 || typeof f4.UNSAFE_componentWillUpdate != "function" && typeof f4.componentWillUpdate != "function" || (typeof f4.componentWillUpdate == "function" && f4.componentWillUpdate(t, m6, i3), typeof f4.UNSAFE_componentWillUpdate == "function" && f4.UNSAFE_componentWillUpdate(t, m6, i3)), typeof f4.componentDidUpdate == "function" && (u6.flags |= 4), typeof f4.getSnapshotBeforeUpdate == "function" && (u6.flags |= 1024)) : (typeof f4.componentDidUpdate != "function" || c4 === l6.memoizedProps && S10 === l6.memoizedState || (u6.flags |= 4), typeof f4.getSnapshotBeforeUpdate != "function" || c4 === l6.memoizedProps && S10 === l6.memoizedState || (u6.flags |= 1024), u6.memoizedProps = t, u6.memoizedState = m6), f4.props = t, f4.state = m6, f4.context = i3, t = g8) : (typeof f4.componentDidUpdate != "function" || c4 === l6.memoizedProps && S10 === l6.memoizedState || (u6.flags |= 4), typeof f4.getSnapshotBeforeUpdate != "function" || c4 === l6.memoizedProps && S10 === l6.memoizedState || (u6.flags |= 1024), t = false);
    }
    return f4 = t, mn(l6, u6), t = (u6.flags & 128) !== 0, f4 || t ? (f4 = u6.stateNode, a6 = t && typeof a6.getDerivedStateFromError != "function" ? null : f4.render(), u6.flags |= 1, l6 !== null && t ? (u6.child = Ba2(u6, l6.child, null, n2), u6.child = Ba2(u6, null, a6, n2)) : nl3(l6, u6, a6, n2), u6.memoizedState = f4.state, l6 = u6.child) : l6 = tu2(l6, u6, n2), l6;
  }
  function qi2(l6, u6, a6, t) {
    return ot4(), u6.flags |= 256, nl3(l6, u6, a6, t), u6.child;
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
  function of(l6, u6, a6) {
    return l6 = l6 !== null ? l6.childLanes & ~a6 : 0, u6 && (l6 |= Rl2), l6;
  }
  function V1(l6, u6, a6) {
    var t = u6.pendingProps, n2 = false, f4 = (u6.flags & 128) !== 0, c4;
    if ((c4 = f4) || (c4 = l6 !== null && l6.memoizedState === null ? false : (r4.current & 2) !== 0), c4 && (n2 = true, u6.flags &= -129), c4 = (u6.flags & 32) !== 0, u6.flags &= -33, l6 === null) {
      if (Y7) {
        if (n2 ? du2(u6) : Su2(u6), Y7) {
          var e = p5, i3;
          if (i3 = e) {
            l: {
              for (i3 = e, e = Zl2; i3.nodeType !== 8; ) {
                if (!e) {
                  e = null;
                  break l;
                }
                if (i3 = Xl3(i3.nextSibling), i3 === null) {
                  e = null;
                  break l;
                }
              }
              e = i3;
            }
            e !== null ? (u6.memoizedState = {
              dehydrated: e,
              treeContext: xu !== null ? {
                id: Fl,
                overflow: kl
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i3 = Al(18, null, null, 0), i3.stateNode = e, i3.return = u6, u6.child = i3, vl = u6, p5 = null, i3 = true) : i3 = false;
          }
          i3 || Lu2(u6);
        }
        if (e = u6.memoizedState, e !== null && (e = e.dehydrated, e !== null)) return Gc(e) ? u6.lanes = 32 : u6.lanes = 536870912, null;
        Il2(u6);
      }
      return e = t.children, t = t.fallback, n2 ? (Su2(u6), n2 = u6.mode, e = Qn3({
        mode: "hidden",
        children: e
      }, n2), t = Zu(t, n2, a6, null), e.return = u6, t.return = u6, e.sibling = t, u6.child = e, n2 = u6.child, n2.memoizedState = Yf(a6), n2.childLanes = of(l6, c4, a6), u6.memoizedState = Rf, t) : (du2(u6), Dc(u6, e));
    }
    if (i3 = l6.memoizedState, i3 !== null && (e = i3.dehydrated, e !== null)) {
      if (f4) u6.flags & 256 ? (du2(u6), u6.flags &= -257, u6 = _f(l6, u6, a6)) : u6.memoizedState !== null ? (Su2(u6), u6.child = l6.child, u6.flags |= 128, u6 = null) : (Su2(u6), n2 = t.fallback, e = u6.mode, t = Qn3({
        mode: "visible",
        children: t.children
      }, e), n2 = Zu(n2, e, a6, null), n2.flags |= 2, t.return = u6, n2.return = u6, t.sibling = n2, u6.child = t, Ba2(u6, l6.child, null, a6), t = u6.child, t.memoizedState = Yf(a6), t.childLanes = of(l6, c4, a6), u6.memoizedState = Rf, u6 = n2);
      else if (du2(u6), Gc(e)) {
        if (c4 = e.nextSibling && e.nextSibling.dataset, c4) var d4 = c4.dgst;
        c4 = d4, t = Error(A12(419)), t.stack = "", t.digest = c4, bt3({
          value: t,
          source: null,
          stack: null
        }), u6 = _f(l6, u6, a6);
      } else if (al3 || _t3(l6, u6, a6, false), c4 = (a6 & l6.childLanes) !== 0, al3 || c4) {
        if (c4 = V6, c4 !== null && (t = a6 & -a6, t = (t & 42) !== 0 ? 1 : Lc(t), t = (t & (c4.suspendedLanes | a6)) !== 0 ? 0 : t, t !== 0 && t !== i3.retryLane)) throw i3.retryLane = t, Qa2(l6, t), Dl(c4, l6, t), Q1;
        e.data === "$?" || qc(), u6 = _f(l6, u6, a6);
      } else e.data === "$?" ? (u6.flags |= 192, u6.child = l6.child, u6 = null) : (l6 = i3.treeContext, p5 = Xl3(e.nextSibling), vl = u6, Y7 = true, Vu = null, Zl2 = false, l6 !== null && (Hl[Nl2++] = Fl, Hl[Nl2++] = kl, Hl[Nl2++] = xu, Fl = l6.id, kl = l6.overflow, xu = u6), u6 = Dc(u6, t.children), u6.flags |= 4096);
      return u6;
    }
    return n2 ? (Su2(u6), n2 = t.fallback, e = u6.mode, i3 = l6.child, d4 = i3.sibling, t = Pl(i3, {
      mode: "hidden",
      children: t.children
    }), t.subtreeFlags = i3.subtreeFlags & 65011712, d4 !== null ? n2 = Pl(d4, n2) : (n2 = Zu(n2, e, a6, null), n2.flags |= 2), n2.return = u6, t.return = u6, t.sibling = n2, u6.child = t, t = n2, n2 = u6.child, e = l6.child.memoizedState, e === null ? e = Yf(a6) : (i3 = e.cachePool, i3 !== null ? (d4 = k10._currentValue, i3 = i3.parent !== d4 ? {
      parent: d4,
      pool: d4
    } : i3) : i3 = J0(), e = {
      baseLanes: e.baseLanes | a6,
      cachePool: i3
    }), n2.memoizedState = e, n2.childLanes = of(l6, c4, a6), u6.memoizedState = Rf, t) : (du2(u6), a6 = l6.child, l6 = a6.sibling, a6 = Pl(a6, {
      mode: "visible",
      children: t.children
    }), a6.return = u6, a6.sibling = null, l6 !== null && (c4 = u6.deletions, c4 === null ? (u6.deletions = [
      l6
    ], u6.flags |= 16) : c4.push(l6)), u6.child = a6, u6.memoizedState = null, a6);
  }
  function Dc(l6, u6) {
    return u6 = Qn3({
      mode: "visible",
      children: u6
    }, l6.mode), u6.return = l6, l6.child = u6;
  }
  function Qn3(l6, u6) {
    return l6 = Al(22, l6, null, u6), l6.lanes = 0, l6.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l6;
  }
  function _f(l6, u6, a6) {
    return Ba2(u6, l6.child, null, a6), l6 = Dc(u6, u6.pendingProps.children), l6.flags |= 2, u6.memoizedState = null, l6;
  }
  function Bi3(l6, u6, a6) {
    l6.lanes |= u6;
    var t = l6.alternate;
    t !== null && (t.lanes |= u6), vc2(l6.return, u6, a6);
  }
  function Xf(l6, u6, a6, t, n2) {
    var f4 = l6.memoizedState;
    f4 === null ? l6.memoizedState = {
      isBackwards: u6,
      rendering: null,
      renderingStartTime: 0,
      last: t,
      tail: a6,
      tailMode: n2
    } : (f4.isBackwards = u6, f4.rendering = null, f4.renderingStartTime = 0, f4.last = t, f4.tail = a6, f4.tailMode = n2);
  }
  function j1(l6, u6, a6) {
    var t = u6.pendingProps, n2 = t.revealOrder, f4 = t.tail;
    if (nl3(l6, u6, t.children, a6), t = r4.current, (t & 2) !== 0) t = t & 1 | 2, u6.flags |= 128;
    else {
      if (l6 !== null && (l6.flags & 128) !== 0) l: for (l6 = u6.child; l6 !== null; ) {
        if (l6.tag === 13) l6.memoizedState !== null && Bi3(l6, a6, u6);
        else if (l6.tag === 19) Bi3(l6, a6, u6);
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
    switch (C8(r4, t), n2) {
      case "forwards":
        for (a6 = u6.child, n2 = null; a6 !== null; ) l6 = a6.alternate, l6 !== null && _n2(l6) === null && (n2 = a6), a6 = a6.sibling;
        a6 = n2, a6 === null ? (n2 = u6.child, u6.child = null) : (n2 = a6.sibling, a6.sibling = null), Xf(u6, false, n2, a6, f4);
        break;
      case "backwards":
        for (a6 = null, n2 = u6.child, u6.child = null; n2 !== null; ) {
          if (l6 = n2.alternate, l6 !== null && _n2(l6) === null) {
            u6.child = n2;
            break;
          }
          l6 = n2.sibling, n2.sibling = a6, a6 = n2, n2 = l6;
        }
        Xf(u6, true, a6, null, f4);
        break;
      case "together":
        Xf(u6, false, null, null, void 0);
        break;
      default:
        u6.memoizedState = null;
    }
    return u6.child;
  }
  function tu2(l6, u6, a6) {
    if (l6 !== null && (u6.dependencies = l6.dependencies), Bu2 |= u6.lanes, (a6 & u6.childLanes) === 0) if (l6 !== null) {
      if (_t3(l6, u6, a6, false), (a6 & u6.childLanes) === 0) return null;
    } else return null;
    if (l6 !== null && u6.child !== l6.child) throw Error(A12(153));
    if (u6.child !== null) {
      for (l6 = u6.child, a6 = Pl(l6, l6.pendingProps), u6.child = a6, a6.return = u6; l6.sibling !== null; ) l6 = l6.sibling, a6 = a6.sibling = Pl(l6, l6.pendingProps), a6.return = u6;
      a6.sibling = null;
    }
    return u6.child;
  }
  function Te5(l6, u6) {
    return (l6.lanes & u6) !== 0 ? true : (l6 = l6.dependencies, !!(l6 !== null && qn(l6)));
  }
  function Oy(l6, u6, a6) {
    switch (u6.tag) {
      case 3:
        Mn2(u6, u6.stateNode.containerInfo), yu2(u6, k10, l6.memoizedState.cache), ot4();
        break;
      case 27:
      case 5:
        rf(u6);
        break;
      case 4:
        Mn2(u6, u6.stateNode.containerInfo);
        break;
      case 10:
        yu2(u6, u6.type, u6.memoizedProps.value);
        break;
      case 13:
        var t = u6.memoizedState;
        if (t !== null) return t.dehydrated !== null ? (du2(u6), u6.flags |= 128, null) : (a6 & u6.child.childLanes) !== 0 ? V1(l6, u6, a6) : (du2(u6), l6 = tu2(l6, u6, a6), l6 !== null ? l6.sibling : null);
        du2(u6);
        break;
      case 19:
        var n2 = (l6.flags & 128) !== 0;
        if (t = (a6 & u6.childLanes) !== 0, t || (_t3(l6, u6, a6, false), t = (a6 & u6.childLanes) !== 0), n2) {
          if (t) return j1(l6, u6, a6);
          u6.flags |= 128;
        }
        if (n2 = u6.memoizedState, n2 !== null && (n2.rendering = null, n2.tail = null, n2.lastEffect = null), C8(r4, r4.current), t) break;
        return null;
      case 22:
      case 23:
        return u6.lanes = 0, x1(l6, u6, a6);
      case 24:
        yu2(u6, k10, l6.memoizedState.cache);
    }
    return tu2(l6, u6, a6);
  }
  function K1(l6, u6, a6) {
    if (l6 !== null) if (l6.memoizedProps !== u6.pendingProps) al3 = true;
    else {
      if (!Te5(l6, a6) && (u6.flags & 128) === 0) return al3 = false, Oy(l6, u6, a6);
      al3 = (l6.flags & 131072) !== 0;
    }
    else al3 = false, Y7 && (u6.flags & 1048576) !== 0 && L0(u6, Nn, u6.index);
    switch (u6.lanes = 0, u6.tag) {
      case 16:
        l: {
          l6 = u6.pendingProps;
          var t = u6.elementType, n2 = t._init;
          if (t = n2(t._payload), u6.type = t, typeof t == "function") le4(t) ? (l6 = Wu(t, l6), u6.tag = 1, u6 = Ni(null, u6, t, l6, a6)) : (u6.tag = 0, u6 = Ec(null, u6, t, l6, a6));
          else {
            if (t != null) {
              if (n2 = t.$$typeof, n2 === jc) {
                u6.tag = 11, u6 = Oi(null, u6, t, l6, a6);
                break l;
              } else if (n2 === Kc) {
                u6.tag = 14, u6 = si(null, u6, t, l6, a6);
                break l;
              }
            }
            throw u6 = Ff(t) || t, Error(A12(306, u6, ""));
          }
        }
        return u6;
      case 0:
        return Ec(l6, u6, u6.type, u6.pendingProps, a6);
      case 1:
        return t = u6.type, n2 = Wu(t, u6.pendingProps), Ni(l6, u6, t, n2, a6);
      case 3:
        l: {
          if (Mn2(u6, u6.stateNode.containerInfo), l6 === null) throw Error(A12(387));
          t = u6.pendingProps;
          var f4 = u6.memoizedState;
          n2 = f4.element, Sc(l6, u6), ft2(u6, t, null, a6);
          var c4 = u6.memoizedState;
          if (t = c4.cache, yu2(u6, k10, t), t !== f4.cache && hc(u6, [
            k10
          ], a6, true), nt5(), t = c4.element, f4.isDehydrated) if (f4 = {
            element: t,
            isDehydrated: false,
            cache: c4.cache
          }, u6.updateQueue.baseState = f4, u6.memoizedState = f4, u6.flags & 256) {
            u6 = qi2(l6, u6, t, a6);
            break l;
          } else if (t !== n2) {
            n2 = Bl(Error(A12(424)), u6), bt3(n2), u6 = qi2(l6, u6, t, a6);
            break l;
          } else {
            switch (l6 = u6.stateNode.containerInfo, l6.nodeType) {
              case 9:
                l6 = l6.body;
                break;
              default:
                l6 = l6.nodeName === "HTML" ? l6.ownerDocument.body : l6;
            }
            for (p5 = Xl3(l6.firstChild), vl = u6, Y7 = true, Vu = null, Zl2 = true, a6 = B1(u6, null, t, a6), u6.child = a6; a6; ) a6.flags = a6.flags & -3 | 4096, a6 = a6.sibling;
          }
          else {
            if (ot4(), t === n2) {
              u6 = tu2(l6, u6, a6);
              break l;
            }
            nl3(l6, u6, t, a6);
          }
          u6 = u6.child;
        }
        return u6;
      case 26:
        return mn(l6, u6), l6 === null ? (a6 = $i2(u6.type, null, u6.pendingProps, null)) ? u6.memoizedState = a6 : Y7 || (a6 = u6.type, l6 = u6.pendingProps, t = Ln3(Tu.current).createElement(a6), t[el2] = u6, t[Sl] = l6, cl2(t, a6, l6), ul2(t), u6.stateNode = t) : u6.memoizedState = $i2(u6.type, l6.memoizedProps, u6.pendingProps, l6.memoizedState), null;
      case 27:
        return rf(u6), l6 === null && Y7 && (t = u6.stateNode = Nv(u6.type, u6.pendingProps, Tu.current), vl = u6, Zl2 = true, n2 = p5, Yu(u6.type) ? (Qc = n2, p5 = Xl3(t.firstChild)) : p5 = n2), nl3(l6, u6, u6.pendingProps.children, a6), mn(l6, u6), l6 === null && (u6.flags |= 4194304), u6.child;
      case 5:
        return l6 === null && Y7 && ((n2 = t = p5) && (t = Fy(t, u6.type, u6.pendingProps, Zl2), t !== null ? (u6.stateNode = t, vl = u6, p5 = Xl3(t.firstChild), Zl2 = false, n2 = true) : n2 = false), n2 || Lu2(u6)), rf(u6), n2 = u6.type, f4 = u6.pendingProps, c4 = l6 !== null ? l6.memoizedProps : null, t = f4.children, _c(n2, f4) ? t = null : c4 !== null && _c(n2, c4) && (u6.flags |= 32), u6.memoizedState !== null && (n2 = ie6(l6, u6, gy, null, null, a6), Dt4._currentValue = n2), mn(l6, u6), nl3(l6, u6, t, a6), u6.child;
      case 6:
        return l6 === null && Y7 && ((l6 = a6 = p5) && (a6 = ky(a6, u6.pendingProps, Zl2), a6 !== null ? (u6.stateNode = a6, vl = u6, p5 = null, l6 = true) : l6 = false), l6 || Lu2(u6)), null;
      case 13:
        return V1(l6, u6, a6);
      case 4:
        return Mn2(u6, u6.stateNode.containerInfo), t = u6.pendingProps, l6 === null ? u6.child = Ba2(u6, null, t, a6) : nl3(l6, u6, t, a6), u6.child;
      case 11:
        return Oi(l6, u6, u6.type, u6.pendingProps, a6);
      case 7:
        return nl3(l6, u6, u6.pendingProps, a6), u6.child;
      case 8:
        return nl3(l6, u6, u6.pendingProps.children, a6), u6.child;
      case 12:
        return nl3(l6, u6, u6.pendingProps.children, a6), u6.child;
      case 10:
        return t = u6.pendingProps, yu2(u6, u6.type, t.value), nl3(l6, u6, t.children, a6), u6.child;
      case 9:
        return n2 = u6.type._context, t = u6.pendingProps.children, pu(u6), n2 = il(n2), t = t(n2), u6.flags |= 1, nl3(l6, u6, t, a6), u6.child;
      case 14:
        return si(l6, u6, u6.type, u6.pendingProps, a6);
      case 15:
        return Z1(l6, u6, u6.type, u6.pendingProps, a6);
      case 19:
        return j1(l6, u6, a6);
      case 31:
        return t = u6.pendingProps, a6 = u6.mode, t = {
          mode: t.mode,
          children: t.children
        }, l6 === null ? (a6 = Qn3(t, a6), a6.ref = u6.ref, u6.child = a6, a6.return = u6, u6 = a6) : (a6 = Pl(l6.child, t), a6.ref = u6.ref, u6.child = a6, a6.return = u6, u6 = a6), u6;
      case 22:
        return x1(l6, u6, a6);
      case 24:
        return pu(u6), t = il(k10), l6 === null ? (n2 = ne5(), n2 === null && (n2 = V6, f4 = te4(), n2.pooledCache = f4, f4.refCount++, f4 !== null && (n2.pooledCacheLanes |= a6), n2 = f4), u6.memoizedState = {
          parent: t,
          cache: n2
        }, fe5(u6), yu2(u6, k10, n2)) : ((l6.lanes & a6) !== 0 && (Sc(l6, u6), ft2(u6, null, null, a6), nt5()), n2 = l6.memoizedState, f4 = u6.memoizedState, n2.parent !== t ? (n2 = {
          parent: t,
          cache: t
        }, u6.memoizedState = n2, u6.lanes === 0 && (u6.memoizedState = u6.updateQueue.baseState = n2), yu2(u6, k10, t)) : (t = f4.cache, yu2(u6, k10, t), t !== n2.cache && hc(u6, [
          k10
        ], a6, true))), nl3(l6, u6, u6.pendingProps.children, a6), u6.child;
      case 29:
        throw u6.pendingProps;
    }
    throw Error(A12(156, u6.tag));
  }
  function Jl2(l6) {
    l6.flags |= 4;
  }
  function Ri(l6, u6) {
    if (u6.type !== "stylesheet" || (u6.state.loading & 4) !== 0) l6.flags &= -16777217;
    else if (l6.flags |= 16777216, !Rv(u6)) {
      if (u6 = Yl2.current, u6 !== null && ((B10 & 4194048) === B10 ? Kl3 !== null : (B10 & 62914560) !== B10 && (B10 & 536870912) === 0 || u6 !== Kl3)) throw at3 = dc2, W0;
      l6.flags |= 8192;
    }
  }
  function Pt4(l6, u6) {
    u6 !== null && (l6.flags |= 4), l6.flags & 16384 && (u6 = l6.tag !== 22 ? S0() : 536870912, l6.lanes |= u6, Ra2 |= u6);
  }
  function pa(l6, u6) {
    if (!Y7) switch (l6.tailMode) {
      case "hidden":
        u6 = l6.tail;
        for (var a6 = null; u6 !== null; ) u6.alternate !== null && (a6 = u6), u6 = u6.sibling;
        a6 === null ? l6.tail = null : a6.sibling = null;
        break;
      case "collapsed":
        a6 = l6.tail;
        for (var t = null; a6 !== null; ) a6.alternate !== null && (t = a6), a6 = a6.sibling;
        t === null ? u6 || l6.tail === null ? l6.tail = null : l6.tail.sibling = null : t.sibling = null;
    }
  }
  function L3(l6) {
    var u6 = l6.alternate !== null && l6.alternate.child === l6.child, a6 = 0, t = 0;
    if (u6) for (var n2 = l6.child; n2 !== null; ) a6 |= n2.lanes | n2.childLanes, t |= n2.subtreeFlags & 65011712, t |= n2.flags & 65011712, n2.return = l6, n2 = n2.sibling;
    else for (n2 = l6.child; n2 !== null; ) a6 |= n2.lanes | n2.childLanes, t |= n2.subtreeFlags, t |= n2.flags, n2.return = l6, n2 = n2.sibling;
    return l6.subtreeFlags |= t, l6.childLanes = a6, u6;
  }
  function sy(l6, u6, a6) {
    var t = u6.pendingProps;
    switch (ae6(u6), u6.tag) {
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
        return L3(u6), null;
      case 1:
        return L3(u6), null;
      case 3:
        return a6 = u6.stateNode, t = null, l6 !== null && (t = l6.memoizedState.cache), u6.memoizedState.cache !== t && (u6.flags |= 2048), lu(k10), Oa2(), a6.pendingContext && (a6.context = a6.pendingContext, a6.pendingContext = null), (l6 === null || l6.child === null) && (Ca(u6) ? Jl2(u6) : l6 === null || l6.memoizedState.isDehydrated && (u6.flags & 256) === 0 || (u6.flags |= 1024, ci())), L3(u6), null;
      case 26:
        return a6 = u6.memoizedState, l6 === null ? (Jl2(u6), a6 !== null ? (L3(u6), Ri(u6, a6)) : (L3(u6), u6.flags &= -16777217)) : a6 ? a6 !== l6.memoizedState ? (Jl2(u6), L3(u6), Ri(u6, a6)) : (L3(u6), u6.flags &= -16777217) : (l6.memoizedProps !== t && Jl2(u6), L3(u6), u6.flags &= -16777217), null;
      case 27:
        En2(u6), a6 = Tu.current;
        var n2 = u6.type;
        if (l6 !== null && u6.stateNode != null) l6.memoizedProps !== t && Jl2(u6);
        else {
          if (!t) {
            if (u6.stateNode === null) throw Error(A12(166));
            return L3(u6), null;
          }
          l6 = Vl.current, Ca(u6) ? ni3(u6, l6) : (l6 = Nv(n2, t, a6), u6.stateNode = l6, Jl2(u6));
        }
        return L3(u6), null;
      case 5:
        if (En2(u6), a6 = u6.type, l6 !== null && u6.stateNode != null) l6.memoizedProps !== t && Jl2(u6);
        else {
          if (!t) {
            if (u6.stateNode === null) throw Error(A12(166));
            return L3(u6), null;
          }
          if (l6 = Vl.current, Ca(u6)) ni3(u6, l6);
          else {
            switch (n2 = Ln3(Tu.current), l6) {
              case 1:
                l6 = n2.createElementNS("http://www.w3.org/2000/svg", a6);
                break;
              case 2:
                l6 = n2.createElementNS("http://www.w3.org/1998/Math/MathML", a6);
                break;
              default:
                switch (a6) {
                  case "svg":
                    l6 = n2.createElementNS("http://www.w3.org/2000/svg", a6);
                    break;
                  case "math":
                    l6 = n2.createElementNS("http://www.w3.org/1998/Math/MathML", a6);
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
                    l6 = typeof t.is == "string" ? n2.createElement(a6, {
                      is: t.is
                    }) : n2.createElement(a6);
                }
            }
            l6[el2] = u6, l6[Sl] = t;
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
            l: switch (cl2(l6, a6, t), a6) {
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
        return L3(u6), u6.flags &= -16777217, null;
      case 6:
        if (l6 && u6.stateNode != null) l6.memoizedProps !== t && Jl2(u6);
        else {
          if (typeof t != "string" && u6.stateNode === null) throw Error(A12(166));
          if (l6 = Tu.current, Ca(u6)) {
            if (l6 = u6.stateNode, a6 = u6.memoizedProps, t = null, n2 = vl, n2 !== null) switch (n2.tag) {
              case 27:
              case 5:
                t = n2.memoizedProps;
            }
            l6[el2] = u6, l6 = !!(l6.nodeValue === a6 || t !== null && t.suppressHydrationWarning === true || sv(l6.nodeValue, a6)), l6 || Lu2(u6);
          } else l6 = Ln3(l6).createTextNode(t), l6[el2] = u6, u6.stateNode = l6;
        }
        return L3(u6), null;
      case 13:
        if (t = u6.memoizedState, l6 === null || l6.memoizedState !== null && l6.memoizedState.dehydrated !== null) {
          if (n2 = Ca(u6), t !== null && t.dehydrated !== null) {
            if (l6 === null) {
              if (!n2) throw Error(A12(318));
              if (n2 = u6.memoizedState, n2 = n2 !== null ? n2.dehydrated : null, !n2) throw Error(A12(317));
              n2[el2] = u6;
            } else ot4(), (u6.flags & 128) === 0 && (u6.memoizedState = null), u6.flags |= 4;
            L3(u6), n2 = false;
          } else n2 = ci(), l6 !== null && l6.memoizedState !== null && (l6.memoizedState.hydrationErrors = n2), n2 = true;
          if (!n2) return u6.flags & 256 ? (Il2(u6), u6) : (Il2(u6), null);
        }
        if (Il2(u6), (u6.flags & 128) !== 0) return u6.lanes = a6, u6;
        if (a6 = t !== null, l6 = l6 !== null && l6.memoizedState !== null, a6) {
          t = u6.child, n2 = null, t.alternate !== null && t.alternate.memoizedState !== null && t.alternate.memoizedState.cachePool !== null && (n2 = t.alternate.memoizedState.cachePool.pool);
          var f4 = null;
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (f4 = t.memoizedState.cachePool.pool), f4 !== n2 && (t.flags |= 2048);
        }
        return a6 !== l6 && a6 && (u6.child.flags |= 8192), Pt4(u6, u6.updateQueue), L3(u6), null;
      case 4:
        return Oa2(), l6 === null && Ne5(u6.stateNode.containerInfo), L3(u6), null;
      case 10:
        return lu(u6.type), L3(u6), null;
      case 19:
        if (tl2(r4), n2 = u6.memoizedState, n2 === null) return L3(u6), null;
        if (t = (u6.flags & 128) !== 0, f4 = n2.rendering, f4 === null) if (t) pa(n2, false);
        else {
          if (J6 !== 0 || l6 !== null && (l6.flags & 128) !== 0) for (l6 = u6.child; l6 !== null; ) {
            if (f4 = _n2(l6), f4 !== null) {
              for (u6.flags |= 128, pa(n2, false), l6 = f4.updateQueue, u6.updateQueue = l6, Pt4(u6, l6), u6.subtreeFlags = 0, l6 = a6, a6 = u6.child; a6 !== null; ) C0(a6, l6), a6 = a6.sibling;
              return C8(r4, r4.current & 1 | 2), u6.child;
            }
            l6 = l6.sibling;
          }
          n2.tail !== null && jl2() > xn2 && (u6.flags |= 128, t = true, pa(n2, false), u6.lanes = 4194304);
        }
        else {
          if (!t) if (l6 = _n2(f4), l6 !== null) {
            if (u6.flags |= 128, t = true, l6 = l6.updateQueue, u6.updateQueue = l6, Pt4(u6, l6), pa(n2, true), n2.tail === null && n2.tailMode === "hidden" && !f4.alternate && !Y7) return L3(u6), null;
          } else 2 * jl2() - n2.renderingStartTime > xn2 && a6 !== 536870912 && (u6.flags |= 128, t = true, pa(n2, false), u6.lanes = 4194304);
          n2.isBackwards ? (f4.sibling = u6.child, u6.child = f4) : (l6 = n2.last, l6 !== null ? l6.sibling = f4 : u6.child = f4, n2.last = f4);
        }
        return n2.tail !== null ? (u6 = n2.tail, n2.rendering = u6, n2.tail = u6.sibling, n2.renderingStartTime = jl2(), u6.sibling = null, l6 = r4.current, C8(r4, t ? l6 & 1 | 2 : l6 & 1), u6) : (L3(u6), null);
      case 22:
      case 23:
        return Il2(u6), ce6(), t = u6.memoizedState !== null, l6 !== null ? l6.memoizedState !== null !== t && (u6.flags |= 8192) : t && (u6.flags |= 8192), t ? (a6 & 536870912) !== 0 && (u6.flags & 128) === 0 && (L3(u6), u6.subtreeFlags & 6 && (u6.flags |= 8192)) : L3(u6), a6 = u6.updateQueue, a6 !== null && Pt4(u6, a6.retryQueue), a6 = null, l6 !== null && l6.memoizedState !== null && l6.memoizedState.cachePool !== null && (a6 = l6.memoizedState.cachePool.pool), t = null, u6.memoizedState !== null && u6.memoizedState.cachePool !== null && (t = u6.memoizedState.cachePool.pool), t !== a6 && (u6.flags |= 2048), l6 !== null && tl2(ju2), null;
      case 24:
        return a6 = null, l6 !== null && (a6 = l6.memoizedState.cache), u6.memoizedState.cache !== a6 && (u6.flags |= 2048), lu(k10), L3(u6), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(A12(156, u6.tag));
  }
  function Uy(l6, u6) {
    switch (ae6(u6), u6.tag) {
      case 1:
        return l6 = u6.flags, l6 & 65536 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 3:
        return lu(k10), Oa2(), l6 = u6.flags, (l6 & 65536) !== 0 && (l6 & 128) === 0 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 26:
      case 27:
      case 5:
        return En2(u6), null;
      case 13:
        if (Il2(u6), l6 = u6.memoizedState, l6 !== null && l6.dehydrated !== null) {
          if (u6.alternate === null) throw Error(A12(340));
          ot4();
        }
        return l6 = u6.flags, l6 & 65536 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 19:
        return tl2(r4), null;
      case 4:
        return Oa2(), null;
      case 10:
        return lu(u6.type), null;
      case 22:
      case 23:
        return Il2(u6), ce6(), l6 !== null && tl2(ju2), l6 = u6.flags, l6 & 65536 ? (u6.flags = l6 & -65537 | 128, u6) : null;
      case 24:
        return lu(k10), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function C1(l6, u6) {
    switch (ae6(u6), u6.tag) {
      case 3:
        lu(k10), Oa2();
        break;
      case 26:
      case 27:
      case 5:
        En2(u6);
        break;
      case 4:
        Oa2();
        break;
      case 13:
        Il2(u6);
        break;
      case 19:
        tl2(r4);
        break;
      case 10:
        lu(u6.type);
        break;
      case 22:
      case 23:
        Il2(u6), ce6(), l6 !== null && tl2(ju2);
        break;
      case 24:
        lu(k10);
    }
  }
  function xt4(l6, u6) {
    try {
      var a6 = u6.updateQueue, t = a6 !== null ? a6.lastEffect : null;
      if (t !== null) {
        var n2 = t.next;
        a6 = n2;
        do {
          if ((a6.tag & l6) === l6) {
            t = void 0;
            var f4 = a6.create, c4 = a6.inst;
            t = f4(), c4.destroy = t;
          }
          a6 = a6.next;
        } while (a6 !== n2);
      }
    } catch (e) {
      x9(u6, u6.return, e);
    }
  }
  function qu(l6, u6, a6) {
    try {
      var t = u6.updateQueue, n2 = t !== null ? t.lastEffect : null;
      if (n2 !== null) {
        var f4 = n2.next;
        t = f4;
        do {
          if ((t.tag & l6) === l6) {
            var c4 = t.inst, e = c4.destroy;
            if (e !== void 0) {
              c4.destroy = void 0, n2 = u6;
              var i3 = a6, d4 = e;
              try {
                d4();
              } catch (g8) {
                x9(n2, i3, g8);
              }
            }
          }
          t = t.next;
        } while (t !== f4);
      }
    } catch (g8) {
      x9(u6, u6.return, g8);
    }
  }
  function L1(l6) {
    var u6 = l6.updateQueue;
    if (u6 !== null) {
      var a6 = l6.stateNode;
      try {
        F0(u6, a6);
      } catch (t) {
        x9(l6, l6.return, t);
      }
    }
  }
  function p1(l6, u6, a6) {
    a6.props = Wu(l6.type, l6.memoizedProps), a6.state = l6.memoizedState;
    try {
      a6.componentWillUnmount();
    } catch (t) {
      x9(l6, u6, t);
    }
  }
  function et5(l6, u6) {
    try {
      var a6 = l6.ref;
      if (a6 !== null) {
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
        typeof a6 == "function" ? l6.refCleanup = a6(t) : a6.current = t;
      }
    } catch (n2) {
      x9(l6, u6, n2);
    }
  }
  function xl(l6, u6) {
    var a6 = l6.ref, t = l6.refCleanup;
    if (a6 !== null) if (typeof t == "function") try {
      t();
    } catch (n2) {
      x9(l6, u6, n2);
    } finally {
      l6.refCleanup = null, l6 = l6.alternate, l6 != null && (l6.refCleanup = null);
    }
    else if (typeof a6 == "function") try {
      a6(null);
    } catch (n2) {
      x9(l6, u6, n2);
    }
    else a6.current = null;
  }
  function J1(l6) {
    var u6 = l6.type, a6 = l6.memoizedProps, t = l6.stateNode;
    try {
      l: switch (u6) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a6.autoFocus && t.focus();
          break l;
        case "img":
          a6.src ? t.src = a6.src : a6.srcSet && (t.srcset = a6.srcSet);
      }
    } catch (n2) {
      x9(l6, l6.return, n2);
    }
  }
  function Gf(l6, u6, a6) {
    try {
      var t = l6.stateNode;
      py(t, l6.type, a6, u6), t[Sl] = u6;
    } catch (n2) {
      x9(l6, l6.return, n2);
    }
  }
  function W1(l6) {
    return l6.tag === 5 || l6.tag === 3 || l6.tag === 26 || l6.tag === 27 && Yu(l6.type) || l6.tag === 4;
  }
  function Qf(l6) {
    l: for (; ; ) {
      for (; l6.sibling === null; ) {
        if (l6.return === null || W1(l6.return)) return null;
        l6 = l6.return;
      }
      for (l6.sibling.return = l6.return, l6 = l6.sibling; l6.tag !== 5 && l6.tag !== 6 && l6.tag !== 18; ) {
        if (l6.tag === 27 && Yu(l6.type) || l6.flags & 2 || l6.child === null || l6.tag === 4) continue l;
        l6.child.return = l6, l6 = l6.child;
      }
      if (!(l6.flags & 2)) return l6.stateNode;
    }
  }
  function Oc(l6, u6, a6) {
    var t = l6.tag;
    if (t === 5 || t === 6) l6 = l6.stateNode, u6 ? (a6.nodeType === 9 ? a6.body : a6.nodeName === "HTML" ? a6.ownerDocument.body : a6).insertBefore(l6, u6) : (u6 = a6.nodeType === 9 ? a6.body : a6.nodeName === "HTML" ? a6.ownerDocument.body : a6, u6.appendChild(l6), a6 = a6._reactRootContainer, a6 != null || u6.onclick !== null || (u6.onclick = vf));
    else if (t !== 4 && (t === 27 && Yu(l6.type) && (a6 = l6.stateNode, u6 = null), l6 = l6.child, l6 !== null)) for (Oc(l6, u6, a6), l6 = l6.sibling; l6 !== null; ) Oc(l6, u6, a6), l6 = l6.sibling;
  }
  function Zn(l6, u6, a6) {
    var t = l6.tag;
    if (t === 5 || t === 6) l6 = l6.stateNode, u6 ? a6.insertBefore(l6, u6) : a6.appendChild(l6);
    else if (t !== 4 && (t === 27 && Yu(l6.type) && (a6 = l6.stateNode), l6 = l6.child, l6 !== null)) for (Zn(l6, u6, a6), l6 = l6.sibling; l6 !== null; ) Zn(l6, u6, a6), l6 = l6.sibling;
  }
  function w1(l6) {
    var u6 = l6.stateNode, a6 = l6.memoizedProps;
    try {
      for (var t = l6.type, n2 = u6.attributes; n2.length; ) u6.removeAttributeNode(n2[0]);
      cl2(u6, t, a6), u6[el2] = l6, u6[Sl] = a6;
    } catch (f4) {
      x9(l6, l6.return, f4);
    }
  }
  var wl = false, w8 = false, Zf = false, Yi2 = typeof WeakSet == "function" ? WeakSet : Set, ll2 = null;
  function Hy(l6, u6) {
    if (l6 = l6.containerInfo, Yc = wn2, l6 = X0(l6), rc2(l6)) {
      if ("selectionStart" in l6) var a6 = {
        start: l6.selectionStart,
        end: l6.selectionEnd
      };
      else l: {
        a6 = (a6 = l6.ownerDocument) && a6.defaultView || window;
        var t = a6.getSelection && a6.getSelection();
        if (t && t.rangeCount !== 0) {
          a6 = t.anchorNode;
          var n2 = t.anchorOffset, f4 = t.focusNode;
          t = t.focusOffset;
          try {
            a6.nodeType, f4.nodeType;
          } catch {
            a6 = null;
            break l;
          }
          var c4 = 0, e = -1, i3 = -1, d4 = 0, g8 = 0, z10 = l6, S10 = null;
          u: for (; ; ) {
            for (var m6; z10 !== a6 || n2 !== 0 && z10.nodeType !== 3 || (e = c4 + n2), z10 !== f4 || t !== 0 && z10.nodeType !== 3 || (i3 = c4 + t), z10.nodeType === 3 && (c4 += z10.nodeValue.length), (m6 = z10.firstChild) !== null; ) S10 = z10, z10 = m6;
            for (; ; ) {
              if (z10 === l6) break u;
              if (S10 === a6 && ++d4 === n2 && (e = c4), S10 === f4 && ++g8 === t && (i3 = c4), (m6 = z10.nextSibling) !== null) break;
              z10 = S10, S10 = z10.parentNode;
            }
            z10 = m6;
          }
          a6 = e === -1 || i3 === -1 ? null : {
            start: e,
            end: i3
          };
        } else a6 = null;
      }
      a6 = a6 || {
        start: 0,
        end: 0
      };
    } else a6 = null;
    for (oc2 = {
      focusedElem: l6,
      selectionRange: a6
    }, wn2 = false, ll2 = u6; ll2 !== null; ) if (u6 = ll2, l6 = u6.child, (u6.subtreeFlags & 1024) !== 0 && l6 !== null) l6.return = u6, ll2 = l6;
    else for (; ll2 !== null; ) {
      switch (u6 = ll2, f4 = u6.alternate, l6 = u6.flags, u6.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l6 & 1024) !== 0 && f4 !== null) {
            l6 = void 0, a6 = u6, n2 = f4.memoizedProps, f4 = f4.memoizedState, t = a6.stateNode;
            try {
              var O6 = Wu(a6.type, n2, a6.elementType === a6.type);
              l6 = t.getSnapshotBeforeUpdate(O6, f4), t.__reactInternalSnapshotBeforeUpdate = l6;
            } catch (E14) {
              x9(a6, a6.return, E14);
            }
          }
          break;
        case 3:
          if ((l6 & 1024) !== 0) {
            if (l6 = u6.stateNode.containerInfo, a6 = l6.nodeType, a6 === 9) Xc(l6);
            else if (a6 === 1) switch (l6.nodeName) {
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
          if ((l6 & 1024) !== 0) throw Error(A12(163));
      }
      if (l6 = u6.sibling, l6 !== null) {
        l6.return = u6.return, ll2 = l6;
        break;
      }
      ll2 = u6.return;
    }
  }
  function $1(l6, u6, a6) {
    var t = a6.flags;
    switch (a6.tag) {
      case 0:
      case 11:
      case 15:
        eu(l6, a6), t & 4 && xt4(5, a6);
        break;
      case 1:
        if (eu(l6, a6), t & 4) if (l6 = a6.stateNode, u6 === null) try {
          l6.componentDidMount();
        } catch (c4) {
          x9(a6, a6.return, c4);
        }
        else {
          var n2 = Wu(a6.type, u6.memoizedProps);
          u6 = u6.memoizedState;
          try {
            l6.componentDidUpdate(n2, u6, l6.__reactInternalSnapshotBeforeUpdate);
          } catch (c4) {
            x9(a6, a6.return, c4);
          }
        }
        t & 64 && L1(a6), t & 512 && et5(a6, a6.return);
        break;
      case 3:
        if (eu(l6, a6), t & 64 && (l6 = a6.updateQueue, l6 !== null)) {
          if (u6 = null, a6.child !== null) switch (a6.child.tag) {
            case 27:
            case 5:
              u6 = a6.child.stateNode;
              break;
            case 1:
              u6 = a6.child.stateNode;
          }
          try {
            F0(l6, u6);
          } catch (c4) {
            x9(a6, a6.return, c4);
          }
        }
        break;
      case 27:
        u6 === null && t & 4 && w1(a6);
      case 26:
      case 5:
        eu(l6, a6), u6 === null && t & 4 && J1(a6), t & 512 && et5(a6, a6.return);
        break;
      case 12:
        eu(l6, a6);
        break;
      case 13:
        eu(l6, a6), t & 4 && r1(l6, a6), t & 64 && (l6 = a6.memoizedState, l6 !== null && (l6 = l6.dehydrated, l6 !== null && (a6 = Gy.bind(null, a6), ry(l6, a6))));
        break;
      case 22:
        if (t = a6.memoizedState !== null || wl, !t) {
          u6 = u6 !== null && u6.memoizedState !== null || w8, n2 = wl;
          var f4 = w8;
          wl = t, (w8 = u6) && !f4 ? iu(l6, a6, (a6.subtreeFlags & 8772) !== 0) : eu(l6, a6), wl = n2, w8 = f4;
        }
        break;
      case 30:
        break;
      default:
        eu(l6, a6);
    }
  }
  function F12(l6) {
    var u6 = l6.alternate;
    u6 !== null && (l6.alternate = null, F12(u6)), l6.child = null, l6.deletions = null, l6.sibling = null, l6.tag === 5 && (u6 = l6.stateNode, u6 !== null && Jc(u6)), l6.stateNode = null, l6.return = null, l6.dependencies = null, l6.memoizedProps = null, l6.memoizedState = null, l6.pendingProps = null, l6.stateNode = null, l6.updateQueue = null;
  }
  var K8 = null, yl2 = false;
  function Wl(l6, u6, a6) {
    for (a6 = a6.child; a6 !== null; ) k1(l6, u6, a6), a6 = a6.sibling;
  }
  function k1(l6, u6, a6) {
    if (Tl && typeof Tl.onCommitFiberUnmount == "function") try {
      Tl.onCommitFiberUnmount(Nt2, a6);
    } catch {
    }
    switch (a6.tag) {
      case 26:
        w8 || xl(a6, u6), Wl(l6, u6, a6), a6.memoizedState ? a6.memoizedState.count-- : a6.stateNode && (a6 = a6.stateNode, a6.parentNode.removeChild(a6));
        break;
      case 27:
        w8 || xl(a6, u6);
        var t = K8, n2 = yl2;
        Yu(a6.type) && (K8 = a6.stateNode, yl2 = false), Wl(l6, u6, a6), yt4(a6.stateNode), K8 = t, yl2 = n2;
        break;
      case 5:
        w8 || xl(a6, u6);
      case 6:
        if (t = K8, n2 = yl2, K8 = null, Wl(l6, u6, a6), K8 = t, yl2 = n2, K8 !== null) if (yl2) try {
          (K8.nodeType === 9 ? K8.body : K8.nodeName === "HTML" ? K8.ownerDocument.body : K8).removeChild(a6.stateNode);
        } catch (f4) {
          x9(a6, u6, f4);
        }
        else try {
          K8.removeChild(a6.stateNode);
        } catch (f4) {
          x9(a6, u6, f4);
        }
        break;
      case 18:
        K8 !== null && (yl2 ? (l6 = K8, Ji2(l6.nodeType === 9 ? l6.body : l6.nodeName === "HTML" ? l6.ownerDocument.body : l6, a6.stateNode), Ut4(l6)) : Ji2(K8, a6.stateNode));
        break;
      case 4:
        t = K8, n2 = yl2, K8 = a6.stateNode.containerInfo, yl2 = true, Wl(l6, u6, a6), K8 = t, yl2 = n2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        w8 || qu(2, a6, u6), w8 || qu(4, a6, u6), Wl(l6, u6, a6);
        break;
      case 1:
        w8 || (xl(a6, u6), t = a6.stateNode, typeof t.componentWillUnmount == "function" && p1(a6, u6, t)), Wl(l6, u6, a6);
        break;
      case 21:
        Wl(l6, u6, a6);
        break;
      case 22:
        w8 = (t = w8) || a6.memoizedState !== null, Wl(l6, u6, a6), w8 = t;
        break;
      default:
        Wl(l6, u6, a6);
    }
  }
  function r1(l6, u6) {
    if (u6.memoizedState === null && (l6 = u6.alternate, l6 !== null && (l6 = l6.memoizedState, l6 !== null && (l6 = l6.dehydrated, l6 !== null)))) try {
      Ut4(l6);
    } catch (a6) {
      x9(u6, u6.return, a6);
    }
  }
  function Ny(l6) {
    switch (l6.tag) {
      case 13:
      case 19:
        var u6 = l6.stateNode;
        return u6 === null && (u6 = l6.stateNode = new Yi2()), u6;
      case 22:
        return l6 = l6.stateNode, u6 = l6._retryCache, u6 === null && (u6 = l6._retryCache = new Yi2()), u6;
      default:
        throw Error(A12(435, l6.tag));
    }
  }
  function xf(l6, u6) {
    var a6 = Ny(l6);
    u6.forEach(function(t) {
      var n2 = Qy.bind(null, l6, t);
      a6.has(t) || (a6.add(t), t.then(n2, n2));
    });
  }
  function gl3(l6, u6) {
    var a6 = u6.deletions;
    if (a6 !== null) for (var t = 0; t < a6.length; t++) {
      var n2 = a6[t], f4 = l6, c4 = u6, e = c4;
      l: for (; e !== null; ) {
        switch (e.tag) {
          case 27:
            if (Yu(e.type)) {
              K8 = e.stateNode, yl2 = false;
              break l;
            }
            break;
          case 5:
            K8 = e.stateNode, yl2 = false;
            break l;
          case 3:
          case 4:
            K8 = e.stateNode.containerInfo, yl2 = true;
            break l;
        }
        e = e.return;
      }
      if (K8 === null) throw Error(A12(160));
      k1(f4, c4, n2), K8 = null, yl2 = false, f4 = n2.alternate, f4 !== null && (f4.return = null), n2.return = null;
    }
    if (u6.subtreeFlags & 13878) for (u6 = u6.child; u6 !== null; ) I1(u6, l6), u6 = u6.sibling;
  }
  var _l = null;
  function I1(l6, u6) {
    var a6 = l6.alternate, t = l6.flags;
    switch (l6.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gl3(u6, l6), bl(l6), t & 4 && (qu(3, l6, l6.return), xt4(3, l6), qu(5, l6, l6.return));
        break;
      case 1:
        gl3(u6, l6), bl(l6), t & 512 && (w8 || a6 === null || xl(a6, a6.return)), t & 64 && wl && (l6 = l6.updateQueue, l6 !== null && (t = l6.callbacks, t !== null && (a6 = l6.shared.hiddenCallbacks, l6.shared.hiddenCallbacks = a6 === null ? t : a6.concat(t))));
        break;
      case 26:
        var n2 = _l;
        if (gl3(u6, l6), bl(l6), t & 512 && (w8 || a6 === null || xl(a6, a6.return)), t & 4) {
          var f4 = a6 !== null ? a6.memoizedState : null;
          if (t = l6.memoizedState, a6 === null) if (t === null) if (l6.stateNode === null) {
            l: {
              t = l6.type, a6 = l6.memoizedProps, n2 = n2.ownerDocument || n2;
              u: switch (t) {
                case "title":
                  f4 = n2.getElementsByTagName("title")[0], (!f4 || f4[Rt3] || f4[el2] || f4.namespaceURI === "http://www.w3.org/2000/svg" || f4.hasAttribute("itemprop")) && (f4 = n2.createElement(t), n2.head.insertBefore(f4, n2.querySelector("head > title"))), cl2(f4, t, a6), f4[el2] = l6, ul2(f4), t = f4;
                  break l;
                case "link":
                  var c4 = ki("link", "href", n2).get(t + (a6.href || ""));
                  if (c4) {
                    for (var e = 0; e < c4.length; e++) if (f4 = c4[e], f4.getAttribute("href") === (a6.href == null || a6.href === "" ? null : a6.href) && f4.getAttribute("rel") === (a6.rel == null ? null : a6.rel) && f4.getAttribute("title") === (a6.title == null ? null : a6.title) && f4.getAttribute("crossorigin") === (a6.crossOrigin == null ? null : a6.crossOrigin)) {
                      c4.splice(e, 1);
                      break u;
                    }
                  }
                  f4 = n2.createElement(t), cl2(f4, t, a6), n2.head.appendChild(f4);
                  break;
                case "meta":
                  if (c4 = ki("meta", "content", n2).get(t + (a6.content || ""))) {
                    for (e = 0; e < c4.length; e++) if (f4 = c4[e], f4.getAttribute("content") === (a6.content == null ? null : "" + a6.content) && f4.getAttribute("name") === (a6.name == null ? null : a6.name) && f4.getAttribute("property") === (a6.property == null ? null : a6.property) && f4.getAttribute("http-equiv") === (a6.httpEquiv == null ? null : a6.httpEquiv) && f4.getAttribute("charset") === (a6.charSet == null ? null : a6.charSet)) {
                      c4.splice(e, 1);
                      break u;
                    }
                  }
                  f4 = n2.createElement(t), cl2(f4, t, a6), n2.head.appendChild(f4);
                  break;
                default:
                  throw Error(A12(468, t));
              }
              f4[el2] = l6, ul2(f4), t = f4;
            }
            l6.stateNode = t;
          } else ri2(n2, l6.type, l6.stateNode);
          else l6.stateNode = Fi(n2, t, l6.memoizedProps);
          else f4 !== t ? (f4 === null ? a6.stateNode !== null && (a6 = a6.stateNode, a6.parentNode.removeChild(a6)) : f4.count--, t === null ? ri2(n2, l6.type, l6.stateNode) : Fi(n2, t, l6.memoizedProps)) : t === null && l6.stateNode !== null && Gf(l6, l6.memoizedProps, a6.memoizedProps);
        }
        break;
      case 27:
        gl3(u6, l6), bl(l6), t & 512 && (w8 || a6 === null || xl(a6, a6.return)), a6 !== null && t & 4 && Gf(l6, l6.memoizedProps, a6.memoizedProps);
        break;
      case 5:
        if (gl3(u6, l6), bl(l6), t & 512 && (w8 || a6 === null || xl(a6, a6.return)), l6.flags & 32) {
          n2 = l6.stateNode;
          try {
            Ua3(n2, "");
          } catch (m6) {
            x9(l6, l6.return, m6);
          }
        }
        t & 4 && l6.stateNode != null && (n2 = l6.memoizedProps, Gf(l6, n2, a6 !== null ? a6.memoizedProps : n2)), t & 1024 && (Zf = true);
        break;
      case 6:
        if (gl3(u6, l6), bl(l6), t & 4) {
          if (l6.stateNode === null) throw Error(A12(162));
          t = l6.memoizedProps, a6 = l6.stateNode;
          try {
            a6.nodeValue = t;
          } catch (m6) {
            x9(l6, l6.return, m6);
          }
        }
        break;
      case 3:
        if (zn2 = null, n2 = _l, _l = pn(u6.containerInfo), gl3(u6, l6), _l = n2, bl(l6), t & 4 && a6 !== null && a6.memoizedState.isDehydrated) try {
          Ut4(u6.containerInfo);
        } catch (m6) {
          x9(l6, l6.return, m6);
        }
        Zf && (Zf = false, P1(l6));
        break;
      case 4:
        t = _l, _l = pn(l6.stateNode.containerInfo), gl3(u6, l6), bl(l6), _l = t;
        break;
      case 12:
        gl3(u6, l6), bl(l6);
        break;
      case 13:
        gl3(u6, l6), bl(l6), l6.child.flags & 8192 && l6.memoizedState !== null != (a6 !== null && a6.memoizedState !== null) && (se5 = jl2()), t & 4 && (t = l6.updateQueue, t !== null && (l6.updateQueue = null, xf(l6, t)));
        break;
      case 22:
        n2 = l6.memoizedState !== null;
        var i3 = a6 !== null && a6.memoizedState !== null, d4 = wl, g8 = w8;
        if (wl = d4 || n2, w8 = g8 || i3, gl3(u6, l6), w8 = g8, wl = d4, bl(l6), t & 8192) l: for (u6 = l6.stateNode, u6._visibility = n2 ? u6._visibility & -2 : u6._visibility | 1, n2 && (a6 === null || i3 || wl || w8 || Gu(l6)), a6 = null, u6 = l6; ; ) {
          if (u6.tag === 5 || u6.tag === 26) {
            if (a6 === null) {
              i3 = a6 = u6;
              try {
                if (f4 = i3.stateNode, n2) c4 = f4.style, typeof c4.setProperty == "function" ? c4.setProperty("display", "none", "important") : c4.display = "none";
                else {
                  e = i3.stateNode;
                  var z10 = i3.memoizedProps.style, S10 = z10 != null && z10.hasOwnProperty("display") ? z10.display : null;
                  e.style.display = S10 == null || typeof S10 == "boolean" ? "" : ("" + S10).trim();
                }
              } catch (m6) {
                x9(i3, i3.return, m6);
              }
            }
          } else if (u6.tag === 6) {
            if (a6 === null) {
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
            a6 === u6 && (a6 = null), u6 = u6.return;
          }
          a6 === u6 && (a6 = null), u6.sibling.return = u6.return, u6 = u6.sibling;
        }
        t & 4 && (t = l6.updateQueue, t !== null && (a6 = t.retryQueue, a6 !== null && (t.retryQueue = null, xf(l6, a6))));
        break;
      case 19:
        gl3(u6, l6), bl(l6), t & 4 && (t = l6.updateQueue, t !== null && (l6.updateQueue = null, xf(l6, t)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        gl3(u6, l6), bl(l6);
    }
  }
  function bl(l6) {
    var u6 = l6.flags;
    if (u6 & 2) {
      try {
        for (var a6, t = l6.return; t !== null; ) {
          if (W1(t)) {
            a6 = t;
            break;
          }
          t = t.return;
        }
        if (a6 == null) throw Error(A12(160));
        switch (a6.tag) {
          case 27:
            var n2 = a6.stateNode, f4 = Qf(l6);
            Zn(l6, f4, n2);
            break;
          case 5:
            var c4 = a6.stateNode;
            a6.flags & 32 && (Ua3(c4, ""), a6.flags &= -33);
            var e = Qf(l6);
            Zn(l6, e, c4);
            break;
          case 3:
          case 4:
            var i3 = a6.stateNode.containerInfo, d4 = Qf(l6);
            Oc(l6, d4, i3);
            break;
          default:
            throw Error(A12(161));
        }
      } catch (g8) {
        x9(l6, l6.return, g8);
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
          xl(u6, u6.return);
          var a6 = u6.stateNode;
          typeof a6.componentWillUnmount == "function" && p1(u6, u6.return, a6), Gu(u6);
          break;
        case 27:
          yt4(u6.stateNode);
        case 26:
        case 5:
          xl(u6, u6.return), Gu(u6);
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
  function iu(l6, u6, a6) {
    for (a6 = a6 && (u6.subtreeFlags & 8772) !== 0, u6 = u6.child; u6 !== null; ) {
      var t = u6.alternate, n2 = l6, f4 = u6, c4 = f4.flags;
      switch (f4.tag) {
        case 0:
        case 11:
        case 15:
          iu(n2, f4, a6), xt4(4, f4);
          break;
        case 1:
          if (iu(n2, f4, a6), t = f4, n2 = t.stateNode, typeof n2.componentDidMount == "function") try {
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
          a6 && c4 & 64 && L1(f4), et5(f4, f4.return);
          break;
        case 27:
          w1(f4);
        case 26:
        case 5:
          iu(n2, f4, a6), a6 && t === null && c4 & 4 && J1(f4), et5(f4, f4.return);
          break;
        case 12:
          iu(n2, f4, a6);
          break;
        case 13:
          iu(n2, f4, a6), a6 && c4 & 4 && r1(n2, f4);
          break;
        case 22:
          f4.memoizedState === null && iu(n2, f4, a6), et5(f4, f4.return);
          break;
        case 30:
          break;
        default:
          iu(n2, f4, a6);
      }
      u6 = u6.sibling;
    }
  }
  function Me5(l6, u6) {
    var a6 = null;
    l6 !== null && l6.memoizedState !== null && l6.memoizedState.cachePool !== null && (a6 = l6.memoizedState.cachePool.pool), l6 = null, u6.memoizedState !== null && u6.memoizedState.cachePool !== null && (l6 = u6.memoizedState.cachePool.pool), l6 !== a6 && (l6 != null && l6.refCount++, a6 != null && Xt2(a6));
  }
  function Ee6(l6, u6) {
    l6 = null, u6.alternate !== null && (l6 = u6.alternate.memoizedState.cache), u6 = u6.memoizedState.cache, u6 !== l6 && (u6.refCount++, l6 != null && Xt2(l6));
  }
  function Ql3(l6, u6, a6, t) {
    if (u6.subtreeFlags & 10256) for (u6 = u6.child; u6 !== null; ) lv(l6, u6, a6, t), u6 = u6.sibling;
  }
  function lv(l6, u6, a6, t) {
    var n2 = u6.flags;
    switch (u6.tag) {
      case 0:
      case 11:
      case 15:
        Ql3(l6, u6, a6, t), n2 & 2048 && xt4(9, u6);
        break;
      case 1:
        Ql3(l6, u6, a6, t);
        break;
      case 3:
        Ql3(l6, u6, a6, t), n2 & 2048 && (l6 = null, u6.alternate !== null && (l6 = u6.alternate.memoizedState.cache), u6 = u6.memoizedState.cache, u6 !== l6 && (u6.refCount++, l6 != null && Xt2(l6)));
        break;
      case 12:
        if (n2 & 2048) {
          Ql3(l6, u6, a6, t), l6 = u6.stateNode;
          try {
            var f4 = u6.memoizedProps, c4 = f4.id, e = f4.onPostCommit;
            typeof e == "function" && e(c4, u6.alternate === null ? "mount" : "update", l6.passiveEffectDuration, -0);
          } catch (i3) {
            x9(u6, u6.return, i3);
          }
        } else Ql3(l6, u6, a6, t);
        break;
      case 13:
        Ql3(l6, u6, a6, t);
        break;
      case 23:
        break;
      case 22:
        f4 = u6.stateNode, c4 = u6.alternate, u6.memoizedState !== null ? f4._visibility & 2 ? Ql3(l6, u6, a6, t) : it4(l6, u6) : f4._visibility & 2 ? Ql3(l6, u6, a6, t) : (f4._visibility |= 2, ua(l6, u6, a6, t, (u6.subtreeFlags & 10256) !== 0)), n2 & 2048 && Me5(c4, u6);
        break;
      case 24:
        Ql3(l6, u6, a6, t), n2 & 2048 && Ee6(u6.alternate, u6);
        break;
      default:
        Ql3(l6, u6, a6, t);
    }
  }
  function ua(l6, u6, a6, t, n2) {
    for (n2 = n2 && (u6.subtreeFlags & 10256) !== 0, u6 = u6.child; u6 !== null; ) {
      var f4 = l6, c4 = u6, e = a6, i3 = t, d4 = c4.flags;
      switch (c4.tag) {
        case 0:
        case 11:
        case 15:
          ua(f4, c4, e, i3, n2), xt4(8, c4);
          break;
        case 23:
          break;
        case 22:
          var g8 = c4.stateNode;
          c4.memoizedState !== null ? g8._visibility & 2 ? ua(f4, c4, e, i3, n2) : it4(f4, c4) : (g8._visibility |= 2, ua(f4, c4, e, i3, n2)), n2 && d4 & 2048 && Me5(c4.alternate, c4);
          break;
        case 24:
          ua(f4, c4, e, i3, n2), n2 && d4 & 2048 && Ee6(c4.alternate, c4);
          break;
        default:
          ua(f4, c4, e, i3, n2);
      }
      u6 = u6.sibling;
    }
  }
  function it4(l6, u6) {
    if (u6.subtreeFlags & 10256) for (u6 = u6.child; u6 !== null; ) {
      var a6 = l6, t = u6, n2 = t.flags;
      switch (t.tag) {
        case 22:
          it4(a6, t), n2 & 2048 && Me5(t.alternate, t);
          break;
        case 24:
          it4(a6, t), n2 & 2048 && Ee6(t.alternate, t);
          break;
        default:
          it4(a6, t);
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
        Iu(l6), l6.flags & ra && l6.memoizedState !== null && hd(_l, l6.memoizedState, l6.memoizedProps);
        break;
      case 5:
        Iu(l6);
        break;
      case 3:
      case 4:
        var u6 = _l;
        _l = pn(l6.stateNode.containerInfo), Iu(l6), _l = u6;
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
      if (u6 !== null) for (var a6 = 0; a6 < u6.length; a6++) {
        var t = u6[a6];
        ll2 = t, nv(t, l6);
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
        l6.memoizedState !== null && u6._visibility & 2 && (l6.return === null || l6.return.tag !== 13) ? (u6._visibility &= -3, gn(l6)) : Ja(l6);
        break;
      default:
        Ja(l6);
    }
  }
  function gn(l6) {
    var u6 = l6.deletions;
    if ((l6.flags & 16) !== 0) {
      if (u6 !== null) for (var a6 = 0; a6 < u6.length; a6++) {
        var t = u6[a6];
        ll2 = t, nv(t, l6);
      }
      av(l6);
    }
    for (l6 = l6.child; l6 !== null; ) {
      switch (u6 = l6, u6.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, u6, u6.return), gn(u6);
          break;
        case 22:
          a6 = u6.stateNode, a6._visibility & 2 && (a6._visibility &= -3, gn(u6));
          break;
        default:
          gn(u6);
      }
      l6 = l6.sibling;
    }
  }
  function nv(l6, u6) {
    for (; ll2 !== null; ) {
      var a6 = ll2;
      switch (a6.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, a6, u6);
          break;
        case 23:
        case 22:
          if (a6.memoizedState !== null && a6.memoizedState.cachePool !== null) {
            var t = a6.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          Xt2(a6.memoizedState.cache);
      }
      if (t = a6.child, t !== null) t.return = a6, ll2 = t;
      else l: for (a6 = l6; ll2 !== null; ) {
        t = ll2;
        var n2 = t.sibling, f4 = t.return;
        if (F12(t), t === a6) {
          ll2 = null;
          break l;
        }
        if (n2 !== null) {
          n2.return = f4, ll2 = n2;
          break l;
        }
        ll2 = f4;
      }
    }
  }
  var qy = {
    getCacheForType: function(l6) {
      var u6 = il(k10), a6 = u6.data.get(l6);
      return a6 === void 0 && (a6 = l6(), u6.data.set(l6, a6)), a6;
    }
  }, By = typeof WeakMap == "function" ? WeakMap : Map, X7 = 0, V6 = null, q10 = null, B10 = 0, _8 = 0, zl = null, zu2 = false, Za3 = false, De4 = false, nu = 0, J6 = 0, Bu2 = 0, Ku = 0, Oe5 = 0, Rl2 = 0, Ra2 = 0, vt3 = null, dl2 = null, sc = false, se5 = 0, xn2 = 1 / 0, Vn = null, Du3 = null, fl2 = 0, Ou2 = null, Ya = null, Da = 0, Uc = 0, Hc = null, fv = null, ht2 = 0, Nc = null;
  function El() {
    if ((X7 & 2) !== 0 && B10 !== 0) return B10 & -B10;
    if (s3.T !== null) {
      var l6 = Ha;
      return l6 !== 0 ? l6 : He4();
    }
    return b0();
  }
  function cv() {
    Rl2 === 0 && (Rl2 = (B10 & 536870912) === 0 || Y7 ? d0() : 536870912);
    var l6 = Yl2.current;
    return l6 !== null && (l6.flags |= 32), Rl2;
  }
  function Dl(l6, u6, a6) {
    (l6 === V6 && (_8 === 2 || _8 === 9) || l6.cancelPendingCommit !== null) && (oa(l6, 0), Au(l6, B10, Rl2, false)), Bt2(l6, a6), ((X7 & 2) === 0 || l6 !== V6) && (l6 === V6 && ((X7 & 2) === 0 && (Ku |= a6), J6 === 4 && Au(l6, B10, Rl2, false)), Ll(l6));
  }
  function ev(l6, u6, a6) {
    if ((X7 & 6) !== 0) throw Error(A12(327));
    var t = !a6 && (u6 & 124) === 0 && (u6 & l6.expiredLanes) === 0 || qt2(l6, u6), n2 = t ? oy(l6, u6) : Vf(l6, u6, true), f4 = t;
    do {
      if (n2 === 0) {
        Za3 && !t && Au(l6, u6, 0, false);
        break;
      } else {
        if (a6 = l6.current.alternate, f4 && !Ry(a6)) {
          n2 = Vf(l6, u6, false), f4 = false;
          continue;
        }
        if (n2 === 2) {
          if (f4 = u6, l6.errorRecoveryDisabledLanes & f4) var c4 = 0;
          else c4 = l6.pendingLanes & -536870913, c4 = c4 !== 0 ? c4 : c4 & 536870912 ? 536870912 : 0;
          if (c4 !== 0) {
            u6 = c4;
            l: {
              var e = l6;
              n2 = vt3;
              var i3 = e.current.memoizedState.isDehydrated;
              if (i3 && (oa(e, c4).flags |= 256), c4 = Vf(e, c4, false), c4 !== 2) {
                if (De4 && !i3) {
                  e.errorRecoveryDisabledLanes |= f4, Ku |= f4, n2 = 4;
                  break l;
                }
                f4 = dl2, dl2 = n2, f4 !== null && (dl2 === null ? dl2 = f4 : dl2.push.apply(dl2, f4));
              }
              n2 = c4;
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
              throw Error(A12(345));
            case 4:
              if ((u6 & 4194048) !== u6) break;
            case 6:
              Au(t, u6, Rl2, !zu2);
              break l;
            case 2:
              dl2 = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(A12(329));
          }
          if ((u6 & 62914560) === u6 && (n2 = se5 + 300 - jl2(), 10 < n2)) {
            if (Au(t, u6, Rl2, !zu2), Fn2(t, 0, true) !== 0) break l;
            t.timeoutHandle = Hv(oi2.bind(null, t, a6, dl2, Vn, sc, u6, Rl2, Ku, Ra2, zu2, f4, 2, -0, 0), n2);
            break l;
          }
          oi2(t, a6, dl2, Vn, sc, u6, Rl2, Ku, Ra2, zu2, f4, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Ll(l6);
  }
  function oi2(l6, u6, a6, t, n2, f4, c4, e, i3, d4, g8, z10, S10, m6) {
    if (l6.timeoutHandle = -1, z10 = u6.subtreeFlags, (z10 & 8192 || (z10 & 16785408) === 16785408) && (Et3 = {
      stylesheets: null,
      count: 0,
      unsuspend: vd
    }, uv(u6), z10 = yd2(), z10 !== null)) {
      l6.cancelPendingCommit = z10(Xi2.bind(null, l6, u6, f4, a6, t, n2, c4, e, i3, g8, 1, S10, m6)), Au(l6, f4, c4, !d4);
      return;
    }
    Xi2(l6, u6, f4, a6, t, n2, c4, e, i3);
  }
  function Ry(l6) {
    for (var u6 = l6; ; ) {
      var a6 = u6.tag;
      if ((a6 === 0 || a6 === 11 || a6 === 15) && u6.flags & 16384 && (a6 = u6.updateQueue, a6 !== null && (a6 = a6.stores, a6 !== null))) for (var t = 0; t < a6.length; t++) {
        var n2 = a6[t], f4 = n2.getSnapshot;
        n2 = n2.value;
        try {
          if (!Ol(f4(), n2)) return false;
        } catch {
          return false;
        }
      }
      if (a6 = u6.child, u6.subtreeFlags & 16384 && a6 !== null) a6.return = u6, u6 = a6;
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
  function Au(l6, u6, a6, t) {
    u6 &= ~Oe5, u6 &= ~Ku, l6.suspendedLanes |= u6, l6.pingedLanes &= ~u6, t && (l6.warmLanes |= u6), t = l6.expirationTimes;
    for (var n2 = u6; 0 < n2; ) {
      var f4 = 31 - Ml(n2), c4 = 1 << f4;
      t[f4] = -1, n2 &= ~c4;
    }
    a6 !== 0 && m0(l6, a6, u6);
  }
  function ff() {
    return (X7 & 6) === 0 ? (Vt3(0, false), false) : true;
  }
  function Ue5() {
    if (q10 !== null) {
      if (_8 === 0) var l6 = q10.return;
      else l6 = q10, rl2 = ku = null, ye6(l6), Ea = null, At2 = 0, l6 = q10;
      for (; l6 !== null; ) C1(l6.alternate, l6), l6 = l6.return;
      q10 = null;
    }
  }
  function oa(l6, u6) {
    var a6 = l6.timeoutHandle;
    a6 !== -1 && (l6.timeoutHandle = -1, Wy(a6)), a6 = l6.cancelPendingCommit, a6 !== null && (l6.cancelPendingCommit = null, a6()), Ue5(), V6 = l6, q10 = a6 = Pl(l6.current, null), B10 = u6, _8 = 0, zl = null, zu2 = false, Za3 = qt2(l6, u6), De4 = false, Ra2 = Rl2 = Oe5 = Ku = Bu2 = J6 = 0, dl2 = vt3 = null, sc = false, (u6 & 8) !== 0 && (u6 |= u6 & 32);
    var t = l6.entangledLanes;
    if (t !== 0) for (l6 = l6.entanglements, t &= u6; 0 < t; ) {
      var n2 = 31 - Ml(t), f4 = 1 << n2;
      u6 |= l6[n2], t &= ~f4;
    }
    return nu = u6, Pn2(), a6;
  }
  function iv(l6, u6) {
    U5 = null, s3.H = on2, u6 === Gt2 || u6 === uf ? (u6 = hi(), _8 = 3) : u6 === W0 ? (u6 = hi(), _8 = 4) : _8 = u6 === Q1 ? 8 : u6 !== null && typeof u6 == "object" && typeof u6.then == "function" ? 6 : 1, zl = u6, q10 === null && (J6 = 1, Gn(l6, Bl(u6, l6.current)));
  }
  function vv() {
    var l6 = s3.H;
    return s3.H = on2, l6 === null ? on2 : l6;
  }
  function hv() {
    var l6 = s3.A;
    return s3.A = qy, l6;
  }
  function qc() {
    J6 = 4, zu2 || (B10 & 4194048) !== B10 && Yl2.current !== null || (Za3 = true), (Bu2 & 134217727) === 0 && (Ku & 134217727) === 0 || V6 === null || Au(V6, B10, Rl2, false);
  }
  function Vf(l6, u6, a6) {
    var t = X7;
    X7 |= 2;
    var n2 = vv(), f4 = hv();
    (V6 !== l6 || B10 !== u6) && (Vn = null, oa(l6, u6)), u6 = false;
    var c4 = J6;
    l: do
      try {
        if (_8 !== 0 && q10 !== null) {
          var e = q10, i3 = zl;
          switch (_8) {
            case 8:
              Ue5(), c4 = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Yl2.current === null && (u6 = true);
              var d4 = _8;
              if (_8 = 0, zl = null, ma(l6, e, i3, d4), a6 && Za3) {
                c4 = 0;
                break l;
              }
              break;
            default:
              d4 = _8, _8 = 0, zl = null, ma(l6, e, i3, d4);
          }
        }
        Yy(), c4 = J6;
        break;
      } catch (g8) {
        iv(l6, g8);
      }
    while (true);
    return u6 && l6.shellSuspendCounter++, rl2 = ku = null, X7 = t, s3.H = n2, s3.A = f4, q10 === null && (V6 = null, B10 = 0, Pn2()), c4;
  }
  function Yy() {
    for (; q10 !== null; ) yv(q10);
  }
  function oy(l6, u6) {
    var a6 = X7;
    X7 |= 2;
    var t = vv(), n2 = hv();
    V6 !== l6 || B10 !== u6 ? (Vn = null, xn2 = jl2() + 500, oa(l6, u6)) : Za3 = qt2(l6, u6);
    l: do
      try {
        if (_8 !== 0 && q10 !== null) {
          u6 = q10;
          var f4 = zl;
          u: switch (_8) {
            case 1:
              _8 = 0, zl = null, ma(l6, u6, f4, 1);
              break;
            case 2:
            case 9:
              if (vi(f4)) {
                _8 = 0, zl = null, _i(u6);
                break;
              }
              u6 = function() {
                _8 !== 2 && _8 !== 9 || V6 !== l6 || (_8 = 7), Ll(l6);
              }, f4.then(u6, u6);
              break l;
            case 3:
              _8 = 7;
              break l;
            case 4:
              _8 = 5;
              break l;
            case 7:
              vi(f4) ? (_8 = 0, zl = null, _i(u6)) : (_8 = 0, zl = null, ma(l6, u6, f4, 7));
              break;
            case 5:
              var c4 = null;
              switch (q10.tag) {
                case 26:
                  c4 = q10.memoizedState;
                case 5:
                case 27:
                  var e = q10;
                  if (!c4 || Rv(c4)) {
                    _8 = 0, zl = null;
                    var i3 = e.sibling;
                    if (i3 !== null) q10 = i3;
                    else {
                      var d4 = e.return;
                      d4 !== null ? (q10 = d4, cf(d4)) : q10 = null;
                    }
                    break u;
                  }
              }
              _8 = 0, zl = null, ma(l6, u6, f4, 5);
              break;
            case 6:
              _8 = 0, zl = null, ma(l6, u6, f4, 6);
              break;
            case 8:
              Ue5(), J6 = 6;
              break l;
            default:
              throw Error(A12(462));
          }
        }
        _y();
        break;
      } catch (g8) {
        iv(l6, g8);
      }
    while (true);
    return rl2 = ku = null, s3.H = t, s3.A = n2, X7 = a6, q10 !== null ? 0 : (V6 = null, B10 = 0, Pn2(), J6);
  }
  function _y() {
    for (; q10 !== null && !uh(); ) yv(q10);
  }
  function yv(l6) {
    var u6 = K1(l6.alternate, l6, nu);
    l6.memoizedProps = l6.pendingProps, u6 === null ? cf(l6) : q10 = u6;
  }
  function _i(l6) {
    var u6 = l6, a6 = u6.alternate;
    switch (u6.tag) {
      case 15:
      case 0:
        u6 = Hi2(a6, u6, u6.pendingProps, u6.type, void 0, B10);
        break;
      case 11:
        u6 = Hi2(a6, u6, u6.pendingProps, u6.type.render, u6.ref, B10);
        break;
      case 5:
        ye6(u6);
      default:
        C1(a6, u6), u6 = q10 = C0(u6, nu), u6 = K1(a6, u6, nu);
    }
    l6.memoizedProps = l6.pendingProps, u6 === null ? cf(l6) : q10 = u6;
  }
  function ma(l6, u6, a6, t) {
    rl2 = ku = null, ye6(u6), Ea = null, At2 = 0;
    var n2 = u6.return;
    try {
      if (Dy(l6, n2, u6, a6, B10)) {
        J6 = 1, Gn(l6, Bl(a6, l6.current)), q10 = null;
        return;
      }
    } catch (f4) {
      if (n2 !== null) throw q10 = n2, f4;
      J6 = 1, Gn(l6, Bl(a6, l6.current)), q10 = null;
      return;
    }
    u6.flags & 32768 ? (Y7 || t === 1 ? l6 = true : Za3 || (B10 & 536870912) !== 0 ? l6 = false : (zu2 = l6 = true, (t === 2 || t === 9 || t === 3 || t === 6) && (t = Yl2.current, t !== null && t.tag === 13 && (t.flags |= 16384))), dv(u6, l6)) : cf(u6);
  }
  function cf(l6) {
    var u6 = l6;
    do {
      if ((u6.flags & 32768) !== 0) {
        dv(u6, zu2);
        return;
      }
      l6 = u6.return;
      var a6 = sy(u6.alternate, u6, nu);
      if (a6 !== null) {
        q10 = a6;
        return;
      }
      if (u6 = u6.sibling, u6 !== null) {
        q10 = u6;
        return;
      }
      q10 = u6 = l6;
    } while (u6 !== null);
    J6 === 0 && (J6 = 5);
  }
  function dv(l6, u6) {
    do {
      var a6 = Uy(l6.alternate, l6);
      if (a6 !== null) {
        a6.flags &= 32767, q10 = a6;
        return;
      }
      if (a6 = l6.return, a6 !== null && (a6.flags |= 32768, a6.subtreeFlags = 0, a6.deletions = null), !u6 && (l6 = l6.sibling, l6 !== null)) {
        q10 = l6;
        return;
      }
      q10 = l6 = a6;
    } while (l6 !== null);
    J6 = 6, q10 = null;
  }
  function Xi2(l6, u6, a6, t, n2, f4, c4, e, i3) {
    l6.cancelPendingCommit = null;
    do
      ef();
    while (fl2 !== 0);
    if ((X7 & 6) !== 0) throw Error(A12(327));
    if (u6 !== null) {
      if (u6 === l6.current) throw Error(A12(177));
      if (f4 = u6.lanes | u6.childLanes, f4 |= Ic, yh(l6, a6, f4, c4, e, i3), l6 === V6 && (q10 = V6 = null, B10 = 0), Ya = u6, Ou2 = l6, Da = a6, Uc = f4, Hc = n2, fv = t, (u6.subtreeFlags & 10256) !== 0 || (u6.flags & 10256) !== 0 ? (l6.callbackNode = null, l6.callbackPriority = 0, Zy(Dn3, function() {
        return zv(true), null;
      })) : (l6.callbackNode = null, l6.callbackPriority = 0), t = (u6.flags & 13878) !== 0, (u6.subtreeFlags & 13878) !== 0 || t) {
        t = s3.T, s3.T = null, n2 = o7.p, o7.p = 2, c4 = X7, X7 |= 4;
        try {
          Hy(l6, u6, a6);
        } finally {
          X7 = c4, o7.p = n2, s3.T = t;
        }
      }
      fl2 = 1, Sv(), mv(), gv();
    }
  }
  function Sv() {
    if (fl2 === 1) {
      fl2 = 0;
      var l6 = Ou2, u6 = Ya, a6 = (u6.flags & 13878) !== 0;
      if ((u6.subtreeFlags & 13878) !== 0 || a6) {
        a6 = s3.T, s3.T = null;
        var t = o7.p;
        o7.p = 2;
        var n2 = X7;
        X7 |= 4;
        try {
          I1(u6, l6);
          var f4 = oc2, c4 = X0(l6.containerInfo), e = f4.focusedElem, i3 = f4.selectionRange;
          if (c4 !== e && e && e.ownerDocument && _0(e.ownerDocument.documentElement, e)) {
            if (i3 !== null && rc2(e)) {
              var d4 = i3.start, g8 = i3.end;
              if (g8 === void 0 && (g8 = d4), "selectionStart" in e) e.selectionStart = d4, e.selectionEnd = Math.min(g8, e.value.length);
              else {
                var z10 = e.ownerDocument || document, S10 = z10 && z10.defaultView || window;
                if (S10.getSelection) {
                  var m6 = S10.getSelection(), O6 = e.textContent.length, E14 = Math.min(i3.start, O6), G10 = i3.end === void 0 ? E14 : Math.min(i3.end, O6);
                  !m6.extend && E14 > G10 && (c4 = G10, G10 = E14, E14 = c4);
                  var h5 = ui(e, E14), v9 = ui(e, G10);
                  if (h5 && v9 && (m6.rangeCount !== 1 || m6.anchorNode !== h5.node || m6.anchorOffset !== h5.offset || m6.focusNode !== v9.node || m6.focusOffset !== v9.offset)) {
                    var y10 = z10.createRange();
                    y10.setStart(h5.node, h5.offset), m6.removeAllRanges(), E14 > G10 ? (m6.addRange(y10), m6.extend(v9.node, v9.offset)) : (y10.setEnd(v9.node, v9.offset), m6.addRange(y10));
                  }
                }
              }
            }
            for (z10 = [], m6 = e; m6 = m6.parentNode; ) m6.nodeType === 1 && z10.push({
              element: m6,
              left: m6.scrollLeft,
              top: m6.scrollTop
            });
            for (typeof e.focus == "function" && e.focus(), e = 0; e < z10.length; e++) {
              var b10 = z10[e];
              b10.element.scrollLeft = b10.left, b10.element.scrollTop = b10.top;
            }
          }
          wn2 = !!Yc, oc2 = Yc = null;
        } finally {
          X7 = n2, o7.p = t, s3.T = a6;
        }
      }
      l6.current = u6, fl2 = 2;
    }
  }
  function mv() {
    if (fl2 === 2) {
      fl2 = 0;
      var l6 = Ou2, u6 = Ya, a6 = (u6.flags & 8772) !== 0;
      if ((u6.subtreeFlags & 8772) !== 0 || a6) {
        a6 = s3.T, s3.T = null;
        var t = o7.p;
        o7.p = 2;
        var n2 = X7;
        X7 |= 4;
        try {
          $1(l6, u6.alternate, u6);
        } finally {
          X7 = n2, o7.p = t, s3.T = a6;
        }
      }
      fl2 = 3;
    }
  }
  function gv() {
    if (fl2 === 4 || fl2 === 3) {
      fl2 = 0, ah();
      var l6 = Ou2, u6 = Ya, a6 = Da, t = fv;
      (u6.subtreeFlags & 10256) !== 0 || (u6.flags & 10256) !== 0 ? fl2 = 5 : (fl2 = 0, Ya = Ou2 = null, bv(l6, l6.pendingLanes));
      var n2 = l6.pendingLanes;
      if (n2 === 0 && (Du3 = null), pc(a6), u6 = u6.stateNode, Tl && typeof Tl.onCommitFiberRoot == "function") try {
        Tl.onCommitFiberRoot(Nt2, u6, void 0, (u6.current.flags & 128) === 128);
      } catch {
      }
      if (t !== null) {
        u6 = s3.T, n2 = o7.p, o7.p = 2, s3.T = null;
        try {
          for (var f4 = l6.onRecoverableError, c4 = 0; c4 < t.length; c4++) {
            var e = t[c4];
            f4(e.value, {
              componentStack: e.stack
            });
          }
        } finally {
          s3.T = u6, o7.p = n2;
        }
      }
      (Da & 3) !== 0 && ef(), Ll(l6), n2 = l6.pendingLanes, (a6 & 4194090) !== 0 && (n2 & 42) !== 0 ? l6 === Nc ? ht2++ : (ht2 = 0, Nc = l6) : ht2 = 0, Vt3(0, false);
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
    var l6 = Ou2, u6 = Uc;
    Uc = 0;
    var a6 = pc(Da), t = s3.T, n2 = o7.p;
    try {
      o7.p = 32 > a6 ? 32 : a6, s3.T = null, a6 = Hc, Hc = null;
      var f4 = Ou2, c4 = Da;
      if (fl2 = 0, Ya = Ou2 = null, Da = 0, (X7 & 6) !== 0) throw Error(A12(331));
      var e = X7;
      if (X7 |= 4, tv(f4.current), lv(f4, f4.current, c4, a6), X7 = e, Vt3(0, false), Tl && typeof Tl.onPostCommitFiberRoot == "function") try {
        Tl.onPostCommitFiberRoot(Nt2, f4);
      } catch {
      }
      return true;
    } finally {
      o7.p = n2, s3.T = t, bv(l6, u6);
    }
  }
  function Gi2(l6, u6, a6) {
    u6 = Bl(a6, u6), u6 = Mc(l6.stateNode, u6, 2), l6 = Eu2(l6, u6, 2), l6 !== null && (Bt2(l6, 2), Ll(l6));
  }
  function x9(l6, u6, a6) {
    if (l6.tag === 3) Gi2(l6, l6, a6);
    else for (; u6 !== null; ) {
      if (u6.tag === 3) {
        Gi2(u6, l6, a6);
        break;
      } else if (u6.tag === 1) {
        var t = u6.stateNode;
        if (typeof u6.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (Du3 === null || !Du3.has(t))) {
          l6 = Bl(a6, l6), a6 = X1(2), t = Eu2(u6, a6, 2), t !== null && (G1(a6, t, u6, l6), Bt2(t, 2), Ll(t));
          break;
        }
      }
      u6 = u6.return;
    }
  }
  function jf(l6, u6, a6) {
    var t = l6.pingCache;
    if (t === null) {
      t = l6.pingCache = new By();
      var n2 = /* @__PURE__ */ new Set();
      t.set(u6, n2);
    } else n2 = t.get(u6), n2 === void 0 && (n2 = /* @__PURE__ */ new Set(), t.set(u6, n2));
    n2.has(a6) || (De4 = true, n2.add(a6), l6 = Xy.bind(null, l6, u6, a6), u6.then(l6, l6));
  }
  function Xy(l6, u6, a6) {
    var t = l6.pingCache;
    t !== null && t.delete(u6), l6.pingedLanes |= l6.suspendedLanes & a6, l6.warmLanes &= ~a6, V6 === l6 && (B10 & a6) === a6 && (J6 === 4 || J6 === 3 && (B10 & 62914560) === B10 && 300 > jl2() - se5 ? (X7 & 2) === 0 && oa(l6, 0) : Oe5 |= a6, Ra2 === B10 && (Ra2 = 0)), Ll(l6);
  }
  function Av(l6, u6) {
    u6 === 0 && (u6 = S0()), l6 = Qa2(l6, u6), l6 !== null && (Bt2(l6, u6), Ll(l6));
  }
  function Gy(l6) {
    var u6 = l6.memoizedState, a6 = 0;
    u6 !== null && (a6 = u6.retryLane), Av(l6, a6);
  }
  function Qy(l6, u6) {
    var a6 = 0;
    switch (l6.tag) {
      case 13:
        var t = l6.stateNode, n2 = l6.memoizedState;
        n2 !== null && (a6 = n2.retryLane);
        break;
      case 19:
        t = l6.stateNode;
        break;
      case 22:
        t = l6.stateNode._retryCache;
        break;
      default:
        throw Error(A12(314));
    }
    t !== null && t.delete(u6), Av(l6, a6);
  }
  function Zy(l6, u6) {
    return Cc(l6, u6);
  }
  var jn = null, aa = null, Bc = false, Kn2 = false, Kf = false, Cu2 = 0;
  function Ll(l6) {
    l6 !== aa && l6.next === null && (aa === null ? jn = aa = l6 : aa = aa.next = l6), Kn2 = true, Bc || (Bc = true, Vy());
  }
  function Vt3(l6, u6) {
    if (!Kf && Kn2) {
      Kf = true;
      do
        for (var a6 = false, t = jn; t !== null; ) {
          if (!u6) if (l6 !== 0) {
            var n2 = t.pendingLanes;
            if (n2 === 0) var f4 = 0;
            else {
              var c4 = t.suspendedLanes, e = t.pingedLanes;
              f4 = (1 << 31 - Ml(42 | l6) + 1) - 1, f4 &= n2 & ~(c4 & ~e), f4 = f4 & 201326741 ? f4 & 201326741 | 1 : f4 ? f4 | 2 : 0;
            }
            f4 !== 0 && (a6 = true, Qi2(t, f4));
          } else f4 = B10, f4 = Fn2(t, t === V6 ? f4 : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), (f4 & 3) === 0 || qt2(t, f4) || (a6 = true, Qi2(t, f4));
          t = t.next;
        }
      while (a6);
      Kf = false;
    }
  }
  function xy() {
    Tv();
  }
  function Tv() {
    Kn2 = Bc = false;
    var l6 = 0;
    Cu2 !== 0 && (Jy() && (l6 = Cu2), Cu2 = 0);
    for (var u6 = jl2(), a6 = null, t = jn; t !== null; ) {
      var n2 = t.next, f4 = Mv(t, u6);
      f4 === 0 ? (t.next = null, a6 === null ? jn = n2 : a6.next = n2, n2 === null && (aa = a6)) : (a6 = t, (l6 !== 0 || (f4 & 3) !== 0) && (Kn2 = true)), t = n2;
    }
    Vt3(l6, false);
  }
  function Mv(l6, u6) {
    for (var a6 = l6.suspendedLanes, t = l6.pingedLanes, n2 = l6.expirationTimes, f4 = l6.pendingLanes & -62914561; 0 < f4; ) {
      var c4 = 31 - Ml(f4), e = 1 << c4, i3 = n2[c4];
      i3 === -1 ? ((e & a6) === 0 || (e & t) !== 0) && (n2[c4] = hh(e, u6)) : i3 <= u6 && (l6.expiredLanes |= e), f4 &= ~e;
    }
    if (u6 = V6, a6 = B10, a6 = Fn2(l6, l6 === u6 ? a6 : 0, l6.cancelPendingCommit !== null || l6.timeoutHandle !== -1), t = l6.callbackNode, a6 === 0 || l6 === u6 && (_8 === 2 || _8 === 9) || l6.cancelPendingCommit !== null) return t !== null && t !== null && mf(t), l6.callbackNode = null, l6.callbackPriority = 0;
    if ((a6 & 3) === 0 || qt2(l6, a6)) {
      if (u6 = a6 & -a6, u6 === l6.callbackPriority) return u6;
      switch (t !== null && mf(t), pc(a6)) {
        case 2:
        case 8:
          a6 = h0;
          break;
        case 32:
          a6 = Dn3;
          break;
        case 268435456:
          a6 = y0;
          break;
        default:
          a6 = Dn3;
      }
      return t = Ev.bind(null, l6), a6 = Cc(a6, t), l6.callbackPriority = u6, l6.callbackNode = a6, u6;
    }
    return t !== null && t !== null && mf(t), l6.callbackPriority = 2, l6.callbackNode = null, 2;
  }
  function Ev(l6, u6) {
    if (fl2 !== 0 && fl2 !== 5) return l6.callbackNode = null, l6.callbackPriority = 0, null;
    var a6 = l6.callbackNode;
    if (ef(true) && l6.callbackNode !== a6) return null;
    var t = B10;
    return t = Fn2(l6, l6 === V6 ? t : 0, l6.cancelPendingCommit !== null || l6.timeoutHandle !== -1), t === 0 ? null : (ev(l6, t, u6), Mv(l6, jl2()), l6.callbackNode != null && l6.callbackNode === a6 ? Ev.bind(null, l6) : null);
  }
  function Qi2(l6, u6) {
    if (ef()) return null;
    ev(l6, u6, true);
  }
  function Vy() {
    wy(function() {
      (X7 & 6) !== 0 ? Cc(v0, xy) : Tv();
    });
  }
  function He4() {
    return Cu2 === 0 && (Cu2 = d0()), Cu2;
  }
  function Zi2(l6) {
    return l6 == null || typeof l6 == "symbol" || typeof l6 == "boolean" ? null : typeof l6 == "function" ? l6 : cn3("" + l6);
  }
  function xi(l6, u6) {
    var a6 = u6.ownerDocument.createElement("input");
    return a6.name = u6.name, a6.value = u6.value, l6.id && a6.setAttribute("form", l6.id), u6.parentNode.insertBefore(a6, u6), l6 = new FormData(l6), a6.parentNode.removeChild(a6), l6;
  }
  function jy(l6, u6, a6, t, n2) {
    if (u6 === "submit" && a6 && a6.stateNode === n2) {
      var f4 = Zi2((n2[Sl] || null).action), c4 = t.submitter;
      c4 && (u6 = (u6 = c4[Sl] || null) ? Zi2(u6.formAction) : c4.getAttribute("formAction"), u6 !== null && (f4 = u6, c4 = null));
      var e = new kn("action", "action", null, t, n2);
      l6.push({
        event: e,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (t.defaultPrevented) {
                if (Cu2 !== 0) {
                  var i3 = c4 ? xi(n2, c4) : new FormData(n2);
                  Ac(a6, {
                    pending: true,
                    data: i3,
                    method: n2.method,
                    action: f4
                  }, null, i3);
                }
              } else typeof f4 == "function" && (e.preventDefault(), i3 = c4 ? xi(n2, c4) : new FormData(n2), Ac(a6, {
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
  for (ln3 = 0; ln3 < cc2.length; ln3++) un3 = cc2[ln3], Vi2 = un3.toLowerCase(), ji2 = un3[0].toUpperCase() + un3.slice(1), Gl3(Vi2, "on" + ji2);
  var un3, Vi2, ji2, ln3;
  Gl3(Q0, "onAnimationEnd");
  Gl3(Z0, "onAnimationIteration");
  Gl3(x0, "onAnimationStart");
  Gl3("dblclick", "onDoubleClick");
  Gl3("focusin", "onFocus");
  Gl3("focusout", "onBlur");
  Gl3(fy, "onTransitionRun");
  Gl3(cy, "onTransitionStart");
  Gl3(ey, "onTransitionCancel");
  Gl3(V0, "onTransitionEnd");
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
    for (var a6 = 0; a6 < l6.length; a6++) {
      var t = l6[a6], n2 = t.event;
      t = t.listeners;
      l: {
        var f4 = void 0;
        if (u6) for (var c4 = t.length - 1; 0 <= c4; c4--) {
          var e = t[c4], i3 = e.instance, d4 = e.currentTarget;
          if (e = e.listener, i3 !== f4 && n2.isPropagationStopped()) break l;
          f4 = e, n2.currentTarget = d4;
          try {
            f4(n2);
          } catch (g8) {
            Xn(g8);
          }
          n2.currentTarget = null, f4 = i3;
        }
        else for (c4 = 0; c4 < t.length; c4++) {
          if (e = t[c4], i3 = e.instance, d4 = e.currentTarget, e = e.listener, i3 !== f4 && n2.isPropagationStopped()) break l;
          f4 = e, n2.currentTarget = d4;
          try {
            f4(n2);
          } catch (g8) {
            Xn(g8);
          }
          n2.currentTarget = null, f4 = i3;
        }
      }
    }
  }
  function N7(l6, u6) {
    var a6 = u6[Pf];
    a6 === void 0 && (a6 = u6[Pf] = /* @__PURE__ */ new Set());
    var t = l6 + "__bubble";
    a6.has(t) || (Ov(u6, l6, 2, false), a6.add(t));
  }
  function Cf(l6, u6, a6) {
    var t = 0;
    u6 && (t |= 4), Ov(a6, l6, t, u6);
  }
  var an2 = "_reactListening" + Math.random().toString(36).slice(2);
  function Ne5(l6) {
    if (!l6[an2]) {
      l6[an2] = true, z0.forEach(function(a6) {
        a6 !== "selectionchange" && (Ky.has(a6) || Cf(a6, false, l6), Cf(a6, true, l6));
      });
      var u6 = l6.nodeType === 9 ? l6 : l6.ownerDocument;
      u6 === null || u6[an2] || (u6[an2] = true, Cf("selectionchange", false, u6));
    }
  }
  function Ov(l6, u6, a6, t) {
    switch (Gv(u6)) {
      case 2:
        var n2 = md;
        break;
      case 8:
        n2 = gd;
        break;
      default:
        n2 = Ye5;
    }
    a6 = n2.bind(null, u6, a6, l6), n2 = void 0, !tc || u6 !== "touchstart" && u6 !== "touchmove" && u6 !== "wheel" || (n2 = true), t ? n2 !== void 0 ? l6.addEventListener(u6, a6, {
      capture: true,
      passive: n2
    }) : l6.addEventListener(u6, a6, true) : n2 !== void 0 ? l6.addEventListener(u6, a6, {
      passive: n2
    }) : l6.addEventListener(u6, a6, false);
  }
  function Lf(l6, u6, a6, t, n2) {
    var f4 = t;
    if ((u6 & 1) === 0 && (u6 & 2) === 0 && t !== null) l: for (; ; ) {
      if (t === null) return;
      var c4 = t.tag;
      if (c4 === 3 || c4 === 4) {
        var e = t.stateNode.containerInfo;
        if (e === n2) break;
        if (c4 === 4) for (c4 = t.return; c4 !== null; ) {
          var i3 = c4.tag;
          if ((i3 === 3 || i3 === 4) && c4.stateNode.containerInfo === n2) return;
          c4 = c4.return;
        }
        for (; e !== null; ) {
          if (c4 = fa(e), c4 === null) return;
          if (i3 = c4.tag, i3 === 5 || i3 === 6 || i3 === 26 || i3 === 27) {
            t = f4 = c4;
            continue l;
          }
          e = e.parentNode;
        }
      }
      t = t.return;
    }
    U0(function() {
      var d4 = f4, g8 = wc(a6), z10 = [];
      l: {
        var S10 = j0.get(l6);
        if (S10 !== void 0) {
          var m6 = kn, O6 = l6;
          switch (l6) {
            case "keypress":
              if (vn(a6) === 0) break l;
            case "keydown":
            case "keyup":
              m6 = Zh;
              break;
            case "focusin":
              O6 = "focus", m6 = Df;
              break;
            case "focusout":
              O6 = "blur", m6 = Df;
              break;
            case "beforeblur":
            case "afterblur":
              m6 = Df;
              break;
            case "click":
              if (a6.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m6 = We5;
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
          var E14 = (u6 & 4) !== 0, G10 = !E14 && (l6 === "scroll" || l6 === "scrollend"), h5 = E14 ? S10 !== null ? S10 + "Capture" : null : S10;
          E14 = [];
          for (var v9 = d4, y10; v9 !== null; ) {
            var b10 = v9;
            if (y10 = b10.stateNode, b10 = b10.tag, b10 !== 5 && b10 !== 26 && b10 !== 27 || y10 === null || h5 === null || (b10 = St3(v9, h5), b10 != null && E14.push(Mt4(v9, b10, y10))), G10) break;
            v9 = v9.return;
          }
          0 < E14.length && (S10 = new m6(S10, O6, null, a6, g8), z10.push({
            event: S10,
            listeners: E14
          }));
        }
      }
      if ((u6 & 7) === 0) {
        l: {
          if (S10 = l6 === "mouseover" || l6 === "pointerover", m6 = l6 === "mouseout" || l6 === "pointerout", S10 && a6 !== ac && (O6 = a6.relatedTarget || a6.fromElement) && (fa(O6) || O6[Xa3])) break l;
          if ((m6 || S10) && (S10 = g8.window === g8 ? g8 : (S10 = g8.ownerDocument) ? S10.defaultView || S10.parentWindow : window, m6 ? (O6 = a6.relatedTarget || a6.toElement, m6 = d4, O6 = O6 ? fa(O6) : null, O6 !== null && (G10 = Ht3(O6), E14 = O6.tag, O6 !== G10 || E14 !== 5 && E14 !== 27 && E14 !== 6) && (O6 = null)) : (m6 = null, O6 = d4), m6 !== O6)) {
            if (E14 = We5, b10 = "onMouseLeave", h5 = "onMouseEnter", v9 = "mouse", (l6 === "pointerout" || l6 === "pointerover") && (E14 = $e4, b10 = "onPointerLeave", h5 = "onPointerEnter", v9 = "pointer"), G10 = m6 == null ? S10 : ka(m6), y10 = O6 == null ? S10 : ka(O6), S10 = new E14(b10, v9 + "leave", m6, a6, g8), S10.target = G10, S10.relatedTarget = y10, b10 = null, fa(g8) === d4 && (E14 = new E14(h5, v9 + "enter", O6, a6, g8), E14.target = y10, E14.relatedTarget = G10, b10 = E14), G10 = b10, m6 && O6) u: {
              for (E14 = m6, h5 = O6, v9 = 0, y10 = E14; y10; y10 = Pu(y10)) v9++;
              for (y10 = 0, b10 = h5; b10; b10 = Pu(b10)) y10++;
              for (; 0 < v9 - y10; ) E14 = Pu(E14), v9--;
              for (; 0 < y10 - v9; ) h5 = Pu(h5), y10--;
              for (; v9--; ) {
                if (E14 === h5 || h5 !== null && E14 === h5.alternate) break u;
                E14 = Pu(E14), h5 = Pu(h5);
              }
              E14 = null;
            }
            else E14 = null;
            m6 !== null && Ki2(z10, S10, m6, E14, false), O6 !== null && G10 !== null && Ki2(z10, G10, O6, E14, true);
          }
        }
        l: {
          if (S10 = d4 ? ka(d4) : window, m6 = S10.nodeName && S10.nodeName.toLowerCase(), m6 === "select" || m6 === "input" && S10.type === "file") var T10 = Ie4;
          else if (re5(S10)) if (Y0) T10 = ay;
          else {
            T10 = ly;
            var H10 = Ph;
          }
          else m6 = S10.nodeName, !m6 || m6.toLowerCase() !== "input" || S10.type !== "checkbox" && S10.type !== "radio" ? d4 && Wc(d4.elementType) && (T10 = Ie4) : T10 = uy;
          if (T10 && (T10 = T10(l6, d4))) {
            R0(z10, T10, a6, g8);
            break l;
          }
          H10 && H10(l6, S10, d4), l6 === "focusout" && d4 && S10.type === "number" && d4.memoizedProps.value != null && uc(S10, "number", S10.value);
        }
        switch (H10 = d4 ? ka(d4) : window, l6) {
          case "focusin":
            (re5(H10) || H10.contentEditable === "true") && (ia = H10, nc2 = d4, lt2 = null);
            break;
          case "focusout":
            lt2 = nc2 = ia = null;
            break;
          case "mousedown":
            fc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = false, ai3(z10, a6, g8);
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            ai3(z10, a6, g8);
        }
        var M7;
        if (kc) l: {
          switch (l6) {
            case "compositionstart":
              var D11 = "onCompositionStart";
              break l;
            case "compositionend":
              D11 = "onCompositionEnd";
              break l;
            case "compositionupdate":
              D11 = "onCompositionUpdate";
              break l;
          }
          D11 = void 0;
        }
        else ea3 ? q0(l6, a6) && (D11 = "onCompositionEnd") : l6 === "keydown" && a6.keyCode === 229 && (D11 = "onCompositionStart");
        D11 && (N0 && a6.locale !== "ko" && (ea3 || D11 !== "onCompositionStart" ? D11 === "onCompositionEnd" && ea3 && (M7 = H0()) : (bu = g8, $c = "value" in bu ? bu.value : bu.textContent, ea3 = true)), H10 = Cn2(d4, D11), 0 < H10.length && (D11 = new we6(D11, l6, null, a6, g8), z10.push({
          event: D11,
          listeners: H10
        }), M7 ? D11.data = M7 : (M7 = B0(a6), M7 !== null && (D11.data = M7)))), (M7 = $h ? Fh(l6, a6) : kh(l6, a6)) && (D11 = Cn2(d4, "onBeforeInput"), 0 < D11.length && (H10 = new we6("onBeforeInput", "beforeinput", null, a6, g8), z10.push({
          event: H10,
          listeners: D11
        }), H10.data = M7)), jy(z10, l6, d4, a6, g8);
      }
      Dv(z10, u6);
    });
  }
  function Mt4(l6, u6, a6) {
    return {
      instance: l6,
      listener: u6,
      currentTarget: a6
    };
  }
  function Cn2(l6, u6) {
    for (var a6 = u6 + "Capture", t = []; l6 !== null; ) {
      var n2 = l6, f4 = n2.stateNode;
      if (n2 = n2.tag, n2 !== 5 && n2 !== 26 && n2 !== 27 || f4 === null || (n2 = St3(l6, a6), n2 != null && t.unshift(Mt4(l6, n2, f4)), n2 = St3(l6, u6), n2 != null && t.push(Mt4(l6, n2, f4))), l6.tag === 3) return t;
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
  function Ki2(l6, u6, a6, t, n2) {
    for (var f4 = u6._reactName, c4 = []; a6 !== null && a6 !== t; ) {
      var e = a6, i3 = e.alternate, d4 = e.stateNode;
      if (e = e.tag, i3 !== null && i3 === t) break;
      e !== 5 && e !== 26 && e !== 27 || d4 === null || (i3 = d4, n2 ? (d4 = St3(a6, f4), d4 != null && c4.unshift(Mt4(a6, d4, i3))) : n2 || (d4 = St3(a6, f4), d4 != null && c4.push(Mt4(a6, d4, i3)))), a6 = a6.return;
    }
    c4.length !== 0 && l6.push({
      event: u6,
      listeners: c4
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
  function Q5(l6, u6, a6, t, n2, f4) {
    switch (a6) {
      case "children":
        typeof t == "string" ? u6 === "body" || u6 === "textarea" && t === "" || Ua3(l6, t) : (typeof t == "number" || typeof t == "bigint") && u6 !== "body" && Ua3(l6, "" + t);
        break;
      case "className":
        Jt3(l6, "class", t);
        break;
      case "tabIndex":
        Jt3(l6, "tabindex", t);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jt3(l6, a6, t);
        break;
      case "style":
        s0(l6, t, f4);
        break;
      case "data":
        if (u6 !== "object") {
          Jt3(l6, "data", t);
          break;
        }
      case "src":
      case "href":
        if (t === "" && (u6 !== "a" || a6 !== "href")) {
          l6.removeAttribute(a6);
          break;
        }
        if (t == null || typeof t == "function" || typeof t == "symbol" || typeof t == "boolean") {
          l6.removeAttribute(a6);
          break;
        }
        t = cn3("" + t), l6.setAttribute(a6, t);
        break;
      case "action":
      case "formAction":
        if (typeof t == "function") {
          l6.setAttribute(a6, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f4 == "function" && (a6 === "formAction" ? (u6 !== "input" && Q5(l6, u6, "name", n2.name, n2, null), Q5(l6, u6, "formEncType", n2.formEncType, n2, null), Q5(l6, u6, "formMethod", n2.formMethod, n2, null), Q5(l6, u6, "formTarget", n2.formTarget, n2, null)) : (Q5(l6, u6, "encType", n2.encType, n2, null), Q5(l6, u6, "method", n2.method, n2, null), Q5(l6, u6, "target", n2.target, n2, null)));
        if (t == null || typeof t == "symbol" || typeof t == "boolean") {
          l6.removeAttribute(a6);
          break;
        }
        t = cn3("" + t), l6.setAttribute(a6, t);
        break;
      case "onClick":
        t != null && (l6.onclick = vf);
        break;
      case "onScroll":
        t != null && N7("scroll", l6);
        break;
      case "onScrollEnd":
        t != null && N7("scrollend", l6);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(A12(61));
          if (a6 = t.__html, a6 != null) {
            if (n2.children != null) throw Error(A12(60));
            l6.innerHTML = a6;
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
        a6 = cn3("" + t), l6.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a6);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t != null && typeof t != "function" && typeof t != "symbol" ? l6.setAttribute(a6, "" + t) : l6.removeAttribute(a6);
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
        t && typeof t != "function" && typeof t != "symbol" ? l6.setAttribute(a6, "") : l6.removeAttribute(a6);
        break;
      case "capture":
      case "download":
        t === true ? l6.setAttribute(a6, "") : t !== false && t != null && typeof t != "function" && typeof t != "symbol" ? l6.setAttribute(a6, t) : l6.removeAttribute(a6);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t != null && typeof t != "function" && typeof t != "symbol" && !isNaN(t) && 1 <= t ? l6.setAttribute(a6, t) : l6.removeAttribute(a6);
        break;
      case "rowSpan":
      case "start":
        t == null || typeof t == "function" || typeof t == "symbol" || isNaN(t) ? l6.removeAttribute(a6) : l6.setAttribute(a6, t);
        break;
      case "popover":
        N7("beforetoggle", l6), N7("toggle", l6), fn2(l6, "popover", t);
        break;
      case "xlinkActuate":
        pl3(l6, "http://www.w3.org/1999/xlink", "xlink:actuate", t);
        break;
      case "xlinkArcrole":
        pl3(l6, "http://www.w3.org/1999/xlink", "xlink:arcrole", t);
        break;
      case "xlinkRole":
        pl3(l6, "http://www.w3.org/1999/xlink", "xlink:role", t);
        break;
      case "xlinkShow":
        pl3(l6, "http://www.w3.org/1999/xlink", "xlink:show", t);
        break;
      case "xlinkTitle":
        pl3(l6, "http://www.w3.org/1999/xlink", "xlink:title", t);
        break;
      case "xlinkType":
        pl3(l6, "http://www.w3.org/1999/xlink", "xlink:type", t);
        break;
      case "xmlBase":
        pl3(l6, "http://www.w3.org/XML/1998/namespace", "xml:base", t);
        break;
      case "xmlLang":
        pl3(l6, "http://www.w3.org/XML/1998/namespace", "xml:lang", t);
        break;
      case "xmlSpace":
        pl3(l6, "http://www.w3.org/XML/1998/namespace", "xml:space", t);
        break;
      case "is":
        fn2(l6, "is", t);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a6.length) || a6[0] !== "o" && a6[0] !== "O" || a6[1] !== "n" && a6[1] !== "N") && (a6 = Eh.get(a6) || a6, fn2(l6, a6, t));
    }
  }
  function Rc(l6, u6, a6, t, n2, f4) {
    switch (a6) {
      case "style":
        s0(l6, t, f4);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(A12(61));
          if (a6 = t.__html, a6 != null) {
            if (n2.children != null) throw Error(A12(60));
            l6.innerHTML = a6;
          }
        }
        break;
      case "children":
        typeof t == "string" ? Ua3(l6, t) : (typeof t == "number" || typeof t == "bigint") && Ua3(l6, "" + t);
        break;
      case "onScroll":
        t != null && N7("scroll", l6);
        break;
      case "onScrollEnd":
        t != null && N7("scrollend", l6);
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
        if (!A0.hasOwnProperty(a6)) l: {
          if (a6[0] === "o" && a6[1] === "n" && (n2 = a6.endsWith("Capture"), u6 = a6.slice(2, n2 ? a6.length - 7 : void 0), f4 = l6[Sl] || null, f4 = f4 != null ? f4[a6] : null, typeof f4 == "function" && l6.removeEventListener(u6, f4, n2), typeof t == "function")) {
            typeof f4 != "function" && f4 !== null && (a6 in l6 ? l6[a6] = null : l6.hasAttribute(a6) && l6.removeAttribute(a6)), l6.addEventListener(u6, t, n2);
            break l;
          }
          a6 in l6 ? l6[a6] = t : t === true ? l6.setAttribute(a6, "") : fn2(l6, a6, t);
        }
    }
  }
  function cl2(l6, u6, a6) {
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
        N7("error", l6), N7("load", l6);
        var t = false, n2 = false, f4;
        for (f4 in a6) if (a6.hasOwnProperty(f4)) {
          var c4 = a6[f4];
          if (c4 != null) switch (f4) {
            case "src":
              t = true;
              break;
            case "srcSet":
              n2 = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(A12(137, u6));
            default:
              Q5(l6, u6, f4, c4, a6, null);
          }
        }
        n2 && Q5(l6, u6, "srcSet", a6.srcSet, a6, null), t && Q5(l6, u6, "src", a6.src, a6, null);
        return;
      case "input":
        N7("invalid", l6);
        var e = f4 = c4 = n2 = null, i3 = null, d4 = null;
        for (t in a6) if (a6.hasOwnProperty(t)) {
          var g8 = a6[t];
          if (g8 != null) switch (t) {
            case "name":
              n2 = g8;
              break;
            case "type":
              c4 = g8;
              break;
            case "checked":
              i3 = g8;
              break;
            case "defaultChecked":
              d4 = g8;
              break;
            case "value":
              f4 = g8;
              break;
            case "defaultValue":
              e = g8;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g8 != null) throw Error(A12(137, u6));
              break;
            default:
              Q5(l6, u6, t, g8, a6, null);
          }
        }
        E0(l6, f4, e, i3, d4, c4, n2, false), On(l6);
        return;
      case "select":
        N7("invalid", l6), t = c4 = f4 = null;
        for (n2 in a6) if (a6.hasOwnProperty(n2) && (e = a6[n2], e != null)) switch (n2) {
          case "value":
            f4 = e;
            break;
          case "defaultValue":
            c4 = e;
            break;
          case "multiple":
            t = e;
          default:
            Q5(l6, u6, n2, e, a6, null);
        }
        u6 = f4, a6 = c4, l6.multiple = !!t, u6 != null ? ba2(l6, !!t, u6, false) : a6 != null && ba2(l6, !!t, a6, true);
        return;
      case "textarea":
        N7("invalid", l6), f4 = n2 = t = null;
        for (c4 in a6) if (a6.hasOwnProperty(c4) && (e = a6[c4], e != null)) switch (c4) {
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
            if (e != null) throw Error(A12(91));
            break;
          default:
            Q5(l6, u6, c4, e, a6, null);
        }
        O0(l6, t, n2, f4), On(l6);
        return;
      case "option":
        for (i3 in a6) if (a6.hasOwnProperty(i3) && (t = a6[i3], t != null)) switch (i3) {
          case "selected":
            l6.selected = t && typeof t != "function" && typeof t != "symbol";
            break;
          default:
            Q5(l6, u6, i3, t, a6, null);
        }
        return;
      case "dialog":
        N7("beforetoggle", l6), N7("toggle", l6), N7("cancel", l6), N7("close", l6);
        break;
      case "iframe":
      case "object":
        N7("load", l6);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Tt3.length; t++) N7(Tt3[t], l6);
        break;
      case "image":
        N7("error", l6), N7("load", l6);
        break;
      case "details":
        N7("toggle", l6);
        break;
      case "embed":
      case "source":
      case "link":
        N7("error", l6), N7("load", l6);
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
        for (d4 in a6) if (a6.hasOwnProperty(d4) && (t = a6[d4], t != null)) switch (d4) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A12(137, u6));
          default:
            Q5(l6, u6, d4, t, a6, null);
        }
        return;
      default:
        if (Wc(u6)) {
          for (g8 in a6) a6.hasOwnProperty(g8) && (t = a6[g8], t !== void 0 && Rc(l6, u6, g8, t, a6, void 0));
          return;
        }
    }
    for (e in a6) a6.hasOwnProperty(e) && (t = a6[e], t != null && Q5(l6, u6, e, t, a6, null));
  }
  function py(l6, u6, a6, t) {
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
        var n2 = null, f4 = null, c4 = null, e = null, i3 = null, d4 = null, g8 = null;
        for (m6 in a6) {
          var z10 = a6[m6];
          if (a6.hasOwnProperty(m6) && z10 != null) switch (m6) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i3 = z10;
            default:
              t.hasOwnProperty(m6) || Q5(l6, u6, m6, null, t, z10);
          }
        }
        for (var S10 in t) {
          var m6 = t[S10];
          if (z10 = a6[S10], t.hasOwnProperty(S10) && (m6 != null || z10 != null)) switch (S10) {
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
              g8 = m6;
              break;
            case "value":
              c4 = m6;
              break;
            case "defaultValue":
              e = m6;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (m6 != null) throw Error(A12(137, u6));
              break;
            default:
              m6 !== z10 && Q5(l6, u6, S10, m6, t, z10);
          }
        }
        lc(l6, c4, e, i3, d4, g8, f4, n2);
        return;
      case "select":
        m6 = c4 = e = S10 = null;
        for (f4 in a6) if (i3 = a6[f4], a6.hasOwnProperty(f4) && i3 != null) switch (f4) {
          case "value":
            break;
          case "multiple":
            m6 = i3;
          default:
            t.hasOwnProperty(f4) || Q5(l6, u6, f4, null, t, i3);
        }
        for (n2 in t) if (f4 = t[n2], i3 = a6[n2], t.hasOwnProperty(n2) && (f4 != null || i3 != null)) switch (n2) {
          case "value":
            S10 = f4;
            break;
          case "defaultValue":
            e = f4;
            break;
          case "multiple":
            c4 = f4;
          default:
            f4 !== i3 && Q5(l6, u6, n2, f4, t, i3);
        }
        u6 = e, a6 = c4, t = m6, S10 != null ? ba2(l6, !!a6, S10, false) : !!t != !!a6 && (u6 != null ? ba2(l6, !!a6, u6, true) : ba2(l6, !!a6, a6 ? [] : "", false));
        return;
      case "textarea":
        m6 = S10 = null;
        for (e in a6) if (n2 = a6[e], a6.hasOwnProperty(e) && n2 != null && !t.hasOwnProperty(e)) switch (e) {
          case "value":
            break;
          case "children":
            break;
          default:
            Q5(l6, u6, e, null, t, n2);
        }
        for (c4 in t) if (n2 = t[c4], f4 = a6[c4], t.hasOwnProperty(c4) && (n2 != null || f4 != null)) switch (c4) {
          case "value":
            S10 = n2;
            break;
          case "defaultValue":
            m6 = n2;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n2 != null) throw Error(A12(91));
            break;
          default:
            n2 !== f4 && Q5(l6, u6, c4, n2, t, f4);
        }
        D0(l6, S10, m6);
        return;
      case "option":
        for (var O6 in a6) if (S10 = a6[O6], a6.hasOwnProperty(O6) && S10 != null && !t.hasOwnProperty(O6)) switch (O6) {
          case "selected":
            l6.selected = false;
            break;
          default:
            Q5(l6, u6, O6, null, t, S10);
        }
        for (i3 in t) if (S10 = t[i3], m6 = a6[i3], t.hasOwnProperty(i3) && S10 !== m6 && (S10 != null || m6 != null)) switch (i3) {
          case "selected":
            l6.selected = S10 && typeof S10 != "function" && typeof S10 != "symbol";
            break;
          default:
            Q5(l6, u6, i3, S10, t, m6);
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
        for (var E14 in a6) S10 = a6[E14], a6.hasOwnProperty(E14) && S10 != null && !t.hasOwnProperty(E14) && Q5(l6, u6, E14, null, t, S10);
        for (d4 in t) if (S10 = t[d4], m6 = a6[d4], t.hasOwnProperty(d4) && S10 !== m6 && (S10 != null || m6 != null)) switch (d4) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (S10 != null) throw Error(A12(137, u6));
            break;
          default:
            Q5(l6, u6, d4, S10, t, m6);
        }
        return;
      default:
        if (Wc(u6)) {
          for (var G10 in a6) S10 = a6[G10], a6.hasOwnProperty(G10) && S10 !== void 0 && !t.hasOwnProperty(G10) && Rc(l6, u6, G10, void 0, t, S10);
          for (g8 in t) S10 = t[g8], m6 = a6[g8], !t.hasOwnProperty(g8) || S10 === m6 || S10 === void 0 && m6 === void 0 || Rc(l6, u6, g8, S10, t, m6);
          return;
        }
    }
    for (var h5 in a6) S10 = a6[h5], a6.hasOwnProperty(h5) && S10 != null && !t.hasOwnProperty(h5) && Q5(l6, u6, h5, null, t, S10);
    for (z10 in t) S10 = t[z10], m6 = a6[z10], !t.hasOwnProperty(z10) || S10 === m6 || S10 == null && m6 == null || Q5(l6, u6, z10, S10, t, m6);
  }
  var Yc = null, oc2 = null;
  function Ln3(l6) {
    return l6.nodeType === 9 ? l6 : l6.ownerDocument;
  }
  function Li2(l6) {
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
  function Yu(l6) {
    return l6 === "head";
  }
  function Ji2(l6, u6) {
    var a6 = u6, t = 0, n2 = 0;
    do {
      var f4 = a6.nextSibling;
      if (l6.removeChild(a6), f4 && f4.nodeType === 8) if (a6 = f4.data, a6 === "/$") {
        if (0 < t && 8 > t) {
          a6 = t;
          var c4 = l6.ownerDocument;
          if (a6 & 1 && yt4(c4.documentElement), a6 & 2 && yt4(c4.body), a6 & 4) for (a6 = c4.head, yt4(a6), c4 = a6.firstChild; c4; ) {
            var e = c4.nextSibling, i3 = c4.nodeName;
            c4[Rt3] || i3 === "SCRIPT" || i3 === "STYLE" || i3 === "LINK" && c4.rel.toLowerCase() === "stylesheet" || a6.removeChild(c4), c4 = e;
          }
        }
        if (n2 === 0) {
          l6.removeChild(f4), Ut4(u6);
          return;
        }
        n2--;
      } else a6 === "$" || a6 === "$?" || a6 === "$!" ? n2++ : t = a6.charCodeAt(0) - 48;
      else t = 0;
      a6 = f4;
    } while (a6);
    Ut4(u6);
  }
  function Xc(l6) {
    var u6 = l6.firstChild;
    for (u6 && u6.nodeType === 10 && (u6 = u6.nextSibling); u6; ) {
      var a6 = u6;
      switch (u6 = u6.nextSibling, a6.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a6), Jc(a6);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a6.rel.toLowerCase() === "stylesheet") continue;
      }
      l6.removeChild(a6);
    }
  }
  function Fy(l6, u6, a6, t) {
    for (; l6.nodeType === 1; ) {
      var n2 = a6;
      if (l6.nodeName.toLowerCase() !== u6.toLowerCase()) {
        if (!t && (l6.nodeName !== "INPUT" || l6.type !== "hidden")) break;
      } else if (t) {
        if (!l6[Rt3]) switch (u6) {
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
      if (l6 = Xl3(l6.nextSibling), l6 === null) break;
    }
    return null;
  }
  function ky(l6, u6, a6) {
    if (u6 === "") return null;
    for (; l6.nodeType !== 3; ) if ((l6.nodeType !== 1 || l6.nodeName !== "INPUT" || l6.type !== "hidden") && !a6 || (l6 = Xl3(l6.nextSibling), l6 === null)) return null;
    return l6;
  }
  function Gc(l6) {
    return l6.data === "$!" || l6.data === "$?" && l6.ownerDocument.readyState === "complete";
  }
  function ry(l6, u6) {
    var a6 = l6.ownerDocument;
    if (l6.data !== "$?" || a6.readyState === "complete") u6();
    else {
      var t = function() {
        u6(), a6.removeEventListener("DOMContentLoaded", t);
      };
      a6.addEventListener("DOMContentLoaded", t), l6._reactRetry = t;
    }
  }
  function Xl3(l6) {
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
  function Wi3(l6) {
    l6 = l6.previousSibling;
    for (var u6 = 0; l6; ) {
      if (l6.nodeType === 8) {
        var a6 = l6.data;
        if (a6 === "$" || a6 === "$!" || a6 === "$?") {
          if (u6 === 0) return l6;
          u6--;
        } else a6 === "/$" && u6++;
      }
      l6 = l6.previousSibling;
    }
    return null;
  }
  function Nv(l6, u6, a6) {
    switch (u6 = Ln3(a6), l6) {
      case "html":
        if (l6 = u6.documentElement, !l6) throw Error(A12(452));
        return l6;
      case "head":
        if (l6 = u6.head, !l6) throw Error(A12(453));
        return l6;
      case "body":
        if (l6 = u6.body, !l6) throw Error(A12(454));
        return l6;
      default:
        throw Error(A12(451));
    }
  }
  function yt4(l6) {
    for (var u6 = l6.attributes; u6.length; ) l6.removeAttributeNode(u6[0]);
    Jc(l6);
  }
  var ol2 = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Set();
  function pn(l6) {
    return typeof l6.getRootNode == "function" ? l6.getRootNode() : l6.nodeType === 9 ? l6 : l6.ownerDocument;
  }
  var fu2 = o7.d;
  o7.d = {
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
    var l6 = fu2.f(), u6 = ff();
    return l6 || u6;
  }
  function Py(l6) {
    var u6 = Ga2(l6);
    u6 !== null && u6.tag === 5 && u6.type === "form" ? M1(u6) : fu2.r(l6);
  }
  var xa = typeof document > "u" ? null : document;
  function qv(l6, u6, a6) {
    var t = xa;
    if (t && typeof u6 == "string" && u6) {
      var n2 = ql3(u6);
      n2 = 'link[rel="' + l6 + '"][href="' + n2 + '"]', typeof a6 == "string" && (n2 += '[crossorigin="' + a6 + '"]'), wi.has(n2) || (wi.add(n2), l6 = {
        rel: l6,
        crossOrigin: a6,
        href: u6
      }, t.querySelector(n2) === null && (u6 = t.createElement("link"), cl2(u6, "link", l6), ul2(u6), t.head.appendChild(u6)));
    }
  }
  function ld(l6) {
    fu2.D(l6), qv("dns-prefetch", l6, null);
  }
  function ud(l6, u6) {
    fu2.C(l6, u6), qv("preconnect", l6, u6);
  }
  function ad(l6, u6, a6) {
    fu2.L(l6, u6, a6);
    var t = xa;
    if (t && l6 && u6) {
      var n2 = 'link[rel="preload"][as="' + ql3(u6) + '"]';
      u6 === "image" && a6 && a6.imageSrcSet ? (n2 += '[imagesrcset="' + ql3(a6.imageSrcSet) + '"]', typeof a6.imageSizes == "string" && (n2 += '[imagesizes="' + ql3(a6.imageSizes) + '"]')) : n2 += '[href="' + ql3(l6) + '"]';
      var f4 = n2;
      switch (u6) {
        case "style":
          f4 = _a2(l6);
          break;
        case "script":
          f4 = Va2(l6);
      }
      ol2.has(f4) || (l6 = j12({
        rel: "preload",
        href: u6 === "image" && a6 && a6.imageSrcSet ? void 0 : l6,
        as: u6
      }, a6), ol2.set(f4, l6), t.querySelector(n2) !== null || u6 === "style" && t.querySelector(jt2(f4)) || u6 === "script" && t.querySelector(Kt(f4)) || (u6 = t.createElement("link"), cl2(u6, "link", l6), ul2(u6), t.head.appendChild(u6)));
    }
  }
  function td(l6, u6) {
    fu2.m(l6, u6);
    var a6 = xa;
    if (a6 && l6) {
      var t = u6 && typeof u6.as == "string" ? u6.as : "script", n2 = 'link[rel="modulepreload"][as="' + ql3(t) + '"][href="' + ql3(l6) + '"]', f4 = n2;
      switch (t) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f4 = Va2(l6);
      }
      if (!ol2.has(f4) && (l6 = j12({
        rel: "modulepreload",
        href: l6
      }, u6), ol2.set(f4, l6), a6.querySelector(n2) === null)) {
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a6.querySelector(Kt(f4))) return;
        }
        t = a6.createElement("link"), cl2(t, "link", l6), ul2(t), a6.head.appendChild(t);
      }
    }
  }
  function nd(l6, u6, a6) {
    fu2.S(l6, u6, a6);
    var t = xa;
    if (t && l6) {
      var n2 = ga(t).hoistableStyles, f4 = _a2(l6);
      u6 = u6 || "default";
      var c4 = n2.get(f4);
      if (!c4) {
        var e = {
          loading: 0,
          preload: null
        };
        if (c4 = t.querySelector(jt2(f4))) e.loading = 5;
        else {
          l6 = j12({
            rel: "stylesheet",
            href: l6,
            "data-precedence": u6
          }, a6), (a6 = ol2.get(f4)) && qe4(l6, a6);
          var i3 = c4 = t.createElement("link");
          ul2(i3), cl2(i3, "link", l6), i3._p = new Promise(function(d4, g8) {
            i3.onload = d4, i3.onerror = g8;
          }), i3.addEventListener("load", function() {
            e.loading |= 1;
          }), i3.addEventListener("error", function() {
            e.loading |= 2;
          }), e.loading |= 4, bn2(c4, u6, t);
        }
        c4 = {
          type: "stylesheet",
          instance: c4,
          count: 1,
          state: e
        }, n2.set(f4, c4);
      }
    }
  }
  function fd(l6, u6) {
    fu2.X(l6, u6);
    var a6 = xa;
    if (a6 && l6) {
      var t = ga(a6).hoistableScripts, n2 = Va2(l6), f4 = t.get(n2);
      f4 || (f4 = a6.querySelector(Kt(n2)), f4 || (l6 = j12({
        src: l6,
        async: true
      }, u6), (u6 = ol2.get(n2)) && Be5(l6, u6), f4 = a6.createElement("script"), ul2(f4), cl2(f4, "link", l6), a6.head.appendChild(f4)), f4 = {
        type: "script",
        instance: f4,
        count: 1,
        state: null
      }, t.set(n2, f4));
    }
  }
  function cd(l6, u6) {
    fu2.M(l6, u6);
    var a6 = xa;
    if (a6 && l6) {
      var t = ga(a6).hoistableScripts, n2 = Va2(l6), f4 = t.get(n2);
      f4 || (f4 = a6.querySelector(Kt(n2)), f4 || (l6 = j12({
        src: l6,
        async: true,
        type: "module"
      }, u6), (u6 = ol2.get(n2)) && Be5(l6, u6), f4 = a6.createElement("script"), ul2(f4), cl2(f4, "link", l6), a6.head.appendChild(f4)), f4 = {
        type: "script",
        instance: f4,
        count: 1,
        state: null
      }, t.set(n2, f4));
    }
  }
  function $i2(l6, u6, a6, t) {
    var n2 = (n2 = Tu.current) ? pn(n2) : null;
    if (!n2) throw Error(A12(446));
    switch (l6) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a6.precedence == "string" && typeof a6.href == "string" ? (u6 = _a2(a6.href), a6 = ga(n2).hoistableStyles, t = a6.get(u6), t || (t = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a6.set(u6, t)), t) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a6.rel === "stylesheet" && typeof a6.href == "string" && typeof a6.precedence == "string") {
          l6 = _a2(a6.href);
          var f4 = ga(n2).hoistableStyles, c4 = f4.get(l6);
          if (c4 || (n2 = n2.ownerDocument || n2, c4 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f4.set(l6, c4), (f4 = n2.querySelector(jt2(l6))) && !f4._p && (c4.instance = f4, c4.state.loading = 5), ol2.has(l6) || (a6 = {
            rel: "preload",
            as: "style",
            href: a6.href,
            crossOrigin: a6.crossOrigin,
            integrity: a6.integrity,
            media: a6.media,
            hrefLang: a6.hrefLang,
            referrerPolicy: a6.referrerPolicy
          }, ol2.set(l6, a6), f4 || ed(n2, l6, a6, c4.state))), u6 && t === null) throw Error(A12(528, ""));
          return c4;
        }
        if (u6 && t !== null) throw Error(A12(529, ""));
        return null;
      case "script":
        return u6 = a6.async, a6 = a6.src, typeof a6 == "string" && u6 && typeof u6 != "function" && typeof u6 != "symbol" ? (u6 = Va2(a6), a6 = ga(n2).hoistableScripts, t = a6.get(u6), t || (t = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a6.set(u6, t)), t) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(A12(444, l6));
    }
  }
  function _a2(l6) {
    return 'href="' + ql3(l6) + '"';
  }
  function jt2(l6) {
    return 'link[rel="stylesheet"][' + l6 + "]";
  }
  function Bv(l6) {
    return j12({}, l6, {
      "data-precedence": l6.precedence,
      precedence: null
    });
  }
  function ed(l6, u6, a6, t) {
    l6.querySelector('link[rel="preload"][as="style"][' + u6 + "]") ? t.loading = 1 : (u6 = l6.createElement("link"), t.preload = u6, u6.addEventListener("load", function() {
      return t.loading |= 1;
    }), u6.addEventListener("error", function() {
      return t.loading |= 2;
    }), cl2(u6, "link", a6), ul2(u6), l6.head.appendChild(u6));
  }
  function Va2(l6) {
    return '[src="' + ql3(l6) + '"]';
  }
  function Kt(l6) {
    return "script[async]" + l6;
  }
  function Fi(l6, u6, a6) {
    if (u6.count++, u6.instance === null) switch (u6.type) {
      case "style":
        var t = l6.querySelector('style[data-href~="' + ql3(a6.href) + '"]');
        if (t) return u6.instance = t, ul2(t), t;
        var n2 = j12({}, a6, {
          "data-href": a6.href,
          "data-precedence": a6.precedence,
          href: null,
          precedence: null
        });
        return t = (l6.ownerDocument || l6).createElement("style"), ul2(t), cl2(t, "style", n2), bn2(t, a6.precedence, l6), u6.instance = t;
      case "stylesheet":
        n2 = _a2(a6.href);
        var f4 = l6.querySelector(jt2(n2));
        if (f4) return u6.state.loading |= 4, u6.instance = f4, ul2(f4), f4;
        t = Bv(a6), (n2 = ol2.get(n2)) && qe4(t, n2), f4 = (l6.ownerDocument || l6).createElement("link"), ul2(f4);
        var c4 = f4;
        return c4._p = new Promise(function(e, i3) {
          c4.onload = e, c4.onerror = i3;
        }), cl2(f4, "link", t), u6.state.loading |= 4, bn2(f4, a6.precedence, l6), u6.instance = f4;
      case "script":
        return f4 = Va2(a6.src), (n2 = l6.querySelector(Kt(f4))) ? (u6.instance = n2, ul2(n2), n2) : (t = a6, (n2 = ol2.get(f4)) && (t = j12({}, a6), Be5(t, n2)), l6 = l6.ownerDocument || l6, n2 = l6.createElement("script"), ul2(n2), cl2(n2, "link", t), l6.head.appendChild(n2), u6.instance = n2);
      case "void":
        return null;
      default:
        throw Error(A12(443, u6.type));
    }
    else u6.type === "stylesheet" && (u6.state.loading & 4) === 0 && (t = u6.instance, u6.state.loading |= 4, bn2(t, a6.precedence, l6));
    return u6.instance;
  }
  function bn2(l6, u6, a6) {
    for (var t = a6.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n2 = t.length ? t[t.length - 1] : null, f4 = n2, c4 = 0; c4 < t.length; c4++) {
      var e = t[c4];
      if (e.dataset.precedence === u6) f4 = e;
      else if (f4 !== n2) break;
    }
    f4 ? f4.parentNode.insertBefore(l6, f4.nextSibling) : (u6 = a6.nodeType === 9 ? a6.head : a6, u6.insertBefore(l6, u6.firstChild));
  }
  function qe4(l6, u6) {
    l6.crossOrigin == null && (l6.crossOrigin = u6.crossOrigin), l6.referrerPolicy == null && (l6.referrerPolicy = u6.referrerPolicy), l6.title == null && (l6.title = u6.title);
  }
  function Be5(l6, u6) {
    l6.crossOrigin == null && (l6.crossOrigin = u6.crossOrigin), l6.referrerPolicy == null && (l6.referrerPolicy = u6.referrerPolicy), l6.integrity == null && (l6.integrity = u6.integrity);
  }
  var zn2 = null;
  function ki(l6, u6, a6) {
    if (zn2 === null) {
      var t = /* @__PURE__ */ new Map(), n2 = zn2 = /* @__PURE__ */ new Map();
      n2.set(a6, t);
    } else n2 = zn2, t = n2.get(a6), t || (t = /* @__PURE__ */ new Map(), n2.set(a6, t));
    if (t.has(l6)) return t;
    for (t.set(l6, null), a6 = a6.getElementsByTagName(l6), n2 = 0; n2 < a6.length; n2++) {
      var f4 = a6[n2];
      if (!(f4[Rt3] || f4[el2] || l6 === "link" && f4.getAttribute("rel") === "stylesheet") && f4.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c4 = f4.getAttribute(u6) || "";
        c4 = l6 + c4;
        var e = t.get(c4);
        e ? e.push(f4) : t.set(c4, [
          f4
        ]);
      }
    }
    return t;
  }
  function ri2(l6, u6, a6) {
    l6 = l6.ownerDocument || l6, l6.head.insertBefore(a6, u6 === "title" ? l6.querySelector("head > title") : null);
  }
  function id(l6, u6, a6) {
    if (a6 === 1 || u6.itemProp != null) return false;
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
  function hd(l6, u6, a6) {
    if (Et3 === null) throw Error(A12(475));
    var t = Et3;
    if (u6.type === "stylesheet" && (typeof a6.media != "string" || matchMedia(a6.media).matches !== false) && (u6.state.loading & 4) === 0) {
      if (u6.instance === null) {
        var n2 = _a2(a6.href), f4 = l6.querySelector(jt2(n2));
        if (f4) {
          l6 = f4._p, l6 !== null && typeof l6 == "object" && typeof l6.then == "function" && (t.count++, t = Jn.bind(t), l6.then(t, t)), u6.state.loading |= 4, u6.instance = f4, ul2(f4);
          return;
        }
        f4 = l6.ownerDocument || l6, a6 = Bv(a6), (n2 = ol2.get(n2)) && qe4(a6, n2), f4 = f4.createElement("link"), ul2(f4);
        var c4 = f4;
        c4._p = new Promise(function(e, i3) {
          c4.onload = e, c4.onerror = i3;
        }), cl2(f4, "link", a6), u6.instance = f4;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(u6, l6), (l6 = u6.state.preload) && (u6.state.loading & 3) === 0 && (t.count++, u6 = Jn.bind(t), l6.addEventListener("load", u6), l6.addEventListener("error", u6));
    }
  }
  function yd2() {
    if (Et3 === null) throw Error(A12(475));
    var l6 = Et3;
    return l6.stylesheets && l6.count === 0 && Zc(l6, l6.stylesheets), 0 < l6.count ? function(u6) {
      var a6 = setTimeout(function() {
        if (l6.stylesheets && Zc(l6, l6.stylesheets), l6.unsuspend) {
          var t = l6.unsuspend;
          l6.unsuspend = null, t();
        }
      }, 6e4);
      return l6.unsuspend = u6, function() {
        l6.unsuspend = null, clearTimeout(a6);
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
      var a6 = Wn.get(l6);
      if (a6) var t = a6.get(null);
      else {
        a6 = /* @__PURE__ */ new Map(), Wn.set(l6, a6);
        for (var n2 = l6.querySelectorAll("link[data-precedence],style[data-precedence]"), f4 = 0; f4 < n2.length; f4++) {
          var c4 = n2[f4];
          (c4.nodeName === "LINK" || c4.getAttribute("media") !== "not all") && (a6.set(c4.dataset.precedence, c4), t = c4);
        }
        t && a6.set(null, t);
      }
      n2 = u6.instance, c4 = n2.getAttribute("data-precedence"), f4 = a6.get(c4) || t, f4 === t && a6.set(null, n2), a6.set(c4, n2), this.count++, t = Jn.bind(this), n2.addEventListener("load", t), n2.addEventListener("error", t), f4 ? f4.parentNode.insertBefore(n2, f4.nextSibling) : (l6 = l6.nodeType === 9 ? l6.head : l6, l6.insertBefore(n2, l6.firstChild)), u6.state.loading |= 4;
    }
  }
  var Dt4 = {
    $$typeof: $l,
    Provider: null,
    Consumer: null,
    _currentValue: Qu,
    _currentValue2: Qu,
    _threadCount: 0
  };
  function Sd(l6, u6, a6, t, n2, f4, c4, e) {
    this.tag = 1, this.containerInfo = l6, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.hiddenUpdates = gf(null), this.identifierPrefix = t, this.onUncaughtError = n2, this.onCaughtError = f4, this.onRecoverableError = c4, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = e, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yv(l6, u6, a6, t, n2, f4, c4, e, i3, d4, g8, z10) {
    return l6 = new Sd(l6, u6, a6, c4, e, i3, d4, z10), u6 = 1, f4 === true && (u6 |= 24), f4 = Al(3, null, null, u6), l6.current = f4, f4.stateNode = l6, u6 = te4(), u6.refCount++, l6.pooledCache = u6, u6.refCount++, f4.memoizedState = {
      element: t,
      isDehydrated: a6,
      cache: u6
    }, fe5(f4), l6;
  }
  function ov(l6) {
    return l6 ? (l6 = ya2, l6) : ya2;
  }
  function _v(l6, u6, a6, t, n2, f4) {
    n2 = ov(n2), t.context === null ? t.context = n2 : t.pendingContext = n2, t = Mu(u6), t.payload = {
      element: a6
    }, f4 = f4 === void 0 ? null : f4, f4 !== null && (t.callback = f4), a6 = Eu2(l6, t, u6), a6 !== null && (Dl(a6, l6, u6), tt6(a6, l6, u6));
  }
  function Ii2(l6, u6) {
    if (l6 = l6.memoizedState, l6 !== null && l6.dehydrated !== null) {
      var a6 = l6.retryLane;
      l6.retryLane = a6 !== 0 && a6 < u6 ? a6 : u6;
    }
  }
  function Re5(l6, u6) {
    Ii2(l6, u6), (l6 = l6.alternate) && Ii2(l6, u6);
  }
  function Xv(l6) {
    if (l6.tag === 13) {
      var u6 = Qa2(l6, 67108864);
      u6 !== null && Dl(u6, l6, 67108864), Re5(l6, 67108864);
    }
  }
  var wn2 = true;
  function md(l6, u6, a6, t) {
    var n2 = s3.T;
    s3.T = null;
    var f4 = o7.p;
    try {
      o7.p = 2, Ye5(l6, u6, a6, t);
    } finally {
      o7.p = f4, s3.T = n2;
    }
  }
  function gd(l6, u6, a6, t) {
    var n2 = s3.T;
    s3.T = null;
    var f4 = o7.p;
    try {
      o7.p = 8, Ye5(l6, u6, a6, t);
    } finally {
      o7.p = f4, s3.T = n2;
    }
  }
  function Ye5(l6, u6, a6, t) {
    if (wn2) {
      var n2 = xc(t);
      if (n2 === null) Lf(l6, u6, t, $n2, a6), Pi(l6, t);
      else if (zd(n2, l6, u6, a6, t)) t.stopPropagation();
      else if (Pi(l6, t), u6 & 4 && -1 < bd.indexOf(l6)) {
        for (; n2 !== null; ) {
          var f4 = Ga2(n2);
          if (f4 !== null) switch (f4.tag) {
            case 3:
              if (f4 = f4.stateNode, f4.current.memoizedState.isDehydrated) {
                var c4 = _u(f4.pendingLanes);
                if (c4 !== 0) {
                  var e = f4;
                  for (e.pendingLanes |= 2, e.entangledLanes |= 2; c4; ) {
                    var i3 = 1 << 31 - Ml(c4);
                    e.entanglements[1] |= i3, c4 &= ~i3;
                  }
                  Ll(f4), (X7 & 6) === 0 && (xn2 = jl2() + 500, Vt3(0, false));
                }
              }
              break;
            case 13:
              e = Qa2(f4, 2), e !== null && Dl(e, f4, 2), ff(), Re5(f4, 2);
          }
          if (f4 = xc(t), f4 === null && Lf(l6, u6, t, $n2, a6), f4 === n2) break;
          n2 = f4;
        }
        n2 !== null && t.stopPropagation();
      } else Lf(l6, u6, t, null, a6);
    }
  }
  function xc(l6) {
    return l6 = wc(l6), oe5(l6);
  }
  var $n2 = null;
  function oe5(l6) {
    if ($n2 = null, l6 = fa(l6), l6 !== null) {
      var u6 = Ht3(l6);
      if (u6 === null) l6 = null;
      else {
        var a6 = u6.tag;
        if (a6 === 13) {
          if (l6 = f0(u6), l6 !== null) return l6;
          l6 = null;
        } else if (a6 === 3) {
          if (u6.stateNode.current.memoizedState.isDehydrated) return u6.tag === 3 ? u6.stateNode.containerInfo : null;
          l6 = null;
        } else u6 !== l6 && (l6 = null);
      }
    }
    return $n2 = l6, null;
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
          case Dn3:
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
  var Vc = false, su = null, Uu2 = null, Hu = null, Ot3 = /* @__PURE__ */ new Map(), st4 = /* @__PURE__ */ new Map(), mu2 = [], bd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Pi(l6, u6) {
    switch (l6) {
      case "focusin":
      case "focusout":
        su = null;
        break;
      case "dragenter":
      case "dragleave":
        Uu2 = null;
        break;
      case "mouseover":
      case "mouseout":
        Hu = null;
        break;
      case "pointerover":
      case "pointerout":
        Ot3.delete(u6.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        st4.delete(u6.pointerId);
    }
  }
  function Wa(l6, u6, a6, t, n2, f4) {
    return l6 === null || l6.nativeEvent !== f4 ? (l6 = {
      blockedOn: u6,
      domEventName: a6,
      eventSystemFlags: t,
      nativeEvent: f4,
      targetContainers: [
        n2
      ]
    }, u6 !== null && (u6 = Ga2(u6), u6 !== null && Xv(u6)), l6) : (l6.eventSystemFlags |= t, u6 = l6.targetContainers, n2 !== null && u6.indexOf(n2) === -1 && u6.push(n2), l6);
  }
  function zd(l6, u6, a6, t, n2) {
    switch (u6) {
      case "focusin":
        return su = Wa(su, l6, u6, a6, t, n2), true;
      case "dragenter":
        return Uu2 = Wa(Uu2, l6, u6, a6, t, n2), true;
      case "mouseover":
        return Hu = Wa(Hu, l6, u6, a6, t, n2), true;
      case "pointerover":
        var f4 = n2.pointerId;
        return Ot3.set(f4, Wa(Ot3.get(f4) || null, l6, u6, a6, t, n2)), true;
      case "gotpointercapture":
        return f4 = n2.pointerId, st4.set(f4, Wa(st4.get(f4) || null, l6, u6, a6, t, n2)), true;
    }
    return false;
  }
  function Qv(l6) {
    var u6 = fa(l6.target);
    if (u6 !== null) {
      var a6 = Ht3(u6);
      if (a6 !== null) {
        if (u6 = a6.tag, u6 === 13) {
          if (u6 = f0(a6), u6 !== null) {
            l6.blockedOn = u6, dh(l6.priority, function() {
              if (a6.tag === 13) {
                var t = El();
                t = Lc(t);
                var n2 = Qa2(a6, t);
                n2 !== null && Dl(n2, a6, t), Re5(a6, t);
              }
            });
            return;
          }
        } else if (u6 === 3 && a6.stateNode.current.memoizedState.isDehydrated) {
          l6.blockedOn = a6.tag === 3 ? a6.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l6.blockedOn = null;
  }
  function An(l6) {
    if (l6.blockedOn !== null) return false;
    for (var u6 = l6.targetContainers; 0 < u6.length; ) {
      var a6 = xc(l6.nativeEvent);
      if (a6 === null) {
        a6 = l6.nativeEvent;
        var t = new a6.constructor(a6.type, a6);
        ac = t, a6.target.dispatchEvent(t), ac = null;
      } else return u6 = Ga2(a6), u6 !== null && Xv(u6), l6.blockedOn = a6, false;
      u6.shift();
    }
    return true;
  }
  function l0(l6, u6, a6) {
    An(l6) && a6.delete(u6);
  }
  function Ad() {
    Vc = false, su !== null && An(su) && (su = null), Uu2 !== null && An(Uu2) && (Uu2 = null), Hu !== null && An(Hu) && (Hu = null), Ot3.forEach(l0), st4.forEach(l0);
  }
  function tn3(l6, u6) {
    l6.blockedOn === u6 && (l6.blockedOn = null, Vc || (Vc = true, I10.unstable_scheduleCallback(I10.unstable_NormalPriority, Ad)));
  }
  var nn2 = null;
  function u0(l6) {
    nn2 !== l6 && (nn2 = l6, I10.unstable_scheduleCallback(I10.unstable_NormalPriority, function() {
      nn2 === l6 && (nn2 = null);
      for (var u6 = 0; u6 < l6.length; u6 += 3) {
        var a6 = l6[u6], t = l6[u6 + 1], n2 = l6[u6 + 2];
        if (typeof t != "function") {
          if (oe5(t || a6) === null) continue;
          break;
        }
        var f4 = Ga2(a6);
        f4 !== null && (l6.splice(u6, 3), u6 -= 3, Ac(f4, {
          pending: true,
          data: n2,
          method: a6.method,
          action: t
        }, t, n2));
      }
    }));
  }
  function Ut4(l6) {
    function u6(i3) {
      return tn3(i3, l6);
    }
    su !== null && tn3(su, l6), Uu2 !== null && tn3(Uu2, l6), Hu !== null && tn3(Hu, l6), Ot3.forEach(u6), st4.forEach(u6);
    for (var a6 = 0; a6 < mu2.length; a6++) {
      var t = mu2[a6];
      t.blockedOn === l6 && (t.blockedOn = null);
    }
    for (; 0 < mu2.length && (a6 = mu2[0], a6.blockedOn === null); ) Qv(a6), a6.blockedOn === null && mu2.shift();
    if (a6 = (l6.ownerDocument || l6).$$reactFormReplay, a6 != null) for (t = 0; t < a6.length; t += 3) {
      var n2 = a6[t], f4 = a6[t + 1], c4 = n2[Sl] || null;
      if (typeof f4 == "function") c4 || u0(a6);
      else if (c4) {
        var e = null;
        if (f4 && f4.hasAttribute("formAction")) {
          if (n2 = f4, c4 = f4[Sl] || null) e = c4.formAction;
          else if (oe5(n2) !== null) continue;
        } else e = c4.action;
        typeof e == "function" ? a6[t + 1] = e : (a6.splice(t, 3), t -= 3), u0(a6);
      }
    }
  }
  function _e6(l6) {
    this._internalRoot = l6;
  }
  hf.prototype.render = _e6.prototype.render = function(l6) {
    var u6 = this._internalRoot;
    if (u6 === null) throw Error(A12(409));
    var a6 = u6.current, t = El();
    _v(a6, t, l6, u6, null, null);
  };
  hf.prototype.unmount = _e6.prototype.unmount = function() {
    var l6 = this._internalRoot;
    if (l6 !== null) {
      this._internalRoot = null;
      var u6 = l6.containerInfo;
      _v(l6.current, 2, null, l6, null, null), ff(), u6[Xa3] = null;
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
      for (var a6 = 0; a6 < mu2.length && u6 !== 0 && u6 < mu2[a6].priority; a6++) ;
      mu2.splice(a6, 0, l6), a6 === 0 && Qv(l6);
    }
  };
  var a0 = t0.version;
  if (a0 !== "19.1.1") throw Error(A12(527, a0, "19.1.1"));
  o7.findDOMNode = function(l6) {
    var u6 = l6._reactInternals;
    if (u6 === void 0) throw typeof l6.render == "function" ? Error(A12(188)) : (l6 = Object.keys(l6).join(","), Error(A12(268, l6)));
    return l6 = kv(u6), l6 = l6 !== null ? c0(l6) : null, l6 = l6 === null ? null : l6.stateNode, l6;
  };
  var Td = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: s3,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (wa2 = __REACT_DEVTOOLS_GLOBAL_HOOK__, !wa2.isDisabled && wa2.supportsFiber)) try {
    Nt2 = wa2.inject(Td), Tl = wa2;
  } catch {
  }
  var wa2;
  yf.createRoot = function(l6, u6) {
    if (!n0(l6)) throw Error(A12(299));
    var a6 = false, t = "", n2 = Y1, f4 = o1, c4 = _1, e = null;
    return u6 != null && (u6.unstable_strictMode === true && (a6 = true), u6.identifierPrefix !== void 0 && (t = u6.identifierPrefix), u6.onUncaughtError !== void 0 && (n2 = u6.onUncaughtError), u6.onCaughtError !== void 0 && (f4 = u6.onCaughtError), u6.onRecoverableError !== void 0 && (c4 = u6.onRecoverableError), u6.unstable_transitionCallbacks !== void 0 && (e = u6.unstable_transitionCallbacks)), u6 = Yv(l6, 1, false, null, null, a6, t, n2, f4, c4, e, null), l6[Xa3] = u6.current, Ne5(l6), new _e6(u6);
  };
  yf.hydrateRoot = function(l6, u6, a6) {
    if (!n0(l6)) throw Error(A12(299));
    var t = false, n2 = "", f4 = Y1, c4 = o1, e = _1, i3 = null, d4 = null;
    return a6 != null && (a6.unstable_strictMode === true && (t = true), a6.identifierPrefix !== void 0 && (n2 = a6.identifierPrefix), a6.onUncaughtError !== void 0 && (f4 = a6.onUncaughtError), a6.onCaughtError !== void 0 && (c4 = a6.onCaughtError), a6.onRecoverableError !== void 0 && (e = a6.onRecoverableError), a6.unstable_transitionCallbacks !== void 0 && (i3 = a6.unstable_transitionCallbacks), a6.formState !== void 0 && (d4 = a6.formState)), u6 = Yv(l6, 1, true, u6, a6 ?? null, t, n2, f4, c4, e, i3, d4), u6.context = ov(null), a6 = u6.current, t = El(), t = Lc(t), n2 = Mu(t), n2.callback = null, Eu2(a6, n2, t), a6 = t, u6.current.lanes = a6, Bt2(u6, a6), Ll(u6), l6[Xa3] = u6.current, Ne5(l6), new hf(u6);
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

// deno:https://esm.sh/cookie@1.1.1/es2022/cookie.mjs
var O = Object.create;
var g2 = Object.defineProperty;
var A2 = Object.getOwnPropertyDescriptor;
var I2 = Object.getOwnPropertyNames;
var j3 = Object.getPrototypeOf;
var T3 = Object.prototype.hasOwnProperty;
var z4 = (i3, t) => () => (t || i3((t = {
  exports: {}
}).exports, t), t.exports);
var R3 = (i3, t, n2, e) => {
  if (t && typeof t == "object" || typeof t == "function") for (let r4 of I2(t)) !T3.call(i3, r4) && r4 !== n2 && g2(i3, r4, {
    get: () => t[r4],
    enumerable: !(e = A2(t, r4)) || e.enumerable
  });
  return i3;
};
var L = (i3, t, n2) => (n2 = i3 != null ? O(j3(i3)) : {}, R3(t || !i3 || !i3.__esModule ? g2(n2, "default", {
  value: i3,
  enumerable: true
}) : n2, i3));
var E4 = z4((u6) => {
  "use strict";
  Object.defineProperty(u6, "__esModule", {
    value: true
  });
  u6.parseCookie = C8;
  u6.parse = C8;
  u6.stringifyCookie = U5;
  u6.stringifySetCookie = x9;
  u6.serialize = x9;
  u6.parseSetCookie = V6;
  u6.stringifySetCookie = x9;
  u6.serialize = x9;
  var b10 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, S10 = /^[\u0021-\u003A\u003C-\u007E]*$/, N7 = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, P5 = /^[\u0020-\u003A\u003D-\u007E]*$/, D11 = /^-?\d+$/, q10 = Object.prototype.toString, M7 = (() => {
    let i3 = function() {
    };
    return i3.prototype = /* @__PURE__ */ Object.create(null), i3;
  })();
  function C8(i3, t) {
    let n2 = new M7(), e = i3.length;
    if (e < 2) return n2;
    let r4 = t?.decode || v9, a6 = 0;
    do {
      let s3 = h5(i3, a6, e);
      if (s3 === -1) break;
      let o7 = k10(i3, a6, e);
      if (s3 > o7) {
        a6 = i3.lastIndexOf(";", s3 - 1) + 1;
        continue;
      }
      let d4 = p5(i3, a6, s3);
      n2[d4] === void 0 && (n2[d4] = r4(p5(i3, s3 + 1, o7))), a6 = o7 + 1;
    } while (a6 < e);
    return n2;
  }
  function U5(i3, t) {
    let n2 = t?.encode || encodeURIComponent, e = [];
    for (let r4 of Object.keys(i3)) {
      let a6 = i3[r4];
      if (a6 === void 0) continue;
      if (!b10.test(r4)) throw new TypeError(`cookie name is invalid: ${r4}`);
      let s3 = n2(a6);
      if (!S10.test(s3)) throw new TypeError(`cookie val is invalid: ${a6}`);
      e.push(`${r4}=${s3}`);
    }
    return e.join("; ");
  }
  function x9(i3, t, n2) {
    let e = typeof i3 == "object" ? i3 : {
      ...n2,
      name: i3,
      value: String(t)
    }, a6 = (typeof t == "object" ? t : n2)?.encode || encodeURIComponent;
    if (!b10.test(e.name)) throw new TypeError(`argument name is invalid: ${e.name}`);
    let s3 = e.value ? a6(e.value) : "";
    if (!S10.test(s3)) throw new TypeError(`argument val is invalid: ${e.value}`);
    let o7 = e.name + "=" + s3;
    if (e.maxAge !== void 0) {
      if (!Number.isInteger(e.maxAge)) throw new TypeError(`option maxAge is invalid: ${e.maxAge}`);
      o7 += "; Max-Age=" + e.maxAge;
    }
    if (e.domain) {
      if (!N7.test(e.domain)) throw new TypeError(`option domain is invalid: ${e.domain}`);
      o7 += "; Domain=" + e.domain;
    }
    if (e.path) {
      if (!P5.test(e.path)) throw new TypeError(`option path is invalid: ${e.path}`);
      o7 += "; Path=" + e.path;
    }
    if (e.expires) {
      if (!F6(e.expires) || !Number.isFinite(e.expires.valueOf())) throw new TypeError(`option expires is invalid: ${e.expires}`);
      o7 += "; Expires=" + e.expires.toUTCString();
    }
    if (e.httpOnly && (o7 += "; HttpOnly"), e.secure && (o7 += "; Secure"), e.partitioned && (o7 += "; Partitioned"), e.priority) switch (typeof e.priority == "string" ? e.priority.toLowerCase() : void 0) {
      case "low":
        o7 += "; Priority=Low";
        break;
      case "medium":
        o7 += "; Priority=Medium";
        break;
      case "high":
        o7 += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${e.priority}`);
    }
    if (e.sameSite) switch (typeof e.sameSite == "string" ? e.sameSite.toLowerCase() : e.sameSite) {
      case true:
      case "strict":
        o7 += "; SameSite=Strict";
        break;
      case "lax":
        o7 += "; SameSite=Lax";
        break;
      case "none":
        o7 += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${e.sameSite}`);
    }
    return o7;
  }
  function V6(i3, t) {
    let n2 = t?.decode || v9, e = i3.length, r4 = k10(i3, 0, e), a6 = h5(i3, 0, r4), s3 = a6 === -1 ? {
      name: "",
      value: n2(p5(i3, 0, r4))
    } : {
      name: p5(i3, 0, a6),
      value: n2(p5(i3, a6 + 1, r4))
    }, o7 = r4 + 1;
    for (; o7 < e; ) {
      let d4 = k10(i3, o7, e), f4 = h5(i3, o7, d4), $4 = f4 === -1 ? p5(i3, o7, d4) : p5(i3, o7, f4), c4 = f4 === -1 ? void 0 : p5(i3, f4 + 1, d4);
      switch ($4.toLowerCase()) {
        case "httponly":
          s3.httpOnly = true;
          break;
        case "secure":
          s3.secure = true;
          break;
        case "partitioned":
          s3.partitioned = true;
          break;
        case "domain":
          s3.domain = c4;
          break;
        case "path":
          s3.path = c4;
          break;
        case "max-age":
          c4 && D11.test(c4) && (s3.maxAge = Number(c4));
          break;
        case "expires":
          if (!c4) break;
          let w8 = new Date(c4);
          Number.isFinite(w8.valueOf()) && (s3.expires = w8);
          break;
        case "priority":
          if (!c4) break;
          let l6 = c4.toLowerCase();
          (l6 === "low" || l6 === "medium" || l6 === "high") && (s3.priority = l6);
          break;
        case "samesite":
          if (!c4) break;
          let m6 = c4.toLowerCase();
          (m6 === "lax" || m6 === "strict" || m6 === "none") && (s3.sameSite = m6);
          break;
      }
      o7 = d4 + 1;
    }
    return s3;
  }
  function k10(i3, t, n2) {
    let e = i3.indexOf(";", t);
    return e === -1 ? n2 : e;
  }
  function h5(i3, t, n2) {
    let e = i3.indexOf("=", t);
    return e < n2 ? e : -1;
  }
  function p5(i3, t, n2) {
    let e = t, r4 = n2;
    do {
      let a6 = i3.charCodeAt(e);
      if (a6 !== 32 && a6 !== 9) break;
    } while (++e < r4);
    for (; r4 > e; ) {
      let a6 = i3.charCodeAt(r4 - 1);
      if (a6 !== 32 && a6 !== 9) break;
      r4--;
    }
    return i3.slice(e, r4);
  }
  function v9(i3) {
    if (i3.indexOf("%") === -1) return i3;
    try {
      return decodeURIComponent(i3);
    } catch {
      return i3;
    }
  }
  function F6(i3) {
    return q10.call(i3) === "[object Date]";
  }
});
var y2 = L(E4());
var { __esModule: B2, parseCookie: G4, parse: J2, stringifyCookie: K3, stringifySetCookie: Q, serialize: W, parseSetCookie: X2 } = y2;
var Y3 = y2.default ?? y2;

// deno:https://esm.sh/set-cookie-parser@2.7.2/es2022/set-cookie-parser.mjs
var A3 = Object.create;
var C3 = Object.defineProperty;
var w2 = Object.getOwnPropertyDescriptor;
var O2 = Object.getOwnPropertyNames;
var N2 = Object.getPrototypeOf;
var V2 = Object.prototype.hasOwnProperty;
var k4 = (e, a6) => () => (a6 || e((a6 = {
  exports: {}
}).exports, a6), a6.exports);
var I3 = (e, a6, r4, s3) => {
  if (a6 && typeof a6 == "object" || typeof a6 == "function") for (let t of O2(a6)) !V2.call(e, t) && t !== r4 && C3(e, t, {
    get: () => a6[t],
    enumerable: !(s3 = w2(a6, t)) || s3.enumerable
  });
  return e;
};
var L2 = (e, a6, r4) => (r4 = e != null ? A3(N2(e)) : {}, I3(a6 || !e || !e.__esModule ? C3(r4, "default", {
  value: e,
  enumerable: true
}) : r4, e));
var j4 = k4((P5, u6) => {
  "use strict";
  var d4 = {
    decodeValues: true,
    map: false,
    silent: false
  };
  function p5(e) {
    return typeof e != "string" || e in {};
  }
  function m6() {
    return /* @__PURE__ */ Object.create(null);
  }
  function g8(e) {
    return typeof e == "string" && !!e.trim();
  }
  function y10(e, a6) {
    var r4 = e.split(";").filter(g8), s3 = r4.shift(), t = q10(s3), f4 = t.name, l6 = t.value;
    if (a6 = a6 ? Object.assign({}, d4, a6) : d4, p5(f4)) return null;
    try {
      l6 = a6.decodeValues ? decodeURIComponent(l6) : l6;
    } catch (o7) {
      console.error("set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.", o7);
    }
    var n2 = m6();
    return n2.name = f4, n2.value = l6, r4.forEach(function(o7) {
      var c4 = o7.split("="), i3 = c4.shift().trimLeft().toLowerCase();
      if (!p5(i3)) {
        var h5 = c4.join("=");
        if (i3 === "expires") n2.expires = new Date(h5);
        else if (i3 === "max-age") {
          var b10 = parseInt(h5, 10);
          Number.isNaN(b10) || (n2.maxAge = b10);
        } else i3 === "secure" ? n2.secure = true : i3 === "httponly" ? n2.httpOnly = true : i3 === "samesite" ? n2.sameSite = h5 : i3 === "partitioned" ? n2.partitioned = true : i3 && (n2[i3] = h5);
      }
    }), n2;
  }
  function q10(e) {
    var a6 = "", r4 = "", s3 = e.split("=");
    return s3.length > 1 ? (a6 = s3.shift(), r4 = s3.join("=")) : r4 = e, {
      name: a6,
      value: r4
    };
  }
  function x9(e, a6) {
    if (a6 = a6 ? Object.assign({}, d4, a6) : d4, !e) return a6.map ? m6() : [];
    if (e.headers) if (typeof e.headers.getSetCookie == "function") e = e.headers.getSetCookie();
    else if (e.headers["set-cookie"]) e = e.headers["set-cookie"];
    else {
      var r4 = e.headers[Object.keys(e.headers).find(function(t) {
        return t.toLowerCase() === "set-cookie";
      })];
      !r4 && e.headers.cookie && !a6.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = r4;
    }
    if (Array.isArray(e) || (e = [
      e
    ]), a6.map) {
      var s3 = m6();
      return e.filter(g8).reduce(function(t, f4) {
        var l6 = y10(f4, a6);
        return l6 && !p5(l6.name) && (t[l6.name] = l6), t;
      }, s3);
    } else return e.filter(g8).map(function(t) {
      return y10(t, a6);
    }).filter(Boolean);
  }
  function E14(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != "string") return [];
    var a6 = [], r4 = 0, s3, t, f4, l6, n2;
    function o7() {
      for (; r4 < e.length && /\s/.test(e.charAt(r4)); ) r4 += 1;
      return r4 < e.length;
    }
    function c4() {
      return t = e.charAt(r4), t !== "=" && t !== ";" && t !== ",";
    }
    for (; r4 < e.length; ) {
      for (s3 = r4, n2 = false; o7(); ) if (t = e.charAt(r4), t === ",") {
        for (f4 = r4, r4 += 1, o7(), l6 = r4; r4 < e.length && c4(); ) r4 += 1;
        r4 < e.length && e.charAt(r4) === "=" ? (n2 = true, r4 = l6, a6.push(e.substring(s3, f4)), s3 = r4) : r4 = f4 + 1;
      } else r4 += 1;
      (!n2 || r4 >= e.length) && a6.push(e.substring(s3, e.length));
    }
    return a6;
  }
  u6.exports = x9;
  u6.exports.parse = x9;
  u6.exports.parseString = y10;
  u6.exports.splitCookiesString = E14;
});
var v3 = L2(j4());
var { parse: S3, parseString: W2, splitCookiesString: B3 } = v3;
var D3 = v3.default ?? v3;

// deno:https://esm.sh/react-dom@19.2.4/X-ZXJlYWN0/es2022/react-dom.mjs
var require4 = (n2) => {
  const e = (m6) => typeof m6.default < "u" ? m6.default : m6, c4 = (m6) => Object.assign({
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
var S4 = Object.create;
var l2 = Object.defineProperty;
var E5 = Object.getOwnPropertyDescriptor;
var T4 = Object.getOwnPropertyNames;
var R4 = Object.getPrototypeOf;
var N3 = Object.prototype.hasOwnProperty;
var p3 = ((r4) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(r4, {
  get: (e, t) => (typeof require4 < "u" ? require4 : e)[t]
}) : r4)(function(r4) {
  if (typeof require4 < "u") return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + r4 + '" is not supported');
});
var y3 = (r4, e) => () => (e || r4((e = {
  exports: {}
}).exports, e), e.exports);
var A4 = (r4, e, t, c4) => {
  if (e && typeof e == "object" || typeof e == "function") for (let a6 of T4(e)) !N3.call(r4, a6) && a6 !== t && l2(r4, a6, {
    get: () => e[a6],
    enumerable: !(c4 = E5(e, a6)) || c4.enumerable
  });
  return r4;
};
var D4 = (r4, e, t) => (t = r4 != null ? S4(R4(r4)) : {}, A4(e || !r4 || !r4.__esModule ? l2(t, "default", {
  value: r4,
  enumerable: true
}) : t, r4));
var _2 = y3((i3) => {
  "use strict";
  var h5 = p3("react");
  function o7(r4) {
    var e = "https://react.dev/errors/" + r4;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + r4 + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f4() {
  }
  var n2 = {
    d: {
      f: f4,
      r: function() {
        throw Error(o7(522));
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
  }, P5 = Symbol.for("react.portal");
  function C8(r4, e, t) {
    var c4 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P5,
      key: c4 == null ? null : "" + c4,
      children: r4,
      containerInfo: e,
      implementation: t
    };
  }
  var u6 = h5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s3(r4, e) {
    if (r4 === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  i3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n2;
  i3.createPortal = function(r4, e) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(o7(299));
    return C8(r4, e, null, t);
  };
  i3.flushSync = function(r4) {
    var e = u6.T, t = n2.p;
    try {
      if (u6.T = null, n2.p = 2, r4) return r4();
    } finally {
      u6.T = e, n2.p = t, n2.d.f();
    }
  };
  i3.preconnect = function(r4, e) {
    typeof r4 == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n2.d.C(r4, e));
  };
  i3.prefetchDNS = function(r4) {
    typeof r4 == "string" && n2.d.D(r4);
  };
  i3.preinit = function(r4, e) {
    if (typeof r4 == "string" && e && typeof e.as == "string") {
      var t = e.as, c4 = s3(t, e.crossOrigin), a6 = typeof e.integrity == "string" ? e.integrity : void 0, g8 = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      t === "style" ? n2.d.S(r4, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: c4,
        integrity: a6,
        fetchPriority: g8
      }) : t === "script" && n2.d.X(r4, {
        crossOrigin: c4,
        integrity: a6,
        fetchPriority: g8,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  i3.preinitModule = function(r4, e) {
    if (typeof r4 == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var t = s3(e.as, e.crossOrigin);
        n2.d.M(r4, {
          crossOrigin: t,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && n2.d.M(r4);
  };
  i3.preload = function(r4, e) {
    if (typeof r4 == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var t = e.as, c4 = s3(t, e.crossOrigin);
      n2.d.L(r4, t, {
        crossOrigin: c4,
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
  i3.preloadModule = function(r4, e) {
    if (typeof r4 == "string") if (e) {
      var t = s3(e.as, e.crossOrigin);
      n2.d.m(r4, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: t,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else n2.d.m(r4);
  };
  i3.requestFormReset = function(r4) {
    n2.d.r(r4);
  };
  i3.unstable_batchedUpdates = function(r4, e) {
    return r4(e);
  };
  i3.useFormState = function(r4, e, t) {
    return u6.H.useFormState(r4, e, t);
  };
  i3.useFormStatus = function() {
    return u6.H.useHostTransitionStatus();
  };
  i3.version = "19.2.4";
});
var v4 = y3((M7, O6) => {
  "use strict";
  function m6() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m6);
    } catch (r4) {
      console.error(r4);
    }
  }
  m6(), O6.exports = _2();
});
var d2 = D4(v4());
var { __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: H2, createPortal: I4, flushSync: b3, preconnect: F3, prefetchDNS: j5, preinit: k5, preinitModule: G5, preload: q4, preloadModule: w3, requestFormReset: V3, unstable_batchedUpdates: x4, useFormState: Y4, useFormStatus: z5, version: B4 } = d2;
var K4 = d2.default ?? d2;

// deno:https://esm.sh/react-router@7.13.0/X-ZXJlYWN0/es2022/dom.mjs
function U2(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
function re2(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Ie2({ pathname: e = "/", search: t = "", hash: r4 = "" }) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r4 && r4 !== "#" && (e += r4.charAt(0) === "#" ? r4 : "#" + r4), e;
}
function je2(e) {
  let t = {};
  if (e) {
    let r4 = e.indexOf("#");
    r4 >= 0 && (t.hash = e.substring(r4), e = e.substring(0, r4));
    let a6 = e.indexOf("?");
    a6 >= 0 && (t.search = e.substring(a6), e = e.substring(0, a6)), e && (t.pathname = e);
  }
  return t;
}
function Xa(e) {
  return {
    defaultValue: e
  };
}
var Rt;
Rt = /* @__PURE__ */ new WeakMap();
function Te2(e, t, r4 = "/") {
  return gt(e, t, r4, false);
}
function gt(e, t, r4, a6) {
  let n2 = typeof t == "string" ? je2(t) : t, o7 = ge2(n2.pathname || "/", r4);
  if (o7 == null) return null;
  let i3 = qa(e);
  Wo(i3);
  let l6 = null;
  for (let s3 = 0; l6 == null && s3 < i3.length; ++s3) {
    let u6 = ei(o7);
    l6 = Zo(i3[s3], u6, a6);
  }
  return l6;
}
function Ka(e, t) {
  let { route: r4, pathname: a6, params: n2 } = e;
  return {
    id: r4.id,
    pathname: a6,
    params: n2,
    data: t[r4.id],
    loaderData: t[r4.id],
    handle: r4.handle
  };
}
function qa(e, t = [], r4 = [], a6 = "", n2 = false) {
  let o7 = (i3, l6, s3 = n2, u6) => {
    let c4 = {
      relativePath: u6 === void 0 ? i3.path || "" : u6,
      caseSensitive: i3.caseSensitive === true,
      childrenIndex: l6,
      route: i3
    };
    if (c4.relativePath.startsWith("/")) {
      if (!c4.relativePath.startsWith(a6) && s3) return;
      U2(c4.relativePath.startsWith(a6), `Absolute route path "${c4.relativePath}" nested under path "${a6}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c4.relativePath = c4.relativePath.slice(a6.length);
    }
    let d4 = Oe2([
      a6,
      c4.relativePath
    ]), h5 = r4.concat(c4);
    i3.children && i3.children.length > 0 && (U2(i3.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${d4}".`), qa(i3.children, t, h5, d4, s3)), !(i3.path == null && !i3.index) && t.push({
      path: d4,
      score: qo(d4, i3.index),
      routesMeta: h5
    });
  };
  return e.forEach((i3, l6) => {
    if (i3.path === "" || !i3.path?.includes("?")) o7(i3, l6);
    else for (let s3 of Qa(i3.path)) o7(i3, l6, true, s3);
  }), t;
}
function Qa(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r4, ...a6] = t, n2 = r4.endsWith("?"), o7 = r4.replace(/\?$/, "");
  if (a6.length === 0) return n2 ? [
    o7,
    ""
  ] : [
    o7
  ];
  let i3 = Qa(a6.join("/")), l6 = [];
  return l6.push(...i3.map((s3) => s3 === "" ? o7 : [
    o7,
    s3
  ].join("/"))), n2 && l6.push(...i3), l6.map((s3) => e.startsWith("/") && s3 === "" ? "/" : s3);
}
function Wo(e) {
  e.sort((t, r4) => t.score !== r4.score ? r4.score - t.score : Qo(t.routesMeta.map((a6) => a6.childrenIndex), r4.routesMeta.map((a6) => a6.childrenIndex)));
}
var Vo = /^:[\w-]+$/;
var Yo = 3;
var Jo = 2;
var Go = 1;
var Xo = 10;
var Ko = -2;
var ba = (e) => e === "*";
function qo(e, t) {
  let r4 = e.split("/"), a6 = r4.length;
  return r4.some(ba) && (a6 += Ko), t && (a6 += Jo), r4.filter((n2) => !ba(n2)).reduce((n2, o7) => n2 + (Vo.test(o7) ? Yo : o7 === "" ? Go : Xo), a6);
}
function Qo(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a6, n2) => a6 === t[n2]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Zo(e, t, r4 = false) {
  let { routesMeta: a6 } = e, n2 = {}, o7 = "/", i3 = [];
  for (let l6 = 0; l6 < a6.length; ++l6) {
    let s3 = a6[l6], u6 = l6 === a6.length - 1, c4 = o7 === "/" ? t : t.slice(o7.length) || "/", d4 = Xt({
      path: s3.relativePath,
      caseSensitive: s3.caseSensitive,
      end: u6
    }, c4), h5 = s3.route;
    if (!d4 && u6 && r4 && !a6[a6.length - 1].route.index && (d4 = Xt({
      path: s3.relativePath,
      caseSensitive: s3.caseSensitive,
      end: false
    }, c4)), !d4) return null;
    Object.assign(n2, d4.params), i3.push({
      params: n2,
      pathname: Oe2([
        o7,
        d4.pathname
      ]),
      pathnameBase: ai(Oe2([
        o7,
        d4.pathnameBase
      ])),
      route: h5
    }), d4.pathnameBase !== "/" && (o7 = Oe2([
      o7,
      d4.pathnameBase
    ]));
  }
  return i3;
}
function Xt(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: false,
    end: true
  });
  let [r4, a6] = Za(e.path, e.caseSensitive, e.end), n2 = t.match(r4);
  if (!n2) return null;
  let o7 = n2[0], i3 = o7.replace(/(.)\/+$/, "$1"), l6 = n2.slice(1);
  return {
    params: a6.reduce((u6, { paramName: c4, isOptional: d4 }, h5) => {
      if (c4 === "*") {
        let w8 = l6[h5] || "";
        i3 = o7.slice(0, o7.length - w8.length).replace(/(.)\/+$/, "$1");
      }
      let p5 = l6[h5];
      return d4 && !p5 ? u6[c4] = void 0 : u6[c4] = (p5 || "").replace(/%2F/g, "/"), u6;
    }, {}),
    pathname: o7,
    pathnameBase: i3,
    pattern: e
  };
}
function Za(e, t = false, r4 = true) {
  re2(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
  let a6 = [], n2 = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i3, l6, s3) => (a6.push({
    paramName: l6,
    isOptional: s3 != null
  }), s3 ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (a6.push({
    paramName: "*"
  }), n2 += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r4 ? n2 += "\\/*$" : e !== "" && e !== "/" && (n2 += "(?:(?=\\/|$))"), [
    new RegExp(n2, t ? void 0 : "i"),
    a6
  ];
}
function ei(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return re2(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
  }
}
function ge2(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r4 = t.endsWith("/") ? t.length - 1 : t.length, a6 = e.charAt(r4);
  return a6 && a6 !== "/" ? null : e.slice(r4) || "/";
}
var en = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ri(e, t = "/") {
  let { pathname: r4, search: a6 = "", hash: n2 = "" } = typeof e == "string" ? je2(e) : e, o7;
  return r4 ? (r4 = r4.replace(/\/\/+/g, "/"), r4.startsWith("/") ? o7 = Sa(r4.substring(1), "/") : o7 = Sa(r4, t)) : o7 = t, {
    pathname: o7,
    search: ni(a6),
    hash: oi(n2)
  };
}
function Sa(e, t) {
  let r4 = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n2) => {
    n2 === ".." ? r4.length > 1 && r4.pop() : n2 !== "." && r4.push(n2);
  }), r4.length > 1 ? r4.join("/") : "/";
}
function mr(e, t, r4, a6) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a6)}].  Please separate it out to the \`to.${r4}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function tn(e) {
  return e.filter((t, r4) => r4 === 0 || t.route.path && t.route.path.length > 0);
}
function Ir(e) {
  let t = tn(e);
  return t.map((r4, a6) => a6 === t.length - 1 ? r4.pathname : r4.pathnameBase);
}
function kr(e, t, r4, a6 = false) {
  let n2;
  typeof e == "string" ? n2 = je2(e) : (n2 = {
    ...e
  }, U2(!n2.pathname || !n2.pathname.includes("?"), mr("?", "pathname", "search", n2)), U2(!n2.pathname || !n2.pathname.includes("#"), mr("#", "pathname", "hash", n2)), U2(!n2.search || !n2.search.includes("#"), mr("#", "search", "hash", n2)));
  let o7 = e === "" || n2.pathname === "", i3 = o7 ? "/" : n2.pathname, l6;
  if (i3 == null) l6 = r4;
  else {
    let d4 = t.length - 1;
    if (!a6 && i3.startsWith("..")) {
      let h5 = i3.split("/");
      for (; h5[0] === ".."; ) h5.shift(), d4 -= 1;
      n2.pathname = h5.join("/");
    }
    l6 = d4 >= 0 ? t[d4] : "/";
  }
  let s3 = ri(n2, l6), u6 = i3 && i3 !== "/" && i3.endsWith("/"), c4 = (o7 || i3 === ".") && r4.endsWith("/");
  return !s3.pathname.endsWith("/") && (u6 || c4) && (s3.pathname += "/"), s3;
}
var Oe2 = (e) => e.join("/").replace(/\/\/+/g, "/");
var ai = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
var ni = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
var oi = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
var Se2 = class {
  constructor(e, t, r4, a6 = false) {
    this.status = e, this.statusText = t || "", this.internal = a6, r4 instanceof Error ? (this.data = r4.toString(), this.error = r4) : this.data = r4;
  }
};
function Ne2(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function St(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var an = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function nn(e, t) {
  let r4 = e;
  if (typeof r4 != "string" || !en.test(r4)) return {
    absoluteURL: void 0,
    isExternal: false,
    to: r4
  };
  let a6 = r4, n2 = false;
  if (an) try {
    let o7 = new URL(window.location.href), i3 = r4.startsWith("//") ? new URL(o7.protocol + r4) : new URL(r4), l6 = ge2(i3.pathname, t);
    i3.origin === o7.origin && l6 != null ? r4 = l6 + i3.search + i3.hash : n2 = true;
  } catch {
    re2(false, `<Link to="${r4}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  return {
    absoluteURL: a6,
    isExternal: n2,
    to: r4
  };
}
var Ye2 = Symbol("Uninstrumented");
var fi = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ln = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var mi = new Set(ln);
var pi = [
  "GET",
  ...ln
];
var yi = new Set(pi);
var cn = Symbol("ResetLoaderData");
var tt = de(null);
tt.displayName = "DataRouter";
var st = de(null);
st.displayName = "DataRouterState";
var xt = de(false);
var Nr = de({
  isTransitioning: false
});
Nr.displayName = "ViewTransition";
var wn = de(/* @__PURE__ */ new Map());
wn.displayName = "Fetchers";
var zi = de(null);
zi.displayName = "Await";
var we3 = de(null);
we3.displayName = "Navigation";
var Dt = de(null);
Dt.displayName = "Location";
var Ue2 = de({
  outlet: null,
  matches: [],
  isDataRoute: false
});
Ue2.displayName = "Route";
var jr = de(null);
jr.displayName = "RouteError";
var Fe = true;
var En = "REACT_ROUTER_ERROR";
var Bi = "REDIRECT";
var Wi = "ROUTE_ERROR_RESPONSE";
function bn(e) {
  if (e.startsWith(`${En}:${Bi}:{`)) try {
    let t = JSON.parse(e.slice(28));
    if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
  } catch {
  }
}
function Sn(e) {
  if (e.startsWith(`${En}:${Wi}:{`)) try {
    let t = JSON.parse(e.slice(40));
    if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new Se2(t.status, t.statusText, t.data);
  } catch {
  }
}
function Vi(e, { relative: t } = {}) {
  U2(Pt(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r4, navigator: a6 } = Ie(we3), { hash: n2, pathname: o7, search: i3 } = Lt(e, {
    relative: t
  }), l6 = o7;
  return r4 !== "/" && (l6 = o7 === "/" ? r4 : Oe2([
    r4,
    o7
  ])), a6.createHref({
    pathname: l6,
    search: i3,
    hash: n2
  });
}
function Pt() {
  return Ie(Dt) != null;
}
function ze2() {
  return U2(Pt(), "useLocation() may be used only in the context of a <Router> component."), Ie(Dt).location;
}
var Cn = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xn(e) {
  Ie(we3).static || De(e);
}
function Yi() {
  let { isDataRoute: e } = Ie(Ue2);
  return e ? nl() : Ji();
}
function Ji() {
  U2(Pt(), "useNavigate() may be used only in the context of a <Router> component.");
  let e = Ie(tt), { basename: t, navigator: r4 } = Ie(we3), { matches: a6 } = Ie(Ue2), { pathname: n2 } = ze2(), o7 = JSON.stringify(Ir(a6)), i3 = ze(false);
  return xn(() => {
    i3.current = true;
  }), He((s3, u6 = {}) => {
    if (re2(i3.current, Cn), !i3.current) return;
    if (typeof s3 == "number") {
      r4.go(s3);
      return;
    }
    let c4 = kr(s3, JSON.parse(o7), n2, u6.relative === "path");
    e == null && t !== "/" && (c4.pathname = c4.pathname === "/" ? t : Oe2([
      t,
      c4.pathname
    ])), (u6.replace ? r4.replace : r4.push)(c4, u6.state, u6);
  }, [
    t,
    r4,
    o7,
    n2,
    e
  ]);
}
var Vs = de(null);
function Lt(e, { relative: t } = {}) {
  let { matches: r4 } = Ie(Ue2), { pathname: a6 } = ze2(), n2 = JSON.stringify(Ir(r4));
  return be(() => kr(e, JSON.parse(n2), a6, t === "path"), [
    e,
    n2,
    a6,
    t
  ]);
}
function Gi(e, t, r4, a6, n2) {
  U2(Pt(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: o7 } = Ie(we3), { matches: i3 } = Ie(Ue2), l6 = i3[i3.length - 1], s3 = l6 ? l6.params : {}, u6 = l6 ? l6.pathname : "/", c4 = l6 ? l6.pathnameBase : "/", d4 = l6 && l6.route;
  if (Fe) {
    let v9 = d4 && d4.path || "";
    Ln(u6, !d4 || v9.endsWith("*") || v9.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u6}" (under <Route path="${v9}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v9}"> to <Route path="${v9 === "/" ? "*" : `${v9}/*`}">.`);
  }
  let h5 = ze2(), p5;
  if (t) {
    let v9 = typeof t == "string" ? je2(t) : t;
    U2(c4 === "/" || v9.pathname?.startsWith(c4), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c4}" but pathname "${v9.pathname}" was given in the \`location\` prop.`), p5 = v9;
  } else p5 = h5;
  let w8 = p5.pathname || "/", E14 = w8;
  if (c4 !== "/") {
    let v9 = c4.replace(/^\//, "").split("/");
    E14 = "/" + w8.replace(/^\//, "").split("/").slice(v9.length).join("/");
  }
  let g8 = Te2(e, {
    pathname: E14
  });
  Fe && (re2(d4 || g8 != null, `No routes matched location "${p5.pathname}${p5.search}${p5.hash}" `), re2(g8 == null || g8[g8.length - 1].route.element !== void 0 || g8[g8.length - 1].route.Component !== void 0 || g8[g8.length - 1].route.lazy !== void 0, `Matched leaf route at location "${p5.pathname}${p5.search}${p5.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));
  let S10 = Zi(g8 && g8.map((v9) => Object.assign({}, v9, {
    params: Object.assign({}, s3, v9.params),
    pathname: Oe2([
      c4,
      o7.encodeLocation ? o7.encodeLocation(v9.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : v9.pathname
    ]),
    pathnameBase: v9.pathnameBase === "/" ? c4 : Oe2([
      c4,
      o7.encodeLocation ? o7.encodeLocation(v9.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : v9.pathnameBase
    ])
  })), i3, r4, a6, n2);
  return t && S10 ? Ce(Dt.Provider, {
    value: {
      location: {
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default",
        ...p5
      },
      navigationType: "POP"
    }
  }, S10) : S10;
}
function Xi() {
  let e = Wr(), t = Ne2(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r4 = e instanceof Error ? e.stack : null, a6 = "rgba(200,200,200, 0.5)", n2 = {
    padding: "0.5rem",
    backgroundColor: a6
  }, o7 = {
    padding: "2px 4px",
    backgroundColor: a6
  }, i3 = null;
  return Fe && (console.error("Error handled by React Router default ErrorBoundary:", e), i3 = Ce(ae, null, Ce("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), Ce("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", Ce("code", {
    style: o7
  }, "ErrorBoundary"), " or", " ", Ce("code", {
    style: o7
  }, "errorElement"), " prop on your route."))), Ce(ae, null, Ce("h2", null, "Unexpected Application Error!"), Ce("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r4 ? Ce("pre", {
    style: n2
  }, r4) : null, i3);
}
var Ki = Ce(Xi, null);
var Dn = class extends pe {
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
    this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      let r4 = Sn(e.digest);
      r4 && (e = r4);
    }
    let t = e !== void 0 ? Ce(Ue2.Provider, {
      value: this.props.routeContext
    }, Ce(jr.Provider, {
      value: e,
      children: this.props.component
    })) : this.props.children;
    return this.context ? Ce(qi, {
      error: e
    }, t) : t;
  }
};
Dn.contextType = xt;
var Rr = /* @__PURE__ */ new WeakMap();
function qi({ children: e, error: t }) {
  let { basename: r4 } = Ie(we3);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let a6 = bn(t.digest);
    if (a6) {
      let n2 = Rr.get(t);
      if (n2) throw n2;
      let o7 = nn(a6.location, r4);
      if (an && !Rr.get(t)) if (o7.isExternal || a6.reloadDocument) window.location.href = o7.absoluteURL || o7.to;
      else {
        let i3 = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(o7.to, {
          replace: a6.replace
        }));
        throw Rr.set(t, i3), i3;
      }
      return Ce("meta", {
        httpEquiv: "refresh",
        content: `0;url=${o7.absoluteURL || o7.to}`
      });
    }
  }
  return e;
}
function Qi({ routeContext: e, match: t, children: r4 }) {
  let a6 = Ie(tt);
  return a6 && a6.static && a6.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a6.staticContext._deepestRenderedBoundaryId = t.route.id), Ce(Ue2.Provider, {
    value: e
  }, r4);
}
function Zi(e, t = [], r4 = null, a6 = null, n2 = null) {
  if (e == null) {
    if (!r4) return null;
    if (r4.errors) e = r4.matches;
    else if (t.length === 0 && !r4.initialized && r4.matches.length > 0) e = r4.matches;
    else return null;
  }
  let o7 = e, i3 = r4?.errors;
  if (i3 != null) {
    let c4 = o7.findIndex((d4) => d4.route.id && i3?.[d4.route.id] !== void 0);
    U2(c4 >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i3).join(",")}`), o7 = o7.slice(0, Math.min(o7.length, c4 + 1));
  }
  let l6 = false, s3 = -1;
  if (r4) for (let c4 = 0; c4 < o7.length; c4++) {
    let d4 = o7[c4];
    if ((d4.route.HydrateFallback || d4.route.hydrateFallbackElement) && (s3 = c4), d4.route.id) {
      let { loaderData: h5, errors: p5 } = r4, w8 = d4.route.loader && !h5.hasOwnProperty(d4.route.id) && (!p5 || p5[d4.route.id] === void 0);
      if (d4.route.lazy || w8) {
        l6 = true, s3 >= 0 ? o7 = o7.slice(0, s3 + 1) : o7 = [
          o7[0]
        ];
        break;
      }
    }
  }
  let u6 = r4 && a6 ? (c4, d4) => {
    a6(c4, {
      location: r4.location,
      params: r4.matches?.[0]?.params ?? {},
      unstable_pattern: St(r4.matches),
      errorInfo: d4
    });
  } : void 0;
  return o7.reduceRight((c4, d4, h5) => {
    let p5, w8 = false, E14 = null, g8 = null;
    r4 && (p5 = i3 && d4.route.id ? i3[d4.route.id] : void 0, E14 = d4.route.errorElement || Ki, l6 && (s3 < 0 && h5 === 0 ? (Ln("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), w8 = true, g8 = null) : s3 === h5 && (w8 = true, g8 = d4.route.hydrateFallbackElement || null)));
    let S10 = t.concat(o7.slice(0, h5 + 1)), v9 = () => {
      let x9;
      return p5 ? x9 = E14 : w8 ? x9 = g8 : d4.route.Component ? x9 = Ce(d4.route.Component, null) : d4.route.element ? x9 = d4.route.element : x9 = c4, Ce(Qi, {
        match: d4,
        routeContext: {
          outlet: c4,
          matches: S10,
          isDataRoute: r4 != null
        },
        children: x9
      });
    };
    return r4 && (d4.route.ErrorBoundary || d4.route.errorElement || h5 === 0) ? Ce(Dn, {
      location: r4.location,
      revalidation: r4.revalidation,
      component: E14,
      error: p5,
      children: v9(),
      routeContext: {
        outlet: null,
        matches: S10,
        isDataRoute: true
      },
      onError: u6
    }) : v9();
  }, null);
}
function Ur(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function el(e) {
  let t = Ie(tt);
  return U2(t, Ur(e)), t;
}
function zr(e) {
  let t = Ie(st);
  return U2(t, Ur(e)), t;
}
function tl(e) {
  let t = Ie(Ue2);
  return U2(t, Ur(e)), t;
}
function Br(e) {
  let t = tl(e), r4 = t.matches[t.matches.length - 1];
  return U2(r4.route.id, `${e} can only be used on routes that contain a unique "id"`), r4.route.id;
}
function rl() {
  return Br("useRouteId");
}
function al() {
  return zr("useNavigation").navigation;
}
function Pn() {
  let { matches: e, loaderData: t } = zr("useMatches");
  return be(() => e.map((r4) => Ka(r4, t)), [
    e,
    t
  ]);
}
function Wr() {
  let e = Ie(jr), t = zr("useRouteError"), r4 = Br("useRouteError");
  return e !== void 0 ? e : t.errors?.[r4];
}
function nl() {
  let { router: e } = el("useNavigate"), t = Br("useNavigate"), r4 = ze(false);
  return xn(() => {
    r4.current = true;
  }), He(async (n2, o7 = {}) => {
    re2(r4.current, Cn), r4.current && (typeof n2 == "number" ? await e.navigate(n2) : await e.navigate(n2, {
      fromRouteId: t,
      ...o7
    }));
  }, [
    e,
    t
  ]);
}
var Na = {};
function Ln(e, t, r4) {
  !t && !Na[e] && (Na[e] = true, re2(false, r4));
}
var ol = "useOptimistic";
var Ua = react_19_1_exports[ol];
var ul = Oe(cl);
function cl({ routes: e, future: t, state: r4, onError: a6 }) {
  return Gi(e, void 0, r4, a6, t);
}
function Mn({ basename: e = "/", children: t = null, location: r4, navigationType: a6 = "POP", navigator: n2, static: o7 = false, unstable_useTransitions: i3 }) {
  U2(!Pt(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let l6 = e.replace(/^\/*/, "/"), s3 = be(() => ({
    basename: l6,
    navigator: n2,
    static: o7,
    unstable_useTransitions: i3,
    future: {}
  }), [
    l6,
    n2,
    o7,
    i3
  ]);
  typeof r4 == "string" && (r4 = je2(r4));
  let { pathname: u6 = "/", search: c4 = "", hash: d4 = "", state: h5 = null, key: p5 = "default" } = r4, w8 = be(() => {
    let E14 = ge2(u6, l6);
    return E14 == null ? null : {
      location: {
        pathname: E14,
        search: c4,
        hash: d4,
        state: h5,
        key: p5
      },
      navigationType: a6
    };
  }, [
    l6,
    u6,
    c4,
    d4,
    h5,
    p5,
    a6
  ]);
  return re2(w8 != null, `<Router basename="${l6}"> is not able to match the URL "${u6}${c4}${d4}" because it does not start with the basename, so the <Router> won't render anything.`), w8 == null ? null : Ce(we3.Provider, {
    value: s3
  }, Ce(Dt.Provider, {
    children: t,
    value: w8
  }));
}
var Yt = "get";
var Jt = "application/x-www-form-urlencoded";
function rr(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function dl(e) {
  return rr(e) && e.tagName.toLowerCase() === "button";
}
function fl(e) {
  return rr(e) && e.tagName.toLowerCase() === "form";
}
function hl(e) {
  return rr(e) && e.tagName.toLowerCase() === "input";
}
function ml(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function pl(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ml(e);
}
var Ut = null;
function yl() {
  if (Ut === null) try {
    new FormData(document.createElement("form"), 0), Ut = false;
  } catch {
    Ut = true;
  }
  return Ut;
}
var Rl = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function gr(e) {
  return e != null && !Rl.has(e) ? (re2(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`), null) : e;
}
function gl(e, t) {
  let r4, a6, n2, o7, i3;
  if (fl(e)) {
    let l6 = e.getAttribute("action");
    a6 = l6 ? ge2(l6, t) : null, r4 = e.getAttribute("method") || Yt, n2 = gr(e.getAttribute("enctype")) || Jt, o7 = new FormData(e);
  } else if (dl(e) || hl(e) && (e.type === "submit" || e.type === "image")) {
    let l6 = e.form;
    if (l6 == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s3 = e.getAttribute("formaction") || l6.getAttribute("action");
    if (a6 = s3 ? ge2(s3, t) : null, r4 = e.getAttribute("formmethod") || l6.getAttribute("method") || Yt, n2 = gr(e.getAttribute("formenctype")) || gr(l6.getAttribute("enctype")) || Jt, o7 = new FormData(l6, e), !yl()) {
      let { name: u6, type: c4, value: d4 } = e;
      if (c4 === "image") {
        let h5 = u6 ? `${u6}.` : "";
        o7.append(`${h5}x`, "0"), o7.append(`${h5}y`, "0");
      } else u6 && o7.append(u6, d4);
    }
  } else {
    if (rr(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r4 = Yt, a6 = null, n2 = Jt, i3 = e;
  }
  return o7 && n2 === "text/plain" && (i3 = o7, o7 = void 0), {
    action: a6,
    method: r4.toLowerCase(),
    encType: n2,
    formData: o7,
    body: i3
  };
}
var Ys = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Nl = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var jl = /[&><\u2028\u2029]/g;
function Pr(e) {
  return e.replace(jl, (t) => Nl[t]);
}
function me3(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
var Qt = Symbol("SingleFetchRedirect");
var Jr = /* @__PURE__ */ new Set([
  100,
  101,
  204,
  205
]);
function ar(e, t, r4, a6) {
  let n2 = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
  return r4 ? n2.pathname.endsWith("/") ? n2.pathname = `${n2.pathname}_.${a6}` : n2.pathname = `${n2.pathname}.${a6}` : n2.pathname === "/" ? n2.pathname = `_root.${a6}` : t && ge2(n2.pathname, t) === "/" ? n2.pathname = `${t.replace(/\/$/, "")}/_root.${a6}` : n2.pathname = `${n2.pathname.replace(/\/$/, "")}.${a6}`, n2;
}
async function $n(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r4 = await import(e.module);
    return t[e.id] = r4, r4;
  } catch (r4) {
    if (console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(r4), window.__reactRouterContext && window.__reactRouterContext.isSpaMode && import.meta.hot) throw r4;
    return window.location.reload(), new Promise(() => {
    });
  }
}
function zn(e) {
  return e != null && typeof e.page == "string";
}
function Gl(e) {
  return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Xl(e, t, r4) {
  let a6 = await Promise.all(e.map(async (n2) => {
    let o7 = t.routes[n2.route.id];
    if (o7) {
      let i3 = await $n(o7, r4);
      return i3.links ? i3.links() : [];
    }
    return [];
  }));
  return Ql(a6.flat(1).filter(Gl).filter((n2) => n2.rel === "stylesheet" || n2.rel === "preload").map((n2) => n2.rel === "stylesheet" ? {
    ...n2,
    rel: "prefetch",
    as: "style"
  } : {
    ...n2,
    rel: "prefetch"
  }));
}
function Va(e, t, r4, a6, n2, o7) {
  let i3 = (s3, u6) => r4[u6] ? s3.route.id !== r4[u6].route.id : true, l6 = (s3, u6) => r4[u6].pathname !== s3.pathname || r4[u6].route.path?.endsWith("*") && r4[u6].params["*"] !== s3.params["*"];
  return o7 === "assets" ? t.filter((s3, u6) => i3(s3, u6) || l6(s3, u6)) : o7 === "data" ? t.filter((s3, u6) => {
    let c4 = a6.routes[s3.route.id];
    if (!c4 || !c4.hasLoader) return false;
    if (i3(s3, u6) || l6(s3, u6)) return true;
    if (s3.route.shouldRevalidate) {
      let d4 = s3.route.shouldRevalidate({
        currentUrl: new URL(n2.pathname + n2.search + n2.hash, window.origin),
        currentParams: r4[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: s3.params,
        defaultShouldRevalidate: true
      });
      if (typeof d4 == "boolean") return d4;
    }
    return true;
  }) : [];
}
function Bn(e, t, { includeHydrateFallback: r4 } = {}) {
  return Kl(e.map((a6) => {
    let n2 = t.routes[a6.route.id];
    if (!n2) return [];
    let o7 = [
      n2.module
    ];
    return n2.clientActionModule && (o7 = o7.concat(n2.clientActionModule)), n2.clientLoaderModule && (o7 = o7.concat(n2.clientLoaderModule)), r4 && n2.hydrateFallbackModule && (o7 = o7.concat(n2.hydrateFallbackModule)), n2.imports && (o7 = o7.concat(n2.imports)), o7;
  }).flat(1));
}
function Kl(e) {
  return [
    ...new Set(e)
  ];
}
function ql(e) {
  let t = {}, r4 = Object.keys(e).sort();
  for (let a6 of r4) t[a6] = e[a6];
  return t;
}
function Ql(e, t) {
  let r4 = /* @__PURE__ */ new Set(), a6 = new Set(t);
  return e.reduce((n2, o7) => {
    if (t && !zn(o7) && o7.as === "script" && o7.href && a6.has(o7.href)) return n2;
    let l6 = JSON.stringify(ql(o7));
    return r4.has(l6) || (r4.add(l6), n2.push({
      key: l6,
      link: o7
    })), n2;
  }, []);
}
function qr() {
  let e = Ie(tt);
  return me3(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function Qn() {
  let e = Ie(st);
  return me3(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var Je = de(void 0);
Je.displayName = "FrameworkContext";
function or() {
  let e = Ie(Je);
  return me3(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function us(e, t) {
  let r4 = Ie(Je), [a6, n2] = Ge(false), [o7, i3] = Ge(false), { onFocus: l6, onBlur: s3, onMouseEnter: u6, onMouseLeave: c4, onTouchStart: d4 } = t, h5 = ze(null);
  Le(() => {
    if (e === "render" && i3(true), e === "viewport") {
      let E14 = (S10) => {
        S10.forEach((v9) => {
          i3(v9.isIntersecting);
        });
      }, g8 = new IntersectionObserver(E14, {
        threshold: 0.5
      });
      return h5.current && g8.observe(h5.current), () => {
        g8.disconnect();
      };
    }
  }, [
    e
  ]), Le(() => {
    if (a6) {
      let E14 = setTimeout(() => {
        i3(true);
      }, 100);
      return () => {
        clearTimeout(E14);
      };
    }
  }, [
    a6
  ]);
  let p5 = () => {
    n2(true);
  }, w8 = () => {
    n2(false), i3(false);
  };
  return r4 ? e !== "intent" ? [
    o7,
    h5,
    {}
  ] : [
    o7,
    h5,
    {
      onFocus: yt(l6, p5),
      onBlur: yt(s3, w8),
      onMouseEnter: yt(u6, p5),
      onMouseLeave: yt(c4, w8),
      onTouchStart: yt(d4, p5)
    }
  ] : [
    false,
    h5,
    {}
  ];
}
function yt(e, t) {
  return (r4) => {
    e && e(r4), r4.defaultPrevented || t(r4);
  };
}
function ds({ page: e, ...t }) {
  let { router: r4 } = qr(), a6 = be(() => Te2(r4.routes, e, r4.basename), [
    r4.routes,
    e,
    r4.basename
  ]);
  return a6 ? Ce(hs, {
    page: e,
    matches: a6,
    ...t
  }) : null;
}
function fs(e) {
  let { manifest: t, routeModules: r4 } = or(), [a6, n2] = Ge([]);
  return Le(() => {
    let o7 = false;
    return Xl(e, t, r4).then((i3) => {
      o7 || n2(i3);
    }), () => {
      o7 = true;
    };
  }, [
    e,
    t,
    r4
  ]), a6;
}
function hs({ page: e, matches: t, ...r4 }) {
  let a6 = ze2(), { future: n2, manifest: o7, routeModules: i3 } = or(), { basename: l6 } = qr(), { loaderData: s3, matches: u6 } = Qn(), c4 = be(() => Va(e, t, u6, o7, a6, "data"), [
    e,
    t,
    u6,
    o7,
    a6
  ]), d4 = be(() => Va(e, t, u6, o7, a6, "assets"), [
    e,
    t,
    u6,
    o7,
    a6
  ]), h5 = be(() => {
    if (e === a6.pathname + a6.search + a6.hash) return [];
    let E14 = /* @__PURE__ */ new Set(), g8 = false;
    if (t.forEach((v9) => {
      let x9 = o7.routes[v9.route.id];
      !x9 || !x9.hasLoader || (!c4.some((D11) => D11.route.id === v9.route.id) && v9.route.id in s3 && i3[v9.route.id]?.shouldRevalidate || x9.hasClientLoader ? g8 = true : E14.add(v9.route.id));
    }), E14.size === 0) return [];
    let S10 = ar(e, l6, n2.unstable_trailingSlashAwareDataRequests, "data");
    return g8 && E14.size > 0 && S10.searchParams.set("_routes", t.filter((v9) => E14.has(v9.route.id)).map((v9) => v9.route.id).join(",")), [
      S10.pathname + S10.search
    ];
  }, [
    l6,
    n2.unstable_trailingSlashAwareDataRequests,
    s3,
    a6,
    o7,
    c4,
    t,
    e,
    i3
  ]), p5 = be(() => Bn(d4, o7), [
    d4,
    o7
  ]), w8 = fs(d4);
  return Ce(ae, null, h5.map((E14) => Ce("link", {
    key: E14,
    rel: "prefetch",
    as: "fetch",
    href: E14,
    ...r4
  })), p5.map((E14) => Ce("link", {
    key: E14,
    rel: "modulepreload",
    href: E14,
    ...r4
  })), w8.map(({ key: E14, link: g8 }) => Ce("link", {
    key: E14,
    nonce: r4.nonce,
    ...g8,
    crossOrigin: g8.crossOrigin ?? r4.crossOrigin
  })));
}
function ys(...e) {
  return (t) => {
    e.forEach((r4) => {
      typeof r4 == "function" ? r4(t) : r4 != null && (r4.current = t);
    });
  };
}
var Rs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Rs && (window.__reactRouterVersion = "7.13.0");
} catch {
}
function gs({ basename: e, children: t, history: r4, unstable_useTransitions: a6 }) {
  let [n2, o7] = Ge({
    action: r4.action,
    location: r4.location
  }), i3 = He((l6) => {
    a6 === false ? o7(l6) : ge(() => o7(l6));
  }, [
    a6
  ]);
  return De(() => r4.listen(i3), [
    r4,
    i3
  ]), Ce(Mn, {
    basename: e,
    children: t,
    location: n2.location,
    navigationType: n2.action,
    navigator: r4,
    unstable_useTransitions: a6
  });
}
gs.displayName = "unstable_HistoryRouter";
var eo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var to = Ae(function({ onClick: t, discover: r4 = "render", prefetch: a6 = "none", relative: n2, reloadDocument: o7, replace: i3, state: l6, target: s3, to: u6, preventScrollReset: c4, viewTransition: d4, unstable_defaultShouldRevalidate: h5, ...p5 }, w8) {
  let { basename: E14, unstable_useTransitions: g8 } = Ie(we3), S10 = typeof u6 == "string" && eo.test(u6), v9 = nn(u6, E14);
  u6 = v9.to;
  let x9 = Vi(u6, {
    relative: n2
  }), [D11, P5, F6] = us(a6, p5), R7 = Ss(u6, {
    replace: i3,
    state: l6,
    target: s3,
    preventScrollReset: c4,
    relative: n2,
    viewTransition: d4,
    unstable_defaultShouldRevalidate: h5,
    unstable_useTransitions: g8
  });
  function _8(G10) {
    t && t(G10), G10.defaultPrevented || R7(G10);
  }
  let B10 = Ce("a", {
    ...p5,
    ...F6,
    href: v9.absoluteURL || x9,
    onClick: v9.isExternal || o7 ? t : _8,
    ref: ys(w8, P5),
    target: s3,
    "data-discover": !S10 && r4 === "render" ? "true" : void 0
  });
  return D11 && !S10 ? Ce(ae, null, B10, Ce(ds, {
    page: x9
  })) : B10;
});
to.displayName = "Link";
var vs = Ae(function({ "aria-current": t = "page", caseSensitive: r4 = false, className: a6 = "", end: n2 = false, style: o7, to: i3, viewTransition: l6, children: s3, ...u6 }, c4) {
  let d4 = Lt(i3, {
    relative: u6.relative
  }), h5 = ze2(), p5 = Ie(st), { navigator: w8, basename: E14 } = Ie(we3), g8 = p5 != null && Ts(d4) && l6 === true, S10 = w8.encodeLocation ? w8.encodeLocation(d4).pathname : d4.pathname, v9 = h5.pathname, x9 = p5 && p5.navigation && p5.navigation.location ? p5.navigation.location.pathname : null;
  r4 || (v9 = v9.toLowerCase(), x9 = x9 ? x9.toLowerCase() : null, S10 = S10.toLowerCase()), x9 && E14 && (x9 = ge2(x9, E14) || x9);
  let D11 = S10 !== "/" && S10.endsWith("/") ? S10.length - 1 : S10.length, P5 = v9 === S10 || !n2 && v9.startsWith(S10) && v9.charAt(D11) === "/", F6 = x9 != null && (x9 === S10 || !n2 && x9.startsWith(S10) && x9.charAt(S10.length) === "/"), R7 = {
    isActive: P5,
    isPending: F6,
    isTransitioning: g8
  }, _8 = P5 ? t : void 0, B10;
  typeof a6 == "function" ? B10 = a6(R7) : B10 = [
    a6,
    P5 ? "active" : null,
    F6 ? "pending" : null,
    g8 ? "transitioning" : null
  ].filter(Boolean).join(" ");
  let G10 = typeof o7 == "function" ? o7(R7) : o7;
  return Ce(to, {
    ...u6,
    "aria-current": _8,
    className: B10,
    ref: c4,
    style: G10,
    to: i3,
    viewTransition: l6
  }, typeof s3 == "function" ? s3(R7) : s3);
});
vs.displayName = "NavLink";
var ws = Ae(({ discover: e = "render", fetcherKey: t, navigate: r4, reloadDocument: a6, replace: n2, state: o7, method: i3 = Yt, action: l6, onSubmit: s3, relative: u6, preventScrollReset: c4, viewTransition: d4, unstable_defaultShouldRevalidate: h5, ...p5 }, w8) => {
  let { unstable_useTransitions: E14 } = Ie(we3), g8 = Ds(), S10 = Ps(l6, {
    relative: u6
  }), v9 = i3.toLowerCase() === "get" ? "get" : "post", x9 = typeof l6 == "string" && eo.test(l6);
  return Ce("form", {
    ref: w8,
    method: v9,
    action: S10,
    onSubmit: a6 ? s3 : (P5) => {
      if (s3 && s3(P5), P5.defaultPrevented) return;
      P5.preventDefault();
      let F6 = P5.nativeEvent.submitter, R7 = F6?.getAttribute("formmethod") || i3, _8 = () => g8(F6 || P5.currentTarget, {
        fetcherKey: t,
        method: R7,
        navigate: r4,
        replace: n2,
        state: o7,
        relative: u6,
        preventScrollReset: c4,
        viewTransition: d4,
        unstable_defaultShouldRevalidate: h5
      });
      E14 && r4 !== false ? ge(() => _8()) : _8();
    },
    ...p5,
    "data-discover": !x9 && e === "render" ? "true" : void 0
  });
});
ws.displayName = "Form";
function Es({ getKey: e, storageKey: t, ...r4 }) {
  let a6 = Ie(Je), { basename: n2 } = Ie(we3), o7 = ze2(), i3 = Pn();
  Ls({
    getKey: e,
    storageKey: t
  });
  let l6 = be(() => {
    if (!a6 || !e) return null;
    let u6 = Mr(o7, i3, n2, e);
    return u6 !== o7.key ? u6 : null;
  }, []);
  if (!a6 || a6.isSpaMode) return null;
  let s3 = ((u6, c4) => {
    if (!window.history.state || !window.history.state.key) {
      let d4 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: d4
      }, "");
    }
    try {
      let h5 = JSON.parse(sessionStorage.getItem(u6) || "{}")[c4 || window.history.state.key];
      typeof h5 == "number" && window.scrollTo(0, h5);
    } catch (d4) {
      console.error(d4), sessionStorage.removeItem(u6);
    }
  }).toString();
  return Ce("script", {
    ...r4,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${s3})(${Pr(JSON.stringify(t || Tr))}, ${Pr(JSON.stringify(l6))})`
    }
  });
}
Es.displayName = "ScrollRestoration";
function ro(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ea(e) {
  let t = Ie(tt);
  return U2(t, ro(e)), t;
}
function bs(e) {
  let t = Ie(st);
  return U2(t, ro(e)), t;
}
function Ss(e, { target: t, replace: r4, state: a6, preventScrollReset: n2, relative: o7, viewTransition: i3, unstable_defaultShouldRevalidate: l6, unstable_useTransitions: s3 } = {}) {
  let u6 = Yi(), c4 = ze2(), d4 = Lt(e, {
    relative: o7
  });
  return He((h5) => {
    if (pl(h5, t)) {
      h5.preventDefault();
      let p5 = r4 !== void 0 ? r4 : Ie2(c4) === Ie2(d4), w8 = () => u6(e, {
        replace: p5,
        state: a6,
        preventScrollReset: n2,
        relative: o7,
        viewTransition: i3,
        unstable_defaultShouldRevalidate: l6
      });
      s3 ? ge(() => w8()) : w8();
    }
  }, [
    c4,
    u6,
    d4,
    r4,
    a6,
    t,
    e,
    n2,
    o7,
    i3,
    l6,
    s3
  ]);
}
var Cs = 0;
var xs = () => `__${String(++Cs)}__`;
function Ds() {
  let { router: e } = ea("useSubmit"), { basename: t } = Ie(we3), r4 = rl(), a6 = e.fetch, n2 = e.navigate;
  return He(async (o7, i3 = {}) => {
    let { action: l6, method: s3, encType: u6, formData: c4, body: d4 } = gl(o7, t);
    if (i3.navigate === false) {
      let h5 = i3.fetcherKey || xs();
      await a6(h5, r4, i3.action || l6, {
        unstable_defaultShouldRevalidate: i3.unstable_defaultShouldRevalidate,
        preventScrollReset: i3.preventScrollReset,
        formData: c4,
        body: d4,
        formMethod: i3.method || s3,
        formEncType: i3.encType || u6,
        flushSync: i3.flushSync
      });
    } else await n2(i3.action || l6, {
      unstable_defaultShouldRevalidate: i3.unstable_defaultShouldRevalidate,
      preventScrollReset: i3.preventScrollReset,
      formData: c4,
      body: d4,
      formMethod: i3.method || s3,
      formEncType: i3.encType || u6,
      replace: i3.replace,
      state: i3.state,
      fromRouteId: r4,
      flushSync: i3.flushSync,
      viewTransition: i3.viewTransition
    });
  }, [
    a6,
    n2,
    t,
    r4
  ]);
}
function Ps(e, { relative: t } = {}) {
  let { basename: r4 } = Ie(we3), a6 = Ie(Ue2);
  U2(a6, "useFormAction must be used inside a RouteContext");
  let [n2] = a6.matches.slice(-1), o7 = {
    ...Lt(e || ".", {
      relative: t
    })
  }, i3 = ze2();
  if (e == null) {
    o7.search = i3.search;
    let l6 = new URLSearchParams(o7.search), s3 = l6.getAll("index");
    if (s3.some((c4) => c4 === "")) {
      l6.delete("index"), s3.filter((d4) => d4).forEach((d4) => l6.append("index", d4));
      let c4 = l6.toString();
      o7.search = c4 ? `?${c4}` : "";
    }
  }
  return (!e || e === ".") && n2.route.index && (o7.search = o7.search ? o7.search.replace(/^\?/, "?index&") : "?index"), r4 !== "/" && (o7.pathname = o7.pathname === "/" ? r4 : Oe2([
    r4,
    o7.pathname
  ])), Ie2(o7);
}
var Tr = "react-router-scroll-positions";
var Wt = {};
function Mr(e, t, r4, a6) {
  let n2 = null;
  return a6 && (r4 !== "/" ? n2 = a6({
    ...e,
    pathname: ge2(e.pathname, r4) || e.pathname
  }, t) : n2 = a6(e, t)), n2 == null && (n2 = e.key), n2;
}
function Ls({ getKey: e, storageKey: t } = {}) {
  let { router: r4 } = ea("useScrollRestoration"), { restoreScrollPosition: a6, preventScrollReset: n2 } = bs("useScrollRestoration"), { basename: o7 } = Ie(we3), i3 = ze2(), l6 = Pn(), s3 = al();
  Le(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), _s(He(() => {
    if (s3.state === "idle") {
      let u6 = Mr(i3, l6, o7, e);
      Wt[u6] = window.scrollY;
    }
    try {
      sessionStorage.setItem(t || Tr, JSON.stringify(Wt));
    } catch (u6) {
      re2(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u6}).`);
    }
    window.history.scrollRestoration = "auto";
  }, [
    s3.state,
    e,
    o7,
    i3,
    l6,
    t
  ])), typeof document < "u" && (De(() => {
    try {
      let u6 = sessionStorage.getItem(t || Tr);
      u6 && (Wt = JSON.parse(u6));
    } catch {
    }
  }, [
    t
  ]), De(() => {
    let u6 = r4?.enableScrollRestoration(Wt, () => window.scrollY, e ? (c4, d4) => Mr(c4, d4, o7, e) : void 0);
    return () => u6 && u6();
  }, [
    r4,
    o7,
    e
  ]), De(() => {
    if (a6 !== false) {
      if (typeof a6 == "number") {
        window.scrollTo(0, a6);
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
        re2(false, `"${i3.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
      }
      n2 !== true && window.scrollTo(0, 0);
    }
  }, [
    i3,
    a6,
    n2
  ]));
}
function _s(e, t) {
  let { capture: r4 } = t || {};
  Le(() => {
    let a6 = r4 != null ? {
      capture: r4
    } : void 0;
    return window.addEventListener("pagehide", e, a6), () => {
      window.removeEventListener("pagehide", e, a6);
    };
  }, [
    e,
    r4
  ]);
}
function Ts(e, { relative: t } = {}) {
  let r4 = Ie(Nr);
  U2(r4 != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let { basename: a6 } = ea("useViewTransitionState"), n2 = Lt(e, {
    relative: t
  });
  if (!r4.isTransitioning) return false;
  let o7 = ge2(r4.currentLocation.pathname, a6) || r4.currentLocation.pathname, i3 = ge2(r4.nextLocation.pathname, a6) || r4.nextLocation.pathname;
  return Xt(n2.pathname, i3) != null || Xt(n2.pathname, o7) != null;
}
var Su = /* @__PURE__ */ new Set([
  ...Jr,
  304
]);
var Cu = new TextEncoder();
var lo = class extends Qe.Component {
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
    return this.state.error ? Qe.createElement(Ms, {
      error: this.state.error,
      renderAppShell: true
    }) : this.props.children;
  }
};
function no({ renderAppShell: e, title: t, children: r4 }) {
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
  }, r4))) : r4;
}
function Ms({ error: e, renderAppShell: t }) {
  console.error(e);
  let r4 = Qe.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
    }
  });
  if (Ne2(e)) return Qe.createElement(no, {
    renderAppShell: t,
    title: "Unhandled Thrown Response!"
  }, Qe.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, e.status, " ", e.statusText), Fe ? r4 : null);
  let a6;
  if (e instanceof Error) a6 = e;
  else {
    let n2 = e == null ? "Unknown Error" : typeof e == "object" && "toString" in e ? e.toString() : JSON.stringify(e);
    a6 = new Error(n2);
  }
  return Qe.createElement(no, {
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
  }, a6.stack), r4);
}
var Fs = "use";
var Du = react_19_1_exports[Fs];
var na = Xa();

// deno:https://esm.sh/node/async_hooks.mjs
var c = class {
  __unenv__ = true;
  _currentStore;
  _enterStore;
  _enabled = true;
  getStore() {
    return this._currentStore ?? this._enterStore;
  }
  disable() {
    this._enabled = false;
  }
  enable() {
    this._enabled = true;
  }
  enterWith(e) {
    this._enterStore = e;
  }
  run(e, r4, ...t) {
    this._currentStore = e;
    let n2 = r4(...t);
    return this._currentStore = void 0, n2;
  }
  exit(e, ...r4) {
    let t = this._currentStore;
    this._currentStore = void 0;
    let n2 = e(...r4);
    return this._currentStore = t, n2;
  }
  static snapshot() {
    throw new Error("[unenv] `AsyncLocalStorage.snapshot` is not implemented!");
  }
};
var S5 = globalThis.AsyncLocalStorage || c;
var R5 = Symbol("init");
var a2 = Symbol("before");
var o = Symbol("after");
var i2 = Symbol("destroy");
var A5 = Symbol("promiseResolve");
var T5 = class {
  __unenv__ = true;
  _enabled = false;
  _callbacks = {};
  constructor(e = {}) {
    this._callbacks = e;
  }
  enable() {
    return this._enabled = true, this;
  }
  disable() {
    return this._enabled = false, this;
  }
  get [R5]() {
    return this._callbacks.init;
  }
  get [a2]() {
    return this._callbacks.before;
  }
  get [o]() {
    return this._callbacks.after;
  }
  get [i2]() {
    return this._callbacks.destroy;
  }
  get [A5]() {
    return this._callbacks.promiseResolve;
  }
};
var s = function() {
  return 0;
};
var I5 = Object.assign(/* @__PURE__ */ Object.create(null), {
  NONE: 0,
  DIRHANDLE: 1,
  DNSCHANNEL: 2,
  ELDHISTOGRAM: 3,
  FILEHANDLE: 4,
  FILEHANDLECLOSEREQ: 5,
  BLOBREADER: 6,
  FSEVENTWRAP: 7,
  FSREQCALLBACK: 8,
  FSREQPROMISE: 9,
  GETADDRINFOREQWRAP: 10,
  GETNAMEINFOREQWRAP: 11,
  HEAPSNAPSHOT: 12,
  HTTP2SESSION: 13,
  HTTP2STREAM: 14,
  HTTP2PING: 15,
  HTTP2SETTINGS: 16,
  HTTPINCOMINGMESSAGE: 17,
  HTTPCLIENTREQUEST: 18,
  JSSTREAM: 19,
  JSUDPWRAP: 20,
  MESSAGEPORT: 21,
  PIPECONNECTWRAP: 22,
  PIPESERVERWRAP: 23,
  PIPEWRAP: 24,
  PROCESSWRAP: 25,
  PROMISE: 26,
  QUERYWRAP: 27,
  QUIC_ENDPOINT: 28,
  QUIC_LOGSTREAM: 29,
  QUIC_PACKET: 30,
  QUIC_SESSION: 31,
  QUIC_STREAM: 32,
  QUIC_UDP: 33,
  SHUTDOWNWRAP: 34,
  SIGNALWRAP: 35,
  STATWATCHER: 36,
  STREAMPIPE: 37,
  TCPCONNECTWRAP: 38,
  TCPSERVERWRAP: 39,
  TCPWRAP: 40,
  TTYWRAP: 41,
  UDPSENDWRAP: 42,
  UDPWRAP: 43,
  SIGINTWATCHDOG: 44,
  WORKER: 45,
  WORKERHEAPSNAPSHOT: 46,
  WRITEWRAP: 47,
  ZLIB: 48,
  CHECKPRIMEREQUEST: 49,
  PBKDF2REQUEST: 50,
  KEYPAIRGENREQUEST: 51,
  KEYGENREQUEST: 52,
  KEYEXPORTREQUEST: 53,
  CIPHERREQUEST: 54,
  DERIVEBITSREQUEST: 55,
  HASHREQUEST: 56,
  RANDOMBYTESREQUEST: 57,
  RANDOMPRIMEREQUEST: 58,
  SCRYPTREQUEST: 59,
  SIGNREQUEST: 60,
  TLSWRAP: 61,
  VERIFYREQUEST: 62
});
var _3 = 100;
var y4 = class {
  __unenv__ = true;
  type;
  _asyncId;
  _triggerAsyncId;
  constructor(e, r4 = s()) {
    this.type = e, this._asyncId = -1 * _3++, this._triggerAsyncId = typeof r4 == "number" ? r4 : r4?.triggerAsyncId;
  }
  static bind(e, r4, t) {
    return new E6(r4 ?? "anonymous").bind(e);
  }
  bind(e, r4) {
    let t = (...n2) => this.runInAsyncScope(e, r4, ...n2);
    return t.asyncResource = this, t;
  }
  runInAsyncScope(e, r4, ...t) {
    return e.apply(r4, t);
  }
  emitDestroy() {
    return this;
  }
  asyncId() {
    return this._asyncId;
  }
  triggerAsyncId() {
    return this._triggerAsyncId;
  }
};
var E6 = globalThis.AsyncResource || y4;

// deno:https://esm.sh/node/events.mjs
function te(e) {
  return new Error(`[unenv] ${e} is not implemented yet!`);
}
function w4(e) {
  return Object.assign(() => {
    throw te(e);
  }, {
    __unenv__: true
  });
}
var y5 = 10;
var ne = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
}).prototype);
var G6 = (e, t) => e;
var _4 = Error;
var ie2 = Error;
var v5 = Error;
var b4 = Error;
var se2 = Error;
var C4 = Symbol.for("nodejs.rejection");
var f2 = Symbol.for("kCapture");
var M3 = Symbol.for("events.errorMonitor");
var d3 = Symbol.for("shapeMode");
var x5 = Symbol.for("events.maxEventTargetListeners");
var oe2 = Symbol.for("kEnhanceStackBeforeInspector");
var ue2 = Symbol.for("nodejs.watermarkData");
var S6 = Symbol.for("kEventEmitter");
var h2 = Symbol.for("kAsyncResource");
var le2 = Symbol.for("kFirstEventParam");
var P = Symbol.for("kResistStopPropagation");
var W3 = Symbol.for("events.maxEventTargetListenersWarned");
var U3 = class E7 {
  _events = void 0;
  _eventsCount = 0;
  _maxListeners = y5;
  [f2] = false;
  [d3] = false;
  static captureRejectionSymbol = C4;
  static errorMonitor = M3;
  static kMaxEventTargetListeners = x5;
  static kMaxEventTargetListenersWarned = W3;
  static usingDomains = false;
  static get on() {
    return fe2;
  }
  static get once() {
    return he2;
  }
  static get getEventListeners() {
    return ve3;
  }
  static get getMaxListeners() {
    return me4;
  }
  static get addAbortListener() {
    return X3;
  }
  static get EventEmitterAsyncResource() {
    return ae3;
  }
  static get EventEmitter() {
    return E7;
  }
  static setMaxListeners(t = y5, ...r4) {
    if (r4.length === 0) y5 = t;
    else for (let n2 of r4) if (J3(n2)) n2[x5] = t, n2[W3] = false;
    else if (typeof n2.setMaxListeners == "function") n2.setMaxListeners(t);
    else throw new v5("eventTargets", [
      "EventEmitter",
      "EventTarget"
    ], n2);
  }
  static listenerCount(t, r4) {
    if (typeof t.listenerCount == "function") return t.listenerCount(r4);
    E7.prototype.listenerCount.call(t, r4);
  }
  static init() {
    throw new Error("EventEmitter.init() is not implemented.");
  }
  static get captureRejections() {
    return this[f2];
  }
  static set captureRejections(t) {
    this[f2] = t;
  }
  static get defaultMaxListeners() {
    return y5;
  }
  static set defaultMaxListeners(t) {
    y5 = t;
  }
  constructor(t) {
    this._events === void 0 || this._events === Object.getPrototypeOf(this)._events ? (this._events = {
      __proto__: null
    }, this._eventsCount = 0, this[d3] = false) : this[d3] = true, this._maxListeners = this._maxListeners || void 0, t?.captureRejections ? this[f2] = !!t.captureRejections : this[f2] = E7.prototype[f2];
  }
  setMaxListeners(t) {
    return this._maxListeners = t, this;
  }
  getMaxListeners() {
    return T6(this);
  }
  emit(t, ...r4) {
    let n2 = t === "error", i3 = this._events;
    if (i3 !== void 0) n2 && i3[M3] !== void 0 && this.emit(M3, ...r4), n2 = n2 && i3.error === void 0;
    else if (!n2) return false;
    if (n2) {
      let s3;
      if (r4.length > 0 && (s3 = r4[0]), s3 instanceof Error) {
        try {
          let c4 = {};
          Error.captureStackTrace?.(c4, E7.prototype.emit), Object.defineProperty(s3, oe2, {
            __proto__: null,
            value: Function.prototype.bind(de3, this, s3, c4),
            configurable: true
          });
        } catch {
        }
        throw s3;
      }
      let l6;
      try {
        l6 = G6(s3);
      } catch {
        l6 = s3;
      }
      let a6 = new ie2(l6);
      throw a6.context = s3, a6;
    }
    let o7 = i3[t];
    if (o7 === void 0) return false;
    if (typeof o7 == "function") {
      let s3 = o7.apply(this, r4);
      s3 != null && K5(this, s3, t, r4);
    } else {
      let s3 = o7.length, l6 = I6(o7);
      for (let a6 = 0; a6 < s3; ++a6) {
        let c4 = l6[a6].apply(this, r4);
        c4 != null && K5(this, c4, t, r4);
      }
    }
    return true;
  }
  addListener(t, r4) {
    return q5(this, t, r4, false), this;
  }
  on(t, r4) {
    return this.addListener(t, r4);
  }
  prependListener(t, r4) {
    return q5(this, t, r4, true), this;
  }
  once(t, r4) {
    return this.on(t, z6(this, t, r4)), this;
  }
  prependOnceListener(t, r4) {
    return this.prependListener(t, z6(this, t, r4)), this;
  }
  removeListener(t, r4) {
    let n2 = this._events;
    if (n2 === void 0) return this;
    let i3 = n2[t];
    if (i3 === void 0) return this;
    if (i3 === r4 || i3.listener === r4) this._eventsCount -= 1, this[d3] ? n2[t] = void 0 : this._eventsCount === 0 ? this._events = {
      __proto__: null
    } : (delete n2[t], n2.removeListener && this.emit("removeListener", t, i3.listener || r4));
    else if (typeof i3 != "function") {
      let o7 = -1;
      for (let s3 = i3.length - 1; s3 >= 0; s3--) if (i3[s3] === r4 || i3[s3].listener === r4) {
        o7 = s3;
        break;
      }
      if (o7 < 0) return this;
      o7 === 0 ? i3.shift() : ge3(i3, o7), i3.length === 1 && (n2[t] = i3[0]), n2.removeListener !== void 0 && this.emit("removeListener", t, r4);
    }
    return this;
  }
  off(t, r4) {
    return this.removeListener(t, r4);
  }
  removeAllListeners(t) {
    let r4 = this._events;
    if (r4 === void 0) return this;
    if (r4.removeListener === void 0) return arguments.length === 0 ? (this._events = {
      __proto__: null
    }, this._eventsCount = 0) : r4[t] !== void 0 && (--this._eventsCount === 0 ? this._events = {
      __proto__: null
    } : delete r4[t]), this[d3] = false, this;
    if (arguments.length === 0) {
      for (let i3 of Reflect.ownKeys(r4)) i3 !== "removeListener" && this.removeAllListeners(i3);
      return this.removeAllListeners("removeListener"), this._events = {
        __proto__: null
      }, this._eventsCount = 0, this[d3] = false, this;
    }
    let n2 = r4[t];
    if (typeof n2 == "function") this.removeListener(t, n2);
    else if (n2 !== void 0) for (let i3 = n2.length - 1; i3 >= 0; i3--) this.removeListener(t, n2[i3]);
    return this;
  }
  listeners(t) {
    return B5(this, t, true);
  }
  rawListeners(t) {
    return B5(this, t, false);
  }
  eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  }
  listenerCount(t, r4) {
    let n2 = this._events;
    if (n2 !== void 0) {
      let i3 = n2[t];
      if (typeof i3 == "function") return r4 != null ? r4 === i3 || r4 === i3.listener ? 1 : 0 : 1;
      if (i3 !== void 0) {
        if (r4 != null) {
          let o7 = 0;
          for (let s3 = 0, l6 = i3.length; s3 < l6; s3++) (i3[s3] === r4 || i3[s3].listener === r4) && o7++;
          return o7;
        }
        return i3.length;
      }
    }
    return 0;
  }
};
var ae3 = class extends U3 {
  constructor(e) {
    let t;
    typeof e == "string" ? (t = e, e = void 0) : t = e?.name || new.target.name, super(e), this[h2] = new ce3(this, t, e);
  }
  emit(e, ...t) {
    if (this[h2] === void 0) throw new _4("EventEmitterAsyncResource");
    let { asyncResource: r4 } = this;
    return Array.prototype.unshift(t, super.emit, this, e), Reflect.apply(r4.runInAsyncScope, r4, t);
  }
  emitDestroy() {
    if (this[h2] === void 0) throw new _4("EventEmitterAsyncResource");
    this.asyncResource.emitDestroy();
  }
  get asyncId() {
    if (this[h2] === void 0) throw new _4("EventEmitterAsyncResource");
    return this.asyncResource.asyncId();
  }
  get triggerAsyncId() {
    if (this[h2] === void 0) throw new _4("EventEmitterAsyncResource");
    return this.asyncResource.triggerAsyncId();
  }
  get asyncResource() {
    if (this[h2] === void 0) throw new _4("EventEmitterAsyncResource");
    return this[h2];
  }
};
var ce3 = class extends E6 {
  constructor(e, t, r4) {
    super(t, r4), this[S6] = e;
  }
  get eventEmitter() {
    if (this[S6] === void 0) throw new _4("EventEmitterReferencingAsyncResource");
    return this[S6];
  }
};
var fe2 = function(e, t, r4 = {}) {
  let n2 = r4.signal;
  if (n2?.aborted) throw new b4(void 0, {
    cause: n2?.reason
  });
  let i3 = r4.highWaterMark ?? r4.highWatermark ?? Number.MAX_SAFE_INTEGER, o7 = r4.lowWaterMark ?? r4.lowWatermark ?? 1, s3 = new N4(), l6 = new N4(), a6 = false, c4 = null, m6 = false, p5 = 0, Q5 = Object.setPrototypeOf({
    next() {
      if (p5) {
        let u6 = s3.shift();
        return p5--, a6 && p5 < o7 && (e.resume?.(), a6 = false), Promise.resolve(k6(u6, false));
      }
      if (c4) {
        let u6 = Promise.reject(c4);
        return c4 = null, u6;
      }
      return m6 ? L3() : new Promise(function(u6, ee3) {
        l6.push({
          resolve: u6,
          reject: ee3
        });
      });
    },
    return() {
      return L3();
    },
    throw(u6) {
      if (!u6 || !(u6 instanceof Error)) throw new v5("EventEmitter.AsyncIterator", "Error", u6);
      R7(u6);
    },
    [Symbol.asyncIterator]() {
      return this;
    },
    [ue2]: {
      get size() {
        return p5;
      },
      get low() {
        return o7;
      },
      get high() {
        return i3;
      },
      get isPaused() {
        return a6;
      }
    }
  }, ne), { addEventListener: A12, removeAll: V6 } = Ee2();
  A12(e, t, r4[le2] ? $4 : function(...u6) {
    return $4(u6);
  }), t !== "error" && typeof e.on == "function" && A12(e, "error", R7);
  let F6 = r4?.close;
  if (F6?.length) for (let u6 of F6) A12(e, u6, L3);
  let Y7 = n2 ? X3(n2, Z5) : null;
  return Q5;
  function Z5() {
    R7(new b4(void 0, {
      cause: n2?.reason
    }));
  }
  function $4(u6) {
    l6.isEmpty() ? (p5++, !a6 && p5 > i3 && (a6 = true, e.pause?.()), s3.push(u6)) : l6.shift().resolve(k6(u6, false));
  }
  function R7(u6) {
    l6.isEmpty() ? c4 = u6 : l6.shift().reject(u6), L3();
  }
  function L3() {
    Y7?.[Symbol.dispose](), V6(), m6 = true;
    let u6 = k6(void 0, true);
    for (; !l6.isEmpty(); ) l6.shift().resolve(u6);
    return Promise.resolve(u6);
  }
};
var he2 = async function(e, t, r4 = {}) {
  let n2 = r4?.signal;
  if (n2?.aborted) throw new b4(void 0, {
    cause: n2?.reason
  });
  return new Promise((i3, o7) => {
    let s3 = (m6) => {
      typeof e.removeListener == "function" && e.removeListener(t, l6), n2 != null && g3(n2, "abort", c4), o7(m6);
    }, l6 = (...m6) => {
      typeof e.removeListener == "function" && e.removeListener("error", s3), n2 != null && g3(n2, "abort", c4), i3(m6);
    }, a6 = {
      __proto__: null,
      once: true,
      [P]: true
    };
    O3(e, t, l6, a6), t !== "error" && typeof e.once == "function" && e.once("error", s3);
    function c4() {
      g3(e, t, l6), g3(e, "error", s3), o7(new b4(void 0, {
        cause: n2?.reason
      }));
    }
    n2 != null && O3(n2, "abort", c4, {
      __proto__: null,
      once: true,
      [P]: true
    });
  });
};
var X3 = function(e, t) {
  if (e === void 0) throw new v5("signal", "AbortSignal", e);
  let r4;
  return e.aborted ? queueMicrotask(() => t()) : (e.addEventListener("abort", t, {
    __proto__: null,
    once: true,
    [P]: true
  }), r4 = () => {
    e.removeEventListener("abort", t);
  }), {
    __proto__: null,
    [Symbol.dispose]() {
      r4?.();
    }
  };
};
var ve3 = function(e, t) {
  if (typeof e.listeners == "function") return e.listeners(t);
  if (J3(e)) {
    let r4 = e[kEvents].get(t), n2 = [], i3 = r4?.next;
    for (; i3?.listener !== void 0; ) {
      let o7 = i3.listener?.deref ? i3.listener.deref() : i3.listener;
      n2.push(o7), i3 = i3.next;
    }
    return n2;
  }
  throw new v5("emitter", [
    "EventEmitter",
    "EventTarget"
  ], e);
};
var me4 = function(e) {
  if (typeof e?.getMaxListeners == "function") return T6(e);
  if (e?.[x5]) return e[x5];
  throw new v5("emitter", [
    "EventEmitter",
    "EventTarget"
  ], e);
};
var H3 = 2048;
var j6 = H3 - 1;
var D5 = class {
  bottom;
  top;
  list;
  next;
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(H3), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & j6) === this.bottom;
  }
  push(e) {
    this.list[this.top] = e, this.top = this.top + 1 & j6;
  }
  shift() {
    let e = this.list[this.bottom];
    return e === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & j6, e);
  }
};
var N4 = class {
  head;
  tail;
  constructor() {
    this.head = this.tail = new D5();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e) {
    this.head.isFull() && (this.head = this.head.next = new D5()), this.head.push(e);
  }
  shift() {
    let e = this.tail, t = e.shift();
    return e.isEmpty() && e.next !== null && (this.tail = e.next, e.next = null), t;
  }
};
function J3(e) {
  return typeof e?.addEventListener == "function";
}
function K5(e, t, r4, n2) {
  if (e[f2]) try {
    let i3 = t.then;
    typeof i3 == "function" && i3.call(t, void 0, function(o7) {
      setTimeout(pe2, 0, e, o7, r4, n2);
    });
  } catch (i3) {
    e.emit("error", i3);
  }
}
function pe2(e, t, r4, n2) {
  if (typeof e[C4] == "function") e[C4](t, r4, ...n2);
  else {
    let i3 = e[f2];
    try {
      e[f2] = false, e.emit("error", t);
    } finally {
      e[f2] = i3;
    }
  }
}
function T6(e) {
  return e._maxListeners === void 0 ? y5 : e._maxListeners;
}
function de3(e, t) {
  let r4 = "";
  try {
    let { name: o7 } = this.constructor;
    o7 !== "EventEmitter" && (r4 = ` on ${o7} instance`);
  } catch {
  }
  let n2 = `
Emitted 'error' event${r4} at:
`, i3 = (t.stack || "").split(`
`).slice(1);
  return e.stack + n2 + i3.join(`
`);
}
function q5(e, t, r4, n2) {
  let i3, o7, s3;
  if (o7 = e._events, o7 === void 0 ? (o7 = e._events = {
    __proto__: null
  }, e._eventsCount = 0) : (o7.newListener !== void 0 && (e.emit("newListener", t, r4.listener ?? r4), o7 = e._events), s3 = o7[t]), s3 === void 0) o7[t] = r4, ++e._eventsCount;
  else if (typeof s3 == "function" ? s3 = o7[t] = n2 ? [
    r4,
    s3
  ] : [
    s3,
    r4
  ] : n2 ? s3.unshift(r4) : s3.push(r4), i3 = T6(e), i3 > 0 && s3.length > i3 && !s3.warned) {
    s3.warned = true;
    let l6 = new se2(`Possible EventEmitter memory leak detected. ${s3.length} ${String(t)} listeners added to ${G6(e, {
      depth: -1
    })}. MaxListeners is ${i3}. Use emitter.setMaxListeners() to increase limit`, {
      name: "MaxListenersExceededWarning",
      emitter: e,
      type: t,
      count: s3.length
    });
    console.warn(l6);
  }
  return e;
}
function ye3() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function z6(e, t, r4) {
  let n2 = {
    fired: false,
    wrapFn: void 0,
    target: e,
    type: t,
    listener: r4
  }, i3 = ye3.bind(n2);
  return i3.listener = r4, n2.wrapFn = i3, i3;
}
function B5(e, t, r4) {
  let n2 = e._events;
  if (n2 === void 0) return [];
  let i3 = n2[t];
  return i3 === void 0 ? [] : typeof i3 == "function" ? r4 ? [
    i3.listener || i3
  ] : [
    i3
  ] : r4 ? _e3(i3) : I6(i3);
}
function I6(e) {
  switch (e.length) {
    case 2:
      return [
        e[0],
        e[1]
      ];
    case 3:
      return [
        e[0],
        e[1],
        e[2]
      ];
    case 4:
      return [
        e[0],
        e[1],
        e[2],
        e[3]
      ];
    case 5:
      return [
        e[0],
        e[1],
        e[2],
        e[3],
        e[4]
      ];
    case 6:
      return [
        e[0],
        e[1],
        e[2],
        e[3],
        e[4],
        e[5]
      ];
  }
  return Array.prototype.slice.call(e);
}
function _e3(e) {
  let t = I6(e);
  for (let r4 = 0; r4 < t.length; ++r4) {
    let n2 = t[r4].listener;
    typeof n2 == "function" && (t[r4] = n2);
  }
  return t;
}
function k6(e, t) {
  return {
    value: e,
    done: t
  };
}
function g3(e, t, r4, n2) {
  if (typeof e.removeListener == "function") e.removeListener(t, r4);
  else if (typeof e.removeEventListener == "function") e.removeEventListener(t, r4, n2);
  else throw new v5("emitter", "EventEmitter", e);
}
function O3(e, t, r4, n2) {
  if (typeof e.on == "function") n2?.once ? e.once(t, r4) : e.on(t, r4);
  else if (typeof e.addEventListener == "function") e.addEventListener(t, r4, n2);
  else throw new v5("emitter", "EventEmitter", e);
}
function Ee2() {
  let e = [];
  return {
    addEventListener(t, r4, n2, i3) {
      O3(t, r4, n2, i3), Array.prototype.push(e, [
        t,
        r4,
        n2,
        i3
      ]);
    },
    removeAll() {
      for (; e.length > 0; ) Reflect.apply(g3, void 0, e.pop());
    }
  };
}
function ge3(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop();
}
var Me2 = Symbol.for("nodejs.rejection");
var je3 = Symbol.for("events.errorMonitor");
var Ce2 = w4("node:events.setMaxListeners");
var Pe3 = w4("node:events.listenerCount");
var Oe3 = w4("node:events.init");

// deno:https://esm.sh/node/tty.mjs
var o2 = class {
  fd;
  isRaw = false;
  isTTY = false;
  constructor(t) {
    this.fd = t;
  }
  setRawMode(t) {
    return this.isRaw = t, this;
  }
};
var s2 = class {
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(t) {
    this.fd = t;
  }
  clearLine(t, r4) {
    return r4 && r4(), false;
  }
  clearScreenDown(t) {
    return t && t(), false;
  }
  cursorTo(t, r4, e) {
    return e && typeof e == "function" && e(), false;
  }
  moveCursor(t, r4, e) {
    return e && e(), false;
  }
  getColorDepth(t) {
    return 1;
  }
  hasColors(t, r4) {
    return false;
  }
  getWindowSize() {
    return [
      this.columns,
      this.rows
    ];
  }
  write(t, r4, e) {
    t instanceof Uint8Array && (t = new TextDecoder().decode(t));
    try {
      console.log(t);
    } catch {
    }
    return e && typeof e == "function" && e(), false;
  }
};

// deno:https://esm.sh/node/process.mjs
function r(t) {
  return new Error(`[unenv] ${t} is not implemented yet!`);
}
function a3(t) {
  return Object.assign(() => {
    throw r(t);
  }, {
    __unenv__: true
  });
}
var v6 = "22.14.0";
var _5 = class m2 extends U3 {
  env;
  hrtime;
  nextTick;
  constructor(e) {
    super(), this.env = e.env, this.hrtime = e.hrtime, this.nextTick = e.nextTick;
    for (let s3 of [
      ...Object.getOwnPropertyNames(m2.prototype),
      ...Object.getOwnPropertyNames(U3.prototype)
    ]) {
      let i3 = this[s3];
      typeof i3 == "function" && (this[s3] = i3.bind(this));
    }
  }
  emitWarning(e, s3, i3) {
    console.warn(`${i3 ? `[${i3}] ` : ""}${s3 ? `${s3}: ` : ""}${e}`);
  }
  emit(...e) {
    return super.emit(...e);
  }
  listeners(e) {
    return super.listeners(e);
  }
  #t;
  #s;
  #r;
  get stdin() {
    return this.#t ??= new o2(0);
  }
  get stdout() {
    return this.#s ??= new s2(1);
  }
  get stderr() {
    return this.#r ??= new s2(2);
  }
  #e = "/";
  chdir(e) {
    this.#e = e;
  }
  cwd() {
    return this.#e;
  }
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${v6}`;
  }
  get versions() {
    return {
      node: v6
    };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  ref() {
  }
  unref() {
  }
  umask() {
    throw r("process.umask");
  }
  getBuiltinModule() {
  }
  getActiveResourcesInfo() {
    throw r("process.getActiveResourcesInfo");
  }
  exit() {
    throw r("process.exit");
  }
  reallyExit() {
    throw r("process.reallyExit");
  }
  kill() {
    throw r("process.kill");
  }
  abort() {
    throw r("process.abort");
  }
  dlopen() {
    throw r("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw r("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw r("process.loadEnvFile");
  }
  disconnect() {
    throw r("process.disconnect");
  }
  cpuUsage() {
    throw r("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw r("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw r("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw r("process.initgroups");
  }
  openStdin() {
    throw r("process.openStdin");
  }
  assert() {
    throw r("process.assert");
  }
  binding() {
    throw r("process.binding");
  }
  permission = {
    has: a3("process.permission.has")
  };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: a3("process.report.getReport"),
    writeReport: a3("process.report.writeReport")
  };
  finalization = {
    register: a3("process.finalization.register"),
    unregister: a3("process.finalization.unregister"),
    registerBeforeExit: a3("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), {
    rss: () => 0
  });
  mainModule = void 0;
  domain = void 0;
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};
var u2 = /* @__PURE__ */ Object.create(null);
var b5 = globalThis.process;
var o3 = (t) => globalThis.__env__ || b5?.env || (t ? u2 : globalThis);
var x6 = new Proxy(u2, {
  get(t, e) {
    return o3()[e] ?? u2[e];
  },
  has(t, e) {
    let s3 = o3();
    return e in s3 || e in u2;
  },
  set(t, e, s3) {
    let i3 = o3(true);
    return i3[e] = s3, true;
  },
  deleteProperty(t, e) {
    let s3 = o3(true);
    return delete s3[e], true;
  },
  ownKeys() {
    let t = o3();
    return Object.keys(t);
  },
  getOwnPropertyDescriptor(t, e) {
    let s3 = o3();
    if (e in s3) return {
      value: s3[e],
      writable: true,
      enumerable: true,
      configurable: true
    };
  }
});
var w5 = Object.assign(function(t) {
  let e = Date.now(), s3 = Math.trunc(e / 1e3), i3 = e % 1e3 * 1e6;
  if (t) {
    let d4 = s3 - t[0], n2 = i3 - t[0];
    return n2 < 0 && (d4 = d4 - 1, n2 = 1e9 + n2), [
      d4,
      n2
    ];
  }
  return [
    s3,
    i3
  ];
}, {
  bigint: function() {
    return BigInt(Date.now() * 1e6);
  }
});
var E8 = globalThis.queueMicrotask ? (t, ...e) => {
  globalThis.queueMicrotask(t.bind(void 0, ...e));
} : k7();
function k7() {
  let t = [], e = false, s3, i3 = -1;
  function d4() {
    !e || !s3 || (e = false, s3.length > 0 ? t = [
      ...s3,
      ...t
    ] : i3 = -1, t.length > 0 && n2());
  }
  function n2() {
    if (e) return;
    let c4 = setTimeout(d4);
    e = true;
    let l6 = t.length;
    for (; l6; ) {
      for (s3 = t, t = []; ++i3 < l6; ) s3 && s3[i3]();
      i3 = -1, l6 = t.length;
    }
    s3 = void 0, e = false, clearTimeout(c4);
  }
  return (c4, ...l6) => {
    t.push(c4.bind(void 0, ...l6)), t.length === 1 && !e && setTimeout(n2);
  };
}
var h3 = new _5({
  env: x6,
  hrtime: w5,
  nextTick: E8
});
var A6 = h3;
var { abort: O4, addListener: T7, allowedNodeEnvironmentFlags: S7, hasUncaughtExceptionCaptureCallback: N5, setUncaughtExceptionCaptureCallback: R6, loadEnvFile: I7, sourceMapsEnabled: B6, arch: j7, argv: D6, argv0: F4, chdir: $2, config: z7, connected: q6, constrainedMemory: W4, availableMemory: H4, cpuUsage: Q2, cwd: G7, debugPort: K6, dlopen: J4, disconnect: V4, emit: X4, emitWarning: Y5, env: Z2, eventNames: ee, execArgv: te2, execPath: se3, exit: re3, finalization: ie3, features: ne2, getBuiltinModule: ae4, getActiveResourcesInfo: oe3, getMaxListeners: de4, hrtime: le3, kill: ue3, listeners: ce4, listenerCount: ge4, memoryUsage: pe3, nextTick: ve4, on: me5, off: he3, once: fe3, pid: _e4, platform: be3, ppid: xe2, prependListener: we4, prependOnceListener: Ee3, rawListeners: ke3, release: ye4, removeAllListeners: Me3, removeListener: Ce3, report: Le2, resourceUsage: Pe4, setMaxListeners: Ue3, setSourceMapsEnabled: Ae2, stderr: Oe4, stdin: Te3, stdout: Se3, title: Ne3, umask: Re2, uptime: Ie3, version: Be2, versions: je4, domain: De2, initgroups: Fe2, moduleLoadList: $e2, reallyExit: ze3, openStdin: qe2, assert: We2, binding: He2, send: Qe2, exitCode: Ge3, channel: Ke2, getegid: Je2, geteuid: Ve, getgid: Xe2, getgroups: Ye3, getuid: Ze, setegid: et, seteuid: tt2, setgid: st2, setgroups: rt, setuid: it, permission: nt, mainModule: at, ref: ot, unref: dt, _events: lt, _eventsCount: ut, _exiting: ct, _maxListeners: gt2, _debugEnd: pt, _debugProcess: vt, _fatalException: mt, _getActiveHandles: ht, _getActiveRequests: ft, _kill: _t, _preload_modules: bt, _rawDebug: xt2, _startProfilerIdleNotifier: wt, _stopProfilerIdleNotifier: Et, _tickCallback: kt, _disconnect: yt2, _handleQueue: Mt, _pendingMessage: Ct, _channel: Lt2, _send: Pt2, _linkedBinding: Ut2 } = h3;

// deno:https://esm.sh/react-router@7.13.0/X-ZXJlYWN0/es2022/react-router.mjs
var oo = ((e) => (e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE", e))(oo || {});
var Dn2 = "popstate";
function wa(e = {}) {
  function t(n2, o7) {
    let { pathname: i3 = "/", search: l6 = "", hash: s3 = "" } = Le3(n2.location.hash.substring(1));
    return !i3.startsWith("/") && !i3.startsWith(".") && (i3 = "/" + i3), Qe3("", {
      pathname: i3,
      search: l6,
      hash: s3
    }, o7.state && o7.state.usr || null, o7.state && o7.state.key || "default");
  }
  function r4(n2, o7) {
    let i3 = n2.document.querySelector("base"), l6 = "";
    if (i3 && i3.getAttribute("href")) {
      let s3 = n2.location.href, u6 = s3.indexOf("#");
      l6 = u6 === -1 ? s3 : s3.slice(0, u6);
    }
    return l6 + "#" + (typeof o7 == "string" ? o7 : he4(o7));
  }
  function a6(n2, o7) {
    te3(n2.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(o7)})`);
  }
  return io(t, r4, a6, e);
}
function I8(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
function te3(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Il() {
  return Math.random().toString(36).substring(2, 10);
}
function Ln2(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Qe3(e, t, r4 = null, a6) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? Le3(t) : t,
    state: r4,
    key: t && t.key || a6 || Il()
  };
}
function he4({ pathname: e = "/", search: t = "", hash: r4 = "" }) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r4 && r4 !== "#" && (e += r4.charAt(0) === "#" ? r4 : "#" + r4), e;
}
function Le3(e) {
  let t = {};
  if (e) {
    let r4 = e.indexOf("#");
    r4 >= 0 && (t.hash = e.substring(r4), e = e.substring(0, r4));
    let a6 = e.indexOf("?");
    a6 >= 0 && (t.search = e.substring(a6), e = e.substring(0, a6)), e && (t.pathname = e);
  }
  return t;
}
function io(e, t, r4, a6 = {}) {
  let { window: n2 = document.defaultView, v5Compat: o7 = false } = a6, i3 = n2.history, l6 = "POP", s3 = null, u6 = d4();
  u6 == null && (u6 = 0, i3.replaceState({
    ...i3.state,
    idx: u6
  }, ""));
  function d4() {
    return (i3.state || {
      idx: null
    }).idx;
  }
  function c4() {
    l6 = "POP";
    let p5 = d4(), b10 = p5 == null ? null : p5 - u6;
    u6 = p5, s3 && s3({
      action: l6,
      location: R7.location,
      delta: b10
    });
  }
  function h5(p5, b10) {
    l6 = "PUSH";
    let g8 = Qe3(R7.location, p5, b10);
    r4 && r4(g8, p5), u6 = d4() + 1;
    let S10 = Ln2(g8, u6), P5 = R7.createHref(g8);
    try {
      i3.pushState(S10, "", P5);
    } catch (x9) {
      if (x9 instanceof DOMException && x9.name === "DataCloneError") throw x9;
      n2.location.assign(P5);
    }
    o7 && s3 && s3({
      action: l6,
      location: R7.location,
      delta: 1
    });
  }
  function f4(p5, b10) {
    l6 = "REPLACE";
    let g8 = Qe3(R7.location, p5, b10);
    r4 && r4(g8, p5), u6 = d4();
    let S10 = Ln2(g8, u6), P5 = R7.createHref(g8);
    i3.replaceState(S10, "", P5), o7 && s3 && s3({
      action: l6,
      location: R7.location,
      delta: 0
    });
  }
  function m6(p5) {
    return lo2(p5);
  }
  let R7 = {
    get action() {
      return l6;
    },
    get location() {
      return e(n2, i3);
    },
    listen(p5) {
      if (s3) throw new Error("A history only accepts one active listener");
      return n2.addEventListener(Dn2, c4), s3 = p5, () => {
        n2.removeEventListener(Dn2, c4), s3 = null;
      };
    },
    createHref(p5) {
      return t(n2, p5);
    },
    createURL: m6,
    encodeLocation(p5) {
      let b10 = m6(p5);
      return {
        pathname: b10.pathname,
        search: b10.search,
        hash: b10.hash
      };
    },
    push: h5,
    replace: f4,
    go(p5) {
      return i3.go(p5);
    }
  };
  return R7;
}
function lo2(e, t = false) {
  let r4 = "http://localhost";
  typeof window < "u" && (r4 = window.location.origin !== "null" ? window.location.origin : window.location.href), I8(r4, "No window.location.(origin|href) available to create URL");
  let a6 = typeof e == "string" ? e : he4(e);
  return a6 = a6.replace(/ $/, "%20"), !t && a6.startsWith("//") && (a6 = r4 + a6), new URL(a6, r4);
}
var Yt2;
Yt2 = /* @__PURE__ */ new WeakMap();
function Ee4(e, t, r4 = "/") {
  return Jt2(e, t, r4, false);
}
function Jt2(e, t, r4, a6) {
  let n2 = typeof t == "string" ? Le3(t) : t, o7 = ie4(n2.pathname || "/", r4);
  if (o7 == null) return null;
  let i3 = uo(e);
  Yl(i3);
  let l6 = null;
  for (let s3 = 0; l6 == null && s3 < i3.length; ++s3) {
    let u6 = ho(o7);
    l6 = ts(i3[s3], u6, a6);
  }
  return l6;
}
function so(e, t) {
  let { route: r4, pathname: a6, params: n2 } = e;
  return {
    id: r4.id,
    pathname: a6,
    params: n2,
    data: t[r4.id],
    loaderData: t[r4.id],
    handle: r4.handle
  };
}
function uo(e, t = [], r4 = [], a6 = "", n2 = false) {
  let o7 = (i3, l6, s3 = n2, u6) => {
    let d4 = {
      relativePath: u6 === void 0 ? i3.path || "" : u6,
      caseSensitive: i3.caseSensitive === true,
      childrenIndex: l6,
      route: i3
    };
    if (d4.relativePath.startsWith("/")) {
      if (!d4.relativePath.startsWith(a6) && s3) return;
      I8(d4.relativePath.startsWith(a6), `Absolute route path "${d4.relativePath}" nested under path "${a6}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), d4.relativePath = d4.relativePath.slice(a6.length);
    }
    let c4 = je5([
      a6,
      d4.relativePath
    ]), h5 = r4.concat(d4);
    i3.children && i3.children.length > 0 && (I8(i3.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${c4}".`), uo(i3.children, t, h5, c4, s3)), !(i3.path == null && !i3.index) && t.push({
      path: c4,
      score: Zl(c4, i3.index),
      routesMeta: h5
    });
  };
  return e.forEach((i3, l6) => {
    if (i3.path === "" || !i3.path?.includes("?")) o7(i3, l6);
    else for (let s3 of co(i3.path)) o7(i3, l6, true, s3);
  }), t;
}
function co(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r4, ...a6] = t, n2 = r4.endsWith("?"), o7 = r4.replace(/\?$/, "");
  if (a6.length === 0) return n2 ? [
    o7,
    ""
  ] : [
    o7
  ];
  let i3 = co(a6.join("/")), l6 = [];
  return l6.push(...i3.map((s3) => s3 === "" ? o7 : [
    o7,
    s3
  ].join("/"))), n2 && l6.push(...i3), l6.map((s3) => e.startsWith("/") && s3 === "" ? "/" : s3);
}
function Yl(e) {
  e.sort((t, r4) => t.score !== r4.score ? r4.score - t.score : es(t.routesMeta.map((a6) => a6.childrenIndex), r4.routesMeta.map((a6) => a6.childrenIndex)));
}
var Jl = /^:[\w-]+$/;
var Gl2 = 3;
var Kl2 = 2;
var Xl2 = 1;
var Ql2 = 10;
var ql2 = -2;
var _n = (e) => e === "*";
function Zl(e, t) {
  let r4 = e.split("/"), a6 = r4.length;
  return r4.some(_n) && (a6 += ql2), t && (a6 += Kl2), r4.filter((n2) => !_n(n2)).reduce((n2, o7) => n2 + (Jl.test(o7) ? Gl2 : o7 === "" ? Xl2 : Ql2), a6);
}
function es(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a6, n2) => a6 === t[n2]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ts(e, t, r4 = false) {
  let { routesMeta: a6 } = e, n2 = {}, o7 = "/", i3 = [];
  for (let l6 = 0; l6 < a6.length; ++l6) {
    let s3 = a6[l6], u6 = l6 === a6.length - 1, d4 = o7 === "/" ? t : t.slice(o7.length) || "/", c4 = Dt2({
      path: s3.relativePath,
      caseSensitive: s3.caseSensitive,
      end: u6
    }, d4), h5 = s3.route;
    if (!c4 && u6 && r4 && !a6[a6.length - 1].route.index && (c4 = Dt2({
      path: s3.relativePath,
      caseSensitive: s3.caseSensitive,
      end: false
    }, d4)), !c4) return null;
    Object.assign(n2, c4.params), i3.push({
      params: n2,
      pathname: je5([
        o7,
        c4.pathname
      ]),
      pathnameBase: ns(je5([
        o7,
        c4.pathnameBase
      ])),
      route: h5
    }), c4.pathnameBase !== "/" && (o7 = je5([
      o7,
      c4.pathnameBase
    ]));
  }
  return i3;
}
function Dt2(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: false,
    end: true
  });
  let [r4, a6] = fo(e.path, e.caseSensitive, e.end), n2 = t.match(r4);
  if (!n2) return null;
  let o7 = n2[0], i3 = o7.replace(/(.)\/+$/, "$1"), l6 = n2.slice(1);
  return {
    params: a6.reduce((u6, { paramName: d4, isOptional: c4 }, h5) => {
      if (d4 === "*") {
        let m6 = l6[h5] || "";
        i3 = o7.slice(0, o7.length - m6.length).replace(/(.)\/+$/, "$1");
      }
      let f4 = l6[h5];
      return c4 && !f4 ? u6[d4] = void 0 : u6[d4] = (f4 || "").replace(/%2F/g, "/"), u6;
    }, {}),
    pathname: o7,
    pathnameBase: i3,
    pattern: e
  };
}
function fo(e, t = false, r4 = true) {
  te3(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
  let a6 = [], n2 = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i3, l6, s3) => (a6.push({
    paramName: l6,
    isOptional: s3 != null
  }), s3 ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (a6.push({
    paramName: "*"
  }), n2 += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r4 ? n2 += "\\/*$" : e !== "" && e !== "/" && (n2 += "(?:(?=\\/|$))"), [
    new RegExp(n2, t ? void 0 : "i"),
    a6
  ];
}
function ho(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return te3(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
  }
}
function ie4(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r4 = t.endsWith("/") ? t.length - 1 : t.length, a6 = e.charAt(r4);
  return a6 && a6 !== "/" ? null : e.slice(r4) || "/";
}
var mo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function po(e, t = "/") {
  let { pathname: r4, search: a6 = "", hash: n2 = "" } = typeof e == "string" ? Le3(e) : e, o7;
  return r4 ? (r4 = r4.replace(/\/\/+/g, "/"), r4.startsWith("/") ? o7 = Fn(r4.substring(1), "/") : o7 = Fn(r4, t)) : o7 = t, {
    pathname: o7,
    search: os(a6),
    hash: is(n2)
  };
}
function Fn(e, t) {
  let r4 = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n2) => {
    n2 === ".." ? r4.length > 1 && r4.pop() : n2 !== "." && r4.push(n2);
  }), r4.length > 1 ? r4.join("/") : "/";
}
function Qr(e, t, r4, a6) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a6)}].  Please separate it out to the \`to.${r4}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function yo(e) {
  return e.filter((t, r4) => r4 === 0 || t.route.path && t.route.path.length > 0);
}
function Er(e) {
  let t = yo(e);
  return t.map((r4, a6) => a6 === t.length - 1 ? r4.pathname : r4.pathnameBase);
}
function Sr(e, t, r4, a6 = false) {
  let n2;
  typeof e == "string" ? n2 = Le3(e) : (n2 = {
    ...e
  }, I8(!n2.pathname || !n2.pathname.includes("?"), Qr("?", "pathname", "search", n2)), I8(!n2.pathname || !n2.pathname.includes("#"), Qr("#", "pathname", "hash", n2)), I8(!n2.search || !n2.search.includes("#"), Qr("#", "search", "hash", n2)));
  let o7 = e === "" || n2.pathname === "", i3 = o7 ? "/" : n2.pathname, l6;
  if (i3 == null) l6 = r4;
  else {
    let c4 = t.length - 1;
    if (!a6 && i3.startsWith("..")) {
      let h5 = i3.split("/");
      for (; h5[0] === ".."; ) h5.shift(), c4 -= 1;
      n2.pathname = h5.join("/");
    }
    l6 = c4 >= 0 ? t[c4] : "/";
  }
  let s3 = po(n2, l6), u6 = i3 && i3 !== "/" && i3.endsWith("/"), d4 = (o7 || i3 === ".") && r4.endsWith("/");
  return !s3.pathname.endsWith("/") && (u6 || d4) && (s3.pathname += "/"), s3;
}
var je5 = (e) => e.join("/").replace(/\/\/+/g, "/");
var ns = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
var os = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
var is = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
var me6 = class {
  constructor(e, t, r4, a6 = false) {
    this.status = e, this.statusText = t || "", this.internal = a6, r4 instanceof Error ? (this.data = r4.toString(), this.error = r4) : this.data = r4;
  }
};
function ne3(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Ke3(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var go = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function vo(e, t) {
  let r4 = e;
  if (typeof r4 != "string" || !mo.test(r4)) return {
    absoluteURL: void 0,
    isExternal: false,
    to: r4
  };
  let a6 = r4, n2 = false;
  if (go) try {
    let o7 = new URL(window.location.href), i3 = r4.startsWith("//") ? new URL(o7.protocol + r4) : new URL(r4), l6 = ie4(i3.pathname, t);
    i3.origin === o7.origin && l6 != null ? r4 = l6 + i3.search + i3.hash : n2 = true;
  } catch {
    te3(false, `<Link to="${r4}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  return {
    absoluteURL: a6,
    isExternal: n2,
    to: r4
  };
}
var it2 = Symbol("Uninstrumented");
var us2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Po = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var ds2 = new Set(Po);
var fs2 = [
  "GET",
  ...Po
];
var hs2 = new Set(fs2);
var To = Symbol("ResetLoaderData");
var We3 = de(null);
We3.displayName = "DataRouter";
var et2 = de(null);
et2.displayName = "DataRouterState";
var Pr2 = de(false);
var er = de({
  isTransitioning: false
});
er.displayName = "ViewTransition";
var tr = de(/* @__PURE__ */ new Map());
tr.displayName = "Fetchers";
var Tt = de(null);
Tt.displayName = "Await";
var ge5 = de(null);
ge5.displayName = "Navigation";
var gt3 = de(null);
gt3.displayName = "Location";
var Pe5 = de({
  outlet: null,
  matches: [],
  isDataRoute: false
});
Pe5.displayName = "Route";
var Ta = de(null);
Ta.displayName = "RouteError";
var ze4 = true;
var Vo2 = "REACT_ROUTER_ERROR";
var Ts2 = "REDIRECT";
var _s2 = "ROUTE_ERROR_RESPONSE";
function xr(e) {
  if (e.startsWith(`${Vo2}:${Ts2}:{`)) try {
    let t = JSON.parse(e.slice(28));
    if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
  } catch {
  }
}
function Dr(e) {
  if (e.startsWith(`${Vo2}:${_s2}:{`)) try {
    let t = JSON.parse(e.slice(40));
    if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new me6(t.status, t.statusText, t.data);
  } catch {
  }
}
function Yo2(e, { relative: t } = {}) {
  I8(ut2(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r4, navigator: a6 } = Ie(ge5), { hash: n2, pathname: o7, search: i3 } = Ot(e, {
    relative: t
  }), l6 = o7;
  return r4 !== "/" && (l6 = o7 === "/" ? r4 : je5([
    r4,
    o7
  ])), a6.createHref({
    pathname: l6,
    search: i3,
    hash: n2
  });
}
function ut2() {
  return Ie(gt3) != null;
}
function xe3() {
  return I8(ut2(), "useLocation() may be used only in the context of a <Router> component."), Ie(gt3).location;
}
var Jo2 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Go2(e) {
  Ie(ge5).static || De(e);
}
function Lr() {
  let { isDataRoute: e } = Ie(Pe5);
  return e ? Vs2() : Ms2();
}
function Ms2() {
  I8(ut2(), "useNavigate() may be used only in the context of a <Router> component.");
  let e = Ie(We3), { basename: t, navigator: r4 } = Ie(ge5), { matches: a6 } = Ie(Pe5), { pathname: n2 } = xe3(), o7 = JSON.stringify(Er(a6)), i3 = ze(false);
  return Go2(() => {
    i3.current = true;
  }), He((s3, u6 = {}) => {
    if (te3(i3.current, Jo2), !i3.current) return;
    if (typeof s3 == "number") {
      r4.go(s3);
      return;
    }
    let d4 = Sr(s3, JSON.parse(o7), n2, u6.relative === "path");
    e == null && t !== "/" && (d4.pathname = d4.pathname === "/" ? t : je5([
      t,
      d4.pathname
    ])), (u6.replace ? r4.replace : r4.push)(d4, u6.state, u6);
  }, [
    t,
    r4,
    o7,
    n2,
    e
  ]);
}
var Ko2 = de(null);
function Tr2() {
  let { matches: e } = Ie(Pe5), t = e[e.length - 1];
  return t ? t.params : {};
}
function Ot(e, { relative: t } = {}) {
  let { matches: r4 } = Ie(Pe5), { pathname: a6 } = xe3(), n2 = JSON.stringify(Er(r4));
  return be(() => Sr(e, JSON.parse(n2), a6, t === "path"), [
    e,
    n2,
    a6,
    t
  ]);
}
function Qo2(e, t) {
  return _a(e, t);
}
function _a(e, t, r4, a6, n2) {
  I8(ut2(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: o7 } = Ie(ge5), { matches: i3 } = Ie(Pe5), l6 = i3[i3.length - 1], s3 = l6 ? l6.params : {}, u6 = l6 ? l6.pathname : "/", d4 = l6 ? l6.pathnameBase : "/", c4 = l6 && l6.route;
  if (ze4) {
    let g8 = c4 && c4.path || "";
    ai2(u6, !c4 || g8.endsWith("*") || g8.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u6}" (under <Route path="${g8}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g8}"> to <Route path="${g8 === "/" ? "*" : `${g8}/*`}">.`);
  }
  let h5 = xe3(), f4;
  if (t) {
    let g8 = typeof t == "string" ? Le3(t) : t;
    I8(d4 === "/" || g8.pathname?.startsWith(d4), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d4}" but pathname "${g8.pathname}" was given in the \`location\` prop.`), f4 = g8;
  } else f4 = h5;
  let m6 = f4.pathname || "/", R7 = m6;
  if (d4 !== "/") {
    let g8 = d4.replace(/^\//, "").split("/");
    R7 = "/" + m6.replace(/^\//, "").split("/").slice(g8.length).join("/");
  }
  let p5 = Ee4(e, {
    pathname: R7
  });
  ze4 && (te3(c4 || p5 != null, `No routes matched location "${f4.pathname}${f4.search}${f4.hash}" `), te3(p5 == null || p5[p5.length - 1].route.element !== void 0 || p5[p5.length - 1].route.Component !== void 0 || p5[p5.length - 1].route.lazy !== void 0, `Matched leaf route at location "${f4.pathname}${f4.search}${f4.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));
  let b10 = Zo2(p5 && p5.map((g8) => Object.assign({}, g8, {
    params: Object.assign({}, s3, g8.params),
    pathname: je5([
      d4,
      o7.encodeLocation ? o7.encodeLocation(g8.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g8.pathname
    ]),
    pathnameBase: g8.pathnameBase === "/" ? d4 : je5([
      d4,
      o7.encodeLocation ? o7.encodeLocation(g8.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g8.pathnameBase
    ])
  })), i3, r4, a6, n2);
  return t && b10 ? Ce(gt3.Provider, {
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
  }, b10) : b10;
}
function Ns() {
  let e = kt2(), t = ne3(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r4 = e instanceof Error ? e.stack : null, a6 = "rgba(200,200,200, 0.5)", n2 = {
    padding: "0.5rem",
    backgroundColor: a6
  }, o7 = {
    padding: "2px 4px",
    backgroundColor: a6
  }, i3 = null;
  return ze4 && (console.error("Error handled by React Router default ErrorBoundary:", e), i3 = Ce(ae, null, Ce("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), Ce("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", Ce("code", {
    style: o7
  }, "ErrorBoundary"), " or", " ", Ce("code", {
    style: o7
  }, "errorElement"), " prop on your route."))), Ce(ae, null, Ce("h2", null, "Unexpected Application Error!"), Ce("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r4 ? Ce("pre", {
    style: n2
  }, r4) : null, i3);
}
var As = Ce(Ns, null);
var qo2 = class extends pe {
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
    this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      let r4 = Dr(e.digest);
      r4 && (e = r4);
    }
    let t = e !== void 0 ? Ce(Pe5.Provider, {
      value: this.props.routeContext
    }, Ce(Ta.Provider, {
      value: e,
      children: this.props.component
    })) : this.props.children;
    return this.context ? Ce(Hs, {
      error: e
    }, t) : t;
  }
};
qo2.contextType = Pr2;
var Zr = /* @__PURE__ */ new WeakMap();
function Hs({ children: e, error: t }) {
  let { basename: r4 } = Ie(ge5);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let a6 = xr(t.digest);
    if (a6) {
      let n2 = Zr.get(t);
      if (n2) throw n2;
      let o7 = vo(a6.location, r4);
      if (go && !Zr.get(t)) if (o7.isExternal || a6.reloadDocument) window.location.href = o7.absoluteURL || o7.to;
      else {
        let i3 = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(o7.to, {
          replace: a6.replace
        }));
        throw Zr.set(t, i3), i3;
      }
      return Ce("meta", {
        httpEquiv: "refresh",
        content: `0;url=${o7.absoluteURL || o7.to}`
      });
    }
  }
  return e;
}
function $s({ routeContext: e, match: t, children: r4 }) {
  let a6 = Ie(We3);
  return a6 && a6.static && a6.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a6.staticContext._deepestRenderedBoundaryId = t.route.id), Ce(Pe5.Provider, {
    value: e
  }, r4);
}
function Zo2(e, t = [], r4 = null, a6 = null, n2 = null) {
  if (e == null) {
    if (!r4) return null;
    if (r4.errors) e = r4.matches;
    else if (t.length === 0 && !r4.initialized && r4.matches.length > 0) e = r4.matches;
    else return null;
  }
  let o7 = e, i3 = r4?.errors;
  if (i3 != null) {
    let d4 = o7.findIndex((c4) => c4.route.id && i3?.[c4.route.id] !== void 0);
    I8(d4 >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i3).join(",")}`), o7 = o7.slice(0, Math.min(o7.length, d4 + 1));
  }
  let l6 = false, s3 = -1;
  if (r4) for (let d4 = 0; d4 < o7.length; d4++) {
    let c4 = o7[d4];
    if ((c4.route.HydrateFallback || c4.route.hydrateFallbackElement) && (s3 = d4), c4.route.id) {
      let { loaderData: h5, errors: f4 } = r4, m6 = c4.route.loader && !h5.hasOwnProperty(c4.route.id) && (!f4 || f4[c4.route.id] === void 0);
      if (c4.route.lazy || m6) {
        l6 = true, s3 >= 0 ? o7 = o7.slice(0, s3 + 1) : o7 = [
          o7[0]
        ];
        break;
      }
    }
  }
  let u6 = r4 && a6 ? (d4, c4) => {
    a6(d4, {
      location: r4.location,
      params: r4.matches?.[0]?.params ?? {},
      unstable_pattern: Ke3(r4.matches),
      errorInfo: c4
    });
  } : void 0;
  return o7.reduceRight((d4, c4, h5) => {
    let f4, m6 = false, R7 = null, p5 = null;
    r4 && (f4 = i3 && c4.route.id ? i3[c4.route.id] : void 0, R7 = c4.route.errorElement || As, l6 && (s3 < 0 && h5 === 0 ? (ai2("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), m6 = true, p5 = null) : s3 === h5 && (m6 = true, p5 = c4.route.hydrateFallbackElement || null)));
    let b10 = t.concat(o7.slice(0, h5 + 1)), g8 = () => {
      let S10;
      return f4 ? S10 = R7 : m6 ? S10 = p5 : c4.route.Component ? S10 = Ce(c4.route.Component, null) : c4.route.element ? S10 = c4.route.element : S10 = d4, Ce($s, {
        match: c4,
        routeContext: {
          outlet: d4,
          matches: b10,
          isDataRoute: r4 != null
        },
        children: S10
      });
    };
    return r4 && (c4.route.ErrorBoundary || c4.route.errorElement || h5 === 0) ? Ce(qo2, {
      location: r4.location,
      revalidation: r4.revalidation,
      component: R7,
      error: f4,
      children: g8(),
      routeContext: {
        outlet: null,
        matches: b10,
        isDataRoute: true
      },
      onError: u6
    }) : g8();
  }, null);
}
function Fa(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Oa(e) {
  let t = Ie(We3);
  return I8(t, Fa(e)), t;
}
function tt3(e) {
  let t = Ie(et2);
  return I8(t, Fa(e)), t;
}
function Is(e) {
  let t = Ie(Pe5);
  return I8(t, Fa(e)), t;
}
function Mt2(e) {
  let t = Is(e), r4 = t.matches[t.matches.length - 1];
  return I8(r4.route.id, `${e} can only be used on routes that contain a unique "id"`), r4.route.id;
}
function Us() {
  return Mt2("useRouteId");
}
function ei2() {
  return tt3("useNavigation").navigation;
}
function _r() {
  let { matches: e, loaderData: t } = tt3("useMatches");
  return be(() => e.map((r4) => so(r4, t)), [
    e,
    t
  ]);
}
function kt2() {
  let e = Ie(Ta), t = tt3("useRouteError"), r4 = Mt2("useRouteError");
  return e !== void 0 ? e : t.errors?.[r4];
}
function Vs2() {
  let { router: e } = Oa("useNavigate"), t = Mt2("useNavigate"), r4 = ze(false);
  return Go2(() => {
    r4.current = true;
  }), He(async (n2, o7 = {}) => {
    te3(r4.current, Jo2), r4.current && (typeof n2 == "number" ? await e.navigate(n2) : await e.navigate(n2, {
      fromRouteId: t,
      ...o7
    }));
  }, [
    e,
    t
  ]);
}
var Kn = {};
function ai2(e, t, r4) {
  !t && !Kn[e] && (Kn[e] = true, te3(false, r4));
}
var Js = "useOptimistic";
var Qn2 = react_19_1_exports[Js];
var Qs = Oe(qs);
function qs({ routes: e, future: t, state: r4, onError: a6 }) {
  return _a(e, void 0, r4, a6, t);
}
function ni2(e) {
  I8(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function ct2({ basename: e = "/", children: t = null, location: r4, navigationType: a6 = "POP", navigator: n2, static: o7 = false, unstable_useTransitions: i3 }) {
  I8(!ut2(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let l6 = e.replace(/^\/*/, "/"), s3 = be(() => ({
    basename: l6,
    navigator: n2,
    static: o7,
    unstable_useTransitions: i3,
    future: {}
  }), [
    l6,
    n2,
    o7,
    i3
  ]);
  typeof r4 == "string" && (r4 = Le3(r4));
  let { pathname: u6 = "/", search: d4 = "", hash: c4 = "", state: h5 = null, key: f4 = "default" } = r4, m6 = be(() => {
    let R7 = ie4(u6, l6);
    return R7 == null ? null : {
      location: {
        pathname: R7,
        search: d4,
        hash: c4,
        state: h5,
        key: f4
      },
      navigationType: a6
    };
  }, [
    l6,
    u6,
    d4,
    c4,
    h5,
    f4,
    a6
  ]);
  return te3(m6 != null, `<Router basename="${l6}"> is not able to match the URL "${u6}${d4}${c4}" because it does not start with the basename, so the <Router> won't render anything.`), m6 == null ? null : Ce(ge5.Provider, {
    value: s3
  }, Ce(gt3.Provider, {
    children: t,
    value: m6
  }));
}
function tu({ children: e, location: t }) {
  return Qo2(Qt2(e), t);
}
function Qt2(e, t = []) {
  let r4 = [];
  return ce.forEach(e, (a6, n2) => {
    if (!we(a6)) return;
    let o7 = [
      ...t,
      n2
    ];
    if (a6.type === ae) {
      r4.push.apply(r4, Qt2(a6.props.children, o7));
      return;
    }
    I8(a6.type === ni2, `[${typeof a6.type == "string" ? a6.type : a6.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), I8(!a6.props.index || !a6.props.children, "An index route cannot have child routes.");
    let i3 = {
      id: a6.props.id || o7.join("-"),
      caseSensitive: a6.props.caseSensitive,
      element: a6.props.element,
      Component: a6.props.Component,
      index: a6.props.index,
      path: a6.props.path,
      middleware: a6.props.middleware,
      loader: a6.props.loader,
      action: a6.props.action,
      hydrateFallbackElement: a6.props.hydrateFallbackElement,
      HydrateFallback: a6.props.HydrateFallback,
      errorElement: a6.props.errorElement,
      ErrorBoundary: a6.props.ErrorBoundary,
      hasErrorBoundary: a6.props.hasErrorBoundary === true || a6.props.ErrorBoundary != null || a6.props.errorElement != null,
      shouldRevalidate: a6.props.shouldRevalidate,
      handle: a6.props.handle,
      lazy: a6.props.lazy
    };
    a6.props.children && (i3.children = Qt2(a6.props.children, o7)), r4.push(i3);
  }), r4;
}
var pr = "get";
var yr = "application/x-www-form-urlencoded";
function kr2(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function cu(e) {
  return kr2(e) && e.tagName.toLowerCase() === "button";
}
function du(e) {
  return kr2(e) && e.tagName.toLowerCase() === "form";
}
function fu(e) {
  return kr2(e) && e.tagName.toLowerCase() === "input";
}
function hu(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mu(e, t) {
  return e.button === 0 && (!t || t === "_self") && !hu(e);
}
var dr = null;
function yu() {
  if (dr === null) try {
    new FormData(document.createElement("form"), 0), dr = false;
  } catch {
    dr = true;
  }
  return dr;
}
var Ru = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ea2(e) {
  return e != null && !Ru.has(e) ? (te3(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yr}"`), null) : e;
}
function gu(e, t) {
  let r4, a6, n2, o7, i3;
  if (du(e)) {
    let l6 = e.getAttribute("action");
    a6 = l6 ? ie4(l6, t) : null, r4 = e.getAttribute("method") || pr, n2 = ea2(e.getAttribute("enctype")) || yr, o7 = new FormData(e);
  } else if (cu(e) || fu(e) && (e.type === "submit" || e.type === "image")) {
    let l6 = e.form;
    if (l6 == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s3 = e.getAttribute("formaction") || l6.getAttribute("action");
    if (a6 = s3 ? ie4(s3, t) : null, r4 = e.getAttribute("formmethod") || l6.getAttribute("method") || pr, n2 = ea2(e.getAttribute("formenctype")) || ea2(l6.getAttribute("enctype")) || yr, o7 = new FormData(l6, e), !yu()) {
      let { name: u6, type: d4, value: c4 } = e;
      if (d4 === "image") {
        let h5 = u6 ? `${u6}.` : "";
        o7.append(`${h5}x`, "0"), o7.append(`${h5}y`, "0");
      } else u6 && o7.append(u6, c4);
    }
  } else {
    if (kr2(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r4 = pr, a6 = null, n2 = yr, i3 = e;
  }
  return o7 && n2 === "text/plain" && (i3 = o7, o7 = void 0), {
    action: a6,
    method: r4.toLowerCase(),
    encType: n2,
    formData: o7,
    body: i3
  };
}
var Eu = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Du2 = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var Lu = /[&><\u2028\u2029]/g;
function Ze2(e) {
  return e.replace(Lu, (t) => Du2[t]);
}
function Re3(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
var Be3 = Symbol("SingleFetchRedirect");
var Ua2 = /* @__PURE__ */ new Set([
  100,
  101,
  204,
  205
]);
function bi(e, t, r4, a6) {
  let n2 = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
  return r4 ? n2.pathname.endsWith("/") ? n2.pathname = `${n2.pathname}_.${a6}` : n2.pathname = `${n2.pathname}.${a6}` : n2.pathname === "/" ? n2.pathname = `_root.${a6}` : t && ie4(n2.pathname, t) === "/" ? n2.pathname = `${t.replace(/\/$/, "")}/_root.${a6}` : n2.pathname = `${n2.pathname.replace(/\/$/, "")}.${a6}`, n2;
}
async function Ci(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r4 = await import(e.module);
    return t[e.id] = r4, r4;
  } catch (r4) {
    if (console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(r4), window.__reactRouterContext && window.__reactRouterContext.isSpaMode && import.meta.hot) throw r4;
    return window.location.reload(), new Promise(() => {
    });
  }
}
function za(e) {
  return e != null && typeof e.page == "string";
}
function Uu(e) {
  return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function ju(e, t, r4) {
  let a6 = await Promise.all(e.map(async (n2) => {
    let o7 = t.routes[n2.route.id];
    if (o7) {
      let i3 = await Ci(o7, r4);
      return i3.links ? i3.links() : [];
    }
    return [];
  }));
  return Li(a6.flat(1).filter(Uu).filter((n2) => n2.rel === "stylesheet" || n2.rel === "preload").map((n2) => n2.rel === "stylesheet" ? {
    ...n2,
    rel: "prefetch",
    as: "style"
  } : {
    ...n2,
    rel: "prefetch"
  }));
}
function to2(e, t, r4, a6, n2, o7) {
  let i3 = (s3, u6) => r4[u6] ? s3.route.id !== r4[u6].route.id : true, l6 = (s3, u6) => r4[u6].pathname !== s3.pathname || r4[u6].route.path?.endsWith("*") && r4[u6].params["*"] !== s3.params["*"];
  return o7 === "assets" ? t.filter((s3, u6) => i3(s3, u6) || l6(s3, u6)) : o7 === "data" ? t.filter((s3, u6) => {
    let d4 = a6.routes[s3.route.id];
    if (!d4 || !d4.hasLoader) return false;
    if (i3(s3, u6) || l6(s3, u6)) return true;
    if (s3.route.shouldRevalidate) {
      let c4 = s3.route.shouldRevalidate({
        currentUrl: new URL(n2.pathname + n2.search + n2.hash, window.origin),
        currentParams: r4[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: s3.params,
        defaultShouldRevalidate: true
      });
      if (typeof c4 == "boolean") return c4;
    }
    return true;
  }) : [];
}
function Ba(e, t, { includeHydrateFallback: r4 } = {}) {
  return zu(e.map((a6) => {
    let n2 = t.routes[a6.route.id];
    if (!n2) return [];
    let o7 = [
      n2.module
    ];
    return n2.clientActionModule && (o7 = o7.concat(n2.clientActionModule)), n2.clientLoaderModule && (o7 = o7.concat(n2.clientLoaderModule)), r4 && n2.hydrateFallbackModule && (o7 = o7.concat(n2.hydrateFallbackModule)), n2.imports && (o7 = o7.concat(n2.imports)), o7;
  }).flat(1));
}
function zu(e) {
  return [
    ...new Set(e)
  ];
}
function Bu(e) {
  let t = {}, r4 = Object.keys(e).sort();
  for (let a6 of r4) t[a6] = e[a6];
  return t;
}
function Li(e, t) {
  let r4 = /* @__PURE__ */ new Set(), a6 = new Set(t);
  return e.reduce((n2, o7) => {
    if (t && !za(o7) && o7.as === "script" && o7.href && a6.has(o7.href)) return n2;
    let l6 = JSON.stringify(Bu(o7));
    return r4.has(l6) || (r4.add(l6), n2.push({
      key: l6,
      link: o7
    })), n2;
  }, []);
}
function Ga() {
  let e = Ie(We3);
  return Re3(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function $r() {
  let e = Ie(et2);
  return Re3(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var rt2 = de(void 0);
rt2.displayName = "FrameworkContext";
function Ht() {
  let e = Ie(rt2);
  return Re3(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function rc(e, t) {
  let r4 = Ie(rt2), [a6, n2] = Ge(false), [o7, i3] = Ge(false), { onFocus: l6, onBlur: s3, onMouseEnter: u6, onMouseLeave: d4, onTouchStart: c4 } = t, h5 = ze(null);
  Le(() => {
    if (e === "render" && i3(true), e === "viewport") {
      let R7 = (b10) => {
        b10.forEach((g8) => {
          i3(g8.isIntersecting);
        });
      }, p5 = new IntersectionObserver(R7, {
        threshold: 0.5
      });
      return h5.current && p5.observe(h5.current), () => {
        p5.disconnect();
      };
    }
  }, [
    e
  ]), Le(() => {
    if (a6) {
      let R7 = setTimeout(() => {
        i3(true);
      }, 100);
      return () => {
        clearTimeout(R7);
      };
    }
  }, [
    a6
  ]);
  let f4 = () => {
    n2(true);
  }, m6 = () => {
    n2(false), i3(false);
  };
  return r4 ? e !== "intent" ? [
    o7,
    h5,
    {}
  ] : [
    o7,
    h5,
    {
      onFocus: Vt(l6, f4),
      onBlur: Vt(s3, m6),
      onMouseEnter: Vt(u6, f4),
      onMouseLeave: Vt(d4, m6),
      onTouchStart: Vt(c4, f4)
    }
  ] : [
    false,
    h5,
    {}
  ];
}
function Vt(e, t) {
  return (r4) => {
    e && e(r4), r4.defaultPrevented || t(r4);
  };
}
function Xa2({ page: e, ...t }) {
  let { router: r4 } = Ga(), a6 = be(() => Ee4(r4.routes, e, r4.basename), [
    r4.routes,
    e,
    r4.basename
  ]);
  return a6 ? Ce(oc, {
    page: e,
    matches: a6,
    ...t
  }) : null;
}
function nc(e) {
  let { manifest: t, routeModules: r4 } = Ht(), [a6, n2] = Ge([]);
  return Le(() => {
    let o7 = false;
    return ju(e, t, r4).then((i3) => {
      o7 || n2(i3);
    }), () => {
      o7 = true;
    };
  }, [
    e,
    t,
    r4
  ]), a6;
}
function oc({ page: e, matches: t, ...r4 }) {
  let a6 = xe3(), { future: n2, manifest: o7, routeModules: i3 } = Ht(), { basename: l6 } = Ga(), { loaderData: s3, matches: u6 } = $r(), d4 = be(() => to2(e, t, u6, o7, a6, "data"), [
    e,
    t,
    u6,
    o7,
    a6
  ]), c4 = be(() => to2(e, t, u6, o7, a6, "assets"), [
    e,
    t,
    u6,
    o7,
    a6
  ]), h5 = be(() => {
    if (e === a6.pathname + a6.search + a6.hash) return [];
    let R7 = /* @__PURE__ */ new Set(), p5 = false;
    if (t.forEach((g8) => {
      let S10 = o7.routes[g8.route.id];
      !S10 || !S10.hasLoader || (!d4.some((P5) => P5.route.id === g8.route.id) && g8.route.id in s3 && i3[g8.route.id]?.shouldRevalidate || S10.hasClientLoader ? p5 = true : R7.add(g8.route.id));
    }), R7.size === 0) return [];
    let b10 = bi(e, l6, n2.unstable_trailingSlashAwareDataRequests, "data");
    return p5 && R7.size > 0 && b10.searchParams.set("_routes", t.filter((g8) => R7.has(g8.route.id)).map((g8) => g8.route.id).join(",")), [
      b10.pathname + b10.search
    ];
  }, [
    l6,
    n2.unstable_trailingSlashAwareDataRequests,
    s3,
    a6,
    o7,
    d4,
    t,
    e,
    i3
  ]), f4 = be(() => Ba(c4, o7), [
    c4,
    o7
  ]), m6 = nc(c4);
  return Ce(ae, null, h5.map((R7) => Ce("link", {
    key: R7,
    rel: "prefetch",
    as: "fetch",
    href: R7,
    ...r4
  })), f4.map((R7) => Ce("link", {
    key: R7,
    rel: "modulepreload",
    href: R7,
    ...r4
  })), m6.map(({ key: R7, link: p5 }) => Ce("link", {
    key: R7,
    nonce: r4.nonce,
    ...p5,
    crossOrigin: p5.crossOrigin ?? r4.crossOrigin
  })));
}
function cc(...e) {
  return (t) => {
    e.forEach((r4) => {
      typeof r4 == "function" ? r4(t) : r4 != null && (r4.current = t);
    });
  };
}
var dc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  dc && (window.__reactRouterVersion = "7.13.0");
} catch {
}
function yc({ basename: e, children: t, unstable_useTransitions: r4, window: a6 }) {
  let n2 = ze();
  n2.current == null && (n2.current = wa({
    window: a6,
    v5Compat: true
  }));
  let o7 = n2.current, [i3, l6] = Ge({
    action: o7.action,
    location: o7.location
  }), s3 = He((u6) => {
    r4 === false ? l6(u6) : ge(() => l6(u6));
  }, [
    r4
  ]);
  return De(() => o7.listen(s3), [
    o7,
    s3
  ]), Ce(ct2, {
    basename: e,
    children: t,
    location: i3.location,
    navigationType: i3.action,
    navigator: o7,
    unstable_useTransitions: r4
  });
}
function Ai({ basename: e, children: t, history: r4, unstable_useTransitions: a6 }) {
  let [n2, o7] = Ge({
    action: r4.action,
    location: r4.location
  }), i3 = He((l6) => {
    a6 === false ? o7(l6) : ge(() => o7(l6));
  }, [
    a6
  ]);
  return De(() => r4.listen(i3), [
    r4,
    i3
  ]), Ce(ct2, {
    basename: e,
    children: t,
    location: n2.location,
    navigationType: n2.action,
    navigator: r4,
    unstable_useTransitions: a6
  });
}
Ai.displayName = "unstable_HistoryRouter";
var Hi = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var qa2 = Ae(function({ onClick: t, discover: r4 = "render", prefetch: a6 = "none", relative: n2, reloadDocument: o7, replace: i3, state: l6, target: s3, to: u6, preventScrollReset: d4, viewTransition: c4, unstable_defaultShouldRevalidate: h5, ...f4 }, m6) {
  let { basename: R7, unstable_useTransitions: p5 } = Ie(ge5), b10 = typeof u6 == "string" && Hi.test(u6), g8 = vo(u6, R7);
  u6 = g8.to;
  let S10 = Yo2(u6, {
    relative: n2
  }), [P5, x9, C8] = rc(a6, f4), v9 = ji(u6, {
    replace: i3,
    state: l6,
    target: s3,
    preventScrollReset: d4,
    relative: n2,
    viewTransition: c4,
    unstable_defaultShouldRevalidate: h5,
    unstable_useTransitions: p5
  });
  function O6(M7) {
    t && t(M7), M7.defaultPrevented || v9(M7);
  }
  let T10 = Ce("a", {
    ...f4,
    ...C8,
    href: g8.absoluteURL || S10,
    onClick: g8.isExternal || o7 ? t : O6,
    ref: cc(m6, x9),
    target: s3,
    "data-discover": !b10 && r4 === "render" ? "true" : void 0
  });
  return P5 && !b10 ? Ce(ae, null, T10, Ce(Xa2, {
    page: S10
  })) : T10;
});
qa2.displayName = "Link";
var $i = Ae(function({ "aria-current": t = "page", caseSensitive: r4 = false, className: a6 = "", end: n2 = false, style: o7, to: i3, viewTransition: l6, children: s3, ...u6 }, d4) {
  let c4 = Ot(i3, {
    relative: u6.relative
  }), h5 = xe3(), f4 = Ie(et2), { navigator: m6, basename: R7 } = Ie(ge5), p5 = f4 != null && Wi2(c4) && l6 === true, b10 = m6.encodeLocation ? m6.encodeLocation(c4).pathname : c4.pathname, g8 = h5.pathname, S10 = f4 && f4.navigation && f4.navigation.location ? f4.navigation.location.pathname : null;
  r4 || (g8 = g8.toLowerCase(), S10 = S10 ? S10.toLowerCase() : null, b10 = b10.toLowerCase()), S10 && R7 && (S10 = ie4(S10, R7) || S10);
  let P5 = b10 !== "/" && b10.endsWith("/") ? b10.length - 1 : b10.length, x9 = g8 === b10 || !n2 && g8.startsWith(b10) && g8.charAt(P5) === "/", C8 = S10 != null && (S10 === b10 || !n2 && S10.startsWith(b10) && S10.charAt(b10.length) === "/"), v9 = {
    isActive: x9,
    isPending: C8,
    isTransitioning: p5
  }, O6 = x9 ? t : void 0, T10;
  typeof a6 == "function" ? T10 = a6(v9) : T10 = [
    a6,
    x9 ? "active" : null,
    C8 ? "pending" : null,
    p5 ? "transitioning" : null
  ].filter(Boolean).join(" ");
  let M7 = typeof o7 == "function" ? o7(v9) : o7;
  return Ce(qa2, {
    ...u6,
    "aria-current": O6,
    className: T10,
    ref: d4,
    style: M7,
    to: i3,
    viewTransition: l6
  }, typeof s3 == "function" ? s3(v9) : s3);
});
$i.displayName = "NavLink";
var Za2 = Ae(({ discover: e = "render", fetcherKey: t, navigate: r4, reloadDocument: a6, replace: n2, state: o7, method: i3 = pr, action: l6, onSubmit: s3, relative: u6, preventScrollReset: d4, viewTransition: c4, unstable_defaultShouldRevalidate: h5, ...f4 }, m6) => {
  let { unstable_useTransitions: R7 } = Ie(ge5), p5 = tn2(), b10 = zi2(l6, {
    relative: u6
  }), g8 = i3.toLowerCase() === "get" ? "get" : "post", S10 = typeof l6 == "string" && Hi.test(l6);
  return Ce("form", {
    ref: m6,
    method: g8,
    action: b10,
    onSubmit: a6 ? s3 : (x9) => {
      if (s3 && s3(x9), x9.defaultPrevented) return;
      x9.preventDefault();
      let C8 = x9.nativeEvent.submitter, v9 = C8?.getAttribute("formmethod") || i3, O6 = () => p5(C8 || x9.currentTarget, {
        fetcherKey: t,
        method: v9,
        navigate: r4,
        replace: n2,
        state: o7,
        relative: u6,
        preventScrollReset: d4,
        viewTransition: c4,
        unstable_defaultShouldRevalidate: h5
      });
      R7 && r4 !== false ? ge(() => O6()) : O6();
    },
    ...f4,
    "data-discover": !S10 && e === "render" ? "true" : void 0
  });
});
Za2.displayName = "Form";
function Ii({ getKey: e, storageKey: t, ...r4 }) {
  let a6 = Ie(rt2), { basename: n2 } = Ie(ge5), o7 = xe3(), i3 = _r();
  Bi2({
    getKey: e,
    storageKey: t
  });
  let l6 = be(() => {
    if (!a6 || !e) return null;
    let u6 = Ra(o7, i3, n2, e);
    return u6 !== o7.key ? u6 : null;
  }, []);
  if (!a6 || a6.isSpaMode) return null;
  let s3 = ((u6, d4) => {
    if (!window.history.state || !window.history.state.key) {
      let c4 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: c4
      }, "");
    }
    try {
      let h5 = JSON.parse(sessionStorage.getItem(u6) || "{}")[d4 || window.history.state.key];
      typeof h5 == "number" && window.scrollTo(0, h5);
    } catch (c4) {
      console.error(c4), sessionStorage.removeItem(u6);
    }
  }).toString();
  return Ce("script", {
    ...r4,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${s3})(${Ze2(JSON.stringify(t || ya))}, ${Ze2(JSON.stringify(l6))})`
    }
  });
}
Ii.displayName = "ScrollRestoration";
function Ui(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ir2(e) {
  let t = Ie(We3);
  return I8(t, Ui(e)), t;
}
function en2(e) {
  let t = Ie(et2);
  return I8(t, Ui(e)), t;
}
function ji(e, { target: t, replace: r4, state: a6, preventScrollReset: n2, relative: o7, viewTransition: i3, unstable_defaultShouldRevalidate: l6, unstable_useTransitions: s3 } = {}) {
  let u6 = Lr(), d4 = xe3(), c4 = Ot(e, {
    relative: o7
  });
  return He((h5) => {
    if (mu(h5, t)) {
      h5.preventDefault();
      let f4 = r4 !== void 0 ? r4 : he4(d4) === he4(c4), m6 = () => u6(e, {
        replace: f4,
        state: a6,
        preventScrollReset: n2,
        relative: o7,
        viewTransition: i3,
        unstable_defaultShouldRevalidate: l6
      });
      s3 ? ge(() => m6()) : m6();
    }
  }, [
    d4,
    u6,
    c4,
    r4,
    a6,
    t,
    e,
    n2,
    o7,
    i3,
    l6,
    s3
  ]);
}
var gc = 0;
var vc = () => `__${String(++gc)}__`;
function tn2() {
  let { router: e } = Ir2("useSubmit"), { basename: t } = Ie(ge5), r4 = Us(), a6 = e.fetch, n2 = e.navigate;
  return He(async (o7, i3 = {}) => {
    let { action: l6, method: s3, encType: u6, formData: d4, body: c4 } = gu(o7, t);
    if (i3.navigate === false) {
      let h5 = i3.fetcherKey || vc();
      await a6(h5, r4, i3.action || l6, {
        unstable_defaultShouldRevalidate: i3.unstable_defaultShouldRevalidate,
        preventScrollReset: i3.preventScrollReset,
        formData: d4,
        body: c4,
        formMethod: i3.method || s3,
        formEncType: i3.encType || u6,
        flushSync: i3.flushSync
      });
    } else await n2(i3.action || l6, {
      unstable_defaultShouldRevalidate: i3.unstable_defaultShouldRevalidate,
      preventScrollReset: i3.preventScrollReset,
      formData: d4,
      body: c4,
      formMethod: i3.method || s3,
      formEncType: i3.encType || u6,
      replace: i3.replace,
      state: i3.state,
      fromRouteId: r4,
      flushSync: i3.flushSync,
      viewTransition: i3.viewTransition
    });
  }, [
    a6,
    n2,
    t,
    r4
  ]);
}
function zi2(e, { relative: t } = {}) {
  let { basename: r4 } = Ie(ge5), a6 = Ie(Pe5);
  I8(a6, "useFormAction must be used inside a RouteContext");
  let [n2] = a6.matches.slice(-1), o7 = {
    ...Ot(e || ".", {
      relative: t
    })
  }, i3 = xe3();
  if (e == null) {
    o7.search = i3.search;
    let l6 = new URLSearchParams(o7.search), s3 = l6.getAll("index");
    if (s3.some((d4) => d4 === "")) {
      l6.delete("index"), s3.filter((c4) => c4).forEach((c4) => l6.append("index", c4));
      let d4 = l6.toString();
      o7.search = d4 ? `?${d4}` : "";
    }
  }
  return (!e || e === ".") && n2.route.index && (o7.search = o7.search ? o7.search.replace(/^\?/, "?index&") : "?index"), r4 !== "/" && (o7.pathname = o7.pathname === "/" ? r4 : je5([
    r4,
    o7.pathname
  ])), he4(o7);
}
var ya = "react-router-scroll-positions";
var mr2 = {};
function Ra(e, t, r4, a6) {
  let n2 = null;
  return a6 && (r4 !== "/" ? n2 = a6({
    ...e,
    pathname: ie4(e.pathname, r4) || e.pathname
  }, t) : n2 = a6(e, t)), n2 == null && (n2 = e.key), n2;
}
function Bi2({ getKey: e, storageKey: t } = {}) {
  let { router: r4 } = Ir2("useScrollRestoration"), { restoreScrollPosition: a6, preventScrollReset: n2 } = en2("useScrollRestoration"), { basename: o7 } = Ie(ge5), i3 = xe3(), l6 = _r(), s3 = ei2();
  Le(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), bc(He(() => {
    if (s3.state === "idle") {
      let u6 = Ra(i3, l6, o7, e);
      mr2[u6] = window.scrollY;
    }
    try {
      sessionStorage.setItem(t || ya, JSON.stringify(mr2));
    } catch (u6) {
      te3(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u6}).`);
    }
    window.history.scrollRestoration = "auto";
  }, [
    s3.state,
    e,
    o7,
    i3,
    l6,
    t
  ])), typeof document < "u" && (De(() => {
    try {
      let u6 = sessionStorage.getItem(t || ya);
      u6 && (mr2 = JSON.parse(u6));
    } catch {
    }
  }, [
    t
  ]), De(() => {
    let u6 = r4?.enableScrollRestoration(mr2, () => window.scrollY, e ? (d4, c4) => Ra(d4, c4, o7, e) : void 0);
    return () => u6 && u6();
  }, [
    r4,
    o7,
    e
  ]), De(() => {
    if (a6 !== false) {
      if (typeof a6 == "number") {
        window.scrollTo(0, a6);
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
        te3(false, `"${i3.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
      }
      n2 !== true && window.scrollTo(0, 0);
    }
  }, [
    i3,
    a6,
    n2
  ]));
}
function bc(e, t) {
  let { capture: r4 } = t || {};
  Le(() => {
    let a6 = r4 != null ? {
      capture: r4
    } : void 0;
    return window.addEventListener("pagehide", e, a6), () => {
      window.removeEventListener("pagehide", e, a6);
    };
  }, [
    e,
    r4
  ]);
}
function Wi2(e, { relative: t } = {}) {
  let r4 = Ie(er);
  I8(r4 != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let { basename: a6 } = Ir2("useViewTransitionState"), n2 = Ot(e, {
    relative: t
  });
  if (!r4.isTransitioning) return false;
  let o7 = ie4(r4.currentLocation.pathname, a6) || r4.currentLocation.pathname, i3 = ie4(r4.nextLocation.pathname, a6) || r4.nextLocation.pathname;
  return Dt2(n2.pathname, i3) != null || Dt2(n2.pathname, o7) != null;
}
var un = new TextEncoder();
var ll = ((e) => (e.Development = "development", e.Production = "production", e.Test = "test", e))(ll || {});
var pl2 = /* @__PURE__ */ new Set([
  ...Ua2,
  304
]);
var sn = new TextEncoder();
var yd = class extends Qe.Component {
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
    return this.state.error ? Qe.createElement(gl2, {
      error: this.state.error,
      renderAppShell: true
    }) : this.props.children;
  }
};
function al2({ renderAppShell: e, title: t, children: r4 }) {
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
  }, r4))) : r4;
}
function gl2({ error: e, renderAppShell: t }) {
  console.error(e);
  let r4 = Qe.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
    }
  });
  if (ne3(e)) return Qe.createElement(al2, {
    renderAppShell: t,
    title: "Unhandled Thrown Response!"
  }, Qe.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, e.status, " ", e.statusText), ze4 ? r4 : null);
  let a6;
  if (e instanceof Error) a6 = e;
  else {
    let n2 = e == null ? "Unknown Error" : typeof e == "object" && "toString" in e ? e.toString() : JSON.stringify(e);
    a6 = new Error(n2);
  }
  return Qe.createElement(al2, {
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
  }, a6.stack), r4);
}
var Ed = "use";
var nl2 = react_19_1_exports[Ed];

// deno:https://esm.sh/@emotion/memoize@0.8.1/es2022/memoize.mjs
function u3(t) {
  var n2 = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return n2[e] === void 0 && (n2[e] = t(e)), n2[e];
  };
}

// deno:https://esm.sh/@emotion/is-prop-valid@1.2.2/es2022/is-prop-valid.mjs
var r2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var a4 = u3(function(e) {
  return r2.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});

// deno:https://esm.sh/@emotion/unitless@0.8.1/es2022/unitless.mjs
var o4 = {
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
var g4 = Object.create;
var y6 = Object.defineProperty;
var o5 = Object.getOwnPropertyDescriptor;
var w6 = Object.getOwnPropertyNames;
var P2 = Object.getPrototypeOf;
var k8 = Object.prototype.hasOwnProperty;
var q7 = (t, r4) => () => (r4 || t((r4 = {
  exports: {}
}).exports, r4), r4.exports);
var E9 = (t, r4, e, a6) => {
  if (r4 && typeof r4 == "object" || typeof r4 == "function") for (let f4 of w6(r4)) !k8.call(t, f4) && f4 !== e && y6(t, f4, {
    get: () => r4[f4],
    enumerable: !(a6 = o5(r4, f4)) || a6.enumerable
  });
  return t;
};
var H5 = (t, r4, e) => (e = t != null ? g4(P2(t)) : {}, E9(r4 || !t || !t.__esModule ? y6(e, "default", {
  value: t,
  enumerable: true
}) : e, t));
var h4 = q7((z10, d4) => {
  d4.exports = function(r4, e, a6, f4) {
    var s3 = a6 ? a6.call(f4, r4, e) : void 0;
    if (s3 !== void 0) return !!s3;
    if (r4 === e) return true;
    if (typeof r4 != "object" || !r4 || typeof e != "object" || !e) return false;
    var n2 = Object.keys(r4), p5 = Object.keys(e);
    if (n2.length !== p5.length) return false;
    for (var O6 = Object.prototype.hasOwnProperty.bind(e), i3 = 0; i3 < n2.length; i3++) {
      var l6 = n2[i3];
      if (!O6(l6)) return false;
      var v9 = r4[l6], c4 = e[l6];
      if (s3 = a6 ? a6.call(f4, v9, c4, l6) : void 0, s3 === false || s3 === void 0 && v9 !== c4) return false;
    }
    return true;
  };
});
var u4 = H5(h4());
var D7 = u4.default ?? u4;

// deno:https://esm.sh/stylis@4.3.2/es2022/stylis.mjs
var o6 = "-ms-";
var F5 = "-moz-";
var a5 = "-webkit-";
var Q3 = "comm";
var D8 = "rule";
var _6 = "decl";
var ur = "@import";
var X5 = "@keyframes";
var br = "@layer";
var cr = Math.abs;
var W5 = String.fromCharCode;
var G8 = Object.assign;
function wr(r4, t) {
  return p4(r4, 0) ^ 45 ? (((t << 2 ^ p4(r4, 0)) << 2 ^ p4(r4, 1)) << 2 ^ p4(r4, 2)) << 2 ^ p4(r4, 3) : 0;
}
function v7(r4) {
  return r4.trim();
}
function A7(r4, t) {
  return (r4 = t.exec(r4)) ? r4[0] : r4;
}
function c2(r4, t, e) {
  return r4.replace(t, e);
}
function j8(r4, t, e) {
  return r4.indexOf(t, e);
}
function p4(r4, t) {
  return r4.charCodeAt(t) | 0;
}
function g5(r4, t, e) {
  return r4.slice(t, e);
}
function b6(r4) {
  return r4.length;
}
function B7(r4) {
  return r4.length;
}
function O5(r4, t) {
  return t.push(r4), r4;
}
function nr(r4, t) {
  return r4.map(t).join("");
}
function ar2(r4, t) {
  return r4.filter(function(e) {
    return !A7(e, t);
  });
}
var rr2 = 1;
var Z3 = 1;
var hr = 0;
var m3 = 0;
var f3 = 0;
var y7 = "";
function H6(r4, t, e, s3, n2, w8, $4, x9) {
  return {
    value: r4,
    root: t,
    parent: e,
    type: s3,
    props: n2,
    children: w8,
    line: rr2,
    column: Z3,
    length: $4,
    return: "",
    siblings: x9
  };
}
function S8(r4, t) {
  return G8(H6("", null, null, "", null, null, 0, r4.siblings), r4, {
    length: -r4.length
  }, t);
}
function K7(r4) {
  for (; r4.root; ) r4 = S8(r4.root, {
    children: [
      r4
    ]
  });
  O5(r4, r4.siblings);
}
function mr3() {
  return f3;
}
function Er2() {
  return f3 = m3 > 0 ? p4(y7, --m3) : 0, Z3--, f3 === 10 && (Z3 = 1, rr2--), f3;
}
function E10() {
  return f3 = m3 < hr ? p4(y7, m3++) : 0, Z3++, f3 === 10 && (Z3 = 1, rr2++), f3;
}
function I9() {
  return p4(y7, m3);
}
function q8() {
  return m3;
}
function tr2(r4, t) {
  return g5(y7, r4, t);
}
function l3(r4) {
  switch (r4) {
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
function ir(r4) {
  return rr2 = Z3 = 1, hr = b6(y7 = r4), m3 = 0, [];
}
function pr2(r4) {
  return y7 = "", r4;
}
function J5(r4) {
  return v7(tr2(m3 - 1, or2(r4 === 91 ? r4 + 2 : r4 === 40 ? r4 + 1 : r4)));
}
function gr2(r4) {
  for (; (f3 = I9()) && f3 < 33; ) E10();
  return l3(r4) > 2 || l3(f3) > 3 ? "" : " ";
}
function $r2(r4, t) {
  for (; --t && E10() && !(f3 < 48 || f3 > 102 || f3 > 57 && f3 < 65 || f3 > 70 && f3 < 97); ) ;
  return tr2(r4, q8() + (t < 6 && I9() == 32 && E10() == 32));
}
function or2(r4) {
  for (; E10(); ) switch (f3) {
    case r4:
      return m3;
    case 34:
    case 39:
      r4 !== 34 && r4 !== 39 && or2(f3);
      break;
    case 40:
      r4 === 41 && or2(r4);
      break;
    case 92:
      E10();
      break;
  }
  return m3;
}
function Tr3(r4, t) {
  for (; E10() && r4 + f3 !== 57; ) if (r4 + f3 === 84 && I9() === 47) break;
  return "/*" + tr2(t, m3 - 1) + "*" + W5(r4 === 47 ? r4 : E10());
}
function fr(r4) {
  for (; !l3(I9()); ) E10();
  return tr2(r4, m3);
}
function yr2(r4) {
  return pr2(er2("", null, null, null, [
    ""
  ], r4 = ir(r4), 0, [
    0
  ], r4));
}
function er2(r4, t, e, s3, n2, w8, $4, x9, T10) {
  for (var d4 = 0, C8 = 0, h5 = $4, Y7 = 0, L3 = 0, U5 = 0, k10 = 1, V6 = 1, R7 = 1, u6 = 0, N7 = "", P5 = n2, z10 = w8, M7 = s3, i3 = N7; V6; ) switch (U5 = u6, u6 = E10()) {
    case 40:
      if (U5 != 108 && p4(i3, h5 - 1) == 58) {
        j8(i3 += c2(J5(u6), "&", "&\f"), "&\f", cr(d4 ? x9[d4 - 1] : 0)) != -1 && (R7 = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      i3 += J5(u6);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      i3 += gr2(U5);
      break;
    case 92:
      i3 += $r2(q8() - 1, 7);
      continue;
    case 47:
      switch (I9()) {
        case 42:
        case 47:
          O5(Or(Tr3(E10(), q8()), t, e, T10), T10);
          break;
        default:
          i3 += "/";
      }
      break;
    case 123 * k10:
      x9[d4++] = b6(i3) * R7;
    case 125 * k10:
    case 59:
    case 0:
      switch (u6) {
        case 0:
        case 125:
          V6 = 0;
        case 59 + C8:
          R7 == -1 && (i3 = c2(i3, /\f/g, "")), L3 > 0 && b6(i3) - h5 && O5(L3 > 32 ? Ar(i3 + ";", s3, e, h5 - 1, T10) : Ar(c2(i3, " ", "") + ";", s3, e, h5 - 2, T10), T10);
          break;
        case 59:
          i3 += ";";
        default:
          if (O5(M7 = dr2(i3, t, e, d4, C8, n2, x9, N7, P5 = [], z10 = [], h5, w8), w8), u6 === 123) if (C8 === 0) er2(i3, t, M7, M7, P5, w8, h5, x9, z10);
          else switch (Y7 === 99 && p4(i3, 3) === 110 ? 100 : Y7) {
            case 100:
            case 108:
            case 109:
            case 115:
              er2(r4, M7, M7, s3 && O5(dr2(r4, M7, M7, 0, 0, n2, x9, N7, n2, P5 = [], h5, z10), z10), n2, z10, h5, x9, s3 ? P5 : z10);
              break;
            default:
              er2(i3, M7, M7, M7, [
                ""
              ], z10, 0, x9, z10);
          }
      }
      d4 = C8 = L3 = 0, k10 = R7 = 1, N7 = i3 = "", h5 = $4;
      break;
    case 58:
      h5 = 1 + b6(i3), L3 = U5;
    default:
      if (k10 < 1) {
        if (u6 == 123) --k10;
        else if (u6 == 125 && k10++ == 0 && Er2() == 125) continue;
      }
      switch (i3 += W5(u6), u6 * k10) {
        case 38:
          R7 = C8 > 0 ? 1 : (i3 += "\f", -1);
          break;
        case 44:
          x9[d4++] = (b6(i3) - 1) * R7, R7 = 1;
          break;
        case 64:
          I9() === 45 && (i3 += J5(E10())), Y7 = I9(), C8 = h5 = b6(N7 = i3 += fr(q8())), u6++;
          break;
        case 45:
          U5 === 45 && b6(i3) == 2 && (k10 = 0);
      }
  }
  return w8;
}
function dr2(r4, t, e, s3, n2, w8, $4, x9, T10, d4, C8, h5) {
  for (var Y7 = n2 - 1, L3 = n2 === 0 ? w8 : [
    ""
  ], U5 = B7(L3), k10 = 0, V6 = 0, R7 = 0; k10 < s3; ++k10) for (var u6 = 0, N7 = g5(r4, Y7 + 1, Y7 = cr(V6 = $4[k10])), P5 = r4; u6 < U5; ++u6) (P5 = v7(V6 > 0 ? L3[u6] + " " + N7 : c2(N7, /&\f/g, L3[u6]))) && (T10[R7++] = P5);
  return H6(r4, t, e, n2 === 0 ? D8 : x9, T10, d4, C8, h5);
}
function Or(r4, t, e, s3) {
  return H6(r4, t, e, Q3, W5(mr3()), g5(r4, 2, -2), 0, s3);
}
function Ar(r4, t, e, s3, n2) {
  return H6(r4, t, e, _6, g5(r4, 0, s3), g5(r4, s3 + 1, -1), s3, n2);
}
function xr2(r4, t, e) {
  switch (wr(r4, t)) {
    case 5103:
      return a5 + "print-" + r4 + r4;
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
      return a5 + r4 + r4;
    case 4789:
      return F5 + r4 + r4;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a5 + r4 + F5 + r4 + o6 + r4 + r4;
    case 5936:
      switch (p4(r4, t + 11)) {
        case 114:
          return a5 + r4 + o6 + c2(r4, /[svh]\w+-[tblr]{2}/, "tb") + r4;
        case 108:
          return a5 + r4 + o6 + c2(r4, /[svh]\w+-[tblr]{2}/, "tb-rl") + r4;
        case 45:
          return a5 + r4 + o6 + c2(r4, /[svh]\w+-[tblr]{2}/, "lr") + r4;
      }
    case 6828:
    case 4268:
    case 2903:
      return a5 + r4 + o6 + r4 + r4;
    case 6165:
      return a5 + r4 + o6 + "flex-" + r4 + r4;
    case 5187:
      return a5 + r4 + c2(r4, /(\w+).+(:[^]+)/, a5 + "box-$1$2" + o6 + "flex-$1$2") + r4;
    case 5443:
      return a5 + r4 + o6 + "flex-item-" + c2(r4, /flex-|-self/g, "") + (A7(r4, /flex-|baseline/) ? "" : o6 + "grid-row-" + c2(r4, /flex-|-self/g, "")) + r4;
    case 4675:
      return a5 + r4 + o6 + "flex-line-pack" + c2(r4, /align-content|flex-|-self/g, "") + r4;
    case 5548:
      return a5 + r4 + o6 + c2(r4, "shrink", "negative") + r4;
    case 5292:
      return a5 + r4 + o6 + c2(r4, "basis", "preferred-size") + r4;
    case 6060:
      return a5 + "box-" + c2(r4, "-grow", "") + a5 + r4 + o6 + c2(r4, "grow", "positive") + r4;
    case 4554:
      return a5 + c2(r4, /([^-])(transform)/g, "$1" + a5 + "$2") + r4;
    case 6187:
      return c2(c2(c2(r4, /(zoom-|grab)/, a5 + "$1"), /(image-set)/, a5 + "$1"), r4, "") + r4;
    case 5495:
    case 3959:
      return c2(r4, /(image-set\([^]*)/, a5 + "$1$`$1");
    case 4968:
      return c2(c2(r4, /(.+:)(flex-)?(.*)/, a5 + "box-pack:$3" + o6 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a5 + r4 + r4;
    case 4200:
      if (!A7(r4, /flex-|baseline/)) return o6 + "grid-column-align" + g5(r4, t) + r4;
      break;
    case 2592:
    case 3360:
      return o6 + c2(r4, "template-", "") + r4;
    case 4384:
    case 3616:
      return e && e.some(function(s3, n2) {
        return t = n2, A7(s3.props, /grid-\w+-end/);
      }) ? ~j8(r4 + (e = e[t].value), "span", 0) ? r4 : o6 + c2(r4, "-start", "") + r4 + o6 + "grid-row-span:" + (~j8(e, "span", 0) ? A7(e, /\d+/) : +A7(e, /\d+/) - +A7(r4, /\d+/)) + ";" : o6 + c2(r4, "-start", "") + r4;
    case 4896:
    case 4128:
      return e && e.some(function(s3) {
        return A7(s3.props, /grid-\w+-start/);
      }) ? r4 : o6 + c2(c2(r4, "-end", "-span"), "span ", "") + r4;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return c2(r4, /(.+)-inline(.+)/, a5 + "$1$2") + r4;
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
      if (b6(r4) - 1 - t > 6) switch (p4(r4, t + 1)) {
        case 109:
          if (p4(r4, t + 4) !== 45) break;
        case 102:
          return c2(r4, /(.+:)(.+)-([^]+)/, "$1" + a5 + "$2-$3$1" + F5 + (p4(r4, t + 3) == 108 ? "$3" : "$2-$3")) + r4;
        case 115:
          return ~j8(r4, "stretch", 0) ? xr2(c2(r4, "stretch", "fill-available"), t, e) + r4 : r4;
      }
      break;
    case 5152:
    case 5920:
      return c2(r4, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(s3, n2, w8, $4, x9, T10, d4) {
        return o6 + n2 + ":" + w8 + d4 + ($4 ? o6 + n2 + "-span:" + (x9 ? T10 : +T10 - +w8) + d4 : "") + r4;
      });
    case 4949:
      if (p4(r4, t + 6) === 121) return c2(r4, ":", ":" + a5) + r4;
      break;
    case 6444:
      switch (p4(r4, p4(r4, 14) === 45 ? 18 : 11)) {
        case 120:
          return c2(r4, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + a5 + (p4(r4, 14) === 45 ? "inline-" : "") + "box$3$1" + a5 + "$2$3$1" + o6 + "$2box$3") + r4;
        case 100:
          return c2(r4, ":", ":" + o6) + r4;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return c2(r4, "scroll-", "scroll-snap-") + r4;
  }
  return r4;
}
function sr(r4, t) {
  for (var e = "", s3 = 0; s3 < r4.length; s3++) e += t(r4[s3], s3, r4, t) || "";
  return e;
}
function Xr(r4, t, e, s3) {
  switch (r4.type) {
    case br:
      if (r4.children.length) break;
    case ur:
    case _6:
      return r4.return = r4.return || r4.value;
    case Q3:
      return "";
    case X5:
      return r4.return = r4.value + "{" + sr(r4.children, s3) + "}";
    case D8:
      if (!b6(r4.value = r4.props.join(","))) return "";
  }
  return b6(e = sr(r4.children, s3)) ? r4.return = r4.value + "{" + e + "}" : "";
}
function ct3(r4) {
  var t = B7(r4);
  return function(e, s3, n2, w8) {
    for (var $4 = "", x9 = 0; x9 < t; x9++) $4 += r4[x9](e, s3, n2, w8) || "";
    return $4;
  };
}
function nt2(r4) {
  return function(t) {
    t.root || (t = t.return) && r4(t);
  };
}
function at2(r4, t, e, s3) {
  if (r4.length > -1 && !r4.return) switch (r4.type) {
    case _6:
      r4.return = xr2(r4.value, r4.length, e);
      return;
    case X5:
      return sr([
        S8(r4, {
          value: c2(r4.value, "@", "@" + a5)
        })
      ], s3);
    case D8:
      if (r4.length) return nr(e = r4.props, function(n2) {
        switch (A7(n2, s3 = /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            K7(S8(r4, {
              props: [
                c2(n2, /:(read-\w+)/, ":" + F5 + "$1")
              ]
            })), K7(S8(r4, {
              props: [
                n2
              ]
            })), G8(r4, {
              props: ar2(e, s3)
            });
            break;
          case "::placeholder":
            K7(S8(r4, {
              props: [
                c2(n2, /:(plac\w+)/, ":" + a5 + "input-$1")
              ]
            })), K7(S8(r4, {
              props: [
                c2(n2, /:(plac\w+)/, ":" + F5 + "$1")
              ]
            })), K7(S8(r4, {
              props: [
                c2(n2, /:(plac\w+)/, o6 + "input-$1")
              ]
            })), K7(S8(r4, {
              props: [
                n2
              ]
            })), G8(r4, {
              props: ar2(e, s3)
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
    for (var n2, r4 = 1, i3 = arguments.length; r4 < i3; r4++) {
      n2 = arguments[r4];
      for (var o7 in n2) Object.prototype.hasOwnProperty.call(n2, o7) && (t[o7] = n2[o7]);
    }
    return t;
  }, m4.apply(this, arguments);
};
function M4(e, t, n2) {
  if (n2 || arguments.length === 2) for (var r4 = 0, i3 = t.length, o7; r4 < i3; r4++) (o7 || !(r4 in t)) && (o7 || (o7 = Array.prototype.slice.call(t, 0, r4)), o7[r4] = t[r4]);
  return e.concat(o7 || Array.prototype.slice.call(t));
}

// deno:https://esm.sh/styled-components@6.1.19/X-ZXJlYWN0/es2022/styled-components.mjs
var C5 = typeof A6 < "u" && A6.env !== void 0 && (A6.env.REACT_APP_SC_ATTR || A6.env.SC_ATTR) || "data-styled";
var $e3 = "active";
var re4 = "data-styled-version";
var B8 = "6.1.19";
var we5 = `/*!sc*/
`;
var se4 = typeof window < "u" && typeof document < "u";
var yt3 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof A6 < "u" && A6.env !== void 0 && A6.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && A6.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? A6.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && A6.env.REACT_APP_SC_DISABLE_SPEEDY : typeof A6 < "u" && A6.env !== void 0 && A6.env.SC_DISABLE_SPEEDY !== void 0 && A6.env.SC_DISABLE_SPEEDY !== "" && A6.env.SC_DISABLE_SPEEDY !== "false" && A6.env.SC_DISABLE_SPEEDY);
var vt2 = {};
var ce5 = Object.freeze([]);
var z8 = Object.freeze({});
function Ee5(t, e, n2) {
  return n2 === void 0 && (n2 = z8), t.theme !== n2.theme && t.theme || e || n2.theme;
}
var Ge4 = /* @__PURE__ */ new Set([
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
var gt4 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var St2 = /(^-|-$)/g;
function De3(t) {
  return t.replace(gt4, "-").replace(St2, "");
}
var wt2 = /(a)(d)/gi;
var Q4 = 52;
var Te4 = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function me7(t) {
  var e, n2 = "";
  for (e = Math.abs(t); e > Q4; e = e / Q4 | 0) n2 = Te4(e % Q4) + n2;
  return (Te4(e % Q4) + n2).replace(wt2, "$1-$2");
}
var de5;
var Le4 = 5381;
var M5 = function(t, e) {
  for (var n2 = e.length; n2; ) t = 33 * t ^ e.charCodeAt(--n2);
  return t;
};
var Ye4 = function(t) {
  return M5(Le4, t);
};
function be4(t) {
  return me7(Ye4(t) >>> 0);
}
function We4(t) {
  return t.displayName || t.name || "Component";
}
function he5(t) {
  return typeof t == "string" && true;
}
var qe3 = typeof Symbol == "function" && Symbol.for;
var He3 = qe3 ? Symbol.for("react.memo") : 60115;
var Et2 = qe3 ? Symbol.for("react.forward_ref") : 60112;
var bt2 = {
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
var Pt3 = ((de5 = {})[Et2] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
}, de5[He3] = Ue4, de5);
function Re4(t) {
  return ("type" in (e = t) && e.type.$$typeof) === He3 ? Ue4 : "$$typeof" in t ? Pt3[t.$$typeof] : bt2;
  var e;
}
var _t2 = Object.defineProperty;
var Ct2 = Object.getOwnPropertyNames;
var ke4 = Object.getOwnPropertySymbols;
var At = Object.getOwnPropertyDescriptor;
var It = Object.getPrototypeOf;
var xe4 = Object.prototype;
function Ne4(t, e, n2) {
  if (typeof e != "string") {
    if (xe4) {
      var o7 = It(e);
      o7 && o7 !== xe4 && Ne4(t, o7, n2);
    }
    var r4 = Ct2(e);
    ke4 && (r4 = r4.concat(ke4(e)));
    for (var s3 = Re4(t), i3 = Re4(e), u6 = 0; u6 < r4.length; ++u6) {
      var a6 = r4[u6];
      if (!(a6 in Nt || n2 && n2[a6] || i3 && a6 in i3 || s3 && a6 in s3)) {
        var c4 = At(e, a6);
        try {
          _t2(t, a6, c4);
        } catch {
        }
      }
    }
  }
  return t;
}
function j9(t) {
  return typeof t == "function";
}
function Pe6(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function x7(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function H7(t, e) {
  if (t.length === 0) return "";
  for (var n2 = t[0], o7 = 1; o7 < t.length; o7++) n2 += e ? e + t[o7] : t[o7];
  return n2;
}
function U4(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function ye5(t, e, n2) {
  if (n2 === void 0 && (n2 = false), !n2 && !U4(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (var o7 = 0; o7 < e.length; o7++) t[o7] = ye5(t[o7], e[o7]);
  else if (U4(e)) for (var o7 in e) t[o7] = ye5(t[o7], e[o7]);
  return t;
}
function _e5(t, e) {
  Object.defineProperty(t, "toString", {
    value: e
  });
}
function E11(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var Ot2 = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var n2 = 0, o7 = 0; o7 < e; o7++) n2 += this.groupSizes[o7];
    return n2;
  }, t.prototype.insertRules = function(e, n2) {
    if (e >= this.groupSizes.length) {
      for (var o7 = this.groupSizes, r4 = o7.length, s3 = r4; e >= s3; ) if ((s3 <<= 1) < 0) throw E11(16, "".concat(e));
      this.groupSizes = new Uint32Array(s3), this.groupSizes.set(o7), this.length = s3;
      for (var i3 = r4; i3 < s3; i3++) this.groupSizes[i3] = 0;
    }
    for (var u6 = this.indexOfGroup(e + 1), a6 = (i3 = 0, n2.length); i3 < a6; i3++) this.tag.insertRule(u6, n2[i3]) && (this.groupSizes[e]++, u6++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var n2 = this.groupSizes[e], o7 = this.indexOfGroup(e), r4 = o7 + n2;
      this.groupSizes[e] = 0;
      for (var s3 = o7; s3 < r4; s3++) this.tag.deleteRule(o7);
    }
  }, t.prototype.getGroup = function(e) {
    var n2 = "";
    if (e >= this.length || this.groupSizes[e] === 0) return n2;
    for (var o7 = this.groupSizes[e], r4 = this.indexOfGroup(e), s3 = r4 + o7, i3 = r4; i3 < s3; i3++) n2 += "".concat(this.tag.getRule(i3)).concat(we5);
    return n2;
  }, t;
}();
var on = 1 << 30;
var ne4 = /* @__PURE__ */ new Map();
var ie5 = /* @__PURE__ */ new Map();
var oe4 = 1;
var ee2 = function(t) {
  if (ne4.has(t)) return ne4.get(t);
  for (; ie5.has(oe4); ) oe4++;
  var e = oe4++;
  return ne4.set(t, e), ie5.set(e, t), e;
};
var Dt3 = function(t, e) {
  oe4 = e + 1, ne4.set(t, e), ie5.set(e, t);
};
var Tt2 = "style[".concat(C5, "][").concat(re4, '="').concat(B8, '"]');
var Rt2 = new RegExp("^".concat(C5, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
var kt3 = function(t, e, n2) {
  for (var o7, r4 = n2.split(","), s3 = 0, i3 = r4.length; s3 < i3; s3++) (o7 = r4[s3]) && t.registerName(e, o7);
};
var xt3 = function(t, e) {
  for (var n2, o7 = ((n2 = e.textContent) !== null && n2 !== void 0 ? n2 : "").split(we5), r4 = [], s3 = 0, i3 = o7.length; s3 < i3; s3++) {
    var u6 = o7[s3].trim();
    if (u6) {
      var a6 = u6.match(Rt2);
      if (a6) {
        var c4 = 0 | parseInt(a6[1], 10), l6 = a6[2];
        c4 !== 0 && (Dt3(l6, c4), kt3(t, l6, a6[3]), t.getTag().insertRules(c4, r4)), r4.length = 0;
      } else r4.push(u6);
    }
  }
};
var je6 = function(t) {
  for (var e = document.querySelectorAll(Tt2), n2 = 0, o7 = e.length; n2 < o7; n2++) {
    var r4 = e[n2];
    r4 && r4.getAttribute(C5) !== $e3 && (xt3(t, r4), r4.parentNode && r4.parentNode.removeChild(r4));
  }
};
function ve5() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Je3 = function(t) {
  var e = document.head, n2 = t || e, o7 = document.createElement("style"), r4 = function(u6) {
    var a6 = Array.from(u6.querySelectorAll("style[".concat(C5, "]")));
    return a6[a6.length - 1];
  }(n2), s3 = r4 !== void 0 ? r4.nextSibling : null;
  o7.setAttribute(C5, $e3), o7.setAttribute(re4, B8);
  var i3 = ve5();
  return i3 && o7.setAttribute("nonce", i3), n2.insertBefore(o7, s3), o7;
};
var jt = function() {
  function t(e) {
    this.element = Je3(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n2) {
      if (n2.sheet) return n2.sheet;
      for (var o7 = document.styleSheets, r4 = 0, s3 = o7.length; r4 < s3; r4++) {
        var i3 = o7[r4];
        if (i3.ownerNode === n2) return i3;
      }
      throw E11(17);
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
      var o7 = document.createTextNode(n2);
      return this.element.insertBefore(o7, this.nodes[e] || null), this.length++, true;
    }
    return false;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}();
var Mt3 = function() {
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
var Ve2 = se4;
var Ft = {
  isServer: !se4,
  useCSSOMInjection: !yt3
};
var $3 = function() {
  function t(e, n2, o7) {
    e === void 0 && (e = z8), n2 === void 0 && (n2 = {});
    var r4 = this;
    this.options = m4(m4({}, Ft), e), this.gs = n2, this.names = new Map(o7), this.server = !!e.isServer, !this.server && se4 && Ve2 && (Ve2 = false, je6(this)), _e5(this, function() {
      return function(s3) {
        for (var i3 = s3.getTag(), u6 = i3.length, a6 = "", c4 = function(h5) {
          var p5 = function(P5) {
            return ie5.get(P5);
          }(h5);
          if (p5 === void 0) return "continue";
          var d4 = s3.names.get(p5), v9 = i3.getGroup(h5);
          if (d4 === void 0 || !d4.size || v9.length === 0) return "continue";
          var A12 = "".concat(C5, ".g").concat(h5, '[id="').concat(p5, '"]'), T10 = "";
          d4 !== void 0 && d4.forEach(function(P5) {
            P5.length > 0 && (T10 += "".concat(P5, ","));
          }), a6 += "".concat(v9).concat(A12, '{content:"').concat(T10, '"}').concat(we5);
        }, l6 = 0; l6 < u6; l6++) c4(l6);
        return a6;
      }(r4);
    });
  }
  return t.registerId = function(e) {
    return ee2(e);
  }, t.prototype.rehydrate = function() {
    !this.server && se4 && je6(this);
  }, t.prototype.reconstructWithOptions = function(e, n2) {
    return n2 === void 0 && (n2 = true), new t(m4(m4({}, this.options), e), this.gs, n2 && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n2) {
      var o7 = n2.useCSSOMInjection, r4 = n2.target;
      return n2.isServer ? new Mt3(r4) : o7 ? new jt(r4) : new Vt2(r4);
    }(this.options), new Ot2(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, n2) {
    return this.names.has(e) && this.names.get(e).has(n2);
  }, t.prototype.registerName = function(e, n2) {
    if (ee2(e), this.names.has(e)) this.names.get(e).add(n2);
    else {
      var o7 = /* @__PURE__ */ new Set();
      o7.add(n2), this.names.set(e, o7);
    }
  }, t.prototype.insertRules = function(e, n2, o7) {
    this.registerName(e, n2), this.getTag().insertRules(ee2(e), o7);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(ee2(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}();
var Bt = /&/g;
var zt = /^\s*\/\/.*$/gm;
function Xe3(t, e) {
  return t.map(function(n2) {
    return n2.type === "rule" && (n2.value = "".concat(e, " ").concat(n2.value), n2.value = n2.value.replaceAll(",", ",".concat(e, " ")), n2.props = n2.props.map(function(o7) {
      return "".concat(e, " ").concat(o7);
    })), Array.isArray(n2.children) && n2.type !== "@keyframes" && (n2.children = Xe3(n2.children, e)), n2;
  });
}
function Ze3(t) {
  var e, n2, o7, r4 = t === void 0 ? z8 : t, s3 = r4.options, i3 = s3 === void 0 ? z8 : s3, u6 = r4.plugins, a6 = u6 === void 0 ? ce5 : u6, c4 = function(p5, d4, v9) {
    return v9.startsWith(n2) && v9.endsWith(n2) && v9.replaceAll(n2, "").length > 0 ? ".".concat(e) : p5;
  }, l6 = a6.slice();
  l6.push(function(p5) {
    p5.type === D8 && p5.value.includes("&") && (p5.props[0] = p5.props[0].replace(Bt, n2).replace(o7, c4));
  }), i3.prefix && l6.push(at2), l6.push(Xr);
  var h5 = function(p5, d4, v9, A12) {
    d4 === void 0 && (d4 = ""), v9 === void 0 && (v9 = ""), A12 === void 0 && (A12 = "&"), e = A12, n2 = d4, o7 = new RegExp("\\".concat(n2, "\\b"), "g");
    var T10 = p5.replace(zt, ""), P5 = yr2(v9 || d4 ? "".concat(v9, " ").concat(d4, " { ").concat(T10, " }") : T10);
    i3.namespace && (P5 = Xe3(P5, i3.namespace));
    var G10 = [];
    return sr(P5, ct3(l6.concat(nt2(function(g8) {
      return G10.push(g8);
    })))), G10;
  };
  return h5.hash = a6.length ? a6.reduce(function(p5, d4) {
    return d4.name || E11(15), M5(p5, d4.name);
  }, Le4).toString() : "", h5;
}
var Ke4 = new $3();
var ge6 = Ze3();
var Ce4 = Qe.createContext({
  shouldForwardProp: void 0,
  styleSheet: Ke4,
  stylis: ge6
});
var rn = Ce4.Consumer;
var $t = Qe.createContext(void 0);
function ae5() {
  return Ie(Ce4);
}
function Gt(t) {
  var e = Ge(t.stylisPlugins), n2 = e[0], o7 = e[1], r4 = ae5().styleSheet, s3 = be(function() {
    var a6 = r4;
    return t.sheet ? a6 = t.sheet : t.target && (a6 = a6.reconstructWithOptions({
      target: t.target
    }, false)), t.disableCSSOMInjection && (a6 = a6.reconstructWithOptions({
      useCSSOMInjection: false
    })), a6;
  }, [
    t.disableCSSOMInjection,
    t.sheet,
    t.target,
    r4
  ]), i3 = be(function() {
    return Ze3({
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
    D7(n2, t.stylisPlugins) || o7(t.stylisPlugins);
  }, [
    t.stylisPlugins
  ]);
  var u6 = be(function() {
    return {
      shouldForwardProp: t.shouldForwardProp,
      styleSheet: s3,
      stylis: i3
    };
  }, [
    t.shouldForwardProp,
    s3,
    i3
  ]);
  return Qe.createElement(Ce4.Provider, {
    value: u6
  }, Qe.createElement($t.Provider, {
    value: i3
  }, t.children));
}
var Qe4 = function() {
  function t(e, n2) {
    var o7 = this;
    this.inject = function(r4, s3) {
      s3 === void 0 && (s3 = ge6);
      var i3 = o7.name + s3.hash;
      r4.hasNameForId(o7.id, i3) || r4.insertRules(o7.id, i3, s3(o7.rules, i3, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n2, _e5(this, function() {
      throw E11(12, String(o7.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = ge6), this.name + e.hash;
  }, t;
}();
var Lt3 = function(t) {
  return t >= "A" && t <= "Z";
};
function Me4(t) {
  for (var e = "", n2 = 0; n2 < t.length; n2++) {
    var o7 = t[n2];
    if (n2 === 1 && o7 === "-" && t[0] === "-") return t;
    Lt3(o7) ? e += "-" + o7.toLowerCase() : e += o7;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var et3 = function(t) {
  return t == null || t === false || t === "";
};
var tt4 = function(t) {
  var e, n2, o7 = [];
  for (var r4 in t) {
    var s3 = t[r4];
    t.hasOwnProperty(r4) && !et3(s3) && (Array.isArray(s3) && s3.isCss || j9(s3) ? o7.push("".concat(Me4(r4), ":"), s3, ";") : U4(s3) ? o7.push.apply(o7, M4(M4([
      "".concat(r4, " {")
    ], tt4(s3), false), [
      "}"
    ], false)) : o7.push("".concat(Me4(r4), ": ").concat((e = r4, (n2 = s3) == null || typeof n2 == "boolean" || n2 === "" ? "" : typeof n2 != "number" || n2 === 0 || e in o4 || e.startsWith("--") ? String(n2).trim() : "".concat(n2, "px")), ";")));
  }
  return o7;
};
function D9(t, e, n2, o7) {
  if (et3(t)) return [];
  if (Pe6(t)) return [
    ".".concat(t.styledComponentId)
  ];
  if (j9(t)) {
    if (!j9(s3 = t) || s3.prototype && s3.prototype.isReactComponent || !e) return [
      t
    ];
    var r4 = t(e);
    return D9(r4, e, n2, o7);
  }
  var s3;
  return t instanceof Qe4 ? n2 ? (t.inject(n2, o7), [
    t.getName(o7)
  ]) : [
    t
  ] : U4(t) ? tt4(t) : Array.isArray(t) ? Array.prototype.concat.apply(ce5, t.map(function(i3) {
    return D9(i3, e, n2, o7);
  })) : [
    t.toString()
  ];
}
function nt3(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n2 = t[e];
    if (j9(n2) && !Pe6(n2)) return false;
  }
  return true;
}
var Yt3 = Ye4(B8);
var Wt2 = function() {
  function t(e, n2, o7) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (o7 === void 0 || o7.isStatic) && nt3(e), this.componentId = n2, this.baseHash = M5(Yt3, n2), this.baseStyle = o7, $3.registerId(n2);
  }
  return t.prototype.generateAndInjectStyles = function(e, n2, o7) {
    var r4 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n2, o7) : "";
    if (this.isStatic && !o7.hash) if (this.staticRulesId && n2.hasNameForId(this.componentId, this.staticRulesId)) r4 = x7(r4, this.staticRulesId);
    else {
      var s3 = H7(D9(this.rules, e, n2, o7)), i3 = me7(M5(this.baseHash, s3) >>> 0);
      if (!n2.hasNameForId(this.componentId, i3)) {
        var u6 = o7(s3, ".".concat(i3), void 0, this.componentId);
        n2.insertRules(this.componentId, i3, u6);
      }
      r4 = x7(r4, i3), this.staticRulesId = i3;
    }
    else {
      for (var a6 = M5(this.baseHash, o7.hash), c4 = "", l6 = 0; l6 < this.rules.length; l6++) {
        var h5 = this.rules[l6];
        if (typeof h5 == "string") c4 += h5;
        else if (h5) {
          var p5 = H7(D9(h5, e, n2, o7));
          a6 = M5(a6, p5 + l6), c4 += p5;
        }
      }
      if (c4) {
        var d4 = me7(a6 >>> 0);
        n2.hasNameForId(this.componentId, d4) || n2.insertRules(this.componentId, d4, o7(c4, ".".concat(d4), void 0, this.componentId)), r4 = x7(r4, d4);
      }
    }
    return r4;
  }, t;
}();
var V5 = Qe.createContext(void 0);
var sn2 = V5.Consumer;
function cn2(t) {
  var e = Qe.useContext(V5), n2 = be(function() {
    return function(o7, r4) {
      if (!o7) throw E11(14);
      if (j9(o7)) {
        var s3 = o7(r4);
        return s3;
      }
      if (Array.isArray(o7) || typeof o7 != "object") throw E11(8);
      return r4 ? m4(m4({}, r4), o7) : o7;
    }(t.theme, e);
  }, [
    t.theme,
    e
  ]);
  return t.children ? Qe.createElement(V5.Provider, {
    value: n2
  }, t.children) : null;
}
var fe4 = {};
function qt(t, e, n2) {
  var o7 = Pe6(t), r4 = t, s3 = !he5(t), i3 = e.attrs, u6 = i3 === void 0 ? ce5 : i3, a6 = e.componentId, c4 = a6 === void 0 ? function(S10, b10) {
    var y10 = typeof S10 != "string" ? "sc" : De3(S10);
    fe4[y10] = (fe4[y10] || 0) + 1;
    var N7 = "".concat(y10, "-").concat(be4(B8 + y10 + fe4[y10]));
    return b10 ? "".concat(b10, "-").concat(N7) : N7;
  }(e.displayName, e.parentComponentId) : a6, l6 = e.displayName, h5 = l6 === void 0 ? function(S10) {
    return he5(S10) ? "styled.".concat(S10) : "Styled(".concat(We4(S10), ")");
  }(t) : l6, p5 = e.displayName && e.componentId ? "".concat(De3(e.displayName), "-").concat(e.componentId) : e.componentId || c4, d4 = o7 && r4.attrs ? r4.attrs.concat(u6).filter(Boolean) : u6, v9 = e.shouldForwardProp;
  if (o7 && r4.shouldForwardProp) {
    var A12 = r4.shouldForwardProp;
    if (e.shouldForwardProp) {
      var T10 = e.shouldForwardProp;
      v9 = function(S10, b10) {
        return A12(S10, b10) && T10(S10, b10);
      };
    } else v9 = A12;
  }
  var P5 = new Wt2(n2, p5, o7 ? r4.componentStyle : void 0);
  function G10(S10, b10) {
    return function(y10, N7, R7) {
      var L3 = y10.attrs, rt4 = y10.componentStyle, st4 = y10.defaultProps, it4 = y10.foldedComponentIds, at3 = y10.styledComponentId, ct4 = y10.target, ut4 = Qe.useContext(V5), lt2 = ae5(), ue4 = y10.shouldForwardProp || lt2.shouldForwardProp, Ie4 = Ee5(N7, ut4, st4) || z8, _8 = function(X7, W6, Z5) {
        for (var q10, k10 = m4(m4({}, W6), {
          className: void 0,
          theme: Z5
        }), pe4 = 0; pe4 < X7.length; pe4 += 1) {
          var K8 = j9(q10 = X7[pe4]) ? q10(k10) : q10;
          for (var O6 in K8) k10[O6] = O6 === "className" ? x7(k10[O6], K8[O6]) : O6 === "style" ? m4(m4({}, k10[O6]), K8[O6]) : K8[O6];
        }
        return W6.className && (k10.className = x7(k10.className, W6.className)), k10;
      }(L3, N7, Ie4), J6 = _8.as || ct4, Y7 = {};
      for (var I10 in _8) _8[I10] === void 0 || I10[0] === "$" || I10 === "as" || I10 === "theme" && _8.theme === Ie4 || (I10 === "forwardedAs" ? Y7.as = _8.forwardedAs : ue4 && !ue4(I10, J6) || (Y7[I10] = _8[I10]));
      var Oe5 = function(X7, W6) {
        var Z5 = ae5(), q10 = X7.generateAndInjectStyles(W6, Z5.styleSheet, Z5.stylis);
        return q10;
      }(rt4, _8), le4 = x7(it4, at3);
      return Oe5 && (le4 += " " + Oe5), _8.className && (le4 += " " + _8.className), Y7[he5(J6) && !Ge4.has(J6) ? "class" : "className"] = le4, R7 && (Y7.ref = R7), Ce(J6, Y7);
    }(g8, S10, b10);
  }
  G10.displayName = h5;
  var g8 = Qe.forwardRef(G10);
  return g8.attrs = d4, g8.componentStyle = P5, g8.displayName = h5, g8.shouldForwardProp = v9, g8.foldedComponentIds = o7 ? x7(r4.foldedComponentIds, r4.styledComponentId) : "", g8.styledComponentId = p5, g8.target = o7 ? r4.target : t, Object.defineProperty(g8, "defaultProps", {
    get: function() {
      return this._foldedDefaultProps;
    },
    set: function(S10) {
      this._foldedDefaultProps = o7 ? function(b10) {
        for (var y10 = [], N7 = 1; N7 < arguments.length; N7++) y10[N7 - 1] = arguments[N7];
        for (var R7 = 0, L3 = y10; R7 < L3.length; R7++) ye5(b10, L3[R7], true);
        return b10;
      }({}, r4.defaultProps, S10) : S10;
    }
  }), _e5(g8, function() {
    return ".".concat(g8.styledComponentId);
  }), s3 && Ne4(g8, t, {
    attrs: true,
    componentStyle: true,
    displayName: true,
    foldedComponentIds: true,
    shouldForwardProp: true,
    styledComponentId: true,
    target: true
  }), g8;
}
function Fe3(t, e) {
  for (var n2 = [
    t[0]
  ], o7 = 0, r4 = e.length; o7 < r4; o7 += 1) n2.push(e[o7], t[o7 + 1]);
  return n2;
}
var Be4 = function(t) {
  return Object.assign(t, {
    isCss: true
  });
};
function Ae3(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  if (j9(t) || U4(t)) return Be4(D9(Fe3(ce5, M4([
    t
  ], e, true))));
  var o7 = t;
  return e.length === 0 && o7.length === 1 && typeof o7[0] == "string" ? D9(o7) : Be4(D9(Fe3(o7, e)));
}
function Se4(t, e, n2) {
  if (n2 === void 0 && (n2 = z8), !e) throw E11(1, e);
  var o7 = function(r4) {
    for (var s3 = [], i3 = 1; i3 < arguments.length; i3++) s3[i3 - 1] = arguments[i3];
    return t(e, n2, Ae3.apply(void 0, M4([
      r4
    ], s3, false)));
  };
  return o7.attrs = function(r4) {
    return Se4(t, e, m4(m4({}, n2), {
      attrs: Array.prototype.concat(n2.attrs, r4).filter(Boolean)
    }));
  }, o7.withConfig = function(r4) {
    return Se4(t, e, m4(m4({}, n2), r4));
  }, o7;
}
var ot2 = function(t) {
  return Se4(qt, t);
};
var Ht2 = ot2;
Ge4.forEach(function(t) {
  Ht2[t] = ot2(t);
});
var Ut3 = function() {
  function t(e, n2) {
    this.rules = e, this.componentId = n2, this.isStatic = nt3(e), $3.registerId(this.componentId + 1);
  }
  return t.prototype.createStyles = function(e, n2, o7, r4) {
    var s3 = r4(H7(D9(this.rules, n2, o7, r4)), ""), i3 = this.componentId + e;
    o7.insertRules(i3, i3, s3);
  }, t.prototype.removeStyles = function(e, n2) {
    n2.clearRules(this.componentId + e);
  }, t.prototype.renderStyles = function(e, n2, o7, r4) {
    e > 2 && $3.registerId(this.componentId + e), this.removeStyles(e, o7), this.createStyles(e, n2, o7, r4);
  }, t;
}();
function un2(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  var o7 = Ae3.apply(void 0, M4([
    t
  ], e, false)), r4 = "sc-global-".concat(be4(JSON.stringify(o7))), s3 = new Ut3(o7, r4), i3 = function(a6) {
    var c4 = ae5(), l6 = Qe.useContext(V5), h5 = Qe.useRef(c4.styleSheet.allocateGSInstance(r4)).current;
    return c4.styleSheet.server && u6(h5, a6, c4.styleSheet, l6, c4.stylis), Qe.useLayoutEffect(function() {
      if (!c4.styleSheet.server) return u6(h5, a6, c4.styleSheet, l6, c4.stylis), function() {
        return s3.removeStyles(h5, c4.styleSheet);
      };
    }, [
      h5,
      a6,
      c4.styleSheet,
      l6,
      c4.stylis
    ]), null;
  };
  function u6(a6, c4, l6, h5, p5) {
    if (s3.isStatic) s3.renderStyles(a6, vt2, l6, p5);
    else {
      var d4 = m4(m4({}, c4), {
        theme: Ee5(c4, h5, i3.defaultProps)
      });
      s3.renderStyles(a6, d4, l6, p5);
    }
  }
  return Qe.memo(i3);
}
function ln2(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++) e[n2 - 1] = arguments[n2];
  var o7 = H7(Ae3.apply(void 0, M4([
    t
  ], e, false))), r4 = be4(o7);
  return new Qe4(r4, o7);
}
var dn = function() {
  function t() {
    var e = this;
    this._emitSheetCSS = function() {
      var n2 = e.instance.toString();
      if (!n2) return "";
      var o7 = ve5(), r4 = H7([
        o7 && 'nonce="'.concat(o7, '"'),
        "".concat(C5, '="true"'),
        "".concat(re4, '="').concat(B8, '"')
      ].filter(Boolean), " ");
      return "<style ".concat(r4, ">").concat(n2, "</style>");
    }, this.getStyleTags = function() {
      if (e.sealed) throw E11(2);
      return e._emitSheetCSS();
    }, this.getStyleElement = function() {
      var n2;
      if (e.sealed) throw E11(2);
      var o7 = e.instance.toString();
      if (!o7) return [];
      var r4 = ((n2 = {})[C5] = "", n2[re4] = B8, n2.dangerouslySetInnerHTML = {
        __html: o7
      }, n2), s3 = ve5();
      return s3 && (r4.nonce = s3), [
        Qe.createElement("style", m4({}, r4, {
          key: "sc-0-0"
        }))
      ];
    }, this.seal = function() {
      e.sealed = true;
    }, this.instance = new $3({
      isServer: true
    }), this.sealed = false;
  }
  return t.prototype.collectStyles = function(e) {
    if (this.sealed) throw E11(2);
    return Qe.createElement(Gt, {
      sheet: this.instance
    }, e);
  }, t.prototype.interleaveWithNodeStream = function(e) {
    throw E11(3);
  }, t;
}();
var fn = "__sc-".concat(C5, "__");

// deno:https://esm.sh/dayjs@1.11.13/denonext/dayjs.mjs
var X6 = Object.create;
var E12 = Object.defineProperty;
var tt5 = Object.getOwnPropertyDescriptor;
var et4 = Object.getOwnPropertyNames;
var nt4 = Object.getPrototypeOf;
var rt3 = Object.prototype.hasOwnProperty;
var it3 = (h5, c4) => () => (c4 || h5((c4 = {
  exports: {}
}).exports, c4), c4.exports);
var st3 = (h5, c4, g8, _8) => {
  if (c4 && typeof c4 == "object" || typeof c4 == "function") for (let M7 of et4(c4)) !rt3.call(h5, M7) && M7 !== g8 && E12(h5, M7, {
    get: () => c4[M7],
    enumerable: !(_8 = tt5(c4, M7)) || _8.enumerable
  });
  return h5;
};
var ut3 = (h5, c4, g8) => (g8 = h5 != null ? X6(nt4(h5)) : {}, st3(c4 || !h5 || !h5.__esModule ? E12(g8, "default", {
  value: h5,
  enumerable: true
}) : g8, h5));
var P3 = it3((F6, J6) => {
  (function(h5, c4) {
    typeof F6 == "object" && typeof J6 < "u" ? J6.exports = c4() : typeof define == "function" && define.amd ? define(c4) : (h5 = typeof globalThis < "u" ? globalThis : h5 || self).dayjs = c4();
  })(F6, function() {
    "use strict";
    var h5 = 1e3, c4 = 6e4, g8 = 36e5, _8 = "millisecond", M7 = "second", k10 = "minute", T10 = "hour", D11 = "day", W6 = "week", v9 = "month", z10 = "quarter", p5 = "year", Y7 = "date", V6 = "Invalid Date", Q5 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, G10 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K8 = {
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
    }, N7 = function(i3, n2, t) {
      var r4 = String(i3);
      return !r4 || r4.length >= n2 ? i3 : "" + Array(n2 + 1 - r4.length).join(t) + i3;
    }, R7 = {
      s: N7,
      z: function(i3) {
        var n2 = -i3.utcOffset(), t = Math.abs(n2), r4 = Math.floor(t / 60), e = t % 60;
        return (n2 <= 0 ? "+" : "-") + N7(r4, 2, "0") + ":" + N7(e, 2, "0");
      },
      m: function i3(n2, t) {
        if (n2.date() < t.date()) return -i3(t, n2);
        var r4 = 12 * (t.year() - n2.year()) + (t.month() - n2.month()), e = n2.clone().add(r4, v9), s3 = t - e < 0, u6 = n2.clone().add(r4 + (s3 ? -1 : 1), v9);
        return +(-(r4 + (t - e) / (s3 ? e - u6 : u6 - e)) || 0);
      },
      a: function(i3) {
        return i3 < 0 ? Math.ceil(i3) || 0 : Math.floor(i3);
      },
      p: function(i3) {
        return {
          M: v9,
          y: p5,
          w: W6,
          d: D11,
          D: Y7,
          h: T10,
          m: k10,
          s: M7,
          ms: _8,
          Q: z10
        }[i3] || String(i3 || "").toLowerCase().replace(/s$/, "");
      },
      u: function(i3) {
        return i3 === void 0;
      }
    }, j12 = "en", w8 = {};
    w8[j12] = K8;
    var q10 = "$isDayjsObject", U5 = function(i3) {
      return i3 instanceof A12 || !(!i3 || !i3[q10]);
    }, C8 = function i3(n2, t, r4) {
      var e;
      if (!n2) return j12;
      if (typeof n2 == "string") {
        var s3 = n2.toLowerCase();
        w8[s3] && (e = s3), t && (w8[s3] = t, e = s3);
        var u6 = n2.split("-");
        if (!e && u6.length > 1) return i3(u6[0]);
      } else {
        var o7 = n2.name;
        w8[o7] = n2, e = o7;
      }
      return !r4 && e && (j12 = e), e || !r4 && j12;
    }, d4 = function(i3, n2) {
      if (U5(i3)) return i3.clone();
      var t = typeof n2 == "object" ? n2 : {};
      return t.date = i3, t.args = arguments, new A12(t);
    }, a6 = R7;
    a6.l = C8, a6.i = U5, a6.w = function(i3, n2) {
      return d4(i3, {
        locale: n2.$L,
        utc: n2.$u,
        x: n2.$x,
        $offset: n2.$offset
      });
    };
    var A12 = function() {
      function i3(t) {
        this.$L = C8(t.locale, null, true), this.parse(t), this.$x = this.$x || t.x || {}, this[q10] = true;
      }
      var n2 = i3.prototype;
      return n2.parse = function(t) {
        this.$d = function(r4) {
          var e = r4.date, s3 = r4.utc;
          if (e === null) return /* @__PURE__ */ new Date(NaN);
          if (a6.u(e)) return /* @__PURE__ */ new Date();
          if (e instanceof Date) return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var u6 = e.match(Q5);
            if (u6) {
              var o7 = u6[2] - 1 || 0, f4 = (u6[7] || "0").substring(0, 3);
              return s3 ? new Date(Date.UTC(u6[1], o7, u6[3] || 1, u6[4] || 0, u6[5] || 0, u6[6] || 0, f4)) : new Date(u6[1], o7, u6[3] || 1, u6[4] || 0, u6[5] || 0, u6[6] || 0, f4);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, n2.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n2.$utils = function() {
        return a6;
      }, n2.isValid = function() {
        return this.$d.toString() !== V6;
      }, n2.isSame = function(t, r4) {
        var e = d4(t);
        return this.startOf(r4) <= e && e <= this.endOf(r4);
      }, n2.isAfter = function(t, r4) {
        return d4(t) < this.startOf(r4);
      }, n2.isBefore = function(t, r4) {
        return this.endOf(r4) < d4(t);
      }, n2.$g = function(t, r4, e) {
        return a6.u(t) ? this[r4] : this.set(e, t);
      }, n2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n2.valueOf = function() {
        return this.$d.getTime();
      }, n2.startOf = function(t, r4) {
        var e = this, s3 = !!a6.u(r4) || r4, u6 = a6.p(t), o7 = function(b10, m6) {
          var S10 = a6.w(e.$u ? Date.UTC(e.$y, m6, b10) : new Date(e.$y, m6, b10), e);
          return s3 ? S10 : S10.endOf(D11);
        }, f4 = function(b10, m6) {
          return a6.w(e.toDate()[b10].apply(e.toDate("s"), (s3 ? [
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
        }, $4 = this.$W, l6 = this.$M, y10 = this.$D, H10 = "set" + (this.$u ? "UTC" : "");
        switch (u6) {
          case p5:
            return s3 ? o7(1, 0) : o7(31, 11);
          case v9:
            return s3 ? o7(1, l6) : o7(0, l6 + 1);
          case W6:
            var O6 = this.$locale().weekStart || 0, x9 = ($4 < O6 ? $4 + 7 : $4) - O6;
            return o7(s3 ? y10 - x9 : y10 + (6 - x9), l6);
          case D11:
          case Y7:
            return f4(H10 + "Hours", 0);
          case T10:
            return f4(H10 + "Minutes", 1);
          case k10:
            return f4(H10 + "Seconds", 2);
          case M7:
            return f4(H10 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n2.endOf = function(t) {
        return this.startOf(t, false);
      }, n2.$set = function(t, r4) {
        var e, s3 = a6.p(t), u6 = "set" + (this.$u ? "UTC" : ""), o7 = (e = {}, e[D11] = u6 + "Date", e[Y7] = u6 + "Date", e[v9] = u6 + "Month", e[p5] = u6 + "FullYear", e[T10] = u6 + "Hours", e[k10] = u6 + "Minutes", e[M7] = u6 + "Seconds", e[_8] = u6 + "Milliseconds", e)[s3], f4 = s3 === D11 ? this.$D + (r4 - this.$W) : r4;
        if (s3 === v9 || s3 === p5) {
          var $4 = this.clone().set(Y7, 1);
          $4.$d[o7](f4), $4.init(), this.$d = $4.set(Y7, Math.min(this.$D, $4.daysInMonth())).$d;
        } else o7 && this.$d[o7](f4);
        return this.init(), this;
      }, n2.set = function(t, r4) {
        return this.clone().$set(t, r4);
      }, n2.get = function(t) {
        return this[a6.p(t)]();
      }, n2.add = function(t, r4) {
        var e, s3 = this;
        t = Number(t);
        var u6 = a6.p(r4), o7 = function(l6) {
          var y10 = d4(s3);
          return a6.w(y10.date(y10.date() + Math.round(l6 * t)), s3);
        };
        if (u6 === v9) return this.set(v9, this.$M + t);
        if (u6 === p5) return this.set(p5, this.$y + t);
        if (u6 === D11) return o7(1);
        if (u6 === W6) return o7(7);
        var f4 = (e = {}, e[k10] = c4, e[T10] = g8, e[M7] = h5, e)[u6] || 1, $4 = this.$d.getTime() + t * f4;
        return a6.w($4, this);
      }, n2.subtract = function(t, r4) {
        return this.add(-1 * t, r4);
      }, n2.format = function(t) {
        var r4 = this, e = this.$locale();
        if (!this.isValid()) return e.invalidDate || V6;
        var s3 = t || "YYYY-MM-DDTHH:mm:ssZ", u6 = a6.z(this), o7 = this.$H, f4 = this.$m, $4 = this.$M, l6 = e.weekdays, y10 = e.months, H10 = e.meridiem, O6 = function(m6, S10, L3, I10) {
          return m6 && (m6[S10] || m6(r4, s3)) || L3[S10].slice(0, I10);
        }, x9 = function(m6) {
          return a6.s(o7 % 12 || 12, m6, "0");
        }, b10 = H10 || function(m6, S10, L3) {
          var I10 = m6 < 12 ? "AM" : "PM";
          return L3 ? I10.toLowerCase() : I10;
        };
        return s3.replace(G10, function(m6, S10) {
          return S10 || function(L3) {
            switch (L3) {
              case "YY":
                return String(r4.$y).slice(-2);
              case "YYYY":
                return a6.s(r4.$y, 4, "0");
              case "M":
                return $4 + 1;
              case "MM":
                return a6.s($4 + 1, 2, "0");
              case "MMM":
                return O6(e.monthsShort, $4, y10, 3);
              case "MMMM":
                return O6(y10, $4);
              case "D":
                return r4.$D;
              case "DD":
                return a6.s(r4.$D, 2, "0");
              case "d":
                return String(r4.$W);
              case "dd":
                return O6(e.weekdaysMin, r4.$W, l6, 2);
              case "ddd":
                return O6(e.weekdaysShort, r4.$W, l6, 3);
              case "dddd":
                return l6[r4.$W];
              case "H":
                return String(o7);
              case "HH":
                return a6.s(o7, 2, "0");
              case "h":
                return x9(1);
              case "hh":
                return x9(2);
              case "a":
                return b10(o7, f4, true);
              case "A":
                return b10(o7, f4, false);
              case "m":
                return String(f4);
              case "mm":
                return a6.s(f4, 2, "0");
              case "s":
                return String(r4.$s);
              case "ss":
                return a6.s(r4.$s, 2, "0");
              case "SSS":
                return a6.s(r4.$ms, 3, "0");
              case "Z":
                return u6;
            }
            return null;
          }(m6) || u6.replace(":", "");
        });
      }, n2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n2.diff = function(t, r4, e) {
        var s3, u6 = this, o7 = a6.p(r4), f4 = d4(t), $4 = (f4.utcOffset() - this.utcOffset()) * c4, l6 = this - f4, y10 = function() {
          return a6.m(u6, f4);
        };
        switch (o7) {
          case p5:
            s3 = y10() / 12;
            break;
          case v9:
            s3 = y10();
            break;
          case z10:
            s3 = y10() / 3;
            break;
          case W6:
            s3 = (l6 - $4) / 6048e5;
            break;
          case D11:
            s3 = (l6 - $4) / 864e5;
            break;
          case T10:
            s3 = l6 / g8;
            break;
          case k10:
            s3 = l6 / c4;
            break;
          case M7:
            s3 = l6 / h5;
            break;
          default:
            s3 = l6;
        }
        return e ? s3 : a6.a(s3);
      }, n2.daysInMonth = function() {
        return this.endOf(v9).$D;
      }, n2.$locale = function() {
        return w8[this.$L];
      }, n2.locale = function(t, r4) {
        if (!t) return this.$L;
        var e = this.clone(), s3 = C8(t, r4, true);
        return s3 && (e.$L = s3), e;
      }, n2.clone = function() {
        return a6.w(this.$d, this);
      }, n2.toDate = function() {
        return new Date(this.valueOf());
      }, n2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n2.toISOString = function() {
        return this.$d.toISOString();
      }, n2.toString = function() {
        return this.$d.toUTCString();
      }, i3;
    }(), B10 = A12.prototype;
    return d4.prototype = B10, [
      [
        "$ms",
        _8
      ],
      [
        "$s",
        M7
      ],
      [
        "$m",
        k10
      ],
      [
        "$H",
        T10
      ],
      [
        "$W",
        D11
      ],
      [
        "$M",
        v9
      ],
      [
        "$y",
        p5
      ],
      [
        "$D",
        Y7
      ]
    ].forEach(function(i3) {
      B10[i3[1]] = function(n2) {
        return this.$g(n2, i3[0], i3[1]);
      };
    }), d4.extend = function(i3, n2) {
      return i3.$i || (i3(n2, A12, d4), i3.$i = true), d4;
    }, d4.locale = C8, d4.isDayjs = U5, d4.unix = function(i3) {
      return d4(1e3 * i3);
    }, d4.en = w8[j12], d4.Ls = w8, d4.p = {}, d4;
  });
});
var Z4 = ut3(P3());
var ot3 = Z4.default ?? Z4;

// deno:https://esm.sh/dayjs@1.11.13/denonext/plugin/relativeTime.mjs
var k9 = Object.create;
var N6 = Object.defineProperty;
var x8 = Object.getOwnPropertyDescriptor;
var q9 = Object.getOwnPropertyNames;
var z9 = Object.getPrototypeOf;
var A8 = Object.prototype.hasOwnProperty;
var C6 = (r4, t) => () => (t || r4((t = {
  exports: {}
}).exports, t), t.exports);
var D10 = (r4, t, n2, o7) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i3 of q9(t)) !A8.call(r4, i3) && i3 !== n2 && N6(r4, i3, {
    get: () => t[i3],
    enumerable: !(o7 = x8(t, i3)) || o7.enumerable
  });
  return r4;
};
var E13 = (r4, t, n2) => (n2 = r4 != null ? k9(z9(r4)) : {}, D10(t || !r4 || !r4.__esModule ? N6(n2, "default", {
  value: r4,
  enumerable: true
}) : n2, r4));
var _7 = C6((g8, T10) => {
  (function(r4, t) {
    typeof g8 == "object" && typeof T10 < "u" ? T10.exports = t() : typeof define == "function" && define.amd ? define(t) : (r4 = typeof globalThis < "u" ? globalThis : r4 || self).dayjs_plugin_relativeTime = t();
  })(g8, function() {
    "use strict";
    return function(r4, t, n2) {
      r4 = r4 || {};
      var o7 = t.prototype, i3 = {
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
      function j12(e, d4, a6, m6) {
        return o7.fromToBase(e, d4, a6, m6);
      }
      n2.en.relativeTime = i3, o7.fromToBase = function(e, d4, a6, m6, B10) {
        for (var h5, l6, c4, y10 = a6.$locale().relativeTime || i3, p5 = r4.thresholds || [
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
        ], $4 = p5.length, s3 = 0; s3 < $4; s3 += 1) {
          var f4 = p5[s3];
          f4.d && (h5 = m6 ? n2(e).diff(a6, f4.d, true) : a6.diff(e, f4.d, true));
          var u6 = (r4.rounding || Math.round)(Math.abs(h5));
          if (c4 = h5 > 0, u6 <= f4.r || !f4.r) {
            u6 <= 1 && s3 > 0 && (f4 = p5[s3 - 1]);
            var M7 = y10[f4.l];
            B10 && (u6 = B10("" + u6)), l6 = typeof M7 == "string" ? M7.replace("%d", u6) : M7(u6, d4, f4.l, c4);
            break;
          }
        }
        if (d4) return l6;
        var v9 = c4 ? y10.future : y10.past;
        return typeof v9 == "function" ? v9(l6) : v9.replace("%s", l6);
      }, o7.to = function(e, d4) {
        return j12(e, d4, this, true);
      }, o7.from = function(e, d4) {
        return j12(e, d4, this);
      };
      var w8 = function(e) {
        return e.$u ? n2.utc() : n2();
      };
      o7.toNow = function(e) {
        return this.to(w8(this), e);
      }, o7.fromNow = function(e) {
        return this.from(w8(this), e);
      };
    };
  });
});
var b7 = E13(_7());
var G9 = b7.default ?? b7;

// deno:https://esm.sh/dayjs@1.11.13/denonext/plugin/isBetween.mjs
var B9 = Object.create;
var l4 = Object.defineProperty;
var m5 = Object.getOwnPropertyDescriptor;
var j10 = Object.getOwnPropertyNames;
var A9 = Object.getPrototypeOf;
var b8 = Object.prototype.hasOwnProperty;
var g6 = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);
var w7 = (t, e, i3, o7) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n2 of j10(e)) !b8.call(t, n2) && n2 !== i3 && l4(t, n2, {
    get: () => e[n2],
    enumerable: !(o7 = m5(e, n2)) || o7.enumerable
  });
  return t;
};
var T8 = (t, e, i3) => (i3 = t != null ? B9(A9(t)) : {}, w7(e || !t || !t.__esModule ? l4(i3, "default", {
  value: t,
  enumerable: true
}) : i3, t));
var y8 = g6((d4, h5) => {
  (function(t, e) {
    typeof d4 == "object" && typeof h5 < "u" ? h5.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_isBetween = e();
  })(d4, function() {
    "use strict";
    return function(t, e, i3) {
      e.prototype.isBetween = function(o7, n2, f4, u6) {
        var s3 = i3(o7), r4 = i3(n2), p5 = (u6 = u6 || "()")[0] === "(", a6 = u6[1] === ")";
        return (p5 ? this.isAfter(s3, f4) : !this.isBefore(s3, f4)) && (a6 ? this.isBefore(r4, f4) : !this.isAfter(r4, f4)) || (p5 ? this.isBefore(s3, f4) : !this.isAfter(s3, f4)) && (a6 ? this.isAfter(r4, f4) : !this.isBefore(r4, f4));
      };
    };
  });
});
var c3 = T8(y8());
var v8 = c3.default ?? c3;

// deno:https://esm.sh/dayjs@1.11.13/denonext/plugin/localizedFormat.mjs
var y9 = Object.create;
var Y6 = Object.defineProperty;
var T9 = Object.getOwnPropertyDescriptor;
var g7 = Object.getOwnPropertyNames;
var j11 = Object.getPrototypeOf;
var A10 = Object.prototype.hasOwnProperty;
var b9 = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
var H8 = (e, t, o7, i3) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n2 of g7(t)) !A10.call(e, n2) && n2 !== o7 && Y6(e, n2, {
    get: () => t[n2],
    enumerable: !(i3 = T9(t, n2)) || i3.enumerable
  });
  return e;
};
var S9 = (e, t, o7) => (o7 = e != null ? y9(j11(e)) : {}, H8(t || !e || !e.__esModule ? Y6(o7, "default", {
  value: e,
  enumerable: true
}) : o7, e));
var u5 = b9((a6, d4) => {
  (function(e, t) {
    typeof a6 == "object" && typeof d4 < "u" ? d4.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs_plugin_localizedFormat = t();
  })(a6, function() {
    "use strict";
    var e = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    return function(t, o7, i3) {
      var n2 = o7.prototype, c4 = n2.format;
      i3.en.formats = e, n2.format = function(r4) {
        r4 === void 0 && (r4 = "YYYY-MM-DDTHH:mm:ssZ");
        var m6 = this.$locale().formats, l6 = function(L3, s3) {
          return L3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_8, p5, f4) {
            var h5 = f4 && f4.toUpperCase();
            return p5 || s3[f4] || e[f4] || s3[h5].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x9, D11, v9) {
              return D11 || v9.slice(1);
            });
          });
        }(r4, m6 === void 0 ? {} : m6);
        return c4.call(this, l6);
      };
    };
  });
});
var M6 = S9(u5());
var C7 = M6.default ?? M6;

// src/dayjs.ts
ot3.extend(G9);
ot3.extend(v8);
ot3.extend(C7);

// src/global.tsx
var Color = {
  Bg: "#0a1929",
  BgSecondary: "#192533",
  Text: "white",
  Accent: "#ffab00"
};
var GlobalStyle = un2`
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
        })).results.map((r4) => ({
          id: r4.id,
          name: r4.name ?? r4.original_name,
          releaseDate: r4.first_air_date,
          posterPath: this.#inferPosterPath(r4.poster_path)
        })),
        movies: (await api.searchMovie({
          query
        })).results.map((r4) => ({
          id: r4.id,
          name: r4.title ?? r4.original_title,
          releaseDate: r4.release_date,
          posterPath: this.#inferPosterPath(r4.poster_path)
        }))
      };
    }
    return {
      shows: [],
      movies: []
    };
  }
  async fetchShows(ids) {
    return (await Promise.all(ids.map(async (id) => {
      const show = await this.#tmdbApi.tvSeriesDetails({
        series_id: id
      });
      if (show.success === false) {
        return void 0;
      }
      const episodes = (await Promise.all(show.seasons.filter((s3) => ot3(s3.air_date).isBetween(ot3().subtract(1, "year"), ot3().add(1, "year"))).flatMap(async (s3) => (await this.#tmdbApi.tvSeasonDetails({
        series_id: show.id,
        season_number: s3.season_number
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
    }))).filter((show) => show !== void 0);
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
        cast: show.credits.cast.map((c4) => ({
          ...c4,
          profile_path: this.#inferPosterPath(c4.profile_path)
        })),
        crew: show.credits.crew.map((c4) => ({
          ...c4,
          profile_path: this.#inferPosterPath(c4.profile_path)
        }))
      },
      networks: show.networks.map((n2) => ({
        ...n2,
        logo_path: this.#inferPosterPath(n2.logo_path)
      })),
      similar: {
        ...show.similar,
        results: show.similar.results.map((r4) => ({
          ...r4,
          poster_path: this.#inferPosterPath(r4.poster_path)
        }))
      }
    };
  }
  async fetchMovies(ids) {
    return (await Promise.all(ids.map(async (id) => {
      const movie = await this.#tmdbApi.movieDetails({
        movie_id: id
      });
      if (movie.success === false) {
        return void 0;
      }
      return {
        id: movie.id,
        name: movie.title ?? movie.original_title,
        releaseDate: movie.release_date,
        posterPath: this.#inferPosterPath(movie.poster_path),
        status: movie.status
      };
    }))).filter((movie) => movie !== void 0);
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
        cast: movie.credits.cast.map((c4) => ({
          ...c4,
          profile_path: this.#inferPosterPath(c4.profile_path)
        })),
        crew: movie.credits.crew.map((c4) => ({
          ...c4,
          profile_path: this.#inferPosterPath(c4.profile_path)
        }))
      },
      production_companies: movie.production_companies.map((pc) => ({
        ...pc,
        logo_path: this.#inferPosterPath(pc.logo_path)
      })),
      similar: {
        ...movie.similar,
        results: movie.similar.results.map((r4) => ({
          ...r4,
          poster_path: this.#inferPosterPath(r4.poster_path)
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
        profiles: person.images.profiles.map((p5) => ({
          ...p5,
          file_path: this.#inferPosterPath(p5.file_path)
        }))
      },
      tv_credits: {
        ...person.tv_credits,
        cast: person.tv_credits.cast.map((c4) => ({
          ...c4,
          poster_path: this.#inferPosterPath(c4.poster_path)
        }))
      },
      movie_credits: {
        ...person.movie_credits,
        cast: person.movie_credits.cast.map((c4) => ({
          ...c4,
          poster_path: this.#inferPosterPath(c4.poster_path)
        }))
      }
    };
  }
  async fetchTrending() {
    return {
      shows: (await this.#tmdbApi.trendingTv({
        time_window: "week"
      })).results.map((r4) => ({
        id: r4.id,
        name: r4.name ?? r4.original_name,
        releaseDate: r4.first_air_date,
        posterPath: this.#inferPosterPath(r4.poster_path)
      })),
      movies: (await this.#tmdbApi.trendingMovies({
        time_window: "week"
      })).results.map((r4) => ({
        id: r4.id,
        name: r4.title ?? r4.original_title,
        releaseDate: r4.release_date,
        posterPath: this.#inferPosterPath(r4.poster_path)
      }))
    };
  }
  async fetchF1() {
    const { races } = await (await fetch(`https://raw.githubusercontent.com/sportstimes/f1/refs/heads/main/_db/f1/${ot3().format("YYYY")}.json`)).json();
    return races.map((r4) => ({
      id: ot3(r4.sessions.gp).unix(),
      name: `${r4.name.replace("Grand Prix", "").trim()} Grand Prix`,
      description: r4.location,
      releaseDate: r4.sessions.gp,
      posterPath: "https://raw.githubusercontent.com/nashaddams/watcher/refs/heads/main/public/f1.svg"
    }));
  }
  async fetchF1Details(id) {
    const { races } = await (await fetch(`https://raw.githubusercontent.com/sportstimes/f1/refs/heads/main/_db/f1/${ot3().format("YYYY")}.json`)).json();
    const race = races.find((r4) => ot3(r4.sessions.gp).unix() === id);
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
(function(o7) {
  o7.X = "x", o7.Y = "y";
})(l5 || (l5 = {}));
var r3;
(function(o7) {
  o7.Up = "up", o7.Down = "down", o7.Left = "left", o7.Right = "right", o7.Still = "still";
})(r3 || (r3 = {}));
function H9(o7 = {}) {
  let { target: t = typeof window < "u" ? window : void 0, thr: S10 = 0, axis: n2 = l5.Y, scrollUp: a6 = n2 === l5.Y ? r3.Up : r3.Left, scrollDown: u6 = n2 === l5.Y ? r3.Down : r3.Right, still: Y7 = r3.Still } = o7, [W6, E14] = Ge(Y7), [L3, v9] = Ge({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }), f4 = Math.max(0, S10), i3 = ze(false), s3 = ze(0), d4 = He(() => {
    if (!t) return;
    let e;
    t instanceof Window ? e = n2 === l5.Y ? t.scrollY : t.scrollX : e = n2 === l5.Y ? t.scrollTop : t.scrollLeft, Math.abs(e - s3.current) >= f4 && (E14(e > s3.current ? u6 : a6), s3.current = Math.max(0, e)), i3.current = false;
  }, [
    t,
    n2,
    f4,
    u6,
    a6
  ]);
  return Le(() => {
    if (!t) {
      console.warn("useDetectScroll: target is not set. Falling back to window.");
      return;
    }
    let e = () => {
      if (!t) return;
      let w8 = t instanceof Window ? t.scrollY : t.scrollTop, h5 = t instanceof Window ? t.scrollX : t.scrollLeft, b10 = (t instanceof Window ? document.documentElement.scrollHeight - t.innerHeight : t.scrollHeight - t.clientHeight) - w8, D11 = (t instanceof Window ? document.documentElement.scrollWidth - t.innerWidth : t.scrollWidth - t.clientWidth) - h5;
      v9({
        top: w8,
        bottom: b10,
        left: h5,
        right: D11
      });
    };
    e();
    let c4 = t;
    return c4.addEventListener("scroll", e), () => {
      c4.removeEventListener("scroll", e);
    };
  }, [
    t
  ]), Le(() => {
    if (!t) {
      console.warn("useDetectScroll: target is not set. Falling back to window.");
      return;
    }
    t instanceof Window ? s3.current = n2 === l5.Y ? t.scrollY : t.scrollX : s3.current = n2 === l5.Y ? t.scrollTop : t.scrollLeft;
    let e = () => {
      i3.current || (window.requestAnimationFrame(d4), i3.current = true);
    }, c4 = t;
    return c4.addEventListener("scroll", e), () => c4.removeEventListener("scroll", e);
  }, [
    t,
    n2,
    d4
  ]), {
    scrollDir: W6,
    scrollPosition: L3
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
var Link = Ht2(qa2)`
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
  const { pathname } = xe3();
  const { scrollDir } = H9({
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
var Link2 = Ht2(qa2)`
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
      link ? /* @__PURE__ */ q(qa2, {
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
var loader = ln2`
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
      const { shows: s3, movies: m6 } = await api.search(query);
      setShows(s3);
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
          shows.map((s3) => /* @__PURE__ */ q(Item, {
            id: s3.id,
            name: s3.name,
            releaseDate: s3.releaseDate ? ot3(s3.releaseDate).format("YYYY") : "",
            posterPath: s3.posterPath,
            status: s3.status,
            action: showIds.includes(s3.id) ? /* @__PURE__ */ q(Icon2.Added, {}) : /* @__PURE__ */ q(Icon2.Add, {
              onClick: () => {
                addShow(s3.id);
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
          /* @__PURE__ */ q(qa2, {
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
      shows.sort((s1, s22) => s1.name.localeCompare(s22.name)).map((s3) => /* @__PURE__ */ q(Item, {
        id: s3.id,
        name: s3.name,
        releaseDate: s3.releaseDate ? ot3(s3.releaseDate).format("YYYY") : "",
        posterPath: s3.posterPath,
        status: s3.status,
        action: /* @__PURE__ */ q(Icon2.Remove, {
          onClick: () => removeShow(s3.id)
        }),
        link: `/show/${s3.id}`
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
      shows.map((s3) => /* @__PURE__ */ q(Item, {
        id: s3.id,
        name: s3.name,
        releaseDate: s3.releaseDate ? ot3(s3.releaseDate).format("YYYY") : "",
        posterPath: s3.posterPath,
        status: s3.status,
        action: showIds.includes(s3.id) ? /* @__PURE__ */ q(Icon2.Added, {}) : /* @__PURE__ */ q(Icon2.Add, {
          onClick: () => addShow(s3.id)
        }),
        link: `/show/${s3.id}`
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
var A11 = Ht2.a`
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
          /* @__PURE__ */ q(A11, {
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
var P4 = Ht2.p`
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
              i3.link ? /* @__PURE__ */ q(qa2, {
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
  const { id } = Tr2();
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
            genres.map((g8) => /* @__PURE__ */ q(Genre, {
              children: g8.name
            }, g8.id)),
            parseNetworkLogos(networks).map((logo) => /* @__PURE__ */ q(NetworkLogo, {
              src: logo
            }, logo)),
            /* @__PURE__ */ q(P4, {
              children: overview
            }),
            /* @__PURE__ */ C(Grid, {
              children: [
                /* @__PURE__ */ q("div", {
                  children: "Created by:"
                }),
                /* @__PURE__ */ q("div", {
                  children: created_by.map((c4) => c4.name).join(", ")
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
              items: credits?.cast.slice(0, 24).map((c4) => ({
                id: c4.id,
                posterPath: c4.profile_path,
                title: c4.name || c4.original_name,
                description: c4.character,
                link: `/person/${c4.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Crew",
              items: credits?.crew.filter((c4) => c4.job.includes("Producer")).slice(0, 24).map((c4) => ({
                id: c4.id,
                posterPath: c4.profile_path,
                title: c4.name || c4.original_name,
                description: c4.job,
                link: `/person/${c4.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Similar",
              items: similar?.results.slice(0, 24).map((r4) => ({
                id: r4.id,
                posterPath: r4.poster_path,
                title: r4.name || r4.original_name,
                description: r4.first_air_date ? ot3(r4.first_air_date).format("YYYY") : void 0,
                link: `/show/${r4.id}`
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
  const { id } = Tr2();
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
            genres.map((g8) => /* @__PURE__ */ q(Genre, {
              children: g8.name
            }, g8.id)),
            production_companies.filter((pc) => pc.logo_path).map((pc) => /* @__PURE__ */ q(NetworkLogo2, {
              src: pc.logo_path
            }, pc.id)),
            /* @__PURE__ */ q(P4, {
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
              items: credits?.cast.slice(0, 24).map((c4) => ({
                id: c4.id,
                posterPath: c4.profile_path,
                title: c4.name || c4.original_name,
                description: c4.character,
                link: `/person/${c4.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Crew",
              items: credits?.crew.filter((c4) => c4.job.includes("Producer")).slice(0, 24).map((c4) => ({
                id: c4.id,
                posterPath: c4.profile_path,
                title: c4.name || c4.original_name,
                description: c4.job,
                link: `/person/${c4.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Similar",
              items: similar?.results.slice(0, 24).map((r4) => ({
                id: r4.id,
                posterPath: r4.poster_path,
                title: r4.title || r4.original_title,
                description: r4.release_date ? ot3(r4.release_date).format("YYYY") : void 0,
                link: `/movie/${r4.id}`
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
  const { id } = Tr2();
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
            /* @__PURE__ */ q(P4, {
              style: {
                marginBottom: "24px"
              },
              children: biography
            }),
            /* @__PURE__ */ q(Gallery, {
              items: images?.profiles.slice(0, 24).map((p5) => ({
                posterPath: p5.file_path
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Shows",
              items: tv_credits?.cast.map((c4) => ({
                id: c4.id,
                posterPath: c4.poster_path,
                title: c4.name,
                description: c4.character,
                link: `/show/${c4.id}`
              }))
            }),
            /* @__PURE__ */ q(Gallery, {
              title: "Movies",
              items: movie_credits?.cast.map((c4) => ({
                id: c4.id,
                posterPath: c4.poster_path,
                title: c4.title,
                description: c4.character,
                link: `/movie/${c4.id}`
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
  const { id } = Tr2();
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
    ...shows.map((s3) => s3.episodes.map((e) => ({
      ...e,
      id: s3.id,
      link: `/show/${s3.id}`
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
  return /* @__PURE__ */ q(yc, {
    children: /* @__PURE__ */ C(cn2, {
      theme,
      children: [
        /* @__PURE__ */ q(Main, {
          children: /* @__PURE__ */ C(tu, {
            children: [
              /* @__PURE__ */ q(ni2, {
                index: true,
                element: /* @__PURE__ */ q(ItemList, {
                  title: "Recent",
                  items: recent
                })
              }),
              /* @__PURE__ */ q(ni2, {
                path: "/library",
                element: /* @__PURE__ */ q(Library, {
                  apiKey,
                  showIds: shows.map((s3) => s3.id),
                  movieIds: movies.map((m6) => m6.id),
                  shows,
                  movies,
                  addShow,
                  addMovie,
                  removeShow,
                  removeMovie
                })
              }),
              /* @__PURE__ */ q(ni2, {
                path: "/upcoming",
                element: /* @__PURE__ */ q(ItemList, {
                  title: "Upcoming",
                  items: upcoming
                })
              }),
              /* @__PURE__ */ q(ni2, {
                path: "/trending",
                element: /* @__PURE__ */ q(Trending, {
                  apiKey,
                  showIds: shows.map((s3) => s3.id),
                  movieIds: movies.map((m6) => m6.id),
                  addShow,
                  addMovie
                })
              }),
              /* @__PURE__ */ q(ni2, {
                path: "/settings",
                element: /* @__PURE__ */ q(Settings, {
                  addApiKey,
                  showIds: shows.map((s3) => s3.id),
                  movieIds: movies.map((m6) => m6.id),
                  restoreShowsAndMovies,
                  f1Active,
                  activateF1
                })
              }),
              /* @__PURE__ */ q(ni2, {
                path: "/show/:id",
                element: /* @__PURE__ */ q(ShowDetails, {
                  apiKey
                })
              }),
              /* @__PURE__ */ q(ni2, {
                path: "/movie/:id",
                element: /* @__PURE__ */ q(MovieDetails, {
                  apiKey
                })
              }),
              /* @__PURE__ */ q(ni2, {
                path: "/person/:id",
                element: /* @__PURE__ */ q(PersonDetails, {
                  apiKey
                })
              }),
              /* @__PURE__ */ q(ni2, {
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

react-router/dist/development/chunk-JZWAC4HX.mjs:
react-router/dist/development/chunk-4LKRSAEJ.mjs:
react-router/dist/development/dom-export.mjs:
  (**
   * react-router v7.13.0
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

react-router/dist/development/chunk-JZWAC4HX.mjs:
react-router/dist/development/chunk-4LKRSAEJ.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.13.0
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
   * react-router-dom v7.13.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

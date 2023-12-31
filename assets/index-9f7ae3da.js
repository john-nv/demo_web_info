function f0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver(o => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i)
  }
})();

function wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var v0 = {
    exports: {}
  },
  Ec = {},
  p0 = {
    exports: {}
  },
  _e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl = Symbol.for("react.element"),
  TC = Symbol.for("react.portal"),
  IC = Symbol.for("react.fragment"),
  NC = Symbol.for("react.strict_mode"),
  MC = Symbol.for("react.profiler"),
  _C = Symbol.for("react.provider"),
  kC = Symbol.for("react.context"),
  zC = Symbol.for("react.forward_ref"),
  LC = Symbol.for("react.suspense"),
  AC = Symbol.for("react.memo"),
  jC = Symbol.for("react.lazy"),
  nm = Symbol.iterator;

function FC(e) {
  return e === null || typeof e != "object" ? null : (e = nm && e[nm] || e["@@iterator"], typeof e == "function" ? e : null)
}
var m0 = {
    isMounted: function() {
      return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  g0 = Object.assign,
  h0 = {};

function qi(e, t, n) {
  this.props = e, this.context = t, this.refs = h0, this.updater = n || m0
}
qi.prototype.isReactComponent = {};
qi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
qi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function y0() {}
y0.prototype = qi.prototype;

function Sv(e, t, n) {
  this.props = e, this.context = t, this.refs = h0, this.updater = n || m0
}
var Cv = Sv.prototype = new y0;
Cv.constructor = Sv;
g0(Cv, qi.prototype);
Cv.isPureReactComponent = !0;
var rm = Array.isArray,
  b0 = Object.prototype.hasOwnProperty,
  xv = {
    current: null
  },
  S0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function C0(e, t, n) {
  var r, o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) b0.call(t, r) && !S0.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: pl,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: xv.current
  }
}

function DC(e, t) {
  return {
    $$typeof: pl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function wv(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pl
}

function BC(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
var om = /\/+/g;

function Eu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? BC("" + e.key) : t.toString(36)
}

function gs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (i) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case pl:
        case TC:
          a = !0
      }
  }
  if (a) return a = e, o = o(a), e = r === "" ? "." + Eu(a, 0) : r, rm(o) ? (n = "", e != null && (n = e.replace(om, "$&/") + "/"), gs(o, t, n, "", function(u) {
    return u
  })) : o != null && (wv(o) && (o = DC(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(om, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", rm(e))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + Eu(i, l);
      a += gs(i, t, n, s, o)
    } else if (s = FC(e), typeof s == "function")
      for (e = s.call(e), l = 0; !(i = e.next()).done;) i = i.value, s = r + Eu(i, l++), a += gs(i, t, n, s, o);
    else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a
}

function Al(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return gs(e, r, "", "", function(i) {
    return t.call(n, i, o++)
  }), r
}

function HC(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var tn = {
    current: null
  },
  hs = {
    transition: null
  },
  WC = {
    ReactCurrentDispatcher: tn,
    ReactCurrentBatchConfig: hs,
    ReactCurrentOwner: xv
  };
_e.Children = {
  map: Al,
  forEach: function(e, t, n) {
    Al(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return Al(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return Al(e, function(t) {
      return t
    }) || []
  },
  only: function(e) {
    if (!wv(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
_e.Component = qi;
_e.Fragment = IC;
_e.Profiler = MC;
_e.PureComponent = Sv;
_e.StrictMode = NC;
_e.Suspense = LC;
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WC;
_e.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = g0({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = xv.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (s in t) b0.call(t, s) && !S0.hasOwnProperty(s) && (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s])
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l
  }
  return {
    $$typeof: pl,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: a
  }
};
_e.createContext = function(e) {
  return e = {
    $$typeof: kC,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: _C,
    _context: e
  }, e.Consumer = e
};
_e.createElement = C0;
_e.createFactory = function(e) {
  var t = C0.bind(null, e);
  return t.type = e, t
};
_e.createRef = function() {
  return {
    current: null
  }
};
_e.forwardRef = function(e) {
  return {
    $$typeof: zC,
    render: e
  }
};
_e.isValidElement = wv;
_e.lazy = function(e) {
  return {
    $$typeof: jC,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: HC
  }
};
_e.memo = function(e, t) {
  return {
    $$typeof: AC,
    type: e,
    compare: t === void 0 ? null : t
  }
};
_e.startTransition = function(e) {
  var t = hs.transition;
  hs.transition = {};
  try {
    e()
  } finally {
    hs.transition = t
  }
};
_e.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.")
};
_e.useCallback = function(e, t) {
  return tn.current.useCallback(e, t)
};
_e.useContext = function(e) {
  return tn.current.useContext(e)
};
_e.useDebugValue = function() {};
_e.useDeferredValue = function(e) {
  return tn.current.useDeferredValue(e)
};
_e.useEffect = function(e, t) {
  return tn.current.useEffect(e, t)
};
_e.useId = function() {
  return tn.current.useId()
};
_e.useImperativeHandle = function(e, t, n) {
  return tn.current.useImperativeHandle(e, t, n)
};
_e.useInsertionEffect = function(e, t) {
  return tn.current.useInsertionEffect(e, t)
};
_e.useLayoutEffect = function(e, t) {
  return tn.current.useLayoutEffect(e, t)
};
_e.useMemo = function(e, t) {
  return tn.current.useMemo(e, t)
};
_e.useReducer = function(e, t, n) {
  return tn.current.useReducer(e, t, n)
};
_e.useRef = function(e) {
  return tn.current.useRef(e)
};
_e.useState = function(e) {
  return tn.current.useState(e)
};
_e.useSyncExternalStore = function(e, t, n) {
  return tn.current.useSyncExternalStore(e, t, n)
};
_e.useTransition = function() {
  return tn.current.useTransition()
};
_e.version = "18.2.0";
p0.exports = _e;
var c = p0.exports;
const X = wc(c),
  $c = f0({
    __proto__: null,
    default: X
  }, [c]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VC = c,
  UC = Symbol.for("react.element"),
  KC = Symbol.for("react.fragment"),
  GC = Object.prototype.hasOwnProperty,
  XC = VC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qC = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function x0(e, t, n) {
  var r, o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) GC.call(t, r) && !qC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: UC,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: XC.current
  }
}
Ec.Fragment = KC;
Ec.jsx = x0;
Ec.jsxs = x0;
v0.exports = Ec;
var qe = v0.exports;

function lr(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ze(e) {
  "@babel/helpers - typeof";
  return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }, ze(e)
}

function QC(e, t) {
  if (ze(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ze(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}

function w0(e) {
  var t = QC(e, "string");
  return ze(t) === "symbol" ? t : String(t)
}

function im(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, w0(r.key), r)
  }
}

function sr(e, t, n) {
  return t && im(e.prototype, t), n && im(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e
}

function Id(e, t) {
  return Id = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r
  }, Id(e, t)
}

function ml(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Id(e, t)
}

function js(e) {
  return js = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n)
  }, js(e)
}

function YC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
  } catch {
    return !1
  }
}

function We(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function ZC(e, t) {
  if (t && (ze(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return We(e)
}

function gl(e) {
  var t = YC();
  return function() {
    var r = js(e),
      o;
    if (t) {
      var i = js(this).constructor;
      o = Reflect.construct(r, arguments, i)
    } else o = r.apply(this, arguments);
    return ZC(this, o)
  }
}
var E0 = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;

    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = n.apply(null, i);
              l && r.push(l)
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue
            }
            for (var s in i) t.call(i, s) && i[s] && r.push(s)
          }
        }
      }
      return r.join(" ")
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n
  })()
})(E0);
var JC = E0.exports;
const U = wc(JC);

function de() {
  return de = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, de.apply(this, arguments)
}
var $0 = {
    exports: {}
  },
  Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At = typeof Symbol == "function" && Symbol.for,
  Ev = At ? Symbol.for("react.element") : 60103,
  $v = At ? Symbol.for("react.portal") : 60106,
  Oc = At ? Symbol.for("react.fragment") : 60107,
  Pc = At ? Symbol.for("react.strict_mode") : 60108,
  Rc = At ? Symbol.for("react.profiler") : 60114,
  Tc = At ? Symbol.for("react.provider") : 60109,
  Ic = At ? Symbol.for("react.context") : 60110,
  Ov = At ? Symbol.for("react.async_mode") : 60111,
  Nc = At ? Symbol.for("react.concurrent_mode") : 60111,
  Mc = At ? Symbol.for("react.forward_ref") : 60112,
  _c = At ? Symbol.for("react.suspense") : 60113,
  ex = At ? Symbol.for("react.suspense_list") : 60120,
  kc = At ? Symbol.for("react.memo") : 60115,
  zc = At ? Symbol.for("react.lazy") : 60116,
  tx = At ? Symbol.for("react.block") : 60121,
  nx = At ? Symbol.for("react.fundamental") : 60117,
  rx = At ? Symbol.for("react.responder") : 60118,
  ox = At ? Symbol.for("react.scope") : 60119;

function $n(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ev:
        switch (e = e.type, e) {
          case Ov:
          case Nc:
          case Oc:
          case Rc:
          case Pc:
          case _c:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ic:
              case Mc:
              case zc:
              case kc:
              case Tc:
                return e;
              default:
                return t
            }
        }
      case $v:
        return t
    }
  }
}

function O0(e) {
  return $n(e) === Nc
}
Ye.AsyncMode = Ov;
Ye.ConcurrentMode = Nc;
Ye.ContextConsumer = Ic;
Ye.ContextProvider = Tc;
Ye.Element = Ev;
Ye.ForwardRef = Mc;
Ye.Fragment = Oc;
Ye.Lazy = zc;
Ye.Memo = kc;
Ye.Portal = $v;
Ye.Profiler = Rc;
Ye.StrictMode = Pc;
Ye.Suspense = _c;
Ye.isAsyncMode = function(e) {
  return O0(e) || $n(e) === Ov
};
Ye.isConcurrentMode = O0;
Ye.isContextConsumer = function(e) {
  return $n(e) === Ic
};
Ye.isContextProvider = function(e) {
  return $n(e) === Tc
};
Ye.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ev
};
Ye.isForwardRef = function(e) {
  return $n(e) === Mc
};
Ye.isFragment = function(e) {
  return $n(e) === Oc
};
Ye.isLazy = function(e) {
  return $n(e) === zc
};
Ye.isMemo = function(e) {
  return $n(e) === kc
};
Ye.isPortal = function(e) {
  return $n(e) === $v
};
Ye.isProfiler = function(e) {
  return $n(e) === Rc
};
Ye.isStrictMode = function(e) {
  return $n(e) === Pc
};
Ye.isSuspense = function(e) {
  return $n(e) === _c
};
Ye.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Oc || e === Nc || e === Rc || e === Pc || e === _c || e === ex || typeof e == "object" && e !== null && (e.$$typeof === zc || e.$$typeof === kc || e.$$typeof === Tc || e.$$typeof === Ic || e.$$typeof === Mc || e.$$typeof === nx || e.$$typeof === rx || e.$$typeof === ox || e.$$typeof === tx)
};
Ye.typeOf = $n;
$0.exports = Ye;
var P0 = $0.exports;

function or(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return X.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(or(r)) : P0.isFragment(r) && r.props ? n = n.concat(or(r.props.children, t)) : n.push(r))
  }), n
}
var Nd = {},
  ix = function(t) {};

function ax(e, t) {}

function lx(e, t) {}

function sx() {
  Nd = {}
}

function R0(e, t, n) {
  !t && !Nd[n] && (e(!1, n), Nd[n] = !0)
}

function Zt(e, t) {
  R0(ax, e, t)
}

function cx(e, t) {
  R0(lx, e, t)
}
Zt.preMessage = ix;
Zt.resetWarned = sx;
Zt.noteOnce = cx;

function z(e, t, n) {
  return t = w0(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function am(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? am(Object(n), !0).forEach(function(r) {
      z(e, r, n[r])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : am(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
    })
  }
  return e
}

function Lc(e, t, n) {
  var r = c.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value
}

function Pv(e, t) {
  typeof e == "function" ? e(t) : ze(e) === "object" && e && "current" in e && (e.current = t)
}

function Cr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  var r = t.filter(function(o) {
    return o
  });
  return r.length <= 1 ? r[0] : function(o) {
    t.forEach(function(i) {
      Pv(i, o)
    })
  }
}

function hl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return Lc(function() {
    return Cr.apply(void 0, t)
  }, t, function(r, o) {
    return r.length !== o.length || r.every(function(i, a) {
      return i !== o[a]
    })
  })
}

function Wo(e) {
  var t, n, r = P0.isMemo(e) ? e.type.type : e.type;
  return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render))
}
var T0 = {
    exports: {}
  },
  On = {},
  I0 = {
    exports: {}
  },
  N0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, k) {
    var L = T.length;
    T.push(k);
    e: for (; 0 < L;) {
      var B = L - 1 >>> 1,
        F = T[B];
      if (0 < o(F, k)) T[B] = k, T[L] = F, L = B;
      else break e
    }
  }

  function n(T) {
    return T.length === 0 ? null : T[0]
  }

  function r(T) {
    if (T.length === 0) return null;
    var k = T[0],
      L = T.pop();
    if (L !== k) {
      T[0] = L;
      e: for (var B = 0, F = T.length, V = F >>> 1; B < V;) {
        var K = 2 * (B + 1) - 1,
          Q = T[K],
          W = K + 1,
          G = T[W];
        if (0 > o(Q, L)) W < F && 0 > o(G, Q) ? (T[B] = G, T[W] = L, B = W) : (T[B] = Q, T[K] = L, B = K);
        else if (W < F && 0 > o(G, L)) T[B] = G, T[W] = L, B = W;
        else break e
      }
    }
    return k
  }

  function o(T, k) {
    var L = T.sortIndex - k.sortIndex;
    return L !== 0 ? L : T.id - k.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now()
    }
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function() {
      return a.now() - l
    }
  }
  var s = [],
    u = [],
    d = 1,
    f = null,
    v = 3,
    y = !1,
    b = !1,
    h = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function m(T) {
    for (var k = n(u); k !== null;) {
      if (k.callback === null) r(u);
      else if (k.startTime <= T) r(u), k.sortIndex = k.expirationTime, t(s, k);
      else break;
      k = n(u)
    }
  }

  function S(T) {
    if (h = !1, m(T), !b)
      if (n(s) !== null) b = !0, M(E);
      else {
        var k = n(u);
        k !== null && $(S, k.startTime - T)
      }
  }

  function E(T, k) {
    b = !1, h && (h = !1, g(R), R = -1), y = !0;
    var L = v;
    try {
      for (m(k), f = n(s); f !== null && (!(f.expirationTime > k) || T && !_());) {
        var B = f.callback;
        if (typeof B == "function") {
          f.callback = null, v = f.priorityLevel;
          var F = B(f.expirationTime <= k);
          k = e.unstable_now(), typeof F == "function" ? f.callback = F : f === n(s) && r(s), m(k)
        } else r(s);
        f = n(s)
      }
      if (f !== null) var V = !0;
      else {
        var K = n(u);
        K !== null && $(S, K.startTime - k), V = !1
      }
      return V
    } finally {
      f = null, v = L, y = !1
    }
  }
  var w = !1,
    x = null,
    R = -1,
    P = 5,
    O = -1;

  function _() {
    return !(e.unstable_now() - O < P)
  }

  function N() {
    if (x !== null) {
      var T = e.unstable_now();
      O = T;
      var k = !0;
      try {
        k = x(!0, T)
      } finally {
        k ? I() : (w = !1, x = null)
      }
    } else w = !1
  }
  var I;
  if (typeof p == "function") I = function() {
    p(N)
  };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel,
      j = A.port2;
    A.port1.onmessage = N, I = function() {
      j.postMessage(null)
    }
  } else I = function() {
    C(N, 0)
  };

  function M(T) {
    x = T, w || (w = !0, I())
  }

  function $(T, k) {
    R = C(function() {
      T(e.unstable_now())
    }, k)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null
  }, e.unstable_continueExecution = function() {
    b || y || (b = !0, M(E))
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < T ? Math.floor(1e3 / T) : 5
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s)
  }, e.unstable_next = function(T) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var k = 3;
        break;
      default:
        k = v
    }
    var L = v;
    v = k;
    try {
      return T()
    } finally {
      v = L
    }
  }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(T, k) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3
    }
    var L = v;
    v = T;
    try {
      return k()
    } finally {
      v = L
    }
  }, e.unstable_scheduleCallback = function(T, k, L) {
    var B = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? B + L : B) : L = B, T) {
      case 1:
        var F = -1;
        break;
      case 2:
        F = 250;
        break;
      case 5:
        F = 1073741823;
        break;
      case 4:
        F = 1e4;
        break;
      default:
        F = 5e3
    }
    return F = L + F, T = {
      id: d++,
      callback: k,
      priorityLevel: T,
      startTime: L,
      expirationTime: F,
      sortIndex: -1
    }, L > B ? (T.sortIndex = L, t(u, T), n(s) === null && T === n(u) && (h ? (g(R), R = -1) : h = !0, $(S, L - B))) : (T.sortIndex = F, t(s, T), b || y || (b = !0, M(E))), T
  }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(T) {
    var k = v;
    return function() {
      var L = v;
      v = k;
      try {
        return T.apply(this, arguments)
      } finally {
        v = L
      }
    }
  }
})(N0);
I0.exports = N0;
var ux = I0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M0 = c,
  En = ux;

function q(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var _0 = new Set,
  Va = {};

function Vo(e, t) {
  ji(e, t), ji(e + "Capture", t)
}

function ji(e, t) {
  for (Va[e] = t, e = 0; e < t.length; e++) _0.add(t[e])
}
var Lr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Md = Object.prototype.hasOwnProperty,
  dx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lm = {},
  sm = {};

function fx(e) {
  return Md.call(sm, e) ? !0 : Md.call(lm, e) ? !1 : dx.test(e) ? sm[e] = !0 : (lm[e] = !0, !1)
}

function vx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function px(e, t, n, r) {
  if (t === null || typeof t > "u" || vx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function nn(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
}
var Ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ht[e] = new nn(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function(e) {
  var t = e[0];
  Ht[t] = new nn(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ht[e] = new nn(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ht[e] = new nn(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ht[e] = new nn(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ht[e] = new nn(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
  Ht[e] = new nn(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ht[e] = new nn(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
  Ht[e] = new nn(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Rv = /[\-:]([a-z])/g;

function Tv(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Rv, Tv);
  Ht[t] = new nn(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Rv, Tv);
  Ht[t] = new nn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Rv, Tv);
  Ht[t] = new nn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ht[e] = new nn(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ht.xlinkHref = new nn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ht[e] = new nn(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Iv(e, t, n, r) {
  var o = Ht.hasOwnProperty(t) ? Ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (px(t, n, o, r) && (n = null), r || o === null ? fx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Br = M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jl = Symbol.for("react.element"),
  mi = Symbol.for("react.portal"),
  gi = Symbol.for("react.fragment"),
  Nv = Symbol.for("react.strict_mode"),
  _d = Symbol.for("react.profiler"),
  k0 = Symbol.for("react.provider"),
  z0 = Symbol.for("react.context"),
  Mv = Symbol.for("react.forward_ref"),
  kd = Symbol.for("react.suspense"),
  zd = Symbol.for("react.suspense_list"),
  _v = Symbol.for("react.memo"),
  Gr = Symbol.for("react.lazy"),
  L0 = Symbol.for("react.offscreen"),
  cm = Symbol.iterator;

function ca(e) {
  return e === null || typeof e != "object" ? null : (e = cm && e[cm] || e["@@iterator"], typeof e == "function" ? e : null)
}
var yt = Object.assign,
  $u;

function wa(e) {
  if ($u === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    $u = t && t[1] || ""
  }
  return `
` + $u + e
}
var Ou = !1;

function Pu(e, t) {
  if (!e || Ou) return "";
  Ou = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
          throw Error()
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error()
          }
        }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, l = i.length - 1; 1 <= a && 0 <= l && o[a] !== i[l];) l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if (a--, l--, 0 > l || o[a] !== i[l]) {
                var s = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
              } while (1 <= a && 0 <= l);
          break
        }
    }
  } finally {
    Ou = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? wa(e) : ""
}

function mx(e) {
  switch (e.tag) {
    case 5:
      return wa(e.type);
    case 16:
      return wa("Lazy");
    case 13:
      return wa("Suspense");
    case 19:
      return wa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Pu(e.type, !1), e;
    case 11:
      return e = Pu(e.type.render, !1), e;
    case 1:
      return e = Pu(e.type, !0), e;
    default:
      return ""
  }
}

function Ld(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gi:
      return "Fragment";
    case mi:
      return "Portal";
    case _d:
      return "Profiler";
    case Nv:
      return "StrictMode";
    case kd:
      return "Suspense";
    case zd:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case z0:
      return (e.displayName || "Context") + ".Consumer";
    case k0:
      return (e._context.displayName || "Context") + ".Provider";
    case Mv:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case _v:
      return t = e.displayName || null, t !== null ? t : Ld(e.type) || "Memo";
    case Gr:
      t = e._payload, e = e._init;
      try {
        return Ld(e(t))
      } catch {}
  }
  return null
}

function gx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ld(t);
    case 8:
      return t === Nv ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function co(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function A0(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function hx(e) {
  var t = A0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function() {
        return o.call(this)
      },
      set: function(a) {
        r = "" + a, i.call(this, a)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return r
      },
      setValue: function(a) {
        r = "" + a
      },
      stopTracking: function() {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function Fl(e) {
  e._valueTracker || (e._valueTracker = hx(e))
}

function j0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = A0(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Fs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function Ad(e, t) {
  var n = t.checked;
  return yt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}

function um(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = co(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}

function F0(e, t) {
  t = t.checked, t != null && Iv(e, "checked", t, !1)
}

function jd(e, t) {
  F0(e, t);
  var n = co(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? Fd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fd(e, t.type, co(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function dm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Fd(e, t, n) {
  (t !== "number" || Fs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ea = Array.isArray;

function Ni(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + co(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}

function Dd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(q(91));
  return yt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function fm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(q(92));
      if (Ea(n)) {
        if (1 < n.length) throw Error(q(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: co(n)
  }
}

function D0(e, t) {
  var n = co(t.value),
    r = co(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function vm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function B0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function Bd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? B0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Dl, H0 = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o)
    })
  } : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Dl = Dl || document.createElement("div"), Dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Dl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function Ua(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var Ta = {
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
    strokeWidth: !0
  },
  yx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ta).forEach(function(e) {
  yx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ta[t] = Ta[e]
  })
});

function W0(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ta.hasOwnProperty(e) && Ta[e] ? ("" + t).trim() : t + "px"
}

function V0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = W0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}
var bx = yt({
  menuitem: !0
}, {
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
  wbr: !0
});

function Hd(e, t) {
  if (t) {
    if (bx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(q(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(q(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(q(62))
  }
}

function Wd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var Vd = null;

function kv(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Ud = null,
  Mi = null,
  _i = null;

function pm(e) {
  if (e = Sl(e)) {
    if (typeof Ud != "function") throw Error(q(280));
    var t = e.stateNode;
    t && (t = Bc(t), Ud(e.stateNode, e.type, t))
  }
}

function U0(e) {
  Mi ? _i ? _i.push(e) : _i = [e] : Mi = e
}

function K0() {
  if (Mi) {
    var e = Mi,
      t = _i;
    if (_i = Mi = null, pm(e), t)
      for (e = 0; e < t.length; e++) pm(t[e])
  }
}

function G0(e, t) {
  return e(t)
}

function X0() {}
var Ru = !1;

function q0(e, t, n) {
  if (Ru) return e(t, n);
  Ru = !0;
  try {
    return G0(e, t, n)
  } finally {
    Ru = !1, (Mi !== null || _i !== null) && (X0(), K0())
  }
}

function Ka(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(q(231, t, typeof n));
  return n
}
var Kd = !1;
if (Lr) try {
  var ua = {};
  Object.defineProperty(ua, "passive", {
    get: function() {
      Kd = !0
    }
  }), window.addEventListener("test", ua, ua), window.removeEventListener("test", ua, ua)
} catch {
  Kd = !1
}

function Sx(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var Ia = !1,
  Ds = null,
  Bs = !1,
  Gd = null,
  Cx = {
    onError: function(e) {
      Ia = !0, Ds = e
    }
  };

function xx(e, t, n, r, o, i, a, l, s) {
  Ia = !1, Ds = null, Sx.apply(Cx, arguments)
}

function wx(e, t, n, r, o, i, a, l, s) {
  if (xx.apply(this, arguments), Ia) {
    if (Ia) {
      var u = Ds;
      Ia = !1, Ds = null
    } else throw Error(q(198));
    Bs || (Bs = !0, Gd = u)
  }
}

function Uo(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function Q0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
  }
  return null
}

function mm(e) {
  if (Uo(e) !== e) throw Error(q(188))
}

function Ex(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Uo(e), t === null) throw Error(q(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i;) {
        if (i === n) return mm(o), e;
        if (i === r) return mm(o), t;
        i = i.sibling
      }
      throw Error(q(188))
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var a = !1, l = o.child; l;) {
        if (l === n) {
          a = !0, n = o, r = i;
          break
        }
        if (l === r) {
          a = !0, r = o, n = i;
          break
        }
        l = l.sibling
      }
      if (!a) {
        for (l = i.child; l;) {
          if (l === n) {
            a = !0, n = i, r = o;
            break
          }
          if (l === r) {
            a = !0, r = i, n = o;
            break
          }
          l = l.sibling
        }
        if (!a) throw Error(q(189))
      }
    }
    if (n.alternate !== r) throw Error(q(190))
  }
  if (n.tag !== 3) throw Error(q(188));
  return n.stateNode.current === n ? e : t
}

function Y0(e) {
  return e = Ex(e), e !== null ? Z0(e) : null
}

function Z0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Z0(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var J0 = En.unstable_scheduleCallback,
  gm = En.unstable_cancelCallback,
  $x = En.unstable_shouldYield,
  Ox = En.unstable_requestPaint,
  Ot = En.unstable_now,
  Px = En.unstable_getCurrentPriorityLevel,
  zv = En.unstable_ImmediatePriority,
  ey = En.unstable_UserBlockingPriority,
  Hs = En.unstable_NormalPriority,
  Rx = En.unstable_LowPriority,
  ty = En.unstable_IdlePriority,
  Ac = null,
  yr = null;

function Tx(e) {
  if (yr && typeof yr.onCommitFiberRoot == "function") try {
    yr.onCommitFiberRoot(Ac, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var er = Math.clz32 ? Math.clz32 : Mx,
  Ix = Math.log,
  Nx = Math.LN2;

function Mx(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ix(e) / Nx | 0) | 0
}
var Bl = 64,
  Hl = 4194304;

function $a(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}

function Ws(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? r = $a(l) : (i &= a, i !== 0 && (r = $a(i)))
  } else a = n & ~o, a !== 0 ? r = $a(a) : i !== 0 && (r = $a(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - er(t), o = 1 << n, r |= e[n], t &= ~o;
  return r
}

function _x(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}

function kx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var a = 31 - er(i),
      l = 1 << a,
      s = o[a];
    s === -1 ? (!(l & n) || l & r) && (o[a] = _x(l, t)) : s <= t && (e.expiredLanes |= l), i &= ~l
  }
}

function Xd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function ny() {
  var e = Bl;
  return Bl <<= 1, !(Bl & 4194240) && (Bl = 64), e
}

function Tu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function yl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - er(t), e[t] = n
}

function zx(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - er(n),
      i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
  }
}

function Lv(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - er(n),
      o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o
  }
}
var Qe = 0;

function ry(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var oy, Av, iy, ay, ly, qd = !1,
  Wl = [],
  to = null,
  no = null,
  ro = null,
  Ga = new Map,
  Xa = new Map,
  qr = [],
  Lx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function hm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      to = null;
      break;
    case "dragenter":
    case "dragleave":
      no = null;
      break;
    case "mouseover":
    case "mouseout":
      ro = null;
      break;
    case "pointerover":
    case "pointerout":
      Ga.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xa.delete(t.pointerId)
  }
}

function da(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: i,
    targetContainers: [o]
  }, t !== null && (t = Sl(t), t !== null && Av(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Ax(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return to = da(to, e, t, n, r, o), !0;
    case "dragenter":
      return no = da(no, e, t, n, r, o), !0;
    case "mouseover":
      return ro = da(ro, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ga.set(i, da(Ga.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Xa.set(i, da(Xa.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}

function sy(e) {
  var t = xo(e.target);
  if (t !== null) {
    var n = Uo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Q0(n), t !== null) {
          e.blockedOn = t, ly(e.priority, function() {
            iy(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function ys(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Qd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Vd = r, n.target.dispatchEvent(r), Vd = null
    } else return t = Sl(n), t !== null && Av(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function ym(e, t, n) {
  ys(e) && n.delete(t)
}

function jx() {
  qd = !1, to !== null && ys(to) && (to = null), no !== null && ys(no) && (no = null), ro !== null && ys(ro) && (ro = null), Ga.forEach(ym), Xa.forEach(ym)
}

function fa(e, t) {
  e.blockedOn === t && (e.blockedOn = null, qd || (qd = !0, En.unstable_scheduleCallback(En.unstable_NormalPriority, jx)))
}

function qa(e) {
  function t(o) {
    return fa(o, e)
  }
  if (0 < Wl.length) {
    fa(Wl[0], e);
    for (var n = 1; n < Wl.length; n++) {
      var r = Wl[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (to !== null && fa(to, e), no !== null && fa(no, e), ro !== null && fa(ro, e), Ga.forEach(t), Xa.forEach(t), n = 0; n < qr.length; n++) r = qr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qr.length && (n = qr[0], n.blockedOn === null);) sy(n), n.blockedOn === null && qr.shift()
}
var ki = Br.ReactCurrentBatchConfig,
  Vs = !0;

function Fx(e, t, n, r) {
  var o = Qe,
    i = ki.transition;
  ki.transition = null;
  try {
    Qe = 1, jv(e, t, n, r)
  } finally {
    Qe = o, ki.transition = i
  }
}

function Dx(e, t, n, r) {
  var o = Qe,
    i = ki.transition;
  ki.transition = null;
  try {
    Qe = 4, jv(e, t, n, r)
  } finally {
    Qe = o, ki.transition = i
  }
}

function jv(e, t, n, r) {
  if (Vs) {
    var o = Qd(e, t, n, r);
    if (o === null) Fu(e, t, r, Us, n), hm(e, r);
    else if (Ax(o, e, t, n, r)) r.stopPropagation();
    else if (hm(e, r), t & 4 && -1 < Lx.indexOf(e)) {
      for (; o !== null;) {
        var i = Sl(o);
        if (i !== null && oy(i), i = Qd(e, t, n, r), i === null && Fu(e, t, r, Us, n), i === o) break;
        o = i
      }
      o !== null && r.stopPropagation()
    } else Fu(e, t, r, null, n)
  }
}
var Us = null;

function Qd(e, t, n, r) {
  if (Us = null, e = kv(r), e = xo(e), e !== null)
    if (t = Uo(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
    if (e = Q0(t), e !== null) return e;
    e = null
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null
  } else t !== e && (e = null);
  return Us = e, null
}

function cy(e) {
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
    case "pointercancel":
    case "pointerdown":
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
      return 1;
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
      return 4;
    case "message":
      switch (Px()) {
        case zv:
          return 1;
        case ey:
          return 4;
        case Hs:
        case Rx:
          return 16;
        case ty:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var Yr = null,
  Fv = null,
  bs = null;

function uy() {
  if (bs) return bs;
  var e, t = Fv,
    n = t.length,
    r, o = "value" in Yr ? Yr.value : Yr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return bs = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Ss(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Vl() {
  return !0
}

function bm() {
  return !1
}

function Pn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Vl : bm, this.isPropagationStopped = bm, this
  }
  return yt(t.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vl)
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vl)
    },
    persist: function() {},
    isPersistent: Vl
  }), t
}
var Qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Dv = Pn(Qi),
  bl = yt({}, Qi, {
    view: 0,
    detail: 0
  }),
  Bx = Pn(bl),
  Iu, Nu, va, jc = yt({}, bl, {
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
    getModifierState: Bv,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== va && (va && e.type === "mousemove" ? (Iu = e.screenX - va.screenX, Nu = e.screenY - va.screenY) : Nu = Iu = 0, va = e), Iu)
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Nu
    }
  }),
  Sm = Pn(jc),
  Hx = yt({}, jc, {
    dataTransfer: 0
  }),
  Wx = Pn(Hx),
  Vx = yt({}, bl, {
    relatedTarget: 0
  }),
  Mu = Pn(Vx),
  Ux = yt({}, Qi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Kx = Pn(Ux),
  Gx = yt({}, Qi, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  Xx = Pn(Gx),
  qx = yt({}, Qi, {
    data: 0
  }),
  Cm = Pn(qx),
  Qx = {
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
  },
  Yx = {
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
  },
  Zx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function Jx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zx[e]) ? !!t[e] : !1
}

function Bv() {
  return Jx
}
var ew = yt({}, bl, {
    key: function(e) {
      if (e.key) {
        var t = Qx[e.key] || e.key;
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress" ? (e = Ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yx[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bv,
    charCode: function(e) {
      return e.type === "keypress" ? Ss(e) : 0
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
      return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
  }),
  tw = Pn(ew),
  nw = yt({}, jc, {
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
  }),
  xm = Pn(nw),
  rw = yt({}, bl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bv
  }),
  ow = Pn(rw),
  iw = yt({}, Qi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  aw = Pn(iw),
  lw = yt({}, jc, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  sw = Pn(lw),
  cw = [9, 13, 27, 32],
  Hv = Lr && "CompositionEvent" in window,
  Na = null;
Lr && "documentMode" in document && (Na = document.documentMode);
var uw = Lr && "TextEvent" in window && !Na,
  dy = Lr && (!Hv || Na && 8 < Na && 11 >= Na),
  wm = String.fromCharCode(32),
  Em = !1;

function fy(e, t) {
  switch (e) {
    case "keyup":
      return cw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function vy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var hi = !1;

function dw(e, t) {
  switch (e) {
    case "compositionend":
      return vy(t);
    case "keypress":
      return t.which !== 32 ? null : (Em = !0, wm);
    case "textInput":
      return e = t.data, e === wm && Em ? null : e;
    default:
      return null
  }
}

function fw(e, t) {
  if (hi) return e === "compositionend" || !Hv && fy(e, t) ? (e = uy(), bs = Fv = Yr = null, hi = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return dy && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var vw = {
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
  week: !0
};

function $m(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vw[e.type] : t === "textarea"
}

function py(e, t, n, r) {
  U0(r), t = Ks(t, "onChange"), 0 < t.length && (n = new Dv("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var Ma = null,
  Qa = null;

function pw(e) {
  $y(e, 0)
}

function Fc(e) {
  var t = Si(e);
  if (j0(t)) return e
}

function mw(e, t) {
  if (e === "change") return t
}
var my = !1;
if (Lr) {
  var _u;
  if (Lr) {
    var ku = "oninput" in document;
    if (!ku) {
      var Om = document.createElement("div");
      Om.setAttribute("oninput", "return;"), ku = typeof Om.oninput == "function"
    }
    _u = ku
  } else _u = !1;
  my = _u && (!document.documentMode || 9 < document.documentMode)
}

function Pm() {
  Ma && (Ma.detachEvent("onpropertychange", gy), Qa = Ma = null)
}

function gy(e) {
  if (e.propertyName === "value" && Fc(Qa)) {
    var t = [];
    py(t, Qa, e, kv(e)), q0(pw, t)
  }
}

function gw(e, t, n) {
  e === "focusin" ? (Pm(), Ma = t, Qa = n, Ma.attachEvent("onpropertychange", gy)) : e === "focusout" && Pm()
}

function hw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fc(Qa)
}

function yw(e, t) {
  if (e === "click") return Fc(t)
}

function bw(e, t) {
  if (e === "input" || e === "change") return Fc(t)
}

function Sw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ir = typeof Object.is == "function" ? Object.is : Sw;

function Ya(e, t) {
  if (ir(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Md.call(t, o) || !ir(e[o], t[o])) return !1
  }
  return !0
}

function Rm(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function Tm(e, t) {
  var n = Rm(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Rm(n)
  }
}

function hy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function yy() {
  for (var e = window, t = Fs(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fs(e.document)
  }
  return t
}

function Wv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Cw(e) {
  var t = yy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && hy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wv(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Tm(n, i);
        var a = Tm(n, r);
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var xw = Lr && "documentMode" in document && 11 >= document.documentMode,
  yi = null,
  Yd = null,
  _a = null,
  Zd = !1;

function Im(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zd || yi == null || yi !== Fs(r) || (r = yi, "selectionStart" in r && Wv(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), _a && Ya(_a, r) || (_a = r, r = Ks(Yd, "onSelect"), 0 < r.length && (t = new Dv("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = yi)))
}

function Ul(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var bi = {
    animationend: Ul("Animation", "AnimationEnd"),
    animationiteration: Ul("Animation", "AnimationIteration"),
    animationstart: Ul("Animation", "AnimationStart"),
    transitionend: Ul("Transition", "TransitionEnd")
  },
  zu = {},
  by = {};
Lr && (by = document.createElement("div").style, "AnimationEvent" in window || (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation), "TransitionEvent" in window || delete bi.transitionend.transition);

function Dc(e) {
  if (zu[e]) return zu[e];
  if (!bi[e]) return e;
  var t = bi[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in by) return zu[e] = t[n];
  return e
}
var Sy = Dc("animationend"),
  Cy = Dc("animationiteration"),
  xy = Dc("animationstart"),
  wy = Dc("transitionend"),
  Ey = new Map,
  Nm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function fo(e, t) {
  Ey.set(e, t), Vo(t, [e])
}
for (var Lu = 0; Lu < Nm.length; Lu++) {
  var Au = Nm[Lu],
    ww = Au.toLowerCase(),
    Ew = Au[0].toUpperCase() + Au.slice(1);
  fo(ww, "on" + Ew)
}
fo(Sy, "onAnimationEnd");
fo(Cy, "onAnimationIteration");
fo(xy, "onAnimationStart");
fo("dblclick", "onDoubleClick");
fo("focusin", "onFocus");
fo("focusout", "onBlur");
fo(wy, "onTransitionEnd");
ji("onMouseEnter", ["mouseout", "mouseover"]);
ji("onMouseLeave", ["mouseout", "mouseover"]);
ji("onPointerEnter", ["pointerout", "pointerover"]);
ji("onPointerLeave", ["pointerout", "pointerover"]);
Vo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Oa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  $w = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));

function Mm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, wx(r, t, void 0, e), e.currentTarget = null
}

function $y(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (l = l.listener, s !== i && o.isPropagationStopped()) break e;
          Mm(o, l, u), i = s
        } else
          for (a = 0; a < r.length; a++) {
            if (l = r[a], s = l.instance, u = l.currentTarget, l = l.listener, s !== i && o.isPropagationStopped()) break e;
            Mm(o, l, u), i = s
          }
    }
  }
  if (Bs) throw e = Gd, Bs = !1, Gd = null, e
}

function ut(e, t) {
  var n = t[rf];
  n === void 0 && (n = t[rf] = new Set);
  var r = e + "__bubble";
  n.has(r) || (Oy(t, e, 2, !1), n.add(r))
}

function ju(e, t, n) {
  var r = 0;
  t && (r |= 4), Oy(n, e, r, t)
}
var Kl = "_reactListening" + Math.random().toString(36).slice(2);

function Za(e) {
  if (!e[Kl]) {
    e[Kl] = !0, _0.forEach(function(n) {
      n !== "selectionchange" && ($w.has(n) || ju(n, !1, e), ju(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kl] || (t[Kl] = !0, ju("selectionchange", !1, t))
  }
}

function Oy(e, t, n, r) {
  switch (cy(t)) {
    case 1:
      var o = Fx;
      break;
    case 4:
      o = Dx;
      break;
    default:
      o = jv
  }
  n = o.bind(null, t, n, e), o = void 0, !Kd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
    capture: !0,
    passive: o
  }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
    passive: o
  }) : e.addEventListener(t, n, !1)
}

function Fu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (a === 4)
        for (a = r.return; a !== null;) {
          var s = a.tag;
          if ((s === 3 || s === 4) && (s = a.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o)) return;
          a = a.return
        }
      for (; l !== null;) {
        if (a = xo(l), a === null) return;
        if (s = a.tag, s === 5 || s === 6) {
          r = i = a;
          continue e
        }
        l = l.parentNode
      }
    }
    r = r.return
  }
  q0(function() {
    var u = i,
      d = kv(n),
      f = [];
    e: {
      var v = Ey.get(e);
      if (v !== void 0) {
        var y = Dv,
          b = e;
        switch (e) {
          case "keypress":
            if (Ss(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = tw;
            break;
          case "focusin":
            b = "focus", y = Mu;
            break;
          case "focusout":
            b = "blur", y = Mu;
            break;
          case "beforeblur":
          case "afterblur":
            y = Mu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Sm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Wx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = ow;
            break;
          case Sy:
          case Cy:
          case xy:
            y = Kx;
            break;
          case wy:
            y = aw;
            break;
          case "scroll":
            y = Bx;
            break;
          case "wheel":
            y = sw;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Xx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = xm
        }
        var h = (t & 4) !== 0,
          C = !h && e === "scroll",
          g = h ? v !== null ? v + "Capture" : null : v;
        h = [];
        for (var p = u, m; p !== null;) {
          m = p;
          var S = m.stateNode;
          if (m.tag === 5 && S !== null && (m = S, g !== null && (S = Ka(p, g), S != null && h.push(Ja(p, S, m)))), C) break;
          p = p.return
        }
        0 < h.length && (v = new y(v, b, null, n, d), f.push({
          event: v,
          listeners: h
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Vd && (b = n.relatedTarget || n.fromElement) && (xo(b) || b[Ar])) break e;
        if ((y || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (b = n.relatedTarget || n.toElement, y = u, b = b ? xo(b) : null, b !== null && (C = Uo(b), b !== C || b.tag !== 5 && b.tag !== 6) && (b = null)) : (y = null, b = u), y !== b)) {
          if (h = Sm, S = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (h = xm, S = "onPointerLeave", g = "onPointerEnter", p = "pointer"), C = y == null ? v : Si(y), m = b == null ? v : Si(b), v = new h(S, p + "leave", y, n, d), v.target = C, v.relatedTarget = m, S = null, xo(d) === u && (h = new h(g, p + "enter", b, n, d), h.target = m, h.relatedTarget = C, S = h), C = S, y && b) t: {
            for (h = y, g = b, p = 0, m = h; m; m = ti(m)) p++;
            for (m = 0, S = g; S; S = ti(S)) m++;
            for (; 0 < p - m;) h = ti(h),
            p--;
            for (; 0 < m - p;) g = ti(g),
            m--;
            for (; p--;) {
              if (h === g || g !== null && h === g.alternate) break t;
              h = ti(h), g = ti(g)
            }
            h = null
          }
          else h = null;
          y !== null && _m(f, v, y, h, !1), b !== null && C !== null && _m(f, C, b, h, !0)
        }
      }
      e: {
        if (v = u ? Si(u) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var E = mw;
        else if ($m(v))
          if (my) E = bw;
          else {
            E = hw;
            var w = gw
          }
        else(y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = yw);
        if (E && (E = E(e, u))) {
          py(f, E, n, d);
          break e
        }
        w && w(e, v, u),
        e === "focusout" && (w = v._wrapperState) && w.controlled && v.type === "number" && Fd(v, "number", v.value)
      }
      switch (w = u ? Si(u) : window, e) {
        case "focusin":
          ($m(w) || w.contentEditable === "true") && (yi = w, Yd = u, _a = null);
          break;
        case "focusout":
          _a = Yd = yi = null;
          break;
        case "mousedown":
          Zd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zd = !1, Im(f, n, d);
          break;
        case "selectionchange":
          if (xw) break;
        case "keydown":
        case "keyup":
          Im(f, n, d)
      }
      var x;
      if (Hv) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e
        }
        R = void 0
      }
      else hi ? fy(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");R && (dy && n.locale !== "ko" && (hi || R !== "onCompositionStart" ? R === "onCompositionEnd" && hi && (x = uy()) : (Yr = d, Fv = "value" in Yr ? Yr.value : Yr.textContent, hi = !0)), w = Ks(u, R), 0 < w.length && (R = new Cm(R, e, null, n, d), f.push({
        event: R,
        listeners: w
      }), x ? R.data = x : (x = vy(n), x !== null && (R.data = x)))),
      (x = uw ? dw(e, n) : fw(e, n)) && (u = Ks(u, "onBeforeInput"), 0 < u.length && (d = new Cm("onBeforeInput", "beforeinput", null, n, d), f.push({
        event: d,
        listeners: u
      }), d.data = x))
    }
    $y(f, t)
  })
}

function Ja(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function Ks(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ka(e, n), i != null && r.unshift(Ja(e, i, o)), i = Ka(e, t), i != null && r.push(Ja(e, i, o))), e = e.return
  }
  return r
}

function ti(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function _m(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r;) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (s = Ka(n, i), s != null && a.unshift(Ja(n, s, l))) : o || (s = Ka(n, i), s != null && a.push(Ja(n, s, l)))), n = n.return
  }
  a.length !== 0 && e.push({
    event: t,
    listeners: a
  })
}
var Ow = /\r\n?/g,
  Pw = /\u0000|\uFFFD/g;

function km(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ow, `
`).replace(Pw, "")
}

function Gl(e, t, n) {
  if (t = km(t), km(e) !== t && n) throw Error(q(425))
}

function Gs() {}
var Jd = null,
  ef = null;

function tf(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var nf = typeof setTimeout == "function" ? setTimeout : void 0,
  Rw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zm = typeof Promise == "function" ? Promise : void 0,
  Tw = typeof queueMicrotask == "function" ? queueMicrotask : typeof zm < "u" ? function(e) {
    return zm.resolve(null).then(e).catch(Iw)
  } : nf;

function Iw(e) {
  setTimeout(function() {
    throw e
  })
}

function Du(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), qa(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o
  } while (n);
  qa(t)
}

function oo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function Lm(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var Yi = Math.random().toString(36).slice(2),
  hr = "__reactFiber$" + Yi,
  el = "__reactProps$" + Yi,
  Ar = "__reactContainer$" + Yi,
  rf = "__reactEvents$" + Yi,
  Nw = "__reactListeners$" + Yi,
  Mw = "__reactHandles$" + Yi;

function xo(e) {
  var t = e[hr];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[Ar] || n[hr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Lm(e); e !== null;) {
          if (n = e[hr]) return n;
          e = Lm(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function Sl(e) {
  return e = e[hr] || e[Ar], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Si(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(q(33))
}

function Bc(e) {
  return e[el] || null
}
var of = [], Ci = -1;

function vo(e) {
  return {
    current: e
  }
}

function dt(e) {
  0 > Ci || (e.current = of [Ci], of [Ci] = null, Ci--)
}

function at(e, t) {
  Ci++, of [Ci] = e.current, e.current = t
}
var uo = {},
  Xt = vo(uo),
  cn = vo(!1),
  zo = uo;

function Fi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return uo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function un(e) {
  return e = e.childContextTypes, e != null
}

function Xs() {
  dt(cn), dt(Xt)
}

function Am(e, t, n) {
  if (Xt.current !== uo) throw Error(q(168));
  at(Xt, t), at(cn, n)
}

function Py(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t)) throw Error(q(108, gx(e) || "Unknown", o));
  return yt({}, n, r)
}

function qs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || uo, zo = Xt.current, at(Xt, e), at(cn, cn.current), !0
}

function jm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(q(169));
  n ? (e = Py(e, t, zo), r.__reactInternalMemoizedMergedChildContext = e, dt(cn), dt(Xt), at(Xt, e)) : dt(cn), at(cn, n)
}
var Ir = null,
  Hc = !1,
  Bu = !1;

function Ry(e) {
  Ir === null ? Ir = [e] : Ir.push(e)
}

function _w(e) {
  Hc = !0, Ry(e)
}

function po() {
  if (!Bu && Ir !== null) {
    Bu = !0;
    var e = 0,
      t = Qe;
    try {
      var n = Ir;
      for (Qe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      Ir = null, Hc = !1
    } catch (o) {
      throw Ir !== null && (Ir = Ir.slice(e + 1)), J0(zv, po), o
    } finally {
      Qe = t, Bu = !1
    }
  }
  return null
}
var xi = [],
  wi = 0,
  Qs = null,
  Ys = 0,
  An = [],
  jn = 0,
  Lo = null,
  Mr = 1,
  _r = "";

function yo(e, t) {
  xi[wi++] = Ys, xi[wi++] = Qs, Qs = e, Ys = t
}

function Ty(e, t, n) {
  An[jn++] = Mr, An[jn++] = _r, An[jn++] = Lo, Lo = e;
  var r = Mr;
  e = _r;
  var o = 32 - er(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - er(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Mr = 1 << 32 - er(t) + o | n << o | r, _r = i + e
  } else Mr = 1 << i | n << o | r, _r = e
}

function Vv(e) {
  e.return !== null && (yo(e, 1), Ty(e, 1, 0))
}

function Uv(e) {
  for (; e === Qs;) Qs = xi[--wi], xi[wi] = null, Ys = xi[--wi], xi[wi] = null;
  for (; e === Lo;) Lo = An[--jn], An[jn] = null, _r = An[--jn], An[jn] = null, Mr = An[--jn], An[jn] = null
}
var wn = null,
  Sn = null,
  vt = !1,
  Zn = null;

function Iy(e, t) {
  var n = Fn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Fm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wn = e, Sn = oo(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wn = e, Sn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Lo !== null ? {
        id: Mr,
        overflow: _r
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, n = Fn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wn = e, Sn = null, !0) : !1;
    default:
      return !1
  }
}

function af(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function lf(e) {
  if (vt) {
    var t = Sn;
    if (t) {
      var n = t;
      if (!Fm(e, t)) {
        if (af(e)) throw Error(q(418));
        t = oo(n.nextSibling);
        var r = wn;
        t && Fm(e, t) ? Iy(r, n) : (e.flags = e.flags & -4097 | 2, vt = !1, wn = e)
      }
    } else {
      if (af(e)) throw Error(q(418));
      e.flags = e.flags & -4097 | 2, vt = !1, wn = e
    }
  }
}

function Dm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  wn = e
}

function Xl(e) {
  if (e !== wn) return !1;
  if (!vt) return Dm(e), vt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !tf(e.type, e.memoizedProps)), t && (t = Sn)) {
    if (af(e)) throw Ny(), Error(q(418));
    for (; t;) Iy(e, t), t = oo(t.nextSibling)
  }
  if (Dm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(q(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Sn = oo(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      Sn = null
    }
  } else Sn = wn ? oo(e.stateNode.nextSibling) : null;
  return !0
}

function Ny() {
  for (var e = Sn; e;) e = oo(e.nextSibling)
}

function Di() {
  Sn = wn = null, vt = !1
}

function Kv(e) {
  Zn === null ? Zn = [e] : Zn.push(e)
}
var kw = Br.ReactCurrentBatchConfig;

function Xn(e, t) {
  if (e && e.defaultProps) {
    t = yt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}
var Zs = vo(null),
  Js = null,
  Ei = null,
  Gv = null;

function Xv() {
  Gv = Ei = Js = null
}

function qv(e) {
  var t = Zs.current;
  dt(Zs), e._currentValue = t
}

function sf(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return
  }
}

function zi(e, t) {
  Js = e, Gv = Ei = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (sn = !0), e.firstContext = null)
}

function Bn(e) {
  var t = e._currentValue;
  if (Gv !== e)
    if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, Ei === null) {
      if (Js === null) throw Error(q(308));
      Ei = e, Js.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else Ei = Ei.next = e;
  return t
}
var wo = null;

function Qv(e) {
  wo === null ? wo = [e] : wo.push(e)
}

function My(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Qv(t)) : (n.next = o.next, o.next = n), t.interleaved = n, jr(e, r)
}

function jr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var Xr = !1;

function Yv(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function _y(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function kr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function io(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ve & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, jr(e, n)
  }
  return o = r.interleaved, o === null ? (t.next = t, Qv(r)) : (t.next = o.next, o.next = t), r.interleaved = t, jr(e, n)
}

function Cs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lv(e, n)
  }
}

function Bm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null,
      i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        i === null ? o = i = a : i = i.next = a, n = n.next
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t
    } else o = i = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ec(e, t, n, r) {
  var o = e.updateQueue;
  Xr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    s.next = null, a === null ? i = u : a.next = u, a = s;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== a && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = s))
  }
  if (i !== null) {
    var f = o.baseState;
    a = 0, d = u = s = null, l = i;
    do {
      var v = l.lane,
        y = l.eventTime;
      if ((r & v) === v) {
        d !== null && (d = d.next = {
          eventTime: y,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var b = e,
            h = l;
          switch (v = t, y = n, h.tag) {
            case 1:
              if (b = h.payload, typeof b == "function") {
                f = b.call(y, f, v);
                break e
              }
              f = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = h.payload, v = typeof b == "function" ? b.call(y, f, v) : b, v == null) break e;
              f = yt({}, f, v);
              break e;
            case 2:
              Xr = !0
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l))
      } else y = {
        eventTime: y,
        lane: v,
        tag: l.tag,
        payload: l.payload,
        callback: l.callback,
        next: null
      }, d === null ? (u = d = y, s = f) : d = d.next = y, a |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null
      }
    } while (1);
    if (d === null && (s = f), o.baseState = s, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do a |= o.lane, o = o.next; while (o !== t)
    } else i === null && (o.shared.lanes = 0);
    jo |= a, e.lanes = a, e.memoizedState = f
  }
}

function Hm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(q(191, o));
        o.call(r)
      }
    }
}
var ky = new M0.Component().refs;

function cf(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : yt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Wc = {
  isMounted: function(e) {
    return (e = e._reactInternals) ? Uo(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Jt(),
      o = lo(e),
      i = kr(r, o);
    i.payload = t, n != null && (i.callback = n), t = io(e, i, o), t !== null && (tr(t, e, o, r), Cs(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Jt(),
      o = lo(e),
      i = kr(r, o);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = io(e, i, o), t !== null && (tr(t, e, o, r), Cs(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Jt(),
      r = lo(e),
      o = kr(n, r);
    o.tag = 2, t != null && (o.callback = t), t = io(e, o, r), t !== null && (tr(t, e, r, n), Cs(t, e, r))
  }
};

function Wm(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Ya(n, r) || !Ya(o, i) : !0
}

function zy(e, t, n) {
  var r = !1,
    o = uo,
    i = t.contextType;
  return typeof i == "object" && i !== null ? i = Bn(i) : (o = un(t) ? zo : Xt.current, r = t.contextTypes, i = (r = r != null) ? Fi(e, o) : uo), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Vm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wc.enqueueReplaceState(t, t.state, null)
}

function uf(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = ky, Yv(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Bn(i) : (i = un(t) ? zo : Xt.current, o.context = Fi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (cf(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Wc.enqueueReplaceState(o, o.state, null), ec(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function pa(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(q(309));
        var r = n.stateNode
      }
      if (!r) throw Error(q(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var l = o.refs;
        l === ky && (l = o.refs = {}), a === null ? delete l[i] : l[i] = a
      }, t._stringRef = i, t)
    }
    if (typeof e != "string") throw Error(q(284));
    if (!n._owner) throw Error(q(290, e))
  }
  return e
}

function ql(e, t) {
  throw e = Object.prototype.toString.call(t), Error(q(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Um(e) {
  var t = e._init;
  return t(e._payload)
}

function Ly(e) {
  function t(g, p) {
    if (e) {
      var m = g.deletions;
      m === null ? (g.deletions = [p], g.flags |= 16) : m.push(p)
    }
  }

  function n(g, p) {
    if (!e) return null;
    for (; p !== null;) t(g, p), p = p.sibling;
    return null
  }

  function r(g, p) {
    for (g = new Map; p !== null;) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
    return g
  }

  function o(g, p) {
    return g = so(g, p), g.index = 0, g.sibling = null, g
  }

  function i(g, p, m) {
    return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < p ? (g.flags |= 2, p) : m) : (g.flags |= 2, p)) : (g.flags |= 1048576, p)
  }

  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }

  function l(g, p, m, S) {
    return p === null || p.tag !== 6 ? (p = Xu(m, g.mode, S), p.return = g, p) : (p = o(p, m), p.return = g, p)
  }

  function s(g, p, m, S) {
    var E = m.type;
    return E === gi ? d(g, p, m.props.children, S, m.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Gr && Um(E) === p.type) ? (S = o(p, m.props), S.ref = pa(g, p, m), S.return = g, S) : (S = Ps(m.type, m.key, m.props, null, g.mode, S), S.ref = pa(g, p, m), S.return = g, S)
  }

  function u(g, p, m, S) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = qu(m, g.mode, S), p.return = g, p) : (p = o(p, m.children || []), p.return = g, p)
  }

  function d(g, p, m, S, E) {
    return p === null || p.tag !== 7 ? (p = Io(m, g.mode, S, E), p.return = g, p) : (p = o(p, m), p.return = g, p)
  }

  function f(g, p, m) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = Xu("" + p, g.mode, m), p.return = g, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case jl:
          return m = Ps(p.type, p.key, p.props, null, g.mode, m), m.ref = pa(g, null, p), m.return = g, m;
        case mi:
          return p = qu(p, g.mode, m), p.return = g, p;
        case Gr:
          var S = p._init;
          return f(g, S(p._payload), m)
      }
      if (Ea(p) || ca(p)) return p = Io(p, g.mode, m, null), p.return = g, p;
      ql(g, p)
    }
    return null
  }

  function v(g, p, m, S) {
    var E = p !== null ? p.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : l(g, p, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case jl:
          return m.key === E ? s(g, p, m, S) : null;
        case mi:
          return m.key === E ? u(g, p, m, S) : null;
        case Gr:
          return E = m._init, v(g, p, E(m._payload), S)
      }
      if (Ea(m) || ca(m)) return E !== null ? null : d(g, p, m, S, null);
      ql(g, m)
    }
    return null
  }

  function y(g, p, m, S, E) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(m) || null, l(p, g, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case jl:
          return g = g.get(S.key === null ? m : S.key) || null, s(p, g, S, E);
        case mi:
          return g = g.get(S.key === null ? m : S.key) || null, u(p, g, S, E);
        case Gr:
          var w = S._init;
          return y(g, p, m, w(S._payload), E)
      }
      if (Ea(S) || ca(S)) return g = g.get(m) || null, d(p, g, S, E, null);
      ql(p, S)
    }
    return null
  }

  function b(g, p, m, S) {
    for (var E = null, w = null, x = p, R = p = 0, P = null; x !== null && R < m.length; R++) {
      x.index > R ? (P = x, x = null) : P = x.sibling;
      var O = v(g, x, m[R], S);
      if (O === null) {
        x === null && (x = P);
        break
      }
      e && x && O.alternate === null && t(g, x), p = i(O, p, R), w === null ? E = O : w.sibling = O, w = O, x = P
    }
    if (R === m.length) return n(g, x), vt && yo(g, R), E;
    if (x === null) {
      for (; R < m.length; R++) x = f(g, m[R], S), x !== null && (p = i(x, p, R), w === null ? E = x : w.sibling = x, w = x);
      return vt && yo(g, R), E
    }
    for (x = r(g, x); R < m.length; R++) P = y(x, g, R, m[R], S), P !== null && (e && P.alternate !== null && x.delete(P.key === null ? R : P.key), p = i(P, p, R), w === null ? E = P : w.sibling = P, w = P);
    return e && x.forEach(function(_) {
      return t(g, _)
    }), vt && yo(g, R), E
  }

  function h(g, p, m, S) {
    var E = ca(m);
    if (typeof E != "function") throw Error(q(150));
    if (m = E.call(m), m == null) throw Error(q(151));
    for (var w = E = null, x = p, R = p = 0, P = null, O = m.next(); x !== null && !O.done; R++, O = m.next()) {
      x.index > R ? (P = x, x = null) : P = x.sibling;
      var _ = v(g, x, O.value, S);
      if (_ === null) {
        x === null && (x = P);
        break
      }
      e && x && _.alternate === null && t(g, x), p = i(_, p, R), w === null ? E = _ : w.sibling = _, w = _, x = P
    }
    if (O.done) return n(g, x), vt && yo(g, R), E;
    if (x === null) {
      for (; !O.done; R++, O = m.next()) O = f(g, O.value, S), O !== null && (p = i(O, p, R), w === null ? E = O : w.sibling = O, w = O);
      return vt && yo(g, R), E
    }
    for (x = r(g, x); !O.done; R++, O = m.next()) O = y(x, g, R, O.value, S), O !== null && (e && O.alternate !== null && x.delete(O.key === null ? R : O.key), p = i(O, p, R), w === null ? E = O : w.sibling = O, w = O);
    return e && x.forEach(function(N) {
      return t(g, N)
    }), vt && yo(g, R), E
  }

  function C(g, p, m, S) {
    if (typeof m == "object" && m !== null && m.type === gi && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case jl:
          e: {
            for (var E = m.key, w = p; w !== null;) {
              if (w.key === E) {
                if (E = m.type, E === gi) {
                  if (w.tag === 7) {
                    n(g, w.sibling), p = o(w, m.props.children), p.return = g, g = p;
                    break e
                  }
                } else if (w.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Gr && Um(E) === w.type) {
                  n(g, w.sibling), p = o(w, m.props), p.ref = pa(g, w, m), p.return = g, g = p;
                  break e
                }
                n(g, w);
                break
              } else t(g, w);
              w = w.sibling
            }
            m.type === gi ? (p = Io(m.props.children, g.mode, S, m.key), p.return = g, g = p) : (S = Ps(m.type, m.key, m.props, null, g.mode, S), S.ref = pa(g, p, m), S.return = g, g = S)
          }
          return a(g);
        case mi:
          e: {
            for (w = m.key; p !== null;) {
              if (p.key === w)
                if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                  n(g, p.sibling), p = o(p, m.children || []), p.return = g, g = p;
                  break e
                } else {
                  n(g, p);
                  break
                }
              else t(g, p);
              p = p.sibling
            }
            p = qu(m, g.mode, S),
            p.return = g,
            g = p
          }
          return a(g);
        case Gr:
          return w = m._init, C(g, p, w(m._payload), S)
      }
      if (Ea(m)) return b(g, p, m, S);
      if (ca(m)) return h(g, p, m, S);
      ql(g, m)
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(g, p.sibling), p = o(p, m), p.return = g, g = p) : (n(g, p), p = Xu(m, g.mode, S), p.return = g, g = p), a(g)) : n(g, p)
  }
  return C
}
var Bi = Ly(!0),
  Ay = Ly(!1),
  Cl = {},
  br = vo(Cl),
  tl = vo(Cl),
  nl = vo(Cl);

function Eo(e) {
  if (e === Cl) throw Error(q(174));
  return e
}

function Zv(e, t) {
  switch (at(nl, t), at(tl, e), at(br, Cl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bd(t, e)
  }
  dt(br), at(br, t)
}

function Hi() {
  dt(br), dt(tl), dt(nl)
}

function jy(e) {
  Eo(nl.current);
  var t = Eo(br.current),
    n = Bd(t, e.type);
  t !== n && (at(tl, e), at(br, n))
}

function Jv(e) {
  tl.current === e && (dt(br), dt(tl))
}
var mt = vo(0);

function tc(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var Hu = [];

function ep() {
  for (var e = 0; e < Hu.length; e++) Hu[e]._workInProgressVersionPrimary = null;
  Hu.length = 0
}
var xs = Br.ReactCurrentDispatcher,
  Wu = Br.ReactCurrentBatchConfig,
  Ao = 0,
  ht = null,
  Nt = null,
  zt = null,
  nc = !1,
  ka = !1,
  rl = 0,
  zw = 0;

function Vt() {
  throw Error(q(321))
}

function tp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ir(e[n], t[n])) return !1;
  return !0
}

function np(e, t, n, r, o, i) {
  if (Ao = i, ht = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xs.current = e === null || e.memoizedState === null ? Fw : Dw, e = n(r, o), ka) {
    i = 0;
    do {
      if (ka = !1, rl = 0, 25 <= i) throw Error(q(301));
      i += 1, zt = Nt = null, t.updateQueue = null, xs.current = Bw, e = n(r, o)
    } while (ka)
  }
  if (xs.current = rc, t = Nt !== null && Nt.next !== null, Ao = 0, zt = Nt = ht = null, nc = !1, t) throw Error(q(300));
  return e
}

function rp() {
  var e = rl !== 0;
  return rl = 0, e
}

function gr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return zt === null ? ht.memoizedState = zt = e : zt = zt.next = e, zt
}

function Hn() {
  if (Nt === null) {
    var e = ht.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = Nt.next;
  var t = zt === null ? ht.memoizedState : zt.next;
  if (t !== null) zt = t, Nt = e;
  else {
    if (e === null) throw Error(q(310));
    Nt = e, e = {
      memoizedState: Nt.memoizedState,
      baseState: Nt.baseState,
      baseQueue: Nt.baseQueue,
      queue: Nt.queue,
      next: null
    }, zt === null ? ht.memoizedState = zt = e : zt = zt.next = e
  }
  return zt
}

function ol(e, t) {
  return typeof t == "function" ? t(e) : t
}

function Vu(e) {
  var t = Hn(),
    n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = Nt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a
    }
    r.baseQueue = o = i, n.pending = null
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = a = null,
      s = null,
      u = i;
    do {
      var d = u.lane;
      if ((Ao & d) === d) s !== null && (s = s.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (l = s = f, a = r) : s = s.next = f, ht.lanes |= d, jo |= d
      }
      u = u.next
    } while (u !== null && u !== i);
    s === null ? a = r : s.next = l, ir(r, t.memoizedState) || (sn = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do i = o.lane, ht.lanes |= i, jo |= i, o = o.next; while (o !== e)
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function Uu(e) {
  var t = Hn(),
    n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do i = e(i, a.action), a = a.next; while (a !== o);
    ir(i, t.memoizedState) || (sn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
  }
  return [i, r]
}

function Fy() {}

function Dy(e, t) {
  var n = ht,
    r = Hn(),
    o = t(),
    i = !ir(r.memoizedState, o);
  if (i && (r.memoizedState = o, sn = !0), r = r.queue, op(Wy.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || zt !== null && zt.memoizedState.tag & 1) {
    if (n.flags |= 2048, il(9, Hy.bind(null, n, r, o, t), void 0, null), Lt === null) throw Error(q(349));
    Ao & 30 || By(n, t, o)
  }
  return o
}

function By(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = ht.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, ht.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Hy(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Vy(t) && Uy(e)
}

function Wy(e, t, n) {
  return n(function() {
    Vy(t) && Uy(e)
  })
}

function Vy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ir(e, n)
  } catch {
    return !0
  }
}

function Uy(e) {
  var t = jr(e, 1);
  t !== null && tr(t, e, 1, -1)
}

function Km(e) {
  var t = gr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: ol,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = jw.bind(null, ht, e), [t.memoizedState, e]
}

function il(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = ht.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, ht.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ky() {
  return Hn().memoizedState
}

function ws(e, t, n, r) {
  var o = gr();
  ht.flags |= e, o.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r)
}

function Vc(e, t, n, r) {
  var o = Hn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Nt !== null) {
    var a = Nt.memoizedState;
    if (i = a.destroy, r !== null && tp(r, a.deps)) {
      o.memoizedState = il(t, n, i, r);
      return
    }
  }
  ht.flags |= e, o.memoizedState = il(1 | t, n, i, r)
}

function Gm(e, t) {
  return ws(8390656, 8, e, t)
}

function op(e, t) {
  return Vc(2048, 8, e, t)
}

function Gy(e, t) {
  return Vc(4, 2, e, t)
}

function Xy(e, t) {
  return Vc(4, 4, e, t)
}

function qy(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function() {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function() {
      t.current = null
    }
}

function Qy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vc(4, 4, qy.bind(null, t, e), n)
}

function ip() {}

function Yy(e, t) {
  var n = Hn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Zy(e, t) {
  var n = Hn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Jy(e, t, n) {
  return Ao & 21 ? (ir(n, t) || (n = ny(), ht.lanes |= n, jo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, sn = !0), e.memoizedState = n)
}

function Lw(e, t) {
  var n = Qe;
  Qe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Wu.transition;
  Wu.transition = {};
  try {
    e(!1), t()
  } finally {
    Qe = n, Wu.transition = r
  }
}

function eb() {
  return Hn().memoizedState
}

function Aw(e, t, n) {
  var r = lo(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, tb(e)) nb(t, n);
  else if (n = My(e, t, n, r), n !== null) {
    var o = Jt();
    tr(n, e, r, o), rb(n, t, r)
  }
}

function jw(e, t, n) {
  var r = lo(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (tb(e)) nb(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState,
        l = i(a, n);
      if (o.hasEagerState = !0, o.eagerState = l, ir(l, a)) {
        var s = t.interleaved;
        s === null ? (o.next = o, Qv(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
        return
      }
    } catch {} finally {}
    n = My(e, t, o, r), n !== null && (o = Jt(), tr(n, e, r, o), rb(n, t, r))
  }
}

function tb(e) {
  var t = e.alternate;
  return e === ht || t !== null && t === ht
}

function nb(e, t) {
  ka = nc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function rb(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lv(e, n)
  }
}
var rc = {
    readContext: Bn,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useInsertionEffect: Vt,
    useLayoutEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useMutableSource: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    unstable_isNewReconciler: !1
  },
  Fw = {
    readContext: Bn,
    useCallback: function(e, t) {
      return gr().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: Bn,
    useEffect: Gm,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null, ws(4194308, 4, qy.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
      return ws(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
      return ws(4, 2, e, t)
    },
    useMemo: function(e, t) {
      var n = gr();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function(e, t, n) {
      var r = gr();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = Aw.bind(null, ht, e), [r.memoizedState, e]
    },
    useRef: function(e) {
      var t = gr();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: Km,
    useDebugValue: ip,
    useDeferredValue: function(e) {
      return gr().memoizedState = e
    },
    useTransition: function() {
      var e = Km(!1),
        t = e[0];
      return e = Lw.bind(null, e[1]), gr().memoizedState = e, [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
      var r = ht,
        o = gr();
      if (vt) {
        if (n === void 0) throw Error(q(407));
        n = n()
      } else {
        if (n = t(), Lt === null) throw Error(q(349));
        Ao & 30 || By(r, t, n)
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t
      };
      return o.queue = i, Gm(Wy.bind(null, r, i, e), [e]), r.flags |= 2048, il(9, Hy.bind(null, r, i, n, t), void 0, null), n
    },
    useId: function() {
      var e = gr(),
        t = Lt.identifierPrefix;
      if (vt) {
        var n = _r,
          r = Mr;
        n = (r & ~(1 << 32 - er(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = rl++, 0 < n && (t += "H" + n.toString(32)), t += ":"
      } else n = zw++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  Dw = {
    readContext: Bn,
    useCallback: Yy,
    useContext: Bn,
    useEffect: op,
    useImperativeHandle: Qy,
    useInsertionEffect: Gy,
    useLayoutEffect: Xy,
    useMemo: Zy,
    useReducer: Vu,
    useRef: Ky,
    useState: function() {
      return Vu(ol)
    },
    useDebugValue: ip,
    useDeferredValue: function(e) {
      var t = Hn();
      return Jy(t, Nt.memoizedState, e)
    },
    useTransition: function() {
      var e = Vu(ol)[0],
        t = Hn().memoizedState;
      return [e, t]
    },
    useMutableSource: Fy,
    useSyncExternalStore: Dy,
    useId: eb,
    unstable_isNewReconciler: !1
  },
  Bw = {
    readContext: Bn,
    useCallback: Yy,
    useContext: Bn,
    useEffect: op,
    useImperativeHandle: Qy,
    useInsertionEffect: Gy,
    useLayoutEffect: Xy,
    useMemo: Zy,
    useReducer: Uu,
    useRef: Ky,
    useState: function() {
      return Uu(ol)
    },
    useDebugValue: ip,
    useDeferredValue: function(e) {
      var t = Hn();
      return Nt === null ? t.memoizedState = e : Jy(t, Nt.memoizedState, e)
    },
    useTransition: function() {
      var e = Uu(ol)[0],
        t = Hn().memoizedState;
      return [e, t]
    },
    useMutableSource: Fy,
    useSyncExternalStore: Dy,
    useId: eb,
    unstable_isNewReconciler: !1
  };

function Wi(e, t) {
  try {
    var n = "",
      r = t;
    do n += mx(r), r = r.return; while (r);
    var o = n
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null
  }
}

function Ku(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}

function df(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function() {
      throw n
    })
  }
}
var Hw = typeof WeakMap == "function" ? WeakMap : Map;

function ob(e, t, n) {
  n = kr(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function() {
    ic || (ic = !0, Cf = r), df(e, t)
  }, n
}

function ib(e, t, n) {
  n = kr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o)
    }, n.callback = function() {
      df(e, t)
    }
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    df(e, t), typeof r != "function" && (ao === null ? ao = new Set([this]) : ao.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: a !== null ? a : ""
    })
  }), n
}

function Xm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hw;
    var o = new Set;
    r.set(t, o)
  } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
  o.has(n) || (o.add(n), e = nE.bind(null, e, t, n), t.then(e, e))
}

function qm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function Qm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kr(-1, 1), t.tag = 2, io(n, t, 1))), n.lanes |= 1), e)
}
var Ww = Br.ReactCurrentOwner,
  sn = !1;

function Yt(e, t, n, r) {
  t.child = e === null ? Ay(t, null, n, r) : Bi(t, e.child, n, r)
}

function Ym(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return zi(t, o), r = np(e, t, n, r, i, o), n = rp(), e !== null && !sn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Fr(e, t, o)) : (vt && n && Vv(t), t.flags |= 1, Yt(e, t, r, o), t.child)
}

function Zm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !vp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ab(e, t, i, r, o)) : (e = Ps(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ya, n(a, r) && e.ref === t.ref) return Fr(e, t, o)
  }
  return t.flags |= 1, e = so(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function ab(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ya(i, r) && e.ref === t.ref)
      if (sn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (sn = !0);
      else return t.lanes = e.lanes, Fr(e, t, o)
  }
  return ff(e, t, n, r, o)
}

function lb(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, at(Oi, yn), yn |= n;
    else {
      if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, at(Oi, yn), yn |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = i !== null ? i.baseLanes : n, at(Oi, yn), yn |= r
    }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, at(Oi, yn), yn |= r;
  return Yt(e, t, o, n), t.child
}

function sb(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ff(e, t, n, r, o) {
  var i = un(n) ? zo : Xt.current;
  return i = Fi(t, i), zi(t, o), n = np(e, t, n, r, i, o), r = rp(), e !== null && !sn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Fr(e, t, o)) : (vt && r && Vv(t), t.flags |= 1, Yt(e, t, n, o), t.child)
}

function Jm(e, t, n, r, o) {
  if (un(n)) {
    var i = !0;
    qs(t)
  } else i = !1;
  if (zi(t, o), t.stateNode === null) Es(e, t), zy(t, n, r), uf(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? u = Bn(u) : (u = un(n) ? zo : Xt.current, u = Fi(t, u));
    var d = n.getDerivedStateFromProps,
      f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || s !== u) && Vm(t, a, r, u), Xr = !1;
    var v = t.memoizedState;
    a.state = v, ec(t, r, a, o), s = t.memoizedState, l !== r || v !== s || cn.current || Xr ? (typeof d == "function" && (cf(t, n, d, r), s = t.memoizedState), (l = Xr || Wm(t, n, l, r, v, s, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = u, r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
  } else {
    a = t.stateNode, _y(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Xn(t.type, l), a.props = u, f = t.pendingProps, v = a.context, s = n.contextType, typeof s == "object" && s !== null ? s = Bn(s) : (s = un(n) ? zo : Xt.current, s = Fi(t, s));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== f || v !== s) && Vm(t, a, r, s), Xr = !1, v = t.memoizedState, a.state = v, ec(t, r, a, o);
    var b = t.memoizedState;
    l !== f || v !== b || cn.current || Xr ? (typeof y == "function" && (cf(t, n, y, r), b = t.memoizedState), (u = Xr || Wm(t, n, u, r, v, b, s) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = b), a.props = r, a.state = b, a.context = s, r = u) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return vf(e, t, n, r, i, o)
}

function vf(e, t, n, r, o, i) {
  sb(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && jm(t, n, !1), Fr(e, t, i);
  r = t.stateNode, Ww.current = t;
  var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Bi(t, e.child, null, i), t.child = Bi(t, null, l, i)) : Yt(e, t, l, i), t.memoizedState = r.state, o && jm(t, n, !0), t.child
}

function cb(e) {
  var t = e.stateNode;
  t.pendingContext ? Am(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Am(e, t.context, !1), Zv(e, t.containerInfo)
}

function eg(e, t, n, r, o) {
  return Di(), Kv(o), t.flags |= 256, Yt(e, t, n, r), t.child
}
var pf = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function mf(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function ub(e, t, n) {
  var r = t.pendingProps,
    o = mt.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), at(mt, o & 1), e === null) return lf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = {
    mode: "hidden",
    children: a
  }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Gc(a, r, 0, null), e = Io(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mf(n), t.memoizedState = pf, e) : ap(t, a));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Vw(e, t, a, r, l, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, l = o.sibling;
    var s = {
      mode: "hidden",
      children: r.children
    };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = so(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = so(l, i) : (i = Io(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? mf(n) : {
      baseLanes: a.baseLanes | n,
      cachePool: null,
      transitions: a.transitions
    }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = pf, r
  }
  return i = e.child, e = i.sibling, r = so(i, {
    mode: "visible",
    children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ap(e, t) {
  return t = Gc({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function Ql(e, t, n, r) {
  return r !== null && Kv(r), Bi(t, e.child, null, n), e = ap(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Vw(e, t, n, r, o, i, a) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Ku(Error(q(422))), Ql(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Gc({
    mode: "visible",
    children: r.children
  }, o, 0, null), i = Io(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Bi(t, e.child, null, a), t.child.memoizedState = mf(a), t.memoizedState = pf, i);
  if (!(t.mode & 1)) return Ql(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(q(419)), r = Ku(i, r, void 0), Ql(e, t, a, r)
  }
  if (l = (a & e.childLanes) !== 0, sn || l) {
    if (r = Lt, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, jr(e, o), tr(r, e, o, -1))
    }
    return fp(), r = Ku(Error(q(421))), Ql(e, t, a, r)
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rE.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Sn = oo(o.nextSibling), wn = t, vt = !0, Zn = null, e !== null && (An[jn++] = Mr, An[jn++] = _r, An[jn++] = Lo, Mr = e.id, _r = e.overflow, Lo = t), t = ap(t, r.children), t.flags |= 4096, t)
}

function tg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sf(e.return, t, n)
}

function Gu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: o
  } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function db(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if (Yt(e, t, r.children, n), r = mt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && tg(e, n, t);
      else if (e.tag === 19) tg(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if (at(mt, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && tc(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Gu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null;) {
        if (e = o.alternate, e !== null && tc(e) === null) {
          t.child = o;
          break
        }
        e = o.sibling, o.sibling = n, n = o, o = e
      }
      Gu(t, !0, n, null, i);
      break;
    case "together":
      Gu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function Es(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Fr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(q(153));
  if (t.child !== null) {
    for (e = t.child, n = so(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = so(e, e.pendingProps), n.return = t;
    n.sibling = null
  }
  return t.child
}

function Uw(e, t, n) {
  switch (t.tag) {
    case 3:
      cb(t), Di();
      break;
    case 5:
      jy(t);
      break;
    case 1:
      un(t.type) && qs(t);
      break;
    case 4:
      Zv(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      at(Zs, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (at(mt, mt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ub(e, t, n) : (at(mt, mt.current & 1), e = Fr(e, t, n), e !== null ? e.sibling : null);
      at(mt, mt.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return db(e, t, n);
        t.flags |= 128
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), at(mt, mt.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, lb(e, t, n)
  }
  return Fr(e, t, n)
}
var fb, gf, vb, pb;
fb = function(e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
gf = function() {};
vb = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Eo(br.current);
    var i = null;
    switch (n) {
      case "input":
        o = Ad(e, o), r = Ad(e, r), i = [];
        break;
      case "select":
        o = yt({}, o, {
          value: void 0
        }), r = yt({}, r, {
          value: void 0
        }), i = [];
        break;
      case "textarea":
        o = Dd(e, o), r = Dd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gs)
    }
    Hd(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Va.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && s !== l && (s != null || l != null))
        if (u === "style")
          if (l) {
            for (a in l) !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), n[a] = s[a])
          } else n || (i || (i = []), i.push(u, n)), n = s;
      else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Va.hasOwnProperty(u) ? (s != null && u === "onScroll" && ut("scroll", e), i || l === s || (i = [])) : (i = i || []).push(u, s))
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
pb = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function ma(e, t) {
  if (!vt) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
  }
}

function Ut(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function Kw(e, t, n) {
  var r = t.pendingProps;
  switch (Uv(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ut(t), null;
    case 1:
      return un(t.type) && Xs(), Ut(t), null;
    case 3:
      return r = t.stateNode, Hi(), dt(cn), dt(Xt), ep(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Zn !== null && (Ef(Zn), Zn = null))), gf(e, t), Ut(t), null;
    case 5:
      Jv(t);
      var o = Eo(nl.current);
      if (n = t.type, e !== null && t.stateNode != null) vb(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(q(166));
          return Ut(t), null
        }
        if (e = Eo(br.current), Xl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[hr] = t, r[el] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ut("cancel", r), ut("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ut("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Oa.length; o++) ut(Oa[o], r);
              break;
            case "source":
              ut("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ut("error", r), ut("load", r);
              break;
            case "details":
              ut("toggle", r);
              break;
            case "input":
              um(r, i), ut("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!i.multiple
              }, ut("invalid", r);
              break;
            case "textarea":
              fm(r, i), ut("invalid", r)
          }
          Hd(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Gl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Gl(r.textContent, l, e), o = ["children", "" + l]) : Va.hasOwnProperty(a) && l != null && a === "onScroll" && ut("scroll", r)
            } switch (n) {
            case "input":
              Fl(r), dm(r, i, !0);
              break;
            case "textarea":
              Fl(r), vm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Gs)
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = B0(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
            is: r.is
          }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[hr] = t, e[el] = r, fb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Wd(n, r), n) {
              case "dialog":
                ut("cancel", e), ut("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ut("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Oa.length; o++) ut(Oa[o], e);
                o = r;
                break;
              case "source":
                ut("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ut("error", e), ut("load", e), o = r;
                break;
              case "details":
                ut("toggle", e), o = r;
                break;
              case "input":
                um(e, r), o = Ad(e, r), ut("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, o = yt({}, r, {
                  value: void 0
                }), ut("invalid", e);
                break;
              case "textarea":
                fm(e, r), o = Dd(e, r), ut("invalid", e);
                break;
              default:
                o = r
            }
            Hd(n, o),
            l = o;
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style" ? V0(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && H0(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Ua(e, s) : typeof s == "number" && Ua(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Va.hasOwnProperty(i) ? s != null && i === "onScroll" && ut("scroll", e) : s != null && Iv(e, i, s, a))
              } switch (n) {
              case "input":
                Fl(e), dm(e, r, !1);
                break;
              case "textarea":
                Fl(e), vm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + co(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Ni(e, !!r.multiple, i, !1) : r.defaultValue != null && Ni(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Gs)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return Ut(t), null;
    case 6:
      if (e && t.stateNode != null) pb(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(q(166));
        if (n = Eo(nl.current), Eo(br.current), Xl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[hr] = t, (i = r.nodeValue !== n) && (e = wn, e !== null)) switch (e.tag) {
            case 3:
              Gl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Gl(r.nodeValue, n, (e.mode & 1) !== 0)
          }
          i && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[hr] = t, t.stateNode = r
      }
      return Ut(t), null;
    case 13:
      if (dt(mt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (vt && Sn !== null && t.mode & 1 && !(t.flags & 128)) Ny(), Di(), t.flags |= 98560, i = !1;
        else if (i = Xl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(q(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(q(317));
            i[hr] = t
          } else Di(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ut(t), i = !1
        } else Zn !== null && (Ef(Zn), Zn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || mt.current & 1 ? Mt === 0 && (Mt = 3) : fp())), t.updateQueue !== null && (t.flags |= 4), Ut(t), null);
    case 4:
      return Hi(), gf(e, t), e === null && Za(t.stateNode.containerInfo), Ut(t), null;
    case 10:
      return qv(t.type._context), Ut(t), null;
    case 17:
      return un(t.type) && Xs(), Ut(t), null;
    case 19:
      if (dt(mt), i = t.memoizedState, i === null) return Ut(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r) ma(i, !1);
        else {
          if (Mt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (a = tc(e), a !== null) {
                for (t.flags |= 128, ma(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), n = n.sibling;
                return at(mt, mt.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null && Ot() > Vi && (t.flags |= 128, r = !0, ma(i, !1), t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = tc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ma(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !vt) return Ut(t), null
          } else 2 * Ot() - i.renderingStartTime > Vi && n !== 1073741824 && (t.flags |= 128, r = !0, ma(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a)
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ot(), t.sibling = null, n = mt.current, at(mt, r ? n & 1 | 2 : n & 1), t) : (Ut(t), null);
    case 22:
    case 23:
      return dp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? yn & 1073741824 && (Ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ut(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(q(156, t.tag))
}

function Gw(e, t) {
  switch (Uv(t), t.tag) {
    case 1:
      return un(t.type) && Xs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Hi(), dt(cn), dt(Xt), ep(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Jv(t), null;
    case 13:
      if (dt(mt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(q(340));
        Di()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return dt(mt), null;
    case 4:
      return Hi(), null;
    case 10:
      return qv(t.type._context), null;
    case 22:
    case 23:
      return dp(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var Yl = !1,
  Gt = !1,
  Xw = typeof WeakSet == "function" ? WeakSet : Set,
  ae = null;

function $i(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      xt(e, t, r)
    } else n.current = null
}

function hf(e, t, n) {
  try {
    n()
  } catch (r) {
    xt(e, t, r)
  }
}
var ng = !1;

function qw(e, t) {
  if (Jd = Vs, e = yy(), Wv(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset,
          i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType
        } catch {
          n = null;
          break e
        }
        var a = 0,
          l = -1,
          s = -1,
          u = 0,
          d = 0,
          f = e,
          v = null;
        t: for (;;) {
          for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (l = a + o), f !== i || r !== 0 && f.nodeType !== 3 || (s = a + r), f.nodeType === 3 && (a += f.nodeValue.length), (y = f.firstChild) !== null;) v = f, f = y;
          for (;;) {
            if (f === e) break t;
            if (v === n && ++u === o && (l = a), v === i && ++d === r && (s = a), (y = f.nextSibling) !== null) break;
            f = v, v = f.parentNode
          }
          f = y
        }
        n = l === -1 || s === -1 ? null : {
          start: l,
          end: s
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (ef = {
      focusedElem: e,
      selectionRange: n
    }, Vs = !1, ae = t; ae !== null;)
    if (t = ae, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ae = e;
    else
      for (; ae !== null;) {
        t = ae;
        try {
          var b = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (b !== null) {
                var h = b.memoizedProps,
                  C = b.memoizedState,
                  g = t.stateNode,
                  p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? h : Xn(t.type, h), C);
                g.__reactInternalSnapshotBeforeUpdate = p
              }
              break;
            case 3:
              var m = t.stateNode.containerInfo;
              m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(q(163))
          }
        } catch (S) {
          xt(t, t.return, S)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, ae = e;
          break
        }
        ae = t.return
      }
  return b = ng, ng = !1, b
}

function za(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && hf(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}

function Uc(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function yf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function mb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, mb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[hr], delete t[el], delete t[rf], delete t[Nw], delete t[Mw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function gb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function rg(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || gb(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function bf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gs));
  else if (r !== 4 && (e = e.child, e !== null))
    for (bf(e, t, n), e = e.sibling; e !== null;) bf(e, t, n), e = e.sibling
}

function Sf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Sf(e, t, n), e = e.sibling; e !== null;) Sf(e, t, n), e = e.sibling
}
var Ft = null,
  qn = !1;

function Ur(e, t, n) {
  for (n = n.child; n !== null;) hb(e, t, n), n = n.sibling
}

function hb(e, t, n) {
  if (yr && typeof yr.onCommitFiberUnmount == "function") try {
    yr.onCommitFiberUnmount(Ac, n)
  } catch {}
  switch (n.tag) {
    case 5:
      Gt || $i(n, t);
    case 6:
      var r = Ft,
        o = qn;
      Ft = null, Ur(e, t, n), Ft = r, qn = o, Ft !== null && (qn ? (e = Ft, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ft.removeChild(n.stateNode));
      break;
    case 18:
      Ft !== null && (qn ? (e = Ft, n = n.stateNode, e.nodeType === 8 ? Du(e.parentNode, n) : e.nodeType === 1 && Du(e, n), qa(e)) : Du(Ft, n.stateNode));
      break;
    case 4:
      r = Ft, o = qn, Ft = n.stateNode.containerInfo, qn = !0, Ur(e, t, n), Ft = r, qn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Gt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && hf(n, t, a), o = o.next
        } while (o !== r)
      }
      Ur(e, t, n);
      break;
    case 1:
      if (!Gt && ($i(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
      } catch (l) {
        xt(n, t, l)
      }
      Ur(e, t, n);
      break;
    case 21:
      Ur(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Gt = (r = Gt) || n.memoizedState !== null, Ur(e, t, n), Gt = r) : Ur(e, t, n);
      break;
    default:
      Ur(e, t, n)
  }
}

function og(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xw), t.forEach(function(r) {
      var o = oE.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o))
    })
  }
}

function Kn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              Ft = l.stateNode, qn = !1;
              break e;
            case 3:
              Ft = l.stateNode.containerInfo, qn = !0;
              break e;
            case 4:
              Ft = l.stateNode.containerInfo, qn = !0;
              break e
          }
          l = l.return
        }
        if (Ft === null) throw Error(q(160));
        hb(i, a, o), Ft = null, qn = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null
      } catch (u) {
        xt(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) yb(t, e), t = t.sibling
}

function yb(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Kn(t, e), mr(e), r & 4) {
        try {
          za(3, e, e.return), Uc(3, e)
        } catch (h) {
          xt(e, e.return, h)
        }
        try {
          za(5, e, e.return)
        } catch (h) {
          xt(e, e.return, h)
        }
      }
      break;
    case 1:
      Kn(t, e), mr(e), r & 512 && n !== null && $i(n, n.return);
      break;
    case 5:
      if (Kn(t, e), mr(e), r & 512 && n !== null && $i(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ua(o, "")
        } catch (h) {
          xt(e, e.return, h)
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          l === "input" && i.type === "radio" && i.name != null && F0(o, i), Wd(l, a);
          var u = Wd(l, i);
          for (a = 0; a < s.length; a += 2) {
            var d = s[a],
              f = s[a + 1];
            d === "style" ? V0(o, f) : d === "dangerouslySetInnerHTML" ? H0(o, f) : d === "children" ? Ua(o, f) : Iv(o, d, f, u)
          }
          switch (l) {
            case "input":
              jd(o, i);
              break;
            case "textarea":
              D0(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? Ni(o, !!i.multiple, y, !1) : v !== !!i.multiple && (i.defaultValue != null ? Ni(o, !!i.multiple, i.defaultValue, !0) : Ni(o, !!i.multiple, i.multiple ? [] : "", !1))
          }
          o[el] = i
        } catch (h) {
          xt(e, e.return, h)
        }
      }
      break;
    case 6:
      if (Kn(t, e), mr(e), r & 4) {
        if (e.stateNode === null) throw Error(q(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i
        } catch (h) {
          xt(e, e.return, h)
        }
      }
      break;
    case 3:
      if (Kn(t, e), mr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        qa(t.containerInfo)
      } catch (h) {
        xt(e, e.return, h)
      }
      break;
    case 4:
      Kn(t, e), mr(e);
      break;
    case 13:
      Kn(t, e), mr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (cp = Ot())), r & 4 && og(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Gt = (u = Gt) || d, Kn(t, e), Gt = u) : Kn(t, e), mr(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
          for (ae = e, d = e.child; d !== null;) {
            for (f = ae = d; ae !== null;) {
              switch (v = ae, y = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  za(4, v, v.return);
                  break;
                case 1:
                  $i(v, v.return);
                  var b = v.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount()
                    } catch (h) {
                      xt(r, n, h)
                    }
                  }
                  break;
                case 5:
                  $i(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ag(f);
                    continue
                  }
              }
              y !== null ? (y.return = v, ae = y) : ag(f)
            }
            d = d.sibling
          }
        e: for (d = null, f = e;;) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, s = f.memoizedProps.style, a = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = W0("display", a))
              } catch (h) {
                xt(e, e.return, h)
              }
            }
          } else if (f.tag === 6) {
            if (d === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps
            } catch (h) {
              xt(e, e.return, h)
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue
          }
          if (f === e) break e;
          for (; f.sibling === null;) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), f = f.return
          }
          d === f && (d = null), f.sibling.return = f.return, f = f.sibling
        }
      }
      break;
    case 19:
      Kn(t, e), mr(e), r & 4 && og(e);
      break;
    case 21:
      break;
    default:
      Kn(t, e), mr(e)
  }
}

function mr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (gb(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(q(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ua(o, ""), r.flags &= -33);
          var i = rg(e);
          Sf(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = rg(e);
          bf(e, l, a);
          break;
        default:
          throw Error(q(161))
      }
    }
    catch (s) {
      xt(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function Qw(e, t, n) {
  ae = e, bb(e)
}

function bb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ae !== null;) {
    var o = ae,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Yl;
      if (!a) {
        var l = o.alternate,
          s = l !== null && l.memoizedState !== null || Gt;
        l = Yl;
        var u = Gt;
        if (Yl = a, (Gt = s) && !u)
          for (ae = o; ae !== null;) a = ae, s = a.child, a.tag === 22 && a.memoizedState !== null ? lg(o) : s !== null ? (s.return = a, ae = s) : lg(o);
        for (; i !== null;) ae = i, bb(i), i = i.sibling;
        ae = o, Yl = l, Gt = u
      }
      ig(e)
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, ae = i) : ig(e)
  }
}

function ig(e) {
  for (; ae !== null;) {
    var t = ae;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Gt || Uc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Gt)
              if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : Xn(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
              } var i = t.updateQueue;
            i !== null && Hm(t, i, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              Hm(t, a, n)
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src)
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var f = d.dehydrated;
                  f !== null && qa(f)
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(q(163))
        }
        Gt || t.flags & 512 && yf(t)
      } catch (v) {
        xt(t, t.return, v)
      }
    }
    if (t === e) {
      ae = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, ae = n;
      break
    }
    ae = t.return
  }
}

function ag(e) {
  for (; ae !== null;) {
    var t = ae;
    if (t === e) {
      ae = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, ae = n;
      break
    }
    ae = t.return
  }
}

function lg(e) {
  for (; ae !== null;) {
    var t = ae;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Uc(4, t)
          } catch (s) {
            xt(t, n, s)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount()
            } catch (s) {
              xt(t, o, s)
            }
          }
          var i = t.return;
          try {
            yf(t)
          } catch (s) {
            xt(t, i, s)
          }
          break;
        case 5:
          var a = t.return;
          try {
            yf(t)
          } catch (s) {
            xt(t, a, s)
          }
      }
    } catch (s) {
      xt(t, t.return, s)
    }
    if (t === e) {
      ae = null;
      break
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, ae = l;
      break
    }
    ae = t.return
  }
}
var Yw = Math.ceil,
  oc = Br.ReactCurrentDispatcher,
  lp = Br.ReactCurrentOwner,
  Dn = Br.ReactCurrentBatchConfig,
  Ve = 0,
  Lt = null,
  Tt = null,
  Dt = 0,
  yn = 0,
  Oi = vo(0),
  Mt = 0,
  al = null,
  jo = 0,
  Kc = 0,
  sp = 0,
  La = null,
  ln = null,
  cp = 0,
  Vi = 1 / 0,
  Tr = null,
  ic = !1,
  Cf = null,
  ao = null,
  Zl = !1,
  Zr = null,
  ac = 0,
  Aa = 0,
  xf = null,
  $s = -1,
  Os = 0;

function Jt() {
  return Ve & 6 ? Ot() : $s !== -1 ? $s : $s = Ot()
}

function lo(e) {
  return e.mode & 1 ? Ve & 2 && Dt !== 0 ? Dt & -Dt : kw.transition !== null ? (Os === 0 && (Os = ny()), Os) : (e = Qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cy(e.type)), e) : 1
}

function tr(e, t, n, r) {
  if (50 < Aa) throw Aa = 0, xf = null, Error(q(185));
  yl(e, n, r), (!(Ve & 2) || e !== Lt) && (e === Lt && (!(Ve & 2) && (Kc |= n), Mt === 4 && Qr(e, Dt)), dn(e, r), n === 1 && Ve === 0 && !(t.mode & 1) && (Vi = Ot() + 500, Hc && po()))
}

function dn(e, t) {
  var n = e.callbackNode;
  kx(e, t);
  var r = Ws(e, e === Lt ? Dt : 0);
  if (r === 0) n !== null && gm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gm(n), t === 1) e.tag === 0 ? _w(sg.bind(null, e)) : Ry(sg.bind(null, e)), Tw(function() {
      !(Ve & 6) && po()
    }), n = null;
    else {
      switch (ry(r)) {
        case 1:
          n = zv;
          break;
        case 4:
          n = ey;
          break;
        case 16:
          n = Hs;
          break;
        case 536870912:
          n = ty;
          break;
        default:
          n = Hs
      }
      n = Pb(n, Sb.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function Sb(e, t) {
  if ($s = -1, Os = 0, Ve & 6) throw Error(q(327));
  var n = e.callbackNode;
  if (Li() && e.callbackNode !== n) return null;
  var r = Ws(e, e === Lt ? Dt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = lc(e, r);
  else {
    t = r;
    var o = Ve;
    Ve |= 2;
    var i = xb();
    (Lt !== e || Dt !== t) && (Tr = null, Vi = Ot() + 500, To(e, t));
    do try {
      eE();
      break
    } catch (l) {
      Cb(e, l)
    }
    while (1);
    Xv(), oc.current = i, Ve = o, Tt !== null ? t = 0 : (Lt = null, Dt = 0, t = Mt)
  }
  if (t !== 0) {
    if (t === 2 && (o = Xd(e), o !== 0 && (r = o, t = wf(e, o))), t === 1) throw n = al, To(e, 0), Qr(e, r), dn(e, Ot()), n;
    if (t === 6) Qr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Zw(o) && (t = lc(e, r), t === 2 && (i = Xd(e), i !== 0 && (r = i, t = wf(e, i))), t === 1)) throw n = al, To(e, 0), Qr(e, r), dn(e, Ot()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(q(345));
        case 2:
          bo(e, ln, Tr);
          break;
        case 3:
          if (Qr(e, r), (r & 130023424) === r && (t = cp + 500 - Ot(), 10 < t)) {
            if (Ws(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Jt(), e.pingedLanes |= e.suspendedLanes & o;
              break
            }
            e.timeoutHandle = nf(bo.bind(null, e, ln, Tr), t);
            break
          }
          bo(e, ln, Tr);
          break;
        case 4:
          if (Qr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var a = 31 - er(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i
          }
          if (r = o, r = Ot() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yw(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = nf(bo.bind(null, e, ln, Tr), r);
            break
          }
          bo(e, ln, Tr);
          break;
        case 5:
          bo(e, ln, Tr);
          break;
        default:
          throw Error(q(329))
      }
    }
  }
  return dn(e, Ot()), e.callbackNode === n ? Sb.bind(null, e) : null
}

function wf(e, t) {
  var n = La;
  return e.current.memoizedState.isDehydrated && (To(e, t).flags |= 256), e = lc(e, t), e !== 2 && (t = ln, ln = n, t !== null && Ef(t)), e
}

function Ef(e) {
  ln === null ? ln = e : ln.push.apply(ln, e)
}

function Zw(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ir(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function Qr(e, t) {
  for (t &= ~sp, t &= ~Kc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - er(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function sg(e) {
  if (Ve & 6) throw Error(q(327));
  Li();
  var t = Ws(e, 0);
  if (!(t & 1)) return dn(e, Ot()), null;
  var n = lc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xd(e);
    r !== 0 && (t = r, n = wf(e, r))
  }
  if (n === 1) throw n = al, To(e, 0), Qr(e, t), dn(e, Ot()), n;
  if (n === 6) throw Error(q(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bo(e, ln, Tr), dn(e, Ot()), null
}

function up(e, t) {
  var n = Ve;
  Ve |= 1;
  try {
    return e(t)
  } finally {
    Ve = n, Ve === 0 && (Vi = Ot() + 500, Hc && po())
  }
}

function Fo(e) {
  Zr !== null && Zr.tag === 0 && !(Ve & 6) && Li();
  var t = Ve;
  Ve |= 1;
  var n = Dn.transition,
    r = Qe;
  try {
    if (Dn.transition = null, Qe = 1, e) return e()
  } finally {
    Qe = r, Dn.transition = n, Ve = t, !(Ve & 6) && po()
  }
}

function dp() {
  yn = Oi.current, dt(Oi)
}

function To(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Rw(n)), Tt !== null)
    for (n = Tt.return; n !== null;) {
      var r = n;
      switch (Uv(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Xs();
          break;
        case 3:
          Hi(), dt(cn), dt(Xt), ep();
          break;
        case 5:
          Jv(r);
          break;
        case 4:
          Hi();
          break;
        case 13:
          dt(mt);
          break;
        case 19:
          dt(mt);
          break;
        case 10:
          qv(r.type._context);
          break;
        case 22:
        case 23:
          dp()
      }
      n = n.return
    }
  if (Lt = e, Tt = e = so(e.current, null), Dt = yn = t, Mt = 0, al = null, sp = Kc = jo = 0, ln = La = null, wo !== null) {
    for (t = 0; t < wo.length; t++)
      if (n = wo[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a
        }
        n.pending = r
      } wo = null
  }
  return e
}

function Cb(e, t) {
  do {
    var n = Tt;
    try {
      if (Xv(), xs.current = rc, nc) {
        for (var r = ht.memoizedState; r !== null;) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next
        }
        nc = !1
      }
      if (Ao = 0, zt = Nt = ht = null, ka = !1, rl = 0, lp.current = null, n === null || n.return === null) {
        Mt = 1, al = t, Tt = null;
        break
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (t = Dt, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null)
          }
          var y = qm(a);
          if (y !== null) {
            y.flags &= -257, Qm(y, a, l, i, t), y.mode & 1 && Xm(i, u, t), t = y, s = u;
            var b = t.updateQueue;
            if (b === null) {
              var h = new Set;
              h.add(s), t.updateQueue = h
            } else b.add(s);
            break e
          } else {
            if (!(t & 1)) {
              Xm(i, u, t), fp();
              break e
            }
            s = Error(q(426))
          }
        } else if (vt && l.mode & 1) {
          var C = qm(a);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Qm(C, a, l, i, t), Kv(Wi(s, l));
            break e
          }
        }
        i = s = Wi(s, l),
        Mt !== 4 && (Mt = 2),
        La === null ? La = [i] : La.push(i),
        i = a;do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = ob(i, s, t);
              Bm(i, g);
              break e;
            case 1:
              l = s;
              var p = i.type,
                m = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (ao === null || !ao.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = ib(i, l, t);
                Bm(i, S);
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Eb(n)
    } catch (E) {
      t = E, Tt === n && n !== null && (Tt = n = n.return);
      continue
    }
    break
  } while (1)
}

function xb() {
  var e = oc.current;
  return oc.current = rc, e === null ? rc : e
}

function fp() {
  (Mt === 0 || Mt === 3 || Mt === 2) && (Mt = 4), Lt === null || !(jo & 268435455) && !(Kc & 268435455) || Qr(Lt, Dt)
}

function lc(e, t) {
  var n = Ve;
  Ve |= 2;
  var r = xb();
  (Lt !== e || Dt !== t) && (Tr = null, To(e, t));
  do try {
    Jw();
    break
  } catch (o) {
    Cb(e, o)
  }
  while (1);
  if (Xv(), Ve = n, oc.current = r, Tt !== null) throw Error(q(261));
  return Lt = null, Dt = 0, Mt
}

function Jw() {
  for (; Tt !== null;) wb(Tt)
}

function eE() {
  for (; Tt !== null && !$x();) wb(Tt)
}

function wb(e) {
  var t = Ob(e.alternate, e, yn);
  e.memoizedProps = e.pendingProps, t === null ? Eb(e) : Tt = t, lp.current = null
}

function Eb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Gw(n, t), n !== null) {
        n.flags &= 32767, Tt = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Mt = 6, Tt = null;
        return
      }
    } else if (n = Kw(n, t, yn), n !== null) {
      Tt = n;
      return
    }
    if (t = t.sibling, t !== null) {
      Tt = t;
      return
    }
    Tt = t = e
  } while (t !== null);
  Mt === 0 && (Mt = 5)
}

function bo(e, t, n) {
  var r = Qe,
    o = Dn.transition;
  try {
    Dn.transition = null, Qe = 1, tE(e, t, n, r)
  } finally {
    Dn.transition = o, Qe = r
  }
  return null
}

function tE(e, t, n, r) {
  do Li(); while (Zr !== null);
  if (Ve & 6) throw Error(q(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(q(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (zx(e, i), e === Lt && (Tt = Lt = null, Dt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zl || (Zl = !0, Pb(Hs, function() {
      return Li(), null
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Dn.transition, Dn.transition = null;
    var a = Qe;
    Qe = 1;
    var l = Ve;
    Ve |= 4, lp.current = null, qw(e, n), yb(n, e), Cw(ef), Vs = !!Jd, ef = Jd = null, e.current = n, Qw(n), Ox(), Ve = l, Qe = a, Dn.transition = i
  } else e.current = n;
  if (Zl && (Zl = !1, Zr = e, ac = o), i = e.pendingLanes, i === 0 && (ao = null), Tx(n.stateNode), dn(e, Ot()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
  if (ic) throw ic = !1, e = Cf, Cf = null, e;
  return ac & 1 && e.tag !== 0 && Li(), i = e.pendingLanes, i & 1 ? e === xf ? Aa++ : (Aa = 0, xf = e) : Aa = 0, po(), null
}

function Li() {
  if (Zr !== null) {
    var e = ry(ac),
      t = Dn.transition,
      n = Qe;
    try {
      if (Dn.transition = null, Qe = 16 > e ? 16 : e, Zr === null) var r = !1;
      else {
        if (e = Zr, Zr = null, ac = 0, Ve & 6) throw Error(q(331));
        var o = Ve;
        for (Ve |= 4, ae = e.current; ae !== null;) {
          var i = ae,
            a = i.child;
          if (ae.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (ae = u; ae !== null;) {
                  var d = ae;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      za(8, d, i)
                  }
                  var f = d.child;
                  if (f !== null) f.return = d, ae = f;
                  else
                    for (; ae !== null;) {
                      d = ae;
                      var v = d.sibling,
                        y = d.return;
                      if (mb(d), d === u) {
                        ae = null;
                        break
                      }
                      if (v !== null) {
                        v.return = y, ae = v;
                        break
                      }
                      ae = y
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var h = b.child;
                if (h !== null) {
                  b.child = null;
                  do {
                    var C = h.sibling;
                    h.sibling = null, h = C
                  } while (h !== null)
                }
              }
              ae = i
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, ae = a;
          else e: for (; ae !== null;) {
            if (i = ae, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                za(9, i, i.return)
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, ae = g;
              break e
            }
            ae = i.return
          }
        }
        var p = e.current;
        for (ae = p; ae !== null;) {
          a = ae;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) m.return = a, ae = m;
          else e: for (a = p; ae !== null;) {
            if (l = ae, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Uc(9, l)
              }
            } catch (E) {
              xt(l, l.return, E)
            }
            if (l === a) {
              ae = null;
              break e
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, ae = S;
              break e
            }
            ae = l.return
          }
        }
        if (Ve = o, po(), yr && typeof yr.onPostCommitFiberRoot == "function") try {
          yr.onPostCommitFiberRoot(Ac, e)
        } catch {}
        r = !0
      }
      return r
    } finally {
      Qe = n, Dn.transition = t
    }
  }
  return !1
}

function cg(e, t, n) {
  t = Wi(n, t), t = ob(e, t, 1), e = io(e, t, 1), t = Jt(), e !== null && (yl(e, 1, t), dn(e, t))
}

function xt(e, t, n) {
  if (e.tag === 3) cg(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        cg(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ao === null || !ao.has(r))) {
          e = Wi(n, e), e = ib(t, e, 1), t = io(t, e, 1), e = Jt(), t !== null && (yl(t, 1, e), dn(t, e));
          break
        }
      }
      t = t.return
    }
}

function nE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Jt(), e.pingedLanes |= e.suspendedLanes & n, Lt === e && (Dt & n) === n && (Mt === 4 || Mt === 3 && (Dt & 130023424) === Dt && 500 > Ot() - cp ? To(e, 0) : sp |= n), dn(e, t)
}

function $b(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hl, Hl <<= 1, !(Hl & 130023424) && (Hl = 4194304)) : t = 1);
  var n = Jt();
  e = jr(e, t), e !== null && (yl(e, t, n), dn(e, n))
}

function rE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), $b(e, n)
}

function oE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(q(314))
  }
  r !== null && r.delete(t), $b(e, n)
}
var Ob;
Ob = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || cn.current) sn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return sn = !1, Uw(e, t, n);
      sn = !!(e.flags & 131072)
    }
  else sn = !1, vt && t.flags & 1048576 && Ty(t, Ys, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Es(e, t), e = t.pendingProps;
      var o = Fi(t, Xt.current);
      zi(t, n), o = np(null, t, r, e, o, n);
      var i = rp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, un(r) ? (i = !0, qs(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Yv(t), o.updater = Wc, t.stateNode = o, o._reactInternals = t, uf(t, r, e, n), t = vf(null, t, r, !0, i, n)) : (t.tag = 0, vt && i && Vv(t), Yt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Es(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = aE(r), e = Xn(r, e), o) {
          case 0:
            t = ff(null, t, r, e, n);
            break e;
          case 1:
            t = Jm(null, t, r, e, n);
            break e;
          case 11:
            t = Ym(null, t, r, e, n);
            break e;
          case 14:
            t = Zm(null, t, r, Xn(r.type, e), n);
            break e
        }
        throw Error(q(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), ff(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), Jm(e, t, r, o, n);
    case 3:
      e: {
        if (cb(t), e === null) throw Error(q(387));r = t.pendingProps,
        i = t.memoizedState,
        o = i.element,
        _y(e, t),
        ec(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Wi(Error(q(423)), t), t = eg(e, t, r, n, o);
            break e
          } else if (r !== o) {
          o = Wi(Error(q(424)), t), t = eg(e, t, r, n, o);
          break e
        } else
          for (Sn = oo(t.stateNode.containerInfo.firstChild), wn = t, vt = !0, Zn = null, n = Ay(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Di(), r === o) {
            t = Fr(e, t, n);
            break e
          }
          Yt(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return jy(t), e === null && lf(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, tf(r, o) ? a = null : i !== null && tf(r, i) && (t.flags |= 32), sb(e, t), Yt(e, t, a, n), t.child;
    case 6:
      return e === null && lf(t), null;
    case 13:
      return ub(e, t, n);
    case 4:
      return Zv(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Bi(t, null, r, n) : Yt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), Ym(e, t, r, o, n);
    case 7:
      return Yt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Yt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Yt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, at(Zs, r._currentValue), r._currentValue = a, i !== null)
          if (ir(i.value, a)) {
            if (i.children === o.children && !cn.current) {
              t = Fr(e, t, n);
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null;) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null;) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      s = kr(-1, n & -n), s.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? s.next = s : (s.next = d.next, d.next = s), u.pending = s
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), sf(i.return, n, t), l.lanes |= n;
                    break
                  }
                  s = s.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null) throw Error(q(341));
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), sf(a, n, t), a = i.sibling
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null;) {
                  if (a === t) {
                    a = null;
                    break
                  }
                  if (i = a.sibling, i !== null) {
                    i.return = a.return, a = i;
                    break
                  }
                  a = a.return
                }
              i = a
            }
        Yt(e, t, o.children, n),
        t = t.child
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, zi(t, n), o = Bn(o), r = r(o), t.flags |= 1, Yt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Xn(r, t.pendingProps), o = Xn(r.type, o), Zm(e, t, r, o, n);
    case 15:
      return ab(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), Es(e, t), t.tag = 1, un(r) ? (e = !0, qs(t)) : e = !1, zi(t, n), zy(t, r, o), uf(t, r, o, n), vf(null, t, r, !0, e, n);
    case 19:
      return db(e, t, n);
    case 22:
      return lb(e, t, n)
  }
  throw Error(q(156, t.tag))
};

function Pb(e, t) {
  return J0(e, t)
}

function iE(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Fn(e, t, n, r) {
  return new iE(e, t, n, r)
}

function vp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function aE(e) {
  if (typeof e == "function") return vp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mv) return 11;
    if (e === _v) return 14
  }
  return 2
}

function so(e, t) {
  var n = e.alternate;
  return n === null ? (n = Fn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ps(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function") vp(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case gi:
      return Io(n.children, o, i, t);
    case Nv:
      a = 8, o |= 8;
      break;
    case _d:
      return e = Fn(12, n, t, o | 2), e.elementType = _d, e.lanes = i, e;
    case kd:
      return e = Fn(13, n, t, o), e.elementType = kd, e.lanes = i, e;
    case zd:
      return e = Fn(19, n, t, o), e.elementType = zd, e.lanes = i, e;
    case L0:
      return Gc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case k0:
          a = 10;
          break e;
        case z0:
          a = 9;
          break e;
        case Mv:
          a = 11;
          break e;
        case _v:
          a = 14;
          break e;
        case Gr:
          a = 16, r = null;
          break e
      }
      throw Error(q(130, e == null ? e : typeof e, ""))
  }
  return t = Fn(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Io(e, t, n, r) {
  return e = Fn(7, e, r, t), e.lanes = n, e
}

function Gc(e, t, n, r) {
  return e = Fn(22, e, r, t), e.elementType = L0, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function Xu(e, t, n) {
  return e = Fn(6, e, null, t), e.lanes = n, e
}

function qu(e, t, n) {
  return t = Fn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t
}

function lE(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tu(0), this.expirationTimes = Tu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function pp(e, t, n, r, o, i, a, l, s) {
  return e = new lE(e, t, n, l, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Fn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, Yv(i), e
}

function sE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function Rb(e) {
  if (!e) return uo;
  e = e._reactInternals;
  e: {
    if (Uo(e) !== e || e.tag !== 1) throw Error(q(170));
    var t = e;do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (un(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(q(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (un(n)) return Py(e, n, t)
  }
  return t
}

function Tb(e, t, n, r, o, i, a, l, s) {
  return e = pp(n, r, !0, e, o, i, a, l, s), e.context = Rb(null), n = e.current, r = Jt(), o = lo(n), i = kr(r, o), i.callback = t ?? null, io(n, i, o), e.current.lanes = o, yl(e, o, r), dn(e, r), e
}

function Xc(e, t, n, r) {
  var o = t.current,
    i = Jt(),
    a = lo(o);
  return n = Rb(n), t.context === null ? t.context = n : t.pendingContext = n, t = kr(i, a), t.payload = {
    element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = io(o, t, a), e !== null && (tr(e, o, a, i), Cs(e, o, a)), a
}

function sc(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function ug(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function mp(e, t) {
  ug(e, t), (e = e.alternate) && ug(e, t)
}

function cE() {
  return null
}
var Ib = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
};

function gp(e) {
  this._internalRoot = e
}
qc.prototype.render = gp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(q(409));
  Xc(e, t, null, null)
};
qc.prototype.unmount = gp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fo(function() {
      Xc(null, e, null, null)
    }), t[Ar] = null
  }
};

function qc(e) {
  this._internalRoot = e
}
qc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ay();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < qr.length && t !== 0 && t < qr[n].priority; n++);
    qr.splice(n, 0, e), n === 0 && sy(e)
  }
};

function hp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Qc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function dg() {}

function uE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = sc(a);
        i.call(u)
      }
    }
    var a = Tb(t, r, e, 0, null, !1, !1, "", dg);
    return e._reactRootContainer = a, e[Ar] = a.current, Za(e.nodeType === 8 ? e.parentNode : e), Fo(), a
  }
  for (; o = e.lastChild;) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = sc(s);
      l.call(u)
    }
  }
  var s = pp(e, 0, !1, null, null, !1, !1, "", dg);
  return e._reactRootContainer = s, e[Ar] = s.current, Za(e.nodeType === 8 ? e.parentNode : e), Fo(function() {
    Xc(t, s, n, r)
  }), s
}

function Yc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var s = sc(a);
        l.call(s)
      }
    }
    Xc(t, a, e, o)
  } else a = uE(n, t, e, o, r);
  return sc(a)
}
oy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $a(t.pendingLanes);
        n !== 0 && (Lv(t, n | 1), dn(t, Ot()), !(Ve & 6) && (Vi = Ot() + 500, po()))
      }
      break;
    case 13:
      Fo(function() {
        var r = jr(e, 1);
        if (r !== null) {
          var o = Jt();
          tr(r, e, 1, o)
        }
      }), mp(e, 1)
  }
};
Av = function(e) {
  if (e.tag === 13) {
    var t = jr(e, 134217728);
    if (t !== null) {
      var n = Jt();
      tr(t, e, 134217728, n)
    }
    mp(e, 134217728)
  }
};
iy = function(e) {
  if (e.tag === 13) {
    var t = lo(e),
      n = jr(e, t);
    if (n !== null) {
      var r = Jt();
      tr(n, e, t, r)
    }
    mp(e, t)
  }
};
ay = function() {
  return Qe
};
ly = function(e, t) {
  var n = Qe;
  try {
    return Qe = e, t()
  } finally {
    Qe = n
  }
};
Ud = function(e, t, n) {
  switch (t) {
    case "input":
      if (jd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Bc(r);
            if (!o) throw Error(q(90));
            j0(r), jd(r, o)
          }
        }
      }
      break;
    case "textarea":
      D0(e, n);
      break;
    case "select":
      t = n.value, t != null && Ni(e, !!n.multiple, t, !1)
  }
};
G0 = up;
X0 = Fo;
var dE = {
    usingClientEntryPoint: !1,
    Events: [Sl, Si, Bc, U0, K0, up]
  },
  ga = {
    findFiberByHostInstance: xo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
  },
  fE = {
    bundleType: ga.bundleType,
    version: ga.version,
    rendererPackageName: ga.rendererPackageName,
    rendererConfig: ga.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Br.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Y0(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ga.findFiberByHostInstance || cE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Jl.isDisabled && Jl.supportsFiber) try {
    Ac = Jl.inject(fE), yr = Jl
  } catch {}
}
On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE;
On.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hp(t)) throw Error(q(200));
  return sE(e, t, null, n)
};
On.createRoot = function(e, t) {
  if (!hp(e)) throw Error(q(299));
  var n = !1,
    r = "",
    o = Ib;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = pp(e, 1, !1, null, null, n, !1, r, o), e[Ar] = t.current, Za(e.nodeType === 8 ? e.parentNode : e), new gp(t)
};
On.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(q(188)) : (e = Object.keys(e).join(","), Error(q(268, e)));
  return e = Y0(t), e = e === null ? null : e.stateNode, e
};
On.flushSync = function(e) {
  return Fo(e)
};
On.hydrate = function(e, t, n) {
  if (!Qc(t)) throw Error(q(200));
  return Yc(null, e, t, !0, n)
};
On.hydrateRoot = function(e, t, n) {
  if (!hp(e)) throw Error(q(405));
  var r = n != null && n.hydratedSources || null,
    o = !1,
    i = "",
    a = Ib;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Tb(t, null, e, 1, n ?? null, o, !1, i, a), e[Ar] = t.current, Za(e), r)
    for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new qc(t)
};
On.render = function(e, t, n) {
  if (!Qc(t)) throw Error(q(200));
  return Yc(null, e, t, !1, n)
};
On.unmountComponentAtNode = function(e) {
  if (!Qc(e)) throw Error(q(40));
  return e._reactRootContainer ? (Fo(function() {
    Yc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ar] = null
    })
  }), !0) : !1
};
On.unstable_batchedUpdates = up;
On.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Qc(n)) throw Error(q(200));
  if (e == null || e._reactInternals === void 0) throw Error(q(38));
  return Yc(e, t, n, !1, r)
};
On.version = "18.2.0-next-9e3b772b8-20220608";

function Nb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nb)
  } catch (e) {
    console.error(e)
  }
}
Nb(), T0.exports = On;
var Ko = T0.exports;
const Mb = wc(Ko),
  vE = f0({
    __proto__: null,
    default: Mb
  }, [Ko]);

function cc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}

function $f(e) {
  return cc(e) ? e : e instanceof X.Component ? Mb.findDOMNode(e) : null
}
var _b = function() {
    if (typeof Map < "u") return Map;

    function e(t, n) {
      var r = -1;
      return t.some(function(o, i) {
        return o[0] === n ? (r = i, !0) : !1
      }), r
    }
    return function() {
      function t() {
        this.__entries__ = []
      }
      return Object.defineProperty(t.prototype, "size", {
        get: function() {
          return this.__entries__.length
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n),
          o = this.__entries__[r];
        return o && o[1]
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r])
      }, t.prototype.delete = function(n) {
        var r = this.__entries__,
          o = e(r, n);
        ~o && r.splice(o, 1)
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n)
      }, t.prototype.clear = function() {
        this.__entries__.splice(0)
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          n.call(r, a[1], a[0])
        }
      }, t
    }()
  }(),
  Of = typeof window < "u" && typeof document < "u" && window.document === document,
  uc = function() {
    return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
  }(),
  pE = function() {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(uc) : function(e) {
      return setTimeout(function() {
        return e(Date.now())
      }, 1e3 / 60)
    }
  }(),
  mE = 2;

function gE(e, t) {
  var n = !1,
    r = !1,
    o = 0;

  function i() {
    n && (n = !1, e()), r && l()
  }

  function a() {
    pE(i)
  }

  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < mE) return;
      r = !0
    } else n = !0, r = !1, setTimeout(a, t);
    o = s
  }
  return l
}
var hE = 20,
  yE = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  bE = typeof MutationObserver < "u",
  SE = function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = gE(this.refresh.bind(this), hE)
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_,
        r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh()
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive()
      });
      return t.forEach(function(n) {
        return n.broadcastActive()
      }), t.length > 0
    }, e.prototype.connect_ = function() {
      !Of || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), bE ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
    }, e.prototype.disconnect_ = function() {
      !Of || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName,
        r = n === void 0 ? "" : n,
        o = yE.some(function(i) {
          return !!~r.indexOf(i)
        });
      o && this.refresh()
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e), this.instance_
    }, e.instance_ = null, e
  }(),
  kb = function(e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0
      })
    }
    return e
  },
  Ui = function(e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || uc
  },
  zb = Zc(0, 0, 0, 0);

function dc(e) {
  return parseFloat(e) || 0
}

function fg(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + dc(i)
  }, 0)
}

function CE(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r],
      a = e["padding-" + i];
    n[i] = dc(a)
  }
  return n
}

function xE(e) {
  var t = e.getBBox();
  return Zc(0, 0, t.width, t.height)
}

function wE(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return zb;
  var r = Ui(e).getComputedStyle(e),
    o = CE(r),
    i = o.left + o.right,
    a = o.top + o.bottom,
    l = dc(r.width),
    s = dc(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= fg(r, "left", "right") + i), Math.round(s + a) !== n && (s -= fg(r, "top", "bottom") + a)), !$E(e)) {
    var u = Math.round(l + i) - t,
      d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (s -= d)
  }
  return Zc(o.left, o.top, l, s)
}
var EE = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Ui(e).SVGGraphicsElement
  } : function(e) {
    return e instanceof Ui(e).SVGElement && typeof e.getBBox == "function"
  }
}();

function $E(e) {
  return e === Ui(e).document.documentElement
}

function OE(e) {
  return Of ? EE(e) ? xE(e) : wE(e) : zb
}

function PE(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    o = e.height,
    i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return kb(a, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), a
}

function Zc(e, t, n, r) {
  return {
    x: e,
    y: t,
    width: n,
    height: r
  }
}
var RE = function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Zc(0, 0, 0, 0), this.target = t
    }
    return e.prototype.isActive = function() {
      var t = OE(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
    }, e
  }(),
  TE = function() {
    function e(t, n) {
      var r = PE(n);
      kb(this, {
        target: t,
        contentRect: r
      })
    }
    return e
  }(),
  IE = function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new _b, typeof t != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ui(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new RE(t)), this.controller_.addObserver(this), this.controller_.refresh())
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ui(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this))
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n)
      })
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_,
          n = this.activeObservations_.map(function(r) {
            return new TE(r.target, r.broadcastRect())
          });
        this.callback_.call(t, n, t), this.clearActive()
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0)
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0
    }, e
  }(),
  Lb = typeof WeakMap < "u" ? new WeakMap : new _b,
  Ab = function() {
    function e(t) {
      if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
      var n = SE.getInstance(),
        r = new IE(t, n, this);
      Lb.set(this, r)
    }
    return e
  }();
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Ab.prototype[e] = function() {
    var t;
    return (t = Lb.get(this))[e].apply(t, arguments)
  }
});
var NE = function() {
    return typeof uc.ResizeObserver < "u" ? uc.ResizeObserver : Ab
  }(),
  Jr = new Map;

function ME(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Jr.get(r)) === null || n === void 0 || n.forEach(function(o) {
      return o(r)
    })
  })
}
var jb = new NE(ME);

function _E(e, t) {
  Jr.has(e) || (Jr.set(e, new Set), jb.observe(e)), Jr.get(e).add(t)
}

function kE(e, t) {
  Jr.has(e) && (Jr.get(e).delete(t), Jr.get(e).size || (jb.unobserve(e), Jr.delete(e)))
}
var zE = function(e) {
    ml(n, e);
    var t = gl(n);

    function n() {
      return lr(this, n), t.apply(this, arguments)
    }
    return sr(n, [{
      key: "render",
      value: function() {
        return this.props.children
      }
    }]), n
  }(c.Component),
  Pf = c.createContext(null);

function LE(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = c.useRef(0),
    o = c.useRef([]),
    i = c.useContext(Pf),
    a = c.useCallback(function(l, s, u) {
      r.current += 1;
      var d = r.current;
      o.current.push({
        size: l,
        element: s,
        data: u
      }), Promise.resolve().then(function() {
        d === r.current && (n == null || n(o.current), o.current = [])
      }), i == null || i(l, s, u)
    }, [n, i]);
  return c.createElement(Pf.Provider, {
    value: a
  }, t)
}

function AE(e, t) {
  var n = e.children,
    r = e.disabled,
    o = c.useRef(null),
    i = c.useRef(null),
    a = c.useContext(Pf),
    l = typeof n == "function",
    s = l ? n(o) : n,
    u = c.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1
    }),
    d = !l && c.isValidElement(s) && Wo(s),
    f = d ? s.ref : null,
    v = c.useMemo(function() {
      return Cr(f, o)
    }, [f, o]),
    y = function() {
      return $f(o.current) || $f(i.current)
    };
  c.useImperativeHandle(t, function() {
    return y()
  });
  var b = c.useRef(e);
  b.current = e;
  var h = c.useCallback(function(C) {
    var g = b.current,
      p = g.onResize,
      m = g.data,
      S = C.getBoundingClientRect(),
      E = S.width,
      w = S.height,
      x = C.offsetWidth,
      R = C.offsetHeight,
      P = Math.floor(E),
      O = Math.floor(w);
    if (u.current.width !== P || u.current.height !== O || u.current.offsetWidth !== x || u.current.offsetHeight !== R) {
      var _ = {
        width: P,
        height: O,
        offsetWidth: x,
        offsetHeight: R
      };
      u.current = _;
      var N = x === Math.round(E) ? E : x,
        I = R === Math.round(w) ? w : R,
        A = D(D({}, _), {}, {
          offsetWidth: N,
          offsetHeight: I
        });
      a == null || a(A, C, m), p && Promise.resolve().then(function() {
        p(A, C)
      })
    }
  }, []);
  return c.useEffect(function() {
    var C = y();
    return C && !r && _E(C, h),
      function() {
        return kE(C, h)
      }
  }, [o.current, r]), c.createElement(zE, {
    ref: i
  }, d ? c.cloneElement(s, {
    ref: v
  }) : s)
}
var jE = c.forwardRef(AE),
  FE = "rc-observer-key";

function DE(e, t) {
  var n = e.children,
    r = typeof n == "function" ? [n] : or(n);
  return r.map(function(o, i) {
    var a = (o == null ? void 0 : o.key) || "".concat(FE, "-").concat(i);
    return c.createElement(jE, de({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o)
  })
}
var nr = c.forwardRef(DE);
nr.Collection = LE;

function Hr(e, t) {
  var n = D({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r]
  }), n
}

function Rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r
}

function BE(e) {
  if (Array.isArray(e)) return Rf(e)
}

function Fb(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function yp(e, t) {
  if (e) {
    if (typeof e == "string") return Rf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rf(e, t)
  }
}

function HE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function ce(e) {
  return BE(e) || Fb(e) || yp(e) || HE()
}
var Db = function(t) {
    return +setTimeout(t, 16)
  },
  Bb = function(t) {
    return clearTimeout(t)
  };
typeof window < "u" && "requestAnimationFrame" in window && (Db = function(t) {
  return window.requestAnimationFrame(t)
}, Bb = function(t) {
  return window.cancelAnimationFrame(t)
});
var vg = 0,
  bp = new Map;

function Hb(e) {
  bp.delete(e)
}
var It = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  vg += 1;
  var r = vg;

  function o(i) {
    if (i === 0) Hb(r), t();
    else {
      var a = Db(function() {
        o(i - 1)
      });
      bp.set(r, a)
    }
  }
  return o(n), r
};
It.cancel = function(e) {
  var t = bp.get(e);
  return Hb(t), Bb(t)
};

function Sp(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}

function WE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o, i;
  for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n
}

function Fe(e, t) {
  if (e == null) return {};
  var n = WE(e, t),
    r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}

function Jc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set;

  function o(i, a) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      s = r.has(i);
    if (Zt(!s, "Warning: There may be circular references"), s) return !1;
    if (i === a) return !0;
    if (n && l > 1) return !1;
    r.add(i);
    var u = l + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length) return !1;
      for (var d = 0; d < i.length; d++)
        if (!o(i[d], a[d], u)) return !1;
      return !0
    }
    if (i && a && ze(i) === "object" && ze(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(v) {
        return o(i[v], a[v], u)
      })
    }
    return !1
  }
  return o(e, t)
}
var pg = "%",
  VE = function() {
    function e(t) {
      lr(this, e), z(this, "instanceId", void 0), z(this, "cache", new Map), this.instanceId = t
    }
    return sr(e, [{
      key: "get",
      value: function(n) {
        return this.cache.get(n.join(pg)) || null
      }
    }, {
      key: "update",
      value: function(n, r) {
        var o = n.join(pg),
          i = this.cache.get(o),
          a = r(i);
        a === null ? this.cache.delete(o) : this.cache.set(o, a)
      }
    }]), e
  }(),
  Tf = "data-token-hash",
  No = "data-css-hash",
  Pi = "__cssinjs_instance__";

function UE() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(No, "]")) || [],
      n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Pi] = o[Pi] || e, o[Pi] === e && document.head.insertBefore(o, n)
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(No, "]"))).forEach(function(o) {
      var i = o.getAttribute(No);
      if (r[i]) {
        if (o[Pi] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o)
        }
      } else r[i] = !0
    })
  }
  return new VE(e)
}
var KE = c.createContext({
  hashPriority: "low",
  cache: UE(),
  defaultCache: !0
});
const Cp = KE;

function qt() {
  return !!(typeof window < "u" && window.document && window.document.createElement)
}

function If(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n;) {
    if (n === e) return !0;
    n = n.parentNode
  }
  return !1
}
var mg = "data-rc-order",
  gg = "data-rc-priority",
  GE = "rc-util-key",
  Nf = new Map;

function Wb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : GE
}

function eu(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body
}

function XE(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append"
}

function Vb(e) {
  return Array.from((Nf.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE"
  })
}

function Ub(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!qt()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = XE(r),
    l = a === "prependQueue",
    s = document.createElement("style");
  s.setAttribute(mg, a), l && i && s.setAttribute(gg, "".concat(i)), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  var u = eu(t),
    d = u.firstChild;
  if (r) {
    if (l) {
      var f = Vb(u).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(mg))) return !1;
        var y = Number(v.getAttribute(gg) || 0);
        return i >= y
      });
      if (f.length) return u.insertBefore(s, f[f.length - 1].nextSibling), s
    }
    u.insertBefore(s, d)
  } else u.appendChild(s);
  return s
}

function Kb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = eu(t);
  return Vb(n).find(function(r) {
    return r.getAttribute(Wb(t)) === e
  })
}

function fc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Kb(e, t);
  if (n) {
    var r = eu(t);
    r.removeChild(n)
  }
}

function qE(e, t) {
  var n = Nf.get(e);
  if (!n || !If(document, n)) {
    var r = Ub("", t),
      o = r.parentNode;
    Nf.set(e, o), e.removeChild(r)
  }
}

function Ki(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = eu(n);
  qE(r, n);
  var o = Kb(t, n);
  if (o) {
    var i, a;
    if ((i = n.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var l;
      o.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce
    }
    return o.innerHTML !== e && (o.innerHTML = e), o
  }
  var s = Ub(e, n);
  return s.setAttribute(Wb(n), t), s
}

function Gb(e) {
  if (Array.isArray(e)) return e
}

function QE(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, l = [],
      s = !0,
      u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        s = !1
      } else
        for (; !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
    } catch (d) {
      u = !0, o = d
    } finally {
      try {
        if (!s && n.return != null && (a = n.return(), Object(a) !== a)) return
      } finally {
        if (u) throw o
      }
    }
    return l
  }
}

function Xb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function H(e, t) {
  return Gb(e) || QE(e, t) || yp(e, t) || Xb()
}

function YE(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n]) return !1;
  return !0
}
var xp = function() {
  function e() {
    lr(this, e), z(this, "cache", void 0), z(this, "keys", void 0), z(this, "cacheCallTimes", void 0), this.cache = new Map, this.keys = [], this.cacheCallTimes = 0
  }
  return sr(e, [{
    key: "size",
    value: function() {
      return this.keys.length
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        a = {
          map: this.cache
        };
      return n.forEach(function(l) {
        if (!a) a = void 0;
        else {
          var s, u;
          a = (s = a) === null || s === void 0 || (u = s.map) === null || u === void 0 ? void 0 : u.get(l)
        }
      }), (r = a) !== null && r !== void 0 && r.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0]
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n)
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(u, d) {
              var f = H(u, 2),
                v = f[1];
              return o.internalGet(d)[1] < v ? [d, o.internalGet(d)[1]] : u
            }, [this.keys[0], this.cacheCallTimes]),
            a = H(i, 1),
            l = a[0];
          this.delete(l)
        }
        this.keys.push(n)
      }
      var s = this.cache;
      n.forEach(function(u, d) {
        if (d === n.length - 1) s.set(u, {
          value: [r, o.cacheCallTimes++]
        });
        else {
          var f = s.get(u);
          f ? f.map || (f.map = new Map) : s.set(u, {
            map: new Map
          }), s = s.get(u).map
        }
      })
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var i;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0]
      }
      var a = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n)) return this.keys = this.keys.filter(function(r) {
        return !YE(r, n)
      }), this.deleteByPath(this.cache, n)
    }
  }]), e
}();
z(xp, "MAX_CACHE_SIZE", 20);
z(xp, "MAX_CACHE_OFFSET", 5);
var hg = 0,
  qb = function() {
    function e(t) {
      lr(this, e), z(this, "derivatives", void 0), z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = hg, t.length === 0 && (t.length > 0, void 0), hg += 1
    }
    return sr(e, [{
      key: "getDerivativeToken",
      value: function(n) {
        return this.derivatives.reduce(function(r, o) {
          return o(n, r)
        }, void 0)
      }
    }]), e
  }(),
  Qu = new xp;

function Mf(e) {
  var t = Array.isArray(e) ? e : [e];
  return Qu.has(t) || Qu.set(t, new qb(t)), Qu.get(t)
}
var yg = new WeakMap;

function vc(e) {
  var t = yg.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof qb ? t += r.id : r && ze(r) === "object" ? t += vc(r) : t += r
  }), yg.set(e, t)), t
}

function ZE(e, t) {
  return Sp("".concat(t, "_").concat(vc(e)))
}
var ja = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""),
  Qb = "_bAmBoO_";

function JE(e, t, n) {
  if (qt()) {
    var r, o;
    Ki(e, ja);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i);
    var a = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(Qb);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), fc(ja), a
  }
  return !1
}
var Yu = void 0;

function e$() {
  return Yu === void 0 && (Yu = JE("@layer ".concat(ja, " { .").concat(ja, ' { content: "').concat(Qb, '"!important; } }'), function(e) {
    e.className = ja
  })), Yu
}
var bg = qt() ? c.useLayoutEffect : c.useEffect,
  gt = function(t, n) {
    var r = c.useRef(!0);
    bg(function() {
      return t(r.current)
    }, n), bg(function() {
      return r.current = !1,
        function() {
          r.current = !0
        }
    }, [])
  },
  _f = function(t, n) {
    gt(function(r) {
      if (!r) return t()
    }, n)
  },
  t$ = D({}, $c),
  Sg = t$.useInsertionEffect,
  n$ = function(t, n, r) {
    c.useMemo(t, r), gt(function() {
      return n(!0)
    }, r)
  },
  r$ = Sg ? function(e, t, n) {
    return Sg(function() {
      return e(), t()
    }, n)
  } : n$;
const o$ = r$;
var i$ = D({}, $c),
  a$ = i$.useInsertionEffect,
  l$ = function(t) {
    var n = [],
      r = !1;

    function o(i) {
      r || n.push(i)
    }
    return c.useEffect(function() {
      return r = !1,
        function() {
          r = !0, n.length && n.forEach(function(i) {
            return i()
          })
        }
    }, t), o
  },
  s$ = function() {
    return function(t) {
      t()
    }
  },
  c$ = typeof a$ < "u" ? l$ : s$;
const u$ = c$;

function Yb(e, t, n, r, o) {
  var i = c.useContext(Cp),
    a = i.cache,
    l = [e].concat(ce(t)),
    s = l.join("_"),
    u = u$([s]),
    d = function(b) {
      a.update(l, function(h) {
        var C = h || [],
          g = H(C, 2),
          p = g[0],
          m = p === void 0 ? 0 : p,
          S = g[1],
          E = S,
          w = E || n(),
          x = [m, w];
        return b ? b(x) : x
      })
    };
  c.useMemo(function() {
    d()
  }, [s]);
  var f = a.get(l),
    v = f[1];
  return o$(function() {
    o == null || o(v)
  }, function(y) {
    return d(function(b) {
        var h = H(b, 2),
          C = h[0],
          g = h[1];
        return y && C === 0 && (o == null || o(v)), [C + 1, g]
      }),
      function() {
        a.update(l, function(b) {
          var h = b || [],
            C = H(h, 2),
            g = C[0],
            p = g === void 0 ? 0 : g,
            m = C[1],
            S = p - 1;
          return S === 0 ? (u(function() {
            return r == null ? void 0 : r(m, !1)
          }), null) : [p - 1, m]
        })
      }
  }, [s]), v
}
var d$ = {},
  f$ = "css",
  Co = new Map;

function v$(e) {
  Co.set(e, (Co.get(e) || 0) + 1)
}

function p$(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Tf, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Pi] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r)
      }
    })
  }
}
var m$ = 0;

function g$(e, t) {
  Co.set(e, (Co.get(e) || 0) - 1);
  var n = Array.from(Co.keys()),
    r = n.filter(function(o) {
      var i = Co.get(o) || 0;
      return i <= 0
    });
  n.length - r.length > m$ && r.forEach(function(o) {
    p$(o, t), Co.delete(o)
  })
}
var h$ = function(t, n, r, o) {
  var i = r.getDerivativeToken(t),
    a = D(D({}, i), n);
  return o && (a = o(a)), a
};

function y$(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = c.useContext(Cp),
    o = r.cache.instanceId,
    i = n.salt,
    a = i === void 0 ? "" : i,
    l = n.override,
    s = l === void 0 ? d$ : l,
    u = n.formatToken,
    d = n.getComputedToken,
    f = c.useMemo(function() {
      return Object.assign.apply(Object, [{}].concat(ce(t)))
    }, [t]),
    v = c.useMemo(function() {
      return vc(f)
    }, [f]),
    y = c.useMemo(function() {
      return vc(s)
    }, [s]),
    b = Yb("token", [a, e.id, v, y], function() {
      var h = d ? d(f, s, e) : h$(f, s, e, u),
        C = ZE(h, a);
      h._tokenKey = C, v$(C);
      var g = "".concat(f$, "-").concat(Sp(C));
      return h._hashId = g, [h, g]
    }, function(h) {
      g$(h[0]._tokenKey, o)
    });
  return b
}
var b$ = {
    animationIterationCount: 1,
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
  },
  Zb = "comm",
  Jb = "rule",
  e1 = "decl",
  S$ = "@import",
  C$ = "@keyframes",
  x$ = "@layer",
  w$ = Math.abs,
  wp = String.fromCharCode;

function t1(e) {
  return e.trim()
}

function Rs(e, t, n) {
  return e.replace(t, n)
}

function E$(e, t) {
  return e.indexOf(t)
}

function ll(e, t) {
  return e.charCodeAt(t) | 0
}

function sl(e, t, n) {
  return e.slice(t, n)
}

function Nr(e) {
  return e.length
}

function $$(e) {
  return e.length
}

function es(e, t) {
  return t.push(e), e
}
var tu = 1,
  Gi = 1,
  n1 = 0,
  Wn = 0,
  Rt = 0,
  Zi = "";

function Ep(e, t, n, r, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: tu,
    column: Gi,
    length: a,
    return: "",
    siblings: l
  }
}

function O$() {
  return Rt
}

function P$() {
  return Rt = Wn > 0 ? ll(Zi, --Wn) : 0, Gi--, Rt === 10 && (Gi = 1, tu--), Rt
}

function rr() {
  return Rt = Wn < n1 ? ll(Zi, Wn++) : 0, Gi++, Rt === 10 && (Gi = 1, tu++), Rt
}

function Mo() {
  return ll(Zi, Wn)
}

function Ts() {
  return Wn
}

function nu(e, t) {
  return sl(Zi, e, t)
}

function kf(e) {
  switch (e) {
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
      return 1
  }
  return 0
}

function R$(e) {
  return tu = Gi = 1, n1 = Nr(Zi = e), Wn = 0, []
}

function T$(e) {
  return Zi = "", e
}

function Zu(e) {
  return t1(nu(Wn - 1, zf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}

function I$(e) {
  for (;
    (Rt = Mo()) && Rt < 33;) rr();
  return kf(e) > 2 || kf(Rt) > 3 ? "" : " "
}

function N$(e, t) {
  for (; --t && rr() && !(Rt < 48 || Rt > 102 || Rt > 57 && Rt < 65 || Rt > 70 && Rt < 97););
  return nu(e, Ts() + (t < 6 && Mo() == 32 && rr() == 32))
}

function zf(e) {
  for (; rr();) switch (Rt) {
    case e:
      return Wn;
    case 34:
    case 39:
      e !== 34 && e !== 39 && zf(Rt);
      break;
    case 40:
      e === 41 && zf(e);
      break;
    case 92:
      rr();
      break
  }
  return Wn
}

function M$(e, t) {
  for (; rr() && e + Rt !== 47 + 10;)
    if (e + Rt === 42 + 42 && Mo() === 47) break;
  return "/*" + nu(t, Wn - 1) + "*" + wp(e === 47 ? e : rr())
}

function _$(e) {
  for (; !kf(Mo());) rr();
  return nu(e, Wn)
}

function k$(e) {
  return T$(Is("", null, null, null, [""], e = R$(e), 0, [0], e))
}

function Is(e, t, n, r, o, i, a, l, s) {
  for (var u = 0, d = 0, f = a, v = 0, y = 0, b = 0, h = 1, C = 1, g = 1, p = 0, m = "", S = o, E = i, w = r, x = m; C;) switch (b = p, p = rr()) {
    case 40:
      if (b != 108 && ll(x, f - 1) == 58) {
        E$(x += Rs(Zu(p), "&", "&\f"), "&\f") != -1 && (g = -1);
        break
      }
    case 34:
    case 39:
    case 91:
      x += Zu(p);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      x += I$(b);
      break;
    case 92:
      x += N$(Ts() - 1, 7);
      continue;
    case 47:
      switch (Mo()) {
        case 42:
        case 47:
          es(z$(M$(rr(), Ts()), t, n, s), s);
          break;
        default:
          x += "/"
      }
      break;
    case 123 * h:
      l[u++] = Nr(x) * g;
    case 125 * h:
    case 59:
    case 0:
      switch (p) {
        case 0:
        case 125:
          C = 0;
        case 59 + d:
          g == -1 && (x = Rs(x, /\f/g, "")), y > 0 && Nr(x) - f && es(y > 32 ? xg(x + ";", r, n, f - 1, s) : xg(Rs(x, " ", "") + ";", r, n, f - 2, s), s);
          break;
        case 59:
          x += ";";
        default:
          if (es(w = Cg(x, t, n, u, d, o, l, m, S = [], E = [], f, i), i), p === 123)
            if (d === 0) Is(x, t, w, w, S, i, f, l, E);
            else switch (v === 99 && ll(x, 3) === 110 ? 100 : v) {
              case 100:
              case 108:
              case 109:
              case 115:
                Is(e, w, w, r && es(Cg(e, w, w, 0, 0, o, l, m, o, S = [], f, E), E), o, E, f, l, r ? S : E);
                break;
              default:
                Is(x, w, w, w, [""], E, 0, l, E)
            }
      }
      u = d = y = 0, h = g = 1, m = x = "", f = a;
      break;
    case 58:
      f = 1 + Nr(x), y = b;
    default:
      if (h < 1) {
        if (p == 123) --h;
        else if (p == 125 && h++ == 0 && P$() == 125) continue
      }
      switch (x += wp(p), p * h) {
        case 38:
          g = d > 0 ? 1 : (x += "\f", -1);
          break;
        case 44:
          l[u++] = (Nr(x) - 1) * g, g = 1;
          break;
        case 64:
          Mo() === 45 && (x += Zu(rr())), v = Mo(), d = f = Nr(m = x += _$(Ts())), p++;
          break;
        case 45:
          b === 45 && Nr(x) == 2 && (h = 0)
      }
  }
  return i
}

function Cg(e, t, n, r, o, i, a, l, s, u, d, f) {
  for (var v = o - 1, y = o === 0 ? i : [""], b = $$(y), h = 0, C = 0, g = 0; h < r; ++h)
    for (var p = 0, m = sl(e, v + 1, v = w$(C = a[h])), S = e; p < b; ++p)(S = t1(C > 0 ? y[p] + " " + m : Rs(m, /&\f/g, y[p]))) && (s[g++] = S);
  return Ep(e, t, n, o === 0 ? Jb : l, s, u, d, f)
}

function z$(e, t, n, r) {
  return Ep(e, t, n, Zb, wp(O$()), sl(e, 2, -2), 0, r)
}

function xg(e, t, n, r, o) {
  return Ep(e, t, n, e1, sl(e, 0, r), sl(e, r + 1, -1), r, o)
}

function Lf(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n
}

function L$(e, t, n, r) {
  switch (e.type) {
    case x$:
      if (e.children.length) break;
    case S$:
    case e1:
      return e.return = e.return || e.value;
    case Zb:
      return "";
    case C$:
      return e.return = e.value + "{" + Lf(e.children, r) + "}";
    case Jb:
      if (!Nr(e.value = e.props.join(","))) return ""
  }
  return Nr(n = Lf(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
var wg = "data-ant-cssinjs-cache-path",
  r1 = "_FILE_STYLE__",
  _o, o1 = !0;

function A$() {
  if (!_o && (_o = {}, qt())) {
    var e = document.createElement("div");
    e.className = wg, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"),
        a = H(i, 2),
        l = a[0],
        s = a[1];
      _o[l] = s
    });
    var n = document.querySelector("style[".concat(wg, "]"));
    if (n) {
      var r;
      o1 = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
    }
    document.body.removeChild(e)
  }
}

function j$(e) {
  return A$(), !!_o[e]
}

function F$(e) {
  var t = _o[e],
    n = null;
  if (t && qt())
    if (o1) n = r1;
    else {
      var r = document.querySelector("style[".concat(No, '="').concat(_o[e], '"]'));
      r ? n = r.innerHTML : delete _o[e]
    } return [n, t]
}
var Eg = qt(),
  D$ = "_skip_check_",
  i1 = "_multi_value_";

function $g(e) {
  var t = Lf(k$(e), L$);
  return t.replace(/\{%%%\:[^;];}/g, ";")
}

function B$(e) {
  return ze(e) === "object" && e && (D$ in e || i1 in e)
}

function H$(e, t, n) {
  if (!t) return e;
  var r = ".".concat(t),
    o = n === "low" ? ":where(".concat(r, ")") : r,
    i = e.split(",").map(function(a) {
      var l, s = a.trim().split(/\s+/),
        u = s[0] || "",
        d = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
      return u = "".concat(d).concat(o).concat(u.slice(d.length)), [u].concat(ce(s.slice(1))).join(" ")
    });
  return i.join(",")
}
var W$ = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: !0,
      parentSelectors: []
    },
    o = r.root,
    i = r.injectHash,
    a = r.parentSelectors,
    l = n.hashId,
    s = n.layer;
  n.path;
  var u = n.hashPriority,
    d = n.transformers,
    f = d === void 0 ? [] : d;
  n.linters;
  var v = "",
    y = {};

  function b(m) {
    var S = m.getName(l);
    if (!y[S]) {
      var E = e(m.style, n, {
          root: !1,
          parentSelectors: a
        }),
        w = H(E, 1),
        x = w[0];
      y[S] = "@keyframes ".concat(m.getName(l)).concat(x)
    }
  }

  function h(m) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return m.forEach(function(E) {
      Array.isArray(E) ? h(E, S) : E && S.push(E)
    }), S
  }
  var C = h(Array.isArray(t) ? t : [t]);
  if (C.forEach(function(m) {
      var S = typeof m == "string" && !o ? {} : m;
      if (typeof S == "string") v += "".concat(S, `
`);
      else if (S._keyframe) b(S);
      else {
        var E = f.reduce(function(w, x) {
          var R;
          return (x == null || (R = x.visit) === null || R === void 0 ? void 0 : R.call(x, w)) || w
        }, S);
        Object.keys(E).forEach(function(w) {
          var x = E[w];
          if (ze(x) === "object" && x && (w !== "animationName" || !x._keyframe) && !B$(x)) {
            var R = !1,
              P = w.trim(),
              O = !1;
            (o || i) && l ? P.startsWith("@") ? R = !0 : P = H$(w, l, u) : o && !l && (P === "&" || P === "") && (P = "", O = !0);
            var _ = e(x, n, {
                root: O,
                injectHash: R,
                parentSelectors: [].concat(ce(a), [P])
              }),
              N = H(_, 2),
              I = N[0],
              A = N[1];
            y = D(D({}, y), A), v += "".concat(P).concat(I)
          } else {
            let T = function(k, L) {
              var B = k.replace(/[A-Z]/g, function(V) {
                  return "-".concat(V.toLowerCase())
                }),
                F = L;
              !b$[k] && typeof F == "number" && F !== 0 && (F = "".concat(F, "px")), k === "animationName" && L !== null && L !== void 0 && L._keyframe && (b(L), F = L.getName(l)), v += "".concat(B, ":").concat(F, ";")
            };
            var $ = T,
              j, M = (j = x == null ? void 0 : x.value) !== null && j !== void 0 ? j : x;
            ze(x) === "object" && x !== null && x !== void 0 && x[i1] && Array.isArray(M) ? M.forEach(function(k) {
              T(w, k)
            }) : T(w, M)
          }
        })
      }
    }), !o) v = "{".concat(v, "}");
  else if (s && e$()) {
    var g = s.split(","),
      p = g[g.length - 1].trim();
    v = "@layer ".concat(p, " {").concat(v, "}"), g.length > 1 && (v = "@layer ".concat(s, "{%%%:%}").concat(v))
  }
  return [v, y]
};

function V$(e, t) {
  return Sp("".concat(e.join("%")).concat(t))
}

function U$() {
  return null
}

function Af(e, t) {
  var n = e.token,
    r = e.path,
    o = e.hashId,
    i = e.layer,
    a = e.nonce,
    l = e.clientOnly,
    s = e.order,
    u = s === void 0 ? 0 : s,
    d = c.useContext(Cp),
    f = d.autoClear;
  d.mock;
  var v = d.defaultCache,
    y = d.hashPriority,
    b = d.container,
    h = d.ssrInline,
    C = d.transformers,
    g = d.linters,
    p = d.cache,
    m = n._tokenKey,
    S = [m].concat(ce(r)),
    E = Eg,
    w = Yb("style", S, function() {
      var _ = S.join("|");
      if (j$(_)) {
        var N = F$(_),
          I = H(N, 2),
          A = I[0],
          j = I[1];
        if (A) return [A, m, j, {}, l, u]
      }
      var M = t(),
        $ = W$(M, {
          hashId: o,
          hashPriority: y,
          layer: i,
          path: r.join("-"),
          transformers: C,
          linters: g
        }),
        T = H($, 2),
        k = T[0],
        L = T[1],
        B = $g(k),
        F = V$(S, B);
      return [B, m, F, L, l, u]
    }, function(_, N) {
      var I = H(_, 3),
        A = I[2];
      (N || f) && Eg && fc(A, {
        mark: No
      })
    }, function(_) {
      var N = H(_, 4),
        I = N[0];
      N[1];
      var A = N[2],
        j = N[3];
      if (E && I !== r1) {
        var M = {
            mark: No,
            prepend: "queue",
            attachTo: b,
            priority: u
          },
          $ = typeof a == "function" ? a() : a;
        $ && (M.csp = {
          nonce: $
        });
        var T = Ki(I, A, M);
        T[Pi] = p.instanceId, T.setAttribute(Tf, m), Object.keys(j).forEach(function(k) {
          Ki($g(j[k]), "_effect-".concat(k), M)
        })
      }
    }),
    x = H(w, 3),
    R = x[0],
    P = x[1],
    O = x[2];
  return function(_) {
    var N;
    if (!h || E || !v) N = c.createElement(U$, null);
    else {
      var I;
      N = c.createElement("style", de({}, (I = {}, z(I, Tf, P), z(I, No, O), I), {
        dangerouslySetInnerHTML: {
          __html: R
        }
      }))
    }
    return c.createElement(c.Fragment, null, N, _)
  }
}
var bt = function() {
  function e(t, n) {
    lr(this, e), z(this, "name", void 0), z(this, "style", void 0), z(this, "_keyframe", !0), this.name = t, this.style = n
  }
  return sr(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name
    }
  }]), e
}();

function ni(e) {
  return e.notSplit = !0, e
}
ni(["borderTop", "borderBottom"]), ni(["borderTop"]), ni(["borderBottom"]), ni(["borderLeft", "borderRight"]), ni(["borderLeft"]), ni(["borderRight"]);
var K$ = c.createContext({});
const $p = K$;

function G$(e) {
  return Gb(e) || Fb(e) || yp(e) || Xb()
}

function Jn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]]
  }
  return n
}

function a1(e, t, n, r) {
  if (!t.length) return n;
  var o = G$(t),
    i = o[0],
    a = o.slice(1),
    l;
  return !e && typeof i == "number" ? l = [] : Array.isArray(e) ? l = ce(e) : l = D({}, e), r && n === void 0 && a.length === 1 ? delete l[i][a[0]] : l[i] = a1(l[i], a, n, r), l
}

function Qn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Jn(e, t.slice(0, -1)) ? e : a1(e, t, n, r)
}

function X$(e) {
  return ze(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype
}

function Og(e) {
  return Array.isArray(e) ? [] : {}
}
var q$ = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;

function Ri() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  var r = Og(t[0]);
  return t.forEach(function(o) {
    function i(a, l) {
      var s = new Set(l),
        u = Jn(o, a),
        d = Array.isArray(u);
      if (d || X$(u)) {
        if (!s.has(u)) {
          s.add(u);
          var f = Jn(r, a);
          d ? r = Qn(r, a, []) : (!f || ze(f) !== "object") && (r = Qn(r, a, Og(u))), q$(u).forEach(function(v) {
            i([].concat(ce(a), [v]), s)
          })
        }
      } else r = Qn(r, a, u)
    }
    i([])
  }), r
}

function Q$() {}
const Y$ = () => {
    const e = () => {};
    return e.deprecated = Q$, e
  },
  Z$ = c.createContext(void 0),
  J$ = {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  };
var eO = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const tO = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  },
  l1 = tO,
  nO = {
    lang: Object.assign({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, eO),
    timePickerLocale: Object.assign({}, l1)
  },
  Pg = nO,
  mn = "${label} is not a valid ${type}",
  rO = {
    locale: "en",
    Pagination: J$,
    DatePicker: Pg,
    TimePicker: l1,
    Calendar: Pg,
    global: {
      placeholder: "Please select"
    },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand"
    },
    PageHeader: {
      back: "Back"
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: mn,
          method: mn,
          array: mn,
          object: mn,
          number: mn,
          date: mn,
          boolean: mn,
          integer: mn,
          float: mn,
          regexp: mn,
          email: mn,
          url: mn,
          hex: mn
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh"
    },
    ColorPicker: {
      presetEmpty: "Empty"
    }
  },
  Do = rO;
let Ns = Object.assign({}, Do.Modal),
  Ms = [];
const Rg = () => Ms.reduce((e, t) => Object.assign(Object.assign({}, e), t), Do.Modal);

function oO(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ms.push(t), Ns = Rg(), () => {
      Ms = Ms.filter(n => n !== t), Ns = Rg()
    }
  }
  Ns = Object.assign({}, Do.Modal)
}

function s1() {
  return Ns
}
const iO = c.createContext(void 0),
  Op = iO,
  aO = (e, t) => {
    const n = c.useContext(Op),
      r = c.useMemo(() => {
        var i;
        const a = t || Do[e],
          l = (i = n == null ? void 0 : n[e]) !== null && i !== void 0 ? i : {};
        return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), l || {})
      }, [e, t, n]),
      o = c.useMemo(() => {
        const i = n == null ? void 0 : n.locale;
        return n != null && n.exist && !i ? Do.locale : i
      }, [n]);
    return [r, o]
  },
  ru = aO,
  lO = "internalMark",
  sO = e => {
    const {
      locale: t = {},
      children: n,
      _ANT_MARK__: r
    } = e;
    c.useEffect(() => oO(t && t.Modal), [t]);
    const o = c.useMemo(() => Object.assign(Object.assign({}, t), {
      exist: !0
    }), [t]);
    return c.createElement(Op.Provider, {
      value: o
    }, n)
  },
  cO = sO;

function Bt(e, t) {
  uO(e) && (e = "100%");
  var n = dO(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
}

function ts(e) {
  return Math.min(1, Math.max(0, e))
}

function uO(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}

function dO(e) {
  return typeof e == "string" && e.indexOf("%") !== -1
}

function c1(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}

function ns(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e
}

function $o(e) {
  return e.length === 1 ? "0" + e : String(e)
}

function fO(e, t, n) {
  return {
    r: Bt(e, 255) * 255,
    g: Bt(t, 255) * 255,
    b: Bt(n, 255) * 255
  }
}

function Tg(e, t, n) {
  e = Bt(e, 255), t = Bt(t, 255), n = Bt(n, 255);
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = 0,
    l = (r + o) / 2;
  if (r === o) a = 0, i = 0;
  else {
    var s = r - o;
    switch (a = l > .5 ? s / (2 - r - o) : s / (r + o), r) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break
    }
    i /= 6
  }
  return {
    h: i,
    s: a,
    l
  }
}

function Ju(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function vO(e, t, n) {
  var r, o, i;
  if (e = Bt(e, 360), t = Bt(t, 100), n = Bt(n, 100), t === 0) o = n, i = n, r = n;
  else {
    var a = n < .5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    r = Ju(l, a, e + 1 / 3), o = Ju(l, a, e), i = Ju(l, a, e - 1 / 3)
  }
  return {
    r: r * 255,
    g: o * 255,
    b: i * 255
  }
}

function jf(e, t, n) {
  e = Bt(e, 255), t = Bt(t, 255), n = Bt(n, 255);
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    l = r - o,
    s = r === 0 ? 0 : l / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break
    }
    i /= 6
  }
  return {
    h: i,
    s,
    v: a
  }
}

function pO(e, t, n) {
  e = Bt(e, 360) * 6, t = Bt(t, 100), n = Bt(n, 100);
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    l = n * (1 - (1 - o) * t),
    s = r % 6,
    u = [n, a, i, i, l, n][s],
    d = [l, n, n, a, i, i][s],
    f = [i, i, l, n, n, a][s];
  return {
    r: u * 255,
    g: d * 255,
    b: f * 255
  }
}

function Ff(e, t, n, r) {
  var o = [$o(Math.round(e).toString(16)), $o(Math.round(t).toString(16)), $o(Math.round(n).toString(16))];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
}

function mO(e, t, n, r, o) {
  var i = [$o(Math.round(e).toString(16)), $o(Math.round(t).toString(16)), $o(Math.round(n).toString(16)), $o(gO(r))];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
}

function gO(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}

function Ig(e) {
  return hn(e) / 255
}

function hn(e) {
  return parseInt(e, 16)
}

function hO(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  }
}
var Df = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

function pi(e) {
  var t = {
      r: 0,
      g: 0,
      b: 0
    },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    l = !1;
  return typeof e == "string" && (e = SO(e)), typeof e == "object" && (Pr(e.r) && Pr(e.g) && Pr(e.b) ? (t = fO(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Pr(e.h) && Pr(e.s) && Pr(e.v) ? (r = ns(e.s), o = ns(e.v), t = pO(e.h, r, o), a = !0, l = "hsv") : Pr(e.h) && Pr(e.s) && Pr(e.l) && (r = ns(e.s), i = ns(e.l), t = vO(e.h, r, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = c1(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  }
}
var yO = "[-\\+]?\\d+%?",
  bO = "[-\\+]?\\d*\\.\\d+%?",
  eo = "(?:".concat(bO, ")|(?:").concat(yO, ")"),
  ed = "[\\s|\\(]+(".concat(eo, ")[,|\\s]+(").concat(eo, ")[,|\\s]+(").concat(eo, ")\\s*\\)?"),
  td = "[\\s|\\(]+(".concat(eo, ")[,|\\s]+(").concat(eo, ")[,|\\s]+(").concat(eo, ")[,|\\s]+(").concat(eo, ")\\s*\\)?"),
  Gn = {
    CSS_UNIT: new RegExp(eo),
    rgb: new RegExp("rgb" + ed),
    rgba: new RegExp("rgba" + td),
    hsl: new RegExp("hsl" + ed),
    hsla: new RegExp("hsla" + td),
    hsv: new RegExp("hsv" + ed),
    hsva: new RegExp("hsva" + td),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };

function SO(e) {
  if (e = e.trim().toLowerCase(), e.length === 0) return !1;
  var t = !1;
  if (Df[e]) e = Df[e], t = !0;
  else if (e === "transparent") return {
    r: 0,
    g: 0,
    b: 0,
    a: 0,
    format: "name"
  };
  var n = Gn.rgb.exec(e);
  return n ? {
    r: n[1],
    g: n[2],
    b: n[3]
  } : (n = Gn.rgba.exec(e), n ? {
    r: n[1],
    g: n[2],
    b: n[3],
    a: n[4]
  } : (n = Gn.hsl.exec(e), n ? {
    h: n[1],
    s: n[2],
    l: n[3]
  } : (n = Gn.hsla.exec(e), n ? {
    h: n[1],
    s: n[2],
    l: n[3],
    a: n[4]
  } : (n = Gn.hsv.exec(e), n ? {
    h: n[1],
    s: n[2],
    v: n[3]
  } : (n = Gn.hsva.exec(e), n ? {
    h: n[1],
    s: n[2],
    v: n[3],
    a: n[4]
  } : (n = Gn.hex8.exec(e), n ? {
    r: hn(n[1]),
    g: hn(n[2]),
    b: hn(n[3]),
    a: Ig(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Gn.hex6.exec(e), n ? {
    r: hn(n[1]),
    g: hn(n[2]),
    b: hn(n[3]),
    format: t ? "name" : "hex"
  } : (n = Gn.hex4.exec(e), n ? {
    r: hn(n[1] + n[1]),
    g: hn(n[2] + n[2]),
    b: hn(n[3] + n[3]),
    a: Ig(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Gn.hex3.exec(e), n ? {
    r: hn(n[1] + n[1]),
    g: hn(n[2] + n[2]),
    b: hn(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))))
}

function Pr(e) {
  return !!Gn.CSS_UNIT.exec(String(e))
}
var Cn = function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == "number" && (t = hO(t)), this.originalInput = t;
      var o = pi(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128
    }, e.prototype.isLight = function() {
      return !this.isDark()
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(),
        n, r, o, i = t.r / 255,
        a = t.g / 255,
        l = t.b / 255;
      return i <= .03928 ? n = i / 12.92 : n = Math.pow((i + .055) / 1.055, 2.4), a <= .03928 ? r = a / 12.92 : r = Math.pow((a + .055) / 1.055, 2.4), l <= .03928 ? o = l / 12.92 : o = Math.pow((l + .055) / 1.055, 2.4), .2126 * n + .7152 * r + .0722 * o
    }, e.prototype.getAlpha = function() {
      return this.a
    }, e.prototype.setAlpha = function(t) {
      return this.a = c1(t), this.roundA = Math.round(100 * this.a) / 100, this
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0
    }, e.prototype.toHsv = function() {
      var t = jf(this.r, this.g, this.b);
      return {
        h: t.h * 360,
        s: t.s,
        v: t.v,
        a: this.a
      }
    }, e.prototype.toHsvString = function() {
      var t = jf(this.r, this.g, this.b),
        n = Math.round(t.h * 360),
        r = Math.round(t.s * 100),
        o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHsl = function() {
      var t = Tg(this.r, this.g, this.b);
      return {
        h: t.h * 360,
        s: t.s,
        l: t.l,
        a: this.a
      }
    }, e.prototype.toHslString = function() {
      var t = Tg(this.r, this.g, this.b),
        n = Math.round(t.h * 360),
        r = Math.round(t.s * 100),
        o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Ff(this.r, this.g, this.b, t)
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t)
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), mO(this.r, this.g, this.b, this.a, t)
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t)
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      }
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r),
        n = Math.round(this.g),
        r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")")
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Bt(n, 255) * 100), "%")
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      }
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Bt(n, 255) * 100)
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }, e.prototype.toName = function() {
      if (this.a === 0) return "transparent";
      if (this.a < 1) return !1;
      for (var t = "#" + Ff(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Df); n < r.length; n++) {
        var o = r[n],
          i = o[0],
          a = o[1];
        if (t === a) return i
      }
      return !1
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1,
        o = this.a < 1 && this.a >= 0,
        i = !n && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString())
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }, e.prototype.clone = function() {
      return new e(this.toString())
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = ts(n.l), new e(n)
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n)
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = ts(n.l), new e(n)
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t)
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t)
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = ts(n.s), new e(n)
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = ts(n.s), new e(n)
    }, e.prototype.greyscale = function() {
      return this.desaturate(100)
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(),
        r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n)
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(),
        o = new e(t).toRgb(),
        i = n / 100,
        a = {
          r: (o.r - r.r) * i + r.r,
          g: (o.g - r.g) * i + r.g,
          b: (o.b - r.b) * i + r.b,
          a: (o.a - r.a) * i + r.a
        };
      return new e(a)
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(),
        o = 360 / n,
        i = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t;) r.h = (r.h + o) % 360, i.push(new e(r));
      return i
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t)
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t; t--;) a.push(new e({
        h: r,
        s: o,
        v: i
      })), i = (i + l) % 1;
      return a
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(),
        n = t.h;
      return [this, new e({
        h: (n + 72) % 360,
        s: t.s,
        l: t.l
      }), new e({
        h: (n + 216) % 360,
        s: t.s,
        l: t.l
      })]
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(),
        r = new e(t).toRgb(),
        o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      })
    }, e.prototype.triad = function() {
      return this.polyad(3)
    }, e.prototype.tetrad = function() {
      return this.polyad(4)
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++) o.push(new e({
        h: (r + a * i) % 360,
        s: n.s,
        l: n.l
      }));
      return o
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString()
    }, e
  }(),
  rs = 2,
  Ng = .16,
  CO = .05,
  xO = .05,
  wO = .15,
  u1 = 5,
  d1 = 4,
  EO = [{
    index: 7,
    opacity: .15
  }, {
    index: 6,
    opacity: .25
  }, {
    index: 5,
    opacity: .3
  }, {
    index: 5,
    opacity: .45
  }, {
    index: 5,
    opacity: .65
  }, {
    index: 5,
    opacity: .85
  }, {
    index: 4,
    opacity: .9
  }, {
    index: 3,
    opacity: .95
  }, {
    index: 2,
    opacity: .97
  }, {
    index: 1,
    opacity: .98
  }];

function Mg(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = jf(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  }
}

function os(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(Ff(t, n, r, !1))
}

function $O(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    };
  return o
}

function _g(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - rs * t : Math.round(e.h) + rs * t : r = n ? Math.round(e.h) + rs * t : Math.round(e.h) - rs * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r
}

function kg(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return n ? r = e.s - Ng * t : t === d1 ? r = e.s + Ng : r = e.s + CO * t, r > 1 && (r = 1), n && t === u1 && r > .1 && (r = .1), r < .06 && (r = .06), Number(r.toFixed(2))
}

function zg(e, t, n) {
  var r;
  return n ? r = e.v + xO * t : r = e.v - wO * t, r > 1 && (r = 1), Number(r.toFixed(2))
}

function Bo(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = pi(e), o = u1; o > 0; o -= 1) {
    var i = Mg(r),
      a = os(pi({
        h: _g(i, o, !0),
        s: kg(i, o, !0),
        v: zg(i, o, !0)
      }));
    n.push(a)
  }
  n.push(os(r));
  for (var l = 1; l <= d1; l += 1) {
    var s = Mg(r),
      u = os(pi({
        h: _g(s, l),
        s: kg(s, l),
        v: zg(s, l)
      }));
    n.push(u)
  }
  return t.theme === "dark" ? EO.map(function(d) {
    var f = d.index,
      v = d.opacity,
      y = os($O(pi(t.backgroundColor || "#141414"), pi(n[f]), v * 100));
    return y
  }) : n
}
var nd = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  },
  Fa = {},
  rd = {};
Object.keys(nd).forEach(function(e) {
  Fa[e] = Bo(nd[e]), Fa[e].primary = Fa[e][5], rd[e] = Bo(nd[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), rd[e].primary = rd[e][5]
});
var OO = Fa.gold,
  PO = Fa.blue;
const RO = e => {
    const {
      controlHeight: t
    } = e;
    return {
      controlHeightSM: t * .75,
      controlHeightXS: t * .5,
      controlHeightLG: t * 1.25
    }
  },
  TO = RO;

function IO(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
  }
}
const f1 = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  },
  NO = Object.assign(Object.assign({}, f1), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: .1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0
  }),
  ou = NO;

function MO(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: u,
    colorTextBase: d
  } = e, f = n(s), v = n(o), y = n(i), b = n(a), h = n(l), C = r(u, d), g = e.colorLink || e.colorInfo, p = n(g);
  return Object.assign(Object.assign({}, C), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
    colorWarningBg: y[1],
    colorWarningBgHover: y[2],
    colorWarningBorder: y[3],
    colorWarningBorderHover: y[4],
    colorWarningHover: y[4],
    colorWarning: y[6],
    colorWarningActive: y[7],
    colorWarningTextHover: y[8],
    colorWarningText: y[9],
    colorWarningTextActive: y[10],
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorLinkHover: p[4],
    colorLink: p[6],
    colorLinkActive: p[7],
    colorBgMask: new Cn("#000").setAlpha(.45).toRgbString(),
    colorWhite: "#fff"
  })
}
const _O = e => {
    let t = e,
      n = e,
      r = e,
      o = e;
    return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
      borderRadius: e > 16 ? 16 : e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: o
    }
  },
  kO = _O;

function zO(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    motionDurationFast: `${(n+t).toFixed(1)}s`,
    motionDurationMid: `${(n+t*2).toFixed(1)}s`,
    motionDurationSlow: `${(n+t*3).toFixed(1)}s`,
    lineWidthBold: o + 1
  }, kO(r))
}
const Rr = (e, t) => new Cn(e).setAlpha(t).toRgbString(),
  ha = (e, t) => new Cn(e).darken(t).toHexString(),
  LO = e => {
    const t = Bo(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6]
    }
  },
  AO = (e, t) => {
    const n = e || "#fff",
      r = t || "#000";
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: Rr(r, .88),
      colorTextSecondary: Rr(r, .65),
      colorTextTertiary: Rr(r, .45),
      colorTextQuaternary: Rr(r, .25),
      colorFill: Rr(r, .15),
      colorFillSecondary: Rr(r, .06),
      colorFillTertiary: Rr(r, .04),
      colorFillQuaternary: Rr(r, .02),
      colorBgLayout: ha(n, 4),
      colorBgContainer: ha(n, 0),
      colorBgElevated: ha(n, 0),
      colorBgSpotlight: Rr(r, .85),
      colorBorder: ha(n, 15),
      colorBorderSecondary: ha(n, 6)
    }
  };

function jO(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1,
      i = e * Math.pow(2.71828, o / 5),
      a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2
  });
  return t[1] = e, t.map(n => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    }
  })
}
const FO = e => {
    const t = jO(e),
      n = t.map(o => o.size),
      r = t.map(o => o.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2]
    }
  },
  DO = FO;

function BO(e) {
  const t = Object.keys(f1).map(n => {
    const r = Bo(e[n]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${n}-${a+1}`] = r[a], o[`${n}${a+1}`] = r[a], o), {})
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), MO(e, {
    generateColorPalettes: LO,
    generateNeutralColorPalettes: AO
  })), DO(e.fontSize)), IO(e)), TO(e)), zO(e))
}
const v1 = Mf(BO),
  p1 = {
    token: ou,
    hashed: !0
  },
  m1 = X.createContext(p1),
  cl = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"],
  HO = "5.9.2";

function od(e) {
  return e >= 0 && e <= 255
}

function is(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new Cn(e).toRgb();
  if (i < 1) return e;
  const {
    r: a,
    g: l,
    b: s
  } = new Cn(t).toRgb();
  for (let u = .01; u <= 1; u += .01) {
    const d = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - l * (1 - u)) / u),
      v = Math.round((o - s * (1 - u)) / u);
    if (od(d) && od(f) && od(v)) return new Cn({
      r: d,
      g: f,
      b: v,
      a: Math.round(u * 100) / 100
    }).toRgbString()
  }
  return new Cn({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString()
}
var WO = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};

function g1(e) {
  const {
    override: t
  } = e, n = WO(e, ["override"]), r = Object.assign({}, t);
  Object.keys(ou).forEach(v => {
    delete r[v]
  });
  const o = Object.assign(Object.assign({}, n), r),
    i = 480,
    a = 576,
    l = 768,
    s = 992,
    u = 1200,
    d = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    colorBorderBg: o.colorBgContainer,
    colorSplit: is(o.colorBorderSecondary, o.colorBgContainer),
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: is(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: is(o.colorWarningBg, o.colorBgContainer),
    fontSizeIcon: o.fontSizeSM,
    lineWidthFocus: o.lineWidth * 4,
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: is(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: .65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Cn("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Cn("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Cn("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r)
}
var Lg = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const h1 = (e, t, n) => {
  const r = n.getDerivativeToken(e),
    {
      override: o
    } = t,
    i = Lg(t, ["override"]);
  let a = Object.assign(Object.assign({}, r), {
    override: o
  });
  return a = g1(a), i && Object.entries(i).forEach(l => {
    let [s, u] = l;
    const {
      theme: d
    } = u, f = Lg(u, ["theme"]);
    let v = f;
    d && (v = h1(Object.assign(Object.assign({}, a), f), {
      override: f
    }, d)), a[s] = v
  }), a
};

function Go() {
  const {
    token: e,
    hashed: t,
    theme: n,
    components: r
  } = X.useContext(m1), o = `${HO}-${t||""}`, i = n || v1, [a, l] = y$(i, [ou, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, r),
    getComputedToken: h1,
    formatToken: g1
  });
  return [i, a, t ? l : ""]
}

function bn(e) {
  var t = c.useRef();
  t.current = e;
  var n = c.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i))
  }, []);
  return n
}

function ko(e) {
  var t = c.useRef(!1),
    n = c.useState(e),
    r = H(n, 2),
    o = r[0],
    i = r[1];
  c.useEffect(function() {
    return t.current = !1,
      function() {
        t.current = !0
      }
  }, []);

  function a(l, s) {
    s && t.current || i(l)
  }
  return [o, a]
}

function id(e) {
  return e !== void 0
}

function Sr(e, t) {
  var n = t || {},
    r = n.defaultValue,
    o = n.value,
    i = n.onChange,
    a = n.postState,
    l = ko(function() {
      return id(o) ? o : id(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e
    }),
    s = H(l, 2),
    u = s[0],
    d = s[1],
    f = o !== void 0 ? o : u,
    v = a ? a(f) : f,
    y = bn(i),
    b = ko([f]),
    h = H(b, 2),
    C = h[0],
    g = h[1];
  _f(function() {
    var m = C[0];
    u !== m && y(u, m)
  }, [C]), _f(function() {
    id(o) || d(o)
  }, [o]);
  var p = bn(function(m, S) {
    d(m, S), g([f], S)
  });
  return [v, p]
}
const Pp = "anticon",
  VO = (e, t) => t || (e ? `ant-${e}` : "ant"),
  Le = c.createContext({
    getPrefixCls: VO,
    iconPrefixCls: Pp
  }),
  y1 = e => ({
    color: e.colorLink,
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "&:focus, &:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    }
  }),
  UO = (e, t, n, r, o) => {
    const i = e / 2,
      a = 0,
      l = i,
      s = n * 1 / Math.sqrt(2),
      u = i - n * (1 - 1 / Math.sqrt(2)),
      d = i - t * (1 / Math.sqrt(2)),
      f = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      v = 2 * i - d,
      y = f,
      b = 2 * i - s,
      h = u,
      C = 2 * i - a,
      g = l,
      p = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
      m = n * (Math.sqrt(2) - 1);
    return {
      pointerEvents: "none",
      width: e,
      height: e,
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: e,
        height: e / 2,
        background: r,
        clipPath: {
          _multi_value_: !0,
          value: [`polygon(${m}px 100%, 50% ${m}px, ${2*i-m}px 100%, ${m}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${u} L ${d} ${f} A ${t} ${t} 0 0 1 ${v} ${y} L ${b} ${h} A ${n} ${n} 0 0 0 ${C} ${g} Z')`]
        },
        content: '""'
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: p,
        height: p,
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: {
          _skip_check_: !0,
          value: `0 0 ${t}px 0`
        },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow: o,
        zIndex: 0,
        background: "transparent"
      }
    }
  },
  Rp = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  cr = e => ({
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    listStyle: "none",
    fontFamily: e.fontFamily
  }),
  KO = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  }),
  Ji = () => ({
    "&::before": {
      display: "table",
      content: '""'
    },
    "&::after": {
      display: "table",
      clear: "both",
      content: '""'
    }
  }),
  GO = e => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": {
        color: e.colorLinkHover
      },
      "&:active": {
        color: e.colorLinkActive
      },
      "&:active,\n  &:hover": {
        textDecoration: e.linkHoverDecoration,
        outline: 0
      },
      "&:focus": {
        textDecoration: e.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  }),
  XO = (e, t) => {
    const {
      fontFamily: n,
      fontSize: r
    } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [o]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        },
        [o]: {
          boxSizing: "border-box",
          "&::before, &::after": {
            boxSizing: "border-box"
          }
        }
      }
    }
  },
  qO = e => ({
    outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
  }),
  iu = e => ({
    "&:focus-visible": Object.assign({}, qO(e))
  }),
  b1 = typeof CSSINJS_STATISTIC < "u";
let Bf = !0;

function wt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  if (!b1) return Object.assign.apply(Object, [{}].concat(t));
  Bf = !1;
  const r = {};
  return t.forEach(o => {
    Object.keys(o).forEach(a => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      })
    })
  }), Bf = !0, r
}
const Ag = {};

function QO() {}

function YO(e) {
  let t, n = e,
    r = QO;
  return b1 && (t = new Set, n = new Proxy(e, {
    get(o, i) {
      return Bf && t.add(i), o[i]
    }
  }), r = (o, i) => {
    var a;
    Ag[o] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (a = Ag[o]) === null || a === void 0 ? void 0 : a.component), i)
    }
  }), {
    token: n,
    keys: t,
    flush: r
  }
}
const ZO = (e, t) => {
    const [n, r] = Go();
    return Af({
      theme: n,
      token: r,
      hashId: "",
      path: ["ant-design-icons", e],
      nonce: () => t == null ? void 0 : t.nonce
    }, () => [{
      [`.${e}`]: Object.assign(Object.assign({}, KO()), {
        [`.${e} .${e}-icon`]: {
          display: "block"
        }
      })
    }])
  },
  S1 = ZO;

function rn(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e],
    [i] = o,
    a = o.join("-");
  return l => {
    const [s, u, d] = Go(), {
      getPrefixCls: f,
      iconPrefixCls: v,
      csp: y
    } = c.useContext(Le), b = f(), h = {
      theme: s,
      token: u,
      hashId: d,
      nonce: () => y == null ? void 0 : y.nonce,
      clientOnly: r.clientOnly,
      order: r.order || -999
    };
    return Af(Object.assign(Object.assign({}, h), {
      clientOnly: !1,
      path: ["Shared", b]
    }), () => [{
      "&": GO(u)
    }]), S1(v), [Af(Object.assign(Object.assign({}, h), {
      path: [a, l, v]
    }), () => {
      const {
        token: C,
        flush: g
      } = YO(u), p = Object.assign({}, u[i]);
      if (r.deprecatedTokens) {
        const {
          deprecatedTokens: R
        } = r;
        R.forEach(P => {
          let [O, _] = P;
          var N;
          (p != null && p[O] || p != null && p[_]) && ((N = p[_]) !== null && N !== void 0 || (p[_] = p == null ? void 0 : p[O]))
        })
      }
      const m = typeof n == "function" ? n(wt(C, p ?? {})) : n,
        S = Object.assign(Object.assign({}, m), p),
        E = `.${l}`,
        w = wt(C, {
          componentCls: E,
          prefixCls: l,
          iconCls: `.${v}`,
          antCls: `.${b}`
        }, S),
        x = t(w, {
          hashId: d,
          prefixCls: l,
          rootPrefixCls: b,
          iconPrefixCls: v,
          overrideComponentToken: p
        });
      return g(i, S), [r.resetStyle === !1 ? null : XO(u, l), x]
    }), d]
  }
}
const au = (e, t, n, r) => {
  const o = rn(e, t, n, Object.assign({
    resetStyle: !1,
    order: -998
  }, r));
  return a => {
    let {
      prefixCls: l
    } = a;
    return o(l), null
  }
};

function C1(e, t) {
  return cl.reduce((n, r) => {
    const o = e[`${r}1`],
      i = e[`${r}3`],
      a = e[`${r}6`],
      l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }))
  }, {})
}
const JO = `-ant-${Date.now()}-${Math.random()}`;

function eP(e, t) {
  const n = {},
    r = (a, l) => {
      let s = a.clone();
      return s = (l == null ? void 0 : l(s)) || s, s.toRgbString()
    },
    o = (a, l) => {
      const s = new Cn(a),
        u = Bo(s.toRgbString());
      n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = u[1], n[`${l}-color-hover`] = u[4], n[`${l}-color-active`] = u[6], n[`${l}-color-outline`] = s.clone().setAlpha(.2).toRgbString(), n[`${l}-color-deprecated-bg`] = u[0], n[`${l}-color-deprecated-border`] = u[2]
    };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Cn(t.primaryColor),
      l = Bo(a.toRgbString());
    l.forEach((u, d) => {
      n[`primary-${d+1}`] = u
    }), n["primary-color-deprecated-l-35"] = r(a, u => u.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, u => u.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, u => u.tint(20)), n["primary-color-deprecated-t-50"] = r(a, u => u.tint(50)), n["primary-color-deprecated-f-12"] = r(a, u => u.setAlpha(u.getAlpha() * .12));
    const s = new Cn(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, u => u.setAlpha(u.getAlpha() * .3)), n["primary-color-active-deprecated-d-02"] = r(s, u => u.darken(2))
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map(a=>`--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
}

function tP(e, t) {
  const n = eP(e, t);
  qt() && Ki(n, `${JO}-dynamic-theme`)
}
const Hf = c.createContext(!1),
  x1 = e => {
    let {
      children: t,
      disabled: n
    } = e;
    const r = c.useContext(Hf);
    return c.createElement(Hf.Provider, {
      value: n ?? r
    }, t)
  },
  Tp = Hf,
  Wf = c.createContext(void 0),
  nP = e => {
    let {
      children: t,
      size: n
    } = e;
    const r = c.useContext(Wf);
    return c.createElement(Wf.Provider, {
      value: n || r
    }, t)
  },
  lu = Wf;

function rP() {
  const e = c.useContext(Tp),
    t = c.useContext(lu);
  return {
    componentDisabled: e,
    componentSize: t
  }
}

function oP(e, t) {
  const n = e || {},
    r = n.inherit === !1 || !t ? p1 : t;
  return Lc(() => {
    if (!e) return t;
    const o = Object.assign({}, r.components);
    return Object.keys(e.components || {}).forEach(i => {
      o[i] = Object.assign(Object.assign({}, o[i]), e.components[i])
    }), Object.assign(Object.assign(Object.assign({}, r), n), {
      token: Object.assign(Object.assign({}, r.token), n.token),
      components: o
    })
  }, [n, r], (o, i) => o.some((a, l) => {
    const s = i[l];
    return !Jc(a, s, !0)
  }))
}
var iP = ["children"],
  w1 = c.createContext({});

function aP(e) {
  var t = e.children,
    n = Fe(e, iP);
  return c.createElement(w1.Provider, {
    value: n
  }, t)
}
var lP = function(e) {
    ml(n, e);
    var t = gl(n);

    function n() {
      return lr(this, n), t.apply(this, arguments)
    }
    return sr(n, [{
      key: "render",
      value: function() {
        return this.props.children
      }
    }]), n
  }(c.Component),
  So = "none",
  as = "appear",
  ls = "enter",
  ss = "leave",
  jg = "none",
  Yn = "prepare",
  Ti = "start",
  Ii = "active",
  Ip = "end",
  E1 = "prepared";

function Fg(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n
}

function sP(e, t) {
  var n = {
    animationend: Fg("Animation", "AnimationEnd"),
    transitionend: Fg("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n
}
var cP = sP(qt(), typeof window < "u" ? window : {}),
  $1 = {};
if (qt()) {
  var uP = document.createElement("div");
  $1 = uP.style
}
var cs = {};

function O1(e) {
  if (cs[e]) return cs[e];
  var t = cP[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in $1) return cs[e] = t[i], cs[e]
    }
  return ""
}
var P1 = O1("animationend"),
  R1 = O1("transitionend"),
  T1 = !!(P1 && R1),
  Dg = P1 || "animationend",
  Bg = R1 || "transitionend";

function Hg(e, t) {
  if (!e) return null;
  if (ze(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase()
    });
    return e[n]
  }
  return "".concat(e, "-").concat(t)
}
const dP = function(e) {
  var t = c.useRef(),
    n = c.useRef(e);
  n.current = e;
  var r = c.useCallback(function(a) {
    n.current(a)
  }, []);

  function o(a) {
    a && (a.removeEventListener(Bg, r), a.removeEventListener(Dg, r))
  }

  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(Bg, r), a.addEventListener(Dg, r), t.current = a)
  }
  return c.useEffect(function() {
    return function() {
      o(t.current)
    }
  }, []), [i, o]
};
var I1 = qt() ? c.useLayoutEffect : c.useEffect;
const fP = function() {
  var e = c.useRef(null);

  function t() {
    It.cancel(e.current)
  }

  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = It(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current
        }
      }) : n(r, o - 1)
    });
    e.current = i
  }
  return c.useEffect(function() {
    return function() {
      t()
    }
  }, []), [n, t]
};
var vP = [Yn, Ti, Ii, Ip],
  pP = [Yn, E1],
  N1 = !1,
  mP = !0;

function M1(e) {
  return e === Ii || e === Ip
}
const gP = function(e, t, n) {
  var r = ko(jg),
    o = H(r, 2),
    i = o[0],
    a = o[1],
    l = fP(),
    s = H(l, 2),
    u = s[0],
    d = s[1];

  function f() {
    a(Yn, !0)
  }
  var v = t ? pP : vP;
  return I1(function() {
    if (i !== jg && i !== Ip) {
      var y = v.indexOf(i),
        b = v[y + 1],
        h = n(i);
      h === N1 ? a(b, !0) : b && u(function(C) {
        function g() {
          C.isCanceled() || a(b, !0)
        }
        h === !0 ? g() : Promise.resolve(h).then(g)
      })
    }
  }, [e, i]), c.useEffect(function() {
    return function() {
      d()
    }
  }, []), [f, i]
};

function hP(e, t, n, r) {
  var o = r.motionEnter,
    i = o === void 0 ? !0 : o,
    a = r.motionAppear,
    l = a === void 0 ? !0 : a,
    s = r.motionLeave,
    u = s === void 0 ? !0 : s,
    d = r.motionDeadline,
    f = r.motionLeaveImmediately,
    v = r.onAppearPrepare,
    y = r.onEnterPrepare,
    b = r.onLeavePrepare,
    h = r.onAppearStart,
    C = r.onEnterStart,
    g = r.onLeaveStart,
    p = r.onAppearActive,
    m = r.onEnterActive,
    S = r.onLeaveActive,
    E = r.onAppearEnd,
    w = r.onEnterEnd,
    x = r.onLeaveEnd,
    R = r.onVisibleChanged,
    P = ko(),
    O = H(P, 2),
    _ = O[0],
    N = O[1],
    I = ko(So),
    A = H(I, 2),
    j = A[0],
    M = A[1],
    $ = ko(null),
    T = H($, 2),
    k = T[0],
    L = T[1],
    B = c.useRef(!1),
    F = c.useRef(null);

  function V() {
    return n()
  }
  var K = c.useRef(!1);

  function Q() {
    M(So, !0), L(null, !0)
  }

  function W(re) {
    var ne = V();
    if (!(re && !re.deadline && re.target !== ne)) {
      var ie = K.current,
        be;
      j === as && ie ? be = E == null ? void 0 : E(ne, re) : j === ls && ie ? be = w == null ? void 0 : w(ne, re) : j === ss && ie && (be = x == null ? void 0 : x(ne, re)), j !== So && ie && be !== !1 && Q()
    }
  }
  var G = dP(W),
    Z = H(G, 1),
    fe = Z[0],
    le = function(ne) {
      var ie, be, ke;
      switch (ne) {
        case as:
          return ie = {}, z(ie, Yn, v), z(ie, Ti, h), z(ie, Ii, p), ie;
        case ls:
          return be = {}, z(be, Yn, y), z(be, Ti, C), z(be, Ii, m), be;
        case ss:
          return ke = {}, z(ke, Yn, b), z(ke, Ti, g), z(ke, Ii, S), ke;
        default:
          return {}
      }
    },
    oe = c.useMemo(function() {
      return le(j)
    }, [j]),
    Oe = gP(j, !e, function(re) {
      if (re === Yn) {
        var ne = oe[Yn];
        return ne ? ne(V()) : N1
      }
      if (xe in oe) {
        var ie;
        L(((ie = oe[xe]) === null || ie === void 0 ? void 0 : ie.call(oe, V(), null)) || null)
      }
      return xe === Ii && (fe(V()), d > 0 && (clearTimeout(F.current), F.current = setTimeout(function() {
        W({
          deadline: !0
        })
      }, d))), xe === E1 && Q(), mP
    }),
    Ce = H(Oe, 2),
    Ue = Ce[0],
    xe = Ce[1],
    pe = M1(xe);
  K.current = pe, I1(function() {
    N(t);
    var re = B.current;
    B.current = !0;
    var ne;
    !re && t && l && (ne = as), re && t && i && (ne = ls), (re && !t && u || !re && f && !t && u) && (ne = ss);
    var ie = le(ne);
    ne && (e || ie[Yn]) ? (M(ne), Ue()) : M(So)
  }, [t]), c.useEffect(function() {
    (j === as && !l || j === ls && !i || j === ss && !u) && M(So)
  }, [l, i, u]), c.useEffect(function() {
    return function() {
      B.current = !1, clearTimeout(F.current)
    }
  }, []);
  var ye = c.useRef(!1);
  c.useEffect(function() {
    _ && (ye.current = !0), _ !== void 0 && j === So && ((ye.current || _) && (R == null || R(_)), ye.current = !0)
  }, [_, j]);
  var Y = k;
  return oe[Yn] && xe === Ti && (Y = D({
    transition: "none"
  }, Y)), [j, xe, Y, _ ?? t]
}

function yP(e) {
  var t = e;
  ze(e) === "object" && (t = e.transitionSupport);

  function n(o, i) {
    return !!(o.motionName && t && i !== !1)
  }
  var r = c.forwardRef(function(o, i) {
    var a = o.visible,
      l = a === void 0 ? !0 : a,
      s = o.removeOnLeave,
      u = s === void 0 ? !0 : s,
      d = o.forceRender,
      f = o.children,
      v = o.motionName,
      y = o.leavedClassName,
      b = o.eventProps,
      h = c.useContext(w1),
      C = h.motion,
      g = n(o, C),
      p = c.useRef(),
      m = c.useRef();

    function S() {
      try {
        return p.current instanceof HTMLElement ? p.current : $f(m.current)
      } catch {
        return null
      }
    }
    var E = hP(g, l, S, o),
      w = H(E, 4),
      x = w[0],
      R = w[1],
      P = w[2],
      O = w[3],
      _ = c.useRef(O);
    O && (_.current = !0);
    var N = c.useCallback(function(L) {
        p.current = L, Pv(i, L)
      }, [i]),
      I, A = D(D({}, b), {}, {
        visible: l
      });
    if (!f) I = null;
    else if (x === So) O ? I = f(D({}, A), N) : !u && _.current && y ? I = f(D(D({}, A), {}, {
      className: y
    }), N) : d || !u && !y ? I = f(D(D({}, A), {}, {
      style: {
        display: "none"
      }
    }), N) : I = null;
    else {
      var j, M;
      R === Yn ? M = "prepare" : M1(R) ? M = "active" : R === Ti && (M = "start");
      var $ = Hg(v, "".concat(x, "-").concat(M));
      I = f(D(D({}, A), {}, {
        className: U(Hg(v, x), (j = {}, z(j, $, $ && M), z(j, v, typeof v == "string"), j)),
        style: P
      }), N)
    }
    if (c.isValidElement(I) && Wo(I)) {
      var T = I,
        k = T.ref;
      k || (I = c.cloneElement(I, {
        ref: N
      }))
    }
    return c.createElement(lP, {
      ref: m
    }, I)
  });
  return r.displayName = "CSSMotion", r
}
const Wr = yP(T1);
var Vf = "add",
  Uf = "keep",
  Kf = "remove",
  ad = "removed";

function bP(e) {
  var t;
  return e && ze(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, D(D({}, t), {}, {
    key: String(t.key)
  })
}

function Gf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(bP)
}

function SP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    o = t.length,
    i = Gf(e),
    a = Gf(t);
  i.forEach(function(u) {
    for (var d = !1, f = r; f < o; f += 1) {
      var v = a[f];
      if (v.key === u.key) {
        r < f && (n = n.concat(a.slice(r, f).map(function(y) {
          return D(D({}, y), {}, {
            status: Vf
          })
        })), r = f), n.push(D(D({}, v), {}, {
          status: Uf
        })), r += 1, d = !0;
        break
      }
    }
    d || n.push(D(D({}, u), {}, {
      status: Kf
    }))
  }), r < o && (n = n.concat(a.slice(r).map(function(u) {
    return D(D({}, u), {}, {
      status: Vf
    })
  })));
  var l = {};
  n.forEach(function(u) {
    var d = u.key;
    l[d] = (l[d] || 0) + 1
  });
  var s = Object.keys(l).filter(function(u) {
    return l[u] > 1
  });
  return s.forEach(function(u) {
    n = n.filter(function(d) {
      var f = d.key,
        v = d.status;
      return f !== u || v !== Kf
    }), n.forEach(function(d) {
      d.key === u && (d.status = Uf)
    })
  }), n
}
var CP = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  xP = ["status"],
  wP = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];

function EP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wr,
    n = function(r) {
      ml(i, r);
      var o = gl(i);

      function i() {
        var a;
        lr(this, i);
        for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++) s[u] = arguments[u];
        return a = o.call.apply(o, [this].concat(s)), z(We(a), "state", {
          keyEntities: []
        }), z(We(a), "removeKey", function(d) {
          var f = a.state.keyEntities,
            v = f.map(function(y) {
              return y.key !== d ? y : D(D({}, y), {}, {
                status: ad
              })
            });
          return a.setState({
            keyEntities: v
          }), v.filter(function(y) {
            var b = y.status;
            return b !== ad
          }).length
        }), a
      }
      return sr(i, [{
        key: "render",
        value: function() {
          var l = this,
            s = this.state.keyEntities,
            u = this.props,
            d = u.component,
            f = u.children,
            v = u.onVisibleChanged,
            y = u.onAllRemoved,
            b = Fe(u, CP),
            h = d || c.Fragment,
            C = {};
          return wP.forEach(function(g) {
            C[g] = b[g], delete b[g]
          }), delete b.keys, c.createElement(h, b, s.map(function(g, p) {
            var m = g.status,
              S = Fe(g, xP),
              E = m === Vf || m === Uf;
            return c.createElement(t, de({}, C, {
              key: S.key,
              visible: E,
              eventProps: S,
              onVisibleChanged: function(x) {
                if (v == null || v(x, {
                    key: S.key
                  }), !x) {
                  var R = l.removeKey(S.key);
                  R === 0 && y && y()
                }
              }
            }), function(w, x) {
              return f(D(D({}, w), {}, {
                index: p
              }), x)
            })
          }))
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function(l, s) {
          var u = l.keys,
            d = s.keyEntities,
            f = Gf(u),
            v = SP(d, f);
          return {
            keyEntities: v.filter(function(y) {
              var b = d.find(function(h) {
                var C = h.key;
                return y.key === C
              });
              return !(b && b.status === ad && y.status === Kf)
            })
          }
        }
      }]), i
    }(c.Component);
  return z(n, "defaultProps", {
    component: "div"
  }), n
}
EP(T1);

function $P(e) {
  const {
    children: t
  } = e, [, n] = Go(), {
    motion: r
  } = n, o = c.useRef(!1);
  return o.current = o.current || r === !1, o.current ? c.createElement(aP, {
    motion: r
  }, t) : t
}
const OP = () => null;
var PP = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const RP = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"],
  TP = "ant";
let pc, _1, k1;

function _s() {
  return pc || TP
}

function IP() {
  return _1 || Pp
}

function NP(e) {
  return Object.keys(e).some(t => t.endsWith("Color"))
}
const MP = e => {
    let {
      prefixCls: t,
      iconPrefixCls: n,
      theme: r
    } = e;
    t !== void 0 && (pc = t), n !== void 0 && (_1 = n), r && (NP(r) ? tP(_s(), r) : k1 = r)
  },
  _P = () => ({
    getPrefixCls: (e, t) => t || (e ? `${_s()}-${e}` : _s()),
    getIconPrefixCls: IP,
    getRootPrefixCls: () => pc || _s(),
    getTheme: () => k1
  }),
  kP = e => {
    const {
      children: t,
      csp: n,
      autoInsertSpaceInButton: r,
      alert: o,
      anchor: i,
      form: a,
      locale: l,
      componentSize: s,
      direction: u,
      space: d,
      virtual: f,
      dropdownMatchSelectWidth: v,
      popupMatchSelectWidth: y,
      popupOverflow: b,
      legacyLocale: h,
      parentContext: C,
      iconPrefixCls: g,
      theme: p,
      componentDisabled: m,
      segmented: S,
      statistic: E,
      spin: w,
      calendar: x,
      carousel: R,
      cascader: P,
      collapse: O,
      typography: _,
      checkbox: N,
      descriptions: I,
      divider: A,
      drawer: j,
      skeleton: M,
      steps: $,
      image: T,
      layout: k,
      list: L,
      mentions: B,
      modal: F,
      progress: V,
      result: K,
      slider: Q,
      breadcrumb: W,
      menu: G,
      pagination: Z,
      input: fe,
      empty: le,
      badge: oe,
      radio: Oe,
      rate: Ce,
      switch: Ue,
      transfer: xe,
      avatar: pe,
      message: ye,
      tag: Y,
      table: re,
      card: ne,
      tabs: ie,
      timeline: be,
      timePicker: ke,
      upload: De,
      notification: ue,
      tree: he,
      colorPicker: Re,
      datePicker: rt,
      wave: Ie
    } = e, Be = c.useCallback((J, ge) => {
      const {
        prefixCls: se
      } = e;
      if (ge) return ge;
      const Se = se || C.getPrefixCls("");
      return J ? `${Se}-${J}` : Se
    }, [C.getPrefixCls, e.prefixCls]), Ae = g || C.iconPrefixCls || Pp, pt = n || C.csp;
    S1(Ae, pt);
    const je = oP(p, C.theme),
      Ke = {
        csp: pt,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        locale: l || h,
        direction: u,
        space: d,
        virtual: f,
        popupMatchSelectWidth: y ?? v,
        popupOverflow: b,
        getPrefixCls: Be,
        iconPrefixCls: Ae,
        theme: je,
        segmented: S,
        statistic: E,
        spin: w,
        calendar: x,
        carousel: R,
        cascader: P,
        collapse: O,
        typography: _,
        checkbox: N,
        descriptions: I,
        divider: A,
        drawer: j,
        skeleton: M,
        steps: $,
        image: T,
        input: fe,
        layout: k,
        list: L,
        mentions: B,
        modal: F,
        progress: V,
        result: K,
        slider: Q,
        breadcrumb: W,
        menu: G,
        pagination: Z,
        empty: le,
        badge: oe,
        radio: Oe,
        rate: Ce,
        switch: Ue,
        transfer: xe,
        avatar: pe,
        message: ye,
        tag: Y,
        table: re,
        card: ne,
        tabs: ie,
        timeline: be,
        timePicker: ke,
        upload: De,
        notification: ue,
        tree: he,
        colorPicker: Re,
        datePicker: rt,
        wave: Ie
      },
      Ne = Object.assign({}, C);
    Object.keys(Ke).forEach(J => {
      Ke[J] !== void 0 && (Ne[J] = Ke[J])
    }), RP.forEach(J => {
      const ge = e[J];
      ge && (Ne[J] = ge)
    });
    const ot = Lc(() => Ne, Ne, (J, ge) => {
        const se = Object.keys(J),
          Se = Object.keys(ge);
        return se.length !== Se.length || se.some(Xe => J[Xe] !== ge[Xe])
      }),
      Qt = c.useMemo(() => ({
        prefixCls: Ae,
        csp: pt
      }), [Ae, pt]);
    let Pe = c.createElement(c.Fragment, null, c.createElement(OP, {
      dropdownMatchSelectWidth: v
    }), t);
    const lt = c.useMemo(() => {
      var J, ge, se, Se;
      return Ri(((J = Do.Form) === null || J === void 0 ? void 0 : J.defaultValidateMessages) || {}, ((se = (ge = ot.locale) === null || ge === void 0 ? void 0 : ge.Form) === null || se === void 0 ? void 0 : se.defaultValidateMessages) || {}, ((Se = ot.form) === null || Se === void 0 ? void 0 : Se.validateMessages) || {}, (a == null ? void 0 : a.validateMessages) || {})
    }, [ot, a == null ? void 0 : a.validateMessages]);
    Object.keys(lt).length > 0 && (Pe = c.createElement(Z$.Provider, {
      value: lt
    }, Pe)), l && (Pe = c.createElement(cO, {
      locale: l,
      _ANT_MARK__: lO
    }, Pe)), (Ae || pt) && (Pe = c.createElement($p.Provider, {
      value: Qt
    }, Pe)), s && (Pe = c.createElement(nP, {
      size: s
    }, Pe)), Pe = c.createElement($P, null, Pe);
    const ee = c.useMemo(() => {
      const J = je || {},
        {
          algorithm: ge,
          token: se,
          components: Se
        } = J,
        Xe = PP(J, ["algorithm", "token", "components"]),
        Ze = ge && (!Array.isArray(ge) || ge.length > 0) ? Mf(ge) : v1,
        me = {};
      return Object.entries(Se || {}).forEach(Ee => {
        let [Te, St] = Ee;
        const Je = Object.assign({}, St);
        "algorithm" in Je && (Je.algorithm === !0 ? Je.theme = Ze : (Array.isArray(Je.algorithm) || typeof Je.algorithm == "function") && (Je.theme = Mf(Je.algorithm)), delete Je.algorithm), me[Te] = Je
      }), Object.assign(Object.assign({}, Xe), {
        theme: Ze,
        token: Object.assign(Object.assign({}, ou), se),
        components: me
      })
    }, [je]);
    return p && (Pe = c.createElement(m1.Provider, {
      value: ee
    }, Pe)), m !== void 0 && (Pe = c.createElement(x1, {
      disabled: m
    }, Pe)), c.createElement(Le.Provider, {
      value: ot
    }, Pe)
  },
  Xo = e => {
    const t = c.useContext(Le),
      n = c.useContext(Op);
    return c.createElement(kP, Object.assign({
      parentContext: t,
      legacyLocale: n
    }, e))
  };
Xo.ConfigContext = Le;
Xo.SizeContext = lu;
Xo.config = MP;
Xo.useConfig = rP;
Object.defineProperty(Xo, "SizeContext", {
  get: () => lu
});
var zP = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      }
    }]
  },
  name: "check-circle",
  theme: "filled"
};
const LP = zP;

function z1(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
}

function AP(e) {
  return z1(e) instanceof ShadowRoot
}

function mc(e) {
  return AP(e) ? z1(e) : null
}

function jP(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase()
  })
}

function FP(e, t) {
  Zt(e, "[@ant-design/icons] ".concat(t))
}

function Wg(e) {
  return ze(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ze(e.icon) === "object" || typeof e.icon == "function")
}

function Vg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[jP(n)] = r
    }
    return t
  }, {})
}

function Xf(e, t, n) {
  return n ? X.createElement(e.tag, D(D({
    key: t
  }, Vg(e.attrs)), n), (e.children || []).map(function(r, o) {
    return Xf(r, "".concat(t, "-").concat(e.tag, "-").concat(o))
  })) : X.createElement(e.tag, D({
    key: t
  }, Vg(e.attrs)), (e.children || []).map(function(r, o) {
    return Xf(r, "".concat(t, "-").concat(e.tag, "-").concat(o))
  }))
}

function L1(e) {
  return Bo(e)[0]
}

function A1(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}
var DP = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  BP = function(t) {
    var n = c.useContext($p),
      r = n.csp,
      o = n.prefixCls,
      i = DP;
    o && (i = i.replace(/anticon/g, o)), c.useEffect(function() {
      var a = t.current,
        l = mc(a);
      Ki(i, "@ant-design-icons", {
        prepend: !0,
        csp: r,
        attachTo: l
      })
    }, [])
  },
  HP = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
  Da = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: !1
  };

function WP(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  Da.primaryColor = t, Da.secondaryColor = n || L1(t), Da.calculated = !!n
}

function VP() {
  return D({}, Da)
}
var su = function(t) {
  var n = t.icon,
    r = t.className,
    o = t.onClick,
    i = t.style,
    a = t.primaryColor,
    l = t.secondaryColor,
    s = Fe(t, HP),
    u = c.useRef(),
    d = Da;
  if (a && (d = {
      primaryColor: a,
      secondaryColor: l || L1(a)
    }), BP(u), FP(Wg(n), "icon should be icon definiton, but got ".concat(n)), !Wg(n)) return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = D(D({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), Xf(f.icon, "svg-".concat(f.name), D(D({
    className: r,
    onClick: o,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: u
  }))
};
su.displayName = "IconReact";
su.getTwoToneColors = VP;
su.setTwoToneColors = WP;
const Np = su;

function j1(e) {
  var t = A1(e),
    n = H(t, 2),
    r = n[0],
    o = n[1];
  return Np.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  })
}

function UP() {
  var e = Np.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
var KP = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
j1(PO.primary);
var cu = c.forwardRef(function(e, t) {
  var n, r = e.className,
    o = e.icon,
    i = e.spin,
    a = e.rotate,
    l = e.tabIndex,
    s = e.onClick,
    u = e.twoToneColor,
    d = Fe(e, KP),
    f = c.useContext($p),
    v = f.prefixCls,
    y = v === void 0 ? "anticon" : v,
    b = f.rootClassName,
    h = U(b, y, (n = {}, z(n, "".concat(y, "-").concat(o.name), !!o.name), z(n, "".concat(y, "-spin"), !!i || o.name === "loading"), n), r),
    C = l;
  C === void 0 && s && (C = -1);
  var g = a ? {
      msTransform: "rotate(".concat(a, "deg)"),
      transform: "rotate(".concat(a, "deg)")
    } : void 0,
    p = A1(u),
    m = H(p, 2),
    S = m[0],
    E = m[1];
  return c.createElement("span", de({
    role: "img",
    "aria-label": o.name
  }, d, {
    ref: t,
    tabIndex: C,
    onClick: s,
    className: h
  }), c.createElement(Np, {
    icon: o,
    primaryColor: S,
    secondaryColor: E,
    style: g
  }))
});
cu.displayName = "AntdIcon";
cu.getTwoToneColor = UP;
cu.setTwoToneColor = j1;
const Rn = cu;
var GP = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: LP
  }))
};
const XP = c.forwardRef(GP);
var qP = {
  icon: {
    tag: "svg",
    attrs: {
      "fill-rule": "evenodd",
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
      }
    }]
  },
  name: "close-circle",
  theme: "filled"
};
const QP = qP;
var YP = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: QP
  }))
};
const F1 = c.forwardRef(YP);
var ZP = {
  icon: {
    tag: "svg",
    attrs: {
      "fill-rule": "evenodd",
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
      }
    }]
  },
  name: "close",
  theme: "outlined"
};
const JP = ZP;
var e2 = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: JP
  }))
};
const xl = c.forwardRef(e2);
var t2 = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  name: "exclamation-circle",
  theme: "filled"
};
const n2 = t2;
var r2 = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: n2
  }))
};
const o2 = c.forwardRef(r2);
var i2 = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  name: "info-circle",
  theme: "filled"
};
const a2 = i2;
var l2 = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: a2
  }))
};
const s2 = c.forwardRef(l2);
var c2 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  u2 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  d2 = "".concat(c2, " ").concat(u2).split(/[\s\n]+/),
  f2 = "aria-",
  v2 = "data-";

function Ug(e, t) {
  return e.indexOf(t) === 0
}

function p2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = D({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    (n.aria && (o === "role" || Ug(o, f2)) || n.data && Ug(o, v2) || n.attr && d2.includes(o)) && (r[o] = e[o])
  }), r
}
const {
  isValidElement: Mp
} = $c;

function D1(e) {
  return e && Mp(e) && e.type === c.Fragment
}

function m2(e, t, n) {
  return Mp(e) ? c.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t
}

function ea(e, t) {
  return m2(e, e, t)
}
var te = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function(t) {
      var n = t.keyCode;
      if (t.altKey && !t.ctrlKey || t.metaKey || n >= te.F1 && n <= te.F12) return !1;
      switch (n) {
        case te.ALT:
        case te.CAPS_LOCK:
        case te.CONTEXT_MENU:
        case te.CTRL:
        case te.DOWN:
        case te.END:
        case te.ESC:
        case te.HOME:
        case te.INSERT:
        case te.LEFT:
        case te.MAC_FF_META:
        case te.META:
        case te.NUMLOCK:
        case te.NUM_CENTER:
        case te.PAGE_DOWN:
        case te.PAGE_UP:
        case te.PAUSE:
        case te.PRINT_SCREEN:
        case te.RIGHT:
        case te.SHIFT:
        case te.UP:
        case te.WIN_KEY:
        case te.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0
      }
    },
    isCharacterKey: function(t) {
      if (t >= te.ZERO && t <= te.NINE || t >= te.NUM_ZERO && t <= te.NUM_MULTIPLY || t >= te.A && t <= te.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0) return !0;
      switch (t) {
        case te.SPACE:
        case te.QUESTION_MARK:
        case te.NUM_PLUS:
        case te.NUM_MINUS:
        case te.NUM_PERIOD:
        case te.NUM_DIVISION:
        case te.SEMICOLON:
        case te.DASH:
        case te.EQUALS:
        case te.COMMA:
        case te.PERIOD:
        case te.SLASH:
        case te.APOSTROPHE:
        case te.SINGLE_QUOTE:
        case te.OPEN_SQUARE_BRACKET:
        case te.BACKSLASH:
        case te.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1
      }
    }
  },
  g2 = {
    icon: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 1024 1024",
        focusable: "false"
      },
      children: [{
        tag: "path",
        attrs: {
          d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
        }
      }]
    },
    name: "loading",
    theme: "outlined"
  };
const h2 = g2;
var y2 = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: h2
  }))
};
const b2 = c.forwardRef(y2);

function S2() {
  const [e, t] = c.useState([]), n = c.useCallback(r => (t(o => [].concat(ce(o), [r])), () => {
    t(o => o.filter(i => i !== r))
  }), []);
  return [e, n]
}

function en() {
  en = function() {
    return t
  };
  var e, t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o = Object.defineProperty || function(M, $, T) {
      M[$] = T.value
    },
    i = typeof Symbol == "function" ? Symbol : {},
    a = i.iterator || "@@iterator",
    l = i.asyncIterator || "@@asyncIterator",
    s = i.toStringTag || "@@toStringTag";

  function u(M, $, T) {
    return Object.defineProperty(M, $, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), M[$]
  }
  try {
    u({}, "")
  } catch {
    u = function(T, k, L) {
      return T[k] = L
    }
  }

  function d(M, $, T, k) {
    var L = $ && $.prototype instanceof g ? $ : g,
      B = Object.create(L.prototype),
      F = new A(k || []);
    return o(B, "_invoke", {
      value: O(M, T, F)
    }), B
  }

  function f(M, $, T) {
    try {
      return {
        type: "normal",
        arg: M.call($, T)
      }
    } catch (k) {
      return {
        type: "throw",
        arg: k
      }
    }
  }
  t.wrap = d;
  var v = "suspendedStart",
    y = "suspendedYield",
    b = "executing",
    h = "completed",
    C = {};

  function g() {}

  function p() {}

  function m() {}
  var S = {};
  u(S, a, function() {
    return this
  });
  var E = Object.getPrototypeOf,
    w = E && E(E(j([])));
  w && w !== n && r.call(w, a) && (S = w);
  var x = m.prototype = g.prototype = Object.create(S);

  function R(M) {
    ["next", "throw", "return"].forEach(function($) {
      u(M, $, function(T) {
        return this._invoke($, T)
      })
    })
  }

  function P(M, $) {
    function T(L, B, F, V) {
      var K = f(M[L], M, B);
      if (K.type !== "throw") {
        var Q = K.arg,
          W = Q.value;
        return W && ze(W) == "object" && r.call(W, "__await") ? $.resolve(W.__await).then(function(G) {
          T("next", G, F, V)
        }, function(G) {
          T("throw", G, F, V)
        }) : $.resolve(W).then(function(G) {
          Q.value = G, F(Q)
        }, function(G) {
          return T("throw", G, F, V)
        })
      }
      V(K.arg)
    }
    var k;
    o(this, "_invoke", {
      value: function(B, F) {
        function V() {
          return new $(function(K, Q) {
            T(B, F, K, Q)
          })
        }
        return k = k ? k.then(V, V) : V()
      }
    })
  }

  function O(M, $, T) {
    var k = v;
    return function(L, B) {
      if (k === b) throw new Error("Generator is already running");
      if (k === h) {
        if (L === "throw") throw B;
        return {
          value: e,
          done: !0
        }
      }
      for (T.method = L, T.arg = B;;) {
        var F = T.delegate;
        if (F) {
          var V = _(F, T);
          if (V) {
            if (V === C) continue;
            return V
          }
        }
        if (T.method === "next") T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (k === v) throw k = h, T.arg;
          T.dispatchException(T.arg)
        } else T.method === "return" && T.abrupt("return", T.arg);
        k = b;
        var K = f(M, $, T);
        if (K.type === "normal") {
          if (k = T.done ? h : y, K.arg === C) continue;
          return {
            value: K.arg,
            done: T.done
          }
        }
        K.type === "throw" && (k = h, T.method = "throw", T.arg = K.arg)
      }
    }
  }

  function _(M, $) {
    var T = $.method,
      k = M.iterator[T];
    if (k === e) return $.delegate = null, T === "throw" && M.iterator.return && ($.method = "return", $.arg = e, _(M, $), $.method === "throw") || T !== "return" && ($.method = "throw", $.arg = new TypeError("The iterator does not provide a '" + T + "' method")), C;
    var L = f(k, M.iterator, $.arg);
    if (L.type === "throw") return $.method = "throw", $.arg = L.arg, $.delegate = null, C;
    var B = L.arg;
    return B ? B.done ? ($[M.resultName] = B.value, $.next = M.nextLoc, $.method !== "return" && ($.method = "next", $.arg = e), $.delegate = null, C) : B : ($.method = "throw", $.arg = new TypeError("iterator result is not an object"), $.delegate = null, C)
  }

  function N(M) {
    var $ = {
      tryLoc: M[0]
    };
    1 in M && ($.catchLoc = M[1]), 2 in M && ($.finallyLoc = M[2], $.afterLoc = M[3]), this.tryEntries.push($)
  }

  function I(M) {
    var $ = M.completion || {};
    $.type = "normal", delete $.arg, M.completion = $
  }

  function A(M) {
    this.tryEntries = [{
      tryLoc: "root"
    }], M.forEach(N, this), this.reset(!0)
  }

  function j(M) {
    if (M || M === "") {
      var $ = M[a];
      if ($) return $.call(M);
      if (typeof M.next == "function") return M;
      if (!isNaN(M.length)) {
        var T = -1,
          k = function L() {
            for (; ++T < M.length;)
              if (r.call(M, T)) return L.value = M[T], L.done = !1, L;
            return L.value = e, L.done = !0, L
          };
        return k.next = k
      }
    }
    throw new TypeError(ze(M) + " is not iterable")
  }
  return p.prototype = m, o(x, "constructor", {
    value: m,
    configurable: !0
  }), o(m, "constructor", {
    value: p,
    configurable: !0
  }), p.displayName = u(m, s, "GeneratorFunction"), t.isGeneratorFunction = function(M) {
    var $ = typeof M == "function" && M.constructor;
    return !!$ && ($ === p || ($.displayName || $.name) === "GeneratorFunction")
  }, t.mark = function(M) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(M, m) : (M.__proto__ = m, u(M, s, "GeneratorFunction")), M.prototype = Object.create(x), M
  }, t.awrap = function(M) {
    return {
      __await: M
    }
  }, R(P.prototype), u(P.prototype, l, function() {
    return this
  }), t.AsyncIterator = P, t.async = function(M, $, T, k, L) {
    L === void 0 && (L = Promise);
    var B = new P(d(M, $, T, k), L);
    return t.isGeneratorFunction($) ? B : B.next().then(function(F) {
      return F.done ? F.value : B.next()
    })
  }, R(x), u(x, s, "Generator"), u(x, a, function() {
    return this
  }), u(x, "toString", function() {
    return "[object Generator]"
  }), t.keys = function(M) {
    var $ = Object(M),
      T = [];
    for (var k in $) T.push(k);
    return T.reverse(),
      function L() {
        for (; T.length;) {
          var B = T.pop();
          if (B in $) return L.value = B, L.done = !1, L
        }
        return L.done = !0, L
      }
  }, t.values = j, A.prototype = {
    constructor: A,
    reset: function($) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !$)
        for (var T in this) T.charAt(0) === "t" && r.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = e)
    },
    stop: function() {
      this.done = !0;
      var $ = this.tryEntries[0].completion;
      if ($.type === "throw") throw $.arg;
      return this.rval
    },
    dispatchException: function($) {
      if (this.done) throw $;
      var T = this;

      function k(Q, W) {
        return F.type = "throw", F.arg = $, T.next = Q, W && (T.method = "next", T.arg = e), !!W
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var B = this.tryEntries[L],
          F = B.completion;
        if (B.tryLoc === "root") return k("end");
        if (B.tryLoc <= this.prev) {
          var V = r.call(B, "catchLoc"),
            K = r.call(B, "finallyLoc");
          if (V && K) {
            if (this.prev < B.catchLoc) return k(B.catchLoc, !0);
            if (this.prev < B.finallyLoc) return k(B.finallyLoc)
          } else if (V) {
            if (this.prev < B.catchLoc) return k(B.catchLoc, !0)
          } else {
            if (!K) throw new Error("try statement without catch or finally");
            if (this.prev < B.finallyLoc) return k(B.finallyLoc)
          }
        }
      }
    },
    abrupt: function($, T) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var L = this.tryEntries[k];
        if (L.tryLoc <= this.prev && r.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var B = L;
          break
        }
      }
      B && ($ === "break" || $ === "continue") && B.tryLoc <= T && T <= B.finallyLoc && (B = null);
      var F = B ? B.completion : {};
      return F.type = $, F.arg = T, B ? (this.method = "next", this.next = B.finallyLoc, C) : this.complete(F)
    },
    complete: function($, T) {
      if ($.type === "throw") throw $.arg;
      return $.type === "break" || $.type === "continue" ? this.next = $.arg : $.type === "return" ? (this.rval = this.arg = $.arg, this.method = "return", this.next = "end") : $.type === "normal" && T && (this.next = T), C
    },
    finish: function($) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var k = this.tryEntries[T];
        if (k.finallyLoc === $) return this.complete(k.completion, k.afterLoc), I(k), C
      }
    },
    catch: function($) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var k = this.tryEntries[T];
        if (k.tryLoc === $) {
          var L = k.completion;
          if (L.type === "throw") {
            var B = L.arg;
            I(k)
          }
          return B
        }
      }
      throw new Error("illegal catch attempt")
    },
    delegateYield: function($, T, k) {
      return this.delegate = {
        iterator: j($),
        resultName: T,
        nextLoc: k
      }, this.method === "next" && (this.arg = e), C
    }
  }, t
}

function Kg(e, t, n, r, o, i, a) {
  try {
    var l = e[i](a),
      s = l.value
  } catch (u) {
    n(u);
    return
  }
  l.done ? t(s) : Promise.resolve(s).then(r, o)
}

function qo(e) {
  return function() {
    var t = this,
      n = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(t, n);

      function a(s) {
        Kg(i, r, o, a, l, "next", s)
      }

      function l(s) {
        Kg(i, r, o, a, l, "throw", s)
      }
      a(void 0)
    })
  }
}
var wl = D({}, vE),
  C2 = wl.version,
  x2 = wl.render,
  w2 = wl.unmountComponentAtNode,
  uu;
try {
  var E2 = Number((C2 || "").split(".")[0]);
  E2 >= 18 && (uu = wl.createRoot)
} catch {}

function Gg(e) {
  var t = wl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ze(t) === "object" && (t.usingClientEntryPoint = e)
}
var gc = "__rc_react_root__";

function $2(e, t) {
  Gg(!0);
  var n = t[gc] || uu(t);
  Gg(!1), n.render(e), t[gc] = n
}

function O2(e, t) {
  x2(e, t)
}

function B1(e, t) {
  if (uu) {
    $2(e, t);
    return
  }
  O2(e, t)
}

function P2(e) {
  return qf.apply(this, arguments)
}

function qf() {
  return qf = qo(en().mark(function e(t) {
    return en().wrap(function(r) {
      for (;;) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[gc]) === null || o === void 0 || o.unmount(), delete t[gc]
          }));
        case 1:
        case "end":
          return r.stop()
      }
    }, e)
  })), qf.apply(this, arguments)
}

function R2(e) {
  w2(e)
}

function H1(e) {
  return Qf.apply(this, arguments)
}

function Qf() {
  return Qf = qo(en().mark(function e(t) {
    return en().wrap(function(r) {
      for (;;) switch (r.prev = r.next) {
        case 0:
          if (uu === void 0) {
            r.next = 2;
            break
          }
          return r.abrupt("return", P2(t));
        case 2:
          R2(t);
        case 3:
        case "end":
          return r.stop()
      }
    }, e)
  })), Qf.apply(this, arguments)
}
const Ho = (e, t, n) => n !== void 0 ? n : `${e}-${t}`,
  _p = function(e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          i = o.width,
          a = o.height;
        if (i || a) return !0
      }
    }
    return !1
  },
  T2 = e => {
    const {
      componentCls: t,
      colorPrimary: n
    } = e;
    return {
      [t]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${n})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: .2,
        "&.wave-motion-appear": {
          transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
          "&-active": {
            boxShadow: "0 0 0 6px currentcolor",
            opacity: 0
          },
          "&.wave-quick": {
            transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(",")
          }
        }
      }
    }
  },
  I2 = rn("Wave", e => [T2(e)]);

function N2(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0
}

function ld(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && N2(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && e !== "transparent"
}

function M2(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return ld(t) ? t : ld(n) ? n : ld(r) ? r : null
}
const W1 = "ant-wave-target";

function sd(e) {
  return Number.isNaN(e) ? 0 : e
}
const _2 = e => {
    const {
      className: t,
      target: n,
      component: r
    } = e, o = c.useRef(null), [i, a] = c.useState(null), [l, s] = c.useState([]), [u, d] = c.useState(0), [f, v] = c.useState(0), [y, b] = c.useState(0), [h, C] = c.useState(0), [g, p] = c.useState(!1), m = {
      left: u,
      top: f,
      width: y,
      height: h,
      borderRadius: l.map(w => `${w}px`).join(" ")
    };
    i && (m["--wave-color"] = i);

    function S() {
      const w = getComputedStyle(n);
      a(M2(n));
      const x = w.position === "static",
        {
          borderLeftWidth: R,
          borderTopWidth: P
        } = w;
      d(x ? n.offsetLeft : sd(-parseFloat(R))), v(x ? n.offsetTop : sd(-parseFloat(P))), b(n.offsetWidth), C(n.offsetHeight);
      const {
        borderTopLeftRadius: O,
        borderTopRightRadius: _,
        borderBottomLeftRadius: N,
        borderBottomRightRadius: I
      } = w;
      s([O, _, I, N].map(A => sd(parseFloat(A))))
    }
    if (c.useEffect(() => {
        if (n) {
          const w = It(() => {
            S(), p(!0)
          });
          let x;
          return typeof ResizeObserver < "u" && (x = new ResizeObserver(S), x.observe(n)), () => {
            It.cancel(w), x == null || x.disconnect()
          }
        }
      }, []), !g) return null;
    const E = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(W1));
    return c.createElement(Wr, {
      visible: !0,
      motionAppear: !0,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (w, x) => {
        var R;
        if (x.deadline || x.propertyName === "opacity") {
          const P = (R = o.current) === null || R === void 0 ? void 0 : R.parentElement;
          H1(P).then(() => {
            P == null || P.remove()
          })
        }
        return !1
      }
    }, w => {
      let {
        className: x
      } = w;
      return c.createElement("div", {
        ref: o,
        className: U(t, {
          "wave-quick": E
        }, x),
        style: m
      })
    })
  },
  k2 = (e, t) => {
    var n;
    const {
      component: r
    } = t;
    if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked)) return;
    const o = document.createElement("div");
    o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild), B1(c.createElement(_2, Object.assign({}, t, {
      target: e
    })), o)
  },
  z2 = k2;

function L2(e, t, n) {
  const {
    wave: r
  } = c.useContext(Le), [, o, i] = Go(), a = bn(u => {
    const d = e.current;
    if (r != null && r.disabled || !d) return;
    const f = d.querySelector(`.${W1}`) || d,
      {
        showEffect: v
      } = r || {};
    (v || z2)(f, {
      className: t,
      token: o,
      component: n,
      event: u,
      hashId: i
    })
  }), l = c.useRef();
  return u => {
    It.cancel(l.current), l.current = It(() => {
      a(u)
    })
  }
}
const A2 = e => {
    const {
      children: t,
      disabled: n,
      component: r
    } = e, {
      getPrefixCls: o
    } = c.useContext(Le), i = c.useRef(null), a = o("wave"), [, l] = I2(a), s = L2(i, U(a, l), r);
    if (X.useEffect(() => {
        const d = i.current;
        if (!d || d.nodeType !== 1 || n) return;
        const f = v => {
          !_p(v.target) || !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || s(v)
        };
        return d.addEventListener("click", f, !0), () => {
          d.removeEventListener("click", f, !0)
        }
      }, [n]), !X.isValidElement(t)) return t ?? null;
    const u = Wo(t) ? Cr(t.ref, i) : i;
    return ea(t, {
      ref: u
    })
  },
  V1 = A2,
  j2 = e => {
    const t = X.useContext(lu);
    return X.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t])
  },
  ta = j2,
  F2 = e => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        "&-block": {
          display: "flex",
          width: "100%"
        },
        "&-vertical": {
          flexDirection: "column"
        }
      }
    }
  },
  D2 = F2,
  B2 = e => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        display: "inline-flex",
        "&-rtl": {
          direction: "rtl"
        },
        "&-vertical": {
          flexDirection: "column"
        },
        "&-align": {
          flexDirection: "column",
          "&-center": {
            alignItems: "center"
          },
          "&-start": {
            alignItems: "flex-start"
          },
          "&-end": {
            alignItems: "flex-end"
          },
          "&-baseline": {
            alignItems: "baseline"
          }
        },
        [`${t}-item:empty`]: {
          display: "none"
        }
      }
    }
  },
  H2 = e => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        "&-gap-row-small": {
          rowGap: e.spaceGapSmallSize
        },
        "&-gap-row-middle": {
          rowGap: e.spaceGapMiddleSize
        },
        "&-gap-row-large": {
          rowGap: e.spaceGapLargeSize
        },
        "&-gap-col-small": {
          columnGap: e.spaceGapSmallSize
        },
        "&-gap-col-middle": {
          columnGap: e.spaceGapMiddleSize
        },
        "&-gap-col-large": {
          columnGap: e.spaceGapLargeSize
        }
      }
    }
  },
  U1 = rn("Space", e => {
    const t = wt(e, {
      spaceGapSmallSize: e.paddingXS,
      spaceGapMiddleSize: e.padding,
      spaceGapLargeSize: e.paddingLG
    });
    return [B2(t), H2(t), D2(t)]
  }, () => ({}), {
    resetStyle: !1
  });
var K1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const du = c.createContext(null),
  W2 = (e, t) => {
    const n = c.useContext(du),
      r = c.useMemo(() => {
        if (!n) return "";
        const {
          compactDirection: o,
          isFirstItem: i,
          isLastItem: a
        } = n, l = o === "vertical" ? "-vertical-" : "-";
        return U(`${e}-compact${l}item`, {
          [`${e}-compact${l}first-item`]: i,
          [`${e}-compact${l}last-item`]: a,
          [`${e}-compact${l}item-rtl`]: t === "rtl"
        })
      }, [e, t, n]);
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r
    }
  },
  G1 = e => {
    let {
      children: t
    } = e;
    return c.createElement(du.Provider, {
      value: null
    }, t)
  },
  V2 = e => {
    var {
      children: t
    } = e, n = K1(e, ["children"]);
    return c.createElement(du.Provider, {
      value: n
    }, t)
  },
  U2 = e => {
    const {
      getPrefixCls: t,
      direction: n
    } = c.useContext(Le), {
      size: r,
      direction: o,
      block: i,
      prefixCls: a,
      className: l,
      rootClassName: s,
      children: u
    } = e, d = K1(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f = ta(m => r ?? m), v = t("space-compact", a), [y, b] = U1(v), h = U(v, b, {
      [`${v}-rtl`]: n === "rtl",
      [`${v}-block`]: i,
      [`${v}-vertical`]: o === "vertical"
    }, l, s), C = c.useContext(du), g = or(u), p = c.useMemo(() => g.map((m, S) => {
      const E = m && m.key || `${v}-item-${S}`;
      return c.createElement(V2, {
        key: E,
        compactSize: f,
        compactDirection: o,
        isFirstItem: S === 0 && (!C || (C == null ? void 0 : C.isFirstItem)),
        isLastItem: S === g.length - 1 && (!C || (C == null ? void 0 : C.isLastItem))
      }, m)
    }), [r, g, C]);
    return g.length === 0 ? null : y(c.createElement("div", Object.assign({
      className: h
    }, d), p))
  },
  K2 = U2;
var G2 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const X1 = c.createContext(void 0),
  X2 = e => {
    const {
      getPrefixCls: t,
      direction: n
    } = c.useContext(Le), {
      prefixCls: r,
      size: o,
      className: i
    } = e, a = G2(e, ["prefixCls", "size", "className"]), l = t("btn-group", r), [, , s] = Go();
    let u = "";
    switch (o) {
      case "large":
        u = "lg";
        break;
      case "small":
        u = "sm";
        break
    }
    const d = U(l, {
      [`${l}-${u}`]: u,
      [`${l}-rtl`]: n === "rtl"
    }, i, s);
    return c.createElement(X1.Provider, {
      value: o
    }, c.createElement("div", Object.assign({}, a, {
      className: d
    })))
  },
  q2 = X2,
  Xg = /^[\u4e00-\u9fa5]{2}$/,
  Yf = Xg.test.bind(Xg);

function q1(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  }
}

function qg(e) {
  return typeof e == "string"
}

function cd(e) {
  return e === "text" || e === "link"
}

function Q2(e, t) {
  if (e == null) return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && qg(e.type) && Yf(e.props.children) ? ea(e, {
    children: e.props.children.split("").join(n)
  }) : qg(e) ? Yf(e) ? X.createElement("span", null, e.split("").join(n)) : X.createElement("span", null, e) : D1(e) ? X.createElement("span", null, e) : e
}

function Y2(e, t) {
  let n = !1;
  const r = [];
  return X.Children.forEach(e, o => {
    const i = typeof o,
      a = i === "string" || i === "number";
    if (n && a) {
      const l = r.length - 1,
        s = r[l];
      r[l] = `${s}${o}`
    } else r.push(o);
    n = a
  }), X.Children.map(r, o => Q2(o, t))
}
const Z2 = c.forwardRef((e, t) => {
    const {
      className: n,
      style: r,
      children: o,
      prefixCls: i
    } = e, a = U(`${i}-icon`, n);
    return X.createElement("span", {
      ref: t,
      className: a,
      style: r
    }, o)
  }),
  Q1 = Z2,
  Qg = c.forwardRef((e, t) => {
    let {
      prefixCls: n,
      className: r,
      style: o,
      iconClassName: i
    } = e;
    const a = U(`${n}-loading-icon`, r);
    return X.createElement(Q1, {
      prefixCls: n,
      className: a,
      style: o,
      ref: t
    }, X.createElement(b2, {
      className: i
    }))
  }),
  ud = () => ({
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  }),
  dd = e => ({
    width: e.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  }),
  J2 = e => {
    const {
      prefixCls: t,
      loading: n,
      existIcon: r,
      className: o,
      style: i
    } = e, a = !!n;
    return r ? X.createElement(Qg, {
      prefixCls: t,
      className: o,
      style: i
    }) : X.createElement(Wr, {
      visible: a,
      motionName: `${t}-loading-icon-motion`,
      removeOnLeave: !0,
      onAppearStart: ud,
      onAppearActive: dd,
      onEnterStart: ud,
      onEnterActive: dd,
      onLeaveStart: dd,
      onLeaveActive: ud
    }, (l, s) => {
      let {
        className: u,
        style: d
      } = l;
      return X.createElement(Qg, {
        prefixCls: t,
        className: o,
        style: Object.assign(Object.assign({}, i), d),
        ref: s,
        iconClassName: u
      })
    })
  },
  eR = J2,
  Yg = (e, t) => ({
    [`> span, > ${e}`]: {
      "&:not(:last-child)": {
        [`&, & > ${e}`]: {
          "&:not(:disabled)": {
            borderInlineEndColor: t
          }
        }
      },
      "&:not(:first-child)": {
        [`&, & > ${e}`]: {
          "&:not(:disabled)": {
            borderInlineStartColor: t
          }
        }
      }
    }
  }),
  tR = e => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: o,
      colorErrorHover: i
    } = e;
    return {
      [`${t}-group`]: [{
        position: "relative",
        display: "inline-flex",
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -r,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      }, Yg(`${t}-primary`, o), Yg(`${t}-danger`, i)]
    }
  },
  nR = tR,
  rR = e => {
    const {
      componentCls: t,
      iconCls: n,
      fontWeight: r
    } = e;
    return {
      [t]: {
        outline: "none",
        position: "relative",
        display: "inline-block",
        fontWeight: r,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        backgroundColor: "transparent",
        border: `${e.lineWidth}px ${e.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        lineHeight: e.lineHeight,
        color: e.colorText,
        "&:disabled > *": {
          pointerEvents: "none"
        },
        "> span": {
          display: "inline-block"
        },
        [`${t}-icon`]: {
          lineHeight: 0
        },
        [`> ${n} + span, > span + ${n}`]: {
          marginInlineStart: e.marginXS
        },
        [`&:not(${t}-icon-only) > ${t}-icon`]: {
          [`&${t}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: e.marginXS
          }
        },
        "> a": {
          color: "currentColor"
        },
        "&:not(:disabled)": Object.assign({}, iu(e)),
        [`&-icon-only${t}-compact-item`]: {
          flex: "none"
        },
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: e.lineWidth,
              height: `calc(100% + ${e.lineWidth*2}px)`,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        },
        "&-compact-vertical-item": {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: -e.lineWidth,
                insetInlineStart: -e.lineWidth,
                display: "inline-block",
                width: `calc(100% + ${e.lineWidth*2}px)`,
                height: e.lineWidth,
                backgroundColor: e.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    }
  },
  Dr = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: {
      "&:hover": t,
      "&:active": n
    }
  }),
  oR = e => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  }),
  iR = e => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.controlHeight / 2,
    paddingInlineEnd: e.controlHeight / 2
  }),
  aR = e => ({
    cursor: "not-allowed",
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    boxShadow: "none"
  }),
  ul = (e, t, n, r, o, i, a, l) => ({
    [`&${e}-background-ghost`]: Object.assign(Object.assign({
      color: n || void 0,
      backgroundColor: t,
      borderColor: r || void 0,
      boxShadow: "none"
    }, Dr(e, Object.assign({
      backgroundColor: t
    }, a), Object.assign({
      backgroundColor: t
    }, l))), {
      "&:disabled": {
        cursor: "not-allowed",
        color: o || void 0,
        borderColor: i || void 0
      }
    })
  }),
  kp = e => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, aR(e))
  }),
  Y1 = e => Object.assign({}, kp(e)),
  hc = e => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: e.colorTextDisabled
    }
  }),
  Z1 = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Y1(e)), {
    backgroundColor: e.defaultBg,
    borderColor: e.defaultBorderColor,
    color: e.defaultColor,
    boxShadow: e.defaultShadow
  }), Dr(e.componentCls, {
    color: e.colorPrimaryHover,
    borderColor: e.colorPrimaryHover
  }, {
    color: e.colorPrimaryActive,
    borderColor: e.colorPrimaryActive
  })), ul(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      color: e.colorError,
      borderColor: e.colorError
    }, Dr(e.componentCls, {
      color: e.colorErrorHover,
      borderColor: e.colorErrorBorderHover
    }, {
      color: e.colorErrorActive,
      borderColor: e.colorErrorActive
    })), ul(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), kp(e))
  }),
  lR = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Y1(e)), {
    color: e.primaryColor,
    backgroundColor: e.colorPrimary,
    boxShadow: e.primaryShadow
  }), Dr(e.componentCls, {
    color: e.colorTextLightSolid,
    backgroundColor: e.colorPrimaryHover
  }, {
    color: e.colorTextLightSolid,
    backgroundColor: e.colorPrimaryActive
  })), ul(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
    color: e.colorPrimaryHover,
    borderColor: e.colorPrimaryHover
  }, {
    color: e.colorPrimaryActive,
    borderColor: e.colorPrimaryActive
  })), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      backgroundColor: e.colorError,
      boxShadow: e.dangerShadow,
      color: e.dangerColor
    }, Dr(e.componentCls, {
      backgroundColor: e.colorErrorHover
    }, {
      backgroundColor: e.colorErrorActive
    })), ul(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
      color: e.colorErrorHover,
      borderColor: e.colorErrorHover
    }, {
      color: e.colorErrorActive,
      borderColor: e.colorErrorActive
    })), kp(e))
  }),
  sR = e => Object.assign(Object.assign({}, Z1(e)), {
    borderStyle: "dashed"
  }),
  cR = e => Object.assign(Object.assign(Object.assign({
    color: e.colorLink
  }, Dr(e.componentCls, {
    color: e.colorLinkHover,
    backgroundColor: e.linkHoverBg
  }, {
    color: e.colorLinkActive
  })), hc(e)), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: e.colorError
    }, Dr(e.componentCls, {
      color: e.colorErrorHover
    }, {
      color: e.colorErrorActive
    })), hc(e))
  }),
  uR = e => Object.assign(Object.assign(Object.assign({}, Dr(e.componentCls, {
    color: e.colorText,
    backgroundColor: e.textHoverBg
  }, {
    color: e.colorText,
    backgroundColor: e.colorBgTextActive
  })), hc(e)), {
    [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: e.colorError
    }, hc(e)), Dr(e.componentCls, {
      color: e.colorErrorHover,
      backgroundColor: e.colorErrorBg
    }, {
      color: e.colorErrorHover,
      backgroundColor: e.colorErrorBg
    }))
  }),
  dR = e => {
    const {
      componentCls: t
    } = e;
    return {
      [`${t}-default`]: Z1(e),
      [`${t}-primary`]: lR(e),
      [`${t}-dashed`]: sR(e),
      [`${t}-link`]: cR(e),
      [`${t}-text`]: uR(e),
      [`${t}-ghost`]: ul(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
    }
  },
  zp = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls: n,
      controlHeight: r,
      fontSize: o,
      lineHeight: i,
      lineWidth: a,
      borderRadius: l,
      buttonPaddingHorizontal: s,
      iconCls: u
    } = e, d = Math.max(0, (r - o * i) / 2 - a), f = `${n}-icon-only`;
    return [{
      [`${n}${t}`]: {
        fontSize: o,
        height: r,
        padding: `${d}px ${s}px`,
        borderRadius: l,
        [`&${f}`]: {
          width: r,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          [u]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    }, {
      [`${n}${n}-circle${t}`]: oR(e)
    }, {
      [`${n}${n}-round${t}`]: iR(e)
    }]
  },
  fR = e => zp(wt(e, {
    fontSize: e.contentFontSize
  })),
  vR = e => {
    const t = wt(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM
    });
    return zp(t, `${e.componentCls}-sm`)
  },
  pR = e => {
    const t = wt(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG
    });
    return zp(t, `${e.componentCls}-lg`)
  },
  mR = e => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        [`&${t}-block`]: {
          width: "100%"
        }
      }
    }
  },
  J1 = e => {
    const {
      paddingInline: t,
      onlyIconSize: n
    } = e;
    return wt(e, {
      buttonPaddingHorizontal: t,
      buttonIconOnlyFontSize: n
    })
  },
  eS = e => ({
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    contentFontSize: e.fontSize,
    contentFontSizeSM: e.fontSize,
    contentFontSizeLG: e.fontSizeLG
  }),
  gR = rn("Button", e => {
    const t = J1(e);
    return [rR(t), vR(t), fR(t), pR(t), mR(t), dR(t), nR(t)]
  }, eS);

function hR(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = n, a = i ? "> *" : "", l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map(s => `&:${s} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": Object.assign(Object.assign({
      [l]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  }
}

function yR(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  }
}

function tS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, hR(e, r, t)), yR(n, r, t))
  }
}

function bR(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  }
}

function SR(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  }
}

function CR(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, bR(e, t)), SR(e.componentCls, t))
  }
}
const xR = au(["Button", "compact"], e => {
  const t = J1(e);
  return [tS(t), CR(t)]
}, eS);
var wR = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};

function ER(e) {
  if (typeof e == "object" && e) {
    const t = e == null ? void 0 : e.delay;
    return {
      loading: !1,
      delay: !Number.isNaN(t) && typeof t == "number" ? t : 0
    }
  }
  return {
    loading: !!e,
    delay: 0
  }
}
const $R = (e, t) => {
    var n, r;
    const {
      loading: o = !1,
      prefixCls: i,
      type: a = "default",
      danger: l,
      shape: s = "default",
      size: u,
      styles: d,
      disabled: f,
      className: v,
      rootClassName: y,
      children: b,
      icon: h,
      ghost: C = !1,
      block: g = !1,
      htmlType: p = "button",
      classNames: m,
      style: S = {}
    } = e, E = wR(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
      getPrefixCls: w,
      autoInsertSpaceInButton: x,
      direction: R,
      button: P
    } = c.useContext(Le), O = w("btn", i), [_, N] = gR(O), I = c.useContext(Tp), A = f ?? I, j = c.useContext(X1), M = c.useMemo(() => ER(o), [o]), [$, T] = c.useState(M.loading), [k, L] = c.useState(!1), F = Cr(t, c.createRef()), V = c.Children.count(b) === 1 && !h && !cd(a);
    c.useEffect(() => {
      let ne = null;
      M.delay > 0 ? ne = setTimeout(() => {
        ne = null, T(!0)
      }, M.delay) : T(M.loading);

      function ie() {
        ne && (clearTimeout(ne), ne = null)
      }
      return ie
    }, [M]), c.useEffect(() => {
      if (!F || !F.current || x === !1) return;
      const ne = F.current.textContent;
      V && Yf(ne) ? k || L(!0) : k && L(!1)
    }, [F]);
    const K = ne => {
        const {
          onClick: ie
        } = e;
        if ($ || A) {
          ne.preventDefault();
          return
        }
        ie == null || ie(ne)
      },
      Q = x !== !1,
      {
        compactSize: W,
        compactItemClassnames: G
      } = W2(O, R),
      Z = {
        large: "lg",
        small: "sm",
        middle: void 0
      },
      fe = ta(ne => {
        var ie, be;
        return (be = (ie = u ?? W) !== null && ie !== void 0 ? ie : j) !== null && be !== void 0 ? be : ne
      }),
      le = fe && Z[fe] || "",
      oe = $ ? "loading" : h,
      Oe = Hr(E, ["navigate"]),
      Ce = U(O, N, {
        [`${O}-${s}`]: s !== "default" && s,
        [`${O}-${a}`]: a,
        [`${O}-${le}`]: le,
        [`${O}-icon-only`]: !b && b !== 0 && !!oe,
        [`${O}-background-ghost`]: C && !cd(a),
        [`${O}-loading`]: $,
        [`${O}-two-chinese-chars`]: k && Q && !$,
        [`${O}-block`]: g,
        [`${O}-dangerous`]: !!l,
        [`${O}-rtl`]: R === "rtl"
      }, G, v, y, P == null ? void 0 : P.className),
      Ue = Object.assign(Object.assign({}, P == null ? void 0 : P.style), S),
      xe = U(m == null ? void 0 : m.icon, (n = P == null ? void 0 : P.classNames) === null || n === void 0 ? void 0 : n.icon),
      pe = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), ((r = P == null ? void 0 : P.styles) === null || r === void 0 ? void 0 : r.icon) || {}),
      ye = h && !$ ? X.createElement(Q1, {
        prefixCls: O,
        className: xe,
        style: pe
      }, h) : X.createElement(eR, {
        existIcon: !!h,
        prefixCls: O,
        loading: !!$
      }),
      Y = b || b === 0 ? Y2(b, V && Q) : null;
    if (Oe.href !== void 0) return _(X.createElement("a", Object.assign({}, Oe, {
      className: U(Ce, {
        [`${O}-disabled`]: A
      }),
      style: Ue,
      onClick: K,
      ref: F
    }), ye, Y));
    let re = X.createElement("button", Object.assign({}, E, {
      type: p,
      className: Ce,
      style: Ue,
      onClick: K,
      disabled: A,
      ref: F
    }), ye, Y, G && X.createElement(xR, {
      key: "compact",
      prefixCls: O
    }));
    return cd(a) || (re = X.createElement(V1, {
      component: "Button",
      disabled: !!$
    }, re)), _(re)
  },
  Lp = c.forwardRef($R);
Lp.Group = q2;
Lp.__ANT_BUTTON = !0;
const Ap = Lp;

function Zg(e) {
  return !!(e && e.then)
}
const OR = e => {
    const {
      type: t,
      children: n,
      prefixCls: r,
      buttonProps: o,
      close: i,
      autoFocus: a,
      emitEvent: l,
      isSilent: s,
      quitOnNullishReturnValue: u,
      actionFn: d
    } = e, f = c.useRef(!1), v = c.useRef(null), [y, b] = ko(!1), h = function() {
      i == null || i.apply(void 0, arguments)
    };
    c.useEffect(() => {
      let p = null;
      return a && (p = setTimeout(() => {
        var m;
        (m = v.current) === null || m === void 0 || m.focus()
      })), () => {
        p && clearTimeout(p)
      }
    }, []);
    const C = p => {
        Zg(p) && (b(!0), p.then(function() {
          b(!1, !0), h.apply(void 0, arguments), f.current = !1
        }, m => {
          if (b(!1, !0), f.current = !1, !(s != null && s())) return Promise.reject(m)
        }))
      },
      g = p => {
        if (f.current) return;
        if (f.current = !0, !d) {
          h();
          return
        }
        let m;
        if (l) {
          if (m = d(p), u && !Zg(m)) {
            f.current = !1, h(p);
            return
          }
        } else if (d.length) m = d(i), f.current = !1;
        else if (m = d(), !m) {
          h();
          return
        }
        C(m)
      };
    return c.createElement(Ap, Object.assign({}, q1(t), {
      onClick: g,
      loading: y,
      prefixCls: r
    }, o, {
      ref: v
    }), n)
  },
  nS = OR,
  El = X.createContext({}),
  {
    Provider: rS
  } = El,
  PR = () => {
    const {
      autoFocusButton: e,
      cancelButtonProps: t,
      cancelTextLocale: n,
      isSilent: r,
      mergedOkCancel: o,
      rootPrefixCls: i,
      close: a,
      onCancel: l,
      onConfirm: s
    } = c.useContext(El);
    return o ? X.createElement(nS, {
      isSilent: r,
      actionFn: l,
      close: function() {
        a == null || a.apply(void 0, arguments), s == null || s(!1)
      },
      autoFocus: e === "cancel",
      buttonProps: t,
      prefixCls: `${i}-btn`
    }, n) : null
  },
  Jg = PR,
  RR = () => {
    const {
      autoFocusButton: e,
      close: t,
      isSilent: n,
      okButtonProps: r,
      rootPrefixCls: o,
      okTextLocale: i,
      okType: a,
      onConfirm: l,
      onOk: s
    } = c.useContext(El);
    return X.createElement(nS, {
      isSilent: n,
      type: a || "primary",
      actionFn: s,
      close: function() {
        t == null || t.apply(void 0, arguments), l == null || l(!0)
      },
      autoFocus: e === "ok",
      buttonProps: r,
      prefixCls: `${o}-btn`
    }, i)
  },
  eh = RR;
var oS = c.createContext(null),
  th = [];

function TR(e, t) {
  var n = c.useState(function() {
      if (!qt()) return null;
      var b = document.createElement("div");
      return b
    }),
    r = H(n, 1),
    o = r[0],
    i = c.useRef(!1),
    a = c.useContext(oS),
    l = c.useState(th),
    s = H(l, 2),
    u = s[0],
    d = s[1],
    f = a || (i.current ? void 0 : function(b) {
      d(function(h) {
        var C = [b].concat(ce(h));
        return C
      })
    });

  function v() {
    o.parentElement || document.body.appendChild(o), i.current = !0
  }

  function y() {
    var b;
    (b = o.parentElement) === null || b === void 0 || b.removeChild(o), i.current = !1
  }
  return gt(function() {
    return e ? a ? a(v) : v() : y(), y
  }, [e]), gt(function() {
    u.length && (u.forEach(function(b) {
      return b()
    }), d(th))
  }, [u]), [o, f]
}
var fd;

function IR(e) {
  if (typeof document > "u") return 0;
  if (e || fd === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var n = document.createElement("div"),
      r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    var o = t.offsetWidth;
    n.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), fd = o - i
  }
  return fd
}

function nh(e) {
  var t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? IR() : n
}

function NR(e) {
  if (typeof document > "u" || !e || !(e instanceof Element)) return {
    width: 0,
    height: 0
  };
  var t = getComputedStyle(e, "::-webkit-scrollbar"),
    n = t.width,
    r = t.height;
  return {
    width: nh(n),
    height: nh(r)
  }
}

function MR() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth
}
var _R = "rc-util-locker-".concat(Date.now()),
  rh = 0;

function kR(e) {
  var t = !!e,
    n = c.useState(function() {
      return rh += 1, "".concat(_R, "_").concat(rh)
    }),
    r = H(n, 1),
    o = r[0];
  gt(function() {
    if (t) {
      var i = NR(document.body).width,
        a = MR();
      Ki(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o)
    } else fc(o);
    return function() {
      fc(o)
    }
  }, [t, o])
}
var oh = !1;

function zR(e) {
  return typeof e == "boolean" && (oh = e), oh
}
var ih = function(t) {
    return t === !1 ? !1 : !qt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t
  },
  jp = c.forwardRef(function(e, t) {
    var n = e.open,
      r = e.autoLock,
      o = e.getContainer;
    e.debug;
    var i = e.autoDestroy,
      a = i === void 0 ? !0 : i,
      l = e.children,
      s = c.useState(n),
      u = H(s, 2),
      d = u[0],
      f = u[1],
      v = d || n;
    c.useEffect(function() {
      (a || n) && f(n)
    }, [n, a]);
    var y = c.useState(function() {
        return ih(o)
      }),
      b = H(y, 2),
      h = b[0],
      C = b[1];
    c.useEffect(function() {
      var _ = ih(o);
      C(_ ?? null)
    });
    var g = TR(v && !h),
      p = H(g, 2),
      m = p[0],
      S = p[1],
      E = h ?? m;
    kR(r && n && qt() && (E === m || E === document.body));
    var w = null;
    if (l && Wo(l) && t) {
      var x = l;
      w = x.ref
    }
    var R = hl(w, t);
    if (!v || !qt() || h === void 0) return null;
    var P = E === !1 || zR(),
      O = l;
    return t && (O = c.cloneElement(l, {
      ref: R
    })), c.createElement(oS.Provider, {
      value: S
    }, P ? O : Ko.createPortal(O, E))
  }),
  iS = c.createContext({});

function LR() {
  var e = D({}, $c);
  return e.useId
}
var ah = 0;

function aS(e) {
  var t = c.useState("ssr-id"),
    n = H(t, 2),
    r = n[0],
    o = n[1],
    i = LR(),
    a = i == null ? void 0 : i();
  return c.useEffect(function() {
    if (!i) {
      var l = ah;
      ah += 1, o("rc_unique_".concat(l))
    }
  }, []), e || a || r
}

function lh(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r
}

function sh(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")],
    r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r])
  }
  return n
}

function AR(e) {
  var t = e.getBoundingClientRect(),
    n = {
      left: t.left,
      top: t.top
    },
    r = e.ownerDocument,
    o = r.defaultView || r.parentWindow;
  return n.left += sh(o), n.top += sh(o, !0), n
}
const jR = c.memo(function(e) {
  var t = e.children;
  return t
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n
});
var ch = {
    width: 0,
    height: 0,
    overflow: "hidden",
    outline: "none"
  },
  lS = X.forwardRef(function(e, t) {
    var n = e.prefixCls,
      r = e.className,
      o = e.style,
      i = e.title,
      a = e.ariaId,
      l = e.footer,
      s = e.closable,
      u = e.closeIcon,
      d = e.onClose,
      f = e.children,
      v = e.bodyStyle,
      y = e.bodyProps,
      b = e.modalRender,
      h = e.onMouseDown,
      C = e.onMouseUp,
      g = e.holderRef,
      p = e.visible,
      m = e.forceRender,
      S = e.width,
      E = e.height,
      w = X.useContext(iS),
      x = w.panel,
      R = hl(g, x),
      P = c.useRef(),
      O = c.useRef();
    X.useImperativeHandle(t, function() {
      return {
        focus: function() {
          var $;
          ($ = P.current) === null || $ === void 0 || $.focus()
        },
        changeActive: function($) {
          var T = document,
            k = T.activeElement;
          $ && k === O.current ? P.current.focus() : !$ && k === P.current && O.current.focus()
        }
      }
    });
    var _ = {};
    S !== void 0 && (_.width = S), E !== void 0 && (_.height = E);
    var N;
    l && (N = X.createElement("div", {
      className: "".concat(n, "-footer")
    }, l));
    var I;
    i && (I = X.createElement("div", {
      className: "".concat(n, "-header")
    }, X.createElement("div", {
      className: "".concat(n, "-title"),
      id: a
    }, i)));
    var A;
    s && (A = X.createElement("button", {
      type: "button",
      onClick: d,
      "aria-label": "Close",
      className: "".concat(n, "-close")
    }, u || X.createElement("span", {
      className: "".concat(n, "-close-x")
    })));
    var j = X.createElement("div", {
      className: "".concat(n, "-content")
    }, A, I, X.createElement("div", de({
      className: "".concat(n, "-body"),
      style: v
    }, y), f), N);
    return X.createElement("div", {
      key: "dialog-element",
      role: "dialog",
      "aria-labelledby": i ? a : null,
      "aria-modal": "true",
      ref: R,
      style: D(D({}, o), _),
      className: U(n, r),
      onMouseDown: h,
      onMouseUp: C
    }, X.createElement("div", {
      tabIndex: 0,
      ref: P,
      style: ch,
      "aria-hidden": "true"
    }), X.createElement(jR, {
      shouldUpdate: p || m
    }, b ? b(j) : j), X.createElement("div", {
      tabIndex: 0,
      ref: O,
      style: ch,
      "aria-hidden": "true"
    }))
  }),
  sS = c.forwardRef(function(e, t) {
    var n = e.prefixCls,
      r = e.title,
      o = e.style,
      i = e.className,
      a = e.visible,
      l = e.forceRender,
      s = e.destroyOnClose,
      u = e.motionName,
      d = e.ariaId,
      f = e.onVisibleChanged,
      v = e.mousePosition,
      y = c.useRef(),
      b = c.useState(),
      h = H(b, 2),
      C = h[0],
      g = h[1],
      p = {};
    C && (p.transformOrigin = C);

    function m() {
      var S = AR(y.current);
      g(v ? "".concat(v.x - S.left, "px ").concat(v.y - S.top, "px") : "")
    }
    return c.createElement(Wr, {
      visible: a,
      onVisibleChanged: f,
      onAppearPrepare: m,
      onEnterPrepare: m,
      forceRender: l,
      motionName: u,
      removeOnLeave: s,
      ref: y
    }, function(S, E) {
      var w = S.className,
        x = S.style;
      return c.createElement(lS, de({}, e, {
        ref: t,
        title: r,
        ariaId: d,
        prefixCls: n,
        holderRef: E,
        style: D(D(D({}, x), o), p),
        className: U(i, w)
      }))
    })
  });
sS.displayName = "Content";

function FR(e) {
  var t = e.prefixCls,
    n = e.style,
    r = e.visible,
    o = e.maskProps,
    i = e.motionName;
  return c.createElement(Wr, {
    key: "mask",
    visible: r,
    motionName: i,
    leavedClassName: "".concat(t, "-mask-hidden")
  }, function(a, l) {
    var s = a.className,
      u = a.style;
    return c.createElement("div", de({
      ref: l,
      style: D(D({}, u), n),
      className: U("".concat(t, "-mask"), s)
    }, o))
  })
}

function DR(e) {
  var t = e.prefixCls,
    n = t === void 0 ? "rc-dialog" : t,
    r = e.zIndex,
    o = e.visible,
    i = o === void 0 ? !1 : o,
    a = e.keyboard,
    l = a === void 0 ? !0 : a,
    s = e.focusTriggerAfterClose,
    u = s === void 0 ? !0 : s,
    d = e.wrapStyle,
    f = e.wrapClassName,
    v = e.wrapProps,
    y = e.onClose,
    b = e.afterOpenChange,
    h = e.afterClose,
    C = e.transitionName,
    g = e.animation,
    p = e.closable,
    m = p === void 0 ? !0 : p,
    S = e.mask,
    E = S === void 0 ? !0 : S,
    w = e.maskTransitionName,
    x = e.maskAnimation,
    R = e.maskClosable,
    P = R === void 0 ? !0 : R,
    O = e.maskStyle,
    _ = e.maskProps,
    N = e.rootClassName,
    I = c.useRef(),
    A = c.useRef(),
    j = c.useRef(),
    M = c.useState(i),
    $ = H(M, 2),
    T = $[0],
    k = $[1],
    L = aS();

  function B() {
    If(A.current, document.activeElement) || (I.current = document.activeElement)
  }

  function F() {
    if (!If(A.current, document.activeElement)) {
      var oe;
      (oe = j.current) === null || oe === void 0 || oe.focus()
    }
  }

  function V(oe) {
    if (oe) F();
    else {
      if (k(!1), E && I.current && u) {
        try {
          I.current.focus({
            preventScroll: !0
          })
        } catch {}
        I.current = null
      }
      T && (h == null || h())
    }
    b == null || b(oe)
  }

  function K(oe) {
    y == null || y(oe)
  }
  var Q = c.useRef(!1),
    W = c.useRef(),
    G = function() {
      clearTimeout(W.current), Q.current = !0
    },
    Z = function() {
      W.current = setTimeout(function() {
        Q.current = !1
      })
    },
    fe = null;
  P && (fe = function(Oe) {
    Q.current ? Q.current = !1 : A.current === Oe.target && K(Oe)
  });

  function le(oe) {
    if (l && oe.keyCode === te.ESC) {
      oe.stopPropagation(), K(oe);
      return
    }
    i && oe.keyCode === te.TAB && j.current.changeActive(!oe.shiftKey)
  }
  return c.useEffect(function() {
    i && (k(!0), B())
  }, [i]), c.useEffect(function() {
    return function() {
      clearTimeout(W.current)
    }
  }, []), c.createElement("div", de({
    className: U("".concat(n, "-root"), N)
  }, p2(e, {
    data: !0
  })), c.createElement(FR, {
    prefixCls: n,
    visible: E && i,
    motionName: lh(n, w, x),
    style: D({
      zIndex: r
    }, O),
    maskProps: _
  }), c.createElement("div", de({
    tabIndex: -1,
    onKeyDown: le,
    className: U("".concat(n, "-wrap"), f),
    ref: A,
    onClick: fe,
    style: D(D({
      zIndex: r
    }, d), {}, {
      display: T ? null : "none"
    })
  }, v), c.createElement(sS, de({}, e, {
    onMouseDown: G,
    onMouseUp: Z,
    ref: j,
    closable: m,
    ariaId: L,
    prefixCls: n,
    visible: i && T,
    onClose: K,
    onVisibleChanged: V,
    motionName: lh(n, C, g)
  }))))
}
var cS = function(t) {
  var n = t.visible,
    r = t.getContainer,
    o = t.forceRender,
    i = t.destroyOnClose,
    a = i === void 0 ? !1 : i,
    l = t.afterClose,
    s = t.panelRef,
    u = c.useState(n),
    d = H(u, 2),
    f = d[0],
    v = d[1],
    y = c.useMemo(function() {
      return {
        panel: s
      }
    }, [s]);
  return c.useEffect(function() {
    n && v(!0)
  }, [n]), !o && a && !f ? null : c.createElement(iS.Provider, {
    value: y
  }, c.createElement(jp, {
    open: n || o || f,
    autoDestroy: !1,
    getContainer: r,
    autoLock: n || f
  }, c.createElement(DR, de({}, t, {
    destroyOnClose: a,
    afterClose: function() {
      l == null || l(), v(!1)
    }
  }))))
};
cS.displayName = "Dialog";

function BR(e, t, n) {
  return typeof e == "boolean" ? e : t === void 0 ? !!n : t !== !1 && t !== null
}

function uS(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : X.createElement(xl, null),
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (!BR(e, t, o)) return [!1, null];
  const a = typeof t == "boolean" || t === void 0 || t === null ? r : t;
  return [!0, n ? n(a) : a]
}
var dS = function(t) {
    if (qt() && window.document.documentElement) {
      var n = Array.isArray(t) ? t : [t],
        r = window.document.documentElement;
      return n.some(function(o) {
        return o in r.style
      })
    }
    return !1
  },
  HR = function(t, n) {
    if (!dS(t)) return !1;
    var r = document.createElement("div"),
      o = r.style[t];
    return r.style[t] = n, r.style[t] !== o
  };

function uh(e, t) {
  return !Array.isArray(e) && t !== void 0 ? HR(e, t) : dS(e)
}
const WR = () => qt() && window.document.documentElement;
var Oo = "RC_FORM_INTERNAL_HOOKS",
  nt = function() {
    Zt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.")
  },
  Xi = c.createContext({
    getFieldValue: nt,
    getFieldsValue: nt,
    getFieldError: nt,
    getFieldWarning: nt,
    getFieldsError: nt,
    isFieldsTouched: nt,
    isFieldTouched: nt,
    isFieldValidating: nt,
    isFieldsValidating: nt,
    resetFields: nt,
    setFields: nt,
    setFieldValue: nt,
    setFieldsValue: nt,
    validateFields: nt,
    submit: nt,
    getInternalHooks: function() {
      return nt(), {
        dispatch: nt,
        initEntityValue: nt,
        registerField: nt,
        useSubscribe: nt,
        setInitialValues: nt,
        destroyForm: nt,
        setCallbacks: nt,
        registerWatch: nt,
        getFields: nt,
        setValidateMessages: nt,
        setPreserve: nt,
        getInitialValue: nt
      }
    }
  }),
  yc = c.createContext(null);

function Zf(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}

function VR(e) {
  return e && !!e._init
}

function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, Po.apply(this, arguments)
}

function UR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, dl(e, t)
}

function Jf(e) {
  return Jf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n)
  }, Jf(e)
}

function dl(e, t) {
  return dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r
  }, dl(e, t)
}

function KR() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
  } catch {
    return !1
  }
}

function ks(e, t, n) {
  return KR() ? ks = Reflect.construct.bind() : ks = function(o, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(o, l),
      u = new s;
    return a && dl(u, a.prototype), u
  }, ks.apply(null, arguments)
}

function GR(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1
}

function ev(e) {
  var t = typeof Map == "function" ? new Map : void 0;
  return ev = function(r) {
    if (r === null || !GR(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, o)
    }

    function o() {
      return ks(r, arguments, Jf(this).constructor)
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), dl(o, r)
  }, ev(e)
}
var XR = /%[sdj%]/g,
  qR = function() {};
typeof process < "u" && process.env;

function tv(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n)
  }), t
}

function xn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = 0,
    i = n.length;
  if (typeof e == "function") return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(XR, function(l) {
      if (l === "%%") return "%";
      if (o >= i) return l;
      switch (l) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++])
          } catch {
            return "[Circular]"
          }
          break;
        default:
          return l
      }
    });
    return a
  }
  return e
}

function QR(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern"
}

function _t(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || QR(t) && typeof e == "string" && !e)
}

function YR(e, t, n) {
  var r = [],
    o = 0,
    i = e.length;

  function a(l) {
    r.push.apply(r, l || []), o++, o === i && n(r)
  }
  e.forEach(function(l) {
    t(l, a)
  })
}

function dh(e, t, n) {
  var r = 0,
    o = e.length;

  function i(a) {
    if (a && a.length) {
      n(a);
      return
    }
    var l = r;
    r = r + 1, l < o ? t(e[l], i) : n([])
  }
  i([])
}

function ZR(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || [])
  }), t
}
var fh = function(e) {
  UR(t, e);

  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o
  }
  return t
}(ev(Error));

function JR(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function(v, y) {
      var b = function(g) {
          return r(g), g.length ? y(new fh(g, tv(g))) : v(o)
        },
        h = ZR(e);
      dh(h, n, b)
    });
    return i.catch(function(v) {
      return v
    }), i
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    l = Object.keys(e),
    s = l.length,
    u = 0,
    d = [],
    f = new Promise(function(v, y) {
      var b = function(C) {
        if (d.push.apply(d, C), u++, u === s) return r(d), d.length ? y(new fh(d, tv(d))) : v(o)
      };
      l.length || (r(d), v(o)), l.forEach(function(h) {
        var C = e[h];
        a.indexOf(h) !== -1 ? dh(C, n, b) : YR(C, n, b)
      })
    });
  return f.catch(function(v) {
    return v
  }), f
}

function eT(e) {
  return !!(e && e.message !== void 0)
}

function tT(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n;
    n = n[t[r]]
  }
  return n
}

function vh(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = tT(t, e.fullFields) : r = t[n.field || e.fullField], eT(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    }
  }
}

function ph(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Po({}, e[n], r) : e[n] = r
      }
  }
  return e
}
var fS = function(t, n, r, o, i, a) {
    t.required && (!r.hasOwnProperty(t.field) || _t(n, a || t.type)) && o.push(xn(i.messages.required, t.fullField))
  },
  nT = function(t, n, r, o, i) {
    (/^\s+$/.test(n) || n === "") && o.push(xn(i.messages.whitespace, t.fullField))
  },
  us, rT = function() {
    if (us) return us;
    var e = "[a-fA-F\\d:]",
      t = function(S) {
        return S && S.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : ""
      },
      n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
      r = "[a-fA-F\\d]{1,4}",
      o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
      i = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"),
      a = new RegExp("^" + n + "$"),
      l = new RegExp("^" + o + "$"),
      s = function(S) {
        return S && S.exact ? i : new RegExp("(?:" + t(S) + n + t(S) + ")|(?:" + t(S) + o + t(S) + ")", "g")
      };
    s.v4 = function(m) {
      return m && m.exact ? a : new RegExp("" + t(m) + n + t(m), "g")
    }, s.v6 = function(m) {
      return m && m.exact ? l : new RegExp("" + t(m) + o + t(m), "g")
    };
    var u = "(?:(?:[a-z]+:)?//)",
      d = "(?:\\S+(?::\\S*)?@)?",
      f = s.v4().source,
      v = s.v6().source,
      y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
      b = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
      h = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
      C = "(?::\\d{2,5})?",
      g = '(?:[/?#][^\\s"]*)?',
      p = "(?:" + u + "|www\\.)" + d + "(?:localhost|" + f + "|" + v + "|" + y + b + h + ")" + C + g;
    return us = new RegExp("(?:^" + p + "$)", "i"), us
  },
  mh = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  },
  Pa = {
    integer: function(t) {
      return Pa.number(t) && parseInt(t, 10) === t
    },
    float: function(t) {
      return Pa.number(t) && !Pa.integer(t)
    },
    array: function(t) {
      return Array.isArray(t)
    },
    regexp: function(t) {
      if (t instanceof RegExp) return !0;
      try {
        return !!new RegExp(t)
      } catch {
        return !1
      }
    },
    date: function(t) {
      return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime())
    },
    number: function(t) {
      return isNaN(t) ? !1 : typeof t == "number"
    },
    object: function(t) {
      return typeof t == "object" && !Pa.array(t)
    },
    method: function(t) {
      return typeof t == "function"
    },
    email: function(t) {
      return typeof t == "string" && t.length <= 320 && !!t.match(mh.email)
    },
    url: function(t) {
      return typeof t == "string" && t.length <= 2048 && !!t.match(rT())
    },
    hex: function(t) {
      return typeof t == "string" && !!t.match(mh.hex)
    }
  },
  oT = function(t, n, r, o, i) {
    if (t.required && n === void 0) {
      fS(t, n, r, o, i);
      return
    }
    var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"],
      l = t.type;
    a.indexOf(l) > -1 ? Pa[l](n) || o.push(xn(i.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && o.push(xn(i.messages.types[l], t.fullField, t.type))
  },
  iT = function(t, n, r, o, i) {
    var a = typeof t.len == "number",
      l = typeof t.min == "number",
      s = typeof t.max == "number",
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      d = n,
      f = null,
      v = typeof n == "number",
      y = typeof n == "string",
      b = Array.isArray(n);
    if (v ? f = "number" : y ? f = "string" : b && (f = "array"), !f) return !1;
    b && (d = n.length), y && (d = n.replace(u, "_").length), a ? d !== t.len && o.push(xn(i.messages[f].len, t.fullField, t.len)) : l && !s && d < t.min ? o.push(xn(i.messages[f].min, t.fullField, t.min)) : s && !l && d > t.max ? o.push(xn(i.messages[f].max, t.fullField, t.max)) : l && s && (d < t.min || d > t.max) && o.push(xn(i.messages[f].range, t.fullField, t.min, t.max))
  },
  ri = "enum",
  aT = function(t, n, r, o, i) {
    t[ri] = Array.isArray(t[ri]) ? t[ri] : [], t[ri].indexOf(n) === -1 && o.push(xn(i.messages[ri], t.fullField, t[ri].join(", ")))
  },
  lT = function(t, n, r, o, i) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp) t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(xn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
      else if (typeof t.pattern == "string") {
        var a = new RegExp(t.pattern);
        a.test(n) || o.push(xn(i.messages.pattern.mismatch, t.fullField, n, t.pattern))
      }
    }
  },
  Me = {
    required: fS,
    whitespace: nT,
    type: oT,
    range: iT,
    enum: aT,
    pattern: lT
  },
  sT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n, "string") && !t.required) return r();
      Me.required(t, n, o, a, i, "string"), _t(n, "string") || (Me.type(t, n, o, a, i), Me.range(t, n, o, a, i), Me.pattern(t, n, o, a, i), t.whitespace === !0 && Me.whitespace(t, n, o, a, i))
    }
    r(a)
  },
  cT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), n !== void 0 && Me.type(t, n, o, a, i)
    }
    r(a)
  },
  uT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (n === "" && (n = void 0), _t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), n !== void 0 && (Me.type(t, n, o, a, i), Me.range(t, n, o, a, i))
    }
    r(a)
  },
  dT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), n !== void 0 && Me.type(t, n, o, a, i)
    }
    r(a)
  },
  fT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), _t(n) || Me.type(t, n, o, a, i)
    }
    r(a)
  },
  vT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), n !== void 0 && (Me.type(t, n, o, a, i), Me.range(t, n, o, a, i))
    }
    r(a)
  },
  pT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), n !== void 0 && (Me.type(t, n, o, a, i), Me.range(t, n, o, a, i))
    }
    r(a)
  },
  mT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (n == null && !t.required) return r();
      Me.required(t, n, o, a, i, "array"), n != null && (Me.type(t, n, o, a, i), Me.range(t, n, o, a, i))
    }
    r(a)
  },
  gT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), n !== void 0 && Me.type(t, n, o, a, i)
    }
    r(a)
  },
  hT = "enum",
  yT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i), n !== void 0 && Me[hT](t, n, o, a, i)
    }
    r(a)
  },
  bT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n, "string") && !t.required) return r();
      Me.required(t, n, o, a, i), _t(n, "string") || Me.pattern(t, n, o, a, i)
    }
    r(a)
  },
  ST = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n, "date") && !t.required) return r();
      if (Me.required(t, n, o, a, i), !_t(n, "date")) {
        var s;
        n instanceof Date ? s = n : s = new Date(n), Me.type(t, s, o, a, i), s && Me.range(t, s.getTime(), o, a, i)
      }
    }
    r(a)
  },
  CT = function(t, n, r, o, i) {
    var a = [],
      l = Array.isArray(n) ? "array" : typeof n;
    Me.required(t, n, o, a, i, l), r(a)
  },
  vd = function(t, n, r, o, i) {
    var a = t.type,
      l = [],
      s = t.required || !t.required && o.hasOwnProperty(t.field);
    if (s) {
      if (_t(n, a) && !t.required) return r();
      Me.required(t, n, o, l, i, a), _t(n, a) || Me.type(t, n, o, l, i)
    }
    r(l)
  },
  xT = function(t, n, r, o, i) {
    var a = [],
      l = t.required || !t.required && o.hasOwnProperty(t.field);
    if (l) {
      if (_t(n) && !t.required) return r();
      Me.required(t, n, o, a, i)
    }
    r(a)
  },
  Ba = {
    string: sT,
    method: cT,
    number: uT,
    boolean: dT,
    regexp: fT,
    integer: vT,
    float: pT,
    array: mT,
    object: gT,
    enum: yT,
    pattern: bT,
    date: ST,
    url: vd,
    hex: vd,
    email: vd,
    required: CT,
    any: xT
  };

function nv() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t
    }
  }
}
var rv = nv(),
  $l = function() {
    function e(n) {
      this.rules = null, this._messages = rv, this.define(n)
    }
    var t = e.prototype;
    return t.define = function(r) {
      var o = this;
      if (!r) throw new Error("Cannot configure a schema with no rules");
      if (typeof r != "object" || Array.isArray(r)) throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(i) {
        var a = r[i];
        o.rules[i] = Array.isArray(a) ? a : [a]
      })
    }, t.messages = function(r) {
      return r && (this._messages = ph(nv(), r)), this._messages
    }, t.validate = function(r, o, i) {
      var a = this;
      o === void 0 && (o = {}), i === void 0 && (i = function() {});
      var l = r,
        s = o,
        u = i;
      if (typeof s == "function" && (u = s, s = {}), !this.rules || Object.keys(this.rules).length === 0) return u && u(null, l), Promise.resolve(l);

      function d(h) {
        var C = [],
          g = {};

        function p(S) {
          if (Array.isArray(S)) {
            var E;
            C = (E = C).concat.apply(E, S)
          } else C.push(S)
        }
        for (var m = 0; m < h.length; m++) p(h[m]);
        C.length ? (g = tv(C), u(C, g)) : u(null, l)
      }
      if (s.messages) {
        var f = this.messages();
        f === rv && (f = nv()), ph(f, s.messages), s.messages = f
      } else s.messages = this.messages();
      var v = {},
        y = s.keys || Object.keys(this.rules);
      y.forEach(function(h) {
        var C = a.rules[h],
          g = l[h];
        C.forEach(function(p) {
          var m = p;
          typeof m.transform == "function" && (l === r && (l = Po({}, l)), g = l[h] = m.transform(g)), typeof m == "function" ? m = {
            validator: m
          } : m = Po({}, m), m.validator = a.getValidationMethod(m), m.validator && (m.field = h, m.fullField = m.fullField || h, m.type = a.getType(m), v[h] = v[h] || [], v[h].push({
            rule: m,
            value: g,
            source: l,
            field: h
          }))
        })
      });
      var b = {};
      return JR(v, s, function(h, C) {
        var g = h.rule,
          p = (g.type === "object" || g.type === "array") && (typeof g.fields == "object" || typeof g.defaultField == "object");
        p = p && (g.required || !g.required && h.value), g.field = h.field;

        function m(w, x) {
          return Po({}, x, {
            fullField: g.fullField + "." + w,
            fullFields: g.fullFields ? [].concat(g.fullFields, [w]) : [w]
          })
        }

        function S(w) {
          w === void 0 && (w = []);
          var x = Array.isArray(w) ? w : [w];
          !s.suppressWarning && x.length && e.warning("async-validator:", x), x.length && g.message !== void 0 && (x = [].concat(g.message));
          var R = x.map(vh(g, l));
          if (s.first && R.length) return b[g.field] = 1, C(R);
          if (!p) C(R);
          else {
            if (g.required && !h.value) return g.message !== void 0 ? R = [].concat(g.message).map(vh(g, l)) : s.error && (R = [s.error(g, xn(s.messages.required, g.field))]), C(R);
            var P = {};
            g.defaultField && Object.keys(h.value).map(function(N) {
              P[N] = g.defaultField
            }), P = Po({}, P, h.rule.fields);
            var O = {};
            Object.keys(P).forEach(function(N) {
              var I = P[N],
                A = Array.isArray(I) ? I : [I];
              O[N] = A.map(m.bind(null, N))
            });
            var _ = new e(O);
            _.messages(s.messages), h.rule.options && (h.rule.options.messages = s.messages, h.rule.options.error = s.error), _.validate(h.value, h.rule.options || s, function(N) {
              var I = [];
              R && R.length && I.push.apply(I, R), N && N.length && I.push.apply(I, N), C(I.length ? I : null)
            })
          }
        }
        var E;
        if (g.asyncValidator) E = g.asyncValidator(g, h.value, S, h.source, s);
        else if (g.validator) {
          try {
            E = g.validator(g, h.value, S, h.source, s)
          } catch (w) {
            console.error == null || console.error(w), s.suppressValidatorError || setTimeout(function() {
              throw w
            }, 0), S(w.message)
          }
          E === !0 ? S() : E === !1 ? S(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || (g.fullField || g.field) + " fails") : E instanceof Array ? S(E) : E instanceof Error && S(E.message)
        }
        E && E.then && E.then(function() {
          return S()
        }, function(w) {
          return S(w)
        })
      }, function(h) {
        d(h)
      }, l)
    }, t.getType = function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Ba.hasOwnProperty(r.type)) throw new Error(xn("Unknown rule type %s", r.type));
      return r.type || "string"
    }, t.getValidationMethod = function(r) {
      if (typeof r.validator == "function") return r.validator;
      var o = Object.keys(r),
        i = o.indexOf("message");
      return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? Ba.required : Ba[this.getType(r)] || void 0
    }, e
  }();
$l.register = function(t, n) {
  if (typeof n != "function") throw new Error("Cannot register a validator by type, validator is not a function");
  Ba[t] = n
};
$l.warning = qR;
$l.messages = rv;
$l.validators = Ba;
var gn = "'${name}' is not a valid ${type}",
  vS = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date"
    },
    types: {
      string: gn,
      method: gn,
      array: gn,
      object: gn,
      number: gn,
      date: gn,
      boolean: gn,
      integer: gn,
      float: gn,
      regexp: gn,
      email: gn,
      url: gn,
      hex: gn
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: {
      mismatch: "'${name}' does not match pattern ${pattern}"
    }
  },
  gh = $l;

function wT(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r]
  })
}
var hh = "CODE_LOGIC_ERROR";

function ov(e, t, n, r, o) {
  return iv.apply(this, arguments)
}

function iv() {
  return iv = qo(en().mark(function e(t, n, r, o, i) {
    var a, l, s, u, d, f, v, y, b;
    return en().wrap(function(C) {
      for (;;) switch (C.prev = C.next) {
        case 0:
          return a = D({}, r), delete a.ruleIndex, gh.warning = function() {}, a.validator && (l = a.validator, a.validator = function() {
            try {
              return l.apply(void 0, arguments)
            } catch (g) {
              return console.error(g), Promise.reject(hh)
            }
          }), s = null, a && a.type === "array" && a.defaultField && (s = a.defaultField, delete a.defaultField), u = new gh(z({}, t, [a])), d = Ri(vS, o.validateMessages), u.messages(d), f = [], C.prev = 10, C.next = 13, Promise.resolve(u.validate(z({}, t, n), D({}, o)));
        case 13:
          C.next = 18;
          break;
        case 15:
          C.prev = 15, C.t0 = C.catch(10), C.t0.errors && (f = C.t0.errors.map(function(g, p) {
            var m = g.message,
              S = m === hh ? d.default : m;
            return c.isValidElement(S) ? c.cloneElement(S, {
              key: "error_".concat(p)
            }) : S
          }));
        case 18:
          if (!(!f.length && s)) {
            C.next = 23;
            break
          }
          return C.next = 21, Promise.all(n.map(function(g, p) {
            return ov("".concat(t, ".").concat(p), g, s, o, i)
          }));
        case 21:
          return v = C.sent, C.abrupt("return", v.reduce(function(g, p) {
            return [].concat(ce(g), ce(p))
          }, []));
        case 23:
          return y = D(D({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, i), b = f.map(function(g) {
            return typeof g == "string" ? wT(g, y) : g
          }), C.abrupt("return", b);
        case 26:
        case "end":
          return C.stop()
      }
    }, e, null, [
      [10, 15]
    ])
  })), iv.apply(this, arguments)
}

function ET(e, t, n, r, o, i) {
  var a = e.join("."),
    l = n.map(function(d, f) {
      var v = d.validator,
        y = D(D({}, d), {}, {
          ruleIndex: f
        });
      return v && (y.validator = function(b, h, C) {
        var g = !1,
          p = function() {
            for (var E = arguments.length, w = new Array(E), x = 0; x < E; x++) w[x] = arguments[x];
            Promise.resolve().then(function() {
              Zt(!g, "Your validator function has already return a promise. `callback` will be ignored."), g || C.apply(void 0, w)
            })
          },
          m = v(b, h, p);
        g = m && typeof m.then == "function" && typeof m.catch == "function", Zt(g, "`callback` is deprecated. Please return a promise instead."), g && m.then(function() {
          C()
        }).catch(function(S) {
          C(S || " ")
        })
      }), y
    }).sort(function(d, f) {
      var v = d.warningOnly,
        y = d.ruleIndex,
        b = f.warningOnly,
        h = f.ruleIndex;
      return !!v == !!b ? y - h : v ? 1 : -1
    }),
    s;
  if (o === !0) s = new Promise(function() {
    var d = qo(en().mark(function f(v, y) {
      var b, h, C;
      return en().wrap(function(p) {
        for (;;) switch (p.prev = p.next) {
          case 0:
            b = 0;
          case 1:
            if (!(b < l.length)) {
              p.next = 12;
              break
            }
            return h = l[b], p.next = 5, ov(a, t, h, r, i);
          case 5:
            if (C = p.sent, !C.length) {
              p.next = 9;
              break
            }
            return y([{
              errors: C,
              rule: h
            }]), p.abrupt("return");
          case 9:
            b += 1, p.next = 1;
            break;
          case 12:
            v([]);
          case 13:
          case "end":
            return p.stop()
        }
      }, f)
    }));
    return function(f, v) {
      return d.apply(this, arguments)
    }
  }());
  else {
    var u = l.map(function(d) {
      return ov(a, t, d, r, i).then(function(f) {
        return {
          errors: f,
          rule: d
        }
      })
    });
    s = (o ? OT(u) : $T(u)).then(function(d) {
      return Promise.reject(d)
    })
  }
  return s.catch(function(d) {
    return d
  }), s
}

function $T(e) {
  return av.apply(this, arguments)
}

function av() {
  return av = qo(en().mark(function e(t) {
    return en().wrap(function(r) {
      for (;;) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var i, a = (i = []).concat.apply(i, ce(o));
            return a
          }));
        case 1:
        case "end":
          return r.stop()
      }
    }, e)
  })), av.apply(this, arguments)
}

function OT(e) {
  return lv.apply(this, arguments)
}

function lv() {
  return lv = qo(en().mark(function e(t) {
    var n;
    return en().wrap(function(o) {
      for (;;) switch (o.prev = o.next) {
        case 0:
          return n = 0, o.abrupt("return", new Promise(function(i) {
            t.forEach(function(a) {
              a.then(function(l) {
                l.errors.length && i([l]), n += 1, n === t.length && i([])
              })
            })
          }));
        case 2:
        case "end":
          return o.stop()
      }
    }, e)
  })), lv.apply(this, arguments)
}

function $t(e) {
  return Zf(e)
}

function yh(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = Jn(e, r);
    n = Qn(n, r, o)
  }), n
}

function Ha(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return pS(t, r, n)
  })
}

function pS(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r
  })
}

function PT(e, t) {
  if (e === t) return !0;
  if (!e && t || e && !t || !e || !t || ze(e) !== "object" || ze(t) !== "object") return !1;
  var n = Object.keys(e),
    r = Object.keys(t),
    o = new Set([].concat(n, r));
  return ce(o).every(function(i) {
    var a = e[i],
      l = t[i];
    return typeof a == "function" && typeof l == "function" ? !0 : a === l
  })
}

function RT(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ze(t.target) === "object" && e in t.target ? t.target[e] : t
}

function bh(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e;
  var o = e[t],
    i = t - n;
  return i > 0 ? [].concat(ce(e.slice(0, n)), [o], ce(e.slice(n, t)), ce(e.slice(t + 1, r))) : i < 0 ? [].concat(ce(e.slice(0, t)), ce(e.slice(t + 1, n + 1)), [o], ce(e.slice(n + 1, r))) : e
}
var TT = ["name"],
  kn = [];

function Sh(e, t, n, r, o, i) {
  return typeof e == "function" ? e(t, n, "source" in i ? {
    source: i.source
  } : {}) : r !== o
}
var Fp = function(e) {
  ml(n, e);
  var t = gl(n);

  function n(r) {
    var o;
    if (lr(this, n), o = t.call(this, r), z(We(o), "state", {
        resetCount: 0
      }), z(We(o), "cancelRegisterFunc", null), z(We(o), "mounted", !1), z(We(o), "touched", !1), z(We(o), "dirty", !1), z(We(o), "validatePromise", void 0), z(We(o), "prevValidating", void 0), z(We(o), "errors", kn), z(We(o), "warnings", kn), z(We(o), "cancelRegister", function() {
        var s = o.props,
          u = s.preserve,
          d = s.isListField,
          f = s.name;
        o.cancelRegisterFunc && o.cancelRegisterFunc(d, u, $t(f)), o.cancelRegisterFunc = null
      }), z(We(o), "getNamePath", function() {
        var s = o.props,
          u = s.name,
          d = s.fieldContext,
          f = d.prefixName,
          v = f === void 0 ? [] : f;
        return u !== void 0 ? [].concat(ce(v), ce(u)) : []
      }), z(We(o), "getRules", function() {
        var s = o.props,
          u = s.rules,
          d = u === void 0 ? [] : u,
          f = s.fieldContext;
        return d.map(function(v) {
          return typeof v == "function" ? v(f) : v
        })
      }), z(We(o), "refresh", function() {
        o.mounted && o.setState(function(s) {
          var u = s.resetCount;
          return {
            resetCount: u + 1
          }
        })
      }), z(We(o), "metaCache", null), z(We(o), "triggerMetaEvent", function(s) {
        var u = o.props.onMetaChange;
        if (u) {
          var d = D(D({}, o.getMeta()), {}, {
            destroy: s
          });
          Jc(o.metaCache, d) || u(d), o.metaCache = d
        } else o.metaCache = null
      }), z(We(o), "onStoreChange", function(s, u, d) {
        var f = o.props,
          v = f.shouldUpdate,
          y = f.dependencies,
          b = y === void 0 ? [] : y,
          h = f.onReset,
          C = d.store,
          g = o.getNamePath(),
          p = o.getValue(s),
          m = o.getValue(C),
          S = u && Ha(u, g);
        switch (d.type === "valueUpdate" && d.source === "external" && p !== m && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = kn, o.warnings = kn, o.triggerMetaEvent()), d.type) {
          case "reset":
            if (!u || S) {
              o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = kn, o.warnings = kn, o.triggerMetaEvent(), h == null || h(), o.refresh();
              return
            }
            break;
          case "remove": {
            if (v) {
              o.reRender();
              return
            }
            break
          }
          case "setField": {
            if (S) {
              var E = d.data;
              "touched" in E && (o.touched = E.touched), "validating" in E && !("originRCField" in E) && (o.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (o.errors = E.errors || kn), "warnings" in E && (o.warnings = E.warnings || kn), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
              return
            }
            if (v && !g.length && Sh(v, s, C, p, m, d)) {
              o.reRender();
              return
            }
            break
          }
          case "dependenciesUpdate": {
            var w = b.map($t);
            if (w.some(function(x) {
                return Ha(d.relatedFields, x)
              })) {
              o.reRender();
              return
            }
            break
          }
          default:
            if (S || (!b.length || g.length || v) && Sh(v, s, C, p, m, d)) {
              o.reRender();
              return
            }
            break
        }
        v === !0 && o.reRender()
      }), z(We(o), "validateRules", function(s) {
        var u = o.getNamePath(),
          d = o.getValue(),
          f = s || {},
          v = f.triggerName,
          y = f.validateOnly,
          b = y === void 0 ? !1 : y,
          h = Promise.resolve().then(qo(en().mark(function C() {
            var g, p, m, S, E, w, x;
            return en().wrap(function(P) {
              for (;;) switch (P.prev = P.next) {
                case 0:
                  if (o.mounted) {
                    P.next = 2;
                    break
                  }
                  return P.abrupt("return", []);
                case 2:
                  if (g = o.props, p = g.validateFirst, m = p === void 0 ? !1 : p, S = g.messageVariables, E = g.validateDebounce, w = o.getRules(), v && (w = w.filter(function(O) {
                      return O
                    }).filter(function(O) {
                      var _ = O.validateTrigger;
                      if (!_) return !0;
                      var N = Zf(_);
                      return N.includes(v)
                    })), !(E && v)) {
                    P.next = 10;
                    break
                  }
                  return P.next = 8, new Promise(function(O) {
                    setTimeout(O, E)
                  });
                case 8:
                  if (o.validatePromise === h) {
                    P.next = 10;
                    break
                  }
                  return P.abrupt("return", []);
                case 10:
                  return x = ET(u, d, w, s, m, S), x.catch(function(O) {
                    return O
                  }).then(function() {
                    var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kn;
                    if (o.validatePromise === h) {
                      var _;
                      o.validatePromise = null;
                      var N = [],
                        I = [];
                      (_ = O.forEach) === null || _ === void 0 || _.call(O, function(A) {
                        var j = A.rule.warningOnly,
                          M = A.errors,
                          $ = M === void 0 ? kn : M;
                        j ? I.push.apply(I, ce($)) : N.push.apply(N, ce($))
                      }), o.errors = N, o.warnings = I, o.triggerMetaEvent(), o.reRender()
                    }
                  }), P.abrupt("return", x);
                case 13:
                case "end":
                  return P.stop()
              }
            }, C)
          })));
        return b || (o.validatePromise = h, o.dirty = !0, o.errors = kn, o.warnings = kn, o.triggerMetaEvent(), o.reRender()), h
      }), z(We(o), "isFieldValidating", function() {
        return !!o.validatePromise
      }), z(We(o), "isFieldTouched", function() {
        return o.touched
      }), z(We(o), "isFieldDirty", function() {
        if (o.dirty || o.props.initialValue !== void 0) return !0;
        var s = o.props.fieldContext,
          u = s.getInternalHooks(Oo),
          d = u.getInitialValue;
        return d(o.getNamePath()) !== void 0
      }), z(We(o), "getErrors", function() {
        return o.errors
      }), z(We(o), "getWarnings", function() {
        return o.warnings
      }), z(We(o), "isListField", function() {
        return o.props.isListField
      }), z(We(o), "isList", function() {
        return o.props.isList
      }), z(We(o), "isPreserve", function() {
        return o.props.preserve
      }), z(We(o), "getMeta", function() {
        o.prevValidating = o.isFieldValidating();
        var s = {
          touched: o.isFieldTouched(),
          validating: o.prevValidating,
          errors: o.errors,
          warnings: o.warnings,
          name: o.getNamePath(),
          validated: o.validatePromise === null
        };
        return s
      }), z(We(o), "getOnlyChild", function(s) {
        if (typeof s == "function") {
          var u = o.getMeta();
          return D(D({}, o.getOnlyChild(s(o.getControlled(), u, o.props.fieldContext))), {}, {
            isFunction: !0
          })
        }
        var d = or(s);
        return d.length !== 1 || !c.isValidElement(d[0]) ? {
          child: d,
          isFunction: !1
        } : {
          child: d[0],
          isFunction: !1
        }
      }), z(We(o), "getValue", function(s) {
        var u = o.props.fieldContext.getFieldsValue,
          d = o.getNamePath();
        return Jn(s || u(!0), d)
      }), z(We(o), "getControlled", function() {
        var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          u = o.props,
          d = u.trigger,
          f = u.validateTrigger,
          v = u.getValueFromEvent,
          y = u.normalize,
          b = u.valuePropName,
          h = u.getValueProps,
          C = u.fieldContext,
          g = f !== void 0 ? f : C.validateTrigger,
          p = o.getNamePath(),
          m = C.getInternalHooks,
          S = C.getFieldsValue,
          E = m(Oo),
          w = E.dispatch,
          x = o.getValue(),
          R = h || function(N) {
            return z({}, b, N)
          },
          P = s[d],
          O = D(D({}, s), R(x));
        O[d] = function() {
          o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
          for (var N, I = arguments.length, A = new Array(I), j = 0; j < I; j++) A[j] = arguments[j];
          v ? N = v.apply(void 0, A) : N = RT.apply(void 0, [b].concat(A)), y && (N = y(N, x, S(!0))), w({
            type: "updateValue",
            namePath: p,
            value: N
          }), P && P.apply(void 0, A)
        };
        var _ = Zf(g || []);
        return _.forEach(function(N) {
          var I = O[N];
          O[N] = function() {
            I && I.apply(void 0, arguments);
            var A = o.props.rules;
            A && A.length && w({
              type: "validateField",
              namePath: p,
              triggerName: N
            })
          }
        }), O
      }), r.fieldContext) {
      var i = r.fieldContext.getInternalHooks,
        a = i(Oo),
        l = a.initEntityValue;
      l(We(o))
    }
    return o
  }
  return sr(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props,
        i = o.shouldUpdate,
        a = o.fieldContext;
      if (this.mounted = !0, a) {
        var l = a.getInternalHooks,
          s = l(Oo),
          u = s.registerField;
        this.cancelRegisterFunc = u(this)
      }
      i === !0 && this.reRender()
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate()
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount,
        i = this.props.children,
        a = this.getOnlyChild(i),
        l = a.child,
        s = a.isFunction,
        u;
      return s ? u = l : c.isValidElement(l) ? u = c.cloneElement(l, this.getControlled(l.props)) : (Zt(!l, "`children` of Field is not validate ReactElement."), u = l), c.createElement(c.Fragment, {
        key: o
      }, u)
    }
  }]), n
}(c.Component);
z(Fp, "contextType", Xi);
z(Fp, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});

function mS(e) {
  var t = e.name,
    n = Fe(e, TT),
    r = c.useContext(Xi),
    o = c.useContext(yc),
    i = t !== void 0 ? $t(t) : void 0,
    a = "keep";
  return n.isListField || (a = "_".concat((i || []).join("_"))), c.createElement(Fp, de({
    key: a,
    name: i,
    isListField: !!o
  }, n, {
    fieldContext: r
  }))
}

function IT(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    o = e.rules,
    i = e.validateTrigger,
    a = e.isListField,
    l = c.useContext(Xi),
    s = c.useContext(yc),
    u = c.useRef({
      keys: [],
      id: 0
    }),
    d = u.current,
    f = c.useMemo(function() {
      var h = $t(l.prefixName) || [];
      return [].concat(ce(h), ce($t(t)))
    }, [l.prefixName, t]),
    v = c.useMemo(function() {
      return D(D({}, l), {}, {
        prefixName: f
      })
    }, [l, f]),
    y = c.useMemo(function() {
      return {
        getKey: function(C) {
          var g = f.length,
            p = C[g];
          return [d.keys[p], C.slice(g + 1)]
        }
      }
    }, [f]);
  if (typeof r != "function") return Zt(!1, "Form.List only accepts function as children."), null;
  var b = function(C, g, p) {
    var m = p.source;
    return m === "internal" ? !1 : C !== g
  };
  return c.createElement(yc.Provider, {
    value: y
  }, c.createElement(Xi.Provider, {
    value: v
  }, c.createElement(mS, {
    name: [],
    shouldUpdate: b,
    rules: o,
    validateTrigger: i,
    initialValue: n,
    isList: !0,
    isListField: a ?? !!s
  }, function(h, C) {
    var g = h.value,
      p = g === void 0 ? [] : g,
      m = h.onChange,
      S = l.getFieldValue,
      E = function() {
        var P = S(f || []);
        return P || []
      },
      w = {
        add: function(P, O) {
          var _ = E();
          O >= 0 && O <= _.length ? (d.keys = [].concat(ce(d.keys.slice(0, O)), [d.id], ce(d.keys.slice(O))), m([].concat(ce(_.slice(0, O)), [P], ce(_.slice(O))))) : (d.keys = [].concat(ce(d.keys), [d.id]), m([].concat(ce(_), [P]))), d.id += 1
        },
        remove: function(P) {
          var O = E(),
            _ = new Set(Array.isArray(P) ? P : [P]);
          _.size <= 0 || (d.keys = d.keys.filter(function(N, I) {
            return !_.has(I)
          }), m(O.filter(function(N, I) {
            return !_.has(I)
          })))
        },
        move: function(P, O) {
          if (P !== O) {
            var _ = E();
            P < 0 || P >= _.length || O < 0 || O >= _.length || (d.keys = bh(d.keys, P, O), m(bh(_, P, O)))
          }
        }
      },
      x = p || [];
    return Array.isArray(x) || (x = []), r(x.map(function(R, P) {
      var O = d.keys[P];
      return O === void 0 && (d.keys[P] = d.id, O = d.keys[P], d.id += 1), {
        name: P,
        key: O,
        isListField: !0
      }
    }), w, C)
  })))
}

function NT(e) {
  var t = !1,
    n = e.length,
    r = [];
  return e.length ? new Promise(function(o, i) {
    e.forEach(function(a, l) {
      a.catch(function(s) {
        return t = !0, s
      }).then(function(s) {
        n -= 1, r[l] = s, !(n > 0) && (t && i(r), o(r))
      })
    })
  }) : Promise.resolve([])
}
var gS = "__@field_split__";

function pd(e) {
  return e.map(function(t) {
    return "".concat(ze(t), ":").concat(t)
  }).join(gS)
}
var oi = function() {
    function e() {
      lr(this, e), z(this, "kvs", new Map)
    }
    return sr(e, [{
      key: "set",
      value: function(n, r) {
        this.kvs.set(pd(n), r)
      }
    }, {
      key: "get",
      value: function(n) {
        return this.kvs.get(pd(n))
      }
    }, {
      key: "update",
      value: function(n, r) {
        var o = this.get(n),
          i = r(o);
        i ? this.set(n, i) : this.delete(n)
      }
    }, {
      key: "delete",
      value: function(n) {
        this.kvs.delete(pd(n))
      }
    }, {
      key: "map",
      value: function(n) {
        return ce(this.kvs.entries()).map(function(r) {
          var o = H(r, 2),
            i = o[0],
            a = o[1],
            l = i.split(gS);
          return n({
            key: l.map(function(s) {
              var u = s.match(/^([^:]*):(.*)$/),
                d = H(u, 3),
                f = d[1],
                v = d[2];
              return f === "number" ? Number(v) : v
            }),
            value: a
          })
        })
      }
    }, {
      key: "toJSON",
      value: function() {
        var n = {};
        return this.map(function(r) {
          var o = r.key,
            i = r.value;
          return n[o.join(".")] = i, null
        }), n
      }
    }]), e
  }(),
  MT = ["name"],
  _T = sr(function e(t) {
    var n = this;
    lr(this, e), z(this, "formHooked", !1), z(this, "forceRootUpdate", void 0), z(this, "subscribable", !0), z(this, "store", {}), z(this, "fieldEntities", []), z(this, "initialValues", {}), z(this, "callbacks", {}), z(this, "validateMessages", null), z(this, "preserve", null), z(this, "lastValidatePromise", null), z(this, "getForm", function() {
      return {
        getFieldValue: n.getFieldValue,
        getFieldsValue: n.getFieldsValue,
        getFieldError: n.getFieldError,
        getFieldWarning: n.getFieldWarning,
        getFieldsError: n.getFieldsError,
        isFieldsTouched: n.isFieldsTouched,
        isFieldTouched: n.isFieldTouched,
        isFieldValidating: n.isFieldValidating,
        isFieldsValidating: n.isFieldsValidating,
        resetFields: n.resetFields,
        setFields: n.setFields,
        setFieldValue: n.setFieldValue,
        setFieldsValue: n.setFieldsValue,
        validateFields: n.validateFields,
        submit: n.submit,
        _init: !0,
        getInternalHooks: n.getInternalHooks
      }
    }), z(this, "getInternalHooks", function(r) {
      return r === Oo ? (n.formHooked = !0, {
        dispatch: n.dispatch,
        initEntityValue: n.initEntityValue,
        registerField: n.registerField,
        useSubscribe: n.useSubscribe,
        setInitialValues: n.setInitialValues,
        destroyForm: n.destroyForm,
        setCallbacks: n.setCallbacks,
        setValidateMessages: n.setValidateMessages,
        getFields: n.getFields,
        setPreserve: n.setPreserve,
        getInitialValue: n.getInitialValue,
        registerWatch: n.registerWatch
      }) : (Zt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null)
    }), z(this, "useSubscribe", function(r) {
      n.subscribable = r
    }), z(this, "prevWithoutPreserves", null), z(this, "setInitialValues", function(r, o) {
      if (n.initialValues = r || {}, o) {
        var i, a = Ri(r, n.store);
        (i = n.prevWithoutPreserves) === null || i === void 0 || i.map(function(l) {
          var s = l.key;
          a = Qn(a, s, Jn(r, s))
        }), n.prevWithoutPreserves = null, n.updateStore(a)
      }
    }), z(this, "destroyForm", function() {
      var r = new oi;
      n.getFieldEntities(!0).forEach(function(o) {
        n.isMergedPreserve(o.isPreserve()) || r.set(o.getNamePath(), !0)
      }), n.prevWithoutPreserves = r
    }), z(this, "getInitialValue", function(r) {
      var o = Jn(n.initialValues, r);
      return r.length ? Ri(o) : o
    }), z(this, "setCallbacks", function(r) {
      n.callbacks = r
    }), z(this, "setValidateMessages", function(r) {
      n.validateMessages = r
    }), z(this, "setPreserve", function(r) {
      n.preserve = r
    }), z(this, "watchList", []), z(this, "registerWatch", function(r) {
      return n.watchList.push(r),
        function() {
          n.watchList = n.watchList.filter(function(o) {
            return o !== r
          })
        }
    }), z(this, "notifyWatch", function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (n.watchList.length) {
        var o = n.getFieldsValue(),
          i = n.getFieldsValue(!0);
        n.watchList.forEach(function(a) {
          a(o, i, r)
        })
      }
    }), z(this, "timeoutId", null), z(this, "warningUnhooked", function() {}), z(this, "updateStore", function(r) {
      n.store = r
    }), z(this, "getFieldEntities", function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return r ? n.fieldEntities.filter(function(o) {
        return o.getNamePath().length
      }) : n.fieldEntities
    }), z(this, "getFieldsMap", function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        o = new oi;
      return n.getFieldEntities(r).forEach(function(i) {
        var a = i.getNamePath();
        o.set(a, i)
      }), o
    }), z(this, "getFieldEntitiesForNamePathList", function(r) {
      if (!r) return n.getFieldEntities(!0);
      var o = n.getFieldsMap(!0);
      return r.map(function(i) {
        var a = $t(i);
        return o.get(a) || {
          INVALIDATE_NAME_PATH: $t(i)
        }
      })
    }), z(this, "getFieldsValue", function(r, o) {
      n.warningUnhooked();
      var i, a, l;
      if (r === !0 || Array.isArray(r) ? (i = r, a = o) : r && ze(r) === "object" && (l = r.strict, a = r.filter), i === !0 && !a) return n.store;
      var s = n.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null),
        u = [];
      return s.forEach(function(d) {
        var f, v, y = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
        if (l) {
          var b, h;
          if ((b = (h = d).isList) !== null && b !== void 0 && b.call(h)) return
        } else if (!i && (f = (v = d).isListField) !== null && f !== void 0 && f.call(v)) return;
        if (!a) u.push(y);
        else {
          var C = "getMeta" in d ? d.getMeta() : null;
          a(C) && u.push(y)
        }
      }), yh(n.store, u.map($t))
    }), z(this, "getFieldValue", function(r) {
      n.warningUnhooked();
      var o = $t(r);
      return Jn(n.store, o)
    }), z(this, "getFieldsError", function(r) {
      n.warningUnhooked();
      var o = n.getFieldEntitiesForNamePathList(r);
      return o.map(function(i, a) {
        return i && !("INVALIDATE_NAME_PATH" in i) ? {
          name: i.getNamePath(),
          errors: i.getErrors(),
          warnings: i.getWarnings()
        } : {
          name: $t(r[a]),
          errors: [],
          warnings: []
        }
      })
    }), z(this, "getFieldError", function(r) {
      n.warningUnhooked();
      var o = $t(r),
        i = n.getFieldsError([o])[0];
      return i.errors
    }), z(this, "getFieldWarning", function(r) {
      n.warningUnhooked();
      var o = $t(r),
        i = n.getFieldsError([o])[0];
      return i.warnings
    }), z(this, "isFieldsTouched", function() {
      n.warningUnhooked();
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
      var a = o[0],
        l = o[1],
        s, u = !1;
      o.length === 0 ? s = null : o.length === 1 ? Array.isArray(a) ? (s = a.map($t), u = !1) : (s = null, u = a) : (s = a.map($t), u = l);
      var d = n.getFieldEntities(!0),
        f = function(C) {
          return C.isFieldTouched()
        };
      if (!s) return u ? d.every(f) : d.some(f);
      var v = new oi;
      s.forEach(function(h) {
        v.set(h, [])
      }), d.forEach(function(h) {
        var C = h.getNamePath();
        s.forEach(function(g) {
          g.every(function(p, m) {
            return C[m] === p
          }) && v.update(g, function(p) {
            return [].concat(ce(p), [h])
          })
        })
      });
      var y = function(C) {
          return C.some(f)
        },
        b = v.map(function(h) {
          var C = h.value;
          return C
        });
      return u ? b.every(y) : b.some(y)
    }), z(this, "isFieldTouched", function(r) {
      return n.warningUnhooked(), n.isFieldsTouched([r])
    }), z(this, "isFieldsValidating", function(r) {
      n.warningUnhooked();
      var o = n.getFieldEntities();
      if (!r) return o.some(function(a) {
        return a.isFieldValidating()
      });
      var i = r.map($t);
      return o.some(function(a) {
        var l = a.getNamePath();
        return Ha(i, l) && a.isFieldValidating()
      })
    }), z(this, "isFieldValidating", function(r) {
      return n.warningUnhooked(), n.isFieldsValidating([r])
    }), z(this, "resetWithFieldInitialValue", function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        o = new oi,
        i = n.getFieldEntities(!0);
      i.forEach(function(s) {
        var u = s.props.initialValue,
          d = s.getNamePath();
        if (u !== void 0) {
          var f = o.get(d) || new Set;
          f.add({
            entity: s,
            value: u
          }), o.set(d, f)
        }
      });
      var a = function(u) {
          u.forEach(function(d) {
            var f = d.props.initialValue;
            if (f !== void 0) {
              var v = d.getNamePath(),
                y = n.getInitialValue(v);
              if (y !== void 0) Zt(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
              else {
                var b = o.get(v);
                if (b && b.size > 1) Zt(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
                else if (b) {
                  var h = n.getFieldValue(v);
                  (!r.skipExist || h === void 0) && n.updateStore(Qn(n.store, v, ce(b)[0].value))
                }
              }
            }
          })
        },
        l;
      r.entities ? l = r.entities : r.namePathList ? (l = [], r.namePathList.forEach(function(s) {
        var u = o.get(s);
        if (u) {
          var d;
          (d = l).push.apply(d, ce(ce(u).map(function(f) {
            return f.entity
          })))
        }
      })) : l = i, a(l)
    }), z(this, "resetFields", function(r) {
      n.warningUnhooked();
      var o = n.store;
      if (!r) {
        n.updateStore(Ri(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
          type: "reset"
        }), n.notifyWatch();
        return
      }
      var i = r.map($t);
      i.forEach(function(a) {
        var l = n.getInitialValue(a);
        n.updateStore(Qn(n.store, a, l))
      }), n.resetWithFieldInitialValue({
        namePathList: i
      }), n.notifyObservers(o, i, {
        type: "reset"
      }), n.notifyWatch(i)
    }), z(this, "setFields", function(r) {
      n.warningUnhooked();
      var o = n.store,
        i = [];
      r.forEach(function(a) {
        var l = a.name,
          s = Fe(a, MT),
          u = $t(l);
        i.push(u), "value" in s && n.updateStore(Qn(n.store, u, s.value)), n.notifyObservers(o, [u], {
          type: "setField",
          data: a
        })
      }), n.notifyWatch(i)
    }), z(this, "getFields", function() {
      var r = n.getFieldEntities(!0),
        o = r.map(function(i) {
          var a = i.getNamePath(),
            l = i.getMeta(),
            s = D(D({}, l), {}, {
              name: a,
              value: n.getFieldValue(a)
            });
          return Object.defineProperty(s, "originRCField", {
            value: !0
          }), s
        });
      return o
    }), z(this, "initEntityValue", function(r) {
      var o = r.props.initialValue;
      if (o !== void 0) {
        var i = r.getNamePath(),
          a = Jn(n.store, i);
        a === void 0 && n.updateStore(Qn(n.store, i, o))
      }
    }), z(this, "isMergedPreserve", function(r) {
      var o = r !== void 0 ? r : n.preserve;
      return o ?? !0
    }), z(this, "registerField", function(r) {
      n.fieldEntities.push(r);
      var o = r.getNamePath();
      if (n.notifyWatch([o]), r.props.initialValue !== void 0) {
        var i = n.store;
        n.resetWithFieldInitialValue({
          entities: [r],
          skipExist: !0
        }), n.notifyObservers(i, [r.getNamePath()], {
          type: "valueUpdate",
          source: "internal"
        })
      }
      return function(a, l) {
        var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (n.fieldEntities = n.fieldEntities.filter(function(f) {
            return f !== r
          }), !n.isMergedPreserve(l) && (!a || s.length > 1)) {
          var u = a ? void 0 : n.getInitialValue(o);
          if (o.length && n.getFieldValue(o) !== u && n.fieldEntities.every(function(f) {
              return !pS(f.getNamePath(), o)
            })) {
            var d = n.store;
            n.updateStore(Qn(d, o, u, !0)), n.notifyObservers(d, [o], {
              type: "remove"
            }), n.triggerDependenciesUpdate(d, o)
          }
        }
        n.notifyWatch([o])
      }
    }), z(this, "dispatch", function(r) {
      switch (r.type) {
        case "updateValue": {
          var o = r.namePath,
            i = r.value;
          n.updateValue(o, i);
          break
        }
        case "validateField": {
          var a = r.namePath,
            l = r.triggerName;
          n.validateFields([a], {
            triggerName: l
          });
          break
        }
      }
    }), z(this, "notifyObservers", function(r, o, i) {
      if (n.subscribable) {
        var a = D(D({}, i), {}, {
          store: n.getFieldsValue(!0)
        });
        n.getFieldEntities().forEach(function(l) {
          var s = l.onStoreChange;
          s(r, o, a)
        })
      } else n.forceRootUpdate()
    }), z(this, "triggerDependenciesUpdate", function(r, o) {
      var i = n.getDependencyChildrenFields(o);
      return i.length && n.validateFields(i), n.notifyObservers(r, i, {
        type: "dependenciesUpdate",
        relatedFields: [o].concat(ce(i))
      }), i
    }), z(this, "updateValue", function(r, o) {
      var i = $t(r),
        a = n.store;
      n.updateStore(Qn(n.store, i, o)), n.notifyObservers(a, [i], {
        type: "valueUpdate",
        source: "internal"
      }), n.notifyWatch([i]);
      var l = n.triggerDependenciesUpdate(a, i),
        s = n.callbacks.onValuesChange;
      if (s) {
        var u = yh(n.store, [i]);
        s(u, n.getFieldsValue())
      }
      n.triggerOnFieldsChange([i].concat(ce(l)))
    }), z(this, "setFieldsValue", function(r) {
      n.warningUnhooked();
      var o = n.store;
      if (r) {
        var i = Ri(n.store, r);
        n.updateStore(i)
      }
      n.notifyObservers(o, null, {
        type: "valueUpdate",
        source: "external"
      }), n.notifyWatch()
    }), z(this, "setFieldValue", function(r, o) {
      n.setFields([{
        name: r,
        value: o
      }])
    }), z(this, "getDependencyChildrenFields", function(r) {
      var o = new Set,
        i = [],
        a = new oi;
      n.getFieldEntities().forEach(function(s) {
        var u = s.props.dependencies;
        (u || []).forEach(function(d) {
          var f = $t(d);
          a.update(f, function() {
            var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Set;
            return v.add(s), v
          })
        })
      });
      var l = function s(u) {
        var d = a.get(u) || new Set;
        d.forEach(function(f) {
          if (!o.has(f)) {
            o.add(f);
            var v = f.getNamePath();
            f.isFieldDirty() && v.length && (i.push(v), s(v))
          }
        })
      };
      return l(r), i
    }), z(this, "triggerOnFieldsChange", function(r, o) {
      var i = n.callbacks.onFieldsChange;
      if (i) {
        var a = n.getFields();
        if (o) {
          var l = new oi;
          o.forEach(function(u) {
            var d = u.name,
              f = u.errors;
            l.set(d, f)
          }), a.forEach(function(u) {
            u.errors = l.get(u.name) || u.errors
          })
        }
        var s = a.filter(function(u) {
          var d = u.name;
          return Ha(r, d)
        });
        s.length && i(s, a)
      }
    }), z(this, "validateFields", function(r, o) {
      var i;
      n.warningUnhooked();
      var a, l;
      Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (a = r, l = o) : l = r;
      var s = !!a,
        u = s ? a.map($t) : [],
        d = [],
        f = String(Date.now()),
        v = new Set,
        y = (i = l) === null || i === void 0 ? void 0 : i.recursive;
      n.getFieldEntities(!0).forEach(function(g) {
        if (s || u.push(g.getNamePath()), !(!g.props.rules || !g.props.rules.length)) {
          var p = g.getNamePath();
          if (v.add(p.join(f)), !s || Ha(u, p, y)) {
            var m = g.validateRules(D({
              validateMessages: D(D({}, vS), n.validateMessages)
            }, l));
            d.push(m.then(function() {
              return {
                name: p,
                errors: [],
                warnings: []
              }
            }).catch(function(S) {
              var E, w = [],
                x = [];
              return (E = S.forEach) === null || E === void 0 || E.call(S, function(R) {
                var P = R.rule.warningOnly,
                  O = R.errors;
                P ? x.push.apply(x, ce(O)) : w.push.apply(w, ce(O))
              }), w.length ? Promise.reject({
                name: p,
                errors: w,
                warnings: x
              }) : {
                name: p,
                errors: w,
                warnings: x
              }
            }))
          }
        }
      });
      var b = NT(d);
      n.lastValidatePromise = b, b.catch(function(g) {
        return g
      }).then(function(g) {
        var p = g.map(function(m) {
          var S = m.name;
          return S
        });
        n.notifyObservers(n.store, p, {
          type: "validateFinish"
        }), n.triggerOnFieldsChange(p, g)
      });
      var h = b.then(function() {
        return n.lastValidatePromise === b ? Promise.resolve(n.getFieldsValue(u)) : Promise.reject([])
      }).catch(function(g) {
        var p = g.filter(function(m) {
          return m && m.errors.length
        });
        return Promise.reject({
          values: n.getFieldsValue(u),
          errorFields: p,
          outOfDate: n.lastValidatePromise !== b
        })
      });
      h.catch(function(g) {
        return g
      });
      var C = u.filter(function(g) {
        return v.has(g.join(f))
      });
      return n.triggerOnFieldsChange(C), h
    }), z(this, "submit", function() {
      n.warningUnhooked(), n.validateFields().then(function(r) {
        var o = n.callbacks.onFinish;
        if (o) try {
          o(r)
        } catch (i) {
          console.error(i)
        }
      }).catch(function(r) {
        var o = n.callbacks.onFinishFailed;
        o && o(r)
      })
    }), this.forceRootUpdate = t
  });

function hS(e) {
  var t = c.useRef(),
    n = c.useState({}),
    r = H(n, 2),
    o = r[1];
  if (!t.current)
    if (e) t.current = e;
    else {
      var i = function() {
          o({})
        },
        a = new _T(i);
      t.current = a.getForm()
    } return [t.current]
}
var sv = c.createContext({
    triggerFormChange: function() {},
    triggerFormFinish: function() {},
    registerForm: function() {},
    unregisterForm: function() {}
  }),
  kT = function(t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      o = t.onFormFinish,
      i = t.children,
      a = c.useContext(sv),
      l = c.useRef({});
    return c.createElement(sv.Provider, {
      value: D(D({}, a), {}, {
        validateMessages: D(D({}, a.validateMessages), n),
        triggerFormChange: function(u, d) {
          r && r(u, {
            changedFields: d,
            forms: l.current
          }), a.triggerFormChange(u, d)
        },
        triggerFormFinish: function(u, d) {
          o && o(u, {
            values: d,
            forms: l.current
          }), a.triggerFormFinish(u, d)
        },
        registerForm: function(u, d) {
          u && (l.current = D(D({}, l.current), {}, z({}, u, d))), a.registerForm(u, d)
        },
        unregisterForm: function(u) {
          var d = D({}, l.current);
          delete d[u], l.current = d, a.unregisterForm(u)
        }
      })
    }, i)
  },
  zT = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"],
  LT = function(t, n) {
    var r = t.name,
      o = t.initialValues,
      i = t.fields,
      a = t.form,
      l = t.preserve,
      s = t.children,
      u = t.component,
      d = u === void 0 ? "form" : u,
      f = t.validateMessages,
      v = t.validateTrigger,
      y = v === void 0 ? "onChange" : v,
      b = t.onValuesChange,
      h = t.onFieldsChange,
      C = t.onFinish,
      g = t.onFinishFailed,
      p = Fe(t, zT),
      m = c.useContext(sv),
      S = hS(a),
      E = H(S, 1),
      w = E[0],
      x = w.getInternalHooks(Oo),
      R = x.useSubscribe,
      P = x.setInitialValues,
      O = x.setCallbacks,
      _ = x.setValidateMessages,
      N = x.setPreserve,
      I = x.destroyForm;
    c.useImperativeHandle(n, function() {
      return w
    }), c.useEffect(function() {
      return m.registerForm(r, w),
        function() {
          m.unregisterForm(r)
        }
    }, [m, w, r]), _(D(D({}, m.validateMessages), f)), O({
      onValuesChange: b,
      onFieldsChange: function(F) {
        if (m.triggerFormChange(r, F), h) {
          for (var V = arguments.length, K = new Array(V > 1 ? V - 1 : 0), Q = 1; Q < V; Q++) K[Q - 1] = arguments[Q];
          h.apply(void 0, [F].concat(K))
        }
      },
      onFinish: function(F) {
        m.triggerFormFinish(r, F), C && C(F)
      },
      onFinishFailed: g
    }), N(l);
    var A = c.useRef(null);
    P(o, !A.current), A.current || (A.current = !0), c.useEffect(function() {
      return I
    }, []);
    var j, M = typeof s == "function";
    if (M) {
      var $ = w.getFieldsValue(!0);
      j = s($, w)
    } else j = s;
    R(!M);
    var T = c.useRef();
    c.useEffect(function() {
      PT(T.current || [], i || []) || w.setFields(i || []), T.current = i
    }, [i, w]);
    var k = c.useMemo(function() {
        return D(D({}, w), {}, {
          validateTrigger: y
        })
      }, [w, y]),
      L = c.createElement(yc.Provider, {
        value: null
      }, c.createElement(Xi.Provider, {
        value: k
      }, j));
    return d === !1 ? L : c.createElement(d, de({}, p, {
      onSubmit: function(F) {
        F.preventDefault(), F.stopPropagation(), w.submit()
      },
      onReset: function(F) {
        var V;
        F.preventDefault(), w.resetFields(), (V = p.onReset) === null || V === void 0 || V.call(p, F)
      }
    }), L)
  };

function Ch(e) {
  try {
    return JSON.stringify(e)
  } catch {
    return Math.random()
  }
}

function AT() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  var r = t[0],
    o = r === void 0 ? [] : r,
    i = t[1],
    a = i === void 0 ? {} : i,
    l = VR(a) ? {
      form: a
    } : a,
    s = l.form,
    u = c.useState(),
    d = H(u, 2),
    f = d[0],
    v = d[1],
    y = c.useMemo(function() {
      return Ch(f)
    }, [f]),
    b = c.useRef(y);
  b.current = y;
  var h = c.useContext(Xi),
    C = s || h,
    g = C && C._init,
    p = $t(o),
    m = c.useRef(p);
  return m.current = p, c.useEffect(function() {
    if (g) {
      var S = C.getFieldsValue,
        E = C.getInternalHooks,
        w = E(Oo),
        x = w.registerWatch,
        R = x(function(O, _) {
          var N = Jn(l.preserve ? _ : O, m.current),
            I = Ch(N);
          b.current !== I && (b.current = I, v(N))
        }),
        P = Jn(l.preserve ? S(!0) : S(), m.current);
      return f !== P && v(P), R
    }
  }, [g]), f
}
var jT = c.forwardRef(LT),
  Ol = jT;
Ol.FormProvider = kT;
Ol.Field = mS;
Ol.List = IT;
Ol.useForm = hS;
Ol.useWatch = AT;
const cv = c.createContext({}),
  FT = e => {
    let {
      children: t,
      status: n,
      override: r
    } = e;
    const o = c.useContext(cv),
      i = c.useMemo(() => {
        const a = Object.assign({}, o);
        return r && delete a.isFormItemInput, n && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a
      }, [n, r, o]);
    return c.createElement(cv.Provider, {
      value: i
    }, t)
  };

function xh() {}
const DT = c.createContext({
  add: xh,
  remove: xh
});

function BT(e) {
  const t = c.useContext(DT),
    n = c.useRef();
  return bn(o => {
    if (o) {
      const i = e ? o.querySelector(e) : o;
      t.add(i), n.current = i
    } else t.remove(n.current)
  })
}
const HT = () => {
    const {
      cancelButtonProps: e,
      cancelTextLocale: t,
      onCancel: n
    } = c.useContext(El);
    return X.createElement(Ap, Object.assign({
      onClick: n
    }, e), t)
  },
  wh = HT,
  WT = () => {
    const {
      confirmLoading: e,
      okButtonProps: t,
      okType: n,
      okTextLocale: r,
      onOk: o
    } = c.useContext(El);
    return X.createElement(Ap, Object.assign({}, q1(n), {
      loading: e,
      onClick: o
    }, t), r)
  },
  Eh = WT;

function yS(e, t) {
  return X.createElement("span", {
    className: `${e}-close-x`
  }, t || X.createElement(xl, {
    className: `${e}-close-icon`
  }))
}
const bS = e => {
    const {
      okText: t,
      okType: n = "primary",
      cancelText: r,
      confirmLoading: o,
      onOk: i,
      onCancel: a,
      okButtonProps: l,
      cancelButtonProps: s,
      footer: u
    } = e, [d] = ru("Modal", s1()), f = t || (d == null ? void 0 : d.okText), v = r || (d == null ? void 0 : d.cancelText), y = {
      confirmLoading: o,
      okButtonProps: l,
      cancelButtonProps: s,
      okTextLocale: f,
      cancelTextLocale: v,
      okType: n,
      onOk: i,
      onCancel: a
    }, b = X.useMemo(() => y, ce(Object.values(y)));
    let h;
    return typeof u == "function" || typeof u > "u" ? (h = X.createElement(X.Fragment, null, X.createElement(wh, null), X.createElement(Eh, null)), typeof u == "function" && (h = u(h, {
      OkBtn: Eh,
      CancelBtn: wh
    })), h = X.createElement(rS, {
      value: b
    }, h)) : h = u, X.createElement(x1, {
      disabled: !1
    }, h)
  },
  VT = e => ({
    animationDuration: e,
    animationFillMode: "both"
  }),
  UT = e => ({
    animationDuration: e,
    animationFillMode: "both"
  }),
  Dp = function(e, t, n, r) {
    const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
    return {
      [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, VT(r)), {
        animationPlayState: "paused"
      }),
      [`${i}${e}-leave`]: Object.assign(Object.assign({}, UT(r)), {
        animationPlayState: "paused"
      }),
      [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
        animationName: t,
        animationPlayState: "running"
      },
      [`${i}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: "running",
        pointerEvents: "none"
      }
    }
  },
  KT = new bt("antFadeIn", {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  }),
  GT = new bt("antFadeOut", {
    "0%": {
      opacity: 1
    },
    "100%": {
      opacity: 0
    }
  }),
  XT = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const {
      antCls: n
    } = e, r = `${n}-fade`, o = t ? "&" : "";
    return [Dp(r, KT, GT, e.motionDurationMid, t), {
      [`
        ${o}${r}-enter,
        ${o}${r}-appear
      `]: {
        opacity: 0,
        animationTimingFunction: "linear"
      },
      [`${o}${r}-leave`]: {
        animationTimingFunction: "linear"
      }
    }]
  },
  qT = new bt("antSlideUpIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    }
  }),
  QT = new bt("antSlideUpOut", {
    "0%": {
      transform: "scaleY(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    }
  }),
  YT = new bt("antSlideDownIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1
    }
  }),
  ZT = new bt("antSlideDownOut", {
    "0%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1
    },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0
    }
  }),
  JT = new bt("antSlideLeftIn", {
    "0%": {
      transform: "scaleX(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scaleX(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    }
  }),
  eI = new bt("antSlideLeftOut", {
    "0%": {
      transform: "scaleX(1)",
      transformOrigin: "0% 0%",
      opacity: 1
    },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "0% 0%",
      opacity: 0
    }
  }),
  tI = new bt("antSlideRightIn", {
    "0%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scaleX(1)",
      transformOrigin: "100% 0%",
      opacity: 1
    }
  }),
  nI = new bt("antSlideRightOut", {
    "0%": {
      transform: "scaleX(1)",
      transformOrigin: "100% 0%",
      opacity: 1
    },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0
    }
  }),
  rI = {
    "slide-up": {
      inKeyframes: qT,
      outKeyframes: QT
    },
    "slide-down": {
      inKeyframes: YT,
      outKeyframes: ZT
    },
    "slide-left": {
      inKeyframes: JT,
      outKeyframes: eI
    },
    "slide-right": {
      inKeyframes: tI,
      outKeyframes: nI
    }
  },
  $h = (e, t) => {
    const {
      antCls: n
    } = e, r = `${n}-${t}`, {
      inKeyframes: o,
      outKeyframes: i
    } = rI[t];
    return [Dp(r, o, i, e.motionDurationMid), {
      [`
      ${r}-enter,
      ${r}-appear
    `]: {
        transform: "scale(0)",
        transformOrigin: "0% 0%",
        opacity: 0,
        animationTimingFunction: e.motionEaseOutQuint,
        "&-prepare": {
          transform: "scale(1)"
        }
      },
      [`${r}-leave`]: {
        animationTimingFunction: e.motionEaseInQuint
      }
    }]
  },
  oI = new bt("antZoomIn", {
    "0%": {
      transform: "scale(0.2)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  }),
  iI = new bt("antZoomOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.2)",
      opacity: 0
    }
  }),
  Oh = new bt("antZoomBigIn", {
    "0%": {
      transform: "scale(0.8)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  }),
  Ph = new bt("antZoomBigOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.8)",
      opacity: 0
    }
  }),
  aI = new bt("antZoomUpIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    }
  }),
  lI = new bt("antZoomUpOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    }
  }),
  sI = new bt("antZoomLeftIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    }
  }),
  cI = new bt("antZoomLeftOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    }
  }),
  uI = new bt("antZoomRightIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    }
  }),
  dI = new bt("antZoomRightOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    }
  }),
  fI = new bt("antZoomDownIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    }
  }),
  vI = new bt("antZoomDownOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    }
  }),
  pI = {
    zoom: {
      inKeyframes: oI,
      outKeyframes: iI
    },
    "zoom-big": {
      inKeyframes: Oh,
      outKeyframes: Ph
    },
    "zoom-big-fast": {
      inKeyframes: Oh,
      outKeyframes: Ph
    },
    "zoom-left": {
      inKeyframes: sI,
      outKeyframes: cI
    },
    "zoom-right": {
      inKeyframes: uI,
      outKeyframes: dI
    },
    "zoom-up": {
      inKeyframes: aI,
      outKeyframes: lI
    },
    "zoom-down": {
      inKeyframes: fI,
      outKeyframes: vI
    }
  },
  Bp = (e, t) => {
    const {
      antCls: n
    } = e, r = `${n}-${t}`, {
      inKeyframes: o,
      outKeyframes: i
    } = pI[t];
    return [Dp(r, o, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
      [`
        ${r}-enter,
        ${r}-appear
      `]: {
        transform: "scale(0)",
        opacity: 0,
        animationTimingFunction: e.motionEaseOutCirc,
        "&-prepare": {
          transform: "none"
        }
      },
      [`${r}-leave`]: {
        animationTimingFunction: e.motionEaseInOutCirc
      }
    }]
  };

function Rh(e) {
  return {
    position: e,
    inset: 0
  }
}
const mI = e => {
    const {
      componentCls: t,
      antCls: n
    } = e;
    return [{
      [`${t}-root`]: {
        [`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
          transform: "none",
          opacity: 0,
          animationDuration: e.motionDurationSlow,
          userSelect: "none"
        },
        [`${t}${n}-zoom-leave ${t}-content`]: {
          pointerEvents: "none"
        },
        [`${t}-mask`]: Object.assign(Object.assign({}, Rh("fixed")), {
          zIndex: e.zIndexPopupBase,
          height: "100%",
          backgroundColor: e.colorBgMask,
          pointerEvents: "none",
          [`${t}-hidden`]: {
            display: "none"
          }
        }),
        [`${t}-wrap`]: Object.assign(Object.assign({}, Rh("fixed")), {
          zIndex: e.zIndexPopupBase,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch",
          [`&:has(${t}${n}-zoom-enter), &:has(${t}${n}-zoom-appear)`]: {
            pointerEvents: "none"
          }
        })
      }
    }, {
      [`${t}-root`]: XT(e)
    }]
  },
  gI = e => {
    const {
      componentCls: t
    } = e;
    return [{
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax})`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${e.marginXS} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    }, {
      [t]: Object.assign(Object.assign({}, cr(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${e.margin*2}px)`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.titleColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.titleFontSize,
          lineHeight: e.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadow,
          pointerEvents: "auto",
          padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
        },
        [`${t}-close`]: Object.assign({
          position: "absolute",
          top: (e.modalHeaderHeight - e.modalCloseBtnSize) / 2,
          insetInlineEnd: (e.modalHeaderHeight - e.modalCloseBtnSize) / 2,
          zIndex: e.zIndexPopupBase + 10,
          padding: 0,
          color: e.modalCloseIconColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalCloseBtnSize,
          height: e.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${e.modalCloseBtnSize}px`,
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalIconHoverColor,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover
          }
        }, iu(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.headerBg,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          marginBottom: e.marginXS
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word"
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.footerBg,
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    }, {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }]
  },
  hI = e => {
    const {
      componentCls: t,
      antCls: n
    } = e, r = `${t}-confirm`;
    return {
      [t]: {
        [`${t}-content`]: {
          padding: 0
        },
        [`${t}-header`]: {
          padding: e.modalHeaderPadding,
          borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
          marginBottom: 0
        },
        [`${t}-body`]: {
          padding: e.modalBodyPadding
        },
        [`${t}-footer`]: {
          padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
          borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
          borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
          marginTop: 0
        }
      },
      [r]: {
        [`${n}-modal-body`]: {
          padding: `${e.padding*2}px ${e.padding*2}px ${e.paddingLG}px`
        },
        [`${r}-body`]: {
          [`> ${e.iconCls}`]: {
            marginInlineEnd: e.margin,
            [`+ ${r}-title + ${r}-content`]: {
              marginInlineStart: e.modalConfirmIconSize + e.margin
            }
          }
        },
        [`${r}-btns`]: {
          marginTop: e.marginLG
        }
      }
    }
  },
  yI = e => {
    const {
      componentCls: t
    } = e;
    return {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: "rtl",
          [`${t}-confirm-body`]: {
            direction: "rtl"
          }
        }
      }
    }
  },
  SS = e => {
    const t = e.padding,
      n = e.fontSizeHeading5,
      r = e.lineHeightHeading5;
    return wt(e, {
      modalBodyPadding: e.paddingLG,
      modalHeaderPadding: `${t}px ${e.paddingLG}px`,
      modalHeaderBorderWidth: e.lineWidth,
      modalHeaderBorderStyle: e.lineType,
      modalHeaderBorderColorSplit: e.colorSplit,
      modalHeaderHeight: r * n + t * 2,
      modalFooterBorderColorSplit: e.colorSplit,
      modalFooterBorderStyle: e.lineType,
      modalFooterPaddingVertical: e.paddingXS,
      modalFooterPaddingHorizontal: e.padding,
      modalFooterBorderWidth: e.lineWidth,
      modalIconHoverColor: e.colorIconHover,
      modalCloseIconColor: e.colorIcon,
      modalCloseBtnSize: e.fontSize * e.lineHeight,
      modalConfirmIconSize: e.fontSize * e.lineHeight
    })
  },
  CS = e => ({
    footerBg: "transparent",
    headerBg: e.colorBgElevated,
    titleLineHeight: e.lineHeightHeading5,
    titleFontSize: e.fontSizeHeading5,
    contentBg: e.colorBgElevated,
    titleColor: e.colorTextHeading
  }),
  xS = rn("Modal", e => {
    const t = SS(e);
    return [gI(t), yI(t), mI(t), e.wireframe && hI(t), Bp(t, "zoom")]
  }, CS);
var bI = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
let uv;
const SI = e => {
  uv = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => {
    uv = null
  }, 100)
};
WR() && document.documentElement.addEventListener("click", SI, !0);
const CI = e => {
    var t;
    const {
      getPopupContainer: n,
      getPrefixCls: r,
      direction: o,
      modal: i
    } = c.useContext(Le), a = M => {
      const {
        onCancel: $
      } = e;
      $ == null || $(M)
    }, l = M => {
      const {
        onOk: $
      } = e;
      $ == null || $(M)
    }, {
      prefixCls: s,
      className: u,
      rootClassName: d,
      open: f,
      wrapClassName: v,
      centered: y,
      getContainer: b,
      closeIcon: h,
      closable: C,
      focusTriggerAfterClose: g = !0,
      style: p,
      visible: m,
      width: S = 520,
      footer: E
    } = e, w = bI(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "closable", "focusTriggerAfterClose", "style", "visible", "width", "footer"]), x = r("modal", s), R = r(), [P, O] = xS(x), _ = U(v, {
      [`${x}-centered`]: !!y,
      [`${x}-wrap-rtl`]: o === "rtl"
    }), N = E !== null && c.createElement(bS, Object.assign({}, e, {
      onOk: l,
      onCancel: a
    })), [I, A] = uS(C, h, M => yS(x, M), c.createElement(xl, {
      className: `${x}-close-icon`
    }), !0), j = BT(`.${x}-content`);
    return P(c.createElement(G1, null, c.createElement(FT, {
      status: !0,
      override: !0
    }, c.createElement(cS, Object.assign({
      width: S
    }, w, {
      getContainer: b === void 0 ? n : b,
      prefixCls: x,
      rootClassName: U(O, d),
      wrapClassName: _,
      footer: N,
      visible: f ?? m,
      mousePosition: (t = w.mousePosition) !== null && t !== void 0 ? t : uv,
      onClose: a,
      closable: I,
      closeIcon: A,
      focusTriggerAfterClose: g,
      transitionName: Ho(R, "zoom", e.transitionName),
      maskTransitionName: Ho(R, "fade", e.maskTransitionName),
      className: U(O, u, i == null ? void 0 : i.className),
      style: Object.assign(Object.assign({}, i == null ? void 0 : i.style), p),
      panelRef: j
    })))))
  },
  wS = CI,
  xI = e => {
    const {
      componentCls: t,
      titleFontSize: n,
      titleLineHeight: r,
      modalConfirmIconSize: o,
      fontSize: i,
      lineHeight: a
    } = e, l = `${t}-confirm`, s = Math.round(n * r), u = Math.round(i * a);
    return {
      [l]: {
        "&-rtl": {
          direction: "rtl"
        },
        [`${e.antCls}-modal-header`]: {
          display: "none"
        },
        [`${l}-body-wrapper`]: Object.assign({}, Ji()),
        [`${l}-body`]: {
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "start",
          [`> ${e.iconCls}`]: {
            flex: "none",
            fontSize: o,
            marginInlineEnd: e.marginSM,
            marginTop: (u - o) / 2
          },
          [`&-has-title > ${e.iconCls}`]: {
            marginTop: (s - o) / 2
          }
        },
        [`${l}-paragraph`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto",
          rowGap: e.marginXS
        },
        [`${l}-title`]: {
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: n,
          lineHeight: r
        },
        [`${l}-content`]: {
          color: e.colorText,
          fontSize: i,
          lineHeight: a
        },
        [`${l}-btns`]: {
          textAlign: "end",
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        }
      },
      [`${l}-error ${l}-body > ${e.iconCls}`]: {
        color: e.colorError
      },
      [`${l}-warning ${l}-body > ${e.iconCls},
        ${l}-confirm ${l}-body > ${e.iconCls}`]: {
        color: e.colorWarning
      },
      [`${l}-info ${l}-body > ${e.iconCls}`]: {
        color: e.colorInfo
      },
      [`${l}-success ${l}-body > ${e.iconCls}`]: {
        color: e.colorSuccess
      }
    }
  },
  wI = au(["Modal", "confirm"], e => {
    const t = SS(e);
    return [xI(t)]
  }, CS, {
    order: -1e3
  });
var EI = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};

function ES(e) {
  const {
    prefixCls: t,
    icon: n,
    okText: r,
    cancelText: o,
    confirmPrefixCls: i,
    type: a,
    okCancel: l,
    footer: s,
    locale: u
  } = e, d = EI(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  let f = n;
  if (!n && n !== null) switch (a) {
    case "info":
      f = c.createElement(s2, null);
      break;
    case "success":
      f = c.createElement(XP, null);
      break;
    case "error":
      f = c.createElement(F1, null);
      break;
    default:
      f = c.createElement(o2, null)
  }
  const v = l ?? a === "confirm",
    y = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok",
    [b] = ru("Modal"),
    h = u || b,
    C = r || (v ? h == null ? void 0 : h.okText : h == null ? void 0 : h.justOkText),
    g = o || (h == null ? void 0 : h.cancelText),
    p = Object.assign({
      autoFocusButton: y,
      cancelTextLocale: g,
      okTextLocale: C,
      mergedOkCancel: v
    }, d),
    m = c.useMemo(() => p, ce(Object.values(p))),
    S = c.createElement(c.Fragment, null, c.createElement(Jg, null), c.createElement(eh, null)),
    E = e.title !== void 0 && e.title !== null,
    w = `${i}-body`;
  return c.createElement("div", {
    className: `${i}-body-wrapper`
  }, c.createElement("div", {
    className: U(w, {
      [`${w}-has-title`]: E
    })
  }, f, c.createElement("div", {
    className: `${i}-paragraph`
  }, E && c.createElement("span", {
    className: `${i}-title`
  }, e.title), c.createElement("div", {
    className: `${i}-content`
  }, e.content))), s === void 0 || typeof s == "function" ? c.createElement(rS, {
    value: m
  }, c.createElement("div", {
    className: `${i}-btns`
  }, typeof s == "function" ? s(S, {
    OkBtn: eh,
    CancelBtn: Jg
  }) : S)) : s, c.createElement(wI, {
    prefixCls: t
  }))
}
const $I = e => {
    const {
      close: t,
      zIndex: n,
      afterClose: r,
      visible: o,
      open: i,
      keyboard: a,
      centered: l,
      getContainer: s,
      maskStyle: u,
      direction: d,
      prefixCls: f,
      wrapClassName: v,
      rootPrefixCls: y,
      iconPrefixCls: b,
      theme: h,
      bodyStyle: C,
      closable: g = !1,
      closeIcon: p,
      modalRender: m,
      focusTriggerAfterClose: S,
      onConfirm: E
    } = e, w = `${f}-confirm`, x = e.width || 416, R = e.style || {}, P = e.mask === void 0 ? !0 : e.mask, O = e.maskClosable === void 0 ? !1 : e.maskClosable, _ = U(w, `${w}-${e.type}`, {
      [`${w}-rtl`]: d === "rtl"
    }, e.className);
    return c.createElement(Xo, {
      prefixCls: y,
      iconPrefixCls: b,
      direction: d,
      theme: h
    }, c.createElement(wS, {
      prefixCls: f,
      className: _,
      wrapClassName: U({
        [`${w}-centered`]: !!e.centered
      }, v),
      onCancel: () => {
        t == null || t({
          triggerCancel: !0
        }), E == null || E(!1)
      },
      open: i,
      title: "",
      footer: null,
      transitionName: Ho(y || "", "zoom", e.transitionName),
      maskTransitionName: Ho(y || "", "fade", e.maskTransitionName),
      mask: P,
      maskClosable: O,
      maskStyle: u,
      style: R,
      bodyStyle: C,
      width: x,
      zIndex: n,
      afterClose: r,
      keyboard: a,
      centered: l,
      getContainer: s,
      closable: g,
      closeIcon: p,
      modalRender: m,
      focusTriggerAfterClose: S
    }, c.createElement(ES, Object.assign({}, e, {
      confirmPrefixCls: w
    }))))
  },
  $S = $I,
  OI = [],
  Ro = OI;
var PI = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
let OS = "";

function RI() {
  return OS
}

function Pl(e) {
  const t = document.createDocumentFragment();
  let n = Object.assign(Object.assign({}, e), {
      close: a,
      open: !0
    }),
    r;

  function o() {
    for (var s = arguments.length, u = new Array(s), d = 0; d < s; d++) u[d] = arguments[d];
    const f = u.some(v => v && v.triggerCancel);
    e.onCancel && f && e.onCancel.apply(e, [() => {}].concat(ce(u.slice(1))));
    for (let v = 0; v < Ro.length; v++)
      if (Ro[v] === a) {
        Ro.splice(v, 1);
        break
      } H1(t)
  }

  function i(s) {
    var {
      okText: u,
      cancelText: d,
      prefixCls: f,
      getContainer: v
    } = s, y = PI(s, ["okText", "cancelText", "prefixCls", "getContainer"]);
    clearTimeout(r), r = setTimeout(() => {
      const b = s1(),
        {
          getPrefixCls: h,
          getIconPrefixCls: C,
          getTheme: g
        } = _P(),
        p = h(void 0, RI()),
        m = f || `${p}-modal`,
        S = C(),
        E = g();
      let w = v;
      w === !1 && (w = void 0), B1(c.createElement($S, Object.assign({}, y, {
        getContainer: w,
        prefixCls: m,
        rootPrefixCls: p,
        iconPrefixCls: S,
        okText: u,
        locale: b,
        theme: E,
        cancelText: d || b.cancelText
      })), t)
    })
  }

  function a() {
    for (var s = arguments.length, u = new Array(s), d = 0; d < s; d++) u[d] = arguments[d];
    n = Object.assign(Object.assign({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), o.apply(this, u)
      }
    }), n.visible && delete n.visible, i(n)
  }

  function l(s) {
    typeof s == "function" ? n = s(n) : n = Object.assign(Object.assign({}, n), s), i(n)
  }
  return i(n), Ro.push(a), {
    destroy: a,
    update: l
  }
}

function PS(e) {
  return Object.assign(Object.assign({}, e), {
    type: "warning"
  })
}

function RS(e) {
  return Object.assign(Object.assign({}, e), {
    type: "info"
  })
}

function TS(e) {
  return Object.assign(Object.assign({}, e), {
    type: "success"
  })
}

function IS(e) {
  return Object.assign(Object.assign({}, e), {
    type: "error"
  })
}

function NS(e) {
  return Object.assign(Object.assign({}, e), {
    type: "confirm"
  })
}

function TI(e) {
  let {
    rootPrefixCls: t
  } = e;
  OS = t
}
var II = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const NI = (e, t) => {
    var n, {
        afterClose: r,
        config: o
      } = e,
      i = II(e, ["afterClose", "config"]);
    const [a, l] = c.useState(!0), [s, u] = c.useState(o), {
      direction: d,
      getPrefixCls: f
    } = c.useContext(Le), v = f("modal"), y = f(), b = () => {
      var p;
      r(), (p = s.afterClose) === null || p === void 0 || p.call(s)
    }, h = function() {
      l(!1);
      for (var p = arguments.length, m = new Array(p), S = 0; S < p; S++) m[S] = arguments[S];
      const E = m.some(w => w && w.triggerCancel);
      s.onCancel && E && s.onCancel.apply(s, [() => {}].concat(ce(m.slice(1))))
    };
    c.useImperativeHandle(t, () => ({
      destroy: h,
      update: p => {
        u(m => Object.assign(Object.assign({}, m), p))
      }
    }));
    const C = (n = s.okCancel) !== null && n !== void 0 ? n : s.type === "confirm",
      [g] = ru("Modal", Do.Modal);
    return c.createElement($S, Object.assign({
      prefixCls: v,
      rootPrefixCls: y
    }, s, {
      close: h,
      open: a,
      afterClose: b,
      okText: s.okText || (C ? g == null ? void 0 : g.okText : g == null ? void 0 : g.justOkText),
      direction: s.direction || d,
      cancelText: s.cancelText || (g == null ? void 0 : g.cancelText)
    }, i))
  },
  MI = c.forwardRef(NI);
let Th = 0;
const _I = c.memo(c.forwardRef((e, t) => {
  const [n, r] = S2();
  return c.useImperativeHandle(t, () => ({
    patchElement: r
  }), []), c.createElement(c.Fragment, null, n)
}));

function kI() {
  const e = c.useRef(null),
    [t, n] = c.useState([]);
  c.useEffect(() => {
    t.length && (ce(t).forEach(a => {
      a()
    }), n([]))
  }, [t]);
  const r = c.useCallback(i => function(l) {
    var s;
    Th += 1;
    const u = c.createRef();
    let d;
    const f = new Promise(C => {
      d = C
    });
    let v = !1,
      y;
    const b = c.createElement(MI, {
      key: `modal-${Th}`,
      config: i(l),
      ref: u,
      afterClose: () => {
        y == null || y()
      },
      isSilent: () => v,
      onConfirm: C => {
        d(C)
      }
    });
    return y = (s = e.current) === null || s === void 0 ? void 0 : s.patchElement(b), y && Ro.push(y), {
      destroy: () => {
        function C() {
          var g;
          (g = u.current) === null || g === void 0 || g.destroy()
        }
        u.current ? C() : n(g => [].concat(ce(g), [C]))
      },
      update: C => {
        function g() {
          var p;
          (p = u.current) === null || p === void 0 || p.update(C)
        }
        u.current ? g() : n(p => [].concat(ce(p), [g]))
      },
      then: C => (v = !0, f.then(C))
    }
  }, []);
  return [c.useMemo(() => ({
    info: r(RS),
    success: r(TS),
    error: r(IS),
    warning: r(PS),
    confirm: r(NS)
  }), []), c.createElement(_I, {
    key: "modal-holder",
    ref: e
  })]
}

function zI(e) {
  return function(n) {
    return c.createElement(Xo, {
      theme: {
        token: {
          motion: !1,
          zIndexPopupBase: 0
        }
      }
    }, c.createElement(e, Object.assign({}, n)))
  }
}
const MS = function() {
  if (typeof navigator > "u" || typeof window > "u") return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4))
};
var LI = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"],
  ii = void 0;

function AI(e, t) {
  var n = e.prefixCls,
    r = e.invalidate,
    o = e.item,
    i = e.renderItem,
    a = e.responsive,
    l = e.responsiveDisabled,
    s = e.registerSize,
    u = e.itemKey,
    d = e.className,
    f = e.style,
    v = e.children,
    y = e.display,
    b = e.order,
    h = e.component,
    C = h === void 0 ? "div" : h,
    g = Fe(e, LI),
    p = a && !y;

  function m(R) {
    s(u, R)
  }
  c.useEffect(function() {
    return function() {
      m(null)
    }
  }, []);
  var S = i && o !== ii ? i(o) : v,
    E;
  r || (E = {
    opacity: p ? 0 : 1,
    height: p ? 0 : ii,
    overflowY: p ? "hidden" : ii,
    order: a ? b : ii,
    pointerEvents: p ? "none" : ii,
    position: p ? "absolute" : ii
  });
  var w = {};
  p && (w["aria-hidden"] = !0);
  var x = c.createElement(C, de({
    className: U(!r && n, d),
    style: D(D({}, E), f)
  }, w, g, {
    ref: t
  }), S);
  return a && (x = c.createElement(nr, {
    onResize: function(P) {
      var O = P.offsetWidth;
      m(O)
    },
    disabled: l
  }, x)), x
}
var Wa = c.forwardRef(AI);
Wa.displayName = "Item";

function jI(e) {
  if (typeof MessageChannel > "u") It(e);
  else {
    var t = new MessageChannel;
    t.port1.onmessage = function() {
      return e()
    }, t.port2.postMessage(void 0)
  }
}

function FI() {
  var e = c.useRef(null),
    t = function(r) {
      e.current || (e.current = [], jI(function() {
        Ko.unstable_batchedUpdates(function() {
          e.current.forEach(function(o) {
            o()
          }), e.current = null
        })
      })), e.current.push(r)
    };
  return t
}

function ya(e, t) {
  var n = c.useState(t),
    r = H(n, 2),
    o = r[0],
    i = r[1],
    a = bn(function(l) {
      e(function() {
        i(l)
      })
    });
  return [o, a]
}
var bc = X.createContext(null),
  DI = ["component"],
  BI = ["className"],
  HI = ["className"],
  WI = function(t, n) {
    var r = c.useContext(bc);
    if (!r) {
      var o = t.component,
        i = o === void 0 ? "div" : o,
        a = Fe(t, DI);
      return c.createElement(i, de({}, a, {
        ref: n
      }))
    }
    var l = r.className,
      s = Fe(r, BI),
      u = t.className,
      d = Fe(t, HI);
    return c.createElement(bc.Provider, {
      value: null
    }, c.createElement(Wa, de({
      ref: n,
      className: U(l, u)
    }, s, d)))
  },
  _S = c.forwardRef(WI);
_S.displayName = "RawItem";
var VI = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"],
  kS = "responsive",
  zS = "invalidate";

function UI(e) {
  return "+ ".concat(e.length, " ...")
}

function KI(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? "rc-overflow" : n,
    o = e.data,
    i = o === void 0 ? [] : o,
    a = e.renderItem,
    l = e.renderRawItem,
    s = e.itemKey,
    u = e.itemWidth,
    d = u === void 0 ? 10 : u,
    f = e.ssr,
    v = e.style,
    y = e.className,
    b = e.maxCount,
    h = e.renderRest,
    C = e.renderRawRest,
    g = e.suffix,
    p = e.component,
    m = p === void 0 ? "div" : p,
    S = e.itemComponent,
    E = e.onVisibleChange,
    w = Fe(e, VI),
    x = f === "full",
    R = FI(),
    P = ya(R, null),
    O = H(P, 2),
    _ = O[0],
    N = O[1],
    I = _ || 0,
    A = ya(R, new Map),
    j = H(A, 2),
    M = j[0],
    $ = j[1],
    T = ya(R, 0),
    k = H(T, 2),
    L = k[0],
    B = k[1],
    F = ya(R, 0),
    V = H(F, 2),
    K = V[0],
    Q = V[1],
    W = ya(R, 0),
    G = H(W, 2),
    Z = G[0],
    fe = G[1],
    le = c.useState(null),
    oe = H(le, 2),
    Oe = oe[0],
    Ce = oe[1],
    Ue = c.useState(null),
    xe = H(Ue, 2),
    pe = xe[0],
    ye = xe[1],
    Y = c.useMemo(function() {
      return pe === null && x ? Number.MAX_SAFE_INTEGER : pe || 0
    }, [pe, _]),
    re = c.useState(!1),
    ne = H(re, 2),
    ie = ne[0],
    be = ne[1],
    ke = "".concat(r, "-item"),
    De = Math.max(L, K),
    ue = b === kS,
    he = i.length && ue,
    Re = b === zS,
    rt = he || typeof b == "number" && i.length > b,
    Ie = c.useMemo(function() {
      var me = i;
      return he ? _ === null && x ? me = i : me = i.slice(0, Math.min(i.length, I / d)) : typeof b == "number" && (me = i.slice(0, b)), me
    }, [i, d, _, b, he]),
    Be = c.useMemo(function() {
      return he ? i.slice(Y + 1) : i.slice(Ie.length)
    }, [i, Ie, he, Y]),
    Ae = c.useCallback(function(me, Ee) {
      var Te;
      return typeof s == "function" ? s(me) : (Te = s && (me == null ? void 0 : me[s])) !== null && Te !== void 0 ? Te : Ee
    }, [s]),
    pt = c.useCallback(a || function(me) {
      return me
    }, [a]);

  function je(me, Ee, Te) {
    pe === me && (Ee === void 0 || Ee === Oe) || (ye(me), Te || (be(me < i.length - 1), E == null || E(me)), Ee !== void 0 && Ce(Ee))
  }

  function Ke(me, Ee) {
    N(Ee.clientWidth)
  }

  function Ne(me, Ee) {
    $(function(Te) {
      var St = new Map(Te);
      return Ee === null ? St.delete(me) : St.set(me, Ee), St
    })
  }

  function ot(me, Ee) {
    Q(Ee), B(K)
  }

  function Qt(me, Ee) {
    fe(Ee)
  }

  function Pe(me) {
    return M.get(Ae(Ie[me], me))
  }
  gt(function() {
    if (I && typeof De == "number" && Ie) {
      var me = Z,
        Ee = Ie.length,
        Te = Ee - 1;
      if (!Ee) {
        je(0, null);
        return
      }
      for (var St = 0; St < Ee; St += 1) {
        var Je = Pe(St);
        if (x && (Je = Je || 0), Je === void 0) {
          je(St - 1, void 0, !0);
          break
        }
        if (me += Je, Te === 0 && me <= I || St === Te - 1 && me + Pe(Te) <= I) {
          je(Te, null);
          break
        } else if (me + De > I) {
          je(St - 1, me - Je - Z + K);
          break
        }
      }
      g && Pe(0) + Z > I && Ce(null)
    }
  }, [I, M, K, Z, Ae, Ie]);
  var lt = ie && !!Be.length,
    ee = {};
  Oe !== null && he && (ee = {
    position: "absolute",
    left: Oe,
    top: 0
  });
  var J = {
      prefixCls: ke,
      responsive: he,
      component: S,
      invalidate: Re
    },
    ge = l ? function(me, Ee) {
      var Te = Ae(me, Ee);
      return c.createElement(bc.Provider, {
        key: Te,
        value: D(D({}, J), {}, {
          order: Ee,
          item: me,
          itemKey: Te,
          registerSize: Ne,
          display: Ee <= Y
        })
      }, l(me, Ee))
    } : function(me, Ee) {
      var Te = Ae(me, Ee);
      return c.createElement(Wa, de({}, J, {
        order: Ee,
        key: Te,
        item: me,
        renderItem: pt,
        itemKey: Te,
        registerSize: Ne,
        display: Ee <= Y
      }))
    },
    se, Se = {
      order: lt ? Y : Number.MAX_SAFE_INTEGER,
      className: "".concat(ke, "-rest"),
      registerSize: ot,
      display: lt
    };
  if (C) C && (se = c.createElement(bc.Provider, {
    value: D(D({}, J), Se)
  }, C(Be)));
  else {
    var Xe = h || UI;
    se = c.createElement(Wa, de({}, J, Se), typeof Xe == "function" ? Xe(Be) : Xe)
  }
  var Ze = c.createElement(m, de({
    className: U(!Re && r, y),
    style: v,
    ref: t
  }, w), Ie.map(ge), rt ? se : null, g && c.createElement(Wa, de({}, J, {
    responsive: ue,
    responsiveDisabled: !he,
    order: Y,
    className: "".concat(ke, "-suffix"),
    registerSize: Qt,
    display: !0,
    style: ee
  }), g));
  return ue && (Ze = c.createElement(nr, {
    onResize: Ke,
    disabled: !he
  }, Ze)), Ze
}
var zr = c.forwardRef(KI);
zr.displayName = "Overflow";
zr.Item = _S;
zr.RESPONSIVE = kS;
zr.INVALIDATE = zS;
var Ih = c.createContext(null);

function Nh(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}

function GI(e, t, n, r) {
  return c.useMemo(function() {
    var o = Nh(n ?? t),
      i = Nh(r ?? t),
      a = new Set(o),
      l = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [a, l]
  }, [e, t, n, r])
}

function XI() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}

function qI(e, t, n, r) {
  for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var l, s = i[a];
    if (XI((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r)) return "".concat(t, "-placement-").concat(s)
  }
  return ""
}

function Mh(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null)
}

function Rl(e) {
  return e.ownerDocument.defaultView
}

function dv(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n;) {
    var o = Rl(n).getComputedStyle(n),
      i = o.overflowX,
      a = o.overflowY,
      l = o.overflow;
    [i, a, l].some(function(s) {
      return r.includes(s)
    }) && t.push(n), n = n.parentElement
  }
  return t
}

function fl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e
}

function ba(e) {
  return fl(parseFloat(e), 0)
}

function _h(e, t) {
  var n = D({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var o = Rl(r).getComputedStyle(r),
        i = o.overflow,
        a = o.overflowClipMargin,
        l = o.borderTopWidth,
        s = o.borderBottomWidth,
        u = o.borderLeftWidth,
        d = o.borderRightWidth,
        f = r.getBoundingClientRect(),
        v = r.offsetHeight,
        y = r.clientHeight,
        b = r.offsetWidth,
        h = r.clientWidth,
        C = ba(l),
        g = ba(s),
        p = ba(u),
        m = ba(d),
        S = fl(Math.round(f.width / b * 1e3) / 1e3),
        E = fl(Math.round(f.height / v * 1e3) / 1e3),
        w = (b - h - p - m) * S,
        x = (v - y - C - g) * E,
        R = C * E,
        P = g * E,
        O = p * S,
        _ = m * S,
        N = 0,
        I = 0;
      if (i === "clip") {
        var A = ba(a);
        N = A * S, I = A * E
      }
      var j = f.x + O - N,
        M = f.y + R - I,
        $ = j + f.width + 2 * N - O - _ - w,
        T = M + f.height + 2 * I - R - P - x;
      n.left = Math.max(n.left, j), n.top = Math.max(n.top, M), n.right = Math.min(n.right, $), n.bottom = Math.min(n.bottom, T)
    }
  }), n
}

function kh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = "".concat(t),
    r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n)
}

function zh(e, t) {
  var n = t || [],
    r = H(n, 2),
    o = r[0],
    i = r[1];
  return [kh(e.width, o), kh(e.height, i)]
}

function Lh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]]
}

function ai(e, t) {
  var n = t[0],
    r = t[1],
    o, i;
  return n === "t" ? i = e.y : n === "b" ? i = e.y + e.height : i = e.y + e.height / 2, r === "l" ? o = e.x : r === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  }
}

function Kr(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, o) {
    return o === t ? n[r] || "c" : r
  }).join("")
}

function QI(e, t, n, r, o, i, a) {
  var l = c.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: o[r] || {}
    }),
    s = H(l, 2),
    u = s[0],
    d = s[1],
    f = c.useRef(0),
    v = c.useMemo(function() {
      return t ? dv(t) : []
    }, [t]),
    y = c.useRef({}),
    b = function() {
      y.current = {}
    };
  e || b();
  var h = bn(function() {
      if (t && n && e) {
        let pn = function(sa, Or) {
            var ho = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : re,
              _l = k.x + sa,
              kl = k.y + Or,
              Cu = _l + Z,
              xu = kl + G,
              ve = Math.max(_l, ho.left),
              we = Math.max(kl, ho.top),
              ft = Math.min(Cu, ho.right),
              Et = Math.min(xu, ho.bottom);
            return Math.max(0, (ft - ve) * (Et - we))
          },
          go = function() {
            Pt = k.y + Se, In = Pt + G, an = k.x + se, Ge = an + Z
          };
        var mo = pn,
          em = go,
          p, m, S = t,
          E = S.ownerDocument,
          w = Rl(S),
          x = w.getComputedStyle(S),
          R = x.width,
          P = x.height,
          O = x.position,
          _ = S.style.left,
          N = S.style.top,
          I = S.style.right,
          A = S.style.bottom,
          j = D(D({}, o[r]), i),
          M = E.createElement("div");
        (p = S.parentElement) === null || p === void 0 || p.appendChild(M), M.style.left = "".concat(S.offsetLeft, "px"), M.style.top = "".concat(S.offsetTop, "px"), M.style.position = O, M.style.height = "".concat(S.offsetHeight, "px"), M.style.width = "".concat(S.offsetWidth, "px"), S.style.left = "0", S.style.top = "0", S.style.right = "auto", S.style.bottom = "auto";
        var $;
        if (Array.isArray(n)) $ = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
        else {
          var T = n.getBoundingClientRect();
          $ = {
            x: T.x,
            y: T.y,
            width: T.width,
            height: T.height
          }
        }
        var k = S.getBoundingClientRect(),
          L = E.documentElement,
          B = L.clientWidth,
          F = L.clientHeight,
          V = L.scrollWidth,
          K = L.scrollHeight,
          Q = L.scrollTop,
          W = L.scrollLeft,
          G = k.height,
          Z = k.width,
          fe = $.height,
          le = $.width,
          oe = {
            left: 0,
            top: 0,
            right: B,
            bottom: F
          },
          Oe = {
            left: -W,
            top: -Q,
            right: V - W,
            bottom: K - Q
          },
          Ce = j.htmlRegion,
          Ue = "visible",
          xe = "visibleFirst";
        Ce !== "scroll" && Ce !== xe && (Ce = Ue);
        var pe = Ce === xe,
          ye = _h(Oe, v),
          Y = _h(oe, v),
          re = Ce === Ue ? Y : ye,
          ne = pe ? Y : re;
        S.style.left = "auto", S.style.top = "auto", S.style.right = "0", S.style.bottom = "0";
        var ie = S.getBoundingClientRect();
        S.style.left = _, S.style.top = N, S.style.right = I, S.style.bottom = A, (m = S.parentElement) === null || m === void 0 || m.removeChild(M);
        var be = fl(Math.round(Z / parseFloat(R) * 1e3) / 1e3),
          ke = fl(Math.round(G / parseFloat(P) * 1e3) / 1e3);
        if (be === 0 || ke === 0 || cc(n) && !_p(n)) return;
        var De = j.offset,
          ue = j.targetOffset,
          he = zh(k, De),
          Re = H(he, 2),
          rt = Re[0],
          Ie = Re[1],
          Be = zh($, ue),
          Ae = H(Be, 2),
          pt = Ae[0],
          je = Ae[1];
        $.x -= pt, $.y -= je;
        var Ke = j.points || [],
          Ne = H(Ke, 2),
          ot = Ne[0],
          Qt = Ne[1],
          Pe = Lh(Qt),
          lt = Lh(ot),
          ee = ai($, Pe),
          J = ai(k, lt),
          ge = D({}, j),
          se = ee.x - J.x + rt,
          Se = ee.y - J.y + Ie,
          Xe = pn(se, Se),
          Ze = pn(se, Se, Y),
          me = ai($, ["t", "l"]),
          Ee = ai(k, ["t", "l"]),
          Te = ai($, ["b", "r"]),
          St = ai(k, ["b", "r"]),
          Je = j.overflow || {},
          xr = Je.adjustX,
          wr = Je.adjustY,
          Tn = Je.shiftX,
          fn = Je.shiftY,
          on = function(Or) {
            return typeof Or == "boolean" ? Or : Or >= 0
          },
          Pt, In, an, Ge;
        go();
        var $e = on(wr),
          et = lt[0] === Pe[0];
        if ($e && lt[0] === "t" && (In > ne.bottom || y.current.bt)) {
          var st = Se;
          et ? st -= G - fe : st = me.y - St.y - Ie;
          var ct = pn(se, st),
            Wt = pn(se, st, Y);
          ct > Xe || ct === Xe && (!pe || Wt >= Ze) ? (y.current.bt = !0, Se = st, Ie = -Ie, ge.points = [Kr(lt, 0), Kr(Pe, 0)]) : y.current.bt = !1
        }
        if ($e && lt[0] === "b" && (Pt < ne.top || y.current.tb)) {
          var Vn = Se;
          et ? Vn += G - fe : Vn = Te.y - Ee.y - Ie;
          var Qo = pn(se, Vn),
            Yo = pn(se, Vn, Y);
          Qo > Xe || Qo === Xe && (!pe || Yo >= Ze) ? (y.current.tb = !0, Se = Vn, Ie = -Ie, ge.points = [Kr(lt, 0), Kr(Pe, 0)]) : y.current.tb = !1
        }
        var dr = on(xr),
          Vr = lt[1] === Pe[1];
        if (dr && lt[1] === "l" && (Ge > ne.right || y.current.rl)) {
          var Er = se;
          Vr ? Er -= Z - le : Er = me.x - St.x - rt;
          var Zo = pn(Er, Se),
            oa = pn(Er, Se, Y);
          Zo > Xe || Zo === Xe && (!pe || oa >= Ze) ? (y.current.rl = !0, se = Er, rt = -rt, ge.points = [Kr(lt, 1), Kr(Pe, 1)]) : y.current.rl = !1
        }
        if (dr && lt[1] === "r" && (an < ne.left || y.current.lr)) {
          var vn = se;
          Vr ? vn += Z - le : vn = Te.x - Ee.x - rt;
          var Un = pn(vn, Se),
            ia = pn(vn, Se, Y);
          Un > Xe || Un === Xe && (!pe || ia >= Ze) ? (y.current.lr = !0, se = vn, rt = -rt, ge.points = [Kr(lt, 1), Kr(Pe, 1)]) : y.current.lr = !1
        }
        go();
        var fr = Tn === !0 ? 0 : Tn;
        typeof fr == "number" && (an < Y.left && (se -= an - Y.left - rt, $.x + le < Y.left + fr && (se += $.x - Y.left + le - fr)), Ge > Y.right && (se -= Ge - Y.right - rt, $.x > Y.right - fr && (se += $.x - Y.right + fr)));
        var Nn = fn === !0 ? 0 : fn;
        typeof Nn == "number" && (Pt < Y.top && (Se -= Pt - Y.top - Ie, $.y + fe < Y.top + Nn && (Se += $.y - Y.top + fe - Nn)), In > Y.bottom && (Se -= In - Y.bottom - Ie, $.y > Y.bottom - Nn && (Se += $.y - Y.bottom + Nn)));
        var Mn = k.x + se,
          Jo = Mn + Z,
          vr = k.y + Se,
          pr = vr + G,
          ei = $.x,
          aa = ei + le,
          it = $.y,
          He = it + fe,
          tt = Math.max(Mn, ei),
          kt = Math.min(Jo, aa),
          jt = (tt + kt) / 2,
          _n = jt - Mn,
          $r = Math.max(vr, it),
          la = Math.min(pr, He),
          Ml = ($r + la) / 2,
          yu = Ml - vr;
        a == null || a(t, ge);
        var bu = ie.right - k.x - (se + k.width),
          Su = ie.bottom - k.y - (Se + k.height);
        d({
          ready: !0,
          offsetX: se / be,
          offsetY: Se / ke,
          offsetR: bu / be,
          offsetB: Su / ke,
          arrowX: _n / be,
          arrowY: yu / ke,
          scaleX: be,
          scaleY: ke,
          align: ge
        })
      }
    }),
    C = function() {
      f.current += 1;
      var m = f.current;
      Promise.resolve().then(function() {
        f.current === m && h()
      })
    },
    g = function() {
      d(function(m) {
        return D(D({}, m), {}, {
          ready: !1
        })
      })
    };
  return gt(g, [r]), gt(function() {
    e || g()
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, C]
}

function YI(e, t, n, r, o) {
  gt(function() {
    if (e && t && n) {
      let v = function() {
        r(), o()
      };
      var f = v,
        i = t,
        a = n,
        l = dv(i),
        s = dv(a),
        u = Rl(a),
        d = new Set([u].concat(ce(l), ce(s)));
      return d.forEach(function(y) {
          y.addEventListener("scroll", v, {
            passive: !0
          })
        }), u.addEventListener("resize", v, {
          passive: !0
        }), r(),
        function() {
          d.forEach(function(y) {
            y.removeEventListener("scroll", v), u.removeEventListener("resize", v)
          })
        }
    }
  }, [e, t, n])
}

function ZI(e, t, n, r, o, i, a, l) {
  var s = c.useRef(e),
    u = c.useRef(!1);
  s.current !== e && (u.current = !0, s.current = e), c.useEffect(function() {
    var d = It(function() {
      u.current = !1
    });
    return function() {
      It.cancel(d)
    }
  }, [e]), c.useEffect(function() {
    if (t && r && (!o || i)) {
      var d = function() {
          var w = !1,
            x = function(O) {
              var _ = O.target;
              w = a(_)
            },
            R = function(O) {
              var _ = O.target;
              !u.current && s.current && !w && !a(_) && l(!1)
            };
          return [x, R]
        },
        f = d(),
        v = H(f, 2),
        y = v[0],
        b = v[1],
        h = d(),
        C = H(h, 2),
        g = C[0],
        p = C[1],
        m = Rl(r);
      m.addEventListener("mousedown", y, !0), m.addEventListener("click", b, !0), m.addEventListener("contextmenu", b, !0);
      var S = mc(n);
      return S && (S.addEventListener("mousedown", g, !0), S.addEventListener("click", p, !0), S.addEventListener("contextmenu", p, !0)),
        function() {
          m.removeEventListener("mousedown", y, !0), m.removeEventListener("click", b, !0), m.removeEventListener("contextmenu", b, !0), S && (S.removeEventListener("mousedown", g, !0), S.removeEventListener("click", p, !0), S.removeEventListener("contextmenu", p, !0))
        }
    }
  }, [t, n, r, o, i])
}

function JI(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    o = e.arrowPos,
    i = r || {},
    a = i.className,
    l = i.content,
    s = o.x,
    u = s === void 0 ? 0 : s,
    d = o.y,
    f = d === void 0 ? 0 : d,
    v = c.useRef();
  if (!n || !n.points) return null;
  var y = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var b = n.points[0],
      h = n.points[1],
      C = b[0],
      g = b[1],
      p = h[0],
      m = h[1];
    C === p || !["t", "b"].includes(C) ? y.top = f : C === "t" ? y.top = 0 : y.bottom = 0, g === m || !["l", "r"].includes(g) ? y.left = u : g === "l" ? y.left = 0 : y.right = 0
  }
  return c.createElement("div", {
    ref: v,
    className: U("".concat(t, "-arrow"), a),
    style: y
  }, l)
}

function eN(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    o = e.mask,
    i = e.motion;
  return o ? c.createElement(Wr, de({}, i, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(a) {
    var l = a.className;
    return c.createElement("div", {
      style: {
        zIndex: r
      },
      className: U("".concat(t, "-mask"), l)
    })
  }) : null
}
var tN = c.memo(function(e) {
    var t = e.children;
    return t
  }, function(e, t) {
    return t.cache
  }),
  nN = c.forwardRef(function(e, t) {
    var n = e.popup,
      r = e.className,
      o = e.prefixCls,
      i = e.style,
      a = e.target,
      l = e.onVisibleChanged,
      s = e.open,
      u = e.keepDom,
      d = e.onClick,
      f = e.mask,
      v = e.arrow,
      y = e.arrowPos,
      b = e.align,
      h = e.motion,
      C = e.maskMotion,
      g = e.forceRender,
      p = e.getPopupContainer,
      m = e.autoDestroy,
      S = e.portal,
      E = e.zIndex,
      w = e.onMouseEnter,
      x = e.onMouseLeave,
      R = e.onPointerEnter,
      P = e.ready,
      O = e.offsetX,
      _ = e.offsetY,
      N = e.offsetR,
      I = e.offsetB,
      A = e.onAlign,
      j = e.onPrepare,
      M = e.stretch,
      $ = e.targetWidth,
      T = e.targetHeight,
      k = typeof n == "function" ? n() : n,
      L = s || u,
      B = (p == null ? void 0 : p.length) > 0,
      F = c.useState(!p || !B),
      V = H(F, 2),
      K = V[0],
      Q = V[1];
    if (gt(function() {
        !K && B && a && Q(!0)
      }, [K, B, a]), !K) return null;
    var W = "auto",
      G = {
        left: "-1000vw",
        top: "-1000vh",
        right: W,
        bottom: W
      };
    if (P || !s) {
      var Z, fe = b.points,
        le = b.dynamicInset || ((Z = b._experimental) === null || Z === void 0 ? void 0 : Z.dynamicInset),
        oe = le && fe[0][1] === "r",
        Oe = le && fe[0][0] === "b";
      oe ? (G.right = N, G.left = W) : (G.left = O, G.right = W), Oe ? (G.bottom = I, G.top = W) : (G.top = _, G.bottom = W)
    }
    var Ce = {};
    return M && (M.includes("height") && T ? Ce.height = T : M.includes("minHeight") && T && (Ce.minHeight = T), M.includes("width") && $ ? Ce.width = $ : M.includes("minWidth") && $ && (Ce.minWidth = $)), s || (Ce.pointerEvents = "none"), c.createElement(S, {
      open: g || L,
      getContainer: p && function() {
        return p(a)
      },
      autoDestroy: m
    }, c.createElement(eN, {
      prefixCls: o,
      open: s,
      zIndex: E,
      mask: f,
      motion: C
    }), c.createElement(nr, {
      onResize: A,
      disabled: !s
    }, function(Ue) {
      return c.createElement(Wr, de({
        motionAppear: !0,
        motionEnter: !0,
        motionLeave: !0,
        removeOnLeave: !1,
        forceRender: g,
        leavedClassName: "".concat(o, "-hidden")
      }, h, {
        onAppearPrepare: j,
        onEnterPrepare: j,
        visible: s,
        onVisibleChanged: function(pe) {
          var ye;
          h == null || (ye = h.onVisibleChanged) === null || ye === void 0 || ye.call(h, pe), l(pe)
        }
      }), function(xe, pe) {
        var ye = xe.className,
          Y = xe.style,
          re = U(o, ye, r);
        return c.createElement("div", {
          ref: Cr(Ue, t, pe),
          className: re,
          style: D(D(D(D({
            "--arrow-x": "".concat(y.x || 0, "px"),
            "--arrow-y": "".concat(y.y || 0, "px")
          }, G), Ce), Y), {}, {
            boxSizing: "border-box",
            zIndex: E
          }, i),
          onMouseEnter: w,
          onMouseLeave: x,
          onPointerEnter: R,
          onClick: d
        }, v && c.createElement(JI, {
          prefixCls: o,
          arrow: v,
          arrowPos: y,
          align: b
        }), c.createElement(tN, {
          cache: !s
        }, k))
      })
    }))
  }),
  rN = c.forwardRef(function(e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      o = Wo(n),
      i = c.useCallback(function(l) {
        Pv(t, r ? r(l) : l)
      }, [r]),
      a = hl(i, n.ref);
    return o ? c.cloneElement(n, {
      ref: a
    }) : n
  }),
  oN = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];

function iN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jp,
    t = c.forwardRef(function(n, r) {
      var o = n.prefixCls,
        i = o === void 0 ? "rc-trigger-popup" : o,
        a = n.children,
        l = n.action,
        s = l === void 0 ? "hover" : l,
        u = n.showAction,
        d = n.hideAction,
        f = n.popupVisible,
        v = n.defaultPopupVisible,
        y = n.onPopupVisibleChange,
        b = n.afterPopupVisibleChange,
        h = n.mouseEnterDelay,
        C = n.mouseLeaveDelay,
        g = C === void 0 ? .1 : C,
        p = n.focusDelay,
        m = n.blurDelay,
        S = n.mask,
        E = n.maskClosable,
        w = E === void 0 ? !0 : E,
        x = n.getPopupContainer,
        R = n.forceRender,
        P = n.autoDestroy,
        O = n.destroyPopupOnHide,
        _ = n.popup,
        N = n.popupClassName,
        I = n.popupStyle,
        A = n.popupPlacement,
        j = n.builtinPlacements,
        M = j === void 0 ? {} : j,
        $ = n.popupAlign,
        T = n.zIndex,
        k = n.stretch,
        L = n.getPopupClassNameFromAlign,
        B = n.alignPoint,
        F = n.onPopupClick,
        V = n.onPopupAlign,
        K = n.arrow,
        Q = n.popupMotion,
        W = n.maskMotion,
        G = n.popupTransitionName,
        Z = n.popupAnimation,
        fe = n.maskTransitionName,
        le = n.maskAnimation,
        oe = n.className,
        Oe = n.getTriggerDOMNode,
        Ce = Fe(n, oN),
        Ue = P || O || !1,
        xe = c.useState(!1),
        pe = H(xe, 2),
        ye = pe[0],
        Y = pe[1];
      gt(function() {
        Y(MS())
      }, []);
      var re = c.useRef({}),
        ne = c.useContext(Ih),
        ie = c.useMemo(function() {
          return {
            registerSubPopup: function(we, ft) {
              re.current[we] = ft, ne == null || ne.registerSubPopup(we, ft)
            }
          }
        }, [ne]),
        be = aS(),
        ke = c.useState(null),
        De = H(ke, 2),
        ue = De[0],
        he = De[1],
        Re = bn(function(ve) {
          cc(ve) && ue !== ve && he(ve), ne == null || ne.registerSubPopup(be, ve)
        }),
        rt = c.useState(null),
        Ie = H(rt, 2),
        Be = Ie[0],
        Ae = Ie[1],
        pt = bn(function(ve) {
          cc(ve) && Be !== ve && Ae(ve)
        }),
        je = c.Children.only(a),
        Ke = (je == null ? void 0 : je.props) || {},
        Ne = {},
        ot = bn(function(ve) {
          var we, ft, Et = Be;
          return (Et == null ? void 0 : Et.contains(ve)) || ((we = mc(Et)) === null || we === void 0 ? void 0 : we.host) === ve || ve === Et || (ue == null ? void 0 : ue.contains(ve)) || ((ft = mc(ue)) === null || ft === void 0 ? void 0 : ft.host) === ve || ve === ue || Object.values(re.current).some(function(Ct) {
            return (Ct == null ? void 0 : Ct.contains(ve)) || ve === Ct
          })
        }),
        Qt = Mh(i, Q, Z, G),
        Pe = Mh(i, W, le, fe),
        lt = c.useState(v || !1),
        ee = H(lt, 2),
        J = ee[0],
        ge = ee[1],
        se = f ?? J,
        Se = bn(function(ve) {
          f === void 0 && ge(ve)
        });
      gt(function() {
        ge(f || !1)
      }, [f]);
      var Xe = c.useRef(se);
      Xe.current = se;
      var Ze = bn(function(ve) {
          Ko.flushSync(function() {
            se !== ve && (Se(ve), y == null || y(ve))
          })
        }),
        me = c.useRef(),
        Ee = function() {
          clearTimeout(me.current)
        },
        Te = function(we) {
          var ft = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          Ee(), ft === 0 ? Ze(we) : me.current = setTimeout(function() {
            Ze(we)
          }, ft * 1e3)
        };
      c.useEffect(function() {
        return Ee
      }, []);
      var St = c.useState(!1),
        Je = H(St, 2),
        xr = Je[0],
        wr = Je[1];
      gt(function(ve) {
        (!ve || se) && wr(!0)
      }, [se]);
      var Tn = c.useState(null),
        fn = H(Tn, 2),
        on = fn[0],
        Pt = fn[1],
        In = c.useState([0, 0]),
        an = H(In, 2),
        Ge = an[0],
        $e = an[1],
        et = function(we) {
          $e([we.clientX, we.clientY])
        },
        st = QI(se, ue, B ? Ge : Be, A, M, $, V),
        ct = H(st, 11),
        Wt = ct[0],
        Vn = ct[1],
        Qo = ct[2],
        Yo = ct[3],
        dr = ct[4],
        Vr = ct[5],
        Er = ct[6],
        Zo = ct[7],
        oa = ct[8],
        vn = ct[9],
        Un = ct[10],
        ia = GI(ye, s, u, d),
        fr = H(ia, 2),
        Nn = fr[0],
        Mn = fr[1],
        Jo = Nn.has("click"),
        vr = Mn.has("click") || Mn.has("contextMenu"),
        pr = bn(function() {
          xr || Un()
        }),
        ei = function() {
          Xe.current && B && vr && Te(!1)
        };
      YI(se, Be, ue, pr, ei), gt(function() {
        pr()
      }, [Ge, A]), gt(function() {
        se && !(M != null && M[A]) && pr()
      }, [JSON.stringify($)]);
      var aa = c.useMemo(function() {
        var ve = qI(M, i, vn, B);
        return U(ve, L == null ? void 0 : L(vn))
      }, [vn, L, M, i, B]);
      c.useImperativeHandle(r, function() {
        return {
          forceAlign: pr
        }
      });
      var it = c.useState(0),
        He = H(it, 2),
        tt = He[0],
        kt = He[1],
        jt = c.useState(0),
        _n = H(jt, 2),
        $r = _n[0],
        la = _n[1],
        Ml = function() {
          if (k && Be) {
            var we = Be.getBoundingClientRect();
            kt(we.width), la(we.height)
          }
        },
        yu = function() {
          Ml(), pr()
        },
        bu = function(we) {
          wr(!1), Un(), b == null || b(we)
        },
        Su = function() {
          return new Promise(function(we) {
            Ml(), Pt(function() {
              return we
            })
          })
        };
      gt(function() {
        on && (Un(), on(), Pt(null))
      }, [on]);

      function mo(ve, we, ft, Et) {
        Ne[ve] = function(Ct) {
          var zl;
          Et == null || Et(Ct), Te(we, ft);
          for (var wu = arguments.length, tm = new Array(wu > 1 ? wu - 1 : 0), Ll = 1; Ll < wu; Ll++) tm[Ll - 1] = arguments[Ll];
          (zl = Ke[ve]) === null || zl === void 0 || zl.call.apply(zl, [Ke, Ct].concat(tm))
        }
      }(Jo || vr) && (Ne.onClick = function(ve) {
        var we;
        Xe.current && vr ? Te(!1) : !Xe.current && Jo && (et(ve), Te(!0));
        for (var ft = arguments.length, Et = new Array(ft > 1 ? ft - 1 : 0), Ct = 1; Ct < ft; Ct++) Et[Ct - 1] = arguments[Ct];
        (we = Ke.onClick) === null || we === void 0 || we.call.apply(we, [Ke, ve].concat(Et))
      }), ZI(se, vr, Be, ue, S, w, ot, Te);
      var em = Nn.has("hover"),
        pn = Mn.has("hover"),
        go, sa;
      em && (mo("onMouseEnter", !0, h, function(ve) {
        et(ve)
      }), mo("onPointerEnter", !0, h, function(ve) {
        et(ve)
      }), go = function() {
        (se || xr) && Te(!0, h)
      }, B && (Ne.onMouseMove = function(ve) {
        var we;
        (we = Ke.onMouseMove) === null || we === void 0 || we.call(Ke, ve)
      })), pn && (mo("onMouseLeave", !1, g), mo("onPointerLeave", !1, g), sa = function() {
        Te(!1, g)
      }), Nn.has("focus") && mo("onFocus", !0, p), Mn.has("focus") && mo("onBlur", !1, m), Nn.has("contextMenu") && (Ne.onContextMenu = function(ve) {
        var we;
        Xe.current && Mn.has("contextMenu") ? Te(!1) : (et(ve), Te(!0)), ve.preventDefault();
        for (var ft = arguments.length, Et = new Array(ft > 1 ? ft - 1 : 0), Ct = 1; Ct < ft; Ct++) Et[Ct - 1] = arguments[Ct];
        (we = Ke.onContextMenu) === null || we === void 0 || we.call.apply(we, [Ke, ve].concat(Et))
      }), oe && (Ne.className = U(Ke.className, oe));
      var Or = D(D({}, Ke), Ne),
        ho = {},
        _l = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
      _l.forEach(function(ve) {
        Ce[ve] && (ho[ve] = function() {
          for (var we, ft = arguments.length, Et = new Array(ft), Ct = 0; Ct < ft; Ct++) Et[Ct] = arguments[Ct];
          (we = Or[ve]) === null || we === void 0 || we.call.apply(we, [Or].concat(Et)), Ce[ve].apply(Ce, Et)
        })
      });
      var kl = c.cloneElement(je, D(D({}, Or), ho)),
        Cu = {
          x: Vr,
          y: Er
        },
        xu = K ? D({}, K !== !0 ? K : {}) : null;
      return c.createElement(c.Fragment, null, c.createElement(nr, {
        disabled: !se,
        ref: pt,
        onResize: yu
      }, c.createElement(rN, {
        getTriggerDOMNode: Oe
      }, kl)), c.createElement(Ih.Provider, {
        value: ie
      }, c.createElement(nN, {
        portal: e,
        ref: Re,
        prefixCls: i,
        popup: _,
        className: U(N, aa),
        style: I,
        target: Be,
        onMouseEnter: go,
        onMouseLeave: sa,
        onPointerEnter: go,
        zIndex: T,
        open: se,
        keepDom: xr,
        onClick: F,
        mask: S,
        motion: Qt,
        maskMotion: Pe,
        onVisibleChanged: bu,
        onPrepare: Su,
        forceRender: R,
        autoDestroy: Ue,
        getPopupContainer: x,
        align: vn,
        arrow: xu,
        arrowPos: Cu,
        ready: Wt,
        offsetX: Vn,
        offsetY: Qo,
        offsetR: Yo,
        offsetB: dr,
        onAlign: pr,
        stretch: k,
        targetWidth: tt / Zo,
        targetHeight: $r / oa
      })))
    });
  return t
}
const Hp = iN(jp);

function Ah(e, t, n) {
  return U({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  })
}
const aN = (e, t) => t || e;
var lN = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
      }
    }]
  },
  name: "check",
  theme: "outlined"
};
const sN = lN;
var cN = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: sN
  }))
};
const uN = c.forwardRef(cN),
  LS = ["xxl", "xl", "lg", "md", "sm", "xs"],
  dN = e => ({
    xs: `(max-width: ${e.screenXSMax}px)`,
    sm: `(min-width: ${e.screenSM}px)`,
    md: `(min-width: ${e.screenMD}px)`,
    lg: `(min-width: ${e.screenLG}px)`,
    xl: `(min-width: ${e.screenXL}px)`,
    xxl: `(min-width: ${e.screenXXL}px)`
  }),
  fN = e => {
    const t = e,
      n = [].concat(LS).reverse();
    return n.forEach((r, o) => {
      const i = r.toUpperCase(),
        a = `screen${i}Min`,
        l = `screen${i}`;
      if (!(t[a] <= t[l])) throw new Error(`${a}<=${l} fails : !(${t[a]}<=${t[l]})`);
      if (o < n.length - 1) {
        const s = `screen${i}Max`;
        if (!(t[l] <= t[s])) throw new Error(`${l}<=${s} fails : !(${t[l]}<=${t[s]})`);
        const d = `screen${n[o+1].toUpperCase()}Min`;
        if (!(t[s] <= t[d])) throw new Error(`${s}<=${d} fails : !(${t[s]}<=${t[d]})`)
      }
    }), e
  };

function vN() {
  const [, e] = Go(), t = dN(fN(e));
  return X.useMemo(() => {
    const n = new Map;
    let r = -1,
      o = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return o = i, n.forEach(a => a(o)), n.size >= 1
      },
      subscribe(i) {
        return n.size || this.register(), r += 1, n.set(r, i), i(o), r
      },
      unsubscribe(i) {
        n.delete(i), n.size || this.unregister()
      },
      unregister() {
        Object.keys(t).forEach(i => {
          const a = t[i],
            l = this.matchHandlers[a];
          l == null || l.mql.removeListener(l == null ? void 0 : l.listener)
        }), n.clear()
      },
      register() {
        Object.keys(t).forEach(i => {
          const a = t[i],
            l = u => {
              let {
                matches: d
              } = u;
              this.dispatch(Object.assign(Object.assign({}, o), {
                [i]: d
              }))
            },
            s = window.matchMedia(a);
          s.addListener(l), this.matchHandlers[a] = {
            mql: s,
            listener: l
          }, l(s)
        })
      },
      responsiveMap: t
    }
  }, [e])
}

function pN() {
  const [, e] = c.useReducer(t => t + 1, 0);
  return e
}

function mN() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  const t = c.useRef({}),
    n = pN(),
    r = vN();
  return gt(() => {
    const o = r.subscribe(i => {
      t.current = i, e && n()
    });
    return () => r.unsubscribe(o)
  }, []), t.current
}
const gN = c.createContext({}),
  fv = gN,
  hN = e => {
    const {
      antCls: t,
      componentCls: n,
      iconCls: r,
      avatarBg: o,
      avatarColor: i,
      containerSize: a,
      containerSizeLG: l,
      containerSizeSM: s,
      textFontSize: u,
      textFontSizeLG: d,
      textFontSizeSM: f,
      borderRadius: v,
      borderRadiusLG: y,
      borderRadiusSM: b,
      lineWidth: h,
      lineType: C
    } = e, g = (p, m, S) => ({
      width: p,
      height: p,
      lineHeight: `${p-h*2}px`,
      borderRadius: "50%",
      [`&${n}-square`]: {
        borderRadius: S
      },
      [`${n}-string`]: {
        position: "absolute",
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transformOrigin: "0 center"
      },
      [`&${n}-icon`]: {
        fontSize: m,
        [`> ${r}`]: {
          margin: 0
        }
      }
    });
    return {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, cr(e)), {
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        color: i,
        whiteSpace: "nowrap",
        textAlign: "center",
        verticalAlign: "middle",
        background: o,
        border: `${h}px ${C} transparent`,
        "&-image": {
          background: "transparent"
        },
        [`${t}-image-img`]: {
          display: "block"
        }
      }), g(a, u, v)), {
        "&-lg": Object.assign({}, g(l, d, y)),
        "&-sm": Object.assign({}, g(s, f, b)),
        "> img": {
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      })
    }
  },
  yN = e => {
    const {
      componentCls: t,
      groupBorderColor: n,
      groupOverlapping: r,
      groupSpace: o
    } = e;
    return {
      [`${t}-group`]: {
        display: "inline-flex",
        [`${t}`]: {
          borderColor: n
        },
        "> *:not(:first-child)": {
          marginInlineStart: r
        }
      },
      [`${t}-group-popover`]: {
        [`${t} + ${t}`]: {
          marginInlineStart: o
        }
      }
    }
  },
  AS = rn("Avatar", e => {
    const {
      colorTextLightSolid: t,
      colorTextPlaceholder: n
    } = e, r = wt(e, {
      avatarBg: n,
      avatarColor: t
    });
    return [hN(r), yN(r)]
  }, e => {
    const {
      controlHeight: t,
      controlHeightLG: n,
      controlHeightSM: r,
      fontSize: o,
      fontSizeLG: i,
      fontSizeXL: a,
      fontSizeHeading3: l,
      marginXS: s,
      marginXXS: u,
      colorBorderBg: d
    } = e;
    return {
      containerSize: t,
      containerSizeLG: n,
      containerSizeSM: r,
      textFontSize: Math.round((i + a) / 2),
      textFontSizeLG: l,
      textFontSizeSM: o,
      groupSpace: u,
      groupOverlapping: -s,
      groupBorderColor: d
    }
  });
var bN = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const SN = (e, t) => {
    const [n, r] = c.useState(1), [o, i] = c.useState(!1), [a, l] = c.useState(!0), s = c.useRef(null), u = c.useRef(null), d = Cr(t, s), {
      getPrefixCls: f,
      avatar: v
    } = c.useContext(Le), y = c.useContext(fv), b = () => {
      if (!u.current || !s.current) return;
      const W = u.current.offsetWidth,
        G = s.current.offsetWidth;
      if (W !== 0 && G !== 0) {
        const {
          gap: Z = 4
        } = e;
        Z * 2 < G && r(G - Z * 2 < W ? (G - Z * 2) / W : 1)
      }
    };
    c.useEffect(() => {
      i(!0)
    }, []), c.useEffect(() => {
      l(!0), r(1)
    }, [e.src]), c.useEffect(b, [e.gap]);
    const h = () => {
        const {
          onError: W
        } = e;
        (W == null ? void 0 : W()) !== !1 && l(!1)
      },
      {
        prefixCls: C,
        shape: g,
        size: p,
        src: m,
        srcSet: S,
        icon: E,
        className: w,
        rootClassName: x,
        alt: R,
        draggable: P,
        children: O,
        crossOrigin: _
      } = e,
      N = bN(e, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "alt", "draggable", "children", "crossOrigin"]),
      I = ta(W => {
        var G, Z;
        return (Z = (G = p ?? (y == null ? void 0 : y.size)) !== null && G !== void 0 ? G : W) !== null && Z !== void 0 ? Z : "default"
      }),
      A = Object.keys(typeof I == "object" ? I || {} : {}).some(W => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(W)),
      j = mN(A),
      M = c.useMemo(() => {
        if (typeof I != "object") return {};
        const W = LS.find(Z => j[Z]),
          G = I[W];
        return G ? {
          width: G,
          height: G,
          lineHeight: `${G}px`,
          fontSize: E ? G / 2 : 18
        } : {}
      }, [j, I]),
      $ = f("avatar", C),
      [T, k] = AS($),
      L = U({
        [`${$}-lg`]: I === "large",
        [`${$}-sm`]: I === "small"
      }),
      B = c.isValidElement(m),
      F = g || (y == null ? void 0 : y.shape) || "circle",
      V = U($, L, v == null ? void 0 : v.className, `${$}-${F}`, {
        [`${$}-image`]: B || m && a,
        [`${$}-icon`]: !!E
      }, w, x, k),
      K = typeof I == "number" ? {
        width: I,
        height: I,
        lineHeight: `${I}px`,
        fontSize: E ? I / 2 : 18
      } : {};
    let Q;
    if (typeof m == "string" && a) Q = c.createElement("img", {
      src: m,
      draggable: P,
      srcSet: S,
      onError: h,
      alt: R,
      crossOrigin: _
    });
    else if (B) Q = m;
    else if (E) Q = E;
    else if (o || n !== 1) {
      const W = `scale(${n}) translateX(-50%)`,
        G = {
          msTransform: W,
          WebkitTransform: W,
          transform: W
        },
        Z = typeof I == "number" ? {
          lineHeight: `${I}px`
        } : {};
      Q = c.createElement(nr, {
        onResize: b
      }, c.createElement("span", {
        className: `${$}-string`,
        ref: u,
        style: Object.assign(Object.assign({}, Z), G)
      }, O))
    } else Q = c.createElement("span", {
      className: `${$}-string`,
      style: {
        opacity: 0
      },
      ref: u
    }, O);
    return delete N.onError, delete N.gap, T(c.createElement("span", Object.assign({}, N, {
      style: Object.assign(Object.assign(Object.assign(Object.assign({}, K), M), v == null ? void 0 : v.style), N.style),
      className: V,
      ref: d
    }), Q))
  },
  CN = c.forwardRef(SN),
  jS = CN,
  Sc = e => e ? typeof e == "function" ? e() : e : null;
var li = {
    shiftX: 64,
    adjustY: 1
  },
  si = {
    adjustX: 1,
    shiftY: !0
  },
  zn = [0, 0],
  xN = {
    left: {
      points: ["cr", "cl"],
      overflow: si,
      offset: [-4, 0],
      targetOffset: zn
    },
    right: {
      points: ["cl", "cr"],
      overflow: si,
      offset: [4, 0],
      targetOffset: zn
    },
    top: {
      points: ["bc", "tc"],
      overflow: li,
      offset: [0, -4],
      targetOffset: zn
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: li,
      offset: [0, 4],
      targetOffset: zn
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: li,
      offset: [0, -4],
      targetOffset: zn
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: si,
      offset: [-4, 0],
      targetOffset: zn
    },
    topRight: {
      points: ["br", "tr"],
      overflow: li,
      offset: [0, -4],
      targetOffset: zn
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: si,
      offset: [4, 0],
      targetOffset: zn
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: li,
      offset: [0, 4],
      targetOffset: zn
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: si,
      offset: [4, 0],
      targetOffset: zn
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: li,
      offset: [0, 4],
      targetOffset: zn
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: si,
      offset: [-4, 0],
      targetOffset: zn
    }
  };

function Wp(e) {
  var t = e.children,
    n = e.prefixCls,
    r = e.id,
    o = e.overlayInnerStyle,
    i = e.className,
    a = e.style;
  return c.createElement("div", {
    className: U("".concat(n, "-content"), i),
    style: a
  }, c.createElement("div", {
    className: "".concat(n, "-inner"),
    id: r,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t))
}
var wN = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"],
  EN = function(t, n) {
    var r = t.overlayClassName,
      o = t.trigger,
      i = o === void 0 ? ["hover"] : o,
      a = t.mouseEnterDelay,
      l = a === void 0 ? 0 : a,
      s = t.mouseLeaveDelay,
      u = s === void 0 ? .1 : s,
      d = t.overlayStyle,
      f = t.prefixCls,
      v = f === void 0 ? "rc-tooltip" : f,
      y = t.children,
      b = t.onVisibleChange,
      h = t.afterVisibleChange,
      C = t.transitionName,
      g = t.animation,
      p = t.motion,
      m = t.placement,
      S = m === void 0 ? "right" : m,
      E = t.align,
      w = E === void 0 ? {} : E,
      x = t.destroyTooltipOnHide,
      R = x === void 0 ? !1 : x,
      P = t.defaultVisible,
      O = t.getTooltipContainer,
      _ = t.overlayInnerStyle;
    t.arrowContent;
    var N = t.overlay,
      I = t.id,
      A = t.showArrow,
      j = A === void 0 ? !0 : A,
      M = Fe(t, wN),
      $ = c.useRef(null);
    c.useImperativeHandle(n, function() {
      return $.current
    });
    var T = D({}, M);
    "visible" in t && (T.popupVisible = t.visible);
    var k = function() {
      return c.createElement(Wp, {
        key: "content",
        prefixCls: v,
        id: I,
        overlayInnerStyle: _
      }, N)
    };
    return c.createElement(Hp, de({
      popupClassName: r,
      prefixCls: v,
      popup: k,
      action: i,
      builtinPlacements: xN,
      popupPlacement: S,
      ref: $,
      popupAlign: w,
      getPopupContainer: O,
      onPopupVisibleChange: b,
      afterPopupVisibleChange: h,
      popupTransitionName: C,
      popupAnimation: g,
      popupMotion: p,
      defaultPopupVisible: P,
      autoDestroy: R,
      mouseLeaveDelay: u,
      popupStyle: d,
      mouseEnterDelay: l,
      arrow: j
    }, T), y)
  };
const $N = c.forwardRef(EN),
  FS = 8;

function DS(e) {
  const t = FS,
    {
      contentRadius: n,
      limitVerticalRadius: r
    } = e,
    o = n > 12 ? n + 2 : 12;
  return {
    dropdownArrowOffset: o,
    dropdownArrowOffsetVertical: r ? t : o
  }
}

function ds(e, t) {
  return e ? t : {}
}

function BS(e, t) {
  const {
    componentCls: n,
    sizePopupArrow: r,
    borderRadiusXS: o,
    borderRadiusOuter: i,
    boxShadowPopoverArrow: a
  } = e, {
    colorBg: l,
    contentRadius: s = e.borderRadiusLG,
    limitVerticalRadius: u,
    arrowDistance: d = 0,
    arrowPlacement: f = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = t, {
    dropdownArrowOffsetVertical: v,
    dropdownArrowOffset: y
  } = DS({
    contentRadius: s,
    limitVerticalRadius: u
  });
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, UO(r, o, i, l, a)), {
        "&:before": {
          background: l
        }
      })]
    }, ds(!!f.top, {
      [
        [`&-placement-top ${n}-arrow`, `&-placement-topLeft ${n}-arrow`, `&-placement-topRight ${n}-arrow`].join(",")
      ]: {
        bottom: d,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: y
        }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: y
        }
      }
    })), ds(!!f.bottom, {
      [
        [`&-placement-bottom ${n}-arrow`, `&-placement-bottomLeft ${n}-arrow`, `&-placement-bottomRight ${n}-arrow`].join(",")
      ]: {
        top: d,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: y
        }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: y
        }
      }
    })), ds(!!f.left, {
      [
        [`&-placement-left ${n}-arrow`, `&-placement-leftTop ${n}-arrow`, `&-placement-leftBottom ${n}-arrow`].join(",")
      ]: {
        right: {
          _skip_check_: !0,
          value: d
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${n}-arrow`]: {
        top: v
      },
      [`&-placement-leftBottom ${n}-arrow`]: {
        bottom: v
      }
    })), ds(!!f.right, {
      [
        [`&-placement-right ${n}-arrow`, `&-placement-rightTop ${n}-arrow`, `&-placement-rightBottom ${n}-arrow`].join(",")
      ]: {
        left: {
          _skip_check_: !0,
          value: d
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${n}-arrow`]: {
        top: v
      },
      [`&-placement-rightBottom ${n}-arrow`]: {
        bottom: v
      }
    }))
  }
}

function ON(e, t, n, r) {
  if (r === !1) return {
    adjustX: !1,
    adjustY: !1
  };
  const o = r && typeof r == "object" ? r : {},
    i = {};
  switch (e) {
    case "top":
    case "bottom":
      i.shiftX = t.dropdownArrowOffset * 2 + n;
      break;
    case "left":
    case "right":
      i.shiftY = t.dropdownArrowOffsetVertical * 2 + n;
      break
  }
  const a = Object.assign(Object.assign({}, i), o);
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a
}
const jh = {
    left: {
      points: ["cr", "cl"]
    },
    right: {
      points: ["cl", "cr"]
    },
    top: {
      points: ["bc", "tc"]
    },
    bottom: {
      points: ["tc", "bc"]
    },
    topLeft: {
      points: ["bl", "tl"]
    },
    leftTop: {
      points: ["tr", "tl"]
    },
    topRight: {
      points: ["br", "tr"]
    },
    rightTop: {
      points: ["tl", "tr"]
    },
    bottomRight: {
      points: ["tr", "br"]
    },
    rightBottom: {
      points: ["bl", "br"]
    },
    bottomLeft: {
      points: ["tl", "bl"]
    },
    leftBottom: {
      points: ["br", "bl"]
    }
  },
  PN = {
    topLeft: {
      points: ["bl", "tc"]
    },
    leftTop: {
      points: ["tr", "cl"]
    },
    topRight: {
      points: ["br", "tc"]
    },
    rightTop: {
      points: ["tl", "cr"]
    },
    bottomRight: {
      points: ["tr", "bc"]
    },
    rightBottom: {
      points: ["bl", "cr"]
    },
    bottomLeft: {
      points: ["tl", "bc"]
    },
    leftBottom: {
      points: ["br", "cl"]
    }
  },
  RN = new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);

function TN(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: o,
    borderRadius: i,
    visibleFirst: a
  } = e, l = t / 2, s = {};
  return Object.keys(jh).forEach(u => {
    const d = r && PN[u] || jh[u],
      f = Object.assign(Object.assign({}, d), {
        offset: [0, 0]
      });
    switch (s[u] = f, RN.has(u) && (f.autoArrow = !1), u) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -l - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = l + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -l - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = l + o;
        break
    }
    const v = DS({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (r) switch (u) {
      case "topLeft":
      case "bottomLeft":
        f.offset[0] = -v.dropdownArrowOffset - l;
        break;
      case "topRight":
      case "bottomRight":
        f.offset[0] = v.dropdownArrowOffset + l;
        break;
      case "leftTop":
      case "rightTop":
        f.offset[1] = -v.dropdownArrowOffset - l;
        break;
      case "leftBottom":
      case "rightBottom":
        f.offset[1] = v.dropdownArrowOffset + l;
        break
    }
    f.overflow = ON(u, v, t, n), a && (f.htmlRegion = "visibleFirst")
  }), s
}
const IN = e => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: r,
      tooltipBg: o,
      tooltipBorderRadius: i,
      zIndexPopup: a,
      controlHeight: l,
      boxShadowSecondary: s,
      paddingSM: u,
      paddingXS: d,
      tooltipRadiusOuter: f
    } = e;
    return [{
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, cr(e)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        width: "max-content",
        maxWidth: n,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        [`${t}-inner`]: {
          minWidth: l,
          minHeight: l,
          padding: `${u/2}px ${d}px`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: s,
          boxSizing: "border-box"
        },
        [
          ["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")
        ]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, FS)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), C1(e, (v, y) => {
        let {
          darkColor: b
        } = y;
        return {
          [`&${t}-${v}`]: {
            [`${t}-inner`]: {
              backgroundColor: b
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": b
            }
          }
        }
      })), {
        "&-rtl": {
          direction: "rtl"
        }
      })
    }, BS(wt(e, {
      borderRadiusOuter: f
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      contentRadius: i,
      limitVerticalRadius: !0
    }), {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }]
  },
  HS = (e, t) => rn("Tooltip", r => {
    if (t === !1) return [];
    const {
      borderRadius: o,
      colorTextLightSolid: i,
      colorBgDefault: a,
      borderRadiusOuter: l
    } = r, s = wt(r, {
      tooltipMaxWidth: 250,
      tooltipColor: i,
      tooltipBorderRadius: o,
      tooltipBg: a,
      tooltipRadiusOuter: l > 4 ? 4 : l
    });
    return [IN(s), Bp(r, "zoom-big-fast")]
  }, r => {
    let {
      zIndexPopupBase: o,
      colorBgSpotlight: i
    } = r;
    return {
      zIndexPopup: o + 70,
      colorBgDefault: i
    }
  }, {
    resetStyle: !1
  })(e),
  NN = cl.map(e => `${e}-inverse`),
  MN = ["success", "processing", "error", "default", "warning"];

function WS(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(ce(NN), ce(cl)).includes(e) : cl.includes(e)
}

function _N(e) {
  return MN.includes(e)
}

function VS(e, t) {
  const n = WS(t),
    r = U({
      [`${e}-${t}`]: t && n
    }),
    o = {},
    i = {};
  return t && !n && (o.background = t, i["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: i
  }
}
const kN = e => {
    const {
      prefixCls: t,
      className: n,
      placement: r = "top",
      title: o,
      color: i,
      overlayInnerStyle: a
    } = e, {
      getPrefixCls: l
    } = c.useContext(Le), s = l("tooltip", t), [u, d] = HS(s, !0), f = VS(s, i), v = f.arrowStyle, y = Object.assign(Object.assign({}, a), f.overlayStyle), b = U(d, s, `${s}-pure`, `${s}-placement-${r}`, n, f.className);
    return u(c.createElement("div", {
      className: b,
      style: v
    }, c.createElement("div", {
      className: `${s}-arrow`
    }), c.createElement(Wp, Object.assign({}, e, {
      className: d,
      prefixCls: s,
      overlayInnerStyle: y
    }), o)))
  },
  zN = kN;
var LN = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const AN = (e, t) => {
  const n = {},
    r = Object.assign({}, e);
  return t.forEach(o => {
    e && o in e && (n[o] = e[o], delete r[o])
  }), {
    picked: n,
    omitted: r
  }
};

function jN(e, t) {
  const n = e.type;
  if ((n.__ANT_BUTTON === !0 || e.type === "button") && e.props.disabled || n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading) || n.__ANT_RADIO === !0 && e.props.disabled) {
    const {
      picked: r,
      omitted: o
    } = AN(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), i = Object.assign(Object.assign({
      display: "inline-block"
    }, r), {
      cursor: "not-allowed",
      width: e.props.block ? "100%" : void 0
    }), a = Object.assign(Object.assign({}, o), {
      pointerEvents: "none"
    }), l = ea(e, {
      style: a,
      className: null
    });
    return c.createElement("span", {
      style: i,
      className: U(e.props.className, `${t}-disabled-compatible-wrapper`)
    }, l)
  }
  return e
}
const US = c.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    openClassName: i,
    getTooltipContainer: a,
    overlayClassName: l,
    color: s,
    overlayInnerStyle: u,
    children: d,
    afterOpenChange: f,
    afterVisibleChange: v,
    destroyTooltipOnHide: y,
    arrow: b = !0,
    title: h,
    overlay: C,
    builtinPlacements: g,
    arrowPointAtCenter: p = !1,
    autoAdjustOverflow: m = !0
  } = e, S = !!b, [, E] = Go(), {
    getPopupContainer: w,
    getPrefixCls: x,
    direction: R
  } = c.useContext(Le), P = Y$(), O = c.useRef(null), _ = () => {
    var re;
    (re = O.current) === null || re === void 0 || re.forceAlign()
  };
  c.useImperativeHandle(t, () => ({
    forceAlign: _,
    forcePopupAlign: () => {
      P.deprecated(!1, "forcePopupAlign", "forceAlign"), _()
    }
  }));
  const [N, I] = Sr(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), A = !h && !C && h !== 0, j = re => {
    var ne, ie;
    I(A ? !1 : re), A || ((ne = e.onOpenChange) === null || ne === void 0 || ne.call(e, re), (ie = e.onVisibleChange) === null || ie === void 0 || ie.call(e, re))
  }, M = c.useMemo(() => {
    var re, ne;
    let ie = p;
    return typeof b == "object" && (ie = (ne = (re = b.pointAtCenter) !== null && re !== void 0 ? re : b.arrowPointAtCenter) !== null && ne !== void 0 ? ne : p), g || TN({
      arrowPointAtCenter: ie,
      autoAdjustOverflow: m,
      arrowWidth: S ? E.sizePopupArrow : 0,
      borderRadius: E.borderRadius,
      offset: E.marginXXS,
      visibleFirst: !0
    })
  }, [p, b, g, E]), $ = c.useMemo(() => h === 0 ? h : C || h || "", [C, h]), T = c.createElement(G1, null, typeof $ == "function" ? $() : $), {
    getPopupContainer: k,
    placement: L = "top",
    mouseEnterDelay: B = .1,
    mouseLeaveDelay: F = .1,
    overlayStyle: V,
    rootClassName: K
  } = e, Q = LN(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), W = x("tooltip", o), G = x(), Z = e["data-popover-inject"];
  let fe = N;
  !("open" in e) && !("visible" in e) && A && (fe = !1);
  const le = jN(Mp(d) && !D1(d) ? d : c.createElement("span", null, d), W),
    oe = le.props,
    Oe = !oe.className || typeof oe.className == "string" ? U(oe.className, i || `${W}-open`) : oe.className,
    [Ce, Ue] = HS(W, !Z),
    xe = VS(W, s),
    pe = xe.arrowStyle,
    ye = Object.assign(Object.assign({}, u), xe.overlayStyle),
    Y = U(l, {
      [`${W}-rtl`]: R === "rtl"
    }, xe.className, K, Ue);
  return Ce(c.createElement($N, Object.assign({}, Q, {
    showArrow: S,
    placement: L,
    mouseEnterDelay: B,
    mouseLeaveDelay: F,
    prefixCls: W,
    overlayClassName: Y,
    overlayStyle: Object.assign(Object.assign({}, pe), V),
    getTooltipContainer: k || a || w,
    ref: O,
    builtinPlacements: M,
    overlay: T,
    visible: fe,
    onVisibleChange: j,
    afterVisibleChange: f ?? v,
    overlayInnerStyle: ye,
    arrowContent: c.createElement("span", {
      className: `${W}-arrow-content`
    }),
    motion: {
      motionName: Ho(G, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!y
  }), fe ? ea(le, {
    className: Oe
  }) : le))
});
US._InternalPanelDoNotUseOrYouWillBeFired = zN;
const Cc = US,
  FN = e => {
    const {
      componentCls: t,
      popoverColor: n,
      minWidth: r,
      fontWeightStrong: o,
      popoverPadding: i,
      boxShadowSecondary: a,
      colorTextHeading: l,
      borderRadiusLG: s,
      zIndexPopup: u,
      marginXS: d,
      colorBgElevated: f,
      popoverBg: v
    } = e;
    return [{
      [t]: Object.assign(Object.assign({}, cr(e)), {
        position: "absolute",
        top: 0,
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: u,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "--antd-arrow-background-color": f,
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${t}-content`]: {
          position: "relative"
        },
        [`${t}-inner`]: {
          backgroundColor: v,
          backgroundClip: "padding-box",
          borderRadius: s,
          boxShadow: a,
          padding: i
        },
        [`${t}-title`]: {
          minWidth: r,
          marginBottom: d,
          color: l,
          fontWeight: o
        },
        [`${t}-inner-content`]: {
          color: n
        }
      })
    }, BS(e, {
      colorBg: "var(--antd-arrow-background-color)"
    }), {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow,
        display: "inline-block",
        [`${t}-content`]: {
          display: "inline-block"
        }
      }
    }]
  },
  DN = e => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: cl.map(n => {
        const r = e[`${n}6`];
        return {
          [`&${t}-${n}`]: {
            "--antd-arrow-background-color": r,
            [`${t}-inner`]: {
              backgroundColor: r
            },
            [`${t}-arrow`]: {
              background: "transparent"
            }
          }
        }
      })
    }
  },
  BN = e => {
    const {
      componentCls: t,
      lineWidth: n,
      lineType: r,
      colorSplit: o,
      paddingSM: i,
      controlHeight: a,
      fontSize: l,
      lineHeight: s,
      padding: u
    } = e, d = a - Math.round(l * s), f = d / 2, v = d / 2 - n, y = u;
    return {
      [t]: {
        [`${t}-inner`]: {
          padding: 0
        },
        [`${t}-title`]: {
          margin: 0,
          padding: `${f}px ${y}px ${v}px`,
          borderBottom: `${n}px ${r} ${o}`
        },
        [`${t}-inner-content`]: {
          padding: `${i}px ${y}px`
        }
      }
    }
  },
  KS = rn("Popover", e => {
    const {
      colorBgElevated: t,
      colorText: n,
      wireframe: r
    } = e, o = wt(e, {
      popoverPadding: 12,
      popoverBg: t,
      popoverColor: n
    });
    return [FN(o), DN(o), r && BN(o), Bp(o, "zoom-big")]
  }, e => ({
    width: 177,
    minWidth: 177,
    zIndexPopup: e.zIndexPopupBase + 30
  }), {
    resetStyle: !1,
    deprecatedTokens: [
      ["width", "minWidth"]
    ]
  });
var HN = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const WN = (e, t, n) => {
    if (!(!t && !n)) return c.createElement(c.Fragment, null, t && c.createElement("div", {
      className: `${e}-title`
    }, Sc(t)), c.createElement("div", {
      className: `${e}-inner-content`
    }, Sc(n)))
  },
  VN = e => {
    const {
      hashId: t,
      prefixCls: n,
      className: r,
      style: o,
      placement: i = "top",
      title: a,
      content: l,
      children: s
    } = e;
    return c.createElement("div", {
      className: U(t, n, `${n}-pure`, `${n}-placement-${i}`, r),
      style: o
    }, c.createElement("div", {
      className: `${n}-arrow`
    }), c.createElement(Wp, Object.assign({}, e, {
      className: t,
      prefixCls: n
    }), s || WN(n, a, l)))
  },
  UN = e => {
    const {
      prefixCls: t
    } = e, n = HN(e, ["prefixCls"]), {
      getPrefixCls: r
    } = c.useContext(Le), o = r("popover", t), [i, a] = KS(o);
    return i(c.createElement(VN, Object.assign({}, n, {
      prefixCls: o,
      hashId: a
    })))
  },
  KN = UN;
var GN = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const XN = e => {
    let {
      title: t,
      content: n,
      prefixCls: r
    } = e;
    return c.createElement(c.Fragment, null, t && c.createElement("div", {
      className: `${r}-title`
    }, Sc(t)), c.createElement("div", {
      className: `${r}-inner-content`
    }, Sc(n)))
  },
  GS = c.forwardRef((e, t) => {
    const {
      prefixCls: n,
      title: r,
      content: o,
      overlayClassName: i,
      placement: a = "top",
      trigger: l = "hover",
      mouseEnterDelay: s = .1,
      mouseLeaveDelay: u = .1,
      overlayStyle: d = {}
    } = e, f = GN(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]), {
      getPrefixCls: v
    } = c.useContext(Le), y = v("popover", n), [b, h] = KS(y), C = v(), g = U(i, h);
    return b(c.createElement(Cc, Object.assign({
      placement: a,
      trigger: l,
      mouseEnterDelay: s,
      mouseLeaveDelay: u,
      overlayStyle: d
    }, f, {
      prefixCls: y,
      overlayClassName: g,
      ref: t,
      overlay: r || o ? c.createElement(XN, {
        prefixCls: y,
        title: r,
        content: o
      }) : null,
      transitionName: Ho(C, "zoom-big", f.transitionName),
      "data-popover-inject": !0
    })))
  });
GS._InternalPanelDoNotUseOrYouWillBeFired = KN;
const qN = GS,
  Fh = e => {
    const {
      size: t,
      shape: n
    } = c.useContext(fv), r = c.useMemo(() => ({
      size: e.size || t,
      shape: e.shape || n
    }), [e.size, e.shape, t, n]);
    return c.createElement(fv.Provider, {
      value: r
    }, e.children)
  },
  QN = e => {
    const {
      getPrefixCls: t,
      direction: n
    } = c.useContext(Le), {
      prefixCls: r,
      className: o,
      rootClassName: i,
      style: a,
      maxCount: l,
      maxStyle: s,
      size: u,
      shape: d,
      maxPopoverPlacement: f = "top",
      maxPopoverTrigger: v = "hover",
      children: y
    } = e, b = t("avatar", r), h = `${b}-group`, [C, g] = AS(b), p = U(h, {
      [`${h}-rtl`]: n === "rtl"
    }, o, i, g), m = or(y).map((E, w) => ea(E, {
      key: `avatar-key-${w}`
    })), S = m.length;
    if (l && l < S) {
      const E = m.slice(0, l),
        w = m.slice(l, S);
      return E.push(c.createElement(qN, {
        key: "avatar-popover-key",
        content: w,
        trigger: v,
        placement: f,
        overlayClassName: `${h}-popover`
      }, c.createElement(jS, {
        style: s
      }, `+${S-l}`))), C(c.createElement(Fh, {
        shape: d,
        size: u
      }, c.createElement("div", {
        className: p,
        style: a
      }, E)))
    }
    return C(c.createElement(Fh, {
      shape: d,
      size: u
    }, c.createElement("div", {
      className: p,
      style: a
    }, m)))
  },
  YN = QN,
  XS = jS;
XS.Group = YN;
const Sa = XS;
var ZN = te.ESC,
  JN = te.TAB;

function eM(e) {
  var t = e.visible,
    n = e.triggerRef,
    r = e.onVisibleChange,
    o = e.autoFocus,
    i = e.overlayRef,
    a = c.useRef(!1),
    l = function() {
      if (t) {
        var f, v;
        (f = n.current) === null || f === void 0 || (v = f.focus) === null || v === void 0 || v.call(f), r == null || r(!1)
      }
    },
    s = function() {
      var f;
      return (f = i.current) !== null && f !== void 0 && f.focus ? (i.current.focus(), a.current = !0, !0) : !1
    },
    u = function(f) {
      switch (f.keyCode) {
        case ZN:
          l();
          break;
        case JN: {
          var v = !1;
          a.current || (v = s()), v ? f.preventDefault() : l();
          break
        }
      }
    };
  c.useEffect(function() {
    return t ? (window.addEventListener("keydown", u), o && It(s, 3), function() {
      window.removeEventListener("keydown", u), a.current = !1
    }) : function() {
      a.current = !1
    }
  }, [t])
}
var tM = c.forwardRef(function(e, t) {
    var n = e.overlay,
      r = e.arrow,
      o = e.prefixCls,
      i = c.useMemo(function() {
        var l;
        return typeof n == "function" ? l = n() : l = n, l
      }, [n]),
      a = Cr(t, i == null ? void 0 : i.ref);
    return X.createElement(X.Fragment, null, r && X.createElement("div", {
      className: "".concat(o, "-arrow")
    }), X.cloneElement(i, {
      ref: Wo(i) ? a : void 0
    }))
  }),
  ci = {
    adjustX: 1,
    adjustY: 1
  },
  ui = [0, 0],
  nM = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: ci,
      offset: [0, -4],
      targetOffset: ui
    },
    top: {
      points: ["bc", "tc"],
      overflow: ci,
      offset: [0, -4],
      targetOffset: ui
    },
    topRight: {
      points: ["br", "tr"],
      overflow: ci,
      offset: [0, -4],
      targetOffset: ui
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: ci,
      offset: [0, 4],
      targetOffset: ui
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: ci,
      offset: [0, 4],
      targetOffset: ui
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: ci,
      offset: [0, 4],
      targetOffset: ui
    }
  },
  rM = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];

function oM(e, t) {
  var n, r = e.arrow,
    o = r === void 0 ? !1 : r,
    i = e.prefixCls,
    a = i === void 0 ? "rc-dropdown" : i,
    l = e.transitionName,
    s = e.animation,
    u = e.align,
    d = e.placement,
    f = d === void 0 ? "bottomLeft" : d,
    v = e.placements,
    y = v === void 0 ? nM : v,
    b = e.getPopupContainer,
    h = e.showAction,
    C = e.hideAction,
    g = e.overlayClassName,
    p = e.overlayStyle,
    m = e.visible,
    S = e.trigger,
    E = S === void 0 ? ["hover"] : S,
    w = e.autoFocus,
    x = e.overlay,
    R = e.children,
    P = e.onVisibleChange,
    O = Fe(e, rM),
    _ = X.useState(),
    N = H(_, 2),
    I = N[0],
    A = N[1],
    j = "visible" in e ? m : I,
    M = X.useRef(null),
    $ = X.useRef(null),
    T = X.useRef(null);
  X.useImperativeHandle(t, function() {
    return M.current
  });
  var k = function(Z) {
    A(Z), P == null || P(Z)
  };
  eM({
    visible: j,
    triggerRef: T,
    onVisibleChange: k,
    autoFocus: w,
    overlayRef: $
  });
  var L = function(Z) {
      var fe = e.onOverlayClick;
      A(!1), fe && fe(Z)
    },
    B = function() {
      return X.createElement(tM, {
        ref: $,
        overlay: x,
        prefixCls: a,
        arrow: o
      })
    },
    F = function() {
      return typeof x == "function" ? B : B()
    },
    V = function() {
      var Z = e.minOverlayWidthMatchTrigger,
        fe = e.alignPoint;
      return "minOverlayWidthMatchTrigger" in e ? Z : !fe
    },
    K = function() {
      var Z = e.openClassName;
      return Z !== void 0 ? Z : "".concat(a, "-open")
    },
    Q = X.cloneElement(R, {
      className: U((n = R.props) === null || n === void 0 ? void 0 : n.className, j && K()),
      ref: Wo(R) ? Cr(T, R.ref) : void 0
    }),
    W = C;
  return !W && E.indexOf("contextMenu") !== -1 && (W = ["click"]), X.createElement(Hp, de({
    builtinPlacements: y
  }, O, {
    prefixCls: a,
    ref: M,
    popupClassName: U(g, z({}, "".concat(a, "-show-arrow"), o)),
    popupStyle: p,
    action: E,
    showAction: h,
    hideAction: W,
    popupPlacement: f,
    popupAlign: u,
    popupTransitionName: l,
    popupAnimation: s,
    popupVisible: j,
    stretch: V() ? "minWidth" : "",
    popup: F(),
    onPopupVisibleChange: k,
    onPopupClick: L,
    getPopupContainer: b
  }), Q)
}
const iM = X.forwardRef(oM);
var qS = c.createContext(null);

function Vp(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t)
}

function QS(e) {
  var t = c.useContext(qS);
  return Vp(t, e)
}
var aM = ["children", "locked"],
  ar = c.createContext(null);

function lM(e, t) {
  var n = D({}, e);
  return Object.keys(t).forEach(function(r) {
    var o = t[r];
    o !== void 0 && (n[r] = o)
  }), n
}

function vl(e) {
  var t = e.children,
    n = e.locked,
    r = Fe(e, aM),
    o = c.useContext(ar),
    i = Lc(function() {
      return lM(o, r)
    }, [o, r], function(a, l) {
      return !n && (a[0] !== l[0] || !Jc(a[1], l[1], !0))
    });
  return c.createElement(ar.Provider, {
    value: i
  }, t)
}
var sM = [],
  YS = c.createContext(null);

function fu() {
  return c.useContext(YS)
}
var ZS = c.createContext(sM);

function Tl(e) {
  var t = c.useContext(ZS);
  return c.useMemo(function() {
    return e !== void 0 ? [].concat(ce(t), [e]) : t
  }, [t, e])
}
var JS = c.createContext(null),
  Up = c.createContext({});

function Dh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (_p(e)) {
    var n = e.nodeName.toLowerCase(),
      r = ["input", "select", "textarea", "button"].includes(n) || e.isContentEditable || n === "a" && !!e.getAttribute("href"),
      o = e.getAttribute("tabindex"),
      i = Number(o),
      a = null;
    return o && !Number.isNaN(i) ? a = i : r && a === null && (a = 0), r && e.disabled && (a = null), a !== null && (a >= 0 || t && a < 0)
  }
  return !1
}

function cM(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = ce(e.querySelectorAll("*")).filter(function(r) {
      return Dh(r, t)
    });
  return Dh(e, t) && n.unshift(e), n
}
var vv = te.LEFT,
  pv = te.RIGHT,
  mv = te.UP,
  zs = te.DOWN,
  Ls = te.ENTER,
  eC = te.ESC,
  Ca = te.HOME,
  xa = te.END,
  Bh = [mv, zs, vv, pv];

function uM(e, t, n, r) {
  var o, i, a, l, s = "prev",
    u = "next",
    d = "children",
    f = "parent";
  if (e === "inline" && r === Ls) return {
    inlineTrigger: !0
  };
  var v = (o = {}, z(o, mv, s), z(o, zs, u), o),
    y = (i = {}, z(i, vv, n ? u : s), z(i, pv, n ? s : u), z(i, zs, d), z(i, Ls, d), i),
    b = (a = {}, z(a, mv, s), z(a, zs, u), z(a, Ls, d), z(a, eC, f), z(a, vv, n ? d : f), z(a, pv, n ? f : d), a),
    h = {
      inline: v,
      horizontal: y,
      vertical: b,
      inlineSub: v,
      horizontalSub: b,
      verticalSub: b
    },
    C = (l = h["".concat(e).concat(t ? "" : "Sub")]) === null || l === void 0 ? void 0 : l[r];
  switch (C) {
    case s:
      return {
        offset: -1, sibling: !0
      };
    case u:
      return {
        offset: 1, sibling: !0
      };
    case f:
      return {
        offset: -1, sibling: !1
      };
    case d:
      return {
        offset: 1, sibling: !1
      };
    default:
      return null
  }
}

function dM(e) {
  for (var t = e; t;) {
    if (t.getAttribute("data-menu-list")) return t;
    t = t.parentElement
  }
  return null
}

function fM(e, t) {
  for (var n = e || document.activeElement; n;) {
    if (t.has(n)) return n;
    n = n.parentElement
  }
  return null
}

function tC(e, t) {
  var n = cM(e, !0);
  return n.filter(function(r) {
    return t.has(r)
  })
}

function Hh(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e) return null;
  var o = tC(e, t),
    i = o.length,
    a = o.findIndex(function(l) {
      return n === l
    });
  return r < 0 ? a === -1 ? a = i - 1 : a -= 1 : r > 0 && (a += 1), a = (a + i) % i, o[a]
}

function vM(e, t, n, r, o, i, a, l, s, u) {
  var d = c.useRef(),
    f = c.useRef();
  f.current = t;
  var v = function() {
    It.cancel(d.current)
  };
  return c.useEffect(function() {
      return function() {
        v()
      }
    }, []),
    function(y) {
      var b = y.which;
      if ([].concat(Bh, [Ls, eC, Ca, xa]).includes(b)) {
        var h, C, g, p = function() {
          h = new Set, C = new Map, g = new Map;
          var j = i();
          return j.forEach(function(M) {
            var $ = document.querySelector("[data-menu-id='".concat(Vp(r, M), "']"));
            $ && (h.add($), g.set($, M), C.set(M, $))
          }), h
        };
        p();
        var m = C.get(t),
          S = fM(m, h),
          E = g.get(S),
          w = uM(e, a(E, !0).length === 1, n, b);
        if (!w && b !== Ca && b !== xa) return;
        (Bh.includes(b) || [Ca, xa].includes(b)) && y.preventDefault();
        var x = function(j) {
          if (j) {
            var M = j,
              $ = j.querySelector("a");
            $ != null && $.getAttribute("href") && (M = $);
            var T = g.get(j);
            l(T), v(), d.current = It(function() {
              f.current === T && M.focus()
            })
          }
        };
        if ([Ca, xa].includes(b) || w.sibling || !S) {
          var R;
          !S || e === "inline" ? R = o.current : R = dM(S);
          var P, O = tC(R, h);
          b === Ca ? P = O[0] : b === xa ? P = O[O.length - 1] : P = Hh(R, h, S, w.offset), x(P)
        } else if (w.inlineTrigger) s(E);
        else if (w.offset > 0) s(E, !0), v(), d.current = It(function() {
          p();
          var A = S.getAttribute("aria-controls"),
            j = document.getElementById(A),
            M = Hh(j, h);
          x(M)
        }, 5);
        else if (w.offset < 0) {
          var _ = a(E, !0),
            N = _[_.length - 2],
            I = C.get(N);
          s(N, !1), x(I)
        }
      }
      u == null || u(y)
    }
}

function pM(e) {
  Promise.resolve().then(e)
}
var Kp = "__RC_UTIL_PATH_SPLIT__",
  Wh = function(t) {
    return t.join(Kp)
  },
  mM = function(t) {
    return t.split(Kp)
  },
  gv = "rc-menu-more";

function gM() {
  var e = c.useState({}),
    t = H(e, 2),
    n = t[1],
    r = c.useRef(new Map),
    o = c.useRef(new Map),
    i = c.useState([]),
    a = H(i, 2),
    l = a[0],
    s = a[1],
    u = c.useRef(0),
    d = c.useRef(!1),
    f = function() {
      d.current || n({})
    },
    v = c.useCallback(function(m, S) {
      var E = Wh(S);
      o.current.set(E, m), r.current.set(m, E), u.current += 1;
      var w = u.current;
      pM(function() {
        w === u.current && f()
      })
    }, []),
    y = c.useCallback(function(m, S) {
      var E = Wh(S);
      o.current.delete(E), r.current.delete(m)
    }, []),
    b = c.useCallback(function(m) {
      s(m)
    }, []),
    h = c.useCallback(function(m, S) {
      var E = r.current.get(m) || "",
        w = mM(E);
      return S && l.includes(w[0]) && w.unshift(gv), w
    }, [l]),
    C = c.useCallback(function(m, S) {
      return m.some(function(E) {
        var w = h(E, !0);
        return w.includes(S)
      })
    }, [h]),
    g = function() {
      var S = ce(r.current.keys());
      return l.length && S.push(gv), S
    },
    p = c.useCallback(function(m) {
      var S = "".concat(r.current.get(m)).concat(Kp),
        E = new Set;
      return ce(o.current.keys()).forEach(function(w) {
        w.startsWith(S) && E.add(o.current.get(w))
      }), E
    }, []);
  return c.useEffect(function() {
    return function() {
      d.current = !0
    }
  }, []), {
    registerPath: v,
    unregisterPath: y,
    refreshOverflowKeys: b,
    isSubPathKey: C,
    getKeyPath: h,
    getKeys: g,
    getSubPathKeys: p
  }
}

function Ra(e) {
  var t = c.useRef(e);
  t.current = e;
  var n = c.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i))
  }, []);
  return e ? n : void 0
}
var hM = Math.random().toFixed(5).toString().slice(2),
  Vh = 0;

function yM(e) {
  var t = Sr(e, {
      value: e
    }),
    n = H(t, 2),
    r = n[0],
    o = n[1];
  return c.useEffect(function() {
    Vh += 1;
    var i = "".concat(hM, "-").concat(Vh);
    o("rc-menu-uuid-".concat(i))
  }, []), r
}

function nC(e, t, n, r) {
  var o = c.useContext(ar),
    i = o.activeKey,
    a = o.onActive,
    l = o.onInactive,
    s = {
      active: i === e
    };
  return t || (s.onMouseEnter = function(u) {
    n == null || n({
      key: e,
      domEvent: u
    }), a(e)
  }, s.onMouseLeave = function(u) {
    r == null || r({
      key: e,
      domEvent: u
    }), l(e)
  }), s
}

function rC(e) {
  var t = c.useContext(ar),
    n = t.mode,
    r = t.rtl,
    o = t.inlineIndent;
  if (n !== "inline") return null;
  var i = e;
  return r ? {
    paddingRight: i * o
  } : {
    paddingLeft: i * o
  }
}

function oC(e) {
  var t = e.icon,
    n = e.props,
    r = e.children,
    o;
  return t === null || t === !1 ? null : (typeof t == "function" ? o = c.createElement(t, D({}, n)) : typeof t != "boolean" && (o = t), o || r || null)
}
var bM = ["item"];

function xc(e) {
  var t = e.item,
    n = Fe(e, bM);
  return Object.defineProperty(n, "item", {
    get: function() {
      return Zt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t
    }
  }), n
}
var SM = ["title", "attribute", "elementRef"],
  CM = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"],
  xM = ["active"],
  wM = function(e) {
    ml(n, e);
    var t = gl(n);

    function n() {
      return lr(this, n), t.apply(this, arguments)
    }
    return sr(n, [{
      key: "render",
      value: function() {
        var o = this.props,
          i = o.title,
          a = o.attribute,
          l = o.elementRef,
          s = Fe(o, SM),
          u = Hr(s, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
        return Zt(!a, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), c.createElement(zr.Item, de({}, a, {
          title: typeof i == "string" ? i : void 0
        }, u, {
          ref: l
        }))
      }
    }]), n
  }(c.Component),
  EM = c.forwardRef(function(e, t) {
    var n, r = e.style,
      o = e.className,
      i = e.eventKey;
    e.warnKey;
    var a = e.disabled,
      l = e.itemIcon,
      s = e.children,
      u = e.role,
      d = e.onMouseEnter,
      f = e.onMouseLeave,
      v = e.onClick,
      y = e.onKeyDown,
      b = e.onFocus,
      h = Fe(e, CM),
      C = QS(i),
      g = c.useContext(ar),
      p = g.prefixCls,
      m = g.onItemClick,
      S = g.disabled,
      E = g.overflowDisabled,
      w = g.itemIcon,
      x = g.selectedKeys,
      R = g.onActive,
      P = c.useContext(Up),
      O = P._internalRenderMenuItem,
      _ = "".concat(p, "-item"),
      N = c.useRef(),
      I = c.useRef(),
      A = S || a,
      j = hl(t, I),
      M = Tl(i),
      $ = function(le) {
        return {
          key: i,
          keyPath: ce(M).reverse(),
          item: N.current,
          domEvent: le
        }
      },
      T = l || w,
      k = nC(i, A, d, f),
      L = k.active,
      B = Fe(k, xM),
      F = x.includes(i),
      V = rC(M.length),
      K = function(le) {
        if (!A) {
          var oe = $(le);
          v == null || v(xc(oe)), m(oe)
        }
      },
      Q = function(le) {
        if (y == null || y(le), le.which === te.ENTER) {
          var oe = $(le);
          v == null || v(xc(oe)), m(oe)
        }
      },
      W = function(le) {
        R(i), b == null || b(le)
      },
      G = {};
    e.role === "option" && (G["aria-selected"] = F);
    var Z = c.createElement(wM, de({
      ref: N,
      elementRef: j,
      role: u === null ? "none" : u || "menuitem",
      tabIndex: a ? null : -1,
      "data-menu-id": E && C ? null : C
    }, h, B, G, {
      component: "li",
      "aria-disabled": a,
      style: D(D({}, V), r),
      className: U(_, (n = {}, z(n, "".concat(_, "-active"), L), z(n, "".concat(_, "-selected"), F), z(n, "".concat(_, "-disabled"), A), n), o),
      onClick: K,
      onKeyDown: Q,
      onFocus: W
    }), s, c.createElement(oC, {
      props: D(D({}, e), {}, {
        isSelected: F
      }),
      icon: T
    }));
    return O && (Z = O(Z, e, {
      selected: F
    })), Z
  });

function $M(e, t) {
  var n = e.eventKey,
    r = fu(),
    o = Tl(n);
  return c.useEffect(function() {
    if (r) return r.registerPath(n, o),
      function() {
        r.unregisterPath(n, o)
      }
  }, [o]), r ? null : c.createElement(EM, de({}, e, {
    ref: t
  }))
}
const vu = c.forwardRef($M);
var OM = ["className", "children"],
  PM = function(t, n) {
    var r = t.className,
      o = t.children,
      i = Fe(t, OM),
      a = c.useContext(ar),
      l = a.prefixCls,
      s = a.mode,
      u = a.rtl;
    return c.createElement("ul", de({
      className: U(l, u && "".concat(l, "-rtl"), "".concat(l, "-sub"), "".concat(l, "-").concat(s === "inline" ? "inline" : "vertical"), r),
      role: "menu"
    }, i, {
      "data-menu-list": !0,
      ref: n
    }), o)
  },
  Gp = c.forwardRef(PM);
Gp.displayName = "SubMenuList";

function Xp(e, t) {
  return or(e).map(function(n, r) {
    if (c.isValidElement(n)) {
      var o, i, a = n.key,
        l = (o = (i = n.props) === null || i === void 0 ? void 0 : i.eventKey) !== null && o !== void 0 ? o : a,
        s = l == null;
      s && (l = "tmp_key-".concat([].concat(ce(t), [r]).join("-")));
      var u = {
        key: l,
        eventKey: l
      };
      return c.cloneElement(n, u)
    }
    return n
  })
}
var Kt = {
    adjustX: 1,
    adjustY: 1
  },
  RM = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: Kt
    },
    topRight: {
      points: ["br", "tr"],
      overflow: Kt
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: Kt
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: Kt
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: Kt
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: Kt
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: Kt
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: Kt
    }
  },
  TM = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: Kt
    },
    topRight: {
      points: ["br", "tr"],
      overflow: Kt
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: Kt
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: Kt
    },
    rightTop: {
      points: ["tr", "tl"],
      overflow: Kt
    },
    rightBottom: {
      points: ["br", "bl"],
      overflow: Kt
    },
    leftTop: {
      points: ["tl", "tr"],
      overflow: Kt
    },
    leftBottom: {
      points: ["bl", "br"],
      overflow: Kt
    }
  };

function iC(e, t, n) {
  if (t) return t;
  if (n) return n[e] || n.other
}
var IM = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};

function NM(e) {
  var t = e.prefixCls,
    n = e.visible,
    r = e.children,
    o = e.popup,
    i = e.popupStyle,
    a = e.popupClassName,
    l = e.popupOffset,
    s = e.disabled,
    u = e.mode,
    d = e.onVisibleChange,
    f = c.useContext(ar),
    v = f.getPopupContainer,
    y = f.rtl,
    b = f.subMenuOpenDelay,
    h = f.subMenuCloseDelay,
    C = f.builtinPlacements,
    g = f.triggerSubMenuAction,
    p = f.forceSubMenuRender,
    m = f.rootClassName,
    S = f.motion,
    E = f.defaultMotions,
    w = c.useState(!1),
    x = H(w, 2),
    R = x[0],
    P = x[1],
    O = D(y ? D({}, TM) : D({}, RM), C),
    _ = IM[u],
    N = iC(u, S, E),
    I = c.useRef(N);
  u !== "inline" && (I.current = N);
  var A = D(D({}, I.current), {}, {
      leavedClassName: "".concat(t, "-hidden"),
      removeOnLeave: !1,
      motionAppear: !0
    }),
    j = c.useRef();
  return c.useEffect(function() {
    return j.current = It(function() {
        P(n)
      }),
      function() {
        It.cancel(j.current)
      }
  }, [n]), c.createElement(Hp, {
    prefixCls: t,
    popupClassName: U("".concat(t, "-popup"), z({}, "".concat(t, "-rtl"), y), a, m),
    stretch: u === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: O,
    popupPlacement: _,
    popupVisible: R,
    popup: o,
    popupStyle: i,
    popupAlign: l && {
      offset: l
    },
    action: s ? [] : [g],
    mouseEnterDelay: b,
    mouseLeaveDelay: h,
    onPopupVisibleChange: d,
    forceRender: p,
    popupMotion: A
  }, r)
}

function MM(e) {
  var t = e.id,
    n = e.open,
    r = e.keyPath,
    o = e.children,
    i = "inline",
    a = c.useContext(ar),
    l = a.prefixCls,
    s = a.forceSubMenuRender,
    u = a.motion,
    d = a.defaultMotions,
    f = a.mode,
    v = c.useRef(!1);
  v.current = f === i;
  var y = c.useState(!v.current),
    b = H(y, 2),
    h = b[0],
    C = b[1],
    g = v.current ? n : !1;
  c.useEffect(function() {
    v.current && C(!1)
  }, [f]);
  var p = D({}, iC(i, u, d));
  r.length > 1 && (p.motionAppear = !1);
  var m = p.onVisibleChanged;
  return p.onVisibleChanged = function(S) {
    return !v.current && !S && C(!0), m == null ? void 0 : m(S)
  }, h ? null : c.createElement(vl, {
    mode: i,
    locked: !v.current
  }, c.createElement(Wr, de({
    visible: g
  }, p, {
    forceRender: s,
    removeOnLeave: !1,
    leavedClassName: "".concat(l, "-hidden")
  }), function(S) {
    var E = S.className,
      w = S.style;
    return c.createElement(Gp, {
      id: t,
      className: E,
      style: w
    }, o)
  }))
}
var _M = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"],
  kM = ["active"],
  zM = function(t) {
    var n, r = t.style,
      o = t.className,
      i = t.title,
      a = t.eventKey;
    t.warnKey;
    var l = t.disabled,
      s = t.internalPopupClose,
      u = t.children,
      d = t.itemIcon,
      f = t.expandIcon,
      v = t.popupClassName,
      y = t.popupOffset,
      b = t.popupStyle,
      h = t.onClick,
      C = t.onMouseEnter,
      g = t.onMouseLeave,
      p = t.onTitleClick,
      m = t.onTitleMouseEnter,
      S = t.onTitleMouseLeave,
      E = Fe(t, _M),
      w = QS(a),
      x = c.useContext(ar),
      R = x.prefixCls,
      P = x.mode,
      O = x.openKeys,
      _ = x.disabled,
      N = x.overflowDisabled,
      I = x.activeKey,
      A = x.selectedKeys,
      j = x.itemIcon,
      M = x.expandIcon,
      $ = x.onItemClick,
      T = x.onOpenChange,
      k = x.onActive,
      L = c.useContext(Up),
      B = L._internalRenderSubMenuItem,
      F = c.useContext(JS),
      V = F.isSubPathKey,
      K = Tl(),
      Q = "".concat(R, "-submenu"),
      W = _ || l,
      G = c.useRef(),
      Z = c.useRef(),
      fe = d ?? j,
      le = f ?? M,
      oe = O.includes(a),
      Oe = !N && oe,
      Ce = V(A, a),
      Ue = nC(a, W, m, S),
      xe = Ue.active,
      pe = Fe(Ue, kM),
      ye = c.useState(!1),
      Y = H(ye, 2),
      re = Y[0],
      ne = Y[1],
      ie = function(ot) {
        W || ne(ot)
      },
      be = function(ot) {
        ie(!0), C == null || C({
          key: a,
          domEvent: ot
        })
      },
      ke = function(ot) {
        ie(!1), g == null || g({
          key: a,
          domEvent: ot
        })
      },
      De = c.useMemo(function() {
        return xe || (P !== "inline" ? re || V([I], a) : !1)
      }, [P, xe, I, re, a, V]),
      ue = rC(K.length),
      he = function(ot) {
        W || (p == null || p({
          key: a,
          domEvent: ot
        }), P === "inline" && T(a, !oe))
      },
      Re = Ra(function(Ne) {
        h == null || h(xc(Ne)), $(Ne)
      }),
      rt = function(ot) {
        P !== "inline" && T(a, ot)
      },
      Ie = function() {
        k(a)
      },
      Be = w && "".concat(w, "-popup"),
      Ae = c.createElement("div", de({
        role: "menuitem",
        style: ue,
        className: "".concat(Q, "-title"),
        tabIndex: W ? null : -1,
        ref: G,
        title: typeof i == "string" ? i : null,
        "data-menu-id": N && w ? null : w,
        "aria-expanded": Oe,
        "aria-haspopup": !0,
        "aria-controls": Be,
        "aria-disabled": W,
        onClick: he,
        onFocus: Ie
      }, pe), i, c.createElement(oC, {
        icon: P !== "horizontal" ? le : void 0,
        props: D(D({}, t), {}, {
          isOpen: Oe,
          isSubMenu: !0
        })
      }, c.createElement("i", {
        className: "".concat(Q, "-arrow")
      }))),
      pt = c.useRef(P);
    if (P !== "inline" && K.length > 1 ? pt.current = "vertical" : pt.current = P, !N) {
      var je = pt.current;
      Ae = c.createElement(NM, {
        mode: je,
        prefixCls: Q,
        visible: !s && Oe && P !== "inline",
        popupClassName: v,
        popupOffset: y,
        popupStyle: b,
        popup: c.createElement(vl, {
          mode: je === "horizontal" ? "vertical" : je
        }, c.createElement(Gp, {
          id: Be,
          ref: Z
        }, u)),
        disabled: W,
        onVisibleChange: rt
      }, Ae)
    }
    var Ke = c.createElement(zr.Item, de({
      role: "none"
    }, E, {
      component: "li",
      style: r,
      className: U(Q, "".concat(Q, "-").concat(P), o, (n = {}, z(n, "".concat(Q, "-open"), Oe), z(n, "".concat(Q, "-active"), De), z(n, "".concat(Q, "-selected"), Ce), z(n, "".concat(Q, "-disabled"), W), n)),
      onMouseEnter: be,
      onMouseLeave: ke
    }), Ae, !N && c.createElement(MM, {
      id: Be,
      open: Oe,
      keyPath: K
    }, u));
    return B && (Ke = B(Ke, t, {
      selected: Ce,
      active: De,
      open: Oe,
      disabled: W
    })), c.createElement(vl, {
      onItemClick: Re,
      mode: P === "horizontal" ? "vertical" : P,
      itemIcon: fe,
      expandIcon: le
    }, Ke)
  };

function qp(e) {
  var t = e.eventKey,
    n = e.children,
    r = Tl(t),
    o = Xp(n, r),
    i = fu();
  c.useEffect(function() {
    if (i) return i.registerPath(t, r),
      function() {
        i.unregisterPath(t, r)
      }
  }, [r]);
  var a;
  return i ? a = o : a = c.createElement(zM, e, o), c.createElement(ZS.Provider, {
    value: r
  }, a)
}
var LM = ["className", "title", "eventKey", "children"],
  AM = ["children"],
  jM = function(t) {
    var n = t.className,
      r = t.title;
    t.eventKey;
    var o = t.children,
      i = Fe(t, LM),
      a = c.useContext(ar),
      l = a.prefixCls,
      s = "".concat(l, "-item-group");
    return c.createElement("li", de({
      role: "presentation"
    }, i, {
      onClick: function(d) {
        return d.stopPropagation()
      },
      className: U(s, n)
    }), c.createElement("div", {
      role: "presentation",
      className: "".concat(s, "-title"),
      title: typeof r == "string" ? r : void 0
    }, r), c.createElement("ul", {
      role: "group",
      className: "".concat(s, "-list")
    }, o))
  };

function aC(e) {
  var t = e.children,
    n = Fe(e, AM),
    r = Tl(n.eventKey),
    o = Xp(t, r),
    i = fu();
  return i ? o : c.createElement(jM, Hr(n, ["warnKey"]), o)
}

function lC(e) {
  var t = e.className,
    n = e.style,
    r = c.useContext(ar),
    o = r.prefixCls,
    i = fu();
  return i ? null : c.createElement("li", {
    role: "separator",
    className: U("".concat(o, "-item-divider"), t),
    style: n
  })
}
var FM = ["label", "children", "key", "type"];

function hv(e) {
  return (e || []).map(function(t, n) {
    if (t && ze(t) === "object") {
      var r = t,
        o = r.label,
        i = r.children,
        a = r.key,
        l = r.type,
        s = Fe(r, FM),
        u = a ?? "tmp-".concat(n);
      return i || l === "group" ? l === "group" ? c.createElement(aC, de({
        key: u
      }, s, {
        title: o
      }), hv(i)) : c.createElement(qp, de({
        key: u
      }, s, {
        title: o
      }), hv(i)) : l === "divider" ? c.createElement(lC, de({
        key: u
      }, s)) : c.createElement(vu, de({
        key: u
      }, s), o)
    }
    return null
  }).filter(function(t) {
    return t
  })
}

function DM(e, t, n) {
  var r = e;
  return t && (r = hv(t)), Xp(r, n)
}
var BM = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"],
  di = [],
  HM = c.forwardRef(function(e, t) {
    var n, r, o = e,
      i = o.prefixCls,
      a = i === void 0 ? "rc-menu" : i,
      l = o.rootClassName,
      s = o.style,
      u = o.className,
      d = o.tabIndex,
      f = d === void 0 ? 0 : d,
      v = o.items,
      y = o.children,
      b = o.direction,
      h = o.id,
      C = o.mode,
      g = C === void 0 ? "vertical" : C,
      p = o.inlineCollapsed,
      m = o.disabled,
      S = o.disabledOverflow,
      E = o.subMenuOpenDelay,
      w = E === void 0 ? .1 : E,
      x = o.subMenuCloseDelay,
      R = x === void 0 ? .1 : x,
      P = o.forceSubMenuRender,
      O = o.defaultOpenKeys,
      _ = o.openKeys,
      N = o.activeKey,
      I = o.defaultActiveFirst,
      A = o.selectable,
      j = A === void 0 ? !0 : A,
      M = o.multiple,
      $ = M === void 0 ? !1 : M,
      T = o.defaultSelectedKeys,
      k = o.selectedKeys,
      L = o.onSelect,
      B = o.onDeselect,
      F = o.inlineIndent,
      V = F === void 0 ? 24 : F,
      K = o.motion,
      Q = o.defaultMotions,
      W = o.triggerSubMenuAction,
      G = W === void 0 ? "hover" : W,
      Z = o.builtinPlacements,
      fe = o.itemIcon,
      le = o.expandIcon,
      oe = o.overflowedIndicator,
      Oe = oe === void 0 ? "..." : oe,
      Ce = o.overflowedIndicatorPopupClassName,
      Ue = o.getPopupContainer,
      xe = o.onClick,
      pe = o.onOpenChange,
      ye = o.onKeyDown;
    o.openAnimation, o.openTransitionName;
    var Y = o._internalRenderMenuItem,
      re = o._internalRenderSubMenuItem,
      ne = Fe(o, BM),
      ie = c.useMemo(function() {
        return DM(y, v, di)
      }, [y, v]),
      be = c.useState(!1),
      ke = H(be, 2),
      De = ke[0],
      ue = ke[1],
      he = c.useRef(),
      Re = yM(h),
      rt = b === "rtl",
      Ie = Sr(O, {
        value: _,
        postState: function(He) {
          return He || di
        }
      }),
      Be = H(Ie, 2),
      Ae = Be[0],
      pt = Be[1],
      je = function(He) {
        var tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;

        function kt() {
          pt(He), pe == null || pe(He)
        }
        tt ? Ko.flushSync(kt) : kt()
      },
      Ke = c.useState(Ae),
      Ne = H(Ke, 2),
      ot = Ne[0],
      Qt = Ne[1],
      Pe = c.useRef(!1),
      lt = c.useMemo(function() {
        return (g === "inline" || g === "vertical") && p ? ["vertical", p] : [g, !1]
      }, [g, p]),
      ee = H(lt, 2),
      J = ee[0],
      ge = ee[1],
      se = J === "inline",
      Se = c.useState(J),
      Xe = H(Se, 2),
      Ze = Xe[0],
      me = Xe[1],
      Ee = c.useState(ge),
      Te = H(Ee, 2),
      St = Te[0],
      Je = Te[1];
    c.useEffect(function() {
      me(J), Je(ge), Pe.current && (se ? pt(ot) : je(di))
    }, [J, ge]);
    var xr = c.useState(0),
      wr = H(xr, 2),
      Tn = wr[0],
      fn = wr[1],
      on = Tn >= ie.length - 1 || Ze !== "horizontal" || S;
    c.useEffect(function() {
      se && Qt(Ae)
    }, [Ae]), c.useEffect(function() {
      return Pe.current = !0,
        function() {
          Pe.current = !1
        }
    }, []);
    var Pt = gM(),
      In = Pt.registerPath,
      an = Pt.unregisterPath,
      Ge = Pt.refreshOverflowKeys,
      $e = Pt.isSubPathKey,
      et = Pt.getKeyPath,
      st = Pt.getKeys,
      ct = Pt.getSubPathKeys,
      Wt = c.useMemo(function() {
        return {
          registerPath: In,
          unregisterPath: an
        }
      }, [In, an]),
      Vn = c.useMemo(function() {
        return {
          isSubPathKey: $e
        }
      }, [$e]);
    c.useEffect(function() {
      Ge(on ? di : ie.slice(Tn + 1).map(function(it) {
        return it.key
      }))
    }, [Tn, on]);
    var Qo = Sr(N || I && ((n = ie[0]) === null || n === void 0 ? void 0 : n.key), {
        value: N
      }),
      Yo = H(Qo, 2),
      dr = Yo[0],
      Vr = Yo[1],
      Er = Ra(function(it) {
        Vr(it)
      }),
      Zo = Ra(function() {
        Vr(void 0)
      });
    c.useImperativeHandle(t, function() {
      return {
        list: he.current,
        focus: function(He) {
          var tt, kt = dr ?? ((tt = ie.find(function(la) {
            return !la.props.disabled
          })) === null || tt === void 0 ? void 0 : tt.key);
          if (kt) {
            var jt, _n, $r;
            (jt = he.current) === null || jt === void 0 || (_n = jt.querySelector("li[data-menu-id='".concat(Vp(Re, kt), "']"))) === null || _n === void 0 || ($r = _n.focus) === null || $r === void 0 || $r.call(_n, He)
          }
        }
      }
    });
    var oa = Sr(T || [], {
        value: k,
        postState: function(He) {
          return Array.isArray(He) ? He : He == null ? di : [He]
        }
      }),
      vn = H(oa, 2),
      Un = vn[0],
      ia = vn[1],
      fr = function(He) {
        if (j) {
          var tt = He.key,
            kt = Un.includes(tt),
            jt;
          $ ? kt ? jt = Un.filter(function($r) {
            return $r !== tt
          }) : jt = [].concat(ce(Un), [tt]) : jt = [tt], ia(jt);
          var _n = D(D({}, He), {}, {
            selectedKeys: jt
          });
          kt ? B == null || B(_n) : L == null || L(_n)
        }!$ && Ae.length && Ze !== "inline" && je(di)
      },
      Nn = Ra(function(it) {
        xe == null || xe(xc(it)), fr(it)
      }),
      Mn = Ra(function(it, He) {
        var tt = Ae.filter(function(jt) {
          return jt !== it
        });
        if (He) tt.push(it);
        else if (Ze !== "inline") {
          var kt = ct(it);
          tt = tt.filter(function(jt) {
            return !kt.has(jt)
          })
        }
        Jc(Ae, tt, !0) || je(tt, !0)
      }),
      Jo = function(He, tt) {
        var kt = tt ?? !Ae.includes(He);
        Mn(He, kt)
      },
      vr = vM(Ze, dr, rt, Re, he, st, et, Vr, Jo, ye);
    c.useEffect(function() {
      ue(!0)
    }, []);
    var pr = c.useMemo(function() {
        return {
          _internalRenderMenuItem: Y,
          _internalRenderSubMenuItem: re
        }
      }, [Y, re]),
      ei = Ze !== "horizontal" || S ? ie : ie.map(function(it, He) {
        return c.createElement(vl, {
          key: it.key,
          overflowDisabled: He > Tn
        }, it)
      }),
      aa = c.createElement(zr, de({
        id: h,
        ref: he,
        prefixCls: "".concat(a, "-overflow"),
        component: "ul",
        itemComponent: vu,
        className: U(a, "".concat(a, "-root"), "".concat(a, "-").concat(Ze), u, (r = {}, z(r, "".concat(a, "-inline-collapsed"), St), z(r, "".concat(a, "-rtl"), rt), r), l),
        dir: b,
        style: s,
        role: "menu",
        tabIndex: f,
        data: ei,
        renderRawItem: function(He) {
          return He
        },
        renderRawRest: function(He) {
          var tt = He.length,
            kt = tt ? ie.slice(-tt) : null;
          return c.createElement(qp, {
            eventKey: gv,
            title: Oe,
            disabled: on,
            internalPopupClose: tt === 0,
            popupClassName: Ce
          }, kt)
        },
        maxCount: Ze !== "horizontal" || S ? zr.INVALIDATE : zr.RESPONSIVE,
        ssr: "full",
        "data-menu-list": !0,
        onVisibleChange: function(He) {
          fn(He)
        },
        onKeyDown: vr
      }, ne));
    return c.createElement(Up.Provider, {
      value: pr
    }, c.createElement(qS.Provider, {
      value: Re
    }, c.createElement(vl, {
      prefixCls: a,
      rootClassName: l,
      mode: Ze,
      openKeys: Ae,
      rtl: rt,
      disabled: m,
      motion: De ? K : null,
      defaultMotions: De ? Q : null,
      activeKey: dr,
      onActive: Er,
      onInactive: Zo,
      selectedKeys: Un,
      inlineIndent: V,
      subMenuOpenDelay: w,
      subMenuCloseDelay: R,
      forceSubMenuRender: P,
      builtinPlacements: Z,
      triggerSubMenuAction: G,
      getPopupContainer: Ue,
      itemIcon: fe,
      expandIcon: le,
      onItemClick: Nn,
      onOpenChange: Mn
    }, c.createElement(JS.Provider, {
      value: Vn
    }, aa), c.createElement("div", {
      style: {
        display: "none"
      },
      "aria-hidden": !0
    }, c.createElement(YS.Provider, {
      value: Wt
    }, ie)))))
  }),
  Il = HM;
Il.Item = vu;
Il.SubMenu = qp;
Il.ItemGroup = aC;
Il.Divider = lC;
var WM = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  name: "ellipsis",
  theme: "outlined"
};
const VM = WM;
var UM = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: VM
  }))
};
const KM = c.forwardRef(UM),
  GM = e => ({
    "&::-moz-placeholder": {
      opacity: 1
    },
    "&::placeholder": {
      color: e,
      userSelect: "none"
    },
    "&:placeholder-shown": {
      textOverflow: "ellipsis"
    }
  }),
  Qp = e => ({
    borderColor: e.hoverBorderColor
  }),
  yv = e => ({
    borderColor: e.activeBorderColor,
    boxShadow: e.activeShadow,
    outline: 0
  }),
  sC = e => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: "none",
    cursor: "not-allowed",
    opacity: 1,
    "&:hover": Object.assign({}, Qp(wt(e, {
      hoverBorderColor: e.colorBorder
    })))
  }),
  cC = e => {
    const {
      paddingBlockLG: t,
      fontSizeLG: n,
      lineHeightLG: r,
      borderRadiusLG: o,
      paddingInlineLG: i
    } = e;
    return {
      padding: `${t}px ${i}px`,
      fontSize: n,
      lineHeight: r,
      borderRadius: o
    }
  },
  uC = e => ({
    padding: `${e.paddingBlockSM}px ${e.paddingInlineSM}px`,
    borderRadius: e.borderRadiusSM
  }),
  dC = (e, t) => {
    const {
      componentCls: n,
      colorError: r,
      colorWarning: o,
      errorActiveShadow: i,
      warningActiveShadow: a,
      colorErrorBorderHover: l,
      colorWarningBorderHover: s
    } = e;
    return {
      [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: r,
        "&:hover": {
          borderColor: l
        },
        "&:focus, &-focused": Object.assign({}, yv(wt(e, {
          activeBorderColor: r,
          activeShadow: i
        }))),
        [`${n}-prefix, ${n}-suffix`]: {
          color: r
        }
      },
      [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: o,
        "&:hover": {
          borderColor: s
        },
        "&:focus, &-focused": Object.assign({}, yv(wt(e, {
          activeBorderColor: o,
          activeShadow: a
        }))),
        [`${n}-prefix, ${n}-suffix`]: {
          color: o
        }
      }
    }
  },
  fC = e => Object.assign(Object.assign({
    position: "relative",
    display: "inline-block",
    width: "100%",
    minWidth: 0,
    padding: `${e.paddingBlock}px ${e.paddingInline}px`,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    backgroundColor: e.colorBgContainer,
    backgroundImage: "none",
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: e.colorBorder,
    borderRadius: e.borderRadius,
    transition: `all ${e.motionDurationMid}`
  }, GM(e.colorTextPlaceholder)), {
    "&:hover": Object.assign({}, Qp(e)),
    "&:focus, &-focused": Object.assign({}, yv(e)),
    "&-disabled, &[disabled]": Object.assign({}, sC(e)),
    "&-borderless": {
      "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none"
      }
    },
    "textarea&": {
      maxWidth: "100%",
      height: "auto",
      minHeight: e.controlHeight,
      lineHeight: e.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${e.motionDurationSlow}, height 0s`,
      resize: "vertical"
    },
    "&-lg": Object.assign({}, cC(e)),
    "&-sm": Object.assign({}, uC(e)),
    "&-rtl": {
      direction: "rtl"
    },
    "&-textarea-rtl": {
      direction: "rtl"
    }
  }),
  XM = e => {
    const {
      componentCls: t,
      antCls: n
    } = e;
    return {
      position: "relative",
      display: "table",
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      "&[class*='col-']": {
        paddingInlineEnd: e.paddingXS,
        "&:last-child": {
          paddingInlineEnd: 0
        }
      },
      [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, cC(e)),
      [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, uC(e)),
      [`&-lg ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightLG
      },
      [`&-sm ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightSM
      },
      [`> ${t}`]: {
        display: "table-cell",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      [`${t}-group`]: {
        "&-addon, &-wrap": {
          display: "table-cell",
          width: 1,
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          "&:not(:first-child):not(:last-child)": {
            borderRadius: 0
          }
        },
        "&-wrap > *": {
          display: "block !important"
        },
        "&-addon": {
          position: "relative",
          padding: `0 ${e.paddingInline}px`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          textAlign: "center",
          backgroundColor: e.colorFillAlter,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${n}-select`]: {
            margin: `-${e.paddingBlock+1}px -${e.paddingInline}px`,
            [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
              [`${n}-select-selector`]: {
                backgroundColor: "inherit",
                border: `${e.lineWidth}px ${e.lineType} transparent`,
                boxShadow: "none"
              }
            },
            "&-open, &-focused": {
              [`${n}-select-selector`]: {
                color: e.colorPrimary
              }
            }
          },
          [`${n}-cascader-picker`]: {
            margin: `-9px -${e.paddingInline}px`,
            backgroundColor: "transparent",
            [`${n}-cascader-input`]: {
              textAlign: "start",
              border: 0,
              boxShadow: "none"
            }
          }
        },
        "&-addon:first-child": {
          borderInlineEnd: 0
        },
        "&-addon:last-child": {
          borderInlineStart: 0
        }
      },
      [`${t}`]: {
        width: "100%",
        marginBottom: 0,
        textAlign: "inherit",
        "&:focus": {
          zIndex: 1,
          borderInlineEndWidth: 1
        },
        "&:hover": {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${t}-search-with-button &`]: {
            zIndex: 0
          }
        }
      },
      [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`> ${t}-affix-wrapper`]: {
        [`&:not(:first-child) ${t}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        },
        [`&:not(:last-child) ${t}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`${t}-affix-wrapper`]: {
        "&:not(:last-child)": {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${t}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius
          }
        },
        [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&${t}-group-compact`]: Object.assign(Object.assign({
        display: "block"
      }, Ji()), {
        [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
          "&:not(:first-child):not(:last-child)": {
            borderInlineEndWidth: e.lineWidth,
            "&:hover": {
              zIndex: 1
            },
            "&:focus": {
              zIndex: 1
            }
          }
        },
        "& > *": {
          display: "inline-block",
          float: "none",
          verticalAlign: "top",
          borderRadius: 0
        },
        [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
          display: "inline-flex"
        },
        "& > *:not(:last-child)": {
          marginInlineEnd: -e.lineWidth,
          borderInlineEndWidth: e.lineWidth
        },
        [`${t}`]: {
          float: "none"
        },
        [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
          borderInlineEndWidth: e.lineWidth,
          borderRadius: 0,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        },
        [`& > ${n}-select-focused`]: {
          zIndex: 1
        },
        [`& > ${n}-select > ${n}-select-arrow`]: {
          zIndex: 1
        },
        [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        },
        [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
          borderInlineEndWidth: e.lineWidth,
          borderStartEndRadius: e.borderRadius,
          borderEndEndRadius: e.borderRadius
        },
        [`& > ${n}-select-auto-complete ${t}`]: {
          verticalAlign: "top"
        },
        [`${t}-group-wrapper + ${t}-group-wrapper`]: {
          marginInlineStart: -e.lineWidth,
          [`${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`${t}-group-wrapper:not(:last-child)`]: {
          [`&${t}-search > ${t}-group`]: {
            [`& > ${t}-group-addon > ${t}-search-button`]: {
              borderRadius: 0
            },
            [`& > ${t}`]: {
              borderStartStartRadius: e.borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: e.borderRadius
            }
          }
        }
      })
    }
  },
  qM = e => {
    const {
      componentCls: t,
      controlHeightSM: n,
      lineWidth: r
    } = e, o = 16, i = (n - r * 2 - o) / 2;
    return {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, cr(e)), fC(e)), dC(e, t)), {
        '&[type="color"]': {
          height: e.controlHeight,
          [`&${t}-lg`]: {
            height: e.controlHeightLG
          },
          [`&${t}-sm`]: {
            height: n,
            paddingTop: i,
            paddingBottom: i
          }
        },
        '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
          "-webkit-appearance": "none"
        }
      })
    }
  },
  QM = e => {
    const {
      componentCls: t
    } = e;
    return {
      [`${t}-clear-icon`]: {
        margin: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: "pointer",
        transition: `color ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextTertiary
        },
        "&:active": {
          color: e.colorText
        },
        "&-hidden": {
          visibility: "hidden"
        },
        "&-has-suffix": {
          margin: `0 ${e.inputAffixPadding}px`
        }
      }
    }
  },
  YM = e => {
    const {
      componentCls: t,
      inputAffixPadding: n,
      colorTextDescription: r,
      motionDurationSlow: o,
      colorIcon: i,
      colorIconHover: a,
      iconCls: l
    } = e;
    return {
      [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, fC(e)), {
        display: "inline-flex",
        [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, Qp(e)), {
          zIndex: 1,
          [`${t}-search-with-button &`]: {
            zIndex: 0
          }
        }),
        "&-focused, &:focus": {
          zIndex: 1
        },
        "&-disabled": {
          [`${t}[disabled]`]: {
            background: "transparent"
          }
        },
        [`> input${t}`]: {
          padding: 0,
          fontSize: "inherit",
          border: "none",
          borderRadius: 0,
          outline: "none",
          "&::-ms-reveal": {
            display: "none"
          },
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        "&::before": {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        },
        [`${t}`]: {
          "&-prefix, &-suffix": {
            display: "flex",
            flex: "none",
            alignItems: "center",
            "> *:not(:last-child)": {
              marginInlineEnd: e.paddingXS
            }
          },
          "&-show-count-suffix": {
            color: r
          },
          "&-show-count-has-suffix": {
            marginInlineEnd: e.paddingXXS
          },
          "&-prefix": {
            marginInlineEnd: n
          },
          "&-suffix": {
            marginInlineStart: n
          }
        }
      }), QM(e)), {
        [`${l}${t}-password-icon`]: {
          color: i,
          cursor: "pointer",
          transition: `all ${o}`,
          "&:hover": {
            color: a
          }
        }
      }), dC(e, `${t}-affix-wrapper`))
    }
  },
  ZM = e => {
    const {
      componentCls: t,
      colorError: n,
      colorWarning: r,
      borderRadiusLG: o,
      borderRadiusSM: i
    } = e;
    return {
      [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, cr(e)), XM(e)), {
        "&-rtl": {
          direction: "rtl"
        },
        "&-wrapper": {
          display: "inline-block",
          width: "100%",
          textAlign: "start",
          verticalAlign: "top",
          "&-rtl": {
            direction: "rtl"
          },
          "&-lg": {
            [`${t}-group-addon`]: {
              borderRadius: o,
              fontSize: e.fontSizeLG
            }
          },
          "&-sm": {
            [`${t}-group-addon`]: {
              borderRadius: i
            }
          },
          "&-status-error": {
            [`${t}-group-addon`]: {
              color: n,
              borderColor: n
            }
          },
          "&-status-warning": {
            [`${t}-group-addon`]: {
              color: r,
              borderColor: r
            }
          },
          "&-disabled": {
            [`${t}-group-addon`]: Object.assign({}, sC(e))
          },
          [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
            [`${t}, ${t}-group-addon`]: {
              borderRadius: 0
            }
          },
          [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
            [`${t}, ${t}-group-addon`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
            [`${t}, ${t}-group-addon`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        }
      })
    }
  },
  JM = e => {
    const {
      componentCls: t,
      antCls: n
    } = e, r = `${t}-search`;
    return {
      [r]: {
        [`${t}`]: {
          "&:hover, &:focus": {
            borderColor: e.colorPrimaryHover,
            [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
              borderInlineStartColor: e.colorPrimaryHover
            }
          }
        },
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        },
        [`${t}-lg`]: {
          lineHeight: e.lineHeightLG - 2e-4
        },
        [`> ${t}-group`]: {
          [`> ${t}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${r}-button`]: {
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
              borderEndStartRadius: 0,
              boxShadow: "none"
            },
            [`${r}-button:not(${n}-btn-primary)`]: {
              color: e.colorTextDescription,
              "&:hover": {
                color: e.colorPrimaryHover
              },
              "&:active": {
                color: e.colorPrimaryActive
              },
              [`&${n}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0
              }
            }
          }
        },
        [`${r}-button`]: {
          height: e.controlHeight,
          "&:hover, &:focus": {
            zIndex: 1
          }
        },
        [`&-large ${r}-button`]: {
          height: e.controlHeightLG
        },
        [`&-small ${r}-button`]: {
          height: e.controlHeightSM
        },
        "&-rtl": {
          direction: "rtl"
        },
        [`&${t}-compact-item`]: {
          [`&:not(${t}-compact-last-item)`]: {
            [`${t}-group-addon`]: {
              [`${t}-search-button`]: {
                marginInlineEnd: -e.lineWidth,
                borderRadius: 0
              }
            }
          },
          [`&:not(${t}-compact-first-item)`]: {
            [`${t},${t}-affix-wrapper`]: {
              borderRadius: 0
            }
          },
          [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
            "&:hover,&:focus,&:active": {
              zIndex: 2
            }
          },
          [`> ${t}-affix-wrapper-focused`]: {
            zIndex: 2
          }
        }
      }
    }
  },
  e_ = e => {
    const {
      componentCls: t,
      paddingLG: n
    } = e, r = `${t}-textarea`;
    return {
      [r]: {
        position: "relative",
        "&-show-count": {
          [`> ${t}`]: {
            height: "100%"
          },
          [`${t}-data-count`]: {
            position: "absolute",
            bottom: -e.fontSize * e.lineHeight,
            insetInlineEnd: 0,
            color: e.colorTextDescription,
            whiteSpace: "nowrap",
            pointerEvents: "none"
          }
        },
        "&-allow-clear": {
          [`> ${t}`]: {
            paddingInlineEnd: n
          }
        },
        [`&-affix-wrapper${r}-has-feedback`]: {
          [`${t}`]: {
            paddingInlineEnd: n
          }
        },
        [`&-affix-wrapper${t}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${t}`]: {
            fontSize: "inherit",
            border: "none",
            outline: "none",
            "&:focus": {
              boxShadow: "none !important"
            }
          },
          [`${t}-suffix`]: {
            margin: 0,
            "> *:not(:last-child)": {
              marginInline: 0
            },
            [`${t}-clear-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingXS,
              insetBlockStart: e.paddingXS
            },
            [`${r}-suffix`]: {
              position: "absolute",
              top: 0,
              insetInlineEnd: e.paddingInline,
              bottom: 0,
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              margin: "auto",
              pointerEvents: "none"
            }
          }
        }
      }
    }
  };

function t_(e) {
  return wt(e, {
    inputAffixPadding: e.paddingXXS
  })
}
const n_ = e => {
    const {
      controlHeight: t,
      fontSize: n,
      lineHeight: r,
      lineWidth: o,
      controlHeightSM: i,
      controlHeightLG: a,
      fontSizeLG: l,
      lineHeightLG: s,
      paddingSM: u,
      controlPaddingHorizontalSM: d,
      controlPaddingHorizontal: f,
      colorFillAlter: v,
      colorPrimaryHover: y,
      controlOutlineWidth: b,
      controlOutline: h,
      colorErrorOutline: C,
      colorWarningOutline: g
    } = e;
    return {
      paddingBlock: Math.max(Math.round((t - n * r) / 2 * 10) / 10 - o, 3),
      paddingBlockSM: Math.max(Math.round((i - n * r) / 2 * 10) / 10 - o, 0),
      paddingBlockLG: Math.ceil((a - l * s) / 2 * 10) / 10 - o,
      paddingInline: u - o,
      paddingInlineSM: d - o,
      paddingInlineLG: f - o,
      addonBg: v,
      activeBorderColor: y,
      hoverBorderColor: y,
      activeShadow: `0 0 0 ${b}px ${h}`,
      errorActiveShadow: `0 0 0 ${b}px ${C}`,
      warningActiveShadow: `0 0 0 ${b}px ${g}`
    }
  },
  r_ = rn("Input", e => {
    const t = wt(e, t_(e));
    return [qM(t), e_(t), YM(t), ZM(t), JM(t), tS(t)]
  }, n_),
  o_ = e => {
    const {
      prefixCls: t,
      className: n,
      style: r,
      size: o,
      shape: i
    } = e, a = U({
      [`${t}-lg`]: o === "large",
      [`${t}-sm`]: o === "small"
    }), l = U({
      [`${t}-circle`]: i === "circle",
      [`${t}-square`]: i === "square",
      [`${t}-round`]: i === "round"
    }), s = c.useMemo(() => typeof o == "number" ? {
      width: o,
      height: o,
      lineHeight: `${o}px`
    } : {}, [o]);
    return c.createElement("span", {
      className: U(t, a, l, n),
      style: Object.assign(Object.assign({}, s), r)
    })
  },
  pu = o_,
  i_ = new bt("ant-skeleton-loading", {
    "0%": {
      backgroundPosition: "100% 50%"
    },
    "100%": {
      backgroundPosition: "0 50%"
    }
  }),
  mu = e => ({
    height: e,
    lineHeight: `${e}px`
  }),
  Ai = e => Object.assign({
    width: e
  }, mu(e)),
  a_ = e => ({
    background: e.skeletonLoadingBackground,
    backgroundSize: "400% 100%",
    animationName: i_,
    animationDuration: e.skeletonLoadingMotionDuration,
    animationTimingFunction: "ease",
    animationIterationCount: "infinite"
  }),
  md = e => Object.assign({
    width: e * 5,
    minWidth: e * 5
  }, mu(e)),
  l_ = e => {
    const {
      skeletonAvatarCls: t,
      gradientFromColor: n,
      controlHeight: r,
      controlHeightLG: o,
      controlHeightSM: i
    } = e;
    return {
      [`${t}`]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: n
      }, Ai(r)),
      [`${t}${t}-circle`]: {
        borderRadius: "50%"
      },
      [`${t}${t}-lg`]: Object.assign({}, Ai(o)),
      [`${t}${t}-sm`]: Object.assign({}, Ai(i))
    }
  },
  s_ = e => {
    const {
      controlHeight: t,
      borderRadiusSM: n,
      skeletonInputCls: r,
      controlHeightLG: o,
      controlHeightSM: i,
      gradientFromColor: a
    } = e;
    return {
      [`${r}`]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: a,
        borderRadius: n
      }, md(t)),
      [`${r}-lg`]: Object.assign({}, md(o)),
      [`${r}-sm`]: Object.assign({}, md(i))
    }
  },
  Uh = e => Object.assign({
    width: e
  }, mu(e)),
  c_ = e => {
    const {
      skeletonImageCls: t,
      imageSizeBase: n,
      gradientFromColor: r,
      borderRadiusSM: o
    } = e;
    return {
      [`${t}`]: Object.assign(Object.assign({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "top",
        background: r,
        borderRadius: o
      }, Uh(n * 2)), {
        [`${t}-path`]: {
          fill: "#bfbfbf"
        },
        [`${t}-svg`]: Object.assign(Object.assign({}, Uh(n)), {
          maxWidth: n * 4,
          maxHeight: n * 4
        }),
        [`${t}-svg${t}-svg-circle`]: {
          borderRadius: "50%"
        }
      }),
      [`${t}${t}-circle`]: {
        borderRadius: "50%"
      }
    }
  },
  gd = (e, t, n) => {
    const {
      skeletonButtonCls: r
    } = e;
    return {
      [`${n}${r}-circle`]: {
        width: t,
        minWidth: t,
        borderRadius: "50%"
      },
      [`${n}${r}-round`]: {
        borderRadius: t
      }
    }
  },
  hd = e => Object.assign({
    width: e * 2,
    minWidth: e * 2
  }, mu(e)),
  u_ = e => {
    const {
      borderRadiusSM: t,
      skeletonButtonCls: n,
      controlHeight: r,
      controlHeightLG: o,
      controlHeightSM: i,
      gradientFromColor: a
    } = e;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      [`${n}`]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: a,
        borderRadius: t,
        width: r * 2,
        minWidth: r * 2
      }, hd(r))
    }, gd(e, r, n)), {
      [`${n}-lg`]: Object.assign({}, hd(o))
    }), gd(e, o, `${n}-lg`)), {
      [`${n}-sm`]: Object.assign({}, hd(i))
    }), gd(e, i, `${n}-sm`))
  },
  d_ = e => {
    const {
      componentCls: t,
      skeletonAvatarCls: n,
      skeletonTitleCls: r,
      skeletonParagraphCls: o,
      skeletonButtonCls: i,
      skeletonInputCls: a,
      skeletonImageCls: l,
      controlHeight: s,
      controlHeightLG: u,
      controlHeightSM: d,
      gradientFromColor: f,
      padding: v,
      marginSM: y,
      borderRadius: b,
      titleHeight: h,
      blockRadius: C,
      paragraphLiHeight: g,
      controlHeightXS: p,
      paragraphMarginTop: m
    } = e;
    return {
      [`${t}`]: {
        display: "table",
        width: "100%",
        [`${t}-header`]: {
          display: "table-cell",
          paddingInlineEnd: v,
          verticalAlign: "top",
          [`${n}`]: Object.assign({
            display: "inline-block",
            verticalAlign: "top",
            background: f
          }, Ai(s)),
          [`${n}-circle`]: {
            borderRadius: "50%"
          },
          [`${n}-lg`]: Object.assign({}, Ai(u)),
          [`${n}-sm`]: Object.assign({}, Ai(d))
        },
        [`${t}-content`]: {
          display: "table-cell",
          width: "100%",
          verticalAlign: "top",
          [`${r}`]: {
            width: "100%",
            height: h,
            background: f,
            borderRadius: C,
            [`+ ${o}`]: {
              marginBlockStart: d
            }
          },
          [`${o}`]: {
            padding: 0,
            "> li": {
              width: "100%",
              height: g,
              listStyle: "none",
              background: f,
              borderRadius: C,
              "+ li": {
                marginBlockStart: p
              }
            }
          },
          [`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: "61%"
          }
        },
        [`&-round ${t}-content`]: {
          [`${r}, ${o} > li`]: {
            borderRadius: b
          }
        }
      },
      [`${t}-with-avatar ${t}-content`]: {
        [`${r}`]: {
          marginBlockStart: y,
          [`+ ${o}`]: {
            marginBlockStart: m
          }
        }
      },
      [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "auto"
      }, u_(e)), l_(e)), s_(e)), c_(e)),
      [`${t}${t}-block`]: {
        width: "100%",
        [`${i}`]: {
          width: "100%"
        },
        [`${a}`]: {
          width: "100%"
        }
      },
      [`${t}${t}-active`]: {
        [`
        ${r},
        ${o} > li,
        ${n},
        ${i},
        ${a},
        ${l}
      `]: Object.assign({}, a_(e))
      }
    }
  },
  na = rn("Skeleton", e => {
    const {
      componentCls: t
    } = e, n = wt(e, {
      skeletonAvatarCls: `${t}-avatar`,
      skeletonTitleCls: `${t}-title`,
      skeletonParagraphCls: `${t}-paragraph`,
      skeletonButtonCls: `${t}-button`,
      skeletonInputCls: `${t}-input`,
      skeletonImageCls: `${t}-image`,
      imageSizeBase: e.controlHeight * 1.5,
      borderRadius: 100,
      skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
      skeletonLoadingMotionDuration: "1.4s"
    });
    return [d_(n)]
  }, e => {
    const {
      colorFillContent: t,
      colorFill: n
    } = e, r = t, o = n;
    return {
      color: r,
      colorGradientEnd: o,
      gradientFromColor: r,
      gradientToColor: o,
      titleHeight: e.controlHeight / 2,
      blockRadius: e.borderRadiusSM,
      paragraphMarginTop: e.marginLG + e.marginXXS,
      paragraphLiHeight: e.controlHeight / 2
    }
  }, {
    deprecatedTokens: [
      ["color", "gradientFromColor"],
      ["colorGradientEnd", "gradientToColor"]
    ]
  }),
  f_ = e => {
    const {
      prefixCls: t,
      className: n,
      rootClassName: r,
      active: o,
      shape: i = "circle",
      size: a = "default"
    } = e, {
      getPrefixCls: l
    } = c.useContext(Le), s = l("skeleton", t), [u, d] = na(s), f = Hr(e, ["prefixCls", "className"]), v = U(s, `${s}-element`, {
      [`${s}-active`]: o
    }, n, r, d);
    return u(c.createElement("div", {
      className: v
    }, c.createElement(pu, Object.assign({
      prefixCls: `${s}-avatar`,
      shape: i,
      size: a
    }, f))))
  },
  v_ = f_,
  p_ = e => {
    const {
      prefixCls: t,
      className: n,
      rootClassName: r,
      active: o,
      block: i = !1,
      size: a = "default"
    } = e, {
      getPrefixCls: l
    } = c.useContext(Le), s = l("skeleton", t), [u, d] = na(s), f = Hr(e, ["prefixCls"]), v = U(s, `${s}-element`, {
      [`${s}-active`]: o,
      [`${s}-block`]: i
    }, n, r, d);
    return u(c.createElement("div", {
      className: v
    }, c.createElement(pu, Object.assign({
      prefixCls: `${s}-button`,
      size: a
    }, f))))
  },
  m_ = p_,
  g_ = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
  h_ = e => {
    const {
      prefixCls: t,
      className: n,
      rootClassName: r,
      style: o,
      active: i
    } = e, {
      getPrefixCls: a
    } = c.useContext(Le), l = a("skeleton", t), [s, u] = na(l), d = U(l, `${l}-element`, {
      [`${l}-active`]: i
    }, n, r, u);
    return s(c.createElement("div", {
      className: d
    }, c.createElement("div", {
      className: U(`${l}-image`, n),
      style: o
    }, c.createElement("svg", {
      viewBox: "0 0 1098 1024",
      xmlns: "http://www.w3.org/2000/svg",
      className: `${l}-image-svg`
    }, c.createElement("path", {
      d: g_,
      className: `${l}-image-path`
    })))))
  },
  y_ = h_,
  b_ = e => {
    const {
      prefixCls: t,
      className: n,
      rootClassName: r,
      active: o,
      block: i,
      size: a = "default"
    } = e, {
      getPrefixCls: l
    } = c.useContext(Le), s = l("skeleton", t), [u, d] = na(s), f = Hr(e, ["prefixCls"]), v = U(s, `${s}-element`, {
      [`${s}-active`]: o,
      [`${s}-block`]: i
    }, n, r, d);
    return u(c.createElement("div", {
      className: v
    }, c.createElement(pu, Object.assign({
      prefixCls: `${s}-input`,
      size: a
    }, f))))
  },
  S_ = b_;
var C_ = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  name: "dot-chart",
  theme: "outlined"
};
const x_ = C_;
var w_ = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: x_
  }))
};
const E_ = c.forwardRef(w_),
  $_ = e => {
    const {
      prefixCls: t,
      className: n,
      rootClassName: r,
      style: o,
      active: i,
      children: a
    } = e, {
      getPrefixCls: l
    } = c.useContext(Le), s = l("skeleton", t), [u, d] = na(s), f = U(s, `${s}-element`, {
      [`${s}-active`]: i
    }, d, n, r), v = a ?? c.createElement(E_, null);
    return u(c.createElement("div", {
      className: f
    }, c.createElement("div", {
      className: U(`${s}-image`, n),
      style: o
    }, v)))
  },
  O_ = $_,
  P_ = e => {
    const t = l => {
        const {
          width: s,
          rows: u = 2
        } = e;
        if (Array.isArray(s)) return s[l];
        if (u - 1 === l) return s
      },
      {
        prefixCls: n,
        className: r,
        style: o,
        rows: i
      } = e,
      a = ce(Array(i)).map((l, s) => c.createElement("li", {
        key: s,
        style: {
          width: t(s)
        }
      }));
    return c.createElement("ul", {
      className: U(n, r),
      style: o
    }, a)
  },
  R_ = P_,
  T_ = e => {
    let {
      prefixCls: t,
      className: n,
      width: r,
      style: o
    } = e;
    return c.createElement("h3", {
      className: U(t, n),
      style: Object.assign({
        width: r
      }, o)
    })
  },
  I_ = T_;

function yd(e) {
  return e && typeof e == "object" ? e : {}
}

function N_(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  }
}

function M_(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {}
}

function __(e, t) {
  const n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n
}
const ra = e => {
  const {
    prefixCls: t,
    loading: n,
    className: r,
    rootClassName: o,
    style: i,
    children: a,
    avatar: l = !1,
    title: s = !0,
    paragraph: u = !0,
    active: d,
    round: f
  } = e, {
    getPrefixCls: v,
    direction: y,
    skeleton: b
  } = c.useContext(Le), h = v("skeleton", t), [C, g] = na(h);
  if (n || !("loading" in e)) {
    const p = !!l,
      m = !!s,
      S = !!u;
    let E;
    if (p) {
      const R = Object.assign(Object.assign({
        prefixCls: `${h}-avatar`
      }, N_(m, S)), yd(l));
      E = c.createElement("div", {
        className: `${h}-header`
      }, c.createElement(pu, Object.assign({}, R)))
    }
    let w;
    if (m || S) {
      let R;
      if (m) {
        const O = Object.assign(Object.assign({
          prefixCls: `${h}-title`
        }, M_(p, S)), yd(s));
        R = c.createElement(I_, Object.assign({}, O))
      }
      let P;
      if (S) {
        const O = Object.assign(Object.assign({
          prefixCls: `${h}-paragraph`
        }, __(p, m)), yd(u));
        P = c.createElement(R_, Object.assign({}, O))
      }
      w = c.createElement("div", {
        className: `${h}-content`
      }, R, P)
    }
    const x = U(h, {
      [`${h}-with-avatar`]: p,
      [`${h}-active`]: d,
      [`${h}-rtl`]: y === "rtl",
      [`${h}-round`]: f
    }, b == null ? void 0 : b.className, r, o, g);
    return C(c.createElement("div", {
      className: x,
      style: Object.assign(Object.assign({}, b == null ? void 0 : b.style), i)
    }, E, w))
  }
  return typeof a < "u" ? a : null
};
ra.Button = m_;
ra.Avatar = v_;
ra.Input = S_;
ra.Image = y_;
ra.Node = O_;
const k_ = ra;
var z_ = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
      }
    }, {
      tag: "path",
      attrs: {
        d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"
      }
    }]
  },
  name: "plus",
  theme: "outlined"
};
const L_ = z_;
var A_ = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: L_
  }))
};
const j_ = c.forwardRef(A_),
  gu = c.createContext(null);
var vC = c.forwardRef(function(e, t) {
    var n = e.prefixCls,
      r = e.className,
      o = e.style,
      i = e.id,
      a = e.active,
      l = e.tabKey,
      s = e.children;
    return c.createElement("div", {
      id: i && "".concat(i, "-panel-").concat(l),
      role: "tabpanel",
      tabIndex: a ? 0 : -1,
      "aria-labelledby": i && "".concat(i, "-tab-").concat(l),
      "aria-hidden": !a,
      style: o,
      className: U(n, a && "".concat(n, "-active"), r),
      ref: t
    }, s)
  }),
  F_ = ["key", "forceRender", "style", "className"];

function D_(e) {
  var t = e.id,
    n = e.activeKey,
    r = e.animated,
    o = e.tabPosition,
    i = e.destroyInactiveTabPane,
    a = c.useContext(gu),
    l = a.prefixCls,
    s = a.tabs,
    u = r.tabPane,
    d = "".concat(l, "-tabpane");
  return c.createElement("div", {
    className: U("".concat(l, "-content-holder"))
  }, c.createElement("div", {
    className: U("".concat(l, "-content"), "".concat(l, "-content-").concat(o), z({}, "".concat(l, "-content-animated"), u))
  }, s.map(function(f) {
    var v = f.key,
      y = f.forceRender,
      b = f.style,
      h = f.className,
      C = Fe(f, F_),
      g = v === n;
    return c.createElement(Wr, de({
      key: v,
      visible: g,
      forceRender: y,
      removeOnLeave: !!i,
      leavedClassName: "".concat(d, "-hidden")
    }, r.tabPaneMotion), function(p, m) {
      var S = p.style,
        E = p.className;
      return c.createElement(vC, de({}, C, {
        prefixCls: d,
        id: t,
        tabKey: v,
        animated: u,
        active: g,
        style: D(D({}, b), S),
        className: U(h, E),
        ref: m
      }))
    })
  })))
}
var Kh = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};

function B_(e, t, n) {
  return c.useMemo(function() {
    for (var r, o = new Map, i = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || Kh, a = i.left + i.width, l = 0; l < e.length; l += 1) {
      var s = e[l].key,
        u = t.get(s);
      if (!u) {
        var d;
        u = t.get((d = e[l - 1]) === null || d === void 0 ? void 0 : d.key) || Kh
      }
      var f = o.get(s) || D({}, u);
      f.right = a - f.left - f.width, o.set(s, f)
    }
    return o
  }, [e.map(function(r) {
    return r.key
  }).join("_"), t, n])
}

function Gh(e, t) {
  var n = c.useRef(e),
    r = c.useState({}),
    o = H(r, 2),
    i = o[1];

  function a(l) {
    var s = typeof l == "function" ? l(n.current) : l;
    s !== n.current && t(s, n.current), n.current = s, i({})
  }
  return [n.current, a]
}
var H_ = .1,
  Xh = .01,
  As = 20,
  qh = Math.pow(.995, As);

function W_(e, t) {
  var n = c.useState(),
    r = H(n, 2),
    o = r[0],
    i = r[1],
    a = c.useState(0),
    l = H(a, 2),
    s = l[0],
    u = l[1],
    d = c.useState(0),
    f = H(d, 2),
    v = f[0],
    y = f[1],
    b = c.useState(),
    h = H(b, 2),
    C = h[0],
    g = h[1],
    p = c.useRef();

  function m(P) {
    var O = P.touches[0],
      _ = O.screenX,
      N = O.screenY;
    i({
      x: _,
      y: N
    }), window.clearInterval(p.current)
  }

  function S(P) {
    if (o) {
      P.preventDefault();
      var O = P.touches[0],
        _ = O.screenX,
        N = O.screenY;
      i({
        x: _,
        y: N
      });
      var I = _ - o.x,
        A = N - o.y;
      t(I, A);
      var j = Date.now();
      u(j), y(j - s), g({
        x: I,
        y: A
      })
    }
  }

  function E() {
    if (o && (i(null), g(null), C)) {
      var P = C.x / v,
        O = C.y / v,
        _ = Math.abs(P),
        N = Math.abs(O);
      if (Math.max(_, N) < H_) return;
      var I = P,
        A = O;
      p.current = window.setInterval(function() {
        if (Math.abs(I) < Xh && Math.abs(A) < Xh) {
          window.clearInterval(p.current);
          return
        }
        I *= qh, A *= qh, t(I * As, A * As)
      }, As)
    }
  }
  var w = c.useRef();

  function x(P) {
    var O = P.deltaX,
      _ = P.deltaY,
      N = 0,
      I = Math.abs(O),
      A = Math.abs(_);
    I === A ? N = w.current === "x" ? O : _ : I > A ? (N = O, w.current = "x") : (N = _, w.current = "y"), t(-N, -N) && P.preventDefault()
  }
  var R = c.useRef(null);
  R.current = {
    onTouchStart: m,
    onTouchMove: S,
    onTouchEnd: E,
    onWheel: x
  }, c.useEffect(function() {
    function P(I) {
      R.current.onTouchStart(I)
    }

    function O(I) {
      R.current.onTouchMove(I)
    }

    function _(I) {
      R.current.onTouchEnd(I)
    }

    function N(I) {
      R.current.onWheel(I)
    }
    return document.addEventListener("touchmove", O, {
        passive: !1
      }), document.addEventListener("touchend", _, {
        passive: !1
      }), e.current.addEventListener("touchstart", P, {
        passive: !1
      }), e.current.addEventListener("wheel", N),
      function() {
        document.removeEventListener("touchmove", O), document.removeEventListener("touchend", _)
      }
  }, [])
}

function pC(e) {
  var t = c.useState(0),
    n = H(t, 2),
    r = n[0],
    o = n[1],
    i = c.useRef(0),
    a = c.useRef();
  return a.current = e, _f(function() {
      var l;
      (l = a.current) === null || l === void 0 || l.call(a)
    }, [r]),
    function() {
      i.current === r && (i.current += 1, o(i.current))
    }
}

function V_(e) {
  var t = c.useRef([]),
    n = c.useState({}),
    r = H(n, 2),
    o = r[1],
    i = c.useRef(typeof e == "function" ? e() : e),
    a = pC(function() {
      var s = i.current;
      t.current.forEach(function(u) {
        s = u(s)
      }), t.current = [], i.current = s, o({})
    });

  function l(s) {
    t.current.push(s), a()
  }
  return [i.current, l]
}
var Qh = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};

function U_(e, t, n, r, o, i, a) {
  var l = a.tabs,
    s = a.tabPosition,
    u = a.rtl,
    d, f, v;
  return ["top", "bottom"].includes(s) ? (d = "width", f = u ? "right" : "left", v = Math.abs(n)) : (d = "height", f = "top", v = -n), c.useMemo(function() {
    if (!l.length) return [0, 0];
    for (var y = l.length, b = y, h = 0; h < y; h += 1) {
      var C = e.get(l[h].key) || Qh;
      if (C[f] + C[d] > v + t) {
        b = h - 1;
        break
      }
    }
    for (var g = 0, p = y - 1; p >= 0; p -= 1) {
      var m = e.get(l[p].key) || Qh;
      if (m[f] < v) {
        g = p + 1;
        break
      }
    }
    return g >= b ? [0, 0] : [g, b]
  }, [e, t, r, o, i, v, s, l.map(function(y) {
    return y.key
  }).join("_"), u])
}

function Yh(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(n, r) {
    t[r] = n
  })) : t = e, JSON.stringify(t)
}
var K_ = "TABS_DQ";

function mC(e) {
  return String(e).replace(/"/g, K_)
}

function gC(e, t, n, r) {
  return !(!n || r || e === !1 || e === void 0 && (t === !1 || t === null))
}

function G_(e, t) {
  var n = e.prefixCls,
    r = e.editable,
    o = e.locale,
    i = e.style;
  return !r || r.showAdd === !1 ? null : c.createElement("button", {
    ref: t,
    type: "button",
    className: "".concat(n, "-nav-add"),
    style: i,
    "aria-label": (o == null ? void 0 : o.addAriaLabel) || "Add tab",
    onClick: function(l) {
      r.onEdit("add", {
        event: l
      })
    }
  }, r.addIcon || "+")
}
const hC = c.forwardRef(G_);
var Zh = c.forwardRef(function(e, t) {
  var n = e.position,
    r = e.prefixCls,
    o = e.extra;
  if (!o) return null;
  var i, a = {};
  return ze(o) === "object" && !c.isValidElement(o) ? a = o : a.right = o, n === "right" && (i = a.right), n === "left" && (i = a.left), i ? c.createElement("div", {
    className: "".concat(r, "-extra-content"),
    ref: t
  }, i) : null
});

function X_(e, t) {
  var n = e.prefixCls,
    r = e.id,
    o = e.tabs,
    i = e.locale,
    a = e.mobile,
    l = e.moreIcon,
    s = l === void 0 ? "More" : l,
    u = e.moreTransitionName,
    d = e.style,
    f = e.className,
    v = e.editable,
    y = e.tabBarGutter,
    b = e.rtl,
    h = e.removeAriaLabel,
    C = e.onTabClick,
    g = e.getPopupContainer,
    p = e.popupClassName,
    m = c.useState(!1),
    S = H(m, 2),
    E = S[0],
    w = S[1],
    x = c.useState(null),
    R = H(x, 2),
    P = R[0],
    O = R[1],
    _ = "".concat(r, "-more-popup"),
    N = "".concat(n, "-dropdown"),
    I = P !== null ? "".concat(_, "-").concat(P) : null,
    A = i == null ? void 0 : i.dropdownAriaLabel;

  function j(F, V) {
    F.preventDefault(), F.stopPropagation(), v.onEdit("remove", {
      key: V,
      event: F
    })
  }
  var M = c.createElement(Il, {
    onClick: function(V) {
      var K = V.key,
        Q = V.domEvent;
      C(K, Q), w(!1)
    },
    prefixCls: "".concat(N, "-menu"),
    id: _,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": I,
    selectedKeys: [P],
    "aria-label": A !== void 0 ? A : "expanded dropdown"
  }, o.map(function(F) {
    var V = F.closable,
      K = F.disabled,
      Q = F.closeIcon,
      W = F.key,
      G = F.label,
      Z = gC(V, Q, v, K);
    return c.createElement(vu, {
      key: W,
      id: "".concat(_, "-").concat(W),
      role: "option",
      "aria-controls": r && "".concat(r, "-panel-").concat(W),
      disabled: K
    }, c.createElement("span", null, G), Z && c.createElement("button", {
      type: "button",
      "aria-label": h || "remove",
      tabIndex: 0,
      className: "".concat(N, "-menu-item-remove"),
      onClick: function(le) {
        le.stopPropagation(), j(le, W)
      }
    }, Q || v.removeIcon || "×"))
  }));

  function $(F) {
    for (var V = o.filter(function(Z) {
        return !Z.disabled
      }), K = V.findIndex(function(Z) {
        return Z.key === P
      }) || 0, Q = V.length, W = 0; W < Q; W += 1) {
      K = (K + F + Q) % Q;
      var G = V[K];
      if (!G.disabled) {
        O(G.key);
        return
      }
    }
  }

  function T(F) {
    var V = F.which;
    if (!E) {
      [te.DOWN, te.SPACE, te.ENTER].includes(V) && (w(!0), F.preventDefault());
      return
    }
    switch (V) {
      case te.UP:
        $(-1), F.preventDefault();
        break;
      case te.DOWN:
        $(1), F.preventDefault();
        break;
      case te.ESC:
        w(!1);
        break;
      case te.SPACE:
      case te.ENTER:
        P !== null && C(P, F);
        break
    }
  }
  c.useEffect(function() {
    var F = document.getElementById(I);
    F && F.scrollIntoView && F.scrollIntoView(!1)
  }, [P]), c.useEffect(function() {
    E || O(null)
  }, [E]);
  var k = z({}, b ? "marginRight" : "marginLeft", y);
  o.length || (k.visibility = "hidden", k.order = 1);
  var L = U(z({}, "".concat(N, "-rtl"), b)),
    B = a ? null : c.createElement(iM, {
      prefixCls: N,
      overlay: M,
      trigger: ["hover"],
      visible: o.length ? E : !1,
      transitionName: u,
      onVisibleChange: w,
      overlayClassName: U(L, p),
      mouseEnterDelay: .1,
      mouseLeaveDelay: .1,
      getPopupContainer: g
    }, c.createElement("button", {
      type: "button",
      className: "".concat(n, "-nav-more"),
      style: k,
      tabIndex: -1,
      "aria-hidden": "true",
      "aria-haspopup": "listbox",
      "aria-controls": _,
      id: "".concat(r, "-more"),
      "aria-expanded": E,
      onKeyDown: T
    }, s));
  return c.createElement("div", {
    className: U("".concat(n, "-nav-operations"), f),
    style: d,
    ref: t
  }, B, c.createElement(hC, {
    prefixCls: n,
    locale: i,
    editable: v
  }))
}
const q_ = c.memo(c.forwardRef(X_), function(e, t) {
  return t.tabMoving
});

function Q_(e) {
  var t, n = e.prefixCls,
    r = e.id,
    o = e.active,
    i = e.tab,
    a = i.key,
    l = i.label,
    s = i.disabled,
    u = i.closeIcon,
    d = e.closable,
    f = e.renderWrapper,
    v = e.removeAriaLabel,
    y = e.editable,
    b = e.onClick,
    h = e.onFocus,
    C = e.style,
    g = "".concat(n, "-tab"),
    p = gC(d, u, y, s);

  function m(w) {
    s || b(w)
  }

  function S(w) {
    w.preventDefault(), w.stopPropagation(), y.onEdit("remove", {
      key: a,
      event: w
    })
  }
  var E = c.createElement("div", {
    key: a,
    "data-node-key": mC(a),
    className: U(g, (t = {}, z(t, "".concat(g, "-with-remove"), p), z(t, "".concat(g, "-active"), o), z(t, "".concat(g, "-disabled"), s), t)),
    style: C,
    onClick: m
  }, c.createElement("div", {
    role: "tab",
    "aria-selected": o,
    id: r && "".concat(r, "-tab-").concat(a),
    className: "".concat(g, "-btn"),
    "aria-controls": r && "".concat(r, "-panel-").concat(a),
    "aria-disabled": s,
    tabIndex: s ? null : 0,
    onClick: function(x) {
      x.stopPropagation(), m(x)
    },
    onKeyDown: function(x) {
      [te.SPACE, te.ENTER].includes(x.which) && (x.preventDefault(), m(x))
    },
    onFocus: h
  }, l), p && c.createElement("button", {
    type: "button",
    "aria-label": v || "remove",
    tabIndex: 0,
    className: "".concat(g, "-remove"),
    onClick: function(x) {
      x.stopPropagation(), S(x)
    }
  }, u || y.removeIcon || "×"));
  return f ? f(E) : E
}
var Y_ = function(t) {
    var n = t.activeTabOffset,
      r = t.horizontal,
      o = t.rtl,
      i = t.indicatorSize,
      a = c.useState(),
      l = H(a, 2),
      s = l[0],
      u = l[1],
      d = c.useRef(),
      f = function(b) {
        return typeof i == "function" ? i(b) : typeof i == "number" ? i : b
      };

    function v() {
      It.cancel(d.current)
    }
    return c.useEffect(function() {
      var y = {};
      return n && (r ? (o ? (y.right = n.right + n.width / 2, y.transform = "translateX(50%)") : (y.left = n.left + n.width / 2, y.transform = "translateX(-50%)"), y.width = f(n.width)) : (y.top = n.top + n.height / 2, y.transform = "translateY(-50%)", y.height = f(n.height))), v(), d.current = It(function() {
        u(y)
      }), v
    }, [n, r, o, i]), {
      style: s
    }
  },
  fi = function(t) {
    var n = t.current || {},
      r = n.offsetWidth,
      o = r === void 0 ? 0 : r,
      i = n.offsetHeight,
      a = i === void 0 ? 0 : i;
    return [o, a]
  },
  fs = function(t, n) {
    return t[n ? 0 : 1]
  };

function Z_(e, t) {
  var n, r = c.useContext(gu),
    o = r.prefixCls,
    i = r.tabs,
    a = e.className,
    l = e.style,
    s = e.id,
    u = e.animated,
    d = e.activeKey,
    f = e.rtl,
    v = e.extra,
    y = e.editable,
    b = e.locale,
    h = e.tabPosition,
    C = e.tabBarGutter,
    g = e.children,
    p = e.onTabClick,
    m = e.onTabScroll,
    S = e.indicatorSize,
    E = c.useRef(),
    w = c.useRef(),
    x = c.useRef(),
    R = c.useRef(),
    P = c.useRef(),
    O = c.useRef(),
    _ = c.useRef(),
    N = h === "top" || h === "bottom",
    I = Gh(0, function(Ge, $e) {
      N && m && m({
        direction: Ge > $e ? "left" : "right"
      })
    }),
    A = H(I, 2),
    j = A[0],
    M = A[1],
    $ = Gh(0, function(Ge, $e) {
      !N && m && m({
        direction: Ge > $e ? "top" : "bottom"
      })
    }),
    T = H($, 2),
    k = T[0],
    L = T[1],
    B = c.useState([0, 0]),
    F = H(B, 2),
    V = F[0],
    K = F[1],
    Q = c.useState([0, 0]),
    W = H(Q, 2),
    G = W[0],
    Z = W[1],
    fe = c.useState([0, 0]),
    le = H(fe, 2),
    oe = le[0],
    Oe = le[1],
    Ce = c.useState([0, 0]),
    Ue = H(Ce, 2),
    xe = Ue[0],
    pe = Ue[1],
    ye = V_(new Map),
    Y = H(ye, 2),
    re = Y[0],
    ne = Y[1],
    ie = B_(i, re, G[0]),
    be = fs(V, N),
    ke = fs(G, N),
    De = fs(oe, N),
    ue = fs(xe, N),
    he = be < ke + De,
    Re = he ? be - ue : be - De,
    rt = "".concat(o, "-nav-operations-hidden"),
    Ie = 0,
    Be = 0;
  N && f ? (Ie = 0, Be = Math.max(0, ke - Re)) : (Ie = Math.min(0, Re - ke), Be = 0);

  function Ae(Ge) {
    return Ge < Ie ? Ie : Ge > Be ? Be : Ge
  }
  var pt = c.useRef(),
    je = c.useState(),
    Ke = H(je, 2),
    Ne = Ke[0],
    ot = Ke[1];

  function Qt() {
    ot(Date.now())
  }

  function Pe() {
    window.clearTimeout(pt.current)
  }
  W_(R, function(Ge, $e) {
    function et(st, ct) {
      st(function(Wt) {
        var Vn = Ae(Wt + ct);
        return Vn
      })
    }
    return he ? (N ? et(M, Ge) : et(L, $e), Pe(), Qt(), !0) : !1
  }), c.useEffect(function() {
    return Pe(), Ne && (pt.current = window.setTimeout(function() {
      ot(0)
    }, 100)), Pe
  }, [Ne]);
  var lt = U_(ie, Re, N ? j : k, ke, De, ue, D(D({}, e), {}, {
      tabs: i
    })),
    ee = H(lt, 2),
    J = ee[0],
    ge = ee[1],
    se = bn(function() {
      var Ge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d,
        $e = ie.get(Ge) || {
          width: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0
        };
      if (N) {
        var et = j;
        f ? $e.right < j ? et = $e.right : $e.right + $e.width > j + Re && (et = $e.right + $e.width - Re) : $e.left < -j ? et = -$e.left : $e.left + $e.width > -j + Re && (et = -($e.left + $e.width - Re)), L(0), M(Ae(et))
      } else {
        var st = k;
        $e.top < -k ? st = -$e.top : $e.top + $e.height > -k + Re && (st = -($e.top + $e.height - Re)), M(0), L(Ae(st))
      }
    }),
    Se = {};
  h === "top" || h === "bottom" ? Se[f ? "marginRight" : "marginLeft"] = C : Se.marginTop = C;
  var Xe = i.map(function(Ge, $e) {
      var et = Ge.key;
      return c.createElement(Q_, {
        id: s,
        prefixCls: o,
        key: et,
        tab: Ge,
        style: $e === 0 ? void 0 : Se,
        closable: Ge.closable,
        editable: y,
        active: et === d,
        renderWrapper: g,
        removeAriaLabel: b == null ? void 0 : b.removeAriaLabel,
        onClick: function(ct) {
          p(et, ct)
        },
        onFocus: function() {
          se(et), Qt(), R.current && (f || (R.current.scrollLeft = 0), R.current.scrollTop = 0)
        }
      })
    }),
    Ze = function() {
      return ne(function() {
        var $e = new Map;
        return i.forEach(function(et) {
          var st, ct = et.key,
            Wt = (st = P.current) === null || st === void 0 ? void 0 : st.querySelector('[data-node-key="'.concat(mC(ct), '"]'));
          Wt && $e.set(ct, {
            width: Wt.offsetWidth,
            height: Wt.offsetHeight,
            left: Wt.offsetLeft,
            top: Wt.offsetTop
          })
        }), $e
      })
    };
  c.useEffect(function() {
    Ze()
  }, [i.map(function(Ge) {
    return Ge.key
  }).join("_")]);
  var me = pC(function() {
      var Ge = fi(E),
        $e = fi(w),
        et = fi(x);
      K([Ge[0] - $e[0] - et[0], Ge[1] - $e[1] - et[1]]);
      var st = fi(_);
      Oe(st);
      var ct = fi(O);
      pe(ct);
      var Wt = fi(P);
      Z([Wt[0] - st[0], Wt[1] - st[1]]), Ze()
    }),
    Ee = i.slice(0, J),
    Te = i.slice(ge + 1),
    St = [].concat(ce(Ee), ce(Te)),
    Je = ie.get(d),
    xr = Y_({
      activeTabOffset: Je,
      horizontal: N,
      rtl: f,
      indicatorSize: S
    }),
    wr = xr.style;
  c.useEffect(function() {
    se()
  }, [d, Ie, Be, Yh(Je), Yh(ie), N]), c.useEffect(function() {
    me()
  }, [f]);
  var Tn = !!St.length,
    fn = "".concat(o, "-nav-wrap"),
    on, Pt, In, an;
  return N ? f ? (Pt = j > 0, on = j !== Be) : (on = j < 0, Pt = j !== Ie) : (In = k < 0, an = k !== Ie), c.createElement(nr, {
    onResize: me
  }, c.createElement("div", {
    ref: hl(t, E),
    role: "tablist",
    className: U("".concat(o, "-nav"), a),
    style: l,
    onKeyDown: function() {
      Qt()
    }
  }, c.createElement(Zh, {
    ref: w,
    position: "left",
    extra: v,
    prefixCls: o
  }), c.createElement(nr, {
    onResize: me
  }, c.createElement("div", {
    className: U(fn, (n = {}, z(n, "".concat(fn, "-ping-left"), on), z(n, "".concat(fn, "-ping-right"), Pt), z(n, "".concat(fn, "-ping-top"), In), z(n, "".concat(fn, "-ping-bottom"), an), n)),
    ref: R
  }, c.createElement(nr, {
    onResize: me
  }, c.createElement("div", {
    ref: P,
    className: "".concat(o, "-nav-list"),
    style: {
      transform: "translate(".concat(j, "px, ").concat(k, "px)"),
      transition: Ne ? "none" : void 0
    }
  }, Xe, c.createElement(hC, {
    ref: _,
    prefixCls: o,
    locale: b,
    editable: y,
    style: D(D({}, Xe.length === 0 ? void 0 : Se), {}, {
      visibility: Tn ? "hidden" : null
    })
  }), c.createElement("div", {
    className: U("".concat(o, "-ink-bar"), z({}, "".concat(o, "-ink-bar-animated"), u.inkBar)),
    style: wr
  }))))), c.createElement(q_, de({}, e, {
    removeAriaLabel: b == null ? void 0 : b.removeAriaLabel,
    ref: O,
    prefixCls: o,
    tabs: St,
    className: !Tn && rt,
    tabMoving: !!Ne
  })), c.createElement(Zh, {
    ref: x,
    position: "right",
    extra: v,
    prefixCls: o
  })))
}
const Jh = c.forwardRef(Z_);
var J_ = ["renderTabBar"],
  ek = ["label", "key"];

function tk(e) {
  var t = e.renderTabBar,
    n = Fe(e, J_),
    r = c.useContext(gu),
    o = r.tabs;
  if (t) {
    var i = D(D({}, n), {}, {
      panes: o.map(function(a) {
        var l = a.label,
          s = a.key,
          u = Fe(a, ek);
        return c.createElement(vC, de({
          tab: l,
          key: s,
          tabKey: s
        }, u))
      })
    });
    return t(i, Jh)
  }
  return c.createElement(Jh, n)
}

function nk() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      inkBar: !0,
      tabPane: !1
    },
    t;
  return e === !1 ? t = {
    inkBar: !1,
    tabPane: !1
  } : e === !0 ? t = {
    inkBar: !0,
    tabPane: !1
  } : t = D({
    inkBar: !0
  }, ze(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (t.tabPane = !1), t
}
var rk = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicatorSize"],
  e0 = 0;

function ok(e, t) {
  var n, r = e.id,
    o = e.prefixCls,
    i = o === void 0 ? "rc-tabs" : o,
    a = e.className,
    l = e.items,
    s = e.direction,
    u = e.activeKey,
    d = e.defaultActiveKey,
    f = e.editable,
    v = e.animated,
    y = e.tabPosition,
    b = y === void 0 ? "top" : y,
    h = e.tabBarGutter,
    C = e.tabBarStyle,
    g = e.tabBarExtraContent,
    p = e.locale,
    m = e.moreIcon,
    S = e.moreTransitionName,
    E = e.destroyInactiveTabPane,
    w = e.renderTabBar,
    x = e.onChange,
    R = e.onTabClick,
    P = e.onTabScroll,
    O = e.getPopupContainer,
    _ = e.popupClassName,
    N = e.indicatorSize,
    I = Fe(e, rk),
    A = c.useMemo(function() {
      return (l || []).filter(function(pe) {
        return pe && ze(pe) === "object" && "key" in pe
      })
    }, [l]),
    j = s === "rtl",
    M = nk(v),
    $ = c.useState(!1),
    T = H($, 2),
    k = T[0],
    L = T[1];
  c.useEffect(function() {
    L(MS())
  }, []);
  var B = Sr(function() {
      var pe;
      return (pe = A[0]) === null || pe === void 0 ? void 0 : pe.key
    }, {
      value: u,
      defaultValue: d
    }),
    F = H(B, 2),
    V = F[0],
    K = F[1],
    Q = c.useState(function() {
      return A.findIndex(function(pe) {
        return pe.key === V
      })
    }),
    W = H(Q, 2),
    G = W[0],
    Z = W[1];
  c.useEffect(function() {
    var pe = A.findIndex(function(Y) {
      return Y.key === V
    });
    if (pe === -1) {
      var ye;
      pe = Math.max(0, Math.min(G, A.length - 1)), K((ye = A[pe]) === null || ye === void 0 ? void 0 : ye.key)
    }
    Z(pe)
  }, [A.map(function(pe) {
    return pe.key
  }).join("_"), V, G]);
  var fe = Sr(null, {
      value: r
    }),
    le = H(fe, 2),
    oe = le[0],
    Oe = le[1];
  c.useEffect(function() {
    r || (Oe("rc-tabs-".concat(e0)), e0 += 1)
  }, []);

  function Ce(pe, ye) {
    R == null || R(pe, ye);
    var Y = pe !== V;
    K(pe), Y && (x == null || x(pe))
  }
  var Ue = {
      id: oe,
      activeKey: V,
      animated: M,
      tabPosition: b,
      rtl: j,
      mobile: k
    },
    xe = D(D({}, Ue), {}, {
      editable: f,
      locale: p,
      moreIcon: m,
      moreTransitionName: S,
      tabBarGutter: h,
      onTabClick: Ce,
      onTabScroll: P,
      extra: g,
      style: C,
      panes: null,
      getPopupContainer: O,
      popupClassName: _,
      indicatorSize: N
    });
  return c.createElement(gu.Provider, {
    value: {
      tabs: A,
      prefixCls: i
    }
  }, c.createElement("div", de({
    ref: t,
    id: r,
    className: U(i, "".concat(i, "-").concat(b), (n = {}, z(n, "".concat(i, "-mobile"), k), z(n, "".concat(i, "-editable"), f), z(n, "".concat(i, "-rtl"), j), n), a)
  }, I), c.createElement(tk, de({}, xe, {
    renderTabBar: w
  })), c.createElement(D_, de({
    destroyInactiveTabPane: E
  }, Ue, {
    animated: M
  }))))
}
var ik = c.forwardRef(ok);
const ak = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};

function lk(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      inkBar: !0,
      tabPane: !1
    },
    n;
  return t === !1 ? n = {
    inkBar: !1,
    tabPane: !1
  } : t === !0 ? n = {
    inkBar: !0,
    tabPane: !0
  } : n = Object.assign({
    inkBar: !0
  }, typeof t == "object" ? t : {}), n.tabPane && (n.tabPaneMotion = Object.assign(Object.assign({}, ak), {
    motionName: Ho(e, "switch")
  })), n
}
var sk = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};

function ck(e) {
  return e.filter(t => t)
}

function uk(e, t) {
  if (e) return e;
  const n = or(t).map(r => {
    if (c.isValidElement(r)) {
      const {
        key: o,
        props: i
      } = r, a = i || {}, {
        tab: l
      } = a, s = sk(a, ["tab"]);
      return Object.assign(Object.assign({
        key: String(o)
      }, s), {
        label: l
      })
    }
    return null
  });
  return ck(n)
}
const dk = e => {
    const {
      componentCls: t,
      motionDurationSlow: n
    } = e;
    return [{
        [t]: {
          [`${t}-switch`]: {
            "&-appear, &-enter": {
              transition: "none",
              "&-start": {
                opacity: 0
              },
              "&-active": {
                opacity: 1,
                transition: `opacity ${n}`
              }
            },
            "&-leave": {
              position: "absolute",
              transition: "none",
              inset: 0,
              "&-start": {
                opacity: 1
              },
              "&-active": {
                opacity: 0,
                transition: `opacity ${n}`
              }
            }
          }
        }
      },
      [$h(e, "slide-up"), $h(e, "slide-down")]
    ]
  },
  fk = dk,
  vk = e => {
    const {
      componentCls: t,
      tabsCardPadding: n,
      cardBg: r,
      cardGutter: o,
      colorBorderSecondary: i,
      itemSelectedColor: a
    } = e;
    return {
      [`${t}-card`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            margin: 0,
            padding: n,
            background: r,
            border: `${e.lineWidth}px ${e.lineType} ${i}`,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
          },
          [`${t}-tab-active`]: {
            color: a,
            background: e.colorBgContainer
          },
          [`${t}-ink-bar`]: {
            visibility: "hidden"
          }
        },
        [`&${t}-top, &${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginLeft: {
                _skip_check_: !0,
                value: `${o}px`
              }
            }
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
            },
            [`${t}-tab-active`]: {
              borderBottomColor: e.colorBgContainer
            }
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
            },
            [`${t}-tab-active`]: {
              borderTopColor: e.colorBgContainer
            }
          }
        },
        [`&${t}-left, &${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginTop: `${o}px`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
              }
            },
            [`${t}-tab-active`]: {
              borderRightColor: {
                _skip_check_: !0,
                value: e.colorBgContainer
              }
            }
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
              }
            },
            [`${t}-tab-active`]: {
              borderLeftColor: {
                _skip_check_: !0,
                value: e.colorBgContainer
              }
            }
          }
        }
      }
    }
  },
  pk = e => {
    const {
      componentCls: t,
      itemHoverColor: n,
      dropdownEdgeChildVerticalPadding: r
    } = e;
    return {
      [`${t}-dropdown`]: Object.assign(Object.assign({}, cr(e)), {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: !0,
          value: -9999
        },
        zIndex: e.zIndexPopup,
        display: "block",
        "&-hidden": {
          display: "none"
        },
        [`${t}-dropdown-menu`]: {
          maxHeight: e.tabsDropdownHeight,
          margin: 0,
          padding: `${r}px 0`,
          overflowX: "hidden",
          overflowY: "auto",
          textAlign: {
            _skip_check_: !0,
            value: "left"
          },
          listStyleType: "none",
          backgroundColor: e.colorBgContainer,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary,
          "&-item": Object.assign(Object.assign({}, Rp), {
            display: "flex",
            alignItems: "center",
            minWidth: e.tabsDropdownWidth,
            margin: 0,
            padding: `${e.paddingXXS}px ${e.paddingSM}px`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${e.motionDurationSlow}`,
            "> span": {
              flex: 1,
              whiteSpace: "nowrap"
            },
            "&-remove": {
              flex: "none",
              marginLeft: {
                _skip_check_: !0,
                value: e.marginSM
              },
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              background: "transparent",
              border: 0,
              cursor: "pointer",
              "&:hover": {
                color: n
              }
            },
            "&:hover": {
              background: e.controlItemBgHover
            },
            "&-disabled": {
              "&, &:hover": {
                color: e.colorTextDisabled,
                background: "transparent",
                cursor: "not-allowed"
              }
            }
          })
        }
      })
    }
  },
  mk = e => {
    const {
      componentCls: t,
      margin: n,
      colorBorderSecondary: r,
      horizontalMargin: o,
      verticalItemPadding: i,
      verticalItemMargin: a
    } = e;
    return {
      [`${t}-top, ${t}-bottom`]: {
        flexDirection: "column",
        [`> ${t}-nav, > div > ${t}-nav`]: {
          margin: o,
          "&::before": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            borderBottom: `${e.lineWidth}px ${e.lineType} ${r}`,
            content: "''"
          },
          [`${t}-ink-bar`]: {
            height: e.lineWidthBold,
            "&-animated": {
              transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
            }
          },
          [`${t}-nav-wrap`]: {
            "&::before, &::after": {
              top: 0,
              bottom: 0,
              width: e.controlHeight
            },
            "&::before": {
              left: {
                _skip_check_: !0,
                value: 0
              },
              boxShadow: e.boxShadowTabsOverflowLeft
            },
            "&::after": {
              right: {
                _skip_check_: !0,
                value: 0
              },
              boxShadow: e.boxShadowTabsOverflowRight
            },
            [`&${t}-nav-wrap-ping-left::before`]: {
              opacity: 1
            },
            [`&${t}-nav-wrap-ping-right::after`]: {
              opacity: 1
            }
          }
        }
      },
      [`${t}-top`]: {
        [`> ${t}-nav,
        > div > ${t}-nav`]: {
          "&::before": {
            bottom: 0
          },
          [`${t}-ink-bar`]: {
            bottom: 0
          }
        }
      },
      [`${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          marginTop: `${n}px`,
          marginBottom: 0,
          "&::before": {
            top: 0
          },
          [`${t}-ink-bar`]: {
            top: 0
          }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0
        }
      },
      [`${t}-left, ${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          flexDirection: "column",
          minWidth: e.controlHeight * 1.25,
          [`${t}-tab`]: {
            padding: i,
            textAlign: "center"
          },
          [`${t}-tab + ${t}-tab`]: {
            margin: a
          },
          [`${t}-nav-wrap`]: {
            flexDirection: "column",
            "&::before, &::after": {
              right: {
                _skip_check_: !0,
                value: 0
              },
              left: {
                _skip_check_: !0,
                value: 0
              },
              height: e.controlHeight
            },
            "&::before": {
              top: 0,
              boxShadow: e.boxShadowTabsOverflowTop
            },
            "&::after": {
              bottom: 0,
              boxShadow: e.boxShadowTabsOverflowBottom
            },
            [`&${t}-nav-wrap-ping-top::before`]: {
              opacity: 1
            },
            [`&${t}-nav-wrap-ping-bottom::after`]: {
              opacity: 1
            }
          },
          [`${t}-ink-bar`]: {
            width: e.lineWidthBold,
            "&-animated": {
              transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
            }
          },
          [`${t}-nav-list, ${t}-nav-operations`]: {
            flex: "1 0 auto",
            flexDirection: "column"
          }
        }
      },
      [`${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-ink-bar`]: {
            right: {
              _skip_check_: !0,
              value: 0
            }
          }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          marginLeft: {
            _skip_check_: !0,
            value: `-${e.lineWidth}px`
          },
          borderLeft: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingLeft: {
              _skip_check_: !0,
              value: e.paddingLG
            }
          }
        }
      },
      [`${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          [`${t}-ink-bar`]: {
            left: {
              _skip_check_: !0,
              value: 0
            }
          }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0,
          marginRight: {
            _skip_check_: !0,
            value: -e.lineWidth
          },
          borderRight: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingRight: {
              _skip_check_: !0,
              value: e.paddingLG
            }
          }
        }
      }
    }
  },
  gk = e => {
    const {
      componentCls: t,
      cardPaddingSM: n,
      cardPaddingLG: r,
      horizontalItemPaddingSM: o,
      horizontalItemPaddingLG: i
    } = e;
    return {
      [t]: {
        "&-small": {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: o,
              fontSize: e.titleFontSizeSM
            }
          }
        },
        "&-large": {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: i,
              fontSize: e.titleFontSizeLG
            }
          }
        }
      },
      [`${t}-card`]: {
        [`&${t}-small`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: n
            }
          },
          [`&${t}-bottom`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`
            }
          },
          [`&${t}-top`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`
            }
          },
          [`&${t}-right`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
              }
            }
          },
          [`&${t}-left`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
              }
            }
          }
        },
        [`&${t}-large`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: r
            }
          }
        }
      }
    }
  },
  hk = e => {
    const {
      componentCls: t,
      itemActiveColor: n,
      itemHoverColor: r,
      iconCls: o,
      tabsHorizontalItemMargin: i,
      horizontalItemPadding: a,
      itemSelectedColor: l,
      itemColor: s
    } = e, u = `${t}-tab`;
    return {
      [u]: {
        position: "relative",
        WebkitTouchCallout: "none",
        WebkitTapHighlightColor: "transparent",
        display: "inline-flex",
        alignItems: "center",
        padding: a,
        fontSize: e.titleFontSize,
        background: "transparent",
        border: 0,
        outline: "none",
        cursor: "pointer",
        color: s,
        "&-btn, &-remove": Object.assign({
          "&:focus:not(:focus-visible), &:active": {
            color: n
          }
        }, iu(e)),
        "&-btn": {
          outline: "none",
          transition: "all 0.3s"
        },
        "&-remove": {
          flex: "none",
          marginRight: {
            _skip_check_: !0,
            value: -e.marginXXS
          },
          marginLeft: {
            _skip_check_: !0,
            value: e.marginXS
          },
          color: e.colorTextDescription,
          fontSize: e.fontSizeSM,
          background: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "&:hover": {
            color: e.colorTextHeading
          }
        },
        "&:hover": {
          color: r
        },
        [`&${u}-active ${u}-btn`]: {
          color: l,
          textShadow: e.tabsActiveTextShadow
        },
        [`&${u}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        },
        [`&${u}-disabled ${u}-btn, &${u}-disabled ${t}-remove`]: {
          "&:focus, &:active": {
            color: e.colorTextDisabled
          }
        },
        [`& ${u}-remove ${o}`]: {
          margin: 0
        },
        [o]: {
          marginRight: {
            _skip_check_: !0,
            value: e.marginSM
          }
        }
      },
      [`${u} + ${u}`]: {
        margin: {
          _skip_check_: !0,
          value: i
        }
      }
    }
  },
  yk = e => {
    const {
      componentCls: t,
      tabsHorizontalItemMarginRTL: n,
      iconCls: r,
      cardGutter: o
    } = e;
    return {
      [`${t}-rtl`]: {
        direction: "rtl",
        [`${t}-nav`]: {
          [`${t}-tab`]: {
            margin: {
              _skip_check_: !0,
              value: n
            },
            [`${t}-tab:last-of-type`]: {
              marginLeft: {
                _skip_check_: !0,
                value: 0
              }
            },
            [r]: {
              marginRight: {
                _skip_check_: !0,
                value: 0
              },
              marginLeft: {
                _skip_check_: !0,
                value: `${e.marginSM}px`
              }
            },
            [`${t}-tab-remove`]: {
              marginRight: {
                _skip_check_: !0,
                value: `${e.marginXS}px`
              },
              marginLeft: {
                _skip_check_: !0,
                value: `-${e.marginXXS}px`
              },
              [r]: {
                margin: 0
              }
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav`]: {
            order: 1
          },
          [`> ${t}-content-holder`]: {
            order: 0
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav`]: {
            order: 0
          },
          [`> ${t}-content-holder`]: {
            order: 1
          }
        },
        [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginRight: {
                _skip_check_: !0,
                value: o
              },
              marginLeft: {
                _skip_check_: !0,
                value: 0
              }
            }
          }
        }
      },
      [`${t}-dropdown-rtl`]: {
        direction: "rtl"
      },
      [`${t}-menu-item`]: {
        [`${t}-dropdown-rtl`]: {
          textAlign: {
            _skip_check_: !0,
            value: "right"
          }
        }
      }
    }
  },
  bk = e => {
    const {
      componentCls: t,
      tabsCardPadding: n,
      cardHeight: r,
      cardGutter: o,
      itemHoverColor: i,
      itemActiveColor: a,
      colorBorderSecondary: l
    } = e;
    return {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, cr(e)), {
        display: "flex",
        [`> ${t}-nav, > div > ${t}-nav`]: {
          position: "relative",
          display: "flex",
          flex: "none",
          alignItems: "center",
          [`${t}-nav-wrap`]: {
            position: "relative",
            display: "flex",
            flex: "auto",
            alignSelf: "stretch",
            overflow: "hidden",
            whiteSpace: "nowrap",
            transform: "translate(0)",
            "&::before, &::after": {
              position: "absolute",
              zIndex: 1,
              opacity: 0,
              transition: `opacity ${e.motionDurationSlow}`,
              content: "''",
              pointerEvents: "none"
            }
          },
          [`${t}-nav-list`]: {
            position: "relative",
            display: "flex",
            transition: `opacity ${e.motionDurationSlow}`
          },
          [`${t}-nav-operations`]: {
            display: "flex",
            alignSelf: "stretch"
          },
          [`${t}-nav-operations-hidden`]: {
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none"
          },
          [`${t}-nav-more`]: {
            position: "relative",
            padding: n,
            background: "transparent",
            border: 0,
            color: e.colorText,
            "&::after": {
              position: "absolute",
              right: {
                _skip_check_: !0,
                value: 0
              },
              bottom: 0,
              left: {
                _skip_check_: !0,
                value: 0
              },
              height: e.controlHeightLG / 8,
              transform: "translateY(100%)",
              content: "''"
            }
          },
          [`${t}-nav-add`]: Object.assign({
            minWidth: r,
            marginLeft: {
              _skip_check_: !0,
              value: o
            },
            padding: `0 ${e.paddingXS}px`,
            background: "transparent",
            border: `${e.lineWidth}px ${e.lineType} ${l}`,
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
            outline: "none",
            cursor: "pointer",
            color: e.colorText,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
            "&:hover": {
              color: i
            },
            "&:active, &:focus:not(:focus-visible)": {
              color: a
            }
          }, iu(e))
        },
        [`${t}-extra-content`]: {
          flex: "none"
        },
        [`${t}-ink-bar`]: {
          position: "absolute",
          background: e.inkBarColor,
          pointerEvents: "none"
        }
      }), hk(e)), {
        [`${t}-content`]: {
          position: "relative",
          width: "100%"
        },
        [`${t}-content-holder`]: {
          flex: "auto",
          minWidth: 0,
          minHeight: 0
        },
        [`${t}-tabpane`]: {
          outline: "none",
          "&-hidden": {
            display: "none"
          }
        }
      }),
      [`${t}-centered`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-nav-wrap`]: {
            [`&:not([class*='${t}-nav-wrap-ping'])`]: {
              justifyContent: "center"
            }
          }
        }
      }
    }
  },
  Sk = rn("Tabs", e => {
    const t = wt(e, {
      tabsCardPadding: e.cardPadding || `${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,
      dropdownEdgeChildVerticalPadding: e.paddingXXS,
      tabsActiveTextShadow: "0 0 0.25px currentcolor",
      tabsDropdownHeight: 200,
      tabsDropdownWidth: 120,
      tabsHorizontalItemMargin: `0 0 0 ${e.horizontalItemGutter}px`,
      tabsHorizontalItemMarginRTL: `0 0 0 ${e.horizontalItemGutter}px`
    });
    return [gk(t), yk(t), mk(t), pk(t), vk(t), bk(t), fk(t)]
  }, e => {
    const t = e.controlHeightLG;
    return {
      zIndexPopup: e.zIndexPopupBase + 50,
      cardBg: e.colorFillAlter,
      cardHeight: t,
      cardPadding: "",
      cardPaddingSM: `${e.paddingXXS*1.5}px ${e.padding}px`,
      cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,
      titleFontSize: e.fontSize,
      titleFontSizeLG: e.fontSizeLG,
      titleFontSizeSM: e.fontSize,
      inkBarColor: e.colorPrimary,
      horizontalMargin: `0 0 ${e.margin}px 0`,
      horizontalItemGutter: 32,
      horizontalItemMargin: "",
      horizontalItemMarginRTL: "",
      horizontalItemPadding: `${e.paddingSM}px 0`,
      horizontalItemPaddingSM: `${e.paddingXS}px 0`,
      horizontalItemPaddingLG: `${e.padding}px 0`,
      verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
      verticalItemMargin: `${e.margin}px 0 0 0`,
      itemColor: e.colorText,
      itemSelectedColor: e.colorPrimary,
      itemHoverColor: e.colorPrimaryHover,
      itemActiveColor: e.colorPrimaryActive,
      cardGutter: e.marginXXS / 2
    }
  }),
  Ck = () => null,
  xk = Ck;
var wk = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const yC = e => {
  const {
    type: t,
    className: n,
    rootClassName: r,
    size: o,
    onEdit: i,
    hideAdd: a,
    centered: l,
    addIcon: s,
    popupClassName: u,
    children: d,
    items: f,
    animated: v,
    style: y,
    indicatorSize: b
  } = e, h = wk(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "popupClassName", "children", "items", "animated", "style", "indicatorSize"]), {
    prefixCls: C,
    moreIcon: g = c.createElement(KM, null)
  } = h, {
    direction: p,
    tabs: m,
    getPrefixCls: S,
    getPopupContainer: E
  } = c.useContext(Le), w = S("tabs", C), [x, R] = Sk(w);
  let P;
  t === "editable-card" && (P = {
    onEdit: (j, M) => {
      let {
        key: $,
        event: T
      } = M;
      i == null || i(j === "add" ? T : $, j)
    },
    removeIcon: c.createElement(xl, null),
    addIcon: s || c.createElement(j_, null),
    showAdd: a !== !0
  });
  const O = S(),
    _ = uk(f, d),
    N = lk(w, v),
    I = ta(o),
    A = Object.assign(Object.assign({}, m == null ? void 0 : m.style), y);
  return x(c.createElement(ik, Object.assign({
    direction: p,
    getPopupContainer: E,
    moreTransitionName: `${O}-slide-up`
  }, h, {
    items: _,
    className: U({
      [`${w}-${I}`]: I,
      [`${w}-card`]: ["card", "editable-card"].includes(t),
      [`${w}-editable-card`]: t === "editable-card",
      [`${w}-centered`]: l
    }, m == null ? void 0 : m.className, n, r, R),
    popupClassName: U(u, R),
    style: A,
    editable: P,
    moreIcon: g,
    prefixCls: w,
    animated: N,
    indicatorSize: b ?? (m == null ? void 0 : m.indicatorSize)
  })))
};
yC.TabPane = xk;
const Ek = yC;
var $k = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const Ok = e => {
    var {
      prefixCls: t,
      className: n,
      hoverable: r = !0
    } = e, o = $k(e, ["prefixCls", "className", "hoverable"]);
    const {
      getPrefixCls: i
    } = c.useContext(Le), a = i("card", t), l = U(`${a}-grid`, n, {
      [`${a}-grid-hoverable`]: r
    });
    return c.createElement("div", Object.assign({}, o, {
      className: l
    }))
  },
  bC = Ok,
  Pk = e => {
    const {
      antCls: t,
      componentCls: n,
      headerHeight: r,
      cardPaddingBase: o,
      tabsMarginBottom: i
    } = e;
    return Object.assign(Object.assign({
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      minHeight: r,
      marginBottom: -1,
      padding: `0 ${o}px`,
      color: e.colorTextHeading,
      fontWeight: e.fontWeightStrong,
      fontSize: e.headerFontSize,
      background: e.headerBg,
      borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,
      borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
    }, Ji()), {
      "&-wrapper": {
        width: "100%",
        display: "flex",
        alignItems: "center"
      },
      "&-title": Object.assign(Object.assign({
        display: "inline-block",
        flex: 1
      }, Rp), {
        [`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]: {
          insetInlineStart: 0,
          marginTop: 0,
          marginBottom: 0
        }
      }),
      [`${t}-tabs-top`]: {
        clear: "both",
        marginBottom: i,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.fontSize,
        "&-bar": {
          borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`
        }
      }
    })
  },
  Rk = e => {
    const {
      cardPaddingBase: t,
      colorBorderSecondary: n,
      cardShadow: r,
      lineWidth: o
    } = e;
    return {
      width: "33.33%",
      padding: t,
      border: 0,
      borderRadius: 0,
      boxShadow: `
      ${o}px 0 0 0 ${n},
      0 ${o}px 0 0 ${n},
      ${o}px ${o}px 0 0 ${n},
      ${o}px 0 0 0 ${n} inset,
      0 ${o}px 0 0 ${n} inset;
    `,
      transition: `all ${e.motionDurationMid}`,
      "&-hoverable:hover": {
        position: "relative",
        zIndex: 1,
        boxShadow: r
      }
    }
  },
  Tk = e => {
    const {
      componentCls: t,
      iconCls: n,
      actionsLiMargin: r,
      cardActionsIconSize: o,
      colorBorderSecondary: i,
      actionsBg: a
    } = e;
    return Object.assign(Object.assign({
      margin: 0,
      padding: 0,
      listStyle: "none",
      background: a,
      borderTop: `${e.lineWidth}px ${e.lineType} ${i}`,
      display: "flex",
      borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `
    }, Ji()), {
      "& > li": {
        margin: r,
        color: e.colorTextDescription,
        textAlign: "center",
        "> span": {
          position: "relative",
          display: "block",
          minWidth: e.cardActionsIconSize * 2,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          "&:hover": {
            color: e.colorPrimary,
            transition: `color ${e.motionDurationMid}`
          },
          [`a:not(${t}-btn), > ${n}`]: {
            display: "inline-block",
            width: "100%",
            color: e.colorTextDescription,
            lineHeight: `${e.fontSize*e.lineHeight}px`,
            transition: `color ${e.motionDurationMid}`,
            "&:hover": {
              color: e.colorPrimary
            }
          },
          [`> ${n}`]: {
            fontSize: o,
            lineHeight: `${o*e.lineHeight}px`
          }
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${e.lineWidth}px ${e.lineType} ${i}`
        }
      }
    })
  },
  Ik = e => Object.assign(Object.assign({
    margin: `-${e.marginXXS}px 0`,
    display: "flex"
  }, Ji()), {
    "&-avatar": {
      paddingInlineEnd: e.padding
    },
    "&-detail": {
      overflow: "hidden",
      flex: 1,
      "> div:not(:last-child)": {
        marginBottom: e.marginXS
      }
    },
    "&-title": Object.assign({
      color: e.colorTextHeading,
      fontWeight: e.fontWeightStrong,
      fontSize: e.fontSizeLG
    }, Rp),
    "&-description": {
      color: e.colorTextDescription
    }
  }),
  Nk = e => {
    const {
      componentCls: t,
      cardPaddingBase: n,
      colorFillAlter: r
    } = e;
    return {
      [`${t}-head`]: {
        padding: `0 ${n}px`,
        background: r,
        "&-title": {
          fontSize: e.fontSize
        }
      },
      [`${t}-body`]: {
        padding: `${e.padding}px ${n}px`
      }
    }
  },
  Mk = e => {
    const {
      componentCls: t
    } = e;
    return {
      overflow: "hidden",
      [`${t}-body`]: {
        userSelect: "none"
      }
    }
  },
  _k = e => {
    const {
      antCls: t,
      componentCls: n,
      cardShadow: r,
      cardHeadPadding: o,
      colorBorderSecondary: i,
      boxShadowTertiary: a,
      cardPaddingBase: l,
      extraColor: s
    } = e;
    return {
      [n]: Object.assign(Object.assign({}, cr(e)), {
        position: "relative",
        background: e.colorBgContainer,
        borderRadius: e.borderRadiusLG,
        [`&:not(${n}-bordered)`]: {
          boxShadow: a
        },
        [`${n}-head`]: Pk(e),
        [`${n}-extra`]: {
          marginInlineStart: "auto",
          color: s,
          fontWeight: "normal",
          fontSize: e.fontSize
        },
        [`${n}-body`]: Object.assign({
          padding: l,
          borderRadius: ` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
        }, Ji()),
        [`${n}-grid`]: Rk(e),
        [`${n}-cover`]: {
          "> *": {
            display: "block",
            width: "100%"
          },
          [`img, img + ${t}-image-mask`]: {
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
          }
        },
        [`${n}-actions`]: Tk(e),
        [`${n}-meta`]: Ik(e)
      }),
      [`${n}-bordered`]: {
        border: `${e.lineWidth}px ${e.lineType} ${i}`,
        [`${n}-cover`]: {
          marginTop: -1,
          marginInlineStart: -1,
          marginInlineEnd: -1
        }
      },
      [`${n}-hoverable`]: {
        cursor: "pointer",
        transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
        "&:hover": {
          borderColor: "transparent",
          boxShadow: r
        }
      },
      [`${n}-contain-grid`]: {
        borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0 `,
        [`${n}-body`]: {
          display: "flex",
          flexWrap: "wrap"
        },
        [`&:not(${n}-loading) ${n}-body`]: {
          marginBlockStart: -e.lineWidth,
          marginInlineStart: -e.lineWidth,
          padding: 0
        }
      },
      [`${n}-contain-tabs`]: {
        [`> ${n}-head`]: {
          [`${n}-head-title, ${n}-extra`]: {
            paddingTop: o
          }
        }
      },
      [`${n}-type-inner`]: Nk(e),
      [`${n}-loading`]: Mk(e),
      [`${n}-rtl`]: {
        direction: "rtl"
      }
    }
  },
  kk = e => {
    const {
      componentCls: t,
      cardPaddingSM: n,
      headerHeightSM: r,
      headerFontSizeSM: o
    } = e;
    return {
      [`${t}-small`]: {
        [`> ${t}-head`]: {
          minHeight: r,
          padding: `0 ${n}px`,
          fontSize: o,
          [`> ${t}-head-wrapper`]: {
            [`> ${t}-extra`]: {
              fontSize: e.fontSize
            }
          }
        },
        [`> ${t}-body`]: {
          padding: n
        }
      },
      [`${t}-small${t}-contain-tabs`]: {
        [`> ${t}-head`]: {
          [`${t}-head-title, ${t}-extra`]: {
            minHeight: r,
            paddingTop: 0,
            display: "flex",
            alignItems: "center"
          }
        }
      }
    }
  },
  zk = rn("Card", e => {
    const t = wt(e, {
      cardShadow: e.boxShadowCard,
      cardHeadPadding: e.padding,
      cardPaddingBase: e.paddingLG,
      cardActionsIconSize: e.fontSize,
      cardPaddingSM: 12
    });
    return [_k(t), kk(t)]
  }, e => ({
    headerBg: "transparent",
    headerFontSize: e.fontSizeLG,
    headerFontSizeSM: e.fontSize,
    headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
    headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
    actionsBg: e.colorBgContainer,
    actionsLiMargin: `${e.paddingSM}px 0`,
    tabsMarginBottom: -e.padding - e.lineWidth,
    extraColor: e.colorText
  }));
var t0 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};

function Lk(e) {
  return e.map((t, n) => c.createElement("li", {
    style: {
      width: `${100/e.length}%`
    },
    key: `action-${n}`
  }, c.createElement("span", null, t)))
}
const Ak = c.forwardRef((e, t) => {
    const {
      prefixCls: n,
      className: r,
      rootClassName: o,
      style: i,
      extra: a,
      headStyle: l = {},
      bodyStyle: s = {},
      title: u,
      loading: d,
      bordered: f = !0,
      size: v,
      type: y,
      cover: b,
      actions: h,
      tabList: C,
      children: g,
      activeTabKey: p,
      defaultActiveTabKey: m,
      tabBarExtraContent: S,
      hoverable: E,
      tabProps: w = {}
    } = e, x = t0(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]), {
      getPrefixCls: R,
      direction: P,
      card: O
    } = c.useContext(Le), _ = fe => {
      var le;
      (le = e.onTabChange) === null || le === void 0 || le.call(e, fe)
    }, N = c.useMemo(() => {
      let fe = !1;
      return c.Children.forEach(g, le => {
        le && le.type && le.type === bC && (fe = !0)
      }), fe
    }, [g]), I = R("card", n), [A, j] = zk(I), M = c.createElement(k_, {
      loading: !0,
      active: !0,
      paragraph: {
        rows: 4
      },
      title: !1
    }, g), $ = p !== void 0, T = Object.assign(Object.assign({}, w), {
      [$ ? "activeKey" : "defaultActiveKey"]: $ ? p : m,
      tabBarExtraContent: S
    });
    let k;
    const L = ta(v),
      B = !L || L === "default" ? "large" : L,
      F = C ? c.createElement(Ek, Object.assign({
        size: B
      }, T, {
        className: `${I}-head-tabs`,
        onChange: _,
        items: C.map(fe => {
          var {
            tab: le
          } = fe, oe = t0(fe, ["tab"]);
          return Object.assign({
            label: le
          }, oe)
        })
      })) : null;
    (u || a || F) && (k = c.createElement("div", {
      className: `${I}-head`,
      style: l
    }, c.createElement("div", {
      className: `${I}-head-wrapper`
    }, u && c.createElement("div", {
      className: `${I}-head-title`
    }, u), a && c.createElement("div", {
      className: `${I}-extra`
    }, a)), F));
    const V = b ? c.createElement("div", {
        className: `${I}-cover`
      }, b) : null,
      K = c.createElement("div", {
        className: `${I}-body`,
        style: s
      }, d ? M : g),
      Q = h && h.length ? c.createElement("ul", {
        className: `${I}-actions`
      }, Lk(h)) : null,
      W = Hr(x, ["onTabChange"]),
      G = U(I, O == null ? void 0 : O.className, {
        [`${I}-loading`]: d,
        [`${I}-bordered`]: f,
        [`${I}-hoverable`]: E,
        [`${I}-contain-grid`]: N,
        [`${I}-contain-tabs`]: C && C.length,
        [`${I}-${L}`]: L,
        [`${I}-type-${y}`]: !!y,
        [`${I}-rtl`]: P === "rtl"
      }, r, o, j),
      Z = Object.assign(Object.assign({}, O == null ? void 0 : O.style), i);
    return A(c.createElement("div", Object.assign({
      ref: t
    }, W, {
      className: G,
      style: Z
    }), k, V, K, Q))
  }),
  jk = Ak;
var Fk = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const Dk = e => {
    const {
      prefixCls: t,
      className: n,
      avatar: r,
      title: o,
      description: i
    } = e, a = Fk(e, ["prefixCls", "className", "avatar", "title", "description"]), {
      getPrefixCls: l
    } = c.useContext(Le), s = l("card", t), u = U(`${s}-meta`, n), d = r ? c.createElement("div", {
      className: `${s}-meta-avatar`
    }, r) : null, f = o ? c.createElement("div", {
      className: `${s}-meta-title`
    }, o) : null, v = i ? c.createElement("div", {
      className: `${s}-meta-description`
    }, i) : null, y = f || v ? c.createElement("div", {
      className: `${s}-meta-detail`
    }, f, v) : null;
    return c.createElement("div", Object.assign({}, a, {
      className: u
    }), d, y)
  },
  Bk = Dk,
  Yp = jk;
Yp.Grid = bC;
Yp.Meta = Bk;
const Hk = Yp,
  Wk = e => {
    const {
      componentCls: t,
      sizePaddingEdgeHorizontal: n,
      colorSplit: r,
      lineWidth: o,
      textPaddingInline: i,
      orientationMargin: a,
      verticalMarginInline: l
    } = e;
    return {
      [t]: Object.assign(Object.assign({}, cr(e)), {
        borderBlockStart: `${o}px solid ${r}`,
        "&-vertical": {
          position: "relative",
          top: "-0.06em",
          display: "inline-block",
          height: "0.9em",
          marginInline: l,
          marginBlock: 0,
          verticalAlign: "middle",
          borderTop: 0,
          borderInlineStart: `${o}px solid ${r}`
        },
        "&-horizontal": {
          display: "flex",
          clear: "both",
          width: "100%",
          minWidth: "100%",
          margin: `${e.dividerHorizontalGutterMargin}px 0`
        },
        [`&-horizontal${t}-with-text`]: {
          display: "flex",
          alignItems: "center",
          margin: `${e.dividerHorizontalWithTextGutterMargin}px 0`,
          color: e.colorTextHeading,
          fontWeight: 500,
          fontSize: e.fontSizeLG,
          whiteSpace: "nowrap",
          textAlign: "center",
          borderBlockStart: `0 ${r}`,
          "&::before, &::after": {
            position: "relative",
            width: "50%",
            borderBlockStart: `${o}px solid transparent`,
            borderBlockStartColor: "inherit",
            borderBlockEnd: 0,
            transform: "translateY(50%)",
            content: "''"
          }
        },
        [`&-horizontal${t}-with-text-left`]: {
          "&::before": {
            width: `${a*100}%`
          },
          "&::after": {
            width: `${100-a*100}%`
          }
        },
        [`&-horizontal${t}-with-text-right`]: {
          "&::before": {
            width: `${100-a*100}%`
          },
          "&::after": {
            width: `${a*100}%`
          }
        },
        [`${t}-inner-text`]: {
          display: "inline-block",
          paddingBlock: 0,
          paddingInline: i
        },
        "&-dashed": {
          background: "none",
          borderColor: r,
          borderStyle: "dashed",
          borderWidth: `${o}px 0 0`
        },
        [`&-horizontal${t}-with-text${t}-dashed`]: {
          "&::before, &::after": {
            borderStyle: "dashed none none"
          }
        },
        [`&-vertical${t}-dashed`]: {
          borderInlineStartWidth: o,
          borderInlineEnd: 0,
          borderBlockStart: 0,
          borderBlockEnd: 0
        },
        [`&-plain${t}-with-text`]: {
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize
        },
        [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
          "&::before": {
            width: 0
          },
          "&::after": {
            width: "100%"
          },
          [`${t}-inner-text`]: {
            paddingInlineStart: n
          }
        },
        [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
          "&::before": {
            width: "100%"
          },
          "&::after": {
            width: 0
          },
          [`${t}-inner-text`]: {
            paddingInlineEnd: n
          }
        }
      })
    }
  },
  Vk = rn("Divider", e => {
    const t = wt(e, {
      dividerHorizontalWithTextGutterMargin: e.margin,
      dividerHorizontalGutterMargin: e.marginLG,
      sizePaddingEdgeHorizontal: 0
    });
    return [Wk(t)]
  }, e => ({
    textPaddingInline: "1em",
    orientationMargin: .05,
    verticalMarginInline: e.marginXS
  }));
var Uk = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const Kk = e => {
    const {
      getPrefixCls: t,
      direction: n,
      divider: r
    } = c.useContext(Le), {
      prefixCls: o,
      type: i = "horizontal",
      orientation: a = "center",
      orientationMargin: l,
      className: s,
      rootClassName: u,
      children: d,
      dashed: f,
      plain: v,
      style: y
    } = e, b = Uk(e, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "plain", "style"]), h = t("divider", o), [C, g] = Vk(h), p = a.length > 0 ? `-${a}` : a, m = !!d, S = a === "left" && l != null, E = a === "right" && l != null, w = U(h, r == null ? void 0 : r.className, g, `${h}-${i}`, {
      [`${h}-with-text`]: m,
      [`${h}-with-text${p}`]: m,
      [`${h}-dashed`]: !!f,
      [`${h}-plain`]: !!v,
      [`${h}-rtl`]: n === "rtl",
      [`${h}-no-default-orientation-margin-left`]: S,
      [`${h}-no-default-orientation-margin-right`]: E
    }, s, u), x = c.useMemo(() => typeof l == "number" ? l : /^\d+$/.test(l) ? Number(l) : l, [l]), R = Object.assign(Object.assign({}, S && {
      marginLeft: x
    }), E && {
      marginRight: x
    });
    return C(c.createElement("div", Object.assign({
      className: w,
      style: Object.assign(Object.assign({}, r == null ? void 0 : r.style), y)
    }, b, {
      role: "separator"
    }), d && i !== "vertical" && c.createElement("span", {
      className: `${h}-inner-text`,
      style: R
    }, d)))
  },
  n0 = Kk;

function vi(e) {
  return !!(e.addonBefore || e.addonAfter)
}

function bd(e) {
  return !!(e.prefix || e.suffix || e.allowClear)
}

function Sd(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === "click") {
      var i = e.cloneNode(!0);
      o = Object.create(t, {
        target: {
          value: i
        },
        currentTarget: {
          value: i
        }
      }), i.value = "", n(o);
      return
    }
    if (r !== void 0) {
      o = Object.create(t, {
        target: {
          value: e
        },
        currentTarget: {
          value: e
        }
      }), e.value = r, n(o);
      return
    }
    n(o)
  }
}

function Gk(e) {
  return typeof e > "u" || e === null ? "" : String(e)
}
var Xk = function(t) {
  var n, r, o = t.inputElement,
    i = t.prefixCls,
    a = t.prefix,
    l = t.suffix,
    s = t.addonBefore,
    u = t.addonAfter,
    d = t.className,
    f = t.style,
    v = t.disabled,
    y = t.readOnly,
    b = t.focused,
    h = t.triggerFocus,
    C = t.allowClear,
    g = t.value,
    p = t.handleReset,
    m = t.hidden,
    S = t.classes,
    E = t.classNames,
    w = t.dataAttrs,
    x = t.styles,
    R = t.components,
    P = (R == null ? void 0 : R.affixWrapper) || "span",
    O = (R == null ? void 0 : R.groupWrapper) || "span",
    _ = (R == null ? void 0 : R.wrapper) || "span",
    N = (R == null ? void 0 : R.groupAddon) || "span",
    I = c.useRef(null),
    A = function(W) {
      var G;
      (G = I.current) !== null && G !== void 0 && G.contains(W.target) && (h == null || h())
    },
    j = function() {
      var W;
      if (!C) return null;
      var G = !v && !y && g,
        Z = "".concat(i, "-clear-icon"),
        fe = ze(C) === "object" && C !== null && C !== void 0 && C.clearIcon ? C.clearIcon : "✖";
      return X.createElement("span", {
        onClick: p,
        onMouseDown: function(oe) {
          return oe.preventDefault()
        },
        className: U(Z, (W = {}, z(W, "".concat(Z, "-hidden"), !G), z(W, "".concat(Z, "-has-suffix"), !!l), W)),
        role: "button",
        tabIndex: -1
      }, fe)
    },
    M = c.cloneElement(o, {
      value: g,
      hidden: m,
      className: U((n = o.props) === null || n === void 0 ? void 0 : n.className, !bd(t) && !vi(t) && d) || null,
      style: D(D({}, (r = o.props) === null || r === void 0 ? void 0 : r.style), !bd(t) && !vi(t) ? f : {})
    });
  if (bd(t)) {
    var $, T = "".concat(i, "-affix-wrapper"),
      k = U(T, ($ = {}, z($, "".concat(T, "-disabled"), v), z($, "".concat(T, "-focused"), b), z($, "".concat(T, "-readonly"), y), z($, "".concat(T, "-input-with-clear-btn"), l && C && g), $), !vi(t) && d, S == null ? void 0 : S.affixWrapper, E == null ? void 0 : E.affixWrapper),
      L = (l || C) && X.createElement("span", {
        className: U("".concat(i, "-suffix"), E == null ? void 0 : E.suffix),
        style: x == null ? void 0 : x.suffix
      }, j(), l);
    M = X.createElement(P, de({
      className: k,
      style: D(D({}, vi(t) ? void 0 : f), x == null ? void 0 : x.affixWrapper),
      hidden: !vi(t) && m,
      onClick: A
    }, w == null ? void 0 : w.affixWrapper, {
      ref: I
    }), a && X.createElement("span", {
      className: U("".concat(i, "-prefix"), E == null ? void 0 : E.prefix),
      style: x == null ? void 0 : x.prefix
    }, a), c.cloneElement(o, {
      value: g,
      hidden: null
    }), L)
  }
  if (vi(t)) {
    var B = "".concat(i, "-group"),
      F = "".concat(B, "-addon"),
      V = U("".concat(i, "-wrapper"), B, S == null ? void 0 : S.wrapper),
      K = U("".concat(i, "-group-wrapper"), d, S == null ? void 0 : S.group);
    return X.createElement(O, {
      className: K,
      style: f,
      hidden: m
    }, X.createElement(_, {
      className: V
    }, s && X.createElement(N, {
      className: F
    }, s), c.cloneElement(M, {
      hidden: null
    }), u && X.createElement(N, {
      className: F
    }, u)))
  }
  return M
};
globalThis && globalThis.__rest;

function qk(e, t) {
  if (!e) return;
  e.focus(t);
  const {
    cursor: n
  } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
        break
    }
  }
}
var Qk = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
  Yk = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"],
  Cd = {},
  Ln;

function Zk(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Cd[n]) return Cd[n];
  var r = window.getComputedStyle(e),
    o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"),
    i = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")),
    a = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")),
    l = Yk.map(function(u) {
      return "".concat(u, ":").concat(r.getPropertyValue(u))
    }).join(";"),
    s = {
      sizingStyle: l,
      paddingSize: i,
      borderSize: a,
      boxSizing: o
    };
  return t && n && (Cd[n] = s), s
}

function Jk(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Ln || (Ln = document.createElement("textarea"), Ln.setAttribute("tab-index", "-1"), Ln.setAttribute("aria-hidden", "true"), document.body.appendChild(Ln)), e.getAttribute("wrap") ? Ln.setAttribute("wrap", e.getAttribute("wrap")) : Ln.removeAttribute("wrap");
  var o = Zk(e, t),
    i = o.paddingSize,
    a = o.borderSize,
    l = o.boxSizing,
    s = o.sizingStyle;
  Ln.setAttribute("style", "".concat(s, ";").concat(Qk)), Ln.value = e.value || e.placeholder || "";
  var u = void 0,
    d = void 0,
    f, v = Ln.scrollHeight;
  if (l === "border-box" ? v += a : l === "content-box" && (v -= i), n !== null || r !== null) {
    Ln.value = " ";
    var y = Ln.scrollHeight - i;
    n !== null && (u = y * n, l === "border-box" && (u = u + i + a), v = Math.max(u, v)), r !== null && (d = y * r, l === "border-box" && (d = d + i + a), f = v > d ? "" : "hidden", v = Math.min(d, v))
  }
  var b = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return u && (b.minHeight = u), d && (b.maxHeight = d), b
}
var ez = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"],
  xd = 0,
  wd = 1,
  Ed = 2,
  tz = c.forwardRef(function(e, t) {
    var n = e,
      r = n.prefixCls;
    n.onPressEnter;
    var o = n.defaultValue,
      i = n.value,
      a = n.autoSize,
      l = n.onResize,
      s = n.className,
      u = n.style,
      d = n.disabled,
      f = n.onChange;
    n.onInternalAutoSize;
    var v = Fe(n, ez),
      y = Sr(o, {
        value: i,
        postState: function(K) {
          return K ?? ""
        }
      }),
      b = H(y, 2),
      h = b[0],
      C = b[1],
      g = function(K) {
        C(K.target.value), f == null || f(K)
      },
      p = c.useRef();
    c.useImperativeHandle(t, function() {
      return {
        textArea: p.current
      }
    });
    var m = c.useMemo(function() {
        return a && ze(a) === "object" ? [a.minRows, a.maxRows] : []
      }, [a]),
      S = H(m, 2),
      E = S[0],
      w = S[1],
      x = !!a,
      R = function() {
        try {
          if (document.activeElement === p.current) {
            var K = p.current,
              Q = K.selectionStart,
              W = K.selectionEnd,
              G = K.scrollTop;
            p.current.setSelectionRange(Q, W), p.current.scrollTop = G
          }
        } catch {}
      },
      P = c.useState(Ed),
      O = H(P, 2),
      _ = O[0],
      N = O[1],
      I = c.useState(),
      A = H(I, 2),
      j = A[0],
      M = A[1],
      $ = function() {
        N(xd)
      };
    gt(function() {
      x && $()
    }, [i, E, w, x]), gt(function() {
      if (_ === xd) N(wd);
      else if (_ === wd) {
        var V = Jk(p.current, !1, E, w);
        N(Ed), M(V)
      } else R()
    }, [_]);
    var T = c.useRef(),
      k = function() {
        It.cancel(T.current)
      },
      L = function(K) {
        _ === Ed && (l == null || l(K), a && (k(), T.current = It(function() {
          $()
        })))
      };
    c.useEffect(function() {
      return k
    }, []);
    var B = x ? j : null,
      F = D(D({}, u), B);
    return (_ === xd || _ === wd) && (F.overflowY = "hidden", F.overflowX = "hidden"), c.createElement(nr, {
      onResize: L,
      disabled: !(a || l)
    }, c.createElement("textarea", de({}, v, {
      ref: p,
      style: F,
      className: U(r, s, z({}, "".concat(r, "-disabled"), d)),
      disabled: d,
      value: h,
      onChange: g
    })))
  }),
  nz = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "classes", "showCount", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"];

function SC(e, t) {
  return ce(e || "").slice(0, t).join("")
}

function r0(e, t, n, r) {
  var o = n;
  return e ? o = SC(n, r) : ce(t || "").length < n.length && ce(n || "").length > r && (o = t), o
}
var rz = X.forwardRef(function(e, t) {
    var n, r = e.defaultValue,
      o = e.value,
      i = e.onFocus,
      a = e.onBlur,
      l = e.onChange,
      s = e.allowClear,
      u = e.maxLength,
      d = e.onCompositionStart,
      f = e.onCompositionEnd,
      v = e.suffix,
      y = e.prefixCls,
      b = y === void 0 ? "rc-textarea" : y,
      h = e.classes,
      C = e.showCount,
      g = e.className,
      p = e.style,
      m = e.disabled,
      S = e.hidden,
      E = e.classNames,
      w = e.styles,
      x = e.onResize,
      R = Fe(e, nz),
      P = Sr(r, {
        value: o,
        defaultValue: r
      }),
      O = H(P, 2),
      _ = O[0],
      N = O[1],
      I = c.useRef(null),
      A = X.useState(!1),
      j = H(A, 2),
      M = j[0],
      $ = j[1],
      T = X.useState(!1),
      k = H(T, 2),
      L = k[0],
      B = k[1],
      F = X.useRef(),
      V = X.useRef(0),
      K = X.useState(null),
      Q = H(K, 2),
      W = Q[0],
      G = Q[1],
      Z = function() {
        var ue;
        (ue = I.current) === null || ue === void 0 || ue.textArea.focus()
      };
    c.useImperativeHandle(t, function() {
      return {
        resizableTextArea: I.current,
        focus: Z,
        blur: function() {
          var ue;
          (ue = I.current) === null || ue === void 0 || ue.textArea.blur()
        }
      }
    }), c.useEffect(function() {
      $(function(De) {
        return !m && De
      })
    }, [m]);
    var fe = Number(u) > 0,
      le = function(ue) {
        B(!0), F.current = _, V.current = ue.currentTarget.selectionStart, d == null || d(ue)
      },
      oe = function(ue) {
        B(!1);
        var he = ue.currentTarget.value;
        if (fe) {
          var Re, rt = V.current >= u + 1 || V.current === ((Re = F.current) === null || Re === void 0 ? void 0 : Re.length);
          he = r0(rt, F.current, he, u)
        }
        he !== _ && (N(he), Sd(ue.currentTarget, ue, l, he)), f == null || f(ue)
      },
      Oe = function(ue) {
        var he = ue.target.value;
        if (!L && fe) {
          var Re = ue.target.selectionStart >= u + 1 || ue.target.selectionStart === he.length || !ue.target.selectionStart;
          he = r0(Re, _, he, u)
        }
        N(he), Sd(ue.currentTarget, ue, l, he)
      },
      Ce = function(ue) {
        var he = R.onPressEnter,
          Re = R.onKeyDown;
        ue.key === "Enter" && he && he(ue), Re == null || Re(ue)
      },
      Ue = function(ue) {
        $(!0), i == null || i(ue)
      },
      xe = function(ue) {
        $(!1), a == null || a(ue)
      },
      pe = function(ue) {
        var he;
        N(""), Z(), Sd((he = I.current) === null || he === void 0 ? void 0 : he.textArea, ue, l)
      },
      ye = Gk(_);
    !L && fe && o == null && (ye = SC(ye, u));
    var Y = v,
      re;
    if (C) {
      var ne = ce(ye).length;
      ze(C) === "object" ? re = C.formatter({
        value: ye,
        count: ne,
        maxLength: u
      }) : re = "".concat(ne).concat(fe ? " / ".concat(u) : ""), Y = X.createElement(X.Fragment, null, Y, X.createElement("span", {
        className: U("".concat(b, "-data-count"), E == null ? void 0 : E.count),
        style: w == null ? void 0 : w.count
      }, re))
    }
    var ie = function(ue) {
        var he;
        x == null || x(ue), (he = I.current) !== null && he !== void 0 && he.textArea.style.height && G(!0)
      },
      be = !R.autoSize && !C && !s,
      ke = X.createElement(Xk, {
        value: ye,
        allowClear: s,
        handleReset: pe,
        suffix: Y,
        prefixCls: b,
        classes: {
          affixWrapper: U(h == null ? void 0 : h.affixWrapper, (n = {}, z(n, "".concat(b, "-show-count"), C), z(n, "".concat(b, "-textarea-allow-clear"), s), n))
        },
        disabled: m,
        focused: M,
        className: g,
        style: D(D({}, p), W && !be ? {
          height: "auto"
        } : {}),
        dataAttrs: {
          affixWrapper: {
            "data-count": typeof re == "string" ? re : void 0
          }
        },
        hidden: S,
        inputElement: X.createElement(tz, de({}, R, {
          onKeyDown: Ce,
          onChange: Oe,
          onFocus: Ue,
          onBlur: xe,
          onCompositionStart: le,
          onCompositionEnd: oe,
          className: E == null ? void 0 : E.textarea,
          style: D(D({}, w == null ? void 0 : w.textarea), {}, {
            resize: p == null ? void 0 : p.resize
          }),
          disabled: m,
          prefixCls: b,
          onResize: ie,
          ref: I
        }))
      });
    return ke
  }),
  oz = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
  };
const iz = c.forwardRef((e, t) => {
    const {
      prefixCls: n,
      bordered: r = !0,
      size: o,
      disabled: i,
      status: a,
      allowClear: l,
      showCount: s,
      classNames: u,
      rootClassName: d,
      className: f
    } = e, v = oz(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "showCount", "classNames", "rootClassName", "className"]), {
      getPrefixCls: y,
      direction: b
    } = c.useContext(Le), h = ta(o), C = c.useContext(Tp), g = i ?? C, {
      status: p,
      hasFeedback: m,
      feedbackIcon: S
    } = c.useContext(cv), E = aN(p, a), w = c.useRef(null);
    c.useImperativeHandle(t, () => {
      var _;
      return {
        resizableTextArea: (_ = w.current) === null || _ === void 0 ? void 0 : _.resizableTextArea,
        focus: N => {
          var I, A;
          qk((A = (I = w.current) === null || I === void 0 ? void 0 : I.resizableTextArea) === null || A === void 0 ? void 0 : A.textArea, N)
        },
        blur: () => {
          var N;
          return (N = w.current) === null || N === void 0 ? void 0 : N.blur()
        }
      }
    });
    const x = y("input", n);
    let R;
    typeof l == "object" && (l != null && l.clearIcon) ? R = l : l && (R = {
      clearIcon: c.createElement(F1, null)
    });
    const [P, O] = r_(x);
    return P(c.createElement(rz, Object.assign({}, v, {
      disabled: g,
      allowClear: R,
      className: U(f, d),
      classes: {
        affixWrapper: U(`${x}-textarea-affix-wrapper`, {
          [`${x}-affix-wrapper-rtl`]: b === "rtl",
          [`${x}-affix-wrapper-borderless`]: !r,
          [`${x}-affix-wrapper-sm`]: h === "small",
          [`${x}-affix-wrapper-lg`]: h === "large",
          [`${x}-textarea-show-count`]: s
        }, Ah(`${x}-affix-wrapper`, E), O)
      },
      classNames: Object.assign(Object.assign({}, u), {
        textarea: U({
          [`${x}-borderless`]: !r,
          [`${x}-sm`]: h === "small",
          [`${x}-lg`]: h === "large"
        }, Ah(x, E), O, u == null ? void 0 : u.textarea)
      }),
      prefixCls: x,
      suffix: m && c.createElement("span", {
        className: `${x}-textarea-suffix`
      }, S),
      showCount: s,
      ref: w
    })))
  }),
  az = iz;

function o0(e) {
  return ["small", "middle", "large"].includes(e)
}

function i0(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1
}
const CC = X.createContext({
    latestIndex: 0
  }),
  lz = CC.Provider,
  sz = e => {
    let {
      className: t,
      index: n,
      children: r,
      split: o,
      style: i
    } = e;
    const {
      latestIndex: a
    } = c.useContext(CC);
    return r == null ? null : c.createElement(c.Fragment, null, c.createElement("div", {
      className: t,
      style: i
    }, r), n < a && o && c.createElement("span", {
      className: `${t}-split`
    }, o))
  },
  cz = sz;
var uz = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const dz = c.forwardRef((e, t) => {
    var n, r;
    const {
      getPrefixCls: o,
      space: i,
      direction: a
    } = c.useContext(Le), {
      size: l = (i == null ? void 0 : i.size) || "small",
      align: s,
      className: u,
      rootClassName: d,
      children: f,
      direction: v = "horizontal",
      prefixCls: y,
      split: b,
      style: h,
      wrap: C = !1,
      classNames: g,
      styles: p
    } = e, m = uz(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [S, E] = Array.isArray(l) ? l : [l, l], w = o0(E), x = o0(S), R = i0(E), P = i0(S), O = or(f, {
      keepEmpty: !0
    }), _ = s === void 0 && v === "horizontal" ? "center" : s, N = o("space", y), [I, A] = U1(N), j = U(N, i == null ? void 0 : i.className, A, `${N}-${v}`, {
      [`${N}-rtl`]: a === "rtl",
      [`${N}-align-${_}`]: _,
      [`${N}-gap-row-${E}`]: w,
      [`${N}-gap-col-${S}`]: x
    }, u, d), M = U(`${N}-item`, (n = g == null ? void 0 : g.item) !== null && n !== void 0 ? n : (r = i == null ? void 0 : i.classNames) === null || r === void 0 ? void 0 : r.item);
    let $ = 0;
    const T = O.map((B, F) => {
        var V, K;
        B != null && ($ = F);
        const Q = B && B.key || `${M}-${F}`;
        return c.createElement(cz, {
          className: M,
          key: Q,
          index: F,
          split: b,
          style: (V = p == null ? void 0 : p.item) !== null && V !== void 0 ? V : (K = i == null ? void 0 : i.styles) === null || K === void 0 ? void 0 : K.item
        }, B)
      }),
      k = c.useMemo(() => ({
        latestIndex: $
      }), [$]);
    if (O.length === 0) return null;
    const L = {};
    return C && (L.flexWrap = "wrap"), !x && P && (L.columnGap = S), !w && R && (L.rowGap = E), I(c.createElement("div", Object.assign({
      ref: t,
      className: j,
      style: Object.assign(Object.assign(Object.assign({}, L), i == null ? void 0 : i.style), h)
    }, m), c.createElement(lz, {
      value: k
    }, T)))
  }),
  xC = dz;
xC.Compact = K2;
const a0 = xC;
var fz = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const vz = e => {
    const {
      prefixCls: t,
      className: n,
      closeIcon: r,
      closable: o,
      type: i,
      title: a,
      children: l
    } = e, s = fz(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children"]), {
      getPrefixCls: u
    } = c.useContext(Le), d = u(), f = t || u("modal"), [, v] = xS(f), y = `${f}-confirm`;
    let b = {};
    return i ? b = {
      closable: o ?? !1,
      title: "",
      footer: "",
      children: c.createElement(ES, Object.assign({}, e, {
        prefixCls: f,
        confirmPrefixCls: y,
        rootPrefixCls: d,
        content: l
      }))
    } : b = {
      closable: o ?? !0,
      title: a,
      footer: e.footer === void 0 ? c.createElement(bS, Object.assign({}, e)) : e.footer,
      children: l
    }, c.createElement(lS, Object.assign({
      prefixCls: f,
      className: U(v, `${f}-pure-panel`, i && y, i && `${y}-${i}`, n)
    }, s, {
      closeIcon: yS(f, r),
      closable: o
    }, b))
  },
  pz = zI(vz);

function wC(e) {
  return Pl(PS(e))
}
const ur = wS;
ur.useModal = kI;
ur.info = function(t) {
  return Pl(RS(t))
};
ur.success = function(t) {
  return Pl(TS(t))
};
ur.error = function(t) {
  return Pl(IS(t))
};
ur.warning = wC;
ur.warn = wC;
ur.confirm = function(t) {
  return Pl(NS(t))
};
ur.destroyAll = function() {
  for (; Ro.length;) {
    const t = Ro.pop();
    t && t()
  }
};
ur.config = TI;
ur._InternalPanelDoNotUseOrYouWillBeFired = pz;
const mz = ur,
  gz = e => {
    const {
      paddingXXS: t,
      lineWidth: n,
      tagPaddingHorizontal: r,
      componentCls: o
    } = e, i = r - n, a = t - n;
    return {
      [o]: Object.assign(Object.assign({}, cr(e)), {
        display: "inline-block",
        height: "auto",
        marginInlineEnd: e.marginXS,
        paddingInline: i,
        fontSize: e.tagFontSize,
        lineHeight: e.tagLineHeight,
        whiteSpace: "nowrap",
        background: e.defaultBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadiusSM,
        opacity: 1,
        transition: `all ${e.motionDurationMid}`,
        textAlign: "start",
        position: "relative",
        [`&${o}-rtl`]: {
          direction: "rtl"
        },
        "&, a, a:hover": {
          color: e.defaultColor
        },
        [`${o}-close-icon`]: {
          marginInlineStart: a,
          color: e.colorTextDescription,
          fontSize: e.tagIconSize,
          cursor: "pointer",
          transition: `all ${e.motionDurationMid}`,
          "&:hover": {
            color: e.colorTextHeading
          }
        },
        [`&${o}-has-color`]: {
          borderColor: "transparent",
          [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
            color: e.colorTextLightSolid
          }
        },
        "&-checkable": {
          backgroundColor: "transparent",
          borderColor: "transparent",
          cursor: "pointer",
          [`&:not(${o}-checkable-checked):hover`]: {
            color: e.colorPrimary,
            backgroundColor: e.colorFillSecondary
          },
          "&:active, &-checked": {
            color: e.colorTextLightSolid
          },
          "&-checked": {
            backgroundColor: e.colorPrimary,
            "&:hover": {
              backgroundColor: e.colorPrimaryHover
            }
          },
          "&:active": {
            backgroundColor: e.colorPrimaryActive
          }
        },
        "&-hidden": {
          display: "none"
        },
        [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
          marginInlineStart: i
        }
      }),
      [`${o}-borderless`]: {
        borderColor: "transparent",
        background: e.tagBorderlessBg
      }
    }
  },
  Zp = e => {
    const {
      lineWidth: t,
      fontSizeIcon: n
    } = e, r = e.fontSizeSM, o = `${e.lineHeightSM*r}px`;
    return wt(e, {
      tagFontSize: r,
      tagLineHeight: o,
      tagIconSize: n - 2 * t,
      tagPaddingHorizontal: 8,
      tagBorderlessBg: e.colorFillTertiary
    })
  },
  Jp = e => ({
    defaultBg: e.colorFillQuaternary,
    defaultColor: e.colorText
  }),
  EC = rn("Tag", e => {
    const t = Zp(e);
    return gz(t)
  }, Jp);
var hz = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const yz = e => {
    const {
      prefixCls: t,
      style: n,
      className: r,
      checked: o,
      onChange: i,
      onClick: a
    } = e, l = hz(e, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]), {
      getPrefixCls: s,
      tag: u
    } = c.useContext(Le), d = h => {
      i == null || i(!o), a == null || a(h)
    }, f = s("tag", t), [v, y] = EC(f), b = U(f, `${f}-checkable`, {
      [`${f}-checkable-checked`]: o
    }, u == null ? void 0 : u.className, r, y);
    return v(c.createElement("span", Object.assign({}, l, {
      style: Object.assign(Object.assign({}, n), u == null ? void 0 : u.style),
      className: b,
      onClick: d
    })))
  },
  bz = yz,
  Sz = e => C1(e, (t, n) => {
    let {
      textColor: r,
      lightBorderColor: o,
      lightColor: i,
      darkColor: a
    } = n;
    return {
      [`${e.componentCls}-${t}`]: {
        color: r,
        background: i,
        borderColor: o,
        "&-inverse": {
          color: e.colorTextLightSolid,
          background: a,
          borderColor: a
        },
        [`&${e.componentCls}-borderless`]: {
          borderColor: "transparent"
        }
      }
    }
  }),
  Cz = au(["Tag", "preset"], e => {
    const t = Zp(e);
    return Sz(t)
  }, Jp);

function xz(e) {
  return typeof e != "string" ? e : e.charAt(0).toUpperCase() + e.slice(1)
}
const vs = (e, t, n) => {
    const r = xz(n);
    return {
      [`${e.componentCls}-${t}`]: {
        color: e[`color${n}`],
        background: e[`color${r}Bg`],
        borderColor: e[`color${r}Border`],
        [`&${e.componentCls}-borderless`]: {
          borderColor: "transparent"
        }
      }
    }
  },
  wz = au(["Tag", "status"], e => {
    const t = Zp(e);
    return [vs(t, "success", "Success"), vs(t, "processing", "Info"), vs(t, "error", "Error"), vs(t, "warning", "Warning")]
  }, Jp);
var Ez = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const $z = (e, t) => {
    const {
      prefixCls: n,
      className: r,
      rootClassName: o,
      style: i,
      children: a,
      icon: l,
      color: s,
      onClose: u,
      closeIcon: d,
      closable: f,
      bordered: v = !0
    } = e, y = Ez(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable", "bordered"]), {
      getPrefixCls: b,
      direction: h,
      tag: C
    } = c.useContext(Le), [g, p] = c.useState(!0);
    c.useEffect(() => {
      "visible" in y && p(y.visible)
    }, [y.visible]);
    const m = WS(s),
      S = _N(s),
      E = m || S,
      w = Object.assign(Object.assign({
        backgroundColor: s && !E ? s : void 0
      }, C == null ? void 0 : C.style), i),
      x = b("tag", n),
      [R, P] = EC(x),
      O = U(x, C == null ? void 0 : C.className, {
        [`${x}-${s}`]: E,
        [`${x}-has-color`]: s && !E,
        [`${x}-hidden`]: !g,
        [`${x}-rtl`]: h === "rtl",
        [`${x}-borderless`]: !v
      }, r, o, P),
      _ = $ => {
        $.stopPropagation(), u == null || u($), !$.defaultPrevented && p(!1)
      },
      [, N] = uS(f, d, $ => $ === null ? c.createElement(xl, {
        className: `${x}-close-icon`,
        onClick: _
      }) : c.createElement("span", {
        className: `${x}-close-icon`,
        onClick: _
      }, $), null, !1),
      I = typeof y.onClick == "function" || a && a.type === "a",
      A = l || null,
      j = A ? c.createElement(c.Fragment, null, A, a && c.createElement("span", null, a)) : a,
      M = c.createElement("span", Object.assign({}, y, {
        ref: t,
        className: O,
        style: w
      }), j, N, m && c.createElement(Cz, {
        key: "preset",
        prefixCls: x
      }), S && c.createElement(wz, {
        key: "status",
        prefixCls: x
      }));
    return R(I ? c.createElement(V1, {
      component: "Tag"
    }, M) : M)
  },
  $C = c.forwardRef($z);
$C.CheckableTag = bz;
const $d = $C;
var Oz = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const Pz = {
    border: 0,
    background: "transparent",
    padding: 0,
    lineHeight: "inherit",
    display: "inline-block"
  },
  Rz = c.forwardRef((e, t) => {
    const n = u => {
        const {
          keyCode: d
        } = u;
        d === te.ENTER && u.preventDefault()
      },
      r = u => {
        const {
          keyCode: d
        } = u, {
          onClick: f
        } = e;
        d === te.ENTER && f && f()
      },
      {
        style: o,
        noStyle: i,
        disabled: a
      } = e,
      l = Oz(e, ["style", "noStyle", "disabled"]);
    let s = {};
    return i || (s = Object.assign({}, Pz)), a && (s.pointerEvents = "none"), s = Object.assign(Object.assign({}, s), o), c.createElement("div", Object.assign({
      role: "button",
      tabIndex: 0,
      ref: t
    }, l, {
      onKeyDown: n,
      onKeyUp: r,
      style: s
    }))
  }),
  l0 = Rz;
var Tz = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
      }
    }]
  },
  name: "copy",
  theme: "outlined"
};
const Iz = Tz;
var Nz = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: Iz
  }))
};
const Mz = c.forwardRef(Nz);
var _z = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
      }
    }]
  },
  name: "edit",
  theme: "outlined"
};
const kz = _z;
var zz = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: kz
  }))
};
const Lz = c.forwardRef(zz);
var Az = function() {
    var e = document.getSelection();
    if (!e.rangeCount) return function() {};
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break
    }
    return e.removeAllRanges(),
      function() {
        e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach(function(o) {
          e.addRange(o)
        }), t && t.focus()
      }
  },
  jz = Az,
  s0 = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  },
  Fz = "Copy to clipboard: #{key}, Enter";

function Dz(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t)
}

function Bz(e, t) {
  var n, r, o, i, a, l, s = !1;
  t || (t = {}), n = t.debug || !1;
  try {
    o = jz(), i = document.createRange(), a = document.getSelection(), l = document.createElement("span"), l.textContent = e, l.ariaHidden = "true", l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", function(d) {
      if (d.stopPropagation(), t.format)
        if (d.preventDefault(), typeof d.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var f = s0[t.format] || s0.default;
          window.clipboardData.setData(f, e)
        } else d.clipboardData.clearData(), d.clipboardData.setData(t.format, e);
      t.onCopy && (d.preventDefault(), t.onCopy(d.clipboardData))
    }), document.body.appendChild(l), i.selectNodeContents(l), a.addRange(i);
    var u = document.execCommand("copy");
    if (!u) throw new Error("copy command was unsuccessful");
    s = !0
  } catch (d) {
    n && console.error("unable to copy using execCommand: ", d), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), s = !0
    } catch (f) {
      n && console.error("unable to copy using clipboardData: ", f), n && console.error("falling back to prompt"), r = Dz("message" in t ? t.message : Fz), window.prompt(r, e)
    }
  } finally {
    a && (typeof a.removeRange == "function" ? a.removeRange(i) : a.removeAllRanges()), l && document.body.removeChild(l), o()
  }
  return s
}
var Hz = Bz;
const Wz = wc(Hz);
var Vz = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  name: "enter",
  theme: "outlined"
};
const Uz = Vz;
var Kz = function(t, n) {
  return c.createElement(Rn, de({}, t, {
    ref: n,
    icon: Uz
  }))
};
const Gz = c.forwardRef(Kz),
  Xz = (e, t, n, r) => {
    const {
      titleMarginBottom: o,
      fontWeightStrong: i
    } = r;
    return {
      marginBottom: o,
      color: n,
      fontWeight: i,
      fontSize: e,
      lineHeight: t
    }
  },
  qz = e => {
    const t = [1, 2, 3, 4, 5],
      n = {};
    return t.forEach(r => {
      n[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `] = Xz(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e)
    }), n
  },
  Qz = e => {
    const {
      componentCls: t
    } = e;
    return {
      "a&, a": Object.assign(Object.assign({}, y1(e)), {
        textDecoration: e.linkDecoration,
        "&:active, &:hover": {
          textDecoration: e.linkHoverDecoration
        },
        [`&[disabled], &${t}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed",
          "&:active, &:hover": {
            color: e.colorTextDisabled
          },
          "&:active": {
            pointerEvents: "none"
          }
        }
      })
    }
  },
  Yz = e => ({
    code: {
      margin: "0 0.2em",
      paddingInline: "0.4em",
      paddingBlock: "0.2em 0.1em",
      fontSize: "85%",
      fontFamily: e.fontFamilyCode,
      background: "rgba(150, 150, 150, 0.1)",
      border: "1px solid rgba(100, 100, 100, 0.2)",
      borderRadius: 3
    },
    kbd: {
      margin: "0 0.2em",
      paddingInline: "0.4em",
      paddingBlock: "0.15em 0.1em",
      fontSize: "90%",
      fontFamily: e.fontFamilyCode,
      background: "rgba(150, 150, 150, 0.06)",
      border: "1px solid rgba(100, 100, 100, 0.2)",
      borderBottomWidth: 2,
      borderRadius: 3
    },
    mark: {
      padding: 0,
      backgroundColor: OO[2]
    },
    "u, ins": {
      textDecoration: "underline",
      textDecorationSkipInk: "auto"
    },
    "s, del": {
      textDecoration: "line-through"
    },
    strong: {
      fontWeight: 600
    },
    "ul, ol": {
      marginInline: 0,
      marginBlock: "0 1em",
      padding: 0,
      li: {
        marginInline: "20px 0",
        marginBlock: 0,
        paddingInline: "4px 0",
        paddingBlock: 0
      }
    },
    ul: {
      listStyleType: "circle",
      ul: {
        listStyleType: "disc"
      }
    },
    ol: {
      listStyleType: "decimal"
    },
    "pre, blockquote": {
      margin: "1em 0"
    },
    pre: {
      padding: "0.4em 0.6em",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      background: "rgba(150, 150, 150, 0.1)",
      border: "1px solid rgba(100, 100, 100, 0.2)",
      borderRadius: 3,
      fontFamily: e.fontFamilyCode,
      code: {
        display: "inline",
        margin: 0,
        padding: 0,
        fontSize: "inherit",
        fontFamily: "inherit",
        background: "transparent",
        border: 0
      }
    },
    blockquote: {
      paddingInline: "0.6em 0",
      paddingBlock: 0,
      borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
      opacity: .85
    }
  }),
  Zz = e => {
    const {
      componentCls: t,
      paddingSM: n
    } = e, r = n;
    return {
      "&-edit-content": {
        position: "relative",
        "div&": {
          insetInlineStart: -e.paddingSM,
          marginTop: -r,
          marginBottom: `calc(1em - ${r}px)`
        },
        [`${t}-edit-content-confirm`]: {
          position: "absolute",
          insetInlineEnd: e.marginXS + 2,
          insetBlockEnd: e.marginXS,
          color: e.colorTextDescription,
          fontWeight: "normal",
          fontSize: e.fontSize,
          fontStyle: "normal",
          pointerEvents: "none"
        },
        textarea: {
          margin: "0!important",
          MozTransition: "none",
          height: "1em"
        }
      }
    }
  },
  Jz = e => ({
    "&-copy-success": {
      "\n    &,\n    &:hover,\n    &:focus": {
        color: e.colorSuccess
      }
    }
  }),
  e4 = () => ({
    "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
      display: "inline-block",
      maxWidth: "100%"
    },
    "&-single-line": {
      whiteSpace: "nowrap"
    },
    "&-ellipsis-single-line": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      "a&, span&": {
        verticalAlign: "bottom"
      }
    },
    "&-ellipsis-multiple-line": {
      display: "-webkit-box",
      overflow: "hidden",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical"
    }
  }),
  t4 = e => {
    const {
      componentCls: t,
      titleMarginTop: n
    } = e;
    return {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: e.colorText,
        wordBreak: "break-word",
        lineHeight: e.lineHeight,
        [`&${t}-secondary`]: {
          color: e.colorTextDescription
        },
        [`&${t}-success`]: {
          color: e.colorSuccess
        },
        [`&${t}-warning`]: {
          color: e.colorWarning
        },
        [`&${t}-danger`]: {
          color: e.colorError,
          "a&:active, a&:focus": {
            color: e.colorErrorActive
          },
          "a&:hover": {
            color: e.colorErrorHover
          }
        },
        [`&${t}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed",
          userSelect: "none"
        },
        "\n        div&,\n        p\n      ": {
          marginBottom: "1em"
        }
      }, qz(e)), {
        [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
          marginTop: n
        },
        "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
          "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
            marginTop: n
          }
        }
      }), Yz(e)), Qz(e)), {
        [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, y1(e)), {
          marginInlineStart: e.marginXXS
        })
      }), Zz(e)), Jz(e)), e4()), {
        "&-rtl": {
          direction: "rtl"
        }
      })
    }
  },
  OC = rn("Typography", e => [t4(e)], () => ({
    titleMarginTop: "1.2em",
    titleMarginBottom: "0.5em"
  })),
  n4 = e => {
    const {
      prefixCls: t,
      "aria-label": n,
      className: r,
      style: o,
      direction: i,
      maxLength: a,
      autoSize: l = !0,
      value: s,
      onSave: u,
      onCancel: d,
      onEnd: f,
      component: v,
      enterIcon: y = c.createElement(Gz, null)
    } = e, b = c.useRef(null), h = c.useRef(!1), C = c.useRef(), [g, p] = c.useState(s);
    c.useEffect(() => {
      p(s)
    }, [s]), c.useEffect(() => {
      if (b.current && b.current.resizableTextArea) {
        const {
          textArea: A
        } = b.current.resizableTextArea;
        A.focus();
        const {
          length: j
        } = A.value;
        A.setSelectionRange(j, j)
      }
    }, []);
    const m = A => {
        let {
          target: j
        } = A;
        p(j.value.replace(/[\n\r]/g, ""))
      },
      S = () => {
        h.current = !0
      },
      E = () => {
        h.current = !1
      },
      w = A => {
        let {
          keyCode: j
        } = A;
        h.current || (C.current = j)
      },
      x = () => {
        u(g.trim())
      },
      R = A => {
        let {
          keyCode: j,
          ctrlKey: M,
          altKey: $,
          metaKey: T,
          shiftKey: k
        } = A;
        C.current === j && !h.current && !M && !$ && !T && !k && (j === te.ENTER ? (x(), f == null || f()) : j === te.ESC && d())
      },
      P = () => {
        x()
      },
      O = v ? `${t}-${v}` : "",
      [_, N] = OC(t),
      I = U(t, `${t}-edit-content`, {
        [`${t}-rtl`]: i === "rtl"
      }, r, O, N);
    return _(c.createElement("div", {
      className: I,
      style: o
    }, c.createElement(az, {
      ref: b,
      maxLength: a,
      value: g,
      onChange: m,
      onKeyDown: w,
      onKeyUp: R,
      onCompositionStart: S,
      onCompositionEnd: E,
      onBlur: P,
      "aria-label": n,
      rows: 1,
      autoSize: l
    }), y !== null ? ea(y, {
      className: `${t}-edit-content-confirm`
    }) : null))
  },
  r4 = n4;
var o4 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const i4 = c.forwardRef((e, t) => {
    const {
      prefixCls: n,
      component: r = "article",
      className: o,
      rootClassName: i,
      setContentRef: a,
      children: l,
      direction: s,
      style: u
    } = e, d = o4(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
      getPrefixCls: f,
      direction: v,
      typography: y
    } = c.useContext(Le), b = s ?? v;
    let h = t;
    a && (h = Cr(t, a));
    const C = f("typography", n),
      [g, p] = OC(C),
      m = U(C, y == null ? void 0 : y.className, {
        [`${C}-rtl`]: b === "rtl"
      }, o, i, p),
      S = Object.assign(Object.assign({}, y == null ? void 0 : y.style), u);
    return g(c.createElement(r, Object.assign({
      className: m,
      style: S,
      ref: h
    }, d), l))
  }),
  PC = i4;

function Od(e, t) {
  return c.useMemo(() => {
    const n = !!e;
    return [n, Object.assign(Object.assign({}, t), n && typeof e == "object" ? e : null)]
  }, [e])
}
const a4 = (e, t) => {
    const n = c.useRef(!1);
    c.useEffect(() => {
      n.current ? e() : n.current = !0
    }, t)
  },
  l4 = a4;

function RC(e) {
  const t = typeof e;
  return t === "string" || t === "number"
}

function s4(e) {
  let t = 0;
  return e.forEach(n => {
    RC(n) ? t += String(n).length : t += 1
  }), t
}

function Pd(e, t) {
  let n = 0;
  const r = [];
  for (let o = 0; o < e.length; o += 1) {
    if (n === t) return r;
    const i = e[o],
      l = RC(i) ? String(i).length : 1,
      s = n + l;
    if (s > t) {
      const u = t - n;
      return r.push(String(i).slice(0, u)), r
    }
    r.push(i), n = s
  }
  return e
}
const c4 = 0,
  ps = 1,
  c0 = 2,
  Rd = 3,
  Td = 4,
  u4 = e => {
    let {
      enabledMeasure: t,
      children: n,
      text: r,
      width: o,
      fontSize: i,
      rows: a,
      onEllipsis: l
    } = e;
    const [
      [s, u, d], f
    ] = c.useState([0, 0, 0]), [v, y] = c.useState(0), [b, h] = c.useState(c4), [C, g] = c.useState(0), p = c.useRef(null), m = c.useRef(null), S = c.useMemo(() => or(r), [r]), E = c.useMemo(() => s4(S), [S]), w = c.useMemo(() => !t || b !== Rd ? v && b !== Td && t ? n(Pd(S, v), v < E) : n(S, !1) : n(Pd(S, u), u < E), [t, b, n, S, u, E]);
    gt(() => {
      t && o && i && E && (h(ps), f([0, Math.ceil(E / 2), E]))
    }, [t, o, i, r, E, a]), gt(() => {
      var O;
      b === ps && g(((O = p.current) === null || O === void 0 ? void 0 : O.offsetHeight) || 0)
    }, [b]), gt(() => {
      var O, _;
      if (C) {
        if (b === ps) {
          const N = ((O = m.current) === null || O === void 0 ? void 0 : O.offsetHeight) || 0,
            I = a * C;
          N <= I ? (h(Td), l(!1)) : h(c0)
        } else if (b === c0)
          if (s !== d) {
            const N = ((_ = m.current) === null || _ === void 0 ? void 0 : _.offsetHeight) || 0,
              I = a * C;
            let A = s,
              j = d;
            s === d - 1 ? j = s : N <= I ? A = u : j = u;
            const M = Math.ceil((A + j) / 2);
            f([A, M, j])
          } else h(Rd), y(u), l(!0)
      }
    }, [b, s, d, a, C]);
    const x = {
        width: o,
        whiteSpace: "normal",
        margin: 0,
        padding: 0
      },
      R = (O, _, N) => c.createElement("span", {
        "aria-hidden": !0,
        ref: _,
        style: Object.assign({
          position: "fixed",
          display: "block",
          left: 0,
          top: 0,
          zIndex: -9999,
          visibility: "hidden",
          pointerEvents: "none",
          fontSize: Math.floor(i / 2) * 2
        }, N)
      }, O),
      P = (O, _) => {
        const N = Pd(S, O);
        return R(n(N, !0), _, x)
      };
    return c.createElement(c.Fragment, null, w, t && b !== Rd && b !== Td && c.createElement(c.Fragment, null, R("lg", p, {
      wordBreak: "keep-all",
      whiteSpace: "nowrap"
    }), b === ps ? R(n(S, !1), m, x) : P(u, m)))
  },
  d4 = u4,
  f4 = e => {
    let {
      enabledEllipsis: t,
      isEllipsis: n,
      children: r,
      tooltipProps: o
    } = e;
    return !(o != null && o.title) || !t ? r : c.createElement(Cc, Object.assign({
      open: n ? void 0 : !1
    }, o), r)
  },
  v4 = f4;
var p4 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};

function m4(e, t) {
  let {
    mark: n,
    code: r,
    underline: o,
    delete: i,
    strong: a,
    keyboard: l,
    italic: s
  } = e, u = t;

  function d(f, v) {
    v && (u = c.createElement(f, {}, u))
  }
  return d("strong", a), d("u", o), d("del", i), d("code", r), d("mark", n), d("kbd", l), d("i", s), u
}

function ms(e, t, n) {
  return e === !0 || e === void 0 ? t : e || n && t
}

function u0(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e]
}
const g4 = "...",
  h4 = c.forwardRef((e, t) => {
    var n, r, o;
    const {
      prefixCls: i,
      className: a,
      style: l,
      type: s,
      disabled: u,
      children: d,
      ellipsis: f,
      editable: v,
      copyable: y,
      component: b,
      title: h
    } = e, C = p4(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
      getPrefixCls: g,
      direction: p
    } = c.useContext(Le), [m] = ru("Text"), S = c.useRef(null), E = c.useRef(null), w = g("typography", i), x = Hr(C, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [R, P] = Od(v), [O, _] = Sr(!1, {
      value: P.editing
    }), {
      triggerType: N = ["icon"]
    } = P, I = ee => {
      var J;
      ee && ((J = P.onStart) === null || J === void 0 || J.call(P)), _(ee)
    };
    l4(() => {
      var ee;
      O || (ee = E.current) === null || ee === void 0 || ee.focus()
    }, [O]);
    const A = ee => {
        ee == null || ee.preventDefault(), I(!0)
      },
      j = ee => {
        var J;
        (J = P.onChange) === null || J === void 0 || J.call(P, ee), I(!1)
      },
      M = () => {
        var ee;
        (ee = P.onCancel) === null || ee === void 0 || ee.call(P), I(!1)
      },
      [$, T] = Od(y),
      [k, L] = c.useState(!1),
      B = c.useRef(null),
      F = {};
    T.format && (F.format = T.format);
    const V = () => {
        B.current && clearTimeout(B.current)
      },
      K = ee => {
        var J;
        ee == null || ee.preventDefault(), ee == null || ee.stopPropagation(), Wz(T.text || String(d) || "", F), L(!0), V(), B.current = setTimeout(() => {
          L(!1)
        }, 3e3), (J = T.onCopy) === null || J === void 0 || J.call(T, ee)
      };
    c.useEffect(() => V, []);
    const [Q, W] = c.useState(!1), [G, Z] = c.useState(!1), [fe, le] = c.useState(!1), [oe, Oe] = c.useState(!1), [Ce, Ue] = c.useState(!1), [xe, pe] = c.useState(!0), [ye, Y] = Od(f, {
      expandable: !1
    }), re = ye && !fe, {
      rows: ne = 1
    } = Y, ie = c.useMemo(() => !re || Y.suffix !== void 0 || Y.onEllipsis || Y.expandable || R || $, [re, Y, R, $]);
    gt(() => {
      ye && !ie && (W(uh("webkitLineClamp")), Z(uh("textOverflow")))
    }, [ie, ye]);
    const be = c.useMemo(() => ie ? !1 : ne === 1 ? G : Q, [ie, G, Q]),
      ke = re && (be ? Ce : oe),
      De = re && ne === 1 && be,
      ue = re && ne > 1 && be,
      he = ee => {
        var J;
        le(!0), (J = Y.onExpand) === null || J === void 0 || J.call(Y, ee)
      },
      [Re, rt] = c.useState(0),
      [Ie, Be] = c.useState(0),
      Ae = (ee, J) => {
        let {
          offsetWidth: ge
        } = ee;
        var se;
        rt(ge), Be(parseInt((se = window.getComputedStyle) === null || se === void 0 ? void 0 : se.call(window, J).fontSize, 10) || 0)
      },
      pt = ee => {
        var J;
        Oe(ee), oe !== ee && ((J = Y.onEllipsis) === null || J === void 0 || J.call(Y, ee))
      };
    c.useEffect(() => {
      const ee = S.current;
      if (ye && be && ee) {
        const J = ue ? ee.offsetHeight < ee.scrollHeight : ee.offsetWidth < ee.scrollWidth;
        Ce !== J && Ue(J)
      }
    }, [ye, be, d, ue, xe]), c.useEffect(() => {
      const ee = S.current;
      if (typeof IntersectionObserver > "u" || !ee || !be || !re) return;
      const J = new IntersectionObserver(() => {
        pe(!!ee.offsetParent)
      });
      return J.observe(ee), () => {
        J.disconnect()
      }
    }, [be, re]);
    let je = {};
    Y.tooltip === !0 ? je = {
      title: (n = P.text) !== null && n !== void 0 ? n : d
    } : c.isValidElement(Y.tooltip) ? je = {
      title: Y.tooltip
    } : typeof Y.tooltip == "object" ? je = Object.assign({
      title: (r = P.text) !== null && r !== void 0 ? r : d
    }, Y.tooltip) : je = {
      title: Y.tooltip
    };
    const Ke = c.useMemo(() => {
      const ee = J => ["string", "number"].includes(typeof J);
      if (!(!ye || be)) {
        if (ee(P.text)) return P.text;
        if (ee(d)) return d;
        if (ee(h)) return h;
        if (ee(je.title)) return je.title
      }
    }, [ye, be, h, je.title, ke]);
    if (O) return c.createElement(r4, {
      value: (o = P.text) !== null && o !== void 0 ? o : typeof d == "string" ? d : "",
      onSave: j,
      onCancel: M,
      onEnd: P.onEnd,
      prefixCls: w,
      className: a,
      style: l,
      direction: p,
      component: b,
      maxLength: P.maxLength,
      autoSize: P.autoSize,
      enterIcon: P.enterIcon
    });
    const Ne = () => {
        const {
          expandable: ee,
          symbol: J
        } = Y;
        if (!ee) return null;
        let ge;
        return J ? ge = J : ge = m == null ? void 0 : m.expand, c.createElement("a", {
          key: "expand",
          className: `${w}-expand`,
          onClick: he,
          "aria-label": m == null ? void 0 : m.expand
        }, ge)
      },
      ot = () => {
        if (!R) return;
        const {
          icon: ee,
          tooltip: J
        } = P, ge = or(J)[0] || (m == null ? void 0 : m.edit), se = typeof ge == "string" ? ge : "";
        return N.includes("icon") ? c.createElement(Cc, {
          key: "edit",
          title: J === !1 ? "" : ge
        }, c.createElement(l0, {
          ref: E,
          className: `${w}-edit`,
          onClick: A,
          "aria-label": se
        }, ee || c.createElement(Lz, {
          role: "button"
        }))) : null
      },
      Qt = () => {
        if (!$) return;
        const {
          tooltips: ee,
          icon: J
        } = T, ge = u0(ee), se = u0(J), Se = k ? ms(ge[1], m == null ? void 0 : m.copied) : ms(ge[0], m == null ? void 0 : m.copy), Xe = k ? m == null ? void 0 : m.copied : m == null ? void 0 : m.copy, Ze = typeof Se == "string" ? Se : Xe;
        return c.createElement(Cc, {
          key: "copy",
          title: Se
        }, c.createElement(l0, {
          className: U(`${w}-copy`, k && `${w}-copy-success`),
          onClick: K,
          "aria-label": Ze
        }, k ? ms(se[1], c.createElement(uN, null), !0) : ms(se[0], c.createElement(Mz, null), !0)))
      },
      Pe = ee => [ee && Ne(), ot(), Qt()],
      lt = ee => [ee && c.createElement("span", {
        "aria-hidden": !0,
        key: "ellipsis"
      }, g4), Y.suffix, Pe(ee)];
    return c.createElement(nr, {
      onResize: Ae,
      disabled: !re || be
    }, ee => c.createElement(v4, {
      tooltipProps: je,
      enabledEllipsis: re,
      isEllipsis: ke
    }, c.createElement(PC, Object.assign({
      className: U({
        [`${w}-${s}`]: s,
        [`${w}-disabled`]: u,
        [`${w}-ellipsis`]: ye,
        [`${w}-single-line`]: re && ne === 1,
        [`${w}-ellipsis-single-line`]: De,
        [`${w}-ellipsis-multiple-line`]: ue
      }, a),
      prefixCls: i,
      style: Object.assign(Object.assign({}, l), {
        WebkitLineClamp: ue ? ne : void 0
      }),
      component: b,
      ref: Cr(ee, S, t),
      direction: p,
      onClick: N.includes("text") ? A : void 0,
      "aria-label": Ke == null ? void 0 : Ke.toString(),
      title: h
    }, x), c.createElement(d4, {
      enabledMeasure: re && !be,
      text: d,
      rows: ne,
      width: Re,
      fontSize: Ie,
      onEllipsis: pt
    }, (J, ge) => {
      let se = J;
      return J.length && ge && Ke && (se = c.createElement("span", {
        key: "show-content",
        "aria-hidden": !0
      }, se)), m4(e, c.createElement(c.Fragment, null, se, lt(ge)))
    }))))
  }),
  hu = h4;
var y4 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const b4 = c.forwardRef((e, t) => {
    var {
      ellipsis: n,
      rel: r
    } = e, o = y4(e, ["ellipsis", "rel"]);
    const i = Object.assign(Object.assign({}, o), {
      rel: r === void 0 && o.target === "_blank" ? "noopener noreferrer" : r
    });
    return delete i.navigate, c.createElement(hu, Object.assign({}, i, {
      ref: t,
      ellipsis: !!n,
      component: "a"
    }))
  }),
  S4 = b4,
  C4 = c.forwardRef((e, t) => c.createElement(hu, Object.assign({
    ref: t
  }, e, {
    component: "div"
  }))),
  x4 = C4;
var w4 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const E4 = (e, t) => {
    var {
      ellipsis: n
    } = e, r = w4(e, ["ellipsis"]);
    const o = c.useMemo(() => n && typeof n == "object" ? Hr(n, ["expandable", "rows"]) : n, [n]);
    return c.createElement(hu, Object.assign({
      ref: t
    }, r, {
      ellipsis: o,
      component: "span"
    }))
  },
  $4 = c.forwardRef(E4);
var O4 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
};
const P4 = [1, 2, 3, 4, 5],
  R4 = c.forwardRef((e, t) => {
    const {
      level: n = 1
    } = e, r = O4(e, ["level"]);
    let o;
    return P4.includes(n) ? o = `h${n}` : o = "h1", c.createElement(hu, Object.assign({
      ref: t
    }, r, {
      component: o
    }))
  }),
  T4 = R4,
  Nl = PC;
Nl.Text = $4;
Nl.Link = S4;
Nl.Title = T4;
Nl.Paragraph = x4;
const I4 = Nl;
const N4 = "./assets/fb.jpg",
  M4 = "./assets/logo-93385932.jpg",
  _4 = "./assets/vcbqr-ab1a1c01.jpeg",
  k4 = "./assets/inss.jpg",
  z4 = "./assets/waallpaper-f8c89fb8.webp",
  L4 = "./assets/cake.jpg",
  A4 = "./assets/vcb-08137d70.png",
  j4 = e => {
    const {
      open: t,
      imgSrc: n,
      onCancel: r
    } = e;
    return qe.jsx("div", {
      children: qe.jsx(mz, {
        open: t,
        onCancel: r,
        bodyStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        footer: !0,
        children: qe.jsx("img", {
          src: n,
          alt: "",
          width: "auto",
          height: "300px"
        })
      })
    })
  };

function F4() {
  const {
    Text: e,
    Link: t,
    Paragraph: n
  } = I4, [r, o] = c.useState(!1), i = () => {
    o(!0)
  };
  return qe.jsxs("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      height: "calc(100vh - 50px)"
    },
    children: [qe.jsxs(Hk, {
      style: {
        minWidth: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${z4})`,
        backgroundPosition: "top",
        backgroundSize: "cover"
      },
      children: [qe.jsxs(a0, {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [qe.jsx(Sa, {
          size: 120,
          src: M4
        }), qe.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: [qe.jsx($d, {
            color: "gold",
            children: "YẾN CHU"
          }), qe.jsx($d, {
            color: "cyan",
            children: "STREAMER"
          })]
        }), qe.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10
          },
          children: [qe.jsx(Sa, {
            size: 30,
            src: N4
          }), qe.jsx(t, {
            target: "_blank",
            href: "https://www.facebook.com/yenchuuuu",
            children: qe.jsx($d, {
              color: "blue-inverse",
              children: "Facebook"
            })
          }), qe.jsx(Sa, {
            size: 30,
            src: k4
          }), qe.jsx(t, {
            href: "https://www.instagram.com/yenchuuuu/",
            target: "_blank",
            strong: !0,
            code: !0,
            type: "danger",
            children: "INSTAGRAM"
          })]
        }), qe.jsxs("div", {
          children: [qe.jsx(n0, {
            dashed: !0,
            style: {
              width: "100%"
            }
          }), qe.jsx(e, {
            strong: !0,
            keyboard: !0,
            style: {
              fontSize: 20
            },
            children: "KÊNH DONATE"
          })]
        }), qe.jsxs(a0, {
          children: [qe.jsx(Sa, {
            size: 30,
            src: L4
          }), qe.jsx(t, {
            href: "",
            target: "_blank",
            strong: !0,
            code: !0,
            type: "danger",
            children: "CAKE"
          }), qe.jsx(Sa, {
            size: 30,
            src: A4
          }), qe.jsx(t, {
            onClick: i,
            style: {
              cursor: "pointer"
            },
            type: "success",
            strong: !0,
            code: !0,
            children: "VIETCOMBANK QR"
          })]
        }), qe.jsx(e, {
          strong: !0,
          children: "Ngân Hàng VCB"
        }), qe.jsx(n, {
          type: "secondary",
          code: !0,
          copyable: !0,
          children: "0868943096"
        })]
      }), qe.jsx(n0, {
        dashed: !0
      })]
    }), qe.jsx(j4, {
      imgSrc: _4,
      onCancel: () => o(!1),
      open: r
    })]
  })
}
var bv = {},
  d0 = Ko;
bv.createRoot = d0.createRoot, bv.hydrateRoot = d0.hydrateRoot;
bv.createRoot(document.getElementById("root")).render(qe.jsx(X.StrictMode, {
  children: qe.jsx(F4, {})
}));
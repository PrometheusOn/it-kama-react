"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeApp = exports.appReducer = void 0;

var _authReducer = require("./authReducer");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIALIZED_SUCCESS = "social-network/appReducer/INITIALIZED_SUCCESS";
var initialState = {
  initialized: false
};

var appReducer = function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      {
        return _objectSpread({}, state, {
          initialized: true
        });
      }

    default:
      return state;
  }
};

exports.appReducer = appReducer;

var initializedSuccess = function initializedSuccess() {
  return {
    type: INITIALIZED_SUCCESS
  };
};

var initializeApp = function initializeApp() {
  return function (dispatch) {
    var promise = dispatch((0, _authReducer.getAuthUser)());
    Promise.all([promise]).then(function () {
      dispatch(initializedSuccess());
    });
  };
};

exports.initializeApp = initializeApp;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.setLogPassUser = exports.loginReducer = void 0;

var _api = require("../api/api");

var _authReducer = require("./auth-reducer");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_LOGPASS_USER = "SET_LOGPASS_USER";
var SET_USERID = "SET_USERID";
var initialState = {
  email: "",
  password: "",
  rememberMe: false,
  captcha: false,
  userId: null
};

var loginReducer = function loginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_LOGPASS_USER:
      {
        var _action$obj = action.obj,
            email = _action$obj.email,
            password = _action$obj.password,
            _action$obj$rememberM = _action$obj.rememberMe,
            rememberMe = _action$obj$rememberM === void 0 ? false : _action$obj$rememberM,
            _action$obj$captcha = _action$obj.captcha,
            captcha = _action$obj$captcha === void 0 ? false : _action$obj$captcha;
        return _objectSpread({}, state, {
          email: email,
          password: password,
          rememberMe: rememberMe,
          captcha: captcha
        });
      }

    case SET_USERID:
      {
        return _objectSpread({}, state, {
          userId: action.userId
        });
      }

    default:
      return state;
  }
};

exports.loginReducer = loginReducer;

var setLogPassUser = function setLogPassUser(obj) {
  return {
    type: SET_LOGPASS_USER,
    obj: obj
  };
};

exports.setLogPassUser = setLogPassUser;

var setUserId = function setUserId(userId) {
  return {
    type: SET_USERID,
    userId: userId
  };
};

var getUserId = function getUserId(obj) {
  return function (dispatch) {
    dispatch(setLogPassUser(obj));

    _api.authAPI.login(obj).then(function (response) {
      if (response.resultCode === 0) {
        dispatch(setUserId(response.data.userId));
      }
    });
  };
};

var signIn = function signIn(obj) {
  return function (dispatch) {
    var objectForApi = {
      email: obj.login,
      password: obj.password,
      rememberMe: obj.rememberMe || false,
      captcha: obj.captcha || false
    };
    dispatch(getUserId(objectForApi));
  };
};

exports.signIn = signIn;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signIn = exports.setLogPassUser = exports.getAuthUser = exports.setPhotoAuthUser = exports.toogleIsFetching = exports.setAuthUserData = exports.authReducer = void 0;

var _api = require("../api/api");

var _reduxForm = require("redux-form");

var _user = _interopRequireDefault(require("../assets/images/user.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_LOGPASS_USER = "social-network/authReducer/SET_LOGPASS_USER";
var SET_USERID = "social-network/authReducer/SET_USERID";
var CLEAR_USER_DATA = "social-network/authReducer/CLEAR_USER_DATA";
var SET_USER_DATA = "social-network/authReducer/SET_USER_DATA";
var TOOGLE_IS_FETCHING = "social-network/authReducer/TOOGLE_IS_FETCHING";
var SET_PHOTO_AUTH_USER = "social-network/authReducer/SET_PHOTO_AUTH_USER";
var initialState = {
  email: "",
  password: "",
  rememberMe: false,
  captcha: false,
  userId: "",
  login: "",
  photo: _user["default"],
  isAuth: false,
  isFetching: false
};

var authReducer = function authReducer() {
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
          captcha: captcha // isAuth: true,

        });
      }
    // case SET_USERID: {
    // 	return {
    // 		...state,
    // 		userId: action.userId,
    // 	};
    // }

    case CLEAR_USER_DATA:
      {
        return {
          email: "",
          password: "",
          rememberMe: false,
          captcha: false,
          userId: "",
          login: "",
          photo: _user["default"],
          isAuth: false,
          isFetching: false
        };
      }

    case SET_USER_DATA:
      {
        return _objectSpread({}, state, {}, action.data, {
          isAuth: true
        });
      }

    case TOOGLE_IS_FETCHING:
      {
        return _objectSpread({}, state, {
          isFetching: action.isFetching
        });
      }

    case SET_PHOTO_AUTH_USER:
      {
        return _objectSpread({}, state, {
          photo: action.photo
        });
      }

    default:
      return state;
  }
};

exports.authReducer = authReducer;

var setAuthUserData = function setAuthUserData(userId, email, login) {
  return {
    type: SET_USER_DATA,
    data: {
      userId: userId,
      email: email,
      login: login
    }
  };
};

exports.setAuthUserData = setAuthUserData;

var toogleIsFetching = function toogleIsFetching(isFetching) {
  return {
    type: TOOGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

exports.toogleIsFetching = toogleIsFetching;

var setPhotoAuthUser = function setPhotoAuthUser(photo) {
  return {
    type: SET_PHOTO_AUTH_USER,
    photo: photo
  };
};

exports.setPhotoAuthUser = setPhotoAuthUser;

var setLogPassUser = function setLogPassUser(obj) {
  return {
    type: SET_LOGPASS_USER,
    obj: obj
  };
}; // const setUserId = userId => ({ type: SET_USERID, userId });


exports.setLogPassUser = setLogPassUser;

var clearUserData = function clearUserData() {
  return {
    type: CLEAR_USER_DATA
  };
};

var getAuthUser = function getAuthUser() {
  return function _callee(dispatch) {
    var response, _response$data, userId, email, login;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(toogleIsFetching(true));
            _context.next = 3;
            return regeneratorRuntime.awrap(_api.authAPI.authMe());

          case 3:
            response = _context.sent;

            if (!(response.resultCode === 0)) {
              _context.next = 12;
              break;
            }

            dispatch(toogleIsFetching(false));
            _response$data = response.data, userId = _response$data.id, email = _response$data.email, login = _response$data.login;
            dispatch(setAuthUserData(userId, email, login));
            _context.next = 10;
            return regeneratorRuntime.awrap(_api.profileAPI.getProfile(userId));

          case 10:
            response = _context.sent;
            if (response.photos.large) dispatch(setPhotoAuthUser(response.photos.large));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getAuthUser = getAuthUser;

var signIn = function signIn(obj) {
  return function _callee2(dispatch) {
    var objectForApi, response, message;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            objectForApi = {
              email: obj.email,
              password: obj.password,
              rememberMe: obj.rememberMe || false,
              captcha: obj.captcha || false
            };
            _context2.next = 3;
            return regeneratorRuntime.awrap(_api.authAPI.login(objectForApi));

          case 3:
            response = _context2.sent;

            if (response.resultCode === 0) {
              dispatch(setLogPassUser(objectForApi));
              dispatch(getAuthUser()); // dispatch(setUserId(response.data.userId));
            } else {
              message = response.messages.length > 0 ? response.messages[0] : "Неизвестная ошибка";
              dispatch((0, _reduxForm.stopSubmit)("login", {
                _error: message
              }));
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.signIn = signIn;

var signOut = function signOut() {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_api.authAPI.logout());

          case 2:
            response = _context3.sent;

            if (response.resultCode === 0) {
              dispatch(clearUserData());
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.signOut = signOut;
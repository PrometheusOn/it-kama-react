"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthUser = exports.setPhotoAuthUser = exports.toogleIsFetching = exports.setAuthUserData = exports.authReducer = void 0;

var _api = require("../api/api");

var _user = _interopRequireDefault(require("../assets/images/user.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USER_DATA = "FOLLOW";
var TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
var SET_PHOTO_AUTH_USER = "SET_PHOTO_AUTH_USER";
var initialState = {
  id: null,
  email: null,
  login: null,
  photo: null,
  isAuth: false,
  isFetching: false
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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

var setAuthUserData = function setAuthUserData(id, email, login) {
  return {
    type: SET_USER_DATA,
    data: {
      id: id,
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

var getAuthUser = function getAuthUser() {
  return function (dispatch) {
    dispatch(toogleIsFetching(true));

    _api.authAPI.authMe().then(function (response) {
      if (response.resultCode === 0) {
        dispatch(toogleIsFetching(false));
        var _response$data = response.data,
            id = _response$data.id,
            email = _response$data.email,
            login = _response$data.login;
        dispatch(setAuthUserData(id, email, login));
        return id;
      }
    }).then(function (id) {
      _api.profileAPI.getProfile(id).then(function (response) {
        var photoUser;
        response.photos.large ? photoUser = response.photos.large : photoUser = _user["default"];
        dispatch(setPhotoAuthUser(photoUser));
      });
    });
  };
};

exports.getAuthUser = getAuthUser;
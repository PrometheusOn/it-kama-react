"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserStatus = exports.getUserStatus = exports.getProfileUser = exports.setUserProfile = exports.addPost = exports.profileReducer = void 0;

var _api = require("../api/api");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_POST = "social-network/profileReducer/ADD-POST";
var SET_USER_PROFILE = "social-network/profileReducer/SET_USER_PROFILE";
var SET_USER_STATUS = "social-network/profileReducer/SET_USER_STATUS";
var initialState = {
  posts: [{
    id: 1,
    message: "Hi, how are you",
    likesCount: 787
  }, {
    id: 2,
    message: "I'm hungry... always hungry",
    likesCount: 512
  }, {
    id: 3,
    message: "it's my first post",
    likesCount: 837
  }],
  profile: null,
  status: ""
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        var newPost = {
          id: 4,
          message: action.textNewPost,
          likesCount: 0
        };
        return _objectSpread({}, state, {
          posts: [].concat(_toConsumableArray(state.posts), [newPost])
        });
      }

    case SET_USER_PROFILE:
      {
        return _objectSpread({}, state, {
          profile: action.profile
        });
      }

    case SET_USER_STATUS:
      {
        return _objectSpread({}, state, {
          status: action.status
        });
      }

    default:
      return state;
  }
};

exports.profileReducer = profileReducer;

var addPost = function addPost(textNewPost) {
  return {
    type: ADD_POST,
    textNewPost: textNewPost
  };
};

exports.addPost = addPost;

var setUserProfile = function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  };
};

exports.setUserProfile = setUserProfile;

var setUserStatus = function setUserStatus(status) {
  return {
    type: SET_USER_STATUS,
    status: status
  };
};

var getProfileUser = function getProfileUser(id) {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_api.profileAPI.getProfile(id));

          case 2:
            response = _context.sent;
            dispatch(setUserProfile(response));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getProfileUser = getProfileUser;

var getUserStatus = function getUserStatus(id) {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_api.profileAPI.getStatus(id));

          case 2:
            response = _context2.sent;
            dispatch(setUserStatus(response));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.getUserStatus = getUserStatus;

var updateUserStatus = function updateUserStatus(status) {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_api.profileAPI.updateStatus(status));

          case 2:
            response = _context3.sent;
            if (response.resultCode === 0) dispatch(setUserStatus(status));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.updateUserStatus = updateUserStatus;
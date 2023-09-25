"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUsers = exports.toogleFollowingProgress = exports.toogleIsFetching = exports.setTotalUsersCount = exports.setCurrentPage = exports.setUsers = exports.unfollow = exports.follow = exports.usersReducer = void 0;

var _api = require("../api/api");

var _objectHelper = require("../utils/object-helper");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLLOW = "social-network/usersReducer/FOLLOW";
var UNFOLLOW = "social-network/usersReducer/UNFOLLOW";
var SET_USERS = "social-network/usersReducer/SET_USERS";
var SET_CURRENT_PAGE = "social-network/usersReducer/SET_CURRENT_PAGE";
var SET_TOTAL_USERS_COUNT = "social-network/usersReducer/SET_TOTAL_USER_COUNT";
var TOOGLE_IS_FETCHING = "social-network/usersReducer/TOOGLE_IS_FETCHING";
var TOOGLE_IS_FOLLOWING_PROGRESS = "social-network/usersReducer/TOOGLE_IS_FOLLOWING_PROGRESS";
var initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FOLLOW:
      {
        return _objectSpread({}, state, {
          users: (0, _objectHelper.updateObjectInArray)(state.users, action.userId, "id", {
            followed: true
          })
        });
      }

    case UNFOLLOW:
      {
        return _objectSpread({}, state, {
          users: (0, _objectHelper.updateObjectInArray)(state.users, action.userId, "id", {
            followed: false
          })
        });
      }

    case SET_USERS:
      {
        return _objectSpread({}, state, {
          users: action.users
        });
      }

    case SET_CURRENT_PAGE:
      {
        return _objectSpread({}, state, {
          currentPage: action.currentPage
        });
      }

    case SET_TOTAL_USERS_COUNT:
      {
        return _objectSpread({}, state, {
          totalUsersCount: action.totalUsersCount
        });
      }

    case TOOGLE_IS_FETCHING:
      {
        return _objectSpread({}, state, {
          isFetching: action.isFetching
        });
      }

    case TOOGLE_IS_FOLLOWING_PROGRESS:
      {
        return _objectSpread({}, state, {
          followingInProgress: action.isFetching ? [].concat(_toConsumableArray(state.followingInProgress), [action.userId]) : state.followingInProgress.filter(function (id) {
            return id != action.userId;
          })
        });
      }

    default:
      return state;
  }
};

exports.usersReducer = usersReducer;

var followSuccess = function followSuccess(userId) {
  return {
    type: FOLLOW,
    userId: userId
  };
};

var unfollowSuccess = function unfollowSuccess(userId) {
  return {
    type: UNFOLLOW,
    userId: userId
  };
};

var setUsers = function setUsers(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsers = setUsers;

var setCurrentPage = function setCurrentPage(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

exports.setCurrentPage = setCurrentPage;

var setTotalUsersCount = function setTotalUsersCount(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  };
};

exports.setTotalUsersCount = setTotalUsersCount;

var toogleIsFetching = function toogleIsFetching(isFetching) {
  return {
    type: TOOGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

exports.toogleIsFetching = toogleIsFetching;

var toogleFollowingProgress = function toogleFollowingProgress(isFetching, userId) {
  return {
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
  };
};

exports.toogleFollowingProgress = toogleFollowingProgress;

var requestUsers = function requestUsers(currentPage, pageSize) {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(toogleIsFetching(true));
            _context.next = 3;
            return regeneratorRuntime.awrap(_api.userAPI.getUsers(currentPage, pageSize));

          case 3:
            response = _context.sent;
            dispatch(setCurrentPage(currentPage));
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.requestUsers = requestUsers;

var followUnfollowFlow = function followUnfollowFlow(dispatch, userId, apiMethod, actionCreator) {
  var response;
  return regeneratorRuntime.async(function followUnfollowFlow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dispatch(toogleFollowingProgress(true, userId));
          _context2.next = 3;
          return regeneratorRuntime.awrap(apiMethod(userId));

        case 3:
          response = _context2.sent;

          if (response.resultCode == 0) {
            dispatch(actionCreator(userId));
          }

          dispatch(toogleFollowingProgress(false, userId));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var unfollow = function unfollow(userId) {
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            followUnfollowFlow(dispatch, userId, _api.followAPI.unfollow, unfollowSuccess);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.unfollow = unfollow;

var follow = function follow(userId) {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            followUnfollowFlow(dispatch, userId, _api.followAPI.follow, followSuccess);

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.follow = follow;
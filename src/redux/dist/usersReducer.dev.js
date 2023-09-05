"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUsers = exports.toogleFollowingProgress = exports.toogleIsFetching = exports.setTotalUsersCount = exports.setCurrentPage = exports.setUsers = exports.unfollow = exports.follow = exports.usersReducer = void 0;

var _api = require("../api/api");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLLOW = "FOLLOW";
var UNFOLLOW = "UNFOLLOW";
var SET_USERS = "SET_USERS";
var SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
var SET_TOTAL_USERS_COUNT = "SET_TOTAL_USER_COUNT";
var TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
var TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";
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
          users: state.users.map(function (user) {
            if (user.id === action.userId) {
              return _objectSpread({}, user, {
                followed: true
              });
            }

            return user;
          })
        });
      }

    case UNFOLLOW:
      {
        return _objectSpread({}, state, {
          users: state.users.map(function (user) {
            if (user.id === action.userId) {
              return _objectSpread({}, user, {
                followed: false
              });
            }

            return user;
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
  return function (dispatch) {
    dispatch(toogleIsFetching(true));

    _api.userAPI.getUsers(currentPage, pageSize).then(function (response) {
      dispatch(setCurrentPage(currentPage));
      dispatch(toogleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };
};

exports.requestUsers = requestUsers;

var unfollow = function unfollow(userId) {
  return function (dispatch) {
    dispatch(toogleFollowingProgress(true, userId));

    _api.followAPI.unfollow(userId).then(function (response) {
      if (response.resultCode == 0) {
        dispatch(unfollowSuccess(userId));
      }

      dispatch(toogleFollowingProgress(false, userId));
    });
  };
};

exports.unfollow = unfollow;

var follow = function follow(userId) {
  return function (dispatch) {
    dispatch(toogleFollowingProgress(true, userId));

    _api.followAPI.follow(userId).then(function (response) {
      if (response.resultCode == 0) {
        dispatch(followSuccess(userId));
      }

      dispatch(toogleFollowingProgress(false, userId));
    });
  };
};

exports.follow = follow;
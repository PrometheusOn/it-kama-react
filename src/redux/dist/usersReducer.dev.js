"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTotalUsersCountAC = exports.setCurrentPageAC = exports.setUsersAC = exports.unfollowAC = exports.followAC = exports.usersReducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLLOW = "FOLLOW";
var UNFOLLOW = "UNFOLLOW";
var SET_USERS = "SET_USERS";
var SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
var SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USER_COUNT';
var initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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

    default:
      return state;
  }
};

exports.usersReducer = usersReducer;

var followAC = function followAC(userId) {
  return {
    type: FOLLOW,
    userId: userId
  };
};

exports.followAC = followAC;

var unfollowAC = function unfollowAC(userId) {
  return {
    type: UNFOLLOW,
    userId: userId
  };
};

exports.unfollowAC = unfollowAC;

var setUsersAC = function setUsersAC(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsersAC = setUsersAC;

var setCurrentPageAC = function setCurrentPageAC(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

exports.setCurrentPageAC = setCurrentPageAC;

var setTotalUsersCountAC = function setTotalUsersCountAC(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  };
};

exports.setTotalUsersCountAC = setTotalUsersCountAC;
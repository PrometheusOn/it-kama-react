"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUsersAC = exports.unfollowAC = exports.followAC = exports.usersReducer = void 0;

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
var initialState = {
  users: [{
    id: 1,
    followed: false,
    photoUrl: "https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album",
    fullname: "Рамазан",
    status: "Начинать всегда стоит с того, что сеет сомнения.",
    location: {
      city: "Chkalovsk",
      country: "Tajikistan"
    }
  }, {
    id: 2,
    followed: true,
    photoUrl: "https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg",
    fullname: "Амир",
    status: "80% успеха - это появиться в нужном месте в нужное время.",
    location: {
      city: "Ufa",
      country: "Russia"
    }
  }, {
    id: 3,
    followed: true,
    photoUrl: "https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg",
    fullname: "Артур",
    status: "Стоит только поверить, что вы можете – и вы уже на полпути к цели",
    location: {
      city: "Ufa",
      country: "Russia"
    }
  }, {
    id: 4,
    followed: true,
    photoUrl: "https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg",
    fullname: "Семён",
    status: "Неосмысленная жизнь не стоит того, чтобы жить.",
    location: {
      city: "Dagestan",
      country: "Russia"
    }
  }]
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
          users: [].concat(_toConsumableArray(state.users), _toConsumableArray(action.users))
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
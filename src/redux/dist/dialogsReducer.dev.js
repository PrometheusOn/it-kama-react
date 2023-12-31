"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessage = exports.addNewMessage = exports.dialogsReducer = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_MESSAGE = "social-network/dialogsReducer/ADD-MESSAGE";
var DELETE_MESSAGE = "social-network/dialogsReducer/DELETE_MESSAGE";
var initialState = {
  dialogs: [{
    id: 1,
    name: "Рамазан",
    img: "https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album"
  }, {
    id: 2,
    name: "Амир",
    img: "https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg"
  }, {
    id: 3,
    name: "Артур",
    img: "https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg"
  }, {
    id: 4,
    name: "Семён",
    img: "https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg"
  }],
  messages: [{
    id: 1,
    message: "hi"
  }, {
    id: 2,
    message: "how are you"
  }, {
    id: 3,
    message: "yo"
  }, {
    id: 4,
    message: "wait...Are you nigger?"
  }]
};

var dialogsReducer = function dialogsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_MESSAGE:
      {
        return _objectSpread({}, state, {
          messages: [].concat(_toConsumableArray(state.messages), [{
            id: 5,
            message: action.textNewMessage
          }])
        });
      }

    case DELETE_MESSAGE:
      {
        return _objectSpread({}, state, {
          messages: _toConsumableArray(state.messages).filter(function (m) {
            return m.id !== action.idMessage;
          })
        });
      }

    default:
      return state;
  }
};

exports.dialogsReducer = dialogsReducer;

var addNewMessage = function addNewMessage(textNewMessage) {
  return {
    type: ADD_MESSAGE,
    textNewMessage: textNewMessage
  };
};

exports.addNewMessage = addNewMessage;

var deleteMessage = function deleteMessage(idMessage) {
  return {
    type: DELETE_MESSAGE,
    idMessage: idMessage
  };
};

exports.deleteMessage = deleteMessage;
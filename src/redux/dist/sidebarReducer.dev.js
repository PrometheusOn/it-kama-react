"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarReducer = void 0;
var initialState = {
  friendsList: [{
    id: 1,
    name: 'Rama',
    img: 'https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album'
  }, {
    id: 2,
    name: 'Amir',
    img: 'https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg'
  }, {
    id: 3,
    name: 'Artur',
    img: 'https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg'
  }, {
    id: 4,
    name: 'Semen',
    img: 'https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg'
  }]
};

var sidebarReducer = function sidebarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};

exports.sidebarReducer = sidebarReducer;
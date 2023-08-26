"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxLengthText = exports.requiredField = void 0;

var requiredField = function requiredField(value) {
  if (value) return undefined;
  return "Поле обязательно для заполнения";
};

exports.requiredField = requiredField;

var maxLengthText = function maxLengthText(maxLength) {
  return function (value) {
    if (value.length < maxLength) return undefined;
    return "\u0414\u043B\u0438\u043D\u0430 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C ".concat(maxLength);
  };
};

exports.maxLengthText = maxLengthText;
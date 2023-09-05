"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessages = exports.getDialogs = void 0;

var getDialogs = function getDialogs(state) {
  return state.dialogsPage.dialogs;
};

exports.getDialogs = getDialogs;

var getMessages = function getMessages(state) {
  return state.dialogsPage.messages;
};

exports.getMessages = getMessages;
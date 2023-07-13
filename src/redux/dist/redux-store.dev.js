"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _profileReducer = require("./profileReducer");

var _dialogsReducer = require("./dialogsReducer");

var _sidebarReducer = require("./sidebarReducer");

var _usersReducer = require("./usersReducer");

var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer.profileReducer,
  dialogsPage: _dialogsReducer.dialogsReducer,
  sidebar: _sidebarReducer.sidebarReducer,
  usersPage: _usersReducer.usersReducer
});
var store = (0, _redux.legacy_createStore)(reducers);
var _default = store;
exports["default"] = _default;
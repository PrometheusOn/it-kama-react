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

var _authReducer = require("./authReducer");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxForm = require("redux-form");

var _appReducer = require("./appReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer.profileReducer,
  dialogsPage: _dialogsReducer.dialogsReducer,
  sidebar: _sidebarReducer.sidebarReducer,
  usersPage: _usersReducer.usersReducer,
  auth: _authReducer.authReducer,
  form: _reduxForm.reducer,
  app: _appReducer.appReducer
});
var store = (0, _redux.legacy_createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var _default = store;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIdAuthUser = exports.getPhotoAuthUser = exports.getLogin = exports.getIsAuth = void 0;

var getIsAuth = function getIsAuth(state) {
  return state.auth.isAuth;
};

exports.getIsAuth = getIsAuth;

var getLogin = function getLogin(state) {
  return state.auth.login;
};

exports.getLogin = getLogin;

var getPhotoAuthUser = function getPhotoAuthUser(state) {
  return state.auth.photo;
};

exports.getPhotoAuthUser = getPhotoAuthUser;

var getIdAuthUser = function getIdAuthUser(state) {
  return state.auth.userId;
};

exports.getIdAuthUser = getIdAuthUser;
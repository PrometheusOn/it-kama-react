"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatus = exports.getProfile = void 0;

var getProfile = function getProfile(state) {
  return state.profilePage.profile;
};

exports.getProfile = getProfile;

var getStatus = function getStatus(state) {
  return state.profilePage.status;
};

exports.getStatus = getStatus;
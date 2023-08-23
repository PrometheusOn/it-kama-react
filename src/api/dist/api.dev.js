"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.followAPI = exports.profileAPI = exports.authAPI = exports.userAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "752ce6e5-ad96-4385-ada2-4fd74ff54389" // '4fa658c6-5a5a-4c5d-a20f-396571c4d681'

  }
});

var userAPI = {
  getUsers: function getUsers() {
    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    return instance.get("users?page=".concat(currentPage, "&count=").concat(pageSize)).then(function (response) {
      return response.data;
    });
  }
};
exports.userAPI = userAPI;
var authAPI = {
  authMe: function authMe() {
    return instance.get("auth/me").then(function (response) {
      return response.data;
    });
  },
  login: function login(obj) {
    return instance.post("/auth/login", obj).then(function (response) {
      return response.data;
    });
  }
};
exports.authAPI = authAPI;
var profileAPI = {
  getProfile: function getProfile(id) {
    return instance.get("profile/".concat(id)).then(function (response) {
      return response.data;
    });
  },
  // setPhoto(image) {
  // 	// 	const formData = new FormData();
  // 	// 	FormData.append("image", photo);
  // return instance.put(
  // 	`profile/photo`,
  // 	{ small: null, large: image },
  // 		{
  // 			headers: {
  // 				"Content-Type": "multipart/form-data",
  // 			},
  // 		}
  // 	);
  // },
  getStatus: function getStatus(id) {
    return instance.get("profile/status/".concat(id)).then(function (response) {
      return response.data;
    });
  },
  updateStatus: function updateStatus(status) {
    return instance.put("profile/status", {
      status: status
    }).then(function (response) {
      return response.data;
    });
  }
};
exports.profileAPI = profileAPI;
var followAPI = {
  follow: function follow(id) {
    return instance.post("/follow/".concat(id)).then(function (response) {
      return response.data;
    });
  },
  unfollow: function unfollow(id) {
    return instance["delete"]("follow/".concat(id)).then(function (response) {
      return response.data;
    });
  }
};
exports.followAPI = followAPI;
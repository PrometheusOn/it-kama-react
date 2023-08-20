import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "752ce6e5-ad96-4385-ada2-4fd74ff54389",
		// '4fa658c6-5a5a-4c5d-a20f-396571c4d681'
	},
});

const userAPI = {
	getUsers(currentPage = 1, pageSize = 5) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
};

const authAPI = {
	authMe() {
		return instance.get(`auth/me`).then(response => response.data);
	},
};

const profileAPI = {
	getProfile(id) {
		return instance.get(`profile/${id}`).then(response => response.data);
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
	getStatus(id) {
		return instance.get(`profile/status/${id}`).then(response => response.data);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status }).then(response => response.data);
	},
};

const followAPI = {
	follow(id) {
		return instance.post(`/follow/${id}`).then(response => response.data);
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data);
	},
};

export { userAPI, authAPI, profileAPI, followAPI };

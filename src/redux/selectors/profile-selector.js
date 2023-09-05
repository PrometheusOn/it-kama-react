import userPhoto from "../../assets/images/user.png";

const getProfile = state => {
	return state.profilePage.profile;
};

const getStatus = state => {
	return state.profilePage.status;
};

const getPosts = state => {
	return state.profilePage.posts;
};

const getTextNewPost = state => {
	return state.profilePage.textNewPost;
};

const getProfilePhoto = state => {
	return state.profilePage.profile?.photos?.large || userPhoto;
};

export { getProfile, getStatus, getPosts, getTextNewPost, getProfilePhoto };

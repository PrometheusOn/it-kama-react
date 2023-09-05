const getIsAuth = state => {
	return state.auth.isAuth;
};

const getLogin = state => {
	return state.auth.login;
};

const getPhotoAuthUser = state => {
	return state.auth.photo;
};

const getIdAuthUser = state => {
	return state.auth.userId;
};

export { getIsAuth, getLogin, getPhotoAuthUser, getIdAuthUser };

import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";
import { toogleIsFetching, setAuthUserData, setPhotoAuthUser } from "../../redux/auth-reducer";

const checkAuth = async () => {
	const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
		withCredentials: true,
	});

	const isAuth = response.data.resultCode === 0;
	const data = response.data.data;

	return { isAuth, data };
};

const loadUserProfilePhoto = async id => {
	const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);
	return response.data.photos.large ?? userPhoto;
};

class HeaderContainer extends React.Component {
	async componentDidMount() {
		this.props.toogleIsFetching(true);

		const { isAuth, data } = await checkAuth();

		if (isAuth) {
			this.props.toogleIsFetching(false);

			const { id, email, login } = data;
			this.props.setAuthUserData(id, email, login);

			const userPhoto = await loadUserProfilePhoto(id);
			this.props.setPhotoAuthUser(userPhoto);
		}

		// axios
		// 	.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
		// 		withCredentials: true,
		// 	})
		// 	.then(response => {
		// 		if (response.data.resultCode === 0) {
		// 			this.props.toogleIsFetching(false);
		// 			const { id, email, login } = response.data.data;
		// 			this.props.setAuthUserData(id, email, login);
		// 		}
		// 	})
		// 	.then(() => {
		// 		axios
		// 			.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
		// 			.then(response => {
		// 				let photoUser;
		// 				response.data.photos.large
		// 					? (photoUser = response.data.photos.large)
		// 					: (photoUser = userPhoto);
		// 				this.props.setPhotoAuthUser(photoUser);
		// 			});
		// 	});
	}
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		id: state.auth.id,
		photoAuthUser: state.auth.photo,
	};
};
export default connect(mapStateToProps, {
	setAuthUserData,
	toogleIsFetching,
	setPhotoAuthUser,
})(HeaderContainer);

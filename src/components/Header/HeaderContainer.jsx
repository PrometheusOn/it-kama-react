import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import userPhoto from "../../assets/images/user.png";
import { toogleIsFetching, setAuthUserData, setPhotoAuthUser } from "../../redux/auth-reducer";
import { authAPI, profileAPI } from "../../api/api";

class HeaderContainer extends React.Component {
	async componentDidMount() {
		this.props.toogleIsFetching(true);

		authAPI
			.authMe()
			.then(response => {
				if (response.resultCode === 0) {
					this.props.toogleIsFetching(false);
					const { id, email, login } = response.data;
					this.props.setAuthUserData(id, email, login);
				}
			})
			.then(() => {
				profileAPI.getProfile(this.props.id).then(response => {
					let photoUser;
					response.photos.large
						? (photoUser = response.photos.large)
						: (photoUser = userPhoto);
					this.props.setPhotoAuthUser(photoUser);
				});
			});
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

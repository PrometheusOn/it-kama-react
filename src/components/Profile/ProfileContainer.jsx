import { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getProfileUser } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";

const ProfileContainer = props => {
	const { userId } = useParams();

	useEffect(() => {
		if (userId || props.idAuthUser) {
			props.getProfileUser(userId || props.idAuthUser);
		}
	}, [userId, props.idAuthUser]);

	return (
		<div>
			<Profile profile={props.profile} />
		</div>
	);
};

// const AuthRedirectComponent = (props) => {
// 	if (!props.isAuth) return <Navigate to={"/login"} />;
// 	return <ProfileContainer {...this.props}/>
// }

// class AuthRedirectComponent extends React.Component {
// 	render() {
// 		if (!this.props.isAuth) return <Navigate to={"/login"} />;
// 		return <ProfileContainer {...this.props} />;
// 	}
// }

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
	idAuthUser: state.auth.id,
});

export default connect(mapStateToProps, { getProfileUser })(withAuthRedirect(ProfileContainer));

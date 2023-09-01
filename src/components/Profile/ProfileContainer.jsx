import { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getProfileUser, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { withRouter } from "../../hoc/withRouter.jsx";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import { compose } from "redux";

const ProfileContainer = props => {
	const userId = Number(props.router.params.userId) || props.idAuthUser;
	useEffect(() => {
		if (!userId) {
			return props.router.navigate("/login");
		}
		props.getProfileUser(userId);
		props.getUserStatus(userId);
	}, [userId]);

	return (
		<div>
			<Profile
				userIdCurrentPage={userId}
				userIdAuthUser={props.idAuthUser}
				profile={props.profile}
				status={props.status}
				updateUserStatus={props.updateUserStatus}
			/>
		</div>
	);
};

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
	idAuthUser: state.auth.userId,
	status: state.profilePage.status,
});

export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps, { getProfileUser, getUserStatus, updateUserStatus })
)(ProfileContainer);

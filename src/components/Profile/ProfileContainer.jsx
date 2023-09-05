import { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getProfileUser, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { withRouter } from "../../hoc/withRouter.jsx";
import { compose } from "redux";
import { getIdAuthUser } from "../../redux/selectors/auth-selector.js";
import { getProfile, getStatus } from "../../redux/selectors/profile-selector.js";

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
	profile: getProfile(state),
	idAuthUser: getIdAuthUser(state),
	status: getStatus(state),
});

export default compose(
	withRouter,
	connect(mapStateToProps, { getProfileUser, getUserStatus, updateUserStatus })
)(ProfileContainer);

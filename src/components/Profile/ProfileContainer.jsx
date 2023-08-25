import { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getProfileUser, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import { compose } from "redux";

const ProfileContainer = props => {
	const userId = Number(useParams().userId);

	useEffect(() => {
		if (userId || props.idAuthUser) {
			props.getProfileUser(userId || props.idAuthUser);
		}
		props.getUserStatus(userId || props.idAuthUser);
	}, [userId, props.idAuthUser]);

	return (
		<div>
			<Profile
				userIdCurrentPage={userId || props.idAuthUser}
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
	idAuthUser: state.auth.id,
	status: state.profilePage.status,
});

export default compose(
	connect(mapStateToProps, { getProfileUser, getUserStatus, updateUserStatus }),
	withAuthRedirect
)(ProfileContainer);

import React, { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { SetUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api.js";

const ProfileContainer = props => {
	const { userId } = useParams();

	useEffect(() => {
		if (userId || props.idAuthUser) {
			profileAPI.getProfile(userId || props.idAuthUser).then(response => {
				props.SetUserProfile(response);
			});
		}
	}, [userId, props.idAuthUser]);

	return (
		<div>
			<Profile profile={props.profile} />
		</div>
	);
};

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
	idAuthUser: state.auth.id,
});

export default connect(mapStateToProps, { SetUserProfile })(ProfileContainer);

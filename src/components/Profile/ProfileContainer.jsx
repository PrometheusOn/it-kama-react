import React, { useEffect } from "react";
import Profile from "./Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { SetUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

const ProfileContainer = props => {
	const { userId } = useParams();

	useEffect(() => {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || 14}`)
			.then(response => {
				props.SetUserProfile(response.data);
			});
	}, [userId]);

	return (
		<div>
			<Profile profile={props.profile} />
		</div>
	);
};

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { SetUserProfile })(ProfileContainer);

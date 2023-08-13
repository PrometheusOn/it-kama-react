import React, { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getProfileUser } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProfileContainer = props => {
	const { userId } = useParams();

	useEffect(() => {
		if (userId || props.idAuthUser) {
			props.getProfileUser(userId || props.idAuthUser);
		}
	}, [userId, props.idAuthUser]);

	if (!props.isAuth) return <Navigate to={"/login"} />;
	
	return (
		<div>
			<Profile profile={props.profile} />
		</div>
	);
};

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
	idAuthUser: state.auth.id,
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getProfileUser })(ProfileContainer);

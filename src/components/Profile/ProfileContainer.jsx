import { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getProfileUser } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import { compose } from "redux";

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

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
	idAuthUser: state.auth.id,
});

export default compose(
	connect(mapStateToProps, { getProfileUser }),
	withAuthRedirect
)(ProfileContainer);

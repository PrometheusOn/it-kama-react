import React from "react";
import Profile from "./Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { SetUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/14`)
			// ${this.props.profile}
			.then(response => {
				this.props.SetUserProfile(response.data);
			});
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile} />;
	}
}

const mapStateToProps = state => ({
	profile: state.profilePage.profile,
});
export default connect(mapStateToProps, { SetUserProfile })(ProfileContainer);

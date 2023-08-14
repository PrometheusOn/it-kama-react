import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, unfollow, toogleFollowingProgress, getUsers } from "../../redux/usersReducer";
import Preloader from "../../components/common/Preloader/Preloader.jsx";
import { compose } from "redux";

class UsersContainer extends React.Component {
	componentDidMount() {
		if (!(this.props.users && this.props.totalUsersCount)) {
			this.props.getUsers(this.props.currentPage, this.props.pageSize);
		}
	}

	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					followingInProgress={this.props.followingInProgress}
					toogleFollowingProgress={this.props.toogleFollowingProgress}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		toogleFollowingProgress, // AC
		getUsers, //thunkCreator TC
	})
)(UsersContainer);

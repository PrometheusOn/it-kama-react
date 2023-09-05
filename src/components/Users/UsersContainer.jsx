import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, unfollow, toogleFollowingProgress, requestUsers } from "../../redux/usersReducer";
import Preloader from "../../components/common/Preloader/Preloader.jsx";
import { compose } from "redux";
import {
	getUsers,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getFollowingInProgress,
} from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		if (!(this.props.users && this.props.totalUsersCount)) {
			this.props.requestUsers(this.props.currentPage, this.props.pageSize);
		}
	}

	onPageChanged = pageNumber => {
		this.props.requestUsers(pageNumber, this.props.pageSize);
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

// const mapStateToProps = state => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	};
// };

const mapStateToProps = state => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	};
};

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		toogleFollowingProgress, // AC
		requestUsers, //thunkCreator TC
	})
)(UsersContainer);

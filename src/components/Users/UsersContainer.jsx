import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toogleIsFetching,
} from "../../redux/usersReducer";
import Preloader from "../../components/common/Preloader/Preloader.jsx";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
	componentDidMount() {
		if (!(this.props.users && this.props.totalUsersCount)) {
			this.props.toogleIsFetching(true);
			userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
				this.props.toogleIsFetching(false);
				this.props.setUsers(response.items);
				this.props.setTotalUsersCount(response.totalCount);
			});
		}
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		this.props.toogleIsFetching(true);
		userAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
			this.props.toogleIsFetching(false);
			this.props.setUsers(response.items);
		});
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
	};
};

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toogleIsFetching, // AC
})(UsersContainer);

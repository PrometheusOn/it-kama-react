import React from "react";
import axios from "axios";
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

class UsersContainer extends React.Component {
	componentDidMount() {
		if (!(this.props.users && this.props.totalUsersCount)) {
			//Запрос не будет выполнятся, если в state users и totalUsersCount не равны 0
			this.props.toogleIsFetching(true);
			axios
				.get(
					`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
				)
				.then(response => {
					this.props.toogleIsFetching(false);
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount);
				});
		}
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		this.props.toogleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toogleIsFetching(false);
				this.props.setUsers(response.data.items);
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

// const mapDispatchToProps = dispatch => {
// 	return {
// 		follow: userId => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: userId => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: users => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: currentPage => {
// 			dispatch(setCurrentPageAC(currentPage));
// 		},
// 		setTotalUsersCount: totalCount => {
// 			dispatch(setTotalUsersCountAC(totalCount));
// 		},
// 		toogleIsFetching: isFetching => {
// 			dispatch(toogleIsFetchingAC(isFetching))
// 		}
// 	};
// };

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toogleIsFetching, // AC
})(UsersContainer);

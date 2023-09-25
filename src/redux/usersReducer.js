import { userAPI, followAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helper";

const FOLLOW = "social-network/usersReducer/FOLLOW";
const UNFOLLOW = "social-network/usersReducer/UNFOLLOW";
const SET_USERS = "social-network/usersReducer/SET_USERS";
const SET_CURRENT_PAGE = "social-network/usersReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "social-network/usersReducer/SET_TOTAL_USER_COUNT";
const TOOGLE_IS_FETCHING = "social-network/usersReducer/TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "social-network/usersReducer/TOOGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
			};
		}
		case SET_USERS: {
			return { ...state, users: action.users };
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage,
			};
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			};
		}
		case TOOGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			};
		}
		case TOOGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId),
			};
		}
		default:
			return state;
	}
};

const followSuccess = userId => ({ type: FOLLOW, userId });
const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
const setUsers = users => ({ type: SET_USERS, users });
const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
const toogleIsFetching = isFetching => ({ type: TOOGLE_IS_FETCHING, isFetching });
const toogleFollowingProgress = (isFetching, userId) => ({
	type: TOOGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
});

const requestUsers = (currentPage, pageSize) => async dispatch => {
	dispatch(toogleIsFetching(true));
	const response = await userAPI.getUsers(currentPage, pageSize);
	dispatch(setCurrentPage(currentPage));
	dispatch(toogleIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalUsersCount(response.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toogleFollowingProgress(true, userId));
	const response = await apiMethod(userId);
	if (response.resultCode == 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toogleFollowingProgress(false, userId));
};

const unfollow = userId => async dispatch => {
	followUnfollowFlow(dispatch, userId, followAPI.unfollow, unfollowSuccess);
};

const follow = userId => async dispatch => {
	followUnfollowFlow(dispatch, userId, followAPI.follow, followSuccess);
};

export {
	usersReducer,
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toogleIsFetching,
	toogleFollowingProgress,
	requestUsers,
};

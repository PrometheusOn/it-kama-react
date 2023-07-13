const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
	users: [
		{
			id: 1,
			followed: false,
			photoUrl:
				"https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album",
			fullname: "Рамазан",
			status: "Начинать всегда стоит с того, что сеет сомнения.",
			location: { city: "Chkalovsk", country: "Tajikistan" },
		},
		{
			id: 2,
			followed: true,
			photoUrl: "https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg",
			fullname: "Амир",
			status: "80% успеха - это появиться в нужном месте в нужное время.",
			location: { city: "Ufa", country: "Russia" },
		},
		{
			id: 3,
			followed: true,
			photoUrl: "https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg",
			fullname: "Артур",
			status: "Стоит только поверить, что вы можете – и вы уже на полпути к цели",
			location: { city: "Ufa", country: "Russia" },
		},
		{
			id: 4,
			followed: true,
			photoUrl: "https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg",
			fullname: "Семён",
			status: "Неосмысленная жизнь не стоит того, чтобы жить.",
			location: { city: "Dagestan", country: "Russia" },
		},
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				}),
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}
					return user;
				}),
			};
		}
		case SET_USERS: {
			return { ...state, users: [...state.users, ...action.users] };
		}
		default:
			return state;
	}
};

const followAC = userId => ({ type: FOLLOW, userId });
const unfollowAC = userId => ({ type: UNFOLLOW, userId });
const setUsersAC = users => ({ type: SET_USERS, users });

export { usersReducer, followAC, unfollowAC, setUsersAC };

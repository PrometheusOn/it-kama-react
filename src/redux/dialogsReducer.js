const ADD_MESSAGE = "social-network/dialogsReducer/ADD-MESSAGE";
const DELETE_MESSAGE = "social-network/dialogsReducer/DELETE_MESSAGE";

const initialState = {
	dialogs: [
		{
			id: 1,
			name: "Рамазан",
			img: "https://sun9-38.userapi.com/impf/c628431/v628431282/47195/U0go3lIVmkM.jpg?size=604x440&quality=96&sign=cfe3ad01c40005dea23dd528afe9b84f&c_uniq_tag=nGAT9iRRTja1ROTYYIx5BCCn-nJS4HpSK5P6OTkhDEk&type=album",
		},
		{
			id: 2,
			name: "Амир",
			img: "https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610259041165390829.jpg",
		},
		{
			id: 3,
			name: "Артур",
			img: "https://milliard.tatar/images/uploads/5ff7e61b2b51280dcb6994efa061a075.jpg",
		},
		{
			id: 4,
			name: "Семён",
			img: "https://cdnn21.img.ria.ru/images/07e6/0c/01/1835584300_520:0:2567:2047_1440x0_80_0_0_7c4d99ac8f241c5be355031307e70058.jpg",
		},
	],
	messages: [
		{ id: 1, message: "hi" },
		{ id: 2, message: "how are you" },
		{ id: 3, message: "yo" },
		{ id: 4, message: "wait...Are you nigger?" },
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				messages: [...state.messages, { id: 5, message: action.textNewMessage }],
			};
		}
		case DELETE_MESSAGE: {
			return {
				...state,
				messages: [...state.messages].filter(m => {
					return m.id !== action.idMessage;
				}),
			};
		}
		default:
			return state;
	}
};

const addNewMessage = textNewMessage => ({ type: ADD_MESSAGE, textNewMessage });
const deleteMessage = idMessage => ({ type: DELETE_MESSAGE, idMessage });

export { dialogsReducer, addNewMessage, deleteMessage };

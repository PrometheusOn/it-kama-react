import { addNewMessage, deleteMessage, dialogsReducer } from "./dialogsReducer";

const state = {
	messages: [
		{ id: 1, message: "hi" },
		{ id: 2, message: "how are you" },
		{ id: 3, message: "yo" },
		{ id: 4, message: "wait...Are you nigger?" },
	],
};

it("messages length should be equil 5", () => {
	const action = addNewMessage("#89.Тесты, tdd, jest");

	const newState = dialogsReducer(state, action);

	expect(newState.messages.length).toBe(5);
});

it("messages length should be decrement", () => {
	const action = deleteMessage(3);

	const newState = dialogsReducer(state, action);

	expect(newState.messages.length).toBe(3);
});

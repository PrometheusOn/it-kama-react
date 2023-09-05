const getDialogs = state => {
	return state.dialogsPage.dialogs;
};

const getMessages = state => {
	return state.dialogsPage.messages;
};

export { getDialogs, getMessages };

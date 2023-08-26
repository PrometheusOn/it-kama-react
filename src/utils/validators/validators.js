const requiredField = value => {
	if (value) return undefined;

	return "Поле обязательно для заполнения";
};

const maxLengthText = maxLength => value => {
	if (value.length < maxLength) return undefined;

	return `Длина текста не должна превышать ${maxLength}`;
};

export { requiredField, maxLengthText };

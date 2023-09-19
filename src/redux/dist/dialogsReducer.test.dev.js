"use strict";

var _dialogsReducer = require("./dialogsReducer");

var state = {
  messages: [{
    id: 1,
    message: "hi"
  }, {
    id: 2,
    message: "how are you"
  }, {
    id: 3,
    message: "yo"
  }, {
    id: 4,
    message: "wait...Are you nigger?"
  }]
};
it("messages length should be equil 5", function () {
  var action = (0, _dialogsReducer.addNewMessage)("#89.Тесты, tdd, jest");
  var newState = (0, _dialogsReducer.dialogsReducer)(state, action);
  expect(newState.messages.length).toBe(5);
});
it("messages length should be decrement", function () {
  var action = (0, _dialogsReducer.deleteMessage)(3);
  var newState = (0, _dialogsReducer.dialogsReducer)(state, action);
  expect(newState.messages.length).toBe(3);
});
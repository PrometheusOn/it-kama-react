import {combineReducers, legacy_createStore as createStore} from "redux"
import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReducer'
import { sidebarReducer } from './sidebarReducer'

combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

const store = createStore()

export default store
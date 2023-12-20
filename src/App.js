// import React from 'react';
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import GroupContainer from "./components/Group/GroupContainer.jsx";
import { Routes, Route } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { initializeApp } from "./redux/appReducer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

const App = props => {
	useEffect(() => {
		props.initializeApp();
	}, []);
	// [props.userId]

	if (!props.initialized) return <Preloader />;
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<NavContainer />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/profile/:userId?' element={<ProfileContainer />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/users' element={<UsersContainer />} />
					<Route path='/group' element={<GroupContainer />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/*' element={<div>Страница не найдена</div>} />
					<Route path='/login' element={<LoginContainer />} />
				</Routes>
			</div>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		initialized: state.app.initialized,
	};
};
export default compose(connect(mapStateToProps, { initializeApp }))(App);

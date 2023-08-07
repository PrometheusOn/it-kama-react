// import React from 'react';
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import { Routes, Route } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";

const App = () => {
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
					<Route path='/settings' element={<Settings />} />
					<Route path='/*' element={<div>Страница не найдена</div>} />
				</Routes>
			</div>
		</div>
	);
};

export default App;

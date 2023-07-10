import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store.js";
import StoreContext from "./StoreContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<StoreContext.Provider value={store}>
					<App />
				</StoreContext.Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
};

renderEntireTree();

store.subscribe(renderEntireTree);

reportWebVitals();

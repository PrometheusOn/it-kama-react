import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";

const MapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
	};
};

// class AuthRedirectComponent extends React.Component {
// 	render(){
// 		if (!this.props.isAuth) return <Navigate to={"/login"} />;
// 		return <Dialogs {...this.props}/>
// 	}
// }

const DialogsContainer = connect(MapStateToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;

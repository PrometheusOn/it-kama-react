import Login from "./Login";
import { signIn } from "../../redux/authReducer";
import { compose } from "redux";
import { connect } from "react-redux";
import { getIsAuth } from "../../redux/selectors/auth-selector";

const LoginContainer = props => {
	return <Login signIn={props.signIn} isAuth={props.isAuth} />;
};

const mapStateToProps = state => {
	return {
		isAuth: getIsAuth(state),
	};
};

export default compose(
	connect(mapStateToProps, {
		signIn,
	})
)(LoginContainer);

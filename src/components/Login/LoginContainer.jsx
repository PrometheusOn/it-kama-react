import Login from "./Login";
import { signIn } from "../../redux/login-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import withLoginRedirect from "../../hoc/withLoginRedirect.jsx";

const LoginContainer = props => {
	return <Login signIn={props.signIn} />;
};

const mapStateToProps = state => {
	return {
		email: state.login.email,
		password: state.login.password,
		rememberMe: state.login.rememberMe,
		captcha: state.login.captcha,
	};
};

export default compose(
	connect(mapStateToProps, {
		signIn, //thunkCreator TC
	}),
	withLoginRedirect
)(LoginContainer);

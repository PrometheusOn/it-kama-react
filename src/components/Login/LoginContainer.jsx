import Login from "./Login";
import { signIn } from "../../redux/auth-reducer";
import { compose } from "redux";
import { connect } from "react-redux";

const LoginContainer = props => {
	return <Login signIn={props.signIn} isAuth={props.isAuth} />;
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export default compose(
	connect(mapStateToProps, {
		signIn, //thunkCreator TC
	})
)(LoginContainer);

import { compose } from "redux";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileStatusContainer = props => {
	return <ProfileStatusWithHooks {...props} />;
};

export default compose()(ProfileStatusContainer);

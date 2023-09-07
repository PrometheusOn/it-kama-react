import { compose } from "redux";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
// import ProfileStatus from "./ProfileStatus";

const ProfileStatusContainer = props => {
	return <ProfileStatusWithHooks {...props} />;
};

export default compose()(ProfileStatusContainer);

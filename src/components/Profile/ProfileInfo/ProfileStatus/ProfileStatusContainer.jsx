import { compose } from "redux";
import ProfileStatus from "./ProfileStatus";

const ProfileStatusContainer = props => {
	return <ProfileStatus {...props} />;
};

export default compose()(ProfileStatusContainer);

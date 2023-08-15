import { compose } from "redux";
import ProfileStatus from "./ProfileStatus";

const ProfileStatusContainer = () => {
	return <ProfileStatus {...props} />;
};

export default compose()(ProfileStatusContainer);

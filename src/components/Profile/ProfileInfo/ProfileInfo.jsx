import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import UserPhoto from "../../../assets/images/user.png";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div className={classes.profile_info}>
			<div className={classes.bannerPlace}>
				<img
					className={classes.content_banner}
					src='https://images.unsplash.com/photo-1549212871-3670799df695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MjElM0E5fGVufDB8fDB8fHww&w=1000&q=80'
				/>
			</div>
			<div className={classes.descriptionBlock}>
				<div className={classes.imageBlock}>
					<img
						className={classes.profile_image}
						src={props.profile.photos.large ? props.profile.photos.large : UserPhoto}
					/>
					<ProfileStatusContainer
						userIdCurrentPage={props.userIdCurrentPage}
						userIdAuthUser={props.userIdAuthUser}
						status={props.status}
						updateUserStatus={props.updateUserStatus}
					/>
				</div>
				<div className={classes.description}>
					<div className={classes.descFontStyle + " " + classes.fullName}>
						{props.profile.fullName
							? props.profile.fullName
							: "Безымянный пользователь"}
					</div>
					<div className={classes.descFontStyle}>
						{props.profile.AboutMe ? props.profile.AboutMe : ""}
					</div>
					<div className={classes.descFontStyle}>
						Ищу работу: {props.profile.lookingForAJob ? "Да" : "Нет"}
					</div>
					<div className={classes.descFontStyle}>
						О работе:
						{props.profile.lookingForAJobDescription
							? ` ${props.profile.lookingForAJobDescription}`
							: ""}
					</div>
					<div className={classes.descFontStyle}>
						Мои контакты:
						{Object.entries(props.profile.contacts).map(c => {
							if (c[1]) {
								return (
									<a
										className={classes.contactLink}
										href={`${c[1]}`}
										target='_blank'
									>
										{c[0]}
									</a>
								);
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;

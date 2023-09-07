import React, { useState } from "react";

const ProfileStatus = props => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const onStatusChange = e => {
		setStatus(e.currentTarget.value);
	};

	const toogleEditMode = () => {
		setEditMode(!editMode);
		if (editMode) {
			props.updateUserStatus(status);
		}
	};

	const checkIdCurrentUser = () => {
		if (props.userIdCurrentPage === props.userIdAuthUser) {
			return toogleEditMode();
		}
	};

	return (
		<div>
			{editMode ? (
				<input
					autoFocus={true}
					onBlur={toogleEditMode}
					value={status}
					onChange={onStatusChange}
				/>
			) : (
				<div
					style={{ width: "100%", minHeight: "20px" }}
					onDoubleClick={checkIdCurrentUser}
				>
					{props.status}
				</div>
			)}
		</div>
	);
};

export default ProfileStatus;

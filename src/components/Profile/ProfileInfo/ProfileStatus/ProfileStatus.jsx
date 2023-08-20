import React from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	onStatusChange = e => {
		this.setState({
			// ...this.state,
			status: e.currentTarget.value,
		});
	};

	toogleEditMode = () => {
		this.setState({
			// ...this.state,
			editMode: !this.state.editMode,
		});
		if (this.state.editMode) {
			this.props.updateUserStatus(this.state.status);
		}
	};

	checkIdCurrentUser = () => {
		if (this.props.userIdCurrentPage === this.props.userIdAuthUser) {
			return this.toogleEditMode();
		}
	};

	render() {
		return (
			<div>
				{this.state.editMode ? (
					<input
						autoFocus={true}
						onBlur={this.toogleEditMode}
						value={this.state.status}
						onChange={this.onStatusChange}
					/>
				) : (
					<div
						style={{ width: "100%", minHeight: "20px" }}
						onDoubleClick={this.checkIdCurrentUser}
					>
						{this.props.status}
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;

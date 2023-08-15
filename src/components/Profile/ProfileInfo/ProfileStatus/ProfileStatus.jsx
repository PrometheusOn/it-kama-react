import React from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	};

	toogleEditMode = () => {
		this.setState({
			...this.state,
			editMode: !this.state.editMode,
		});
	};

	render() {
		return (
			<div>
				{this.state.editMode ? (
					<input autoFocus={true} onBlur={this.toogleEditMode} value={this.props.status} />
				) : (
					<div onDoubleClick={this.toogleEditMode}>{this.props.status}</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;

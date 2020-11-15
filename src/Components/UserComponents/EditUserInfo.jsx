import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export class EditUserInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isShowEditUserInfo: false };
	}
	saveEditedInfo = () => {};
	render() {
		return (
			<div className="container mt-2">
				<form>
					<div className="input-group mt-1">
						<input placeholder="Login" type="text" />
					</div>
					<div className="input-group mt-1">
						<input placeholder="Password" type="email" />
					</div>
					<div className="input-group mt-1">
						<input placeholder="Email" type="email" />
					</div>

					<div className="input-group mb-1 mt-1">
						<div className="custom-file">
							<input
								type="file"
								className="custom-file-input"
								id="inputGroupFile01"
							/>
							<label className="custom-file-label" for="inputGroupFile01">
								{" "}
								Profile Picture
							</label>
						</div>
					</div>

					<button
						type="button"
						className="align-self-end btn btn-primary mt-auto "
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
export default EditUserInfo;

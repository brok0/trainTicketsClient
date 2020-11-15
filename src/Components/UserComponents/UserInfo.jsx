import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export class UserInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isShowEditUserInfo: true };
	}
	render() {
		return (
			<div className="container placeItems-center">
				<img
					src="../../logo192.png"
					class="img-thumbnail rounded  profilePic "
					alt="profile pic"
				/>
				<div className="">
					Logged as: <h6>Admin</h6>
				</div>
				<div className="">Email: mail@mail</div>
				<button type="button" className=" btn btn-primary mt-auto ">
					Edit
				</button>
				<Link to="/login" type="button" className=" btn btn-danger mt-auto ">
					Logout
				</Link>
			</div>
		);
	}
}
export default UserInfo;

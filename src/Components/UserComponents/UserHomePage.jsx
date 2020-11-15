import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import TicketsCard from "./card";
import EditUserInfo from "./EditUserInfo";
import UserInfo from "./UserInfo";
import AdminPanel from "./AdminPanel";

export class UserHomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { isShowEditUserInfo: false, userid: 2, UserTickets: [] };
	}
	componentDidMount() {
		fetch(`https://localhost:44301/ticket/user?userid=${this.state.userid}`)
			.then((res) => res.json())
			.then((res) =>
				res
					.filter((user) => user.PersonID != 0)
					.map((e) => ({
						...e,
						departureTime: new Date(e.departureTime),
						arrivalTime: new Date(e.arrivalTime),
					}))
			)
			.then(
				(res) => {
					this.setState({ UserTickets: res });
				},
				() => {
					console.log(this.state.UserTickets);
				}
			);
	}
	render() {
		return (
			<div>
				<div className="m-4  card text-center">
					<div className="card-header">Tickets</div>
					<div className="card-body">
						{this.state.userTickets == 0 ? (
							<h2>
								{" "}
								No tickets! Buy some <Link to="/search">here</Link>
							</h2>
						) : (
							<TicketsCard
								Tickets={this.state.UserTickets}
								user={2}
							></TicketsCard>
						)}
					</div>
				</div>

				<AdminPanel />
			</div>
		);
	}
}
export default UserHomePage;

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TicketsCard from "./UserComponents/card";
import { Suspense } from "react";

export class SearchForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			To: "",
			From: "",
			Date: "",

			Tickets: [],
			cities: [],
		};

		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		fetch(`https://localhost:44301/ticket/cities`)
			.then((res) => res.json())
			.then((res) => this.setState({ cities: res }));
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.GetTickets();
	};

	GetTickets() {
		let to = this.state.To;
		let from = this.state.From;

		var requestUrl = `https://localhost:44301/ticket/search?To=${to}&From=${from}`;

		fetch(requestUrl) // resolve promise
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
			.then((res) => {
				this.setState({ Tickets: res }, () => {
					this.state.Tickets == null
						? console.log("nothing found")
						: console.log("all good");
				});
			})
			.catch(console.error.bind(console));
	}

	render() {
		var cities = this.state.cities;

		return (
			<div className="position-absolute mt-5 mb-5" style={{ left: "30%" }}>
				<h3 style={{ marginLeft: "3 rem;" }}>Buy tickets for your jorney.</h3>
				<h5 className="ml-4">Best services for our customers</h5>

				<form onSubmit={this.handleSubmit}>
					<div className="mt-3 mb-3">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span
									className="input-group-text"
									id="inputGroup-sizing-default"
								>
									{" "}
									From{" "}
								</span>
								<input
									type="text"
									className="form-control ml-2"
									name="From"
									list="cities"
									autoComplete="off"
									value={this.state.From}
									onChange={this.handleChange}
								/>

								<span
									className="ml-4 input-group-text"
									id="inputGroup-sizing-default"
								>
									To
								</span>
								<input
									type="text"
									className=" form-control ml-2"
									name="To"
									list="cities"
									autoComplete="off"
									value={this.state.To}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>

					<input
						type="date"
						className="form-control mb-3"
						placeholder="date"
						aria-label="input"
						aria-describedby="inputGroup-sizing-default"
					/>
					<input type="submit" className="btn btn-success" value="Search" />
				</form>

				<TicketsCard Tickets={this.state.Tickets} user={1}></TicketsCard>
				<datalist id="cities">
					{cities &&
						cities.length > 0 &&
						cities
							.filter((ct) => ct != this.state.From && ct != this.state.To)
							.map((ct) => <option value={`${ct}`} />)}
				</datalist>
			</div>
		);
	}
}

export default SearchForm;

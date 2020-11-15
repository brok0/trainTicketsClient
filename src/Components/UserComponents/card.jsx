import React, { Component, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function TicketsCard(props) {
	var Tickets = props.Tickets;
	var user = props.user;
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};

	const reserveTicket = (ticketID, userID) => {
		fetch("https://localhost:44301/ticket/user/add", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				ticketId: ticketID,
				userid: userID,
			}),
		});
	};

	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<div>
				{!Tickets || Tickets.length <= 0
					? ""
					: Tickets.map((ticket) => (
							<div className="card mb-2 mt-2" id={`card${ticket.id}`}>
								<div className="card-body">
									<h5 className="card-title">
										{ticket.to} - {ticket.from}
									</h5>
									<h6 className="card-subtitle mb-2 text-muted"></h6>
									<p className="card-text">
										{ticket.departureTime.toLocaleDateString("uk-UA", options)}{" "}
										- {ticket.arrivalTime.toLocaleDateString("uk-UA", options)}
									</p>
									<a href="#" className="card-link">
										Train type: {ticket.trainType}
									</a>
									<a href="#" className="card-link">
										Number : {ticket.trainNumber}
									</a>
									<h5 className="card-title"> Price : {ticket.price}₴</h5>
									<button
										onClick={
											(reserveTicket(ticket.id, user.id),
											() =>
												document.getElementById(`card${ticket.id}`).remove())
										}
										className="align-self-end btn btn-primary ml-3 "
									>
										Get Ticket
									</button>
								</div>
							</div>
					  ))}
			</div>
		</Suspense>
	);
}

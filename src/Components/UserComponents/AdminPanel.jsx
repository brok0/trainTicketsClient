import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
export default function AdminPanel() {
	return (
		<div className="m-4 card text-center">
			<div className="card-header">
				<ul className="nav nav-pills card-header-pills">
					<li className="nav-item mr-5">
						<a className="nav-link active" href="#">
							Admin Panel
						</a>
					</li>
				</ul>
			</div>
			<div className="card-body">
				<h5 className="card-title">
					You can add,delete or change tickets here
				</h5>

				<ModalContainer />
			</div>
		</div>
	);
}

function ModalContainer() {
	const [showPost, setShowPost] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [showPut, setShowPut] = useState(false);

	const handleClosePost = () => setShowPost(false);
	const handleShowPost = () => setShowPost(true);
	const handleCloseDelete = () => setShowDelete(false);
	const handleShowDelete = () => setShowDelete(true);
	const handleClosePut = () => setShowPut(false);
	const handleShowPut = () => setShowPut(true);

	return (
		<>
			<Button className="mr-5" variant="info" onClick={handleShowPost}>
				Add ticket
			</Button>
			<Button className="mr-5" variant="info" onClick={handleShowDelete}>
				Delete ticket
			</Button>

			<Button className="mr-5" variant="info" onClick={handleShowPut}>
				Change ticket
			</Button>

			<Modal show={showPost} onHide={handleClosePost}>
				<Modal.Header closeButton>
					<Modal.Title>Add ticket</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormPost />
				</Modal.Body>
			</Modal>

			<Modal show={showDelete} onHide={handleCloseDelete}>
				<Modal.Header closeButton>
					<Modal.Title>Delete</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormDelete />
				</Modal.Body>
			</Modal>

			<Modal show={showPut} onHide={handleClosePut}>
				<Modal.Header closeButton>
					<Modal.Title>Change</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormPut />
				</Modal.Body>
			</Modal>
		</>
	);
}

function FormPost() {
	const [to, setTo] = useState("");
	const [from, setFrom] = useState("");
	const [departure, setDeparture] = useState(new Date(1995, 1, 1));
	const [arrival, setArrival] = useState(new Date(1995, 1, 1));
	const [trainNumber, setNumber] = useState("");
	const [trainType, setType] = useState("");
	const [Price, setPrice] = useState(0);
	const [error, setError] = useState("");
	const [errorFieldOpacity, setOpacity] = useState(0);

	const postTicket = () => {
		fetch("https://localhost:44301/ticket/new", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				to: to,
				from: from,
				departureTime: departure,
				arrivalTime: arrival,
				price: parseInt(Price, 10),
				trainNumber: trainNumber,
				trainType: trainType,
				personID: 24,
			}),
		}).then((res) => console.log(res));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!to || to.length <= 0 || !from || from.length <= 0) {
			setError("Destination must be entered");
			setOpacity(100);
		}
		console.log(departure, testDate);
		var testDate = new Date(1995, 1, 1);
		if (departure === testDate || arrival === testDate) {
			setError("Date is not valid");
			setOpacity(100);
		}
		if (
			!trainNumber ||
			trainNumber.length < 0 ||
			!trainType ||
			trainType.length <= 0
		) {
			setError("Train details must be filled");
			setOpacity(100);
		}

		if (Price <= 0) {
			setError("Price cant be less than zero");
			setOpacity(100);
		}
		postTicket();
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formPostTo">
				<Form.Label>To</Form.Label>
				<Form.Control
					type="text"
					onChange={(e) => setTo(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>From</Form.Label>
				<Form.Control
					type="text"
					onChange={(e) => setFrom(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Departure Time</Form.Label>
				<Form.Control
					type="datetime-local"
					onChange={(e) => setDeparture(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Arrival Time</Form.Label>
				<Form.Control
					type="datetime-local"
					onChange={(e) => setArrival(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Price</Form.Label>
				<Form.Control
					type="number"
					onChange={(e) => setPrice(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Train Number</Form.Label>
				<Form.Control
					type="number"
					onChange={(e) => setNumber(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Train Type</Form.Label>
				<Form.Control
					type="text"
					onChange={(e) => setType(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
			<Alert
				className="mt-2"
				variant="warning"
				style={{ opacity: `${errorFieldOpacity}%` }}
			>
				{error}
			</Alert>
			<Form.Control.Feedback type="valid">Success</Form.Control.Feedback>
		</Form>
	);
}

function FormDelete() {
	const [id, setId] = useState(0);
	const deleteTicket = () => {
		fetch(`https://localhost:44301/ticket/${id}`, {
			method: "delete",
			headers: {
				"Content-type": "application/json",
			},
		}).then((res) => console.log(res));
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		deleteTicket();
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formPostTo">
				<Form.Label>Ticket ID</Form.Label>
				<Form.Control
					type="number"
					onChange={(e) => {
						setId(e.target.value);
					}}
					autoComplete="off"
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Delete
			</Button>
		</Form>
	);
}

function FormPut() {
	const [to, setTo] = useState("");
	const [from, setFrom] = useState("");
	const [departure, setDeparture] = useState(new Date(1995, 1, 1));
	const [arrival, setArrival] = useState(new Date(1995, 1, 1));
	const [trainNumber, setNumber] = useState("");
	const [trainType, setType] = useState("");
	const [Price, setPrice] = useState(0);
	const [error, setError] = useState("");
	const [errorFieldOpacity, setOpacity] = useState(0);
	const [id, setId] = useState();
	const putTicket = () => {
		fetch(`https://localhost:44301/ticket/update?id=${id}`, {
			method: "put",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				to: to,
				from: from,
				departureTime: departure,
				arrivalTime: arrival,
				price: parseInt(Price, 10),
				trainNumber: trainNumber,
				trainType: trainType,
				personID: 24,
			}),
		}).then((res) => console.log(res));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!to || to.length <= 0 || !from || from.length <= 0) {
			setError("Destination must be entered");
			setOpacity(100);
		}
		console.log(departure, testDate);
		var testDate = new Date(1995, 1, 1);
		if (departure === testDate || arrival === testDate) {
			setError("Date is not valid");
			setOpacity(100);
		}
		if (
			!trainNumber ||
			trainNumber.length < 0 ||
			!trainType ||
			trainType.length <= 0
		) {
			setError("Train details must be filled");
			setOpacity(100);
		}

		if (Price <= 0) {
			setError("Price cant be less than zero");
			setOpacity(100);
		}
		putTicket();
	};
	const GetTicketById = () => {
		fetch(`https://localhost:44301/ticket/findId?id=${id}`)
			.then((res) => res.json())
			.then(
				(res) => {
					setTo(res.to);
					setFrom(res.from);
					setNumber(res.trainNumber);
					setType(res.trainType);
					setPrice(res.price);
					setDeparture(res.departureTime);
					setArrival(res.arrivalTime);
				},
				() => {
					console.log(to, from, Price);
				}
			);
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formPostFrom">
				<Form.Control
					type="number"
					placeholder="id"
					onChange={(e) => setId(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>
			<Button variant="info" onClick={GetTicketById}>
				Find this ticket
			</Button>
			<Form.Group controlId="formPostTo">
				<Form.Label>To</Form.Label>
				<Form.Control
					type="text"
					value={to}
					onChange={(e) => setTo(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>From</Form.Label>
				<Form.Control
					type="text"
					value={from}
					onChange={(e) => setFrom(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Departure Time</Form.Label>
				<Form.Control
					value={departure}
					type="datetime-local"
					onChange={(e) => setDeparture(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Arrival Time</Form.Label>
				<Form.Control
					value={arrival}
					type="datetime-local"
					onChange={(e) => setArrival(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Price</Form.Label>
				<Form.Control
					value={Price}
					type="number"
					onChange={(e) => setPrice(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Train Number</Form.Label>
				<Form.Control
					value={trainNumber}
					type="number"
					onChange={(e) => setNumber(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Form.Group controlId="formPostFrom">
				<Form.Label>Train Type</Form.Label>
				<Form.Control
					value={trainType}
					type="text"
					onChange={(e) => setType(e.target.value)}
					autoComplete="off"
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
			<Alert
				className="mt-2"
				variant="warning"
				style={{ opacity: `${errorFieldOpacity}%` }}
			>
				{error}
			</Alert>
			<Form.Control.Feedback type="valid">Success</Form.Control.Feedback>
		</Form>
	);
}

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavDropdown } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import UserInfo from "./UserComponents/UserInfo";
export const Header = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand ml-5" to="/tickets">
				Train tickets
			</Link>

			<Link className="nav-item nav-link ml-5" to="/search">
				{" "}
				Search For Tickets
			</Link>
			<p className="nav-item  active" id="userName">
				{" "}
			</p>
			<div
				className="collapse navbar-collapse d-flex flex-row-reverse"
				id="navbarNav"
			>
				<ul className="navbar-nav">
					<li className="nav-item active">
						<NavDropdown title="Account" id="collasible-nav-dropdown">
							<NavDropdown.Item>
								<UserInfo />
							</NavDropdown.Item>

							<NavDropdown.Divider />
							<NavDropdown.Item href="/userpage">Profile Page</NavDropdown.Item>
						</NavDropdown>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/register">
							{" "}
							Register
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/support">
							Customer support <span className="sr-only">(current)</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Header;

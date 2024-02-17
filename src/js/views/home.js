import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
	<Link to="/demo">
	<button type="button" className="Button btn btn-success">Add a new contact</button>
	</Link>
	<div className="container-box container d-flex">
		<img className="img" src="https://st4.depositphotos.com/8230070/22279/v/450/depositphotos_222797394-stock-illustration-face-expression-beautiful-woman-dark.jpg" />
		<div className="Information">
			<h5>Deyruby Rincon</h5>
			<div className="Location d-flex">
				<i className="fa-solid fa-location-dot"></i><p className="px-2">LOCATION</p>
			</div>
			<div className="Phone d-flex">
				<i className="fa-sharp fa-solid fa-phone"></i><p className="px-2">Phone</p>
			</div>
			<div className="Email d-flex">
				<i className="fa-solid fa-envelope"></i><p className="px-2">Email</p>
			</div>
		</div>
		<div className="Icons d-flex pt-2">
		<i className="fa-solid fa-pen pe-3"></i>
			<i className="fa-solid fa-trash"></i>
		</div>
	</div>
	</>
);

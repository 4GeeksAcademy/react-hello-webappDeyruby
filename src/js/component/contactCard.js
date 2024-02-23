
import React, { useContext } from "react";
import "../../styles/contactcard.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const ContactCard = ({ id, full_name, address, phone, email }) => {
	const { actions } = useContext(Context)

	const handleDelete = async () => {
		await actions.deleteContact(id)
		await actions.getContacts()
	};


	return (
		<>
			<div className="container-box container d-flex">
				<img className="img" src="https://st4.depositphotos.com/8230070/22279/v/450/depositphotos_222797394-stock-illustration-face-expression-beautiful-woman-dark.jpg" />
				<div className="Information">
					<h5>{full_name} </h5>
					<div className="Location d-flex">
						<i className="fa-solid fa-location-dot"></i><p className="px-2">{address}</p>
					</div>
					<div className="Phone d-flex">
						<i className="fa-sharp fa-solid fa-phone"></i><p className="px-2">{phone}</p>
					</div>
					<div className="Email d-flex">
						<i className="fa-solid fa-envelope"></i><p className="px-2">
							{email}</p>
					</div>
				</div>
				<div className="Icons d-flex pt-2">
					<Link to= {`/update/${id}`}>
						<i className="fa-solid fa-pen pe-3"></i>
					</Link>
					<i onClick={handleDelete} className="fa-solid fa-trash"></i>
				</div>
			</div>
		</>
	);
}

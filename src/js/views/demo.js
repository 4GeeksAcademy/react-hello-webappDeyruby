import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
	<>
	<div className="container">
	<form>
  <div className="mb-3">
	<h1 className="text-center">Add a New Contact</h1>
    <label for="exampleInputEmail1" className="form-label">Full name</label>
    <input type="name" className="form-control" placeholder= "Full name" id="exampleInputName" aria-describedby="NamelHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" placeholder= "Email" id="exampleInputEmail"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPhone" className="form-label">Phone</label>
    <input type="phone" className="form-control" placeholder= "Phone"id="exampleInputPhone"/>
  </div>
  <div className="mb-3">
    <label for="address" className="form-label">Address</label>
    <input type="password" className="form-control" placeholder= "Address" id="exampleInputAddress"/>
  </div>
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Save</button>
  <Link to= "/">
 <a href="#" className="text-decoration-none">or get back to contacts</a>
  </Link>
</div>
</form>
</div>
	</>					
	)					
		
	
};

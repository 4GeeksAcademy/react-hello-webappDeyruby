import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
		},
		actions: {
			createContact: (data) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						"full_name": data.full_name,
						"email": data.email,
						"agenda_slug": "Agenda_de_Dey",
						"address": data.address,
						"phone": data.phone
					})

				}).then((response) => {
					return response.json()
				}).then((data) => {
					console.log("data", data)
				}).catch((error) =>
					console.log(error));
			},

			getContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Agenda_de_Dey", {
					method: "GET",
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					return response.json()
				}).then((data) => {
					setStore({ contacts: [...data] })
				}).catch((error) =>
					console.log(error));
			},

			getContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "GET",
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					return response.json()
				}).then((data) => {
					setStore({ contact: data })
					console.log("data", data)
				}).catch ((error) =>
					console.log(error));
			},


			putContact: (data) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${data.id}`, {
					method: "PUT",
					headers: {
						"content-type": "application/json",
					},

					body: JSON.stringify({
						"full_name": data.full_name,
						"email": data.email,
						"agenda_slug": "Agenda_de_Dey",
						"address": data.address,
						"phone": data.phone

					}),
				}).then(() => {
					return response.json()
				}).then((data) => {
					console.log("data", data)
				})
					.catch((error) =>
						console.log(error))
			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response.json();
				})
					.catch((error) => {
						console.log("Error:", error);
					});
			},

		}
	};
};


export default getState;

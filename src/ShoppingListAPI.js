const API_URL = `http://5.75.185.206:8080/shoppingList`;

export default {
	getAll() {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", API_URL);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send();
			xhr.onload = function() {
				let items = JSON.parse(this.responseText);
				console.log(items);
				resolve(items);
			}
		});
	},
	postItem(data) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open("POST", API_URL);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send(JSON.stringify({content: data}));
			xhr.onload = function() {
				let item = JSON.parse(this.responseText);
				console.log(item);
				resolve(item);
			};
		});
	},
	removeItem(item) {		return new Promise(resolve => {
		const xhr = new XMLHttpRequest();
		xhr.open("DELETE", API_URL + `/${item.id}`);
		xhr.send("");
		xhr.onload = function() {
			resolve();
		};
	});

	}
};

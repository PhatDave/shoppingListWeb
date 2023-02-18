const API_URL = `http://www.cyka.info:8080/todo`;

export default {
	getAll() {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", API_URL);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200) {
					let items = JSON.parse(this.responseText);
					items.forEach(item => item.date = new Date(item.date));
					resolve(items);
				} else {
					reject(this.responseText);
				}
			}
		});
	},
	postItem(data) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("POST", API_URL);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send(JSON.stringify({content: data}));
			xhr.onload = function() {
				if (this.status === 200) {
					let item = JSON.parse(this.responseText);
					resolve(item);
				} else {
					reject(this.responseText);
				}
			};
		});
	},
	removeItem(item) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("DELETE", API_URL + `/${item.id}`);
			xhr.send("");
			xhr.onload = function() {
				if (this.status === 200) {
					resolve();
				} else {
					reject();
				}
			};
		});
	}
};

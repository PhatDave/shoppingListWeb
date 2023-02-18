const API_URL = `http://www.cyka.info:8080/shoppingList`;

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
			let parts = data.split(";");
			let itemContent = parts[0];
			let itemCategory = parts[1];
			if (itemCategory === undefined) {
				itemCategory = "default";
			}

			const xhr = new XMLHttpRequest();
			xhr.open("POST", API_URL);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send(JSON.stringify({content: itemContent.trim(), category: itemCategory.trim()}));
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
	},
	getAllCategories() {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", API_URL + "/category");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200) {
					let items = JSON.parse(this.responseText);
					resolve(items);
				} else {
					reject(this.responseText);
				}
			}
		});
	},
	async getAllByCategories(categories) {
		return new Promise(resolve => {
			let items = [];
			let promises = [];

			for (let i = 0; i < categories.length; i++) {
				let category = categories[i];
				let request = this.getAllByCategory(category);
				request.then(responseItems => {
					responseItems.forEach(item => item.date = new Date(item.date));
					responseItems.forEach(item => items.push(item));
				});
				promises.push(request);
			}

			Promise.all(promises).then(() => {
				resolve(items);
			});
		});
	},
	getAllByCategory(category) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", API_URL + "/category/" + category.name);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept", "application/json");
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200) {
					let items = JSON.parse(this.responseText);
					resolve(items);
				} else {
					reject(this.responseText);
				}
			}
		});

	}
};

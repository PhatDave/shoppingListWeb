<script>
import API from './TodoListAPI.js';
import TodoItem from './TodoListItem.vue';

export default {
	components: {TodoItem},
	data() {
		return {
			entries: [],
		}
	},
	methods: {
		async postItem(key) {
			if (key.which === 13) {
				let data = this.$refs.itemEntry.value;
				API.postItem(data).then(item => {
					this.entries.push(item);
					this.$refs.itemEntry.value = '';
				});
			}
		},
		async removeItem(item) {
			API.removeItem(item).then(() => {
				this.entries = this.entries.filter(entry => entry !== item);
			});
		}
	},

	async beforeMount() {
		this.entries = await API.getAll();
	},
}
</script>

<template>
	<div class="listContainer">
		<TodoItem v-for="entry in entries" :item="entry" @remove-item="removeItem"/>
	</div>
	<div class="inputContainer">
		<input type="text" id="itemEntry" ref="itemEntry" placeholder="Item yes" @keydown="postItem">
	</div>
</template>

<style scoped>
.inputContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
}
#itemEntry {
	width: 99%;
	position: fixed;
	bottom: 0;
	height: 50px;
	padding: 10px;
	font-size: 32px;
}
</style>

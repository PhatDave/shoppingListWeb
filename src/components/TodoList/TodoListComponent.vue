<script>
import API from './TodoListAPI.js';
import TodoItem from './TodoListItem.vue';
import HeaderTabs from "@/HeaderTabs.vue";

export default {
	components: {
		TodoItem,
		HeaderTabs
	},
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
	<HeaderTabs/>
	<div class="listContainer">
		<TodoItem v-for="entry in entries" :item="entry" @remove-item="removeItem"/>
	</div>
	<div class="inputContainer">
		<input type="text" id="itemEntry" ref="itemEntry" placeholder="Item yes" @keydown="postItem">
	</div>
</template>

<style scoped>
.listContainer {
	margin-bottom: 15vh;
}

.inputContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 15vh;
}

#itemEntry {
	height: 15vh;
	width: 99%;
	padding: 10px;
	font-size: 32px;
}
</style>

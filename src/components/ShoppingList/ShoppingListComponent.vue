<script>
import API from './ShoppingListAPI'
import ShoppingListItem from "./ShoppingListItem.vue";
import ShoppingListCategoryTabs from "./ShoppingListCategoryTabs.vue";

export default {
	components: {
		ShoppingListItem,
		ShoppingListCategoryTabs
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
		},
		async applyCategory(appliedCategories) {
			if (appliedCategories.length === 0) {
				this.entries = await API.getAll();
			} else {
				this.entries = await API.getAllByCategories(appliedCategories);
			}
		}
	},
	async beforeMount() {
		this.entries = await API.getAll();
	},
}
</script>

<template>
	<ShoppingListCategoryTabs @apply-category="applyCategory"/>
	<div class="listContainer">
		<ShoppingListItem v-for="entry in entries" :item="entry" @remove-item="removeItem"/>
	</div>
	<div class="inputContainer">
		<input type="text" id="itemEntry" ref="itemEntry" placeholder="Item yes" @keydown="postItem" autofocus>
	</div>
</template>

<style scoped>
.listContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	align-content: space-evenly;
}

.listContainer * {
	padding: 5px;
}

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

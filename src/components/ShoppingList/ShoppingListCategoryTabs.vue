<script>
import API from './ShoppingListAPI'

export default {
	emits: ['apply-category'],
	data() {
		return {
			categories: [],
		}
	},
	methods: {
		applyCategory(category) {
			category.applied = !category.applied;
			this.$emit('apply-category', this.appliedCategories);
		},
		async getCategories() {
			console.log("giveupdate");
			this.categories = await API.getAllCategories();
			for (let i = 0; i < this.categories.length; i++) {
				this.categories[i].index = i;
				this.categories[i].applied = false;
			}
		}
	},
	async beforeMount() {
		await this.getCategories();
	},
	computed: {
		appliedCategories: {
			get() {
				return this.categories.filter(category => category.applied);
			}
		}
	}
}
</script>

<template>
	<div class="tabContainer">
		<div v-for="category in categories" :class="{tab: true, activeTab: category.applied}" @click="applyCategory(category)">
			{{ category.name }}
		</div>
	</div>
</template>

<style scoped>
.tabContainer {
	display: grid;
	justify-items: stretch;
}
.tabContainer * {
	grid-row: 1;
}

.tab {
	border: 2px solid white;
	width: 100%;
	text-align: center;
}
.activeTab {
	border: 2px solid deeppink;
}
</style>

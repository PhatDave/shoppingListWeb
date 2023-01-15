<script>
import ShoppingListItem from "./components/ShoppingList/ShoppingListItem.vue";
import ShoppingListComponent from "./components/ShoppingList/ShoppingListComponent.vue";
import TodoListComponent from "./components/TodoList/TodoListComponent.vue";
import {shallowRef} from "vue";

export default {
	components: {
		ShoppingListComponent,
		ShoppingListItem
	},
	data() {
		return {
			tabs: [
				{
					index: 0,
					name: "Shopping List",
					component: shallowRef(ShoppingListComponent)
				},
				{
					index: 1,
					name: "Todo List",
					component: shallowRef(TodoListComponent)
				}
			],
			activeTab: 0,
		}
	},
	methods: {
		changeTab(newTab) {
			console.log(newTab);
			this.activeTab = newTab;
		}
	},

	async beforeMount() {
	},
}
</script>

<template>
	<div class="tabContainer">
		<div v-for="tab in tabs" :class="{tab, activeTab: tab.index === this.activeTab}" @click="changeTab(tab.index)">
			{{ tab.name }}
		</div>
	</div>
	<Component :is="tabs[activeTab].component" />
</template>

<style scoped>
.tabContainer {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
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

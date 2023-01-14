<script>
import Getting_Started_1 from "./components/Getting_Started_1.vue";
import Declarative_Rendering_2 from "./components/Declarative_Rendering_2.vue";
import Attribute_Bindings_3 from "./components/Attribute_Bindings_3.vue";
import Event_Listeners_4 from "./components/Event_Listeners_4.vue";
import Form_Bindings_5 from "./components/Form_Bindings_5.vue";
import Conditional_Rendering_6 from "./components/Conditional_Rendering_6.vue";
import List_Rendering_7 from "./components/List_Rendering_7.vue";
import Computed_Property_8 from "./components/Computed_Property_8.vue";
import Lifecycle_and_Template_Refs_9 from "./components/Lifecycle_and_Template_Refs_9.vue";
import Watchers_10 from "./components/Watchers_10.vue";
import Components_11 from "./components/Components_11.vue";

export default {
	components: {
		Getting_Started_1,
	},
	data() {
		return {
			activeTab: 0,
			tabs: [
				{
					index: 1,
					component: Getting_Started_1,
				},
				{
					index: 2,
					component: Declarative_Rendering_2,
				},
				{
					index: 3,
					component: Attribute_Bindings_3,
				},
				{
					index: 4,
					component: Event_Listeners_4,
				},
				{
					index: 5,
					component: Form_Bindings_5,
				},
				{
					index: 6,
					component: Conditional_Rendering_6,
				},
				{
					index: 7,
					component: List_Rendering_7,
				},
				{
					index: 8,
					component: Computed_Property_8,
				},
				{
					index: 9,
					component: Lifecycle_and_Template_Refs_9,
				},
				{
					index: 10,
					component: Watchers_10,
				},
				{
					index: 11,
					component: Components_11,
				},
				{
					index: 12,
					component: Getting_Started_1,
				},
				{
					index: 13,
					component: Getting_Started_1,
				},
				{
					index: 14,
					component: Getting_Started_1,
				},
				{
					index: 15,
					component: Getting_Started_1,
				}
			],

			classes: {
				tabContainer: "tabContainer",
				tab: "tab",
				activeTab: "activeTab",
			}
		}
	},
	methods: {
		changeTab(index) {
			this.activeTab = index - 1;
		}
	}
}
</script>

<template>
	<div :class="classes.tabContainer">
		<div v-for="tab in tabs" :class="{tab, activeTab: tab.index === this.activeTab + 1}" @click="changeTab(tab.index)">
			{{ tab.index }}
		</div>
	</div>
	<div>
		<component :is="tabs[activeTab].component"/>
	</div>
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

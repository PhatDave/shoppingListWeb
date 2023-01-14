<script>
import Getting_Started_1 from "./components/Getting_Started_1.vue";

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
	<component :is="tabs[activeTab].component"/>
</template>

<style scoped>
.tabContainer {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
}

.tab {
	border: 1px solid white;
	width: 100%;
	text-align: center;
}

.activeTab {
	border-color: #00a699;
	border-style: dashed;
}
</style>

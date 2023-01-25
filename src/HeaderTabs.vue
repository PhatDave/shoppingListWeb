<script>
export default {
	data() {
		return {
			tabs: [
				{
					index: 0,
					name: "Shopping List",
					link: "/shop",
				},
				{
					index: 1,
					name: "Todo List",
					link: "/todo",
				}
			],
		}
	},
	methods: {
		navigateTab(tab) {
			this.$router.push(tab.link);
		}
	}
}
</script>

<template>
	<div class="tabContainer">
		<div v-for="tab in tabs" class="tab" @click="navigateTab(tab)">
			{{ tab.name }}
		</div>
	</div>
</template>

<style>
.tabContainer {
	display: grid;
	justify-items: stretch;
}

.tabContainer * {
	grid-row: 1;
}
</style>

<style scoped>
.tab {
	border: 2px solid white;
	width: 100%;
	text-align: center;
}

.activeTab {
	border: 2px solid deeppink;
}
</style>

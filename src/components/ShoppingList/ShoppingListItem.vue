<script>
import Utils from "../../Utils";

export default {
	emits: ['remove-item'],
	props: {
		item: {}
	},
	methods: {
		removeItem() {
			this.$emit('remove-item', this.item);
		}
	},
	computed: {
		relativeTime() {
			return Utils.relativizeTime(this.item.date);
		}
	}
}
</script>

<template>
	<div class="item">
		<span>{{ item.id }}</span>
		<span>{{ item.content }}</span>
		<span>{{ item.category }}</span>
		<span>{{ relativeTime }}</span>
		<span class="deleteButton" @click="removeItem">DELETE</span>
	</div>
</template>

<style scoped>
.item {
	display: grid;
	grid-template-columns: 1fr 4fr 3fr 2fr 1fr;
	text-align: center;
}

.deleteButton {
	color: red;
	cursor: pointer;
	border: 2px solid red;
}
</style>

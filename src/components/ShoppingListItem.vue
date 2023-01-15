<script>
export default {
	emits: ['remove-item'],
	props: {
		item: {}
	},
	methods: {
		removeItem() {
			this.$emit('remove-item', this.item);
		}
	}
}
</script>

<template>
	<div class="item">
		<span class="size-1">{{ item.id }}</span>
		<span class="size-4">{{ item.content }}</span>
		<span class="size-2">{{ item.date }}</span>
		<span class="size-1 deleteButton" @click="removeItem">DELETE</span>
	</div>
</template>

<style scoped>
.item {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	width: 100%;
	flex-basis: 100%;
}
.item * {
	width: 0;
}

.deleteButton {
	color: red;
	cursor: pointer;
	border: 2px solid red;
}

.size-1 {
	flex-grow: 1;
}
.size-2 {
	flex-grow: 2;
}
.size-4 {
	flex-grow: 4;
}
</style>

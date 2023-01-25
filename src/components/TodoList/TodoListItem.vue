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
		},
    selectAll(event) {
      let range = document.createRange();
      range.selectNode(event.target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
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
	<div class="item selectable" @click="selectAll">
		<span >{{ item.id }}</span>
		<span >{{ item.content }}</span>
		<span >{{ relativeTime }}</span>
		<span class="deleteButton" @click="removeItem">DELETE</span>
	</div>
</template>

<style scoped>
.item {
	display: grid;
	grid-template-columns: 1fr 8fr 3fr 1fr;
	text-align: center;
}

.deleteButton {
	color: red;
	cursor: pointer;
	border: 2px solid red;
}
</style>

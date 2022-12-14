<script>
export default {
	props: {
		icon: String,
		iconSize: String,
		iconColor: String,
		color: String,
		variant: String,
	},
};
</script>

<template>
	<v-btn :color="color" :variant="variant">
		<v-icon :icon="icon" :size="iconSize" :color="iconColor" />
	</v-btn>
</template>
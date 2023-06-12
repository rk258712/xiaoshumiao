<template>
	<view>
		<template v-for="(option,index) in data.listQycTopicOptionLower">
			<text v-if="option.type == 1">{{option.content}}</text>
			<image v-else-if="option.type == 2" :src="$request.imageBaseUrl+option.fileUrl"></image>
		</template>
	</view>
</template>

<script>
	export default {
		name: "CheckOption",
		data() {
			return {

			};
		},
		props: {
			data: {
				data: [Object],
				default: null
			}
		}
	}
</script>

<style lang="scss">

</style>
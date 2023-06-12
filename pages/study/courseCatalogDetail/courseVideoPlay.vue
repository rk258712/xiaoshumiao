<template>
	<view>
		<view @click="goStudy" class="">继续学习</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateLogDetail: null
			};
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			console.log(data)
			this.cateLogDetail = data
		},
		methods: {
			goStudy() {
				let item = {
					"cateLogDetail": this.cateLogDetail,
					"fromType": 1
				}
				uni.navigateTo({
					url: '/pages/exercise/question/question?data=' + encodeURIComponent(JSON
						.stringify(item))
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
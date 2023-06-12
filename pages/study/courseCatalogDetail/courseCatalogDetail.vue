<template>
	<view>
		<view @click="videoStudy">视频学习</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courseData: null,
				cateLogDetail: null
			};
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			console.log(data)
			this.courseData = data
			this.getCateLogDetail()
		},
		methods: {
			getCateLogDetail() {
				let that = this
				this.$request.get('/api/course/courseCateLog_detail', {
					id: that.courseData.id
				}).then(res => {
					that.cateLogDetail = res.data
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
					})
				})
			},
			videoStudy() {
				let item = this.cateLogDetail
				uni.navigateTo({
					url: '/pages/study/courseCatalogDetail/courseVideoPlay?data=' + encodeURIComponent(JSON
						.stringify(item))
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
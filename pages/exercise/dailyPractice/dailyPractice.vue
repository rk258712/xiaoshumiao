<template>
	<view>
		<view class="item-bg justify-between">
			<view class="item" v-for="(item,index) in titles" @click="clickItem(index)">
				<image class="image" :src="'/static/exercise/daily_practice/daily_practice' + index + '.png'"></image>
				<text class="text">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: ['乐理', '音乐鉴赏', '视唱', '听记']
			};
		},
		methods: {
			clickItem(index) {
				this.$request.get('/api/usermember/viewDay', {
					dayId: index + 1
				}).then(res => {
					let item = {
						"dayId": index + 1,
						"fromType": 4
					}
					uni.navigateTo({
						url: '/pages/exercise/question/question?data=' + encodeURIComponent(JSON
							.stringify(item))
					})
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: rgb(242, 243, 245);
	}

	.item-bg {
		margin: 15px;
		display: flex;
		flex-wrap: wrap;
	}

	.item {
		display: flex;
		background-color: white;
		width: calc((100vw - 30px - 10px) / 2);
		height: 90px;
		border-radius: 10px;
		margin-bottom: 10px;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.image {
			width: 45px;
			height: 45px;
		}

		.text {
			margin-top: 10px;
			font-size: 12px;
		}
	}
</style>
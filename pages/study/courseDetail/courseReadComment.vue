<template>
	<view v-if="comment != null && !isDelete">
		<view class="star-bg">
			<view class="d-flex align-items-center">
				<view>课程评分</view>
				<uni-rate class="rete" :is-fill="false" :size="25" :readonly="true" :max="5" :value="star"
					color="rgb(252,155,9)" active-color="rgb(252,155,9)" />
			</view>
			<text class="star-text">{{star.toFixed(1)}}<text class="star-suffix">分</text></text>
		</view>

		<view class="uni-textarea">
			<view class="comment-title">评价详情</view>
			<van-divider style="margin: 0px;margin-bottom: 15px;" />
			<textarea style="width: 100%;" :value="text" :disabled='true' maxlength='250' placeholder="请输入您的评价" />
		</view>

		<view @click="deleteComment" class="comment-bg">删除评价</view>
	</view>

	<view v-if="isDelete"
		style="display: flex;justify-content: center;margin-top: 40px;flex-direction: column;align-items: center;">
		<image style="width: 170px;height: 100px;" src="/static/study/empty_comment.png"></image>
		<text style="color: #969799;font-size: 14px;margin-top: 16px;">评价已删除</text>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				star: 0,
				text: '',
				courseData: null,
				comment: null,
				isDelete: false
			};
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			// console.log(data)
			this.courseData = data
			this.getComment()
		},
		methods: {
			getComment() {
				let that = this
				this.$request.get('/api/course/comment', {
					courseId: that.courseData.id
				}).then(res => {
					that.comment = res.data
					that.star = res.data.stars
					that.text = res.data.content
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
					})
				})
			},
			deleteComment() {
				let that = this
				uni.showModal({
					confirmText: '删除',
					confirmColor: '#70CAA3',
					title: '温馨提示',
					content: '评价删除后不可恢复，确认删除该评价吗?',
					success: function(res) {
						if (res.confirm) {
							that.deleteAction()
						}
					}
				})
			},
			deleteAction() {
				let that = this
				this.$request.get('/api/course/del_comment', {
					id: that.comment.id
				}).then(res => {
					that.isDelete = true
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
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

	.star-bg {
		display: flex;
		height: 54px;
		background-color: white;
		margin: 15px;
		padding: 0px 15px;
		align-items: center;
		border-radius: 10px;
		justify-content: space-between;
		font-size: 17px;
	}

	.rete {
		margin-left: 15px;
	}

	.star-text {
		margin-left: 5px;
		color: $uni-bg-color-theme;

		.star-suffix {
			color: #333333;
			font-size: 10px;
		}
	}

	.comment-title {
		height: 60px;
		display: flex;
		align-items: center;
	}

	.uni-textarea {
		height: 220px;
		background-color: white;
		margin: 15px;
		padding: 5px 15px;
		border-radius: 10px;
	}

	.comment-bg {
		background-color: rgb(241, 87, 63);
		margin: 15px;
		margin-top: 30px;
		height: 44px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		color: white;
	}
</style>
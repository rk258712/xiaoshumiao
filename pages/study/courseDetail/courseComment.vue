<template>
	<view>
		<view class="star-bg">
			<view class="d-flex align-items-center">
				<view>课程评分</view>
				<uni-rate @change="onChange" class="rete" :is-fill="false" :size="25" :max="5" :value="star"
					color="rgb(252,155,9)" active-color="rgb(252,155,9)" />
			</view>
			<text class="star-text">{{star.toFixed(1)}}<text class="star-suffix">分</text></text>
		</view>

		<view class="uni-textarea">
			<textarea style="width: 100%;" @input='input' maxlength='250' placeholder="请输入您的评价" />
		</view>

		<view @click="comment" class="comment-bg">提交评价</view>

		<uni-popup ref="popup" type="center">
			<view class="popup-content">
				<text class="popup-title">感谢您的评价!</text>
				<view class="gold-coin-bg">
					<image class="gold-coin" src="/static/study/course_gold_coin.png"></image>
					<text>{{commentRes == null ? "+0" : commentRes.msg}}</text>
				</view>
				<view @click="readComment" class="read-comment-btn">查看评价</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				star: 0,
				text: '',
				courseData: null,
				commentRes: null
			};
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			// console.log(data)
			this.courseData = data
		},
		methods: {
			onChange(e) {
				this.star = e.value
			},
			input(e) {
				this.text = e.detail.value
			},
			comment() {
				if (this.text.length == 0) {
					uni.showToast({
						title: '请输入评论内容',
						icon: 'none',
						duration: 2000
					})
					return
				}
				if (this.star == 0) {
					uni.showToast({
						title: '请选择评分',
						icon: 'none',
						duration: 2000
					})
					return
				}
				let that = this
				this.$request.post('/api/course/add_comment', {
					stars: that.star,
					content: that.text,
					courseId: that.courseData.id
				}).then(res => {
					that.$refs.popup.open('center')
					that.commentRes = res
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
					})
				})
			},
			readComment() {
				this.$refs.popup.close()
				let item = this.courseData
				uni.redirectTo({
					url: '/pages/study/courseDetail/courseReadComment?data=' + encodeURIComponent(JSON
						.stringify(item))
				})
			},
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

	.uni-textarea {
		height: 220px;
		background-color: white;
		margin: 15px;
		padding: 5px 15px;
		border-radius: 10px;
	}

	.comment-bg {
		background-color: $uni-bg-color-theme;
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

	.popup-content {
		width: 70vw;
		color: #333333;
		background-color: white;
		border-radius: 8px;
		padding: 30px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.popup-title {
		font-size: 17px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.gold-coin-bg {
		display: flex;
		font-size: 25px;
		color: $uni-bg-color-theme;
		align-items: center;
	}

	.gold-coin {
		width: 36px;
		height: 36px;
		margin-right: 10px;
	}

	.read-comment-btn {
		background-color: $uni-bg-color-theme;
		margin: 30px 15px 0px 15px;
		height: 44px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		color: white;
		width: 100%;
	}
</style>
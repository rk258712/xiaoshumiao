<template>
	<view>
		<view class="nav">
			<uni-nav-bar background-color="rgba(0,0,0,0)" color="#fff" statusBar :fixed="true" :border='false'
				left-width="22px" right-width="22px">
				<template v-slot:left>
					<van-icon @click='onClickLeft' name="arrow-left" size="22" color='#fff' />
				</template>
				<view class="title">{{title}}</view>
			</uni-nav-bar>

			<view class="header-bg">
				<text>测试报告</text>
				<text class="text-en">TEST REPORT</text>
			</view>
		</view>

		<view class="report-bg">
			<view class="item">
				<view class="item-content">
					<text class="item-num text-theme">0</text>
					<text class="item-suffix">分</text></view>
				<text class="item-title">本次得分</text>
			</view>
			<view class="item">
				<view class="item-content">
					<text class="item-num text-black">0</text>
					<text class="item-suffix">题</text></view>
				<text class="item-title">错题</text>
			</view>
			<view class="item">
				<text class="item-duration">{{formatTime}}</text>
				<text class="item-title">用时</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				fromType: 1,
				exam: null,
				duration: 100
			};
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			console.log(data)
			if (data.fromType) {
				this.fromType = data.fromType
				switch (this.fromType) {
					case 6: {
						this.title = '交卷成功'
					}
					break;
					default:
						break;
				}
			}
			if (data.exam) {
				this.exam = data.exam
			}
		},
		methods: {
			onClickLeft() {
				uni.navigateBack()
			},
			padZero(value) {
				return String(value).padStart(2, '0');
			}
		},
		computed: {
			formatTime() {
				let second = this.duration < 0 ? 0 : this.duration
				const hours = Math.floor(second / 3600);
				const minutes = Math.floor((second % 3600) / 60);
				const seconds = second % 60;
				return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
			}
		}
	}
</script>

<style lang="scss">
	.nav {
		background-image: url('/static/question/answer_report_bg.png');
		background-size: 100vw 245px;
		background-repeat: no-repeat;
		background-position: bottom;
	}

	.header-bg {
		display: flex;
		flex-direction: column;
		padding: 35px 15px 30px 15px;
		color: white;
		font-size: 24px;
		font-weight: bold;

		.text-en {
			font-weight: normal;
			font-size: 12px;
			margin-top: 15px;
		}
	}

	.report-bg {
		display: flex;
		justify-content: space-around;
		height: 115px;
		margin: 0 15px;
		border-radius: 10px;
		box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.16);
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.item-title {
		font-size: 13px;
		color: rgb(153, 153, 153);
		margin-top: 11px;
	}

	.item-num {
		font-size: 25px;
	}

	.item-duration {
		font-size: 13px;
		color: #333;
		font-weight: bold;
	}

	.item-suffix {
		font-weight: normal;
	}

	.item-content {
		font-size: 15px;
		font-weight: bold;
		color: rgb(153, 153, 153);
	}
</style>
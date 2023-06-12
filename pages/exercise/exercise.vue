<template>
	<view>
		<uni-nav-bar background-color="#70CAA3" statusBar :border='false' fixed='true' rightWidth='50vw'
			leftWidth='50vw' height='60px'>
			<template v-slot:left>
				<view @click="switchType" class="d-flex align-items-center">
					<view class="left-title">{{BKType == 1 ? "艺考学习" : "兴趣培训"}}</view>
					<view class="swich-bg">{{BKType == 1 ? "切换兴趣版" : "切换艺考版"}}</view>
				</view>
			</template>
			<template v-slot:right>
				<view @click="goRank" class="d-flex align-items-center">
					<view class="right-title">排行榜</view>
					<image class="nav-information" src="/static//exercise/nav_trophy.png"></image>
				</view>
			</template>
		</uni-nav-bar>

		<view class="info-bg">
			<view class="info-round-bg"></view>
			<view class="info-content-bg">
				<view class="info-content">
					<view>今日答题</view>
					<view class="info-content-item-bg">
						<view>试卷
							<text class="info-number fo-14">{{info ? info.today_exam : 0}}</text><text
								class="info-number">套</text>
						</view>
						<view>练习
							<text class="info-number fo-14">{{info ? info.today : 0}}</text><text
								class="info-number">道</text>
						</view>
					</view>
				</view>
				<view class="info-content">
					<view>累计做题</view>
					<view class="info-content-item-bg">
						<view>试卷
							<text class="info-number fo-14">{{info ? info.all_exam : 0}}</text><text
								class="info-number">套</text>
						</view>
						<view>练习
							<text class="info-number fo-14">{{info ? info.all : 0}}</text><text
								class="info-number">道</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<image class="item" v-for="(item) in [0,1,2,3]" @click="clickItem(item)"
			:src="'/static/exercise/exercise' + item +'.png'" />
	</view>
</template>

<script>
	import {
		isLogin
	} from '/common/auth.js'
	export default {
		data() {
			return {
				BKType: uni.getStorageSync('BKType'),
				info: null
			}
		},
		onLoad() {
			this.getIndex()
		},
		onShow() {
			let type = uni.getStorageSync('BKType')
			if (this.BKType != type) {
				this.BKType = type
				this.getIndex()
			}
		},
		methods: {
			switchType() {
				if (this.BKType == 1) {
					this.BKType = 2
				} else {
					this.BKType = 1
				}
				uni.setStorageSync('BKType', this.BKType)
				this.getIndex()
			},
			getIndex() {
				this.getInfo()
			},
			getInfo() {
				let that = this
				this.$request.get('/api/topic/getInfo', {}).then(res => {
					that.info = res.data
				}, function(err) {})
			},
			goRank() {
				uni.navigateTo({
					url: '/pages/exercise/rank/rank'
				})
			},
			clickItem(item) {
				switch (item) {
					case 0: {
						uni.navigateTo({
							url: '/pages/exercise/dailyPractice/dailyPractice'
						})
					}
					break;
					case 1: {
						uni.navigateTo({
							url: '/pages/exercise/simulationTest/simulationTest'
						})
					}
					break;
					case 2: {
						let item = {
							"fromType": 5
						}
						uni.navigateTo({
							url:'/pages/exercise/question/question?data=' + encodeURIComponent(JSON
								.stringify(item))
						})
					}
					break;
					case 3: {
						let item = {
							"fromType": 7
						}
						uni.navigateTo({
							url:'/pages/exercise/question/question?data=' + encodeURIComponent(JSON
								.stringify(item))
						})
					}
					break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>
	.uni-navbar /deep/ .uni-navbar__header {
		padding: 0px 16px;
	}
</style>

<style lang="scss">
	.left-title {
		font-size: 40rpx;
		font-weight: bold;
		margin-right: 5px;
		color: #FFFFFF;
	}

	.swich-bg {
		display: flex;
		justify-content: center;
		color: white;
		font-size: 20rpx;
		width: 120rpx;
		height: 32rpx;
		background-image: url('/static/study/nav_switch_bg.png');
		filter: hue-rotate(88.26deg);
		background-size: 120rpx 32rpx;
	}

	.right-title {
		font-size: 30rpx;
		font-weight: bold;
		margin-right: 5px;
		color: #FFFFFF;
	}

	.nav-information {
		width: 30rpx;
		height: 30rpx;
	}

	.info-bg {
		height: 85px;
		position: relative;

		.info-round-bg {
			position: relative;
			background-color: $uni-bg-color-theme;
			height: 42.5px;
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
		}

		.info-content-bg {
			display: flex;
			position: absolute;
			top: 0px;
			height: 60px;
			width: calc(100vw - 30px);
			margin-left: 15px;
			margin-right: 15px;
			background-color: #FFFFFF;
			border-radius: 10px;
			box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.16);
			padding-top: 10px;
			padding-bottom: 15px;
		}

		.info-content {
			display: flex;
			flex-direction: column;
			width: 50%;
			height: 100%;
			align-items: center;
			justify-content: space-between;
			font-size: 15px;
			font-weight: bold;
		}

		.info-content-item-bg {
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: space-around;
			bottom: 15px;
			color: #777777;
			font-size: 12px;
		}

		.info-number {
			color: #7294CC;
		}
	}

	.item {
		margin-top: 15px;
		padding: 0px 15px;
		width: calc(100vw - 30px);
		height: 85px;
	}
</style>
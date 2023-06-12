<template>
	<view>
		<uni-nav-bar statusBar :border='false' fixed='true' rightWidth='50vw' leftWidth='50vw' height='60px'>
			<template v-slot:left>
				<view @click="switchType" class="d-flex align-items-center">
					<view class="left-title">{{BKType == 1 ? "艺考学习" : "兴趣培训"}}</view>
					<view class="swich-bg">{{BKType == 1 ? "切换兴趣版" : "切换艺考版"}}</view>
				</view>
			</template>
		</uni-nav-bar>

		<fui-tabs :tabs="titles" scroll :center='true' :short='false' fontWeight='bold' selectedFontWeight='bold'
			color="#333333" selected-color="#70CAA3" size="28" selected-size="28" slider-background="#70CAA3"
			bottom="15" scale="1.0" @change="onClickTab">
		</fui-tabs>

		<view class="list-bg">
			<view @click="goDetail(item)" class="list-item" v-for="(item,index) in list">
				<image class="item-image" :src="$request.imageBaseUrl + item.iconUrl"></image>
				<view class="course-info">
					<text>{{item.title}}</text>

					<view class="price-text">¥ {{coursePrice(item)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		isLogin
	} from '/common/auth.js'
	import {
		getUser
	} from '/common/user.js'
	export default {
		data() {
			return {
				BKType: uni.getStorageSync('BKType'),
				types: [],
				currentIndex: 0,
				list: [],
				user:null
			}
		},
		onShow() {
			this.user = getUser()
			this.BKType = uni.getStorageSync('BKType')
			if (this.types.length == 0) {
				this.getTypes()
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
				this.currentIndex = 0
				this.getTypes()
			},
			onClickTab(e) {
				this.currentIndex = e.index
				this.getPaperList()
			},
			getTypes() {
				let that = this
				this.$request.get('/api/index/getType', {}).then(res => {
					that.types = res.data
					that.getPaperList()
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			},
			getPaperList() {
				uni.showLoading({
					title: ''
				});
				let item = this.types[this.currentIndex]
				let that = this
				this.$request.get('/api/paper/paper_list', {
					type: item.id
				}).then(res => {
					uni.hideLoading();
					that.list = res.rows
				}, function(err) {
					uni.hideLoading();
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			},
			goDetail(item){
				if (item.chargeStatus == 1) {
					// 未购买
					uni.navigateTo({
						url: '/pages/buy/buy'
					})
					return
				}
				uni.navigateTo({
					url: '/pages/datum/datumDetail?data=' + encodeURIComponent(JSON
						.stringify(item))
				})
			}
		},
		computed: {
			titles() {
				return this.types.map(item => item.title)
			},
			coursePrice() {
				return function(item) {
					let price = item.price
					if (this.user.isVip == 1) {
						price = item.vipPrice
					}
					return price.toFixed(2)
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
	page {
		background-color: rgb(242, 243, 245);
	}

	.left-title {
		font-size: 40rpx;
		font-weight: bold;
		margin-right: 5px;
	}

	.swich-bg {
		display: flex;
		justify-content: center;
		color: white;
		font-size: 20rpx;
		width: 120rpx;
		height: 32rpx;
		background-image: url('/static/study/nav_switch_bg.png');
		background-size: 120rpx 32rpx;
	}

	.list-bg {
		margin: 0px 15px;
	}

	.list-item {
		display: flex;
		margin: 15px;
		padding: 15px 10px;
		background-color: white;
		border-radius: 10px;
	}

	.item-image {
		width: 155px;
		min-width: 155px;
		max-width: 155px;
		height: 90px;
		border-radius: 10px;
	}

	.course-info {
		margin: 0px 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.price-text {
		color: rgb(246, 111, 80);
		font-size: 15px;
		font-weight: bold;
	}
</style>
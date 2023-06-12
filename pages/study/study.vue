<template>
	<view>
		<uni-nav-bar statusBar :border='false' fixed='true' rightWidth='50vw' leftWidth='50vw' height='60px'>
			<template v-slot:left>
				<view @click="switchType" class="d-flex align-items-center">
					<view class="left-title">{{BKType == 1 ? "艺考学习" : "兴趣培训"}}</view>
					<view class="swich-bg">{{BKType == 1 ? "切换兴趣版" : "切换艺考版"}}</view>
				</view>
			</template>
			<template v-slot:right>
				<view @click="goInformation" class="d-flex align-items-center">
					<view class="right-title">最新资讯</view>
					<image class="nav-information" src="/static/study/nav_information.png"></image>
				</view>
			</template>
		</uni-nav-bar>

		<view class="search-view">
			<view @click="goSearch" class="search-placeholder flex-fill fo-14"><uni-icons type="search" color="#777777"
					style="margin-right: 10px;"></uni-icons>搜索课程</view>
		</view>

		<view class="swiper-bg" v-if="ad.length != 0">
			<uni-swiper-dot :info="ad" :current="current" field="content" :mode="mode" :dots-styles="dotsStyles">
				<swiper v-if="ad.length != 0" class="swiper" circular autoplay='false' interval="3000" @change="change">
					<swiper-item class="swiper-item" v-for="(item,index) in ad">
						<image class="ad" :src="$request.imageBaseUrl + item.imgurl"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>

		<scroll-view scroll-x="true" show-scrollbar='false' v-if="courseCategory.length != 0" class="gold-scroll-view">
			<view class="gold-bg">
				<view class="gold-item" v-for="(item,index) in courseCategory" @click="clickGold(item)">
					<image class="gold-item-image" :src="$request.imageBaseUrl + item.iconPath"></image>
					<text class="gold-item-title">{{item.title}}</text>
				</view>
			</view>
		</scroll-view>

		<view v-if="free.length != 0">
			<view class="section">
				<view class="section-title-bg">
					<view class="section-title-line">免费课程</view>
				</view>
				<view class="more-course" @click="goFreeCourseList">
					<image class="more-course-icon" src="/static/study/more_course.png"></image>
					<text class="more-course-title">更多好课</text>
					<van-icon name="arrow" color='#969696' size='12' />
				</view>
			</view>

			<scroll-view scroll-x="true" show-scrollbar='false' class="free-scroll-view">
				<view class="free-bg">
					<view class="free-item" v-for="(item,index) in free" @click="goCourseDetail(item)">
						<image class="free-item-image" :src="$request.imageBaseUrl + item.iconPath"></image>
						<text class="free-item-title">{{item.title}}</text>
					</view>
				</view>
			</scroll-view>
		</view>

		<view v-if="pay.length != 0">
			<view class="section">
				<view class="section-title-bg">
					<view class="section-title-line">付费课程</view>
				</view>
				<view class="more-course" @click="goPayCourseList">
					<image class="more-course-icon" src="/static/study/more_course.png"></image>
					<text class="more-course-title">更多好课</text>
					<van-icon name="arrow" color='#969696' size='12' />
				</view>
			</view>

			<view class="pay-bg">
				<view class="pay-tip-bg">
					<text class="pay-tip">音你而来<text class="fo-14">\n乐理基础精讲课程</text></text>
					<view class="pay-score">9.0分</view>
				</view>

				<scroll-view scroll-x="true" show-scrollbar='false' class="pay-scroll-view">
					<view class="pay-scroll-bg">
						<view class="pay-item" v-for="(item,index) in pay" @click="goCourseDetail(item)">
							<image class="pay-item-image" :src="$request.imageBaseUrl + item.iconPath"></image>
							<text class="pay-item-title">{{item.title}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<view v-if="hot.length != 0">
			<view class="section">
				<view class="section-title-bg">
					<view class="section-title-line">热门课程</view>
				</view>
				<view class="more-course" @click="goHotCourseList">
					<text class="more-course-title">更多课程</text>
					<van-icon name="arrow" color='#969696' size='12' />
				</view>
			</view>

			<view class="hot-list">
				<view class="hot-item" v-for="(item,index) in hot" @click="goCourseDetail(item)">
					<image class="hot-item-image" :src="$request.imageBaseUrl + item.iconPath"></image>
					<view class="hot-info">
						<view>
							<text class="pay-item-title">{{item.title}}</text>
							<view class="star-bg">
								<uni-rate :size="10" :readonly="true" :max="5" :value="item.star" />
								<text class="star-text">{{item.star}}分</text>
							</view>
						</view>
						<view class="price-bg">
							<view class="price-text">¥ {{hotPrice(item)}}</view>
							<view class="vip-price-text" v-if="!user || user.isVip == 0">
								{{item.vipPrice == 0 ? "VIP免费" : "VIP: ￥"  + item.vipPrice}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUser
	} from '/common/user.js'
	import {
		isLogin
	} from '/common/auth.js'
	import {
		loadKeyboardData
	} from '/common/keyboardDataManager.js'
	export default {
		data() {
			return {
				BKType: uni.getStorageSync('BKType'),
				data: {},
				ad: [],
				courseCategory: [],
				free: [],
				pay: [],
				hot: [],
				current: 0,
				mode: 'round',
				user: null,
				dotsStyles: {
					border: '1px #C0C0C0 solid',
					backgroundColor: '#C0C0C0',
					selectedBackgroundColor: '#5F7FC0',
					selectedBorder: '1px #5F7FC0 solid',
					width: 6,
					height: 2,
					bottom: 0
				}
			}
		},
		onLoad() {
			this.getIndex()
		},
		onShow() {
			this.user = getUser()
			let type = uni.getStorageSync('BKType')
			if (this.BKType != type) {
				this.BKType = type
				this.getIndex()
			}
			if (isLogin()){
				loadKeyboardData()
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
			goInformation() {
				console.log('跳转最新资讯')
				uni.navigateTo({
					url: '/pages/study/infomation/infomation'
				})
			},
			goSearch() {
				if (!isLogin()) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return
				}
				uni.navigateTo({
					url: '/pages/study/search/search'
				})
			},
			change(e) {
				this.current = e.detail.current;
			},
			clickGold(e) {
				this.goCourseList({
					'typeId': e.id
				})
			},
			getIndex() {
				let that = this
				this.$request.get('/api/index/index', null).then(res => {
					that.data = res.data
					that.ad = res.data.ad
					that.courseCategory = res.data.courseCategory
					that.free = res.data.free
					that.pay = res.data.pay
					that.hot = res.data.hot
				}, function(err) {
					console.log(err)
				})
			},
			goFreeCourseList() {
				this.goCourseList({
					'isPay': 0
				})
			},
			goPayCourseList() {
				this.goCourseList({
					'isPay': 1
				})
			},
			goHotCourseList() {
				this.goCourseList({
					'isHot': 1
				})
			},
			goCourseList(data) {
				uni.navigateTo({
					url: '/pages/study/courseList/courseList?data=' + encodeURIComponent(JSON.stringify(data))
				})
			},
			goCourseDetail(item) {
				if (!isLogin()) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return
				}
				uni.navigateTo({
					url: '/pages/study/courseDetail/courseDetail?data=' + encodeURIComponent(JSON.stringify(item))
				})
			}
		},
		computed: {
			hotPrice() {
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

	.right-title {
		font-size: 30rpx;
		font-weight: bold;
		margin-right: 5px;
	}

	.nav-information {
		width: 30rpx;
		height: 30rpx;
	}

	.search-view {
		display: flex;
		align-items: center;
		flex: 1;
		height: 36px;
		border-radius: 20px;
		flex-wrap: nowrap;
		line-height: 36px;
		margin: 0px 16px;
	}

	.search-placeholder {
		height: 36px;
		background: #F5F5F9;
		border-radius: 20px 20px 20px 20px;
		opacity: 1;
		display: flex;
		align-items: center;
		padding: 0px 20px;
		color: $uni-text-color-placeholder;
	}

	.swiper-bg {
		margin: 15px 15px 0px 15px;
	}

	.swiper {
		height: 300rpx;
		margin-bottom: 15px;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.ad {
		height: 300rpx;
		width: calc(100vw - 30px);
		border-radius: 10px;
	}

	.gold-scroll-view {
		width: 100%;
		height: 90px;
		margin-top: 10px;
	}

	//第一种
	scroll-view ::-webkit-scrollbar {
		display: none !important;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.gold-bg {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: max-content;
		height: 100%;
	}

	.gold-item {
		width: 120rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 0px 10px;
	}

	.gold-item-image {
		width: 50px;
		height: 50px;
	}

	.gold-item-title {
		color: #333333;
		font-size: 12px;
		font-weight: bold;
		margin-top: 10px;
	}

	.free-scroll-view {
		width: calc(100vw - 15px);
		height: 200px;
		margin-top: 10px;
		margin-left: 15px;
	}

	.free-bg {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: max-content;
		height: 100%;
	}

	.free-item {
		width: 110px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-right: 15px;
		padding-right: 15px;
	}

	.free-item-image {
		width: 125px;
		height: 170px;
		box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.16);
		border-radius: 10px;
	}

	.free-item-title {
		color: #333333;
		font-size: 12px;
		font-weight: bold;
		margin-top: 10px;
		max-width: 110px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.pay-scroll-view {
		width: calc(100vw - 60px);
		height: 180px;
		margin-top: 25px;
		margin-left: 15px;
	}

	.pay-scroll-bg {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: max-content;
		height: 100%;
	}

	.pay-item {
		width: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-right: 15px;
	}

	.pay-item-image {
		width: 100px;
		height: 140px;
		box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.16);
		border-radius: 10px;
	}

	.pay-item-title {
		color: #333333;
		font-size: 12px;
		font-weight: bold;
		margin-top: 10px;
	}

	.section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 15px;
	}

	.section-title-bg {
		border-bottom: 2px solid $uni-bg-color-theme;
		position: relative;
		bottom: 3px;
	}

	.section-title-line {
		font-weight: bold;
		font-size: 16px;
		position: relative;
		bottom: -5px;
	}

	.more-course {
		display: flex;
		align-items: center;
	}

	.more-course-icon {
		width: 13px;
		height: 14px;
		margin-right: 5px;
	}

	.more-course-title {
		color: #969696;
		font-size: 12px;
	}

	.pay-bg {
		background-image: url('/static/study/hot_bg.png');
		background-repeat: no-repeat;
		background-size: calc(100vw - 30px) 192px;
		height: 270px;
		margin: 0px 15px 0px 15px;

		.pay-tip-bg {
			display: flex;
			justify-content: space-between;
			margin: 15px;
			padding-top: 15px;
		}

		.pay-tip {
			color: rgb(51, 147, 99);
			font-size: 18px;
			font-weight: bold;
		}

		.pay-score {
			background-color: rgb(85, 194, 148);
			height: 25px;
			width: 53px;
			color: #ffffff;
			font-size: 15px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 12.5px;
		}
	}

	.hot-list {
		padding: 0px 15px;

		.hot-item {
			display: flex;
			width: 100%;
			margin: 15px 0px;
		}

		.hot-item-image {
			width: 155px;
			min-width: 155px;
			max-width: 155px;
			height: 90px;
		}

		.hot-info {
			margin: 0px 5px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.star-bg {
			display: flex;
			font-size: 10px;
			font-weight: 400;
			color: rgb(68, 64, 52);
			align-items: center;
			margin-top: 5px;
		}

		.star-text {
			margin-left: 5px;
		}

		.price-bg {
			display: flex;
		}

		.price-text {
			color: rgb(246, 111, 80);
			font-size: 15px;
			font-weight: bold;
		}

		.vip-price-text {
			color: rgb(91, 191, 148);
			font-size: 10px;
			font-weight: bold;
			border-radius: 3px;
			border: 1px solid rgb(91, 191, 148);
			margin-left: 5px;
			padding: 0px 3.5px;
			height: 16px;
		}
	}
</style>
<template>
	<view>
		<uni-nav-bar statusBar :fixed="true" :border='false' left-width="50px" right-width='50px'>
			<template v-slot:left>
				<van-icon @click='onClickLeft' name="arrow-left" size="22" color='#333' />
			</template>
			<view class="title">
				{{title}}
			</view>
			<template v-slot:right>
				<text>失效课程</text>
			</template>
		</uni-nav-bar>
		
		<view class="course-list">
			<view class="course-item" v-for="(item,index) in course" @click="goCourseDetail(item)">
				<image class="course-item-image" :src="$request.imageBaseUrl + item.iconPath"></image>
				<view class="course-info">
					<view>
						<text class="pay-item-title">{{item.title}}</text>
						<view class="star-bg">
							<uni-rate :size="10" :readonly="true" :max="5" :value="item.star" />
							<text class="star-text">{{item.star}}分</text>
						</view>
					</view>
					<view class="price-bg">
						<view class="price-text">¥ {{coursePrice(item)}}</view>
						<view class="vip-price-text" v-if="!user || user.isVip == 0">
							{{item.vipPrice == 0 ? "VIP免费" : "VIP: ￥"  + item.vipPrice}}
						</view>
					</view>
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
				data: null,
				user:null,
				course:[],
				title:"课程列表"
			};
		},
		onLoad(option) {
			this.data = JSON.parse(decodeURIComponent(option.data));
			this.getCourseList()
		},
		onShow() {
			this.user = getUser()
		},
		methods: {
			onClickLeft() {
				uni.navigateBack()
			},
			getCourseList(){
				let that = this
				let params = {}
				let keyword = this.data.keyword
				if (keyword != undefined){
					params['keyword'] = keyword
				}
				let isPay = this.data.isPay
				if (isPay != undefined) {
					params['isPay'] = isPay
				}
				let isHot = this.data.isHot
				if (isHot != undefined) {
					params['isHot'] = isHot
				}
				let typeId = this.data.typeId
				if (typeId != undefined) {
					params['typeId'] = typeId
				}
				this.$request.get('/api/course/course_list_new', params).then(res => {
					that.course = res.data.course
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
					})
				})
			},
			goCourseDetail(item){
				if (!isLogin()) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return
				}
				uni.navigateTo({
					url:'/pages/study/courseDetail/courseDetail?data=' + encodeURIComponent(JSON.stringify(item))
				})
			}
		},
		computed: {
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

<style lang="scss">
	.course-list {
		padding: 0px 15px;

		.course-item {
			display: flex;
			width: 100%;
			margin: 15px 0px;
		}

		.course-item-image {
			width: 155px;
			min-width: 155px;
			max-width: 155px;
			height: 90px;
		}

		.course-info {
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
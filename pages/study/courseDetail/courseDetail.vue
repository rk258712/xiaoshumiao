<template>
	<view>
		<uni-nav-bar statusBar :fixed="true" :border='false' left-width="22px" right-width="22px">
			<template v-slot:left>
				<van-icon @click='onClickLeft' name="arrow-left" size="22" color='#333' />
			</template>
			<view class="title">课程详情</view>
			<template v-slot:right>
				<van-icon v-if="isCollect" @click='unStar' name="star" size="20" color='#FECB65' />
				<van-icon v-else @click='star' name="star-o" size="20" color='#333' />
			</template>
		</uni-nav-bar>

		<template v-if="courseDetail != null">
			<view class="head-bg">
				<image class="header-image" :src="$request.imageBaseUrl + courseInfo.iconPath"></image>
				<view class="header-info-bg">
					<view class="header-info-left">
						<view class="header-title-bg">
							<view class="coutse-category">{{courseInfo.typeName}}</view>
							<view class="course-title">{{courseInfo.title}}中国音乐学院基本乐科1级</view>
						</view>
						<text class="num-people">{{courseInfo.numPeople}}人已学习</text>
					</view>
					<view class="star-bg">
						<text class="p-b-xs">{{courseInfo.star.toFixed(1)}}<text class="star-text">分</text></text>
						<uni-rate :size="10" :readonly="true" :max="5" :value="courseInfo.star" />
					</view>
				</view>
			</view>

			<view class="course-bg">
				<view class="course-content">
					<view class="switch-title">
						<view @click="clickSwitch(0)" class="section-title-bg" :class="{'switch-select':selectType==0}">
							<view class="section-title-line">课程介绍</view>
						</view>
						<view @click="clickSwitch(1)" class="section-title-bg" :class="{'switch-select':selectType==1}">
							<view class="section-title-line">课程目标</view>
						</view>
						<view @click="clickSwitch(2)" class="section-title-bg" :class="{'switch-select':selectType==2}">
							<view class="section-title-line">课程评价</view>
						</view>
					</view>

					<van-divider style="margin: 0px;" />

					<text class="brief" v-if="selectType == 0" v-html="brief"></text>

					<view v-else-if="selectType == 1" class="course-catalog" v-for="(item,index) in courseCatalogList">
						<view class="d-flex">
							<view class="course-section">{{item.title}}</view>
						</view>
						<view @click="clickCourseItem(subItem)" class="course-item"
							v-for="(subItem,index) in item.children">
							<view :class="{'newd-charge':subItem.chargeStatus == 1}">{{subItem.title}}</view>
							<view class="course-item-icon">
								<uni-icons v-if="subItem.chargeStatus != 1" type="forward" size="18"></uni-icons>
								<image class="lock" v-else src="/static/study/course_detail_lock.png"></image>
							</view>
						</view>
					</view>

					<uni-list v-else-if="selectType == 2">
						<uni-list-item v-for="(item,index) in courseComment">
							<template v-slot:body>
								<view class="comment-body">
									<view class="user-info">
										<image class="user-header" :src="$request.imageBaseUrl + item.qycUsermember.headIconPath"></image>
										<view class="m-l-md">
											<view class="user-nick">
												{{item.qycUsermember.userName}}
											</view>
											<view class="creattime">{{item.createTime}}</view>
										</view>
									</view>
									<view class="comment-content">{{item.content}}</view>
								</view>
							</template>
						</uni-list-item>
					</uni-list>

				</view>
			</view>

			<view class="bottom-bg">
				<view class="space"></view>
				<view class="bottom-content">
					<view class="price-bg">
						<template v-if="user != null && courseInfo != null  && courseInfo.isPay == 1">
							<view>价格：</view>
							<view class="price-text">¥ {{coursePrice(courseInfo)}}</view>
							<view class="vip-price-text" v-if="!user || user.isVip == 0">
								{{courseInfo.vipPrice == 0 ? "VIP免费" : "VIP: ￥"  + courseInfo.vipPrice}}
							</view>
						</template>
					</view>
					<view @click="joinStudy" class="bottom-btn" v-if="courseInfo.isPay != 1">加入学习</view>
					<view @click="readComment" class="bottom-btn" v-else-if="courseInfo.isComment == 1">查看评价</view>
					<view @click="writeComment" class="bottom-btn" v-else>写评价,得金币</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courseData: null,
				courseDetail: null,
				courseComment: [],
				courseInfo: null,
				courseCatalogList: [],
				user: null,
				isCollect: false,
				selectType: 0
			};
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			console.log(data)
			this.courseData = data
		},
		onShow() {
			this.getCourseDetail()
		},
		methods: {
			onClickLeft() {
				uni.navigateBack()
			},
			getCourseDetail() {
				let that = this
				this.$request.get('/api/course/course_details_new', {
					id: this.courseData.id
				}).then(res => {
					that.courseDetail = res.data
					that.courseComment = res.data.courseComment
					that.courseInfo = res.data.courseInfo
					that.user = res.data.userinfo
					that.courseCatalogList = that.terrList(res.data.courseInfo.qycCourseCatalogList)
					that.isCollect = res.data.userinfo.isCollection == true
				}, function(err) {})
			},
			star() {
				let that = this
				this.$request.post('/api/course/add_collection', {
					courseId: this.courseData.id
				}).then(res => {
					uni.showToast({
						title: "收藏成功",
						duration: 2000,
						icon: 'none'
					})
					that.isCollect = true
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
					})
				})
			},
			unStar() {
				let that = this
				this.$request.post('/api/course/del_collection', {
					courseId: this.courseData.id
				}).then(res => {
					uni.showToast({
						title: "取消成功",
						duration: 2000,
						icon: 'none'
					})
					that.isCollect = false
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
					})
				})
			},
			clickSwitch(e) {
				this.selectType = e
			},
			clickCourseItem(item) {
				if (item.chargeStatus == 1) {
					// 未购买
					uni.navigateTo({
						url: '/pages/buy/buy'
					})
					return
				}
				uni.navigateTo({
					url: '/pages/study/courseCatalogDetail/courseCatalogDetail?data=' + encodeURIComponent(JSON
						.stringify(item))
				})
			},
			joinStudy(){
				
			},
			writeComment(){
				let item = this.courseData
				uni.navigateTo({
					url:'/pages/study/courseDetail/courseComment?data=' + encodeURIComponent(JSON
						.stringify(item))
				})
			},
			readComment(){
				let item = this.courseData
				uni.navigateTo({
					url:'/pages/study/courseDetail/courseReadComment?data=' + encodeURIComponent(JSON
						.stringify(item))
				})
			},
			terrList(list) {
				const treeList = []
				// 所有项都使用对象存储起来
				const map = {}
				// 建立一个映射关系：通过id快速找到对应的元素
				list.forEach(item => {
					if (!item.children) {
						item.children = []
					}
					map[item.id] = item
				})
				list.forEach(item => {
					// 对于每一个元素来说，先找它的上级
					//    如果能找到，说明它有上级，则要把它添加到上级的children中去
					//    如果找不到，说明它没有上级，直接添加到 treeList
					const parent = map[item.pid]
					// 如果存在则表示item不是最顶层的数据
					if (parent) {
						parent.children.push(item)
					} else {
						// 如果不存在 则是顶层数据
						treeList.push(item)
					}
				})
				// 返回出去
				return treeList
			}
		},
		computed: {
			brief() {
				return this.courseInfo.brief.replaceAll("img", 'img style="width:100%;height:auto"')
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

<style lang="scss">
	page {
		background-color: rgb(242, 243, 245);
	}

	.head-bg {
		height: 305px;
		position: relative;

		.header-image {
			position: relative;
			height: 250px;
			width: 100%;
		}

		.header-info-bg {
			display: flex;
			position: absolute;
			bottom: 0px;
			width: calc(100vw - 60px);
			margin-left: 15px;
			margin-right: 15px;
			border-radius: 10px;
			background-color: white;
			box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.16);
			padding: 15px;
			justify-content: space-between;
		}

		.header-title-bg {
			display: flex;
			align-items: flex-start;
			font-size: 16px;
			font-weight: 500;
		}

		.coutse-category {
			color: rgb(112, 202, 163);
			border: 1px solid rgb(112, 202, 163);
			padding: 2.5px 5px;
			flex-shrink: 0;
			border-radius: 3px;
			font-size: 10px;
		}

		.course-title {
			margin-left: 5px;
			flex-shrink: 1
		}

		.star-bg {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 18px;
			font-weight: bold;
			color: rgb(112, 202, 163);
		}

		.star-text {
			font-size: 9px;
			color: #333333;
			font-weight: 400;
		}

		.header-info-left {
			display: flex;
			flex-direction: column;
		}

		.num-people {
			color: rgb(153, 153, 153);
			font-size: 12px;
			margin-top: 15px;
		}
	}

	.course-bg {
		display: flex;
		flex-direction: column;
		margin: 10px 15px 0px 15px;
		padding-bottom: calc(env(safe-area-inset-bottom) + 160rpx + 15px);

		.course-content {
			background-color: white;
			border-radius: 10px;
			min-height: 100vh;
		}
	}

	.bottom-bg {
		display: flex;
		position: fixed;
		flex-direction: column;
		height: calc(env(safe-area-inset-bottom) + 160rpx + 15px);
		padding-bottom: env(safe-area-inset-bottom);
		width: 100%;
		background-color: #fff;
		bottom: 0;

		.space {
			width: 100%;
			height: 15px;
			background-color: rgb(242, 243, 245);
		}

		.bottom-content {
			display: flex;
			padding: 0px 15px;
			justify-content: space-between;
			align-items: center;
			height: 160rpx;
		}

		.price-bg {
			display: flex;
			align-items: center;
			font-size: 16px;
			font-weight: bold;
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

		.bottom-btn {
			background-color: $uni-bg-color-theme;
			padding: 15px 20px;
			font-size: 15px;
			color: #fff;
			border-radius: 5px;
		}
	}

	.switch-title {
		width: 100%;
		height: 47px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.section-title-bg {
		border-bottom: 2px solid #fff;
		position: relative;
		bottom: 3px;
		color: rgb(153, 153, 153);
		font-size: 14px;
	}

	.switch-select {
		border-bottom: 2px solid $uni-bg-color-theme;
		color: #333333;
	}

	.section-title-line {
		font-weight: bold;
		font-size: 16px;
		position: relative;
		bottom: -5px;
	}

	.brief {
		width: 100%;
	}

	.course-catalog {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.course-section {
		font-size: 12px;
		color: white;
		background-color: rgb(114, 148, 204);
		height: 20px;
		padding: 0px 13px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		margin: 10px 13px;
	}

	.course-item {
		font-size: 12px;
		height: 20px;
		padding: 0px 13px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		height: 48px;
		justify-content: space-between;
	}

	.newd-charge {
		color: rgb(153, 153, 153);
	}

	.course-item-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
	}

	.lock {
		width: 12px;
		height: 15px;
	}

	.comment-body {
		display: flex;
		flex-direction: column;

		.user-info {
			display: flex;
		}

		.user-header {
			width: 50px;
			height: 50px;
			border-radius: 25px;
		}

		.user-nick {
			font-size: 14px;
			font-weight: bold;
			color: #333333;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			width: calc(100vw - 115px)
		}

		.creattime {
			font-size: 11px;
			color: rgb(153, 153, 153);
			margin-top: 5px;
		}

		.comment-content {
			margin-left: 65px;
		}
	}
</style>
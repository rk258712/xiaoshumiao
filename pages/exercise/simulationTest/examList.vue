<template>
	<view style="padding-top: 9px;">
		<view @click="goExamDetail(item)" class="list-item" v-for="(item,index) in list" :key="index">
			<view class="p-x-md p-y-md d-flex justify-between">
				<view>
					<text class="title">{{item.name}}</text>
					<text v-if="item.lv == 1" class="lv">简单</text>
					<text v-else-if="item.lv == 2" class="lv lv2">中等</text>
					<text v-else-if="item.lv == 3" class="lv lv3">较难</text>
					<text v-else-if="item.lv == 4" class="lv lv4">困难</text>
				</view>
				<view class="d-flex flex-direction-column justify-content-end">
					<image style="width: 23px;height: 27px;" src="/static/exercise/exam-list-icon.png"></image>
				</view>
			</view>
			<van-divider style="margin: 0px;" />
			<view class="d-flex justify-between p-x-md p-y-md">
				<view @click.stop='favorSubject(item,index)' class="d-flex align-items-center">
					<van-icon v-if="item.isCollection == 1" name="star" size="20" color='#FECB65' />
					<van-icon v-else name="star-o" size="20" color='#A9A9A9' />
					<view class="m-l-ms fo-14" style="color: #A9A9A9;">{{item.isCollection == true ? '已收藏' : '收藏'}}
					</view>
				</view>
				<view class="price">¥{{((user != null && user.isVip == 1) ? item.vipPrice : item.price).toFixed(2)}}
				</view>
			</view>
		</view>
		<view v-if="isLastPage" class="refresh-footer">没有更多了</view>
	</view>
</template>

<script>
	import {
		getUser
	} from '/common/user.js'
	export default {
		data() {
			return {
				typeItem: null,
				currentPage: 1,
				isLastPage: false,
				list: [],
				user: null
			};
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			console.log(data)
			this.typeItem = data
		},
		onShow() {
			this.user = getUser()
			setTimeout(() => {
				uni.startPullDownRefresh();
			}, 100);
		},
		onPullDownRefresh() {
			this.getListData()
		},
		onReachBottom() {
			if (this.isLastPage) {
				return
			}
			this.getListData(this.currentPage + 1)
		},
		methods: {
			getListData(page = 1) {
				let that = this
				this.$request.get('/api/exam/exam_list', {
					typeId: that.typeItem.id,
					pageNum: page
				}).then(res => {
					uni.stopPullDownRefresh()
					that.currentPage = page
					if (page == 1) {
						that.list = res.rows
						console.log(res.rows)
					} else {
						let list = res.rows
						that.list.push(...list)
					}
					that.isLastPage = res.total == that.list.length
					console.log(that.list)
				}, function(err) {
					uni.stopPullDownRefresh()
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			},
			favorSubject(item, index) {
				if (item.isCollection) {

					let that = this
					this.$request.post('/api/topic/del_collection', {
						targetId: item.id,
						type: 3
					}).then(res => {
						that.list[index].isCollection = false;
						uni.showToast({
							title: '取消成功',
							duration: 2000,
							icon: 'none'
						})
					}, function(err) {
						uni.showToast({
							title: err.msg,
							duration: 2000,
							icon: 'none'
						})
					})

				} else {
					let that = this
					this.$request.post('/api/topic/add_collection', {
						targetId: item.id,
						type: 3
					}).then(res => {
						that.list[index].isCollection = true;
						uni.showToast({
							title: '收藏成功',
							duration: 2000,
							icon: 'none'
						})
					}, function(err) {
						uni.showToast({
							title: err.msg,
							duration: 2000,
							icon: 'none'
						})
					})
				}
			},
			goExamDetail(item) {
				let price = ((this.user != null && this.user.isVip == 1) ? item.vipPrice : item.price).toFixed(2)
				if (item.isBuy == false && price != 0) {
					// 未购买
					uni.navigateTo({
						url: '/pages/buy/buy'
					})
					return
				}
				let data = {
					"exam": item,
					"fromType": 6
				}
				this.$request.get('/api/exam/viewExam', {
					examId: item.id
				}).then(res => {
					uni.navigateTo({
						url: '/pages/exercise/question/question?data=' + encodeURIComponent(JSON
							.stringify(data))
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

	.list-item {
		background-color: white;
		margin: 6px 15px;
		border-radius: 14px;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
	}

	.title {
		font-size: 16px;
		font-weight: bold;
		max-width: calc(100vw - 90px);
		margin-bottom: 10px;
	}

	.price {
		font-size: 16px;
		color: rgb(246, 111, 80);
	}

	.lv {
		font-size: 10px;
		background-color: rgb(91, 191, 148);
		border-radius: 4px;
		color: white;
		padding: 2.5px;
	}

	.lv2 {
		background-color: rgb(255, 212, 120);
	}

	.lv3 {
		background-color: rgb(246, 111, 80);
	}

	.lv4 {
		background-color: rgb(246, 111, 80);
	}
</style>
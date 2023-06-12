<template>
	<view>
		<uni-nav-bar statusBar :fixed="true" :border='false' left-width="22px" right-width="0px">
			<template v-slot:left>
				<van-icon @click='onClickLeft' name="arrow-left" size="22" color='#333' />
			</template>
			<view style="display: flex;align-items: center;flex-grow: 1;">
				<van-search v-model="searchValue" shape="round" background="#ffffff" placeholder="请输入要查找的内容"
					style="flex-grow: 1;" :clearable="false" @search='search'>
				</van-search>
			</view>
		</uni-nav-bar>

		<view class="p-x-md p-y-md">
			<view class="d-flex justify-between p-y-md">
				<text class="section-title">最近搜索</text>
				<text v-if="list.length != 0" class="section-title-right" @click="clearHistory">清空</text>
			</view>
			<view class="d-flex flex-wrap fo-13">
				<view v-for="(item,index) in list" :key="index" class="item" @click="goResult(item)">{{item}}
				</view>
			</view>

			<view class="d-flex justify-between p-y-md">
				<text class="section-title">热门搜索</text>
			</view>
			<view class="d-flex flex-wrap fo-13">
				<view v-for="(item,index) in searchHot" :key="index" class="item" @click="goResult(item.title)">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '',
				searchHot: [],
				list: []
			};
		},
		onLoad() {
			this.getSearchIndex()
			let searchHot = uni.getStorageSync('searchHot')
			if (searchHot) {
				this.searchHot = searchHot
			}
			let searchHistroyJson = uni.getStorageSync('searchHistroy')
			if (searchHistroyJson) {
				this.list = JSON.parse(searchHistroyJson)
			}
		},
		methods: {
			onClickLeft() {
				uni.navigateBack()
			},
			getSearchIndex() {
				let that = this
				this.$request.get('/api/search/index', {}).then(res => {
					that.searchHot = res.rows
					uni.setStorageSync("searchHot", res.rows)
				}, function(err) {})
			},
			goResult(keyword) {
				let data = {
					'keyword': keyword
				}
				uni.navigateTo({
					url: '/pages/study/courseList/courseList?data=' + encodeURIComponent(JSON.stringify(data))
				})
				this.addHistory(keyword)
			},
			search() {
				this.goResult(this.searchValue)
			},
			addHistory(searchValue) {
				if (!searchValue) {
					return
				}
				//查找searchValue是否在历史记录的list里
				//获取searchValue在历史记录list里的index
				const findItem = this.list.findIndex(item => item == searchValue)
				//若searchValue在历史记录list里，且searchValue不在list的第一位
				console.log(findItem)
				console.log('======')
				if (findItem !== -1) {
					//删除历史记录list里的曾经的同值searchValue
					this.list.splice(findItem, 1)
					//unshift在list开头插入searchValue
					this.list.unshift(searchValue)
				} else {
					this.list.unshift(searchValue)
				}

				//将更新后的list存储在本地缓存中指定的'searchHistory'中
				uni.setStorageSync('searchHistroy', JSON.stringify(this.list))
			},
			clearHistory() {
				uni.removeStorageSync('searchHistory');
				this.list = []
				uni.showToast({
					title: "操作成功",
					duration: 2000,
					icon: 'none',
				})
			}
		}
	}
</script>

<style lang="scss">
	.section-title {
		font-size: 15px;
		font-weight: bold;
	}

	.section-title-right {
		font-size: 15px;
		color: rgb(102, 102, 102);
	}

	.item {
		margin-right: 5px;
		margin-bottom: 5px;
		padding: 0px 10px;
		max-width: calc(100vw - 30px);
		text-overflow: clip;
		overflow: hidden;
		height: 30px;
		font-size: 13px;
		border-radius: 3px;
		background-color: rgb(245, 245, 245);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
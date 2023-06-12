<template>
	<view class="page">
		<web-view style="position: absolute; display: block; border: 0px; top: 44px; left: 0px; width: 414px; "
			:src="src" v-if="src != null" :webview-styles="webviewStyles"></web-view>

		<view v-if="findItem == null" id="bottom" class="commit-bg">
			<view class="commit" @click="downloadFile">下载资料</view>
		</view>
	</view>
</template>

<script>
	import {
		showLoadingToast
	} from 'vant';
	export default {
		data() {
			return {
				datum: null,
				webviewStyles: {
					height: '0'
				},
				src: null,
				caches: null,
				findItem: null,
				downloadIng: false
			};
		},
		onReady() {
			if (this.findItem == null) {
				let systemInfo = uni.getSystemInfoSync();
				let navBarHeight = systemInfo.statusBarHeight + systemInfo.windowTop;
				let height = uni.getSystemInfoSync().windowHeight - navBarHeight;
				uni.createSelectorQuery().select("#bottom").fields({
					size: true,
					scrollOffset: true
				}, (data) => {
					let bottomHeight = data.height
					let tempHeight = height - bottomHeight
					this.webviewStyles.height = tempHeight + 'px';
				}).exec();
			}
			setTimeout(() => {
				uni.setNavigationBarTitle({
					title: '资料详情'
				})
			}, 2000)
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			console.log(data)
			this.datum = data
			this.caches = uni.getStorageSync('datum-list') || []
			this.findItem = this.caches.find(item => item.id === this.datum.id)
			console.log('------findItem')
			console.log(this.findItem)
			// this.src = this.findItem == undefined ? (this.$request.imageBaseUrl + this.datum.pdfUrl) : this.findItem
			// 	.filePath
			this.src = this.$request.imageBaseUrl + this.datum.pdfUrl
			console.log(this.src)
		},
		methods: {
			save() {
				const findItem = this.caches.findIndex(item => item.id == this.datum.id)
				console.log(findItem)
				console.log('======')
				if (findItem !== -1) {
					//删除caches里的曾经的
					this.caches.splice(findItem, 1)
					//unshift在caches开头插入最新的
					this.caches.unshift(this.datum)
				} else {
					this.caches.unshift(this.datum)
				}
				uni.setStorageSync('datum-list', this.caches);
			},
			downloadFile() {
				let that = this
				let downloadTask = uni.downloadFile({
					url: this.src,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: function(res) {
									that.datum.filePath = res.savedFilePath;
									that.save()
									uni.showToast({
										title: '下载成功',
										duration: 2000,
										icon: 'none'
									})
								}
							});
						} else {
							uni.showToast({
								title: res.msg,
								duration: 2000,
								icon: 'none'
							})
						}
					}
				});
				downloadTask.onProgressUpdate((res) => {
					console.log('下载进度' + res.progress);
					console.log('已经下载的数据长度' + res.totalBytesWritten);
					console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
				});
			}
		}
	}
</script>

<style lang="scss">
	.page {
		display: flex;
	}

	.commit-bg {
		width: calc(100vw - 30px);
		height: 74px;
		position: fixed;
		display: flex;
		align-items: center;
		bottom: 0;
		margin-left: 15px;
		margin-right: 15px;
		color: white;

		.commit {
			background-color: $uni-bg-color-theme;
			height: 44px;
			width: calc(100vw - 30px);
			display: flex;
			justify-content: center;
			border-radius: 10px;
			align-items: center;
		}
	}
</style>
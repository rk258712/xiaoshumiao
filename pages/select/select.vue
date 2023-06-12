<template>
	<view>
		
		<view class="title">选择适合你的学习板块</view>
		
		<view class="item">
			<image @click="selectType(1)" class="item-image d-flex flex-fill" src="/static/select/select_type_1.png"></image>
			<image class="select-dot" v-if="currentSelect == 1" src="/static/select/select_dot.png"></image>
		</view>
		
		<view class="item">
			<image @click="selectType(2)" class="item-image d-flex flex-fill" src="/static/select/select_type_2.png"></image>
			<image class="select-dot" v-if="currentSelect == 2" src="/static/select/select_dot.png"></image>
		</view>
		
		<view @click="enter" class="enter">进入</view>
	</view>

	<uni-popup ref="popup" type="center">
		<view class="popup-content">
			<view class="popup-title">欢迎下载并使用</view>
			<view class="popup-des">
				在使用前，请您务必审慎阅读、充分理解“用户协议”和“隐私政策”各条款，包括但不限于：为了向您提供内容分析等服务，我们需要收集您的设备信息、操作日志等个人信息。您可以在“手机设置”中查看、变更、删除个人信息并管理您的授权。您可仔细阅读
				<text @click="userAgreement" class="agreement">《用户协议》</text>和<text @click="privacyAgreement"
					class="agreement">《隐私政策》</text>了解详细信息。
			</view>
			<view class="popup-des">如您同意，请点击“同意”开始接受我们的服务。</view>
			<view class="popup-bt-bg">
				<view @click="cancel" class="popup-cancel">取消</view>
				<view @click="closePopup" class="popup-confim">确定</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
				currentSelect:1
			}
		},
		onReady() {
			let isAgree = uni.getStorageSync('XieYi')
			if (!isAgree) {
				this.$refs.popup.open('center')
			}
		},
		methods: {
			userAgreement() {
				let data = {
					'typeStr': '1',
					"title": "用户协议"
				}
				uni.navigateTo({
					url: '/pages/agreement/agreement?data=' + encodeURIComponent(JSON.stringify(data))
				})
			},
			privacyAgreement() {
				let data = {
					'typeStr': '2',
					"title": "隐私协议"
				}
				uni.navigateTo({
					url: '/pages/agreement/agreement?data=' + encodeURIComponent(JSON.stringify(data))
				})
			},
			cancel() {
				switch (uni.getSystemInfoSync().platform) {
					case 'android':
						plus.runtime.quit();
						break;
					case 'ios':
						plus.ios.import('UIApplication').sharedApplication().performSelector('exit');
						break;
				}
			},
			closePopup() {
				this.$refs.popup.close()
				uni.setStorageSync('XieYi', 1)
			},
			selectType(e){
				this.currentSelect = e
			},
			enter(){
				uni.setStorageSync("BKType",this.currentSelect)
				uni.reLaunch({
					url: "/pages/study/study"
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.title{
		margin-left: 15px;
		margin-top: calc(var(--status-bar-height) + 140rpx);
		margin-bottom: 40px;
		font-size: 48rpx;
		font-weight: bold;
	}
	
	.item{
		display: flex;
		position:relative; 
	}
	
	.item-image{
		height: 220rpx;
		padding: 0px 15px 0px 15px;
	}
	
	.select-dot{
		position: absolute;
		top: -15px; right: 0px; 
		width: 90rpx;
		height: 90rpx;
	}
	
	.enter{
		margin: 10px 20px 0px 20px;
		height: 48px;
		color: white;
		background-color: $uni-bg-color-theme;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
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
		font-size: 18px;
		color: #333333;
	}

	.popup-des {
		font-size: 14px;
		color: #777777;
		margin-top: 15px;
	}

	.popup-icon {
		width: 116px;
		height: 116px;
		margin-top: 11px;
	}

	.popup-bt-bg {
		display: flex;
		width: 100%;
		height: 48px;
		margin-top: 17px;
		justify-content: space-between;
	}

	.popup-cancel {
		height: 100%;
		width: 45%;
		color: #333333;
		font-weight: bold;
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		opacity: 1;
	}

	.popup-confim {
		height: 100%;
		width: 45%;
		background-color: $uni-bg-color-theme;
		color: white;
		font-weight: bold;
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}

	.agreement {
		color: $uni-bg-color-theme;
	}
</style>
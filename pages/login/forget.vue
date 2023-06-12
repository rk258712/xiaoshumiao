<template>
	<view>

		<!-- <van-icon name="arrow-left" size="20" color='#333' style="margin-top: 58px;margin-left: 13px;"
			@click='onClickLeft' /> -->

		<view class="lg">
			<text style="color: #333333;font-size: 24px;">账号验证</text>
		</view>

		<view class="content-bg">
			<view class="input-content-bg">
				<view class="title">+86</view>
				<view class="v-line"></view>
				<input class="input" placeholder="请输入手机号码" @input="inputPhone" />
			</view>
			
			<view class="input-content-bg">
				<view class="title">验证码</view>
				<view class="v-line"></view>
				<input class="input" placeholder="请输入验证码" @input="inputPassword" />
				<button class="send fix-width send-dis" v-if="0 < codetime"> {{codetime+'秒'}}</button>
				<button class="send" v-else
					@click="sendPhoneCode">获取验证码</button>
			</view>
			
			<view class="login-btn">下一步</view>
			
		</view>
	</view>
</template>

<script>
	import {
		setUser
	} from '/common/user.js'
	import {
		setToken
	} from '/common/auth.js'
	export default {
		data() {
			return {
				phone: '',
				password: '',
				securityInput: true,
				agreementChecked:false,
				passwordLogin:true,
				sending: false,
				codetime: 0,
			};
		},
		onShow() {
			console.log("onShow for login")
		},
		methods: {
			onClickLeft() {
				uni.navigateBack()
			},
			inputPhone(e) {
				console.log(e.detail.value)
				this.phone = e.detail.value
			},
			inputPassword(e) {
				console.log(e.detail.value)
				this.password = e.detail.value
			},
			login() {
				let that = this
				if (this.phone.length == 0) {
					uni.showToast({
						title: '请输入手机号',
						duration: 2000,
						icon: 'none'
					})
					return
				}
				if (this.password.length == 0) {
					uni.showToast({
						title: that.$t('login.passwordPleaseHolder'),
						duration: 2000,
						icon: 'none'
					})
					return
				}
				this.$request.post('/api/login/login', {
					type: 2,
					mobile: this.phone,
					password: this.password
				}).then(res => {
					let token = res.data.token
					let user = res.data.user
					setUser(user)
					setToken(token)
					uni.navigateBack()
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			},
			forget() {
				uni.navigateTo({
					url: '/pages/login/forget'
				})
			},
			regist() {
				uni.navigateTo({
					url: '/pages/login/regist'
				})
			},
			changeSecurity() {
				this.securityInput = !this.securityInput
			},
			changeAgreementStatus(){
				this.agreementChecked = !this.agreementChecked
			},
			changeLoginType(){
				this.passwordLogin = !this.passwordLogin
			},
			sendPhoneCode() {
				if (this.codetime > 0) {
					return;
				}
				if (this.phone.length == 0) {
					this.showToast('请输入手机号')
					return
				}
				uni.showLoading();
				let that = this
				this.$request.post('/api/login/yzm', {
					phone: this.phone
				}).then(res => {
					uni.hideLoading();
					uni.showToast({
						title: that.$t('sendSuccessfully'),
						duration: 2000,
						icon: 'none'
					})
					that.countTime()
				}, function(err) {
					uni.hideLoading();
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			},
			countTime() {
				this.codetime = 60
				let timer = setInterval(() => {
					console.log('codetime:' + this.codetime)
					this.codetime--;
					if (this.codetime < 1) {
						clearInterval(timer);
						this.codetime = 0
					}
				}, 1000)
			},
			showToast(msg) {
				uni.showToast({
					title: msg,
					duration: 2000,
					icon: 'none'
				})
			}
		},
		computed: {
			mailPleaseHodel() {
				return this.$t('login.mailboxNumberPleaseHolder')
			},
			passwordPleaseHodel() {
				return this.$t('login.passwordPleaseHolder')
			}
		}
	}
</script>

<style>
	/* 修改组件的样式表 */
	.van_top /deep/ .van-nav-bar__text {
		color: #FFF;
	}

	/* .van_top /deep/ .van-icon-arrow-left {
		color: var(--nav-bar-icon-color, #9fa6b5) !important;
	} */

	.van_top /deep/ .van-nav-bar__title {
		color: white !important;
		font-size: 16px;
	}

	/* .van_top /deep/ .van-nav-bar {
		background-color: #2a2a38;
	} */
</style>

<style lang="scss">
	.page-body {
		background-color: $uni-bg-color;
		height: 100vh;
		background-size: 100vw 148px;
		background-repeat: no-repeat;
	}

	.lg {
		display: flex;
		flex-direction: column;
		margin: 50px 30px 60px 30px;
	}
	
	.smslogin-tip{
		margin-top: 10px;
		font-size: 12px;
		color: $uni-text-color;
	}

	.content-bg {
		// background-color: $uni-bg-content;
		padding: 0px 30px 0px 30px;
		position: relative;
		// border-radius: 20px;
		// box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
	}

	.input-content-bg {

		display: flex;
		border-bottom: 1px solid #EEEEEE;
		align-items: center;
		margin-top: 15px;
		padding-bottom: 10px;

		.title {
			font-size: 14px;
			width: 45px;
		}

		.v-line {
			margin-left: 10px;
			margin-right: 10px;
			width: 1px;
			height: 8px;
			background-color: #EEEEEE;
		}

		.input {
			font-size: 14px;
			color: $uni-text-color;
			border-top: 0;
			border-left: 0;
			border-right: 0;
			flex-grow: 1;
		}
		
		.send {
			// background-color: $uni-bg-content;
			border-radius: 8px;
			height: 30px;
			border-width: 0.5px;
			border-style: solid;
			font-size: 14px;
			color: #FFFFFF;
			background-color: $uni-bg-color-theme;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 0px;
			font-size: 12px;
		}
		
		.send-dis{
			background-color: $uni-bg-color-hover;
		}
		
		.fix-width {
			width: 48px;
		}
	}

	.login-btn {
		border-radius: 8px;
		height: 88rpx;
		// background-image: $uni-bt-bg-image;
		background-color: $uni-bg-color-theme;
		font-size: 14px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
	}
	
	.switch-login-type{
		display: flex;
		justify-content: center;
		color: $uni-bg-color-theme;
		margin-top: 20px;
		font-size: 12px;
	}
	
	.forget-password{
		display: flex;
		justify-content: center;
		color: $uni-text-color-grey;
		margin-top: 20px;
		font-size: 12px;
	}

	.bottom-content {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
		font-size: 24rpx;
		color: #6961F4;
		align-items: center;

		.regist-tip {
			color: $uni-text-color;
		}
	}

	.bottom_bg {
		position: absolute;
		bottom: 0px;
		// background-color: rebeccapurple;
	}
	
	.agreement-tip{
		color: $uni-text-color-grey;
		font-size: 12px;
		margin-top: 5px;
	}
	
	.agreement {
		color: $uni-bg-color-theme;
	}
</style>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//#ifdef APP-PLUS
			//获取已保存在本地的用户信息，该内容在登录页面登录成功之后，才保存到本地的
			const type = uni.getStorageSync('BKType');
			if (!type) {
				uni.reLaunch({
					url: "/pages/select/select",
					success: () => {
						//跳转完页面后再关闭启动页
						plus.navigator.closeSplashscreen();
					}
				})
			} else {
				plus.navigator.closeSplashscreen(); //关闭启动页，进入首页
			}
			//#endif
		},
		onShow: function() {
			console.log('App Show')
			setTimeout(() => {
				// #ifdef APP-PLUS 
				plus.navigator.closeSplashscreen()
				// #endif
			}, 2000)
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	
	page {
		background-color: #ffffff;
	}
	
	.page-body {
		background-color: $uni-bg-color;
		height: 100%;
	}
	
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	
	.nav-bar-placeholder{
		height: calc(env(safe-area-inset-top) + 64px);
	}
	
	.refresh-footer {
		padding: 6px 0px;
		color: #9FA6B5;
		font-size: 14px;
		display: flex;
		justify-content: center;
	}
	
	.w-50 {
		width: 50%;
	}
	
	.w-max {
		width: 100%;
	}
	
	.d-flex {
		display: flex;
	}
	
	.justify-between {
		justify-content: space-between;
	}
	
	.justify-content-center {
		justify-content: center;
	}
	
	.flex-direction-column {
		flex-direction: column;
	}
	
	.flex-direction-row {
		flex-direction: row;
	}
	
	.align-items-center {
		align-items: center;
	}
	
	.justify-content-center {
		justify-content: center;
	}
	
	.justify-content-end {
		justify-content: flex-end;
	}
	
	.rounded-sm {
		border-radius: 14px;
	}
	
	.m-t-8 {
		margin-top: 8px;
	}
	
	.m-t-sm {
		margin-top: 12px !important;
	}
	
	.m-t-md {
		margin-top: 15px !important;
	}
	
	.m-y-xs {
		margin-top: 3px !important;
		margin-bottom: 3px !important;
	}
	
	.m-y-xs-6 {
		margin-top: 6px !important;
		margin-bottom: 6px !important;
	}
	
	.text-color {
		color: #9fa6b5;
	}
	
	.text-color-active {
		color: #fff;
	}
	
	.text-color-grey {
		color: #666;
	}
	
	.text-color-active-333 {
		color: #333;
	}
	
	.align-items-center {
		align-items: center;
	}
	
	.justify-content-center {
		justify-content: center;
	}
	
	.flex-shrink-0 {
		flex-shrink: 0;
	}
	
	.flex-shrink-1 {
		flex-shrink: 1;
	}
	
	.flex-grow-0 {
		flex-grow: 0
	}
	
	.flex-grow-1 {
		flex-grow: 1
	}
	
	.border-4 {
		border-radius: 4px;
	}
	
	.border-20 {
		border-radius: 20px;
	}
	
	.p-t-md {
		padding-top: 15px !important;
	}
	
	.p-t-xs {
		padding-top: 6px !important;
	}
	
	.p-x-xs {
		padding-left: 6px !important;
		padding-right: 6px !important;
	}
	
	.p-x-md {
		padding-left: 15px !important;
		padding-right: 15px !important;
	}
	
	.flex-shrink-0 {
		flex-shrink: 0;
	}
	
	.flex-shrink-1 {
		flex-shrink: 1;
	}
	
	.flex-wrap{
		flex-wrap: wrap;
	}
	
	.fo-10 {
		font-size: 10px;
	}
	
	.fo-11 {
		font-size: 11px;
	}
	
	.fo-12 {
		font-size: 12px;
	}
	
	.fo-13 {
		font-size: 13px;
	}
	
	.fo-14 {
		font-size: 14px;
	}
	
	.fo-15 {
		font-size: 15px;
	}
	
	.fo-16 {
		font-size: 16px;
	}
	
	.fo-17 {
		font-size: 17px;
	}
	
	.fo-18 {
		font-size: 18px;
	}
	
	.fo-19 {
		font-size: 19px;
	}
	
	.fo-20 {
		font-size: 20px;
	}
	
	.border-b-0.5 {
		border-bottom: 0.5px solid #F5F5F5;
	}
	
	.border-b-1 {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.border-b-2 {
		border-bottom: 2px solid #EEEEEE;
	}
	
	.border-b-3 {
		border-bottom: 3px solid #EEEEEE;
	}
	
	.border-b-4 {
		border-bottom: 4px solid #EEEEEE;
	}
	
	.m-x-ml {
		margin-left: 5px !important;
		margin-right: 5px !important;
	}
	
	.m-x-ms {
		margin-left: 8px !important;
		margin-right: 8px !important;
	}
	
	.m-x-sm {
		margin-left: 12px !important;
		margin-right: 12px !important;
	}
	
	.m-x-md {
		margin-left: 15px !important;
		margin-right: 15px !important;
	}
	
	.m-x-lg {
		margin-left: 20px !important;
		margin-right: 20px !important;
	}
	
	.m-y-ml {
		margin-top: 5px !important;
		margin-bottom: 5px !important;
	}
	
	.m-y-ms {
		margin-top: 8px !important;
		margin-bottom: 8px !important;
	}
	
	.m-y-sm {
		margin-top: 12px !important;
		margin-bottom: 12px !important;
	}
	
	.m-y-md {
		margin-top: 15px !important;
		margin-bottom: 15px !important;
	}
	
	.m-y-lg {
		margin-top: 20px !important;
		margin-bottom: 20px !important;
	}
	
	.p-b-xs {
		padding-bottom: 6px;
	}
	
	.m-r-xs {
		margin-right: 6px !important;
	}
	
	.m-r-md {
		margin-right: 15px !important;
	}
	
	.p-ms {
		padding: 8px !important;
	}
	
	.p-sm {
		padding: 12px !important;
	}
	
	.p-xs {
		padding: 6px !important;
	}
	
	.p-b-bd {
		padding-bottom: 20px !important;
	}
	
	.p-y-xs {
		padding-top: 6px !important;
		padding-bottom: 6px !important;
	}
	
	.p-y-md {
		padding-top: 15px !important;
		padding-bottom: 15px !important;
	}
	
	.rounded-ml {
		border-radius: 4px;
	}
	
	.rounded-xs {
		border-radius: 6px;
	}
	
	.rounded {
		border-radius: 10px;
	}
	
	.rounded-sm {
		border-radius: 14px;
	}
	
	.rounded-bd {
		border-radius: 22px;
	}
	
	.line-b {
		border-bottom: 1rpx solid #F5F5F5;
	}
	
	.border {
		border: 1px solid rgba(0,0,0,0.1);
	}
	
	/* 1px 浅灰色边框 */
	.border-lightGrey {
		border: 1px solid #EEEEEE;
	}
	
	.w-25 {
		width: 25%;
	}
	
	.w-33 {
		width: 27%;
	}
	
	.w-40 {
		width: 40%;
	}
	
	.w-45 {
		width: 45%;
	}
	
	.w-75 {
		width: 75%;
	}
	
	.h-44 {
		height: 44px;
	}
	
	.flex-fill {
		flex: 1;
	}
	
	.m-l-ms {
		margin-left: 8px !important;
	}
	
	.m-l-md {
		margin-left: 15px !important;
	}
	
	.fn-left {
		text-align: start;
	}
	
	.fn-center {
		text-align: center;
	}
	
	.fn-right {
		text-align: end;
	}
	
	.bg-color-white {
		background-color: #ffffff;
	}
	
	.justify-content-center {
		justify-content: center;
	}
	
	.align-items-center {
		align-items: center;
	}
	
	.justify-content-end {
		justify-content: flex-end;
	}
	
	.title{
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		font-size: 17px;
		font-weight: bold;
	}
	
	.text-theme{
		color: #70CAA3;
	}
	
	.text-black{
		color: #333;
	}
</style>
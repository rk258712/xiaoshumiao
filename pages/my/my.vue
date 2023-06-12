<template>
	<view>
		
	</view>
</template>

<script>
	import {
		isLogin
	} from '/common/auth.js'
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			if (!isLogin()) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
				return
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

</style>

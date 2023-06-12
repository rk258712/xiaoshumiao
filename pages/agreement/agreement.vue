<template>
	<view>
		<view v-if="body != null" v-html="body"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeStr: '',
				fromType: '',
				body: null
			}
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			this.typeStr = data.typeStr
			this.fromType = data.fromType
			uni.setNavigationBarTitle({
				title: data.title
			})
			this.getAgreementContent()
		},
		methods: {
			getAgreementContent() {
				let url = "api/settings/xieyi"
				let tempDic = {
					'type': this.typeStr
				}
				if (this.fromType == '2') {
					url = "api/news/danye"
					tempDic['type_id'] = this.typeStr
				}
				let that = this
				this.$request.post(url, tempDic).then(res => {
					that.body = res.data.value
				}, function(err) {})
			}
		}
	}
</script>

<style>

</style>
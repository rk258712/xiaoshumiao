<template>
	<view>
		<view v-for="(item,index) in list">
			<Staff :ref="'staff'+item.id" :data="item"></Staff>
			<view @click="test(item)">谱号</view>
			<view @click="test1(item)">调号</view>
			<view @click="test2(item)">拍号</view>
			<view @click="test3(item)">添加一行</view>
		</view>
	</view>
</template>

<script>
	import Staff from '/components/staff/staff.vue'
	export default {
		components: {
			Staff
		},
		data() {
			return {
				list: [{
					'id': '112122'
				}, {
					'id': '113323333331'
				}, {
					'id': '11332333333'
				}]
			}
		},
		onShow() {

		},
		methods: {
			test(item) {
				let staff = this.$refs[`staff${item.id}`][0]
				staff.setClef('bass')
				staff.reDraw()
			},
			test1(item) {
				let staff = this.$refs[`staff${item.id}`][0]
				staff.setKeySignature('Bb')
				staff.reDraw()
			},
			test2(item) {
				let staff = this.$refs[`staff${item.id}`][0]
				staff.setTimeSignature('3/4')
			},
			test3(item){
				let staff = this.$refs[`staff${item.id}`][0]
				staff.addLine()
			}
		}
	}
</script>

<style lang="scss">
	.test {
		height: 50px;
		background-color: red;
	}
</style>
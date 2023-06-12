<template>
	<view>
		<fui-tabs :tabs="titles" scroll :center='true' :short='false' fontWeight='bold' selectedFontWeight='bold'
			color="#333333" selected-color="#70CAA3" size="28" selected-size="28" slider-background="#70CAA3"
			scale="1.0" @change="onClickTab">
		</fui-tabs>

		<view @click="goExamList(item)" class="item" v-for="(item,index) in list">
			<view class="d-flex align-items-center">
				<view class="line" :style="{backgroundColor:lineColor(index)}"></view>
				<text>{{item.title}}</text>
			</view>
			<view class="d-flex align-items-center">
				<text class="des">{{item.count}}套</text>
				<van-icon name="arrow" color='#777777' />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: ['模拟试卷', '历年真题'],
				type: 0,
				simulations: [],
				historys: [],
				colors: ['#FFD478', '#5BBF94', '#FEA08E', '#DAAFDE', '#8FCFD5']
			};
		},
		onLoad() {
			this.getTypeList(0)
		},
		methods: {
			onClickTab(e) {
				this.type = e.index
				if (e.index == 0 && this.simulations.length == 0) {
					this.getTypeList(0)
				}
				if (e.index == 1 && this.historys.length == 0) {
					this.getTypeList(1)
				}
			},
			getTypeList(type) {
				let that = this
				this.$request.get('/api/exam/type_list', {
					type: type+1
				}).then(res => {
					if (type == 0) {
						that.simulations = res.rows
					}
					if (type == 1) {
						that.historys = res.rows
					}
				}, function(err) {})
			},
			goExamList(item){
				uni.navigateTo({
					url:'/pages/exercise/simulationTest/examList?data=' + encodeURIComponent(JSON
							.stringify(item))
				})
			}
		},
		computed: {
			list() {
				return this.type == 0 ? this.simulations : this.historys
			},
			lineColor() {
				return function(index) {
					if (index / 5 > 0) {
						return this.colors[index % 5]
					} else {
						if (index % 4 == 0) {
							return this.colors.lastobject
						} else {
							return this.colors[index % 4]
						}
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: rgb(242, 243, 245);
	}

	.item {
		margin: 15px 15px 15px;
		width: calc(100vw - 45px);
		height: 60px;
		background-color: white;
		font-size: 15px;
		font-weight: bold;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0px 10px;

		.line {
			width: 3px;
			height: 25px;
			background-color: #70CAA3;
			margin-right: 7px;
		}

		.des {
			font-size: 12px;
			font-weight: 500;
			margin-right: 10px;
			color: rgb(153, 153, 153);
		}
	}
</style>
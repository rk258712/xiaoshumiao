<template>
	<view>
		<uni-nav-bar statusBar :fixed="true" :border='false' left-width="50px" right-width="50px">
			<template v-slot:left>
				<van-icon @click='onClickLeft' name="arrow-left" size="22" color='#333' />
			</template>
			<view class="title">
				<fui-tabs :tabs="titles" scroll :height='64' :center='true' :short='false' fontWeight='bold'
					selectedFontWeight='bold' color="#333333" selected-color="#333333" size="28" selected-size="28"
					slider-background="#70CAA3" scale="1.0" @change="onClickTab">
				</fui-tabs>
			</view>
		</uni-nav-bar>

		<view class="section-header">
			<view class="my-rank-bg">
				<text class="my-rank-title">我的排名</text>
				<view class="my-rank-num">{{myRank()}}</view>
			</view>
			<view class="list-title">
				<text>排名</text>
				<text>{{type == 1 ? '答对题数' : '试卷套数'}}</text>
			</view>
		</view>

		<uni-list>
			<uni-list-item class="item" v-for="(item,index) in list">
				<template v-slot:body>
					<view class="item-body">
						<view class="item-body-left">

							<image v-if="index == 0" class="item-icon-no-1" src="/static/exercise/nav_trophy.png">
							</image>
							<view v-else class="item-rank" :class="{'rank-color-1':index == 1,'rank-color-2':index==2,'rank-color-other': index != 1 && index != 2}">{{index+1}}</view>

							<view class="item-username">{{item.username}}</view>
						</view>
						<view class="item-count">{{item.counts}}</view>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {
		getUser
	} from '/common/user.js'
	export default {
		data() {
			return {
				titles: ['刷题排行', '试卷套数排行'],
				questionRanks: [],
				examRanks: [],
				type: 1,
				user: null
			};
		},
		onLoad() {
			this.getUserTop(1)
			this.user = getUser()
		},
		methods: {
			onClickLeft() {
				uni.navigateBack()
			},
			// type，1试题排行，2试卷排行
			getUserTop(type) {
				let that = this
				this.$request.get('/api/topic/user_topic', {
					type: type
				}).then(res => {
					if (type == 1) {
						that.questionRanks = res.data
					}
					if (type == 2) {
						that.examRanks = res.data
					}
				}, function(err) {})
			},
			onClickTab(e) {
				this.type = e.index + 1
				if (this.type == 1 && this.questionRanks.length == 0) {
					this.getUserTop(1)
				}
				if (this.type == 2 && this.examRanks.length == 0) {
					this.getUserTop(2)
				}
			}
		},
		computed: {
			myRank() {
				let that = this
				return function() {
					let list = that.type == 1 ? that.questionRanks : that.examRanks
					if (list.length == 0 || that.user == null) {
						return '未排名'
					}
					for (var i = 0; i < list.length; i++) {
						let item = list[i]
						if (item.uid == that.user.id) {
							let rank = i + 1
							if (100 < rank) {
								return '99+'
							}
							return rank
						}
					}
					return '未排名'
				}
			},
			list() {
				return this.type == 1 ? this.questionRanks : this.examRanks
			}
		}
	}
</script>

<style lang="scss">
	.section-header {
		padding: 15px;
	}

	.my-rank-bg {
		display: flex;
		align-items: center;

		.my-rank-title {
			font-size: 24px;
			font-weight: bold;
		}

		.my-rank-num {
			font-size: 14px;
			font-weight: 250;
			background-color: rgb(234, 235, 237);
			margin-left: 10px;
			height: 28px;
			min-width: 28px;
			padding: 0px 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 14px;
		}
	}

	.list-title {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		font-weight: 500;
		color: rgb(153, 153, 153);
		margin-top: 15px;
	}

	.item {
		height: 60px;

		.item-body {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex: 1;
		}

		.item-body-left {
			display: flex;
		}

		.item-icon-no-1 {
			width: 28px;
			height: 25px;
		}

		.item-rank {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 28px;
			height: 28px;
			border-radius: 14px;
		}
		
		.rank-color-1{
			color: white;
			background-color: rgb(0, 124, 249);
		}
		
		.rank-color-2{
			color: white;
			background-color: rgb(75, 206, 134);
		}
		
		.rank-color-other{
			color: rgb(0, 0, 0);
			background-color: rgb(234, 235, 237);
		}

		.item-username {
			margin-left: 15px;
			align-items: center;
			display: flex;
			font-size: 13px;
		}

		.item-count {
			font-size: 14px;
		}
	}
</style>
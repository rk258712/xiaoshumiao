<template>
	<view>
		<uni-nav-bar id="nav-bar" statusBar :fixed="true" :border='false' left-width="22px" right-width="22px">
			<template v-slot:left>
				<van-icon @click='onClickLeft' name="arrow-left" size="22" color='#333' />
			</template>
			<view class="title">{{title}}</view>
			<template v-slot:right>
				<van-icon v-if="isCollection == true" @click='FavorSubject' name="star" size="20" color='#FECB65' />
				<van-icon v-else @click='FavorSubject' name="star-o" size="20" color='#333' />
			</template>
		</uni-nav-bar>

		<view id="top-box" class="cu-bar bg-white solid-bottom margin-lr">
			<template v-if="subjectList.length != 0">
				<view class="d-flex align-items-center">
					<image class="exam-num-size margin-right-xs" src="/static/question/exam_num.png"></image>
					<text class="text-theme fo-15">{{subjectIndex+1}}</text>
					<text class="fo-12">/{{subjectList.length}}</text>
				</view>
				<view v-if="fromType == 6" class="d-flex">
					<image class="exam-time-size margin-right-xs" src="/static/question/exam_time.png"></image>
					<view>{{formatTime}}</view>
				</view>
				<view @click="sendExam" v-if="fromType == 6" class="commit-exam">交卷</view>
			</template>
		</view>

		<swiper :current="subjectIndex" class="swiper-box bg-white" @change="SwiperChange"
			:style="{'height':swiperHeight}">
			<swiper-item v-for="(subject,index) in subjectList">

				<view v-if="index-subjectIndex>=-1&&index-subjectIndex<=1">
					<!-- 题干 -->
					<view class="margin-left margin-right stem-bg">
						<text class="topic-type" v-if="subject.topicTypeId===1"
							style="background-color: rgb(255, 212, 120);">填空题</text>
						<text class="topic-type" v-else-if="subject.topicTypeId===2"
							style="background-color: rgb(91, 191, 148);">单选题</text>
						<text class="topic-type" v-else-if="subject.topicTypeId===3"
							style="background-color: rgb(255, 212, 120);">多选题</text>
						<text class="topic-type" v-else-if="subject.topicTypeId===4"
							style="background-color: rgb(254, 160, 142);">判断题</text>
						<text class="topic-type" v-else-if="subject.topicTypeId===5"
							style="background-color: rgb(114, 148, 204);">主观题</text>
						<template v-for="(stem,index) in subject.listQycTopicStem">
							<!-- 题干类型1文字 2填空 3变量 4 图片 5录音 6特殊键盘 7填空题题干 8 五线谱题干 -->
							<text v-if="stem.type == 1" class="stem-text">{{stem.title}}</text>
							<text v-else-if="stem.type == 2" class="underline"></text>

							<Staff v-else-if="stem.type == 8" :ref="'staff'+stem.id" :data="stemToStaff(stem)"></Staff>

						</template>
					</view>

					<!-- 选项或输入 -->
					<view>
						<van-radio-group v-model="subject.model" :disabled="subject.answerResult != null" class="block"
							@change="RadioboxChange" v-if="subject.topicTypeId===2||subject.topicTypeId===4">
							<view class="cu-form-group" v-for="option in subject.listQycTopicOption">
								<van-radio :checked="judgeChecked(subject,option.label) > -1?true:false"
									:name="option.label">
									<template #icon="props">
										<img class="radio-img-icon"
											:src="props.checked ? checkedImage(subject,option.label) : '/static/question/unselect.png'" />
									</template>
								</van-radio>
								<view class="text-black option-title">{{option.label}}.</view>
								<CheckOption :data="option"></CheckOption>
							</view>
						</van-radio-group>

						<template v-else-if="subject.topicTypeId===3">
							<van-checkbox-group v-model="subject.model" :disabled="subject.answerResult != null"
								class="block" @change="CheckboxChange">
								<view class="cu-form-group" v-for="option in subject.listQycTopicOption">
									<van-checkbox :checked="judgeChecked(subject,option.label) > -1?true:false"
										:name="option.label">
										<template #icon="props">
											<img class="radio-img-icon"
												:src="props.checked ? checkedImage(subject,option.label) : '/static/question/unselect.png'" />
										</template>
									</van-checkbox>
									<view class="text-black option-title">{{option.label}}.</view>
									<CheckOption :data="option"></CheckOption>
								</view>
							</van-checkbox-group>
						</template>

						<view v-else-if="subject.topicTypeId===1">
							<template v-for="(stem,index) in fillBlanks(subject)">
								<view class="cu-form-group padding-tb-sm">
									<view class="fill-Blanks-title">
										第{{index+1}}空：
									</view>
									<view class="solid-bottom flex-fill fill-Blanks-input-bg">
										<input :disabled="subject.answerResult != null" :id="'input'+index"
											@input="fillBlanksInput" placeholder="点击此处输入答案"
											placeholder-style="color:#AAAAAA"
											:value="subject.answerResult == null ? '' : subject.answerResult.result[index].value" />
									</view>
									<view style="width: 20px;height: 20px;">
										<template v-if="subject.answerResult">
											<image v-if="subject.answerResult.result[index].status == true"
												style="width: 20px;height: 20px;" src="/static/question/correct.png" />
											<image v-if="subject.answerResult.result[index].status == false"
												style="width: 20px;height: 20px;" src="/static/question/error.png" />
										</template>
									</view>
								</view>
							</template>
						</view>

						<view v-else-if="subject.topicTypeId===5">

							<view class="cu-form-group m-y-ms d-flex flex-direction-column">
								<Staff @clickStaff='clickStaff' :ref="'staff'+subject.id" :key="subject.key"
									:data="subjectToStaff(subject)"></Staff>
								<view v-if="subject.staffs == null  || subject.staffs.length == 0"
									@click="clickEditStaff"
									style="margin: 15px;position: absolute;height: 30px;align-items: center;display: flex;background-color: white;">
									点击选框进行作答</view>
							</view>
						</view>

					</view>

					<view v-if="subject.topicTypeId != 2 && subject.topicTypeId != 4 && subject.answerResult == null"
						class="commit-bg" style="display: flex;">
						<view @click="commitAnswer" class="commit-btn">提交</view>
					</view>

					<view v-if="subject.answerResult != null" class="margin-top margin-left margin-right">

						<view class="answer-result margin-bottom-lg"
							:class="{'answer-result-error':subject.answerResult.isTrue == false}">
							{{subject.answerResult.isTrue == true ? '回答正确' : '回答错误'}}
						</view>

						<view class="margin-bottom-lg">
							<text class="text-bold margin-right">答案</text>
							<text class="padding-left-ml text-theme fo-17" v-html="subject.answerResult.answer"></text>
						</view>

						<view class="d-flex">
							<text class="margin-right" style="flex-shrink:0;">解析</text>
							<text v-html="subject.answerResult.topicInfo.analysis"></text>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>

		<view id="foot-box" class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="MoveSubject(-1)">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-back text-gray"></text>
				</view>
				<view class="text-gray">上一题</view>
			</view>
			<view class="action" @click="MoveSubject(1)">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-right"></text>
				</view>
				<view class="text-gray">下一题</view>
			</view>
		</view>

		<uni-popup ref="setupStaff" type="center">
			<view class="setupStaff-bg">
				<view
					style="width: 100%; align-items: center;display: flex;justify-items: center;justify-content: center;">
					设置五线谱</view>
				<view style="width: 100%;height: 1px;background-color: #cccccc;margin-top: 10px;"></view>
				<view style="display: flex;justify-content: space-around;width: 100%;margin-top: 10px;">
					<view @click="selectClef"
						style="display: flex;flex-direction: column;align-items: center;height: 250rpx;">
						<view>谱号</view>
						<image style="width: 142rpx;height: 142rpx;"
							:src="currentClef == null ? '/static/question/Slice105.png' : $request.imageBaseUrl+currentClef.imgUrl">
						</image>
						<view v-if="currentClef != null">{{currentClef.name}}</view>
					</view>
					<view @click="selectKeySignature"
						style="display: flex;flex-direction: column;align-items: center;height: 250rpx;">
						<view>调号</view>
						<image style="width: 142rpx;height: 142rpx;"
							:src="currentKeySignature == null ? '/static/question/Slice105.png' : $request.imageBaseUrl+currentKeySignature.imgUrl">
						</image>
						<view v-if="currentKeySignature != null">{{currentKeySignature.name}}</view>
					</view>
					<view @click="selectTimeSignature"
						style="display: flex;flex-direction: column;align-items: center;height: 250rpx;">
						<view>拍号</view>
						<view class="back-staff-img"
							style="margin-left: 10px;display: flex;width: 142rpx;height: 142rpx;flex-direction: column;align-items: center;align-content: center;justify-content: center;">
							<text v-if="currentTimeSignature !=  null">{{currentTimeSignature.fz}}</text>
							<text v-if="currentTimeSignature !=  null">{{currentTimeSignature.fm}}</text>
						</view>
						<view v-if="currentTimeSignature != null">
							{{currentTimeSignature.fz + '/' + currentTimeSignature.fm}}拍
						</view>
					</view>
				</view>
				<view @click="commitStaffSettup"
					style="padding: 5px 10px;background-color: #70CAA3;border-radius: 10px;color: white;">提交</view>
			</view>
		</uni-popup>

		<uni-popup ref="selectClef" type="center">
			<view class="setupStaff-bg" style="width: 50vw;border-radius: 10px;">
				<view
					style="width: 50%; align-items: center;display: flex;justify-items: center;justify-content: center;margin-bottom: 10px">
					选择谱号</view>
				<view @click="clickClef(clef)" v-for="(clef,index) in clefs"
					style="display: flex;flex-direction: row;align-items: center;height: 142rpx;margin-bottom: 10px;">
					<image style="width: 142rpx;height: 142rpx;position: absolute;left: 15px;"
						:src="$request.imageBaseUrl+clef.imgUrl"></image>
					<view style="margin-left: 142rpx;">{{clef.name}}</view>
				</view>
			</view>
		</uni-popup>

		<uni-popup ref="selectKeySignature" type="center">
			<view class="setupStaff-bg" style="width: 50vw;border-radius: 10px;max-height: 80vh;overflow: auto;">
				<view
					style="width: 50%; align-items: center;display: flex;justify-items: center;justify-content: center;margin-bottom: 10px">
					选择调号</view>
				<scroll-view>
					<view @click="clickKeySignature(keySignature)" v-for="(keySignature,index) in keySignatures"
						style="display: flex;flex-direction: row;align-items: center;height: 142rpx;margin-bottom: 10px;">
						<image style="width: 142rpx;height: 142rpx;position: absolute;left: 15px;"
							:src="$request.imageBaseUrl+keySignature.imgUrl"></image>
						<view style="margin-left: 180rpx;">{{keySignature.name}}</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<uni-popup ref="selectTimeSignature" type="center">
			<view class="setupStaff-bg" style="width: 50vw;border-radius: 10px;max-height: 80vh;overflow: auto;">
				<view
					style="width: 50%; align-items: center;display: flex;justify-items: center;justify-content: center;margin-bottom: 10px">
					选择拍号</view>
				<scroll-view>
					<view @click="clickTimeSignature(timeSignature)" v-for="(timeSignature,index) in timeSignatures"
						style="display: flex;flex-direction: row;align-items: center;height: 142rpx;margin-bottom: 20rpx;justify-content: flex-start;">
						<view class="back-staff-img"
							style="margin-left: 10px;display: flex;width: 142rpx;height: 142rpx;flex-direction: column;align-items: center;align-content: center;justify-content: center;">
							<text>{{timeSignature.fz}}</text>
							<text>{{timeSignature.fm}}</text>
						</view>
						<view v-if="timeSignature.isCustom != true" style="margin-left: 10px;display: flex;flex: 1;">
							{{timeSignature.fz}}/{{timeSignature.fm}}拍
						</view>
						<view v-else style="display: flex;align-items: center;">
							<view>
								<view class="dropdown" style="width: 50px;height: 25px; margin-left: 10px;"
									@click.stop="show">
									<view class="dropdown-title">
										{{timeSignature.fz}}
									</view>
									<van-icon name="arrow-down" size='12px' />
								</view>
								<view v-if="showOption == true" class="dropdown1">
									<view @click.stop="closeDropdown" class="dropdown1-mask"></view>
									<scroll-view class="ul" :class="{'show': showOption == true}">
										<view @click.stop="selectOptinType(item)" class="li"
											v-for="(item,index) in timeSignatureFz">
											{{item}}
										</view>
									</scroll-view>
								</view>
								<view class="dropdown" style="width: 50px;height: 25px; margin-left: 10px;"
									@click.stop="showFM">
									<view class="dropdown-title">
										{{timeSignature.fm}}
									</view>
									<van-icon name="arrow-down" size='12px' />
								</view>
								<view v-if="showOptionFM == true" class="dropdown1-1">
									<view @click.stop="closeDropdownFM" class="dropdown1-mask"></view>
									<scroll-view class="ul" :class="{'show-1': showOptionFM == true}">
										<view @click.stop="selectOptinTypeFM(item)" class="li"
											v-for="(item,index) in timeSignatureFM">
											{{item}}
										</view>
									</scroll-view>
								</view>
							</view>
							<text style="margin-left: 10px;">自行\n设置</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<uni-popup ref="keyboard" type="bottom" style="z-index: 1025;">
			<view class="setupStaff-bg"
				style="width: 100vw;border-radius: 10px 10px 0px 0px;max-height: 40vh;overflow: auto;">
				<view
					style="width: 100%; align-items: center;display: flex;justify-items: center;justify-content: space-between;margin-bottom: 15px;padding: 0px 15px;">
					<view>
						<view>返回</view>
					</view>
					<view>
						<view>选择要输入的音符</view>
					</view>
					<view>
						<view>收起</view>
					</view>
				</view>
				<view style="display: flex;flex-direction: column;">
					<view class="yinfu-top-bg">
						<view @click="clickYinfuType(index)" class="yinfu-top-item"
							:class="{'yinfu-top-item-select':currentYinfuTypeIndex == index}"
							v-for="(item,index) in yinfus">{{item.name}}</view>
					</view>
					<view v-if="inputLevel == 0" class="yinfu-item-bg" style="display: flex;flex-wrap: wrap;">
						<view @click="inputNote(item)" class="yinfu-item"
							v-for="(item,index) in yinfus[currentYinfuTypeIndex].childData">
							<image class="yinfu-item-image" :src="$request.imageBaseUrl+item.imgUrl"></image>
						</view>
					</view>

					<view v-if="inputLevel == 1 && currentClef != null" class="yinfu-item-bg">
						<scroll-view style="height: 150px;">
							<view style="height: 200px;width: 100vw;display: flex;flex-wrap: wrap;">
								<view @click="inputYinfuYinGao(item)" class="yinfuyingao-item"
									v-for="(item,index) in getYinfuyingao()">
									<image class="yinfu-item-image" :src="$request.imageBaseUrl+item.imgUrl"></image>
								</view>
							</view>
						</scroll-view>
						<view style="width: 100%;display: flex;justify-content: center;margin-top: 10px;">设置音符画法</view>
					</view>

					<view class="yinfu-bottom-bg">
						<view class="yinfu-bottom-item">上一个</view>
						<view class="yinfu-bottom-item" style="min-width: 80px;">删除</view>
						<view class="yinfu-bottom-item" style="min-width: 80px;">完成</view>
						<view class="yinfu-bottom-item">下一个</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import CheckOption from '@/components/checkOption/checkOption.vue'
	import Staff from '/components/staff/staff.vue'
	import {
		getData
	} from '/common/keyboardDataManager.js'
	export default {
		components: {
			CheckOption,
			Staff
		},
		data() {
			return {
				title: '',
				// 1视频练习 2自由练习 3闯关练习 4 每日一练 5 错题集 6 模拟测试 7 我的收藏 8 每日一练回顾 9自由练习回顾 10 试题回顾 11 重新测试 12 重新闯关 13 闯关练习回顾
				fromType: 1,
				cateLogDetail: null,
				dayId: null,
				exam: null,
				rawData: null, //网络请求原始数据
				isCollection: false, //是否已收藏
				// 当前题型id  1:填空题 2:单选题 3:多选题 4判断题 5主观题
				subjectIndex: 0, //跳转索引
				residueSecond: 0,
				autoShowAnswer: false, //答错是否显答案
				autoRadioNext: false, //判断题、单项题，自动移下一题
				swiperHeight: '800px', //
				subjectList: [],
				modalCard: null, //显示答题卡
				timer: null,
				clefs: [],
				keySignatures: [],
				timeSignatures: [],
				currentClef: null,
				currentKeySignature: null,
				currentTimeSignature: null,
				currentTimeSignatureIndex: 0,
				showOption: false,
				timeSignatureFz: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
				showOptionFM: false,
				timeSignatureFM: [2, 4, 8, 16, 32],
				currentSubject: null,
				yinfus: [],
				currentYinfuTypeIndex: 0,
				inputLevel: 0,
				yinfuyingaos: [],
				currentNote:null,
				currentEditNoteIndex:0
			};
		},
		onReady() {

			var tempHeight = 800;
			var that = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
				success: function(res) {
					tempHeight = res.windowHeight;
					console.log("屏幕可用高度 " + tempHeight);

					uni.createSelectorQuery().select("#top-box").fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						tempHeight -= data.height;
						console.log("减掉顶部后的高度 " + tempHeight);

						uni.createSelectorQuery().select("#foot-box").fields({
							size: true,
							scrollOffset: true
						}, (data) => {
							tempHeight -= data.height;
							console.log("减掉底部后的高度 " + tempHeight);

							uni.createSelectorQuery().select("#nav-bar").fields({
								size: true,
								scrollOffset: true
							}, (data) => {
								tempHeight -= data.height;
								console.log("减掉导航栏后的高度 " + tempHeight);
								that.swiperHeight = tempHeight + 'px';
								console.log("滑屏最后高度 " + that.swiperHeight);
							}).exec();

						}).exec();

					}).exec();
				}
			});
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			console.log(data)
			if (data.fromType) {
				this.fromType = data.fromType
				switch (this.fromType) {
					case 4: {
						this.title = '每日一练'
					}
					break;
					default:
						break;
				}
			}
			if (data.cateLogDetail) {
				this.cateLogDetail = data.cateLogDetail
			}
			if (data.dayId) {
				this.dayId = data.dayId
			}
			if (data.exam) {
				this.exam = data.exam
				this.title = this.exam.name
				this.examId = this.exam.id
			}
			this.getQuestions()

			let wuxianpuData = getData('WUXIANPU')
			console.log(wuxianpuData)
			this.clefs = wuxianpuData[0].childData || []
			this.keySignatures = wuxianpuData[1].childData || []
			this.timeSignatures = [{
				'fz': 4,
				'fm': 4
			}, {
				'fz': 3,
				'fm': 4
			}, {
				'fz': 2,
				'fm': 4
			}, {
				'fz': 2,
				'fm': 2
			}, {
				'fz': 6,
				'fm': 8
			}, {
				'fz': '',
				'fm': '',
				'isCustom': true
			}]

			this.yinfus = getData('YINFU')
			this.yinfuyingaos = getData('YINFUYINGAO')
		},
		methods: {
			inputNote(e) {
				this.inputLevel = 1
				this.currentNote = e
				let currentStaffIndex = this.currentSubject.currentStaffIndex
				let notes = this.currentSubject.staffs[currentStaffIndex].notes || []
				notes.push(e)
				console.log(notes)
				this.currentSubject.staffs[currentStaffIndex].notes = notes
				console.log('------')
				console.log(this.currentSubject.staffs[currentStaffIndex].notes)
				this.constructStaffData()
			},
			inputYinfuYinGao(e) {
				let pitchs = this.currentNote.pitchs || []
				pitchs.push(e)
				this.currentNote.pitchs = pitchs
				let currentStaffIndex = this.currentSubject.currentStaffIndex
				let notes = this.currentSubject.staffs[currentStaffIndex].notes
				notes[this.currentEditNoteIndex] = this.currentNote
				this.currentSubject.staffs[currentStaffIndex].notes = notes
				
				this.constructStaffData()
			},
			clickYinfuType(e) {
				this.currentYinfuTypeIndex = e
			},
			clickStaff() {
				if (this.currentSubject.currentStaffIndex == undefined) {
					this.clickEditStaff()
					return
				} else {
					let currentStaffIndex = this.currentSubject.currentStaffIndex
					let currentClef = this.currentSubject.staffs[currentStaffIndex].currentClef
					let currentKeySignature = this.currentSubject.staffs[currentStaffIndex].currentKeySignature
					let currentTimeSignature = this.currentSubject.staffs[currentStaffIndex].currentTimeSignature
					if (!currentClef || !currentKeySignature || !currentTimeSignature) {
						this.clickEditStaff()
						return
					}
				}
				this.showYinfu()
			},
			showYinfu() {
				this.$refs.keyboard.open('bottom')
			},
			show() {
				this.showOption = true
			},
			closeDropdown() {
				this.showOption = false
			},
			selectOptinType(e) {
				this.showOption = false
				let item = this.timeSignatures[5]
				item.fz = e
			},
			showFM() {
				this.showOptionFM = true
			},
			closeDropdownFM() {
				this.showOptionFM = false
			},
			selectOptinTypeFM(e) {
				this.showOptionFM = false
				let item = this.timeSignatures[5]
				item.fm = e
			},
			commitStaffSettup() {
				if (this.currentClef == null) {
					uni.showToast({
						title: "请选择谱号",
						duration: 2000,
						icon: 'none'
					})
					return
				}
				if (this.currentKeySignature == null) {
					uni.showToast({
						title: "请选择调号",
						duration: 2000,
						icon: 'none'
					})
					return
				}
				if (this.currentTimeSignature == null) {
					uni.showToast({
						title: "请选择拍号",
						duration: 2000,
						icon: 'none'
					})
					return
				}
				this.$refs.setupStaff.close()
				this.constructStaffData()
				this.showYinfu()
			},
			onClickLeft() {
				uni.navigateBack()
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			clickEditStaff() {
				if (this.currentSubject.currentStaffIndex == undefined) {
					this.currentSubject.currentStaffIndex = 0
					this.currentSubject.staffs = [{}]
				} else {
					let currentStaffIndex = this.currentSubject.currentStaffIndex
					this.currentClef = this.currentSubject.staffs[currentStaffIndex].currentClef
					this.currentKeySignature = this.currentSubject.staffs[currentStaffIndex].currentKeySignature
					this.currentTimeSignature = this.currentSubject.staffs[currentStaffIndex].currentTimeSignature
				}
				this.$refs.setupStaff.open('center')
			},
			selectTimeSignature() {
				this.$refs.selectTimeSignature.open('center')
			},
			clickTimeSignature(e) {
				this.$refs.selectTimeSignature.close()
				this.currentTimeSignature = e
				let currentStaffIndex = this.currentSubject.currentStaffIndex
				this.currentSubject.staffs[currentStaffIndex].currentTimeSignature = e;
			},
			selectKeySignature() {
				this.$refs.selectKeySignature.open('center')
			},
			clickKeySignature(e) {
				this.$refs.selectKeySignature.close()
				this.currentKeySignature = e
				let currentStaffIndex = this.currentSubject.currentStaffIndex
				this.currentSubject.staffs[currentStaffIndex].currentKeySignature = e;
			},
			selectClef() {
				this.$refs.selectClef.open('center')
			},
			clickClef(e) {
				this.$refs.selectClef.close()
				this.currentClef = e
				let currentStaffIndex = this.currentSubject.currentStaffIndex
				this.currentSubject.staffs[currentStaffIndex].currentClef = e;
			},
			getQuestions() {
				let url = ''
				let params = {}
				if (this.fromType == 1) {
					url = '/api/topic/topic_continue_study'
					params['courseId'] = this.cateLogDetail.courseId
					params['catalogId'] = this.cateLogDetail.id
				}
				if (this.fromType == 4) {
					url = '/api/usermember/showDay'
					params['dayId'] = this.dayId
				}
				if (this.fromType == 5) {
					url = '/api/usermember/showMyError'
				}
				if (this.fromType == 6) {
					url = '/api/exam/topicListByExam'
					params['id'] = this.exam.id
				}
				if (this.fromType == 7) {
					url = '/api/usermember/showMyCollection'
					params['type'] = 2
				}
				let that = this
				this.$request.get(url, params).then(res => {
					that.rawData = res.data
					that.subjectList = res.data.list
					that.subjectIndex = res.data.myCurrentTopic
					that.currentSubject = res.data.list[that.subjectIndex];
					that.residueSecond = res.data.residueSecond
					that.isCollection = that.subjectList[that.subjectIndex].isCollection;
					if (that.fromType == 6) {
						that.countDown()
					}
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none',
					})
				})
			},
			countDown() {
				if (this.residueSecond < 0) {
					this.timeEnd()
					return
				}
				this.timer = setInterval(() => {
					this.residueSecond -= 1;
					if (this.residueSecond <= 0) {
						this.timeEnd()
					}
				}, 1000);
			},
			timeEnd() {
				if (this.timer) {
					clearInterval(this.timer)
				}

			},
			sendExam() {
				let that = this
				uni.showModal({
					title: '温馨提示',
					content: '确认提交试卷吗？',
					cancelText: '取消',
					confirmText: '确认交卷',
					confirmColor: '#70CAA3',
					success: res => {
						if (res.confirm) {
							that.sendExamReq()
						}
					}
				});
			},
			sendExamReq() {
				let that = this
				this.$request.get('/api/exam/sendExam', {
					id: that.rawData.id
				}).then(res => {
					let item = {
						exam: that.exam,
						fromType: that.fromType
					}
					uni.navigateTo({
						url: '/pages/exercise/question/answerReport?data=' + encodeURIComponent(JSON
							.stringify(item))
					})
				}, function(err) {
					uni.showToast({
						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			},
			showCardModal: function(e) {
				this.modalCard = e.currentTarget.dataset.target
			},
			hideCardModal: function(e) {
				this.modalCard = null
			},
			SwiperChange: function(e) { //滑动事件

				let index = e.target.current;

				if (index != undefined) {
					this.subjectIndex = index;
					this.currentSubject = this.subjectList[index]
					this.isCollection = this.subjectList[index].isCollection;
				}
			},
			next() {
				if (this.subjectIndex < this.subjectList.length - 1) {
					this.subjectIndex += 1;
					this.currentSubject = this.subjectList[this.subjectIndex]
				}
			},
			RadioboxChange: function(e) { //单选选中
				var values = [e];
				this.subjectList[this.subjectIndex].answer = values;

				this.commitAnswer()
			},
			CheckboxChange: function(e) { //复选选中
				var values = e;
				this.subjectList[this.subjectIndex].answer = values;
			},
			fillBlanksInput(e) {
				let key = e.target.id;
				let value = e.detail.value
				let inputs = this.subjectList[this.subjectIndex].inputs
				inputs[key] = value
				this.subjectList[this.subjectIndex].inputs = inputs
			},
			textInput: function(e) { //填空题

				this.subjectList[this.subjectIndex].answer = e.detail.value;

			},
			commitAnswer() {
				let item = this.subjectList[this.subjectIndex]
				if (item.answerResult != undefined) {
					return
				}
				let url = ''
				let params = {
					topicId: item.id,
					answerList: item.answer
				}
				if (this.cateLogDetail != null) {
					params['catalogId'] = this.cateLogDetail.id
					params['courseId'] = this.cateLogDetail.courseId
				}
				if (this.dayId) {
					params['dayId'] = this.dayId
				}
				if (this.examId) {
					params['examId'] = this.examId
				}
				let that = this
				// 当前题型id  1:填空题 2:单选题 3:多选题 4判断题 5主观题
				let topicTypeId = item.topicTypeId
				if (topicTypeId == 1) {
					let sortedKeys = Object.keys(item.inputs).sort();
					let sortedValues = sortedKeys.map(key => item.inputs[key]).filter(item => {
						if (item.length != 0) {
							return item
						}
					});
					if (sortedValues.length == 0 || sortedValues.length != item.fillBlanks.length) {
						uni.showToast({
							title: '请填写完整答案',
							duration: 2000,
							icon: 'none'
						})
						return
					}
					params['answerList'] = sortedValues
					url = '/api/topic/topic_sub1'
				} else if (topicTypeId == 2) {
					url = '/api/topic/topic_sub2'
				} else if (topicTypeId == 3) {
					url = '/api/topic/topic_sub3'
				} else if (topicTypeId == 4) {

				} else if (topicTypeId == 5) {

				}

				this.$request.post(url, params).then(res => {
					that.subjectList[that.subjectIndex].answerResult = res.data
					if (that.autoRadioNext) {
						that.next()
					};
				}, function(err) {
					uni.showToast({

						title: err.msg,
						duration: 2000,
						icon: 'none'
					})
				})
			},
			ShowAnswerChange: function(e) { //显示答案

				if (this.subjectList[this.subjectIndex].showAnswer) {
					this.subjectList[this.subjectIndex].showAnswer = false;
				} else {

					this.subjectList[this.subjectIndex].showAnswer = true;
				}
			},

			FavorSubject: function(e) { //收藏题

				if (this.isCollection) {

					let item = this.subjectList[this.subjectIndex]
					let that = this
					this.$request.post('/api/topic/del_collection', {
						targetId: item.id,
						type: 2
					}).then(res => {
						that.isCollection = false;
						that.subjectList[that.subjectIndex].isCollection = false;
						uni.showToast({
							title: '取消成功',
							duration: 2000,
							icon: 'none'
						})
					}, function(err) {
						uni.showToast({
							title: err.msg,
							duration: 2000,
							icon: 'none'
						})
					})

				} else {
					let item = this.subjectList[this.subjectIndex]
					let that = this
					this.$request.post('/api/topic/add_collection', {
						targetId: item.id,
						type: 2
					}).then(res => {
						that.isCollection = true;
						that.subjectList[that.subjectIndex].isCollection = true;
						uni.showToast({
							title: '收藏成功',
							duration: 2000,
							icon: 'none'
						})
					}, function(err) {
						uni.showToast({
							title: err.msg,
							duration: 2000,
							icon: 'none'
						})
					})
				}
			},

			MoveSubject: function(e) { //上一题、下一题

				if (e === -1 && this.subjectIndex != 0) {
					this.subjectIndex -= 1;
				}
				if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
					this.subjectIndex += 1;
				}
				this.isCollection = this.subjectList[this.subjectIndex].isCollection
				this.currentSubject = this.subjectList[this.subjectIndex]
			},

			AppointedSubject: function(e) { //题卡指定

				this.modalCard = null;
				this.subjectIndex = e;
				this.currentSubject = this.subjectList[this.subjectIndex]
			},

			generateStemHtml(item) {
				let html = ""
				for (var stem of item.listQycTopicStem) {
					console.log(stem)
					// 题干类型1文字 2填空 3变量 4 图片 5录音 6特殊键盘 7填空题题干 8 五线谱题干
					switch (stem.type) {
						case 1: {

						}
						break;
						default:
							break;
					}
				}
				return item.topicHtml
			},
			padZero(value) {
				return String(value).padStart(2, '0');
			},
			constructStaffData() {
				let data = []
				for (let item of this.currentSubject.staffs) {
					let setup = {
						'jie': [item.currentClef, item.currentKeySignature, item.currentTimeSignature]
					}
					let notes = {
						'jie': item.notes || []
					}
					let obj = {
						pai: [setup, notes]
					}
					data.push(obj)
				}
				this.currentSubject.data = data
				let timestamp = new Date().getTime();
				this.currentSubject.key = timestamp
			}
		},
		computed: {
			judgeChecked() {
				return function(subject, str) {
					if (subject == undefined || str.length == 0) {
						return -1
					}
					let res = -1
					if (subject.answerResult != undefined && subject.answerResult.answer != undefined) {
						res = subject.answerResult.answer.indexOf(str)
					}
					if (res == -1 && subject.answer) {
						res = subject.answer.indexOf(str)
					}
					return res
				}
			},
			checkedImage() {
				return function(subject, str) {
					if (subject == undefined || str.length == 0 || subject.answerResult == undefined) {
						return '/static/question/select.png'
					}
					if (subject.answerResult.answer.indexOf(str) != -1) {
						return '/static/question/correct.png'
					} else {
						return '/static/question/error.png'
					}
				}
			},
			fillBlanks() {
				return function(subject) {
					if (subject.fillBlanks != undefined) {
						return subject.fillBlanks
					}
					let fillBlanks = subject.listQycTopicStem.filter(item => {
						if (item.type == 2) {
							return item
						}
					})
					subject.inputs = {}
					subject.fillBlanks = fillBlanks
					return fillBlanks
				}
			},
			indexOf() {
				return function(obj, str) {
					if (obj == undefined || str.length == 0) {
						return -1
					}
					return obj.indexOf(str)
				}
			},
			formatTime() {
				let second = this.residueSecond < 0 ? 0 : this.residueSecond
				const hours = Math.floor(second / 3600);
				const minutes = Math.floor((second % 3600) / 60);
				const seconds = second % 60;
				return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
			},
			stemToStaff() {
				return function(stem) {
					if (stem.staffData) {
						return stem.staffData
					}
					let staffData = {}
					staffData['id'] = stem.id
					staffData['data'] = JSON.parse(stem.title).json;
					stem.staffData = staffData
					return staffData
				}
			},
			subjectToStaff() {
				return function(subject) {
					let staffData = {}
					staffData['id'] = subject.id
					staffData['data'] = subject.data;
					return staffData
				}
			},
			getYinfuyingao() {
				return function() {
					if (!this.currentClef) {
						return []
					}
					return this.yinfuyingaos.find(item => item.name == this.currentClef.name).childData
				}
			}
		}
	}
</script>

<style>
	/deep/ uni-swiper .uni-swiper-wrapper {
		overflow-y: auto !important;
	}

	/deep/ uni-swiper-item {
		overflow-y: auto !important;
	}
</style>

<style lang="scss">
	@import "/static/colorui/main.css";
	@import "/static/colorui/icon.css";

	page {
		background-color: white;
	}

	.cu-form-group {
		justify-content: flex-start
	}

	.cu-form-group .title {
		padding-left: 30upx;
		padding-right: 0upx;
	}

	.cu-form-group+.cu-form-group {
		border-top: none;
	}

	.cu-bar-title {
		min-height: 50upx;
	}

	.cu-list.menu>.cu-item-error {
		justify-content: flex-start;
	}

	.exam-num-size {
		width: 16px;
		height: 18px;
	}

	.exam-time-size {
		width: 18px;
		height: 18px;
	}

	.option-title {
		font-weight: bold;
		margin-right: 5px;
		margin-left: 15px;
	}

	.fill-Blanks-title {
		font-weight: bold;
	}

	.fill-Blanks-input-bg {
		height: 30px;
		align-items: center;
		display: flex;
	}

	.radio-img-icon {
		width: 18px;
		height: 18px;
	}

	.stem-bg {
		flex-direction: column;
		flex-wrap: wrap;
		color: #333333;
		font-size: 15px;
	}

	.topic-type {
		padding: 2.5px;
		color: white;
		font-size: 12px;
		border-radius: 4px;
		margin-right: 8px;
	}

	.stem-text {}

	.underline {
		width: 200rpx;
		display: inline-block;
		border-bottom: 1px #cccccc solid;
		text-align: right;
	}

	.commit-bg {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		.commit-btn {
			background-color: $uni-bg-color-theme;
			border-radius: 10px;
			display: flex;
			height: 35px;
			width: 100px;
			color: white;
			align-items: center;
			justify-content: center;
		}
	}

	.answer-result {
		color: $uni-bg-color-theme;
		font-size: 17px;
		font-weight: bold;
	}

	.answer-result-error {
		color: rgb(238, 61, 61);
	}

	.commit-exam {
		width: 50px;
		height: 30px;
		background-color: $uni-bg-color-theme;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}

	.setupStaff-bg {
		width: 100vw;
		background-color: white;
		color: gray;
		padding: 15px 0px 0px 0px;
		align-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	.back-staff-img {
		background-image: url('/static/question/Slice105.png');
		background-size: 142rpx 142rpx;
	}

	.dropdown {
		// box-sizing: border-box;
		height: 23px;
		font-size: 12px;
		color: var(--light, #333);
		padding: 4px 8px;
		display: flex;
		align-items: center;
		padding-left: 8px !important;
		padding-right: 8px !important;
		// font-weight: 600;
		justify-content: space-between;
		background-color: $uni-bg-color-grey;
		margin: 10px 0px;
		border-radius: 4px;
		border: 1px #C0C0C0 solid;
	}

	.dropdown-title {
		// display: block;
		font-size: 12px;
		color: $uni-text-color;
		// margin-right: 30px;
	}

	// .sanjiao {
	// 	width: 0;
	// 	height: 0;
	// 	border-left: 5px solid transparent;
	// 	border-right: 5px solid transparent;
	// 	border-top: 5px solid #333;
	// 	border-bottom: 5px solid transparent;
	// 	transform: translateY(3px);
	// 	background-color: $uni-text-color-light;
	// }

	.dropdown1 {
		position: absolute;
		width: 50px;
		margin-left: 10px;
		z-index: 100;
		display: block;
		top: 530rpx;
		overflow: auto;
		height: 162px;
		border: 1px #C0C0C0 solid;
	}

	.dropdown1-1 {
		position: absolute;
		width: 50px;
		margin-left: 10px;
		z-index: 100;
		display: block;
		top: 590rpx;
		overflow: auto;
		height: 162px;
		border: 1px #C0C0C0 solid;
	}

	.dropdown1-mask {
		top: 0;
		left: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 100;
		pointer-events: auto;
	}

	.ul {
		width: 50px;
		position: relative;
		z-index: 101;
		list-style: none;
		border-radius: 2px;
		background-color: #F8F8F8;
		padding-left: 0;
		box-shadow: 3px 3px 5px hsl(0deg 0% 48% / 20%);
		transition: all .2s;
		height: 0;
		overflow: hidden;
	}

	.li {
		box-sizing: border-box;
		color: $uni-text-color;
		height: 30px;
		border-bottom: 1px solid #E4E4E4;
		font-size: 12px;
		line-height: 30px;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-left: 15px !important;
		padding-right: 15px !important;
		background-color: $uni-bg-color;
	}

	.show {
		height: 162px;
	}

	.show-1 {
		height: 162px;
	}

	.yinfu-item-bg {
		height: calc(70px * 3);
	}

	.yinfu-item {
		width: calc(100vw / 7);
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.yinfu-item-image {
		width: 40px;
		height: 40px;
		border-radius: 5px;
		border: 1px solid #C0C0C0;
	}
	
	.yinfuyingao-item {
		width: calc(100vw / 7);
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.yinfu-top-bg {
		height: 40px;
		display: flex;
		justify-content: space-around;
	}

	.yinfu-top-item {
		padding: 2.5px 5px;
		border-radius: 8px;
		border: 1px solid #C0C0C0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.yinfu-top-item-select {
		color: white;
		background-color: $uni-bg-color-theme;
	}

	.yinfu-bottom-bg {
		height: 40px;
		display: flex;
		justify-content: space-around;
	}

	.yinfu-bottom-item {
		padding: 5px 10px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		color: white;
		background-color: $uni-bg-color-theme;
	}
</style>
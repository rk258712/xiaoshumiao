<template>
	<view @click="clickStaff" class="staff" :msg="valueChangeSign" :change:msg="staff.valueChange" v-if="componentData != null"
		:id="'staff' + componentData.id"></view>
</template>

<script>
	export default {
		// 声明组件名
		name: "Staff",
		data() {
			return {
				valueChangeSign: "",
				componentData: this.data
			}
		},
		props: {
			data: {
				data: [Object],
				required: true,
				default: null
			}
		},
		watch: {
			componentData: {
				handler(newValue, oldValue) {
					console.log('监听到逻辑层数据发生改变，开始发送数据：')
					console.log(JSON.stringify(newValue))
					this.valueChangeSign = [new Date().getTime(), newValue];
				},
				deep: true // 深度监听父组件传过来对象变化
			}
		},
		created() {
			this.valueChangeSign = [new Date().getTime(), this.data];
		},
		methods: {
			setClef(e) {
				this.componentData.clef = e
			},
			setTimeSignature(e) {
				this.componentData.timeSignature = e
			},
			setKeySignature(e) {
				this.componentData.keySignature = e
			},
			addLine() {

			},
			clickStaff(){
				this.$emit('clickStaff');
			}
		}
	}
</script>

<script module="staff" lang="renderjs">
	import Vex from "vexflow";
	const {
		Renderer,
		Stave,
		StaveNote,
		Accidental,
		Articulation,
		Beam,
		Formatter,
		Dot,
		StaveTie,
		StaveHairpin
	} = Vex.Flow;
	const clefMap = {
		'1001': 'treble',
		'1002': 'alto',
		'1003': 'tenor',
		'1004': 'bass'
	}
	export default {
		data() {
			return {
				viewData: null,
				screenWidth: 0,
				renderer: null,
				context: null
			}
		},
		mounted() {
			this.initRanderer()
		},
		methods: {
			initRanderer() {
				if (this.viewData == null || this.renderer != null) {
					return
				}
				let id = 'staff' + this.viewData.id
				const div = document.getElementById(id);
				this.renderer = new Renderer(div, Renderer.Backends.SVG);

				this.screenWidth = div.clientWidth;
				// this.screenWidth = document.documentElement.clientWidth

				this.context = this.renderer.getContext();

				let stave = new Stave(0, 0, this.screenWidth, {
					'space_above_staff_ln': 1
				});

				stave.setContext(this.context).draw();

				this.renderer.resize(this.screenWidth, stave.getHeight());

				let height = 60

				let svg = div.getElementsByTagName('svg');
				for (let index = 0; index < svg.length; index++) {
					svg[index].setAttribute("viewBox", "0,0," + svg[index].getBBox().width + "," + height + "")
					svg[index].setAttribute("style", `width: 100%; height:${height}px !important;`)
				}
			},
			valueChange(newVal, oldVal, ownerVm, vm) {
				let viewData = newVal[1];
				if (!viewData) {
					return
				}
				console.log('视图层接收到的数据：')
				console.log(JSON.stringify(viewData))
				this.viewData = viewData
				this.initRanderer()
				this.reDraw()
			},
			reDraw() {
				console.log('reDraw...')

				let data = this.viewData.data

				if (!data) {
					return
				}

				let y = 0
				let height = 0

				this.context.clear();

				let lines = 0

				for (let index in data) {
					let beam = data[index]

					let clef = ''
					let keySignature = ''
					let timeSignature = ''

					let lianyin = beam.lianyin || []
					let yanyin = beam.yanyin || []
					let jianqiang = beam.jianqiang || []
					let jianruo = beam.jianruo || []

					let allNote = []

					for (let flag in beam.pai) {
						let jie = beam.pai[flag].jie
						if (flag == 0) {
							// 第一个pai为谱号、调号、拍号信息
							for (let item of jie) {
								if (item.number < 2000) {
									clef = item.vexCode
								} else if (item.number < 3000) {
									keySignature = item.vexCode
								} else if (item.fz != 0 && item.fm != 0) {
									timeSignature = item.fz + '/' + item.fm
								}
							}

						} else {
							// 处理音符

							// stave.setEndBarType(Vex.Flow.Barline.type.DOUBLE);
							let maxPosition = 0
							let minPosition = 0

							let tempArr = []
							for (let note of jie) {
								let keys = []
								if (note.pitchs != undefined && note.pitchs.length != 0) {
									for (let item of note.pitchs) {
										keys.push(item.vexCode)
										if (maxPosition < item.position) {
											maxPosition = item.position
										}
										if (item.position < minPosition) {
											minPosition = item.position
										}
									}
								}else{
									keys.push('c/3')
								}
								
								// if (note.vexCode  == 'w' || note.vexCode  == 'h' || note.vexCode  == 'q'){
								// 	note.vexCode = '8'
								// }
								let duration = note.vexCode
								let staveNote = new StaveNote({
									keys: keys,
									duration: duration
								})

								// 1、变音
								let bianyin = note.bianyin
								if (bianyin) {
									staveNote.addModifier(new Accidental(bianyin.vexCode))
								}
								// 2、重音
								let zhongyin = note.zhongyin
								if (zhongyin) {
									staveNote.addModifier(new Articulation(zhongyin.vexCode))
								}
								// 3、断奏
								let duanzou = note.duanzou
								if (duanzou) {
									staveNote.addModifier(new Articulation(duanzou.vexCode))
								}

								let index = note.number - 4001;
								// 计算需要加几个附点
								let dotCount = parseInt(index / 7);
								while (0 < dotCount) {
									staveNote = this.dotted(staveNote)
									dotCount -= 1
								}

								tempArr.push(staveNote)
								allNote.push(staveNote)
							}

							let stave = new Stave(0, y, this.screenWidth);
							if (clef) {
								console.log(clef)
								stave.addClef(clef)
							}
							if (keySignature) {
								console.log(keySignature)
								stave.addKeySignature(keySignature);
							}
							if (timeSignature) {
								console.log(timeSignature)
								stave.addTimeSignature(timeSignature);
							}

							let difPosition = maxPosition - minPosition

							let topOffset = (maxPosition < 2 ? (5 - maxPosition) : 4)
							let bottomOffset = (minPosition < -2 ? 1 : 3)

							let totalPosition = difPosition + topOffset + bottomOffset

							// console.log(
							// 	`第${lines+1}行 maxPosition：${maxPosition} minPosition：${minPosition} difPosition：${difPosition} topOffset:${topOffset} bottomOffset:${bottomOffset} totalPosition:${totalPosition}`
							// 	)

							let offsetY = (maxPosition < 2 ? -(20 - maxPosition * 10) : (topOffset - 1) * 10)
							stave.setY(y + offsetY)

							stave.setContext(this.context).draw();

							// 4、连音
							// let beams = []
							// for (let item of lianyin) {
							// 	let startNo = item.startNo - 4
							// 	let endNo = item.endNo - 4
							// 	console.log('startNo:'+startNo+'endNo:'+endNo)
							// 	let notes = allNote.slice(startNo,endNo+1)
							// 	console.log(notes)
							// 	let beam = new Beam(notes)
							// 	beams.push(beam)
							// }
							const beams = Beam.generateBeams(tempArr);
							if (tempArr.length == 0)  {
								// Connect it to the rendering context and draw!
								stave.setContext(this.context).draw();
							}else{
								// Helper function to justify and draw a 4/4 voice
								Formatter.FormatAndDraw(this.context, stave, tempArr);
							}

							// Draw the beams and stems.
							beams.forEach((b) => {
								b.setContext(this.context).draw();
							});

							let tempHeight = totalPosition * 10

							y += tempHeight

							height += tempHeight

							lines += 1
						}
					}

					// 5、延音
					let ties = []
					for (let item of yanyin) {
						let startNo = item.startNo - 4
						let endNo = item.endNo - 4
						let tie = new StaveTie({
							first_note: allNote[startNo],
							last_note: allNote[endNo],
							first_indices: [0],
							last_indices: [0],
						})
						ties.push(tie)
					}
					ties.forEach((t) => {
						t.setContext(this.context).draw();
					});

					// 6、渐强、渐弱
					for (let item of jianqiang) {
						let startNo = item.startNo - 4
						let endNo = item.endNo - 4
						if (0 < startNo) {
							this.drawHairpin(allNote[startNo], allNote[endNo], this.context, 1)
						}
					}
					for (let item of jianruo) {
						let startNo = item.startNo - 4
						let endNo = item.endNo - 4
						if (0 < startNo) {
							this.drawHairpin(allNote[startNo], allNote[endNo], this.context, 2)
						}
					}
				}

				console.log('五线谱行数：' + lines)

				let id = 'staff' + this.viewData.id
				const div = document.getElementById(id);
				let svg = div.getElementsByTagName('svg');
				if (height < 90) {
					height = 90
				}
				for (let index = 0; index < svg.length; index++) {
					svg[index].setAttribute("viewBox", "0,0," + svg[index].getBBox().width + "," + height + "")
					svg[index].setAttribute("style", `width: 100%; height:${height}px !important;`)
				}
			},
			// Helper function.
			dotted(staveNote) {
				Dot.buildAndAttach([staveNote]);
				return staveNote;
			},
			drawHairpin(first_note, last_note, ctx, type) {
				const hairpin = new StaveHairpin({
					first_note,
					last_note
				}, type);
				hairpin.setContext(ctx);
				hairpin.draw();
			}
		}
	}
</script>

<style>
	.staff {
		flex: 1;
		width: 100%;
		height: 100%;
	}
</style>
<template>
	<view>
		<view @touchstart="propressMoveStart" @touchmove="propressMove" @touchend="propressMoveEnd"
			@touchcancel="interruptSpellCasting" style="height: 40px;" class="flex position-relative align-center">
			<!-- 中间的外层盒子高度设置 -->
			<view class="flex-1 rounded" style="  height: 3px; background-color: rgba(255,255,255,0.5)">
				<!-- 控制条的长度样式 -->
				<view style="background-color: #036EB8; height:3px;" :style="propressWidth"></view> <!-- 进度条的样式 -->
			</view>
			<view class="position-absolute rounded-circle" style="height: 15px; width:15px; background-color: #036EB8"
				:style="propressRound"></view>
			<!-- 父相子绝，这里是拉动原点 -->
		</view>
	</view>
</template>

<script>
	export default {
		inject: ['v'], //依赖注入,v:this
		data() {
			return {
				width: 0, //进度条的总宽度
				left: 0, //圆点
				moveStatus: false, //用户拖动进度条
				leftDistance:0,
			}
		},
		props: {
			curTime: 0, //当前时间值在变化
			duration: 0 //总时长
		},

		created() {
			if (!this.v.fullScreenStatus) {
				this.leftDistance=44
				this.width = this.v.windowWidth - 44 - 44 - 80 - 15; //232px,44是两边按钮的图标大小,80是文字大小
			}else{
				this.leftDistance=15
				this.width = this.v.windowHeight - 30 - 15; //232px,44是两边按钮的图标大小,80是文字大小
				
			}



			this.active()
		},
		//计算属性
		computed: {
			propressWidth() {
				return `width:${this.left}px` //这里是left，不是width
			},
			propressRound() {
				return `left:${this.left}px`
			},

			currentTime() {
				return this.left == 0 ? 0 : (this.left / this.width) * this.duration
			}
		},

		//监听器
		watch: {
			//监听curTime属性
			curTime(newValue, oldValue) {
				if (!this.moveStatus) {
					this.active() //让left的值一直变化	
				}
			}
		},

		methods: {
			active() {
				this.left = this.duration == 0 ? 0 : (this.curTime / this.duration) * this.width //进度发生变化的计算
			}, //当前进度条的时间变化计算

			//e是api触摸事件默认的事件对象
			propressMoveStart(e) {
				this.moveStatus = true
				let pointPropress = e.changedTouches[0].screenX - this.leftDistance
				if (pointPropress > this.width) {
					pointPropress = this.width
					this.left = pointPropress
				} else {
					this.left = pointPropress
				}
				// console.log(e.changedTouches[0].screenX)//44-275距离长度
			}, //进度条拖动开始

			propressMoveEnd(e) {
				this.moveStatus = false
				//$emit子父通信
				this.$emit("valueChange", this.currentTime)
			}, //进度条拖动结束


			interruptSpellCasting(e) {
				this.propressMoveEnd(e)
			}, //突然被中断，比如打电话之类的

			propressMove(e) {
				this.moveStatus = true
				let propressRround = e.changedTouches[0].screenX - leftDistance

				if (propressRround < 0) {
					propressRround = 0
				} else if (propressRround > this.width) {
					propressRround = this.width
				} else {
					this.left = propressRround
				}
				this.$emit('update', this.currentTime)
			} //进度条移动
		}


	}
</script>

<style>
</style>

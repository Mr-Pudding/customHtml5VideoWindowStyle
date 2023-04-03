<template>
	<view>
		<view style="height: 40px;" class="flex position-relative align-center">
			<!-- 中间的外层盒子高度设置 -->
			<view class="flex-1 rounded" style="  height: 3px; background-color: rgba(255,255,255,0.5)">
				<!-- 控制条的长度样式 -->
				<view style="background-color: #036EB8; height:3px;" :style="propressWidth"></view> <!-- 进度条的样式 -->
			</view>
			<view class="position-absolute rounded-circle" style="height: 25rpx; width:25rpx; background-color: #036EB8"
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
				width: 0, //进度条
				left: 0, //圆点
			}
		},
		props: {
			curTime: 0, //当前时间值在变化
			duration: 0 //总时长
		},

		created() {
			this.width = this.v.windowWidth - 44 - 44 - 80; //232px,44是两边按钮的图标大小,80是文字大小

			this.active()
		},
		//计算属性
		computed: {
			propressWidth() {
				return `width:${this.left}px` //这里是left，不是width
			},
			propressRound() {
				return `left:${this.left}px`
			}
		},

		//监听器
		watch: {
			//监听curTime属性
			curTime(newValue, oldValue) {
				this.active() //让lefft的值一直变化
			}
		},

		methods: {
			active() {
				this.left = this.duration == 0 ? 0 : (this.curTime / this.duration) * this.width //进度发生变化的计算
			}
		}


	}
</script>

<style>
</style>

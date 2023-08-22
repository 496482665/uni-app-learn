<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
	<view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" circular>
			<swiper-item v-for="p in pictures" :key="p.id">
				<image :src="p.url"></image>
			</swiper-item>
		</swiper>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello uni-app',
				indicatorDots:true,
				autoplay:true,
				pictures: [
					{"id":1,"url":"/static/123.jpg"},
					{"id":2,"url":"/static/logo.png"},
					{"id":3,"url":"/static/e21a2a7fe1ea3f94469f8bb2bda79e3d.jgeg"},
				],
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

<template>
	<view style="background: #F5F5F5;">
		<uni-nav-bar :right-text="isedit?'完成':'编辑'" title="购物车" statusBar
		 :shadow="false" @click-right="isedit = !isedit" :fixed="true"></uni-nav-bar>
		 
		 <!-- 购物车为空 -->
		<view class="py-5 d-flex a-center j-center bg-white"
		v-if="disableSelectAll">
		 	<view class="iconfont icon-gouwuche text-light-muted" style="font-size: 50upx;"></view>
			<text class="text-light-muted mx-2">购物车还是为空</text>
			<view class="px-2 py-1 border border-light-secondary rounded"
			hover-class="bg-light-secondary">
				去逛逛
			</view>
		 </view>
		 
		 <!-- 购物车商品列表 -->
		 <view class="bg-white px-2" v-else>
			 <!-- 列表 -->
		 	<view class="d-flex a-center py-3 border-bottom border-light-secondary"
			v-for="(item,index) in list" :key="index">
		 		<label class="radio d-flex a-center j-center flex-shrink" 
				style="width: 80upx;height: 80upx;" @click="selectItem(index)">
		 			<radio :value="item.id" :checked="item.checked" 
					color="#FD6801"/>
		 		</label>
				
				<image :src="item.cover" 
				mode="widthFix" style="height: 150rpx;width: 150rpx;"
				class="border border-light-secondary rounded p-2 flex-shrink">
				</image>
				
				<view class="flex-1 d-flex flex-column pl-2">
					<view class="text-dark" style="font-size: 35upx;">
						{{item.title}}
					</view>
					<!-- 规格属性 -->
					<view class="d-flex text-light-muted mb-1"
					:class="isedit ? ' p-1 bg-light-secondary mb-2' : ''"
					@tap.stop="doShowPopup(index)">
						<text class="mr-1"
						v-for="(attr,attrIndex) in item.attrs"
						:key="attrIndex">{{attr.list[attr.selected].name}}</text>
						
						<view class="iconfont icon-bottom font ml-auto"
						v-if="isedit"></view>
					</view>
					<view class="mt-auto d-flex j-sb">
						<price>{{item.pprice}}</price>
						<view class="a-self-end">
							<uni-number-box :min="item.minnum" 
							:value="item.num" :max="item.maxnum"
							@change="changeNum($event,item,index)">
							</uni-number-box>
						</view>
					</view>
				</view>
				
		 	</view>
		 </view>
		 <!-- 占位 -->
		 <view style="height: 100upx;"></view>
		 <!-- 合计 -->
		 <view class="d-flex a-center position-fixed left-0 right-0 bottom-0 border-top border-light-secondary a-stretch" style="height: 100upx;z-index: 1000;">
			 <label class="radio d-flex a-center j-center flex-shrink"
			 style="width: 120upx;" @click="doSelectAll">
			 	<radio color="#FD6801" :checked="checkedAll" :disabled="disableSelectAll"/>
			 </label>
			 <template v-if="!isedit">
			 	<view class="flex-1 d-flex a-center j-center font-md">
			 		合计 <price>{{totalPrice}}</price>
			 	</view>
			 	<view class="flex-1 d-flex a-center j-center main-bg-color text-white font-md" hover-class="main-bg-hover-color"> 结算</view>
			 </template>
			 <template v-else>
			 	<view class="flex-1 d-flex a-center j-center font-md main-bg-color text-white">
			 		移入收藏
			 	</view>
			 	<view class="flex-1 d-flex a-center j-center bg-danger text-white font-md" hover-class="main-bg-hover-color" @tap="doDelGoods">删除</view>
			 </template>
		 </view>
		 
		 <!-- 属性筛选框 -->
		 <common-popup :popupClass="popupShow" @hide="doHidePopup">
		 	<view class="d-flex a-center" style="height: 275rpx;">
		 		<image src="../../static/images/demo/list/1.jpg" mode="widthFix"
		 		style="height: 180rpx;width: 180rpx;" class="border rounded"></image>
		 		<view class="pl-2">
		 			<price priceSize="font-lg" unitSize="font">2365</price>
		 			<view class="d-block">
		 				<text class="mr-1"
		 				v-for="(attr,attrIndex) in popupData.attrs"
		 				:key="attrIndex">{{attr.list[attr.selected].name}}</text>
		 			</view>
		 		</view>
		 	</view>
		 	<scroll-view scroll-y class="w-100" style="height: 660rpx;">
		 		<card :headTitle="item.title" :headTitleWeight="false" 
		 		:headBorderBottom="false" :key="index"
		 		v-for="(item,index) in popupData.attrs">
		 			<zcm-radio-group :label="item" 
		 			:selected.sync='item.selected'></zcm-radio-group>
		 		</card>
		 		<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
		 			<text>购买数量</text>
		 			<uni-number-box :min="1" :value="popupData.num" @change="popupData.num = $event"></uni-number-box>
		 		</view>
		 	</scroll-view>
		 	 <view class="main-bg-color text-white font-md d-flex a-center j-center" hover-class="main-bg-hover-color" style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" @tap.stop="doHidePopup">
		 	 	确定
		 	 </view>
		 </common-popup>
		 
		 
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import price from "@/components/common/price.vue"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import card from "@/components/common/card.vue"
	import zcmRadioGroup from "@/components/common/radio-group.vue"
	import commonPopup from "@/components/common/common-popup.vue"
	import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
	export default {
		components: {
			uniNavBar,
			price,
			uniNumberBox,
			card,
			zcmRadioGroup,
			commonPopup
		},
		data() {
			return {
				isedit: false,
			}
		},
		computed: {
			...mapState({
				list:state=>state.cart.list,
				popupShow:state=>state.cart.popupShow
			}),
			...mapGetters([
				'checkedAll',
				'totalPrice',
				'disableSelectAll',
				'popupData'
			])
		},
		methods:{
			...mapActions([
				'doSelectAll',
				'doDelGoods',
				'doShowPopup',
				'doHidePopup'
			]),
			...mapMutations([
				'selectItem'
			]),
			changeNum(e,item,index){
				item.num = e
			}
		}
	}
</script>

<style>

</style>

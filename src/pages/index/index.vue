<template>
  <view class="content">
    <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <view class="iconfont icon-icon-test24"></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMemberStore } from "@/stores/modules/member";
const memberStore = useMemberStore();
const { safeAreaInsets } = uni.getSystemInfoSync();
let ddd: UniHelper.Ad;
</script>

<style lang="scss">
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
  flex-direction: column;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

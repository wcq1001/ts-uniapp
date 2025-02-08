<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <view class="title" style="align-self: center">{{
        memberStore.title
        }}</view>
      <text class="title">区分开发页和普通页 </text>
      <text class="title">开发页为在tabBar中注册的页面，跳转该页无法返回上一页
      </text>
      <text class="title">普通页只在pages中注册，可以返回上一页 </text>
      <text class="title">有时候需要跳转到开发页，但是能再返回上一级，此时只需要将功能代码封装到一个页面，在开发页和普通页中引用他，这样就免去了复制两份代码</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMemberStore } from "@/stores/modules/member";
const memberStore = useMemberStore();
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
  flex-direction: column;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

<template>
  <view class="my">
    <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">my</view>
  </view>
</template>

<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="sass" scoped></style>
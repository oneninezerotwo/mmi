<template>
  <div id="loadingToast" style="opacity: 0;display: none;" :class="{'loadingShow':isLoading}">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">数据加载中</p>
    </div>
  </div>
</template>
<style lang="scss">
    @import url(../assets/css/loading.css);
</style>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend( {
  computed: {
    // 实时计算isFixed的状态值给v层进行判断
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
});
</script>
<template>
  <footer
    data-v-7c04fb90
    data-v-bc186c1a
    class="app-bottom-navigator-wrapper app-shell-footer"
    style
  >
    <div data-v-7c04fb90 class="fill-height box-flex align-center">
      <a
        :class="{'on':tab==idx}"
        data-v-7c04fb90
        class="flex"
        data-stat-id="5b0ff65d95a1f2de"
        @click="active(idx)"
        v-for="(t,idx) in tabs" 
        :key="idx"
      >
        <i data-v-7c04fb90 :class="t.className"></i>
        <span data-v-7c04fb90 v-text="t.tab"></span>
        <!---->
      </a>
    
    </div>
    <div data-v-7c04fb90 class="safe-area-inset"></div>
  </footer>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          tab: '首页',
          url: 'home',
          className: 'image-icons app-bottom-icon icon-home',
        },
        {
          tab: '分类',
          url: 'list',
          className: 'image-icons app-bottom-icon icon-category',
        },
        {
          tab: '购物车',
          url: 'cart',
          className: 'image-icons app-bottom-icon icon-cart',
        },
        {
          tab: '我的',
          url: 'order',
          className: 'image-icons app-bottom-icon icon-user',
        },
      ],
      tab: 0,
    };
  },
  methods: {
    active(currIdx) {
    //   console.log(currIdx);
      this.tab = currIdx;
      this.$router.push({
          name: this.tabs[currIdx].url,
      });
    },
  },
});
</script>






















<style lang="scss" scoped>
.app-bottom-navigator-wrapper .box-flex[data-v-7c04fb90] {
  height: 52px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.app-bottom-navigator-wrapper .box-flex[data-v-7c04fb90][data-v-40ab164b] {
  height: 52px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  -webkit-transition: -webkit-transform 0.2s ease-out;
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
</style>

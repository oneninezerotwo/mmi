<template>
  <footer
    data-v-7c04fb90
    data-v-bc186c1a
    class="app-bottom-navigator-wrapper app-shell-footer"
    style
  >
    <div data-v-7c04fb90 class="fill-height box-flex align-center">
      <a
        data-v-7c04fb90
        class="flex"
        data-stat-id="5b0ff65d95a1f2de"
        @click="active(idx)"
        v-for="(t,idx) in tabs"
        :class="{'on':t.url==url_name}"
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
      tab: -1,
      url_name:'',
    };
  },
  watch: {//监听路由变化
  '$route':'getUrlName'
  },
  methods: {
    active(currIdx) {
    //   console.log(currIdx);
      this.tab = currIdx;
      this.$router.push({
          name: this.tabs[currIdx].url,
      });
      this.getUrlName();
    },
    getUrlName(){
      
      this.url_name=this.$route.path.slice(1);//截取掉 "/"
      if(!this.url_name){ //如果url路径为空,则显示首页按钮高亮
        this.url_name='home';
      }
      console.log(this.url_name)
      //获取列表页传过来的id
    }
  },

   mounted() {
      this.getUrlName();
      // console.log(this.$route.params )
    }
   
 
});
</script>


<style lang="scss" scoped>
.app-bottom-navigator-wrapper .box-flex{
    height: 52px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    -webkit-transition: -webkit-transform 0.2s ease-out;
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    -webkit-box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
        z-index: 1;
}
</style>






















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

<template>
  <div data-v-bc186c1a class="app-shell app-shell-bottom-navigation">
    <header data-v-266b4a99 data-v-bc186c1a class="app-header-wrapper app-shell-header" style>
      <div data-v-266b4a99 class="app-header-left">
        <a
          data-v-266b4a99
          class="app-header-item"
          data-stat-id="978dac80bd9946f9"
          onclick="_msq.push(['trackEvent', 'aa6b36fbc8a2bd55-978dac80bd9946f9', '', 'pcpid', '']);"
        >
          <i data-v-266b4a99 class="image-icons app-header-icon icon-back"></i>
        </a>
        <!---->
      </div>
      <div data-v-266b4a99 class="app-header-middle">
        <div data-v-266b4a99 class="app-header-title">购物车</div>
      </div>
      <div data-v-266b4a99 class="app-header-right">
        <a
          data-v-266b4a99
          class="app-header-item"
          data-stat-id="5300f1466caf2f56"
          onclick="_msq.push(['trackEvent', 'aa6b36fbc8a2bd55-5300f1466caf2f56', '', 'pcpid', '']);"
        >
          <i data-v-266b4a99 class="image-icons app-header-icon icon-search"></i>
        </a>
      </div>
    </header>
    <div data-v-bc186c1a class="app-view-wrapper">
      <!---->
      <div
        data-v-5c6b2c62
        data-v-bc186c1a
        class="container fluid app-view app-view-with-header app-view-with-footer"
      >
        <!---->
        <div data-v-5c6b2c62 class="page-wrap">
          <div data-v-5c6b2c62 class="nologin">
            <a
              data-v-5c6b2c62
              class="box-flex align-center justify-space-between"
              data-stat-id="048cb8372086afea"
              onclick="_msq.push(['trackEvent', 'df5f1a9f995c0818-048cb8372086afea', '', 'pcpid', '']);"
            >
              <span data-v-5c6b2c62 class="flex">登录后享受更多优惠</span>
              <em data-v-5c6b2c62 class="flex">去登录</em>
            </a>
          </div>
          <div data-v-5c6b2c62 class="noitems">
            <a
              data-v-5c6b2c62
              href="/"
              class="router-link-active"
              data-stat-id="4e4dee2019aeff31"
              onclick="_msq.push(['trackEvent', 'df5f1a9f995c0818-4e4dee2019aeff31', '/', 'pcpid', '']);"
            >
              <span data-v-5c6b2c62>购物车还是空的</span>
              <em data-v-5c6b2c62>去逛逛</em>
            </a>
          </div>
          <!---->
          <div data-v-c1eaedb8 data-v-5c6b2c62 class="recommend-box space-top">
            <div data-v-c1eaedb8 class="recommend-top-img">
              <img
                data-v-c1eaedb8
                data-src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
                src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
                lazy="loaded"
              >
            </div>
            <div
              data-v-c1eaedb8
              class="recommend-list layout row wrap align-center align-content-start justify-space-between J_linksign-customize"
            >
              <div 
                v-for="(s,index) in cart"
                :key="index"
                data-v-c1eaedb8
                class="goods-item"
                data-stat-id="f33d328c2592e893"
                onclick="_msq.push(['trackEvent', 'df5f1a9f995c0818-f33d328c2592e893', '', 'pcpid', '']);"
              >
                <a
                  data-v-c1eaedb8
                  data-log_code="recom_list_0-1#eid=15:12:0:0:0:0:0:0:0:0&amp;tid=BlankRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=list&amp;pid=8699"
                  class="exposure"
                  data-stat-id="d782d56b8c838b79"
                  onclick="_msq.push(['trackEvent', 'df5f1a9f995c0818-d782d56b8c838b79', '', 'pcpid', 'recom_list_0-1#eid=15:12:0:0:0:0:0:0:0:0&amp;tid=BlankRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=list&amp;pid=8699']);"
                >
                  <div data-v-c1eaedb8 class="goods-img-box">
                    <img
                      data-v-c1eaedb8
                      class="lazy"
                      data-src="//i8.mifile.cn/b2c-mimall-media/8f00fec6c25bbd073d06f984eb54e7f2!360x360.jpg"
                      :src="s.image_url"
                      lazy="loaded"
                    >
                  </div>
                  <div data-v-c1eaedb8 class="goods-info">
                    <div data-v-c1eaedb8 class="goods-name no-wrap" v-text="s.name"></div>
                    <div data-v-c1eaedb8 class="goods-price price"  v-text="s.price">
                   </div>
                      <del data-v-c1eaedb8 class="price"  v-text="s.market_price"></del>
                    
                  </div>
                </a>
              </div>
             
             
            </div>
            <!---->
          </div>
        </div>
        <!---->
        <div data-v-3157529a data-v-5c6b2c62 class="insurance-pop">
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
    data(){
      return{
      cart:[]
    }
},
 created(){
   this.getCart();
},
methods:{
  async getCart(){
    
    const data = await this.$axios('https://www.easy-mock.com/mock/5cf660b4c51c246c3655bf97/example/cart');
    console.log(data)
  this.cart= data.data.data.recom_list
  }
}
})
</script>


<style lang="scss" scoped>
    @import url(../assets/css/index.css);
</style>
<style lang="scss" scoped>
  .nologin>a[data-v-5c6b2c62] {
    height: 1.04rem;
    padding: 0 .56rem 0 .32rem;
    position: relative;
    color: rgba(0,0,0,.54);
}
.nologin>a span[data-v-5c6b2c62] {
    font-size: .32rem;
    color: rgba(0,0,0,.87);
    display: block;
    text-align: left;
}
.nologin>a em[data-v-5c6b2c62] {
    font-style: normal;
    font-size: .24rem;
    text-align: right;
}
.flex {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
.noitems[data-v-5c6b2c62] {
    background: #ebebeb;
    padding: .2rem;
}
.noitems>a[data-v-5c6b2c62] {
    height: 1.44rem;
    font-size: .24rem;
    text-decoration: none;
    text-align: center;
}
.noitems>a span[data-v-5c6b2c62] {
    display: inline-block;
    line-height: .8rem;
    background: url(../assets/cart.jpg) no-repeat 0;
    background-size: auto 100%;
    padding: 0 .16rem 0 .96rem;
    color: rgba(0,0,0,.27);
}
.noitems>a em[data-v-5c6b2c62] {
    display: inline-block;
    border: 1px solid rgba(0,0,0,.15);
    box-sizing: border-box;
    height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    color: rgba(0,0,0,.87);
    font-style: normal;
}
</style>

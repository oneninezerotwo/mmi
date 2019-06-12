<template>
  <div id="app">
    
    <router-view/>
    <Footer/>
  </div>
</template>


<script lang="js">
import Footer from './components/Footer';
import Vue from 'vue';
export default Vue.extend({
  components: {
    Footer,
  },
});
</script>





<style lang="scss">
@import url(./assets/css/index.css);
@import url(./assets/css/list.css);
@import url(./assets/css/xmdetail.css);
  
html{
    font-size: 52.0833px;
}
</style>

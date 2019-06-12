<template>
  <div>
  <Mheader/>
  <!-- <Content/> -->
  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Mheader from '@/components/Mheader.vue';
// import Content from '@/components/Content.vue';
export default {
  name: 'home',
  components: {
    Mheader,
    // Content,
  },
};
</script>
<style lang="scss" scoped>
</style>

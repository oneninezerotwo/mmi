<template>
  <div  >
      shop list
  <ul>
      <li v-for="(item,index) in  datalist" :key='index' @click="a(item.uid)">
        {{item.name}}
      </li>
  </ul>
  </div>

</template>

<script>
export default {
  data(){
    return{
      datalist:[
        {
          name:'aaa',
          uid:95
        },
        {
          name:'bbb',
          uid:96
        }
      ],
    }
  },
  methods:{
    a(b){
      this.$router.push({ name:'detail',params:{id:b}})
    }
  }
}
</script>

<style lang='scss'>

</style>


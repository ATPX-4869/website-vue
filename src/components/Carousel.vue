<template>
  <div class="block">
    <el-carousel height="100vh">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img :src="item.img" alt="" class="images">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
          {id:0,img:require("../assets/img/c-0.png")},
          {id:1,img:require("../assets/img/c-1.png")},
          {id:2,img:require("../assets/img/c-2.png")},
          {id:3,img:require("../assets/img/c-3.jpg")},
          {id:4,img:require("../assets/img/c-4.png")},
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
    .images{
        width: 100%;
         height: auto;        
    }

 
</style>

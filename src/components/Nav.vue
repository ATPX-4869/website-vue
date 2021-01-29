<template>
  <div >
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        text-color="#fff"
        background-color="#545c64"
    >
      <el-menu-item class="item1" index="1">首页</el-menu-item>
      <el-menu-item index="2">分类</el-menu-item>
      <el-menu-item index="3">标签</el-menu-item>
      <el-menu-item index="4">归档</el-menu-item>
      <el-menu-item index="5">外链</el-menu-item>
      <el-menu-item index="6">关于博主</el-menu-item>
      <el-input
      class="input"
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input1"></el-input>
    </el-menu>


    
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      activeIndex: ""
    };
  },
  methods: {},
};
</script>

<style >
    .el-menu-demo{
        width: 100%;
    }

    .input{
        width: 200px;
        margin-left: 500px;

    }
    

    .el-menu.el-menu--horizontal{
        border-bottom: solid 1px rgba(0,0,0,0);
    }

    .el-icon-search:before{
        color: #545c64 ;
    }

    .item1{
        margin-left: 200px;
    }


  
</style>

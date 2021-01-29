<template>
  <el-container class="home-container">
    <el-header>
      
          <div class="header">
            <!-- 导航条 -->
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="rgba(0,0,0,0)"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">标签</el-menu-item>
            <el-menu-item index="4">归档</el-menu-item>
            <el-menu-item index="5">归档</el-menu-item>
          </el-menu>
        
          <!-- 搜索框 -->
          <el-input
            class="search"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input1"
          >
          </el-input>
          </div>
        
    </el-header>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input1: ""
    };
  },
  methods: {
    
  },
};
</script>

<style >
.home-container {
  width: 100%;
  height: 900px;
  background-image: url("../assets/img/header-back.png");
  background-size: cover;
  
  
}
.header {
  display: flex; 
  flex-direction: row; 
  height: 60px; 
  align-items: center; 
  justify-content: space-between; 
  padding: 0 8rem 0 8rem;
  
}

.el-menu-demo {
  width: 600px;
}

.el-textarea__inner,.el-input__inner{
        background: transparent;
        color: white;
   }

.search {
  width: 200px;
}

.el-menu.el-menu--horizontal{
  border-bottom: solid 1px rgba(0,0,0,0);
}

.el-input__inner::-webkit-input-placeholder {
        color: #fff;
    }

.el-icon-search:before{
  color: #fff;
}

</style>

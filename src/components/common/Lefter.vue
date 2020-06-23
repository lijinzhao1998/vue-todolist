<template>
  <el-row class="menu_page">
    <el-menu
      class="el-menu-vertical"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#409eff">
      <!--            el-submenu带有子菜单的菜单组-->
      <!--                el-menu-item直接是菜单项-->
      <!--            点击route-link，可以跳转到指定的url-->
      <router-link to="/appindex">
        <el-menu-item index="0">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <router-link to="/todoadd">
        <el-menu-item index="1">
          <i class="el-icon-edit"></i>
          <span slot="title">创建任务</span>
        </el-menu-item>
      </router-link>
      <router-link to="/todolist">
        <el-menu-item index="2">
          <i class="el-icon-tickets"></i>
          <span slot="title">全部任务</span>
        </el-menu-item>
      </router-link>
      <router-link to="/undolist">
        <el-menu-item index="3">
          <i class="el-icon-remove"></i>
          <span slot="title">未完成任务</span>
        </el-menu-item>
      </router-link>
      <router-link to="/donelist">
        <el-menu-item index="4">
          <i class="el-icon-success"></i>
          <span slot="title">已完成任务</span>
        </el-menu-item>
      </router-link>
      <router-link to="/userinfo">
        <el-menu-item index="5">
          <i class="el-icon-user"></i>
          <span slot="title">个人信息</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-row>
</template>

<script>
    export default {
        name: "Lefter",
        data(){
            return{

            };
        }
    }
</script>

<style scoped>
  .menu_page{
    position: fixed;
    top: 71px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
  }
  .el-menu{
    border: none;
  }
  .el-menu-vertical:not(.el-menu--collapse){
    width: 180px;
    min-height: 800px;

  }
  .el-menu-vertical{
    width: 35px;
  }
  .el-submenu .el-menu-item{
    min-width: 180px;
  }
  a{
    text-decoration: none;
  }
</style>

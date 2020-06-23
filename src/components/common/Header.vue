<template >
<header class="header">
  <el-row>
    <el-col :span="6" class="logo-container">
      <img src="../../assets/logo.png" class="logo"/>
      <span class="title">待办工作管理系统</span>
    </el-col>
    <el-col :span="6" class="user">
      <router-link to="/userinfo" style="margin: auto">
      <el-avatar src="http://img.qqzhi.com/uploads/2019-03-08/214121152.jpg"

      ></el-avatar>
      </router-link>
      <span>{{userInfo.userName}}</span>&nbsp;&nbsp;
      <el-link :underline="false" type="primary" @click="logout"><i class="el-icon-switch-button"></i>

      </el-link>
    </el-col>
  </el-row>
</header>
</template>

<script>
    export default {
        name: "Header",
        data:function () {
            return{
                userInfo:{
                    userId: '',
                    userLoginId:'',
                    userName: ''
                }
            }

        },
        created :function () {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
            console.log(this.userInfo.userid)
        },
      methods: {
            logout :function () {
                localStorage.removeItem('userInfo')
                this.$router.push('/')

            }

      }

    };
</script>

<style scoped>
  .header{
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 5px;
    background-color: #324057;
    color: #fff;
    border-bottom: 1px solid #324057;
  }
  .logo-container{
    line-height: 60px;
    min-width: 400px;
  }
  .logo{
    height: 50px;
    width: 50px;
    margin-right: 5px;
    vertical-align: middle;
    display: inline-block;
  }
  .title{
    vertical-align: middle;
    font-size: 22px;
    letter-spacing: 3px;
  }
  .user{
    line-height: 60px;
    text-align: right;
    float: right;
    padding-right: 20px;
  }

</style>

<template>

<div>
  <div style="font-weight: bold;font-size: 20px;margin-top: 20px">
    <span style="margin-left: 50%;margin-bottom: 100px">用户信息</span>
    <el-card class="userCard" shadow="always" style="width: 35%;height: 15%;margin-left: 25%;background-color: #cf9236;
 border-radius: 20px">
      <el-form
        :model="userInfo"
        ref="UserInfoForm">
        <el-avatar src="http://img.qqzhi.com/uploads/2019-03-08/214121152.jpg"></el-avatar>

        <el-form-item prop="userLoginId" style="margin-left: 30%">

          <el-col>
            用户ID：{{userInfo.userId}}
          </el-col>
        </el-form-item>

        <el-form-item prop="userName" style="margin-left: 30%">
          <el-col>
            用户名： {{userInfo.userName}}
          </el-col>
        </el-form-item>
        <el-form-item prop="userLoginId" style="margin-left: 30%">
          <el-col>
            登录账号： {{userInfo.userLoginId}}
          </el-col>
        </el-form-item>
        <el-form-item prop="useType">
          <el-col v-if="userInfo.useType == '1'" style="margin-left: 30%">
          用户权限：管理员
        </el-col>
        </el-form-item>
        <el-form-item prop="useType">
          <el-col v-if="userInfo.useType == '0'" style="margin-left: 30%">
            用户权限：普通用户
          </el-col>
        </el-form-item>




      </el-form>

    </el-card>

  </div>
</div>

</template>

<script>
    export default {
        name: "UserInfo",
        data:function () {
            return{
                userInfo:{
                    userId: '',
                    userLoginId:'',
                    userName: '',
                    useType:''
                }
            }

        },
        created :function () {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
            console.log(this.userInfo.userName)
        }
    }


</script>

<style scoped>

</style>

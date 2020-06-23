<template>

<div>
  <div style="font-weight: bold;font-size: 20px;margin-top: 20px">
    <span>用户信息</span>
    <el-card class="userCard" shadow="always">
      <el-form
        :model="userInfo"
        ref="UserInfoForm">
        <el-form-item prop="userLoginId">
          <el-col>
            用户ID：{{userInfo.userId}}
          </el-col>
        </el-form-item>

        <el-form-item prop="userName">
          <el-col>
            用户名： {{userInfo.userName}}
          </el-col>
        </el-form-item>
        <el-form-item prop="userLoginId">
          <el-col>
            登录账号： {{userInfo.userLoginId}}
          </el-col>
        </el-form-item>
        <el-form-item prop="userType">
          <el-col v-if="userInfo.userType = 1">
          用户权限：管理员
        </el-col>
        </el-form-item>
        <el-form-item prop="userType">
          <el-col v-if="userInfo.userType = 0">
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
                    userType:''
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

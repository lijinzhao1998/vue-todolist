<template>

<div>
  <div style="font-weight: bold;font-size: 20px;margin-top: 20px">
    <span>UserInfo</span>
    <el-card class="userCard" shadow="always">
      <el-form>
        <el-col>
          用户名： {{userInfo.userName}}
        </el-col>
        <el-col>
          用户id：{{userInfo.userId}}
        </el-col>
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
                    userName: ''
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

<template>
<div class="login">
  <el-card class="loginCard" shadow="always">
    <el-form :model="mymodel"
             :rules="myRule"
             ref="loginForm">
      <h2 STYLE="text-align: center">任务管理系统</h2>
      <el-form-item prop="userLoginId">
        <el-input type="text"
                  v-model="mymodel.userLoginId"
                  auto-complete="off"
                  placeholder="登录账号">

        </el-input>
      </el-form-item>
      <el-form-item prop="currentPassWord">
        <el-input type="password"
                  v-model="mymodel.currentPassWord"
                  auto-complete="off"
                  placeholder="登录密码">

        </el-input>
      </el-form-item>
      <el-form-item></el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="login('loginForm')"
          style="width: 100%">
          登录
        </el-button>
      </el-form-item>

    </el-form>

  </el-card>
</div>
</template>

<script>
    export default {
        name: "login",
        data:function(){
            return{
                mymodel:{
                    userLoginId:'',
                    currentPassWord:''
                },
                myRule:{
                    userLoginId: [{required:true,message:"请输入登录账号",trigger:'blur'},],
                    currentPassWord: [{required: true,message: "请输入登录密码",trigger:'blur'},]

                }
            }
        },
        methods:{
            login:function (formName) {
                this.$refs[formName].validate((valid) =>{
                    if(valid){
                        this.mymodel= {
                            userId: "11111",
                            userName: "测试用户"
                        }
                        localStorage.setItem("userInfo",JSON.stringify(this.mymodel));
                        this.$router.push('/AppIndex')
                    }else{
                        this.$message({
                            message:'用户名和密码不能为空！',
                            type:'error'
                        })
                        return false;
                    }
                });

            }
        }
    }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-image: url("../../../assets/01.jpg");
  }
  .loginCard{
    position: relative;
    top: 150px;
    width: 500px;
    margin: 0 auto;
    padding:  0 20px;
  }

</style>

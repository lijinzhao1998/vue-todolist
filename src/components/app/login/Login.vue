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
        <el-form-item>
        <el-button
          type="text"
          @click="dialogVisible = true">没有用户？注册</el-button>
      </el-form-item>


    </el-form>

  </el-card>
  <el-dialog
    title="注册用户"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"

    >
    <img src="../../../assets/01.jpg" style="width: 100%"/>
    <el-form
      :model="myUser"
      :rules="userRules"
      ref="RegisterForm"

    >

      <el-form-item prop="userLoginId" style="width: 50%;margin-left: 10%">
        <label>账号</label>
        <el-input type="text"
                  v-model="myUser.userLoginId"
                  auto-complete="off"
                  placeholder="登录账号">

        </el-input>
      </el-form-item>
      <el-form-item prop="currentPassWord" style="width: 50%;margin-left: 10%" >
        <label>密码</label>
        <el-input type="password"
                  v-model="myUser.currentPassWord"
                  auto-complete="off"
                  placeholder="登录密码">

        </el-input>
      </el-form-item>
      <el-form-item prop="userName" style="width: 50%;margin-left: 10%">
        <label>昵称</label>
        <el-input type="text"
                  v-model="myUser.userName"
                  auto-complete="off"
                  placeholder="用户名">
        </el-input>
      </el-form-item>
    </el-form>

    <el-button style="margin-left: 20%" type="primary" @click="addUser()">确 定</el-button>
    <el-button style="margin-left: 20%" @click="dialogVisible = false">取 消</el-button>


  </el-dialog>

</div>
</template>

<script>
    export default {
        name: "login",
        data:function(){
            return{
                dialogVisible: false,
                mymodel:{
                    userLoginId:'',
                    currentPassWord:'',
                    useType:'0',
                    userName:'',
                    userId:''
                },
                myUser:{
                    userLoginId:'',
                    currentPassWord:'',
                    useType:'0',
                    userName:'',
                    userId:''
                },
                myRule:{
                    userLoginId: [{required:true,message:"请输入登录账号",trigger:'blur'},],
                    currentPassWord: [{required: true,message: "请输入登录密码",trigger:'blur'},]

                },
                userRules:{
                    userLoginId: [{required:true,message:"请输入登录账号",trigger:'blur'},],
                    currentPassWord: [{required: true,message: "请输入登录密码",trigger:'blur'},],
                    userName:[{required: true,message: "请输入登录密码",trigger:'blur'},]
                }

            }
        },
        methods:{
            addUser:function(){
                this.$axios.post('/register',this.myUser).then(res =>{
                    if(res.data != null){
                        this.$message({
                            message:'注册成功',
                            type:'success'
                        })
                        this.dialogVisible = false;

                    }else{
                        this.$message({
                            message:'注册失败',
                            type:'error'
                        })

                    }
                })


            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            login:function (formName) {
                this.$refs[formName].validate((valid) =>{
                    if(valid){


                         //到后台验证用户
                        this.$axios.post('/login',this.mymodel).then(res =>{
                            if(res.data != "404"){
                                console.log(res.data)
                                this.mymodel = res.data
                                localStorage.setItem("userInfo",JSON.stringify(this.mymodel));
                                this.$router.push('/AppIndex')
                            }else{
                                this.$message({
                                    message: '用户名或密码错误，请重新输入',
                                    type: 'error'
                                })
                                this.$router.push('/login')
                            }
                        })


                      /* this.mymodel= {
                            userId: "11111",
                            userName: "测试用户"
                        }
                        localStorage.setItem("userInfo",JSON.stringify(this.mymodel));
                        this.$router.push('/AppIndex')*/
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

<template>
    <div>
        <el-card style="margin-top:10%;margin-left: 30%;width: 400px" shadow="always">
           <div slot="header" class="clearfix">
               <span>添加任务</span>
           </div>
            <el-form
                :model="mymodel"
                :rules="myrule"
                ref="myform">
                <el-form-item label="任务名称" required prop="itemName">
                    <el-col :span="15">
                        <el-input
                            type="text"
                            v-model="mymodel.itemName">
                        </el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="任务日期" required prop="itemDate">
                    <el-col :span="15">
                        <el-date-picker
                            v-model="mymodel.itemDate"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-col>
                </el-form-item>
            </el-form>
            <div style="width: 100%;text-align: center">
                <el-button
                    type="primary"
                    size="mini"
                    @click="onSave('myform')">添加
                </el-button>
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "TodoAdd",
        data:function () {
            return{
                mymodel:{
                    userId:"",
                    itemId:"",
                    itemName:"",
                    itemDate:"",
                    currentStatus:0
                },
                myrule: {
                    itemName: [{
                        required:true,message:'任务名称不能为空',trigger: 'blur'
                    },],
                    itemDate: [{
                        required:true,message:'任务日期不能为空',trigger: 'blur'
                    },]
                }
            }
        },
        methods:{
            onSave:function (formName) {

                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        const userInfo=JSON.parse(localStorage.getItem('userInfo'))
                        let todo ={
                            userId:userInfo.userId,
                            itemId: '',
                            itemName:this.mymodel.itemName,
                            itemDate:this.mymodel.itemDate,
                            currentStatus: 0
                        }
                        this.$axios.post("/todos",todo).then(res=>{
                            console.log(res.data)
                            this.$message({
                                message:'添加成功',
                                type:'success'
                            })
                            this.$router.push('/todolist')
                        })
                    }else{
                        this.$message({
                            message:'任务名称或日期不能为空！',
                            type:'error'
                        })
                        return false;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <div
          style="font-weight: bold;font-size: xx-large;font-family: 'Adobe 仿宋 Std R'">
            全部任务列表
            &nbsp; &nbsp; &nbsp; &nbsp;
            <el-button
                size="mini"
                plain type="primary"
                @click="onAdd()">
                添加任务
            </el-button>
        </div>
        <div style="width: 90%">
            <el-divider></el-divider>
        </div>
        <el-table
            :data="todos"
            :stripe="true"
            style="width: 90%">
            <el-table-column
                type="index"
                label=""
                align="center"
                width="60">
            </el-table-column>
            <el-table-column
                prop="itemName"
                label="任务名称">
            </el-table-column>
            <el-table-column
                    prop="itemDate"
                    label="任务时间"
                    width="200">
                <template slot-scope="scope">
                    <span v-text="scope.row.itemDate.substr(0,10)"></span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="currentStatus"
                    label="状态"
                    align="center"
                    width="200">
                <template slot-scope="scope">
                    <span v-if="scope.row.currentStatus=='0'">
                        <el-button size="mini"  type="primary" circle icon="el-icon-minus"></el-button>
                    </span>
                    <span v-if="scope.row.currentStatus=='1'">
                        <el-button size="mini" type="success" circle icon="el-icon-check"></el-button>
                    </span>
                </template>
            </el-table-column>
            <el-table-column
                prop=""
                label="操作"
                align="center"
                width="200">
                <template slot-scope="scope">
               <span v-if="scope.row.currentStatus=='0'">
                        <el-button size="mini" plain type=" success"  @click="onEdit(scope.$index)">完成</el-button>
                    </span>
                <span v-if="scope.row.currentStatus=='1'">
                        <el-button size="mini" disabled plain type=" success"  @click="onEdit(scope.$index)">完成</el-button>
                    </span>
                &nbsp;
                <span v-if="scope.row.currentStatus=='0'">
                        <el-button size="mini"
                                   disabled
                                   plain type="primary"
                                   @click="onReset(scope.$index)">重启</el-button>
                    </span>
                <span v-if="scope.row.currentStatus=='1'">
                        <el-button size="mini"
                                   plain type=" primary"
                                   @click="onReset(scope.$index)">重启</el-button>
                    </span>
                &nbsp;
                <el-button size="mini"
                           plain type="danger"
                           @click="onDelete(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        data:function () {
            return{
                todos:[

                ]
            }
        },
        mounted() {
            const  userInfo=JSON.parse(localStorage.getItem('userInfo'))
            const params={
                userId:userInfo.userId,
                currentStatus: ''
            };
            // headers:{token:token}
            // {params:params,headers:{token:token}}
            this.$axios.get("/todos",{params:params}).then(res=>{
                console.log(res.data)
                this.todos=res.data
            })
        },
        methods:{
            onAdd:function () {
                this.$router.push('/todoadd')
            },
            onEdit:function (index) {
                let todo = this.todos[index]
                todo.currentStatus = 1
                this.$axios.put("/todos",todo).then(res=>{
                    this.$message({
                        message:'修改成功',
                        type:'success'
                    })
                    this.todos.splice(index,1,res.data)
                })
            },
            onReset:function (index) {
                let todo = this.todos[index]
                todo.currentStatus = 0
                this.$axios.put("/todos",todo).then(res=>{
                    this.$message({
                        message:'修改成功',
                        type:'success'
                    })
                    this.todos.splice(index,1,res.data)
                })
            },
            onDelete:function (index) {
                this.$axios.delete("/todos/"+this.todos[index].itemId).then(res=>{
                    if(res.data == '200'){
                        this.$message('删除成功')
                        this.todos.splice(index,1)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>

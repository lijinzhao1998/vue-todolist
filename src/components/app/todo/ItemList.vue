<template>
    <div>
    <div  style="font-weight: bold;font-size: xx-large;font-family: 'Adobe 仿宋 Std R'">
<!--        使用props,可以获得父组件传递过来的值-->
        {{itemFilter.title}}
        &nbsp;  &nbsp;  &nbsp;  &nbsp;
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
                <span v-if="scope.row.currentStatus =='0'">
                    <el-button size="mini" type="primary" circle icon="el-icon-minus"></el-button>
                </span>
                <span v-if="scope.row.currentStatus =='1'">
                    <el-button size="mini" type="success" circle icon="el-icon-check"></el-button>
                </span>
            </template>
        </el-table-column>
        <el-table-column
            prop=""
            label=""
            align="center"
            width="200">
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    export default {
        name: "ItemList",
        props:{
            itemFilter:{
                title:String,//定义参数类型
                currentStatus:String//定义参数类型
            }
        },
        data:function () {
            return{
                todos:[]
            }
        },
        mounted() {
            const userInfo =JSON.parse(localStorage.getItem('userInfo'))
            const params={
                userId:userInfo.userId,
                currentStatus: this.itemFilter.currentStatus
            };
            //headers:{tiken:token}
            // {params:params,headers:{token:token}}
            this.$axios.get("/todos",{params:params}).then(res=>{
                console.log(res.data)
                this.todos=res.data
            })
        }
    }
</script>

<style scoped>

</style>

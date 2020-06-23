<template>
    <!-- 在父组件给子组件props参数传值：绑定data里面定义的一个数据-->
    <ItemList :item-filter="itemFilter"></ItemList>
</template>

<script>
   import ItemList from "./ItemList"
    export default {
        name: "UndoList",
        data:function () {
            return{
                itemFilter:{
                    title:'未完成任务',
                    currentStatus:'0'
                }
            }
        },
         components:{
             ItemList
         }
    }
</script>

<style scoped>

</style>
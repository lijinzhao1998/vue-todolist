<template>
<div class="index">
<!--    有三部分组成：其位置由各组件的css定义-->
    <Header></Header>
    <Lefter></Lefter>

    <div class="container">
<!--        通过router-view加载其他组件-->
        <router-view></router-view>
    </div>
</div>
</template>

<script>
    import Header from "../common/Header";
    import Lefter from "../common/Lefter";
    export default {
        name: "AppIndex.vue",
        //在AppIndex中注册引入Header，在template可使用Header
        components: {Header,Lefter}
    }
</script>

<style scoped>
/*定义index页面的布局及样式*/
    .index{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .container{
        position: relative;
        top: 0;
        left: 180px;
        width: calc(100% - 180px);
        height: calc(100% - 71px);
        overflow: auto;
    }
</style>

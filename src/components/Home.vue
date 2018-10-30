<template>
    <div>
        <h2>获取的数据为{{receviedata}}</h2>
        <h1>home</h1>
        <p>
            <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/tablet">平板</router-link>
            <router-link to="/home/computer">电脑</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return{
                msg:"我是home组件",
                apiUrl:"/api/hello/home",
                receviedata : ""
            }
        },
        mounted(){
            console.log("加载完成了"+this.apiUrl)
            this.getData();
        },
        methods:{
            getData:function(){
            this.$http.get(this.apiUrl).then((response) => {
                console.log("请求到的数据为"+response.bodyText)
                this.receviedata = response.bodyText
            }).catch(function(response){
                console.log("捕获到的异常为"+response)})
            }
        }
    }
</script>
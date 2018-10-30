import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import home from "./components/Home.vue";
import about from "./components/About.vue";
import user from "./components/User.vue";
import phone from "./components/Phone.vue";
import tablet from "./components/Tablet.vue";
import computer from "./components/Computer.vue";


//告诉vue要使用VueRouter
Vue.use(VueRouter)

const routes = [
    {path: "/home",component: home,children:[
        {path: "phone",component:phone},
        {path: "tablet",component:tablet},
        {path: "computer",component: computer},
        {path: "",component:phone}
    ]},
    {path: "/about",component: about},
    {path: "/",redirect: '/home'},
    {path: "/user/:id",component: user}
]

const router = new VueRouter({routes})

export default router

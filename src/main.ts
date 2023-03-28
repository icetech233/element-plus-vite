import { createApp, Prop } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";

// mb-4 之类的简写
import 'uno.css'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

import "element-plus/theme-chalk/src/notification.scss"


// 1. 定义路由组件：这里直接用的对象数据，也可以导入其他组件。
const Main = { render() { return 'WEB 欢迎大家来学习各种技术知识！' } }
const Docs = { render() { return 'WEB-文档doc页面' } }

const Setting2 = () => import('~/components/Setting.vue');

const route_cfgs: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/index/main'
    },
    { path: '/index/main', name: "main", component: Main },
    { path: '/index/doc', name: "docs", component: Docs },
    { path: '/index/setting', name: "setting", component: Setting2 },
]

const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: route_cfgs, // `routes: routes` 的缩写
})

/// router.back()
/// router.forward();

const app = createApp(App).use(router);
// app.use(ElementPlus);

app.mount("#app");

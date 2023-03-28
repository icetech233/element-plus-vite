
<template>
    <h1>WEB-Setting页面 1234</h1>
    <h4>数字 {{ count }}</h4>
</template>

<script setup lang="ts">
import { ref ,reactive} from "vue";
import { ElMessage } from 'element-plus'

import {useRoute } from "vue-router";

const pRoute = useRoute();

// const dprops = defineProps<{ msg: string }>();

let count = ref(0);

count.value = count.value+1
//dprops.count = dprops.count +1

//count.value++;


// http://localhost:5173/#/index/setting?name=dsg&age=18
console.log("paramRoute=useRoute()",pRoute,pRoute.name,
pRoute.path,pRoute.query,pRoute.params)


// const toast = () => {
//   ElMessage.success('Hello')
// }
</script>

<style>
h1 {
    color: red;
}
</style>
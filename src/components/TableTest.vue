
<template>
  <h4  class="mb-8">{{ name }}</h4>
  <h2  class="mb-8">{{ msg }}</h2>

    <el-table :data="refTableData" 
      style="width: 100%" stripe>
      <el-table-column prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="名字" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="城市" width="120" />
      <el-table-column prop="address" label="地址" width="500" />
      <el-table-column prop="zip" label="Zip" width="120" />
    
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="aa">
          <el-button link type="primary" size="small" @click="handleClick(aa.$index,aa.row)"
            >Detail</el-button> 
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
  </el-table>

  <div class="mt-8">
    <el-text type="primary" class="mx-2">按钮区域</el-text>
  </div>

  <!-- example components -->
  <div class="mb-4 mt-8">
    <el-button size="large"
     @click="toast">{{ toastctx }}</el-button>
  </div>

  <p>For example, hanbindsg writrin.</p>
</template>

<script setup lang="ts">

import { ref, onMounted } from "vue"
import { ElMessage } from 'element-plus'
import axios, {isCancel, AxiosError,AxiosResponse,AxiosRequestConfig} from 'axios'

const dprops = defineProps<{ msg: string, name: string }>();

interface User {
  date: string
  name: string
  state: string
  city: string
  address: string
  zip: string
  tag: string
}

interface UserReq {
  name: string
}

const d1 : User[]= [{
    date: '2016-05-01',
    name: 'Tom1',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom2',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom3',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
}]

const refTableData = ref(d1)

const tableData :Array<User>= refTableData.value;

const toastctx = ref("通知按钮");
const count = ref(0);
//const input = ref("element-plus");


  // {
  //   let {status,data } = await axios.get('http://127.0.0.1:8081/domains/describe');
  //   console.log("\nstatus:",status,"\ndata:\n",data)
  // }

// mounted
onMounted(() => {
  
  console.log('Component is mounted!')
  
  domains_describe()
})

const domains_describe= async ()=>{
  let {status,data } = await axios.get('http://127.0.0.1:8081/domains/describe/records');
  console.log("\nstatus:",status,"\ndata:\n",data)
}

const toast = () => {
  let aa1 = dprops.msg
  toastctx.value = aa1// "点击了";
  ElMessage.info('你好')
}

const testreq= async () =>{
  {
    let req :UserReq = {name:"hanbindsg"}
    let { status,data } = await axios.post('http://127.0.0.1:8081/post?id=1&name=haha',req);
    console.log("\nstatus:",status,"\ndata:\n",data)
  }

  {
    let {status,data } = await axios.post('http://127.0.0.1:8081/post?id=2&name=hb',"name=hanbin");
    console.log("\nstatus:",status,"\ndata:\n",data)
  }

 
}

const handleClick = (index:any,row:any) => {
  console.log('click',index,row.name)

  let aa :User = {
    date: '2023-03-01',
    name: 'underfin',
    state: 'California',
    city: 'Hangzhou',
    address: 'No 111',
    zip: 'CA 90036',
    tag: 'Office',
  }

  aa.name = row.name + "hb"
  tableData.push(aa)

  testreq()

  // tableData.splice

  //tableData.flatMap

}

</script>

<style>


</style>

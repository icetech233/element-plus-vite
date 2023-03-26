
<template>
  <!-- background-color="red" -->
  <el-menu class="el-menu-demo"
    mode="horizontal" >

    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-sub-menu index="2">
      <template #title>工作区</template>
      <el-menu-item index="2-1">项目1</el-menu-item>
      <el-menu-item index="2-2">项目2</el-menu-item>
      <el-menu-item index="2-3">项目3</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>项目 4</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>菜单禁用</el-menu-item>
    
    <el-menu-item @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-sunny ep-moon " />
      </button>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="4" class="menu-test">菜单A</el-menu-item>
    <el-menu-item @click="exitClick()" >exit</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { toggleDark,isDark } from '~/composables'

const exitClick = () => {
  console.log('exit')
}

</script>

<style>
.menu-test{
  background-color: blueviolet;
  justify-content: center;
}
.flex-grow {
  flex-grow: 1;
}
</style>
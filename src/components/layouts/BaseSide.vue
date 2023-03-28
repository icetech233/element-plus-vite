<template>
  <el-menu 
    default-active="/index/main"
    class="el-menu-vertical-demo"
    router
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">项目1</el-menu-item>
        <el-menu-item index="1-2">项目2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">项目3</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>项目4</span></template>
        <el-menu-item index="1-4-1">项目1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/index/main" >
      <el-icon>
        <House />
      </el-icon>
      <template #title>Main</template>
    </el-menu-item>
    <el-menu-item index="/index/doc">
      <el-icon><Document /></el-icon>
      <template #title>
        <el-icon><QuestionFilled /></el-icon>
        <span style="margin-left: 8px;">Document</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/index/setting">
      <el-icon><IconSetting /></el-icon>
      <template #title>Setting</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  House,
  Location,
  Help,
  QuestionFilled,
  Document,
  Menu as IconMenu,
  Setting as IconSetting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log("open",key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log("close",key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo{
  width: 64px;
}
</style>

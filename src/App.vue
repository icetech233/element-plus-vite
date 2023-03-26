<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div>
        <div class="dd"></div>
        <TableTest name="hanbindsg" msg="msg content" />
      </div>
    </div>
  </el-config-provider>
</template>

<style>


#app {
  
  text-align: center;
  color: var(--ep-text-color-primary);
}

.dd {
  height: 20px;
  background: yellow;
}

.element-plus-logo {
  width: 50%;
}
</style>

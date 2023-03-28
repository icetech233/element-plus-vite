<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div class="right-area">

        <RouterView />
        <!-- <TableTest name="hanbindsg" msg="msg content" /> -->

        <div class="bottom-layer pt-2">
          <a>欢迎</a>
        </div>

      </div>
    </div>

  </el-config-provider>
</template>

<style lang="scss" scoped>
.right-area {
  background-color: aqua;
  width: calc(100% - 64px);
}

.bottom-layer {
  width: 100%;
  height: 30px;
  background-color: pink;
  position: fixed;
  bottom: 0%;
  z-index: 999;
}
</style>

<style>
#app {

  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>

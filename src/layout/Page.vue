<template>
  <el-container class="layout-container-wrapper">
    <el-aside width="200px">
      <el-scrollbar>
        <Nav />
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header class="header">
        <Toolbar />
      </el-header>

      <el-main>
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
import Nav from "./components/Nav.vue";
import Toolbar from "./components/Toolbar.vue";
</script>

<style scoped>
.layout-container-wrapper {
  height: 100vh;
}
.layout-container-wrapper .el-header {
  position: relative;
  background-color: #fff;
}
.layout-container-wrapper .el-aside {
}
.layout-container-wrapper .el-menu {
  border-right: none;
}
.layout-container-wrapper .el-main {
  padding: 0;
}
.layout-container-wrapper .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.header {
  text-align: right;
  font-size: 12px;
}
</style>

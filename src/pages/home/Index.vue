<template>
  <div>home</div>
  <el-button type="primary" @click="addTotal">{{ total }}</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/home";

const homeStore = useHomeStore();

const { addTotal } = homeStore;
const { total } = storeToRefs(homeStore);
</script>

<style scoped></style>

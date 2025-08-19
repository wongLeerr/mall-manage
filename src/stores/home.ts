import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomeStore = defineStore("home", () => {
  const total = ref(0);

  const addTotal = () => {
    total.value += 1;
  };

  return { total, addTotal };
});

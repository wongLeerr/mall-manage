import { defineStore } from "pinia";
import { ref } from "vue";

const useHomeStore = defineStore("home", () => {
  const total = ref(0);

  const addTotal = () => {
    total.value += 1;
  };
});

import { defineStore } from "pinia";

export const useModeStore = defineStore("modeStore", {
  state: () =>  {
    return {
      mode: localStorage.getItem("mode") ? parseInt(localStorage.getItem("mode")): 0
    }
  },
  actions: {
    changeMode(force_value = null) {
      this.mode = force_value !== null ? force_value : (this.mode === 0 ? 1 : 0);
      localStorage.setItem("mode", this.mode);
    }
  },
});
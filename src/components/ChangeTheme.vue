<template>
  <div class="change-button">
    <button @click="toggleTheme">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  name: "ChangeTheme",
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme")
    },
  },
}
</script>

<style>
.change-button {
  display: flex;
  justify-content: flex-end;
  padding: 5%;
}
.change-button button {
  background: none;
  border: none;
}
.switch {
  position: relative;
  display: inline-block;
  width: 76px;
  height: 34px;
}
.switch input {
  opacity: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #56698f 0%, #5e729a 100%);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  width: 76px;
  height: 20px;
}
.slider:before {
  content: url(/assets/change-btn.svg);
  position: absolute;
  left: -20px;
  bottom: -25px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background: rgba(239, 127, 26, 1);
}
input:checked + .slider:before {
  transform: translateX(90%);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>

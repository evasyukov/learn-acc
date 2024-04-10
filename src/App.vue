<template>
  <div class="left-menu">
    <Date />
  </div>
</template>

<script>
import Date from "./components/Date.vue"

export default {
  components: {
    Date,
  },
}
</script>

<style>
.left-menu {
  width: 30vw;
  height: 100%;
  background-color: #353d54;
  border-radius: 0 20px 20px 0;
  box-shadow: 4px 0px 10px 0px rgba(0, 0, 0, 0.25);
}
</style>

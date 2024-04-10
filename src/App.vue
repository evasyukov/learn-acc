<template>
  <div class="left-menu">
    <Date />
    <ChangeTheme />
    <InfoUser />
  </div>
</template>

<script>
import ChangeTheme from "./components/ChangeTheme.vue"
import Date from "./components/Date.vue"
import InfoUser from "./components/InfoUser.vue"

export default {
  components: {
    Date,
    ChangeTheme,
    InfoUser,
  },
}
</script>

<style>
.left-menu {
  width: 34.5vw;
  height: 100%;
  background-color: #353d54;
  border-radius: 0 20px 20px 0;
  box-shadow: 4px 0px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 0px;
  opacity: 0px;
}
</style>

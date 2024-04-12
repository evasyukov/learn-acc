<template>
  <div class="left-menu">
    <Date />
    <ChangeTheme />
    <InfoUser />
    <InfoMenu />
  </div>
  <div class="main-block">
    <MainBlock />
  </div>
</template>

<script>
import ChangeTheme from "./components/ChangeTheme.vue"
import Date from "./components/Date.vue"
import InfoUser from "./components/InfoUser.vue"
import InfoMenu from "./components/InfoMenu.vue"
import MainBlock from "./components/MainBlock.vue"

export default {
  components: {
    Date,
    ChangeTheme,
    InfoUser,
    InfoMenu,
    MainBlock,
  },
}
</script>

<style>
.left-menu {
  width: 37.5vw;
  height: 100vh;
  background-color: #353d54;
  border-radius: 0 20px 20px 0;
  box-shadow: 4px 0px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 0px;
  opacity: 0px;
}

</style>

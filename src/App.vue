<template>
  <div id="app2" :class="appClass">
    <div class="left-menu">
      <Date />
      <ChangeTheme />
      <InfoUser />
      <InfoMenu />
    </div>
    <div class="main-block">
      <MainBlock />
    </div>
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
  computed: {
    appClass() {
      return this.$store.state.theme === 'light' ? 'light-theme' : 'dark-theme'
    }
  }
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
#app2 {
  height: 100vh;
  display: flex;
  align-items: center;
}
.light-theme {
  background: linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%);
}
.dark-theme {
  background: linear-gradient(180deg, #56698f 0%, #5e729a 100%);
}
</style>

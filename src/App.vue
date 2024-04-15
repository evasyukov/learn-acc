<template>
  <div id="app2" :class="appClass">
    <div class="left-menu" :class="appClassMenu">
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
      return this.$store.state.theme === "dark" ? "light-theme" : "dark-theme" // проверка текущей темы для фона 
    },
    appClassMenu() {
      return this.$store.state.themeMenu === "darkMenu" // проверка текущей темы для меню слева
        ? "light-menu"
        : "dark-menu"
    },
  },
}
</script>

<style>
.left-menu {
  width: 37.5vw;
  height: 100vh;
  border-radius: 0 20px 20px 0;
  box-shadow: 4px 0px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 0px;
  opacity: 0px;
}

.dark-menu {
  background-color: #353d54;
}
.light-menu {
  background-color: #f2f2f2;
  & .date-time p,
  .exit p {
    color: #000;
  }
  & .exit img {
    filter: invert(100%);
  }

  & .info-user .info-user-list {
    background-color: #fff;
    & p {
      color: #000;
    }
  }
  & .info-menu .menu-item {
    background-color: #fff;
    & p,
    h4 {
      color: #000;
    }
    & img {
      filter: invert(100%);
    }
  }
}

#app2 {
  height: 100vh;
  display: flex;
  align-items: center;
}
.light-theme {
  background: #fff;
}
.dark-theme {
  background: linear-gradient(180deg, #56698f 0%, #5e729a 100%);
}
</style>

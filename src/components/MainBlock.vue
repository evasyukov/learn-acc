<template>
  <div class="menu" :class="{ visible: isVisible }">
    <router-link to="/start-work" class="button" @click="changeVisible()">
      <h1>Начать работу</h1>
      <img src="/assets/start-work.svg" alt="" />
    </router-link>
    <router-link to="/notifications" class="button" @click="changeVisible()">
      <h1>Уведомления</h1>
      <img src="/assets/messange.svg" alt="" />
    </router-link>
    <router-link to="/training" class="button" @click="changeVisible()"
      ><h1>Обучение</h1>
      <img src="/assets/training.svg" alt=""
    /></router-link>
    <router-link to="/achievements" class="button" @click="changeVisible()"
      ><h1>Достижения</h1>
      <img src="/assets/achievements.svg" alt=""
    /></router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "MainBlock",
  data() {
    return {
      isVisible: false, // флаг видимости
    }
  },
  methods: {
    changeVisible() {
      this.isVisible = !this.isVisible
    },
  },
}
</script>

<style>
.menu {
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
  /* display: none; */
}
.visible {
  display: none;
}
.button {
  padding: 5%;
  width: 10vw;
  height: 200px;
  background-color: rgba(239, 127, 26, 1);
  margin: 5%;
  color: #f2f2f2;
  text-decoration: none;
  font-family: Montserrat;
}
</style>

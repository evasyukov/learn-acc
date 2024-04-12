<template>
  <div class="menu" :class="{ visible: isVisible }">
    <router-link to="/start-work" class="button" @click="changeVisibility()">
      <h1>Начать работу</h1>
      <img src="/assets/start-work.svg" alt="Начать работу" />
    </router-link>
    <router-link to="/notifications" class="button" @click="changeVisibility()">
      <h1>Уведомления</h1>
      <img src="/assets/messange.svg" alt="Уведомления" />
    </router-link>
    <router-link to="/training" class="button" @click="changeVisibility()"
      ><h1>Обучение</h1>
      <img src="/assets/training.svg" alt="Обучение"
    /></router-link>
    <router-link to="/achievements" class="button" @click="changeVisibility()"
      ><h1>Достижения</h1>
      <img src="/assets/achievements.svg" alt="Достижения"
    /></router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  name: "MainBlock",
  computed: {
    ...mapState(["isVisible"]),
  },
  methods: {
    ...mapMutations(["changeVisibility"]),
  },
}
</script>

<style>
.menu {
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
}
.visible {
  display: none;
}
.button {
  padding: 3% 5% 5% 5%;
  width: 15vw;
  height: 18.2vh;
  background-color: rgba(239, 127, 26, 1);
  margin: 5%;
  color: #f2f2f2;
  text-decoration: none;
  font-family: Montserrat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  & h1 {
    margin-bottom: 6%;
    font-size: 3.4vh;
  }
  & img {
    width: 7vw;
    height: 50vh;
  }
}
</style>

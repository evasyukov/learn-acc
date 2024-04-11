<template>
  <div class="menu">
    <router-link to="/start-work" class="button">Начать работу</router-link>
    <router-link to="/notifications" class="button">Уведомления</router-link>
    <router-link to="/training" class="button">Обучение</router-link>
    <router-link to="/achievements" class="button">Достижения</router-link>
  </div>


</template>

<script>
export default {}
</script>

<style>
.button {
  width: 200px;
  height: 200px;
  background-color: rgba(239, 127, 26, 1);
}
</style>

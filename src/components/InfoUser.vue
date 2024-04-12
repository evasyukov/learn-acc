<template>
  <div class="info-user">
    <div class="info-user-list">
      <p style="font-size: 2vw">{{ user.name }}</p>
      <p style="font-size: 1.3vw; line-height: 5vh;">{{ user.birthDate }}</p>
      <p style="font-size: 1vw">{{ user.numUser }}</p>
      <p style="font-size: 1vw">{{ user.specialty }}</p>
    </div>
  </div>
</template>

<script>
import userData from "../userData.js" // Импорт данных пользователя

export default {
  name: "InfoUser",
  data() {
    return {
      user: userData, // Использование данных пользователя
    }
  },
}
</script>

<style scoped>
.info-user {
  color: rgba(242, 242, 242, 1);
  font-weight: 600;
  line-height: 3vh;
  padding: 0 5% 5% 5%;
}
.info-user-list {
  font-family: Montserrat;
  background-color: rgba(88, 108, 146, 1);
  padding: 3%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
</style>

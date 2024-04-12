<template>
  <div class="block">
    <div class="date-time">
      <p>{{ date }}</p>
      <p>{{ time }}</p>
    </div>
    <button class="exit">
      <router-link to="/exit" @click="changeVisibility()">
        <p>Выход</p>
      </router-link>
      <img src="../../assets/exit-icon.svg" alt="Выход" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  name: "Date",
  data() {
    return {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        // инициализация текущих даты и времени
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
  },
  mounted() {
    this.updateDateTime() // вызов функции обновления даты и времени при монтировании компонента
  },
  methods: {
    updateDateTime() {
      setInterval(() => {
        this.date = new Date().toLocaleDateString() // обновление даты каждую секунду
        this.time = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }) // обновление времени без секунд каждую секунду
      }, 1000)
    },
    ...mapMutations(["changeVisibility"]),
  },
}
</script>

<style scoped>
.block {
  display: flex;
  justify-content: space-between;
}
.date-time {
  width: 45%;
  padding: 4% 5% 0 5%;
}
p {
  color: rgba(242, 242, 242, 1);
  font-family: Montserrat;
  font-size: 1vw;
  font-weight: 700;
  /* text-align: left; */
}
.exit {
  margin-top: 3%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  & a {
    text-decoration: none;
  }

  & img {
    width: 2.1vw;
    height: 3.7vh;
  }

  & p {
    font-size: 1.3vw;
    font-weight: 400;
    line-height: 29.26px;
    text-align: left;
  }
}
</style>

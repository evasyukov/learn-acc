<template>
  <div class="block">
    <div class="date-time">
      <p>{{ date }}</p>
      <p>{{ time }}</p>
    </div>
    <button class="exit">
      <p>Выход</p>
      <img src="../../assets/exit-icon.svg" alt="exit" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toLocaleDateString(), // Инициализация текущей даты
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }), // Инициализация текущего времени
    }
  },
  mounted() {
    this.updateDateTime() // Вызов функции обновления даты и времени при монтировании компонента
  },
  methods: {
    updateDateTime() {
      setInterval(() => {
        this.date = new Date().toLocaleDateString() // Обновление даты каждую секунду
        this.time = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }) // Обновление времени без секунд каждую секунду
      }, 1000)
    },
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
  padding: 5%;
}
p {
  color: rgba(242, 242, 242, 1);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.38px;
  text-align: left;
}
.exit {
  margin-top: 3%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
}
.exit img {
  width: 40px;
  height: 40px;
}
.exit p {
  /* font-family: Montserrat; */
  font-size: 24px;
  font-weight: 400;
  line-height: 29.26px;
  text-align: left;
}
</style>

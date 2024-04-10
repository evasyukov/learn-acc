<template>
  <div class="date-block">
    <p>{{ date }}</p>
    <p>{{ time }}</p>
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
.date-block {
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
</style>

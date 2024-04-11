<template>
  <div class="info-menu">
    <div class="menu-item">
      <div class="title">
        <h4>Инструктаж</h4>
      </div>
      <div class="info">
        <img src="/assets/info-menu/document.svg" alt="" />
      </div>
    </div>
    <div class="menu-item">
      <div class="title">
        <h4>Предсменный экзаменатор</h4>
      </div>
      <div class="info">
        <img src="/assets/info-menu/exam.svg" alt="" />
      </div>
    </div>
    <div class="menu-item">
      <div class="title">
        <h4>Тестов выполнено</h4>
      </div>
      <div class="info">
        <p style="font-size: 5vh">{{ amountTests }}</p>
      </div>
    </div>
    <div class="menu-item">
      <div class="title">
        <h4>Аттестация через</h4>
      </div>
      <div class="info">
        <p class="daysExam" :class="chekDays">{{ daysExam }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoMenu",
  data() {
    return {
      amountTests: 122, // Количество пройденных тестов
      daysExam: 99, // Количество оставшихся дней до аттестации
    }
  },
}
</script>

<style scoped>
.info-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.menu-item {
  width: 14vw;
  height: 21.5vh;
  color: rgba(242, 242, 242, 1);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background: #5e729a;
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.info {
  border: 0.5vw solid rgba(178, 214, 60, 1);
  border-radius: 50%;
  width: 40%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 45px;
  font-weight: 600;
  line-height: 3vh;
}
h4 {
  font-size: 2.3vh;
}
.daysExam {
  font-size: 4vh;
}
.daysExam::after {
  content: "дней";
  font-size: 1.2vw;
}
.title {
  padding: 5%;
}
</style>

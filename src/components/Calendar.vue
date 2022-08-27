
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="calender-box ">
          <h1 class="text-center">{{ msg }}</h1>
          <section class="d-flex justify-content-between">
            <h2>{{monthName}}</h2>
            <h2>{{currentYear}}</h2>
          </section>
          <section class="d-flex text-center">
            <p style="width: 158px" v-for="day in days">{{day}}</p>
          </section>
          <section class="d-flex flex-wrap text-center day_section">
            <p style="width: 158px" v-for="num in startDay()"></p>
            <p style="width: 158px"  v-for="num in daysInMonth(currentYear, currentMonth)"><span :class="{active_date: num == current_date && selfMonth == currentMonth}">{{num}}</span></p>
          </section>
          <section class="d-flex justify-content-between">
            <button @click="prevCurrentMonth()">Prev</button>
            <button @click="nextCurrentMonth()">Next</button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

defineProps({
  msg: {
    type: String,
    required: true
  }
})
const days = ref('');
const month = ref('');
const currentMonthName = ref('');
const currentMonth = ref('');
const selfMonth = ref('');
const currentYear = ref('');
const current_date = ref('');
days.value = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
currentMonth.value= month.value= new Date().getMonth();
selfMonth.value= month.value= new Date().getMonth();
currentMonthName.value= new Date().toLocaleString('default', {month: 'long'});
current_date.value = new Date().getDate();

currentYear.value= new Date().getFullYear();
const daysInMonth = (currentYear, month) => {
  return new Date(currentYear,  month, 0).getDate();
}
const startDay = () => {
  return new Date(currentYear.value, currentMonth.value).getDay();
}
const prevCurrentMonth= () => {

  currentMonth.value--;
}

const nextCurrentMonth= () => {
  currentMonth.value++;
};

const monthName = computed(() => {
  return new Date(
      currentYear.value,
      currentMonth.value
  ).toLocaleString("default", { month: "long" });
});

</script>
<style scoped>
.active_date{
  font-weight: bold;
  color:red;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>


<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 ">
        <div class="table-wrapper">
          <table class="table">
            <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td>{{user.id}}</td>
              <td><img :src="user.avatar" alt=""></td>
              <td>{{user.first_name}}</td>
              <td>{{user.email}}</td>
            </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, onMounted, reactive} from "vue";
import axios from "axios";
const data = ref({});
const state =  reactive({
  users: [],
})
onMounted(async () => {
  const { data } =  await axios.get('https://reqres.in/api/users');
  state.users = data.data;
})

const next = async () => {
  const { data } = await axios.get('https://reqres.in/api/users?page=2');
  state.users = data.data;
}

const prev = async () => {
  const { data } = await axios.get('https://reqres.in/api/users?page=1');
  state.users = data.data;
}

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
.table-wrapper {
  width: 500px;
}
table {

}
table thead tr {
  background: #f2f2f2;
}
table th {
  font-weight: 700;
}
table th,table td {
  border: 1px solid #ddd;
  padding: 10px;
  width: 25%;
  vertical-align: middle;
  text-align: center;
}

img {
  border-radius: 50%;
  width: 50px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

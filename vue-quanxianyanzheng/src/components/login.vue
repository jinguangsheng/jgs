<template>
  <div class="login">
    <li>
      <input type="text" v-model="user.userName">
    </li>
    <li>
      <input type="password" v-model="user.password">
    </li>
    <button @click="login()">登录</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      console.log(this.user.userName);
      if (this.user.userName && this.user.password) {
        try {
          const result = await axios.post(
            "http://api.cat-shop.penkuoer.com/api/v1/auth/manager_login",
            {
              userName: this.user.userName,
              password: this.user.password
            }
          );
          if (result.data.code == "success") {
            localStorage.setItem("token", result.data.token);
          } else {
            alert(result.data.message);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
};
</script>

<style>
</style>

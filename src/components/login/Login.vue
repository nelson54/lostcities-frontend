<template>
  <b-form>
    <b-form-group label="Login" label-for="login" label-size="sm">
      <b-form-input id="login" v-model="login"></b-form-input>
    </b-form-group>
    <b-form-group label="Password" label-for="password" label-size="sm">
      <b-form-input type="password" id="password"></b-form-input>
    </b-form-group>
    <b-form-group label="Remember Me" label-for="remember-me" label-size="sm">
      <b-form-checkbox v-model="rememberMe" id="remember-me"></b-form-checkbox>
    </b-form-group>
    <b-button variant="outline-primary">Login</b-button>
    <p>
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </b-form>
</template>

<script>
import LoginService from "./login-service";
export default {
  name: "login",
  data: function () {
    return {
      login: "",
      password: "",
      rememberMe: false,
    };
  },
};
</script>
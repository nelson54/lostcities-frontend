<template>
  <b-form>
    <b-form-group>
      <b-form-input id="login" v-model="login" placeholder="Login"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input type="password" id="password" placeholder="password"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-checkbox v-model="rememberMe" id="remember-me">Remember Me</b-form-checkbox>
    </b-form-group>
  
    <b-button variant="outline-primary" class="btn-block">Login</b-button>
    <p>
          Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </b-form>
</template>

<script>
import AccountsService from "../../common/accounts-service";
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
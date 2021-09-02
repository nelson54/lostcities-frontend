<template>
  <b-form>
    <b-form-group label="Login" label-for="login">
      <b-form-input id="login" v-model="login"></b-form-input>
    </b-form-group>
    <b-form-group label="Email" label-for="email">
      <b-form-input id="email" v-model="email"></b-form-input>
    </b-form-group>
    <b-form-group label="First Name" label-for="first-name">
      <b-form-input id="first-name" v-model="firstName"></b-form-input>
    </b-form-group>
    <b-form-group label="Last Name" label-for="last-name">
      <b-form-input id="last-name" v-model="lastName"></b-form-input>
    </b-form-group>
    <b-form-group label="Password" label-for="password">
      <b-form-input type="password" id="password"></b-form-input>
    </b-form-group>
    <b-button variant="outline-primary">Login</b-button>
  </b-form>
</template>

<script>
import LoginService from "./login-service";
export default {
  name: "login",
  data: function () {
    return {
      login: "",
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    }
  }
};
</script>
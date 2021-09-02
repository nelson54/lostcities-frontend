<template>
  <b-form>
    <b-form-group label="Login" label-for="login" label-size="sm">
      <b-form-input id="login" v-model="login"></b-form-input>
    </b-form-group>
    <b-row>
      <b-col>
        <b-form-group label="First Name" label-for="first-name" label-size="sm">
          <b-form-input id="first-name" v-model="firstName"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Last Name" label-for="last-name" label-size="sm">
          <b-form-input id="last-name" v-model="lastName"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-form-group label="Email" label-for="email" label-size="sm">
      <b-form-input id="email" v-model="email"></b-form-input>
    </b-form-group>
    <b-form-group label="Password" label-for="password" label-size="sm">
      <b-form-input type="password" id="password"></b-form-input>
    </b-form-group>
    <b-button variant="outline-primary">Register</b-button>
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
      password: "",
    };
  },
};
</script>
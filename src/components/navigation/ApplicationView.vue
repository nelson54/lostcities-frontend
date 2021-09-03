<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-nav-item to="/login">Login</b-nav-item>
    </b-navbar>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>
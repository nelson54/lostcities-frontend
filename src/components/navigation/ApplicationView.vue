<template>
  <div id="app">
    <h1>Basic</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
    <button id="navigate-btn" @click="navigateAndIncrement">On Success</button>
    <pre id="counter">{{ n }}</pre>
    <pre id="query-t">{{ $route.query.t }}</pre>
    <pre id="hash">{{ $route.hash }}</pre>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<template>
  <div id="app">
    <h1>Basic</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/foo">/foo</router-link></li>
      <li><router-link to="/bar">/bar</router-link></li>
      <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
        <a>/bar</a>
      </router-link>
      <li><router-link :to="encodeURI('/é')">/é</router-link></li>
      <li><router-link :to="encodeURI('/é?t=%ñ')">/é?t=%ñ</router-link></li>
      <li><router-link :to="encodeURI('/é#%ñ')">/é#%25ñ</router-link></li>
      <router-link to="/foo" v-slot="props" custom>
        <li :class="[props.isActive && 'active', props.isExactActive && 'exact-active']">
          <a :href="props.href" @click="props.navigate">{{ props.route.path }} (with v-slot).</a>
        </li>
      </router-link>
      <li><router-link to="/foo" replace>/foo (replace)</router-link></li>
      <li><router-link to="/query/A%25">/query/A%</router-link></li>
      <li><router-link to="/?delay=200">/ (delay of 500ms)</router-link></li>
      <li><router-link to="/foo?delay=200">/foo (delay of 500ms)</router-link></li>
    </ul>
    <button id="navigate-btn" @click="navigateAndIncrement">On Success</button>
    <pre id="counter">{{ n }}</pre>
    <pre id="query-t">{{ $route.query.t }}</pre>
    <pre id="hash">{{ $route.hash }}</pre>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
let component = {}

export default component

export meta {
    layout: component
}
</script>
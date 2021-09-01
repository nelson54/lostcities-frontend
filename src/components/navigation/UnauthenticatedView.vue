<template>
    <div id="app">
        <h1>Not authenticated</h1>
        <div>
          <slot />
        </div>
    </div>
</template>

<script>
let component = {}

export default component

export let meta = {
    layout: component
}
</script>
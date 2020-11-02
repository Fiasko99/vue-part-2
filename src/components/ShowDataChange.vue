<template>
  <div>
      <button v-on:click="show = !show" class="btn">Part 1</button>
      <transition name="fade">
      <div v-if="show" class="text-center">
          <h1>{{message}}</h1>
          <input type="text" v-model="message">
          <pre>{{ $data }}</pre>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
data() {
  return {
    message: 'Hello world!',
    show: false
  }
}
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
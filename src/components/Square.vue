<template>
  <div>
      <button v-on:click="show = !show" class="btn">Part 4</button>
      <transition name="fade">
      <div v-if="show">
          <hr>
          <button v-on:click="squareShow = !squareShow" class="btn">
          {{squareShow ? 'Hide' : 'Show'}}
          </button>
          <transition name="fade">
          <div class="square" v-show="squareShow"></div>
          </transition>
          <hr>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      squareShow: false,
    }
  }
}
</script>

<style scoped>
 .square {
    background-color: blueviolet;
    width: 40vw !important;
    height: 40vw !important;
    margin: 1rem 30%;
  }
</style>
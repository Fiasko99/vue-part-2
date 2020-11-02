<template>
  <div>
      <button v-on:click="show = !show" class="btn">Part 2</button>
      <transition name="fade">
      <ul v-if="show">
          <li 
          v-for="bear in bears" 
          v-bind:key="bear.id" 
          v-bind:class="{'strike': bear.status}"
          >{{bear.name}}</li>
      </ul>
      </transition>
  </div>
</template>

<script>
export default {
data() {
  return {
    bears: [
        {id: 1, name: 'Гризли', status: false},
        {id: 2, name: 'Белый', status: false},
        {id: 3, name: 'Панда', status: false},
        {id: 4, name: 'Губач', status: true}
      ],
    show: false
  }
}
}
</script>

<style scoped>
.strike {
  text-decoration: line-through;
  color: #aaa;
}
</style>
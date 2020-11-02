<template>
  <div>
      <button v-on:click="show = !show" class="btn">Part 3</button>
      <transition name="fade">
        <form @click.prevent v-if="show">
          <hr>
          <button v-on:click="onClick" class="btn">Click</button>
          <div class="form-group">
            <label for="newmsg" class="msg-label">New message:</label>
            <input 
              id="newmsg"
              type="text" 
              v-model="newMassage" 
              v-on:keyup.13="onClick"
              class="text-input"
            >
          </div>
          <hr>  
        </form>
      </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMassage: 'New msg',
      show: false
    }
  },
  methods: {
      onClick() {
        console.log(this.newMassage)
      }
    }
}
</script>

<style scoped>
.form-group {
  position: relative;
  margin: 1rem 15%;
  width: 70%;
}
.msg-label {
  position: absolute;
  left: 1.5em;
  color: #fff;
}
</style>
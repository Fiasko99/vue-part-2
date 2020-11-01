<template>
  <div id="app">
    <button v-on:click="part1 = !part1" class="btn">Part 1</button>
    <transition name="fade">
      <div v-if="part1" class="text-center">
        <h1>{{message}}</h1>
        <input type="text" v-model="message">
        <pre>{{ $data }}</pre>
      </div>
    </transition>

    <button v-on:click="part2 = !part2" class="btn">Part 2</button>
    <transition name="fade">
      <ul v-if="part2">
        <li 
          v-for="bear in bears" 
          v-bind:key="bear.id" 
          v-bind:class="{'strike': bear.status}"
        >{{bear.name}}</li>
      </ul>
    </transition>

    <button v-on:click="part3 = !part3" class="btn">Part 3</button>
    <transition name="fade">
      <form @click.prevent v-if="part3">
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

    <button v-on:click="part4 = !part4" class="btn">Part 4</button>
    <transition name="fade">
      <div v-if="part4">
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
  name: 'App',
  data() {
    return {
      message: 'Hello world!',
      newMassage: 'New msg',
      bears: [
        {id: 1, name: 'Гризли', status: false},
        {id: 2, name: 'Белый', status: false},
        {id: 3, name: 'Панда', status: false},
        {id: 4, name: 'Губач', status: true}
      ],
      index: 1,

      part1: false,
      part2: false,
      part3: false,
      part4: false,

      squareShow: false,
    }
  },
  components: {

  },
  methods: {
    onClick() {
      console.log(this.newMassage)
    }
  }
}
</script>

<style>
body {
  background-color: #3949ab;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: #272727;
}
ul {
  list-style: none;
  margin: 10px auto 0;
  background-color: #fff;
  padding: 6px 0;
  border-radius: 2px;
}

li {
  display: block;
  padding: 20px 30px;
}

li:last-child {
  border-bottom: none;
}

.strike {
  text-decoration: line-through;
  color: #aaa;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.btn { 
  padding: 10px 2rem; 
  border-radius: 5px;
  border: 2px solid #ccc;
  background-color: #fff;
  margin: 1em 40%;
  width: 20%;
  cursor: pointer;
  font-weight: bolder;
}
.btn:focus {
  outline: none;
}
.btn:active {
  border: 3px solid #888;
  padding: 9px calc(2rem - 1px);
}
.text-center {
  text-align: center;
}
.form-group {
  position: relative;
  margin: 1rem 15%;
  width: 70%;
}
.text-input {
  padding: 10px 0;
  border-radius: 5px;
  border: 2px solid #ccc;
  background-color: #fff;
  margin: 2rem 0;
  width: 100%;
  text-align: center;
  font-size: 24px;
}
.text-input:focus {
  outline: none;
  border: 2px solid #888;
}
.msg-label {
  position: absolute;
  left: 1.5em;
  color: #fff;
}
.square {
  background-color: blueviolet;
  width: 40vw !important;
  height: 40vw !important;
  margin: 1rem 30%;
}
hr {
  width: 80%;
  color: #888;
}
</style>

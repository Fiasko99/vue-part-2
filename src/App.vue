<template>
  <div id="app">
    
    <ShowDataChange />
    <TodosList />
    <KeyUpEnter />
    <Square />
    <MenuBar />
    <FilterVue />
    <MathProps />

  </div>
</template>

<script>
import ShowDataChange from "./components/ShowDataChange";
import TodosList from "./components/TodosList";
import KeyUpEnter from "./components/KeyUpEnter";
import Square from "./components/Square";
import MenuBar from "./components/MenuBar";
import FilterVue from "./components/FilterVue";
import MathProps from "./components/MathProps";

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    ShowDataChange, TodosList,
    KeyUpEnter, Square,
    MenuBar, FilterVue,
    MathProps
  }
}
</script>

<style>
body {
  background-color: #3949ab;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: #272727;
  margin: 0;
  padding: 0;
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

hr {
  width: 80%;
  color: #888;
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
</style>

<template>
  <div>
      <button v-on:click="show = !show" class="btn">Part 5</button>
      <transition name="fade">
        <div v-if="show" style="position: relative; width: 100%;">
          <header>
            <button v-on:click="newSquare = !newSquare" class="btn-square">
              <ion-icon name="grid-outline"></ion-icon>
            </button>
          </header>

          <transition name="slide">
            <aside v-show="newSquare">
              <ul>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
                <li>link 4</li>
              </ul>
            </aside>
          </transition>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSquare: false,
      show: false
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 80;
  background-color: #fff;
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,.095);
  padding: 8px 16px;
  overflow: hidden;
  box-sizing: border-box;
}
aside {
  background-color: #fff;
  padding: 20px 0;
  width: 250px;
  height: 20vh;
  overflow: auto;
  position: absolute;
  top: 55px;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
}
aside h2{
  font-weight: 300;
  color: #afafaf;
}
.btn-square {
  position: absolute;
  top: 4px;
  padding: 6px;
  background-color: transparent;
  width: 48px;
  height: 48px;
  border: 0;
  margin: 0;
  font-size: 36px;
  outline: none;
  color: #9f9f9f;
  cursor: pointer;
  border-radius: 50%;
  transition: all .3s ease-in-out;
}
.btn-square:active {
  background-color: rgba(0, 0, 0, .1);
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.slide-enter, .slide-leave-to {
  left: -100%;
}
</style>
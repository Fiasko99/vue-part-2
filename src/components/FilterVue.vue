<template>
  <div>
    <button v-on:click="show = !show" class="btn">Part 6</button>

    <transition name="fade"> 
      <div v-if="show">
        {{ 'UpperCaseFilter' | uppercase}}
        {{ 'LowerCaseFilter' | lowercase}}
        {{ 500 | currency }}
        {{ 500 | currency('¥') }}
        {{ 500 | currency('¥', 0) }}
        
        <ul>
          <li v-for="user in orderBy(users, 'name')" :key="user.id">{{user.name}}, {{user.age}}</li>
        </ul>
        <ul>
          <li v-for="user in orderBy(users, 'age')" :key="user.id">{{user.name}}, {{user.age}}</li>
        </ul>
        <ul>
          <li v-for="user in orderBy(users, 'name', 'age')" :key="user.id">{{user.name}}, {{user.age}}</li>
        </ul>
        <ul>
          <li v-for="user in orderBy(users, 'name', 'age', -1)" :key="user.id">{{user.name}}, {{user.age}}</li>
        </ul>

        <input type="text" v-model="input" autofocus class="text-input" placeholder="Фильтровать по:">
        <ul>
          <li v-for="user in filterBy(users, input)" :key="user.id">{{user.name}}, {{user.age}}</li>
        </ul>

        <div style="position: relative; margin-top: 10px;"> 
          <textarea v-model="htmlfilter" style="position: absolute; left: 0; width: 50%; resize: none;" rows="20" ></textarea>
          <div v-html="$marked(htmlfilter)" style="position: absolute; left: 51%; width: 50%; top: -15px;"></div>
        </div>

        <div style="position: relative; margin-top: 10px;"> 
          <textarea v-model="emojifilter" style="position: absolute; left: 0; width: 50%; resize: none;" rows="20" ></textarea>
          <div style="position: absolute; left: 51%; width: 50%;" v-html="emoji(emojifilter)"></div>
        </div>
      </div>
    </transition>

    
    
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      show: false,
      input: '',
      htmlfilter: `
# HTML code compiled
---
- Один
- Два
      `,
      emojifilter: `единорог и щенок в огне это грустно`,
      users: [
        {id: 1, name: 'Ivan', age: 45},
        {id: 2, name: 'Maks', age: 19},
        {id: 3, name: 'Petr', age: 29},
        {id: 4, name: 'Vova', age: 20},
      ]
    }
  },
  methods: {
    emoji(value) {
      return value.replace('единорог', '&#129412;')
                  .replace('щенок', '&#128054;')
                  .replace('огне', '&#128293;')
                  .replace('грустно', '&#128546;')
    }
  }
}
</script>

<style>

</style>
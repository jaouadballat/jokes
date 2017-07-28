<template>
  <div id="app">
  <h3>Jokes</h3>
	<button class="btn btn-primary" @click="initJokes">Add ten random jokes</button>
	<button class="btn btn-primary" @click="addJoke">Random joke</button>
	<div class="col_md_12">
		<Joke v-for="(joke, index) in $store.state.jokes" :joke="joke" :key="index" :index="index"></Joke>
	</div>
  </div>
</template>

<script>
import Joke from './components/Joke.vue'
import {mapActions} from 'vuex'

export default {
 	methods: mapActions(['initJokes', 'addJoke']),
 	components:{
 		Joke
 	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

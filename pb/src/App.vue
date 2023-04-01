<template>
  <div>
    <router-view />
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {},

  computed: mapState(['count']),
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

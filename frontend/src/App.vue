<template>
  <div id="app">
    <router-view/>
    <areaPesquisa/>

  </div>
</template>

<script>
import areaPesquisa from "@/components/area-superior/area-pesquisa"

export default {
  name: 'App',
  components:{areaPesquisa}
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
</style>

<template>
  <div id="app">
    <router-view/>
     <v-container>
        <area-pesquisa/>       
        <v-layout row>
          <v-flex xs3 md3>
              <menu-lateral/>
              
          </v-flex>
          <v-flex xs9 md9 >
              <conteudo/>
          </v-flex>
        </v-layout>
        
     </v-container>
      
  </div>
</template>

<script>
import areaPesquisa from "@/components/area-superior/area-pesquisa"
import menuLateral from "@/components/menu-lateral/menu-lateral"
import conteudo from "@/components/conteudo/conteudo"

export default {
  name: 'App',
  components:{areaPesquisa, menuLateral,  conteudo}
}
</script>

<style>
body{
  background-color:#ededed;

}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
